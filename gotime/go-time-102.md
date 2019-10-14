**Mat Ryer:** Hello there, and welcome to Go Time. I'm Mat Ryer, and this episode is all about application design. I'm joined by a concurrence of gophers which you may already have read about and met maybe, and seen videos of, and all sorts. I'll introduce them now. The first one - welcome back, Peter Bourgon. Hello, Peter!

**Peter Bourgon:** Hello. I'm speaking to you from my Berlin dungeon this time, in a slightly less echoey chamber of it.

**Mat Ryer:** Lovely. Nice to have you on again. We're also joined -- it's Kat Zień. Hello, Kat.

**Kat Zień:** Hello! Wow, you actually pronounced my name right this time.

**Mat Ryer:** Yeah.

**Kat Zień:** Have you been practicing?

**Mat Ryer:** I have been practicing, yeah, because the letters in your name don't help, so I had to practice... They don't help me.

**Kat Zień:** \[laughs\] Hello, everyone. I'm joining from my flat in London.

**Mat Ryer:** Awesome, welcome. I also want to go around and get everyone's Twitter names as well after, in case anybody wants to send love (or hate) \[unintelligible 00:02:29.22\] My final guest, last but not least, it's only Ben Johnson. Hello, Ben!

**Ben Johnson:** Hey! Glad to be on here. Representing Denver out here.

**Mat Ryer:** Lovely. And how's the weather over there in Denver today?

**Ben Johnson:** It's great. Same as always.

**Mat Ryer:** Yup. I lived there, actually, believe it or not, for a while. Well, welcome. We're gonna be talking about application design. I'm interested in what principles there are that we can apply. I know that a lot of decision-making when it comes to the design of applications is really more trade-offs than there being strict right and wrongs, so I'd love to dig into some of that, too.

It would also be great to hear about some common mistakes that we see, and that we've made ourselves in the past, as well as any sort of specific patterns which people can apply today to their work. That would be excellent. So no pressure... But let's kick things off.

Principles - are there any that stand out to anyone, things that you think are probably the most important, things to consider when it comes to application design?

**Peter Bourgon:** I'd like to back up half a step, actually, and observe the things that you observed - principles, set and setting, this sort of thing. Another thing that I am increasingly aware of when I talk about how you should design your application is the context in which you program.

\[00:03:58.18\] If you're writing by yourself and just kind of like exploring a problem space, the rules are completely different than if you're on a team of 20 people, working for a Fortune 500. And they're completely different if you're working on an open source project with 100 maintainers that drift in and out.

I think we often fail to bring up our contexts when we talk about what's good and what's bad, and I think that more than anything is behind a lot of our opinions. So I try to do that; I often fail... Maybe that's something that's worth talking about.

**Mat Ryer:** I think so, and I would extend that also to the lifecycle of the project itself as well, even if you are in a big company. At the beginning of a project you probably would do things differently, and they will change over time, and hopefully they change in response to real feedback from the code, and things. So yeah, I think that's a great point, context matters. And I think when the context is removed, that's when we end up having arguments and disagreements about things publicly, on Twitter or in person, and often it's because we're just looking at it from a different context. So that's what I mean, it's not really right or wrong, it's a trade-off.

**Ben Johnson:** Yeah, I very much agree.

**Kat Zień:** Yeah, I think that also explains why there is very rarely a right or wrong answer. The answer is almost always "It depends on what you're building, who you're building this with...", all those things that Peter mentioned. And I think that's why I'm never a fan of the "always or never" rules. If somebody tells me "You should never do this" or "You should always do this", I always reply with "Well, if it fits your use case, if you have a good argument for it, then you should do it, or you shouldn't do it."

**Ben Johnson:** Totally. Except globals - you should never, never use those. \[laughs\]

**Mat Ryer:** I knew you were gonna say that. Globals, yeah... Actually, that's interesting; we should maybe start there, because I think -- Peter, you did a tweet once, and I always have this now in every one of the talks that I've done since then... You were essentially saying "If you avoid global state, you kind of can cut out a whole class of issues that otherwise you might encounter." That helps with testability, it helps with reasoning... It does make things sometimes a little bit more verbose, but it's probably worth it. Does anyone disagree? Do we all agree that global state is a bit of a painful thing?

**Ben Johnson:** Yeah, I can't think of many times when you need it. There's some stuff with day-to-day SQL where you register drivers, but that's another issue, and we can discuss as well whether that's the right way to do it.

**Mat Ryer:** Yeah, that's a good point. For me, any time you import a package and there's side-effects to that, that's the sort of magic that -- I like that in Go we don't have that sort of magic. I know it's a bit more painful, but I don't think there's anything wrong... And they do this in the image packages, too. If you wanna support JPEGs and PNGs, you just import those packages with an underscore. I wouldn't mind if you had to import the package and then call a method to register something... I feel like that would be more explicit and better.

**Peter Bourgon:** It kind of boils down to the thesis of application design that I've wound up at after a lot of years writing programs in corporate environments on small teams... Which is packages should store declarations, like type definitions and functions, and only in your func main should you store state. And if you keep to that rule - like you said, Mat, a lot of valuable things fall out; testing becomes easier, it's a lot easier to read a program top to bottom and understand what's going on etc. I can go on at great length about this.

And a lot of people think "Well, if I just quickly throw a logger in the global state, it's very easy for me to use", but I've written a lot of programs where there's no global state at all, and the cost of typing the keys just never enters into the cost equation for me... Especially if the program is gonna be running in production or something for a year, or two, or six. The cost of typing just never enters into the cost equation for me. But again, this is my context, and a lot of other people who are writing short-lived programs (or whatever) have different contexts.

**Ben Johnson:** \[00:08:14.29\] Yeah, I used to always start applications where I had a main struct that I kind of almost held things in, or I'd even inject standard in/standard out, just to be able to test those, and do loggers... I've kind of backed off that; I'll get to that when I need it, when it's grown big enough... But I try not to start going crazy at first.

**Mat Ryer:** That's interesting. Talk a bit more about that idea of injecting standard in/standard out. How would you literally do that?

