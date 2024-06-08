**Justin Garrison:** Hello, and welcome to Ship It, the podcast all about what happens after you git push. I'm your host, Justin Garrison, and with me as always, is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** I'm good. How are you? How's your Sunday going?

**Justin Garrison:** It's Monday, by the way...

**Autumn Nash:** Oh, dang it... It feels it's Sunday.

**Justin Garrison:** We are recording on Memorial Day, a day off for us in the United States... But yeah, it does feel a Sunday, because tomorrow is back to work, back to school. So...

**Autumn Nash:** \[unintelligible 00:01:12.28\] It's a Mon/Sunday.

**Justin Garrison:** But that was a three-day weekend, so FYI...

**Autumn Nash:** It's the only Monday that doesn't feel a Monday.

**Justin Garrison:** Yeah.

**Autumn Nash:** And it hasn't sucked.

**Justin Garrison:** But don't worry, it feels a double Tuesday tomorrow...

**Autumn Nash:** When you have double the email...

**Justin Garrison:** Yeah. The people that were either out of the country, don't have it off, or just were deciding to catch up on a Monday... Yeah, you get to figure that one out. So it'll be fun. This is our 16th episode ever since the reboot of Ship It, and we just wanted to talk to everyone and let you know that we are adjusting the format a little bit. Thank you everyone for sending in feedback, and for letting us know what you did and didn't about the show, and recommending topics... All of those things have been awesome. We've been reading all those emails. But we are going to change up the format just a little bit to help the streamlining of episodes for us to record them... And also because we kept feeling we were pushing people we're interviewing into smaller schedules; either the interview would go long, and the episode was an hour and a half long, or we were trying to tighten them up and say "Oh, we can't talk about that really cool thing that you do... So let's just ignore it and then move on." We don't want to do either of those things, so we're actually going to cut out the beginning links of the week segment that we were doing, and it's going to be part of our normal rotation for outro sections.

So we're still going to have an outro, which will be a variety of different things... We've had lots of good feedback on those outros. But we'll mix in links of the week, if there's something that Autumn and I want to talk about, or something that we've found really interesting... That will be our outro segment. And that's just how we're gonna do.

**Autumn Nash:** Also, thanks for listening. We've \[unintelligible 00:02:46.28\] such cool listeners, and feedback on Slack, and Twitter, and BlueSky...

**Justin Garrison:** Yeah, it's been awesome just seeing people really enjoying the show come back, and listening to the topics, and then just connecting with different technologies and what people are doing. And that's just fun to see... We're kind of introducing people to stuff, and I love doing that, because we're getting introduced to it, and then we get to share.

**Autumn Nash:** And then when people are so excited about things, it's so much fun when they're "I totally saw that video..." and you're just "Exactly..."

**Justin Garrison:** So this week on the show we have Danielle Lancashire, who is a principal engineer at Fermyon. And Fermyon is a WebAssembly cloud hosting platform that you can run your WebAssembly code, and they will run it for you. And so we get to dive into how that works, what is WebAssembly, and how the backend of Fermyon works, and how kind of you can run this stuff in either the Fermyon environment, or even what they ship as a Kubernetes interface for it. It has a lot of variety there, but if you've never used WebAssembly before never tried it, aren't familiar with it, don't worry; in the outro we also have you covered. We're gonna go over the WTA outro of What The Acronym, and explain some of the stuff... Because there's a lot of terms and stuff in the interview. We try to explain those as well, but we're gonna go into them a little bit more in the outro just as a review, so we can make sure everyone's on the same page. We want to be inclusive and help anyone, even if you don't know the tech, or you're familiar with it.

**Autumn Nash:** I had no idea -- before we were doing research for this episode, I had no idea what WebAssembly was, at all.

**Justin Garrison:** Yeah. It's pretty new.

**Autumn Nash:** I found out it has just as many awful acronyms as Kubernetes, and all of your crazy stuff.

**Justin Garrison:** Yeah, it's just WebAssembly's acronyms are usually in English... And that is a benefit for WebAssembly.

**Autumn Nash:** Not "Let's do everything in Greek, and then \[unintelligible 00:04:31.07\]

**Justin Garrison:** Yeah... Trying to make abbreviations and acronyms out of Greek words is a little bit more difficult to wrap your head around...

**Autumn Nash:** In Kubernetes' defense, all the names sound cool. You're just "But what are we talking about though?"

**Justin Garrison:** For sure. "What is an Istio? I don't know, but..."

**Autumn Nash:** Like, it sounds cool... Like, it's just not giving you a lot of information, but you know...

**Justin Garrison:** Yeah. One thing that is nice is the terms kind of align. Kubernetes is a helmsman; you're "Okay, what does that mean?" "Well, Docker is ships, and there's containers..." Like, "Okay, you drive it." Alright, I see it." But yeah, that doesn't always line up. There's always some gaps there.

**Autumn Nash:** And it's nice that it's themed. It's one of those Pinterest birthday parties you throw your kids, but with technology... Like, you've got a thing going, and you could stick to it... It's cool to make stickers with.

**Justin Garrison:** So let's jump into the interview with Danielle, and then we will come back for the outro and explain some more acronyms all around WebAssembly.

**Break**: \[05:29\]

**Justin Garrison:** Hello, and welcome to the podcast, Danielle Lancashire, a principal engineer at Fermyon. Danielle, welcome. Tell us about yourself.

**Danielle Lancashire:** Hi. You'd think I'd be prepared for these things ever, but I never am. I am by heart a photographer, and then by trade a software engineer at Fermyon, where I work a lot on bringing WebAssembly to the cloud... Which is a sort of interesting concept if you think about it. A lot of people think WebAssembly and hear browser... But it turns out having a portable binary format you can run anyone is kind of awesome.

**Justin Garrison:** And I want to dive really deep into WebAssembly and WASM in general, because portable binaries - an ELF binary is pretty portable, right? How is WASM different, and what does it do?

**Danielle Lancashire:** I mean, an ELF binary is portable across some number of Linux distributions, but the second you want to talk about Windows or MacOS, or moving to ARM, or RISC-V, or wherever else - well, not so portable anymore... Unless you do Apple things, and Rosetta everything.

**Autumn Nash:** The struggle is real.

**Danielle Lancashire:** And so by building to a portable intermediary format like WebAssembly, you can then run those on literally anything. So I have a demo cluster where I take the same WebAssembly application, and I have a Kubernetes cluster that's RISC-V and AMD64. And the same thing just runs across all of them, with no changes. And that is the point where a lot of people go "Oh, wait, I didn't have to spend six months supporting different architectures and testing a bunch of really \[unintelligible 00:11:07.29\] dependencies?" And that's pretty awesome.

