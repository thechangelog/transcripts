**Mat Ryer:** Hello, and welcome to Grafana's Big Tent, the podcast all about the people, community, tools and tech around observability. I'm joined today by - it's only Matt Toback. Hello, Matt.

**Matt Toback:** Hi, Matt. What do you mean "only"?

**Mat Ryer:** Yeah, no, it's just understated; it's just like "I can't believe it's you, really, in a lot of ways..."

**Matt Toback:** It's how you say it, it's not what you say. "I can't believe it's you! You're here!"

**Mat Ryer:** Oh, right. Okay. I can't believe it's you...!

**Matt Toback:** You're like, "You're here... You're here."

**Mat Ryer:** Yeah. Well, don't worry, it's not just me and you. That would be obviously tiresome for both of us. We have a special guest joining us today.

**Matt Toback:** That would be tiresome for both of us!

**Mat Ryer:** That's how you say it. You're right. \[laughter\] Today we're joined by Nayana Shetty from Lego. Hello, Nayana.

**Nayana Shetty:** Hi, Mat, and Matt. \[laughter\]

**Mat Ryer:** Yeah, just one would suffice. We'll share it. Happy to share. And you are the principal engineer who loves talking about SRE and microservices, right?

**Nayana Shetty:** Yes. I think over the years I've been in teams where we've built microservices, and when you scale up and have hundreds of microservices, how do you then make them reliable and keep them reliable? That's what I'm interested in.

I was working at the Financial Times, where we had all of these hundreds of microservices, and how do we manage it there. And now I've moved to the Lego Group, where we're going through massive digital transformation. And here it's like we want to build these hundreds of microservices, so should we care about reliability now, or can we think about it in ten years' time, when we have these microservices? So yeah, that is my context to how site reliability, microservices, all of these work together.

**Mat Ryer:** Yeah, because it did use to be kind of an afterthought really, didn't it? Which is why I think SRE is short for "Sorry", right?

**Nayana Shetty:** That's one way of looking at it. I always think of it like "Sorry, I don't understand why people don't think about site reliability in the first instance", or "Sorry, I don't understand why people would build this in such a way that it is half broken, or you don't think about the future of this product, and you are very close to reinventing the wheel every few months if you went in that direction." So yeah, sorry is probably one of the ways of looking at it.

**Matt Toback:** Just even on a personal note, I'm excited that Nayana is here and joining us because we met in 2018 for the first time in an attic in Amsterdam... Which - when said that way, it doesn't feel weird at all, right? \[laughter\]

**Nayana Shetty:** I mean, we were talking loads of monitoring, Grafana, and Graphite, and all of those things... So yeah, attic didn't make a difference then, so...

**Matt Toback:** But it was wild, because we planned GrafanaCon EU in 2018, which was technically our third Grafana Con, but was kind of our biggest up to that point, and the most what felt well-produced. It was in the middle of an arctic chill... Do you remember that, that the canals had frozen over?

**Nayana Shetty:** Yeah, I had struggles getting back home... It took me two hours, where it should have probably taken me only half an hour to get home.

**Matt Toback:** Oh, man...

**Nayana Shetty:** So yeah, I completely remember that.

**Matt Toback:** And we were in this stage where Tom had just joined the company, we announced it on stage, the acquisition of Kausal; the entire company fit on stage, it was 25 people when we said kind of goodbye at the end; there's still this photo that circulates here where everyone is just kind of shoulder to shoulder, the whole company.

But I do remember - you stand out to me, us being up there, kind of in that breakout room, talking about what you were trying to do with the Financial Times... And it feels like you kind of continued in this natural progression, in this natural journey. When you think back to you then, how did you see the world?

**Nayana Shetty:** \[06:15\] At that point we were investigating -- we had quite a lot of monitoring tools at the Financial Times, and I was working on the team that provided monitoring as a service to other teams... And my head was going mad thinking "Okay, how do I as a team with 4-5 engineers be able to support these 20-30-odd engineering teams who all want monitoring?" I'm there using from Nagios, to Zabbix, some Graphite, some -- I think there were very few installations of Prometheus at that point... And it was like "How do we get all of these different use cases together, and how do we get them on a platform which could work together?" And it made me -- I was worried at that point, and three years later or four years later, looking at it, it's like...

**Matt Toback:** You're still worried. No... \[laughs\]

**Nayana Shetty:** I mean, I have moved on from the Financial Times, so I'm less worried about the Financial Times monitoring systems, but I still worry about the same use case. I see it here as well in the Lego Group, where there's different monitoring tools that we've got across the organization, and it's "How do we get them all together?" and "How do we say a single story that everyone could understand?" rather than every single team trying to solve the same problem. So it's still very similar, but probably we have better tools and processes in place that can help us... So that's how I see it.

**Mat Ryer:** Yeah, something you said earlier stood out... This idea that you're like "Why did you build it like this?! If only you'd built it differently, we'd be in a much better position now."

