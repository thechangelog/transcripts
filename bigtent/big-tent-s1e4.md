**Tom Wilkie:** Hello! I'm Tom Wilkie, and welcome to Grafana's Big Tent, the podcast all about the people, community, tools and tech around observability. Today I'm joined by Mat Ryer. Hi, Mat. How are you doing?

**Mat Ryer:** Hello, Tom. How are you doing? I'm alright, I mean.

**Tom Wilkie:** Yeah, good. Well done. First question correct.

**Mat Ryer:** Easy. Next!

**Tom Wilkie:** Next... Whereabouts in the world are you today?

**Mat Ryer:** Foggy London town.

**Tom Wilkie:** Ah. Yes, it is a bit lovely out there today, isn't it?

**Mat Ryer:** Yeah, it's very orange, I think, this \[unintelligible 00:00:45.11\] is blowing over, or something. So it's very orange outside.

**Tom Wilkie:** A bit weird, yeah.

**Mat Ryer:** Yeah, a little bit.

**Tom Wilkie:** Are you coming tomorrow to the in-person meetup?

**Mat Ryer:** Yeah, it's gonna be strange being back in person, seeing people, seeing their legs... I'd forgotten about legs.

**Tom Wilkie:** Are you gonna remember to wear pants?

**Mat Ryer:** Yeah, definitely. I've written it down.

**Tom Wilkie:** And trousers?

**Mat Ryer:** Um, I'll just write that down as well, just in case.

**Tom Wilkie:** That was a joke from Eric in the audience.

**Mat Ryer:** \[laughs\] I enjoyed it, too.

**Tom Wilkie:** So today we're talking with Marco Pracucci -- oh, I should have checked beforehand... Do I say your second name correctly, Marco?

**Marco Pracucci:** Yeah, it's pretty good.

**Tom Wilkie:** Okay. So today we're talking with Marco Pracucci, and Cyril Tovena. Same question to you, Cyril.

**Cyril Tovena:** Yeah, that was good.

**Tom Wilkie:** How long have we known each other now?

**Cyril Tovena:** Well, three years, apparently...

**Tom Wilkie:** Yeah, so I think that's the first time I've asked you what your second name is... So Marco and Cyril are both engineers at Grafana Labs. As we just heard, Cyril's been with us for three years, and has worked predominantly on Loki, our log aggregation system... But did start life working on Cortex.

Marco's been here just over two years, I believe, and has worked predominantly on Cortex, and more recently on Mimir, the project we're gonna talk about today. Cyril is based in France, Marco's in Italy, so we're a European podcast today. How's it going, fellas?

**Marco Pracucci:** Good, good. I'm super-excited to be here.

**Cyril Tovena:** Yeah, same.

**Tom Wilkie:** We're really excited to have you on the podcast. Have you done many podcasts before?

**Marco Pracucci:** I've founded a podcasting company, you know...

**Tom Wilkie:** I did not know that.

**Marco Pracucci:** So I'm supposed to know something about podcasts, in theory at least.

**Tom Wilkie:** Well, I should have known that. Can you give me some hints and tips? I am not very good at this.

**Marco Pracucci:** No, I think you're great. I especially love your humor. I think it's very important when it comes to audio media. You know, the voice, the tone of your voice is super-important, since that's the only way we are going to transmit our emotions.

**Mat Ryer:** Yeah, Tom would do good on video as well, because he looks funny as well, so...

**Tom Wilkie:** Oh, thank you, Mat.

**Mat Ryer:** So you've got all bases covered.

**Tom Wilkie:** Yeah. Thank you. Some people say I have a face for radio.

**Marco Pracucci:** It's difficult to find something where Tom doesn't shine...

**Tom Wilkie:** Okay, well, just for full disclosure, Marco is in my team, so he has to say nice things about me. \[laughter\]

**Mat Ryer:** Oh, I see. That makes sense now.

**Marco Pracucci:** Yeah, now I'm expecting a raise, you know...? \[laughter\]

**Tom Wilkie:** So today we're gonna talk about Grafana Mimir. Who wants to go first? What is Grafana Mimir, Marco?

**Marco Pracucci:** Well, it's a new, or a next-generation time series database for Prometheus and beyond. It's a time series database we have built at Grafana Labs, which is highly available, horizontally scalable, supports multi-tenancy, and a durable storage, other than blazing fast query performances over long periods of time.

**Tom Wilkie:** Wow. That sounds pretty amazing. I think you mentioned high scalability. What does that mean, where does that come from? What is high scalability?

**Marco Pracucci:** \[03:55\] Yeah, sure. We are seeing an increasing number of customers needing massive scale when it comes to collecting query data metrics... And we see this growing need across the industry to scale to a number of metrics which just a couple of years ago were unimaginable. To mention the scale at which we have run and we are running Grafana Mimir, we are talking about more than a billion active time series for a single customer.

**Tom Wilkie:** A billion?

**Marco Pracucci:** A billion.

**Tom Wilkie:** Wow. Pretty good.

**Marco Pracucci:** Yeah. I don't even know how many zeroes are in a billion.

**Tom Wilkie:** And this is an American billion, right? So it's nine. So it's not a British billion, which has 12.

**Mat Ryer:** A BILLION!

**Marco Pracucci:** Yeah, a BILLION!

**Tom Wilkie:** Thank you for the --

**Marco Pracucci:** Yeah, nine zeroes.

**Tom Wilkie:** Just to get that clear - was that an American accent, Mat?

**Mat Ryer:** Yeah, big time.

**Tom Wilkie:** Oh, okay. It wasn't clear. Sorry. \[laughter\] And you mentioned that it wasn't just about high scalability; you mentioned blazing fast performance. So what is the blazing fast performance bit of Mimir?

