**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer, and today we're talking about eBPF. eBPF is a technology that allows you to run programs safely in a sandbox, without having to change kernels, or code, or install modules, or anything like that. And this is typically the perfect place really for solving problems like networking, security or observability, because of course, the kernel controls everything, it can see everything... So it's kind of perfect, really. But because it is such a core component means that it's actually difficult to change. If you think about your own code, if you've got a core service or something that is a dependency for lots of other systems, you can see where that gets to be quite difficult to change; and you know, when you can't change something, you can't innovate there.

\[00:04:14.28\] So that was typically the story, really, for changing the kernel - it'd not really be an option... Until eBPF comes along, apparently, to change the rules. Let's find out more about it, because we're doing an episode on it right now. And joining me on this episode, I've got Derek Parker. Hello, Derek!

**Derek Parker:** Hello.

**Mat Ryer:** Derek, you created Delve, didn't you? You only went and created Delve...

**Derek Parker:** Yes, that's correct.

**Mat Ryer:** Yeah. And you are a senior software engineer at Red Hat, apparently...

**Derek Parker:** Yup, that's right.

**Mat Ryer:** Very cool. Welcome to Go Time. We're also joined by Grant Seltzer. Grant is on the open source engineering team at Aqua Security.

**Grant Seltzer Richman:** Yup.

**Mat Ryer:** And lives in Brooklyn, in New York City. What a cool place to live. Thanks for joining us, Grant.

**Grant Seltzer Richman:** Thank you for having me.

**Mat Ryer:** It's an honor. The honor is all ours. 50% mine, and 50% -- Johnny Boursiquot is also here. Hello, Johnny.

**Johnny Boursiquot:** Hello, mate. I am here to ask all the silly questions about eBPF.

**Mat Ryer:** Oh, good, good, good, because that will save me from doing it.

**Johnny Boursiquot:** I'll make you look good. I'll make you look good. I'd just ask all the --

**Mat Ryer:** Yeah. \[laughs\] I mean, I just wrote that intro from Wikipedia, mate. The rest of it -- I'm an impostor today. I don't mind these episodes where I'm kind of the impostor, and I don't really know the subject, because I really then get to explore it, and I always learn so much, especially when we have guests such as these esteemed gentlemen.

So who wants to give us a bit of a background on eBPF? Where did it come from, and what really is it?

**Grant Seltzer Richman:** eBPF, like you said, is a technology that lets you write small snippets of code, and then put those into the Linux kernel at strategic points, that - they'll be run in response to certain hooks. So you can kind of think of it in the same way as registering a webhook for a web service; in the same way, you can do that for your actual system. So the things that you can have, these small -- you could think of them as scripts; things that you can have them respond to include a kernel function being called, like something happening within the Linux kernel source code. You could attach them to functions, things like that... You could attach these eBPF programs to network sockets, and have them respond to packets coming in or out. You could attach them to user space functions, so if you have a compiled Go program that you're running, some service, even if it's a long-running service, you can attach them to actual -- it's not the actual source code that you're attaching them to, but the symbols inside your compiled binary that correspond to the actual functions. You could have eBPF programs respond to that. That's something Derek, I'm sure, can talk about.

**Johnny Boursiquot:** Wait - I told you I was gonna ask the silly things. Let me say what you've just said, but in a much simpler way for me...

**Grant Seltzer Richman:** Sure.

**Johnny Boursiquot:** eBPF is like -- so the kernel is like HTML, and eBPF is like your JavaScript... So that when somebody clicks a button on your HTML, your JavaScript can react to that event happening.

**Grant Seltzer Richman:** Exactly. That's one way that a lot of people -- I think the quote originated from Brendan Gregg, but that's the typical way that people like to explain BPF. It's a very good analogy to make.

**Johnny Boursiquot:** Is that a purely observatory thing? Can you only listen to things, or can you change things?

**Grant Seltzer Richman:** No, you could actually change things, and you could make responses. There's certainly limitations, because safety is certainly a concern... You don't wanna just be able to put anything into your running operating system, especially in production... But yeah, there's a lot you can do. You can take action, you could prevent a process from occurring... In the case of routing networks, you can re-route packets as you please...

**Johnny Boursiquot:** \[00:08:10.26\] I've got all kids of spidey senses going off right now, but we'll get to that... \[laughs\]

**Derek Parker:** Yeah, I've seen pure eBPF-based load balancing, and that kind of stuff, which I think is reallly cool and really interesting. And the other interesting thing about the eBPF programs in and of themselves is like -- so you write them in essentially C, but it's kind of like a stripped-down version of C. Instead of fighting like a typical C compiler, you have to fight the BTF verifier or whatever, which complains "You can't have loops in your BPF programs." You have to be really careful with how much stack space you allocate, because there's stringent requirements there... Because it has to be safe, as it's running in the kernel; even though it's sandboxed, the program still has to terminate, so you can't have loops and things like that where the verifier can't verify that the program is actually gonna terminate stuff.

So there's some interesting things that you have to do in that aspect when you're writing the programs to kind of get around some of these limitations.

**Mat Ryer:** Are these things done with the permission of the kernel? Was this something that is explicitly allowed, or is this something that's kind of being done to the kernel?

**Grant Seltzer Richman:** Well, BPF definitely exists within the kernel. It's a virtual machine that's part of the Linux kernel. It ships within everything. In terms of loading the actual programs, and what those programs can do, there is a permissioning scheme behind it. You have to have route access, or a particular capability in the process that's loading the BPF program.

**Mat Ryer:** Right. So you can't just do this to any kernel. This is a technology that is explicitly supported.

