**Gerhard Lazu:** Today we have around this square table, rectangular table, we have Björn from Grafana, we have Fred from Red Hat, and then we have Ben from GitLab. All of them are Prometheus contributors, so this is going to be a technical discussion. We're going to mention a lot about cool things about Prometheus. Who would like to get us started?

**Ben Kochie:** Sure. I'm Ben, I'm a site reliability engineer at GitLab. I've been contributing to the project for quite a number of years now. My focus is on getting developers and other systems to integrate with Prometheus. So I don't work on the core code so much, but I try and help people get their data into Prometheus and then learn how to actually turn that into monitoring.

**Björn Rabenstein:** My name is Björn. I work at Grafana, but that's quite recent. I now am fortunate enough to be a full-time Promethean. My company pays me to contribute to the project, and I also do internal Prometheus-related things. Previously, until like half a year ago, I was at SoundCloud, where Prometheus had its cradle (that's how I like to say it). There we kind of had other jobs; we were production engineers, or site reliability engineers, or something... Ben was also there, and we had to create Prometheus for doing our job, as a tool. But it was always like a site business, in a way; it sounds kind of weird now that it's so popular.

**Frederic Branczyk:** I'm Frederic. I am an architect at Red Hat. I'm basically the architect for everything observability, and I happen to have started with Prometheus, in that space, roughly 3,5 years ago. Even though it's been 3,5 years, I think I'm the most recent at this table to have joined the Prometheus project.

**Gerhard Lazu:** And one thing which I'd like to add is that this year, for the top contributor in the cloud-native landscape, the award went to Fred, right? Björn, you were mentioning earlier that Prometheus - the contributors got awards in a row every single year... One of the Prometheus contributors got some sort of an award. So there's like a streak going on here... Is that right?

**Björn Rabenstein:** You might think it's like a political thing, that we have to get an award, but I think we really have a bunch of awesome people.

**Gerhard Lazu:** \[03:59\] I think Prometheus, looking at how it grew -- everybody's looking at Kubernetes and everybody knows Kubernetes, but Prometheus is also a graduated project in the CNCF... And a lot of activities are happening around Prometheus, around observability, around metrics... I find that super-interesting, because it's not just about the platform, it's also all the other tooling that goes in the platform. And Prometheus is one of the shining stars of the CNCF.

**Ben Kochie:** We were the second graduated project.

**Gerhard Lazu:** There you go.

**Björn Rabenstein:** We almost graduated first, but...

**Gerhard Lazu:** Yeah. But Kubernetes--

**Björn Rabenstein:** Kubernetes had to take that, yeah. They're also a much bigger project, so there was way more effort. For us it was kind of easy to graduate. But interestingly, I did this for a talk recently \[unintelligible 00:04:43.13\] and CNCF has this dev stats tools - it's a Grafana dashboard, shameless plug - where they can plot, they just evaluate activities among companies, among contributors, and you can just draw graphs how actively is this project contributed to. And if you look at the Prometheus graph, it looks like from the moment of graduation you actually got more activity. It's probably smaller things that are not so visible, but a lot is going on in the Prometheus ecosystem.

**Gerhard Lazu:** Right. And you only just had PromCon not long ago. How was that? Two weeks ago, or one week ago? That was very recent.

**Ben Kochie:** Yeah, that was the second week of November. It was great. It's a very small community gathering; we're actually sad this year, we wanted to expand the size of it, but we just couldn't get a venue big enough that was available when we needed... So yeah, it's a small 220-person conference, and it's all talks about Prometheus and development of what's going on, people's stories and how they use Prometheus.

**Björn Rabenstein:** Tickets are highly sought after. It felt like a rock concert.

**Frederic Branczyk:** Yes. And I think even our livestream was well-visited, right?

**Ben Kochie:** Yeah, I think we peaked at something like about 80 people on the livestream. It was a little unreliable this year, but we'll hopefully do better next time.

**Björn Rabenstein:** All the talks will get proper recordings on the website, so everybody can watch that.

**Frederic Branczyk:** I think what's super-exciting about PromCon - I believe all of us have been at every official PromCon. I think there was one unofficial --

**Björn Rabenstein:** I was at the first unofficial PromCon 0. \[laughter\] You were too, right? It was at Soundcloud, most -- I mean, we called it PromCon \[unintelligible 00:06:43.00\] when developers came together to prepare the 1.0 release. But then the real PromCon \[unintelligible 00:06:48.10\] I was at the first, and this one.

**Frederic Branczyk:** This most recent one.

**Björn Rabenstein:** Yeah.

**Frederic Branczyk:** I think what's really interesting about how PromCon has evolved over the last couple of years is that in the first 2-3 years I think it was very Prometheus development-focused. Last year also, and already we've seen this a lot - I think the entire community is kind of evolving. Prometheus is a very stable project, and we're now more demonstrating how it can be used in extremely powerful ways. I think that kind of reflects, in some way, the graduated status... Because people can rely on it, we've seen all this adoption that is just incredible.

**Björn Rabenstein:** Also, how this ecosystem doesn't have a strict boundary. You have lots of projects that are not Prometheus projects, but they are closely related, and there are lots of integration points. It's open source, it's open community, and I think that really works well.

**Gerhard Lazu:** \[07:57\] One thing which I really liked about Prometheus is this emerging standard of OpenMetrics. So it's less about a specific product and it's more about a standard, which people and vendors are starting to agree on, and I think that is such an important moment. When you have all these companies saying "You know what - Prometheus is on to something." So how about we stop calling the exposition format that, and we start calling it OpenMetrics? Did you have any involvement with that?

**Ben Kochie:** Yeah, I'm one of the people that started the OpenMetrics project, and as a site reliability engineer, I'm working with my developers to instrument their code and make it so that I can monitor it... And I also have to work with a lot of vendor code. And for a long, long time, the only real proper standard is SNMP. But SNMP for a modern developer is extremely clunky and really hard to use, and it's not cloud-native, if we wanna use the buzzword.

As an SRE, I don't actually care if vendors use Prometheus, but we need OpenMetrics as a modern standard to replace SNMP as the transport protocol of metric data.

**Gerhard Lazu:** And I really like how the metrics -- OpenMetrics... OpenTelemetry, which is a combination of OpenCensus and Open...

**Frederic Branczyk:** Tracing.

**Gerhard Lazu:** OpenTracing. Thank you very much, Fred. So the combination of these two - how does OpenMetrics fit into OpenTelemetry?

**Ben Kochie:** OpenTelemetry, because it comes from the OpenTracing and OpenCensus - OpenCensus was this idea of creating a standard instrumentation library that handles both the tracing and the metrics, and some of the logging pieces... And this is a really great idea, especially when I'm wearing my SRE hat - you have a standard library for instrumenting your code, and the OpenMetrics is (or what I think should be is) the way you get the metric data out of OpenTelemetry. So it's just kind of the standardized interface. Because the tracing interface is kind of still young, and fast-moving, and it hasn't settled down, but the Prometheus and the OpenMetrics standard is something that we wanna see last for as long as SNMP has lasted. SNMP has been around since the early '90s, and it hasn't changed much, and the data model is actually quite good... With it being clunky and a little bit designed around 16-bit CPUs, and things like that. But we wanna see the OpenMetrics transport format be this long-term, stable thing that vendors can rely on.

**Gerhard Lazu:** So we have metrics, the story is really good, we have traces, and the story of distributed tracing is really good as well... Where are logs, or events (as some like to call them), where do they fit in in this model? And I'm looking at Björn, because I know that Loki is this up-and-coming project... We'll be talking later with Tom about Loki, and there was -- I forget his name, but he's the maintainer of Loki, or the head behind Loki \[unintelligible 00:11:36.10\]

**Björn Rabenstein:** \[11:44\] Actually, we have a bunch of people at Grafana working on Loki. It's like a big deal, obviously. I don't even feel like I would do them justice if I now tell them. You should probably ask later... I mean, perhaps you should take it from the other way - people see Prometheus, they realize it's this hot thing that they should use, they see all the success they have, and then they try to shoehorn all their observability use cases into Prometheus, and then they start to use Prometheus for event logging... And Prometheus is a really bad event logging system. That's a lot where we have to fight -- not fight; where we have to convince people that they shouldn't do this, even if they're angry at us.

But then there's also the other -- whatever the backlash where the logs processing people try to solve everything... Yeah, we kind of have more this inclusive picture; you need all those tools, you need to combine them nicely, and Loki has this idea where you take some parts of Prometheus, which is like service discovery and labeling, and use the exact same thing for logs collection, and then it's easy to connect the dots and jump from an alert with certain labels, into the appropriate logs that you have collected. It goes into that area, but I guess you will talk a lot about that with Tom.

**Frederic Branczyk:** Actually, I'm a strong believer of connecting different signals via metadata. Actually, Tom and I did a keynote at KubeCon Barcelona about exactly this topic, so I highly recommend people checking that out.

**Gerhard Lazu:** Okay. Are the videos out yet from Barcelona?

**Frederic Branczyk:** Yeah.

**Gerhard Lazu:** Cool.

**Björn Rabenstein:** It's not only him recommending himself, I recommend that as well. \[laughter\]

**Gerhard Lazu:** Okay.

**Ben Kochie:** And from the Prometheus project perspective, I see it as -- with Prometheus we have a very specific focus, and we kind of follow a bit of the Unix philosophy of "As an engineer, I want a tool that does one thing and one thing well." And I look at some of these large monitoring platform things and I see a lot of vendors - they also combine monitoring and management into the same platform. With Prometheus, we explicitly don't have any kind of management. We even don't even have any templating in our configuration file, because different organizations have completely different ideas on what they want for their configuration management to look like.

You have things like Kubernetes and config maps and operators, and then you might have another organization that is doing everything with a templating configuration management like Chef, or Ansible, or one of those. So the layering approach to observability is really important to me, because I want a really good logging system, and I want a really good metrics system, and I really want a good tracing \[unintelligible 00:14:54.15\] and crash dump controls, and profiles... And to me, those are all different pieces of software and I need to combine them, and there's no one magic solution that's gonna solve all my problems all at once.

**Gerhard Lazu:** I can see this idea of the building blocks, and having the right building blocks, "right" being a very relative term in this context... Because "right" to be is different than "right" to you. So this choice of selecting whichever building blocks are right for you, and combining them, again, in whichever way is right for you, and then almost everybody gets what they want. The pieces exist, and they can be combined in almost infinite ways.

So Prometheus has grown a lot, Prometheus is on a crazy trajectory right now, from where I'm standing... And I would like to zoom in a little bit in a shorter time span, for example the last six months, just to get a better appreciation of all the change that is happening in Prometheus. Let's focus on the last six months, the big items that have been delivered, and the impact that they had on the project.

**Björn Rabenstein:** \[16:09\] We should also say, there's so many -- we call it "project", a repository in the Prometheus GitHub org, and there are many projects. AlertManager is probably something very famous, Node\_exporter is pretty active and big, and all those things... But every project has new stuff going on, and I think we should restrain ourselves to just the Prometheus server itself, because otherwise we could chat forever about all the new things.

**Ben Kochie:** Yeah. And actually, a few of us have been discussing that the Prometheus-Prometheus core code is really reasonably feature-complete, and it's not actually moving that fast. We have lots of small changes that are still important, but the speed of the project is actually how many additional things that are connected to Prometheus that is expanding.

**Frederic Branczyk:** There's a large momentum about things that are being built around Prometheus, while Prometheus itself is largely stabilizing and optimizing.

**Björn Rabenstein:** Yeah. Should we talk about something new? Now that you say stuff around Prometheus - it was always a very hot topic that Prometheus doesn't have this idea of having a distributed, clustered storage engine built-in, and we always had that "somebody else's" problem. Then we provided - and it's still an experimental interface, officially...

**Ben Kochie:** Officially yes, but it works.

**Björn Rabenstein:** Yeah. So we created this kind of experimental write interface, and now we have dozens of vendors or open source projects that integrate against this interface, where Prometheus can send out the metrics that it has collected to something out there. This has seen a lot of improvements recently. I don't know, does one of you want to talk about details there?

**Ben Kochie:** Actually, even commercial vendors, monitoring platform vendors are starting to accept Prometheus remote write as a way to get the data into their observability stack.

