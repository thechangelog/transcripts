**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer, and today we're talking about making Go more efficient, and how best do we do that. I'm joined by Bartek Płotka, author of Efficient Go, which was released last month, principal engineer at Red Hat, and a Prometheus and Thanos maintainer. Hey, Bartek. Welcome back!

**Bartlomiej Płotka:** Hello. Hello, everyone. How are you?

**Mat Ryer:** Very good. Thank you very much. And you're calling in from London, right?

**Bartlomiej Płotka:** That's correct. Yeah.

**Mat Ryer:** Yeah. Cool. I'm also joined by Kemal Akkoyun.

**Kemal Akkoyun:** Hello, Matt.

**Mat Ryer:** Hello. You're a software engineer at Polar Signals, right? And also a Prometheus and Thanos maintainer, and you're currently building an open source eBPF-based continuous profiling solution called Parka. Welcome.

**Kemal Akkoyun:** Hello.

**Mat Ryer:** Great to see you. This is your first time on GitHub, I think, isn't it?

**Kemal Akkoyun:** Yeah, it is.

**Mat Ryer:** Yeah. Good.

**Kemal Akkoyun:** A bit nervous.

**Mat Ryer:** Yeah. Oh, don't be. I am a bit as well, just because of the sheer brainpower on this episode... I'm out of my depth. I'm also joined by Christian Simon. Christian is a software engineer at Grafana Labs, working on observability databases like Loki, Mimir, and the new one, Flare. Hello, Christian.

**Christian Simon:** Yeah. Hi there, Mat. How are you?

**Mat Ryer:** I'm good, thanks. Welcome to Go Time. It's nice to have you here. Let's get to know our guests a little bit, shall we? Kemal , what's your favorite drink?

**Kemal Akkoyun:** I guess I have two... One is single malt scotch, and the other one is coffee.

**Mat Ryer:** Oh, nice. Yeah. Do you have them together? there's the Irish coffee that we call it, if we mix them together...

**Kemal Akkoyun:** No. I have them separately, one in the morning and one in the afternoon.

**Mat Ryer:** Okay, we won't ask which is which... What about you, Bartek? That sounds pretty good, doesn't it?

**Bartlomiej Płotka:** Yeah, definitely. That's a +1 from my side as well, coffee and whiskey... And I got approval from my personal trainer as well. He said "Whiskey... Is it clean at least?" and I was like "Yep, clean. Just ice" and she was like "Okay, that's fine." So I think it's good.

**Mat Ryer:** Oh, wow. Yeah, that sounds like a good personal trainer... Christian, do you have a favorite tipple?

**Christian Simon:** Yeah. I think when I'm at home, I'm definitely more on the juice \[unintelligible 00:05:10.08\] basically, as I'm originally from Germany, so that's the drink there...

**Mat Ryer:** I see.

**Christian Simon:** But yeah, I think given the feedback from the personal trainer from Bartek, I think I might need to change that and revisit.

**Mat Ryer:** Yeah, no wonder you're not ripped... You're not drinking enough whiskey. Oh, you're from Germany, so -- okay, that's why we're doing an episode on making Go more efficient. Makes sense. That's the classic stereotype, everybody, which I don't recommend...

**Christian Simon:** Yes. People haven't lived in Germany.

**Mat Ryer:** \[laughs\] I don't know... Well, you have, haven't you, Kemal? Because you live there now. Do you like it?

**Kemal Akkoyun:** I really like it. I like Berlin. It's been five years... Learning to be a German.

**Mat Ryer:** Ja...

**Kemal Akkoyun:** Slowly.

**Mat Ryer:** \[00:05:58.26\] Nice. I think Berlin is a great city as well. GopherCon EU was there this year, so I got to go and hang out in Berlin, and we had a great time. That's the small talk over; the small talk section is now finished, okay? No more small talk now. Let's get down to business. I want to know just something initially... making code obviously more efficient - I think it's kind of the case \[unintelligible 00:06:20.26\] You don't use as many resources... It's actually sometimes like the greener thing to do as well, because you're using literally less energy, especially when you get at scale. But for sort of like people that are new to writing Go or they're just getting started, do they have to worry about the efficiency stuff from the very beginning? Is this something that you should just get it working first, and then you can make it more efficient later?

**Bartlomiej Płotka:** So there are two schools actually, right? One is saying that premature optimization is the root of all evil; it's like a very old saying that got very, very, very popular, especially in the '80s and '90s... And that was kind of claiming that engineers are playing too much. They're having too much fun of making those optimizations, and efficiency improvements... That at the end it didn't matter, and it actually make things worse, because the code was unreadable, unmaintainable, and changing it to be faster for different circumstances was harder, so at the end it was less efficient. So that's one school... And I think there are good truths to be learned from that. But nowadays, I'm kind of -- you know, maybe discussing in my book as well, but also in my talks, that sometimes we are too afraid of touching the efficiency topic. So we are always kind of putting that as like last step in your development practices \[unintelligible 00:07:45.00\] and those are excuses to not do this maybe a little bit extra additional work to make things faster and more cheaper to run.

So we can go deeper, but generally, yes and no. Generally, especially if you're learning, focus on readability, maintainability, and those kinds of first things that -- you have to learn how to make your code functionally running, so kind of like fulfilling your functional requirements, and then you can optimize it later. However, with time, and if your team is more kind of productive, and can learn more, and can use tools that we'll hopefully talk about, around how to make things more efficient, you can kind of like move this step sooner in your development process. However, you have to know what you are doing, so if you're new to Go, definitely don't even aim to make like code more efficient until you know you have to do it, and then you can learn how to do it. So that's the balance \[unintelligible 00:08:40.07\]