**Matt Toback:** \[laughs\] "If you only did it right", is that what you're saying?

**Mat Ryer:** Yeah, but that's the question... When should we start caring about this stuff? When should we start worrying about how are we gonna operate this?

**Nayana Shetty:** I think this kind of relates to how I've moved in the journey in my career, and stuff. I started off as a test engineer, just doing some manual testing, then moved on to doing more QA, more quality-related things rather than just testing... And over the years I've seen the transition in a lot of organizations as well, where they've moved to this shift left, and test early, release as small as possible, and continuous iterations, and stuff. So all of this I think kind of leads to that point of "How do you make your future better?"

And one of the quotes I've often used is being kind to your future self. How can you make your life easy in the future? Think about that today, when you're building whatever you're building. And that comes with -- if you're building a new product, think about "Do you even have to build it? Can you just look at what's in the market and re-use it?" If it's a non-differentiating thing, then why build it? If it is a differentiating thing - yes, put your heart and soul into it. But then when you're doing it, make sure you think about the sustainability aspects of your product, and not just today what the customer would get.

I've often used this carrot and stick kind of approach in teams, to show the benefits of what you could get out of thinking about monitoring, observability upfront. Usually, the carrots are like "You build it in the right way, then you can actually forget about your systems, because they will take care of themselves." And the stick approach is often "If you didn't do it, then you have to go into the routers, or all of those other things that comes with making a system more observable and keeping it sustained once it's up and running. So yeah, I think that's what I've used in the past to actually help teams nudge in that direction.

**Mat Ryer:** Yeah. I mean, you know, I would be kind to my future self, but I'm too busy dealing with all the stuff that my past self left me to do... \[laughter\] So I don't know.

\[10:15\] So that's the thing - if you think about how it's gonna be, where it's gonna be running, the realities of that... If you think about that, the earlier, the better, almost, isn't it?

**Nayana Shetty:** It is that. And it's also that - yes, you are fixing things from yesterday; but if you don't fix it and leave some goodies along with it, then tomorrow you're fixing today's problem. So you're still in that vicious cycle. To get away from that vicious cycle I think you need to actually step back sometimes and put that extra effort.

I remember one of the tech principles we had in the Financial Times for ft.com was -- I've forgotten this... \[laughs\]

**Matt Toback:** It's okay. As we're talking about the past self and future self - is it okay that I've completely forgotten about observability and now I'm just on a personal journey and I'm thinking about all the decisions made, and yet to make, and how to provide goodies for everyone? \[laughter\] Or for me? I don't know. I forgot that part.

But Nayana, the carrot and stick, can I ask you - has there been a stick that you've seen people try to use, that just didn't work? Or not didn't work, but either was too harsh, or just kind of like -- not ill-intentioned, but ill-executed?

**Nayana Shetty:** I think it's about the motivation factor behind doing something. That's how I saw the carrot and stick. So the carrots were the motivation factors that we were providing to teams, saying "If you did something right and if you thought about how do you monitor something, how do you add alerts in place, and how do you make sure it's auto-recoverable where possible, and stuff, then you don't have to worry about it." That is more of the motivation for the team to be like "I can be really proud about what I build, and I don't have to think about it again."

But at the same time, we know that every team has these deadlines to meet, and there are product owners who would have their own feature set to build, so it's that kind of scenarios where you actually still need the stick to help the teams be like "Look - I mean, yes, we understand your pressures, but this is more important as well." And I did remember the quote, and it was "Slow down to speed up." That was one of the tech principles we worked with.

Basically, yes, you can go at 100 miles per hour today, but then if you don't build it in such a way that you have put those measures in place, then tomorrow you have to break and stop. But if you slowed down and went at, say, 60 miles per hour, you're there for the long run, and you would go on longer. So that's how I would see some of this stuff.

**Mat Ryer:** Yeah, that is so true. We actually built a little project before Grafana, we built a project management tool called Pace. And it was trying to get across that exact thing, which is that you feel great going at a thousand miles an hour, but there's important things to do along the way... And it's hard to retro-fit a lot of this stuff, so thinking about it upfront sometimes can save you.

It's a bit like how you design for failure as well. In the perfect world all the messages flow perfectly and there's no problem, but in reality it's way more messy, things fail... So idempotency and things come into play, where you may design expecting this is gonna fail.

I do write Go code, and Go has error handling as a kind of explicit feature. There are values that are just returned as the second argument to functions, and things like this. And that frustrates a lot of people, because they're used to exceptions or something, that's just sort of automatic... But it forces you to think about what's gonna happen if this thing fails, and that's a great discipline to get into.

**Nayana Shetty:** \[14:14\] And I think it's a myth to think that your system won't fail... Like, always build your system in such a way that it will fail. If it doesn't, then you have a problem. \[laughs\] So make sure you add those checks in place, so when it fails, it can smoothly recover.

