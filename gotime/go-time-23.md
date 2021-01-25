**Erik St. Martin:** Alright, we are back for another episode of GoTime. It is episode \#23. Today's show is sponsored by Linode and Code School. On the show today we have myself, Erik St. Martin, we also have Brian Ketelsen - say hello, Brian.

**Brian Ketelsen:** Hello, Brian.

**Erik St. Martin:** And Carlisia Campos.

**Carlisia Thompson:** Hi, everybody. \[laughs\]

**Erik St. Martin:** She's already laughing... And today's special guest is Tess Rinearson. Why don't you tell everybody a little bit about yourself, Tess?

**Tess Rinearson:** Hey. I am a software engineer at Chain, which is a San Francisco startup that builds blockchain infrastructure, and we do almost everything we do, all of our infrastructure is written in Go.

**Erik St. Martin:** This comes the fun part - I wonder how many people are familiar with what blockchain is.

**Tess Rinearson:** Yeah...

**Erik St. Martin:** Can you give a little background of what blockchain is and what it's used for?

**Brian Ketelsen:** Something-something Bitcoin.

**Tess Rinearson:** Yeah, that's usually where I start. My house party explanation always begins with "Do you know what Bitcoin is?" 95% of the time people say yes, so I'll just take it from there. The blockchain generically is the infrastructure that powers Bitcoin. It's all of the distributed systems and cryptography in that design, that powers Bitcoin and allows for this decentralized ledger. And the decentralized ledger is the blockchain.

You can use that infrastructure to power all kinds of other things. The system that I work on at Chain is sort of like a blockchain for generic assets. We work with financial institutions like NASDAQ or VISA, who have other assets (non-Bitcoin assets) that they would like to put on a blockchain to get a lot of those same decentralized benefits without using Bitcoin itself.

**Carlisia Thompson:** Right this second this question came up for me - is blockchain a protocol? I didn't get it.

**Tess Rinearson:** Yeah, that's actually a funny question. I would say no, it's not a protocol... To be honest, the word blockchain right now is a little bit like the word cloud, where maybe if you have seven or eight characteristics and if some product or service matches six of those seven or eight characteristics, then you could reasonably consider it to be a blockchain. So it's kind of like a fuzzy word to begin with.

**Carlisia Thompson:** I guess Chain implemented its own blockchain, right?

**Tess Rinearson:** That's right. We actually have our own protocol as well. Maybe you can think of a blockchain as like the generic category of protocols and services, and then we wrote this protocol called The Chain Protocol, which is a blockchain protocol designed for financial services. Then, we also have an implementation of that protocol called Chain Core, which is what I work on.

**Carlisia Thompson:** \[00:03:56.29\] Makes sense.

**Erik St. Martin:** From what I saw, it was designed more in line with Bitcoin's implementation, where there's kind of like the UTXOs...

**Tess Rinearson:** That's right, we have a UTXO model. A UTXO is an unspent transaction output - somehow you get the TX from "transaction." So that's the basic system that we use, which is the same mechanism that Bitcoin uses.

You can think of the UTXO model as a little bit like being a series of boxes. So if I want to send Carlisia five dollars, I have to go through all of the outputs of previous transactions that I own. I put five dollars into her box, and then that box is an unspent transaction output for Carlisia that she can then unlock using her keys, and transfer to Brian, for example.

**Erik St. Martin:** The UTXOs are kind of interesting because basically when a transaction occurs, you basically absorb the UTXO that they had before and then generating a new one to go to the person that the transfer is going to.

**Tess Rinearson:** That's right, yeah. Every transaction uses up UTXOs and creates new UTXOs that can be used in a later transaction.

**Erik St. Martin:** And the general idea of that is the double-spend problem, right?

**Tess Rinearson:** Right. One of the things that is interesting or tricky is, like you said, this double-spend problem. The double spend problem would be like if I claim to send the same five-dollar UTXO to both Carlisia and Brian, that would be a double spend of that UTXO, and that would be invalid. So that's one thing that blockchains have to track - which UTXOs are still valid and which ones have been consumed already.

**Erik St. Martin:** And now the other implementations you're talking about, I think there's some that just kind of use a ledger and no UTXOs...

**Tess Rinearson:** Yeah, I actually don't know much about the mechanics of non-UTXO blockchains, but certainly there are... I mean, like I said, a blockchain is one of those things where if you meet a certain number of criteria, you call yourself a blockchain, and one of those things could be a UTXO model. So there certainly are blockchains that don't use a UTXO model.

**Erik St. Martin:** I guess from a generic perspective it's a distributed system that maintains some sort of ledger that they validate previous transactions in order to confirm a transaction taking place, and many parties have to go through their own ledgers - whether they're using UTXO or something else - and determining that this is accurate. I guess if you serve that purpose, then you're kind of a blockchain...

**Tess Rinearson:** Yeah, that seems fair. I mean, I would say that also there's an inherent transfer of value in them, but not everyone thinks that, too. I think when you look at a blockchain, you can almost think of the assets (Bitcoin, or whatever other asset you have issued on a blockchain) as tokens of value, and you're transferring them. You have the value if you can prove ownership of the tokens, which you do with your private key.

**Carlisia Thompson:** I have a question. The Chain Core - is it meant to be used by financial institutions that are brokering initial transactions? Or is the idea that there will be a hosted version of blockchain somewhere and the financial institutions will use that?

**Tess Rinearson:** \[00:08:00.17\] Right, so we're working with these financial institutions to spin up a variety of different blockchain networks. In the case of VISA - VISA is running a blockchain network of Chain Cores, and all of their clients have nodes in the system. You asked about a hosted blockchain somewhere - generally, we actually deploy Chain Core into our partner's data centers. Generally, these financial institutions have data centers that they know well and have invested in and are fond of, and so we generally deploy our software in there for them.

That said, we also have this thing called the testnet. Sometimes I joke it's the TessNet, but it's the testnet. \[laughter\]

**Brian Ketelsen:** It's all about you, Tess.

**Tess Rinearson:** Yeah, I know... That's a term that we also borrowed from Bitcoin, where there's a Bitcoin TestNet that sort of runs parallel to the actual Bitcoin system and is reset at fairly regular intervals, and basically just has fake money on it. So we have this Chain testnet, and it's validated by us and Microsoft and IC3, which is this university blockchain research group based at Cornell. We run this system, and people who are just trying to have a node and get on a blockchain can download Chain Core and connect to the Chain testnet without actually trying to spin up their whole entire network. So we sort of have that as almost like a hosted "blockchain" that people can just like log on and play with, without having to start up their whole own network.

