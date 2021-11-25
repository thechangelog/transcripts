**Mat Ryer:** Hello, and welcome to Go Time! I'm Mat Ryer. Today we're talking about eventual consistency and managing data at scale. If you're not sure what that means, don't worry; we're gonna start at the very beginning. Helping me do that - I'm joined by Tiago Mendes. Hello, Tiago.

**Tiago Mendes:** Hello. It's very nice to be here, thank you.

**Mat Ryer:** It's very nice to have you. Don't worry, it's not just me and you, Tiago. Jon Calhoun is also here. Hello, Jon. Welcome back!

**Jon Calhoun:** Hey, Mat. Thanks for having me. It's been a while. I feel like I'm a guest now.

**Mat Ryer:** Yeah.

**Jon Calhoun:** You miss ten episodes, you're just officially a guest at that point.

**Mat Ryer:** You're always welcome, that's the thing. Host or guest. Whatever you like. And also, Johnny Boursiquot is here. Hello, Johnny.

**Johnny Boursiquot:** Hello! Yes, I am back, after a short -- is it short? ...anyways, after a few weeks of being away.

**Mat Ryer:** You've been busy.

**Johnny Boursiquot:** Yeah, busy teaching all that stuff; you know, my other favorite thing to do, other than being on this show.

**Mat Ryer:** I hear people tell me that they've done one of your courses and they loved it, so I do hear that feedback.

**Johnny Boursiquot:** \[00:04:04.13\] Yeah. I enjoy hearing that. I enjoy it when students reach out and say "Hey, your teaching, your course, your live workshop (whatever it was) helped me in my career", this and that... Oh, man. I love to hear that. As a teacher, it's one of the best things you can hear.

**Mat Ryer:** Amazing, yeah. Absolutely. Tiago, you spoke recently at GopherCon UK, didn't you?

**Tiago Mendes:** That's right, I did.

**Mat Ryer:** First of all, how did you decide to do that? What was the story around that?

**Tiago Mendes:** Essentially, it came from a problem -- the talk originated from a problem that I have at work. So I work for an insurance company called Cover, and we have this problem - and I'll dive deeper into the problem, so I'm not gonna go into too much detail... But we have the problem of changing data across multiple microservices in one go, where data either has changed, or has not changed. It can be in an intermediate state. We actually don't deliver the eventual consistency there. And I've found that it was a very interesting topic, and it was a very challenging topic... And it got me to research exactly what are the practices that we have, and the patterns that we have to implement these types of changes... And I've figured that there are some talks or some repos with Go doing this, but I've found that there weren't a lot of talks or a lot of resources specific in Go, and I thought "Well, this might be a very good talk, because it's a real-world problem." It's actually a very challenging problem. A lot of things can go wrong, a lot of things go wrong... So yeah, that's how I decided that it would be a nice talk. And after two years or something of no conferencing - yeah, I felt it was a good thing.

**Mat Ryer:** Yeah. And I'll tell you what - it's probably the talk with the most questions that I've ever seen, honestly. After your talk, how many questions -- there was like 25 minutes of questions, or something, wasn't it?

**Tiago Mendes:** It was pretty interesting, because usually when you don't have questions, you always get yourself wondering, "Was this talk that boring, that no one really has a question?" When you have a lot of questions, you think, "Was this talk that shallow, that I didn't explain anything?"

I think in that case it was actually a really good thing, because it just highlighted how this problem can appear in many different ways and be solved -- like, there are a lot of different small things throughout this whole pattern that need to be fine-tuned to each business and to each application, and most of the questions were essentially about "So what if I don't want to roll back my data? What if I just want my data to essentially be all of it committed, it doesn't matter if it's today or tomorrow?" Or "What if I don't want distributed microservices, or anything...?" There are so many ways of solving this problem and fine-tuning it that those questions were -- as tough as it was to be there for 25 minutes and keep seeing the hands raised, I think it's also a good thing, because when that video comes out on YouTube, and if I ever need to apply for a job again, I'll just share that video and it's my systems design interview there. \[laughter\]

**Mat Ryer:** No, absolutely. Okay, so eventual consistency - let's talk a bit about this... What is this problem? It's kind of one of those ones where I think non-technical people are quite shocked by the fact that this happens. Who wants to have a stab at just high-level, what do we mean? When does this happen, in what situation?

**Tiago Mendes:** Well, I'm wondering if anyone else wants to have a stab at it...? I can definitely give a bit of an insight. So eventual consistency is a problem that arised with the microservices and distributed world. So with microservices we usually also have databases all distributed; so whenever we want to make a transaction, so whenever we want to make a change, that has to affect multiple data sources.

Imagine that you have a policy table, a vehicle table, a profile table, and you have to change all of that data in one go. With a distributed system, that's very hard to achieve, because you need to make multiple requests and guarantee that the data changes.

\[00:08:00.18\] So eventual consistency, in my view, is you need to ask for the change to happen, and you just need to be okay with the fact that the change might not happen now, it might happen in two minutes, in five minutes, tomorrow, just because of networking problems, services may be down... So eventual consistency means that you make a request now, the data eventually is guaranteed to all be changed, and you'll eventually get all of that data changed.

I noticed that it's a hard topic to actually explain. It's hard to explain this eventual consistency thing, and I was trying to find a good analogy for it... And I thought about the analogy of - so two people that want to meet somewhere, it's a three-hour drive, and one person takes two hours, the other takes three hours, and they both leave at the appropriate time, but one person gets stuck in traffic, the other person arrives, but eventually, that first person will also arrive there, and eventually they'll be consistent and meet each other. I'm not sure if it's the best analogy, but it was what I could think of...

**Johnny Boursiquot:** So if I may add a little bit of nuance there... So when we talk about consistency, that's sort of at the storage layer, right? So let's take it one step before that... To give an example, if you have a system - that is made up of multiple parts, right? Say you go on a shopping website and you have one part of the system that is responsible for taking in the order, and then there's another part of the system that the first system communicates with, to basically handle the credit card transaction; to basically charge the customers a credit card, and to send back some sort of yay or nay, and allowing yet another system to handle maybe the shipping of that. So you have all these different systems that need to be aware of that a transaction has occurred; they need to package your stuff and send it over to the customer.

So even before the storage comes in, what do you do if for whatever reason that takes the order, say the shopping cart component - it makes a request over to the credit card processes system, it succeeds in charging the customer, but then when we try to go talk to the shipping (a component), it fails. So now here you are - you haven't even actually stored anything yet, perhaps, but here you are in a three-interaction system where part of the transaction has succeeded, but part of it has failed. How do you handle the situation? This is not as simple as doing a rollback of a database commit, because you already have one system that's communicated through a third party to process a credit card transaction, which has succeeded. You can't exactly roll that back. So it's not an all-or-nothing kind of situation.

