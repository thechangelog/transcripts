**Jerod Santo:** Today we are here with Jean Yang with Postman, formerly Akita Software. I want to hear about that as well. Jean, thanks so much for coming on the show.

**Jean Yang:** Thanks for having me. I'm super-excited.

**Jerod Santo:** I'm excited as well. I've wanted to have you on the show for a while. I think when I first came across you, it was Akita Software, and now you're with Postman. Do you want to tell us -- let's start off with the story. Let's hear about what you're up to at Akita, and how you ended up at Postman.

**Jean Yang:** Yeah. So at Akita we were building the fastest, easiest way for software teams to see what endpoints they have, and what endpoints they might want to pay attention to. The motivation is more and more developers don't have a handle on what's running in prod, because of the rise of SaaS, the rise of APIs, and just the aging of software systems in general. Software isn't 10-20 lines of code that you write and pass around anymore, it's these complex, living, breathing systems with lives of their own. And so at Akita, we felt like if a developer lost control of their production system, so if they didn't keep up to date with monitoring, or they didn't keep up to date with documentation, it could quickly spiral out of control, they'd fall off the wagon, they don't know what's going on anymore... And we were building to allow every developer to really get a handle - not the deepest handle, but kind of what you need to know, a quick rundown of what's going on with your APIs within minutes of signing up for us, basically. That was the goal.

And so we had made good progress at Akita. We were converging a lot with what Postman was doing, because we were taking a very API-centric view of the world. We were operating on the thesis that the rise of APIs has caused all these problems, and APIs are also the solution. So showing people what's going on with their APIs can go a long way. Abhinav, the CEO of Postman had reached out to me in 2021 and said "Look, it looks like we're converging, and we're only converging more. You should think about becoming part of Postman." At the time, I said "That's not what we're about right now. We're just heads down working. Maybe one day we'll become part of Postman, but it's not time yet if that's the outcome, because we really just need to figure out what we're doing."

\[07:51\] And so now it's 2023, we have continued converging with Postman on an API-centric view of the world, and it became clear also that joining Postman meant that we would have a bigger platform to start off with in building what we're doing, in hooking in with other features that our users could use once they got their APIs into our system. Postman has a very much bigger machine in terms of user funnel coming in, and platform support, and they've already got identity built, and all this other stuff. And so for me, it was always about building for users the thing they needed, and not necessarily about building an independent company, or building the biggest company in terms of the number of people; it was really about the product. So I've been really happy that I've gotten to focus on the product and the users now that we're at Postman, even more than before.

**Jerod Santo:** That's cool. So we had Abhinav on the show. Remember, Adam? A couple of years ago...

**Adam Stacoviak:** Way back. About four years.

**Jerod Santo:** Way back. I was very impressed by him and enjoyed that conversation quite a bit... So he was convincing to me in most of the things that he had to say to us, so I can see how he would be convincing to you. Was acquisition something that was in there from the beginning with Akita? Was it something that you eventually thought would happen, or were you trying to build something bigger, or smaller? How did that come across? I know he convinced you over time \[unintelligible 00:09:15.29\] it made sense, but had you thought eventually you were gonna get acquired by somebody, whether it was Postman or not?

**Jean Yang:** I was open-minded. That's a good question. Like I said, it was really about what's best for the users and the product. I started Akita after leaving Academia. So I left Academia to start Akita, because I felt that starting a company was a better way to serve the user need of API chaos, than staying in Academia and writing papers, even though I had a pretty nice job at Carnegie Mellon University. And for me, I really kept in mind this goal of "I want to do what's best for developers. I want to do something that provides real value to developers, and if it's building an independent company, that's great. And as I've written about before, there actually aren't that many independent companies that succeed at staying independent as dev tools. You see a lot of developer tools innovation coming out of bigger companies... So when I was coming of age, Google and Microsoft were two of the biggest centers of developer tool innovation, and it was hard to do a lot of innovative stuff in smaller developer tools companies. We see a lot more developer tools companies as startups these days, but I was always very open to -- there's the best place to build every tool, and it could be a startup at some points; once the startup sort of finds its place acquisition could be the right outcome for it. And it's always for me been about what's best for providing value to developers.

**Adam Stacoviak:** How'd you begin? What was day one for Akita? Did you have a network built already? Did you have seed funding? What was day one through day 120, something like that?

**Jean Yang:** I did have a network built already. So I did my PhD at MIT, and then I became a professor, and during all of that I had been quite interested in entrepreneurship. And so I had actually started an accelerator with my friend called Cybersecurity Factory. So my research had been in programming languages and security, so I was doing a lot of security stuff ahead of starting Akita, actually. And in 2015 I had started an accelerator with Frank with Highland Capital. It was a summer program where we gave people a small amount of initial funding, took a percentage of their eventual fundraise, and gave people a security network of industry experts to help them get started.

\[11:55\] Some of the advisors to Cybersecurity Factory had been other founders I looked up to, for instance Max Krohn, who founded OKCupid and Keybase, and now runs security at Zoom. So I had known these people from before, from starting Cybersecurity Factory. And in seeing the first batch of companies go through I saw what the beginning part of starting a company looks like. You do a lot of discovery calls, you talk to potential users, you segment the user base, and then you figure out what the product might be.

So I started this accelerator in part to see what it would look like if I wanted to start my own company one day, and my friend Frank, who I started it with, convinced me to participate in it in 2018 as a team, when I was thinking about starting my own company. And the original incarnation of Akita was an API security company. Well, it was a general security data discovery company. That quickly became API security, and I pivoted in 2020 out of API security into API observability after we realized that developers were much more interested in what we built as a non-security tool.

I will say that programming languages was always the primary part of my research, and security was the application area. And so for me, I was always a very developer tool-oriented security person, which depending on how familiar you are with developer tools that are security-focused - many people may not be, because there really honestly aren't that many. Developer concerns and security concerns have quite often had tension with each other. But that was how it all started.

**Jerod Santo:** Interesting. So API observability... I guess you've found that developers weren't super-interested in the security side. The piece I first read of yours that maybe you want to bring on the show was "Why aren't there more programming language startups?" And as you said, your background was in programming languages... And it's just interesting that you also had a startup, but then you didn't have a programming languages startup yourself, even though you're interested in the topic of programming languages. Can you unpack that in brief, so that we can discuss more, and then maybe how your research fed into where you thought you might create a product as a startup?

**Jean Yang:** Yeah, it's actually really interesting, because people used to reach out to me when we were in stealth mode, and this was a big part of my reason of getting out of stealth mode, because they wanted to work on a compiler, or they wanted to work on a programming language. And I will say, even though I was doing research in programming languages, a lot of the big questions in the field of programming languages were not what people thought. So I think when people think programming languages, everyone wants to do the next Python, or you know, they have "This is how I program, and I want to make a language just for me." And even in the research field, that's not what a lot of the research was about. There was a lot of "This is how we prove software systems to be correct. This is how we analyze large software systems. This is how we build tooling to do weird things in software." And this is actually a thought experiment... And so even in the field of programming languages research, there's a lot of different stuff.

