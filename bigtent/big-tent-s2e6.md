**Tom Wilkie:** Hello! I'm Tom Wilkie, and welcome to Grafana's Big Tent, the podcast all about the people, tools and technology around observability. I'm joined today by Matt Toback, and Liz Rice from Isovalent. So hello, everyone. How are you?

**Matt Toback:** Hello.

**Mario Marcias:** Hello. Pretty fine. I'm happy to be here with you.

**Tom Wilkie:** Good. We're happy to have you, Mario. How's life, Liz?

**Liz Rice:** Yeah, great. Very good, yeah.

**Tom Wilkie:** Brilliant. So Matt, what's new in your world?

**Matt Toback:** Oh, so I got a new piece of technology that I think you're going to love.

**Tom Wilkie:** What's that?

**Matt Toback:** It's called the DiFluid R2 Extract.

**Tom Wilkie:** I've no idea what that is.

**Matt Toback:** Come on...

**Tom Wilkie:** It sounds like a medical device.

**Matt Toback:** In a way. It's for my coffee prescription.

**Tom Wilkie:** Oh, okay.

**Matt Toback:** So it's a coffee concentration meter, and it's awesome.

**Tom Wilkie:** Oh. So you can measure like extraction levels, and dial in your grind settings. Oh, that is so cool.

**Matt Toback:** So a friend who's a coffee roaster posted it and said, "If you're a shop, this is really going to up your coffee game", and I thought "Oh, well, that's exactly what I need for my morning cup."

**Tom Wilkie:** Okay. So my morning cup takes me half an hour to make anyway... And now this will take it even longer, right?

**Matt Toback:** You need distilled water.

**Tom Wilkie:** I have distilled water. And then I have to re-add the salts back to it to dose it back up to drinkable.

**Matt Toback:** Remind me how you make your coffee?

**Tom Wilkie:** I have a coffee machine from Seattle called Decent. It has like a tablet, an Android tablet stuck to the top of it, and it plots all of the kind of temperature, and pressure, and resistance from the puck, and all these kinds of things.

**Matt Toback:** Oh, that's right. Because you do the proper espresso.

**Tom Wilkie:** I do espresso, yeah.

**Matt Toback:** Alright. Very good. Yeah, we just do the V60, and we'll do it that way. And then just upgrade it from the V62 to the V63, because I want it to yield a little more, which is... Liz, I see you turn your head...

**Tom Wilkie:** What's the difference?

**Matt Toback:** She's not introduced yet. I'm sorry. The V63 is -- it's just a larger cone.

**Tom Wilkie:** Oh, I see.

**Matt Toback:** It's closer to what you do from a Chemex, so that way you don't overfill the smaller one.

**Tom Wilkie:** This is not a podcast about coffee, by the way, but it probably should be... What papers do you use? The most important question.

**Matt Toback:** I just use recycled newspaper. \[laughter\]

**Tom Wilkie:** Now, I thought you were going to say "Oh no, I've got a reusable plastic one", that's even worse...

**Matt Toback:** No, no, no. Just the HARIO ones is what we use.

**Tom Wilkie:** Yeah, but do you use the bleached or the unbleached?

**Matt Toback:** The unbleached.

**Tom Wilkie:** Yes. Good. Correct answer. Although that's probably super-divisive for our listeners who are into coffee. Liz, do you drink coffee?

**Liz Rice:** I do, yeah. Although I feel like very much an amateur in this conversation. I really like it. A little sage espresso machine, with like a little pressure... It's the one with the little pressure gauge on it, which apparently is incredibly inaccurate... But basically, so long as the needle hits the espresso range, that tells me something good.

**Tom Wilkie:** Yeah. The thing that I learned about coffee... So there's a chap called James Hoffman, very popular YouTube channel, that during the pandemic became really popular, because everyone was trying to make espresso at home. And so everything I've learned, I've learned from James, and it turns out he lives like three doors down from me, which I only just realized...

**Matt Toback:** No...!

**Tom Wilkie:** Yeah, no, you see him walk past the front of my house with his kids, and I'm like "Wait a second. I recognize that guy." You feel like you know him, because you've watched so much of him on YouTube, but I have never spoken to him in my entire life.

**Liz Rice:** I was going to say, you should say hello.

**Tom Wilkie:** Yeah, he probably gets that a lot. I mean, I'm not famous, and people stop me in the park and say "Hello, are you from Grafana Labs?" I'm like "Oh, God. Go away."

**Matt Toback:** No, they don't...

**Tom Wilkie:** Seriously.

**Matt Toback:** I thought you were going to say "I'm not famous, but people just stop me in the park and say hello", and I'm like "Hold on... That's not because they know you."

**Tom Wilkie:** No, no, seriously.

**Matt Toback:** \[unintelligible 00:04:01.15\] perfectly happy fellow.

**Tom Wilkie:** I was wandering around -- I've forgotten the name of the park now. I was wondering around a park in Stoke Newington, with a friend of mine from college who I was trying to recruit to join Grafana Labs. And someone stopped me and said "Oh my God, are you Tom Wilkie, the chap who wrote Loki?" And I'm like --

**Matt Toback:** \[unintelligible 00:04:17.25\]

**Tom Wilkie:** Yeah, Sam a hundred percent thought this was a setup... And it was not a setup. I think I was wearing a Grafana T-shirt at the time or something, but... I mean, my whole wardrobe is Grafana T-shirts now.

**Matt Toback:** Liz, I have to tell you that early on, when Tom joined, and he would be going on and he'd be doing this, and we'd be like "Oh, it's the Tom Wilkie. Tom Wilkie. Can you believe? Tom Wilkie." So this does not do anything for the "THE Tom Wilkie" reputation. It means that you really \[unintelligible 00:04:46.14\]

**Tom Wilkie:** One of our solutions engineers at KubeCon in Seattle many years ago, five years ago, was paying people, just as a joke, 10 bucks, to come and take a selfie with me; to have them go up to me and go "Oh, can I have a selfie?" just to inflate my ego even more. It completely worked. That was the KubeCon where we launched Loki, five years ago. Yeah.

