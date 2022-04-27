**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer, and today we're talking about instrumentation, and instrumenting your Go code, specifically. I'm joined today by Johnny Boursiquot. Hello, Johnny.

**Johnny Boursiquot:** Hello there.

**Mat Ryer:** How's it going? It's been a while.

**Johnny Boursiquot:** Yeah, it's been a while. Yeah, we haven't been in a show together for a minute.

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** How are you, mate?

**Mat Ryer:** Yeah, not for a while. Well, you don't just have to tolerate me on your own, Johnny. Don't worry. We have some guests today to dig into this subject. We've got Björn Rabenstein. He's here, he's an engineer at Grafana Labs and long-time Prometheus contributor. Hello, Björn. Welcome to Go Time.

**Björn Rabenstein:** Hello. I'm glad that I'm finally on this podcast, of which I'm a great fan.

**Mat Ryer:** Oh, well, we're great fans of yours as well. And we're also great fans of Bartek Płotka, who's also joining us. Hello, Bartek.

**Bartlomiej Płotka:** Hello. Nice to be here.

**Mat Ryer:** Bartek is a engineer at Red Hat, a maintainer of many open source projects in Go. You've probably seen his name around GitHub here and there. Yeah, maintainer of Prometheus and Thanos, and you're authoring Efficient Go. Is that right, Bartek?

**Bartlomiej Płotka:** That's correct. Hopefully, published this year.

**Mat Ryer:** Yeah, that's exciting. How is it writing a book? Is it what you thought it was going to be?

**Bartlomiej Płotka:** \[04:06\] Definitely not. Definitely not. Lots of pros and cons. Lots of learnings. I think it's worth it, but maybe just once a lifetime. \[laughs\]

**Johnny Boursiquot:** One book will do. Yeah.

**Mat Ryer:** That's how you feel now. Maybe you'll get the buzz.

**Bartlomiej Płotka:** Exactly.

**Mat Ryer:** Yeah, you'll get a bug for it. Well, we'll see. Okay. So maybe we could just start at the beginning. For people not familiar, what is instrumentation? What's it useful for? Bartek, maybe you could kick us off.

**Bartlomiej Płotka:** Right. So how I see the instrumentation as, essentially, it's about generating the signals that will tell us later on how your application is behaving when you don't have visible access to how it's running. So maybe you are putting that in production, in your cloud, maybe on your friend's machine, just spinnig up the process out of your Golang code that you created, and you have to have some kind of - well, those magic words, "monitoring" or "observability", so the ability to really derive the state of this application only from its observability or monitoring signals. So in order to generate those signals, we need instrumentation. So essentially, we need instruments that tells us what is happening remotely. This is as simple as that.

Now, of course, this can go even more complex, because you can have either manual instrumentation, so you are directly adding a code statement to your Go application, to add a log line, to add a metric, to create a span, tracing span, or maybe there is a Golang run time logic that creates profiling. And probably we can discuss this in this episode. But there are also automatic instrumentation mechanisms, where you can deduce the application state essentially from, let's say, a closed box pattern, where you can essentially ask operating system, so essentially, a kernel. This is what is very popular nowadays, with this eBPF solutions that allows you to really understand what process is doing without any manual statement. So essentially, this is the categorization - manual instrumentation, automatic, all to derive some signals.

**Mat Ryer:** Great. And so what's this useful for then? So we find out that we can find out things going on inside-- or what's like a specific example of something that you might want to instrument and then report on?

**Bartlomiej Płotka:** So feel free, Björn, to chime in, but there are plenty of things. And I think first and foremost is something that we can read in a popular SRE book, right? So essentially, the Google team, who created this SRE movement, site reliability engineering - we can read that monitoring is like a key component in building any application in the cloud. And the reason for it is that you don't know if it's running if you don't observe some signals. So health monitoring is kind of the first thing you do. You want to ensure that it's actually doing any work if you are not looking on it, if you are not actively poking using its -- I don't know, HTTP requests, or looking into its work items. So health is the first thing you want to check out, probably.

**Mat Ryer:** And so that's like a real endpoint running on the server that just returns some "okay." And so if you can reach that, then you know the server is at least up.

**Bartlomiej Płotka:** Yeah, that's the basic solution. That is not the best, because if you're not looking, then it might be down in those periods when you are not poking it for 200 \[unintelligible 00:07:41.18\]

**Mat Ryer:** Yeah.

**Bartlomiej Płotka:** So there are many, many different methods of how you can process this information about healthiness.

**Björn Rabenstein:** \[07:51\] I mean, what we got with the age of cloud or the age of distributed systems was also a notion of that just being up or down - it's not that easy anymore, right? Your server consists of many microservices, and every microservice has many instances... Some of them are always down, because once you have enough of them, they will never all be up. So you get into this whole area of -- I mean, we have to tolerate a bit of downness, and then you start to think that just probing for up or down for this binary result isn't enough anymore. This is where your start to want perhaps some metrics about your running tasks. And that's where the instrumentation also, I think, gets into the game, right? If you just run a probe to see if something is up, you arguably don't really need instrumentation; you just check out if your endpoint is up, right?

