**Jerod Santo:** Eugene, let's start with the start of Mastodon. Where did this come from and when did it happen and what problems were you trying to solve?

**Eugen Rochko:** I started developing Mastodon when I was studying computer science at uni. It was around March 2016, and it was sort of a throw-away project for me at the start, because I was just curious to play around with the technology, and I wasn't really sure it would go anywhere.

The situation around Twitter was a little bit different at the time. It wasn't so obvious where things were gonna go, to put it that way... It was less about how bad Twitter was and more about principles and interesting technologies.

I've been aware of the existence of federated social networks for a few years. Back in 2010 I think was the first I heard of them from a friend. We used to discuss that technology and we used to even post on Identi.ca, which was the federated network at the time (that's what it was called).

Back in 2010 it was kind of a promising technology actually, because they had support from Google; Google was developing their own social network, which was the predecessor of Google+, and it was, I think, called Google Buzz. They actually had a hand in developing some of the protocols that were later used in Identi.ca, which was later renamed to StatusNet, which would later become GNU social.

\[00:04:08.07\] In March 2016 I just wanted to check, "Well, how is that GNU social thing doing right now?" I saw that it was still alive, but it obviously looked kind of awful visually... So I was like, "Yeah, I like using TweetDeck; I kind of wanna make an interface for it that works like TweetDeck, and that looks good, and maybe people will switch." But I didn't have any big ambitions about that; I just I'd make something that people who really used GNU social would just switch to. I wasn't expecting anyone from outside that circle to make a jump.

I soon found that GNU social had a rather arcane codebase, and very old-style PHP. I kind of decided to try starting from scratch... And so I started. The UI became kind of like a secondary thought; I started developing in Ruby, and I started with an API-first approach. The first few months that Mastodon existed, I was using it from the terminal, using Curl. That's quite a long story about just March, isn't it...?

When I graduated from university, I had the opportunity to just sort of have a break and do whatever I wanted for a while, before I needed to start searching for a new job... Because I actually had a freelance gig at the time. So I decided to make an interface for Mastodon and finish it and see where it goes, and start a Patreon for it.

In the first few months of that, the Patreon was really low, but it was more than I expected... It was like, I don't know, 20 bucks...

Then in November 2016 is when the interface was ready enough that I posted a link to it on Hacker News, and that was the first time Mastodon actually got users. To be fair, there were users before that, just because Mastodon was part of the OStatus network, which was also part of GNU social, Friendica etc. It's that protocol that unites all those platforms... But Mastodon itself had (I think) one or two users at the time... Probably my friend, Trev, who just made an account... He didn't think it would go anywhere; he just wanted to - what do you call it...? Just to play along with me.

**Adam Stacoviak:** Yeah.

**Eugen Rochko:** Yeah. But in November it was the first taste of the fact that there was actually a niche for this kind of thing, and that there was a zeitgeist for a Twitter alternative. The first wave of users was very technical - obviously, people from Hacker News - and that was when I got the first feedback and started developing according to feedback. And then, I don't know, the rest is history...

**Jerod Santo:** Well, it's a bit interesting to me that it started not as an answer to Twitter, but as really you, based on principles that you learned really kind of messing around with federated technologies more than anything else, because it seems very much like an answer to Twitter, and it's definitely pitched that way now... But it sounds like you kind of backed into that a little bit.

**Eugen Rochko:** Yeah. I mean, the ambitions grew with more success, I'd put it that way; when I noticed that it was actually getting popular, I wasn't satisfied with it just being a niche thing anymore. So if you have the opportunity to make a real alternative to a big platform and for it to become the future of social networking, well, you don't really wanna pass up the opportunity.

\[00:07:56.10\] So yeah, nowadays it really is a Twitter alternative, but not in the way that it's specifically made (how would I put it...?) for Twitter, like a Twitter clone... It's not that, and it's never been that. It works this way just because it's how it felt natural to me as the Twitter user. So from years of using Twitter before, this is what I would have expected from a social media platform.

**Adam Stacoviak:** Right. I think what's interesting about Twitter is it's become a utility. They originally opened up the question, which was how Twitter began similar in nature to yours, like just kind of accidental. I'm sure that they didn't think they would build the business they built today; their ambitions grew over time as success grew. It originally began because it wanted to answer the question of what's happening right now for you, like "What are you doing right now?" That was either delivering a pizza for delivery drivers or whatever, and a messaging system... But now it's become so popular that it's become a utility. And I think once you get to utility status, that's when we had to start breaking down the walls of like corporate interest in that, and I think that's where maybe your angle is with Mastodon... Is that correct, or somewhat accurate?

**Eugen Rochko:** I'm not sure - could you elaborate what you mean by corporate interests?

**Adam Stacoviak:** Well, Twitter's owned and operated by one entity, it's not federated, whereas Mastodon is a protocol, it's a framework, there's a lot of opportunity, it's open source it's free... It has freedoms that Twitter does not have, but the point I'm trying to make is it's become a utility, so it's become something that pretty much a good majority of the world relies upon to share real-time information. It's a social network, but above that, it's also just real-time communication.

**Eugen Rochko:** I don't think those things are mutually exclusive; in fact, I'd say it's exactly the same thing... I think that social networks are a utility. I mean, they're indispensable nowadays. You need them for work, you need them for friendships, and the fact that one company owns most of them...

**Adam Stacoviak:** Controls...

**Eugen Rochko:** ...controls each one of them, or in the case of Facebook, controls two of them and a chat service - it always kind of bothered me. And certainly, I had that angle from before I even started Mastodon. I think for a few years before that I was thinking "Oh, Twitter should be public utility", except obviously my idea hasn't formed back then, and I was just thinking in terms of some kind of government control, and the server becomes a public utility kind of like water pipes, you know?

Then, obviously, that idea evolved, and I no longer think that's a very good idea, because governments owning large amounts of private data about citizens isn't really a good idea anymore, certainly not after -- which year was it when we got the Snowden revelations...? In any case...

**Adam Stacoviak:** 2014 maybe.

**Eugen Rochko:** Yeah, I was thinking about that time... I think the idea of multiple organizations and individuals owning in equal parts their independent servers that intercommunicate with each other is a lot better anyway; it scales a lot better, it works a lot better for self-determination... If there are servers in Germany, there are servers in France, and they can operate according to their own customers and values and laws - I think that's just a lot better than if just Twitter was owned by the U.S. government, god forbid.

**Jerod Santo:** \[00:11:53.01\] Right. There's a lot of nuance in things at play here. You have Adam saying it is a utility - well, not in a governmental, political sense, it's not a utility. We're saying that it's very -- I think your word was "indispensible", which I think is a strong word... There are people who want it to be a utility - these things should be taken over; there's lots of ins and outs and what you about really the politics around these things, and definitely I think we can all agree - at least us three here on the call - that having a large amount of data and really broadcast ability in the hands of a few entities, whether those are public or private... Like you said, the U.S. government owning these things - maybe not any better than Twitter Inc. owning these things. Who knows...?

But this federated model that you're doing with Mastodon definitely is a response -- or not a response to that, but it answers a lot of the problems that singular control introduces. Now, it probably has its own problems, but...

Let's get back into that federation and let's talk -- well, let's talk a little bit how Mastodon works, and we'll go from there.

**Eugen Rochko:** Okay. Federation will be familiar to those who use e-mail, even though they might not know it by name. It's the principle where a server hosts users and works internally completely independently. So if you are on Gmail, you can send e-mails to other Gmail users... But it also works with other servers. So if your friend is on Hotmail, your Hotmail friend can send you e-mail and you can send them e-mail, and it just works. That's what federation is, and that's also how Mastodon operates.

