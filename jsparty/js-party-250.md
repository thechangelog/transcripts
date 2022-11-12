**Amal Hussein:** Hello, JS Party listeners. We're recording a very special show today, with two of my very close friends, who are close with me, but not with each other, so I am like the shared circle in the Venn diagram... Divya, welcome. You're my co-pilot today. Welcome.

**Divya:** Hello, hello!

**Amal Hussein:** Yes, and where in the world are you today, Divya?

**Divya:** I'm in Singapore, and it is in the morning. I think it's --

**Amal Hussein:** It is the future.

**Divya:** Yeah, it's the future. \[laughs\] It's Halloween today where I am.

**Amal Hussein:** Yes. And it is like Sunday night for me. We're recording this on an off-day, off everything... I'm recovering from COVID, so apologies in advance for any open-mouth coughing that may or may not occur during the recording of this show... And our lovely guests, Maggie Johnson-Pint is joining us from Seattle. Welcome, Maggie. Hello!

**Maggie Johnson-Pint:** Hello!

**Amal Hussein:** This is like a show of sisters for me, because I was "Oh, my sisters of the internet... I really do, I feel so special and blessed to be here right now. I feel like the only thing I'm missing is like a glass of wine, or a glass of hot chocolate, which, I was too ill-prepared to have... But we're just gonna pretend like that's what's in my hand right now.

So Maggie, welcome to the show. We're excited to talk to you today about all things SRE, and reliability, and what we can learn from that community. And also, what that community can learn from us JavaScript nerds.

**Maggie Johnson-Pint:** Absolutely.

**Amal Hussein:** We have a lot to teach other communities, believe it or not... So before we get into all of that - and we're also gonna talk about your new startup, Stanza, which is incredibly exciting. All my friends are starting companies. I'm "Should I be taking a hint right now?" what am I doing with my life...? But anywho... So Maggie, welcome. Tell us a little bit about yourself.

**Maggie Johnson-Pint:** Sure. So I'm Maggie Johnson-Pint, I am the head of product at Stanza, which is the new reliability platform...

**Amal Hussein:** Yeah.

**Maggie Johnson-Pint:** Let's see, other things to know about me... I come from JavaScript. It's a little unusual I ended up in SRE. I absolutely consider myself a JavaScript engineer. the way that we have identity for who we are, I am probably best known for, such as I'm known for anything, having been the original author of Temporal, which is the new daytime API that's coming. It's coming!

**Amal Hussein:** Yeah, I feel like I can't say the word Temporal without getting like very excited... Temporarily... That was a bad pun.

**Maggie Johnson-Pint:** Yeah.

**Amal Hussein:** \[00:05:53.16\] Let's look at points. But yeah, that's incredible. And also Moment, right? You're one of the maintainers of Moment, and you were, I guess; y'all have done a really great job of landing that ship gracefully, and that's its own show. We're gonna have to have you back to talk about that with the rest of the team, but...

**Maggie Johnson-Pint:** We should, yeah, absolutely. Yeah, I am a -- in a way, I sometimes say maintainer emeritus. I'm still attached to the project. But obviously, we're spinning down, and right now I'm not super-active, and I do want to give credit to \[unintelligible 00:06:19.20\] who are out there still closing all of the security vulnerabilities when they're found... So doing most of the work right now...

**Amal Hussein:** Wow... Yeah, I forgot -- yeah, there's always security patches, right? Like, it's never really over.

**Maggie Johnson-Pint:** It never ends. My actual thing that I still do for the moment is any like legal and trademark, which believe it or not, we get legal and trademark problems, too... \[laughs\] But yeah.

**Amal Hussein:** Wait, are you serious?

**Maggie Johnson-Pint:** So we've had a couple of instances where people published packages under names on the registry that were really close to Moment, that were potentially malicious... And every time you do that, you have to go through the JS Foundation and dispute the trademark etc. So I've gotten pretty good at that over the years...

**Amal Hussein:** Right. Because Moment is a library that's a part of the OpenJS umbrella of libraries, that are important to the ecosystem, such that they have support from a foundation, and all that other good stuff. So that's exciting.

But anyways, we're not here to talk about Moment today... I'm like resisting the urge of making another bad pun. I'm not going to. We're here to talk about reliability, and SRE as like just a broader -- that's the term, SRE. Right? Some of you may are maybe familiar with the term, maybe not... SRE stands for Site Reliability Engineering. But Maggie, can you tell us a little bit about the journey that you've made into this world of SRE coming from a place, like many of us, writing JavaScript, and doing code things?

**Maggie Johnson-Pint:** Yeah, totally. The way I got into SRE - let's see... I used to work at Microsoft. It's kind of actually wild... This was six years ago now. I was working at Microsoft, and I felt like I wanted a different team... And I started looking around; at the time, I wasn't sure what I wanted. I just sort of wanted to change something up. And at the time, Azure was scaling up its SRE organization, which is far from what a frontend developer/Moment maintainer would do... But it was interesting, they had a lot of need, because SREs are very invested in tooling for reliability and how do we build better tooling. They had a lot of genuine need for frontend developers. They actually really needed to get some people in to help just produce internal tooling and dashboards that was high quality. Azure is a huge organization; you're talking about 15,000 engineers, so internal tools can be used really heavily, unexpectedly... And so I ended up finding this role working on incident management tooling inside of Azure's SRE organization. And of course, everybody else is a systems engineer; they work very low in the stack, they work on networks... And it was like all of them and me.

That is how I ended up there... And it's a space I've sort of been in and out of ever since, but... Yeah, it was almost an accident. It turns out everyone needs frontend developers. Like, if you want to go to an SRE, or -- you can, too. \[laughs\]

**Amal Hussein:** Yeah, you can do this too, kids! Yeah, I've always thought about JavaScript as like the lowest common denominator; every company has a need for certain types of engineers, and we are that cog...

**Maggie Johnson-Pint:** We are.

**Amal Hussein:** That universal cog, that universal remote of engineers, to just kind of fit in... And what's interesting is we're also the most adaptable, I feel like, because I feel like the closer you get to the metal, there are some very strong cultural norms that I feel like are less adaptive, actually. I don't know. Can you maybe talk a little bit about that? What was it like -- you know, there's some cultural exposure that's different, right?