**Justin Garrison:** And how does that actually get accomplished? Because you have containers, which can be portable, and you just build them twice for the architectures... And then at the runtime layer says "Oh, I need the ARM, or the RISC, or the AMD, whatever version I need as executable. Give me that one." But that's like - build time, you build them multiple times. And WASM is different, right?

**Danielle Lancashire:** Yeah. With WebAssembly you build once, and then it's the job of the runtime to either build a specialized version for your platform, or just interpret the WebAssembly the same way that Node interprets JavaScript... Although I think it also does some precompilation and stuff, whatever, too. Because you know, nothing is ever truly interpreted these days. So you either - like, with Wasmtime, which is what we use, there's a thing called Cranelift. And what Cranelift does is build optimized local native representations at instantiation time. All lazily, and JIT-ed, but after the first request, everything is pretty fast.

**Justin Garrison:** And that sounds similar to what we had in the past with something like Python, right? So an interpreted language where it's like "Hey, the runtime handles the architecture. And my Python code doesn't have to change to run on different architectures. And then at runtime, it does some compilation for my architecture to run."

**Danielle Lancashire:** Exactly. With WebAssembly you end up being a little bit lower overhead. If you compile C to WebAssembly, I think the most recent set of benchmarks I saw was like a few percentage points slower than running a native binary. But the other joy of that is you can do that for any programming language that can eventually support WebAssembly. So be that Python, Ruby, Swift, JavaScript, Rust, Go... You can truly do this polyglot thing. And when you bring in things like the component model, which is one of the sort of more recent evolutions of WASI, you can even have different components of your application be written in different languages.

For example, if you have a tooling team that writes a bunch of stuff, or doing observability, or interacting with different APIs, or whatever, you can call those from any language that your team is writing software in.

**Justin Garrison:** Can you take a step back and just describe WASI for us too, the interface?

**Danielle Lancashire:** Oh, yeah, I should probably do that. WASI is bringing IO to WebAssembly, basically. So WebAssembly by itself can't really talk to the outside world. It's just an executable format, and you run it in the browser, so you might extend some JavaScript browser APIs into a WebAssembly binary... But it's mostly pure put something in, get something out, not much else.

**Justin Garrison:** And the runtime is responsible for moving that data between, right?

**Danielle Lancashire:** \[14:04\] Yeah. And WASI takes the WebAssembly format, and brings a standard set of interfaces for doing a lot of the stuff that software needs to do. Sort of like POSIX APIs are to everything else, but it doesn't quite copy those, because we bring in a capability-based security model. And so you can say that "At runtime, this WASI application can talk to this set of files, and this set of files only, or make outbound requests to these specific IP addresses."

**Justin Garrison:** Is that enforced in the runtime?

**Danielle Lancashire:** Yeah.

**Justin Garrison:** Okay. So the runtime knows, "Hey, you have this rule set that you're allowed to do, and I'm only going to allow you to do those things", where, again, an ELF binary or a Python script - I basically have the whole machine, unless I'm containerized some other way, where I have to isolate my space with a different mechanism.

**Danielle Lancashire:** Yeah. All WebAssembly stuff is pretty much default deny. And you have to sort of incrementally give it the things you want it to do. And that all happens through a standardized set of interfaces that is WASI, that's a bunch of people coming together and figuring out sort of the right way to do things, both from a security perspective, but also efficiency and standardization of like "What does it mean to talk to a database?"

**Justin Garrison:** Right. WASI stands for the WebAssembly System Interface, right?

**Danielle Lancashire:** Yeah.

**Justin Garrison:** That's that spec that says "Hey, these are the things you need to do if you need to open a socket to listen on a port" or something. You do that through the WASI interface.

**Danielle Lancashire:** Yeah, exactly.

**Justin Garrison:** That's interesting... I never heard about the extensions to be able to write multiple components of the app in different languages to kind of glue those together. And at that point it compiles down to a single WASM binary?

**Danielle Lancashire:** It can compile down to a single WASM binary, or you can have those multiple binaries sort of composed together, so they call each other and sort of expose interfaces that the other thing can talk to. Kind of like a library, but while being language-agnostic.

**Justin Garrison:** The language agnosticism of it limits what you could do, right? Because we have this runtime that's default deny, we have JavaScript and Python in the wild, wild west of what can compile into this... But there has to be some subset of "This just doesn't work in WebAssembly", right? Because those two things aren't the same.

**Danielle Lancashire:** There's definitely a lot of things that you can't just take as they are today and run within WASI. WASI doesn't yet have a standardized threading model. It's something that's being actively worked on this year. It was a really big topic WASM IO a few months ago... And there's sort of a lot of stuff that's early, but coming, but there's not a lot of stuff that you couldn't theoretically do.

**Justin Garrison:** Now, what software are you responsible for? You work at Fermyon, and you have this WASM cloud that you offer... What do you run or what software are you building there?

**Danielle Lancashire:** I've worked on a big mix of both our cloud, and also the bringing WebAssembly to Kubernetes stuff through SpinKube . A lot of that is sort of mine and people I work with domain, which is a mix of -- you know, for Kubernetes things we built out a Containerd shim. So Containerd has pluggable runtime environments; like execution things called shims. And there's a project called Runwasi, that exists to let you write shims that run WebAssembly code. And so we have one of those for running Spin applications, which is Fermyon's WebAssembly - I guess framework is kind of the right word... It's like kind of a runtime, but also kind of a framework, and the community hasn't really standardized on a language for that yet. And then sort of an \[unintelligible 00:17:53.25\]

**Justin Garrison:** Why would I want that? Why do I want to run WebAssembly binaries inside of a Kubernetes cluster? I have containers, and I can put those languages in a container and run them, and the runtime can also handle architecture differences... Because I could build it twice, and then I can pull it down and run it on ARM versus AMD, whatever. What other benefits does a WebAssembly binary have in this case?

**Danielle Lancashire:** \[18:18\] So one of the big ones is density. When a WebAssembly application is doing nothing, it is actually doing nothing. It's a bit of memory, and effectively no CPU. That's pretty different to a lot of other sort of serverless programming models, where you potentially need to be running fairly heavyweight software, and potentially two applications to have that programming model.

In some cases that's like 10+x density improvements, which if you're worrying about cloud cost, or managing your cloud infrastructure, that can make really big differences, especially at scale. But beyond that, the security model and being able to cleanly express what you want your applications to do gives you a lot of really nice benefits, partially for things multi-tenancy, especially if you ever need to run an untrusted application in your environment.