I mean, this is what I call the founding myth of Prometheus. I have to talk about Prometheus, of course... I don't know if it's literally true. I was joining the Prometheus team very early in its history, but not from the beginning, right? So I also got this just from stories. So this is why it's all myth in the distant past... But, I mean, sometimes you get nice stories from that, right? And the mythological version is that the first idea for Prometheus was actually, "We need to instrument our code for metrics", and then the initial founder started to create an instrumentation library. And I like to believe it was the Go library they created first. It might have been the Java library, but let's assume it was the Go library, because it's a Go podcast, and then that might even be true.

**Mat Ryer:** Would you assume that was the Java one, on Java Time?

**Björn Rabenstein:** I don't know. I think I will never be on Java Time if there's anything like that. \[laughter\] We'll see. So this was the initial spark of inspiration. There was an instrumentation library where you could instrument for metrics and it would expose in a separate endpoint - I think Bartek mentioned that shortly - that you have a separate endpoint where you not just collect "Is it up?", but you can collect the data from the inside of your running binary. And then the next question was, "Okay, how do we scrape this data? And where do we collect it? How do we store it? How do we read it? How do we curate it?" And this is where then the Prometheus server got invented, essentially. But it all started with instrumentation... And maybe with the Go library, which still exists, and Bartek is the current maintainer of it, and I'm the past maintainer of it.

**Mat Ryer:** Wow.

**Björn Rabenstein:** It's one of the most used Go packages in the universe, I think.

**Mat Ryer:** Wow, in the universe. Wow. I mean, that's assuming Go only exists on this planet. We can't say for sure that--

**Johnny Boursiquot:** Or just in this universe. Because there is a multiverse, from what the movies tell me.

**Mat Ryer:** Yeah. Still not bad though if you're the best Go package in this particular universe, even if--

**Johnny Boursiquot:** In this particular-- yeah.

**Mat Ryer:** Yeah, even if there's more stars in other universes.

**Björn Rabenstein:** Is there Go on Mars? There must be Go on Mars, right?

**Mat Ryer:** Yeah, there must be by now. Yeah. That's great.

**Björn Rabenstein:** And then there might be a Client Golang -- a Prometheus Golang might be on Mars as well. Who knows?

**Mat Ryer:** Probably.

**Björn Rabenstein:** It's running in all the German -- like, on the rail stations, they use it to monitor those.

**Mat Ryer:** Do they?

**Björn Rabenstein:** So it's running everywhere around me. It's pretty cool.

**Mat Ryer:** Well, if only you'd instrumented it and it was reporting that somewhere, so you could see all the places it was running, that'd be awesome. Actually, I would like that as a feature, please, because for -- yeah, all packages, we ought to have that, so we can see how it's been used.

**Björn Rabenstein:** The popularity of this library is actually -- for me, it was a huge surprise. And that's also, I think, an important topic about instrumentation. Back then - we're talking about the year 2012 - it was very uncommon for normal developers to even think about instrumentation. I mean, if they really thought about it, they would realize even putting a printf statement for debugging into their code, or emitting a logline - that's already instrumentation. Instrumenting code for profiling is instrumentation. Luckily, we get this for free in Go.

\[11:48\] So they kind of did instrumentation, but they would never think about instrumentation for monitoring. This was completely an ops concern, and developers would never think about ops concerns. And teaching them that they have to instrument their code for things like monitoring was a big deal, right? I didn't expect that would get traction so quickly. But of course, the DevOps movement, blah, blah, blah, all those things. So that might have helped.

Also, developers might have pretty quickly realized that if you instrument your code for even more things, like metrics or tracing or profiles, that it even helps during development. That's also an important thing, that monitoring per se is everywhere in the stack, right? It's not just in the end when you add it as an afterthought, and you need it to run your system.

**Johnny Boursiquot:** Different people have different needs, right? So when we talk about the operation -- sorry, if your organization is large enough to have a dedicated ops team, or the people who care about the VMs, and basically making sure that the CPU is not spiking, or there's enough memory, or whatever it is; managing the lower level set of concerns, so at the infrastructure operational level... And then as you go up the stack, if you will, then you have a different set of concerns, right? You have the developers that are instrumenting maybe to find out, "Okay, how--" Let's say you wanted to sort of send traces out, and you want to know, "Okay, in this long-running process, I'm going to have a sub-span, to tell me how long this particular part of the whole thing is taking", and things like that. So that gives you that sort of that debuggability, the understanding of what your system is doing on any given request kind of thing.

But then I think there's an even higher level to that, where you instrument things and you can tell whoever asks that, "Okay, the service is up." I can hit the health endpoint or the readiness endpoint... Hopefully, it's not just a ping to get a TCP response, but maybe it's something you do and something meaningful that says, "Okay, the system is operational, it's actually ready to process requests successfully", kind of thing.

But beyond that, you're going to have the - can you answer "Is this thing doing what the business wants out of it?" So you're not just saying, "Is this thing up?" If your thing is up, but maybe you're failing process, 1 out of your 100 credit card transactions, and you can't explain why, at scale, that's millions of dollars potentially, right? So there are some things that the business is going to care about, that instrumentation can help you answer. But you have all these different layers of observability. Different parties are going to be interested in different things, depending on who you ask.

I saw people who use Nagios as a tool for instrumentation. Well, I'm not going to throw my developers into a Nagios dashboard and say, "Hey, go answer me some questions about business KPIs or something", right? But yeah, I'm going to use different tools. But I think the observability, really - I think it's an all-encompassing term now, which I think has gotten sort of diluted a little bit, ever since we transitioned from calling things monitoring to now using the more trendy term 'observability', and I think that's going to mean different things with different people. But instrumentation remains, I think, at the end of the day, whether it's automatic or manual - for the developer specifically, that remains the ultimate source of truth, beyond logging.

