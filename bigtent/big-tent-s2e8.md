**Tom:** Hello! Welcome to Grafana's Big Tent. I'm Tom Wilkie, and this is the podcast all about the people, tech, and tools around observability. I'm joined today by Brian \[unintelligible 00:00:27.01\] Niki Manoledaki, and Thomas \[unintelligible 00:00:28.06\]. Welcome!

**Brian:** Hello

**Niki:** Hi.

**Thomas:** Hey.

**Tom:** So, Brian, how are you doing this fine day?

**Brian:** Good, good. How are you?

**Tom:** I'm very well. So Mat, who usually co-hosts Big Tent with me, was showing me a video of you over the weekend. Apparently, you took him out in your helicopter.

**Brian:** Yeah. Well, not my helicopter, but rented.

**Tom:** You took him out in a helicopter.

**Brian:** A helicopter.

**Tom:** And that's why he's not with us today.

**Brian:** Oh. Because he forgot the parachute?

**Tom:** No, he said you were a very good pilot, you were very responsible, but that you made him call you captain. Is that true?

**Brian:** \[laughs\] Yeah. Well, I think that's only The pilot is the captain of the ship.

**Niki:** He didn't make you call him Kubernetes? \[laughter\]

**Tom:** No, that's brilliant. So Niki, how are you? Whereabouts in the world are you, Niki?

**Niki:** I'm in Barcelona.

**Tom:** Oh, lovely.

**Niki:** I just got back from seeing my family in Greece, so... It's funny telling them what I do, that I work with Kubernetes, because I never know whether I should pronounce it in Greek or in English.

**Tom:** What is the Greek pronunciation?

**Niki:** Kubernetes.

**Tom:** Oh, no... I've been doing it wrong all my life.

**Brian:** Yeah, I like that better.

**Tom:** And what does it actually mean in Greek?

**Niki:** I think it means governor, but also it can be the captain of a ship, I think.

**Tom:** Hah! Okay.

**Thomas:** The person steering the ship? Something like this?

**Niki:** Yeah.

**Thomas:** Not that I know. I'm guessing. It's just that they have the ship's steering wheel as an --

**Niki:** The helm?

**Thomas:** Yeah, the helm as an icon.

**Tom:** And that probably explains why Helm is called Helm as well. Okay. It's all starting to make sense. I probably should have known this a decade ago. So before we move on, Brian is a grafanista, like myself and Niki. Brian is -- what do you do at Grafana, Brian?

**Brian:** Oh, just a bit of typing. It's fun.

**Tom:** He's our distinguished typist.

**Brian:** Yeah. I work in what we call the databases department, so storage of metrics, logs, traces, and profiles.

**Tom:** Brilliant. Thank you. Yeah. And Niki is also a fellow grafanista. Niki, what do you do at Grafana Labs?

**Niki:** So I'm a software engineer in the platform departments of Grafana Labs. So I work with Kubernetes tools on auto-scaling and cost monitoring. We deploy tools such as Karpenter, the Vertical Pod Autoscaler, the Descheduler, all the fun CNCF and Kubernetes tools.

**Tom:** Brilliant. Thank you. And Thomas, you're not at Grafana, are you?

**Thomas:** No, I'm not. I'm very happily not with anybody at the moment. I'm happily unemployed, which is something I can only recommend to everybody once in a while.

**Tom:** I think we're all secretly very jealous. What did you used to do, Thomas?

**Thomas:** So the last thing I did was I ran a company called Optimize that did fleet-wide profiling, after pivoting from trying to do optimization for money. I can talk about the way that failed later. And we did fleet-wide profiling, and built some pretty cool tech, and then got acquired by Elastic, and then donated that tech to OpenTelemetry. So OpenTelemetry now has what I consider to be the best fleet-wide profiling tech around. So I'm very happy to have been involved in that.

**Tom:** Very cool. Yeah, I mean, I definitely want to hear a lot more about that later. But before we dive into this, I think, Brian, you were really kind of selling yourself a little bit short there, because the one thing you didn't mention is the work you've been doing on Prometheus.

**Brian:** Yeah. Well, so I am a Prometheus maintainer... Prometheus, the open source monitoring system. It is a component of a number of our systems. It's a pretty key core of our metrics system at Grafana Labs, which is the open source project Mimir. But Loki, our logs system, we call that Prometheus, but for logs, and a lot of the same code is in there. And to a lesser extent, the same is true in our traces, and our profiling products. So I actually work upstream some of the time in Prometheus, and effectively improving all four of those systems at Grafana.

**Tom:** And when you say work upstream, you've shipped tens, maybe hundreds of changes, all aimed at really reducing the CPU and memory usage of Prometheus, right?

**Brian:** Yeah, it's quite a big beast. If you're monitoring thousands of things, then your Prometheus is probably chewing up 10, 20 gigabytes of RAM, something like that. So it's worth trying to shrink it down. I spend a lot of my time kind of thinking "What is it doing? Why does that take 10 gigabytes? Why is it so slow?" So I justify -- you're paying me, effectively, to tinker with this stuff, and I justify that because it reduces our cloud bill. But really, I just want it to go faster.

**Tom:** I mean, it reduces a lot of people's cloud bill, I think. Do you roughly over the last couple of years have like a guesstimate of how much more efficient you've made Prometheus?

**Brian:** Well, I did at talk last year's observability day at KubeCon, which was titled "How Prometheus halved its memory." And I sort of took a few liberties towards the end. I think I'd probably claim it came down to about 60% over about a two-year period or so; 40% smaller, or however you want to count that. And then I had to take a few liberties to get it to 50% for the purposes of the talk.

**Tom:** \[06:22\] Well, we've all got to write those clickbaity talk titles to get them accepted, right?

**Brian:** Yeah.

**Tom:** So what kind of things did you do to halve the CPU memory usage of Prometheus?

**Brian:** I mean, it starts by looking. Profiler is one of my favorite tools looking at what is actually being used, either in CPU or in memory. And for Prometheus, it turned out that a tremendous amount of the memory was in the metadata. Everything that you look at is identified by strings, label and names and values; basically, name-value pairs identify everything.

So the obvious thing -- a lot of you are thinking "Oh, I get it. He found multiple copies of the same string and turned them into one copy." And that's actually not what I -- well, I have done that, but that's not the most effective thing to do. Without going all the way down the rabbit hole - go look on YouTube, I've talked about this. Or we can put links in the show notes, right?

