**Jerod Santo:** Alright, we have a great show for you today. We are joined by two people: Karl Nilsson and Michael Klishin, both engineers at Pivotal, and have been working on RabbitMQ for a while now. Guys, we're here to celebrate 10 years of RabbitMQ, an open source project that is a message broker used all around the worlds. First off, thanks so much for joining us on the show.

**Karl Nilsson:** Thank you for having us.

**Jerod Santo:** Just to associate names to voice a little bit, why don't you guys take turns introducing yourself, and kind of give us your role with regards to the RabbitMQ project. Karl, let's start with you.

**Karl Nilsson:** Okay. My name is Karl Nilsson. I'm an engineer in the RabbitMQ team. I've got a history in .NET, a lot of functional programming, and... Yeah, that's pretty much it.

**Michael Klishin:** I am Michael Klishin, I am also an engineer in the RabbitMQ team. I have a RabbitMQ contributor since maybe 2009 or so. Back then I was doing a fair amount of web development, and also state infrastructure kind of stuff. That's how I arrived at what today is referred to as microservices. It went from there.

**Jerod Santo:** Very cool. Well, we are interested in RabbitMQ for a couple of reasons. First of all, we love to celebrate milestones, and we talk about sustainability a lot on the Changelog. Any project that gets to ten years of success, and deployed all around the world and used by many corporations, we consider that success. We like to celebrate with you guys, and congratulations on ten years of this project.

We're also interested in it I guess from that sustainability angle; this is a corporate-sponsored open source project. It was created in 2007 inside of Pivotal, and has existed inside and outside of Pivotal as an open source project, which is interesting. A lot of open source projects either start outside of a company and then move their way in, or always stay outside... We're seeing more and more corporations doing open source from the very beginning with projects.

I'd love to hear the genesis story a little bit. I know, Michael, you said you've been involved since about 2009. Can either of you recall the beginning of RabbitMQ and why it needed to exist in the world?

**Michael Klishin:** \[00:04:09.13\] Sure, so first of all I wasn't around in the very early days. If one of the founders is listening to it - Alexis, Matthias - I'm sorry if I get something wrong.

With that out of the way, Rabbit was actually started in 2006, but Pivotal didn't exist back then. Let's start -- first things first, right?

**Jerod Santo:** Okay.

**Michael Klishin:** So in 2006 the landscape of open source projects was pretty different. For example, Ruby on Rails was like 18 months old, or something like that. Less than two years probably. Many open source data services, data stores, messaging technologies - most of them did not exist. When it comes to messaging specifically, messaging is not a new concept; financial services companies have been doing that for various reasons since the '80s, maybe even earlier... But there were commercial products in the late '80s, and by 2006, several folks who have been doing financial software for a while, they were slightly fed up with mostly vendor looking, I guess... Because there was a number of large players (who will remain unnamed) that were charging quite a bit, and moving between those tools was many months, if not years - that kind of undertaking.

RabbitMQ was actually started as an implementation of something called MQP, and today there are two different protocols called MQP, but we will get to that.

Someone I believe at JP Morgan Chase came up with this idea - "Hey, let's develop a new standard." All the xkcd standards comic jokes apply.

**Jerod Santo:** Every single one.

**Michael Klishin:** But there weren't that many open source messaging technologies. I'm sure there were some, but I honestly cannot name any of them that actually existed back then. So that was I guess in New York, and across the pond, in London, a couple of people were working together at a consultancy looking to start a company, maybe to do a thing of their own. They discovered \[unintelligible 00:06:28.20\] it made sense to them, they wanted to try this technology called Erlang, and that's how Rabbit was born.

Ten years later, it supports over 20 programming languages, multiple protocols, has accumulated a fair amount of technical depth, which we can get ourselves into the kinds of things you shouldn't try in your distributed system... And yes, it's used surprisingly widely.

**Jerod Santo:** Yeah, according to the website, there are more than 35,000 production deployments of RabbitMQ worldwide, at small startups and large enterprises. Lots of different people using this.

Rabbit described itself as an open source message broker. We also the word -- I mean, MQ... We used the word Q in the title and as we talk about these things; is there a difference, or are we talking semantics, between a message queue and a message broker?

**Michael Klishin:** I think there is a difference, but it's pretty subtle. For example, a lot of people use messaging and they think in terms of queues or logs of operations, that kind of thing. But the broker part is actually optional. There is a project of about the same age called ZeroMQ, started by Peter Hintjens, which doesn't really have this broker component. It's a library that you embed into a tool - well, into more than one tool, most likely... And they communicate using various messaging patterns.

\[00:08:02.19\] There is this queuing aspect, but there is no broker aspect, or rather every single application plays that role a little bit. It's a pretty different architecture for RabbitMQ, but I guess most messaging technologies have this middleware. You have a node, or a bunch of nodes that clients connect to, and those nodes \[unintelligible 00:08:24.11\] store messages, expire them, deliver them, acknowledge them... All that jazz.

**Karl Nilsson:** Yeah, just to add to that, about ZeroMQ - a message queue, as Michael said, doesn't have to be a centralized thing. Your queue could be local, and I guess that's what ZeroMQ does. It's kind of almost directly addressing queues on a remote system, rather than through an intermediary. And one of the patterns that ZeroMQ have, for example, is to implement a broker using the ZeroMQ libraries. That's one of the patterns that they achieve things like service discovery - discovering services that you don't know already, directly.

So it's almost like a pattern, but it's a very useful one, and one that you can do a great deal with.

**Jerod Santo:** So the significant difference with a broker is that you're dispatching messages to remote nodes, whereas with only a queue, that does not necessarily have to happen; you could just be queuing locally, and you could build in the dispatch on top, or next to... Is that fair?

**Karl Nilsson:** It's more about addressing some remote queue directly or through an intermediary...

**Jerod Santo:** Okay.

