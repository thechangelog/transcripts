**Gerhard Lazu:** I've been looking forward to this for some time now... Seven months, to be more precise. And we have lots to talk about - Concourse CI, Bass, the wider CI/CD problem space... And we have just the right person for this today. Alex, welcome to Ship It.

**Alex Suraci:** Thanks. Good to be here.

**Gerhard Lazu:** So eight years ago, I think, if I'm counting correctly, you had the idea of the CI/CD system that was different from everything else that came before. We all know it as Concourse CI. At the time, what made you believe that the world needed Concourse?

**Alex Suraci:** It's a good question, because there was already a lot of like CI/CD systems out there. And there's even more every day, it seems like... But what really drove it was, we were trying to use Jenkins, and we were trying to use that to automate all of Cloud Foundry, which was like a massive pipeline. We were gluing together plugins and trying to keep that thing running, and it was kind of its own separate job, just keeping Jenkins in check. And meanwhile, we were building out this platform that was driven by like declarative YAML. You'd just say what you want, and then you'd tell it to go, the system figures it out... And the thing that we were using to drive that was very much the opposite. So I wanted to try and take what we learned from that and apply it to CI/CD.

\[05:59\] I think the main motivation was having just clarity in how the whole system works, and being able to trust it, and not worrying about if that VM gets struck by lightning and dies, we have to like spend another week just getting everything -- like, clicking the right buttons, getting it up once again. So that's what brought Concourse to the world, really... Myself and Chris Brown raging at Jenkins.

**Gerhard Lazu:** Chris Brown... We actually worked together; we were in the London office, and we were also struggling with Jenkins big time, and GoCD as well. We tried a couple, we went through a phase where we'd been trying different CI's, and none of them were quite cutting it. We have the problem of the data services, Cassandra and MySQL, and Redis and Rabbit MQ... How do you package them in a way that platform teams can use them to enable developer teams to just get on with application code and just provision services? So how do you package that, how do you upgrade? And you obviously have to test all the things. How to get CVEs out quickly enough? And a bunch of concerns like that. How do you scale, how do you degrade gracefully? It was such a pain. And interestingly, Jenkins was one of those services.

And I remember Tammer at the time, he was who he was the PM on the Pivotal side, and he was saying, "Hey, if the product that we're packaging doesn't work, let's not try and work around these shortcomings by automation." I remember that very clearly.

So Jenkins, we were very intimate of how it worked, because we ourselves had to do it for other customers, and we were using it, we were like dogfooding it, and it was failing in so many weird and wonderful ways. And then Concourse came along... Hm, nice. Chris Brown... Yeah, I haven't talked to him in years. How is he these days? Do you know about him? Hey, Chris, if you're listening, I'm saying hi. I hope you are.

**Alex Suraci:** Yeah, he's just, you know, living it up at stripe, doing a lot of -- he's actually working on their workflow engine team, which uses Temporal under the hood, which is kind of...

**Gerhard Lazu:** Ooh, interesting.

**Alex Suraci:** Yeah, kind of a funny coincidence, because they showed up on like GitHub discussions a while back, saying how they use Concourse to deliver Temporal.

**Gerhard Lazu:** Wow.

**Alex Suraci:** And they linked to this article, it was from San Diego Times or something, and the screenshot in the article was not Temporal, it was their dashboards, their Concourse dashboards that deliver Temporal.

**Gerhard Lazu:** So that's crazy. What a small world.

**Alex Suraci:** Yeah, the places that Concourse web UI shows up is always interesting.

**Gerhard Lazu:** Okay, okay. So I think one of the things that made Concourse so memorable, and so -- it had a face, and the face was the pipeline. I don't think -- at least in my experience, I haven't seen any other CI that did pipelines or that does pipelines, the views of a pipeline as good as Concourse did it. Whose idea was that to make that the only, the default Concourse view, and the only Concourse view?

**Alex Suraci:** Well, it's since gotten a little more complicated. There's like the whole dashboard that wraps it and like compresses it into like a thumbnail view thingy, and you click into that... But ultimately, the UI that we have today was like myself and Amit Gupta, just like messing around after hours at Pivotal and trying to come up with what is a good visualization.

The first stage was actually just using Graphviz and just like feeding it like a DAG, and then seeing what it renders. And it did interesting things, but it couldn't quite express like fan/out fan in, and all the different kinds of things. So that turned into just banging my face against JavaScript until things mostly worked, and then fixing whatever bugs came up.

**Gerhard Lazu:** Yeah. You're right. You're actually right. You mentioned the collection of pipelines - that was added later on. I remember it for like many years, like back in the time like when it first came out... It was just a pipeline view and that kept improving. I've really liked like the small, incremental improvements. I really liked the GrooveBox-like initial design, because then it changed and became a bit more brighter.

**Alex Suraci:** \[10:11\] Oh, I see what you mean. The colors.

**Gerhard Lazu:** Yes, the colors, exactly. I really liked those. It was a bit rough, but it was just the right amount of rough, and it was very memorable. And you could see it everywhere, in all the offices, in all the Pivotal offices, because there was like so much stuff that we were building. And there were monitors everywhere, and you could just take a look and see exactly what the problem was. And I think the problem was like that we had too many pipelines. So I think that's where the view came from, right? The one with --

**Alex Suraci:** Yeah, the dashboard.

**Gerhard Lazu:** Yeah, exactly.

**Alex Suraci:** It's funny how it all evolved, because initially, Concourse was literally -- you would start the ATC program, ATC being like the coordinator, web UI, everything, kind of a bit of a monolith... And you would literally just give it a config file. And that config file was the pipeline. And then we went from there to "What if you want multiple pipelines?" And then from there, "What if you're on multiple teams?" and then pipeline groups, and now you have like the whole dashboard, like multiple teams, entire enterprises putting everything on one box, and that's how you lead to melting machines, and things like that. But it started off quaint and fun.

**Gerhard Lazu:** What was the biggest early on challenge when you started Concourse? Do you remember?

**Alex Suraci:** I think probably the biggest challenge was just managing the pace of onboarding and trying to balance having a good ratio of people that actually want to use it, versus people that felt like there was some, you know, thing that they have to use it. Because that really changes the types of interactions that you get with people. Like, if you're trying to -- if you're providing something where you're solving a problem that they have, you'll get like much nicer interactions, but if you're building something that they feel like they have to use, then they don't pull as many punches. It's not going well.

**Gerhard Lazu:** Did people feel instinctively, like did they know instinctively what to do with Concourse? Or did it take a while to explain what it is, and how to configure it, and how to -- how do you find that?

**Alex Suraci:** I think people did pretty okay at picking up how to use it, at least within Pivotal. I'm not gonna go as far as to say it was easy. They probably really stumbled for a while, and I wouldn't be surprised if a lot of them didn't like it, because the documentation was just, you know, us writing the best we could; it was all just like reference material. We never really had a technical writer. Yeah, there were a lot of times where I'd be like called over to help someone figure out how to do something in a pipeline... One of the most common pain points was someone wanted to acquire an environment, and then use that environment through a few jobs, and then release it in a later job. And that was always painful to do with Concourse. I think we never really had a great solution to that. We had like an interesting one that used a Git repo as a lock, which worked, but it was a little cludgy, because you had to manually release it now and then. There were a lot of people doing that, because there were a lot of people using Concourse for continuous delivery.

**Gerhard Lazu:** I'm pretty sure that you are one of the people that felt that Concourse was more than a CI/CD system. It was like integrating with all these things. and there was so much possibility... As you mentioned, integrating with Git, with GitHub, with the Git repository for locks and S3... And it was basically, the state - you had to keep it outside of Concourse. There were like some very good, strong principles. How did you think of Concourse from the beginning all the way until like you stopped working on it?

**Alex Suraci:** I always kind of thought of it as a way to codify your entire dependency chain and automation process. Kind of like if this, then that, but more generally, what are all the things that people would be manually doing within your organization, or imagining you're like one person trying to drive an entire startup. That's kind of where I imagine Concourse being very useful, because then you just can empower yourself to get more done, because you just have something else doing it all for you, whether that's like automated testing, or automated, periodic longevity tests that run every hour, and just make sure your tests didn't suddenly get more flaky... Or like testing infrastructure reliability, or just anything that you need to do continuously, Concourse was your guy. That was the idea.

**Gerhard Lazu:** \[14:19\] I always saw it as automation with a nice UI. I mean, that's what it was. And you were able to do things - as you mentioned, checks... And at a glance, you could see, are they passing or are they failing? And what is the failure ratio? There were so many interesting things there. The logs... The pipeline view was so important, like the state of resources, for example... It had some very simple primitives, but it was very versatile. It was so much more than a CI/CD system. I think that's what people saw in it. At some point I know it was like the distribution mechanism for the Pivotal software, because pretty much everyone that was running all these large clusters, whether it was Cloud Foundry, where it was like all the stateful services - how do you keep everything up to date, nevermind the applications? So you needed to provide automation that shows you the health, at a glance, of what is happening. You had to have notifications, all that thing. And also, when there's a problem, you had to go and debug it quickly.