**Tom:** Yeah, we will.

**Brian:** There are certain overheads coming from the Go programming language that Prometheus is written in, that doing things a little bit unorthodox will reduce those overheads. And so that's certainly the biggest chunk was getting that out. And then - yeah, it's kind of grinding away. It's looking at it and going "Okay, what's that? Why do we need that? Where is that coming from? Who did that?" I don't know. I don't care who did it. But grinding, grinding, grinding, taking out little percentages here and there, and eventually it all adds up.

**Niki:** When you say that one implementation that you made wasn't the most effective, what feedback loop did you use to evaluate the effectiveness? What were you using?

**Brian:** So I have two or three mechanisms. I mean, at the end of the day, it's going into production at Grafana Labs. That's the ultimate feedback loop, where we're running this stuff with trillions of data points coming in every day. But before you put it into production, you can put it into a development environment. And that's my typical kind of acid test, is running it for real.

**Thomas:** I mean, with modern software, reasoning about it outside of an empirical context is pretty much impossible. So particularly when it comes to optimizing stuff, it's always a bit of an empirical science, where - well, you try to measure the stupids in the first place, and usually in larger systems that haven't been optimized yet, there's quite a bit of it to be run out. And then you identify the largest chunk of obviously stupid, and then you remove that. And when I say stupid, that's not even... I don't intend to blame the original developers, because the job of a dev is usually "Make it run, and then afterward, make it run fast." So to a certain extent, when you first look at a system, you find large chunks of things to optimize, and then you remove those, and then you tackle the next large chunk. But it's very, very difficult to reason about the impact of a change without actually putting it into production... Because modern systems are such complex beasts, with so many secondary effects.

But it makes optimizing really gratifying, because it's very empirical and very measurable. And you have -- when we try to sell continuous profiling as a product, our pitch to some of the devs was essentially "Hey, at Google, everybody that wanted to get promoted from a certain level to another certain level, wanted to have quantifiable impact." And nothing gives you quantifiable impact like fleet-wide profiling and then optimizing stuff.

**Niki:** \[09:59\] It's really hard to measure the impact of a specific change. In our environment, sometimes we've used the Vertical Pod autoscaler for right-sizing the resources of a workload. But then, for example, if there's a bug, and we have to turn off VPA, it's really difficult to identify, to calculate if you've stopped benefiting from VPA once you've paused VPA, for example. All of these implementations are really hard to measure in very large Kubernetes production environments. So that's why I'm always wondering, "How did you do it? How did you find that?"

**Brian:** I mean, there's a tremendous amount of variety in... One of the harder things is, as a business, Grafana Labs is growing. So it's sort of natural for resource usage to go up every week. But there are some parts of that that remain stable. There's certain kinds of customers that will perhaps have a Black Friday big burst in traffic, but the rest of the time they're much quieter. So if you do the change that you think is an optimization at one of those stable times, it's easier to spot.

But yeah, I mean, it's one of the things I always tell people - change one thing at a time. And if one of those things, or if three of those things are things that are out of your control, because Christmas came, or something like that, everything changed, then you really have no idea what happened. So the things like optimization - it's really ideal to make one change, and measure it, and then one change, and measure it, and so on. So I end up with about 10 balls in the air at any one time, is one of the tiring things about what I do.

**Tom:** Well, we've got -- our pipeline to get stuff into production takes like a couple of weeks, to hit some of our... Because we sell databases, so it's very tricky to test in prod when a test going wrong corrupts huge quantities of data. So whilst we deploy very, very frequently, the latency versus the throughput of our changes can be quite high.

So yeah, you do have to have a lot of stuff in the air at the same time, testing on different projects, on different clusters, on different parts of the codebase.

**Thomas:** I mean, what Niki was saying about the difficulty of measuring in modern environments - this goes from the very high level, like the large Kubernetes environments, where pods are being killed and shuffled all the time, to issues like noisy neighbors on your cloud VMs, to issues like your CPU speculating along a certain code path, and the memory layout of a given process affecting performance, right?

So everybody that I know that gets serious about benchmarking at some point ends up at a rabbit hole of both robust statistics and experimental design. The Clickhouse folks have a pretty good blog post where they talk about how they do benchmarking in the cloud, and how they deal with noisy neighbors in their benchmarking environment. But at that point, you need to think about experimental design for what you're doing. I kind of like it, because a lot of computer science isn't very much like science, but optimizing becomes a bit of an empirical science, and it's cool. I like it.

**Tom:** If I remember this correctly, Brian, there was an issue you were tracking down, where occasionally one machine in a cluster of 100 would perform fundamentally differently to the others. What was that about? And did you ever get to the bottom of it?

**Brian:** Yeah... So it's more like one in a thousand. And where we have these stable, well-spread loads stands out, because you have like 300 processes that are supposed to be doing the same thing. And one of them is using 70% more CPU than all the others. Yeah, so without naming and shaming, but we raised issues with the cloud provider, and said "What's this all about then?"

\[14:09\] It took a long time, because... So one of the things that happens is you kind of go "Oh, that's bad. That increased latency. Kill it." Because that's the sort of the reaction to lots of things in big computer systems. Restart that process and see if it goes away.

So the load would move on to a different machine, so effectively it would go away. So actually keeping the machine alive long enough to compel the cloud provider to look at it took months to be able to sort of say "Yes, this one. We kept it alive, especially for you. Go look at it." So eventually, basically they came back and said NUMA. So N-U-M-A stands for non-uniform memory access.

**Tom:** I suppose that's one better than saying it was a cosmic ray.

**Brian:** So this is something that if you've -- you would basically never encounter it until you get to pretty big computers. Because the basic idea is that they've built a physical computer with multiple CPUs on it. So let's say there's four physical CPUs on the motherboard, and each one of them is attached to some RAM, like 64 gigs of RAM, or something like that.

That's how you build these machines. So the machine as a whole, and each one of those physical chips, if there's four chips, each one might have 32 cores in it. So it's a big, big beast of a machine. And what you don't want to do is access so much memory that you kind of come off -- I'm waving my hands around. That's great for a podcast. But if you -- it's I think fairly intuitive that the memory attached to one CPU is going to go at a certain speed. And if you end up using more memory, so you're actually crossing the boundaries of the machine going across to memory buses, it's going to take longer.