**Erik St. Martin:** And now you said most of your customers are using this for financial stuff where they're tracking bonds or actual cash, or things like that?

**Tess Rinearson:** Yeah. What people are using it for is any asset that holds value. That can be stocks, that can be currencies, that can be credit card points, frequent flier miles - all kinds of stuff.

**Carlisia Thompson:** It sounds to me that an entity that could benefit from Chain Core wouldn't necessarily have to be a big financial institution, or even a small financial institution. It could be a business like LivingSocial, if they want to use it for loyalty points, or Groupon. Is that right?

**Tess Rinearson:** Yeah, I think, potentially. We're definitely starting with financial institutions, and we're starting with financial institutions that are well-known enough that they can power their own networks and people will want to join them. That serves the power of this partnership. We just on Friday announced a partnership with VISA and the network that we're working on with them to do business-to-business payments, and it's really valuable to go be part of these well-respected financial institutions, because people trust them enough to wanna join their networks. So we're starting there, but I do think that, generically, anything that holds value is a good candidate for something that can be issued and transferred on a Chain block chain.

**Erik St. Martin:** Yeah, and I think anything that you want validated to ensure that it hasn't been tampered with is also a good candidate.

**Tess Rinearson:** Yeah, I think that's less of a problem that we are solving right now. Obviously, when you're looking at things like validating UTXOs, you have to make sure that transaction history hasn't been tampered with, and things like that. There are so many cool things that you can do with a blockchain...

\[00:12:04.08\] If you look at something like the Bitcoin blockchain, which is this public distributed ledger where everyone has a grade on the history of it, you can do crazy things like prove that you have copyright -- or, I shouldn't say "prove that you have copyright", because that's probably technically-legally something, but prove that you had a piece of IP at a certain time.

If I wanted to prove that I wrote a paper, I can hash that paper and stick that in the metadata of a Bitcoin transaction and then put that on the Bitcoin blockchain. And if anyone's like, "Oh, did you actually have this paper at this time?", I could just point them to that transaction and give them the hash function and give them my original paper, and be like "Hey, validate this for yourself.

And because in Chain's case we're not talking about public networks, we're talking about private networks, you lose that ability. But there's other benefits to having a private network.

**Erik St. Martin:** Right.

**Carlisia Thompson:** And when you're generating keys, who is actually validating those keys? Is Chain an authority to validate those keys, or is some distributed system...? How does that work?

**Tess Rinearson:** Yeah, every node in the system can validate every transaction, and then there are certain -- I don't wanna get too much into the mechanics of all of it, but every node in the system can validate transactions, and then when it comes to actually creating new blocks and adding those new blocks to the blockchain, we do use a federation of signing nodes that are actually responsible for checking every transaction and signing of a block, and saying, "Hey, this block is cool. You can add it." Every node can actually validate, if they want. They just don't get to add their signature; they can just validate themselves.

**Carlisia Thompson:** Who has control over this federation?

**Tess Rinearson:** In the case of the testnet it's us, Chain, and Microsoft and IC3. We are the three signing nodes in that network. But that's configurable on a network-by-network basis, and actually in the protocol we have a field for the consensus protocol, which can be changed on a network-by-network basis. For testnet, a block can see signatures from Chain, from IC3 and from Microsoft, but there's definitely space in the protocol to refine our consensus system.

**Carlisia Thompson:** Cool.

**Brian Ketelsen:** So what's the application for GopherCon? That's the real question here. Can we start making chains of things that we can give out to gophers and let them trade value? We can have like gopher points... Trade them in for plushies.

**Tess Rinearson:** Yeah, that's definitely a thing you could do. You could have every attendee at GopherCon have their own asset that's issued by their... One thing I didn't really talk about, but if you're familiar with Bitcoin or you're probably familiar with mining - which is used for consensus, but it's also the process by which new Bitcoin is created... And because you have a system for generic assets that often tie to real assets that are held somewhere else, assets on a blockchain are issued and are tied to a private key. Then, basically, to redeem your asset, you have to take it back to the asset issuer and say, "Hey, I see that you signed this with your key."

\[00:15:58.12\] So what you could do at GopherCon is every attendee could issue their own asset, tied to their own key pair, and then maybe for each person you meet, you can issue them one token, and then whoever has the most tokens wins, or something.

**Erik St. Martin:** I say we go bigger. We call GitHub, and contributing in Go gets you -- that's how you mine, by committing in Go. \[laughter\]

**Tess Rinearson:** Oh, yeah...

**Brian Ketelsen:** Interesting.

**Tess Rinearson:** Yeah, I feel like every year at GopherCon... I make all these big plans to do some open source work, and it hadn't happened until Monday, when we open-sourced new stuff. But I definitely think GopherCon gets me in the open source spirit, and then generally I fall through on that.

**Brian Ketelsen:** Well, you delivered big for this year, so you've done your part. We need to take a quick sponsor break, but when we come back, remind me to ask you about how this differs from the blockchain that IBM announced earlier this year.

**Tess Rinearson:** Okay.

**Break:** \[00:17:03.27\]

**Brian Ketelsen:** Alright, so how does your blockchain differ from the one that IBM released? I saw a press release - it was really early this year - that IBM had released some sort of business-oriented blockchain. Is that different? I think there was Go code and Java code... I don't remember all of the details.

**Tess Rinearson:** Yeah, I don't actually know exactly what they're working on. There are a lot of different blockchain systems out there, and I tend to be pretty heads down on what we're doing here. One thing definitely - and I don't know if this is the case with their blockchain, but definitely one reason why we open-sourced was to really just show our hand and communicate our ideas as effectively as possible. We've been planning on publishing our protocol for a while...

One thing about blockchains, like I said, is there's a lot of them. With some of them it's just hard to know what's really going on beneath the surface. There's a lot of press releases or white papers, but not too many in-depth protocol documents and even pure implementations. So one reason why we went open source is just to really communicate our ideas about what a blockchain can and should look like as clearly as possible, and also to show the world that we have something very real. And also to show the world that you can just go download a Chain Core node and write it on your computer, and connect to testnet and it all just kind of works. I mean, knock on wood, it all seems to be working.

**Brian Ketelsen:** So you're telling me blockchain technology is a little bit like vendor management solutions for Go - there's a lot of hype and not a whole lot of action?

**Tess Rinearson:** It's a hot subject, to be sure... \[laughter\]

**Erik St. Martin:** I think anything academic like that is. Before Raft, trying a distributed consensus - it was mostly white papers and things, and you're like "This sounds cool, but how do I build it?"

