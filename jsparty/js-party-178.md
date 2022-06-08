**Jerod Santo:** Welcome back, one and all, to another episode of JS Party. We have an exciting show for you today. Now, admittedly, I say that every episode, but I really truly mean it this time...

**Kevin Ball:** Jerod's excited.

**Jerod Santo:** ...because we are joined by Eric Simons from StackBlitz. StackBlitz recently made waves with a huge announcement I think around May 21st, in conjunction with Google I/O, about this new technology they've been working on to help us run Node.js in our browsers natively. So we'll talk about what all that means.

First of all, Eric, thanks for joining us.

**Eric Simons:** Yeah, thanks for having me. I'm excited to be here with you all.

**Jerod Santo:** And we also have long-time contributor but not recent contributor - hey, it's Christopher "b0neskull" Hiller. Chris, you're back!

**Christopher Hiller:** I am... I think. Here I am... I think.

**Jerod Santo:** From outer space.

**Christopher Hiller:** Yeah.

**Jerod Santo:** Welcome back to the show.

**Christopher Hiller:** Thank you.

**Jerod Santo:** And Kball's here... What's up, Kball?

**Kevin Ball:** Hey, hey! Glad to be here.

**Jerod Santo:** So let's start by getting excited, and then we'll talk about technology, and maybe we'll dig in, maybe we'll get less excited... Or maybe we'll get more excited. We'll see what happens throughout the show.

**Christopher Hiller:** I don't really get excited.

**Jerod Santo:** Alright, so just be quiet over there, Chris \[unintelligible 00:03:17.06\] I'll get excited.

**Eric Simons:** Challenge accepted!

**Christopher Hiller:** Okay.

**Jerod Santo:** \[laughs\] Eric, if you can get Chris excited by the end of this show, you pretty much can just raise another round of funding probably immediately.

**Eric Simons:** \[laughs\] Deal. This sounds good.

**Jerod Santo:** Alright.

**Eric Simons:** Let's do it.

**Jerod Santo:** The announcement was web containers, which like I said in the opening, lets us run Node.js natively in the browser... So we'll dig into how it works, and how you're building this, and we'll talk future, but let's just start off with what does it mean when you all say "natively". Node natively in the browser. Tell us what that means.

**Eric Simons:** Yeah, it's essentially running a direct API parity version of Node in your browser. It's actually \[unintelligible 00:03:56.18\] toolchain that will take Node.js, the source code itself, built from source, and actually pull it out, and -- I guess, let me take a step back. When you look at Node.js, if you've kind of dug into how Node.js works, when you require the fs module, the first thing that it does - you're actually touching JavaScript code. Node's built-in packages are just JavaScript code. But they inevitably have to pass over into native code on your local machine. It's like with C++ and that sort of thing.

\[04:29\] So essentially what we've done at a very high level is the JavaScript stuff will just work -- you know, browsers can run JavaScript, but how do you run C++ in the browser? Well, you convert it to WebAssembly.

So at a very high level what we've done here is the parts of Node.js that punch into your native operating system for \[unintelligible 00:04:44.22\] file system networking etc. we've written a WebAssembly operating system layer that actually provides those services. But actually if you go and inspect source on it and compare the Node.js runtime code against -- I think right now we support Node 14.6,or something like that... Compare that against raw source, it's one to one. So it's actually Node.js itself.

**Kevin Ball:** So when you're doing that, when you're running JavaScript -- like, Node packages up an implementation of V8 that it compiles.

**Eric Simons:** Yup.

**Kevin Ball:** Are you running using that packaged V8 code running as WebAssembly, or are you cutting straight through to the browser's version of the JavaScript interpreter?

**Eric Simons:** Yeah, a really good question. So this comes down to "How is it so fast?" If you rewind back to the origin of Node.js itself... You know, the web is awesome; JavaScript is awesome. We wanted to use it to build stuff not just on the web, we wanted to use it to build local applications. And browsers though have to be really secure, they have to be really fast. So to add APIs that expand capabilities takes time to do right, because the blast radius is really large. Anytime you open a browser tab, you're downloading and executing code.

So Ryan Dahl -- the fastest path to bring JavaScript to local was to pull V8 out of Chrome, and bring it to local. But we had this divergence where now when you run a local toolchain, you are running multiple copies V8. Every node process has its own copy of V8 running, and usually there's a dozen processes when you're doing dev, or something... If you're using VS Code, or Atom, or whatever, that's Chromium, for Electron, so you're running another copy of V8 in that thing, and then you're previewing your app in Chrome itself, and that's another copy of it.

So you have dozens of independent copies of V8 running, which is a huge inefficiency. So the key insight we had is that you can actually yield much better performance and security by kind of converging all these things that have diverged over the past decade, and use this single copy of V8 in Chrome. It's a lot faster, it's more secure. That version of V8 is evergreen. If you install Node 10 or whatever, that version of V8 is out of date. There have been security fixes that have been shipped for it.

So by actually leveraging what's in your browser, you're getting all the benefits of the fact that Google is investing hundreds of millions of dollars into making this the most secure runtime on the planet.

So at a technical level, that's the long answer to "Yeah, absolutely." So this is actually a really big deal, because what makes our local tool chains really insecure is that we had to diverge from being able to run this stuff in a browser and just leveraging the existing engine to bring it to local ten years ago. And now we're bringing it back, and you're kind of completing the loop there.

