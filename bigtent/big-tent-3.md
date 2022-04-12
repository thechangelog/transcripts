**Mat Ryer:** Hello, and welcome to Grafana's Big Tent, the podcast all about the people, community, tools and tech around observability. I'm here with Tom Wilkie. Hi, Tom.

**Tom Wilkie:** Hi, Mat. How are you doing?

**Mat Ryer:** Good, thanks. Not bad. How are you?

**Tom Wilkie:** Yeah, very well. I'm in the middle of moving house.

**Mat Ryer:** Oh. Sounds heavy.

**Tom Wilkie:** I'm glad we only have to do it once every eight years.

**Mat Ryer:** Yeah, that's nice. Are you going far?

**Tom Wilkie:** No, just the end of the road.

**Mat Ryer:** Okay, it's fair enough. Normal.

**Tom Wilkie:** Yeah. The house we're moving into is almost identical to our current house... I'm questioning why we're doing it.

**Mat Ryer:** \[laughs\] Just moved into the exact same house...

**Tom Wilkie:** Yeah. Just the mirror.

**Mat Ryer:** Great. No, fine. But sometimes it's annoying if the doors are on the wrong side or something, and you wanna switch. I understand.

**Tom Wilkie:** All the light switches are in different places. It's so confusing.

**Mat Ryer:** It's gonna take ages to figure out what's going on. Today we're talking about service-level objectives, or SLOs. A very exciting issue, and actually very topical. We're joined by a couple of really great people, actually, Tom.

**Tom Wilkie:** Did you have to say that? Was that part of the deal with getting them on?

**Mat Ryer:** Yeah, I asked them to write their own intro... \[laughs\] No, but really strong and fast is Matthias Loibl. Is that how I pronounce your name, Matthias?

**Matthias Loibl:** Almost. Matthias Loibl, but that's fine.

**Mat Ryer:** Okay, welcome to Grafana's Big Tent, Matthias.

**Matthias Loibl:** Thank you, thanks for having me.

**Mat Ryer:** You're a software engineer at Polar Signals, right?

**Matthias Loibl:** Yeah. So at Polar Signals we are creating a kind of Prometheus-inspired continuous profiling project, which is called Parca, an open source project. It kind of tells you where you're spending most of your CPU and memory, and you can save money or improve latency by improving your applications. So if that doesn't sound interesting, I don't know what does. Maybe SLOs is more interesting, but we'll see.

**Mat Ryer:** It is today, yes. But we will actually revisit that particular subject, continuous profiling, so check out our other podcast episodes for that. We're also joined by Björn Rabenstein.

**Björn Rabenstein:** Hello! Thank you. Thanks for having me.

**Mat Ryer:** And where do you work, Björn?

**Björn Rabenstein:** It's a weird company called Grafana Labs... They have a big tent approach to things, and I like that, so I work for them.

**Mat Ryer:** Right, yeah. That's not as good a pitch as Matthias just did for Polar Signals though, Björn... But there we go.

**Tom Wilkie:** I first met Björn (I think) five or six years ago, and it was in KubeCon Berlin, if I'm correct. Or did we meet beforehand?

**Björn Rabenstein:** I think we met in London.

**Tom Wilkie:** Oh yeah, you came to London... And a little-known fact - Björn was actually the person who invited me to join the Prometheus team.

**Björn Rabenstein:** I am to blame.

**Matthias Loibl:** I didn't know that one.

**Tom Wilkie:** Yeah, Björn's the problem.

**Mat Ryer:** Yeah, it's Björn's fault. Okay, so let's get into this then... Starting at the very basics then, for somebody who's never really heard of SLOs, what are we talking about here? What is the point?

**Tom Wilkie:** So before we do that - why Björn, and why Matthias? Why the two people to have talking about SLOs? Björn, I believe you did quite a popular blog post at Soundcloud. What was the story behind that?

**Björn Rabenstein:** Yeah, I mean that's a long story... I was in SRE before it was cool, and SLOs have a lot to do with SRE, which I guess we will get into... And at some point I left Google, where SRE was kind of "invented", and then I joined Soundcloud, where we created an open source monitoring system called Prometheus back in the days we had no idea that everyone will know that system and many will use it one day... But yeah, that was when it happened.

\[00:03:59.04\] And then Google finally spilled the beans and published SRE books; the one, famous SRE book, and then the SRE workbook, and more to come... And in that SRE workbook there was a chapter five that is a really, really nice chapter about how to alert on SLOs. I mean, SLOs are all over the place in those books, but this one chapter is really a nice read, because it gets you piecemeal into how to alert on SLOs. And they use Prometheus, or PromQL, to express the alerts, and I really like that. At Soundcloud we obviously used Prometheus, and then I said "We can implement that, right?"

Then I created a blog post on the Soundcloud tech blog how we implemented this at Soundcloud; very, very hands-on. I think that had quite a bit of following, or people just read it... And then, when I was at Grafana Labs later, I refined the same approach, and included latency, and created yet another blog post, and a talk at KubeCon. After all of that, I guess I kind of had some credits in the SLO scene... Who knows, yeah.

**Tom Wilkie:** Matthias, you built a project to help generate the rules and alerts for Prometheus... Did you use Björn's blog post?

**Matthias Loibl:** Yeah, I did use Björn's blog post. I obviously also started with the Google SRE books, and kind of like worked my way through these, and eventually kind of came to the point where I needed to kind of double-check that what I was doing practically was sound and proof... So knowing Björn, I kind of reached out, and he was a great source of inspiration for all of that.

And yes, slo-libsonnet was using Jsonnet to generate all the Prometheus alerting and recording rules to really have a higher-level configuration mechanism for SLOs, and to kind of like make it a bit more approachable for folks.

