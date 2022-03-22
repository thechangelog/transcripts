**Mat Ryer:** Hello, and welcome to Grafana's Big Tent, a podcast all about the people, community, tools and tech around observability. I'm Mat Ryer, and I'm joined today by Matt Toback and Tom Wilkie, my partners in crime at Grafana Labs. Hello.

**Matt Toback:** Hello.

**Tom Wilkie:** Hello!

**Mat Ryer:** So let's start at the beginning then... What is observability?

**Tom Wilkie:** So what can we say about observability that hasn't already been said...? I think a lot of people in the modern observability market will talk about metrics, logs and traces, but it is definitely not metrics, logs and traces. I don't think observability is any one technology or tools.

**Matt Toback:** Is it different than what came before it distinctly? Is observability as a new term different than monitoring?

**Tom Wilkie:** I think so... Because monitoring was almost always about time series, about metrics, about numbers. And observability is not necessarily about that. I think monitoring is part of it.

**Mat Ryer:** But you still want to find out what's going on in your system, right? When you have a simple program, it's easy, because it's not doing that much, and it is quite obvious to see what's going on... But as systems get bigger and they're used by more people and they're more complicated, it creates these new problems where we're suddenly hidden a little bit sometimes from what's really happening. So observability has to be something around shedding some light on what's going on inside as well.

**Tom Wilkie:** When I started software engineering, 15+ years ago - I'm giving away my age - I was writing software that ran on a Windows laptop.

**Matt Toback:** You were ten.

**Tom Wilkie:** I was ten, yes. Dang. No, I was writing software that ran on a Windows laptop. So if I wanted to know what it was doing, I would attach a debugger to it, or I would -- well, that was what I did. Or actually, honestly, I'd just printf. And I think part of the change here is that, you know, there's a lot of people not writing software that runs on the laptop that's standing in front of them. There's a lot of people out there writing software that runs on big fleets of servers, sitting in someone else's data center somewhere.

**Matt Toback:** Because then it makes me think, is it who else can know when something goes wrong? So when you're writing your debug code, it was just firing off and you knew when it was broken; everyone else knew it was broken. So is it about others being able to easily see what's broken and what's not?

**Tom Wilkie:** Well, there's the kind of systems definition of what observability is, which I don't particularly find helpful. It's something along the lines of like the ability to infer the internal state of a system from its external outputs. And I'm like, "Oh, great. Yeah, that's helpful." So now we've answered that question. Should we move on?

**Mat Ryer:** \[laughs\]

**Matt Toback:** The clinical definition...

**Tom Wilkie:** So personally, I think that maybe is a useful definition of what makes a system observable, but doesn't necessarily describe what observability itself is.

**Matt Toback:** I think I really struggle with the idea too of when do you know that it's happened? When has observability occurred?

**Tom Wilkie:** When have you been observed...?

**Matt Toback:** Yeah.

**Tom Wilkie:** Yeah, who knows... Are you ever done? We all know software is never finished, so... The phrase I have been using now for 3-4 years to describe what I do - and I think some of what I do is observability - but it's like it's helping people understand the behavior of their applications and infrastructure. So my application does things, often things I didn't expect it to do, and I would like to understand what those things were, and why they happened. And I'm gonna need tools, technologies, practices, teams, people to help me do that. For me, that's what observability is.

**Mat Ryer:** If we wrote perfect programs, would we need observability?

**Tom Wilkie:** What do you mean "if"? Don't you already write perfect programs, Mat?

**Mat Ryer:** I do, but I didn't wanna \[unintelligible 00:04:00.04\]

**Tom Wilkie:** \[00:04:02.14\] Is this why you're asking the question of what observability is...? \[laughter\]

**Mat Ryer:** Exactly. I've never needed it. All my code just nailed it first time.

**Tom Wilkie:** And we're done. Mat is the most... I don't know what I was gonna say there.

**Mat Ryer:** Yeah. Another good way to write good code is to write unpopular code that nobody uses. It rarely has any bugs in it that anyone reports...

**Matt Toback:** \[laughs\] It never breaks.

**Mat Ryer:** Yeah.

**Tom Wilkie:** \[unintelligible 00:04:24.15\]

**Mat Ryer:** \[laughs\] Yeah.

**Matt Toback:** I've got the best album that no one's ever heard.

**Tom Wilkie:** I think a phrase that -- I can't remember who introduced me to this phrase... But I really like the phrase "system under observation" as well. It really makes it tight about what you're trying to do. "I'm trying to understand this thing here."

We talk about systems under observation all the time. "Now I'm observing this system. I'm observing Cortex. I'm observing Loki. I'm observing Kubernetes." Be very crystal about what it is you're trying to understand the behavior of.

**Mat Ryer:** Yeah, that's interesting. So do you have to know upfront, do you think, what you want to observe then? You have to think about this when you're writing a program even.

**Tom Wilkie:** I think you're verging very much into not what is observability, but how do I do observability, right? For sure, there are technologies you need to know upfront what it is that's gonna happen. Honestly, a lot of the technologies that we work with on a day-to-day basis need some amount of predeclaration of what it is you wanna monitor, what it is you wanna observe. Logs are a great example; you have to put the log lines in the code to begin with. But there's also a whole bunch of technologies out there that don't. There's a whole bunch of technologies out there that will automatically instrument the things that they think are important...

Think about a debugger. If I attach a debugger to a process, I've not instrumented that process ahead of time and I can still go in, set breakpoints, potentially even gather metrics. So the answer to that question is yes and no. It depends. A favorite engineer's answer, right?

**Mat Ryer:** Yeah, that's the answer to every technical question, actually. You'll always win if you say that.

**Tom Wilkie:** The thing I think is interesting about observability is how fast the area is moving. If you think about this as a set of tools, as a set of practices, then every day there's something new to learn; every day there's a new technique coming out; every day there's a project to learn about, that will help in one or more ways.

**Mat Ryer:** So does that make it quite a difficult thing to keep up on then? If it's constantly moving, how do people get to grips with what they need to know about observability?

**Tom Wilkie:** It's one of those things -- I don't find cooking difficult to keep up with, even though there's new technologies coming out all the time, because it's just something I'm passionate about. It's something I keep up with naturally, and I'm excited to read and learn more about all the time. I could see if you're not passionate about development tools and developer best practices, and developer productivity, then maybe this whole topic is a bit of a snooze fest.

