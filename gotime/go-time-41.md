**Erik St. Martin:** Welcome back, everybody, for another episode of GoTime. Today's episode is number 41, and our sponsors for today are Backtrace and The Ultimate Go Training Series.

On today's show we have myself, Erik St. Martin, Brian Ketelsen is also here - say hello, Brian...

**Brian Ketelsen:** I'm the assassin.

**Erik St. Martin:** \[laughs\] And we also have Carlisia Pinto. Say hello, Carlisia.

**Carlisia Pinto:** Hi, everybody!

**Erik St. Martin:** And our special guest for today is an engineer with Apcera, working on [NATS](https://nats.io/) and also a speaker at GopherCon this year. Please welcome Wally Quevedo.

**Wally Quevedo:** Hi everyone, thank you for having me.

**Erik St. Martin:** So just to get started a little bit, for those who may not be familiar with you personally, we'll start there - who you are and the things you're working on, and maybe we'll talk a little bit about NATS and what it is and the use cases it solves.

**Wally Quevedo:** Yeah, so I'm Waldemar, but most people call me Wally. I'm a software engineer at Apcera and I do development of the Apcera platform, which is a container orchestration solution. Also, I'm one of the core maintainers of some of the official NATS clients \[unintelligible 00:01:50.29\] original clients. There's a new Pure Ruby client that's getting some traction, and Python clients, both for Python 2 and Python 3. So you have this salute of who I am, quick intro...

**Erik St. Martin:** So a lot of polyglot stuff, trying to maintain all the libraries for the different languages.

**Wally Quevedo:** Yeah, and even though the NATS project started in Ruby, the canonical implementation these days now is the Go client. Go is a very important part of the project, because it's the one that we try to keep as a reference implementation... Basically, the spec that you have to implement for each one of the different languages, if you want to call it an official client. So yeah, I like Ruby a lot, I have used it since I originally got into the NATS project through [Cloud Foundry](https://www.cloudfoundry.org/), where it was being used as part of the control plane. We were one of the early adopters at my previous company in Japan, a huge eCommerce website.

That's where I started getting into the project, and it's been really cool seeing how the NATS project has been evolving, thanks to the Go community as well.

**Brian Ketelsen:** Let's start talking about the purpose behind NATS. I understand NATS came out of Cloud Foundry and it was the control plane for all of the components inside Cloud Foundry... What purpose does it serve inside Cloud Foundry? What's unique about NATS that makes it so good for that control plane?

**Wally Quevedo:** Yeah, it was a piece that would allow you to do the internal communication throughout the platform. I think with Cloud Foundry it did really well because it was simple and resilient enough for the type of communication patterns that you would have inside of that type of architecture. We ended up having a cluster of thousands of machines, and even though it was still the Ruby version, it was simple enough to operate for the kind of communication that we were doing for Cloud Foundry.

\[00:04:02.19\] I really like the simplicity of doing operations with NATS. It just fits really well for that type of usage. They're used for fire-and-forget, request-response, basic communications for starting applications and heartbeats for fault-tolerance, for example. Does it make sense?

**Brian Ketelsen:** It does make sense. Now, one of the things that I hear very frequently is that NATS is pretty bulletproof, and I just saw a tweet (maybe yesterday), a person was talking about their infrastructure and how they had to update a bunch of things, and when they were messing around with the servers, they noticed that that NATS service hadn't been restarted in 9 or 12 months, or something like that.

What is it about NATS that makes it so resilient? Because that's a very common message I hear - it's hard to kill NATS.

**Wally Quevedo:** Yeah, I like that with NATS a lot. As a person that was operating on these large clusters, having the uptime, having everything available was critical. I like that confidence that it was going to be basically around and available for the components to be able to communicate. I guess it is because of the simplicity of how it does much less - I think that plays a big part here. Also because it tries to protect itself from bad actors within the system.

If you have a client that is trying to do some harm, the server will basically take out the connection, and other clients would still be allowed to communicate and basically not be impacted by these other parts of the system. So yeah, it is true...

At the beginning - with the original Ruby implementation - they didn't have clustering from day one, but it was still possible, for example, to do basic failover scenarios with NATS, and the recovery was pretty fast still. So yeah, I guess it's well suited for that kind of a use case. It really does stay up for long periods of time.

It's very difficult to crash. I've managed to crash it a number of times, but it was by making these weird clients trying to attack it, basically. Those are all fixed now, but I like finding these weird corner cases with the buffers from a NATS server where you could make it crash... But they have all been fixed in master, so yeah, if someone manages to make it crash somehow I will be fond of looking into it.

**Carlisia Pinto:** You mentioned the original implementation in Ruby...

**Wally Quevedo:** Yeah.

**Carlisia Pinto:** I'd love to go there... Were you there when that happened? Were you already at Apcera?

**Wally Quevedo:** No, I was living in Tokyo for around five years, and that's where the Cloud Foundry was originally implemented. The company I was at, they were looking for basically like a platform as a service kind of system, pretty much like what Heroku worked for, but for an internal for the company... Fortunately, Cloud Foundry was just released the same year when we were looking at some solution. There was no Kubernetes at that time, and yeah, we were one of the early adopters in Japan for NATS.

**Carlisia Pinto:** Because what I wanted to ask is how much you know about the transition, the motivations behind transitioning from Ruby to Go... Were there benchmark tests? Did they consider other languages? What was it that made Go the choice to transition into? What kind of problems were they having that they felt they needed to port at all to another language?

**Wally Quevedo:** \[00:08:04.05\] It's worth mentioning that the original server was also within an event machine. A good reference for this is [the talk from GopherCon from Derek](https://www.youtube.com/watch?v=ylRKac5kSOk). I think it was at the first GopherCon, in 2014.

**Brian Ketelsen:** It was, yeah.

**Erik St. Martin:** Yeah, he spoke at the first one.

**Wally Quevedo:** Yeah. So actually this year it's going to be my first GopherCon, I'm really looking forward to it.

**Carlisia Pinto:** Nice.

**Wally Quevedo:** Derek explains more in detail why Go was a good fit.

**Carlisia Pinto:** Can you share with us some of those reasons?

**Wally Quevedo:** Go is great for these kinds of system. The performance is of course one of the big gains for NATS. I think the original server - you could get it at mostly like 150,000 messages per second, but for the NATS server it's up to the millions, right? So even though the original Ruby server was already.. -the protocol itself has not changed at all, and you could get much better scalability with the Go-based server.

Of course, there's the whole building concurrency - Ruby is still having some issues there. Also, the small binaries I think were all a huge factor in a compiled language, where you can't have a small binary. It was a big plus here, that's why we can have very small Docker images, for example, a few megabytes. So I think those were the big pluses for Go that NATS has benefitted from a lot.

**Carlisia Pinto:** Nice.

**Brian Ketelsen:** One of the questions I have about NATS in general is that I find the sales pitch for NATS is a little muddy. When you look at the NATS website it says "It's the dial tone for your servers", or "It's a communication platform", but a lot of the benchmarks that they list on the website are about messaging, like message queuing... But NATS also does fanout messages, and it seems like it does a request/reply, almost like an RPC pattern... What is NATS...? What is NATS? Help us out.

**Wally Quevedo:** Okay, so NATS is a high-performance messaging system, and you could use it as a transport to be able to communicate with clients that connect through it. It's like a pure publish-subscribe messaging system, but on top of this basic pub-sub you could do also basic request-response for RPC type of use cases. That's how I would describe NATS.

Actually, one of the really nice, concise explanations from NATS is from Ivan from the NATS team, describing that someone was complaining that a NATS server was sending duplicate messages. Ivan describes in the issue that basically it receives a message, and once it receives a message, it send it directly to any subscriber that has shown interest into something. It keeps it in a buffer for two seconds, and it's going to be waiting for some client to be able to \[unintelligible 00:11:25.20\] these bytes in order to communicate by draining the socket. That is, in a very small explanation, basically what NATS is... To communicate to these many clients very fast.

**Erik St. Martin:** I think it has the notion of persistent messages too, right? Where if the client goes offline, the client can reconnect and kind of consume any messages that it might have lost.

**Wally Quevedo:** \[00:11:50.13\] NATS itself does not... NATS is just a fire-and-forget; you can publish messages... For any subscriber, they have to be connected to a stable connection to be able to receive those messages. If they're not around by the time those messages get published, then those messages will not be received. But the persistence on messages was a big ask from many users, and now there is NATS Streaming, which basically enables for that kind of message redelivery use case where you do publish messages into a queue, and then you can have the consumers basically pulling these messages at their own pace.

So for the persistent use cases, there is another tool named NATS Streaming. That gives you the redelivery, kind of like message replay features.

**Brian Ketelsen:** From my understanding, NATS Streaming is a whole lot like [Kafka](https://kafka.apache.org/), where you can just go back and say "Give me all of these messages from the beginning of time" or "Start 600 messages ago and give me all those messages."

**Wally Quevedo:** Yeah, pretty much. You can start your subscription from the beginning of all the messages that have been published, or if you reconnect and maybe you have lost some messages during that reconnection, then you start once again from the last sequence number that you may have received.

**Brian Ketelsen:** That's nice. So in terms of NATS vs NATS Streaming, what's the cost of the durability? How much throughput do you lose when you have to save messages?

**Wally Quevedo:** Yeah, the performance is going to be very different, mostly because also NATS Streaming itself is on top of NATS. NATS Streaming is built, for example, with [protocol buffers](https://developers.google.com/protocol-buffers/). It is using protocol buffers being transmitted on top of the NATS transport to be able to do the hacking and publishing of the messages. So by definition the performance is always going to be less than NATS itself. There's definitely a cost there.

**Brian Ketelsen:** One of the things that really impresses me about NATS is how flexible it is. I was building a class this week on microservices with [Go Micro](https://github.com/micro/go-micro) and one of the plugins for Go Micro is a transport layer plugin, so that you can choose to use NATS as the entire transport for your microservice ecosystem, and it just amazed me that it was just that easy to write a couple hundred lines of Go code and substitute NATS for RPC and messaging... It's impressive how flexible NATS seems to be.

**Erik St. Martin:** One of the things that I love about it is the number of platforms, because I think there's Javascript implementations... I know I've seen Arduino and things like that, so people can have IoT devices just push metrics out to NATS servers.

**Wally Quevedo:** Yeah, it's been very cool how the community has been taking off in some of the recent years. For a long time there was only the Ruby, Node.js and the Go clients. Now we have C\#, C, Elixir clients. The Python clients, they are official now...

**Erik St. Martin:** So is this mostly open source contributions, or does Apcera in the NATS scene deliver most of these different libraries?

**Wally Quevedo:** Yeah, we try to have official libraries as much as we can. It's a very small team, the NATS team. But yeah, for the more important languages, we try to have some off-the-shelf solutions. There's many from the community as well, even like Perl clients. But yeah, it is all open source.

**Brian Ketelsen:** Yeah, an amazing amount of clients. I looking at the community contributed clients - there's .NET, Arduino, Elixir, Erlang, Haskell, Lua, MicroPython - I've never even heard of MicroPython - PHP, Python, Rust, Scala, Spring, Swift... That's impressive. That is a very broad platform.

**Erik St. Martin:** \[00:16:09.23\] Wow, I'm just looking through this... It's been forever since I've looked through some of the connectors and things like that. There's Fluentd and Prometheus... This is crazy.

I think it is about time for our first sponsor break, but when we come back, I wanna talk about maybe some of the use cases you've seen NATS used for, which would be really cool.

**Wally Quevedo:** Okay.

**Erik St. Martin:** Our first sponsor for today is Backtrace.

**Break:** \[00:16:33.25\]

**Erik St. Martin:** Alright, so we are back, talking with Wally about NATS. Just before the break I was talking about what are some of the unique -- or maybe not unique, but interesting use cases or large scale that you've seen NATS for... I know often it helps to put into perspective example use cases...

**Wally Quevedo:** One that's very interesting recently is the work from R.I. Pienaar; he wrote MCollective for [Puppet](https://puppet.com/), and he was initially trying to prototype using the original Ruby client, but it was not thread safe, so basically that's why now we have a different one for Ruby... But he could manage to change the transport for the whole MCollective to use it for Puppet on top of NATS. It's a very ambitious project, and it was very cool to see NATS replacing some other transport to make the system faster.

Also, Clarifai was using NATS Streaming, as well. This is just from the content that has been published recently in the [NATS.io blog](https://nats.io/blog/)... There's a number of entries there.

**Erik St. Martin:** Now, with just the amount of effort and the large nature of this project, my assumption is that Apcera also heavily uses it for some of their own infrastructure, too.

**Wally Quevedo:** Yes, of course. The whole Apcera platform is written in Go. There's some C in some places, but NATS is part of the control plane, and we use it for the discovery from the components. So yeah, it's an essential piece of the architecture for the communication as well, and simple use cases like the service discovery of who it's talking with in the system, doing basic request-response to starting the applications within the platform... So yeah, NATS is an essential piece of the architecture.

**Erik St. Martin:** So we all end up loving when new Go releases come out, because of the performance improvements. I can only imagine the difference when you guys do a new build... \[laughs\] It's like, "Oh, we can get rid of half our servers now." \[laughter\]

**Carlisia Pinto:** Can you tell us a bit about alternatives to NATS and what makes NATS a good choice for people?

**Wally Quevedo:** I would choose NATS when I want to have low-latency communications. That is simple, right? When you care a lot about the simplicity of deployment, maybe having a lower collective overhead for your system, and you care a lot about the performance - that's where I would look for NATS.

\[00:20:05.28\] These types of systems, like the Apcera platforms or Cloud Foundry, where you want to do basic communication and service discovery, I think it fits really well. The control plane use case, yeah.

**Carlisia Pinto:** And how about systems that don't have so much demand. Is there any disadvantage in using something like NATS as well? For example let's say I need messaging, but I'm not at the level of Cloud Foundry, I'm not that big of a system... Would there be an advantage for me to use NATS, or would that be overkill? Is there a point in which NATS would be overkill for a system?

**Wally Quevedo:** Yeah, that's a very good use case... It's definitely the opposite of overkill. It helps to have a very simple solution for this type of communication. You don't have to have a huge platform to be able to rely on NATS. You just want to be able to have this low overhead solution. I think that fits really well because it's very simple, a very small type of configuration, it doesn't have any other dependencies... And yeah, it's easy to get running with NATS, it's pretty lightweight.

**Brian Ketelsen:** The NATS binary itself is tiny, and it uses very little RAM. It's amazing how much performance they're squeaking out of Go. That GopherCon [talk](https://www.youtube.com/watch?v=ylRKac5kSOk) from 2014 is a really good talk to watch. Derek Collison goes through pretty much all of the work that they did, and at that time in 2014 I think he was really proud of a million messages per second out of the Go service. After that they did some more tuning, and Go improved, and now I know they're well into 2+ million messages per second with NATS.

**Wally Quevedo:** Yeah, it has been getting faster... Now we're doing demos with like 11 million messages. \[unintelligible 00:22:08.00\] micro benchmarks. For smaller types of payloads it's around 11, 12 million messages per second.

**Brian Ketelsen:** That's amazing.

**Wally Quevedo:** Yeah, it's pretty cool.

**Erik St. Martin:** So speaking of GopherCon talks... You will be speaking at [GopherCon](https://www.gophercon.com/), and I don't think we wanna give away the secret sauce, but do you wanna give some hints or a background of what your talk is gonna be about?

**Wally Quevedo:** The title of the talk is Writing Network Clients In Go, and the designing and implementation of the NATS client. It was motivating to do this talk, because Go is a very important piece of the success of NATS. It is also the canonical implementation, so I really want to have something that really shows off how Go helps the NATS project get there. At the same time, it's kind of like a reference implementation of how the NATS protocol works and what is the reconnection logic that you have to follow in order to have a resilient client, and how do we do that with Go? That's kind of the main goal of the talk. I'm very looking forward to it.

**Brian Ketelsen:** It seems like Apcera is very community-oriented. I noticed that they sponsor a lot of meetups and conferences, and the whole team seems to be very active in all of the communities that they participate in. Is that a culture that's deeply embedded in Apcera, or is that just the coincidence of my observations?

**Wally Quevedo:** No, Apcera has been involved a lot - especially with the Go community - from the beginning. It's part of the culture of Apcera, I would say. We run a couple of the meetups as well for the SF Microservices... So it could have been a coincidence, but I would say that yeah, we're very community-oriented.

**Brian Ketelsen:** \[00:24:14.18\] That's cool.

**Erik St. Martin:** I totally just lost my place. \[laughter\]

**Brian Ketelsen:** Well, we had a lot of interesting projects and news come up this week. Do you wanna move on to that, Erik?

**Erik St. Martin:** Yeah, yeah.

**Brian Ketelsen:** So there's a big, big issue with the update of MacOS to 10.12..4 and Xcode 8.3. Apparently -- I'm not sure if I have this completely correct, but if you build a binary that has cgo enabled in one way or another, which might mean something as simple as an import of something that imports SQLite, the binary will fail with a "Killed: 9" message. I saw (I think it was Tuesday) when the update came out a lot of messages on Twitter, on the Go Slack, all over the place, people wondering what the heck was going on with these "Killed: 9" messages.

So if you are using Go and haven't yet updated to the latest MacOS, hold off on that for a little bit. I know that there's going to be a fix. Actually, there's already a fix committed in Go's source repository, but there hasn't yet been a release of Go 1.8.1, but there will be shortly, to fix that.

So that's a big deal. It isn't often that operating systems break our programming language.

**Erik St. Martin:** I already updated, but fortunately I develop off of Linux, so I never note... \[laughter\]

**Brian Ketelsen:** I updated too, and the day of the update I had to do a remote teaching, so I just did it from Linux and it was fine.

**Erik St. Martin:** You know, I'm terrible about the updates, too... Whenever there's new stuff, I'm like "I want it, I want it now. I don't care what breaks, I'll figure it out."

**Brian Ketelsen:** Exactly.

**Erik St. Martin:** So one of the other things too, speaking of conferences and stuff, is [Golang UK](https://www.gophercon.co.uk/) has their CFP open. That will run until 30th April, so based on today's recording date, that's basically a month to get proposals in for anybody who would like to speak there.

**Brian Ketelsen:** I'm gonna put a proposal in for that.

**Carlisia Pinto:** Yeah, that's a nice conference, I was there last year.

**Erik St. Martin:** I still haven't made it. Have you been to any other Go conferences, Wally?

**Wally Quevedo:** I've been to the meetups in San Francisco, but conferences - not yet. GopherCon will be the first one. Oh, well definitely I've been at GoCon. I was at the first Go conferences from Japan.

**Brian Ketelsen:** Oh, that's nice.

**Wally Quevedo:** Yeah. Actually, GoCon is part of an event for dating, so that's why it became GoCon - Go conference. \[laughter\] So yeah, it's very funny when you see the \#GoCon, because it gets mixed with this... Yeah, it's very fun to \[unintelligible 00:27:01.29\] \[laughter\]

So I was there at the GoCon from 2013, and then I met [Dave Cheney](https://twitter.com/davecheney) on the next one, he was talking there. So yeah, I've been at those, but my first GopherCon would be the one this year.

**Erik St. Martin:** Awesome, you're in for a treat.

**Wally Quevedo:** Yeah, I'm looking forward to that.

**Brian Ketelsen:** It's gonna be big.

**Erik St. Martin:** All the other conferences are awesome, but my opinion's biased. \[laughter\]

**Brian Ketelsen:** So speaking of GopherCon, we announced our workshops for the day before the conference this year; those are all up on the website and available for sale. There are six workshops that have a variety of different topics, they are very low-cost, and they have limited seating. So if you're looking for something to do the day before the conference, come into town early and get your learning on, because there's some really good workshops this year. Go to gophercon.com/workshops and check them out.

**Carlisia Pinto:** \[00:28:04.29\] I'm definitely doing one of those...

**Brian Ketelsen:** Spoken like a person who built that website.

**Erik St. Martin:** \[laughs\] So I've been really heads down the past week with some work stuff, but I haven't really seen a whole lot of projects that I thought were interesting... And that's mainly just because I haven't been looking. One of them I did find was [Go ERD](https://github.com/gmarik/go-erd) (Entity Relationship Diagrams), using graphs to show dependencies and how they're interrelated... Which is actually really interesting to run on some of your codebases, and kind of scary at the same time.

**Brian Ketelsen:** So how does that work? Does it use the types and navigate through the AST, determining how the types relate to each other?

**Erik St. Martin:** You know, I'm not really sure how it's implemented, but Go has a lot of stuff in their standard library for parsing the abstract syntax tree and stuff, so I'm imagining it's using the Go library for that.

**Brian Ketelsen:** Say "abstract syntax tree" seven times fast.

**Erik St. Martin:** Right... \[laughs\] No wonder people call it just AST for short...

**Brian Ketelsen:** But this looks really cool, I just pulled up the GitHub. That's awesome.

**Carlisia Pinto:** I saw that project and I think it's awesome. I'm always running a tool or another to produce ERDs, because if I'm dealing with a database I wanna see all of the entities. So it's definitely very cool to have that in Go.

**Brian Ketelsen:** I love it, that's really cool. I'm gonna have to check that out. Oh... Oh-oh-oh, this is big! [Vim-Go 1.12](https://github.com/fatih/vim-go) was released.

**Erik St. Martin:** Oh, yeah, yeah...

**Brian Ketelsen:** I didn't know what the difference is, because I always run off of master and update it every day, because I -- just that way... \[laughter\] So I couldn't tell you what's different between 1.11 and 1.12, but it's getting pretty darn amazing.

**Carlisia Pinto:** He keeps a very good and well-organized changelog. It's in the repo somewhere.

**Erik St. Martin:** So what's your editor of choice, Wally?

**Wally Quevedo:** It has to be Emacs.

**Brian Ketelsen:** Emacs? Nice.

**Erik St. Martin:** Nice!

**Wally Quevedo:** Yeah, I'm a big Org-mode person. Actually, if you push a .org document in GitHub, I'm "maintaining" the library that's rendering to HTML.

**Brian Ketelsen:** Oh, wow.

**Erik St. Martin:** So what do Emacs users use that's kind of equivalent to Vim-Go? Is that just the normal stuff that's part of the Go repo?

**Brian Ketelsen:** No, there's a Go-mode... Go-mode, writted by Domink Honnef.

**Erik St. Martin:** Nice.

**Wally Quevedo:** Yeah, I'm good with the Go-mode. It has integrated the gofmt, goimports...

**Brian Ketelsen:** I know this because I played with Emacs two or three weeks ago. I tried it for a day... There's a lot of Control going on there; Control this, control... I think somebody had some control issues. \[laughter\]

**Erik St. Martin:** I tried it years ago only a little bit, but it's kind of hard because I think that there's value in learning things like Emacs and Vim, but once you've learned one, there's not as much value to switch. You gain so much efficiency from using either one of them, that you're like "Is it really gonna be that much faster using the other one?"

**Brian Ketelsen:** Well, it's all the demos of Emacs that make me still want to learn it. I know Org-mode is a really big deal, and [Chase Adams](https://twitter.com/chaseadamsio), our long-time listener - Hi, Chase! - keeps tweeting about how much fun he's having with Emacs. And he switched, so... I don't know, I'm getting a little old to be learning new tricks, so let's face it...

**Erik St. Martin:** Yeah, that's probably the bigger issue - I need to get stuff done. So it's probably about time for our second sponsor break. Our second sponsor for today is The Ultimate Go Training Series.

**Break:** \[00:31:54.09\]

**Erik St. Martin:** Alright, we are back, talking to Wally Quevedo from Apcera. So we were going through projects, news... Anybody else have any other projects they wanted to talk about?

**Carlisia Pinto:** Yeah, I wanted to mention Nate Finch's blog post about his [three and a half years at Canonical](https://npf.io/2017/03/3.5yrs-500k-lines-of-go/), and 500,000 lines of Go code as part of the Juju project.

**Brian Ketelsen:** That was a great post.

**Carlisia Pinto:** Wasn't it? It's really interesting. He goes into different categories of things, for example package management, project organization and testing, error handling... It's a very good read.

**Brian Ketelsen:** It really was, and probably there aren't that many projects at that sort of scale where you can get a view of that project from the outside without a non-disclosure agreement, so it's neat to see somebody intimate with that project talk about it so well.

**Erik St. Martin:** So actually, NATS has probably been around that long, too.

**Brian Ketelsen:** Did you just mansplain us? "Actually..." \[laughter\]

**Carlisia Pinto:** I think he was more like there, like "Where is NATS blog post about the three and a half years of Go usage?"

**Brian Ketelsen:** Well, there's a blog post on [Gopher Academy](https://gopheracademy.com/) - I think I even dropped it in the Slack - about NATS and Go and Ruby. Oh yeah, I did... High-performance cloud native messaging written in Go.

**Erik St. Martin:** How long have you been working on NATS, Wally?

**Wally Quevedo:** I think since I joined Apcera, about a couple of years ago.

**Erik St. Martin:** It'd be interesting to hear how Apcera's platform and NATS has evolved over that period of time, too.

**Wally Quevedo:** Yeah, it would be cool to summarize.

**Erik St. Martin:** We'll tap Derek on the shoulder. \[laughter\]

**Brian Ketelsen:** Cough-cough...

**Erik St. Martin:** Because that means some of that stuff has had to have changed quite a bit. We don't think about it as much from release to release, but when you start thinking back three, four years, the things that have changed just in the idioms and the way we do things is actually really interesting. I can't even remember vendoring back then. Now it seems to be all we talk about, but four years ago we were just happy to have Go, we didn't care.

**Brian Ketelsen:** You know why we didn't care about vendoring? Because there were no packages back then. We all had to write our own. When I was a kid, we didn't have external packages, we had to write our won.

**Erik St. Martin:** Yeah, there was very little outside of database libraries.

**Brian Ketelsen:** Yeah.

**Wally Quevedo:** Yeah, I think originally Derek also wrote his own hash implementations.

**Brian Ketelsen:** He did, yeah.

**Wally Quevedo:** Yeah, because the built-in one was not as performant. He wrote his own for a while. They have since been replaced, and what is seen in this part of the standard library was there for a while... During the evolution from NATS, they had their own hash maps.

**Erik St. Martin:** I wanna say he talked about that in his GopherCon talk in 2014.

**Wally Quevedo:** Yeah.

**Erik St. Martin:** I haven't watched it since 2014, but I vaguely remember that.

**Wally Quevedo:** Yeah, it's there.

**Brian Ketelsen:** \[00:36:07.08\] That whole GopherCon thing was kind of a blur, our first year.

**Erik St. Martin:** I think they're all a blur. \[laughter\] I think life since the first one is a blur. So does anybody have anything else they wanna talk about? I didn't see any projects this week, I've just been so heads down.

**Carlisia Pinto:** I don't have anything else. I mean, I do have a bunch... There's so many things...

**Erik St. Martin:** You guys wanna do \#FreeSoftwareFriday? I think that Brian has a birthday today...

**Brian Ketelsen:** I do...

**Erik St. Martin:** Well, it's not your birthday, but...

**Brian Ketelsen:** No, my daughter's birthday. Lauren's 12. Hi, Lauren! I'll make her listen to this.

**Erik St. Martin:** Does she listen?

**Brian Ketelsen:** No, she never listens. She doesn't care about Go. The kids these days are making slime. She's 12, and that's the thing... They make slime out of borax and lotion and something else, and it's just this slimy stuff... That's all she does. Every time I turn around, I'm like "Where did that bottle of lotion go?" And it's gone.

**Erik St. Martin:** Hey, see? You gave me a hard time a few episodes ago because I started talking about Oobleck, and here they are making slime. Tell them to make Oobleck.

**Brian Ketelsen:** I don't think it's that much different.

**Erik St. Martin:** Well, the Oobleck - the cool thing about making that is that when you hit it with a lot of force, it becomes extremely solid... So you could run across it and things like that, but then it's just goo when there's not a lot of force applied.

**Brian Ketelsen:** So every vessel in my house that could contain slime, is full of slime. \[laughter\] All the Mason jars, all of my tupperware - gone; full of slime. Yeah... Happy birthday, Lauren.

**Carlisia Pinto:** What do you mean slime? I don't wanna derail this, but what...?

**Brian Ketelsen:** It's... Oh, I don't even know how to -- it's almost like silly putty but thinner, and they make it out of common household stuff like detergent and shaving cream and glue and lotion...

**Carlisia Pinto:** But what for? Just for fun? Just for the fun of making it?

**Brian Ketelsen:** Yeah, there's absolutely no purpose behind it, which is why I know that this is a fad that will die soon, because there's nothing to do with the slime once you've made it, except put it in dad's Mason jars. So I'm looking forward to that going away.

**Carlisia Pinto:** Gotcha. It's hilarious...

**Brian Ketelsen:** I don't even remember, where did we -- oh, that's our hard stop, and I've been talking about it for five minutes... So yeah, I gotta go pick up a birthday cake. So \#FreeSoftwareFriday, let's hit that! I've got a \#FreeSoftwareFriday that I've mentioned before, by I'm gonna mention it again because it's just THAT awesome. I spent the week building my class on Go Micro for microservices, and every time I turn over a rock, there is some other really thoughtful, amazing feature in [Go Micro](https://micro.mu/).

I was so surprised this week... Every time I turned around, there was some other really cool piece of Go Micro that just blew me away. I built a microservice for authentication, and I thought "Well, I'm gonna have to be able to call this from the web, so I'm gonna have to build some sort of proxy..." - oh no, you don't have to build a proxy. Just type "micro API" and it builds an API proxy for you. Beautiful, beautiful, beautiful.

**Erik St. Martin:** I think you've got Go framework ADHD.

**Brian Ketelsen:** I do not! \[laughter\] Every framework has its place. I still love [Goa](https://goa.design/)... And the nice thing about Goa and Micro is that they're both converging on [gRPC](https://grpc.io/), so very soon - as soon as Goa 2.0 is released - I think there's gonna be a mashup between the two of them that allows me to declare my Micro microservices in Goa's DSL, and that's gonna be killer.

**Erik St. Martin:** Something interesting too is how much gRPC is taking over communication now. [Etcd](https://github.com/etcd-io/etcd) and [Kubernetes](https://kubernetes.io/) and all that are all gRPC now.

**Brian Ketelsen:** Yup. Agreed.

**Erik St. Martin:** \[00:39:57.14\] What's the messaging in NATS, Wally? How do you communicate with NATS? Is that just straight HTTP, or is that using some sort of RPC library?

**Wally Quevedo:** Yeah, just bare TCP in a Plaintext protocol.

**Brian Ketelsen:** Yeah, just TCP.

**Erik St. Martin:** Okay.

**Wally Quevedo:** It's really cool, simple, small TCP Plaintext protocol.

**Brian Ketelsen:** That's what makes it so fast.

**Erik St. Martin:** How about you, Carlisia?

**Carlisia Pinto:** I don't have one today.

**Erik St. Martin:** Give a shoutout to your editor.

**Carlisia Pinto:** Oh, I've been using [VS Code](https://code.visualstudio.com/).

**Brian Ketelsen:** Nice.

**Erik St. Martin:** Yeah, VS Code looks really cool. If I wasn't so chained to Vim... \[laughs\]

**Brian Ketelsen:** Code has a pretty good Vim mode.

**Carlisia Pinto:** Yeah.

**Erik St. Martin:** I know I need to try it, but it's one of those -- when you're busy, that's the hardest time to do it.

**Carlisia Pinto:** I've been having some hiccups, like when I try to go to Insert mode, I press "I", and I have to press it twice, and it doesn't --

**Erik St. Martin:** See? Carlisia just gave me the reason why I don't need to try it.

**Carlisia Pinto:** I press "I" once and I start typing, and then I realize, "Oh, it didn't go to Insert mode." That kind of makes me mad.

**Brian Ketelsen:** There's a handful of different Vim plugins, so just try swapping one.

**Carlisia Pinto:** Oh, good...

**Brian Ketelsen:** I'll shoot you a message later and open mine and figure out which one I'm using, because the one I'm using is rock solid.

**Carlisia Pinto:** Nice, thank you... Because this is driving me mad.

**Brian Ketelsen:** Gotta figure out how I can find those plugins, though...

**Carlisia Pinto:** But I love being able to so quickly navigate through the source code up and down, back and forth...

**Erik St. Martin:** I think you added something to our doc, Wally, but every week we try to give a shoutout to a project or a maintainer or a group of people that are making our lives easier in the open source world. Did you have a project you wanna give a shoutout to?

**Wally Quevedo:** Yeah, I really like this project. It's actually from my friend, Nakashima Taichi. He makes these very small utilities in Go, and we used this one for releasing NATS. It's named [GHR](https://deeeet.com/ghr/). It basically uploads the artifacts from the build into the GitHub release page. It's very simple and very small, but I think it's a cool utility.

**Erik St. Martin:** Oh, nice.

**Brian Ketelsen:** That's awesome.

**Erik St. Martin:** Yeah, it eliminates creating a bunch of scripts for stuff.

**Brian Ketelsen:** Star added.

**Wally Quevedo:** We use it for releasing the binaries.

**Brian Ketelsen:** Very cool.

**Erik St. Martin:** So for me it's nothing new, I've thanked them in related projects a number of times - Kubernetes. I've been shoulder deep in Kubernetes a lot lately. Some of the problems that I run into are usually pretty easily solves; every release just seems to add more and more cool stuff, so a huge shoutout to all of those guys.

**Brian Ketelsen:** And right in the middle of KubeCon in Berlin, too. My whole Twitter stream is just nothing but FOMO. Every time I turn around, it's "Oh, look at that great talk I'm missing! Oh, look at that great talk I'm missing!" Dammit!

**Erik St. Martin:** Yeah, and I get people who message me too, "Are you at KubeCon?" "No..."

**Brian Ketelsen:** "No..."

**Erik St. Martin:** "I'm doing work."

**Brian Ketelsen:** "No..."

**Erik St. Martin:** \[00:43:13.03\] So look at that, we're gonna end perfectly on time for you, Brian!

**Brian Ketelsen:** That's awesome, because I gotta go get that cake.

**Erik St. Martin:** Alright. So with that, let's wrap this thing up so Brian can get to cake and then cleaning up slime.

**Brian Ketelsen:** \[laughs\] All slime, all the time.

**Erik St. Martin:** Wait till midnight, "It's not your birthday anymore, get to cleaning!" \[laughter\] So a huge thank you to everybody for being on the show, especially Wally; thanks for coming on and chatting about NATS with us.

**Wally Quevedo:** Thanks to you guys for inviting me!

**Brian Ketelsen:** Thanks for coming, Wally!

**Erik St. Martin:** Super cool! Thank you to all the listeners, both now live and everybody who listens to this one once it is released. Huge shoutout to our sponsors, Backtrace and Ultimate Go - without them, there would be no podcast.

If you wanna subscribe, the best way to do so is to go to GoTime.fm. Definitely recommend us to friends, family, co-workers. Follow us on [Twitter](https://twitter.com/GoTimeFM), and if you wanna be on the show or have suggestions for topics or guests for the show, you can [ping](https://github.com/GoTimeFM/ping) us. If I didn't forget anything, I think that's it. We'll see you next week! Bye, everybody!

**Brian Ketelsen:** Bye, thanks for coming everybody!

**Carlisia Pinto:** Thank you, Wally! Bye everybody!

**Wally Quevedo:** Thank you, goodbye!