**Grant Seltzer Richman:** Correct. You couldn't do it on macOS. It's specific to Linux. And all Linux distributions are shipping with it. There's also something that I really can't speak intelligently about, but there is an effort within Microsoft to port BPF to Widows.

**Derek Parker:** Yeah, I've actually heard a lot about that too, but I don't use Windows to develop on, so I don't know the state of it... But I thought that it was just cool, because -- it's cool to see some of the innovations that come out of Linux propagate to other places. I wish we could do more native containerization stuff on macOS instead of having to "Oh, let's just real quick install Linux VM and pretend that we're doing container stuff on macOS, but we're really not." I think it's cool for Microsoft, if they actually are adopting that kind of stuff in kernel, instead of -- I don't know if it's actually properly in kernel, or if they're also doing behind the scenes "WSL, real quick, and we'll just shoot all your eBPF stuff over there."

**Grant Seltzer Richman:** I do think it's user space-based right now, but I don't wanna mischaracterize it... But I think you are correct. But I think it would be kind of cool for anti-cheat software to be able to ship -- if you're gaming on Windows, and the company that makes the game wants to prevent hackers from cheating in the game, to be able to ship BPF programs that detect new cheats that have been found in the wild... I think that's a very cool application of it.

**Derek Parker:** It's like -- what is it called, Punk Buster, or whatever? It's one of the anti-cheats for some of the big games... Like, Punk Buster eBPF edition.

**Grant Seltzer Richman:** Yeah. There you go.

**Johnny Boursiquot:** So I'm trying to visualize the concept between user space and kernel space, and everything else... And for those who really are still trying to wrap their heads around this - generally speaking, when you and I write a program in our favorite programming language, like Go for example, we're writing user space programs that when they need to do something at the operating system level, they make a system call and say "Hey, I wanna open a file."

\[00:12:04.16\] So for us, the developers, we're using the standard library. And Go is saying "Hey, can I please open up this file? Because I wanna read content", or whatever it is. So that's a system call that then gets handled, and basically all the operating system level stuff gets done for us, and then we get back that result. But all that happens in the user space, right? So what we're talking about here is actually the ability to write programs that run in kernel space. So going that level basically deeper, to actually listen and react to and potentially change what the actual kernel is doing.

**Grant Seltzer Richman:** Precisely, yeah. You get a lot of advantage to that. Let's take the example of a system call, where the flow of events is that your Go program tries to write to a file; under the hood, the Go standard library is using the right system call. Leading up to the system call, your Go program puts whatever information it needs to in the correct registers, and then it executes a system call instruction, and then the kernel takes over, executes the system call, returns back to user space with "Hey, we were able to write to that file" or whatnot.

In the eBPF world you can write an eBPF program that is triggered by system calls. So if you were to have an eBPF program that is triggered every time the right system call is called... So adding to that original flow of events, the Go program sets up the system call, it executes it... Right before it executes it, the eBPF program runs; it can look at all of the arguments that were passed to that system call, it could do whatever it wants... And then once it's finished, the system call executes, then returns back to user space etc. And the BPF side is completely invisible to the application that actually triggered it.

**Johnny Boursiquot:** Interesting.

**Mat Ryer:** So does it run as a kind of background to the main things that are going on, or is it a blocking code? How does it actually run when it sees a particular call?

**Derek Parker:** So in the case of a probe attached to a function or something like that, it's blocking. For that moment of time, the execution of the program that invoked or triggered the probe will be stopped, so that the eBPF program can do any kind of inspection that it needs... Which is also why, for the context of tracing - this is what got me interested in eBPF, was the combination of the two last subjects we were talking about, which is the overhead of system calls, and just the overhead of tracing in general.

A similar thing would happen -- so the reason why I got interested in it was because I wanted to make Delve's tracing backend more performant, have less overhead, so that maybe you could use it in a production context if you wanted to.

I did a tweet a while back, when I first started working on it, of like the overhead added. I had a program that ran in some odd number of microseconds... And then with eBPF-based tracing on top of it, it went from maybe like 20 microseconds to 300-400 microseconds, or something like that... Which sounds like a significant amount of overhead, but we're talking microseconds.

And then I timed it using the ptrace-based tracing that Delve had been using prior, and it bumped up to like 2.3 seconds. So you go from microseconds to actual seconds, which is like -- you can't have that kind of overhead if you're tracing something in production. So that was kind of what got me interested in it, having these really small, targeted programs that can be called as a result of something, that don't do context-switching between kernel and user space, and stop the program for as little time as possible, and really get kind of performant, detailed, but also ad-hoc tracing.

\[00:16:01.14\] The other difficult thing was making it ad-hoc. So a lot of times when people write eBPF programs, they're very, very targeted. You already know when you're writing the function what corresponding function it's gonna be attached to; what kernel function, or whatever... You generally already know; so you kind of know the arguments to expect, and things like that. But in the case of Delve, and what I was doing with eBPF, I was kind of abusing it a little bit to try to do just -- I wanna attach this probe to a completely arbitrary function, where I don't know how many arguments or return arguments it has. I know nothing about it, but I wanna get all the information out of it. How do I do that?

So that opened up a lot of questions of how to write a generic eBPF program, and how to communicate between that program and Delve, communicate between the kernel space and the user space, in a way that also won't introduce back the slowness that I was trying to get rid of.

**Johnny Boursiquot:** You mentioned earlier basically you were using sort of a constrained C; there's certain things that are not permitted, obviously, for performance reasons, and other things... So what's the development workflow for this? If I wanna use eBPF, do I have to use C, or do we get wrappers, SDKs? What's the development workflow like?

