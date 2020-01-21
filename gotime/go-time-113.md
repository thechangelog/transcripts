**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're gonna be taking a look at Cloudflare, which is kind of a real-life case study and somewhat success story for Go, I think.

Today I'm joined by a couple of regulars, and a special guest. Jon Calhoun is here. Hello, Jon.

**Jon Calhoun:** Hey, Mat.

**Mat Ryer:** How are you doing?

**Jon Calhoun:** I am doing well.

**Mat Ryer:** Good. We're also joined by Jaana B. Dogan. Hello, Jaana.

**Jaana B. Dogan (JBD):** Hello!

**Mat Ryer:** How's it going?

**Jaana B. Dogan (JBD):** Good!

**Mat Ryer:** And we are also joined by our special guest, CTO of Cloudflare - it's only John Graham-Cumming. Welcome, John!

**John Graham-Cumming:** Hello! Hi, nice to be here.

**Mat Ryer:** Thanks for joining us, we're very excited about this. I suppose at the top of the show maybe you could give us a quick intro of yourself and Cloudflare, just so people have the background, for anyone that hasn't encountered it.

**John Graham-Cumming:** Yeah, absolutely. If you don't know what Cloudflare is, what I always say to people is you probably used it today without realizing it. We are an infrastructure company that protects and accelerates and makes more reliable about 20 million domains on the internet. That's everything from websites you've probably used, to the API back-end for an app on your phone, all those kinds of things. We check those things, and -- you know, if you visited a website or go and use an app which uses us, we've taken a look to see if you're a hacker, and decided you're not, hopefully, and let you through, or we've made it faster or more reliable.

So we're a piece of infrastructure on the internet that's kind of hidden, but it's there. And I'm Cloudflare's CTO; I've worked for Cloudflare for eight years. Started out as a programmer, writing a lot of Go, as it happens; that was the first thing I wrote at Cloudflare, was Go code... And now here I am, to talk about that.

**Mat Ryer:** Great. And actually, John, I remember you spoke at the first GopherCon, didn't you? On channels.

**John Graham-Cumming:** I think that's right. Or was it the second? It was one of the very early ones. I gave a talk about channels and why I like them a lot, which goes way back into my history of my Ph.D, because I did a whole lot of Ph.D. stuff - long before Go, but I actually used a similar paradigm.

**Mat Ryer:** That's very cool. So did Go appeal when you saw channels in the language then? Was that something that appealed?

**John Graham-Cumming:** \[00:03:54.24\] Yeah, that was an enormous part of it, because I had done -- we have to go right back into the late '80s, early '90s; I'd done a Ph.D. using a language called CSP (Communicating Sequential Processes, and a language related to it called Occam. Both of these have a concept essentially of channels and communication with synchronization over channels. When Go came along, one of the things in the actual Go introduction was -- it says "Oh yeah, we were inspired by CSP and the way in which did things." That was a big light bulb moment for me, because I was like "Wait, I was doing that a very long time ago." And I'd done loads of other programming, and I was like "Finally."

I really liked that way of thinking and reasoning about how a program works, and so here it was... And here it was in a C-like language, I guess we could call it that, because I'd done a lot of C and C++. And something with garbage collection... I was like "Oh, this is an interesting combination of things", and that's what got me interested in Go right from the get-go.

**Mat Ryer:** That's interesting. Is the design the same in CSP and channels in Go, or are there differences?

**John Graham-Cumming:** Well, it depends. If you go right back to the beginning of CSP, there weren't actually explicitly channels, although quite quickly afterwards the idea of channels came along. The really interesting idea in CSP is you have -- well, Communicating Sequential Processes, so you have a bunch of processes that are doing things sequentially, i.e. goroutines that are just doing their own thing... And they synchronize to communicate. That's really the key thing. And if you think about an unbuffered channel in Go, there's this explicit moment of synchronization. When this gets transmitted, it gets received by this other goroutine.

So that idea of this explicit synchronization for communication makes it quite easy to reason about what your program is doing. It doesn't eliminate, of course, all problems, but it is much simpler to reason about than something that's vastly asynchronous... So that really appealed to me, and that was fundamentally what was in CSP.

**Jaana B. Dogan (JBD):** John, did you see this old paper from Bell Labs? Maybe it was from the days of Plan 9... They were conceptually explaining some of the concepts around synchronization over channels. I think there was a paper like that, and I think that Go is a proper implementation of some of those concepts... If I can actually find the paper, I will send it to you. It's really interesting to see the resemblance.

**John Graham-Cumming:** Yeah. Well, what's interesting about Plan 9 -- so Plan 9 arrives in the '80s, and the fundamentals of CSP are 1977 and 1978. So I think a lot of this stuff has an origin in some of this thinking about synchronization... And also, people think about "What are we gonna do if we have really big, multi-processor machines?", which they didn't have at the time, but "How are we gonna tame them?" and this was a way of taming them, with this kind of thinking.

**Mat Ryer:** That's interesting... The theory came just before we practically had the use.

**John Graham-Cumming:** Yeah, well -- I mean, I think that's actually true with a lot of theory. I think if you look at a lot of computer science, going backwards, you have (especially in the 1970's) a very rich vein of papers which are talking about the problems of distributed systems, clock synchronization, how are we gonna think about this, how are we gonna reason about it... Because I think people could see on the horizon that it was possible that there was gonna be many multiprocessor machines. And there were some early ones. The CDC 6600 I think had multiple function units. So people could already see "Oh, this is gonna happen."

