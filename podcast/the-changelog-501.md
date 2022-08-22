**Jerod Santo:** Alright, today we're joined by Liz Rice, who is the chief open source officer with the eBPF pioneers, Isovalent. Welcome, Liz.

**Liz Rice:** Thanks for having me, Jerod. Nice to be here.

**Jerod Santo:** Nice to have you for sure. So we've wanted to talk eBPF for a while, and now we have you here so - perfect fit. I've heard a lot about eBPF, mostly from Ship It. Gerhard Lazu has had you on the show, the folks from Parca... A lot of people are excited about eBPF. In fact, in his post KubeCon EU round-up, Gerhard said almost half of the people that he talked to are either working on it, using it, or actively integrating with eBPF. So lots of buzz, lots of interest, and you've been working with this technology and talking about it for a couple of years now. Do you want to catch people up? First of all, what is e BPF, and then we'll go from there.

**Liz Rice:** Yeah, sure. So the letters eBPF stand for Extended Berkeley Packet Filter, and I usually just tell people to forget that straight away, because it's not terribly helpful. It tells us something about the history, but it doesn't tell us about what eBPF is today. What it allows us to do is to run programs within the kernel of the operating system. We can dynamically load these eBPF programs into the kernel, and we can use that to change the way the kernel behaves.

\[04:23\] Originally, it was the Linux kernel, there is now a Windows eBPF implementation happening... So I tend to just think about it from a Linux point of view, but it is broader than that... And it means we can customize the kernel, we can change the way that kernel features behave, we can use it to observe what's happening in the kernel... And the really interesting thing, or why it's so powerful is if you're an application programmer, you probably don't think very much about what's happening in the kernel, because you use programming language abstractions that kind of hide that low-level from you on a day-to-day basis. So every time you open a file or write something to the screen, you've got some function that looks like open, or write, or something like that.

Underneath the covers, every time you interface with hardware in any way, the kernel has to be involved. So every time you do any network access, open any files, access memory - all of these things involve the kernel. And with eBPF, we can insert programs into the kernel's behavior, and we can use that to perhaps observe what you're doing. Every time you open a file, we could see that happening, we could see which processes are opening different files. Every time a network packet arrives, we can manipulate that network packet. We can do all sorts of really powerful things to both observe what's happening in the kernel, and even change what's happening. And that kind of changing what's happening allows us to build security tooling, and it allows us to build network functionality as well. So those kind of three areas - networking, security, and observability - are the, I would say, three areas where eBPF is being used most commonly today. But it's super-powerful because of that insight across everything that's happening on the machine.

**Jerod Santo:** So I'm thinking about Docker, because this has been called a revolution. I think Docker was a revolution at its time... And I remember when Docker first came out, and Solomon Hykes and the DotCloud team, and the App.net team that popularized that technology... They're like, "These containers have been in the operating system for a while, but they just weren't accessible. Nobody knew about them; they were hard to use, and Docker really made that simple." Is eBPF this long-lived feature of the kernel that all of a sudden we realized was there and could do things, or is it a brand new thing that's been built into the kernel recently?

**Liz Rice:** So it's a bit of both. It's been evolving for years. I mean, I've mentioned the packet filtering element; that's been around since I think the 90s.

**Jerod Santo:** Oh, wow.

**Liz Rice:** And what we call the extended parts, the kind of modern features that we can now use with eBPF have been added in over the last few years, really. And the reason why it's all suddenly taking off kind of also relates to why eBPF is really powerful. So when you use an operating system - whatever Linux distribution you might be using - it's probably using a version of the kernel that's four or five years old. The distributions don't take, the latest release of the kernel; they wait for a while to make sure that it's stable, and it's been sort of field-hardened.

\[07:58\] So when eBPF functionality and features have been added in over the course of several years, we have to sort of go back to a kernel that's maybe, four years old, to see what people are really using in production today. And those versions of the kernel are now new enough to have sufficient eBPF capabilities that we can do really, really useful things. There's still innovation happening in the kernel, there are still new things being added to eBPF, but those kinds of core building blocks are now available in pretty much every production Linux distribution. And that is why over the last, let's say, 18 months, we've seen this huge explosion in interest. Because it's not just niche kind of features for people running cutting-edge kernels; it can be used by everybody.

But the reason why I said it kind of also speaks to the power of the kernel is now that we have eBPF, we don't necessarily have to wait for a new version of the kernel to change its behavior, because we can use eBPF to do it.

**Jerod Santo:** Right...

**Liz Rice:** Which is kind of mind-bending, but pretty cool. So one of the I think really nice examples of how eBPF can be used is for dynamically mitigating kernel security vulnerabilities. A really nice example of this is something called Packet of Death. So maybe there's a kernel vulnerability that is susceptible to some particularly formed network packet. For example, maybe there's supposed to be a length field, and perhaps if you don't set that length field, or you set it incorrectly, there's a bug in the kernel that doesn't know how to handle it. There have been some instances of this in the past, so it's not just theoretical. And if the kernel receives a packet that's sort of been formed to perhaps set that length field incorrectly, the kernel doesn't know how to handle it, the kernel crashes, and that vulnerability is exploited. And in kind of the traditional world, you would need to install a kernel patch and reboot your machine to no longer have that vulnerability. But with eBPF, you can load an eBPF program dynamically that recognizes "Ah, it's that kind of network packet that we know is a bad idea. We need to just throw that packet away." And you've mitigated that vulnerability without having to actually update the kernel. You're just running that eBPF program. You can load that eBPF program into all of your machines, dynamically, you don't have to affect any of your running applications. It's really, really nice, and really powerful.

