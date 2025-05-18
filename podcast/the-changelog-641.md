**Jerod Santo:** Today, we're joined by Derek Collison from NATS and Synadia. Derek, you were on one of my favorite episodes of Go Time years ago. "Challenges of distributed messaging systems." Yes, Go Time is no longer being produced, but the feed is still out there, the episodes are still out there... Please, go listen to that. I learned so much from you about these things. So welcome to the Changelog.

**Derek Collison:** Ah, I appreciate you guys having me on. Thank you.

**Adam Stacoviak:** Literally years in the making. Jerod, do you remember going to KubeCon a while back?

**Jerod Santo:** I do.

**Adam Stacoviak:** The Circus?

**Jerod Santo:** That's right. The circus in -- was it Chicago?

**Adam Stacoviak:** A couple of years back. We met the Synadia folks and the NATS folks... I think it was not quite early days for Synadia, but like it was early-ish for announcements, maybe even marketing. Derek, you can kind of speak to this, but... Yeah, do you remember that, Circus, and meeting those folks?

**Jerod Santo:** I do.

**Adam Stacoviak:** Yeah.

**Derek Collison:** I don't know if I was there. What year was it? Because Synadia was formed at the end of 2017, on the heels of Apcera. But I don't remember... I don't think I was at the one in Chicago.

**Adam Stacoviak:** Many years after that. 2023?

**Derek Collison:** Okay. So not too far back, yeah.

**Adam Stacoviak:** Yeah. Tail end of 2023.

**Jerod Santo:** Yeah, you weren't there, but we had a few friends there that were listeners as well, and we came to know each other, so... It's been nice knowing you all. I've known about NATS for a very long time. When did NATS start? I mean, it's been around forever now, right?

**Derek Collison:** Yeah. NATS was kicked off as part of a system that I was building at the time at VMware called Cloud Foundry, which was my spin on Heroku for the enterprise back in 2010, I guess. And at the time, I had come off of time at Google, I spent about eight years there, but prior to that was at a company called TIBCO, which before that was called Technicron. And we had been designing lots of messaging systems that then were used to scale up distributed systems for customers and clients. So I just had a natural way of building systems, like command and control, telemetry, eventing, using these types of constructs. But TIBCO was closed source, and so we couldn't use that.

So we reached out to Alexis Richardson, who was running a company that was kind of in charge of RabbitMQ, which at the time was kind of the major open source player from a messaging construct. And RabbitMQ is still part of, I think, VMware/Broadcom now, part of Cloud Foundry or whatever that has turned into be. But at the time, it was more of an enterprise type of a technology. What I mean by that is that if you asked it to do something, it would bend over backwards trying to do it for you, even at the detriment of everyone else. And we had some challenges there, which led to the creation of NATS, which was kind of like a dial tone, and think of it like the electricity in your house, or your condo, or whatever. I can plug in a really bad blender and I might blow out something in my own place, but hopefully it doesn't take out the electric grid for the whole neighborhood. And so NATS was born on a very simple principle of "Just do a couple of things very, very well." And yeah, it was the proverbial weekend project. So I left on a Friday, and Monday we plugged it in.

\[00:08:35.08\] And believe it or not, applications that were written for that initial version, the protocol that speaks between the clients and servers still run today. So you can just fire up something from the Cloud Foundry days and just run it against a modern NATS server and it just works. So we've tried very, very hard - and we're not perfect by any stretch, but we tried really, really hard to make sure we were always backward-compatible with the protocol. Because we knew the protocol, even though it was designed very, very quickly, in only a couple of days, that was kind of the really big thing from a technology standpoint there.

**Adam Stacoviak:** I'm not a distributed systems person, but NATS feels a lot to me like Tailscale, but at a different layer. Is that how you would describe it to somebody who doesn't build distributed systems, or have sort of the depth and knowledge you might have?

**Derek Collison:** Yeah, I'm a huge fan of Tailscale, and the folks that were either at Google, or involved in the Go programming language that are over there. But it's an overlay on top of the constructs that we still know, which is IP-based addressing, almost everything is point-to-point... I don't know about Tailscale, but most cloud providers write trunk UDP broadcasts, or multicasts, and so it's a point-to-point, location-dependent type of a system that now has surfaced up over a very secure overlay with WireGuard.

What NATS was trying to do was kind of change the notion of what we called intelligent connectivity. And specifically, when folks that are listening say "Well, what does that mean?" It's really fairly simple from an abstract standpoint, which is everything is location-independent. So one might say, "Oh, well, things are kind of location-independent today", but I would argue that there's a lot of unnatural apps going on below the covers to get that to appear that way. Load balancers, GSLB, AnyCast \[unintelligible 00:10:27.08\] So the biggest first one is location independence, and the second one is instead of one-to-one request reply as the dominant pattern - HTTP, that's all you can kind of do, sans SSE and WebSockets - we are end-to-end and both push and pull. And the push becomes very, very interesting for certain use cases, where instead of keep asking "Hey, have you updated your temperature? Have you updated your temperature?", just tell me whenever you update your temperature. And for scalability and distributed systems, just those primitives from the connective layer become pretty powerful at scale.

**Jerod Santo:** So NATS really took off, right? I mean, huge adoption. Can you tell that story?

**Derek Collison:** Yeah, so - I mean, NATS was built specifically to power those subsystems in Cloud Foundry. And I had no desire to do anything more than that. So it was, for at least probably the first 18 months of its lifetime, specifically geared toward just supporting what we needed in Cloud Foundry; from command and control, telemetry, eventing, things like that. When we started the company Apcera, which was trying to do a redo of Cloud Foundry on some of the things I felt I didn't spend enough time and energy on - security, governance, federation, all these different types of things - we rewrote NATS in Go. NATS was originally written in Ruby. That's what Cloud Foundry was written in. I still love the language... Not great to deploy things into production that are Ruby-based, although I know DHH has done an amazing job at trying to simplify that. But back in the day there was a lot of moving pieces to deploy the same...

**Jerod Santo:** Gnarly.

**Derek Collison:** \[00:12:03.29\] And we were starting to hit some performance issues, with very, very large systems needing more performance there. So we had -- at least at the time, we were looking at either Node.js (JavaScript), or Go, which was very brand new. I think when I started playing with it, it was 0.52. And I felt that the speed advantage, with the concurrency, the IO mechanisms that they had, but mostly the fact that you could build pretty much a static binary, meaning shipping to production was just move one binary, was the direction that we took. And it was a great direction. I mean, I think Go has grown up and there's people that like it and people maybe that don't like it, which is totally fair... But we've gotten a tremendous amount of mileage out of it. And at the time, looking back, it was the absolute right decision.

Now, going forward, when we're looking at massive, massive extreme scales that some of our customers are pushing us on, we're starting to bump into some things in Go that we need to address. And whenever I'm in a language and we start to do unnatural acts to get around certain things within the language, that's when we kind of say "Alright, let's take a step back and - are we at another inflection point?" And we're not there right now, but with the introduction of JetStream, which is the data persistence mechanism that NATS uses, that was added on about four, four and a half, five years ago, I guess, we're starting to see a lot of friction with the way Go does disk IO and things like that. And so we're trying to figure out what makes the most sense as customers are saying "Hey, remember when I said a million was good, then I said 10 million was good? Now I need a billion, you know what I mean? Could you do that in the next two years, type of stuff?" And those are great problems to have, because they're hard and they're fun to work on... But it challenges you to think outside the box sometimes.

**Jerod Santo:** Yeah. What are you looking at?

**Derek Collison:** You know, I don't do it anymore... I'm sorry to say that I've dropped the ball. But I used to learn a new language every year, and I would just write a NATS client for it to learn it. And so I learned Rust, and there's certain things in Rust that were really, really attractive. But to be frank, I just didn't enjoy programming in it, when you were doing a low level library. If you were consuming other things and building like an upper level app, that was kind of a composite of lots of different things together, especially the packages or crates were really, really well done. It felt really, really nice and clean. But I was at a low-level library, trying to do some things... And we got it, and it's one of our most popular clients.

Again, I'm older probably than the majority of the demographic that's listening to the podcast, but I like languages that I can hold most of it in my head. I've never been a big IDE person. I still program in Emacs. I do use AI, and I ask Claude or ChatGPT questions and things like that, but I don't have that Copilot, Windsurfer code mentality yet... But I do like Zig quite a bit. But Zig right now -- you know, Andrew was trying to take on some really gnarly problems, which I have the utmost respect for, especially the colorless async... And that kind of tied in a little bit to event loop structures, and they kind of got pulled out. We need some sort of direction there before we finalize a Zig client, but I did write one. I have one that kind of uses threads and does some interesting things.