**Matt Toback:** I like that cooking analogy a lot, because it also -- it's like, everything, when you see it all scattered out on the table, you're like "Wait, how does that come together? How does that work? How does this work?" And it is something that does feel like it's cohesive at heart; this idea of observability it's to me the ease with which you can bounce between these different things. You say metrics, logs and traces; I guess I just look at it as different granularity of data, or different -- I don't know, data represented in different ways, that's all kind of alongside each other \[unintelligible 00:07:38.02\] through.

**Tom Wilkie:** And I think the cooking analogy could be stretched ever further, because maybe metrics, logs and traces are the mother sauces.

**Mat Ryer:** What's a mother sauce?

**Tom Wilkie:** Uh-oh... Matt, what's a mother sauce?

**Matt Toback:** What's a mother sauce? There's four mother sauces, is that right?

**Tom Wilkie:** I thought there were five...

**Matt Toback:** Is there five?

**Tom Wilkie:** Quick, google "mother sauces".

**Matt Toback:** I think it's five, yeah. \[laughter\] But it's the base in which all sauces are on top of. A mac and cheese would be -- what is that, Tom? It's the one that begins with a b.

**Tom Wilkie:** That's a bechamel, right?

**Matt Toback:** Bechamel, thank you. I was completely spacing. Whereas like a tomato sauce - I don't know what it's called. I don't know my mother sauces.

**Tom Wilkie:** \[00:08:16.22\] It's called a tomato sauce, I think. It's definitely tomato.

**Mat Ryer:** Good name.

**Tom Wilkie:** Yeah. Or hollandaise would be another mother sauce, which is like eggs and fat. Like a mayonnaise.

**Mat Ryer:** Well, hold on - there's only five of these?

**Matt Toback:** Hollandaise?

**Tom Wilkie:** Sorry? We're not very good at podcasting. We all have to take it in turns to speak.

**Mat Ryer:** It's okay, they'll fix it in the edit.

**Tom Wilkie:** Can they leave that in though, as our first podcast?

**Mat Ryer:** They can also leave that in the edit, yeah. Tom, you can just pick who you want to have heard and carry on, and they'll figure it out. It's really clever.

**Tom Wilkie:** Oh, really?

**Mat Ryer:** You can just ignore me, basically.

**Matt Toback:** Oh, I like that.

**Mat Ryer:** Tom, you've gone really low-res, for some reason, on my screen.

**Matt Toback:** That was happening to me too, actually.

**Tom Wilkie:** That's just natural. In real life I've gone pixelated.

**Mat Ryer:** Oh, yeah. Okay. You're sort of self-censoring yourself. Let yourself go.

**Matt Toback:** He's gone plad.

**Mat Ryer:** \[laughs\]

**Tom Wilkie:** I had a big discussion about whether it's plad or plaid. Is it plad or plaid?

**Mat Ryer:** I don't think plad...

**Matt Toback:** Is it where you're from?

**Tom Wilkie:** I thought it was plaid, because of palladium. That was the shortening. And no, it turns out it's definitely plad, because it's a baseball reference.

**Mat Ryer:** Oh, okay. Where did they get it from?

**Tom Wilkie:** I don't know, isn't it a pattern of material?

**Mat Ryer:** Yeah.

**Tom Wilkie:** And what does any of this have to do with observability?

**Mat Ryer:** I don't know.

**Tom Wilkie:** Yeah, so we were talking about this being an interesting, fast-moving space, and it being like cooking. The other thing - once you learn in cooking that there's the five basic taste/flavor things, like sweet, salty, spicy, umami, sour... Did I get them right? Yeah, I think I got them right.

**Matt Toback:** I think so, yeah.

**Tom Wilkie:** Honestly, this also starts to think "Well, what would be the five basic tastes of observability?"

**Mat Ryer:** So logs, metrics and traces then become ingredients into this bigger thing around understanding what's going on in the system. What other things are ingredients, or what other tools, if we're sticking with the kitchen analogy...? Do you have like a big spoon, are there whisks...? Is that gonna work?

**Tom Wilkie:** This analogy sucks... Let's stretch it even thinner. I think you've definitely got best practices. I like to call them monitoring philosophies, that try to answer the question of "What should I instrument? What should I monitor?" And similarly, trying to answer the question of when there is a problem, what should I look at?" You've got a very, very large space of things. Imagine one of our applications, Cortex, is 15 different microservices, each one of them doing their own thing. So when something goes wrong, when I get paged in the middle of the night for error rates, for breaching our SLO, what do I do next? And it's very helpful to have a recipe here for what do I look at.

If you look at things like the USE method, this is saying for every resource in your system, go and look at, systematically, one by one, look at utilization, saturation and error rate. And effectively, you end up with a checklist. And I get paged, I've got a checklist I can go through, and the hope here is that by going through that checklist, I see something abnormal, I see something that I wasn't expecting, and this gives me a clue as to what's broken.

**Matt Toback:** How obvious is it to everyone else around you? So you know that, because you instrumented it, right? And you understand the concepts. So then a new engineer, on call, wakes up... How obvious is it for them?

**Tom Wilkie:** This is the beauty of these kinds of methodologies, these philosophies. If you identify, if you build dashboards and you structure your systems such that you don't actually have to know what it is you're looking at, but you know what a resource is, and you know what utilization, saturation and error rate look like, then hopefully that can make it easier for someone who's not familiar with the system to start to diagnose what might be wrong with it.

\[00:12:00.17\] At the same time, I don't think there's necessarily a panacea here. We live in a world where all of the models for how to develop software are literally designed to be broken on a day-to-day basis. We're always evolving the fundamental architectures, and any model that you express in a monitoring system or config management database will always meet a system that it can't fully model. This is one of my things I'm very keen on, not relying on these models of systems to automate extraction of insight, but instead relying more on heuristics. I'm not gonna go as far as saying AI, but relying on correlation of data between different systems to extract that insight. Really, more as kind of having engineers form hypotheses and providing you with tools to test those hypotheses. I think it's a different way of thinking of things.