My work had always been more systemsy, so I was doing research on "This is how we enforce what's called information flow policies across software systems." I quickly realized you need to do that not just in the application layer if you're really going to build systems with it, but in the database layer, and across web applications in a variety of ways. And so my work had already escaped the programming language layer itself, if that makes sense... And so APIs to me were the next thing, and actually, one of my last papers that I published from when I was a professor was about enforcing the security policies at the API layer, at the REST API layer, across an application and a database.

\[15:59\] So one, I guess, context piece is that my work had never quite been what people on the outside might think of as programming languages... Because I saw the field as really about how do we build software systems, and how do we do software development, and how do we ensure that when we throw code over the fence and cross our fingers really hard, that it's not just really causing huge problems, and causing people to die, and cars to crash into each other etc.

One thing I think is really funny is that 10-15 years ago I got into programming languages for a lot of the reasons people are afraid of AI right now. So people are saying "How do we know what the AI is doing? And how do we know the AI doesn't have a life of its own, and it's really running all of our lives?" And for the last 10-15 years, I've been saying the same thing about software - we don't know what software is doing. We don't know that it's doing the thing that we told it to do... It has a life of its own. Any software bug can take down so much stuff right now. And to me, that's what the field of programming languages was about. That's why I'm interested in developer tools. And so I think the people who are interested in developer tools because they have certain aesthetics about "This is how I want to program", that's a different reason than me. I want software to be better quality, I want it to be easier for people to build software that does what it's supposed to do. Sometimes there's no thing the software is supposed to do. That's maybe a problem... I want people to be able to get their head around their software systems. So to me, what we're doing and Akita is very much -- or what we were doing at Akita, now at Postman, is very much in line with that.

I think that a lot of the future of "programming languages", so the people who are interested in software reliability and software development - that's going to end up in systems areas like observability or AI. So a lot of what people are talking about with AI safety, AI explainability, I was interested in very analogous ideas when it pertains to all of software. Because look, what runs AI? Software. What's gluing pieces of AI together? Software. And I think a lot of the things that people are worried about, like "What if AI does something that we didn't expect? How can we trust it?" We should be asking these questions of all of our software.

**Jerod Santo:** Well said. I think that does help paint a picture of where you landed with Akita, with API observability. Specifically, you were interested in reliability and security, and building systems that we can know why they work the way they work. I think API observability in that sense makes a lot of sense, especially because so many of our software systems cross the API boundaries, whether it's just internally via micro services, or externally.

I mean, here at Changelog, we have an open source CMS... It's the smallest little software system you could possibly imagine. It's running a small business that publishes podcast; it's not complex software. It's a very straightforward domain space. And yet, if you had to go through my list of API integrations with third parties, it's double digits; it might be two dozen integrations for a very simple CRUD application. And so that's just a small app.

**Jean Yang:** Yeah, yeah. And that's so common. Yeah, everything people are saying about AI, they should be saying about APIs. Is AI? taking over the world? APIs are taking over the world. Is AI developing a life of its own? APIs are developing a life of their own.

**Jerod Santo:** You get your AI via an API these days as well, so... Like you said.

**Jean Yang:** Yeah, exactly. Yeah. People should be much more afraid of APIs.

**Adam Stacoviak:** Much more afraid. Wow.

**Jerod Santo:** You're making me afraid of APIs. Let me go back and check my --

**Adam Stacoviak:** Can you share a shortlist of integrations? It's like five, or six, or all 12?

**Jerod Santo:** Just to name a few... So Buffer, GitHub, Slack, Mastodon, TypeSense, Cloudflare, Fastly, Campaign Monitor, S3, Sentry... There's a few. I'm just scrolling through my list of API wrappers.

**Adam Stacoviak:** \[20:14\] Yeah. So Jean, on larger, non-simple software like we've got for running our business, what are the integrations on like Postman, for example?

**Jean Yang:** I actually -- so we focus on internal first party APIs, and so I haven't paid as much attention to third party APIs... But other ones you often see -- we have Segment, we have all of our analytics, and we have SendGrid, the email ones... So those are just our team. I haven't even looked at the rest of Postman, but pretty much any functionality that we need from the outside is an API.

**Adam Stacoviak:** So why should we fear the APIs?

**Jean Yang:** Well, I think we should fear them and love them... But I think right now people are not really talking about APIs that much. There should just be more discussion. But here's what's happening... In the last 10 years, the rise of APIs has meant that it's easier to build software than ever before. An example I have is I was judging a university hackathon a few years ago, and I myself had gone to hackathons when I was a student... And back, we were like "Oh, my gosh, look, it's the end of the weekend, and our Lego robot can now bang into the side of the wall. Great!" That's about how much you could achieve over the course of a hackathon. And the students that I was judging, they were sending text messages based on your bank account. They were doing things that based on where you were geographically, playing different kinds of music. And it all came down to APIs. They were using the Capital One API, the Google Maps API, the Twilio API... But that was the building blocks of the APIs provided, was what made all of this possible.

And so the trend of APIs taking everything over has been incredible. People can build way more quickly than before. People aren't building as much in-house, and you can spin up a whole functioning company in a week now, because of everything that's available out there. So that part people have been talking about; people say "Oh, this is really cool et cetera, et cetera. API companies are getting a lot of funding..." But the flip side is that this is now a huge pile of software, that is not known end to end to any individual user. And all of the tooling that most developers are using these days are built for software that a developer has built first-party end to end. And so if you think about what people think about when they think developer tools, it's "What's in my IDE? How do I do my integration tests? How do I do my end to end tests? What's my build, deploy, release process like?" There is some stuff people use for monitoring and observability, but often it's "Did I log everything I intended to log? Because this is my system, and I'm optimizing 99th percentile tail latency."

And so what I believe is missing is a space of tools that accommodate the reality that people are building software systems that they don't have full control over. They're building software systems that are evolving in ways that they're not determining themselves, and they shouldn't be expected to be monitoring these systems end to end, or know what it means to get low-level logs on parts of these systems.

And in terms of the questions that I said people should be afraid of, "What is my software doing? Is it doing what I'm supposed to do?", we should be really afraid of APIs, because we're not able to answer those questions anymore.

**Adam Stacoviak:** \[23:59\] The lack of awareness, the lack of knowledge, really. Is it common to get logs from an API you might be using? These low-level logs - is it common to request access, or get access to some of the things, to understand how your data is consumed and transposed once it's behind the API, and then comes back out the other input/output, so to speak?

**Jean Yang:** That's a great question. No, it's not common, and I don't think it should be common. But the common way of debugging is based on low-level logs. Ask anybody how they figure out an issue and they say "Get the logs?" How do you get the logs when you're interacting with a system you don't control? How are you supposed to debug in that case?

And so I believe there needs to be a zooming out from logs of how people are thinking about their systems. When we debug these days, we're not going and printing out the assembly code anymore in the same way. I think logs aren't going to be the end-all be-all forever of how people are dealing with these systems. There are going to be new ways of

figuring out what's going on with your systems, and we will get there, but we're just not talking about it nearly enough yet.