**Mat Ryer:** Yeah. I know some companies that have that as part of the proper testing approach - literally, things will break on purpose; it's a first-class concern that they have. And it is that thing of -- I don't know, is it just ego, that people think "I'm so good. I'll write this, it's gonna be great"? What's going on?

**Matt Toback:** It can't be... Honestly, it can't be. We've all known and experienced it enough... Do you think?

**Mat Ryer:** Yeah, I don't know... But the thing is, when I'm writing code and it doesn't work, it's shocking how quickly I'm like "There's something wrong with the processor." \[laughter\] "The processor is not working. Or physics has changed." I'll go to "Physics has changed" before it's my fault. But it turns out I just did a capital letter where I shouldn't have.

**Nayana Shetty:** I've been in teams where they do pairing, and those mobbing sessions and stuff... They have kind of helped in sense-checking people's egos a bit, and being like "I'm not the best." And when two people talk about it, I think it does help think "Yeah, that is the reality that we live in, and this is what you need to consider."

**Matt Toback:** Is there anything that you would -- even like you were saying before, that progression between being in manual testing, and then Q&A, and then moving to SRE... Was there like a moment where it clicked, where people just started incorporating testing into the code? Do you see the same progression happening in observability, to where there'll be some moment and some kind of click where it just becomes part of it, as opposed to the separate thing that happens afterwards?

**Nayana Shetty:** I have seen it work in some teams, and... A lot of teams I've worked in are all autonomous teams, so they can basically build how they want, using whatever technologies they want. What has often helped teams like that is having some sort of guardrails which actually says -- and also being aware that not all applications need the same level of checks and monitoring and all of these... So being aware that "Okay, there is a level of criticality of my app, and if it is a highly critical app, then let me put all of the things in." And if it is a less critical app, in that case you would just have maybe just a simple health check. That would be good enough. You don't need to go all \[unintelligible 00:16:51.23\] And one thing that we had when I was working for FT was you always have at least a basic check on all your apps, otherwise -- like, we used to get this service operability score for our applications, and the score used to go down when we didn't have some of these things in place. That was a nice measure, where people thought about it from the beginning, rather than as an afterthought about some of these.

But what could happen in these kinds of scenarios is people go all-in and they just say "Oh, I'm gonna monitor everything, have all my logs..." You don't need to go all \[unintelligible 00:17:29.22\] on this. There's a limit to how much you need to monitor as well. And understanding the criticality of your app and then building your observability around that is probably something that teams should think about.

**Matt Toback:** How would you -- if a team was listening to this and they were trying to understand the criticality of the app and then make decisions around it, if you had them sitting in a room, how would you explain it and say "Here. Start here. Do this"?

**Nayana Shetty:** \[17:54\] I think it depends on the business criticality. If it is a highly business-critical application, which means if it went down for, say, more than 15 minutes, then we wouldn't be in business - if it's that kind of app, then you need to have your alerting in place, the right level of logging in place, which actually gives us any of the audit records that actually us what's happened with the applications. And then any sort of health checks.

So there's probably like two levels of monitoring that we should think about. One is the application-level monitoring, and then there is the system-level monitoring. Being able to figure out where the problem is soon enough is something very critical when it's a 15-minute recovery thing. But if it is an application that's less critical, then maybe just having the application-level monitoring is good enough, where you could take longer to actually investigate, look into the logs and actually figure out where the problem area is, and stuff.

So I would suggest teams to think about how critical their app is, and that is something the business should help them with, not something that the team just decides "Oh, this is the most critical thing."

And once you know the business criticality of something, then it is coming up with some sort of checks saying "If it is a highly critical system, then we do both application, as well as system-monitoring." Otherwise just one of them, based on your use cases, and stuff.

In the past I've spoken about the USE method, and RED method that we could use for these kinds of things... I prefer using RED method or Google's four signals; it depends on what your team's needs are and what fits into your use cases. So you would use the RED method, which is rate, error and duration for every single application that you build. And it's very easy to see that in a microservice world where you have different kinds of applications, you have the same three parameters that you're measuring across all of them, so it actually helps the team analyze -- irrespective if that belongs to your team or any other team, you just know where the problem is.

And the same with systems side of things - you would go with the USE method, which is utilization, saturation and errors, and you would do this for the CPU disk or network and all of those different areas, and you basically know where the problem is, and it's easy to find out.

I would say it is hard, it takes time, so invest based on how much returns you would get on these when you put these checks in. That is something the teams should be mindful about when they are investing in monitoring and alerting.

**Matt Toback:** Is the primary counter-balance in your mind the effort that it takes to keep this monitored well, or is it also cost? Do you think about the cost to operate, or the backend?

**Nayana Shetty:** It is the cost, and at the end of the day it should be the cost to the business, as in "How much does having the system down cost us?" and you basically work backwards from there, saying "If this was down for 15 minutes, it would cost the business so much", which means we as a team should be investing more time in actually getting the right amount of measures so we can solve the problem or narrow down the problem quickly.