**Grant Seltzer Richman:** So the eBPF program itself, I think from a high level, it's -- well, not just to visualize it; this is how it is, where you have two sides. You have the eBPF programs themselves, and then you have the user space program that loads them into the kernel and listens for feedback... Essentially, the agent that interacts with the eBPF programs themselves.

On the BPF side, I only have experience with doing it in C. I think that there is talk about a library where you can write the actual BPF programs in Rust, because the backend to it is LLVM. LLVM kind of controls the specification for the eBPF bytecode, but similar to the Windows BPF, I really don't know anything about it, and don't want to talk about it... Plus, Rust is like the competing language, so we can't talk about it...

**Mat Ryer:** \[laughs\]

**Grant Seltzer Richman:** So yeah, you write the BPF program in C, so for the most part you're just stringing together these helper functions that are defined in the BPF world. They're BPF helper functions that are defined in header files that you have to use, so they're really not too complex. If you're a Go developer, it wouldn't take long for you to pick that up, especially looking at examples... And there's a lot of guides for getting into it.

And on the user space side, you can write a program -- there's even more options there. So there's a C standard library for doing that, and that's called the BPF. Then there's a project that you may have heard of, called BCC. You shouldn't use that though, but that essentially lets you use either Python, or there's a Go version of it, there's an even an old, unmaintained Lua version, Rust, and certainly, you can do Go.

With Go there's also a bunch of different libraries that you can use on the user space side. I'm partial to one called libbpfgo, which is a wrapped around the BPF, the one I've just mentioned. There's also a standard, or rather a Go native implementation, that doesn't wrap around libbpf, that's part of the Cilium project... But I maintain libbpfgo and use it for projects that I also help maintain, so I'm partial to that.

**Johnny Boursiquot:** You're slightly biased.

**Grant Seltzer Richman:** Yeah, I'll be transparent about that.

**Johnny Boursiquot:** So - obviously, you mentioned that this is sort of a Linux-only kind of thing, outside from whatever is in progress for Windows... So if I was on a Mac and I needed to write these kids of programs, I'd have to use some sort of virtual machine to be able to test and run these things.

**Grant Seltzer Richman:** Yeah, yeah. For now.

**Derek Parker:** I remember there was DTrace from back in the day, for Darwin kernels, and stuff like that.

**Grant Seltzer Richman:** Yeah, macOS has a -- I don't remember the exact name, but some type of security framework with a recent version of macOS that is comparable, but there's no interoperability there.

**Break**: \[00:20:26.24\]

**Johnny Boursiquot:** Let's talk a little bit about the use cases. I'm interested in understanding really where the sweet spot is for eBPF programs. We've talked about observability and knowing when certain things happen, and Derek mentioned that this is a very targeted tool, right? So you already know what system calls you want to get callbacks about, other than cases where you're trying to get everything... Which I'm assuming is a very different approach to writing these kinds of programs as opposed to having something very targeted you're looking for, like a file open, or something like that.

So I'm interested in understanding the use cases a bit more... I've heard things like observability, which seem like a good use case for this... I've heard troubleshooting networking, I've heard writing load balancers, which I'm really interested in understanding how that works... What's the realm of problems that you sort of look to eBPF to help you, and what kind of problems are you solving?

**Grant Seltzer Richman:** Sure. So the use case that I use it for the most is security. I help maintain this project called Tracy, that hooks onto really hundreds of different events, and tries to correlate all these things that are happening in the kernel to determine if there's some type of intrusion, some type of malware... It allows you to apply policy on top of that, do cool things like when programs or processes are executed, try and capture the binary that was actually run for later inspection... There's a whole lot of things that you could do security-wise.

Observability - you can use it in production (BPF, that is) for determining the health of your web services. So you could attach to your network sockets, or some type of networking mechanism... There's multiple that BPF works with, to determine how many packets are being dropped, or where are packets being routed; you get a lot of information that way.

**Johnny Boursiquot:** That level of observability that we're talking about here - this is something slightly different from these days more common usage of the term, "observability", and things like that. So when we think of observability, we're thinking "Okay, I need a dashboard, I need a Honeycomb, or a DataDog, or whatever it is. I'm watching my services - are they up? Are they down? What's the latency?" that kind of thing. What we're talking about here is a different kind of observability. A much lower level, yes?

**Grant Seltzer Richman:** \[00:24:03.26\] Yeah, certainly. You have access to raw memory in most of these cases, or all of these cases, really. You could see the full contents of the package, or full contents of memory from a user space program. But you still have that -- even if you're not inspecting memory, you could still just have these BPF programs trigger and just say "Hey, this happened", in the same way as, you know, if you were to add a line of code to your Go program, and then recompile it and run it... Let's say a println - instead of editing source code and recompiling it, you can add a BPF program attached to a certain space in memory, and find out when that certain line executes. That's what Delve does.

**Mat Ryer:** So do we have to write all of these things ourselves? Are there not already some tools around that we could use? Are there any tools that do monitoring memory allocation, say, and collecting that in Prometheus, and put that in a dashboard, or something? Are there existing tools that are springing up around this? Is there like an ecosystem?

**Derek Parker:** Yeah, I know that there's a range -- from the sysadmin's perspective, Brendan Gregg, who Grant mentioned earlier, he's from Netflix, a dev ops extraordinaire... He has a whole suite of eBPF-based tools and scripts and one-liners that you can use to inspect your system. I think he has -- I can't remember if this is explicitly wrapped up into it, but he has a great blog post of what to do within the first five minutes or something like that of debugging a production issue, and it goes through all of these scripts and tools and stuff that you can use, and a lot of them are eBPF-based.

But I think the question you were alluding to was the productization of this, and feeding this into metrics-gathering systems, and things like that... And I know there's a lot of efforts in that space right now.

