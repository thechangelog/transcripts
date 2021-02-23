**Adam Stacoviak:** What's up? Welcome back. We have an awesome show today. We're here to get community reactions around the Elastic vs. AWS situation, and the SSPL license change of Elasticsearch and Kibana. Elastic relicensed with the SSPL. There's a few people on this show that believe they went about that license change the wrong way, but this is not the beginning of the story; this conversation has been going on for a while.

In fact, Adam Jacob brought up the subject of Elastic and AWS on episode \#353 of this show. On that episode we talked with Adam about the war for the soul of open source, and the title of that episode could not have been more prophetic. To kick things off, we're going back to that conversation with Adam. For context, Adam is co-founder and board member of Chef, and we're talking about business models and how they correlate to open source business models, and how from Adam's perspective the AWSes, the Azures and the Google Clouds of the world provide a humongous marketing funnel for open source businesses like Mongo and Elastic. Here's the conversation with Adam.

**Adam Stacoviak:** Let's talk about the business challenges commercial open source companies face. You said earlier in the call that things are thriving now, and we see Elastic and others out there thriving as well, that have been in similar situations as Chef. Talk about the business side of things for Chef.

**Adam Jacob:** I think in order to really go deeper into this, we've gotta just set some ground rules for how we think about business. How I think about it, and how a lot of people in the modern era of software startups think about it is, in the smallest nutshell, you can imagine that you have this funnel. And at the top of the funnel is everybody who might/could ever use your product; so every possible person who would ever care. That's your target market.

The bottom of the funnel is customers, people who pay you money for the privilege. And what you're trying to do is get people from the top of the funnel to the bottom of the funnel. It's just "How many people at the top can I push to the bottom?" And there's a ratio there, where you want that number to be as high as possible. You'd love to get 100% of them, but you know that you won't. So you're trying to just extract dollar bills from the top, to the bottom.

There's a bunch more we could go into in terms of metrics, and recurring revenue, and all kinds of stuff, but the tldr there is people at the top, money at the bottom. So with open source - we talk about it as an open source business model, but that's wrong in the same way that dev ops isn't a job title. Dev ops still isn't a job title; it never was a job title. But we lost the war. There's plenty of dev ops in the world. So the idea that that's not a thing - it doesn't matter that I'm a pedant about it.

The same thing is true in open source business models. There is no open source business model. There are business models, and then there is open source. And they're two very different, very separate things. There is nothing unique about open source and business. Business is business. You get people from the top of the funnel to the bottom of the funnel. You either do that with the unit economics that make you money or don't make you money; if they make you money, then you can pour more dollar bills into the acquisition of people at the top of the funnel, to get to the bottom... Even if that means you don't turn a net profit, it'd still be a great business, because as soon as you stop burning money to acquire more stuff at the top, you make a lot of money at the bottom.

So in open source, when we talk about open source business models, what we really are talking about is how do I create a channel at the top of that funnel, so people come in in multiple different ways? And we talk about those as channels. One channel will be "I'm an open source user of your software. I download MongoDB, I download Redis. I've used it, therefore I'm in that open source channel, so the bottom of the funnel."

Another channel would be my boss, the CIO, heard about Redis in the CIO Magazine. He tells me "You should use Redis." Now, I'm in a different channel than the open source channel. Or I get a cold email from a rep that says "Have you heard about Redis Labs?" That's a different channel. So we have all these different channels. There's a partner channel, where maybe the guy at Pivotal, who was consulting on your Cloud Foundry deployment, tells you that you should use Redis. That's a partner channel.

So we have all these different channels that people come into our businesses through. This is true of every business. Again, it's not unique to open source. But that open source channel is interesting, because it's humongous. If you're a successful open source project, that channel is full of people, because lots of people are using the software, and that's why it's successful open source software. So it kind of dwarfs the others in pure numbers. Just the sheer magnitude of what's possible is really high.

And so when we're designing and thinking about our businesses, what tends to happen is we think about the revenue that that channel produces as belonging to us. If I'm the Chef people, I look at that channel and I go "Any Chef user belongs to me." And if there's competition in that channel, I don't like it, because it means somebody else can compete with me to monetize the people that are at the top of the funnel.

A good example here is if I'm MongoDB and I sell Atlas, which is their hosted SaaS product for MongoDB, and Amazon and Microsoft are both gonna offer MongoDB as a service - that competes with me to monetize the bottom of the MongoDB funnel. I'm MongoDB, I make this investment at the top of the channel, I expect a return at the bottom, and now they're competing with me in the bottom. And this comes back to "How do you feel about that competition?" is the question. Because in one point of view, you're like "Well, competition sucks. I'm the one who put all the money into building it, I'm the one who did all of this stuff", so you look at this thing and you're like "I deserve the money at the bottom of this channel." Well, flip that over though. The value of the channel is that it's massively huge. Its adoption, the size of the number of users is why the open source channel was valuable in the first place.

If Amazon or Microsoft creates services that sell what I sell, what's the impact at the top of the channel? What does that do to cement MongoDB as an excellent choice for users at the top of the channel? The answer is it jacks it up. Amazon has this Chef service, they sell it for money and they do revenue share. So they sell what used to be my proprietary software, but now my distribution. You can buy it from Amazon as a service, directly from Amazon; we do rev sharing together. Amazon runs and maintains that service. I promise you that my open source channel got bigger when they did that. The fact that that button exists meant more people were willing to use Chef than they were before. The pie got bigger.

So what's happening when the Redis and the Mongos of the world look at that problem is they decide that the top of the funnel doesn't get bigger, or that they don't care about it getting bigger, and instead they care about the extraction at the bottom of the funnel. So they're nervous about it. They're like "Oh, Amazon will outcompete me. They'll sell it for less. They'll bring better features..." But this, to my point of view, is completely bonkers. Amazon is never going to invest more in MongoDB than MongoDB. It's insane on its face. And the idea that that competition exists, and it limits their ability to monetize, also to me feels false.

A good example is Elastic. Amazon has had an Elastic service running for as long as Elastic has been monetizable, basically... And Elastic went public, that whole time, with Amazon as a competitor. But you know what - I've ran Elasticsearch, I use it as a component in my product; one of the reasons is that it was a dominant standard. How did I know? Well, everybody offered Elastic as a service. It was the de facto thing, so that choice was easy, and I wound up in the channel.

So from a business point of view they're making these decisions because they believe that that's what's best for the extraction of capital/revenue at the bottom of the channel, and they're doing it at the expense of the spread at the top of the channel.

**Jerod Santo:** In your case, you've got a rev share with Amazon. Is that the case with Mongo or with Redis, or was that unique to Chef? And would that change your outlook at all if that rev share was gone?

**Adam Jacob:** It's not the same. I don't know -- I was certainly not privy to whatever negotiations they may have had... I know the ones I had. You know, one of the things that Amazon, or any partner, anybody who's gonna run your code as a service needs is the assurance that they'll always be able to provide that service to their customers. And you know what it's hard to do that with? Proprietary software. Because my only hedge is the business arrangement. Do you see what I mean? I can sign a contract that says so, but if I change the terms on my proprietary software or I build \[unintelligible 00:11:38.11\] well, can I still run that thing as a service if we bifurcated it? What's the deal? So the mechanism there is really complicated.

One of the reasons that that rev share exists is because so much of those assurances about what's in the open was in the open. Even more so now. That doesn't mean that that's always what Amazon will do, or even what they should, but that's how it worked for us. If it didn't exist, it wouldn't really change my point of view. Because if the question is "Can I as the primary producer of the product, and owner of the brand, and the reason that people attach to those things, outcompete someone who is essentially selling a generic version of what I sell - if I can't outcompete that person, shame on me." You really can't convince a customer that the best person to service their MongoDB is MongoDB? Because man, if you can't, there's something fundamentally broken in the value proposition here. And I think the truth is that they can.

If you look at Mongo's performance, if you look at Atlas' sales numbers, it continues to go up. It was going up before they changed the license, and the reason is it's a good product, and it's a better product than the one that you receive if you just turn on DocumentDB on Azure. Because it's kind of bare bones when you turn it on in Azure. And the Atlas version has all kinds of stuff that the other one doesn't have.

The idea that that competition in open source, where the reason you're here is because you have this massive channel - it doesn't make much business sense to me, but that's the conclusion we would come to. I understand how you get there, but it doesn't make much sense.

**Jerod Santo:** Aren't disruptive products though not necessarily better? They're usually actually worse, but they're good enough, and the cost is disruptive. So in the case of an AWS version of Mongo - yeah, it's not gonna be as good or as maybe well supported, or have as many features as Mongo's version of Mongo, but it's satisfactory, and it's way cheaper. So it's disruptively cheap. And then you add to the fact that there's no R&D, there's no development costs from Amazon's side, so you're not competing with them on features. They're just free-riding all the features that you're building.

**Adam Jacob:** Well, but here's the thing... So this is where we come back to the funnel. Now we're back to the business. So - sure, maybe Amazon -- but this is why it's good business for Amazon, to launch your stuff as a service, instead of just compete with you directly. So you brilliantly elucidated why they would want to launch a Mongo service in the first place, right? But as soon as they do that, if the top of the funnel was fixed, if that created no more interest in your product than it did before, then you'd be right. But it doesn't. Instead, it turns out that the single largest pool of software developers on the planet are the ones that use Amazon and AWS, or Azure, or Google. How many of those developers are using one of those platforms? And if your stuff is on all three of those platforms and it's not on the others, how many eyeballs do you get that Cockroach doesn't? The answer "A ton of eyeballs! So many eyeballs!"