\[00:07:43.04\] What's funny is in a 1978 paper on Communicating Sequential Processes there's actually a line in there which is something like "...however, developments of processor technology suggest that a multi-processor machine constructed from a number of similar self-contained processes may become more powerful, capacious, reliable and economical than a machine which is disguised as a monoprocessor..." So you could kind of see, "Oh, this is gonna happen", in 1978... And then it did.

**Mat Ryer:** That's awesome. So how much Go is there then at Cloudflare? And was it there from the beginning, or were there other languages that pre-dated Go's use?

**John Graham-Cumming:** I didn't join Cloudflare right from the beginning. When I joined, there were 24 people in the company, and Cloudflare was already operating. They had a service that was up and running for a few thousand domains, compared to the 20 million today... But it was operating, and it was quite a mixture of things.

The core processing actually in Cloudflare for the actual request processing, which today is doing something like 10 to 15 million requests per second. That was written in PHP. There was some C, because there were modifications to NGINX as C modules, to make NGINX faster for certain things... There was some C++ for doing log file processing... So there was a little bit of a collection of languages. And then the company was just really getting started with Lua.

The plan at that time was to reimplement the PHP in Lua, because NGINX has a good Lua integration, and there's a thing called OpenResty, which allows you to write RESTful programs, with the Lua and NGINX combination. That was actually underway when I joined, was that move away from PHP... But there was no Go, and part of the reason for that is we're talking 2011, and we've just had the ten-year anniversary of Go, so you're talking two years into the life of Go, and pre-version 1.0.

When I joined we were on 0.98, pre the first release. I had seen it and had been messing around with it a little bit, because of what I thought was nice about it... But very quickly - actually, literally two weeks and a day after I joined Cloudflare - I had a few thousand lines of Go implemented, to show how we might use it in a real product. It was a product that still exists today, actually.

**Mat Ryer:** Alright, that's interesting... So you actually tackled a real problem with it to demonstrate and show it off internally.

**John Graham-Cumming:** Yeah, because I had a pretty sure idea that it was gonna be good for what we had, which was lots of computers, with lots of CPUs around the world, and stuff that was quite I/O-bound... Because we fundamentally do network stuff, and I think Go has a fantastic net library, and it was fairly easy to get this thing up and running, and it was literally two weeks after I joined that I had a prototype running.

**Mat Ryer:** Did your prototype contain use of channels then?

**John Graham-Cumming:** Oh, absolutely. Just to talk about this, there's a thing called Railgun, which is -- one of the things that happens with a service like Cloudflare is we sit between the end user and the web server... So that could introduce latency, because instead of going directly to the web server, the end user comes to us. Now, as it happens, because of the size of our network now, it doesn't actually cause a problem, because we're so massive... But at the time, there was a real concern about what could we do to speed up the link between us and the web server.

So this Railgun thing, the idea was if we took over the connection between the two and we didn't use HTTP, we could do all sorts of interesting things with compression; in particular, we could do what's called delta compression, which is to realize that websites don't actually change that fast, and if you request the same page multiple times, it's probably only changed by a few bytes. So you can get crazy amounts of compression, like 99.5% smaller than the original size.

\[00:11:48.29\] But we're a shared environment, so what you're gonna have is you're gonna have these Railgun things talking to potentially thousands of web servers on the back-end, with thousands of connections. So if for every connection we had a goroutine, and some coordinating goroutines, and then channels all over the place...

**Mat Ryer:** And your talk covers some practices and things that you can do with channels as well in Go, which I always still to this day refer back to when I wanna use some of those patterns as well...

**John Graham-Cumming:** Yeah, that was kind of fun, because a lot of that was just, in a way, stuff I'd done at university, and I was like "Well, these are the sorts of things you can do. You can make a specific synchronization, or you can coordinate things in a different way", and that was just to show people what the possibilities of channels were... And they're not just a mechanism for getting output from your program, or something; they're fundamentals. That was the idea of that talk, it was just to give people some idea. I think it's called a Channel Compendium... Is that what it's called? I don't quite remember now. It's been a while...

**Jaana B. Dogan (JBD):** Did you end up refactoring any of those bits? I'm seeing a lot of people going over some of the previous patterns, say concurrency patterns they've come up with over time... So did that happen at Cloudflare as well?

**John Graham-Cumming:** Absolutely, in terms of Railgun... Because one of the things that was interesting about Railgun was I was both learning the language and writing what was gonna be one of our products at the same time... So there were definitely times when I did things that could have been done better and it got refactored extensively... And of course, eventually a team of people took it over and in classic style said "What idiot wrote this? We need to refactor everything..." \[laughter\]

**Mat Ryer:** "Let's take his permissions away..."

**John Graham-Cumming:** Yes, exactly. \[laughter\] Exactly. So yes, of course... But the other thing that's really important to realize is we were on 0.98, so there were bugs, and there were things that weren't implemented. Most notoriously -- so we were running on Linux, because Cloudflare uses Debian everywhere... But we were shipping software -- this Railgun thing had a component which was on the customer's website, and one of our customers were using FreeBSD; Go supported FreeBSD, but unfortunately it would run out of memory very quickly... And it was one of these situations where you think "Why is it not running out of memory on Linux, but it is on FreeBSD?" And so that was my chance to learn all about the garbage collector and how the garbage collector works. That's the beauty of open source - I was like "Well, I can debug this myself. I'll go and read all the garbage collector code..."