I would always focus on the business value rather than the team's individual product value, and stuff... But yeah, it depends on -- like, if it were an internal system... Again, one of the teams I was in, we were building monitoring tools for other teams. So we don't have real business value as such as our team, but we were supporting teams that had really high value systems. So that kind of meant that we had to think about the application-level, as well as system-level monitoring on our systems, and stuff.

**Break:** \[21:50\]

**Mat Ryer:** I love that advice of "Pay attention to the value you're gonna get from the effort that you put in." I like monorepos - I'd just like to put that out there; I love monorepos. And the reason I like them is because you can have a pull request that has a unit test, some backend code, maybe some API changes, frontend code in there too, hopefully with some frontend tests maybe... And it's nice that that all gets applied to the system in one go. Does that also apply to this sort of field or the instrumentation of that? Should we be having those kinds of conversations at that point, so that we kind of think about it as we go?

**Nayana Shetty:** \[23:59\] I would love to say yes, but I've not seen a team do it really well. I can see the challenges -- like, when you have this monorepo and everyone is contributing to the same central repository, there is a challenge that the parameters that you would think about for your product and your monitoring systems might be different to what another team would be looking at. So there is a challenge with how do you then look at this as a product that we sell to customers. You have to think about capability monitoring maybe, rather than your individual product monitoring, where you're thinking about "What is a capability that I'm providing to the customer?" And those should probably be things that we have at a central level, and we do it as in when we add new features, we make sure we don't break the monitoring that we've got across the capability.

But on a single individual product team's perspective - yeah, I don't know how much value it would add, so it depends on that, I guess. I'm not sure. Have you seen it work in your teams, or something?

**Mat Ryer:** Well, we have at least the conversation... When there's a PR for like a big feature, we will chat about it, and say "What do we need from this? What's going on here that later we're gonna need?" And it is that thing about "Be kind to your future selves." But I don't know that we've got that right yet, or anything... Because in a way, we don't really know what's important upfront necessarily. But sometimes you do, and I like that there are guidelines that we can follow to give us a good foundation, and then of course, we're gonna have to fine-tune it depending on our particular case.

**Nayana Shetty:** I agree, yeah.

**Matt Toback:** All this to me starts to distill down into -- it's some amount of like if you are doing the centralized monitoring, or there's a level of that, and then you have to communicate this down to these teams and you have to get them to buy in... Where do you do that? Or even how would you suggest someone else do that well?

**Nayana Shetty:** Central teams pushing things is -- like, irrespective of it being monitoring or anything in general is really hard. It should always be driven by -- like, what I've seen work really well is the ones that are driven by value-add to the individual team itself.

As an example, when we were building this Amazon Linux, like a baseplate image that everyone could apply, and they can run their own EC2 instances. When they had this, what we said we will do as part of it is we said "You're going to get monitoring --" I think we were pushing logs to Splunk in that case. So you would get that feature for free. You would get authentication for free. Have those kinds of things that you will get for free as part of whatever feature set you would give, and that has often been a nice way to drive teams to be like "Oh, yes, I like that, and I will do it."

**Matt Toback:** Right. Make it so easy that they would rather adopt it, rather than trying to do it themselves.

**Nayana Shetty:** Yeah, exactly. Another example that came to mind was we had this central repository for -- like a CRM system which we had to enter all of our system information in. Basically, it was like a -- because we had so many microservices, we had a central system where you could go in and query for any particular system with something \[unintelligible 00:27:21.00\] and we would know if that system was live, was active, who was working on it, all of that information.

And what we did when we built this - we said "If you put the right information in this, then you would automatically have a dashboard that would show up only your team's monitoring in it." That was an incentive for teams to be like "Oh, if I did this, then I get my own dashboard. Let me do that."

\[27:47\] So I think it's that showing intrinsic value beyond just what you want them to achieve out of it. That's how I've seen it work really well in teams. So yeah, you need to have some sort of carrots to actually get people to move towards your solutions and stuff.

**Matt Toback:** Yeah, yeah.

**Mat Ryer:** Yeah, that's great. I think that applies to... Everything! \[laughter\] Yeah, if you make it easy and it's sort of a no-brainer... And one example of that is where we can -- like, if we've got APIs, we can just instrument on the endpoints very easily, in a simple way, usually with some middleware or something in the code. There's lots of packages that do this. I think there's probably space for more things like that, more of that for devs.

**Nayana Shetty:** Yeah. And I think it's the -- I would really want to see central teams be more mindful about this... Because as a central team, you're building these amazing tools, and at the end of it you kind of think "Oh, if I put a documentation together and self-service, everyone's gonna come and use it." But then each individual product teams have their own little agendas to work towards, and the product initiators do their own OKRs... All of those things. So this is like an extra bit of cognitive load onto those teams, which they can avoid if you were to do a lot more promotion within teams, saying "If you did this, you would get a lot of benefit", and it will take some of the risks that you have taken on yourself.