So the size of that funnel, your possible monetization gets bigger, hugely bigger than it was before. And in that moment, your ability to capture that revenue - every single one of those cut-rate DocumentDB users is a potential lead that's already using your product. So all you have to do is go find them and be like "Yo, did you see how much better our console is, how much better our operations stuff is? How you can get on a Zoom with a dude that wrote that indexing feature when it's broken? I dare you to get that out of Amazon." And the next thing you know, Citibank is like "You know, Atlas looks pretty good."

**Adam Stacoviak:** I think those kinds of ideas though sometimes seem so logical, but yet not everybody thinks like that.

**Adam Jacob:** Yeah.

**Adam Stacoviak:** So I think it's a great idea, of how can you leverage the fact that these platforms are so massive that they actually become your marketing channel for you.

**Adam Jacob:** They are your marketing channel for you. And the only thing you have to give up is that they're also going to monetize some number of your customers. Back to open source's punk-rockness, right? There's, like, an F the man vibe, where like when you're saying that Amazon's a net-positive for your business, everybody's like "But they're the man! And Amazon is gonna destroy Elasticsearch." And you're like "Dude, Elasticsearch is worth 1.5 billion dollars, with a B..."

**Jerod Santo:** It's like that commercial where the guy is like "Um, sir, you are the man." Do you remember that commercial?

**Adam Jacob:** Yeah. Like, who exactly are we protecting here? Because the last time I checked, they were public and killing it.

**Break:** \[00:16:16.22\]

**Adam Stacoviak:** Next up is Heather Meeker. Heather is a well-respected open source lawyer and a specialist in open source software licensing and strategy. She wrote the book Open Source for Business, and it serves as a guide to open source software licensing. We're talking to Heather because she's a lawyer who wrote a license. The SSPL license is a result of her work with MongoDB, and we wanted to understand the design and the intention of the license. Alright, here we go with Heather.

**Adam Stacoviak:** Heather, let's open up with the SSPL - you were the person behind writing it, is that correct?

**Heather Meeker:** Yes, I helped MongoDB draft the license, with of course the help of Mongo legal counsel and their business team. I think it's fair to say that I led the drafting of it.

**Adam Stacoviak:** Gotcha. And the full title of it is "The server-side public license"?

**Heather Meeker:** Yes, that's right.

**Adam Stacoviak:** Take us back to the early days of drafting it... What's it intended to do? What's the goal of this license?

**Heather Meeker:** SSPL was drafted in order to meet a need in a particular way. I'll explain what I mean by that. At the time - and this would have been late 2018 to early 2019 - many companies that were providing software under open source licenses were very concerned about the use of the software by cloud services providers. And what they were concerned about was that the cloud service providers were using the software not contributing back, and not participating in the development of the software.

At that time there were actually quite a few companies, and most of these, by the way, were companies in what I would call the platform software space, or middleware software space. And they were trying to figure out what to do about that. They basically went down two different routes. The first route was the source available route, in what we call an open core business model. And that's not what SSPL is. But that's where you have a core of open source software, usually under (say) Apache, and then you reserve some of the upsell elements for under proprietary or source available licenses. That's the route that most companies went down.

Mongo, on the other hand, wanted to see if they could create a license that was an open source license, but that managed this issue. And that's how the SSPL came about. They drafted the license, submitted it to Open Source Initiative for approval as an open source license, and eventually it was withdrawn after quite a bit of comment, without a particular ruling from OSI on whether it was appropriate for approval as an open source license.

**Jerod Santo:** What happened in that proceeding? What were the deciding factors? I guess they didn't reject it, but it was just being debated to a certain degree, and then it was withdrawn eventually. I assume it was withdrawn because it was not going anywhere... Or was there a different reason for withdrawing it?

**Heather Meeker:** It was a long and fraught debate, and the debate had to do with a number of concerns. I would encourage anybody who's interested to go and read the archives of what's called License Review, or License Discuss... But I'll try to summarize, understanding that there were a lot of comments and I can't summarize them all...

**Jerod Santo:** Sure.

**Heather Meeker:** The first was technical commentary about whether the license met the open source definition. So there is a definition of open source, there's also a free software definition... One of the main tenets of that definition is that the license can't have any license restrictions. So that would be source available, if you say you can't use a software for this purpose. It also says that it can't discriminate against users, or technology contexts, and so forth. I'm paraphrasing, of course.

So there were those aspects, and there were some comments about that aspect of the license. There were also a lot of comments about who had drafted it, the process by which it was drafted, and what Mongo's intent was in creating the license. So those were meta comments; not about the license itself, but about the context. So all of those things were being discussed. And if you've ever been on one of these discussion groups, you know that they get discussed in a non-sequential format, and it can be very confusing to follow. But I'd say those were the main themes.

**Jerod Santo:** Okay. And so do you think that -- I mean, I don't know if bias is... As the author of the SSPL, do you believe that the SSPL represents even the spirit of open source, if it's not officially an open source license, or do you think it's something different?

**Heather Meeker:** Well, we drafted it to fit the open source definition. And as a lawyer, you have to have concrete things to go on, and the open source definition is what we had. I think the discussion brought out that people felt that there was something beyond meeting the open source definition that needed to be satisfied, and there was a great deal of debate about that.

So we looked at the open source definition, we definitely avoided license restrictions, we avoided things that were discriminatory according to the requirements of the OSD... But all of the meta issues were things that really kind of couldn't be addressed by the draft itself.

**Jerod Santo:** There is some discrimination built-in though, right? Or how does it actually work in order to stop that particular problem that was trying to be addressed? Doesn't that discriminate in the use...? I know we get into legalese here, but you're good at this, so help me understand.

**Heather Meeker:** I would say not discriminatory, because in a way all copyleft licenses apply different conditions when you do different things. So if you use discriminatory in that way, then GPL2 is discriminatory, because it only applies certain conditions to redistributors. So that is actually fair game in copyleft licensing.

**Jerod Santo:** Okay.

**Heather Meeker:** SSPL applied specific conditions to use of the software -- I'm paraphrasing now, but software as a service to provide the same functionality of the software. So yes, there were conditions that were imposed in those situations that weren't imposed otherwise, but that I think for most people isn't the meaning of discriminatory, according to the OST. Discriminatory would be more like can only use this in a particular field of use. You can use it in medical devices, but you can't use it in nuclear weapons, or something like that.

**Jerod Santo:** You can use it for good, but nor for evil.

**Heather Meeker:** Well, it's interesting that you say that, because there is now a new licensing movement called the Ethical Licensing Movement, that actually does impose conditions based on ethical concerns and moral concerns, and those are clearly not open source licenses, because they actually do impose license restrictions. In other words, you can't use the software for this particular purpose.

**Adam Stacoviak:** I'd heard about this too, where -- I believe it was in China, there was a specific license about companies that didn't adhere to work ethics. I think it was like 999, or something like that...

**Heather Meeker:** The Anti-996 License.

**Jerod Santo:** Yeah, that's right.

**Heather Meeker:** That was actually very interesting, if you'll permit me to make a comment about it...

**Adam Stacoviak:** Please, yeah.

**Heather Meeker:** It was first of all a very well-drafted license. It was professionally done. It did address labor conditions, and again, I'm paraphrasing, but the license says you can't use the software if you are violating the international labor standards. And it was intended to raise consciousness about labor practices in China. But what was really interesting about that is that the license was released on GitHub, and -- by the way, I think it may have been more a thought experiment than anything else... But it then caused that GitHub repository to become a vehicle for people to discuss the issue. So it became almost like a social networking initiative to raise consciousness about the issue, rather than specifically to develop a licensed document. So I thought that was a very interesting phenomenon from the point of view of what happened around putting the license in GitHub, and around the development of the license.

**Break:** \[00:25:58.25\]

**Adam Stacoviak:** It's interesting how there's so many usages of licenses... And you'd mentioned the OSI approval process and how it was contextual in terms of Mongo's intent of the license change, and the intent of the SSPL license in general... And you also mentioned the OSD and its criteria in your blog post on the COSS.community. You mentioned how many of the legacy licenses in the OSI, approved long ago, would probably not be approved today... And then you'd mentioned that the criteria for the approval has changed, but the OSD has not. So it seems like there's a lot of moving targets in terms of getting approved by the OSI, and Jerod mentioned in terms of "This isn't an OSI-approved license. Do you feel it is open source?"

It's kind of an interesting perspective, just the fact that there's this OSD that's been drafted. I think the last time it changed was 2007, if I recall correctly. It's been a while back, but the criteria is changed.

**Heather Meeker:** It was a long time ago. It basically hasn't changed in the time that I can remember looking at it. But I think what's interesting about that is that what OSI is doing is trying to create community consensus, and isn't wedded to this written definition. By the way, I say that because that's what they say. Approval of a license does not merely require it to meet the open source definition. So it does raise an interesting question about the clarity of the criteria and the process... But you know, this is a community process, so those are always -- they are living, breathing things, and they get developed as they go, and people are always pushing for transparency, but it can never be perfect.

**Adam Stacoviak:** The fact that this OSD document hasn't changed in a while though - is that a good thing or a bad thing? Because you might say it's a bad thing because it doesn't reflect the way that modern software is developed and deployed into consumer's hands. And then you might say it's a good thing because it's so strong and it doesn't need to change; the definition is so strong that it doesn't need have to change. What do you think about the fact that it hasn't changed in so long - if that's a good thing or a bad thing.

