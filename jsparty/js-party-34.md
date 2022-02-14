**Kevin Ball:** Hello everyone, and welcome to another episode of JS Party, where every week we are throwing a party about JavaScript. I’m your MC for this show, Kball, and today we’re going to be talking about Electron. I’m very excited to have two members of the Electron team joining us. First off, Shelley Vohr from GitHub a.k.a codebytere. Hi, Shelley.

**Shelley Vohr:** Hello.

**Kevin Ball:** Welcome aboard. We’re excited to talk with you. Also on the Electron team, Jeremy Apthorp from Slack a.k.a nornagon. Hi, Jeremy.

**Jeremy Apthorp:** Hey, how’s it going? I’m feeling those party beats.

**Kevin Ball:** I know, right? That gets me pumped up every week. We’ve talked about doing videos, and I’m literally dancing every time that music comes on. I've got my \[inaudible 00:02:30\] going, so I’m ready.

**Jeremy Apthorp:** Excellent.

**Kevin Ball:** Also on the line we have Feross Aboukhadijeh. Feross, how’s it going, man?

**Feross Aboukhadijeh:** Pretty good.

**Kevin Ball:** Alright. Before we dive into the main content, I’m always fascinated by how people get their online monikers and their nicknames... So can I ask each of you how you arrived at yours?

**Shelley Vohr:** Yeah. Honestly, I wish I had a little bit more of an exciting story for this one, but I made my GitHub account when I was 15. Originally, I wanted codebyter with no E on the end and it was taken, so I threw an E on the end and now it’s too late to change... But I like it.

**Jeremy Apthorp:** You like eating the code. I imagine you're just like getting it out of your git clone and just shoving it into your mouth. \[laughter\]

My name is nornagon. Actually, I also picked it when I was 15. It came from a computer game called Creatures that had little creatures in it called Norns that you would take care of and teach, and stuff. It’s actually the reason that I became a software engineer - that game had a modding system that you could build new plants and toys and things that would go in the world using a custom scripting language that the developer of that software created, called Chaos, and that was my first programming language. It was Chaos – this weird Assembly-like scripting language. That introduced me to a community of people who taught me real programming languages over IRC. The name’s unique, so I just kept it. It works fine.

**Kevin Ball:** \[04:18\] That’s awesome. Alright, so let’s talk about Electron a little bit. I think most folks are probably familiar with Electron if they’re in the JavaScript space, but maybe not everyone. How about we start with just what is Electron?

**Shelley Vohr:** Alright. At a really baseline level, Electron is effectively a framework that allows you to use web technology to write pseudo-native apps on desktop platforms like Windows, Mac, and Linux. You have access to a JavaScript API, and you can use this to basically create applications like Slack, or WebTorrent desktop, or Atom, or VS Code, or any similar apps like that.

**Kevin Ball:** Nice. So what’s the development environment like? Is this basically just like developing for the web? What do you need to do to get set up and go?

**Jeremy Apthorp:** It’s very similar to developing for the web. Actually, Slack's app, if you visit slack.com in the web browser, you get basically the same app that runs in the desktop app. When you run it in the desktop app, you can just get a few more features. So most of Slack’s functionality is written just the same as you would write a web app, using TypeScript, using Webpack – that sort of thing.

**Kevin Ball:** Are you actually using the exact same codebase or is it two forks, or how does the work?

**Jeremy Apthorp:** So I’m not the most up-to-date person on how the Slack app works - I mostly work on the Electron side of things rather than the Slack side of things - but my understanding of how the Slack app works is that it actually loads slack.com inside of the desktop app. So it boots up Electron and then it loads the code from the web. And there’s a little bit of shim code that exposes the desktop-specific functionality that the web app can callout into, but it’s actually loading the web app inside of that from the internet.

One of the nice things that we get from that is that we can update the functionality of the app without shipping you a new executable.

**Kevin Ball:** That’s pretty cool. So is that an explicit approach for Electron? And, can you update the code that’s accessing Electron APIs as well, or is it just the web piece of that that’s getting loaded?

**Jeremy Apthorp:** So the desktop part of that injects some hooks that the web app can call, and if they’re there, then the web app can use them, and if they’re not, that means it’s being loaded in a browser, so it knows which environment it’s in. So yeah, that’s a specific design goal of the way that Slack is protected.

That’s I think pretty different to know Atom works. When you download Atom, you get all of the code that runs Atom; it’s sitting there on your hard disk. So there’s a variety of different approaches and ways that people build it, but whichever way you do it, you still have access to all of the dev tools that you are used to – TypeScript and the Chrome dev tools, you can just open them straight inside of your Electron app and set a breakpoint or edit some CSS, that sort of thing. It's very similar. In fact, it is Chrome under the hood.

**Kevin Ball:** That’s pretty cool. So is there any Electron-specific tooling that you use when you get in there, or is it all just your standard – everything is web technologies; you’re using Node, you’re using Webpack, you’re just going?

**Jeremy Apthorp:** I’ll kick that one to Shelley, since I think she has some more experience with that.

**Shelley Vohr:** \[07:48\] I would say yes, essentially. People have built out a lot of little tools that improve Electron in specific category, allow for easier development for – I don’t know; I’m trying to think of a simpler example... For like logging, or something similar. But generally, yeah. Generally, you treat it primarily just like developing web technologies, except that you’re thinking more in terms of desktop, so thinking about dialogues and other things you wouldn't typically think about in a web context. But otherwise, the perspective I would say is not altogether different.

