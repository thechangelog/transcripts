**Nick Nisi:** What's up, party people? I'm your host this week, I'm Nick Nisi, hoy-hoy, and I'm joined by Chris a.k.a. b0neskull. How's it going, Chris?

**Christopher Hiller:** Howdy!

**Nick Nisi:** Welcome, welcome. And welcoming back to the show we have Bret Comnes. Hey, Bret. How's it going?

**Bret Comnes:** Good!

**Nick Nisi:** Welcome back. And we also have Mik Lysenko. Mik, how's it going?

**Mikola Lysenko:** Pretty good!

**Nick Nisi:** Tell us a little bit about yourselves. You guys were recently on when we were talking about Socket and the supply chain security that you're solving with that product; we're gonna talk about something different today, but do you wanna refresh us with an intro?

**Bret Comnes:** Sure. Who should go first?

**Nick Nisi:** Go ahead, Bret.

**Bret Comnes:** Okay. I'm a JavaScript developer, I've been working mainly with Node, kind of out of the Node ecosystem, since about (I don't know) 2013-2014. I do a lot of side projects and little contributions on little things that interest me around the ecosystem, and also professionally as a JavaScript developer, for the most part. And I work at Socket now. So check out the last episode we were on if you wanna know more about that.

**Nick Nisi:** We'll have a link in the show notes for that. Welcome back. Mik, do you wanna tell us a little bit about yourself?

**Mikola Lysenko:** \[03:59\] Yeah. So I also have been working at Socket for the last six months or so. We've been building a bunch of infrastructure around analyzing JavaScript, and just scanning npm for suspicious packages and weird things, and trying to turn all of that data into something that people can use to detect attacks on their open source projects, or on their code that they're trying to ship to their users.

Before that I worked in China, not developing any malware or fixing malware, but on building a multiplayer online 3D Metaverse web game, which turned out to be exactly the wrong thing to do after the Chinese government regulations completely shut that entire sector down.

And then before that I was traveling around a lot, working on all kinds of different stuff. I live in Hawaii for a bit, and I was in California before that. I was a grad student long, long ago, studying mathematics and computer stuff. So yeah, that's kind of like my story, condensed into a nutshell.

**Nick Nisi:** Nice. Yeah, that's very exciting. That's a lot of different exciting projects to work on. Now, as we mentioned, you were here a few weeks ago (at this point) talking about Socket, and supply chain security, and the whole product around that. Well, today we have you back to talk about a topic that was brought to us by the community, by \[unintelligible 00:05:23.03\] so thank you for the recommendation on the show... And we're gonna be talking about logging and error handling. So let's start off by talking about logging, and just kind of digging into that. Does someone wanna give a definition for what logging would be?

**Bret Comnes:** I'll give it a shot. I wouldn't consider myself a huge expert on the matter, but anytime you're running a program and it encounters an error, it then presents that error in some context. So if it's like an unhandled exception, you'll get the well-known stack trace coming out of your process. If it's in the context of like a handled error, maybe you would see this in a UI, in a web app, or maybe the CLI you're running prints it with a contextualized stack trace for a human. Or if it's just for a backend service, and maybe it's a JSON line in a structured log that you're ingesting into Sentry or Datadog or something like that. Did I get that right? Did anyone else have any other context...?

**Mikola Lysenko:** I think logging is actually a pretty simple idea. It's just a piece of code inside your code, that acts as like a kind of trace of a discrete event. So it can be something that just is as simple as like printing out a statement when you reach a particular line, or it could be something more complicated, that dumps lots of state... You know, it could be very manual, or it could be very automatic. But it's sort of like a form of tracing for your program. So rather than checking every single instruction in everything that happens, you pick specific events that you care about, and then you throw in a little bit of code or whatever to try to log that specific event out. And then eventually, you get a single, linear list of events that have happened, and hopefully you can stare at that and figure out what your program was doing to figure out what just happened in your code.

**Nick Nisi:** Yeah.

**Mikola Lysenko:** So it's a way that you can checkpoint what's going on in your code mentally, and sanity-check that it's doing what you think it's doing.

**Nick Nisi:** Yeah. Very well put by both of you. That's much more thorough than the definition for console.log( ) that was I was gonna look up on MDN real quick...

**Mikola Lysenko:** Yeah.

**Nick Nisi:** So that tends to be -- when I think about logging, when I hear the term logging, that is what I immediately think of, because that's what I do the most. And that's synonymous with debugging for me at this point. I recently was reminiscing about how I used to use the debugger so much more before TypeScript kind of made that a little redundant for me... Because I used to just pause on things to figure out what the heck I was actually typing, or what types of values I was actually passing around... But I don't have that so much anymore. So the things that I do the most now are just console.log( ) things to kind of debug my code.

\[08:07\] But then there's lots of different ways that you can go with, with just talking about logging. As you mentioned, you can just have simple statements printed out to the console, you could be sending those logs somewhere else, you can provide different levels for logs, so that you can kind of filter maybe not seeing everything, only seeing more important things, or what you might deem to be more important, and so on from there.

Bret, you also mentioned the command line, outputting logs and so on... Since you invoked the command line, I'm going to invoke Chris to talk about logging on the command line. What's the same or different?

**Mikola Lysenko:** If I can jump in with another thing, too - I think the happy path is actually where you just have one process that's logging to the shell. But the actual place where logging gets really nasty is when you have multiple concurrent processes running at the same time, like many different services at once. And the easy case of logging is usually when you have just like one single process, with one thread, that's handling events in a linear order, and you can log everything and reconstruct it. Where it becomes really chaotic is when the logs actually are like multiple processes that are running concurrently, and then all kind of intermixed together - that's the fun logging. And that's usually where like - when people talk about logging is hard, that's typically the case they're talking about; the happy path is usually not too bad, but I don't know...

**Christopher Hiller:** I would say it gets complicated even before then, because logging is like a cross-cutting concern. You may have 100 modules, and all 100 of those modules might need to log something. So you're not gonna want to create a new logger for every module necessarily. So maybe there are different ways people attack the problem. I think of something like aspect-oriented programming, which is not a thing that anybody really recommends, but it's a way to do these sorts of cross-cutting concerns.

**Nick Nisi:** So just to give a definition of that - AOP is like wrapping a function, or wrapping a call, and doing something before that call is happening... Is that kind of how you describe it?

**Christopher Hiller:** I don't even know the definition, but I do know that it enables you to -- it's kind of like decorating things, and sprinkling decorators around... But the problem, I think, from what I understand, is just that it makes your program really difficult to reason about, because you don't know what code is running.

**Mikola Lysenko:** I think that's a good example of the incidental complexity in logging. And it's one of those things that happens because you do need to set up some kind of logging, and you do typically wanna have some way to kind of control it and turn it off. And while JavaScript does have built-in logging features, they're usually not adequate for a larger program... Because console.log( ), at least as it's interpreted by Node, just writes something to STDOUT. And while ultimately most loggers just do that - I mean, now sometimes they have network logging and other things - there are still a lot of rules around how you turn things on, and filter them, or namespace different logging, and stuff.

The thing that does suck is that it's not really interoperable. You can't just say "I wanna swap out all the logging here with a different thing." You end up kind of stuck with whatever logging your dependencies have chosen as your own logging service. And this actually creates a ton of risk for most of the people downstream, because there's no interoperability in the logging. Once you've committed to that logging system, you can't back out -- you can't swap it to a different thing. There's no general intermediate logging layer, or whatever. Which is why things like Log4j, once they sort of infect themselves into the ecosystem, you can't just rip them out. Everyone's gonna use that thing; even though it's not doing anything that hard, it's standardized on that particular interface now, so you have to keep going with that interface, and you can't easily replace it.

\[12:07\] So then if Log4j decides it wants to go pick up some new capability - I don't know, maybe run random Java files that it downloads from the internet - now all of a sudden everything using this goofy logging system is vulnerable to some cool shell injection attack. It's an unfortunate thing that logging is not that interoperable, but I think this is a common problem with a lot of software systems.

**Bret Comnes:** What would be the most closely-resembling analog to Log4j in the JavaScript ecosystem? Would it be something like the Debug logging package that a lot of things used to use, or use to use?

**Mikola Lysenko:** Maybe Debug... I mean, we use Debug at Socket, because it's like, Next uses Debug and Next uses it because Express and npm use it. So it's like, we've sort of been just kind of -- like, Debug became a standard because it was simply there first, and not that it's anything great, or that the code is even that complicated.

I guarantee most programmers who are reasonably -- like, even if you've just gone through like a bootcamp, you can probably write your own logging system. It's not that hard. The problem is you have to use that logging system everywhere, and you certainly don't wanna have two logging systems in your code. That's far too many logging systems; you only need one. But you need it, and you need to use it everywhere, so you just have to standardize one of them.

So who gets to write the logging system? Well, it's like, whoever got there first; they wrote the logging system and now we're all using it.

**Nick Nisi:** Are you doing any kind of more specific logging on different projects that you work on? Is there some kind of base-level sets of logging that you try and add? And what kind of things are you logging out?

**Mikola Lysenko:** It's situational, because logging is like selective tracing. In the limit you could imagine an automatic tracer that just completely records the execution of every instruction and every statement in your program, and then you wouldn't even need to log anything; you could just replay that. But in practice, that's just too much data.

So you usually have a few things that you're looking at or that you know about, and you log those specific events. It might be you get a connection from a client, or a specific event that's fired, or some database transaction is started or completed - that kind of stuff is what ends up getting logged. And it's not like there's an all-or-nothing thing with that. It's just a bunch of different stuff.

But of course, we're talking about JavaScript, and that ends up being like a web type thing... So the only thing is you often end up with logging coming in from clients into your server, because you also wanna log events from different users' browsers, but then you also need to record them on your backend in some way, and try to correlate those events with what's going on in your server.

One thing that I've noticed is a lot of client logging systems place quite a bit of trust in the browser to run their code correctly. I've often wondered why we don't see attacks on these logging systems more often. It seems to me like a pretty common vector.

For example, Sentry - there's a function where you can just embed it in the client, and it can just log random crap to the server. You know, people just blow your Sentry quota by just putting like a for loop in the JavaScript console and log it. Why don't people don't that? You can just send cute messages to the developers, and be like "Hello... I know what you did--"

**Nick Nisi:** Don't give them ideas...! \[laughter\]

**Mikola Lysenko:** I know! Don't give people ideas. But surely, everyone's thought about this devious possibility, right? It seems like almost none of these logging systems do any kind of validation on the client side. In other systems not like JavaScript, which are less dynamic - I've seen C codebases do this. The number of things you can log on a client is explicitly enumerated. You just have like a look-up table of different strings, and then you can just like log them. There's kind of like an internationalization type of thing, so then you can't just like spam them with a bunch of stuff. You could always rate-limit a client if they're sending too many things... But as far as I know, a lot of the JavaScript logging stuff does nothing of this sort to ensure the integrity of untrusted code from the clients. Anyone can log anything... Which is also why Log4j and these kinds of things end up being really bad, because if you have a Java backend and then like a JavaScript frontend that's logging things that go to Log4j eventually, all of a sudden your servers route it now again. Oh, no. Right? "What have we done? Why did we do this?!" \[laughs\]

**Nick Nisi:** \[16:21\] I can't imagine why you keep bringing that up as an example...

**Mikola Lysenko:** Right...

**Christopher Hiller:** The worst thing to do if you're making like a CLI app is somebody starts using -- like, they type the command, and then it says "Okay, running", or something like that, or it just says nothing, and it does nothing. And you don't know what it's doing, so you're just kind of waiting. You don't wanna do that. You really wanna say "Alright, I'm working on it." Now, if you're piping things around, obviously, you don't need a progress bar... But you're gonna want some feedback for the user. If you don't have that, they might as well Ctrl+C. "Is it broken? Is it working? I don't know."

**Nick Nisi:** Yeah.

**Christopher Hiller:** Anything that's gonna take some time, you wanna tell the user what's going on.

**Nick Nisi:** Related to that, and specifically for this CLI, this interesting thing that I've been thinking about as I dabble with writing -- mostly I'm writing them in Bash, but they could be in JavaScript, or something else... But when you're writing those out, do you think about whether you're going to send it to STDOUT or STDERR?

**Christopher Hiller:** Yes.

**Nick Nisi:** And how do you delineate what you send where?

**Christopher Hiller:** Basically, the output of your program can be machine-readable. So maybe you have like a JSON flag or something that says "Output JSON", like npm does. You could say --json. That should go to STDOUT. While your progress bars and all that nonsense should probably just go to STDERR.

**Nick Nisi:** Yeah.

**Mikola Lysenko:** Do you feel like including just general, like "Working on it..." type log messages should also go to STDERR?

**Christopher Hiller:** I would.

**Nick Nisi:** The way that I think about it is if it's something that I might want to pipe in somewhere else, then I want it to go to STDOUT. But if it's just like random "Oh, I've created a directory" or whatever, that goes to STDERR for me.

**Mikola Lysenko:** Dang, I've been doing it wrong the whole time.

**Christopher Hiller:** If the output of your program is a text file - like, I don't know... Prettier does this, right? If you don't use --right, Prettier just dumps the prettified file to STDOUT. And sure it doesn't have to be like a JSON, or XML, or what have you.

**Bret Comnes:** Browserify was another tool that did that early on in the Node ecosystem.

**Christopher Hiller:** Yes.

**Bret Comnes:** That was kind of one of the bigger differences between it and WebPack at the time.

**Mikola Lysenko:** That was one of the best parts of Browserify. \[laughter\] Why don't the other build tools do that? It wouldn't even be hard for them to support it. They just suck, kind of, is really what I have come to the conclusion of. \[laughs\]

**Bret Comnes:** Some of the newer ones are better, but... I know what you're talking about.

**Mikola Lysenko:** Yeah, ESBuild is good, but we know the one we're talking about that's not that. It's very popular, and it starts with a W and ends with -ck, right? \[laughter\]

**Christopher Hiller:** Part of the reason is -- I mean, yes, you can certainly add the feature, but you probably don't wanna actually use it on open source code, because it's not portable. If you're dumping the STDOUT and then piping the things, that's not gonna work in cmd.exe, right?

**Mikola Lysenko:** That's fine, I don't care about that. \[laughs\] Why do I care about cmd.exe? Cmd.exe is overrated. No one runs anything in cmd.exe.

**Bret Comnes:** There was a Twitter thread, people were talking about like "What's the state of Windows support? What's the minimum thing you have to do to make sure they're happy?" Some people, including myself, were suggesting "Why not just expect everyone to use Windows Subsystem for Linux?" But I guess there's still a number of things that don't work exactly correct in the Linux compatibility layer around file watching, and stuff like that... We're so close to exact compatibility, but not quite there, in some ways.

**Mikola Lysenko:** \[20:03\] Yeah. Well, and then there's also the file path length limits, and then the weird behavior with spaces and casing... In Windows -- it doesn't work. Just stop bothering with it. I feel like people should just give up. It's been long enough, nothing works on it really, so they have Windows Subsystem for Linux... So just stop doing the Windows thing. It's done.

**Christopher Hiller:** Yeah... But most JavaScript developers are using Windows, so we kind of have to think about them if we're making open source, right?

**Mikola Lysenko:** Hey, and they can install Linux on their Windows using Microsoft TN Linux, right?

**Christopher Hiller:** If they know how to use Bash...

**Mikola Lysenko:** We can teach them how, right? Microsoft. There's probably like a little MSI installer you click, or something, and then you get Linux, and there you go, right?

**Bret Comnes:** Another meta observation around CLIs is that the sort of style of CLIs has changed a lot, it seems like, over the last 5-10 years. When I was entering into this space, people were still very much about Unix philosophy, "Be silent, and less explicitly ask for output, and make sure that everything's pipable by default etc." And I don't know where it exactly changed, but it seems like after Git, where people got used to this very interactive CLI experience that's designed less for piping between Unix programs and more for just like general input for a human - it seems like you started seeing a lot more fancy CLIs and spinners and lots of text output, and stuff like that, too. So it seems like some of the early best practices have, in some sense, gone out of style, in a way, as well.

**Nick Nisi:** Yeah. I do still think that that's a good philosophy though... Just my own personal --

**Bret Comnes:** I mean, it's good to support everything and kind of make everyone happy as best as you can, depending on the context of what you're doing.

**Mikola Lysenko:** Yeah. It's like, do you think of your shell as like a programming language, or as more like an interactive user interface? This is kind of a thing a lot of \[unintelligible 00:22:04.04\] struggle with...

I would characterize the Unix style thing as really just a functional approach, where it's like these commands are actually functions that take data or input and transform it from one state to another, and they're fundamentally immutable. They just observe things and then they write something to STDOUT, and then where it goes from there, that's up to you.

The other style is more like an immutable type of interface; it's more like an imperative mode type of operation where you're changing the state of your computer by sending commands to it. So it's sort of like a QBasic type of interface. And Git, even though it is ironically based on immutable data structures, works more like the latter. It is basically a mutable interface for your current Git repository... Which is confusing, because the Git commands are just actually changing state when you're running that, even though the actual Git repo is a functional data structure.

**Break:** \[23:03\]

**Bret Comnes:** During the break we were talking about how -- I was sort of posing the idea "Is there a big difference between CLI logging, where you're providing context to a user, versus logging for a backend service that's shooting out structured log lines that's getting collected in some kind of log database like Datadog or \[unintelligible 00:25:15.26\] or whatever?" And I think Chris said you do both at the same time in some contexts, so...

**Christopher Hiller:** Yeah, so some of these newer tools, I suspect some of them do this. I don't really build web apps, but I know there are fancy tools out there that will let you, say, run a development server, right? And they'll also bundle your code. Maybe even Webpack does that sort of thing. I don't know if it does it out of the box.

So on the one hand you've got the serve mode, where now you're logging HTTP calls, but then you also have the bundle mode, where it shows you the files, and the package size, and all that garbage. So you can have a tool that does both.

The project I'm working on now, Appium, does both. It has like a CLI tool component to help you install and manage plugins, but then it also is mainly just a server. So there's like two kinds of logging going on.

**Bret Comnes:** Do they end up using different tools for both contexts, or is there like a unified library that does both styles of logging?

**Christopher Hiller:** No comment.

**Bret Comnes:** Okay...

**Christopher Hiller:** That's a pain point at the moment.

**Mikola Lysenko:** This is one of those things where it's like the design of Unix is probably holding us back a little bit. I mean, this type of thing happens all the time. For example, Next does this, and pretty much every large project I've worked on ends up in this same kind of situation where -- again, like you say, your development environment, and maybe you're running TypeScript and Webpack and a bunch of these other things which have like a little watch mode... And then the watch mode has one style of formatting, and then you also have your web server, and then maybe any subservices for that web server, and then all those logs are just getting dumped into one big stream... And good luck sorting that mess out. Here you go, buddy. Right?

\[27:11\] You can do stuff like, okay, you just open up multiple shells and then you have to manually start every single one of these processes in each of its little shells, and then you can switch between them. But in a more perfect world, wouldn't it be nice if it could just open multiple shells for you automatically and you could just have multiple output streams that could be redirected in there?

I think there's probably some Unix tool that sort of does that for you, to parallel execute them... But it would be nice if there was something a little more baked into the way shells worked, that allowed you to have more than two default output streams. You only have your STDOUT and STDERR, but why can't you have more? I don't know. Well, you only get two, so deal with it.

**Nick Nisi:** You could script all of that with Tmux, and then just have it open separate splits.

**Mikola Lysenko:** You could, yeah.

**Bret Comnes:** I was gonna say, we need like a Tmux logger where you just page between the different output streams.

**Mikola Lysenko:** Yeah, you can set it up, but it becomes kind of awkward, because then you have to make sure that your tool sort of decomposed in some way. And what if it is really some more integrated thing where you're running some modified version of ESBuild that knows something about your web server? It would be nice if it was kind of like built into the interface... Because you can open up multiple shells, there are multiple TTYs that exist... You just have to open up different files, or something. It's always kind of clumsy doing this. I don't know... I feel like there's probably a potential for innovation there. Someone could figure out a nicer way to handle that, and it would be cool.

**Christopher Hiller:** I could certainly try to make a piece of JavaScript that did that... But I'm not gonna go hack on the shell.

**Mikola Lysenko:** That could be cool, maybe. But the thing is, then it has to kind of integrate with your actual terminal emulator in some way, right? Or maybe you could just open up multiple TTYs, or something... So I don't know what the right solution would look like for that.

**Christopher Hiller:** Yeah, I don't wanna get into the weeds on that, but I am definitely being nerd-sniped, like "Ooh, I wanna go check that out and see that is like"

**Mikola Lysenko:** I don't know. Maybe it could be done.

**Nick Nisi:** What about other tools --

**Mikola Lysenko:** Maybe Next should do it, whatever it is -- their terminal thing should just have the ability to not put it all in one giant, unreadable stream... Because the output is actually completely useless from the Next terminal debug log. Everything is smooshed together, and it's like -- I don't even know. So I don't even look at it; it's useless to me.

**Nick Nisi:** Yeah. That is maybe where you make the decision to then just build some custom log viewer in Electron or something, to look at it all... Or maybe one of these newer terminal emulators, like Warp, or something, starts building it.

I was gonna ask, does anyone have any experience with more advanced logging? I'm trying to think of apps or logging utilities that --

**Mikola Lysenko:** Well, I think it's a mistake to call more complicated logging "advanced", because that implies that "Oh, we should all be doing that." And the answer is "No! Don't do it if you can avoid it!" Right?

**Nick Nisi:** Yeah.

**Mikola Lysenko:** Keep your logging simple. Simple logging is advanced logging. Complicated logging is just complicated. It's not advanced. It's bad if you have to do it. So don't try to bait people into making it more advanced, please. No more advanced logging. Advanced logging is how we get Log4j. Do we need another Log4j? No! Don't make it more advanced, make it simpler. \[laughs\]

**Bret Comnes:** There's maybe one avenue that maybe would be considered more advanced, which is like structured logging... So rather than just dumping random format strings to whatever STDOUT, or --

**Nick Nisi:** You console.group( ) them, right?

**Bret Comnes:** \[30:43\] No, I'm thinking more like a Pino library, where it has like a little API and you pipe data with objects, and it formats it consistently, and can enforce things like having a transaction ID in the log line. So in theory, if you're disciplined about this, you could search for a transaction ID in a big stash of logs in a logging service and see a transaction move across different services.

But again, typically, when you have multiple services in a big org or project, it means multiple people, so getting everyone to follow that pattern consistently - it becomes a people problem at that point.

**Mikola Lysenko:** Yeah. And also if you wanna do analysis... At some point, if your system gets complicated enough, then your logs start picking up schemas in order to make them parsable or whatever, and it's just like "Uhhhh..."

**Christopher Hiller:** I've got a question from my Socket buddies... So what do you use for logging now? How do you go about it?

**Mikola Lysenko:** We use Debug.

**Christopher Hiller:** You don't consume a third-party service, or anything like that?

**Bret Comnes:** I could talk about a few things that we do. I do think we need a little bit more discipline in this area, but Debug is kind of like the basic tool that we use for if you wanna see what a particular part of the code path is doing specifically in a log format. We'll use that.

Some of the things that the service does is log to STDOUT, and some of it actually saves things to a database in a transaction. So we kind of have different approaches to it. I think it's something that seems like it's grown organically, and probably at some point in the future we probably need to visit this and be a little more intentional about it. But we're still pretty early on, so...

**Mikola Lysenko:** Yeah. So for most development we use Debug for logging, because it's the same thing that Next uses, and all of our other stuff in npm uses. So we're just kind of like stuck with that, unless we wanna create another Debug equivalent... Which we don't, so we use that.

And I think if you're working in Node and you're working in using a lot of projects built in npm, you pretty much end up having to use Debug, and that's just the way the world is right now.

Besides that, we do use some more structured logging for specific events we need to analytics on, or querying. These are things where they have some kind of business impact, or there's something we need to measure later on. We collect certain profiling data in our SQL database that we then can do aggregates... Like, "Okay, what analysis is taking too long?" For things like GitHub events, like WebHooks events, we have to log those. But those are actually needed for correctness, because we have to sometimes replay a WebHook if something crashed in the middle, or the GitHub API timed out, or whatever, and then we have to retry it.

**Christopher Hiller:** When you do stuff like that, are you putting queries in your codebase and just firing them off, or...?

**Bret Comnes:** Yeah, we've been using JSONB fields for catch-all columns in some of those logs... I would say the main difference between the two approaches too is like - one is very intentional and one is kind of more haphazard. So logging with Debug is like "I'm just logging what's happening right here at this line", whereas when we were capturing into our database, it's like, I wanna collect this data very specifically and be able to query it later.

And this sort of structured logging idea that I threw out earlier is kind of a middle ground. It's kind of like -- you know, Debug, just to catch anyone up who doesn't know about the Debug package... It's kind of like console.log( ), but you turn it on with an environment variable, and each file has to set up a little namespace, and you can filter which files are logging, essentially. It doesn't enforce anything about what's in the log.

A structured logger like Pino - you kind of feed it data objects and then it formats it in very specific formats. There's like a development view, for humans, and then JSON for a log aggregate service like Datadog, or Elasticsearch, and stuff like that. So that would be kind of the middle ground between the two, I think.

**Mikola Lysenko:** \[35:09\] Yeah. Also, I could say one other thing too, which is the last project I worked on used a completely crazy logging system that was not based on anything like Debug, or whatever... But that was because we wrote our entire web stack from scratch. So it was like a JavaScript project, but we had a schema-based thing. It was also because there was like an online browser game, so everything worked in a very different way, and the performance requirements were very different from a typical web app. So we use almost no existing npm packages. It's all written from scratch. There's many ways to do this in practice. You just kind of figure out what works.

**Christopher Hiller:** What of metrics, things you show off and look at in Grafana, or something like that?

**Mikola Lysenko:** Yeah, for that kind of performance measurement - for those kinds of analytics things, I think they break into two categories. We have ones which are sort of defined by some business use case, measuring the performance of some task or whatever, where we do the logging ourselves in the database, and then we can query it our own way... And then for other stuff which are like more standardized Google Analytics type of stuff, we just use an off-the-shelf analytics package. That does its own metrics collection, and it just has its own system for doing that, and we don't even touch it.

**Nick Nisi:** Have you ever used a tool that does - I'm thinking back to web apps now - full session recording, where you can basically replay everything that a user's done, and then debug it from there?

**Bret Comnes:** I mean, I've played around with the Datadog one, the Real User Monitoring tools...

**Nick Nisi:** The RUM, yeah.

**Bret Comnes:** Yeah, which is really cool... But I haven't ever had a chance to really fully -- I just kind of demo-ed it, I haven't actually used it to...

**Mikola Lysenko:** Yeah. I know Heap has a product that does this as well. There's a bunch of different options now for this. I've used Matomo extensively in the past, but I find that for the -- it depends on the application though. When we were working on doing the games stuff, the sessions were very long, and there were a lot of events, so it wasn't really very feasible to do a full replay with all of the WebGL stuff and everything across multiple browsers and make that work in any reasonable way. So we just did that -- we just collected more aggregate statistics from users, and that kind of thing. We didn't try to get detailed sessions... Because we had millions of players, where it wasn't really feasible to collect all that data.

**Nick Nisi:** Yeah. And for longer-running things like that, that's a good example of when you might not wanna do that and be more selective in what you're grabbing... But if you know that you have more short-lived sessions, that can be a valuable way to debug things later. I'm sure there's tools, I've heard about them in ads and stuff, about being able to, when this error occurred, send the state of the application along with it, so that you know exactly what happened and you can kind of build that in and reproduce it from there, which is pretty cool.

So that kind of touches into error handling... We're gonna take a break and then we'll be back to talk more in-depth about error handling.

**Break:** \[38:19\]

**Nick Nisi:** Alright, so in the last session we talked about logging and started segueing into error handling and kind of seeing that... So let's more formally talk about error handling and some of the best practices around that. I know everyone on this panel has strong opinions about error handling, so... Let's start with a definition. Mik, do you wanna give us a definition?

**Mikola Lysenko:** Errors, or exceptions or...?

**Nick Nisi:** Yeah, error handling... I don't know. It's kind of a vague --

**Mikola Lysenko:** Yeah, error is a weird thing in JavaScript. It's a very special object, and it's the only way - that I know of anyway - at runtime that you can actually reflect over the stack of a program.

But basically, exceptions, which are the actual thing that's kind of interesting in JavaScript - they're just the kind of non-local control flow feature. So if you throw an exception, you'll go up your call stack to the point where the exception was ultimately caught in a try-catch block, or it'll just go right to the top of the event loop and then crash and print something to your STDOUT, or wherever.

Handling these exceptions is of course something that everyone needs to know about if they're writing code in JavaScript. You also have to think about this when you're dealing with promises, because that makes it a little bit more subtle, where these exceptions ultimately bubble out... And I'm sure everyone's seen this uncaught promise rejection warning, if you've ever done anything async... But yeah, it's just part of the language, you have to know how it works if you wanna write code... And it can be useful in a few places.

**Bret Comnes:** And we have a bunch of modern goodies with our errors now.

**Mikola Lysenko:** Yeah, it's true. It used to be simpler. It used to be they were just throwing exceptions. In fact, you don't even have to throw an error. You can throw anything in JavaScript and it'll go up your call stack to wherever you caught it. You can throw a string, you can throw a number... You can even throw null, it doesn't matter. You can throw whatever you like. \[laughs\]

**Nick Nisi:** You can throw a promise, I've learned that...

**Mikola Lysenko:** You can throw promises, you can throw whatever you want, and it doesn't care. But the error object is a special thing that you can throw, and you should usually use the error when you throw it, because the error will give you a stack trace. And that stack trace tells you what called the code that actually triggered that original exception or object or whatever to be thrown up the stack. And that is actually the useful part of errors, is that they can capture stacks.

**Christopher Hiller:** \[42:11\] Nick, you threw a promise? What, did you catch it and then like resolve it?

**Nick Nisi:** You can catch it, check and see if it's been resolved, and then re-throw it. And this is called Suspense.

**Bret Comnes:** Really? That's how it works?

**Nick Nisi:** Yeah... \[laughs\]

**Bret Comnes:** Oh, cool. Is that a good idea? \[laughter\]

**Nick Nisi:** Sure. \[laughter\]

**Mikola Lysenko:** Anything's a good idea if it works.

**Christopher Hiller:** Yeah... Mocha abuses throw... In your function body of like a hook or a test, if you say this.skip, it throws. It will not run anything after that skip, but it throws a special object called a pending, and we just catch the pending. It's not an error, but it just throws the thing.

And of course, it's hypocritical, because if you try to throw something that isn't an error in Mocha in your tests, it complains and says "throw an error", instead of whatever you just threw. But we don't follow our own advice, right?

**Nick Nisi:** "Do as I say..."

**Bret Comnes:** Yeah...

**Mikola Lysenko:** I've seen that in other packages, too... When I hook them up to some kind of npm, it logs out errors and you start seeing errors coming out of a module but it's not crashing your service, and you're like "What's going on here?!" You're like, "Oh, it's talking to itself through errors."

**Bret Comnes:** Yeah, many packages do this. This is a thing that we've kind of realized by just doing a lot of static analysis. So one thing is throw makes static analysis in JavaScript so, so, so much harder than it would be otherwise. It's already a dynamic language, so resolving into a piece of code, trying to figure out the points-to analysis and all the simple binding and everything - that's not easy. But then when you're trying to build the control flow graph, taking into account that anything can throw pretty much, and when it throws, it doesn't just return to where it threw, it can just go further up.

If you were to actually put all of the control flow links for every piece of code, it's like almost any piece of code can just somehow non-locally jump to any other piece of code when you take into account exceptions.

In practice, most things that do static analysis or try to optimize JavaScript just pretend that that case doesn't happen, or "Don't worry about it" and deal with it in a different way. And V8 is the same way about this, too. V8 would not be able to optimize your JavaScript code if it was really doing crazy stuff like jumping around with throws all over the place. This actually is a demonstrable thing, where if you start putting a lot of try-catch blocks in your code and using throws, you'll find that you fall off a performance cliff in V8, where it's often way slower if you're using exceptions than if you're not using exceptions... Because the happy path where you're not using exceptions - you have a very simple, easily analyzable control flow graph that can be statically understood and optimized, and the moment you throw exceptions into this thing, that graph just becomes shattered into a million tiny little fragments of JavaScript everywhere... And it's like, "Oh God, nothing can be done anymore", and you're just sort of stuck with doing dynamic interpretation.

**Nick Nisi:** Am I hurting myself by using Suspense then?

**Mikola Lysenko:** Probably, but if it works, it's okay. You know, it's probably not that much slower, right? Or maybe it's not slow in the way that matters.

**Christopher Hiller:** Yeah. Have you ever worked on or seen a codebase that actually just decided for performance reasons not to throw, and instead returns errors from functions?

**Mikola Lysenko:** Yeah. I mean, on the last project I worked on before Socket, which was basically a game that ran in a browser, we sort of banned exceptions pretty much, because they were just really too slow. You shouldn't use them.

**Bret Comnes:** I wonder if it's improved at all since then.

**Mikola Lysenko:** \[45:59\] I mean, last I've really looked at this carefully, which was a couple years ago, it was pretty bad. And I think it's not improved much, because I was actually looking at a performance issue in our analysis on Socket. And currently, about 5% of all of our CPU time is spent in the Node semver package, just calling the semver test satisfies function, or whatever... And just looking at "Well, why is that slow?" Well, guess what semver does under the hood - lots of try-catch, lots of exceptions, right? So I haven't finished digging into this particular issue, but there's a part of me that's like "Hm... Maybe I need to fork Node semver and just remove all of those exceptions." \[laughs\]

**Bret Comnes:** This is like a surprising point for Node-style callback programming, which did not use exceptions...

**Mikola Lysenko:** Yeah.

**Bret Comnes:** We're never going back though, it's not gonna happen.

**Mikola Lysenko:** No, no, no. I'm not going back to callbacks. Promises are great.

**Bret Comnes:** But we have a new style of callback for async/await style programming...

**Mikola Lysenko:** Correct. Now, callbacks do make exceptions a lot more interesting... And the other thing that's also kind of profound about promises that I think people didn't fully understand when they created them at first is that exceptions - they sort of come from the bottom of your call stack and they go up. But when you're working with promises, sometimes it's useful to send an exception in the opposite direction, from the top of your call stack down. And this is where abort signals come in. Unfortunately, the first version of promises did not have abort signals built in, and it's not an automatic thing... So you have to do a lot of plumbing. And the way they end up working looks a lot like manually returning error codes, unfortunately. But you kind of have to know about them and fix them, or else you've gonna have problems with your promise code.

**Nick Nisi:** Yeah. So maybe let's define what an abort signal is, and start from there.

**Mikola Lysenko:** Yeah, abort signals are basically like a dual of an exception; they are a type of an event which in the sort of concurrent parlance is sort of like a synchronization primitive where you can signal it and then it fires once, and then you can -- there's sort of two APIs. It has like a signal where you can fire the event, and then there's like await that basically waits until the event has completed. And you can use events to implement things like barriers, or other types of synchronization. But basically, it's sort of like a one-way channel, if you know about Go, where you can just put one message into it and then it pops out the other side. So it's a sync primitive.

And abort signals - there's actually sides of an abort signal. There's an abort signal and an abort controller. So all you can do with the abort signal is you can just wait until it was aborted. And then when it's aborted, it'll fire an event that you can then handle in your code... Or you can also just poll the abort signal to check if it's already aborted, basically.

So where this would be useful is if you have like a long-running promise, or some other task that needs to be canceled, and basically you wanna stop that task from running. So the abort controller - you can fire a signal that cancels the abort signal that is associated to that abort controller, and then everything that's awaiting on that abort signal will get a little message saying "Hey, stop what you're doing. Abort. Clean up. Stop. Show's over. Pack up your stuff. Go home."

And where this was initially created was in the Fetch API. So this was not actually a thing that shipped with promises in the beginning. But it was basically in Fetch - it used to be there were like a million different ways that you could try to abort it. And this is partly because it tried to copy the older XML/HTTP request API. So you could do stuff like set a timeout, set a retry... There were all these different special conditions, and there were just like different flags and configuration parameters where you would try to enumerate all of the cases where this thing should stop.

\[49:50\] In the case of the XHR there was also this kind of catch-all method where you could call .abort on the XHR and it would stop. So Fetch initially was trying to replace the XHR API with something that's using Promises, and it's better. You should use Fetch. But it took them a couple of iterations to get this right, because with promises initially there wasn't an easy way to abort the fetch after you've fired one off. So after a bunch of discussion and maybe like a year of back and forth on newsgroups, and you can look online... I mean, I was not involved in this process. Merely a by-stander, just eating popcorn and watching this play out. Eventually, abort signal was proposed as the solution for this.

The way you make a fetch abortable was you'd just pass an abort signal into the fetch object, and then it'll handle that abort signal, and when it's done, it'll cancel the fetch. And that's much more flexible, because you can cancel this -- you know, if your fetch was initiated by some other promise or whatever, and you decide you wanna cancel it, then you've gotta kill all the fetches outwards, right? So it's a better API, and it took a while to get it. And it started in Fetch.

But it turns out that this concept is not just useful for Fetch, but you should really be using abort signals in every promise that you write, almost guaranteed. If you're not using abort signals in your Promises, your code is probably incorrect.

For example, if you do promise.all and you have one of those things that throws an exception, you probably wanna cancel all the other promises in that promise.all, unless you want it to actually catch that exception and then return an aggregate, or whatever. But usually, if you have a task that fails, you typically wanna fail immediately with all these other tasks that are running, and just clean them up.

So the only way to really implement that kind of cancel all of my parallel promises and clean them up is for them to implement abort signals. And it has to be propagated all the way down. So everything that could potentially do an await should actually be waiting contingent on some abort signal. If an abort signal happens in parallel while you're waiting, you should stop awaiting and throw or cancel or bail out.

**Christopher Hiller:** It's a bold claim, right?

**Mikola Lysenko:** Yes.

**Christopher Hiller:** So if you're promises -- but what if I'm just doing something like an fs.writeFile( )?

**Mikola Lysenko:** Then you can even just do it sync. At that point -- like, yeah, sure, you just don't care about the exception. It's the same way, like, do you need to catch every exception that's thrown? Well, if you're writing Java, yeah, you do. But yeah, sometimes you can just let your program die. Or sometimes it's a command line tool if it goes in an infinite loop, which is actually the dual of dying. It basically gets stuck in a long-running promise; you can just Ctrl+C it and kill the process and restart everything.

But that said, sometimes abort signals are needed to even make Ctrl+C work, because you might be stuck on something that can't even handle the Ctrl+C signal. So to even handle a Ctrl+C signal correctly you might actually wanna use an abort signal then.

**Bret Comnes:** So if you wanna keep your process around for a longer period of time, it becomes increasingly more important.

**Mikola Lysenko:** Yeah. If you're writing any kind of persistent service, you need to be using abort signals pretty much everywhere.

**Bret Comnes:** In the CLI your Ctrl+C is kind of your built-in abort signal...

**Mikola Lysenko:** Right, yeah.

**Bret Comnes:** Sort of.

**Mikola Lysenko:** Well, yeah, but sometimes it doesn't work and you have to Ctrl+Z and then kill-9%1 or whatever, and you can nuke the thing that way, if it's not really aborting.

**Nick Nisi:** I have used abort signal with Fetch, and I know that you just pass it in as like -- I think it's like a signal property that you pass. But you can just use it with normal promises...

**Bret Comnes:** I have an example... This was kind of like the moment that clicked with me with abort signals... With promises and async/await programming, doing control flow and concurrency-limiting code is a little bit different than with callbacks, or just plain promises... Where you typically use al ittle API wrapper that does all the control flow stuff in the middle, like "run all, but limit to 5", or whatever.

\[53:58\] If you wanted to try to move towards a more literal programming style with async await and doing concurrency control - there's a great pattern that I am turned on to recently called semaphores, which I guess other language ecosystems have had this for ages, but they're kind of new to JS because of async/await.

Abort controllers work really well with semaphores, because you can pass the abort signal into the semaphore creating, and when your promise.all array or whatever is waiting on different semaphores to open up and let the new task start, they can actually be listening on this and abort out of those before those other tasks or promises have even started. So it fits really well with that style of programming.

I don't know if that translates to spoken podcasts, if that makes any sense, but look up semaphores and abortable semaphores for a good example of how these work into a more general async/await workflow. Did I get that right, Mik? I don't know...

**Mikola Lysenko:** Well, yeah...

**Bret Comnes:** Sort of... \[laughs\]

**Mikola Lysenko:** It's fine...

**Bret Comnes:** I'm kind of a semaphore newb myself. I'm still learning about how to describe them correctly.

**Nick Nisi:** I've used them once in C back in college, for one programming example or homework file that I had to do something with multiple threads, I think. It was ensuring that only one thread was writing to a file at a time, I think. And looking at this example - I'll put it in the show notes - it's kind of like that where you create a lock from the semaphore, and then you can acquire the lock and then release the lock. So you can acquire it to do something, and it ensures that nowhere else we'll be able to do that, and then release it later. I'm not sure I'm following how --

**Bret Comnes:** in JS essentially you await the lock, and essentially you do that in a promise.all style context, or something similar.

**Mikola Lysenko:** Yeah.

**Bret Comnes:** And it seems like you're starting all your promises all at once, but really, they're gonna fire off in whatever control flow pattern that your semaphore is configured for.

**Mikola Lysenko:** Yeah. So a semaphore is kind of like a generalization of a lock. Instead of just one lock, it's a counter, so it can actually be used to allow more than one thread to go into the critical section, or share a resource, or whatever. So it's basically like a synchronized counter, and you can sort of wait until the counter is greater than zero, and then you can enter a critical section.

But I think the general concept of having abortable synchronization primitives is a bigger deal than just semaphores. It just happens that in our code we use a lot of semaphores because whenever you have to do any kind of concurrency control or synchronization in a long-running process - maybe this is my own personal bias, I just end up reaching for semaphores most of the time... Because I find them to be the easiest to work with and understand. But other people like things like monitors, or whatever. You can do it if you like. The general concept though is if you're awaiting using promises, you need to allow for aborting when you do the wait to synchronize, because the aborting is what allows you to not get stuck in a dead lock on that wait, and you just end up with this kind of dangling promise sitting around.

So you need to have the abortable concurrency primitives. And they could be promises, or they could be locks, they could be semaphores, they could be whatever.

But yeah, semaphores are very useful if you do anything where you wanna limit the number of threads running. You could use it for a critical section, but you could also use it as just like a general throttle. Say you have a bunch of different tasks that are all kind of running, and you don't wanna run more than five of them at once, or something... You're gonna just have everything wait on a semaphore that's initialized to 5, and then when they're done with their critical section, they signal and let the next thread go through. You can have like a global semaphore that you can use to dial up or down the amount of concurrency you wanna allow those tasks to have.

For example, if you're hitting the GitHub API and GitHub is rate-limiting you because you don't wanna have too many threads hitting it at once from the same worker, so you put a semaphore on there to throttle the number of threads you have at the same time.

**Nick Nisi:** \[58:07\] Some real-time feedback - I just grepped for abort controller and abort signal in my codebase, and I am apparently doing promises very wrong... Because it's not in there once.

**Mikola Lysenko:** Yeah, probably... \[laughter\] Yeah... You might wanna take a look at that. For like a single-threaded promise where it just kind of goes from top to bottom, maybe it's excusable. But for example, here's another place where this would be useful. If you have a web server, and you're handling your request in a promise, then say the incoming request times out, or the client disconnects, or whatever. Then you might wanna use the abort controller to fire a signal down to all of the promises in that handler to tell them like "Hey, stop whatever you're doing. Don't waste any more resources handling this request. Let's get back to business and just stop that." So your server doesn't just end up kind of going into this loop where it's like "Oh, I've gotta handle this request for a guy who's already left to go get a sandwich, or peaced out from your page." So that's one place where it's very useful.

Another very concrete place too is not even in the request handler, but going a little more granularly down in a React component. Sometimes when a component mounts, it doesn't have all the state immediately; so when you mount a component - say you click to a tab, and it starts loading a bunch of stuff, you might initiate a bunch of requests to download different media, or other things that are needed just by that component. But suppose a user clicks-open a tab, starts downloading a bunch of data, but then they're like, "Ah, I'll go to another tab." But now you have this dangling kind of request or promise or whatever that could be doing some heavy work in the background there. So what you probably wanna do is have a hook that creates an abort signal, and then when the component unmounts, the unmount controller or the unmount hook will basically fire off the abort signal and kill all those promises that respond by mounting that component... Which is another very common pattern that we have in our code. So if you navigate to some page or whatever, it starts loading some stuff, but then you say "Ah, it's loading too slow. Click somewhere else, because I have the attention span of a goldfish thanks to YouTube and social media..." So I go to the next thing, and then "Okay, well, my computer's still running all these stupid promises in the background from that." So just kill them using the abort controller.

Once realize "Oh yeah, I should be doing that", it's all of a sudden very obvious that you really need to be using these things everywhere, top to bottom. And it's unfortunate, because -- you know, at least with exceptions there's kind of built-in language stuff to try to help you propagate an exception up a stack.

One way of thinking about it if you wanna use scary functional programming stuff - there's sort of like a built-in monad for exceptions. Like a built-in maybe monad that throws, or whatever. But what you really want for abort controllers and promises is actually a co-monad that can actually stick abort controller onto everything. That's probably how it should be.

**Bret Comnes:** You wanna throw down...

**Mikola Lysenko:** Exactly. We're throwing down, not up. So basically, abort controllers are like exceptions that go down rather than up.

**Bret Comnes:** "Stop! Stop!"

**Mikola Lysenko:** "Stop! What are you doing?! Stop it!" You can't say that anymore, because you can't say "Shoot the thing in the head", but that's too violent. So you can't hit the promises anymore, but you have to throw something down to them to tell them to stop. I don't know what's the more peaceful way to say this.

**Bret Comnes:** Mik, when you abort and you end up catching an abort signal throw, is there a way to add additional context to where it aborted?

**Mikola Lysenko:** Ha-ha! Thank you for asking that question... And I think I know why, because yeah, it used to be -- one of the worst parts about abort signals is that it just says "I aborted. I don't know what happened." And it doesn't actually tell you why it aborted.

\[01:02:01.04\] Like with an exception - an exception can give you some little context or reason about why you aborted, or why it threw. Abort signals don't give you a stack trace down, which is kind of annoying, although we have some hacks to fix that in our own codebase... But the bigger issue is that it used to be they would just say "I aborted" and don't tell you why. Now, this has been fixed; there's now a reason field for an abort signal. So in the newest version of Node, Node 18 - so you have to be running Node 18 - you can pass a little string or something into the abort reason, and then your abort controller will know why it aborted. You can check that reason when you abort, and then you'll actually get some context as to why it aborted, which is very useful for troubleshooting abort signals, and you should absolutely use that. However, it only works in Node 18, so if you're not running Node 18, good luck. I don't know. It does work in modern browsers now, but it does not work in older Node. So that's a good reason to upgrade. The killer feature of Node 18 is abort controller reasons. \[laughs\]

**Bret Comnes:** And built-in fetch.

**Mikola Lysenko:** Yes, built-in fetch, too.

**Nick Nisi:** Maybe that will be the thing that gets me off of Node 14.

**Mikola Lysenko:** Yeah... I think if you start using them, you'll probably find that "Ah, I wish it had that reason field..."

**Bret Comnes:** Another thing we could talk about too, similar to the reason field -- is it called reason?

**Mikola Lysenko:** Yes, reason.

**Bret Comnes:** Okay. Error constructors now have an optional cause field in their options object. So you can catch a throw and then add more context by creating a new error with a cause of the caught error... Which is also very super-helpful. Although maybe it goes against this "Don't try-catch everywhere if you care about critical performance." Or maybe V8 can just fix that, I don't know. \[laughs\]

**Mikola Lysenko:** Yeah, maybe V8 is better now. Because again, all these performance things, they're only kind of relative to whatever V8 is doing at the time that I last looked at it, which probably could have changed. I haven't checked it before this thing yet. Maybe I should double-check that, I don't know.

**Christopher Hiller:** So with CLI apps - stop throwing stacks, okay? Like, Git is written in what -- I don't know, probably C, probably C++. I don't really care. People shouldn't care what language your CLI tool is written in. You don't care necessarily what language any of your desktop apps are written in. Nobody cares about that stuff.

If you're throwing stacks and they're there in front of the user, they're not really actionable by the user other than maybe a nice one will copy and paste that into a GitHub issue... But if you know that there's an exception that's gonna potentially happen, you wanna catch that and you wanna explain to the user in nice language "This is why it broke. I couldn't write to this file, I don't have permissions." You don't need to just throw and dump a stack trace, because nobody should have to care about that. In a perfect world, nobody should care that your CLI app is written in Node. And nobody should care that there's a source file, or something. So that's my spiel.

**Bret Comnes:** I can agree with that, generally...

**Mikola Lysenko:** Unless your app is written in Java. Then I do care. \[laughs\]

**Nick Nisi:** I was gonna say "Or Electron."

**Mikola Lysenko:** ...because it's gonna have Log4j. \[laughs\]

**Nick Nisi:** Folks really care about whether it's written in Electron or not.

**Bret Comnes:** I remember having a really hard time reading Python stack traces coming out of Python CLIs. I'm not sure...

**Christopher Hiller:** Yeah, they're backwards.

**Bret Comnes:** Yeah, I think that was the thing. It was like "How did I read this?" It was confusing.

**Christopher Hiller:** They're backwards...

**Bret Comnes:** But I have to imagine, if a Python developer looks at a stack trace from a Node app, they're probably like "What is this? What order is this in?" \[laughs\]

**Christopher Hiller:** But yeah, I don't need to see Python stack traces if a Python tool breaks. That sort of thing is probably like a language culture type of thing. I don't know.

**Bret Comnes:** \[01:06:01.06\] The only time I might wanna see a stack trace is if the CLI is actually running JavaScript that I wrote, and there's an error. I kind of wanna see the stack.

**Christopher Hiller:** Use Debug.

**Nick Nisi:** Like in dev mode, for sure.

**Bret Comnes:** Use Debug - yeah, okay.

**Christopher Hiller:** Yeah. Just like have a verbose or a log level and all that junk, and then you can see the stack trace.

**Mikola Lysenko:** What do you think is the real harm in having a stack for users? Is it just kind of like an aesthetic thing, like this looks ugly and therefore we shouldn't have it? Or is it confusing to people in some way, that maybe we should try to give them an affordance?

**Christopher Hiller:** It could be confusing... All of these reasons. It's just unnecessary, I think.

**Bret Comnes:** If debugging the JavaScript code isn't the purpose of the error, then it probably definitely shouldn't be there... By default at least.

**Mikola Lysenko:** Yeah... I mean, as a developer, I love getting good stack traces when my code crashes. And it often crashes on other people's computers, so it's nice if they can send me the stack trace back. But at the same time, it would be better if my code just didn't crash, but maybe they should find a better programmer to write it then. That's sort of philosophically where I've come to... \[laughter\]

**Christopher Hiller:** If an exception is uncaught and unexpected, Node does a thing with that, so there will be a stack trace. So you should know - with throwing exceptions and tools you need to know who your audience is. So if your audience is just somebody using the tool, you probably don't need to do it. But if, say, you have a CLI tool and that CLI tool accepts plugins or something, that plugin author might wanna know. So wherever this exception is gonna get thrown, you need to know who it's for.

**Mikola Lysenko:** I think where these always do something weird is when there's like a -- for regular CLI tools, where they just crash and then print an exception to STDERR, I usually find that not too annoying. But if there's some kind of weird curses GUI thing or like some crazy x thing then it's not so good.

I think also a lot of libraries are really chatty. If you've noticed Three.js - it loves to announce "Hey, I'm Three.js and I'm running on this web page." It's always gotta get that in there. And a lot of other things do that too, which is kind of like "Hm... Did I sign up for this?"

**Bret Comnes:** It's a good growth hack. Some content marketing tool. I don't know, I've always found that to be kind of like an annoying behavior. When I see that kind of stuff I'm like "Hm... That's probably not a very carefully engineered web app", because it's got a lot of extraneous logging stuff going on. Probably it could spend more time fixing this stuff.

**Christopher Hiller:** Yeah. I'm not sure a library should use anything other than Debug... And you should opt in if you want any log output out of some library you picked up.

**Bret Comnes:** Yeah. But a lot of libraries like to announce that they're there, and it seems to work, because people still use them. Obviously, it's annoying, but at the same time maybe somehow that is what the market wants. So cosmically it's justifiable. I don't know. We get what we deserve.

**Nick Nisi:** And on that note, let's go ahead and end there. Thank you so much, Bret and Mik, for coming on and chatting. Shocking that we had so much to talk about on logging and error handling... Not really.

**Bret Comnes:** It was my pleasure.

**Mikola Lysenko:** Thanks for having me.

**Nick Nisi:** We'll definitely have you back. Thanks so much. Thank you, Chris, for joining as well, and we will see you next week.
