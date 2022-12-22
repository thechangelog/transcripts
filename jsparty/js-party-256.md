**Jerod Santo:** Oh yes, you know what time it is... It is JS Party time. I am your internet friend, Jerod, and I'm here with no panelists. It's just me. I can't intro Amal, or Nick, or Kball, or Amelia, or anybody else... But you know what? I'm okay with that, because I have a very special guest today, and that means I get him all to myself. Yes, I am joined by Ryan Dahl. What's up, man?

**Ryan Dahl:** Hello. Not much... How are you doing?

**Jerod Santo:** I'm doing pretty well. Happy to have you here. I think it's the second time we've gotten to chat over the years. A year or so back you were on the Changelog with myself and Adam, and today you're on JS Party, so that's very cool... We're here to talk about Deno. So big news from Deno land - as of version 1.28, which launched I think mid-November, you added 1.3 million new packages. Here's how I think this went down... I think you went out to Npm, you scraped the list of package names and descriptions, and then you got a huge instance on EC2 or something, and you plugged GitHub Copilot into it, and you just fed GitHub Copilot the package names and said "Port this Deno. Port this to Deno. Port this to Deno." Is that the process of getting this stuff out there?

**Ryan Dahl:** Yeah, pretty close... No. Basically, we did a bunch of compatibility work. So Deno is really founded under the idea of moving JavaScript forward... And Npm has been around for many years now, and contains all sorts of legacy stuff in it. And in particular, it has a lot of common JS stuff. And it's been many years now since we've moved to ECMAScript modules, and Deno is ECMAScript module-first, and really pushing its users not to use require; in fact, forbidding its users to use require. But if you link to any package in Npm, somewhere in the dependency tree is going to be some require statements, and some require fs, some built-in Node module stuff. And what we did is we essentially implemented that in Deno, but we did it in a way where you can't just use that in your normal Deno scripts. You can reach through this portal into Npm, and transparently enable this compatibility mode that allows you to import. Essentially, it's hard to support everything, everything, everything, for various reasons; for bug reasons, for security reasons, but 80% to 90% of modules work pretty well, work out of the box.

So yeah, the compatibility layer has been under construction for about a year now, and is now stable in Deno, and you can essentially just import Npm packages, and it should more or less work out of the box. If that package is a more modern package, that gives TypeScript types and stuff, you should even get TypeScript support out of the box in your editor, with tab completion and stuff.

**Jerod Santo:** Very cool. So it's been in the works for about a year; a big effort, no doubt. I wonder about the psychology of making this decision. It was obviously very pragmatic. A big blocker for adoption - you know, we've been talking about Deno I think ever since you announced it, and I've been asking people who come on the pod "Are you using Deno? Have you tried it?", and a lot of people are like, "Well, I just can't use this. I can't use that. I already have an app that has these packages. When I start something brand new, I'll give Deno a look. But for now, no, I haven't tried it. Have you?" And then the answer is kind of similar. Some people hopped in, but a lot of people haven't. So this is obviously a big opportunity to exposing it to a bunch of people who otherwise couldn't even give it a shot.

\[00:05:56.13\] That being said, with Deno being your big restart, your opportunity to rearrange the letters and have a clean break from Node and some of the mistakes that you made with Node, did you have like a push and pull in your heart as like Ryan, the CEO of Deno, versus Ryan, the lead dev of the Deno project"? Like, "We're kind of going back and bringing some of the legacy with us", whereas you have this fresh break prior. Was that a tough decision to wrestle with, or was it a no-brainer?

**Ryan Dahl:** The reason I even worked in JavaScript in the first place is because it's the default programming language in a very real sense, and this is where the vast number of programmers are. I'm not making Deno for a small subset of enthusiasts. This is software meant to be used by millions of developers, just like Node.

**Jerod Santo:** Yeah.

**Ryan Dahl:** And so we're trying to push JavaScript forward, we're trying to introduce TypeScript, we're trying to get people to use ECMAScript modules, we're trying to get people to use async/await instead of callbacks... There's all these pressures that we're introducing to push people forward. But at the end of the day - I mean, this is software for people, and it needs to solve their problems, and I think we've found a good way to do this with this portal, where we're not really compromising on our principles here. We're just introducing a way to reach into the Npm ecosystem.

**Jerod Santo:** Yeah. So is the portal conceptual, or is it also literal or technical? Like, is there a proxy involved here, or is it just like conceptually you're doing this? Tell us more about the implementation.

**Ryan Dahl:** There is a common JS implementation inside of Deno, there is Node built-in modules inside of Deno, and there's an Npm client inside of Deno. So all of this stuff is essentially written in Rust, to a large extent... And yeah, we can automatically download the Npm packages. So yes, it's technical. It is not metaphorical. There is a literal portal there.