So a part of building these kinds of distributed systems is basically figuring out "Yes, there's a storage mechanism which you can rely on eventual consistency there", but what do you do when you have a multi-step process where some of those steps could fail, and you might have to reprocess the same thing? Or when something fails because the system is unavailable, or the third-party you're talking to is unavailable, there's some upstream or downstream dependency issues...

This is why distributed systems are so hard; not just at the consistency of the storage layer, but really throughout the whole stack. This is why it's such a challenging problem space to be in. Not impossible, just challenging. But fun, too.

**Mat Ryer:** Yeah. So Tiago, in your talk you mentioned the Saga pattern, and maybe you could tell us a little bit about what that is for anybody not familiar... And what the alternatives are, as well.

**Tiago Mendes:** Sure. So the Saga pattern - and what is surprising is that the Saga pattern was described first on a paper in '87, so it's nothing new... But the time it was described it was a pattern for long-lived transactions in the local database; so transactions that take a long time in getting those transactions done.

\[00:12:07.09\] And what happened is that with the advent of microservices, this Saga pattern was then adapted to handle the distributed system case. And this Saga pattern - it's not an acronym. A lot of people asked what's the acronym for it; it's not exactly an acronym. I think it's the Saga pattern because each of the intervenients are called Sagas, or each of the transactions are called Sagas.

What it does is it comes into two flavors. One of them is - it's a pattern that allows you to change data in microservices and guarantee that those changes will be consistent, and it has those rollback mechanisms that can still be hard to get, but it does feature rollback mechanisms.

The two ways you can do this Saga pattern is by choreography, where you have each individual service just emitting and consuming events to process the data changes. So there's an event saying -- picking up Johnny's example, there's an event saying "There was an order created. Please process this order." Then the order is created. Then there's an event saying "We need to process a payment." Then the payment service is responsible for processing that payment. Then there's the event saying "Payment process. Please ship." And there's another service handling this event.

So that's one way to do it. The other way to do it is by orchestration, where you have a central brain, and that central brain is responsible for creating messages to each individual service. So the central brain says "Okay, we need to make a new order. Order service, please create a new order." Order service says "Okay, order created" etc. And we go for the shipping service, the payment service... And once all that is done, it's up to the orchestrator to just finish up successfully. And in a nutshell, that's what the saga pattern is about.

The alternatives are -- I think there's some different alternatives that I haven't really explored, but people often talk about a two-phase commit. And the two-phase commit is when you query each service and say "I want you to update this data." The service doesn't update the data yet. The service says "Okay, I'm prepared to update this data." And you call all services, all services will give you the okay; so you call service A, okay. Service B, okay. Service C, okay. Okay, then we're good to go. And then you call the services again and say "Okay, then do the commit."

The problem with two-phase commit and why people tend to go for Sagas when they need more resiliency is that a lot of things can go wrong... Because a service can say "I'm okay to commit", and then when you go to commit, it fails. And then you have a situation where you might have to manually intervene, and then develop another mechanism to fix these changes and make things consistent... If the coordinator goes down, you end up in a state where the coordinator made a request to one service, it went down, and then what happens then? The service already changed, but the others didn't... So there are a lot of things that could go wrong, and Saga tries to solve this by using the asynchronicity of all these transactions.

**Mat Ryer:** Now, it sounds like, since that paper -- you know, the original ideas came from 1987... I feel like this ought to have just been solved by now, isn't it? It's common enough a problem, but we all tackle it ourselves still. Why is that, do you think?

**Tiago Mendes:** It's an interesting question... I was surprised by two things after the talk. I was surprised in one point about how many people already talk about this problem online. There are a lot of very interesting talks, a lot of people are already solving it. So it seems like it is a standard, because if you go to even Azure and AWS, they have in their docs how to implement the Saga pattern using their infrastructure. I think they even have the infrastructure setup to deal with Saga. So you already have platforms that come with this out of the box and you don't need to implement anything yourself.

I have a feeling - and I can't confirm this with any type of data - that it's just a pattern that is not yet very widespread. A lot of people, when they see this problem at work or day-to-day lives, you try to think by yourself, because you think "Well, this is a unique problem." We know all the information from microservices books, but a lot of books don't cover exactly the Saga pattern, they just cover how you can deal with this.

\[00:16:12.03\] So people end up dealing with it themselves, without researching that there's a saga pattern... Which is perfectly valid. Like, if it solves your problem, it solves your problem; you don't need to go to a technical description of how you're solving it. So my gut feeling tells me there are a lot of people that already used the Saga pattern without knowing that they're using the Saga pattern.

**Jon Calhoun:** I would probably guess that for a majority of people they probably don't need to use eventual consistency or anything that complex. A lot of us work at large companies where we get introduced to that. So if you worked at Google or something, you pretty much have to deal with it. But if you're working at a smaller company, introducing this is just a lot of complexity that you don't need... So I'm guessing there's just a ton of developers out there who never actually have to implement it. So the result there is they don't really learn about it or put it to practice. Anybody who's learned about algorithms or anything like that knows that until you've actually coded it, knowing it in theory and knowing how to actually implement it is two completely different things.

**Tiago Mendes:** So true.

**Break:** \[00:17:08.06\]

**Mat Ryer:** Yeah, so it's very interesting, this idea -- I think some of the technical problems that we face are probably quite unique, and it'd be interesting... Because I could imagine there being a Go package that you can just pick up and just use... And I know there are some examples of frameworks like that... But I find that in some way, your problems really are quite unique. But obviously, learning a pattern like this from people that have implemented it can only really help there.

But it's interesting... So one of the other questions I had about this is whether the system design itself can help here. I'm thinking things like idempotency. Do things like that help? You know, when we're talking about message queues and messages flying around, they may or may not make it, and you kind of have to assume that sometimes they're not gonna make it... Which is kind of unusual when you're programming, because you tend to think of - you just write code, and you don't assume at any point something's just not gonna work, really.

**Johnny Boursiquot:** Or that you're gonna get the same message multiple times. That is very, very common within distributed systems. So you kind of have to factor in idempotency, and things like that.

**Mat Ryer:** Why does that happen? Why does it happen that you get the same message multiple times?

**Johnny Boursiquot:** \[00:19:57.01\] Well, you can imagine -- say you have a cluster of systems who are responsible for relaying a certain message at a certain time. Maybe the coordination. I have a feeling it's gonna vary from product to product, but assuming you have a system where you require some coordination to relay that a particular message was communicated, or that a client picked up a message, or whatever it is. It could be timing, it could be however they track which message has already been communicated... And because you might have some overlap at some point - though rare, it does happen; so it could be that the same message finds itself staying in a queue when it's already been picked up; the window for it, for whatever reason, doesn't get set to hide it from other clients picking it up, so that message ends up getting picked up again, multiple times, sometimes by the same client, sometimes by other clients...