Each server is in itself independent and self-contained. It could be the only server in the universe and it would work fine. Users sign up just like on any other website, and they can send each other messages, but if there's more than one message on the servers, they can address each other, follow each other and talk to each other as if they were on the same website.

**Jerod Santo:** So you're localized to a server or to a host, which could be multiple computers, but a single entity running an instance... But then you're able to cross boundaries because those instances are federated just like e-mail servers are federated, and they have their own protocols to intercommunicate.

**Eugen Rochko:** Exactly. The protocol it uses is called ActivityPub, and it's been accepted as a W3C recommended standard last year or this year, I don't remember exactly. Last year it was a draft, that I can tell you for sure, and we were the first platform to implement it. We switched from OStatus, which I've mentioned before, because it was a bit antiquated and had a lot of missing links and flaws. It was actually quite a massive undertaking, switching an entire federated platform from one protocol to another, and it certainly involved supporting the OStatus protocol as a server legacy thing, which we still do... So currently Mastodon supports two protocols.

They're not 100% compatible with each other -- well, that's a weird thing to say... I should say it like this - a message that comes from OStatus is not strictly compliant with ActivityPub, but it still works, just because we made it work... That's how I would put it. But people really shouldn't care about that anymore, I guess; it's a very niche thing to care about.

**Jerod Santo:** Well, it's somewhat interesting... About a year ago (Adam, you'll remember this) we had Evan -- and I can never remember how to say his last name... Prodromou?

**Adam Stacoviak:** Prodromou.

**Jerod Santo:** Prodromou, thank you.

**Eugen Rochko:** Yeah, I know, I know.

**Jerod Santo:** I'm sure you do, because he's one of the pioneers of a lot of these protocols (OStatus) involved in the W3C's -- what's that working group on social web, or something like this?

**Eugen Rochko:** The Social Working Group.

**Jerod Santo:** \[00:15:55.20\] Yeah, the Social Working Group. This was episode 257, for those interested. Very interesting guy, very fun conversation... And one of the things that I said back then, we were talking about -- even a part of the title of that show is "The problem with social networks", and we were talking about how a lot of alternatives to existing networks pop up, they come and they go... You mentioned Google Buzz, which I had actually forgotten existed...

**Adam Stacoviak:** I had forgotten that, too. What about Wave?

**Jerod Santo:** Wave, yeah... So Google has had a few bad cracks at it... Although Wave had tons of inertia for like three weeks, and then just never got any better.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** App.net, the Diaspora, if you recall that one... And on that show I mentioned Mastodon, and I said "Mastodon had its day in the sun" or something along those lines, and then I said "And then it kind of disappeared." And one thing that I would say about Mastodon - and this is what Adam and I were kind of talking about leading up to this show was it just keeps bubbling up again... It hasn't disappeared. It just kind of gets some press and then it goes back into doing its thing, and then it gets some more press... It seems like the more belligerent Twitter management is with their network or their product, Mastodon gets more and more traction.

So maybe tell us about the adoption... You've mentioned the Hacker News post, and that was your first users, but have you sensed waves of interest, and then it kind of waxes and wanes?

**Eugen Rochko:** Yes. It's actually interesting to hear about the impression that it leaves on people outside Mastodon's circle, because obviously, from our perspective, we're not really going anywhere; we keep existing, and then people are like "Oh, Mastodon is bubbling up again." I think it's more to do with how the press works and how attention on the internet works in general, because something is only in the public view as long as it's new; so a new release of a podcast episode would maybe top Reddit on some day, but once it's a few weeks old, it's not gonna appear again.

People always want something new, and the same thing is for news. They only public an article if it's something newsworthy to talk about, like a new version of Mastodon is released, or it's launched, or stuff like that. But it really doesn't go anywhere. The attention goes, but it stays there. Mastodon has currently 1,500,000 registered users, and it's had over a million for a while. Within our network, we're quite happy with that, we're quite satisfied. It's not like we have a driving force behind this to force this to bigger and bigger numbers; it's not like we have any investors to impress, so we're just happy when we have a network where we have friends, and we can talk about things with each other and find interesting content. And that already happens, and you don't really need a lot of people for that; you just need, at best, some way to find the good people.

**Adam Stacoviak:** So it's really not about winning.

**Eugen Rochko:** Yeah, it's really not about winning; I mean, we've already won just by being here. That's sort of the attitude that a lot of people on Mastodon have.

**Adam Stacoviak:** Well, I think you inherit some expectations or anticipations because you will sit in the shadow of Twitter to most people's eyes, and they will naturally compare you, so by nature, they will assume you're trying to win.

**Eugen Rochko:** Exactly.

**Adam Stacoviak:** But you coming on a show like this and saying "Hey, we're not trying to win, we're just trying to achieve success, which is--"

**Eugen Rochko:** It's not even just that; it's not even just that. It's people's criteria for winning is not adjusted for what Mastodon is. It's a new concept. E-mail is old, but nobody thinks of it as a social network, and nobody really talks about the success of e-mail. I mean, it's pretty clear it is used by everyone, so I guess it's already successful but nobody really talks about it.

**Jerod Santo:** \[00:19:51.11\] That's because there's no press releases for e-mail, right? \[laughter\] There's no certain entity saying "Look how successful we are", because it's like a public good, or it's a concept...

**Eugen Rochko:** Right. People judge a new social network using the criteria they have from other social networks like Twitter or Facebook that report on active user numbers, they report on quarterly revenue, they talk about monetization, how you put ads into it... And all that stuff is kind of irrelevant to Mastodon. Even the question of celebrities, like people say "Oh, there's not enough celebrities on Mastodon." Like, do we really care about that? I mean, we kind of have local celebrities, just people who are talented, who collect following... But do we really need a random person who was in a Hollywood movie on Mastodon? What would they really give us?

There's certainly a demographic that cares about that sort of thing, that follows celebrities on Twitter, but... I don't know. It's just never appealed to me. So yeah, I'd say the expectations that people have for Mastodon's success are just not adjusted, and in its own way, Mastodon is already massively successful.

**Jerod Santo:** That reminds me of a quote that I saw, and I think I saw it, ironically, on Twitter... It was about humility, and it was saying something along the lines of "You can't beat me if I'm not competing with you." So these comparisons -- because as outsiders, we're trying to get a gauge on something, and of course, in the tech industry, even in open source, there's vanity metrics and there's things that we think growth is like a common thing that everybody just thinks about; it's like "What's your numbers like? Where's your growth? Where is it coming from? What are you trying to do?", and it's like, one way to compare it is like "Well, how many people are using Mastodon?" and it's like, maybe that's not even -- maybe the people that are using it, that's not even like a thing that they care about necessarily... As long as it doesn't feel like a -- what do you call it, when there's nobody in town?

**Adam Stacoviak:** A ghost town.

**Eugen Rochko:** A ghost town.

**Jerod Santo:** A ghost town, thank you; I thought I was close to that. As long as you're there and your friends are there, and you're doing your social networking, that's kind of success, if you're not trying to build a big business, right?

**Eugen Rochko:** Yeah.

**Adam Stacoviak:** That's the point. That's what Slacks are basically, too. I mean, Slack communities are not extremely different, really... They're kind of like instances, right?

