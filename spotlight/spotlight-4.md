**Adam Stacoviak:** \[00:00:31\] Welcome to our Spotlight series, recorded at All Things Open 2016. I am Adam Stacoviak, editor in chief of Changelog. In this episode I talk with Anna Derbakova from IBM after her jam packed talk on Blockchain and Hyperledger, about the fundamentals of blockchain, how this technology is revolutionizing finance, banking, IoT, supply chains, manufacturing, and any other applications out there that can benefit from a "smart contract". We also talked about the Hyperledger Project and the exciting opportunities that exist in the future for blockchains. Listen in!

\* \* \*

**Adam Stacoviak:** The way we started off, Anna, is -- and you're like me, you've got one of those names that somebody probably butchers... \[laughter\] I'm Stacoviak, and you're...

**Anna Derbakova:** Derbakova.

**Adam Stacoviak:** Anna Derbakova.

**Anna Derbakova:** Yeah, that's fine.

**Adam Stacoviak:** Alright, so do me a favor, tell me your name and where you're from.

**Anna Derbakova:** My name is Anna Derbakova and I live here in Raleigh, North Carolina.

**Adam Stacoviak:** And you work at IBM - what area of IBM?

**Anna Derbakova:** I work in IBM in the cloud group; specifically, I work in the organization called IBM Blockchain, which is a division of IBM that specifically focuses on blockchain technologies, and essentially contributing to the Hyperledger Project and advancing it. The Hyperledger Project is an open source project under the Linux Foundation. It was formed late December 2015, and it's an open source initiative to advance and support blockchain technologies, specializing and focusing on business applications; a lot of companies that have stepped forward and shown support and became partners, signature members - they're on the website, it's really big names like DTCC and DAH and Intel... They're all very interested in business applications of blockchain, such as financial trading or supply chain or any kind of document tracking that have sensitive information.

It's gained a lot of momentum, they're growing the community now. The Technical Steering Committee is very geared toward growing the community, attracting new members, getting people excited about it. The Technical Steering Committee I believe has maybe about 12 members. The chair of the Technical Steering Committee is from IBM, and we're super excited to be a part of the project.
Here in Raleigh we have a really big portion of the development team, so we work on actual code development and contribution to Hyperledger. Also, we have a lot of the testing here. The vast majority of the development team is essentially here. I think we do have some people at another site, that mostly focus on cryptography and cryptology, but the majority of the development is here, which is a big pride for the RTP site, I think, at this point. Hugely excited... It gets a lot of attention on us, which is cool.

We have, obviously, a lot of other teams that are very essential to this initiative, like the Blockchain Garage or the client engagement teams that are kind of dispersed... We have one in the U.K., we have one in Austin, but core development's here...

**Adam Stacoviak:** In Raleigh.

**Anna Derbakova:** In Raleigh, RTP - Research Triangle Park.

**Adam Stacoviak:** It's called RTP?

**Anna Derbakova:** It's called RTP, Research Triangle Park Campus, but a lot of people say the IBM Raleigh...

**Adam Stacoviak:** Because why would you say all those words, right?

**Anna Derbakova:** Yeah, RTP. It's just short and easy, and a lot of people associate with that, because they know where it is. So that's what we do here in Raleigh, we write code for Hyperledger.

**Adam Stacoviak:** \[00:04:04.28\] Nice.

**Anna Derbakova:** It's cool.

**Adam Stacoviak:** Help me demystify for those who are still catching up or don't get it or haven't gotten it yet, or haven't looked far enough into it yet, to understand what blockchain is or means.

**Anna Derbakova:** Sure. So if you haven't had an opportunity to listen to my talk about blockchain and Hyperledger -- yesterday I gave a talk here, at All Things Open, and it's received tremendous reviews, so I've been asked to post my slides, or somehow share my slides, because it sounds like they were pretty helpful to people to demystify some of these concepts... So if there's any way to share that - once I upload it, maybe I can send you a link.

**Adam Stacoviak:** We'll attach it to the show notes, for sure.