**Heather Meeker:** Well, I actually agree with you that it's kind of a good thing and a bad thing... It has worked pretty well over the years, and it's been remarkably robust over the years. Maybe it's time to revisit it, but that would also be a very long process, and possibly very controversial. There are other definitions, by the way; there's the Free Software definition, and there's a Debian -- I think it's called the Software Contract. Sorry if I'm getting that wrong. But those are much shorter and less complicated... So I think if it were revised, there might be some interesting possibilities to harmonize those definitions.

I would say that whether the definition changes or not is one question. I do think that the transparency of the criteria for approval is very important to the community.

**Jerod Santo:** What's at stake for these companies and organizations? Maybe they pick SSPL, whether or not it's an improved license or not - what do they win or lose based on that? Is it the marketing value of the term, is it goodwill? What's at stake?

**Heather Meeker:** SSPL is used as part of a dual licensing model, and that is something that has been around for a long time, but it's not as popular as it once was. So it was really pioneered by MySQL, and so what they did was they said "Here's our software, it's under GPL (actually, they used a variant of GPL), and if you don't want to abide by the GPL requirements, you can negotiate with us for a commercial license." That's a process that's sometimes called "Selling exceptions."

So the strong copyleft licenses like GPL, and then later AGPL, and then finally SSPL, were all used -- in other contexts as well, but as part of these dual licensing initiatives. The reason that companies adopted them in a dual licensing strategy is that they were intending that people who are using the software commercially would probably have to come negotiate for a license. And what happened over time was that the MySQL model, which worked pretty well, began to break when software moved up to the cloud, because the requirements of GPL only kicked in on redistribution, and that wasn't happening anymore because of cloud deployment.

So then companies that were doing dual licensing models moved to AGPL when it was released in (I think it was) 2007... And SSPL is kind of a logical extension from that. So that's what they're trying to do - they're trying to allow people to use the software to test it out, to use it on a small scale, to use it to do certain things, but to require people to come to the table when they want to do things at scale, or certain kinds of commercial activities.

**Adam Stacoviak:** Yeah, because a cloud provider is a user essentially, right? I mean, at that point.

**Heather Meeker:** Yes, that's actually a very perceptive comment. They are users, they're not distributors of software...

**Jerod Santo:** Right.

**Heather Meeker:** It's a little bit of a complicated question, but I don't think there's too much doubt about that. So what that means, if you look (say) at the GPL, it specifically says that the license doesn't control the user of software... So that is where the issue comes to play... Because the cloud providers are users, and so under (say) GPL they basically don't have any conditions at all.

**Adam Stacoviak:** Right. And it's kind of odd \[unintelligible 00:33:21.14\] individual installations, but they are providing it to many. So it's still a one-to-many, it's still a many scenario. That seems to be where the issue is - the language of the future of software, the way it is, especially in cloud, is not a distributed model.

**Heather Meeker:** That's right.

**Adam Stacoviak:** It's a single installation \[unintelligible 00:33:41.13\] user model.

**Jerod Santo:** Right. The means of distribution have changed. You're no longer sending a binary or source code to be compiled by a bunch of people, you're setting up a service and then charging for the service. It's a new(er) way of doing it.

**Heather Meeker:** Yeah. And copyright law treats use and distribution a little bit differently. I think that one of the things it maybe didn't anticipate properly was copying at scale in order to deploy software for hundreds or thousands of users. That is something that is relatively new. So as software licensing has progressed, certain things worked pretty well when we were in a model where one person would use one copy of the software. But that isn't the world we live in anymore.

**Jerod Santo:** So when it comes to the letter of the SSPL, as reactions to Mongo initially, and now Elastic relicensing now... there have been critics, this is a debated thing about the topic - is it open source? Is it fauxpen source? ...which I think is a terrible term... \[laughter\] \[unintelligible 00:34:49.00\] hopped on the bandwagon and used it, but this is the verbiage that's out there... There are those who think it's a business risk, this SSPL. Now I'm reading from Vicky Brasseur's blog - you probably have read this...

**Heather Meeker:** Oh, yeah.

**Jerod Santo:** And she says she showed it to some IP lawyers, and she says "By using an SSPL project in your code you are agreeing that if you provide an online service using that code, then you will release not only that code, but also the code for every supporting piece of software, all under the SSPL. It's not a stretch to interpret the wording of the license as requiring users of the SSPL-ed software therefore to release the code for everything, straight down to the bare metal."

This is one interpretation of the license itself, saying effectively that there's perhaps this collateral damage that might happen because of the way that it's written. I would just love to hear, as the author of it - and I'm sure you've thought through these things - how do you respond to that, what do you think about that statement? Is it feasible, is it outlandish?

**Heather Meeker:** Well, I do think it's an oversimplification of the terms of the license. And don't get me wrong, these kinds of provisions are very complicated to read, so it's hard to reduce them to soundbites. I do think, on the question of business risk -- this is the way I look at it... I work with many, many companies to develop open source compliance policies... So what companies do when they develop those policies is they have a stop/go caution list... And you would not expect even AGPL to be on a go list. In fact, it's usually on a stop list already.

**Jerod Santo:** Yeah.

**Heather Meeker:** And SSPL will be there, too. Any network copyleft license, meaning any license that has source code sharing requirements when you deploy over a network - those will all be on a stop list. So when you say it's a business risk - well, yeah, but already a lot of the copyleft licenses were defined as business risks.

**Adam Stacoviak:** So you know. This isn't blindsiding you, this concern. It's known from the outstart.

**Heather Meeker:** Yeah, of course. I mean, you would not expect people to greenlight SSPL software. What they would do is they would look at the license and say "Okay. This is okay with us, or it's not", and then they would make a decision about it. So that's something that users have to decide for themselves.

I do think that what you quoted was overstating the risk somewhat, but you know, it's not useful to get into the details of it. You have to actually look at what the license requires, and it really is focused on particular use contexts, where people are providing software as a service.

**Adam Stacoviak:** I wanna say thank you to Vicky for writing this post, because I'm gonna quote one more and ask you about this... But very helpful, Vicky, in doing this call with Heather. She said, in regards to the SSPL, "Basically, it's a hostile proprietary license masquerading in open source clothing."

**Heather Meeker:** \[laughs\]

**Jerod Santo:** Now it's getting vicious.

**Heather Meeker:** I don't know what to say about that... \[laughter\] Proprietary is not open source, so it's really the same issue. I actually think if you look at the FAQs and announcements and so forth for Mongo and Elastic, they're pretty forthcoming. So I'm not sure what was is being masqueraded there... I think it's language intended to incite an argument, but I don't know that it's terribly meaningful in an objective way.

**Adam Stacoviak:** Yeah. The primary concern with the SSPL really is Section 13. A lot of the concern isn't really elsewhere in it. Obviously, it's a long license, but it's primarily Section 13, which describes what we talked about here, which is redistribution, restrictions on usage etc.

**Heather Meeker:** Yeah. If you were to redline it against AGPL, or even GPL 3, you would find that almost all of the substantive changes are in Section 13.

**Jerod Santo:** Well, Heather, thank you so much for joining us and explaining these things in ways that we could only fumble around in the dark to understand. I think it's been very helpful. Anything else that we didn't ask you, or anything about the license itself, or about the situation that is being discussed/debated that you wanna say, that we haven't asked you about?

**Heather Meeker:** Well, I would remind people that the alternative is probably to go to a source available license. So if people are calling it names and so forth, what they should consider is that businesses are going to do what their business strategy requires. And so most companies that don't adopt something like SSPL are going to go down the source available route, which is definitely not open source. So it's a question of whether you think half a loaf is better than none, I think... And there are definitely differing views about that.

I would say the reality is that most companies are actually going to use licenses that are truly restrictive, in a way, rather than SSPL. So I would say anybody who is using SSPL is at least trying to go down something like an open source route, even if you don't believe it's open source.

**Break:** \[00:41:00.00\]

**Adam Stacoviak:** Up next we're talking to Manish Jain, founder and CTO at Dgraph Labs. Manish came on this podcast a little over two years ago on episode 322, talking about licensing and relicensing Dgraph, so we thought it'd be fitting to get him on this episode as well... Here we go.

**Jerod Santo:** So Manish, you and Dgraph are in a somewhat similar situation to Elastic. You're not Elastic, but you're set up a lot like Elastic. Is that right?

**Manish R Jain:** That's true. Elastic's licensing, the way they have done it is that they had their open source code collocated with their proprietary code; it's all source visible, except the open sources under Apache, if I'm not wrong, and then the proprietary code is under Elastic... Similar to Dgraph - our open source code is Apache, and our proprietary code is under Dgraph license.

**Jerod Santo:** So as \[unintelligible 00:41:56.14\] where did you hear about this news? Did you read both sides? Have you read what AWS has had to say, and what's happened after the relicense? What's your purview?

**Manish R Jain:** I mean, Hacker News, right? Hacker News went into flames over this, and that's where I came to know. No, I actually did not have a chance to look at what AWS actually had to say about that... But I've read through the multiple blog posts that Elastic released about what they're changing, and some of the reasonings for why they're changing... And this is a story that -- it's not the first time. It's the same story that we already had for CockroachDB, we had this story for MongoDB, we had this across Confluent, and Redis Labs... This is just a series of changes that are happening in the entire open source ecosystem.

**Jerod Santo:** And you guys went through similar things as well, because we even have a whole show for you back in October of 2018, where we have you on the Changelog, "There and back again (Dgraph's tale)", an excellent name if you're a fan of The Hobbit...