Eventually, I realized that everything seemed fine. What was happening was when the memory is being actually released back to the operating system -- so you've collected garbage, and then you've decided "I literally don't need this bit of the heap anymore. I can give the operating system that bit back...", it caused this thing in the Go runtime called sysUnused(). And sysUnused() is meant to call something in the operating system called madvise to say "I don't need this block of memory." It does that on Linux, and on FreeBSD it didn't. And the reason it didn't is I then obviously got the source code, and I come down and I find \[unintelligible 00:15:02.17\]

So that's why we were running out of memory, because every time we gave memory back to the operating system, we said "We don't need it", but the operating system didn't get it...

**Jaana B. Dogan (JBD):** That's amazing...

**John Graham-Cumming:** So that was a fairly easy fix. I went in and fixed it... And if you can go back in time, you can find the request by me to say "By the way, I'm implementing this on FreeBSD", because it was missing. So there were things definitely in the early days.

The other thing that was -- I mean, the syslog package needed some work; it wasn't quite compatible with the RFC, so I fixed that, because syslogging was very important... And the other thing that really was difficult right at the beginning was Sync.Pool didn't exist.

\[00:15:57.12\] In fact, there are some things I talk about in the Channel Compendium, which is "How do you recycle memory in Go pre the existence of Sync.Pool?" and you can do it really nicely with channels. There's a really nice pattern for it. Because fundamentally, if you think about what was happening inside of Railgun, there was a lot of "We're doing this HTTP request, we're sending it over here", and then you're getting rid of it again. But then you need another one of these HTTP requests. If you go back and forth the heap, you just end up with this big mess and a huge amount of garbage... So I had to figure that out, and that was a big debugging effort.

**Mat Ryer:** Did it put you off then, encountering these problems? Were these little red flags that you were sort of -- was it chipping away any sort of...? I don't know how to ask that question in a good way...

**John Graham-Cumming:** Well, I think I was lucky in that Cloudflare was developing at the time; it was very much a small company. I wasn't coming into a big company where everything was already set... So I got away with a lot, having these problems. We were growing very rapidly and implementing a lot of stuff. And I think in the early days lots of things are difficult.

But to be honest with you, I've run into problems with every programming language I've ever used, ever, for the last 25 years or whatever it is (maybe even 30). I think that you just deal with the problems of the thing you're dealing with - the operating system, the libraries... I did a lot of C++ programming, and don't get me started on horrible things that happened with C++ with libraries...

**Mat Ryer:** \[laughs\] Yeah. And of course, now everyone can use Go with a lot more confidence thanks to efforts like yours, where people did go in and fix things that didn't work for them.

**Jaana B. Dogan (JBD):** I think Cloudflare has been extraordinarily instrumental figuring out some of the critical things... I remember the leap second bug, that you wrote a post-mortem about. There was no monotonic clock, and there were a lot of discussions going on, but nobody was particularly interested in just considering it as an additional API, or in a way to the standard library. That situation actually became very critical, and I think that they released something in the next release, or something, right?

**John Graham-Cumming:** Yeah, they did, and it's great that they did that, although I definitely believe in "A bad workman blames his tools" as a maxim... So we should never have had that bug.

**Jaana B. Dogan (JBD):** Yeah.

**John Graham-Cumming:** We were assuming that the time API was monotonic, when it wasn't... And that was quite scary. But yes, obviously by us having these mistakes, things do progress.

The biggest thing for us though, I would say, is that up until Go 1.5, garbage collection pauses were real, especially as the heap got large, and that really caused these issues... And in particular -- so we operate what I believe is the world's largest authoritative DNS service, and that's entirely written in Go. \[unintelligible 00:18:57.09\] which is our internal DNS server. If you've gone to our website that Cloudflare uses, or used an API, then you've done a DNS request against one of those... And what's interesting about it is that we could see the performance of our DNS server go down when the garbage collector paused, externally; there were external measuring services... And Go 1.5 really fixed that. So that was a huge thing.

Then the other thing is we spend a lot of effort on optimization, particularly around crypto stuff. We've committed back a lot of Assembly optimizations of stuff, so that Go net and crypto is really, really far.

**Mat Ryer:** That's awesome. Were there any situations where you felt like Go didn't fit? Where you maybe tried to solve a problem with it, but you were fighting with it too much and you opted for a different language, or something?

**John Graham-Cumming:** \[00:19:52.27\] I mean, we don't use Go for everything... I think that it's very good if you have I/O bound stuff, and you need lots of parallelism, lots of concurrency. It's great for that kind of stuff. If we're doing low-level bit twiddling type stuff... For example, Cloudflare does a lot of image manipulation - resizing, resampling, all sorts of stuff. I think there are languages which are better suited for really fiddling around at a low level.

I know in the early days there were some times where it felt like we were fighting a bit with the language, like in this garbage collection thing. Now I don't feel like that, and now it's a question of "Well, what's the right language to use for this particular problem we're solving?" I think Go is great for many, many things, and we use it a lot.

**Jaana B. Dogan (JBD):** Do you ever have any guidelines around picking a language? I'm seeing some very large companies do that... "If this is the type of problem pattern you're solving, or whatever, just don't use this language." At least they're documenting some of the anti-patterns.