And then Joran from TigerBeetle, I've known him for a while... Full disclosure, I'm a minor investor in their company, and I love All Things Distributed; I think that was their conference. And I've really been watching them, and Bun, and of course, Mitchell with Ghostty on what's possible. But each one of those event loops and io\_uring interactions is all kind of a little bit snowflake, not exactly... But I think Andrew is now thinking through a way to uplift the abstraction of IO, that could tie into an event loop as something similar to allocators in the language, where you have to pass it into a package or to a constructor, and say "Hey, if you need to use IO, please use this essentially interface." And so I'm really interested to see where that lands. But I like Zig. Believe it or not, I like Mojo, even though I'm not a Python person.

**Jerod Santo:** \[00:16:33.10\] Really?

**Derek Collison:** I just am a huge fan of Chris Lattner's and what he's trying to do there. I think it is impressive.

**Jerod Santo:** Sure.

**Derek Collison:** But Zig's probably number one right now in my mind. But again, we need a little bit more direction... Not from the server perspective, but if we wanted to do a client on "How do we interrupt between all the different event loops?" ...whether they reincarnate the one that they have in the language, but then Mitchell's \[unintelligible 00:16:55.14\] I think, and then of course Bun has one that's, I think, a pull from TigerBeetle's... And TigerBeetle has one... And so that'll be good when we get there.

**Jerod Santo:** Well, a completely different problem space, but you like Chris Lattner... The Ladybird folks are probably picking up Swift; from C++ to Swift. Have you considered Swift?

**Derek Collison:** I haven't. We built a Swift client. I wasn't involved in it. Again, I dropped the ball on my learn a new language every year. I actually did program a little bit Swift... I think the interesting part about where Zig is is that we can control direct IO, meaning we could go through io\_uring on Linux, if it's there, applicable, or whatever... And it allows us also to control more precise layouts of the data structures, and of course memory.

So anyone who's been programming in Go for a long time and has a tremendous amount of investment in a big codebase, you start to see things pop up. It's like "Oh, avoid JSON at all costs, because the built-in JSON marshallers \[unintelligible 00:17:59.17\] lots of memory." The network IO and the disk IO subsystems in Go are very different. And the disk IO subsystems are pretty much a native thread that kicks back into your goroutine that says "Okay, it completed. The write completed", or whatever. And I think what we need is a lot more fine control over those things.

So what I've been looking at is the adoption or the ability to introduce io\_uring in a meaningful state. And I think Zig's done a pretty good job there. Maybe not within the language per se, but with folks that use it. Tiger Beetle and Bun come to mind. And so that one's kind of a big one. The data structure layout, the garbage collection and taking control over disk IO... Which - JetStream, we've got folks that are coming in and say "Oh yeah, I need to do a million stored messages per second, replicated three ways, and then an async mirror over in a different region and a different cloud provider" type stuff. So we can abuse the disk, the storage subsystems pretty well, and we might be getting close to kind of everything we can accomplish with Go... I'm not saying that that's definitive, but it's starting to feel that way, as we're starting to do - not unnatural acts, but we're starting to do a lot of things inside of the server to get around how Go actually marries concurrency with disk IO.

**Jerod Santo:** Hm. So when you said some of your customers need like a billion - is that like message passes per second? Or what does that mean, a billion? A billion what?

**Derek Collison:** \[00:19:38.18\] Some need a lot of messages per second... NATS has always been pretty performant. Last time I checked, just raw speed, a single server could do about 20 million per second messages sustained. All of our clients can't do that. They have more of the logic, but a raw just, you know, shove it in there... But when we say billions of things, it's usually stored messages, and then subject cardinality. So in event sourcing and event streaming, every single message has a unique subject. And what we've found was is that people are starting to treat the stream of messages... And we have materialized views, like key-value and object store on top of them, but they're starting to treat them like a subject-based addressing lookup thing, meaning that they use subjects all the time to get messages out, or filter messages, or do some other operation.

And so you could imagine trying to figure out an index that looks like a traditional data structure that anyone who's done a comp side, 200, 300-level class would understand... But overlay subject semantics with wildcards and partial wildcards is a little bit tricky, if that makes sense.

**Jerod Santo:** Yeah... Like a giant hash table in the sky, that also has some very gnarly semantics that you can use.

**Derek Collison:** Yeah... And to be honest with you, it's called the \[unintelligible 00:20:57.00\] and it's an adaptive radix tree, with path compression and expansion, but then it has an overlay where we can say "Hey, you just stored a billion subjects in here, hopefully in an efficient way. Pick out and call me back on everything that matches foo.\*", you know what I mean? In other words -- or a wildcard. And so we have that, but that lives in memory. And so if you have 10 million messages, but only a thousand subjects, you're fine. You'll never even see this. But we're starting to see people where they've got billions upon billions of messages, and everyone has a unique subject. Next thing you know your server's taking up 30-gig just for the indexing on the subject-based addressing layer.

**Jerod Santo:** Right...

**Derek Collison:** And so that's one of the big challenges, is that the team is looking into solving for 2.12, the next version of the server.

**Jerod Santo:** Well, it's cool that you still have your head down in the technical trenches of this project, because it seems like, from what I've seen from you all and your name signed on things recently, it's all been higher level business, and maybe technical legalese, not technical technicals... But it's cool that you're still close to the metal of this project, and not just the business guy now.

**Derek Collison:** Yeah, I mean, I definitely wear multiple hats, obviously... And as of late, I've been more concerned about upper level discussions around Synadia, and NATS, and the CNCF, obviously, which we can talk about, but also the business side of Synadia... But I identify with builders. I feel that working this hard, you want to get to a place where you get to do the stuff you like to do, at least part of the time...

**Jerod Santo:** Right.

**Derek Collison:** And I still love doing that. Am I as good as other folks in the company? Probably not anymore, but I still love to reason about things, think hard about things, tackle really, really hard problems... That's kind of my relaxing motion in terms of work, if that makes sense.

**Adam Stacoviak:** So if NATS was roughly around 2010-ish era, and you really didn't plan to do anything with it beyond its original case, at what point did you say "Well, you know what? We should be a company. We should create Synadia." And that was 2017, based on what you said before. How did that -- how did you go from there in 2010 to there in 2017?

**Derek Collison:** Yeah, it's an interesting story. So one of the things that folks might not know is that when we were doing Cloud Foundry, VMware had never released anything that was open source. And my pitch to Paul Maritz at the time, who was the CEO who was running VMware - I said "I really think we'll have more bang for the buck here if this is released as open source."

And so when I did NATS, I said "I'm not going to keep this closed", so I actually just opened it as MIT. And then we did -- I can't remember what license we put on Cloud Foundry, but it was open source, which was a really big deal. When we went to Apcera, we did the rewrite in Go, and we started to contemplate whether or not this could be something bigger than just an OSS project. I mean, it was powering all of the Apcera stuff, but similar to Cloud Foundry: Telemetry, command and control, and eventing.

\[00:24:08.01\] And so as we looked at Apcera -- and Apcera was doing a commercial version of Cloud Foundry plus plus, to be very, very simplistic about it. But as soon as Kubernetes came out, certain things Kubernetes did that people liked, certain things that the Apcera Continuum platform did, they liked... So it wasn't a technical battle per se. It was "Where is the consumer bias going?" And Kubernetes, because no individual stakeholder needed to make direct money off of it, drove the consumer bias to zero. And so our ACV started declining. And so I called an emergency board meeting and said "Hey, I see the writing on the wall, and all I can tell you for the 30 plus million dollars left in the bank over the next four years is that we can tread water, but I don't think it'll change the outcome." And then I think pulling it into Ericsson and doing something constructive with some of the internal projects that I know they were working on made better sense.

At that point in time, there were certain people that were going to leave, certain people that were going to stay with Ericsson, and then there was NATS, the team that was working on NATS in the middle. And at the time, Ericsson said, "Yeah, we don't necessarily have any need for NATS. It's open source, we can use it... But if you want to do something with it, we can." And a bunch of folks internal prior to that decision-making process had already kind of approached me saying "Hey, we might be able to build a business out of this", under the assumptions that distributed systems will continue to have more moving pieces, but more importantly, that these pieces are going to start to be stretched out. So stretched out across regions, across multiple cloud providers, but more importantly out to this - at the time - new thing called edge. And the bet that we made was that edge would dominate interaction models and would dwarf cloud within probably a decade... And that cloud's not going anywhere - don't misread that - but that cloud would become the new mainframe, but all the interactions would be at the edge. And the rules are very, very different. So as many rules changed as we went from data centers into cloud, and we had the Heroku guys, Adam, and the -- was it the 12 things...?

**Jerod Santo:** 12-factor app.

**Derek Collison:** 12-factor apps, and then of course, the cloud-native architectures, and of course then the CNCF... All of those things - that step function from data centers to that I believe will be even bigger stepping from cloud into edge, where it's not batteries included. You can't bring all the stuff that the cloud is offering, and you have to kind of - not think differently about the what, meaning you're still drawing the same triangles and squares on a whiteboard as you're architecting, but the how would be radically different. And so that's when we made the leap to create Synadia, at the end of 2017, based around a foundation that modern distributed systems will look very different than they do today, and they will be pushed very hard in terms of dynamic agility. They can change all the time.

