**Mat Ryer:** Hello and welcome to Grafana's Big Tent, the podcast all about the people, community, tools and tech around observability. I'm Mat Ryer. Today we're discussing metrics, specifically adaptive metrics. We'll learn about what that is and why that is.

Helping me dig into this subject, I'm joined by some guests... I'm joined by Patrick, Mauro and Oren. Welcome to Grafana's Big Tent. Perhaps you could give us a quick intro of yourselves... Patrick, starting with you.

**Patrick Oyarzun:** Sure, yeah. My name is Patrick Oyarzun, I'm a Principal Engineer at Grafana. I've been working on Mimir and Hosted Metrics for about two and a half years, joined Adaptive Metrics about two years ago, and I've spent most of the time working on the Recommendations Engine.

**Mat Ryer:** Cool. Hopefully we'll learn a bit more about some of the work you've been doing today. Mauro, welcome.

**Mauro Stettler:** Hi. Yeah, my name is Mauro. Just like Patrick, I'm also a Software Engineer at Grafana. I'm working on Adaptive Metrics as well, and... Yeah, I think I started Adaptive Metrics as a hackathon project roughly around three years ago.

**Mat Ryer:** Very cool. Okay, and also our final guest, Oren. Oren, you're not from Grafana, are you? Where are you from? And welcome to the show.

**Oren Lion:** Thank you, Mat. I'm super-excited to be here. I work at Teletracking, and you probably have never heard of us.

**Mat Ryer:** Well, we have now.

**Oren Lion:** Now you have. And we've got a tagline, maybe that'll help make it more memorable... And it's "No patient waits for the care they need." And just to help convey what that means - to me as a patient, for example, I get care in a smooth and timely way. As a patient, I don't need to wait to get admitted, and I don't need to wait to stay longer than I need to.

And from the healthcare systems perspective, they need to run their business efficiently, by increasing their capacity to care, healthcare systems can lower their operating system costs, and run sustainably. For example, by improving bed turnaround time, and by reducing ED wait times, and by reducing length of stay.

And by the way, Mat, you may have been an indirect customer, hopefully not too often... We are implemented in a number of trusts in the NHS. So my name is Oren Lion, and I run productivity engineering at Teletracking. And my interest in adaptive metrics is that I'm looking for ways to provide a high quality of service - I need monitoring for that, but also, I need to reduce the cost of running services.

**Mat Ryer:** Excellent. And you're an engineer, you're not in marketing?

**Oren Lion:** I actually work through my engineers. I'm a manager of engineers, so I get to take credit for the work they do.

**Mat Ryer:** Yeah, fair enough. Okay, good. So maybe we could then -- let's start with the problem that adaptive metrics is solving. What's the problem? Too many metrics? How can it be that many?

**Oren Lion:** Yeah, I was thinking about this, Mat... And as I'm looking back on how I migrated all the development teams from our open source observability stack, Prometheus, Thanos, Trickster and Grafana, to Grafana Cloud, I was blown away by the volume of metrics flooding in. There's no way we're using them, and spend is just skyrocketing. And we're pushing over 1 million time series. And in case my team ever listens to this, when I say "I am taking credit for your work" - I just want to say that a few times. So thank you, productivity engineering team at TeleTracking.

But back to the question - so how did I get to a million time series? And I'm asking myself, "Where do they come from?" And I'm thinking of two camps. Custom metrics, and dependencies. So custom metrics are what we write to measure processing business events, and dependencies are the resources we use to support our business services.

\[00:04:17.06\] So in Kubernetes - think KubeState, EC2, NodeExporter, Kafka, JMX... And what I've found is that 40% of the time series come from custom metrics, and the other 60% of time series come from dependency metrics.

Now, to get a picture of this, here's a hard example of custom metrics. I've got 200 microservices. Each service produces 500 time series, and they're scaled to three pods. So that's 300 time series pushing from that cluster. So 300,000, and I'm well on my way to a million. And I'm wishing this was capital gains on my stocks... But let's say we migrate to a new cluster and we blue/green. Now we're pushing 600,000 time series for a time. And just turning to dependencies - so take PromTail; it runs as a daemon set, so there's one pod per node. It publishes 275 time series per pod, on a 40-node cluster. That's 10,000 time series.

So back to the question, "How did I get to a million time series?" It's fast and easy. When you work with the teams, it's like they're thinking ahead about design, and about how to monitor their service and dependencies, but fall short of estimating and tracking the cost to monitor a service.

**Mat Ryer:** Yeah. It's a very tough problem to solve, so I don't really blame them... You take credit for their work. Do you also share some of the blame? Is that how it works?

**Oren Lion:** Oh yeah, definitely.

**Mat Ryer:** Great.

**Oren Lion:** Yeah. Yeah. I could have prevented a lot of this, but I just let it go.

**Mat Ryer:** Well, it's a tough problem, because you don't really always know what you're going to need later. So there's definitely this attitude of "We'll just record everything, because we're better safe than sorry." Was it those sorts of motivations driving it?

**Oren Lion:** Yeah... I mean, when I wondered why this was happening - it's a verbosity problem. And controlling verbosity is an observability problem. Look at logs and metrics. With logs, you solve the problem of controlling verbosity, with log level.

So you have error, info \[unintelligible 00:06:28.18\] debug, trace, and you set the log level according to your need. Usually error... Don't forget to dial it back from debug to error when you're done debugging. And every log has a cost. And I'm thinking about Ed Welch, in his great podcast, "All Things Logs", where he points that out...

And then turning our attention to metrics. Metrics have verbosity, but it comes in the form of cardinality. So we're generally not as good at filtering metrics in relabel configs as we are at setting a log level for logs. And so there are ways to identify high cardinality, but nothing like a log level. There's no simple way to just dial it down. And with a nod to Ed Welch, every time series has a cost...