**Alex Suraci:** Yeah, it kind of acted as like the central plane; it was like the source of truth for what's the status of the whole system... Which is kind of interesting, because when COVID hit and everyone started working from home, suddenly we didn't have like the central dashboard TV that everyone looked at. It became much harder to keep tabs on CI/CD and metrics and things like that. So that got me thinking more about notifications, or something that like keeps it more in your face, but... I don't have anything deep there.

**Gerhard Lazu:** What was it like to work on Concourse for so many years? It was six, seven, roughly? It was a long ride.

**Alex Suraci:** Yeah.

**Gerhard Lazu:** What was it like?

**Alex Suraci:** It was a lot of fun. The team obviously, you know, changed in cycles. Pivotal was all about rotating people semi-frequently. That really slowed down when I moved to Toronto; the rate of rotation really slowed down. I think it was just a different office culture, but... Throughout those six years, it was just a lot of really fun engineers to work with. We had some good team culture things early on, we had every retro - someone from the team would like make a dish from their home culture, and bring it, and we'd like let the whole office have it. I think probably the highlight of my career though was when we had a retro and someone literally just put "I love my job" in the happy column. I was like "Cool. Doing something right, I guess."

**Gerhard Lazu:** That's amazing. That was a very fortunate person. It was a very fortunate team. And I think we felt it as users. I mean, sure, we were frustrated at times, but we could see how hard everyone was working... Seeing on GitHub all the pull requests, all the issues, all the stuff that was going through... There was so much stuff; so many good things, great things. And even from the outside, it felt like it was a great ride. So after Concourse, you started something else. Bass. What is Bass?

**Alex Suraci:** Bass is kind of trying to learn from what I think were some of the mistakes with Concourse, one of them being try to express a system that can do everything, but within the confines of a declarative YAML config.

**Gerhard Lazu:** YAML is the problem. Everyone listening, it's not the declarative part. That's okay. That's good. We like that. So what is wrong -- what is wrong with YAML? What is wrong with that combination?

**Alex Suraci:** I think there's -- I could debate both parts, I think. Some aspects of declarative are also kind of falling out of favor with me, but it's largely -- I think it's because I'm kind of shifting away from both at the same time, so I'm really considering alternatives to declarative systems, too/

**Gerhard Lazu:** Really? Do tell. That's very interesting.

**Alex Suraci:** \[17:56\] But yeah, with the YAML part, it's really just like not having a real language at your disposal. You're kind of inventing like a language within it. We like to say that Concourse pipelines were a declarative schema, but really, it was declaring a set of jobs that then had like an imperative plan within them, and the more bespoke we made that DSL, we got into things like scoping, like what's the scope of this value that's being bound within the build plan... Largely with the across step is where this came up. The across step is one of the most recently introduced ones, where it's like, across all these values, do this step. So you end up like wanting to bind an asset to a value, but then it's like, does that binding escape to later steps? And then it's like, why are we just not implementing a language where like doing across is just a for loop? So that's kind of where I am with YAML. It's just not very well suited, I think, to actually expressing something... And that's why so many people end up templating it, and then you just have like two problems. Now you're like thinking at like a template level, and a YAML level... Now you need to manage that pipeline feeding into the system... So yeah, it just makes things way more complicated, I think.

**Gerhard Lazu:** Okay. So when it comes to the declarative part - I'm still stuck on that, because I wasn't expecting it, to be honest... And I'm surprised, and I'm just curious - what could be better than declarative?

**Alex Suraci:** There's a solid chance that I'm wrong in this, and I go back to being declarative is great... But the problem that I see with it --

**Gerhard Lazu:** All great engineers say that. All great engineers. "There's a good chance I'm wrong with this... But still, this is what I think." \[laughs\]

**Alex Suraci:** I appreciate it. The problem I see with declarative approaches to CI/CD is the system they're building around is not declarative... The system being developers just running commands. Most people - they'll go to CI/CD, they'll know what commands they want to run... Like, "I want to run go test", "I want to run RSpec", or whatever their build process is. Commands are already the foundation that we're really building everything upon. Even Docker and BuildKit kind of like build on that abstraction, because they're all about just running commands in containers.

The problem I see with declarative wrapping systems for that is that someone has to implement the mapping between declaring what you want, and having that boil down to commands. And we saw this with Concourse, where the Git resource started off as just like a perfect example of just a tiny little Concourse resource. It does like git clone, git fetch, git push... And that's it. But the reality was that everyone uses Git differently. So if you look at /ops, /resource, /inscript it's like a 100-line Bash file handling a bunch of different use cases; tagged versioning, things like that. And you have to kind of distill that up to what in concourse is YAML. Resource doesn't care it's just JSON. But in any case, somewhere there's like a declarative config that maps to commands running... And it just like kind of adds an extra level of indirection between what the developer knows they want to run, and how they know it's actually going to run. And there's like the added toil of someone managing that mapping interface.

All that being said, commands aren't necessarily the best interface to expose. It's just what people already know. I think if you are able to express something as just a declarative thing, and it works, and it's like low enough maintenance... And maybe you get bells and whistles like static typing, or easy to verify schemas, and things like that - then I think it is possible for the value trade-off to be there. But I guess, from my current perspective of trying to build Bass as like a side thing, not expend too much effort, it would be a lot of effort for me to have to invent these mappings for everything, as opposed to just being like "Hey, it runs commands." So maybe that's my bias right now.

**Gerhard Lazu:** \[21:57\] Yeah. So when you say commands, are you thinking more like -- rather than having this mapping between a declarative thing and a command, you're thinking just in terms of commands? So when I hear that, I'm thinking about the functional paradigm, where you have a function, there's an input and an output, and then the focus is on the function, not on the mappings. Are you thinking along the same lines, or is there something else?

**Alex Suraci:** Kind of. I mean, a lot of commands really are just you're running a function, and you're expecting some output. I'd venture like 99% of the time that output is either like a file on disk, or something that it wrote to STDOUT, maybe a JSON stream, or something like that. So you don't really control whether the commands are idempotent, or like pure, or anything, like in a functional sense, but they do very much feel like a functional interface.

And there are exceptions there, where some CLIs have like sub-commands, and different syntax for it, but it ultimately boils down to like you're identifying a function call, passing it parameters, and it's giving you outputs. So yeah, I guess I do kind of see command lines as a very functional interface, and being able to pass results from those commands to another - I think that's really where the special sauce is from Bass. Because if you try to just script things running commands in Bash, you have to deal with those files; you have to put them somewhere, pass them to this other thing, clean them up after... So I'm trying to build something that makes -- I guess something that treats commands like functions that you can easily use.

**Gerhard Lazu:** Some team members had this joke on the RabbitMQ team, which - RabbitMQ uses Erlang, which is a highly, highly functional language... And the joke was that if you're an experienced enough programmer, you're most likely a functional programmer. Like, basically it all boils down to a function somewhere. And once you come to accept that, your world will be better. Obviously, that's not always true. We had Gary Bernhardt a few episodes back, and if you haven't heard his \[unintelligible 00:23:57.23\] talk, you should, because it's a very good one. He explains why functional is just weird, and why object-oriented has its own shortcomings... But \[unintelligible 00:24:07.26\] is a thing, and I really like it. Anyways, we can put the link in the show notes.

So I'm wondering -- because the Bass language, bass-lang... Dot com is it?

**Alex Suraci:** Org.

**Gerhard Lazu:** Org. Thank you. Dot org.

**Alex Suraci:** I might own .com, but .org is the canonical...

**Gerhard Lazu:** So bass.lang.org, it explains -- by the way, it's a very nice website. The GrooveBox theme... I love it.

**Alex Suraci:** It's actually different.

**Gerhard Lazu:** Okay.

**Alex Suraci:** It's different every time you load the page.

**Gerhard Lazu:** Really?

**Alex Suraci:** There's like a handful of themes that it shuffles through. There's a kind of a callback to Concourse, because at one point we were thinking of switching the color scheme, so we added a -- if you press like a special key, maybe it was like Alt+S or something, it would actually bring up a little dropdown, so you could change the theme. So I brought that back to Bass, but a little more extreme, because it literally changes every time you load the page. But you can change it if you want, at the bottom.

**Gerhard Lazu:** Really? I don't think it changed. Mine has stayed the same ever since...

**Alex Suraci:** Scroll all the way down... Do you have a reset button there?

**Gerhard Lazu:** Reset? I do have a reset button.

**Alex Suraci:** You probably pinned it to a theme at some point.

**Gerhard Lazu:** Ah, so I picked it. See, I picked it. Alright. Let me reset that. Okay. Oh, I see it now. Okay, now when I reload, I see it. Yeah, okay. So I chose GrooveBox. Okay. Alright, that's really cool. So every page is different, like differently colored, every page load. That's really neat. Okay, very nice.

**Alex Suraci:** My favorite is rose pine. Shout-out to rose pine, I guess.

**Gerhard Lazu:** Rose pine. Let's check it out. Hang on.

