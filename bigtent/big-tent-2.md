**Matt Toback:** Hello, I'm Matt Toback, and welcome to Grafana's Big Tent, the podcast all about people, community, tools and tech around observability. I'm here with Tom Wilkie. Hi, Tom.

**Tom Wilkie:** Hi, Matt. How's it going?

**Matt Toback:** Tom... I haven't seen you this year. How are you?

**Tom Wilkie:** Well, it is only day four so far of this year, so...

**Matt Toback:** Well, every other year we celebrate, right? Just 10 AM the next morning, with some coffee...

**Tom Wilkie:** Just you and me, yeah. It's a bit early for this classic banter, Matt...

**Matt Toback:** I'm sorry. Well, do you have any big goals for 2022 personally?

**Tom Wilkie:** To still be standing at the end?

**Matt Toback:** Aw...

**Tom Wilkie:** Maybe see a few more people in person would be nice...

**Matt Toback:** Oh, that'd be nice.

**Tom Wilkie:** Yeah. What about yourself?

**Matt Toback:** Well, I got a 3D printer, and I'm hoping to print something.

**Tom Wilkie:** Ah, print more 3D printers.

**Matt Toback:** Right. It's the year of 3D printers --

**Tom Wilkie:** On the desktop.

**Matt Toback:** The year of 3D printers on the desktop, yeah.

**Tom Wilkie:** Indeed, yeah.

**Matt Toback:** Well, today we're talking about continuous profiling, and we're joined by Frederic Branczyk, co-founder and CEO of Polar Signals. Hello, Frederic.

**Frederic Branczyk:** Hey. Thank you for having me.

**Matt Toback:** It's so nice to talk to you. So I think we're gonna go a very high level and low level view of continuous profiling, and just kind of get a handle on what that is. But I guess maybe start with just a little bit of intro and background about yourself before we jump in.

**Frederic Branczyk:** Yeah, so I think where everything gets interesting about continuous profiling is when I initially joined CarOS as one of the first people here in the Berlin office, and I pretty much immediately started working on Prometheus. That's actually how I ended up meeting Tom as well.

Basically, everything in the intersection of Kubernetes and Prometheus was my area of expertise and everything that I had been working on at the time. As I said, everything in that intersection was kind of what I was doing, and the reason why we were doing that at CarOS was - if you're familiar with CarOS, our mission was to secure the internet. And the big thing that CarOS was trying to tackle was automatic updates. And why Prometheus was so important in that was that we needed to know whether things were working before, during and after an upgrade, and then potentially roll back updates, or stuff like that.

**Matt Toback:** You wrote the Prometheus Operator, didn't you, Frederic?

**Frederic Branczyk:** That's right, that's right.

**Matt Toback:** Oh, wow.

**Frederic Branczyk:** I mean, co-authored, but yeah... One of the two original authors, yes. I'm actually still the maintainer of the Kubernetes integration in Prometheus to this day. Until recently, I was also tech lead for all things instrumentation in Kubernetes, so really, everything in that intersection - either I've created the tools, or I've at least left my fingerprints on them.

**Matt Toback:** Frederic, what was your before Prometheus and before Kubernetes? What did you find interesting? Because I always feel like there's this before and after, particularly with Prometheus maintainers, where the world opened up and it was all different. Where were you BP?

**Frederic Branczyk:** Yeah, that's a great question, actually... So I've always been into infrastructure. When I was 15 I actually started my first company, which was just like a consultancy, you could call it. A young 15-year-old, I thought I was gonna solve big problems, and stuff, but every time I wanted to solve something, I always found myself really frustrated with infrastructure tools. So I inevitably always ended up working on infrastructure tools.

\[00:03:45.23\] In let's say the first half of my career actually I focused a lot of my energy on security things. I worked in security research, threat detection, things like that. A bit of key management services... So yeah, that past was actually what initially caught my attention about CarOS, because of the securing the internet... But at the time, Prometheus was super-new, and CoreOS had just pivoted into the Kubernetes direction, and I felt like however I could get my foot in the door was how I was gonna get into that company. It was a problem set that I was very interested in regardless. It was infrastructure nonetheless, right? So that's kind of how I got into that. Prometheus and observability ultimately was what made me stick around.

**Tom Wilkie:** Very cool, very cool. How did you go from Prometheus to profiling then?

**Frederic Branczyk:** Yeah, that's a great question. So end of 2018, CarOS had been acquired by Red Hat at this point, and I was already at the end at CarOS. I was kind of leading all things observability within CarOS, and Red Hat didn't really have a strong observability team, so I was kind of tasked with leading that for OpenShift then. That's essentially what I did, and I kind of started to become the architect for all things observability at Red Hat. And I don't know, I think I just read this paper by Google, that basically every continuous profiling project/product is somewhat inspired by the Google-Wide Profiling paper, where Google described how by always profiling absolutely everything in their infrastructure, they actually have the knowledge to do something about resource usages. More importantly, they can actually understand what would be the biggest wins.

Google described in this paper that they were consistently able to cut down on infrastructure costs every quarter using this. And from some other Googlers I heard that some of the numbers were even multiple percentage points every quarter. So there were kind of multiple things that got me super-interested in this. First and foremost was like I wanted this tool. At this time, there was really nothing out there that did this, and I wanted this because I was working on these super-performant, sensitive pieces of software, Prometheus and Kubernetes, and I just felt like I could have used this -- Tom, you can probably even relate to Prometheus performance problems, right? Just around when Prometheus 2 got released, it was so, so performant-sensitive we had to be really careful about all the changes we did in the storage, and if we had had this type of software, I think we would have had a much better time back then. I think it over time still stabilized, but I think it would have been really useful.