**Mat Ryer:** Yeah, fair enough. Well, you're actually on a podcast with a couple of the old engineers here... So if you've got ideas to pitch them, by all means. Mauro, what do you think? Label levels for metrics?

**Mauro Stettler:** Yeah, I agree with everything that Oren said. I would like to add one more thing regarding where the high cardinality comes from. I think in some cases the cardinality is simply an artifact of how the metrics got produced. So depending on what the metric is -- usually when the metrics are produced, there are many service instances producing metrics about themselves. And very often you have multiple service instances doing the same thing. They're basically just replicas of the same service. And due to the fact how they are produced and collected, each of the metrics that are -- or each of the time series that are produced by each of those instances get a unique label assigned to them.

\[00:08:09.26\] But depending on what the metric represents, you might not actually need to know which of those instances has, I don't know, increased the counter. So in those cases, I think it's also common that the cardinality is higher than what's actually necessary, simply because of the way how the metrics pipeline works. And in those cases where you don't actually want to pin down which service instance has increased some counter or whatever, it's useful to have something in the metrics pipeline, which can drop those labels that you don't need.

**Mat Ryer:** So that was going to be my question... How do people solve this today then? Is it a case of you sort of have to go through all your code, look at all the places you're producing metrics, and try and trim it down? Does that ever work?

**Mauro Stettler:** It kind of works, but... So in my experience of working with customers -- so now you're basically talking about metrics that are application observability metrics, not the dependencies that you just talked about, Oren, right? So in those cases, very often what I've seen is that in larger organizations it can happen that there are strict rollout policies which make it impossible to deploy fixes quickly. So it can happen that, for example, a new change gets deployed, which blows up the cardinality because a new label has been added, which has a really high cardinality... Then the team of developers maintaining that application realizes the problem, they want to fix it, but it takes weeks to get the fix into production. And that's also another one of those situations where it's really useful that if in the metrics pipeline we can just drop the label, even if it's just a bridge until the fix has been deployed.

**Patrick Oyarzun:** Yeah. And there's been existing solutions for a while to try to help control cardinality. Typically, it takes one of two forms. One is just dropping some metrics entirely. It's common, for example - say you're monitoring Kubernetes; you might find a list somewhere of metrics you don't really need, according to somebody's opinion or some philosophy that they've applied. And you might decide to just drop all of those outright. That still requires changing, relabel configs, which like Mauro said, sometimes it's hard...

The other way that people try to do this is by dropping individual labels off of their metrics. And so maybe you realize you have some redundant label, or you have a label that is increasing cardinality, but you don't care about... The issue with doing that though is a lot of times you'll run into issues in the database that you're sending to. So lots of time series databases, including Prometheus - and anything that's trying to look like Prometheus - require that every series has a unique label set. And so if you try to, say, just drop a pod label for example on a metric, usually you'll start getting errors saying "duplicate sample received", "same timestamp, but a different value" kind of thing.

And so it's not as simple as just don't send the data. You need to figure out -- now you have two samples with the same labels. Do you want to persist one of them, or the other, or maybe some combination? And so generally, what you really need to do is aggregate the data. You need to add it up, or maybe you want to store the MACs, or something like that, in order to actually do it.

**Oren Lion:** Yeah. I mean, just building on that, before adaptive metrics we'd have to detect a problem, and it takes effort just like detecting any defect for a team, as Mauro was saying, and it distracts them from other things they're doing, in a deployment that causes a surge in metrics. As a customer, I kind of have some buffer, because Grafana has 95th percentile billing, so I've got a spike budget. And as long as I catch the problem quickly, I won't get billed for it. So I'm sure I'll flood Grafana again with metrics I don't care to pay for. So Mat, and Grafana, and team, my future self thanks you, but we still need alerts to like catch those things.

\[00:12:03.11\] And then after you've caught it, like Patrick was saying, it can be tricky to diagnose the problem, so now the team is spending time trying to diagnose the problem. And we need to find it, we have to diagnose it, and now we need to resolve it, and that takes time, too. So people aren't super-familiar with relabel configs in Prometheus, and so they'll have to read the docs, and make the changes, and PR the change, and get it merged, and deploy it through a pipeline... And it's probably an orchestration pipeline, because it might be a Prometheus operator going to five clusters. So it's a lot of effort. Every time you have a cost overrun, it's expensive from a billing perspective, and it's expensive from a resource perspective.

**Mat Ryer:** Yeah. And I suppose it's a kind of ongoing cost too, because as things are changing in the system and as people are adding things, you might well have these problems again, and then you have to go and do the same thing again.

**Oren Lion:** It's unintentional. We'll create custom metrics, maybe a new histogram, and we may have more buckets than we need... So out of no one's desire to increase costs, it can just skyrocket at any point in time. \[unintelligible 00:13:15.27\] were always faced with that surge problem.

**Mat Ryer:** Yeah. That sounds quite scary, and I think we've done quite a good job of establishing the problem for adaptive metrics. So could somebody explain to me what is adaptive metrics? If you've never heard of this feature, what actually is it? Who wants to have a go?

**Mauro Stettler:** Okay, so basically adaptive metrics consists of two parts. The first part is what we call the recommendations engine, which analyzes a user's series index. So it looks at all of the series that the user currently has, and it looks at the usage on those series. Based on that information, it then tries to identify labels that the user has, which raises the series cardinality, and which the user actually doesn't need, because they don't use them, according to their usage patterns. So it generates recommendations saying "Label X could be dropped", and this will reduce your active series count by some number.