**Liz Rice:** Oh, brilliant. Now I'm questioning in my mind whether somebody has been paying people to come and do them with me...

**Tom Wilkie:** You know, all those people in the queue for your book signings at KubeCon, they're all paid actors. Yeah.

**Liz Rice:** Yeah, exactly. How do I know they're not...?

**Matt Toback:** Will people ask for inscriptions, Liz?

**Liz Rice:** Uh, yeah. I mean, I always write something... I usually write something like "Enjoy eBPF."

**Tom Wilkie:** Not the word 'something'.

**Liz Rice:** I mean, maybe I will now... But every now and again someone will ask me to write something because they're giving the book to a friend, or a colleague, and sometimes there's some little in jokes that they want me to write about... And yeah, why not? It makes their day.

**Tom Wilkie:** Just, whatever \[unintelligible 00:05:47.00\] Eldon's paid them to ask you to write. \[laughter\] And Mario, how are you doing? Whereabouts in the world are you?

**Mario Marcias:** I'm located near Barcelona, in a small town named \[unintelligible 00:05:58.01\] in Spain.

**Tom Wilkie:** Oh, fantastic. What a lovely part of the world. I think that beats -- well, Liz and I are in London, and Matt's in Brooklyn. So I think you win on the location front.

**Mario Marcias:** This summer, I will say, you wouldn't like to be here.

**Tom Wilkie:** Why? Is it too hot?

**Mario Marcias:** Yeah... Since the last week, we're starting to have a bit of rain... So we can survive now. But it has been like being in a boiler.

**Tom Wilkie:** Oh, wow. I don't know enough about Northern Spain. Do you have air conditioning there? Is it common?

**Mario Marcias:** Yes, yes. It's common. Yeah.

**Tom Wilkie:** Oh, okay.

**Mario Marcias:** Then you end up being -- your holidays closed at home, without doing outdoors activities.

**Liz Rice:** Amazing cycling around near you. Really nice part of the world for cycling.

**Mario Marcias:** Yeah.

**Matt Toback:** Do you cycle, Mario?

**Mario Marcias:** I have just a mountain bike, but I just do some run, or some cycling, but short trips.

**Tom Wilkie:** So we are not here today to talk about coffee or cycling. We're here to talk about eBPF, in particular how eBPF makes observability awesome. So we started off chatting before the podcast about some of these eBPF topics, and I'm not sure how familiar our audience is actually going to be with the term eBPF... Liz, I guess, question for you - what is eBPF, and why is it useful?

**Liz Rice:** Yeah. So I guess people immediately want to know what the letters stand for... Officially, officially, they don't stand for anything anymore. Historically, they used to stand for Extended Berkeley Packet Filter.

**Tom Wilkie:** Which does not help, yeah.

**Liz Rice:** Exactly. It does so much more than packet filtering; that's considered, historic. So officially, it doesn't stand for anything anymore. What it allows us to do is dynamically load programs into the kernel to change the way the kernel behaves. So we need to just make sure everybody is on the same page about what we mean when we talk about the kernel. The kernel is the part of the operating system, it's the privileged part of the operating system that can interface with hardware.

So most of the time, developers are writing applications in user space, but if they want to do anything that involves hardware, which might be reading something from a file, or sending a network message, or even allocating memory, all of these things, at the lowest level, they're interfacing with some physical hardware. And the kernel is the operating system part that has the privileges to do that. So your applications are actually asking the kernel to do things on their behalf. And the kernel is also coordinating all your various different applications that might be running at the same time.

So the kernel is involved in everything that your applications are doing. And that means if we can add instrumentation into it, which we can using eBPF, we can be in a really powerful place to observe and even affect what's actually happening across the whole system and all of our applications, if we so choose.

**Matt Toback:** What did the world look like before?

**Liz Rice:** So before, you'd have a couple of choices. You could either kind of write your own kernel, make bespoke changes to the kernel, and build your own kernel... And that's not an exercise for the faint-hearted. Or you could try to get your changes accepted into the upstream kernel. Also probably not an exercise for the faint-hearted, because if you want something very bespoke... You know, Linux is the most widely used operating system on the planet, so you'd have to persuade the Linux community that your change is good for everybody, not just for you.

Your other option would be a kernel module, and that's a completely legitimate choice, a way of having a custom extension to the kernel. The only problem is that when the kernel crashes, it brings down your whole machine. There is no rescuing a crashed kernel. And all software has bugs, and kernel modules... You know, if there's a bug in a kernel module, it could easily crash the kernel. And a lot of people have shied away from using them, or using other people's third party kernel modules because of the risk that it's going to crash your machine.

We all know what crashed kernels look like, because we all saw the blue screen of death plastered across airports and train stations worldwide recently. That was Windows, but it's the same principle; crashing the kernel is a bad day for a computer.

So the difference with eBPF is the programs that we load into the kernel go through this verification process to make sure that they are safe to run, and won't crash the kernel. And that's the big step forward between kernel module programming and eBPF.

**Tom Wilkie:** So I guess that's all well and good... You're implying that the eBPF modules or programs can't crash the kernel. But there has been some cases recently where that's not been true, right?

**Matt Toback:** Coming out of the gate, hot Tom.

**Tom Wilkie:** We've got to add some spice to this, right? \[laughter\]

**Liz Rice:** Yeah, I mean, the verifier that I just talked about, that is also software. So of course, that too is prone to bugs. Now, the good thing about the verifier is it's one common piece of code that lots of different people have been involved in developing, lots of people are concerned to make sure that it's as bug-free as possible... And much like the whole rest of the kernel, the Linux kernel, it's open source, it's got a lot of people contributing to it, a lot of people using it, a lot of people field hardening it. It doesn't mean to say there's never going to be a bug in it. It doesn't mean to say it's impossible for the kernel to crash, but you reduce the likelihood of that happening a lot. And then the programs that you load in - if I write a program, if you write a program, we load them into our eBPF verifier, the verifier will ensure, bugs notwithstanding, but 99 point I don't know how many nines percent of the time that program will be rejected if there is any chance that it would actually crash the kernel.