**Jerod Santo:** Okay. Cool. On the announcement post about this Npm support, you mentioned that it's easier and safer with Deno. I thought we could use those as a couple of talking points. Let's focus in on easier first; you mentioned there's no npm install, it's a simpler thing... Can you maybe reiterate exactly how it works? There's no package.json, for example... There's a lot of stuff that you don't have to have, which we're kind of used to having with Npm.

**Ryan Dahl:** Right. So one of the things that we're trying to achieve with Deno is that it can scale up to big projects, you can have TypeScript out of the box... We're very concerned with the dev experience of it. But Deno should also scale down to really small programs, in particular single-file programs. And in Npm/Node this is not really possible, because you always need a package.json. As minimal as your package is, you are required to have two files.

**Jerod Santo:** Right.

**Ryan Dahl:** What we do with this Npm feature in Deno is you do \[unintelligible 00:09:00.20\] say, if you want version 5 of Express. What happens internally is the built-in Npm client will go out and download Express and all of its dependencies from the Npm registry. It does this not into a local Node modules folder, but into a global Node modules folder that's hidden in some cache directory. And obviously, it only does this on the first request; subsequent requests don't need to go download that.

\[00:09:35.04\] The security mechanisms in Deno - so as a reminder, Node unconditionally allows access to the file system and network. In Deno, because JavaScript is a secure sandbox, we wanted to give users the ability to conditionally not allow access to the file system, not allow access to the network, not allow access to environment variables. And that's the same -- you know, when you're importing an Npm package, that still remains, right? It's not that Npm, your Express now has unfettered access to open internet connections. In Deno the --allow-net flag still applies there. So this mitigates the problem that we've seen in the Npm ecosystem, these attacks where people upload malicious packages, or somehow compromise a popular package and insert some nefarious code in there.

We're still going to download that nefarious code, we're still going to run that nefarious code, but depending on what access you give it... You know, for example, if you're only accessing a certain server on the internet, maybe you do --allow-net=datadog.com.

**Jerod Santo:** Right.

**Ryan Dahl:** Then any other access to nefariouswebsite.com is going to be blocked. Similarly for file system access and environment variable access, right? You don't want a random Npm package to suddenly have access to your, say, AWS keys that are stored in environment variables that really have nothing to do with that code path.

**Jerod Santo:** Right. So does that operate -- I know that Deno operates a lot at the runtime level, or at the program level, like --allow-net, or --allow-read or allow-write, is like when you execute the program. When it comes to these Npm modules, is that the same level of granularity that you're specifying the allowance? Or is it on the package-by-package basis?

**Ryan Dahl:** Yeah, we can't do it on the package-by-package basis. That is an area of research that has been going on for many years now, and potentially will be possible in the future using things like shadow realms. But as it currently is, JavaScript, even with ECMAScript modules, is such a dynamic programming language that monkey patching is always possible in some form or another. And we don't think it's possible with the current setup to -- we would love to do this; we would love to say "Express only has access to this stuff." But yeah, with the JavaScript of 2022, that is not possible. But maybe in the future. So yeah, the conditional access, the permissions system is process-wide.

**Jerod Santo:** Right. Which is better than nothing, for now... But I think we do want to reach that point. Hopefully, Shadow Realms, or some sort of technology gets us there. Because I think as a Deno program scales, at a certain point some aspect of your application is likely to allow certain things, like allow-write, for instance, to write into the file system. Maybe you're logging, maybe you're doing configuration; and there's lots of reasons to write to the file system, obviously. And then you pull in this new package, and it's requesting -- I think in the example in your blog you use this malware that you're installing, because you don't know it's malware, and it wants to write to user/bin. And of course, it's trying to install some sort of executable thing there... And what's cool about the way you all have done this is Deno will stop and say, "Hey, this thing wants to write to user bin. Do you want to let it?" Well, if you're already using --allow-write on your program, I think it's just going to work, right? It's not going to prompt you for that.

**Ryan Dahl:** That's right. But you can also allow access to a subtree. So ideally -- and this has been a debate that we're thinking about doing... That maybe --allow-write should only allow access to the current directory and its subtree stuff, rather than the entire file system, as kind of a more restricted default. But yeah...

**Jerod Santo:** Yeah, so that would be totally cool. I mean, that likens to your specific domains only allow networking stuff, right? Like, allow networking to these domains. Then, if something comes along and tries to write to some unknown domain, send some data off to there, it's going to stop it. But yeah, why would I ever want to write to user/bin inside of my web app? Like, that should be a red flag immediately.

**Ryan Dahl:** \[00:14:10.01\] Yeah. To be clear, you can do --allow-write=. That currently will allow access only to your current subtree, which should do that. And what we're thinking is you shouldn't need that =. part of that flag. You should just need allow-write.