**John Graham-Cumming:** No, we don't have any formal guidelines about it. We have a lot of discussions internally, depending on the project, and then people are fairly free to choose the language they want to use at Cloudflare. We don't actually have a large number of languages people use, but mostly I think from the engineers we have, they'll make a choice about what they wanna use, and it's usually within one of a very small number of languages.

**Break:** \[00:21:21.14\]

**Jon Calhoun:** When you were adopting Go early on - I know one of the things we hear a lot from people is that picking up a new language like that is very hard to build a team around, because you can't say "Oh, I want a Go developer with two years of experience" when the language has only been around two years. That's just not gonna happen. Somebody actually asked Mat this on Twitter, I believe... Is that right, Mat?

**Mat Ryer:** Yes. Dylan M. on Twitter asked "Do the devs pick Go up on the job, or do you only now hire gophers? Has that changed over the years?"

**John Graham-Cumming:** We definitely don't only hire gophers, or rustaceans, or whatever. i think that's an enormous mistake, to be like "Yes, you have to have these specific things." You end up excluding a lot of people who are great. And I think that programmers in general are very passionate about learning new stuff and getting new skills. We're very happy for people to learn Go on the job.

There are lots of resources for learning about Go, it's an easy language to pick up, and we have lots of other Go programmers... Equally, we have lots of other Rust programmers. So I think that it would be a mistake if we said "You have to know Go." Yeah, it's great if you do. Super. But fundamentally, technology changes very rapidly, and I think of programming - especially in a very rapidly-changing environment like the one Cloudflare is in - as a learning job. You're gonna have to learn new stuff all the time; language is a part of it, libraries are a part of it. You've just gotta go for it.

\[00:24:00.12\] I think if somebody came to us and said "I'm only willing to program in Go. That's the love of my life and that's what I do", I'd be a little bit worried that they would be somebody who'd just be in a rut, and never do anything else.

**Mat Ryer:** That's interesting... Because that sort of attitude flies in the face of a lot of the way that the recruitment stuff works. I saw somebody tweet the other day, they said "Go is ten years old, so I can finally apply for some of those jobs that need ten years of Go experience..." \[laughter\]

**John Graham-Cumming:** Yeah, but that's like -- you know, the people who are putting they need ten years of Go experience are really unimaginative. That's probably a sign that you shouldn't go and work for them.

**Mat Ryer:** Yeah.

**Jon Calhoun:** I think it's also a sign that the person writing that must not use Go much, because -- like, there are some things that people make mistakes with early on, and there are some patterns that they eventually learn to adopt or learn to avoid... But in my mind, one of the things I like about Go is that it doesn't strike me as a language you need ten years of experience with to be productive.

**Mat Ryer:** Right.

**John Graham-Cumming:** If you do need ten years of experience to be productive with a language - I mean, I think we should probably deprecate that language. \[laughter\]

**Mat Ryer:** Yeah.

**John Graham-Cumming:** Now, having said that...

**Jaana B. Dogan (JBD):** I can name too many languages actually in that category... \[laughter\]

**John Graham-Cumming:** I was gonna say, I'm not sure that it's actually possible to master C++ completely. I think everybody who writes C++ writes their own variant, which is probably what people like about it... But no, I think that fundamentally programmers like to learn; they want to work on new stuff, and early on, once Go took off and once we were pushing it, people wanted to work for us to work on Go. So they discovered it, or they were keen on it, and they were coming to us, and that was -- you know, what you want from programmers is motivation. You want people to be motivated. And if you have an intrinsic motivation, which is "Hey, I'm learning, I'm growing", that's fantastic. As a company, why would you not hire people who want to do that?

**Jon Calhoun:** So with that, did you run into issues where -- one of the things people do when they pick up Go is they'll think "Go has these awesome channels. I wanna use them", and they'll use them in a lot of places where realistically they shouldn't be used, or they're overkill. Did you have to push back on that some, or was that just something where -- how did you handle that?

**John Graham-Cumming:** That does happen a little bit... Although I think somehow that self-corrects, because people generate these monstrous things, and I'm sure I did, in the early versions of Railgun; I think I had weird goroutines that were reading from one channel and writing on another one, like some sort of foreign key table in a database, or something... But I think that sort of self-corrects, because people build things that are very complicated. The other thing is we do do code reviews internally, so people will point out "This is a weird way of doing this."

**Mat Ryer:** Yeah. I was definitely guilty of that, too. When I first saw channels, I just thought "Okay, this is brilliant. I mean, do you want me to concatenate some strings? I'll use channels, no problem." \[laughter\] Yeah, absolutely, and it'll be great. And with a bit more experience, sometimes you think "Do you know what - a mutex is just gonna be some simple here. I'm just gonna go for that."

**John Graham-Cumming:** Yeah, I mean... That is the one instance where -- yes, sometimes it's great. If you're accessing a map concurrently - yeah, okay, wrap it with a mutex and use that, and probably not have a goroutine processing a map through channels... I mean, I guess you could do that, but... Ultimately, a lot of this stuff comes down to optimization. It's not the end of the world if you build something that's not optimal, because if work for your environment, then that's fine... And then later on you go and measure it and figure out what's bad or not.