**Kevin Ball:** Nice. So does Electron enforce any particular application architecture?

**Shelley Vohr:** Jeremy, thoughts? I would say, initially -- I mean, besides the main render differentiation, no...

**Kevin Ball:** Which might be worth going into?

**Shelley Vohr:** Right. So essentially, you can think of the dichotomy between the main process and the render process of Electron as sort of the same way you’d think about a puppeteer and a marionette - main processes spawn render processes, and then each one of the render processes is standalone.

In the main process, you have access to everything – Node, and then through Node you’d have access to the file system, through their file system APIs, as well as everything you’d have straight to Chromium... And then render process - you can also have access to all Node modules, but typically, as a developer, you’d access those through remote, and then also you’d want to be a little more careful in terms of what you allow the render process to access just for, I’d say, primarily security purposes... But yeah.

**Kevin Ball:** Are there different security levels between the different processes?

**Jeremy Apthorp:** Yeah. So the main process has access to everything. It runs just like any other process, it runs with user privilege, it has Node embedded, so the JavaScript that runs there can basically do as it likes.

The renderer process is a little bit more restricted. It’s not enabled by default, but there’s a sandboxed mode that prevents the renderer from doing things that it ought not be doing. In general though, Electron is not a platform for running untrusted code.

**Kevin Ball:** Interesting.

**Shelley Vohr:** Yeah... In normal browsers, since web pages run in a sandbox environment, they’re not really allowed access to native resources, so we give you the ability to do that, but we definitely don’t recommend that you do that for the same reason that web pages don’t really have access to that.

**Kevin Ball:** So that’s kind of interesting, when you’re doing something like what Slack’s doing, right? Go ahead, Feross.

**Feross Aboukhadijeh:** I was just going to say, a specific example would be like building a web browser in Electron and trying to load remote web pages would probably be not a good idea, because even with the sandbox mode turned on, so the renderer process would not have access to Node APIs... But as I understand it, it’s still not like a perfect sandbox, in the sense that -- I think if a page was really determined, it could breakout. That’s my understanding.

So basically you shouldn’t ever load code from a remote server in the renderer process. It should only be code -- well, at least unless it’s your server and you trust it. But even then, you have to be really careful that that server’s definitely only serving code that you’re 100% sure is trusted.

**Jeremy Apthorp:** Yeah, so you mentioned building a browser with Electron, and it’s interesting that you mentioned that, because there was a project that I think involved Brendan Eich, called Brave, the Brave browser... And they started off building on Electron because it was a super easy platform for them to get started, and they eventually forked Electron and changed a few things about the security model, and then I think just recently they announced that they’re retiring their fork and they’re building directly on top of the Chromium source code, much in the same way that Opera does. So I think that’s an example of how people have evolved through that, going through that set of decisions.

**Feross Aboukhadijeh:** \[12:01\] Yeah, that might be a conversation for later, but I’m actually really curious what the trade-offs are there, why Electron hasn’t maybe pulled those changes in their fork back in and made the sandbox more secure by default. I’m guessing there are some good reasons or some tradeoff there that would be interesting to know about.

**Jeremy Apthorp:** Yeah, absolutely. We can chat about that in depth later. There was an Electron developer summit recently in Prague, and things like that came up... So yeah, Shelley and I can both speak to that.

**Kevin Ball:** We could go into it now if we’re excited about it.

**Jeremy Apthorp:** Sure. Shelley, do you have thoughts?

**Shelley Vohr:** Well, I honestly will openly admit that I have not been the most involved in the security side of things, but at the most recent summit, we did have some significant discussions around security in terms of how we want to improve our security by default, and then the primary steps that we need to take in order to make that happen.

We currently are actually spinning up a little bit of a project board that allows us to more formally investigate how we can make Electron secure by default. One of those things includes how we’re dealing with Eval, how we deal with Webview, and then the Node integration.

There’s currently a PR up to disable the Node integration by default, for example. And then ideally we’d also want to deal a little bit better with potentially permission handling, web contents and some navigation.

**Feross Aboukhadijeh:** Yeah, that’s interesting. Oh, go ahead.

**Jeremy Apthorp:** I was going to say that one of the tensions, one of the things that Brave did in their fork of Electron, which was called Muon, is that they’ve entirely removed Node integration from the renderer process. One of the really nice things about Electron is that you can open up an html file, write a scripts tag in it and put a require, like writing that script tag like require('fs') and then off you go. That’s a really simple development model., and if your app is not running on trusted code, then that convenience is super valuable.

So Brave made the decision, since they’re basically only running untrusted code, to entirely remove that integration in order to reduce the attack surface, remove that integration, even the possibility of having Node in the renderer process in their fork... That was one of the things that we decided we didn’t really want to bring back to Electron, or at least if we were going to do something like that, it would be a huge change in the way that people write Electron apps... So there are tradeoffs to be made there, and the tradeoff that Brave made was right for them and I’m not sure that it’s right for the Electron project at large.

**Kevin Ball:** It reminds me a lot of the evolution that architectures in browser extensions went through…

**Jeremy Apthorp:** Oh, interesting, yes.

**Kevin Ball:** ...moving towards – you know, you had the initial browser extensions from Firefox that tended to have very high levels of privilege, though the programming model was pretty low-level... And then Chrome introduced this interesting separation where you’d have unprivileged scripts and more privilege scripts, and they'd communicate via some messaging protocol.