**Tom Wilkie:** So that's a well and good, and technology is very fascinating... But one of my pet peeves, I guess, about eBPF, or Rust, or blockchain, or AI/ML even, is people are focusing on the technology and not on what problems it solves, and why should I actually care about this kind of esoteric, Linux feature.

So what are people actually -- I guess, maybe Mario, what are people using eBPF for nowadays? You know, I'm going to write a program, inject it into the kernel. What do they do?

**Mario Marcias:** Yeah, for example here in Grafana we are using it basically for observability. When you inject a program in the kernel and can see the memory of the kernel at a given state, or even of the network stack, or of an application, you can see the memory, and then you can get runtime information that might help you providing visibility of what's going on inside the kernel or your application. This is for observability, but even for security you can subscribe for multiple events in your own system, and then you can create a trace log.

And more recently, there's people suggesting that eBPF could be used for hot patching of your system. Imagine a critical vulnerability, instead of having to wait for a patch or reinstall the new kernel, restart your systems and so on, you could hot load this patch that will intercept some calls, and cold fix this kind of security or stability issues.

**Liz Rice:** That has been done before. There's a couple of cases. One is the idea of a packet of death. So maybe there's a bug in the kernel, that means a particularly formed network packet... Maybe it's got like an incorrect buffer length, or something. And if you craft a packet in that way, it will crash the kernel. And there were mitigations distributed in the form of eBPF programs that can look at that packet before it gets processed by the stack. So the packet can be discarded if it is a packet of death.

The other example that I've heard of is I believe there were some mitigations around some of the Spectre related vulnerabilities that could be distributed in eBPF form.

**Matt Toback:** I'm just curious, as eBPF has grown in popularity, has there also been this growing amount of folks that are using this as an attack vector? I'm sure, but I mean, as the technology has kind of gone from zero to nothing, have you seen this kind of race go back and forth?

**Liz Rice:** I would say yes. I mean, everything is an arms race, particularly in the security world. You do see people publishing things like rootkits using eBPF... And it is certainly true that you could insert malicious eBPF programs. If you have the permissions to do so, you can do all sorts of incredibly powerful things with eBPF. And if you're a bad person, those could be malicious things. So yeah, of course, there will be. Don't run any old eBPF that you just pull off the internet without checking where it came from.

**Mario Marcias:** Yeah, I'd say that this is something that if you have privileged access to a system, you can do bad things with or without eBPF. So I think in that case eBPF is more hazardous than any other.

**Tom Wilkie:** We were talking about the different use cases for eBPF, and obviously, this is an observability podcast, so we won't be talking about it if it didn't have observability use cases... But I do want to kind of give some thought to the others. Mario, you mentioned security use cases... I think there's an elephant in the room here... Liz, what is it that Isovalent does again?

**Liz Rice:** Well, there is also networking as well. I mean, networking and security can kind of go hand in hand... I just talked about discarding network packets that are known to be malicious. So Cilium is a graduated project in the CNCF, and it's pretty much, I would say, the de facto, default solution now for networking in Kubernetes. It's been adopted by all the major cloud providers... It is the only graduated, what we call CNI, container networking interface. Hugely widely adopted. And what's kind of interesting is how Cilium and eBPF were developed kind of hand in hand. They were co-developed. So one of the maintainers of eBPF within the Linux kernel, Daniel Borkmann, was also one of the founding engineers of Cilium. And a lot of the time "Okay, in order to do a certain networking capability, we need to enhance eBPF within the kernel." And sometimes that can take quite a few releases between putting the feature in the kernel and it actually being a version of kernel that people are running in the wild, in their production centers. So it's quite a long game. Some of these features take a few years to really roll out to mass usage. But we're now really seeing that very, very widely deployed, because all the major Linux distributions are now using kernels that include eBPF capabilities.

**Tom Wilkie:** So you've been able to do a lot of pretty advanced networking stuff with the Linux kernel for a very long time. It's had embedded ability to do overlay networks, and all sorts of things like that. So why would I build a network in eBPF? Why wouldn't I just use the capabilities that exist in the Linux kernel?

**Liz Rice:** So I think a lot of it is about performance and scalability, particularly when we talk about cloud native and container networking. One of the things that we can do with eBPF is essentially short-circuit some of the networking paths to miss out bits that really don't need to be run.

For example, if you've got a container, it's typically got its own network namespace, and it's running in a host that also has its own network namespace. And a packet coming through the Ethernet connection into that machine, it's going to traverse the networking stack traditionally, in the host namespace, and then go across a virtual Ethernet connection into the container net space, and then get processed again. So essentially, you can end up with duplicate processing. Whereas with eBPF, we can be smart about only really doing that processing once. And in fact, there's a new capability called NetKit, which has gone into -- I don't know, 6.6, something like that, version of the kernel, where we can now achieve zero overhead networking. So essentially bypassing all of the excess kind of network processing overhead, and get exactly the same networking performance out of a container as you would from just running an application on the host... Which is quite a significant jump in performance from traditional container networking. And the other thing we can do is at the same time, while we're processing a packet and deciding where to send it, we can also be applying things like security policies to those packets, so it's super-high performance.

**Tom Wilkie:** And I guess measuring things.

**Liz Rice:** Well, indeed, yes. \[laughs\]

**Tom Wilkie:** Which is the segue to observability. Actually, before we move on to actually talk about observability and eBPF, I guess this sounds brilliant. It sounds like you can do anything with eBPF, and like I should probably go out and learn how to do this. But are there some things you shouldn't use eBPF for? Like, why would I not start writing my web server as an eBPF program, and loading that into the kernel? I guess probably a question for Mario.

**Mario Marcias:** Probably you couldn't do that, because the size of an eBPF program is limited, and for security reasons what you can do with an eBPF program is also limited. But more than saying you shouldn't, maybe I change that bit - you don't have to. I mean, developing eBPF programs comes with a cost, in the sense that you need to program in C... The code is a bit more difficult to test than just running unit tests. And even to run those programs, you need elevated privileges, or some extra capabilities.

