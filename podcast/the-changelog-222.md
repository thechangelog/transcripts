**Adam Stacoviak:** Welcome back everyone, this is the Changelog and I am your host, Adam Stacoviak. This is episode \#222, and today Jerod and I are talking to Gavin Wood about Cryptocurrency, Ethereum, and this big world of unregulated digital currency.

Gavin is the founder of Ethereum, the creator of the Solidity contract language and the founder of Ethcore, the company that created Parity, an open source Ethereum client.

We've got two sponsors today - Code School and Rollbar.

**Break:** \[00:00:37.26\]

**Adam Stacoviak:** Alright, we're here today -- Jerod, a fun show. Gavin Wood joining us today from Ethcore... Is that right?

**Gavin Wood:** Ethcore, that's right.

**Adam Stacoviak:** Ethcore. We've never had a conversation about cryptocurrency on this show yet, Jerod, so this is a deep subject. Where do we begin?

**Jerod Santo:** Well, I think we should begin by learning a little bit about Gavin. Gavin, first of all, thanks for joining us. Gavin, give us a little bit of your back story - tell us about who you are, where you're coming from, and we'll probably get some term definitions going first, just so we have a common vocabulary. But first of all, welcome to the show, and tell us a little bit about yourself.

**Gavin Wood:** Thanks for having me. So I've been coding since probably around the age of 7 or 8 - I can't remember exactly when - on an old 8-bit barely supported computer with no games, which kind of lead me to the necessity for actually coding.

I did school, I actually made a few games then, and I actually ended up publishing one of them in a magazine at the time, which was kind of nice. I got through university, and then I did a masters in computing and eventually a PhD, which was specialized in music visualization, an interesting subject in and of itself.

I spent a short stint in the games industry, working with a company called Frontier Developments, which some of the older listeners probably remember as Elite, one of the original 8-bit space trading game, which was pretty enjoyable. I left there to go and do some consulting work on and off. I worked for Microsoft Research for a while, doing some of their more advanced and API-driven projects, working on things like video synthesis and embedded them in specific languages. After a couple of startups I ended up getting to Ethereum. I met up with Vitalik back in late 2013, and we started coding the C++ implementation, which was kind of more or less operational about a month later, and is probably fairly stated as being the first working implementation, in that it's the first one that could actually send transactions between machines and allow you to run programs on the Ethereum virtual machine.

**Adam Stacoviak:** \[00:04:14.18\] You mentioned a name there, Vitalik - he's the inventor and co-creator of Ethereum, right?

**Gavin Wood:** That's exactly right, yeah.

**Adam Stacoviak:** Okay. So you met him where?

**Gavin Wood:** We actually first met in Miami, back for the Bitcoin conference then. We chatted a little in the previous December 2013, and finally met in Miami.

**Adam Stacoviak:** Are you guys proximity-wise close together, in terms of geographics?

**Gavin Wood:** We both moved around a lot during that time. We did spend a few months quite close to each other, sort of touring America, but by and large we're kind of both moving around, generally different places, occasionally bumping into each other.

**Jerod Santo:** Gavin, on your website you say that you're a free-trust technologist. Can you give us a little bit of what that means?

**Gavin Wood:** Yeah, I'll try my best. I've been asked this question numerous times... I think I generally give different answers each time, and I'm not sure any of them are particularly good. So when we say free-trust, really what we're talking about is this notion that there are machines and organizations and individuals with an elevated trust rating in the world. So when we interact with a bank or with the government, we sort of innately trust them. In the case of the government, we more or less have to trust them, because we're not given any choice, and the same is sort of true for many of the institutions. These guys form kind of nexuses, they form very particular points in the fabric of society, in that we can go to them for our \[unintelligible 00:06:00.15\] services, and we can't go to anybody else. It's not like I can do my banking with my best friend, who I actually do trust.

So when we're talking about trying to architect systems - like financial systems, to take a poignant example - we could architect these in the way that they've always been architected, sort of server/client, where the server is trusted and the client isn't - that's what we've done so far... Or we can architect them in what I would call a trust-free fashion, where there isn't really a trusted server, there isn't really a trusted organization. There's just peers, and peers verify what each other says by virtue of sort of knowing enough information that they actually can.

If you look at Bitcoin, the only reason Bitcoin really works is that all of the nodes on the network don't have to trust the other nodes, they only need to trust themselves. If they have to trust some other nodes, then they wouldn't really be trust-free.

**Jerod Santo:** I think that's a pretty good explanation. Speaking of nodes in the network and financial systems, let's dig a little bit into Ethereum, just at a top level, maybe explain some jargon... But I think what might be useful, for your sake Gavin, is to give a little bit of Adam and my background with regard to cryptocurrencies, Bitcoin, Ethereum, just so you know where we stand in terms of understanding. I'll just let you know that our audience is very technical - we're developers, we're hackers, some of us may be cryptocurrency day traders, but you also have those that are more like Adam and myself, casually following along, or perhaps not following along at all. But we all pretty much know what Bitcoin is, and understand how it works, maybe at a high level. Give us Ethereum, the elevator pitch in light of that level of background, and then we'll go on to clarify a few of the terms here next.

**Gavin Wood:** \[00:07:53.19\] Okay, so Ethereum is programmable money. Bitcoin is money, more or less, on the internet; "magic internet money", as it's sometimes called. Ethereum is programmable money. It's doing the same thing, it's still magic internet money, but this money can have particular software attached to it, particular conditions or particular logic. It can even storage attached to it, so the money can remember some sort of history, can remember what happened to itself, and it can do different things depending on that memory. So that's really what we're talking about with Ethereum.

Now, it could also be described as a decentralized application platform, it could be described as a smart contract platform, but at the end of the day, probably the thing that makes most sense to people is the notion that it's money that can have program software installed actually in it.

**Jerod Santo:** To lay out a few pieces of the puzzle here, we have Ethereum, the platform, which is a application platform, you have Ether - and you can just correct me at any point if I misstep here... Ether is the currency with stored value, and then you have Solidity, which I believe is the programming languages that you use to develop this programmable money. Then we have one aspect of the Ethereum atmosphere ecosystem called the DAO, which is often brought up, but not necessarily the same thing. Can you help me with those pieces and maybe explain them better than I can?

**Gavin Wood:** Sure. Ethereum is the whole deal - Ethereum is often used to mean the ecosystem, or the network, or the technology, and in some sense it's all three. Ether is very specifically the currency - it's this notion of this token that exists on a decentralized peer-based network, that people can own and pass between each other. The Ether is a special currency or special token in that it can be used to pay for computation services on the Ethereum network.

The Solidity is indeed one of the several languages that can be used to encode contracts, to program contracts. When we say contracts, what we're actually meaning is the software that is attached to Ether, that is attached to the money, to the currency.

I should also introduce another term called the EVM. The EVM is the Ethereum Virtual Machine; in a very similar way to the Java virtual machine in Java, this relates to Solidity in that it's the ultimate sort of backend architecture that the language gets compiled to.