We talked a little bit about the USE method, and how that's helpful... You know, that works when -- I feel like if you're looking at challenges that come from, let's say, hardware. If your code is perfect, and the reason your service is failing is because the NIC has failed, or the network is throwing errors, dropping packets. I think in a world of microservices, it starts to break down, potentially. Thinking of a microservice as a resource is a bit of a stretch...

At Google they had this thing called the Four Golden Signals, which is very much like for every microservice you should monitor four things. You should monitor the request rate, the error rate, the latency (the distributions of times it takes to process requests), and the saturation of that service.

I spent a couple of years at Google, and this was part of the stuff they teach you. Then when I left, I just forgot about saturation. I just forgot. So we coined this phrase as a kind of play on words against the USE method to be the RED method: requests, errors and duration. This is for every microservice, make sure you export these three metrics. And you know, there's a particular style of dashboard where you plot request rate and error rate on one graph, and latency on another graph, and then you kind of do a Breadth-first traversal of the microservice architecture to lay out each row. And this gives you -- one of the thing I love is all of the services within the company, all of the dashboards look like that. So I can dive into any service and start to get an idea for both its architecture and where the errors are being introduced, where the latency is being introduced. And then, of course, someone reminded me about saturation and I'm like "It doesn't fit into this model."

**Mat Ryer:** REDS... By the way, Tom, I know you invented, but it's rate, error and duration; not request, error and duration.

**Tom Wilkie:** Really?

**Mat Ryer:** Yeah.

**Tom Wilkie:** Thank you for correcting me on that, Mat. I don't know how I would have lived with myself if that had got into the final cut.

**Matt Toback:** Do we have a lot of dashboards to update now? \[laughter\]

**Mat Ryer:** Well, that's an interesting point then... So if you have a common method that you use all the time, you can then present that data in a common way, and there's obviously advantages to that. But the systems themselves can be so different; and as you said, it doesn't always fit. It depends. So how do you --

**Tom Wilkie:** I mean, a great example... The RED method would be absolutely useless with something that's kind of like an enterprise message bus style architecture. Because what is the thing you're measuring the request, and error...? And what does it mean to have a duration of a message? All of these things - you need different philosophies for different systems, I feel.

With anything -- with a queuing system, I think you need more of a queuing theory-based, kind of like "How long are my queues? What's the average wait time?" and these kinds of things.

**Mat Ryer:** Does this make it bespoke for every project then, essentially?

**Tom Wilkie:** I hope not... Otherwise, this gets really hard. I hope there are some common methodologies that can be applied to multiple systems, that maybe share a common architecture. But yeah, I think we're still learning what the best methodologies are, and how best to monitor things. Of course, as this gets more mature, this also gets more automated.

**Matt Toback:** \[00:16:02.11\] Is there a way to instrument it or a way to set it up in which there would be like a red herring, to where you said the RED method wouldn't be useful in some case? But then if you set it up and it was reporting, you would have this false sense of security. Have you ever seen that happen, to where you think that you've set it up properly, and instead you've just kind of missed it?

**Tom Wilkie:** Yeah, all the time. Customers might be complaining because your alerts haven't caught it, you go to your dashboard and everything looks green. You're like "Well, what's going on here?"

**Matt Toback:** They're crazy. \[laughter\]

**Tom Wilkie:** How dare they...? This is one of the other kind of -- I don't know whether you call it a philosophy or a principle, which is that you should always try and measure your performance as close as possible to the customer. At your edge. Maybe the closest you can get is a load balancer. Maybe you can actually instrument your customer's application on their mobile phone or on their website, or on their desktop, to actually report metrics back to you about their experience. And as long as you can get as close as possible, then hopefully your metrics and the data you're using to make decisions starts to actually be a decent proxy for the user's experience.

That gets you down into a whole other avenue of what I would still consider to be part of observability, which would be kind of SLO-driven alerting, and error budget driven alerting, and alerting on symptoms and not on causes, and a whole kind of how best to be alerted on when a system goes wrong.

I like to think of alerts as invariants, like statements about a system that should be true. The statement might be that this system should succeed 99% of requests, or all requests to this system \[unintelligible 00:17:44.18\] over a given window should be less than this. It's just a series of invariants, and the great thing about that is when they're broken, you get paged, to be like "Hey, this assumption you made about the system is no longer accurate."

**Mat Ryer:** It's like a failing test, isn't it?

**Tom Wilkie:** Exactly. And we're rambling all over the space here, but Amazon had a really good blog post about how for a sufficiently complicated system your integration tests and your monitoring effectively converge into the same thing.

**Mat Ryer:** That's actually quite interesting, ain't it...?

**Tom Wilkie:** We were having the cooking analogy ten minutes ago and we kind of veered off of it, but one of the things we said about the observability space is how quickly it's moving. And this has always been something that interests me, as to why is the observability space such a rapidly developing set of thoughts and ideas? What is it intrinsically about observability that makes the pace and the evolution and the rate of progress so high?

**Matt Toback:** Is it the "what it's observing" is moving so rapidly? I mean, it also feels like we're in the midst of what feels like a tectonic shift in the way the infrastructure is delivered. So if all that changed and that paradigm shifted, then all the tools that you need to figure out what's going on have to change, too. I feel like things that we used even five years ago feel ill-equipped, in some ways.

**Tom Wilkie:** For sure. That's definitely gotta be some of it. But if you look at software architecture as another area - we don't have fundamentally new ways of architecting software appearing every week... Unless you live in the JavaScript world.

Maybe the pace of innovation in software architecture is increasing, but we're still only seeing large shifts in software architecture from monoliths to microservices to functions-as-a-service at glacial speeds compared to shifts in the observability space.

**Mat Ryer:** I've seen your notes on this before, so I sort of don't wanna claim it, but it's a very good point, about the fact that this is data that's kind of recent. This is data that you -- you don't really care what happened a year ago, do you? Or even months ago. You really care about what's happening now. It's not like you're gonna get locked into legacy systems because you've got all your data and you've invested, and everything... So does that play a part?

**Tom Wilkie:** I think so, yeah.

**Mat Ryer:** Oh, do you?

**Tom Wilkie:** Yeah. \[laughs\] Funnily enough.

**Mat Ryer:** Yeah, I got it from your notes, yeah. \[laughs\] That's nice.