**Frederic Branczyk:** I don't think any of us actually worked on these improvements, but I think the most notable thing that happened in remote write was previously remote write - whenever Prometheus scraped any samples, it immediately queued them up and tried to send them to the remote storage. This had various problems, one of which is we really just keep all these samples in memory until we send them off. So one of the dangers was if the remote storage was down, we would continue to queue up all of this data in memory, and potentially cause out-of-memory kills, for example.

The solution to this was Prometheus has a write-ahead-log where the most recent data is written too, before it gets flushed into an immutable block of data... So instead of doing all of this in-memory, basically we use the write-ahead-log as a persistent on-disk buffer. That write-ahead-log is tailed, and then we send the data off based on that.

This is one of those things -- the feature actually hasn't changed at all in its functionality, it's just the implementation itself changed to be a lot more robust than it used to be. And I think that's really exciting, and it kind of shows the details that we're starting to focus on in Prometheus.

**Ben Kochie:** For all those projects that are being built around Prometheus, it's very important and it's becoming even more important for the core to be more robust, to be more performant, to be dependable, so that it can support all those extension points and all that growth.

**Björn Rabenstein:** \[20:04\] Yeah, I guess if it's still experimental, we should do something about it. \[laughs\] Shall we talk about the flipside of that, the remote read?

**Gerhard Lazu:** Yeah, yeah.

**Björn Rabenstein:** Because that is the flipside of it; if you have a Prometheus server that has stored stuff in remote storage, often those remote storage providers have their own query engines; sometimes they even support literally PromQL, and you can work on that... But sometimes you just want your Prometheus server to know about that data that has been stored away somewhere, and there is the flipside of the remote write, which is remote read. That's also kind of still experimental, but there was a similar problem... Who wants to take this?

**Gerhard Lazu:** Go ahead.

**Björn Rabenstein:** Should I go ahead? Actually, we are not the domain experts in that, right...? \[laughs\] So the problem there was that Prometheus runs a query, and then the query engine has to retrieve the data, and the API looked like that it would essentially get all the samples that this query had to act on in one go... So the remote back-end for that had to construct all those samples in memory, on their side, and then send it all over. So Prometheus has to receive it all on it's own side, it's all there, and then that could have a huge impact on memory usage in that moment. I mean, that concretely happened. You would \[unintelligible 00:21:31.03\] both parts.

The back-end would build up all this huge amount of samples in memory, and then Prometheus has to read it. Prometheus has a really efficient way of storing time series data in blocks, in its own storage, so the idea was to just stream the data... Streaming is anyway the hotness, where it's all in one stream, you don't have to build it up first and then send it out. And I think it also reuses the exact block format of Prometheus.

**Ben Kochie:** The big problem with the remote read was that we have all of this compressed data on disk and in memory, and the remote read would decompress it, serialize it, and then send it out over the wire completely uncompressed, and it was using huge amounts of bandwidth. Actually, was it taking it and then Snappy-compressing it, if I remember correctly?

**Frederic Branczyk:** I believe so, yeah.

**Ben Kochie:** Yeah, so it would take a well-compressed time series block, serialize it, and then recompress it with a generic compression... And this was just kind of silly.

**Björn Rabenstein:** In hindsight, though... \[laughter\]

**Frederic Branczyk:** In hindsight, yes. And this doesn't just benefit the Prometheus server itself, but this is -- again, there are a bunch of integrations around Prometheus that benefit from this.

**Björn Rabenstein:** Yeah. But I think Thanos was -- it was a big deal for Thanos, this improvement.

**Frederic Branczyk:** Yes, because Thanos essentially sits next to a Prometheus server, and uses this API to redraw data from the time series database... So it was a big deal for this component to have this more efficient way of doing it. Because Thanos itself had already this streaming approach; so it loaded everything into memory, and then sent it off in a streaming approach. So now it can actually make use of all of these things.

**Gerhard Lazu:** So why do you think that this remote write and remote read are becoming more and more important these days? Is something happening with Prometheus? Is it getting to a point where this is becoming more and more important? Why is it an important thing now?

**Ben Kochie:** \[23:50\] As users of Prometheus grow, they grow beyond the capacity of one Prometheus server, and Prometheus was designed from a background of distributed systems... And where Prometheus got its inspiration - we had hundreds or thousands of monitoring mini-nodes, and each of these mini-nodes would watch one specific task and keep track of one small piece of the puzzle. And as people grow their monitoring needs, they're running into the same exact problems, where a single monitoring server is not powerful enough to monitor a whole entire Kubernetes cluster with tens of thousands of pods, and multiple clusters that are geo-distributed. So they're running into the same problems. And being able to take Prometheus and turn it into just the core of a bigger system means that you need these in and out data streams in order to make it the spokes of a full platform.

**Gerhard Lazu:** So that's another hint as to the popularity of Prometheus and the use cases for Prometheus, which - they are like machines, they aren't big enough to be able to run everything in one machine. So again, it got to the point where you need more than one, and what does that look like. So this is a story in a use case which is becoming more and more relevant.

So there was the remote write, the remote read, important improvements in the last six months... What other things are noteworthy?

**Björn Rabenstein:** It's actually a little bit longer ago than six months where we decided we go on a strict six-week cadence of releases. Similar to Kubernetes, but they have a longer cadence.

**Frederic Branczyk:** Three months.

**Björn Rabenstein:** Three months. Go has this similar thing... Personally, my ideal is always you should just release when you have something to release, and in the ideal world, that just works... But in the real world, people just procrastinate, and then -- we have seen this, that just nobody was bothering to release a new Prometheus server, and then we had way too many things piled up. So we just said "Okay, every six weeks." And should we ever reach this point where we have a new release and nothing interesting has happened, we can reconsider that. But so far, we have done this now for almost a year, I think.

So we always get a release \[unintelligible 00:26:23.15\] nominated ahead of time, and then you cut a release candidate, you tell the world that they should try it out, and then usually we get a fairly stable .0 release. What is the current, 2.14.0? I think we didn't have a bug-fix release for that one, right?

**Ben Kochie:** Yup.

**Björn Rabenstein:** That was during PromCon actually when we released that. But that was just a coincidence, because it's a strict six-week cadence. So every time there's something interesting happening... Yeah, so releases go up. But we also have this all built into it, like benchmarking. The benchmarking tooling, our internal benchmarks are way better now, and it's all part of the procedure, to run benchmarks to see regressions. We had a few of them in the past, nice, interesting, new features, but also, sadly, a new feature was everything is a bit slower... \[laughs\] So that can't really happen yet; or it happens in a form where we say "Okay, now we have (whatever) stainless handling" and we accept that this has a tiny performance penalty.

**Frederic Branczyk:** Because we have all these tools, we can do these things in a controlled way, as opposed to realizing these things after we've already released it and users are opening issues. One thing that personally for my organization is really cool about the regular release schedule is we know exactly when the next release candidate is going to be cut, so the SRE team can plan \[unintelligible 00:27:53.26\] these kinds of releases, and contribute back with issues, and so on. I think that's also for us as maintainers really powerful to get more consistent feedback.

**Gerhard Lazu:** \[28:10\] Do you see the adoption of new releases? Is there a way of seeing what the adoption is? What I mean by that - maybe number of downloads, maybe something that would tell you "Okay, the users are upgrading, and they're running these new releases." Is there such a place that you have? Maybe it's publicly available...?

**Ben Kochie:** Yeah, there are counters for looking at how many downloads we get from the official releases. There's also how many people pull their Docker images... But we're not really paying attention to this. We're more focused on development than marketing numbers.

**Björn Rabenstein:** Do we have like GitHub download counters?

**Frederic Branczyk:** Yes, I believe so.

**Björn Rabenstein:** Okay.

**Ben Kochie:** But we mostly don't even pay attention to them.

**Björn Rabenstein:** But then also, of course, some organizations wouldn't even download directly from GitHub, they just download it into their own repository... So you can never know. We needed to do some like some phone-home mechanism into Prometheus, and we're not doing that... But Grafana has some mild tracking about their installed instances, and they also report back the number of -- like, which data source is being used by that Grafana instance, and every PromCon has a little lightning talk where some Grafana person is telling us how many Grafana instances there are in the world that phone home, and how many of them have Prometheus as a data source. And the Grafana growth is crazy, but the percentage of Grafana instances using Prometheus is also growing like crazy. It's like a second order of growth, and I think this year we hit the more than 50% of Grafana instances have a Prometheus data source. That's mind-blowing.

**Gerhard Lazu:** So releasing new versions, having this six-week cycle when users can expect a new version to be cut, a new version to be available... Do you do anything about deprecating old versions, or stopping any support for older versions?

**Frederic Branczyk:** It's largely on an ad-hoc basis. If there is someone who is willing to backport a fix, I think we genuinely are open to cutting another patch release. Sometimes us at Red Hat we support older versions in our product, for example, and that's when we do those kinds of things. I don't think we have a set schedule of when we don't support anything anymore, but it generally doesn't happen too often.

**Björn Rabenstein:** Also, we are on major version 2, and we have a few features listed as experimental that can actually have breaking changes, where you could not just seamlessly upgrade... But most features are not experimental. So there's very few reasons for somebody to not go to the next minor release.

Sometimes we have little storage optimizations where we try, after some problems in the past where you couldn't go back from once you have gone to the higher version and the storage has used the new encoding version internally, the older versions couldn't act on it... And we are now doing things where you have to switch it on with a flag in the next minor release, and then it becomes default, but you could still switch it off, and then it becomes the only way of doing it. It's very smooth, and I think rarely -- I mean, some companies have these very strict procedures to whitelist a new version, but in general it's happening rarely that somebody says "I really still have to run Prometheus 2.12. Could you please have this bug fix release for 2.12?"

**Frederic Branczyk:** \[32:05\] Yeah. As a matter of fact, I don't remember the last time we've done anything like this.

**Ben Kochie:** Yeah, the releases are always upgradable within the major version... So the incremental upgrade is completely seamless. It's just dropping the new version, restart, and away you go. There has been no real problem with upgrades.

**Frederic Branczyk:** Interestingly -- so I also work on one of the projects that integrate around Prometheus called the Prometheus Operator, and we actually test, to this day, upgrades from Prometheus 1.4, I believe, up until the latest version.

**Gerhard Lazu:** Amazing. Okay.

**Björn Rabenstein:** Should we find something else to talk about?

**Gerhard Lazu:** Yeah.

**Björn Rabenstein:** So we could talk about unit testing rules and alerts.

**Ben Kochie:** Yeah.

**Björn Rabenstein:** Alert testing is a big deal, because -- I have discussed this actually also quite often recently, how you actually make sure that an alert will fire if you actually have an outage. This is a big, arguably not quite solved problem, but at least in Prometheus you can now unit-test your rules - recording rules, as well as alerting rules; it's all built-in in promtool, this little command line that's distributed alongside with the server. And there's a little, kind of a domain-specific language, if you want, to formulate rules. You can write "This is how the time series looks like, and then I want this alert to fire in that way", all those things. I think we have a blog post on the project website...

**Frederic Branczyk:** Yeah, I think we have it.

**Björn Rabenstein:** Yeah. That's pretty cool.

**Frederic Branczyk:** Again, this is one of those things where it shows the maturity of the project and the ecosystem, that people don't only care about monitoring and alerting, but they also care about actually testing their alerting rules.

**Gerhard Lazu:** So we talked about the big, noteworthy initiatives that have been delivered in the last six months, the most exciting stuff... What about the next six months? What do you have on your roadmap, things which are worth mentioning?

**Björn Rabenstein:** We have a roadmap on the website, but it's kind of almost obsolete, because I think most of these issues or items there have been almost implemented. So I think it's time for getting more into more visionary things, but also there's some things very concretely happening. One thing that will be really visible is a new UI for the Prometheus server. Some people just use Grafana as their interface for Prometheus, but originally, when Prometheus was created, there was no Grafana. We actually had our own little dashboard builder. But Prometheus was really meant to -- why are you laughing...? \[laughs\]

**Ben Kochie:** Hey, I'm still a Promdash fan.

**Björn Rabenstein:** Okay, so it still has fans. \[unintelligible 00:35:07.15\] So we want to talk about the future... The UI on the Prometheus server was always very simplistic, but I totally loved it; it was my daily tool to work with... But yeah, it hasn't aged that well.

**Ben Kochie:** Yeah. So we're replacing our handwritten JavaScript from 2013 or so with a nice, new React user interface. It's now in 2.14, and you can go give it a spin. There's a button you click to try the new UI.

