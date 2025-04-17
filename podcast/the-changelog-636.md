**Jerod Santo:** We are joined today by Stephan Ewen from Restate.dev. Stephan, welcome to the Changelog.

**Stephan Ewen:** Hey, thanks for having me. It's a pleasure.

**Jerod Santo:** Pleasure to have you as well. Adam, how are you doing, man?

**Adam Stacoviak:** So good, Jerod. How about you?

**Jerod Santo:** I'm doing well. Always excited at the beginning of a conversation to dig into something new, something different... And something called Restate. This is supposed to be the simplest way to build resilient applications. This was a requested show, Stephan. So we do take episode requests. This listener would like to remain anonymous.

**Adam Stacoviak:** Ooh. Secret.

**Jerod Santo:** However, they say that Restate is a super-exciting approach to managing distributed systems. And they say that we should get you on the show, and so we just take orders around here, and our listeners often get what they want... And so that's how we found you. It was through a listener request.

**Stephan Ewen:** Awesome. That's very cool to hear. It's that open source communities at work, and all that.

**Jerod Santo:** That's right. So Restate. Let's not get into Restate itself at first. Let's talk about resilient apps first, because this is called -- tagline, "The simplest way to build resilient applications." Let's talk about that. What is exactly a resilient application in your estimation?

**Stephan Ewen:** Okay. Yeah, so the way we think of it in the context of Restate, we're talking mostly about the backend of the application, the coordination and orchestration logic. A resilient application would be an application that doesn't accidentally drop your order, that doesn't accidentally place it twice if you hit F5 at the wrong point when you're in the browser, that doesn't accidentally book your Uber for two people instead of for one, that doesn't just disconnect you from your chatbot, lose the history, make you start over... All these kinds of things. This is what we're talking about when we mean resilient apps in the context of Restate. So basically, apps that tolerate all sorts of hiccups, errors in the infrastructure, unavailable endpoints, network failures, process failures, temporary outages, but also types of programming glitches that cause requests to fall through, and having to be retried in order to process reliably, but then not get duplicated, but the system understanding how to idempotently treat them as a retry, and not as a second request. This is sort of the bigger picture of what we mean here with resilient applications.

**Jerod Santo:** Can you take a moment to demystify that term that you just said, idempotently, so everyone's on the same page? What does that mean, idempotently?

**Stephan Ewen:** Yeah, I think idempotency, you can think of it as just understanding that a repeated request is actually not a new request, but it's the same request again. You're just sending it again because you were maybe disconnected from the original request, or you got an error back. It's the thing that if you don't do it correctly, that is actually accidentally placing an order twice when you did try to place it once.

**Jerod Santo:** Right.

**Stephan Ewen:** It's the thing that many applications don't get right, and that's why you still see too many websites saying "Don't hit F5 while this is showing."

**Jerod Santo:** "Do not reload while we finish this transaction."

**Stephan Ewen:** Exactly, because it doesn't understand that you submit the thing again, and this is actually supposed to be the same thing. It's just another submission of the same request. It has no way of identifying that, so it might accidentally treat it as a second one, or it has just a very rough way of doing this. It's a surprisingly complicated problem, and there's lots of applications that don't get it correct, and there are lots of weird ways applications work around this.

\[00:08:12.29\] As a fun fact, I think the first bank where I was a customer, they did only allow you to wire to a certain recipient, a certain amount once per day. If you were trying to wire the same amount to the same person a second time for the day, they just wouldn't allow it, because they didn't know if that was a retry from your browser, or if that was something stuck in a queue at some point in time... That's just how they duplicated it.

**Adam Stacoviak:** Interesting.

**Stephan Ewen:** So generally, idempotency is deduplication in a meaningful way, understanding retries versus new requests.

**Jerod Santo:** Yeah. That's called overkill, I think, when they did that. They're like "How can we just use a blunt tool to solve this tiny little problem? Let's just not let you do more than one per day." Not ideal, surely, for lots of uses. Okay, so same request twice; operates the first time, won't operate the second time. Generally speaking, how do you achieve this? I mean, you could just limit to one request per day, but if you're not going to do that, how do people usually implement or ensure idempotency in their applications?

**Stephan Ewen:** Yeah, so in a way, you basically have to find a way to anchor the identity of requests all the way through. There's different standards for doing that. The HTTP standard has actually defined a header where you can put an idempotency key, and the servers, when they support this, they're supposed to understand if that key is set. A previous request with the same key has come, and the same parameters, so this is a duplicate request for the same operation. But then, down the road, you basically just try to anchor requests and the processing of different steps in each other.

When you do message queues, you place correlation IDs. When you're working with databases, maybe you try to address primary keys, or transaction IDs, or \[unintelligible 00:10:14.22\] or tokens... There's tons and tons of tricks people do, but it's ultimately still a very hard problem to do if you want to do it end to end.

**Jerod Santo:** It's kind of a mindset. You have to set out to do it, don't you? Otherwise...

**Stephan Ewen:** I think you have to design from the start for it. The weakest link in the chain that breaks, it's one of these things. Yes.

**Jerod Santo:** Or you can just say, "Do not reload your page while you're hitting this API."

**Stephan Ewen:** Exactly.

**Jerod Santo:** \[laughs\]

**Stephan Ewen:** It's the simplest way to do it. Just make it the user's problem and don't handle it in your infrastructure, yeah.

**Jerod Santo:** Also, as an engineer, when I've achieved idempotency, I know it feels very good when you're like "Okay, I'm for sure not going to do double execution in this particular code path." That feels good. And as an end user, I'm also happy when I know that I'm not going to get charged twice, for instance.

**Stephan Ewen:** That's right. So you can actually see good APIs design this in from the start. I think the first API where I came across that where I thought that was really, really well done was Stripe's payment API. You can really see -- I think that's also why it got so insanely popular so quickly. The way they made that handling just seamless for folks that embedded this into their code to really understand "How do I make sure I set this request once?" and deal with all these things... That was really stellar.

**Jerod Santo:** Alright, so here's a harder question. Where does the word "idempotency" come from, and why do we use that to describe this thing? It seems unnecessarily verbose and jargony. Do you know?

**Adam Stacoviak:** You should spell it first, Jerod.

**Jerod Santo:** I-D-E-M-P-O-T-E-N-C-Y would be the adjective. Do you know? If you don't know, you can just say "I have no idea." \[unintelligible 00:12:00.20\]

**Stephan Ewen:** I don't really know, but my guess is it's a Latin word. It comes from Latin originally.

**Jerod Santo:** It does sound like that, yeah.

**Stephan Ewen:** I don't know.

**Jerod Santo:** \[00:12:12.07\] It's all Greek to me... Maybe we can get a real time look up for that and follow up on it from some sort of LLM. Just prompting Adam behind the scenes to prompt his favorite LLM.

**Adam Stacoviak:** Yeah, I'm on Wikipedia as we speak...

**Jerod Santo:** Okay, good. We're stalling for you.

**Adam Stacoviak:** I don't really have the details here for you, Jerod. I'm sorry I can't LLM quickly enough for you, but it says "Idempotency is the property of certain operations in mathematics."

**Jerod Santo:** Alright. I went straight to the LLM and I got the answer to my question.

**Adam Stacoviak:** There you go.

**Jerod Santo:** So "The term idempotent comes from Latin roots." So Stephan, excellent call there. "Idem meaning the same, and potent meaning having power or being able to. Put together, idempotent roughly means having the power to remain the same."

**Stephan Ewen:** Mm-hm. Wow.

**Jerod Santo:** So there's the actual word. And then, yes, mathematics, blah, blah, blah. I've stopped reading now, so hopefully that wasn't a hallucination and we can all move on happily.

**Adam Stacoviak:** Oh, yeah.

**Stephan Ewen:** No, that sounds about right. Like, if it's an hallucination, it's a --

**Jerod Santo:** It's a good one.

**Stephan Ewen:** ...close one.

**Adam Stacoviak:** \[unintelligible 00:13:12.29\]

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Yeah, I-D-E-M plus potency - same plus power.

**Jerod Santo:** There you go. It's the same power. Very cool. Well, thank you for scratching my itch, my curious itch there both of you, and ChatGPT, I suppose, pitched in on that one. What else? So we're talking resiliency... I'm curious -- obviously, to have a resilient app just good... Like, who wouldn't want these things? And just taking one of those things, idempotency, and realizing it's hard to achieve on your own, throughout especially more complicated applications... Why did y'all set out to solve this problem for folks, to build Restate, and why did you feel like "I'm the guy for the job"?

**Stephan Ewen:** Yeah, that has a long answer and a short answer. I can start with a short answer.