**Tess Rinearson:** \[00:19:55.25\] Yeah, totally. It's funny that you bring up distributed consensus, because obviously that's a huge part of blockchains as well. There's so many papers on different consensus algorithms, and a lot of blockchains are using PBFT (practical byzantine fault tolerance) as a backbone, if not actually implementing PBFT itself... And I found this funny academic paper from 2011 that was discussing the realities of using PBFT in production, and there's this little line hidden in the middle of the paper, that's like "As far as we know, nobody's actually done this in production." \[laughter\] That was in 2011, so you know... There's a lot of speculation, and we're trying really hard to move ourselves and move our corner of the industry out of that speculative, white paper, (sometimes) PowerPoint-based world, and into this place with servers and code and real networks, and people actually transferring things to one another.

**Erik St. Martin:** What did you end up using for your consensus protocol?

**Tess Rinearson:** We use something related to PBFT, but we basically have - again, without getting too into the nuts and bolts of it - a single node that we have been calling the generator node, although we've just started discussing changing that to the block proposer, that is responsible for gathering the transactions along the network and creating a new block. This is in a lot of ways a single point of failure, but the other nodes in the system basically can audit it and can halt the system if the block generator fails.

In the case of these financial networks, that's actually not a bad thing, because if some institution in the network is going rogue, you have a bigger problem than the state of your databases; you have sort of an organizational problem that has to be dealt with offline. So the fact that we use that as our consensus model, again, for now, there's room in our protocol to refine and improve. That system gives us much better performance than something like proof of work, which is what Bitcoin uses.

**Erik St. Martin:** So by putting it out there open source, were you hoping for contribution, or is this mainly to get people using it and coming up with use cases...?

**Tess Rinearson:** Yeah, we're not looking... It's this funny thing - we are not looking for contribution in the same way that a lot of other open source projects are. It really is about communicating ideas as much as we can.

It's this funny thing, where we have a product roadmap and we're very driven by our work with our partners, so if people have things that they wanna contribute, or find bugs or things like that - that's awesome. But it's not the driving force behind open-sourcing.

**Brian Ketelsen:** I think your license choice kind of proves that point - it's AGLP license, isn't it?

**Tess Rinearson:** Yeah, it is. That's something that we've actually gotten a lot of feedback - especially from the Go community - about. This is a community that we respect and that matters to us, so that's something else that we've been discussing and we're talking to our lawyers about. It's this balance between... This is like our product, that we are selling, right? So I think the business team is reluctant to choose too permissive a license, but at the same time we don't wanna discourage people from playing with it and hacking on it and building cool things with it.

**Brian Ketelsen:** \[00:24:03.26\] I saw a Twitter exchange two days ago between two unnamed Gopher Google employees who said they couldn't even open it. They're prohibited by their company from even looking at AGPL source code. That's kind of sad.

**Tess Rinearson:** Yeah... I mean, I think it's both... Disclaimer - I know very little about licenses. I sort of have been blessed with not having to think about licenses very much at all until this week, actually. But yeah, I think it's a balance between figuring out how much of that is caution or maybe even paranoia on the part of a company, versus something that is actually like a real concern for a lot of people. So we're figuring it out... We'll iterate.

**Brian Ketelsen:** Well, it's a tough topic to tread, I totally get that. As a business, you don't want to give away the thing that makes you a business...

**Tess Rinearson:** Exactly.

**Brian Ketelsen:** ...but you wanna participate in the open source. It's not easy. I don't mean to sound like I was picking on you, I'm just curious.

**Tess Rinearson:** No, I'm glad you brought it up. I'm glad I get to say... We have been talking about it, and we definitely have heard this community, and the Go community matters to us, so we're figuring it out.

**Erik St. Martin:** And for anybody who's not familiar, my understanding of the differences between the AGPL and the GPL is that the AGPL kind of adds a clause where... So, in a typical GPL application, if I run a web service and I have users of my web service, I'm not required to give them the source code. But if I package it as a product and give it out, then I need to give out the source code. And the AGPL adds a clause where basically if network people are even using your application over a network, then you're required to provide... So I think that's kind of why people are reserved, because if they feel like if they use it or they see the code and are influenced by it, that if anybody touches their code through the network, then they have to give up the source code.

**Tess Rinearson:** Right.

**Erik St. Martin:** And I think that's where the concern comes in. But again, I'm not a licensed person either, but I just remember that being kind of a... But from your standpoint, it kind of makes sense too, right? Because people could take this, stand it up somewhere, offer a service and compete with you, right? Because they're not offering it as a product that's being put... I guess you couldn't do on-premise, because then they would have to give the code, but...

**Brian Ketelsen:** I don't know... I've always had the argument that it's not all of the source code that makes the business, it's the people and the business knowledge in those people that makes the business. You can give away all of the source code you want; it takes a lot more than 2,000 lines of code to turn that into a real money-making business, and that's why entrepreneurs are rare, and successful companies are rare. There's a lot more to it than just standing up a couple servers and borrowing free open source code somewhere.

**Tess Rinearson:** Yeah, I mean... I don't know where we're gonna land on it, to be totally honest, but it's an interesting problem and it's one that we're thinking actively about, I'll put it that way.

**Erik St. Martin:** So let's talk about things we do know, which is Go. What's your experience been building this in Go?

**Tess Rinearson:** Oh, I'm so glad I'm building this in Go. It's funny, because part of the reason I joined Chain was to write more Go. I think Go is obviously a natural choice for a distributed system, and... Yeah, I don't think I really have anything too concrete to point at, but...

**Erik St. Martin:** \[00:27:56.20\] Have you had any stumbling blocks, things that you ended up having to implement because they didn't quite exist?

**Tess Rinearson:** I don't think so. Go actually kind of saved my butt last week in an unexpected way. I was working on writing this Windows installer. I'm not a Windows user normally; I have a lot of love for Microsoft, I interned there, but I'm not a Windows user in my current incarnation, but it turns out a lot of financial services people are. So I was working on this installer that would basically take our Go binary and stick it in application files and give you a shortcut on your start menu, and all those things. And I was just struggling so much with this unfamiliar Windows installer system, that what I ended up doing was writing another Go program that shells out and does all the hard work...

**Brian Ketelsen:** Oh, nice...

**Tess Rinearson:** I cross-compiled that from my MacBook and packaged that in with everything else in the Windows installer, and then that kind of just runs and does all the heavy lifting. So after a few days of wrestling with various unfamiliar Windows concepts, I was like "Oh, I have this great multi-tool in Go", and I just used that.

**Brian Ketelsen:** Let me just bust out my Swiss army knife here.

