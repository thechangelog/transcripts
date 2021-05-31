**Angelica Hill:** Hello, and welcome to Go Time. In this episode we're gonna be talking about building for blockchain in Go, and we're joined by two of the co-founders of Prysmatic Labs, which is the company behind the upgrades to the Ethereum network. We have Raul Jordan and Preston van Loom, who will be talking about how they started the company, as well as what it's like to build technical infrastructure for the Ethereum blockchain using Go. Today, Prysmatic Labs maintains the most popular implementation of Ethereum proof of stake, running a network of over 15 billion dollars.

Let's introduce our wonderful guests. First of all, we have Raul Jordan, whose pronouns are he/him. Raul was born and raised in Honduras, and came to the U.S. for university to study computer science. He then dropped out of college after receiving the Thiel Fellowship. In 2017 he discovered Ethereum, which felt to him like taking a time machine to the year 3000, and he knew this was what he had to be working on.

A little fun fact about Raul - he speaks Cantonese and practices Chinese calligraphy in his spare time. We might have to talk more about that at the end of the episode; that's awesome. Welcome to the show, Raul. Great to have you.

**Raul Jordan:** Thank you so much. Great to be here.

**Angelica Hill:** \[00:04:10.24\] And then our second wonderful guest is Preston Van Loon; as I say, another co-founder of Prysmatic Labs. His pronouns are he/him. Preston is an impact-driven software engineer, a blockchain enthusiast and avid aviator; again, something I wanna chat more about. Like Raul, Preston also dropped out of university to start his journey of self-learning in computer science and software engineering.

Prior to forming Prysmatic Labs, Preston was working at Google, while moonlighting an obsession with Ethereum's protocol and scaling efforts. Preston left Google at the end of 2018 to work on Ethereum full-time, and hasn't looked back since. Lovely to have you, Preston. I'm very excited.

**Preston Van Loon:** Yeah, thanks for having me.

**Angelica Hill:** For those of you who don't know me, my name is Angelica Hill, and I will be hosting this episode, and I'm very excited, because this is a topic that I myself have not had a chance to really dive into, so I'm excited to learn a lot, along with all of you wonderful listeners and watchers.

So I'm gonna dive right in... For the newbies like myself, it would be great if we could just set the groundwork; what is blockchain, and what does it mean to build technical infrastructure for the blockchain? Raul?

**Raul Jordan:** Sure, I can take a stab at this one, of course.

**Angelica Hill:** Awesome.

**Raul Jordan:** At a high level, people describe blockchain as a distributed ledger technology. What this means to me is - imagine if you have thousands and thousands of computers around the world that basically have this shared database, and they're all synchronized with each other such that if anyone tries to lie about what's in the database, they're not part of the core consensus, and basically they're not treated as the canonical truth. What this allows you to do is it allows you to build a lot of very interesting, really cool applications, especially some that are what we call "censorship-resistant". This means that you would have to basically kill the majority of these computers running this network to try to censor things. It makes it especially interesting for places that have increased state surveillance, or places where people might have access to technology like this. So to me, I would describe a blockchain in simple terms as something of that sort.

And what does it mean to build technical infrastructure for the blockchain itself? Well, of course, the blockchain itself is basically just a collection of servers that are communicating with each other through the open internet. To build something like this, you essentially need to have knowledge of distributed systems, you need to work on database technology, P2P networking, and you also need to be able to deal with a highly adversarial environment. A blockchain is mean to survive all sorts of attacks and people trying to bring it down, and when you're building software for that, you need to be aware of how you can prevent against both malicious attacks and maybe unintentional attacks. So it's everything regarding building servers in a distributed systems adversarial environment. That's what we define as technical infrastructure for blockchain technology.

**Angelica Hill:** Awesome. And what is Ethereum? Where does that come in?

**Preston Van Loon:** Yeah, sure. So Ethereum is a blockchain, and really the key features of Ethereum is that it's not only a place that has its own currency, it has its own token or however you wanna say it; it's run in this distributed fashion all across the world on thousands or hundreds of thousands of machines... And like Raul was saying, it's a really different paradigm where in traditional computer science you have everything run in your control and you really understand it, and here we're in this totally different network. So Ethereum's key feature is that it's an application platform, so not only are we agreeing - all these anonymous actors are agreeing on the state of the distributed ledger, but they're also agreeing on the state of the world after executing pieces of arbitrary code. With that, you're able to deploy what we call these decentralized applications (dapps), which - you can't really do this in any other place where you have this truly trustless environment that you can build these types of applications.

**Raul Jordan:** \[00:08:03.21\] Yeah, I wanna add onto that. It's basically like this global, shared computer, kind of, that anyone can use. Instead of deploying code to some server on AWS, you can deploy code to this platform, and by nature, your code is pretty much unstoppable, decentralized; once you put it out there, it's hard to take it out, it's hard to stop it. There are a lot of different reasons why you might wanna do that, and there are a lot of reasons why you might not wanna do that. I think that we'll get into that a little bit more, but there are some use cases that are really great for this, and some use cases that might fit a traditional, centralized paradigm a little bit more.

**Angelica Hill:** So when you were starting to looking into blockchain and getting excited about cryptocurrency, this area, and thinking about moving into this space and creating Prysmatic Labs, why did you settle on Ethereum? Did you think about other avenues to investigate? I'm really interested in how did all your ideas, your interests come together and form what you have now?

**Raul Jordan:** Definitely. I think Preston and I consider ourselves pretty pragmatic engineers, so when we first started on this journey, we were just excited by this concept of having this global computation platform that anyone can use. It was like "Wow, it's so cool, the things that this can enable for the world." And of course, blockchain cryptocurrency has had quite a negative reputation on a lot of fronts, especially because there have been a lot of nefarious use cases for the technology. And you can say that about any sort of new technology.