**Jerod Santo:** Okay.

**Stephan Ewen:** The short answer is it's really, I would say, the state of the art to build backends that are supposed to -- backends that do any non-trivial state management and coordination, it's completely unsustainable, I think, the way we're building this today. Just to give you an example... Or let's actually start with an example. Let's stay with LLM, because we just talked about it, right? So let's say you're building a chatbot; you're submitting something, like a message there... This thing in the end has to reach the LLM, but it has to look up the context in which that chat happened before, it has to make the call, it has to go back, store the context... You don't want it to just lose everything if you lose your connection in the middle of -- let's go with the F5 thing again... You don't want it to actually trigger the same request twice, or lose the entire session, make you start over. So you're probably just putting this as an asynchronous request that runs in the background, that you're sending from your from your chat session, from your browser, but it's a separate asynchronous request that runs, that talks to the LLM. You want it to be actually retrying in case something fails, or is overloaded and it's throttling your \[unintelligible 00:15:19.22\] And then you want to be able to reconnect to that task or request in case something goes wrong in your browser, or you accidentally hit the Back button, or whatever. Just implementing this is a surprisingly complicated thing, where you start to stitch together probably a queue, a database, and a bunch of tasks to manage that.

To give you another example - we just talked about Stripe, right? So let's say you're sending a request there for a payment, and sometimes they tell you "Look, this is good or bad." Like, they accepted it or didn't. Sometimes they tell you "I don't really know." "Our fraud detector is still running." Or "We have some weird thing in the background that we're still asking, and it hasn't told us, so I'm going to send you a webhook in a moment to tell you whether this went through or not."

\[00:16:02.11\] And now you have like a synchronous request there, and then somewhere else is an asynchronous request coming up. You just want to make those two reliably meet. Even if this one fails, you want it to sort of like recover somewhere, understand where to reconnect with the webhook that you're awaiting... And this little piece - it's really just one case handling in the backend, where Stripe says "Okay, I'm processing", instead of yes or no. This is actually many days of work, to make that look reliable, to make that work reliably. And it's like lots and lots and lots of things like this, that just get in the way, with so many moving pieces, so many... Yeah, so many APIs to talk to, so much work. So much more work than originally happening asynchronously, and like in separate requests, than just in the synchronous user interaction. Just gluing this all together has become such a complicated thing that we felt "This does need a better solution."

This is like the motivation more from, let's say, the use case side. I can give you a motivation more from like why we actually ended up doing this. I think this is a motivation that probably lots of folks stumbled across ultimately, and so like "Okay, this needs a better solution." I think there's different projects approaching that problem. Why are we approaching it the way we're doing? This has to do with where we come from. Before we worked on Restate, we were building Apache Flink. This is a different system. It's a stream processing framework. It's basically events and analytics. So you have these events coming in, often through a message queue, and you want to aggregate them, join them. A few examples where this is used is like fraud detection in banks. Some payment events go in, you aggregate feature vectors of that through a fraud model, or... Things like the TikTok recommender use Flink to actually join information from users and interactions together in real time, and understand how to update the features that will go into the recommendation model. I think companies like Uber use it to determine pricing and traffic models and ETA.

So it's whenever you have events and you want to analyze them in a way that you aggregate them into some sort of -- yeah, typically statistical value, or a materialized view. This is what we were building before. So it's an analytical framework. What did actually happen then is at some point in time we saw folks were using that thing to solve the distributed transaction processing. The types of things where you would say -- let's assume an order processing service that takes the event, checkout that order, and it has to do a bunch of steps. Let's say update the inventory, trigger payment, call the service to prepare logistics, maybe call another service to put this in the user's history... Maybe more steps, and so on. And we started to see folks using Flink for that, because it had this interesting property that it had sort of this baked in way of reliable communication and state management. It was all built for analytical use cases. But they found this is such an interesting property that they started to apply this to the transactional use cases as well, like order processing, just because they've found that this is otherwise way too complicated to build... Way too easy to build it in such a way that it is brittle and not scalable, and it has corner cases for when it violates a lot of these properties that we've just said.

\[00:19:48.21\] And when this started happening repeatedly, we thought "Okay, but apparently there isn't really a good tool out there yet." And apparently, this property of like correct, stateful coordination is something people really appreciate. They feel like it makes their life easier to build this type of frameworks. And then we set out to build a solution for that, and that became Restate.

It's in many ways, actually, from the way it approaches things, or from its architecture, it's inspired by our work on Apache Flink...But it's almost a complete mirror image implementation of it. It takes almost the opposite design choice in most aspects, because it's really optimized for low-density transactional processing, rather than high throughput analytical processing, which was Flink. But what we retained from this idea is - yes, stateful orchestration, and event-driven foundation and so on, this is something we should build and we should be working on. And yeah, that became Restate.

**Adam Stacoviak:** What's the timing in all this? When did Flink start? How mature was it, or is it? And when did Restate be born out of the idea? Give us a context in time.

**Jerod Santo:** Yeah, so this context is measured in decades... \[laughs\]

**Adam Stacoviak:** Okay, that's useful.

**Jerod Santo:** So yeah, I mean, Flink was officially founded in 2014, but the work that became Flink is back to 2010, when I was still in university. So it was like four years of academic work, and then Flink started 2014. I worked on it until 2022, so eight years after it became an open source project. And then I left Flink, because I needed to work on something else for a change. And then we started working on Restate... End of '22, early '23. So Restate is a bit over two years old now. Flink has had its 10th anniversary last year. Flink is super-mature. I think it's used by thousands and thousands of companies at absolutely insane scale. The probably largest installation of Flink that I know must be Alibaba, who runs tens of thousands of cores for like a single processing pipeline, to live-compute their e-commerce search and recommender continuously. Restate is not quite as old and quite as mature as Flink...

**Adam Stacoviak:** Yeah, two years.

**Jerod Santo:** It's been two years. But we've released our stable 1.0 last summer, and we've recently released our first distributed, replicated, highly available architecture... And I have a bunch of folks that actually productively use that, so I would say we're on course to get there.

**Adam Stacoviak:** Nice. Was leaving Flink difficult? Sad? Joyous? Like, what was that like when you left? Because that's a long time to work on one thing, and then to move on to that thing... I mean, you become pretty attached, don't you?

**Jerod Santo:** Yeah, absolutely. So it is definitely a difficult thing... And it was not just leaving Flink. So we created Flink as an open source project, but we also built a company around that, and the company went through an acquisition, but we actually still stayed there, started building and growing the team... So I was simultaneously leaving the open source project and the company I'd built, and everything... And absolutely, it's a difficult thing, because that becomes like your baby. It's actually like two babies, in a way. The project and the company. But yes, I feel -- at some point I felt like there's this... I don't know how to say this in English, but I felt I was getting this tunnel vision on problems. I've been working on this for so long, and I've seen so many repeated things that like whenever I heard a problem, I was just like putting it into this category that I knew. And it started happening that I did that with things, and I later realized "Oh no, that wasn't actually the right thing for that problem. That might've been for the last nine, but this one should actually have been different." So you get this kind of... If you work too long on the same thing, you're starting to not see the forest for the trees, and I felt I was reaching that point... So it sounded like, yeah, I should probably start doing something new.

**Adam Stacoviak:** \[00:24:20.21\] It's kind of like familiar grooves in your brain. If you just go to the same thing over and over again, it's like your brain gets new grooves, and then different problems fall into those familiar grooves, and they just slide in there... Sometimes when they don't even fit, or they aren't a good fit. I certainly understand that. I think when you've focused on one thing for a very long time, it is hard to think outside that groove.

**Jerod Santo:** For sure.

**Adam Stacoviak:** And it's interesting that you're building a similar system, spiritually similar, but I guess you could say radically different architecture. Is that the way you described it? Like, it's inspired by Flink, but it seems like it takes the opposite approach to the world.

**Jerod Santo:** Yes, I think you could call it like that. It is under the hood still an event-driven system, as Flink is, but it is built for completely different \[unintelligible 00:25:16.02\] Just to give you an example, the core of Flink is the way it is this exactly one stateful processing, so it basically has these data streams that it keeps moving, operations that do stateful stuff with the events, count, joined, and so on... And then there's this asynchronous process running in the background that takes these consistent snapshots. So if something goes down, you can restore the state from the snapshot and just start the flow from there. And it has this clever way to do this in a way that maintains consistency across all the parallel machines, and it does that efficiently, incrementally, frequently, and so on. But it's a very throughput-optimized thing. So it stays off the critical path, if you wish; it runs in the background. So yeah, it's really good for throughput, but it does this persistence operation once every couple of seconds. If you tune it to be very frequent -- most people actually run it more in the order of minutes. So when something goes down in a pipeline, you just replay the last minute of data, which typically doesn't quite take a minute, because it replays faster than the original, the data rate at which the events are produced... But still, it takes you back a certain amount in time, which is usually okay for analytics. The worst thing that happens is, okay, this feature here in that vector that goes into that traffic model or that recommendation is maybe a few seconds older than it would have otherwise been. It's not such a big deal, typically.

