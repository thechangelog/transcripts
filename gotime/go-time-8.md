**Erik St. Martin:** It's Go Time! A weekly podcast where we discuss interesting topics around the Go programming language, the community and everything in between. If you currently write Go or aspire to, this is the show for you.

Alright everybody, welcome back for another episode of Go Time. This is episode number eight. We have a special guest with us today, Asim Aslam, and he is going to talk to us about the Micro framework. And we also have Brian Ketelsen on the line, as always.

**Brian Ketelsen:** Hello.

**Erik St. Martin:** And then we have the wonderful Carlisia Thompson also on the line.

**Carlisia Thompson:** Glad to be here, hello.

**Erik St. Martin:** Let's have everybody give Asim a warm welcome and if you could give us a brief introduction, a little bit of history about yourself and then we'll kind of roll into the whole Micro framework.

**Asim Aslam:** Sure. So thanks for having me on the show, I really appreciate it. Basically, my background is that I spent the last ten years in London doing various kind of sys admin, SRE, engineering kind of roles. I worked at a startup, which later got acquired by Google. I spent a bit time at Google learning how to build systems that scale, which was really exciting to see from the inside. This was when Google Cloud was still actually in beta.

Then I went to work at Hailo and helped build a global microservices platform back in 2013 when, you know, it wasn't really much of a thing. I think Netflix was the only one talking about it.

Now I'm working on this thing called Micro. I realized everyone was really doing the same thing internally at companies, and it would be nice if there was a community project that was doing the same, where we could all contribute and kind of learn and benefit from it, and basically do this thing of simplifying, building and managing distributed systems. That's really where I am at the moment, just kind of building that and hoping people will want to use it.

**Erik St. Martin:** So when I first saw Micro, I think, the thing that impressed me most and this was February of last year, it's been quite awhile; but the thing that impressed me most was the design decisions that you've made seemed to be - what's the word I'm trying to think... It encapsulates almost everything you need to get the job done and it's more of a full framework than a toolkit, to use frequent Go terminology; whereas, you know, the Gorilla toolkit is a bunch of things you can use to build websites, but Micro is pretty, relatively self-contained, and I really enjoy that. I think it's nice to have a strongly-opinionated framework like that in the microservices.

**Asim Aslam:** Thanks. I guess the wording is always hard. You can kind of go back and forth and on what it should be, but learning from the experiences of building something within a company... A library does not suffice, a toolkit does not suffice. We essentially build platform as a service or microservices platform service for the company, and that meant providing everything to the developers who are our customers and letting them kind of focus on what they need to focus on.

So when I built this, I really thought about what are the fundamental building blocks, how would you do if you built it open source first? So it needs to be pluggable... And it slowly evolved. I mean, it started as just Go Micro - the kind of core project - and now it's this bigger thing and I'm calling it an ecosystem and trying to build it really further and address every requirement, but also kind of saying, "Look, it's pluggable." We offload the hard things to the people and the tools that are really focused on those things. So service discovery - there's an interface for it, but if you want something that is consistent and distributed, you can use Console or Etcd or anything like that. It's the same for all the other kind of packages within there.

**Carlisia Thompson:** \[04:25\] Before we geek out on Micro, Asim, it seems that you're working exclusively on Micro. Is that true? And if so, what is the financial sustainability plan for the project and for yourself?

**Asim Aslam:** Sure. That's right, I'm working on it full-time. Basically, I quit my job at Hailo over a year ago, because I felt so strongly about this and I wanted to build this. At the time I was talking to some venture capitalists, so the plan was, "Hey, I' m gonna raise this money, build this team and we're gonna go off and do this." You know, the Silicon Valley way. And actually we were in London so no, we couldn't do it that way and I ended up kind of going it alone. Luckily, I had some savings, so I kept going, and eventually a friend of mine who was at Hailo, who is now at Sixt, the car rental company, he went there to build a platform and he saw what I was doing and we kind of worked out a deal and that company is essentially sponsoring the project so that I can continue to work on this full-time, which is really great.

**Carlisia Thompson:** Very cool.

**Brian Ketelsen:** Yeah, I always love to hear projects that work that way where people get sponsored to work on them full-time. Because I know a lot of people get really passionate about their open source projects and a lot of times they become abandoned when they move on to new places that no longer sponsor.

**Asim Aslam:** It's really tough. I think I got very, very lucky in the sense that this friend of mine who I had worked with closely was going to this large enterprise company, and he could see the value and he knew exactly what I was planning to do and was willing to kind of help out in that way. And many people who build open source projects, very large open source projects, don't get that same benefit. It's really tough to see that. And I know there's a lot of people kind of working on ways to fix that, but we definitely need do better work there as well.