**Jeremy Apthorp:** Yeah, they call that context isolation. I think that's what it was called, or is called.

**Kevin Ball:** Yes.

**Jeremy Apthorp:** Electron has that also. There’s the option that you can set on the web contents that you open, you can set like context isolation, and that way, the code that’s running in that frame and the code that’s talking to it is running in different contexts.

**Feross Aboukhadijeh:** \[15:45\] I actually find just in my use of Electron that just from a conceptual point of view it’s really useful for me to try to keep all of the Node stuff out of the renderer and use messaging or use remote -- it's better actually to just use messaging, so that the main process does all the Node stuff, and all of that stuff is securely over in its own place and I can just see all the things that the... All the Node privilege-type things that the app might do, and then I can see that -- the renderer basically only has the ability to ask the main process to do certain things, and then the main process could deny it...

Basically, say that for example my app needs the ability to read one specific file, then I can put that specific code in a function in the main process and then the renderer can just ask the main process to read that one file, versus instead of giving it full access to the FS package that it could use to do anything, like to write anything or to just run wild. I find that pretty useful.

**Jeremy Apthorp:** Yeah, absolutely. I think that’s also just -- even putting the security reasons aside, I think that’s also just good code architecture, to have specific responsibility in certain parts of your code, and to have clear interfaces, and say, “This is what this is supposed to be doing", even if you’re not thinking about security at all... Just like, "How does this code work?" just understanding or modifying the code. That separation is a good practice, I think.

**Feross Aboukhadijeh:** Do you know what would be funny -- I wonder if someone has ever tried putting require('fs') in their normal website and maybe put it in a try-catch block, because that isn’t going to work most of the time... And just seeing what percentage of the pageloads actually happened in an environment where require('fs') works. That would be very interesting.

**Jeremy Apthorp:** Someone with a popular website... Anyone on this show with a popular website might want to try that out and report back. \[laughs\]

**Feross Aboukhadijeh:** Anyway... My mind always goes straight to the evil use cases. I’m sorry. We dove so deep into this security stuff... \[laughter\]

**Kevin Ball:** No, that is Feross’s take, but it did get me thinking – six months ago or something there was this big article going around about the ability to include malicious code in an obfuscated way into popular packages, that then get pulled in... And it definitely makes me think about the definitions of trusted code.

If you’re using third-party packages, you have to be really careful. Having the possibility that you’re loading a website -- maybe you have some third-party packages in there, maybe you’re loading some advertising scripts or whatever... Those folks could be checking for “Do I have access to the file system in doing God knows what?”

**Jeremy Apthorp:** I think this is, let’s say, a mistake in operating system design that happened in the ‘70s, that we’re still paying for. I think that there has been some good progress on that front in the models that iOS and Android use about sandboxing every app by default. Mac OS is starting to get this with the Mac Appstore sandbox, but still not a lot of apps use that.

So I think there’s something there to – there’s a fairly fundamental question there of like the computer is supposed to be an agent of the user, and there’s an inherent obfuscation of like, “If I do these things with my computer, if I open this app, if I click this button, there’s this level of trust, because I can’t see the electrons that are moving around inside the processor and see the packets that are going out the network. I can’t directly perceive what’s going on”, so there’s some level of trust that needs to be established between the operating system and the user.

\[19:44\] I think it’s really the operating system’s responsibility to provide that trust, which is a long way of saying it’s a complicated problem, and we need complicated tools to attack it. And I think this lies – certainly, some of that responsibility lies in the hands of Electron, but it also crosses over into operating system authors and publishers, like Apple, Microsoft and Google, as well as back up the pipeline into app authors and how they design and build their apps and publish their apps.

Break: \[20:30\]

**Kevin Ball:** Okay, so let’s talk about why people are using Electron. We’ve touched a little bit on it. We’re all web devs probably, so web development is a pro, but why do we see people who might otherwise be doing traditional desktop applications using Electron?

**Shelley Vohr:** Basically, Electron as a framework, as with most frameworks, is something that -- it’s a tool, necessarily... So for any given thing, if you want to build it, you sort of evaluate the tools that exist and then pick whichever one seems to be the best tool for the job. For Electron, you can really use it to do almost anything, but to that end, there’s definitely situations where Electron is an optimal choice and then situations where Electron wouldn’t be the optimal choice. For something like WebTorrent desktop or Slack, it’s currently the best choice that folks have determined fits their use case.

Felix actually recently wrote an article - I think it was about a month and a half ago - called "Defeating Electron", and it sure touches on a lot of these points, saying basically that Electron has tradeoffs in many ways, but at the same time, it’s currently what the best tool for the job is for a lot of desktop applications, which is sort of why it’s proliferated itself to the extent that it has.

**Jeremy Apthorp:** I think to add to that, you said the right tool for the job... What is the job? The thing that people come to use Electron for is like, “I wanna write an app that a user is gonna use, something that I’m gonna distribute to people who aren’t me, that they’re gonna run on their desktop machine (Windows, Mac or Linux), and it’s gotta do something that a web app normally can’t, even if that thing is only just like opening its own window, or reading a file off of the file system.”

\[23:50\] I think that if you want to do that thing, "I want to distribute something to my users that does a little bit, to a lot more than a web app can, on a desktop machine", I think your options are -- if you want it to do something that isn’t Electron, you could, say, write a Qt app in C++, or you could write an app with C\# and Mono, or Gtk\# maybe... And none of those options are really very good. They’re good at what they do, but what they do isn’t building cross-platform apps in a way that’s easy to develop.