**Anna Derbakova:** Yeah, so maybe you can announce that. But you know, just to explain it, Blockchain is the system that powers Bitcoin. A lot of people have probably heard of Bitcoin, and that's the one assumption I made in my talk, that that's something people know about... It's a cryptocurrency that's really widespread.

**Adam Stacoviak:** We're cool, and actually we had a show on Ethereum, too.

**Anna Derbakova:** This is good, yeah...

**Adam Stacoviak:** We haven't had a Bitcoin show, but we talked to Gavin Wood from Ethereum.

**Anna Derbakova:** This is awesome, yeah. So if people are catching on to Ethereum, Hyperledger is the next thing that you should learn about.

**Adam Stacoviak:** Okay.

**Anna Derbakova:** But just to summarize Blockchain, it's a distributed ledger; essentially, you have a network of computers or devices which all share this record of transactions. When transactions are happening on the network between the different nodes, such as financial transactions or any kind of asset exchange, the nodes first have to agree on some aspect of these transactions - in this case, ordering what happens first and what happens next. So once they come to this process called consensus, they agree to commit those transactions to the ledger, and everybody gets a copy of that.

**Adam Stacoviak:** The whole distributed...

**Anna Derbakova:** It's distributed... So essentially it's a record that everybody owns, but nobody can really change single-handedly. Everybody has to agree to change it.

**Adam Stacoviak:** Okay, makes sense.

**Anna Derbakova:** And it kind of grows, and the blocks are cryptographically linked; there is a mechanism by which they are essentially based on previous blocks, so if you modify something in the middle and you try to tamper with it, it's very easy to detect that there is some attempt to modify the data that exists. Also, it's very difficult -- it's practically impossible to do it without significant computational costs.

**Adam Stacoviak:** So like a supercomputer, basically.

**Anna Derbakova:** Essentially, if you wanna tamper with some of the data that was previously stored in the blockchain without being noticed, it's gonna be pretty hard to do, because... In an easy way to explain, the hash of the data in a given block is included as part of the next block. So if you modify a part of a block, it changes the hash and it essentially messes up the links of all the subsequent blocks.

**Adam Stacoviak:** And they don't agree.

**Anna Derbakova:** And they don't agree.

**Adam Stacoviak:** Okay.

**Anna Derbakova:** So that's in a nutshell what blockchain is.

**Adam Stacoviak:** You explained it so well.

**Anna Derbakova:** Thanks, well I appreciate that; hopefully it's clear for you, too.

**Adam Stacoviak:** I mean ... I'm getting it, so it's definitely making a dent for sure.

**Anna Derbakova:** Glad to hear it. So the point is you can't change the data that you store; if you have an account and you have X dollars in your account, it doesn't mean you can't change the value of that X dollars - you certainly can, but the point is it's another transaction that you append. You append it, you don't just go in there and you modify a record. You don't really modify anything, you append a new transaction. That's why typically people refer to it as an append-only ledger. The transactions append at the end.

**Adam Stacoviak:** Gotcha, okay.

**Anna Derbakova:** It's becoming a really hot technology in the finance field, also in supply chains - an example I discussed yesterday - because there are so many middlemen in transaction and exchanges in a supply chain network...

**Adam Stacoviak:** UPS, FedEx...

**Anna Derbakova:** \[00:07:46.16\] Yeah, so many... I gave the example of supply chain of pork, in China, farm to table - how many people change hands between actually growing something and actually going through storage facilities, or some kind of processing facilities, and people who deliver the goods... Who actually has it, who tampers with it, what temperature is it under, where is it stored - all of these things... There's a big question mark, right? So by the time it gets to a table, you don't know who handled it and how. Blockchain is one of the solutions some of the bigger companies are looking to to implement something that would essentially record every time a transaction takes place, like an exchange of an asset from one party to another - you would record it as an asset transfer, and you would record the specific information that matters, like temperature, or how it's stored, or whatever is specific to the asset you're exchanging. Then you can't really tamper with it afterwards; it's kind of hard to cheat on the blockchain, right?