Then the second part is what we call the aggregator, which is a part in the metrics ingestion pipeline when you send data to the Grafana cloud. The aggregator allows the user to apply and implement those recommendations by defining rule sets which say "Okay, I want to drop this label from metric X", and the aggregator then performs the necessary aggregation on that data in order to generate and aggregate with a reduced cardinality, according to the recommendation.

**Patrick Oyarzun:** Yeah. So basically, what this is doing is -- it's very similar to kind of what I would do as a person. Like, if I wanted to do this myself, I might start by checking out "What are the main dashboards I care about? What are my SLOs based on?" And you try to develop kind of some idea of "What data is important?" And we actually have a tool that has existed for a while, called Mimir tool, that can automate a lot of that. And it's open source, anybody can use it. It'll tell you which metrics are used, basically.

What adaptive metrics does is it goes a step further. So instead of just telling you that the Kubernetes API server request duration seconds bucket is used, it'll also tell you whether or not every label is used. And it'll also know that in the places it is used, it's only ever used in a sum of a rate, PROMQL expression. And because we know all of that at once, we can actually tell you with confidence "Hey, if you drop the pod label on that, it's not going to affect anything." All of your dashboards will still work, you'll still get paged for your SLOs.

And so it bridges the gap between what we've had for a long time with something like Mimir tool, to just know "Hey, this metric is unused", now going from there all the way through to implementing a real solution that'll save cardinality. And then even more than that, this is a thing that adapts over time. So like I said before, it's been common for a long time to have these kind of public datasets of like "These are all the metrics that you probably want to keep for Kubernetes, or for Kafka, or for Redis", or any popular technology.

\[00:16:18.22\] What adaptive metrics does is basically it'll find all of that dynamically, and then over time, as you start using more, or stop using some of it, or anything like that, it'll start generating new recommendations. Maybe you can aggregate a little bit more aggressively, because you transitioned from float histograms to native histograms, which is a feature related to the issue Oren was talking about with histogram cardinality. Maybe once you do that migration, adaptive metrics might notice "Hey, that old normal histogram is unused now, and you can get rid of it", even if you don't have control of the application that's generating that data.

So it's really this feedback loop that I think has made adaptive metrics start to stand out... And we've had it internally. At this point, we apply the latest recommendations every weekday morning, and we've been doing that for, I don't know, quite a long time now. Nobody reviews them... It generally has worked pretty well.

**Oren Lion:** Yeah, I just wanted to build on what Patrick was saying about being able to aggregate a pod. So that's a degree of verbosity we generally don't need, so we can aggregate it up. But we couldn't publish those time series to Grafana, because we would get those errors that Patrick mentioned earlier. There's no disambiguating label, so we get errors, but Grafana can do that at the front door. And it's a level of detail we don't use commonly, but if there's an issue, we could disaggregate. So in a way, it's giving me a log level, but for metrics. I can dial it down and get a higher degree of aggregation, and then I can dial it up and disaggregate, and get that detail at the pod level. And we use this for custom metrics, too. We may have event-level labels. However, we don't need that label data commonly, but if there's an issue, we can disaggregate and basically increase the log level to debug, pay for it, get what we need, and then re-aggregate back down to error for metrics. So that helps us control costs and also control having data at our use, that we're actually using, and then when we stop using it, we can just make it all go away using adaptive metrics.

**Mat Ryer:** Yeah, that sounds great.

**Patrick Oyarzun:** Yeah. And one important thing to remember is that - we talked before about this difference between custom metrics like your business data, and dependency metrics. A lot of times both of these can actually be exported by the same process. And so, for example, say you're running a Mimir pod; it's going to export information about the queries that it's serving, or the series that it's loading. Those more like businessy things about the job of Mimir. It's also going to export all kinds of data about the Go runtime. And both of those things end up getting mixed together in your collection pipeline. And so it can be really tricky without something like adaptive metrics to do this kind of dynamic disaggregating when you need it.

Maybe for your business metrics you don't really care which pod served the most queries this month. It's not a contest. You just want to know how your queries are going. But when something goes wrong, maybe you actually do need to look into the Go garbage collector. And so it's possible now with something like adaptive metrics to just disaggregate this one garbage collector metric that you need, or even 10 of them, whatever it is you need, without needing to change the pipeline in a way where you now disaggregate for everything coming from that pod. It allows you to kind of think of these as different things.

**Oren Lion:** I would just add one distinction. So when the Go profiler metrics get published to Grafana, we can just drop them using adaptive metrics. They're not even getting aggregated, because no one uses them, and that's a really great feature of adaptive metrics. It's like a big red button, and you go "I don't need these. Just drop them at the front door." But other metrics, like the business metrics that we care about, we're just aggregating and then disaggregating, just like a log level.

\[00:20:22.14\] And a crazy idea for you, Patrick, is what if there were some standard for metrics where we could have something like a log level set in a label, so that a tool like Prometheus maybe would even suppress sending them? I don't know. I just want to throw that out there. It occurred to me.

**Patrick Oyarzun:** Yeah, I mean, there's so many cool ideas that I think we've had, and we want to build on top of adaptive metrics... Generally, I think -- the word I keep using when I think about it is just-in-time metrics. It's something that I think we're just scratching the surface of, but I can imagine a future state where you generally are paying very little for your metric storage, and then something goes wrong and you can turn on the firehose, so to speak, of like "I want to know everything." And I think it's not just metrics. Grafana in general is developing adaptive telemetry across all observability signals. And I think there could be a future state where when you turn on that firehose, it includes all signals, and you're saying all at once, "In this one region, I know I'm having an issue, and I want to stop dropping metrics, logs, traces, profiles... I want to just get everything for the next hour." And then I can do my investigation, I can do my forensics, and then I can start saving money again. I think it's realistic that we could get to that point eventually.