**Cyril Tovena:** Yeah, the blazing fast performance for the query path - there's more and more customers nowadays that want to query across multiple clusters, for instance. So this high cardinality of data across a single query exists, and Mimir has been designed to be able to fulfill this need. So you can query across a lot of series, across a lot of clusters, a lot of namespace, and you're gonna be able, for instance, to get information like \[unintelligible 00:05:24.17\] across multiple clusters.

**Tom Wilkie:** In the same way Marco gave a figure for what we've tested it to, do you have any figures to hand on what kind of performance you can expect from queries?

**Cyril Tovena:** I have actually some comparison in between queries, but not specifically the amount of series right now.

**Tom Wilkie:** Okay, no worries. The number I always quote when people ask me - the techniques we've used have made certain high cardinality queries up to 40 times faster.

**Cyril Tovena:** Okay.

**Marco Pracucci:** It's increasing every time we talk about it.

**Tom Wilkie:** Is it?

**Marco Pracucci:** Yeah, yeah. We started with then, and then 20, 30, 40... It's getting bigger.

**Tom Wilkie:** In the results I saw - this was months ago - there was one query that was 40 times faster.

**Marco Pracucci:** Yeah, there are some edge queries getting so fast... But what we observe typically is about 10x faster with query sharding.

**Tom Wilkie:** Nice.

**Mat Ryer:** So what's query sharding then? What's actually going on there?

**Cyril Tovena:** Query sharding is a technique that actually originated from you, Tom. And I think he did a talk at KubeCon...

**Tom Wilkie:** I don't think I did. I think it was Owen.

**Cyril Tovena:** No, you did a KubeCon talk... It was blazing fast, and --

**Tom Wilkie:** I did the talk, but I was just taking credit for Owen's book.

**Cyril Tovena:** Yeah, you did that. So the idea is that we will parallelize queries. Until now we were actually parallelizing queries just by data, or by time. But in the case, as Marco said, where there's a billion of time series in a cluster, then by time is not enough anymore. You want to be able to split by data, and we call that shard.

A shard actually is a set of series. So what we're gonna do is we're gonna actually execute PromQL on a set of selected series; for instance, we're gonna use \[unintelligible 00:07:32.12\] and each of them will only work on one sixteenth of the data, and then we're gonna recombine the data back on the frontend, and you're gonna be able to split up the query by 16 or 14, apparently.

**Tom Wilkie:** \[07:52\] So I think in that brief intro to Mimir we've used a lot of pretty technical terms, and things the audience may not be familiar with. So should we take a step back now and maybe talk about some of the shoulders we're standing on? Mat, as the non-technical person in the audience, which of these terms do you think we should cover first?

**Mat Ryer:** Well, thank you for reducing my entire career down to nothing...

**Tom Wilkie:** That's alright.

**Mat Ryer:** Yes, so Prometheus then - yeah, I bet there are people that haven't... If there's people out there that haven't used Prometheus, could we talk about that? What is Prometheus doing?

**Marco Pracucci:** So Prometheus is a monitoring system. You configure Prometheus to discover applications, or machines running on your network, and to scrape metrics from those machines or those applications. Now, the Prometheus architecture is what is typically called a pool model, which means the Prometheus application, which is a central server, will take care of discovering the applications running on your infrastructure, and send requests to those applications to scrape the metrics at periodic intervals of time.

Then Prometheus allows you to query back this data, those metrics, using the PromQL language, which is basically a functional style query language offered by Prometheus.

**Mat Ryer:** That's cool. So if I build an application, do I only ever need to store the current numbers, and then Prometheus will store the history for me?

**Marco Pracucci:** Exactly.

**Mat Ryer:** That's nice. That's much simpler then to implement.

**Tom Wilkie:** And (I guess) why is Prometheus taking the world by storm? What's special about Prometheus that made it become one of the most dominant monitoring systems in time series databases out there?

**Cyril Tovena:** I think the reason why is because it's very simple to use. Also, the model of scraping makes it quite simple to discover new targets, so you don't need to configure a bunch of targets. It actually will discover... And I think with the rise of Kubernetes, that's how it actually became very popular; because Kubernetes has this service discovery, you just install it in your cluster, and it will automatically, suddenly start scraping all your applications. And even Kubernetes metrics itself. So I think the ease of use is definitely one of the reasons for why it has been so popular.

**Marco Pracucci:** Yeah, I one hundred percent agree. I also believe the query language is very powerful, compared to other query languages. Think about SQL. The PromQL is way more compact. You can express a very complex query just in a few words. And I think that's a very powerful property for whoever monitors systems and needs to quickly get back an overview on the health of their applications.

**Mat Ryer:** Is it hard to learn PromQL?

**Marco Pracucci:** Not in my experience. I think it's pretty easy. There's a comprehensive documentation. Nowadays there are also a bunch of unofficial documentation and materials, like online trainings, blog posts, articles and so on. So in my experience, I think it's pretty easy to learn and use.

**Cyril Tovena:** Yeah. Because it's so popular there's so much resource online. And also, if I have to give one resource that I've found really useful, it's the PromQL For Mere Mortals that happened in Munich... I think it was in 2019. That was a very good one when you get started on PromQL.

**Tom Wilkie:** I mean, YouTube is such a resource now for these kinds of things... There's so many good videos on YouTube, from all the conferences, and so on.

So you also mentioned, at the beginning - and this is a bit of a weird question to ask... You mentioned Cortex. Marco, what's Cortex?

**Marco Pracucci:** \[12:04\] Cortex is an open source project which actually started at WeWorks, and then after some time it was open sourced and donated to CNCF. It's a horizontally-scalable version of Prometheus. The idea of Cortex is not to replace Prometheus, but to extend Prometheus. Basically, you keep running Prometheus, scraping metrics from your applications, but then you configure Prometheus to remote-write, to push those metrics to Cortex. And Cortex is your centralized, highly-available, horizontally-scalable, durable storage for all your metrics.