Sometimes for observability - I'm thinking in the observability use case - the operating system or the applications you might be monitoring already provide standard APIs for observability that could provide you a lot of data. I'm thinking for example in Linux, if you want to get basic process information, you have the proc file system. Or many web servers or message queues like Kafka already provide a lot of metrics. You should use eBPF when you don't find a standard way to instrument your applications, or you need a level of detail that is not available by default.

**Tom Wilkie:** Nice.

**Liz Rice:** I'm gonna agree and disagree, if that's okay. So basically, I agree with the fundamentals here that just because you can do something with eBPF doesn't mean you should; it doesn't mean to say -- it's definitely not the right hammer for every nail. So I'm by no means saying that we should go out and implement everything in eBPF.

**Tom Wilkie:** Can we have that as the quote? "Liz Rice says we should go out and implement everything in eBPF." \[laughter\]

**Liz Rice:** Well, what you can have is you could, or at least from a complexity point of view -- I mean, Mario is correct that there are also things you can't actually manipulate from within eBPF programs today. For example, as far as I'm aware you can't write to the screen using eBPF today. So you would have to send information to a user space process for user space to then actually make the system calls that get information displayed on the screen. But you can now -- we have shown that eBPF is Turing-complete. In other words, there is no limit to the set of computable problems that, if they're computable, they can be implemented in eBPF. We actually showed an implementation of something called Conway's Game of Life, which people might've seen... It's this kind of grid where depending on rules, the number of alive cells that surround a cell, the next generation of that cell will either live or die. So you can see these patterns of cells growing and dying, as generations go on. We've implemented that in eBPF, and there's some kind of formal proof. I'm not a computer scientist, so I couldn't tell you how this proof works, but there is a proof that says if you can implement Game of Life, you have created essentially a Turing machine and you can compute all computable problems.

**Tom Wilkie:** Very cool.

**Liz Rice:** Which I think is pretty cool, considering a lot of people say "Oh, that's way too complex to implement in eBPF." Well, basically, there is no "It's too complex." It's just, it might not be a sensible thing to do.

**Tom Wilkie:** Funnily enough, someone implemented Conway's Game of Life in a set of Prometheus recording rules as well, and proving that Prometheus recording rules and PromQL are Turing-complete... Which means technically any eBPF program could be embedded into a set of recording rules and PromQL expressions, and vice versa, because there's an equivalence principle between the two. I've no idea how you do that, and I am not smart enough to do that either, but - yeah... I wonder whether Loki is Turing-complete; whether we could implement Conway's Game of Life there.

Right. So eBPF - we know what it is now, and we know what it's used for... Let's focus in on observability. This is an observability podcast. So I guess what is eBPF used for in the observability space? As we've discussed, we're probably not implementing a time series database in eBPF.

**Matt Toback:** But if you do, you get a T-shirt. \[laughter\]

**Tom Wilkie:** Yeah, so Mario what are -- anyway, I guess if people are listening to a Grafana podcast, they probably want to know what we're doing with it as well. So what are we doing with eBPF at Grafana Labs?

**Mario Marcias:** Here in Grafana Labs we have a couple of products using eBPF. One is Grafana Beyla, that attaches eBPF programs at different levels, so a different level of the operating system, including the network stack, and is able to instrument your running applications, your running service in different protocols, either services and clients, and provide application-level metrics, like requests per second, errors, duration, and so on... And it's also able to decorate those information with, for example in the case of HTTP, the path, the request size, the returned code, and so on.

The advantage of that is that you don't need to modify your applications or reconfigure them or redeploy them. You have your running applications, deploy Grafana Beyla in a host, and automatically, thanks to eBPF, it will attach those small programs that are deployed, eBPF programs that are deployed at different levels will hook on different application events, and provide those information. Also, Grafana has another tool named Pyroscope, which is able to profile the performance of your application by function, using flame graphs.

**Tom Wilkie:** Very cool. Thank you. Yeah, and I guess -- so just to make sure I understand correctly, Beyla is like an auto-instrumentation agent, if you like, written in eBPF, that you install on the machine, and then anything you run on that machine, automatically you're going to get rich kind of metrics and traces out of those systems, without you having to modify the binaries at all.

**Mario Marcias:** Yeah. It's a normal application written in Go, that loads those eBPF programs, and then from the kernel space, those programs in the kernel space communicate with Beyla in the user space, and then Beyla reconstructs all the information and sends it. By the way, it uses the Cilium eBPF library from Isovalent.

**Tom Wilkie:** Oh, very cool.

**Liz Rice:** Awesome.

**Mario Marcias:** It's amazing. I think many other big projects are using them because it facilitates the life of eBPF developers a lot.

**Liz Rice:** That's great to hear. Thank you.

**Tom Wilkie:** And so Beyla is not the only kind of eBPF observability game in town. And this is the Big Tent podcast... So I guess what's Isovalent and Cilium bringing to the observability space?

**Liz Rice:** Yeah, so there's a subproject within Cilium called Tetragon, which is security observability, and also enforcement, optionally. So this is really focusing on observing events that are outside of some security policy. And if you're interested in detecting and possibly preventing suspicious-looking activity. And one of the really nice things is that in Tetragon we can filter those events within the kernel, and only actually report the events that are outside of policy.

For example, for a long time you've been able to use eBPF to, let's say, report on somebody trying to open a file. And there have been eBPF-based security tools that have then been able to take all of the kind of file opening events and filter them in user space, so that you can say "Ah, here is somebody trying to open your etc shadow file, and that seems like a bad idea. Do you really want somebody doing that?"

**Tom Wilkie:** Etc shadow, by the way, for our non-technical listeners, is where your passwords are stored.

**Liz Rice:** Yes. \[laughs\]

**Matt Toback:** You mean on the sticky pad on my desk? \[laugher\]

**Liz Rice:** The computer's version of that sticky pad, yes. So with Tetragon, rather than passing information about every single file access to see whether or not it is actually an etc shadow, we can do that filtering inside the eBPF program in the kernel. And that makes it dramatically, dramatically more efficient. It's a bit like kind of boy who cried wolf. You really only want to send events where you think they are genuinely outside of the policy, and we can separate the kind of signal from the noise in that way really efficiently.