**Jerod Santo:** Right. Yeah, I think that'd be a step in the right direction. So let's talk about compatibility. You said 80%, maybe 90%... Is there a way -- let's say I have an app that I'm thinking "Well, it's pretty close to being Deno-compatible. Maybe I can take it the extra mile and get it over to there. I have a few modules..." Is there a way I can quickly check "Is this Deno-compatible or not?"

**Ryan Dahl:** Just pull it in... If it's published on Npm, I would just open up a script and import it. You have to prefix it with npm:, but import it and test it out. It's kind of difficult due to the dynamic nature of JavaScript to automatically go through the registry and test each module to see if they're working or not. I mean, we can test if they can import stuff, but I what you really want to do is run the unit tests and see if they're passing. And unfortunately, just due to the very vast number of ways that that can be done in JavaScript, it's not really possible for us to do that.

**Jerod Santo:** Yeah...

**Ryan Dahl:** But yeah, I would import it and start playing around. And I think unless you're doing something real crazy in your module, or like very old-school, you should probably see this working out of the box.

**Jerod Santo:** What kind of stuff fits into the category of real crazy, or old-school, like very old Node syntax, or...? What's crazy? CPU-heavy, or anything that's like architecture-dependent?

**Ryan Dahl:** Like accessing \_\_proto\_\_ For security reasons we don't allow prototype chain hacking stuff. This is just not a good idea, so we explicitly disallow that. But there are packages out there that rely on this behavior, and unfortunately, packages that depend on packages that rely on that behavior, even if they themselves don't depend on it. And so don't use \_\_proto\_\_ So stuff like that; things that you really shouldn't be doing anyway, and you really don't want your dependencies to be doing.

People will shout and scream -- you know, this is always the trade-off to be had with backwards compatibility, is like, people just want their stuff to work. They don't care. And on the other hand, people who know JavaScript are like, "Yeah, but we're really trying to push people forward here", and it's just kinda... What do you do in that situation? Obviously, we want it as usable as possible for people, but move to modern JavaScript and don't do those sort of things. You'll thank us later.

**Break:** \[00:16:56.02\]

**Jerod Santo:** So last May you dusted off your personal blog, which you hadn't written on in many years, to write a post about JavaScript containers. Can you tell us what the concept is here? Why it's so exciting to you, enough so to pin a blog about it?

**Ryan Dahl:** Yeah... Mostly because I don't have a Twitter. I need some outlet to write somewhere, and very, very occasionally I'll dash off something tinyclouds.org. Yeah, JavaScript containers - so we're building this serverless system called Deno Deploy, and we're doing this as a business; this uses the same technology that we're building Deno on. The concept with Deno Deploy is that you are not -- most cloud providers, you're basically writing Linux programs. You're writing a Linux server. Maybe it's in Python, maybe it's in Go, maybe it's in JavaScript with Node, maybe it's in Deno... But at the end of the day, you're packaging it up in a Docker container, shipping it off to DigitalOcean, to Fly.io, you're using AWS Lambda, but like the abstraction layer that you're working at is ultimately a Linux abstraction. And maybe you make that as thin as possible, maybe you make that Alpine Linux, but ultimately, you have this Unix system that you're working within. And that starts becoming a little weird after some time, because you realize that almost everything that your application is doing is in JavaScript. Essentially, a lot of these API servers are taking incoming requests, maybe doing some authentication, making an outbound connection to a database, maybe calling out to some other APIs, kind of gluing together the responses somehow, sending that back to the user. And the Unix part of it is shrinking and shrinking, and the business logic, JavaScript part of it is growing and growing. And at some point, you realize, what's the Linux part of this actually doing for us? Isn't this just an unnecessary complication? And I think in particular for us JavaScript users who are used to opening Chrome, opening Chrome DevTools, having this little shell in there where you can type JavaScript is pretty similar to your terminal where you can type shell script. And shell script is kind of similar to JavaScript in a way.

\[00:22:10.15\] And you start thinking - in Chrome DevTools, it's not Unix in there; there's no real directory tree, there's no environment variables, there's no systemd, there's none of this Unix stuff. You're just in this browser world, and it doesn't matter what operating system ultimately is underneath it if you're abstracted into this nice, scripty, kind of JavaScript world.

And what we're trying to do with Deno Deploy is really raise the abstraction layer for a cloud service. And so instead of providing JavaScript inside of a Unix container, we're just providing the JavaScript. And so you can start thinking of servers written in JavaScript as being their own kind of container, rather than packaging this up with Node inside of a Docker container. As long as you're comfortable being explicitly JavaScript, you can kind of just live in this browser worldview. And this has a lot of nice benefits, right? Your JavaScript server package, if you use Deno, is very small; on the order of kilobytes, where you essentially just zip up your JavaScript source code. And this is quite small. So our deployments happen in, I don't know, five seconds or so... The cold start time for this, because we're not booting up a Linux instance and starting up other stuff, there's just less involved.