**Mat Ryer:** Yeah, it's interesting. So when you talk about running these things in prod, is this something that you have to do ahead of time, you have to plan, enable it, build things for it? Or can you just go in and attach them to running processes? Because it's in the kernel; it's almost underneath all the processes.

**Derek Parker:** Yeah. I think most of the prep work is in ensuring that you have a kernel that can load these programs, and I think as long as you're running on any kind of modern kernel, you're gonna be fine. But in terms of -- like, you don't need any coordination from the user space program, or anything like that. Really, all you need to do is coordinate with the kernel and get whatever program that you're running that is trying to do the inspection onto that production server, to load the eBPF programs. But there's no coordination needed with the program. From the perspective of Delve, or something like that, it's similar to a normal debug session where we just kind of ask the kernel for permission to do things in the user space program; whatever program we're inspecting, it's just kind of happening to it, but it doesn't really get to decide.

**Mat Ryer:** Yeah, that's interesting then. So that is quite useful for particularly debugging, but any sort of inspection on things; you could almost not be running anything -- it's not like yo have to run extra things to enable it... So I can see why a little collection of one-liners is built up, actually... Because that is, I suppose, quite useful to have those in your toolbox. Yeah, it's very interesting. We'll try to find that and put a link to it in the show notes. That sounds very interesting. And at least we'll be able to see some real examples of what eBPF programs look like.

**Grant Seltzer Richman:** Yeah. I would even add on - and relating to the last question, about what the ecosystem is like... I would say that you really don't have to -- you know, if this is a technology that excites you, or I should say, having this level of visibility excites you, but you're perhaps intimidated, or don't even want to bother writing this eBPF code, there's certainly a developing, maturing ecosystem around this. There's a lot of products that are being developed for gaining that kind of visibility.

\[00:28:12.23\] And then follow-up to that is that - yeah, you don't have to recompile your code at all, which is good for like... I think a lot of the use cases for eBPF applies to perhaps like SREs, or security folks, and maybe not -- let's say if you're like a backend web developer, you might not be as interested in writing the eBPF code... But certainly if you're an SRE, and you have this running service that you're trying to figure out what's going on, being able to write a BPF program that inspects different areas of memory on the fly, and being able to iterate on the BPF program without restarting your service is something that's really valuable, and something that you can get a lot of advantage of.

**Mat Ryer:** And what about higher level slightly than that? Could you implement like a file watched using this, if you had something that's gonna auto-reload, if you were a web developer? Could you write an eBPF program that would notice when files have changed in a certain path, and then do take some action, alert you somehow, so you can refresh?

**Grant Seltzer Richman:** Yeah, absolutely. And I think Derek hit the nail on the head that - yeah, Brendan Gregg has a lot of tools for doing very specific things really well. I think there's a tool called OpenSnoop, that will just tell you every time -- you just run it and it'll tell you every time a file is opened, and get some information about it. And perhaps a more robust -- I guess again plugging the product I work on, but you know, I really believe in it... It's Tracee. You can just run it and get all of this information that you want, and filter different events, without ever having to write eBPF code.

**Mat Ryer:** And that's Tracee, isn't it?

**Grant Seltzer Richman:** Exactly, yeah. It's under Aqua Security's GitHub.

**Johnny Boursiquot:** So as a sidenote, you work with Liz Rice, right?

**Grant Seltzer Richman:** I used to. She left right after I joined, unfortunately...

**Johnny Boursiquot:** \[laughs\] I was gonna ask you, what's it like to work with a rockstar? Oh, I used a touchy term... With a well-known and respected member of our community? \[laughs\]

**Mat Ryer:** ...who plays rock.

**Johnny Boursiquot:** Who plays rock. \[laughter\]

**Grant Seltzer Richman:** It was fantastic while it lasted, I will say that. But I still interact with her plenty in the community. She does a lot for the eBPF community, so I still get to interact with her.

**Mat Ryer:** Did you say that she left just after you, or just before?

**Grant Seltzer Richman:** Just after. I scared her away maybe... \[laughter\]

**Mat Ryer:** Suspicious. Well, it's an option; it's possible, isn't it? That's what I was thinking.

**Derek Parker:** Johnny, you had mentioned being curious about the eBPF-based load balancing stuff that I had brought up earlier...

**Johnny Boursiquot:** Yeah.

**Derek Parker:** I know Liz Rice gave a really good talk about how to implement one of those... So if you're curious, I would definitely recommend seeking out her talk on the subject, because it's really, really good.

**Johnny Boursiquot:** Will do. Thank you.

**Mat Ryer:** Cool. We'll also find it and put it in the show notes.

**Grant Seltzer Richman:** There is a great community around eBPF. There's a lot to learn, there's a lot to be confused about. The ecosystem is really evolving and becoming a lot more accessible... But there's a lot of people who are excited about it, who are willing to help. If you go to eBPF.io, there's a Slack channel that you can join, that is very helpful. There's a lot of talks coming out... Derek and I are speaking at a conference coming up soon. There's a lot of material to learn from.

**Mat Ryer:** Yeah. And where is the community? Does it mainly hang out in that Slack channel then? Where else does this eBPF community exist, for anyone that wants to get involved?

**Derek Parker:** I think a lot of the eBPF space, and the technology in general is really big in the cloud-native, CNCF land; cloud-native, Kubernetes type ecosystem. That's where a lot of the community hangs out. And then it kind of dips into programming language communities a little bit, for people who wanna implement things, and stuff like that. But yeah, a lot of the interest and a lot of the community is in cloud-native land.