**Manish R Jain:** \[laughs\] I am.

**Jerod Santo:** Like I am. Episode 322. So you've told us this story before; I guess we don't need to rehash the entire thing, but this has been an area of struggle for you and your company as well.

**Manish R Jain:** I wouldn't say it's such a big struggle as something like Elastic, where Amazon is directly "attacking" them... For us it's more of like a forward-thinking scenario, where we realized that we love open source, and just like the founder of Elastic mentioned in his blog post, I got my feet tapped into open source a long time ago and really believe in it... And when I was starting Dgraph, I was not inspired by any business motives; I was not planning about "Hey, five years from now we will make money." I didn't know how to make money from open source, I just wanted to build open source software. And that's how we got started.

So a similar trajectory there in terms of our interest towards the open source community. So yeah, I think the open source theme is similar there.

**Jerod Santo:** So what's happened since is that AWS has forked both Elasticsearch and Kibana, and are going to carry on open source forks - community forks, as they're being pitched as. What do you think about that? Are they gonna succeed, are they gonna fail there? Is it a real risk for Elastic, or no?

**Manish R Jain:** They did that once before with the Elastic Open Distro, and I think people were really concerned about how that would pan out... And Elastic's share price has not decreased too much, right? It hasn't gone into a spiral downward. So I guess they are doing well. They'll probably survive another attack from AWS.

But I think some of the criticism that I see online about MongoDB's SSPL and other companies is that these open source companies are motivated by business, and therefore they are somehow being morally challenged... But I feel like those same people then turn around and say "Amazon is completely okay with doing these kinds of things because it's well within their rights to do so because of the licensing put together by the open source." So the conflict that I feel is right there. You cannot have two different moral bars - one for the company who is making money out of your inventions, and the second for the inventor themselves.

Sometimes I just wonder how many open source infrastructure software has Amazon created and launched in open source. When do we expect to see DynamoDB coming out in open source, so someone else can build a business, like Amazon has done with DynamoDB? That'll be a great day for open source, if Amazon does that. But I don't think they have any plan to do it, because that's not how they operate.

So in fact I would say it's recommended for open source companies to make sure that they are able to build a successful business, just like Amazon is building, just like everybody else is building... And so the motivation to make money out of inventions is completely justified, on (I would say) moral grounds.

**Adam Stacoviak:** Well, there's a concern too, at least based upon Shay's blog post on Elastic saying that Amazon and AWS wasn't putting back into the open source bucket, so to speak... So from two avenues - one, the perspective you've just shared, which is DynamoDB for example isn't open source, and that's not part of their business plan to do that... But then the concern, and I suppose what led to this scenario we're in now is essentially AWS not playing by the community rules. The license doesn't depict this, and that's kind of what this move is doing. It's like "Hey, if you can't operate by community rules, then we're gonna put a license out there that makes it illegal for you to do things another way", so not pitching back into the open source thing.

But then you can sort of draw some sentiment from just simply the titles of their blog post on the AWS open source blog, back in 2019, from Adrian Cockcroft, "Keeping open source open - Open distro for Elasticsearch", which is something you mentioned. And then the second one is the more recent around Elasticsearch, which is "Stepping up for a truly open source Elasticsearch." It's an interesting perspective you've drawn there, where they haven't open-sourced certain things they have, because of business reasons. But then wanting to be a good community player in these ways, it seems -- I don't know... What do you think?

**Manish R Jain:** It is questionable, isn't it?

**Adam Stacoviak:** It is kind of questionable.

**Manish R Jain:** And you know, if you look at SSPL, the server-side public license from MongoDB, I'm actually still a bit baffled that it's not approved by OSI... Because it to me is a fork of \[unintelligible 00:48:23.03\] GPL, just like AGPL is, which also makes GPL a bit more permissive; if you look at AGPL, it allows you to not have to release your source code if you are using Git over the network, or something of that sort... I forget exactly the details there. But SSPL says that you don't have to release your source code if you're not directly competing by providing the core product as a service.

So it's more permissive than a GPL. I think it has all that matters, I feel, in my opinion, to be open-source-approved. And in a world where SSPL gets open source approval, I don't think we have any problem here. Then everybody has already sort of like gathered around SSPL, which we could not do around the Commons Clause; that was the same idea for Commons Clause, but it could not get us there. But MongoDB is a big name, so MongoDB could get the industry around SSPL... And then we don't have a debate, because it will be open source.

**Adam Stacoviak:** Yeah. There's some details around that. We had a conversation with Heather Meeker on this exact subject, and something she had said - which will be in the same podcast - is if you redlined SSPL versus AGPL, the primary differences that come out is essentially Section 13, which describes if you make the functionality of the program or a modified version available to \[unintelligible 00:49:51.17\] That's where the change is, is Section 13. Everything else is essentially AGPL. And there is a lot of debate around the nuance and the process to be approved. OSD is very clear; it hasn't changed in a long time. OSD being the Open Source Definition. That's very clear, because it hasn't changed, and it's even derived from Debian's existing rules on what Open Source Definition is. So there's some history there. But the criteria and the ways that you go about getting these licenses approved by OSI is a bit more difficult. You can read the transcripts and the notes from the meetings and stuff, but that takes a very motivated listener/reader...