So you kind of need to factor in the fact that in a distributed system, especially when messages are involved, which is a common thing for evented systems \[unintelligible 00:20:52.27\] So with these kinds of systems, you kind of have to factor in the fact that you may get a message multiple times, and it's up to you as a developer -- then I have to solve it at a systems level, at this point. It's up to you as a developer to engineer your software for that \[unintelligible 00:21:13.12\]

**Mat Ryer:** And this is this idempotency word... How do you all say that word, by the way?

**Johnny Boursiquot:** Idempotency.

**Jon Calhoun:** Idempotency.

**Mat Ryer:** Okay. Idempotency. Cool.

**Johnny Boursiquot:** Do you wanna try it again, Mat?

**Jon Calhoun:** That doesn't mean it's correct; it's just the way I say it. \[laughter\]

**Mat Ryer:** Yeah, I'll just go with peer pressure. I'm happy with that.

**Jon Calhoun:** I think one thing that's interesting about the messages, like what Johnny was saying, is that - in the ideal world you want something that's like you get every message exactly once. But we all know that's not realistic. So you kind of have two choices. It's like, you occasionally don't get messages, which could be awful, or you have the opposite, where you might get messages multiple times. And when you're looking at the two trade-offs, getting them multiple times is clearly a better option than not knowing about something you needed to know about.

**Mat Ryer:** Yeah, right. So idempotency then is the idea that, assuming you get the same message twice, your system should be in the same state as if you just got it once. And a simple example is addition; a +1 message is not idempotent. If you get two of those +1 messages, and you've got some value, it's gonna end up being +2.

**Tiago Mendes:** Yeah.

**Mat Ryer:** If however you get a value that says "Set it to the number 1", if you get that message twice, then it's okay. You get it once, it sets it to number 1, the second message comes in, you set it to number 1. And you're in the same state. And that's like a contrived example, but when you build your own systems, you will see that. For anyone who hasn't done it before, you'll see in your particular case a real example probably of that kind of thing.

So yeah, sometimes it's like -- well, I think you have to assume that you're gonna get the messages multiple times.

Francesc Campoy, actually, of justforfunc fame, and loads of other things, told me once of a time when he was building something, and for whatever reason, one in a hundred messages just took a long time; a request was made, and it just took a really long time... So the way they dealt with it was they would just always make two requests, and whichever one came back first would just cancel the other one. So almost by design there, they're sending multiple messages. So you kind of need then some resilience with idempotency or something in that case.

**Tiago Mendes:** Yeah. One of the top tips around Sagas that are usually mentioned is to use transaction IDs, so that you can use these transaction IDs to know if this particular transaction ID was already processed or not. For example, if you're changing data, you don't need to exactly have a +1, but you might be getting into the case where you're updating your database twice, or whatever... Which wouldn't be a critical case, but still, you probably don't wanna do that operation. But for example in banking, if the request really is "Transfer 10 pounds to that other account", you don't wanna process that message twice. So you can use transaction IDs to guarantee that if this message comes, you just don't process it again, because you already processed this transaction ID; just throw it away.

\[00:24:12.03\] And that's one of the key things also about Sagas, is to use transaction IDs. They help you in more than just this, but it's very helpful to guarantee that you're not making the wrong changes.

**Mat Ryer:** Yeah, one example that I think people might be familiar with is when you do an update in like a SQL request, a SQL command executed... You can sometimes have conditions on an update. So you can say "Update this if" a particular value is what you expect it to be. And I've seen this done with like a version number as well in the row. So you might read the record and you see it's version nine, and then you say "Okay, make this update on the condition that the version is still nine." And then if anyone's been in there before that to update it, that will fail, because something else has changed and you have to sort of go back and then do it.

So that's kind of one example of a simpler version, I think. But maybe you could tell us a bit more about the Saga pattern. How does it actually work, and what does it do?

**Tiago Mendes:** I'm going to focus a bit more on the orchestration pattern. I haven't had a lot of experience with choreography. With orchestration, what happens is you have, again, a central brain that is coordinating the changes... And whenever there's a request that says "I need to change data in these three services", or for example there's a new order here; let's pick up that order example, because it's a really good one, and it's one that is often used in these cases.

So there's a new order. The orchestrator will then be responsible for putting a message in the queue and saying "There's a command to update the order." And the order service will be responsible for getting that and taking that stock out of order, or holding that stock, whatever it might be. And then it will reply. So there's a concept of a reply channel within your message broker. So you use a message broker for this, and there's a concept of a reply channel, which the orchestrator is set to always listen to.

And so when the order service says, in this reply channel, it sends a command saying "Order updated", the Saga will then call the other service subsequently, through this message broker.

One important thing that the Saga orchestrator is also responsible for is to hold a log of the transactions and the state. Essentially, the Saga orchestrator will need to know in which state it is to know which of the services it should call next. And then finally, you have the concept of compensating your transactions. So in case -- you told the order service to hold the stock, you told the payment service to capture the payment or to hold the funds for the customer, and then you told the shipping service to ship... If the shipping service said "I cannot ship this. We're having problems", then you probably will need to roll these changes back, for whatever reason.

And again, there's another business case here that you could just say "Okay, you don't roll back, but you just wait until you can ship this." But let's suppose that we want to roll back here... What you would do is you would then start issuing compensation commands. So in that reply message, instead of the command being "Move forward to the next step" or "I updated this", the command will be "I've failed. Compensate." And the Saga orchestrator is then responsible to say "Okay, then payment service, compensate this", or for example "Release the funds", or "Refund the customer. Order service, compensate this, so put the stock back in the place it was." And this is how these systems can self-heal. And the Saga will always keep the log of what's going on, which point, for each transaction ID... It's very important to have those transaction IDs to know which of the transactions you're talking about at this point... And you'll always keep a log of your steps and the compensating transactions that you need to do, or the next transactions that you need to do.

**Mat Ryer:** \[00:27:56.06\] So is this the case where every service, every microservice needs to know how to kind of undo itself? \[unintelligible 00:28:00.18\] depending on your case.

**Tiago Mendes:** It depends on the business. But if you need to roll back, if you wanna have the concept in your business of rolling back data, or the concept or rolling forward, for example instead of deleting the row on the database you add a new row with the previous data; that's also a valid way to do it. Each service should know how to compensate the transactions.

**Mat Ryer:** Yeah. And it's interesting... This kind of speaks to why there isn't just a Go package that you can just implement really, because a lot of it is about business logic, a lot of it is very specific to what you want to happen in each case. But it kind of reminds me of errors in Go. We do kind of consider the failure case. So if we're trying to open a file, we know that that may not open, for whatever reason.

With Go, errors are brought to the forefront; they're returned usually as the second or last argument; hopefully, the second. So we get these values back that we then immediately check. And we get into that habit... And I know that some people still kind of complain about this in Go, but it forces you to consider the failure case. It forces you to think upfront about what's gonna happen if this thing goes wrong. So it kind of reminds me a bit of that.