**Justin Garrison:** I've used in the past Cloudflare Workers; it's WebAssembly-based, and they have some really good blog posts on how they would speed that up, and why they use it... And I know there's other WebAssembly companies that use more - I don't wanna say lighter weight, but difference scheduling engines like Nomad, to be able to speed up execution time for scheduling... Because that's like a built-in stack. It's less flexible, but also faster than Kubernetes, in a lot of ways.

A lot of those things build layers of "Where do I want to control this thing?" Because I can control -- again, at the container layer I can say "You're not allowed to talk to this other thing" or "You're not allowed to run this kernel argument", or permissions, whatever... And at the WebAssembly layer I can do at the application, and say "Hey, the runtime will enforce "I can't read this file." And then at the cloud layer, if I'm running all this in an AWS account, I am on top of that... That says "Somewhere in there, have some Linux permissions."
It seems like security is good and layers... But at some point you have to pick the layer that you want to operate in. And I guess the more portable you need to be, the closer you want that to be the application, right?

**Danielle Lancashire:** Yeah. In our cloud we actually use Nomad.

**Justin Garrison:** Okay.

**Danielle Lancashire:** I'm a little bit biased. I'm a former Nomad maintainer. I'm now also a Kubernetes maintainer, but Nomad has a special place in my heart. But sort of security and layers, and the application layer security is really nice when you're building a platform like Fermyon Cloud, or something like Lambda, or whatever... Because we run thousands of applications on every node. Like, looking at that from the Kubernetes, it's like "What? What are you doing? How?" And we can do that partially because of the guarantees we get from that execution layer, because we can map "You deployed this application as team foo, and you only have access to these things, and you've declared that this application should be able to access this database, or this key-value store", whatever. And then at a runtime layer, we can guarantee that they are the only things you can talk to... Which is pretty revolutionary, in a lot of ways.

I worked at CircleCI when we moved from doing a lot of stuff in preconfigured LXC containers to Docker and bring-your-own-container. And the amount of work we had to do to isolate anything sensibly was monumental in comparison to what we had to do for Fermyon Cloud. And trying to understand what anything needed was basically impossible. And now your application self-describes what it needs. It tells us that it needs this thing, and we can go "Yes, you can have this thing." And we can guarantee at deploy time that your application has access to the things it needs to, or doesn't, and bring that conversation much earlier in the loop, as opposed to doing runtime profiling to understand what syscall something is making.

**Justin Garrison:** \[22:15\] Right. And I think that's just that approach of starting with the default deny, and building up is so much easier than -- I mean, not easier, but it's a different approach than what we have with containers, where we're taking all of the kernel calls and we're dividing them, and we have all these namespaces that we say "Hey, \[unintelligible 00:22:30.12\] take a big machine with a single kernel, and then make it smaller, into smaller chunks, and then how do we divvy all that up." And if at some point you want to the more secure thing, and so you're gonna say "Hey, I just need these 10, 20, 30 things, versus I don't need these hundreds of things." And how you approach those things are very different.

Can you walk through -- if I create a WASM binary, what is the process for me going from the spin command to an executable inside of Fermyon? Like, I can call it and I get data back from it. What are all the layers and steps there?

**Danielle Lancashire:** Spin cloud deploy.

**Justin Garrison:** But, I mean, what's the steps? The experience is great. The experience is very much like "Hey, you just hid 100 different things for me."

**Danielle Lancashire:** Oh, yeah. It's an adventure. So we have a frontend application that's written in C\#, of all things, which has been interesting to relearn.

**Autumn Nash:** Interesting...

**Danielle Lancashire:** So that's what I call a frontend monolith. It's the API service that anyone using Fermyon Cloud interacts with, and it's also what serves our UI. Then there's what I lovingly call the backend monolith... And that's a relatively standard Go service that mostly just talks gRPC, and that is basically the Cloud Control Plane. And that's what goes and when the frontend app receives the request to deploy the application, makes sure it's all stored in an OCI registry. And when all of that stuff is done, it goes ahead and gives the sort of backend monolith the manifest after sort of validating permissions, and stuff.

**Justin Garrison:** Is that manifest a Nomad job? Or is it a custom thing?

**Danielle Lancashire:** That manifest is a rendered version of some TOML. It's a data structure that kind of goes "You want these key-value stores, and they're bound to these names for this application. And you want this database, and you should respond to things at this address", that kind of stuff.

Then the backend monolith goes and runs a Nomad job that will go and deploy your WebAssembly app on some subset of the nodes, and that goes and does the sort of precompilation step, getting everything set up, and also goes and makes sure the databases that you wanted exist, and makes sure that your application's token has access to them. And that sort of all gets handled in the runtime layer, so your application doesn't know that there's an authentication tool, for example.

**Justin Garrison:** Handle that outside the app, so I don't have to deal with it as a developer.

**Danielle Lancashire:** Yeah. The idea is you should focus on writing code, and it shouldn't matter what is backing any of those things... Which is a programming model that a lot of people really love, and we've had it repeatedly sort of happen over the years... Especially when sort of Heroku took the world by storm, and did a lot of stuff for you, but left you with a lot of sort of vendor lock-in. The joys of WebAssembly and standardizing on a bunch of these interfaces is that you can get that programming model without necessarily being tied into a platform forever. Because the same thing you've run on your laptop when you type spin up, and by default binds a lot of things to being in SQLite, but will also let you talk to CosmosDB, or DynamoDB, or whatever it is. It works the same way in Fermyon Cloud as it does anywhere else.

**Justin Garrison:** That layer of abstracting what I'm talking to happens at the runtime, right? So the runtime shim is saying "Oh, you wanted a key-value store. I give you a key-value store, you don't care." Right?

**Danielle Lancashire:** \[26:14\] Exactly. Then the rest of the cloud rundown as it is. We have a multi-tenant key-value store that's actually backed by Postgres...

**Autumn Nash:** Postgres runs the world.

**Danielle Lancashire:** Oh, yeah. Postgres, I love. Postgres - you can make it do anything if you're willing to be \[unintelligible 00:26:30.16\] enough.

**Autumn Nash:** The way that you held your chest with Postgres... Like, we're gonna be like, just, we're right here... Like...

**Danielle Lancashire:** It's the best. It deals with all the pesky persistence things, and all we have to do is give it a sensible API.

**Autumn Nash:** It's so underrated, I think, because it's not the cool, hip thing... But it's crazy how many things run on Postgres \[unintelligible 00:26:52.13\] other cool databases...

**Justin Garrison:** Yeah, you don't want your database to be cool. That should be the most boring piece of your stack.

**Autumn Nash:** But people always want the newest, coolest thing in tech, but it's funny, because those newest/coolest things usually are on Postgres anyway.