So some of the intention of this show is to demystify some of that stuff and maybe give you a tldr, or tldl (too long, didn't listen). But that essentially is this criteria for getting it passed. You say that the SSPL should be, or could be open source. You're baffled, as you said, that it's not...

**Manish R Jain:** Yeah, yeah.

**Adam Stacoviak:** ...that it hasn't been approved by them.

**Manish R Jain:** Yeah. And to be honest, I haven't looked at the counter-argument to that. I'm sure there are smart people there on the other side and they have some counter-arguments. But from a slightly distant perspective, without having to go into the intricate details, it seems very similar, and maybe if it was built in the 1990s it might have already been involved in OSI.

But I think one thing that we should probably take away from Elastic's stuff is that the holy grail of license here is to -- so if you look at Elastic's license as well, it's divided into two portions. One is the open source part, and the other one is the completely proprietary part. So the proprietary part they're not changing, from my understanding. They're changing the open source part of their code, and making it available via either SSPL, or the Elastic license, and both of them sort of in some shape or form disallow building of a competing service.

**Adam Stacoviak:** Yeah, it restricts cloud service providers from offering -- this is quotes; it's what it says. "It restricts cloud service providers from offering our service as a service." That's in violation of OSD 6.

**Manish R Jain:** Right. And they are very clear about it's only to third parties. Not for internal usage. So if I am a big company and I need to build a product, I can provide it as a service to my other teams in the company, just not to your users directly.

**Adam Stacoviak:** That's a commercial restriction. "Don't compete with me", essentially.

**Manish R Jain:** Exactly, yeah.

**Adam Stacoviak:** Right. Because you can compete internally, inside your own company, and not make any money from it, but get great usage of the software. But you can't create a competing company against the inventor.

**Manish R Jain:** Yeah.

**Adam Stacoviak:** This goes back to what you were saying before, the inventor, or the user of the invention.

**Manish R Jain:** Exactly, yeah. And they can still build a commercial product on it, just not a competing service. But the holy grail would be to offer a single license. That takes away "Hey, this is the proprietary part of the code, and this is the "open source", or similar to open source part of the code." Ideally, it looks like what they want to get to is to offer a single license that can cover both their free and their paid features, while being as open as possible. If that would be there, I think we would jump on it immediately, because we also currently have dual license, which is what Cockroach has, which is what Elastic has, and many others have. But having that single license would be the holy grail.

And I don't know if you wanted to talk also about BSL, which is MongoDB's license, where they say that the initial code is gonna be proprietary, but after a certain amount of time (3-5 years) it will become open source and it will become Apache 2 (or something liberal), which is what CockroachDB is doing; their open source has switched to Cockroach BSL modifications slightly. That's also a great way to -- I essentially say the same thing, which is "Please don't compete with us by providing a service through our core product." And if you think of it in terms of "What's the core product for Amazon?" Let's say e-commerce is a core product, and if you were to use Amazon machines or Amazon technology to actually build competing stuff, I'm pretty sure they'd be pretty pissed as well.

So all \[unintelligible 00:54:35.27\] we have spent a lot of time and effort into building, and this is our main source of living, right?

**Jerod Santo:** Right.

**Manish R Jain:** Just play nicely. Otherwise we have to invent new licenses.

**Adam Stacoviak:** Yeah. David Cramer has shared some of his sentiment on that subject, because Sentry was licensed BSD 3, and transitioned to the BSL. And I'm paraphrasing, but what I can recall from that conversation (episode 371, Re-licensing Sentry), was essentially David was saying "I wanna do whatever it takes to help me run this commercial business, but also respect open source. Because without the business making the thing, there is no thing." And that's a paraphrase of David's sentiment on that. But that's essentially what he boiled it down to, was his concern in regards to transitioning away from BSD 3, to the Business Source License, which you mentioned.

**Manish R Jain:** Yeah. And actually, if you think about what is happening -- I mean, again, I argue that SSPL is very close to the AGPL or GPL; but SSPL is not open source. So what is actually happening right now is a bunch of open source companies, which truly believe in open source, are having to switch to "non-open-source" licenses. And that's not great. That's not great.

**Adam Stacoviak:** Yeah.

**Manish R Jain:** And the funny thing is they are all talking about the same one player in the market. They're not talking about a Google, or about Microsoft, or anybody else. In fact, in the Elastic blog post I mentioned that they have played very nicely with all the other players in the ecosystem \[unintelligible 00:56:10.11\]

**Jerod Santo:** Much to do about AWS...

**Manish R Jain:** Yeah, exactly. I have no personal thing against it. \[unintelligible 00:56:21.04\]completely fine. And from what I understand, they're not trying to build a Dgraph alternative... But there is something there where if a bunch of companies are talking about the same "curious actor"...

**Adam Stacoviak:** Actor... Yeah, I was gonna say, just call him an actor.

**Manish R Jain:** Yeah. I don't wanna say a bad actor...

**Adam Stacoviak:** Exactly.

**Manish R Jain:** ...because we just don't know... But a curious actor... I think there must be something there, right?

**Adam Stacoviak:** Do you think then, given what you had just said, that the OSI -- that it's in their best interest for open source to help these businesses that have this concern, have this trouble, to create an open source license that gives them the needs they have, to sort of solve the needs they have, these problems, but also adhere to the letter of open source? Because if you look at the intent, it seems like they're intending to respect and live within the world of open source, whether it's for the "open source" branding that can't be trademarked, because it's not trademarkable, but it certainly has a marketability to it. If you masquerade as fauxpen source - is that right, Jerod? Fauxpen source?

**Jerod Santo:** That's right.

**Adam Stacoviak:** ...then you're not open source.

**Jerod Santo:** You're faux.

**Adam Stacoviak:** But there's a marketability to saying you're open source.

**Jerod Santo:** For sure.

**Manish R Jain:** Absolutely. Yeah. And I think we do open source because it allows -- it's not just a way to have more eyes and make sure that the code is of high quality, and so on and so forth, but there's also... It's a distribution model. It's the way by which you think your software could be consumed by anybody, without necessarily having to pay you. And again, they're not saying "If you build a commercially-successful product using our software, pay us." They are not saying that. They're just saying "Just don't build a competing service against us."

Also, going back to the initiation of a bunch of these open source companies - it started with one or multiple people who just believed in open source. They just wanted to make things in open source, because they have consumed open source software in their life. When I was in college, I was all into Linux and I was playing with Gentoo, and Ubuntu, and whatever other Linux flavor there was out there, FreeBSD, NetBSD... And I just believed in open source. And that was our stance against Windows at the time.

So I've created multiple projects, some of which actually are popular, including Dgraph. And then we have Badger, and then we have Ristretto, and they are all open source, because we just believe in it. It's a bit of a pain to have to move away from that, even in theory, just because of this one problem.

**Jerod Santo:** So Manish - clean slate, start Dgraph over today; same exact software, same business. Pick a license. \[laughter\]

**Adam Stacoviak:** I love it.

**Jerod Santo:** What are you gonna go with?

**Manish R Jain:** I think SSPL is looking pretty attractive. SSPL is looking pretty attractive right now. And also, just notice one more thing - from 2010 or 2015 the world has changed to be more cloud-first, and on-prem later, than on-prem first and cloud later approach... So if I or somebody else were to build a service today, they might choose not to even make it open source. They might say "You know what - Snowflake has done really well by being a completely cloud-based system." If I'm not wrong, Snowflake is not open source, right? "So why open source?" Maybe that could be the question. It's like, open source already has tons of problems, because there is multiple actors causing so many issues... Why bother with all that? Just avoid all of that and just go completely closed source. And you could still build a good business out of it.

So then it becomes just a question of principle - do you still really believe in open source? Do you still believe that other people should be able to check your core and make sure that you're not doing anything fishy, or help you find bugs, or that kind of stuff? So it becomes a matter of principle than a matter of business, it seems like.

**Break:** \[01:00:50.09\]

**Adam Stacoviak:** Coming up in this segment, we're talking with Paul Dix, co-founder and CTO at Influx Data. Paul shares his perspective on running an open source business, how Influx Data is innovating their commercial offering while having a permissive MIT license version of Influx DB. Paul also shares his thoughts on the stand-off between Elastic and AWS, and why he's long on Mongo and short on Elastic. Here we go.

**Jerod Santo:** So Paul, tell us your name, tell us your company, and kind of your view of the open source world, and where your opinion is coming from.

**Paul Dix:** Yeah, so I'm Paul Dix, I'm the CTO and co-founder of Influx Data. We're the makers of InfluxDB, which is an open source time series database. I created it in 2013 and I've been initially running the company, and then a CTO, which I'm still doing to this day.

My experience over that time has basically been trying to build a business around an open source software project, particularly in infrastructure software, and in databases in particular. Elastic, obviously, I'm very familiar with. I saw it when they were initially becoming a company, I remember the project early on... Some of the work that they've done served as inspiration to me as I was building out Influx and the various parts of our stack.

**Jerod Santo:** Very similar software, very similar business model... It looks like Influx is MIT. Can you tell us your license selection and how your business works around it?

**Paul Dix:** Yeah, so all of the open source software that we create is MIT-licensed, and our business model is basically -- so we are at this point an open core business. So there's open source InfluxDB, which is MIT-licensed, and people can do what they want with it; it works essentially as a single server.

We have a fork of the open source project that is closed source and proprietary. If you want high availability or scale clustering of InfluxDB, that is our commercial offering. Essentially, we don't put clustering features into the open source. Everything else is fair game to go into the open source. If it has to do with a single server, optimizing query performance, APIs, functionality, all that kind of stuff - it goes into free open source.

So we launched this as a managed service inside of AWS in (I think it was) April of 2016. We launched it as basically like an on-premise software product that people could buy in September of 2016. Our AWS service is still running to this day. Essentially, what that is - it's the closed-source software spun up; a customer can come and sign up, they say what size instances they want, how much storage, how many instances... We spin up the closed-source enterprise version of our product on it, we add monitoring and back-ups and stuff like that, and that's the hosted version of the product.

The on-premise version is essentially you buy the software from us, it's an annual subscription, and then you run and manage it yourself. And that's either in your own data centers, but plenty of people are also doing it inside of AWS, GCP, all that kind of stuff.

Last year - or I guess late 2019 now - we launched basically version two of our cloud product, and that essentially is a very different kind of thing, because it's not just a database, and it doesn't look anything like the open source software that we create. The API is the same, but the underlying architecture and how everything works together is completely different. And that's for version 2.0 of InfluxDB.

So the model we switched to with 2.0 - we essentially moved to a cloud-first model. So we deliver that product continuously as like a SaaS service, and then over time, some of those features get pulled out into the open source InfluxDB.

**Jerod Santo:** Is that because of a realization that the other way wasn't working well enough? Why did you switch to the cloud-first model?

**Paul Dix:** It has nothing to do with open source versus closed; it has everything to do with software delivery cycles. Before, we looked very much like an enterprise software company. We'd have anywhere from two to four feature-bearing releases a year, which could then get shipped to our cloud customers and shipped to our on-premise customers.

The problem with that is you don't get that many cycles of iteration, and each release is super-painful to do, because there's so much code wrapped up in it... So I really wanted to move to a continuous delivery model, so we could get much faster feedback, features out to customers quicker, and the individual releases would be much, much smaller. So that had to do with basically wanting to be a cloud company and deliver a cloud product, as opposed to deliver a packaged on-premise enterprise product.

**Adam Stacoviak:** How does that trickle down to your open source then? How does InfluxDB, the open source benefit or not benefit from this switch?

**Paul Dix:** I think the benefit is that by the time something lands in open source, we've already vetted the features and vetted its functionality and how it works inside our cloud product. The thing is with our cloud product we're able to iterate on it and release fixes very quickly. Once you ship something in an open source release, it's much more painful to ship a fix, ship an update. So I think that's a benefit.

The drawback is I think it reduces the collaboration with the community in terms of what we're developing and how it's getting done, and all that kind of stuff. It basically makes the open source a downstream kind of product.

**Adam Stacoviak:** Yeah. \[unintelligible 01:08:30.15\] tweet you've put out, which is "My own preference is to keep open code permissive, and open, and have a clear strategy (as you just depicted here) with how that code will be used in the commercial offering." So you're eating \[unintelligible 01:08:42.27\] which is good...

**Paul Dix:** Yeah, so what I've just described is basically our 2.0 model... But I'm actually trying to move even beyond that, over to what I call basically like a complementary software model. We have a new project that we announced a few months ago, called InfluxDB IOx, which is basically the new core of the database, written in Rust, using Apache Arrow.

The way that we're building this out is essentially there's the open source thing, and then there's another piece of software that we have that is closed source. And as a whole, the system is designed to be two pieces of software, one of which is totally open and permissive, permissively licensed; you can do whatever you want with it. You can compete with us; that's fine. That's by design.

And then the other piece, which is the software that we're writing to be able to run the open source software in our cloud offering. So the reason why I say it's complementary is because what I want is I want our cloud product to be running the open source bits exactly as is, exactly as the open source community experiences them... Because it means we'll find bugs faster, and it also means we can have more of a collaborative effort with the community in terms of making improvements... Right now, with our Cloud 2.0 offering -- InfluxDB 2.0 open source is one project. Cloud 2.0 is totally separate. Now, we use some of the libraries from InfluxDB 2.0, but it's not even like a fork of the project; it's literally two separate projects and products, and they have the same API.

**Adam Stacoviak:** Yeah. Two masters.

**Paul Dix:** Exactly, yeah... With IOx--

**Adam Stacoviak:** In terms of serving two masters, is what I mean. Like, literally, you're serving two masters. You have two different projects. It's very difficult to serve both easily.

**Paul Dix:** Absolutely. Internally, we have a separate team that works on the open source bits, versus the people working on the closed source cloud product.

**Adam Stacoviak:** Right. I asked you the benefits to the open source, and it seemed like the benefit to the open source was obvious, but they're different, because they're separate. That's what it seemed like. And I was gonna ask you about that, because it seems like, with your cloud too that you mentioned, you can obviously push forward, but it's downstream; the open source is downstream, and it seems like maybe it's just disconnected, basically.

**Paul Dix:** Yeah, it's a bit disconnected. Whereas with this new model, again, my goal is -- we offer it as a cloud product first. We're not doing that yet. But then later we'll offer it as an on-premise product. But the idea there is that people who adopt IOx and deploy a bunch of servers and stuff like that - if they come to us and they want the on-premise product, it's a product that they add in addition to the open source software they're already running. They continue to do that.

It's very, very different than our old InfluxDB 1.x enterprise model, where our enterprise product is a replacement for the open source InfluxDX. I think that's a heavier lift, and it's a bigger ask for users to replace their open source bits. I think it's better if they're able to run the open source bits and continue to have that experience, because 1) it makes the contribution easier, it makes it easier for them to consider adopting a commercial product, because at that point they're saying "Okay, I have this commercial product, but I'm still using the open source bits, so I can still be sure that if the commercial relationship goes sour, or I decide I don't want that functionality, it's still good, I can still continue to use the open source bits."

**Jerod Santo:** There's some interesting ramifications that I think I would love to see play out as you go about deploying that new idea. If I'm understanding correctly, it's kind of like the open source bits is like the core software offering, and then the proprietary stuff is like a management controller, or like a deployment type of a thing. Like, all the things that surround it, that you would be offering as a service perhaps, but this is as a licensable edition...?

**Paul Dix:** Yeah, that's a good way of thinking of it. It's basically all this code that we have to write to offer it as a service - operations, back-ups, deploying new versions of it, management, all this kind of stuff.

**Jerod Santo:** Gotcha.

**Paul Dix:** The other thing is we wanna be able to offer that as an on-premise piece of software. Another way to think about this is the open source thing represents the data plane, whereas our closed source product represents the control plane. But the way the two interact is the control plane interact with the data plane through its public API. And that public API is open source... So literally, if somebody wanted to write an open source control plane for it, or if they wanted to write their own competing software products, they can do so and the license totally permits that.

**Adam Stacoviak:** Yeah

**Paul Dix:** And the thing is, we don't have to worry about our open source bits competing with our commercial bits...

**Jerod Santo:** Right.

**Paul Dix:** Because the responsibilities of the two pieces of software are clearly delineated. So there's no reason for people to put control plane bits into the main open source project. They would have to create a second open source project to do it, which would make sense.

**Jerod Santo:** Right. At that point you're kind of just deciding what is control plane and what is data plane. And that's kind of the same concept of like what goes in core and what goes in proprietary, isn't it? Like, what about back-ups? Well, it could go right into our core offering, but it's more of a control plane kind of a thing, so we'll put it over here...

It seems like you still make those decisions, you just make them in -- the two pieces of software are further apart, perhaps.

**Paul Dix:** I view them as further apart. When I think of open core businesses, I think of businesses where the commercial product is a replacement for the open source product. This is not that, and it's designed specifically not to be that. Take DataStax, for instance. DataStax Enterprise is a replacement for Cassandra, and now DataStax is obviously offering it as a service, called Astra, and that's doing well... But again, that's an open core model.

**Jerod Santo:** Gotcha.

**Paul Dix:** I think a good example is Google and Kubernetes. Open source Kubernetes certainly doesn't represent the entirety of GCP and all the software that runs that... But obviously, Google has a vested interest in driving Kubernetes forward, and GCP happens to be one of the best places to buy Kubernetes, to operate Kubernetes.

**Jerod Santo:** So what's your thoughts on the server-side pubic license and Elastic's move? You obviously prefer this other way of going about it, but... Do you think it was smart by them, short-sighted? What's your take on that?

**Paul Dix:** It's not the move I would make... To be totally honest though, to me it's not really about a license choice, it's more about how they intend to drive innovation that drives commercial value. And the truth is, I own stock in MongoDB, which is obviously SSPL-licensed software, but I do not own stock in Elastic, nor would I buy stock in Elastic right now, yet I'm holding MongoDB... Even though they're both SSPL. So from a pure mercenary investor perspective, I'm long Mongo but I'm short Elastic, and it has nothing to do with the license.

I think them changing the license is more a symptom of the fact that they're getting out-innovated on their cloud offering. If they had a cloud offering that was demonstrably better than Amazon's Elastic service, they would continue to be able to drive revenue and drive people to it. If they're so upset because they feel like AWS is eating their lunch on the hosted offering, and then they change their license... I mean, ultimately, they had a choice, which was they either write more closed source code, or they continue to write code out in the open (I'm putting air quotes around this), but that code is under a different license. They chose the different license path... Which, to me -- personally, I'm not a fan of source available licenses. I think they're a disservice to the community, because then... \[door bell rings\] \[laughter\]