**Ben Johnson:** One option which you can do - you can make a main struct, this is one option, where your main struct has your standard in and your standard out; it kind of contains that state, so that if you wanted to run tests against your main package, you can actually instantiate that and then assign the actual buffers into that, readers into that, and then be able to check for log messages, all kinds of little tidbits like that.

**Mat Ryer:** So you take in an io.Reader for standard in and an io.Writer for standard out and standard error, and then you can use any types that implement those interfaces.

**Ben Johnson:** Yeah. That's pretty handy.

**Mat Ryer:** Yeah. You see, I do this thing where I still do this regardless of the size of the project. I like returning an error, so I immediately in my main call out to a run function that can return an error, and then all my code in that run function just returns errors in a normal way. In the main sometimes I like to write the error to standard out, and maybe I'm gonna exit with a non-zero exit code, and I only have to do that once then. And sometimes I'll take arguments into that run function like arguments, for example, if it's a command line, and then I'm gonna be passing flags and things... Passing them in, and that allows you in tests just to call that run function like a normal function; it's nothing special about it.

**Ben Johnson:** Yeah, I did the exact same thing. I think I saw a tweet from you, and my code looks almost exactly the same when I set up a main.go.

**Kat Zień:** I'm wondering about a slightly different use case... Because obviously, the run returning an error - it works for a simple application that can just return an error. But let's say you're writing something that processes requests, and then you take in a request and return a response; then it becomes a little bit more complicated, because just returning an error doesn't really solve your problem or use case. So what I've seen done is basically just a similar principle, but instead of having a clean one error returned at the end, you just return the error response, so you kind of wrap the error in the expected HTTP response. Same principle, but you adapt it to the particular thing that you're working on.

**Mat Ryer:** Yeah, so it's like a tiny abstraction. Not going too far, but yeah... And it probably would be different - and it is, actually - in cases where I'm not gonna read anything from standard in; I wouldn't have that as an argument. And that's a storytelling opportunity, too - it's clear then what this program needs and what it's gonna use.

Yeah, I do wonder if we could maybe get rid of global state. If we ever did a major release of Go where we could make big, breaking changes, what about just getting rid of global state, just don't allow it? What do you think about that?

**Ben Johnson:** Yeah, I'd be okay with that. I'd have no problem with that.

**Peter Bourgon:** There's a use case for global const, and the current semantics of the language require you use var for maps; you can't say "const map." But we if could somehow magically fix that stuff, I'm all on board. And of course, this also means eliminating the init function, which is the source of great suffering.

**Mat Ryer:** Yeah. We've kind of jumped straight into common mistakes. Maybe we should keep going with this little thread, because it's quite interesting... And again, it's worth saying that if you do -- part of my approach with the team is always "It's okay to make mistakes. We'll start simple, and if we do make a mistake, we just have to be ready at that time to - once we feel that pain, then it's worth fixing." And that approach also helps you avoid going too far in the beginning, as well; you're not spending all this time building out this big, complicated architecture thing that you're never actually really gonna need.

**Ben Johnson:** \[00:12:19.18\] One of the first talks about Go was about Andrew Gerrand, I think it was called "Code that grows with grace." He laid out the evolution of a program from something extremely simple to something that was moderately complex, and the point was at every step of the way don't write more program than you need at that step... And yeah, I think there's great value in that.

**Mat Ryer:** Yeah. It's not a failing if people try -- I think what happens is we look at successful projects, and a lot of Go is in the open source world; you go and have a look and you see all this structure, and stuff, but hopefully that's there's for a reason, and it's sort of organically grown into that, rather than it being designed that way from the very beginning. You're probably not in that situation yet, so you don't have to do those things. I think that's the same kind of principal, yeah; I think it really applies.

**Ben Johnson:** Yeah, I've been doing these office hours recently with Go folks, just talking to them, and it's been interesting to see some of that approach where it's like -- they'll see the world as it's gonna be in a year or two and they wanna plan for that; they've broken it out into 20 microservices, and all that stuff... I mean, I find it hard to break out microservices as it is, but without having the context of what things really interact in your application, and really understanding it as a whole... I feel like you need to grow into that, for sure.

**Mat Ryer:** Yeah, I think it also applies to what the programs/projects are doing, as well. Start on that core, the thing that's the most valuable, and don't try and solve every problem under the sun. Let that stuff evolve and organically grow as well. There will be times when you have to go and correct things; you've made bad assumptions, or whatever... But that's just totally normal. When that happens to people, especially if they're new to building projects like that, they feel like they've failed somewhere, and they haven't. I think that's quite an important lesson.

**Peter Bourgon:** There's a really lovely blog post/article by a programmer in London by the name of tef. I don't know his real name off-hand... And it's titled "Write code that's easy to delete, not easy to modify", or something like this... And he goes into quite some detail about this, and I'm totally on board with this idea - the program as it exists in any given moment is the best approximation of what should exist for our understanding of the domain model. And when you have new requirements that arrive, you should be very eager and it should be very easy to delete and refactor all the abstractions that you've done so far, and rebuild them with your new knowledge. You shouldn't feel trapped in this structure that you created without really know what you were doing. So I highly recommend that article; not for Go, but just in general.

**Mat Ryer:** Yes... Which I think is probably one of the most valuable things you get from microservices - in theory, they're micro, they're small, and if it's not doing what you need it to do, you can delete it and rebuild it, rewrite it. If I'm writing a package that's gonna be an open source package, genuinely I will write it once, and then I kind of know what it needs to look like, I know what it is, and I'll actually write it again the second time, usually trying to cut the fat, trim the fat down, trying to make sure it's just the essence of the package, and shrink it as much as possible, and things like that.

If you try and do that from the very beginning, sometimes you can, and sometimes you see little shortcuts to make, but it can get in the way of that process where you're exploring. You should definitely be free to just explore and get that problem solved, and then afterwards you can go and -- I rewrite it, literally.

\[00:16:03.23\] There's a quote from Hemingway, I think, where he said "The art of writing is rewriting." I think that applies to software, as well. You can't always do it, because in the real world, with teams, we don't always have the luxury of time, but it's so worth it that I actually always encourage teams to deliberately build in time for it, just because the results are so much better.