**Tess Rinearson:** Yeah, totally. It was pretty awesome actually how easy it was once I leapt to that.

**Brian Ketelsen:** It is kind of awesome. I was as OSCON last week teaching the Kubernetes class, and it was a whole room full of people that had never seen Go before. I was on my Mac, and I had an app - I built it on the Mac, I ran it and then I cross-compiled it and deployed it to a server and ran it on a Linux server. And somebody sitting in the back goes, "What did you just do there?" and I said, "I compiled it for Linux, and SCP-ed it up and ran it on the server." They were just blown away... "How can you cross-compile something that quickly?"

**Tess Rinearson:** Yeah, it's so easy...

**Brian Ketelsen:** Go... Go. Big hugs for Go.

**Tess Rinearson:** Yeah, it's freaking easy.

**Erik St. Martin:** I don't even think about the pains of cross-compiling anymore. Before, any time you had to support multiple architectures and operating systems, you were like "Oh, Jesus...", especially with things like C... Now, I don't even think about it, I just write code. I might have to fix a bug or two when I try to deploy it out to Windows, but...

**Brian Ketelsen:** That's because you forgot to use the correct file path thing, right?

**Tess Rinearson:** Yeah, fortunately I don't have quite enough career history, but I have battle scars from that. It sounds awful, and I'm so glad... I sort of feel like I've come of age with this language that makes it so easy...

**Erik St. Martin:** I think this language is really good for making systems-level programming more approachable to people.

**Tess Rinearson:** Yes. In a lot of ways, it's my first systems language. Before I was at Chain, I worked at Medium, and I was pretty full stack. Eventually, I had to learn Go to work on a new service. It was the social graph service - if you recommend something on Medium, then all of your followers can see it, the infrastructure that powers that kind of thing. I was a little bit reluctant to learn a new language. It was just silly. I was 20 years old and already curmudgeonly about it... But I was like, "I've been doing everything in JavaScript, I'm comfortable with this."

\[00:32:03.11\] Learning Go and writing this new service in Go gave me a whole new perspective on building web services, and it was this sort of sweet spot of usable, but still reasonably close to the metal; not too abstracted, so I could still understand what was going on, especially coming from Node, where there's a lot of frameworks and things tend to be very abstracted... Scraping some of that off, and being able to have that perspective on building web services was very empowering to me. That sense sort of spurred this interest in systems that has lead me to working at Chain.

**Erik St. Martin:** So getting into Go has kind of brought you more into systems programming and learning about distributed systems?

**Tess Rinearson:** For sure, yeah. Absolutely. I mean, it really did help make things more approachable and more tangible. I went to college but I didn't finish, so I didn't take a lot of the distributed system classes and other things like that, that you might take in your third or fourth year of school. So all of this has been very "What am I going to learn on the job, with the tools that I have?" and Go has been a very good tool for making all this stuff approachable and tangible.

**Erik St. Martin:** You're in good company, I never went to school for any of this either...

**Tess Rinearson:** Cool!

**Erik St. Martin:** ... and I learned a lot more about distributed systems and stuff after moving to Go... Because that's what everybody's doing with it. Especially early on, with the codebases, you were kind of looking around to learn the idioms and stuff, so you started kind of picking stuff up along the way, like "Oh, what's this? I wanna learn more about this!"

**Tess Rinearson:** Totally.

**Carlisia Thompson:** One thing with open source, if you're building a project that you are planning to open source, I think you would be thinking to be more careful in the way you are structuring the project and best practices, maybe more than a project that's not open-sourced, and I'm wondering if Chain has a set of guidelines that the team uses for design and for implementation?

**Tess Rinearson:** Yeah, so it's funny... We actually didn't know we were going to open source this until July, and we've been working on it for over a year. It's funny... This is kind of corny, but when I think about the lifecycle of this project, I actually think about GopherCon a lot, because we started building our own system after a conversation I had with our CTO at GopherCon 2015. Then, at GopherCon 2016, this year, I basically got a phone call from my team - I was the only one at GopherCon, so they call me, being like "Hey, we're planning on open-sourcing"... So both GopherCon 2015 and GopherCon 2016 were milestone moments for this project in this funny, coincidental way.

**Erik St. Martin:** You're counting in GopherCons...

**Brian Ketelsen:** Milestones for everybody, though... It's not just the project, it's GopherCon.

**Tess Rinearson:** Right, I think that's how the world measures time now, right? By GopherCons...

**Brian Ketelsen:** Yeah... That was three GopherCons ago.

**Tess Rinearson:** Right. \[laughter\]

**Brian Ketelsen:** Actually, Brad Fitzpatrick did that to me two or three days ago -- no, last week. I hacked Docker into Go's present tool, so I could run a Docker container inside a slide, and I was so proud of myself... So I tweeted it, and Brad's like "I did that three GopherCons ago." I was like, "Oh, son of a gun!"

**Tess Rinearson:** Harsh!

**Brian Ketelsen:** Yeah... Boy, did that hurt.

**Erik St. Martin:** \[00:35:59.16\] Not only were you late to the party, you were three years late to the party.

**Brian Ketelsen:** The first GopherCon. That's how we measure time now - three GopherCons.

**Tess Rinearson:** Yeah. Anyway, to jump back to Carlisia's question about open source versus non-open source codebases and the way that you build them - we did not start building Chain Core with open sourcing in mind, but we always had pretty rigorous guidelines around even like commit style. And early on we had a lot of conversation about what should go into our style guide, and some of that actually made it into the formal style guide and some of it just sort of became community knowledge at the company. But really, the only things that we had to do when we open-sourced were 1) we did not open source everything.

What we open-sourced we called Chain Core Developer Edition, and that's most of the guts, most of the logic, most of the interesting blockchain stuff is in there, but we do have other features around security and scalability that we withheld from the open source project. If you are a financial service paying us for an enterprise license, you get all of that good stuff too, but we didn't open source that. So we had to figure out how to split out monorepo for that, and then additionally we also had a small amount of company confidential information that we had to scrub from the Git history, but that wasn't too big of a deal either.

Ultimately, it was a little bit of cleanup around the edges, but the code itself really didn't change. Oh, I think we also wrote some more package docs before open sourcing, but by and large we didn't have to change too much.

**Brian Ketelsen:** Yeah, that's always my big thing. I write a bunch of code, and I think "Oh, I should release this on GitHub" and "Oh, I can't do that... There's no Go Docs. Can't do it." And I spent two days...

**Tess Rinearson:** Oh my god... Wow.

**Erik St. Martin:** See? Brian does the reverse to me, though. Like "You should open source that." "No. There's not really good test coverage, there's no docs, I'm not all that proud of the code..." "You should open source that", and then he'll open source it for me. \[laughter\]