**Johnny Boursiquot:** \[00:32:06.00\] Much of the body of examples I've seen out there in my short looking into eBPF seems to be around BCC, in Python land, or something... And I've seen examples of that. I'm wondering -- when I saw that, I was like, "Okay, so we're writing some Python here, Python there, in the middle somewhere we've got just a giant string of C..." And we can see where the hooks are, but it's like, okay... Which kind of harks it back to the developer experience I was talking about earlier. I'm wondering, what is it like to write these kinds of programs in Go, what libraries is sort of your go-to in the Go ecosystem for sort of interacting with and writing these kinds of programs?

**Derek Parker:** I'll steal this one for a second... I'll also evangelize the libbpfgo framework, because that's what I'm using in Delve to implement the eBPF-based tracing backend. So there's a lot of good tooling for writing and loading eBPF programs, and using them against Go. There is some trickiness with certain features of eBPF and combining that with Go... To circle back, since this is Go Time Podcast... For example - and not to hijack the question, but just some of the trickiness that you might run into if you're using probes with a Go program is -- there's two kinds of probes. There's uprobes -- well, of user space probes. There's uprobes and uretprobes. So uprobes - you can attach to the entrypoint of a function, and then ureprobes, attached to the return of the function. So you can kind of see, like, at function entry, and then when the function returns; you can kind of hook into both of those spots.

But this gets really tricky with Go, because the way that uretprobes work is they actually modify some of the data, some of the addresses on like a goroutine stack, or like a thread stack... So if you're not familiar, goroutines start with very small stacks, and they kind of grow over time. And as part of that growing, the Go runtime needs to kind of look through the stack and look through what pointers are there, and move them, and do all kinds of updating, and stuff like that.

So if you're not careful with uretprobes, you can blow up a Go program, because when it tries to copy the stack, it's gonna look through stuff and see an address that it has no idea about, and it'll just panic.

In Delve we had to do some really tricky stuff, use ptrace to see when the Go runtime was gonna copy a stack, and then dethatch uretprobe, let it do its thing, and then re-attach it. So there's a little bit of handholding there when it comes to the Go runtime. So there's some kind of weirdness and wonkiness for languages that have runtimes, or self-introspective languages that could be weird with uretprobes and doing this kind of low-level probing that you might need to be aware of it you're experimenting with this kind of stuff.

**Mat Ryer:** Yeah, that would be an unusual panic to encounter, I'm sure. So if you do have -- say you've got a little eBPF program that's gonna somehow emit some interesting information, wherever that is; let's say just literally counting allocations, or something like that... Then how do you get that information out? Where do you store it in the first place? Does the eBPF program have any memory? And how would the Go program get that information?

**Grant Seltzer Richman:** Sure. Yeah, perhaps the thing that we've missed when talking about BPF programs is what are the things that a BPF program can actually do. So one of the main things that BPF programs are interacting with are various forms of maps; in the same way that you have a map in Go, you have various different types of maps that you can use to store information, and you can have a map that is shared between user space and kernel space, or the BPF program itself... Or multiple BPF programs sharing this map in memory.

\[00:36:09.00\] So you could have something like a ring buffer that lets you -- let's say if you have a simple BPF program that is triggered every time a certain function is called, or let's say a system call... Every time a system call is triggered. In that BPF program you can just have a little message that says "Hey, the system call was triggered. Put that in, let's say, a string, and send it to user space using this ring buffer." And then on the user space side you just have a goroutine that is picking up these events and printing them to screen. So you have these buffers, these maps that you can use to share memory between user space, and share memory between different BPF programs.

**Mat Ryer:** So do you literally get a channel interface then in the Go side, where you can \[unintelligible 00:36:55.18\]

**Grant Seltzer Richman:** I'll say yes, but it depends on the library that you're using. So the actual underlying primitive is a different interface, but in the case of libbpfgo you do have a channel. So you could really interact with it in the same way that you would with any other Go program.

**Mat Ryer:** Does that include sending stuff as well?

**Grant Seltzer Richman:** Sending is a little bit different, because you're updating -- there is an interface for it or an API for it, for updating values in one of these shared maps, but the ring buffer is more for sending from BPF up to user space.

**Mat Ryer:** I see. So these maps then - they are literally like objects; they are key-value pairs, basically. Does the kernel already have -- did it already have that concept? Is that already how it deals with things, or is that something that eBPF models --

**Grant Seltzer Richman:** Without going into too much detail about the various different features - because there's quite a lot that I certainly don't know about - eBPF, the concept of having this visibility into the kernel is not new, but it makes things a lot easier.

Before, something that you might have written a kernel module to do, something that doesn't have as many safety guarantees and requires you to restart, or even sometimes recompile your Linux kernel, and reload it, and restart it, and it takes forever - BPF does a lot faster, a lot safer, and in a much more accessible way.

**Mat Ryer:** Yeah, but it just gets quite exciting when you consider, as a Go programmer, being able to just have a channel where you're getting very detailed information about what's going on in the system. Even just that mechanism alone probably is enough to spark a bit of innovation over the thought in the Go community... Because who knows what you could build...? A file watcher was one thing that I thought of there, but I bet there's loads of things you can do if only you could get an insight into what's really going on in the kernel.

**Grant Seltzer Richman:** The possibilities are endless! \[laughter\]

**Mat Ryer:** Yeah. I'm getting quite excited about it. We've heard of libbpfgo quite thoroughly; we'll definitely link to that. And I was looking at the repo and it does look like a nice API. It's interesting - even using this, could I end up in that situation we talked about earlier, where I'm getting panics, because... Should I avoid goroutines, or something, if I'm gonna write code like this?