**Jerod Santo:** That's cool. You got me thinking about old kernels, because - well, I used to run... Back when I first graduated from college back in the early oughts, I ran a network of Linux machines; it was like mail servers, and spam -- all sorts of stuff. And it was back in the days when we treated our servers as pets and not cattle (you know that analogy), so I had them all named, and stuff. I used a M.A.S.H. theme. I'm not sure if you're familiar with the show M.A.S.H.

**Liz Rice:** Yeah.

**Jerod Santo:** So there was Hawkeye, and Trapper, and “Hot Lips” Houlihan, and Radar... That was kind of actually the fun part; it was when we used to call ourselves sys admins... That was cool and all, and I would always patch them and keep them upgraded and everything, but the kernel itself - I would always let it get outdated, not because I wanted to, but simply because it required a reboot, and I wasn't \[unintelligible 00:11:36.12\] to reboot my production server. And you were talking about how now this has been in there for a while, but people are getting to where their kernel are upgraded enough that they have the features... And I'm wondering if in the days of cattle, of Elastic Compute and Kubernetes and stuff, is the reason why people still run old kernels, is it still that same old, we don't want to reboot? You think that you would just, offload the capacity, reboot the thing, upgrade and then launch a new node, or whatever you're going to do? Or is it more about "I mean, I understand why you want to stay a couple of versions behind... Because this is your kernel. You don't want to be on the latest", but they're generally stable. What are your thoughts on that? Is it still the old "We don't want to reboot" thing, or do you think it's about security, or stability?

**Liz Rice:** \[12:21\] I hope it's not that we don't want to reboot thing, because --

**Jerod Santo:** I hope so too, because that was a long time ago when I used to feel that way.

**Liz Rice:** Yeah, that whole principle of cattle, not pets, is exactly that, that you're supposed to be able to destroy your machines, and recreate new ones, and do it all programmatically so that the state of those new machines is exactly what you intended it to be, and there's no sort of human intervention that means you missed something while you were bringing it up. And I think it's very good practice, in this day and age, to make sure that you can destroy servers and replace them automatically. There's that really great, I guess, phrase or saying about how unless you've restored from a backup, you don't know that you've got a backup. I think the same is true for "Unless you've tried destroying a server, you don't know what your recovery process is going to be." So I think it's accepted good practice these days that you should be bringing new machines and updated machines into the deployment.

**Jerod Santo:** Right.

**Liz Rice:** But that said, they're still going to be using -- you know, they might be using the latest version of a Linux distribution, like Ubuntu, or RHEL, or CentOS, or whatever.

**Jerod Santo:** And the distro itself, like Debian, for instance, stays very conservative on their packages.

**Liz Rice:** Exactly. And they will use a kernel version that is a few years - I'm gonna say old... Yeah, just to make sure that it's stable.

**Jerod Santo:** I'm curious about your perspective on this, related -- so from your \[unintelligible 00:13:54.11\] related with the CNCF, and where you are with your work, and barely being involved in the cloud-native community... There's this whole switch to this new style of operations. And it's where the excitement is, it's where a lot of the money is, it's where the landscape is, and you can get lost in the landscape, right? Like, "Which service do I pick?" and all this. And the world moves much slower than that, so as Changelog person Jerod, I see all the new, shiny, the interesting... We talk about bleeding-edge technologies. The rest of the world moves much slower, and I'm curious, from your perspective, are the people still doing it the old-school pets way? Are there still a lot of those organizations and enterprises? Or has it kind of been to where like, maybe like 80% have moved over to a more modern infrastructure? What's your perspective on that?

**Liz Rice:** Yeah, I suppose my perspective is colored by the fact that I'm so involved in the cloud-native world that I probably see those people who have moved over. I certainly, over the years that I've been involved in CNCF and this kind of cloud-native world, we've definitely gone from, you know, a few years ago, "Oh, amazing. We can find an end user to talk about a thing, too." There were loads of people who were using feature x for project. It's hard to find that sort of big-brand name that doesn't have some kind of modern cloud-based deployment these days, I think...

**Jerod Santo:** Well, that's good news.

**Liz Rice:** \[unintelligible 00:15:29.23\] I'm sure a lot of those people do also have legacy deployments as well, and a lot of what I'm currently seeing - you know, I'm involved in the Cilium project. Cilium is a networking solution, I would say kind of mostly for Kubernetes... But a lot of the challenges we see now are to do with allowing people to coordinate between their lovely, shiny, new Kubernetes workloads and legacy workloads that are running on a BGP network in a data center somewhere. So there's definitely -- people haven't thrown away all those data centers yet.