**Matt Toback:** Welcome to Big Tent, where it's Tom talking at us, \[unintelligible 00:20:10.00\] \[laughter\]

**Break:** \[00:20:15.24\]

**Tom Wilkie:** I think gravity of data is low in observability systems. Retention of logs tends to not be years, unless it's for audit and compliance reasons. If I wanna know what's broken with my system, I often wanna look at what happened in the last ten minutes, hour, couple of hours, and I don't really care what happened a few months ago. And yeah, this means if I want to try a new technology that's gonna help me understand what happened in the system, I only have to wait minutes, hours, maybe days before that technology becomes useful, if it is useful. But if you go and think "If I'm gonna switch from SQL to NoSQL", well, I need to architect my application, I need to change how I use the database, I need to learn how to deploy the new databases, I need to migrate my data... It's a six months, year-long process to migrate my database technology.

**Mat Ryer:** Delete all the SQL... There's no SQL allowed in those projects.

**Tom Wilkie:** It means not only SQL now, Mat. We've grown up beyond it just meaning not SQL.

**Mat Ryer:** Yeah, fair play. Also, this data is quite small, isn't it? There's lots of it, but often it's a number, isn't it?

**Tom Wilkie:** Right. The individual numbers themselves might only occupy like 64 bits, but there's a lot of them. I think we processed, we ingested 300 trillion samples into Grafana Cloud in the last 12 months.

**Mat Ryer:** Oh, is that all?

**Tom Wilkie:** It's a big number. I think it was a trillion. Ten to the 12th. Yeah, I think it's a trillion... Or not?

**Matt Toback:** How many commas is that?

**Tom Wilkie:** Twelve. Twelve zeroes rather, so four commas.

**Matt Toback:** Oh, yeah.

**Tom Wilkie:** Mat, are you actually checking if that's a trillion?

**Mat Ryer:** I was gonna, but I can't find the little \[unintelligible 00:21:59.17\] button on my keyboard. I've got a new keyboard...

**Matt Toback:** \[laughs\]

**Tom Wilkie:** Is it a mechanical keyboard?

**Mat Ryer:** It is mechanical, yeah, because I want everyone to know when I'm typing.

**Matt Toback:** \[laughs\]

**Mat Ryer:** It's important, I'm writing a message. Not to you, but... I'm writing a message. It didn't help; it just says 1e+12.

**Tom Wilkie:** Lovely. I think one of the things that makes this market, this space exciting is that pace, and I think that pace comes from low switching costs... Which helps. I like to make things. I like to make 3D printers, I like to make beer, and occasionally I like to make software. And it helps to be in a market where I can make a piece of software, and a day, a week, a month later lots of people can use it and get value from it. And that's why I like the observability space. That's why, honestly, having worked on databases before - I don't like the database space as much, because it's so much harder to get people to use your software.

**Matt Toback:** So then do we see the definition of observability continuing to widen, and will it eventually just become all-encompassing?

**Tom Wilkie:** Yeah, I think there's an argument here that observability as a space is increasing. We're shifting left into other tangential spaces earlier into the development cycle. So it's now no longer just about production, it's now no longer just about dev test. How do we incorporate observability best practices into the actual development process? And how do we connect the user's IDE to production instances and do live debugging? Is that still observability? How do we do load testing? Should that be considered part of observability?

**Matt Toback:** It becomes the everything then. So either that's brilliant or it means nothing. But then the other side - it does feel logical to me that response \[unintelligible 00:23:47.07\] is observability in my mind. And then you just come back to it. So it feels like a temporary pull into the real world, to then bring you back into the data.

**Tom Wilkie:** \[00:24:02.04\] And you've also gotta mention the typical OODA loops. I'm not gonna say OODA, because it sounds silly... But you know, where your observability system is helping you react, but is it helping you actually kind of change anything? So to what point do you start to put in the ability to modify the system, the ability to scale things, the ability to tweak conflict? Is that observability? Probably not, right? But if you did it all within the same user interface, or when you start observing changes to your CI and CD pipelines...

**Mat Ryer:** Yeah, to be honest, I think we will start to see that. It's not just instrumentation, but I do think we're gonna start to see developers becoming -- I mean, it already happens, really; the dev ops thing, where suddenly people who wrote the code have to be responsible for running it. And then suddenly we got serious. "Okay, hang on... This has got to be good. We need to actually instrument this code, we need to understand it properly..."

**Tom Wilkie:** Is that your characterization of dev ops, "They had to run it, so therefore they took it seriously?"

**Mat Ryer:** I think when it used to be someone else's problem... Like, what was that like, when you'd write something and then hand it over...?

**Tom Wilkie:** I don't actually know; I've never operated in that space, to be honest. Well, I guess I have, right? Very early companies, we built shrinkwrap software and sold it to other people, who then used it to run their software. \[unintelligible 00:25:30.22\] And it was horrible, because I didn't know why the software didn't work. I had no ability to learn from how the software operated in practice.

I see dev ops as the opposite. Coming from a dev background, it's actually that I want to operate the software, so I can learn more, so I can react quicker, so I can build better software. I feel like being on the hook for operating it helps me build software that is easier to operate, which helps everyone.

**Matt Toback:** So you're ObsOps?

**Mat Ryer:** That's easy for you to say, Matt...

**Tom Wilkie:** Well, DevOps are our observability platform; the developers that write Cortex, and Loki, and Grafana, and Tempo, run those systems in production for our users.

**Matt Toback:** How come we don't talk about SLAs with observability? You say that it should be close to where the customer is, and if ultimately we care about how we're delivering it, why isn't that the underpinning and everything works backwards from there?

**Tom Wilkie:** There is a school of thought that says the only thing you should alert on are your SLAs, or SLOs. Because an SLA is actually an agreement to hit an SLO, with penalties if you don't. So really, the thing we care about as engineers is what's the SLO; what is our objective, what are we gonna measure, how is that proxy to the user's experience, and how do we enforce that? There is a big school of thought that says that should be the only thing you monitor on. And my example being practical here would always be "That and disk space." You should always monitor disk space, because it's really easy to monitor, and the consequences of filling your disks up is really bad, so why would you not.

So there should be a little bit of pragmatism... I particularly dislike any line of reasoning that is "You should only do X. There is only one way of doing things." There isn't. There's always multiple ways of doing things.