**Jerod Santo:** What's that path look like? From where we are. Which is really -- okay, it's different if we talk first-party APIs, third-party APIs... But I mean, when I talk to a GitHub API, third party, I poke at a black box, and I hope it returns what the docs say it's going to return. Right?

**Jean Yang:** Yeah, that's a really good question. So I think we should be thinking about all APIs more like these third-party APIs. And this is a big part of why we build things the way we did at Akita. There's this illusion of control for first-party components of your system, that "Hey, they should be documented. I should be able to talk to the person that wrote it. I should be able to fully understand what's going on there." No, none of that is true anymore. What's happening is things actually are not documented. So many of the teams that we talk to say even their own stuff isn't documented. You're not going to get another team to document their stuff. There's more churn than ever before on software teams, so the chance that you're going to be able to talk to someone that wrote a software component is decreasing by the day.

And the number of software builders is increasing, which also means the number of junior new software builders is increasing. And so we're dealing with these large populations of people who are pretty new to software development in general, and the systems that they're working on. And so I think the path forward is actually doing a lot more stuff in a black box way, just like abstracting out from Assembly is the only way that we're able to enable the large numbers, millions, billions of software builders that we have, and are going to have today. Zooming out from low-level debugging is how we're going to enable large-scale debugging.

So a lot of previous DevOps observability work before Akita was really about "Here's how we trace everything in great detail. Here's how if you have full control over the system, and you're optimizing it, this is how you figure out what's going on." And we took the exact opposite approach. We said "Look, we're gonna drop an agent in, we're gonna watch API traffic." Anything that's observable from the outside, essentially. And our conceit is we're going to tell you as much as we can based on what we can see in a largely black box way.

So I really believe that this is a main part of what's missing going forward... Do I think it's the only thing? No. Do I know what else needs to be there? Also no. But I think accepting black box, and accepting that we're going to have to zoom out, and giving up the illusion of control are going to be really important parts of the path forward.

**Jerod Santo:** Okay, that makes some sense. So you drop an agent in; this is code that's running on my side of every API conversation. Correct? As a developer.

**Jean Yang:** \[27:58\] Exactly, yes. So we have an agent... So at Akita we built the Akita agent; it's now the Postman Live Collections agent. The goal is to drop in as seamlessly as possible into your system. And so it uses what's called BPF, Berkeley Packet Filter, the agent, to watch all of your network traffic and see all of your API calls. And then the agent does some post-processing, ships data off to the cloud... But the idea is we don't need any information from the developer if we have this agent. That's the goal. So it doesn't matter how legacy your system is, it doesn't matter how undocumented your system is, it shouldn't matter how little knowledge you might have about your system before you install the agent... The goal is for anyone to be able to install that agent and start getting insights about their system.

**Jerod Santo:** What layer of the stack is this operating on, and what is it reporting on? So am I seeing like TCP packets going back and forth? Am I seeing API calls? What exactly is manifest?

**Jean Yang:** Yeah, that's a really good question. So what we watch is the network traffic. We construct -- so we do packet reconstruction; for the networking nerds out there, we use gopacket in Go to do the packet reconstruction. And then we infer API endpoint structure from the reconstructed packets. So I guess theoretically, we could spit out the raw API calls if people wanted to. We actually, for security purposes, \[unintelligible 00:29:28.25\] somewhat historical of reducing friction. We don't look at the payloads themselves right now. But we will infer API endpoints structure error information, latency information, and some other information like types. We also infer data types from the reconstructed packets.

And so what we present to the user is "Here are your API endpoints, here your API endpoints with errors, here are the ones that are slow and might have errors soon, and here are trends over time." So that's everything we had in Akita. Now we're building this up as part of the Postman Live Insights product, and working with a very targeted group of alpha users to figure out our MVP on the Postman side.

**Adam Stacoviak:** Does this live in production, this agent? Or is this in dev? Where does the agent live?

**Jean Yang:** The ideal places is to live in production, because this agent does the best the more traffic it sees. And what we learned is dev doesn't see very much traffic; staging sees very little traffic for most companies.

**Adam Stacoviak:** For sure.

**Jerod Santo:** Probably less than dev... \[laughs\]

**Jean Yang:** Yeah, even less than dev sometimes... And production is where the traffic and the insights come from, because it's really about unknown unknowns here. And so if you're testing something in dev, you know about it probably, or someone knew about it at some point... But there's a lot of stuff in prod that people do not know about.

**Adam Stacoviak:** Wow. Is this introducing latency to the application, does it spike the CPU? What's the resource required? What's the footprint?

**Jean Yang:** That's a great question. So because we use Berkeley Packet Filter, it is less invasive than using a proxy, and some other approaches. But it requires -- well, the agent needs to eat too, basically. So the agent itself requires some memory, and the agent itself needs -- if it has its own core to run on, it doesn't affect the latency as much. But the agent is not in the path of traffic, and so shouldn't introduce overhead that way, but by contending for resources on the machine it's running on; that's where the agent affects, potentially, the performance.

**Adam Stacoviak:** Sure.

**Jean Yang:** If there's enough memory allocated, the agent should be fine.

**Adam Stacoviak:** So a gig, or something like that? Something reasonable?

**Jean Yang:** It really depends, because it depends on how much traffic there is...

**Adam Stacoviak:** More traffic, more \[unintelligible 00:31:51.22\]

**Jean Yang:** \[31:54\] ...and how much processing our agent needs to do on the traffic. And so this is not super-optimized yet, I'll have to admit, because at Akita we were in open beta, on Medium, just starting to hit large customers., and now at Postman we're targeting small to medium companies, and this hasn't come up as an issue yet. But when the time comes, we know there's a lot of optimization to be done.

**Adam Stacoviak:** For sure. With scale you'll have to, eventually. When the agent processes information, does it write to a database? Does it do an API call itself? How does it collect this information, then store this information?

**Jean Yang:** That's a really good question. So the agent batches data, and then sends that data back to the cloud, to our cloud and increments.

**Adam Stacoviak:** So it writes to something local, and then sends later on.

**Jean Yang:** Mm-hm. So the agent looks at the traffic locally, does some processing on the local side, and that's where it takes up memory and CPU. So to be more specific, what the agent does right now is it obfuscates out payload data, so that our cloud never sees that. So in order for our cloud to see that, we would need to increase our security in various ways. It's all doable, and I think it's likely we do that sometime in the next year or so it's, it's just not something we've done so far.

And then it also infers type information, because that's something that you need while you have the payload data. And then it collects error latency data, and then ships all of that obfuscated request-response metadata off to the cloud, in batches.

**Jerod Santo:** What are some insights that I would gain as a developer, looking at your dashboard or whatever it is, your reporting tools, in order to observe? What might I find? I assume this API is lower than you thought it would be... It seems like an obvious one. But what else?