**Adam Stacoviak:** A lot of sounds over there... \[laughter\]

**Paul Dix:** Yeah... They are a disservice to the community, because then you can say "Oh, community members saw your code, or whatever. It just means that people can't start competing project with you without putting themselves at risk of being accused of taking your code, or whatever. I prefer "Open code is open, closed code is closed."

The thing that kind of annoys me about the whole Elastic/AWS stand-off is both of them are trying to put forth this position that they have the moral high ground, they have moral superiority over the other one. Amazon's saying "Oh, we're protectors of open source, so we're gonna launch this fork", or whatever. And the truth is, even when they did open distro, I called it a fork then, even though they said it's not a fork, because it's just (whatever) a build.

It was always obvious when they launched that that fork is what it was ultimately going to become... Because Elastic was gonna take the stance that Amazon's stealing from us, so we're gonna change the license on more and more of our code... Which is then going to give Amazon no choice but to fork.

**Adam Stacoviak:** Right.

**Paul Dix:** So Amazon's claiming they have the moral high ground, and it's not true. They're just doing what's best for their customers and their shareholders. They're trying to optimize shareholder value. And obviously, all their customers are saying "Host Elastic for us." And then Elastic is trying to say like "Oh, we're doing this to protect ourselves from Amazon, because they're stealing from us", and the truth is there are tons of hosting companies that have been hosting Elastic for a long time. And if you look at where Elastic makes its money, it's probably mostly from log search. How many log search companies are built on top of Elastic, and they just open that up?

So Elastic is just upset because Amazon outcompeted them on the hosting front... Whereas other hosting providers, like Compose, and \[unintelligible 01:19:28.08\] and stuff like that, didn't really make a dent in Elastic's top line. So their claim, like "Oh, we have to do this" - like, no, you don't. You could have kept the code Apache v2, and you could have written more and more code in your service offering that's closed source, and kept the two separate.

This is actually one of the things that I agree with Amazon about, where they said the reason they created the open distro was because Elastic was polluting the open source repo with code under different licenses; under the Elastic license, and stuff like that. And what they've done now is they've gone all-in on that strategy. So basically, they want all the benefits of being an open source company, free marketing, free adoption, getting other people to talk about it, use it, whatever, but they don't wanna pay the price. The price of being really open source is that you're giving software away for free, yes, but --

**Adam Stacoviak:** You're being permissive.

**Paul Dix:** You're being permissive, but that also means that anybody could take your software and compete with you, which you have to be okay with. Anything that you can really call a platform is only a platform if the total economic activity of it outstrips that of any single vendor. So if you claim you're a platform, but basically you're getting all the money from it - no, you're not. You're...

**Adam Stacoviak:** ...a monopoly, as you said in your tweets.

**Paul Dix:** Right.

**Adam Stacoviak:** This comes back to something you were saying, and your stance for - not 2.0 in terms of Influx what you're doing, but the next version; I think you called it IOx, this maybe version 3.0, I'm not sure what you call it, but... You said by design it's permissive, and you've designed your architecture in terms of commercial offering to expect other competitors... Whereas it seems like Elastic, based on what you say and others have said, and even kind of what they're depicting, is that they're upset that Amazon is eating their lunch... And it's not by design. Their model is not by design to be competed with.

**Paul Dix:** Right, exactly. Their hope was that they would get this massively popular project - which it is; Elastic is a top ten database project, used the world over... But then they want -- like, the classic strategy is you spend a bunch of money to get optimized growth, and then once you have scale and a monopoly, you want to start collecting monopoly rents. Now Elastic can't collect monopoly rents because other people are hosting Elastic, so they're trying to change the model so that they can do that... But the problem is then you're a different sort of business entirely. Like, it's fine to be a closed source database company; there's Fauna which is new, Firebase is closed source... Each of the cloud providers has a handful of closed source databases. So that's a totally fine thing to do. But to try and say like "Oh, we're open source" and then change it - it's kind of ridiculous.

**Jerod Santo:** Well, Paul, fascinating stuff... Thanks for sharing your take with us. We definitely wanna have you back once you've rolled out this new - what do you call it, complementary model?

**Paul Dix:** Yeah...

**Jerod Santo:** ...and have some real-world results to report back how it's going, if it's serving the needs of you and your users and the open source community the way that you hope it will. We'd love to have you back on the show.