**Adam Stacoviak:** Gotcha. It's very secure.

**Anna Derbakova:** Yeah, so if somebody messes up your product, you can go and trace where exactly that happened, and then there's no questions.

**Adam Stacoviak:** Gotcha. What does this technology replace? That's what I think of when I think about blockchain. Obviously, we're evolving in the way we use technology; it's gotta be replacing something... What's currently in place now, in these areas, to do something similar?

**Anna Derbakova:** I think there's different ways in which... Like supply chain, right?

**Adam Stacoviak:** Or is there no framework at all, and blockchain is the new framework that will...?

**Anna Derbakova:** Well, blockchain is almost a composition of some existing technologies. Blockchain obviously has a storage layer, like a database - you have to store your state for your transaction, or your asset or whatever.

**Adam Stacoviak:** Is the database your choice, or is it chosen by...?

**Anna Derbakova:** It depends on your implementation. Hyperledger uses a specific type of database, but it's pluggable and you can use something else. A database essentially stores the data, but it stores it in a very unique way - it stores it in blocks, but also the hash of the block is stored in the next block. That's a very different thing from just storing key/value stores in the database, right?

**Adam Stacoviak:** Right, right.

**Anna Derbakova:** So that essentially allows you to store that data in a way that you're explicitly pointing to the previous block. So if any of the previous blocks have been modified, that link in the chain is now broken because you're pointing to a block who's hash has changed, so it no longer exists, essentially. Just removing a transaction from a block breaks your chain.

That's a cool, new idea that came from the way Bitcoin was implemented, because that's the idea that they used. Then other parts of the blockchain also involve existing technologies like peer-to-peer communication, consensus for the nodes to basically agree how to commit the transactions, the ordering of the transactions... That idea of having them work together in this way - that's certainly new.

What does it replace? It depends on the specific field. For example, supply chains work today. If you wanna argue "Are they effective?" Well, yeah, you get your meat at the store, you get your goods on the shelves...

**Adam Stacoviak:** Has someone tampered with it though?

**Anna Derbakova:** ...but you don't really know how many irrelevant steps are happening, you don't really know how much fat you have in the process, so to speak.

**Adam Stacoviak:** Good choice of words, nice pun.

**Anna Derbakova:** \[laughs\] You know what I mean? Like, how many steps are really necessary in solving this problem, or is it really as effective as we want it to be? The paperwork - there's gobs and gobs of paperwork every time you ship something or receive something, or deal with customs. A lot of that is just process, right? So I think blockchain offers you also a way to store your data, automate some of these things and make them more efficient, and to remove the inefficiencies that you don't really need.

\[00:11:47.11\] Also, I think it has a lot of applications going forward to integrate with other technologies, like IoT, for example. That's like a huge use case they're exploring also at IBM - let's say for supply chain, to equip your supply chain with devices. Let's say you're shipping a container across the Atlantic, you can have temperature sensors in your container telling you if the goods are still stored properly, or container locks that tell you if the container has been tampered with; where it is, you put GPS on it, or some kind of delivery timestamps.

**Adam Stacoviak:** And those all append to the...

**Anna Derbakova:** Those essentially communicate to some gateway, and they report. You can use that as a part of your contract on the blockchain, to essentially determine if you're being treated fairly by your supplier, let's say. And if they're not upholding their end of the deal - let's say the meat's spoiled because the temperature's too high, you would know that, because it'll be recorded.

**Adam Stacoviak:** Gotcha.

**Anna Derbakova:** So in a way you can remove a lot of those question marks, and you can really record that and be sure that that's what's happening.

**Adam Stacoviak:** I'm sure that a lot of people who listen to this will have heard of Bitcoin before, I know that for sure. Listeners of this show, a hundred percent they know about Bitcoins.

**Anna Derbakova:** Bitcoin is pretty popular.