**Bartlomiej Płotka:** Yeah. And I would like to kind of add something to your points, both Björn and Johnny, about instrumentation. I think it's very underestimated how much work it takes to really build a solid instrumentation library... Because the amount of work you put, Björn, in this Client Golang that you were surprised is popular - well, it's because it's so hard to produce one. And especially when I joined maintenanceship of this package or module, really, there's so much work in terms of making sure the code is efficient, because suddenly so many applications are just importing this package. Modules... So suddenly, the amount of dependencies really matters. The efficiency of the code matters. The API scope scrape of this really, really matters. And I was just today trying to -- well, what we did, let's be honest... We made a little bit of a mistake on a new \[unintelligible 00:16:03.06\] Golang. So a Go team member really helped us to essentially move to different runtime metrics for the Golang processor.

\[16:15\] So in Client Golang you are able to essentially expose really interesting information about your Golang process, and around garbage collection routine, and memory, and essentially heap allocations, like how many tiny objects and big objects you are kind of allocating; very low-level information. So we kind of consumed that, we merged this contribution with that, clearly looking on maybe how many metrics you are exposing, and we suddenly expose maybe twice more metrics, and suddenly we are impacting many Golang services, because suddenly they are scraping twice more metrics.

So the amount of thoughts that had to go through those instrumentation libraries is enormous. It's not only metrics, and it's even worse when you are talking about logging instrumentation and tracing instrumentation, because it's just even more data that you are passing through. You want to pay for this application compute power for doing normal work and not monitoring, right? And sometimes, if you'd implement it wrongly, if you use those libraries wrongly, if you make maybe wrong decisions, you can pay much more for your observability than for your real application. That's a risk here, right?

**Mat Ryer:** Hm. So it really matters, doesn't it? It's amazing, actually, to think of -- I genuinely probably naively thought that that library was quite simple, that it would just have had some helpers that would collect buffering maybe, and then sending off batches, or making them available or something. But yeah, now when you mention -- like, often I will tell people, "Don't worry too much about optimizing yet. Get something built that works first, and you can optimize it later when it becomes a problem, if it ever does." This is one of those times where it really matters that this isn't an expensive thing, because - yeah, people are calling these methods all the time, aren't they? They use that client everywhere. It's almost in every code path.

**Björn Rabenstein:** You definitely don't want to think, you don't want to consider if you use that or not; you just want to use it and it doesn't have a significant penalty. Similar to when I realize in a Go binary profiling is kind of always on, and you just have this endpoint if you just anonymously import this package, and stuff like that. It was weird, "Isn't that expensive? Should I switch that off in my real production binary?" But no, it's all designed to be, I don't know, a fraction of a percent of your total resources. So you just leave it on, you don't ask questions. And when you actually get in trouble, it's there, and it doesn't matter if it's developer trouble or ops trouble; it's just there, and that's so cool and so good to have.

**Bartlomiej Płotka:** Right. But there are configuration variables for those Golang profiling that increases the frequency of-- increasing the sampling or frequency of CPU profiling that can trash your application completely; or you can actually reduce it. So there's lots of things you can control here.

**Björn Rabenstein:** And in what you just described, Bartek, with those new Go runtime metrics, now we also need to consider if we make this user configurable, because it's so many metrics that if you don't need them, it might be too expensive. So, of course, there are traders offs, but the ideal state in some utopia is you just have everything on and it costs you nothing. And we try to get as close as possible to that.

**Break**: \[19:38\]

**Mat Ryer:** Bartek, you mentioned earlier that you made a mistake in the client. What was that specifically?

**Bartlomiej Płotka:** Right. Let's talk about mistakes, yes.

**Mat Ryer:** If you don't mind...

**Bartlomiej Płotka:** Of course. Of course.

**Mat Ryer:** That makes me feel better.

**Bartlomiej Płotka:** Yeah, so I think that the mistake is really around -- we didn't have time to review exactly properly everything, and that change was pretty big. And as maintainers of Client library, I think we just get that from Bjorn's hands, so we are kind of pretty new. And essentially, usually, it's really about memory runtime metrics that Golang allows you to achieve. So usually what you could do - you could create this runtime.memstats structure, and you can just program runtime.readmemstats and provide the structure, and that will fill you the structure with statistics. And this is how we used to kind of get those metrics, and give you kind of a very easy one-line statement that you provide in the beginning of your application, that continuously exposes information, up to date, so Prometheus can scrape it and have up-to-date heap information; how many allocations you did on the heap, what's your GC latency, and so on.

Now, what happened in Go 1.17 (I think) was that runtime/metrics package was introduced, that kind of gave even more information about internal Go runtime, and we wanted to switch, essentially, to this new format... So totally go away from this memstats logic.

However, what's happening with especially metrics is that we all care about cardinality. We make sure the metric is stable, because this is what allows us to aggregate over time, and also over different series, and kind of compare to each other. This is the key concept behind metrics. And also, the cost of the metrics system really depends on the uniqueness of those series. So yeah, we just introduce a new unique series, so new names... And this is kind of what we could avoid, what we are trying to fix right now, is to add essentially some optionality, some configuration pieces. Especially because this library is so used, so popular, we need to make sure it by default doesn't increase your metric count twice.