**Björn Rabenstein:** \[35:48\] Essentially, at the moment, this is just reconstructing all the features we have... But this will allow modern stuff, like proper autocompletion, and tooltips, and all those things; that will be very easy to include. You get a glimpse of it if you do the Grafana Explore view. It's a lot of stuff... But that's all very much wired into Grafana, and in the Prometheus UI we try to get this in a more generic form. And we also want to be able to do this Language Server Protocol (LSP), which is this generic way where IDEs can inquire from a server what to do with autocompletion, and stuff. So this could work for the Prometheus UI itself, but there's actually an intern at Reddit, working with Fred \[unintelligible 00:36:36.12\] he's working on this, just implementing this LSP for PromQL. Then you can point your VS Code to that, and suddenly you get autocompletion in your editor, writing rules. That's so cool.

**Frederic Branczyk:** Yes, I'm really excited about that.

**Ben Kochie:** I'm also really excited to finally get those beautiful help strings and all the metrics output, and getting that into the basic user interface... Because this would help all the users of Prometheus to be able to see what does this metric name actually mean, and get the extended help information, and the explicit types that we have. We have this data in Prometheus, and it's been many years and not exposed to the user.

**Frederic Branczyk:** As a matter of fact, I saw a demo last week showing exactly that.

**Björn Rabenstein:** Oh, nice. I always tell the story of Prometheus as it has started with the instrumentation first, and we always put in there that you have to describe your metrics with a help string and you have to tell that it's a counter, or gauge, and then Prometheus was just not doing anything with that information... And that was lasting for way too long. But now something is happening.

**Frederic Branczyk:** That actually resonates really well, because you're right, a lot of effort goes into describing what the metrics are. And then when you consume them, you just consume them as metrics, as values, right? And then a lot of that information - actually, all of that information - gets lost. So I can see a really good opportunity for maybe Grafana (or another UI) to make use of that information, to maybe start explaining what the different metrics are, as the original authors intended them.

There's a question which I have - I'm wondering what are the limits for describing metrics. When I say "limits", I mean is it like a single string, and is there a limit of how big that string can be? Can you add any formatting to that string? Because I'm almost thinking markdown. It's a bit crazy in hell, but why not? It feels like the next step to this.

**Björn Rabenstein:** That might evolve when we actually use it, but at the moment it's a plain text string with no length restrictions. Wasn't that help string -- we had an incident \[unintelligible 00:38:52.00\] where somebody accidentally put a whole HTML source code into a label, and Prometheus could ingest that just fine. \[laughs\] It looked really weird when you looked at the metric. But we are usually not implying any fixed limits on anything.

**Ben Kochie:** Yeah. Or any formatting. It's just like plain text.

**Björn Rabenstein:** But formatting - that might evolve; we will see.

**Frederic Branczyk:** It's actually interesting... We've had the metadata API through which you can query help and type information for I think about a year and a half now, but just haven't actually made use of it just yet. So I think, as Björn started out with the React UI, it's a really cool thing that we can now, with a modern approach, do all of these things.

Julius did the initial work for this React-based UI, and just within a couple of weeks of having this entry, we've had a tremendous amount of contributions to this... Because suddenly, we've opened up a pool of engineers that can help us out with these things... Which was kind of the initial point anyways, because nobody was really contributing to the old UI, and suddenly we are just a couple weeks into it and it just validated the point that making this more accessible opens a large pool of contributions.

**Björn Rabenstein:** \[40:19\] Which I think is a very interesting point in open source projects - should you go for something with a known, big base of people who \[unintelligible 00:40:26.03\] got really refurbished a while ago in Elm... Which has a way smaller community, but a very committed community, and we had a bunch of committed contributors. I think they are now obviously not happy that this is happening in React... But I think it's a really tough decision. You could say it's the same when we started Prometheus and decided to use Go and not Java, for example. Go is a way technically better language for that, but back then we were early adopters. We also found a lot of bugs in Go, or feature requests that we really needed, but it was a big bet to go into this new language that doesn't have an established community yet.

I think it's not a clear cut what way to go, but it speaks volumes that we get new contributors that are super-enthusiastic about code in React. I wouldn't be enthusiastic, but luckily there are others who like it.

**Gerhard Lazu:** Do you know how that decision was made, like what to choose? Was it like the size of the community, or did someone just say "Oh, this looks cool", and they started using React?

**Frederic Branczyk:** I think it was largely driven by Julius. Julius wanted to learn React actually, and kind of tried it out here. Obviously, asked everyone in one of our dev summits if people think this is a good idea to actually pursue fully, and we agreed on it.

**Björn Rabenstein:** I think we never had an explicit decision. Often, things just happen, which can be good. Sometimes I think decisions should be explicit, but again, this is not easy to make a call if this should be super top-down, we all sit together in a committee and vote about it, or this should just happen.

**Ben Kochie:** I think it's best to just let it happen, because whoever is willing to do the work is the one that should drive the change. We can make committee decision after committee decision, and then nobody will do anything with it. So doing the decision-making by being willing to do the work and support it is much healthier for a project.

**Gerhard Lazu:** That sounds like such an adult approach, and such a sensible approach. It's almost like "Of course it makes sense."

**Ben Kochie:** Yeah.

**Gerhard Lazu:** Yeah, you're right - whoever gets to do the work should decide; whoever is most passionate about it. They're going to be leading the work anyway, so why don't you just go ahead and -- you know, because we trust you to make the right decision. And as it turns out, it was the right decision, right? The React community joined, and there's all this new interest that you wouldn't have had.

**Björn Rabenstein:** I don't think it's always that clear. I think a project is sometimes very complex, and some people need some guidance, should they even become active in this area... And I think we also had incidents in the process, where somebody just did something and it kind of steamrolled the others, and then they felt frustrated, or something.

I think this is an actual hard problem. I actually read a paper right now that some of my Grafana colleagues who worked in bigger open source projects recommended to me - how are open source communities making decisions. There's active research going on on that, like should you have a governance structure...?

We have a governance structure now... I think it's an interesting, but also very hard, or it's a hard problem, that's why it's an interesting problem. And important.

**Gerhard Lazu:** \[44:02\] That's a paper which I would like to read, for sure... And I know that many others will as well, so I will look forward to that link from Björn. Okay, so one of the things which I'm aware of as a Prometheus user is memory use. Is there anything that is being done about that in the next six months, any improvements around improving Prometheus' use of memory?

**Frederic Branczyk:** Yes. As a matter of fact, we had one of our developer summits just after PromCon, and this was one of the topics that we talked about. The way that the Prometheus time series database works is that there is an active \[unintelligible 00:44:38.21\] where the inserts are happening, the live inserts of the data that's being scraped. That builds a block of the most recent two hours of data, and then that's flushed to disk to an immutable block, and then we use memory mapping, so the kernel takes care of that memory management there.

But that most recent two hours' worth of data is kept in memory until we do this procedure. So that can potentially make up a large amount of memory that you're using. So we're gonna be looking into ways of offloading this from RAM, basically, to other mechanisms. We haven't fully decided on what that is, but we are actively looking into improvements that we can make.

There are various other mechanisms that we wanna look into. Even within the immutable blocks of data we want to explore, as Björn likes to say, "new old chunk encodings." Because when we wrote the new time series engine, we kind of made the decision that we'll for now only look at one type of chunk encoding, and we've realized that looking back in hindsight, there's probably some potential for making better decisions, potentially at runtime, or at compaction time for example, to optimize some of this data in a better way.