**Jerod Santo:** \[16:10\] Right. There's kind of like a migration path, but you have to straddle for probably years, because you're not just going to throw everything out and start fresh. That doesn't make any business sense.

**Liz Rice:** It's probably a bit like -- so when I very first got into computing professionally, when I was sort of doing my first job, we were doing things that emulated punch cards, because people didn't... You know, running their giant payroll systems - this was the '90s. It wasn't the 1890s.

**Jerod Santo:** \[laughs\]

**Liz Rice:** The world had invented lots of things that were a lot more modern than punch cards, but it just took people a very long time to migrate away from those really old systems.

**Jerod Santo:** Yeah. Well, I'm nostalgic, so I still pine for the days when we could name our servers. I like a good naming scheme, I love to check the uptime on a server and be like "This server's been up for two and a half years." That always felt good. That's why I would never upgrade my kernels. But I understand... Things push forward, you can't do it that way forever, and there's definitely way more reasons to do it the new way.

**Liz Rice:** Yeah, think of all those security vulnerabilities that are potentially in that old code...

**Jerod Santo:** Alright, you convinced me.

**Break:** \[17:22\] to \[19:53\]

**Jerod Santo:** So I agree that this feature of being able to kind of like hot-upgrade, or patch, I guess, your kernel without about upgrading your kernel via eBPF, modify the way it works, protect yourself from that security vulnerability today, without major downtime, or upgrades - I mean, that does seem like an amazingly revolutionary feature. Is there anything about that though that's scary? It's like, "Hey, go ahead and change the way that things work in userspace." Like, doesn't that seem a little bit like you could also shoot yourself in the foot?

**Liz Rice:** Yeah, people often have that concern when they first hear about eBPF... Here's this incredibly powerful platform that can change the way your servers are operating. And security is certainly a huge concern. So a couple of things to be aware of... First of all, when you load these eBPF programs into the kernel, they go through what's called the verifier, which checks that the program is safe to run. And this is one of the big advantages compared to, let's say, a custom kernel module. Kernel modules - it's just kernel code that just runs; nothing is checking whether they're buggy or not. With eBPF programs, the verifier will make sure that's going to run to completion, so it can't loop forever, it will check to make sure that all \[unintelligible 00:21:22.08\] are safe, it will check to make sure that memory access is safe... And while nobody who works in security is ever going to say "And that means it's completely secure!", but the verifier does a lot of work to make sure that the program is as secure as possible, and certainly can't crash your kernel. That's kind of a guarantee.

So that's one side of the security equation. The other is that you do have to treat eBPF like root privileges. You don't want to allow random people to insert random eBPF programs into your service, because they do have the potential to see literally everything that's happening on that machine. So treat eBPF like you treat root privileges, and be very careful about who you allow to run eBPF programs.

**Jerod Santo:** \[22:21\] So with great power comes great responsibility, as the comics say... That makes sense. So how do you run an eBPF program, or how would you facilitate not running -- you know, who gets to, who doesn't get to. I assume these are standard Unix user tools? Or how does it work?

**Liz Rice:** So eBPF itself is, I'd say, a feature within the kernel. A bit like, I don't know, the TCP/IP stack is a feature within the kernel. Most people probably won't interact with it directly; they'll probably use tools that take advantage of eBPF. I'd love to show people how things work, so I've done talks before that show - you know, Beginner's Guide to eBPF Programming... Because I think it really helps people get a mental model, if they can see some actual code. That's certainly how I learn things; I kind of have to see the real thing.

But the reality is when you write eBPF programs, you are interacting with the kernel and the kernel's data structures, and writing eBPF code does quite rapidly go from Hello World, which everybody can do, to "Okay, how do I safely interact with these data structures? And what am I changing when I change this?" So for that reason, I think most people are going to find eBPF accessible through the use of sort of higher-level abstraction type of projects.

There are a few examples... So Brendan Gregg - who was at Netflix, he's now at Intel - he did lots of work to build some eBPF-based observability, performance tracing tools, and there's a whole array of literally dozens of tools for measuring anything that you might want to measure about how your system's operating. And then we get into other abstractions projects, like Cilium for networking and observability, like Parca for seeing flame graphs of how your -- also continuous monitoring of how your userspace applications are running... There's a tool called Pixie that's also in the CNCF, observing your Kubernetes workloads... Lots of different projects that are using the power of eBPF to give you really advanced capabilities, but in a much more easy to consume fashion than messing with the kernel directly.

**Jerod Santo:** Gotcha. So most of us will benefit from eBPF transitively through tools and projects that are using it under the hood, and providing some higher-level functionality. And those of us who are going to write our own eBPF program as well - you know who you are, right? There's a self-selecting group of people who are very interested at kernel-level things, are very good at them, or can at least learn, and has a use case.

So we were talking about the security angle... The other one that I think of when I think of something that allows you to hook into low-level primitives or low-level kernel space is performance. I feel like you could really slow things down if you do it wrong. Is that the case, or are there also things in there that say it has to be performant, similar to the verifier? How does that work?