Now, we don't use machines that big. We rent machines which are typically 16 cores, or 32. I mean, Niki, you probably know this; you do this every day. So we don't rent machines which are so big that they have this problem, or this physical design characteristic. But it turns out that at this low rate, which I think was about one in a thousand... So we're renting virtual machines from the cloud provider, and physically under the hood we would end up with a 16 core machine, of which eight cores were on one CPU and eight cores were on a different CPU. And the whole thing runs at nearly half the speed.

So it's sort of "D'oh!" When someone explains it, it's like "Okay, that could happen." And good news, you can pay extra if you want the provider to undertake that they won't do this to you... You can pay twice as much for everyone. So we're not going to do that, because it's like one in a thousand that hits us.

So the last thing is that we can't detect it, apart from the symptom that it's just slow. So that was what we left them with, was "Well, could you provide an API where we can detect this happening?"

**Tom:** And then we just won't use those machines. Yeah. We'll just keep cycling through the pool until we don't get them.

**Brian:** Yeah... They said "Okay, we'll look into that." I guess it's not in their -- anyway, the status at the moment is that we live with this, and... Yeah, it was a month-long -- something like eight months from deciding that there was really something weird going on, to getting a concrete answer which didn't fix the problem. But at least now you know what it is. Then you can kind of think about what are your strategies.

**Tom:** You can sleep at night now that you know what the answer is.

**Thomas:** \[18:01\] I mean, there's so much performance variance in the cloud anyhow, because the virtual machine type does not guarantee a particular microarchitecture. So there's a mapping where a particular type can map to many different CPU generations in the first place.

**Brian:** Yeah. We went through a tremendous number of those possibilities.

**Thomas:** Yeah. And also, it's much better now, because CPUs have largely gotten really good memory bandwidth. But a couple of years ago it was surprisingly easy in a cloud environment to exhaust the memory bandwidth of a machine, which would then exhaust the memory bandwidth for collocated other VMs as well. So you could cause all sorts of harm to neighboring -- like, people on the same physical machine, that were just virtualized on the same machine. And if you stare at updates that Intel has been doing or the chip manufacturers have been doing to the virtualization capabilities, they're trying to add more and more features that allow proper isolation of shared resources, both for security reasons, because you've got the Spectre meltdown style attacks, but also for giving predictability and performance in virtualized environments.

People think of a virtual machine as a computer, but it really isn't a computer, right? It's a small, small shard of a larger machine. In a funny way, the cloud provider provides very large computers to us, but we only rent simulated pocket calculators. And then we network them again to simulate a larger machine using Kubernetes.

**Tom:** I mean, that's a good segue, because one of the things we've been doing over the last couple of years is trying to drive up the bang for the buck we get from the machines we rent.

I think when we first started this, Niki, a couple of years ago, we were wasting a third of - maybe even more; maybe it was 40% - of all the resources that we actually spent money on. And when I say "wasting" here, I don't mean utilization. I don't mean like we weren't using the CPUs. We weren't even allocating them to jobs.

**Thomas:** Oh, yeah.

**Tom:** Do you remember that, Niki? What did we do to kind of improve that, and start getting more bang for the buck?

**Niki:** I wasn't there at the start of the Capacity Squad... The Capacity Squad is my team. I know for sure that it's been trial and error with Cluster Autoscaler, and then moving to Karpenter, and deploying tools such as the Vertical Pod Autoscaler.

I definitely think Karpenter's consolidation algorithm has helped tremendously. My colleagues, \[unintelligible 00:20:35.04\] and Logan, have a blog post about how Karpenter helped us save costs, so that pods are allocated to nodes in a more efficient way, so that we can hit numbers like an average of 20% idleness... Which is very low. 80% utilization is quite high.

**Tom:** Oh, 80% allocation I think we are, yeah.

**Niki:** Allocation. Yes, allocation. A request allocation, not necessarily utilized.

**Tom:** So let's just explain that for the listeners, because I don't think the difference between allocation and utilization is necessarily that obvious.

**Niki:** So with a Kubernetes pod, for example, you have resource requests and limits, and the request is what the scheduler should reserve for a certain workload running on a node. That is a request that should be set. It's not always set. And it is a field that -- it's what the vertical pod autoscaler actually tunes for you automatically... And so - yeah, those are the resource requests for CPU and memory.

**Tom:** \[21:54\] So we were talking about allocation versus utilization, right? So allocation is I'm a developer - like Brian said - I want to run 300 instances of my service to assemble the kind of large, virtual \[unintelligible 00:22:07.16\] machine, and I'm going to ask for like "Each one of these services needs 10 cores." That's my allocated request. What's utilization?

**Thomas:** As an analogy, let's say you go to a restaurant and you reserve a table for 10 people. That's your allocation that you're getting. And the number of people that are actually seated at any point in time would be the utilization.

**Niki:** Yeah. So utilization is something that I'm trying to -- we're trying to look at utilization from a new perspective now, with energy monitoring, actually. I'm new to how we can leverage utilization. So I think maybe some of our listeners might relate to this, because I don't think everyone is very familiar with it... But yeah, how do you go from traditional utilization metrics -- which utilization metrics do you even use? That's a difficult question.

Maybe you have -- what are your thoughts on this? Like, which utilization metric have you used in the past with the Prometheus optimization?

**Brian:** Yeah, well, I guess the utilization -- with Prometheus, you're typically most focused on "When am I going to not be able to buy a bigger machine?" Because Prometheus, the open source monitoring, the thing that we're -- it's one process. It's nice and simple. You install it, you run it. There's one thing. And what we do at Grafana Labs is we take that core and we spread it across hundreds of machines, so we can scale. But if you run Prometheus, which is the nice, simple to run thing, there's only one of them. And so the only way to scale it is get a bigger machine. So your ultimate metric is "When can I not get a bigger machine? When am I running on the biggest machine I can rent?"

And we talked to people at some huge online retailers and so on who literally do this. They can't get a bigger machine.

Yeah, so the number of cores, the number of CPU cores in use is one metric, and the number of gigabytes in use is the other metric. And when you try and go more, when you try and go above that limit on CPUs, the program slows down... Which is irritating, but possibly not fatal. When you go above your memory limit, the process gets killed. The so-called OOM.