Why we got excited about Ethereum is because Bitcoin was, of course, the first blockchain, the original blockchain, and it serves its use case as basically a store of value; basically, the predominant narrative is that Bitcoin is like this digital gold. But on Bitcoin, interestingly enough, you can't really run code, or run these decentralized applications that are Turing-complete. You can't write a custom piece of software that basically can do whatever you want. Ethereum is the first blockchain actually that allows for these decentralized applications, for basically decentralized computation of software; and to us, that was really cool.

Ethereum has the most network effect, has the most developers, the most people building on it; it's not controlled by a single company or a single person. People say it has a soul... It's basically community-owned, and that to us is really awesome. That's kind of like why we got into it.

**Preston Van Loon:** You know, Ethereum - one of the big motivators for us was the community, because we kind of discovered Ethereum independently. Raul and I had never met before, and we both were in the same phase in our life journey of figuring out what do we wanna do in our lives... And we discovered Ethereum, which has this incredible potential to have a high impact on global society, and really enable and empower lots of different groups of people.

When we said "Hey, we wanna get involved with the open source project that is Ethereum", we were met with basically open arms, and that was just -- personally, I had never experienced anything like that, just such an amazing community within the Ethereum ecosystem.

**Raul Jordan:** Yeah. And I guess before we go a little bit deeper, it would be great to talk -- you know, we've been chatting about what this can do for the world, how cool it is, what it can enable... Maybe we can chat a little bit more about what exactly Ethereum enables that gets us so excited.

From my perspective, Ethereum enables two major things; and these are not real words, but basically one of them is permissionlessness. Permissionlessness basically means that there are no gatekeepers; there's nobody telling you that "Oh, you cannot do this, because you're not allowed to." It's this global platform that you can use really for anything you wish... And an example may be access to financial services, so being able to take a collateralized loan is a luxury that a lot of people in the developing world might not even have access to or might not even be approved by their bank, or even by their country. So permissionlessness enables a very interesting set of tools that provides options to the world.

\[00:11:58.13\] The second thing that Ethereum enables - another made-up word is trustlessness. Trustlessness means you don't need to trust any intermediary, any third-party about basically interacting with this platform. There's no middleman, there's no company in control that can change that outcome for you and change the rules. We think these are very pivotal features of blockchain technology, and pivotal things that Ethereum enables for applications built on top of it.

**Angelica Hill:** Working in this space though - just to take the counter to that - have you encountered risks? Are there downsides? My gut reaction is "This sounds wonderful", but having no moderation, having no rules kind of makes me second-guess a little bit and go "Oh, what are the risks there?" So I'm interested to hear the flipside of that, and maybe a little bit about how you keep that top of mind to mitigate these kinds of risks.

**Preston Van Loon:** I think the amazing part about this technology is that while there are no rules, you really get your opportunity to define those rules. So you're able to develop what are called smart contracts, or these decentralized applications which - everyone can read them and understand what's going on, what are the constraints of this protocol that you've launched on Ethereum. And if you're talking about true decentralization, there are these concepts where you can have what's called a DAO (decentralized autonomous organization), which is a group of anonymous people that have voting rights in the protocol and are able to make the upgrades and change the rules.

With Ethereum, or really any blockchain, it's like a write-once-and-read-many-time kind of style database, and you're not able to remove or delete or change anything unless that's part of the code that you've written. And as a participant or user in your protocol, I can see that and I can base my risk assessment "Do I wanna be part of this application?" I can read the code and find out for myself.

**Raul Jordan:** Yeah, we can give an example maybe for the listeners of an application that is possible on Ethereum that would not really fly in the traditional world... Let's say that I'm trying to build a lottery startup. Okay, you give me money, and then every week I'm gonna decide a winner. Let's say that you're just a regular software engineer and you wanna build this. If you put up a website right now and you tell people to put in their credit card, and like "Trust me, I'm gonna decide the fair winner of the lottery every week" - would you trust that website? Probably not.

On Ethereum you can read the code and it's all public and verifiable on the blockchain of the application you're interacting with. So I can actually read the code of the lottery application and check that "Oh, okay, it actually is a decently fair lottery. I'm not gonna get rug-pulled by the creator of the contract."

**Preston Van Loon:** You're also gonna be able to see that there's actually a prize at the end. Some lotteries are like "Hey, buy into my raffle", and there's nothing there.

**Angelica Hill:** Yeah, you might never know if anyone won, because you put trust that someone must have...

**Raul Jordan:** Right. So that satisfies the trustlessness property that we so value in this platform.

**Angelica Hill:** I wanna now turn over to the fact that your project is entirely written in Go, hence why we're talking about this on Go Time. So I'm interested in how you decided to go with Go. Where did that come from? Was that a decision you took? Was it something that was community-based? I'd love to hear about the process there.

**Raul Jordan:** Preston, maybe do you wanna go over what our project is exactly maybe, and then we can answer that one?

**Preston Van Loon:** Yeah, I'll take the first part of that. So our project is basically we have written a client to the Ethereum blockchain; this is how you interact and participate in the system. Everyone interfaces with a client in some form or fashion if they're interacting with the blockchain. We have written it entirely in Go, we've really enjoyed that part of it, and the primary focus of building this kind of thing is we wanna help Ethereum scale... And what it does is it helps secure the network, it helps users interface with it, and in generally, it's the backbone of how to interact with the blockchain. Raul, if you wanna answer why did we go with Go, that'd be great.

**Raul Jordan:** \[00:16:02.19\] Sure, absolutely. To get a little bit more technical here... So Ethereum today - it's been running for many years actually, and the most popular implementation of Ethereum, the actual node software that Preston was talking about, is a project called Go Ethereum, which is written in Go. It's one of the most popular Go repositories on GitHub. Ethereum is actually upgrading its infrastructure and upgrading the way the protocol itself works, to be more scalable and secure... And to do this, basically, it's a pretty big rewrite of the whole protocol itself. Our implementation is a separate project, and it's called Prysm. We are basically revamping Ethereum, and we're doing it in Go.