**Kat Zień:** Yeah, I completely agree that coding for the future is the number one problem that especially junior developers have. They try to anticipate everything, and I really try and encourage them to just think about their problem at hand, and worry about other things later. And I think that what you said is right - you shouldn't really expect to get it right from the start, because especially the bigger the problem, the bigger the application you're building. It's very hard to just get it right from the start and predict absolutely everything and how it's gonna look like in a year. A lot of the things come out in the wash. But I think just applying some good principles from the start will let you then change that code much better.

I think it's very important to just try and draw from your own experience. If you're already encountered that problem before, you probably have some experiences with that; you've hit those pain points before. So I think it's fair to then say "Oh, I'm gonna do this right away, because I know that this will let me solve that problem later on, or avoid these kinds of problems", and that's fine. And then if you recognize the problem that you've had before, it's easier to do that. But if you actually haven't done anything like that before, then yeah, the easiest way to start is just keep writing, and then at some point you stop, you take a step back and think "Okay, maybe now we have enough to now think about the design a bit more and structure it a little bit better."

**Peter Bourgon:** Yeah. Kat, you had a great talk, basically going through an evolution of -- not design patterns, but architectural patterns, I guess...

**Kat Zień:** Pretty much, yeah.

**Peter Bourgon:** What was it called again?

**Kat Zień:** It was "How do you structure your Go apps." There were four different layouts... So I think "layouts" is the right term. It was a flat structure, it was group by functionality, grouping by context, and then the hex architecture... Sort of talking about DDD and hex architecture as my personal favorite and holy grail... But that's not to say that the flat structure isn't valid or good; it's equally valid and it's equally good. It just depends on the problem.

**Peter Bourgon:** Right, right. In GoKit, which is a project I maintain, a lot of people jump into it when they're just getting started with their domain idea, and it's not for that. It is the final stage, when you totally understand things... So yeah, it's totally fine to start very small, and don't have a complicated structure before you know what you're doing.

**Mat Ryer:** Yeah, I had this experience recently where I knew there was gonna be some structure, I knew that there was gonna be some complexity, but I couldn't quite imagine it... So what we did is we just had everything just in one folder, that was it. And once we'd got down the line enough that we had the thing working, some concepts which were quite surprising - they sort of presented themselves; it was then quite easy to see how it should be structured. I wasn't able to do that before... So yeah, if listeners take away anything, it's that - we shouldn't be imagining stuff too much. We might get it right, but we might not.

**Ben Johnson:** One of my favorite ways to refactor - I'll start with a flat structure, and I always put way too much code in there, and then eventually at one point I just open GoDocs, and a lot of times you can just look at the names and it's like "Oh, I have a MySQL, or something..." and it's like "Oh, all these things are prefixed with the same name. They probably are kind of related. Maybe that can be a structure", and just try to figure out where that falls out.

**Peter Bourgon:** I think we're talking about, in a sense, like abstractions... Like, where do we define the abstraction boundaries in our program. One thing that took me a long time to learn but I think is really true is that abstractions have to emerge from the program. You can't apply them from day one, they have to be revealed from what you build. So premature abstraction is the root of all evil.

**Kat Zień:** \[00:20:10.13\] I think it's also really important to really take your time to make sure that you understand the problem and the domain that you're dealing with. I've had it so often in the last few months where I'd be given a task to do, or I need to get something done, and then I would immediately jump into the things that I think I know, and I would do it this way. And then you just take a step back and you ask the question "But does that actually address the original problem that we're trying to solve?" and surprisingly, most of the time you're like "Oh, yeah, maybe we don't actually need to do this, or we can just do that."

It's also important to not get too tied to your usual ways of doing things, or because you always do your things that way... Because sometimes you might surprise yourself if you take a step back and actually zoom out of the code a little bit, and then you kind of see new patterns emerge, or maybe a new grouping that would make your life easier in some way... And also, just thinking about "Does this actually address the problem that we're trying to solve with this particular application?"

**Break:** \[00:21:12.01\]

**Mat Ryer:** If you already have lots of, say, whether they're microservices, or whatever they are - you already have things that you're working on, and you're adding more of those, do you think it's best to just follow the patterns that are already established, just for the sake of consistency? Or do you think it's worth using new learning and new concepts to improve things gradually? How do you feel about that?

**Ben Johnson:** Personally, I feel like if you have a lot of microservices and you're not really quite sure about your structure - or a lot of packages, for that matter - I feel like unless you get the package structure right, packages kind of beget packages. You can't do circular dependencies, so a lot of times you end up having this third package to interface with these two packages, because they can't reference each other... And you just get this massive onslaught of packages. Honestly, sometimes I recommend people just to actually consolidate when they get to where it explodes too far, and they kind of come back and revisit.

**Mat Ryer:** \[00:24:12.05\] Yeah, that's a great point. I don't like it when you have a package that's there really just to make the compiler happy... Because we're not really writing the code for the compiler, are we? We're writing code for our fellow humans.

**Kat Zień:** I think my number one advice to somebody who has microservices is to keep them (in the official terms) homogeneous, which means exactly the same - they're just a carbon copy. And I think a step forward from that is just use code generation to just spin up a brand new service that has exactly the same structure, for a bunch of reasons. One of them is familiarity. If you have ten microservices, maybe you can memorize how each one is structured. If you have a thousand microservices, it makes your life a lot easier if you can just open any service and you can navigate around without getting too lost, because you already know where to expect everything.

The other reason is over time you'll probably find the pattern that works for yourself and your use case. Even though it might not be a textbook correct pattern, it works for your company, for your team; you find your own best practices over time.

And then the third one is you just reduce snowflakes. If you keep those services to a single responsibility and they can be structured in the same way, maintenance is a lot easier, understandability is a lot easier, there's no snowflakes, you can deploy them in the same way. So that would be my number on advice - try and keep them as similar as possible.

**Peter Bourgon:** I'm excited, because my advice is precisely the opposite. We have conflict... \[laughter\] And all good stories involve conflict. No, this is another question of context, right? And I'm sure, Kat, you've worked in environments where that advice makes perfect sense, and I'm sure I would agree with you in those environments... But in my experience, microservices are a solution to not a technical problem, but an organizational problem; they help you deal with Conway's law, essentially.