**Niki:** So that has been the bane of my existence during my time working with the Vertical Pod autoscaler. Because we get OOM kill errors and eviction loops, and so really what we're trying to solve is to have right sizing that is very strict, while also not being so strict that we end up having those OOM kill errors, which lead to evictions in Kubernetes. So this is the reliability versus cost optimization trade-off right there.

**Brian:** Yeah. You end up trading risk, essentially. There's some amount of headroom at which it will operate, and you try and reduce that headroom, because that takes your cost down, and at some point you reduce the headroom too far and it goes bang.

**Niki:** Yeah. And with some tools, like with the descheduler, for example...

**Brian:** Ooh, that sounds fun. What's the descheduler?

**Niki:** The descheduler - it's fun, because also the logo of the descheduler is a zombie... Because it will just get rid of pods.

**Brian:** And that's part of Kubernetes, is it?

**Niki:** \[26:00\] That's a Kubernetes project, yeah. It's a Kubernetes project that will deschedule -- it will evict workloads based on various configurations that you can set for it. And there again we were seeing some eviction loops, for a different reason. At this point where we were using the descheduler to optimize at the node levels; very similar to how Karpenter will consolidate as many pods as possible on a node. But this was a different setup on not using Karpenter, and using the descheduler to get rid of pods so that hopefully they are rescheduled on a different node, that has higher utilization, so that the previous node can be removed, and then you profit.

**Tom:** So let's just take a step back for a minute... The aim of all of this is "We're paying for the whole restaurant." We're buying a hundred-seat restaurant. And then our dev teams come in and ask for tables, 10 seat tables, and then they actually only turn up with four people, right?

**Niki:** Yes.

**Tom:** Now, we have two numbers we're trying to improve. One is how many tables we sell. How many of our tables are allocated in the restaurant. But the actual one we really care about is how many people turn up. How much utilization of the seats there is. So with the pod descheduler, we're basically saying the restaurant is a node, we've got an empty restaurant with one table in it, that's got a few people sitting on there, and what's the point in having that restaurant open, right? We might as well kick That group out, tell them to go to the restaurant next door, which hopefully has more tables that are being used, And then we can shut that restaurant down and not pay for it. I don't know, am I murdering the analogy now?

**Niki:** I think that's a good metaphor. You have two restaurants... Well, is the restaurant the node?

**Tom:** Yes. In this analogy, the restaurant is the machine. Yeah. And we actually have thousands of restaurants, all serving our customers, which is a bit weird, I guess.

**Niki:** I was thinking that if you have like four tables together, that are one group, this is the node, and the restaurant is the cluster. And then the amount of tables that you have form the resource for the node. And so if four people sit at -- no... I killed it, I'm sorry.

**Tom:** Let's abandon the analogy.

**Thomas:** I'll just chime in with my mental model. Let's imagine we're in Las Vegas and we've got a massive banquet hall, and there's thousands of tables there. And that's the cloud provider. And we're a customer, and we asked the banquet hall to fence off a section of that banquet hall with a certain number of tables in there. And clearly, the more tables we're using, the more the casino charges us for renting these tables. And obviously, we would like to put most of our guests at the fewest number of tables, but also, we don't want individual people to not have a seat anymore. And there's people coming in, coming and leaving all the time, and we need to make sure that we always have a certain amount of spare capacity that we can seat people, but at the same time we're not wasting too much money by over-provisioning spare capacity. Yeah, and now I've murdered the analogy.

Anyhow, the interesting thing historically about something like the descheduler, from my perspective, is when Kubernetes was built, it was built a little bit as a successor to Borg, Borg being a Google internal system. And the model there wasn't that you rent computers from a cloud provider. The model there was you have a data center with a fixed number of computers. And then you try to schedule your jobs into those computers as efficiently as possible, to make best use of your machines.

\[29:51\] But in that model, you don't have any benefit from reducing the number of machines, because in that thought model there is no such thing as reducing the number of machines, because you've got an entire data center full of stuff.

So it's interesting to me to see that Kubernetes is now adding a descheduler, because it shows that the original model under which a piece of software was developed wasn't the model that in the end is needed. And this is also - when I said earlier that when you're optimizing, you're looking for the biggest "stupid", and all the big "stupids" that you find were not stupid when they were made... Because no software ever runs on the hardware that was designed for, and no configuration parameter is ever properly tuned for the machines that it runs on. So things evolve over time.

And a lot of the optimization work is really, to some extent, janitorial. You're sweeping up the cruft that has accumulated over the years, and you make things clean again.

**Tom:** Yeah. The assumption is they are no longer valid.

**Thomas:** Yeah, yeah. There's a person on Twitter, his last name is Shipilev. He works on Java performance, and he has a beautiful diagram of what he calls the performance complexity curve. Well, I can gesticulate now, but that won't help the podcast listeners... But in the end, it's a curve that looks a bit like a parabola, where the close part of the parabola points left. So in the end, you start out with something that has low performance and high complexity, you're on the bottom right of the diagram. And then a lot of optimization work reduces complexity, because you're removing useless stuff that has accumulated over the years. And then at some point there's an inflection point where in order to squeeze out more performance, you can now no longer do that by simplifying, but you need to do that again by re-complexifying. And as somebody who's optimizing for things like sustainability and cost, usually you want to stick to the minimum of the complexity performance curve in terms of complexity. And you don't want to walk down that path where adding extra complexity to get more performance is worth it.

That may change if you're like a high-frequency trader, if you make your money by being faster than your competition... But for most businesses or for most software systems, optimizing makes a lot of sense, as long as you're walking left on that curve. But the moment that you're starting to add complexity for further optimizations, you need to make sure that being faster or being cheaper, or using less RAM is actually worth the extra complexity. Because for anybody who's been in software for a long enough time, we all know that 90% of our job is trying to avoid complexity blowing up in our faces.

**Niki:** A question for you, Thomas, on the cost and sustainability question, which is kind of a look into the future. It's also a look into the past, because energy/electricity has been an issue since the very beginning of the industrial revolution, really. It's nothing new in itself... But how do you view sustainability as part of computing today, and something that we can optimize for? Because it's very abstract, and we have proxy metrics such as cost, utilization, but we don't have metrics for carbon, which is really the end impact of technology. So how do you apply theory into practice?