**Jean Yang:** The main insight that was surprising to me, and a side note that I will say, is that in leaving Academia and getting into what do real developers need, it's just been a process of realizing that software development requires much more basic information than I think tool builders want to believe, and definitely than the software developers themselves want to believe. And so the biggest insight we've really provided to teams is "What are my API endpoints?" And so this is the thing that very often surprises teams; they discover API endpoints they didn't know about, or they discover their fields of those endpoints they didn't know about, or those fields are being sent data types that they didn't know about... You know, there's often something about the APIs themselves and/or how they're used, so the data that's getting sent; or like which fields are actually being used that is surprising. So I'll say that it's not quite traditional discovery, but what are my APIs, and what's actually getting sent to them? That's actually the most common and basic insight. Then which endpoints are slow (people often didn't realize), or which endpoints are throwing errors...

So the way we've gotten some of our users is they get an alert somewhere else that "Hey, you have errors", but you didn't monitor the endpoint that the errors are coming from... So where are our solution wins is they can install us and within minutes of install they can start seeing "This is the endpoint with errors." So where is stuff going on is something that we help with. So what do I have, and where where's the action that I need to be paying attention to are the two major classes of insight.

**Jerod Santo:** That's super-interesting. I think that's unintuitive probably to me as a developer, but it makes sense once you explain it, how some things seem so basic, and yet so many of us lack the basic necessities to do our jobs. And when you provide one back, it's just like "Oh, wow, I didn't know." Because there's always some hidden box somewhere that's talking to something else that somebody set up six months ago, and then they left, that kind of stuff.

**Jean Yang:** \[36:03\] Also, I've discovered that if you read the documentation for a tool, they'll say "Oh, we give you X, Y and Z." For instance, you can get this kind of debug information from your frontend, and then hop on over to your backend, and then you get this thing, and then we help you correlate with that. And then there's a really big caveat, which is if you've taken the time to set us up everywhere, and there's usually also some amount of maintenance work. Every time you update your code, you do this corresponding update of your monitoring. And what's happening in the real world is that developers just don't have the bandwidth to necessarily do that. And so if you don't have fully up to date monitoring states, you're not actually getting everything that's on the box with your tools. That ties into what I've written about 99% developers, and the needs of real software developers... But I really came into this not assuming that developers were doing anything, in part because I came from Academia, so I was like "Who am I to know this is what my team did before?", or something like that. But I just kept asking developers what's it actually like, and I realized that it's never like what they say on the box.

**Break**: \[37:30\]

**Jerod Santo:** I definitely wanted to ask you about this 99% developers concept, and it kind of plays into something, Adam, that Kurt from Fly talks about... I think he calls them blue collar developers, or the ones that get forgotten and left behind, and that aren't targeted by a lot of the sexy startups. The big dev tools are going after this certain group of online developers, influencer developers... People probably, honestly, who listen to shows like the Changelog, they try to keep up with what's going on, and adopt new tools and stuff... There's a lot of us that don't have -- some of us assume that they have, right? And so there's a whole set of people for who the future hasn't arrived yet, so to speak, right? And a lot of them are being ignored my tool creators. Is that a decent gist of your synopsis there?

**Jean Yang:** Yeah, and I would say that it's not even about the future not arriving yet... It's that some tools are built for a reality that doesn't exist, and may never exist. And so yeah, how I see it is there's this notion that everything trickles down from a small set of companies that are doing best practices. And this set of companies tend to be very large, well capitalized, very profitable companies... The Fang, Facebook, Amazon, Apple, Netflix and Google being the models of this is what needs to happen. But it's not actually trickling down, and not because people are slow to adopt, or because they're lazy, or they just don't understand the good solutions... But if you think about it, Google has a set of constraints for their processing like no other company. How many companies actually need to process at the rate of Google in terms of data, in terms of requests, in terms of many other things? Most websites aren't going to get that many hits in 10 years, what Google gets in a day. And also, there's other things, like if you're not set up that way, then it's not that you don't have the luxury of having 10 teams to work on, optimizing certain things, or developer productivity... You don't have the need to do that. And so it's kind of like -- if luxury cars were really lightweight race cars, that were actually dangerous for most people to drive... You know, that's not a luxury vehicle; that's just something you don't need.

So I think that a lot of the influencers talk about -- they tell great stories, they tell stuff that would be great for engineers starting out... Any junior engineer learning about how Dropbox did their distributed systems - that's great education for learning how to do distributed systems better. But most companies don't have problems of that scale. They don't need to solve them in the same way. And if they try anything similar, they're just overbuilding.

\[44:13\] So there's a "common wisdom" among a lot of investors that if you saw it at Facebook, or you saw it at LinkedIn, and you spin it out as a company, it's going to be successful. I think it's really worth questioning that, because most companies don't have problems at that scale; they have problems at a different scale. And so if what you need -- so I had a really big realization moment recently, when I was talking with one of my team members, and he had bought a motorcycle. And in my mind I'm like "Oh my God, a motorcycle. So dangerous. Why wouldn't you get a car?" And he said "I live in Bangalore. You can't get anywhere with a car, and everyone rides motorcycles. It's totally different. It's the only way to get from point A to point B." And I think there's a similar reaction sometimes in dev tools, when it's like "Oh, my God, you haven't set up this kind of cluster, or you haven't set it up this way - what are you doing?" But at the level of requests that you actually need to serve to be profitable, and to hit your targets as a company, maybe you don't need to be doing it that way. And actually doing it that way slows you down, and is impossible.

So I think that even calling these people blue collar workers -- I think most developers are not Google. I think people have written a lot of things that have the exact title, "You are not Google, and that's okay." But I think we should stop having this idolization of a small set of companies that have problems that no one else actually has. People should stop feeling bad that they're not solving those problems or having those problems. I think it's also - side note - a little bit strange that in school we're teaching people the cutting edge of algorithms... And I think one reason people get really drawn to this is they learn in algorithms class "This is what computer science is", and then they're like "Wow, Google is actually applying all of the things they learned in algorithms class to all their problems every day. We should be doing this, too." But maybe actually there's other skills that should be taught to you, in side note...

But yeah, software development is a variety of things. Most of it doesn't look like what people learn in algorithms class, and that's okay. That's reality. And it's not about catching up to the future; this is the present, and the future is going to be more of that. It's not necessarily writing distributed systems and assembly code that can move at the speed of light.

**Jerod Santo:** Yeah, I think there's two categories there. I think they're related. So for instance, what I was referring to was like okay, Facebook publishes React. Everybody at Facebook is using React, and then everywhere, everyone who's attached to that ecosystem starts to adopt React. And 80% of the web is still jQuery for many years, and then slowly, jQuery fades and React takes over. And so certain technologies do get distributed down over time... But there's absolutely also things that Facebook and Google and - name your big tech company - publishes, that are solutions to their problems, and then we are out as regular Joe developers, looking for solutions to a problem that we have; and we see a solution by a very impressive company, who has very impressive engineers, and when you say "Ah, yes, I will adopt their solution." But their solution never solved my problem in the first place; it solved their problem, and so now I have a mismatch. So I think that's the second category that you're kind of talking about, is it's never going to solve my problems.

**Jean Yang:** Yeah. There's this interesting phenomenon which you're alluding to, which is that a lot of programming tools development does come out of these big companies because they are the only companies that can afford to have whole teams developing programming languages to make their own developers more productive.

**Jerod Santo:** Right...

**Jean Yang:** So you see really good language development and tooling development coming out of Facebook, Google, Microsoft, and Microsoft monetizes a lot of it, too. And that has to do with other stuff I've written about, about why does no one pay for that stuff, and why does it have to come out of these big companies? But that doesn't mean that everything coming out of these big companies translates to other people's needs.

**Jerod Santo:** \[48:20\] You just made me think about a compiler I had to buy when I was in college... It's dating myself there, but back in my day, I remember my first year of school I was gonna take C++, and step one was to get the book and to go buy the compiler. Yeah, and it's really interesting these days, because people don't expect to pay for compilers, they don't expect to pay for Python... But Dropbox is funding, essentially, Python development by paying a salary to the benevolent dictator of Python. And I think this is a bigger topic for another time, but if you look at the main maintainers and creators of a lot of these programming languages, they're being bankrolled by single ones of these companies. And this is in part how this culture develops, around "Oh, well, Google is the force behind Go, so everything coming out of Google -- if we like Go, we must like everything else." But that's a really interesting cultural and ecosystem thing, around not paying for programming languages...

**Jerod Santo:** Yeah. And open source plays into that as well... But yeah, that's a big topic. My mind is kind of racing just thinking of all the places we could go. Let's focus back in now on APIs, because that seems to be the thing that you're most interested in, even though lots of these topics are very interesting. So API observability... This is one of the things - at least the thesis is this is one of the things that will take us to the future of understanding our software better, and treating it like a black box, because ultimately you're going to have to; even your non black box is gonna turn black box eventually, when you switch jobs, or something...

**Jean Yang:** Yeah, yeah.

**Jerod Santo:** It sounds like a really great way to onboard folks, or to come onto a new business and say "Install the agent" and now I understand really - not just how it works conceptually, but like how this software actually operates, because I get to see it doing all the things it does.

**Jean Yang:** Yeah. And what I believe is most people would benefit from having a black box analysis. The illusion of white box is an illusion most of the time.

**Adam Stacoviak:** Is it called white box if it's not black? Or is it clear box, where you can see inside?

**Jean Yang:** I think there's gray box...

**Jerod Santo:** Like white hat, black hat, grey hat...

**Adam Stacoviak:** Semi opaque... I don't know, something like that.

**Jean Yang:** Yeah.

**Adam Stacoviak:** I was thinking about a conversation we had at Strange Loop recently, and this may be relevant directly or not, and you can correct me if I'm wrong... But our booth was next to Vonage, and I'd kind of forgotten about Vonage. And Vonage, they described themselves as basically Twilio. And they said that some well-known delivery service uses both. They use both Vonage, and they also use Twilio. And it's mainly for cost purposes, and latency, and resiliency in their system, and the fact that they're both black boxes, they can't control the APIs they're calling. What is it like when you have that scenario, where you have a company at scale using essentially a copycat of each other, but not the same software, but roughly the same function. Is that part of that black box must have too scenario, where because I can't control one, I can't observe one, and I can't tell if it's gonna be down, I have to have two for failover, and also potentially financial failover when one is cheaper than the other if they have sliding scales of cost?

**Jean Yang:** \[51:46\] Yeah, that's a really good point. And again, I'll just say that we primarily focus on first party APIs and not third party, and so my views here are not fully expert. But I think we're seeing this a lot, where people are relying on software components that they don't have control over more than ever before... So we have these new patterns of redundancy, we have new patterns of defensive programming, and there are just new things that people are starting to do as a result of working with so many APIs. So we haven't really dug really deep into that yet. We're still at a much more basic level of what we provide... But definitely, what you're talking about really reflects a paradigm shift in how people are developing software. And I think that the tooling hasn't reflected this shift yet.

**Adam Stacoviak:** Back to the laws - I mean, I think in that scenario if they pay one of those companies slightly more versus just having two, maybe it's better to have two; I don't know, for downtime purposes, or just sheer scale and numbers. Maybe it does make sense to have two.

**Jerod Santo:** Always have two if you can, you know...

**Adam Stacoviak:** I wonder if logs or some sort of deeper relationship could give them more information just to have one versus two.

**Jean Yang:** Yeah, I think this is the business manifestation of "Don't have a single point of failure." And people talk about this a lot too, depending on APIs for AI. So people say, for instance, "What if open API becomes a lot more expensive? What do I do?" And so I see a lot of people having their tools to depend on multiple AI APIs. I think there's a lot of unpredictability when it comes to both third party and first party APIs. We still don't have necessarily best practices, I think the best practice is use many of them, if you can, and I guess keep an eye on if anything changes with them. Changes are a big thing that people seem to want to know about.

**Adam Stacoviak:** Yeah. Round-robin failure, being able to choose which one to use based upon latency and other factors.

**Jerod Santo:** Well, you mentioned Segment earlier on, as you guys are a user of Segment... That company, which is basically the adapter pattern for your cracking scripts and interactive scripts and stuff, is like evidence that the trend is more API, it's not less. Like, we have to have an actual thing that swaps in and out our connection to these things. We're not saying that we're going to trend towards less APIs. It's clearly more.

**Jean Yang:** Oh, absolutely. For us even at Akita, we use Segment for both Intercom and Mixpanel, because we need it to track, and then we also need it to talk to our users. And I knew for the different purposes of different things we wanted to track eventually it was only going to be more things. And in the beginning, one of our engineers was like "Hey, why do we need so many different tracking platforms?" But each one does a really specific thing, and so I can see for every purpose having something feed out -- then I can see actually having like a Twilio/Vonage adapter at some point, if there's enough of these companies...

**Jerod Santo:** Right. And there's some other thing that provides the same services. Yeah, exactly.

**Jean Yang:** Yeah. And then you don't have to use both, you can just swap one out for the other. Yeah, the beautiful thing about Segment is that it is tailored to a set of marketing APIs, but you don't have to worry about one being better or worse than the other; you just pipe all of your data.

**Jerod Santo:** Yup. And toggle them on or off...

**Adam Stacoviak:** Commodity.

**Jerod Santo:** ...with the click of a switch. Yeah, it really is a sweet idea.

**Adam Stacoviak:** I'm curious about the acquisition process; not the business side of it necessarily, but more like product direction of Akita to Postman. I was also taught to call it Postman, so I keep calling it Postman. I know some people say Postman, some people say Postman... So just so you know, that's why I say Postman. That's my thing, and I'm sticking to it. But when you were acquired, was it "Hey, come keep doing exactly what Akita did, but here, rename it"? How did the product direction -- did you continue down the same paths, or are you going down the same paths? How did the product direction change or not change?

**Jean Yang:** \[56:04\] Yeah, that's a really good question. So when we were getting acquired by Postman, we actually talked to a set of companies to make sure we were exploring all of our options, and really explore what are the different ways we could fit into a company. And so for us, we were still fairly early along; we had just launched open beta, and so we were too early to really have a company just drop us in and be like "Here's our really next big product line", but there were a set of companies that were interested in taking our tech, our product vision, or both, and integrating it into their product in a way that made sense for their product.

And with Postman, the conversation was we know we want API observability. That was the direction they had already set off in, and they had set off in an SDK-based approach. They were really compelled by two things. One was our agent-based approach, which led to a very smooth onboarding... Or, you know, Postman had a very specific \[unintelligible 00:57:05.25\] smooth onboarding. Some of our users we're still working on their onboardings... \[laughter\] But we got lucky in the case of their onboarding.

I think the CEO had told his head of platform "If you can get onto the system within 30 minutes, we're gonna consider acquiring this product. Otherwise, no go." And he told me that too, and we were very nervous, because we're like "Alright, most of the time it's really fast, but sometimes it's slow. Who knows?" But they got in in under 15, and they were able to poke around, get a bunch of stuff... And so we started a conversation from there. And our initial starting point, I would say, was actually further from the Akita product than where we've landed now, because for them -- Postman has been primarily \[unintelligible 00:57:50.10\] before. And so they were like "Alright, we have Collections..." What we announced first with the acquisition was we were going to extend Collections with the agent, and populate Collections with new endpoints from our agent, and then see where we went from there.

And since then, we've ended up developing a product called Live Insights, which is now in alpha, which is "Here are your endpoints, here are the ones with errors", and everyone's been asking for latency. So that's something that's coming out, too. And so a big part of what we've been exploring - and I'm really glad we've taken the time to do it - is if we went from essentially first principles, and looked at what does it look like to build the best API observability platform for Postman users - what is it, and what are the needs we're solving? ...instead of saying "Hey, we were Akita, we did a bunch of stuff that worked for our users; we're just going to transfer that over." And so my first few months, were talking with our users, talking with Collections users, serving the people who had signed up for our alpha, and really getting a sense of what do they need, and what makes sense for us to build here?

**Jerod Santo:** So that's the product. What about the software? Did you did you start over? Did you bring it all in and spruce it up?

**Jean Yang:** Yeah. So there's no way we could have launched anything if we had to start over. It takes too long to build this stuff. So we spent the first couple of months porting the backend, and so a lot of what we're working on is iterating through different incarnations of the frontend with our users.

**Adam Stacoviak:** Did you feel like it was a success to be acquired, or did you feel like there was a -- from a founder standpoint, was there any emotion? Obviously, you chose the direction, so there's clear opt-in to the direction, but did you feel any remorse or mourning of "Akita gone, Postman lives" kind of situation? How did you feel with that choice?

**Jean Yang:** \[59:50\] Strangely, I felt less sadness or grieving for Akita than maybe my team did... Because I think my team was like "Oh, so

fun to be Akita. Now we're part of Postman, and it's an adjustment; we have a different job now." I think for me, I was just very focused on what's the best thing for the product and our users. And the minute I joined Postman, I was like "Wow, we have such a bigger platform to build on top of. We have a megaphone, whereas we had a little microphone before. And we have this whole marketing team now, we have all this data to dig into, we have all these users that we can survey..." There was just a lot of work to do. And so for me -- we weren't done with the job at Akita, and we're still not done with the job of defining the category of API observability at Postman.

So in some sense, I think I am an anomaly here, in that I'm just like "Cool. We were doing a thing, we're still doing the thing. We're not done yet. So we're just gonna keep doing it." And I'm really excited about how much more resources we have now, and how much bigger of a platform we have. So for me, it's really been a win so far.

I think if you ask some of our team, they're like "Man, we were going great, and now we had to spend like two months integrating. It feels like a step back." Although I think intellectually they know it is for the best. But we've had to slow down; we were in open beta, we're now back in early alpha, with a much smaller number of users... We're redoing all of our monitoring in the new Postman system, we're redoing all of our Runbooks. We had really good ways of doing user support before, where we had our whole setup, our whole data, our whole Intercom automations and everything... And in some sense, we don't have some of that. But in terms of the ultimate impact that we're gonna have, I think it's not hard to feel just what an opportunity it is.

And I think in some sense, some founders are like "Man, I'm not in control anymore", or something like that. For me, I'm just like, there was so much stuff that was all on me... Because I was a solo founder. So anything with the data that we have, the marketing that I now have access to, even -- you know, I had been trying to hire a designer for years, and Postman was just like "Here's a designer. She's been great to work with." But there's a lot of things that I knew was on me, and would be kind of -- even if we had the resources, it would take a long amount of time to get right. I feel like we push fast-forward on a lot of these things, and we got a lot more non-engineering resources when we joined Postman.

**Adam Stacoviak:** Resources are good... To have somebody to call upon that's like "Hey, you're just there. I didn't have to go survey, and find, and vet, and look, and scrutinize. You just gave me somebody that worked really, really well." It's a blessing.

**Jean Yang:** Yeah, exactly. So there have been a couple of places where I was doing all of the marketing myself before, and now I can rely on the marketing team. We didn't have a UX designer before. We had an external fractional firm, but I think having someone who's living, breathing your UX really just takes you to the next level really quickly. So I think there were just like a few things that I knew we were missing. I knew it was on me to build up, and I knew each one was going to take a lot of time and effort. And so it's really -- to me, it's really setting us up for an acceleration, so I've been really excited about it.

**Adam Stacoviak:** What about the -- you mentioned defining API observability. Was is the maturity level of that definition, or the current status quo of tooling available to API observability?

**Jean Yang:** Well, we were named Gartner Cool Vendor earlier this year in API observability, and I would say we were -- it was before our open beta. \[laugher\] So that gives you some idea.

**Jerod Santo:** Not much competition, I guess...

**Jean Yang:** \[01:03:57.17\] So I told our team this is a great honor, but there's a lot of work to do in the whole field, if that's the case. I think there's other players in the space... Datadog acquired a company called Seekret a year or two ago. There's Moesif, there's APImetrics... I think that a lot of people know they need API observability, but the category hasn't been defined yet. So people talk about category creation, category definition... We don't have to convince anybody that API observability is a thing; like, this is a term, and people ask about it. Does anyone know what it is? No. If you ask ten people on the street, they'll probably all say something slightly different.

**Adam Stacoviak:** Like what's an API.

**Jean Yang:** Yeah, exactly.

**Adam Stacoviak:** It depends on \[unintelligible 01:04:38.22\]

**Jean Yang:** They'll say like "AI? I've heard of that. So you want to observe the AI?" People often drop the P when you talk about APIs, that's what I've noticed.

**Adam Stacoviak:** For sure. You said earlier - it may have been a Freudian slip... You said Open API. I think you may have meant to say Open AI, but... I don't know.

**Jean Yang:** Oh, yeah, I did mean that.

**Adam Stacoviak:** So you added the P.

**Jerod Santo:** She's all about adding the P though, man. She wants the APIs, yeah.

**Adam Stacoviak:** That's right.

**Break:** \[01:05:02.21\]

**Jerod Santo:** Do you have a demo instance, or a video? I would love to see it in action. I'm just now going based off of your description, but I'd like to see how it works, or see it working.

**Jean Yang:** So we're not ready to show it to the world. Like, I can show it to you guys, but...

**Jerod Santo:** Okay. As long as I can see it, I don't care about the world. \[laughter\]

**Jean Yang:** Yeah, yeah. Cool. Alright, let's demo off beta. Let me see what I can do here...

\[A few minutes later...\]

**Jerod Santo:** That's cool. So because Postman already has all of these concepts inside of it in terms of the collections with the endpoints and the data and stuff, you're really kind of piggybacking that UI by building this into it, by saying "We're going to take the insights drawn from the agent and collect it into the cloud, and we're going to display it to you as if it was like a pre-populated Postman collection."

**Jean Yang:** Yeah, yeah, absolutely. So that was one of the compelling aspects of partnering with Postman, because for us, we were just having to build up everything ourselves, which is both time-consuming and expensive... And a lot of our users were asking for integrations with something like an API platform, essentially.

**Adam Stacoviak:** \[01:07:49.14\] Always cool to see the inside, you know? To see even the -- I think you should demo alpha software more often. It's just fun to see the beginnings, to see the rough spots in some ways, and like the thought behind just getting to their user saying "Okay, can I have this? Can I have that?", beyond errors, and how that manifests as an initial screen, and what that initial screen has, and how it evolves.

**Jerod Santo:** I think it'd be a cool kind of video series, actually... Wouldn't this be cool? Like we do fixer uppers, the before and after... People watch TV shows where they take a house and fix it up, and there's a project, and then we see the end result. It'd be cool with brand new product screens, and stuff like "Here it is, we're spitting the data out", and then like the after would be like "Here's the finished, well-designed, shined up, spit-polished...", and resolves; they're kind of cool. The problem is people are usually embarrassed by their in-progress works, and so they don't want to share those things. But we appreciate you showing it to us at least.

**Adam Stacoviak:** Yeah. This is an alpha currently, right? Even in Postman it's an alpha. You were in a beta scenario in Akita. is that right? I'm trying to just map the --

**Jean Yang:** Yeah, so we had launched our open beta in March. We got acquired in late June... And so we rewound to early alpha to give ourselves time to integrate our backend into the Postman environments, and to really make sure we're building the right product on the Postman side.

**Adam Stacoviak:** Okay. So I just wanted to make sure I map that correctly. So still not GA, but people are using it, orgs are using this... What are some of the -- even in its early state, what are some of the impacts to developers having these insights, having this observability, the error even, or even just knowing were their endpoints are, and what's getting the most traffic, and what kind of error responses are?

**Jean Yang:** Yeah, so developers are saying they're happy to get this information because they aren't getting it from anywhere else yet. I will say we just shipped those pages that I showed you, so I think it's too early to tell what the impacts are. What we do know is just populating the endpoints - they're like "The impact to us is low until you ship these next screens." And so what I showed you actually isn't even shipped to users yet. So we showed it to them and they said this will have impact... The last screen I showed you is actually in the middle of release right now; it's going through end-to-end testing, or something like that. This is a very early demo.

**Adam Stacoviak:** Can you hypothesize impact with me? Can you hypothesize some -- we talked about earlier, you mentioned how often there's churn in organizations, so there's a lot of new developers coming into a team, so they're learning the system... So this is a mechanism for learning an API that they have, right?

**Jean Yang:** Yeah, so our target is smaller teams. So it is teams with engineers somewhere between 10 and a couple hundred, where a lot of them are moving fast, getting things off the ground... The impact that they told us that they want from this is it's easier to keep an eye on their systems; they get a central source of truth, where they didn't have one before. They can more quickly find and fix issues than they could before.

**Adam Stacoviak:** That's good impact.

**Jean Yang:** And so with our Akita users, for instance, we were a part of ops review for our best users; they had turned off their other alerts, and they kept their Akita alerts on, basically. I think it's TBD. I'm trying to stay open-minded about this is actually a different user base, this is a different platform that we're becoming part of. But I learned from Akita there's definitely a need for people to get easy to use, lightly configurable API-level insights about their performance and errors.

**Jerod Santo:** \[01:11:43.11\] Alright, last question, from me at least... You mentioned this future where we have a better understanding of our software systems; they're more reliable, we can build higher-quality systems. We're not afraid of our APIs anymore; we should be today, but in this future we will not be... And API observability, and specifically the tools that you're building, one thing you said is gonna help us get there. You don't know all the things that we need, but... Do you have any other ideas that you're not working on, things that would help us get there, along that path? Maybe it's a good idea, maybe it's a bad idea, but it's something you've thought of, that would be another thing somebody else could work on or try, that would get us closer to the future that you're talking about, in addition to the work that you all are doing?

**Jean Yang:** Something I'm really excited about is low code with APIs. Because part of me is like "Let's just all be really honest about what we're doing here... Basically gluing together APIs." So I've been a big Zapier fan for many years now, and I'm also a really big fan of Postman's new low-code product called Flows. But as a programming languages person, it's always about if your language or your builder abstractions are at a higher level of abstraction, it's always easier to analyze what's going on. And so from my point of view, we have to do all this stuff with API observability right now, because we have to back-engineer all the API traffic, and really piece together all of the API interactions... But if you're just straight up using a low-code tool, that's just right there. And so that's something that's really interesting and compelling to me. I think that that's very clean from an abstraction standpoint, and it also just enables more software builders, which I think is very cool.

So to me, that cleaning up -- so like right now, calling APIs from low-level code kind of feels like you're mixing assembly with some other stuff. You're at like a low level of abstraction. So lifting the whole abstraction layer to something that's API-centric is very exciting to me. And then you would only need something like us for the messy stuff that you customize, or something... You know what I mean? But all the other stuff, it's cleaner to begin with. So that's something that's really exciting to me.

And then there needs to be a better solution for legacy stuff. So legacy subsystems today are like toxic waste. They're just sitting there, waiting for like a big bug or vulnerability to really cause things to spill over... And the work we're doing is one piece of what allows people to make inroads into legacy software. I think there's some work that Docker is doing that's really interesting, helping people containerize legacy software... So the reason I'm excited about that is if you have legacy software that's just kind of like sitting somewhere, running on your own systems, on a non-standard tech stack, it's really hard to make sense of it. But the minute you virtualize it, you can start poking and prodding at it in a black box way. That support some of the stuff we're doing, actually.

So we can only watch things... If they're sufficiently virtual-- or we could also... This is a gray area, but we could also install our agent on bare metal, etcetera, etcetera. But the minute things get containerized, things are easier. So the push to containerize and standardize infrastructure I think will help some of the legacy problem. But a lot of software tools, discussions really gloss over the fact that we have growing amounts of legacy code that are never going to be part of this future that they're describing, and what do we do with all of that code?

**Jerod Santo:** Good point. I imagine you're using eBPF, which is, I guess, modern Linux kernels... So is that what some of your -- you said "We can't get underneath or get further back than certain places." It's basically like if your machine or virtual machine or container doesn't have a modern-ish Linux kernel, then your agent doesn't work, or...?

**Jean Yang:** \[01:16:00.18\] So we're actually more flexible than this. It's really about ease of install for users.

**Jerod Santo:** Okay.

**Jerod Santo:** So we use BPF. So we don't use any of the extensions of BPF.

**Jerod Santo:** Oh...

**Jean Yang:** And so this was a conscious decision. I didn't want us to be kernel-specific for exactly the reason you said. Especially if we want a drop in experience, it's a lot of work to determine kernel versions, and convey that to users... And what we've found is we're building for a user that doesn't read. I'm not saying they can't read...

**Jerod Santo:** But they don't read. \[laughs\]

**Jean Yang:** ...but they're in a hurry. We don't actually expect them to read our docs, we don't expect them to read our onboarding. We expect them to basically copy and paste commands and click buttons. And so if that's what we're working on and working off of, and we want them to onboard within 15 minutes, the E part of eBPF is just out of reach right now. We don't know how to make that easy to use yet. And similarly, we actually support bare metal installs, but we haven't figured out a way to do it. \[laughs\] We assume the user isn't going to read, if that makes sense. So we've set a very high bar for usability, or low bar for people actually internalizing any of our product, if that makes sense... And so for me, the Docker instructions have been way easier to convey... Because here's the thing - if you're on Linux, are you on Debian? Are you on like Linux versions like this, this and later, or this and earlier? ...because how BPF interacts is different, even though it's not eBPF.

And so to me, from a developer experience point of view, that's just terrible. You shouldn't have to know all these things about your system just to get started. And that's why we've stayed away from supporting every bare metal install under the sun. But also, it's not just bare metal; some of these legacy systems are -- people are migrating off Delphix, people are on some pretty... Like, if you're modern, up to a certain point we work. But earlier versions of stuff just have stuff working differently, and to have to figure out which early version you're on, and for us to extend stuff to support it, it seems like a zone that we are not ready to go into right now.

**Adam Stacoviak:** I feel like an idiot, because I didn't transpose back Berkeley Packet Filter to BPF earlier. I just was like "It's a new thing." I just didn't connect it back, because I never expanded the acronym. I've been aware of eBPF and whatnot, but I just didn't expand it to the full thing. So I just \[unintelligible 01:18:43.22\]

**Jean Yang:** Yeah, it's just been packets the whole time that people have been talking about eBPF.

**Jerod Santo:** \[laughs\] That's hardcore. Not even the eBPF, just straight up BPF.

**Adam Stacoviak:** Just BPF, yeah. Skip the E.

**Jean Yang:** Yeah. School.

**Jerod Santo:** No extensions here. Cool stuff, Jean. Adam, any other questions you have before we let her go?

**Adam Stacoviak:** Maybe just one more layer on no code/low code... Do you have any -- not so much prescriptions, but pontifications of where we're gonna go with this, what might happen with API developers, those who maintain APIs and the future relationship that's inevitable with low code/no code tooling to hackathon our way to the next startup?

**Jean Yang:** Yeah, I think if we look at the future of low code and no code it is APIs. That's the whole reason we're able to do interesting things with low code and no code.

**Adam Stacoviak:** Sure.

**Jean Yang:** I mean, I don't do that much hands-on coding these days, but I have so many zaps. And I guess our CEO would prefer it if I had so many Postman Flows... In fact, he \[unintelligible 01:19:45.13\] you've gotta really onboard Jean. She's just making more zaps every day." \[laughter\] But I think that we're in a really exciting time, especially with AI stuff. So I can now log into Zapier, and within 15 minutes of logging in I'm able to make zaps for doing things like "I want you to generate me a template for a weekly retro doc every week, and put it in Confluence, and then message in the Slack channel and tag my team that it's up, and they should fill out the retro doc."

\[01:20:16.28\] I have automated weekly messages with my team, like asking them questions. Do they respond? Not always. But that part can't get automated. But there's been pretty complex things that I've been able to automate, and compared to two years ago, it's actually crazy. So I have another automation -- so I was losing track of who was on call, and I think no one really... Well, okay, other people than me were tracking it, but many people maybe did not know who was on call. So again, within 10 minutes I made a zap that goes to pager duty, looks up who's on-call, looks up that person in Slack, tags them, and posts it in our Slack channel every day. And so these were all things that took a lot of code to do before. And now it's like 5-10 minutes of Zapier, and large -- it's APIs plus AI, because the APIs are what make it possible to get that information. Zapier has done the work of making authentication really easy. I can just click a thing, within a minute I can get authenticated, and it manages the tokens for me... So actually, two years ago I had to like put in the tokens by hand, I had to put in the API call and the values by hand, like pipe it through... That was maybe like two hours of work. Now they've set up the APIs automatically. I don't really have to even know how to use Zapier anymore. So I just say "Hey, I'm just hanging out... There's a thing I want to automate, some team process."

Another thing was I want every time I add this emoji to this channel, I want this JIRA ticket to get created, and I want it to do all this stuff. I was able to do that. It was a very slow zap, because it had 10 steps... So I had to turn it off. But it was pretty good. I was able to do that in like 45 minutes. And it's really incredible... It's really APIs plus AI that have really made this easy. Because the API part is -- someone has had to do all the work of making it easy to authenticate, and call, and pipe the values from the APIs, and get the responses back, so you can pipe it again... And then the AI part has just made it so that, you know, "Do you want to do these five things? Just use these five components, and you don't even have to have learned what the components are." But it's really crazy, to make these systems maintainable -- oh yeah, my 10 Steps app... I have no clue why it stopped working. I have no clue I was slow. I don't know how to make it faster. That's where being able to understand those systems, get observability, get some kind of understandability of the underlying workings will be good... But in terms of getting off to the races - I think that even my team now knows "Well, Jean, do you know how you made an automation for that other thing? Well, we're having a process issue here. Can you just like make a zap, or something?" \[laughter\]

**Adam Stacoviak:** That's pretty cool though, to make zaps like that...

**Jean Yang:** Yeah, it's really the future.

**Adam Stacoviak:** Yeah, it really is.

**Jean Yang:** One reason I'm really excited about it is it's not one of those unattainable features. Anyone can just get onto Zapier and do it. And I think Zapier is not going to be the only one; Postman has Flow, they just haven't -- they don't have as many APIs as Zapier does in there yet... Which is a little ironic, but - Zapier has really smoothed this whole process. But I think they're at the cutting edge of something that's just gonna be ubiquitous.

**Adam Stacoviak:** Yeah, the whole "if this, then that" kind of situation too, even -- I don't know that platform, how closely it compares to Zapier, but I know they were closely aligned for a while.

**Jean Yang:** Yeah... Well, so, if this then that - I mean, they had like if the weather... You know, like a very fixed set of things... Now in Zapier I can connect up Slack, with Pager Duty, with Confluent, with JIRA, with Datadog... We were sending -- we had some pretty complex zaps that were like going to Okta, doing some stuff, calling out to our own lambdas, and writing metrics to Mixpanel and Segment... And so yeah, it's all APIs. So much of code is APIs.

**Adam Stacoviak:** That's wild. It's been so awesome. I will echo what Jerod said at the top of the call - I've been a fan from afar, and I don't follow you so closely, I don't know everything about your life, but I've seen you out in the sphere, and have been a fan, and have been just excited to eventually have you on the pod... And here you were, and here you are, and it was awesome.

**Jean Yang:** Yeah, same. It's been really fun. I've also been a fan from afar.

**Adam Stacoviak:** Cool. Fan from afar. Thank you so much.

**Jean Yang:** Cool. Alright, well, thank you so much for having me on.