Again, I probably am further along career-wise than some folks on the call, but it used to be that when a system was set up like this in the '90s, early '90s, no one touched it. I mean, I can walk into any financial institution on Wall Street, and I could go into their server and point exactly where our stuff was running. And it never deviated from that. And that's very different than what I think a lot of the audience probably thinks now, where it's like "I don't know, it's somewhere in AWS East 2", you know what I mean? "But I have no clue what machine it's running on."

And so our thought process and our priors were that that type of step change is going to accelerate with edge, and that the current tools of doing everything with like HTTP or HTTP derivatives just simply won't be able to keep up, in our opinion.

**Jerod Santo:** How has that bet played out?

**Derek Collison:** \[00:27:56.14\] Um, very, very well. What I mean by that is that in the '90s, with TIBCO, I was on the engineering side. I wasn't in an executive role, or had any type of position around pricing, or anything like that. But just from an engineering perspective, we cared deeply about interacting with these customers, and such like that. When we watched what was happening with edge and how fast it was moving and how different the rules were, at TIBCO we had to educate the market. And I remember how painful that was. A lot of the sales cycles were 80% education. We need to explain to you why we think you are going to have a problem in the near future, that we think we might only be able to solve.

In this world, which was good for Synadia, people were coming to us going "Hey, I tried to pull Kubernetes, and JVM-like stuff, like Kafka, and put it into an edge thing, and it just -- it didn't work for me. And I need to think differently about it. Can you help us?" And so when we started Synadia, we wanted to start a company based on "If you're running a production and it's critical to what you're doing", which luckily our stuff is critical to every customer that we have, meaning there's no coffee breaks. If it goes down, they will light my phone up... That that was the opportunity we were looking for in terms of starting a company. And we didn't have to educate the market. They were already in pain, to start the company, and that they would want a commercial agreement with us to wring our neck if something went wrong. And I think that's a really good way to start a company. It's not the best way to scale it, so you need a backup plan as you evolve... But to start it, I think that's a really good place for folks to start, especially if it's based around OSS.

**Break**: \[00:29:41.04\]

**Jerod Santo:** So OSS... Should we open the can of worms around OSS?

**Derek Collison:** Sure.

**Jerod Santo:** Most recently there's been a - I don't know what you call it; a skirmish, a disagreement...

**Adam Stacoviak:** A kerfuffle.

**Jerod Santo:** ...a kerfuffle between CNCF and yourself, at Synadia, specifically around NATS and its involvement in CNCF, and a potential relicense... Of course, we've been here many times in the world of open source and business and licensing... It's something that everyone's trying to figure out, and some people have or have not, and then other people think they have, and then they have not... And then things change, and people are offended... And so there's been a lot of - I don't know, maybe drama is just the best word, around the business and the project. Maybe start with the CNCF and NATS' relationship to it prior to the most recent blog posts and press releases.

**Derek Collison:** Yeah, so what the audience might not know is that the CNCF was kicked off at a large meeting at the Switch Data Center in Las Vegas, of which I attended. And I was actually part of the founding governing board. So a lot of people might think "Oh, Derek's role with the NATS project and NATS being a project in the CNCF - that's kind of the totality of it." But that's not the case. And even early on, we were looking at what value CNCF could bring to the ecosystem from a consumption perspective, the users, to the people or the companies that want to utilize that, and then of course, the projects themselves... And then for me, it was like the companies that are driving said projects. In the case of something like Kubernetes, where it's all of the big boys, so to speak, there's not a lot that the CNCF needs to do there. It's kind of taken on a life of its own and it's marching down a path.

What we started to realize is that as time goes by - because this was, I think, over a decade ago - that both the CNCF and projects can evolve. And where we were at was looking at the question "Are we the best fit for CNCF?" And no fault of CNCF's per se, but it just felt pretty clear to us that certain projects were at this tier, and other projects were way down here, and we kind of were in the latter category.

In no way were we attempting to relicense the whole codebase. I mean, one, you can't do it, because once it's released, it's AP2, it's there. That will never change. But the CNCF in early discussions -- because we said "Hey, would you be open to letting the project leave if the landing spot made sense?" Meaning we could do a joint statement where it's like "No, it's landing in this new foundation, made up of lots of big users and customers or production uses of the NATS ecosystem. Commitment to AP2, X, Y, Z." And during those early conversations, which started in February, we were asked "Hey, are you considering a license change?" And we're very well aware that we can fork and do a Synadia version enterprise server, and X, Y, Z, and so we said "We're considering, just for the server, that we might do like a BSL." And at the time, the BSL - for us, it wasn't translated well out into the media... But the reason that we were considering it was we felt that it was the best show of commitment to both OSS and to our customers. And I'll explain what I mean by that. The BSL has usage clauses that you have to define when you release the software. And one of them is there's a period of time after which it converts back to whatever language you pick, which - we would pick AP2. And it doesn't matter what Synadia does, the Linux Foundation does, CNCF does, that is a legal contract that once we release, let's say, a server with the BSL license, after two years it's converted to AP2. Even if we don't actually update the copyrights, or update the license, or whatever. And so we felt that from an OSS ecosystem.

And again, we've gotten lots of additional information, lots of additional feedback. Most of it constructive, some of it not. And we've been listening. But our initial thought process as we were going down this path was "Hey, this signals really strongly that we're not going to hold anything back. It will always kind of revert back to generic drug prices." Some of the good parts of what the patent system originally was trying to do early on. I'm not claiming that the patent system is necessarily good these days. It's a necessary evil, right?

\[00:36:16.06\] In addition, if you would imagine a two-year BSL window, and let's say Jerod wanted to be a customer of Synadia - and customers are worried about vendor lock-in, price gouging, all those normal things - you could say, "I want to do a two-year contract, so I have predictable pricing", and at the end of that, that all stuff that I'm paying for converts to AP2, and I can now use it for free. Or I could say "Oh, I like the next version, too. I want to use that and \[unintelligible 00:36:39.10\] and do that.

So I'm not saying that it transpired the way we wanted it to, but I think people's thought process that we're just evil and we're just trying to price gouge and be greedy and stuff like that - I don't feel that that necessarily is correct, at least as we were discussing internally. We care deeply about our commitment to open source. But we are starting to see a very disturbing trend where customers that everyone would recognize - they're in the Fortune 50 - that are using NATS to power production-level services or functions or products, not only had never reached out for any type of commercial agreement with us, but actually have policies that say "If you're in the CNCF and you're incubating and graduating, we're not paying for it, period."

**Jerod Santo:** Really?

**Derek Collison:** And to me, I thought that that was at least worth the discussion. And it might not be a discussion between myself or Synadia or the CNCF, but the broader ecosystem, I think, needs to look at "Do we want open-source projects that drive value, that can be critical, that are driven by a small group of individuals or a company that's trying to make a business out of said value?" And Synadia has lots of different revenue buckets, so I don't want listeners to think that this is our only drive... But I was at least concerned enough to say "Are we signaling to the ecosystem, the broader ecosystem outside of us, that we only want projects that look like Kubernetes? We don't want any projects that are being driven by a single company." And I thought that was worth the discussion. For sure.

**Adam Stacoviak:** How much time before the blog post that I think broke the news, so to speak, from the CNCF directly - how much behind the scenes conversation was going on to sort of illustrate your points and your concerns?

**Derek Collison:** Quite a bit.

**Adam Stacoviak:** Was there a meeting? Okay.

**Derek Collison:** It had started in February.

**Adam Stacoviak:** So was this was blog post a surprise?

**Derek Collison:** Yeah. So we had gotten to a point where we were trying to assert the fact that we wanted them to consider letting us leave, and they were stuck on some of the trademark stuff. And so for the listeners who haven't been in this, when you're doing negotiations behind the scenes, you posture up and you do all kinds of stuff, and then you figure out when you can't move the stakes anymore, and then you make a decision. Right? And our decision was always going to be, "Hey, if they dig in, even if our legal teams say that we could potentially win this, we have to consider the damage to the ecosystem and whether or not it's worth it." And we had already probably decided that if they were just going to dig their heels in and say "Nope, you absolutely can't do that. If you want to go down that, it'll have to be a legal recourse", that we were going to say "Okay, we'll figure out something else." But they -- I can't speak on their behalf, and I'm not trying to, and again, I'm extremely encouraged by my talks with the Linux Foundation and some of the ongoing stuff with the CNCF, and that mutual statement -- again, everybody's had a hand in that pie, so it kind of gets diluted down...

\[00:39:54.29\] But I can tell you from my individual discussions with folks, especially at the Linux Foundation, I'm very encouraged with them saying "Okay, let's see if we can do better here", which is all I really kind of wanted at the time. But I did feel that we could be a good steward, and if we could say "Hey, here's what we're committing to", and that is commensurate with kind of what the CNCF is doing around certain projects, I thought it was worth the discussion to have.