And also, it's that education piece of "You care about your product. We will help you care about your product." That's something to think about, I guess.

**Matt Toback:** Yeah.

**Mat Ryer:** So what are some common mistakes that we make when we're trying to do this? With the best intentions in the world, we want to do this properly, but are there any things you see that people misunderstand, or common mistakes, common gotchas that you've seen?

**Nayana Shetty:** I think knowing how much is enough is one of the things I've often seen, where there are teams who just put the basic thing available because it's there in a checklist somewhere, and then they move on... Which is probably not the best for your product. So it's being aware of the value of your product and what is the lifecycle or the journey that your product is going on. That is probably one of the things.

The other thing that I have seen and I've struggled a lot with is, like I mentioned, about this USE method and RED method to actually build your dashboards. It's very hard to get your network-related monitoring right, and the saturation for networks... Like, how do you do that? And get the wrong set of -- like, I've seen myself having a wrong set of dashboards and alerting, and wondering why this is going off everytime something happens, when it shouldn't happen.

So I think it's just being okay to experiment and continuously tinker your monitoring and alerting as you go along is probably something that teams should be conscious that -- like, it's not that you build it once and then it's there forever, but there is a continuous evolution that happens with your monitoring... Like how your feature sets go through that. You have to do the same with your observability side of things as well.

**Mat Ryer:** Yeah, yeah, as --

**Matt Toback:** Mat, can I answer, too?

**Mat Ryer:** Let me just check... No. \[laughter\]

**Matt Toback:** Oh, come on...!

**Mat Ryer:** Brutal, but... \[laughs\] Yeah, please, I'd love to hear what you think, of course.

**Matt Toback:** Okay. So Nayana, you were thinking about the value derived, and focusing on that for the customers... I do think that's a common gotcha, where you build all these tools and you're like "We did it! We did it! It's all there. All you have to do is this."

\[31:46\] I think the common gotcha is forgetting that you need to deliver something that someone can just adopt easily, like you said. It is a version of -- I was thinking like car parts, or legos, I guess... Dropping off like a collection of car parts and being like "There you go!" And you're like "I wanna drive. I get that I can get there, but you haven't helped me really at all." And you call left, and that's where the metaphor I think breaks, but...

But I do think there's some version of that too, stopping short of actually delivering the value to the person consuming it, as opposed to just dropping a collection of pieces that can work, but they have to do the last mile.

**Mat Ryer:** Well, in a way, what helps that definitely is gonna be this "You build it and you run it." We're not throwing this thing over the wall for someone else to operate... Which I know that actually lots of people do still do that. And there's a disconnect. When you are yourselves kind of running it, you're the customer of that data. So a bit like when you're dogfooding software, if you're building dev tools like we do at Grafana - we dogfood a lot; we'll use our tools a lot internally. That's how they're so good, frankly. It's not like we're imagining the user of this; we are the user, and I think that makes a big difference, doesn't it?

**Nayana Shetty:** Yeah. And also, I think one of the comments I've heard a few people say about this - build your code in such a way that you can debug it at three in the morning. It doesn't mean that you have to do it every day, but if it breaks at a time that you're not fully in focus, you still can get to it easily... And that is something that I think people should be thinking about when building their products, and stuff.

**Mat Ryer:** That's such a great point, I think... And that leads me to our next question, which is around drills. Should we be doing drills at 3 AM, and living that experience to see what it's like?

**Nayana Shetty:** Three o'clock is probably taking the Mickey out of people if you were doing drills... \[laughter\]

**Matt Toback:** Do people do drills? I guess they do, but it's probably not common, is it?

**Nayana Shetty:** I have seen it done, and I think it's a very artificial environment where the drills happen. One of the things we did when I was at FT was we had these incident drills. Basically, you emulate an incident and then you go about with the team "How do you go about actually figuring out where the problem is?" So you start with which alert it was, and then look at the traces, and then look at what the logs were... You go through the whole cycle of it. It was a way to ease the \[unintelligible 00:34:24.14\] support that we had within the organization, but at the same time, there were a lot of people who were not very keen of this. Because it's an artificial environment, people felt like that is not reality, so why do it?

**Mat Ryer:** It's because you didn't at 3 AM. \[laughter\]

**Nayana Shetty:** Yeah, maybe that.

**Matt Toback:** I think there's like a touch of maturity in actually embracing drills, whether or not it's artificial. It's that idea "Oh, this is artificial. This is dumb. We don't wanna do this. It's not gonna be like this in real life." And then you think about any kind of -- I don't know, any team environment or any kind of practice that you need to do, because it's more than just debugging the code. Everything is interconnected, and you want to be able to do some of these things more than once, so that way every time doesn't feel like you're the first time on stage. And it feels like you just wanna be like "Hey, what's the right analogy to make if you want to convince someone to actually practice?" I don't know...