**Maggie Johnson-Pint:** Yeah. So one of the first things to know about SRE, or like the SRE movement... So back in the day, we would have said sysadmin; you have a sysadmin, and the sysadmin deals with the hardware, the computers, and deals with the network configuration, and things like that. And the SRE movement - I think it's worth when you bring up culture, it's worth getting into the history of that.

\[00:10:15.23\] So the SRE movement came out of Google... And Google actually made a big initiative - you're talking more like back in 2007-2008 now - to say, "What if we ran systems in a very software engineering-focused way? What if we put automation first? What if we put the idea that you would do things through software first, instead of thinking of it as a reactive model? What if we're sort of proactive and we code for availability?" And Google had massive success with this. Google is known for its ability to operate very, very large systems at great efficiency. And of course, if you've ever been an internal Google engineer, you know that this is supplemented by - it's still the best to this...

**Amal Hussein:** A ton of tools, internal tools.

**Maggie Johnson-Pint:** Yeah, the best internal tools you've ever seen. And they stay ahead of the industry to this day. So it's worth noting that when you go into an SRE organization, especially in a company like Microsoft, that's really trying to be forward-thinking technologically, it is a cultural initiative at the core to stop thinking about operating systems in what we would say as a high-toil and reactive manner. You'll hear the word "toil" come up a lot. That's that idea that you have to go in and like poke the config and see what happens, and then manually write this script, and manually do this thing... A huge principle of SRE is that you would try to reduce toil, and you would try to build a culture of proactive automation, and proactive analysis, so that you can stop issues and incidents before they happen, and build sustainable software.

Now, there's still some stuff to SRE culture that you find very different than JavaScript. And it's kind of funny, especially working on Stanza, which is a reliability tool, that I really hope can benefit JavaScript and SREs... AT different times you'll see when you talk to SREs that they're very cautious and risk-averse people. It doesn't mean they don't want to do cool things, or they aren't good developers; a lot of them are really monster-good coders... But they just are gonna approach things as like "How do we do incremental and soft change to deliver things out to the world?" And that's their natural state of being. And JavaScript developers live in the opposite end of that culture, right? Like, JavaScript developers are changing what they do every two days. I took a break off of coding for a couple years, and I've come back to the stack and I'm like--

**Amal Hussein:** "Whoa...!"

**Divya:** "...oh, I guess we all do Next.js now... Okay..." \[laughs\]

**Amal Hussein:** Yeah. I mean, it's a little wild though, because if you're not really keeping up, you come back in and you're like "Wait..." It feels familiar, but you're in a completely different position on the Twister table, right? "Okay, well, our left foot is now on red, green, green seven, and our right arm is on red two", or whatever. It's wild. But yeah this idea of not being super-conservative I think lends us to innovate at the pace that we do. But also, don't you think that some of that is held by the fact that we don't have to -- there's lower costs to innovating closer to the front of the stack than there is lower, right?

**Maggie Johnson-Pint:** Yes, absolutely. It's a huge aspect of it. The other thing to remember is JavaScript is kind of on one machine, and obviously, if you roll out something that breaks all of your customers, it breaks all of your customers... But JavaScript changes tend to be at the very top of the stack, and so they don't cascade through as badly as like if you break a core networking platform, or a core storage platform inside of a large infrastructure... You're gonna take everything out. And so just the blast radius of any change is different, right? If we break a button and people can't click it, it's probably okay. But if you bust storage, you're going to take out everything that everyone is doing.

**Amal Hussein:** Right.

**Maggie Johnson-Pint:** \[00:13:57.25\] And so I think that really -- like, you have to bear in mind anytime you're interacting with an infrastructure team, or an internal tools team that works in that lower of the stack area, that like you're used to being able to just slam stuff out there, and well, if it didn't work, we'll roll it back... And they're thinking in very different terms about the blast of their change, basically... \[laughs\]

**Amal Hussein:** Yeah. And the rollback strategy, right? And I think web developers maybe can relate to this very closely when it comes to DB scripts, right? So think about your rollback strategy, right? Like, "Okay, we're gonna write a migration script." But if this doesn't go well, what am I doing? And how do I codify the out button, or escape button, or undo, and that codification gets harder and harder the more systems you're touching, and the more that you're doing it... Which is why small changes are good, you know?

So you mentioned Google really taking the lead and establishing norms and principles and really being the Northstar in the community when it comes to SRE practices... But can you talk about how things have evolved beyond just the good old days of like Niall's SRE Google Handbook, right?

**Maggie Johnson-Pint:** Sure.

**Amal Hussein:** Like, we have infrastructure as code, we've got TerraForm now, we have multiple systems... I think for me one of the things that's still very much missing in the observability world is like more standards, like more tools talking to each other in a uniform way, and having some standards around telemetry would be great... So can you fast-forward to where are we now in this journey, and what's still missing? And also, what problems are you trying to uniquely solve with Stanza. I'm curious...

**Maggie Johnson-Pint:** Yeah. So you actually said something deeply insightful when you said "In this tooling space there's really a need for more standards." So first of all, there is a standard \[unintelligible 00:15:43.24\] ever heard of OpenTelemetry for distributed trace... Does that ring a bell?

**Amal Hussein:** I feel like I know what those two terms mean. I know what distributed means, and I know what tracing is, and I feel like I can logically come to a conclusion about what is distributed trace... But why don't you double-click into that for us?

**Maggie Johnson-Pint:** Sure. So the idea behind distributed trace is that you can watch a request move through your production system, and you'll watch in these chunks that we call spans, you'll watch it move through each server that it's going to interact with, and you can get an idea of how long does each span take, and where are we seeing bottlenecks, where are we seeing errors \[unintelligible 00:16:20.12\] OpenTelemetry is this standard for distributed trace that is actually being bought into by a lot of the cloud providers. We were working on it at Microsoft.

And so what you start to see is that request can pass through cloud services, and then into other things, and you keep retaining that OpenTelemetry-based trace throughout your infrastructure and the providers' to give you better information about how things are going. And that probably was very much the first standard that we needed to see come unlocked to be able to start getting tooling to unify in the observability space.