**Thomas:** So I would disagree that we don't have metrics on carbon. I would argue that we have imprecise metrics on carbon, but an imprecise metric is better than none. I'll go on a short digression on how we calculated carbon impact from profiling data, and I'll caveat this with it's a very ballpark thing.

So let's say for a second that you've got data about which piece of software is using how many CPU core seconds in your fleet over the course of a day. So you now know this software here is eating X number of core seconds per day. You can calculate approximately what the power draw of a single core under full utilization is. So at this point you can get -- within some uncertainty bounds, because depending on the workload, depending on memory access, depending on disk access, depending on whether the SIMD instructions are in use, the power consumption of that core will fluctuate... But at least you get a range of "My power consumption for core under this much utilization is going to be between A and B."

\[34:18\] And then from your utilization data, you can then ballpark estimate how much energy was drawn over the course of the day. You can estimate how much does a server of a certain size draw in terms of energy and how many cores are in there. So from this, you get an estimate of the number of kilowatt hours you've consumed over that day, and then comes the difficulty of converting the kilowatt hours to CO2. And this is where the Financial Times had a really good article a while ago about the cloud providers essentially all cheating on the numbers. Because a lot of cloud providers will argue "Oh, we're 100% green", when in fact they're not green, they're doing some bizarre offset schemes or whatnot. Google likes to put their data centers right next to hydropower, which is 100% green, and they can justifiably argue that there's 100% green energy in that compute then. But there's a substitution effect as well, because that green energy is now not available for the grid, and would otherwise displace other sources of power.

So the conversion between kilowatt hours to CO2 is tricky, and what we ended up doing is we would just take the average carbon intensity for a kilowatt hour in a particular region... Like, the grid in North Virginia is going to be that much CO2 per kilowatt hour - and that data is publicly available. And then you can just multiply - okay, if the average grid cleanliness or the average grid carbon intensity is x, I can now extrapolate a kilowatt hour will have this many pounds of carbon. And I would argue we're probably -- like, the error bars around our estimates are going to be very, very wide, no doubt. It's a very imprecise estimate. But the reality is the imprecision at least will be largely constant, meaning if I make a big change through optimization that drives down my metrics significantly, even if my metric is quite imprecise, I will have properly indicated that I've made a large impact here.

So that's one side of it. The other side of it is I'm hoping that over time we can push the cloud providers to provide a more accurate way of measuring electricity consumption. I don't want them to give me CO2 data, because they lie. Just plainly, their business model is to -- it's not in their best interest to ever be honest about the actual CO2 impact of the power they're consuming. So what I would like to do is I would like to push cloud providers to tell me how much electricity did I eat.

So I don't know how the scheduling algorithms for scheduling VMs inside Amazon works, but I know that, at Google at least, after Meltdown and Spectre, after all these issues around VM isolation, there was some push internally that people should try to -- the scheduler that schedules VMs for a given client should try to cluster the same client on the same machines.

So I don't know how things work internally now, but I would posit that it's sensible for cloud providers to put all VMs from one large customer largely or preferentially into the same machines, at which point they should be able to provide a large customer with a ballpark estimate for how much power did this customer draw... Because they're mostly the same machines, and you don't have to do the hard work of figuring out where precisely did the power go for different processes.

And once you have more and more fine-grained data about the power consumption of your workload, then it's up to you, and you can interpret that data better in terms of what your CO2 impact is. Am I making sense?

**Niki:** \[37:51\] Yeah, there's a new CNCF project called Kepler, which is the Kubernetes energy exporter, which uses eBPF and machine learning to -- the eBPF part is to look at the kernel events, and the process ID for what is happening in the kernel, and then associate that with, for example, the idea of a pod, of a container. And that in combination with a machine learning, an algorithm that's been trained previously, we're able to get energy metrics in cloud infrastructure in Kubernetes workloads, which is really exciting. That's something we're working -- we're working with Kepler very closely in the CNCF environmental sustainability tag, since it is enabling us to get energy metrics, which we can then convert into carbon, if we have... Well, depending on which carbon coefficient you use. As you mentioned, Thomas, the carbon coefficient can -- choosing that and even surfacing that data is a challenge. And there's different variables, different design choices to be made there... That's one thing that we're advocating for, and trying to advance in the sustainability tag, trying to include that in benchmarking, include that in profiling, and advance this topic, and really advance the intersection between cloud-native software and environmental sustainability.

**Thomas:** That's pretty great. I need to look at Kepler. As I said, the profiling data that we used to gather, and that is now part -- that data can be collected with the Otel agent now as well, or is collected with the Otel agent as well... It did allow us to do estimates of carbon consumption, essentially down to the line of code, to some extent. Because you were sampling CPU events all the time, you knew where you were, and then you would accumulate those into flame graphs. And within the flame graph you could click on a block and essentially see "Okay, this was the estimated CO2 output." Of course, under the assumption of a certain CO2 coefficient, and also under the assumption of a particular Intel micro architecture, because different micro architectures have different power draw characteristics over time.

I think that's a great thing about having this in an open source project, because stuff like gathering power draw characteristics for new micro architectures as they come out is something that may be better done as a community than by an individual vendor. So it's exciting. It's awesome stuff. I'm looking forward to it.

One of the things I have on my radar - when we did optimize and we pivoted to fleet-wide profiling, this was pre-LLMs, and we had certain projections around data centers soon reaching 3% of global electricity demand, and so forth, and we used that in our pitches and in our entire modeling. That entire -- the energy consumption projections for compute have accelerated drastically on the one side, which would be good for the profiling side... But so much of the new energy demand is no longer CPU-driven. It's all special accelerators and GPUs. And the story for doing proper profiling on GPU fleets is very, very poor, largely because Nvidia's platform is very locked down, and you don't have the equivalent infrastructure of CPU events and eBPF and the Linux kernel.

So that's one of the things to keep in mind... A lot of compute is moving to heterogeneous compute, and the ability to monitor electricity consumption and power consumption of heterogeneous compute is in its infancy. And also, I don't think that Nvidia is in the current competitive environment very incentivized to improve the situation.

**Tom:** You mentioned fleet-wide profiling here... What changed, and when did it change? When did suddenly we become able to gather CPU profiles from thousands of computers constantly, continuously? I can remember when I was doing more software engineering than I do now, that like profiling was an expensive exercise.