So I think that a lot of people have familiarity with WebTech, and I think also the dev tools for WebTech are really best in class.

I think if you’re writing, say, a Qt app, and you’re like, “Oh, that button’s in the wrong place”, you can’t right-click it and inspect the styles and edit it live like you can with Electron or WebTech... “Oh, a user is experiencing a weird issue. Let me just tell them to open the dev tools and run this quick bit of code.” You get a lot of batteries included stuff with Electron.

**Kevin Ball:** That’s a good point.

**Jeremy Apthorp:** It’s just better than the alternatives on a lot of dimensions. It’s easier to use, you already know how to use it. The dev tools are fantastic and it comes with batteries included.

**Shelley Vohr:** Yeah, I think to a large extent a lot of what Electron did is that it exposed the desktop to web developers. And web developers – it’s a humongous market, so it basically allowed for a bit of an easier on-ramp than I think a lot of native system desktop platform application does.

So given the batteries included things, I think that Electron, in the sense that I mentioned, is the best tool for the job. Also, it's a tool that allows for a much wider developer base to have access to creating the sorts of products that they wouldn’t otherwise be able to.

**Jeremy Apthorp:** I think I read something the other day that was like "65% of all software engineers have written JavaScript." That’s an astonishing number.

**Kevin Ball:** It is taking over the world.

**Shelley Vohr:** Wow.

**Jeremy Apthorp:** If I’m a company or an executive at a company trying to make a decision about how we’re going to build our desktop apps and I’m looking at the options that are in front of me, and I’m like “Okay, Qt and C++. I could hire a C++ developers to work on this." Somebody needs to know C++ in order to be able to build things in this app, or a C\# and Mono, or Windows WPF (Windows Presentation Framework).

The number of people in the world who already know how to use those technologies is much smaller than if you’re building with JavaScript. A lot of people already know JavaScript and already know CSS, and know Node, and know how to use those APIs. So from the perspective of somebody who’s trying to hire a team, I think there’s a lot to be said for the available pool of people who can bang out some JavaScript.

**Kevin Ball:** And this has gotten a tremendous uptake... I saw a survey recently or a blog post about a survey on the npm Blog where across industries, more than 20% of developers reported using Electron for something, in every industry that they surveyed.

**Jeremy Apthorp:** Using Electron?

**Kevin Ball:** Using Electron. This was JavaScript-focused folks, because it was a survey by Node or npm, but it said across all the industries that they looked at – finance, advertising, marketing, education, government, manufacturing – 20% or more reported using Electron on at least some project.

**Shelley Vohr:** Wow, that is a brand new statistic to me.

**Jeremy Apthorp:** Yeah, I hadn’t heard that. That’s amazing. Can you lend me -- oh, somebody... Yeah, thanks Kevin.

**Kevin Ball:** I’ve just put it in the Slack channel. I’ll put it in here, so they can put it in the show notes. But yeah, the uptake has been phenomenal. We were brainstorming some examples of big apps using it – obviously, the Slack app that you were talking about, Atom, VS Code...

**Jeremy Apthorp:** \[28:24\] Skype... We’re currently talking over an Electron app.

**Kevin Ball:** Really? I didn’t know that.

**Jeremy Apthorp:** Yeah, Skype is Electron.

**Shelley Vohr:** Yeah.

**Feross Aboukhadijeh:** Wow.

**Shelley Vohr:** Trello Desktop is... Teams...

**Jeremy Apthorp:** Stride.

**Kevin Ball:** That’s pretty darn impressive. Now, Electron is not without its detractors, and I think the biggest thing that I’ve seen is folks talking about memory usage. Do you all want to talk about that at all?

**Shelley Vohr:** Sure, I can totally take a stab into it a little bit. So as memory goes, generally yes, people’s typical complaint about Electron is that it takes up a lot of memory for what it’s doing. But at the same time, I think -- it’s like I said earlier a little bit, in the sense that there’s a time and a place for building an application with Electron.

The tradeoffs in terms of memory -- let’s say Slack, it tends to come up a lot for this... So Slack - I think the question there is more what would the alternatives be that would be better? What other frameworks allow you to build something like Slack, that allows you to do all the things that Slack allows you to do, and is significantly leaner.

Let’s say if you want to build a tiny tray up that says “Hello world”, yeah, in that case Electron may not be your best choice, in the sense that you are using some significant amount of RAM with a very small amount of output.

But it’s also pretty closely tied to Chromium, in the sense that every major update that we’ve done has actually improved our memory usage pretty significantly, and I think will only continue to see that improve. I think that’s sort of a good initial stab at it. Jeremy?

**Jeremy Apthorp:** Sure. Shelley also said also it's a useful thing, so I'm gonna say facetious jokes instead, which is -- so like, do people complain that their city has too many buildings in it? Would they rather that it was all just sort of empty, and vacant lots?

Your RAM exists for a reason, and it is to make the apps on your computer run, and run fast.

So I was talking to one of the -- I used to work on the Chrome team at Google... So I went and talked to one of the engineers who works there on the compositor team, and I was like, “Yeah, people are complaining about Electron’s memory usage” and somebody said, “Oh, the compositor seems to be taking up a lot of that memory, so I thought I’d ask you about what’s going on there...” And they said, “We’ve looked into reducing the amount of memory that the compositor uses, but ultimately it ends up being a tradeoff between memory usage and speed. If we make it take less memory, which we could do, then it’ll be slower and people complain about it being slow instead.”