Now, a lot of people don't agree with that, and have very emotional responses to that... And although I don't necessarily agree with it, I understand that people will fight very hard for consumption being zero... But production is never zero. Someone has to pay for it. I mean, unless it's just something -- and whether it's time, or money, or both... And so we were concerned enough to say "Hey, let's have a discussion about that."

**Adam Stacoviak:** Mm-hm. The main concern, I think, if I understood correctly, around even making this a concern for you was the fact that Synadia was having challenges securing certain contracts because of its incubation status of NATS, which Synadia is built on top of as the commercialized version of it... Is that the summary of your initial concern?

**Derek Collison:** No... I mean, we didn't graduate, and that's a public record, and it was mostly around diversity of the contributors to the server. So GitHub has all the stats so you can look at, all the people that have contributed to it. And I didn't agree that that was super-important for the success of our project long term. So I'm not saying the CNCF is wrong and I'm right, I'm just saying we had a differing opinion of what successful projects look like. And there's some that I've driven in my career that now have been around for 30 plus years, two of them have been around for 20 plus years, so I kind of get what it is, but it doesn't have to only look like Kubernetes, in my opinion.

And so that was kind of the first one where I was like "Hm... The CNCF is evolving where they bring in lots of different projects, and that's a daunting task of them having to do all that", and hats off to them on that. But as you watched how things move through the channels, and got towards graduation, there was some friction on "Does the project look like what the CNCF wants it to?" And again, totally their right to do that. And then also, I was noticing little perturbations in companies doing strange things to try to drive the business model where they were the main contributor. Their company was the main contributor driving said project; you know, outside of NATS. And we were watching that pretty closely. We don't get too many people worrying about the CNCF or our graduation status. Every once in a while we do... It's like "Hey, why haven't you graduated?" and we just say "Oh, because the CNCF's graduation criteria looks like this. This is how kind of the server looks like." And it usually is that quick of a conversation; like 15-20 seconds max, with customers, every once in a while. I think I've gotten two of those in the last six months, and it was just a "Hey, why haven't you graduated?" type stuff. So it's not that per se; it was as the CNCF evolves, are all projects good fits? And is the only answer "You have to fork it away and then we'll kill it"? And I don't feel like that should be the only answer. How about that?

**Adam Stacoviak:** Right. There's so much brand equity in the NATS name. Obviously, you founded it, you created it.

**Derek Collison:** Yeah, I created the NATS name driving home from VMware, on a Friday, I remember. And everyone laughs, and the marketing came up with a funny term, but... You know, I remember just shaking my head, driving home, going "Geez, I don't want to have to create another TIBCO server." I was like "Not another TIBCO server..." I just kept saying that to myself driving home, but I said "I feel like I have to." Well, at the end, Not Another TIBCO Server is exactly how it got named.

**Adam Stacoviak:** Yeah, yeah.

**Jerod Santo:** \[00:43:58.18\] So when you first joined, or when you first started incubating - is that the entry-level term there? ...with NATS, were you aware of the CNCF's desire? Or were there requirements like "This project will move towards a non-single corporate backer model", or whatever language would fit? Did you know coming into it that they wanted you to kind of change the format or the org structure of NATS?

**Derek Collison:** I don't think that was discussed at that level early on. So we were at the Switch kickoff meeting, we saw some of the early projects, they wanted us to be one of the earliest projects... I was hesitant, so I said "I want to be part of this, but I want to wait and see." And Google was doing similar things early on there. Like "We just want to kind of see how this is going to kind of pan out." But I think it was more from a sustainability, "How many people are using it? What type of impact does it have, both within the CNCF, but then externally?" were more of what I remember very early on of "How do we classify a graduated project?"

Now, as the TOC - that's the Technical Oversight Committee - keeps changing and new people come into that, they started changing the criteria. And so instead of kind of a gut instinct on a vote type stuff, they started formalizing some of the things that they felt needed to gate between sandbox, to incubating, to graduate. There might be some more levels in there, I'm not sure. And so at the time, though, we weren't aware of that, and it was only kind of really solidified when we actually went through the graduation process. And again, that's all online, the back and forth between us and the TOC on trying to graduate.

**Jerod Santo:** So was your failure to graduate then a shock to you, or did you see it coming? I did not see it coming. It took us a while - and again, it's all public record - to figure out what's going on here... And it was specifically about diversity of code contributions to core pieces of the project. Now, again, CNCF - I think they've done an amazing job with all of the different pieces that are flying at them... But if you look back historically, you could see certain projects that were like "Hm, how did that one graduate?" You know what I mean? That was a lot more similar to these types of projects than others. And I think they've slowly cleaned that up and kind of solidified that process and those criteria... It was just I didn't agree with the criteria. And again, I'm not saying I'm right and they're wrong by any stretch, but I did fundamentally disagree that not all projects --

**Jerod Santo:** You must think you're right then, right? Like, if you disagree fundamentally, then you've got to think you're right. Well, in certain projects. Could Kubernetes have been driven only by Google and gotten to where it was? No, but it has a very different role of kind of greasing the skids between cloud provider mobility, and that was kind of some of the original \[unintelligible 00:46:56.27\] and the folks that built it... At least from me talking with Diane back in the day, of why they were doing it. But I don't think saying that that project fits means that a project like NATS doesn't fit.

**Jerod Santo:** Right. But they disagree with that.

**Derek Collison:** Correct.

**Jerod Santo:** And they're the bosses of the CNCF, so they get the final say on that. Now, when your conversations began back in February, this is when you realized you were not going to graduate, or you'd already kind of known it for a while? Like, you had decided "Well, we're not going to be a good fit anymore." Right?

**Derek Collison:** Yeah, that was -- the graduation I think was in 2020, as well as the trademark fight.

**Jerod Santo:** Okay, so a long time ago.

**Derek Collison:** So this was more of a "Hey, we just think we're not a good fit anymore, and let's figure out if if there's a way where both the CNCF and Synadia can message to the ecosystem that this is okay, ut as long as there's a landing spot that holds true to what the CNCF wants, commitment to open source, things like that, would that be possible?" And obviously, the answer is no, but I still think it was worth a conversation. And that's where we went.

**Jerod Santo:** \[00:48:01.15\] Right. So in February, you wanted to kind of slip out the back Jack, it wasn't going to work out... And those conversations began. And then they asked you if you were thinking about a relicense and you said "Yes, we're thinking about BSL." And then there was probably some more conversations between there, but then they decided to publish the blog post... Or what am I missing in the interim, between --

**Derek Collison:** So I think we were very clear in our commitment to AP2 and OSS. And that it would be a fork that we put BSL work into, that then would - again, in our opinion, would signal a commitment to OSS. Because no matter what we did or said after that two years, which was the number we had picked internally as we were going through that process, it would convert over. And so I was saying -- the licensing stuff is kind of separate. We're talking specifically about the open source nature of NATS, and whether or not it's a good fit, and if it can land somewhere else with both the blessing from the CNCF and the commitment from Synadia, that allows them to feel comfortable doing that.

They then started getting to the point where we were starting to figure out when the stakes would move or not move... Again, and it's totally fine, negotiating types of stuff... And they put a hard stake in the ground, "Nothing will ever leave the CNCF. We'll kill it instead."

**Jerod Santo:** NATS cannot leave the CNCF.

**Derek Collison:** Nothing can leave. Ever.

**Jerod Santo:** Nothing, ever, including NATS.

**Derek Collison:** Correct.

**Adam Stacoviak:** And that was my question too, was like "Has it ever happened before?" Which, I'm appreciating the details behind the scenes here.

**Derek Collison:** No, it hasn't.

**Jerod Santo:** Okay, so it's like Hotel California... Is that the one? You can check in, but you can't check out.

**Derek Collison:** And again, I think that that's totally fine that that's their position. I still felt it warranted a conversation, because that doesn't feel right to me. So if you look at like Grafana - it had an interesting thing with Cortex, and they were going to start driving more stuff, but it wasn't necessarily compatible with the CNCF, but they were still committed to the open source nature of what they were trying to do. But it wasn't compatible. And so the CNCF said "Nothing ever leaves. So you can fork it and then abandon this one." And that's what they had to do. And again, I'm not saying they're right or wrong, but when they purport that's a success story, I talk to other people and it doesn't feel as much of a success story. Mimir started, and that's what almost everyone on the Grafana side uses, and I think Cortex is mostly supported by AWS, so that they can run it and not have to pay anything to Grafana. Again, the consumption of zero is a sense of entitlement that I also think is kind of interesting, but production side is never zero. Someone's got to pay.