**Liz Rice:** Yeah, I mean, it would certainly be possible to write pathological code that would slow things down. Generally speaking, most eBPF programs tend to be small. There's a historical reason for that. There used to be a limit of like 4096 instructions.

**Jerod Santo:** Oh...

**Liz Rice:** \[26:14\] So a few years ago, you only could write small eBPF programs. That limit has now been raised, and you can to all intents and purposes write pretty much anything you like in eBPF.

**Jerod Santo:** Was that pretty constraining for folks?

**Liz Rice:** Yes, yes, definitely.

**Jerod Santo:** Yes. So everybody rejoiced when this changed.

**Liz Rice:** Yes... \[laughs\]

**Jerod Santo:** Because it seems like that kind of constraint might actually be a benefit, at least maybe at first... But now that people are starting to do more with it, I can see where they would feel constrained.

**Liz Rice:** Yes, yes. The fact that you're calling these eBPF programs directly in the kernel can often lead to some really good performance improvements, actually, particularly for things like networking. So as an example of this, for Cilium providing networking to Kubernetes pods - and I need to just back up a bit and talk a little bit about how container networking works...

**Jerod Santo:** Alright, let's do it.

**Liz Rice:** When you create a container, you usually create a networking namespace for that container. So the container has its own networking stack, effectively, and you create a virtual Ethernet connection that connects your container to the host that it's running on. And in Kubernetes, you typically have one of these network namespaces per pod. What that means for a network packet that arrives -- let's say a packet arrives to that machine from the outside world through a physical network card into that machine. And in traditional networking, that packet's got to go all the way through the networking stack on the host, across that virtual Ethernet connection, into the network namespace for the container, and then go through the networking stack again to reach the application. What we do in Cilium - using the power of eBPF, we're creating what we call endpoints, a sort of logical endpoint for each pod. And when that network packet arrives, we can inspect it before it goes through the kernel's networking stack. We can say, "Oh, well, I know the IP addresses associated with that pod, I know where it is, I have its endpoint right here. We can avoid going through the host networking stack and go straight into the pod's networking stack." And while that might not sound very much, it shortens the networking path dramatically. And when you add up however millions of packets, this is one of the really fun things about infrastructure software - these things scale; the impact scales up, and you can see real improvements, significant improvements in latency by using eBPF to shortcut these networking parts.

**Jerod Santo:** There's an old commercial where a guy is running through his office, and he's holding a nickel, and he's jumping up and down... "I saved a nickel, I saved a nickel", and he's just telling everybody he saved a nickel, and they're all just like "Whatever, George..." They're rolling their eyes, they're perturbed. And he runs past these people who are walking through a hallway, who are like C-level execs, or VPs, or whatever, and he's like "I saved a nickel every time we do X", whatever X is. And the two guys look each other and they say "We do X 75,000 times a day." And it hits you that all of a sudden this micro-optimization at scale is a huge win, and it sounds like that's what you're describing.

**Liz Rice:** Yeah, exactly. Exactly. Yeah.

**Jerod Santo:** Okay, so performance, if you do it right, you're gonna end up better off with an eBPF-powered program than otherwise.

**Liz Rice:** \[29:59\] The other aspect of performance - so things like observability tooling... You can hook into these events that might happen very, very frequently, but run this very small eBPF program to count, or take some information about those events, store them in - there's a thing called eBPF Maps; it's a data structure that's shared between all -- it's in the kernel that the userspace programs can access. So you can store this data very efficiently in the kernel, and then retrieve it (I would say) on a leisurely basis, from userspace.

**Jerod Santo:** \[laughs\] Leisurely...

**Liz Rice:** ...because you don't have to kind of do that transition for every event. Perhaps you're collecting that information in userspace every 100 events, or every 1,000 events, so you don't have to -- usually, the transition between kernel and userspace is very costly performance-wise, but by not having to transition for every event, it's much more performant.

**Jerod Santo:** Let me see if I understand you correctly... So in the context of monitoring or observing a program, people would generally take like one out of every hundred, or they would sample, because it's cost-prohibitive... You don't want to bog down the CPU that you're running the program on, right? You want to observe it without affecting it. And you're saying with eBPF, because of the performance savings without having to go back and forth between kernel and userspace, it's so much faster that you don't have to sample, or maybe you sample way more often without incurring the performance costs... Is that what you're saying?

**Liz Rice:** Yeah, that's exactly right. Yes. Yes.

**Jerod Santo:** Well, that sounds cool. I can see why that would be great.

**Liz Rice:** Yeah, so you can see some really powerful metrics, make security checks for every single time that a particular kind of operation happens. And you can filter those events potentially in the kernel. So maybe you want to police which processes are allowed to access which files, say... And there's been a kind of evolution in the way that eBPF programs do that kind of check. It used to be very much based around system calls; we're going to look at those system calls and see whether or not we permit that open. People might have even come across this in the form of sec comp. Sec comp stands for secure computing; it's a pretty old technology... Docker kind of popularized it quite a lot; you had the sec com profiles that you would associate with programs to just limit a little bit of what system calls applications were allowed to call. And that is actually based on BPF. It does use BPF to make those checks. But as eBPF has evolved, we could start looking at things like not just "Is this application allowed to call open on any file, but is it allowed to open this particular file?" More recently, there's an interface called the Linux Security Module Interface that typically has been used for kernel modules, added security checks, but now we can hook eBPF programs to that security module interface, and we can make checks to say, "Is it okay if this user or that process or whatever opens this file?"