**Brian Ketelsen:** So let's talk about adoption. Do you have any sense of the numbers or scale of companies that have deployed services with Micro?

**Asim Aslam:** I set up a users page and there's about four companies listed there, a couple of which have gone to production. You can find that in the main repository in the Wiki. There are maybe about five or six other companies who kind of did a survey and said they would be on the way to production in next three or four months, but I'm still chasing to see if they want to publicly name themselves and what not.

The growth is slow and nice. I think the nice thing is there's a Slack where everyone joins, individuals and companies come along and kind of talk about their uses, and people are using it without me even knowing. For some reason it's really taking off in China, which is really, really nice to see, and someone even translated the entire blog into Chinese, which is really cool.

\[07:53\] Here in London I just met with a company called Kazoop, and they have essentially posted the first job listing including Micro. For me, that's really profound, that someone thinks so much of it that they wanna put it in a job listing and kind of say, "Hey, we're moving over to this framework and here's what we're gonna pay for someone to do it." So that's pretty cool.

**Brian Ketelsen:** Are they looking for a developer with ten years of experience?

**Asim Aslam:** \[Laughter\] No. They're looking for someone who knows Go and wants to build microservices and can kind of do this stuff. I think the awesome thing about microservices in general, these things are maybe less than a thousand lines of code. It's very domain-specific what you're building, so it doesn't require as much as you think to kind of build that stuff, which means people with six months experience, a year experience could really do this stuff.

People learning Go for the first time could probably do this, because what really matters is the API at the end of the day, the interface to that application that you're communicating with. The code is irrelevant, because you could rewrite that anytime in the future.

**Brian Ketelsen:** That brings up an interesting question - what do you feel philosophically is the delineation point between a Microservice and something that's bigger than a Microservice?

**Asim Aslam:** That's a tough one. For me, what I found is it's whatever I can kind of keep in my head and still feels fairly simple, and having written a lot of Go in the last three or four years and actually having built a microservices platform, I would say a lot of the time it does fall into a thousand to two thousand lines of code kind of thing for Go specifically.

You know every language has a different kind of syntax, therefore it's gonna come down to a certain numbers of lines. For Go it feels naturally like that, but you kind of know a lot of the time, because this is a philosophy - you know from looking at the code if it takes longer than a week to do something, then you know it's probably too big. If it takes you a lot of work to build that mental model as you're trying to change something, then you also know it's too big.

**Carlisia Thompson:** That's an interesting measure, because I am thinking at the beginning when you're designing something - maybe that's what you mean - at the design/creation time how much you can hold it in your head; because for me as time goes by more and more and I'm working with the codebase... I mean, two years that I work with a codebase, I can hold a ton more than what I could in the first two months.

**Asim Aslam:** Yeah, it's interesting... I mean, I agree in that the longer you go, the more you can kind of remember about it and kind of model in your head. But at the same time, if you leave the project for a little while and come back, how long does it take you to kind of build that model again? For me, it's the case of "Can I hold the entire model in my head? Can I make changes to that model in my head in a very, very easy manner and then put it down in code very, very quickly?"

You can kind of generally get a feel for when it's not working. I think people coming from an MVC background, you know, Rails and what not - you get used to the modularity, so you'll have code bases that are a million lines of code and you somehow figure out how to code in the modular space. But in the microservices world I just think you kind of need to have a full scope of the service itself.

\[11:48\] A lot of the time, we're hacking out services in the space of one or two days and shipping them to production, at least when I was at Hailo, but I would say there is no right or wrong. I think for everyone it's a different thing and you really have to go with what works for you and that's what I like about the philosophy, because there are a lot of tradeoffs.

I think when a team comes together, they kind of figure how they'll work and what number of services work for them and what code bases, what sizes of code bases work for them.

**Carlisia Thompson:** I agree. I think you have a very good point. I like that way of thinking. You might not even use it exclusively on your team, depending on how your team is made up, but you can definitely use it as a complement.

**Asim Aslam:** Yeah. I think for me now the question I'm thinking more about is we've seen all this kind of stuff play out in organizations; what I wanna see is how this works in the open developer word. If we were to collaboratively build entire products with microservices just as general developers, would that work and on what scale could we actually achieve that?

**Brian Ketelsen:** That's an interesting concept. I'd never thought of microservices outside of something that looks like an enterprise.

**Asim Aslam:** So that's where I'm really going with this whole micro thing. I have done the organization thing for a long time; I think the tools that I build will be relevant to organizations, but at the same time I'm more interested in what we can collaboratively do as a developer community. GitHub's a great example of us collaborating on libraries and things like that, but what if we collaborated on microservices. So a person or two people write a microservice, then someone else consumes the API, then someone else builds another one and we kind of keep going like that. What could we actually build? And if we do that, then we start rebuilding the things that we used to build and we can start building new things, right? So we kind of shift software development forward entirely. I think that's really intriguing to me.