**Matt Toback:** Don't use disks, just use the cloud, where disks don't exist.

**Tom Wilkie:** Yeah, you know... How can disks fill up if you don't have any disks?

**Matt Toback:** Wait, Matt, you're the person who trains robots that eventually will take over... So when you hear all this, do you think "Oh, okay, this is just something that eventually will become AI" or eventually this is not something that anyone will have to think about, and the instrumentation will just happen?

**Mat Ryer:** I've been thinking about that specifically. I think there's space for -- you know, GitHub Copilot, which is the tool that you have in your IDE and it uses all the open source knowledge to guess what you're gonna say. It also uses your local context as well. And sometimes it gets it wrong, but honestly, if you haven't tried it, it is shockingly good at certain tasks. And I feel like instrumenting code - I don't know, but I feel like you could look for patterns of how people are instrumenting their code at least, and learn from that, and then suggest things.

\[00:28:15.12\] I don't know if it's general enough that you'll be able to do that effectively and trust it, or if it's just gonna really help in humans to do that job... But yeah, on the other side, when you've got all this data, there are definitely some tasks where machine learning models or other statiscal models \[unintelligible 00:28:34.23\] will help in various ways. It is quite an exciting space, and we are paying attention to it at Grafana as well.

**Tom Wilkie:** But to devil's advocate on that... Why would you train a model to instrument your code, when you could just go in, recompile the code to add the instrumentation at runtime?

**Mat Ryer:** Yeah, I think it would be more about like you wouldn't think about instrumentation at this point. Things would be instrumented. And maybe you'd ask questions of this platform, and if it can't answer them at that point, it would then be able to answer them in the future; it will go and fix it. I don't know, something like that I could see working.

But you're right, the thing is, if it's so easy to instrument code - and it really is; I write a lot of Go code, and if I wanna implement things, instrumentation with Prometheus for my HTTP endpoints, that's a solved problem, and very easy to do. So if it's easy, it's no point spending that time with the AI to try and do it, unless you can kind of fix something at scale, or something like that, and do something for people on scale. But I think it'll be more about teaching people where to instrument and what's worth instrumenting. How do you decide what's worth observing? Because really, it depends on what the problem is, right? Everything's worth observing.

**Tom Wilkie:** So why not start from there then? Why not just say "Let's observe everything?" Why would you not try and gather as much information as possible about the system under observation?

**Mat Ryer:** Yeah, that's a good question.

**Matt Toback:** Does it get expensive? How do you justify that? You observe everything, but then are you willing to shell out the money if it was coming out of your own pocket?

**Tom Wilkie:** Well, that's personally been a lot of my motivation for systems like Loki; it's like, I want these things to be so cost-effective to run. I remember being told, "Don't say cheap." Cheap in England means cost-effective. Cheap in America means low quality.

**Mat Ryer:** Yeah.

**Tom Wilkie:** So Loki is not cheap, it is cost-effective.

**Mat Ryer:** Yeah. Affordable.

**Tom Wilkie:** It's affordable, yeah.

**Matt Toback:** Affordable. \[laughs\]

**Tom Wilkie:** Does that mean the same thing?

**Matt Toback:** Affordable is like a step above cheap, and a step below cost-effective. It's like a Honda.

**Tom Wilkie:** Honda or Hyundai? Because they're very different cars. The motivation for systems like Loki - not necessarily Loki itself - was to make it incredibly cost-effective to store logs. The cheapest way to store anything right now is cloud storage, so it's like "How do I basically get logs into S3 and make them queriable?" That was the mission behind Loki.

I feel very strongly about this... I think logs are my insurance policy. What I mean by that is -- you know, when I get woken up in the middle of the night, I need to go and reconstruct what happened; forensically, figure out what happened, what led for the system to get into the state that it got into, and break its SLO. I need input, so I need external-facing things I can measure, things I can read, that will help me infer the internal state of the system. For me, that's logs. Very often, logs will help me go "Oh, I can go trace through these logs, reconstruct the values of various variables, and get to the point where I can see it's actually what went wrong."

\[00:31:52.27\] So logs are that insurance policy. They're the thing that say "I put these in, and I know therefore sometime in the future when I have to reconstruct the state, I will be able to." And I like paying for insurance policies. It gives me peace of mind, it helps me sleep at night. But when insurance policies are very expensive, I start to be like, "Well, do I really need that? Do I really wanna pay that much for that insurance policy?" And that stresses me out.

When a procurement person at company X that I work for comes to me and says "We need you to log less. You're spending too much on logs", that stresses me out, because they're getting rid of my insurance policy and \[unintelligible 00:32:27.06\] I can't sleep at night.

So that's why I built Loki. It was to make it affordable to store huge volumes of logs, so that when I do get woke up at night, I can be guaranteed that I have that debug information I need to figure out what happened. And I think that mindset explains what we're trying to do with Loki, and what we're trying to do with Cortex storage, and what we're trying to do with Tempo. It's a very similar, kind of just make it as simple as possible to store as much as possible. And then that question that you asked earlier, of like "How do you decide what's worth observing?" suddenly becomes a lot easier to decide, because the barrier to entry, the cost-benefit trade-off just shifted.

**Mat Ryer:** Just a side note... Matt, please don't mute, because you're laughing, and react, and stuff, and I want to capture that. It's gold.

**Matt Toback:** Oh, okay. Yeah.

**Tom Wilkie:** Yeah. Can we just have ten minutes of you laughing and reacting?

**Matt Toback:** \[laughs\]

**Mat Ryer:** That's exactly what I was gonna say next. So in that spirit...

**Tom Wilkie:** You know what they say, Mat, great minds think alike.

**Mat Ryer:** Yeah, but they don't, do they? Famously, all the geniuses in the world thought like nobody else.

**Tom Wilkie:** Yeah. Fools never differ.

**Mat Ryer:** Yeah, there you go.

**Tom Wilkie:** And we got a laugh out of Matt. We'll post that into one of the -- just into a completely wrong point, like making a really serious point and Matt being just like "Hah-ha-ha!"

**Mat Ryer:** It'll be the same clip of him every time.

**Matt Toback:** It's like the Wilhelm --

**Tom Wilkie:** I was gonna say, the Wilhelm scream, yeah.