**Tom Wilkie:** I mean, that's a really interesting aspect, because a lot of questions we get from our users and our customers is what is the overhead of adding this instrumentation? If we're going to install Prometheus and install an agent on every machine, and go and instrument all our code, and do all this work so we can understand what's going on, what's the impact on the performance? I guess, what is the impact on the performance of something like Beyla, or like Tetragon? How much resources does this use in the machine?

**Liz Rice:** I mean, you can write a pathological example for anything. So it very much depends. But we did do some benchmarking of Tetragon, and one example is looking at all of the file accesses that happen when you compile the Linux kernel... Which is - you know, you're compiling an awful lot of C files and header files. There's a lot of file accesses going on. And the instrumentation - and we can send a link to the blog post just in case my memory is faulty... But my recollection is that it was less than 2% CPU overhead for being able to report on all of those file accesses. I mean, who wouldn't take 2% CPU overhead to really understand what's happening from a security perspective?

**Tom Wilkie:** And Mario, there's another project that's very similar to Beyla, that uses eBPF to do Golang auto-instrumentation. I think it's called Odigos. Is that right?

**Mario Marcias:** Yes, yes.

**Tom Wilkie:** And if I remember correctly, they published a blog post comparing -- I mean, this is the Big Tent podcast. We like to plug things that aren't Grafana Labs here. So I remember the Odigos team published a blog post comparing the overhead of their eBPF instrumentation to open telemetry auto-instrumentation, if I remember correctly. Do you know what I'm talking about, Mario?

**Mario Marcias:** Yes, I know it. Yeah.

**Tom Wilkie:** Do you remember what the overhead comparison was?

**Mario Marcias:** Yes, the eBPF code was reported to consume -- I cannot say the order of magnitude, but sensibly lower CPU consumption than open telemetry. Actually, this difference was noticeable when instrumenting some, for example, native languages. But with interpreted languages like Python or Ruby, the performance improvement is like one or two orders of magnitude.

**Tom Wilkie:** Oh, wow. So other than performance... I get it, that would be a big enough reason for most people. But other than performance, why would I go the eBPF route with something like Beyla or Odigos, over using an auto-instrumentation written in the language of my application, so in Python, in Ruby or Node or Java or C\#, or whatever?

**Mario Marcias:** Yeah, that's a pretty good question.

**Tom Wilkie:** Well, thank you.

**Mario Marcias:** I have to say that if your application is already instrumented with language-level agents or with manual instrumentation, and it works for you, then probably you don't need Beyla... But there are some cases in which a tool like Beyla or other eBPF-based auto-instrumented can be very helpful.

One is, as we said before, in some languages, the instrumentation is written in interpreted languages, and it has some noticeable performance impact. On the other side, it might happen that your instrumentation language agents or libraries are not supported in your legacy code, a very old version of Ruby or Python runtimes, or in a very old version of a language... Or even if you don't have the code of your application, because you are using a third-party application. Then in that case, Beyla can be very helpful.

And also, even if all your applications can be manually instrumented, if you have a lot of applications in different languages and you just want to get instant instrumentation, then using eBPF is a convenient way just to get automatic instrumentation of all your code, without having to spend months redeploying and adapting your applications for instrumentation.

**Tom Wilkie:** Yeah, very cool. If I remember correctly, we had a user - I think a user or a customer; don't know the difference nowadays - who wanted to use the Java auto-instrumentation, but was using some ahead-of-time compiled Java, and ended up not being able to auto-instrument that, and therefore used Beyla instead. Am I remembering that correctly, or...?

**Mario Marcias:** Yeah, yeah. It's true, that has happened for some users. Yeah, it's a common use case. Yeah.

**Tom Wilkie:** Yeah, that's very cool. I guess within this eBPF auto-instrumentation world, is there things that the eBPF auto-instrumentation can't do? Are there reasons I would want to use the language-level instrumentation?

**Mario Marcias:** Yeah. With eBPF, you can access to virtually any part of your system. But that doesn't mean that it's easy to get the information, because from an eBPF program, it's a C program, and what you're seeing is binary data. And you need to know how this binary data is structured at a given point. So for compiled languages like Go or C, which have a clearly defined stack, structure, you know that when you enter a given function, the stack will contain some information. With other languages, like Java, for example, this is much more difficult, because you can enter to some events, or you can see some events, but it's pretty difficult if not almost impossible to extract information from the heap, or from the JVM.

Actually, for those kind of languages, we don't attach probes directly into the application, but we check the interactions between the application and the kernel. So when the application sends some information via socket, it's there where we can easily catch and extract relevant information.

**Tom Wilkie:** Very cool. I have one more question, sorry... I actually don't know a huge amount about this. This is fascinating to me. One of the things I'm kind of also fascinated by inside organizations is like whose problem is this. And in particular, when we're talking about auto-instrumentation, we've got to make some comparison back to the traditional APM techniques, which required you to often go and grab some jar, and put it on your command line, and that would do the auto-instrumentation for you. I think - and I'm trying this out to see if it fits; I kind of want both of yours opinion on whether I'm just completely barking up the wrong tree here... I think we're seeing a shift with the rise of things like platform engineering to like more and more of capabilities are offered by the internal development platform, be that like Kubernetes, the cloud, all of these things. Suddenly the application developers inside large organizations don't have to worry about where their software runs, how it's scheduled, how it recovers from hardware failure, all these kinds of things. And now I think with eBPF we're also seeing that these same application engineers no longer have to worry about how it's instrumented. I guess what I'm saying is with eBPF auto-instrumentation is telemetry collection and instrumentation becoming a function of the platform as well? Or am I just like completely going off piste here?