**Christian Simon:** I would definitely agree. I guess, as with many other things, I think a balance of the two is probably good, and kind of the better you understand your ability, your team's abilities, but also maybe the problem space... Like, let's say you attempt to rewrite something you think you understand quite good - I guess then maybe efficiency is some of the reason of that rewrite... While maybe if you're trying something completely new, you might just have the wrong assumptions of what you're optimizing against... So there's no one size-fits-all, I guess.

**Kemal Akkoyun:** Yeah, I totally agree for both of the statements... But I guess as Bartek put that, I belong to the first school. The original quote is from Donald Knuth, and it says 97% of the time. So I think that 3% sometimes makes the difference. And you can always determine that 3% by measuring things. In Go we have lots of tools around that, that you can actually measure and benchmark and decide maybe even from the beginning what to optimize.

**Mat Ryer:** \[00:09:45.04\] Yeah, so this is interesting then, and I kind of like what we're going to get into... Like, this idea that we don't really know what we can do to make it more efficient necessarily. And sometimes, even experienced engineers will have a really good idea, it'll be really obvious, but it turns out that it doesn't necessarily make an impact when he makes certain changes. So how do we know when we've got the opportunity, when we've found that 3% to make something more efficient? How do we know?

**Bartlomiej Płotka:** Well, we need to make some measurements. We need to observe our system under load, under kind of requirements we set it to be running with, and essentially observe what is causing the problem... And then generally, at what level of efficiency we are in. So those two things that generally I in my book am kind of mentioning - you need to assess your efficiency, you need to be able to assess your efficiency... Because perhaps you are actually fast enough; it's actually some other component that is causing the problem. Or something might be outside of requirements; maybe a request is going to your HTTP server written in Go, and it's actually a malformed request, and that's why things are slow, so maybe some safeguard check is enough.

So this assessment is one thing, and you have to kind of measure that. And that generally, in kind of observability space, we are going into. You have to measure it while running; either running on production, or locally, under your benchmark, we call it. So test, and experiment...

So assessment is one point. And the second point is bottleneck analysis. So once you know that things are too slow, so you generally know you are, for example, one second behind your expectations of the HTTP request, for example, you can go and find some tooling around observability that will tell you the bottleneck. So what part of my code is actually a main contributor for the problem? Maybe it's too slow. Maybe it's using too much memory. And that's a bottleneck, right? And there can be multiple contributors, right? Of course, it's usually multiple. It's not like only one of your programs using all the resources. But generally, there is this rule called Pareto, which is saying that it's usually 80% of resources used by 20% of your code, things like that. So generally, there is some bottleneck that this thing that you should focus first, to have the most impact. And bottleneck analysis is, again, something you can get from observability. We could mention it later on.

**Mat Ryer:** Does anyone disagree with that?

**Kemal Akkoyun:** Everyone agrees. Everyone works on observability and monitoring, so who can disagree...?

**Mat Ryer:** Yeah, exactly. Good point. Okay, so observability then... So this is literally like monitoring resource usage, or the time it takes to do things... Is there a limit, really? How do we know what to measure?

**Kemal Akkoyun:** I guess it depends on what kind of program or service that you're writing, right? Let's say you have an online system, and it's a request serving system, like HTTP or gRPC. Maybe you are putting this program as a service, and then we can talk about maybe service-level objectives. And what actually affects customers, like, what are your error rates? What are your latencies? Then from that, we can come up with certain metrics and start measuring or instrumenting our codebase.

This is one example, but we also have different types of systems... Maybe they're not online request-based systems, but they're batch processors, or offline systems, or some event processing system - then you need to consider other stuff. So everything starts with knowing your basic purpose of your system.

**Bartlomiej Płotka:** Maybe I will play like a devil's advocate here, Kemal... And I agree with you, but I think that the general misconception these days is that as a developer, you are giving me some solutions for SRE, for DevOps, for operator, that show me some kind of metrics of SLOs, and service availability... But I am developer; I don't care if the service is up or not. I care if my code is faster, because I'm paid for making the software better. Right? So how those tools kind of relate to me?

**Kemal Akkoyun:** By tools you mean like observability \[unintelligible 00:13:58.11\]

**Bartlomiej Płotka:** Like metrics of HTTP requests on my SLO dashboard - how can I use it for efficiency improvements?

**Kemal Akkoyun:** \[00:14:11.08\] This is your North Star metric, right? The most important one. Because think about - you are having a website, and you are actually serving a website, and the most important thing for your user is how fast it actually renders. Because psychology shows us there are some attention spans, and they are getting lesser and lesser every day... And so you need to be fast, right?

Or even before that, if you're serving that request with a success, you need to know that. That's why I always advise to start with these type of high-level metrics. But then - let's take latency, right? HTTP request latency; you're serving this website, but then you can drill down, like what does this mean for the system? What contributes to this latency? If you think of a tracing observability signal, it's a span, right? In that span, you have different spans, like different methods or different components in your system that takes time. And now you need to get in there and understand why it is taking that much time. Maybe you are doing a calculation that it's not that efficient in your hot path. Or maybe you're allocating too much memory, and you need to know about it. But it always starts with your high-level goal, and drilling down using different observability signals, and maybe instrumentation.

**Christian Simon:** Yeah, great. Exactly right. I was kind of challenging you... But generally - yeah, I agree; you can use the same metric, kind of pipeline. So the same client instrumentation in Golang, where you are either importing some library with this instrumentation, or you have instrumentation built-in, maybe Prometheus, maybe something else, maybe OpenTelemetry, and you have that built in... And the same thing that your SREs are using, your operators, or people who are running your software; maybe you are running it, and that's ideal. But sometimes you're not. And then as a Go developer, you could use exactly the same metric, for example HTTP latency, as your guidance, as your assessment value, if you are improving your code or not. So that's kind of like an important part of observability/monitoring here, that kind of can be composed into something useful for efficiency.