I think also the people who complain about memory usage are the people who open activity monitor and look at the memory number. I think if you don’t open that activity monitor or Top, or whatever, and look at the memory usage, you’re never going to notice how much memory that app is using, unless you’re trying to run like ten instances of Photoshop, and your machine is swapping.

\[31:52\] So I think memory usage is not itself bad. It has downstream effects that are bad, and that’s mostly -- until you hit your memory limit of active memory, you’re not gonna notice anything. And then as soon as you hit that limit, you hit a cliff of the swap. So if you’re swapping a lot, that’s when you start to notice the detrimental effects of a lot of memory in use.

**Kevin Ball:** I have a suspicion that a lot of these folks complaining are power users. I just opened up Top, and I order by memory usage, and I look at the top 30 processes, ten of them are Chrome, seven of them are Slack, because I have ten Slack channels or things in my Slack app, and then there’s a few other things... But that’s because those are the most phenomenally useful applications.

I have 30 Chrome tabs open, I have ten different Slack channels that I’m plugged into. That memory is going to use because those are the things that I use.

**Jeremy Apthorp:** Right, exactly. And I don’t know, you’re a power user... How much memory is in your machine?

**Kevin Ball:** This one has eight gigs. It’s actually not that massive.

**Jeremy Apthorp:** Cool. Yeah, I just opened--

**Shelley Vohr:** Okay, and then I think to some extent too -- like, Electron definitely does shape itself around a world where ideally every computer user has a pretty significant amount of RAM, but at the same time I think that’s a world that’s approaching a lot faster than we necessarily think it is, in the sense that even a few years ago, the default amount of RAM that came with computers was significantly smaller than it is now. There’s a maximum of 32 gigabytes of RAM, and I think saying that to someone, even when I was in high school, would have been somewhat fantastical.

**Kevin Ball:** Yeah, RAM is one of those beautiful places where Moore's Law has more or less continued.

**Jeremy Apthorp:** Yeah, and I think there’s also -- there’s definitely a concern here, because in the wealthy US-centric world, we are living in a different universe than a lot of the rest of the world... So I think there’s definitely something to be quite reasonably concerned about there.

If you’re targeting a market of users that doesn’t have the very recent, very high-powered computers that we’re used to assuming exists in the sorts of environments where we are a lot of the time... I think it’s important to think outside that box and make sure that we’re reaching the broadest set of people that we can.

**Jeremy Apthorp:** So for folks who are targeting that, any recommendations? Feross, you were linking to some stuff around building them like mobile applications, and things like that.

**Feross Aboukhadijeh:** Yeah... So another criticism that you hear with Electron apps is it’s just CPU performance-related as well... So just sort of in the background apps just spinning the CPU, doing random things; a Chrome renderer process might just be doing some stuff in the background, but maybe if you wrote it as a native app, it wouldn’t be doing, or something. I think that’s the idea. So that’s one issue. And then, of course, that affects battery life.

And then the other issue is potentially startup time. I saw a lot of people asking about that on the Electron issue tracker... With the WebTorrent desktop app, I just personally took an interest in that, and improving startup performance as much as I possibly could. I just had some tips for how to do that if you’re looking at making your Electron app startup quickly.

**Jeremy Apthorp:** Yeah, I’m really curious what you found worked for you.

**Feross Aboukhadijeh:** Yeah, so I initially just wrote -- the way I figured out what was causing the startup time to be slow is I wrote a wrapper around the Require function, and just timed how long every require took... Because every time you call Require, there is -- yeah, so in the naïve use case of calling require, it reads the file that you’re requiring from the disk, and then you do all those requires synchronously, one at a time, because it’s a synchronous call, so that can take a while if you’re reading like a thousand files, which is definitely possible in a decently-sized package tree.

\[36:28\] But then I think there’s a way where you can take the whole Node modules folder and bundle it up into a single file, like an asar file is what it’s called. I think it stands for Atom Archive File or something. You probably are familiar with this. But anyway…

**Jeremy Apthorp:** Yeah...

**Feross Aboukhadijeh:** Go ahead.

**Jeremy Apthorp:** I was gonna say, I think that might be an artifact from when Electron was called Atom Shell, so it might be Atom Shell Archive...

**Feross Aboukhadijeh:** Correct, yes.

**Shelley Vohr:** Yeah.

**Feross Aboukhadijeh:** Anyway, so if you do that, then you can basically eliminate the hundreds or thousands of different reads on files, which is really valuable if your users are on a computer with a spinning hard disk, because those are gonna all be random accesses to random files and it’s gonna have to go back and forth to different parts of the disk to read all that stuff, which can make the startup time be 10 or 20 seconds, I’ve heard. So if you do the asar file thing, which is literally a one-line configuration thing, that fixes a lot of the problems.

But then the other big one was just how long it takes to actually run the code in those require calls. So even if the file system is really fast, you still have to run all that JavaScript... So then I just timed that and just found, “Oh, there’s a couple of packages here which are just huge. Do I really need to run those right when the app starts up before the UI even shows up?” and it was clearly the case that certain things didn’t need to show up until a lot later in the app.

For example, for WebTorrent Desktop we support casting the video that you’re watching to a Chromecast or to an Apple TV, and there’s no need for those modules to be required until a video has actually been played... So that doesn’t need to block the startup of the application. So we just put that into a little lazy load call. Literally, I think it’s a set timeout.