**Kevin Ball:** To make sure I understand what you're saying is that any JavaScript that's being executed is actually being run by the browser's version of V8...

**Eric Simons:** Correct.

**Kevin Ball:** ...and you're then essentially providing any of Node's library functions that happen to be implemented in C++ as available in WebAssembly?

**Eric Simons:** Yeah, more or less. I think there's parts of what V8 does, there's certain things that we have to port that -- we don't have access to the V8 API in the browser, for security reasons. But there are things that we can actually pull out and make run independently in a browser to provide that same sort of functionality.

\[07:58\] Essentially, you lean on the existing V8 APIs available in a browser, or any browser engine, for that matter, or for things that you can't do, that are a bit more lower-level, you port them over in WebAssembly and actually use that as the target runtime there.

**Christopher Hiller:** So there's a ton of C++ code in Node.js that talks directly to V8 then... And if you're running this in WebAssembly, you don't have access to those APIs. Is that what you're saying?

**Eric Simons:** Out of the box, yeah. And this is what took a long time for us to get right, is creating operating system interfaces where we could compile out the parts where Node.js does touch native into something that could run in WebAssembly, on top of a WebAssembly operating system... If that makes sense.

**Jerod Santo:** Do you follow that, Chris? You look confused.

**Christopher Hiller:** No...

**Jerod Santo:** \[laughs\]

**Christopher Hiller:** Okay, so in Node and C++ there are all these calls to V8, directly to V8. This is why the Node Chakra project was a big effort, and they wanted to be able to decouple Node from V8. But that lost steam, it was a big undertaking...

**Eric Simons:** Yeah.

**Christopher Hiller:** So did you have to go in there and patch Node to actually rip out those calls, or did you create an adaptor, say in the operating system, or I don't even know where exactly... But Node would get these V8 APIs from something that pretends to be V8... Do you know what I'm saying?

**Eric Simons:** Yeah, totally. It's a bit of both... And there's still a lot of things that we're doing in R&D on this front. But the short of it... In certain places it doesn't make sense for those to call out to V8, because if you're trying to create a new date object - this is an absolutely arbitrary example - your browser can do that pretty well. In those cases we'll just short-circuit it and actually just leverage the existing stuff that the browser comes with. And there's a lot of things that you can do that with, right? There are more lower-level things though, like file system calls and things like that... People have tried to do this before, where they take polyfills and are like "We're gonna polyfill the surfaces." And the problem is that the runtime of Node is pretty specific in ways that aren't even -- like, they're incidental. It's not standardized, it's incidental, and people have built on top of that now. So it's not just a matter of having all the APIs, you kind of need the real thing to run. Or at least in the exact same way it went on local.

You hit the nail on the head, this is exactly the big challenge in doing something like this, "Where do you draw the line? Do we port this to go into WebAssembly, or do we swap it out for something that's gonna leverage the browser's native capabilities?"

**Christopher Hiller:** Sure, right. So those V8 calls - yeah, maybe Node is creating a JavaScript object, but it's doing it in C++, and that's what it needs a V8 for, right? So you can rip that out and you can actually just have JavaScript do it, right? Because there you go; we already have a V8 running in the browser. What we can't just fake or rip out is stuff like filesystem APIs, things like -- I'm curious, what about libuv, what about the dependencies of Node? What about OpenSSL, what about things like that? Is that part of what you had to compile down to WebAssembly as well?

**Eric Simons:** Those all actually have different answers. But something like libuv - again, browsers have a built-in event loop implementation. If you look across, obviously all of them do. It's kind of a key part of making JavaScript work.

So being able to leverage the existing event loops that your browsers have - that's one thing where you can drop libuv as something that's gotta be compiled. I think one of the key things that we did, that there was not any prior art on, is actually getting a full TCP networking stack tied up to this, where you can start HTTP servers that are programmatically controlled entirely in the browser security sandbox.

So for things like that, that's more on the operating system side - how do we actually create a virtualized TCP networking stack that maps to the service worker API? For those, we're kind of tied to core Node internals there to, again, operating system interfaces that you would get on a POSIX sort of system.

**Christopher Hiller:** \[12:12\] Right. Libuv provides Node's event loop, but it also provides system calls. So you could leverage the browser's event loop... But what about the system calls then? I assume this is where this WebAssembly operating system comes in.

**Eric Simons:** Yeah.

**Christopher Hiller:** Because you need a virtual file system to talk to. You need to be able to make system calls somehow. Can you tell us about that? What is this operating system? What can it do? Where did it come from?

**Eric Simons:** Yeah, so there's been a lot of -- you know, getting an OS to run in a browser is not necessarily a new thing. This was one of the main demos -- you know, asm.js back in the day, they got Linux running as a JavaScript file, or whatever... So the problem with cross-compiling an actual Linux OS is that these things are just dog slow when you put them in the browser. And for \[unintelligible 00:13:01.14\] the key guiding principle for our product experience is that it's gotta be fast. Our goal always is it has to be faster than local. We're telling developers "Hey, you should do development in the browser. It's gotta be a better environment, and that means faster."