**Mat Ryer:** So say that you've got this setup, then, and you've got a good idea of some kind of metric on your code. And hopefully, what it's doing in production; because that's the other thing - like, it might work great on your machine, but once it's running at scale, for whatever reason, just the way it interacts in ways you just wouldn't expect maybe... So the environment's very similar. I think it's probably good advice. So so you've got that - do you like check that every time you do a PR? Is that something that you keep an eye on things to see if you've made a difference? Or do you just do it kind of periodically, like once a quarter you'll just have like "Let's do a performance check"? How do you approach it?

**Kemal Akkoyun:** We haven't jumped into that, but right now, I'm working on a continuous profiling tool. We haven't even basically defined the profiling, but let's say we define - profiling is kind of an observability signal. It's an action that you collect the resource usages of your processes that's running on your machines, right? And what makes it fun is this continuous profiling part. So you are profiling all these processes, and then you release a software; maybe you scale up, you scale down, but you always have these snapshots of memory usage or CPU usage in a timespan, right? And then you can actually check between versions if you actually changed something. So when you have a continuous signal like that, you can actually optimize or do something about any of these actions, right?

\[00:17:56.19\] Same goes for metrics. You have a latency metric, and you can define some SLO-based alert on that. And that alerting part actually makes the difference, right? So all of a sudden, you release a version, and your latency has spiked, and it actually triggered an alert. Now that you know -- since you put that alert in there, you know that you are actually exceeding your allowed boundaries, your error budgets maybe. And then you can actually get in there and try to optimize, try to do something about that. But it's the fun part of that, right? We mentioned the profiling side of that, and we mentioned the metrics side of that, and we mentioned alerts, right? They come all together, actually. You get the alert, you check what's going on with the process, down to the method and function, and then you decide to do something about it.

**Bartlomiej Płotka:** I think it's great. I think you're kind of explaining the production assessment level, right? So when you're actually building your PR, merging, everything deploys, you release it to different environments, and finally it gets to production. And that's your assessment. That's probably that ideal assessment in terms of kind of how real reliable it is, because that's actually production; that's what matters. Things are not very easy if you maybe distribute the software to different productions, or maybe to different customers. Probably it varies. That's why I think it's very useful to think about this problem the same way as we think about testing, about functional testing.

We also have unit tests that always are running on PR. We have integration tests that sometimes are running on PR. It depends how much you want to pay. And there are production tests, or load tests maybe, and end-to-end tests. There are different kinds of levels, and no one is saying you should always only implement unit tests and nothing else; or only implement end-to-end, and nothing else. There is a graduation process where things closer to the code cost less, but it's not always reliable, and then things farther away, towards production, is more reliable, but it's kind of sometimes too late, because the feedback loop is very, very large. This is exactly the same for assessments. You have a micro benchmark, which is kind of a unit test, then you have macro benchmarks, which is kind of integration end-to-end, and then we have production assessment. And the problem is these days ideally we run on every PR micro benchmarks. But we don't, because it's still very expensive, it's still unreliable... So we hope maybe hardware will get cheaper... I mean, there are some kinds of solutions that do that, sometimes we do that, but generally, it's not achievable yet.

What we have in Prometheus, for example - we have macro benchmarks. So we spin up a test cluster with Prometheus server, which is kind of like written in Golang, some time-series for metrics. And then we can kind of spin up this setup on the PR. So we say, "Hey, \[unintelligible 00:20:51.12\] and then it starts, it gives you dashboards, it gives you results, and then you can shut it down, because it costs money for the CNCF organizations, so they \[unintelligible 00:21:01.17\] But generally, ideally, the space is better, and we run everything on the PR, but that's not the case always, right?

**Christian Simon:** I guess for us, we also have that kind of \[unintelligible 00:21:10.06\] tools before we cut a release. At Grafana Labs we usually cut a weekly release, and then go through different stages, like more of the internal tools, and then into production. And yeah, we would really only alert on SLO. So if we think it's worth, we would compare our benchmarking in the PR, but there's not an automated way, and there's not a good way of kind of raising a question mark about a PR once things would go out of hand. I was wondering how that works with the \[unintelligible 00:21:42.28\] Do you get that kind of percentage assessment and then the reviewer needs to make a call? Or is it getting kind of hard-rejected in the PR pipeline?

**Bartlomiej Płotka:** \[00:21:55.22\] Yeah, it's very manual right now, because again, it's kind of a community project, so it's not like tied to any production, one production kind of environment. So it will be hard, but it's kind of manual these days. But it's good enough, right? However, I think that if you look on the Vitess project, I think it's kind of in Go as well, and they have an amazing page around benchmarks. So they do nightly benchmarks, like all micro benchmarks in a codebase. In Go, benchmarks are kind of built in, the micro benchmarks. So you use go test to run your benchmarks, and they are very nice and easy to write. And if you have them in the codebase, you run a specific go test command, it will just run everything. And they kind of try to have hardware, so kind of virtual machines, which are stable, but also... By the way, running virtual machine is also sometimes unreliable, because \[unintelligible 00:22:46.12\] the characteristic is different. There are so many complexities. But sometimes, if you run it long enough, it can give some data. So on their website, they are having the results for every nightly builds, and it's pretty sweet.

**Break:** \[00:23:01.18\]