**Karl Nilsson:** ...if you wanna look at that in very simplistic terms. If you know about the broker, you don't need to know about anything that actually is interested in that particular message; you just give it to the broker, and the broker will take care of the rest. Whereas if you go like in the ZeroMQ, \[unintelligible 00:09:58.28\] and ZeroMQ, then you would have to know about where you want the messages to go, to all the interested parties, unless you implement a broker in the middle

**Jerod Santo:** Gotcha. So let's talk use cases. I think there's probably many of them. You guys have been working on RabbitMQ for all these years, I'm sure you've seen a lot of them in production, and you probably help people out with them every day... What are some of the real perfect use cases for a message broker?

**Michael Klishin:** So RabbitMQ is a fairly generic tool. Just like with data stores, there are messaging technologies that specialize in certain areas. For better or worse, RabbitMQ is fairly generic, so if you need to make multiple applications, hosted on typically different machines, if you need to get them to talk to each other, that's one use case. And specifically, that translates into scenarios such as you have a web app in Ruby or Javascript, and you have something that does data crunching in one of the JVM languages, using all the great data processing tools there, or it integrates with existing .NET tools. Or you work at a small company that is daring enough to try Elixir, Haskell, all of those less commonly used tools, so messaging is a great way to connect those.

To be fair, messaging isn't the only way. There is a book called Enterprise Integration Patterns -- and please don't fear the title, it's actually a very sensible book, and it's not specific to those working at huge companies... I think it was published in the '90s or so, and yeah, you can integrate using shared databases. If you have tried that, you probably know that you have to be careful. You can integrate using UNIX sockets, local file system, all kinds of things. But once you go distributed, your options are more limited, so that's where messaging comes into play.

\[00:12:09.27\] Recently, we have seen quite a few use cases, like two major tides that lift all messaging boats; they are called microservices, and for the record, I hate the term. It's about as specific as cloud computing. And IoT, which is even more specific, right?

So yeah, you have your internet-connected dishwasher, you need it to talk to your internet-connected light bulb for whatever reason, and all of that has to be service-oriented. That's another couple of very, very broad areas where messaging is used. And then of course there are problems where Rabbit doesn't try to necessarily specialize in, but there are string processing systems that are usually more than one tool, but one of the components is definitely something that is a messaging technology, and that has all kinds of applications... From tracking your runs when you wearing your -- I don't know, pick your favorite wearable device, to connected cars, to software updates in all those connected cars... You name it.

I think in the modern world, messaging - and I by no means equate messaging with RabbitMQ - is just about everywhere, and it is only going... "Get worse", let's put it that way.

**Jerod Santo:** Yeah, absolutely. I'm just thinking about the term microservices now that you've mentioned... I've never thought about it, I guess, critically... But how small does a service have to be before it's considered "micro"? It begs the question.

**Karl Nilsson:** Right, is there a standard yardstick for that? Is it 250 lines of code? \[laughter\]

**Jerod Santo:** Yeah, exactly. Is it API surface, is it lines of code? When is your service considered no longer micro -- "Oh, that's getting too fat... Now it's just a regular service."

**Karl Nilsson:** I think for microservices - the useful thing that I feel has come out of the discussion around microservices is "Don't make your services too big. Focus on that single piece of business capability that you want it to have." When you have that many components, obviously you need a way to connect them, and a messaging broker is a great way of doing that, because as Michael said, if your microservices -- oh, let's not use the word "microservices." If your services are written in different languages on different stacks -- you know, messaging systems exist for specific stacks, right? They've existed for specific stacks for a long time; for example, in .NET you could use things like .NET Remoting to send messages from one thing to another. But if you need to make your Ruby web app talk to your Java backend, it's a great thing, because of the protocol... Because the protocol is standardized. It's a wire level protocol, and you can use that to connect. So integration like that I think is a really, really good one.

But one thing I wanted to add to "What is the use case?", I think one really important use case in addition to discovery and integration is "Why do you have a queue?" You could do discovery and integration without having the queue bit, right? Just root messages directly. The queue is there to hold messages until they can be processed. It's a way of flattening sudden peaks in your activity, or sudden outages of certain services, so that altogether you build a more resilient system. I think that is also one of the major use cases for why you would want a queue in between the thing that generates something and the thing that processes.

**Jerod Santo:** \[00:15:58.04\] Yeah... Having used queues in applications, it's always awesome when you have some sort of production problem and you know that you're not dropping those transactions, those actions. They're just gonna queue up and they're just gonna keep on building, and when everything goes back to being normal again, it's gonna work that queue back down. Like you said, it's resilient... Whereas if you didn't have that in place, if you were just brokering messages and nobody's on the other end of the line to answer the message, then you're just dropping those things on the ground.

So speaking of messages, Erlang - you mentioned that they wanted to try out Erlang back in 2006, they wanted to use it... And when it comes to distributed systems and sending messages, it seems like that was probably a very good choice, as it's a language built specifically for sending messages between switches and other telephone operating system type of things. Ten years later - thousands and thousands of lines... You've got 168 contributors, at least on the RabbitMQ server. Surely, once you hit the clients, there's probably thousands of contributors. 156 releases... It's been a long time -- almost 17,000 commits, and you're still on the server repo... 94.3% Erlang.

So this is a long-standing Erlang project, and I don't think we've had on the Changelog a show about a specific project in Erlang, which reminds me of a new friend I met at OSCON last week - Mark Alan, I wanted to give him a shoutout... An Erlanger who listens to The Changelog. I told him "We don't do too much Erlang coverage", but here we are, talking about RabbitMQ and talking about Erlang, so there you go, Mark.

Guys, tell us about that choice and the use of Erlang over the years and how that's played out for the project.

**Michael Klishin:** First of all, I think I recall a Changelog episode where you did have an Erlang project which was started around 2007, I believe... \[00:17:56.09\]