**Alex Suraci:** It's a very nice, like luxurious looking-color scheme.

**Gerhard Lazu:** Rose pine... Dawn? Moon? Or the classic.

**Alex Suraci:** Just regular.

**Gerhard Lazu:** Regular rose pine.

**Alex Suraci:** Oh, they're all good too, but Dawn is the light mode.

**Gerhard Lazu:** \[25:52\] Oh, I see. Interesting. Rose pine Dawn. Okay. Yeah, go check it out. Ah, yes, rose pine -- that's like the dawn, that's like the light one, and the moon is the dark one. Very nice. Okay. So you have all these concepts, you have like the bassics... And I love that; it's not a typo. There are double s'es. The bassics. Is the thunk -- I'm looking for a thunk. Is that what would the function equivalent be in Bass?

**Alex Suraci:** Thunks are named that way because they kind of mirror zero arity function calls. But they represent commands. So that's the distinction. Bass is a functional language, but it represents commands as like a lazily-evaluated data structure called a thunk. And it's also just called thunk, because it sounds funny and semi-musical.

**Gerhard Lazu:** Yeah. Okay. Where does the Space Invaders thing come from? Because that's another thing which I noticed. That's a good one.

**Alex Suraci:** That's a good question. Honestly, I don't know why I picked Space Invaders. I wanted something -- there's a pattern in the docs where sometimes it'll show a thunk, and then show it again in another context, so I wanted it to be easy to recognize that they're actually the same. So it was either like Gravatar, or build like a Space Invaders thing, and I thought the Space Invaders would be more fun... Because I wanted a way to tie the colors to the color scheme too, so that way I can control the whole stack.

**Gerhard Lazu:** That makes sense. I'm just looking at the image now, and I can see the three echoes which have a Space Invader that looks the same... And it just shows it's actually the same command, right? That's what that's representing.

**Alex Suraci:** Yeah. And if you click it, it'll show the actual attributes of the command.

**Gerhard Lazu:** Oh, wow. That's amazing. You have to check it out. As a listener, it's okay to put on pause and to go and check bass-lang.org, because this is a really nice website. I can't believe that you do this for fun in your free time. Like, you must really love CI/CD, the whole functional paradigm, and this problem space. Why is that? Why do you like it so much?

**Alex Suraci:** I think it's more broad than CI/CD. I just like the whole process, I think, from building and publishing software. There's another side project which I've been like putting out there, but really no one cares, because it's just yet another static site engine... But this site is built in Booklet, which also has its own -- I think it's like booklet.page... And you can really tell I built both of them, because they look the same.

**Gerhard Lazu:** Yes, I can see it. Okay, I can see the same structure. That's really cool. So I can see a lot of like a Lisp-like structure here, and Lisp-like structures...

**Alex Suraci:** That's true, too. In Booklet, you mean?

**Gerhard Lazu:** Yeah. Why Lisp?

**Alex Suraci:** I think the fundamental appeal of Lisp to me is being able to do a lot with a little. Maybe that's even the part of the appeal of Go to me, too... Because Go is -- it's a pretty small language. It also is kind of in that mindset. I'll probably offend a lot of people saying like Lisp and Go are similar to each other... But I think fundamentally it's the same thing that attracts me to both. But especially Lisp, because... Like, a long time ago, before I actually got into professional software engineering, I was just learning a lot of languages. I've always just really been into languages. And I especially liked ones where it's like you start with these five primitives, and from there on, you can build anything out there. It's like Turing-complete. So that's what brought me to like Scheme... Racket was also a lot of fun, because it was all about building languages on top of Racket and I think the world needs a lot more of these like tiny, domain-specific languages that try to focus on one thing, and Racket tried to be the platform for building those languages.

But there's actually kind of an interesting story behind the specific flavor of Lisp that's behind Bass... It's actually based on kind of lesser-known one called Kernel. Kernel's whole thing was, you know, Scheme was six abstractions, Kernel was five, because it took one and made it more generic.

\[29:59\] So you know how lisps - they're known for having macros, right? Like, compile-time macro expansion. Kernel, instead of having macros, it had something called an operative, which is something that deferred the evaluation of its arguments. So when you called an operative, you would get the unevaluated forms and the colors scope, and then you could selectively evaluate them in the colors scope. I think IO actually is kind of similar to this.

So yeah, a long time ago, I tried implementing that. I implemented one in Haskell. It's called Hummus. I implemented one in RPython called Pumis, and one in my own language, called Cletus. Guess which one was the fastest?

**Gerhard Lazu:** Your own language? No way. Your own language is the fastest one. \[laughs\]

**Alex Suraci:** No, definitely not.

**Gerhard Lazu:** No? \[laughs\] Wrong answers only.

**Alex Suraci:** It was Python, actually. Because it was specifically RPython. So PyPy would compile it to C, and then it just like blew the other implementations out of the water. So I did these a long time ago, probably like 2010... And then right about the time I was leaving VMware and looking to start on Bass, someone actually approached me and said, "Hey, we're trying to collect all the implementations or details for Kernel, because the guy that invented it just passed away."

**Gerhard Lazu:** Wow...

**Alex Suraci:** I was like "Damn, I'd never talked to this guy." Now I feel kind of bad, because I feel like I kind of carried the torch a bit with Bass, but there's nothing I can do to make him aware of that... But yeah, he was a really cool dude. John Schott. I'm just saying, really cool... I don't know him. He was probably really cool. He apparently contributed to Wiki News a lot.

**Gerhard Lazu:** Okay. Well, if anyone knows John Schott, or anyone knows -- like, this is a shout-out to him. And if you know anyone that worked with him, that's amazing. Yeah, just let them know that the memory and his ideas live on in Bass. Wow. That's a great story.

**Alex Suraci:** Very interesting, but the trouble with Kernel is it's hard to optimize, because there's literally an eval after every corner. But that doesn't matter in a language like Bass, because the bottleneck is going to be running containers; the runtime interpreter is probably not going to be slower than that.

**Break:** \[32:10\]

**Gerhard Lazu:** One of the Bass components is this, as you mentioned, the runtime compiler. Is that what you've said? Runtime...

**Alex Suraci:** Well, there's runtimes. There's no compiler.

**Gerhard Lazu:** Oh, right. Sorry. Okay. How do you call, basically, the language in which you code Bass? What is that component? So there's the runtime, which actually runs it... And this is the frontend of it? I'm just trying to find a name for it that describes it, what it is.

**Alex Suraci:** The interpreter of the language itself?

1:The interpreter, yes. Yes, the interpreter. Okay. What is the runtime of Bass?

**Alex Suraci:** So it gets just parsed into a syntax tree of -- at that point, it's just forms. You know, as with Lisp, there's no difference between like a form and a value. It's just whether it's been evaluated or not. So that gets fed into Go, it walks over each of the forms and calls eval on them.

\[34:16\] The tricky thing is everything is implemented in continuation passing style, which is a way of implementing tail recursion, essentially. So languages that are implemented on like a non-tail call optimizing platform usually do that, because otherwise there's no way to do infinite loops... Which would be bad for a continuous system, because its point is to be an infinite loop. So if I didn't have continuation passing style, then probably eventually Bass servers would die, if anyone was using it for CI/CD.

**Gerhard Lazu:** Yeah, that's a good one. I'm pretty sure that Erlang is optimized for that, because it just like -- it has to be able to deal with like infinite loops. And yeah, it's optim-- okay, okay. So yeah, that makes sense. The list comprehensions, and all that - it can just keep recursing, and you won't blow any memory or any stack or anything like that. Okay.

So where does all this code run? Where do all those instructions run? And I'm trying to get to the BuildKit part, because I know looking at Bass that that's the runtime, but where does that run? How does the interfacing happen, and how does something useful get produced in Bass, as a container, or a file, or whatever the case may be? A binary...

**Alex Suraci:** Well, the language runs in the same way that like Ruby or Python or any other interpreted language does. So that's one huge difference, actually, in case hasn't been made clear yet. I guess it's like between Concourse and Bass. Concourse is like a service that you deploy, and you've pointed to a database, and it maintains all this state, and you feed it YAML, and like YAML is like the language that you're writing. Bass - there's no server, it's just a language interpreter. So you just run Bass files. If you want to run a CI/CD server, you're just running a Bass file that's a loop. So that's the key difference.

But when it comes to BuildKit, that's where it actually just talks to BuildKit over the regular gRPC interface that it exposes. So that could be local or remote. I think I've only really tested it locally, but in principle, it's just like calling over the API. And I think the client already handles like uploading files, so I think it would work remotely... But I haven't tried yet.

**Gerhard Lazu:** Yeah. I also know there's like the Bass loop component. What is the Bass loop?

**Alex Suraci:** So Bass itself isn't really a CI thing any more than like Ruby or Python is, so Bass loop is basically the CI thing. I had been just running Bass in GitHub Actions, but it was just very slow, because you don't control the environment. I'm developing Bass on like an RX 4950. I've probably butchered the name, but whatever the really nice AMD CPU is... But then it's like running on some collocated server, probably in GitHub Actions. It's not able to use BuildKit efficiently, because it's a new run every time; you could use caching, but then you're trading like CPU time for just IO time, managing the caches.