**Eugen Rochko:** Yeah. There's a lot of overlap in concept with Slack groups, Discord servers, or even Subreddits. It's not exactly one-to-one conceptually, because they don't really think about "Oh, can I follow a user from a different Subreddit?", but thematically, the way that communities tend to form around a single server, so we have a server dedicated to technology, or a server dedicated to CyberPunk, it sort of tends to veer towards being like a Subreddit, thematically.

That's not to say that user growth is not important at all. I think there is that old proverb, that a social network is only as useful as the amount of people you can reach through it... And then there's that formula where its usefulness is like the square of the number of users, or something like that... I have a vague memory of it.

**Jerod Santo:** Yeah, the value of a network, and there's a statistician who put his name on that... Metcalfe's law.

**Eugen Rochko:** Obviously, I am interested in appealing to new users, in appealing to the mainstream, in growing the platform, because with every new user it becomes more useful to everyone else. And certainly, as it's becoming more active, it's becoming more interesting and you find more cool cat pictures... But yeah, I guess it's just an existential thing... Like, there is no time pressure on that sort of thing.

**Break:** \[00:23:48.08\]

**Jerod Santo:** So let's talk about that new user experience. One of the things that definitely differentiates it from a centralized platform is the first thing you have to do is pick an instance, which seems like a bit of a barrier, because "Where do I belong?" Tell us about instances, how you join, and kind of how a regular person interfaces with Mastodon, both in a local instance, and then kind of the federated network.

**Eugen Rochko:** It's true, it's a little bit of a barrier, because obviously, centralized social networks that people are used to don't even put that kind of question in front of people. You know, you don't need to think about "Where do I sign up on Twitter?" because it's right there, there's the Sign Up button.

**Jerod Santo:** Right.

**Eugen Rochko:** On Mastodon it's just a little extra step. I mean, it's a big step, but it's just one step, and you have to pick a server... But it's not so new to people. I mean, coming back to e-mail, you had to pick an e-mail server at some point. Most people join Gmail nowadays (I personally use FastMail), and some choose Live, or Yahoo! or something.

Picking a server - a server is operated independently by either an individual or organization. It has its own rules, kind of like an old style forum, or in fact a Discord community, or a Slack chat, whatever. It has its own terms of service... So when you're picking one, you kind of need to pick something that you'll be happy with.

If you want to be in kind of a safe space environment, you're gonna go and get one with a strict code of conduct, that forbids certain behaviors. And if you just want something different, you go and you check the code of conduct and you see "Oh, this and this is allowed; this and this is forbidden" etc. This is a bit of a tall order, so I understand that not a lot of people go through that sort of thing; most of them just end up on Mastodon.social, which I run. I'm okay with that, because I believe that as long as they do sign up on Mastodon, they always have the opportunity to learn about how it works more, and to move to a different server later... But obviously, if we lose them before sign-up, they'll probably never check it out. That's my view on that.

**Jerod Santo:** Just like lots of people sign up for Gmail is not a big deal; lots of people sign up for Mastodon.social, which is the instance that you run. There's a slight disconnect there though, because when I'm picking my e-mail provider I'm not thinking of it as like a community, or as -- there's no locality to it. It doesn't mean I can mostly speak with Gmail people, or... There's a little bit of a social -- like, you know, if you're on AOL.com, you're an old schooler; I don't know what the exact connotation there is, Adam...

**Adam Stacoviak:** Not cool.

**Jerod Santo:** You're not cool, okay. \[laughter\] So there's some of that with like what is your e-mail address; it kind of signals to people what kind of person you are.

**Adam Stacoviak:** It's \[unintelligible 00:27:54.15\] of sorts

**Jerod Santo:** But not so much as like "I hang out on this forum, or this BBS." That's a stronger association, so probably a bigger decision.

**Eugen Rochko:** Definitely, definitely.

**Jerod Santo:** \[00:28:08.06\] In fact, I have some friends who have joined Mastodon, and I'm a very technical person and I've definitely stopped and looked at it and thought "Yeah, I'm just not sure which instance I would pick", so I just go back to e-mail and Twitter... But you're saying "If you don't know, pick Mastodon.social." Can you migrate later on? Can I switch instances?

**Eugen Rochko:** Kind of. Currently, it's a bit of a manual process; you do have to tell your followers to follow the new account, and the content doesn't move, but there is at least a helper in terms of displaying on your profile that you have, in fact, moved... So it's halfway there. We're working on something better, but it's a tall order. I mean, not a lot of federated networks have solved this kind of problem. You can't really migrate an e-mail address either; you have to tell all of your contacts to update their address books. XMPP had a similar problem as well, which was the federated chat service that Gtalk used to use and WhatsApp used to use, and they removed federation from those... But yeah, it had the same problem, that it was based on contacts, and you had to kind of let people know to friend you on a new account if you wanted to move.

So definitely not a new problem, and definitely not a solved problem anywhere, so it's taking a while...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Is there a resistance to sort of a -- maybe this goes against the entire idea of like a central directory, and then the cost of planting your roots somewhere... So that I can easily pick up my roots and replant myself somewhere else should I choose to, that kind of concept. It seems like it would make sense.

**Eugen Rochko:** There is definitely resistance in the community towards any kind of centralization. I mean, people critique Mastodon.social for being so big and accepting new users...

**Jerod Santo:** Right.

**Eugen Rochko:** And I think people are right to worry a little bit. I mean, I know that I won't do anything nasty with that sort of power, and I don't even consider that that much power; it's more like a huge burden and responsibility to host that many people, but...

**Adam Stacoviak:** I guess the question is how often would somebody need to jump ship to a new instance? Does it happen often? I'm sure it's a needed feature, for example, how you've outlined it for getting started; it's an easy first step, move wherever you want later, but aside from that, is it truly useful? Is there really a need to be able to go someplace and then leave an instance and go somewhere else? ...especially if it's federated and you can message across places... Do you have to belong somewhere?

**Eugen Rochko:** People do move their accounts all the time. I often see on my own timeline, "Hey, I've got a new account. Please follow me there." It can get even a little bit annoying.

**Adam Stacoviak:** Yeah...

**Jerod Santo:** \[laughs\]

**Eugen Rochko:** Now, the annoying thing about it not being automatic is obviously that once you move, you rely on people having seen your messages that you've moved, to refollow you... And if somebody's inactive, they are not gonna do that. So you kind of lose inactive followers as you're moving, but I think that's not a big loss, except in terms of just having big numbers that you like, you know?

**Jerod Santo:** Yeah. It seems like this is a technical problem that can be solved in time, and not necessarily a fundamental flaw, or anything like that, right?

**Eugen Rochko:** It can be solved, yeah. It's not really -- I mean, the thing is you could really solve everything if you just use brute force... Like, "Okay, so I've got 40,000 posts on my account, and I've got 139,000 followers. Let me move to a different server!" If I wanted to, okay, go through every one of those 40,000 posts, re-download them on the new server, and go through 140,000 people and resubscribe them to the new account. I mean, it's possible; the only problem is that's a bit of a computationally-expensive operation, isn't it? That's the only real obstacle on the path there.

**Jerod Santo:** \[00:32:11.06\] Yeah. Where it gets a little bit confusing for me - it makes sense as a new user, just sign up for Mastodon.social. I definitely understand where there would be people saying "Okay, now we're basically centralizing on this single instance. Potentially bad, especially if Eugene goes power-hungry and changes everything, or something." But then it's like "Okay, maybe I don't wanna do that. Maybe I wanna pick one", so here's another one, Mastodon.technology. This is just one that I've found; there's a little picker where you can through some of the instances... This Mastodon instance is for people interested in technology. Discussions aren't limited to technology, because tech folks shouldn't be limited to technology either... So it's not like I have to talk about technology if I join that instance, but it's for people who associate with technology - it seems like a pretty broad brush.