So this was a really key part of the challenge that we had to figure out. We took a couple of different stabs at this, but we ultimately sat down and we were like "We've gotta bite the bullet. If we want the speed that we're looking for, the very light payload sizes clocks in at like under a megabyte, we're gonna have to do this from scratch, and write this thing using Rust, so it compiles out to be pretty optimal size for a WebAssembly module... And we're gonna have to identify the things that developer environments rely on, and really do a first-principles ground-up approach here." It took literally years... \[laughs\]

But that's the short of it. But it's a thousand iterations that it took to figure out what are all the POSIX interfaces that Node.js requires... Not even that - when you look at developer repos, what are they relying on? What are the third-party packages doing? Part of it is just Node.js itself, and then the ecosystem does a whole bunch of crazy stuff. So testing across all of that has just been two years of trial and error, essentially.

**Break:** \[14:16\]

**Jerod Santo:** Let's zoom out and back up... I'm sure we can get right back into the weeds here soon, and I appreciate the weeds as much as anybody does, so I'm not trying to -- but why would you wanna do this? Let's answer that question. Because running Node in the browser - why? What does that unlock? Tell us what it unlocks today, and then maybe we can dream a little bit... Some of us get great ideas immediately, like "Oh, I can do this and I can do that", while others sit here and are like "Well, I don't even know why that's cool." It sounds like a lot of work, it sounds like you guys have been working hard on it, but why? Why do this?

**Eric Simons:** \[15:59\] Yeah, there's a handful of benefits. I think for StackBlitz, the key insight that led to my co-founder and I to start the company was that browsers are really powerful. They're way more powerful than I think anyone has realized... Four years ago, the first version of StackBlitz, which is still online today - it was this custom version of WebPack that you could run in the browser. And what was really nice about that is that browsers are a very consistent environment. So if I wanna create a bug reproduction and send it to someone, you can instantly have these things online, right? But it allows you to actually merge -- kind of like what I was talking about before, with V8 coming out of the browser with Node, and then bringing it back in... We can actually leverage all the amazing, built-in stuff in our browser to have a much better development and debugging experience.

The key examples in the blog post is -- like, when you run a Next.js toolchain in StackBlitz versus on local. With the advent of server-side rendering, you need to be able to debug what's going on on your server-side. And debugging with Node.js - it's not impossible, but it's not as easy as popping up Chrome DevTools and just hitting the debugger. With StackBlitz it's now possible to do that. \[unintelligible 00:17:04.18\] you can have a live API endpoint. When you go to the server, if there's a debugger statement, it'll actually stop the request from responding, you can step through the debugger and do your thing. And that requires no installations on your computer, no extensions, whatever.

So it's essentially taking the best of what browsers allow us to do for frontend development and now applying it to this full-stack world that we're moving towards, with things -- I mean, like the JAMstack sort of space, and what Vercel is doing with Next.js.

And of course, it's ridiculously fast, because you're not paying the multiprocess overhead that you would on a local computer when you're spinning up all these copies of V8, or whatever have you. So it's actually faster than your local machine to do your development builds and your reproduction builds now.

**Jerod Santo:** Yeah, that's cool. And some of the other things you go into is potentially in a world where this thing was prevalent and available and existent, you could have for example multiple branches side by side, in two different tabs, and the full code plus development environment in tab one, on this branch, and the full code plus development environment in branch two, in that tab.

**Eric Simons:** Yup.

**Jerod Santo:** And just have those be isolated, sandboxed things that you can flip back and forth between without any sort of setup, or environment isolation on local hosts. So that's a really cool idea. It seems like a lot of these things are really dev oriented in terms of like, - is Node in the browser mostly about improving the development environment, or are there actually production implications of like once you send your code into the world? Are you gonna be shipping Node into the browser to your end users as well, or just when you're developing things?

**Eric Simons:** Yeah, I think to start we're pretty focused on the development aspects, because the benefits are pretty immense, for the reasons you outlined. Setting up local environments is a pain for experiences devs and a huge barrier to entry for people who are entering the market. So being able to have this stuff open in a tab -- I mean, companies spend weeks having developers get onboarded to a codebase. The idea of being able to crack-open a browser tab and be able to commit code on your first day at a giant Fortune 500 company is pretty wild, right?

But I think there's an interesting future here though that you're pointing out... And this is what the Chrome team is doing with their Fugu initiative - can web apps replace desktop apps that are currently using Electron? And the answer is increasingly becoming like "Yeah, they can." But they do lack right now some of the APIs and developer experience that you would need for some of these things... And so we're kind of interested in seeing "Could this be something that other developers could use to ship desktop-grade applications in the browser?"

**Christopher Hiller:** I think you mentioned the experimental file system API, or maybe that was mentioned in some sort of press release, or something... But that seems like it would open up instead of talking to a virtual OS, you can actually talk to the user's file system. Of course, there are a ton of security implications there, and it's probably a mined field, and there's probably a lot of people that don't want browsers to do that sort of thing... But there you go. It seems like you could use something like this.