**Erik St. Martin:** So you're imagining this more like the Linux landscape, right? Where there are a lot of small tools that can be combined easily. Nobody kind of rewrites each of those pieces every time, right?

**Asim Aslam:** Yeah, exactly. Like, when's the last time someone rewrote grep or ls or cat or something like that. It's like once they're built, they're built.

**Erik St. Martin:** Now, I think that's an interesting thought. But how does that look from kind of the operations perspective? Who is responsible for all of those? Are these microservices that are running out somewhere that you leverage, or are these microservices that you're downloading these versions of and installing within your own infrastructure? How does that look?

**Asim Aslam:** Say all of us here on the call, we were all collaborating on some project. Now, how will we do it? We're building a side project. A lot of the time people will go find some hosting and start running some stuff there. But what if we could string together our disparate Digital Ocean kind of resources, creating network and then run microservices in there collectively? That's what I'm really thinking.

I think it'd be kind of a shared responsibility between the people actually contributing to the network itself. I've built platform as a service for a very long time, so I think the part of automation really plays in and so you have to build self-healing automated systems that can kind of deal with this sort of failure.

I mean, we're talking about distributed systems, right? So they have to be fault-tolerant. I think that kind of plays into it. It's really fun and kind of interesting when you get to a point where you bootstrap the platform and then everything is written as a service and even services that manage the infrastructure are microservices.

So I think you can kind of get to a place where no individual, no actual human being is managing any of it, it's actually completely automated.

**Brian Ketelsen:** \[16:12\] You've got big dreams.

**Asim Aslam:** I have very big dreams, but I also have the time to do it, the luxury of time, so that's quite nice.

**Brian Ketelsen:** So from a technical perspective one of the things I appreciate about the Micro framework is that you can interact with the framework. There are multiple different media, for example the Command Line tool, the bot, the API itself; designing that, what went into that? How did you design the services in a way that made it really easy to interact from so many different media?

**Asim Aslam:** So I sort of cheated a little in that. At Hailo we had a lot of these things. We had the API that would convert HTTP to RPC, we had web applications as microservices, we had HUBOT and HipChat, which is where I kind of got the idea for the bot. And then we also had a shell or a CLI. I just took all those ideas, and I kind of knew that when you're building this stuff you need to be able to interact with it and you also need to be able to interact with it from a legacy standpoint and just a usability standpoint of, hey, if I have a CLI, it's really easy for me to see what's going on and query things. If I have an API that serves HTTP, it makes it very simple to kind of talk to these things via a browser or cURL or anything else.

When you're serving, public-facing the APIs, obviously everyone wants rasters or something similar in the feature, I think. I want everything to move to RPC and I think that's really the dream of gRPC as well. I think they're talking about mobile first in doing that, but it was just that it didn't all happen at once either. It started with the command line, then it was the API, then it was the web UI and so on and so forth.

That's the thing to remember with any of this kind of development - it's a slow, kind of progressive thing. You're not gonna have everything figured out, but it's also a layered architecture in the sense that you build exactly what you need at first and then rather than conflating that core thing, you build around it and continue to build around it and on top of it.

**Erik St. Martin:** And now backing up a little about what the framework actually is, I don't think we've actually kind of stepped through what the framework does, like what's it's abstracting from you... We talked about pluggable components, but we should probably take a second to talk about what those pieces are, especially for people who might not be familiar with all the pieces that are part of a distributed system.

**Asim Aslam:** Sure, that's a good point. Thanks for raising that. So I'll start with Micro - it's a toolkit that makes it easier to build managed microservices. At the core, there is this library called Go Micro, which is a pluggable RPC framework. The idea is that that core library provides you the fundamentals for building microservices.

So when you think about microservices, it's this service-oriented architecture kind of thing. What do I need there? I need some sort of communication; I need message and coding; communication might actually be synchronous and asynchronous. I need be able to serve requests, I need to be able to make requests.

\[19:50\] Those things are really addressed at the core and nothing else. It only addresses those fundamentals, because the other things that you think about - off monitoring, distribute tracing and things like those - you don't necessarily need those to just build microservices. So that was really the focus of the course, helping you build microservices.

Then the kind of outer layer, the toolkit, as Brian mentioned, is the entry points. There's a CLI, an API, there's a web UI, there's a sidecar that provides an HTTP interface that has all the features of Go Micro, so if you want to write stuff not in Go, like if you wanna write in Python, Ruby, JavaScript whatever, you can just interact with the HTTP interface and kind of use it that way.