The whole point is that you define these very strict schemas, boundaries between them, like how they communicate with each other, which allow you to implement them however you want. So one developer in a given organization shouldn't be working on more than one microservice; a team should own a microservice. If you find that one developer is contributing to multiple microservices, then in my experience something's gone wrong. So in this world of microservices, the implementation should be completely up to the team. So - Scala, Go, Haskell, whatever.

**Ben Johnson:** Yeah, I would largely agree with Peter. I would say there are some exceptions that are actually technical. If you have systems where certain services need to scale differently than others, that can be a certain example where you might need to split off an application so you can have one have eight nodes, and one have two nodes... But maybe your team is not large enough to split across two.

Another example is if you have a release schedule where you might have an API that's public - you might need to have some kind of versioning that is more restricted on certain services, not others... That kind of thing. But overall, I agree - it's largely an organizational benefit.

**Kat Zień:** Yeah, I think -- so, again, to introduce the context first... If we're talking different languages, then yeah, of course, don't try and shoehorn one language into following another language's structure and best practices, because every single language should be written slightly differently, right? The way it's intended to be written in. I was thinking of the case where your codebase uses one language, it's sort of the same application, the same system that's just consistent over a bunch of microservices...

And then with regards to the team owning microservices - the way my company is structured is that teams own microservices... And say a team owns 5 or 10 different microservices. But then you've got 10, 5 people in a team, and they can each touch that service any day. So to keep one person tied to a microservice is obviously not future-proof and not scalable. And then because we've got new developers joining the team, we've got people moving between teams every now and then, you just reduce that barrier to entry, if they can come in and on day one just recognize the same structure and the same patterns.

**Peter Bourgon:** \[00:28:13.13\] Uber gave a talk recently that went into some detail about the patterns they use. I think it was at GopherCon San Diego... Was that correct?

**Mat Ryer:** Yeah.

**Peter Bourgon:** Yeah, they talked about their dependency injection \[unintelligible 00:28:23.20\] and so on... Yeah, so that makes a lot of sense in that environment, I think.

**Kat Zień:** Yeah, I was talking more about a team of a few hundred engineers and over a thousand microservices. At that scale, I think if we had just a bunch of monoliths, then that would not be scalable. So yeah, I agree that it's mostly to address just how to organize your company in the most efficient way. If you're just a single developer working on your application, I think microservices might be a bit of an overkill, unless you really, really wanna explore that pattern.

**Ben Johnson:** I am curious though, Kat... So you guys have multiple microservices per team; I've seen that, too... I'm curious what's the benefit of doing multiple services versus one single one for the team?

**Kat Zień:** Our microservices are actually single-responsibility, and they are very tiny. So it's not a service that does a bunch of things, it's a service that does one thing and one thing only... And usually it's just the aspects of the team that the team is responsible for. I work at a bank, so let's take lending as an example. It could be a service that makes the decision whether to lend somebody money or not. There could be a service that does credit checks. So it's a single responsibility. And then the whole team is working on that aspect of the application, or the product... So it's very hard to find a one-to-one mapping between a specific aspect of a team and that service. Usually, you need to touch a bunch of them, because they're so small. One service is responsible for just one little thing, and usually you take them as puzzles and you join them to build something bigger.

**Mat Ryer:** You work at Monzo, right?

**Kat Zień:** I do, yeah. I joined them because I was really curious to basically learn how to do microservices well... Because previously, my experience was very much like "Um, I don't think that quite works... It's very hard to find what should be the microservices, where do the boundaries lie..." And then I wanted to join Monzo because I wanted to see from the inside how to make that happen, and in a good way. Monzo is a bank, so you can build a bank using microservices, and that's obviously a huge responsibility.

So I kind of saw this from the outside, and I'm like "Okay, they're doing something that works." And now, after a few months there, I can see that probably having the homogeneous, single-responsibility services, having every service being owned by a team, so that there's no unowned services that nobody knows about - those are some of the key building stones, I think, to the success.

**Mat Ryer:** So in the case of Monzo, then - you've mentioned a service that's making decisions about lending... That internally - the work is gonna be very different to, say, the service that handles when you freeze your card. If you lose your card, you can freeze it. So what's similar? It's gonna be the messaging, the interfacing? What actually is similar, and then is it okay that - and probably it has to be - then other things inside that service could end up looking very different.

**Kat Zień:** Yeah, so pretty much the only difference between those services is the handlers. The database schema for the particular service - so if each service has some schema, that would be different. And then the handlers, or the actual business logic will be different; that's obvious. Everything else is the same. And by "everything", I mean actually everything: routing, authentication, authorization, logging, metrics... All of that stuff.

We use libraries quite a lot, so we've basically extracted all the common functionality into libraries that you pull into each service, and that way every single service is the same, it does the same, it works in the same way. If you deploy a new service, it instantly pops up a Grafana dashboard for you, because it's spun up in the same way. So there's very little friction to actually add a new service... And again, we use code generation quite heavily for that, so if you just wanna start a new service, it's just one command and boom, you have it. And all you have to do is just fill in the business logic. Everything else is taken care of, because there's no point reinventing the logic, the same, a thousand times.

**Mat Ryer:** \[00:32:08.16\] Yeah, it's not the interesting thing about that service, is it? It's just something that you have to have.

**Kat Zień:** Yeah, and the great thing is that as we add more people, they don't need to know the details about how does routing work, or whatever; they can just assume that they are black boxes that work, and then if they wanna do something on it one day, they can explore more and dive in more... But it just reduces that barrier of entry for new engineers.

**Ben Johnson:** So here's a question - and maybe we're getting a bit far-field here... But let's say that a common logging library has a bug fix, or a new feature, or something. How do you roll that out across the fleet?

**Kat Zień:** You pretty much mass-deploy everything. Our deployments are super-easy; it's just, again, one command on the command line. So we can deploy instantly. And we've had cases where we needed to roll something. Mostly, infrastructure config, for example. We would slowly roll it out across the whole fleet of services, and then you just ask the owning teams to deploy it. So you'll prep the fix, you'll merge it, and then you ask the teams that own services to just do the upgrade or do the bug fix or whatever, and deploy their services. And then we just have a spreadsheet of what's been done, what's still waiting to do, and you chase the teams until they do it. Luckily, all the teams are pretty responsive and reactive, so usually we don't take too much time to get it done.