**Jerod Santo:** Right...

**Ryan Dahl:** Really, what we're doing in Deno Deploy is we're starting a new tab in the sky, essentially, to service requests.

**Jerod Santo:** I like that metaphor. That makes sense.

**Ryan Dahl:** If you think of your Chrome browser and all the tabs that you've got open - it's very similar to what we're doing as a serverless hosting service. So you've got your bank open in one tab, you've got your work email open in another tab, and you've got some nefarious website open in another tab. They're all running JavaScript programs. They're all installed super-quickly. I mean, think about how long it takes to install Figma. Like one second? You open the tab and it's there. And compare that to like how long it takes to install Adobe Illustrator.

**Jerod Santo:** You can't compare the two.

**Ryan Dahl:** These things are made to be installed quickly. You don't even think of it as being installed, even though you are downloading all of the source code.

**Jerod Santo:** Yeah.

**Ryan Dahl:** I mean, it's just instantaneous. So you're really running a multi-tenant environment; lots of multi-tenant programs. These things start up super-fast. And yeah, that's essentially what we're doing, but server-side. So we have many, many tenants, many hundreds of thousands of websites that we're hosting on Deno Deploy. And when an incoming request comes in, it's very likely that we don't actually have an isolate running for that. But we can start one up in the flash of--

**Jerod Santo:** You just hit Cmd+T and you're ready to go, right? You just pop a tab...

**Ryan Dahl:** Yeah. I mean, there's no UI, obviously.

**Jerod Santo:** I know, I'm just -- I'm following your metaphor.

**Ryan Dahl:** But like in milliseconds, we can basically spin this up and it can respond to that request. And with network latency, our cold starts are around 400 ms, 300 ms, something like that. Warm response time's around 40 ms. So anyway, you get these -- compare this with, say, Lambda, and the cold start times that you experience there. I mean, maybe that's an unfair comparison, because Lambda is so egregious, but... Anyway, we're removing complexity from the user. And from the user's perspective now, there is no Linux, there's no systemd, there's no file system. It's just JavaScript now.

**Jerod Santo:** It's just JavaScript. And you have all the benefits of isolation for security purposes, and there's other niceties as well. So like underneath that, in Deno's cloud that we can't see, or - I know there's other teams working on similar things. It seems like Vercel's doing similar, CloudFlare perhaps... Maybe you can speak to some of the other people that are in your world, trying to provide these things.

**Ryan Dahl:** \[00:26:06.08\] I mean, Vercel's reselling Cloudflare workers. There's essentially two implementations of this idea; may be a couple of more, but there's essentially two real implementations, which would be Cloudflare Workers and Deno Deploy. Things like Netlify Edge Functions - Netlify is actually a partner of Deno, and Deno Deploy handles the Edge Functions for Netlify, in a similar way to how Vercel uses Cloudflare Workers. Or for example Supabase Edge Functions is actually Deno Deploy under the hood.

**Jerod Santo:** Okay, interesting. So is Deno Deploy then -- like, are you a layer one? Do you consider yourself layer one? Do you have your own infrastructure, or are you built on top of somebody else's?

**Ryan Dahl:** We're built on top of public cloud infrastructure? So we run out of all GCP and all AWS regions.

**Jerod Santo:** Okay.

**Ryan Dahl:** We are -- I would say this is essentially an implementation detail on our side. At some point, I think it might make sense to go to a lower-level provider, like Equinix... But essentially, that's a cost question on our side, to optimize costs. I think it doesn't ultimately change the user's behavior. So I'd consider that kind of a business decision. And generally, that question should be abstracted away from people. We give you an IP address, it's Anycast-routed to the nearest data center, and you should generally be near to a Deno Deploy instance anywhere in the world.

**Jerod Santo:** Right. Do you think it's potentially also a speed move? Like, obviously it's a cost move. So like, if you're competing with Cloudflare Workers, they have an advantage with their infrastructure. But could it also be like faster cold starts? Like, couldn't you get better performance if you were running your own?

**Ryan Dahl:** From a compute perspective, I don't think that's where the optimization -- I think we can improve cold start times, but I don't think we're losing anything by using EC2, for example.

**Jerod Santo:** Right. Okay. So let's talk about cold start times... Because obviously, the lower you can get, the better. I think you said 40 milliseconds is like warm, and that would be spectacular. What are your personal goals for Deno Deploy? Maybe give it five years, what do you think you're gonna get down to? Is 40 milliseconds -- it's better than some things, but obviously, we'd love to have it a lot faster.