**Liz Rice:** I think that's absolutely true. I mean, we've seen that a lot over the evolution of Cilium really, where - yeah, I mean, Isovalent customers are typically in platform teams, and they have networking requirements they're going to have to solve, they might have some security problems that they or a security team need to solve between them... And I think the idea that you can have so much of this embedded into the underlying platform such that application developers don't really need to care, and that they can have a service offered to them that gives them visibility into which services are talking to which other services, for example, or that automatically gives you encrypted connections across your network. These are all sort of benefits that just roll out automatically to all of the application development teams... And things like being able to observe how your applications are behaving becomes a service that the platform team offers to the development teams. I think that's a very common model.

**Tom Wilkie:** I guess the good thing about this is also it becomes more consistent across an organization as well. Instead of every application team picking their own vendor, their own technology for doing their own understanding... And in these larger organizations where we've all got to get along and we've all got to talk to each other now, and that goes for our software as well, having a common observability, a common networking, a common security standard across the team is kind of useful, I guess.

**Liz Rice:** And if you're only instrumenting in the kernel, the application teams don't even need to do any work. It just -- it's kind of free, essentially, for them.

**Matt Toback:** You touched on something, Tom, that I think is really interesting, where if there's this world where everyone is working together and supporting each other, it's wonderful... Liz, have you seen experiences where an application developer wants to do this, but organizationally they're blocked, the application developer, from instrumenting it? Or to where it actually crosses boundaries or lines in some way to where they can't instrument it? Or no. This is my ignorance.

**Liz Rice:** In terms of being able to use eBPF for the instrumentation they want?

**Matt Toback:** Yes, that's right.

**Liz Rice:** So in order to load eBPF programs, you do need privileges. Let's call it root. It's not quite, but essentially, root privileges. And that may require you to go to your platform team and say "I want to use this thing, and I don't have privileges to do so." And even in some managed environments, you may not be able to. So for example, if you're using something like Fargate from AWS right now, you can't run privileged containers, and you can't therefore use your own choice of eBPF capabilities. They do have some AWS service offerings that are built on eBPF, like GuardDuty, but you can't just load your own eBPF in that environment today.

**Matt Toback:** I wonder if people are struggling with that in some way, where the -- I mean, I guess on the platform teams, they should be as aware, if not more aware of eBPF and probably instrumenting it or toying with it. But I'm curious if folks are finding that point of friction in some way, where they're trying to convince someone to use it and they can't.

**Tom Wilkie:** I mean, we've definitely seen that with people adopting Beyla. Often it will be an application team is like "I don't want to do this work. I'd rather use Beyla, but I don't have permissions to run Beyla", so they go to the platform team to ask them. And unfortunately, in some organizations, platform teams still say no, instead of yes.

**Matt Toback:** We'll get there, perhaps. Aren't saying yes yet.

**Tom Wilkie:** Aren't saying yes yet. Yeah. Beyla will just be baked into every platform soon enough, so it'll be fine. I want to get a little bit -- I've been trying to keep it high level, I've been trying to keep it accessible. I just want to be a little bit technical for a little bit. So Mario, you said that the eBPF programs effectively see user space just as binary, and that you therefore need to know ahead of time the structure of things like the stack, and certain data structures in the application to really make sense of this just sea of binary data. I guess, how much effort is it to make Beyla support another language, or another version of a given library, or another language? And how much of that is common between - -how much of Beyla is language-specific, how much of it is library-specific, and how much of it is just common and standard across all of them?

**Mario Marcias:** Yeah, I'd say maybe 20% of the Beyla code is language or platform-specific. If we want to provide some -- it will depend. For example, sometimes we've found that new versions of libraries were - or some, for example in Go programs, you said newer versions of libraries that updated some fields in the structs, and that broke the code... So I think support for that is relatively simple. You just need to be aware of these newer structures. And then in the program, you load, saying "Okay, for that given version of the libraries, use these offsets, for the other versions of the libraries use another offsets." It could happen. It hasn't happened to us, but it happened, for example, in the past for other tools, that if the compiler changes, your code will stop working. For example, it happened with Go... I'd say Go 1.17. They started to move from stack-based parameters, storing the function parameters in the stack, to store them as registers. That means that suddenly any new version of programs compiled with this new version of Go wouldn't work with other tools. So you still need to be aware of those differences, to pay attention to those kind of changes, in order that you're -- that doesn't mean that existing applications that work will stop working, but that could mean that applications, as long as they are updated, their libraries, some runtime or version of compiler version could stop working. So you always need to have a very fast reaction to that. Fortunately, Beyla uses a very modular structure, so it's a matter of adding new modules and selecting them accordingly.

**Tom Wilkie:** Cool. Very cool. I also heard that -- I'm not sure if this is still true. Maybe you can correct me here, Liz. You used to have to compile the eBPF program on the kernel, because it depended on kernel headers, and they changed between releases or something... That sounds like a nightmare, shipping these programs and asking users to compile them.

**Liz Rice:** It was, let's say, difficult. And earlier -- there's quite a lot of code in Cilium to allow it to work effectively on multiple different versions of kernels to work around that problem. But now it has been essentially fixed in a more generic way by a thing called "compile once, run everywhere." The idea of that is that you kind of embed the information about the way that the kernel structures are laid out on the machine where you compiled the program. And then when you load the program into its destination, there's some adjustment that can happen to kind of compensate for any differences in the way those structures are laid out.

**Matt Toback:** So Tetragon was the new project, right? Or relatively new? How old is that?

**Liz Rice:** Well, when did we release it...? I'm going to say it's probably a couple of years now. I'd have to look up exactly when we first started talking about it... But yeah.

**Matt Toback:** So maybe this is less top of mind, but what were the other potential names for it?

**Liz Rice:** Ah, well... So originally, the network observability component in Cilium is called Hubble, as in the space telescope. And Tetragon kind of emerged from, or was an evolution of Hubble, in the sense that Hubble gave insight into each individual network packet, or gives insight into each individual network packet. And our customers - and at this point, this was really for Isovalent paying customers - were saying "Well, this is great. I can detect this malicious network packet. But I'd really like to know what was the process that kind of generated this. How did this packet come to be?" So before it was open source, we called it Hubble FGS, for Hubble Fine Grain Sensor, which is another component of the space telescope, apparently. So yeah, before it was Tetragon, it was Hubble FGS.