**Jerod Santo:** That was probably the last one you listened to.

**Michael Klishin:** Could be...

**Jerod Santo:** \[laughs\] Now I know how to get you to listen... Erlang shows.

**Michael Klishin:** Not necessarily. \[laughter\]

**Jerod Santo:** Yeah, we do cover it from time to time, but it's been a while.

**Michael Klishin:** Yeah, so in 2006, if I remember correctly from all the unwritten stories, I think Matthias Radestock just wanted to explore Erlang for an infrastructure kind of tool. Erlan may or may not make sense for your web app - at least if it renders a lot of HTML, that kind of thing... But for infrastructure tools, I think it should be on your shortlist.

Yeah, so they just started building a prototype in Erlang, and the rest is history. Erlang itself has changed quite a bit in these 10 years, and RabbitMQ still supports Erlang releases that are (I don't know) maybe 4-5 years old, and I can tell you that in the last 2-3 years Erlang has become -- well, the number of words and sharp edges there is significantly smaller.

Then Elixir emerged, which I'm not supposed to say this - not everyone in our team agrees with it - but I'm gonna do it anyway... I think Elixir is what Erlang should have been all along.

**Jerod Santo:** Oh...

**Michael Klishin:** And not this "Looks like Ruby" aspect... What experienced developer really cares about syntax? It's something that you pick up in a few days and you never think about it much again. But because there are very practical improvements in Elixir, ranging from - it has good associative data structures, so maps, dictionaries, hashes, whatever they are called in your language of choice... That's a huge thing for me, because besides Erlang, I've spent a number of years working in Clojure, and before that Scala, and before that Ruby and Java, and I can tell you that working with prop lists - these lists of pairs - in Erlang is pretty painful.

\[00:20:16.01\] Something that is like a few lines and it's obvious what they do in Clojure, which has a very nice collections library, in Erlang can be several times more lines of code... But again, the lines are not the point; it's just you have to write this every time, and in every codebase it looks slightly differently, and you have to spend your brain cycles figuring out what is going on. So that's much better... And it sounds like something maybe silly, but you use those things every single day, right?

I think we should not ignore the cumulative effect of such small improvements. Another thing that I really like is that Unicode and Elixir is not an afterthought. In RabbitMQ specifically, we have seen interesting issues that you can only run into if you use command line with a Chinese locale, or something like that. As far as I know, no one on our team unfortunately can read or write Mandarin or Cantonese... So yeah, we would really like to not have to fix those issues, and in Elixir they are much less likely to occur.

And yeah, I think more sensible compiler error messages, also a great contribution... And so on and so forth.

**Jerod Santo:** Let me stop you there for a second, Michael. I wanna ask Karl... You said not everybody on the team would agree with that. Karl, he just said that Elixir is what Erlang should have always been. Agree or disagree?

**Karl Nilsson:** In one word, probably one of the team members disagree. I do think Michael's point about Proplist - I'm 100% behind that. Calling it a data structure is probably being very, very generous. I do think Erlang -- if you take the modern versions of Erlang, where we now have good map data structures and... I enjoy writing Erlang, I think it's good. I think Elixir is nice; Michael knows this, I've strong opinions... I like statically typed languages very much; I like languages where the types help me along, and neither Erlang, nor Elixir solves that problem particularly well.

**Jerod Santo:** Question from the outside... As an Elixir user and Erlang -- not even an observer, but every once in a while I'll have to take a look, and I guess as in Elixir, usually there's a lot of Erlang underpinnings that are being used... I'm speaking of like APIs, and stuff; they both run on the same runtime... Has the increased interest and has the Elixir community growing and people getting excited - has that reinvigorated the Erlang community? Like you said, Michael, a little bit ago, that a lot of the rough edges have been polished down, and a lot of stuff has been changing over the last few years... Has there been any back and forth where the Erlang community and team that works on the core language has said "Oh, okay, we need to step up our game", or is that just perceived?

**Michael Klishin:** I personally think that -- well, let me give you an example. I've been to a small Erlang/Elixir conference in early April in Rome, and shoutout to the organizers - it was a very nice event... So most people there - at least those to whom I have spoken to - told me that they have considered or tried or used Elixir. That said, I think less than a half actually use it, but Elixir was mentioned in 80% of talks, something like that. A few talks were exclusively about the experience of adopting Elixir - including mine.

\[00:24:25.03\] I think Elixir definitely sparked a massive conversation in the community about -- so it takes a lot of effort and dedication to produce a programming language. Not everyone is as crazy and dedicated - I mean it in a good way - as Jose Valim. So do we really need to develop Elixir, or is improving Erlang okay? I don't necessarily have an answer to that, but I think the Erlang team and the Erlang community have recognized a lot of things that are obvious from the outside, if you come from a Ruby, or a Java, or a C\# background, but they are not at all obvious to them. There were many improvements in the last two years, and I expect this to continue for the foreseeable future.

**Karl Nilsson:** I agree with that. I think Elixir has had a positive effect on Erlang. I mean, Elixir compiles down to Erlang, so it doesn't even skip a step and go straight to whatever Erlang compiles down to. Jose is actively contributing to Erlang/OTP, to the Erlang platform. So I think not just from what Elixir does and its approach to tooling and developer experience, but I do think it has a positive effect.

That said, I think Erlang/OTP is probably another open source project that's been open source for a very long time, and also very successful.

**Adam Stacoviak:** Coming up after the break, Jerod moves the conversation to lessons learned. It's important for any project to learn and grow from their mistakes, especially a project like RabbitMQ, that deals with complex architectures in an every-changing world. We discuss how to choose dependencies, what happens when you don't preserve the quality of client libraries, and the politics involved in messaging protocols like RabbitMQ. All this and more after the break.

**Break:** \[00:26:43.28\]

**Jerod Santo:** Alright, we are back, talking about RabbitMQ, talking about Erlang and Elixir a little bit... Guys, one thing we just wanted to clarify on the other side of the break was Elixir's compilation process, just so everybody's clear on how it works. We did look it up during the break just to make sure... Do you guys wanna laid that out a little bit? You don't have to go into the whole details, but explain clearly how it goes from Elixir to executing code on the hardware.

**Karl Nilsson:** Right, okay. So the Elixir source code would be parsed into some abstract format, in an abstract syntax tree in Elixir; that is then translated into the Erlang abstract format, i.e. what you would get if you passed an Erlang file, and then from there it hooks into the standard Erlang compilation flow, which compiles down to core Erlang, which is then \[unintelligible 00:28:48.08\] simple machine processable functional programming language. Then from there it will then produce BEAM byte-code, your .beam files.

**Jerod Santo:** Very well done. There's a nice little Medium post by Xavier Noria, called "How Does Elixir Compile/Execute Code?" We'll add that to the show notes, so those who are interested in the step-by-step and the reiteration of what you said can go and read that. Very good. I just wanted to clarify that it doesn't go from Elixir source to Erlang source, which some people may have thought that... So thank you very much.

Let's talk about mistakes made. Who wants to kick this off, and where should we start?

**Michael Klishin:** I can. So in the messaging system you will find three major areas where you can make mistakes. You can make mistakes in your protocol; even if you adopt an existing one, you can make mistakes in the implementation, of course, and you can make mistakes when developing client libraries. And of course, in ten years, RabbitMQ definitely did all of those.

Let's start with the latter one. It's a relatively straightforward thing... Maybe it's obvious to web developers, but folks who work on infrastructure tools sometimes kind of ignore this fact. If you maintain client libraries of any kind, ignore their quality at your own peril. It will come back to bite you hard at exactly the wrong moment.

To the point, we have seen projects that build on top of RabbitMQ or use RabbitMQ as their default messaging choice having issues that came down to incomplete \[unintelligible 00:30:48.00\] or just overly opinionated client libraries. Of course, it doesn't occur to the user that "Hey, it's a library problem." What will get blamed is your server, and it happens 98 times out of 100.

Then there are too more experienced people who know how to debug distributed systems, and they can actually provide you some details so you can improve things. So that's just a general quality of client libraries. Some of them were not getting the attention they needed.

**Jerod Santo:** Let's pause there for a second... Client libraries - how many of them are there roughly, and then how many are supported directly by you all, or how many are completely third-party, and how do you make those decisions and draw those lines?

**Michael Klishin:** I honestly don't know how many there are. I think we support more than 20 programming languages; of course, some are supported better than others, but most likely if you can name a language, there is a client library of some quality, and multiple languages have multiple client libraries, again, of varying quality.

\[00:32:01.19\] Pivotal supports -- I think it's currently three. It's Java, .NET and Erlang; Erlang because it's used by plugins that we support, so it would be a little bit weird to not support that. But we are interested in adding official support for more. That said, many client libraries are either maintained by our team members (I maintain a few), or we try to contribute to the extent that time allows.

**Jerod Santo:** Sure.

**Michael Klishin:** Of course, they are completely community-developed and maintained client libraries, but at some point their authors interact with us one way or another.

**Jerod Santo:** Just as a side note, because I think this is a helpful thing for anybody when pulling in a dependency or deciding on a library... Say you decide to use RabbitMQ and you're using Ruby - I'm just making all this up... Say maybe there's five clients out there on Ruby Gems. How does somebody go about picking the one that's the best quality? Maybe this is too big of a question, but what would you guys do? How do you know it's the best, what's supported, what's good?

**Michael Klishin:** In terms of Ruby, you cannot go wrong, because I maintain four of those five.

**Jerod Santo:** \[laughs\] There you go... Alright, pick a different language that you don't maintain.

**Michael Klishin:** Oh, man... Let's say C\#. Karl maintains that's one, so it's even better. \[laughter\] On a serious note, if you go to RabbitMQ tutorials, you will find six tutorials; almost all of them are ported to, I don't know, probably ten or so languages. Of course, we try to use libraries that we would recommend to (in particular) beginners, but just in general... What else is there?

\[unintelligible 00:33:54.03\] at least to get started, it's a relatively small API surface area, you can probably compare a couple of libraries quite quickly. In my opinion, you should start with the one that's documented best. That's both because I care about documentation of open source projects, but also because I think it usually has a correlation with the amount of time the maintainer spent on it. That's not always true. I think Rabbit has a very good Haskell client, but it doesn't really have much documentation besides the types, right? Which only tell you so much.

**Jerod Santo:** Right.

**Michael Klishin:** So yeah, just take a look at what is mentioned on RabbitMQ.com. There are client libraries that are so bad in some ways that we - we don't have to do this often, but we recommend against... So yeah, if you see that a client is not mentioned on RabbitMQ.com, chances are it's on that list, or it's very, very new. It could be that.

If you are still not sure, come to RabbitMQ-Users, our public mailing list (it's a Google group) and ask.

**Jerod Santo:** Very good. Good answer.

**Karl Nilsson:** I'd agree with that. Looking at the client and developer tools list, it is quite a long list on our website. The dev tools, the HTML... And yeah, you would use the principle - as Michael said - as you would with any open source project, which pretty much all of these are. Is it documented? Is it maintained? Does it have an active community? Do people respond? It's the same kind of thing there. Obviously, go for one of the supported ones. You obviously can't go wrong with that.

**Jerod Santo:** Yeah, that's kind of what I was looking for - using these client libraries as a lens to a bigger question, which is "How do you choose a dependency?" I think you guys drilled that you have...

\[00:35:55.01\] The problem is -- maybe it's not a problem; the situation is it's a holistic decision. It's difficult to quantify. You look at the docs, you look at the code perhaps, you look at the community tests, perhaps, and you see "Is it maintained, or are there 600 open issues and 40 pull requests against it and none of those have been addressed?" So there's all these things that have to go into it before you make a decision... I was just curious your guys' take on that; it sounds like it lines up pretty well with my own.

Let's get back onto the topic of mistakes made. So not preserving the quality of client libraries of the years has been a mistake over the years, because ultimately everybody comes and thinks it's a server... Because it's gotta be somebody else's code, right? It can't be mine. So you probably have a lot of stray issues or misfires with regards to pointing the blame with not keeping the quality of those client libraries up to par. What else have you got in terms of things you guys have learned from mistakes made?

**Michael Klishin:** Oh, man... How much dirty laundry \[unintelligible 00:37:03.14\] \[laughter\] Let's start with the protocol, because it will be a short one... Because to be honest, this topic is so politicized as far as the technology community goes that -- yeah, I'm going to be careful.

Different protocols -- many messaging protocols look similar on the surface, and like I said, it's a relatively small API area, but don't let that fool you; there are protocols that are much better designed. And you know, don't make operations of your system harder. Remember, this is a distributed system; 98% of people don't know how to debug them, myself included.

There are protocols that had operations or features that ended up being not used. The AMQP 0.9.1 has a few of those. So we deprecated down, we extended it with a few others that are actually useful... But yeah, it's very difficult to get a protocol right. With the exception of TCP - and even TCP had like thousands of extensions, right? Try to google for TCP RFC and you will get lost. Except for TCP, I actually cannot name a protocol which just gets it right and it's great and it works at rep scale, whatever that means to you.

It's a very difficult problem, so next time you are trying to design your own messaging protocol - which a lot of people perceive as a trivial issue - yeah, don't. There are enough of them already. Almost certainly one of them suits your needs.

**Jerod Santo:** So these protocols - the queueing protocol AMQP, a few others supported by RabbitMQ (STOMP, MQTT) - do these operate at the application layer on top of TCP? Are they instead of TCP, or on top of?

**Michael Klishin:** All of those are based on TCP. They are application layer protocols. That said, RabbitMQ has an add-on that accepts UDP traffic, and sort of republishes it. So it is kind of a protocol, and not a standard one by any means; it's not TCP-based, but predominantly messaging protocols are TCP-based (I think for good reasons), but of course it doesn't have to be that.

**Jerod Santo:** One thing you mentioned is that the protocol conversation is politicized. Is that because different corporations come up with their own protocols and then try to get everybody to use them? Why is it a political thing and not just a technical thing?

**Michael Klishin:** \[00:39:46.13\] That's a good question, why politics exist; I'm not necessarily ready to answer that, but I have a couple of thoughts. One is messaging protocols are typically designed by communities of some kind; there are exceptions to that. There are protocols that were designed at a particular company or by just one particular person who wrote the spec and then published it on the internet, but most of them are designed by committees, and even though typically people in those committees are technical and good-meaning and have experience with existing messaging APIs or technologies, like I said, it's a hard problem. People make mistakes, people make compromises that make engineers' lives harder, even though for sales people it becomes easier. Yeah, everyone tries to get their idea in.

Some of those vendors actually compete in the market in multiple areas, especially these days, where huge corporations - everyone competes with everyone else on everything, and so on and so forth. Then there is marketing. There are people who deeply believe that to build an IoT system you need to build it using a particular protocol. I'm sorry, but that's nonsense. To be honest, you can use anything. You can use HTTP 1.1, which is in many ways a great protocol; for messaging probably not so much, but... You can use HTTP 2, which is much closer to messaging protocols... But it just doesn't matter.

There are ridiculous marketing claims, like "This binary protocol is more efficient than that one by 20%", and when you take a look at what they actually compare, the kind of workload, they compare the smallest frames (or whatever it is called in that protocol), and that frame is usually sent only once during connection lifetimes. For those not familiar with messaging, in most messaging protocols, connections are supposed to be long-loved. So you have potentially days of traffic, but you only measure something that is sent in a fraction of a second, and then you come up with a marketing material... Things like that. It's very depressing if you are an engineer and you have to navigate this thin ice, and you have to implement it; sometimes you have to implement more than one thing, and then people from different committees come to you and ask you, "Hey, why do your tutorials use this protocol and not mine?" That kind of stuff.

**Jerod Santo:** So RabbitMQ out of the box today, in 2017, if you downloaded the server, fired it up and attached \[unintelligible 00:42:29.26\] which protocol would you be talking to? Would it be AMQP 1.0? What's the default configuration?

**Karl Nilsson:** The default configuration for all the clients as we publicize it is AMQP 0.9.1. As Michael mentioned earlier, AMQP 1.0 is a very different protocol; it's a completely different protocol, really, that its predecessors, if you like it.

**Jerod Santo:** Gotcha.

**Karl Nilsson:** So AMQP 1.0was standardized in probably 2012, which is obviously way after Rabbit was started. Rabbit was started while the AMQP protocol was still at -- Michael, you might correct me here, was it 0.8 when RabbitMQ started the implement of AMQP?

**Michael Klishin:** Yeah. The oldest one we still support actually, we just don't advertise it is 0.8. It's very close to 0.9 and 0.9.1.

**Karl Nilsson:** Yeah. All those are kind of compatible, in a sense, but then, after some pause, I believe a slightly different committee got together and standardized AMQP 1.0 and it ended up being a very different protocol, not containing certain parts of the previous versions. However, it has been \[unintelligible 00:44:01.03\] and RabbitMQ implemented, but we implement it as a plugin... So it's an optional add-in.

**Jerod Santo:** \[00:44:10.04\] Gotcha. I was trying to look up that AMQP 1.0 release date, and I found it on Wikipedia - 30th October 2011. It also says the Working Group -- we talk about politics and why they exist in these things... The AMQP Working Group grew to 23 companies (this was back then), including Bank of America, Barclays, Cisco, Deutsche Boerse, Goldman Sachs, JP Morgan Chase, Microsoft, Red Hat... You could just keep going and going. Once you have that many vested interests involved - and that's just AMQP 1.0; like you said, there's many others - it's hard for mere technical prowess to become... I guess the meritocracy that we all engineers want to see exist in the world is shrouded by the corporate interests. That's just a fact of life right now.

**Michael Klishin:** Yeah. I mean, when you've got that many actors participating to a protocol, you have to satisfy them all in some shape or form, right? So the protocols end up being complex. AMQO 0.9.1 is a reasonably complex protocol. AMQP 1.0 kind of adds a couple of notches onto that in terms of complexity. That said, it doesn't mean they're not well-designed, it just means they are very large and complex, and it takes time to implement.

There are other protocols which are simpler, which are more single-purpose; these are general purpose protocols. You could do so much with them, which is why they are so complex.

**Jerod Santo:** Well, we could probably talk about mistakes made and lessons learned all day, because you guys are open to, and I'm not saying it's because you made so many of them, but I appreciate -- we learn so well from our own failures and from the failures of others, especially failures of others who have had success. So let's do one more mistake made that you guys wanna hit on if you have one, and then we'll take our break and come back and talk about the project kind of in a holistic community sense on the other side of the break. Give us one more mistake and we'll go from there.

**Michael Klishin:** Oh, sure. Home-grown distributed systems algorithms - do not do that. Many issues that people report - either directly, or they are the root cause - in RabbitMQ today... And by the way, for the record, what some pundits say are issues in RabbitMQ and what actual users would deploy it at scale I think are key issues -- there is some overlap, but they are not the same thing.

Distributed systems algorithms - yeah, Rabbit has seen its fair share of reinvented wheels. Some of them were okay; also, remember that in 2006 in particular, the awareness of certain distributed systems' papers was much lower. I'm not saying that the papers weren't there, although some - like the Dynamo paper, which started Riak, Voldemort, Cassandra... It wasn't published.

Some others were around, but the awareness of the developer community about them was very different. So that's one of the reasons why Rabbit has a few things that were reinvented and we will be replacing in the next year (or however long it takes) because it's a bit like replacing a chassis on a plane that is in flight; it takes time, and you have to be careful.

\[00:47:41.24\] So I think those things result in very real technical operations, related ramifications, and certain issues and considerations, like about "How do you design your apps?" and so on. It's a very deep topic, but in general, if you feel like you need to invent your own consensus algorithms or replication algorithm or cluster membership algorithm, don't. There are enough of them published by PhD's or people at companies that are 100,000 times larger than yours, likely.

There is something for you to pick, investigate, toy with and maybe eventually adopt. That's a huge and very costly mistake to make.

**Jerod Santo:** So if you had the opportunity to start fresh today, brand new, and you had the same goals in mind for the message brokering system, everything that MQ does, but none of the baggage, none of the history and none of those home-grown distributed systems algorithms in there - so take the plane out of flight (to use your analogy), what would you do today?

**Michael Klishin:** I can cover this briefly, and Karl definitely has opinions about that. So RabbitMQ has a mirroring implementation which we are already replacing for 4.0, which in many ways was a mistake. You can take a look at GitHub.com/RabbitMQ/internals - it's a repo with a bunch of markdown documents that describe how it works internally. You can take a look. So that is one thing... We're exploring Raft, although it can be anything else, to be honest. Raft just seems much closer to how Rabbit operates internally, in many ways.

Another thing that I would do is -- so Pivotal sells RabbitMQ and Cloud Foundry. RabbitMQ is a service that you can deploy on your own infrastructure, or a public cloud, and as we were automating that, we had to make certain decisions because of how our deployment tools work. Some decisions there involved, again, a custom consensus algorithm that had -- let's put it this way, it depends a lot on a particular node, which you can choose, but it's still one node.

Yeah, there are all kinds of things that can go wrong with that node that affect how easy it is to automate and operate your data service. So those are, again, very important considerations; I would definitely revisit those. We were lucky to address that with very little code, and there is not a straightforward decision, but that's another area where I would definitely like to start from a clean slate.

Lastly, RabbitMQ supports multiple protocols, but internally it's in some areas very heavily skewed towards one protocol. Again, it started as an implementation of one protocol, and then we added three more; in fact, that are plugins that had even more. It's obvious what we should have done in retrospect; it wasn't obvious back then. But having a protocol-agnostic abstraction would help us in many ways. But it's not so much an operations or scalability thing, it's mostly protocol semantics often do not match, and it is confusing to the user. In fact, sometimes it is confusing to us, who work on this every day.

Karl, maybe you have something to add, or go deeper on one of those.

**Karl Nilsson:** Yeah, I'll maybe just kind of fill it in a little bit. So if we had to start from scratch -- I wanna attribute some of the mistakes down to the temptations that writing code on the Erlang VM kind of gives you... Because Erlang does have things that other platforms don't have by default; it has things like distribution, so you can connect Erlang nodes across different machines.

\[00:52:01.22\] Now, the original use case, as those that know a bit about Erlang are well aware of, is switches, right? Where you have maybe only two machines, or a small number of machines that sit in there, they're all connected through the same switch, very reliable hardware, and you don't experience all the problems you might experience when you deploy distributed Erlang. You connect all these nodes and you deploy them into a cloud environment, where you might actually be crossing the internet in order to connect, and you don't really know what kind of hardware your infrastructure is running on.

I think that's one of the things I would address right up front, rather than writing something in Erlang and then making it distributed, which I think is how RabbitMQ's clustering approach happened... But instead address clustering and how it distributes its data from the get go, to build that into the core of the application. I think that's \[unintelligible 00:53:11.01\] I mean, it does reasonably well in a cloud environment, but in order to do really well, you need to design that in.

Michael talked about achieving consensus, building safety in things like queue mirroring - that's another thing I would definitely address upfront.

**Michael Klishin:** May I add something to this, Karl?

**Karl Nilsson:** Sure.

**Michael Klishin:** You bring up a good point - going distributed should not be an afterthought. You typically cannot go from a system that is designed for a single node to distributed easily. In some cases you can, but in most you will make a lot of mistakes. For example, it will heavily influence your protocol. What do I mean by that? For example, most messaging protocols assume that that client connects to a single node. That places a lot of limitations in how your data can be partitioned across nodes, to how you can handle failure in the client, to consistency levels that you can achieve maybe...

For example, Cassandra has -- well, it's not a messaging system, but it's a distributed system that I really, really like. Cassandra clients (modern clients, at least) connect to multiple nodes at the same time, and they can do things that you absolutely cannot do if you have a) only connection to a single node, and b) a protocol that just completely overlooks and glances over this area. This is where purpose-built protocols can really help you, and you will feel it once you have to operate your stuff in production, and teach developers about how to write code that is resilient to all kinds of failures, and that kind of stuff.