So what I wanted to do with Bass loop is have a server that I just run, that receives GitHub WebHooks, and then you bring a runner to it, so it doesn't have its own dedicated CI stack... And it's basically WebHooks come in, and it evaluates Bass code in response, by like calling out to your repo.

**Gerhard Lazu:** And where does the runner run? And what is the runner, in this case?

**Alex Suraci:** The runner is someone running bass--runner, and then github.bass-lang.org. What that essentially does is -- if anyone's familiar with how Concourse Workers ran, it's very similar, where Concourse had like an SSH gateway called the TSA. You'd connect to it, it would forward some connections, and then when the ATC needed to use that worker, it would actually talk to a local forwarded address through SSH. The runner is doing basically the same thing, where it exposes the local runtimes as a gRPC service, so then when a WebHook comes into Bass loop, it connects to the forwarded address and then uses that runner. So that way, I can actually use my AMD massive developer machine, instead of being, you know, stuck with whatever the free tier is on GitHub Actions.

**Gerhard Lazu:** \[38:26\] Interesting. What about registering your own GitHub runner? Have you considered that?

**Alex Suraci:** I don't know what those words mean.

**Gerhard Lazu:** Okay. So you know, you get like the free GitHub runner, just by default, but then you can run your own... And you can either have like a VM-like process, that registers with GitHub, and then the runner is available to pick up jobs...

**Alex Suraci:** Gotcha.

**Gerhard Lazu:** Or - and I've seen this as being more recommended, because of the ephemeral state of GitHub runners; they are supposed to be cleaned, and brand new on every single run... You can run a controller in Kubernetes, and then the runners are like registered on-demand based on what jobs are available. That scales a bit nicer, and you get containers... But again, you should be able to trust your infrastructure, or... I mean, it's a tough problem. Running this is a tough problem, and that's why the majority will just use the free tiers.

**Alex Suraci:** Well, it sounds pretty similar. It sounds like something I could do. But I guess the other goal which I didn't mention is escaping YAML.

**Gerhard Lazu:** Yes, that's a good one. That's a worthy goal.

**Alex Suraci:** If I'm using GitHub Actions, then I'm back to YAML.

**Gerhard Lazu:** Oh, yes.

**Alex Suraci:** Back to those wrappers managed by, you know, random people, doing their best, but still, just a lot of dependencies to manage.

**Gerhard Lazu:** Don't you miss the GitHub Marketplace with all the actions that you could use from there?

**Alex Suraci:** Not really, because like most things that I use, including GitHub itself, they already ship a CLI. So to ship Bass, for example, I just run gh release create, or whatever, but as a Bass thunk.

Yeah, that kind of gets back to what I was talking about, with all the declarative wrappers - if you avoid that and have your abstraction level be lower, then you automatically get like the entire marketplace, which is being built by everyone.

**Gerhard Lazu:** Yeah. So you do have this file, which made me smile when I've noticed it. It is a Bass file, and it's called the "ship it" file.

**Alex Suraci:** Yeah.

**Gerhard Lazu:** What does the "ship it" file do? \[laughs\]

**Alex Suraci:** It ships it. So the gist of it is it builds a binary for each supported platform... So Linux, Darwin, Windows, Arm for Darwin as well... And then it just passes that to gh release create, which - all those words I said about declarative wrappers, I actually wrote a wrapper myself for gh, so... Maybe it's just that I like functional wrappers more than declarative ones... But yeah, it's just a small script that takes the -- it reuses the functions for building Bass and just passes the result into the gh release create command. But the nifty thing it also does is it takes the data representation of those thunks, like the JSON format, and publishes those to the release as well, and then it publishes the SHA-256 of each file.

So kind of the neat thing that I want to be able to do with Bass is like not only have it so you can build up those thunks and have them get like bigger and bigger and bigger as you pass more results between them, but you can actually just snapshot them... And assuming those things are hermetic, then you have a reproducible build that you can publish.

**Gerhard Lazu:** Interesting. So you say hermetic meaning something that's is the same...? Something that's like idempotent?

**Alex Suraci:** It accounts for every input that might change its result, is kind of how I sum it up. So if you have like a hermetic data structure and you run it like today, and you run it tomorrow - assuming the inputs are still available, granted, but the point is, yeah, you should get the same result, no matter where you run it... Which is kind of a fundamental building block, I think, for CI/CD. It was something Concourse tried to enforce, but I think that's also where a lot of people ran into pain with it, was Concourse being a little too overbearing.

**Gerhard Lazu:** \[42:21\] No, I think that's really important, especially like supply chain security is more and more in our minds... And for that, you need to have this property; without this property, it's very difficult to achieve that. You should be able to build the same thing, compare it bit for bit, and make sure, again, given these inputs, this is the output. And if you can trust the inputs, and you can verify the inputs, and you can, again, access the same inputs, the output should be identical. And if he's not identical, you have a problem somewhere.

**Alex Suraci:** And you also have to trust the thing that's building it, I guess, but...

**Gerhard Lazu:** Yes, for sure. But the thing that's building it, I suppose it can be the same -- like, if the same builder runs in multiple locations, and it uses the same inputs, so it doesn't matter where the builder runs, the output should be the same. Right? Because there's no state that the builder has, not even time, that makes it -- you know, like if you have time drift, like milliseconds, microseconds, anything like that, it will not have any impact on the final artifact. And that's super-important, because then you can compare two things; you know, run remotely, and even completely different architectures, but the end result should be always the same. It's a nice way of verifying it, I suppose, as well.

**Alex Suraci:** It's funny you mentioned time, because that was one of the things that broke the initial builds of Bass, was that when you archive something up, it has timestamps in it, right?

**Gerhard Lazu:** Yup.

**Alex Suraci:** So if you tried to download those JSON files and rebuild Bass back in the day, it wouldn't produce the same thing, because the archive had different timestamps in it. So now what Bass does is it actually normalizes all the timestamps. So when you a thunk build something and then you pass that result to another thunk, it'll actually see the timestamps as 1985, some specific date...

**Gerhard Lazu:** Okay... It's not your birthday, is it?

**Alex Suraci:** No.

**Gerhard Lazu:** Good. \[laughs\]

**Alex Suraci:** I stole this from the Node community, I think... It's the exact timestamp from Back to the Future, and I figured I might as well make it a standard, because either one's going to be arbitrary.

**Gerhard Lazu:** That's an amazing reference. Okay, so that's part of Bass, too. Space Invaders, Back to the Future... What else is part of Bass? This sounds like a very interesting project. \[laughs\]

**Alex Suraci:** So actually, I was prepared to ship the next version of Bass on Ship It, but I'm terrified of running this command on my machine while doing a screencast, because I'm using my partner's old MacBook... But it has a very important feature, which I call the Rave mode, where if you press R, there's a little spinner where it says playing... Actually, I can link you to the pull request that adds it, because it has a pretty good GIF.

**Gerhard Lazu:** Yes, please. This sounds amazing. No way, so hang on - you're trying to ship a new version of Bass on Ship It? Is that what's happening right now?

**Alex Suraci:** That was the plan.

**Gerhard Lazu:** No way... No way...! And by the way, dear listeners, it's Friday, 7pm as we are recording this... So what could possibly go wrong?

**Alex Suraci:** It's 2 PM here, it's fine.

**Gerhard Lazu:** Oh, yes, it's 2 PM for you, so it's fine. It's only for me 7pm. \[laughs\] That's amazing. Okay...

**Alex Suraci:** I put a link in the chat, if you want to see... There's a GIF there.

**Gerhard Lazu:** Yes. Yes. Yes. Thank you. Pull request 222. No way... We are not making this stuff up. Is the 22nd of July as we are recording this, 2022, and the pull request is 222. No way. No way. This is too good. \[laughs\] So I'm looking at the rave... I love that little bar. Is that it? Like the little shrinking bar?

**Alex Suraci:** Yeah.

**Gerhard Lazu:** Oh, wow...! No way...

**Alex Suraci:** \[46:09\] So this was actually quite an adventure. It took like four days to implement this thing. And this is four days of vacation, not just like four days after hours... Because it syncs with the Spotify API. So like each beat that you're seeing there is not only synced to like BPM, it's actually literally rendering the beats in the song.

**Gerhard Lazu:** No way, man. No way.

**Alex Suraci:** So if you try to play -- if you listen to like \[unintelligible 00:46:28.19\] which has like changing time -- I forget what it's called. But it'll actually like speed up and slow down to certain parts.

**Gerhard Lazu:** Okay, this is too cool. This is too cool. So how can I try this? How can I test this?

**Alex Suraci:** You can install from Main, like from source.

**Gerhard Lazu:** Okay. Alright.

**Alex Suraci:** But it integrates with Spotify. So I don't know if you use Spotify.

**Gerhard Lazu:** This recording just got derailed... \[laughs\] So I don't know whether we're in meta mode, I don't know what's happening anymore, but I know it's really cool and I want to try it out right now.