**Paul Dix:** Yeah, just one closing thought on that really quick, which you reminded me of... I think for people to think about - can permissive open source survive in infrastructure software? I totally think it can... But I think the people who are producing it have to think ahead of time about how they commercialize it over the long run. And for us with IOx, I've already defined what success looks like is tons of competitors. Literally, cloud providers adopting the software and competing with us... Which isn't gonna happen for years, best-case-scenario, if it happens at all. But what that means is we are developing a commercial product side by side with the open product right now, so that if cloud providers decide they wanna get in on the game three years from now, we've already had plenty of time to actually build a product to compete.

**Jerod Santo:** Hm. Stay tuned for results as they come out. Thanks, Paul. We really appreciate you coming on the show.

**Paul Dix:** Alright. Thanks, guys.

**Break:** \[01:23:53.13\]

**Adam Stacoviak:** Next we're talking with Vicky Brasseur. Vicky has been in free and open source software for 30 years now, and she's been working with startups and enterprises doing open source and free software business strategy for quite a while. We use Vicky's post titled "Elasticsearch and Kibana are now business risks" as a reference on this situation, and we even quoted her post a few times in our conversation with Heather Meeker... So naturally, we had to talk with her. Here we go.

**Jerod Santo:** Alright, so here is Vicky Brasseur. Vicky, share with us first of all your position in the open source world, what's your angle at the conversation that we're having. Where are you coming from?

**VM (Vicky) Brasseur:** I do corporate strategy around free and open source software. So I work with startups and enterprises in various organizations to help them be more successful by contributing, releasing and just generally becoming a good citizen in free and open source software communities, in a way that's both good for their bottom line, and for the communities.

**Jerod Santo:** Okay. And you've been doing this for a while, it sounds like...

**VM (Vicky) Brasseur:** Yeah, I've been in free and open source software for over 30 years, and I've been doing this specific thing for quite a while now.

**Jerod Santo:** Awesome. Well, we're glad we've got you on the show then. So you wrote a piece called "Elasticsearch and Kibana are now business risks", in which you lay out the case for that headline... Do you wanna share that with our audience, just the brief synopsis on why you believe that's the case with this server-side public license?

**VM (Vicky) Brasseur:** Well, I mean, SSPL I'm going to leave to the lawyers. This is a legal matter, but it is not an open source license; it is however being portrayed as open, which everybody is going to interpret as open source, because that's just the way we speak about things. So I think that in and of itself is kind of deceptive, and that's a problem.