Go has been proven to work for Ethereum. The concurrency support is critical for an application like this; a single blockchain node does so many things at once - it's dealing with incoming peer-to-peer connections, it's dealing with processing of very high intensity data, it's constantly under interaction from users from API requests... So there's a lot of things going on, and Go just provides a really simple framework for us to build something that is maintainable, is testable, and gives us the benefits of concurrency, which are critical in this sort of application.

**Angelica Hill:** And coming into this project, were you using Go previously? Was this your first interaction with Go? I'm interested to hear, was it also partly because you had experience with it and knew the kind of core benefits of Go as a language?

**Preston Van Loon:** I think for each of us on the team when we started had a different personal motivation for using Go. For myself, it was a learning opportunity. I had been at Google, and when I joined Google, that was one of the things I wanted to explore, was using the Go programming language; I thought \[unintelligible 00:17:37.27\] cool technology.

As things go when you get hired, you're not always using the language or technology you want. I was working in ads and working on Java, which I was not particularly excited about, but I wasn't gonna say no to Google... So just before my journey of Ethereum, I had been learning Go, and I took a course from someone called Bill Kennedy; I think he's been on this show a couple times...

**Angelica Hill:** Yeah.

**Preston Van Loon:** ...and it was like a two-day session of learning all the basics of Go, and it was like a $10 thing. I couldn't believe it... It was one of the things that set me off on my journey with Go, and Bill, if you're listening, thanks for that. I'm not sure if you remember, but... That had a big impact on why I chose Go and my journey there.

**Angelica Hill:** And when diving into development, was the use of Go what you expected? Were there any surprises, any pain points that came about after you had already committed to using Go?

**Raul Jordan:** Absolutely. I know that generics are probably gonna be the first thing that comes up...

**Angelica Hill:** I wasn't gonna bring it up, but you brought it up... \[laughter\]

**Raul Jordan:** We've had a lot of cases where we really pushed the limits of some of the things that Go does... In particular, there are a lot of interesting challenges when you deal with writing blockchain infrastructure in Go. I would say namely you have to really be prepared for upgradability and making sure that you use the right abstractions. An example is - there's this data structure that we call the state. It's basically this giant data structure that keeps track of a lot of things happening in the entire universe of the Ethereum blockchain. And the blockchain advances via a deterministic state transition, so this state is modified by an incoming structure called the block, and then you get a new state; so you get a post-state.

And the state needs to be upgradable. Say that tomorrow everyone agrees that "Hey, maybe in a year we should upgrade this data structure to be a little bit different." It's not as easy as in traditional software where we can just upgrade everyone. You just do a software upgrade. It's a distributed system, meaning that once it's out there in the world, once you have a rocket out in space, you can't just be like "Hey, let's change some of the parts." You need to make sure that there's a migration strategy, you need to make sure that it upgrades properly, and to do this, you need to have very good abstractions, leverage interfaces really well... You need to leverage and just like get around the lack of generics by finding a good balance of either code generation or also duplication of important logic.

\[00:20:06.11\] Something else that has been really important for us and something that's been an interesting usage of Go is that it's very easy for a big project like this for developers to shoot themselves in the foot, because there's so many moving parts... And if you don't set the right abstractions, somebody could get hurt. An example was that we had this database accessor previously where you could basically retrieve data from the database, and you could also write data to the database. It would be something like save state, get state. And we soon realized that having this interface that allows for state-writing is very dangerous, because new developers can just use this interface, like "Oh, let me use this interface... And it's fine if I write to the state", but it should not be fine.

So we've been really leveraging composable interfaces, making sure that we expose as little as possible to developers that might interact with the code in dangerous ways. We think it's been really interesting, and there's a lot more that we can get into that... Overall, our usage of Go has evolved to fit the security requirements of the application a lot more.

**Angelica Hill:** I'm kind of going off of that in the realm of security concerns. In terms of for your employees, for people who are contributing to the open source, are there guidelines you ask people to follow? How do you keep security top of mind when you're moving forward, when you're continuing to develop? I mean, this might just be me and my impression, but I feel like security in this realm is extremely important, but also an area that I'm sure you've got a lot of \[unintelligible 00:21:30.17\] I would love to hear more about that and how you keep that top of mind, as I say.

**Preston Van Loon:** Yeah, I think that with a lot of the changes that we see going in with Prysm is that they have to be reviewed with a high level of scrutiny. You're looking at specifically what is it doing in its context, but also how is this code path involved in the greater aspect of the system... There are many times where you're just using a piece of code with a certain set of assumptions, and if you're not really thinking about what could happen, or what are ways that this could potentially be misused, either intentionally or unintentionally, that you might let slip through things that could be undesirable. And that's either just a performance bottleneck maybe, or something that in an adversarial network like Ethereum, an attacker could take advantage of. It's something we always have to think about, and when we're looking at code review, code review is a huge part of our workflow. We always have to make sure that everything has been reviewed at least by one extra person. And when we have new contributors come on, there's an extra set of scrutiny with those types of changes.

**Raul Jordan:** Yeah. And Angelica, I think you also mentioned probably security concerns for the employees themselves.

**Angelica Hill:** Yeah.

**Raul Jordan:** That's also an interesting question. Of course, there's a lot of money at stake in the system, and basically, somebody could argue "Hey, what if somebody comes and threatens the developers to add a particular change that might be subtle, but could be very dangerous and risky." The benefit of a system like Ethereum is that the development is sufficiently decentralized such that single points of failure are not as prominent. So if there were one developer, one maintainer and one implementation that everyone used, then it could be very easy for that person to change the rules. But even if that developer went malicious and went rogue and tried to introduce some malicious code into the repo - of course, users are savvy, people are savvy; everyone has a choice of the software they want to run if that's the case, \[unintelligible 00:23:38.05\] consensus, which is basically fork the project and basically maintain it on its own.

Thankfully, we're not the only people writing the code for this major upgrade to Ethereum. There are three other implementations in production today, and they have very capable teams that are working on this alongside ourselves. So I'd say the responsibility is definitely spread a lot more than if it was just Preston and I, for example, pushing a button that could basically affect everyone.