**Adam Stacoviak:** I'm sure they do. They watch Mr. Robot, they know what Bitcoin is, they know about E Corp... That's the kind of audience we're talking to here for sure. But for those who may be coming to this subject from a different angle, what's the state of blockchain? Is it a spec? Who owns where it's at? Is it a protocol? How do we term what it is, and does it have versions? Is there a version one, version two...?

**Anna Derbakova:** So if you just say "What is blockchain?", blockchain is an architectural concept almost; it's something that you build on top of, but there's different types of blockchains. The blockchain that supports Bitcoin is the first one that was out there, but then we got other types of blockchains, like the Ethereum blockchain, and that's huge now. A lot of people are very excited about it, it provides some awesome capabilities to write smart contracts, and really complex ones - so that's a blockchain too, but they are different blockchains. A lot of the underlying ideas are the same, like how you store your blocks, and things like that, but...

**Adam Stacoviak:** The same transfer of one record point to the next is the basic concept that they all share.

**Anna Derbakova:** Yeah, that's the basic concept; that's still there, because in Bitcoin you're exchanging essentially value, right? You would be exchanging value of Bitcoin, but in Ethereum you could be exchanging some kind of coin, but you could also be exchanging an asset, because they have the idea of a smart contract. But the idea is it's a different type of blockchain, it's a different implementation, and Hyperledger also is slightly different. But who owns it? That's a good question. I mean, there's not gonna be one blockchain to rule them all. They are gonna be different, and I think that's a very good forward-looking question, because then people will wonder, "If we have this blockchain here for this group of banks, and this blockchain here for supply chain, if they ever need to interoperate, or something of as far as transferring records from one to the other, what are we gonna do?"

So I think that's a question that's definitely gonna need to be explored fairly soon. If you have two different blockchains with different consensus algorithms, how do you deal with that? These questions... I'm not sure if IBM, for example, is researching anything into that - at least I'm not directly involved in it - but if it doesn't come up soon, it will in the very near future.

**Adam Stacoviak:** Okay. So at IBM, what role do you play in regards to IBM? Is it IBM Blockchain, is that...?

**Anna Derbakova:** IBM Blockchain is the name of our organization.

**Adam Stacoviak:** Okay, so it's like a department, basically.

**Anna Derbakova:** Yeah, that's like a department in the Cloud Organization, and I'm part of that, as an employee at IBM. But we do contribute to the project, we're officially committers on the project...

**Adam Stacoviak:** And it's Hyperledger.

**Anna Derbakova:** \[00:15:48.26\] Hyperledger. Hyperledger has a couple of projects under it. If you go to hyperledger.org, and there's a tab at the top called Community and you click on that, and you click on Projects, you will see that there is a handful of projects in there. One of them is Blockchain Explore, for easier navigation of the blockchain, to see what the contents of your blocks are; then you also have Fabric, which is the main project that IBM is contributing to as far as the networking core for supporting the Fabric blockchain.

Sawtooth Lake is a contribution that was made by Intel, so I honestly don't know a whole lot about that. I'm looking forward to learning more about it, but at this point I can't say a whole lot about it. But a lot of us contribute to Fabric, and also projects that are directly related to Fabric, like SDKs - in order to interact with the blockchain from different application-level code, like Python or Node.js or Java.

Actually, on the team, I work on the Node.js SDK team, so we contribute a lot to the Node SDK repository underneath Hyperledger. People contribute to different parts of that code, but it's all underneath the same umbrella organization of Hyperledger.

**Adam Stacoviak:** It says here on the homepage the Hyperledger Project is a collaborative effort...

**Anna Derbakova:** Absolutely.

**Adam Stacoviak:** So this is not a project, so to speak its own codebase; it's a project of underlying projects.