Finally, the DAO. The DAO is a very particular bit of software that was placed on Ethereum. It's a set of contracts, and it's notably had a bug in it, which cost quite a lot of people quite a lot of stress.

**Jerod Santo:** Yes... Very good. That's helping clarify things, for me at least. Let's talk about it in light of Bitcoin. You said Bitcoin is this magical internet money, and Ethereum is this magical and programmable internet money. Why the need for Ethereum when Bitcoin existed? Could we not make Bitcoin programmable, or could we not layer on top of Bitcoin?

**Gavin Wood:** Yeah, I mean, other systems have attempted this. If you look at, for example, Omni (Mastercoin) or Counterparty - they've attempted to actually layer on top of Bitcoin, and it's difficult. Bitcoin really wasn't designed to be a base layer of ultimately multiple protocols, so it's trying to -- I think Vitalik actually coined the phrase, "It's like trying to implement HTTP over SNTP", it doesn't quite work.

\[00:12:02.10\] The alternative, which is to sort of try and build Bitcoin out into something much more like Ethereum I think is possible, but then you've got the issue of governance - who decides how the Bitcoin protocol should evolve at a time? And being an entirely decentralized peer-to-peer system, there is really no governance system in place to make that decision, and as such, what we've seen over the months and years is that Bitcoin actually is relatively stable, some might say, or stagnant, other might say.

Either way, significant changes are very difficult to make to Bitcoin, basically because you require everybody's acceptance before they can go in.

**Jerod Santo:** The reason why I first got interested in Ethereum was thanks to Fred Ehrsam, the CEO of Coinbase. Last spring he wrote a post which we'll link up in the show notes, called Ethereum Is The Forefront Of Digital Currency. In that article, he lays out that basically Bitcoin is hard to program, and Ethereum is built to be programmed, and that's the major difference. It's kind of like tacking something on later, or using it as one of your founding principles of design. You're always going to be able to do it better when you start from the very beginning. Is that a fair characterization?

**Gavin Wood:** Yes, I would say so. That's not to say that Ethereum is amazing in every respect, but rather that for this one particular feature Ethereum did very much have that built into the design.

**Jerod Santo:** So because of that, the languages, the Solidity and these other ways that you go about writing programs on Ethereum or for Ethereum are more like higher level languages, scripting languages, as opposed to perhaps lower-level C or Assembly - I don't know what you write Bitcoin applications in. Is that a good way of thinking about it? We have the scripting level of Ethereum, whereas Bitcoin is kind of like a lower level language...?

**Gavin Wood:** This is a little more interesting... Both Bitcoin and Ethereum have the notion of the scripting language. In fact, in the very early editions of the Ethereum whitepaper, what we now call the EVM (or the EVM opcodes) was called Ethoscript (ES). Now, I actually made the alteration to EVM, because I felt it very much recognized the fact that we were actually creating a virtual machine, rather than actually attempting to create a scripting language.

As such, I did not believe at the time that we were going to end up programming script as it were, using these opcodes or these scripting atoms, but rather that we were going to be creating higher level languages which would compile down to these opcodes. So the EVM opcode notions and terminology made a lot more sense than the Ethoscript ones; that's how it did play out, unsurprisingly, but I think it's unfair to characterize that the language isn't necessarily high-level as opposed to Bitcoin. I think in principle you could create a high-level language and have it compile down to the Bitcoin opcodes. Of course, it wouldn't be a great language because Bitcoin doesn't support things like looping, but in principle there could be some higher level language applied to it.

Similarly with Ethereum - the first language I created for programming contracts was LLL, the low-level language (Lisp-Like Language), which was indeed very low-level. You tended to code with opcodes themselves, but it allowed you to do so in a way that was a little more convenient.

**Jerod Santo:** \[00:16:01.08\] Right. So you said contracts there, and you mentioned smart contracts previously, and perhaps that's a term that we haven't quite explicitly stated how that fits into the equation. It sounds like smart contracts are kind of the end result of the programming that you do. Can you explain smart contracts and what that means?

**Gavin Wood:** Yeah. The smart contracts are something that Nick Szabo wrote somewhat about in the early '90s. It's basically the idea that you can have contracts which are written in English or whatever the language of the country is, and sort of execute it in terms of a court ultimately, and lawyers and judges. Or, you can have the same sort of concepts, the same sorts of agreements, but codify it in a machine-readable fashion, and ultimately execute it by computers.

What Ethereum does is it provides a platform for these smart contracts. It provides a means of codifying what we are normally seeing in proper legal context, and placing it into a computer program. Now, really when we talk about contracts on the Ethereum platform, we're actually just talking about very basic software. Any programmer would come to it and they would recognize it as being software. So it's not that they actually look like contracts, but rather it's more about the intent. These things are intended to govern the meaning of money and cash flows, so in that sense they're contractual agreements between parties. They're basically meant to be computer programs that govern the dynamics of value.

**Jerod Santo:** Computer programs that govern the dynamics of value, and as we'll find as we get deeper in this conversation, there seems to be a divide in the Ethereum community - and in the cryptocurrency community - over the idealist side of that, which is that the program has the final say, because that's what the agreement is, versus what you might call the pragmatic look at it, which is that the program is supposed to represent the agreement, but programs have defects and bugs as we've found out, so it's less black and white.

Before that, let's tee this up and we'll take our first break. So we have smart contracts, we can program them with this Solidity programming language (or set of languages) and run these things on the Ethereum Virtual Machine... But the question that comes to my mind, and I think the one that's interesting to our audience so much as developers is like, that sounds great and all, but what can I build? What does this open up? What are some applications that now I can create using this that I couldn't create previously? Don't answer that, Gavin, we'll take a break and you can answer it on the other side. We'll be right back.

**Break:** \[00:18:57.25\]

**Jerod Santo:** Alright, we are back with Gavin Wood, talking about cryptocurrencies in general and Ethereum in particular. Gavin, I teed up before the break that I'm interested in what are the kind of things that can be built on this platform, and maybe perhaps just as interesting, things that have been built or are being built. What are some use cases, where does this really fit in where we can take advantage of it as developers?

**Gavin Wood:** Yeah, it's an interesting question. The funny thing is that we're not creating a new language as it were, we're creating a new kind of computer. Up until now, computers have been very much physically localized, which means that anybody who sat near to that particular physical local space has in some sense an advantage over what the computer's going to do. We call this basically administration, or sysadmin, or dev ops, or whatever.

It seems like an obvious thing. It's like "Of course there's a computer, and of course there's gonna be someone who administers it, and of course there's gonna be someone who can ultimately pull the plug if they want to turn the computer off." But really with Ethereum what we've done is we've built a computer and that role doesn't exist. The computer cannot at least in principle be turned off, and there isn't anyone who is sat by it who can sort of log in as administration and start altering the database. In effect, we've built a computer that everybody can share almost as though there's sort of a Javascript environment that everybody is allowed to log into and step on each other's toes, except we've done so building with safeguards, to prevent people stepping on each other's toes, so that the object in this object environment are only allowed to call each other in very particular manners and with very particular safeguards attached.