**Thomas:** \[42:02\] So we launched the product in August '21. So at that point was available to everybody. But in general - I mean, Google had something called GWIP, the Google Wide Profiler, since 2010. So Google had internally built a profiling infrastructure for doing fleet-wide profiling since 2010. They were using essentially perf record on a subset of machines and doing statistical sampling, and then post-processing the data, which is not quite what we were doing. So when we started to optimize and decided that the original business model wouldn't fly, we're like "Okay, we want to bring something like Google-wide profiling to other people", But other people have a very different infrastructure. Google is fairly -- everything that matters at Google in terms of CPU consumption is C++. The other languages exist, but they don't matter nearly as much.

Other enterprises, though, have very different environments. They've got heterogeneous languages - Python, Java, whatever - and they can't be bothered to update their tool chains or rebuild everything from scratch, or recompile, and so forth. Google was in the luxurious situation where almost everything was C++, and they could recompile everything from scratch. Other people couldn't. And what we ended up doing then is we realized "Well, there's eBPF now", so we can do a lot of interesting processing at runtime.

And the other thing that we realized is that even though most Linux distros at the time didn't have frame pointers, which made stack unwinding difficult, the C++ compilers in order to support C++ exception handling had been adding exception handling data into the binary. So we could extract that data, and then use it from eBPF to do stack unwinding for native code, even when the frame pointers were absent. And that was something that the industry consensus at the time was you can't do... So we did that in eBPF, and it was a significant lift to that in eBPF.

And then we also added unwinders for other languages in eBPF. So for Java, for Python, and so forth... And it was very grimy work, because you have to go into the internals of the runtime, the internals of the interpreter, of the JIT compiler... But luckily, for historical reasons, we had a team that was very well suited to do so, because we largely came from a low-level security background, so there was a lot of experience with reading other people's code, and reading messy runtimes.

Yeah, so we built that, and then -- so to answer your question, I think clearly the point where this was available to everybody was August '21, when when we launched it... And then it got put into OpenTelemetry a couple months ago, four or five months ago.

**Tom:** But the key unlock here was being able to use eBPF to leverage the C++ exception?

**Thomas:** Yeah, so I think the key unlock was realizing that eBPF can be used to do stack unwinding for high-level languages, and that you can unwind in the absence of frame pointers by leveraging the C++ stuff. And then you still needed to go the extra mile of doing all of this in eBPF, at a time when eBPF was much less powerful than it is today. eBPF -- we were targeting support for \[unintelligible 00:45:07.05\] 416 kernels, and if any... If you look at the evolution of what eBPF can do, it's been drastic. At the time, you had 4096 instructions maximum in your eBPF program, so you were constantly size-optimizing whatever you were doing, you were battling the compiler optimizer, because whenever you disabled optimizations in the compiler for eBPF code, the program would be too large to be accepted by the verifier, and so forth. But the key unlock was eBPF being powerful enough to allow this, and then realizing "Hey, there's this data that nobody else is using, but that's there, and that's ubiquitous." And then also, just rolling up your sleeves and going "Okay, everybody else is afraid of going into the runtime."

But if you want to have a profiler that doesn't require people to do extra instrumentation work, that can just be dropped on a Kubernetes node and give you full visibility into everything that's happening, you need to do the work for the customer. You need to roll up your sleeves. So those were the ingredients.

**Tom:** \[46:11\] Brilliant. Yeah. So once you've got this, these fleet-wide continuous profiles, what can you do with them?

**Thomas:** Well, first of all, you can see who's eating your CPU, and where, and how, and at what time... And you find a whole lot of murder mysteries, where things are happening where you're like "This shouldn't be happening." And it's a bit like switching on the light in a dark basement that hasn't been fully lit in a long time. You just find a lot of grime in the corners.

My favorite part was we had one client running this, and the kubelet process itself was eating a whole bunch of CPU, and also performing stupid quantities of IO operations. And after we understood the profiles properly, what was happening there, is - Kubernetes allows you to have disk quotas for pods. So you can say "Okay, this pod shouldn't exceed a certain disk quota." But the Linux kernel doesn't actually have a good way of enforcing disk quotas, because the file systems are largely decoupled from the kernel. And on a standard Linux distro, the file system doesn't support disk quotas per process. It's just not there. So what Kubernetes will do, in that case, it'll repeatedly, iteratively walk the directory tree of the pod, and then calculate the disk usage. And if somebody, for some bizarre reason, creates a sufficiently large directory tree inside of the pod in the volatile area, then Kubernetes will just spend its entire time running through repeated recursive directory walks, eating up all your IOPS, because if you're in the cloud, you're IOPS throttled, and eating up your CPU time.

And it was gorgeous as a product demo, because you have this existing Kubernetes infrastructure, and people are wondering "Where are my IOPS going? Where's my CPU going?" And you're like "You know, it's kubelet eating." And also the fix is fairly easy at that point. And that was hilarious.

We found a whole bunch of interesting things. You get to learn about the importance of allocators, because then you find that garbage collection allocation is a significant chunk in any fleet; you find how important certain open source libraries are, because in a large enough infrastructure, the biggest open source libraries will eclipse the biggest process. Obviously, because if you have 10,000 different processes running, with different software running, the one common part is everybody uses Zlib, or uses the same compression libraries, and then those will make up a disproportionate chunk of the overall utilization.

And one of the things that we wanted to do while we were still doing the profiling as a SaaS is we had intended to just gather data from different enterprises, and then create performance bug bounties where you can essentially annotate on GitHub "These five lines of FFMPEG globally consume 200 tons of CO2. And we'll pay everybody $50,000 if you manage to make these four lines faster." I still think this would be a brilliant, brilliant thing to do if you just accumulate profiling data from different enterprises into one thing, and then slice the data. There's lots of awesome things you can do.

And I really quite loved the murder mystery aspect, where any big infrastructure you switch it on, you find something weird, and then it provides an easy win. And we had a bit of a product design rule that was 10 minutes to dopamine, and that worked really well, because for an engineer that is rolling this out for the first time, within 10 minutes, they'll usually find something where they're like "Well, this is weird, and this is something I didn't know, and this is kind of cool." So that worked out pretty nice.

I'm still a huge fan of continuously profiling everything, because the overhead is quite manageable, and the insights you're getting are absolutely fascinating. Something goes weird on a Sunday morning, CPU utilization spikes, and you can go back and see what's happening there. That's pretty great.