**Anna Derbakova:** It's a collection... It's almost like an - I don't know if it would be wrong to term it an umbrella organization that supports a number of projects that are all meant to advance blockchain technologies, to get people working with them, to get more people involved and grow that community. But definitely there's more than one project under Hyperledger, and obviously this is a collaborative effort in the sense that there are some industry partners like IBM and Intel heavily involved in it, and other companies too. If you go to -- I think About would have it... It would say one of the main funding partners for Hyperledger, the Technical Steering Committee members, who are heavily vested in the direction of this project... But of course, anybody from the com-- yeah, so you've got it: some premium members, and other members if you scroll down lower. But essentially anybody from the community is welcome; this is an open source project. I think one of the main efforts right now is to grow that community, to have people who are interested to build on Hyperledger, to start committing. They don't have to be part of any of these organizations; they welcome everybody.

I think part of the problem that's still kind of lingering is the organization is very new; it's really formed late December of last year, so there's still a big bar to entry. The concept of the project is very complex, the documentation is still a little spotty, so it's still kind of...

**Adam Stacoviak:** In its formation.

**Anna Derbakova:** Yeah, in its formation, and it's difficult for people to just kind of jump on that bandwagon and start contributing. We're trying... The documentation has gotten orders of magnitude better, and has tons of information. We're on Slack all the time, we're on public Slack channels... We have a Hyperledger Slack channel; people can ping me anytime.

**Adam Stacoviak:** How do they get access to that?

**Anna Derbakova:** Somewhere on that page there's a link to the Slack channel, and it's hyperledger.slack.com. People can just sign up and they can join one of the general channels and essentially read what's going on in the project, or they can join a specific channel like the Fabric SDK channel and they can read about what we're doing. Or they can ping one of the members directly if they see them commenting on their GitHub thread, and they can ask directly their question.

\[00:19:59.25\] I talk to people on Slack all the time. It's a very effective way to have one of the developers respond to you, because sometimes issues kind of get opened and we do our best to keep track of the issues, and sometimes it kind of falls through the cracks... But people do speak up. On the Fabric SDK Node channel we get questions all day long, and one of us typically answers. If it's not me, it will be somebody else from my team. People do chime in; people come back and say, "Hey, this really helped. Thanks a lot!", and we try to update the docs and kind of incorporate the feedback we receive... So definitely, if people have questions, we encourage it.

**Adam Stacoviak:** What is the future like for blockchain? You mentioned financial systems, you mentioned internet of things... I'm looking here and I also see manufacturing technology, supply chains - we talked about that. As a technology it's one thing, but what's the next step for people to adopt? Generally the project is still in motion, still in formation...

**Anna Derbakova:** Yeah, it's definitely gaining momentum, and I think more and more people are getting interested. And not just people in the community, we're talking big companies like WalMart, who came to IBM to partner together to build a supply chain solution. So a lot of big companies are interested, and some of them have already come forward.

As far as being open source, I think it will continue to grow and evolve. It's very public right now on the Hyperledger wiki pages and forums, they're moving toward a new architecture right now, which will be early next year... So there's been a lot of changes, and I think people are hoping to use it more, they wanna get their hands on it and they are looking for some specific features to be added, more stability...

The adoption is increasing. I think people are very curious about it in general, whether they're individual contributors out in the community, or companies; they wanna check out what's going on and where it's going. As far as being applicable to all areas of life, shall we say, I think people will start to kind of compartmentalize and realize what they can use blockchain for and what maybe they don't really need it for. I think people are still in that exploration phase; companies hear the word 'blockchain' and they're overhyped about it. I think it's gonna take a little bit of time for people to kind of learn what blockchain really is and what it isn't, and what they need it for and what they don't need it for. I think that's still kind of a learning curve for a lot of people.

But once people get to that point, and I think IBM has already some solutions out there for people to use; if people wanna go play around...

**Adam Stacoviak:** Yeah, people building business solutions around that, offering services...

**Anna Derbakova:** They can go on Bluemix. We already have a Bluemix tile they can deploy, a simple network, and play around with it and start building against it. So they have a cloud offering.

**Adam Stacoviak:** Bluemix.com?

**Anna Derbakova:** Bluemix.net. They can essentially create an account, it's very easy. Go to the Catalog, search for Blockchain, and it will explain to you what kind of network you're deploying. You can do some sample, click-click sort of thing and deploy some things to the network and learn about it, and then you can actually use that network you've deployed to write an app against it.