So this is generally kind of what we try to achieve. So we have a community who wants to have this new runtime, amazing, granular metrics... So we kind of approve it and merge it, and then suddenly, the rest of the world was like, "Oh, I need to pay twice more. I don't understand really." So this is really the trade-offs we have to make for such a popular module. It's much more stressful and much more work than if you could just break the API on every release.

**Mat Ryer:** \[24:20\] Yeah. That is a big responsibility. Not only because it took off and became popular, but also the nature of it, the fact that it's found its way everywhere. I mean, it really is probably everywhere now. So it really does matter the decisions you take. How do you balance that? Is it a tough balance? Is there a disagreement about what can get in? Are there some people that are really paying attention to that cost?

**Bartlomiej Płotka:** Definitely, yeah. After merging this feature, we got like 12, let's say, issues, and very friendly ones. So we were very, very -- I mean, it was amazing community contributions to just report some problems. So I think that's the pros and cons of such a popular module, is that you're going to get early feedback, but also you have to make sure you're not making mistakes a lot.

But generally speaking - yeah, I think there are basic rules when you are writing any Golang code, especially that is consumed by others, like library modules and packages that saves your life. For example, any new feature you should add under a new API, under new methods. You don't change the existing code. Whenever we want to change something, we are having this in comments // depricated kind of special word that is actually handled by the IDEs, like Golang and others, that automatically points you that this code is -- well, it's for compatibility reasons there, but there is a better solution somewhere else. So there are certain rules that you can go with. But of course, at some point, you need to consider V2, or V3, or V100. That's a big chunk of work unfortunately, nowadays, with Go.

**Mat Ryer:** Yeah, yeah. I like that you've got nice issues though, at least; like, someone's like, "Thank you so much. I love the recent PR, but--"

**Bartlomiej Płotka:** "But I need to pay millions more", yeah.

**Mat Ryer:** "My kid didn't need to go to college anyway. He's probably smart enough, didn't need it." But that's nice that they're nice. Be nice on GitHub, everybody. That's the lesson there.

**Bartlomiej Płotka:** Yeah. And this is why I solved those issues, because you were nice to me. Yeah, exactly.

**Mat Ryer:** There you go. Yeah.

**Björn Rabenstein:** Even for features that are really non-controversial, if a package is used so frequently, you are really, really, really concerned about not breaking anyone, and that sometimes is weird, right? Also, when we added exemplars... Exemplars is also a huge thing, right? Perhaps we can talk about that later, but for now, it's just a new feature that we didn't think about before. Now we had to add new methods to an interface, and stuff like that, but we didn't want to break anyone... So now you need interface upgrades, like little Go tricks; they look weird if you just look at them in isolation. But if you realize, "Okay, I couldn't break the users of the old interface", then it perhaps makes sense. But you get this kind of cruft in the library. And I think we have been talking about a legendary V2 for many years. It has never happened... But also, like, you conserve weird coding patterns, back then in 2012, 2013...

**Mat Ryer:** Yeah.

**Björn Rabenstein:** Guess what we all thought?

**Mat Ryer:** For consistency.

**Björn Rabenstein:** ...channels are the coolest thing, right? So we put channels in the function signatures, essentially used them as concurrency-safe iterators, which, you know, that's not what they're supposed to be used for. But they're still there, because if you now just change it \[unintelligible 00:27:42.22\] is this much cleaner signature for the function. Now, please, all the code in the world, please change to that new function. That's pretty hard... So we still have those channels there. And if you think that's weird - yes, I agree. \[laughs\]

**Mat Ryer:** \[27:58\] Yeah. The cruft you mentioned is interesting, because in Go especially we pay a lot of attention to writing very easy-to-read, maintainable code, and sometimes we'll sacrifice performance, in the right place, for readability. And then whenever you have to then optimize, of course, you're doing different things, right? You're doing more complicated things, or you're finding little ways to save memory, or avoid allocations, those kinds of tricks. And then you end with sort of mess, and unusual bits, and things you wouldn't be very proud of maybe. But really, that's just the reality, kind of how it evolves. And I think the stability in the API is worth it, and I'm sure the community thanks you for the attention paid at that level... Because yeah, if this was a package that was breaking all the time, and you never knew what -- you'd end up with all kinds of horrible things when like a dependency used a different version, and things like this. So I think yeah, I can speak for everybody when I say thanks for that.

**Bartlomiej Płotka:** Yeah, lots of trade-offs that are there. And I think what's also cool about this is it's just one module. These days it's so popular to create instrumentation libraries with like 10 modules, because you want to be, I don't know, generic, or have different versioning across. It's really hard to consume. But I have actually a question, Björn, to you. So you kind of started this library, I presume... Have you been designing the APIs with optimization in mind and you did benchmarking, or you rather created the API so it functionally works, and only then maybe after a couple of years you were maybe optimizing implementation?

**Björn Rabenstein:** I didn't start it, right? I took over from the founders of the Prometheus project, Matt and Julius. They started this, and when I joined the team in 2013, I think, then one of the tasks I took over was this instrumentation library. And even back then, it started essentially with a whole rewrite, but I tried to keep the spirit intact.

