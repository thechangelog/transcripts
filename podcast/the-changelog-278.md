**Jerod Santo:** So we're joined here by Monty Widenius, one of the founders of MySQL, and CTO of MariaDB...

**Monty Widenius:** MariaDB.

**Jerod Santo:** Maria... Oh, see - Adam and I were arguing how you pronounce it just a few minutes ago, weren't we, Adam?

**Adam Stacoviak:** And I said Maria.

**Jerod Santo:** I said "This guy is with Maria (Mariah) DB." He goes, "Isn't it Maria?" and I said "I don't know."

**Monty Widenius:** At least you got the MySQL right, and not...

**Jerod Santo:** It's not MySQL (MySequel)?

**Monty Widenius:** No.

**Jerod Santo:** Oh... We also have interviewed Rich Hipp of SQLite that he likes to call it SQLite, like a meteorite... So fun times arguing about how to pronounce things, but Monty, first of all, thanks for joining us. Secondly, thanks for MySQL, and tell us about MariaDB, give us just a brief history of that. I wanna get into your talk about how to make money with open source - that's what he's talking about today - but before that, give us just a brief rundown of the history of MySQL, the MariaDB and where you're at today.

**Monty Widenius:** I was the original creator of MySQL, I did most of the development, and eventually we were sold to Sun, and then Oracle took over Sun, and me and the whole group of people were afraid that MySQL would not survive as an open source project, so we went out from Sun and created a fork of MySQL called MariaDB, which is guaranteed open source.

Almost all of the original core people left MySQL development and joined MariaDB. So I'm working with the same team I have been working with since 1995.

**Jerod Santo:** So is that a point now where if you're still using MySQL, you should be on MariaDB now?

**Monty Widenius:** There's no reason to use MySQL anymore; all Linux distributions except Ubuntu have switched to MariaDB as default. Ubuntu has also included MariaDB.

**Jerod Santo:** Really?

**Monty Widenius:** So if you want to use what everybody else is using, you should use MariaDB.

**Jerod Santo:** \[00:04:13.06\] And was it a straight code fork in terms of --

**Monty Widenius:** Originally yes, but now we have some \[unintelligible 00:04:17.20\] on top of MySQL. A lot more features, a better application and much more secure.

**Jerod Santo:** Very cool. I had heard the story of Maria, I never heard anybody say MariaDB out loud, obviously, but I read that that was happening, but I didn't know the state of the new thing, which is great to hear that it's production-ready, it's out there...

**Monty Widenius:** It has been that for five, six years already. The MariaDB company, the hundred people - almost half are developers working on MariaDB and things that run MariaDB, so we're doing really good.

**Jerod Santo:** Very cool. So you were talking about how to make money with open source... MySQL was open source, you sold the company around it to Sun, which went to Oracle, now MariaDB is open source, but yet MariaDB Corporation... So tell us about how you're going about running a 100-person company on an open source thing like this.

**Monty Widenius:** With MySQL was easy because we did own all the code, so we came up with how to do dual licensing on GPL, and we were the first project who ever did that.

**Jerod Santo:** You were.

**Monty Widenius:** And the thing with being a product company where you create a product, you can't just survive by license revenue, and we did know that from the start, so that was also why we started with dual licensing, because I wanted to work full-time on MySQL, and I couldn't do that just by doing support and consulting. So we were the second project who did dual licensing at all, and the first with GPL, and that allowed us to grow and then eventually got sold to Sun for one billion dollars.

**Jerod Santo:** Oh, wow.

**Monty Widenius:** And the license revenue was the one that made the difference, compared to other open source companies. Nowadays I'm helping and advising a lot of companies how to be a success in a similar way that we did with MySQL.

With MariaDB we don't own the code because we are a fork of MySQL, so we are bound by the GPL, so what we do then is support a subscription around the core product, but then we have some other products on the side that have a license revenue that allows us to grow... Because if you want to compete with the big guys, you need to have a similar revenue model that they have. Even with open source, the nice thing that I loved in MySQL was that only one in a thousand paid, and that meant that we were able to really help a lot of people to get to get a good database, and at the same time having a few who made it possible for us to do that.

**Jerod Santo:** Which is awesome, absolutely.

**Monty Widenius:** Yeah, and that was the best thing with open source licensing, that you can actually do a good thing and at the same time earn enough money so you can continue doing that.

**Jerod Santo:** Yeah, so I got stuck a little bit on your billion-dollar sale, I didn't realize it was that big. Personally, Monty, why didn't you at that point say "Well, I'm gonna go get a mojito and hang out in Cancun or St. Lucia for the rest of my life..."

**Adam Stacoviak:** Kick back, retire...

**Jerod Santo:** Yeah, why didn't you retire at that point? You wanted to keep going.

**Monty Widenius:** First, I wanted to ensure that Sun would get the most benefit of MySQL; that's why I joined Sun originally, to see that they would be able to steer the project (MySQL) in the right direction. I stayed there for one year, and then there was friction between people who were used to working at a small company and didn't like the atmosphere at Sun. Nothing wrong with Sun, but in big companies there's a lot of bureaucracy and everything else, and people started to leave... So I talked with the CTO and said that the best way to ensure that you don't lose the minds of these bright people is that I go out, I create a new company, I hire these people, and then I can take care of them as they would be in a small company, but you would have access to them as they would have worked for you.

\[00:08:11.24\] Sun thought that was a great idea, so I left Sun, and one month later Oracle announced that they will buy Sun. So instead of helping Sun, I refocused to start work on the project.