**Preston Van Loon:** \[00:24:07.11\] We don't have any unilateral permissions, or something. \[unintelligible 00:24:09.23\] The things that we're mostly concerned about are "How can this code be compromised?" but we don't have any special access or anything like that, and that's just how the protocol was designed. You can't trust anybody, not even yourself or the team who produces it.

**Raul Jordan:** Yeah, exactly. One other thing I would like to add too is -- yeah, writing software for this is very tricky, especially compared to traditional software engineering that is probably hosted on your own servers, under control. The security profile is quite different. When you're writing a traditional server-based application that is typically maybe a company backend, you don't have to think -- say you have this Go file and you're like "What happens if an attacker makes it past line five, line six or line seven of this file?" Every line of code is basically a line of defense against the attacks. And when you write code like this, you cannot let anything slip. Anything. Especially, say, NullPointerExceptions, panics, anything of that sort can absolutely be devastating, because no only can it be exploited by accident, maybe it just happens in the code path by accident, but it could be exploited by a malicious attacker for no cost.

One of the things that we think about a lot is "What is the trade-off? Is this a cheap attack to execute if somebody could exploit this? If not, then should we worry about it as much?"

There are a lot of mental models that you can use, but it is quite scary, and you do indeed have a particular defensive programming mindset for even the smallest lines of code committed to the repo.

**Break:** \[00:25:47.23\]

**Angelica Hill:** So in terms of someone coming to this project new, how do you teach them that defensive mindset? What are the things that you would encourage people who maybe are more new to this space, but wanna get involved, to keep in mind? I.e. how do you change your software engineering mindset when writing code for a project such as yours?

**Preston Van Loon:** It's a great question. It's really about threat modeling and understanding what the code is intended to do, but thinking about ways that it may be misused. Some of the common pitfalls are overflowing of values... Like, if you're exceeding -- in Ethereum we deal with some very large numbers, where you might easily exceed a 64-bit number. Or maybe you're using some floating point number as well \[unintelligible 00:27:37.21\] and when you're talking about a blockchain network where everyone has to agree on everything all the time, it's extremely important that you got it right in every implementation and it behaves exactly the same.

\[00:27:52.18\] It's a lot of the things that security engineers think about when they're looking at any kind of system, but especially the risks or the consequences are higher, I feel like, in blockchain, especially because it's so difficult to fix something once you've discovered it and it's already out there. It's kind of a race between you, the attacker (if there is one), if it's exploitable, and then asking thousands of anonymous people that you don't know how to contact to "Please update your software" and at the same time telling the attacker "Look at this. Here's a big bug that's exploitable right now." It's a really weird space to have to think about that \[unintelligible 00:28:33.29\] Even some of the most innocent code, we're still trying to think what could happen with this.

**Raul Jordan:** Yeah, it definitely depends, because there are definitely different tiers of changes. We recommend contributors of course to always try to find what are tagged as good first issues, or initial places to help... A lot of those, of course, if something goes wrong, it's not gonna kill the system. There are different tiers of threats. One of the worst things that could happen is what we call a chain split. A chain split is there's a consensus failure, meaning that you have thousands of nodes in the world, and 50% of the nodes have a bug that makes them disagree with the rest, or something; and then nobody agrees on anything, and then how do you fix that? You need to have some sort of social consensus on what is a canonical chain.

That's our worst nightmare, having a chain split, because that reduces the legitimacy of a network a lot, and it can cause a lot of harm in the short-term while it's maybe being resolved. So a lot of those things can happen because, like we said, Ethereum is a protocol, so there's a specification, and the specification, basically - like any specification, it's a blueprint; you're free to implement it however you wish, as long as you meet the criteria.

For example, when our node - which is written in Go - is interacting with another implementation which is written in Rust, and there's a small disagreement in a state transition function that causes a different result, then you can have a chain split. Those types of changes, of course, require extreme scrutiny. Anything that touches that part of the code. But a lot of other things that are more like implementation-specific, things like that, I'd say the threat model is different.

**Angelica Hill:** I'd love to hear what happens when things go wrong. Have you had instances where things have just blown up and it's been critical? I'd love to hear -- it's great that you've put all these things in place to prevent stuff happening, but inevitably, as with all systems, things go wrong. So what happens when things go wrong?

**Preston Van Loon:** Raul, do you wanna answer that one?

**Raul Jordan:** Sure. So we've had two incidents, actually. One of them was in a testnet. So a testnet is basically a large-scale test of the real thing, with fake money. So people are running it across the world, the same way they would run the real thing, but if something goes wrong, it's fine. It's a place where things should break and we should test things out.

So we've had a really serious incident in the testnet where we learned about the perils of how to deal with community engagement in times of problems. So what happened was we had a very innocent assumption that ended up being a really terrible assumption in our code. Ethereum -- our software, in particular, is a synchronous protocol, meaning that time plays a very big role in this. Basically, ever 12 seconds there's somebody in the world that needs to produce the next block in the chain. So basically, everyone has to have a pretty good sense of computer time for the system to work properly.

We had the assumption that "Hey, if people's clocks are out of sync, maybe we can help them adjust it using something like a Cloudflare NTP server." By doing this, actually, Cloudflare had a bug in which they were reporting that the correct time was around six hours in the future. So everyone's clocks that were running our software got their clocks completely out of whack. It was a huge mess. The issue actually ended up resolving itself, but here's what happened - we actually ended up making it a lot worse, because we told everyone "Hey, turn off your node" or "Upgrade your software." And then you have all these thousands of nodes turning off at the same time, trying to sync with each other, and you have this peer-to-peer network where you're basically like one good fish in a pool of sharks... And for every good node that is serving good data, you have 20 or 30 nodes that are serving you bad data.