**Danielle Lancashire:** My personal feeling about infrastructure is that should aim to be as boring as physically possible.

**Autumn Nash:** Can all of tech adopt that? Because it would make our lives so much easier... Like simple, boring, tested things. And then please document it.

**Danielle Lancashire:** Our tech stack is EC2 instances running in an autoscaling group, Nomad, Consule, Vault, and the shiniest, newest thing we have is Traefik.

**Justin Garrison:** That fancy load balancer there... You've got a reverse proxy that's like "Hey, we've got--" And I guess that has a lot of integrations for where it routes the traffic, right? Just like "Oh, this is multi-tenant routing for that", right?

**Danielle Lancashire:** Yeah, Traefik is basically there because it can talk to Consul, it has recently sensible routing rules that it can derive from Consul, and it can generate TLS certificates. And then there's Postgres and SQS. Because SQS is the best service that Amazon has ever released, and nothing comes close to it.

**Justin Garrison:** Someone recently described EventBridge as SQS with a hat. And I was like "Yeah, that sounds so accurate."

**Danielle Lancashire:** Yeah.

**Justin Garrison:** I love it.

**Autumn Nash:** You know what's funny, though? This is gonna sound weird, but in fashion, even the most expensive things are usually simple. They're either good quality simple, or almost weirdly junky, and simple, and expensive... Kind of what we were talking about earlier, when people buy super-expensive stuff from Seattle to go hiking, and then they wear expensive hiking stuff everywhere... So it's funny, I think sometimes the best stuff in tech and fancy stuff in fashion and in a lot of places - you almost pay more for simplicity, because it sticks around longer.

**Danielle Lancashire:** Oh, yeah. I also just love how stable this is. I've been focusing a lot on the Kubernetes things rather than the cloud for a while... And so the last time I meaningfully touched our cloud infrastructure was February, and it just keeps working. And now I've said that, there's going to be an outage the second we finish this podcast...

**Autumn Nash:** Just because you said it.

**Danielle Lancashire:** ...but that's fine, because if I only have to care once every few months, I'm fine with it occasionally being a problem.

**Autumn Nash:** Not just that, but if you build it with simplicity, it's not hard -- well, I mean, I'm not gonna say it's not hard, but it's so much easier to debug when it's not a million fancy things that are not... Like, if you're using something that's been around for a while and used a lot, at least somebody else has come into that problem, and someone on StackOverflow is complaining about it and is gonna give you a couple ideas how to fix it.

**Danielle Lancashire:** Yeah. Our biggest single node scaling bottleneck in the cloud is that because we health-check applications relatively frequently, Consul starts chewing a lot of CPU... Because if there's more than about 8,000 applications on every node, it starts consuming about four CPU cores just to do health checks. It's like, okay, we know that's a problem; we could eventually fix it.

**Justin Garrison:** \[30:19\] How do you do health checks for 8000 applications on a single node, from Consul? Because they're not long-running processes, right? These are all essentially functions, so you have to start them to health-check them, right?

**Danielle Lancashire:** Yeah.

**Justin Garrison:** So you're just constantly starting and stopping all of these workloads on a single node, and saying like "Yup, you're good still"?

**Danielle Lancashire:** Yup. \[laughter\]

**Autumn Nash:** How do you do that efficiently, though?

**Danielle Lancashire:** I mean, partially because running WebAssembly stuff is relatively efficient to begin with. It takes less than a millisecond for a WebAssembly application to start.

**Justin Garrison:** It's essentially forking a process, right? Because the runtime's there, it's always running, and we have this binary that it's just gonna execute... And so we're just like "Oh, fork the process and kill it." Right?

**Danielle Lancashire:** I mean, because a lot of this happens within Tokyo, which is a Rust equivalent of Goroutines. It's a lot of green threads, more than anything else. We don't even need to fork.

**Justin Garrison:** Yeah, \[unintelligible 00:31:12.25\] Okay.

**Danielle Lancashire:** Yeah. It's kind of awesome. The biggest bottleneck for that part in particular is just \[unintelligible 00:31:21.29\] Because a bunch of stuff is kept unmapped, if it actually got purged from memory, then we have to reread it from disk.

**Justin Garrison:** Yeah. That takes a long time when you're used to having something in memory. Yeah.

**Danielle Lancashire:** Yeah. It takes a few hundred nanoseconds...

**Autumn Nash:** No big deal.

**Justin Garrison:** What are you doing in the Kubernetes side? Because you say you mainly deal with both, and your infrastructure for the cloud portion is a known set of interactions with EC2 instances, and some services... But what are you building and doing on the Kubernetes side?

**Danielle Lancashire:** I'm working on two things on the Kubernetes side. One is SpinKube , which is open source, runs every application in a pod, sort of gives you the things you're comfortable with, but also a bit of something new... But the other thing that I'm working on is basically what we call Fermyon Platform for Kubernetes, which is taking a lot of the ways we run things in the cloud and moving them into Kubernetes. Which has its own set of trade-offs, because rather than running every application in a pod, we run one pod per node, which changes a lot of the sort of Kubernetes networking model. I spent a lot of time this week having to very quickly learn the endpoint slices API, and how all of that should work if you're running it yourself.

**Justin Garrison:** That was my first thought. When you say you run thousands of applications per node... The trade-offs there of architecture - Kubernetes typically requires one IP address per pod. And I'm like "You're gonna run out of IP addresses real quick." That's just not going to happen. And so now you're taking that and you're saying "Hey, we can't do one IP address per WebAssembly application, because it doesn't need an IP." Just the runtime needs the IP, right?

**Danielle Lancashire:** Yeah, exactly.

**Justin Garrison:** And so at that point, you take your runtime and shove it in a pod, and then all of the applications that run under that are all under one IP address, but it routes in does all this stuff to say like "Hey, we're just gonna fork or run these threads, running these executables inside of this one container." And now if I'm debugging it from a Kubernetes admin perspective, I say "Hey, I want to get my pod", but that's just at runtime. \[unintelligible 00:33:32.16\] want to get my application, I need to go a layer deeper than that.

**Danielle Lancashire:** Exactly. So my prototype for this runs 3,000 apps on every node, with basically zero noticeable overhead. So at the networking layer, that still means making a service for every application, but an application might be multiple WebAssembly components. Because you might want a different component per set of routes, or something, in a HTTP application, depending on how you want to architect your application. So we create a service per application, and then we bind the runtimes that are running that application to the service, when the application is ready.

**Justin Garrison:** \[34:16\] And those are just pods behind a service. In Kubernetes' case this is like I have a service, and that routes to pods, and then the runtime itself says "Oh, I was called on this path or this host name. Let me start that application for you."