**Ben Johnson:** To rebuild and deploy...

**Kat Zień:** Yeah.

**Mat Ryer:** So Kat, earlier you mentioned the hex layout, I think you called. That's really for dealing with dependencies, right? And which dependencies you're allowed to import for where - could you tell us a bit about that?

**Kat Zień:** I think hex architecture - at least the way I understand it - is more about separating the different things that make up your application... Some of the application code will be your pure domain logic, it will define your business logic and your processes. Some of it will be framework code, some of it would be third-party code, some of it will be the glue between the logic and the third-parties; some of it will be the glue between the framework and your application.

So I think it lets you organize your application so that you build boundaries between the domain logic, the application code and the third-party and framework code. And that in turn allows you to make changes without having to change a lot of things just to make one small change. Because if you isolate the business logic, the chances are it doesn't change very often, so it can stay the same, it's well-protected by tests, sort of isolated from trivial changes to frameworks, or whatever.

And then in the same way, if you wanted to swap the type of database that you use, you just sort of swap that, swap in the interface to it, but then you don't touch the logic. So it kind of just prevents you from having spaghetti code where different interests are mixed together, like business logic with suddenly a call to a database right away, and that sort of thing. That's how I understand it.

**Ben Johnson:** I like to describe it as layers of an onion. Your business logic is in the core, and then everything else is getting further and further away from the business logic. At the very outside is gRPC, or whatever. And defining those boundaries and being very explicit when you cross them.

**Mat Ryer:** Do you end up turning one struct type into another a lot, and copying fields, and things? Because that's something that -- you can actually have two structs of exactly the same structure; you can't just cast it immediately in Go. But that feels a bit fragile. Are there any other techniques we've used, other than just having a method on the struct to turn it into another type? And then how does that work with the avoiding circular dependencies, and stuff?

**Kat Zień:** The way we solved the problem - and that's just one of the possible ways - instead of having a method or a function on a struct to turn it into a different struct, because that then means that the struct has to have knowledge of how does the third-party representation look like, for example if you wanna translate a domain logic, a business logic struct to a database struct... And it shouldn't; it shouldn't care what the database expects. And then equally, you could have that function done on the database struct, so it takes the domain one and turns it into its own form... But again, how do you decide? So the way we solved it is we just have marshaling packages. It's just really dumb marshaling, kind of like Utils package, which just takes a struct of this kind and outputs a struct of a different kind, and then we just have them available across the service, so it just calls it on the way in and on the way out.

**Peter Bourgon:** \[00:36:19.18\] This is a topic of frequent conversation in the Go Kit world. And to tie back to an earlier conversation we were having about evolving a codebase as your requirements grow, I think it's just a question of complexity and how philosophically strict you wanna be in your application. Because plenty of people will take their gRPC types and use them as database models... And you can do that, you can use the same type through all the layers of the hexagonal architecture; it violates the layering principle, in theory... And there are consequences to that, but maybe it's worth it, rather than writing the marshaling and unmarshaling code. Maybe that's too laborious.

If you wanna be really strict, you're gonna have a new data type at each layer of the architecture, and you're gonna write the code to translate it. And maybe that code is just a cast. Maybe that's fine. So it's just a question of how rigid and strict you want your application to be. If the application is only gonna live for a year because you only have six months of runway and you don't have product-market fit, it probably makes no sense to go through all the struggle. But if you're Fortune 500 and this code is gonna live past your lifetime, then yeah, maybe take the time, because that extra 20 minutes of typing is nothing in the grand scheme of things.

**Ben Johnson:** Yeah, I usually put my structs into wherever -- I always put it in the package of the dependency to convert from the domain, personally. So I'm usually pretty strict about that.

I do have a question though, kind of on this topic... We were talking about controllers, and separating the model and all that... This is just kind of my thought recently - I've seen a lot of people where they will try to make almost dumb models; they'll have these dumb models that are just like "Oh, store this thing. Get this thing" and whatnot, and they try to put all their business logic higher up... But I feel like you lose out a lot on transactions, unless you wanna model transactions at your domain layer. And you have just a lot of these little performance improvements and benefits you can get from the underlying dependency, the technology that you're using, that you can't get if you move it up to the controller.

So I don't know about struggle, but I tend to move away from actually big controllers, and actually start putting business logic into the implementations... Which I know is supposed to be like a no-no, but I find from a performance standpoint it almost makes sense a lot of times, and transactional integrity, that kind of thing. I'm curious what other people think about that.

**Mat Ryer:** Well, it brings up a good question, when you talk about those sorts of performance enhancements. I tend to go for just kind of simplicity and ease of maintainability, over performance. But of course, sometimes performance really does matter, and it's probably a trade-off. Then you have to sort of decide whether you're happy with this slightly more complicated thing, but it performs brilliantly, versus it's very easy to read and maintain, but it's a bit slow.

I was very pleased to hear that defers got a turbo boost in the recent release of Go, because that was one example where for readability, defers -- I actually love defer. We should do an episode just on defer, I think. It's such a brilliant thing. The arguments against defer were it didn't perform great originally, and it is a kind of runtime thing. It's not something the compiler can just do. Because I was thinking maybe the compiler could just look at where the defers are and just copy the code, essentially, to all the exit points. But of course, you could queue up a lot of defers in a for loop, for example, at runtime, so there's no possible way -- well, sometimes it's possible, but not always...

\[00:40:01.21\] I always prefer the readability of defer over the performance... But what you've described makes sense, and actually if you're squashing things down and just keeping things simple, and not breaking all these things into layers early, then you can do that. And I think when it comes time to break that out, you'll know at that point, and you'll make a decision about where that stuff will live. It'll probably be quite clear.

**Peter Bourgon:** I just wanna say, I think the defer episode should be the last episode of Go Time.

**Mat Ryer:** It should have been the first. \[laughs\] That's a good idea though. So how do you feel about that, performance over readability?

**Peter Bourgon:** Yeah, this is a great segue... I think what Ben mentions - he exists on a point on the spectrum where performance is important, but the spectrum extends in the other direction, where maybe you don't need that performance; so it's another issue of context. But I think it's a great segue to maybe start talking about performance optimization and profiling, and that kind of stuff, which I think is also maybe a topic worth discussing.