\[00:32:13.14\] So it became almost impossible for any node to synchronize with the state of the chain. So we learned a lot of lessons there, really. It's about how you communicate, how you fix something like this. Like we said, it's like trying to do a product recall for something physical, where it's already out there in the world and you can't really bring it back to your factory. So that was a really interesting learning experience, and that really helped us analyze all the assumptions that you make when writing software like this. There cannot be any single points of failure; you need to communicate everything carefully, you need to tell people to not panic. That was a very memorable event, that taught us a lot about distributed systems.

**Preston Van Loon:** Yeah, that one was a very interesting issue to elaborate on the exact causes. We had this Cloudflare service called Roughtime, where it would take -- there was a set of actors that would report what time it is, and then the code would take the average of that, and one of the reporters was off by 24 hours. That resulted in the client thinking that "Okay, my time is off by four hours", so it started acting like things were four hours in the future... And then yeah, like Raul said, we said "Alright, everybody update now", but when these clients are talking to each other, when you're talking to a client that is still syncing, it's not helping you propagate good messages; it's sort of just still holding on to them, because it's not sure whether or not those are good or not... And yeah, we really learned to take your time with these kind of things; don't make the problem worse. We definitely made it worse that time... And this came in handy when we had a real issue in the main network where there was actual money at stake.

We had this issue where basically all of the Prysm clients \[unintelligible 00:33:50.07\] was agreeing with data without actually verifying some portion of it, and there was a second bug that was producing some invalid data... So one bug was made drastically big by a second bug, and these two things together made this really weird situation where Prysm would fail to produce blocks, because it couldn't execute this transition, over several hours. It happened twice in one day. We were able to really sit down and take our experiences from all the practice we've had, and I think it took us 30 hours consistently working on it before we were able to produce a release... But we were really glad that we were able to have that experience of going through this type of situation where there's not real money at stake, and kind of thinking about "What do you do when things didn't go right in a blockchain?" Because it's a completely different paradigm of "Alright, I'll push this button, the service will update in 30 minutes and everyone will be on the same piece of code." It's not like that. You have to consider how are things gonna work when you have mixed versions and you can't contact everybody, and everyone's on different timezones, and some people aren't even paying attention... So yeah, it's really interesting.

**Raul Jordan:** Yeah. And to quantify just the value of this... So to participate in consensus -- the consensus means that you are running a node that is able to produce data for the blockchain that can then basically advance the state of the chain. To do this, you have to put what we call a stake; you have to stake a significant amount of capital in the form of a token called ETH, which is the native currency of the Ethereum blockchain. So you have to stake 32 Ether, which if I recall correctly, maybe last week or something, it went up to a crazy high amount; something like $110,000 or more.

To give an idea how much money is at stake in the network, somewhere around 15 to 19 billion dollars. Something like an unimaginable number. And the incident exposed that Prysm runs around 74% or 75% -- sorry, it's over two thirds, but somewhere around that, of the whole network. So there's a lot at stake, a lot of people are depending on software like this... So we had to take our time.

**Angelica Hill:** \[00:36:09.16\] I'm interested in how do you test your code? What is the process of testing? Is that regression testing, do you have unit tests? How do you ensure before you push into actual production, into the real world, that this code is good to go?

**Preston Van Loon:** We have many layers of testing. The first obvious one is the unit testing, keeping things tested in a small isolation. We have fuzz testing, we have what are called spec tests, which are basically conformance tests that are produced by the reference -- we have like a reference implementation, and all of the different client implementers can download these tests. So basically, it says "With these inputs you should expect this output." We run all of those. We run full end-to-end testing, and most of these things are done in a code pre-submit. So actually, if you're proposing a change, we'll run the change to a simulation for about ten minutes, and basically it's a smoke test to see "Does the world continue with your change, or does it blow up?" That's a great way to stop really easy bugs that way.

And then we have a pretty long process of pre-production soak. So with our software, we put it out into the test network, where there's no real money at stake, but there is an environment that's very close to the simulation of the real world. We'll run it there for some medium-term amount of time, and be able to check "Okay, is there performance regressions or new logs that are appearing or anything kind of weird that would be concerning for this kind of release?" and we call that the pre-production soak. And we also do canary testing on top of that.

**Angelica Hill:** So in terms of thinking about like the state of your project currently, and where you hope it'll go in the future, I'd love to hear a little bit about what is the vision - in the world of Ethereum, as well as your specific project. What's next, what are you excited about, what are you thinking about at the moment?

**Raul Jordan:** Sure. Our company is fairly unorthodox, I would say. We started this because we really saw the promise of Ethereum. And the way -- we didn't talk about this, but the way that we are funded is we are funded through a generous pool of grants and donations, particularly from organizations such as the Ethereum Foundation, which is a non-profit that kind of started the Ethereum project, and now has been taking a step back given the increasing decentralization of the project. They have a lot less influence. But the Ethereum Foundation is always basically helping with funding, with support, with research, with anything that's needed to help push the envelope.

Of course, grants are not sustainable revenue for a company, so one of the things that we're very much excited about is we want to fulfill the promise of upgrading Ethereum to a scalable and more secure version. Beyond that, we want to basically produce tools and services that will further add value to people participating in Ethereum. These are still kind of in the pipeline and we're still working through them, but yeah, we're excited to unveil some of these.

**Angelica Hill:** I know this project came out of your interests, you both were excited, you came together serendipitously, through the community... I mean, is this now the space that you want to live your software engineering future in? Is this your forever project? Or are there areas, whether within this kind of broader blockchain world that you want to look into as a side project? I'm just interested in -- twofold. One, individually, are you able to do side-projects? This seems like a very kind of time-intensive project to maintain, especially given, as you said, the very careful review process, testing process for any changes... But just in this space, are you able to interact in various different areas, or is it really one where you have to choose "Ethereum is the one I'm gonna go down. I can't really think about the other ones", other than maybe reading about them or being interested in them.