**Eric Simons:** \[20:16\] Yeah. Well, and that API, maybe to some people's dismay, is actually shipped stable in Edge and Chrome right now. So web apps - they can actually request... And if you go to StackBlitz.com/local, you can try the software itself, and add your Chrome address, and it's exactly that, where... It's wild. You're giving the StackBlitz web app read and write access to a piece of your file system, like a Next.js app you're working on, or whatever... And you could not have npm, or Node, or Git installed on your computer at all. But it would be running locally on using your CPU, \[unintelligible 00:20:47.28\] That's pretty wild. You don't have to have anything installed, but you're having read and write access to your actual file system. For us, that's been a key thing that we've been really waiting on for them to ship stable, because oftentimes you will have things installed, you do need to run things that will only run in your local environment, but the file system can act as really the bridge between an online "IDE" versus something you have to run locally now.

So I think over the next five years we're gonna see a lot of desktop apps turning into desktop PWAs, because they install instantly. They can do everything you would need to, that an Electron app would etc.

**Christopher Hiller:** So today could I open up StackBlitz and then find a working copy on my machine and ask StackBlitz to open it, add some files, save them, and then go back into my terminal outside of StackBlitz and commit those changes? Could I do that?

**Eric Simons:** Yeah. If you go to StackBlitz.com/local, you can open up from your local machine. It's buggy, largely because we've just got kinks to work out, but by the end of the summer, if not sooner... That's our target, is that there's zero reason why this can't be a desktop-grade IDE where you do exactly what you described, where you mount the folder -- you can use it just like you would use VS Code to make the changes, and you can use it even just as an editor. You don't have to run commands in StackBlitz if you don't want, but you're gonna use it literally as an editor... And then on your local machine pull up terminal and commit the changes that you saved from StackBlitz to the fs, and then commit it together, or whatever.

**Kevin Ball:** So there's something that's been -- this is back to an earlier part of our conversation, but something that's been chewing away in my head, which is around versioning... So if I understand, right now you're teasing apart the JavaScript interpreter V8, now you're using the browser's version of that, and you're implementing some version of all the other different Node APIs. Do you even run into version inconsistencies? Like, places where the -- I'm not super-familiar with Node internals, but I would assume that if they're interacting with V8, they're making assumptions about this version of V8, and they're testing with a particular of V8. And if you unlock that, suddenly you're in the browser... And you could be with whatever version of V8...

**Jerod Santo:** Evergreen.

**Kevin Ball:** ...evergreen version of V8, right? Well, evergreen is great, but when they do browser stuff, they're testing with a single self-consistent version. It's not like they're separately evolving pieces. They're shipping every six weeks, right? And they have a test cycle.

**Jerod Santo:** Is Node pinned to specific versions? Is that something that we know? I mean, you probably know, but... I don't know, does it get pinned? ...like at a release date, like "This version of Node speaks to this version of V8."

**Eric Simons:** Yeah, Node bundles its own -- just like Electron, it bundles its own copy of Chrome \[unintelligible 00:23:26.05\] Node.js bundles its own copy of V8. So it's kind of a static snapshot. But the thing is -- so it's a great question... Because it's less of a problem than you might imagine, but there are interesting ramifications that, as we go forward, we'll have to solve for... Because it's less of that there'll be backwards -- because the whole idea of browsers is that... You know, Google still has test cases from 1995 or whatever; okay, probably not that far, but 2005, or something. They test all these different things and make sure that they still work. And that's a key design requirement for browser metrics, is that they don't break backwards-compatibility. But they do introduce new functionality, they do introduce top-level await; they do introduce that.

\[24:11\] So what can end up happening is if you're using a newer copy of V8 than Node 10 does, the user could write code in a web container that would run, but if you brought it to local, it wouldn't, because they're using a very outdated version of V8... Because unfortunately, it is a design flaw; in our view, it's a design flaw that we're bundling a copy of V8 that goes out of date the day after, there's a nightly that's newer the day after that these things get released. It should be evergreen. Why do we wanna do snapshotting? Browser, the same thing -- like why can't we take what is great about web browsers, which is that they are constantly adding capabilities, but do a really good job of supporting backwards-compatible code, that was written 20 years ago or whatever. So I think this is kind of like the merger of those two worlds, in our view.

That said, I think a year or two from now, as code is getting executed -- and I think the big question is "Hey, async/await doesn't work in Node 12", or whatever. So we have to make sure that that code throws an error for the user, or something like that. But those are kind of the main things that you have to be conscious of.

**Kevin Ball:** Yeah. They also ship regressions, occasionally, and things like that. "Don't break the web" is a wonderful concept, but one of the nice things about server-side is if you lock down your environment, you can absolutely test things and know what's going to work. And you mentioned that the browser is less variable of an environment - I think that's true \[unintelligible 00:25:37.15\] rather than shipping desktop software, but it's blatantly false when it comes to shipping application software. We can completely control and lock down our application server environment, and we cannot do that in the browser.

So I'm trying to wrap my head around this, because I'm thinking about -- like, this is an interesting model for deploying software, but it feels like it actually walks in between those lines of things that we used to have locked down - or able to be locked down, even if not everyone was locking it down... And stuff that's gonna be breaking in this environment versus that one, what version of Chrome are you on, are you using Firefox and you have a completely different JavaScript interpreter? Like, how are we doing this?

**Jerod Santo:** Well, it's Chrome-only...

**Eric Simons:** Yeah, totally.

**Jerod Santo:** That solves that problem. \[laughter\]

**Eric Simons:** It runs today in Firefox. There's a couple small bugs. We don't have it available publicly just because there's bugs that we've gotta work through on the thing... But we built this on web standard API. In Safari, doing their best to ship WebAssembly --