**Tom Wilkie:** I remember -- was it 2019, Frederic? ...you and I gave a keynote at KubeCon, and you predicted the rise of continuous profiling, I think, back then.

**Frederic Branczyk:** That's right.

**Tom Wilkie:** So are you just kind of on a mission to fulfill your own predictions?

**Matt Toback:** \[laughs\]

**Frederic Branczyk:** Yeah, it's like they say, if you wanna predict the future, you've gotta build it yourself, right? Maybe this is a case of that. But yeah, essentially, after I read that paper, I felt like --

**Matt Toback:** We're lucky you didn't predict something diabolical.

**Frederic Branczyk:** \[laughs\]

**Matt Toback:** That's next.

**Frederic Branczyk:** There's always time. \[laughter\] After I read that paper, other than wanting a tool like that, because of my experience with Prometheus, I felt like I was in the position to build this tool. I had worked with a lot of data over time. So I put together this barely compiling, barely working proof of concept that I also very creatively called ConProf (you know, continuous profiling), and I shared that as part of our predictions for what's to come for observability in 2019.

\[00:08:08.10\] And yeah, I guess in 2020 when the Corona pandemic hit, I think just like there's still what people call the great resignations, or I forget what the word was - but I feel like I was in the same situation where I saw this opportunity and this gap in the market... And at the time, when I decided to quit Red Hat, there wasn't really any company solely focused on this. I think there was maybe Google offering sort of a tool in this space, but really, it was very open still. So I felt like there was an opportunity here, and so I started the company, Polar Signals, to kind of make it my full-time job.

**Matt Toback:** This is my lack of understanding, but where does it fit in sort of like when someone would start to instrument continuous profiling? What is something that they would probably do just before, and then what is a thing they would do after, as far as the lifecycle of the team?

**Frederic Branczyk:** Yeah, that's a great question. I think the evolution is essentially -- or the one example that people always understand really easily is previously we did on-demand profiling. Let's say you've seen an increase in resource, let's say CPU usage, and you do take a one-time profile to try and figure out what's using more resources.

**Matt Toback:** So like running a traceroute, right? You're like "Okay, at a point in time. I'm gonna go see what's happening."

**Frederic Branczyk:** Yeah, exactly. And continuous profiling is essentially doing this all the time, not just at this particular one point in time. And I think it's always helpful to understand what CPU profiles actually are. There are a couple of different types, but essentially the ones that we concern ourselves with are sampling profiles. And what this means is that we just (let's say) a hundred times per second look at the current stack trace of the program. And based on the stack traces that we're observing, we can statistically infer how much time was spent in these functions, because we have the stack traces, right? And that's really all that CPU profiling is - just the aggregation of the stack traces that we've observed over time.

So now that we kind of understand this, doing this all the time also starts to make sense, because what our program executes is not always the same thing. It depends on user input, it depends on probably an infinite amount of variables.

So always doing this is kind of the equivalent of going from like Nagios checks that we do individually, to Prometheus monitoring, where we always monitor this as time series over time. I find that this is often a good analogy. This allows us to do a whole lot of really interesting analyses on this type of data. Because we have all of this data over time, now we can compare the entire lifetime of a version of a process to our new rolled out version, for example. Or we can compare two different points in time. Finally, we can answer this question, and the first time we implemented this and were able to start using this, we were just so mesmerized that we were just clicking around in the web interface \[unintelligible 00:11:35.17\] that we can truly understand what was different at this point in time with our process, versus this point in time.

Let's say a CPU spike, or a memory spike - we can actually down to the line number understand what was different in our processes. What was being executed, versus what was not being executed. So this is super-powerful, and it's essentially an extension tool of the other already useful observability tools that we have, but it shines a different light, a different aspect of our running programs.

**Tom Wilkie:** \[00:12:12.08\] What kind of overheads are entailed if you're constantly dumping the stack of the running application?

**Frederic Branczyk:** That's a great question, and it's maybe the number one question that we get when we have people interested in this. I'll talk a little bit more before I concretely answer that. Essentially, we understood that this was going to be a really big concern by people, because people already do metrics, people already do logging, people already do tracing, and people are already concerned with the overhead that that has. And profiling was traditionally often looked at as a heavy operation.