**Tom Wilkie:** Why would I wanna do that? Why would I wanna push my metrics out of Prometheus to a central place?

**Marco Pracucci:** Right. There are many use cases, or multiple use cases. First of all, the typical setup is to have Prometheus running close to the monitored targets. So if you're running your systems in multiple data centers or cloud regions, you typically have multiple Prometheus installations. With Cortex, you can centralize this data. So you keep Prometheus running close to your monitored targets, but then you remote-write all those metrics into a central place, a central cluster, which is your Cortex cluster.

And Cortex offers you a global view across all the metrics spanning -- well, scraped from multiple Prometheus servers, which means in this context spanning across multiple data centers or cloud regions, for example.

Another reason is that Cortex allows you to overcome the vertical scalability limits of Prometheus. Prometheus is an excellent application, but obviously, it's a single-server application, so it's limited by the capabilities of the hardware you run on in terms of disk, CPU and memory. With Cortex, you can distribute the data and the workload, both on the write and read path, across multiple machines.

Another one is having a long-term storage. Now, to store a large amount of metrics, you need a very big disk if you run on Prometheus. Cortex allows you \[unintelligible 00:14:22.15\] on object storages like AWS S3, or Google Cloud Storage, in order to keep your data for longer periods of time. If with Prometheus you keep the data from a few weeks to a few months, with Cortex you can keep the data for years.

**Tom Wilkie:** That sounds pretty cool. You know, what you've just described does sound a lot like Mimir though.

**Marco Pracucci:** Yeah. And that's the reason behind it. Mimir has been built or is based on Cortex. Mimir is our next-generation distributed time series database, which is based on Cortex, and upon which we have built extra features for additional scalability, or even better performances compared to Cortex.

**Tom Wilkie:** Oh, cool. So one of the -- I've got a list of other things you've said. I don't think you actually mentioned Thanos at the beginning, but I feel it'd be remiss in this conversation to ignore Thanos. What does Thanos do?

**Cyril Tovena:** Thanos is actually the same idea as Cortex, but not for the same type of user, in my opinion. I think Thanos also allows you to be able to query across multiple clusters, but it works a bit differently than Cortex. At the beginning, I think Cortex was already multi-tenant, Thanos wasn't at the beginning, so it wasn't really designed for building a SaaS product, for instance.

\[15:59\] Another difference is also the deployment model is way different. In Cortex you need to spin up all the components that are part of the architecture to run Cortex. In Thanos you can actually go incremental. So it's a bit easier. You can only add the cheaper, for instance, and you can only add the component at the edge.

So the big difference is Cortex is centralized, and Thanos is more working on the edge. So when you wanna query, it will actually connect to all your \[unintelligible 00:16:31.13\] and then it will aggregate back the results on the Thanos receiver, I think...

**Mat Ryer:** Yeah, Thanos also has that feature where with one click you can delete half of it \[unintelligible 00:16:48.04\]

**Marco Pracucci:** Yeah. One snap.

**Mat Ryer:** Yeah, one snap. Well, one click. We'll stick with that.

**Cyril Tovena:** But it's also part of the CNCF. I know we're often talking to the Thanos team. We often collaborate with them, actually.

**Tom Wilkie:** Pretty cool.

**Mat Ryer:** So how would you decide to choose? Is it just that you have a different use case why you'd use Thanos, or is it other reasons?

**Cyril Tovena:** It's a difficult question for me, because I will always start with Mimir or Cortex, because -- I mean, if I was just comparing it with Cortex, I would probably say depending on how \[unintelligible 00:17:38.12\] run this with a system, maybe you wanna go with Thanos, because Thanos would be easier to install. Now, with Mimir I think we've improved that a lot, and it's not really the case anymore. Mimir runs also as a single binary, the configuration is much more simpler... All the defaults have been changed so that you can run a cluster that will already support a very high load. You don't need to tweak, like you will need in Cortex, to make it performant.

So for me it's a difficult question. I would say Mimir right now, and if you have to choose with Cortex, it depends on your experience.

**Tom Wilkie:** Marco, you gave a PromCon talk a couple of years ago with Bartek, the lead maintainer from Thanos, didn't you?

**Marco Pracucci:** Yeah, I did.

**Tom Wilkie:** Can you represent Thanos' in Cyril's completely unbiased recommendation there?

**Marco Pracucci:** Yeah. So what Cyril previously described is the edge deployment mode of Thanos. But in recent times, Thanos also allows to run or to deploy very similarly to Cortex - fully centralized, with the ability to accept remote writes from Prometheus.

So nowadays, the two projects, Thanos and Cortex, are very similar. So the Cortex blocks storage, which we built a couple of years ago, we went into the Thanos direction in terms of how the data is stored in the object storage. And when Thanos introduced the received, which is like the Cortex ingester, Thanos went into the Cortex direction in terms of how the data is received from Prometheus.

So nowadays the two projects are very similar, and it's quite difficult to find big differentiators. I think it's a different story if we try to compare with Mimir, for example, for the reason why we have built Mimir - to overcome some scalability and performance limitations we have experienced while running Cortex at scale.

**Tom Wilkie:** You've mentioned scalability limits in Cortex and Thanos... I mean, where do these limitations come from?

**Marco Pracucci:** Sure. We have found different limitations. First of all, to understand these limitations, we need to understand how the data is stored. Both Cortex and Thanos, and also Mimir, use Prometheus TSDB to store the metrics data in the long-term storage. Basically, Prometheus TSDB partitions data by time, and for a given period of time the data is stored into a data structure which is called a block. And again, inside the block we have an index used to query this data, and the actual time series data, so the actual samples, which are compressed chunks of data.