When we think about applications, then we get to the thing of "Well, actually, what could I do if there were this Javascript environment that anybody could log into and could do so securely, with an authenticated user identity that we could count on?" Then we could start thinking about, "Well, what does the service currently offer that the Ethereum machine/computer could in principle do?" and one of them is obviously currencies. Central banks - and probably most consumer banks - will have a computer that retains the account balances of each identity that banks with them, each person or each organization. In principle, we can place this software on this willed computer. But because it's a willed computer and it's shared it means that we cannot just be fairly guaranteed it's gonna work okay because we can audit it, but also we can use these balances, this logic in other applications. So no longer do we need to start integrating with banks or central banks or payment systems, but we can use the currency directly because it turns out that the object - literally, the software object, the instance - that is listing everybody's account balances is in the same environment (literally, almost in the same computer program) as the software that's actually wanting to make a payment.

\[00:24:25.17\] And when you start considering, "Well, actually there's not limit to this...", the environment can be added to as required, and anybody can push logic and code to the environment, and be sure that the logic and code that they see is gonna continue working exactly as they expect, or at least as the code states, then we can start really thinking about how we can rewire society so that many of our systems that we currently have to have behind walled gardens, looked after by very influential and powerful organizations and people -- or we can start bringing this logic that ruins society (because it really does ruin society) actually into a shared space and sort of redemocratize it, if you like.