**Mat Ryer:** I think coming from the CTO of Cloudflare, that's quite an important thing that you've just said, John... Because too often programmers are a little bit obsessed with that too early, of making it perfect, and "Don't worry about whether it's easy to read and maintain, we just care about squeezing out all that performance..." And obviously, if you do that too soon - this is the famous mistake that we all still are making, which is if you do it too soon, you make bad assumptions and things. And the kind of scale that Cloudflare runs at - that's really encouraging to hear that, I think.

**John Graham-Cumming:** \[00:28:02.10\] Well, the thing is I started life as a C and assembly language programmer, writing network device drivers, and there every cycle matters. You don't \[unintelligible 00:28:09.28\] less cycles. But that's appropriate for that environment. Now we have multiprocessor CPUs... It is very obvious that you should measure it, because one of the things about measuring performance is you frequently get surprised by what is the problem. You come to a point and you're like "Wait, why is that happening?" Whereas if you used your gut, it's often completely wrong, especially in large systems; you just don't necessarily know where things are.

I know that programmers like to be really clever, and it's really tempting to optimize things. "I'm gonna write my own \[unintelligible 00:28:50.14\] and make it even faster." It's like, "No, you're not."

What we've done, for example with Go, is we went and optimized the crypto stuff, because we're doing a lot of cryptography because of all those HTTPS requests... So it was appropriate to go and do that work, and we have someone who loves doing that work, that used to work for Intel... So I think you've just gotta measure it and figure out where your problem is, and not right from the beginning be worried about some of this stuff, because you just -- you just optimized the wrong thing.

**Jaana B. Dogan (JBD):** Talking about measurements... Where do you measure? Do you measure the production performance? Where is the data coming from?

**John Graham-Cumming:** Yes, we can measure production performance. There are lots of great tools for doing this. You can get in and you can use things like strace to figure out what your programs are doing in production. We do do that in production when we want to fully understand something.

Obviously, we also have test environments, but I have to say, when you're operating at the scale of Cloudflare, one of the things that's surprising is how heterogeneous the traffic is. The traffic that goes to 20 million websites is not what you expect in your test environment; it's very hard to replicate... So the real world will surprise you, and so it is useful.

One of the tools we've used a lot is a thing called a flame graph, which can show us so we can introspect and understand which functions and which parts of the code are spending a lot of time... So when we get to have to optimize things, we have tools to do that work.

**Mat Ryer:** And in your case, code optimizations and things that the rest of us often think of really just as purely technical exercises, in your case they must in some situations have quite a significant business impact. The cost of doing things if you just have a few users, of course - you almost don't even have to think about it. But at your scale it matters... So have there been any situations where there's been a kind of \[unintelligible 00:30:50.13\] between business demands on one hand, and the technical on the other?

**John Graham-Cumming:** Well, I don't think they have, not from an optimization perspective... Because actually, what happens is we have a financial model where we can say how much saving CPU time saves us in terms of money... Because we're growing very rapidly, and if we can not buy new hardware quickly, then that saves us a significant amount of money... So the optimization - you can look at a dollar amount on it.

Now, what's interesting is we're optimizing for different things. One of them is CPU utilization, because we'd like to buy less machines. Another one is latency, because we'd like you to have the fastest experience when you use our service, you go to a website. To a certain extent they're the same thing, but not always; it depends on what the actual workload is on the edge machine. Some things are not involved in the critical path/latency part, but might be using a lot of CPU.

\[00:31:56.23\] So the only real trade-off tends to be "Is it better to build this new feature, or is it better to do an optimization?" That's probably the trade-off that comes into play... Because there might be some new product you wanna build, that you wanna get out, and there'll be some predicted revenue around that product, or you want to be first, or you want to beat a competitor, or something... Versus "Well, that same engineering team could save us X million dollars by shaving x% off of this CPU utilization globally."

Those decisions have to be made, and we have a product management team that helps us make those decisions, about where to spend engineering resources.

One interesting thing that involves Go is we have an internal product which is a sort of load balancer. If you think about the growth of Cloudflare over the last 8-9 years, we've got multiple generations of hardware; we have 194 cities where we have hardware, and there are multiple generations, with different performance characteristics... And we wanted to make sure that basically every machine is running at the same CPU utilization within any city. That was not the case if you do naive load balancing, because all the machines can't handle the load.

A quite typical example would be some machines running at 50% load and some at 75% or 80%, at the same time. So we wrote this coordination layer which is actually measuring the performance of the machines, understanding what they're capable of, and then real-time directing traffic between the machines... And the coordination of that is Go. That has actually brought us into line. There were quite dramatic graphs in Cloudflare where you can see this mixture of CPU percentages \[unintelligible 00:33:43.26\] and the entire graph flattens out. Every machine is running exactly the same CPU utilization. So there's many things that Go is being used for.

**Mat Ryer:** That must be so satisfying, to see those graphs change...

**John Graham-Cumming:** If you use Cloudflare, you probably know that when you make a configuration change in Cloudflare, be that you click a button, or you upload some code to run on our edge computing environment, it goes global very fast. The way this works is we have this internal thing called Quicksilver, which is a distributed key-value store. That is written in Go... And it typically will distribute a change completely globally in under half a second. So everywhere from New Zealand to Atlanta, to Santiago de Chile. And that's, again, this fundamental \[unintelligible 00:34:34.24\] to be able to make those changes really, really fast... And again, that's a Go program.

**Mat Ryer:** That's really cool. Can you tell us a little bit about how that works? Did I read a blog post about this (Quicksilver)?