Yeah, we thought a lot about optimizing, because we knew this is in every path, if you instrument your code; but often, we were wrong. And micro-benchmarks is a cool tool. Actually, my first GopherCon talk - that was at the second GopherCon ever, or third, I don't know. Back then, it was really, really exciting. It went quite well. This was essentially about how to implement a float in a concurrency-safe way, so that it doesn't kill your performance. It's a little lecture. I mean, this is perhaps why this talk went well, because back then we were all learning, and it was a little lecture on how micro-benchmarks can help you, and also covered those things. But yeah, it's of course all the stories about premature optimizations, and everything.

It's interesting how also later you realize, when your programs get faster and they want to increment this counter really often, how that is problematic. Then you have histograms where you want to increment pockets, and then you realize they have to be incremented all together, because otherwise you can get inconsistent results, if you collect your data at the wrong time. And thus, this created a whole talk for GopherCon UK, about all this concurrent programming, how you can do a lock-free atomic increment of all those pockets in the histogram. And yeah, it's kind of, even from an academic point of view, it's interesting, but it all comes with this warning, "Please do this for fun, but not in your production code." But if you do it in your production code, it should be really well justified; is this really in a path where all this complexity is worth it, and all the risk you take by doing this in the weird way? If you like, you can just go into the histogram code in Prometheus Client Golang. It's really weird, but it's also fun.

**Johnny Boursiquot:** So speaking for -- I like to sort of put myself in the shoes of a user of these instrumentation libraries, not necessarily a maintainer of them; that's sort of the lens we've been using for a little bit... So if I wanted to instrument my code -- so we've already teased out what instrumentation means to different tiers, with all the people that are concerned about observability, right? So if I'm new to observability, and I'm looking to figure out, "Okay, what does it even mean to instrument my code? What is it that I should be looking at? How do I figure out whether I should be measuring requests per second versus latency? How do I even approach this world?" And obviously, there are different libraries and different things; there's Prometheus, I have to figure out where that fits in my stack... There's OpenTelementry, and there's metrics, and there's this, and there's that, there's traces... How do I -- as a developer, when do I use what tool, and for what?

**Björn Rabenstein:** \[32:48\] I think there is a problem that - who knows if you use Prometheus for metrics collection? Perhaps you use something else, and then you want to instrument not just for metrics, but for all the other things. And of course, you have a lot of choices to make. And then there are a lot of efforts to unify this. OpenTelementry is definitely a huge effort of tying up all the loose ends, and it's really hard, right?

So the first question in a practical context is you should look at what your organization you're working in is doing. Often, they use some framework, right? They use -- whatever. Let's start with a web router. You have your favorite Go web router, or whatever. And then from there on, you can kind of inform that decision. At SoundCloud, we had -- most microservices at SoundCloud were running on the JVM, and they had... This is also like somewhere in the public, people talk about it, they advocate for that, right? I think it was called JVMKit, where they had all that framework, how to write a microservice at SoundCloud. And then they put instrumentation in there.

So just merely by using this framework, which you would use anyway, you were instrumented for traces, for metrics... You've got some logging, some standardized logging... It's all in there. We phrased this coin -- yeah, no, we coined the phrase that at SoundCloud it was easier to get monitoring than to not get monitoring. You couldn't avoid it, right? And that's -- for many developers, you're already in some framework. It may be a little software framework, or the framework of your organization. And there might be something -- or if there's nothing, you might just put the pieces in there and you could look for the right thing.

I mean, rarely you have like a greenfield approach. If you do -- I mean, that's also fun, of course. You start your first Go program, and then you could just link in the Prometheus Client Golang... It's like, they're very minimalist programs in the documentation where you can just link it in, expose an HTTP endpoint, and do nothing else and you already get metrics for all the Go runtime stuff, for some process metrics, that's more like an OS-level stuff... So you don't have to do anything to already get a ton of useful metrics out of your program. And then you can go on, you can do really low-level metrics instrumentation. I also have a talk about this somewhere in my portfolio. We might link this. But there's also a set of middlewares. I don't know, perhaps - Bartek, you can talk about the middlewares we have, because that's also very nice how Go does HTTP things, it plays very well with that.

**Bartlomiej Płotka:** Yeah. It's hard to mention, because you don't need to reimplement every possible metric instrumentation. So for example, if your application is doing an HTTP request, which probably 90% of applications do, you don't need to create a special separate HTTP request metric, or actually logline and trace as well. There are libraries that abstract this for you. Say you are using a standard HTTP library to create a server - you can just put a middleware, which is essentially a wrapper over your HTTP handlers, that will instrument automatically with very consistent metrics that are already -- someone thought through those to make sense, to make something reasonable.

\[36:08\] And actually, the other plus of it is that you are getting lots of observability for free. So someone probably already built some Grafana dashboards, and maybe alerts, and maybe recording rules for this information, right? So we think you already created from HTTP package in Prometheus Client Golang, which already does that... And I'm maintaining a gRPC library, because we are using gRPC a lot. It's a very popular protocol, and we have literally the same middleware. They are called interceptors, but essentially they are like wrappers over gRPC things that add metrics. But also, we have logging and tracing in this module we could link.

Break: \[36:49\]

**Mat Ryer:** Well, that brings us to a new segment that I've just literally made up, but the editors do a great job when I do this... It's time for "Explain it quickly". So I'm going to challenge you, Bartek, to explain exemplars as quick as you can. Exemplars. We mentioned them earlier. What are they?

**Bartlomiej Płotka:** Okay, quickest.