It's similar to... Netflix has something called Prana which is their sidecar, Buoyant has something called Linkerd. These are kind of prominent, but the idea is really providing you with the fundamentals for actually writing microservices. I think many people are currently addressing that kind of runtime aspect. They're saying, "Here's how you run microservices. Here's the tools that you need on the infrastructure side." But I think people are still really struggling with "Well, how do I actually write microservices? Where are the tools for those?"

And I think there are very few tools actually around for that.

I know Netflix has a very, very good suite of tools to do it in Java, but we were sort of missing these tools in Go. And credit to Peter Bourgon who a year or more ago started working on Go kit and around the same time I started work on Go Micro as well. So there's some tools now kind of surfacing to help with this, but I think we're really focusing on the development side and other companies are focusing on how do we run them.

**Erik St. Martin:** Okay, so that actually brings up a valid point and we have some people in the Slack channel who were kind of asking the same thing. How would you compare and contrast kind of Micro versus Go kit? Do you see them targeting different groups of people? The same?

**Asim Aslam:** I think the community at large is the same, people who want write stuff with Go. But at the same time it's the thing that you have a preference to the way in which you're going to build applications. Everyone's going to look at libraries and services and things in Go... "Oh, I like this" or "I don't like this."

The days of like "Should I pick MySQL or Postgres?" is the same kind of thing like "Should I pick this library or that one?" And I think Go kit, from what I see in the tagline, is a standard library for microservices or distributed systems. It's addressing quite a lot of various solid things and has huge kind of OSS contributions going on at the moment, so that's really great.

From the Micro side, it's addressing the same kind of things, the fundamentals, but for me, I'm building based on my experiences. I'm building the tools that I didn't really see in the ecosystem, and I like very simple interfaces, I like a low barrier to entry. I don't want to care about the details when I'm actually writing services; I want very little boilerplate. And I need the entire toolkit. I want everything when it comes to writing microservices. I think they kind of differ a little bit and I think everyone has to look at them themselves and kind of see where the benefits are for them, because there are lots of people using Go kit. They really like it. They like those abstractions and that is a really a great thing. I think choice is very, very important.

**Erik St. Martin:** \[23:53\] Yeah, and I think you bring up a valid point, too. Brian and I had kind of a similar situation at a prior employer that both of us worked at, the one we actually met at. So you have a lot of people who are interested in building these distributed frameworks and making the communication happen and making things fault-tolerant and service discovery, and then you have a lot of people who just work on business-related features. So at least from my understanding of the two projects, it seems like yours more targets being able to just write the service and not have to think about all the bits that make the services communicate between each other and allows you to just kind of focus on the business logic.

**Asim Aslam:** You're dead on. When we built the platform at Hailo, the thing that everyone would say and the goal from the entire kind of platform team and those who were building this thing was, we don't want anyone to have to think about distributed systems. We want them to be able to leverage them, but we're building a business, and we need to write services for the business. And we don't really care about that kind of other stuff.

And in the same way here, Micro - that's the goal. I don't want to have to care about all those details. Why should I? Like I just want to write software, I want to build my services. As I'm building this stuff, I'm thinking about, like, maybe even these things, some of these things are too low-level; maybe we need to find a way to go higher up, and I think over time we will.

At the moment it's the thing of when you're writing microservices code, you end up kind of focusing on "Well, I'm going to call this service and I'm going to call this service and I'm going to take this data and I'm going to transform it and return it", and at certain point you think, "Well, what I really care about is like the information. I don't really care where it is, but I need..." It's kind of like, "Hey, give me all the geo-location information for this user. I don't care how many different services it sends, just give it to me", and then I'll gather this and I'll transform it and pass it back to the user.

If you think about what Jeff Dean and Sanjay Ghemawat did with MapReduce at Google in the early days, it's the same thing. It's like reducing the amount of work you have to do to get that data you really care about. So I think that's where we're going.

**Erik St. Martin:** Yeah. So I've looked at the docs a couple of times. Unfortunately, I haven't actually built anything with Micro, but it seemed pretty inclusive. I like the idea that you could change out your messaging brokers, you could change out your service discovery mechanisms and these are all pain points. Many of us who have built distributed systems have suffered through like, "Oh well, I like ZooKeeper for this, but hate it for something else", and you kind of go through these iterations where you switch out, and it's nice to just be able to swap those components out and try different things. Maybe people on your team know how to support, ActiveMQ or something, versus ZeroMQ and things that.

**Asim Aslam:** Yeah. I think that was totally the point. I think the first reason was when we built the stuff at Hailo, we kind of baked everything in because we were on a kind of a deadline. And then when we thought about open sourcing it, we realized that everything is kind of hard coded in a way that it makes it difficult to strip it all out, and doing any kind of local development meant you have to run ten different things and all their dependencies to make it work.

