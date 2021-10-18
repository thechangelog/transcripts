**Jerod Santo:** Frank, we're happy to finally have you on the show... And I say "finally", because we've had a few requests out there since 2016 to do a show on Nextcloud, and we never pulled the trigger until now, when we received an email from a friend of both of ours now, André Jaenisch. I hope that's how you pronounce your name, André... He knows Frank, he listened to the show about relicensing Sentry, that Adam did late last year, and suggested we have you on the show to talk about Nextcloud and your story in open source. So thanks, André, for this recommendation, and thank you, Frank, for being here with us.

**Frank Karlitschek:** Yeah, thanks a lot for having me. As I said, Changelog is one of my favorite podcasts, so it's really awesome to be here.

**Adam Stacoviak:** We're glad to have you.

**Jerod Santo:** Absolutely, and we love hearing that. So let's start off with your forking story, because that seems to be a great place to start... You had a project called ownCloud, and now you have Nextcloud, and somewhere in the middle you forked it yourself.

**Frank Karlitschek:** Yeah, exactly.

**Jerod Santo:** We'd love to hear that.

**Frank Karlitschek:** Yeah, that's always the first question... I think it's one of the more interesting stories, of course. And just to be clear, I didn't fork it myself. I still have to work on that...

**Jerod Santo:** Your forked somebody else then.

**Frank Karlitschek:** I forked the software, and the community, and the company. That's interesting enough for my taste, I have to say.

**Jerod Santo:** Why did you do that?

**Frank Karlitschek:** I have to give you a little bit of the back-story here. ownCloud, the project before, was something I founded ten years ago. Last month was actually the ten-year anniversary, when I started ownCloud. It was a free software, open source project. At the beginning it was actually part of the KDR project, of the KDE community, and I did it in my spare time, in parallel to some other activities. It was a pure hobby, volunteer project.

I picked the AGPL as a license, and the community was coming together, and we released the first version, second version, third version, and so on... And then one-and-a-half years later it became clear that there's an opportunity to actually found a real company around this.

\[04:05\] I founded a company together with two other co-founders. I looked for two other people to found the company together, and that's what we did... Based in Boston, in the U.S, actually. That's also where I lived in the U.S. for two years. And yeah, this was the ownCloud company.

It was quite successful at the beginning, but over time it became clear that some things didn't really work out that well. There were some issues, to be honest, with my co-founders; I picked the wrong people, to be honest. There was also a little bit of misunderstanding how a real open source business should work.

We decided to do an open core business model, which means there was a community version which was open source, but didn't have all the features; to get all the features, you had to get the enterprise version, and the enterprise version was proprietary.

We also did dual licensing, so we asked all the community contributors to sign a CLA, and then the company did dual licensing. So the software was available under the AGPL, and then also the proprietary license, and many other (I would say) creative things that sounded good at the time, but at the end actually had the effect that the company as not working.

This was actually sad, because the software was quite good, the team was good, companies tried to buy it, and there was a lot of successful parts in it. This is what basically triggered the fork. 12 people, including me - the core 12 people - actually decided to start over. Four years ago we founded Nextcloud as a fork of my own project and fork of my own company, and we actually tried to do some things, a lot of things, differently and better this time.

For example, we are pure open source, we don't have proprietary extensions, we work better together with the community... We actually don't have external investors anymore, so it's completely self-funded and sustainable. We tried to do this nicer together with our contributor community... Because we have a really good and big community of over 2,000 volunteer coders, and it's very important to do it in a fair way for everybody... And yeah, that's what we're doing this next year now.

**Jerod Santo:** So what was it about open core that you didn't like, or that you decided to move away from?

**Frank Karlitschek:** I gave a talk about that a year ago at FOSDEM, I think. This talk has more information, but I can give you the rough summary. I think if you really want to do a real, successful open source, free software community project, then it's really important that you attract as many people as possible, and that everybody is as happy in the community as possible. I think this is the success factor of a really working free software open source community... And for that, it's very important that everybody is on the same level, that everybody has the same rights, that not everything is dominated by a company who has special rights, and the community are only cheap developers, somehow. It has to be fair.

This is something that's usually not the case with open core, because -- we had several interesting issues. For example, the enterprise edition had more features than the community edition, as mentioned before, but then sometimes a community person comes along and implements the enterprise feature in the community version. That's an interesting situation; then the company actually had to say "No, we can't accept this pull request, because this is going against our own business model."

**Jerod Santo:** \[08:12\] Yeah... Misaligned incentives.

**Frank Karlitschek:** Yes, exactly. And that's, of course, stupid, because the community should be your friend; it shouldn't be your enemy somehow. And many other things - roadmap planning, product management doesn't really work if you don't really have the exact same product in the community... And the fact that everybody will contribute actually has to give the ownership of the code to the company.

Most volunteers on GitHub or somewhere else - they just want to send a pull request and help; they don't really want to sign a contract and check "Oh, what am I doing here, who has the right on my code now...? Is someone getting rich with my contribution?" It's just not very fair, not very equal, in my opinion.

**Adam Stacoviak:** It comes down to creating a win/win, right? The company wants to succeed, and the community wants great software. The win/win is the hard part, right?

**Frank Karlitschek:** The win/win is absolutely the hard part, yes. But I think it is possible if you have the right business model. That's also an interesting thing, because the question is "What does the company sell?" If the company tries to sell software, then there's a conflict of interest, because if the same software is then available to the community for free, and for companies for money, then this doesn't really work, especially not with free software licenses. This is why companies like MongoDB and Redis and others are actually changing their licenses at the moment, because they have a conflict of interest.