**Brian Ketelsen:** Just once.

**Tess Rinearson:** That's so funny.

**Brian Ketelsen:** Maybe twice.

**Erik St. Martin:** Once he did it and then wrote a blog article about it. Like, "Oh, man..." \[laughter\]

**Tess Rinearson:** Surprise! \[laughs\]

**Brian Ketelsen:** Erik doesn't take enough credit for his awesome work. I'm just helping him.

**Tess Rinearson:** It's always good to have a friend who does that.

**Brian Ketelsen:** See? You need a champion in your corner.

**Erik St. Martin:** I just wanna build stuff.

**Brian Ketelsen:** Well, that's a good segue into our next sponsor.

**Break:** \[00:38:41.28\]

**Erik St. Martin:** So in prepping for this, you had sent an email and you were mentioning a side project that you had, and I always love fun side projects.

**Tess Rinearson:** Yeah, this is kind of a funny one. I almost even hesitate to call it a side project, because that suggests sustained work over months, building towards something really awesome, and this is just something I play with. But you asked if I were going to hack on something this weekend, what would I hack on, and the answer is this funny thing I wrote, this little app that connects to Twilio. So when anyone rings the buzzer to my apartment building, it actually calls a Twilio number which then goes through this Go app, and then calls my phone... Maybe.

**Brian Ketelsen:** \[00:40:11.09\] Nice!

**Tess Rinearson:** Yeah... The reason this is cool -- so when I wrote it initially, I just wrote it because I have a Seattle phone number. I grew up in Seattle phone number, I'm really happy with it, proud of it, I don't wanna get rid of it, but the call box to my apartment requires a local San Francisco number. So the reasonable solution, the easiest solution is probably just to get a Google voice number and set up call forwarding, but I was like "No, no... What if...?"

**Brian Ketelsen:** We have a much better solution for this!

**Tess Rinearson:** Right! So part of it was like "What if I wanna do something else with it in the future?" Then, the other part of it was like, "Oh, but it would be so much more fun to write this myself", so I actually recently came up with the "Oh, here's actually why this is useful" piece of it, which is that I tried to sign up for a CSA, a grocery box, with this company... It's pretty cool, actually - they take vegetables that don't meet FDA standards for aesthetics and they sell them...

**Erik St. Martin:** It's got a brown spot?

**Tess Rinearson:** Yeah, totally. Or an onion that's too small, or a carrot that has two legs, or all these things that make something inappropriate for a grocery store, but they're still totally edible and delicious. I kind of got into this when I was living - this is also a cliché - in Berkeley, and my roommate in Berkeley has a food startup, and he'd bring home these big boxes of these "ugly" vegetables. So I was like, "Okay, great. I'm gonna sign up for this", but they only deliver between midnight and six in the morning, and I live in a part of San Francisco where if someone leaves a box of vegetables on the steps outside the apartment building, it will be gone in like 15 minutes.

So the solution that the company suggests is that you give - this is turning into a very long backstory - a key to your building to them. And I was like "Yeah, I work at crypto... I don't feel good giving a key that I can't rotate to some company." So I was like "Oh, I know... I will write a code into my callbox app", so that if someone comes up, dials a number and then puts in the code within ten seconds, the Twilio app plays back a dial tone that I found online that matches the right, you're supposed to press nine, so it plays the tone for nine back to the buzzer, and the buzzer unlocks the door. So I can get deliveries in the middle of the night without getting woken up.

This will be a problem when the person delivering the vegetables does not enter the code in time and then I get a phone call anyway. But until that happens, that's my grand plan. So that's what I've been doodling around with lately.

**Carlisia Thompson:** Wow.

**Erik St. Martin:** And you can audit log. You get to know when the door opened and they came in.

**Tess Rinearson:** Yeah, I should definitely build that in. It's funny... That's like a really obvious...

**Carlisia Thompson:** And then, of course, build the dashboard. Maybe use Prometheus.

**Tess Rinearson:** \[00:43:48.16\] Yeah, these are all v2 things. Honestly, I haven't worked really on anything but Chain stuff for the past two months, just because we were trying to get everything in ship shape, and we had some product... You know, in addition to open-sourcing, we had product stuff that we were announcing too, so I've been pretty heads down on the Chain codebase for the past two months. But yeah, I'm excited to get back to my doorbell project.

**Carlisia Thompson:** Did that involve a screwdriver? That's what I wanna know.

**Erik St. Martin:** Did that involve a screwdriver? \[laughs\]

**Tess Rinearson:** It does not involve a screwdriver yet. \[laughter\] How did your screwdriver thing work out, by the way?

**Carlisia Thompson:** It worked out. I needed to do some exercises with my hands, but it worked out in the end.

**Tess Rinearson:** Awesome. \[laughter\]

**Erik St. Martin:** Well, your Twilio makes doing phone stuff so awesome. Prior to that I had done some stuff with Asterisk and FreeSwitch. You had to build in and talk over a socket to these things, and stuff like that, to build IVR - Integrated Voice Response is what they call the systems where you call in and interact with them. But then you had Twilio, and there's another one - Plivo - that I know of since they've come out; you just get an API and you just have to expose a web service for it to call out to. It's so much easier to just throw stuff together.

**Tess Rinearson:** Yeah. It's funny, Twilio is a little bit - as I learned on this project - of a pain in the butt in Go, because there's no Go SDK, and I think most people generally use SDKs, and everything else is XML.

**Erik St. Martin:** Right, yeah.

**Tess Rinearson:** So on this project I learned about... You know, I've never had to use Go's XML tooling before, but I learned a little bit about that, too.

**Erik St. Martin:** Just kind of using structs and encoding it to XML.

**Tess Rinearson:** Exactly.

**Brian Ketelsen:** It works... I've done it once. It's painful, but it works.

**Tess Rinearson:** Yeah. I mean, it's not the most fun, but it works, and there's not really any surprising behavior, which I feel like sometimes with web stuff is as good as it gets - no surprising behavior. \[laughter\]

**Erik St. Martin:** I think people now live in a time that's much easier... Like, I remember web development when you really had to test individual browsers, because you had to write CSS that accounted for the differences between them. Like, "No more IE 6"... I remember when people had icons on their website for that, you know?

**Tess Rinearson:** Yeah...

**Erik St. Martin:** It was like their badge of "I refuse to support IE 6 just because of how much time it takes to make it work in IE 6." So glad that's over.

**Brian Ketelsen:** When I was a kid, we only had one browser. \[laughter\] And it was Lynx.