**Mat Ryer:** Yeah. I quite like the idea that you declare an incident and then it just starts automatically... It levels up everything because there's an incident happening just for that period.

**Mauro Stettler:** Just to extend on that... I think it's even possible that we will get to a point where you cannot only turn on the firehose right now, but basically say that you want the firehose for the last hour. Because I think that would be the coolest feature that we could build. Because I think the biggest blocker for people which prevents them from adaptive metrics is often that they're afraid that they're going to drop information which they later regret to have dropped. Because they realize later that they actually would have needed it. If they would be able to build a feature that allows you to go back in time by just one hour or two hours, even if it's not very long, I think that would help really a lot to make people not worry about dropping labels of which we say that they don't need them.

**Mat Ryer:** Yeah, this is cool. I mean, I don't think we're allowed to do podcast-driven roadmap planning, but it feels like that's where we are. Mauro, just to be clear, that feature would use some kind of buffer to store the data. You wouldn't actually try and solve time travel and send people back an hour, would you? That's too far.

**Mauro Stettler:** That's one possibility, but I don't have a design doc for that one. But we do have a design doc for the solution with the buffer, because we actually do have the buffer already. We just need to use it.

**Mat Ryer:** I see, cool. Yeah, no, that does make sense. Do the easier one first, and then later -- save it for a different hackathon.

We'll do the time travel...

**Oren Lion:** Yeah, next hackathon.

**Patrick Oyarzun:** We have a hackathon next week, actually.

**Mat Ryer:** That's very true. Well, so I mentioned hackathons because that's where this idea came from, isn't it? It came out of a hackathon. What was the story there?

**Mauro Stettler:** Yeah, basically we saw that this is a feature that customers were asking for. We had multiple requests where customers said that they wanted it... And I just ended up being on a bunch of support calls with one of those customers asking for this feature, and I thought "Yeah, actually, this sounds like a pretty good idea, so why don't we build that?" And the hackathon came up, so I started prototyping it. And then the company picked up, and after a few months everybody at the company told me that we have to promote this, and this is going to be the next big feature.

**Mat Ryer:** \[00:24:00.04\] Which is a really cool thing at Grafana, that we have these regular hackathons where you can really just do that. Just a brand new thing happens and it comes from anywhere. But hang on though - but customers were asking for it... What were they saying? "I'd like to pay you less..." Why are you helping them?

**Mauro Stettler:** Pretty much. \[laughs\] Well, basically, customers were saying "Look, I have those labels which are blowing up my cardinality, which makes my bill really expensive. I want to get rid of those labels. But then I have the problem with the colliding label sets, because then I have multiple series which have the same label set", and that makes the data basically useless. That's the problem that Patrick described earlier. "Is there no way to solve this problem?" And the solution to solve this problem is to aggregate them correctly, to process the data at the time when you receive them in such a way that the relevant information that you want to get out of the data remains while we can drop the information that you don't want to keep.

**Mat Ryer:** And what was the reaction like from the business people in Grafana? Was there concern that you're fighting against what they're trying to do?

**Mauro Stettler:** Yeah, the reaction was diverse. I think the PM became a big fan of this feature, and started to do a great job at convincing all the salespeople that this is something that we really need, and that this is actually going to help them in the long term. So I didn't have to convince the salespeople myself, but... Yeah, I'm sure that at least in the beginning there were a lot of people suspicious that this is a good idea, because it's actually going to reduce our revenue effectively.

**Mat Ryer:** Yeah, yeah. But I kind of love that it still happened. Don't you, Oren?

**Oren Lion:** Yeah... I was wondering, Mauro, because when this first came out, I couldn't wait to get to it, because I was getting invoiced every month because of all these overruns. And it was a lot of painful development time to deploy all the -- relabel configs, and do the client-side filtering... And then Grafana said "Don't worry about the client-side. We'll just take care of that at our front door." And we're like "Great." So we stopped updating Prometheus and client-side relabel configs... And now, how does Grafana make it a sustainable feature if customers just flood Grafana with their metrics, and don't pay any care to filtering at the client-side?

**Mauro Stettler:** Yeah, so the key to it is just that we need to be able to run the service really cheaply. And there are a bunch of ways how we do that. For example, we decode the received write requests without redundancy, and... There are a bunch of different tricks that we use to reduce the TCO of running the service. And obviously, we are still paying some money for it. It's not free to run it, but it's basically cheap enough for us to be able to offer it for free. And we think that in the end it's probably worth it, because by doing this, we are able to provide the customer a lot of value, because the customer is going to be able to get as much value out of the metrics as they would be able to without this feature, and they're going to be happy because the bill is going to be lower, so that's probably going to create a customer who likes to with us and who is hopefully also going to expand into other products that we are selling. Patrick, do you want to add something about that?

**Patrick Oyarzun:** Yeah, I think just generally the experience working with the finance and sales teams has been a learning experience. I think from this vantage point, looking back, it's obvious that it was the right decision. We have a commercial channel internally at Grafana, and anytime a new customer or a new deal is won by the sales team, they'll post in there... And they usually give a short message about "Why did they choose Grafana? Why were they looking for an observability solution at all in the first place?" If there was any competitive kind of aspect to it with our competitors, they'll post about that... And over the last two years, we've seen quite a lot of customers come through that only signed because Adaptive Metrics exists. And we wouldn't have those customers otherwise. And so I think from this vantage point, it's clear that, for the company overall, this is a good thing.

\[00:28:03.09\] I think on the individual sales rep basis it has been a tough pill to swallow sometimes, because you have customers that say "I'm sending 10 million series to one of your competitors, and I want to switch." And then they switch, and it's actually less with us. And trying to understand ahead of time what might their bill be after Adaptive Metrics and all of that kind of stuff, so that we can properly compensate our sales reps, so that they don't feel like they're getting the short end of the stick, has been a learning experience, I think, for all of us.