On the transactional processing side, imagine you have this multi-step process. You want a really fast checkout process, and you say "I do want to just start the next step after I know the payment has gone through. Before that, I'm not updating inventory. I'm not kicking off any of the other processes." Then you really need actually a persistent step to be recorded, ideally in milliseconds. Maybe it's not that critical for the processing, but we're building this for even more low latency use cases, like payment processing and settlement and so on. And there, you really just want to kick off the next step after -- you know, the previous step is persisted, possibly in a multi-data center replication way... And only then do I start the next thing. So you have to really design this completely differently. It's completely optimized for low latency, transactional durability, rather than analytical throughput. So yeah, it's a completely different design, even though both ultimately are event-driven architectures.

**Adam Stacoviak:** Right. But your atomic unit now is compute, right? Like, it's logic. And perhaps data that comes from that. It's a transactional step. And so you can't just skip a transactional step, because there's a workflow here, and certain things rely on other things... And so the way that you think about durability as opposed to analytical data is, like I said earlier, radically different. That makes sense to me.

**Jerod Santo:** Yeah, exactly. The atomic step in Restate is extremely fine-grained. We're really building this in such a way that you should feel comfortable in a program that you do to use Restate to persist fine-grained steps, state updates... It uses internally actually this durable mechanism for leader election to understand that it can lock and fence off different retries... And this is such a fine-grained nature. What's really important is that recording a durable step has the lowest possible latency, whereas in Flink, the atomic step is like a couple of million events being aggregated together in some state distributed over 10 machines. So that's one atomic step. It's completely different, yeah.

**Break**: \[00:29:08.12\]

**Adam Stacoviak:** This word durability is being used a lot... Durable execution, durability... What exactly is durability? Doesn't fall down, doesn't break, always good?

**Stephan Ewen:** Yeah, yeah, yeah. Yeah, something like that. I think durability is probably the same as persistence maybe, with a bit of a stronger emphasis on it really doesn't get lost after it happens. So durability is the D in ACID when it comes to databases. Databases say "We're giving you atomicity, consistency, isolation, and durability. Once you do an update, we're not going to lose it." No matter what crashes, the database has a mechanism to bring that change to the database back. If I told you I've recorded that row, I've recorded that change, it will be there, no matter what. And in the context of Restate, that doesn't mean -- for example, the core building block of Restate is a stateful, durable function. You can think of it like that. And the stateful, durable function, when you schedule an invocation for that, or as you go through the code of that stateful, durable function, it has like multiple steps, recording a step. Whenever you go beyond a step that you asked Restate to treat as durable, you know that no matter what happens, you will never re-execute that step. You'll never come up with a different value. Like, if your machine goes down, the Restate server goes down, if you deploy it across availability zones, the data center goes down, the network gets partitioned, whatever, you'll never ever go back and re-execute that step if it once told you that it's done it. TThat's sort of the meaning of durability. Once it says it's there, it's always going to be there. And I think this is, in a way, almost one of the magic ingredients.

The way Restate looks at making distributed application development simple... I'd say there's two core pieces that you need to think about. One of them is the durability; make durability extremely fine-grained, and extremely cheap. Because if you can apply durability in fine-grained steps, you always have to worry about very little after a failure. Let's say your durability is coarse-grained. Let's say the other workflow is one durable step, and it crashes in the middle. It gets retried. It's up to you to figure out "Well, did I actually process the payment already or not?" Maybe there's a way to just like assume "Okay, it's idempotent. I can send it again." Or I might even not be able to ask the service "Did I do that or not? Did I actually decrement the available kind of product already or not?" Maybe I have a way to, again, make this durable, or not. I don't know. These things tend to be harder than one thinks, because sometimes the API gives you -- you know, it might've given you an error back the first time, and you thought "I didn't do this" and followed some control path flow... And then the next time you actually get, not an error, but the real result, and then you follow a different path... So people mess up this all the time. It's really hard to reconcile if you have these multiple steps as \[unintelligible 00:35:08.20\] atomic unit. "What did I do? How did I do it the last time? How do I recover from this?" But if you have extremely fine-grained durability, if you're recording every individual step as durable in the system, and when it comes back, it can tell you exactly like "This was the last step that you recorded", then you just have a very small amount of uncertainty. "Okay, here's this one thing that I might have tried already. I have to just worry about that bit", instead of the whole history, and possible control flow, and all the choices, how I might have ended up here that I need to reconstruct in order to proceed consistently from there. So just like very fine-grained durability is extremely powerful in simplifying things.

I'd say the second magic ingredient is then how do you anchor this in the whole retrying and resolving potentially inconsistent situations with partitions, with timeouts, with zombie processes, and so on, so that there's always a very consistent view of what the last durable step was. I think that's the second sort of ingredient of Restate. It's not just durability, it's actually durability and consensus, and giving you a very, very crystal clear view on where you left off, where you need to continue from. I think if you take those two things in conceptually, you've simplified the problem massively, and the rest is almost API sugar that you built on top of that.

\[00:36:27.14\] That's, I would say, the magic that happens in the Restate runtime. It's a very low latency, durable consensus log that fuses queuing, state management, locking, fencing, creating futures, resolving futures... All these kind of operations that tend to be part of a distributed coordination process.

**Jerod Santo:** When you say the Restate runtime, what can you liken that to, for those of us who don't know what a Restate runtime is? Is it like a Node.js thing? Is it like a database? Is it like a -- what is that?

**Stephan Ewen:** Yes. So using Restate is a bit like, I would say -- somewhere in between using a database and using a message broker.

**Jerod Santo:** Okay.

**Stephan Ewen:** So you write your program pretty much as code, how you would write it before, but you're using the Restate SDK. Think of it a bit like your database driver, in order to sort of wrap certain operations as "Okay, this operation here should be recorded as a durable step", or attach this state to the invocation transactionally, or create this future, complete this future, and so on. So you do these operations through the Restate SDK.

Restate itself is then -- maybe message broker is the best comparison. It's on the level of the message broker. So when you invoke your code, you're not calling it to that directly. You're actually calling it to Restate, which makes the invocation of your function on behalf of you. The programming model that we try to provide is you're writing a service that looks like an RPC service, like you're writing handlers, RPC handlers... And then Restate almost looks like a reverse proxy for you. So the other services, instead of calling the code directly, they call it indirectly through Restate, Restate proxying the call. And it puts itself in the middle with its durable consensus log, and when it forwards the request to the service, it just isn't forwarded naively as an HTTP request, but it actually uses an invocation protocol; it uses HTTP/2 or another type of streaming connection, holds onto that connection, allows the service to sort of synchronize fine-grained steps. When it forwards an invocation, for example, it will tell it exactly what the supposed state of the world should be, as in "Here's the steps I know you should treat as completed. Here's where you should continue." And it will then allow to use that connection, that sort of lifeline to let the application create durable actions. So yeah, it's like on the level of a broker or database. It looks like a reverse proxy to the invoker, it looks maybe almost like a database to the service that uses it.

**Jerod Santo:** And when would somebody reach for this? Now, you said distributed systems, but some people think every network attached system is a distributed system.

**Stephan Ewen:** Yeah.

**Jerod Santo:** I mean, if I'm building a web application - let's call it a monolith that answers HTTP requests, and has a database backend; a Ruby on Rails, or a Phoenix, Django... Insert your backend framework here. Are those folks pulling in Restate and using it for certain aspects of their workflows? Or is that not necessary for them, because they are kind of a monolith? Like, do I have to be building a services-based architecture? Like, where does it fit in?

**Stephan Ewen:** I would very much be with you on like almost any system we've built as a distributed system.

**Jerod Santo:** Yeah, completely.

**Stephan Ewen:** \[00:40:09.08\] So I think it becomes useful very, very quickly. Maybe one way to think about this is -- your backend, where you maintain state and update it and run operations and changes, it usually has a database that has the sort of core business state. Some operations go just like purely straight to the database. That's all they do. That's fine. But any time you have to do something that's not straight against your core database, but something that goes against, like different APIs, something that runs in the background... Yeah, something that is asynchronous work that goes beyond just touching the database, I think you already are at the point where it's starting to become useful.