**Ryan Dahl:** Our measurements include network latency. So it's important to say what we're measuring here. So this is -- you are a user, you are calling out to our system, and coming back; and that is a cold request. How long does that take? We can do this under 200 ms in some regions, like U.S. East, and in some regions we are less good. And hopefully we'll have this fixed soon, but in Africa, we tend to have some latency problems. I would hope that over the next couple of years that we get this down to 100 ms. worldwide. 200 ms. maybe, I think.

**Jerod Santo:** Okay.

**Ryan Dahl:** Basically, not human-noticeable is what you want it to be, right?

**Jerod Santo:** Yeah, totally.

**Ryan Dahl:** You should not have that flicker of pause as it's starting up. And certainly --

**Jerod Santo:** Yeah. You don't want to sit there long enough to think about it.

**Ryan Dahl:** Certainly under a second is absolutely necessary.

**Jerod Santo:** Yeah. So Cloudflare is working on similar things, Deno... There's also this working group, the Winter -- what's it, Winter CG?

**Ryan Dahl:** Winter CG?

**Jerod Santo:** Yeah. So in my head, this is all in the same basket of things, but I'm not really sure exactly what Winter CG is, besides it's like a working group for cloudy things... Can you tell us about it, and help clear it up for me?

**Ryan Dahl:** \[00:29:44.20\] Yeah. It's a community group; it's not an official standards organization, but it kind of operates like that. It's a collaboration largely between Deno and Cloudflare, because we're the two ones building systems like this. And the question is what -- it's pretty well specified what JavaScript on the browser does. There's many, many, specifications about how this works, and what those APIs look like... But very clearly, we are wanting to use JavaScript outside of the web browser as well. And that always is a big open question - what does it mean to make an outbound TLS connection? What does it mean to accept a new incoming request? What's the web server API? And I've invented APIs in Node to do this, I've invented APIs and Deno to do this, Cloudflare has invented APIs in Cloudflare Workers to do this... It would be nice if we could just agree on the rough idea of what a JavaScript server API might look like. And it's difficult, but I think that group is taking steps in that direction, to clarify how server-side JavaScript should operate.

**Jerod Santo:** The cool thing about this, if it all works out, is that you have now this baseline that people can shoot for if they're maybe building a new runtime. It's interesting, there's like this new renaissance of JavaScript and TypeScript runtimes, and I'm curious what your thoughts are on Jarred Sumner's Bun project that's been out there for probably nine months or a year now... Is that interesting to you? Have you poked at the code and seen what he was up to, and take inspiration? What do you feel about alternate runtimes, specifically Bun?

**Ryan Dahl:** I mean, it shows that server-side JavaScript is alive and well, and no, this is not going to be the end of the story here. I think the focus on performance is interesting. I have some qualms with how these benchmark numbers are presented; very cherry-picked. I would double-check your numbers. But I think it's good to have people thinking about this stuff.

**Jerod Santo:** Fair enough. Yeah, it's just interesting, the benchmark thing... Because it's kind of like, this is where software engineers - the heads hit against each other, is like when it comes time to like "Whose is fastest? On what strata? What are you paying attention to? What are you optimizing for? Are the results legit? Are they cherry-picked? Is it real world? Is it synthetic?" And we tend to get mired down in the mud.

**Ryan Dahl:** To be clear, our goal is to have Deno be the fastest JavaScript runtime. And there is no world in which Deno will be 2x slower, or 0.5x slower... Like, the claim that Rust and V8 are subpar technologies is very questionable. V8 is very, very fast, and Rust - you can get any machine code you want out of Rust. So Deno will be the very, very fast. So if that is the only claim there, then -- I don't know. I would just check numbers, is all I would say.

**Jerod Santo:** Fair enough. Well, I love the spirit of competition. You know, somebody comes out and says "This thing is fast, or faster", and it's like, well, we can talk about the facts of that, but I like the spirit of competition where you say, "Well, Deno's gonna be either fastest, or really, really fast", and so you are committed to that... And I think that's spectacular. Because at the end of the day, end users win, right? Like, the world wins when everyone's motivated to improve on these critical factors. Like, if you can get Deno Deploy cold starts from 400 milliseconds down to 200 milliseconds, or 100, over the next 3 to 5 years... Like, people benefit from that improvement, and so competition is good.

**Ryan Dahl:** Yeah, for sure. Show me a benchmark where Deno is slow. We will fix it. And there is no world in which we -- we focus on web servers, and JavaScript runtimes... And to think that, like -- just like a little bit of cherry-picked examples should be taken with a grain of salt.