The latest thing that came out - it was actually just a couple weeks ago, and I presented that at the conference yesterday... There is now a set of Docker images which is available out on Docker Hub for the network peers for Hyperledger. Essentially, people can go and download the Docker images and spin them up on their machines locally. You can create a network and you can develop against that, and that's the demo I showed.

**Adam Stacoviak:** And where are these Docker images? On Docker Hub?

**Anna Derbakova:** They're on Docker Hub, and I actually wrote a tutorial...

**Adam Stacoviak:** Is there like a Getting Started anywhere...?

**Anna Derbakova:** \[00:23:52.16\] Yeah, I wrote it, I can point it to you. It's bitly.com/hyperledger-basics. It is in my personal repo, because I published it, but there's links from my GitHub page to the Docker.io official page and other official documentation for Hyperledger, and people can start there. Or they can just certainly go to the docs for Hyperledger and get started there, but there's a lot of docs, get ready. It might be a tiny bit overwhelming, but people just need to have little -- if they have some background in blockchain, great. But if they don't, they just need to be a little patient; there's a lot of information, it's a very complex subject, and we're trying to make the docs better and slimmer and more applicable, so just bear with us. We don't want to scare people away by the overwhelming amount of docs, but we also don't wanna turn them away by the scarcity of the docs. We're still kind of walking that fine line. So yeah, certainly check it out.

**Adam Stacoviak:** We'll definitely link to that Getting Started, because I know for me, I'm still catching up. Even though we did the Ethereum show, I was still playing left field; my co-host, Jerod, was definitely driving that show a lot more, and I'm still trying to catch up. That's why I asked the question, "Can you help me demystify it?", because it's the question I wanna know, not just for the listeners as well.

Let's talk about your talk real quick then. You gave this talk yesterday... What were some of the core takeaways you were hoping this community or the community listening to this show took away from your talk? What about blockchain matters to you? What do people need to know from your talk?

**Anna Derbakova:** Yeah, so I think the biggest assumption I made going in is I said, "I will not assume that people know a whole lot about blockchain." The only thing I decided to assume is that they have heard of Bitcoin, that was my only assumption.

**Adam Stacoviak:** Wise choice.

**Anna Derbakova:** And I think I made a very wise choice because I've received overwhelmingly positive feedback for my talk and how helpful it was in understanding blockchain. So I essentially started with Bitcoin... I said, "Hey, here's Bitcoin, you've all heard about it. It's built on blockchain, so let's dissect that." I told people about the importance of how blockchain stores its data in terms of hashing its data to produce a fingerprint, a particular block, how blocks are linked together... I went through all of that and talked a little bit about the importance of consensus on the network and what it's for...

I think the introduction to blockchain in my talk was solid, people very much appreciated that. Then I talked about Hyperledger and that it's a collaborative effort under the Linux Foundation, and how people can get involved, get on Hyperledger.org, check out the docs, get on Slack and learn about it... I tried to kind of put a plugin for Hyperledger and talk about differences of Hyperledger with let's say Ethereum or Bitcoin, just to kind of summarize and give people an idea of whether Hyperledger - or Hyperledger Fabric, specifically; it's what we are working on - is right for them. It may be, but maybe they don't need what Hyperledger provides, and that's okay. It just depends on what you're looking for for your application.

I'm obviously not advocating that Hyperledger Fabric is right for everyone; it just depends on what you're building. Then I showed how to write a simple app on Hyperledger Fabric, and I pointed people to my tutorial if they want to go and get started, and where to download the Docker images to their machine and how to do that, and how to write a simple app.

That was the synopsis of my talk. People have asked if I maybe can post some slides... I'll try to figure out how to do that; I'm not sure if the conference has any...

**Adam Stacoviak:** Is this the first time you're sharing slides?

**Anna Derbakova:** I think there must be some official place on the conference site to share them...?