**Kemal Akkoyun:** I think I'm going to disagree with Bartek, at least partially, about testing this stuff... So here comes my first unpopular opinion. So even though testing and doing end-to-end tests or synthetic benchmarks on your development machine or on your CI, your development environment is not the same with your production environment. I am a big fan of collecting these metrics in production, or just profiling the actual workload in the production. Because the CPU, the machines, the network stack that actually this software runs on is totally different than what you have in the CI or in your local machine. So if you can do this on a production environment, that data is also the actually holy grail, right?

On top of that, one other thing is with the prom bench, or with the Prometheus project, we actually know what is the hot path, so that's why we have those benchmarking tools. We know what to optimize, and we know beforehand what shouldn't go out of range, so that we have that in CI. So it's really helpful.

But most of the other projects, you don't have this information, and you actually don't know what to optimize. So there's a lot of unknown unknowns. For those types of things, actually doing this on production, with certain metrics, or like certain facilities to collect this data is more valuable to me.

**Mat Ryer:** Yeah. Could you have like a budget, so that you say, "We're going to add features, we're going to add extra work, so we know that's going to slow it down, but we want to set a budget for how much we could do that?", something like that, those kinds of techniques. Does that work?

**Christian Simon:** I think I'm always a fan of having maybe two feature sprints, and then one tech debt clean-up to maybe bring those new inefficiencies or newly identified - yeah, hot paths, maybe fix them, make them more efficient... I think that seems to work quite well, I guess. And we also notice in the project if we run too many of the feature sprints, then I guess we're gonna pay in terms of getting a bit more red graph when we look at our SLO budgets.

**Mat Ryer:** Yeah. It's quite nice, because you can kind of free yourself and focus on the features, and then you know that at some point you'll then go back and have that dedicated time to pay off the tech debt, or just see what the impact is.

**Christian Simon:** And you don't know how a particular feature is used... So I'm working on continuous profiling as well on Flare, but before, on Loki, we implemented deletions, and we had an idea of what kind of requests to expect, but I guess within the first month we had very interesting requests, in terms of their size, and just the number of them, that we kind of didn't kind of optimize for, and that then required another sprint of making them actually scale to that level.

**Mat Ryer:** Was it just that people wanted to use a new feature, so they're like "Right, what can we delete? Let's do it." Because I'm like that when I get a new phone; I'm like "Yeah, I'm using all these features, because they're new." You know, it's an expensive phone, so...

**Christian Simon:** Yeah, let's delete every second line of your logs.

**Mat Ryer:** \[00:27:53.17\] Yeah, why not? You halve your bill...

**Bartlomiej Płotka:** Yeah, I think it always kind of depends on the case... But a wonder - let's say you have those weeks for the feature development, and then you deploy those features, and the SLO is... Or like some kind of like this measurement assessment is threat. What do you do - wait until the tech debt, or you revert the feature and work on optimizations? This is where this thing is kind of tricky, right?

**Mat Ryer:** What do you do though, Christian?

**Christian Simon:** Yeah, I guess we look at error budgets, and I guess as long as we are within the budget, I guess we can kind of push it down the line, I would say... But yeah, I think if we kind of exceeded our error budget, then this definitely becomes not \[unintelligible 00:28:31.03\] but definitely will kind of drain out all the feature work.

**Bartlomiej Płotka:** Yeah, makes sense. It makes sense, yeah. Definitely. And it's kind of like a data-driven approach, where you kind of express everything in number... Like, "Hey, how much can I sacrifice?" However, the problem is usually people don't set the goals, don't set the performance requirements, or efficiency requirements. And for maybe a service like yours, you have some latency, but what about the memory used, or other costs, like CPUs? It's so hard sometimes, and we don't always do it, even at Red Hat; it's like, you've got the feature, but what's your requirement? What's your goal? Are you happy with spending thousands, or it should be like $2,000 per month, or it should be $10,000? Ideally, you have that goal, because you can calculate those budgets then, both on latency and the resources, which is cost, right?

I think that's the trouble that many engineers have; it's very hard to set the goals, because it sets you up for failure, and this kind of like psychology behind that. I think we should do it more. I think we should set more goals, to know our budgets, essentially.

**Christian Simon:** Yeah. I think it doesn't help that the billing cycle, for example from cloud providers, is not really matching up maybe with your kind of release cycles; they're often delayed, or kind of over longer periods... So we definitely kind of got that with a bit of delay... And then it was even more important, because I guess it aggregated over that timeframe.

**Bartlomiej Płotka:** Yeah, that's a cool problem to keep in mind. I guess there are tools like OpenCost, or even CNCF tools that kind of calculates, gathers some observability about your projects, and even Go applications, and then they kind of try to calculate the costs. So yeah, maybe that will help, but... Yeah, generally a hard problem to solve.

**Mat Ryer:** Yeah. So that's really interesting... Kemal, you mentioned earlier really the best way to get this data is to do it in production. Is there a cost to that? Because you're doing extra work to get that observability data out. Does that itself, not slow things down?

**Kemal Akkoyun:** Of course, there's a cost attached to that. There is no free lunch, right? So that's why when it comes to observability, you actually -- or at least I tend to start with metrics, right? That's the low-cost observability signal that you can collect from your systems, because it's just an aggregation. And if you are actually monitoring your system using Prometheus, it's just in certain scraping intervals, you just like get your aggregated metrics and just store them, and you build your alerts or dashboards on top of that.

This, as far as I've seen, in most of the cases, our metrics are super-useful, and so it does the job. But in most of the cases, there is this in-depth situation; maybe you need more information about your system, maybe that's where the logs comes in, or any eventing system that you collect from your system comes in, and you check what's going on with the events.