When I started to build this stuff, I knew that I wanted it to be pluggable, I wanted to minimize the number of dependencies that you needed to get started. And on your point, everyone has different skills, everyone likes different tools. I think it's important to be able to support that, while at the same time kind of using the same way of building software.

\[28:00\] And then in the future, in five years from now, when we're using a different kind of backend technologies, then you want to be able to swap those out as well. The worst thing is when you've kind of built all these things and you're dependent upon some service and then you have to go rewrite your code everywhere to make it happen. With Micro, the idea is all you have to do is change the plugin, switch out on the command line and that's it. You're kind of done and you swapped out this entire thing.

I was really thoughtful about it, and hopefully, my hope is that other people kind of respond to this and they write plugins as well. So I hope to see some stuff contributed from the community.

**Brian Ketelsen:** So one of our listeners has a question and it almost relates to that. In terms of your plugins, how many of those can be used as components in other projects that maybe aren't even microservice related? Could you reuse the log package or service discovery or something like that in an unrelated project?

**Asim Aslam:** You could totally do that. They are all kind of independent packages, so each package can kind of be used independently. There's only the thing of kind of at the top level within Go Micro we have this reference to a service that combines everything, but for the most part, if you want to use the individual things, you can. I think that's great benefit there as well.

I've actually seen some people kind of start to use pieces of the Go platform, which is the higher-level tooling. They're using the log package or the matrix package or the key value stuff. It's pretty cool.

**Erik St. Martin:** Right.

**Carlisia Thompson:** Before we move on, I wanted to ask you, Asim, where can people find out more, how to get started, are there tutorials, where can they go to ask questions, do you have channel here on Gopher Slack? In other words, tell us how people can get started and get proficient using Micro?

**Asim Aslam:** Sure, thanks for asking. You can go to the website micro.mu and that'll kind of take you to where you need to go. There's a blog which has the introduction, it has a getting started guide on how to write Go microservices. You can go to the GitHub repository and there's a Wiki and there's documents in every single kind of package that explains how things work, and each of them in the readme have a kind of getting started kind of guide and how to start with that.

We also have a Slack channel dedicated to kind of Micro and microservices and distributed systems in general, so everyone can kind of self-invite and come join that and talk about this stuff. The reason I didn't actually set up one in the Gopher channel was because I knew that longer term, this wasn't going to be solely Go-focused. We're actually on the cusp of kind of having multi-language support. Sixt and some other companies have developed libraries in Java, Scala, someone else is independently working on Rust and I'm hoping for a JavaScript implementation as well. The hope is we open source these and we actually become a multi-language community, and the focus is just on building microservices.

**Erik St. Martin:** That's great.

**Carlisia Thompson:** Thank you.

**Erik St. Martin:** So I think we have probably like 15-20 minutes left. One of the things we like to do with our guests is just kind of have like a fireside chat where we kind of talk about interesting kind of projects and news and other things that you have interest in. I know serverless is a big thing and we kind of touched a little bit on that earlier.

**Brian Ketelsen:** Worst name ever. Ever.

**Carlisia Thompson:** I totally agree.

**Erik St. Martin:** Is it worse than the Cloud?

**Brian Ketelsen:** \[32:00\] Yes, it's far worse than the Cloud. At least with the Cloud you've got some concept that there's something somewhere. Serverless is just... Somebody should be shot for coming up with that, sorry.

**Carlisia Thompson:** Yes, it's completely misleading.

**Asim Aslam:** On the term - yeah, the term sucks a little bit. I think you have to look beyond the name and the hype and actually see what the real value is there, like what they're saying to you. And what they're really saying to you is, "Hey, this is the second coming of Platform as a Service where you don't have to deal with infrastructure, and also things will only run when they need to be run, so the cost is like orders of magnitude less."

**Erik St. Martin:** Is there a shorter name for that?

**Asim Aslam:** Serverless. \[laughter\]

**Erik St. Martin:** So I can totally get behind your description of it, but serverless just sounds so ridiculous.

**Asim Aslam:** No... I guess the problem is you can't pick the naming, right? Once it takes off, it takes off. I mean you remember big data and you remember cloud and you remember DevOps and even microservices... It just happens and then it becomes the word and then there's nothing you can do.

**Carlisia Thompson:** So, Asim, you seem to be very proficient with the concept of serverless. Why don't you tell everybody what it is? Because when we interviewed Travis Reeder, I had to actually go and look it up. I felt that I either wasn't getting it or I didn't see the big deal, because there is a server involved somewhere in the diagram, between the user and you and your codes. So what is it about it, please tell us.

**Asim Aslam:** Sure. So from what I gather, the idea is that it's really about event-driven programming and there is no management of servers or anything at all involved and you don't have to manage anything yourself.