But we have a different business model. We have a business model similar to Red Hat and SUSE, which means the software is available for free to everybody, but we sell support subscriptions to the companies. So if you run Nextcloud in a mission-critical way, then you can come to us and we give you support, and security patches, and we help you with scalability, and with upgrading, and many other things. Similar things you get if you buy a Red Hat Enterprise subscription, instead of just using CentOS.

This business model I think is a lot fairer to all the contributors, and then you don't really need to sell the software. The software is available for everybody, also for the contributors. We just sell these enterprise services to companies, and home users don't really need it.

**Adam Stacoviak:** Support is one way to say that, but I think if you phrased it, it could be said that you sell successful usage of the software, right?

**Frank Karlitschek:** Ha-ha! Yeah...

**Adam Stacoviak:** Support is one thing, of course, but you want people to use the software, because it has value to the community...

**Frank Karlitschek:** Yes.

**Adam Stacoviak:** And if Jerod and I decided to use Nextcloud tomorrow, we might have some problems, but what you would actually sell us wouldn't be support, it would be successful usage of it - scaling it, security patching it, making sure that we have success using it.

**Frank Karlitschek:** That's actually funny, because you described it better than me... \[laughter\] This is exactly how it is; that's exactly how I usually describe it. What we sell is basically some kind of insurance that you can run Nextcloud in a mission-critical way. This is what you need if you're a big organization. And part of it is support; long-term support, and you have guarantees that you get security fixes in time, that you can call someone if there's a scalability issue, that there's maybe certifications... Maybe you need to be hypercompliant, or whatever - all those things. This is what you want if you run it in a mission-critical way, and you don't really care if you're a home user, or just a volunteer developer.

**Adam Stacoviak:** So going that route would definitely be on our side, right? You're not trying to sell a software, you're trying to sell us successful usage of that software.

**Frank Karlitschek:** \[12:12\] Right.

**Adam Stacoviak:** Is there enough meat in the business model? In every open source business opportunity there may not be, so how do you ensure, as you said, a self-funded, profitable, sustainable company? How do you ensure that win/win scenario? Is that the extremely difficult part?

**Frank Karlitschek:** Yeah, that's the main question, right? So... There are so many things to say. Some businesspeople look at the conversion rate, and say "Look how many people use the software without paying, and how many people use the software with payments." But this is in my opinion the totally wrong metric, because we focus on growing the cake, instead of fighting with our own community users at the moment.

I think there are lots of people on this planet, and 99.9% never heard of Nextcloud before. We think we want to become more popular, this is why we give the software away for free; for many other reasons too, for our contributor community... But actually, make Nextcloud more popular, and make Nextcloud more usable and so on is the highest priority for us.

At the end of the day if someone is paying us or not - of course, I'd prefer if companies pay us, and to be honest, the big ones usually do, because there are the service level agreements and other things that we can give to them... But honestly, the bigger challenge for us is to get more and more users. It's not really to force our community users to pay us; I think this is the wrong strategy.

**Jerod Santo:** It seems like a really positive way to look at it, is just to focus on what salespeople would refer to as the top of your funnel. "We don't have to optimize the conversion if we realize (like you said) that most people never heard of us. If we could just get more and more people to hear about it and then start to use it, then the conversion maybe is low, but there's still enough meat on the bones", as Adam was saying.

**Frank Karlitschek:** Yes.

**Jerod Santo:** So ownCloud became Nextcloud... This is mission-critical software for a business, or for a family, or whoever is running it, right? This is your data, on your own cloud, at your business or at a service provider, wherever it happens to be... So it makes sense that you're selling basically success, or risk mitigation, if you look at it that way, of like "Well, what are the risks here? Can we throw money at the risk problem and that will allow us to adopt this thing?"

Does this model work mostly, or only for mission-critical things such as hosting your data, and the kind of stuff that Nextcloud provides? ...or do you think it's generalizable to other types of open source software?

**Frank Karlitschek:** Excellent question. You're really asking so many excellent questions... \[laughter\] Honestly, it's really good.

**Jerod Santo:** Well, thank you.

**Frank Karlitschek:** Sometimes other open source projects or comapnies come to me and ask for advice - "Hey, can we adopt the Nextcloud model? What's your recommendation?" And to be honest, in a lot of cases I have to say "No, this would probably not work for you", because software is different. What's special about Nextcloud is that it runs from very tiny to very big. So you can run our Nextcloud server on a Raspberry Pi for your family at home, but you can also run it on a big Linux cluster for 10,000 people. The biggest instance we have has 20 million users, actually, on one Nextcloud. And this is the same software; bit by bit, the same software.

\[16:08\] This is a nice success factor for us, because we attract our contributors by being useful at home, but at the end of the day then selling support subscription to the huge guys. So this is something you want.

Another challenge is that this is something open source projects that are more in the middleware somewhere, like the Mongos and the Redises and others - they're facing at the moment with the cloud services, like Amazon, of course, where they just take the software and offer it as a service. That's a challenge. We don't really have this challenge too much, because first of all, we are more user-facing... Because if someone like Amazon takes MongoDB and offers hosting, and they rename it to AmazonDB, most developers probably don't care, because they know "Well, it's the same API, it's working, I can use it. All good." But we are user-facing, and if you want to offer this for your company, and then you say "Well, you can choose between Nextcloud and (I don't know) SuperCloud2000", then people will be irritated... Like, "What is that? I want to have the real thing." So for us it's a bit easier to sell to -- basically, not being exploited by the big cloud companies.