**John Graham-Cumming:** We've mentioned it a couple of times, but we have not actually given a lot of details. It's actually being worked on right now. We're going to talk about all the details about how Quicksilver works, and we're trying to prep the code so we can just open-source it, so other people can use it.

Essentially, we're running a log file system globally; you push stuff in, and then you can at any point find where you are in the log and you can catch up. So if a machine needs to catch up with the latest changes, it can just communicate and say "Okay, I'm at this checkpoint. Give me the delta."

**Mat Ryer:** That's why you keep finding time bugs \[unintelligible 00:35:29.10\]

**John Graham-Cumming:** Maybe, yeah... \[laughs\] I mean, the team who works on that could probably tell you about all of the things they found. One of the things that's interesting is a lot of -- we looked at a lot of other distributed key-value stores and they tend to be oriented a lot of machines in a single data center. And Cloudflare has a lot of machines in a single data center, that data center being the planet. And the problem with that is there's varying packet loss around the world, and there's very varying latency. Coping with that was really what this was designed to do.

**Mat Ryer:** Yeah, that's really cool. I'd love to learn more about that. I don't have a use case for it, but just sort of geeky curiosity, if you will...

**John Graham-Cumming:** \[00:36:13.27\] Yes, absolutely.

**Jaana B. Dogan (JBD):** Yeah, talking about that - you have tons of open source projects that people keep looking at as reference... How did it all start? Did you just want to just push things because that's part of your culture, or did you just specifically did it to share, because Go was very small in the beginning and you were one of the major users?

**John Graham-Cumming:** Well, I'd done open source stuff in the past, so I thought open source was important. I think it's very satisfying for engineers to see their work used by others, so it wasn't difficult to encourage people to open-source stuff. And obviously, if you're modifying something, then you should upstream it. The upstream doesn't always want your modification, but you should at least do that...

And what we tried to do is -- so we have some rules around open-sourcing stuff. First of all, it has to be in production. The reason for that is we don't actually want to pay people to write open source products that are the thing they fancy writing... They'd better be writing something Cloudflare wants. So our rule is we'll open-source something as long as it's used in production, i.e. we really wanted it.

Then there's a real question around the maintenance burden. One of the problems about open-sourcing things is people are gonna make pull requests, and you're now gonna have to dedicate time to it. So we tended to open-source stuff we thought others could use easily. That tends to be small programs, libraries, technologies which are standalone...

There are bits of Cloudflare... For example, our DNS server - a lot of people say "Can you open-source your DNS server?" and the problem is it's deeply-integrated with our business logic, because DNS is fundamentally one of the things we do. So we would have to abstract out that business logic and create some abstract structure for it, and then provide that thing. And that just becomes a lot of work that doesn't make any sense to us.

**Mat Ryer:** Yes. The other thing as well about that is that rule of only open-source things that are in production is first of all you know it's useful, but also you know it works as well. I always think that's a great piece of advice for anybody - don't just imagine a package and build it... Well, you can do that; it's a great way to learn and explore... But the best open source packages are ones where people have just solved their problem.

But of course, you gave that good example, John - they're not always appropriate, even if \[unintelligible 00:38:38.00\] you would do it. Is there ever a fight...? Sometimes people can look at that decision about open-sourcing something or not, and get a bit nervous around company IP, and those sorts of issues. Do you ever have that kind of discussion, too?

**John Graham-Cumming:** Honestly, no. The way in which open-sourcing stuff works at Cloudflare is there is an internal mailing list. You just email it and say "Hey, I want to open-source this thing. This is the license I'm thinking of using." We have a small number of approved licenses... And on that list there's myself, a couple of other senior technical people, and some of our legal team. And to be honest with you, the responses to that -- I mean, if I'm asleep, I obviously don't reply quickly, but mostly it's a yes within a few hours to open-sourcing things.

Now, a part of the reason we can do that is Matthew, the CEO of Cloudflare, has said many times that he doesn't believe there's any piece of code that Cloudflare has written that gives us long-term advantage. So that means there's no real danger in open-sourcing most stuff.

We think we could just dump the whole of our internal Git and then say "Hey, here is everything", and it ultimately wouldn't hurt us long-term. Now, we're not gonna do it, because of the maintenance burden of doing that.

**Mat Ryer:** \[00:40:03.27\] Does it run on AWS? \[laughs\]

**John Graham-Cumming:** God, no. No, definitely not.

**Mat Ryer:** There's no point then.

**John Graham-Cumming:** We definitely do not use AWS.

**Mat Ryer:** No, yeah. That's really interesting... And it does sound like other companies could learn a little bit, I think, from Cloudflare's example here. The generosity and the community spirit and all that is -- I just see it only really rewards companies, but when I speak to people, there's a lot of nervousness around that. The same goes for your blog as well, John, which - for anybody that doesn't know it, it's blog.cloudflare.com. It's a great resource for all kinds of technical and otherwise stuff, isn't it?

**John Graham-Cumming:** Yeah, I mean - that was fairly early on. When I joined, Cloudflare had a blog, and Matthew and others were writing for it. But I really wanted to write really in-depth technical stuff, partly because I like that, and I'm just writing about this stuff, and I think that other nerds like reading in-depth, nerd stuff... So myself and others started doing it, and today I'm the editor-in-chief of the Cloudflare blog.