**Björn Rabenstein:** Yeah, \[unintelligible 00:46:15.15\] in Prometheus 1 was essentially hacked together, and when it was working well enough, we would do all the other stuff. Then the Prometheus 2 storage engine was really very carefully designed, but also kind of reworded into just using essentially the classical Gorilla encoding that \[unintelligible 00:46:33.16\] had a few crazy hacks that we never really evaluated, but now we can compare... \[unintelligible 00:46:43.28\] is one of those remote storage solutions, but they also use the exact same storage format, and they support everything, all the versions back into the past, and they can directly compare how things look like. And apparently, if you just look at the encoding, the Prometheus 1 encoding is 30% better, or something. So we see we can actually (what's the word...?) recover some of the archaeological evidence from that, and perhaps improve this.

**Ben Kochie:** We can forward-port some of the optimizations... \[laughter\] Yeah, the Prometheus 2 format was very much designed to reduce the CPU needs for ingestion, and that completely succeeded, to the point where we actually have spare CPU. When you look at the CPU to memory ratios of a common server, the Prometheus server will use all of the memory, but only a quarter of the available CPU in the typical ratios you get on servers. So we could spend some more CPU to improve the compression and get us back some of that memory... Because every time we improve our compression, it not only improves the disk storage space, it improves the memory storage. Because we keep the same data in memory as we do on disk.

**Gerhard Lazu:** \[48:05\] I'm sure that many users will be excited about this. I'm very excited to hear that, and I'm looking forward to what will come out of this. As we are approaching the end of our interview, any other things worth mentioning, or one thing which is really worth mentioning?

**Björn Rabenstein:** There would be no story about the future complete without my favorite topic in Prometheus, and that's histograms. I'm probably known as Mr. Histogram, or something.

Histograms in Prometheus is an extremely powerful approach, but it's kind of half-baked. We introduced them in 2015. A histogram is like a bucketed counter, broadly spoken.

**Ben Kochie:** Yeah, from an SRE perspective, histograms are extremely important in getting more detail out of the latency in our applications. Several other monitoring platforms talk very loudly about histograms being important, because we need detailed data on requests coming into the system, and an average is not good enough. Summaries, pre-computed quantiles are also not good enough, because they usually don't give us the granularity, and also they can't be compared across instances. So if I've got a dozen pods, I need to have super-detailed histogram data in order to do a proper analysis of my request... Because it's okay to have 10 milliseconds of latency on a request, but it's not okay when 5% of those are so slow, they're useless to the user. The typical is 10 milliseconds, but if 5% of them are 10 seconds - I can't have that from my service SLA perspective. So I need more and more and more histograms, but right now they're just super-expensive.

**Björn Rabenstein:** And that's because Prometheus, in the same -- like, when we talked about the metadata, where we said Prometheus throws everything away and everything is just like floating-point numbers with timestamps essentially, that's the same for histograms, where the other part of the information is that this is all buckets belonging to the same histogram; now, every bucketed counter becomes its own time series in the Prometheus server, so every bucket you add comes with the full cost of a new time series with no potential of whatever... Putting this together in some way, or compressing this in some way. And there's decades of research how to represent distributions in an efficient way... And now that I have more time to work on Prometheus, and my boss also likes this topic a lot - perfect opportunity to really go into this.

I had a little talk at PromCon, where I was giving my current state of research, and now at this conference... So many people and so many companies and organizations are interested in that. It was really exciting. The idea is to get something where we could have way more buckets, or we even have some kind of digest approach to that, that plays well with the Prometheus data model. So it's a true challenge, and it will be fairly invasive, because it also changes the Prometheus storage engine, how the evaluation model works... Because suddenly you have something that is not just a float, it's a representation of a distribution. But the idea is that we will have very detailed - and not very expensive - histograms in the not-too-far future, and I'm very hyped about this.

**Gerhard Lazu:** \[52:03\] That is so cool, that is so cool. You mentioned something there which reminded me of a discussion which you had earlier, and that was around being more open and getting the community more involved in what is happening in Prometheus. You (or maybe Fred) mentioned about the monthly community calls, the virtual calls... Who would like to cover that?

**Ben Kochie:** Sure. Yeah, we're trying to be more open with the wider developer community and our wider user base, and a lot of people have found that the Prometheus developer team is a little closed off and a little opaque... So we're now doing monthly public meetings and sharing what the developer team is up to, and taking more input from the community in order to be a better open source project.

**Gerhard Lazu:** So how can users join those monthly meetings?

**Ben Kochie:** Yes, on our website we have an announcement area for those community meetings.

**Frederic Branczyk:** Yes. They are alternating, so that they are compatible with Asian timezones and American timezones, every other month... That hopefully allows worldwide participation.

**Björn Rabenstein:** Do we announce them on the mailing list, or on Twitter?

**Frederic Branczyk:** We do announce them regularly on Twitter, and the schedule is open. People can come and just ask their questions. We're super-happy to answer them to the best of our abilities.

**Gerhard Lazu:** Thank you. That's a great way of ending this, in that there's no ending; there's other ways that the people can join this, and not just like -- because this is one-sided, people are listening to us... But that's a way of them participating in Prometheus, getting to know more about Prometheus. When is the next monthly meeting, do you know?

**Ben Kochie:** I think we've just had one, so it'll be next month.

**Gerhard Lazu:** Okay, so December.

**Ben Kochie:** Yeah.

**Gerhard Lazu:** The 31st of December, I'm sure. \[laughter\]

**Frederic Branczyk:** No, I believe it's every first Wednesday of the month.

**Ben Kochie:** And then the opposite timezone is the third Wednesday of every month.

**Björn Rabenstein:** Whatever. I think it should be looked up on our website. We should provide a link in the show notes.

**Gerhard Lazu:** Right. We will. Thank you very much Ben, thank you very much Fred, and thank you very much Björn. It was a great pleasure having you, and I'm so excited about what you will do next.

**Ben Kochie:** Thank you.

**Björn Rabenstein:** Thanks.

**Frederic Branczyk:** Thank you.

**Break:** \[54:47\]

**Gerhard Lazu:** It's the 21st of November, 2019. It's the last day of KubeCon North America. It's been a sunny day, it's been a great day so far. We had a great number of hosts and guests on this show -- no, there was only one; it was just me. \[laughter\] We had a great number of guests on this show. Just earlier I was talking to Björn from Grafana, Fred from Red Hat, and also Ben from GitLab, and they were all on the Prometheus team, very passionate, a lot of interesting things that they've shared with us... Now we have Tom from Grafana, and we have Ed, also from Grafana.

**Tom Wilkie:** And I'm also one of the Prometheus maintainers.

**Gerhard Lazu:** Oh, thank you. I mean, I have seen your PRs here and there... But yes, another Prometheus maintainer. So the reason why I was very excited to speak with you was I know that you have a very passionate view on observability, on what it means for a system to be observable, and one of the key components in this new landscape, which is Kubernetes, all these stacks, the layers are getting deeper and deeper... So understanding what is happening in this very complex landscape, you need observability tooling, which is mature, which is complete... So tell me a bit about that.

**Tom Wilkie:** Yeah, I mean... Thank you for having us. Observability is one of these buzzwords that has been going around a lot in the past few years. I've been asked a lot in the past few days what is observability, how does Grafana fit into the observability landscape... I think observability was previously kind of defined around these three pillars - metrics, logs and traces. And this past year I think it was trendy to bash that as an analogy. Some of it was rightly so, some of it maybe less so. I still sometimes think about it like that, but I try to avoid thinking about the particular data type, the particular way you're storing it, the way you've collecting that data, and I try and think more about how people are using that data.

\[01:00:00.00\] For me, observability is about any kind of tooling infrastructure, UIs, anything you build that helps you understand the behavior of your applications and its infrastructure.

**Gerhard Lazu:** I think it's something really important to emphasize, because at the end of the day, it's about the stories that we tell. We use data, some form of data, to tell a certain story. And whatever data is relevant for that story, use it. It doesn't matter what you call it, as long as the focus is "What are you trying to convey? What are you trying for someone to understand, and what point are you trying to make?" It doesn't matter what you call it, as long as you don't forget what this is all about.

**Tom Wilkie:** I'll give you an example then that I think is really relevant, at least to Ed and I. We were in Munich two weeks ago for the Prometheus conference. Great event, 200 or so people, coming to just focus on Prometheus, and towards the end of the first day, Ed, your pager went off. Our hosted service was having an issue, and it turns out it took two hours to diagnose it. We were using all of our tooling to understand what went wrong. I think at the end of it -- well, we still don't actually know the root cause yet; once we figure it out, we'll put it on the blog. But the point of the story is more that a few days later, after we'd got back from PromCon, after we all sat -- well, we didn't sit together; after we had a video call with 8 or 9 of the team members on, and we were fishing through all of our metrics, all of our logs and all of our traces to try and figure out what really happened, to try and get to that root cause - that was for me such a valuable experience, dogfooding our own products, dogfooding our own projects that we work on, and using them to try and understand what went wrong, and try and build that picture.

You know, we've got graphs, we've got log segments, we've got everything we can possibly gather together, to try and understand why a node failure, or an Etcd master election, and then a network partition, and everything seemed to go wrong at once, but really what was the root cause. And that was exciting.

We also had David and members of the Grafana team join in to see a live example of how people were using the tools they're building, and how they could improve the UX of those tools. I think he ended up recording it and showing it to more people on the team, to go like "Look, he wanted to click this, but it wasn't quite in the right place, or it wasn't quite the right thing."

**Gerhard Lazu:** That's a great story. One thing which I really like about this story is how relevant different elements of observability - for a lack of a better word - how important certain elements are. When you're trying to dig for root cause analysis, logs are very, very important. So metrics are getting a lot of attention, traces are getting a lot of attention, but I'm not seeing the same thing for logs. So other than Loki, which is an open source project, is there anything else out there that I'm not aware of?

**Tom Wilkie:** For...

**Gerhard Lazu:** For logs specifically, that integrate with Prometheus, that integrate with Zipkin or Jaeger or whatever else you may have, that will give you this root cause analysis tooling.

**Tom Wilkie:** Yeah. I think an interesting one here is when I joined Grafana Labs 18 months ago, they were already big users of Zipkin, but not in a traditional use case. They weren't using it to visualize requests spanning multiple microservices, they were actually using Zipkin mostly for request-centric logging. Because Zipkin has these kinds of basic logging features. I said Zipkin there, didn't I? I mean Jaeger, didn't I? Yeah. I meant Jaeger, sorry. They're big users of Jaeger.

**Gerhard Lazu:** Okay, yeah.

**Tom Wilkie:** It's fine, we can edit that out. But yeah, so... They were big users, but not for distributed tracing. We came along and we wanted to use it for the visualization of the request flows for all the microservices, but... But yeah, I'd never really seen Jaeger used primarily for something other than visualizing request flows. So I guess you could think about the tracing tools as like a more request-oriented way of logging.

\[01:04:03.23\] I mean, obviously, there are a lot of logging vendors out there, and a lot of them were represented at KubeCon. I think the most popular one for Kubernetes has always been Elastic. The Elastic Stack, ELK, that's what most people use, and it's a great tool. One of the things that always impressed me about Elastic is you can pretty much do anything with it. I've seen people build their whole BI and analytics stack on Elastic; I've seen people use it for developer-centric logging, people use it for audit logging, people use it for security analysis... People are using it for actually searching web pages as well, which kind of is fun, because that's what it was originally used for.

With Loki -- I know you said "apart from Loki", but Loki is not like Elastic in that sense. We are just focused on the developer-centric logging flow. We just wanna use basically what you would see in kubectl logs; we wanna give it a better user interface, so you can point and click and see it in Grafana. And honestly -- I mean, we have touched on dogfooding already, and I think it's one of our superpowers at Grafana Labs. We build the products we wanna use as developers. And really, the reason I started the Loki project was because you can't kubectl logs a pod that's gone away, and one of the common failure modes pods would die/disappear/get rescheduled etc, and I wanted to know what was going on in that pod before that happened. That's why we built Loki, and that's why we wanna kubectl logs, but with a bit more attention.

Here's an interesting one... Kubectl - KubeCuttle, KubeCTL, what do we say?

**Ed Welch:** KubeControl?

**Gerhard Lazu:** There's so many ways now. Kubectl, from my perspective.

**Tom Wilkie:** Kubectl, not KubeCuttle?

**Gerhard Lazu:** No...

**Tom Wilkie:** Wasn't that an unofficial logo, a cuttlefish?

**Gerhard Lazu:** Yes, there was. There was an unofficial logo in a couple of places, yet the cuttlefish gets mentioned...

**Tom Wilkie:** I like the cuttlefish one.

**Gerhard Lazu:** I mean, yeah, ctl... Sysctl? Maybe that's what--

**Tom Wilkie:** I don't say sysctl.

**Gerhard Lazu:** Sysctl. But did you use to say sysctl before KubeCuttle?

**Tom Wilkie:** No, I mean... Maybe not. And it's definitely ioctl and not IOctl, so...

**Gerhard Lazu:** Okay... \[laughter\] Earlier, Ben was mentioning about all the different building blocks that exist in the observability landscape in the CNCF. And I can see Loki as one of those building blocks.

The one thing which I really like about Grafana is that it doesn't limit you what data sources you can use. So if you want to use ELK, you can do that. If you wanna use Stackdriver, you can do that; which is logging from a vendor. Perfectly fine, no problems. And if you wanna use Prometheus - a very popular project, a graduated project, the second graduated project in the CNCF, you can use that as well. And it's a combination of all these tools, and many others. InfluxDB...

**Tom Wilkie:** There are 60 different databases in Grafana.

**Gerhard Lazu:** There you go. I don't even know them all.

**Tom Wilkie:** I couldn't name them all...

**Gerhard Lazu:** You can combine them in innovative ways, and you can almost do the right thing, the right thing being relative and being relevant for you. So what is the right thing for you? And if you wanna use Loki, so be it; if you wanna use Splunk, so be it.

**Tom Wilkie:** The thing I think is even more cool is it's not just about having these data sources and having all these data into dashboards and the Explore mode, but what we're working on is, you know, with Loki we've built this experience where because we have this consistent metadata between the metrics and the logs, we allow you to switch between them automatically. So given any Prometheus graph, any Prometheus query, we can automatically show you relevant logs for it.

Now, that was a very Loki-specific, that was a very Loki-specific experience. We've been working really hard to try and bring that to other data sources, so we're now hopefully -- as long as you curate your labels correctly, you're able to achieve that kind of experience between Graphite and Elastic.

\[01:07:56.18\] This is something I didn't really understand until I joined Grafana Labs - the team is so committed to this big tent philosophy; enabling these kinds of workflows and enabling other systems... And I really think the Grafana project is the only thing out there that really allows you to combine and mix and match, and really is so more additive to the ecosystem than other projects that are like "No, you can only use this data source. You can only talk to this database."

**Gerhard Lazu:** A bridge to all sorts of things.

**Tom Wilkie:** \[unintelligible 01:08:27.01\]

**Gerhard Lazu:** Right. I like that analogy very much. So we have Ed here... I hear that he's quite involved with Loki, and when you said "we", Tom, I'm sure you meant the royal we, because it's mostly Ed, right? Let's be honest here... \[laughter\] Loki is mostly Ed. So tell us, Ed, about Loki - why do you like it, what do you like about it, where is it going...?

**Ed Welch:** Yeah. I can still remember probably about ten months ago when I was interviewing with Tom, and we were talking about Loki... It was new to me at the time, and the first question I asked was "Isn't that already a solved problem? Don't we have solutions for logging already?" And then as he explained, I would almost call it a simplification of how Loki's store is compared to other systems. I'm like, "Oh, that immediately scratches an itch that I've had." I've been a developer my whole life, and the two things that I do most with logs is I deploy software and \[unintelligible 01:09:21.17\] and I look for errors. And then I'm running the software and it's broken, and I've gotta go find where it's broken.

So what Loki does really well is we only index the metadata, the label data that is part of your logs, and not the full text of the logs. So from an operating and overhead it's much leaner, I guess. And as long as you're looking for data and you know that time span, and you know that relative metadata, and the server it was on, the application, you're there; you're looking at your logs. And the tailing aspect is included as well with Grafana. So I'm like "Wow, that's what I wanted."

The big advantage from an operating perspective with Loki now is that the index scales according to the size of your metadata and not your log content. So we're almost a couple orders of magnitude smaller on our index than we are in our store log data... And then we can take advantage of object stores and compression to store data cheaply. So it's a really nice optimization on log content when you're a developer/operator and you really wanna just "I wanna get to my logs right now. I wanna look at this application's logs in last week", or regularly... Like, "Let's go look at what are the journal logs for this node; what is going on here? Can we add a regex filter on there for TCP: out of memory?" That's a lot of those.

Recently, we've been adding support for metric-style queries against your logs. To me, this was like the grep -v -v -v, and then piping into word count. I wanna know how often is this happening. But it gets better, because I can see now in time how often it happens, and it's like TCP: out of memory - that's probably wrong, right? That's probably a problem.

It's been really exciting, and I feel like that's resonating with a lot of people we talk to here as well, that are like "This is what I want for my logs." There's way more you can do with your logs, absolutely, and some of these other projects are much better suited for the different kinds of queries you might do, where you need a full index. But in a lot of cases, the Loki model is really perfect for that.

**Gerhard Lazu:** I really like that, how you take a really simple, you start as simple as you possibly can, and you start adding more and more functionality, again, as simply as you can. When do you stop? When do you know when it's enough?

**Ed Welch:** That's a great question.

**Tom Wilkie:** \[01:11:48.21\] Yeah. I think in the '90s and 2000's people built technologies with general building blocks. And I look at Elastic or Lucene probably as a great building block. And I look at a lot of the projects that came out of that as being generally useful in a lot of places... But I don't think big data ever quite hit its promise. One of the things I've always tried to do with everything I've done is be very, very focused on a particular story, a particular end user, a particular use case.

With Loki, that use case was the \[unintelligible 01:12:28.19\] I'm still on call with Grafana Labs. I don't know how Ed feels about that, but... \[laughs\]I still occasionally get paged at 3 AM, and I really wanted tooling that would help me very quickly, in a sleep-deprived state get to the problem as quickly as possible. And that's the focus has always been on with Loki.

So you as "Where do we stop?", well I don't think we try and make Loki do tracing, we don't try and make Loki do BI, we don't try and make Loki do use cases that are beyond that sleep-deprived, 3 AM instant response drill. I think we stay with these tightly focused stories, and that's how we build great projects. I learned that Prometheus (it still does) is incredibly focused, and incredibly resistant to \[unintelligible 01:13:27.20\] and scope creep.

So I learned a lot through the Prometheus project, and I'm really keen to apply that to this project and maybe future projects. I'll caveat it with one thing... What we did with Loki and the way we built Loki so quickly is we actually took all of the distributed systems, algorithms and data structures from another one of my projects, from Cortex. So Loki is really just like a thin -- well, maybe not so thin anymore, but it started off as a thin veneer wrapped around the same distributed hash tables, the same inverted indexes and chunk stores that we used in Cortex... And that's how we got the first project out so quickly.

So I'm all for code reuse, I'm all for reusing data structures and sharing, and this kind of stuff, but I just think the end solution that you build it into should be really, really focused.

**Gerhard Lazu:** Cortex is really cool, and I would like us to go into that soon... But before that, I would like to add an extra insight for those that maybe don't know you very well; you're the VP of product for Grafana Labs... So why are you being paged? Because you like it? Because you want to be close to the tooling? Because you want to see what people will be getting? I think that's possibly the most committed VP of product that I've known, and that's the right way of approaching it, so that you have a first-hand experience yourself of all those products.

**Tom Wilkie:** We talk at Grafana Labs about authenticity. We try and not spin the stories we're telling. We try and just tell real stories, authentic stories, and we try and talk about -- I remember having a conversation with the CEO, with Raj, about what does it mean to build these empowered, distributed teams of really awesome software engineers? And I think one of the ways we encapsulate it is like - you see it a lot on people's Twitter bios, you see "Opinions here are my own." I never want any of my employees to have to caveat their opinions. I trust them all, I want them to feel empowered, to speak on behalf of the projects and the company that they represent, and I want them to speak authentically. A part of that - if you hear me standing up, talking and telling a story about why I built Cortex, why we started Loki, why I use Prometheus, why I use Grafana; these are real stories, from my actual experience. And I do miss not being able to write as much code as I used to. On the fly over to San Diego from London I actually did a PR for Prometheus... Because I'm a software engineer at heart.

\[01:16:14.22\] I do miss it sometimes, but also I see the work that Ed and the rest of the team were able to do, and I just think as long as I can build an environment for people to be that successful, then I'm happy.

**Gerhard Lazu:** I think that's a great philosophy to have, and it's really powerful. We can see how important it is to approach things like that, to really believe in that, and to operate under that mindset.

**Tom Wilkie:** Yeah, and I try to.

**Gerhard Lazu:** So Cortex - very interesting; another interesting Grafana Labs product... Or project? How would you call it?

**Tom Wilkie:** Well, interestingly, Cortex isn't a Grafana Labs project. I started the Cortex project over three years ago, before I worked for Grafana Labs. About a year ago we put it into the CNCF... So it's actually a CNCF sandbox project, used by a lot of companies. Every time I come to KubeCon I meet new companies who are like "Oh hey, we use Cortex." I'm like "Wow, I had no idea." We really just started it for our own needs to begin with. Grafana Labs does use Cortex to power our hosted Prometheus product in Grafana Cloud, so that's where our vested interest is. We are doing this because it's the basis of one of our big products. But also, one of the things -- I like Cortex; in a previous life I worked on Apache Cassandra, so you'll see heavy influence in Cortex, in the algorithms and in the data structures, from Cassandra. We do a very similar virtual node scheme, we have a very similar distribution, and consistency, and replication, and these kinds of things to Cassandra.

I liked Cortex mainly because I was learning this new language, it was with Go, and I thought "This should be a great language to do lots of these concurrent, highly distributed systems in." So I thought, well, what are the algorithms that I hope will be really easy to implement in Go, that would be challenging to implement in other languages? So that was one of my motivations for Cortex.

Also, at the time I was building a different product. It was still in the observability space; I was working on something called Scope. I spent a long time building this, and one of the tools I used whilst building Scope was Prometheus. And I very quickly realized that Prometheus was where it was at, and it was incredibly useful. So yeah, that's kind of how I got into the Prometheus space. Then I thought "Well, what the world really needs is a horizontally-scalable, clustered version of Prometheus", mostly because I thought it'd just be cool to build.

So we started it, we built it, and we kind of learned what the actual use cases it applied to were. We learned as we went. And now I'd say -- I originally thought long-term storage would be the biggest value of something like Cortex, but now I think really it's the... You know, we talked about how the Prometheus community and the Prometheus team - we like to keep Prometheus well-defined and tight and small and easy to operate, and this excludes a lot of use cases. This particularly excludes a lot of use cases that involve monitoring over a global fleet of servers. So really, I think the Cortex project's main value proposition is about monitoring lots of servers deployed around in a global fleet. Maybe you've got tens of clusters on multiple different continents, and you wanna bring all of those metrics into a single place, so you can do these queries.

\[01:19:48.11\] Then we joined Grafana Labs, and they had much larger customers than I'd ever worked with before, and we started to experience query performance issues with Cortex. We hadn't really at the time had any very large users on it, and as we started to onboard very large users, they started to complain about the query performance.

So I guess the past 18 months of the Cortex project has been almost 100% focused on making it the fastest possible Prometheus query evaluator out there. And that was the talk I gave at KubeCon a couple days ago; it was about how we parallelize and cache and emit parallel partial sums for us to reaggregate... And we do all of these different techniques to really accelerate our PromQL expressions.

Then the really interesting thing happened a few months ago... Because Thanos -- we can't not mention Thanos. Thanos started off a year after Cortex, started by Bartek, who also lives in London. He's a good friend of mine. And it started to solve exactly the same problems that Cortex was solving, but effectively did it in the completely opposite way. Almost every step along the way they chose the opposite. Thanos has become a lot more popular than Cortex for sure, and they did a really good job of making it a really easy to adopt system, great documentation, and they really invested in the community. So I learned a lot... You know, Thanos is more popular than Cortex, but I think one of the things we've been able to do recently is take a lot of stuff we'd built and deployed in Cortex to accelerate query performance, and apply it to Thanos. And that's kind of exciting, because now we can bring these really cool techniques, but a much larger community.

**Gerhard Lazu:** I know this was asked before, but the one thing which I kept thinking during your talk is when will you announce that Thanos and Cortex will merge and will become one? And I think you made a great job about it, like "They have. They will merge." I know that is not happening, or at least not right now; not that we know of. But the inspiration was from Flux and Argo, how two very popular projects in the CI/CD space have merged. I think that's a great combination of effort, getting the best of both worlds.

I'm sure many are wondering "Will that ever happen?" It would be cool, but I'm sure it also has its own challenges for that to be the case, for Thanos and Cortex to merge... So we'll watch this space, for sure.

**Tom Wilkie:** I don't wanna see merging as like an end goal. I think the end goal should be collaboration. One of the things I like about the Prometheus community is they have been so open to adding maintainers because of their contributions effectively to other projects. So the main reason I'm a Prometheus maintainer is because I started Cortex. And similarly, Bartek has been added to the Prometheus maintainer team recently... So there's a huge overlap between the Thanos maintainers, the Prometheus maintainers and the Cortex maintainers. And really, I don't think the end goal should be convergence of these two projects. I think it should be an increased collaboration between them, and that's what we're working towards. I really like working with the Thanos guys, I really like working with the Prometheus guys, and if there are any ways in which we can share and collaborate more, share cool examples, try different things in different projects - that sounds awesome to me.

The deployment models for Thanos and Cortex are completely different. Opposite ends of the spectrum. So maybe they'll never merge, because the deployments are so different. Maybe they'll stay separate. But I think the technologies and the libraries they share -- I mean, both Thanos and Cortex use the same PromQL query engine that Prometheus uses. I mean, it is the Prometheus query engine. Both Cortex and Thanos use the same compression format for their time series data. We share way more stuff in common than our differences, really.

And I look at some of the merges of communities, over the past year, and I think they've been announced before really; the communities have had a chance to gel, and really demonstrate the benefits of that merger... And so I definitely kind of-- I wanna demonstrate the benefits of working together first, and if it turns out... You know, we are already working together and we are having some great success, and if that continues, and if we find even more ways to work together, then maybe a merger makes sense. But I'm more interested in the shared code, the collaboration, and the shared solutions.

**Gerhard Lazu:** \[01:24:07.14\] That's a great take, I really like that. It makes a lot of sense... As if you had thought about this long and hard, I would say. You strike me as the person who always has a couple of projects, side projects in his backpocket. Anything that you would like to share with us? Anything interesting that you're working on, hacking on? And maybe Ed...

**Tom Wilkie:** What do you reckon... Tanka? Tanka is pretty cool, we should mention Tanka. So this is not really my project... There's a very young chap called Tom Brach in Germany, who approached us actually at KubeCon. He was 17 at the time... He came up to our booth, spoke to Gotham and I and said "I really like what you're doing with Jsonnet. I really like the whole Mixins thing, I really like Cortex, I really like Loki. Do you have a summer internship position?" And I'm like, "A 17-year-old kid is talking to me about Jsonnet." Jsonnet is one of the nichest aspects of this community I'm aware of. So \[unintelligible 01:25:03.03\] and he did end up doing a summer internship. About the same time Heptio was sold to VMWare, and VMWare discountinued the Ksonnet project, we were big users. I really liked what they were doing with Ksonnet, I really like how it enabled this kind of reusable and composable configuration as code... And when I joined Grafana Labs, we rolled out Ksonnet everywhere.

So to hear it was discontinued was a bit of a problem for us. We continued to use it, we continued to invest in it, and when Tom Brach came along, we actually reimplemented it in this project called Tanka, with a whole bunch of other really cool improvements that he's done. It's now much faster, it now uses -- it just forks out to Kubectl, so we don't have a lot of compatibility challenges. It's got a much more sophisticated diffing mechanism... And this 17-year-old kid has just massively improved the productivity of the engineers in Grafana Labs by really improving the toolchain for our Kubernetes \[unintelligible 01:25:59.09\] management.

So if anyone here is using Jsonnet, using Ksonnet, and wondering what the future holds, I'd encourage you to check out Tanka. It's a really, really cool project.

**Gerhard Lazu:** This is something which keeps coming over and over again - the community, the openness, the barrier of entry which is so low, and how everybody is there to help you. Whatever age you have, whatever inclination you have, whatever you wanna do, you can do, and everybody is there to guide you, help you, and accept whichever contribution you wanna bring. This is something so valuable, which over the last three days I keep seeing over and over again; I'm gonna say it's one of the core values of this new community and this new ecosystem, which has grown so much. 12,000 people. Did you manage to speak to all of them?

**Tom Wilkie:** Probably about a twelfth of them. It definitely feels that way... I think I would definitely agree, the superpower for the Kubernetes and for the cloud-native community as a whole is this openness, is this acceptance. I really like what the CNCF has done by having multiple competing projects in their incubation. Thanos and Cortex are both in there, and I really look forward to other projects coming in and doing the same thing. I really like how the CNCF are not kingmakers in this respect. I think that openness is great.

And then the whole -- you know, no matter what you think about Kubernetes and its complexity, and its adoption, I think the real benefit of Kubernetes is the openness. And if you really want to, and have the time and the effort to make a contribution and make a change - definitely; it will be accepted, and you'll be embraced with open arms, and eventually you will be put in charge of some huge component, and you're like "Whaat?!" So yeah, I'm a big fan.

**Gerhard Lazu:** And especially if you're VP of product, right? PR to Prometheus... \[laughs\]

**Tom Wilkie:** \[01:27:58.19\] Yeah, I mean, I think I've had some PRs into Kubernetes. I'm not sure. But I don't get to do as much coding as I used to. I do miss it. I still get to play, I still do a fair amount of config management work, because I still help with the deployments, and I'm still building dashboards, and occasionally doing PRs to Prometheus, and... I'm still doing a fair amount of code review. Not as much as I used to, but I spend a lot of my time doing all sorts of things now. Doing marketing work, that's an interesting one.

**Gerhard Lazu:** So as we're approaching the end of this interview, and also we're approaching the end of KubeCon, which is an amazing, amazing event... Anything specific that you were impressed by, or you wouldn't expect to see, and you were very happy to see? Any key takeaways?

**Ed Welch:** My story, as we were talking a little bit before - this is my first KubeCon, and I'm new to the open source community; I've worked a lot of enterprise jobs prior to this, and... It is really exciting, I have to say. The people that come up to the booth and talk about like "Hey, we used Grafana. We love it", being part of that, being part of a project that -- I met someone that was a contributor to Loki, and they were really excited. It's a really cool feeling, to have people see these tools and actually use them, come and talk to you about it... I really enjoy the amount of people interested, the talks they were giving, that are deep-dives into these projects, that people are interested in seeing... It's such a different experience than the software I've done in the past.

I think it's really neat as a developer even if you're just using these tools. Because of the tools and their proliferation and their openness, it's a skillset you can take anywhere with you. These are real skills, and I think companies are starting to see the real value in having toolchains that people know by name. You hear Prometheus more and more and more, and that's really valuable. And to have that be open source technology is really amazing.

**Gerhard Lazu:** Thank you Ed, thank you Tom. It's been a pleasure having you. I look forward to the next one. Cheers!

**Tom Wilkie:** Thank you for having us!

**Break:** \[01:30:15.23\]

**Gerhard Lazu:** I would like to say that we've kept the best for last, but that's something for you to appreciate. We are definitely ending the KubeCon on a high. Most people are already breaking off, and some have already flown back home. We're still here, so in this way we are officially ending KubeCon with this last interview. I have around me three gentlemen. Left to right, we have Jared, we have Marques, and we have Dan, all from Upbound. You may recognize them by Crossplane - that's a very strong name - and also Rook. So they are the ones (some of them) that are behind these great projects.

I'll let them maybe speak a little bit about their involvement, and also tell us what they're passionate about, what their takeaways are from the conference... Who would like to start?

**Jared Watts:** \[01:32:07.04\] I'd be happy to start. This is Jared, and I have been a founder and a maintainer on both the Rook project and the Crossplane project. So I've been living in the open source, cloud-native ecosystem for multiple years now... And one of the biggest things for me that I see consistently is that each KubeCon gets that much more crazy, that much more lively, and the amount of new people that are coming into the ecosystem is always a fairly surprising amount. I think anytime that you go to a talk and people ask "Is this your first KubeCon?", you see a large majority of the room raising their hands, and to me that says that this ecosystem is on to something exciting, and it's attracting more people and it's gaining more adoption, and that's something that consistently excites me a lot. I see it all the time, at every KubeCon.

**Gerhard Lazu:** Yeah, Dan was calling those the second-graders. There were a lot of second-graders at this KubeCon, and some fourth-graders. I really enjoyed that, it was a great analogy.

**Marques Johansson:** Yeah, the analogy where he was showing how his son was playing Minecraft and hiding the screen, because that was the way to survive the night... And yes, everyone at the convention, if it was their first year, they were considered second-graders, and everyone else was only fourth-graders, because the project itself is only five years old, so we're all new in learning this together. Yeah, it's a great analogy.

**Dan Mangum:** Yeah, definitely. I think personally that was a really cool analogy for me, because I actually graduated from college recently, and I'm fairly young in the community... But a lot of people have been extremely welcoming and kind to me. Welcoming into not just the Crossplane and Rook ecosystems, but also in the greater Kubernetes ecosystem. Welcoming onto the actual release team for 1.17, and being part of that was super-cool, and there's just a lot of people who have been around from the inception of Kubernetes, who are saying "You're a young person. Come in here, and you're welcome. We value your thoughts and opinions and your efforts." So it's definitely a cool place to be at KubeCon, and being surrounded by really talented people like that.

**Jared Watts:** And actually, I think that's something that speaks a lot to not only the community and the ecosystem here amongst people that are part of this cloud-native movement, but I think that's just open source in general; I've seen a massive change over the past five years, ten years, and even earlier than that, where you've got these communities that are able to form based on these more socialized sites, like GitHub and GitLab, where you're able to get these communities built and be able to be very collaborative, in a very open environment, that not only is getting these projects more out there in the hands of other people, but it's attracting people that bring a lot of enthusiasm, that feel welcome because of the way that the community is treating people. But it's getting more people involved in open source than have ever been involved before. It's not something just for grey beards anymore; open source is for everybody now, and it's pretty awesome.

**Gerhard Lazu:** This is something that was mentioned a couple of times, and even I mentioned it a couple of times in these interviews... I'm still surprised by how open and welcoming everybody is. Even though it's been three packed days, even today everybody was still happy, was still smiling, and really happy to answer any questions... And even though they were really tired, you could see some people -- you know, they had three very hard days, and who knows how many months before that... Brian was just saying, a lot of the preparations started six months ago. So some have been at this for a really long time. And yet - open, welcoming, warm. It was great. My first KubeCon - I loved it.

**Jared Watts:** \[01:36:04.07\] What was your first KubeCon?

**Gerhard Lazu:** This.

**Jared Watts:** Oh, this was your first KubeCon.

**Gerhard Lazu:** Yeah, this was my first KubeCon.

**Jared Watts:** Oh, so you're experiencing that welcoming attitude first-hand.

**Gerhard Lazu:** Yes, yes.

**Jared Watts:** I love that.

**Gerhard Lazu:** It was amazing. Natasha and Priyanka, they were talking about the process, and especially Natasha, since she has been at CNCF a couple of years before GitLab... She was saying about the processes which they have in place, all the documentation, how that is such an important factor in this welcoming community.

**Dan Mangum:** I think that's really been recognized as a key thing in the success of Kubernetes and the open source ecosystem in general. I think that's one of the drivers for it. It's not only the right thing to do to welcome people in and make everyone feel part of the community, it's also in the best interest of the project, and I'm sure Jared will probably talk about this shortly, but I think that's been reflected in some of the work we're doing as well. We're reliant on a strong community to be successful in what we're trying to go after, so... Yeah, it's cool to see that it's not only the right thing to do to treat people well, but it's also beneficial for achieving whatever goal you're searching for.

**Marques Johansson:** And speaking about the goals - I think that's another thing that makes the open source projects work. It has people coming to the booth, being happy to talk about the project... Maybe they don't understand it at first, but as you start talking to them, they realize and you realize that they have the same concerns and they need the same sort of outcomes that you do... And when there's a fit between your tool and what their needs are...

The ecosystem of open source is many solutions to the same problem, and each one tackles it a different way. But it's great when you start explaining what your product does and they latch onto that, and they lead the conversation, because they know how to make what you've offered so far more useful to fit their circumstances. It's good to have those conversations. I think it keeps that positive attitude. If everybody walked up and they're like "What does your product do? I don't get it." \[unintelligible 01:38:10.23\]

**Jared Watts:** And along with that welcoming nature there - this is a story I really like to share with people, because it highlights how things can go in the completely opposite direction and cause a very toxic environment. I will certainly not mention the project that this happened on, and it's not in the cloud-native ecosystem at all, it's certainly not a CNCF project, because all those communities are super-welcoming and kind... But there was an open source project I got really excited about, because it was very aligned with some of my personal interests... And being a maintainer on other open source projects, I know how important it is to have a contributors' guide to be able to welcome new people into the community, but also have pragmatic, or practical steps of "This is how you build the project, this is how you add unit tests, this is the criteria for opening a pull request and getting it accepted."

So I opened an issue on a particular open source project, and within five minutes or so one of the maintainers on that project replied back to me for my request to create a contributor guide so that I could start helping them out... He told me that it was the dumbest issue he's ever seen. He used some explicit language and said that he's tired of idiots opening issues in his repo. And I cannot imagine that they ever got another contributor to join that project ever again, because of that completely toxic behavior.

So there's a spectrum of being welcoming, kind, supportive, and then there's that type of behavior, which I don't think anyone else has ever had an experience like that. It's definitely an anomaly, an outlier, but it is the worst way to run a community, ever.

**Gerhard Lazu:** Okay, well... \[unintelligible 01:39:45.25\] I'm really glad -- that's like a really bad example, and... Because it's really easy to forget, but these things do happen, even today. We don't realize, because we're so privileged to be in such a great community and to have so many genuinely nice people around us. We do forget that things like these do happen.

\[01:40:13.06\] So what I would say - everybody that had such an experience are more than welcome to join the CNCF community, because we will show them that that is not normal, or show them what normal is; we'll be more than happy to get as many people as want on board, because this is normal and this is good. And I think that speaks to the success of this approach.

I'm not sure how many people were at the last KubeCon, but this one's 12,000 people. I know the first one was only 4-5 years ago, with like 500 or 1,000. So how much this community has grown, and maybe this has something to do with it, I think.

**Marques Johansson:** And the success of one project can lead to the success of the other projects. Once you've modeled how to develop a great community and nurture the community with this sort of support to continue contributing, all the other projects are gonna be able to benefit from that.

**Gerhard Lazu:** I'm really glad that you mentioned that, Marcus, because I would like us to maybe start looking a little bit at Crossplane, and the one thing - which at least that's what Crossplane is to me, and you can give me your perspectives - is how it's the embodiment of leveling the playing field, being open, bridges everywhere, everybody is welcome to the party, no vendor lock-in... It's just the opposite of that. "We're open, we embrace everybody, we are open to anybody working with us, and this is what we think the future looks like." So it's all the bridges between all the vendors, all the \[unintelligible 01:41:55.01\] all the services... That's how I see it, but how do you see it, Dan?

**Dan Mangum:** Yeah, that's exactly right, and we pitch the project as the open multicloud control plane. And that's what it is. We're really trying to open up all of the different cloud provider managed services to anyone and everyone, and really reduce that barrier of switching between them... And it's built in such a way that it allows people to add their own extension points to that, so there's really no one who's not welcomed there.

You could start a cloud provider in your home lab, in your apartment, and you could add a stack for that with Crossplane, which I'm sure we'll get to later, and extend that to include that. What that does is it really allows people to pick the best solution for their problem. There's a variety of scales of cloud providers, and maybe you just provide a managed database service and it has a very specific use case... And in an enterprise setting, that can be really hard to adopt, because it takes a lot of effort and time to bring on new providers and integrate with them... But if you integrate in a consistent way, then you can always choose the best solution for your problem. So it not only helps the users, but also the companies and the groups of people who are providing open source projects that fit certain (maybe) niche needs - those are now a lot easier to use, and you can pick the best thing to fit whatever use case you have.

**Jared Watts:** Yeah, I think that's a good point, Dan. When you're trying to level the playing field or provide easy, attainable access to open source software or to proprietary software, whatever it may be, but getting access in a consistent way across a lot of different options, to a lot of different people, and needs, and scenarios - that's really part of opening the door there for everybody.

\[01:43:55.19\] So I think that our efforts here are being based on this foundation that Kubernetes itself has started. Because if you take a step back and you look at the design of Kubernetes and some of its goals that it wanted to accomplish and what it enabled, Kubernetes itself has done a fantastic job of providing this abstraction away from the underlying cloud provider or hardware or whatever it may be. It abstracts away the infrastructure in the data center, and allows your applications to run in a very agnostic way. So Kubernetes kind of started pioneering this trail here where your application doesn't have to worry about the environment it's running in. It can basically just express itself in a simple way and then run anywhere. That's a start, but then there's many ways to take that further.

**Gerhard Lazu:** We've heard Dan mention something about stacks... I'm looking at Marques, because I know that he's been closely involved with various stacks. Can you tell us, Marques, what stacks are and what stacks are currently available in Crossplane?

**Marques Johansson:** Sure. Stacks are a package of resources that Crossplane uses to extend the Kubernetes API with knowledge of cloud provider resources, or any sort of infrastructure resource. Additionally applications, but first focusing on the infrastructure resources. There are stacks currently for Google, Azure and AWS. And additional ones, Packet and Rook. All interesting topics...

So taking the example of Google, there's a cloud MySQL instance, and one can imagine in Kubernetes creating an instance of that resource, specifying in the spec of that resource all of the API parameters that you need to configure that resource in the cloud, and then within Kubernetes, using Kubernetes lifecycle management, you've created this resource that will be reconciled, creating a cloud provider resource, and the by-product of that is a secret that you can bind to your application, so that whatever application it is you need that needs MySQL, it has access to your MySQL.

The way that we've done this in Crossplane is we've abstracted that fact to (currently) five different abstractions - maybe there's six, I'm losing count - different abstractions. We've got one for MySQL, Redis, Postgres object storage, Kubernetes engines themselves. And if you're familiar with the concept of the CSI drivers, where there's persistent volume claims and their storage classes - in that setting you have a deployment with pods that have the intent to be bound to storage (box storage, whatever). And they make a request for, say, 20 gigs of storage attached. They don't know, they don't care how that storage is attached to them, to the pods, and somewhere else has been configured a storage class; this storage class dictates that storage will be provided through EBS, or through any other form of storage that the cloud provider is capable of providing. All the other settings, whether it's faster service or cheaper service, is defined in that storage class.

What Crossplane has done is take that concept and extend it to all of the other resources that you could want to use in your cluster, or for your applications - MySQL, Postgres, and so forth.

**Gerhard Lazu:** So MySQL, Postgres, and you mentioned Rook as well - these are still relatively low-level building blocks. Do you have higher-level building blocks for someone that for example wants a type of application, so that there's a bit more that's done for you out of the box, so you don't have these blocks to assemble yourself?

**Dan Mangum:** \[01:48:06.02\] Yeah, so one of the things that we're really focused on as a project is addressing it in layers; starting with the lowest level, and then building on top of that, and also allowing other people in the community to build on top of it. One of the great values of being standardized on the Kubernetes API is that we can integrate with a lot of different things. So as Marques was talking about, we have a lot of infrastructure resources that we talk about... And in some ways, those are abstracted, because they're managed services, which are a little simpler than running your own MySQL instance on bare metal, or something like that. But you can continue to build on top of that and package those together... And Marques alluded a little bit to a different kind of stack that we support as well, which are application stacks.

A common example that we talk about, just because everyone is usually familiar with it, is a WordPress instance. A WordPress blog - everyone's pretty much familiar with that. Usually, what it takes to do that is somewhere to run it, so maybe a Kubernetes cluster, and then some sort of deployments into that cluster - have the container running in a pod, or something like that - and then some sort of database (MySQL for WordPress) that you need to provision as well, for that to talk to, and store posts and comments and that sort of thing in.

So what you can do with Crossplane is bundle that up into another sort of custom resource, which is a Kubernetes concept which basically allows you to extend their control plane. All of these infrastructure resources we talked about are deployed through custom resource definitions, and then instances of those other custom resources... So you could extend that to have a WordPress custom resource definition that says "I need these maybe lower-level concepts (as you were alluding to) to be able to run this application", and someone can just deploy this WordPress instance resource and it will take care of deploying all those resources in an agnostic manner as well, meaning that it can be deployed on GCP, or AWS, or Azure, or any other cloud provider, even your on-prem solution, if so be it...

That allows someone who's at a higher level - we like to think about a separation of concern in Crossplane between someone who would be on a platform or operations team who defines available infrastructure, and then someone on an applications team... Or if you get to something like a WordPress instance, maybe on a marketing team, or something higher than that, being able to deploy things in a consistent manner, that is something that their organization has deemed appropriate for their use case.

**Gerhard Lazu:** I really like this concept, and one thing off the top of my head which I would really to know if it exists is - you have Crossplane, running in a Kubernetes cluster; can that Crossplane instance stamp out other Kubernetes clusters which maybe have a couple of building blocks already preinstalled, that are all the same? Does this functionality exist?

**Jared Watts:** When you take a philosophy of treating everything as a resource in Kubernetes, then that allows you to do some interesting things where Kubernetes itself can be treated as just another type of resource. Maybe you need a Postgres, maybe you need a Redis cache, but maybe you also need a Kubernetes cluster... So being able to dynamically provision on-the-fly, bring up a Kubernetes cluster with a certain configuration, or certain applications, or certain networking plugins, or policies, whatever it may be, to be able to on-demand bring those up and get them as part of your environment is a consistent experience, like within the other type of resource.

\[01:51:49.16\] I've heard people many times express how Kubernetes is a platform for platforms, and I think that we're really starting to see that, that a lot of the base problems have been solved in Kubernetes... You know, a declarative API for configuration, active reconciliation controllers that are level-triggered, not edge-triggered... There's all these different philosophies that went into Kubernetes that have made this platform where we can start building higher-level concepts on top of it. And the higher that you go up the stack, the more opinionated you can become; you become more specific to certain use cases.

But when you have these building blocks and you've got a community effort around bringing them into something that's more useful and higher up the stack, with more functionality or easier to use, then you can end up with cases where I can just bring up Kubernetes itself and start using that, and treat that as maybe clusters as cattle. A lot of things are \[unintelligible 01:52:43.14\] And somebody used one this week, too... It was something "as cattle", that I had never heard before, and I wanna remember that and bring that back, because I think it was taking it a little too far. It was like "Okay, not everything has to be cattle." But maybe I'm just not on board with it yet, so... New things from KubeCon this week that I still need to process.

**Dan Mangum:** Well, I did hear that kubectl, however your preferred way of saying that word...

**Jared Watts:** \[laughs\] Yeah, that's a tough subject...

**Dan Mangum:** KubeCTL, yes... I did hear that pronounced as KubeCattle this week, which is taking that to a whole other level, so... \[laughter\]

**Marques Johansson:** Or like "kubed cattle" \[unintelligible 01:53:19.20\] \[laughter\]

**Gerhard Lazu:** That's a good one. One thing which I don't know enough about and I would like to know more about is Rook. Where does Rook fit in all of this?

**Jared Watts:** Yes, and I'd be happy to take that one, since I've been working on Rook for just over three years now. I believe that where Rook really shines is its focus being on an orchestrator for storage. If you think about the roots of the Rook project, when we started it more than three years ago, something that we saw as Kubernetes was still in very early days is that you would ask people that are using Kubernetes "Oh, okay, so what are you doing for persistent storage?" and almost nobody had a good answer to that. That was a very commonly unanswered question, because they were just running \[unintelligible 01:54:06.17\] workloads in Kubernetes.

So we started seeing the value of, okay, if we can use these primitives and these patterns that are in Kubernetes, and these best practices that are starting to form around how do you manage an application's lifecycle, how do you maintain reliability of a distributed system - all these things, these problems were being solved, and then being able to build on top of that with "Okay, let's do the same thing for storage." Let's reuse the Kubernetes best practices and patterns to stop relying on external storage, or storage that's outside of the cluster; maybe it's in a NAS device, or a SAN, or maybe a cloud provider's block storage service, or whatever it may be... But being able to bring those into the cluster and orchestrate them to be able to take advantage of the resources that are already in the cluster - available hard drives, or different classes of service, a regular spinning platter disk, or an SSD, or an NVMe, or whatever it may be... But being able to provide storaged applications in a cloud-native type of way; you're not going with the full stack there. That's something that we found that got a lot of traction pretty quickly. And it wasn't too long - it was only a few early minor releases - before we started getting production usage of it... Which is always very surprising, because it was an alpha-level project, and we were very clear about "This isn't intended to be used in production yet", but we got production adoption pretty early on right away, which helped drive the maturity of the project as well.

**Gerhard Lazu:** Wow. Okay... Three years. That's a long time in the Kubernetes world; Kubernetes itself has been around for like five years, roughly...? So three years - that's a really long time; enough to mature, to get to a point where it solves a lot of real-world problems. That's great to hear.

I'm wondering - this is more of a personal interest - does it support LVM? Does Rooks support LVM?

**Jared Watts:** \[01:56:04.23\] That's an interesting question, because if you look at the design of the Rook project, it's basically separated into two distinct layers. One of the layers, which is the core functionality of Rook, is this orchestration layer, this management layer that will do the steps necessary to bring up the data layer that's underneath it, to get it running, and do day two operations to make sure it's healthy... So storage providers that Rook performs storage orchestration for within your Kubernetes cluster - it's up to that data path there to know how to handle LVM or any other type of storage fabrics and storage presentations that you can find in a cluster. So there are a number of storage providers inside of Rook that do work with LVM.

**Gerhard Lazu:** Okay, that's great. I really have to check that out. Very, very interesting. Just to go back to Marques again, because there's something which is at the back of my mind... You mentioned support in Crossplane for AWS, GCP and Azure. What about the other providers? There are so many more other providers, and Dan mentioned this - any provider can be part of Crossplane. What does the path for other providers look like, that would like to be part of Crossplane?

**Marques Johansson:** Sure. Well, we've stamped out the pattern by creating those stacks. In the process of creating those stacks - they were created initially, all of them, within the Crossplane project itself... And it was interesting, even though it's all inside of one repository, that the different providers were implemented by different developers, at different times, adopting different best practices, or what they thought was the best practice at the time... And it eventually coalesced into one set of design patterns which had been sort of the best of breed.

Around the same time, we decided to extract these (what we call) stacks, extract those providers/stacks out of the Crossplane project, into their own stack repositories. So github.com/crossplaneio/stack-gcp, /stack-azure, and /stack-aws. And we have additional ones - Rook, and Packet... And there's really an easy way to get that started for any other cloud provider interested in being able to provide their managed services through Crossplane, and having that abstracted away. If you have a managed MySQL or a managed Postgres, then users can create a claim for a MySQL instance, and one day they're getting RDS, the next day they're getting GCP, the next day they're getting your service. Maybe in one namespace it's resolving to GCP, for some production workload, and in another namespace it's reconciling to whoever's cloud providers manage MySQL. And again, not just for MySQL, Postgres, Redis, but all the different types.

Packet is a great example, because before Packet we didn't have the abstraction for machines. But Packet provides their Devices, where they -- Device is the name...?

**Dan Mangum:** Yeah, it's essentially a bare-metal offering that they provide via their cloud provider offering. They came and wanted to have a stack, and we didn't have support for what we call claim, for machine instances, so we wouldn't be able to dynamically provision those. So as part of the core Crossplane project, we now had a stack that wanted to be able to dynamically provision and integrate with Crossplane, so we were happy to work with them to add the machine instance, claim type, that now allows an abstraction that can be used by other providers as well. Because obviously, AWS and GCP etc. have VMs like EC2, and that sort of thing, that can also utilize that... So it's just another opportunity for portability.

\[02:00:08.13\] Another thing, to kind of build on what Marques was saying, is besides just having those best practices reflected in those stacks in our organization, we also have abstracted out to a library, a Crossplane Runtime, which is based on the Controller Runtime project, which I'm sure a lot of listeners who have built controllers are familiar with. That's part of the Kubernetes organization. Essentially, what that does is it gives you an interface for building controllers and running those in a Kubernetes cluster, and some best practices for doing that. Well, most of our stacks are using that, but also doing other things, namely interacting with external APIs.

There's certain patterns that are very common across stacks that do that, so we've been able to abstract those out into a library and just say "You just need to tell us for this resource how you want to observe the resource, create the resource, update the resource, and delete it, provide us methods to do that", and then the logic that's around that and actually executing those things can happen in the runtime library. So it really lowers the barrier to entry for people implementing new stacks, which I think is really valuable as we see more and more community adoption.

I think just today we actually saw a cloud provider in Europe announce that they were using Crossplane and had built a stack for that... And we had very little input on that; we did a little bit of code review, but they were able to take that library and some of the documentation we're written and build their own stack, largely isolated from any of the work that the Crossplane community was doing. That was some really strong validation for us, and I think that we'll start to see that happening a lot more in the next weeks and months.

**Jared Watts:** And it also gets back to the idea of Kubernetes being a platform for platforms. Kubernetes and its architecture has enabled Crossplane to now become a platform for all these other different cloud providers, or independent software vendors, or whoever, to build their application and get more reach and scope of accessing more customer markets/segments, for people to come and start using their software in this open cloud sort of way, with portability and all these different features that enable more people to access more software.

**Gerhard Lazu:** We've heard a lot about AWS and GCP and Azure, which would make people think that it's mostly about infrastructure, or infrastructure like a service... But service, again, which is still tied to the infrastructure. But I know that recently you have started (maybe you've even finished) integration with GitLab, so you can get the GitLab resource, which is a completely different type of resource that Crossplane enables. Can someone tell me more about that?

**Jared Watts:** Yeah, I'd be happy to talk about that, because that's something definitely that I've spent a lot of time on recently. We started alluding earlier -- Dan was talking about how you can create a Crossplane stack that helps you deploy your applications such as WordPress... And WordPress was a good place to start, because it's a fairly simple application; it's just a container, and a MySQL, and then maybe a cluster to run that container on. But then in the KubeCon Barcelona timeframe we've put a significant effort into being able to deploy GitLab itself.

So if you look at the architectural components in GitLab, they have a Helm chart, and currently that's their main supported way that they had started with to deploy GitLab and everything that comes with it into Kubernetes. Once you've rented that out, it's on the order of like 50 different containers, 20 config maps, all these different resources that speaks to a fairly complicated application set. But if you boil it down, what it really needs is a set of containers to run (microservices), and then Postgres, Redis, object storage. And that's basically it.

\[02:04:04.14\] So we -- being able to model that and then express in a very portable way that "My application needs these containers, and these databases etc." and being able to deploy that to any cloud, is a huge step forward. And being able to easily manage applications - not just infrastructure, but higher-level applications such as GitLab, into new environments that maybe they haven't been able to run in so far.

**Gerhard Lazu:** Yeah. Hearing you talk about that made me think of something else, which may sound crazy...

**Jared Watts:** Oh, I like that.

**Gerhard Lazu:** So I could imagine there being a need for having a Crossplane that manages Crossplane. Updates... Right? Because you have a Crossplane instance that keeps all these other Crossplane instances up to date maybe, or the applications up to date... But maybe I think there will be something else which will keep the applications, because you have the bigger loops, which reconcile maybe less frequently... And then you keep going in and in until you have some very quick loops, which reconcile every 5 seconds, 10 seconds, or whatever. Is this something that you've thought about, or did it come up before...?

**Jared Watts:** Yeah, that is not as crazy of an idea as you would think... Or maybe we're also crazy, too. But either way--

**Marques Johansson:** That's definitely true regardless. \[laughter\]

**Jared Watts:** Yeah, we can go with that, that's fine... But if you think about the architecture in general in Kubernetes around controllers that are performing active reconciliation - I mean, it's a great pattern... It's an old pattern, too. It's commonly used in robotics, let's say, to run in a control loop and sit there, watch the actual states in the environments and compare that to the desired state, see what the delta is there and take an operational step towards minimizing that delta there between actual and desired.

The same exact example there that you brought up, of a Crossplane to manage Crossplanes - that's entirely within the realm of reason. It's a set of controllers that can watch the environments and make changes to it to continue to drive it. So if there's a new update to Crossplane, in this single control plane you could be able to watch that, see that there's an update, take the imperative steps within this controller's reconciliation loop to upgrade the application and get it to the newest version. But it's all just the operator pattern and controller pattern inside of Kubernetes, and you can use that to manage basically any resource... So I think it's a good idea to be able to manage Crossplanes.

Because if you think about it, not everyone's gonna want to run and manage their own Crossplane, so I think that there's definitely value in being able to automate that and take some of that effort away from people, and let the controllers and the machines do that for you, so that you can have a Crossplane instance that's hosted for you as a service, and be able to get all the benefits out of your Crossplane without having to manage it yourself. Let the software do that for you. I think there's definitely value in that, that we see, for sure.

**Gerhard Lazu:** Okay. So this in my mind set us on a path that requires me to ask the next question, which is what big things do you have on the horizon that you can share?

**Marques Johansson:** I think scheduling is one area that we're looking forward to designing and approaching. When you have these Kubernetes application workloads, the concept that was raised earlier of bundling your application and its managed resources as a sort of single component, you're gonna need some sort of way to describe where to run that application, what cluster should it be run on, which managed service should it be using?

\[02:07:53.20\] Currently, the way that these abstract types, these MySQL instances, these Kubernetes clusters - currently, the way that they're resolved is through label selectors. So you've described a class, named that class and set some set of options on that class, but right now you're referencing it by name... So an area that we'd like to figure out is how we can do that dynamically, so scheduling it based on perhaps cost, perhaps based on the region, the locality, the affinity to another workload. There's all sorts of areas that we can really go into there. Maybe the performance of a cluster, or an application is failing, so that could lead to an application being bound to another application, in some sense, so... Lots of layers of abstractions here, and lots of fuzzy decision-making that can really provide a better application deployment experience.

**Jared Watts:** And building on what Marques is saying there - if you take a look at what the scheduler does inside of a Kubernetes cluster, the in-cluster scheduler, its job is to know about the topology of the cluster, know about the resources that are available in the cluster, and then make the best decisions about where a pod should be scheduled to, where it should run based on "Is that node overloaded? Do I need to evict some pod somewhere? Does it match the particular hardware resources that are available on a particular Node?"

So then if you take that idea of Kubernetes as a control plane and figuring out where pods should run across nodes in a cluster, and then go a higher level, where you have something like Crossplane, which is a control plane that's spanning across multiple clouds, multiple clusters, on-premises environments, but it's a higher level that is aware of the topology of all the resources that are available, and then can make these smart scheduling decisions about "Where should an application run, based on whatever constraints it thinks is the most important?" So this whole idea of scheduling that was done in cluster for Kubernetes can definitely be raised up, like Marques was talking about, to make decisions more at a global scale.

**Gerhard Lazu:** That's pretty cool. I'm really looking forward to what's going to come out of this, because it's super-exciting. And I know that different providers and different teams are tackling this in their own specific way... So whoever gets there first, or even if it's like multiples, it'll be a great moment, because it will open up other possibilities. It's all building blocks, next steps, next steps. This is really, really exciting.

As we are approaching towards the end of this great discussion, which I'm sure we can continue, one thing which I'd like to mention is that the way I got to learn about Crossplane is via your YouTube livestreams, the TBSes, I believe... And Dan was the last one that I've seen (I think) on the livestream. It was great to see that in action, so can you tell us more about how that works, where the idea came from, how it feels to be on the other side?

**Dan Mangum:** Absolutely. So if anyone out there wants to go watch some very low-quality videos... \[laughter\] \[unintelligible 02:11:21.07\] We do a livestream every two weeks. That's something that we got ramped up shortly after I joined Upbound. It's really just a time -- it's very informal, and it's a time for us to talk about new things in the Crossplane community, new things in Kubernetes that are related, and then also to do a lot of really live demo-ing. Actually, someone asked me today, "Why don't you just record your demos and just post them on there? And then you can make sure that everything goes smoothly, and that sort of thing." And the reason we don't do that is because we think there's a ton of value in messing up.

\[02:12:03.16\] There's a lot of different configuration that can happen when you're provisioning things across cloud providers, on-prem; lots of different services, lots of different plugins... Those are a lot of different ways you can mess up, which is not really a reflection of the system, or even of your own ability. It's just complicated. And what it does when you provision things and you run into issues with it and you work through it is it shows people how to troubleshoot when they run into those same issues.

It also adds a layer of humanity to it, I think, that allows people who are tuning in, especially live, when they're dropping comments, and that sort of thing, to be able to talk about what their individual experiences are. We've had some other people host as well on some episodes. We've actually recently had multiple people hosting a single episode, which - you might wanna skip that one; there were some technical difficulties... I apologize; I'm not a visual engineers. But what I'd like to encourage people to do is talk about something they're interesting in outside of Crossplane... So a lot of times I'll start a show by talking about the Utah Jazz, which is a basketball team I really love... And I'll encourage the other people to do the same. Because when it comes down to it, the end users of Crossplane and the people that build Crossplane are gonna have to be really closely integrated, right? Because it is a platform that is going to inherently have to make some architectural decisions, and we wanna be best informed about how users want to use the platform, so that we can build it to meet those specifications... And then encourage them to come in and build parts of it as well.

So I think just building that community, and having fun, and talking about -- you know, you can do all these things and we're excited about them, and we'd like for you to come join us on this journey. I think that's really the purpose of TBS, which is The Binding Status, which is kind of a play on claims binding the classes. I think that's the purpose of the show.

We had a couple people come up and mention that they'd watched episodes, which I was astounded by, and I apologized for the time that they had wasted, but... It was personally and as an organization really validating to say "You know what - people care about what's going on here, and they feel welcome into the community by this style of communication."

**Gerhard Lazu:** There's one big downside to this, from my perspective... It's that I enjoy watching the shows more than trying Crossplane out. \[laughter\] So the risk there is that I will continue watching all the Crossplane shows forever, and never try Crossplane... Because it's so exciting to watch, but I spend all the time watching, rather than trying it out. So that's one of the real risks of this.

**Dan Mangum:** Well, I think the solution to that is we just have to have you come on and host, and then you'll be forced to try it out with hundreds of people watching. \[laughter\] \[unintelligible 02:14:43.28\]

**Gerhard Lazu:** Yeah. That's actually a great idea, I have to say... I don't know how I'll get out of that one, but... \[laughter\] Any last, parting thoughts?

**Marques Johansson:** Well, it's really easy to try it out, so you don't have an excuse. You just Helm-install it, and as long as you've got some cluster somewhere, install it in kind and install it in K3s on your laptop... Docker on Mac includes a Kubernetes engine now. So from there, you can Helm-install your Crossplane, and from there start provisioning more clusters, more managed resources, the Kubernetes applications.

Another piece I'd like to piggyback off the idea is the videos. We have a lot of documentation, we've worked hard to update this documentation, both on how to build stacks and how to use Crossplane. We've been updating it every version, and we're trying to get more strict about making sure that our Docks are updated with every release, and we've been releasing the product faster and faster. The last release was 0.5, and before that was our first minor patch, in 0.4.1. We've worked on our build pipeline, so that we can get the updates out there quicker... So with all of this, you have documentation to test it out with, so... I'd like to say that yes, the video is probably one easy way to consume it.

\[02:16:20.08\] For different people, different things are gonna work. But whether it's reading the docs, whether it's installing the product and just trying it out by hand, or whether it's watching us fumble at the command line. YAML is not the easiest thing to just grok at a distance. Sometimes you need to watch somebody stumble over how to best describe it, or just read thoroughly what we've done, or jump in the code; visit the GitHub project, star it... That stuff is really useful to use. Leave issues for any kind of ideas that you would like to see Crossplane expand or delve into.

**Dan Mangum:** And a closing thought on that that I strongly believe in is that I consistently see that some of the best feedback and ideas for a project comes from brand new users that have never seen it before. Because you could be a project maintainer, let's say, and you're consistently living in that codebase, and you know all the ins and outs and the idiosyncrasies of it, and you get a very specific, myopic view on it almost. But then you have a brand new person try it out for the first time, with fresh eyes, and they see something immediately that you've been completely blind to for the past six months.

Some of the best feedback comes from brand new users, so we are super-open to new people trying it out and giving us their ideas, because they're probably gonna be good ideas as well.

**Gerhard Lazu:** Okay. So on that note - I really like that idea - how about we stop the interview now, and I can start trying some Crossplane stuff out for the first time... \[laughter\] And watch me, and tell me all the things that I'm doing wrong. I would really like that.

**Jared Watts:** Or maybe you could tell us what we've been doing wrong...

**Gerhard Lazu:** Or that, yes. This will get crazy. I'm really looking forward to that. Dan, thank you very much. Marques, thank you very much. Jared, thank you very much. It was a pleasure having you. I'm so excited that you were on the show, and I'm looking forward to what will happen next.

**Jared Watts:** Thank you so much for having us, it was a pleasure.

**Dan Mangum:** Thank you.

**Marques Johansson:** Yeah, we really love Changelog, we love all the shows. Go Time... Just subscribe to the Master feed and you get everything. It's the best.

**Gerhard Lazu:** Thank you, Marques, thank you.