**Mat Ryer:** Go!

**Bartlomiej Płotka:** I think the easiest way to mention this - it is essentially an information that allows you to show an example situation that triggered some metric increment or metric latency observation, size observation, whatever you are measuring. And you can essentially -- usually, it's just a string, some characters and some timestamp, and actually an exact value of this example situation. Usually, we put there a trace ID to correlate with other signals like tracing, but we can put request ID, for example, to correlate with logging. You can put anything. But it's pretty useful for recognizing an example situation that is represented by this metric increase/decrease observation.

**Mat Ryer:** \[40:32\] Cool. Congratulations. That was very well explained, and pretty quick as well, which really gets into the spirit of things, so thank you for that. Okay. But you don't include an example in every case, right? Do you do this kind of randomly, or how do you decide when to emit an exemplar?

**Bartlomiej Płotka:** Björn, go for it. I can see you want to explain that.

**Björn Rabenstein:** Do I? \[laughs\] I'm not even sure if I'm the most qualified person for that, but anyway... if you use metrics to measure something that is essentially just a whole bunch of events, like your HTTP request, then metrics means you count them all together, you kind of aggregate along certain dimensions, and then you have this gigantic number of requests, but you can't save them all. So this is where an exemplar is coming from; it's just an example. So you pick one, and then of course, which one do you pick? Do you pick a one that represents a normal request, or do you pick one that's like an exceptional one? Probably you should do one of each, or something, but not too many of the regular ones, because they are boring. You just want them for reference.

That's actually a super-interesting question. We have a similar thing when you do like logging or tracing, where you do try to collect every single event, and you realize you can't really do this. So the naive thing is I just sample every thousandth - complicated word... Then you realize, "No, that's just getting me the regular ones", but I want those rare ones that have like a long latency, or they fail, for some reason. So it's a super-interesting decision, and I think this is a hot topic of research right now, which exemplars do I actually want to have.

The current -- like, if you have a normal Prometheus histogram and put exemplars there, they just put the last observation that fell into each pocket, which I think is a pretty good heuristic, because you get exactly one exemplar for every latency band you're interested in... Which is a good start, I think, but I think this can be improved upon, and it will be interesting what the future brings here.

**Bartlomiej Płotka:** And I think it's important to mention exactly what you did say about sampling... We have to make sure the example you put there, for example, trace ID - it is the one that will be sampled and provided in your tracing backend, right? So those systems have to be, at some point, connected. And I made some demo. It is very possible with Client Golang to just talk to your tracing library to tell what trace ID you can put, as long as it's sampled. But of course, there is a problem if you have tail sampling and other complex scenarios. So it's definitely not a solved problem.

**Björn Rabenstein:** Yeah, we had those discussions a lot like you should... The tracing system should just sample those that Prometheus has as examplers. That's the one direction. Or the other is you somehow want to tell your binary to pick the exemplars according to what your tracing system has sampled. So it's a bit of - yeah, hen and egg problem.

**Bartlomiej Płotka:** Anyway, if you are using Client Golang, and you are using tracing, and you are not using exemplars, you are missing out. It's a very underestimated feature. Please use it.

**Mat Ryer:** There you go.

**Johnny Boursiquot:** When should you adjust your sampling? In the beginning are you just basically saying, "Okay, I don't want any sampling. I want everything, because I don't understand the system yet. I want to see -- I want to detect patterns", or something like that, and then maybe before production you pick something that makes sense, given amount of volume and cost, because the more data you collect, the more expensive it gets. So what decisions are you making about sampling, and at what point in time?

**Björn Rabenstein:** Bartek, you should be in a better position to answer.

**Bartlomiej Płotka:** \[44:07\] Sure. So it's really tough situation, because it's really around tracing instrumentation and libraries. Usually, sampling is not application-driven. It's really communicated or done on a collector level, or agents. And so there are different phases you can do that. So it has to be collaboration between every of those signals, which we -- what works for us is that literally we use that on our production system, is you have whatever sampling suits you, as long as it's not tail sampling. So then it's very easy to essentially provide a proper exemplar to the proper metric. As long as it's tail - yeah, this is kind of impossible.

**Johnny Boursiquot:** Can you define tail sampling?

**Bartlomiej Płotka:** Yeah, of course. So tail sampling is when you decide that you save--

**Mat Ryer:** You can do this slowly, Bartek. This isn't part of the segment "Do it fast." You can just take your time on this one.

**Bartlomiej Płotka:** So data sampling is when you decide if you are throwing a trace span, or you are saving it in your backend system, after even the request happened, because as we know, traces are really bound to some request. And it's very useful, because you can also then have a heuristic that will decide if you sample or not based on the result of the request. If it was slow, or if it's a failure, then probably it's interesting to sample that. If it's just a success, it's boring. Who wants to check successes, right? So \[unintelligible 00:45:31.12\] along those lines are tail sampling.

**Mat Ryer:** Yeah. Actually, the more I learn and hear about this, the more complicated it seems. Should everyone pay attention to this now? What point in a career should a young engineer really start paying attention to this? Because like you said, Björn, we used to -- we didn't really do it at all. It was kind of handled usually by somebody else in some other way. And Johnny, you mentioned that you use monitoring to find out if the system is doing what the business needs it to do. So it's pretty important, isn't it? Should this be a fundamental piece that everyone gets to grips with in some small way, at least?