**Tom Wilkie:** And what's happened to slo-libsonnet now?

**Matthias Loibl:** Slo-libsonnet has kind of superseded by another project called Pyrra, which I was working on for the last year with a designer to create an even better user experience with the UI, and hopefully one day a nice editor for creating SLOs visually... But yeah, that's been the thing I've been up to in the last year. Slo-libsonnet is kind of too technical and too much in the weeds, so I'm trying to move on from that and have something even more easily accessible.

**Tom Wilkie:** I know the whole Jsonnet thing can be a bit of an acquired taste, but I like it. I thought your library was awesome.

**Matthias Loibl:** Yeah. I mean, I still like it, and I would still use it for more advanced use cases. It definitely has a place for that. But I wanna kind of like bridge the gap for folks that neither know SLOs, nor know about Jsonnet. So that's what I'm trying to do.

**Mat Ryer:** And we'll post links to these projects in the show notes. We'll also post a link to that Google book... Who should read that Google book, by the way, that SRE one?

**Björn Rabenstein:** Everyone... \[laughs\] I mean, of course, not everyone... But everyone in the profession of running reasonably complex services, let's say, in the cloud, I think... Even if you're not seeing yourself as an SRE, I think this is just part of generally-applicable knowledge these days. So if you are doing anything reasonably complex and you serve it on the internet, you should probably read at least the first SRE book, and then you can pick and mix and match from the others what you need.

**Matthias Loibl:** Adding on to that, I think, generally speaking, if you receive alerts and get paged a lot, I think it's the thing to read and improve your life. Just stating the simple facts like that, I think... Yeah, you should definitely check it out.

**Björn Rabenstein:** \[00:08:04.13\] I think this is what this time gives us, that even normal people in our profession can easily serve services that are based on incredibly complex systems, with all the cloud offerings we have. So all of a sudden, it's everyone's business to think about complex systems, distributed systems, and how to run them, and how reliable are they. And then we get into this whole topic, why all of a sudden everyone talks about SLOs.

**Tom Wilkie:** I mean, I think that's a good segue. We've kind of dove straight in; how about we take a step back... What are SLOs? What does it stand for? Why are these things important?

**Björn Rabenstein:** SLO stands for service-level objective, which you could claim explains everything... There's also other acronyms, like SLA and SLI; we should get into it later, I guess... But very generally, this is where you have an idea which kind of quality of service you will provide. That's often linked to uptime, but as we will see, in modern systems uptime is not as easy to define; it goes into error rates, error budget...

So it's, in general, the idea that you are not just trying your best to run your service and make it available always, a bit with the insight that that's actually an impossibility, practically. And then you start to talk about what's your service level? How much of your service are you able to provide, on average, in a certain timeframe?

**Matthias Loibl:** Yeah, I think the "certain timeframe" aspect is really important to me... Because every other alerting style out there kind of looks at "Hey, what's the error rate in the past 5 or 10 minutes?" and then if it's above a certain threshold, it will alert. But with service-level objectives you kind of look at the broader scheme of "What is my service going to be like?", or "What is it supposed to be like over like four weeks?", and then you start working towards that objective.

**Tom Wilkie:** So what's an example of an SLO? How would you phrase an SLO?

**Matthias Loibl:** Generally speaking, or the example I like to use always is a simple one, that people can refer to, which is you have a website, and that website has a landing page, and you want that landing page to be available always. That's the goal. It's not a real-world goal, so you need to kind of define how many errors can you have when serving that landing page. Maybe it's 1% of the times users go to your landing page, it's fine to show a 500 error, and it's still good enough for 99% of the other people. So that's always kind of the easiest example I can come up with.

**Mat Ryer:** So if a non-technical CEO comes in and says "No, I don't want there to ever be any errors. You should have zero errors", what would you say to somebody that has that position?

**Matthias Loibl:** Yeah, good luck with that... I think there are so many variables at play. Obviously, technical people know about DNS being the problem always; but there are so many other things. And then even there are aspects in the request and response type of systems we have, that you don't even control it. And we might not even be able to manage it. It's always good to keep that in mind; maybe there's an error on the client-side as well, and taking this into account as well. So there will be errors, and it's just how many are acceptable.

**Mat Ryer:** Yeah, exactly. So it kind of starts off by just being honest by the fact that nothing's perfect... But that even can be a difficult conversation with some people. So that is a good point to start with, I think, which is that we just have to be honest about the system and what's it's gonna be able to do.

**Tom Wilkie:** \[00:12:05.24\] One of the things I've noticed in this industry - there's a big push for related topics, like continuous delivery. "We should be deploying new versions of our software daily. Hourly." I've found SLOs are a great way of kind of trading off the ability to move quickly, move fast and break things, the famous Facebook saying... Versus the ability to provide a reliable service.

So once you admit, "Okay, 0.1% of requests are allowed to fail in a given period, in a month", suddenly, that's the other side of the "Do I release this feature today, with the risk that it might break things?" And you can measure both of these; you can measure your release philosophy, and you can measure your SLO performance. If you're doing worse in your SLO, maybe slow down releasing.

One of the things I've always found -- back when I was at Google, the periods where we didn't release software before Christmas and Black Friday and so on, were often the ones that had the highest SLO performance... Because nothing changed. When you don't' change things, nothing breaks. So I've found that SLOs are a great lever when talking to the commercial side of the business... A great lever to have that discussion. "How much risk do you want me to take?"