**Preston Van Loon:** \[00:40:07.01\] I think that Ethereum has a lot of really unique computer science challenges. It's a very different world from web application development, or really a lot of the more common software engineering rules. That's kind of what attracted me to it originally. I feel like that even though we do spend a lot of time working on Prysm and the scaling effort, this is very important to us and for the Ethereum community, to help make Ethereum a thing, and be a global asset, or something that everyone can use.

I do find value still in continuing your self-learning, so that may be experimenting at the application layer. That helps you understand who are our users.

Our users for Prysm are sometimes application developers, or people running the software, the operators, so it's always helpful to get in there, see what pain points they're having, and that might help you come up with an idea that we can incorporate into the project.

There are a lot of different blockchains out there that kind of have a similar goal, and using a lot of similar strategies, so I do find it helpful to occasionally look into those projects and understand what trade-offs did they make to come to the conclusions that we're all trying to get to. It's definitely valuable to do that from time to time.

**Raul Jordan:** Yeah. And you know, we're all full-time at Prysmatic Labs. We have nine members on our team, and we're looking to keep expanding our team. Like Preston said, there's so many really cool challenges, and I'd really urge listeners to kind of dig deeper into this.

Some really cool innovations happening in cryptography, for example. The way that Ethereum and the blockchain that we're building is able to work is thanks to some really novel innovations in cryptography... In particular, we want to make this blockchain as decentralized as possible, meaning that a lot of people can participate, anyone can run it on a computer across the world. And to do this, you need to make sure that basically cryptographic signature verification can be done at a massive scale. This means that when somebody broadcasts a message on the blockchain, it can be verified, it can be done efficiently. Ethereum uses this really cool technology.

Our project is called BLS cryptography, and it basically allows for aggregation and mass verification of cryptographic signatures in really efficient ways. That's just one example... There's some really interesting things happening around game theory, like how do you create incentives in this decentralized environment - adversarial thinking, security engineering, P2P networking. Basically, you have all these pseudo-orthogonal fields colliding and coming into this one place.

So I think that if Prysm keeps evolving, if our project keeps evolving over many, many years and \[unintelligible 00:42:49.03\] Basically, Ethereum needs to ossify, it needs to basically finish its upgrades, be done, and be settled. We're excited to finish that, and basically our software will then move into maintenance mode, where you're just maintaining/improving things, but there are no massive upgrades to the system.

For Ethereum to work, it needs to be stable, it needs to be predictable, and we're working towards that over the next two years.

**Angelica Hill:** And in terms of in general in the blockchain space, is it a competitive market, i.e. is it like Ethereum versus the others? Or is it kind of the innovations that you are making can be taken and applied in other ways, obviously, in other areas? I'm interested in is it just like "We wanna make Ethereum THE one"? Or is it that they can co-exist?

**Preston Van Loon:** That's a question that a lot of people are debating right now. Me personally, I think that Ethereum is pretty well positioned to continue to be a dominant player in this space where there's a potential for multiple implementations or protocols that do decentralized application platform.

\[00:43:58.02\] I wouldn't say that there's room for just one. In the crypto space we call it maximalism, where it's like "Only my thing, and nothing else" kind of deal. A lot of people who are building on Ethereum or next to Ethereum - we're more like building bridges and helping bring these different types of technologies together, because they each make different trade-offs, they each are trying to solve problems in a specific niche of a certain market sometimes... And it doesn't have to be just a single platform, it could be multiple. Some of them are privacy-focused, some of them are speed-focused, and other things... But Ethereum I think is definitely the most well-positioned for it.

**Raul Jordan:** Yeah, the network effects are very strong, and that's very important. You can create a blockchain today, or maybe forking a popular one, but if you don't have any users, you don't have anyone to transact with. Why would I use it?

It's the same conundrum that messenger apps have. What's the point of creating a messenger app when you're the only user, right? So a lot of projects are trying to grow by either trying to spend a lot of money to gain a larger user base, either by sponsoring people to build on their blockchain, trying to do all these different things... A lot of the competition seems to be around -- a lot of metrics are like transactions per second, like "Oh, look, our blockchain can do one million transactions more than Ethereum can per second. It's so cool. Come to us!" But the reality is that Ethereum, even though it's been going on for quite a few years, it is quite limited as it stands today in terms of transactions, but it has a pretty big network effect. A lot of people are using it, a lot of people are depending on it, applications are built on it, so whether the network effects will hold or not, or people will migrate to another one... If there's a better technology and people like it, then that's great. We really believe in it because we think that it offers the best compromise towards decentralization, security, and also scalability. And it also has a community that is very grassroots, very homegrown. People are using it because they think it's really cool. People aren't paid to build on it, and I think that's really special.

**Angelica Hill:** So is that how you grew when you were launching your project? You kind of already had an existing community to build upon? How did you grow the usage of your project?

**Raul Jordan:** Good question. Our project is fairly unique in that regard. We're not an application, we are basically an implementation of what's called the Ethereum 2.0 specification. Essentially, the whole community has been excited for Ethereum to upgrade. There are a lot of things that are in the pipeline, such as improvements to security and scalability, and we were one of the first few people to start working on these upgrades. And since people are very familiar with go-ethereum, written in Go, they're also pretty easy to onboard into using our software, which is also written in Go. It shares a lot of tooling and a lot of similar functionality. Thankfully, a lot of people gave us a chance and started testing our software early on.

**Break:** \[00:46:50.03\]

**Angelica Hill:** I'm very excited, this sounds all very, very cool... But as I say, as someone who's very new to this space, what are the things that I would need to do to bring me from my current newbieism to being a contributor to your project? How do I become a contributor?

**Preston Van Loon:** \[00:48:03.26\] So the Prysm project is fully open source on GitHub. We try to do all of our stuff in a transparent manner, so that's either posting updates, talking in public channels, we have a Discord community of about 10,000 people... So there's a pretty big community there already; if you're looking to come with basic questions, that's a great place to get answers. But really, checking out the project, running the code, trying it in a test network, and really just -- if you look at it and you're like "Oh, this doesn't make sense to me. Why is it this way?", that kind of feedback has been extremely valuable to us. As a contributor, you can say "Alright, well this has some friction, and I have an idea to fix it" and you can propose that change, and most of the time, almost every time, we'll take that and say "You know, this is a great perspective and feedback" and help get that merged into the project.