**Erik St. Martin:** I thought you were gonna say Netscape.

**Carlisia Thompson:** Netscape, that's what I thought.

**Brian Ketelsen:** Well, Netscape wasn't the first browser.

**Carlisia Thompson:** But then, if you think of Gopher and Lynx, those were browsers, too.

**Tess Rinearson:** I don't think I have even heard of Lynx before.

**Erik St. Martin:** It's basically the console-based web browser for Linux.

**Tess Rinearson:** Wow.

**Carlisia Thompson:** Yeah. No image, just text.

**Brian Ketelsen:** Just text.

**Erik St. Martin:** I still use it sometimes, I can tell you. When I SSH-ed into some server and I need to curl or wget a file, and I don't obviously know the whole address to anything, I'll open up Links through the SSH session and go to the website and find that link that I need to download in.

**Tess Rinearson:** I'll check that out and just play around with it.

**Brian Ketelsen:** Don't do it. Really, I don't recommend it.

**Tess Rinearson:** Wow, okay...

**Brian Ketelsen:** It's not worth it.

**Erik St. Martin:** You know you're only making it more tempting, right Brian? \[laughter\] Like, "What is it that's so bad he doesn't want me to see?"

**Carlisia Thompson:** I'm like, "Do it, do it, do it!" \[laughs\]

**Tess Rinearson:** I know. It's like all of us young kids who don't know how good we have it, we have to go poke at it.

**Brian Ketelsen:** \[00:47:54.13\] It's funny, I was thinking... My first website was some place I had to spend $10/month to buy a shell account on a Unix system. That was back in the days when you got a username and they put the little tilde in front of it, and that was your website. BlahblahblahHosting.com/~BKetelsen. You couldn't change your username, you couldn't have a domain name pointed at it, and you had a public HTML directory in your home folder and that's where you put your files.

**Erik St. Martin:** With FTP...

**Brian Ketelsen:** Those were the days.

**Carlisia Thompson:** I was sort of lucky in that way, because when the internet started - and by that, I mean nobody knew about it, but it existed - I was in school, so I got all of that for free. A modem connection for free, a dial-up number I could call for free, I got my web space, I got my email account - everything through school and it was free.

**Tess Rinearson:** Sounds awesome.

**Brian Ketelsen:** Nice.

**Erik St. Martin:** My favorite story about young years and internet coming out was I stayed home sick from school one day and we had this CAD class; it was the room that had the most computers in it because they were doing computerated design on it. And I stayed home... I had basically backdoored one of the computers and I put trojans on all of them. \[laughter\] And I turned off the screens in series, because the computers were named in order, and then opened up the CD-ROM drives and then went back the other way... Back then it was funny; you didn't go to jail for stuff like that.

I came to class the next day... My teacher's like, "Very funny. You know you're coming in after class and removing whatever it is that you put on these machines, right?" \[laughter\]

**Brian Ketelsen:** Yeah, today you'd be in a federal prison.

**Erik St. Martin:** Yeah.

**Tess Rinearson:** Yeah, I have a good friend who in high-school got in trouble for even pointing out security vulnerabilities in his school's network. They were like, "Oh, if you've noticed these things, it's totally predictable..."

**Brian Ketelsen:** You're hacking.

**Tess Rinearson:** Yeah, yeah. And this was maybe like six years ago.

**Carlisia Thompson:** Yeah, I used to... When I joined a new company, I would browse around just to see what level of security this company has, and what kind of engineering this company has. So I'd browse around, and one time I browsed through my manager's -- it was a Microsoft system and everybody's folders were right open; I was browsing through my manager's folders... I saw them, but I didn't go into them, because if I see something, I can't unsee it, and then I don't have plausible deniability. Of course, nobody knows me, but I didn't look at the things. But I told her. Man, did I get in trouble. It was not fun, so I'm like "Okay... You're welcome." \[laughs\]

**Erik St. Martin:** Most people get the basics wrong... You know, SQL injection, cross-site scripting, cross-site request forgery, remote and local file inclusion issues... Because most of it all comes down to not sanitizing inputs. You take a form field and then just stuff it in your command that you run on the command line, and don't really think about what could be done there. Those typically tend to be the things that people find.

**Tess Rinearson:** Yeah.

**Erik St. Martin:** There's the true elite stuff, where somebody spends six months to reverse engineers some odd protocol for your piece of hardware, and then manages to hack you. But for the most part, these things are the basics everybody skips over.

**Tess Rinearson:** Yeah, or they're social. I feel like so many stories I hear about people's accounts getting hacked have to do basically with hackers lying to customer support people.

**Erik St. Martin:** Oh, yeah... Social engineering.

**Tess Rinearson:** Yeah... Forget not sanitizing your inputs; people are people.

**Erik St. Martin:** Well, it's easy though. Like... Acrobat. I remember there was one Defcon where they threw a zero-day party where you could attend the party if you had a zero day for Acrobat. There was that many zero days that they threw a party for people who had one. So it's things like that... All I have to do is get you to open a PDF in Acrobat, and done.

\[00:52:14.03\] Even Excel has remote code execution issues where you can... Yeah, so it's that type of stuff that people get hit all the time with, and unless you live in a paranoid world...

**Tess Rinearson:** Right, right. Sometimes I think about security stuff and I'm like, "Being secure is so much work." It's just exhausting.

**Brian Ketelsen:** Well, there's no such thing as security. All there is is different levels of risk. There's no system that's completely secure, especially when there's humans involved.

**Tess Rinearson:** Totally.

**Erik St. Martin:** Yeah, I mean every bit of security comes at a cost of usability. I have problems too, even at home... I'll have two isolated Wi-Fi networks. I have one for people who come to my house and I have my own. And then at some point I forget what the guest network is, or I'm just lazy, and I'm like "Here, let me put you on the regular one." And that's the stuff that bites, it's because that kind of laziness and not following the process.

So who wants to talk about any news?

**Brian Ketelsen:** Oh, I've got some news. Hang on, let me get my guitar.

**Carlisia Thompson:** Yes!

**Erik St. Martin:** Oh, no...

**Carlisia Thompson:** Oh, yes!

**Brian Ketelsen:** Alright. So the word on the streets is it's Bill Kennedy's birthday... And here at GoTime we love us some GoingGoDotNet, so everybody is going to sing with me Happy Birthday To Bill.

**Erik St. Martin:** I am totally not singing with you.

**Brian Ketelsen:** Are we ready?

**Carlisia Thompson:** Let's do this!

\[singing Happy Birthday, accompanied by guitar\]

**Erik St. Martin:** The lag is so bad!