What I tell people is - when they write something for that - our goal is to educate the reader. So I will go back and I will say "You need to explain to the reader what you're talking about - the background, what the subject is here." So you'll find that some of our blog posts are really long; they take a lot of work.

We have a really fantastic illustrator, Carrie, who does illustrations for the blog... So we really make a huge effort on that, partly for hiring people, because people read and go "I'd like to work for Cloudflare", partly because our customers then will know the sorts of things we're doing, and the sort of technical depth we're involved with, and also partly because it's just good, it's just fun. Other nerds like to know about this stuff.

**Mat Ryer:** Absolutely, yeah. Please do keep it up, we do like it. That's right.

**John Graham-Cumming:** Yeah, we're definitely not slowing down. I know there are -- because I review everything that goes on the blog, and I know there are engineers who probably sigh when they see that I've commented, because I'm probably gonna say "This isn't good enough. You need to add another 500 words explaining what you're talking about."

**Mat Ryer:** Right, yes.

**Break:** \[00:42:29.22\]

**Mat Ryer:** Changing the subject a little, every year at GopherCon UK (the U.K. Go conference) we have now a regular little tradition where we visit Bletchley Park, and John, you have a connect to Alan Turing, don't you? I'd love for you to tell that story, if you could.

**John Graham-Cumming:** Yeah, sure. I had lived abroad for a long time, as I am now doing again. But in 2009 I came back to the U.K, and I think I saw a tweet from probably Stephen Fry saying "It would have been Alan Turing's 90-something birthday today, if he hadn't killed himself." And I knew the story of Turing because first of all I'm a computer scientist, and I'm interested in computer security... So you end up -- Turing pops up all over the place.

And I knew, of course, that he had killed himself, and I knew a lot about the history of the code-breaking stuff, and artificial intelligence stuff... And I was at home, and I just got really annoyed about it. I honestly thought to myself, you know, the problem here is that we don't talk about Alan Turing in general, because it's a kind of shameful thing which is sort of like "Well, he killed himself because he was gay, and because we prosecuted him and we treated him very badly..." So in a very typically British way we sort of forgot to talk about him.

I thought, "Well, if we could get this out once and for all, we could all talk about it, and admit to ourselves it was a bad thing." Then we could celebrate what he did. So I wrote a blog post on my blog saying "This is terrible. Britain should apologize", and somebody in the comments said "You know, you could start a petition on the number ten website." So I immediately went there and created this petition. Now, I had to wait about a month for it to be approved, and I honestly thought maybe 500 people would sign it. You know, "Who cares about this intersection of gay rights, and computer science?" and I was like "There's probably 500 people in the world who care about this..." Well, in Britain anyway, because it's only open to residents.

So sure enough, 500 people did sign quite quickly, and I thought "Well, I'm gonna give it a go. I'm gonna try and get the press to talk about it", and I just worked on it by myself, just trying to get people to write about it. Eventually, The Manchester Guardian wrote about it. Then The Independent, and so on, and it kind of snowballed a little bit.

One of the first famous people who signed it was Richard Dawkins. The cool thing about Richard Dawkins signing it was that I could then go back to the press and say "I know I told you about this before, but now Richard Dawkins has signed it, so what you should write is "Richard Dawkins has signed this." So I did that, and eventually I wrote this cool postscript -- at the time, the signature names were public, and my father was actually reading them every day and saying "I think this is so-and-so (famous person)." And eventually, I automated my father.

So what I did was I wrote this ugly postscript that took the names and then searched on Wikipedia to see if that person had a Wikipedia page, and if on that Wikipedia page it said something like "So-and-so is a British/Scottish/English/Welsh blah-blah-blah...", so trying to see if they were a notable person from the U.K. And if they were, then it would email me and then I could get a hold of them and ask them...

I did that with Ian McEwan, the writer; his name was on there, and I found his email address. I emailed him and said "Are you the person who signed this?" He's like "Yes." And then I was like "Can I tell the press?" "Yes." I did stuff like that, and it grew and grew and grew.

\[00:48:00.28\] Then just before the bank holiday at the end of August I emailed somebody I had met from the BBC, a journalist called Zoe Kleinman. I'd met her because I'd written this book before, and she's written a little bit about my book... And I sent her this really cheeky email which said "This is a really important story. You should write about this." So I was telling the BBC, "Get on with it." And she very kindly wrote back and said "You know what - I'm gonna write something. I'm going away for the bank holiday weekend; I'm gonna submit it to the editor. I have no idea if it's gonna get published." So she did, and I never saw it.

I went to sleep on the Sunday night, bank holiday Monday, I wake up... I have a graph of the number of signatures, and there's almost this vertical line in the number of signatures, because it's suddenly thousands and thousands of people signing... Because of course, BBC has this incredible authority. If the BBC says this is something, people read it, it gets copied around the world... After that I was on the TV and all over the place, talking about it. At that point, 30,000 people signed it.

**Mat Ryer:** I was one of those, John.

**John Graham-Cumming:** Thank you. Thank you for signing it.

**Mat Ryer:** I didn't get flagged up by your automated father as a notable person.

**John Graham-Cumming:** Yes, I'm sorry...

**Mat Ryer:** None taken. I hope you've deleted that program though... \[laughter\]

**John Graham-Cumming:** I actually published everything about this on my \[unintelligible 00:49:19.27\]

**Mat Ryer:** I'll submit a pull request, thank you... \[laughter\] Add myself to it.