**Mat Ryer:** Yeah, Wilhelm laugh.

**Matt Toback:** Words aren't coming out today.

**Tom Wilkie:** \[unintelligible 00:33:49.28\] not recording a podcast, or anything...

**Break:** \[00:33:54.14\]

**Matt Toback:** I wanna talk about traces though, because I feel like two years ago you sat in Stockholm and you were like "Traces are this, traces are that, traces are amazing... Nobody uses them. And if you don't do it all, it's kind of useless." So plus two years, are we anywhere better, or do we just kind of like nudge each other and be like, "Yeah, yeah, traces..." \[laughs\]

**Tom Wilkie:** So this is a really interesting point, Matt, because I said earlier, the great thing about observability is the switching cost is super-low, and that means you can innovate loads. And I think that argument falls down when you start to talk about tracing, because the cost of adopting tracing is still too high, in my opinion. There's a lot of work in this area to auto-instrument certain languages and frameworks and so on, so that it's cheaper and easier to generate high-quality trace information. But at the end of the day, I think it's quite a hard problem to get traces. And if there is a hole in the middle of your trace, there's a service in the middle of your architecture that hasn't been correctly instrumented - then yeah, that trace is broken, and isn't necessarily gonna be as useful as it should be.

**Matt Toback:** Does Copilot do tracing integrations?

**Tom Wilkie:** I don't believe so...

**Mat Ryer:** I don't think so, but... You know, I bet if you start writing something -- I bet if I started instrumenting my code, Copilot would help me do that. So if there are examples out there of people doing things...

**Tom Wilkie:** So does Copilot write really buggy code then? Because most code out there that it's been trained on...

**Mat Ryer:** No, because -- I don't know. Well, yeah... It doesn't though; I don't know how it doesn't, but...

**Matt Toback:** It's the best version of ourselves. \[laughs\]

**Tom Wilkie:** Just a set of interns somewhere, responding to all the Copilot requests, writing code really quickly...

**Mat Ryer:** I'd be impressed if their interns are doing that...

**Tom Wilkie:** But yeah, so on the point of distributed tracing, Matt - yeah, a hundred percent; I feel like we're not quite living up to the promise of observability there, at the moment. That being said, the value of tracing is still very, very high. We've been on a journey with the systems that we run to get them to be very performant, and people have very high expectations of how quickly their dashboards load, and how quickly their queries succeed. And we would not have been able to achieve the latencies that we've achieved without distributed tracing. Because it's all in the long tail.

\[00:36:12.18\] The thing that dominates our ability to respond to queries quickly is that one query that took a long time. That shifts everything. We're effectively at that kind of many high nines latency; we're just measuring the max. So we're measuring the speed of the slowest query. Now, I need to have a trace for that slow query, so that I can figure out why it was slow, what went wrong, and then you can start to design techniques to avoid it. And it's almost always where we should parallelize it more, we should chart it more, we should cache it more, we should retry them when they're slow... These kinds of things. The techniques are relatively well understood, but it's where do I deploy them, to what service, to what path on the query path. And yeah, that's why it is still unfortunately in my opinion too much effort to get these high-quality traces. But when you do, that's how you control your long tail.

And then once you've got high-quality tracing, so many things become possible. You suddenly have a service graph, because \[unintelligible 00:37:09.07\] is all interconnected and you can plot... Now you start to find, "Oh, I didn't know this system was talking to this system." You can start to do things like check that your SLOs nest nicely. If you have interdependent systems with different SLOs, you know the dependencies between them, and then you can check that you don't have a tighter SLO than one of the systems you're depending on. You can do all of these great things, so it is super-valuable. But yeah, it's not as easy to adopt as I'd like it to be.

**Matt Toback:** And then it quickly kind of falls into, even in bigger companies, organizational challenges, right? Like, one team saying yes, and another team saying no, and then another team saying yes on the other side... The gaps can exist, right?

**Tom Wilkie:** I mean, we're in a fortunate position with the software that we work on that the interdependencies are minimal, and the organizational kind of will is there to have them fully instrumented. But yeah, it's super-tricky, for sure.

**Mat Ryer:** You'd hope that was the case at Grafana really, wouldn't you? Imagine if people are like, "Oh, I can't be bothered to do observability."

**Tom Wilkie:** Not naming names here, Mat... \[laughter\]

**Mat Ryer:** So when you talk about all this data, Loki making it really affordable to keep all this data around, then you've got loads of data... So then - this is another area where AI could definitely start helping us as well, is looking at that data for us and trying to give us insights. What other things can be do around that? How do we deal with that massive amount of data? Is it just that you go and look only when there's an issue? Should you be always watching dashboards? What do you think?

**Tom Wilkie:** Yeah, I mean, contentious opinion though... Obviously not, in my opinion. You should not be staring at dashboards in Grafana. And I honestly think -- you know, you go into offices and they've got big screens on the wall, and more often than not, it's a Grafana instance on there. I actually think that's like a counter-example. I mean, it's very pretty, it looks good, but it's a distraction. I don't wanna pay engineers, and I don't wanna spend my time staring at a dashboard, trying to figure out if something's broken, when I could have written a piece of code that will do that for me. And that piece of code is called an alert.

**Matt Toback:** It's like the most rudimentary form of alerting.

**Tom Wilkie:** Yeah.

**Matt Toback:** It's like alerting v1, more or less. It's like, "Look at that, and then use your brain and your visual CPU to tell me and shout out loud when something goes wrong."

**Tom Wilkie:** What happens if that person is sick that day?

**Matt Toback:** Yeah. Well, then the system is not down.

**Tom Wilkie:** Your alerts don't work that day. That's not -- I don't think you should stare at dashboards. I think you should use alerts. And I think that's a big, common mistake, especially with things like Grafana, which are so pretty and so easy to use, and so easy to build these great things, and show them, and you want to kind of share what you've achieved, that you can sometimes overindex on that.

**Mat Ryer:** Can you also overindex on alerts? Can you end up just with too many alerts, or...?

**Tom Wilkie:** \[00:40:03.29\] All the time. The amount of my friends are small... \[laughter\] I don't have any friends at work...

**Matt Toback:** \[unintelligible 00:40:12.11\] very small friends. You 3D-print them.