**Raul Jordan:** Yeah. I would say for people wanting to just kind of learn more and get involved, I would recommend the Ethereum website. Ethereum.org is a really great resource. It's like this open source resource that has all sorts of very amazing information about what Ethereum is, what are the things that it enables, what are the things that you can build on it, and what's happening to Ethereum in the next year or two. And what's happening is there's this massive upgrade called Ethereum 2.0, which we're working on.

So once you get into that and you read more and you learn more about what's coming, you might want to try running a node, like Preston said. Running a node in the testnet is a really great way. We have a documentation portal, there's a lot of stuff written about how to set up a node... And you can try even building it from source and trying to do it yourself; that's really cool, because then you can start asking questions, like Preston said... Like, "Oh, why does it do this? Why does it use so much memory, and RAM? What's going on?" and you start digging deeper and asking questions.

A lot of our team actually has joined us organically, because we have this Discord community, this Discord server where we talk to all of our user base... And some people come in and are trying to run a node, they're like "Hey, why is this this way?" and eventually, a lot of those people ended up joining our team full-time. I think that was really cool. It's really an open field for the curious mind, and all that is available, and there's very helpful people willing to just answer your questions.

**Angelica Hill:** So in terms of coming to the project with a software engineering background, but very typical, no-security background, no cryptography... All of that, that's kind of it is accessible, or would you recommend that \[unintelligible 00:50:43.22\] you go and kind of learn a bit, read a bit, get up to scrap on that before diving into an open source project such as yours? Or is it truly through the documentation that you've mentioned that is truly kind of something you can kind of self-starter?

**Preston Van Loon:** You could look at the specification documentation, get a rough understanding... I think that a lot of people -- there is a bit of a learning curve because of the volume of information that you have to understand before you can make meaningful, large contributions to such a project, especially if you're coming from a traditional computer science, software engineering background and then trying to do something in blockchain - it's really interesting in that way, but it is a lot of information to learn before.

**Angelica Hill:** Be prepared to have that steep learning curve.

**Preston Van Loon:** Yeah, it's like an uphill climb, but then a downhill ride. Once you figure it out, you're like "Wow, this is really fun" and you're just cruising along.

**Angelica Hill:** Raul, were you gonna add something?

**Raul Jordan:** Oh yeah, that's such a fun part... As you're learning, as you're asking questions, you really get a feel for what this involves. And yeah, contributions can range from really anything, from small improvements to structure, or readability, all the way to non-trivial features. We'd be more than willing to help contributors on that front. I think that's something that has helped us out a lot. Actually, some non-trivial features have been written by contributors that are in production today, running a lot of money at stake in the network.

**Angelica Hill:** \[00:52:14.00\] So the conclusion is that you can do it. Just persevere on the upward climb...

**Raul Jordan:** Anyone can do it, yeah. The work that we do, we call it core development. Core development is kind of like the core protocol, the underlying foundations of how this stuff works. It's like kind of working on the operating system of your computer.

We have the perspective that anyone can be a core developer... Seriously, anyone. All it takes is asking questions, and there's never been a better time. People are willing to help and answer questions and guide you. So yeah, it can be intimidating, but it was also intimidating for us when we looked at some of this stuff a few years ago.

**Angelica Hill:** For sure. Well, I think the takeaway is that this is so cool, and super-interesting, and you can do it. I'm now gonna switch gears, and we are going to jump into our Unpopular Opinions section, which is a staple of our wonderful Go Time podcast.

**Jingle:** \[00:53:06.22\] to \[00:53:22.16\]

**Angelica Hill:** As I've mentioned, your unpopular opinion can be about anything. It does not need to be about blockchain, or software engineering. It can be about food... We had someone say they didn't like chocolate a few weeks ago, which was quite controversial...

**Raul Jordan:** Oh, man...

**Angelica Hill:** So I'm gonna pass it over to you, Preston, first. What is your unpopular opinion?

**Preston Van Loon:** So this is an unpopular opinion that Raul and I actually share... We really dislike food with bones. So like chicken wings, or like --

**Raul Jordan:** Especially pizza.

**Preston Van Loon:** Pizza with bones is just ridiculous... \[laughter\] But really, if it has bones, I just wish I didn't see that. I know that meat, and stuff, the animals have bones, but I don't wanna know about it. It's just kind of like a weird mental thing.

**Angelica Hill:** I'm gonna hope you were joking about the pizza with bones. Do people actually put chicken wings on pizzas? I'm a vegetarian, I don't touch meat, so this is a new phenomenon to me...

**Raul Jordan:** You'd be surprised... \[laughter\]

**Angelica Hill:** I'm feeling like I've made the right decision to stay away from the chicken wing pizza...

**Preston Van Loon:** Yeah, no bones in the pizza. I guess that's the popular opinion, but in general, \[unintelligible 00:54:34.23\]

**Angelica Hill:** I feel like that is an unpopular opinion. I'm sure there are many people who love things like ribs, off the bone; many, many of my friends love that. So we'll see how that trends. Raul, what is your unpopular opinion?

**Raul Jordan:** Mine is - I'd say most modern video game music is much better than popular music.

**Angelica Hill:** Okay...

**Raul Jordan:** So that's my unpopular opinion. There's some really amazing--

**Angelica Hill:** Video game music is better than pop music.

**Raul Jordan:** Yes, that's correct.

**Angelica Hill:** Wait - pop music specifically, as a genre? Or like mainstream music in general.

**Raul Jordan:** I would say mainstream, modern, popular music.

**Angelica Hill:** Well, why is that? Do you just play an inordinate amount of video games?