**Mat Ryer:** Yeah, it's not the same... It's not the same, because you know it's a drill. Unless you're doing something where you literally break something and it's not really broken... Or maybe it is, and you're doing something kind of "That seems a bit extreme..." It is gonna feel different, but that still doesn't mean that there's not plenty of stuff to practice... Like practicing when you practice driving. There's an instructor next to you watching everything. That is a very strange situation to be in... But you still move the steering wheel and do the -- I don't drive, but there's a gear stick, I know that... And the horn...

**Matt Toback:** \[36:03\] You press the horn to go... \[laughter\]

**Mat Ryer:** Yeah, horn to go, and then you leave that on, so that everyone knows you're there. I do, because they need to get out of the way... \[laughs\]

**Nayana Shetty:** I think there's also value in -- the other way of looking at drills is like shadowing, and when there's an actual incident not having just one or two people involved in it. Yes, it might be the most critical thing, but having more people just listening and see what's happening, and just be there sometimes helps them understand "Oh, this is how I would go about solving this", looking at those people. So yeah, I think it's a mixture of drills and shadowing maybe that could work in teams.

**Matt Toback:** I even think yesterday - and I realize why I'm all fired up about this... I parsed through it. Yesterday I visited the sales team, and they were doing these workshops, and they were doing Radical Candor, which is all about feedback, and giving feedback, and getting feedback, and being able to do it well. And then you break out and you're like "Okay, yeah. Check, check, check. I get it. I could totally do that." And then you break out into these triads, and then you practice it. And there's a part of you that goes like "Oh, I don't need to do this. I get it. I get the concepts." And then you try and do it, and you can kind of feel yourself, like, places that are a little bit creaky, or maybe you don't quite get it as much. So I think it's actually where I'm fired up to where even if it is artificial, some of those joints might be either rusty, or creaky, or don't articulate well, and you don't realize that until you do it.

**Mat Ryer:** I think that was a rubbish point.

**Matt Toback:** We can cut that. Cut, cut, cut. \[laughter\]

**Nayana Shetty:** I think it's also a good exercise to do, just to test your documentation, if your documentation is up to scratch. When you've written something, you've written with good intent, but when someone's actually following it, does it make sense? It's something that the drills can actually capture. There's more than one benefit of having drills, I think.

**Break:** \[38:04\]

**Mat Ryer:** Nayana, you mentioned earlier this idea that if you do too much, you can overdo it and end up with basically alert fatigue... Just alerts going off. What do we mean really by alert fatigue?

**Nayana Shetty:** I'm going to give an example so people can relate to it. I was in one of the teams where we used to get close to 1,500 alerts on a weekly basis... We had around 80-odd microservices. So it wasn't like just one microservice, or anything. But then my team was three people looking at this, and it's at that point which you realize "Are they actually looking at this thing, or is it all just being ignored as just noise? Let's just ignore it." And I think it's that point where you start ignoring your alerts, is where you've gone to that stage where you can't take anymore alerts. You're fatigued with the whole alerting itself. And I think it's better to have less alerts, for the most important things, rather than have too many and try to filter it out.

One of the exercises we did when we have these alert fatigues and like a thousand-odd alerts is we consciously stopped some of the alerts to see who will start shouting. And it happened that more than 50% of these alerts when we turned off, no one actually shouted at us. Like, "Was that even important?" Going through that exercise on a regular basis, where you see if you're ignoring more than at least 10% of your alerts, then go and do something about it. Maybe turn them off, and no one will care.

\[43:16\] I think teams need to be conscious that it's okay to miss a faulty alert, compared to missing out on a real alert which would have cost us millions of pounds, or whatever it is. So I think it's being careful to put the right alerts in, and stopping at that, and not just going overboard with it. Let's take an example. We have Grafana in our systems, and we have alerting with Grafana. I have this tool, so I can put as many alerts as possible. Not going wild with it, but actually knowing where to stop. That's how I would describe this whole alert fatigue. And with time, it does happen with teams. So it's worth going back and auditing them and making sure you keep them clean as much as possible.

**Matt Toback:** I wonder if you could do a -- what would be the equivalent of a bug bounty for alerts? How do incent people to go and clean those up and celebrate being like "They're gone!"

**Nayana Shetty:** Oh, that's hard. What I've done in this is actually gone and turned them off myself, and being like "Let's see who's going to shout."

**Matt Toback:** Yeah. \[laughs\]

**Nayana Shetty:** And when no one shouts, you know that they're not important enough. So that is something that I've done, but I don't know how you would -- hm, interesting... Do you have any ideas?

**Mat Ryer:** We need some analytics, don't we, on the usage of it, really... Then we all can say "No one's looked at these alerts for ages." Or you could put a specific time on it if you want. I don't wanna design the application now... But yeah, something like that.