It just feels like such a big decision, like "Am I a tech folk?" \[laughs\]

**Eugen Rochko:** There's an absolute freedom in how people can run their servers, so there's different types of ways that people define what their server is for. There's general purpose, like Mastodon.social or Octodon.social, where it's like -- there's no theme, there's no topic. You just sign up, you have an account, you talk to your friends.

But then there are ones that are like oh, this is for LGBT people, or this is for CyberPunk enthusiasts, or this is for Star Trek fans... But most of them actually don't say "Oh, you can only talk about Star Trek here." It's more like, "Oh, you just wanna hang out with Star Trek fans, but talk about your life." You're fine to do that.

**Jerod Santo:** Right.

**Eugen Rochko:** In your specific case, with Mastodon.technology, I'm pretty sure that's the case.

**Jerod Santo:** Right. But that being said, let's take the analogy back to our Slack team, which you haven't seen, but all Slacks are like this, right? We have different channels for people who like JS Party, which is another show that we have. Or there's one for Elixir, for people who like Elixir. And then there's one for general conversation. But you can just join all these different channels, because I happen to like technology AND I like Star Trek... So is there a cross -- can you join multiple instances? Maybe you just have a separate profile...

**Eugen Rochko:** I get this question a lot, and I find that it's a bit of a conceptual misunderstanding... It's because these servers are created with topics in mind that people start asking "Well, can I join multiple topics?", but that's not really how it works. I mean, you have an account and you follow anyone, anywhere. If you just wanna follow everyone who's a Star Trek fan, you can sign up on Mastodon.social and follow everyone who's a Star Trek fan. You're not limited to that sort of thing.

**Jerod Santo:** Right. Just like -- going back to e-mail, if I'm on Hotmail, I can talk to anybody on Gmail; there's no topic-specific e-mail server, so I guess the question becomes why do these instances associate themselves with topics? Why aren't they just like "Jerod's instance, Eugene's instance", for example?

**Eugen Rochko:** It's an interesting phenomenon that comes from one particular feature... Mastodon still has a firehose. I don't know if people would be familiar with the term, but Twitter used to have a public timeline, where every public post would appear, and they called it the firehose. They still call it the firehose, but it's a closed API nowadays.

Mastodon does have that. There is a timeline of every public post, and you can filter that by "Posts from everyone" or "Posts by people on your server." That's where the whole topic thing comes into it, because you can look at posts just from your server, and so you get this kind of feeling of community, with your neighbors, and that's where the potential for hanging out with people with the same interests comes into it... Because you can see posts from people you're not following yet.

**Jerod Santo:** \[00:36:05.26\] Gotcha.

**Eugen Rochko:** It's kind of like a big chat room. But it's funny, because it's kind of an incidental feature; it wasn't really made for this, it was more like "Here's a timeline of everyone, just so you can find somebody to follow. Here's a way to filter it", and suddenly here's this whole thing where instances are created around specific topics.

**Adam Stacoviak:** It kind of reminds me, Jerod, like, if we did one -- because I saw that there's a feature for organizations, which I'm sure we can go into a little deeper... But just thinking, so typically you may be a community, but then you might be an organization, and if we had a Mastodon instance, we would essentially be topical too, just by nature, right? We would be laser-focused on, say, a software developer's life, for example.

Essentially, what our Slack community represents - if that became a Mastodon, we're essentially putting up a flag saying, "Hey, if this type of topic or community is of interest to you, here's your invitation. This is the kind of people you can expect to see here", not "You can only talk about this."

**Jerod Santo:** And you could follow anybody on that instance without having to be on the instance. That's why it feels like there's barriers between these instances, which aren't actually there.

**Adam Stacoviak:** Right. Un-needed, really. And then the instances is mainly just to probably give the federated part of it - which seems to be leading into potentially security and safety, which is like "Hey, you can go somewhere and be just there, and not feel like somebody else can cut your social off because they've changed the rules on you", and that seems to be what it's driving towards, but in effect it's also caused some sort of un-needed hurdle and some confusion points.

**Eugen Rochko:** Yeah, exactly. That's kind of the selling point for organizations, in my opinion, because there were those stories from Facebook changing their algorithms around fan pages, and essentially killing people's businesses... Because suddenly, the people who marked themselves as your fan don't actually see most of your posts unless you pay up. The rules of the game are being changed without anyone's real input, you know?

**Adam Stacoviak:** And on the developers' side too you've got API changes. Think about the recent Twitter API changes that basically fractured the user experience.

**Eugen Rochko:** I feel like that's a whole separate topic that we can talk about.

**Jerod Santo:** \[laughs\]

**Eugen Rochko:** But as I was saying, for organizations it's a big plus to run their own Mastodon, and this is because nobody except them can actually shut them out. They own their space, they own their social media megaphone. It's kind of an opportunity for a bit of branding as well, because if you host other people, they have your brand in their username, which can be an advantage...

**Adam Stacoviak:** Yeah, that's true.

**Eugen Rochko:** And obviously, it's the ultimate verification, as well. On Twitter, you're relying on Twitter giving you the checkmark. On Mastodon there are no checkmarks, and how would there be if there's like 4,000 different admins and somebody could fake one... But if you run your own server on your own domain name, then everyone knows that you're the real Jerod from the Changelog, and not just any Jerod.

**Jerod Santo:** Like that other Jared from the Subway commercials - not that guy...! \[laughter\] So can the federation then ban an instance? Let's say the Ku Klux Klan gets their own Mastodon instance, and they can do whatever they want on their little island, because it's a free world and all that... But can the federation then ban them from --

**Eugen Rochko:** You can't sink the island, unless you go to their domain name registrar and request them to be taken down. That route works, like with any other website. However, I as a developer do not have power over other servers, just to be clear. I developed the software, it's open source...

**Adam Stacoviak:** I thought you did, this whole time...

**Eugen Rochko:** ...somebody installs the software on their server - it's theirs and I have no control over that. But because it's a very practical case that does occur, there are ways in Mastodon to shut out servers that you don't like.

**Adam Stacoviak:** Like a firewall, essentially.

**Eugen Rochko:** \[00:40:13.15\] Yeah, essentially like a firewall...

**Adam Stacoviak:** In concept.

**Jerod Santo:** Conceptually.

**Eugen Rochko:** Yeah, pretty much. From the user's side you can decide "Oh, I don't wanna see anything from this domain", as a personal decision; that's step one. And on the administrational level, you have the ability to shut out posts from a specific server, or completely remove it from your database, so that there is zero interaction between them. That's what you would do if such a Ku Klux Klan would spring up.

**Jerod Santo:** That's pretty cool, and that all makes sense. How about the moderation? You said each instance is individually owned and operated, so they have their own codes of conduct, their own moderators, their own rules of the game with regard to what kind of content you can be posting on that instance... But what about subscriptions? If I'm on Adam's Changelog instance as a user, and I subscribe to the Ku Klux Klan member - does Adam need to moderate that because it's on his instance, or is it only me that sees it anyways, and so it's kind of a mute point? How does that work?

**Eugen Rochko:** There's different levels of moderation that are available here. On one hand, you could completely shut down, as I said, the Ku Klux Klan server from your side, so that you wouldn't be able to follow them. On the other hand, there is the other level - for something perhaps a bit less extreme, you could sandbox it, so people can still follow users from that server, but they just don't appear in the firehose view, and they cannot appear in notifications of people who don't follow them.