**Ben Johnson:** Actually, real quick, on the topic of performance... I guess when I think of performance - I use defers with reckless abandon; I never think about the performance, generally... But say you have a SQL database, where you could implement some business logic up in the controller, where it would make a bunch of calls over a bunch of transactions within your database... Or you could write some crazy update with a lateral join, something that executes a thousand times faster. That can have a real impact on latency and noticeable performance. That's the pieces I'm thinking of... And it has a transactional integrity.

**Peter Bourgon:** For me the question is always like, in the language of your business domain, what is the action you're performing? Is it that entire transaction, or is it all the specific things? And if it's the entire transaction, it makes total sense to do all that work in a single call. But if the way you've chopped up the abstraction boundaries at the database layer, at the storage layer - it's all these individual things which your business logic is responsible for stitching together... Then you can do it the other way. So it's a design question first, and then a performance question second.

**Kat Zień:** Yeah, I completely agree with that. Because there's micro-optimizations and there is the proper optimizations. I think a lot of people, especially new to optimizing performance, or coding, or something - they just tend to focus on micro-optimization, because they would for example hear that defers are bad, because they're slow, and they will just go out of their way not to use them... And that's really dangerous, because most of the time you're not really tackling the real problem, you're just masking it... So I would \[unintelligible 00:42:32.12\] because very often they will just have such a negligible impact overall that you would just never notice the difference between using defers and not using defers, unless you're doing live trading or something, where every single millisecond is crucial.

I think that Peter touched on a really important point, which is how you structure applications, and exactly that; it's the sequential execution of a business process, or can you actually break it down into a bunch of asynchronous calls that you can make? And also, does everything have to happen in order to achieve point X, or can you maybe defer some stuff later and just get to point X quickly, and then do other things?

To give a real-life example of that - and we actually have one of the Monzo guys, Matt Heath, has a really good talk explaining how we've structured our processes... For example, when you pay with a card in your shop, all you care about as a customer is that the transaction goes through and gets approved by us as fast as possible... And the customer doesn't care at that point about enriching it with the merchant's logo for the app, or getting the actual merchant name, or any of the nice-to-haves, but not mission-critical. So what we've done is instead of going "Okay, first approve the transaction, then I go and fetch the logo, and then maybe update this or that, or send the user the feed item", we just approve the transaction and return right away, because that's the most important thing.

And then afterwards, that kicks off a bunch of events, and then those events are consumed by all the services, and one of them is gonna send the feed item, one of them is gonna fetch the logo for the merchant, and so on and so forth. But the actual mission-critical path is just approving the transaction. And if everything else fails afterwards, we don't really care; we can deal with that... We can replay it, or we can do whatever. It's just that \[unintelligible 00:44:08.20\] that is the critical point. So I think it's thinking about systems in this way that is the really, really powerful skill.

**Mat Ryer:** \[00:44:16.08\] That's a great example as well of something where the user experience directly impacts the design of that system, and I think that is something that we should do more of, and it's vital that we know the why of what we're building for that exact reason.