You basically write snippets of code which look like functions, and you set them up and you kind of configure them along with an API gateway, and the API gateway essentially triggers your function - or the colt of the API gateway triggers your function based on something that's happening there, and then your function executes. A container spins up, the request is passed off to your function, it executes. The container goes away and that's really the end of it.

The idea is you personally don't have to run anything. It's an automated system and it kind of switches the programming model a little bit, in the sense that you're focused on event-driven programming more so than anything else. And you can kind of imagine where this would work for analytics and consuming a certain type of data.

But people are also using it for other things. If you have side projects and you're running your Digital Ocean node or something like that and you're spending $20 a month on this, and you're only running a bunch of websites, they were showing kind of the cost breakdown and they're saying that you can reduce the cost, orders of magnitude by using this kind of serverless model.

\[35:33\] Your container or whatever it is, your code is only executed when someone actually calls it. Otherwise there is nothing running in the interim, and that's really the big thing about it. There's nothing running, it only runs when something calls it. I'm not sure if I see it working at scale yet. I mean, within organizations as a full-time thing for the entire code base; I'm yet to see kind of a way of doing that, because I think when you're writing essentially functions for your code, you could end up in a spaghetti mess. I think the frameworks are emerging to kind of make this a little bit simpler, but it looks interesting so far.

**Carlisia Thompson:** So it sounds to me from what you are saying that I should be thinking about the serverless approach as microservices, but instead of a full-blown microservice, an API or an app, I have a function. With microservices, I would think how would I split my application into microservices, so now I have to think about how do I extract portions of my code into functions that I can then run with a serverless approach.

**Asim Aslam:** Yeah. I think the goal is or the thing you should really think about is it's event-driven architectures. I think what they're saying is everything is asynchronous and so you're essentially building pipelines where things are triggered based on events. And the only synchronous action you may have is on the API side when some outside user is actually calling through an API gateway and then the pipeline kind of executes.

Even for me personally, it's a shift in thinking in the way of building systems. I find that a lot of frontend engineers are very perceptive to this just because they come from a JavaScript world where it's event-driven programming. So I think for the rest of us we have a lot to learn, but I think the thing to take away is to kind of look beyond the hype, see that there is some value there.

I want to say that maybe 70% to 80% of frontend projects and data pipelines will be in this kind of model in the next five to six years, just because of the sheer value from it. But it's going to be a little while. Amazon have their own version of this, Google has their own version, IBM has their own version... So we need a way to be able to work across all of these things.

**Erik St. Martin:** So do you see this as kind of a major shift in development, like most development would be done this way? Or do you see this more for almost rapid prototyping, people trying to get things going on from the business perspective, like you need to get this live?

**Asim Aslam:** I think it's hard to say. I think initially it's prototyping. It's the way most new trends come about or new systems appear and it's the thing of like firstly use it for your side projects, and then when you're doing a new project at your company, you kind of use it then and then some other company sees the successes and they decide to build everything using it or they move to it.

So we'll see some cases where people move their entire architectures over to it, and in other cases where it is primarily focused on frontend or the API or data analytics, and we'll have kind of a split off from other kind of ways of developing software. I can't actually say whether it will be the dominant form of how to build software, because I like being able to write a certain amount of code, I like being able to write code a certain way, but I think for a lot of use cases it will be quite useful.

**Carlisia Thompson:** \[40:01\] What do you know of products that are available to drive those serverless application developments for Go developers or developers in general?

**Asim Aslam:** I think the first one that comes to mind is just serverless.com. That serverless project is the one that's been around the longest, it seems. It started out as a project called Jaws and now it's kind of taken off. It has over 8000 stars on GitHub.

The other one is Apex, which seems to be doing really well and has multi-language support, along with Go. Even IBM open sourced their actual serverless project, it's called OpenWhisk, you can find it on GitHub. That will kind of give you a breakdown of how this stuff kind of works and you could even spin it up yourself.

**Carlisia Thompson:** Thank you. That's a great list, it seems.

**Asim Aslam:** There's a lot of people moving on this very fast. There's a lot of big companies moving on it very fast. If you look at it, AWS has Lambda, Google has Functions, IBM has OpenWhisk, so you can see them all very, very quickly getting involved in this, because they see the value in it.

**Erik St. Martin:** I think it's definitely something I want to keep my eye on. I have my reservations about it. I think there's ideas of it that I think are really cool and I think I have some open-ended questions just from kind of experience and how situations are handled in the event like the... You don't get the golden path, everything doesn't work... Like, how do you debug something like that? But people way smarter than me are working on these things, so I'm interested to see how it progresses.