**Mat Ryer:** Yeah. Wow. It's a cool project. Were there sort of big technical challenges involved in this? What was the hardest thing technically to do here?

**Patrick Oyarzun:** I feel like there's a new one every month. Just to give you a peek behind the scenes - are we on v3 now, Mauro? We're on aggregations v3, right? You could think of it like that.

**Mauro Stettler:** Yeah, it's v3.

**Patrick Oyarzun:** I think there might be a v4 coming soon... But each of these versions, I think, you can think of as a complete re-architecture. And I think in each of them, so far at least, the reason for these things has been primarily cost. v2, for example, we built the whole aggregation pipeline and then looked at how much it cost to run, and it was basically the same price as just ingesting the data in the first place. And so if we're going to do that, we might as well just give you a discount on the bill and not do anything with the data, because then we're not maintaining this whole other system.

So we've gone through a bunch of iterations just kind of architecturally to figure out how do you make this something that can be free. And I don't think we're done. We're at a point where it's healthy, it's stable, the business is happy...

But we're always talking about all these new features we want to build, and new features tend to add cost... And so there will come a day when I think we'll need a v4.

**Mauro Stettler:** Yeah. And it doesn't only need to be cheap. It needs to be cheap and stable as well. Because for example the first iteration was cheap, but it wasn't stable.

**Mat Ryer:** So I kind of love -- honestly, just as an aside, I love this story, because I spend a lot of time advocating for build, build something; you can design it, but your design is probably going to be wrong. You really find out when you build it, and you're faced with then the realities of whatever that thing is you've built. And then - yeah, you take it from there. So I kind of like that arc, because I think that's a very healthy way of doing engineering. I don't know if you work like that. Well, you are, Oren, and it's obviously a little bit different maybe even in the healthcare space; you have to be a bit more careful.

**Oren Lion:** Yeah, I mean, we definitely have controls in place. And a lot of alerts firing off, and the features take more time to design... But features that save customers money, like this one, actually helps the customers expand into other areas in your business. So after I started using adaptive metrics, I had the headroom to move into IRM, and \[unintelligible 00:30:55.28\] and I got sites on using Tempo... And it's the same budget with Grafana that I had two years ago; I can just expand out and do more. And there's always some uplift. We also started using enterprise plugins for Snowflake.

So it's been slowly increasing, but it does help kind of keep us coming back to Grafana, because we know it's an affordable way to do monitoring. And as you make adaptive metrics better, it just makes it even more interesting to keep working with Grafana.

**Mat Ryer:** Yeah, that's great to hear. And honestly, one of the things I like about Grafana is we really are trying to do things the right way. It's not all about just maximizing revenue, or anything like that. And yeah, I think that's -- it's also something for the future. Like Patrick said, we're looking at other ways of doing this adaptive stuff for the telemetry as well. So hopefully - yeah, we're on that journey with you, that's the idea.

**Mauro Stettler:** \[00:31:55.03\] You asked for what the technical difficulties were... If you like, we can talk more about technical difficulties. For example, one thing which I think many people don't realize, that I usually interact with is that -- so when we aggregate those series in order to drop certain labels, we need to choose the right aggregation functions. Because some series you want to query by some, some you want to query by max; then there are also sums of counters, which are different again... And for each of those different aggregation functions, we need to internally basically generate and aggregate. So it's possible that for one aggregated series, which to the user looks like it's just one series, internally it's actually multiple series, that we aggregated with multiple aggregation functions, and at the time when it gets queried, we need to select the right one. I think that's one thing which often surprises people when I talk to them.

Or then another one is that - Patrick mentioned the feedback loop of the recommendations engine... One problem which we have had for a long time was that once we dropped a label, we actually didn't know anymore what the cardinality of that label was that we are dropping, because we are not indexing it anymore. So sometimes this has led to imperfect recommendations, because once we dropped the label, we didn't know anymore whether the cardinality inside that label has changed in the meantime. So that's something that we are in the process of fixing right now, but it's also something that you need to be aware of.

**Oren Lion:** Yeah, I had a question about the proactive roadmap, I guess you could say... Today I'll get an alert, and then I check recommendations, and we implement recommendations... There's some spike budget within Grafana to absorb that. But do you have some plans for an autopilot where you're like "Okay, Grafana, just apply these as they happen, find some way to inform us, and then if we need to disaggregate or get metrics back, we know where to find the place to do that"?

**Patrick Oyarzun:** There's a few different things we've talked about. So as far as the immediate question of an autopilot type thing... So the way we do that is basically it's a part of our normal CI pipelines. We have a cron job that pulls the latest recommendations, and updates what is our source of truth, which is a file in a Git repo, which is our source of truth for our current rules. And then the pipeline rolls that out.

We've so far avoided building a UI flow for autopilot... And the reason is mostly because - you know, when you really start to think about it, there's a lot that I would want, at least, and I think most of our customers would want with that, which is knowing when things changed, who changed them, what the impact was, maybe even being able to roll back to a certain known good point... All of these things are already solved by a GitOps-style approach. And so we have this debate internally of, you know, we could spend some amount of time building all of that out and making a really great, first-class experience... Or we could invest that same resource into other features, and basically leave it as "Well, GitOps."

We have a Terraform provider, we have an API... There are a few ways you could set up a pipeline around this. So far we've taken the second approach, of telling customers GitOps is really the best way. But obviously, different organizations are going to find that more or less challenging... So I'm curious what you think, actually, while you're here, about that whole thing.

