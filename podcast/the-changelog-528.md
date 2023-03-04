**Jerod Santo:** Alright, Evan, so welcome back. First of all, we're happy to have you...

**Evan Prodromou:** Thank you.

**Jerod Santo:** Here's a list of nouns that I just started writing down as I was reading certain things... I thought I'd just throw a list of nouns down, and then we'll just go from there. So these may ring a bell: identi.ca, StatusNet, OStatus, tent.io, Diaspora, GNU Social, Mastodon, Scuttlebutt, Microblog, App.net, Pump.io, and the Social Web Working Group. Certainly not a comprehensive list of nouns, but there's a lot of things there.

**Evan Prodromou:** \[laughs\] Absolutely, yeah. That feels like a "This is your life" segment.

**Jerod Santo:** It has been much of your life, hasn't it? Where do we start for this conversation? What's the most interesting starting point? One thing I noticed - we had you on the show, 2017, ages ago, and you were part of that Social Web Working Group at the time... And it appears that that group is no longer. I thought maybe we'd at least touch on that point... But a lot of your work seems to be very relevant today. So maybe start there.

**Evan Prodromou:** Yeah. Well, let's start there, because I think it's -- so we're recording this in early 2023, and the story of standards-based social web software, so software that connects to other social networks, which was kind of niche back in 2017, has really blossomed, right? So in the previous autumn, to where we are right now, last fall, Twitter was acquired by Elon Musk, and that really stimulated a lot of interest in Mastodon. So massive growth in the number of users, and a massive growth in the number of users on the Fediverse.

So as much as it's been a really difficult time for Twitter users, for Twitter employees, and their families... Like, not trying to diminish that at all. It's been a tough time for a lot of people who depend on Twitter. It's also been an amazing time for Mastodon, and an amazing time for the larger Fediverse network.

**Adam Stacoviak:** Interesting.

**Jerod Santo:** It has. And so tying back to that working group, the thing that seems to tie everything together, your work that you'd been doing for years by the time we spoke to you in 2017, now here we are, years and years later - what came out of that... There was a few things that came out of that working group, I know Webmention is one of them... But ActivityPub seems to be the underlying tech, or the spec that you all worked on, that powers this federated social networking thing that everybody's starting to try, and stick around, some of us. So tell the story of ActivityPub maybe, briefly.

**Evan Prodromou:** Yeah, so ActivityPub is a W3C standard... W3C being the standards organization that defines protocols and data types for the web; a pretty amazing organization. Back in 2017, our working group there defined standards for distributed social networks. In the case of ActivityPub, this is a social standard for sharing social network information across from server to server. Things like sharing your profile, sharing posts, or photos, or videos that you post, as well as the responses, whether those are comments, or replies, or even the kind of reactions that people do, like liking, or sharing, or giving something a star - all of that is caught up in that ActivityPub protocol.

\[06:22\] So it's based on two big parts; the first big part is that data structures, so that's called activity streams, and that's a JSON-based standard for defining kind of like a subject verb object, sentences, saying things like "Evan posted a tweet", or "Adam liked Evan's tweet", right? That kind of subject-verb-object is structured in those JSON structures.

And then the other half of ActivityPub is defining essentially the mechanism for routing those activities to people who are following, or people who are involved in those in those activities. And by combining those two, having a standard representation, and a standard way of distributing those representations, we can have social networks that stretch beyond organizational boundaries, across servers... Pretty amazing stuff.

**Adam Stacoviak:** Is that helpful, to have it to be sort of a web spec, so to speak, like a protocol, versus simply like an API that may iterate faster? Like, how does it being in a working group -- and it seems kind of like maybe bureaucracy potentially even... Give us some insight into the process of that.

**Evan Prodromou:** Yes. \[laughs\] The answer there is absolutely, yes. Absolutely, having a standards organization -- you know, the W3C is a standards organization that has some mechanisms for doing like kind of faster, iterative work. So they've got community groups, or business groups that are kind of lighter... But the social web working group was a heavy way, a lot of consensus, a lot of people around the table... So there were people from different open source organizations, independent researchers, people from Academia, people from big companies, who each had their own agenda, and were coming there for different things.

So I think when it was all counted up, we were somewhere around 4+ years developing ActivityPub. It took a long time. Yeah, it took a lot of footwork, a lot of effort. So that slowness is tough, but what we get out of it is that everybody knows where the standard is, right? They can find it on W3C. There's an understanding that that is the official social web protocol, right? So if you're starting a new distributed social network in 2023, you're going to start with that protocol. You might build on top of it, you might make variations, or extensions... But that's now the standard to work with. And that wasn't the case before we started this.

You mentioned Tent.io, Diaspora... Great examples of projects that started, and they started off with like "Hey, we're gonna do brand new software, brand new protocol, and we're just gonna win this by getting popular." Well, when you have lots of projects that are doing that, you've got a real fragmentation. And today, the way that those new projects, like Pixelfed, or PeerTube, that are doing cool social networking activities - they build it on top of ActivityPub, because they know that that standard exists. So is it the fastest way to do it? Probably not. But what you get in return is that kind of authority that people can all look to and use.

**Jerod Santo:** \[10:09\] So if you were to describe Mastodon in the context of ActivityPub, would you say it's an instance of this? Would you say it's a thing that uses this protocol? How would you describe their relationship? Because I think it can be confusing for people.

**Evan Prodromou:** Yeah, yeah. So Mastodon - and I am very sloppy with it. So I'll try and be precise&lt; and then I'll tell you how I got a little off. So Mastodon is open source software written by Gargron, who's a great developer out of Germany... And he created Mastodon I think in 2017. And the software is written in Ruby on Rails. It has some extra components for servicing queues, which make it pretty cool for a Ruby on Rails system... But it is probably the -- yeah, definitely THE leading ActivityPub implementation on the web right now. It is the default. And most of the other software out there works to be compatible with Mastodon. It is not necessarily the purest implementation. There are some things that the way that it works isn't exactly according to standard, but it's the de facto standard, because it's the one that everyone uses.

People who talk about this ActivityPub network, all the different implementations of the protocol, different software... I mentioned Pixelfed, PeerTube, Pleroma - we call that big collection of software the Fediverse, right? Federated Universe - Fediverse. And that Fediverse is mostly made up of Mastodon instances right now, but the fact that you can write other implementations, and use other kinds of software really means that it is an open system.

When people ask me, "How do I get on Mastodon? How do I get started with mastodon?" I don't try and correct them and say "Oh, you should call it the Fediverse", right?

**Jerod Santo:** Right...

**Evan Prodromou:** By the way, I call it GNU + Mastodon.

**Jerod Santo:** \[laughs\]

**Evan Prodromou:** I try to avoid being overprecise on the language, because you're just telling people not to use it; you're scaring people off. So when people ask "How do I use Mastodon? How do I get started?" I'll just use that language with them. And the likelihood is that they are going to be starting with Mastodon anyways. But yeah, it's maybe like sophomore year on the Fediverse before you start looking around and saying, "Hey, there's a lot more software here. There's a lot going on that's not just mastered on."