**Björn Rabenstein:** Which might be one of the reasons why SLOs are so popular in SRE... Because - what some people don't wanna hear - SREs, sometimes I call it the anti-dev-ops, because it's more... Like, SRE is more about a very, very large company has realized they need to find a way how ops and dev can talk to each other and work together properly; and kind of the naive dev ops approach is more like "Yeah, we'll just make it all the same thing", but that doesn't work on really large companies, so they couldn't do that.

And SLOs are, in a way, what Tom just said - they're a very good way of objectively find out "Are we moving too fast and breaking too much, or are we actually moving too slow, and nothing really happens, but we're also not innovating fast enough?" And then you have a way of talking between all those different stakeholders and find a good middle ground, how quickly to move.

**Tom Wilkie:** One of the things I've always struggled with is this idea of uptime versus request-based SLOs. Matthias, when you said earlier "Oh, my website should be available all the time, but I'm allowed a certain number of requests to fail", it's an apple and oranges thing. Björn, how do you convince someone that a request-based SLO is what you should offer, and why is it better than a -- loaded question here, right? Why is it better than an uptime-based SLO?

**Björn Rabenstein:** I mean, there are two things... The uptime-based SLO is the one that is very intuitive, and it's also something you kind of know from before the days of complex distributed computer systems. Let's say your water pipes or your electricity at home - you want this to be always available, but we would all agree that you cannot expect to never have a power cut, or to never have water at home... But you don't want it to happen every day for an hour, or something. So you have a certain tolerance, and that's a perfect day-to-day example why you would define an SLO; you just didn't call it that way back then.

On the other hand, this is also a very simple thing. It's on or off. Of course, power supply could also be weird and flaky and not have the right frequency... But too simply, power is on or off. So you have this easily. And you also need it almost all the time. But for servers, you \[unintelligible 00:15:42.10\] in certain periods of the day, you aren't even interested in the servers being up at night. It's kind of free uptime if your service provider claims "The service was up all night, you just didn't use it."

\[00:15:58.03\] Also - and I think this is even more important - a modern complex service, like if you serve a website which has a dozen different elements on the page, it's not that it's always either completely up or completely down. It might be flaky, maybe just some parts of it are missing... So you get into this area where you can't even define it as clearly, up or down. And then it becomes more interesting to say, "Okay, which percent of requests that the user sent to me was I able to respond to in time, and truthfully, and all those things?" And that's where it gets much more interesting and much more appropriate to complex systems.

**Tom Wilkie:** I think that's all well and good, but when I'm selling a piece of software to someone in procurement, and they say "I want this to be available 99.9% of the time", and I'm like "I'll make 99.9% of your requests succeed", it's like we're talking two different languages. I mean, how do you convince them that you are trying to give them something that's more friendly to them? What would you say?

**Matthias Loibl:** I think the biggest aspect is that up until you define an objective like that, you are just talking based on a gut feeling, and that really doesn't help at all. So let's move from a gut feeling, which might be completely false... In fact, I'm reading a book called Factfulness, and that talks in great detail about our gut feeling being wrong so often. So let's move away from that, and let's really define something, let's measure it, let's have data on this, and then we can maybe start off pretty low, and then try to improve over time to get to something which is really tolerable and overall acceptable to the business.

**Björn Rabenstein:** Yeah. I think in this regard that it really depends on the kind of service. There are services that are consumed by machines, there are services that are consumed by humans... Then there are services where you have a contractual obligation to fulfill a certain service-level objective, which is then called an SLA; we will come to that, I guess... And then there are services where you don't have that. Like, it's a free mail service or something, and you make all your money from serving ads - so then you don't have a contractual obligation to your users, but you still want your users to be happy and not run away.

I think this is the key to how to design an SLO, that you have to look how is the service consumed, and how are the users perceiving it; either intuitively, or really sometimes it's just legally, and the reality is that sometimes what you have in your contract is more important than what your users think. But that, again, depends on the context. And that's where you should start designing your SLO from. And it could be, indeed, very different, as Tom said.

There are situations where an uptime-based SLO is exactly the right thing, there are times where a request-based SLO is the right thing, or something where you have to mix things, or you have to come up with something completely new.

**Tom Wilkie:** That was interesting; the difference between SLA and SLO is whether it's included in a contract, where there's penalties or not. I know it's a bit kind of off-topic for this, but what kind of penalties make an SLA? What have you seen in these contracts?

**Björn Rabenstein:** I mean, I'm not making the contracts most of the time. Perhaps Tom knows more about that... But I think it's an important thought that an SLA is essentially the last thing you do, because that's when you start to go into contract negotiations, you sign a contract at the very end of -- essentially, from the developer's perspective it's kind of almost the end of the lifecycle, where you actually now sell it properly to the customer, while an SLO is exactly the opposite in an ideal scenario, which in practice doesn't happen so often, sadly - you start your whole software design process with the SLO. You want to know what your SLO is before you even start designing the software. Because a 99.999% uptime is very much different to design for than something that if it's 80% available it's already fine. I mean, there are those services... So it's a very different thing, and you could see this as very opposing ends in the lifecycle.

**Mat Ryer:** \[00:20:21.27\] Yeah, so SLA then, service-level agreement, and SLO, service-level objective - are they the same thing though, but one just has a contract around it? Or do you tend to publish different things? Are we that transparent with customers? What do you think the right way to do that is?

**Björn Rabenstein:** Some people say an SLO should be more ambitious than the SLA, just to defend against... I would again say this depends on the system design. For some systems it makes sense to have a bit tighter thresholds for your SLO than for the SLA, but for other systems it doesn't really make sense; if it's like a falling off the cliff thing, it doesn't even matter if you have different thresholds here.

I think more important is really SLOs, the input into your design, what you design for. You might iterate on it later. While SLA is what comes out of it in the end, and what's written in the contract, and what you have to pay and compensate people for if you breach it.