**Tom Wilkie:** They're small people, yeah. \[laughs\] No, the number of my colleagues and friends who just have pager overload... And they've done the right thing, so they don't stare at their dashboards, but then they build an alert for absolutely everything. You can always tell when this is happening. Two things. Either they're getting paged and they look at the phone and go "Ah, it's not important." Well, then why did it just interrupt you?

The other thing is if you get paged for something that is important, and you also get ten other pages for the same problem; every layer of the stack is firing. I'm like, "Well, did you really need all those ones in between? Could you not just have the one at the top?" So this is where the whole -- I think we alluded to this earlier... You should always alert on symptoms, not on causes. Except for disks filling up. That's the exception that proves the rule. You should always alert on symptoms. Get those symptoms as close to the user as possible. Use SLOs. And then you get to the really interesting space. Use error budgets. So allow a system to fail a certain amount.

The example I always give here that kind of highlights it for me - we agreed on an SLO with the customer very early on; we're like, 99.9% of writes should succeed within 100 milliseconds. And the system hit that all the time, except for when it didn't. So we built an alert that said "If 99.9% of writes don't succeed in less than 100 milliseconds, page me." "Oh, you've gotta design a window", so we said, "Okay, make that window five minutes." We got paged loads. Loads, like probably five or six times a month. And I'm like "Why are we getting paged?" Because at the end of the month I go and run a month-long query to say how many requests succeeded in less than 100 milliseconds, and the answer was always like eight nines of requests. All the requests, basically, succeeded. So effectively, I was getting paged when I was within my SLO. And I'm like, "Well, this is dumb."

Bjorn from Souncloud, Prometheus, Google fame, he kind of explained to me, "Well, you need an error budget." And instead of effectively alerting on breaching your SLO within a small window, you wanna alert on breaching your SLO in increasingly larger windows using some kind of multiple. What you're actually alerting on is the rate at which you're using your error budget. And I was mind-blown when he explained this. We implemented this in our services, and our pager load and the pager fatigue that went with that just disappeared.

**Matt Toback:** So then it feels crazy to me that we could talk about observability and we \[unintelligible 00:42:38.16\] about what are the tools, and what's this, and what's this, and this is how you should instrument it... But these are the things that actually feel like it makes it worthwhile, and then everyone has to learn those things independently. Because that to me feels like it should be as baked in as "Here, drop in your Prometheus and start collecting data."

**Tom Wilkie:** I agree. To the extent that it's still -- you know, you need a relatively powerful monitoring system to be able to build alerts that look like this. This is not the kind of thing -- I mean, I don't wanna annoy any of our Graphite users in the audience, but I wouldn't know how to even start building this kind of alert in Graphite. So I think we're getting to the point now where we have the level of sophistication we need in our monitoring tools, in our logging tools, in our tracing tools even, to build these kind of sophisticated, next layer of value on top of them. And I think error budget-based SLO alerts are one of those great examples.

**Matt Toback:** How would we even ship that? Not us specifically, but how would you even ship that, just that way, with something you kind of got out of the box? Or at least that you knew that you should have it in the box...

**Tom Wilkie:** There are already projects doing this, which is really cool. There's a project called \[unintelligible 00:43:42.06\] by Matthias, who's one of the Prometheus maintainers, and that does this out of the box. You configure it with your SLOs and it basically generates these really high-quality alerts.

\[00:43:54.00\] There's another project called Sloth, which is an awesome name, by a chap called Javier. I was just talking to him today, actually. And again, you give him (his tool) a definition, and it will generate out dashboards and alerts for these.

**Mat Ryer:** Does it do it really slowly? Because I'd be disappointed if that was fast. \[laughter\] Maybe you could put it in sloth mode...

**Tom Wilkie:** That's the opposite of plad, right?

**Mat Ryer:** Yeah, exactly. There's only one thing slower than slow...

**Matt Toback:** SLO Ops.

**Mat Ryer:** Sloth.

**Tom Wilkie:** Sorry, I was really slow to get that.

**Mat Ryer:** That's alright. Yeah, SlothOps.

**Matt Toback:** We should coin SloOps, which is SLO ops. SloOps.

**Tom Wilkie:** Well, actually, I've been working on a project to -- we do these internally, we've generalized build functions to generate these alerts and dashboards... But we use a language called Jsonnet to do it. So I've been working on a project that I'm probably gonna open-source by the time this comes out, called JSLOnnet. This is why we don't let Tom name things.

**Matt Toback:** It also occurs to me that SloOps, if you read it out, it's sloops... That's funny.

**Tom Wilkie:** I think we should have SLOs as a service, or SLOaas.

**Mat Ryer:** \[laughs\] That also means a different thing, depending on which country you're in.

**Matt Toback:** That's a different podcast.

**Tom Wilkie:** So we've just really done a meander through some of the observability space. We didn't really talk about OpenTelemetry, we haven't talked about eBPF, we haven't talked about continuous profiling, something we're really excited about... There are so many areas, and this is why I'm so excited about observability, and why I'm excited to be doing this blog po-- this is not a blog, is it?

**Mat Ryer:** No, I don't think so.

**Tom Wilkie:** Are we writing right now, or are we talking?

**Mat Ryer:** Is this what it feels like? Is this real life...?

**Matt Toback:** This is inside a blog...

**Tom Wilkie:** But this is why I'm so excited to be doing this podcast, because I'm hoping to invite people like Javier, people from the other tools and technologies that we've discussed, onto the podcast, to really talk about what makes them different, what makes them exciting, why we should be using them, and how they're gonna make a developer's life easier.

**Mat Ryer:** Yeah, I'm excited to have those conversations, too. I love the fact that this podcast isn't gonna be just selling Grafana tools; it's not a product --

**Tom Wilkie:** It isn't going to be selling Grafana tools at all, Mat. Not "just".

**Mat Ryer:** Yeah. Well, we talk about them, of course, because they're relevant... But yeah, that's one of the things I like about it. So yeah, you're right, there's lots of other things in the future of observability that are worth chatting about. Pick one of those things maybe; tell us what you're excited about.