Then, if the only thing you're doing is maybe forwarding one call - yes, maybe it's overkill. But I think the usefulness starts much, much sooner than lots of folks realize. I would say every time you think about pulling in a message queue, you should probably start to think about pulling in something like Restate... Because it gives you a way to do the things you're probably trying to do with the message queue, but in a more high level, in a more well-defined, concrete way. You're not reading events, but you're dealing with stateful, durable invocations, stateful, durable functions all of a sudden, which is very often what you really want. If you're putting something off the synchronous path with a queue, you very often want to say "Okay, here's something where I really care about that this happens. It shouldn't get lost." That's why I'm putting it in a queue. And then you probably care about this thing happening once, having reliable retries... You quickly reach the state where the processing of this operation is actually multiple steps, and then you're again in the "How do I do reconciliation of multiple steps if it failed somewhere in the middle and I don't know what I already completed or not?"

So I would say the moment you started pulling in a message queue, you probably should think about something like we said. The point comes very quickly. That's the simplest use case. I would say the most complicated ones that we see people build with this right now is using this to replace a complex choreography of like multiple Kafka topics, and RabbitMQ queues, and session servers, and workers, and so on. Or even like a distributed sort of payment ledger keeping system. So it's really a very broad spectrum. I would say in a way you could think like all the type of work you do in the backend that's not the central database that keeps your business state, I think it's ultimately where Restate comes in.

**Adam Stacoviak:** Yeah. What about a scenario where it's publishing? I'm thinking like TikTok, or YouTube, for example... As a creator, we will upload videos to YouTube. There's a process that happens. There's a certain orchestration that happens. It has to be compressed, it has to go through certain filters... Maybe there's even a content filter it has to go through, a copyright filter... Is that an example of where you would use something like Restate, where you want it to go -- you want the user to be able to upload properly, and your server capture the data, and all the good things... But then you've got to run it through a process of saying, okay, this is now content that can be seen by what we call the world, because it's been blessed by the copyright filter etc. Is that a scenario where it makes sense?

**Stephan Ewen:** \[00:43:57.27\] Yeah, absolutely. This is basically a workflow, again, if you think about it. You're uploading the video, let's say; maybe the upload first puts it into some cloud storage. But then, as you said, you first pass it to the content filter, then you have maybe a few steps that even run in parallel, like recoding it for different resolutions, optimizing it to be served to the CDN, and so on. Then you're, I don't know, running it through a system that tries to figure out what's the best sort of title frame to display, and all these different steps that you do. And they take potentially a long time, so it's a long-running process. There's a fair chance that the container goes down and the \[unintelligible 00:44:32.06\] wants to be migrated. And when it comes back up, you really want this to understand "Where did I leave off? What are the processes I should reconnect to, that are doing the encoding or the analysis?" This is exactly the orchestration of that processes where Restate would come in. You wouldn't feed the video frames to the system. That's like overkill. You don't need to feed the video frames to a transactional log. You just put them in whatever cloud storage or so, but the orchestration of the process, of the workflow, of the pipeline that does that - that's a very good Restate use case, actually, yes.

**Jerod Santo:** That's a great example, Adam, because it definitely makes it easy to think through. I guess as people who upload to YouTube, we are intimately familiar with all the different steps.

**Adam Stacoviak:** That's right, we are. That's why I enumerated very well.

**Jerod Santo:** And it's asynchronous, because you can go about doing the other things while it's working on the long running tasks, for instance. And somebody coded up some nice orchestration behind that sucker to keep that thing running.

**Stephan Ewen:** Yeah. And Google has the engineers to code up reliable orchestration flows, even in a way that they're nicely observable. You can reconnect to them, they're efficient, they know how to parallelize steps and synchronize steps, and so on. It's a much harder thing to do for many companies who don't hire the same type of engineers as Google does, and I think for those reasons it actually makes these type of things much more achievable than if you try to embark on that journey without...

**Adam Stacoviak:** Yeah. Even when you were sharing how it worked, early on you were saying that it seemed - at least from my perspective, it seemed like it was user born every time. Every new application, every new scenario, every new job, every new what have you... Maybe even in your boring scenario where you were sort of focused for a bit there... You know, you keep recreating this durable invocation world over and over and over again. And why not turn it into - like you have done here, with a server and a client and SDKs for different languages, and a flow that every developer can grab? Is that kind of what landed you to this point here, was that frustration of the repetition and repeating and rebuilding every single time you build an application?

**Stephan Ewen:** I think that's a great way of putting it. Yes. I would say the number one alternative to Restate that people do or use is roll your own. Absolutely. And it's a very repetitive process. And most of the time, I would say folks don't realize really all the edge cases that existed, what they do. They just maybe don't even solve them. So this is basically half baked, roll your own. And it's - yeah, every time, again and again. And it's very often very similar problems that you're solving. Let's say you're taking a message queue to say an action that I triggered, it should run asynchronously, and it should \[unintelligible 00:47:31.04\] retries. And then I'm pulling in another store like Redis, or other key-value store to record different steps. Then I might be pulling in something like Zookeeper or Etcd to place a lock on certain operations. So I don't know, they don't happen concurrently... Like, that shouldn't be updating certain -- I don't know, a retry shouldn't work on the same payment ID if the lock is still being held by the original process, or so.

\[00:48:01.05\] And then you're trying to sort of - going back to idempotency, trying to make an update to another system, and understand how do you actually anchor the ID of that processing forward into the update to that other system. And you're recreating exactly, you're recreating that type of pattern over and over and over again... And I think this is where in a way workflow engines were originally born, if you wish; enterprise workflow engines, which try to say "Let's try to define a flow where we can have steps following a certain predefined control flow graph, and we have the workflow engine giving you the guarantees that step B, that follows step A really only starts after step A is done, and step A is transactionally persistent before B starts", and so on. They tend to be extremely heavyweight and flexible... They break all the tools and everything when you want to interact with them... And what Restate does and the durable execution space there, what they're trying to do in general is kind of bring this level of guarantees in a very, very lightweight way, into like almost arbitrary programs, because it's just such a useful power to have to kind of define these durable steps... Especially if you don't have to branch out in a different domain-specific language or graphical way to define them. But if you could just like write your regular code, but have it treated, have it executed with the same sort of guarantees as if it was an enterprise workflow.

**Jerod Santo:** It seems like you might have a large education challenge in front of you, because there's so much thought that has to go into this kind of architecture. The fact that your largest competitor is roll your own means most people don't know. We kind of all discover this pattern slowly over time, inside of our own daily work... And so I'm just curious how you think you can attack that, or are there other people... Is there a common thread or movement that you can attach to, or create, in which people are like "Yeah, here's this new style." I thought of this because you mentioned workflow... And I think that's sort of in the ballpark of what Restate is. Message queue... I mean, is there like a simple idea or concept pattern of which Restate could be one? Or maybe Restate is the brand... But have you thought through this? Because you have a marketing problem here, or a challenge, I should call it.

**Stephan Ewen:** Yeah, so I think that is very true in many ways. I think there's lots of layers of answers to that. I would say in the simplest way you can actually explain it reasonably simple, if you just start from it's stateful, durable functions, which have guarantees that they execute, they run to the end, they're able to record steps, they're able to basically do these sort of asynchronous building blocks that you have in your usual programs, calling other functions, creating promises, resolving them, updating state, making calls and so on, just in a fine-grained, persistent way that knows how to recover. This is sort of the basic building block of stateful, durable functions. Now, the harder thing is actually in a way making people realize that they should be using something like this rather than roll your own. It's not uncommon that -- it's mostly on the junior side of engineers that you talk to them and they say "I don't get it. Like, I know how to write a retry loop. What is this?" And it's a journey from there.

Interestingly, I think the most enthusiastic audience is often the engineers that have been burned before. That know, "Okay, I know how to build distributed systems, but holy cow, I know how hard it is, and even though I'm really good at this, I tend to overlook still 2 out of 10 corner cases, and I get paged Sunday night or so..." Those are the ones that often go "Yes, I know why I want to use this, because I know how much time I would otherwise spend on solving all these things if I have to do it myself."

**Jerod Santo:** \[00:52:14.26\] Right.

**Stephan Ewen:** So I guess that's right. There's definitely an education challenge there. And I would say a very sort of like in your face example of this is if we look at the AI space and agents right now. I think every AI company is reinventing workflows in the context of agents and agentic workflows.

**Jerod Santo:** Good point, yeah.