**Adam Stacoviak:** Yeah, it's a hard position to be in whenever -- and almost, knowing this, I think maybe this even exposes a different scenario where maybe you were not fully aware... Like Jerod was asking, were you aware of X, Y, and Z when you first joined the CNCF or you incubated that whole process? And I think over time, you get more and more privy to certain details that are truths about what it truly means to join the CNCF. And I'm not saying anything negative or bad, but not being able to leave, like coming in the door and not being able to leave with the thing you think about over a weekend and you name is challenging... Because if you don't pass the bar of incubation and graduate, and you're not a -- I don't know what it means to not graduate. Does that mean you're like not?

**Jerod Santo:** What's it mean to graduate even? What does that mean?

**Adam Stacoviak:** Yeah. I don't get all of it. Does it mean you're not valuable? Does that -- I don't understand the graduation statuses either. And I'm sure there's a lot of nuance, too.

**Derek Collison:** \[00:51:44.05\] Yeah, there is. And even after our TOC process around graduation where we did not graduate, there was a slight change that said "Incubating or graduated projects are considered mature and production-ready." But within the grand scheme of things, someone from the outside, a user who's saying "I'm just looking for some software that might solve my problem", they see graduated as a higher level than incubating. And so they're like "Why haven't you graduated? Because you've been here for a while. You started at incubating back in 2018", I think is when we officially joined, if I recall correctly. I might be off on that one.

And so yeah, I wanted a conversation... We had spent -- and I'm not saying that CNCF has not also worked to promote NATS, maybe not as much as Kubernetes and things like that at a KubeCon or whatever, but they did do a part there. But we lived and breathed this 7/24/365 for almost 15 years now. We've put everything can. And not just myself, it's just all the folks that were at Apcera, and then of course now at Synadia. And not saying that what we thought was necessarily correct per se, but I find it interesting when people go "Oh, you really don't care about the project", you know what I mean? Or "You're just trying to do a money grab and gouge people for money at this time." That's a little unfortunate. I get it. And again, I know this whole topic is very emotional, and I can appreciate that... But that's about as far from the truth as you could possibly get from what we were really trying to do.

And again, if you looked at some of these companies -- and we talked to other customers of ours, big customers, and said, "Oh, these people that are kind of on the same level of you in the Fortune 50, they refused to pay." And when that kind of came up, they actually kind of changed their tone and said "Ooh, so we could actually get access to stuff that we're helping fund by having a commercial relationship with Synadia", for a period of time, two years before... On one conversation they called them the freeloaders. And he's like "It's not Bob and Vinny's pizza shop out of Venice. It's people on the Fortune 50 that have the means to pay. And this isn't a little internal developer tool. It's a production-level, critical service." They actually went "Oh yeah, we actually kind of like that idea."

And so from a partner and ecosystem standpoint, those conversations - we had lots of them because we lost control of the narrative. The CNCF wanted to all of a sudden move things into the court of public opinion. That's totally their right. We didn't have a heads up though, so my phone started blowing up when that happened... But we kept business as usual, we kept doing commits, PRs... And we actually did a release the very next day, a full-blown server release, which is a really big deal. It takes a lot of effort for us to kind of do all of those.

So we've been trying to signal to the right folks, looking at the right pieces of data that, "Nope, there's a disagreement here. We're going to try to work it out, but we're still committed to what we've been doing all along."

**Derek Collison:** Yeah. You mentioned some of the emotional responses online, and I've read a few of them... One of which, which I'll summarize, because they use more flowery language than I'll allow myself... But maybe you have a chance to answer this particular outsider perspective, which if you're just watching from the sidelines - I can't remember if we'd hit Record yet or not; we started talking about armchair quarterbacks, but... You're just sitting in your armchair, quarterbacking. And what you see is Synadia brings NATS into the CNCF as an incubating project, it gets all the benefits -- even though it sounds like you were getting all the benefits that you maybe thought you would get, because Kubernetes maybe sucks a lot of the air out of the room... But gets all the benefits, the conferences, whatever; the clout that you get of being a CNCF project... And then hangs out there for a while, decides they want to relicense and take their ball and go home. And that makes people upset.

**Derek Collison:** \[00:55:57.21\] Oh, yeah.

**Jerod Santo:** What do you say to that sentiment? Why is that wrong, if it is?

**Derek Collison:** The reaction is not wrong. What I have an issue with is the conflation of facts within the reporting. And so it's easy to draw that conclusion. So I don't get upset at people being very upset at us, and more so directed directly at me. The question is, is how much energy do we want to put into trying to make sure the facts are correct? The whole licensing and leaving the CNCF were conflated when they never should have been, because they were never conflated in my initial conversations with --

**Jerod Santo:** Unrelated conversations.

**Derek Collison:** Yeah. They just asked me and said, "Hey-- because this is a problem. We're seeing this and we don't know what to do about it yet, but we wanted to know." And I'm like "Yeah." And I said, we're starting to see said three-letter companies use our stuff and get a lot of value and contribute nothing back. And I'll be very transparent... Yes, contributions comes in a lot of ways, but for a company like Synadia, a commercial agreement and funds is the only one we really care about. Yes, we care about issues, and PRs, and all that other stuff, but just being very, very transparent, they don't keep the lights on. And again, Synadia has plenty of money and we have lots of revenue opportunities, and we're driving lots of those... But at the time, I was like "This to me feels wrong. It just doesn't feel correct, that the consumer bias is being driven to zero for companies that it makes sense for them." Because if you sell a piece of hardware or a service, it's kind of nice to have a guarantee that all the software you're going to use to augment that will always be free, and keeps your margins where they are. I just think as an ecosystem, as we're evolving, things are changing - the CNCF has changed a lot - that we still need to think through some of these and figure out "What do we really want as a global ecosystem around this?" And charity is not a business model. So the whole notion of "Oh, you can do donations", that's not a business model.

And so what this lesson has taught me is that the biggest challenge, obviously, is in a company that develops OSS software, that wants to make a business off of that software, specifically as software; not necessarily as a service. Service changes the consumer bias. So if it's something physical or somebody's running something for you, your natural bias is "Oh, I have to pay for that." But if I give you a piece of software that we spent over 30-some million dollars developing over the last decade or so, you start to see this notion of entitlement. "Oh, I deserve this for free, and I don't have to give anything back." And we even have some people that just like bark orders at us, like "You need to do this in the system." And we're like "Okay, that's interesting. You're not a customer. We don't even know if you use it." And everyone has these problems. All the OSS projects have these problems. But for what we were looking at, I was like "That doesn't feel right to me." And I wanted to reach out and open a dialogue and have conversations that would hopefully spur some constructive dialogue. But just for the record, we never were abandoning open source. We were never going to blanket-relicense everything. That's just simply conflation of facts in the media, and then people reacting to them, and then that being amplified quite a bit over the social media channels.

So that's the -- I have no problem with people being emotional about it, but the way it was presented and the fact that we not only lost control of the narrative, but then all of these articles never reached out to us or me at any point in time and said "Hey, what's your side of the story?", you know what I mean? And I was like "That's interesting..." I even have one now where someone pointed me to a YouTube video where the guy - just F-bombing me and trashing me left and right...

**Adam Stacoviak:** Oh, my gosh...

**Derek Collison:** \[00:59:52.28\] And I'm like "I don't know who this person is. I've never met them. They never talked to us." And I asked the whole team, I said "Has anyone interacted with this person?" They're like "Nope." They're just a YouTuber that --

**Jerod Santo:** That's how you get the views, you know...

**Derek Collison:** Yeah. And I get that, but at the same time, I kind of shake my head, I'm like "Okay..."

**Jerod Santo:** Not helpful.

**Derek Collison:** No, it's not. And again, if as an ecosystem we say to ourselves "We don't want open source projects that drive mission-critical functionality that are driven by a single company" - I don't agree with that, but if as a global ecosystem, we say that... But I want people to think really hard about what that really, really means.

**Break**: \[01:00:32.15\]

**Adam Stacoviak:** If you had your way, like if this went without a fight and you were able to do what you were trying to do, what were you really trying to do with the project? If things went your way, this fight didn't happen, and you could leave the hotel, so to speak, what would you have done? What was the goal?

**Derek Collison:** So earlier on we were talking, I think, about - I don't know if we were being recorded or not - programming languages. So what I was looking at originally was if we created a foundation that had a Synadia representative, but also had representatives of all the major users of NATS, and customers of Synadia, in a 5013(C) or something like that, that had a commitment to AP2, open source, XYZ, that's probably what we would have done. But it was simply just for the betterment of NATS. And everyone that sat on the board, similar to kind of like the TOC - although the TOC is more of "Hey, we'll get involved if you need to move from sandbox, to incubated, to graduation, or if something's off the rails. Otherwise, we let projects manage themselves", this would be more of bringing in a lot of our top customers; the Walmarts of the world, things like that, to have a seat at this and be able to help direct where the project would go.

**Adam Stacoviak:** And right now in the CNCF that's just not a full-on reality. That's more limiting, more governed by other folks...