**Brian Ketelsen:** I don't feel like we're synchronized here.

\[continuing the Happy Birthday song\]

**Brian Ketelsen:** This is the most pathetic birthday song ever... Sorry, Bill. \[laughter\]

\[finishing the Happy Birthday song\]

**Brian Ketelsen:** Alright, there you go.

**Tess Rinearson:** Wow, that was really hard.

**Erik St. Martin:** Yeah, you don't notice the lag until you try to do something...

**Brian Ketelsen:** Remind us not to sing on a podcast again... That was bad.

**Tess Rinearson:** Yeah, alright. I'll check that one off my bucket list and never return.

**Brian Ketelsen:** Put that one in the show notes, "Don't sing on podcasts together." \[laughter\]

**Erik St. Martin:** So the fun thing though is I think in post-production they can realign everybody.

**Tess Rinearson:** Wow!

**Brian Ketelsen:** I don't think it's possible to realign that mess.

**Carlisia Thompson:** We're not a bunch that can be realigned...

**Tess Rinearson:** Can they autotune it, too?

**Erik St. Martin:** \[laughs\] Oh, now I really wish I did sing, because then I could have been autotuned, and that would have been hilarious...

**Tess Rinearson:** To be clear, I was asking for myself. But yeah... \[laughter\]

**Erik St. Martin:** Yeah, so each of our channels is recorded individually I believe, so that would allow them to shift everybody to cut that part out and then shift...

**Brian Ketelsen:** ...and get the autotune out. Somebody's gonna have to autotune me.

**Erik St. Martin:** So for anybody who's listening to this, the recording of this - if that did not sound terrible, thank Jonathan Youngblood who does the post-production. \[laughter\]

**Brian Ketelsen:** Well, it's gonna sound terrible no matter what.

**Tess Rinearson:** I mean, it'll be charming, like an elementary school fingerpainting kind of thing.

**Brian Ketelsen:** I think it will.

**Erik St. Martin:** Just terrible in a beautiful way...

**Brian Ketelsen:** It comes from the heart, Tess. As long as it comes from the heart, it's all that matters.

**Tess Rinearson:** Yeah, exactly.

**Brian Ketelsen:** \[00:55:49.21\] Alright, let's talk about some interesting Go projects and news out there. So the one big thing that came out across my desk was the review dog software, which is kind of slick. It's a Go application that allows you to add vetting to your Git repositories, and it will automatically do whatever level of vetting you choose, and then add those vet hits as comments to your Git pull requests. Kind of slick... It works not just with Go, but with any language that has a vet tool, and I think it ships with vetting capabilities for most of the popular languages. It looked like a really slick little addition to keeping your codebase clean.

**Erik St. Martin:** Yeah, it was really cool because it adds... It's like having an automated person do code reviews and it adds comments to the line in the PR, or these things that got caught in the vet or lint. It looked like there was a way to run it locally too, to see what it was gonna do. You could pass in your gifs and things like that, and then it basically uses the error format (kind of like Vim) so that it can display it to you in a pretty way.

**Carlisia Thompson:** I love this.

**Tess Rinearson:** That sounds awesome.

**Brian Ketelsen:** Yeah, it's really cool.

**Tess Rinearson:** I wanna look into that for our project.

**Carlisia Thompson:** Same here.

**Brian Ketelsen:** So another bit of news... There is now a default Go path for Go 1.8, when Go 1.8 goes out. /go in your home directory; whether that's on Windows or a Unixy system, /go will be your default Go path if you don't set one, which means you now no longer need to explicitly specify a Go path. I don't really like /go as a choice, but I don't really care what color that bike shed is, because it's gonna make it a lot easier to get beginners onboarded with Go now, and I'm really excited about that.

And I'd like to that personal responsibility for that, because I sent a ping on the GitHub repository, and the next responder was Rob saying, "Okay, let's do this!"

**Carlisia Thompson:** Nice!

**Brian Ketelsen:** So I think I pushed him over the edge.

**Carlisia Thompson:** Nice, good work. I wonder what people are thinking about when they see the Twitter, so many people so excited about this. Because on one hand, I think you have people thinking "What's the big deal? It's not so hard to set your path." On the other hand, people might be thinking, "Oh my gosh, it must be so hard to set up Go that people are so excited about this." So they are both right, but from the perspective of a beginner or somebody who does code but is not necessarily dealing with the bash profiles of the file, or setting up requirement variables... This is a big deal. It's not so hard to set up Go; basically, that's all you need to do - you have to install and do that, and you're ready to go, as opposed to other languages I know.

**Erik St. Martin:** I think it's just another step, right? Every time you have to take multiple steps just to be able to try something out.

**Carlisia Thompson:** But it's not just another step, I think. For people who don't do that on a consistent basis, for them it's far... And even if they have done it in the past, it's just something so far, and they're like "Oh, where is it? How do I even save it? How do I edit it?" And just eliminating that is, "Wow!" Now, it just cannot get any easier than this, I don't think.

**Tess Rinearson:** Although I do feel like in order to really make the most of a lot of the things that make Go awesome - like Go fmt - you need to configure these things and you need to noodle around in your Bash profile or set up your editor to run these things. So I'm totally with you, Carlisia, in that I'm really glad that for a lot of people this removes the need to think about that level of your system setup, but at the same time I'm looking forward to maybe more elements of the Go ecosystem being that automatic for beginners.

**Erik St. Martin:** \[01:00:07.26\] Yeah, anything we can do to make the language itself and the tooling more approachable... And it's funny, because when you're in that area you think about it as like, "What's so hard about setting a Go path, because you're so used to it?" I like to compare this to the Ruby on Rails world; I came from there. Ruby was awesome, I used it for years, and it's like it's so easy until I tried to have a friend who wasn't familiar with it set his environment up. It's like, "Well, first you have to install rbenv, and then Bundler, and then you gotta do this..." Getting lost along the way, and it's like this hour-long process just to get set up to teach him some Ruby. It's like, wow...

**Brian Ketelsen:** And then it fails.

**Carlisia Thompson:** And it's hard to even explain what you're doing... It's like, "How do I even explain this?" \[laughs\]

**Brian Ketelsen:** Yeah, somebody on Twitter the other day said, "Well, if you can't set an environment variable, you have no business programming", and that infuriated me.

**Erik St. Martin:** That's not fair.

**Brian Ketelsen:** Actually, I walked away from feeding the troll, but I was so mad... Because everybody has to start somewhere, and I'm sure the person on Twitter who said that started somewhere too, and it just frustrates me that we can't have nice things because elitists have their terminal issues.