**Jerod Santo:** One of these years...

**Eric Simons:** Yeah, yeah... So, I mean, enough said, I guess, on that... But this stuff is standardized; it looks like they might ship it in the next six months maybe, like WebAssembly threads and that sort of thing.

But the point stands of like, you can take -- it's like, StackBlitz is a business, and the way we make money is we actually sell an enterprise version of StackBlitz. You can run it behind a firewall, which - when you talk to Fortune 100 companies that are doing literally trillions of dollars in transaction volume, they will not use AWS. They can't afford to. They have to have their own data centers where they're running this stuff.

And the benefit that they see from this approach - it's a double-edged sword. Yes, you can lock down your environment, which is how we deploy our cloud-native software behind their firewall, but the reason they want StackBlitz being able to utilize the browser is because it solves a ridiculous number of security issues.

You can create a container that's gonna work the same everywhere, but if part of that container is code, it can be infected and you're opening your company up to supply chain attacks... That are on the rise. And so that's the double-edged sword here - do we wanna live in a world... And it's an individual basis, right? For Fortune 100 companies, the answer -- they'll take security every day of the week.

**Kevin Ball:** \[27:52\] Yeah, virtualization with WebAssembly gives you some very clear security wins. I do wonder about -- like, you could potentially get that by shipping a WebAssembly runtime that is not running in the browser and doesn't have these same sort of mismatch version issues... You just lock it down, ship Node, some version of WebAssembly runtime.

**Eric Simons:** Well, you're relying on the implementer. You're relying on whatever is bridging out to your local machine for that WebAssembly interface. You're relying on that implementer to not have any vulnerabilities in their codebase.

**Kevin Ball:** Same as the browser, right? We're relying on the browser.

**Eric Simons:** Bingo. But Fortune 100 companies - everyone has approved Google Chrome as a browser. These Fortune 100 companies - they have allowed a runtime explicitly for everyone at the company to use that they trust security-wise... For good reason. Google's got 15,000 cores, right now, while we're sitting, fuzzing that codebase, 24 hours a day, seven days a week... And they've got \[unintelligible 00:28:40.04\] This company is leading the web security industry. They take this stuff seriously. So if you're gonna say "Hey, we're gonna introduce a WebAssembly runtime that's more local-based...", which I have no doubt one will pop up... But if I were to bet money, I think it's gonna probably be based on all of the work that Google does from a security standpoint, for the exact reason that Cloudflare uses V8 for Cloudflare workers.

**Kevin Ball:** Yeah. I mean, I might actually see us pulling out the WebAssembly runtime from Chrome.

**Eric Simons:** Yeah, totally.

**Kevin Ball:** It's a different set of trade-offs, but it's an interesting--

**Eric Simons:** I'm not disillusioned in thinking that the world software is all gonna run on this stuff overnight, but I think the benefits are pretty enormous. I mean, certainly from a security angle, but also from a speed angle. Because V8 isolates are incredibly fast, compared to local operating system processes. They're much more secure, and very fast for context switching. So with a web container...

**Kevin Ball:** That's interesting.

**Eric Simons:** ...your Node.js applications run 20% faster than they would on local. So even as a developer -- you know, we're kind of marrying security and productivity. Normally you only get to pick one of these things. But when you use StackBlitz, you are more productive, your builds finish faster, you can code faster and build faster, and it's far more secure.

**Jerod Santo:** That's the interesting part for me, because I have seen a lot of these things come and go... "Put your development environment in then browser..." I remember back when Heroku was actually that. Before Heroku was successful, their first version was "Hey, it's an IDE in the browser. Isn't this cool?" It was a complete Ruby on Rails environment in your browser, and it was really impressive... And nobody wanted to use it, because it was the Uncanny Valley, and it was slower than a local host, and you would run into issues, and you couldn't pop your terminal, and just do a terminal command, and then hop back into your -- it just never has worked. And so if you are able to pull this off because of the speed... If it delivers on the speed promises, which we see in the demos and the GIFs, if that works out in practice, I think you'll have a compelling environment... Whereas nothing has convinced me, ever, that I should put my development environment in my browser to date.

**Christopher Hiller:** Absolutely. Yeah, we've seen over the years web IDE after web IDE, and they all are just not as good as a local environment... So I think this seems to be solving one of those problems for sure, that's stopping people from using it.

**Eric Simons:** I think you hit the nail on the head too, because that's kind of been our viewpoint from day one - why would you move to an online IDE if it's not gonna be better than your local environment? It can't be as good even; it has to be better. Otherwise what's the incentive? And when you break that down - what do we care about as developers? How fast can I get my ideas into my fingertips, through the keyboard, and get a response back from the computer? It's speed, right? How fast can I get a response from the computer?

And also, again, with the supply chain attacks increasing for people who are employed at large organizations, that have a lot to lose, how can this give me a secure-by-default guarantee? And it runs consistently. Because that "It works on my machine" issue... I think those are the key things, to us at least, that really matter for this to work.

And by the way, you can try this out. You don't even have to be logged in, because the beautiful thing is that you can go to StackBlitz.com, click the Next.js started project... You don't have to log in, because it doesn't cost us anything to run -- I think our servers cost less than $1,000 a month, and we've got 2-3 million developers that are using the product... Because it's all leveraging your local CPU and memory. So you can try it out for yourself to see just how fast it is.