**Jerod Santo:** Yeah, couldn't you do that inside the CNCF?

**Derek Collison:** We could, meaning... I mean, right now, we steward the project --

**Jerod Santo:** But then you'd graduate, wouldn't you? I mean, you did that, and then they graduate you.

**Derek Collison:** No. The graduation criteria that we failed - and I don't know if it's still the same; I have to check with that - was the code contributions in the server were not diversified. Too many were coming from Synadia.

**Jerod Santo:** Okay, so it's not like governance, it's actually code contributions.

**Derek Collison:** That was what tripped us up in terms of trying to graduate in 2020.

**Jerod Santo:** That seems to be off. That doesn't make sense... I mean, it's more measurable, but if you established even a TOC of your own - or TSC, a technical steering committee - comprised of Synadia folk plus your largest customers... Right?

**Derek Collison:** Yeah.

**Jerod Santo:** ...and they didn't write the code... Like, who cares who writes the code if they're helping vote on the direction of NATS? I would think that would be a diverse open source project.

**Derek Collison:** \[01:04:07.03\] You know, I would tend to agree, but again, I'm not trying to say "Oh, the CNCF's wrong", or try to speak on their behalf. I just am --

**Jerod Santo:** And they aren't here to represent themselves, so...

**Derek Collison:** Right, right. So I don't want to do that.

**Jerod Santo:** ...we also have one side of the story. We're not journalists, we're just podcasters; we're here to talk. But worth saying, they're not here to defend their side of any of this, so...

**Derek Collison:** Yeah. But what happened to us, with us not controlling the narrative, I want to be very sensitive to the fact that they do have differing opinions... And again, I'm extremely encouraged by our talks and how they're like "Okay, yeah, let's see if we can do better here", from a graduation flow potentially, but also -- I don't know if it's this notion of... I don't know the answer, and I don't think the CNCF knows the answer either, but for example Modular, I don't know if you saw, they just did a license change as well. They're getting more and more permissive, because they want broader adoption. And it's AP2, which is great.

**Jerod Santo:** Who's this?

**Derek Collison:** Modular. They do Mojo; that's Chris Lattner's...

**Jerod Santo:** Okay. Modular's Mojo, okay.

**Derek Collison:** Yeah, yeah. But what the interesting thing was is that they say "If you use it in production, you just have to let us use your logo in the use case." And I was like "That would be good. I would like that." Because we have so many companies -- I mean, if you go to NATS.io and look at who uses us, those people opt in. They send us and say "Hey, please put our logo on there." But there's so many more that use us and don't want that, or actually say "No, you can't use our logo whatsoever on that." So even something like that to kind of go "Oh, we can see Acme company is actually using that. And we know Acme company. That's really cool." That would help a company like Zenedia. That's that trust factor.

**Jerod Santo:** Sure.

**Derek Collison:** And so I shot that over to the folks at the Linux Foundation and just was like "Hey, would you guys ever consider something like this?" I don't think they will, but I'm trying to do my best and operate in good faith and saying "Okay, if we want to make this better, I'm going to tell you things from my perspective that could make it better for a project that looks like NATS, and companies like Synadia that are driving that, and we'll see how that goes." I don't expect anything materially to change radically, but at least they're open to the conversations now, and are starting to be receptive to "Okay, we see that there's some challenges here that we might be able to improve."

**Jerod Santo:** So Modular, setting that up - effectively Apache 2 with an additional constraint on it. Isn't that then technically like a proprietary license now? Like, they've customized a license, and now it's not exactly Apache 2 anymore. It's like Apache 2 with this other thing, which is very similar to like what Meta did with Llama, which is like it's pretty much open source, except for this one... Now, their constraint was much more strict than "We want to put your logo on our website." It was like "If you have 10 billion users, you can't use it", or something like that. But...

**Derek Collison:** I mean, you raise a good point. I'm not a lawyer and don't pretend to be, but I think in that notion, the license strictly governs what you can and can't do with the code, meaning the code itself. So for example, even within the CNCF the code is AP2, but the CNCF has other regulations around how you use the trademark, and how you can use the logo, and how you can do derivative products, and use the naming.

**Jerod Santo:** Sure.

**Derek Collison:** So I think what modular is doing is fun. It's outside of that pure "What can I do with the actual code?" But what they're saying is is that if you're using it in production, then you're giving us the right to use your logo. I think those are separate. But I understand it feels like it could be sticky, because the difference between a trademark versus a copyright versus a code license are all nuanced in how they kind of interplay, for sure.

**Jerod Santo:** Right. Which reminds me of something else that I read - and this was just, again, armchair commentary, so I'm not even sure if this is true or not. But when you become a CNCF project, you typically will actually turn over IP to the CNCF, right? Like, the actual intellectual property becomes part of the trademark...

**Derek Collison:** \[01:08:12.03\] Yeah. Trademark, logos, or whatever.

**Jerod Santo:** \[unintelligible 01:08:11.01\] but yeah. And with NATS, did that happen?

**Derek Collison:** So what happened with the trademark was kind of interesting... And again, it wasn't necessarily stated. And I tried to correct some of the facts and I got pitchforked even worse. But essentially, when we did the original kickoff for the CNCF at the Switch - this is my recollection, was that you only legally transfer those upon graduation. And I remember Google kind of being a little nervous that if Kubernetes started directly as a graduated project, that they would have to figure out all of that stuff with all of their lawyers, and X, Y, Z. And so that was in my head. Now, to the CNCF's -- to benefit them, I think they quickly changed that once Kubernetes graduated, and they said "Nope, as soon as you're in, you essentially have to transfer. Or at least once you move past sandbox." And we joined as an incubating project in 2018. So the rules had shifted from what my recollection from the original kickoff meeting was.

But besides that, the thing that, to be honest with you, frustrated me - you know what I mean? ...just being transparent. But again, I like the conversations that we're having with the Linux Foundation and CNCF... But as we were trying to graduate and we had just joined, all of a sudden major leagues baseball came and said "Hey, we don't like your trademark, because it conflicts with the Nationals baseball team out of Washington."

**Jerod Santo:** Oh...

**Derek Collison:** And so I was like "Well, that kind of is silly." And anyone who's done patents from your listeners know that there's a little bit of a game to that as well. The whole patent, and trademark, and all this other stuff... But on the trademark side, I was like "I can't imagine someone being able to argue correctly to confuse a baseball team with a piece of software."

**Jerod Santo:** Yeah. Different domains... I think that's spurious.

**Derek Collison:** Yeah. So I approached the CNCF and said "Hey, we got this opposition. We want to fight. I asked our legal team. They think it's going to cost around this much." And the CNCF at the time was not willing to take that fight on, and suggested that we just change the trademark, and that if we do that and make it easier on them, that they would give us a keynote slot so that we could announce the name change. But I \[unintelligible 01:10:35.04\] to the name. I cared deeply about the name, and the logo, and you know...

**Adam Stacoviak:** For obvious reasons.

**Derek Collison:** Yeah, because remember, this had been gone to -- it was named, and we kind of started to have logo for almost eight years before we officially joined the CNCF. So it had a probably longer lifespan than people realized prior to the CNCF. And so we fought it, on our own dime, as a small startup that was only a year old. We had just gotten seed funding... And we successfully defended it. And so upon completion of the successful defense, the trademark was awarded to Synadia, with the deal.

And so at the time, when I was talking to the CNCF, they were like "Well, we own the trademark." I go, "Well, technically, you don't." Now, this will get listeners frustrated and upset, and I get that, and I'm totally empathetic to why you would get upset. And I'm not asking for empathy by any stretch, but I was very frustrated that something that they said they cared so deeply about, they threw away in one email and said "Oh no, you guys figure it out." And then to say "Oh, but - congratulations, you won. Now give it to us." That also rubbed me the wrong way. But technically, what the CNCF was saying is "No, the commitment was you were going to give it to us." And so I definitely understand their position as well. And we are committed to that. And part of our agreement, we're going to transfer everything over, the lawyers are working out the legal docs, and things like that. But that was kind of my frustration, to be transparent. And then they never asked for it after we successfully won that. And so again, the way things were conflated and released out was, I think, very targeted, in terms of trying this in the court and public opinion.

**Adam Stacoviak:** \[01:12:31.12\] I've got two questions, but one I'm going to pause on... When anyone, a project - maybe this one in particular, but any project - decides to take that project, donate it to the CNCF, and do all the things you did; incubate etc. Is there ever a point where you sign a specific agreement that's clear? So I feel like - Jerod, you've heard me say this before... Clarity and expectation. Like, if you have clarity on an agreement... It's the whole point of an agreement. It's less about binding you, but more like "Here's the line we both stand on. This is what we both agree on." Was there any clarity, or is there a \[unintelligible 01:13:05.28\] scenario where you're signing, and it's clear, and "This is what will happen, and there's a series of events"? Did you ever sign something?