**Danielle Lancashire:** Exactly. And it works surprisingly well. It's one of those things where you think something's gonna work, but then you try it, and it works better than you expected it to.

**Autumn Nash:** And you're surprised.

**Danielle Lancashire:** Yeah. I mean, I generally sometimes have some self-confidence issues... So when this idea that I thought was vaguely cursed, which is "Can we put our cloud in a box?", it turns out the answer is yes.

**Justin Garrison:** And why? Why put your cloud in a Kubernetes box when you're doing everything with EC2 and Nomad now?

**Danielle Lancashire:** It turns out a lot of people really like the programming model of serverless... But between sort of potential vendor issues, cost, whatever else means that they're looking for something else. And WebAssembly, in my opinion, is basically what serverless should be. You completely separate away the runtime from the application, and so you don't need your application to bind to a socket... Which you still have in a lot of other serverless environments. Combine that with WebAssembly's security capabilities, and the fact that it actually does scale to effectively zero, you get this sort of perfect coupling of infrastructure that can support the programming model.

Whereas before we had a programming model, we were shoehorning into infrastructure that couldn't really handle it, and that meant that we were paying huge startup costs if you wanted to run anything in Lambda, or other similar stuff, because you've got to go fetch a container, start a VM, launch the thing, and then set up all your network pathways. And that's in response to a request... Like, I never understood it. I was like, I like the idea of serverless... But I could never get behind ever shipping something in a serverless way. There's just too many drawbacks.

**Justin Garrison:** There's a lot of network and infrastructure overhead to take some data and send it back. And like you mentioned, a container, or a zip, or however it was packaged, it was probably larger than you need for your application piece of it... The runtime being part of that as well. If I have a Python Lambda versus Java Lambda, I have to have that runtime as part of it. Versus compiling WASM into a single binary format that can all be understood from the different languages.

But yeah, and also the VM side of it. Lambda has Fargate, that creates a VM, and then a network, and maybe a container on top of that... And how you isolate all those things is very slow when you actually look at all the components involved.

How would you describe -- and I wanted to bring this conversation this way, because we're almost out of time, but I wanted to get Autumn's opinion... How is WebAssembly different than Java? Because I feel like some of the promises that I hear over and over again in the WebAssembly world have been what I heard 20 years ago in the Java world. And it was like "Hey, write once, run anywhere. We have this VM that will handle all of that machine architectures and stuff under the hood..." And all of that stuff became either bloated, or slow, or people didn't like it, it went out of style... But Java and Postgres still run the world. And that's still very much a thing.

**Autumn Nash:** I'd also like to just put it out there that Java's got considerably faster. Just wanted to put that out there.

**Justin Garrison:** Well, if anyone can upgrade from Java 12. Everyone's still \[unintelligible 00:37:56.14\]

**Autumn Nash:** It's 8... And I think the world will blow up before it fully dies. But that's not the point, Justin...

**Justin Garrison:** \[38:06\] It's like, I remember running Java 4, or 5, or something like that, and we had these Tomcat apps...

**Autumn Nash:** But Java has also done a lot. They've increased how you're going to release every six months, so that problem does not continue happening. Smaller releases, smaller jumps... But honestly, I've never used WebAssembly, so I do not have the context to compare the two.

**Justin Garrison:** Well, that's what I was curious... I wanted to know, either Autumn or Danielle, if his promise keeps repeating itself. Is WebAssembly the new Java?

**Autumn Nash:** Isn't that kind of just tech in general? Everybody wants to do the new cool thing, and then half the time they don't even use the old cool thing, they just come up with a new cool thing, because they're like "I have the most brilliant idea ever, and nobody's ever done it before." And they have...

**Danielle Lancashire:** When I speak at very enterprise conferences, I describe WebAssembly as FastCGI for the modern era... Partially just because that is basically what serverless is. But also, the execution model of WebAssembly is so close to that. Java is always interesting to me, partially because Sun needed Java to succeed, existentially... And then - well, there's a reason why you can't go work at Sun Microsystems. But Java did a lot of really interesting things, and I think part of the reason the JVM could never really be all it could be was because it was so tied to Java the language.

A lot of the stuff now exists will run Python on the JVM, and whatever... But a lot of that is sort of very new, and Java has its own big set of bloaty problems, and people that need to understand how to tune, and work on all of the bits that let the JVM be good... But you don't see the JVM real scaling down effectively. I mean Java Card exists, but that's not JVM, is it?

**Justin Garrison:** I mean, it is a full VM, right? The Java VM.

**Autumn Nash:** I have a question, though... Usually, when you want things to be more secure, there's always that balance between security and usability. Have you ever ran into any of those type of issues? Because you're essentially putting a cloud in the box, right? So what were your main struggles, I guess, in putting it in the box? Where did you have to make the choice of secure versus usability in that process?

**Danielle Lancashire:** So the joys of having already thought through a lot of those problems is that there's not a lot of new trade-offs really when you move from the cloud to putting it in a box. Because the way we think about building configuration and applications in the Spin model, where you're already defining the things you want, and then at an infrastructure layer you're saying "Here are the things you can actually talk to you", and you're mapping those things together, there's not really a whole lot of serious security trade-offs in that bit specifically.

The thing I'm actually really struggling with is finding the right layer of expressive infrastructure configuration, and mapping that back to the developer programming model. It's a really big DX problem more than it is a technical problem, because when you're giving things people to run in their own infrastructure, the sort of combinatorial problem of interfaces to backend things is so much broader. And trying to figure out the right level of "This is something your infra team should own" versus "This is something the developer should own the decision of" is really nuanced.

One of the things that I want to model in our Kubernetes stuff eventually is the concept of a default data store. So in Fermyon Cloud, every application gets access to at least a "default" key-value store, which is really nice to rely on, because it means that every component can assume that it has access to some form of cash. And in building a lot of applications on top of that, it's a really powerful assumption to be able to make. And we want to be able to bring that kind of thing into Kubernetes.

\[42:25\] So what I'm thinking about is, how do you give that kind of magic to someone without making them write a ton of YAML? Because anything that is a configurable knob is something that will be off by default. And then you can't rely on that assumption anymore. And it's really hard to get right.

**Justin Garrison:** Especially generally, right? Because if you could get something right for a specific use case, or for a certain type of developer application, like "Yeah, this is the right way to do this thing."

**Autumn Nash:** What's right for one person, someone else absolutely hates.