For example, if they tend to send harassing messages to strangers, you sandbox them, and voila, they no longer appear in those strangers' mentions and cannot harass them. So that's that.

Now, the leading question into this was "How does moderation work when the servers have different rules?" and the point is that each server enforces their rules locally. So you have your moderators, you have your own rules, and we have the ability to essentially modify the user records of people from other servers, as they are seen from your server... Because they're essentially a local copy. So you receive messages from the other server, they're saved in your database, so you can work with them and moderate them. You have the ability to suspend, to sandbox people, just like you can suspend and sandbox your local users. That's what we usually do if there's a problematic user in another instance.

There are also ways to forward reports from people, from one server to another. For example, if I see some kind of mean message from a different server, I report it to my admins and I have the option to forward that report to the admins of the other server if I think that they might also not be okay with that being on their server. So that's more or less how it works.

**Adam Stacoviak:** That makes sense, because you essentially have some hierarchy, and you've got your local copies, you've got the leaders of that local copy, and you've got rules you all decide upon, and I'm sure that's ran however those individuals feel, like forums were... But then you can also cross have concerns, and like-minded instances come to some sort of an agreement saying "Hey, you reported this person on my instance doing behavior that wasn't right. Thank you. I'll act accordingly (or not)" and that's a good community.

**Eugen Rochko:** Exactly.

**Adam Stacoviak:** \[00:43:59.11\] Those are good community effects. People aren't forced to agree with you or do what you say; they have the option to hear you, receive that, and then do what they feel. But at your local level you can still make your choices for them.

**Eugen Rochko:** Exactly.

**Jerod Santo:** It sounds pretty cool. So you get past that initial road bump of which instance to pick - let's just say I pick Mastodon.technology, because I'm a tech folk...

**Adam Stacoviak:** That's right.

**Jerod Santo:** And I get going. It probably feels a lot like any other social network. There's some differences, of course, in the content you can post... Give us the rundown. 500 characters, you can do video... What are some of the features that makes us a really valuable and useful social network?

**Eugen Rochko:** You can have animated avatars... \[laughs\]

**Adam Stacoviak:** Nice!

**Jerod Santo:** Uuuh, shiny!

**Eugen Rochko:** You can put spoiler warnings on text...

**Jerod Santo:** That's cool.

**Eugen Rochko:** ...in case you're talking about the latest show and don't wanna annoy your followers. You can mark individual pictures -- or rather you can mark individual posts with pictures as "Not safe for work", rather than marking your entire account as not safe for work as it is on Twitter. Let me think... I haven't compiled such a list in my head for quite a while.

**Jerod Santo:** One thing that always comes up in my mind is how do I use this from my phone? Because that's usually where I'm socializing.

**Eugen Rochko:** Oh, yeah, for some reason I get a lot of questions like "Why isn't Mastodon on the app store?" and it's really weird, because there are like a million apps for Mastodon on every app store... They're just not called Mastodon, because they are developed by third-party developers.

Mastodon has a principle - API first, and... Yeah, that's essentially it - API first. \[laughter\]

**Adam Stacoviak:** I like that. Very simple.

**Jerod Santo:** I do, too.

**Eugen Rochko:** The web interface uses the same API as any other app can use, so it's completely replaceable by the user. If you want a different look, you go and you can have a web client, or you can have a mobile app, and it can do all the same things that a web interface can do.

We don't even try to do an official mobile app, because that sort of tends to allow you to create some kind of proprietary behavior that's only available in one app... So by always having third-party apps, we're like -- you know, we're working together with independent developers. A thing that's available to one is available to all others, so competition is possible.

So yeah, there's Tusky for Android, there's Amaroq for iOS... There's apps in development for iOS; one is called Toot!.app, by Dag Ågren and I think the guy who developed Twitterrific is developing an app for Mastodon, but I don't know what the name of that is yet... So that's in the works.

There's more. There's Subway Tooter, there is Tootdon, and probably more.

**Adam Stacoviak:** Why do you think that the apps available to access - maybe I haven't investigated far enough - are so many? Why isn't there a more collected effort? Is it by design? Obviously you're not doing it because maybe it's easier to spread the developer load across a similar model, a federated model, with many of the people doing and uniting, and that kind of thing... Why do you feel like there's so many? Do you feel like eventually there'll be one or two and there's be a winner, as tech likes to always make a winner?

**Eugen Rochko:** I think that would be a loss if there was only one. Having choice is good. It means that there is room for innovation, for trying to get an edge on your competitors... It's better for the users. Why there are so many right now? I don't know, because Mastodon is young, and there isn't a status quo yet. I mean, most of these apps are...

**Adam Stacoviak:** Fairly new?

**Eugen Rochko:** \[00:47:55.20\] Yeah, they're really new, and many of them have been started at the same time, or close to the same time, so it's kind of natural for them to be multiple, rather than one app.

**Adam Stacoviak:** Aside from platform, like Android, iOS, I can see having the need for many, and I'm not saying only one is needed, but I wonder what the differentiators are? What are they adding to? Sure, innovation, opportunities for innovation - that makes sense; free will, free market...

**Eugen Rochko:** Mostly I think it's visuals.

**Adam Stacoviak:** Okay.

**Eugen Rochko:** The things that I've seen is just the way that the user interface is designed. They mostly implement the same features, just because those features are available through the API. There's not a lot of room for just doing weird stuff. But I don't know, some innovations that -- I'm not sure if they're implementing them yet, but that are possible, is like how does the phone's camera interact with Mastodon? Maybe you could build a way to record video into the app.

I've always wished that there would be some app that just took the video recorder from Vine and just -- you know, because Mastodon supports video uploads, so it could just work as Vine, with a different interface... But obviously, that only depends on the app supporting video recording. That's all that's needed.

**Adam Stacoviak:** Well, that makes more sense, where this application that gives you access to Mastodon instances is more favorited on the general user experience, and maybe this one is focused on like a Vine-like user experience; that to me makes far more sense, and it makes more sense why there's different instances.

**Jerod Santo:** That's super cool. It makes me think now as I'm -- not a moderator, but as an instance host, can I set up limits on how much bandwidth my instance is hosting and serving? Because if all of a sudden everybody starts doing videos on my instance, maybe it gets expensive for me.

**Eugen Rochko:** Right. Currently, all limits are the same for everyone, because we wanted to have sort of a standard user experience. Picking an instance is hard enough just from rules and the topic. You don't wanna have people thinking "Oh, does this server support 10 MB images or 2 MB images?", that sort of thing. We don't want people to have to think about that, so it's the same for everyone. It's 8 MB for image uploads and 40 MB for video uploads at this time.

It downsizes the images, if possible, if they're too big for the web. We're trying to use the storage as efficiently as possible.

**Break:** \[00:50:55.19\]

**Adam Stacoviak:** Continuing the conversation on just differentiation - obviously, you've got one API, one way things work, you've got standards in which bandwidth can be used, all that good stuff... So everyone's playing by the same rules, theoretically, but yet you have many different types of applications that could be done for different experiences. What else differentiates Mastodon?

**Eugen Rochko:** One thing about Mastodon is what I have mentioned before - the way the federation works is based on a protocol that is recommended by the W3C. Now, what that really means is that when you're using Mastodon, you're not using just Mastodon... Or rather Mastodon isn't the whole thing. Mastodon implements ActivityPub, but literally any other software could also implement the same protocol, and be immediately compatible with Mastodon. As long as you have the concept of users and the concept of subscriptions between users, there's essentially no limits to how these platforms can interact. What this means in practice - there's at least five (maybe more) different software projects that implement ActivityPub that provide a completely different experience.

