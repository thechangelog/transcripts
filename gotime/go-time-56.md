**Erik St. Martin:** Welcome back everybody to another episode of Go Time! Today's episode is number 56. On the show today we have myself, Erik. Brian Ketelsen is also on... Say hello, Brian.

**Brian Ketelsen:** Hello, Brian.

**Erik St. Martin:** \[laughing\] I need to come up with something different, just to stop you from saying that.

**Carlisia Pinto:** Are we back to that? I thought that was over.

**Erik St. Martin:** And we also have Carlisia Pinto on the show.

**Carlisia Pinto:** Hi, everybody!

**Erik St. Martin:** And our special guest today, we actually talked a little bit about on our GopherCon retrospect as [one of our favorite talks](https://www.youtube.com/watch?v=01w7viEZzXQ&t=35s). Please welcome Liz Rice!

**Liz Rice:** Hello!

**Brian Ketelsen:** Yay!

**Liz Rice:** It was so nice what you said about my talks at GopherCon. That was one of the episodes of Go Time that I've heard and it was... Oh, yeah! I was blown away by the comments on that.

**Brian Ketelsen:** Oh, you actually listened to that?

**Liz Rice:** I did.

**Brian Ketelsen:** Ew! Yeah, sorry.

**Erik St. Martin:** Yeah, I think it was definitely one of our favorites, and I really enjoyed your [container talk](https://www.youtube.com/watch?v=HPuvDm8IC-4), too. Is that Golang UK you gave that at?

**Liz Rice:** Yeah, it was. Last year.

**Erik St. Martin:** Yeah, that was-- I really loved that one too, because it really broke down what a container is. There's a lot of confusion a lot of times when people get into containers and they try to compare it more to a lightweight virtual machine rather than a highly configured process. And I think implementing one from scratch really demonstrates that.

**Liz Rice:** Right. It's the... I don't know if there is a better way of really seeing what's going on than to see the code... For people who understand code it's the clearest way. I always find it much easier to see code than to try and understand what people mean when they draw boxes. Show me the code!

**Erik St. Martin:** Yeah, boxes only get you so far. That I think is enough to hook you, like 'Oh, this could be interesting. How might I use this?' But when it comes down to truly understanding and implementing something, seeing the code is where it's at.

**Liz Rice:** Yeah, I think so. I'm exaggerating about the boxes; some boxes are really good.

**Erik St. Martin:** Who was it? Was it Bob Martin who made that comment about "Architecture is just about drawing boxes with arrows going in one direction", something like that? \[laughing\] So, for anybody who might not be familiar with you and your work, do you want to give a brief background?

**Liz Rice:** Sure, okay. So, I am I suppose an engineer by trade, I spend a lot of my career working on protocols, and I started off writing in C for a very long time. And I had a few years where I stopped writing code and I went and did product management for a few companies. Some of them you might have heard of, like Skype and Last.fm. And then I did some consultancy for a few years, and then it turned out people had invented much more interesting languages than C, and I got back into programming again.

\[00:04:05.23\] And now I am... Well, a technology evangelist is my job title for a company called Aqua Security, and we help enterprises with securing their containerized deployments. But I basically have a really fun job of demonstrating things and trying to explain what is going on in various basic technology, hopefully with some kind of relationship to security and to containers, but we're pretty relaxed about how... Some of my talks don't really talk about security very much at all, and so... Yeah, it's really fun.

**Erik St. Martin:** I think understanding things at a more in-depth level helps with security though too, so I'd argue that it's beneficial from a security standpoint.

**Liz Rice:** I definitely think it is, and particularly with the world of containers where, if people are thinking about them as if they were virtual machines, well, they are not really thinking about them the right way. And there are so many different kind of insecurities. Fundamentally, if you want the security of a virtual machine, use a virtual machine. But containers are really interesting as well, from the perspective of microservices. So, if you can break your code into microservices, you've got these much smaller components that do a much more limited set of things. So, it's easier to profile them and learn what they're supposed to do, and what files they are supposed to access and what network connections they are supposed to have, and all that kind of thing. So, from a security perspective you can really learn about running behavior much more easily in a containerized architecture than you could with big monolithic virtual machines. So, I think that is really exciting.

**Carlisia Pinto:** But talk to us more about that. Because when I think about it, I think that at an individual level the security issues would be much easier to grasp and comprehend for a micro-service, for a single micro-service. But when you have so many, it sounds that would be more difficult. So how does the container help with that? And contrast that, please, with how it would be with a virtual machine.

**Liz Rice:** Yeah, I think it's really about decomposing the problem the same way that the microservices, from a software architecture point of view, can decompose the problem. And the fact that you've now got these more isolated— well, we'll say containers, you've got a different problem in that you need to keep track of what each of those different containers is doing and whether it's behaving the way it's supposed to. But I think, particularly from looking at runtime, it should be easier to stop anomalous behavior than if you've got a lot of things going on.

A really good example is if you've got a micro-service that is supposed to—maybe it's product search, that is supposed to look up products from a product database, so it only ever reads from the database. And so, if you were to catch that microservice trying to write something to a database, you'd know that it was something that isn't supposed to happen, whether it's nefarious or somebody wrote some bad code somewhere. But I think that is a really good model for thinking "Oh yeah, we can reason about what these different microservices should do." Did that help?

**Carlisia Pinto:** Yeah, and I'm thinking... So, is there a container-level security gateway, I would say?

**Liz Rice:** \[00:08:01.13\] Yeah, so at Aqua we have a product that covers the whole life cycle of containers, really. So we do the image scanning and looking for vulnerabilities... And in some ways, that's more complex for containers, just because you've got more instances of different pieces of code. I guess there's a few other bits and pieces, but the bit that I think is fascinating is runtime profiling and learning what the containers are supposed to do, and being able to alert when something unexpected happens.

**Carlisia Pinto:** Yeah, that is exactly what I was thinking about, and I think you touched on that. With so many microservices and so many images and maybe even so many containers, you would need something like what your company does, that would help manage the security for all of the basic group.

**Liz Rice:** Right, yeah. And it's wonderful; see I've been with Aqua for, I guess, coming up six months now. And it's one of the things that really excited me about joining them, was I can really see how this product is needed. And I haven't come from a security background, I'd come from a development background and a containers background, but seeing the product and seeing it catching potential exploits as they happen, I thought "Yeah, this seems really important and valuable" and it's fun to work on a product that people pay money for.

**Carlisia Pinto:** Yeah, absolutely. And that is done in Go as well.

**Liz Rice:** Yeah. So some of it is Go, some of it there is some C code as well, because we're doing some pretty low-level things to monitor what's going on inside the containers.

**Erik St. Martin:** So it seems you actually really enjoy educating people on low-level things, like container implementations and the [syscall talk](https://www.youtube.com/watch?v=01w7viEZzXQ&t=35s) that you recently gave. What motivates you there? Is this people asking you questions and you try to produce content to answer to a wider group? Is this stuff you are super excited about? How do you choose what you are going to talk about?

**Liz Rice:** Yeah, so it started with the container talk. I saw an early version of that by Julian Friedman from IBM quite early on, when I was first dealing with containers. And it just clarified everything for me, and I thought "I want to replicate this." I had to go away and did it myself at home, and then I thought — well, I spoke to Julian and I said 'Do you mind if I borrow this idea?' And he was 'Go for it, I don't really like writing code live.' So I took it, and I guess evolved it. And it turned out that people seem to really enjoy it. I can't tell you how much I love the comments that I get after doing a talk, and I think people really like seeing something really expert— something that they thought was maybe magic, or pretty... "Some kind of thing over there that I don't really know what happened", and being able to get to the core internals of something, I think it's really powerful, and other people seem to like it as well.

**Brian Ketelsen:** So, is there a trick to taking something that's as complex as say syscalls or networking, and presenting it in a way that makes people understand it? It still feels like magic, but they appreciate the presentation afterwards? Because I think that's the feeling that everybody takes away from your presentations, is 'That's absolute magic. But I can do that, too'.

**Liz Rice:** \[00:12:02.24\] Yeah, I think... My process is to try building things; I like to think 'What happens if I try and build this thing, or if I try to reproduce what's going on?' Or 'If I try using something, what will happen?' So, it's experimentation. And I'll try lots of things, and some things do always leap out and say 'Over here, this is really interesting.' And it's easy enough to write in a few lines of code, so I can remember it. Because obviously, I have to be able to memorize the code to type it in when I'm speaking, so... And yeah, I somehow end up exploring something thinking 'This is really fascinating!' Like the _Syscalls_, then getting into `ptrace`. And I'd heard of `ptrace`, I had an idea what it was, but when you start trying it and exploring it, you think 'Yeah, this is really powerful, I get this.'

**Erik St. Martin:** Yeah. The first time I ever used `strace` or `ltrace` and got to see all the syscalls and library calls that were being made by processes, you're like 'I have super powers!'

**Liz Rice:** Yeah! And then looking at what's inside the `/proc` directory as well, it's a gold mine of crazy interesting things that the kernel is doing, and... Yeah, I think there's all sorts of fun things in there.

**Erik St. Martin:** I love the `/proc` directory and digging through. I hate that it's not very well documented, and even looking through the Linux source code to figure out... Like, how does this counter get incremented, what does that really mean? And it's often complex.

**Liz Rice:** Yeah. Did you see, [Jess Frazelle](https://twitter.com/jessfraz) was just on Twitter today asking people about their opinions on "If `/proc` had a better API, what would it look like?" Or what would people like to see from a better API to `/proc`?

**Erik St. Martin:** Yeah, and it's actually really amazing how many of the tools that people use every day, like `top` and `htop` and others that really are just interfaces over the top of that `/proc` directory.

**Liz Rice:** Right.

**Erik St. Martin:** But yeah, I think there needs to be better documentation on some of that stuff for sure. There's actually a really cool Github repo — I am trying to remember this off the top of my head; I think it's [github.com/0xAX/linux-insides](https://github.com/0xAX/linux-insides), and it walks through a lot of stuff, like the assembly during the bootup process and how a process actually gets called by the kernel, it's got some stuff on _Cgroups_ and things like that, and some of the internal data structures and things that are used. So if anybody is interesting in really deep kernel internals, that's a super cool repo to check out.

**Liz Rice:** That does look amazing.

**Erik St. Martin:** But I don't think they have anything on the `/proc` directory, which would be awesome.

**Liz Rice:** I'm just looking at it now. Yeah, they call some things like _Cgroups_, which probably goes into... Probably it has to look at `/proc`. But yeah, it looks amazing.

**Erik St. Martin:** Interrupts and interrupt handlers and all kinds of really deep-level kernel stuff.

**Carlisia Pinto:** And how you approach looking at these things that are lower-level and we don't get to look at on a daily basis unless we make an effort and have the curiosity to do so — so, the way you approach looking at these things I think makes a big difference.

\[00:12:51.00\] For example, looking at this talk about the syscalls, there was a moment when you outputted some stack to the screen, to the terminal, and I was looking at that and was like 'Okay, that's what the output is.' And you were looking at that and thinking 'No, those are duplicates.' I would've been thinking it 'Well, that's how it is.' And you were thinking 'Well, those are duplicates, that doesn't sound right, so let's look more into it.' I would've just totally taken it for granted that that's how it was.

**Liz Rice:** Yeah, I think I might have had a certain amount of... I don't know, I'm gonna say storytelling license there, because I had actually seen the bit in the man page that says "You've got these two different stop states, and you can't tell the difference who's the tracer", but it just makes more sense as a story to do it that way, to say 'Oh, look, here's the duplicate, now I'm gonna explain why they're duplicate and address that issue.'

**Carlisia Pinto:** Yeah, but I think it highlights something important, which is sometimes when we are looking at something that's completely new, we can just take for granted that that's how it's supposed to work, but we should always have a... Take a second look, and question and inquire and go deeper. I thought it was a good reminder to do that.

**Liz Rice:** Yeah. You know who I think is amazing at this? It's [Julia Evans](https://twitter.com/b0rk), if you've seen her at work...

**Erik St. Martin:** Oh, yeah.

**Liz Rice:** Because she is so good at having that kind of curiosity about how does a thing work? Amazing.

**Carlisia Pinto:** Yeah.

**Erik St. Martin:** And the thing that I love about that approach, with those quick graphics and things like that that she creates, is it gives you this really abstract understanding of it, but it gives you enough hooks where if you wanted to dig a little deeper on one section, you could. And that usually tends to be the problem with these really highly technical things, as it seems so broad you don't know where to start.

**Liz Rice:** And I think she takes the fear out of it somehow.

**Erik St. Martin:** Yeah. I absolutely love her work, and if you are not following her on Twitter, you definitely should.

**Carlisia Pinto:** Yes, absolutely. I agree with that too.

**Liz Rice:** Definitely.

**Erik St. Martin:** So what's next on the list? Do you have any ideas for what your next talk or blog post or something will be about?

**Liz Rice:** Yes. So, I have a couple of ideas for things and I was raising the question on Twitter just the other day, because I really love to hear from other people their ideas of things that they think 'Yeah, that area over there - I really don't know how it works.' So, if you're listening and there's something you think might be able to be explained in 60 lines of code, let me know. \[laughs\] You don't have to count the lines of code. But yes, I'm certainly thinking about maybe doing some more about debugging, maybe doing some more with `ptrace` and manipulating processes with `ptrace`. Maybe even doing something about _regular expressions_, because I think they're a bit... But I haven't figured out how to take away the difficult bits of _regular expressions_... But those are a few ideas that I've got on the top of my head at the moment, and I definitely would be keen to hear about other things.

**Erik St. Martin:** Being you have a networking background, what about something networking related? I think there's a lot of stuff going on in the cloud networking space now; you know, [CNI](https://github.com/containernetworking/cni), and you've got things like [Flannel](https://github.com/coreos/flannel) and [Calico](https://www.projectcalico.org/) and all of these things that create these mesh networks and things. Understanding that a little bit might be interesting.

**Liz Rice:** \[00:19:56.00\] Yeah. I should really understand Flannel and Calico better than I currently do, so actually that's a really good idea. I should probably dig into those more. There's so many things, there's a world of things out there to learn about.

**Erik St. Martin:** Yeah. Finding the time for all of them is the challenge.

**Liz Rice:** Yeah.

**Brian Ketelsen:** That's exactly the problem, finding the time. It's impossible, there's so many things to learn.

**Erik St. Martin:** I think also, another cool topic for people would be understanding Linux schedulers. I don't know how you would implement that in Go code, but I think that that's something that... I find having discussions with people too, that it's like a dark magic that just occurs; you're like 'Run this thing', and Linux does that. And now there's the whole concept of schedulers, and there's different scheduler choices, and then you get into real time scheduling...

**Liz Rice:** Yeah, and I think it's quite widespread that people have misunderstandings about threading and concurrency and— well, there's been some amazing talks about concurrency and books about concurrency, and they try and explain some of those things. But it always used to bug me when people would say 'Oh, I am going to make my code more performant by making it highly multi-threaded.' And you're thinking 'Well, unless it's blocking on something, how many CPU cores have you actually got?' Just throwing threads up on them doesn't necessarily make things run faster. In fact...

**Erik St. Martin:** Yeah. Then you also have contending for resources, right? Like if both of them need access to the same resource, one can be blocking waiting for another... And it actually reminds me a little bit of the reverse of that, when hyper-threading came out and multi-CPU motherboards, and then multi-core... A number of people were like 'I'm gonna get a board with two processors, so all of my stuff runs faster.' That's not 100% accurate.

**Liz Rice:** Yeah. It might. \[laughs\]

**Erik St. Martin:** It just depends on the way it was written. No doubt you could run more than one thing at one time if you had two completely isolated processes, but people just automatically assume that some CPU hog program that they use was gonna be magically faster because they have more cores.

**Liz Rice:** Yeah.

**Erik St. Martin:** And that's all part of our growth, right? I think that you don't know what you don't know.

**Liz Rice:** Definitely. And the other thing that I always feel is in the same category is locking. You see so many people who throw locks at code without necessarily really having a strategy for it.

**Brian Ketelsen:** That's my coding plan - add a mutex.

**Liz Rice:** Yeah. \[laughs\] What can possibly go wrong? Let's throw another lock at it.

**Erik St. Martin:** So do you have somewhere, a poll or something where you're having people submit suggestions? Because we could definitely link to it in the show notes and have people suggest topic ideas.

**Liz Rice:** Oh, that's a really good idea. Yeah, I could have a poll, I could have... Yeah, I will set something up so that in the show notes we can have a poll. Great idea.

**Erik St. Martin:** So I think it would be really interesting, especially because... I think a lot of us came from dynamic languages and things like that, and Go is a lot closer to C in the sense of being a systems language, so I think there's a lot of people learning a lot of these things that I think a lot of the people who came from the systems programming background take for granted. They learned C, they've written syscalls, they understand the kernel and how it operates, and even networking.

\[00:24:02.20\] And there's a much larger group of people probably migrating to Go that this is all new information for. So I think it's really valuable that people like you and Julia are trying to help educate people on these things in ways that they can easily understand.

**Liz Rice:** Hopefully, yes.

**Erik St. Martin:** Kernel man pages are not the best way to learn stuff. \[laughter\] They are there, in some cases it's the only option, but some of those things are extremely hard to learn on your own unless you are already familiar with the domain, or really wanna do a lot of digging and playing and learning through failure.

**Liz Rice:** Yeah. Which again, takes time.

**Brian Ketelsen:** So, you've done some Alexa apps, haven't you?

**Liz Rice:** Oh, yeah. So over New Year I was at a house party with some friends over a few days, and somebody had an Alexa... What do you call them? Echo. And I ended up to hacking together the beginnings of a skill, and I wrote about it on Medium and then that has actually ended up being [one of my most popular posts](https://hackernoon.com/my-first-alexa-custom-skill-6a198d385c84), even though it's not actually in Go, it's in Python. But yeah, that was quite a lot of fun, and I did a few follow-up posts. It was basically my journey of writing my first Alexa skill. Now, that's something I would definitely love to have a bit more time to explore voice apps and actually using the scheme, so that you can write voice apps in Go, which I haven't tried yet, but I really want to.

**Brian Ketelsen:** So...

**Carlisia Pinto:** So, I'm curious... Go ahead, Brian.

**Brian Ketelsen:** I was just going to ask what the app did and then, as a follow-up question, did they invite you back afterwards?

**Liz Rice:** Yeah, it's a group of friends, we've always had New Year together for the last many years. And now a lot of people have got kids as well, so the group's got bigger and bigger. And my skill, the idea... What I thought would be really fun would be I could have a list of the names, and particularly for the kids, they could hear Alexa saying that they were in the house. So, it was just going to say "Em, John, Matthew, Charlotte, whatever, are in the house." And then I started adding commands to say that people were leaving and that other people were arriving, and the idea of this list was basically to keep a list of who was in the house. So yeah, it's.... We ended up looking, not actually at the same holiday, but we ended up looking at 'Oh, could we keep track of this with the router?' I am saying that in the English version, I should say router. Look at whose mobile phones are connected to the router and using that to maintain the list of who was in the house. Didn't quite get as far as doing that, but I thought that would be kind of fun, and also a bit Big Brother.

**Brian Ketelsen:** Yeah, a little bit creepy. That's cool.

**Carlisia Pinto:** Yeah, I was going to ask if there was any particular reason why you didn't choose Go. And nothing against you having them done that in another language, but I'm more curious to know if in the case you did it \[unintelligible 00:27:31.11\] in Go for this project and Go wasn't up to par?

**Liz Rice:** So, I don't know if this is still the case, but Amazon, and certainly at the time, supported Node and Python, and I think maybe one other. Certainly, those two, of which Python I was by far the most familiar with, so that was the natural choice to hack something together.

\[00:28:02.10\] But now there are some schemes and some libraries and tooling out there to let you implement the real function in whatever language you like. There's one called [Apex](https://github.com/apex/apex) that I've heard is really good to let you write your functions in Go, and then you've got this little scheme thing in Python, or whatever, that calls your function. It's all done with containers, you know?

**Brian Ketelsen:** Turtles all the way down.

**Liz Rice:** Yeah. \[laughs\]

**Erik St. Martin:** So in our email that we send out, where we talk about the things you're interested in working on and all that good stuff, we were talking about a couple of tools that you've written. One of them was Kubernetes Security Benchmarking.

**Liz Rice:** Yeah, [kube-bench](https://github.com/aquasecurity/kube-bench). Yeah. So, I talk there about that.

**Erik St. Martin:** Yeah, and I'm really interested in that. I know Brian and I are big [Kubernetes](https://kubernetes.io/) fans. Carlisia, is [Fastly](https://www.fastly.com/) using Kubernetes at all?

**Carlisia Pinto:** Not that I know of. At least the work that I do doesn't use any Kubernetes. Docker, yes, Kubernetes no. But in some other parts of the company maybe, I don't know.

**Erik St. Martin:** See, you make the names sound so much better. Say Kubernetes again.

**Carlisia Pinto:** Kubernetes.

**Erik St. Martin:** Ah, see, the first time I think you said Kubernetee, you had a nice inflection on it and it sounded...

**Carlisia Pinto:** I think I'm mispronouncing a letter or two the first time. It sounded exotic to you...

**Erik St. Martin:** It did.

**Carlisia Pinto:** ...but it was just wrong. \[laughter\] The second time I pronounced it right.

**Erik St. Martin:** And I am gonna go with the first time was right. I liked that, it sounds more elegant.

**Carlisia Pinto:** Whenever you want me to say it, I'll say it.

**Liz Rice:** I think I flip between Kubernetes and Kuberneetees, I'm like really haven't... I really don't know which is right. It's a bit like schedule and schedule - I genuinely don't know which of those two is the right pronunciation.

**Carlisia Pinto:** I don't think it matters in the end. Let's come up with more different ways of pronouncing it. \[laughter\]

**Liz Rice:** Anyway, I was gonna talk about kube-bench, wasn't I?

**Carlisia Pinto:** Yeah.

**Liz Rice:** Yes, so there is an organization called the [Centre for Internet Security](https://www.cisecurity.org/), and they write guidelines they call benchmarks for how to configure software to implement best practices for security. And they've got a -- I guess over the last two or three months they released a benchmark for Kubernetes, and—so, basically the guidelines are 200 pages of 'You should check whether or not you are running with this option', and 'You should check that this flag is set to zero', and 'You should check that this other flag is set to something else.' And so it's a lot of tests that we have with kube-bench, automated. And it's a Go program that implements these tests, and the tests themselves are written in these YAML files. So, as the spec evolves, as the benchmark evolves it should be easy for us to update the test files. And it should also be possible for people to add their own custom tests if they want to. Essentially, each test is mostly calling out to some kind of... Say, for example, calling out to PS and checking the results of PS to see what executables are running, that kind of thing. So, it's a pretty flexible tool.

\[00:31:56.20\] But the idea is then that you can run it on all the nodes in your cluster and get a report in a standard format, either some text output or JSON output, to report on how well your Kubernetes nodes are complying with the benchmark. So it should just make it -- automate something that would otherwise be impossibly too much work to do by hand.

**Brian Ketelsen:** Yeah, we've dealt with the CIS benchmarks in the past - Erik and I both at previous companies - and it's really painful, really ugly. So, having that automated is awesome, and especially for something as modern as Go. Or, sorry, as modern as Kubernetes.

**Liz Rice:** Yeah. And I think it will be evolving. There's so many potential security— I'm not trying to say that Kubernetes is insecure, but there are ways that you can set it up that could be very insecure. So, just checking that that isn't... Like, for example, whether or not you allow privilege containers, checking whether or not you've got that turned on or not is probably a good idea.

**Erik St. Martin:** So, Robin in the Go Time channel asks 'What are the top most important Kubernetes security measures?'

**Liz Rice:** Good question. How long have we got? \[laughter\] So I did a webinar with a colleague, I guess that maybe a month or so ago now, about exactly this question. So, I guess very briefly, there's... I've been talking about kube-bench and these settings and things like have you set up authentication between your nodes, so they've got a use certificate? And are you allowing privilege containers or not? That kind of thing that you configure as you're installing or running the Kubernetes executables themselves. But it's broader than that, in that you want to be vetting the container images that you run on your cluster, vetting them for vulnerabilities... A lot of organizations have policies around how severe the vulnerabilities are that they are allowed to run, or blacklisting or whitelisting, all that kind of thing. And because these days everybody is deploying code really fast, they got CI/CD, so you want to automate all these checks to make sure that your CD system isn't deploying something live that contains some terrible well-meant vulnerability.

Secrets management is another important aspect, and Kubernetes fairly recently - I am going to say it was in 1.7 I think - started encrypting secrets. But before that, secrets were by default being passed around in the clear, which was pretty scary. And if you really want to take your security seriously, you might want to be looking at runtime profiling, like we were talking about before, using things like [seccomp](https://code.google.com/archive/p/seccompsandbox/wikis/overview.wiki) or [AppArmor](https://en.wikipedia.org/wiki/AppArmor), maybe using [SELinux](https://en.wikipedia.org/wiki/Security-Enhanced_Linux)... There are so many different things you can do to make your cluster more secure.

**Brian Ketelsen:** You know, SELinux is one of my favorite things in the world to disable. \[laughter\]

**Erik St. Martin:** This program won't run, disable SELinux.

**Brian Ketelsen:** Yeah, that's what the documentation said - if you have problems, disable SELinux.

**Erik St. Martin:** \[00:35:51.25\] Well, I think that's probably the biggest issue with security, it's the inconvenience factor. And even, say like Seccomp and things like that, that... So, for anybody who is not familiar with what a Seccomp profile is, and Docker creates a standard one for you, but it basically controls the system calls that the process in the container is allowed to make. And you can actually modify this and make it more restrictive, or less restrictive, to limit what the process can do interacting with the kernel. But most of the time people have problems with things and they're like 'Oh, this is a pain. Enable everything.'

**Liz Rice:** I think that's exactly right. Yeah, making these things easy is a huge challenge—easy to use, huge challenge.

**Erik St. Martin:** And it's really hard, because during development time you are trying to deliver business value. So you are constantly trying to get your features done, and every time you get hung up and something isn't working the way you expect it to and you do a bunch of debugging and you're like 'Oh, that syscall is disabled.' By the time you've done that a couple of times you are like 'Alright, this is becoming a huge pain, it's slowing me down. I'm just gonna enable everything and I'm gonna get done what I need to get done, and then I'll secure it.' But then, after the fact it becomes really hard to go through and reverse engineer your software and figure out what system calls it makes.

**Brian Ketelsen:** Shouldn't that be something that we should be able to automate? We can read code and machines can read code. It should be relatively simple enough -- I say, not knowing shit about it, but it should be relatively simple enough to go through and say "Alright, I've scanned this app and it uses these nine syscalls. I need to add this profile to my Docker container." Is that a thing?

**Liz Rice:** Jess Frazelle did a blogpost, and I think maybe a [talk](https://www.youtube.com/watch?v=Cd4JU7qzYbE) as well, but certainly a blog post where she goes through that whole process of automating, capturing all the syscalls that... I think she was running Chrome in her example, capturing everything that it did over some period of time under normal use, and then generating the Seccom profile out of that. So it's a really interesting thing you can find; we should add a link to that in the show notes... And one of the things that a product like Aqua can make easier for enterprises, because it can basically learn it automatically.

**Brian Ketelsen:** Oh, that's cool. So is it similar to intrusion detection training, where you run it in safe-mode for a while, and it doesn't really stop anything, but it learns normal behavior?

**Liz Rice:** Yeah. So we have an audit mode and an enforce mode. And there's also, like I've said, a learning period when you first run a new container image.

**Brian Ketelsen:** That's awesome.

**Liz Rice:** It's pretty cool. I can't take credit for the product, because the team... The team, mostly in Israel actually, they've really built this product, and when I first saw it, like I said, I was just like 'This is really clever.'

**Brian Ketelsen:** So what's your next big talk coming up? What's the next conference you're talking at?

**Liz Rice:** That's a great question. I do know what my next one is, but I'm not sure whether they've announced me yet, so I'm not sure I can say.

**Brian Ketelsen:** It's a secret.

**Liz Rice:** I guess I know that I can talk about... [Container Camp](https://2017.container.camp/uk/) in London coming up very soon, and Container Shed not long after. Container Camp is only in a couple of weeks' time, so probably just about the time this podcast gets released, probably it would be the same day as Container Camp. But that's always a really funny small group of people talking about containers. Small as in it's not like [GopherCon](https://www.gophercon.com/), it's not thousands of people, it's more like 100 or 200 or something.

**Brian Ketelsen:** \[00:39:59.00\] What's been your favourite conference to attend so far? What's the conference that has the best atmosphere, the best fun?

**Liz Rice:** You mean apart from GopherCon? Because obviously that would be a terribly suck up thing for me, to say GopherCon. So, I'm not gonna say GopherCon.

**Brian Ketelsen:** Yeah, besides GopherCon.

**Liz Rice:** Besides GopherCon... The [KubeCon](https://cloudnativeeu2017.sched.com/) in Berlin was amazing; there was a real sense of Kubernetes is really going somewhere. There is this huge community of people really getting together to move Kubernetes from, I'm gonna say sides project into something really solid that enterprises can actually use. I thought that was really fun, and the community is really supportive. And it's interesting to see Google handing over the control to the community in what I think seems to be a really good way, I think they're doing a really good job of it... You know, without just throwing it over the wall; they're gradually getting more and more people from outside of Google involved, which is great and I guess similar to what... Well, not quite the same, but the same kind of issue exists with Go. It's interesting to hear the Go community getting bigger and moving outside of Google quite a bit. I guess the other conference that I completely enjoyed a couple of years ago now—well, sort of 18 months ago, was the [DockerCon](https://2016.dockercon.com/) in Seattle. Just huge, and so glitzy, I guess. It was really fun.

**Brian Ketelsen:** I haven't been to a DockerCon yet.

**Erik St. Martin:** I haven't either.

**Liz Rice:** Yeah, it's fun.

**Erik St. Martin:** It comes down to time. That's always the hardest thing, it's time, and how much you wanna be away from home. There's entirely too many conferences to attend.

**Liz Rice:** I've got quite a few in the next couple of months. They're in London, so that's convenient for me, like Velocity... I've got here and in New York actually. And there's Container Camp, and there's Container Shed as well. I see we have quite a good conference scene happening here in Europe.

**Erik St. Martin:** Yeah, there's really not much going on here in Tampa for now. Not much at all. I think Orlando gets some stuff. From a security perspective we have -- what's the name of the group that does the CISC certification? They’re based out of Clearwater. We've got a lot of healthcare stuff here. No big fancy tech conferences here. We don't even host our own conferences here, how bad is that?

**Brian Ketelsen:** It's pretty bad.

**Liz Rice:** Well, would you have the venue for it? You need a pretty big venue.

**Erik St. Martin:** Yeah, there's...

**Brian Ketelsen:** Yeah, there is one. We can do it. We won't, but we could.

**Erik St. Martin:** Yeah, so who wants to talk about interesting Go projects and news?

**Brian Ketelsen:** OMG!

**Erik St. Martin:** OMG? Alright, I'm guessing you have a good one.

**Brian Ketelsen:** OMG! I do. It's a tiny one, but it packs a lot of punch. So, if you've used the terminal, like most of us have, and you've come across [Powerline](https://github.com/powerline/powerline) — you know that Powerline is a Python app that makes lots of cool things appear in your terminal and gives you information, contact-sensitive information, as you change around and execute commands. And Powerline is great, but it's a little slow, and especially as you add more and more things to your command prompt. Well, someone, Just Janne on GitHub, ported Powerline to Go and it is stupid fast! So, I've added it to all of my machines in this last week and it just makes me brilliantly happy.

\[00:44:03:20\] Powerline -- so it's at [gitHub.com/justjanne/powerline-go](https://github.com/justjanne/powerline-go). Crazy fast, and it's written in Go, so you can extend it yourself.

**Erik St. Martin:** I don't even know what time it was at night when Brian messaged me 'Dude, you have to see this!'

**Carlisia Pinto:** I don't know, I use [Fish](https://github.com/fish-shell/fish-shell) and I'm pretty happy. It seems that all the info that I get from this Powerline, I get with my Fish shell. I don't see that I can benefit from having this on top of Fish. Do you think?

**Erik St. Martin:** Alright, elevator pitch me on Fish.

**Carlisia Pinto:** Oh my God!

**Brian Ketelsen:** Yeah, I wanna hear the Fish pitch. Let's listen.

**Erik St. Martin:** I did the [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) to [Zsh](https://en.wikipedia.org/wiki/Z_shell) transition, but I haven't tried Fish, so sell it, it's all on you.

**Carlisia Pinto:** Oh, I went from bash to Z shell and then Fish, and Fish is... Can't compare. It's so much better than the other ones. Every once in a while I have to switch to Bash, but it's so easy; I just type 'bash' and I get my Bash shell to run some commands. That's not compatible with Fish, but then I go back to Fish.

Talking about the practical stuff - it's very easy to install, it's very easy to use... I forgot what they call it now, profile or templates... Different templates you can use to customize how your shell will look and behave, what kind of info you get. It's so easy to go from one to the other. It has a UI actually, so you boot the UI and through the UI you can configure different things, which is nice because you get to see all the possible configurations that you can tweak. It's so user friendly, it's ridiculous. No comparison with Z shell - it's such a pain to change anything and install different templates.

**Liz Rice:** I get scared of things that have loads of configuration, because I think I'm gonna spend way too much time trying to configure it. I just want things to work.

**Carlisia Pinto:** Yeah, but it does just work out of the box. If you want to change the color or something, you've got templates. But it just works out of the shell, it's super-light, it's super-fast and it's really cute. Sold? Erik, are you switching?

**Erik St. Martin:** I don't know, I'll look at it. How is that? I'll try it.

**Carlisia Pinto:** Oh. I consider that a win, if you will look at it.

**Erik St. Martin:** I think in general I need to rethink my workflow. And it's weird, in my early development days I was constantly tweaking my workflow — the tools I used, the configurations for them and things... But I think my shell and Vim configs have been around for ages now, and I think they're showing their age in bloat. So, I'm highly considering wiping everything and starting over. So maybe Fish will be on the table for that.

**Carlisia Pinto:** I highly recommend it.

**Erik St. Martin:** And any other things that people wanna sell me on? But you're not taking away my [i3 Window Manager](https://i3wm.org/), I'm keeping that.

**Carlisia Pinto:** Oh, you can keep that.

**Liz Rice:** This week, I think it was [Nate Finch](https://twitter.com/NateTheFinch) that had a [tweet](https://twitter.com/natethefinch/status/899730215957561344?lang=en) and I copied it to have a touch bar button on my MacBook Pro, `if err != nil`, a convenience button, that's on my MacBook.

**Brian Ketelsen:** Awesome.

**Erik St. Martin:** I think that's the only fun thing about the touch bar, is being able to come up with your own things. But the no-escape key kills me.

**Carlisia Pinto:** Yeah, I love that. \[laughs\] Is that an actual thing? Is that an actual button you can put on the keyboard? I wasn't sure if he was just joking.

**Liz Rice:** \[00:48:06.00\] I mean the external one that you can plug in.

**Erik St. Martin:** Yeah, the newer MacBook Pros have a touchscreen bar thing, and you can program it to have new buttons there that do things.

**Carlisia Pinto:** Oh... Okay, that was neat.

**Brian Ketelsen:** Yeah, it was a real app that he built.

**Carlisia Pinto:** So wait, you could program one of those buttons to be the escape keys, then.

**Liz Rice:** Yeah, there is an escape key there all the time, nearly all the time. Every time I look for an escape key it's where I expect it to be.

**Carlisia Pinto:** Okay.

**Liz Rice:** But sometimes you get some pretty fun things, like I don't know... You're reading a tweet and it suggests an emoticon for you, or if you're watching a video you can scroll through the video on the touch bar, which is quite nice.

**Carlisia Pinto:** I didn't know that, that sounds really neat. So...

**Erik St. Martin:** So...

**Carlisia Pinto:** Wait, are you jumping to the next one? I wanna go first.

**Erik St. Martin:** I was just going to mention something related to... It's not Go specific, but I was gonna mention something related to the playing with changing up your work environment.

**Brian Ketelsen:** Do it.

**Carlisia Pinto:** Do it.

**Erik St. Martin:** So, did anybody see a program — I don't know how you pronounce it — [Oni](https://www.onivim.io/)... And it's an Electron interface over the top of Neovim.

**Brian Ketelsen:** Yes. Saw it, downloaded it, used it.

**Erik St. Martin:** What did you think? That's on my list to play with, because I like the idea of IDEs, but I also love Vim, so...

**Carlisia Pinto:** Link, please. \[unintelligible 00:49:34.16\]

**Brian Ketelsen:** Yeah, it didn't add enough to Neovim for me to use a GUI. My Neovim setup is really happy for me, and this didn't add a ton. And it doesn't have Go backing stuff yet. You can use your Neovim plugins, but you're not gaining anything yet in Go, because they don't have the Go bindings. It looks like it's gonna be cool, but not yet.

**Erik St. Martin:** Okay, Carlisia, what was it you had?

**Carlisia Pinto:** Yeah, I wanna cite this project, because it's command line related, this project called [expanderr](https://github.com/stapelberg/expanderr), Expanderr with two r's at the end. And what it does is you install it, and then you tweak your editor, and whenever you type out a function call that returns anything, it will add the error on that function and put the curly brackets there for you, and adds return error. I guess with Expanderr -- so to add the error, not anything. So you'll get the `if error` bracket thing, and it either returns the error, or returns the log. I don't know how you configure that, but it looks like magic and we do that all the time, so it's pretty neat. The only issue is that it's only available for Emacs, but they are looking for people to contribute to do the extension for Vim and other IDEs.

**Erik St. Martin:** Now, you wanna hear how even more related this is to the conversation we just had?

**Carlisia Pinto:** Uh-huh.

**Erik St. Martin:** The person who created that is also the creator of i3 Window Manager.

**Carlisia Pinto:** \[laughs\] That is cool.

**Brian Ketelsen:** I'm glad you said it before I did.

**Carlisia Pinto:** Michael Stapelberg.

**Brian Ketelsen:** Yes. I got to meet him at GopherCon and it was a little bit like hero worship.

**Erik St. Martin:** It was. And he brought us stickers.

**Brian Ketelsen:** Yeah, he brought us stickers.

**Carlisia Pinto:** That is cool.

**Brian Ketelsen:** Very excited that we talked about i3 so much on Go Time.

**Carlisia Pinto:** \[00:52:02:25\] Yeah, as soon as they do that extension for VS code, I'm—I already installed it, I just can't use it.

**Brian Ketelsen:** Alright, I've got another one. More projects. I have this absolute fascination with distributed tracing, and I've been playing with all the different distributed tracing tools over the last couple of weeks. And this is one that came out quite a while ago, it started coming up quite a while ago, but I wasn't really sure where they were going with it, and now it's usable and awesome. So, Uber has released their open tracing collection system called [Jaeger](http://www.jaegertracing.io/). And it is really awesome. So the tools are fast and relatively easy—I mean, in terms of distributed tracing, relatively easy to implement. And the UI that you can use to look at your traces is just killer, it's so nice.

**Carlisia Pinto:** That’s neat.

**Erik St. Martin:** That's one of the ones I haven't played with yet. Distributed tracing is huge for modern projects. And I remember playing with some of the - like [Dapper](https://ai.google/research/pubs/pub36356), and [Zipkin](https://github.com/openzipkin/zipkin) and things like that early on. So what sets this apart?

**Brian Ketelsen:** The UI is really nice - it's clean, it's easy to use; it supports [Open Tracing's API](http://opentracing.io/) directly, which means you don't actually have to use Jaeger's SDK to instrument your code, you just use the regular Open Tracing Go bindings, and then Jaeger takes those... It's the reporter/collector part. So, because there's a standard for Open Tracing, Jaeger takes all of those traces and you just set Jaeger as your reporter and collector. I have a special treat though, and this will only work probably for the live group, but if you go to 2018.gophercon.com, you can see a boring blank Buffalo web app page, and...

**Carlisia Pinto:** Wait, did you say 2018?

**Brian Ketelsen:** Yeah, 2018.gophercon.com, and there's nothing exciting there other than the fact that it's a brand-new beginning Buffalo web app. But then go to trace.gophercon.com, and I have an instance of Jaeger up, and you can see all of the traces that have happened in the last hour or whatever it is, so you get an idea of what the UI looks like. Now, they're boring traces because I don't have anything running in the background, it's literally just one request, but it gives you a sense of what the UI looks like. And unfortunately, by the time this goes to air this will probably be down, so you'll just have to go to the Jaeger website and see. But for the live listeners, you get this special treat of seeing what Jaeger looks like before I rip it down.

**Liz Rice:** Can you paste the link in the Slack channel?

**Brian Ketelsen:** Absolutely.

**Erik St. Martin:** And I love the fact that you're using the GopherCon domain to test this.

**Brian Ketelsen:** Well, so this is... It's relatively related. One of the things that I am doing to really get deep into my new job at Microsoft is to learn all of the pieces of their infrastructure. So, I am using GopherCon's 2018 website as the way to do that, because why would I build another pet store application when I can work in a domain that I care about? So, I'm over-engineering GopherCon, and that's kind of fun! It's all microservices and distributed tracing. We could do it with a Hugo web app, but that would be boring.

**Erik St. Martin:** I'm gonna break out \[unintelligible 00:55:47.15\] tonight, I'm gonna find what else you're hiding there.

**Brian Ketelsen:** Shh, don't tell anybody.

**Erik St. Martin:** \[00:56:01.00\] Alright, do we have any other interesting projects, news, articles that are must see?

**Brian Ketelsen:** No.

**Erik St. Martin:** Alright. Free Software Friday?

**Brian Ketelsen:** I got one.

**Erik St. Martin:** Alright, let's hear it!

**Brian Ketelsen:** Again, it's like I have these problems over and over in my life, it's kind of sad... But I am having a continuing problem keeping my files in one place in sync. And I used Unison today, which is the age-old standard file synchronizer, and it differs from Rsync in that Unison is bidirectional and Rsync is one-directional, and it's so fast. So thank you to the [Unison](https://www.cis.upenn.edu/~bcpierce/unison/) team, who have continued to update that app for 15 or 20 years. Yay!

**Erik St. Martin:** I haven't used that in a long time. One of these days I will actually set up backups.

**Brian Ketelsen:** Strongly recommended. They're good for you.

**Erik St. Martin:** Don't look at me like that, people! There's a Raid...

**Brian Ketelsen:** Raid is not a backup. Don't make me say it twice!

**Erik St. Martin:** It's better than nothing, though.

**Brian Ketelsen:** Marginally.

**Erik St. Martin:** So, Carlisia, do you have anything this week?

**Carlisia Pinto:** I don't.

**Erik St. Martin:** How about you, Liz? Do you have a project or a maintainer you want to give a shoutout to?

**Liz Rice:** Well, this isn't a super new thing, but I think [Istio](https://istio.io/) is really interesting. So, Istio is side cars for buffer containerized services, for microservices. But I think it could mean that people end up not having to write so much code to set up their microservices, and that seems like a really cool thing. I'm in no way... I know a tiny little bit about Istio, but it's something I really want to understand much better.

**Erik St. Martin:** Yeah, that falls in the _service mesh_ category, right?

**Liz Rice:** It does, yes.

**Erik St. Martin:** Which is one of those hodgepodges of terms that you wonder 'What the hell is a service mesh?'

**Liz Rice:** Oh, maybe that's a topic for a talk for me.

**Brian Ketelsen:** It is, it's probably a great topic for a talk. And it just occurred to me, when I woke up this morning, the first tweet I made was wishing [Mark Bates](https://twitter.com/markbates) a happy birthday, so we should probably shout him out on the show too, because we talked about Buffalo already and we love keeping the people in our community feeling special on their birthday. So happy birthday, Mark!

**Carlisia Pinto:** Happy birthday, Mark, and...

**Erik St. Martin:** We hope you'll hit puberty soon.

**Carlisia Pinto:** I was gonna say yeah, I'm glad we don't have to sing. \[laughter\]

**Erik St. Martin:** I think even though most people would hear this a week late, we should still wish him a happy birthday on Twitter.

**Brian Ketelsen:** Absolutely. No matter when you hear this, just reach out to Mark Bates on Twitter and wish him a happy birthday.

**Liz Rice:** Can you do a Twitter storm in two weeks' time in commemoration of Mark Bates' birthday? I think he would appreciate that.

**Brian Ketelsen:** That's brilliant.

**Erik St. Martin:** I think that everybody should send him a clip of you smashing your guitar. Because he was the only one that did it, right?

**Brian Ketelsen:** Oh, shut up! Shut up!

**Carlisia Pinto:** Somebody asked that on Twitter, I forgot who... If anybody had a clip of Brian Ketelsen smashing his guitar, because nobody saw it.

**Brian Ketelsen:** I hate you all.

**Carlisia Pinto:** I'm sorry.

**Erik St. Martin:** That's just because it took you less time to break yours.

**Carlisia Pinto:** I was right there.

**Brian Ketelsen:** Oh, wait. Steve says he has one. Post it or it didn't happen, Steve. I'm under the gun here.

**Erik St. Martin:** \[laughs\]

**Carlisia Pinto:** Alright, Flin said he saw him. I trust him.

**Erik St. Martin:** I did see Brian smash his guitar.

**Carlisia Pinto:** Wow, I don't trust you. You would cover for Brian.

**Brian Ketelsen:** \[01:00:04.00\] That's just rough!

**Erik St. Martin:** I love Brian, but I don't know if I'd lie for him.

**Brian Ketelsen:** We're done with this damn show! \[laughter\]

**Erik St. Martin:** So, mind for today... I don't know how you pronounce it, I think it's Azeria, but she is   on [Twitter](https://twitter.com/Fox0x01). She is a security person I follow, super smart, but she has this awesome seven-part series on her website, [azeria-labs.com](https://azeria-labs.com/), for writing ARM assembly. There's another two-part series on if you wanna learn how to actually compromise ARM processes, and write shell code and stuff like that. But I'm learning a little bit about ARM processors and how they differ from Intel processors, and even learning a bit about assembly. If you're interested in that type of stuff, that [blog series](https://azeria-labs.com/writing-arm-assembly-part-1/) is really good; we'll link to it in the show notes and I will drop it in our Slack channel for people who are listening right now. Carlisia, dig me to it, there it is.

**Carlisia Pinto:** Is this core work?

**Erik St. Martin:** Yeah, I'm a big fan of even -- I don't think anybody should... You don't have to learn to build software in assembly, or in C and things like that, but I think having a surface-level knowledge of things, a level or two below you, definitely makes you a better engineer. Because a lot of stuff are leaky abstractions, right? It's great when everything is working perfectly, but when it's broken, having a rough idea of what's happening under the hood can often at least lead you in the right direction of diagnosing it.

**Carlisia Pinto:** Yeah.

**Brian Ketelsen:** Do we have any other free software Friday things? Or we're wrapping this thing up?

**Erik St. Martin:** Yeah, I'd like to thank Steve St. Martin for being my hero.

**Brian Ketelsen:** In proving that it did happen?

**Erik St. Martin:** \[laughs\] You broke yours the right way, so it happened faster.

**Brian Ketelsen:** That is awesome.

**Erik St. Martin:** Alright. So I think it is time to wrap this show up. We're actually early, which is awesome. Thank you so much, Liz, for coming on this show and for all that great content you're producing, and helping make all of us better engineers.

**Liz Rice:** It's been really fun to be here.

**Carlisia Pinto:** Absolutely! Thank you!

**Brian Ketelsen:** When I grow up, I want to give talks half as engaging as yours.

**Liz Rice:** You do! You've done [that UK one with the Game of Thrones](https://www.youtube.com/watch?v=mxlJqrVSalY&list=PLDWZ5uzn69eyM81omhIZLzvRhTOXvpeX9&index=9&t=2s). Brilliant.

**Carlisia Pinto:** I can't wait to see that.

**Erik St. Martin:** So a huge thank you to all of our listeners. Definitely share the show with friends, family, colleagues. We are on [Twitter](https://twitter.com/GoTimeFM). If you have suggestions or questions, hit us up on [ping](https://github.com/GoTimeFM/ping). With that, goodbye everybody, we'll see you next week.

**Carlisia Pinto:** Bye!

**Liz Rice:** Bye!