**Alex Suraci:** You can probably just go install it, actually. I don't think you need anything like that. If you brew install Upx...

**Gerhard Lazu:** Brew install Upx...;

**Alex Suraci:** Yeah, that's one gotcha, a dependency that you'll need...

**Gerhard Lazu:** Upx, okay.

**Alex Suraci:** That's for compressing the binaries. So like Bass has to -- when it calls into BuildKit, it has to run thunks like through a little shim to like meet the interfaces that it needs, like supporting STDIN, for example. But those binaries are too large to pass over gRPC, so I have to compress them and then bundle them, and that's what Upx is for.

**Gerhard Lazu:** Interesting. Okay, so I have Git, I have Go, I have Upx. Okay. Git clone, \[unintelligible 00:47:35.10\]

**Alex Suraci:** Yup. That should do it.

**Gerhard Lazu:** Okay, cool. Man, this is really cool. I was not expecting this, but I'm loving it.

**Alex Suraci:** Do you use Spotify?

**Gerhard Lazu:** I really, really do. Um, no. But I can get an account...

**Alex Suraci:** Okay...

**Gerhard Lazu:** No, seriously, I'm getting an account for this. This is like worth it. This just got derailed, but it's amazing. Sign up... Let's see. Sign up with Google... Yes, yes, yes...

**Alex Suraci:** Oh. There you go.

**Gerhard Lazu:** Oh, this email is already connected to an account, so I must have one. Okay, continue with Google, and I don't even know one. "You don't have a Spotify Connect to your Google account." Okay. I have a username. And it works. Okay, I'm logged in. I do have Spotify, and I didn't even know. That's how long ago it's been. Okay. So I have Bass, okay, and let me just install it. ..Okay, off it goes. "You'll need BuildKit running somewhere, somehow." Okay, I have --

**Alex Suraci:** If you have Docker running, it should just start it for you now.

**Gerhard Lazu:** Nice. Yes, I do, actually.

**Alex Suraci:** I need to update the -- I need to push the docs.

**Gerhard Lazu:** Yeah, cool.

**Alex Suraci:** I stole that from Dagger.

**Gerhard Lazu:** Very sweet. That's amazing. Okay, great ideas. Great idea. See, that's what happens. Okay, what is Lima?

**Alex Suraci:** Lima is a really cool project where they're trying to -- you know, there's like this general pattern of a lot of developers use Macs, but they need to use Docker or like some other Linux tool. Lima is basically generalizing that, where instead of having like a VM managed by like Docker Desktop, and another VM if BuildKit productized itself... Lima is like a general template toolkit for spinning up VMs with software pre-installed. And they had one for BuildKit. But you shouldn't need it anymore, because now it'll just spin up BuildKit in Docker.

**Gerhard Lazu:** Interesting. Okay. I have Bass!

**Alex Suraci:** Oh, it works?

**Gerhard Lazu:** What do I do next? Bass Rave?

**Alex Suraci:** Bass... You could run a demo; like booklettest.bass. Demo's booklet test.

**Gerhard Lazu:** Okay, so \[unintelligible 00:49:46.17\]

**Alex Suraci:** Yup. Test.bass.

**Gerhard Lazu:** Test.bass. Yes.

**Alex Suraci:** Okay, now press R...

**Gerhard Lazu:** R. Yup. Okay.

**Alex Suraci:** \[50:01\] That should open a browser.

**Gerhard Lazu:** It did, but you don't see it, because that's like on a separate one... Okay, yes.

**Alex Suraci:** Yeah. So now it should be synced. If you press D...

**Gerhard Lazu:** D in here?

**Alex Suraci:** Yeah. Like in Bass.

**Gerhard Lazu:** Yes.

**Alex Suraci:** Oh, it doesn't look like it synced, actually. Let's see -- maybe because you don't see the other window, maybe there's something wrong and you don't know what is wrong. So let me stop sharing this window and maybe share -- you know what, let me try showing the entire screen, how about that? I'll share this entire screen. I'm going to move this on the left-hand side and I'm going to move this on the right-hand side. So that was Spotify... That's what I want to do. So Bass, this one - press D, you said? Oh, there, it currently couldn't decode...

**Alex Suraci:** User not registered in the development dashboard... Do I have to enable users? I've never -- like, I'm the only user right now, so...

**Gerhard Lazu:** That's great. We're testing this. I love it. You haven't shipped it yet, right? Like, we are still working towards -- like, basically QA-ing the feature that you're about to ship, and I'm the second ever user to do this.

**Alex Suraci:** That's right.

**Gerhard Lazu:** So I think this is exactly what we would expect to happen. It works on your computer... But does it work on mine? That's the question we should try to answer now.

**Alex Suraci:** How to enable -- oh, it's because it's in development mode. Okay. Can you put your Spotify email? I think if I just add you here, it might work.

**Gerhard Lazu:** Yes, yes, yes. It's this one.

**Alex Suraci:** Good to now.

**Gerhard Lazu:** And this is the Spotify username. Same as my Twitter, @gerhardlazu.

**Alex Suraci:** Okay, try now. You probably also need to be playing something.

**Gerhard Lazu:** Okay. Let me play this.

**Alex Suraci:** If you want, you can run one that's like infinite. If you don't mind spending one of your cores, you could run demos/fib-loop.

**Gerhard Lazu:** I have 10. Not a problem. Even 20. But anyways. So demos/fib-loop?

**Alex Suraci:** Yeah. With a dash.

**Gerhard Lazu:** Off it goes. Okay.

**Alex Suraci:** And then try pressing R.

**Gerhard Lazu:** R. Yes. Nothing happens.

**Alex Suraci:** It didn't show that error now, at least...

**Gerhard Lazu:** No, it didn't. Maybe it's already connected.

**Alex Suraci:** Try capital R to clear it, and then r again to...

**Gerhard Lazu:** Yes. It opened this.

**Alex Suraci:** Okay.

**Gerhard Lazu:** Agree?

**Alex Suraci:** Yup. That looks fine. And you're playing something?

**Gerhard Lazu:** I'm not playing anything just yet, but I'm playing something now.

**Alex Suraci:** Okay. And then - yeah, press R again to sync it.

**Gerhard Lazu:** R again.

**Alex Suraci:** There you go!

**Gerhard Lazu:** Nice! Oh, look at that!

**Alex Suraci:** If you press D, it'll show the --

**Gerhard Lazu:** D.

**Alex Suraci:** Yeah, there you go.

**Gerhard Lazu:** Yes! Oh, no way... We made a thing change color... \[laughs\]

**Alex Suraci:** How many engineers does it take...?

**Gerhard Lazu:** ...actually be synced to a song that I'm playing in Spotify... Oh, this is so cool. \[laughs\] No way...

**Alex Suraci:** The tragic thing though is Spotify's API doesn't give you enough info to actually sync it perfectly. So it does its best, but if it's out of sync, you can press minus and plus to adjust the timing.

**Gerhard Lazu:** Okay. So if I do minus now... What does minus do?

**Alex Suraci:** It has it go back by like 100 milliseconds.

**Gerhard Lazu:** Okay.

**Alex Suraci:** So it's just like a slight timing, because often it's out of sync.

**Gerhard Lazu:** No way... So let me try and summarize what we've done here... We are running an infinite command in Bass. We have synced the Bass CLI -- we've connected the Bass CLI, we've authenticated the Bass CLI with my Spotify account, and whenever I'm playing a song, whatever is running in Bass locally, it synchronizes with a song, and the BPMs and the colors match what is happening in the song. Is that what we've done here?

**Alex Suraci:** It doesn't affect like the program, or anything. It's just purely that little spinner thing there. But yeah...

**Gerhard Lazu:** No way...

**Alex Suraci:** Usually, when I'm working on something, I'm listening to music at the same time, so it's just kind of fun to see like a spinner sync up to it.

**Gerhard Lazu:** \[53:58\] This is amazing! I have to take a screenshot of all this. I'm going to move some windows around for us to see this. I'm going to stop sharing my screen, so that I can take a proper screenshot. I'm going to adjust some lighting, and this one is going in the show notes. All this. Because this is unbelievable. Alright... This is the screenshot that will make it in the show notes. Not the one that we've taken early on; this one, that shows this amazingness that we've just done.

Okay. So step one is done. Step two - shipping it, right? Because we confirmed it works.

**Alex Suraci:** Right. Well... Ish...

**Gerhard Lazu:** Anything else that needs to happen?

**Alex Suraci:** It works as long as I'm acutely aware of everyone that uses Bass and add them as a user of this app. So I need to figure out how to change this app to a different status.

**Gerhard Lazu:** So he's not a developer anymore. That's the one. Yeah. Well, I have to tell you, I feel very special for being the first user other than you for which Bass works in this way. I'm super-excited about this.

**Alex Suraci:** I appreciate the testing.

**Gerhard Lazu:** Anytime.

**Break:** \[55:07\]

**Gerhard Lazu:** So do you want to ship it or not today?