**Carlisia Thompson:** Yeah, it's hard for people sometimes to put themselves in other people's shoes and see that people have different entry points into things.

**Erik St. Martin:** Yeah, I tinkered with C and things like that when I first started learning programming, but then I went those couple of years where I did PHP development, and I learned the most there because it was easy to just get started and drop files onto a server, and you didn't focus on everything else. And through doing that, I started learning a lot more about systems and stuff like that. But when you don't have that foundation to build on, it's much harder.

**Carlisia Thompson:** But I also wanted to mention that what Tess was saying is a very good point. Sometimes we're so into doing what we're doing, and to us it's easy because we're doing it, but that is a good point - there's still stuff that can be done to make Go easier to use for beginners. I think what we are talking about is the workspace tool that Andrew Gerrand was talking about.

**Erik St. Martin:** I don't think I've seen that.

**Brian Ketelsen:** Well, it doesn't exist. It's a PowerPoint.

**Erik St. Martin:** Okay.

**Carlisia Thompson:** It doesn't exist... We talked about it before. He's not working on it. He got it started, and it's out there for somebody to take over. I don't have a link right now.

**Tess Rinearson:** I think one thing that is really one of Go's strengths - I mean, you're talking about this troll who said, "Oh, this person has no business programming" - is that even though right now the community consists largely of people where Go was definitely not their first language; people have been programming for a long time. There's an interest in making it accessible. And the people who are visible and are leaders in the community, like the three of you, really have actively said that this is important. I think there are other languages or other technical communities where you don't have that, so I think that that alone is enough to get all of it going, I hope.

**Carlisia Thompson:** I think it has the potential for going in that direction.

**Tess Rinearson:** Yeah.

**Brian Ketelsen:** Alright, so we're running overtime, we need to get to our \#FreeSoftwareFridays.

**Erik St. Martin:** We are... So who wants to start?

**Tess Rinearson:** I have one.

**Erik St. Martin:** Go ahead.

**Brian Ketelsen:** Go, Tess!

**Tess Rinearson:** I wanna give a shout out to the go-torch project and the Uber engineering team who worked on that, and Prashant (whose last name I'm now forgetting). We used that tool a ton when we were doing performance work here at Chain. Just really easy to use, and super helpful.

**Brian Ketelsen:** \[01:04:05.27\] That's awesome.

**Erik St. Martin:** Yeah, it's amazing how fast that took off. I think it was Brendan Gregg who started doing the Torch graphs. He's like THE performance guy.

**Brian Ketelsen:** I taught a whole segment on performance measuring, and everybody in the class was just blown away by the whole Torch graphs and how easy it was to do. So yeah, +1.

**Tess Rinearson:** Yeah, talk about making things accessible.

**Brian Ketelsen:** Totally +1 on that one. My \#FreeSoftwareFriday shout out is to Andrew Gerrand, who wrote the Go Tour, which I forked this week and used for my own devilish purposes. But what a well-written piece of code. An absolute breeze to go through and bend it to my will... So thank you, Andrew, for writing The Tour and making it open source. It's such a nice piece of software.

**Erik St. Martin:** I'm actually really surprised that there hasn't been more contribution to the Go Tour, to kind of expand on it. Because that's like a call for help.

**Tess Rinearson:** \[laughs\]

**Brian Ketelsen:** Well, there's a readme in the repository that even gives suggestions for tours that should be submitted. I just think people haven't tried to learn the format for it, which is disappointing because it's the same format for Go's present tool, and that's a great way to help people onboard into the community.

**Erik St. Martin:** I'm gonna volunteer other people.

**Brian Ketelsen:** Somebody should do that! \[laughter\]

**Tess Rinearson:** That's the kind of thing that seems like a great way to contribute to the community. I mean, I think I have found myself in this position where I'm like "Oh, I don't know what I could contribute to", and I definitely know people who are interested in contributing... So that's a good one, I'll keep it in my pocket. I won't volunteer people to the project, but I will volunteer the project to people if they are doing the "Where do I contribute to...?" thing.

**Brian Ketelsen:** There you go...

**Erik St. Martin:** And how about you, Carlisia.

**Carlisia Thompson:** I don't have one today... Forgive me.

**Erik St. Martin:** Alright. So mine - I've just recently found this tool, and I don't know whether they pronounce it all as one, Cinf. It's actually a cool tool for inspecting containers. If you're not familiar, like Rocket, Docker and all these things - they mainly use cgroups and namespaces. I'll link it in the channel for anybody who's listening along.

So it basically allows you to inspect a process and look at the cgroups and namespaces that the process is running with, so you can kind of inspect the CPU stats and things like that from the cgroups, and you can do the reverse too, to see which processes are a part of a namespace. So it's kind of a cool way to inspect your containers and see how they're wired up.

**Brian Ketelsen:** Nice.

**Erik St. Martin:** I've only recently started playing with this, but especially looking at cgroup values for a container or a process running into a container; I'm still used to going into the sysfs directory or in the proc directory and kind of poking around to get the values. So this is really cool.

One of the cool things is there's like a monitor flag where you can sit there and just watch, so you can kind of see your CPU stats change for the cgroup.

**Brian Ketelsen:** Approved. Good one.

**Carlisia Thompson:** I do have one, actually... Can I go?

**Erik St. Martin:** Yeah.

**Carlisia Thompson:** There is a repo from Cory LaNou, it's called "OSS help wanted", and it's a repo for... Basically, you can edit the readme file and list your project. There are projects there organized in all kinds of ways, for example there is one that's "Beginner/intermediate/expert", another one is "All help wanted", "Help wanted/Easy"... So basically, throw your project up there if you need help, with a link to your project, and let's get to it.

**Tess Rinearson:** \[01:08:09.06\] That's awesome.

**Carlisia Thompson:** Go Tour included. We can include it there.

**Erik St. Martin:** Awesome. So we are definitely over time, so I guess it's time to say our goodbyes. I definitely wanna thank everybody who's on the show today, thank you for everybody who's listening live, and everybody who's listening to the recorded version of this. Huge thank you to our sponsors, Linode and Code School for keeping us doing these things. Definitely share the show with fellow Go programmers.

If you haven't subscribed, you can go to GoTime.fm, and we are @GoTimeFM on Twitter, and you can also find us in the GoTimeFM Slack channel.

**Brian Ketelsen:** And we promise we won't sing anymore... \[laughter\]

**Erik St. Martin:** Not overtly anyway... So I think with that, goodbye everybody. See you next week.

**Brian Ketelsen:** Bye.

**Tess Rinearson:** Bye.

**Carlisia Thompson:** Bye, this was fun!