**Break:** \[32:10\]

**Kevin Ball:** I'd love to dig in a little bit more on why it's faster. You've mentioned a couple times that it is faster, and you have demos that show that... I was thinking about this and I was like "Okay, there's a few different angles", and I'd be curious to \[unintelligible 00:33:12.16\]

So one possibility that I was thinking about is you've essentially moved all the stuff that lived in the kernel into user space, and you've probably simplified the set of things it has to handle... So by virtue of not dipping down into kernel space, you don't have any sort of process changing or anything, so that piece could be faster.

And then the other piece I was thinking about is you're mostly simulating web stuff. So you could probably shortcut the network connections, so what would be a local host connection that's going through your local network device, and HTTP, and all these other things you could probably put shortcuts in... And then there might be other things I haven't even thought of, so I'm curious, what is it that's making it so fast?

**Jerod Santo:** I'm guessing that's the big win, is the networking stuff. Go ahead, tell us.

**Eric Simons:** It's a really good question. We spend a lot of time working on speed, because like I said, from a product perspective, this is the number one thing. What is StackBlitz? It's fast. \[unintelligible 00:34:07.05\] They are fast. Because again, how can it be better than your local environment? If it's faster -- faster is better, right?

So there's kind of an array of things that play into this and work in concert with one another for this seamless experience. But to start off, something I've mentioned before was V8 isolates. The idea of not having to spin up multiple literal operating system processes for every Node.js thread you wanna run, or whatever... \[unintelligible 00:34:38.24\] But in your browser, when you open up a browser tag, you need the ability to have multiple web workers, and different processes... But it has to be really fast; browsers have to be really fast. So V8 isolates - and the other browsers have different terminologies for this, but essentially it's the equivalent of a single, unique process more or less that's running in your browser... And by being able to have one copy of V8 doing that for all of your Node.js processes, the editor that you're editing in, and the web apps that -- you know, like, when you open up the URL to view your dev server, there's an incredible amount of overhead that's cut there... Because on your computer, that's actually one operating system process. Every Chrome tab gets its own process. And we've virtualized essentially the \[unintelligible 00:35:28.24\] into that same process, shared via V8 isolates, which are super-fast, super-secure for context switching.

So high-level, there's that. I can go on to the next point, but if we wanna talk more about that stuff, we can dig in a little bit... But under the hood, that's kind of the bedrock of what makes this fast.

\[35:47\] The second thing is exactly what you said... So at least for your dev server, you might notice -- you know, on local, when you run a WebPack dev server build of any meaningful app, the dev builds are megabytes in size. So if you've ever used GitHub Codespaces, or CodeSandbox or anything like this, they're running it on a remote VM. And what that means is that when they crack open the server - on WebPack dev server, when the port opens, you can connect to it, or whatever - they're proxying you to that server, and you're pulling down megabytes of non-minified dev builds. It's super-slow, and it takes forever... Because this doesn't leave the Chrome security sandbox i.e. using one copy of V8, those responses from the server go through the service worker API and hit faster than you can even hit a local host URL. So when you talk about web development, that's a pretty big win, right? How fast can I see a hot reload happen? How fast can I refresh to see the latest change? With web containers you're talking about less than 15 milliseconds to actually see it start rendering.

I think those are some of the key things there, and then I think on what you mentioned around an operating system and kind of like how we've decoupled it - a ton of stuff there. I think you actually did a great job explaining those optimizations. But the other side of it is the npm side. So npm normally takes forever to complete an install. This is something - when we built StackBlitz v1, we built the first npm client that would work in a browser, and it was like five times faster than you are in npm... And in the first version the key trick was being able to have a file system that could be lazy-loadable from the network. Because essentially, you don't have to download a gigabyte of modules; you can actually be really smart about "What are the files that are gonna get used from \[unintelligible 00:37:29.08\]?" and only download that. And browsers have gotten really good at just downloading -- they're doing hundreds or thousands of requests for actually really large payloads at this point, and they have great built-in caching mechanisms.

So on every pageload actually we run a fresh npm install every single time. So if something goes wrong with your environment -- again, if you look at the other players in the market, like Codespaces or whatever, if something goes wrong and you hit the refresh button, it's reconnecting you to that broken container again... Unlike every other web app; if something goes wrong with Google Docs and you hit Refresh, usually it works again. With StackBlitz, now the same thing is true, because if something goes wrong with your environment, you just hit refresh and it rebuilds the container from the ground-up, because it takes only a couple of seconds. So you're guaranteed a fresh environment every single time.

So it kind of relies on this custom npm technology we've made, and again, browsers have first-class networking built into them, so we're able to leverage that in a way that would be difficult to do on local.

**Kevin Ball:** That's fascinating. So you're redoing an npm install, but it's essentially hitting the browser cache, so they're coming from a locally-cached version of those packages.

**Eric Simons:** Yeah, exactly.

**Christopher Hiller:** I'm gonna get into the weeds a little bit... So how do you handle packages from npm that have a post install step? Maybe a build, or something that they run immediately after you npm-install them?