**Matt Toback:** Got it.

**Liz Rice:** And for a while, that was kind of going to be its public name as well. But we were kind of -- you know, it's so... "What does this mean? How does that convey anything?" How are people going to remember the difference between Hubble and Hubble FGS, when they had actually evolved into being sort of separate components? So Tetragon kind of came out of an enormous brainstorming of possible name ideas. But one of the things that's really nice about it is there's a \[unintelligible 00:47:03.08\] called something like tetragonista, something beginning with A, the Latin name for this bee, and eBPF, the mascot, is a bee... And this tetragonista bee is harmless to humans, it produces lots of honey... It's just generally a really lovely particular variety of bee, so we thought that would be a good name.

**Tom Wilkie:** Yeah... They don't let me name things anymore after I named one of our projects Klumps. \[laughter\] It's not a joke, I actually did. It stood for Kubernetes Linux Use Method Prometheus, I think. Klumps. And they're like "Yeah, Tom, your naming privileges have been revoked."

**Matt Toback:** And a lot of people don't realize it's actually the name of the most dangerous bee to humanity. \[laughter\]

**Tom Wilkie:** It sounds like you can get a cream for it, doesn't it? Yeah.

**Matt Toback:** So thank you for the interstitial, Liz, but I'm always so interested... Because it feels impossible, and we keep on inventing things in this world, and then we have to name them...

**Liz Rice:** Naming is definitely hard.

**Matt Toback:** And then it has to mean something... Oh, it's the worst.

**Tom Wilkie:** And on that, how did we come up with the name Beyla, Mario?

**Mario Marcias:** It was some kind of contest... Everybody started to suggest names, and we voted Beyla. Beyla is a character for the Norse mythology.

**Tom Wilkie:** Oh, right. Yeah. Like most of our names.

**Mario Marcias:** Yeah, I cannot explain who exactly is she, and what the name means. Sorry, I should have been prepared for that question... Yeah, but it was basically a contest.

**Tom Wilkie:** All of the naming at Grafana Labs is like Greek or Norse mythology is what we tend to pick things from. And we try and make the first letter line up with the thing it does. So Mimir is metrics, Loki is logs, Tempo is traces, Beyla is eBPF... So maybe we went slightly wrong there.

**Liz Rice:** It's got BE; it's almost like \[unintelligible 00:49:06.04\]

**Tom Wilkie:** Yeah. So yeah, that's generally our naming scheme at Grafana Labs, is to try and make those \[unintelligible 00:49:12.17\] our agent. Yeah, trying to make these things work. Right, so I wanted to talk a little bit about like what the future for Beyla and for eBPF, what does that hold... But first, I had a question about Windows eBPF. Is that a thing? Does that exist? Can I take Cillium and run it on Windows?

**Liz Rice:** Yes, yes. I mean, not sort of straight out of the box... Obviously, the executable won't run directly. But there is eBPF for Windows. It's a Microsoft open source project called eBPF for Windows, and it has been shown to run Cillium, I'm going to say fundamental basics from Cillium... So when I first heard the idea of --

**Tom Wilkie:** Surely all of the internal data structures, and... Yeah.

**Liz Rice:** Exactly. How can you reuse this? But then particularly for the networking side, if you think about it... If I send you a network packet, it doesn't matter whether you're on a Windows machine or a Linux machine; you've got to interpret that the same way. And your network stack has to follow the same kind of rules about how networking works. So actually, the way network packets are processed and the data structures are the same inside Windows or Linux. So that's meant that -- you know, building the eBPF software machine had to be implemented from scratch inside Windows, but actually giving a network packet data structure to an eBPF program, that program can be the same.

**Tom Wilkie:** And dare I ask -- you know, I'm going to assume the eBPF runtime and the verifier is all GPL. How is Microsoft squaring that circle? Not reusing anything, I hope?

**Liz Rice:** Yeah, quite a lot of the components run in user space rather than in the kernel.

**Tom Wilkie:** I see.

**Liz Rice:** This is actually all laid out quite neatly on their project webpage, so... I'm definitely not the source of truth for this. They reused a user space eBPF verifier project that already existed. So they were able to leverage work that had previously been done... Yeah, there was definitely that kind of wall between Microsoft engineers looking -- you know, they can't look at the Linux source code, and then reimplement it in Windows... So there was a - I guess there's a group of people who are working it out based on the specifications of eBPF.

It was one of the reasons why the eBPF Foundation was set up, actually, to have a body that wasn't just a Linux body, but that was actually interested in making eBPF for other operating systems as well. It's become, I think -- I'm not sure whether it's actually sort of a ratified IEEE standard, but it was certainly going through that process to become a standard that everybody can follow. So, yeah.

**Tom Wilkie:** Very cool. Mario, what's -- I mean, Mario, does Beyla work on Windows? Has anyone tried that? Or is that the next hackathon?

**Mario Marcias:** No. Correct me if my knowledge of Windows eBPF is outdated, but we had the chance to attend to a conference about that, and it seemed that it was very focused to the network stack: the Express, Datapath, and so on. So you could attach eBPF programs at the network level.

Beyla uses other kind of kernel probes and U-probes to attach programs to some kernel events that, as long as I understand, they are not available in the eBPF implementations of Windows. And even if it were available, they rely a lot in how the Linux kernel code is written: the structures, the functions, and so on. So even in that case, in Windows, we should completely rewrite our probes, if it was possible.

**Liz Rice:** There is work afoot going on to extend eBPF to other - you know, not just networking stack. So for example, for security tooling. I'm not very close to it, so I don't know the details, but I guess things like being able to expose a file access event; the file name won't be the same, the path won't be the same, but all files will have a name that can be expressed in text. So being able to expose that kind of event I think is work that's currently in progress on the Windows side.

**Tom Wilkie:** So I guess, to take us home, what does the future hold for Beyla, Mario? And then Liz, what does the future hold for Cilium and eBPF? So Mario, what are we working on in Beyla world?