**Niki:** \[50:00\] I think the thesis from this conversation is that while we can optimize at the cluster level, and node level, and resource request level, at the end of the day it's really the workload level itself that then should not be forgotten when we're talking about cloud environments, because of just the large scale of cost reduction, and resource optimization that can happen at the workload level. And while there are practices in Kubernetes for optimizing, and it is a big focus, I'm -- you know, I used to be a software engineer for applications, like a backend engineer. It wasn't really common place to -- it wasn't commonplace to be optimizing at that level with profiling as much. And I'm wondering, in your experiences, why do we not optimize?

**Brian:** Yeah, I find that people -- I actually did a talk at GopherCon UK two or three weeks ago, which was specifically an intro talk, intro to optimizing in Go... So that's maybe one theory, is people don't want to seem dumb; so they don't want to ask really beginner questions, so they never get started. That's one theory. I'm not entirely sure about that theory, but let's see if we can push that forward.

My next theory is it's just different kinds of people. Some people are like stamp collecting, and some people don't. It's that kind of mindset of really getting into the detail that is often needed when optimizing, and maybe it just doesn't resonate with people.

**Thomas:** I mean, many organizations aren't well set up to surface that data to the right people in the first place. In the sales pitches for our product -- like, clearly, when you're selling a product, you're trying to both have a user persona and a buyer persona. And the user persona, in our case, is the engineer, and the buyer persona is the engineering manager. And what we're essentially telling the engineer - if you're deploying this, you can go and get very, very measurable impact about how you're saving the company money. So this will help you get promoted, this will help you advance your career. And then you're telling the engineering manager, "Hey, really, you're empowering your engineers to make better decisions." And not every engineer needs to use this, because if 10 or 20 engineers get access to all the production profiling data, one of them will just look at it and be like "Awesome, I'm gonna have a field day with us and just go wild."

There's really interesting anecdotal data about when Google rolled out the Google-wide profiler... Two interns stayed over the first weekend and saved Google something on the order of like $50 million a year in compute on the first weekend. So the thing is, you don't need to have every engineer be an optimization person, you just need to have a few engineers that enjoy this, and then they they'll go wild with it. So it's a matter of empowering those engineers that can do it.

And with regards to surfacing the data, we had this diagram where we had the finance department, and the engineers that do application development, and the operations folks, that run the infrastructure, in a triangle. And then it's like finance, dev and ops. And DevOps is about improving the cooperation between dev and ops, obviously, and then I think Cloudability at the time coined the term FinOps, which was largely around getting the operations people closer with the finance people, so they know "Okay, this is how we need to do auto scaling", yada, yada, yada. And really, what we wanted to do is we wanted to push some amount of financial responsibility back to the devs... Because most devs, if they don't care about them saving their company money, they do care about CO2; either/or, I guess. And that was also part of the reason why we showed both estimated dollar cost reduction and estimated CO2 reduction, because you need to motivate people by something.

\[54:05\] And stepping back two, three steps further, the thing that got me really interested in doing optimizer in the first place was I had done sketchy -- not sketchy, but security work in the high-end security area for a very, very long time... And it's a very zero-sum game. There's different countries fighting. There's always human against human, and it's always about human conflict... And the beautiful thing I saw when I looked at the optimization landscape is you can do something that's technically really interesting, something that's economically really interesting, because you're saving people money, and something that's ecologically interesting. And I got really excited about this. And also, this helped us recruit great people... But this enthusiasm for "Hey, dear engineer, you can do something that's great for your career, that's just fun, and that is great for the environment." That's a very compelling pitch.

**Tom:** I want to offer maybe a contrary viewpoint here, looking at it from a kind of -- I guess with a business owner hat on. This is on the topic of "Should we be spending time optimizing the platform, or the applications running on the platform?" When we started this journey two or three years ago, I think our unallocated resources in our Kubernetes clusters were like 40 plus percent, and our average CPU utilization was sub 30%. And being in the industry, looking at the numbers, I don't think they were particularly poor, looking at what most people were doing. I think if you walk into any unoptimized Kubernetes cluster, they'd probably look similar. But that means generally over half - I mean, more like two thirds of the CPU we're buying is sitting idle. And so from a -- this is a point where maybe ecologically that's not that bad, because idle CPUs aren't using huge amounts of energy, but financially it's terrible. Because we've been able to move our allocation rates up to kind of 80 plus percent, and our utilization is now kind of 40%, 50%, through various means. And it's saved us huge amounts of money. But that's all been done without application-level changes; or almost all without application-level changes. So the incentives for the organization to save money haven't necessarily changed the amount of CO2 we consume... Because we haven't really changed the applications, how much energy they use to do their task.

**Thomas:** Yeah, but that's a "yet".

**Tom:** Yet. Yeah.

**Thomas:** We looked at all the cloud optimization tools at the time, and we're like "Okay, there's a million \[unintelligible 00:56:45.16\] Cloudabilities out there." There were large numbers of things that try to help you allocate things more effectively. We spoke to a very large financial at the time that wasn't yet on Kubernetes, and they had an average CPU utilization across the fleet of like 10%. And at that point, you put your hand into your palms and you're like "Yeah, optimizing the code really isn't going to be there." And this is also a problem to some extent of having Google goggles post Google. Because you come out of Google and you have a certain view of what people's infrastructure is like, and then you realize "No, that's not the case."

If you ask the question "What's better to do, A or B?", well, clearly, you need to fix your operations. Let's say I'm overweight and I want to get really shredded. Clearly, I need both exercise and calorie reduction. But you probably want to start with something simple like not eating five bags of chips every evening. And I think the ops analogy is very, very similar there.

\[57:49\] The low-hanging fruit for many companies is just fixing their ops, no doubt. But then let's look at something like Spotify -- and a lot of the ad tech businesses, any business where they're tracking the cost per unit served, like unit cost economics for their product, all of those will largely have most of the ops problems fixed by now; perhaps not five years ago, but by now all of them are well on their journey fixing their ops problems. And then at some point, when your ops problems are under control, there's nothing left to do except the code. And there's still going to be -- if you look at your compute now and you say "Well, 60% of that is wasted in the first place, just by bad ops", so you cut all of that, and then you're left with the leaner material that is just your code... But then there's going to be another 60% you can cut by just fixing the code. And I don't see that as an either/or proposition, really, if that makes any sense.