**Jerod Santo:** \[00:33:58.00\] Wise words, I think. With any benchmark - take it with a grain of salt; do your own homework. And we need people out there running them in different contexts etc. in order to get a more broad picture of what is truth with regard to such things.

**Ryan Dahl:** Yeah. I guess I'd also say that these things are pretty complex systems, right? Node and Deno. And they take many years to develop. I mean, they're not as complicated as Chrome itself. I'd say even an order of magnitude less complex. But these are very, very large software projects, with lots of stuff. And it's one thing to put out a demo, and it's another thing to ship production software. There's a lot of people playing around with JavaScript runtimes. JustJs, for example, is a JavaScript runtime that does really great in the TechEmpower benchmarks, and should be known more. Andrew, who creates JustJs, is fantastic; great at optimizing web servers. But, I mean, it's just -- look at the source code; it's very much a demo, and there's a difference between a demo and something that actually has...

**Jerod Santo:** Production-grade...

**Ryan Dahl:** ...many tens of thousands weekly users that are using this for production workloads.

**Jerod Santo:** Right. That makes me think about Deno's capabilities... Would you say there's any type of application, or capability that Deno allows for? So like, if you pick up Deno, you can do this new thing as an app developer, that you couldn't do with Node, or that you couldn't do with other server-side tech in general... Is there anything that it unlocks for you that's unique?

**Ryan Dahl:** You can do almost anything with Node if you set your heart to it, right? It's a general-purpose system. I think removing complexity from that system, and getting people to their solution faster, is really what we're aiming at, and doing this in a more secure way, and at the end of the day, giving them more performance for their program. But it's not like there's something that you could do in Deno that you couldn't do before. I think with Deno Deploy, that's where we are aiming to really unlock new behavior, to be able to write a 50-line file that defines, say, some WebSocket server, and deploy that in a second, and have that run indefinitely as a persistent WebSocket server out there. I think that is pretty cutting-edge sort of stuff. Deno, from the developer experience, gets you to your solution faster. I think that's the newness.

**Break:** \[00:36:37.12\]

**Jerod Santo:** So where does WebAssembly fit into this mix? We've been talking JavaScript containers, we've been talking about running things on the edge and in the cloud... And I know WebAssembly plays into this, but I'm always cloudy on exactly where and how. Can you help understand if there's a story here that involves WebAssembly?

**Ryan Dahl:** Yeah, so we were making this analogy of like the Chrome DevTools console and the Bash terminal shell that you have, and we were saying like, "Oh, Bash and JavaScript are kind of similar." In some ways the web worldview, JavaScript, is kind of the new Bash. So the question is like, okay, so you're in your terminal, and now you call out to ImageMagick to convert a JPEG to a PNG, right? You do convert image.png to image.jpeg, or whatever. That ImageMagick program is written probably in C, and is compiled into some machine code, and packaged up in some Elf executable. You're calling into this native code from there. The analogy of that in the web worldview is WASM. So you're kind of scripting around with JavaScript, you're in your JavaScript shell, and then you can call into WASM to execute some "native" code, but native code in a platform-independent, secure, webby sort of way. And so the analogy is JavaScript is to Bash as WASM is to Elf, or machine code, or as it is to executable programs.

**Jerod Santo:** Okay. So when it comes time for a cloud platform like Deno Deploy then, do those things coexist? Like, from your Deno apps you can call into WASM apps, and stuff like that?

**Ryan Dahl:** Yeah. JavaScript is the substrate that everything lives in. So you accept your request in JavaScript, but then you need to process an image, or otherwise call into, say, some Rust code, you would call into WASM. Just as you would in a browser context.

**Jerod Santo:** Gotcha. So do you see Deno Deploy more as an end user or indie programmer product? Or do you see it more as like a middle layer between me and Supabase, for example, where you're actually empowering them to do stuff that they couldn't do? Who do you see your customer as? Is it both? Is it one in particular? Because it seems like the big money might be with the bigger providers, but then also, the longtail is indie.

**Ryan Dahl:** I mean, edge compute is kind of an interesting trajectory, right? It's kind of started with - if you're very old, like me, it started with like Apache configuration files, like these XML configuration files where you could do redirect rules, and path rewriting and stuff in this XML file... And then the next generation of that is like NGINX, where you have maybe even some Lua scripting abilities to do, like a bit more logic, some more complicated path-rewriting rules... We're kind of pushing this further to where now - okay, now you can actually do this not in Lua, which is a terrible programming language. 1-indexed? I mean, ridiculous...

**Jerod Santo:** \[laughs\]