**Eric Simons:** Yeah, it's an anti-pattern. So five years ago \[unintelligible 00:38:48.14\] filed a vulnerability that npm is yet to address, where essentially the execution of post-install scripts by default on every install you do can enable a very, very, very bad type of worm to propagate... \[unintelligible 00:39:02.02\] essentially like this - open source developer gets a bug report, and someone says "Hey, here's the repo you can download and install to reproduce the bug", except that person who's filed the bug report put a worm in the post-install script. What it does is it scans the current logged in npm user on that computer, it looks at all the open source packages that they have published, and then republishes minor versions to include that post-install script with the code that infected them in the first place.

Then that gets published, other people download from this open source author's popular libraries, rinse and repeat, and this worm has gone across the entire npm ecosystem, stealing credentials, wreaking havoc. This has been unadressed by npm. I don't know why, but nonetheless, it's a huge issue.

And again, when you talk about Fortune 100 companies, what happened with Solar Winds? What is going on with this stuff? Developers are the weakest link in security now, because we're running an npm-install and there's thousands of things we're installing that we're not even necessarily aware of. These people have security teams, but these things can slip in. So by removing post-install as a default thing that happens, it eliminated this attack surface. And you can introduce ways where you say "Hey, run this specific command" where the user has to take intent to do an action.

\[40:18\] A lot of times too these post-install scripts are downloading, compiling and running binaries, which is not great from a security perspective necessarily... But with the transition that we're seeing, there's a lot of things that should be WebAssembly models. If you look at what Next.js is doing, they swapped their sharp image optimization to a WebAssembly variant, because it's faster, it's more secure.

There's a lot of binaries that shouldn't be binaries; they should be WebAssembly binaries, because they run everywhere, they require no post-install script, they're directly inspectable... I think 5-10 years ago when the npm ecosystem came up - sure, yeah. WebAssembly didn't exist. Different world today... And lots of attacks happening. So a different world, and a world that actually needs a more secure binary runtime format like WebAssembly. Anyways, off my soapbox, but... \[laughs\]

**Kevin Ball:** I'm not gonna argue whether or not they are an anti-pattern, but my understanding is they are still supported by npm, so how does that work in a StackBlitz world?

**Eric Simons:** We don't run them. And if we find packages that have a post-install script, we say "Hey, we don't run this, for your security. You can learn more about it here, or if you wanna run the script yourself, you can do that." This is an important thing for the ecosystem as a whole to take seriously. And it might sound like we're being ridiculous about this, but if/when this happens, which \[unintelligible 00:41:44.02\] has gone on record going "It is a matter of time until someone does this..." It's a matter of time. We need to take stuff like this seriously. I think the Node ecosystem -- I think it's getting to a point where security has got to be a first-class consideration with how we're building our software... And actually across the entire software industry, we are the weakest link, we've gotta take it seriously.

**Christopher Hiller:** And regarding the worms, since it's been brought up a couple times... npm didn't introduce two-factor authentication, which as you're describing it, would be exceedingly difficult for a worm to propagate if it had to put in the one-time password to publish something... But it seems fair to me if the companies and the intended audience for this tool prioritizes security to essentially disallow scripts on install. If they don't want them to happen, then great.