**Johnny Boursiquot:** At this point I think if someone still has a problem with the way Go handles errors -- well, I have choice words for you, but this is a family-friendly show... \[laughs\] Anyways, so... No, the thing is - there's a lot of truth there. I used to be one of those people complaining about the way Go handles errors when I first came across it. I'm like, "Um, I'm not used to this. I'm used to throwing things, caching things and whatnot..." I'm like, "Where are the keywords? Where are the built-ins for that?" And I realized -- the first time I was forced to implement and design a system that was resilient... It just happens to be I was communicating with some remote HTTP service, and I was getting throttled, and I didn't realize that until it went to production... I'm like, "Oh, okay, I need to do something about this." And there's easy ways of getting that. So basically, using the error system to capture the fact that I'm getting throttled, checking those errors and implementing some sort of back-off, and implementing some sort of retry, things like that... \*coughs\* Excuse me. Yeah, that was a retry. \[laughter\]

**Mat Ryer:** You've just guaranteed that that cough is gonna make it into the show.

**Johnny Boursiquot:** I know. Yeah, let me retry this... \[laughter\] I mean, using the language and using what it provides you... There's a reason these things are there. To kind of tie this back to what we were talking about before, around the design of these systems - yes, it is hard to have a framework or a package that you can just throw at things to fix these kinds of problems or implement them for you, because it's very contextual to the business that you're in, to the problem domain that you're in. But for me, that is part of the fun; that is part of the engineering fun.

I think everybody -- hopefully, if you're lucky enough and you get to work on a system that is distributed, that is large enough to require these kinds of problems, I think some of these systems have been the most fun I've had engineering solutions... Because they acknowledge the fact that the world is not a linear sequence of events; there's always things going on concurrently, or in parallel, with whatever it is you're doing right now. So it's an acknowledgment of the reality of the world that systems fail, network fails, disks fail... There's gonna be some sort of failure. It could even be sort of a business logic that actually fails whatever it is you're trying to do. So it's an acknowledgment of the fact that things will not go as planned, and you should build in the resiliency in your system to be able to accommodate to these eventualities.

So I think it's a perfectly reasonable thing to expect engineers working on systems of a certain size to know about the Saga pattern, for example, to know about how to deal with these resilient system and to work with their teams to figure out "Okay, what are the different failure modes? What are the things that could go wrong in the process? What are the workflows that we need to set? Parts on a component can wait for other parts to recover" and things like that. So identifying these things - that is the beauty of engineering these kinds of solutions.

**Mat Ryer:** \[00:32:03.04\] Yeah. That's very -- you're getting me excited now; I wanna go build some enormous thing...

**Johnny Boursiquot:** You wanna build a distributed system? \[laughs\]

**Tiago Mendes:** On the topic of packages, I think there are a couple of packages implementing Sagas... And I think you can make this generic enough that -- okay, you define your business logic, you define the functions that proceed with the transaction or compensate, and then you have the \[unintelligible 00:32:23.13\] But I couldn't agree more with Johnny - what's the fun in that? What's the fun in using something already built when you're dealing with this interesting problem? So yeah, I think it's always cool to build new things.

**Mat Ryer:** Yeah. It's funny as well what it leads you to do with eventual consistency. I have an example in the frontend where the actual request would usually take some time. And in a big distributed system, if it was like say a chat app, one person might be in South America, another person might be in Scotland, and it's possible that they won't be speaking to the same server; in a distributed system they're probably gonna be talking to their own local servers, so it's faster. So what happens is then somebody in Scotland will make some comment, and if you build it so that you're kind of being very true about what's happening, that would take quite a while to complete. You would have to wait for it to be written to the local database, also then be copied across, so that the person in South America can see it... And that might take some time. So - I've done this too in the past, where you kind of do some tricks to paper over this a little bit. For example, when you press enter on the message, you immediately pop it into the box, so it looks like it's sent, even though that's just an illusion, while the request is still happening in the background, and the consistency is still not there yet; you know, you still have to wait. But you sort of assume or you pretend it's gonna be fine. And only later, in our particular case later, if there was a problem, you'd then flag the message as "Oh, there's some problem with this" and you can retry or whatever. Or it would even retry for you.

So you end up doing those kinds of little tricks to paper over the realities here. And if you think about like the internet, there's so many errors all the time happening on the internet, and we don't really notice them. We can still carry on -- like, we're still just doing a live chat now; we're spread all over the world, us four.

So that's always quite fun as well, I think, when you think about user experience and how that plays, understanding that this is gonna take time. It might fail, but we're gonna assume it's not gonna fail, and crack on with it.

**Tiago Mendes:** One of my favorite talks around Sagas - and I haven't admittedly watched that many, but I really liked it... This talk is by a woman called Caitie McCaffrey. She had a lot of lead roles in Twitter and Microsoft... And she gives the example of Sagas with the Halo game, and dealing with the scoring, where each score comes from each individual Xbox, and then you have to commit all these scores to every other Xbox of all the other players. So imagine you're playing online, and imagine that you see your score as 100, and all other players will need to see that your score is 100 and their score is whatever it is... But you can't really show people that their score is now lower than it was before. So you can't really roll back that score. So what they did is like -- people don't care about having the score right away, so we just let the system heal itself, we just let the system eventually get all the scores to every person... Because it doesn't really matter, because people just go on to the next game and the score will eventually be there. I think it's a really interesting example. The talk is brilliant, and I recommend everyone to watch it if they're interested in this topic.

**Mat Ryer:** Yeah. Well, please send us the link and we'll pop it into the show notes.

**Tiago Mendes:** Will do.

**Mat Ryer:** We won't be able to put Tiago's talk in the show notes, because I don't think it's going to be published by the time this episode goes out, but... \[unintelligible 00:35:50.02\] or eventually you'll find it.

\[00:35:58.07\] I've got another example of a real one that I had, where I built this game, it was like a choose your own adventure game on Twitter, where the audience chooses the branch of the story to go down by using Twitter polls. So all the followers vote, and that's the decision that's then taken. And when using the Twitter API to read the poll results, sometimes I'd get old data. And this again is down to eventual consistency, the fact that it may be some of the servers probably had the latest information, but it just hadn't propagated across the system yet. So for whatever reason, through the magic of routing around the internet, I was hitting a server with old data... And it reminds me of that Xbox score problem.

The fix was to just basically say, "Well, there's no way to unvote on Twitter, so if there's fewer votes, ignore it. It's old data." That was like a bit of resilience that I didn't expect. And again, it's because I think I just assumed when you ask Twitter what's the latest results, they'll tell you what the latest results are. But of course, in the real world it's not so easy. But that's another kind of interesting thing you have to do when dealing with eventual consistency.