But I think that we talk about that Mastodon ecosystem - one of the things that's wonderful is Mastodon has a pretty good web UI, but there are now a host of mobile apps, web-based frontends that you can use... And so it kind of starts to break away from being purely Mastodon. Mastodon's this kind of backend core now that you can use other kinds of systems for.

**Jerod Santo:** What's interesting by that - I've definitely seen that happening. Of course, we had like the windfall back in November... And just for context, I did look up a few numbers. In terms of Mastodon active users, October-November timeframe, 300,000-ish. And then December, early January, 2.6 million was the peak, I think, active users. And then you have a bit of a slump at this point. We're like at 1.5 million people using Mastodon I think specifically in this case, on a regular -- I'm not sure if that's daily or monthly, but that's Mastodon's own stats. So like a huge influx of people, many of them creatives, software people... We've seen a lot of developer instances stand up and move over... And one of the things that you said in 2017 on our show, which seems to be like "Hey, Evan, you're on top of it. This was right", or at least I'm thinking it's right, was we were talking about what makes a social network sticky and interesting, and one of the things, of course, is the network graph; like, are your people there? Is your community there, your friends? But another thing that you said, which ties into this, is you said that stimulating hackerly instincts is really powerful. You said "The more that we have cool third-party clients, the more that we have cool hacks, games, and integrate with social networks, etc, the more likely we're going to be to use that kind of thing."

\[14:51\] And I've found that to be - as a still somewhat we're early-adopting at this point, even though it's been around a while... You know, two million users is a lot more than zero, but in social network sizes, like, we're still at the early adopter phase... I've found all of the tooling, all of the hacks... Like, I feel like it's kind of caught the spirit of the hacker community, and the apps, and just the third party stuff coming out around this stuff. To me it's what's the most interesting aspect, as a user. I'm like "Cool. I don't really like the default Mastodon Web UI", but there's so many different ways you can interact with it... And if you don't like any of those, code your own, and a lot of us are doing it. So you're right on with that premonition.

**Evan Prodromou:** That was really smart of me. Good job. Good job past me... Yeah, I think that -- I mean, who could have predicted that this would fall so right in Mastodon' lap? There has been great software development work using Mastodon, building up that kind of third-party environment... One of my favorite bot hackers on Twitter, Darius Kazemi, has been building his bots on Mastodon since I think at least 2019. So he's been shifting his bots over to Mastodon, and all the cool stuff that you want to see is happening there, instead of on Twitter, right? And that's been happening gradually... But again, we're benefiting from the Twitter management shooting itself in the foot by reducing the availability of the API for third party developers, right? So first they took out the different Twitter clients, independent Twitter clients, just disabled their keys without warning... And some of the best Mastodon clients are coming out of the companies that used to make great Twitter clients... So like Ice Cubes on macOS' beautiful client... And they had their Twitter API key pulled. And so they're like "Well, we can't do anything else here."

**Jerod Santo:** "What else are they gonna do...?" Yeah.

**Evan Prodromou:** Yeah, what else are they gonna do? And then, I think we're seeing right now that free access to the Twitter API is disappearing, or will disappear soon. I actually haven't checked. I know it was announced for February 14th; we're recording on the 15th. I haven't run any tests in a while, but I think that we're expecting that really rich third-party experience that was happening on Twitter should be -- well, it's got to move somewhere, and the fact that we've got open APIs, no gatekeepers, no one can tell you you can't implement on top of the Mastodon API, it means that we've got a really, really great opportunity to attract those developers.

And again, I want to say 0 I know that that's a lot of people's bread and butter. Those are developers who were making a living off Twitter. It's not something to be happy about. I hope that they can find a market and find a path to getting good work on the Mastodon and the Fediverse. Yeah.

**Jerod Santo:** \[18:12\] Well, you were even stating about Twitter's kind of anti-developer stance back in 2017... Twitter has been hostile against third party developers, I think despite its best interests, for a very long time. And that was one of the things I was hopeful that Elon Musk would change when he bought it, was like maybe as like an engineering-minded person, he would embrace the developers... And now it's been even more hostile to remove free access.

**Adam Stacoviak:** That is crazy to think like that, though...

**Jerod Santo:** It is.

**Adam Stacoviak:** You've got the Tapbots out there... Tweetbot was an amazing application. My story with them is a little unique. I was a die-hard Tweetbot user, and I had never really used anything Twitter-first client, ever. Maybe their website, because you kind of have to, in some cases, but... I was always a Tweetbot user or a third-party client user. And over time, Tweetbot got not so much worse on their part, because they were amazing developers, amazing designers, but because the API was so limiting, it couldn't do the newer things Twitter was allowing things to do... And I was like "I just can't use Tweetbot anymore, because it's not the native Twitter experience", and now they're hamstringing the third party developers like them from creating a good experience, and following Twitter's guidelines, because they want to control so much. And I get it. I do get it, to some degree. But I think, Evan, the point that Jerod mentioned was so on point... But I kind of miss the Tweetbot days, and when that was a flourishing opportunity. I mean, back in the -- I can you remember way back in the day, Jerod, with like Wynn on this show, and the API hacking, and stuff like that... All those fun things happening between like mashups, and stuff like that. That was a cool thing. And that sparks the interest of developers, and innovation, and it's just not there with Twitter.

**Jerod Santo:** And the fact that Twitter's core experience was created by its users. I mean, retweets, stars - all this stuff that became core Twitter features over time, the users, the people created those things. They invented them, and they were using it in a cool way, and Twitter was smart enough to say, "Okay, this is obvious. People put an rt: in front of their thing... I guess we'll make that a--"

**Adam Stacoviak:** I remember that... Gosh.

**Jerod Santo:** For a year -- I mean, it was a long time. It wasn't like it was a short amount of time. It was like --

**Adam Stacoviak:** Wow... We forget what we -- what we don't know anymore. So it's like "What?! Come on..."

**Jerod Santo:** Right. And it's like, how could a company that was so embraced and so loved, and really like given gifts by its creative users -- what's the saying, like "Cut off your nose to spite your face?" Why? How could it do that? And, well, where are they going to land? Right now, like Evan said, they're landing in the Mastodon's lap... Ivory, isn't it -- Ivory is the new TweetBot.

**Evan Prodromou:** Yes, exactly.

**Jerod Santo:** So they're moving over.

**Evan Prodromou:** And doing great work, right. So I think hopefully those of us who are interested in seeing and supporting that kind of innovation happening on social networks - it's great to give those third-party developers some support. Go ahead and do the paid version, kick them some Patreon money, whatever it takes. Let them know that we're supporting them, because it's really amazing.

But I think one of the things that is the worm at the heart of this apple for Twitter was switching to an advertising model... Because once they had ads that were in stream, they had to have really strong control of how that stream is presented, formatted etc. And that meant trying to claw back control from that developer community, and from the user community at large. I think that it's going to be really hard to see that -- I don't think it's going to be possible to see that repeat on the Fediverse, just because people have account mobility, they can move from one server to another, they can move from one service to another...