**Raul Jordan:** \[laughs\] Good question. I think there's a lot of thought put into the emotion, the environment, the ambiance of -- you know, it's just putting you in the zone. A lot of this music does a really great job at it.

**Angelica Hill:** I don't know whether you've seen Mortal Kombat, the movie... I was obsessed with it, and that soundtrack was amazing. Having not played Mortal Kombat previously, I then had to play it.

**Raul Jordan:** Yeah, see? \[unintelligible 00:56:02.00\]

**Angelica Hill:** \[00:56:03.19\] It definitely, definitely did. I'm not sure whether that will be an unpopular opinion or not. We'll see. Do you listen to popular music?

**Raul Jordan:** Yeah, a decent amount, I think...

**Angelica Hill:** A decent amount. Okay.

**Raul Jordan:** But I just think that video game music can be more deliberate about making you feel things...

**Angelica Hill:** Okay.

**Raul Jordan:** ...than what we hear mostly on the radio. So that's my unpopular opinion.

**Angelica Hill:** Fair enough. Would you agree, Preston? Do you share that one also, as well as the boneless meat or foods opinion?

**Preston Van Loon:** Yeah, I think so. There's a little bit more thought into this video game music. Like Raul said, it's trying to convey a certain environment. And I guess especially when you're trying to focus on something, this kind of music can help you, or get you hyped up, or I don't know... Yeah, I think I agree with that one.

**Angelica Hill:** Awesome. I think those are both -- I'm intrigued to see whether those are truly unpopular opinions or not. I feel like some of the opinions we've had have been kind of not quite as unpopular as I thought they would be... So we'll see.

It's been absolutely a pleasure... Before we wrap up, I'd love to hear -- is there anything else that you'd like to kind of let our listeners know about your project, how to get involved, any kind of things to look out for? Are there any big updates that we should be keeping an eye out for in the Go community?

**Raul Jordan:** Indeed. So as it stands today, Ethereum actually runs on what we call proof of work. People have probably hear about cryptocurrency mining - bad for the environment, killing trees, all sorts of things. Basically, the way that Ethereum and Bitcoin work today is they require people around the world to basically run these machines that are specialized computation circuits that use an extreme amount of electricity to basically solve this brute force math problem, and participate in the consensus of the blockchain.

The paradigm is that you're putting in a lot of real-world electrical power into this system such that it becomes almost impossible that anyone can collectively try to revert that. You cannot revert the Bitcoin or the Ethereum blockchain without having more electrical power than all these people combined that put their effort into it.

So Ethereum is actually migrating to what we call proof of stake; so instead of expanding a lot of electricity, what you're doing is that you're instead locking up a lot of Ether, you're locking up a lot of this cryptocurrency called ETH, and to participate in consensus, you need to put that up for stake. If you do anything malicious, you can start losing that stake. It changes the paradigm. You don't need this crazy computational thing; it's just basically anyone can run it on a home server. You can run it on a consumer laptop.

\[00:58:49.14\] Since Ethereum was already proof of work, the transition into proof of stake is very solid, because we can leverage all the security that Ethereum has already over the years into this new paradigm. So we are one of the teams that's building proof of stake for Ethereum. Ethereum proof of work - the mining, basically - is planned to go away in less than a year, so basically no more shortage of GPUs on the market. You'll be seeing a lot of really cool stuff happening, estimated I believe to be like 99.98% more computationally effective, and better for the environment. That's something that we're excited about, and just keep an eye out on that.

**Angelica Hill:** That is very exciting. As someone who bluntly is very, very angry about that, and I do not have any cryptocurrency for that reason...

**Raul Jordan:** Yeah.

**Angelica Hill:** I mean, is that something that's in theory, in terms of that percentage, or is that a ballpark figure that can be -- like, I can hold you accountable to it?

**Raul Jordan:** No, it's legit.

**Angelica Hill:** That's awesome.

**Raul Jordan:** You can run it on your computer. That's what we're working on. So yeah, we're working on getting rid of that, and getting rid of mining. We share your sentiment.

**Angelica Hill:** That's awesome. And do you think that's gonna be the direction that other projects take? I mean, external to Ethereum. Is that kind of a move that you are seeing across the industry in this space? Obviously, given the recent comments by very prominent figures, i.e. Elon Musk... Even before that, that was top of mind. I know for many people in the community this is just terrible for the environment. So are you getting that sense that in general in this space people are gonna try and do a similar kind of move?

**Preston Van Loon:** It definitely feels like less projects are launching with proof of work and more are using proof of stake or other similar resistance mechanisms. That's definitely a concern for a lot of people, and I personally believe that if a project does not switch to something more efficient, then it won't survive long-term.

**Raul Jordan:** Yeah. I think it'll be really hard for Bitcoin to switch over. Bitcoin prides itself on kind of being unchangeable, immovable. It's unlikely that they will adopt something as radical as this. They have a very strong perspective that proof of work is the only way to go, for example. We don't share that mindset.

The one mindset that I do share though is that I think it is risky to launch a proof of stake network from scratch. So proof of stake, by virtue of its name, you are staking something; you're putting something up at risk, that has value, that you don't wanna lose, in order to secure the blockchain. If you launch a project with proof of stake - where does the value come from? You're staking something that doesn't have any value, and you're telling me that it's gonna go securely?

So I'm a lot more skeptical of projects that launch pure proof of stake. I think it can be very dangerous. But like I said, Ethereum is already proof of work for a long time, it already has this massive security pool, and migrating to proof of stake makes sense for Ethereum. So I think there's a trade-off. But yeah, we're working on that...

**Angelica Hill:** That's awesome. I'm very excited to see that as it progresses. Well, as I say, thank you so much for joining me today. It's been so interesting. And get ready for me to be pinging you in Gophers Slack with many questions as I try and dive in.

**Raul Jordan:** Of course.

**Angelica Hill:** It's been truly a pleasure, so thank you so, so much.

**Preston Van Loon:** Yeah, thank you for having us.

**Raul Jordan:** Thank you so much.