**Ryan Dahl:** \[00:42:18.12\] But now in kind of the default programming language, the lingua franca of programming languages, JavaScript, and kind of script these things in JavaScript. But people are still more or less using it for these same sort of utilities, where like, "Okay, I can do some redirect rules, maybe I can block some IP addresses, maybe I can set a cookie based on geolocation sort of stuff..." But there's this worldview that is like, actually, now that we can run JavaScript, and in Deno Deploy you can run TypeScript, you can import modules... You can't use Npm modules yet, but soon you'll be able to import Npm modules... And so now it's becoming not just you can script around JavaScript a bit, but actually, you can do pretty complicated things. You can make outbound requests, you can pull in full frameworks... You can actually pull in React and run React at the edge, and do SSR to like return static HTML, kind of using React as a modern-day PHP, where you're server-side rendering stuff.

And you start getting into the situation where it's like, actually, maybe it's not something that passes through to a backend server; like, I've got my edge rewriting rules that operate quickly, and it messes with my cache, and then my application servers is this big, slow Ruby on Rails thing that ultimately things pass back into... But what if we actually write for the edge, our application server at the edge, and just move more and more of the logic out there? Is that possible? Are we facing a next-generation of application servers that actually are running not just in one location, but like everywhere, all at once, in a serverless fashion, in a single JavaScript file? Like, you just define a 50-line file that runs everywhere, basically for free, because it's so cheap to roll these things out? I think that's where we're going. I think there's some open questions there around state management, and data stores... Because obviously, you're running at the edge, and you have a single Postgres instance in US East that you're connecting to; you kind of lose all the benefits ultimately of running at the edge...

**Jerod Santo:** Totally.

**Ryan Dahl:** ...so you need some sort of geo-replicated data store. But it's not completely worked out now, and Deno Deploy certainly doesn't have any state features right now. But this is the direction that I think web development is going. Let's say in the next couple of years we're going to see many more full applications running at the edge.

**Jerod Santo:** Yeah. You're so right with the state management being really the sticking point. There's a lot of money going into this problem right now. There's a lot of people toiling at the moment about geo-replicated databases that you don't have to think about as much as we used to have to.

**Ryan Dahl:** There's some really good off-the-shelf solutions right now. CockroachDB is great, Spanner is great, Dynamo DB is great... It kind of depends on your use case, and what exactly you need. But Cockroach DB has serverless setups now, and you can certainly connect your Deno Deploy to a serverless Cockroach DB. I think from a product perspective, it's like, "How can you make that even smoother so that you don't have to think about two different products at once?"

**Jerod Santo:** Yeah, because you all are trying to be batteries-included, right? Like, that's one of your big things.

**Ryan Dahl:** We're trying to make it as easy as possible to build the software that most developers are targeting.

**Jerod Santo:** \[00:45:45.28\] Right. So back in July, we had your colleague Luca Casonato on the show, talking about Fresh... And so this is another one of your, I guess, aspects of your batteries-included, is like, "Well, what if we had a first-party, actually supported bleeding edge web framework alongside all these other things?" Like, that's a battery that you want to have included. And on that show, Luca kind of teased a little bit at the possibility that y'all are working on your own actual storage solution. He wouldn't say much else... That's all he would say at the time. Do you have any comments on that?

**Ryan Dahl:** We're thinking about it. No comments right now. I consider this kind of an R&D effort on our side. We want to do something that is -- if you know the software that we create, you know it's smooth, like the rest of our software, and should be shockingly simple. So we're playing around with this, and we think we have some good ideas in this area... But it's too early still to talk about.

**Jerod Santo:** Fair enough. I'll just keep asking every time I have a Deno person on the show, until someone's ready to talk about it.

**Ryan Dahl:** Sure, yeah. \[laughs\]

**Jerod Santo:** Because for me, that's the panacea, is when you can tie together all those things with my data persistence, and I don't have to cobble together, and I can have my 50-line JavaScript file, and I can write that in an afternoon, and I can ship it around the world to all these different points of presence, and it can execute milliseconds away from the users, and I can store the data right there, and somehow have all that thing worked together without me writing that code, which I'm not good enough to write... Like, how cool is that gonna be?

**Ryan Dahl:** Yeah, absolutely. That is the dream. We want to get there, too.

**Jerod Santo:** Very cool. So it's hard to believe, Ryan, but you've been working on this project for a long time now. Was it 2017, 2018 maybe?

**Ryan Dahl:** Yeah, yeah.

**Jerod Santo:** So let's call it four or five years, roughly.

**Ryan Dahl:** Sure. And before that, Node... I mean, I've been working on server-side JavaScript now for a good decade-plus now...

**Jerod Santo:** Yes. So I'm just curious, with Deno specifically, do you feel like you're still in the early innings? Do you feel like you've established the project? What do you feel like it is in your desires for what you're trying to accomplish?