**Alex Suraci:** I can tr-- so last time I tried to ship it is when I like disconnected and everything went wrong, because I switched monitors, and then this is connected through USB to that, and just like everything crashed.

**Gerhard Lazu:** I see.

**Alex Suraci:** I will try though... I'll try to do it just on this machine... And it'll take a while. because it has to like build the world.

**Gerhard Lazu:** By the way, it's using more than one core... Okay, I don't see it anymore, because I'm not sharing my screen... But let me do this... Let me share this window. And if I do hstop. If I sort by, process no I don't want a tree view. There we go. Actually, you're right; it's 132%, so it's not quite that much.

**Alex Suraci:** The rest is probably just re-rendering the UI, because of the spinner.

**Gerhard Lazu:** The re-rendering the UI... You mean this one? This one right here?

**Alex Suraci:** Yeah.

**Gerhard Lazu:** Okay.

**Alex Suraci:** There's a lot of magical shell escape sequences going on to render that...

**Gerhard Lazu:** This is amazing. Wow... We had like something similar with TTY2 and TTY on Dagger happening just like this week, and... Oh, wow. Some people will have some questions for you. How did you accomplish this magical feat? And guess what - Bass is open source, so anyone can go and check it out, including you, dear listener. Have a look at Bass... Vito/Bass on GitHub?

**Alex Suraci:** Yup.

**Gerhard Lazu:** I'll put the link in the show notes. Okay.

**Alex Suraci:** Please refactor my code for me. Someone's got to do it.

**Gerhard Lazu:** Yes, exactly. Yes. Pull requests, please. That's how all great software is built these days. Okay, cool.

**Alex Suraci:** \[01:00:03.08\] I can start shipping it over here... Maybe I can try to share as well.

**Gerhard Lazu:** Go for it, yes. I'm going to stop sharing my screen, so you can start sharing yours. I'm going to Ctrl+C my fib loop, Ctrl C... Yes... Man, this is too cool. I was not expecting this, but... I'm delighted, I have to say. Mission accomplished.

**Alex Suraci:** Yeah. So this is shipping Bass 0.9. It's gonna take a long time, because it has to build the Nix image for shipping Bass, which has a bunch of dependencies... Not a thing that's even started yet. Yeah, it's showing the music visualization there... There's no way to tell, but I'm sure it's out of sync.

Yeah, this visualizer, the colors on the website, the Space Invaders, the little Bass cleffs that show up next to paragraphs to give you a deep link - these are really all efforts to keep Bass fun for me as a maintainer, and also make it obvious that this is a tool built for fun... And if you want to have fun, come hang out and contribute.

Because I think that was one of the things that went kind of wrong with Concourse, was it was -- no matter how much we tried to inject fun into it, really the user base was like serious business; people trying to do like very serious things, like ship software, run CI for their organization.

One of the most controversial things I think in Concourse was if you run Fly and Concourse isn't running, it says "Is your Concourse running? Better go catch it, LOL", which we got some complaints about, because it's like, when my server is not running, I don't want to see you making fun of me... Which is fair, but...

**Gerhard Lazu:** Hm... People taking themselves too seriously. You know, I do that sometimes. I do that often, actually. And I think we all do, to some extent. I think taking ourselves first and foremost too seriously - you may be stressed, and that's just like a sign that you're stressed, and some of the checks and balances aren't working quite as well as they should... And you stop seeing the fund in things. This stuff is supposed to be fun. We're supposed to be enjoying this, because we spend so much time dealing with all sorts of weird stuff. Mistakes. Mistakes which well-intentioned people did the best they could with what they knew at the time... And that's it. That's all. No one tried to introduce the bug; no one tried to ship the broken software. A number of things just went the way they do, as they do, and that's what you end up with. How are we going to improve it? How are we going to, you know, take it lightly, do the best we can, improve, and remember to keep having fun. So I really like that story. I really like how you're thinking about this. I think more of us need to do that.

**Alex Suraci:** Yeah. I think there's nothing more humbling than trying to build software, especially if you're trying to build software for other people. It's easy to build software for yourself. That's mostly what I've been doing with Bass. And I think that's a good thing. It's harder to build it for other people, because you don't know exactly where they're coming from. That I think is one of the things I kind of feel bad about with Concourse, was it was very strongly opinionated, and over time, a lot of users came to Concourse not because they chose it and bought into those opinions, but because the organization chose it, and then they had to deal with the very strong opinions that Concourse had about things. For example, passing runtime data into tasks is like a hill that I died on in Concourse, because I didn't want it to be possible to have your tasks become not hermetic and become dependent on Concourse itself... But there are reasons people end up wanting that, because they've already bought into Concourse, and having that become a blocker means having to buy out from it, and completely switch to something else, which if you like the rest of it, it's not great to be blocked on that.

\[01:04:00.22\] So that's kind of another thing I'm doing differently with Bass, is trying to meet people where they are more, and make the good patterns feel obvious, make the bad patterns not feel great, but probably still be doable, to some extent.

**Gerhard Lazu:** Still okay, but yeah, not the best experience, for sure. I think a lot of frameworks, the ones that stood the test of time, are a bit like that. Things are possible within them, but then you'll feel the pain, because you're trying to go against what they were designed to do. And I think it's almost like you need to know when you're off the well-trodden path, or when you're off -- not what is possible, but what is easy. And some things may be unfinished, but if something is simple, I think, if something is minimal, as you mentioned... You mentioned --

**Alex Suraci:** Scheme?

**Gerhard Lazu:** Scheme, thank you. Scheme. Yes, that's the one that you mentioned. So you went from six to five, because you realize you don't need the sixth one. Really simple primitives, but that are dependable, that are intuitive to a certain degree, because it's still, you know, all abstract stuff... And that tends to be hard, especially when you start combining things, and then you can't imagine all the ways in which you can combine it, what happens next, second order, third order effects, and so on and so forth.

The point being, if the surface is small, if the interfaces are well defined, if there aren't many combinations possible - because there shouldn't be that many combinations possible, I think - because you have the number of items, of like items in the set is smaller - then fewer things can go wrong. And if something does go wrong, then you will address that one thing, but you don't add more features; you don't add the seventh, eighth, ninth element, so that you start having like this explosion of permutations.

**Alex Suraci:** Right. It's a system, and everything ideally reflects on each other. I think you build a good system by having -- every component leverages some other component within it, because that's also what kind of installs those guardrails, and at least makes it easier to justify, "Hey, this has to be this way, because otherwise this other load-bearing property of Concourse or Bass just doesn't work." And you need that because - well, you just want that. Like caching, for example. It was kind of a forcing function for having resources be pure. And you definitely want to be caching all those fetches, right?

**Gerhard Lazu:** How do you handle that, by the way, in Bass, the whole caching aspect? Because that's a big one, and actually, it's even like in the tagline. I'm going to read it, because I want to say it exactly as it is. "Bass is a scripting language for running commands and cashing the s\*\*t out of them." That's supposed to be funny... But ironic, not arrogant. That's what you want - you want everything to be cached all the time.

**Alex Suraci:** Honestly, all the magic there is in BuildKit. Bass is really just building up the LLB data structure and just sending it over the wire. BuildKit is the one that tracks all the dependencies between things, and if it doesn't need to run something, because it already ran it, then it just won't run it. So if I run this ship-it thing - if it ever finishes - if I run this again, theoretically it just doesn't go up, because every command is cached, and every input is controlled. Where that starts to break down is when you start passing things in from the host machine. That's where you need really good diffing properties. This one should be fine, because none of this should be coming from the host. It passes the SHA in, and within this JSON file there's a git clone and a git checkout somewhere of that SHA.

**Gerhard Lazu:** And BuildKit, when it comes to running BuildKits - I know there's a couple of good talks, including one from Apple, I think it was from KubeCon 2021; I can leave a link in the show notes... And they're talking about how to run BuildKits in the context of Kubernetes. You have a cluster of BuildKit instances, and then you know where the caches are located. So do you do like some smart routing, so you know where to send jobs... You do some hash-based routing, and then you have most likely things in the cache. But the cache is distributed.

**Alex Suraci:** \[01:08:00.01\] Yeah. It's tricky, because this is one of the things we struggled with with Concourse, was do you bias to place workloads where a cache is present, or where it's not present? Because if you do one, then you end up with like everything thundering onto one machine. If you do the other, then you're not caching as much... Ideally, you're caching once per worker, so if you run things enough, it'll warm across the board. But yeah, there's trickiness within there as well, I guess is alll I would say. Sometimes it comes down to the use case, like the user has to know if it's going to be cheaper to transfer this over the wire, or just fetch it from scratch. Sometimes it's faster to just avoid the cache.

It's like a giant repo.

**Gerhard Lazu:** Interesting. Do you think that it's important for caching, for it to be as close as possible to the compute? Or do you think it doesn't really matter if the cache is too close? Because in my mind, I think the cache should be on the same instance where the compute is. So it's almost like you want to distribute the job using maybe like a hash ring algorithm, so that jobs, the same job ends up on the same host, on the same node.