We've been working on something called Tetragon, that takes this another step further really, and allows us to filter the path name, so the name of the file that we're going to open. It will filter those events in the kernel. So we're not making the check in userspace for every single file open, we're checking it in the kernel and only filtering out the file opens, you know, just as an example kind of event, that match a particular prefix, for example. So you can make these things, this internal filtering can make these security checks really performant.

**Jerod Santo:** \[34:09\] So let's speak for a minute to the person who earlier raised their hand when I said "If you're going to be programming eBPF, you know who you are." To that person - getting started, or even like language requirements... Is it like a C interface? Can you use various programming languages? Maybe just give the lay of the land for that person who would like to actually dive in and go for the Hello World and maybe go beyond. Maybe point to some of your talks, or somewhere where they start.

**Liz Rice:** Yeah. So you typically need to write two pieces of code. You write the eBPF program itself, that runs in the kernel, and you're typically going to write some userspace code that can interact with that in some way. Maybe you're collecting metrics in the kernel and you're gonna have some userspace code that will retrieve those metrics and show them to the user. Or maybe the userspace program is going to provide some configuration information to the eBPF program. Some eBPF programs, particularly for networking - there's no userspace part involved. For example, if you wanted to do firewalling, you'd typically just load that into the kernel, and maybe you'd only be reporting a few metrics to the userspace.

Anyway... So you've got these two parts. The kernel code - it has to be compiled into BPF bytecode. And at the moment, you can compile from C, and you can now also compile from Rust. So you'll need to be proficient, or willing to at least take a stab at writing some C code or some Rust code.

For the userspace part, you've got quite a lot more flexibility... And this is another kind of area where there's quite a lot of evolution, there are quite a lot of different approaches, different libraries, different frameworks. A lot of people start with a framework called BCC, which has been around for a few years, and it does make it really easy to write both the userspace code and to kind of do things like loading that BPF code into the kernel. BCC will take care of a lot of that for you. But the downside of BCC is that it actually compiles your BPF code kind of in real time. So maybe you write your program in Python, or your at least the userspace part in Python, and when you execute that Python program, BCC will go away and compile your C code and load it into the kernel. That means wherever you want to run it, you would need the C compiler toolchain, which is not necessarily what you really want.

And one of the reasons why they did that is because wherever you compile that code, you need to have knowledge, or the code is going to have to match the kernel data structures on the machine where you're going to run it. And kernel data structures do change from version to version. So if I build some eBPF code on machine A, how do I know that it's going to run on machine B? And one of the big innovations in the last sort of recent years in eBPF is a thing called "compile once, run everywhere", which essentially allows you to compile the code on machine A, and sort of include the knowledge of what the kernel structures are on machine A, and then when you take that compiled object to machine B, there's essentially some automatic work that compares "Oh, well the kernel data structures are slightly different here, so I might need to adjust the code to take account of that" automatically. And that makes it much easier to build the code and distribute it to users without them needing to have like the C compiler installed. That's made quite a big -- it made it a lot easier for people who do want to distribute eBPF-based tools.

**Jerod Santo:** \[38:12\] Which seems like it's most people, because like you said, you have this small group of people/teams who are building the tools, and a whole bunch of users who are benefiting from those tools. Well, those tools have to get onto their machines, and they have to work on their machines. So now you have this cross-platform problem, only the platform is the Linux kernel. So you have these different versions, different data structures... It seems like a definite real challenge, and that sounds like a boon to eBPF people for getting their stuff out there.

**Liz Rice:** Absolutely. It's a real kind of step change. We keep seeing these big improvements in eBPF that just mean that it's more accessible, or the tools based on it are more accessible to the world at large, and that's fantastic.

**Jerod Santo:** What's still painful? Where could the next step change come?

**Liz Rice:** Oh, that's a great question. Some of this is still painful because not everyone is running a modern enough kernel to have all the latest features...

**Jerod Santo:** Especially that instruction set change, right? The Max 4096, you said... That was a recent thing?

**Liz Rice:** Yes, that would be an example, yeah. So if you have a tool that needs to exceed that limit, then yeah, you might need to do some tricks to make it run on older kernels. There are things like the way that you can actually attach programs to different events in the kernel, some of those have evolved and become more performant... For example, you'll see loads of examples of eBPF programs that are attached to kprobes. The kernel probe - it's basically a hook in the kernel. Kprobes preexisted eBPF, but it was for adding tracing probes into the kernel... And it's essentially add a kernel, add a kprobe at the entry to any function, pretty much, in the kernel. "Here's the function name. I want to add some tracing there." And you've been able to use eBPF programs to hook those to kprobes for a long time.