We could have done it at the time when the video is actually loaded, but we just said, “Let’s just literally put it in a 10-second set timeout, and just wait, and then start looking for Chromecast and an Apple TV device like 10 seconds later." That by itself saved half a second... And you just keep doing that and figuring out what doesn't need to load.

It’s just like a mobile app. You do code splitting so that you don’t have to load a megabyte of JavaScript on a mobile device or mobile website. It’s the same exact philosophy – just figure out what the minimal amount of code you need to run to get that first paint of the UI to the screen, and just be ruthless about it... Like, two small modules, that kind of thing.

**Jeremy Apthorp:** I’m curious if you came across -- I think it’s called Electron Link and mksnapshot that are tools that attack the problem of loading a bunch of JavaScript in a slightly different way.

**Feross Aboukhadijeh:** No, I haven’t heard of those.

**Jeremy Apthorp:** Okay, cool. So I haven’t used them myself, so I certainly wouldn’t class myself as an expert on these, but I understand that the way that they work is that you can bundle all of your JavaScript together into one file, similar to the asar approach that you were talking about... But then what you do is you load it into V8 ahead of time, and that parses and constructs all of the internal structures that V8 will need to run it at runtime, and then you can snapshot all of that information that V8 has constructed out of your JavaScript code, and then load that snapshot back up on startup in your app.

\[40:12\] So in development, you can create that snapshot and then ship that snapshot out to your users, and when they start the app, instead of having to start from the raw JavaScript files or even the packaged up asar (you still have to parse all of that JavaScript), you can start from a snapshot, which is much more like friendly for load time.

**Feross Aboukhadijeh:** That makes a lot of sense.

**Jeremy Apthorp:** Another tool that you can get in your arsenal.

Break: \[40:42\] to \[41:16\]

**Kevin Ball:** Alright, so let’s jump back in and talk about community. Shelley, can you talk a little bit about the Electron core team, community ecosystem – all the stuff around this?

**Shelley Vohr:** Yeah, absolutely. So I would say over the course of the past year or so there have been some pretty significant changes. When I first joined the team, the core group of folks working on Electron was probably about five. Now, I’d say it’s probably about 15 folks in total.

It’s been great, in that it’s allowed us to more effectively approach issues, delegate work, work together more effectively... And then it’s also important to note that about four companies have employees who work on Electron. So we all function as one unified team, which allows us to attack a much wider variety of issues than we really used to be able to, and then think about a slightly firmer form of the way that we structure where we’re going.

For example, Mini Summits were mentioned. We have two Mini Summits a year, and each one of those Mini Summits determines the next six months of roadmap. Our last Mini Summit was about 40 people, and all 40 of those people are pretty active contributors in the community, that are invested in Electron’s success and who are able to bring different perspectives to the table, depending on what company they’re coming from and what their Electron use cases are.

Because of that, I’ve definitely noticed over the course of the past year or so that we’ve been able to get a much better understanding of where we are and where we want to go, just because now we have access to such a wide variety of perspectives and needs.

**Jeremy Apthorp:** Yeah, absolutely. You said there’s four companies who are working on Electron. I think you’re saying that there’s four companies that have been working on Electron full-time. I think the number of companies where people at that company have contributed to Electron is much bigger.

**Shelley Vohr:** Yeah, absolutely. Thanks for clarifying that.

**Jeremy Apthorp:** Yeah, of course. I was going to mention Figma, and... I’m not sure what company \[unintelligible 00:43:28.06\] works for, but that person does a lot of work on VR-related stuff.

So there’s a lot of companies who are using Electron for something quite specific, and they have a few people who come and send us PRs every now and then. But the four companies that have people working on Electron fulltime are GitHub, of course, Microsoft, Atlassian and Slack.

**Kevin Ball:** So soon to be three companies?

**Jeremy Apthorp:** \[laughs\] Well, Google recently launched an app that’s built on Electron, so maybe it’ll go back up to four.

**Kevin Ball:** \[44:12\] Nice. And what about -- so you mentioned there is some tooling and other stuff that sprung up around Electron... How large is that broader ecosystem?

**Shelley Vohr:** Just in terms of the number of apps that are using it, or...?

**Kevin Ball:** I was thinking about folks who are working on Electron-specific libraries, extensions, tooling – that type of thing. Maybe not in the core package, but stuff that people are using with Electron.

**Shelley Vohr:** Surprisingly, a lot. I think sometimes even for me, just like my day-to-day is in the weeds enough that it’s easy to forget the sheer scope that Electron has, and the number of people that are familiar with it, and use it, and want to help us make it better every day.

I know if you search our website right now -- actually, we just rolled out a redesigned search function that was built by an awesome community contributor...

**Jeremy Apthorp:** Yeah, it's super nice.

**Shelley Vohr:** Yeah, and it allows you to actually search not just all of the applications that are using Electron, but all of the libraries and frameworks that have popped up around, or just little modules that have popped up around improving Electron on a simpler scale, or even just the people that have written -- we range there from diagnostics tools, to improved traffic, and some easier ones... Improved usage of the logging functionality, or to anything really.

But all of those things are incredibly important to continuing to proliferate the degree to which Electron fits people’s use cases and the ways in which we can make the onboarding ramp to be able to use Electron a lot lower.