I know that Cassandra had this, it had like a rebalancing mechanism, where if you added more nodes into the cluster, there'll be the hash ring, so each node would occupy less of the of the hashing space, and there will be like some rebalancing where the data would move across. And then there would be like one or multiple nodes that would just like basically serve the cache that the new node was supposed to serve? Is that too complicated, do you think? Or do you think it's necessary? Do you think there's something simpler? How do you think about that? Because that's a really interesting problem, especially for CI systems that need to run at scale, and you need to balance the staleness... Like -- sorry, some jobs need to be fresh, and other jobs need to have a cache, because they will run faster.

**Alex Suraci:** It's still like the fundamental question, I guess. I feel like it's impossible to predict really, because it depends on how long does it take to build the cash, versus how long does it take to transfer the cash. I don't have any unique insight on the Cassandra-specific things you mentioned there, but that's the fundamental thing with Concourse, and that's where -- at one point, we were considering tracking the average duration, like on a task by task basis, because then you can kind of try to make that calculation. But you have to benchmark it against like the internal network transfer.

So I guess, ideally, you would have a system that can kind of learn from the things that it's running, which - that gets tricky, because how do you identify these things? It depends on like the hermetic aspect, right? Because if you're running something that's completely controlling its inputs, and maybe you could reuse a git clone from earlier, you need some way of identifying that they're really the same.

**Gerhard Lazu:** Exactly, yes.

**Alex Suraci:** One thing I was experimenting with in Bass was having it so that when you do a git clone, it would actually have multiple layers. It would have one initial layer that is like just git clone the repo, cache this every day, and then a later layer does a git fetch, to bring it up to speed, and then the layer after that does a git checkout. That way, you can kind of have fine-grained -- you can have coarse-grained caching at the lowest level, so you're only cloning once a day, but then fetching at some other interval, and then the final checkout is how you get there. So I guess that's one way to cut it, and have more fine-grained caching, of Git repos specifically.

**Gerhard Lazu:** That's interesting, yeah.

**Alex Suraci:** Yeah, I don't think I've seen a system that really learns from the runtime of how long things take to run, versus the size of the output that comes out of them.

**Gerhard Lazu:** That sounds like a really interesting problem, and I would love to solve that one day, because it sounds like it will unlock so much -- like, forget AI, forget machine learning, forget all that stuff. I think it gets just too much hype. Something simple like this, that can keep track of what is happening in the system, and based on what happens, it can try and do something like literally little optimizations... "Okay, based on this, I'm going to try that." And that result, it's going to use it for the next calculation. Based on all these things which I've done, I think this is going to be better. Just like small iterations towards eventually finding its own sweet spots.

\[01:12:16.18\] It just reminds me a bit like Conway's Game of Life. You know, they just keep changing, and eventually, you start seeing those patterns. And it just happens, and they just didn't know what to do... Like, how is that even possible? They start mimicking, you start seeing -- it's just fascinating.

So that's one I imagine for this caching problem, where it just learns, and eventually just gets to a point where it's stable, it's happy, and there's nothing more that you can do to improve, and then everything is cached.

**Alex Suraci:** Yeah. I mean, I guess it is machine learning.

**Gerhard Lazu:** Yeah, in a certain way...

**Alex Suraci:** In the basic, in the most basic sense, right? It's a machine learning how long things take.

**Gerhard Lazu:** Yeah, you're right. You're right. It is. But I think it can go so crazy, right? You have all the different -- then you have neural networks, and Bayesian filters... It just goes a bit crazy after that. And most of it is over my head, to be honest, but... I like things simple. And I think simple is defined by my capacity of understanding things, because that's what it is, and it's everyone's capacity... So there's like a common point where each of us -- it's easy for us, for all of us to understand that quickly and easily, and I think that's what's simple for most of us. That's what I think of it.

**Alex Suraci:** I always also prefer simple, because at least when it breaks, you know probably what will happen. One failure mode for that, I guess, is you're running something on a shared machine that's also running something else that's really expensive, so it messes with your numbers, and it suddenly thinks it's more expensive in the future... But maybe there's just a button to clear the cache. All everything comes down to is clearing the cache.

**Gerhard Lazu:** That's right. Cache invalidation, right? Right, okay. So what was the most fun thing to work when it comes to Bass? The thing that you enjoyed working on the most. Because this was important... Making Bass fun was important. What is the most fun thing so far?

**Alex Suraci:** I think building the language itself. There has been a lot of different vectors for fun, but just getting back to what I was really into back in the day, just like coming up with a language and trying to have as few concepts as possible that leverage each other in interesting ways... One example is in Bass what you might call maps in Clojure, or like hashes in Ruby, is called scopes, because they're used as both a data structure scope, but also as an actual scope when you evaluate Bass code.

So if you, for example, take like a JSON scope, like a scope that was like parsed from JSON, you can actually evaluate Bass code using that as like the runtime environment. A lot of the times where I try to -- anytime I see enough similarity between two concepts, I actually try to just magnetically put them together, and so far it's been paying off. I'm sure it'll blow up in my face by like over-leveraging one concept in some interesting way... But I'm hoping that the fact that Bass is kind of restricted to one domain - I'm hoping that keeps it like low likelihood of too many footguns emerging from my overuse of concepts.

**Gerhard Lazu:** Well, the thing is you never know until you keep trying and keep getting to a point where you realize "You know what - this doesn't work." And that's okay. As long as you have a fitness function that can determine whether what you do gets you closer to where you're trying to get to, that's okay. If it says I'm closer, then I am closer. Unless the function is wrong, but I think you would know if the function was wrong, because that's really fundamental. And I think in your case, the fitness function is "Is it fun? Am I having fun with this?" And that's like instinct. You know whether you're having fun. It's very difficult to game that. There's no amount of anything that you can do other than just be honest with yourself with your delivering towards that goal.

\[01:16:12.06\] So I see that, and I've noticed, that there is a lot of Nix... And I don't want to say a lot of, but like a significant amount of Nix in Bass. What is the relationship between Nix and Bass, the language?

**Alex Suraci:** So this is something I've been very careful about, because I know Nix is one of those things where the mere mention of it near your project can send people like scurrying and running to the hills and trying to avoid it, because some people see it as very complicated and hard to get into. And I think they're right, but there's a lot of really cool parts to Nix that are hard to find anywhere else. To me, the biggest value to Nix is having just the largest and most up to date software package repository in the world. There's actually a dashboard managing this and comparing Nix to Debian and all these other systems... And it's just like, Nix is like so far removed from them, it's not even funny. They have things that are just literally automatically updating packages in the repo.

**Gerhard Lazu:** Where's this dashboard? Because I haven't seen it, and I'm very curious.

**Alex Suraci:** I think I put it in the release notes for the first release where I started...

**Gerhard Lazu:** For Bass 0.1.0.

**Alex Suraci:** Yeah.

**Gerhard Lazu:** There's something which I need to mention here. DJ, Daniel Jones, congrats for your first pull request to Bass. We go a long, long way back, and seeing you as the first contributor to Bass put a smile on my face. So if you're listening to this - and if you're not listening, that's okay. I'll make sure that I send you a link with this episode... Maybe even the exact timestamp. Well done for doing the first contribution to Bass; that was very nice to see. Cool. So I'm looking at the 0.1.0...

**Alex Suraci:** 0.2. I just put the link in the chat as a shortcut. My machine is really suffering...

**Gerhard Lazu:** 10 minutes? More than 10 minutes. 15 minutes? More than 15 minutes. 17 minutes, I think.

**Alex Suraci:** This is like a -- it's a 2018 MacBook Pro. So it's not even M1,

**Gerhard Lazu:** Right... Couldn't you have run it on like your Ryzen? Because that's what you have; you have Ryzen 7, I'm imagining...

**Alex Suraci:** That was the plan... But when I did that, that's when like everything disconnected, so...

**Gerhard Lazu:** Oh, I see. So when you SSH into it, it doesn't work, if you were to SSH...

**Alex Suraci:** I don't think I have SSH set up. I was just switching the display. I have like a KBM button... But I forgot that everything else is also flowing through it, so...

**Gerhard Lazu:** Oh, I see what you mean. I see, I see, I see. Okay. Repology.org. Wow, that is impressive. Number of packages in repository, number of fresh packages... I see what you mean. I see what you mean. \[unintelligible 01:18:50.29\] I'm looking for the number of packages, number of freshness, and I can't find -- in that graph, I can't find Nix. And I don't think I can search, because it's generated. This is rendered.

**Alex Suraci:** Oh. It should be very top right, on the first graph. You'll see Nix packages unstable.

**Gerhard Lazu:** I can see that. And yes, stable. But on the second one -- yeah, what is that, by the way? It zooms in onto smaller repositories... Oh, it's actually outside of that. So that's like a zoom in. It's outside of that. Wow...

**Alex Suraci:** Yeah.

**Gerhard Lazu:** And that's zoomed in some more... Homebrew Casks... Wow, that's so far away. That's so far away. Okay, that's really cool.