If you have tracing data - this is really nice, because then right now, you can actually propagate your context between other services or other context boundaries, and you can have a broader picture of the system. This is another observability signal. But again, there's another cost attached to that. First of all, it's really expensive to store the tracing data, and the other cost is you actually need to instrument your code. And tracing instrumentation tends to be a little harder when you compare it to the metrics, because you need to go in there and you actually semantically determine which function boundary that you're crossing, and you need to just propagate that context, or you need to do this to all the systems that you have in your architecture, right? But metrics, in that sense, it's easier. And we know logging - everyone likes to omit the logs, even though I find them super-noisy, and it's really hard to take actions against them when you have hundreds of instances of the same process, right?

**Mat Ryer:** \[00:32:33.13\] We are the one deleting them then, all that time...

**Kemal Akkoyun:** I tend to just not store them... Even though I really like writing log lines, because \[unintelligible 00:32:40.26\] it's a single process, I know what's going on, and it helps me a lot. And then on top of that, you have profiling, and it's really easy to profile your applications using Go. But profiling is specific to resource usages, right? To actually debug and introspect and understand what's going on, maybe troubleshoot a problem, you actually need to combine all of them, because every signal has its own use case.

**Mat Ryer:** Yeah, something that you cover in your book, Bartek... And by the way, congrats on the book.

**Bartlomiej Płotka:** Thanks.

**Mat Ryer:** I don't get a kickback from it, so I can just say, it is available now... So if you want to learn about writing efficient Go, get it. In your book, I know that you mention this trade-off between features and performance. And we've kind of talked about this when you sort of build up tech debt as you go along adding features. Does this argument happen a lot, where you're making the case to not have a feature because of the cost it's going to have? And then what about like product people, or sales people, or whatever else they're working at, obviously incentivized really for the opposite thing maybe? How does it go down?

**Bartlomiej Płotka:** Yeah, totally. It's kind of an everyday question almost, if we should invest in some amazing feature... And especially deletion is an interesting one, because we usually - at least in our ecosystem of like Prometheus, and the Thanos project, as well as Mimir, and Cortex, and Flare even... You know, all those kind of like distributed systems - or not distributed; like time-series database, or sort of kind of like storages for different observability data, we kind of store it in immutable storage. So once you kind of like try to delete something, it can cause problems, and it can cause costs. So that's kind of like the question - when we should add, how much of the flexibility in deletion we should add, and sort of those stories. It really, really depends, and what really helps is to have this budget of how much cost you want to kind of add to the system... Even like developing a feature is a cost; spending engineering time, and testing, and maintaining it.

I really kind of try to recommend into using the same pattern for discussing how much you want to invest in efficiency of something, if we should make it faster or not, or we should maybe disable some feature because it was kind of slowing the system... This is exactly the same discussion as you would have should you add some feature, because again, it's just worth thinking about efficiency. Again it's still kind of some cost; it will be some cost of like maintaining, and so on. So everything, ideally - ideally, in an ideal world, you know the cost of it, so you know if deletion is... How much deletion requests will cost, kind of roughly CPU time, and if you have the capacity in your cluster. So this should be kind of like the core discussion to have, and if users are willing to pay for that, sure. But if, for example, you want to kind of minimize the cost, maybe you should disable this feature. It really depends on what user you are in, and what project this is in... But generally - yeah, speaking about data, numbers is kind of helpful. And treating everything as the whole package. Not just features as readability, and maybe complexity of the code, or API, or configuration, but also add efficiency on top, like roughly the cost, essentially - it just helps to make the decision.

**Christian Simon:** \[00:36:16.04\] Yeah. And I guess it's what the business leaders in the end care about; I guess they want to kind of maintain that margin, and the closer to those numbers you can get from your system, from your production system, the easier you will be able to flag issues. If, for example, that deletion feature is for free, and they actually ramp up a lot of costs, I guess that that will kind of target your whole margin as a product, and I guess you want to know about that before it really turns it down into a negative.

**Mat Ryer:** Yeah, the best performance improvement I remember I ever did, in my whole career - I made something about a thousand times faster by removing a time.sleep that I'd left in there by mistake... \[laughter\] They were thrilled. They were like "This is really fast now." I looked like a hero. Instead, I was of course an idiot at the beginning. So do you recommend that, put some time sleeps in early, and then you can take them out over time?

**Bartlomiej Płotka:** Maybe it's a genius move, right? You just put them in, and then remove... Ta-daa! It's an improvement.

**Mat Ryer:** Yeah.

**Bartlomiej Płotka:** I mean, this is not a joke. Literally, I was hearing some stories from AWS, or some other service, and... I would need to dig it up, the source of it... But generally, they were having a service, and they added sleep to the service, to not give too fast expectations for people. Because they knew they want to implement additional complexity, additional features. Imagine they were doing, for example, like this database, and they want to add deletion later on, but they didn't yet, so that's why it's so fast. But they know where they will add it, so they added sleep. So once they added this deletion or some other feature, it gets so slow they have to remove the sleep, and now everyone's happy.

So literally, those things are recommended, honestly, because if you are kind of like -- again, this is again this budget and goal thing; if you are agreeing with your customer that your service is responding under one second, having it respond in 100 milliseconds, if they pay for one second, sometimes it's not smart, because people kind of depend on it forever, even though you kind of agreed on one second. So those slowdowns on purpose - they kind of make sense sometimes, right?

**Mat Ryer:** Yeah, but isn't that the kind of thing that gets leaked at some point, and then there's a big outrage? I don't know if this story is true, but I heard a story of like Uber checking your battery on your phone, and charging you more if your battery was really low. I don't know if that's true or not... But it's a scandal. Imagine if they said, "Yeah, this service is deliberately slow."