**Johnny Boursiquot:** There are some systems that understand this dilemma, and actually offer you a choice for when you make your request, whether you're okay with possibly stale data, or whether you want your request to basically be strongly-consistent with what's basically in the cluster.

**Mat Ryer:** That's really funny.

**Johnny Boursiquot:** Yeah. You can ask for that, and the trade-off comes at the cost \[unintelligible 00:37:43.08\] might take longer, you might have to pay a little more... But if you're willing to make that trade-off, you can make a request that says "Hey, I want all the servers in the cluster to synchronize and agree on what the latest is." Don't just give me the first one that is able to give me an answer that could possibly be stale. I want them to all figure out "Yup, we all agree that this is the right answer", and send that back to you. You incur that cost; your request is gonna be slower and you're gonna pay more for it. But if your problem domain is one that requires that sort of consistency, there are systems out there that will provide that to you.

**Mat Ryer:** Yeah, so that's really interesting. Imagine seeing that in an API though... "Would you like the rubbish version?" \[laughter\] But fair enough, it is a trade-off.

**Jon Calhoun:** It's the cheap version versus the expensive version, Mat. Not the rubbish version.

**Mat Ryer:** I know, but it just seems like they're trying to upsell.

**Jon Calhoun:** This is your API. You're like, "Do you want the rubbish version or not?" That's your \[unintelligible 00:38:34.24\]

**Mat Ryer:** Yeah. For the free one it's fine, but occasionally, it's just random, crap data... \[laughs\]

**Jon Calhoun:** The examples I've always seen are -- like, there's databases that do this where if you have five database nodes, and you write, and it's guaranteed to be written to, say, three of them, so that you know... Like, there's a quorum, I think so they call it... There's a lot of databases that do that, and when you're reading, there's certain data that you pretty much need to show up to date for certain reasons. Like, if a user just created an order and it doesn't show up in their account, they're gonna be like, "Whow, what happened?"

**Mat Ryer:** Yeah...

**Jon Calhoun:** But on the other hand, if they're looking at like reviews for some products on your page - well, if those aren't up to date, it's not the end of the world. So it's kind of deciding which data it's okay to do that with. Because the downside is if you try to make everything up to date all the time, then you basically lose all the benefits of having this spread-out database system that you have, because you'd be the same as just having one sort of master you write to... And master is probably the wrong word, because -- I'm just used to the SQL sort of terminology.

**Mat Ryer:** Yeah.

**Jon Calhoun:** But essentially, you have one main --

**Johnny Boursiquot:** I think you mean main. Yeah, "main" is the word you're looking for.

**Jon Calhoun:** Okay. So you have the main, and then you have the secondaries. Is that the new --

**Johnny Boursiquot:** Primary, secondary... Whatever it is that you wanna use, yeah.

**Mat Ryer:** Jon, you're like an uncle that's really digging himself a--

**Jon Calhoun:** I am digging myself a hole. It's one of those things where like -- I've heard the terminology forever, and I know I need to change it, but I don't say them often enough because I'm not like around other engineers often enough to use them... So it's like, "Darn it, I did that stupid thing again."

**Johnny Boursiquot:** At least you're aware of it and you're now working on it. That's all we ask, right?

**Jon Calhoun:** I try to keep up with it, but...

**Mat Ryer:** With the kids.

**Jon Calhoun:** ...it's hard sometimes.

**Mat Ryer:** \[00:40:09.02\] But yeah, you're right... So that's the thing - the advantage of having a fast system that is distributed is you don't have to wait so much for all that. But of course, sometimes you'd prefer it. That's interesting, and I think that gives people a lot to think about, when they're designing their system. And honestly, I think the user experience, which you mentioned, Jon, is kind of something that you should consider; take into consideration. Because the users will expect something, and we have to kind of make sure that they get what they need. And that might well influence the design. It should influence the design of the system, and these kinds of decisions.

If you think of the case of insurance, where changing data is not only something that you need to show the customer, but it's something that is reflected on a legal document, the final policy... And that final policy, that's the law; whatever information is there, whatever the user declared there, it needs to be the most accurate information. If you have an inconsistency between this policy document and your systems, and then while your policy has one type of information, there's some other request that is very important, gets a different type of data, it shows a different type of data, this can actually be quite serious. So it goes a bit beyond just the user experience. It can have actually legal implications. So it's also interesting from that point of view.

**Johnny Boursiquot:** So can you imagine a time where people had to -- in the case of insurance, for instance, where people had to manually do data entry, so to process these things... So maybe you talk to your agent, who then gets a piece of paper, or whatever it is... You know, back in the day you used to go to an office, or they would come to your house, whatever it is, and by the time they leave, \[unintelligible 00:41:52.11\] I mean, your house could catch on fire, you could get into an accident, whatever it is... So that buffer where technically, legally, you have no coverage in your insurance...

**Tiago Mendes:** I guess you can use the proof of communicating that... Like, date and time. I communicated this at this date in time, so this is my accurate data. It kind of solves it for you, I reckon.

**Jon Calhoun:** I think they can sort of back-date some things, too... Like, as long as they claim they received payment or something, it was back-dated, you're okay. Because I think I had some weird situation like that where I communicated something I communicated, it needed to be canceled, and they tried to renew it, and I was like, "No, I can --" Just weird things like that.

**Johnny Boursiquot:** Sure.

**Jon Calhoun:** But I think even -- what is it, the health insurance you get if you leave the company? Is it COBRA?

**Johnny Boursiquot:** COBRA, yeah.

**Jon Calhoun:** I think COBRA... You can sort of go back, and there's some things you can do weird with it, where you can almost turn it on retroactively, or something...

**Mat Ryer:** Why would you need that?

**Jon Calhoun:** But I don't remember exactly how that works.

**Mat Ryer:** You only need to do that if you've hurt yourself, I suppose.

**Jon Calhoun:** It's weird the way it is, because I think you can opt for it retroactively, but you have a short window to do it...

**Johnny Boursiquot:** Like a three-month period, or something...

**Jon Calhoun:** Yeah. And I don't know if it's because of that, in case they don't get the papers, or something, you aren't left hanging... I don't really know.

**Mat Ryer:** Coming up next on Insurance Time, we're gonna be talking about premiums. \[laughter\] Of course, Tiago and I live in a country that has \[unintelligible 00:43:12.10\]

**Tiago Mendes:** And there goes all the listeners and viewers... \[laughter\]

**Mat Ryer:** But you also work at Cuvva, don't you?

**Tiago Mendes:** I do, I do. That's why I keep talking about insurance, because it's the domain I'm familiar with in this circumstance. But on the topic of how complex it is to manage these systems, one of the funniest, most interesting question that I think summarizes everything around this, that I had at GopherCon, was - someone asked me, "Is this even worth it? Is it even worth doing all of this? Why don't we just have our old monolith?" And again, the answer is "Maybe an old monolith is the best solution for you." No one says you really have to go into microservices. Sometimes it's just simpler to deal with a monolith. Or even, if you wanted to -- if that little piece of your system is like... If the order as in the payment and the shipping are so inter-related, maybe just create a kind of microlith just to manage that, if you find that it's simpler. So there's no one-size-fits-all, there's no one magic solution. Yeah, I think it's very interesting.