\[20:27\]Now, we have found some limitations -- well, they are well-known limitations in the TSDB index, like the index can't grow above 64 gigabytes, or even inside the index there are multiple sections, and each section, or some of those sections can't be bigger than four gigabytes... Basically, these look like very technical details, but at the end it means that you have a limit on how many metrics you can store for a given tenant, which typically translates for a given customer.

With Mimir, we have introduced a new compactor, which we call the Split and Merge Compaction Algorithm, which basically allows us to overcome those limitations. Instead of having one single block for a given time period for a customer - or a tenant, as we call it in Mimir - we split the data, we sharded the data into multiple blocks. And we can shard the data in as many blocks as we want, overcoming the single-block limitation or the single-block index limitation.

Now, another issue we have found, which again, is well known, is that ingesting data, even very large amounts of data, is not that complicated, but when it comes to querying back this data fast, things get more tricky. And one major scalability limit we had was that the PromQL engine is single-thread. So if you run a single query, a complex query like a query hitting a large amount of metrics, it doesn't matter how big is your machine, it doesn't matter how many CPUs you have. The engine will just use one single CPU core.

**Mat Ryer:** Oh, right...

**Marco Pracucci:** We actually wanted to take the free advantage of all the competition power we have, or our customers have, and what we have built is query sharding, which allows us to run a single query across multiple machines, or across multiple CPU cores.

**Tom Wilkie:** Very cool. And I guess with the new sharded split-and-merge compactor, what are the limits now? How large a cluster could I build or tenant could I have?

**Marco Pracucci:** So let me be very honest... There's no system which scales infinitely, right? There are always limitations in every system. We tested and we are still running Grafana Mimir with up to one billion active time series for a single tenant.

I'm still mentioning a single tenant, which is key in this context, because if you have a billion time series but across a thousand different tenants - well, each tenant then is pretty small, right? It's just a million series per tenant. I'm mentioning a billion time series for a single tenant because that's the single unit which is harder to split and to shard in the context of Cortex, Thanos, or even Mimir.

**Tom Wilkie:** So we've tested up to a billion, and we don't think it's infinite, but it's somewhere between a billion and infinite. \[laughter\] It's quite a big gap...

**Cyril Tovena:** And we tested it with k6, too. So we created an extension in k6 for sending Prometheus remote write data... So that means anyone -- all of this is open source, so anyone can take maybe \[unintelligible 00:23:51.13\] and see how it scales. You'll just need a lot of CPU to reach the power of sending a billion series.

**Marco Pracucci:** And memory.

**Cyril Tovena:** And memory. \[laughs\]

**Tom Wilkie:** I don't think we've ever mentioned k6 on this podcast. We haven't mentioned it yet, so you're the first one. What's k6?

**Cyril Tovena:** \[24:10\] K6 is a load testing tool that we have now at Grafana. I think we acquired them last year or this year... So there's two products. There's one product which is the k6 CLI, where you can define a plan, that's often written in JavaScript, but we've created an extension for Cortex or Prometheus in Go... And it allows you to define a plan, and with the CLI we automatically load-test your application by running your test plan. So it could be a plan that sends metrics, but it could be also load-testing your shop website, or whatever... It's up to you to design the plan.

The other product is the k6 cloud, which takes the same plan - you actually don't need to modify anything, but it runs in the cloud and now you can actually scale your load tests \[unintelligible 00:24:55.26\]

**Tom Wilkie:** Awesome. That sounded interesting. I haven't had a chance to play with k6 myself.

**Mat Ryer:** K6 used Testify, by the way... The popular Go package for testing.

**Tom Wilkie:** Oh, and why do you mention that here, Mat?

**Mat Ryer:** Oh, just because Prometheus also use it.

**Tom Wilkie:** And Cortex does as well, I think.

**Mat Ryer:** Yeah, yeah. Oh, and I created it.

**Tom Wilkie:** Oh, there we go.

**Marco Pracucci:** Oooh...!

**Mat Ryer:** Essentially, without me, no one writing Go code can be sure their code works... \[laughs\] No, I'm just kidding.

**Tom Wilkie:** You reduced every if statement from three lines to one.

**Mat Ryer:** I've saved so many lines... Think of how much disk space...

**Tom Wilkie:** Exactly.

**Mat Ryer:** You know what I mean?

**Tom Wilkie:** All those characters, all those curly braces that you've set free.

**Mat Ryer:** I should be able to store my data on everyone's machines, really, as sort of a thank you... I think. But no, there's a great team also that worked on Testify and still maintain it, so... Yeah, just kidding.

**Tom Wilkie:** I actually prefer Assertify.

**Mat Ryer:** I haven't heard of that one. Is it good?

**Tom Wilkie:** It's similar.

**Mat Ryer:** It doesn't sound as popular.

**Tom Wilkie:** Isn't there an assert package in Testify?

**Mat Ryer:** Yeah.

**Marco Pracucci:** Yeah.

**Tom Wilkie:** I prefer assert over require.

**Mat Ryer:** Oh, do you?

**Tom Wilkie:** Yeah.

**Mat Ryer:** You like to see lots of failures, instead of stopping at just one.

**Tom Wilkie:** I like things to fail and then continue.

**Cyril Tovena:** Yeah.

**Mat Ryer:** That's pretty brave.

**Tom Wilkie:** I'm actually asking because why is that even in there?

**Mat Ryer:** Well, the require one is the more popular case.

**Tom Wilkie:** Why is assert even in there then?

**Mat Ryer:** Oh, um... Okay. Well, that was the first one, that was all. Actually, it copies the way the standard library works. The standard library by default doesn't stop; you have to fail it, I think... So I think that's why; it just sort of inherited that behavior.