**Stephan Ewen:** Everybody's building, and I would say slowly rediscovering all those things. There's been an entire sort of industry that has been working on this for like -- I mean, we've been working on this for two years, but if you ask IBM, they've been working on this for probably 30 years, or something like that. I mean, in a very different way, right? But still. And I feel like all the AI companies are kind of like bit by bit rediscovering this. And when you start talking to them, I think some of them understand, okay, even if you're building agents, if you deploy them, how they ultimately end up having to solve these problems. Again, imagine you have a chatbot that does your flight booking. It's like, there's something you have to do to make it not rebook your flight twice if the agent just crashes on the wrong point.

**Jerod Santo:** For sure.

**Stephan Ewen:** They're ultimately going to the same problems. They actually have a perfect foundation to build on with these systems being built today... But yes, I think they're not aware yet that this is something they'll run eventually into.

**Jerod Santo:** Right.

**Stephan Ewen:** So yeah, I think you can see this in many places, that the industry is rediscovering work in different sort of like subfields, that other fields have been done, just because our information flow isn't perfect.

**Jerod Santo:** Minor off topic rant... Why are all of the AI agent Hello World examples - why are they all booking flights for us? It's like, do you want some undeterministic, half-baked language model booking your flight? That's like a very difficult thing to roll back. I just don't -- that's gonna be one of my last human out of the loop AI agent moves. Like, can we start with something a little bit less critical? I don't know about you, Adam, but I get serious heart palpitations thinking that someone's gonna book a flight for me...

**Adam Stacoviak:** And you don't get heart palpitations, Jerod. You're a pretty chill dude.

**Jerod Santo:** I am, I'm pretty chill. But I just feel like "Gosh... Do you know how hard it is to roll back a flight?" I mean, come on.

**Adam Stacoviak:** Oh, yeah. Well, I think it depends. I mean, I don't mind -- I think it's the human dream to have somebody or something take that kind of action. That specific action. "Book me a flight."

**Jerod Santo:** Yeah. Let's simplify it.

**Adam Stacoviak:** "Set me a lunch appointment."

**Jerod Santo:** How about you just give me a -- yeah, exactly. A restaurant reservation. Because worst-case scenario, I ghost it and feel bad. But if I don't show up for my flight, I lose my 400 bucks, or whatever, you know...

**Adam Stacoviak:** Yeah...

**Stephan Ewen:** Maybe there's just so much accumulated pain from people waiting in the call centers for airlines...

**Jerod Santo:** Yeah, exactly.

**Stephan Ewen:** \[unintelligible 00:55:03.26\] "Oh, that's a perfect example for a chatbot." Like, people will wanna use it, because they will not want a single other minute to spend on the phone with these calls.

**Jerod Santo:** Yeah, perhaps.

**Break**: \[00:55:16.22\]

**Adam Stacoviak:** I'm going to go out on a limb to bring us back into somewhat left of center, but basically center...

**Jerod Santo:** Please do.

**Adam Stacoviak:** ...and I'm going to say that this is the year - 2025 is the year where durable execution of things is more important than it ever has been.

**Jerod Santo:** Oh, really...

**Adam Stacoviak:** It's always been important, but more and more people are leveraging APIs, they're building out this agentic world we keep hearing about... And I think you keep having more and more people program against brittle APIs, brittle latency of networks, databases etc. and you need that promise. I'm going to say that this is the year where the marketing problem that you have, that Jerod alluded to, is still there (I'm sorry), but it's less. And I'll tell you why it's less. Because Render - I just talked to Anurag Goel, CEO/founder of Render. And this is on their radar. So they're building an application for developers. We did a whole show on this... And during that conversation, he mentioned a brand - at least I think I did, actually... I mentioned a brand that sponsors us - not this show, but has been, and I think still is a sponsor into Q2, and maybe Q3... And that brand is Temporal. So I'm going to ask you to sort of help me understand the difference between Temporal, NATS, Synadia, Restate, your open source flavors in your cloud, what Render may be doing for application developers... It seems like this durable execution retry model doesn't live in the language itself. It's something you have to build every single time. That sucks. And it seems like more and more people are trying to solve it. So break down all those for me. Temporal, NATS, Synadia, yourself, what Render's doing, and anything else that may be doing... I mean, Flink, but that's a different world.

**Jerod Santo:** There's another one called Resonate. You know that one, Stephan?

**Stephan Ewen:** Yeah, I know Resonate. I know the guy behind it.

**Jerod Santo:** It's pretty new. But anyways, there is definitely -- like you said, there's other people trying to solve this problem.

**Stephan Ewen:** Yes, exactly. I think this starts from the same observation. The state of how things are built if you don't rely on one of those tools, it's almost unsustainable. It's hard to build, it's hard to hand it over to another person... There's often so much implicit and brittle assumptions in how this works. So folks have been trying to come up with solutions.

From the ones you mentioned, Temporal is absolutely the closest. Maybe -- yeah, between Temporal and Resonate, I would say; those are the closest to Restate. So I would actually focus on those. I would say NATS goes more in the direction of flexible, persistent messaging, together with some state management blended in, and so on... But you can already see folks are trying to just figure out what are the different aspects we need when building applications, and sort of like make them work together with each other in a tighter way.

\[01:01:59.14\] And if you wish, I think this is -- for me, Restate is... There's a couple of things that make it unique, but I would say two things stand out. First, I'd say the model goes a bit further than every other system. So Restate is -- if you look at Temporal, Temporal is workflows. That's really what they implement - workflows and activities. So it's like durable steps, and then with sleeps in there, and signals, and so on. So full-fledged workflows. It's actually fairly flexible if you're a power user and know how to use that.

Restate goes beyond that by saying "We're not just looking at a workflow, like, one durable execution of multiple persistent steps. But we're sort of generalizing this." Almost what Temporal does for workflow, we're trying to do this for a distributed service architecture consisting of like multiple stateful services that interact with each other. And you can see this from the fact that Restate has persistent messaging and RPC built in. It has state built in that lives across a single, durable execution. So again, in Temporal terms, the workflow is done. The workflow is done. It's sort of a self-contained unit. Within the workflow, across the durable steps, it remembers context, but once the workflow is done, it's done.

And then Restate is a stateful model where -- you could almost think of the activities are like decoupled from the workflow. The activities can be stateful services and entities that live for a very long time, and then you have durable functions that interact with them. It's a much more flexible and powerful model to build things like distributed state machines. We have folks that actually start to ditch certain elements of databases to put their state in Restate, because that is transactionally integrated then with the durable steps, and out of the box consistent.

So I'd say number one, think of the Temporal model, but generalize it into distributed services to include long-lived state, include communication between microservices... It makes for a more powerful, more flexible box. That's the one thing. The second thing goes a bit back to what I said earlier. When we started this project, we set out with the following. You can implement durable execution. It's not terribly complicated to implement a durable execution API on top of a database, if you make it very simple. Have a step, write it to a database, on replay, just like query the database, what are the steps that are already in there... It has a lot of holes, but it gets you started. But then, okay, let's talk about the holes. All of a sudden, you have a problem with long-running processes that suspend for a long time, scaling this to zero, you have a problem that you have to worry then in your library, you have to implement your own distributed locking, and mutex in case you have timeouts, and zombie processes, and so on. So when you try to make it a really good experience, you quickly come to the point "Okay, we actually have to go a lot further than building a library on top of database."

Then you start -- you know, maybe we're building a big orchestration server, that still uses a database in the background. And then you really come to the point of, if you want to make durable execution so lightweight that you can use it almost pervasively, how low latency do you have to make these \[unintelligible 01:05:21.16\] What is the best you can actually do if you deploy this across multiple data centers, if you deploy this across multiple regions? And then you come to the point that a distributed database across multiple data centers and regions - there's a lot of coordination back and forth, because the database model, it needs to guarantee integrity, it does a lot of transaction time-stamping, back and forth and round trips.

\[01:05:46.25\] On the other hand, if you built this on a log, on an optimized transaction log, you can get as good as make one flexible quorum write across your different data centers, and you have a step persisted, and you can continue. So Restate is kind of going to the point where it's saying "If we want to make this extremely fast, so low latency that it has--" You can actually start to use it in places where you didn't think you could use durable execution before, because it becomes so cheap, so low latency. How would you have to build a system to do that? And that's where we went. You'd have to build it from first principles, starting with a low latency replicated log, on top of that build it like end-to-end event-driven, so you don't do batch queries on a database, but you do the most low-latency thing you can do, you do fine-grained messaging and event pipelines... And you basically layer from there.