And yeah, I agree, a lot of things should be WebAssembly modules. But say that you do wanna use something that (I don't know) needs to grab a binary, God forbid it needs to compile something - what happens? Can your OS compile things? What can it do in terms of -- is Bash running? How does that work?

**Eric Simons:** Yeah, we've got a slimmed-down shell. I think pretty soon you'll be able to actually execute Bash scripts in the thing... But I think there's some stuff going on where you could actually compile toolchains and binaries in the browser itself, for sure. I think the work that the WASI folks are doing is paving the way for this future to happen.

We're kind of betting on a larger trend, which is the world is gonna move their software more towards web-based computing, like WebAssembly. And if that's the case, then yes, you're gonna end up with WebAssembly modules that compile Python to other WebAssembly modules, or whatever. And this is already starting to happen. That strikes us as the wright way to do this, using a secure by default runtime to produce more secure by default binaries for runtimes, or whatever.

\[44:07\] And to answer the direct question, like what happens if you need to compile a JVM or something \[unintelligible 00:44:11.22\] it's not gonna work, unless it's using a WebAssembly module to do the actual compilation work, of course. But yeah, it's a feature that it can't, in a sense.

**Jerod Santo:** So let's tease apart -- we're running a little bit low on time here, but before we go, I definitely wanna tease apart web containers versus StackBlitz. The announcement, the new tech is web containers; there's a GitHub repository, there's a working group... There's things that look very open and collaborative. StackBlitz - like you said, you're a business; you can run Node.js in your browser on StackBlitz.com, but can you run it in your browser in other places? So what's the collaboration and the open story here? Is there one, and how do we differentiate between what's StackBlitz proprietary tech and what's out there to be used by everybody kind of stuff?

**Eric Simons:** Yeah, totally. I think right now -- this stuff is very new, and we're still figuring out a lot of it ourselves, so that's why we're in an open beta for people to try it out and kind of push the limits of it... Because there's still a bit more that we need to learn about how to make something like this very runtime-compatible and cross-platform compatible etc.

At the same time, leading from what we were just talking about, we also need to get developers to think about how they're running their toolchains a little bit differently. And again, our pitch is it is faster and more secure to do it using WebAssembly-based toolchains, or leveraging the billions of dollars getting poured into browser innovation. But in order to do that, we need to make sure that it's seamless, because it's a key design goal; if you go to our web container working group repo, one of our key design goals is that this should not be something that requires you to change how your codebase is set up to work. It should "just work". So that means there's certain packages that are not available as WebAssembly modules, so we've gotta flip those over as a community. Kind of a host of other things.

But today, where the community is really helping is helping those larger shifts happen. There's just a ton of people who are doing this now, which is so awesome to see... And also giving us feedback on the core runtime and helping us battle-test it... Because what we're tracking towards is a general availability release sometime end of the summer, or fall, or something like that... And we wanna enable developers to use this thing, with a really great API surface, and perhaps introduce standards... Like, actually introduce standards where there are currently gaps in what browser vendors are doing, or WASI, or whatever.

We're still trying to get a little bit of the lay of the land to understand exactly how we need to go about solving these problems in a way where everyone can leverage the power that's in their browser, and ship better, faster, more secure application. That's the long-winded version of it...

**Christopher Hiller:** I guess what I don't understand is - is there a portion of this that is open source, or is it all proprietary, or how does that work?

**Eric Simons:** Yeah, so today everything is largely closed source. Our intention is that this is gonna be an ever-receding closed core. If you look at what React Native did - they did not have it publicly available for a very long time as they were hammering out a lot of the core issues. That's kind of how we view this. I think the npm client thing is a great example of that. We've got the fastest, most secure npm client running in this thing, and there's no reason we shouldn't release that as open source for people to use in their local environments as well.

\[47:40\] I think over the course of the next year, a lot of the things that you're seeing in this as we stabilize them -- it's not even just gonna be applicable inside of StackBlitz, it's gonna start hitting people in their local environments as well. That's our intention. But in order to do that, we have to make sure that it's a very seamless experience for the person who's gonna adopt this thing and make sure that it's not gonna cause them a huge migration effort, or it's gonna break, or whatever.

So that's very valuable what we're doing right now, is getting a lot of test data in lightweight environments, because people aren't trying to use this for work that is tied to their actual job or something right now. We wanna make sure that we're pretty confident before we start rolling this out for people to rely on for their jobs, for their livelihood.

**Kevin Ball:** Something you said about getting this available to everyone made me wonder - is there a plan for supporting other backend languages? And I think there's an interesting question there around the performance benefits, because -- what were they called? Instantiations, or whatever it is - that benefit is not gonna be there; you are gonna be virtualizing some sort of runtime or something into WebAssembly... But some of the performance benefits you've talked about could very well generalize. The idea of package installation and utilizing the browser cache, the idea of cutting out the network stack and being able to directly access things.

Does it make sense to have web containers for running Python on WebAssembly, Golang on WebAssembly? I mean, Rust already kind of goes straight to WebAssembly, but does it make sense to expand this beyond Node?

**Eric Simons:** That's our goal, for sure. We think that that's absolutely how it should work. Today, JavaScript is the easiest language, or certainly the most sensible one. If anyone's gonna understand the value of an online IDE, it should be web developers. We should be able to build the web using the web. But if you look beyond that - yeah, the same benefits can absolutely apply to other languages. So I think that's the longer-term view here.

What's gonna be the hardest part, and why we've put together a working group to start thinking about these problems - because you've also got the WebAssembly Standard Interface (the WASI folks) who are trying to help bridge this gap... Because WebAssembly is great, but it does not specify how you access a file system, or TCP networking, or whatever. Really important APIs for most binaries to be converted to a WebAssembly module. And they're doing a phenomenal job on that.

So StackBlitz is going to have a WASI standardized interface available to developers in the next month or two here. You'll be able to actually run Python etc. And to start, you'll be running the Python repl, or something like that... Because again, as an industry, we're gonna have to make some structural changes to enable the ease of adoption and performance etc. that you'd want in order for this to be a viable switch from your local environment... But we wanna apply momentum in that direction, because that just seems like the future. It seems like a better future, at least.

**Jerod Santo:** Super-cool stuff, Eric. We're all excited now. Even Chris is excited. You've done a good job fielding our questions...

**Eric Simons:** A couple of head nods... \[laughter\] Small ones, but... It's cool stuff.

**Kevin Ball:** Hey, I saw a smile from Chris. That's like -- well done, sir...

**Eric Simons:** \[laughs\]

**Jerod Santo:** Well done. You've passed the first test.

**Eric Simons:** These are really good questions, by the way. These are very on the nuts and bolts of exactly what's going on here... So I really appreciate you having me on. This has been a lot of fun.

**Jerod Santo:** You bet! Listeners, all the links to all the things, including that introductory blog post, and places where you can go and watch the demos for yourself... Do you watch a demo? No, you try a demo. Go try the demo and see how you can get it running in your browser. Chrome, and maybe Firefox here soon...

It's really exciting, Eric, to watch you guys make progress. Like you said, this is early days, this is announcement, this is excitement gathering, but there's a lot of work left to do, so we'd love to catch up with you maybe in six months to a year and see how far y'all have made it, and what is out there to be used and advanced from there.

So thanks for joining us, we really appreciate it. Chris and Kball - awesome, as always, to have you here with us. That's our show... We'll talk to y'all next week.