**Mat Ryer:** \[00:44:13.22\] And then we should also mention a little bit about testing, because that must be quite important, especially when we're talking about failure cases. Do you try and write tests or have some kind of test coverage for those failure cases? How do you make sure that the rollback stuff is working as expected?

**Tiago Mendes:** Someone actually asked this during my talk, during the questions... I think to properly test this, you need to go to the integration testing level. I think unit tests can miss a lot of things here. If you go to the integration testing level, I think there's a concept -- if you look at Stripe's API, they have a really interesting concept to test cards failing and cards with no funds... So they have different cards number for test cards that you can use, and one card number will be a card that requires \[unintelligible 00:44:57.05\] and is okay to go; another card number will always have insufficient funds, and you can test it this way.

**Mat Ryer:** That's mine. \[laughter\]

**Tiago Mendes:** Give me your number, Mat. I need to test that. \[laughter\] And with Sagas it's the same thing. You can think of an integration test where you send data with particular fields, like this transaction ID, or this particular transaction ID is a transaction ID that will fail at this step. And then you can test that your Saga -- on an integration level with all your message queues up, all your databases up, and you can test that your Saga does what it's supposed to. And I think that's one of the ways to tackle this.

**Johnny Boursiquot:** You could even test that in production. \[laughter\] Yeah, seriously. I'm being serious. You can literally - maybe as part of a canary or something like that - make sure that whenever you roll this out, that all of those failure cases that you think work in your CI and CD pipeline and in your staging environment, whatever it is, that they actually do work in production as well once you roll it out. I'm becoming more and more of a fan of testing in production in general, so that's why I'm saying it.

**Mat Ryer:** Do you need each service to implement rubbish mode again, so that each service can actually fail as well?

**Johnny Boursiquot:** No, because if the service is doing what it's supposed to do, or if you have a transaction that's supposed to fail, it will fail if you try to talk to the credit card charging service and it sees that transaction, and \[unintelligible 00:46:12.13\] then all the other systems don't need to know that "Okay, we're all in testing mode, okay all other components? That's what we're doing today." No. Individually, they work as they're supposed to, and only you as the orchestrator know that "Okay, this should fail at this particular step in the workflow." But you can do that in production.

**Tiago Mendes:** It reminds me of that sentence from "The Falcon and the Winter Soldier" - he's out of line, but he's right... \[laughter\] About testing in production. It's actually not a bad idea when you think of it.

**Break:** \[00:46:47.23\]

**Mat Ryer:** Okay, Tiago, have you brought an unpopular opinion with you today?

**Tiago Mendes:** I have two, and you'll need to choose which is more unpopular, and that's the one you're gonna use.

**Mat Ryer:** We sort of make the rules on this show, actually... \[laughter\] But yeah, we will do that, but it's because we want to, not because you've said it. \[laughter\] Okay, go on then. What's your first one?

**Tiago Mendes:** First one - and note that this comes from a guitarist, but... Base guitar is actually way cooler than electric guitar, or just normal guitar.

**Johnny Boursiquot:** Agreed.

**Tiago Mendes:** Yeah.

**Mat Ryer:** Do you know what - I love the bass guitar.

**Tiago Mendes:** Me too.

**Jon Calhoun:** I can't vote on this, because I tried to learn bass guitar and it was too boring for me... \[laughter\] It just didn't jive with me...

**Tiago Mendes:** That's why it's unpopular.

**Jon Calhoun:** But the thing is, I couldn't do regular guitar either. Neither one caught my interest, so they both were just boring.

**Mat Ryer:** You need a guitar with five strings, it sounds like you'd be good on that. You need the Goldilocks guitar.

**Jon Calhoun:** They're both boring things, and I can't vote on which is more boring to me. \[laughter\]

**Mat Ryer:** Amazing.

**Tiago Mendes:** The other unpopular opinion, which is a bit more on the techy side, is that "Move slower, think through things" is more effective than "Move fast, break things." So that's a popular Facebook motto, of "Move fast, break things." And I like to say - I think moving slower and thinking through things is actually more effective than moving fast and breaking things.

**Mat Ryer:** Well, definitely in Facebook's case... And those things - it's fine if those things are just like servers or bits of UI, but when they're democracies... Then yeah, \[unintelligible 00:50:08.26\] go a bit slower, thank you...

Okay, but do you not see -- is there value in the learning you get from actually implementing stuff? Like, actually doing it always for me reveals things that I probably would never have thought of. Or maybe I would.

**Tiago Mendes:** My caution comes from the place that you always need to be aware of the technical depth that you're introducing by "Move fast and break things." And if you can pay that technical debt, it's fine. But if you can't, not making a good design decision, not thinking through a problem can really bite you in the long run.

**Jon Calhoun:** I suspect this motto stems from the fact that -- it's the type of motto you'd hear from a small startup, where basically their option is "Move fast and get money before we go broke", because they don't have the time to move slow. So while there might be cases where some are much better off moving slower, I think sometimes when you're just desperate to get any sort of income and to be able to stay alive, that leads to this "Move fast, break things."

**Tiago Mendes:** So there's this interesting book -- for the life of me, I can't remember the name of the book... And they explain an interesting phenomenon, which is the company that moved really fast to get on the market and made a lot of trade-offs - it can move fast, but then it starts flatlining in terms of progress. Whereas the company that took a bit longer to go to the market, but had well-thought systems and architectured in a way that they can extend it, they can add new functionalities like that - they can actually pick up and even surpass it in the long run. And that's one thing that really stuck to me... Because it can be quite cumbersome to have to maintain a lot of old code that wasn't really well thought of.

**Jon Calhoun:** \[00:51:50.23\] I mean, I absolutely agree that introducing too much debt could be a big issue, and I think the larger or the more stable your company is, the more that applies. I would probably only disagree with that opinion in the case that there are definitely some companies that like -- if you're trying to build something and you literally don't even know if you're gonna be something people wanna pay for or use, then spending months trying to design the perfect system might not be the best idea, given that you might design a perfect system that nobody wants to use.

**Tiago Mendes:** I agree with you there. That's why it's an unpopular opinion. \[laughs\]

**Mat Ryer:** Even you don't agree with it. \[laughter\] To be honest, it probably depends... We need a jingle for "It depends", really... But I see the merits in that. And actually, I think sometimes taking your time, making things easy to change and throw away... Like, moving fast if you're not gonna keep the thing - I think that's quite nice. So building something deliberately not very high-fidelity, if you are testing those ideas... And then you throw it away; and you do have to throw it away.