In that particular case, Kat, I do love it when I pay with my card and the merchant (is that what they're called?), the person in the shop is still waiting to get approved, and my watch has already said "Yes, it's fine. It's gonna be fine." And sometimes they have to wait quite a while after, and I suppose that's their bits that are being slow... But they don't trust me; I just show them my watch and say "Yeah, it's done. Bye!" That doesn't work, unfortunately. Not yet.

**Kat Zień:** Yeah, I do exactly the same. \[laughs\] Yeah, and also sometimes there's a third-party restriction. For example, the need for actually approved transactions really quickly comes directly from Mastercard. They give you a few hundred milliseconds to respond, and if you don't, they will just cut you off. So it's in your best interest.

**Break:** \[00:45:23.08\]

**Kat Zień:** I can ask a related question; a sort of new question, but an interesting one that I've actually been thinking about as well... Which is - personally, how often do you actually end up writing the really concurrent code, using concurrent patterns in your day-to-day job... And that leads to a different question, which is "Should you design your applications with concurrency to start with? When should you introduce it? Should you over-complicated it in that sense start with, or do you just start sequentially and then branch out?" What's your take on it?

**Ben Johnson:** Usually when I design stuff, I'll make the sequential piece that actually executes - I'll usually make that part of the export API of whatever the thing is, and I'll try to make the fancy concurrent version of it, just call into that. It just makes it so much easier to test, to be able to see the sequential stuff and separate it out from the actual concurrency pieces. But usually, I'll start with the sequential stuff until it's just too slow.

**Mat Ryer:** If I'm writing a package, I will try and avoid concurrency altogether and let the users do the concurrency. You know how easy it is to just sort of say "Go do this thing." You can't always do it, but that's my goal; if I can just not have any concurrency in this package, and let that a bit like where the states lives, as Peter mentioned - let that be just in one place - then I'll do that for sure. Otherwise, I tend to have all the concurrency bits in one little function, and it calls out to other things, so that there is still one place. I've done it before when I first started with Go - I was so excited by channels, and I just used them all over the place, and I definitely overused them... And actually now I end up using mutexes and goroutines, essentially, most of the time.

But sometimes channels are a lovely interface, and they just fit perfectly, don't they... And they are very exciting times. So I do love using channels.

**Kat Zień:** \[00:48:09.18\] That actually reminds me of a talk at GopherCon 2018 in Denver... There was a talk from somebody from the Go team, I can't remember now... He was talking about advanced concurrency patterns, and he actually mentioned this as one of the important things, which is if you're writing a package or a module that is to be used by other people, don't build the concurrency into it; write functions that can be run concurrently by the consuming code. That was a great mind shift for me as well. Instead of putting concurrency in, just write a function that can be safely run in a concurrent way, and then the consumer will decide whether they want to do it concurrently or not.

**Mat Ryer:** Yeah. For me it's about the fact that the user then knows exactly what's happening, because they did it. I'm very anti-magic, despite having the appearance of a magician... Which I'm well aware of.

**Peter Bourgon:** Do you do that deliberately, or is it just emergent?

**Mat Ryer:** No, but it is tough being -- I had to come out to my parents; I was like, "Mom, dad, sit down. Pick a card." It's very difficult to come out as a magician.

**Kat Zień:** I thought you were gonna say "Mom, dad, sit down. I'm going to Hogwarts!"

**Mat Ryer:** \[laughs\] That's a hate crime. No, I didn't get in.

**Peter Bourgon:** It's a tough school. Who was it that mentioned Hemingway earlier? I forgot.

**Mat Ryer:** I think it was me.

**Peter Bourgon:** Was it? I'm gonna be a little bit gross here now and say -- I think Hemingway is a great model for writing code, because I think the best code is always that which is so plain and simply-stated that there can be no ambiguity about what's going on. And that's actually a target for me when I write packages and code. It's little things, like how many levels of indent are there? One? Perfect. Can I read it like it's a short story, like "Do this, or that. Then this, then that"? And designing concurrency into the API is part of that as well. I should be able to say my package exported functions are usually verbs, like "Do this." My package exported types are usually nouns, "This thing." And combining these two should be a very orthogonal process. And if my package doesn't look like that, because I haven't quite mastered my expression of it, then I need to rewrite it.

So concurrency is something that I almost always leave out of everything I write. The only time I write go (they keyword go) in most of my programs is in func main. There are some exceptions. I wrote something recently that -- I did a lot of scraping of third-party APIs, and there's no reason to do that sequentially, so I wrote kind of like a little \[unintelligible 00:50:35.07\] But that's the exception, not the rule.

**Kat Zień:** Yeah, I kind of found out a similar thing - \[unintelligible 00:50:46.25\] fun projects like 24 Days in December, or whatever, you experiment with this cool concurrency patterns like fan-in, fan-out, and the channels, and all of that... But actually, in the day-to-day job, the concurrency is built more into the system itself rather than the code. The code is most of the time sequential, and because we have tiny services, usually there's just not enough things to do concurrently; it's just one simple thing.

And to quickly touch on the previous subject of "Do you have controllers, modules and everything else, or do you just have the logic in the implementation, or the implementation in the module itself, or do you skip the module entirely?" I think it also depends on the size of your service, of your application... Because if it's a big one, you might even need crazy sub-modules. I've worked on projects which had crazy modules of modules, because they were monoliths, essentially. Whereas in -- the smaller the service, I find the less layers you need... So sometimes it's completely fine to just go have a thing that is both a controller and a module, that just goes to domain. If you don't need those two, then just don't force them, because it's just unnecessarily complicating things. So yeah, that was to default to the previous question.

**Mat Ryer:** That is great though. I'm so pleased you said that, because I know for a fact that people feel like that's a failure if that happens; they feel like they haven't solved structure, they haven't architected if properly, because they don't know what they're doing. That's how people feel about this... And it really isn't the case. Yeah, I agree.

\[00:52:18.08\] I genuinely will start nowadays with just a single folder. Everything's in main; I don't' even break it out into packages in the beginning. Even when I know for sure it's gonna have to happen. It's a sort of journey, that's the thing; it is a journey, it's not that we're building the final state. We're never really building the final state of anything in software. So I'm really pleased you gave that example...

**Kat Zień:** Yeah. And whenever I talk about DDD, and you talk about the different components in DDD, like the repositories, and the services, and the value objects and whatever, some people try and desperately find every single one of those in their application... And sometimes you just don't have them, and that's completely fine. It doesn't make you a worse programmer if you don't have those things. Sometimes you just don't.

**Ben Johnson:** I think that DDD is like the final form of the structure of a program, and it depends on you having a really strong command of your domain. If you're an early-stage startup, you don't even know what you're building. You don't know what the people want, you don't know the models you need... So there's no reason to go all-in on all this structure. It's only in the final stages, when you're presumably making profit and you have costumers that tell you \[unintelligible 00:53:22.26\] all of your models of the thing that you're actually building. Until then, it's nonsense and a waste of time to go that deep.

**Mat Ryer:** I hope that gives a level of comfort to our new Go programmers that listen, I really do. I love that this has been basically the theme of this show, actually.

**Kat Zień:** Yeah, and to repeat once more, just don't expect to get it right from the start. You'll almost definitely get it wrong, you'll almost definitely have to go back and change some things... So yeah, I think it goes back to what Peter said at the start, which is write your code in a way that is easy to change, and then just don't be afraid to change it. The code just lives and morphs all the time. Your business logic will change over time as well. If you're building a product, a software as a service type of thing, you'll probably add some features over time and remove some features over time... So your actual business domain will also change, and that's fine; then you have to adapt.

**Peter Bourgon:** There's another article -- I don't know if giving all these call-outs is good or bad, but I think my favorite article ever written on the theory of software engineering and programming... I don't remember the exact title; I'll share a link maybe for the show notes... But the number one point in it is that business requirements never settle down and become static. They always change. That's the nature of the business. So you can't program in the hope that asymptotically you'll approach the truth. All that's gonna happen is businesspeople are gonna throw more changes at you. So understand this is true, and program to that truth.

**Mat Ryer:** I love that. One thing we haven't talked about much, which is a big thing in Go, is interfaces. And again, this is an area where in the past I've definitely made mistakes, where I just made everything an interface. Everything I did was an interface. In fact, my packages - say I had a greeter struct that was gonna do the greeting; I would have a greeter interface in there as well, and then anyone else could use that interface. That was kind of confusing. I didn't actually build greeters, but I did build real examples of this, and people would often ask "When do I use the interface? When do I use this \[unintelligible 00:55:24.29\]?" So it added a bit of noise... And I must have picked up from somewhere, possibly you one of you three, or Dave Cheney or somebody, saying "Don't both with the interface. Just have the concrete type."

If the user needs the interface, they can write their own. That's a really interesting property, I think, of the way Go's interfaces work. They are kind of duck typing, although apparently it's called structural typing, because it's a compile-time thing; it doesn't happen at runtime.

\[00:55:57.13\] As long as the concrete type or the type implements the same methods with the same signatures as in your interface, then you can use it in place, and that as a property I think really helps. But what about dependencies, and dependency injection, and things like that? How do we feel about interfaces there?

**Ben Johnson:** I like interfaces a lot for that. I think a few things about interfaces - I think one thing that people tend to get wrong early on is that they define interfaces by the... You know, like the library defines the interface, versus the color... And I think that's probably one of the biggest things that people usually need to overcome to really get that to snap and understand it.

Generally, I don't use interfaces unless I need two of something, two implementations of it. And a lot of times it can be like, hey, I'm running Postgres, and I have that, but I also want a mock version of that, so you can interchange both of those.

And not to go too far, but on the topic of dependency injections, since we're talking about that, I know Uber has their own dependency injection framework. I looked at it a little bit, but honestly, I've found that just writing code and just instantiating things, and just passing them in inside of main tends to be the best, most straightforward dependency injection I've seen. That's all I do.

**Peter Bourgon:** Yeah... It's another question of context. When I heard about Uber's talk, I was like, "Hm... Are we really gonna go down this road again?" But hearing it, and understanding the context of their organization, I think it makes sense there, actually. In the same way, Kat, you have a lot of microservices; it doesn't make sense to rebuild the world for each of them... It's kind of their environment.

On the subject of interfaces, I use an extensive lay, but as consumer contracts, not as producer declarations of intent... So what is the aphorism - "Return structs and accept interfaces"? I'm probably on the far end of the spectrum, but yeah, I do that all the time. And Ben, you mentioned you only need an interface when you have two of something... For me, when I take dependencies into a construct or a function, I always need two of them because I have the real thing that I use in prod, and then the mock or the fixed whatever test thing. In every dependency of mine there's always two of them, so I always use an interface. And I define it next to the function, or constructor, or type that uses it.

**Mat Ryer:** I've done that before where the interface was in the test files; it didn't even get into the main package... Because I think in this particular it made sense. I like also the fact that you can define interfaces inside the functions as well.

**Peter Bourgon:** Like anonymous interfaces?

**Mat Ryer:** Yeah, kind of. And it's a storytelling opportunity is what I was gonna say... It's clear then looking at the test what's kind of expected. I like those sorts of little things which Go enables. Sometimes I've done it and I've thought "This is clever, really clever, and I feel really good about myself", but actually no one's gonna expect this to be the way it is, and I just pulled it out and did it the boring way... But for a while I was happy, and those sorts of patterns I think are really cool.

**Peter Bourgon:** Happiness is fleeting. Grab it while you can.

**Mat Ryer:** Yeah, exactly. That's true, actually. I think even -- like, we talk about premature abstraction, and premature optimization, and things like this... Sometimes I would be quite forgiving if somebody's just really into an idea, and they want to just make this thing perform brilliantly... And it's not a business requirement, but I think happy developers should be a business requirement. So I'm quite a forgiving one; if someone's got a little interest in something or an idea about something and they wanna explore it, I'm very into that idea, and I always try to encourage them to then talk about it and share that experience as well, if they can. That's how we can all hear about it, too.

**Kat Zień:** Yeah, I think it's the right thing to do, to encourage people to profile their applications... Because you might just find out that there's nothing to optimize. But just knowing that, that there is nothing to optimize, is very valuable. So I think you should definitely profile your application, and then find the real bottlenecks and focus on those. Because if it's a tiny project, if it's your side project, you might be able to optimize whatever you want.

\[01:00:06.12\] I think that in your full-time job, the business will always say "Focus on the most important thing, because we don't have time to fix everything", and then you just really have to pick the most impactful fix to make.

**Mat Ryer:** I'd actually love to see a talk -- this is a challenge to any of our listeners... I'd love to see a talk where we show some code and ask the audience "Where's the performance problem in here?" You manufacture some issue. And then actually use the tooling to look at it, and sometimes (often) you'll be very surprised by where the actual problems are. I'd love to see that as a talk, it could be really fun to watch.

**Kat Zień:** Yeah, I always think that it's very important to just have proof for your guesses, as well... Because sometimes you might think that this is causing problems, but actually you'll find that not really. We had a really interesting talk \[unintelligible 01:00:52.25\] about visualizing the performance of your tests. It was about running tests in parallel with the t.Parallel(). \[unintelligible 01:00:59.23\] showed a really cool visualization of how the tests are executed on the timelines, and you could actually see in which case they were truly executed in parallel. And if you had subtests, they actually were executed in a sequential way, which was a little bit of a surprise. And you might be thinking that "Oh, if I just put a t.Parallel() in my tests, they will magically be faster." It very much depends on what your tests are actually doing and how they are structured... So that was really cool to see.

**Ben Johnson:** I agree with the premature optimization piece... But I think one thing that I've found to be helpful over the years is there's a -- you can google it, but just type in "latency numbers every programmer should know." There's a couple different versions of it; you can even get historical ones... But basically, it shows you everything from the time of L1 cache, to reading disk from a spinning disk, to going over network... And just to see the scale of how -- it could be a nanosecond to an L1 cache, and it can be milliseconds, or microseconds or whatnot to do these other things. And just the places people try to optimize, where it's like "Oh, I don't wanna check this variable for this error statement." That will take you three nanoseconds, or something. Just do it. So it gives you a little context about where all of this stuff really matters.

**Kat Zień:** Yeah. Or worrying about stack versus heap allocations.

**Mat Ryer:** Well, this has been very insightful. I've definitely learned a lot. I hope lots of our listeners have, too. Specifically, I like this thing about "Don't abstract too early, keep everything as simple as possible, and let the patterns emerge, let the architecture emerge, and make decisions later. And use defer." So if anyone wants to reach out to any of our guests, Twitter is a good way to do it sometimes... It's a free website. Kat, what's your Twitter name?

**Kat Zień:** I'm gonna have to spell it out very slowly... It's @kasiazien, which is my Polish name.

**Mat Ryer:** Brilliant. Very high score on Scrabble, as well. Ben, what's your Twitter name?

**Ben Johnson:** Yeah, on Twitter and pretty much everywhere on the internet I'm @benbjohnson.

**Mat Ryer:** Great. Peter?

**Peter Bourgon:** I actually have two Twitter accounts. My programming and bad millennial jokes account is @peterbourgon, just my full name, and for my acting career and weightlifting, you can find me @therock.

**Mat Ryer:** Really? Great. \[laughter\] I hope you three will join me again in the future. That's all the time we've got for today. We'll see you next time!