**Tom Wilkie:** Matthias, do you publish your SLOs publicly?

**Matthias Loibl:** It's a really good question... I think that people have a couple of SLOs published on uptime trackers, and that's where you can take a look at them... But generally, I think most organizations try to keep it internally, and kind of measure themselves against those... But still, somehow communicate when something's wrong with the users.

**Tom Wilkie:** Yeah, I don't think we publish our SLO performance at Grafana Labs. I think we have a manually updated status page. But we do publish -- I think our SLO terms, the publicly-available SLO for Grafana Cloud is on our website somewhere. I wouldn't be able to find it, but I'm pretty sure it's there.

**Mat Ryer:** But you do circulate them internally, though... So that is very helpful, having that visibility internally or what's going on.

**Tom Wilkie:** Yeah, that's something we should definitely talk about later. It's one of the big cultural changes (I think) in the past year or so, is sending a weekly report on SLO performance. I didn't do it to name and shame people, I promise... But it had that effect.

Anyway, before we go, I'd really to dive into a lot more detail about how you build these SLOs, what techniques and technology you can use to make this whole process easier... But before we do, is there any kind of -- I guess my question is how do I know what the right number is? Is it 80%, is it 90%, is it 99.999%? How do I know when I've got the right SLO?

**Matthias Loibl:** Yeah. Again, a really good question, and that comes up a lot when people first start out. What I always recommend is if you have the data available of your current system, use the data, measure what the current uptime was over the last month or so, and then use that as the foundation to base your objective on for the coming months... They are never set in stone, so you can always adjust them ever so slightly, I would say, and refine. That should give you a really nice foundation to continue.

**Björn Rabenstein:** I think in the ideal world, you are actually -- I mean, in practice that's totally valid, what Matthias just said. But I think to set a contrast here, in the ideal world you would never just look at your last month's performance and adjust your SLOs. That's a bit like how well can we do, and now we should \[unintelligible 00:23:49.04\] It makes sense in practice, but in the ideal world you would do a product research and you know exactly what your product should be delivered with, which service level you want to deliver your product to have the best outcome for your customers; or then you have an idea of how expensive would it be to make it more reliable, and how much happier are my customers then.

\[00:24:12.01\] This is not completely academic, because that's like -- I think Google is very obsessed by that, but other service providers as well, when they realize it actually measures if the website renders in a hundred milliseconds or two hundred milliseconds. And they made research - I don't have precise numbers here, but they find out something like if your website renders in 200 milliseconds, you will have twelve point something percent less customers. And then you can actually put a price tag on this, and then you can come up with a real concrete idea, "We want this website to render in a hundred milliseconds, because -" and then you set this SLO, and then you can start to design your software. It might happen that you find out this is incredibly expensive to realize and to implement, and then you have to adjust, but ideally, you really come from hard science facts why you want this SLO for your product.

**Matthias Loibl:** Yeah, I one hundred percent agree. I'm just burned by the real world, I guess, and people not having a clue in the first place, so I kind of recommend starting out there... But obviously--

**Tom Wilkie:** You've gotta start somewhere.

**Matthias Loibl:** Exactly.

**Tom Wilkie:** You've gotta have a number that you iterate on, right?

**Björn Rabenstein:** You might just have competition -- the competition promise is X, and you think "Okay, I'm a new player on the market, but I realize engineering-wise I can actually design for that", so why not offer X+2, or X-50%, to be a good competitor?

**Tom Wilkie:** The way we came up was -- so this is kind of jumping the gun a bit. The way we came up with our query latency SLO for our cloud metric service was by effectively -- we effectively did what you said, Matthias; we looked at historical performance, we're like "Yeah, that's kind of what it is. We'll stick to that." But then realistically, when we tried to sell it -- I mean, it was fine selling it for small deals, but when we've tried to book our first large six-figure deal on our cloud metrics service, the customer wouldn't accept that SLO. And that was really the process of improving query performance until they're like "Yes, it's good enough. Now we'll sign the contract." And that was where our current SLO got locked in, got set in stone. It was like the first six-figure deal.

We do very occasionally get customers who go "We want a better SLO", and the performance of the system has improved such that we can actually just offer them that now... But yeah, it was actually in that process of negotiating -- perhaps not as scientifically as Google and Amazon did with their hundred-millisecond pageloads, but really working with the customer until they thought the performance was good enough to pay for; it was where the objective came from, and the actual language for the SLA as well.

**Mat Ryer:** That reminds me of like building products in general. Ideally, you're taking -- there's some of it you're doing yourself, and some guesswork and some assumptions, but the best information you get is from real users, is from people that are actually gonna end up either buying it or using it. So yeah, it kind of reminds me of that. And also, that speaks to why you should get thinking about SLOs earlier in the process as well. A bit like you should with the user experience.

**Tom Wilkie:** Yeah. Before we talk about the details and the technologies, I've got one last pet subject. And why is it that SLOs are always quoted in percentiles and never in averages? Björn, why do we use percentiles with SLOs?

**Björn Rabenstein:** Okay, so first of all, if you are more interested in "Are you up?" or "Do you serve errors?" then this is most like a percentage of time you're up, or it's a percentage of requests you serve correctly, and you're not so much interested in latency. When you talk about percentile, I think you're more into latency goals, which means how quickly do I serve the requests.