**Ryan Dahl:** Building a programming platform is -- you're asking users to program against your platform, and so this just requires you to be very persistent, and fix a lot of bugs, and be reliable, and make releases, and just keep doing, keep at this... And we kind of measure our success with how many people are using Deno every week. And this number is growing; we've just passed the 100,000 per week mark here, and I think it's going very well.

I think a lot of users are working on codebases, and using systems that are deeply embedded in Node, and might feel that Deno is -- couldn't use Deno for their project immediately, but people should take another look at it every once in a while, because things are changing quite rapidly. And I would imagine that people will be able to -- if you've done that in the past and looked at Deno and thought, "Maybe not right now", it might be different next time. So we're kind of full-steam ahead on this project. We make a release every month on a minor release.

**Jerod Santo:** How many years do you think you've got left in you, personally? \[laughs\]

**Ryan Dahl:** I mean, I find it fun. I love this stuff. I think, especially seeing how -- I have this old blog post. It's an old rant about software, and just dealing with all the complexities of it... And now having worked professionally as a software engineer for, I don't know, 15 years now, it's just clear that things are getting simpler, and it's just so easy for people to get started now, and there's just such great, great software available compared to just the absolute nightmare that it used to be. And being able to simplify parts of the system like that, and giving people that experience of like "Oh man, this is really solving my problem", is pretty exciting to me.

We are not at the end state of web development, that is for sure. Server stuff. Like, every indication is that this is only heating up. So yeah, I find this very fun.

**Jerod Santo:** \[00:49:56.28\] I can tell, I can tell. You get fiery thinking about it and talking about. I really appreciate your insights today. So Deno 1.28 is out there; maybe there's even a 29 by now. I don't know, that was mid-November... But either way, we have Npm support, it's stable, it's almost comprehensive... Definitely worth a re-look. If you haven't looked at Deno because of that reason, there's no better time to check it out than right now.

Anything coming down the pipeline that's like closer than the persistence layer that you don't wanna talk about? Anything that's like in the next three months, six months, that people can look forward to, that y'all will be shipping, or any events upcoming for Deno?

**Ryan Dahl:** So expanded Npm support is coming out. So our big focus was on stabilizing this and making sure that people could use this... But it's still not available in the repo, for example; that will be landing here in a day or so. No, next week. It's still not available in Deno Compile. Deno Compile is the ability to output a self-contained binary that contains all of your packaged JavaScript code. So we'll be working on that over the next couple of weeks here.

And then, of course, Npm support in Deno Deploy, so that you can really pull in these packages. And we want to do this in a way that deployments are very fast. The problem with Npm packages is that they're very large, and when you start pulling in dependencies, it's even larger, and so we're trying to find a good solution to making Deno Deploy able to use Npm dependencies, but not exploding the size of the deployment.

**Jerod Santo:** Sounds good. Sounds good. Well, listener, all of the links to all the things discussed on this episode is in your show notes. That is JS Party for today. Ryan, thanks so much for joining us, sitting down and candidly sharing all the things that you're up to. It's pretty cool stuff.

**Ryan Dahl:** Thanks, Jerod.

**Jerod Santo:** Alright, that's it for today. We'll talk to you all on the next one.

**Outro:** \[00:51:56.15\]

**Jerod Santo:** I saw a ChatGPT joke in there for a minute, and then it's gone. Somebody deleted it. It'd be a crying shame, because it was pretty funny. By the way, if you're currently obsessed with ChatGPT, don't worry, we do have an episode of the Changelog -- oh, it's back. Sorry, Ryan, I'm just talking to the chat now... So Igor in our chat said "Go to Npm, scrape all the package names, and port them to Deno, please." And ChatGPT said "I'm sorry, but I'm not able to browse the internet or perform tasks like scraping data from websites. Sorry."

**Ryan Dahl:** Yeah. We'll have to wait for ChatGPT 4.

**Jerod Santo:** Yeah, exactly. \[laughs\] "I'm sorry, but I'm not allowed to do that." Was that \[unintelligible 00:53:36.07\] "I'm sorry, but I can't do that." Michael David.

**Ryan Dahl:** No, that was not War Games, that's HAL... That's Space Odyssey.

**Jerod Santo:** That's right, that's HAL.

\[00:53:48.20\] "Do you will read me, HAL?" "Affirmative, Dave. I read you." "Open the pod bay doors, HAL." "I'm sorry, Dave. I'm afraid I can't do that." "What's the problem?" "I think you know what the problem is just as well as I do." "What are you talking about, HAL?" "This mission is too important for me to allow you to jeopardize it." "I don't know what you're talking about, HAL." "I know that you and Frank were planning to disconnect me. And I'm afraid that's something I cannot allow to happen."