**Justin Garrison:** Exactly. And then once you're generic enough that you're like "Hey, everyone should do this..." And I think that that's -- going back to the Kubernetes networking model, right? Because one IP address per pod was right for a certain type of application. And as long as it's one application instance for that network IO, we're fine. But once we're shoving a WASM runtime into that pod, and then say "Now you are 5,000 applications", that model isn't the right defaults anymore.

**Autumn Nash:** Hey, for one person it's a feature, another person's bug.

**Justin Garrison:** The load bearing bugs are the hard part, right? Once someone's like "This needs to work this specific way, otherwise, I go down", that's a problem.

**Autumn Nash:** A million dollar bug...

**Danielle Lancashire:** It's so hard... Having run enough things in production to have a lot of empathy for the tired operator who has been handed this thing by a dev team and been told to make it work...

**Autumn Nash:** That's why I think when people are like "You can't just say it depends", and I'm like "Yes, you can." When anyone speaks in total absolutes, I'm always like "That is some confidence I don't know if I have for anything." Maybe it's just like girl in tech impostor syndrome, but I'm just like, "Absolutes are very hard for me." I'm like "In a majority of cases if you do x and y, but I don't know..." Because I'm not surprised when something is like "For me, this was horrible."

**Danielle Lancashire:** I remember a long time ago being the excited person who would read about something on the weekend, and then want to do it... And I'm now the person who sees someone say that and goes "Not here."

**Justin Garrison:** As long as the pager goes to your phone.

**Autumn Nash:** I was that person for years... And then now I'm just like "Can we just do it as simple and boring as possible?" I do still play with those things on the weekend, and build something random that I won't get paged for, but...

**Justin Garrison:** If I'm thinking of - you know, we want to hire someone, and all of their resume is just EC2 and Postgres, that is an instant hire.

**Autumn Nash:** Dude...! Because they know all the things, right?

**Justin Garrison:** Like "Here's the 10 things I built, all of them with EC2 and Postgres." I'm good like "Good, come on!"

**Autumn Nash:** It's so funny, because I feel like everybody wants to get a job with a new cool thing, and I'm over here like "What is the most boring legacy hole I can go hide in, until this AI thing is over?" No shade to AI. I want to use it, but I just want to go crawl into the most boring legacy, like --

**Justin Garrison:** Have you asked ChatGPT to give you some recommendations?

**Autumn Nash:** I'm gonna go do that, Justin. \[laughs\] Be like "What do you not touch? Tell me the secrets?"

**Danielle Lancashire:** I am I really enjoying the space I found myself in though, where I get to build the new cool, shiny, but with the most boring choices possible.

**Autumn Nash:** Those are the best new, shiny things though. Those are the shiny things I get excited about, because it's like...

**Danielle Lancashire:** I hate the sparkle points, or innovation points analogy, but it works so well...

**Autumn Nash:** \[46:15\] Well, and it also just sucks, because I do think some things are super-interesting about AI... But now I'm scared to even touch those things, because what happens when it bursts? You know what I mean? So it's not even like a shade to the new, shiny thing.

**Danielle Lancashire:** Oh, I haven't even tried ChatGPT. I'm like "I'm too boring for this."

**Autumn Nash:** My boyfriend hasn't tried it either, and I'm like "You work in tech..." And I'm just like "How did you escape it?"

**Danielle Lancashire:** In Fermyon Cloud we have an AI thing that I helped design, and I'm like, I have no personal interest in using this.

**Autumn Nash:** See, I love trying new things and new tools, I just don't know... Like, I very much believe in like use the tool that you need for the job. Every database does not need to be a NoSQL database, as much as I love them. Java is not always right for stuff just because it's my favorite... But I think people just don't know how to -- in art we have this saying, and it sounds horrible, but it's called "Kill your ugly children", and you have to accept when something doesn't work, and it's bad... And people don't want to do that. They're like "I used it once, and now I have to use it for everything." Like, dude, no, you don't. Just put it down, and it'll be okay.

**Danielle Lancashire:** I still remember the first time an art teacher told me to throw away a sculpture I'd been working on. And I was like...

**Autumn Nash:** That's why art kids get great in tech, because we know disappointment, okay? We know having your dreams killed... So we're just like "It's cool. I may have spend my life on this for two weeks, but I'm used to being disappointed."

**Danielle Lancashire:** I just spent 12 hours shaping this eyebrow, and you're telling me to throw it and start again...?

**Autumn Nash:** Yo, art teachers are savage. They'll be like "It's horrible. Get rid of it. Start over." And you're just like "But I just put my whole life -- that's my life's work, and I love it", and it's like "Nope."

**Danielle Lancashire:** Yeah... It's one of the fun parts of shooting film, too... It's this very analog chemical process that sometimes just goes wrong, for completely random reasons.

**Autumn Nash:** Okay, but is that not very related to building software, though? That's what I like, when people are like "You have to have this fancy degree from this fancy school", and I'm like "But do you?" Sometimes having people with other backgrounds, that have -- sometimes, I'm telling you, some of the best developers I know have the craziest theater background, and all that... And I'm just like "They're fire." Their brains work in ways that you're just like "How did you get from point A to point B?" I'm just amazed...

**Danielle Lancashire:** I'm a high school dropout, and now half the world runs myself software. It's \[unintelligible 00:49:05.03\]

**Autumn Nash:** That is badass. Sorry, we're gonna bleep that out too, but I'm such a fan now... I love me a "beats adversity" story. All for it.

**Justin Garrison:** Danielle, thanks so much for coming on the show today. Where can people find you online if they wanted to reach out and chat somewhere?

**Danielle Lancashire:** I moved to Mastodon, because that's where all the cool kids went. But if you go to links.danielle.fyi, you find me in all of the places.

**Autumn Nash:** Come to BlueSky...

**Danielle Lancashire:** I'm also technically on BlueSky... Danielle.fyi.

**Autumn Nash:** Come back...!

**Justin Garrison:** We'll link that in the show notes for everyone, so they can see it. So thanks so much for coming on and explaining WASM and Fermyon's cloud to us.

**Danielle Lancashire:** Yeah. I'm sorry that I am an unprepared mess.

**Justin Garrison:** No, this was great.

**Autumn Nash:** I learned a lot.

**Justin Garrison:** We wanted a conversation to walk through it. It was awesome.

**Danielle Lancashire:** Cool. Well, this has been great.

**Break**:\[50:06\]

**Justin Garrison:** Thank you so much, Danielle, for coming on the show and telling us all about the backend of Fermyon and WebAssembly in general. And it's just such a different mindset when you think "Oh, I'm going to shove 1000 applications on a single instance", compared to back in the day when it was like one server one application, containers, Kubernetes, "Oh, I can get maybe 100 or so." It's like "Yeah, let's just change how this works, and get 1,000 out of it." That's just really cool.