**Jeremy Apthorp:** Yeah, I was gonna add to that. I think that there’s -- throwing back to one of the things that we were talking about earlier, about why do people use Electron, I think definitely one of the reasons for that is the community of tools that’s there.

If you’re building, say, a Qt app and you want to go and build auto-updating for your app, for example, so that your app will stay up-to-date on your users' machines, that’s something that there’s a package for in Electron, and there’s very strong community support for a really big pain point.

Every person who’s serious about developing a desktop app is going to have to deal with keeping their apps up-to-date on their users' machines... And that’s something that the Electron ecosystem has fantastic support for.

You can go through the series of things that everyone’s gonna have to do... It’s like, well, debug crashes that happen on the client’s machine - there’s some really fantastic support for that coming from the Electron community. So I think that definitely is perhaps beyond the batteries included, but batteries available for Electron, in a way that you would have to build things in a much more custom way if you were doing things with a different framework.

**Kevin Ball:** Awesome. Maybe let’s talk a little bit about what is it like being on the core team, being an open source maintainer. There was a recent tweet from Jeff Lembeck at npm talking about just the flack that you sometimes run into. It’s crazy, you’re building this thing that people can use for free, that is incredibly powerful for them, and yet some folks are unremittingly negative.

I know that you have open source maintainer burnout is a big issue in our community... So what is that like for you, especially since you’re in the great position of being able to work on this full-time, paid by a company? How does that work for you?

**Jeremy Apthorp:** I can go first... I’m sure Shelley has thoughts on this as well. I think being paid for it makes a huge difference, and I think there's a lot of flack that gets thrown at projects that are maintained by people doing it in their spare time or doing it as a passion project.

\[48:06\] Part of what you do when you do that is like, “I’m building this thing because I want to use it and love it", and it can be super demotivating to see that people can really focus on the negative aspects of that.

But for me, working at Slack, I’m surrounded by people who depend on the app that I enabled to exist with the work that I’m doing... So I’m surrounded by people who are thinking positively about that, and I’m getting a salary for it, which is definitely not…

**Kevin Ball:** Not too bad.

**Jeremy Apthorp:** ...not to be sneezed at. I think that makes a really big difference.

The other thing that I wanted to talk about what how fun it is to work with developers from all sorts of places around the world, and different companies and different goals, and things like that... But I wanted to kick it to Shelley to see if she wanted to say anything first.

**Shelley Vohr:** Yeah, my sentiments are rather similar I would say, in the sense that it definitely helps a lot that it’s easier for me to frame it as my job, instead of something that I’m doing in my free time, because it’s a little bit easier to -- you know, the flack that you get and the negative comments you get wear you down a little more if you feel like you’re doing this just in your free time, for the general benefit of the community – and I obviously still do feel like that, and I’m so excited about the impact that the work I do is able to have... But it’s also easier to frame it, I think, in a little bit of a healthier way with the knowledge that it is my job at the end of the day.

And then also I really love, definitely -- probably one of my favorite parts of being able to do this is that I get to work in such a cross-company and a cross-team, collaborative way, and I get to hear all of these different perspectives and all the different needs, successes and issues that different companies have when they use the thing that I help build... Just because I think that wider access perspective allows you to grow both personal and technical skills surprisingly fast, I’ve noticed, just because you’re forced to think about all these things in a way I think you otherwise wouldn’t be able to if you just didn’t have access to that raw array of perspectives.

**Jeremy Apthorp:** I think also one thing that really is impressive to me about the way that the Electron community is built is that we’re very serious about our code of conduct and being inclusive. Jacob does a lot of this work - Jacob Groundwater at GitHub - of monitoring the issue tracker and making sure that people are being respectful, and making sure that people feel included. I’ve been really impressed with the way that the community is organized and kept inclusive and kept open and welcoming.

So I think Electron does a fantastic job -- not that I’m biased, but a fantastic job of building a community that’s really open to everyone... Which certainly is not to say that we’re "Mission accomplished", this sort of thing. It’s something that is not like a medal that you put on your coat and you say, “We did it!” It’s something that we do actively every day and every person in the community is involved in, and it’s something that we’ll continue to do, and I’m really happy to be a part of a community that puts such an emphasis on those aspects.

**Shelley Vohr:** \[51:56\] Yeah, I agree pretty strongly with that, in the sense that I really love the things we’ve been able to do so far, but at the same time I’m pretty excited to keep iterating on, for example, the way that we label good first issues, and the way that we make ourselves available to less experienced programmers who might want to contribute to an Electron issue, or write a feature and might not know how.

**Jeremy Apthorp:** Yeah, absolutely.

**Kevin Ball:** That’s actually a perfect introduction to what I was going to ask, which is - if somebody is new, either they’re using Electron but they’re not really plugged into the community, or they’re excited and they want to know how they can get involved, what are the front doors? Where do you recommend people get started?

**Shelley Vohr:** So we have a Slack instance for maintainers that I would say is probably one of the best avenues, just because it’s the easiest way to reach us most directly. Through that, I’ve actually been able to pair in an office hours format one on one with several new contributors to the community, and been able to sort of pick out issues, and walking through what the development environment looks like for Electron... And then in a couple of cases we’ve been able to pair and to help them get a bug fix or feature out the door and get some commits into Electron.