And then, the other thing is, okay, let's not just make it really low latency, but at the same time it has also to be an extremely lightweight thing... Because somebody who -- you know, we just said "What's the simplest use case? When should you actually start looking at Restate? Only when you have a distributed ledger to build? Or do you want to do this --" If the only thing you want to do is like put your asynchronous email sending in the background, but reliable. So the next thing is, how do we actually make this extremely lightweight? What's the most lightweight package we can give that thing? And the most lightweight package is single binary, zero dependencies. Just download that thing. It has its log built in, its orchestration layer, its metadata consensus module... Everything in a single binary. Just download one command, it starts in a second, and you're done. Like, there's literally nothing else to do.

And then you can take this thing actually and start scaling out just by adding more nodes. If you want to migrate it, let it take a snapshot to an object store, start deploying the data, send \[unintelligible 01:07:35.05\] go from there. So what's really the experience that durable execution needs if you want to be able to take it from the point that it's so lightweight you almost want to embed it with almost any application, to this thing powers distributed multi-regional payment processing. What's the architecture needed for that? So that's what we started building with Restate.

So the second thing -- that was a very long way of saying the second thing is Restate is really sort of a durable executions deck built from first principles, for low latency, serverless operations, high throughput, and just like really, really nice operations from the small to the large scale... Rather than saying, "Let's start with whatever database we have." I think in Temporal's case, when it came out of Uber, they started with Cassandra, and said, "Let's build a server that sort of like sits on top of Cassandra, and stores all state that it needs for coordination in there." And then you have like different pieces that you need to scale, you have a database that does actually a lot more than you really need for durable execution, but on the way also sort of sacrifices the potential for optimizing. Those are the differences, I would say.

**Adam Stacoviak:** Gotcha. Built for speed, basically. That's what you're saying.

**Stephan Ewen:** Built to be lightweight...

**Jerod Santo:** Scale down.

**Stephan Ewen:** Yeah. Scale down, scale up... And yeah, lightweight, simple to operate... I usually don't like to do this. I usually like to talk more about what makes Restate great than what makes other systems not great...

**Jerod Santo:** Adam put you on the spot.

**Adam Stacoviak:** Well, I think it's important -- well, if I'm gonna go out on a limb and say "This is the year", then you have to follow me. Okay? You have to follow me and you have to answer my questions...

**Stephan Ewen:** Absolutely. Okay.

**Adam Stacoviak:** ...because I'm reducing your marketing churn for, you just by nature.

**Stephan Ewen:** Yeah. So I'll just say, if you look at the way Restate is built and it allows you to get started, then scale from there... If you say "Okay, I care about self-hosting this, because what I pipe through this is like critical data. It's not something I trust with some managed cloud. It really has to run in my account", I think the experience you get out of Restate is vastly different than what you get from many other systems. And that's because it's just been this very thoughtfully crafted stack from the very beginning, and not sort of incrementally evolved from --

**Adam Stacoviak:** Morphed...

**Stephan Ewen:** Yeah, from this database, and then that server... Yeah.

**Adam Stacoviak:** \[01:10:08.19\] Right. If you're directly comparing to Temporal, which is an incumbent, which was spun off from, as you mentioned, Uber, and has different principles for which it was built on... You went back to first principles and said "Okay, if you want to get to the point where you can put this in almost everywhere you want to, you have to be low latency, you have to be fast..." These first principles you built on have to be there.

**Stephan Ewen:** Yeah. And you can't have the requirement to first install a distributed database before you get started.

**Adam Stacoviak:** What is the requirement? That's where I was going to go to. So it seems like its client, which is an SDK, essentially, inside your codebase, making calls to a server... What is the architecture, the infrastructure required?

**Stephan Ewen:** So the Restate server, which is where the low-latency consensus log lives, and the thing that basically becomes the reverse proxy for your service - that thing has not really any requirement if you wanted to get started. It's a self-contained binary, it embeds its own distributed log, a RocksDB storage engine, its own consensus engine... The only thing, if you want to run it as a single node, is you need to give it a persistent disk. It's almost that -- let's say, if you would want to run SQLite or Postgres, it's a little bit like let's go back to the good old days where you download one binary, I just start it and it's actually running. It's actually good, there's nothing else you need to do. But then at the same point, it's also able to go from that single process that you start with a single binary to actually cluster up and build a distributed cluster... And there's a very interesting architecture in there. We build it basically for the cloud data age, where you would say any system that you run at scale should not really store its own data, but it should just make use of object stores for as much as it can... Because S3 and these systems - they're these bottomless, insanely durable and insanely cheap storage systems. So make use of that as much as you can to put a large chunk of your data.

So that means while you may be working with the data on your individual nodes, you're not really required to safeguard it on the nodes, because you can recover it from S3 or an object store. So what Restate then does is it actually implements its log in such a way that it only uses this to really give you the very low latencies for the durable steps, and then in the background it incrementally moves data to S3, which makes the individual nodes fairly lightweight to operate.

So to go back to your question, like "What are really the requirements when you want to run it?", if you want to run it on a single node, non, or a persistent volume if you actually want to run it like in production - if you want to run it in a distributed setup, give it an S3 bucket. Those are the requirements. If you want to use it from your code, the requirement in your code is to use the SDK, and to basically create a Restate entry point that Restate can connect to and where it can use a sort of durable invocation protocol that understands how to decode that. This sort of entry point is mimicking the popular frameworks; it's relatively close to Express.js if you're talking in the JavaScript world, and the Java world looks more like Spring Boot and so on.

\[01:13:42.14\] And then within an individual durable function, service handler, you need to use the Restate context to say "Okay, I want to run this step and record it as durable. I want to create this as a durable promise for a persistent callback", or so. But otherwise, the structure of your code is very much the same as it used to be. So it's supposed to be as little invasive or to get as little in the way of how you used to do things as it can... Just sort of changing the paradigm as in -- because it has this fine, good durability for these operations, you can get rid of a lot of the sort of unhappy path code. There's still cases you need to treat, but mostly you still need to treat sort of like persistent errors that come from the application, and where you'd say "Okay, you're making a call to an API where you're not authorized. There's not really a way you can recover from this. You're just trying to do something you're not supposed to." And "Handle this." But don't worry about handling process failures, network failures, rate limits that bounce you back. Don't worry about many classes of race conditions, about the state being maintained in the database versus the logic that interacts with it in a function that where you don't know really "Did this go through or not?" If you put the state at the Restate handler, it's just going to be consistent for you. All of those things by keeping the structure of the code like those two, what you used to write.

**Adam Stacoviak:** So I made you talk about things you don't like to talk about, except for maybe the architecture. That seems kind of fun to you. What is it that you do like to talk about when it comes to defining and describing Restate and why developers should consider it?

**Stephan Ewen:** So no, what I don't like to talk about is competitors, in the sense of I don't want to say "Okay, I don't like this about a competitor. I don't like that about another competitor", because number one, I'm not an expert in those systems... I try to be honest. I look at them to the extent I need to look at them, but actually no deeper than I need to, because I've found this very liberating, to not have my judgment sort of clouded or sort of pre-biased by having looked at something. I feel if you look -- for example, if we look in depth at how Temporal would build their APIs and so on, there's a very good chance that "Oh yeah, I get it. This is why they did it. This makes sense", and so on, then there's a good chance you'll probably do it the same way, just because you've sort of seen this example, decoded it, understood it...

**Adam Stacoviak:** Preconditioned.

**Stephan Ewen:** You're preconditioned, exactly. If you don't do this --

**Adam Stacoviak:** Yeah. It's like Schrodinger's Cat. Is the cat alive or dead in the box? We won't know until we look.

**Stephan Ewen:** Maybe, yeah.

**Adam Stacoviak:** It's both dead and alive, in the same moment.

**Stephan Ewen:** But if you don't do that, you actually have a chance to do something -- to come up with your own creativity, and possibly do something better. So that's one of the reasons why I don't like to talk about them so much, because I'm absolutely not an expert. I look as much as I need to, but I usually don't try to go super-deep into these systems.

And the second thing is -- I don't know, there's so much... I'd rather talk about good things than bad things. It's like more of a --

**Adam Stacoviak:** Yeah. Good idea.

**Stephan Ewen:** It's more fun to say nice things than bad things.