I have another one that I use, which is github.com/matryer/is. And that is like Testify off steroids. And that's genuinely like -- because Testify is massive, the API. All the things it does - you know, it's a hefty project. And is is the opposite. It has no dependencies, it's very basic, and much simpler. But yeah, it's interesting. Actually, I think --

**Tom Wilkie:** You'll probably do an episode maybe in a Go-based podcast about this.

**Mat Ryer:** That'd be a good idea.

**Tom Wilkie:** Do you know of any good Go-based podcasts?

**Mat Ryer:** There's JS Party, but I think that's for JavaScript... \[laughter\]

**Tom Wilkie:** Nah, for the listeners that aren't aware, Mat also hosts a popular Go-based podcast called Go Time.

**Mat Ryer:** Yeah, it's still available. Available where you get your podcasts.

**Break:** \[27:27\]

**Mat Ryer:** So that's interesting, learning about Cortex and how this is solving that scalability problem. From an open source point of view, why didn't the Cortex thing just go into Prometheus?

**Marco Pracucci:** I personally think it's because the Prometheus Project or the Prometheus team didn't really want Cortex, or wasn't really sure if Cortex was the right architecture. As we talked earlier, there's apparently two directions, we have Thanos and Cortex, and I think the Prometheus team wasn't sold on any of those two ideas, so they were left just to look at which one will be the best. But as of today, no one is really fully sure which one is the best solution... Although we think that Cortex and Mimir is the one fitted for \[unintelligible 00:28:14.11\]

**Mat Ryer:** Yeah, there's something useful about having Prometheus as a core project unchanged... You know, as we talked about Testify earlier, one of the things that happened to that project is whenever anybody contributed something, we had this rule where they'd be made a maintainer. And what happened, the effect was that the API just grew and grew and grew. Now, it has loads of things that people use, and some people love certain areas of it and not others, but if you're learning to write tests with Testify in Go, it's quite a steep learning curve now. It's quite overwhelming to look at the API and see all those different things. So there is something to be said for keeping a kernel of somewhat stable and unchanged, and allow other external projects to do their thing independently.

**Tom Wilkie:** Yeah, the Prometheus maintainers -- you know, I'm on the Prometheus team myself... We're quite conservative about what goes into Prometheus. Prometheus is a monitoring system; it's supposed to be the last thing that's running. It needs to be the most reliable, it needs to have the fewest dependencies, it needs to be standalone. So yeah, the team take the responsibility really seriously, and distributed systems like Cortex and Thanos are outside of the scope of what Prometheus and the Prometheus team are trying to achieve. And what I like is that whilst they're outside the scope, they don't actively discourage their development. A lot of the Prometheus team maintain Thanos, or maintain Cortex, and work on these systems... And a lot of the Prometheus code itself in the storage engine, as Marco referenced earlier, or the query engine, are reused, and are reusable by Thanos, by Cortex, by other projects. So if anything, I think Prometheus has kind of ceded the development of these other projects whilst keeping them separate to keep Prometheus simple.

**Cyril Tovena:** I think it goes both ways. We also contribute back to Prometheus, so in a way it's a good thing for Prometheus to have those two projects alive, \[unintelligible 00:30:13.14\] upstream improvements because we Prometheus engine, for instance, further than Prometheus itself will do it \[unintelligible 00:30:22.01\] improve it every day.

**Mat Ryer:** Yeah, I've noticed that... I mean, I haven't been at Grafana long, but I've noticed that conversations will happen about like -- there's a new thing that we wanna build, and maybe it goes into Prometheus, and that is totally an acceptable thing to do. So I think - yeah, it's that rising tide lifts all ships thing approach, which I do appreciate, and I'm sure everyone does.

**Marco Pracucci:** Yeah, from the Cortex and Mimir development standpoint, I think it's also good for the ecosystem having a place where we can experiment with new ideas, with cutting edge features, which we can eventually upstream to Prometheus. Some of the improvements - both in the query language and in the storage - we proposed over the past few years were actually originated from experiments we started in Cortex, and then we upstreamed to Prometheus, so that the wider community can leverage that. I think this is healthy for the ecosystem.

**Mat Ryer:** Yeah.

**Tom Wilkie:** But in a similar vein to the question Mat asked about why Cortex or Thanos isn't part of Prometheus, why did we choose to build Mimir as a separate project, and why didn't we just contribute these improvements back to Cortex?

**Cyril Tovena:** Yeah, I think there's two axes for this answer. The first one is the metrics space is very competitive, and so I think we wanted to build a new project where we will be able to -- not specifically everyone was contributing to Cortex. We were the biggest maintainer and contributor. And I think our own project gives us more agility, but also it helps us to make sure that other competitors are not taking advantage of our work for free.

\[32:05\] The other axis is we had a lot of also other features that we added close source, and we wanted to make them open source, and allow other people to be able to use and experiment with those features. It wasn't really possible without building a new project, with a different license. Otherwise it would just be giving away our work to our competitor.

**Marco Pracucci:** Yeah, I think it's fair to say that was a very difficult decision, and it's all about the trade-off. It's about finding a model which allows us to succeed commercially, while at the same time keeping most of our code open. And yeah, launching a new project, which is a first-party project, a new project at Grafana Labs, Grafana Mimir - we think that fits quite well in this trade-off, in this decision.

**Mat Ryer:** Yeah, it's really tough... I have a -- I won't mention them, but I have another project, an open source project, and finding the time to properly dedicate to it is very difficult, especially when you have a full-time job. And actually, I enabled the GitHub Sponsors on one of the projects, and people are very generous there, but it's a very difficult way to fund the project, to go and try and get sponsorship. It does get very difficult.

And then that other point that you make about bigger companies can sort of just take that work and do their thing with it... You know, I feel like it's still a problem we haven't yet solved in the open source world. There's still some conversations to be had about how to do that properly.