I think we are getting close to time, so one think I do want to touch on before we close out the show is the 1.7 Beta release. I'd like if we just have a couple of minutes to kind of just chat about some of the stuff that came as part of that and encourage people to download the beta and start compiling the code against it and submitting bug reports, especially with the SSA compiler that's now in it.

**Carlisia Thompson:** Let's do it!

**Erik St. Martin:** Alright.

**Brian Ketelsen:** One of the really interesting things I saw in there was the idea of subtests and sub-benchmarks, with the same setup and tear down for those testing packages. That's really nice because having to write that setup and tear down code over and over is annoying and being able to get that broken out is really nice in testing. I like that one.

**Erik St. Martin:** Yeah. I think that's the hierarchical tests and the benchmark, so that way too. I think that's going be really cool. They did some performance improvements, mostly related to the strings and string conversion packages, crypto packages; the SSA I think is where most of it is coming along.

I think they said that most of that stuff should workout, but if you see random errors in your code or things that don't work the way you'd expect them to with the compiler, there actually is a SSA=0 flag that you can pass under the compiler to get the old non-SSA backend and then submit an issue.

**Brian Ketelsen:** I was just going to say we forgot the most important piece of Go 1.7, which is the context package making it into standard live. I don't think there's any bigger news than that.

**Erik St. Martin:** Yes. Are you leveraging that, Asim, inside Micro, the context package?

**Asim Aslam:** \[43:46\] Yeah, I am, actually. I think it's kind of become a staple among building services. At first, I didn't really understand it and then over time it started to make more and more sense. I think it makes a lot of sense that it's not part of the standard library.

**Erik St. Martin:** Yeah. Well, Brian and I are both really excited about seeing that command, we've been using that for a while. And I have to admit, I haven't looked at this too deeply. I actually only saw it in the release notes. It looks like there's HTTP tracing associated with that context now, and I'm kind of interested to see how that works.

**Brian Ketelsen:** So I read up on that this morning. It's kind of interesting, because it allows you to attach functions to events in an HTTP client. So if you were making a client request out to a site, you can have a function get fired when DNS is resolved, for example, and that allows you to do some really nice debugging in terms of where your performance hits are in your HTTP client, or to help you figure out what issues you're running into in production. So it looks to be very useful for debugging and tracking down problems with HTTP connections.

**Erik St. Martin:** So this is more callback style?

**Brian Ketelsen:** Correct. I don't use the callback. We're Go programmers, so it's all events that you can tap into.

**Erik St. Martin:** I think you're tainted from your dislike of Node.

**Brian Ketelsen:** Oh my God, don't get me started. This is a family show, Erik. \[laughter\]

**Erik St. Martin:** Brian got really mad at me one time because - what was it, like a JSON Lint, or something that I had installed as a command line tool, and it came with Node. And he's like, "Are you serious? You're fired. You're fired. You made me put Node.js on my computer?" \[laughter\]

**Asim Aslam:** I tentatively somewhat agree with Brian just a little bit from the use of it, but maybe it's a necessary evil.

**Erik St. Martin:** Yeah, I haven't bought into it from a development perspective. I know people have their reasons for liking it, and I've always tried to be receptive to... You know, everybody uses what they feel comfortable with, so I try not to hate. But it's definitely not a platform or framework that I've used much outside of like it came with something.

So anything else anybody wants to talk about before me close out the show? Because I think we are getting pretty close on time. Also Asim, if there's anything else that you would like to close with about Micro or serverless before we kind of wrap up the show?

**Asim Aslam:** We can drop in some other topics that are on the list. I think the interesting one was CoreOS. It just came out with the distributed storage system which would be kind of cool to talk about quickly.

**Erik St. Martin:** Yeah, Torus, right?

**Brian Ketelsen:** Yeah. I'm super excited about that one.

**Asim Aslam:** Yeah. This is interesting. What do you think Brian?

**Brian Ketelsen:** I'm crazy excited about it. One of the biggest problems I've always had with any of the orchestration platforms - Kubernetes, Mesos, whatever - is storage. What do you do with storage when you've got a relatively small cluster and you don't have some sort of block storage, especially as an enterprise where you might not be running in the cloud, but you still need that distributive storage that each of your pods or each of your containers can get to you, so this I think is going to huge. It's one of the things I'm most excited about just in the last two years in container space. It's going to make a huge difference.

**Asim Aslam:** Yeah. I'm excited to see them actually tackle this. I know it's going to be a hard one to get right, but having seen the work that they've done on Etcd, I believe they'll be able to do it and in time with people who have that kind of experience is going to be really good.

\[47:54\] As someone mentioned, the Hacker News comments weren't very kind. I think we need to be optimist and we need to be supportive. I think this is really good for the entire kind of tech community as a whole. I think everyone's a little bit like "Oh, I wanted to write a distributed storage system. Why do they have to write it?" \[laughter\]