Another thing is that our mission is, of course, to provide security and privacy to our users. Our story is usually an on-premise story; a lot of our users run Nextcloud on-premise. It is possible to deploy it with one click on Amazon or Microsoft or Google Cloud, but people usually don't do this... Because if they run Nextcloud on Amazon, they can run Dropbox in the first place; what is the difference. So this is why the big cloud providers are for us not a big threat, but they are a threat for many other open source businesses. That's a challenge.

**Jerod Santo:** That's interesting. You are kind of uniquely positioned in that way, in that because Nextcloud is your own private cloud, running it on a public cloud or a big provider -- like, if you're gonna use Azure, you might as well just use Microsoft's Live 365, or if you're gonna use GCP, you might as well use Google App Suite, or something, because you're kind of wanting to keep your data off those clouds... For the most part. I mean, maybe an individual is happy to just run it on Linode, or something, but for a large corporation I think on-premise is the value proposition, to a large extent, as they can own their own data...

**Frank Karlitschek:** Yup, that's exactly the thing. So if you look at our biggest customers from a company perspective, lots of them have their own infrastructure somewhere. For example, the German government or the French government - they are using Nextcloud for their ministries for hundreds of thousands of people, and they run it on private cloud infrastructure that is not even connected to the internet. It's completely an internal infrastructure. And this is where Nextcloud shines. So we are not really in direct competition to the big public clouds here.

**Adam Stacoviak:** How often is the user type not wanting to use the public cloud, and using on-premise? That seems like a specific use. I don't think we could use on-premise. We're not an on-premise company, we're a distributed company, so we'd have to leverage a Linode, a DigitalOcean, or one of the big clouds, Azures and such... Is that common for an on-premise customer to be -- is that commonplace, I suppose?

**Frank Karlitschek:** \[20:02\] The value proposition is -- I would say in 80% of the cases it is something around security and privacy... And this often means on-premise, but it doesn't really mean your own server in your basement. It can be in a hosting center that's next door, and you have a special contract with them, and they're certified, and they're in the same country, and you somehow trust them. It can be that.

Other security things are also that you can audit the software. For example, we have some government users/customers who audited the software, so they actually looked at the code and paid people to check it, make sure everything is okay, and they looked for back-doors and other things... And because it's open source, they could check that there are no backdoors in it. That's not really possible with lots of other cloud service, Office 365, G Suite and so on.

So this is important for most of our customers, but there are other benefits, too. For example, speed and cost. Usually, you say "Well, Amazon is affordable, and fast, and everything", but if you really have a lot of data... For example, Nextcloud is used by huge universities, particle accelerators research institutions who literally generate petabytes of data a day. It's really hard to upload all this data to Amazon or to Google Cloud. Because of that, they have their own hosting center in the same building. In this use case, Nextcloud can be useful to provide services, to collaborate on this data, to sync it to other machines, and so on. Amazon is big, but it becomes really expensive if you upload petabytes.

**Break:** \[22:02\]

**Jerod Santo:** I'm a bit curious about the actual forking process, since it was open core. I'm curious about the license interplay; surely, there were aspects of the software you had to leave behind, because they were proprietary aspects. Did you rewrite large swathes, was it inspired by ownCloud, or is it lots of source code came over? Tell us about the actual fork.