**Autumn Nash:** We talked for so long that I think my computer died... Even after you got off, I was like -- I had so much fun talking to her. She was amazing.

**Justin Garrison:** So for this outro we're going to go into WTA, which stands for What The Acronym, and we just want to explain some of the acronyms that were either in the episode, or just in general around WebAssembly... Because if it's a new space -- it is a very new space for a lot of people. It wasn't even really announced until 2015, when it came out of Mozilla... It was an evolution of Asm.js. And ASM stands for Assembly. It's assembly code, which is the machine code that you can write on, which is usually compiled to your processor... And higher level languages, like "Oh, I don't need to compile to my 8086 anymore. I can compile to any processor." And the compiler figures that side out of it - it was amazing. That was a big step forward in development and how programming works, and shout-out to Grace Hopper for making COBOL back in the day, and having these higher level languages that you can just write once and compile multiple times...
So ASM stands for Assembly, and again, I don't know why... There is an A, an S and M in there, but why those three letters out of Assembly? I don't know.

**Autumn Nash:** I'm not sure.

**Justin Garrison:** But WebAssembly is Wasm, or WASM, and if you're reading it or writing it, usually the acronym is all capitalized. Not all acronyms are fully capitalized. And also, when you're writing WebAssembly out long ways, it's one word, with the W and the A camel cased. So just FYI, to get those things right sometimes. It looks better if you're correct in how you're spelling it.

**Autumn Nash:** It's really cool meeting different people and learning about products, and then seeing where they come from. I wouldn't have -- like, Mozilla came up with that, and just seeing the things that have come out of Meta and all these different places... And then they create something, and then open source it... It's really cool.

**Danielle Lancashire:** Yeah, and really the beginning of asm.js was all about getting a smaller subset of JavaScript. They wanted to minimize the amount of what -- JavaScript is a big language. And how do we take just a small subset of JavaScript, and then we can compile it? And we can take it and we can actually just run it at more native speeds, because JavaScript is an interpreted language. And when you're moving text files around and then trying to interpret it and just-in-time compile it, those are all things that just take time, and it's something that machines, like, hey, what if we compile this up ahead of time, before we send it to a person? We can make the file size smaller, because it can be actually in bytes, not in text, or ASCII... And then also just the machine can read it, and just start executing it. And there's all these steps you can kind of avoid... And then by minimizing all of the JavaScript, from not everything, but a smaller subset, you can say "Oh, you only write a small subset of JavaScript", but then we can compile that and be really fast about it, because we know how that's going to compile into what our runtime is going to execute.

**Autumn Nash:** Not to defend JavaScript - I can't believe I'm defending JavaScript, but... I mean, I think it's because it started off for one use, and then people want it to do so many different things, and to be object-oriented programming, and it just became so much, to do so many things that it just got so big.

**Justin Garrison:** \[53:44\] And WebAssembly has followed a very similar trajectory, where JavaScript was first designed for the web browser, WebAssembly ran in browsers, and it was targeted for browser environments, and how we make web apps faster. And then it kind of shifted into what Node.js did for JavaScript, where it's like "Oh, we can run this on the server", and we can say "Oh, we have a runtime that runs outside of the browser", and "How does that work?" And that's what a lot of the Fermyon and the WebAssembly cloud environments do. We're like "Hey, we're executing code that runs services", and most of the time these are functions, these are more like Lambda functions, or function as a service, where it's just executing one thing and then dying... That's how Cloudflare workers and Fermyon works.

There are some that are starting to do these long-running processes, more like a traditional web server like Nginx... But that gets into the next acronym of the WebAssembly System Interface, which we did mention in the interview. The WASI. It's that interface of how -- it's kinda the Node.js of WebAssembly, of like "How does this thing that is intended to run inside of basically an operating system... Like, a browser is an operating system to many, many degrees. It has isolation, it has all this runtime stuff that's built into the browser... But what if we don't have a browser? What if we don't have Chrome, or Firefox, and so you need another runtime engine that can execute this code?

**Autumn Nash:** That's like when people try to argue if a hot dog's a sandwich or not... And then people have these debates on Twitter...

**Justin Garrison:** People like debating things.

**Autumn Nash:** They really do. Sometimes you're like "Why do you care so much?"

**Justin Garrison:** Those people should just get kids, is my hot take today.

**Autumn Nash:** So they can argue with tiny versions of themselves. I feel like you've been there all weekend.

**Justin Garrison:** \[laughs\] If you like to argue, go have a 7 to 12-year-old, somewhere in there. I'm sure older and younger, this happens, but I feel like there's a sweet spot in there, of like you know that they know enough, and that they know how to argue, but they don't know --

**Autumn Nash:** Does your kid ever say something that feels so much yourself that you feel like you're arguing with a smaller version of yourself, and you're just like "I can't believe I've made you and kept you alive just for you to argue with me and tell me how terrible I am, for keeping you alive."

**Justin Garrison:** And that's when I just say "Go to your room."

**Autumn Nash:** "I'm sorry I fed you..."

**Justin Garrison:** A couple other acronyms here... We did mention Just In Time compilation, JIT... It's a common way to abbreviate that. As well as --

**Autumn Nash:** At least their acronyms kind of sound cool. WASI sounds cool.

**Justin Garrison:** Yeah, it's hard when someone's saying it, right? Because when someone says "Oh, it's JIT-compiled", if you're not familiar with it, you're taking the code and interpreting it and compiling it right there. That's kind of what Python does, right? Python's not running the text files, it's compiling it just in time.

Ahead Of Time, or AOT compilation is what you do with a Rust, or Go, or something that's like "Oh, I'm gonna make this binary, and then we're going to ship the binary out."

WASI Interfaces was tripping me up, because WASI is WebAssembly System Interface, and then there's an Interfaces on top of that...

**Autumn Nash:** It's like an interface-interface?

**Justin Garrison:** Yes, it's like ATM machine... You have an Automated Teller Machine Machine, is how that works... And so it feels a little redundant. But the WASI interfaces is just like general categorization of how your code is going to interact with a wider system. And those are things like input/outputs for streams, clocks, random filesystems, sockets... There's a couple other ones. CLI and HTTP... These are all different interfaces that your application says "Oh, I need the file system, and so I'm going to use that interface", and those get declared in what's called a WIT file. These acronyms just keep -- they're all W's, and they just keep... Kubernetes stuff is Ks, all WebAssembly is W's. And a WIT file is a WebAssembly Interface Type. And so you define that as "Hey, I need to use this interface." And then when the runtime is going to let you run, it says "Oh, you can or cannot access that thing", which has good and bad parts of it, because if I'm using the runtime and say "Hey, I want to interface with the database", then it doesn't matter what the database is on the backend. I need a SQL database. And the runtime can interface and say "Oh, well you can get MySQL, you can get Postgres, you can get whatever I tell you is this generic database thing." And that could be really good from an application developer; you're like "I just need the generic thing", but can also be bad --