And over time, there's been some more and more performant ways of doing that. The current preferred approach to that is called fentry. It doesn't make that much -- it certainly doesn't matter to anybody who's just using the tool.

**Jerod Santo:** Sure.

**Liz Rice:** Pretty easy change for somebody who's writing the code. But it does -- and like we were saying before, all those nickels, every tiny improvement in the speed of running that program once, it will add up when you've done it a million times. So we'll see things like more performant hooks.

There's also -- I think for folks who are developing eBPF tools, there's lots of innovation happening in things like testing, and code coverage, and sort of instrumenting your code. Getting your code through the verifier is still something of an art, and there's probably more improvements to come in sort of making it easier for people to write those eBPF programs without necessarily having to do such a dance with the verifier. There's a really great quote I read, that described the eBPF verifier as a -- I think it was a "fickle beast", which is quite a nice phrase. \[laughter\]

**Jerod Santo:** That is nice. It sounds like something I'd like to stay away from if at all possible.

**Liz Rice:** It's a challenge though. \[laughs\]

**Break:** \[41:54\] to \[44:32\]

**Jerod Santo:** Okay, so we've talked a lot about what eBPF is. I'm gonna ask you a slightly different question. Interpret it however you like. Who is eBPF?

**Liz Rice:** Oh, interesting question. So, I'm going to answer that with a bit of a story about how I got excited about eBPF.

**Jerod Santo:** Okay.

**Liz Rice:** So I spoke at a DockerCon back in 2017, and I was talking about how containers worked... And I saw a talk by Thomas Graf about the Cilium project. And it talks about how it was using eBPF to create this really cool container networking. I thought, "That is really cool! And yet, it's so far into -- like, nobody can possibly use this, because it needs this cutting-edge kernel at the time." But I thought "That's interesting tech. I'm gonna just keep an eye on that and see how that works."

And then, a few years later, I was working for a security company, and somebody suggested using eBPF -- they'd actually been doing a project outside of work using eBPF on Android for a sort of security-related project, and they're like, "Could we use eBPF to build security tooling?" So we worked on that for a while.

\[45:58\] And in the meantime, I was seeing more and more of this eBPF community kind of building up, more and more people using eBPF in different projects... And Isovalent, which was the company that Thomas and Dan Wendlandt -- Thomas who I'd seen speaking at DockerCon... They founded Isovalent around the Cilium project. And they were facilitating this eBPF community, and I realized that that was -- if I wanted to really immerse myself in eBPF, that was the place to join. And that's why I joined Isovalent.

And since I've been there, one of the things that really -- I hadn't appreciated before I was there was the extent to which Cilium and eBPF have actually been kind of developed in almost lockstep. So there are two maintainers of the eBPF subsystem in the kernel. One of them is Daniel Borkmann, who works for Isovalent, and the other is Alexei Starovoitov, who works for Meta. And yeah, they are the people who kind of drive eBPF's future. And a lot of how eBPF has evolved, certainly on the networking side, has been in order to allow Cilium to build some cool networking feature, we need support in eBPF to enable that. Maybe different hooks into different parts in the networking stack, as an example.

So it was just fascinating to me to see just how much of that the development in eBPF had really been done to enable -- I mean, to enable the platform as a whole, but particularly with this vision of how eBPF could improve networking and facilitate all these really efficient networking features. So for me, that was kind of why I was drawn to that team. The expertise is just beyond comparison, I think, and a really exciting place to be.

**Jerod Santo:** That's cool. So in terms of open source project related to a corporate entity, how does -- I guess where does Cilium stop and Isovalent start with regards to financial arrangements and stuff like that? How does that all work?

**Liz Rice:** So Cilium has always been open source, and one of the things that we did not long after I joined was donate the Cilium project to the CNCF, so that it's got that foundation ownership, so that everyone can have confidence in it as a community project.

**Jerod Santo:** Yeah.

**Liz Rice:** And Isovalent provides an enterprise distribution of that. The way we approached this is that Cilium works -- Cilium open source works. There are plenty of people who are using Cilium at scale; \[unintelligible 00:48:53.20\] you can go and take a look at the Cilium website, and there's a list as long as your arm of household names who are using Cilium. And a good number of those are using it open source. But some of them either need support - that's the kind of classic open source model - or some of them need features that you only need if you're an enterprise, a large enterprise. For example, I've mentioned before about integrating with legacy workloads in data centers. If you're operating your own data center, you are the kind of organization that spends money on software. You want to license software, you want to have somebody who's going to provide some guarantees around that software. So those kinds of features that people really only need in an enterprise environment... You know, some really advanced UI, some really advanced security tooling features that we add on top of the open source project for our enterprise customers. And there are other people -- because it's in the CNCF, there's --

**Jerod Santo:** Other offerings.

**Liz Rice:** ...other people who can use Cilium, or build products on top of Cillium.

**Jerod Santo:** \[50:13\] I love that, because now you're competing on a level playing field; of course, as the maintainers of Cilium, you have that expertise, the street cred, so to speak. So other people have to establish that. But the fact that you can have multiple service providers, or licensors, or offerings that are competing on how well they do that, and not competing over the proprietary-ness of the software that they're running - I mean, that's spectacular for everybody.