As with all standards, there's certainly a lot of discussion around OpenTelemetry, and is this the right way to approach this problem...? It's actually really interesting, I was talking to David Cramer, the CTO of Sentry last week about this, and he was calling out some very real (and I've known about these for a while) issues with OpenTelemetry, because it was really thinking in server terms, because he came out of this SRE space... And for us as client devs, there are some things that we need around ordering guarantees when you're outside of the server world, that it doesn't have yet. So I think there's still a lot of work to be done there to think about how we reconcile some things in that space... But that's the first standard that's coming out.

Other stuff that we see that I wouldn't call it a standard, but it's a de facto kind of standard that people are starting to understand from the SRE movement... The SRE movement, if you've ever heard the term SLO, or service-level objective - that came straight out of Google SRE. An SLO is this concept that you would have an objective for how a service would behave. It's not the same as an SLA; an SLA is what you sold your customer.

\[00:18:05.04\] An SLO is an objective for what your real goal is, and it can actually have multiple indicators or multiple sub-metrics to it. And the idea behind an SLO is as long as you're meeting your SLO, then everybody can keep shipping. But if you fall too far out of your objective, then everybody needs to slow down their ship and work on repair work to get the system back to the level of availability that's required.

**Amal Hussein:** Okay.

**Maggie Johnson-Pint:** And this concept you see everywhere in industry; like, we were doing it at Microsoft, I worked at Stripe for a year, Stripe rolled out SLOs... You see that kind of exploding through industry, and sometimes I think people don't even know that it came out of the SRE movement. It's not exactly a standard so much as it is a way of thinking, but it's being so heavily adopted that you see it everywhere.

**Amal Hussein:** Yeah, yeah. Specifically, I guess, with distributed systems, because there's really so much to keep track of; it's not just this big monolith, right?

**Maggie Johnson-Pint:** Yeah.

**Amal Hussein:** It's like, all these little things need to work in congress, right? So you can think about your architecture as like an orchestra, and the violinists need to do their thing... And so we need to make sure everyone's on key, in tune, and they can communicate, right?

**Maggie Johnson-Pint:** Yes.

**Amal Hussein:** So that's very cool. So can you give us a concrete example of the SLO versus SLA? Because I think -- for folks that might be familiar with one, which is probably what an SLA is, right...?

**Maggie Johnson-Pint:** Yeah. Well, so people say five nines... A lot of the time, if you've ever heard the term "five nines" in industry, what that just really means is -- I think, I have to remember exactly...

**Amal Hussein:** Oh, it's like uptime. It's like, you want to have like 99.999% uptime.

**Maggie Johnson-Pint:** Yeah. It's like 99.999% uptime, which I believe calculates out to a couple seconds a month... I don't remember exactly what five nines is, but it's a very small amount of time.

**Amal Hussein:** Some downtime, yeah.

**Maggie Johnson-Pint:** And when you talk about the hyperscalers, so you're talking about the clouds, or any of the sort of like major hyper-scale companies, they always say, "well, we've got to hit five nines for our customers, because they can't have us go down." And that really - the funny thing about it is that it's not super-meaningful, right? Like, what is uptime? Because if the server is responding, you ping it and it pings back, then I guess it's up. But what if it's really slow? Or what if it's giving you the wrong data? Or what if it's -- I don't know, corrupting data, even if it's giving you the right data? ...like, all of that stuff would be really bad, right? And all of that's availability loss. So five nines is this silly number where everybody talks about it, but I don't think any of us really know what it means...

And when you talk about an SLO, what we'll tend to do is when you're looking at a standard RPC-based or request-response service, you'll tend to want to break your metrics into - we'll sometimes call this golden signals. And there's actually really complex ways of thinking about this, but the kind of basic golden signals are latency, throughput and error rate. So can you get the speed you need on a request-response? What's your latency? Throughput is how many requests can you put through that system? And then error rate is what's the rate of errors over time. And that's kind of how you usually start to establish an SLO, but a lot of times you end up adding in supplemental metrics, depending on what the scenario is, or what the service does. And SLOs are kind of interesting... You can kind of tell they were born out of Google...

**Amal Hussein:** Oh, really? I was gonna say, because it's an acronym, a three letter acronym...? \[laughter\]

**Maggie Johnson-Pint:** Yes, that. No, you could kind of tell they were born out of Google because -- just when I say those signals to you, they're very based on this idea that you'd have this pure request-response. So those of us who work in the browser have made a session state in our life and watched a user click 500 things through that session, and seeing "This path will succeed, and this path will fail..." \[laughs\] And that's just not -- when you think about like the Google search, it doesn't do it like that, right?

**Amal Hussein:** Right...

**Maggie Johnson-Pint:** \[00:21:48.20\] When you \[unintelligible 00:21:50.23\] some data, that's a very different pattern than what we see when we get into online business applications and in JavaScript, where there's kind of these long-running sessions. An interesting debate out in the SRE space right now is "How do we construct SLOs that really reflect the full range of experiences of availability?" And that's one place where SREs often could really start to interact with client devs or frontend devs more often, because what you notice is that sometimes when they aren't deeply connected with what exactly the user is doing - it's not that they don't care about the user experience; they absolutely do. But it's not \[unintelligible 00:22:28.10\] what it is. So if all their numbers look good, then they're like "Okay, we're good", and if all their numbers are bad, they're like "Okay, we're bad", ut sometimes both good and bad can be disconnected from the user experience.

**Amal Hussein:** Yeah, absolutely. Yeah, how do you tie it all together, right? Like, what even is a metric? Is uptime enough? It's like, how do you codify functional versus uptime? It's really about uptime and function -- anyways... So many things, there's so much to talk about... I also need to take a cough break, so we will be right back. \[laughter\] Sorry, I'm already starting to cough. We'll be right back, we'll be right back...

**Break:** \[00:23:02.02\]

**Amal Hussein:** Okay, Maggie, that was a really dense and interesting conversation... I feel like I need to listen to that again at 0.5x speed, with a notebook... Because you just dropped so many gems. And that's what one of the things I really love about you. I'm gonna just shower you with praise, because you're my friend and I love you. But yeah, just - I think your takes on SRE are not just like on point, but I love the perspective that you bring being this observer from a different community that's really there to understand these practices, for better or worse, right?

I really do think having perspective as a software engineer coming into the space - it does give you this level of... There's something to compare against, right? And there's so many interesting aspects of the SRE, reliability, DevOps, whatever you want to call it, the ops culture as a whole, that have really creeped into software engineering, and I'm excited to explore that with you today.

The last time I saw you was a month-and-a-half ago, you and Divya, all the three of us hanging out at DEX, we were at Sentry's annual conference, having a good old time... And just listening to all these companies talk about their reliability, and you couldn't tell who was a software engineer who was SRE. And so can you talk about this cultural bleeding? And also is DevOps dead? That's the other thing; we said that we were gonna just -- "All you need is TerraForm, and engineers can now modify TerraForm and create TerraForm scripts... Who needs DevOps engineers?" And so I'm just trying to understand; it feels like we're still very much culturally bleeding into each other, but there's also -- I don't know, so... What's happening?

**Maggie Johnson-Pint:** Sure. So I have some -- like, if you want to get the hot takes going, you have opened up the hot take \[unintelligible 00:25:57.20\]

**Amal Hussein:** Yeah, let's do hot takes.

**Maggie Johnson-Pint:** \[00:26:04.11\] We had DevOps versus SRE, what's the better model, and people talking about those two things as if they're in opposition... So my co-founder at Stanza, Niall, wrote that SRE book, and when you go, "Well, what's DevOps versus SRE? Aren't they in opposition to each other?" and I was like "What?! Like, SRE is like one way that you can do DevOps, which is a set of principles that you would operate systems with a developer mindset..." \[laughs\]

And it's interesting, people love to be like, "Oh, DevOps is dead. Now it's SRE", and now we're getting the "DevOps is dead. Now it's platform engineering." And when you've been in this space for a while, you're like "They're all the same thing." Like geeze, all it means --

**Amal Hussein:** Oh, what does it mean?

**Maggie Johnson-Pint:** We have to be considerate operators of our online systems as developers, right? Like, when I said the SRE movement, or the whole SRE concept was rooted in this idea that we would move away from traditional ops... And for what it's worth, I do think there's still a place for traditional ops, especially -- like, I've worked for a cloud provider... Down at the hardware level - that stuff's \[unintelligible 00:27:10.24\] Like, there's a place for traditional ops, but for most of us who are living in the software world, we're all running online services. There's not like some people who aren't... Like, who are they?

**Amal Hussein:** I'm pretty sure there's a few folks running servers out of their basements, or whatever... Those things are still technically online, so yeah...

**Maggie Johnson-Pint:** Yeah. We're all running online services, we all have to ensure availability for our customers. We all have to respond and take ownership of our code. If you're a developer, the idea that you have an ops team that just like gets your code, and if anything goes wrong, they have to deal with it - wow, you really think a lot of the quality of your code, and the ability of someone who's never seen it to fix it themselves. Like, we all have to be responsible for our own code.

So I think the platform engineering movement that we see now is a response to this explosion in tooling that we see throughout the ecosystem, right? Like, we did get TerraForm, we did get Kubernetes. These are really powerful, but complex tools. We have a lot of options for hosting - we've got serverless tech, we've got containers, we've got traditional VMs... You just have all of these options for how you could set up infrastructure. And I believe the platform engineering movement is really rooted in "The more that we can standardize, the more that we can give developers this golden path that they can go onto, and we can make things easier, and we can make that operational story scale across more teams." I'm loving all of that... I'm going to call out, we were saying that in the SRE times, too... But I'm loving the focus there. I'm a little perturbed by the golden path narratives that I hear coming out --

**Amal Hussein:** Before you say that, what is the golden path? Can you define that for folks? When we were in San Francisco this past September, golden path was something that came up a number of times, like in speeches, in panels, and talks... So for folks that might not be familiar, what is the golden path?

**Maggie Johnson-Pint:** So the golden path is this idea that you would give your teams this sort of standard tech stack - standard build configuration, standard deployment methods - and push them down this path to success. And in general, every organization should be trained to do this, because it's too hard to operate a bazillion different technologies and have the expertise for how to run them, especially when you get into the SRE world... Like, it's unbelievably complex to get a robust Kafka configuration, for instance. Like, you've gotta know how Kafka works and why it works the way it does.

So I totally understand why people want to push towards golden paths, and like I said, to me it's one of those things where I'm like "Yeah, we've been doing that for years now, but... Okay, yeah. I agree."

**Amal Hussein:** \[00:30:01.02\] I mean, but don't you think that that happens naturally, though? Isn't that the path that is the most frequented, essentially, becomes the golden path? I feel like that's just like the normal evolution of software. There are best practices, we have abstractions that continue to shift the needle, and it feels like that happens naturally.

**Maggie Johnson-Pint:** That is the normal evolution of software, though I will say, what you'll find is that software is really diverse, and so needs really become very scattered as teams get bigger. So Microsoft is an interesting company; I worked there for years, and I can tell you that -- just in Azure; I don't even know what happens outside of Azure, at Microsoft. I've never worked outside of Azure. Just in Azure, for the internal engineering teams, there's definitely a golden path. Like, it exists, and it has always existed. But the diversity of services just within Azure would mean that that golden path was probably only used by half a teams, maybe... Like, genuinely. And it wasn't because they were trying to be rebellious. It was just like --

**Amal Hussein:** No, no, there's just too much gravity to shift, and I totally get that. And those numbers are also reflective of places I've worked as well. I totally agree, there's people that are on the newest version of a component system, and then there's people that are just too busy to upgrade, and they're like four versions behind. And those are all people that work at the same company, serving the same customer. That is just the reality of software, to use a kind of frontend analogy... \[laughs\]

**Maggie Johnson-Pint:** The thing you see play out in time is that if you get too committed to this golden path idea, and you say, "You know what - this is the way it should be done", and you start pushing really hard organizationally for that, then what happens is when a team falls off the golden path, you get weird cultural things happening, where people get angry. They're like, "Well, why did you have to do that that way? Why didn't you follow the rules? Why haven't you changed to follow the rules now, because you made that decision years ago?" But now \[unintelligible 00:31:58.12\] and you get to this place... Like, I've seen this at multiple organizations. So at a certain point, when we get really high on golden paths in our technical dialogue, I worry for us as we grow, because if there's anything I've sort of learned over the years, it's that you can't really tell people what's right for them... Which - by the way, take that deep, because that's not just software advice... \[laughter\]

**Amal Hussein:** That applies to everything...

**Maggie Johnson-Pint:** That applies to everything...

**Amal Hussein:** I'm eager to hear from Divya, because she's a platform engineer at Fly, and Fly is this other interesting company which is doing a very interesting bridge kind of service for software engineers, right? So Fly is the company that is also --by the way, full disclaimer, they're one of the sponsors of our show... So you may have heard an ad, you may hear an ad, I don't know... We just like talking about it, because it's cool new tech. I at least like talking about Fly. It's a fascinating company.

**Maggie Johnson-Pint:** I like Fly.

**Amal Hussein:** Yeah, it is.

**Maggie Johnson-Pint:** I'll chip in.

**Amal Hussein:** Yeah, exactly. So Fly is all about distributing your compute, right? So taking something like a CDN, and pushing that thinking all the way down the stack... So doing compute, and storage, and everything closer to users. So Divya, what do you think about this platform engineer role that feels like it's taking on, this hybrid like SRE/DevOps/software engineer, I don't even know...?

**Divya:** It's interesting, because I think a lot of what Maggie says rings true, that it's just a matter of -- because there's a lot more tooling, there's also a lot more understanding around how to get your code on the cloud, or somewhere where it's being served... So people want more control. The more they understand how exactly that deployment process works, the more control they want over it, and so that's where like tools like Fly come in, because it's very much like - it gives people control over how their deployments work, and like where code goes, and so on.

\[00:34:04.21\] The thing with platform engineering is - I have issues with the role also, because it just doesn't really explain anything, and also it does a lot, at the same time. And it's funny, because I think people think it's more hardcore than it really is. I'm like, "It's not that hardcore." It's just, you do a lot --

**Amal Hussein:** Wait, you mean you don't have spikes on your keyboard? Like, what's going on...?

**Divya:** yeah, I wish...

**Amal Hussein:** Busting myths over here...

**Divya:** It didn't come in. It's back-ordered. Just crazy back-order supply chain issues.

**Amal Hussein:** Right.

**Divya:** But the thing I'm noticing is that platform engineering bleeds into DevOps and SRE, to some extent, because you have to understand how the entire system works. And so that I think is where the complexity really is. It's not really like you need to know the nitty-gritty. It's sort of like you need to know everything, which I think is why it's very frustratingly complex. And I think that's usually where people struggle, and actually where I've struggled for a time, until now I'm like "Okay, I think I understand how stuff works." Because oftentimes, platform engineering people think about it as like you're building the platform upon which others will build their code off of... But then the issue is that when you're building a tool that is a platform-as-a-service, like Maggie had mentioned at length, it's just like you kind of have to understand all of those pieces, and then you also have to make sure that the experience of using it is really clean... And so traditionally, when we think of platform engineering, we think of people who are configuring and provisioning servers, and like dealing with the back of the back of the backend... But--

**Amal Hussein:** The Gremlins is what I call them. They just come out when things are down. It's like, I didn't even know you worked here. It's like, who are you?! It's like, "Oh, I'm Larry, the platform engineer guy." \[laughs\]

**Divya:** But also, what I'm seeing is -- I think that's where the power of someone who works on JavaScript, or the front of the stack, why their skills are really useful... Because they're used to dealing with customers, and they're used to dealing with users. And so when they come in, it's like, yeah, okay, they might not have knowledge of all of this, but you can learn that stuff really quickly, actually. And it's like, you bring that user experience in, and it makes for an amazing platform, because you're automatically like filling in all those gaps. And I think that's where a tool like -- I bring up Honeycomb a lot, because I think their user experience is great, and their UI is really slick... And it's very much the idea of bringing something that's so obscure, like observability, and making it very easy to understand and grok.

I think Sentry does something like that as well, even though Sentry is very much like specific to your web --

**Amal Hussein:** Errors.

**Divya:** ...errors, and like web-specific code... But I think the idea is like, platform engineering, SRE, DevOps - a lot of that, I think as we're looking at people understanding how their code is deployed, and like writing more complex things, or just getting more interested in the back of the stack, there's a need to bridge that gap. And that's where I think the power lies. It's not like trying to go and understand complex systems, or go get a CS degree; it's sort of like, you kind of have to understand all of it, and then fill in those gaps.

**Maggie Johnson-Pint:** There's a term we'll use in SRE... Have you ever heard ironies of automation brought up before?

**Divya:** I actually haven't.

**Amal Hussein:** I have not.

**Maggie Johnson-Pint:** Okay. This is very niche... Like, okay, I'm getting in the weird, academic niche stuff from SRE...

**Amal Hussein:** Yeah, do it. Do it. Go niche.

**Maggie Johnson-Pint:** \[00:37:44.27\] There's this whole area of study called human factors engineering, that actually predates software; human factors engineering has been around forever, and this is about... As we build or engineer automation - not necessarily computers; there are lots of kinds of automation - what kind of human factors do we have that can cause failure?

A great example of a concept in human factors is called the ironies of automation. It's like, as you automate things, you kind of get different problems, because what happens is while the system is working, everyone is happy, and the system is working, and then when it doesn't work, you sometimes have so many layers of stuff that actually nobody knows what to do, because machines were doing all of that. And people are like "Oh my gosh, what do I do now?"

**Amal Hussein:** Right...

**Maggie Johnson-Pint:** It's a horrible example, but the 737 Max falling out of the sky... There was a manual override, if the pilot knew it.

**Amal Hussein:** Oh, gosh...

**Maggie Johnson-Pint:** Right?

**Amal Hussein:** Yeah, so hence the irony of automation...

**Maggie Johnson-Pint:** Yeah...

**Amal Hussein:** I get that. I'm watching a show right now on HBO called Avenue Five, and I feel like it's another show that really -- I mean, it's basically about this driverless ship, with like a fake captain, and the fake captain is there to just appease the... It's to give the passengers a sense of human psychology safety... But things go wrong on the ship, nobody knows how to fix it, nobody knows how to do anything, right? It's like, "Oh, we're just a civilization from the future, and we've just automated trips to space." \[laughs\]

**Maggie Johnson-Pint:** And it's because infrastructure has gotten so big, you can't fit it all in your head. To Divya's point, it's like "Oh my gosh, you have to know a little bit of all of this stuff", which is actually a huge focus of ours at Stanza... Not that we have to go down that rabbit hole right now, but...

**Amal Hussein:** Yeah. No, we were going to talk about Stanza, for sure. You're right though, it is a lot to learn... And for me, that's where I feel like standards, and clean interfaces, and boundaries come into play... But it's so hard, because everyone has a snowflake stack. That's the other really big problem, is everyone has like 17 different ways that they're doing the same thing, they have very unique architectures, things talk to each other in roundabout ways at every different company... So how do you really observe it all? And I think for me that's the next big thing that the SRE observability world needs to conquer, is we have turnkey observability across your stack.

**Divya:** I was gonna say that OpenTelemetry I think is like a really good example of having open standards, at least -- that's specific to observability, but I think it's a step in the right direction... Because it's the idea of like taking all of these different ways in which people are doing it and then standardizing it, so that there's a pathway towards getting to how exactly you monitor systems... Which I think is like one aspect of things. And I think, Maggie, you were gonna say something else...

**Maggie Johnson-Pint:** So you're completely right, and we've been talking about OpenTelemetry... To me, the next frontier on it actually is not how we observe systems, but actually how we act on them. Like right now, from an automation perspective, if you want to act across the system, that's a very disparate set of tools that you're going to be using to manage all of those systems. I think that five years ago we thought, "Well, we'll put everything in Kubernetes", and as it turns out, people really like PaaS services... \[laughter\] And Kubernetes is really complicated \[unintelligible 00:41:03.10\] existence... And so there's actually a second kind of frontier around - there are certain kinds of operations, management operations, create a new research, spin down a research, scale up, scale down on, even like mitigate something, like shift traffic, that they're just whatever that tool does. But that to me is kind of the next frontier of where the standards aspect needs to go, because that sort of allows you to have -- you know, I started off saying Google has like a spaceship, and all the rest of us have a Fiesta, for our automation; and when you really push on what is the spaceship, it's actually control plane standardization.

**Amal Hussein:** Control plane standardization... Words I thought I'd never hear on a podcast. This is - again, there's so many things I want to nerd out about, and I'm really eager to hear what approach y'all are taking it Stanza to uniquely solve this problem. And again, fun fact, Maggie mentioned earlier one of her co-founders is the guy who wrote the famous SRE book, the Google SRE Book, Niall Murphy... Just lots to get into, so we'll be right back, everyone.

**Break**: \[00:42:10.27\]

**Divya:** So one of the things we talked about is how JavaScript engineers can be better stewards of their code, and be better partners with SRE, because one of the things that we focus a lot on this podcast is JavaScript engineers, and a lot of people who are listening are more front of the stack... So Maggie, do you have any pointers or certain things that a JavaScript or a frontend engineer can do better, or at least continue doing what they're already doing in order to be better stewards and better team players?

**Maggie Johnson-Pint:** One thing that I'll always remind people when you're working with SRE and infrastructure and platform teams is they are taking a lot of requests from a lot of people inside organizations, especially when they're large, and they're in a position that you always have to keep in mind where like they didn't ship that feature that a million people use, that made a billion dollars... Like, really, their moment comes when something goes wrong. Like, they're getting the really short straw. And so I think it's always really important to remember when you're interacting with teams in that space, there's been a lot of focus on culture in SRE, and making sure that we have positive interactions and we're always lifting each other up, and I love that as part of the movement. But I think the first thing is always to have patience.

I also think it's really worthwhile to just read up on SRE practice. So we've referenced many times my co-founder's book, this Google Site Reliability Engineering, which is quite a well-known text in the space; it's hefty. There's another book that he also was an editor on called the Site Reliability Workbook. And actually, if I were gonna recommend people pick up any book about this, I would recommend that one. And what that is is a series of practical exercises and steps you can put in place in an organization to have better reliability. But the nice part is it's a little more bite-sized book. And if you just want to sit down and understand "How do I do good incident response? How do I establish SLOs? How do I come to understand some processes about how we do post-mortems, and how we think about the human factors in our incidents?" and things like that. The SRE workbook will definitely get to that in a little bit more bite-sized way.

And the other thing I would definitely recommend is, if you just want to learn more, you can pick up all of the SREcon series of conference talks are available out there; they publish them. SREcon Europe just happened last week, so there should be hot-off-the-press talks. Those are definitely worth looking up as well.

**Amal Hussein:** I can share some perspective as an engineering lead, engineering manager. I think for me, I'm often that person that has to think about what is my definition of Done, and it's very different than even just my lead engineer sometimes. You know, she's off doing something else after; I'm still thinking about the project that just shipped. I'm thinking about, "Okay, how are we going to train our support engineers? How are we going to document this? How are we going to do knowledge transfer? How are we going to share this in the organization?" I'm thinking about, our integration tests and end-to-end tests... I mean, definition of Done for me is a very different metric. It's not just code shipped, like "Done."

So there's the kind of maintenance, and education, and the socialization of your code that really needs to happen in order to really take care of this and usher this baby into the world gracefully, right? Communicating the changes is another big one. And I think for me, a level in that is what's your observability story, what's your analytics story, have you had hand-off with your DevOps, SRE team, your security team... There's so many other aspects. Once you've released the code, it belongs to the company; it's not just this little thing that your team is working on. And so how do you Usher that code gracefully into your organization is something I, as an engineering manager, as a tech lead of many years, that's what I worry about.

**Maggie Johnson-Pint:** \[00:48:13.06\] One thing to that point of how do you usher code into an organization, one thing that really I think we're coming to a head on is the moment that product teams and infrastructure teams need to reconcile over is all the time when I talk to infrastructure teams, they're like "We're drowning in work. We can't even get out. We're getting paged every five minutes, and product does not care. They're gonna ship anyways." And I think that's something that it's really hard to hear every time I hear it. When I do customer interviews, I hear it -- geez, every other one. And so I think just being mindful that \*bleep\* rolls downhill, and that's where your \*bleep\* \[unintelligible 00:48:47.03\] and talking about "Are customers getting the right experience? And are you as an infra team living a life you can handle on a regular basis?" Just those two things - do the customers getting what they need, and are you getting what you need? If product teams can come in and do that, and just ask those questions instead of assuming that that's true, it's gonna go a really long way.

**Amal Hussein:** Yeah.

**Maggie Johnson-Pint:** Especially -- like, if you can go to an SRE team and say, "Actually, customers aren't really complaining about availability. That's not a high concern for them. Maybe we can actually tune down some stuff. Maybe you don't have to be working as hard as you are." Like, they're gonna assume that they need to be working that hard until told otherwise, right?

**Amal Hussein:** Until told otherwise, yeah. That's a really good point. Yes to all of this, and I can talk about this for hours. I really want to make sure we have a chance to talk about Stanza. I know it's very early in the company's journey, but you've recently left a plushy full-time job at Stripe, a place that we both worked together for a little while, to kind of go and like start this new baby. So what unique problems are you all trying to solve? And I feel like we've touched upon a few of them already, but I'd love to get some more concrete messaging there from you.

**Maggie Johnson-Pint:** Yeah, so Divya almost spiked me earlier, whether she wanted to or not... \[laughter\] Really, our mission at Stanza is to help you make sense of production, and then take action in a way that quickly resolves issues and gets people up and running, and then over time is proactive, instead of reactive.

Conceptually, we're actually doing a lot of work with ML. So right now, what companies have is, if they're lucky, they have a good distributed trace \[unintelligible 00:50:23.14\] using OpenTelemetry. But most companies are not so lucky as to have that everywhere. And so what we're actually doing is using a lot of machine learning to train models to correlate signal across various systems. Nearly every company that I talk to has both Datadog and Sentry. It's funny, but it's true, because Sentry monitors JavaScript, and Datadog monitors the back end. And then you might have Honeycomb, too. You probably have pager duty, you probably have things going on in Slack...

**Divya:** Elastic...

**Maggie Johnson-Pint:** Yeah, and you can't correlate all of that stuff. And it's all just like random data.

**Amal Hussein:** Kibana...

**Maggie Johnson-Pint:** And so we're working on correlating that data, associating it with the service or system that it relates to, and then helping you get this real-time map of production. Sometimes I call it almost like the Shadow DOM; I call it the parallel production, but it's just like this parallel in-memory representation of what you have in production. Once you have that, then you can start to do things like actually bring reactivity patterns. "Hey, I saw that this series of events occurred. Maybe we need to restart; maybe we need to traffic-shift." And you can start to detect patterns, common patterns in production to increase availability, or to do graceful degradations...

**Amal Hussein:** Or inference, right? Because you can infer which systems also work together, which is something that is hard when things are across multiple stacks, across multiple tools, right? It's hard to say that like "This error that I'm getting in my email service is related to this microservice", right? Because there's like maybe three things or four things in that chain.

**Maggie Johnson-Pint:** Yeah.

**Amal Hussein:** So inference seems to be another problem that you all are technically solving as well.

**Maggie Johnson-Pint:** Absolutely. If you can pull the data together, you can start to make some inference of dependencies you may not have known about before. And yeah, it's all rooted in just starting to get some ML, so that we don't have to manually make all of those correlations, because it's wild to do.

**Amal Hussein:** \[00:52:14.06\] Yeah. It's like a losing game, because it's like Hungry Hippos, or it's like weeding your lawn; it's like, you just weed it, and then there's another weed that pops up on the other side, or just where you de-weeded. Because systems are growing, and ever-evolving, and so this idea that you're gonna have everything kept up is just wild, right? So having a system that actually is able to observe your system as a whole, as opposed to add this one other package, add this library, add this SDK to your micro service... And then somebody creates a new microservice and they don't add the SDK, or they don't use the new starter template... And then you just lose the story, right?

**Maggie Johnson-Pint:** Exactly.

**Amal Hussein:** It's like a losing game.

**Maggie Johnson-Pint:** Exactly. And for companies with legacy tech, sometimes it isn't even viable. Like, you aren't even going to crack that code open. You can maybe \[unintelligible 00:52:59.16\] but beyond that it can be really difficult. So that's why we definitely took this more fuzzy approach where we're like "Let's see what we can machine-learn out of the data." It turns out, surprisingly a lot of correlation we can make there, and yes, inference. And then over time, where we want to work to is, like I said, that standard control plane, where if we understand what we can do on things, and we understand what series of events are happening, then we can start to make linkages that right now very little makes; like, right now most tools are either like you see stuff, or you do stuff. There's not a whole lot of see stuff/do stuff tools out there.

**Amal Hussein:** \[laughs\] See stuff/do stuff. Yeah, you're right, actually; it's like, you see stuff or you do stuff. You can't really do both. But what is the input, though? So how are you ingesting data? Give me an example.

**Maggie Johnson-Pint:** Yeah, so right now, I actually mostly pull alerts. So alerts can be generated out of Datadog metric alerts, because CPU is running hot, or something like that. Or you could pull it all out of like Sentry; it'll give an alert to your frontend dev when the errors cluster, or things like that... And we'll parse actually service names, AWS resource names, things like that out of alerts, CloudWatch alerts we can do, and we'll pool them together and we'll cluster them, and in that we can start to build out a graph of what you have in production. And because we can time-cluster them, and also because we tend to know with alerts the nice thing about them is what team they belong to, because they get sent to someone to page (it's terrible), we can use both team relationships and time clustering to start to bring together and infer what relationships you have in production.

So that's a lot of the data we use... Over time, we really want to start to bring in log data where we can, and start to bring in OpenTelemetry... You know, OpenTelemetry is always going to be more accurate than us when it can be there, and when it's complete and plumbed; and so ideally, you start to overlay the OTL traces onto the inferred data to get that more complete picture, and that's pretty high on my roadmap as well, to start to do that overlay.

**Amal Hussein:** Wow... That's super-cool. Yeah, because that was gonna be my question, is how do you know you've captured everything... Because it's one thing to have an SDK that's running on every single service, or some job that's running, like clicking all the buttons, or hitting all the boxes... You're just looking at data assuming that it's being published, assuming that the service names are parsable etc. So it'd be interesting to see what checks and balances you can have to cross --

**Maggie Johnson-Pint:** Yeah. It's definitely a model that sort of accepts imperfection at it's heart. It says "Well \[unintelligible 00:55:27.07\]

**Amal Hussein:** Yeah, yeah, yeah. No, tremendously exciting though... I think for me what's interesting is - first of all, every time you said the word "ML", I thought you were saying my name.

**Maggie Johnson-Pint:** \[laughs\] Machine learning...

**Amal Hussein:** I was like, "Amal, Amal... She's working a lot with Amal..." I was like, "Oh, are we working along with me?" I'm like, "Oh, interesting." I'm like, "I don't know, I'm just getting over COVID." Honestly, it's amazing I can even think right now. So it's like, okay, ML... So this idea of tools and systems of people; and for me, the best teams are where the people from different departments and different parts of the stack are working together, and the tools are all talking together... It's this mythical unicorn world that I feel like I've seen slivers of it here and there, but I've never really seen it totally work in organizations, especially at scale. And so how does Stanza help bridge the people and tool gap? Because that gap is real.

**Maggie Johnson-Pint:** \[00:56:27.16\] That gap is real. So one thing that I'm focused on - actually, I'm writing out the feature set this week, and the engineering team is starting on it, is helping people see things that are relevant to them. Like, the problem with a lot of mapping tools and a lot of tooling out there is it just gives you a puke of everything, from everybody. And a lot of the work that we're putting in - like I said, part of the reason we started with alerts is you can associate them with a team - is to help people see sub-graphs of their production system that relates to them, and then on the edges of the graph, instead of telling you about the whole world, tell you "Hey, just so you know, the next cluster graph over is this one. The next cluster graph over this way is this one", to help people build out a model of where they sit technically, and where the teams around them sit technically.

And right now, a feature I'm working on building out - I call it "Spotify style onboarding." Like, what GitHub repos do you care about? What servers do you care about? And I think that starts to help us at least get in a place where we can reason about what belongs to us.

The nice part about graphs \[unintelligible 00:57:24.11\] in graph theory is you can actually use graph traversals to say, "Well, what's within three traversals of me? What's near me?" And I think this will help organizations start to reason a little bit better, and start to understand how data is flowing through their system, and understand those ownership models, and hopefully have a better shot at collaboration, instead of just "I don't know. I don't know whose that is, I don't know where it belongs." And hopefully that starts to set some new cultural paradigms we can work under.

Definitely, when you talk to people who came out of that Google SRE, they said the best thing they had going for them was this ability both to cross-observe and to cross-automate. It wasn't like you had to go beg another team to do something for you. And so whatever we can do to enable people to work through the full scope of the system without begging and yelling...

**Amal Hussein:** Yeah. And also, self-service is huge, too. But yeah, that is so cool. I think for me, like, self-service, you need this idea of like every service, every team, every functional group, whatever - there should be a front door, right? Like a front door, a waiting room, a set of instructions... Some random person shows up, it's like "Well, what am I doing here? Am I my being greeted? Am I being helped? Am I being serviced?" Like, is it obvious what's going on?

**Maggie Johnson-Pint:** \[00:58:50.17\] If you've heard the term inner source, the idea that you could contribute across code bases, or build out internal collaboration models - you \[unintelligible 00:58:56.05\] situations where if a team understands their sub-graph of resources, and they understand what they usually do to diagnose it, or to mitigate incidents on it, they should be able to contribute those diagnostic tools and those mitigation tools to a broader graph. And then if your team encounters that team, and you're like "I don't know if it's them or not. Do I want to wake them up at 3am?" You can say "Hey, can you auto-diagnose?" or just like "What if we try your default mitigation script, and hopefully we can give some people some freedom to not be in some of the bigger..."

**Amal Hussein:** Yeah, not get pulled into everything, right? Not get pulled into every single call. Yeah, I love that concept. And yeah, that is super-cool. I think understanding how many traverses away you are in the graph also can help you make decisions like that, right? You can make an educated decision around like "Okay, which team do I need to pull in? Who do I need to pull in?" And knowing that you're upstream from these people and you're downstream from these people also helps you create your service plan, right? It helps you develop your front door story a little bit better, too.

**Maggie Johnson-Pint:** Exactly.

**Amal Hussein:** So this is fascinating stuff. I could talk about this for literally hours. Maggie, I've learned so much from you today; I'm sure Divya has as well... And just thank you so much for gracing us with all this SRE knowledge. I feel leveled up, somehow, after this conversation.

**Maggie Johnson-Pint:** I've loved it. I am glad to be here.

**Amal Hussein:** I want to ask you this before we close out - so if you could wave one magic wand, and just like improve one story, specifically for the JavaScript community, around ops... It can be as broad as you want. What would that be? What's your magic wand wish?

**Maggie Johnson-Pint:** I see in JavaScript engineers a lot when we get into this infrastructure and reliability stuff, I see a knee-jerk reaction of "I don't understand it, and I don't want to deal with it often." And it's natural, because it's overwhelming. And really, the only thing I want to fix for people is I want to give them an experience where instead of it's, "I don't understand it and I don't want to deal with it", it's, "I have the tools to understand." I think that the idea that we're going to sort of build these platforms that hide everything, and the engineer is just going to like happily \[unintelligible 01:01:17.14\] their JavaScript with no idea that distributed computing is happening is unlikely to ever come true. And so my goal that I want for everyone is just to help them have the tools to understand what they need to understand, without feeling overwhelmed.

**Amal Hussein:** And Amen to that. I could not think of a better way to end this show, seriously. So where can people learn about Stanza, where can people connect with you and your team? Give us the deets.

**Maggie Johnson-Pint:** Yeah, absolutely. So you can find Stanza at stanza.systems. And we would love to talk to anybody who has online services, any size organization, about that; we will probably be going to start private beta in the new year, probably around January-February timeframe. So if it sounds like something you'd like to try or be interested in, I would actually love to hear from you there. You can hit me up on Twitter as well, I am at @MaggiePint. And on LinkedIn - do people use LinkedIn? It's there.

**Amal Hussein:** People do, yes.

**Divya:** If you want to literally ask me or someone even better at SRE than me questions, all you actually have to do is hit the Book a Demo button on stanza.systems. We're an 8-person company. That's my personal calendar. Hit me up.

**Amal Hussein:** Oh, yes. Awesome. So we'll put links to all of this in the show notes, including the Book a Demo link. I'm so excited to learn about the problems y'all are solving. So excited to finally have you on the show, Maggie; you're a longtime great friend of mine. Thank you again for gracing us. Thank you, thank you, kindly. It's been an absolute pleasure.

**Maggie Johnson-Pint:** Yaay!

**Outro:** \[01:02:47.20\]

**Horse JS:** Web components has egg on its face because that zeitgeist.