**Björn Rabenstein:** I wrote this little piece in this 97 Things Every SRE Should Know About The Third Age of SRE, and it kind of ends with that sentence where we are really in the third age of SRE, if SRE is taught at universities. Just as if you're a computer scientist student and even before you get your bachelor you should have a few courses about, let's call it SRE... I mean, I don't know. Words are hard, right? And those things would definitely include that you need to instrument everything, and it's just essential.

If you are looking for your first job, you might even check out if that company you're working for is already doing this, because if you're experienced with that already, you could even evangelize this in an organization, and it's great fun, because it's so satisfying to see all the progress you made by just introducing this, right? I mean, that was fun back at SoundCloud, when nobody knew if the site is even up, and then even the simplest things you do, they are so much relief. So that can also be quite good. But if you want to learn something in your first job and you want a role model organization to work for, that might be a good topic to look at if they are doing proper monitoring.

**Mat Ryer:** Oh, good question for the interview there maybe. Johnny, aren't you an SRE? Aren't you literally an SRE right now?

**Johnny Boursiquot:** Yeah. And I just realize where I've come across Björn before. We were both co-authors in the same book, 97 Things Every SRE Should Know. \[laughter\] That's how we met.

**Mat Ryer:** Okay.

**Johnny Boursiquot:** Yeah.

**Mat Ryer:** That's a nice way to meet.

**Johnny Boursiquot:** I know, right?

**Mat Ryer:** The other 95 should -- you should all get together with the other 95 and have a big party.

**Björn Rabenstein:** But the weird thing is there are actually 98 things in the book, and mine is the 98th. So perhaps I don't really belong to it.

**Mat Ryer:** Is one of them a section on off-by-one errors?

**Björn Rabenstein:** Yeah.

**Johnny Boursiquot:** And the funny thing is, it's not one per author. There's fewer than 97.

**Mat Ryer:** Oh, that'll save you effort.

**Johnny Boursiquot:** \[48:10\] There's 98 in this case. Yeah. And then some of us wrote like two or three. \[laughs\]

**Mat Ryer:** I'll save the flies

**Johnny Boursiquot:** Oh, yeah, yeah. That's funny.

**Mat Ryer:** Oh, it sounds good. Well, I recommend people get that book. By the way, I've read it, and yeah, I genuinely do recommend it. Guess what? It's that time... It's time for Unpopular Opinions.

**Jingle:** \[48:28\] to \[48:43\]

**Mat Ryer:** Who has an unpopular opinion for us?

**Björn Rabenstein:** I have a very pressing unpopular opinion. It's because we already use that word that I don't like, and I hope I didn't use it, that's the O word, which is the word observability, right? I mean, my unpopular opinion is that I think this word, if it ever had a reason to be used in our profession here, it has lost all meaning by now.

I can very well understand why people came up with this word, because -- I mean, I already talked about this paradigm shift that people sense when this word developers thought monitoring was just an ops concern, and ops people were monitoring by just probing the HTTP ports or something, or pinging the server, or something like that, and staring at dashboards. And when people realized this is not enough, and then you started to realize there's so much more... You need it for other things, like just keeping your site up... We didn't even talk about things like capacity planning. And we talked about business a bit... And then all those different signals you have.

So I totally understand that some people felt this urge, "We need a new word for that", right? But then -- I don't know... Observability, arguably, is coming from control theory, and it's -- I mean, I think control theory is super-relevant for monitoring, but it's a rather specific theory, and just taking a single technical term from a theory and telling everyone, "This is now the new word..."

I'm more a fan of, instead of overgeneralizing a very specific term, just take the existing terms and appreciate and acknowledge that we have all very different ideas of what that term actually means, and try to find like a wider, more common understanding of that term, right? Now, of course, the problem was also that then people used this word observability to essentially say, "So you are just doing monitoring, but I'm doing observability of my product. My software project is an observability project, and yours is just a monitoring project." And then it became a bit of like a word to fight over. What that means is then the marketing people will pick it up, right? And then someone came up with the legendary three pillars of observability, which sounds so great. And, I mean, it evolves as a concept. It really conveyed some insight and some widening of ideas. But of course, everyone picked it up, the marketing people picked it up, and then it was used so much that it became like -- then people had to discuss why three pillars of observability isn't even enough. So you run in circles. You have the same thing, and -- I don't know. Of course, I was brought up at Google, essentially, where they just called it monitoring, and they had tracing before people knew what it was, and all those things... And we just called it monitoring and it just worked fine, right?

So for me, observability is like, if you want to use the term, it's something like a property of your system you want to have, but for me, it's a subset of monitoring, while most people think monitoring is something that might be part of observability, or not even. I don't know. What's his name? I always blank out on names.

**Bartlomiej Płotka:** \[51:59\] No worries. But I just realized, Bjorn, that I was always saying that monitoring is a subset of observability, and now we are saying it's opposite. I guess I was close.

**Björn Rabenstein:** Yeah... Cory Quinn. Cory Quinn said-- he always says on his podcast, "Observability is the hipster word for monitoring." And I kind of like that, but I would say observability is the marketing word for monitoring, right? And if engineers call something a marketing word, it's probably doesn't mean anything good in a way, right? So I think if I use the word, it might mean exactly what I want, or it might mean nothing... And yeah, I just stopped using the word. I just use monitoring. And if you ever hear me use the word monitoring, I use it in the widest sense. It's not just Nagios probes, and it's not just metrics. It's everything.