**Oren Lion:** Yeah, I think exactly the same way you do. Even though I like the idea of an autopilot, we also have everything stored in Bitbucket in our Git repository. So we push out changes, and they're all version controlled, we know when they happened, there's traceability... So there's a lot more control. And maybe what we should implement is a cron job that just goes and pulls down recommendations and applies them. We'd still have the version history there, but it takes away the alerting factor that you're now over some threshold that you set. So yeah, I agree with you. Maybe autopilot isn't even needed.

**Patrick Oyarzun:** \[00:36:07.23\] I think there's one situation that we've kind of, or at least in the back of my mind I'm feeling like we might need to figure out. So you mentioned before that we do 95th percentile billing... So what that translates to is you can spike your time series to pretty much any level for up to 36 hours. And as long as it drops back down before the end of that 36 hours, you're not billed for that. So it can be one event, or it can be 36-hour long events over the month. The point is you kind of get a 36-hour budget to spike. Right now, recommendations are generated based on a few signals, like for example dashboards changing, or new queries that we haven't seen before, things like that. One of the things that we don't trigger new recommendations on right now is those spikes in cardinality. So there's a chance that you get this alert and the recommendation engine hasn't yet had a chance to analyze the new state. Typically it's running often enough that it will, but when we're talking about a 36-hour budget, what if we could get to a state where you have this auto-applied pipeline, and within the span of a few minutes you're tamping down on this cardinality explosion. I think in order to get to that level, we would need to actually trigger recommendations on the spike itself... And I think that's possible; it's just a thing that, like anything else, we have to weigh against everything else we're thinking about building.

**Oren Lion:** It does make me wonder, do I need to do client-side filtering with relabel configs, or can we just always open the floodgates and let Adaptive Metrics deal with the flood?

**Patrick Oyarzun:** Yeah, that's a really interesting question. I actually -- so I posted in our engineering channel just a few days ago, because I noticed we have around 25 million time series in our ops cluster that are unused right now. And the approach -- this is like getting into the design philosophy behind Adaptive Metrics a little bit, that so far we've taken the approach that it's better to keep some data, even if it's heavily aggregated, than to drop metrics completely. And the reason is mostly because we're kind of making these decisions for our engineers... Because no human is in the loop, we're not asking anybody permission before we aggregate their new metric that they added last month, or something. And so we've always taken the approach of it's better to aggregate than to drop. But even with an extreme amount of aggregation on our unused metrics, we still have 25 million time series.

And so I posted that in our engineering channel and was like "Hey, this is kind of expensive. Maybe we should drop some of these." And I picked all the metrics that were more than 100,000 time series, I put them in a list and tagged the teams that owned them, and said "What do you think?" And even just the act of bringing that up, a bunch of them went and started modifying their relabel configs, and deleting recording rules they didn't need... We've seen with adaptive metrics -- it's interesting, a lot of times just giving people the visibility is enough to create the behavior change, even without necessarily the technology to do it all automatically. I think giving insights into your usage patterns, and how big this thing is that you're not using is, tends to inspire, I think, a lot of people, especially when you put it in terms of dollars, not series; then they really start to get motivated.

So yeah, I mean, that's how we do it. We kind of just let everybody send whatever, and then after the fact we either aggregate, or maybe we go back and say "Hey, that's kind of expensive." Sometimes that's enough.

**Mat Ryer:** Yeah, that's very cool. So how do people get this? Is it available now? How long has it been around?

**Patrick Oyarzun:** Yeah, it's been around for a while. I think we -- do you remember which OpsCon we announced at? It was, I think, two years ago.

**Mauro Stettler:** In London...

**Patrick Oyarzun:** London OpsCon.

**Mauro Stettler:** I think in October; it was October of last year we announced it. And I think we said that it's going to be available in a few weeks. I think it was available in November.

**Patrick Oyarzun:** \[00:39:57.10\] Right. So it's been available since around that time. It's available in every tier of Grafana, even the free tier. So you could be sending 10,000 series and you'll potentially get recommendations to reduce that even further... Which is funny, because it basically just means you can pack even more into the free tier. But we've seen that the free tier is a really useful way for people to try Grafana Cloud out, and this is such a big, important feature we don't want to put it behind kind of a paywall, so to speak.

**Mauro Stettler:** By the way, we also see that the usage really picks up. I have some story about that, because just yesterday I noticed that -- so for a long time, the ops cluster, which Patrick already mentioned, which is our internal monitoring cluster that we use to monitor our cloud, used to be the biggest user of Adaptive Metrics. It aggregates -- so the usage fluctuates, but it usually aggregates at peak roughly around 230 million series down to 50 million. And yesterday I discovered that actually we have been overtaken by one of our users. They are now aggregating 330 million down to 30 million. So they're actually saving 300 million series using Adaptive Metrics. That's quite impressive. I was surprised by it.

And what I really liked when I saw this was that - this happened like one or two weeks ago, and we didn't even notice it. So everything just worked without an issue. So that was the most satisfying.

**Mat Ryer:** That's nice.

**Patrick Oyarzun:** Just a humble brag from Mauro...

**Mat Ryer:** Humble brag, but I didn't sense any of the humble bits. That was just a pure brag of how good this stuff is. Yeah, that's really cool. Wow. And do you think -- I mean, that's quite a big drop. That's like -- it's only 10% of the things they're storing. Do you think they're overdoing it? Do you think that you'll see them pull that back a little bit?

**Mauro Stettler:** No, I don't think that they're overdoing it. I think we just have to make sure that performing these aggregations is really cheap. I think that they'll keep doing what they're doing. I'm pretty happy to -- I'm happy to see my code running like this.

**Patrick Oyarzun:** Yeah, and I think, you know, knowing this customer - this is an organization that is running at a massive scale, obviously... And so you end up with these kinds of problems with kind of modern cloud-native architectures, where every time you add a replica, you now have - however many series are being emitted by that type of thing, you've now added another bucket of that. And they've got that problem in spades, and so simple things like dropping some unique label here and there can really have a massive impact.