\[22:14\] And so if there is a service that is doing kind of user-hostile, developer-hostile work like that, you just move over to one that's not. And I think that that gives us the opportunity to see maybe better business models, or more supportive, or open business models that actually can be participative for this developer environment, and for the users.

**Adam Stacoviak:** I don't know if the worm, as you said, shouldn't be a worm, or could have been a worm... Because I think if Twitter implemented ads -- and I'll be frank, I don't mind ads in my tweet stream if they are tasteful, relevant, not scams, not things that are trying to objectify me, or belittle... There's a lot of weird stuff out there, where you go and buy it from somebody and it's a knockoff of somebody else's thing. It's just like weird stuff out there.

So I think if you do a good job of like maintaining a good ad ecosystem, of worthy and respectable advertisers, it can be a flourishing environment. Now, that being said, that's a great way to fund what potentially could be a massively desired company to run something like Twitter... Because it is a global company; it is a global usage application. I don't mind the ads. And I think it could have been done better if they would have just said, "Can we put the ads in TweetBot, for example?" One thing with Tweetbot is it didn't have any ads, despite Twitter's native client having ads.

**Jerod Santo:** Right.

**Adam Stacoviak:** And so, the control could have been simply like "Just maintain better your feed, even with your third parties. Have some necessary (I don't know) oversight to that process", and not cut it off completely, which is what they did.

**Jerod Santo:** You mean like give Tweetbot a cut, or what do you mean? Because Tweetbot - like, they have no advantage of showing Twitter's ads. Their app is worse.

**Adam Stacoviak:** Sure they do. Access to the API.

**Jerod Santo:** Oh, I see.

**Adam Stacoviak:** I mean, that's the advantage, right? I mean, they want access to the API to be a Twitter client. Well, there's got to be something there for Twitter and for them. I don't know what the business model is necessarily, but there had to be some sort of thing like "Hey, if you want to have access to our API and do things with it, well you have to then also follow our guidelines for displaying and showing off our ads. And you can't hide them, because that's our model." And there might be a pay to get the API access, or there might be not; I don't know what the \[unintelligible 00:24:34.02\] is there. But there could have been not a worm.

**Jerod Santo:** I mean, I understand -- I mean, I just see, like, if your business, which is an advertising business, its core experience is controlled by not you... Like, that's what they were looking at. And I just don't feel like that's ever gonna work long term. And I think probably Twitter was like "This is not going to work long term, and so we're gonna cut it off." Anyway, we can speculate...

**Adam Stacoviak:** Sure, we can. But I think this is going back to their adherence to this dev-friendly, non-hostile dev environment; they could have competed on usefulness with the application. So the Twitter app could have been just better than TweetBot. Right? Compete there.

**Jerod Santo:** Because that costs more. \[laughter\] It's cheaper to just cut off your --

**Adam Stacoviak:** Competition leads to innovation. That's what I'm speculating here.

**Jerod Santo:** Yeah, I get it. If there's anything we can say about Twitter, it's that there's a lot of bad decisions by a lot of constrained people in different circumstances, for a long time. It's just not been the most well-managed business, even though it's turned into this core infrastructure. But working around it, and getting back to you, Evan - I mean, you've been beating the drum for many, many, many years. I mean, you called this your life's purpose in your bio. And I just wonder what it feels like... Because, you know, for a long time there wasn't anybody listening to you beating that drum. I mean, there was very few people at the party. And then all of a sudden, here comes all these people into your party, and it's like, did this feel like validation after years of trying to get this thing off the ground? And all of a sudden, here it

is.

**Evan Prodromou:** \[26:11\] Yeah. Yeah. So I'll give a little bit of background here, for people who haven't heard part one from 2017...

**Jerod Santo:** Sure.

**Evan Prodromou:** ...which is that I started a service called ident.ica in 2008, that was a distributed social network. We had software that is now known as GNU Social, so I'll call it that... That you could download and install on your own servers, and you could connect to identi.ca. So it was this kind of open federated social network. We used a protocol called OStatus, that was based on a number of existing standards for sharing data across the web... And it turned out really nicely; it was great. I think at our peak we were at about 2 million users, we were seeing a lot of activity... But this was also at a time when, say, Twitter and Facebook were also surging in their growth, and it did not pan out. So we lost out to those other networks.

I have -- you know, that was a lot of effort. What came out of that was the software GNU Social, and then another stack that I created after that called pump.io, which was the first kind of ActivityPub implementation, and it was the kind of like "I'm going to just make up a protocol to see how it works." And that's what's running identi.ca right now. I think the time period here, 15 years - for a long time, there's been a lot of a sense of "This is a good idea, but I'm not ready to join up, be a part of it, maybe put my time or my social effort into it", for a lot of people. For me, yes; for a lot of people, no.

In October of last year - I don't know if she's gonna like me telling this story, but my wife came to me, and if there's anyone else who's suffered for the federated social web more than me, it's my wife. She's put up with a lot of late nights, and long trips, and so on.

**Jerod Santo:** Sure...

**Evan Prodromou:** And she came and she told me "Hey, I am using Mastodon right now, and I'm loving it. Me and my friends are using it, we're really connecting... It's really great." And I was like "I've been really away from that for a long time", and it was just at the at this moment, and I kind of like saw the surge come up... And it was amazing. It's been incredible. That's been an incredible feeling, of seeing this work -- I should be careful to say that this is not solo work. Any kind of standard, or any open source project, any standard is really a collaborative effort. We had a few dozen people on this Social Web Working Group; there are four authors on ActivityPub, and all of them did an amazing amount of work. So the actual work that went into it is quite a bit... But it's been really amazing seeing that work come to fruition. And I think the big thing for me now is hoping that we can keep this momentum and keep this effort going. And I'm pretty optimistic. It feels like we're seeing an inflection point, and that's pretty wonderful.

One of the things that has really mattered for me in this iteration has been buy-in from commercial organizations, right? So probably the one that people know most about if you're on the Fediverse is Medium. So Medium has a Fediverse instance, where Medium authors are publishing out into this distributed social network... Which is --

**Jerod Santo:** That's cool.

**Evan Prodromou:** \[30:09\] ...an amazing, like, through the looking glass moment, where Ev Williams and Biz Stone, two of the founders of Twitter, are posting on the Fediverse, right? And it's like "Wow, this is really coming out." Mozilla and Automattic, two real big leaders in open source business, have both said that they'll be putting instances of -- well, Automattic said they will be bringing Tumblr to the Fediverse, which is like an amazing community, and then Mozilla is going to be standing up a new social instance, too. So really seeing some adoption happening, there's been talk about Flickr coming on from these other social networks and social software companies... This is the first time around that that's happened. I've seen a lot of social networking surges and retreats, and this is the first time I've seen this kind of adoption.

**Jerod Santo:** Yeah, those are the kinds of adopters that don't just flake out overnight and are gone, right? Like, a user comes on, they try it, they're like "My friends aren't here, I'm out", or "It's not for me", whatever.

**Evan Prodromou:** Yeah.