I like the idea that you should go back and look at them and pay attention to whether you still need them, and things. This is a little bit like how in GitHub or in your project management tool - if you have loads of stuff in there, most of it is just getting ignored. And in a way, it creates also this idea that you're so far away from being done... Which we of course are, but it sort of reinforces that.

So it is that thing of it's just so much there, it stops being useful. I like the idea that -- does it take experience though, do you think, to know what's useful and what's not?

**Nayana Shetty:** It could do... I mean, the more you see these things, you realize where it's useful and where not... And this is where I've seen some of the junior engineers and teams struggle, which is like - they start worrying about every single alert that comes on Slack, or whichever is your preferred tool, and they're like "Oh, what do I do? I've got this alert. It might be my change." But it might not be related to your change at all.

So I think it's something that a team should do on a regular basis as like a team activity or something like that, where they sanity-check their alerts.

One way we used to do it is any alert that we actually did anything with, we started putting some -- all of our alerts used to come to Slack, so we started putting some emojis on it, so we know which of them were actually things that mattered. And on a weekly basis we were like "Oh, there were N of these, which we did nothing with, so maybe we can get rid of it." It's very hard to get that feedback cycle on alerts, I've found.

**Matt Toback:** Mat, you need to collect the emojis and then feed it back. Does the IP go in the other way on emojis?

**Mat Ryer:** We do that in the Grafana Incident tool, but I need to tell the on-call team about that idea. That's such a good idea, because...

**Matt Toback:** Yeah, that is kind of fun.

**Mat Ryer:** ...you could collect that data and literally you then -- "Oh, hello!"

**Matt Toback:** You're like, "What does dancing penguin mean?" \[laughter\]

**Mat Ryer:** Yeah. It means it's cool. Who owns that idea, legally? I don't know...

**Nayana Shetty:** I do, because I-- \[laughter\]

**Mat Ryer:** It's a good idea.

**Matt Toback:** \[46:59\] Solved! \[laughter\] I wanted to quickly touch on - as you progress in your career, often you're going to walk into new organizations. And you're new to Lego... And everything today is just reinforced this thought that I was kind of \[unintelligible 00:47:13.13\] on this morning, which is all these things are true, all these methods are proven, and in some ways, it has nothing to do with the technology and everything to do with the landscape that you're walking into. And then you have to figure out how and what you introduce.

I guess I'm curious - how much about open source tooling makes it easier to transfer into a new organization, and even just how much -- how do you approach going into a new org having this experience, but then also not understanding how everything fits together?

**Nayana Shetty:** I mean, this is so relatable... I'm going through this now, given I've been in the Lego Group for only three months... And I care about monitoring and in general sustainability of products quite a lot. I've been looking at different teams doing this and thinking "Okay, this team has this Grafana dashboard to do it. This other team has New Relic and they're doing something with it."

I think for me, I was lucky that I was in a team that was building monitoring tools as a service, providing monitoring tools as a service to other teams, so for me it was easier to catch on to what is happening in different areas within the Lego Group. But I think what I fall back to is always think about what are the core aspects of monitoring. So it's things like logging, metrics, alerting, tracing, so notifications... Some of those core things. And it is looking at those aspects and thinking "How is the team solving these problems?" And where the team have used their tool, I have often just endorsed what they've got and looked into it. But where they haven't, I have often suggested open source tools in those use cases, because of two reasons. One, it's easy to get started and get going with it. You don't need any licensing and all of those kind of challenges that come with a proprietary tool.

On the other side, there's a lot of community that can help you getting started with the tool as well. So I think those are reasons why I would prefer -- like, when suggesting to teams, I would prefer open source technologies when it comes to this space.

As an example, when I was doing some experimentation for my own personal project, I could have gone with one of the tools that was already available in the organization where I was working, but then I was like "I mean, if I left this organization, I can't take that tool with me, so it's better to have it on more open source tools." In that case I used -- I think it was Graphite and Grafana that I used in that use case.

**Matt Toback:** Good choice.

**Nayana Shetty:** But while there is transferable skills within the organization -- like, as an example, the Lego technology, I think we have around 200 or 250-odd teams in it, and if these people within the teams have to move between each other, speaking a common language is quite important... And having that community outside of the Lego Group who can help us with this is quite important. I feel like that is where the power of using open source technologies comes from.

I have come from an organization where we were a very big advocate of open source technologies, so I probably would be singing the song of "Let's go all-in on open source." \[laughter\]

**Mat Ryer:** I'm interested then what's next, what's coming up, and how do you keep your finger on the pulse of what's going on?

**Nayana Shetty:** I often think less about tools and more about the capabilities that we really need in an organization. It could be anything from like what do we need in terms of system infrastructure side of things, or like the topic for today, more around observability. Around observability I often think the capabilities that we need are logging metrics. An organization can invest in having multiple tools for the same thing, or it could be one tool that does all of it. It depends on the kind of organization you are.