**Adam Stacoviak:** I'm not aware... Maybe there is.

**Anna Derbakova:** I'll ask, but otherwise I have a link to the tutorial, I'll tweet that out and people can try the tutorial. Like I said, bitly.com/hyperledger-basics. People can go and check it out...

**Adam Stacoviak:** We'll put that in the show notes for sure.

**Anna Derbakova:** \[00:27:57.11\] Yeah, and if they have problems, I'll try to walk them through. We're very open to people joining, and we're trying to be a welcoming community. Like I said, we're on Slack all the time, people are welcome to ask questions, and a lot of people do take advantage of that opportunity, which is cool.

**Adam Stacoviak:** Let's talk about languages, because I went ahead and navigated to Fabric on GitHub, clicked on the little tab here that shows the languages; it shows that Go is 83%... So what is the language that writes most of -- at least what you're working on? I know you mentioned Node earlier, the Node SDK... Help us understand what IBM Blockchain is doing, what languages they're primarily writing these things in...

**Anna Derbakova:** Yeah, so the Hyperledger Fabric Project, which is the core of this permission blockchain that IBM is providing is essentially mostly composed of Go, as you noticed. Go is a big part of the core implementation, the networking, the consensus - all of that is in Go. It does have, obviously, some other bits and pieces in there.

**Adam Stacoviak:** Some Cucumber for tests, Python, Java...

**Anna Derbakova:** That's right. So, as you can see, there's Python, Java, and there's Node.js, but we're pulling Node.js out now into a separate repo. So essentially how it started is the decision was to move away from a REST interface on the peer nodes to a model of having SDK packages for different languages to communicate to the network. So we've pulled out all the proportion that was doing Node.js, or TypeScript at that point, and it was pulled off just recently - I think less than a week ago - into its own repo, which should also now be visible on GitHub, which would be Fabric SDK Node; that's the repo that my team contributes to.

**Adam Stacoviak:** So this is the one you camp out on.

**Anna Derbakova:** That's the one for Node.js. Then there's obviously a Java repo; that's mostly in Java, and that's for the Java SDK to communicate to the Fabric. Then there's a Python one they're working on. Those are obviously in the specific languages, and I don't know a whole lot, again, about Sawtooth Lake, so I can't really say what their repository is composed of.

But yeah, mostly Go inside the Fabric core, and then specific languages for the SDKs.

**Adam Stacoviak:** Very cool. Is there anything else for this audience that's listening to this that you might wanna share that I've left out, that I haven't asked you?

**Anna Derbakova:** Well, I think we captured everything. Like I said, if you're interested in this, please go check out hyperledger.org, and if you have any questions, I really encourage you to join the Slack channel. If you just need any help and you can't figure out where the docs are, or what to clone, or how to become a contributor...

**Adam Stacoviak:** Hyperledger.slack.com.

**Anna Derbakova:** Yeah. just get on Slack. There should be docs that tell you how to do that, but we understand they may still be difficult to navigate; just get on Slack and ask us. We camp out on Slack all day long.

**Adam Stacoviak:** Even on the weekends?

**Anna Derbakova:** It might not be an immediate response, but you're gonna get it that day, I promise. Somebody's gonna come and help you.

**Adam Stacoviak:** Okay, alright. Well, thanks, Anna. Thanks for sharing the story, I appreciate it.

**Anna Derbakova:** Thanks for having me.

**Adam Stacoviak:** Great hearing about blockchain; I think you've definitely schooled me in terms of where it's going and what it's doing. I'm excited.

**Anna Derbakova:** Great!

**Adam Stacoviak:** Thank you, Anna.

**Anna Derbakova:** Happy to talk, thank you!

\* \* \*

**Adam Stacoviak:** Thanks again to Todd Lewis and all our friends at All Things Open. It was a blast being there. So glad to be at such a great conference. We'll be there again next year, so look out for us in 2017 at All Things Open. If you've never been, head to allthingsopen.org, buy a ticket and we'll see you soon.