**Jerod Santo:** But if you have like a company that says "Medium is going to run an instance", or get their users on, or whatever they're doing exactly - they're committed to do that for a set amount of time; they're not gonna change their mind. But these things move slower, so that's really cool. Is there any news? I did see, Matt Mullenweg's statement about Tumblr... Is there any idea of when Tumblr is actually going to connect up, and how that would work, or anything like that? Is it just kind of like on Matt's good name at this point?

**Evan Prodromou:** So it's on his good name, but he's said it like three times, in three different interviews... So let's hope that means that he's not walking this one back.

**Jerod Santo:** Yeah.

**Evan Prodromou:** But I know that Mozilla is actively working on their implementation. So Mitchell Baker, the head of Mozilla, was just interviewed, I think, on the new stack, and she was like "Here's our roadmap. First of all, getting an instance stood up, looking for ways to support Firefox users, and then looking for ways to do other kinds of services on the Fediverse." So they are really like going in, which I think is awesome.

**Adam Stacoviak:** Yeah. I'll put it down here, since you've mentioned Mitchell... We've been wanting to have Mitchell on the show forever... So if you know Mitchell, or if you are Mitchell listening - hello...! Come on the show at some point. Evan, you mentioned that -- Jerod asked you about this time in your life, and this transition, basically, and I'm paraphrasing, but you said "Mastodon was there, ready for this moment in time." What are they getting right? What are you/they, since it's not just you, obviously, it's many... Like, how have you captured this moment well? In what ways? Third party clients? Scaling? I know that Mastodon had some scaling issues... Can you speak to the ways that you were prepared, and then maybe not prepared, and how you were correcting those lack of preparedness?

**Evan Prodromou:** Yeah... So I should probably be clear, I have been very actively involved in ActivityPub, very actively involved in the network, and supportive... And I've been like a supporter of Mastodon since it started. I am not a Mastodon developer, and I don't speak for the nonprofit, don't really have a lot of inside information on it. So I don't want to come off as if I'm like Mr. Mastodon.

**Adam Stacoviak:** Yeah. Representing.

**Evan Prodromou:** \[laughs\] But let me say what I think has worked really well. And I can be -- since I'm not on the developer team, I can maybe kind of be a little bit more effusive in my praise than Eugen might be. So first thing is like the web UI and web experience - okay, it's not perfect... But boy, it's nice. Like, compared to other open source web software, it's usable, it's nicely styled, you can do different things with that... So that's one thing that I think has really led to like some real strength.

\[34:10\] A lot of times when open source developers build web software, the UI is like the last thing they think about. They're like "Oh yeah, but we've got this amazing engine underneath", and it's like "But the UI is terrible, and no one's gonna see your engine go." So that's one thing that I think has really worked out well.

Second thing has been really being responsive to the users on the Fediverse in terms of the features, and what's going on. So you can see that in everything, from like being able to share different kind of content, images, videos, polls etc. as well as the level of control on how you post, and who you share with... Even down to what kind of preferences and settings you can have, and the way that things were on default. All of that is coming from that community, and it's been really responsive to that community.

The third thing I think Mastodon has done really well is having some mobile presence. So Mastodon has official Android and iOS clients, and they stay pretty close to the web UI's functionality. Not perfect, but in the ballpark, as well as a responsive web UI, right? So you can run the website not too bad in a mobile web browser.

So the combination of the official web clients and the responsive web UI means that there is a presence on the mobile web, that again, for a lot of open source web developers, can be like a second afterthought. And they've done a really good job of having that presence. Now, is it as nice as an Ivory? Probably not. Some people might even say -- I like elk.zone, which I don't know if anyone's tried, but it's a really, really sweet web UI. I think they did a really nice job with it. But it doesn't hurt my eyes to go straight to Mastodon UI, right? Like, I can get what I need to get done there.

So those three things are really good. The other thing is Eugen's a really straightforward, not too arrogant, very like says-what-he-means, and then does it... And that's not always the case in developer communities. We tend to have like very big personalities, present company excluded, of course. But we tend to have really big personalities, who are like leading these organizations, and Eugen's just been really dependable, bringing out good code, shipping on a regular basis... And it's meant seeing some really good, good response.

So I think that those are some of the success factors. But also, that aspect of being in the right place at the right time is good, too. It's been good for Mastodon to be the default social network, distributed social network when Twitter started coming apart.

**Jerod Santo:** Yeah. And I think especially for people that were fleeing Twitter, the experience - you speak of the web experience. Not my favorite experience, but I agree with you, it's pretty good. I've always been a desktop or iOS native app guy to connect to Twitter. I never liked Twitter's website for many years... But it's close enough -- it just feels close enough to Twitter that you're like "Oh, I could just do my same thing over here." I think that was -- for the people that were fleeing, they were like "Oh, this is a little bit different. It's got its quirks..." Okay, we can talk about the downsides... I think we're gonna do some pros and cons of federation, because - lots of pros, but there's some downsides that need to be overcome, I think, with federated social networking. But it was just like "Yeah, this is Twitter-esque, and not Twitter, and the people are moving here..." So it's kind of a herd mentality to a certain degree when you have a large group of people coming over. It's like "Well, that's where everyone's going, so I'll at least give it a fair shake", versus kind of the skeptical look at something new, where you're like "This isn't what I'm used to." It was kind of what you were used to, only somewhere else.

**Evan Prodromou:** \[38:15\] This might be a little extra, or a little controversial, but for ActivityPub, four of the five authors are women. Not me. So four of my co-authors are women. And I think that there has been a strong woman presence on the Fediverse since Mastodon came out. And when there are women in a social network, when it's not just all dudes all the time, you get a different feel. And there are parts of the Mastodon UI that have been responsive, in terms of what women on the internet in 2023 need, or want, their abilities to kind of protect their identity, protect their privacy, have control over who can see their sites, or their stuff... And it's not perfect, but there are a lot of women who feel comfortable on the Fediverse, and feel like it belongs to them in a way that they might not feel with like other kinds of networks, and other kinds of social spaces on the internet... And I think that helps, right?

**Jerod Santo:** Yeah.

**Evan Prodromou:** I think that's been a big benefit. Yeah.

**Jerod Santo:** That's totally cool.

**Evan Prodromou:** Yeah.

**Adam Stacoviak:** Not controversial. I would say it's not controversial.

**Jerod Santo:** Well, not with us at least...

**Evan Prodromou:** Okay, good. \[laughs\]

**Jerod Santo:** Not with us, I mean...

**Adam Stacoviak:** You know, that's interesting to point that out, because I think this conversation, while we're kind of digging into ActivityPub, and how that relates to Mastodon, and like this sort of transitional point we're in, it's so interesting how so many people are advocating for or against. I think it's like humanity needs something to communicate, and what is the best for the future of humanity? For a while there, and still to this day - I was telling Jerod in the pre-call - social networks, large companies, \[unintelligible 00:40:07.13\] I mean, part of the F in FAANG, right? I mean, they are the social sphere. And our ability to communicate in formed groups and feel comfortable has been controlled by them. Good or bad. Not saying, there's been a lot of great innovation technologically from Facebook, Twitter and the likes... But at the same time, there's been a lot of non-responsiveness to people's safety and their comfortability, whatever walk of life you're in. And I think for us to be the best humanity in the future, we have to have a place where the software is for the people. And if the software isn't for the people, and it doesn't respect -- or even like with developers with Twitter and the APIs - that's not for the people.