For example, for people who want something like YouTube, where you upload videos and you subscribe to channels, there's a project called PeerTube, and what really blows the minds of some people who learn about this is that you can follow a PeerTube account from your Mastodon account, and new videos just appear in your home feed, as if they were on the same platform.

There is a project that focuses on image sharing, kind of like Instagram. It's called PixelFed and it's gonna work the same way - you follow a PixelFed user from your Mastodon account and the photos just appear in your feed. And if you reply to them, your reply appears as a comment on that photo. Again, with the videos - you comment on the video and the comment appears under the video on PeerTube.

So when you decide to use Mastodon, you're not really just gambling on the success of Mastodon by itself, you're gambling on this interoperable network that implements this protocol. We actually call it the FedeVerse, like Federated Universe... So you would likely hear that term used commonly.

Essentially, it's part of the design that eventually, years later maybe, some developer comes along and develops something that is 1,000 times better than Mastodon, but as long as it uses the same protocol, people can just switch smoothly, and rather than losing all of their social graph, their connections, their friends, they're still in the same network, and it's just like switching to a different account... And I think that's the strength of Mastodon, and its main ideological differentiator.

**Adam Stacoviak:** Well, that's pretty important too, because if you take what Mastodon is and you wanna create your -- the question rather is like why fracture and have so many apps, and it sounds like that's an advantage, because I can make a Mastodon instance and I can create an application that gives my users or whatever Mastodon at large access to it, but I can also say "Hey, I intend to have a Vine-like experience, for those Vine lovers out there. We want it back, we need it, we want it." It gives you a chance to make your own, essentially, aside from maybe several technical hurdles, I'm sure, for bandwidth reasons and whatnot around video and that kind of stuff...

Essentially, you give them the ability to do that and they can have their own instance, it's federated, all that good stuff, they have their own application, but somebody else could use the same application and connect their own Vine-like Mastodon instance.

**Jerod Santo:** \[00:55:58.23\] Lots of opportunities... Maybe I've hosted too many servers in my day, but I just go back to the instances and the providers of the instances, and that's why, Eugene, I was asking about bandwidth costs and the settings... Because I started thinking like -- I see the incentive, and it sounds like a really great network for users, and I wonder what the incentives are for hosting, the costs of hosting, like what it takes to set up an instance, because ultimately, for a federation to work, you need to have enough instances. You can't have three or four; you're gonna end up with a similar situation.

So you need those options, but over time and the success of the network is gonna cause the hosting costs to go up. I'm just thinking of hosting the Vine instance, and maybe I have that limit of 40 MB per upload, but people are doing thousands of vines a day all of a sudden and I'm just running this as my little side-hobby... So what are some of the incentives for people to host instances, and what are costs, and what does that look like?

**Eugen Rochko:** The incentives are usually ideological... Like, owning your own space, owning your own data, not being dependent on anyone is a pretty good motivator, certainly for communities and families maybe. For organizations it's, again, as I mentioned before, verification; the fact that if it's on your own domain, it pretty much proves that you're who you say you are.

There are no financial motivators for hosting an instance really. We're really more about crowdfunding for sustainability. Most servers would have like a Patreon or some other form of accepting donations, and most people donate if they are happy with the service.

**Adam Stacoviak:** I think of it like dues almost; like there's a base cost to run things, and the concept of dues versus donations might be an application there... Because if I'm part of the community and it costs $300 to run the server, and there's 300 users, well, everybody pays a buck, and that's cool. I don't mind paying the due.

**Eugen Rochko:** And you could actually do that. I know at least one server that implements a paywall for signing up, and it's fair enough; you're allowed to do that.

**Jerod Santo:** I was just gonna ask why that's not a motivator. For instance, going back to the e-mail scenario - a lot of people use Gmail and Yahoo! and stuff because they're free, and of course, Google and Yahoo! and Microsoft have their reasons why they want people using their e-mail, but then also you said yourself, you use FastMail. That's a service that you pay for, right?

**Eugen Rochko:** Yeah, I pay for it.

**Jerod Santo:** Yeah, because they provide you a solid hosting scenario and features that you like, and then give you access to e-mail.

**Eugen Rochko:** Yeah, now that I'm thinking about it, I'm pretty sure I've seen some servers that have closed registrations, but they have a message that says "If you donate to our Patreon, you can get a sign-up straight away."

**Jerod Santo:** Gotcha.

**Eugen Rochko:** So that sort of thing already exists. Maybe it's not quite implemented as cleanly as just having a button or something yet, because it's not part of the software that is delivered, but... It's certainly possible, and it's certainly a valid tactic. You can't argue that's not sustainable.

**Jerod Santo:** Yeah, there's no rules against it. It's not like "Nope, you can't take payment to host an instance." There's no greater Mastodon board of directors that's gonna stop you.

**Eugen Rochko:** Hosting Mastodon isn't as expensive as you would think. It's somewhere in between, and it depends a lot on how smart you wanna be about how you host it... Because if you just use Heroku, well, you're gonna be buried under a mountain of bills. And if you use Amazon Web Services, it's certainly not gonna end well either.

**Adam Stacoviak:** Yeah.

**Eugen Rochko:** \[00:59:48.18\] However, if you use a dedicated box to put it on, it can be quite cheap... And if you're smart about where to store the user uploaded files, it can be cheaper, too. Amazon S3 is the most popular choice, but the problem is it's quite expensive to store data, and it's very expensive to get the data out through bandwidth, as you said. But there is a trick you can do to reduce the storage.

First of all, why would you even use S3 in the first place? Well, if you have more than one machine serving Mastodon, as you would if you're scaling up, or if you just have limited disk-based storage on your box, then you would need something like object storage. But at the same time there's no reason why your load balancer or your NGINX couldn't just serve those files or store a copy of them.

The way I do it, and the way a few people who also use object storage do it to reduce the costs between S3 and the end user is by having an NGINX proxy between them, with proxy caching. Your load balancer fetches the data from S3, and then saves it for a while. And maybe it's 50 gigabytes of cache on the load balancer, but that's okay because those are the only ones that are being accessed through the interface. Every server that runs your Mastodon code can upload to the S3, so it's the perfect way to manage it.

Then if you put Cloudflare on top of that, which provides free bandwidth, then you're bandwidth costs for S3 are almost close to zero.

**Adam Stacoviak:** Is there a best practices out there that breaks this down anywhere, or is this just said here for the first time?

**Eugen Rochko:** No, it's certainly not said for the first time, but I'm actually not sure if that's written down in the documentation.

**Adam Stacoviak:** It'd be interesting to point to that doc for the listeners.

**Eugen Rochko:** Yeah, that's be great.

**Jerod Santo:** It'd also be a good way to get involved as a contributor - Mastodon open source, a lot of people running the instances... I don't think there's low-hanging fruit, but there's at least fruit hanging out there, wherein optimizations could yield huge gains for all these people who are hosting and who are bearing real costs month by month, in reducing those fees, and you basically make the network a lot better. It'd be a good way to get involved.

**Eugen Rochko:** If you wanna know, Mastodon.social has - let me check, just to be sure... It currently has 232,000 users, of which 30,000 were active last week. The total number of registrations doesn't really matter as much in terms of hosting costs, because it's just a little bit of database space, but if they're not active, they don't affect your server.