**Tom:** I mean, I don't think I was presenting either/or, but more of a sequencing. I agree, you need to fix the way you schedule and allocate resources, and there's probably the lowest-hanging fruit... But I'd also -- it's interesting you say maybe five years ago everyone was drunk on cheap VC money, and spending it all on their cloud bill. And that's not the case anymore. Interest rates have changed that. You can't just infinitely buy resources and not worry about how you use them. So yeah, I do agree. Yeah.

**Thomas:** Yeah. I mean, advice to everybody - if you ever start a company that is set to do well when interest rates go up, don't sell it right before.

**Tom:** Yes...

**Brian:** I just wanted to make the point that you have to measure your system and figure out what the slow bit is. We're talking about code, and applications, and optimizing Go code... For a tremendous set of applications, the slow bit is going to be the database; Postgres, or something like that. Not because Postgres is bad, but because it's doing the heavylifting; it's doing a tremendous amount of work. And if you're in that kind of environment, first of all, measure before you start optimizing your Java code, or your PHP or whatever, because it may not be contributing much to the latency and the time... But same story, you've got to do that work, right? There's going to be database-level work, tuning your indexes, and your caches, and so forth. Do that work and your database resource will probably come down tremendously, your database speed will go up tremendously... And then it becomes more important to do the application level code, to look at making that faster relatively.

**Thomas:** I mean, it also depends on what you're doing, right? When I left Google, they were still spending like 3% or 4% of the global fleet on a couple lines in FFMPEG, just transcoding videos for YouTube. I mean, look at the volume of data that is coming into YouTube. There's a lot of transcoding you need to do there. And clearly, different businesses are going to be spending their compute time and their cloud costs in very, very different areas. And to some extent, every business is unique, because the cloud is their shop floor. But this is also where observability becomes really an interesting thing, because if you take the entire -- I mean, if you look at the DevOps movement and their... Was it called the Phoenix Project? I don't know, some DevOps-y pseudo novel, where they took the analogy of the cloud as the shop floor... And it's actually not a bad analogy, because once you look at that, you're like "Okay, if the cloud is my shop floor, I need observability in the sense of I need to figure out what's going on on my shop floor." And if you look at just plain old useful management stuff from the '80s, like Toyota management measuring how long something takes, that's really like - observability is the people that walk around with a stopwatch on the shop floor to see how long a particular task takes, and then making that better.

\[01:01:43.11\] So there's an argument that -- we talk about profiling... Profiling is really just like "I have a hammer." But the job is to make things fast and efficient. If you're anywhere where margins matter, and if you're in competition where margins matter, and the cloud is your shop floor, then managing like -- first measuring where is time spent, where are mistakes happening, making sure that you have throughput through your factory floor at all times... And then making that better - that's just good management, period.

And I think when we talk about profiling or whatever, we're way too focused on individual technologies for how to measure something. It's like "I'm a stopwatch expert." No, no, no. Really, what you need to do is you need to take all this data and then synthesize it into something useful to make things faster, better, more reliable, whatever... Which is also why when we talk about observability pillars, like logs, metrics, profiles, whatever, really what you want to answer the question is either "Why is this slow? Why is this expensive?" or "Why is this not at all?" And everything else is just implementation -- well, just... Everything else is implementation detail, to some extent, because the thing that you want to do is answering those questions.

**Tom:** One of the things you said, one of the beauties of Google scale, and of many large organizations, is you can spend a month or a week saving CPU, and then because the applications run at such large scale, that actually translates into large savings in resources. And hopefully, those savings in resources are more than the salary cost of making that optimization. I would actually argue many organizations are not in that position, and you might spend weeks or months optimizing something for you to save a few percent on a cloud bill that doesn't make up for your salary.

I remember saying to Brian - and this would have been a while ago - doing this math on the amount of time... Because Brian spends almost full time optimizing our code at Grafana Labs now. And we only hit the scale where that made economic sense for us as a business a few years ago.

**Thomas:** Yeah. But what you're really saying is that if I have a single person burger stall, it may not make sense to hire five full-time consultants to monitor every one of my movements.

**Tom:** Or it may not make sense to hire -- if I'm only selling three burgers an hour, it may not make sense to hire an automatic burger machine. I might just want to make them myself and get on with it.

Conversely, one of the things very early on in the business at Grafana Labs - we focused on actually throwing CPU at the problem.

**Thomas:** Of course.

**Tom:** Because if our product had lower latency, had better query response times, that could be a competitive advantage. And the scale at the time was so small that it didn't really matter. We just threw CPU at the problem. And now, thank God we're not in that position where the scale is significant enough that it does make sense to think about it and to have people on staff who spend their most of their time at Grafana Labs thinking about it. But yeah, also keep that in mind when you're recommending optimization strategies.

**Thomas:** Right. I mean, clearly, your size matters, and your scale matters. And I don't think I would recommend that to everybody at all. Clearly, you start thinking about these things once your margin starts mattering, and you want to optimize your margin, and once your cost starts mattering to the point where you want to spend time on this. And for most businesses -- I mean, it's not a top-line growth thing.

**Tom:** From a business perspective, obviously, yeah, I agree. But so many of the individual kind of motivations you talked about for why engineers might want to use this product, or use these technologies almost fly against that. I've had so many examples of engineers wanting to do big optimizations... "Oh, we've reduced it by 30%." And I'm like "Yeah, but that's $30. You spent six months doing that. Does that really matter?"

**Thomas:** But I think the interesting thing is that this does not argue against the use of that data. Because I think my argument is profiling data allows you to give developers a dollar time. A dollar value for the impact. So what you're describing, somebody spending six months on $30 - if somebody can see this automatically, like "Doing this work will save you $30", then perhaps they can make the decision autonomously. So we're back to empowering the devs to make smarter decisions by giving them an estimate for how much this will save.

**Niki:** Good point.

**Tom:** Sadly, that's all the time we have today... So I want to say thank you to our guests. I want to thank to Brian, to Niki and to Thomas. Thank you.

**Niki:** Thank you.

**Thomas:** Thanks for having us.

**Tom:** Oh, no, it's been brilliant. Thank you. I'm Tom Wilkie, and I want to thank everyone for listening. We'll see you next time on Grafana's Big Tent.