**Jerod Santo:** No.

**Adam Stacoviak:** The thing has to be for the people, or they will leave, or they will find alternatives. Those alternatives may just simply fragment...

**Jerod Santo:** Or they'll stay and just suffer...

**Adam Stacoviak:** Right. Or stay and suffer. These alternatives may just simply fragment and not win, \[unintelligible 00:41:05.17\] It's like, how do we have places that are cool to go to, safe to go to, and for the people? And I think Mastodon is onto something, but it does have some issues, which I think Jerod will eventually talk about when we get to the technical bits of ActivityPub, and stuff like that. So... I don't want to jump the gun.

**Evan Prodromou:** So I will talk about the social aspect really quick, because I think it's really important, right? I don't know about you guys, but the way I stay in touch with my brothers who live in California - I live in Canada; the way I stay in touch with my parents, my cousins, my old friends, it's on the social networks. I see their pictures, I see pictures of their kids, I see them out doing things... A lot of my social life, especially with people who don't live in the same city with me, is like on those social networks, and it's really dependent on the goodwill of those organizations to keep those relationships healthy. And when that changes - and the priorities of the company aren't my priorities. I want to make sure I get pictures of my mom when she goes out for a walk, or whatever, right? And their priorities might be different. Then we've got this disconnect. And it's their platform; I'm probably going to lose.

\[42:28\] I think that when we are in more control of the platform, we can start organizing it in ways that means that we stay in touch with family, friends, work colleagues etc. members of our open source communities, or other communities, in a way that feels a little bit more natural and right, and like healthy, and good for us as people, right? Which probably feels like a new thing.

It's pretty surprising, I don't think a lot of people think of social networks as something that's like good for you, good for your relationships, good for your mental health... Which is so amazing, because it's supposed to be connecting us.

**Jerod Santo:** It's supposed to be that, yeah.

**Adam Stacoviak:** Yeah, exactly.

**Jerod Santo:** That was the promise, right?

**Evan Prodromou:** Yeah. Yeah. And somehow it's making us miserable instead. And could we take this thing that is making us miserable and make it make us a little happier? Like, be nice.

**Jerod Santo:** So one of the things - I think you're right on point there; I think there was this promise, there was this potential with social networking, which is why they exploded. We all jumped on -- because all of a sudden, you could connect with all these people, and it seemed like having... What Twitter had - still has, to a certain extent - is this one global namespace, and this idea of like "I can broadcast a message, and then immediately, or within seconds or minutes, N thousand or million people can receive that message." Like, there's a power to that. I think that's been a key to its rise, but also a key to it being so troubling, in reality...

And what I like about the Fediverse is this idea of kind of like these sub-communities, these little -- because that's the way we actually organize ourselves in the real world. We don't all just go to one place and yell at each other. Right? We'd end up just killing each other, which is what people on the large social networks want to do, is they want to kill each other at the end of the day. It's terrible. And we've all probably felt that desire, of like "Ahh, if I could reach through that keyboard and get you, I would." We don't do that. There's no such thing as a town square of 8 million people, right? Sorry, of 8 billion people, which is how many are on earth, right? We have our own communities that are organized around our localities, our belief systems, our histories, our families, our interests... Like, there's all these different ways you can organize, and that to me is beautiful about federated. That makes it difficult sometimes though to like join a federated network, because you're like "Where do I belong here? I need to kind of find my tribe." I know that myself - we ended up setting up our own Changelog instance, because it was something that hackers do, and it was like --

**Adam Stacoviak:** Changelog.social.

**Jerod Santo:** Changelog.social, just for Changelog accounts. But for a long time, I was like "Where do I belong?" I don't want to put my stake in the wrong community, and be like "Oh, shoot." So there is that hesitation, as we talk about some of the challenges, I think, of adoption, with Mastodon, not specifically, but federated social networks in general, is how does that whole deal work, and how do you explain to people so they aren't so hesitant that they just think "I can't find my home here"?

**Evan Prodromou:** Yeah, yeah. I think that's one of the things that are really going to have to change, is that ability to do that onboarding... And it's not like Twitter started off with great onboarding, right? It took a long time for them to figure it out, and figure out how it works, and figure out what people were coming for and doing.

\[46:00\] If you are an old enough Twitter user, you remember the time when you would see people's first tweets, and it was like "How does this work? What am I supposed to type here?" The onboarding experience for Mastodon still needs some work, because it needs that kind of affinity, where it's like "I want to land in a community that is going to be right for me." There are some people coming up with some really good ideas about how that works. Like, finding out more about you, we can kind of say what are the communities that you can go to. Because it's not one-size-fits-all.

There's also some folks who are like "Hey, maybe the best thing is going to a default, well-maintained server that's got everybody that's like 100% noobs, and it's just like a nice place, that's well taken care of, and you just kind of chill there for a little while, until you figure out where you're supposed to be", right? Which is another option. I think that onboarding process is going to be a little while.

I think there's a couple of other things that you were talking about. One thing is like being able to find your people. So like being able to find who you're connected to on other social networks, find your mom, find your work colleagues... It takes a lot of work right now. The best kind of mechanism today - and it might be disappearing actually, as I speak - is like using other social networks, social graphs, like the Twitter graphs, so bootstrapping off those. So Fedifinder, Debirdify, Movetodon have been this great mechanism for like getting people from Twitter onto Mastodon, and it's really helped out really well... But they depend on that Twitter API, so they may be disappearing soon. But I think being able to do that kind of people search, and say, "Where is Adam on the Fediverse? Oh, here he is, changelog.social" is really important and we need to like work on that better.

The other thing is like seeing that global conversation, right? So if I want to see who's talking about East Palestine, Ohio, or talking about what's going on in Ukraine, or whatever, it's good to be able to follow the global conversation, and not just my local conversation.

**Jerod Santo:** Absolutely.

**Evan Prodromou:** And we need to have some better ways of kind of following hashtags, following global search terms, and seeing them across instances. If you're on Mastodon, the federated timeline is good, but it's not comprehensive. It only covers what other people are already talking about on your server. But I think we'll get there, right? There's a lot of opportunity there.

**Jerod Santo:** I think that's interesting, and I agree. I think that this all adds to some of the confusion, I guess... Even as technical people, sometimes I look at, I'm like "Okay, I'm looking at a federated timeline. What am I actually seeing here, and what am I missing out on?" And I'm like "Okay, these are instances that my instance knows about", and it's like, that's so opaque to me. Like, what instances \[unintelligible 00:49:11.03\] and how does it know, how does it learn of these things? Like, there's so many questions of how this thing is working. But there's other aspects of it that are incredibly simple. Like, it's a reverse-chronological timeline of posts. To me, I love that. That's simple. I know it becomes troublesome if you have thousands of people that you're following, because there's just so many posts... But conceptually, it's easy for me to wrap my head around. But the whole -- the discovery bit, and then the plugging back into a bigger conversation than just is going on locally are still very mystical and difficult.