**Mat Ryer:** Yeah. That's so good. I don't want to keep -- obviously, this is not meant to be a marketing podcast. This is meant to just be technical stuff. But I just -- that's great. What are the downsides? There must be some.

**Patrick Oyarzun:** Yeah, I think there are. I think the main thing that we see often is -- so when we aggregate, say you aggregate by the sum. You did some gauge metrics, say like disk usage or something, and you store the sum of all the disk usage across all your pods, as a random example. And now you go to query the maximum disk usage. If you didn't specify that in your aggregation config, then you'll get back an error. It'll say "We can't aggregate that way, we can only do a sum", basically. Now, importantly, the recommendations engine will notice that you made that query, and now will suggest that you go fix the rule. And so if you have an automatic process that's applying these things, then conceivably sometime soon you'll get that data back, and you can start querying it how you want to.

But there is this a limitation. I mean, part of the design philosophy of adaptive metrics is that you don't have to change your dashboards. In order to do that, we need it to be kind of like transparent. We don't want the shape of the line on your dashboard to change because you started using adaptive metrics... Because that just kind of creates this issue of trust. Now you aren't sure, "What did we really do?" if it looks different afterwards. And so it doesn't change. Like, if you see these graphs before and after aggregation, there might be like a small gap or something right at the moment when you would turn it on, but then generally it looks normal. And that comes at the cost of being able to know that we're serving queries accurately all the time, we have to sometimes not serve those queries.

\[00:44:06.25\] But I did a check the other day of our ops cluster, and we had -- I'll underestimate, because I don't want to lie. I think we had five nines of queries succeeding when it comes to adaptive metrics. So the number of queries that were getting this error of "You used the wrong aggregation function and you need to go change it" was like - there were three zeros after the point before you get to that percent. So it really does seem to mostly work. Most metrics are only ever queried through a dashboard, the usage patterns don't change much, and so for those cases it actually works great.

**Mat Ryer:** So if somebody was just poking around in Explore, and they were doing lots of different queries, they're just interested - are they likely to impact things by doing that? Could they make a mess?

**Patrick Oyarzun:** It's possible, yeah. And over time we've gotten better at handling it. The current state is basically any query that we see - with a few exceptions, any query is considered kind of like important. They're all treated the same. We don't try to guess, like, "This one is something we need to work, and this one we can ignore." There's a few exceptions... So for example, in our docs we document a few ways that you can run a query that won't be considered important... Like, there's a fake label called ignore usage you can use. And if you use that label, then we ignore that query for recommendations. So if you're poking around and you want to make sure you're not going to break something, that's an option. But generally, I don't expect people to use that.

The bigger exceptions are, for example -- one of the things we see the most common is a customer will write, for example, a recording rule, and the point of that recording rule is to try to basically calculate what their bill is going to be. It's like a meta cost optimization thing. And so they'll write a recording rule that does like a count of all the time series. That doesn't necessarily mean that they want to store account aggregation for every metric in the database, because then we're just going to end up making adapter metrics kind of useless. And if their goal in the first place was cost optimization, it's kind of this -- it's just a bad situation.

So that actually was happening a lot... When we first were in the private preview, we saw tons of customers where they would say "Hey, why don't I have any recommendations? It says all of my metrics are used. How is that possible?" And we would dig in and it was almost always somebody had written some homemade cost tool, and typically it was running a count on every metric.. So we ignore -- there's a few patterns like that where if you run the same exact query on every metric in the system, we tend to ignore that.

**Mat Ryer:** Oh, wow. That is really complicated.

**Patrick Oyarzun:** There's a few different things, yeah.

**Mat Ryer:** It reminds me of like Google's pagerank stuff. It's sort of like magic, and it just sort of -- yeah.

**Patrick Oyarzun:** Yeah.

**Mat Ryer:** I like that as a user you don't have to worry about it, honestly.

**Patrick Oyarzun:** Exactly. Yeah. And it's tricky though... We take it really seriously being good stewards of your data, because ultimately we're recommending that you delete things. And and to know that we can do that and it'll be safe, and we're not going to cause you to miss an SLO firing or something like that, we take that very seriously. So every time we introduce these new rules to say "We're going to ignore this class of usage", it's a whole process. Understanding how common does this happen in the first place, let's go kind of manually check a bunch of tenants and see what would it do if we do this...

And so part of the recommendations engine that I've, been working on over the last couple of years is we have a whole capability where behind the scenes we can run the entire recommendations engine with different configuration, and the results are not visible to customers. And that has allowed us to basically A/B test across billions of time series, and see "What happens if we add this rule, and ignore this kind of usage? What does that do to the global savings count?" and things like that. We've done tons of tests like that. And like Mauro mentioned before, we're working on a feature to be able to over time estimate better what the impact will be even after we've aggregated some data away... That right now is, again, running as like one of these background jobs where we're collecting data and trying to see what the impact will be before we roll it out.

**Oren Lion:** \[00:48:08.08\] It'd be interesting if there were some metric that shows us cost savings per recommendation, just to see kind of like how things have been going up or down. Not sure what I'd do with it, but it's just an interesting metric to have. And then separately - it's pretty funny... Leading up to this, I was like "Hey, maybe I should create my own Spend Metrics by Team dashboard." And I did exactly that, just account by some labels that represent a team... And so for every team I can say "Hey, here's your monitoring costs", because I can multiply that by what we pay. And when people see the cost for all these time series, it's a wake-up call. They need to go and do something about it, like update their relabel configs... But they don't; they can not do that. We can just do a better job with adaptive metrics. That's what I'm hearing. And that's less work for us, so... It's a great thing.