**Jerod Santo:** Did that completely blindside you, the Oracle acquisition?

**Monty Widenius:** Yeah. And the thing was that I didn't ever plan to do a MariaDB fork, and I probably would have been in Hawaii with a mojito, very likely, but the thing is that when you put your whole life into an open source project and feel that you have made a difference and helped a lot of people, just letting everything collapse just because you want to have your mojito, I would have felt bad about it. So a big part of the money that I got from the Sun sale I put into ensuring that MariaDB would survive, so that both the project I worked on since 1981 and the people that I have worked with for tens of years, that we would have a workplace for life.

**Jerod Santo:** That's so great. A sense of responsibility and a sense of purpose is better than a mojito. You can take vacations, but...

**Adam Stacoviak:** But you've gotta think about legacy, you've gotta think about the future...

**Jerod Santo:** And all the people using the software.

**Adam Stacoviak:** Yeah.

**Monty Widenius:** I felt really bad for all the people that I got to believe in open source, that it's here to stay \[unintelligible 00:09:34.03\] and disappeared. I would basically have let down all of them. That would not allow me to sleep, and I do value my sleep, so it was easier to work more and get good sleep.

**Jerod Santo:** Give us some examples in Maria's model where you have the core product - you don't have licensing on that, because of the reason that you said, but then you have these side add-ons, or...

**Monty Widenius:** What we have now, we have MaxScale, which is a really good proxy, that can also be able to do failover and other things, but also gives you more control over using MariaDB especially in larger environments, and we have licensed under something we called Business Source License. This was a license that me and David Axmark, the other founder of MySQL, came up with some ten years ago. And then we started to make it more popular, because I see a lot of companies struggling with that. They would love to do open source, they see the benefit of it, but they are afraid that if they will become open source, they will lose all the revenue, the customers would stop paying them, and that causes a problem, a conflict - you want to do the right thing, but you can't, and the Business Source License was invented to solve exactly this thing, to allow more people to do eventually open source, and also give the users of the software many of the freedoms that you expect with open source software. So it's not an open source license, but it's an "eventually open source" license, and within four years it's guaranteed that the code that you have is open source, but you had all the code from the start, so you get the benefits that if there are bugs, you can fix it, if you want to add something, you can do that... You still have to pay for it, like with any closed source software - or commercial software, actually - but you still have the freedom that you are not held by the one company who can do any changes, or just go out of business or stop producing the software.

**Jerod Santo:** So this an entirely different thing. You said it's Business Source License.

**Monty Widenius:** Business Source License \[unintelligible 00:11:42.00\] but with lots of open source ideas around it. We have released MaxScale on this one, and going from having MaxScale as a free component in our subscription offering, now we are selling licenses, and deal size is not anymore ten thousand, they are in the hundred thousand or even in the million dollar range. So it totally transformed the business.

Other options we have as a company is to be open core, but I hate open core with passion, because what I expect from software I use - I want to be in charge of my own destiny. With open core I lose all the freedoms; I can't do a bug fixing anymore, I totally depend on the company's whims, and so on. Business Source is there to be a bridge between closed source and open source, and in the end produce more open source companies who couldn't afford to do it before.

**Jerod Santo:** Are there other people taking this business source license that you're using at MariaDB and using it for their companies? Is it picking up steam?

**Monty Widenius:** Well, I've been holding talks about this now for two years, and there has been lots of interest. Still, they needed somebody to show the way, and that's why we released nine months ago MaxScale as Business Source and made a lot of noise about it... And we're also talking about that today. We need to spread the word, because personally, I feel really bad as an open source advocate to see that on the phones almost all apps are closed source, and the only reason for that is that these companies want to earn money and the open source model doesn't work. With business source, they could earn as much money as they do now, but still getting the benefit of getting other people helping them develop their software.

**Jerod Santo:** Very cool. Well, we're definitely gonna check that out. Adam, I had not heard of the Business Source License, so --

**Adam Stacoviak:** I've got it pulled up right here, it's BSL 1.1 right now it seems, and it seems like if they contribute back through the Business Source License, it will eventually be open source as well.

**Monty Widenius:** Yeah, that's the idea. The idea is basically with the Business Source initiative is that I want to make Business Source (BSL) as easily understood as GPL. GPL is a complex license; when I started MySQL \[unintelligible 00:14:15.14\] become GPL, I spent so much time explaining GPL to companies and the effects of that, and no people knew about this; to get BSL popular, you need to do the same thing, and that's why we have done it trivial for anybody to adopt it. So you just basically change your header files and add "This is now BSL", and then you copy one file from our website, and change three lines that describe your product name, the restrictions - when you have to pay and when your source code becomes open source. That's the only thing you have to do, so it's very trivial to do that.

**Jerod Santo:** So the last question - look forward 3-5 years at MariaDB, both in a technical sense and as your business... Where do you see it going? Where would you love for it to go in five years?

**Monty Widenius:** So the interesting thing with open source software is that you are not the leader of where you are going. You are working with a community, and if you have the right community, who basically are the ones who are predicting and steering your future, and you are working with them, you are basically a part of it. That makes open source so strong, and that's why I want to have more companies be involved in that, to be a part of that.

The only thing I know and what the trend I see right now is that much more distributed environments and setups where you're using lots of servers and exchange data behind them, like some of the NoSQL solutions, but still with a strong asset compliance so that you know that you never lose something. And we already have a product for that \[unintelligible 00:16:08.09\] analytics, but we also want to do the same thing in a transaction environment. So that's where we see at least one trend.