\[49:48\] And I wonder if that's just user experience things, or if these are things that need to be built on top of Mastodon, or is this part of ActivityPub that just hasn't been implemented yet? Like discovery. Let's just drill down on one of them. Find a person. I want to follow Adam Stacoviak on the Fediverse I'm on a server that I don't know the instance of, because I'm a noob. I'm on the noob server. Like, how do I do that today? And what would it take for us to get there, to where I put his name into a search field, and it shows me his deal? Is it there, or how does it work? Or how can it work?

**Evan Prodromou:** It is not there.

**Jerod Santo:** Okay.

**Evan Prodromou:** So there have been some people who are working on that, on building those kinds of systems. Right now, it's more of a social issue than it is a technical issue. So just like we've had search of the web for forever, we can search across these different instances relatively easily. The problem is that there is a very strong privacy drive in the Fediverse. So when these people search systems come up, and maybe they over-sample, and they include people who didn't want to be included, they get so attacked for putting it up that they're like "Alright, I'm done. We're out." So there have been a few people search discoverability services that have come out, and they've just gotten such negative feedback that it's really tough.

So I think that one thing that could be really helpful for some of the big players like - I don't know, Mozilla is a good example... Is they come in with a kind of community cred, and the resources to get through those kinds of social barriers, and they can provide us with that kind of searchability. So that's one possibility.

There are also like a couple of third-party systems for doing like "Find the people you already follow, and then find who they follow, and then find the best of those." And that can be another really good system for discovering people, which is a little bit more like peer-to-peer than having a big central people server... But I think it's something that's going to develop.

I know that it feels like ancient history now, but one of the things that happened with email when it was first standardized in the '80s and '90s was that there was a very bare-bones protocol, and people added to it in order to have better features. So being able to attach files to an email, or being able to understand different kinds of text formats. And those additions kind of made the entire protocol suite better at the cost of like complicating it. I think that's likely what's going to happen on the Fediverse, is that ActivityPub is a very bare-bones protocol; it's really about like "I'm following you, your stuff gets to me, kind of end of story", and I think that hopefully, the protocol kind of gets enhanced based on what people want to add to it - and it is a very extensible protocol - but also that ecosystem kind of built around it, and people build what they need to, because they have features that they want. So things like search, people search, text search.

**Adam Stacoviak:** It's interesting, the search problem, because I feel like it's -- you know, from the privacy perspective you mentioned, and the fact that it's distributed... Your instance 0- I've gotta imagine also an issue is "Does our instance and your instance leverage the same version of Mastodon, the same feature set? Am I up to date? Is my server stale, and therefore I don't have the latest features?" If this innovation occurs, you know what I'm saying?

**Evan Prodromou:** Yeah.

**Adam Stacoviak:** And I wonder, with this, where you may have a decentralized sort of core, but maybe you have needs for centralized services, particularly around privacy... Because you don't want to go to every instance that has ever consumed your stuff, because you maybe opt in to be in the search, let's say. Let's say that's the way you expose; as part of joining the Fediverse, I say "Okay, I do not mind being searched. I feel safe." Or "In these contexts", and there's some constructs, for men, women, and alike. Anybody who's trying to be found, there's a way. And maybe that needs to be centralized. But then it's like "Well, who owns that in this non-owned world? Who benefits? Who maintains?" etc. It's just -- um, I'm glad I'm not running it, basically. \[laughter\] It's too big of a problem.

**Evan Prodromou:** \[54:35\] I think the thing that we hope is that there will be multiple competing versions that have about the same -- that would get a healthy competition, right? And we see multiple versions. We've seen that a little bit with Twitter social graph importers; there's three or four well-known ones, and they kind of push each other to have better features... And that's really good, and hopefully we see that on the Fediverse for other things, like content search or people search.

**Jerod Santo:** So while we're talking about people search, let's just take a very simple feature such as a bookmarklet, or a browser extension, that - I'm on a website, which could be a Twitter page, it could be a YouTube channel, I don't know, a GitHub profile... And I hit a button that says, "Is this person on the Fediverse? And of course, if so, tell me what their handle is, so I can follow them." But just the yes or no, "Is this person on the Fediverse?", what would that take to build? Do you have to go out and ask every instance if they have that user right now? How does it work? Do you know?

**Evan Prodromou:** No. I mean, so what I would want to do in this case is have something built into the content of the page that I'm looking at, that says, "By the way, authored by Evan@prodromou.pub", which is my Mastodon handle, my web finger handle. And once that happens, it's got the server built-in, right? So like an email address, the server is included. I really liked this idea, actually... \[laughs\] I haven't seen it implemented really well. We used to do something similar with GNU Social in olden days, but I think this could be really cool... Because then you would just have a mechanism of saying, "I want to follow this person", and you kind of rotate around. Yeah, I wish I had a better answer for that.

**Jerod Santo:** The reason I asked that is because I was starting to think about... Email. We're going back to email, because email is one that succeeded. I think one of the best parts of our previous call we had years ago was we talked about how email succeeded, but IRC didn't, to reach mass adoption, while they're both these similar things. And I was like "Well, how do we get people's email addresses?" I guess we're spoiled... Because with email - I mean, there was no way of getting someone's email address. Like, we put it on our business card, or we put it in our website, or we asked them, like "Hey, do you have email?" And then they said yes, and then we told them what it was, right? Or we asked a friend, "Hey, what's Adam's email address?" You know, just like I could ask him, "Hey, what's Adam's Mastodon handle?"

**Adam Stacoviak:** Phone number.

**Jerod Santo:** Or their phone number... There really wasn't -- but, we're just very spoiled, again, because these networks are built for virality, and for discoverability; everyone lives in the same room, that you could just type their name into the search bar on Twitter and find them. But that's not necessarily a given. But as individuals who participate in these networks, we can make ourselves findable by putting it on our website, by putting it in these other places, and by talking to each other.

**Evan Prodromou:** I mean, one of the things I think has been cool over the last couple of months - Washington Post has been putting Mastodon handles into the articles on the web. But having that mechanism there, and then having an automated follow, so I can say "Hey, I really like this. I want to follow this author", that's really great.

**Jerod Santo:** That's really cool. GitHub also, I think, added it to their profiles.

**Evan Prodromou:** \[58:00\] There we go. GitHub did add it to their profiles. I don't know if I actually updated mine... I should. \[laughs\]

**Jerod Santo:** Uh-oh... \[unintelligible 00:58:02.08\] out there. I've got mine in there. Okay, so there's a lot of things that are lacking, of course... And those things will be built out if and when there's demand, by people who are interested; maybe there'll be money reasons to do that, maybe just social reasons, or just hacker spirit... But what could really ruin it? Sometimes there's things that are lacking, and maybe they slow adoption, but what could really poop in the pond, so to speak? How could this all go south, and -- is that a saying, poop in the pond, Adam?

**Adam Stacoviak:** Sure...

**Jerod Santo:** What would that look like? \[laughs\]