\[51:22\] I have often leaned towards what's happening in the DevOps communities or like in the monitoring communities to actually get insights from them, saying "Oh, there's--" I think two years ago was when I was introduced to Loki, which is the logging tool, and I got super-excited about this, mainly because we were using another logging tool within the organization which was super-expensive. And like "Do we use this super-expensive tool which has some bells and whistles which we don't use, or can we go with something like Loki?" And it is finding out capabilities that you care about, and looking at what is happening in that particular market.

Within the monitoring space, I think my preference within logging would be -- like, if you are in the AWS line, then something like AWS CloudWatch, or Loki, Splunk... These are a couple of tools that I have used in the logging space. You can use the same kind of tools for metrics as well, but there are better tools for metrics. Prometheus is really good. Or Graphite, which again, I have spent quite a lot of my career in Graphite, so I probably have a preference in this space, and see what innovation is happening in the Graphite space... But yeah, Prometheus is just probably another one which is really good in the time-series database side of things.

And then it's also to do with your metrics aggregation. So you have all of these different metrics and logs and everything that you're collecting, but how do you visualize them together? So you need something around the visualization layer, which is where Grafana or Kibana, one of these kind of tools would come in handy.

And finally, I think it's the whole -- you're doing all of this because you want alerting. So what do we have in the alerting space? Thinking about "Do I use Slack notifications? Do I use email notifications? SMSes? Pager duty?", whatever. And it's just making sure you understand the capabilities of what you're trying to solve, and finding core products in each of those areas. And it could be the same product that solves everything, or it could be different products. And yeah, I tend to lean towards communities and conferences to actually figure out what is hot in the market in places.

**Matt Toback:** Yeah. And what I really like about this is -- that's all kind of like through the lens -- or at least the way you think about it as like what are the problems that you're trying to solve for the customer, and what is the value that you're trying to provide. So even at that point, all of these could become sort of like -- it's not interchangeable, but you can solve the problem in 400 different ways. And I just really like that you started -- it feels like you started with that approach, to say "What do you actually need to do? What do you need to protect?" and then figure out how to do it. And I like that. That feels like the most transferable skill between company to company.

**Nayana Shetty:** Yeah. And also within teams. When there are so many different teams, and every team is autonomous to use their own tools... I think you need the core principles to be the same, irrespective of what tools they're using, and that's where I find having the capabilities and the principle layer set right would help teams figure out what is the best tool for their use cases and stuff.

**Mat Ryer:** That's amazing. Loads of great practical advice there. And you yourself have spoken at conferences on this subject as well. We'll put one in the show notes for people interested, but you can also google - or use any search engine; other search engines are available. You can duckduckgo and find -- just for your name, and you'll... Yeah, Nayana Shetty.

Well, unfortunately that's all the time we have, I'm afraid... Thank you so much - Matt Toback was here... Weren't you, Matt?

**Matt Toback:** I was. Is there anything that you wanna say to your future self, just before we go?

**Nayana Shetty:** Oh, I love that. I think it is "You don't have to solve all problems today. There are things that you can leave for the future to solve." \[laughs\] That is what I would say to my future self.

**Mat Ryer:** \[55:33\] Hm. It'd be more useful if we could send messages to our past selves though, because we could tell them what the stocks are gonna do...

**Matt Toback:** No... Because we know what happens, right? The space-time continuum... It's just not good.

**Mat Ryer:** Biff gets it doesn't he? Okay. We won't do it then. We won't do it then, Matt. Okay. Well, yes, thank you so much.

**Nayana Shetty:** I've enjoyed it. This is a topic that I enjoy speaking in general, so...

**Mat Ryer:** Are you speaking at any other conferences coming up? Or will you?

**Nayana Shetty:** No. Because I'm new to the organization, I'm just stepping away from speaking, so that I can gather some insights from the organization before I start speaking... So yeah, none.

**Mat Ryer:** But the videos of your past self are still available, of course, so I do recommend people check them out...

**Nayana Shetty:** Yeah.

**Mat Ryer:** Thank you so much to Matt Toback and our special guest, Nayana Shetty. I've been Mat Ryer (still am), and thank you very much for listening. See you next time on Grafana's Big Tent.

**Outro:** \[56:37\]

**Mat Ryer:** Have you learned how to play the riff?

**Matt Toback:** I have not yet. But I have time.

**Mat Ryer:** Okay. You should learn it.

**Matt Toback:** On the airplane to Whistler I'm gonna take the piece out. My seatmate won't be terribly happy with that, but...

**Mat Ryer:** "Please put your seatbacks and basses away. We're coming in to land."

**Matt Toback:** You could do upright in the seat, maybe...

**Mat Ryer:** You'd definitely get a ticket of like a double-bass. But you could also do Seinfeld links with it. You could make a little joke, a zinger to the staff...

**Matt Toback:** Ba dom ba dowm bum bum

**Mat Ryer:** Just do a bit of bass... That would be good, wouldn't it? \[laughter\]

**Nayana Shetty:** Yeah, that would be nice. \[laughter\]