\[00:27:58.06\] Obviously, if a user wants to load a page and it takes an hour to load, it's not of value for most users, so you'll want to set a threshold. But then averages have this problem that a single, very large outlier will blow up your average, and that's usually not very relevant for users. It's more like "If it loads within two seconds, I'm happy, and if not, I'm unhappy", and then there's a bit of tolerance in between. So it makes way more sense to phrase it as in "What percentage of requests have I served within two seconds?" Or the inverted thing is the famous percentile, "At what latency have I served 99% of the requests?" This is where you come up with those percentiles. Yeah, having histograms is very important, which is one of my other favorite topics in this whole area.

**Tom Wilkie:** Your slo-libsonnet and the Pyrra project - does that support using histograms and percentiles for setting latencies, Matthias?

**Matthias Loibl:** Yeah, for latencies most definitely. I mean, Prometheus itself uses histograms to measure latencies, or has the histogram quintile function. So overall, you set the latency in the query, inside the config, and then what you get out of it is measuring the percentiles. So that's exactly right.

**Break:** \[00:29:18.09\] to \[00:29:22.25\]

**Mat Ryer:** So we talked a bit earlier about error budgets... Can we dig into that a little bit? What is an error budget?

**Björn Rabenstein:** Yeah, an error budget is if you want an inverted SLO. Or let's say if you have a specific kind of SLO, which is based on error rates -- or success rates; let's first bring the positive way. You've promised the customer you will serve 99.9% of the requests correctly and in time. Then the inverse of that, the 0.1% you have left is your error budget, and now you need a kind of billing period, which usually if you have an SLA, is nicely formulated in your contract. If you just have users that come and go, because you serve a free product that just makes money with ads or something, it's not that formalized. But you might still wanna have some billing period, which is often a month.

Often, you say "Within a month I will serve you 99.9% of the requests correctly and in time", so your error budget is 0.1%. Then you get into this idea that you burn your error budget. If you have an outage one week into the month, and a certain number of request have failed, then you know you've burned 20% of your error budget, but you are also already 25% into the month, so that's kind of fine. You burned your error budget at the right rate. Then if you burn it too quickly, you can start to say "Okay, let's act a bit more cautiously, let's not do this risky new feature launch this month."

It's a bit artificial that you have this monthly boundary, but sometimes that's literally in your contract. You could do some floating thing if you want, but it's also not about precise numbers here. it's about getting the broad balance right. If you have to reimburse your customer because you're in breach of your SLA, it's a different thing. But from the developer perspective and this whole balancing between the ops people that always want stability and the devs who always want to push new features - that's a very useful tool. It requires you to have an error-based or success-based SLO, and it might not be your final SLO or your final SLA, but it's a good start, and a good part of it... And also, it allows you to create alerts. This whole chapter 5 in the SRE workbook we talked about - this is all about that; you cannot predict if there will be a huge outage on the last day of the month... But you can do a bit of statistics and say "Okay, within a certain time I only want to burn a certain percentage of my error budget to be on track", essentially.

\[00:32:01.26\] And that is what you can alert on and that is what a metrics-based monitoring system can do really nicely... And all those alerting expressions are quite complex, but that's why you have an expression language like PromQL, where you can nicely express all those alerts. And that's a very powerful way of alerting proactively, not too often, and usually not too rare, that you get no noisy, meaningful alerts out of it.

**Tom Wilkie:** So to make this a bit more real... Like, I will admit to not fully understanding the expressions and the maths behind the error budget style alerting that Björn has implemented, or that Matthias' tool implements as well... But when we started offering this SLA on our metrics service at Grafana Labs, we agreed 99.5% of requests complete within a couple of seconds. I don't remember the details. So we built an alert that said "In a five-minute moving window if more than 0.5% of requests are slower than a couple of seconds, page us." That seems like the obvious thing to do, right?

So we built that alert, and it fired -- you know, not all the time, but multiple times a week, multiple times a day sometimes. And we would scramble to scale the service up, to diagnose whatever issue it was, and generally put a lot of effort into optimizing that. And yet, at the end of every month, when we went and ran a report to say what was our 99.5th percentile latency over the last month, it always came back 200 milliseconds. I'm like, "How can these two things be true?" Like, we are way below the SLO we agreed with the customer, we're well inside our SLA, and yet we're getting paged multiple times a day.

**Björn Rabenstein:** Yeah, that's the core of the thing. If your billing period is five minutes, then your five-minute sliding window is precisely right. This is when you promise the customer "Ever five minutes we'll know always we'll never have more than 0.5% of errors." But if you have a billing period of a month, which for the systems we have and usually for the requirements we have makes much more sense, where you can say "We average over a month", so that allows me to have a 5-minute or 10-minute - even if it's a complete outage, which is rare with our systems, but it could happen - that's still okay, if the rest of the month is totally fine. But that, again, depends on your product, on your users, on your contracts.

But that's the important thing... Having this not noisy SLO, where every 5-minute window is less than 0.5% errors, is usually very expensive to get, and it's also not what users require in most of the cases. And that's where you get into those averaging, and that's where the alerting also gets more complicated, to not make it noisy. Because no, you can't have in every 5-minute window that.

So if you have a 10% error rate over five minutes - sure, alert me. But if I have an 0.5% error rate, it's kind of precisely what I'm allowed to do, so perhaps I shouldn't run that close to my limit all the time. But if I run that close to the limit for a day, it's probably fine. And I don't even have to page, because it's such a slow burn... If I see this, I can after three days tell the SREs or the dev ops people, whoever runs this, "Listen, you have precisely your right amount of error budget for three days, but it shouldn't be worse, so perhaps you'll want to halve that", so you get a non-paging alert that can \[unintelligible 00:35:40.02\] But it's not urgent, you don't have to wake somebody up in the middle of the night, and that person has to drop everything and repair things.