**Autumn Nash:** \[58:06\] When you need something specific.

**Justin Garrison:** Exactly. You're like "I need this specific feature, from this --"

**Autumn Nash:** It's always that caveat...

**Justin Garrison:** Yup. It's easy to write and deploy, as long as you fit the mold of what they're providing you. And as soon as something's different...

**Autumn Nash:** Because the second you don't, it's gonna get real.

**Justin Garrison:** Yup. Then you have to control it. Yeah. So for now, the WASI interfaces are categorized in these different types, and your runtime can provide that into you as an application... But those are all still pretty new. Those are all very new. It's like 0.2 specification of these interfaces. So they're still evolving.

**Autumn Nash:** When you said Interface-Interface it just made me think about the fact that JavaScript has three equal signs, and that just hurts my soul every time I see it. A little part of me dies...

**Justin Garrison:** The last couple of things I wanted to talk about was some runtimes. There's Wasmer, which is an acronym --

**Autumn Nash:** Okay, I'm here for how it sounds. Their acronyms are very cute. I don't know if I would guess any of these things from the acronym, but you know...

**Justin Garrison:** And that's why we're here. That's why we're explaining this stuff. So Wasmer is a runtime. So again, you can execute your WASM bytecode... And it's created by the Wasmer company. I actually don't know -- I couldn't find who's behind the Wasmer company, but they make a runtime named after themselves... But they also make WAPM, which is the WebAssembly Package Manager. And this is kind of like a registry of reusable bits for WebAssembly-compiled code. You can think of this as any sort of registry as something similar to maybe a TerraForm modules, or Docker Hub... The downside is this is very, very new, and so when I looked at it, there was only like 1,000 packages out there... And there was only a dozen that looked reasonably useful. A lot of them to me were just like "Oh, I've no idea what that does." It seems like someone just uploaded a package just to see how uploading packages works. So it looks a little bit promising, but again, another acronym that you might want to know, because they have a command line tool WAPM to install packages from their registry.

**Autumn Nash:** I feel like half of tech is algorithms.

**Justin Garrison:** You mean acronyms?

**Autumn Nash:** Oh, acronyms. Ugh... This is what happens when you've been at home with your kids for three days...

**Justin Garrison:** They suck all the think out of you.

**Autumn Nash:** Like, my brain needs to work...

**Justin Garrison:** Well, it has to work for Tuesday...

**Autumn Nash:** I'm putting them all to sleep so early...

**Justin Garrison:** Yeah. "It's seven o'clock. Go to bed."

**Autumn Nash:** Go to bed.

**Justin Garrison:** \[01:00:44.17\] The last one I wanna talk about, the last runtime is Wasmtime, and this one is created by the Bytecode Alliance. And the Bytecode Alliance is a nonprofit that is trying to push the specs forward for what WebAssembly is, what WASI is, and they created Wasmtime as a runtime for WebAssembly. And the Bytecode Alliance - I couldn't tell if they were a sub organization... A lot of them are part of the Linux Foundation.

**Autumn Nash:** Yeah, that's what I'm trying to understand... What is the hierarchy, or the way this is all structured?

**Justin Garrison:** So anyone not familiar -- any sort of nonprofit or foundation that kind of does this stuff, like Cloud Native Computing Foundation, all of the companies that are part of it pay money, they pay a lot of money to be part of it; they get a seat on the board, and they can set the direction for what that foundation does. And so some companies on the Bytecode Alliance board, or a part of the companies that pay into it are companies like Amazon, Cisco, Microsoft, Intel, Docker, Arm... There's a bunch of them. There's a bunch of big names that you've heard of, and a bunch of smaller companies that are really specific in this space. And they pay money into it, so they can have a seat at the table. They can say "Hey, this is a priority for us. We have to make WASI, the system interfaces, really good." Or "We need an interface that does this." And they put the money in, they control the direction for it, and then they also can help add developers and have ownership of some of the projects. They're maintainers, they built Wasmtime... Which is actually a really interesting thing as a person working at a large company. If you want to work in open source, and you want to work as like "Hey, I want to give back to the community", this is one of those ways that usually it happens.

I used to work on the Eks team at Amazon, and a lot of what I did was open source, because a lot of the community was open source-first. And being in that environment makes it really easy to say "Hey, I don't actually contribute internally to the code, I contribute externally in the community, and then whatever I do externally, we pull that back in, so we can use it."

**Autumn Nash:** It seems like more and more that's where it's going, and I hope that's where it continues to go.

**Justin Garrison:** Yeah, there's definitely some larger projects that need that kind of guidance, and really that kind of funding... Because this stuff doesn't happen with no funding. Actually, that leads us right into the very end of here, where our next week episode is going to be with Gina, who runs OctoPrint. And that is one of those completely self community funded, no foundation donations provided to create great software, that she's been creating and building and running for - what was it, 15 years, or something like that? More than 15 years.

**Autumn Nash:** 10, I think.

**Justin Garrison:** She started doing it full-time 10 years, that's right. It was a hobby for --

**Autumn Nash:** But 15 -- yeah. It was a something she started on a Christmas break, I think.

**Justin Garrison:** Yeah.

**Autumn Nash:** Gina is amazing. She talks multiple languages... She is the sole maintainer...

**Justin Garrison:** And not just Python and...

**Autumn Nash:** Yeah. She's just amazing. She's just like "And then I solved this problem, and I've found this problem, and then I made this solution for it." And I'm just like "You are just a legit problem solver." It's amazing.

**Justin Garrison:** Yeah. So thanks everyone for listening. If anyone is around any conferences in June, just a heads up, I'm going to be at a couple of conferences on June 22nd, a few weeks after this goes out, at SRE day in San Francisco, and the 26th and 27th I'll be in Seattle at Cloud Native Security Con. I have talks at both of them, so if you're around and want to say hi, I have some stickers that we can handout, and we just love to meet anyone and see what you're working on and what software you're learning.

**Autumn Nash:** Sneak me in to the security one in Seattle, so we can record an episode. It will be fun.

**Justin Garrison:** Well, we'll have to figure something out. So for sure I'm going to be around, so definitely let me know if you're there, and we will talk to you all next week.

**Autumn Nash:** Bye, guys!