**Adam Stacoviak:** I understand your discomfort then now. Definitely, it's always -- it can be tumultuous talking about competitors and what they do and what they don't do... I think in the context and the reason why the question is pertinent is because whenever -- like, to Jerod's point, you have a marketing challenge ahead of you, and I think it's because the idea of durability and idempotency is mostly well known, not always easily implemented, and there's options out there. And so when you sort of look at that challenge, you think, "Well, what could someone reach for? When would they reach for it? When does it make the most sense to reach for it?", and "Does it actually fit whenever they do try to implement it at scale, across different boundaries and whatnot?" And so when you compare that and you look at like "Well, NATS --" NATS is a whole different scenario, but they do similar things. And it's kind of funny because when you mentioned Flink, you were like "Well, it does this in a different way." And then you got to Restate because of your experience there and whatnot. Same thing with NATS. NATS does a lot of the similarity things where you're brokering messages, there's a lot of retries, there's a lot of key-value storing in there... It's like, a lot of that same principles, but it's not about durability, it's not about retries. And then you obviously have Temporal, you have Render who's trying to or going to do something like that in the same platform, which I just had that conversation with Anurag... And then you obviously have Restate and how you went back to first principles, versus being spun out of something, or what have you. So I think from a guide standpoint, you're the best suited guide in this conversation to explore those... Because Jerod and I can't do that for us.

**Stephan Ewen:** \[01:18:24.08\] Yeah, absolutely. So if you want a quick summary, I'm very biased, but I think there's almost no reason to not reach for Restate. I think it really is this solution from first principles with amazing developer experience, with a very powerful abstraction that allows you to build what you can build with workflows and signals, but also so much more. And yeah, just the journey from the beginning, downloading the binary, then migrating, scaling out is an absolutely -- it's a great experience. I mean, the project is newer than other projects, so it will have a rough edge here or there, but it's also moving very quick. It's very good at reacting to community feedback fast... So I think it's a good choice. It has made a lot of users happy so far.

**Adam Stacoviak:** Can we use maybe, Jerod, an example from our own application, to consider how we would pick up Restate? I know we publish episodes, right? We publish episodes, we often will have scenarios where the slug isn't right... We've had different scenarios where we had to do things in prod to fix something. It could be metadata, and you've got different checks before the publish process. Is there a way knowing what you know now about Restate, how you would consider implementing something like that to safeguard publishing episodes in a durable way?

**Jerod Santo:** I've never really used one of these tools before, so it's difficult for me to say that. I do know just at a technical level that I do not believe Restate has an Elixir SDK, so we might be out in the yard..

**Stephan Ewen:** An Elixir one? That's a good ask.

**Jerod Santo:** \[laughs\]

**Stephan Ewen:** Okay, maybe I can help you come up with an example here.

**Jerod Santo:** Sure.

**Stephan Ewen:** Let's say you're recording the episodes and then every time an episode is done -- no, let's do an AI thing here, or so.

So you're building your chat where you can chat with an episode, like "Okay, tell me where did they talk about this", or "Tell me what episodes talked about these topics", and so on. So what you're doing whenever an episode is done - you're feeding it first through a model that transcribes the audio, then you're chunking it up, feed it through embeddings models stored maybe in a vector database, and then you have kind of a RAG style way of... You know, when a query comes, create the embedding, look up the similarity search in your vector database, feed it to the model to get the answer... For something like this, if you -- let's say you started just building the flow in let's say a Node.js application, like in a simpler way; you just said "Okay, here's the episode." I have something, it gets uploaded... Let's say you're uploading it to an S3 bucket and there's an event whenever something gets uploaded to this bucket; you have an event that represents this, and then it starts a Node.js script, or something like this. And this script is of the type that if it fails, somebody would have to restart it. Now let's say you're trying to implement that with Restate. I would say approach it the following way... The first thing is get a handle of Restate itself; there's a cloud service that you can use on our site, which has a free tier. Either go there, or just use one of these ways to run it yourself on a single machine with an EBS volume.

\[01:22:06.14\] Then you have the server there. Then put your Node.js script maybe -- you can actually put it on something like Lambda or ECS; just like use a serverless option to host this. And then use the Restate SDK to define the entrypoint and tell Restate "Okay, hey, here's the service that you now should durably manage." So Restate will then go there and discover this and understand "Okay, hey, there's this (what what do we call it?) video transcriber, or video embedder service." And then Restate knows about this. And then you would go to your Amazon console and say "Okay, for this type of event I want to create a webhook to Restate", so that it makes an invocation to Restate and says "Okay, this thing has been updated." You know, the kind of event that would previously call directly your Node.js process or script, you actually make it an HTTP call to Restate, and Restate would then call your process.

You've already gained one thing right away. You now basically have a reliable queue in front of it, right? Like, just that if you don't do anything special. So when the webhook comes, it's going to be acknowledged back, and Restate has this \[unintelligible 01:23:15.22\] of your process if it crashes, it will retry this... It will actually give you a nice observability; much more than you would get from your average message queue, about like individual retries, configuration about time-offs and back-offs and timelines and so on.

As a next step, you would actually then go into your script and say "Okay, let's actually identify the steps where if something fails in this step, or after that step, I don't want it to go back." Like let's say forking the process that does the transcribing, or like calling the LLM to create the embeddings. You introduce then the Restate context that you get by using the Restate SDK and just say, "Okay let me wrap these API calls just with restate.run." That will capture the results of this durably, and basically turn -- you've now turned it basically into a workflow.

Let's say you want to do something like parallelize the different steps. Maybe just typing this one by one through this embeddings model is a little tricky thing... You want to fan out. You could then go and say "Let me try and do the exact same thing I do in a regular Node process and just make a bunch of function calls record, like remember the promises", sort of a way to promise that all for those in the end join the results, and put those in the database. You can do exactly that in your code. Just, again, anchor this in the Restate context, so you get like this durable parallelization, durable stuff like scatter, gather, and so on. And so you would then incrementally sort rewrite your code to say "Okay, let's actually make this step durable, let's make that step durable, and that step durable."

Say as a next thing maybe one of your folks wants to approve it before it really goes out. So you then possibly -- you "Let's do that in the simplest most possible way", which is we create an awakeable or a durable promise in Restate and say "Okay, somebody needs to complete this actively", like send an event, make an HTTP caller to complete this and say "Okay, this is approved, go through" or "No, this is not approved. Abort." You can then use, for example -- you could put the result, the transcription just in Restate, save it, and somebody could look at it from the UI and then say "Okay, yeah, I'm making an API call here to approve this", and it continues. And so you can then incrementally rebuild your process into durable steps.

As the next thing you could then, for example, take it and migrate it from a long-running process to a Lambda function. Because one of the nice things you have with durable execution is when it's waiting for something else to happen, it can actually just make this thing go away. Because with durable execution, it knows how to recover back to the place where it was by replaying the history of durable steps.

\[01:26:14.28\] So you could then say -- you know, if you're on vacation and you approve it a week later, you don't have some process running and waiting for it. It's just like, it's going to go away, and when the approval finally comes, it's going to come back, use the durable steps to replay back to the point, and then to the remaining steps. And so typically, folks would incrementally then rework their non-durable services; first connect them to Restate to basically get the equivalent of a durable queue, and then incrementally rework it and say "Okay, I want to add durable steps here, maybe parallelization, maybe a signal", and...

**Jerod Santo:** Yeah.

**Stephan Ewen:** ...I think that's typically how you'd approach it.

**Jerod Santo:** That makes a lot of sense. I do see also you have some guides on the website about how to implement certain things... I'm curious about the observability bit. Is that a part of your hosted offering? Is that a part of the open source project? How does the business end fit in, and is observability part of that open core sort of thing?

**Stephan Ewen:** Yeah. So at the moment, what you get in the open source is very broad. You get in the open source, compared to the hosted offering, pretty much everything except the fact that you would self host it, and the whole authentication and API tokens and so on that exists only in the managed offering. But other than that, we've started with an open source first approach, so the open source has pretty much the full suite at the moment. The observability - there's two things about observability and Restate. Number one, it can actually give you an amazing amount of observability itself out of the box, because it funnels all these durable steps through its consensus logs, it has all the information of what happened... And it's not just function call, but like to the granularity of "Here's a step that happened" or "It's actually failed." "This is the last step that completed in this failure, and since then I've retried so and so many times, and this is the last exception I've seen." It has all that information available, because it also is connected to the service and it understands, "Okay, what type of errors are happening? Is this a retriable error or not?" And it gives you access to all that observability data in its own UI. It's actually a fascinating way that this is implemented. If I can show everyone like one or two technical details...

**Jerod Santo:** Sure.

**Stephan Ewen:** So there's this durable log that recalls all the actions, then everything is indexed into RocksDB instances to sort of retain it in a scalable way, and we've built a SQL query engine using the Data Fusion project around this, that allows you to basically do SQL queries against all of that invocation, and transaction journal state, and so on. So what the UI actually does is basically issue SQL queries. It's almost like back to the good old days when all your state was in a single Postgres database, and if you wanted to find out why your application is stuck, you'd just open the SQL shell and start querying. And we kind of lost that, because we went into distributed microservices, and if you want to find out what happened, you now have to do like murder mystery with 20 services.