**Tom Wilkie:** Yeah. I mean, about a year ago we changed the license on Grafana and Loki and Tempo to be AGPL, because we think it struck that better balance - it's still open source, but it prevents other companies from taking our code and modifying it. Cyril, you mentioned a different license for Mimir... Mimir is AGPL as well, I can assume?

**Cyril Tovena:** Yeah, correct. And I think that \[unintelligible 00:34:11.15\] for the contribution between all our projects... Because the two licenses, Apache and AGPL, are not compatible, or they're only compatible one way... So I think all the projects at Grafana, Grafana itself, and Loki and Tempo being on the same license will allow us to move improvements from one project to another, or share improvement, or share code. That's also one of the reasons why we did this.

**Mat Ryer:** So what does AGPL mean then? Say I'm a startup and I want to use this tech. What do I have to consider? Can I just use it? It's still an open source project, right?

**Tom Wilkie:** Yeah, I believe you can still use it. The trick with AGPL is if you make any changes to the project... I mean, the same with GPL - if you make changes to the project and distribute the binary, then you have to distribute your changes. With AGPL, you make changes to the project and allow people access to that service over the internet, you have to distribute those changes.

**Mat Ryer:** Right. So you have to contribute the changes back to the original project.

**Tom Wilkie:** Oh, you don't have to contribute them back, you just have to make them available under the same license.

**Mat Ryer:** Right...

**Tom Wilkie:** Yeah, it's interesting. There's a lot of nuances to licensing. We probably don't have enough time here to go into all of them.

**Mat Ryer:** It could be its own episode, frankly...

**Tom Wilkie:** It probably should be. But the nice thing about -- you know, AGPL kind of closes the cloud repo, is how they talk about it.

**Mat Ryer:** Yeah, it makes sense.

**Tom Wilkie:** And I guess the final question -- like, a lot of the features we've talked about adding to Mimir, a lot of the code we've built, I guess it's worth saying that we had done all of this before for our enterprise products and for our cloud products. A lot of these ideas were being built in closed source... And as a company, Grafana Labs, we really want these kind of things to be open source, and we're always trying to find ways to release them as open source. So partly, one of the reasons we've done Mimir is a way of getting the core technology that we've built out there, and in front of more people.

**Marco Pracucci:** \[36:02\] Yeah, I think it's great you mentioned, because when we launched Mimir, a recurring question we got was "As a Cortex user or as a community user, can I jump on Mimir? Can I upgrade immediately? How stable is it?" And the cool thing is that the features we have released in Mimir are running in product since months at Grafana Labs, at any scale, from small clusters to very big clusters, including the one billion series cluster we've mentioned before. And that's why we have quite good confidence on the stability of this system, because it's already running since a long time.

**Mat Ryer:** Yeah. One of the things that really impressed me when I joined Grafana was this dedication to dogfooding things, so that you're not just building/imagining these use cases; they are our use cases, too. You know, when you scratch your own itch and solve your own problems like this, and also live with the consequences of the tech - anytime I've seen that, it makes the tech better, it makes the projects more usable; they solve the real problems. I think that's great, and I always encourage other companies to do that.

And I also like it when there's an internal project where someone solves a problem, and then that becomes eventually something that can be open sourced. I think that route to getting things out there is a great one, because like you say, Marco, it's tested, it works, we've been using it. You can sort of rely on it, which is pretty good.

**Cyril Tovena:** It's battle-tested.

**Mat Ryer:** Yeah.

**Tom Wilkie:** One of the things that struck me as odd about the Mimir release was that the initial version that we released we called version 2.0. Why did we call the first version 2.0?

**Marco Pracucci:** Well, first of all, it's no 1.0 or 0.1 because we wanted to show the continuity from Cortex. There's and smooth upgrade path from Cortex to Mimir. We also want to show and to state it clearly that it's based on Cortex, and on the lessons learned while running Cortex at scale.

Second, why not Mimir 1.13, like the next minor version of Cortex? And the answer is that in Mimir, other than introducing features like the new compaction algorithm, or query sharding, or other scalability and performance improvements, we also took the opportunity to simplify the configuration to remove a bunch of technical debt we accumulated over the years in Cortex. So because of this, we actually introduced some breaking changes in the configuration. Now the Mimir configuration is way smaller and way easier to understand compared to Cortex, but at the same time we had to pay the price of introducing some changes in the configuration... So these required a major version release.

**Tom Wilkie:** Thank you. Yeah, what was the kind of stuff we got rid of then? What did we remove?

**Marco Pracucci:** Well, first of all, the chunk storage support. So for the listeners, Cortex originally was built with a storage engine which over the time we called chunk storage... And then about two years ago we actually released a new storage engine for Cortex which we called the blocks storage. It's called block because it's based on Prometheus TSDB blocks as a data format to store metrics.

Now, blocks became the recommended way to run Cortex. Blocks is the only supported storage in Mimir, and Mimir completely removes the chunk storage support.

**Cyril Tovena:** I can feel happiness when you're saying that. \[laughter\]

**Tom Wilkie:** You looked quite excited removing a lot of code there...

**Cyril Tovena:** As an engineer, it's very satisfying seeing a very high number of code removed.

**Mat Ryer:** Yeah, they're my favorite PRs... Especially when it's Tom's code that's being removed.

**Tom Wilkie:** \[39:59\] Aw, that's a bit harsh, isn't it? Yes, I wrote the chunk storage...

**Mat Ryer:** Burn.

**Cyril Tovena:** Oh, we still have it in Loki, Tom. Don't worry. It's still there.

**Marco Pracucci:** It lives on...

**Cyril Tovena:** It lives on... \[laughter\] It's just shrinking.

**Tom Wilkie:** I think you mentioned that you've also changed a bunch of the config variables and simplified the config... What kind of simplifications have you made?