**Tom Wilkie:** \[00:35:52.14\] I mean, it was night and day when Björn put this in place for our metrics service. We went from paging every few days, sometimes multiple times a day, to only paging every few weeks for this particular alert, and when it did page, there was something wrong. When it did page, there was an actual issue that we could solve. The drop in performance was \[unintelligible 00:36:14.06\] the drop in success rates was caused by an actual error, caused by a rollout or an outage in an underlying service that we relied on.

So this night and day, this reduction in pager noise - when Björn implemented it for the Cortex group inside Grafana Labs, every other team very quickly was like "Oh, we want that", and copy and pasted the alert rules that Björn built, and implemented them for their service. And we saw a huge reduction in our on-call load.

But I wanna get into how does this work. Because as you point out, alerting on your threshold on 5-minute windows breeds a huge amount of noise. But if I alerted on a one-month window for that threshold, a complete outage of the system might take 3-4 hours before it built up enough of an impact on my error budget for it to actually page. And I wanna know about a complete outage sooner than a few hours. So how do the error budget style alerts trade off those two different requirements?

**Matthias Loibl:** Yeah, that's exactly what the multi burn rate alerts are, described in chapter five of the SRE working book. The way it is handled is by combining multiple time windows, really. So over like a 5-minute window, for example, if that breaches a certain threshold, it would fire. But then that might be too flaky, as you said, so we wanna give these engineers only if something really bad happens a page.

And you can combine that by having an end statement with a time window of over an hour. So combining these, it has to be bad for the 5-minute windows, but it also has to be bad enough over one hour. And combining that kind of reduces the flakiness overall. I'm sure Björn can give a bit better mathematic explanation, but that's how I think about this.

And then you combine different windows. Overall, the biggest window is the entire objective window. So if that fires at the end of the month or at the end of the window, you won't have any error budget burned, and then there are certain steps or certain severities in from "Oh, this is super-urgent. Everything is on fire" to the "Yeah, if you continue down that road, you will have no error budget left." So it kind of separates that nicely. But yeah, Björn has probably a way better mathematical explanation.

**Mat Ryer:** I was gonna ask that though, how should teams do this if you don't have a Björn to come in and just do this for you?

**Tom Wilkie:** Does everyone not have a Björn?

**Mat Ryer:** I don't think everyone yet has a Björn... There's been scaling issues in the rolling out. We've not been able to roll out enough Björns. So unfortunately no, not everyone has one. So how do they find out this?

**Björn Rabenstein:** I mean, the mathematical details are probably not good to explain in detail in a podcast, but that's why you can just click on the links in the show notes and read in that chapter. I think it's also not rocket science. Those various burn rates and window length that are on that chapter are -- I mean, you could tweak them if they don't match your purposes. But I think it's not even that important how many windows you have and how big they are.

The huge breakthrough is that insight, that there are different windows and you have different burn rates - the moment you have that, you will have the biggest return. And if you tweak them a bit, "Do I really want to alert on the one-hour window if I have ten times my burn rate that is allowed?", that doesn't even matter that much. I mean, tweak as you see during your daily life.

\[00:40:13.20\] What we saw in practice, what is way more likely that you have to tweak is that you measure the right things, and those things that are way more relevant than tweaking those numbers to the last digit. So I wouldn't even worry too much about the math behind it. Luckily, we have those cookie-cutter approaches where you can actually use those rules without understanding a lot of all the mathematical detail, or even the exact PromQL formulation you have in your alert.

**Mat Ryer:** So error budgets tend to be percentages then, right? Assuming that's what you've said is part of the SLO... Which makes sense. As you add features, you may have more errors, but hopefully, you're getting more requests to balance it out.

Is it a bit like -- do people start to think of this like "Use it or lose it" with your error budget? Do teams worry that "If we're too good for too long", that that's gonna shrink down, and then we've sort of set ourselves up for failure in the future?

**Björn Rabenstein:** That's another reason for not using your SLO based on your past performance, right? Your SLO should be based on the actual product requirement. But you could argue if a product -- I mean, there are just products who are perfect, and they don't see a lot of development, and they just do their thing... So there's certainly nothing wrong if they just run reliably, and only if you really have a power outage in like two of your data centers or something you see any blip.

But if you have a product that is being iterated on, which is probably more normal than the other case, then you could always argue you should use your error budget. It's an asset to have an error budget, and if you don't use it, perhaps you should do a bit more risky, or just dare something and push this feature.

It goes both ways, right? If you are consuming your error budget, if you're over your error budget it's obviously bad. But if you don't consume your error budget, it's maybe also bad, for not so obvious reasons.

**Mat Ryer:** That is really interesting. It's a bit like local government - if they don't spend all of their thing, they don't get it next year, so... Use it or lose it, people.

**Matthias Loibl:** Yeah, as Tom earlier said, I think the balance in terms of reliability and velocity in terms of shipping new features kind of really comes into play here. So use the error budget wisely, don't overuse it either... You wanna be able to not annoy your customers either. But if there's so much left, then use it for something good, and shipping new features certainly is a good thing.

**Tom Wilkie:** Coming back to that question you asked earlier, Mat - if teams don't have a Björn, if everyone doesn't have a Björn, and we haven't perfected human cloning yet, I think that's a good segue for Matthias' project, Pyrra. Matthias, can I use Pyrra to do this for me?