**Derek Parker:** Probably the only thing that I would avoid if you're gonna do anything with eBPF in Go is avoid uretprobes, unless you really, really know what you're doing... Because it will almost 100% of the time crash your program. The only way to really make it work is to do this weird thing that we're doing in Delve, that's kind of like a gnarly little hack.

**Mat Ryer:** Could that be put into a package? Could that little hack be solved once?

**Derek Parker:** \[00:39:58.15\] It's possible... I mean, it's solved right now in a way on a pending pull request in Delve... There's a lot that goes into implementing this workaround. It's some knowledge of Dwarf, which is like debug info that goes into binaries, using ptrace and having permission to use ptrace on top of eBPF... There's a few things that are stacked that are esoteric and non-standard for a typical Go programming adventure. So there's some dragons there, for sure... But yeah, I would say that everything else is pretty safe to use with Go, but uretprobes are gonna blow things up.

**Mat Ryer:** And what would they be used for?

**Johnny Boursiquot:** Capturing return values from functions.

**Derek Parker:** Yeah.

**Mat Ryer:** Yeah, I see. So if you're reading, if it's one-way data, use something like a \[unintelligible 00:40:46.25\] or something.

**Derek Parker:** Yeah, from within a program. The uprobe will fire and start executing your eBPF program, and then your eBPF program can use a ring buffer or a map, or something like that, to communicate back with the user space.

Delve uses both. So it kind of uses maps to communicate from the user space to the eBPF program, and then it uses ring buffers for the eBPF program to send data back out to Delve.

**Mat Ryer:** Yeah, I see. It's really interesting, when I think of Delve, I see that as a very low-level tool, because I work on bigger systems. They're the sort of systems that I think of. But it's always interesting to me when I zoom in down; you get these same kinds of layers, there's this same often more complicated sort of little architectures around... And I always find that to be quite fascinating, really.

**Johnny Boursiquot:** Simple is not easy, man...

**Mat Ryer:** Yeah, absolutely.

**Break:** \[00:41:46.27\]

**Mat Ryer:** Well, I was gonna ask - what do you think is gonna be the future for eBPF? Do we feel like this is the start of something that's just gonna keep getting more and more exciting?

**Johnny Boursiquot:** Commercial products... That's what's next. Commercial products. \[laughs\]

**Mat Ryer:** Is that what's gonna happen next? Let's start the company now. Us four. \[laughter\] Let's just do it live, on The Go Time. Not The Go Time, is it? It's Go Time. \[unintelligible 00:43:00.19\] I think it's cooler, though. That was very much of its time, taking "the" off Facebook. I think it's cooler now to be called The Go Time.

**Johnny Boursiquot:** The Go Time.

**Mat Ryer:** You know what I mean? I feel like we've gone all the way around there. But what would a company look like if we were gonna start it?

**Grant Seltzer Richman:** I would definitely say that the ecosystem is very much maturing, or I should say "just starting to mature", but there's really so many use cases that haven't been tapped yet. Libbpf hasn't even hit 1.0 yet. I think a lot of people are entering the community who are just learning about BPF... So there's a lot of talk on the kernel side about BPF eating Linux, about rewriting large swathes of the Linux kernel in BPF code, to make it a much more module.

\[00:43:53.23\] One area is like the scheduler, for example, being able to put logic into the scheduler on the fly for changing how we schedule processes. Certainly, drivers is another concept that people are thinking about... But really, a high-level - I don't wanna go too thought leader on all of you, but...

**Johnny Boursiquot:** Please do. Please do.

**Grant Seltzer Richman:** I forgot who gave this talk or talked about this in a presentation, about how BPF represents this new paradigm of software that gives you the ability to change the way your software interacts with the operating system on the fly. It's hard to say where BPF will go, because 1) there's a million more ideas for what you could attach BPF programs to, 2) there's so many people entering the community that are coming up with really good ideas, there's a lot of new contributors and whatnot... And really, there's not much restriction on those ideas. It's like saying "What's the next big thing for Go, or that you could write in Go with really anything?" Except maybe BPF is cooler.

**Mat Ryer:** Okay, well that brings us to our regular segment... It's time for Unpopular Opinions.

**Jingle:** \[00:45:11.25\] to \[00:45:29.04\]

**Mat Ryer:** Grant Seltzer, do you have an unpopular opinion for us?

**Grant Seltzer Richman:** I do. I would also like to mention that I am the reigning champion of unpopular opinions...

**Mat Ryer:** Is that right?

**Grant Seltzer Richman:** I have the most unpopular opinion of all time on this show.

**Mat Ryer:** Yes, when you said eBPF was cooler than Go. \[laughter\] You beat your own record then.

**Grant Seltzer Richman:** I think I said something about baseball.

**Johnny Boursiquot:** Would you like to switch your unpopular opinion?

**Grant Seltzer Richman:** No, I still agree that baseball is the best sport. But I won't try and beat that. I'm not gonna say anything political or anything... I would say that something that I've always felt is that engineering organizations should have a security engineer on every team.

**Mat Ryer:** Really?

**Grant Seltzer Richman:** I think there's a lot of decisions that software developers make, or even at a higher level, people who are architecting entire systems, that the input of a security engineer or someone, even a software engineer who has more training, or will think about things from a security perspective, can be crucial to making an entire organization more secure, as opposed to having a team on the side of security engineers that are just trying to throw products at already existing infrastructure.

**Johnny Boursiquot:** So this is in your mind different from having some sort of a security review before you ship your version of the product, or something like that? This is more like having somebody as part of the team, as we build software.

**Grant Seltzer Richman:** Yes.