**Bartlomiej Płotka:** I mean, yeah, let's not go there... But the AWS a story - I think it's fair; like, you paid for one second, and that's fair. They want to make this project sustainable. But what you mentioned is kind of like maybe less legal or less clear. But there are things where... How's it called...? Like when companies want you to buy a new phone, and they will put time.sleep into your keyboard, so it's kind of slow on purpose - things will happen like that. So yeah, that's unfortunate... No, we are to improve efficiency in this podcast, not add problems of efficiency.

**Kemal Akkoyun:** Yeah. But I guess it's legit if it doesn't exceed your error budget, or if it's in your service level agreements, so you can like read the battery levels, or put the sleep in there and slow things down.

**Bartlomiej Płotka:** Yeah, the problem is now you are buying a phone and you have a list of efficiency goals... Like, your keyboard will be always going from bottom in half a second. It's the same with SLOs, like how much granular those kinds of numbers can be. It won't be granular to your local library method in Golang, right? It will be kind of like very high-level. So that's a problem of the requirements really, and that's why every team should have some rough numbers, because you are developing your library, and the SLO is impacted. Is it your fault? Is it somebody else's fault? Like, how fast I should be? If one second is the goal, then your program is doing many things. My library on my team is developing like "Should it be -- how much of this second?" So those are not easy questions, but again, with things like metrics, with things like profiling, you could kind of find this number easier.

**Mat Ryer:** Yeah, another valid use case for sleeping in code I've seen is literally to add a random sleep to sort of jitter requests around as well. And I think that kind of makes sense, because then it's about you're really helping... And as long as, like you say, it's within the budget, maybe it's okay.

**Break:** \[00:40:49.19\]

**Mat Ryer:** So how does Go compare to other languages and other technologies when it comes to observability profiling, and being able to actually introspect things that's going on inside the programs? Is it good? Are there good things and bad things? Anything you wish you'd change? Something you love? Christian, what do you reckon?

**Christian Simon:** So I generally would say it comes with batteries included. So I think compared to other languages, when you install the Go version, that is the most recent one - like, everything is already on your machine. You have basically the runtime, it takes care, for example, of the profiling, and you basically just need to tell it to do it for your particular, either mini benchmark...

I think in all languages you often rely on some external tooling, or kind of intercepting somewhere... And yeah, I guess that makes it kind of available for any program built on top of Go, or built with Go. It just sets a certain standard, I would say.

**Kemal Akkoyun:** I guess I can jump in here... We mentioned the signals, right? For example, one of those signals are metrics, and Bartek and I, we maintain Prometheus client Golang library, which is one of the first Prometheus libraries, right? Surprise, because Prometheus is written in Golang...

**Mat Ryer:** Good choice...

**Kemal Akkoyun:** So from the beginning, the support for metrics for Go was a first-class citizen. On top of that, the Go runtime itself also provides facilities to actually make your programs more introspectable, or observable, right? One of them is profilers. And Go, from the beginning, actually had pprof, which is a project from Google itself, and it's embedded in the runtime itself, and you can actually expose this profiling data pretty easily. You can actually write, and then you run your tests with just additional certain flags. You can actually dump CPU profiles, memory profiles, or you can just like add a package and add an endpoint, and then you can expose a profiling pprof endpoint, and then pprof can scrape and collect profiling for that. This was there from the beginning, so profiling -- Go is kind of built with profiling in mind.

We also mentioned metrics, and one other thing that we can mention - there is an ongoing PR and a discussion around structure logging, for example. Go has a standard logging library, but now they're trying to improve that, and there are certain controversial opinions around that... But still, I think as a community, Go always thinks about observability and how to make the programs more observable, more introspectable.

**Mat Ryer:** So sounds pretty good then... Are there any downsides? Anything you wish it did differently?

**Kemal Akkoyun:** \[00:43:49.26\] Kind of... I will jump again; I'm super-passionate about like profiling, right? Go itself has a profiler built in, and you can actually expose certain types of profiles out of the box, right? And they're super-useful. But the approach that you have with Go, for example - it's an interrupt-based profiler, right? And you are using certain operating system facilities, and I'm talking specifically about Linux in here. You need to set \[unintelligible 00:44:19.07\] and then you need register a call, and then the operating system itself is sending you some interrupts. And in those interrupts you actually dump the stack of your process itself.

It's actually -- you're changing things a little bit when you want to observe the system itself. So I think this is a downside. And right now, with the improvement of our technology in different parts of the stack, you can actually collect these profiles without paying this cost attached to this.

**Bartlomiej Płotka:** But I guess you could turn off those profiles. There's native profiles if you are a user of eBPF, or some other solution that gives you those information from other sources... I guess -- are you able to turn it off? Isn't that a solution?

**Kemal Akkoyun:** You can definitely turn it off. But I already told you that I'm a big fan of doing things in production, right? I want to profile my applications on production, so I'm always thinking about in that case, right? How can I actually profile this process in production, without paying any cost?

**Bartlomiej Płotka:** Yeah. I guess kind of like your -- you are profiling on production; you need profiling for production use. So that's your production. So that's the cost you're paying. And then you kind of account for that. But yeah, I know what you mean - the more it costs, your observability stack can sometimes cost more than your compute power on a normal application. So this is like very -- you need to be very careful what signals you are deriving, observability signals you are kind of getting off your application, because you can get crazy here.

So yeah, things like metrics and profiles are my favorite ones for like efficiency. You can make them kind of cheap enough for it to be profitable still, but I know your point. And all those kinds of things that are happening in the profilers, either moving into kernel, or kind of like in a Go runtime, making them kind of like cheaper to run, and more accurate in the same time, are amazing things. And you know, in every Go release we have some improvements of that, so it's pretty sweet.

**Mat Ryer:** Yeah, maybe we should chat a little bit more about eBPF. This is something that I see a lot, and I see people getting quite excited about it. Liz Rice, I think, has an eBPF book, and it's called... It's "Runtime security", I think, isn't it?