**Tom Wilkie:** I know Frederic is talking on a lot of podcasts at the moment about Polar Signals, his new company that's investing a lot in continuous profiling, and has an open source project around that, so I'd love to invite him on. I think continuous profiling is something I'm really excited about, because it's not going to suffer the same challenges that distributed tracing has. It's gonna be a much lower barrier to entry, much easier to get started with, and hopefully much shorter kind of time to value, time to insight.

Shall we describe the dashboard of the week?

**Mat Ryer:** Oh, this is our new regular section that Tom came up with for our podcast. Remember, this is an audio-only podcast... It's time for Dashboard of the Week. In this segment, Tom Wilkie, who is, as far as I can tell, a grown-up professional man, is now gonna describe his favorite dashboard on a podcast.

**Tom Wilkie:** \[laughs\] Ouch!

**Mat Ryer:** What's your favorite one this week? Which dashboard has caught your eye this week, Tom? You're not happy with that intro. I can sense.

**Tom Wilkie:** No, I love it.

**Mat Ryer:** Oh, you liked it.

**Tom Wilkie:** I think we should play that intro back every week as we do Dashboard of the Week. \[laughter\]

**Matt Toback:** I wanted the \[unintelligible 00:47:33.18\]

**Mat Ryer:** Yeah. \[laughter\] There we go. We can use that when we run out of time.

**Tom Wilkie:** Yeah. The dashboard of the week I'd like to talk about this week is the SLOs dashboard.

**Mat Ryer:** Mm-hm. What is that?

**Tom Wilkie:** Can I share a screen on this? Oh, I can.

**Mat Ryer:** You can share a screen, but genuinely, this is a podcast. We should remember that.

**Tom Wilkie:** Hey guys, I shared my screen. So this is the one I wanted to share. What do we think? It's pretty, isn't it?

**Matt Toback:** \[laughs\]

**Mat Ryer:** I actually think it is very pretty. It's very green...

**Tom Wilkie:** Well, that's because it's our SLOs, but... I really like the use of structure and color and the fonts.

**Mat Ryer:** \[00:48:11.18\] Yeah, fair play.

**Tom Wilkie:** Matt, what do you like about this dashboard?

**Matt Toback:** Me Matt?

**Tom Wilkie:** Yeah, Matt 2.

**Matt Toback:** I like that. I can see a lot without having to scroll.

**Mat Ryer:** I like scrolling, so I like the fact that you can scroll on this. I love scrolling, because it feels like I'm going somewhere... So yeah, I'm down for this. I'm all over this one.

**Tom Wilkie:** The other thing I really like about this dashboard is how you can click on it and it takes you to other dashboards.

**Mat Ryer:** Oh, yeah. That's a sort of hyperlink technology you've got.

**Tom Wilkie:** Yeah. Patented, I think.

**Mat Ryer:** Yeah.

**Tom Wilkie:** And in particular, this SLO is my favorite SLO.

**Matt Toback:** You're at 105% of your predictions.

**Tom Wilkie:** Yeah. This is also the service that Matt is responsible for.

**Mat Ryer:** You're doing very well if you're at 105%. You know, it's better than good, isn't it? I mean, talk about exceeding expectations... When your SLO goes above... Oh, it's not performance review period, so I'm wasting my breath, but... Let's remember this for then.

**Tom Wilkie:** Okay, and that was Dashboard of the Week.

**Mat Ryer:** \[laughs\] That definitely needs its own theme tune. \[laughter\]

**Matt Toback:** \[unintelligible 00:49:14.18\]

**Tom Wilkie:** How do I stop sharing here...?

**Mat Ryer:** Yeah, it'll be a spin-off. A Netflix special.

**Matt Toback:** So where did we get? We got to observability is easy, it's modern, it's rapidly moving, you should do it...

**Tom Wilkie:** I think it's exciting. I think it's a good time to be a software engineer, both with all the tools that are being built for you, and being a software engineer building those tools.

**Matt Toback:** I think that's the one thing that we missed here, and maybe it's because we're talking to people who are doing it, but... I think what we missed is the point of it is to not have to spend as much time fixing stuff, and to know when to fix things, and then only spend time fixing it when it's actually down.

Tom, in your mind, what's it in pursuit of? It's the pursuit of more efficiently \[unintelligible 00:50:00.03\] I don't know.

**Tom Wilkie:** The thing I think a lot of people miss is like - yeah, if you're meeting your SLO, exceeding your SLO, you've got room to move, you've got room to maneuver. Should you be maybe taking a few more risks? Should you be launching more often? Should you be -- I'm not gonna say "Do less testing", but... What could you do to move faster as a team, to move faster as a business?

**Matt Toback:** Oh, I like that, because then basically you're saying instead of it just being a defense mechanism and holding the line, it actually shows you where you can push harder.

**Tom Wilkie:** Exactly.

**Matt Toback:** Oh, that's cool.

**Mat Ryer:** Yeah, that is cool. It's so true about testing... You can definitely write too many tests, and they stop being useful... The same as bad alerts; you ignore them, or delete them, or whatever. I like that too, the positive side of what we get from this. It's not all negative, is it? Just because things do go wrong...

**Tom Wilkie:** Now we need to think of a way of closing the podcast, because this could just go on for hours.

**Mat Ryer:** Well, I can do an outro.

**Tom Wilkie:** Did you play the music backwards? It'll say \[unintelligible 00:50:59.07\] if you do that.

**Matt Toback:** Paul is dead...

**Mat Ryer:** Maybe, Tom, you could do the \[unintelligible 00:51:05.01\] That's the sound that we've run out of time. And that sound tells us that we've run out of time for today, but what a great conversation. Thank you so much. I've learned a lot. I hope our listeners did, too. We talked about everything. I think we started at sauces, bechamel, velouté, tomato etc.

**Matt Toback:** Oh, now you know them.

**Tom Wilkie:** Now you've googled them.

**Mat Ryer:** Exactly. It's a learning podcast. And the USE method - utilization, saturation, errors... The RED method, Tom, which stands for...

**Tom Wilkie:** Rates, errors and duration.

**Mat Ryer:** Correct. You did get it wrong earlier, so...

**Tom Wilkie:** I'm allowed to.

**Mat Ryer:** Yeah. You invented it, mate. So thank you so much for joining us, and we'll see you next time, on Grafana's Big Tent.

**Outro:** \[00:51:56.03\]