**Johnny Boursiquot:** Do you use the words serverless?

**Björn Rabenstein:** I do use the word serverless, but it--

**Johnny Boursiquot:** So, yeah... \[laughs\]

**Björn Rabenstein:** Bartek and I just discussed yesterday -- or was it today? Yeah. No, it was today. It's a long day. We discussed how there are serverless applications that are not really serverless, and then there are the true serverless applications that nobody really caters for, because it's so rare that you have this pure use case. But yeah, I mean, words are fluid, right? We have to embrace that. But it doesn't become better if you add more words to the mix, and then very aggressively push them.

**Mat Ryer:** Well, we'll be tweeting out that opinion to find out, once and for all, if that is indeed unpopular or not. Bartek, have you got an unporpular opinion?

**Bartlomiej Płotka:** Oh, yeah. Do we have a time for my unporpular opinions?

**Mat Ryer:** We do. It depends. How long is it?

**Bartlomiej Płotka:** It depends, yeah. Let's see. Alright, so, quickly...

**Mat Ryer:** Let's measure it.

**Bartlomiej Płotka:** So I was thinking a lot -- I have many am power opinions, but some of it that I would truly want to, I don't know, inspire others is that... Stay with me on this. It might sound childish and unprofessional for the start, but... I think the Go language is the best foundation and platform to program every software in the world. And I really mean it, from embedded systems, robots, browsers, mobile devices, machine learning... Configuration even, like infrastructure as a code... And I mean it, because in my experience, I was working with many programming languages - Pascal PHP, C++, Python... I mean, yeah, many, many. Even niche ones, like \[unintelligible 00:54:17.11\] And the reason why I stayed and I have been working with Go maybe seven, eight years, and I still love it is -- I mean, there are many reasons already stated in \[unintelligible 00:54:28.11\] so let's not repeat that, but the point I want to make is that it's very powerful to keep this Go language as a foundation to create more specialized tooling, right? And you can have a lot of benefits by just keeping this foundation to inherit simplicity, reliability patterns, tooling, like for example IDE integrations, documentation building, auto-completion...

Some of it is that, for example, like - yeah, JSON as a language for configuration. Maybe it's good, but I don't have hints when I kind of point my fields of this JSON on JSON nothing kind of hints me what the structure actually implements. And Golang already had that, right? So why not reusing this and building on the shoulders of giants? And I really mean that.

We used configuration in my past job to build kind of configuration for infrastructure in Go, and it wasn't perfect, because there are some features of the language that maybe are too much. You have for loops, you have error checking, and you have a little bit of boilerplate, but if you refine the language, maybe specialize it a little bit, then it might just fit the use case just very well. Why we are creating totally new languages from scratch, like CUE or Jsonnet if Go is almost perfect? A little bit is needed to do to perfection.

And maybe the last example, embedded systems I mentioned. Of course, garbage collection is not very efficient here, but there are already implementations of manual allocations. I think Dgraph created a special allocator. And there's even Vlang, which also kind of removed GC, but kept some of the features that Golang did.

\[56:14\] So we might have maybe a version of Go that has Rust-like memory ownership, and that'll be amazing, because we keep other features instead of kind of living with totally different decisions that the Rust community made for other stuff, that maybe I'm happy with. So that's my unporpular opinion here.

**Mat Ryer:** Well, I'll genuinely be interested to see if that is unpopular with our audience, because maybe a lot of people would agree with you. I don't know.

**Björn Rabenstein:** The Go fans should all agree, right?

**Mat Ryer:** Go fans.

**Björn Rabenstein:** But I disagree, for one. I think it's a truly unpopular opinion, because I disagree with it. \[laughs\]

**Bartlomiej Płotka:** Great.

**Mat Ryer:** Fair enough. Okay. I'm afraid that's all the time we have for today, but this has really flown, and that's how you know we've had a good conversation... So thank you so much for that. We heard all about monitoring there, and observerbility... The myth of Prometheus - very interesting, the origins there of that story, and as well as exploring the exemplars and the good kind of practices and things. So I think it was honestly genuinely very helpful. Thank you so much to Bartek Plotka. Bartek, will you come back sometime on Go Time?

**Bartlomiej Płotka:** I would love to. Yeah.

**Mat Ryer:** We'd love to have you. Björn Rabenstein, also, will you come back?

**Björn Rabenstein:** Yes, sure. It's one of my favorite podcasts. And if I'm in there myself, even better.

**Mat Ryer:** Is it?

**Björn Rabenstein:** It's boring for me then, but it's a great honor...

**Mat Ryer:** Yeah. If you remember everything you've said, that's boring. So if you can try and forget it... Or just listen to it in a couple of years. But yeah, if you just said that you'll be back, that'd be great.

**Björn Rabenstein:** Yeah, I'll be back.

**Mat Ryer:** Thank you.

**Björn Rabenstein:** I should say it with the Terminator voice. Yeah, "I'll be back."

'**Mat Ryer:** Yeah, that's just your normal voice... Isn't it, Björn?

**Björn Rabenstein:** Sometimes, yeah.

**Mat Ryer:** And of course, Johnny Boursiquot. Thanks, Johnny. It's always good hanging out. Björn, good luck with finding John Connor. We'll see you next time on Go Time.

Outro: \[58:05\] to \[59:55\]