**Patrick Oyarzun:** Yeah, it's super-interesting. And you know, Mimir is a Prometheus-compatible database, and so I think a lot of times what happens is people will do what everybody does, which is google "How do I save, how do I reduce my time series?" And you find solutions that are kind of tailor-made for the Prometheus ecosystem, and they totally make sense of like "I'm going to count by team." But now that adaptive metrics exists, we're in this position where running that query tells us that you're using the team label, and that you want to count everything.

So we've had to kind of rethink what does usage really mean, what does cardinality really mean, and to try to do this without you noticing. We want to be able to ignore the right stuff, but not too much, so that way your dashboards don't break, but... Yeah, it's a delicate balance.

**Mat Ryer:** While we're on this subject, what are some other cool things that we can get into the roadmap while we're doing this new form of podcast-driven roadmap management without the PM? Although they're a great PM. Is it Steven Dungan, by the way? Is that the PM?

**Patrick Oyarzun:** He's on logs. He's on adaptive logs.

**Oren Lion:** Jen Villa?

**Patrick Oyarzun:** Jen was. She got promoted.

**Oren Lion:** Okay.

**Patrick Oyarzun:** So she's technically still over adaptive metrics, but her report, Nick Fuser, is our direct PM.

**Mat Ryer:** Yeah. Credit there, because they don't have an easy job with this project, I think.

**Patrick Oyarzun:** Yeah, no, it's definitely -- I mean, anytime you're building something that's as unique as this, it's hard. I think a lot of product management is understanding the ecosystem, and kind of building - not necessarily what other people have already built, but like you definitely use that as a part of the calculus. And there's not a lot. There's not a lot of existing art for this kind of thing, and so we've kind of had to figure it out.

**Oren Lion:** Do you work with the adaptive logs team?

**Patrick Oyarzun:** Yeah. So the adaptive metrics team is staffed by Mimir maintainers, adaptive logs is staffed by Loki maintainers, and so we're technically separate teams, but... Yeah, I mean, we just had like a company offsite and there was a breakout for adaptive telemetry, and a few of us from each of the signals got together to talk, and they're all the time coming into our team channel and saying -- because they're a little bit newer, and so they're maybe a little bit further behind on the kind of maturity curve as a product, naturally... And so they'll come into our channel and ask "Hey, how did you handle this thing?"

\[00:51:25.20\] And the cool thing though is that we're actually finding a lot of the same problems. Customers are worried about needing data that they dropped, they want to know "Okay, well, you said it was used, but by who?" So these questions kind of naturally come up across the signals, which I think is a really good sign that we're kind of addressing a real problem.

**Oren Lion:** Yeah... Curious, because they work in different ways, but have the same end goal.

**Patrick Oyarzun:** Exactly, yeah. It's been really interesting to see like how -- because yeah, logs don't have a concept of like aggregation necessarily. And similarly, metrics don't have a concept of sampling necessarily. You have to look at them differently. Yeah.

**Mat Ryer:** Well, I'm afraid that's all the time we have... Unless there's any final thoughts.

**Patrick Oyarzun:** So I'll just say, one big feature that's going into private preview right now - we just deployed it to our ops cluster - we're calling it rule segmentation. The idea is basically - we've seen, especially with larger organizations, that having a single configuration for adaptive metrics is not enough. And this is true for us internally, too. We've got, I think, around 6,000 rules supplied in our ops cluster, and with rule segmentation what that's allowed us to do is have a separate configuration for the Mimir team, for the Loki team, for the tempo team... Our machine learning team has one. Basically, there's around 50 or so teams, each gets their own configuration. And I'm excited about that because that means we can start to treat them in different ways. Maybe you're a brand new team and you kind of don't really know yet how you're going to define your SLOs, what you're going to monitor. Well, maybe you don't want to apply adaptive metrics at all.

Versus say the hosted Grafana team - they've been around a long time, they have very mature operational practices, and they have a huge amount of time series they're generating, and so they may want to dial it up. And so allowing especially larger organizations to break down their adaptive metrics config into these segments or teams or whatever you want to call them, cost centers - I'm really excited about that. I think it'll open the door for kind of a different way to think about it across all of these features that we've been talking about so far.

**Oren Lion:** And did Mauro have any ideas he wanted to share before we head out? Just curious...

**Mauro Stettler:** Yeah, in my opinion I think one thing that we should solve, which currently is something that's missing, is that we should -- when we generate recommendations, we currently tell the user something like "If you drop label X, you're going to reduce your active series count by Y." But I think what the user actually wants to see is not by how much their series count is going to be reduced, but by how many dollars. Right now, as it is, that's actually not very easy to predict. And I think that's one thing that we should solve, because what the user wants to see is "How many dollars are we going to save with the recommendation?" Yeah. I think once we have this, this is going to help a lot.

**Patrick Oyarzun:** I mean, if you have the billing rate, you'll be able to do some quick math to give the dollar amount...

**Mauro Stettler:** So the problem right now is that the bill isn't always linear with the active series, because there is another factor, which is the DPM, the data points per minute inside the series, which can also affect the bill. And how the recommendation is going to affect the DPM is complicated. So that's one problem that we are currently trying to solve.

**Patrick Oyarzun:** Good point. Thank you.

**Mat Ryer:** Yeah. Well, good luck with that. And that brings us nicely to the end. That is unfortunately all the time we have today, but thank you so much for joining me and digging into adaptive metrics. We learned about what they are, what the problem is - too many metrics - learned about how adaptive metrics can automatically, but with your permission, help you address that problem, reduce costs and stream things down a bit.

Excellent stuff. Thank you very much Patrick, Mauro and Oren. Thank you for joining us, and thanks for listening. We'll see you next time on Grafana's Big Tent.