**Adam Stacoviak:** I have a question here on the building side of things, Jerod... Just using Coinbase (since we've mentioned them) as the example, when you say "How do you get Ether?" or "How do you buy Ether?", you know, their steps are pretty easy, it's 1-2-3. You sign up for Coinbase - we're not advertising for them, but this is how you get Ether, in this case, unless you mine it... So you sign up for Coinbase, you connect your bank account and you essentially exchange some currency that you have, which could be USD, it could be GBP or something else, and then you buy, and then you can sell Ether. At what point does a developer or someone who cared to build something on this - at what point do they get to program Ether?

**Gavin Wood:** So what the Coinbase and other exchanges (there are actually a few of them) do is they essentially perform a bridge between the current, legacy world of value, of money, and the sort of new crypto world of value. They allow you to buy and trade Ether for fiat currency, and they have a foot in both domains. Now, the developer, once he figures out what they want to do with this shared computer, the developer will probably take some Ether - because you need Ether to pay for computation on the shared computer - and start coding up what will effectively be the backend.

What we normally think of as being something that sits on a server, that has maybe a database attached, that provides services to multiple clients, that's basically the logic that's gonna be moved onto the Ethereum computer, the Ethereum blockchain. And at that point we start coding a contract, which is just a piece of software; it's almost like an object. If you're talking C++ programming, it'll be like a class; if you're talking Rust programming, it'll be a struct... It's basically an object with some functions that can do some stuff. That will be uploaded to the Ethereum network with a small payment of Ether just to sort of pay off the maintainers of the network, the miners; then it will sit there until someone wants to interact with it. Then it's up to the developer to write the frontend; this is basically the same sort of technologies Javascript, CSS, HTML... It's just that the Java -- sorry, the Javascript... \[laughter\] The Javascript can...

**Jerod Santo:** Happens to the best of us.

**Adam Stacoviak:** I had to laugh out loud on that one, sorry.

**Gavin Wood:** \[laughs\] The Javascript's actually able to call into this contract, this instant that's sitting on the Ethereum network, it's able to call methods that alter its state and it's also able to inspect the various properties that are public.

**Jerod Santo:** So is it safe to think of it in terms of like any sort of agreement that you would previously make in the real world, or what you would call the legacy world, you could now move that to an application on the Ethereum network? So perhaps a mortgage, or an agreement to buy something, or a prenuptial agreement - anything that you could possibly think that would be an agreement between two parties, we could now move this into the virtual space safely?

**Gavin Wood:** That's in principle correct, yes. Now, there are a few... There's one thing to point out, which is that it doesn't just need to be between two parties, but it can be between any number of parties.

**Jerod Santo:** Right.

**Gavin Wood:** Now, the other thing is to say the concepts that the blockchain can currently encode -- the language that we have to play with in terms of what aspects of reality we want to place on the blockchain... For example, if we're talking about a marriage contract, we may want to talk about things like there being a judge in the case of divorce to determine whose fault it was that they're getting divorced, in order to make sure that there's proper payment between the two -- now, the notion of judge is not really... It's pretty easy to write that into a legal contract, because we have centuries of case lore about what it is to be in such a role - that's not the case with Ethereum; we're still in the very early days, so we have relatively little concept. Our language is not very rich. But the richness is something that, in the same way that with programming you end up increasing the level at which you code over time, there's more and more system libraries written and integrated into the system, and you end up being able to code in much richer concept. That's gonna be the same with Ethereum.

\[00:30:03.09\] At the moment, the concepts we're able to draw on are relatively poor, but over time we're going to be building system libraries, you might say, or case precedent lore, in the case of legal parallel - this is going to build up the language into something much richer.

**Jerod Santo:** I think it might be useful to specify a specific set of contracts that we could talk about in real terms, and that would help us understand the ins and the outs - I think that's what Adam was getting at... How does the Ether fit in, how do you get money in and out? The DAO is no doubt your most popular set of contracts, and perhaps a little bit notorious now because of the hack... Give us the DAO, the lay of the land, and the recent history there, and help us understand Ethereum in light of it.

**Gavin Wood:** Sure. The DAO, if you're not aware, stands for Decentralized Autonomous Organization. Essentially, it's a means of bringing various people together into some form of bound contract, or some bound set of interests. The idea behind the DAO is more or less like a fund, a VC fund. It can back particular endeavors, and the idea is that the endeavors will ultimately make money, or create value, and push the value back into the DAO so that all of the members of the DAO get in some sense richer.

Now, you can buy into the DAO - that was the idea - by depositing Ether under the control of this DAO contract. It's a bit of an odd thing to say, "Well, putting money under control of a contract? How does that work?" But that's exactly how it works - you write some software, and the software states the logic of this agreement, of this multilateral agreement, and part of the logic is saying under what circumstances money should be transferred. In most the same way that you might have a joint bank account where you need both signatures before the money is transferred, so is the case for the DAO. Under the DAO, it will happen with four thousand or five thousand signatories, and there's some much more complex thing about how many of them had to agree to it before funds were transferred. But nonetheless, basically it's that kind of thing. It's a shared bank account with very particular logic for who gets what money, and for hopefully integrating the eventual ventures back into the DAO so the DAO itself can reward those who backed the right venture.

**Jerod Santo:** Who wrote the smart contract for the DAO, who got involved and how much money was jointly shared in that contract?

**Gavin Wood:** There were several contributors to the DAO contract, but I think it's probably fair to say that the main contributor was a guy called Christoph Jentzsch.

**Jerod Santo:** And he is a notable member of the Ethereum community, or was it just in his free time? Give us the geopolitical landscape of this so we can understand it better.

**Gavin Wood:** Sure. There was a company called Slock.it, which still exists - they're doing as far as I hear reasonably well - and for whatever reason Slock.it wanted to pursue this idea of a universal sharing network. This is the idea of basically take something like Airbnb, take Uber and maybe a few other apps that allow people to share their resources or do decentralized service industry work - that's kind of what this was about. This was basically trying to take a resource that you own and be able to allow someone else to use it for a period of time, in return for a payment.

\[00:34:09.00\] The idea behind Slock.it was basically to say, "One of the critical elements to make this work is gonna be a lock that's controlled by a blockchain." So they went and made a lock that was controlled by a blockchain.

**Adam Stacoviak:** While we're on this subject, I don't mind if maybe we can establish, as you said earlier Jerod, some terminology. It may be completely obvious for those who are deep into this, but for those who aren't, what exactly is a blockchain?

**Gavin Wood:** The blockchain is the underlying data structure that allows Ethereum to be both secure and decentralized. Normally, if you've got a decentralized system there's no real way of... Well, because you don't trust anybody on it, as it's decentralized and anybody can be on it, it's kind of hard to get a footing, to understand what's the noise and what's the signal. So the blockchain is a decentralized data structure that allows us to create a signal that everyone agrees on, despite the noise of malevolent actors or broken machines.

Critically, it's basically what I would call a decentralized state transition system. If we imagine that there's some shared state, and the state could be as simple as -- when we imagine a state, we might imagine the memory of a computer at one particular point in time. This state is gonna iterate as transactions or operations are executed on the computer, in the same way that as you type something into a text editor, the memory of the text editor changes.

What we've done basically with the blockchain is create a decentralized version of that. We can place programs on, and the programs have some state, and the ongoing operation of the program will be managed by the network as a whole, rather than by any one computer individually.

**Jerod Santo:** So back to the history of the DAO - you mentioned Slock.it and the setup in the DAO... Give us a time period on this in terms of when it started. We know it became very popular and a lot of people joined and a lot of money went into it, perhaps more than anybody was necessarily expecting at the time. Can you continue down that path for us?

**Gavin Wood:** Yeah, so the DAO was deployed by personal persons unknown, and two companies were particularly enthusiastic about it. I forget one of them, I think it was a robotics firm; the other one was Slock.it. Indeed, a substantial amount of funds went into it; I think 150 million was the figure bandied about, but I think it actually went even higher than that at one point, because Ether itself started to creep up in volume. It was really quite a lot of funds, and I think it was probably more than anyone had expected, including some of the authors of the contract itself.

And then yes indeed, there was a bug in the contract, which was probably a bug that would be recognizable to a low-level device driver programmer. In a way, the contracts that we're writing, these programs are more or less at that level, because they're dealing so closely with the Ethereum Virtual Machine. Essentially, it was a re-entry bug. A particular function call was being called actually within itself by the malicious transaction, so before it actually finished its operation, it was being called again; because of the order of the points in the function, it was doing the bad thing before it was doing the good thing, so the bad thing started to multiply up.

\[00:38:13.00\] Eventually, they were asymmetric and the good things couldn't make it back down to normal again. That's essentially what went wrong. Basically, someone was draining money out (the bad thing) and there was no way of compensating that with a good thing, because so much money had been drained out.

Now, when I think of a re-entry bug, I think of interrupt programming, and it was only after this bug that I thought actually what we're doing with the contracts is in some sense more similar to interrupt rather than function calls. When we think about function calls, we don't really thing about re-entry bugs, at least not malicious re-entry bugs. With interrupt programming it's a little different and you're much more careful about your state because you do actually fear that the same interrupt may be called while the current one is executing.

**Jerod Santo:** So money began to be drained... Where is it drained to? Where does it go? To this other person's Ether wallet, or some sort of a bank account? Where does it go when it started getting drained out?

**Gavin Wood:** There were numerous safeguards written into the logic of the DAO, which prevented the money from going anywhere anytime soon. I think it was about 30 or 40 days it would have taken to actually get the money out into a wallet. And then it turned out that a group of concerned parties called The Robin Hood Group or The White Hat Group actually hacked the DAO themselves using a selection of similar attacks in order to safeguard as much of the funds as possible and to prevent the attacker from actually drawing any of the funds out themselves. So effectively, it turned into a stalemate where they were using the attack against each other and the funds were just locked.

**Jerod Santo:** \[laughs\] It sounds very much like the Wild Wild West that we've heard all about. Do you think that's a fair way to think about it? Because it is completely decentralized, it's virtual, it crosses international date lines and borders... There's no law in this -- I mean, there's different laws in different countries, but then you also have... You know, the smart contract kind of is the law...

**Adam Stacoviak:** The only law is the contract.

**Jerod Santo:** The law has a bug, and we all know that the contract is not executing on what people agreed to, right? Because these people put their USD into it - or whatever their dollar was - 150-160 million, and they're all up in arms, or scared or angry perhaps, depending on how much money they had into it and how much money they have on the whole... Some might have just been amused, but who's to say what happens and where it goes from here? Is it very much just like whoever executes on technical abilities? Give us insight into that, because it's so fascinating and yet it just seems like who knows what's gonna happen?

**Gavin Wood:** I think the Wild Wild West comment is quite true. It is a lawless area if you don't count the law of the program, the law of the software. Ultimately, the software is based upon a social system, which is assuming that everybody is self-interested and the economics of the blockchain will mean that no individual can actually alter the outcome of anything. Everyone is almost pulling in a different direction, which averages out at zero. That's the kind of thing that blockchain is trying to engender, and that's the economic game that acts as the foundation to why the blockchain is fair and democratic.

\[00:41:59.13\] With the DAO, so much of the value was compromised, that that assertion was not wholly true; the parties that were maintaining Ethereum - the community, in fact - had an awful lot to lose. What happened is that they formed almost like a special interest group within the Ethereum community, which wanted a reset of this particular bug, or particular exploit of the bug.

**Jerod Santo:** So here we have the decision of what to do about it. This is, to give some context, June-July 2016; that's probably enough timeframe, although probably not completely accurate. Then you have conversations going out... Where does the community meet? From my perspective as more of a community watcher, it's like they're on Twitter, they're on Reddit, I'm sure there's forums on different Ethereum websites, probably there's some conversation behind closed doors, but from your perspective, where is the community conversation going around about "What do we do about his circumstance?"

**Gavin Wood:** It's everything that you've mentioned, basically... Social media. There was even stuff going on on GitHub; some of the issues that were perhaps a little more contentious, things like coding at potential solutions or potential mitigations were attracting quite heated arguments... What the code was doing, or whether it was even right to start programming, whether it was right to put forward potential pull requests... It was going on all over the place, which is unsurprising, given that there wasn't a single point of governance for this community, so it's going to just come out everywhere.

One of the more interesting places was this voting system - I don't remember who wrote it, but some concerned party within the community wrote a voting application that allowed you to back your vote with Ether; you were essentially able to tie a particular vote to a particular account that presumably was holding your Ether, and what it allowed you to do was get a weighted set of results about what the general desire of the community was.

**Jerod Santo:** So the decision was made for the reset, correct? There was a hard fork in the road - and we can talk about the implications of that, but was that decision made using this tool where everybody voted and it was kind of a majority win? How does the actual consensus come together? Was it the tool?

**Gavin Wood:** This is also the funny thing... There really wasn't any particular decision made, at least no big one. The network consensus essentially came from people running their Ethereum client with one option or another option. So we're literally just talking about a command line flag here. It was basically, if you run your client with one flag you mine (we assumed you're mining blocks), and it will mine on one chain, which will not rescue the DAO. If you mine with some other flag, then it will mine on the other chain, which will rescue the DAO.

**Jerod Santo:** Really?

**Gavin Wood:** \[00:45:45.19\] Nobody made a specific decision other than the miners themselves. Some of the miners just decided one way or another. Other miners, particularly the pools, actually put it out to a vote. They said to their members, "Which way would you like us to mine? Which flag would you like us to set?", and the pool members would have voted one way or the other. I think one of the pools actually voted against the fork, so they voted to keep the exploit in place. But I think ultimately actually the pool decided to override them anyway, when it was clear that everybody else was going with the other.

**Jerod Santo:** Does that mean that from that point forward, once you had people running with both flags, you basically have two blockchains or two histories that are running in parallel? Is that how that works?

**Gavin Wood:** Yeah, it's basically like... Imagine if you had a computer program running and then you did a hotfix for it. What would happen you know if -Schrodinger's cat- if there was an exactly 50% chance that you did the hotfix and deployed it, and 50% chance that you didn't. Then you would end up with this quantum, entangled computer program that may or may not have the fix, and that's effectively what happened with Ethereum.

**Adam Stacoviak:** So it may or may not have happened.

**Gavin Wood:** It may or may not have happened, and it depends on which Ethereum you look at. As soon as you choose an Ethereum, it will snap into one state or the other. But until then, it may or may not happen.

**Jerod Santo:** Wow.

**Adam Stacoviak:** That's funny. One thing I think about as we have this conversation... Jerod's deeper into this, he's done a lot of the research of this, and I'm sort of playing the outfielder, so to speak; he's pitching. But I'm thinking about things like trust. You've got the DAO, which is a contract written, a lot of money pooled into it, and when you think about the trust of -- or the mainstream public eventually making cryptocurrency become more and more mainstream, you think about this level of trust. So what happened with the DAO - is this simply a contract issue, the way that somebody wrote a contract, or is it something that is underlying the actual technology that, as we just mentioned, was forked with one Ethereum or the other? It's not so much which program is better, which is more or less which blockchain was chosen, right? How do people deal with trust when they look at this problem you all faced, this fork, and this hacker, so to speak? And then the White Hat Hackers hacking the hacker, and all this stuff. How do people come into this as not insiders and operate with a level of trust?

**Gavin Wood:** I think some parallels can be drawn to the early internet, where it was sort of slightly scary to send payment information over the internet. I remember back in '98, it was still relatively commonplace, I was still being asked to pass my credit card information via e-mail. It's like, "Well, I don't really want to do that... That's incredibly insecure." SSL was still a fairly new thing, to the point that the eCommerce sites often didn't have it implemented.

We're gonna have to go through the same phase with Ethereum. There's gonna be an early teething stage where things don't operate quite as you expect. Either the Ethereum technology itself doesn't - luckily, we haven't had any of those bugs yet, but in principle it could happen; it is a nascent technology. It happened with Bitcoin, so I wouldn't rule it out, though we have taken very particular steps to avoid that, in particular multiple implementations and a formal specification.

The second thing that could happen is just the economic foundation behind the smooth running of the Ethereum at work gets a little afraid, and that's pretty much what happened with the DAO. The fact it forked owed to the fact that there was such a large contingent of value that people wanted to save, that were also people who maintained the Ethereum network.

\[00:50:05.09\] I think as the network matures, that's gonna be much less likely to happen, quite simply because the value of Ethereum is going to disperse as more and more people get involved.

**Adam Stacoviak:** I guess another question is, on the front of that, as you mentioned before Jerod, 150-160 million dollars in the DAO, and Gavin, with you seeing this as still sort of compared to the Wild Wild West, and then what you just said there - it seems like it's even in guinea pig stage almost... Not so much that it doesn't work, because it does, but there's some kinks in the robe that need to be ironed out, and only maturity and only time will allow that to happen. Is it possible that someone with lots of money in Ether could potentially lose big as part of maturity?

**Gavin Wood:** I wouldn't rule it out, though as someone with a substantial portion of their net worth in Ether, I also wouldn't say it's such a terrible bet either.

**Adam Stacoviak:** Let's pause there on that note, since you've said that. I have to ask... You said a substantial amount of your net worth is in Ether, is that right?

**Gavin Wood:** That's correct.

**Adam Stacoviak:** Percentage, just percentage... Not so much a number. Just curious. 70%? 60%? 30%?

**Gavin Wood:** Yeah, at least 50%.

**Adam Stacoviak:** 50%, okay. So you're half in, half out, so to speak.

**Gavin Wood:** Something like that.

**Jerod Santo:** \[laughs\] It's probably also worth clarifying, just for transparency reasons. We'll have people, especially some of our listeners are... You know, I talked about the ones who were against the fork and the ones that are for the fork - I looked at it very much like the idealistic point of view is like "This is the way the contract was signed, so it must exist that way", and the others are the more pragmatic, like "Nobody wanted this to be able to happen and all this money be drained out." And of course, where you follow on that line if you're not just an observer - if you're involved - is very much tied into if you have money that you'll be losing.

You have a lot of your personal wealth in Ether; I assume that you also had a part in the DAO, is that true?

**Gavin Wood:** I had. I made a small investment in the DAO.

**Jerod Santo:** Okay, cool. I have nothing against that, it just helps give a little color to your... I'm sure you were pro fork, correct?

**Gavin Wood:** Well, I had a fairly nuanced - and still continue to have a fairly nuanced - view.

**Jerod Santo:** Let's hear it.

**Gavin Wood:** Neither options were especially great options. The situation was pretty bad; the hand that was dealt was really quite unfortunate.

**Adam Stacoviak:** Well, on one side, the money is saved, right? And on the other side trust is reduced. Is that basically what happened?

**Gavin Wood:** It's not clear whether the money was really saved, in that a substantial portion of Ether's value was reduced around the time of the DAO hack. It was around $21 around the DAO hack, and then it pushed down to maybe $8 or $9 when it went through. So it's not really clear whether fixing it really saved the money. Any holders of the DAO tokens that had less than around 15% of that Ether in the DAO token, then they wouldn't have lost money. It was only for the people who put in more than 15%, since it was 15% that ultimately maybe may have been locked forever through the stalemate position.

**Jerod Santo:** Wow.

**Gavin Wood:** \[00:54:04.00\] So in reality, I'm not sure whether it really was saving money. That said, if you have the option of trying to right what is pretty obviously a wrong, should you do something or should you not do something? For me it was less of a practical concern and more of just like "Well, maybe if I see someone being robbed in the street, I would like to actually be the guy that goes up and stops the robber and returns the handbag."

**Adam Stacoviak:** Right.

**Gavin Wood:** So there was that kind of notion going alongside it. But that said, there's also an awfully strong principle here, which is that the blockchain is meant to be immutable, and the code that's on it is meant to actually be the code that governs how that logic works. So it's really quite difficult to weigh one up against the other, and that was the situation that we found ourselves in.

**Adam Stacoviak:** So if there was a vote, since it is a 1 or a 0 in this case - you either voted for or you voted against it... There was no true vote, but as you said, your answer is nuanced and you explained that to us -- in the end, if it had to come down to a vote of for or against, which would it have been?

**Gavin Wood:** I've never answered that question to myself, and I don't plan on doing so anytime soon. \[laughter\]

**Adam Stacoviak:** Okay, fair enough.

**Jerod Santo:** Well, let's take our next break. We have more to talk about so many interesting things here. This is just fascinating stuff to me; to give a little bit of a background, we had this show teed up... Like, I said, I read that post on the Coinbase blog in April, and I think I probably e-mailed you immediately following, Gavin. We got you on the show in June 2016, and due to some technical issues we actually didn't record that day. That was like right when you were in the middle of all this DAO stuff. In fact, I think we joked that maybe we'd better do this show a little bit later because this will have passed, and Adam and I said "Well, cryptocurrencies and these odd coins, everything comes and goes so fast; maybe there won't be an Ethereum by that time..." I think we had an August schedule and then a September schedule, and so here we are talking about it.

It seems like you weathered the storm, but I wanna talk about the fallout and the repercussions of the hard fork, where things are now, and give people some look into the present and the future and how we can fit in as software developers. So, tee that all up, and we'll be right back.

**Break:** \[00:56:33.11\]

**Adam Stacoviak:** Alright, we are back with Gavin Wood and we have done it... We've survived the DAO hack, we are on the other side now looking back. This is late September, early October 2016, the Ethereum community still lives... It's a little bit different now; we actually have two histories, two currencies. There's now Ethereum and Ethereum Classic. Gavin, give us the lay of the land now, after you guys have survived and moved forward from the unfortunate summer you had.

**Gavin Wood:** Well, it's more or less as you said - Ethereum split up, basically, between the people that run with the flag that said "Help rescue the DAO", and on the other hand, the people who didn't run with that flag. We have the immutable Ethereum, as it were, the Ethereum where the code truly did rule, the broken code rule, and then the Ethereum where it was sort of hardcoded to fix that application issue. That's more of less where it stands.

\[00:58:16.14\] By and large, the aftermath has died down, people are getting on. I think at the moment that the Devcon, the Ethereum conference is happening in Shanghai; I don't think there's all that much talk about Ethereum Classic, although I can't say for sure.

From what I've seen of the talks, people are sort of focusing much more on the forward-looking stuff, rather than the DAO. The Ethereum Classic community seems to be continuing; I haven't seen any major technical improvements on it recently, but nonetheless there's a change in their logo, and it is continuing. The price is dropping somewhat, but yeah, it seems to be still here.

**Jerod Santo:** Still here. So let's talk in terms of market value. I'm not sure what Ethereum maxed out at pre-DAO hack, but it looks like it's trading against the USD at about $14.

**Gavin Wood:** Yeah, it was about $21 before the DAO.

**Jerod Santo:** Was that the max that it's reached in its lifetime?

**Gavin Wood:** Yes.

**Jerod Santo:** Well, it sounds like not too bad; I mean, it's not like it's a penny stock nowadays.

**Gavin Wood:** No, I mean... It hit I think 8 or 9, I don't remember precisely how far down it went, but around that. So it's back up to... I mean, the 21 looked fairly bubble-like; it was really riding on the back of all this investment in the DAO. It was a lot of people maybe coming into Ethereum from outside of the ecosystem, rather than just Ether holders themselves putting their Ether into the DAO. I think that's probably what was pushing the price up a little.

So I'd say it's doing pretty well, it's certainly reached my expectations.

**Jerod Santo:** Right. Well, this isn't an investment show, it's definitely a show about software, so I'll stop down that route. But let me just say that we've been watching this, and watched loosely some of the alternative coins or the things that are changes to Bitcoin or inspired by Bitcoin, and like I said before the break, there's lots of things that come and go... I was even mining some CoreCoin for a few months just for fun; that's at 0.00 at this point, and perhaps is completely just a footnote in history.

One thing that we look for as we invest our time and our skills and perhaps even our money into communities and software projects, because this is a very large software and open source software projects - there's over 80 projects that the Ethereum Organization has on GitHub... We look for sustainability and long-lasting things, and one of the constant themes in our shows and in our community of developers is the Javascript fatigue and the constant churn of new frameworks and new ways of doing things - some people see it as a Renaissance, other people see it as ridiculous... I personally don't buy into new Javascript frameworks very often because I'm just waiting for the next one, and it seems like with the cryptocurrencies there's very much that possibility. Aside from Bitcoin, many other ones have come and gone, and of course, Bitcoin itself hasn't been around for all that long in the grand history... So that's one of the questions I have about Ethereum, especially as we look at it as app platform - and we'll get back to that. Looking forward, you've survived what would be considered a PR disaster and really a crisis in your community over the summer... Looking forward, what is it about Ethereum that you believe makes it have lasting power, and that we can have trust, not just in the currency, but in the platform as something that we can invest in?

**Gavin Wood:** \[01:02:03.15\] The point of Ethereum is that you don't need to trust it. If you want, you can open it up and see what's inside and convince yourself that it's actually worth going with. In that sense, I kind of liken it more to sort of simple tools... When you wanna buy a garden spade at your local gardening equipment store, you don't necessarily look at the brand to see if it's a brand you trust, but rather you actually take the spade and you start kicking it to see whether it's actually likely to break or not in usage. You're actually evaluating it yourself, rather than going over to the brand and using trust.

I think that's really what people did in the much earlier, old days, before the real resurgence of brands and of the need to trust.

I think that the idea of trusting and of brands themselves are a relatively modern notion, and I think it's also not a bad thing necessarily to go back to the ideas of evaluating a certain thing based upon its practical material attributes, rather than its label. Not to say that there isn't a place for trust in the world, but rather that maybe in the continuum between trust and reality, we should be moving the pointer/needle a little bit back towards where it came.

**Jerod Santo:** Let's get back to those who are willing to give it a shot and test it out ourselves and do the things that you're promoting here with regard to the platform. We talked about how you can build systems that are used or are built around agreements between two or more parties in a decentralized fashion, and I said "Well, is it like anything that can have an agreement?" and you had a soft "yes" to that. There are some specific things that are outside the bounds of what you can do with regards to verifying contracts... But give us some concrete examples of early Ethereum systems. You mentioned one during the DAO hack, which was the voting tool. What are some other things, to help give our listeners that muse, that inspiration of "Oh, I wanted to build a crowdfunding site... I can use this!" Give us some more of those, so we can wet our appetites.

**Gavin Wood:** Okay, so you've got crowdfunding that was like a VC fund that anyone could contribute to. So you can obviously have that down and just say, "Right, well actually, rather than being able to choose any project, it's for one particular project and you can crowdfund that." So you can basically state, "I plan on spending the money on XYZ, and there will be some potential for maybe you to make money from this XYZ in this way, and I want money from you to do this." And you can create a contract that will allow you to accept people's money and spend it over some particular period of time on some particular things, with perhaps some particular set of judges that will say, "Actually, they're not getting these milestones completed in time, we're going to stop the funding and return the money to the funders." That's one example of something that you can program on this.

\[01:05:49.02\] Just thinking slightly more crazily, pushing it out there a bit, what about a game of chess? A game of chess, except when you take a piece you actually lose money, or you gain money. So you're essentially placing money onto the chessboard and you're saying, "Right, well every piece on the board is actually worth something, and the winner is the one inevitably that takes the pieces that are most valuable."

That's something that you just couldn't do, I mean certainly not easily. You'd have to create a business and register it with Paypal, because Paypal needs to trust that you are not KYC or AML -thats "know your customer" and "anti money-laundering"- for those who aren't familiar with these financial terms. So it has to do all sorts of business processes, meatspace processes before you can work with money, before you can work with value. Even though it's all just software, but we still have these processes that you have to go through to set up these trust roots. With a system like Ethereum, it's literally just software; you don't have to do that anymore.

Value is a fundamental primitive of the language that you're coding this stuff in, so it's actually trivial. It's completely trivial. It's as trivial as incrementing an integer, to send money in Ethereum. It's super, super easy.

Imagine a game of chess here where you can make money off your opponent across the internet, by being a good chess player. So maybe something like Mechanical Turk, or one of the other matchmaking services that allows you to find someone who does work, and you can say "Right, we're gonna have this third party who will decide whether you've done the work." Say I want some design work, or I want some copywriting work, and we'll have a third party, a nominated party that we can both agree on, that basically says whether the copywriting or the design is of a sufficient quality to be paid. Then you can place the payment in Escrow, so you can have an Escrow system on this. Then, the payment gets made if and only if the work is done.

So that's something that can be done, again, very easily. There's no need to integrate it into any payment services, there's no need to register a company or do anything like that. It all happens in software, no meatspace complications.

Okay, another example... Let's think about asset tracking. Let's think about the way the world works, the way that supply chains work. I buy a pair of trainers in a shop - how do I know where the trainers came from? I mean, I could look at the label and maybe it says "Made in China", but it's very difficult to know which bits came together from which places, where it went on its way, what the intermediate owners were, where the raw materials themselves came from... This information just gets lost. And why does it get lost? It's not necessarily lost because the people who are handling it want it to be lost, it's just really hard to put it somewhere that's secure, that isn't mutable by some administrator, and that is ubiquitous, is global enough such that all of the various different people along the line can place their records in the database.

Effectively, what it needs is a really strong, secure, shared internet-based database, and that database hasn't been around. If it had been around, we wouldn't need things like The Fair Trade or the Soil Association; we would just have it all online.

These kinds of asset shadowing - that's what we call them, because it's sort of like taking an asset and placing it in some sort of shadow, like a pairing on the internet, on the blockchain, these kinds of asset shadowing things don't really exist yet, but it's exactly the sort of thing that the blockchain would really excel at doing, because it is this database with very strong logic guarantees, with very strong security, so you can be certain that authenticated users really are authenticated, and it's ubiquitous - it's everywhere on the internet. It's open and free, and that's really great for allowing third parties to create custom solutions and make their own dime on the back of this technology.

I don't know if that will help give you a better idea about where this stuff can go.

**Jerod Santo:** \[01:10:09.18\] Yeah, absolutely it does. I was even beginning to brainstorm a distributed Escrow right as you began to explain it. You started to get me at least thinking along these lines and I think that's powerful, when you have a lot of people who are smart and able and can program and can think of these new things that previously couldn't exist, and let's see what we can do with it.

One question we have with regard to the future - I know Adam has voiced this as well - is if and how can something like Ethereum go mainstream. It seems like it's the kind of thing, just like the web was, where it wasn't mainstream until everybody was using it without having to understand it. Right now we have blog posts and Wikipedia articles and podcasts explaining Ethereum to people who are interested, very fringe listeners like ours... How far do you think we are from the point where mainstream people are using some sort of service/application online that uses the Ethereum platform in the background, and they don't even have to know that it exists, and yet there it is? I think that's when we know that cryptocurrencies in general and perhaps Ethereum in particular have arrived. How far are we from that future, and how do we get there?

**Gavin Wood:** If you'd have asked me that question about 12 months ago, I would have said probably about six months... \[laughter\]

**Jerod Santo:** A developer at heart.

**Gavin Wood:** I'm not sure I can give a great answer this time...

**Adam Stacoviak:** Instead of saying how far out, maybe what would it take? What has to move - as you used the chess world analogy earlier - in the chess world to make this mainstream?

**Gavin Wood:** I'd probably say two things. Firstly, the tools - we need better tools for developers. It's just a no-brainer, to be able to pick something up and actually run with it, make an application that's gonna change the world. The second thing that we need is better user interfaces for all of this stuff. The end users are not really provided with an especially good means of interacting with Ethereum, or probably more importantly, its applications.

We're gonna need much better integrations into things like web browsers, and that's something that we're working on at Ethcore. And we're gonna need better tooling, so developers can create that experience really easily.

**Jerod Santo:** You mentioned Ethcore - it's probably a good opportunity, as we get nearer to the close of the show, to give a little bit more around yourself... We've mentioned you have a lot of your net worth in Ether that you're working with, the foundation... Remind me again the foundation that is involved here.

**Gavin Wood:** The Ethereum Foundation?

**Jerod Santo:** Okay, easy enough. \[laughter\] I was thinking it had to be harder than that, but I didn't wanna guess wrong. So yeah, the Ethereum Foundation, and then you have Ethcore, which I assume is a for-profit company that you're a part of. So give us that understanding, and what are you guys doing at Ethcore that is launching off Ethereum, or trying to.

**Gavin Wood:** I was one of the people who sort of helped found the Ethereum Foundation, which is continuing as a nonprofit based in Switzerland that's doing fairly important stuff within the community, like organizing conferences and assuring that at least one client of the Ethereum network is well maintained. This client is called Geth.

\[01:13:56.07\] Ethcore is a company setup by me. A few of the people that were originally members/employees of the foundation also came along with me and helped me set up Ethcore, and what we're doing is firstly injecting a choice into the ecosystem - we have an alternative implementation of the Ethereum protocol called Parity. We're also trying to push forward on this UI, and trying to make Ethereum that much easier for people to interact with, and in part also make a developer toolset, a developer API that's better than the current one, that really helps developers get their head around what needs to be done and helps them actually create applications much faster.

**Jerod Santo:** Parity is open source, you mentioned a browser... Is that the Mist browser that we found, or is that a separate browser?

**Gavin Wood:** That's a separate browser. That's being done currently by the foundation. Parity itself is a browser as well as a client, so we're taking a different path. At the moment, there's basically the Mist browser, which is a separate executable, a separate browser, a separate program; it's very much designed around browsing Ethereum daps. That was something that I was involved with in the early stages of it.

What we're doing at Ethcore is doing it a different way around; we're saying, "Actually, let's allow the user to use their own browser", to use Chrome or Firefox or whatever, and then Chrome or Firefox will just be able to display daps, so the daps will appear - these decentralized applications... A bit of an odd word, "dap". These daps will appear within the user's browser itself, and Parity (that has everything to do with Ethereum) will be running in the background; the user doesn't really need to know or understand how that works. It will just appear to them like any other website.

**Jerod Santo:** So this is to enable Ethereum-powered applications inside your browsers to make payments or to assign contracts as part of the browser? Is that right?

**Gavin Wood:** Yeah, to interact. We can imagine with the game of chess, where you get money for taking the other player's pieces - I can imagine that as kind of a 3D chessboard actually in the browser, and it sort of tells you how much money you've got so far, which pieces you've captured, and so on.

**Jerod Santo:** Gotcha.

**Adam Stacoviak:** As we close out, it was definitely a blast having you, Gavin. Like I said, I played outfield a lot in this conversation, Jerod's far more the pitcher than I am in this case, but it's been a blast hearing the process of what it takes to have a trust-free marketplace, down to all these things around Ethereum, Ethcore, the open source being built around it, the community being built around it, the hacks, the Robin Hood White Hats attacking those guys back - it's such an adventure, I can see here.

One thing we like to do for our listeners whenever they listen to this show is give them some takeaway, so this is a chance for you to share back with those listening - hackers, people involved in open source, software developers of all kinds, whether they're beginners or experts - a way to step in and get involved. So from your perspective, what are the ways in which -- you know, we've talked before about how can we take this mainstream, what needs to move on the chessboard so to speak, and maybe not so much a rehash of that, but what are ways in which the open source community can step in, start helping out? What are the most low-hanging fruit now that can move this mission forward? How can they step in?

**Gavin Wood:** It kind of depends on the community members themselves. If you're someone who's really into low-level programming, working out the nuts and bolts of how things really work, then come over to the Parity site, have a look at the code base. It's written in Rust, so if Rust's your thing, or if you want Rust to be your thing, then yeah, get involved. There's plenty of small, low-hanging fruit issues that can be done.

\[01:18:00.24\] Now, if it's more of like "What's the new frontier? What do these contracts look like? What does the environment that I will be coding in look like?", then find Solidity. There's online documentation for Solidity; get yourself a client of Ethereum - Parity, Geth or whatever, and start coding a little contract. There's plenty of tutorials online that give you very simple contracts that allow you to get the idea of how to create your own currency and deploy it. You can do this in about 15 minutes, it's really simple. When you start understanding how trivial it is to make a currency and deploy it, then you start really getting to grips with "Actually, hold on... This is a very powerful system, because I've now got some coins that I can literally program. I can program them to do whatever I want, in the same way that I could program the C language, or C++", or whatever it is you normally code in.

If programming's not your thing, if you're more just sort of into explaining and documenting and writing, then obviously there's plenty of documentation work to be done, there always is. But even tutorials - writing additional tutorials is always great; helping write the manuals, helping users understand, get to grips with things that much faster is always good. So there's lots of stuff to be done.

**Adam Stacoviak:** You mentioned Parity - that's the open source client from Ethcore available on Ubuntu, OS10 through Homebrew, or even Docker, then also on Windows. You have the full gamut there covered, so anybody out there on any of those platforms can easily put on Parity and start playing with that in that respect. What exactly - I think you might have covered this earlier, but Parity is a client... What does a client do?

**Gavin Wood:** The client's the thing that connects through all of the other peers on the network - maybe not all of them, but a selection of them - and transports transactions and blocks, and builds up the chain of blocks that have gone so far, so basically accumulates a concatenation of all of the transactions that have happened, in order to understand what the present state of the system is. The client looks after all of that.

**Adam Stacoviak:** Gotcha.

**Gavin Wood:** In the case of Parity, it also is the thing that provides the user interface that the user can use their browser in order to inspect the chain and to potentially run applications that rely upon knowledge on the chain.

**Adam Stacoviak:** Super quick - is Parity one of many, or are there other interfaces into Ethereum?

**Gavin Wood:** Well, there are many other clients, there aren't that many other interfaces. But there are seven implementations of Ethereum.

**Adam Stacoviak:** Okay. For listeners, we're gonna link up Parity in the show notes; we'll talk to Gavin after the show and get that list of other seven, and we'll try to put those on the show notes as well. That way, we'll give the full gamut there.

Gavin, this is a chance for you also, at the close of the show - is there anything we didn't ask you that you were like "Man, I really wanna talk about that on the show." You've got a couple of minutes... Anything else you'd like to cover around cryptocurrency, going mainstream, Ethereum, blockchain technologies - whatever. Is there anything else that we may have just glossed over that you wanna make sure we cover?

**Gavin Wood:** I would only sort of talk about the future... At the moment we've got Ethereum, and the two critical things that people really would like to be addressed are privacy and scalability. The only thing I've mentioned is if you're someone who's really interested in theorizing out this kind of stuff, creating new protocols, working out new systems, then this is a great thing to think about, how we can make blockchains scalable and manage privacy.

**Adam Stacoviak:** Also, one other thing I would ask too is whenever anybody -- that advice you gave about how the community can get involved... Where can someone go if they have questions? Not so much like, "Hey, how do I do this?" Obviously, there's Stack Overflow or forums for that, but if they're like "I'm interested in this, and you covered a couple of these things, Gavin, in this podcast called the Changelog, but I've got more questions where I can apply my ideas... I've got a couple ideas." Where does someone like that go? Do they come to you, do they go to a forum? Where are the places they can go and reach out to other community members of Ethereum?

**Gavin Wood:** \[01:22:12.08\] We have a fairly active get-a-room for Parity, but there are also other get-a-rooms for various other Ethereum projects. I think there's still quite an active Skype room and IRC channels for Ethereum, generally just \#Ethereum on IRC, on freenode. So there are fairly large open forums, but as it's such a growing community now, it can be kind of hard to find any single place where you're gonna find everybody. You really have to sort of work out where you want to go based upon what it is that you wanna get feedback on. But I would explore GitHub, that seems to be a very good place to be at the moment.

**Adam Stacoviak:** I see the Parity Gitter room linked up on the Parity page too, so we'll link both of those up in the show notes. That will at least give the listeners a starting place for hopping in and asking some questions back to the community and stepping in to find ways to give some support here.

Gavin, that is it for this show. Jerod, great job on teeing this show up; I had a blast just kind of listening to a lot of this fascinating talk. It seems like we always have these catch-up shows, and I'm really hoping that a year, a year and a half from now we're gonna have Gavin back on and seeing the praise of how the DAO has worked itself out and all this trust has come back and it's worth twice as much, or whatever, in other ways also that Ethereum is being used to provide marketplaces with new ways to move money around and stuff like that. Hopefully, that is the future for all of this.

That's it for this show, so say goodbye.

**Jerod Santo:** Thanks, Gavin. It was a blast.

**Gavin Wood:** Cool, thanks a lot guys. It was great fun!