**Matthias Loibl:** Yeah, that's exactly what we've built Pyrra for. So we kind of started out \[unintelligible 00:43:19.11\] looking at who are the personas that use SLOs, and we identified that most often it's obviously SREs, no big surprise. And then we actually started interviewing a handful of people and had a long hour conversation with them, trying to figure out "Have you used SLO? If not, why haven't you used them?" so on and so forth. So we tried to really figure out what are the entry barriers to using SLOs. Out of that came the Pyrra project, which now is able to give you a high-level configuration file where you can put in your objective, your time window, and then an indicator, so an SLI that uses a Prometheus metric, and then it does all the PromQL queries for you, it creates the multiple burn rate alerts for you... So all of that is taken care of, and you don't really have to think about anything else than kind of -- yeah, the high-level things we were talking about, like "What is my objective? What is the time window we're talking about?" etc.

**Tom Wilkie:** \[00:44:27.08\] That sounds really cool. How do I use this? What do I have to do? You build this config file, and then...?

**Matthias Loibl:** Yeah, exactly. So it is a CRD, so a custom resource definition kind of based configuration, but it also works outside of Kubernetes. But yeah, like every SLO, it's a configuration file; once you've written that one, it gets loaded into either a Kubernetes controller, or just a file system runtime that reads this configuration and generates the output for Prometheus to then read and do all the heavylifting of alerting and ingesting. So it's not really doing that on its own, but it's kind of like standing on the shoulders of giants, utilizing Prometheus in the right way, in the correct way.

Everything from the alerting is everything that you know from Prometheus. If there's an alert, it goes through Alertmanager, and then it goes to Grafana OnCall, and you can use that to --

**Tom Wilkie:** Other OnCall products are available.

**Matthias Loibl:** Oh yeah, okay. So yeah, you can just use your normal workflow and it just ties into your existing Prometheus instances.

**Tom Wilkie:** That's very cool.

**Mat Ryer:** Yeah, it is very cool. When should teams engage with this project then? Is this something you should get set up from the beginning, or is it something you do much further in the lifecycle?

**Matthias Loibl:** That's a really good question. I would recommend getting your hands dirty as soon as possible. Just deploy it and see "What is my uptime right now? What's the availability, and where do we wanna go?" You can obviously, as Björn said, take a more scientific approach and approach it from a different perspective and then put these SLOs in place and see how you're doing against those. I would say, if you have already alerting that's quite noisy, then it's already a good next step for you.

**Tom Wilkie:** One of the things I was very impressed with Pyrra is its user interface. We've focused a lot on alerting with respect to SLOs, but there's this whole other aspect to "Oh, I actually wanna go and see what my performance is, my historic performance, and not just be told when it's broken." And you've built quite a rich user interface for exploring SLOs and past performance, haven't you?

**Matthias Loibl:** Yes, exactly. That was one of the things that came out of the interviews with the SREs that we had last year. We also were discussing having just Grafana dashboards, which obviously I've built tons of, and that would have been really easy to just do... But there was something missing in terms of this very specific use case, that was the SLOs, and trying to have this overview, and then also being able to really drill down into specific SLOs and trying to figure out how they are doing.

One other reason is we wanna be able to have a nice editor for you to eventually -- we wanna have that for you to visually explore these SLOs, and define them, and see live, as you're setting your objective, "How will my error budget look like", and so on and so forth. So there are certain things that just weren't possible out of the box with Grafana dashboards.

**Tom Wilkie:** You don't have to apologize, Matthias...

**Matthias Loibl:** No, I just wanna --

**Tom Wilkie:** You don't have to use Grafana for everything.

**Matthias Loibl:** Yeah, exactly. But yeah, overall I think that was one of the reasons. For everything else, I think I still love Grafana dashboards.

**Tom Wilkie:** \[00:48:07.04\] I think your UI makes the whole topic of SLOs and what you've done really accessible, as well... And there's this interesting side effect I've noticed. We have a similar system; we don't use Pyrra, but... I've noticed that once you start giving people an interface where they can see performance of their SLOs, then within the organization, teams wanna be in that interface. They wanna see themselves in there.

We started a project -- using Björn's rules that he built, we started generating dashboards and uploading them, and then we started emailing a PDF of those dashboards to everyone in the cloud team, every Monday morning. And you know, at the time, it only had Cortex and Loki and Tempo in there, and over time I've found teams submitted PRs to our config repo to add themselves to that dashboard, effectively, and generate their own alerts, and generate out entries in this dashboard to see their SLO performance. And now there's like 30-40 SLOs to find in here, and it's become a service directory. It's become a service directory of all the services inside Grafana Cloud, and their performance. And whenever this email goes out on Monday, and SLO performance isn't green, hasn't hit their SLO, I get an email from the team saying why. And it's great; I never asked for this, but they feel that responsibility. And culturally, SLOs internally have been a great driver of "Oh, we should all report our SLO performance in the same way. We should all have it visible in the same way." We now have a quasi kind of service catalog.

I think these cultural changes, the adoption of SLOs and the really high quality alerts that come with it have actually probably been one of the more profound things that have come out of this piece of work. I think something like Pyrra can drive that in other organizations. This is not a question, this is just a statement at this point... It's just something I'm really excited about.

**Matthias Loibl:** Do you think it's the gamification of some sorts that drove this internally at Grafana Labs, where people are kind of like really after making a good availability?

**Tom Wilkie:** Yeah, probably. There's definitely -- I mean, all the changes to the definitions of alerts are peer-reviewed, right? So you can't just slip in like "Oh, we'll ignore all failures that happen on a Wednesday." That would never get through a code review. So I'm confident they're not gaming the system in that respect. But I think once you -- there's that old adage, "You can't improve something until you measure it." Well, I would kind of modify that to be like "You have no motivation to improve it until other people see you measuring it and see it getting worse or getting better." So the exposure that this has given to SLOs... I mean, it's reviewed at the highest levels in the company, and it's probably one of our most used dashboards now. And I just think the cultural changes in the organization have been really profound.