And indeed, I agree that in Erlang there are libraries that -- in the standard library, there are primitives that are distributed, and unfortunately some of them are of actually pretty poor quality... Or at least they cannot be used as a general purpose library. You should really think hard about what it does and how it works before you adopt it, and it's very tempting to just take that and "Here, I have a three-node system. Oh, and I can deploy it, and it kind of works."

Yeah, things get a lot more interesting once they start failing, and that's when you realize that some of those awesome built-in libraries are not all that awesome after all.

**Adam Stacoviak:** After the break we talk about one of the most important aspects to an open source project - its community. We talk about how community fits into a corporate-sponsored open source project that's ten years in the making, how it's grown, how it's changed over the years, and what you can expect from the future of RabbitMQ. Stay tuned.

**Break:** \[00:56:08.28\]

**Jerod Santo:** Alright, we are back, talking RabbitMQ with Karl Nilsson and Michael Klishin, staff engineers at Pivotal, working on RabbitMQ for many years now. We wanted to see how RabbitMQ plays with the greater open source community. You guys work for Pivotal, many of the team members do, and it's always interesting to hear how projects like these interact with the outside world, so to speak.

So let's pick back up with the history a little bit. We talked about how it started back in 2006, published I believe in 2007, because that would be your ten year anniversary, and Pivotal didn't quite exist back then. Tie us back into the story of Pivotal and RabbitMQ, and then how the community fits in.