**Mario Marcias:** For Beyla we have some main lines of future directions. One is make it even more simpler or more automatic to get instant instrumentation. I consider it's already pretty simple to deploy, but we still need to help some users to get more simplicity, like just, for example, with our new Helm chart, deploying it and get instant, with zero configuration.

On the other side, we would like to add more support, or get better information of some languages and protocols. We already support some protocols like Kafka, but we would like to add other message queues, other databases, and so on.

And as a third research line or implementation line it's to let Beyla run with even lower privileges, or at least to let the users select this trade-off of saying "Okay, I want to remove still some capabilities, even if I lose some functionality." Because there are some sysadmins that are still reluctant to give a program admin capabilities.

**Tom Wilkie:** No, that's very cool. Thank you. Thank you, Mario. And Liz, what's going on in the eBPF world and Cilium? What does the future hold for those two?

**Liz Rice:** Yeah, I guess there's two parts to that answer. There's sort of eBPF more widely, and then maybe I'll talk a bit about Cilium and Isovalent. So eBPF - there's quite a lot of work going on at the moment around things like the verifier, the threat model, the security model, auditing the verifier and so on... I think it's getting quite a lot of attention. Particularly now, people are seeing the dangers of tooling that directly accesses an operating system kernel. A lot of us in the eBPF community are saying "Well, eBPF is a great solution to that." But we probably need more research and security analysis to really convince people that that's the case. So that's quite a big area of activity.

One thing we haven't mentioned, and I probably should, is -- so Isovalent was acquired by Cisco earlier this year...

**Tom Wilkie:** Was it?!

**Liz Rice:** Yeah. \[laughs\]

**Tom Wilkie:** You heard it here first.

**Liz Rice:** Yeah, I know. Hot news, hot news.

**Matt Toback:** We could say that we recorded this quite a while ago, and that we're breaking it, and then we just release it...

**Liz Rice:** Yeah, you heard it here first. \[laughs\] I'll get in terrible trouble from PR for saying that. So Cisco have been incredibly supportive of our team continuing to invest time in Cilium. I mean, Cilium is a Cloud-Native Computing Foundation project. Because it's a foundation-owned project, it's a community-run project. It's no longer Isovalent's alone. But we do invest a lot of resources into it. So the fact that Cisco are 100% behind us continuing to do that is, I think -- it's fantastic for all of us, and it's fantastic for the future of the project.

Yeah, so Cilium will carry on moving from strength to strength. We're very much looking at things how you seamlessly network between your cloud-native workloads and maybe those, what we call legacy workloads. I'm not sure whether that's a little bit rude, but... You know, workloads that have been running in your on-prem environments for however many years or decades. You want to be able to access those and communicate between those and your newfangled Kubernetes workloads. So that's quite a big area of focus for us right now.

And obviously, Tetragon and the security that we're providing with that, and one of the ways in which that technology is being used is in a product that Cisco are building called HyperShield, which takes eBPF and some fancy AI things and some fancy dual dataplane things, and building --

**Tom Wilkie:** We've managed to go almost the entire podcast without mentioning AI.

**Liz Rice:** Yeah, sorry... I failed at the last hurdle. There we go.

**Matt Toback:** Is that still a thing?

**Liz Rice:** AI had to be mentioned.

**Tom Wilkie:** Yeah, Apple Intelligence is what we're referring to, right?

**Matt Toback:** Oh, yes. Exactly.

**Tom Wilkie:** Sadly, that's all the time we have today. I want to say a big thank you to Liz and to Mario. Thank you, Liz. Thank you, Mario.

**Liz Rice:** Pleasure.

**Mario Marcias:** Pleasure.

**Tom Wilkie:** And a big thank you to Matt, my co-host.

**Matt Toback:** Oh, thank you.

**Tom Wilkie:** You thought I'd almost forgotten you. I'm Tom Wilkie, and thank you for listening. We'll see you next time on Grafana's Big Tent.

**Outro:** \[58:42\]

**Liz Rice:** My delivery has just arrived. Sorry.

**Tom Wilkie:** No, no, go for it. We'll pause the recording and we'll edit this bit out. Or we'll leave it in and we can all talk about Liz while she's going to answer the front door.

**Matt Toback:** What do you think she's getting delivered?

**Tom Wilkie:** I can tell you what -- oh, I've already told you what I'm getting delivered, haven't I? Yeah. My Amazon delivery has been eight stops away now for an hour. It's literally 300 yards away from my house. They always do this. I don't know who in that location gets so many parcels delivered that it takes an hour to deliver them all. But it's eight stops away from my house. And I had Amazon delivered on Saturday as well, and it was exactly the same thing. Eight stops away for an hour. I'm like "Ugh..."

**Liz Rice:** Sorry about that. I'm back.

**Tom Wilkie:** Well, you have to tell us what you got delivered now, Liz.

**Liz Rice:** So it's actually a new bike for my husband.

**Matt Toback:** Ooh, we're back to cycling.

**Liz Rice:** Yeah. \[laughter\] Gravel bike.

**Tom Wilkie:** Speaking of bikes, I'm going camping this weekend, and I'm going to take my bike with me. And I have to go out -- and I haven't used it for a year. So I have to go out and clean it, and probably oil it, and probably pump the tires up, and recommission the bike so I can use it this weekend.

**Liz Rice:** Yeah, that kind of after you've left it for a while - it's not really fun.

**Tom Wilkie:** Yeah, it just needs -- it's mostly home for spiders at the moment, so it just needs to be de-spidered, pumped up the tires - I've got some new inner tubes just in case - and then oil everything. And I'm going to cycle to the pub tonight to just check how it all works.

**Liz Rice:** That's a reasonable way of checking it out, yeah. I like your optimism, that you're just -- you know, replace both inner tubes and get all the spiders off, and you'll still have plenty of time and energy to go to the pub.

**Tom Wilkie:** Oh, definitely. It'll be fine. It'll take me half an hour. I was going to do it this morning, because I had to go to the dentist and I was going to cycle to the dentist... But then I was like "Definitely don't have enough energy for that first thing in the morning."