\[00:16:19.12\] Another trend that we're working on is making it easy to transfer from closed source commercial databases to open source databases. So in 10.3 we are adding a PL/SQL layer on top of MariaDB.

**Jerod Santo:** Oh, really? That's interesting. So where do people go if they're interested in the BSL, in MariaDB and wanna learn more? IF they're considering using BSL for their software, where do you send them?

**Monty Widenius:** You just search with your favorite search tool for the Business Source License and you will find that thing on top. It's easy. Same thing with MariaDB, or you just go to your favorite website, who's probably already using MariaDB. \[laughter\]

**Adam Stacoviak:** Gotcha... There you go.

**Jerod Santo:** Very good. Well, Monty, thanks so much for joining us.

**Break:** \[00:17:08.28\]

**Jerod Santo:** So I love interviewing people who have Wikipedia pages...

**Brian Behlendorf:** Uh-oh...

**Jerod Santo:** ...because it makes my job really easy. I don't have to do any research; I just pull up Wikipedia, I assume everything's 100% accurate...

**Brian Behlendorf:** It's absolutely accurate, I watch it every day.

**Jerod Santo:** You watch it every day, you have a program that checks it...

**Brian Behlendorf:** No, I'm not allowed to. Jimmy won't let me out of my own Wikipedia.

**Jerod Santo:** That's what I hear; I was speaking with the fella that started MySQL and MariaDB, and I was asking him about his --

**Brian Behlendorf:** Monty.

**Jerod Santo:** Yeah, Monty, thank you... About his Wikipedia page, and -- you can't edit your own page.

**Brian Behlendorf:** You're not allowed to, no.

**Jerod Santo:** I think it's actually a pretty good policy.

**Brian Behlendorf:** It's nearly miraculous then that mine is actually updated at all and accurate, so thank out there to anyone who's editing my Wikipedia page.

**Jerod Santo:** Yeah, so Brian Behlendorf, been around long time, doing lots of things... Apache Web Server, part of the Mozilla Foundation, EFF, on the board there... First of all, thanks so much for sitting down with us.

**Brian Behlendorf:** Thank you. And it's great, you mentioned all my hobbies... \[laughter\]

**Jerod Santo:** ...and not your job.

**Brian Behlendorf:** Other things that I have done for fun.

**Jerod Santo:** So what do you do for not fun? What do you do for business?

**Brian Behlendorf:** Okay, so my day job, my 155% time kind of gig is full-time executive director of Hyperledger, which is a collaborative project hosted at the Linux Foundation.

**Jerod Santo:** Okay, so Hyperledger... Tell us more.

**Brian Behlendorf:** Sure, it's an open source project -- it's actually a community of projects that is focused on building technologies, building blocks for doing distributed ledgers and smart contracts/

**Jerod Santo:** Okay. So I look at somebody with a Wikipedia page, a history in software... I don't wanna \[unintelligible 00:22:01.11\] too much, but you could probably do lots of things at this point in your career; why is this something that you're excited about? Why are you working at HyperLedger?