**Liz Rice:** Yeah, absolutely. I mean, I'm a big believer in the power of open source in general, and specifically for infrastructure software. Just the sheer number of people who will use open source code - it creates such field hardening that I think for that kind of core capability. Something like how your networking is plugged together - it's really an advantage for it to be open source. And then having is this huge community of people who also feel confident about contributing to it as well, which I absolutely love...

**Jerod Santo:** Totally. Well, if you look at the network stack, or the OSI stack, whichever one you prefer, you want as much competition at the application layer as possible. And collaboration at the lower layers. If we're all reinventing these low-level things, then we're just wasting efforts... And you can find competitive advantages by doing that, but they're going to be just isolated to you, and have all those drawbacks. Or everybody can collaborate at those levels, have all the best minds working on the same thing, pushing everybody forward, and then competing at the application layer. Way more effective that way. I mean, just the way it should work.

**Liz Rice:** A hundred percent. Yeah, absolutely. And we can take lessons from history around this. Back in the day, if you wanted to use TCP, you had to include a TCP library in userspace. And nowadays, we fully expect that you're going to run TCP, you're just going to use the kernel services to get that TCP connection going... And I think it's completely sensible to extrapolate from that direction of travel, and expect that more and more of the infrastructure software will not just become that kind of commodity open source software, but also that more and more of it will be handled by the kernel.

**Jerod Santo:** Especially now that the kernel authors don't have to handle it, right? With eBPF you have more and more kernel-based offerings that are happening by people who are not Linux kernel - or we can talk about Windows kernel as well - core maintainers. The innovation can happen in a much broader group of folks because of eBPF.

**Liz Rice:** Yes, yes. And it gives us the ability to have -- you know, people are using Linux for just the broadest range of different purposes, and the Linux kernel has to work on IoT devices, and desktops, and data centers, and probably the Moon. I don't know. In fact, I think Linux does run on the Mars...

**Jerod Santo:** I'm sure it does, yeah.

**Liz Rice:** ...one of the Mars landers, yeah. So Linux, the kernel itself has to be super-flexible and very backwards-compatible. But you can do much more innovation and bespoke things using eBPF, which - you know, \[unintelligible 00:53:34.19\] of innovation.

**Jerod Santo:** There's definitely a parallel between browser tech and kernel tech in this way. I've heard people compare eBPF to be like the JavaScript of the Linux kernel...

**Liz Rice:** Yes.

**Jerod Santo:** ...just because of the JavaScript's relationship to the browser. And I can definitely -- when I first heard that, I was like, "Man, I don't know about that." But the more I think about it, the more that it does make sense as an analogy. And all of the innovation that happens in the browsers by people writing JavaScript libraries that eventually those things prove themselves out, like jQuery for instance, the way it does a lot of selecting and stuff - all of a sudden, that stuff gets brought back into the browsers. So we could have a similar thing here - we have the innovation in the eBPF world, and then the best ideas, the most obvious ones in retrospect, the ones that everybody needs, well that stuff you just bake back into the kernel maybe. That would be cool.

**Liz Rice:** \[54:24\] Absolutely.

**Jerod Santo:** So on the website, eBPF.io, it gives four kinds of applications: networking, security, profiling and observability. You mentioned three. We could probably bike-shed a semantic debate on "Is observability and profiling, I guess, different things?" Is tracing part of observability? I don't know, it doesn't matter to me. But if we think about these three categories that you gave earlier, networking, security, and observability, can you give examples of people doing cool stuff - feel free to name names, or open source projects - in each of these three? Like, if you're gonna say "Okay, here's cool stuff that's happening." I know you've touched on them throughout the show, but if we're just gonna say, "Here's the cool networking stuff, here's cool security stuff, here's cool observability stuff", what would you mentione for those three?

**Liz Rice:** Yeah... So for networking - I mean, obviously, I am very involved with Cilium, so that's the first name that comes to mind.

**Jerod Santo:** Cilium is cool, yes.

**Liz Rice:** But there are other really interesting users and projects. So Facebook, now Meta, have a project called Katran, which is a load balancer... And I'm trying to remember what the date is; I want to say 2016... Let's say 2016, and I'll apologize if I'm not quite right there. But basically, every single packet since that day that goes to Facebook has been through eBPF. Every single packet has been processed by an eBPF program.

**Jerod Santo:** Wow.

**Liz Rice:** If that doesn't convince people about the scalability of eBPF, I don't know what would.

**Jerod Santo:** Right.

**Liz Rice:** Cloudflare also using eBPF to do things like DDoS protection and load balancing, and... Lots of really cool blog posts that Cloudflare have written about their use. If we turn to observability, I mentioned the work that Brendan Gregg had done, and this whole series of tools that -- and he developed that at Netflix, where they were using it for, again, really scalable performance measurements... Whether we call it tracing, or observability, or metrics, or whatever...

**Jerod Santo:** Do you want to give a hot take? Do you have an opinion on this? Is it worth distinguishing or no?