**Frank Karlitschek:** Yeah, it was actually faster and easier than expected. When we planned it, "Hm, is this possible? Is this realistic or not?" We made a little bit of a plan; I think we planned to do the first Nextcloud release (I don't even remember) maybe two months after the announcement of the fork... It was like "Okay, we need to take the software, we need to change everything that's trademarked..." This was the most work, to be honest - to replace the old name that was still owned by the old company, with the new name. Search and replace is fast, but there are other places, like in pictures and logos, used in places, and so on... So this was a lot of work.

\[24:15\] And then, as you mentioned, the proprietary pieces - of course, we can't use them, obviously, so we had to rewrite those pieces... But because most of the code development team actually moved over to Nextcloud, from day one we really had an awesome development team, so it actually was quite fast to replace all the pieces. I don't fully remember, but I think we had the first release after just 2-3 weeks after we announced the fork...

**Jerod Santo:** Nice.

**Frank Karlitschek:** Because the community was really enthusiastic, and they really jumped in. The documentation was something completely done by volunteers, so it was quite fast.

**Adam Stacoviak:** Was the relationship so irreparable that -- you often think, like "Should you collaborate or compete?" And obviously, forking - you decided to compete, I suppose... At least on the recognition of the purpose of the software, right? And obviously, it's open source now, and there's a different sort of business model spun to it, and you have this idea of like "Will ownCloud still succeed? Will Nextcloud compete against it?"

**Frank Karlitschek:** Yeah, it's true - for a long time I tried to fix and improve things from the inside in the old project, in the old organization, and I failed. I don't want to go too much into detail, but it was not possible for me, unfortunately...

**Adam Stacoviak:** The reason why I asked that question - let me frame that so that it's a little clearer there... Often we'll see communities have in-fighting, and (for a lack of better terms) some sort of civil war. We've seen it in the Rails ecosystems around -- I can't ever recall the different things that happened around that, but...

**Jerod Santo:** Merb.

**Adam Stacoviak:** Merb. Was it Merb? Yeah, Merb.

**Jerod Santo:** Ancient history.

**Adam Stacoviak:** Yeah, it's ancient history... We've seen it with Node... So the question always comes, "Should you try to repair or replace?" And obviously, we know the route you chose, so I'm just trying to understand your feelings around that... Somewhat specifically to your situation, but then generalized to those listening, to say "Should we in-fight or should we try to collaborate?"

**Frank Karlitschek:** Yeah, our situation was a bit different. There was no real fighting inside the community; it was more like a fight between the community and the company people, company product management, engineering management and so on, who didn't really understand how the community works, and that didn't really -- like, "What are all these people? Why are they doing stuff there?"

For example, a lot of the management of the old company was really confused when the community people started to write a calendar, and contacts, and email integration... Because for them it's like "What are you doing? You're working in the wrong market. We are file sync and share, you're doing groupware, that's stupid." So they didn't really understand how the community dynamics work. So there was more fight between the community and the management of the old company.

Then when the fork happened, people were really unchained, somehow. They were like "Oh, finally I can do what I want. I don't need to ask for permission to do this and that." And you can really see in the GitHub statistics that the productivity doubled and tripled. So it was more this kind of conflict. It was not inside the community in that way.

**Jerod Santo:** \[27:53\] So talk about the community relationships. Nextcloud provides certain aspects of the cloud that are like the core experience files, photos, mail, contacts, stuff like that... You even have a to-do -- what's that, like a Kanban board thing called Deck, or On-Deck... Was it called Deck? I got logged out of the demo... As I was refreshing, it just logged me out. It warned me I was gonna get 60 minutes, and I think I'm out now.

And then there's this whole app store marketplace idea... So there's plugins... Is that what you're talking about, when they felt like they were at odds with the company? The people were willing to build out these aspects, which are like huge wins for a community, to add this brand new subsection of what -- you know, add a whole new room to your cloud... And I could see where that would butt up against an open core business, because that could be the proprietary "Pay for this feature." So is that what happened with Nextcloud, that it allowed the community to blossom around these plugins or the app store? Tell us about that.

**Frank Karlitschek:** Yeah... There are so many aspects. First of all, this app ecosystem -- maybe just to talk about the name first, because people think it's sort of plugins. In the very beginning, people asked me "Let's call these plugins." But plugins are just small changes or extensions to a software... But I see Nextcloud really as like a platform where you can write all kinds of complex applications on top of it. This is why we call them apps. And you see this nowadays, there's calendar, and email, and a chat, and video-calling applications in Node... They are not plugins for the file syncing, they are complete applications, and this is something I always thought that this is something the community wants and also our users want, because we can get more and more features.

This was a bit of a conflict, as I've mentioned before, to the typical company managers... Because they talk to analysts, they talk to \[unintelligible 00:30:00.04\] and they say "Yeah, you're in the file sync and share business. This is what you should do." And this kind of total creative chaos that you get with an open source community; this is hard to understand for the typical software manager who never did open source before.

Now that we basically opened this up completely, you can do everything you want with Nextcloud, even inside the core. Everybody can do a pull request; you have to have two other people approve it, then the change is in. It doesn't even matter if someone is an employee of the company or not. You don't have any management there, it's just a normal community process.

I don't really care if we \[unintelligible 00:30:46.04\] in a specific market or not. Honestly, I don't care. The only thing that's important to me is if the software is useful for people. This is guaranteed with the community, because they do what they want, and it's usually creative and good. And to be honest, if I would be the guy who sits in a room alone, and thinks about a roadmap, and "This is what we should do", this is not a good solution.

I really believe in the creativity of the open source community, and this is why by opening this up, there's so much creativity and so much motivation in the contributor community now.

**Jerod Santo:** Give us an example of a community-based app for Nextcloud that has unlocked some feature that either you wouldn't have imagined, or that's just really above and beyond what you'd think of a typical plugin. What's a good example?

**Frank Karlitschek:** I have so many examples... One thing I can use as an example is the Maps app. There was the idea - and actually, to be honest, I heard from people like one, two, three years ago, who told me "Yeah, you want to work on a maps app, so you can have maps inside Nextcloud." And to be honest, I didn't really look into this idea too much, and I didn't really understand... For myself, I thought "Well, that's a weird/stupid idea. I don't want to have maps." I mean, you can go to some other mapping website, and Google will always be better than your Nextcloud maps.

**Jerod Santo:** \[32:21\] Yeah.

**Frank Karlitschek:** But whatever, people can do what they want. And people worked on it, and this is now a super, super-awesome app, I have to say. First of all, they won the contest of the coolest app of the year at our conference last fall, so people really like the maps app. And now that I really understand what people tried to build here, I also totally agree that it's super-awesome. For example, you can look at your photos on a map here. So if you synchronize your photos to your Nextcloud, the EXIF data is automatically extracted, and you can look at the photos on your map. That's obviously very useful to be able to do that without uploading your data to Dropbox or Google or Apple, or whatever. It's completely running on your own machine and your own infrastructure. You can also look where your contacts are based on a map.

Yes, it's true that the map data -- I mean, for the maps we use OpenStreetMap data. They're sometimes not as detailed as the latest maps from Apple or Google, but they're totally good enough. You can really look at your data on a map, and all the algorithm and data is on your machine.

This is something that came out of the community, and originally, I thought "Well, that's a stupid idea." \[laughter\] But then after seeing the end result, I've totally changed my mind, and it's really awesome. This is something -- well, it's the power of community.

**Jerod Santo:** So Nextcloud, the product/service/enterprise, do you then have to support Maps, or do you draw a line in the and that says "We'll give you your success story for pay, but we're not gonna support things that we don't write." Because you the company would be basically inheriting the risk of your community if you supported all these apps.

**Frank Karlitschek:** As a company, we do find the core functionality, and these features are part of our product that we support. These are also the features that are usually useful for companies, because -- well, we make a lot of support contracts with companies; we don't have a business model for home users... So these are functionalities that are -- I mean, we really look at the code... Either we have very close relations to the community maintainers, because we need to be able to, for example, ship security fixes for this code, or fix bugs with the code, so we need to really have close relations... Or we hire the maintainers, and they're on our payroll, and then we can actually guarantee that we support it.

But the functionality that's covered by a support contract is only the core product. All the hundreds of third-party plugins - they are just some stuff from the app store. Sometimes customers come to us and say "Hey, I want to use this cool feature. What can we do here?" Then we look at the code and talk to the developer. Sometimes we do some kind of revenue share, where they say "Look, we have this one company and we really want to have support for your app. Can we do this together somehow and split the money?" Maybe they give you some money for additional feature development, and then we come to an agreement. But the usual support contracts are only for the core product, not for the weird community extensions.

**Jerod Santo:** It makes sense. I noticed in your GitHub org you have 170-something people at this point. How many of those community members have you ended up hiring? It seems like a pretty cool way of getting new hires - having community contributors building apps and then saying "Hey, why don't you come work for us?" Does that happen often?

**Frank Karlitschek:** \[36:16\] Yeah, that happens often, and that's good and bad at the same time. I mean, hiring good developers for us is really easy, because if I need someone in a specific area, I can just look at the community and say "Hey, what you're doing as a hobby here - that's really nice. Do you want to get paid to do the same?" \[laughs\] So this is quite easy for us to find really good developers.

And of course, all these people - they already believe in the mission, they already understand the software, the framework. They're productive on day one, because they've already worked with the code... So hiring good developers is really easy for us. The problem is we have to be careful not killing our community... Because if you hire all the good people, then we turn the community into a company, and that's not what we want.

**Adam Stacoviak:** There's a fine line there, for sure... But it is nice to have such a big community that is available to you, if you wanna exercise that right, or that opportunity... Not so much a right, but more of an opportunity, to grow the offering and provide ( I suppose) a great service. It all comes down to what you're optimizing for. If you're optimizing for great software that's useful to a large portion of the world, maybe even specific sectors like business, or homes, or families - then you're gonna wanna not cannibalize your community. It's a fine line to draw there though.

**Frank Karlitschek:** Yeah, totally. And this is one of the interesting things... Because if you read business or product management 101 textbooks, then the first thing you hear is that you really need to optimize your product for a specific target group. So if I tell people that we are building software that's useful for big governments, and at the same time home users - well, then the reaction is always "That's stupid. That's not possible."

**Jerod Santo:** "That's stupid..." \[laughter\]

**Frank Karlitschek:** It's really a big mistake. You can't optimize for two target groups that are totally different... But yeah, at the moment it's still working. And to be honest, other software, like Office 365 from Microsoft, or Google Suite - this is also software that's used by home users and big companies... So it's sort of working.

**Adam Stacoviak:** When you say community, do you define that as -- are there layers to that? ...say community of contributors, and community of interested people, I suppose... What I'm trying to get at is this ratio of team members on the Nextcloud company team, versus say the community... And if you define that as like somebody who's contributed, do you consider the ratio? So your 1% of the community, for a lack of better terms. Your team represents, say, 1%, if that's a rational number... Maybe it's half a percent even, considering that the community always grows with the entropy of developers growing.

**Frank Karlitschek:** Yeah, first of all -- I mean, you're totally right... I have to be more precise with the term community, because sometimes when I talk to other companies, they're like "Yeah, we have this community, we have this community", and then they realize that they mean their customers; they call their customers community. So there are a lot of different ways to define communities.

\[39:49\] For me, the community is usually the contributor community. They are the people who really helped to improve the software. And there can be coders, and there we have over 2,000 at the moment, who really help to send pull requests to the core functionality... And I don't even count the app ecosystem, because there I don't really have numbers. Some of them are developed on GitHub, and then of course we could do some statistics, but lots of those apps come from other sources, so I don't really know.

Then we have the translators. Nextcloud is available in 96 languages at the moment. Some of them are Klingon, and other things, but... \[laughter\]

**Adam Stacoviak:** Really? That's funny.

**Frank Karlitschek:** But still...

**Jerod Santo:** Of course.

**Frank Karlitschek:** ...96 languages, and we don't pay a single translator in the company. It's all done by the contributor community, again.

**Jerod Santo:** Wow.

**Frank Karlitschek:** And we have lots of those things. We have people who do meetups, and events in places... So I usually call community the people who really help to push the product forward. But then of course we have a lot of users and fans, and sometimes they send messages like "Hey, I've used the software for many years. Thanks a lot", but it's hard to measure. I can't really say... If you look at people who contribute code with pull requests to the core repositories, then we have a bit over 2,000. And employed developers, I think we have like 25 to 30 people who are really paid to write code... And 2,000 volunteers.

Of course, those 2,000 volunteers - they are not doing this full-time, usually. We have some full-time volunteers. I don't know how they do it, but... They usually just do a fix once a month, or something like that.

**Adam Stacoviak:** Yeah. Well based, on those numbers, a back of the napkin math says that you're about 1.5% ratio, so you employ roughly 1.5% of the developers that contribute to Nextcloud, just to round that off... But on your GitHub you say "community-driven." I do agree that it might make more sense to say -- I suppose "community-driven" is good enough, but it leaves questions, as we've said here, to say "contributing community-driven", potentially... And I guess the hinging question is if you're optimizing for that kind of business model where you're contributor community-driven, then how do you enable that community to drive? In what ways, what kind of things do you do specifically as a business to enable that?

**Frank Karlitschek:** Yeah, good question. I think the most important thing is what to not do, instead of what to do. Most other companies and open source projects - they should all really start with not demotivating people, for example that you don't have any processes to follow. That's a very common thing; if you want to contribute to a software, then you somehow have to follow processes. And processes are fine; if you are an employee, then sure, there are company processes.

But if you trust a volunteer who's trying to send in a bug fix, then you don't want to follow huge processes. It really should be easy for people to do it. They should feel valued; they really should be treated like everybody else, even if they just send a one-line bug fix, or something. As I've mentioned before, I think it's a bad idea to require them to sign any contracts so that you can accept the one-line bug fix, or something. That's weird.

From a business model perspective, it should be fair. They understand that we sell support, but the software should be available or everybody, so they should be able to use their own bug fix. That sounds obvious, but in a lot of cases this is not obvious. Maybe they have to buy the software later, that they fixed themselves, or some weird stuff...

\[44:18\] So it's just like, "Make it easy to contribute." Of course, there's all the active things that you can do. For example, we are organizing a conference once a year, and some hackathons every few months, where we invite people, and we sometimes pay for travel. Very active community people we just invite, like "Hey, come to Berlin at summer, and we pay for the travel." This is something we do.

We have an active mentoring project where if you're a student and you want to get involved, we could give you a mentor to help you. We have a diversity program, where we help under-represented groups to get involved in Nextcloud. We have sponsoring, and internships, and other things... So we actively sponsor people and try to bring them into the community. But of course, at the end of the day we can only do this with a few people; we don't have the money to pay flights for a thousand people. So the thousands of volunteers - they have to like it. They have to like the software, they have to like the mission, they have to like the free software license... They have to like what we are doing, otherwise it's not possible to pay them to become part of the community.

**Adam Stacoviak:** Let's laser into maybe a core product, like Files. How do you lead files in the direction it needs to go, in a community-driven way? Is there a product lead that works for Nextcloud that interfaces with a team (for a lack of better terms) in the community that says "Hey, I'll be a part of this team. I don't work for you, but I wanna contribute. Because I care enough/I wanna develop in these ways"? How does that work?

**Frank Karlitschek:** Excellent question. We do releases of the software roughly three times a year. We have on our website communicated the schedule. For example, at the moment we're in the development phase of the version 19, and there will be a feature freeze in a few weeks. Then after that only bug fixes are allowed, and then the beta, and \[46:35\] This is organized by us, but it's not a big miracle, it's just a fixed release cycle.

Whatever pull requests are submitted during the development phase of this release, they go into the product. We have a review process for these pull requests. So everybody can send a pull request, and then two other core people need to approve it. They need to say "Yeah, this is secure. Fine. Coding style - fine. UI looks fine", whatever, and then it goes into the product.

Those three people - the one person who submitted the pull request, and the two other who reviewed it - none of them have to work for the company. They can be other community people.

To answer your question, how the Files part of Nextcloud looks in 19 is basically purely defined by which pull requests are submitted and accepted, and then this is the product. What we do as a company is, of course, people who are paid to work on Nextcloud - they have to, with x% of their time, follow the company roadmap, basically.

We as a company do product management. We look at what our competition is doing, what is missing, this customer is asking for that, this needs to be refactored etc. Then we as a company tell our paid developers to work on those things. But at the end of the day, they just submit a number of pull requests. If someone else comes along and submits another pull request, then that's also part of the product. So there is not real central maintainer who says yes or no to every single feature. It's really who's doing the work decides.

**Break:** \[48:41\]

**Jerod Santo:** Frank, you've described how the community interacts with the company and how it's a community-driven open source project, with the Nextcloud company attached to it... And no doubt, you've been successful at building that community. The switch from open core to completely open source undoubtedly was a huge aspect of making that work. Like you said, you felt like you unlocked the community members to really do their thing when you switched from ownCloud to Nextcloud. I'm curious how else you had success building this community, because many open source projects want an awesome -- and we're talking about the contributor community, not just users... Thousands of contributors are excited and writing software that plugs into, or adds on top of Nextcloud, and I'm curious how you built that from the ground up.

**Frank Karlitschek:** Yeah, community building is an interesting topic. I think there's a lot of psychology behind it. You have to think what contributors like and what you can do to make this a fun experience. There are a lot of things that you should avoid, obviously, like making contributing difficult and complicated an untransparent; you need to avoid that. But you also need to have positive incentives.

I think it's very important to understand that a lot of code contributors/developers, in the current job market -- I mean, they can get very nice jobs to write proprietary software for companies... So you really need to give them something so that they basically write code in their free time, without payment. A big factor here is to have a good vision and mission behind this.

\[52:00\] If you're an open source project, you're a database -- I mean, maybe it's fun to make a database a little bit faster, or something; I'm sure it attracts some contributors. But in our case, it's really about providing security and privacy to users, and this is a big motivation, a big mission behind it, and this helps to attract people.

Also, to be honest, we picked some companies as our enemies, like the big cloud providers, like Microsoft, and Google and so on... And it's always helpful to be the small guy who is trying to compete--

**Jerod Santo:** The underdog story, yeah.

**Frank Karlitschek:** Yeah, exactly. So we are basically trying to compete with the huge companies that have a million times more people and more money than us. That's a big motivator. This motivates me personally too, and it motivates most of the employees. But it also motivates the contributor community, because we try to act together. If we can work together as an open source team, we try to build an alternative to the big enterprises. I think that's an important success factor, but there's other things, like being transparent, being honest. You can meet people in person at our conference, and you see "Yeah, there are real people behind the software." It's not just some anonymous people working in some office building. They're actually people like you and me", and then you can build up the personal relations...

Community building - there are so many aspects, I don't even know where to start... But at the end of the day, you need to have a fair human interaction with the people. It's not really about technical stuff, like paying people, or what Git repository to use; it's really about people, and to be friendly, and open... And to welcome a diverse community - it's another important thing.

I think if you're nice and transparent, and you have a vision, and it's easy to understand and easy to learn, then you attract people, contributors.

**Adam Stacoviak:** All too often we have this -- I guess lack of humanity is the easiest way to say it... Because so often the easiest solution is just simply connection, a relationship, respect, empathy. What seems to some degree obvious and logical to many - in our age, I suppose; maybe it's something with this era we're in now, where you can be born, and Facebook is a thing... Whereas for probably all of us on this call today -- when I was born, Facebook wasn't a thing. The internet was barely a thing, if it was at all. 1979. That's a long time ago. In an era like today, that we're so connected to digital, and so disconnected from humanity, that the obvious answer is just to focus on human beings.

**Jerod Santo:** I like the mission aspect as well. Giving something that people can really buy into; an idea, even more so than just a piece of software. An underdog story, and a vision of a life of security and privacy that you can contribute to I think is powerful. Did you guys do any deliberate community building around these relationships and the transparency? Were there meetups, or conferences, or a place where the community gathers?

**Frank Karlitschek:** \[55:57\] Yeah, we're doing meetups and conferences and everything, but what we don't have is community management. A lot of companies have the normal company, and communication, and marketing, and development, and then they have this other department which takes care of the open source community. They have a community manager, and their job is to do these parallel activities, and these parallel events, and this parallel communication, and parallel development process, and stuff... And I find it weird. I mean, for us, it's the same. Our marketing also targets our community; it targets also our enterprise customers, but it also targets the community. In a lot of cases the message is also the same, because companies care about privacy and security, and our contributors, too. And the events - that's also a huge overlap. So we're trying to integrate that.

Another interesting thing is -- yeah, maybe to explain this a bit better... It's like in the old days, at the old project, we actually had two websites. We had a .com website and a .org website. The .com website was for the big-paying customers, and the .org was for the community. And it's always a bit weird. Nowadays we have only one website, and we balance it for both target groups, and it works out quite well.

To be honest, there are sometimes two target groups. In so many cases where I have meetings with customers, they tell me "Yeah, we'll try to use Nextcloud in our big company here, but I'm also using Nextcloud at home. I'm also a home user."

**Jerod Santo:** Yeah. That's cool.

**Frank Karlitschek:** So it's not that you have the open source community and then you have the serious business community, and they're totally different. If you're doing a good job, then they're the same.

**Jerod Santo:** I'll have to say that my Spidey sense has gone up on a couple of companies, a couple of times, with community managers, or sometimes it's developer relations, where I can see both sides of the coin. If you have a dedicated person that's like "I'm running the community. I'm a community manager", or something. In one regard, you're like "Wow, this company cares so much that they're gonna pay somebody full-time just to participate in this capacity." That means they care. And then maybe the pessimist in me thinks "Is your community a business unit?"

**Frank Karlitschek:** \[laughs\] Yes, exactly.

**Jerod Santo:** It's almost like you see right through it, and you're like "Is this a real community, or is this a business unit with KPIs, and it can ring hollow?"

**Frank Karlitschek:** Exactly.

**Jerod Santo:** So that's an interesting point that you make there. I haven't really put it into words before, but I definitely had that feeling where I was just like "This feels not actually like a real community, but kind of like a facade of what a community is supposed to look like", and sometimes that turns me off.

**Frank Karlitschek:** Yeah, we had this in the past, in the old company, where there was the real marketing, and then part of the real marketing was the community manager for the community marketing. And then we had the real vice-president of engineering, and then we had the community manager who is trying to translate this stuff into community processes. And the same for other areas, too. And it's a bit weird.

With Nextcloud it's, of course, a special situation, because it basically was founded with the core group, who really did this years before... So we really have this special understanding and focus on the community and the product and everything, so we are able to combine those two worlds in maybe a unique way.

\[59:55\] Normal companies have the managers, and if you tell them "Well, we also have this community" - they don't really understand it, in most cases. Like, "Yeah, we have these weird developers that sit in the basement and they work for free. I don't really understand the mechanics..." \[laughter\] You don't see a lot of companies who really understand the power of open source. In a lot of cases with open source there's a weird license, or open source is just like "Yeah, we have this freemium model where other people use our product without paying us. That's open source." But the real social, humanistic aspect of it - you don't see it that often.

**Adam Stacoviak:** What would you say are the biggest challenge your facing is right now? You specifically, and then the company at large.

**Frank Karlitschek:** Me specifically - I mean, my job is to draw Nextcloud, to make sure that we get more customers, hire more developers, doing more marketing... Basically, make the Nextcloud story more successful. That's my personal job.

We are doing quite good at the moment, because there's a lot of awareness, especially in Europe, and in other areas, that it's good to have an alternative to the big three cloud companies. So yeah, the challenge at the moment for me personally is to grow the team and grow the company, because -- in a way, the 50 people we have is not so big, but of course, Nextcloud is only 3,5-4 years old, so it's also not that small. We're here to grow more, and it's a challenge to find the right people and to build up the processes, but not too much processes, and to position ourselves in the right way.

And of course, we are stupid enough to compete with the huge companies here, so... We are stupid that we try to offer software that's comparable to Office 365 and Google Suite, and that's, of course, a big challenge.

At the moment we are doing a good job, because of our open source strategy, so Nextcloud is okay; it has most of the features we need. But of course, it's not standing still. It is not a product which is -- it won't look the same in ten years or in five years; it's constantly changing, so we also have to change and we have to evolve, and be competitive from the user experience perspective and the feature perspective, and at the back-end still being open source, and easy to run, and easy to upgrade, and everything you want from on-premise software.

**Adam Stacoviak:** Over the next month, let's say, you can wave a magic wand - maybe next quarter - and your job is growth, specifically your job. What kind of things would have to happen successfully for you to say "Okay, now it's okay to grow the team"? Is it a revenue thing? What certain metrics, what levers get pulled or what variables change to say "Okay, we can grow. We're safe, we can grow."

**Frank Karlitschek:** We have a few challenges; one of the bigger ones is on the marketing side, to make Nextcloud more well-known, because we don't have a real marketing budget; we're just a tiny organization. So if more and more people would know that Nextcloud exists and it's easy for people to use it...

\[01:03:59.06\] For example, we are trying to work with some of the bigger service providers all over the world, in different countries, so that they offer Nextcloud services... And then if you somehow became -- I don't know, if we get the next Super Bowl ad for free or something, I don't know... \[laughs\] That we really see, "Okay, now a lot more people know that Nextcloud exists, and it's a good solution" and so on. I think this would really help us to grow more, and then (again) hire more people, and basically this would help us to reach the next level.

There's a lot of things to do on the software too, to improve. There's always features to do, and bugs to fix, and performance to improve, obviously, always... But I think the marketing is something where we really could use it to reach the next milestone somehow.

**Adam Stacoviak:** Well, there's two questions essentially you ask yourself when it comes to marketing - you wanna know who your customer is, and you wanna know where they're at. Those are the two things to solve. Once you know those two things, it's pretty easy to make an attack in terms of finding them, and sharing your message, and sharing your vision, your dream. That's the hard part though - who are they and where are they.

**Frank Karlitschek:** Yeah, I agree. In a way, the answer is obvious... It's the decision-makers, the IT managers of the companies... But in reality, it's of course a bit more difficult, because who are those people? Are they like -- I don't know... At the moment, our strategy is to reach those people through our community products. A lot of people use Nextcloud at home, and then later they bring it to the company... Because we don't have the budget to target the IT decision-makers directly, so we have to go through the enthusiasts community.

Yeah, it's an interesting challenge, and you're completely right - you need to identify the target groups... But then of course, the question is "How do you reach them with our small marketing budget we have?", because the standard channels--

**Adam Stacoviak:** Get creative. Get creative is always the answer, right?

**Frank Karlitschek:** Yeah, exactly. \[laughs\]

**Adam Stacoviak:** Growth-hack, get creative, come on a podcast like this...

**Jerod Santo:** Pay a Super Bowl ad...

**Frank Karlitschek:** Yeah, exactly. Breakthrough tomorrow, I'm sure... \[laughs\]

**Adam Stacoviak:** That's right. Hey, you never know. You never know.

**Frank Karlitschek:** Yeah. But at the end of the day, it's grassroots. We need to have a grassroots strategy somehow, a word of mouth strategy...

**Adam Stacoviak:** Firefox did it...

**Frank Karlitschek:** Yeah, and many others, too. Linux, right? Linux became popular via the enthusiasts community, and they've now basically completely killed the commercial UNIX systems out there just with their community strategy... And the same thing with MySQL 20 years ago, and so on. So yeah, it's a working strategy; another benefit of being open source.

**Jerod Santo:** Absolutely. Well, Frank, our best of luck as you move forward with Nextcloud. It looks like really high-quality software. We didn't talk very much about the software itself, but you have so much experience and insights around the open-sourcing side, and the community side, and the fork, and dealing with the transition, that we thought we would camp out there... And we definitely recommend you to use the little grassroots marketing; we recommend our listeners check out Nextcloud, especially if you are security-focused, privacy-focused, and willing to spin up a server in your house, or in a rack nearby, or wanna run it on a hosting provider, a VPS provider, or something like that... Definitely check it out. We've heard only good things about Nextcloud, so you're doing a great job.

I did check out some of the code... I'll say this - you're trying to keep up with some large companies; you have a lot of software out there, you have a lot of open source... So check out the Nextcloud organization on GitHub (we'll have that in the show notes), because there are a boatload of repos, and all sorts of different languages and technologies, from the server, to the Android app, to the iOS app... I'm sure there's many places to get involved.

We appreciate you sitting down with us. Another shout-out to André for helping put this episode together. We really appreciate it, it's been a lot of fun.

**Frank Karlitschek:** Thanks a lot. It was really awesome to be on the show.

**Adam Stacoviak:** Thanks, Frank.