**Bartlomiej Płotka:** Something like that, yeah. And you know, it works on security, and that was the main maybe hype for eEBF... But definitely, it's used much more.

**Kemal Akkoyun:** There is another book, I think, "What is the eBPF", if I'm not mistaken?

**Christian Simon:** Yeah, so that's also the first Google result I've found.

**Mat Ryer:** Well, there's definitely a talk... We'll find out and put this in the show notes. But what is eBPF? What actually is it?

**Kemal Akkoyun:** So I guess I kind of alluded that this is the new solution in the different part of the stack, right? eBPF is actually - yeah, Bartek is actually showing us the book... So you will add the link, I guess...

**Bartlomiej Płotka:** Yeah.

**Kemal Akkoyun:** So eBPF is a new technology in the kernel space. It was actually invented as filtering certain packages, but the acronym became a technology itself. Basically, it's a virtual machine and a verifier that attach to your kernel, and you write your C programs, or you can also write the programs in Rust, and you can target this virtual machine, and then the kernel can load these programs in your runtime when the program is run. So what it helps - it actually really opens up a lot of possibilities for observability tooling, security tooling, or network tooling. Since our concern is observability tooling, with eBPF - there are subsystems in Linux, right? One of them is perf, which is for collecting certain hardware measurements from your hardware, from your host machine, right?

\[00:48:17.27\] Using perf subsystem you can subscribe to the perf events, and using those perf events you can actually capture the stack traces of your running processes. Then you don't need to actually register something; you just need to subscribe to this perf event, and you can aggregate, and this happens outside the process, right? This happens in the kernel space. So it doesn't actually change what's going on in your program itself. We cannot say that there is no cost. Of course, there is a cost. Of course, it's changing stuff, because you are running some program in your CPU; but compared to what you get from interrupt-based profilers, this is so minimal, even negligible.

**Mat Ryer:** Are you excited about eBPF?

**Kemal Akkoyun:** I am totally excited. I'm going crazy about it. I'm also working as a Prometheus maintainer, and mostly working for client Golang; it's an instrumentation library. And recently, I gave a talk in Prometheus Days, and I was focusing on how we can do stuff using eBPF without instrumenting the code, and mixing and matching those things. And on top of that, I'm helping to build an open source continuous profiling project, especially for Go. It's called Parca, and we are using eBPF to actually profile the processes. So I'm all sold out, I don't know.

**Mat Ryer:** You're all-in.

**Kemal Akkoyun:** I'm all-in

**Mat Ryer:** I think it's going to be a popular opinion, but fear not... It wouldn't be Go Time if we didn't explore your unpopular opinions...

**Jingle:** \[00:49:51.22\]

**Mat Ryer:** I promised last time that I would kick us off, because I forgot mine... And I've brought two. I've brought a serious one, and a very serious one. And my very serious one is, I think from now on the past tense of screenshot should be screenshat. So we should say like "Oh, did you send that thing to Bobby Booksmith?" "Yeah, I screenshat it to him." That kind of thing. If you've got no objections, we can probably sign that into law now...

And my other one was the optional second return arguments that you sometimes have in Go, like when you're checking a map, or doing \[unintelligible 00:50:44.20\] - I don't think they should be optional. I think you should either have to explicitly use an underscore to say "I'm ignoring this", or you should use it... Because -- I just don't think you should ever not use it, basically. I don't know if they'll be popular or unpopular... But we will find out. Don't forget, we test these on Twitter @GoTimeFM. So you can vote on a poll and decide whether this is indeed popular or not. Anybody else got popular and unpopular opinions?

**Bartlomiej Płotka:** Yeah, I can do that. So my unpopular opinion is that if you see in some software -- if I see in some software three extremely generic abstractions, and they usually are together, things like input, processor and output, source, function, exporters, collector, processors, publishers, in most cases those mean troubles. That's my opinion. If I see this, I'm running in a different direction, or try to find a replacement software.

I might be kind of exaggerating, but one kind of example is like generic data pipeline, or pub/sub systems that support every data format, and maximum flexibility, and you can configure thousands of intermediate steps as the processor, or between input and output... Or maybe, you know, sometimes I saw this Go interface called processor, with one method - do. And bytes argument. And those things are crazy, but I saw them...

\[00:52:17.07\] And the reason why it's bad is because the best abstraction is generally opinionated and small, while the complexity of implementation can be higher, because it's hidden under this abstraction, right? And there is a saying even - keep interfaces shallow, implementation deep. And those things with over-generic abstraction happens, but they kind of cause so many problems. It end up your program in YAML at the end, because there are so many kinds of configuration for this inputs, and processors, and outputs; it poses limitations to implementations. It's simply inefficient.

At the same time, the standard library kind of functions - that's kind of another popular opinion, I guess, but standard libraries sometimes are inefficient, because they're very generic. It has to check different edge cases that you might not have. For example, parsing integer from string, if you don't have negative numbers, your function can be much faster, if it's, of course, in the critical path. So things like that...

Anyway, I was just seeing so many failures, so many projects abandoned even, because they were following these very over-generic abstractions... And I want you to be cautious here. That's my opinion.

**Mat Ryer:** Very nice. By the way, some of my best friends are YAML programmers, so let's not... You know...

**Bartlomiej Płotka:** I mean, \[unintelligible 00:53:29.27\]

**Mat Ryer:** Is it not just a failing of the naming? It's just that we struggle to name it? Or do you mean about the input and output types as well, like you want those to be very specific, ideally?