**Liz Rice:** I think there is a bit of a distinction where observability allows you to make sense of data. I mean, I think we would say that metrics were different from logs, were different from traces. And then maybe observability is about how do I take all that information and actually ask questions of it in a sensible way.

**Jerod Santo:** An umbrella term, sort of.

**Liz Rice:** Yeah, yeah.

**Jerod Santo:** Fair enough.

**Liz Rice:** I think there's an overlap. Definitely.

**Jerod Santo:** I know it's been the subject of many Go Time unpopular opinions, whether or not observability is a thing or not really a thing... It's fun for nerds to talk about--

**Liz Rice:** Yeah, I do quite like it as that umbrella term for "I want to know something about what's happening in my system, in my cluster, in my deployment." I think it's quite a nice term. Yeah, so observability projects - I think I mentioned Pixie, which is a CNCF Sandbox project. Parka is another one that's really interesting for observing your application's behavior. Cilium has a project called Hubble, or a sub-project called Hubble, that shows you things like your service graph in Kubernetes, so how your services are communicating with each other... It can also show you individual network packets, which is pretty cool if you're trying to debug -- debug DNS, because it's always DNS... \[laughter\]

**Jerod Santo:** You're right.

**Liz Rice:** Yeah. Other networking problems are available... \[laughter\]

**Jerod Santo:** By request, yeah.

**Liz Rice:** \[58:13\] Yeah. And then on the security side - so Falco was probably the first security project, certainly in the CNCF, that was using eBPF. This project from my former colleagues at Aqua called Tracy... And then in Cilium we have a sort of Cilian family, we have a sub project called Tetragon, which is allowing you to create low-level security primitives almost in Yaml form, and apply them to your Kubernetes cluster. And you can do really cool things with Tetragon. I get a bit overexcited about this, because if your kernel is modern enough, you can not just detect that something is potentially malicious behavior, a process is opening the wrong file, or connecting to a cryptocurrency miner, or whatever malicious thing that you've detected - you can kill that process synchronously from within the kernel. And what that means is the process gets killed - to me it's not like you have to go and tell somebody and then eventually your process gets killed... It's happening right there and then, and it stops the attack before it happens... Which is super-fun to demo. I love it.

**Jerod Santo:** I bet it makes for a great demo. Very good. That helps out a lot, especially for people who are interested in cool things being built with Cilium. So I've been ferociously grabbing links as you talked, so those will all be in the show notes for the listeners.

As we wrap up, Liz, let's talk about the future, where things are going. You mentioned Windows kernel - I assume that's like a burgeoning thing, or is it available? And what's coming down the pipeline in the eBPF world?

**Liz Rice:** Yeah, so the windows eBPF - I know that they have got as far as being able to demo Cilium running on Windows... So whether it's in production Windows, I don't know. But it's certainly some significant progress being made there to implement it on Windows. I'm sure we will hear more about that, and also more about sort of the future of eBPF more generally at the community conferences coming up that I'm part of a team organizing, called eBPF Summit, which happens September 28th and 29th. Put it in your diary.

**Jerod Santo:** Save the date.

**Liz Rice:** And we are going to have -- amongst the speakers we've got both of... I mentioned before the two kernel maintainers who work on eBPF - both of them, Alexei and Daniel are both going to be speaking at eBPF Summit this year, so we should get a pretty good insight into what the future of eBPF is from a platform perspective. I think that will be super-interesting. And we're also going to hear from lots of end users, lots of people working on different projects... We're in the process of going through the session proposals at the moment, and there are so many good proposals; it's going to be really difficult to choose. But last year we had a lot of fun, we had a lot of people on Slack, kind of doing things like a capture the flag with us interactively... It was tons of fun. So hopefully this year's eBPF summit will be even bigger and better and more fun.

**Jerod Santo:** Very cool. And that is fully virtual. So access from anywhere with an internet connection.

**Liz Rice:** Yeah.

**Jerod Santo:** Excellent. Well, anything we left uncovered, anything else you want to talk about here before we call it a day?

**Liz Rice:** Not that I can think of, no. Yeah, we've pretty much covered everything.

**Jerod Santo:** Excellent, excellent. Well, listener, all the links to all the things are in your show notes. Liz, thanks so much for joining us on the show. Thanks for your excitement and your ability to so well explain these difficult concepts and get other people excited. It sounds like you're a great advocate for this technology and the power that it's unlocking for so many of us through people building cool tools, and stuff that probably we haven't even thought about yet. We have these three major buckets, but I'm guessing there's maybe a fourth bucket out there, maybe things that we don't even know. So I'm excited about the future that eBPF is affording us.

**Liz Rice:** Absolutely. Me too. It's an exciting space to watch and be part of.

**Jerod Santo:** Absolutely. We may have to have you back. Maybe put a marker a year from now and we'll have you back, have a catch-up, see what's going on, see what people have invented in the meantime. That'll be fun.

**Liz Rice:** That would be awesome!

**Jerod Santo:** Alright. Thanks, Liz. Thanks, everybody.