**Mat Ryer:** So is this a little bit like how testing used to almost be a separate concern to software engineering, and then we sort of became test-driven developers and we sort of realized that was our responsibility, was to write well-tested code... Are we headed for SDD, software -- security... Sorry...

**Johnny Boursiquot:** What are we talking about here, Mat?

**Mat Ryer:** Are we getting towards a more like SDD, sort of like Security-Driven Development thing?

**Johnny Boursiquot:** SDT. Oh, I thought you were talking about something else... \[laughter\]

**Mat Ryer:** No, -Driven Development. DD.

**Johnny Boursiquot:** Gotcha.

**Mat Ryer:** That's so difficult to do, for some reason. Write it down. I think I did it. I think we can get it in the edit. \[laughter\] I'm happy to move on, if everyone else is...

**Derek Parker:** That would be ideal.

**Mat Ryer:** \[00:47:43.23\] It's definitely true when you're designing systems that security is one of the key things that you think of. And you're right, sometimes you can just make design decisions that make systems more robust. If they're idempotent, so that you can just retry something lots of times, and kind of better safe than sorry, because you've designed it a certain way, it's not gonna break. You can do that same thing with security issues, too. Just by making certain design choices, you're sort of necessarily more secure. So yeah, an interesting one... We're gonna definitely test that one on Twitter. We would test it on Facebook, but I think we all know why we're not gonna do that...

**Grant Seltzer Richman:** \[unintelligible 00:48:25.07\]

**Mat Ryer:** We'd never see the results...

**Derek Parker:** BGP, different from BPF.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** Oh, is it? That's why we did the show... \[laughter\] Oh, no...!

**Johnny Boursiquot:** It was timely. It was timely disambiguation. Yes, indeed.

**Mat Ryer:** I've made a mistake. Okay, very interesting... What do you think about it, Johnny? What do you think about having a security person on the team?

**Johnny Boursiquot:** I don't disagree. It's hard to disagree with that.

**Mat Ryer:** To be honest though, it's hard to disagree with anyone who says anything about security. You can't be that person in the room saying "No, I think we should be less secure." \[laughter\] Derek, do you have an unpopular opinion for us today?

**Derek Parker:** I do. I didn't last time; I choked. But I have one this time. It's less thought-provoking than Grant's.

**Mat Ryer:** It's less dramatic as well, if you're not choking, if you can't feel your anxiety... \[laughter\] That's where the drama comes from in this segment.

**Derek Parker:** So from going back and forth to writing the Go stuff and then switching to the eBPF stuff, which is bringing me back to a lot of C, my unpopular opinion is snake case is better than camel case. \[laughs\]

**Johnny Boursiquot:** Whoa.

**Mat Ryer:** So for anyone not familiar, what's the difference?

**Derek Parker:** So snake case is like word\_another word\_another word, where camel case is like wordAnotherWord... So Go version, versus what you would typically see in C, or Rust, or something else like that. I just think snake case is so much more -- it looks nicer, it's more readable... I don't know. It's not just like all words just kind of jumble together... It almost looks like a sentence, or whatever... I don't know. It just looks nicer.

**Mat Ryer:** Yeah, it's very interesting. What about hashtags on Twitter? Do you do snake case hashtags?

**Derek Parker:** I just go all lower-case. Strings to lower. And then I write my --

**Mat Ryer:** Strings to lower.

**Derek Parker:** Yeah.

**Mat Ryer:** Yeah. Do you do that with eBPF? Do you attach to that somehow? Change it before it tweets out? \[laughter\] Apparently, this is an accessibility problem though, doing all lower-case, because it's hard for screen readers to do it. I used to do it deliberately on my computer, I'd just put in loads of nonsense and make the computers try and speak it... I had hours of fun.

**Derek Parker:** Yeah, yeah.

**Mat Ryer:** Yeah, it's like fuzzing the say command, basically.

**Derek Parker:** There's endless amounts of fun SSH-ing into somebody's computer and then writing "say" and then some random stuff. \[laughs\]

**Mat Ryer:** Oh, yes. Oh, yes.

**Derek Parker:** But typically, I try to stick with one word, hashtag, so hopefully I'm not messing up with any readability stuff.

**Mat Ryer:** No, but snake case would fix it. Snake case hashtags would fix that, wouldn't it?

**Derek Parker:** There you go, yeah.

**Johnny Boursiquot:** It would look suspicious, but yeah...

**Derek Parker:** \[laughs\]

**Mat Ryer:** It would look strange, but -- I mean, I used to do Ruby, and that was the standard in Ruby; you would just write with little snake case things, like underlining... Yeah, I don't know.

**Johnny Boursiquot:** As they say, "When in Rome, do as the Romans."

**Grant Seltzer Richman:** There was a very interesting talk at GopherCon one year about writing Go code, or perhaps code in general, that is more accessible, and part of that was making it easier for a screen reader to read. And I was thinking about that one when Derek said that opinion. I feel like it might be easier for screen readers, snake case versus camel case.

**Mat Ryer:** Yeah, it may be. I don't know. But Derek, how far does it go? Would you name your kids with snake case names?

**Johnny Boursiquot:** You're still thinking about this? \[laughter\]

**Derek Parker:** Yeah, they are. There's no spaces. My youngest is Davie\_, you know... \[laughs\]

**Mat Ryer:** I can't wait to meet the first engineer that does actually call their kid something like \_, something like that. I would love it.

**Derek Parker:** \[00:52:03.03\] \[laughs\]

**Mat Ryer:** That's a good one then. So - Johnny, are you sold on that?

**Johnny Boursiquot:** I'd say if -- I've done some Ruby, so I'm like... Yeah, I'm very familiar with the readability of the underscore, but since this is a Go Time podcast and we're talking about Go, I'm gonna say "No, I do not like that opinion."