**Marco Pracucci:** Yeah. First of all, we changed the defaults in the configuration. This may look like a tiny detail, but we actually revised the entire configuration, the entire default configuration to make sure that Mimir can run in production with the default configuration, out of the box, without needing to fine-tune the configuration, spending hours to learn how to tune it for a production system.

So the result of this work is that to run Mimir in production what you need is basically just configure the object storage for your data, like S3 or Google Cloud Storage.

**Tom Wilkie:** That's pretty cool.

**Cyril Tovena:** Yeah, something that we start to hear a lot at Grafana, and I think it's a vibe that goes on in all projects, where we try to make our project much more approachable, especially in terms of configuration. So we make sure that the defaults are good for a production setup.

**Tom Wilkie:** Silly question - why were the defaults not correct to begin with?

**Cyril Tovena:** I guess just bad hygiene... \[laughs\] I think also it's because maybe they were introduced at a different time. \[unintelligible 00:41:29.29\] and they are not in line with what will be the best right now. So maybe the code changed, but the default doesn't change because you're afraid of doing a breaking change...

**Tom Wilkie:** Yeah, I guess when we write the code we don't necessarily what the right value is oftentimes. We mentioned earlier, Mimir is battle-tested... You know, part of changing the defaults is us rolling the variables and config that we've found work best in production, back into the code.

**Marco Pracucci:** I think this is coupled with the lifecycle of a new feature. We introduced a new feature, experimental, we keep it disabled by default for obvious reasons. We learn the hard way, running it in our staging, and then production environments... And then after some time, we gain the confidence to mark it stable. Now, in the past, we haven't always changed the default configuration with new recommendation over time, once new features became stable.

Another cool thing we have done in Mimir has been introducing a feature lifecycle policy. So now we have a written down policy on how new features are introduced, and experimental features - we commit to move from experimental features to stable features within six months of time. I expect this will give even more stability to the project, and will allow us to keep our default configuration up to date with the best practices.

**Tom Wilkie:** That's pretty cool. So we won't have flag proliferation and wrong default variables in the future. We've got a way of solving that now. Good. That sounds beautiful.

**Mat Ryer:** Yeah, that's a problem I see at a lot of different places. I remember working on something where we added the ability to enable or disable something. Now, the ideal design would be enabled true, or false. That would be great. But because of the already-existing configs, we couldn't do that. So you end up being not enabled, or disable true, and so you end up with these strange things... But yeah, it is an important thing, and I'm really pleased it's in the fore of the minds of the engineers here, because sensible defaults make such a big difference, especially... Like, me - I'm not sure what I should configure it to. I kind of want it to just work initially, and then later, when I have a bit more of an understanding, or I see where it's not working for me, then maybe I tweak it.

**Tom Wilkie:** \[44:05\] I think it's real v2 problems, right?

**Mat Ryer:** Yeah.

**Tom Wilkie:** To think about sensible defaults and config. But it is important... Cortex, and now Mimir, the code it's based on is five years old. It's a maturing project with real use cases, and getting this stuff right is a real quality of life then.

**Mat Ryer:** Yeah. I always point to Go's backwards-compatibility promise to 1.0. That is such an important thing. And Go 1.18 was recently released... Well, a while ago now. And that has generics in it. That's a sort of massive addition to the language, and yet all the Go code from version 1.0 is still compatible.

**Tom Wilkie:** Yeah. And there's still three ways of defining a new variable.

**Mat Ryer:** Yeah. Unfortunately. Yeah. I have a talk, "Things in Go I never use" on that exact subject. Search for it in your favorite search engine.

**Cyril Tovena:** Do you use assert? \[laughter\]

**Mat Ryer:** Where can people go then if they wanna find out more about Mimir? Just google it, or duckduckgo it...

**Tom Wilkie:** The reason we chose Mimir is because it's an easy to google word, right?

**Mat Ryer:** Yeah, where did the name come from? How did that happen?

**Tom Wilkie:** Well, that's a good question. So we've got the LGTM strategy, like Logs, Graphs, Traces and Metrics; and Loki, the logging system begins with L, and Grafana, the graphing system, with G, and Tempo, the tracing system, with T, and Cortex, the metrics system with a C. So it had to begin with an M... And then we kind of went back to our Scandinavian roots, we were looking for a word that began with M, that kind of came from Norse or Greek mythology, or something like that... And that's where we came up with Mimir.

I was actually personally lobbying for Mjolnir, Thor's hammer...

**Mat Ryer:** Oh, that's cool. Difficult to spell though...

**Tom Wilkie:** But no one can spell it, or say it, so we went with Mimir instead.

**Mat Ryer:** And what is Mimir?

**Tom Wilkie:** It's the name of a new open source time series database from Grafana Labs.

**Mat Ryer:** Great. And is it gonna end up being a Marvel baddie as well? \[laughter\]

**Tom Wilkie:** Probably... No, what is Mimir? I think it's a Greek maybe, or Norse kind of -- oh, I have no idea. This is what Wikipedia is for.

**Mat Ryer:** Okay. Duckduckgo it yourself, listener, and find out.

**Marco Pracucci:** Yeah, I love Mimir because it's one of those words that even an Italian like me can spell.

**Tom Wilkie:** So it's Norse... Good, I got that bit right.

**Mat Ryer:** Nice.

**Tom Wilkie:** It was a figure in Norse mythology renowned for his knowledge and wisdom, who was beheaded during a war, and the Odin god carries around Mimir's head... And it was secret knowledge and counsel to him.

**Mat Ryer:** Oh, wow. So that's like an iPhone, in a way.

**Tom Wilkie:** Yeah, in a way... A headless iPhone.

**Mat Ryer:** Yeah, yeah. When you cut your head off an iPhone and carry that around.