**Alex Suraci:** To be fair, I think there's a lot of automation driving this. There's probably like -- maybe they're representing Python libraries and things like that as big packages. I'm not sure. But it's still -- usually, when I want some software, it's in there, it's up to date. If something shipped, it's been up to date as of a few days after it shipped... Which is really what I'm looking for when I'm trying to build images and run things with Bass, is I want something that's just like "Give me the latest version. I don't care about sticking to Debian." If I wanted Debian, I could just use Debian \[unintelligible 01:20:09.22\] install, or whatever... But the nice thing is that Nix also gives you precise reproducible builds.

**Gerhard Lazu:** \[01:20:16.24\] So interestingly, I have my Linux system, I switched it to -- and I have like a couple of workstations... One of them is this NixOS host. It's an AMD Ryzen 7. It's a completely fanless system. I really liked the whole -- like, configuring it was really nice. It has like a desktop interface. I just used some dashboards on it, Grafana dashboards to monitor my connection, my internet connection, things like that.

On a Mac, I tried installing Nix, and I have tried running it for about seven months. But it has this weird -- I don't know, I couldn't get updates to work consistently. Updating the channel didn't work. There's this Darwin extension or something like that, that you need to install. That was a bit weird. So my question to you is, do you use Nix on Mac?

**Alex Suraci:** Actually, for my development, I use WSL. So I just use Nix within Linux, within Windows.

**Gerhard Lazu:** I see, okay. That makes sense. Okay. So you have basically all three on your Mac. The host is Mac --

**Alex Suraci:** The host is Windows.

**Gerhard Lazu:** The host is Windows.

**Alex Suraci:** The host is Windows, yeah.

**Gerhard Lazu:** Okay. Okay.

**Alex Suraci:** I'm just using Mac right now, because it has the Opal software from my webcam.

**Gerhard Lazu:** Oh, I see what you mean. Okay. Okay. Okay.

**Alex Suraci:** So the whole reason for this being horrendously slow, and like fumbling through all this is, that Opal doesn't have software for Windows right now.

**Gerhard Lazu:** Yeah. I see. Okay, that makes sense. That makes sense. Okay. But Windows is like your host operating system, in that you run Linux, and all development works. happens in Linus. Okay, that makes sense. And Linux - I'm assuming you're using NixOS. That is your host -- so that's your Linux operating system.

**Alex Suraci:** It's Ubuntu with Nix, just for the package manager.

**Gerhard Lazu:** Interesting. It's honestly pretty cobbled together. I only started using Nix once I had already started building Bass, so I was already using Ubuntu and everything for that... So I just wanted to see how Nix might interplay with Bass, I guess... I never finished that thought, by the way, which is that I don't want Nix to be a dependency of Bass, because that would be terrifying to people, to have to not only learn my esoteric Lisp, but learn this esoteric Nix language beneath it... So it really only leverages it insofar as I as the project maintainer use Nix to build the images that feed into Bass. And I use Bass to build those images using Nix.

So Bass just sees Nix as another command to run. I'm just running Nix build, and then that produces an OCI image tarball, and then I passed that to another thunk... Because you can use thunks that use archives built from other thunks as an image.

**Gerhard Lazu:** Right.

**Alex Suraci:** One other thing I've been experimenting with though is because Nix is so good for just like pulling in packages as dependencies, and a lot of images that people build for CI are just - I need Ruby installed, or I need... But I don't need just Ruby, I need like Ruby, plus Git, plus Upx, or like whatever toolchain I use... Because it's pretty rare that you can just use Ruby off the shelf, like the library Ruby image, and have that provide everything you need... So one thing I'm planning to experiment with is having Bass - just like it starts BuildKit, have it start a Nixery host, and then you can just do like from Nix/gh/ruby/go and it'll just build an image on the fly, with all those dependencies.

**Gerhard Lazu:** I want that. That is so cool. Oh, wow. That would be so cool.

**Alex Suraci:** Yeah. No more like building throwaway images.

**Gerhard Lazu:** \[01:23:55.03\] Yeah, especially -- I use Nixery.dev often, especially in demos. So if I'm trying to put together a bunch of tools - ad hoc, arbitrary, I don't know what they are - I get this Nixery.dev image, which has all the tools that I need, and that's my starting point. I've done that often, and it works so well. It's like, why don't more people do this? But again, Nixery.dev is like \[unintelligible 01:24:19.13\] Vincent, we have to talk again. And I think that you need to talk to Alex too, because there's something really cool about this. And if you can run it locally - because that's what I'm hearing from you... If you can run Nixery.dev locally, via Bass - oh, my goodness me, I want that.

**Alex Suraci:** Yeah. Because what keeps biting me is the frickin' Docker Hub rate limits. They're so low now.

**Gerhard Lazu:** Oh, yes. Tell me about it.

**Alex Suraci:** Oh, hey, it finished something.

**Gerhard Lazu:** Okay. Okay... So by the way, dear listener, all this time, we have been waiting for a Bass build at a Bass release 0.9.0. And we've been filling time, and I'm so glad we did, because we talked about so many interesting things. So let us not get distracted by the release, and please continue, because this is super-interesting.

**Alex Suraci:** Oh, yeah. So Docker Hub and the rate limits - it keeps making my tests fail, because my tests run - like, they don't have any authentication setup, so it's always just using the anonymous rate limit, which is like 100 calls per six hours, or something... Which sounds like a lot, but it's really not when you're running tests that hit Docker Hub, and you're quickly iterating. So it would be great to use Nixery.dev, but then yeah, I don't want to burden Vincent -- Vincent, right? Vincent?

**Gerhard Lazu:** Yeah, Vincent Ambo.

**Alex Suraci:** Yeah, I don't want to burden him with like me depending on it for production, and I don't want to be hitting his registry and adding load to it. But if you're just running it locally, then that solves both problems, because there's no rate limit... It should be much faster than this. This entire time we've been talking, we've just been waiting for next to build and export an image, which - it would be much faster on my machine, but what would be great is if I didn't even have to do this, because Nixery does all the magic stuff with layers, where you don't have to build and export and unpack, because it all just happens registry-side.

**Gerhard Lazu:** Now, I have to say that I've seen in our CI at Dagger various failures related to images. Images aren't being pulled from registries - it's usually Docker Hub - but also caches. So registries and caches - I think registries are a type of cache. That's the way I see them. Once you start depending on them and once you start running like many, many builds through, and you have many pull requests, and all that, you start realizing basically how much degradation there is in them... And the way we see them is as flakes. Run the test again, it passes. And you just get like errors from endpoints.

\[01:27:03.20\] So if you could have that somewhere close, to where -- basically, like where the compute is, and you wouldn't need to do any of the network transfer, that'd be so much quicker. Because the network has its own properties, which is latency, which is packet loss, which is like all sorts of things. And you've heard me talk about that for a while...

But Alex and Vincent - you gave me a bunch of ideas there. Yeah, episode 37, "Building fully declarative systems with Nix." That was the episode when he talked, and I think we should talk again, because there is something really interesting here.

Okay, let me see what we can do there, because I'm really excited about this, and I definitely want this... And we need to see how to continue my NixOS journey, because I'm almost there, but there's like a couple of things which I'm still missing. For example, putting on the version control everything.

The thing that we tried to do, happened, and I will let Alex tell us more about it. We are preparing to wrap up. I'm pretty sure that we could go easy for another hour, like start unpacking some of the things; there's so much there. I'm super-excited about Bass. I loved Concourse for a long, long time, and it could have been so much more. Bass - a new life. I think I'm starting to see a lot of the similarities, and thank you, Alex, for helping me see that. But over to you as we prepare to wrap up. How would you like us to end this great conversation?

**Alex Suraci:** I don't know... Check out Bass, if you want to have fun. If you've been curious about building a language, but felt like the bar to that was too high, Bass is a great place to experiment with different ideas, because their performance concerns are much lower than in other traditional languages. If you feel like you're tired of YAML and tired of templating YAML, and tired of gluing together bespoke abstractions, and would rather try to glue together bespoke CLI's in a bespoke language, then yeah, check it out. The latest version has the most important release in a long time, Rave mode. Press R, and just keep vibing, from program to program.

**Gerhard Lazu:** That's really cool. Yeah, so R Rave connects your Spotify, the thing that we've been trying to do. 0.9.0, that's amazing. Thank you very much for keeping the release for when we record it. It made me feel so much more special. I was very excited about it, so...

**Alex Suraci:** If only it didn't take an hour, because the stupid MacBook...

**Gerhard Lazu:** That's okay. Computers, you know... We know how to do it better next time. But this was really, really -- it was real fun, let's put it that way. So I think from that perspective, I think you've accomplished your goal - to keep it fun, to keep it light... And hopefully, it will be the same for others.

**Alex Suraci:** An hour of fun... A positive way to look at it.

**Gerhard Lazu:** Well, we are nerds, what can I say...? You know, that's like Jerod's words; we are nerds, so this is the fun that we have. Alex, thank you much for joining me. I'm looking forward to next time, and I look forward to what happens with Bass. This is amazing. Thank you.

**Alex Suraci:** Thanks for having me.