**Jerod Santo:** Yeah. You're bringing it back.

**Stephan Ewen:** And we're kind of bringing it back, yeah. Like, SQL query for the win, for your distributed application state. So this is one of the things - you get an amazing amount of insights right out of just the Restate journal. The second thing is because all the operations go through there, Restate can also just out of the box generate open telemetry traces and spans for you. So if you give it an OTEL endpoint that it should push those two, it would just give you the traces right away, without you needing to configure anything. You can then extend it and augment it with your own traces. So those are the two things you can do.

**Jerod Santo:** \[01:29:58.16\] Cool. And so the business end is basically cloud hosting for Restate.

**Stephan Ewen:** The business ends going to be a lot more than that, but...

**Jerod Santo:** Okay. What's it gonna look like?

**Stephan Ewen:** I don't think we can go into this yet. Interview us again in six months. It's not ready to be to be announced. But what's available right now is -- most of it, what we have built, is also the open source. So yes, on the on the business side we do currently only hosting.

**Jerod Santo:** For the next six months or so.

**Stephan Ewen:** Maybe.

**Jerod Santo:** \[laughs\] Fair enough. Cool. Well, I think it sounds like a really cool system. I'm excited about this new world of durable execution functions, and some way to slap a name on that that brings all of the junior engineers to the yard, along with us seasoned engineers who have felt these pains for all these years. You know, like the serverless folk did; they just said it's serverless, and then like "Oh, okay, cool. Serverless. Maybe I should try it." I feel like Restate and friends need some sort of a marketing term to just simplify the overall concept of what you all are building. But I do think it's very interesting tech, and very promising. I do like the term resilient apps, so I think maybe something with resiliency involved. But that's all for me. Adam, any other questions from you before we let him go?

**Adam Stacoviak:** I'm almost liking durable, personally. I don't know if you want to wordsmith that a little bit here, but I like durable. I think that seems to have \[unintelligible 01:31:36.29\]

**Stephan Ewen:** Yeah. So if you're interested, we've actually gone through a few iterations. We've started with something, just calling it durable async await, because in many ways, that's what is underneath the hook.

**Jerod Santo:** Yes.

**Stephan Ewen:** It's like durable asynchronous operations. A function invocation as an asynchronous operation made durable \[unintelligible 01:31:56.28\] asynchronous maybe API call, with a durable result...

**Jerod Santo:** Right.

**Stephan Ewen:** And there were some sort of expert programmers that were like "Oh, that's really cool. I get it. It's like distributed durable event loops. That's very cool." But then 90% of the folks did not get that. Then we just went with durable execution, and then it turns out that's a very -- that's a term that's maybe increasingly more recognized, but it also undersells a little bit what we \[unintelligible 01:32:22.22\] because folks actually think "Oh yeah, so it's just the same thing as Temporal", but actually it does a bit more.

So yeah, we're still on the wordsmithing side. Yes, distributed durability, resilient apps, resilient distributed state management... There's so many things on the table. At the moment -- I used this earlier in the talk... It's like stateful durable functions, or something we've used. I think this is maybe increasingly getting recognized because of a lot of the efforts that, let's say, Cloudflare does with its work, with like durable objects. There's a construct in Restate called a virtual object that has a surprising amount of similarities with durable objects, and we would have called it durable object if that term hadn't been trademarked by Cloudflare.

**Jerod Santo:** Hm... Jerks.

**Stephan Ewen:** And Azure Durable Functions is probably even closer to Restate than Temporal. So if you -- I think you can actually think like Temporal, Azure Durable Functions, and so Restate is a bit more than that. I think it combines a bit more of like orchestration and stateful logic, even in a more flexible way than durable functions does. But yeah, so stateful durable functions is where I've currently landed at. But look, it's a journey... I think honestly even Temporal hasn't figured that out after five years.

**Jerod Santo:** Well, that's why I said, it's a challenge that I think maybe Restate shouldn't solve it, but I feel like maybe everybody who's in this category... There's a missing category. It's almost like a style of application, or an architecture, where it's like "Well, what architecture is it?" Well, it's model view controller. Okay, it's MVC. I can build an MVC style app. Where this is like -- I don't know what to call it. I'm missing a word. It's almost it's Restate style, or something like -- maybe you have to term it after yourself if you want to really own the market.

**Stephan Ewen:** \[01:34:21.18\] It's durable function style, or it's...

**Jerod Santo:** Yeah. Durable functions doesn't speak to me personally at all. It sounds really boring. But that's just me. And maybe it's working on other folks... Adam likes durable. Durable to me just sounds like "Cool, it's not going to break."

**Adam Stacoviak:** Stateful durable functions... That's what you said? Is that right?

**Stephan Ewen:** That's what I said earlier, yeah.

**Jerod Santo:** Stateful durable functions.

**Adam Stacoviak:** SDF.

**Jerod Santo:** SDF style.

**Adam Stacoviak:** Make an acronym, or something like that, I don't know. Like TDD. SDF.

**Stephan Ewen:** MVC, yes.

**Jerod Santo:** Yeah. I mean, model view controller doesn't have any sort of appeal to it either on its face... So maybe that wasn't a bad example. Anyways... We could continue to workshop it until we're blue in the face, but obviously you've been working on it longer than Adam and I have.

**Adam Stacoviak:** Hey, listen, this is the year. This is the year of it. I'm just saying.

**Jerod Santo:** The year of the what?

**Adam Stacoviak:** The year of whatever this is...

**Jerod Santo:** Oh, the durable function.

**Adam Stacoviak:** Whatever this is, it's the year.

**Stephan Ewen:** Yeah, I feel -- there's something about durable in itself that's not recognized by lots of folks. I think you actually asked about that earlier as well... Like, "What does durable really mean?" Durable is maybe a stronger emphasis on persistent, or so... I think there's something to be said about resilience.

**Jerod Santo:** I think resilience is a much more attractive word generally speaking, and one that to me calls and says "Is your app resilient?" I'm like "Ooh, I don't know if it is."

**Adam Stacoviak:** "Ooh, I want a resilient application."

**Jerod Santo:** "I want resilience."

**Adam Stacoviak:** Because durability can show somewhere, whereas resilience is like "You know what? No matter what happens, I'm going to succeed. I'm going to try until I --"

**Jerod Santo:** Until I bounce back. Yeah.

**Stephan Ewen:** Yeah, and I think you're right in the sense of durability is a means to an end. It's very implementation detail, if you wish.

**Jerod Santo:** Right.

**Stephan Ewen:** Restate achieves resilience by doing a lot of fine-grained durable operations, which make it easy to bring it back to a consistent state, and that drives resilience.

**Jerod Santo:** There you go. Now you're getting your messaging down. Love it.

**Adam Stacoviak:** Now we're deep... Listen, hey, we have a fun place to hang. It's called Zulip.

**Jerod Santo:** Oh, that's true.

**Adam Stacoviak:** Go to changelog.com/community, join us in there, and then if you have some ideas about this name or this --

**Jerod Santo:** Wordsmith this with us.

**Adam Stacoviak:** ...this world that Stephan is creating, then pile on, share your thoughts, all the good stuff. What else? What's left? Anything left unsaid about this durable, resilient world we're going to live in?

**Stephan Ewen:** What's unsaid about the durable world that we live in? I think it's inevitable to come. The question is mostly in what shape is it coming? I think it's been worked on, actually, from multiple dimensions. They're folks like us that work on this from the Restate side, like "Here's a lightweight durable log that sort of is easy to integrate with other functions." I think that sort of the serverless folks and the Wasm folks are working on that from a different side, saying "Okay, hey, let's compile everything to Wasm and let the system sort of use the Wasm interpreter to snapshot things." And I think there's folks that kind of use container engines to implement this. I think what they all share is just the understanding of it's completely unsustainable to not have anything like this. It's harder. It's hard. It gets increasingly more important the more moving parts and the more asynchronous processes you have, and I think if we all believe what the AI people tell us, that like 80 percent of all this is anyway going to be some agentic stuff in two years... And I think you've just created an even bigger problem and an even bigger need for this type of systems. So I think this is coming, in one shape or the other.

**Adam Stacoviak:** It's inevitable.

**Stephan Ewen:** This is our bet of how to best achieve it, and it's going to be fun to see what happens.

**Adam Stacoviak:** There you go. Alright, Stephan, well, thank you so much for sharing the journey, sharing the love, sharing the things... We appreciate you.

**Stephan Ewen:** Thanks for having me. Cheers.