And I do find that I use that mechanism to learn, and then that will be how I design the system. And only after I've done a bit of that am I then ready to start to actually lay down some more serious foundations. So in a sense, I use that fast prototyping as part of the design process. So you could say I am doing quite a big design process there.

I object only to when we just spend too much time in documents, and we're trying to imagine things... And there will be things that happen that surprise you, so get it out there soon. But yeah, it's a very interesting point.

**Tiago Mendes:** I think you should build your systems to be extendable. Don't try to picture and envision all of the perfect future that this system will do, but make it so that if a lot of things need to change, your system is resilient enough to be changed, and it can be very easily changeable; it's very flexible in that way.

**Johnny Boursiquot:** Only after the third try. \[laughter\]

**Tiago Mendes:** I do agree, there's a lot of value in experimenting and throwing things away, and using technical debt to your advantage is also very valuable. So yeah, again, that's why it's an unpopular opinion.

**Johnny Boursiquot:** Oh, I have one.

**Mat Ryer:** What is it?

**Johnny Boursiquot:** Here it is, here it is, here it is... Blockchain. Blockchain developer is the new hotness of jobs. Now, whether or not you care for or think blockchain is a scam, or whatever it is that I see written out there, wherever you fall on the divide - wherever there's money, or potential for money, capitalists show up; people with money who wanna make more money show up, and they're gonna throw lots of money at this thing. And the more I learn about this world - and I don't know a ton about it, but the more I learn about it from a business standpoint, not necessarily from a technical standpoint, but the more I see... I start seeing job postings all over the place now for blockchain developer. It really is gonna be one of those odd, weird-looking things you're gonna start seeing pop up everywhere.

And as with most things, as with most technology, there are two times when the going is good in those fields, before the market gets flooded \[unintelligible 00:55:25.08\] So it's usually at the very beginning of the technology, and at the very end, when there's only two people left who know the tech. Those are the two times when you really can make bank on a tech.

I think right now we're sort of in the infancy, at the beginning stages of this whole blockchain engineering and developer talent kind of wave... And again, regardless of how you feel about the technology or its applications, there's gonna be fervent need for people who understand that stuff, and they're gonna be paid well, at least for the next 4-5 years or so. So if that's something that's of interest to you - hey, maybe now is the time to take a look into it.

**Tiago Mendes:** \[00:56:07.14\] I feel like there's a new blockchain company starting up every day.

**Johnny Boursiquot:** Yeah. \[laughs\] Pretty much.

**Jon Calhoun:** I need to learn blockchain now, and then learn Haskell later, and I'll be golden...?

**Johnny Boursiquot:** Yeah. \[laughs\]

**Jon Calhoun:** There's gotta be some servers left, right? I assume so...

**Johnny Boursiquot:** Hey, if you know Cobol right now, you can charge a premium, my friend.

**Jon Calhoun:** I've heard that with some of them, but I don't know if I'd appreciate it.

**Mat Ryer:** Yeah. If you don't like bass guitar, you're not gonna like Cobol..

**Johnny Boursiquot:** You're not gonna like Cobol, yeah. \[laughter\]

**Mat Ryer:** Boring. Cobol is one of those languages where the colon matters. The first six colons or something - they mean something; they change -- I don't really know. I don't know it, but...

**Johnny Boursiquot:** Yeah, kind of like spaces mattering in Python.

**Mat Ryer:** Yeah. But weirder. Because it's like, lots of space, and each one means something, and you can change things by putting something else in that space.

**Johnny Boursiquot:** So I heard an unpopular opinion... Mat says Python is weird. That's what I heard.

**Tiago Mendes:** That's very popular.

**Mat Ryer:** Well, this is a Go podcast, but I'm one of those people that's like "Do what makes you happy, and use whatever tool you like... And use Go. Learn Go, really, and just do that." \[laughs\] Do learn Go though. You can do blockchain with Go, can't you?

**Tiago Mendes:** After this I will learn Go.

**Mat Ryer:** Yeah, you should, mate. \[laughter\]

**Tiago Mendes:** I think it's time...

**Johnny Boursiquot:** Yeah, Go is hot in the blockchain, man... Go is hot in that sector.

**Jon Calhoun:** I feel like Johnny is telling people that he's open for offers. \[laughter\] Like, very subtly, but he's like, "Just in case..."

**Johnny Boursiquot:** Subliminal messaging...

**Jon Calhoun:** If you get a bunch of recruiters after this, it's your own fault.

**Mat Ryer:** Yeah. \[laughter\]

**Jon Calhoun:** And we know they're not gonna make any sense. However long the blockchain has been around, they're gonna say you need that, plus five years of experience.

**Johnny Boursiquot:** Yeah, exactly. Exactly.

**Mat Ryer:** Well, if you've got any more questions, Johnny can be found Twitter, at @jboursiquot. Good luck spelling his name though... That's clever.

**Johnny Boursiquot:** Yeah, which is why you omitted that whole thing by posting my name up as Golang Johnny on GoTimeFM.

**Mat Ryer:** I can't believe that... You can just search Golang Johnny and you find Johnny. How cool is that?!

**Jon Calhoun:** I just assumed he officially changed his name.

**Tiago Mendes:** That is my new career goal. Golang Tiago, or Tiagoland, and you can find me.

**Mat Ryer:** Well, you could do with a brand name... But hang on, let's just do it. I'm just gonna do it. "Golang Tiago." You might be surprised.

**Johnny Boursiquot:** You might be surprised, yeah.

**Mat Ryer:** Golang Tiago... Nowhere to be seen.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** No, you are, actually. You are on the frontpage of the search engine I'm using.

**Johnny Boursiquot:** Is it Altavista?

**Mat Ryer:** No, I just \[unintelligible 00:58:38.14\] We only have that in the U.K.

**Tiago Mendes:** There's a pkg.dev, that's not me.

**Mat Ryer:** Yeah, there's a package called Tiago, which - that's unfortunate. I'm just gonna have a look and see what that package is... It's just a main file that just says it prints out -- Tiago says "Look, my very first contribution to a proper free software project." And that's it. How adorable is that? \[laughter\] Scratch Tiago. Main.go. I love the internet. And we'll post show notes to that repo so we can get the stars way up. Let's get this trending. \[unintelligible 00:59:13.10\]

**Tiago Mendes:** To be clear, that is not mine. \[laughter\]

**Mat Ryer:** Yeah, it's too neat to be your code, Tiago...

**Johnny Boursiquot:** Goodness gracious. That is some shade.

**Tiago Mendes:** That means you've seen my code. So you're already talking about it and generating buzz. That's my goal.

**Mat Ryer:** There you go then. That's like fake code. It's like the fake news approach to code. I always know I've gone too far when Johnny goes, "Wooooh...!" That's when I worry then, like "Oh, no...! That's too much now." Johnny's like my canary. When he gets weird about something, I do.