**Michael Klishin:** Sure. Back in 2006 or 2007 it was Rabbit Technologies, and I think the team was like three people. In 2008 or 2009, RabbitMQ started getting some traction. That's when I discovered it, at least, and messaging and the need for more open source messaging technologies started emerging. By 2010, VMware - or rather SpringSource, a subsidiary of VMware - acquired Rabbit Technologies. The team got a little bit bigger - maybe five or six people, if I remember correctly - and in 2013 EMC and VMware decided to put a bunch of their acquisitions into a single company, which has this platform and cloud-centric focus, and RabbitMQ turned out to be one of those projects

**Jerod Santo:** So what kind of project is it? Is it run entirely by Pivotal staff? Is there outside companies working on it, are there individuals? What does the team look like?

**Michael Klishin:** \[00:59:50.25\] Our team is seven, soon to be eight engineers, and a couple of folks who work on \[unintelligible 00:59:56.25\] engineering topics. We have contributors from companies such as \[unintelligible 01:00:03.06\], a lot of small companies, I believe someone from a huge state/government-owned German corporation contributed recently... So yeah, there are all kinds of users who happen to contribute, as well. I would say overall we have maybe 10-11 people who are active or regular contributors.

We use GitHub for almost everything, so it's relatively straightforward. The only thing we don't use GitHub for is questions and root cause analysis and "Please investigate this for me" kind of issues... But the rest happens on GitHub, so it's pretty reasonable.