But the bigger problem is that this is a license change. And if you are going to use something, you are agreeing to that license. If you upgrade Elasticsearch or Kibana to - I believe it was 7.11, if I recall... But if you upgrade, tacitly or otherwise you are agreeing to this new license, SSPL or Elastic license (it doesn't matter); you're agreeing to that and you're taking on new obligations for your company, for your organization. Are you aware of that? Do you know what you're taking on? Do you know the potential risks you might have? Or maybe there are benefits, I don't know. But this is not something that you as a company can afford to ignore, because it can have huge ramifications to your codebase.

**Jerod Santo:** I see. So the sideswipe is a big problem; the fact that so many people might upgrade, and unbeknownst to them, their agreement with the software that they're running and the companies involved has changed. Is there no transparency to that change? Is it not something that people are aware of, or how does it play out?

**VM (Vicky) Brasseur:** The only transparency really is going to be that blog post - or I guess there's two blog posts now - with Elastic finger-wagging at Amazon, and also screwing over their entire community and ecosystem. But hey, that's their strategic decision to make; they seem to think that was the right move for them. More power to them.

Yeah, that's really the only warning... You're otherwise not going to know, as far as I know. I haven't obviously looked at the code, but it doesn't make any sense that there'd be some sort of new clickthrough on Elasticsearch and Kibana, for instance. As you're installing them on your server, how are you going to confirm that "Yes, I have seen that there's a new license, and yes, I agree with this new license." Nobody does that; not for open source software, and especially not on the server side.

So it's very likely people are going to upgrade and tacitly agree to this, whether they know it or not... Or maybe they know about this new license and they decide not to upgrade at all. Well, now you're not getting security updates to this software, to Elasticsearch and to Kibana; that's another potential risk to your company. Maybe you're using these things for free, and a great deal of people build a lot of cool stuff on top of the ELK stack. There's a reason why there's an acronym that we all know, the ELK stack. It is that popular. So a lot of people are building on this. And they might be building on the free version.

Well, that free version is now going to get relicensed and you're going to be screwed, but if you're building a company on top of this open source software and your company relies upon it, and you're not already paying for some sort of support, either from Elastic or someone else, you're also putting your company at risk in that way.

So there's a lot of really important, strategic things that people need to be considering when they are selecting open source software, and you need to remain aware of your entire free and open source software supply chain... Because as we are seeing right here, it can shift out from under you. You can have license changes, you can have security problems... You can have maintainers who just peace out and they go away, and suddenly you're using something that's completely unmaintained.

So there's a lot of risk there for a company, and most companies I've worked with are completely unaware of this. It's potentially a disaster waiting to happen. As we all know, this is what happened with that credit reporting thing... It starts with an E...

**Adam Stacoviak:** Equifax.

**VM (Vicky) Brasseur:** Equifax, thank you.

**Adam Stacoviak:** Yes.

**VM (Vicky) Brasseur:** I've been saying Elastic so often, that's all I can think of.

**Adam Stacoviak:** That's the only E in your brain, yeah.

**Jerod Santo:** We're here for you.

**VM (Vicky) Brasseur:** Exactly. Thank you, guys. Yeah, Equifax was not paying attention to their open source software supply chain. They had a piece of software, and I believe it may have been Apache Struts, or something like that, that had been upgraded to fix a security hole, but they hadn't bothered to upgrade it internally, because they weren't paying that much attention. Then they got compromised, and billions of people had their private information stolen.

So if you're not paying attention to stuff like this, not only Elastic, but the larger picture, you are just one bad day away from being the next Equifax. And do you want to do that?

**Jerod Santo:** Is there a right way that Elastic could have done this? ...in terms of, just forget the decision, the SSPL, but let's say I just want to change my license. Is there a correct -- do you have to start a new project with the new license? Is there like a best practices for changing a license that doesn't sweep out the rug from people potentially?

**VM (Vicky) Brasseur:** For an open source project -- there's obviously many different ways you can do it, and Elastic has their perspective, which is going to come from a very corporate perspective, "We're looking to make money", and then the community will be coming from a different perspective. So you can have different approaches, but the one thing everyone should always do is be communicating with their community and their ecosystem.

This caught everyone by surprise. That shows that Elastic is not respecting the community and the people who have been contributing, and who rely on this software. So they have essentially looked at their ecosystem and said "Yeah, we don't care. We don't care what you're doing, because all we want to do is screw over Amazon, and collateral damage be damned."

So they should have communicated, they should have told people "This is going to be coming." Maybe they should have done it, for instance, at version 8.0...

**Jerod Santo:** A major version.

**VM (Vicky) Brasseur:** ...rather from 7.10 to 7.11. Yeah, go to a major version. Maybe that would have been smarter. Maybe cut a major version right there. Just do that. Maybe you could have forked it internally, and start developing internally, and then leave the open source project alone for other people to build upon... And you can even push stuff upstream and pull stuff downstream; you can still benefit from that, while having your proprietary, internally-developed software. You could still do that.

There's lots of different options they could have done, but the one thing they should have done and did not, was communicate with their ecosystem, with their community. They popped this on everyone, and it was kind of rude. They've violated the trust of their community, and you can't really get that back at this point. So you kind of screwed the trust of your community, and you've besmirched your brand, which is going to be incredibly difficult to fix.

**Adam Stacoviak:** Somewhat to Elastic's credit - and maybe I'm wrong by even saying this - but it seems like they've gone through a lot. Shay, the CTO of Elastic mentioned the litigation, and the behind-the-scenes discussions... And I think from the outside it might be easy to say "screwed over", but the nuance there I think is they've gone through a lot, and maybe they're in some ways quite wrong and reactionary... But I'd say in some ways, at least depicted by tweets and this post, maybe they went about it wrong, but their intention was to try to fix this problem which is very difficult to fix, because our permissive license does allow this competition, and maybe from a business standpoint they've sort of hit their links with being able to take that, in quotes (their quotes at least) abuse from Amazon... And they're just trying to tread water, to some degree, with this scenario.

**VM (Vicky) Brasseur:** I know that this is a podcast, so people can't see me, but picture me rolling my eyes right now...

**Adam Stacoviak:** Okay...

**Jerod Santo:** \[laughs\]

**VM (Vicky) Brasseur:** So the trademark thing aside - that's a different matter; that lawsuit for the trademark is a separate issue. If they're relicensing as a reaction to that, then it's essentially them stamping that little princess foot, taking their ball and going home... And it's a childish reaction to a trademark infringement lawsuit. I mean, they were totally justified in that lawsuit for their trademark infringement against Amazon; I have absolutely no problem with that. I do think that Amazon was rolling the dice on that one, and they lost, and I think they will lose in that particular trademark thing. But I am not a lawyer. That's just my educated--

**Adam Stacoviak:** Right. You're not here to give any legal advice.

**Jerod Santo:** Right. That's just your take.

**VM (Vicky) Brasseur:** Yeah. But the relicensing - they screwed up at the very beginning by not understanding what a permissive license allows, and what that is. They screwed that up. They put it out there under a permissive Apache 2.0 license, without thinking "Somebody can now build a better product offering on top of this, very easily. And if they're building a better product offering than we are..." - I'm sorry, folks; we live in a capitalistic system. That's just the way these things go. It's your fault for releasing your intellectual property under that sort of license, and not understanding what it's going to mean. And if you did understand, not taking enough measures to make sure that even if that does happen, you can still be successful. And frankly, if you look at their numbers and their financials, they are doing quite well. So what are they looking to do? Are they looking to grab all these people who are using the Amazon ecosystem and move them over to Elasticsearch and to Elastic? I don't think that's going to happen from a market perspective.

So it's very difficult to see strategically why they thought this might have been a good move, to just give their entire ecosystem the finger, while trying to take a shot at Amazon. It kind of seems amateurish, and I would have expected better of a company that's been around for this long.

**Jerod Santo:** So let's say I was a happy Elasticsearch user a month ago, and here I am today, and I'm like "Vicky, what do I do? They changed the license on me. I don't know what to do." What do you say to that? Go to the Amazon fork, or...?

**VM (Vicky) Brasseur:** I will say "I don't know, it depends." Of course, I have been known to do a fair bit of consulting, and so any consultant who isn't starting up with "It depends" is trying to sell you something.

**Jerod Santo:** Right.

**VM (Vicky) Brasseur:** So it totally depends. What are your needs? How much do you rely on that Elasticsearch, or on that Kibana? We have to remember, there are two really big projects here that have been relicensed. It's not just Elasticsearch. So what is the strategic value and the architectural value of that piece of software to your product, to your company? Look at that first. What is the niche it is filling, and then will anything else fill it? And it could be that as you evaluate this and you look at it, it makes sense to just pay Elastic for their software. Fine, that is a valid choice, and I support you doing that. I want your company to be successful. But you might also find that there are other alternatives.

There are a couple of forks now - there is, as we all know, the thing that kicked all this off, which is Amazon's open distribution for Elasticsearch, from the last time Elasticsearch did something kind of goofy in the open source world... And then they have their new, totally open distribution that Amazon just forked... And I think there's a third one, which is from Logz.io, something like that... There's at least one other version out there; there may be others... And maybe you don't need Elasticsearch at all. Maybe you just need Lucene. If you're using Kibana--

**Jerod Santo:** Yeah, alternatives.

**VM (Vicky) Brasseur:** Yeah, exactly. Maybe Grafana would be better for you. I don't know. It depends upon your needs. Don't go doing something just because it's what everyone else is doing. Look at your needs. your company, your architecture, your budgets, your staffing... Who knows what software do you have to ramp up on something new; there's lots of variables in there, so I can't give a one-size-fits-all answer, because it doesn't make sense.

**Jerod Santo:** I was hoping I could just ask you once, and then the whole community could just listen to you, you know?

**Adam Stacoviak:** \[laughs\] Not that easy.

**Jerod Santo:** Let's multicast a solution.

**VM (Vicky) Brasseur:** Oh, no, there is no single solution to any of this sort of stuff... Because every one of these companies is going to be different. If they were all the same, then we wouldn't need them all, right? We'd have one market, one company - boom, you're done. But we don't have one.

**Adam Stacoviak:** One license. Too easy.

**VM (Vicky) Brasseur:** One license. Gosh, wouldn't that be -- oh my gosh, that would be so easy; that would be so nice. But that's not the way it is.

**Jerod Santo:** But then what would you do? You wouldn't need a consultant at that point.

**VM (Vicky) Brasseur:** Well, yeah, but I do corporate strategy. It's not simply about licensing, it's about so much more than that. That's just a tiny sliver.

**Jerod Santo:** Oh, okay.

**Adam Stacoviak:** Well, Vicky, we wanna respect your time. Is there anything else that you wanna share that we didn't ask you? Any questions that's like "I just wanna put this out there", that we haven't asked you a question to at least?

**VM (Vicky) Brasseur:** No, not really. I think you've covered pretty much the highlights of this stuff, and then it'll be interesting to see what others have to say. I don't typically listen to podcasts, but maybe I'll actually listen to this one.

**Jerod Santo:** There we go.

**Adam Stacoviak:** Well, you might hear me thank you at least once before I thank you right now for your time, but... Thank you, really, for your time and for this blog post that you shared. It was very helpful for us to sort of get a different perspective on these concerns around open source. We've quoted a couple of things you'd mentioned in your blog post in a conversation with Heather Meeker, which is a part of this show, too... But thank you for your post, and also today thank you for your time. We appreciate it.

**VM (Vicky) Brasseur:** Absolutely. Thanks again.

**Break:** \[01:39:06.22\]

**Adam Stacoviak:** Last up on this epic show is Markus Stenqvist, who self-describes as an everyday web developer from Sweden. Let's do this.

**Jerod Santo:** Please tell us who you are and your vantage point on the software world.

**Markus Stenqvist:** Well, I'm just a normal, everyday web developer from Sweden.

**Jerod Santo:** Awesome.

**Markus Stenqvist:** My name is Markus. I work for a small company no one has heard of, yet...

**Jerod Santo:** Yet. There you go.

**Markus Stenqvist:** Yeah, exactly.

**Jerod Santo:** How did you first hear about the news of Elastic's relicensing? I'm just curious; where do you get your info?

**Markus Stenqvist:** I read the article from Elastic on Hacker News. I saw them posting like "This is not okay", or something in those lines.

**Jerod Santo:** Awesome. Well, we're gathering perspectives from all over the community, so it's awesome to have just a regular, everyday web developer here on the show... So welcome.

**Markus Stenqvist:** Thank you.

**Jerod Santo:** So what do you think? What are your thoughts on the whole situation? There's lots of nuance, lots of ins, lots of outs...

**Markus Stenqvist:** Yeah, exactly. Well, I read a lot of comments and I read the Amazon article as well one day, that was posted, about forking the repo after they relicensed Elastic... And I really don't even use Elastic or Amazon Web Services \[unintelligible 01:40:26.01\] But I care a lot about open source in general, so...

**Jerod Santo:** I'm with you - I don't use AWS, I don't use Elastic, I also care about open source... What is it about open source that you like, or that you care about, and are trying to preserve or be a part of?

**Markus Stenqvist:** That's a good question. I think it's a matter of the fact that I can use software for free, and share it with colleagues and people all around the world, without any restrictions... And no one can forbid me from using stuff which I want to use.

**Jerod Santo:** So when you first heard about the relicense to the SSPL, what was your hot take, what was your emotional reaction? Were you indifferent, were you mad at Elastic, did it feel like it's no longer open source, or do you still think it's still in the spirit of open source?

**Markus Stenqvist:** Well, I'm actually very much on the Elastic side for me...

**Jerod Santo:** Okay.

**Markus Stenqvist:** I saw a lot of comments on Hacker News that were like "Oh, Amazon is all in the right" and yadda-yadda... But they have actually done the same with MongoDB liek two years ago, I guess, where they pushed them to basically relicense, because they simply don't want to pay (I guess) their fees.

I think Amazon could be a bit more friendly towards those open source companies, because right now, when they use the products for free, maybe they hurt the possibilities of future open source companies going forward.

**Jerod Santo:** So if you were an Elasticsearch user...

**Markus Stenqvist:** Yeah, I have been in the past, but I'm not using it today.

**Jerod Santo:** You have been. But if you were today, when you read the relicense, you would have been pro-Elastic? This would not have concerned you, or offended you, or changed the way you looked at Elasticsearch?

**Markus Stenqvist:** Well, I think it's sad that they have to do it, that they have to relicense, that they feel like they need to... And that's what makes me think that their move is kind of okay, in a way; because I will still support them and I would rather use them than the fork created by Amazon.

**Jerod Santo:** So the fork still exists under the new fork, which is created by Amazon, and trying to carry on from that point forward... It still exists under the previous license. But you would continue with Elastic, versus the Elasticsearch and Kibana forks that are run by AWS now?

**Markus Stenqvist:** Exactly. And that's simply because I believe in their vision, or I believe in their product, and I think Amazon is going to have a hard time keeping up. Or maybe they won't, I'm not sure.

**Jerod Santo:** Time will tell on that front.

**Markus Stenqvist:** Time will tell, of course. But the same goes with MongoDB, and their DocumentDB, I guess. I still think MongoDB is a superior choice, just because it's their project and their vision.

**Jerod Santo:** So you're not an open source purist then.

**Markus Stenqvist:** Not at all, no.

**Jerod Santo:** No. More pragmatic. More about free, and open, and available... Have you thought about any of the other licenses, like the source available licenses? Are you cool with that, and these other things, like business source licensing? Surely, these are things that you've read about being in the open source world... Are these things that you're also just like "Whatever you wanna license your code as. If I can use it for free and contribute back somehow, it's cool"?

**Markus Stenqvist:** Yeah, I think it's cool. Every license is their own choice. If you want to license your work in a certain way, it's your choice. And if you want to share your work with others, that's just a positive thing. I feel in this case Amazon is hurting the possibility to do that.

**Jerod Santo:** Awesome. Any other thoughts?

**Markus Stenqvist:** No, I think people that are on Amazon's side should maybe read the article from Frederic Lardinois...

**Jerod Santo:** Okay.

**Markus Stenqvist:** ...which is on Tech Crunch, and it's called "AWS gives open source the middle finger." I think that's an article that sums up my views pretty well.

**Jerod Santo:** Awesome. Hand that off to me and we will include it in the show notes for everybody.

**Markus Stenqvist:** Yeah, sure.

**Jerod Santo:** I appreciate you hopping on and sharing your opinion with us.

**Markus Stenqvist:** Yeah, thank you.