Well, you believe it or not, that's our time. I can't believe it. It's been so interesting, and it's such an interesting subject that I'm sure we could continue to talk about for ages.

**Tiago Mendes:** \[01:00:02.13\] I feel there's gonna be a part two.

**Mat Ryer:** Yeah. Okay, again, mate - wait till you're invited... \[laughter\]

**Johnny Boursiquot:** Eventually -- the invite will eventually get there.

**Mat Ryer:** Yeah, eventually it's gonna happen. No, but definitely, yes, thank you. Please do come back, Tiago. And if you wanna follow any of our panelists or guests on Twitter, you can do so. Check out the show notes; we link to the Twitter accounts there. I only say that because that's the kind of place we usually hang out. Not always, but... There we go. Thank you so much, Tiago Mendes, for joining us today.

**Tiago Mendes:** Thank you for having me.

**Mat Ryer:** No, it was our pleasure. Johnny Boursiquot was also here, as was Jon Calhoun... I don't need to say my name again, because it's just weird, but... Bye!

**Outro:** \[01:00:43.04\]

**Jon Calhoun:** One of the big pieces of advice I've seen people give to new speakers is just "Don't take questions if you're not comfortable with them", because that can be something that scares people away.

**Mat Ryer:** Yeah.

**Jon Calhoun:** Which I understand. You don't want somebody to come in and be like "I'm gonna try to make you look silly", or something... And you worry that's gonna happen.

**Tiago Mendes:** That's one of the beautiful things of this community, is that people are not judgmental and people are not there trying to throw you off or see where your knowledge gaps live. They're there really generally trying to learn something. And I have no problem on stage saying "I actually don't know the answer to that." I say it in different words, I say it depends, which is a lot better than saying "I don't know." You say "It depends" and it's done. \[laughter\]

But yeah, I feel like with this community it's actually not that bad to take questions, because there's kindness there, and I don't feel like anyone is there trying to be mean.

**Mat Ryer:** Yeah, I know what you mean. And to be honest, Tiago, you did a great job. That as a session was -- honestly, if you did like a weekly just "Systems and design hangout" thing, I think that would be very popular. People would enjoy that.

**Johnny Boursiquot:** Or we can just invite him back onto the show. Just saying.

**Mat Ryer:** Yeah. The next time we've got a technical problem we'll get Tiago back on. \[laughter\]

**Jon Calhoun:** Except our backend is not written in Go.

**Mat Ryer:** Is it not?

**Jon Calhoun:** No...

**Mat Ryer:** \[unintelligible 01:03:07.25\]

**Jon Calhoun:** Changelog is written in -- what was it? It's not Rust, it's --

**Johnny Boursiquot:** Elixir?

**Jon Calhoun:** Elixir.

**Tiago Mendes:** Oh, wow. I have a big Elixir friend.

**Jon Calhoun:** Yeah?

**Mat Ryer:** Oh. How big is he?

**Tiago Mendes:** He loves the language.

**Mat Ryer:** How big is he?

**Tiago Mendes:** Well, he's about my size...

**Mat Ryer:** Okay. Are you big?

**Tiago Mendes:** \[laughs\]

**Johnny Boursiquot:** I was like, "He's shaped like an Elixir? Um..." \[laughter\] Like, what container is he in?

**Mat Ryer:** Imaginary friend... "It's just my imaginary friend."

**Tiago Mendes:** He is to Elixir the same way I am to go. He absolutely love the language. But it's a very niche language, I feel.

**Johnny Boursiquot:** Yeah, if you were in the Ruby world, at a certain point, at a certain time in the past... I believe his name was José Valim. He basically started the --

**Tiago Mendes:** So my friend works for the company that he started now.

**Johnny Boursiquot:** Oh yeah, okay. There you go.

**Tiago Mendes:** I think so.

**Johnny Boursiquot:** So he came from that -- very active in that Ruby community, and basically when he started working on Elixir, a lot of Rubyists were interested because of him. He's a stand-up person. And very early days, pre-1.0, I started learning Elixir. Around that time Go was also kind of becoming more and more popular... And I started looking at Go, and I'm like, "Okay..." So Elixir almost became my next language.

**Mat Ryer:** I'm gonna search for "Elixir Johnny".

**Johnny Boursiquot:** And then I discovered Go.

**Tiago Mendes:** I see Rust as my potential secondary language. I never actually did anything with Rust, but looking at just the docs and the way things are, it feels it's closer to Go than a lot of the other things that are out there. It's not a Java-y type of thing. It feels like a good next step.

**Mat Ryer:** Well, you'll have to let us know how you get on. Come back and tell us.

**Johnny Boursiquot:** Yeah, give us like a --

**Tiago Mendes:** In a few years maybe?

**Johnny Boursiquot:** Yeah. I keep seeing comparisons. People are saying, "Yeah, Rust is better than Go. Go is better than Rust." I'm like, "Um, if I knew both languages, I don't think I would use them interchangeably at all." They solve very different problems, in my mind...

**Tiago Mendes:** And I think Rust still feels like a bit of an overkill to use for just normal systems, like web APIs, and whatever. It feels way more low-level than Go.

**Johnny Boursiquot:** Yeah...

**Tiago Mendes:** I don't know if they've solved it yet. I remember that a few years ago it was still very -- you had to use \[unintelligible 01:05:27.24\] for the HTTP library to do things, I think... So it felt a lot more lower-level than Go.

**Mat Ryer:** Johnny, I just did a search for "Elixir Johnny" and Johnny Depp comes up instead.

**Johnny Boursiquot:** Oh.

**Mat Ryer:** I think he's done some --

**Johnny Boursiquot:** Something in that area?

**Mat Ryer:** Yeah, there's an Elixir -- is it a perfume, or something...?

**Jon Calhoun:** There's some witches or something, mixing up some brews...

**Johnny Boursiquot:** Yeah, I would wanna compete with Mr. Depp.

**Tiago Mendes:** No.

**Jon Calhoun:** It's a tough one.

**Johnny Boursiquot:** It's a tough one.

**Mat Ryer:** But Golang Johnny is all you, mate... Until Johnny Depp of course starts doing Go.

**Johnny Boursiquot:** Right. Then it's --

**Tiago Mendes:** Does he have Twitter? Can we tag him? \[laughter\]

**Johnny Boursiquot:** "Hey, Mr. Depp... Interested in doing some Go this afternoon?"

**Tiago Mendes:** Well, then you'd have Go dep back into play...

**Johnny Boursiquot:** Oh...! Nice. Nice. Go dep, this time with an extra p. \[laughter\]

**Mat Ryer:** Oh, here we go... This marketing started already. "I'm managing dependencies, mate!" \[laughter\] Yeah, we've got it.

**Johnny Boursiquot:** Nice, you've got it! Oh, man...