Now, this has got nothing to do with SLOs, but now that we have a curated list of services, and we have metrics exported from every region describing the performance of that service, we're actually using these SLOs and the recording rules we generate to measure the progress of new region rollouts. Completely unrelated to SLOs, but we can now see "Is this service working in this region?" because we've got an SLO being exported by that region. And just the benefit of having a well-curated service catalog, that the engineers care about being accurate and correct... Because the problem with every service catalog I've ever used is that it's always out of date. You know, they just have really been quite profound.

**Mat Ryer:** \[00:51:41.13\] We don't have much time left, but I wonder if there's space for any kind of gotchas that we could cover to help people -- what are common mistakes people make for this, or other tips and tricks. One of them I was gonna ask - and I have heard this before - we talked earlier about the optimization, the homepage has to load within a hundred milliseconds. I've seen as part of continuous integration systems where they'll measure things that they care about, and that becomes acceptance criteria really, and you can't even merge it if you've done something that's slowed it down too much. What other tips and tricks do we think are worth sharing?

**Björn Rabenstein:** I think at this point, where SLOs have become really a buzzword, and everyone wants them, and I see that we have conferences by that name, and everything, so it's really popular... And I think we get into this phase of the lifecycle where it's kind of probably fairly easy to convince the organization to adopt it... But then they turn it into the other way where they think it's a magic wand and will fix everything.

So I think there's a lot of -- if you do this for the first time, you have so much easy returns. What Tom said, the alerts are suddenly like two orders of magnitude less noisy. You can suddenly talk about so many things in a more meaningful way. Your resource planning might be way more informed. But then you run into all those little problems, in the details, and you might get super-frustrated if your expectations were super-high. So I would really see it as a tool you -- it will give you a lot of earlier returns, but then you have to iterate on it.

For example, because Tom praised this introduction of those multiple burn rate alerts and error-based SLOs so much - this depends where you measure, right? We try to -- also, measurement might be more or less expensive, so we have a really easy measurement with our Prometheus metrics... But that's data metrics that are coming from the system, so you can have external factors that if the requests don't even reach this system that measures them, you wouldn't even notice that there's an outage. So if you have something on the load balancer level, and it's the load balancer of your cloud provider...

So there are a lot of details you have to take into account for the perfect SLO measurement... But yeah, don't let perfection get into the way of the good. Try to reap those earlier returns, but don't expect magic. And then you iterate, and then you get into the more complicated things, and... Yeah, you will discover a lot of them, but don't get frustrated by them. Be happy about the returns you get, and don't expect that everything will be perfect from the beginning.

**Matthias Loibl:** That's the point of SLOs anyway, right? You won't be a hundred percent perfect. And that applies here as well. You will be making mistakes, but just go for it and it will be just good enough.

**Tom Wilkie:** There's an interesting challenge we're facing at the moment. Now that we curate these SLOs, and they're really high-quality, and they're becoming important for our organization, we need to offer an SLO on our SLOs. Like, how often are our SLOs accurate and reliable? I know over Christmas we had some issues with the data in our SLOs and they were not accurate for like a few days over Christmas. So yeah, is there a whole meta SLO debate to be had...?

**Mat Ryer:** \[laughs\] We'll save that for a podcast about podcasts, maybe...

**Tom Wilkie:** Oh, yeah. \[laughs\]

**Mat Ryer:** Unfortunately, I think we are running out of time. Any other thoughts before we wind up?

**Tom Wilkie:** I would admit that I was relatively naive about the whole error budget SLO a few years ago, when Björn joined and kind of showed me the way. But I think it's just been so transformational for the culture of how we measure our performance at Grafana Labs... And I'm just so excited to see projects like Pyrra - and there are other projects out there, right? But make this available to more people.

And if there's one thing I would say "Yeah, do temper your enthusiasm about how impactful this can be", but I think there's reasons to be pretty excited about this. And the fact that this is getting that level of exposure to managers, directors and so on, and that there is this level of adoption in the industry... It's something I'm just really, really excited about.

**Mat Ryer:** Yeah. I love the fact that you should use your error budgets like that as an idea, it's great. If you're way within your error budget, maybe you're not taking enough risks; you've got room for innovation, you can push the envelope a little. That is kind of a great take-away, I think, for people.

Well, sadly, that is all the time we have today. Thank you so much, Tom Wilkie, and our special guests, Matthias and Björn. I'm Mat Ryer, and thank you very much for listening. We'll see you next time on Grafana's Big Tent.

**Outro:** \[00:56:35.21\] to \[00:56:48.25\]

**Matthias Loibl:** Talking about the intro - I love the intro music. Is it inspired by Royal Blood, or something? It's very similar...

**Mat Ryer:** No, it was just kind of... Happened, I think. I don't know. But I like it too, for a podcast.

**Matthias Loibl:** Yeah, it's something different, for sure.

**Mat Ryer:** Yeah, I think so.

**Matthias Loibl:** But is it specifically made for this?

**Mat Ryer:** Yeah.

**Matthias Loibl:** Did somebody record it?

**Mat Ryer:** I made it.

**Matthias Loibl:** You made it? Okay.

**Mat Ryer:** Yeah, yeah.

**Matthias Loibl:** I wasn't sure. That's pretty awesome.

**Mat Ryer:** Yeah, I do sort of hobby music production, so... Any excuse to make a theme tune for something, I'm there. I'm straight there.

**Matthias Loibl:** Yup. Was it like low-tune guitar, or was it actually base?

**Mat Ryer:** It's a base, but check it out... It's a micro-base.

**Matthias Loibl:** Ah, nice. Yeah.

**Break:** \[00:57:37.23\] to \[00:57:53.02\]