**Evan Prodromou:** So there's one thing that I'm worried about, and I'll put it out here. And it's not about the protocols, it's not about scalability... That stuff we can work out. We're good at that, right? The hacker community is really good at working those things out, optimizing etc. I think one thing that we talked about a little bit earlier, that kind of like BFDL model, which is so common in the open source world, right? Where it's like "I started this project, I make the decisions, I'm kind of like in charge, and it all rotates around me..." We have, unfortunately - and not because they're bad people; they're wonderful people, who are sharing, but unfortunately, we've kind of translated that into the way that instances are run on the Fediverse. So many of the big Mastodon servers on the Fediverse are run by like a single person, who is like solely responsible for moderating, doing the backend admin, and also like paying for all the server resources, right? They might get a Patreon, or they may have like one-off donations from folks, but a lot of times there's a single person who's really responsible for the whole thing. And anyone who's been in that BFDL role can tell you, burnout is real. And it really happens, and it's brutal.

So I think that what I'm concerned about is having people kind of in those core roles and not getting the support they need, and not like kind of sharing the responsibility. One of the things that I've been doing - I'm based in Canada, I work with a number of great technologists, all my technology heroes, and we're starting a cooperative Mastodon service. It's called cosocial.ca, and it's a registered cooperative, which means that everybody who's on the service has a say in how it's run. But we also pay for a membership. So it's like the two sides. It's got a steady income stream, which is the membership fees, but it also has a very democratic feel, because a lot of people are involved.

So I'm starting that with Tim Bray, Boris Man out of Vancouver, as well as a whole bunch of other Canadian technologists, and we really want to see it become a default way that Canadian users can be leaning on and working with Mastodon. I think that that's one opportunity. Commercial opportunities are out there.

Keeping things small is another one. So instead of using a 30,000-person public instance, doing stuff where you're setting up a Mastodon service for you and your co-workers, or you and your family, or a small friend group - I think that that's also good. I think my big concern is like when we have big public servers, and there's one person who's kind of on the hook for everything, that feels like that's -- the clock is ticking on that.

**Adam Stacoviak:** \[01:01:53.16\] Yeah. We covered potentially the one you maybe - or one of many that you're referencing, which was Mastodon.technology. Ash Furrow - I've put this on our news feed way back, Jerod... Sometime last year. Actually, October last year. Paraphrasing some of the things - like, they had some personal issues and some technical issues, they had family issues, things like that... Somebody came down with an illness... They were so low on their thing with this server, it required way too much... They basically said "I can't do it anymore." They threw in the towel. And for good reasons, obviously. No one's going to foul them for doing so. But I think maybe, Evan, since you're so good at like writing specs and protocols, maybe we should have a spec or a protocol for how to sustainably run a Fediverse server. And maybe it's not one way, maybe it's like several different recipes you could choose.

**Jerod Santo:** That'd be cool.

**Evan Prodromou:** That's a really good idea. \[laughs\] I'm in. Yeah, I'll do that.

**Jerod Santo:** I love this. Evan comes on the show, he walks away with multiple homework assignments. He's gonna build a bookmark, a browser extension for me, and a spec for Adam.

**Evan Prodromou:** \[laughs\] Yeah, I mean -- so I think that we're gonna see a lot more... So you mentioned changelog.social. I'm setting up a Mastodon for my work group, my colleagues at work at Open Earth Foundation... And we're seeing it all over the place where people do these smaller things, that are more focused on a small group... And that means that you're not as dependent on individual operators out there. So I think that that's a really good pattern.

**Jerod Santo:** Yeah, keep it distributed. Keep it decentralized.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I think one of the things that you mentioned is maybe like noobs have a place where they automatically go, or maybe you just sign up to Mastodon.social, which is - that's the one that Eugen runs, right? And it's like, that gives me trepidation, because it's like "Well, now we're kind of like de facto centralizing." It was similar to when Twitter early on had the "You should follow" list when you sign up. And those were just people that they knew, that were in their friend networks, and people just had -- I remember Leo Laporte was someone you should follow... And he got mad, because they eventually took him off. Because that was like his growth hack; he was like "I'm on the default follow list for Twitter." And being the default instance is a nice user experience, because you don't have to ask somebody their instance right away. But it's also now centralizing on something which - like you said, it's a ticking time bomb, for one reason or another. And we've seen that with email, right? Email really has become centralized, to the point where--

**Evan Prodromou:** Yeah, with Gmail.

**Jerod Santo:** Yeah, to Gmail, or Hotmail, or - you name it; it's either Google, Microsoft running the server, or a service... So we had the had a centralization with email - Gmail, Hotmail, whatever it is; large organizations running these services - to the point that the people that want to run an indie server, like run my own email... There's been hackers writing lately, like it's pretty much impossible now to just run your own email server, and have good deliverability because of that centralization. It just happened. And maybe that would happen again, if ActivityPub and Mastodon is all of a sudden -- we're running changelog.social; we have seven accounts, it's not going to grow any bigger... Right? \[laughter\] Maybe it will, maybe it won't. But we're just going to run our own little indie instance, and maybe over time, our instance has to be able to support this thing that has 4 million users on it, or something... I don't know how it works, but does that potentially destroy things? Pooping in the pond, right? All of a sudden, I can't run an instance anymore. I've gotta hop on Mastodon.social.

**Adam Stacoviak:** I have an idea here. And Evan, maybe you might like this. So what if Mastodon.social was the de facto. And that's fine, go there. If you're brand new, and you have nowhere else to go, go there. What if it was encouraged to sign up there, but leave? Take your profile or whatever it's called somewhere else. Like, it's encouraged, where they track not only growth, like income, but also outgoing; like, they've found a home. Like, it's the incubation place.

**Evan Prodromou:** You get 90 days, or something, and then you're out.

**Jerod Santo:** Yeah. Training wheels.

**Adam Stacoviak:** Find a home is the goal.

**Evan Prodromou:** \[01:06:00.00\] Yeah. I like that a lot. Well, so I think that that centralization is a really powerful force, right? Like, it pulls these diverse -- what Dave Weinberger called like "Small pieces, loosely joined", right? What we all like is this great, diverse set of folks. And they kind of get pulled together, and clump up, and form bigger and bigger clumps, until we've got, you know, Gmail. And I think that we have to be conscious of it. We have to be aware of it, that it is an issue. I think also, we have to work hard to make the tools that we have easier and easier for like setting up, maintaining and keeping your servers going. Mastodon's okay that way; it's not easy, but there are some pretty good tools. So there are host systems, like Mastohost, DigitalOcean has a great one-click install; that's what I use. I think we have to keep that work going, so that it is easier to be an amateur operator. Because being an amateur email operator, even in the best of times, is a hassle.

**Jerod Santo:** Yes. Way too many moving parts.

**Evan Prodromou:** Yeah, way too many moving parts.

**Jerod Santo:** Spam is really the issue, right?

**Evan Prodromou:** Spam is really the issue. But even setting up Postfix and Dovecot, and this, and that... It's the worst.

**Jerod Santo:** Yeah.

**Evan Prodromou:** So the more that we make the installation, maintenance etc. something that skilled amateurs can do, the better. And I think that's something that we'll have to keep going. Because it's not going to be my full-time job, it's not gonna be your full-time job, running OpenStack.social, so...