**Derek Collison:** We signed something to get into KubeCon in 2018, which had a line that says "If you have a project in the CNCF, you promise" -- I'm making some up, but I think it's online. "You promise to abide by all the rules for CNCF projects." That link -- I still can't even get into that link today. And so I think there's an opportunity here to improve that process.

And also, I would imagine the listeners are very well aware of those emails that say "Our terms have changed" or "Terms of service have changed", and you get all these emails, and most of us don't even read those... I never saw any of that. I'm not saying they weren't sent, but I never saw any of that to say "Oh, hey. What you think, Derek, from the kickoff meeting, we changed it. And now it's this." So I think there's an opportunity to make that a lot more clear. But most people who are coming from an opposition to me say that's always been the case. That should have been crystal clear to you that you donate the trademarks, and X, Y, Z. And I understand that, because they see the CNCF as it has evolved. They didn't see it when it was first getting kicked off.

And so I think they're totally right in their assertion that I should have known better, but I still think there's an opportunity to make it a lot clearer. Like, even now, I can't remember if it's as soon as you get part of the CNCF, or once you move past sandbox. I think if sandbox, you can take it back, if you don't get past sandbox. I think. But I could be wrong there. And so even with all this going on, it's still not necessarily clear what all of the rules of engagement are... But I just see that as an opportunity to improve for everyone, if that makes sense.

**Adam Stacoviak:** Yeah. Well in that case there, if the link is broken or there's some sort of language that's compressed, like there's a whole other document that's compressed in like four words, essentially, based on what you've just said... And so those are usually addendums to an agreement. You know this, because you've probably signed tons of agreements in your life. Those are usually addendums, and that's usually compacted into a single product. This is the agreement I'm signing, and if there's terms beyond the agreement I'm signing...

**Derek Collison:** They're attached.

**Adam Stacoviak:** ...they're attached as an addendum, to kind of -- to help everyone safeguard themselves from scenarios potentially like this. Okay, so my second question is this - it sounds like y'all have an agreement, the blog post is out there... It sounds like kumbaya, to some degree; maybe not. Is any of this conversation you're having with us right now going to get you in trouble, more so?

**Derek Collison:** \[01:15:53.27\] I don't know...

**Adam Stacoviak:** Because you're being very clear.

**Derek Collison:** Yeah, I'm trying to be very clear.

**Adam Stacoviak:** For good reasons, but you're also being very clear. And it could be very clearly wrong, clear. Not wrong in terms of like truth, but more like "Hey, come on now. Don't say that in public, on a podcast that gets listened to by a lot of developers in our world..."

**Derek Collison:** Yeah. I hope not, because we're entering into this in good faith, and I've tried to make sure to interject that I'm extremely encouraged by the discussions that we have committed to transfer the trademarks over. We actually did finalize early this morning, which I'm happy to talk about our actual direction in terms of whether we're going to do a fork, or what commitment we're going to do to the server, X, Y, Z... And so we're operating in good faith, and I would imagine they are as well, and it's a trust but verify, you know what I mean, type situation. But I'm very encouraged by them being open and receptive to some of the challenges that companies like Synadia or projects like NATS might have.

And hopefully, there's some meeting of the minds around paths forward that might level the playing ground, if that makes sense.

**Adam Stacoviak:** Yeah.

**Derek Collison:** But I would imagine, you know, there's going to be some people that are going to pitchfork again, and that's totally their right... But that's how things went down, and that's kind of where we are right now... And I still feel deeply about the NATS project and where it's going. I mean, one of the other things that listeners might not understand is there's different, in my opinion, personas to projects that are kind of on maintenance mode... Meaning "We'll fix bugs, and if there's other stuff, but the features are pretty much complete." NATS and the server are definitely not in that camp. We've got over two years' worth of plans, and still the majority of our R&D budget goes into stuff that sits in the NATS.io ecosystem. Part of that open source project that sits inside the CNCF, from all of the clients, obviously the server, a lot of tools, Kubernetes, Helm charts, Systemd, all kinds of things like that. We're still probably spending 70 plus percent of our R&D budget just on that. And that hasn't changed, and we don't plan on slowing that down. It was "Hey, is there an opportunity for us to recoup some of those costs for people that care the most about some of those crazy enterprise features, massive scale, security, whatever?" And that's kind of how we started to go down the path of "Hey, what if we did a commercial fork, but may get BSL?" Again, it didn't land well because of the narrative, but our thought internally was that to us signaled the biggest commitment to OSS and to our customers trying to avoid vendor lock-in, or price gouging. But it was in a vacuum. And so once we got additional information, we realized that we probably would have to reevaluate that thought process.

**Jerod Santo:** So how would the commercial fork with BSL be different than open core? I'm not understanding that.

**Derek Collison:** We would be on -- BSL also is source available. It's not an OSI-compliant license.

**Jerod Santo:** So NATS would be -- the entire NATS project?

**Derek Collison:** Just the server. We would put all of the effort into that fork, which meant that once it was released, then the two-year window started. And so then that would flow into the AP2 codebase that's covered by the CNCF. That was the original thought process. Now, we're not going to do that...

**Jerod Santo:** What's wrong with open core, though? It seems like you could just accomplish the same goals without relicensing. You just have -- you know, "You want your billion transaction messages per second, then we've got an add-on for you", or whatever it is.

**Derek Collison:** Yeah, you're absolutely right, and what we've heard from the ecosystem is we like that model because that's what's familiar to us. What I try to point out to people is that commercial forks - it's totally up to Synadia, and maybe that's totally fine, and people are saying it's fine, but again, I don't think folks think all the way through some of these things sometimes... It's at our discretion what we put in there, and it's also our discretion that we don't have any commitment to put it back into the open source community whatsoever.

\[01:20:05.08\] So let's say there's something, Jerod, that you really, really wanted, and you're an avid user and stuff, and Synadia decides "Oh, we're only going to put it in the enterprise version." You're stuck. Now, of course, you could try to do your own version of it in the OSS side... But at the time - and again, this was in a vacuum, and \[unintelligible 01:20:20.02\] additional information, but I was arguing hard that the BSL would signal a better commitment to saying "Everything will become AP2 after two years. No matter what we put in there, it will become that way."

**Jerod Santo:** Right.

**Derek Collison:** And so that was kind of our original thinking. We knew that was going to be a fork. The question on whether or not we could use the NATS name, who it was part of where we lived in the CNCF, or if it came out, and who technically owned that trademark... But we already knew -- we knew that that was what we could do, it's just if it's commercial we have no guarantees to either our customers from vendor lock-in and price gouging, or the OSS ecosystem. And so at the time, I was like "Ooh, I feel this is a better signaling mechanism." But we needed to control the narrative, meaning once we actually did decide - and that's the other thing that folks might not know... We hadn't finalized our decision when the can of worms got opened up, and so everyone's like "You've got to tell us what you're doing." I'm like "We don't even know what we're doing yet." We were just still having internal discussions on that, because it was a totally separate subject from the relationship with the CNCF.

**Jerod Santo:** Sure. Well, do you know what you're going to do now, or are you still trying to figure it out?

**Derek Collison:** We've been meeting every day since the whole debacle started, and so... We already had gone down a path of doing composition \[unintelligible 01:21:43.04\] So what I mean by that is a lot of customers came to us and said "Hey, we want to take control over authn and authz." We have a pretty rich authn and authz system, but they go "It's not enough. We need something else."

And you could imagine a world where we said "Oh, we're going to do a Synadia server and we'll put all that stuff in there, somehow." Instead - and this is already done. This code was done probably a couple of years back. We did an auth callout mechanism, meaning the AP2 server, you can say "Hey, you're no longer in charge. Something over there is in charge." And then we, Synadia, could build lots of IP around for OAuth for authn, you know, X, Y, Z. OPA integrations, things like that. And so we already were going down that path, so our decision now is we will not do a BSL stuff. We know we have the right or reserve the right to do a commercial fork, but I think what we're going to do is we're going to post - and we can do this in the show notes - of everything we've committed to go into the AP2 server, without any delay. The BSL would have had a delay on there. And that we're going to expand our commercial offerings through composition, meaning you're running the server, but now all of a sudden, it's got security appliance, which we've been working on, and some really interesting stuff... Think of it like a \[unintelligible 01:23:00.21\] for NATS, plus a whole bunch of other stuff. And so we're going to go down that path.

**Adam Stacoviak:** Well, I can tell you, there's so much nuance in this. History, nuance, good intentions...

**Jerod Santo:** Emotions...

**Adam Stacoviak:** ...not a lot of bad intention necessarily, but maybe some confusion, some lack of clarity... OMG. Please, fix that stuff.