Now, sampling profiling was the first kind of (let's call it) innovation that helps with this, because we can adjust the sampling rate, we can look 100 times per second at our process, we can look 50 times per second at our process, and that of course changes the overhead... But ultimately, actually the biggest reduction in overhead that we were able to gain was by fundamentally changing the way that we're obtaining the data. And today we're doing this using eBPF.

Before eBPF, the canonical set of tools on a Linux machine that \[unintelligible 00:13:28.07\] is the perf subsystem in Linux. And this is a great set of tools, but as with so many tools, it does so much more than we need. As a matter of fact, before we went into eBPF, we actually did a proof of concept just using perf. But once we started using eBPF and really only captured the data that we needed in kernel space, and then only every ten seconds essentially exporting it from kernel space, that's where we saw almost an order of magnitude reduction in overhead.

So we're seeing less than a percent of overhead in CPU usage, while being able to easily reduce -- most companies that we work with are easily able to reduce somewhere between 10% to 30% of CPU time. So it's almost always a win that we've experienced.

**Matt Toback:** Is this something that pretty much any team could take advantage of, or is this something that there's specialties within any org or any teams that would focus on this?

**Frederic Branczyk:** That's a great question, and it's also something that we focus a lot of our energy on. With the Parca project, there are basically -- the Parca project is kind of divided into two main parts: the storage, and the API and query engine, and so on. This is really just that; this doesn't concern itself with collection of data. And the interface for this is the pprof format; this is kind of an open standard that Google developed, that is essentially a representation of stack traces, as I talked about earlier. Kind of an optimized representation of stack traces. And because we have this kind of open standard for communication, actually anything that can produce pprof-compatible formats can write to the Parca storage. And the Parca Agent, the kind of collection piece that uses eBPF only happens to produce pprof, and then writes that to a Parca server.

The eBPF piece, essentially - this is where we're trying to create as much language support as possible. We started with native languages, so like Go, C, C++, anything that compiles to native machine code... Because this is pretty much exactly the way that we get memory addresses out of eBPF. So literally, the way that code is executed if \[unintelligible 00:16:00.24\] are present - I don't know how much we wanna get into the nitty-gritty details, but basically, when code is executed, there are registers that you can use to jump up the stack, essentially, so that you can kind of figure out which functions were being executed. If those are present, then this is super-easy. The Go compiler by default enables those. Every major company that we've talked to, at some point had a dispute whether to include them or not, and pretty much everyone has concluded debugging is much more important than shaving off a little bit of your binary size. So please include your debug infos in your binaries.

\[00:16:49.29\] Basically, long story short is native code is pretty easy to profile, because that's exactly how it's being executed on machines. It gets a little bit trickier with interpreted or JITed languages like Java... But JITed languages actually are a little bit easier, because at the end of the day, they do still produce machine-executable code, and so we just need to kind of get that mapping from memory addresses to the symbols somehow out of the runtime. But all of those do require specific integrations, so that's something we're working on extending.

And there's also a bit of a middle ground... So there is a standard defined in the Linux Kernel that says you can write a file to temp/perf, then the process ID .map, and this is essentially a file where any process can write of itself the mappings from memory address to symbol into. And this is useful, for example, for JITed languages. Node.js natively supports this, so all you need to do is add that flag to your Node.js app and we can already profile it.

But the whole point of the Parca project is essentially to make everything zero configuration. You shouldn't need to change anything about your setup, and you should automatically get profiling. That's kind of the philosophy of the Parca Agent.

**Tom Wilkie:** You mentioned Parca there a few times... How does Parca relate to ConProf?

**Frederic Branczyk:** Yeah, we kind of skipped over that part... So after we spent some time at Polar Signals understanding the space, the technology, and working with a couple of first users and customers, we learned a ton, and we compiled all of that knowledge into the now open source Parca project. Essentially, Parca is the evolution of the ConProf project. There are a lot of things that came out of the ConProf project that influenced how Parca is today. For example, before we went into eBPF, we actually didn't want to concern ourselves with collection of profiles at all. That's why we have the pprof format as the interface.

What we did initially was we just scraped pprof profiles from the Go pprof endpoints, and then used that to write into the storage. So that was part of what came out of the ConProf project, and is still part of Parca today.

**Matt Toback:** When you were starting the project, was there a lot of debate as to which cute animal you were going to use as your logo? Because I looked at it and I was like, "Wait, there's no parca." It feels like it should be the penguin, or a puffin, or...

**Frederic Branczyk:** Yeah, actually this is still kind of in discussion. I think we just haven't spent enough time on it. I think we all want a mascot or something...

**Matt Toback:** \[laughs\]

**Frederic Branczyk:** We've thought about a polar bear, or we've thought about a gopher that has a parca on, or something... There are a lot of ideas, yeah.

**Matt Toback:** It's the hidden dark side of any software, or particularly OSS software, is the name and then the logo.

**Frederic Branczyk:** Yeah.

**Matt Toback:** \[unintelligible 00:20:02.06\] would be awesome.

**Frederic Branczyk:** Yeah. The name actually worked out pretty nicely. Of course, we spent a little bit of time on the name, but at the end we also just decided on a name. But I think the very first article that was published was like "Get your parca", or something like that, and someone put a header picture of someone in a parca... So yeah, it kind of worked out.

**Break:** \[00:20:26.19\]

**Tom Wilkie:** You mentioned the eBPF and how you moved there for performance optimizations, engagement, better performance, basically... I haven't really looked at eBPF a lot myself, but I understood that the language you compiled it down to, the bytecode that it executed, were pretty restrictive. You couldn't have for loops, and things. So how do you do things like working the stack in eBPF?

**Frederic Branczyk:** Yeah, that's a great question. You basically need to make everything limited. If you have a for loop, it can't be variable, but you can define an upper bound, for example. Let's say for stack traces we just say the stack trace is allowed to have a max of 127 entries, and that's where it will stop. So that's as far as we'll go. But actually, I've come to kind of appreciate this, because it means we can actually guarantee the number of instructions that are potentially added as overhead.

We actually know -- I forget what the number is right now, but let's just put a number on it... 10,000 instructions are potentially executed when the eBPF program is called. And we use the perf subsystem for this, and it kind of works on an overflow basis, so that when the CPU isn't doing anything, we don't look at the stack trace either. So only when actually time is being spent on the CPU, only then are we potentially adding those 10,000 instructions. I'm just choosing a number there; I don't know what it is off the top of my head.

**Tom Wilkie:** No, that's pretty cool. I didn't know you could do that, if I'm honest. \[unintelligible 00:22:02.19\] And another thing I remember when I was looking at eBPF - I mean, I was looking at it 4-5 years ago, when it first came out - was that the toolchain was pretty restrictive. What are you writing your eBPF scripts in?

**Frederic Branczyk:** Yeah, so there has been a huge amount of innovation and evolution in this space... And I am by no means an expert, but the newest evolution is revolving around something called BTF, the BPF Type Format, if I'm getting this right... And essentially, what this does is -- part of the problem of eBPF was you needed to have kernel headers installed, and the program would be compiled at runtime, actually. You would also ship a C compiler or something with your eBPF program, and it would compile with the kernel headers on the hosts. And the BTF support essentially removes this necessity; there's an intense amount of complexity involved, but essentially what it does is it replaces the structs with those of the actual host when it's loaded. So this doesn't happen at compile time anymore, but there's kind of a meta layer on top, that also does conversions for a kernel struct, so that we can write portable code, compile it once... And this is actually what the entire initiative is called, "Compile once, run everywhere." (CORE)

This is actually pretty neat, because now we only need to compile it to BPF bytecode, and distribute that. Parca Agent is written in Go, so we just embed that using native Go functionality for embedding, and then we load that program. This does require a relatively new kernel, like 5.2 I believe, but actually, everyone who runs on cloud providers, we haven't had a problem with this... And it's definitely the future.

**Tom Wilkie:** \[00:24:07.00\] It sounds like dynamic linking for eBPF almost.

**Frederic Branczyk:** Sort of... Specifically for kernel headers, because most of the time that's what we're gonna be interacting with. We're reading something out of a process struct.

**Tom Wilkie:** So I guess can this tolerate evolution in those structs in the kernel?

**Frederic Branczyk:** Yes, exactly.

**Tom Wilkie:** Very interesting.

**Matt Toback:** So was the move to -- or not the move, but the prevalence of cloud providers the straw that broke the camel's back, to where if eBPF has been around for 4-5 years, then all of a sudden it becomes easier for everyone to use it? Because it feels like it's a technology that's been around, that now all of a sudden becomes important, where maybe before it was a little bit more esoteric.

**Frederic Branczyk:** I think it's just like with so many other communities - the tools are evolving, the problem set that we're solving with it is evolving... I think this is still relatively novel, to do this with eBPF. The cool thing about eBPF is you can do almost anything with it. The fundamental things you could already do previously - you could write kernel modules, but it was incredibly complicated to distribute those and load those, and so on... And it's kind of just making it easier and easier to execute thins as -- I think someone described it as serverless for the kernel.

**Matt Toback:** Is it Web 3?

**Frederic Branczyk:** Let's not get into that... \[laughter\] But I think the possibilities that that opens is kind of a good parallel, because you can write a lot of things with serverless paradigm. And it's similar with eBPF, you can read a whole lot of stuff out of a running Linux Kernel, and I think people are still also kind of discovering what's useful and what useful things can be done.

**Matt Toback:** I guess this is a question for you, Tom, as much as Frederic... But as this becomes more prevalent, does this displace any tools that we currently rely on? Or is this something that's purely additive?

**Tom Wilkie:** I mean, I can see this displacing -- you know, if you're doing manual profiling right now, which we do, this would kind of simplify that process, and democratize it so that it's more accessible. The thing I'm really keen on with continuous profiling is when compared to, say, something like distributed tracing, this is just much easier to adopt. As Frederic said, you drop it in, it should work with most things, and more and more things over time. You don't need to change your application, you don't need to instrument it, you don't need to worry about that one service that didn't propagate the context correctly. This should work with everything, with relatively low overheads. I can see this being more like logging in terms of popularity than tracing.

**Matt Toback:** So would there be a decision point where if you were thinking about implementing distributed tracing or this, you might choose continuous profiling instead and just leave tracing aside? Or are there still cases where you need both?

**Tom Wilkie:** I don't think it's an or. I don't see this displacing distributed tracing. This is definitely not the soundbite, or definitely not gonna be the title of this episode. \[laughter\] But I can see this being an end, but I can see maybe the order in which you do things shifting with time if continuous profiling continues to kind of gain in popularity.

**Matt Toback:** Or you've just invented a new category, continuous tracing. \[laughter\]

**Tom Wilkie:** Tracing has always been continuous... I mean, Frederic, what do you think? Do you agree?

**Frederic Branczyk:** Yeah, we actually have a couple of really cool demos... And not just demos, things like workflows that we actually apply ourselves, where we have both. Let me start with that. It's definitely not mutually exclusive. They're definitely harmonizing really well together, actually. So something that we've started doing is we put our function names into spans in our distributed traces, and this way we can immediately jump from a distributed trace to continuous profiling data that kind of tells us everything about the CPU time that we've seen spent in this function.

\[00:28:09.20\] So now, typically we find a performance problem with distributed tracing and we see "This span was particularly long in this case", but why? That's actually the question, right? And we usually then went ahead and started manually profiling, at least before continuous profiling, and we had exactly the problem that continuous profiling solves, which is we never know whether we're gonna catch the process at a time when it's actually spending a lot of time in it, right?

So just by immediately being able to pull up all the data ever collected about time having been spent in that function is an incredibly powerful workflow, and it totally composes; it's not mutually exclusive.

**Tom Wilkie:** Very cool. So you talked about the overhead on the application that's being profiled; you talked how easy it is to get it to profile, and collect all this information. It sounds like it's gonna generate a lot of information. How do you store and analyze that? What are the resources and costs involved in doing so?

**Frederic Branczyk:** Essentially, this is the other part of the Parca project. The API, the storage, and so on. And to be entirely honest, in a way we're also still figuring it out. We've definitely gone through several iterations of storages, and we get better with every iteration. It's starting to look like a purpose-built columnar store; I think you could call it something like that. In a way, similar to if you squint, you could call the Prometheus TSDB a columnar store. This is kind of in a similar realm, although we're definitely dealing with higher cardinality, or at least we want to, because we wanna be not constricted to -- we wanna be able to continuously profile CI runs, or even serverless executions, things like that. We're very conscious about not having to care about cardinality in any way. So that's why we're spending time on going down this columnar store path.

And yeah, it's an incredibly complicated problem, and we've kind of gone through -- at first, we thought... The typical performance advice is "Store something in the way that you're going to use it." And so we actually in the beginning started storing everything in the flame graph data structure that we are eventually going to render it into... But the problem was when we then started to merge or compare these, it started to become incredibly costly in terms of not just CPU cycles, but also in memory allocations, we've found... Actually storing the individual stack traces ended up being much cheaper, and so we kind of pivoted towards that direction.

Then the other part, other than just the stack traces and the values connected to those - there's a lot of metadata involved with this: function names, file names, line numbers... Basically, not as much, but kind of a fraction of the amount of code that is involved. And if we look at Kubernetes, that involves millions of lines of code. So the amount of metadata definitely shouldn't be underestimated.

I think with that we've kind of figured out how we're gonna do it. It's essentially a key-value store that we request huge amounts of keys simultaneously from, and in a way, we've built kind of hyperscaled joins in a distributed database, just based on key-value stores.

**Tom Wilkie:** Very cool.

**Frederic Branczyk:** So that part we've worked out pretty well, but the columnar store type value store is definitely something that we're still learning with.

**Tom Wilkie:** \[00:31:57.04\] Very cool. So what kind of orders of magnitude are we talking about here? If I'm monitoring -- say I've got a couple hundred machines and I'm tracing... Let's say there's a Kubernetes cluster, 30-40 pods on each one... Say I'm tracing all of my applications a hundred times a second; am I gonna be worried about my network bill, or...?

**Frederic Branczyk:** So the network is interestingly not so bad. It's more about gathering the data and then compressing it in a way that we'll still be able to read it back efficiently. It's a really similar problem space as Prometheus, where a lot of the resources are spent with memory, so that we can keep CPU time low, and disk IOPS low.

I can't really say the amount of resources that this is gonna need, because this changes almost every day... So we've gone from maybe a hundred gigabytes now, down to maybe 20 gigabytes, but we have a lot of plans to reduce this even more. And as I said, it kind of improves almost every day.

**Tom Wilkie:** Nice, nice. I guess this also impacts how you might make a business out of this; what you're gonna eventually one day bill for, and what your margins will be on that. I know it's always a good topic to ask about how you intend to build a business around this project, so what are your thoughts in that area? What are you doing at the moment?

**Frederic Branczyk:** I think it's kind of the very typical -- or I don't know if it is typical, but I think it is to you, because it's essentially the same thing that Grafana does... We intend to offer those as a service, so that you don't need to worry about anything about this, and you can focus on your business. We take care of storage, we take care of scaling... And maybe there'll be a couple of features on top that are interesting for enterprise customers, but for sure, running this system - it's a highly distributed system that involves, as you've said, a lot of data, so it's not a simple system to run. I think people will appreciate if they don't have to.

**Tom Wilkie:** And is that impacting the community adoption of Parca? If it's a complicated distributed system, are you seeing that hampering people getting started with it?

**Frederic Branczyk:** Actually, Parca itself is kind of -- you can see it as an analogy to Prometheus. It's like a single, statically-linked binary that you run on a machine, and it scales as much as that machine scales. Then the service that we're running is kind of a distributed system that scales beyond a single machine.

**Tom Wilkie:** I see. So a bit like Cortex to Prometheus.

**Frederic Branczyk:** Yeah, exactly.

**Tom Wilkie:** And the system you've built for Polar Signals - that's not part of the Parca project.

**Frederic Branczyk:** Yeah, I think it may be eventually, but I think -- as I said, the Parca storage evolves very drastically, and the distributed storage even more drastically. We just need that freedom right now to experiment with various different technologies, and I think it would be too confusing on the community to make that public right now.

**Tom Wilkie:** No, of course. Of course.

**Matt Toback:** I'm kind of curious, the community aspect... So the last -- was it almost two years? Two and a half years since the first issue, or since it was released? How has the community's desires for the project either aligned or differed from where you wanna drive it? Has there been any points where there's been dissonance in that, or what's that look like?

**Frederic Branczyk:** I think in the very beginning I wasn't able to spend much time on it, so that very much reflected itself in the state of the project... So it didn't really get a whole lot of adoption until we did this revamping of evolving it into the Parca project. As I said, it barely compiled, it had a very poor storage that barely worked, and all of these things are getting a lot better now.

\[00:35:58.29\] I think the most evolution that we saw was actually through working with Polar Signals on early users and customers, and all that feedback that we got here. I think that was really the most useful in understanding what people actually need from this kind of thing... Because we had our own ideas, because we are users of this system, but things like latency optimizations - we thought it was going to be useful for that, but we're working with e-commerce companies for example, and for those companies it's huge. They actually don't care that much about cost saving in their infrastructure; they care way more that they can increase their conversion rates by having lower latencies. Saying this now, it sounds incredibly obvious, right?

**Tom Wilkie:** Yeah.

**Frederic Branczyk:** But before actually having worked with a customer like that, we weren't so sure.

**Matt Toback:** So then what is your ask, maybe even going into this here, of the community? If that's one of the places where they were able to dispel one of the assumptions that you had - maybe arguably in pursuit of the same end goal, but hinged on a very different idea... What would be an ask that you would make of the Parca community for 2022?

**Frederic Branczyk:** I think the biggest ask we always have kind of goes back to what Tom touched on earlier, is like "What are the languages that people actually want supported most?" Again, we have an idea, and we know the Java ecosystem for example is huge, so we're definitely already working on Java support, so that you don't need to restart your Java apps at all, or anything about your deployment; right now, you need to add a Java agent to be able to profile it, but the whole point is that you don't have to do anything. And after that, it's a little fuzzy for us what truly the next most popular language is.

We have the Stack Overflow - they do these questionnaires once a year, where they figure out what the most popular language is... But is that really the most popular language for those companies that care about optimizing their cloud builds, or care about performance? We don't really know that.

**Break:** \[00:38:01.10\]

**Matt Toback:** So Frederic, let's say I'm bought in, and I wanna adopt this in my company. Let's say it's such an easy example as an e-commerce company that wants to close more sales at any cost. How would you help me advocate to my leadership, to my manager? All of it feels kind of like icky to say, but help me explain it in a way that they would care, that doesn't have to do with the tech.

**Frederic Branczyk:** Yeah. I think we essentially have three things that people care about solving with this type of software. The first one is the one that we've touched on a couple of times today already, and it's cost savings. Basically, if you go to your CFO, the calculation is simple. If this product costs less than it's going to save us, then it's kind of a no-brainer.

The Google paper has shown this initially; that was part of the initial inspiration, but we keep seeing this as well - simply by having the data, you can actually do something about it.

**Matt Toback:** And where does that cost come out of? What budget is that getting pulled from?

**Frederic Branczyk:** Essentially, it means that you're going to be spending less on your cloud builds. So the same team that spends money on the cloud builds is the one that's also spending money on this product. So far that we've seen, it becomes a fairly simple conversation to have... Because everybody wants to save money, right? And especially those that don't necessarily have the expertise to build something like this themselves.

A lot of the hyperscalers have built systems like this; as I said, Google even wrote a paper about this. We know that Facebook has a system like this. Netflix has something kind of similar; I've heard from people at Twitch, a lot of companies have built something like this, but especially those companies that are -- let's call them more traditional companies, that don't necessarily have their background in tech; they may not even be capable of building something like this, or have no interest, but they still have a huge potential gain.

**Matt Toback:** Yeah, yeah.

**Frederic Branczyk:** \[00:40:05.17\] That's kind of reason number one. Reason number two is what we talked about last, which was increasing conversions. When I talk to frontend engineers, they all know about this, but essentially when an interaction is faster than 100 milliseconds, it feels instant to humans. And in e-commerce, this is a very closely tracked metric, because it means the faster their system is, the higher their conversion rates are. And there's a lot of studies about this that this is actually true. I won't get into that, but I guess the easy way to say this is if a system is fast, it's more enjoyable to use for us, in a way. I think everyone can agree on that. For them, it's not just about saving money, it's about making more money.

**Matt Toback:** Yeah.

**Frederic Branczyk:** And then the last one - you can talk about incident response. It falls more closely into the traditional observability use cases, where as I said earlier, we are able to truly say "What was the code that was being executed at this point in time, versus this point in time?" So latency spikes can be debugged like this. Memory spikes can be debugged like this. \[unintelligible 00:41:14.14\] a very classic one that -- we've had several calls with lead engineers and their engineering manager, and the lead engineer is stressed out, because they've been chasing this \[unintelligible 00:41:26.04\] for several weeks, and every time they look away, \[unintelligible 00:41:29.12\] and they start over again.

So anything about increasing availability... I don't really like using this word, but it's often used in this case, which is reducing mean time to resolution; basically, how fast can you troubleshoot something. Because as we said earlier, it's complementary to our existing observability tooling. It just allows us to understand different aspects of our running programs.

**Matt Toback:** So it's kind of the trifecta, right? You save money, you make more money, and then when things go wrong, you get a backup faster.

**Frederic Branczyk:** Yeah.

**Tom Wilkie:** You lose less money.

**Matt Toback:** You lose less money. \[laughter\]

**Frederic Branczyk:** Yeah.

**Matt Toback:** I like it. Tom - and then I wanna ask you - so I'm kind of in... Not that these decisions are mine... What's the hold-up for you? Why isn't this something that we're already doing?

**Tom Wilkie:** We use ConProf internally. And I think we're not using Parca just because we haven't gotten around to it yet. We do use it; I don't think we quite use it everywhere yet, but I know for the big Loki service that we run, we're using a lot of ConProf. I know the Tempo team are using it.

And this actually kind of nicely moves us on to the next question... You know, the podcast is called Big Tent, and you talked a little bit earlier about how you've aligned the function names so that you can go from traces to profiles really easily... And you know that's something really dear to my heart. What other of these kind of associations or experiences or transitions or whatever you wanna call them - links - are possible with this kind of work?

**Frederic Branczyk:** Yeah, I think we can once more talk about this keynote that we gave at KubeCon, because if I'm remembering correctly, one of the things we were saying was that metadata was going to be key for these kind of associations from one type of data to the other. Let's say jumping from metrics to continuous profiling, right? And we were incredibly intentional about aligning the data model in Parca as closely as possible with Prometheus, so that it nicely integrates with existing setups. So we can actually \[unintelligible 00:43:39.28\] just like with logs, for example; you kind of do the same with Loki.

The metrics have the same labeling scheme as continuous profiling data, so it's super-simple to jump from let's say a latency metric of one process to the CPU profile of the same process, at the same time.

\[00:44:04.03\] The query language and everything in the storage engine was specifically designed so that when you query some timestamp, it would choose the closest one to it, so that it actually hopefully aligns best...

**Tom Wilkie:** Prometheus style, yeah.

**Frederic Branczyk:** Yeah, exactly. For you, this may sound obvious, but it's not necessarily so obvious.

**Tom Wilkie:** I just think for me this sounds like good taste. \[laughter\] So that's what you've done in Parca, and how you've tried in Polar Signals. There are other projects in this space, right? Do you know who else is doing this? What other techniques are they using?

**Frederic Branczyk:** So yeah, this has been definitely really interesting. And in a way, some people get scared by this. I'm actually maybe more motivated by this. As I said, when I started this, there was really almost no other company doing this. I think now there are like five continuous profiling startups out there. Several of the big vendors are trying to get into it. I think Instana has a product for this, Datadog has a product for this... There are several open source projects, like Profefe, Pyroscope... One that's actually technology-wise really close to what we're doing called Optimize Cloud. They were recently acquired by Elastic... And they're essentially -- at least in the collection part, they're doing something incredibly similar. They're using eBPF to collect this data with incredibly low overhead.

Their entire backend is closed source, so I really don't know how that works. I assume it's gotta be something kind of similar. Most people converge towards similar solutions given enough time.

But yeah, these are definitely -- it's become a really hot space. And as I said, for me this is really encouraging, because so many people have left their well-paying day jobs to pursue this opportunity that there's gotta be something there. At least the engineers that left their well-paying jobs were willing to spend years of their life on this; there are probably some people willing to spend some money on it.

**Tom Wilkie:** One of the things I'm also very keen on - you know, when I joined Grafana Labs four years ago now (wow), Grafana Labs only had data types for metrics. And now we have data types for logs, for traces, visualizations and experiences for those. Have you given any thought to a data source for tracing, and like a Parca data source?

**Frederic Branczyk:** Yeah, definitely. It's definitely something that we want to do. I think the biggest reason why we haven't yet is because it's still changing so rapidly that I feel like any additional integration we have right now would be kind of a burden, and would slow us down. And we're starting to settle on some things... But once we do that, I think it's definitely gonna be time to have a Grafana plugin for Parca.

**Tom Wilkie:** Well, let me know when you're ready for that, because we'd love to help.

**Frederic Branczyk:** Awesome. Sounds good.

**Tom Wilkie:** I'm gonna change to a different topic if that's alright... We talked briefly about the Parca community that's growing around this, and it occurs to me that Parca is a new project... So how did you go around building a community? And you've been involved in multiple different communities - the Prometheus community, the Kubernetes community... What did you learn and what did you do differently with the Parca one?

**Frederic Branczyk:** Yeah, so I think as with founding Polar Signals, I think I wanted to learn from other past experiences. With Polar Signals - I'll get to Parca in a second - one of the things that exploded when we announced our funding was our company culture; it went a little bit viral on Twitter, and that was heavily inspired by my past experiences at companies. So we wanted to do exactly the same thing with the open source project. As you mentioned, I was involved in the Prometheus project, and the Kubernetes project, and several others, and I wanted to be really intentional about the things, removing all of the -- in SRE land we always call this toil. All of the things that doesn't really produce value by doing it manually all the time, so that we can focus on actually creating value.

\[00:48:22.25\] A small-sounding thing is our documentation, which is kind of templated throughout with versions. So everything in the release process is entirely automated. When we tag a release on GitHub, that automatically triggers the release pipelines, it automatically publishes the changelog, which is a manual process in the Prometheus project, for example... It then pushes the container images to a registry... And if and only if the container images have been successfully uploaded, it redeploys the documentation and retemplates everything with the latest version. This way, literally, the process of doing a new release is creating a Git tag, and it's like one click on GitHub. That way, I think we've created 20-25 releases in the two months that Parca had been released... And this is only possible because we can truly only focus on producing value. And all this other stuff is completely automated.

So that was super-intentional, and we did spend a lot of time on it, but now we're saving a lot of time on it. So this is just kind of one of those learnings. There are definitely several others, but this is one that I'm personally very excited about, because it means I don't have to do boring work. \[laughs\]

**Tom Wilkie:** One of the things we tried really hard when we launched Loki and when we launched Tempo was to try and be really open and accessible as a development team. So things like monthly calls for the community, and doing all our development in the open on GitHub - this was one of the things that was very dear to my heart; I love that style of working. Do you do similar things in Parca?

**Frederic Branczyk:** Yeah, we have kind of Parca office hours every two weeks. Those are at 5 PM UTC on Tuesdays. I think it's next week, if I'm not mistaken... But you can check out the Parca.dev website and it'll be under the community section. You can find it there. And yeah, exactly, this was also one of those things that I wanted to be very intentional about. We're also now having a very accessible instant messaging system. We use Discord, that is rising in popularity, an open source project, and I just find it a joy to use... Kind of similar, going back to what we said earlier - it's incredibly high performance and really low on resource usage, so it's a joy to use. And they write a lot of blog posts about how they make this happen. They're a really performance-conscious company.

**Tom Wilkie:** I one hundred percent agree. I love Discord as well. That's really cool. Do you have any advice for anyone who wants to launch their own open source project and build a community around it?

**Frederic Branczyk:** So the thing that I learned in my experience is everyone always craves that kind of instant success with open source projects... But I've actually learned that sticking to something and going with it for the long run - you're just so much more likely to actually produce something useful, because you'll get user feedback, and something popular.

\[00:51:53.29\] The ConProf project in the beginning was not very well visited, the documentation wasn't particularly good... I just never spent a whole lot of time on it, but still, it grew to 800 stars or something like that, simply because every month or two I did another commit, or something. So it really helps to just stick with it. As long as you're solving something that you're genuinely interested in, I also don't have a problem with doing that.

**Matt Toback:** Are there other projects that you're watching that are very similar to Parca, that you feel aligned with, or that eventually might join forces?

**Frederic Branczyk:** I think the projects that do exist in the ecosystem do some things fundamentally different, so I don't really see projects merging. Where I do see a potential for collaboration is on open standards and wire formats, for example. So we already know about the pprof open standard that Google created, but it has some shortcomings and it's not necessarily created for the continuous profiling world. It does fit the traditional on-demand profiling a little bit better, although it can be done, for sure... But I think there is space for different formats there, and I can definitely see the value in projects sharing that.

**Matt Toback:** And I know it's an awkward question, right? It's like, "What other projects?" and you're like "There are no other projects. There's only one." \[laughter\]

**Frederic Branczyk:** Definitely. And as I said, that actually excites me. Competition I think is a good thing.

**Matt Toback:** Yeah. I mean, Tom, even in our world, Thanos and Cortex and the places where that merged and diverged, and intertwined...

**Tom Wilkie:** I think it made both projects better.

**Matt Toback:** I think it did too, yeah.

**Tom Wilkie:** We took a load of influence in Cortex 1.4 era from Thanos. Thanos uses our query scheduler and our testing framework. These two projects are better because of that competition.

**Frederic Branczyk:** Yeah.

**Matt Toback:** I completely agree.

**Tom Wilkie:** So - wrap-up question now... What's next? What's next for you, Frederic? What's next for continuous profiling? What's next for Parca? What's next for Polar Signals? What's gonna happen?

**Frederic Branczyk:** Yeah, we're eagerly working on getting our product out to \[unintelligible 00:54:11.23\] so that everybody can enjoy using it. Hopefully, that's going to happen sometime in 2022. We plan for it, at least... \[laughs\] I said it publicly now.

**Tom Wilkie:** Did you say it here first?

**Frederic Branczyk:** Yeah, I think so.

**Matt Toback:** You heard it here first.

**Tom Wilkie:** I think our race is to get this blog post edited and out before you get your project to \[unintelligible 00:54:31.11\]

**Frederic Branczyk:** \[laughs\] Yeah, that's definitely a big goal for us. And then of course, increase -- I think we have yet to truly see the vision come together by actually supporting, let's say the majority of the popular language platforms. Because that's truly what will give us that system-wide profiling experience where you drop the agent onto your Kubernetes cluster and everything automatically starts to get profiled in a meaningful way. We can already capture stack traces from a Java process, but it looks kind of trashy right now. But the idea being that no matter what you start profiling, everything has meaning... And that we can actually merge all of this data together and see what is the number one stack trace using CPU resources in our infrastructure.

**Tom Wilkie:** Very cool. Very cool. And finally, those 2019 predictions you made on stage at KubeCon - any of them you'd like to revisit, any of them you'd like to slightly amend?

**Matt Toback:** We can do that...?

**Frederic Branczyk:** \[laughs\]

**Tom Wilkie:** Yeah, we can do that...

**Matt Toback:** Oh, boy.

**Frederic Branczyk:** I think I'm actually kind of sticking to them. If one thing I were to add - and we're kind of already seeing this, so I don't know how much of a prediction this is... I think columnar stores are going to rise in popularity much more. We see ClickHouse becoming kind of popular... But I think there are a range of other ones that I'm really excited about. For example, Influx IOx looks incredibly promising. They're doing some really exciting things.

**Matt Toback:** And ClickHouse has been around for ages, right? It almost reinforces your point saying "Stay the course and just keep building things that are strong."

**Frederic Branczyk:** I think they just raised an incredibly huge series A, series B, or something like that... Yeah, I think it's kind of a testament that they're solving something worth solving. And as you said, they've been around for a very long time, and a lot of people weren't paying attention then.

**Tom Wilkie:** Yeah, I couldn't agree more. Thank you so much for spending your afternoon with us, Frederic.

**Frederic Branczyk:** My pleasure.

**Tom Wilkie:** Pleasure to have you on the podcast.

**Matt Toback:** Thank you so much, Frederic.

**Frederic Branczyk:** Thank you.

**Matt Toback:** Sadly, that's all the time we have for today. Thanks to Tom Wilkie and our special guest, Frederic Branczyk. I'm Matt (2xT) Toback and I wanna thank you for listening. You'll see 1xT Mat soon. We'll see you next time on Grafana's Big Tent.

**Outro:** \[00:57:04.03\] to \[00:57:26.24\]

**Tom Wilkie:** You know what we didn't do? We have a regular feature, Frederic, that we like to do every week.

**Matt Toback:** I had that thought...

**Tom Wilkie:** Yeah, and we didn't do it this week... It's Dashboard of the Week. So Frederic - this was designed for podcasts, this regular feature...

**Matt Toback:** Yeah.

**Tom Wilkie:** What's your dashboard of the week?

**Frederic Branczyk:** I think the one dashboard that I actually look at every week is our web traffic, to see what has longtail of our social media engagements, and stuff like that.

**Tom Wilkie:** And could you just describe how that dashboard looks like visually? The colors it uses, the shapes, these kinds of things...

**Matt Toback:** Yeah, it's really not all that fancy. Are you serious right now, or...?

**Tom Wilkie:** No, not remotely. \[laughter\]