**Jerod Santo:** Okay. So maybe describe the relationship between the project and Pivotal, in terms of what it does for Pivotal, how Pivotal makes money around it, how it supports seven people working on it that are on salary... Lay that out for us.

**Michael Klishin:** Right, so Pivotal is a bunch of projects, but the crown jewel is Cloud Foundry, which is a platform as a service; we're not going to go into too much detail around that, but it's a lot of services on top of IaaS - your AWS, Google Cloud, \[unintelligible 01:01:25.23\] that kind of tools, that let you think in an application-centric way. So if you've ever used Heroku, you probably know what I mean; your unit of currency is an app, you push it, it is run for you. You don't necessarily care how this is happening. You have data services accessible to you - MySQL, RabbitMQ, Redis... You can add anything, to be honest. Cloud Foundry is very extensible. Then there are various monitoring and security auditing and deployment and continuous delivery tools, a bunch of Spring integration libraries, and so on.

So Pivotal is primarily a Cloud Foundry company - I wouldn't expect other people to disagree - and RabbitMQ is one of the data services that Pivotal supports, but it's a relatively interesting one. The most popular data service as far as I know is MySQL (that's not very surprising). Then there are RabbitMQ and Redis. RabbitMQ and Redis are probably a bit more specialized, compared to MySQL. MySQL - just about everyone uses it for something.

RabbitMQ's role is once you have a platform -- well, first of all, you have a bunch of apps there, and it's cloud-native and microservices-ready, and all those buzzwords... But those microservices need to talk one way or another, otherwise why do they even exist? So if you need messaging, at least in many cases messaging is the right choice - I'm not saying it's RabbitMQ, it's messaging in general. So you'll both use RabbitMQ because it's available -- or one of the other services... I think many use Redis, because it's sufficient for them, for messaging...

**Jerod Santo:** Yeah.

**Michael Klishin:** So RabbitMQ becomes this glue, the enablement layer for microservices that Spring builds on top of, and that other tools use... But there is another aspect. Imagine that you're a huge corporation somewhere on Wall-Street. You adopt a PaaS of some kind - it can be Cloud Foundry, it can be something else - you still have decades of legacy IT infrastructure, and you're probably not going to throw all of that away just to be microservices and cloud-ready.

\[01:03:47.01\] So you need to interconnect this new world, which is shiny and great -- for the record, I really enjoy using Cloud Foundry when I have to; it's a very, very nice tool. But you have all this stuff written in the '70s and '80 in COBOL, and LDAP, and Windows, and lots of Java 1.3 kind of stuff running... You need to, again, integrate all of that into the PaaS. That's where messaging comes in, and I think some of the strengths and differentiators of RabbitMQ, thanks to Erlang and certain design decisions - because not all of them were mistakes, in RabbitMQ... \[laughter\] - it's very extensible. I typically say that it's too extensible. There are people who do crazy things as RabbitMQ plugins.

So Rabbit integrates very well into existing infrastructure; it has supported LDAP for I don't know how many years - probably seven or eight. It supports different protocols, which matters when you have to integrate with existing systems. It supports all kinds of client libraries, including relatively obscure things such as Common Lisp or OCaml, as much as I like OCaml (and I know Karl does)... So yeah, name a language, name a protocol, name something to integrate with and there is a good chance RabbitMQ can help you bridge this gap. RabbitMQ in this sense becomes this oil in your Cloud Foundry engine that lets it run smoothly and integrate with the rest, in some cases even make it just feasible to adopt that kind of stuff.

But Pivotal still also sells support for RabbitMQ, and we used to have -- we have a commercial edition; it's the same code (or 99.9% it's the same code). We used to have certain commercial extensions, but I think a year or slightly more ago we open-sourced all of them, and Private MQ is as open source as possible. We only use private repos for internal docs and infrastructure, but unless you work for Pivotal, you're probably not going to contribute to that.