**Jeremy Apthorp:** Yeah, absolutely. I think one way that as the Electron community we can improve is making that clear... One of the things that’s being discussed at the moment - certainly nothing final, but we’re talking about how does somebody new to the project understand all of the work that’s going on at the moment? Who’s working on what? What are the most important priorities that are within the team? And if I want to lend a hand, and say I’m interested in keeping Chrome up-to-date, or I’m interested in making Electron secure by default, or who’s working on that, or who do I talk to, and there’s no list of who’s doing the most work on this, who’s the right person to talk to if I want to know how do I jump in and help out... I think that’s something that we can do better at communicating.

**Kevin Ball:** So speaking of those hot topics, what’s on the road map? What are you super excited about that’s coming in the next six months?

**Shelley Vohr:** There’s a pretty big range of things, to be honest. I’m super excited about something that I took up recently actually, which is I started contributing more to Node core. I didn’t really think about the possibility of this until recently, because I typically am the one who upgrades Node within Electron, and the way that we do that is that Node works for us, but there’s definitely a few things we have to do to make it work more specifically for our use case. As a result of that, we float about 25 patches on top of Node, so one of the things I’ve taken up recently is trying to see how many of those patches that I can upstream into Node and make more extensible to help the \[unintelligible 00:54:52.11\] even better for Node itself. So I’m super excited about that, and then also super-excited about being able to interact more within the Node community and learn from them, and see if there are ways in which we can bring some of the things that we've implemented in Electron into Node.

**Jeremy Apthorp:** So I just pulled up the notes that we wrote up from last summit... As Shelley mentioned earlier, we have a summit twice a year, to get a bunch of people who are working on Electron regularly together and talk about things that are top of mind, and what we’re going to do about them, align, and also just get to know each other as a team.

I think a huge part of the value of that is seeing people’s faces and being like, “Oh, you work on this thing, I saw your name on that issue... How is it going? I now know who you are as a person, as well as a name on GitHub.”

\[55:56\] But as a part of that summit, we came up with collaboratively the things that we’re all collectively most concerned about or most excited about, and one of the biggest things that I think we had the most conversation about was keeping up-to-date with Chrome.

Electron 3, the beta version of Electron 3 is on Chrome version 66, which I think is already three versions behind Chrome proper. So there’s a lot of stuff that we’ve been talking about - how can we improve our velocity on that and how can we stay up-to-date with Chrome and stay current... Which is a tricky thing, because Chrome is kind of a moving target.

They don’t think of their internal APIs as stable at all, and we call a lot of them. That means -- I fixed a bug the other day where Chrome changed the way that they check whether spell-checking is enabled on a particular field or not, and had it default to false... And we didn’t implement that new method, so that meant spell-checking was just disabled for everything.

So that’s the sort of thing that happens a lot. If we’re lucky, we get a compiler error and we can just go and fix it. If we’re unlucky, it’s just silently wrong... So that’s a challenge for us, and there’s a bunch of stuff that we’re working on to improve our velocity and our correctness on that.

Something that I’m working on personally is switching the build system of Electron to the same build system as Chromium. Chromium used to use GYO, and Electron also currently uses GYP to build... But Chrome a couple of years ago switched to a build system that they wrote themselves called GN, and So we’re shifting over to that, which will enable us to have to do less adaptation work.

If something changed in Chrome, like build flag changed, then we would have to figure out what that was and copy it over to our GYP config. Now we can just depend on the target inside of Chrome directly.

So that’s some ongoing work, but there’s also things around CI, and running Chrome’s tests as much of them as we can from our build of Electron, upstreaming things, like Shelley said; if we can upstream the patches that we need inside of -- we have a bunch of patches to Chromium, as well as patches to Node, so if we can upstream those, that will reduce the maintenance burden on us.

\[58:43\] Things like introducing some modularity... For example, some of our less commonly used features are things like PDF display or printing, and if we could flag those off, that means that somebody who’s working on updating to a new version of Chromium doesn’t have to fix all of the build errors in that particular module straight away; they can get the base stuff working, and then somebody who’s an expert in one of those particular features – like PDF or off-screen rendering – can come in in parallel and fix the errors or whatever needs to be fixed in that particular module... So using a technical tool there to introduce parallelism on a people level.

So those are some things that we’re thinking about for staying up-to-date with Chrome. The other things that we talked about... That’s one of the ones that I know the most about, so that’s what I will blubber on about, but we also talked a lot about the relationship between Electron and the web platform, and progressive web apps, and how can we build a smooth path in between Electron and PWAs.

There was a bunch of people from the Google Web Platform team at the summit, which was fantastic – really good to talk to them. We were talking about how we do issue management and outreach, how do we get more people working on Electron and stuff like that, being secure by default... There’s bunch of other stuff – performance, making sure we have a regular release process...

**Kevin Ball:** Nice. So we’re getting close to time... We could keep talking for forever, because there’s so much good stuff here... Any last notes that you all wanna put out there before we close up?

**Jeremy Apthorp:** Thanks for having us. It’s been great.

**Shelley Vohr:** Yeah, nothing big comes to mind right now. Yeah, thanks so much for having us. It was awesome to be here.

**Kevin Ball:** So let’s close up then. This has been JS Party \#34, talking about Electron with our amazing guests, Shelley Vohr and Jeremy Apthorp, codebytere and nornagon, as well as Feross, and this is Kball.

Next week we will be off for JS Party, as the Changelog team is heading up to OSCON in Portland, but tune-in in two weeks, Thursday, 10 A.M. Pacific, 12 Central; 1 P.M. Eastern time. We do this live every week (except next week) and we’ll catch you next time!