**Erik St. Martin:** Yeah, I mean anytime something new like that comes out people, you know... And CoreOS kind of gets the brunt of it too, because they're trying to innovate and they're trying to do things differently and I think they catch some slack for it too, the whole rocket thing... Many of these things are fantastic and they have some really smart people working for them. It's like every year they are scooping up more people. You're like "Oh, this person is doing something cool" and it's like "Yeah, CoreOS just grabbed him." \[laughter\] But I'm interested to see how it comes along. I think that as people start to play with it, I think that they'll start to see its merits.

**Carlisia Thompson:** I wanted to mention something super quickly. Tom Maiaroto was asking for a review on the Reviews channel on Gopher Slack of this tool, it's a young project called [Discfg](https://github.com/tmaiaroto/discfg) and it's a tool for a distributed serverless configuration tool for using AWS services. I'm not going to go over it, but he has a "Why another one?" section on his readme, which is actually quite so well documented, and you can read there why the reasoning for this tool. And maybe people can help him review it.

**Erik St. Martin:** It's open source. Competition is good. That's why.

**Carlisia Thompson:** Yeah.

**Erik St. Martin:** Alright. Did anybody else have anything they want to touch on? Any closing notes about Micro, especially? Because that's definitely one of the most exciting things we've talked about here.

**Asim Aslam:** I'll just say, thanks for having me on the show and being able to talk about this. Please do try Micro if you're interested in building microservices. Come join the Slack and kind of talk about it. I'm looking for people to help contribute to the OSS kind of project. If you're interested in building the higher-level tools in the Go platform or if you want to contribute plugins, let me know.

**Erik St. Martin:** And we're happy to have you on the show.

**Asim Aslam:** Thanks.

**Erik St. Martin:** And one of the things we'd like to do too is we like to kind of briefly kind of round table it and go around and thank an open source project we are thankful for, just because I think we all need to do a better job showing support and love to open source projects. And today you get to go show some love to Micro by pull requests, right? \[laughter\]

**Brian Ketelsen:** Right. It's a good way to go. Alright, I'll start off with my \#FreeSoftwareFriday thank you. Mine's actually a bigger than a single open source project... I'd like to thank CoreOS for innovating and creating really unique solutions; CoreOS Linux specifically is probably one of the most amazing Linux distributions I have ever played with, and I truly enjoy using it every time I touch it. Etcd and all of the other projects that they do are fantastic and their business model is really solid in terms of open source. I appreciate the company and the philosophy behind the company in terms of OSS.

**Erik St. Martin:** How about you, Carlisia?

**Carlisia Thompson:** Well, today we talked about stateless computing and my pick is State Management for Go, a tool for Go backend applications. It's a tool by Luis Vinicius, it's called Godux. It's also a young project, but it seems promising. I'll definitely use it if I needed to manage states.

**Erik St. Martin:** That's great. Asim, you can't cheat, you cannot say Micro. You can go with anybody but Micro.

**Asim Aslam:** \[52:02\] It's good, I have one... This is a bit of a throwback, so this thanks to Postfix, the SMTP server.

**Erik St. Martin:** Nice.

**Asim Aslam:** Back in the day when I was a sys admin we used to do bulk emails. We were sending half a million emails an hour and I kind of managed upwards of a hundred instances of Postfix and it made it really easy to kind of configure and manage SMTP.

So I'm really grateful for that piece of software, because it meant I didn't have to use Sendmail and if anyone has used Sendmail, you know how painful that is.

**Erik St. Martin:** Sendmail - never. So for me I haven't really been using anything new that I haven't already mentioned, except VLC, so I'm going to give shout out to VLC, because that is making my life easier. I definitely would not want to write VLC. I don't think I'm quite qualified for that, either.

Alright, so I think we've made it all the way around. I definitely want to congratulate the panel and definitely Asim, for coming on the show and talking to us about Micro and serverless. Time got away really fast. I wish we had more time to talk about this.

We will definitely link to the project and the Slack and anywhere else we can find Micro on the internet for everybody in the show notes. They should be posted on Twitter, if not now in a little bit. They will be on Twitter for the live listeners and in the Slack channel. Come find us on Twitter @GoTimeFM. You can go to gotime.fm to subscribe and I think the first episode is there. We'll have more episodes coming soon. I think that's it. I'm I missing anything, everybody? No?

**Carlisia Thompson:** You've got it.

**Brian Ketelsen:** I think you did well.

**Erik St. Martin:** Alright.

**Asim Aslam:** That was great.

**Erik St. Martin:** Thanks, everybody.

**Brian Ketelsen:** Thanks, everybody.

**Carlisia Thompson:** This was fun, thanks.

**Brian Ketelsen:** Thanks guys.