**Jerod Santo:** Right. Peak activity is what really matters.

**Eugen Rochko:** Yeah. So 30,000 users - that costs me $470 on Hetzner; Hetzner is a German hosting provider. That is, I think, six or seven dedicated servers - not virtual servers, but actual boxes. They're really beefy, and most of the RAM is not used. Mastodon is really more CPU bound than RAM bound, except for like a baseline of RAM requirements, just because it's using Ruby... But it's not as bad as people always talk about Ruby.

**Adam Stacoviak:** What's a good CPU count for it?

**Eugen Rochko:** \[01:03:48.27\] The servers I'm using each have eight cores. It's an i7 something-something, with hyper-threading. That's pretty good. Currently I'm under-capacity (I think that's the right word). There was a wave of new users a few weeks ago. If I look at that, that was 43,000 users, so that's when I acquired the last three new machines to handle the load. But right now I'm over-paying maybe... So in reality you would pay less, perhaps.

**Jerod Santo:** You also are hosting one of the larger instances out there, right?

**Eugen Rochko:** Yeah, it's one of the biggest ones out there.

**Jerod Santo:** So while we're talking about money, let's mention the fact that often times on the Changelog we talk about sustainability and how this is gonna work and all that, but it seems like you have a pretty good hold on it at this point; you accept sponsorships via Patreon, and you're bringing in what your goal is, $5,000/month, so you're now working full-time on Mastodon. Tell us about that success and how that's given you the freedom you have to build this thing.

**Eugen Rochko:** I wasn't expecting to reach that goal.

**Jerod Santo:** A lot of people don't reach that goal, so...

**Eugen Rochko:** Yeah. I've said it, and I thought "Okay, that will just be something that people see that it's there", but I was fine with less money. I've lived on less, let's put it that way.

One point about the last question that I feel was maybe left out is what I was talking about is the raw cost of hosting a server, so the technology, the hardware... But there is obviously a cost to moderating it; your own time obviously is a cost, and if it's a big server, you'll need more readers.

Some people are okay with having volunteer moderators, and people are maybe willing to work for free, but if you wanna be fair - and I wanna be fair - you wanna pay your moderators... So that's a bit of extra costs on top of that.

**Adam Stacoviak:** Interesting.

**Eugen Rochko:** I think I have five... Yeah, I have five moderators on payroll.

**Adam Stacoviak:** Is that part of like -- would you consider it the gig economy, or...? It's not full-time jobs for these people, is it?

**Eugen Rochko:** It's not really a full-time job. It's more like a small contract.

**Adam Stacoviak:** Gotcha.

**Eugen Rochko:** I mean, I don't really require them to have set hours or an hourly requirement... I'm just like, "Well, here's privileges to access the moderation UI, and you're gonna get e-mails about new reports, and when you have time to deal with this, please do... But otherwise just be on standby... Just whenever you're available."

**Adam Stacoviak:** So back to Patreon... Is this unintended goal - like, you put the goal out there, you didn't expect to hit it, obviously you have... Is building and maintaining and all this good stuff around Mastodon your full-time thing?

**Eugen Rochko:** It is. It's been my full-time thing for two years.

**Adam Stacoviak:** Is that because of Patreon?

**Eugen Rochko:** Yeah, it is.

**Adam Stacoviak:** Or are you independently wealthy somehow?

**Eugen Rochko:** No! \[laughs\]

**Adam Stacoviak:** What I mean is, is the community supporting you somehow?

**Eugen Rochko:** Yes, it is all thanks to Patreon... No, I'm not independently wealthy.

**Adam Stacoviak:** You never know, you never know...

**Eugen Rochko:** I'm an immigrant. I moved to Germany from Russia when I was eleven, and my family started here from scratch... So it's kind of lie from zero to this.

**Adam Stacoviak:** Yeah, that's awesome.

**Eugen Rochko:** But at the same time, I started working at it full-time even before Patreon reached any kind of big number. As I said, I had the freelancing gig at the time when Mastodon started. I eventually quit that, but it provided me with some supplementary income while the Patreon was getting started. Then when it was hitting like $600/month, it was already enough to at least cover the rent, and the food, and then as it grew, it sort of became an actual competitive job, where I no longer get sad looks from other engineers.

**Adam Stacoviak:** \[01:08:10.28\] Any plans to make this some sort of business, like Mastodon as a service? We've asked various questions about running a server, things like that...

**Eugen Rochko:** I have had that thought, certainly... At the same time, at least right now, I don't wanna spread myself too thin, because managing a business of hosting other people's websites is a big responsibility, and it is pretty much a 24/7 thing because at any time something could go wrong... And I'm already hosting my own server where that's the case, so... I don't wanna just have too many responsibilities at once. But it's certainly an avenue for extra income if I ever decide to do that, start a software as a service where I just offer hosting. But right now, while I'm not doing it, there are others who fill that niche, and on the Join Mastodon project website I link to somebody who does that sort of thing, Mastodon hosting under Masto.host. And yeah, while I'm not doing it, somebody else is doing it...

**Adam Stacoviak:** That was my next question - okay, so if you're not doing it, is anybody, or could somebody...? Is there anything that says you can't?

**Eugen Rochko:** No, you can absolutely do it; there's no problem with it.

**Adam Stacoviak:** Fully managed Mastodon hosting - this is at masto.host. Interesting, so that's right on your homepage for JoinMastodon.org.

Well, let's get to maybe a more colorful side, which is naming. The naming scheme of things is always kind of fun. Toot is what you call the object, the thing that you put out there. Twitter has tweets, Mastodon has toots. \[laughter\]

**Jerod Santo:** How do you say that with a straight face, that's my question...

**Eugen Rochko:** I do not. \[laughter\] Never with a straight face. The history of toot is such that Mastodon did not start with it. In fact, at the beginning Mastodon did not have any special words for posts; they were just statuses or posts. The button for posting one just used to say Publish. But then a certain demographic came, and at first it was like -- one of the first waves of people were Dutch, and... My memory is already vague on this, but I remember some form of Dutch word for tooting, which was something like toeteren, or something like that... I'm probably mispronouncing it... But it was a suggested term for Mastodon posts.

Then about the third or fourth wave -- I don't remember how exactly it started in the community, but I remember that a specific person requested me, or rather dared me, to change the button to say Toot.

**Jerod Santo:** They dared you...?

**Eugen Rochko:** Yeah, they were like "If you change this button to say Toot, I will pledge to your Patreon $5 forever." \[laughs\]

**Adam Stacoviak:** Wow.

**Jerod Santo:** That's awesome.

**Eugen Rochko:** So I took it up, and I did it. I didn't really realize that in some parts of America toot is slang for farting, so that really didn't play a role... I mean, it's more like the sound that an elephant makes, or the sound that a trumpet makes, and I still think that's innocent enough, and it's treated light-heartedly, so I don't really mind it.

**Adam Stacoviak:** I mean, even so much that the Mastodon source code is under the org TootSuite.

**Eugen Rochko:** Yeah, exactly. It's because the organization named Mastodon was taken, so I had to improvise... And I was like "TootSuite..."

**Adam Stacoviak:** Gotcha. Okay, TootSuite.

**Jerod Santo:** Well, I'll tell you one thing, Eugene - Adam and I both live in that area of America where a toot is definitely a vernacular for farting, so... That's why we particularly both said "What's with toot?" \[laughter\]

**Adam Stacoviak:** \[01:12:04.02\] And I'm sure you get that a lot. I mean, it's just gonna be the case.

**Eugen Rochko:** Yeah... Every so often, somebody joins and posts that picture from the Dr. Doom comic where it says "Dr. Doom toots as he pleases." It's unending fuel for those kinds of jokes, and fair enough...

**Jerod Santo:** \[laughs\] Well, let's talk about the future of Mastodon. We've talked about how you've gotten here, the fortuitous path and some of the things that sets it apart, as well as how awesome it is that you have a community, and people that support you, and sponsors, and are able to work on this full-time, even pay some moderators... What does the future look like? Do you have big plans? Is the idea formulated and now it's maintenance mode? Do you have huge growth opportunities? Are you taking VC funding? Tell us what's gonna happen.

**Eugen Rochko:** There is not gonna be any VC funding. I mean, I've built a lot of protections against this sort of thing from the get-go. The code's license is AGPL. What this essentially means is that if you make any modifications to it, you have to publish those modifications. That means a company cannot take the code and just put something extra in it, make it closed source and then remove the decentralization part from it to sort of conquer the market. That's the sort of thing we wanted to guard against.

What this means is that, well, the Mastodon code is kind of worthless; you can't buy it, you can't acquire it, and you certainly shouldn't invest VC money into it... So that's not happening.

**Adam Stacoviak:** Unless you were in the business of managed hosting.

**Eugen Rochko:** That's true. Yes, if I wanted to build a business of that... But that would be distinctly different to Mastodon itself.

**Jerod Santo:** Sure.

**Eugen Rochko:** As for features, recently Mastodon 2.5 came out; I think it was a week ago or maybe two weeks ago, and there were a lot of good features in that that I've been planning for a long time. That means that there's only a few big things that are still left to be implemented in the future. Other than that, it indeed is entering a sort of maintenance/polishing mode where we care about improving the user experience, and polishing things that are rough or that are not good enough, but at the same time no big new things...

I'm not really interested in going too far away from the focus of the project, because I don't want it to become sort of like a Swiss knife where it's a jack of all trades, but master of none. I want it to be focused on the things that it's good at.

But certainly, if there are good suggestions from the community for new features or for changes, I'm always open to listening to those and evaluating whether that's something that we wanna engage with, or maybe if it's not a very good fit for the upstream project, maybe better fit for some kind of fork.

One feature that we released in this 2.5 episode -- I said episode because I'm thinking of podcasts... Release, is what I'm thinking of... In the release is the federation relay functionality. This ties back to the way Mastodon works with user subscriptions. Servers don't generally subscribe to each other entirely; it's more about "I follow my friend, so my server receives posts from that friend." What this means is that if you have a brand new server, it can feel quite empty, and perhaps like a ghost town.

\[01:15:57.03\] So what does the relay do? The relay, as the name suggests, is kind of like a semi-centralized plumbing system I would say, where servers can subscribe to it and they start exchanging all public posts, regardless of who subscribes to whom. This means that a new server could join a relay and immediately receive lots of fresh content all the time. That's a solution to a problem that we've been hearing about for a while.

The other big thing is account migration. As we've been talking about, it's kind of annoying at the time, but we wanna make it more smooth and more natively supported, so that you don't have to rely on people seeing your "I have moved" message, so that you keep your followers.

I think that's it... Other than that, it's really just improving the user interface and solving bugs etc. As for growth opportunities - well, I can never really predict that sort of thing. It's kind of weird, because I work on a new release for a very long time, I add some exciting new features... Then it comes out and it doesn't make a big splash, but then randomly, a few months later, nothing of note happens but there's a huge wave where 500,000 people join, and it has nothing to do with anything I've been doing. So you know, I can't really predict that... But let's hope for the best.

**Adam Stacoviak:** What about getting started for developers? Anybody who is listening to this and they're like "You know what, I've got a community. I've got a Slack channel I've been kind of PO-d about that has limited search, or it's not my data", or it could be anything else, whatever... And someone's like "I think I should start an instance." Is there a Getting Started document, or a guide that does this? I noticed in your GitHub profile you have a Vagrant instance; I'm assuming that's probably for some local VM development, or something like that... What's a good way for someone to get started on the hacker front of this?

**Eugen Rochko:** Well, if you're familiar with Ruby on Rails, then you'll have a really easy time, because Mastodon is just a Ruby on Rails application. It follows the conventions as much as possible. Perhaps the service pattern that we're using is maybe a bit unconventional, but at the same time also not really new to Ruby developers, and I think it quite elegantly encapsulates complex logic into classes that can be reasonably found if you're looking for them.

If they're not familiar with Rails, then it's perhaps a little bit more complicated, because you know, people say "Well, Rails - there's a lot of magic." It's not really magic, it's more like just convention; you have to know where something is.

How to get started... You just check out the code from the GitHub repository, install the dependencies from Yarn or Npm and Bundler, and you're pretty much good to go for development. There is a foreman command for just starting up all the services, there is the web process, there is a Sidekiq process which is the background processing unit, there is the streaming API written in Node.js, and there is Webpack for compiling assets. So in development you'd have those four running, and you have your local running server, and you can start hacking on the code with live reload.

As for running it in production, there is a bit more involvement there. There are a lot of guides for that, but if you're running on Ubuntu, that's really easy because all the guides are oriented towards that system, just because it's easier for us to focus the instructions on something that's pinned down, than be like "Oh, if you're on CentOS, then you need this. If you're on Fedora, you need something different."

\[01:20:17.24\] We're just like "If you use Ubuntu, here are the commands." You can practically just execute all of them in the right order and you're good to go. In production, it involves -- you get the code, just like in development, you install the dependencies just like in development. The extra steps are you need systemd service files for the processes, instead of using foreman. So you'd have a systemd unit for the web process, a unit for Sidekiq and a unit for the streaming API. You will need to install a PostgreSQL database; it could be on a different server, it doesn't matter. You need Redis, and you need NGINX or Apache as a load balancer/reverse proxy in front. And you need to get an SSL certificate from Letsencrypt, and that's it. You're good to go.

**Adam Stacoviak:** It sounds pretty straightforward for most Rails developers out there. And if you're not, I'm sure you've heard of Rails... Get familiar, and hack on this.

Well, it's been fun catching up with you. Jerod, it's kind of interesting because I feel like we're often earlier to a game or to a topic than we have with this topic. I kind of feel like we're delayed, but I almost feel like we're perfectly on time, because you know, there's just been so much progress I feel like we were a little early... Or it would have been a similar conversation, but just not enough for Eugene to walk us through in terms of where the community is at. The direction they have now I feel gives us a better conversation here today.

**Jerod Santo:** I thought you were gonna say we're slacking, but now you're saying we're doing perfect. \[laughter\]

**Adam Stacoviak:** I felt we were slacking a little bit, but I kind of feel like it's just perfectness. I like it. I'm excited about it. I just think that this conversation now doesn't feel late to me. At first I was like "Geez, we kind of missed the boat talking about Mastodon forever ago... We really did", but I feel like the runway you and the community have, Eugene, has just been great, so... Good timing, in my opinion.

Any closing thoughts for those listening, thinking about anything we may have gone through - any closing thoughts for you before we let you go?

**Eugen Rochko:** Um, join Mastodon! \[laughs\]

**Adam Stacoviak:** Join Mastodon, there you go.

**Jerod Santo:** Join Mastodon!

**Adam Stacoviak:** JoinMastodon.org. Go there, check it out. Eugene, thank you.

**Eugen Rochko:** Thanks for having me, it was great being here.