**Brian Behlendorf:** Well, I kind of had career ADD... I've done a couple of startups, I worked for the World Economic Forum, I worked at the White House, I was a venture capitalist at one point... I never really worked for a giant company, but I've been kind of swimming around them a lot... And I had this unnerving kind of feeling over the last ten years, having been on the internet since fairly early days (early '90s), that the last ten years has been this move towards centralization rather than decentralization. As we've gotten more digital, we started to depend upon central companies more and more and have been forced to trust them, rather than choosing to trust them... And that's because it's always easier to set up a big central database than it is to build a federated or decentralized network/system. But the reason why the internet created so much value and was so much amazing was because of its decentralization.

**Jerod Santo:** Yes, absolutely.

**Brian Behlendorf:** And I'm still one of those freaks who runs my own mail server...

**Jerod Santo:** Nice.

**Brian Behlendorf:** ...which now I'm sure is gonna get DDoS-ed upon somebody hearing this, but... \[laughter\]

**Jerod Santo:** So you go into your SpamAssassin and update your \[unintelligible 00:23:05.26\]

**Brian Behlendorf:** Exactly, there's a lot of attacks there. \[laughter\] So it's not easy, but I actually enjoy it, because I'm worried like that. So when I started hearing about Bitcoin I was kind of skeptical, because I'm not a currency speculator at heart, and I don't necessarily agree with a lot of the political side to that, but I was really attracted to the idea that "Hey, here's a bunch of people now thinking about decentralization, and autonomy, sovereign presence on the internet, all that good stuff." So I followed that a little bit from the periphery, I followed the Ethereum community from the periphery, but I was still passive as an investor at my gig just before this, where I started to talk to Bitcoin companies and blockchain companies, and I finally heard the use case which made me go "Wow!", which was land titles in emerging markets.

**Jerod Santo:** Land titles... Real estate!

**Brian Behlendorf:** Real estate, which might sound completely bizarre, but anybody who's ever bought property or a house or sold property or a house knows how much BS there is in dealing with the paperwork, but also how much we depend upon registering paperwork with the right government officials, and signing the documents...

**Jerod Santo:** \[00:24:06.18\] Well, we even have companies that do these things, like closing fees, and entitlement companies...

**Brian Behlendorf:** Right, and it might seem like "Why bother thinking about this as a problem?" Well, in emerging markets where they had started to digitize land records, in order to give people not only a sense of ownership over the property they've perhaps liven on for generations, and the idea was also allow them to be able to take out loans to start businesses, right?

There's an economist named Hernando de Soto who wrote a book called The Wealth At The Bottom Of The Pyramid, which was all "Let's help India build their economy, and South America and others, by allowing people to build businesses on top of the ownership in the land that they have." So there was a big movement to digitize these systems, but it was discovered that this also made it easier for corrupt bureaucrats--

**Jerod Santo:** Which was already pretty easy, but this is even easier now, right?

**Brian Behlendorf:** And those who had root on that database to be able to change entries in that database without any accountability, without any sort of paper trail, and it made it easier --

**Jerod Santo:** Which is the problem with centralized systems - whoever holds the keys, holds all the power.

**Brian Behlendorf:** Right. So there was actually an Austin-based company called Factum, which has been working on land titles, in addition to a bunch of other related projects, and using a distributed ledger to track changes to a public database of who owns what property and where, and in doing that, making it much harder for people's land to be taken away from them, because then it becomes obvious when there's an entry added that violates principles, that violates this person's consent, this land owner's consent etc.

So that made me go "A-ha!", and I started digging more at it, and my next question was "Could you do this kind of thing without a cryptocurrency?" Because, you know, I run a mail server, I don't charge people to send me mail. If I did, I'd be a very wealthy man... \[laughter\] Perhaps that's my mistake...

**Jerod Santo:** Or you would get less mail, which might be kind of nice, too.

**Brian Behlendorf:** But I also think the internet -- like, I was on Prodigy before I was on the internet. Prodigy was this BBS ran by IBM, where it cost you 25 cents to send an e-mail.

**Jerod Santo:** Oh, wow.

**Brian Behlendorf:** Yeah.

**Jerod Santo:** That would stop some spammers.

**Brian Behlendorf:** Exactly. You never got any spam, but it was also 25 cents to send an e-mail.

**Jerod Santo:** You also never got an e-mail. \[laughs\]

**Brian Behlendorf:** You never had mailing lists -- in fact... Well, no, I won't go there. But what was great about the internet was you didn't have to charge people to set up mail servers, or send people mail, and websites - the same thing; you could set up a website. So I really wanted to figure out, were these two highly dependent, or could you tease them apart? And it turns out that cryptocurrencies are an application of distributed ledgers and smart contracts.

**Jerod Santo:** Yes, yes.

**Brian Behlendorf:** So once I saw that architectural approach, I started going "Well, who's working on that kind of think?" and then I saw HyperLedger get announced by the Linux Foundation, and to some degree it kind of looked like a 45-year-old (I'm 44, by the way) showing up at a skate park with a skateboard, going "Hey, you guys make it look easy.

**Jerod Santo:** Hey dudes, let's do this!

**Brian Behlendorf:** Yeah, hold my beer! \[laughter\]

**Jerod Santo:** You don't wanna be that guy.

**Brian Behlendorf:** No, no. But then -- so learning more about it, and spending time with Jim Zemlin, who's the head of the Linux Foundation, spending time with folks who are part of pooling that together, from IBM, from a startup company called Digital Asset, from a bunch of others, learn more about the rationale and said "Okay, this is important to work on." It's not against the cryptocurrency side of the world, but in fact there's ways that we need them and ways to work together, but maybe there's some real opportunity here to build something that has some lasting impact.

**Jerod Santo:** A standalone thing that's all about the ledger, it's all about that public record.

**Brian Behlendorf:** It's about this idea of getting it in the form of legos and buildings blocks that people can piece together, and making sure that the all the good ideas out there about how to do it, all the controversial architectures and different ways of doing smart contracts gives them a place where they can be built independent of a single vendor... Because this is another thing that's been on my mind - a lot of the open source community had kind of forgotten about the role of neutral homes for the governance of the projects.

\[00:27:59.03\] Apache has done that very well, Free Software Foundation, Software Conservancy - they've done that very well. But much of the open source will have gone to a company kind of releasing it, and then setting up a .org, the community addition...

**Jerod Santo:** Right, which makes it harder and harder for us using open source, or even just following open source, and something that we do at the Changelog all the time is help us tease apart the business from the open source thing and see clearly through the mud...

**Brian Behlendorf:** And I really felt it was important. If this was how we re-decentralize the net, if this is how we rebuild the building blocks, that that plumbing be as publicly-owned as possible, and be as multi-stakeholder, if you will. This multi-stakeholder concept is something that I've believed in for a long time, and at the World Economic Forum there's a big part of how they operate too, this idea that the best policies and the best projects in the world come from people with wildly different agendas coming together and figuring out what's the greatest common denominator which you can work on, of what you can build, of what you all independently want and then can build together. So that's why the HyperLedger approach kind of appealed to me.

**Jerod Santo:** So tell us the approach specifically, help us understand it in your context - HyperLedger, the open source thing; this is your 150% day job, right?

**Brian Behlendorf:** Yeah.

**Jerod Santo:** So the business...

**Brian Behlendorf:** \[unintelligible 00:29:09.13\] I'm the diplomat, I'm the one who cajoles the companies into joining the project and then working nice with each other... Because it is too easy in open source projects for one vendor to run away with the brand, run away and say "We're the only Linux company!" or "We're the only Apache company!" There were lots of concerns about that in the early days of any of these projects, so a part of it is keeping that at bay, and that means doing boring things like thinking about trademark, thinking about events to be at, and how to get the right messages out.

Then there's the other side, which is having the substance. It doesn't matter what you talk about if you don't have substance, right?

**Jerod Santo:** Yeah, the technology itself.

**Brian Behlendorf:** So how do you ge tthe communities together, how do you bring the right kinds of additional projects in, the right kind of additional thinking in, so that it's not just one person's view of what should be built, but a collective view, and where you can be challenged on that, where there's a healthy community of people who feel empowered to say "Maybe there's a different approach, maybe you're wrong..."

**Jerod Santo:** Right. It's the multi-stakeholder thing, right? It's that same thing.

**Brian Behlendorf:** "Let's get to rough consensus and running code as quickly as we can", but we really emphasize "running code." It doesn't matter that your ideas are big if you can't boil it down to running code. So get these communities together, ship it, using the best practices of the open source community, whether that's how Apache works, or on a security perspective the CII badging process... Like, how do you run security-conscious, security sensitive projects out there?

And finally, a lot of the companies interested in this are new to open source, so working with them and their developers to understand how to actually post a bug in a way that is a good bug report, useful, and not have to divulge details about your client or your private business. A lot of people are very skiddish and still unsure of how to do that... So 20 years later it feels like a lot of the same issues, but these are \[unintelligible 00:30:59.26\]

**Jerod Santo:** Everything old is new again. Give us the purview of the technology, where it stands, what it is... The meat of the matter.

**Brian Behlendorf:** So there's eight different projects at HyperLedger, all of them - except one - in incubation status still, because we're still growing the community cultures around these projects. The one that's graduated is called Fabric, and it's one of four which you might think of as frameworks at HyperLedger. It is a tool for being able to stand up a distributed ledger amongst a network of participants. So you and I and eight other people would independently run a Fabric node, and we'd point at each other, we'd be permissioned actually amongst each other, and then between us eight (or between us ten, or whatever) there would be this common system of record; you could write entries, I could write entries, somebody else could write entries...

**Jerod Santo:** They're all verifiable, irreversible...

**Brian Behlendorf:** Yeah, exactly; the immutability because it's a Merkle, which is a string of signatures with data, so that you can't -- you know, you'd have your copy, I'd have my copy, but the integrity of that would be verifiable. Fabric, on top of that, has a format for being able to write scripts that get deployed across the network, written in Go, that run inside of a Docker VM.

\[00:32:14.09\] What this means is that we can encode -- you and I could encode a promise that says "I promise to transfer to you some tokens in this network if the price of rice in China on this certain day", or something like that, write an options contract, or an insurance contract. And the cool thing is because it's a contract that now is shared on the network, then it's verifiable, everyone can see "Oh yeah, Brian made a promise that he would do this thing", and I can't pull it back. So your risk that I wouldn't make good on that promise or pay up is gone. This is called counterparty risk, and that's eliminated in a setting like this. Normally, that's a big issue; counterparty risk is why we have financial crises...

**Jerod Santo:** Yeah, exactly.

**Brian Behlendorf:** ...so this is a tool to try to fight that kind of thing.

**Jerod Santo:** Cool. So you got excited because of the land title situation... Obviously, with contracts, I think about land titles all the time, or property, but is HyperLedger specific to that, or you can use it for any kind of contract, any sort of thing? These tools...

**Brian Behlendorf:** Oh, it's very generalized. You could use it for all sorts of digital assets. You could use it as a cryptocurrency system if your currency are things like, you know, frequent flier miles, or loyalty points, or carbon emission credits, or other types of currency.

What's distinctive about Ethereum and Bitcoin is that they are currencies whose total volume is limited by the hash rate; it grows a little bit, and eventually all of them will be mined.

**Jerod Santo:** Right. It grows fast right away, then slower, slower, slower.

**Brian Behlendorf:** Exactly, but that's just one way to do it. Ripple is a different approach, where Ripple has a fixed set of XRP's, and I think they reserve the right to make new ones; I'm not exactly sure, but that's a different way of just managing a currency. But you could create currencies using Fabric that are either completely independent, not tied to anything, or you could say it's tied to a promise to have a share of a bar of gold sitting in a safe somewhere. Now, there's still the risk that that company doesn't make good on that promise, right? Or it could be your title to your home, or a title to a big diamond... That latter example is something I think we're likely to see one project move in which is using HyperLedger Fabric, which is towards -- it's all about the supply chain in the diamond industry and trying to keep blood diamonds from entering circulation.

**Jerod Santo:** Nice

**Brian Behlendorf:** The provenance of where these diamonds come from, right? So a titling system for knowing who owns what diamonds and who has the right to sell it. So in the future, if you have a giant rock that you wanna sell me, I can look up whether you actually own that in the ledger, and if you don't, I probably shouldn't buy it from you because you probably got it from a warlord somewhere...

**Jerod Santo:** That's very cool. You've got eight projects, seven in incubation, so it's still early days; you've got Fabric, which is ready to roll...

**Brian Behlendorf:** Exactly. So there's Sawtooth, which is a different approach to building distributed ledgers... I can go into that if you're interested. Another one called Iroha, which came from some of our Japanese members, which is tightly-coded C++ design for small systems, mobile clients, that sort of thing. Actually, an interesting project there with the bank of Cambodia, of all places... Then the fourth one is called Burrow, and this is actually an implementation of the Ethereum virtual machine, which is really exciting because there's a lot of good academic research, as well as a lot of market validation going on around the Ethereum VM and a smart contract language called Solidity. So now being able to graph that on top of the other DLT's is suddenly much more possible than it was before.

**Jerod Santo:** We did a show on Ethereum maybe nine months ago and had a lot of excitement in our community around it. Smart contracts... It's kind of interesting, it was right through the crisis -- in fact, we schedules the show before the crisis, then we had a reschedule, and then everything... It was one of these things -- you know, technology moves fast; well, cryptocurrencies are the fastest-moving things. Everything had changed by the time we actually did this show, so it was very interesting that way... But yeah, smart contracts are interesting; making the actual scriptability or the writing of those contracts, bringing that down to where it's more accessible to other developers is very cool.

\[00:36:19.22\] It sounds like these different projects -- it's not like you have these eight and they mesh together and perform a thing; these sound like different things.

**Brian Behlendorf:** Those four are very different things. They solve at a 100.000 foot view the same problem; it's kind of like comparing MySQL to Cassandra, to CouchDB...

**Jerod Santo:** It's just different takes at this ledger.

**Brian Behlendorf:** Exactly, exactly. Now, the other four... Just real quick, one is kind of a GUI tool for building these kinds of blockchain - what they're calling business networks, with a mix of all these things... It's kind of like Eclipse, what Eclipse was for Java, and it's called Composer. Another project is called Explorer - it's simply a way to navigate around your DLT and see who's published what... It's like a debugging tool, but also a way to understand what's going on. Sometimes all you see are these hashing pointing to other hashes, and it can be kind of confusing.

There's another tool called Indie (HyperLedger Indie), which is all about trying to build an identity layer that spans multiple distributed ledgers. It's trying to answer the question of "How do we get to a world where we have identities on these different systems without creating a master database of like one organization (government or private) that knows everything about us, but how do we get back to sovereign identity control. This is a recurring theme that has been a part of our industry for 15-20 years no one's ever really solved well. I think we have a key part of a solution to this, so I'm really excited about that... To the distributed identity problem.

**Jerod Santo:** You're actually keying into what I was gonna ask for my final segment here, which is about the future - what would it look like, assuming that everything that you're up to at HyperLedger is successful, and you build the things that you're trying to build, and the community thrives, and people accept and they all build around it... Assuming this success, what does the industry, digital assets and all these things that we're involved in look like five years from now? Is it utopia, is everything perfect now? \[laughs\]

**Brian Behlendorf:** It's not magic pixie dust...

**Jerod Santo:** That was a little bit rhetorical, but...

**Brian Behlendorf:** You know, some of these idealists have certainly seen our technologies used to create some really horrible things, so you have to be very cognizant of that. I think for businesses it means that a lot of the processes and rules about how markets work that are enforced by lawyers and enforced by people having to watch what goes on and can't automate what they do -- there'll be a lot more automation, and because of more automation, there'll be more audit ability, and it'll just be either impossible or much harder to commit certain kinds of fraud.

Hopefully, it means more stability in the financial markets, because I think the mortgage crisis had that industry used, distributed ledgers and smart contracts to define these structures, we would have had much less of a run-up and also a bit more of an orderly landing...

**Jerod Santo:** It would have caught it a lot sooner, right?

**Brian Behlendorf:** I don't know if you saw the movie The Big Short...

**Jerod Santo:** I did, yeah.

**Brian Behlendorf:** The chaos in there potentially could have been a lot less. Now, that's an idealist speaking, so we have to be careful about that. For consumers it might not look that much different; this is still largely a backend story, but where I think it plays out is -- so the idea of Bitcoin wallets really made real for people, like the fact that this is actually a currency - imagine that concept now applied to your health records, or to your land title and car title and other important documents that today you print out, or you probably don't even have in digital form... They might just be pieces of paper you keep in a filing cabinet, which you hope you remember to grab with you when a forced fire is coming for your house...

**Jerod Santo:** I was gonna say -- me personally, we have our title in a safe... In case the house burns down, it's a fire-resistant safe, but...

**Brian Behlendorf:** So that should be digital. There should be a way to take that with you. And for things like medical records - people don't even feel connected to their medical records. So my hope is that in all these important parts of life, as they get more digital, they actually get more sovereign, they get more about -- the things that you know are portable, that you don't have to depend upon a particular company or another to hold for you and look out for you, by that it gives you more power as a consumer, more control, more flexibility.

**Jerod Santo:** \[00:40:13.02\] Awesome. Brian, final thoughts, anything you wanna say?

**Brian Behlendorf:** No, it's just really fun to be back at an open source conference. I've been coming to this for 20 years -- 21 years, we realized the other day... And to be amongst my peeps, I guess, and to see the interest and energy here; people still wanna understand what it's about, and so that's why I'm here... But more and more people are going, and we really wanna get our hands dirty with this.

**Jerod Santo:** Cool. Well, I'll let you get back to your peeps, and thanks so much for sitting down and having a talk with me.

**Brian Behlendorf:** Thanks.

**Break:** \[00:40:49.27\]

**Jerod Santo:** So I'm joined by Tague Griffith, who is the head of Developer Advocacy for Redis Labs. So cool that there's businesses around Redis, right? Or maybe just one - I don't know if there's more than one, but just the fact that Redis is a thing that still exists in the world... So much, and it's so vibrant that there's like a cottage industry around it - to me it's just cool!

**Tague Griffith:** Yeah. Well, I would say it's even more than just a cottage industry... I got this job -- I come from a Redis developer background. I was doing large, 25-billion operation a day systems using Redis, so I've been talking a lot about the work that I had been doing with Redis, and it was really kind of a natural transition... And there really is a huge ecosystem around Redis. Then we have Redis Labs to provide the standard enterprise version of an open source product, and we sponsor the open source product... But I wouldn't even call it a cottage industry.

**Jerod Santo:** Okay, it's bigger than cottage.

**Tague Griffith:** Yeah. We were just at DockerCon a couple of weeks ago right here in Austin, and we're actually the number one downloaded database container on the Docker hub now...

**Jerod Santo:** Really?

**Tague Griffith:** It's Redis, yeah.

**Jerod Santo:** It fits into so many use cases... If you have your favorite relational database of choice, everybody can just throw Redis into the mix and have some immediate wins, so it makes sense that some people are pro this, pro that, but everybody loves Redis.

**Tague Griffith:** Yeah, I think one of the things is it's very easy for developers to approach Redis. You've got all these data structures that are very similar to what you work with in Python, or Java, or whatever language you're working with, and it's very easy to do incremental projects with Redis. So you start maybe just as a hobbyist, and then you drop it in as a cache, your first actual real production system. Then you start finding other data structures and uses of Redis where it can really either accelerate performance, store data that doesn't fit into SQL databases really well... And then even you start looking at more of like the commercial products to hit on the high availability, the scaling and some of that. You've got this whole range of systems and uses you can apply this one product to.

**Jerod Santo:** \[00:44:19.28\] Refresh me on the history of Redis a little bit. So you had -- I always call them Antirez \[N-Tie-Rez\], because I just say it in my head... Maybe it's Antirez \[N-Tee-Rez\], I don't know. Salvatore Sanfilippo started this years ago; he actually became a sponsor, but I think he got hired by VMware for a while, I don't know... It was kind of like at the frontier of paying people to do an open source thing, and how that was gonna work out, and I think we've even shows with him throughout that part, but that was years ago; I haven't kept up with where Redis is, except for as a user. Tell us a little bit of the history - maybe the recent history - of the Redis project.

**Tague Griffith:** Sure. So I think it was around 2009 when Salvatore first released Redis, and it's -- I always pronounce it Antirez \[N-Tee-Rez\]; it actually comes from -- he and a friend were looking for handles, and it comes from Trent Reznor... I always kind of wondered where that came from, and it comes from Trent Reznor.

**Jerod Santo:** He doesn't like Trent Reznor, he's anti-Rez.

**Tague Griffith:** Maybe... Actually, it's slightly different; I think he likes Trent.

**Jerod Santo:** Okay... I'm trying to start a mythos here. \[laughs\]

**Tague Griffith:** His friend was going by the handle Reznor or Rez, so he just sort of went to the opposite--

**Jerod Santo:** Gotcha!

**Tague Griffith:** That's how I've heard it.

**Jerod Santo:** Very good.

**Tague Griffith:** Yeah, so he started it, it kept growing and growing... I sort of came to Redis -- I used to work at Flickr and Yahoo! and we were very early adopters of Redis. Then all this community started building around it, so you had sort of the first Redis conferences, then you had Salvatore - VMware started sponsoring it, then Pivotal was providing some support, and then eventually Redis Labs showed up; we started as a cloud provider of Redis, and then thought it would be strategic and useful for us to sponsor the open source project, and now we sponsor open source Redis, and Salvatore works with us very closely. We contribute back to the product, as well as we have evangelists like myself and Itamar and our employees who go out and support both the purely open source Redis and our commercialized versions.

**Jerod Santo:** Cool. So is he still able to work on it full-time, but now through your guys' sponsorship, or...?

**Tague Griffith:** He does. He spends most of his time coding; in fact, he resists really anything that kind of gets in the way of coding.

**Jerod Santo:** Good for him! \[laughs\]

**Tague Griffith:** I'm very jealous. \[laughs\] I come from a developer background, so I love writing code, but... He's definitely -- he works with us, but he ultimately owns the agenda. It's his open source project, we support him, we support the project.

**Jerod Santo:** Yeah. So how does that feel from a business perspective, kind of being in the hands of somebody else? I guess that's how you got to where you are now, because he's proved he's got good hands, but is there any -- lack of control can sometimes scare businesses; does he have any of that?

**Tague Griffith:** I don't think it's a problem, I think it works really well. I think the bigger things are trying to be sensitive around community... We need to do the right thing by the open source community, as well as our users, so balancing that out, being fair to the open source. I always feel like it's very important for us that we support both purely the open source, as well as our commercial users.

I think it involves different ways of working. If you look at a lot of corporations, they like to have plans, and really what we have to do is we have to take his technical direction; he sets his direction, we work with him to contribute, and that means sometimes he may not like our contributions, other times he does, and so we work in the same framework as every other contributor to the open source Redis.

**Jerod Santo:** \[00:48:10.00\] Excuse me if I'm a little distracted... There's a lot of people that come to OSCON, but there's an actual pigeon that's walking around behind you; that's why I'm trying to pay attention, but I'm also like -- you know when you see a squirrel, and you're like "A squirrel!", but there's like a literal pigeon that just keeps flying around.

**Tague Griffith:** Yeah, the pigeon dropped by our booth earlier to learn about Redis, so even the pigeons love Redis.

**Jerod Santo:** It's like, everybody's coming to OSCON.

**Tague Griffith:** Yeah.

**Jerod Santo:** So you're here, you're at an event like this, you guys have a booth... What are the kind of things - you're talking about Redis evangelists - that you guys say that would get somebody who's like "What's Redis? Why would I use Redis?", what's the most compelling bit about it?

**Tague Griffith:** Sure. I think one of the big things is the flexibility - it's very easy to approach, it has a lot of data structures that you can use to solve various engineering problems... Like we talked about earlier, the sort of "incrementalness." It fits into these agile models, and also you can sort of start using Redis alongside other systems to improve your performance too, and store data in a way that doesn't work well in SQL or relational databases... And then you start really iteratively building on your success with earlier projects to build more and more Redis. That's how I got started when I was a developer. I started with the basic key-value paradigm, using Redis as a key-value source, and then started moving into storing other pre-computations, persisting data, all of that, and it's very natural... You can kind of just build and build and build on that experience.

Redis is fast. Everything is in memory. Any sort of well-structured Redis database is almost always gonna have all your operations served in under a millisecond, which is extremely fast. There's very few systems that can offer you that level of low latency.

**Jerod Santo:** I've never used Redis as a primary story or as a persistent store where this is like the one place my data lives; it's always like a cache, or something where I can run some stuff that's ephemeral... I can recalculate it if I have to, right? In the case of data loss. Surely, there are people that are using Redis as their one and only, in persistence...

**Tague Griffith:** Definitely, yeah.

**Jerod Santo:** Tell us that story. How does it work in that sense?

**Tague Griffith:** Sure. I actually think that's a very common way people come to Redis. Everyone knows Redis as sort of the key-value store...

**Jerod Santo:** A flexible cache that you can use in unique ways.

**Tague Griffith:** Yeah. Everyone loves Redis as a ca-- that's actually almost kind of one of the biggest challenges of my job, that everyone knows Redis as the cache...

**Jerod Santo:** They put it in the corner...

**Tague Griffith:** ...and I'm like, "Hey, there's all these other things you can do with Redis!" It takes a lot of people a while to get to the notion or the idea that you can use Redis persistence. There's multiple modes of persistence. There's sort of the snapshot version of persistence, there's also the changelog version of persistence, so you can tune - and this is one of the nice things with Redis, is that you can tune those trade-offs between performance, persistence, durability guarantees, your sort of window of loss, so you can find kind of the sweet spot that works the best for you as a developer.

**Jerod Santo:** Nice.

**Tague Griffith:** But I know a lot of people who are like, "Oh yeah, Redis is great, it's this great cache", and it's a big kind of leap of faith to go from cache to "Oh, but I can use this as a persistent store!"

**Jerod Santo:** It feels, because it's so easy and lightweight and flexible, it feels disposable, it feels ephemeral... You always think it's like an add-on, but the reality is it's very capable in other ways.

**Tague Griffith:** It's very capable. In fact, I gave a Birds of a Feather at OSCON to really talk to people about getting beyond that notion of just as a key-value. And I think so many people come to Redis as a key-value, as a cache... Everyone knows it is that, they just never get beyond that and look at all the other powerful things you can do with Redis.

**Jerod Santo:** \[00:52:03.10\] Yeah. One of the things that Salvatore added probably a couple years ago now which was really cool was the scripting stuff through Lua... Lots of improvements to Redis over the years - what does the future look like? You're obviously involved in where it's headed... Push us out a year or two - what's the new stuff that's gonna be coming down the pipeline?

**Tague Griffith:** So I'll make a little bit of a plug - there's gonna be some new stuff announced at RedisConf, which we run in San Francisco.

**Jerod Santo:** Okay, when is that?

**Tague Griffith:** It'll be at the end of the month, so we'll be revealing more of the -- well, really, Salvatore will be revealing more of the roadmap and some cool changes that are coming in. I think the big one for this show, which was announced last year (the conference) is modules; that's the new really powerful thing we're working on... So this has been a collaboration between Salvatore and Redis Labs. We have several of our engineers contributing both modules and support for the modules code.

What modules are gonna give Redis developers is now you have a way of extending and modifying and changing Redis without having to convince Salvatore that this is the thing that Redis needs. It's one of the great parts of open source - it's not a modular extension to Redis without needing to go through the \[unintelligible 00:53:24.12\]

**Jerod Santo:** Right, right. It's actually a great proving ground too, for things that could go into core; once you have like a plugin or module model, you don't have to convince him, but if you build something that's super useful and all of a sudden everybody loves it and it becomes huge, it's like "Actually, that makes sense to be part of Redis", so it's cool that way, that you can have a proving ground.

**Tague Griffith:** And actually one of the maybe interesting things is it's also going backwards from that. Salvatore did a fork to provide basically a message broker kind of system based on Redis, and now he's realized that he can take that and turn it into a module, and instead... So his fork is essentially collapsing--

**Jerod Santo:** Was that dmesg?

**Tague Griffith:** Disque.

**Jerod Santo:** Disque, okay. Yeah, I remember that.

**Tague Griffith:** So he's realized that he could take that and provide it as a module, so he's hoping to find time to work on that... But it's sort of interesting, it's almost the de-evolution of a fork into something else.

**Jerod Santo:** Right. It's like he forked it, and he modified the main thing so he wouldn't have had to fork it; he could provide that as a module now. Very cool.

**Tague Griffith:** Yeah. And for Redis Labs, there's a lot of advantages; we can provide things for our customers in a way that doesn't necessarily impact open source, in a little bit of a faster way, faster turnaround. We're trying to do a lot of our modules open source, and we're also trying to put together a module registry so that you have a good authoritative place to go look for new modules.

You can go on our GitHub and you can see a lot of the modules that our engineers have written. Right now we've written one to make JSON a native data type within Redis, ReJSON. There's also a secondary indexing and search module, and then also some things around machine learning, so you can use Redis to sort of parameterize machine learning models.

**Jerod Santo:** Well, Tague, this was fun! Thanks so much for talking to us.

**Tague Griffith:** Great, thanks for having me!