**Bartlomiej Płotka:** Yeah, it depends on the case, but generally, you want to have naming, but also underlying kind of configuration options to be opinionated, to be limited; there has to be kind of like defined abstraction. Otherwise, it's over-open, so it leads to abuse of the system as well. So if you want to have any arbitrary input that works with any processor, you end up with like reading PDF, filtering using, I don't know, a processor made for raw bytes, and then outputting as a Helm chart. I don't know, like something crazy like that. And people will do it, and then claim success... It's like a waterfall of different problems if you are naming it kind of over-generic, but also having the interface very generic.

**Mat Ryer:** Yeah, it makes sense. I understand how it happens, because you want to be so flexible, and really smart, and you want to take on the pain, so that it's easy for people to use... But I kind of agree. Like, if you can be more specific, then do. That's a pretty good one. We'll test it and see, Bartek. And if it's not unpopular, you are contractually obliged to return to Go Time and do another episode. I don't make the rules, but...

**Bartlomiej Płotka:** Sure.

**Mat Ryer:** Okay. Do we have any other unpopular opinions?

**Christian Simon:** Yeah, so I have an unpopular one on the Go execution tracer. So while it is very colorful, and I think you can learn a lot how maybe your program is running, I think I've never found the problem, and I always started tracing when I was just desperate. And so my unpopular opinion is instead of starting it, go outside and do a walk in the park, and then maybe you see the missing error check, or whatever it is.

**Mat Ryer:** Hey, that's interesting... Is that unpopular, Kemal?

**Bartlomiej Płotka:** Not in my book, I guess...

**Mat Ryer:** Okay. Well, we'll test it, Christian, and we'll see. Kemal, did you bring an unpopular opinion today?

**Kemal Akkoyun:** I brought a bunch of them. I don't know where to start, but I guess maybe I can just keep it simple and focus on the things that we talked today...

**Mat Ryer:** It'll keep Bartek happy...

**Kemal Akkoyun:** \[00:55:50.28\] Yeah. This one for Bartek. So I think Go should give certain APIs to control memory for certain use cases, right? Go runtime does a lot of assumptions for us for the memory safety, and it gives us guarantees, and it's really nice with the garbage collection... But sometimes, you really want to reduce the allocations. There are certain ways to do that, but it would be really nice to have some granular control on certain memory parts, so that you can optimize your program for your hot path. Because as far as we see with the Go programs, it's mostly about allocations and the GC pressure.

I know there are some improvements recently. Actually, there are some knobs that you can turn and adjust your garbage collection. On top of that, there is this PR proposal about the Arena support, but still, it would be nice to have more control. I think Bartek is gonna like this, because I know for a fact that he made a couple of packages that are on this, to actually make this happen.

**Bartlomiej Płotka:** I feel like our opinions were not super-unpopular, because I think I agreed with all of it... And I think there should be some legal agreement we are assigning with you, Mat, that those words cannot be used against us, or something like that.

**Mat Ryer:** Right... \[laughs\]

**Bartlomiej Płotka:** But yeah, I would agree with Kemal, Arena is especially good, but I would even like bring a Rust ownership model to like a portion of your Go code. So you could strictly control their scope of living kind of lifecycle of your variables, of your data... And maybe only for 5% of your code, because this is the critical path that matters. And then use garbage collection for something else. I kept looking -- I mean, people look as crazy if I say that, but I think yeah, I would even go further as that.

**Mat Ryer:** Hm... Yeah, so it kind of make sense then... Like, most people won't have to know about it or even think about it. But when you're doing efficiency work, when you really do want to control it and optimize it, that sort of makes sense. A bit like how you can have Assembly in your Go code, I guess... Because that's a bit unusual, to have assembly code in there; people do it sometimes for very good reasons, but it's a trade-off between - this is now very difficult to maintain, especially for Go programmers, who typically don't write much Assembly... And same, then - yeah, for those that need it, they'd be able to use it.

**Bartlomiej Płotka:** Yeah. I think we're going in this direction though, so it's good. Arena already is claiming some kind of part of your memory, where it's outside of garbage collection. So it's a precedence. Once that is done, we can go further, deeper into bad things, but also nice for efficiency sometimes, yeah.

**Mat Ryer:** Well, these all do sound quite popular. Does anyone want to have a go at a properly unpopular one?

**Bartlomiej Płotka:** No. Before the legal contract, no.

**Mat Ryer:** \[laughs\]

**Kemal Akkoyun:** I can go...

**Mat Ryer:** Kemal, come on. Let's dig deep. Find an unpopular one.

**Kemal Akkoyun:** Okay. I think the Go team should be an independent third party, instead of something that only Google people actually control. There are a lot of other kinds of stakeholders actually depending on Go. For example, one of the big ones is the CNCF, the Cloud Native Foundation. We work on the open source project that actually donated to that foundation, so... It would be nice to have some representation in the Go team to adjust things, right?

**Mat Ryer:** Hm... Interesting. I know that that has been a subject before, and I think it is quite a controversial one... But let's have that chat on Twitter. We'll certainly put that clip of you, and then vote, and then that's it; that's really how we do our observability data collecting...

Excellent. Well, thank you so much. This was great. And we should do this more. You know, we touched on profiling. We really didn't go deep on profiling, and I think that could be also great for a future episode. But thank you so much, Bartek, Christian, Kemal. Absolute pleasure. And thanks for listening. Thanks to our live listeners. Remember, this goes out live, and you can see us on YouTube... And also, this is edited nicely as well for the podcast. So if you're listening to it on a podcast thing, good for you; but there's some gold that was chopped from it... I suspect one of my unpopular opinions will have been cut out... So if I said "I've got two unpopular opinions" and then I only said one, you'll know that one was cut out. But we'll see... Thanks very much. See you next time on Go Time!