**Derek Parker:** \[laughs\]

**Mat Ryer:** But Derek, do you write Go code with underscores?

**Derek Parker:** No...

**Mat Ryer:** Do you actually do that in Go code?

**Derek Parker:** No, no. I'm not a monster.

**Johnny Boursiquot:** He knows better. He knows better.

**Mat Ryer:** What would it look like? How bad is it?

**Derek Parker:** I think where it falls apart for me is upper-case snake case just seems really wrong to me. It doesn't work for me in Go because capitalizing to export -- like, a capital first snake case statement... That's just wrong. It's wrong.

**Mat Ryer:** It all looks wrong until it just becomes the way we do it.

**Derek Parker:** Right. \[laughs\]

**Mat Ryer:** It's just all trendy. There's nothing wrong with it at all. I'm gonna do it now and see what it looks like. Yeah, I feel sick. I feel sick. It's awful. Right... Yeah. Well, it was a good one though. I like those ones. Johnny, have you got an unpopular opinion these days?

**Johnny Boursiquot:** My unpopular opinion is that I can never come up with an unpopular opinion.

**Mat Ryer:** Yeah, I know. Because you're too popular.

**Johnny Boursiquot:** Every opinion ends up being popular, so I'm sick and tired of having unpopular opinions, because they're always popular.

**Mat Ryer:** That's very meta. Your unpopular opinion seems to be "We shouldn't keep doing this segment." \[laughter\] It's funny, because when we put them on Twitter -- I genuinely think Grant is the record-breaker, because... Yeah, most of the time people just agree. The case that's made is just well made, very often.

**Johnny Boursiquot:** Nah, these days what I look for is "What's the ratio of people who disagree?" So I'm trying to figure out how many people actually do lean one way or the other? That's more interesting now than trying to say "Oh, this is overwhelmingly unpopular", because that doesn't happen often.

**Mat Ryer:** Yeah, no, it doesn't. It's very interesting. Well, we're coming to the end. I just wanna do a quick shout-at... It's like a shout-out, but the first time I did it, I said it wrong...

**Johnny Boursiquot:** Yeah, you're shouting at...

**Mat Ryer:** So now it's a shout-at... And we're just gonna shout-at a particular meetup from about the place. Actually, today I'm shouting at the GDN page on Meetup.com. So it's meetup.com/pro/go. That will give you a great list or resources, local meetups, places people around you Gophers that you can go and meet and talk to... And who knows, you might find someone there that's interested in eBPF, and then you can talk to them about it and join in. See if you can build something cool.

**Johnny Boursiquot:** And for those who don't know, GDN stands for The Go Developer Network. So this is sort of the meta organization behind all of the Go meetups and events, and even things like GoBridge, and things like that. So it's the behind the scenes of the behind the scenes.

**Mat Ryer:** Yeah, and it has a lot of members. 117,000 members are at the time of recording... So you could be one of those ones; or you already have to have been one of those, but you can increase the number \[unintelligible 00:55:14.18\]

**Johnny Boursiquot:** Yeah, definitely. Join the GDN and we'll send you your license information in the mail for having joined the Go Developer Network. I'm kidding. There's no license.

**Mat Ryer:** I was getting excited. I was thinking "I'll join this."

**Johnny Boursiquot:** \[laughs\] We're not a licensing organization.

**Mat Ryer:** Aww... What's the point? I wanna do it. If I don't get a badge...

**Johnny Boursiquot:** You wanna get a certificate?

**Mat Ryer:** A little silver Gopher, and you can just flash it in places and you get half off.

**Johnny Boursiquot:** I can DM you my address and you can send me a check...

**Mat Ryer:** Okay. And you're gonna make me a little Gopher police badge?

**Johnny Boursiquot:** Yeah, I'll make you a doodle and I'll send that back to you.

**Mat Ryer:** It's gonna say "Sheriff Mat" on it, yeah? \[laughter\]

**Johnny Boursiquot:** You can be a sheriff, Mat. You can be a sheriff.

**Mat Ryer:** We should have that. We should have ranks in the force.

**Johnny Boursiquot:** In the force? Where are we? \[laughter\]

**Mat Ryer:** Yeah, yeah, it's like a police force now.

**Derek Parker:** The Go Developer Force, right.

**Mat Ryer:** Yeah. It's like a government agency now. It's like, "Mat Ryer, GDN." That sounds like a news organization. Is that the homepage for it then, Johnny? You seem to know a lot about this...

**Johnny Boursiquot:** Yeah, that is the starter page.

**Mat Ryer:** How do you know so much about it?

**Johnny Boursiquot:** Oh... I know some people who know some people.

**Mat Ryer:** It sounds like a dodgy organization. \[laughter\] "I know some people that know some people..." It's like, "Oh, that's a nice GitHub handle you've got there. It'd be a shame if anything were to happen to it." \[laughter\]

Well, that is all the time we have today. I hope you enjoyed this deep dive on eBPF. Very technical and very interesting... And quite exciting. I do wanna see what Gophers are gonna build with it. I think there's some exciting opportunities there. Tweet us at @GoTimeFM if you've built something cool with it. We'd love to hear about it.

Thank you so much to our guests today. Derek Parker, Grant Seltzer - always a pleasure. You have to come back. And of course, Johnny Boursiquot was here... And so was I. \[unintelligible 00:57:01.03\] See you later! Bye!

Not the most professional ending I've ever done, but... \[laughter\] There we go. And now we have to play the outro.

**Johnny Boursiquot:** Yes.

**Mat Ryer:** Goodbye...

**Johnny Boursiquot:** Goodbye.