**John Graham-Cumming:** Add yourself to it. \[laughs\] I'm not sure it's gonna work now; it's a bit late. But... And then after that I managed to get the flu, and I was sick as a dog...

**Mat Ryer:** Oh, man...

**John Graham-Cumming:** And I was lying in bed and I thought "I've gotta look at my email. Maybe something's going on at work." I checked my personal email, and there's this email from this woman (I had no idea who she was) who says "Can you call number 10 Downing Street? Here's the phone number."

**Mat Ryer:** Oh, wow.

**John Graham-Cumming:** And I thought \[unintelligible 00:49:49.03\] So anyway, I googled the phone number, and sure enough, it's the switchboard of number 10 Downing Street. So imagine me - I'm lying in bed, groggy as anything, so I call this number and I'm like "Okay, this is who I am", and immediately I get put through to this woman, and she's like "The apology is going out tonight. We've already placed it in the Daily Telegraph." That's where it was gonna be published. "I just need to read it to you and I need you to approve it."

So she reads it to me over the phone, and I thought it was great... It's a text that everyone can read. And then she goes "Gordon wants a word." Now, Gordon was Gordon Brown, the Prime Minister...

**Mat Ryer:** Really?

**John Graham-Cumming:** Yes... So she's like "Gordon wants a word." I was like "Okay..." She said "He'll call you." \[laughter\] So I hang up and I'm sort of sitting there... I'm not awake, and I'm thinking "My goodness, is this really gonna happen?" And my mobile phone rings, and it's Gordon Brown. There's no ceremony; nobody calls up and says "It's the Prime Minister. Are you ready for it?" Suddenly, it's like "Hello, John. It's Gordon..." And you can imagine, Gordon Brown is not a very chatty person, if you recall, and I had flu... \[laughter\] So the two of us were under fire and not really wanting to talk to each other very much...

The first thing he said to me - and I'm not gonna forget this - he said "Hello, John. It's Gordon. I think you know why I'm calling..." And I thought "Bloody hell I'm glad I know why \[unintelligible 00:51:22.24\] And then we had this very stilted conversation, because I felt terrible, and he's quite a serious man... And that was it. There you go. So that's my connection to Bletchley Park. After that, obviously, Turing got more recognition, and we were able to celebrate him, and I think it helped give Bletchley a leg up...

**Mat Ryer:** \[00:51:54.20\] Yeah. And your apology - what you petitioned for an apology, and I feel like that was appropriate. They later went on to pardon him. And for me, that implies that there was something they did wrong somewhere. So a pardon I didn't feel appropriate, but the apology for sure.

**John Graham-Cumming:** Me neither. I didn't support the pardon campaign. Two things were important. One was I felt that the apology was good, because they apologized to Turing and everybody else who was convicted. That was important. The second thing is the coalition government - Cameron's government introduced... What was it called? It was something of freedom; it was the Protection of Freedom Act. And what this did is it decriminalized these homosexual acts... Because the problem is there are people alive today who had been convicted of this thing - it had never been expunged - because it was illegal at the time. So the Protection of Freedom Act fixed that. I felt that was all good, and I didn't feel like I needed to do more. I'd done more than I ever imagined.

Then there was this idea of the pardon, and actually I was upset about the pardon, because Turing alone got pardoned... And there were people who were arguing for the pardon on the grounds that he was a genius, and that he somehow deserved it... And I felt that was like "No, I think either you do everybody--" Now, ultimately they did do everybody, so that's fine, but it just made me uneasy, this idea of first of all the pardon, because I don't think he did something wrong, and then to single him out seemed like a mistake. I thought that Gordon Brown's apology did a fantastic job, and I was glad I did it.

**Mat Ryer:** Yeah, well I was really glad he did it. Thank you for doing that. I didn't realize you worked so hard on it. I kind of had the impression it was a petition that just went viral, so... That's even better. Thanks for sharing that story.

**Jaana B. Dogan (JBD):** Yeah, it's amazing - in the last ten years there was a lot of representation of Alan Turing in the popular culture, and it's all because of you. Thank you.

**John Graham-Cumming:** I think so. It's kind of hard to take credit for it, but if you look at it, it really did take off after the apology.

**Jaana B. Dogan (JBD):** Exactly, yeah.

**Mat Ryer:** I give you credit for that, John. I mean, I'm not a notable person, as your automated father made clear, but you still do get -- in fact, I mention it in my book, Go Programming Blueprints. Still available.

Actually, John, there's another link we have... I won a copy of your Geek Atlas book by guessing -- you had some quiz, it was a reference to the prisoner. I don't know if you remember... You said whenever a website asks for your date of birth, you give the same fake date of birth, right?

**John Graham-Cumming:** \[laughs\] Okay, so you're a giant nerd \[unintelligible 00:54:34.24\]

**Mat Ryer:** \[laughs\] Yeah.

**John Graham-Cumming:** On Twitter -- Twitter thinks my date of birth is March 19th, 1928, which is the birth date of the prisoner in the classic Prisoner TV series, and also the actor who played him... So yes, well done.

**Mat Ryer:** Thank you. Thank you very much. \[laughter\] Okay, well that's all the time we have. John, thank you so much for joining us and telling us all about Cloudflare and your experience with Go there. It was awesome.

**John Graham-Cumming:** Thank you very much.

**Mat Ryer:** Thanks to Jaana and Jon also, it's been great. We'll see you next time.