**Jerod Santo:** Yeah, very good overview. How about -- one last question, because we're hitting up against our time here... How important to you guys personally - I guess Karl and Michael, you guys can both answer this separately - as RabbitMQ's open sourceness? The fact of it being an open source project and not completely proprietary - how important is that for you guys personally, working on a project, working for Pivotal and being a part of it? Is that something that you guys care about, or does that just happen to be the case?

**Karl Nilsson:** Yeah, I think we all (everyone on our team) are strong believers in open source software. I think it's important for us. Many of us probably have spent years in the enterprise, writing stuff that no one's ever really seen (you don't see the effect of it), and actually to be able to contribute to such a long-standing 10-year-old project, a really well-known open source product... It's certainly something that you can be proud of and something that you enjoy talking to people about. So for me it's very important.

**Michael Klishin:** I think it's great to have an opportunity to work on an open source project, so thank you Pivotal, but I see it slightly differently. I think that working on an open source project is awesome, but it also has less than awesome parts that are rarely discussed... In fact, I think some relatively recent episodes of the Changelog (please go listen to that) cover topics such as sustainability of open source, and stuff like that.

\[01:07:45.00\] Working on a reasonably popular open source project means that whether you like it or not, you are getting questions 24/7, you have high expectations from your users, even though they haven't paid a dime for your services... Most of them will not only not contribute, they won't even provide details for you to reproduce an issue, and some of them are very snarky and bitter... Stuff like that.

I have to say it's generally awesome, and I enjoy it, but there are also aspects that on some days you think "Hm, I wish no one had access to this project's tracker..." or "I wish I didn't have to answer on this mailing list to this person" and so on and so forth. So yeah, there are also those days, and not enough people I guess speak up about them. But in general it's fun.

My favorite part is you get to communicate with people from all over the world. If our website analytics is any indication, something like 40+, almost 50% of RabbitMQ users are actually in Asia, or let's say emerging markets. You interact with folks who may or may not speak good English - I'm not a native speaker myself, for example... And sometimes it is frustrating, sometimes it is hilarious, but you discover use cases and opinions and points of view and concerns that do not exist in the country where you're based. This is pretty awesome, and I honestly have never had this kind of experience working on closed source projects, even though I definitely had colleagues in various countries.

**Jerod Santo:** Thank you for pointing that out, I think it's important to give the other side of the story, especially since we do believe in open source and we think it's the better way, but that doesn't mean it's always the great way... As I say, it's not all unicorns and rainbows.

Just to point out a couple of Changelog episodes - like you said, we have been talking about this a lot lately... For those interested, check out \#242, which is The Burden Of Open Source with James Long; we also have episode \#246, First-Time Contributors And Maintainer Balance, with Kent C. Dodds, and then finally, another recent episode is Open Source Lessons Learned, episode \#248. We'll link those up in the show notes, so those who like that topic and wanna think more about that and hear from other people talking about kind of the other side of being an open source maintainer, can listen to those.

Guys, this has been a great conversation. Thanks so much for joining us. Any last thoughts before I let you go?

**Michael Klishin:** If this episode was a couple of sentences, I would say "Please go hug your open source project maintainer, whatever you use, because it's not always rainbows." Some encouragement sometimes helps a lot. And don't reinvent distributed system algorithms... \[laughter\] You have no idea how much trouble you would be getting yourselves into. Yeah, over to Karl.

**Karl Nilsson:** \[01:11:09.15\] I agree with all those points. RabbitMQ is a ten-year project, it's deployed far and wide... I think I'm just gonna let RabbitMQ speak for itself, really.

**Jerod Santo:** Very good. Well, again, congrats on ten years of RabbitMQ to you and your team, and to the community. Thanks a bunch, guys!

Hey, everybody out there, go hug a maintainer! Thanks, guys.

**Michael Klishin:** Thank you.

**Karl Nilsson:** Thank you.