**Tom Wilkie:** You know, I think that might be the first time I've read that.

**Mat Ryer:** Well, but the knowledge thing makes sense. It has all your knowledge in there...

**Tom Wilkie:** Yeah. I can see that working.

**Mat Ryer:** Well, we'll take it. So what's next for Mimir? What's the future plans? Can we talk and give people a bit of a sneak peek? Can we reveal some exciting spoilers?

**Marco Pracucci:** Yeah, we have big plans. So first of all, we want to keep committing to our big tent philosophy, and we want Mimir to be a general-purpose time series database. Right now, Mimir is focused on Prometheus metrics. But we want to support OpenTelemetry, or Graphite, or Datadog metrics in Mimir. That's something we are already working on, and will be soon available in Mimir.

**Cyril Tovena:** We're also planning -- so I love query performance, that's why I'm going to talk about two query performance improvements that we wanna do in the future... So in Loki currently we are looking into splitting instant \[unintelligible 00:47:55.00\] like 30 days - that can be very slow, because as we were saying, it will actually be only split into just 16, the amount of shard... But we don't divide that into time, because it's just a single \[unintelligible 00:48:14.15\]

\[48:19\] We do that in Loki right now, because Loki has -- you know, the amount of data for 30 days can be tremendous compared to the amount of sample you can have in metrics. So because we're doing that in Loki, then we can import it back into Mimir definitively... Again, because the licenses are the same, it's gonna be super-easy to do that.

And then when we worked on query sharding with Marco, we discovered a couple of problems and improvements that we want to do... It touches on TSDB itself, on PromQL or Prometheus itself, so we didn't do it straight away... But we want to make TSDB shard-aware, so being able to actually request \[unintelligible 00:49:00.12\] the data for a given shard from the beginning.

**Mat Ryer:** That's clever.

**Cyril Tovena:** Obviously, I think the best way to get that into Mimir will be to upstream that into Prometheus, so this is something that we can definitely try to do.

**Mat Ryer:** That's a good example of something where that makes sense to push that back, yeah.

**Cyril Tovena:** Yeah. If you wanna do query sharding from Prometheus right now, it's not very easy. The Mimir query sharding is open source, so you can check it out... But we have to actually \[unintelligible 00:49:31.02\] the PromQL engine, because the engine has no knowledge of what sharding is. So making it more aware of sharding is definitely something... And I think the Prometheus team has actually request, or maybe started some thought about doing that... Because I think Thanos is also testing having query sharding implemented.

**Marco Pracucci:** Yeah. Another area where you may expect some big improvements in the near future is around the Mimir operability. Now, we already mentioned that we simplified a lot the configuration. It's very easy to get Mimir up and running. But like any distributed system, there's still some effort required to maintain the system over time. Think about version upgrades, or think about the scaling, or fine-tuning the limits of different tenants, and stuff like this.

One of my big dreams around the project is to have the Mimir autopilot, and trying to reach as close as possible to zero operations in order to run and maintain a Mimir cluster at scale.

**Mat Ryer:** Yes, please.

**Marco Pracucci:** This is something which is very easy to say, and very difficult to do... But we've got some ideas; there are some ongoing conversations at Grafana Labs on how we could significantly improve the operations of Mimir at scale... And I expect we will do something significant over the next 6-9 months.

**Cyril Tovena:** Yeah, that's super-enticing. In the Loki project we currently have \[unintelligible 00:51:07.16\] who actually became member of the Loki Project, and they are working on an operator for Loki, and I think they have the same goal as you just described, Marco, where they want to make it super-simple to operate Loki at scale... Especially upgrade the cluster or maintain the cluster. So that makes a lot of sense. Maybe that's something that could be also reused for Mimir. You now they share the same components, so...

**Mat Ryer:** Oh, yeah...

**Marco Pracucci:** Yeah, I think one of the very cool things about working at Grafana Labs is that there's a lot of cross-team work. Just to mention one, Cyril built the query sharding into Loki before we built it into Mimir... And then he came to me and to other people in the Mimir team with his package of knowledge around how to successfully build query sharding, and then we built it into Mimir as well. And obviously, we all learn from each other, and the Autopilot will be another great opportunity to learn from other teams.

**Cyril Tovena:** Yeah. We actually built it in a better way than Loki... So now I'm a bit jealous.

**Mat Ryer:** \[unintelligible 00:52:13.22\]

**Tom Wilkie:** Well, you have to go and backport it back to Loki.

**Cyril Tovena:** Well, that's what I'm doing right now. \[laughs\]

**Tom Wilkie:** And then when you figure out how to build it better in Loki than in Mimir, you've gotta come back and bring your improvement back to Mimir.

**Cyril Tovena:** Well, we're gonna do it in Prometheus.

**Tom Wilkie:** Yeah, exactly. So unfortunately, I think that's all we've got time for today... So I wanted to say thank you to Mat Ryer...

**Mat Ryer:** You're welcome.

**Cyril Tovena:** Thank you, Mat.

**Mat Ryer:** It wasn't clear that this was optional, but I'm glad I came... \[laughter\]

**Tom Wilkie:** Thank you to Marco and Cyril...

**Cyril Tovena:** Thank you!

**Marco Pracucci:** Thank you to you!

**Tom Wilkie:** And my name is Tom Wilkie, thank you for listening to Grafana's Big Tent. I'll hopefully see you next time

**Outro:** \[52:50\]

**Tom Wilkie:** You know, Mat actually recorded that himself.

**Cyril Tovena:** Is it live? It looked like it was live.

**Mat Ryer:** Well, that wasn't live. It could be... If we do like a live podcast in Whistler, then it would be pretty cool to actually somehow figure out how to get people to play that live, wouldn't it?

**Cyril Tovena:** Yeah.