**Jerod Santo:** Right. So on that point, we talked about scalability a little bit, and Ruby on Rails - I love it to death. I'm not here to knock it, but it's not the most scalable in terms of consumption piece of software as a -- it just isn't. It's RAM-hungry, CPU-hungry... And not that -- I mean, not too bad to manage, but you know, could be easier... There's a lot Docker things that help and make it easy... And yeah, services like DigitalOcean, one-click installers - all cool. But that cost of running an instance - if it goes up and up and up, I wonder if there is or there needs to be some sort of a Mastodon light, or some sort of like a performance-oriented, ground-up, API-compatible piece of software that's like "Hey, written in Rust, built to scale", or whatever... You know, that's the same thing as Mastodon, or tries to stay maybe like one version behind, but costs like a 10th of what it costs to run Mastodon. Is that a thing, or should that be a thing? Is this your third homework assignment?

**Evan Prodromou:** That should be a thing. That would be really wonderful. Yeah. I think Rust is a great example, a great implementation platform that could really work there. One of the things that's the other thing that kind of like we can do, that we don't do that much in the ActivityPub world, and we're probably going to have to, is start doing some heuristics to decide when stuff should be delivered. Right now, if you have like 10,000 followers, or 100,000 followers, Mastodon just tries to do the whole thing at once. It's going to just like send it all out, right? But probably 85% of those users, maybe 95% of those users aren't online right now. So they're not going to see your update till like tomorrow morning. So why should we be like rushing to get stuff out to those people when they're not actually going to be seeing it, right? So it has a little bit of a bad reputation, but doing like some kind of quality of service, where it's like "Hey, Adam and Jerod are on right now. They follow Evan, so let's make sure they get the updates first, and then these other 9,000 people who aren't going to check till tomorrow, let's send them the update over the next few hours."

\[01:10:12.05\] And that kind of scheduling, that gives us the idea of immediate real-time delivery, without necessarily putting the resources of real-time delivery in, can be really powerful. And I think that's likely to be what we'll see in that scalability of delivery, is just understanding that there are some people that are going to need things real-time, and you want to give them that real-time experience, and some people where like sub-second delivery - it does not matter, because they're not checking their Mastodon inbox for another two months.

**Jerod Santo:** Right.

**Evan Prodromou:** So let's make sure that we do some smarts there. Did that make sense?

**Jerod Santo:** Yeah.

**Evan Prodromou:** And that's how Twitter works, by the way. That's how Twitter delivery works. Twitter does not have immediate delivery to every single inbox. It does it over hours and days, because they've got full knowledge of who's online right now, how often they come online etc. And we just need to be getting better at it.

**Adam Stacoviak:** A lot of good ideas here. I like the Mastodon Lite version, Jerod. I think that's a great idea. Like, maybe you just subscribe to a certain feature set, and like maybe it's publicized, like "Hey, this server supports a limited feature set." And that's cool.

**Jerod Santo:** Right.

**Adam Stacoviak:** That's kind of cool. And I like the idea of like being able to scale, or delay delivery. That's a good idea, too.

**Jerod Santo:** So many good ideas. Where does the roadmap live, or how does it work? Is it all in Eugen's brain, and he decides? How do people decide what gets built, when, and why?

**Evan Prodromou:** You know what's amazing, is Mastodon just published a public roadmap just for these reasons. I don't have the link on me, but if you search for Mastodon software roadmap, it's out there... And it's really great. It's the kind of transparency that we need. And some of the other projects have it, too. As far as like for ActivityPub, there's been a lot of -- obviously, a lot of interest and work in the last six months... I've been talking to people at the W3C, like "What do we need to do to kind of take this to the next level?" We're talking about doing some meetups, or meetings this year... So people who are interested in ActivityPub should definitely watch W3C -- W3C has its own ActivityPub Mastodon server, too. Make sure to follow, because there are going to be updates and events happening.

And then I think probably what's most interesting is going to be seeing these big players come on, because that's gonna affect how the protocol works, right? They're gonna have different needs than me and my family's server, or people who use Mastodon, or people who use Pleroma.

**Adam Stacoviak:** Well, speaking of big players and sort of somewhat easy buttons to get started... Cloudflare mentioned this idea of Mastodon-compatible. Wildebeest... I mean, that's a big player. When they touch things, it tends to move pretty quickly. Things they support tend to trend. Thoughts on that?

**Evan Prodromou:** Well, my first thought was - I was really excited about it, and then I spent a few hours trying to make it work, and it didn't work for me... \[laughs\] And I was like "Okay, this is what I get for trying to install the 0.1 version", right? You know, talk about your performance and deliverability, like Cloudflare is the \[unintelligible 01:13:31.22\] Plus Ultra. It's the one to be. I think Wildebeest is going to be a part of this ecosystem for quite a while, and I think that's really cool. I'm really impressed that they went out and built a product that fast. I know that they were just kind of starting.

My co-author on the Activity Streams standard, James Snell, is at Cloudflare, so I'm sure he was part of that conversation, and has been really helping in that... But yeah, Wildebeest is really, really cool. I'm a big fan, so I'm looking forward to seeing more happening.

**Adam Stacoviak:** They're playing 4D chess...

**Evan Prodromou:** Yeah. \[laughs\]

**Adam Stacoviak:** ...so their motivation for doing so could be seen only years later. But hat tip to them for doing so. But we've got one minute left, Evan, because we've got a hard stop today, unfortunately... But in this one minute, what's left unsaid. What did we not ask you that you want to mention as we close?

**Evan Prodromou:** Well, we didn't talk at all about my day job. \[laughter\]

**Adam Stacoviak:** Gosh!

**Evan Prodromou:** I might need to come back on, so...

**Adam Stacoviak:** Yeah, come back on. We have a different show for you. It's the same, but different. Come back on, tell us more.

**Evan Prodromou:** Okay, that's cool. Yeah, I work at a nonprofit that does open source software for fighting climate change, which is a very different issue than building federated social software, but it's also very rewarding.

**Adam Stacoviak:** Well, there's some conversation we're going to have Cory Doctorow soon that may touch on some of that, some of it... So that's coming up, we have that already scheduled. So let's get you on sometime next month or so.

**Evan Prodromou:** That'd be really fun. I think that would be really great. \[laughs\]

**Adam Stacoviak:** It's a lot of cool stuff happening in that space, and not a lot of innovation and talk happening there... So definitely welcome back.

**Evan Prodromou:** Well, I would love to come back. It doesn't have to be six years from now. I can come back sooner.

**Adam Stacoviak:** Gosh, no. Sadness. That's total sadness, six years. But hey, it's been fun seeing you today, and thank you so much.

**Evan Prodromou:** Hey, it's been really exciting being on. I really hope that next time we talk about the Fediverse and Mastodon, it's like even bigger, and even more exciting, and we're like "Remember back in 2023 when it was so easy?" \[laughter\] Well, great. Thank you guys so much.

**Adam Stacoviak:** Thank you, Evan.

**Jerod Santo:** Thank you.