**Derek Collison:** Well, when a subject matter is very emotional, it puts your brain into fight or flight, which means that you have to make decisions very quickly, on imperfect information. That's how we all survive. That's why we're all here, because we ran away from the lion, instead of going "Oh, look, a cat. Let's pet it" type stuff. So I'm not being critical of folks doing that, because I understand why they're doing that... But hopefully they'll understand that they definitely had imperfect information, and not even close to a complete story. And it's not their job to understand all of that, but at some point hopefully they go "Oh, there's a lot more to this than we might have realized." We're not saying we're right, or wrong. I'm not doing that at all. I'm just saying it's worth a dialogue and there's a lot more pieces to the pie that folks might not know.

**Adam Stacoviak:** \[01:24:14.00\] And to the credit, I think, of the potential pitchfork folks, or the folks in the crowd, not in the arena, is that it seems to be almost a - not literally a daily occurrence, but pretty frequently these days, something happening around a license change or a rug pull. It's so much that it's become a thing we've said here, "Rug pull not cool." That is our phrase. "Rug pull, not cool" is totally not cool. And that's an additional one, Jerod. We could put that one on a T-shirt. I think they're used to, and we're used to hearing this, and you think immediately negativity. You immediately think "This is nefarious. There's something going on here." And so it's almost as if there's a level of PTSD in the community. And I think as purveyors of and participants of, enthusiasts of open source software, they have a right to that, in a way.

**Derek Collison:** Sure.

**Adam Stacoviak:** But also, there's so much nuance here that they have to let some of the details percolate. And it's not always clear. So...

**Derek Collison:** And you're right.

**Adam Stacoviak:** Which is why we do this podcast. This is why we have you on this show. Like I said, this is years in the making, because we were going to have you on the podcast anyways... We've been talking on LinkedIn about getting you on the pod... And then this happened. I'm like "Well, Derek, can you talk? Are you able to pod?" I mean, I don't know if you can even pod. And you're like "Yeah, I'm cool." And so we had you on the pod. And that's why we do this, is so we give that clarity.

**Derek Collison:** Yeah. And I knew the rug pull stuff, I've been listening, and I know Joran was talking about it, and others have been talking about it... And so I'm totally aware. And what my hope is is that while we're focusing on license change and rug pulls, that we up-level to have a dialogue of "Why is this happening? What are we as an ecosystem failing at, and what can we improve upon?"

I said earlier on in the podcast, charity is not a business model. Well, until you're a company that is self-sustainable, and you're not just running on VC dollars, that's still kind of a charity model. So in other words, right now, our customers are funding a lot of the development, but the VCs who have funded Synadia are funding a lot of the development that everyone feels entitled to for free, right? And so my hope, and my sincere hope is that we can up-level and have a dialogue about "Why do we think this is happening? And are there things that we could potentially improve from an ecosystem perspective, that could do that?" And again, I'm not a fan of this, but one might be "No, we don't want any projects that run critical infrastructure to be from just a bunch of folks, or a single company." I don't think that's right, but that could be one answer. Or "Hey, if you're a big, well-known Fortune 100 company and you're using something in critical production, give back." Kind of like your rug pull thing, mine is "No pay, not okay." \[laughs\]

**Jerod Santo:** Haah! I like that one, too.

**Derek Collison:** Because again, production side is never zero. Someone has to put in time and money to produce this... But on the consumption side we're getting to everyone expects it to be for free. And that eventually has to be resolved somehow. Now, for projects like Kubernetes this resolved, because the Googles and Microsofts and Amazons of the world are motivated to put stuff in and they have other revenue streams that can offset the cost of participating in the software. That's totally fine. I'm not saying that that's wrong. I'm just wanting the dialogue of saying "Is that the only model that we really think will survive?" And I don't want a world that looks like that myself.

**Adam Stacoviak:** \[01:27:54.18\] Yeah. Well, good for you for sticking up, I suppose, for yourself, or trying some attempt and having this clarity... I know the narrative hasn't always been in your favor, but I appreciate you coming on the show, even if it gets you in some trouble. I sure hope it doesn't.

**Derek Collison:** Well, I'm sure it will, but... \[laughter\]

**Adam Stacoviak:** ...just coming on here and being clear... And honestly, I think - not that it's here at the end, but all along, anyone from the CNCF who represents sandboxing, incubation, graduation and the clarity there, and maybe some of the things we brought up here, which was the agreement you signed and the terms that you alluded to, and the lack of clarity there... I'm happy and we're happy to have anybody on this show. I think it's good for everyone to have some of that clarity. So if you want to have something on this show and talk about the details, what it takes to join the CNCF, what those are, we would be more than happy to have that conversation in detail.

**Derek Collison:** Yeah. And I think that's great. I really do. And like I said, my hope for all of this is that we can have an open dialogue about "Are there things that we can prove upon?" Outside of Synadia, outside of the CNCF, but just as a broader spectrum. And I think there's some interesting questions that should be discussed on "How we we want to go about that?" and what role the CNCF and the Linux Foundation plays, what role maintainers play... Because one of the other things that we got a lot of pushback from is I feel deeply that the lifeblood of a project is in the maintainers. It's - yes, people want to concentrate on license, what foundation are you part of, all of that other stuff. And I think they do play a role. But at the end of the day, it's the maintainers. And if all of a sudden the maintainers withdraw their support from a project, I think a lot of projects that have a tremendous amount of investment and are not just a simple weekend toy, if that makes sense... You know, saying "Oh, we'll just get some maintainers and they'll spend a weekend and then they'll know how to program, let's say, a NATS server." Right? I think that's maybe a little short-sighted.

We have someone who's awesome internally that just got promoted, and is now running the server team... They graciously took that from me so that I can do other things. That person came in and was under our tutelage, and specifically under my tutelage, and it still took them about eight months or so. So we were paying them, and we were tutoring them... And most of the server's infrastructure was built by myself and someone named Ivan, and we were tutoring this person. And it still took them about eight months, almost a year to become like "Oh, I can go anywhere in the server code and be effective, be productive."

And so when you get statements that "Oh, fork it. You guys go do your own thing and then we'll archive it, or try to find new maintainers" - again, I want folks to kind of really think through that and say "Is that the best outcome for the ecosystem?" I don't think it necessarily is, but someone from the CNCF might say "Yes, that's absolutely the way it's supposed to work." But what people are looking at to the CNCF around stability for projects, and longevity... You know, if the maintainers leave, there's going to be some level of disruption, for sure. It depends on the project, but it's not going to be zero. And in some cases, in our point of view - which people might disagree - NATS thrives when Synadia thrives. Because we're driving all of that stuff. At least that's my opinion. And again, not all projects look like that, and that's totally fine as well. But that's another one where I was like "That doesn't feel like it should be the only answer." That there could be a dialogue of "How do we better support these types of projects? What if they're not necessarily a good fit as a foundation evolves? What options are there for doing that?"

And again, I think prior to the dust-up, but also going forward - and again, we'll release a statement next week, probably about whenever the podcast goes out, around our commitment... You know, most people might not understand, of our total R&D budget, 70% is going into open source. And it's funded by the VCs who fund Synadia, and it's funded by our customers. And the ones that can pay, that aren't paying, that are like "Give me, give me, give me. I'm entitled to this. Hey, get off your ass and change this thing for me", which we see every once in a while in GitHub issues... That's kind of when I'm like "Maybe we need to figure out a way to have them change their perspectives a little bit." I'm not saying I don't want hobbyists to be able to use our stuff for free, or embed it all over the place. My original tagline for NATS was "Connect everything", meaning it had to run everywhere, and was openly accessible. But again, it's that production problem, which is non-zero. It's like "How do we solve that problem for different levels of projects and open source?"

**Adam Stacoviak:** For sure.

**Derek Collison:** And I don't have all the answers, obviously, as you can tell, but I do believe --

**Adam Stacoviak:** I mean, I think the important thing is you have a lot of thoughts, you have a lot of care. And I think that's the thing you have to really come back to, is you've got a lot of care for what you're building, what you've built, the community, the spirit of open source, your customers, your employees, your investors... I mean, there's so much things I'm sure that you're holding that we're not privy to that we can definitely see that you care. But it's cool having you on this show, talking about this stuff, and even more cool that you're a listener and you know --

**Derek Collison:** Oh, yeah. I love you guys.

**Adam Stacoviak:** ...rug pulls are not cool.

**Derek Collison:** I know. And no pay, not okay. \[laughs\]

**Adam Stacoviak:** That's right. No pay, not okay.

**Jerod Santo:** We're gonna have a T-shirt with one on the front, and then that on the back. That's right. A little balance.

**Adam Stacoviak:** That's right. Represent both sides. Get it together.

**Jerod Santo:** That's right.

**Adam Stacoviak:** Derek, thank you so much.

**Jerod Santo:** Thanks, Derek.

**Adam Stacoviak:** Nice to meet you.

**Derek Collison:** I appreciate it. Thank you guys, and congrats on all the success. Really, really cool to see.

**Adam Stacoviak:** Oh, man... Thanks, Derek.
