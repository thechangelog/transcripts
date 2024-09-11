**Jerod Santo:** So we are joined today by Alya Abbott from Zulip. Welcome to the Changelog.

**Alya Abbott:** Great to be here, yeah.

**Jerod Santo:** Great to have you. Great to have an open source chat application out there, and one with a storied history. You all have been around a long time, in and out of Dropbox even. I would love to hear a little bit about that story. Dropbox acquired, and then open-sourced out of that. Can you give us a little bit of the history?

**Adam Stacoviak:** Really?

**Alya Abbott:** Yeah. Yeah, yeah. Zulip has kind of an interesting history. So it was started back in 2012, so before things like Slack were out there...

**Jerod Santo:** Yeah.

**Alya Abbott:** At that time it was not open source. It was just kind of your regular closed source startup out in Boston. And when it was still in private beta, the company was acquired at Dropbox. At the time, Dropbox was exploring kind of different strategies with chat, as kind of providing a suite of office products alongside with the file storage... And then they went in a different direction and actually open-sourced the entire Zulip codebase, along with the full history of the project. So all that commit history, there was a Hack Week project to clean that up and make that something that can be publicly shared. And they very generously -- I guess, once it was open-sourced, Tim Abbott, who was one of the original co-founders, and was working at Dropbox at the time, started running that open source project in his kind of nights and weekends in his spare time, and Dropbox also very generously gave the trademark for Zulip to Tim as well... So at this point, there's no relationship between Zulip and Dropbox.

**Jerod Santo:** There's no relationship at all.

**Alya Abbott:** Yeah, yeah. But we're definitely very grateful that they decided that they would be happy to open-source it, given that they were not using it themselves.

**Jerod Santo:** Why did they make that decision? Do you know why that decision was made?

**Alya Abbott:** I know Tim advocated for it, and that's really just - they wanted to contribute to open source, and just a generous gesture for the community.

**Jerod Santo:** Well, that's pretty cool. So when they bought Zulip, or - yeah, I guess it was called Zulip from the beginning?

**Alya Abbott:** Yeah, the product was called Zulip at the time.

**Jerod Santo:** So when they bought Zulip, and then Tim came inside of Dropbox, was the original idea to integrate and build that as part of their product, and they decided not to?

**Alya Abbott:** Yeah, originally -- I don't know the details of their strategy, but I think originally they had thought that they might build their own chat app. I know you probably have heard of Dropbox Paper, Mailbox... They kind of were at the time acquiring startups in the office tool space more generally... And then kind of company priorities shifted. The Zulip team ended up working on the core Dropbox product, and... Yeah, so they just kind of didn't end up going in that direction.

**Jerod Santo:** Huh.

**Adam Stacoviak:** Very generous to open-source it, though. And all the history. That's kind of unheard of, wouldn't you say? And then like be disconnected completely, no back link or connection to it... Just like, "Be free bird. Go. Fly."

**Alya Abbott:** Yeah, and one thing that's pretty cool is that we actually still have some of Zulip's 2013 beta customers using Zulip today, continuously...

**Jerod Santo:** Oh, wow.

**Alya Abbott:** So they still have all their chat history... We've kept that running for them throughout the years, and they're still there.

**Jerod Santo:** So pre-Slack, like you said; definitely not pre-chat, though... I mean, IRC...

**Alya Abbott:** Yeah, so like HipChat and IRC were around at the time. Exactly.

**Jerod Santo:** Yeah, HipChat, Campfire... Remember Campfire?

**Alya Abbott:** Yeah, yeah, yeah. That was a competitive landscape at the time.

**Jerod Santo:** Yeah, totally. What was Zulip's big idea then? Like, why did it begin to exist in the first place, versus just using HipChat, for instance?

**Alya Abbott:** Totally, yeah, yeah. So the big innovation in Zulip is how it organizes conversations. And the idea actually came from an older technology that was popular at MIT at the time for -- like, lots of students and folks were chatting there. But what's different about it is how conversations are organized.

In some of the tools folks may be familiar with, you probably have channels, and within that channels, a lot of discussion going on kind of like in that main channel feed. Maybe you have some threads on the side... Zulip is different in that when you start a conversation, you give that conversation a brief topic, so something similar to what you might do if you're sending an email and you write a quick subject line for your email. And then when people respond to your messages, they respond within that topic. And so it's a little bit of extra effort to start that conversation, you do need to give it a topic, but then it just makes a huge difference when you're reading your messages.

\[00:08:11.01\] So now, instead of kind of everything being mixed up, you have these organized conversations, labeled with their topic, and so you can come in and read your messages one conversation at a time. Rather than everything happening chronologically, you could say "Okay, people are talking about this. Let me read about that. Okay, I'm done with that conversation. Let me move on to the next one." And so it doesn't matter if people are -- and it's a busy channel, people are talking about 10 different things at once... It's just not a problem. You can read everything in its own context, and you can have a conversation that goes across time. So maybe people are working async, or just busy with meetings, and so somebody comes in a few hours later or a day later and wants to comment on something that was going on - rather than getting kind of like lost in the noise, you have all that context in the same place.

**Jerod Santo:** So every Zulip instance has channels, which are like long-lasting things. And then the channels have inside of them topics. Is that the architecture?

**Alya Abbott:** Yeah, exactly. Exactly. And then each topic is basically kind of a topic of conversation, and that can be very ephemeral, or it can be something that you come back to after a while. Both ways work.

**Jerod Santo:** Okay. And what differentiates a channel from a topic? Is it merely their position in that structure? Or is there something about a topic that's different than a channel? Because a lot of chat apps just have channels, and then inside there they're just chronological, but then you can kind of like drill down in threads, and stuff... So I'm just trying to understand, are there actual data differences between a channel and a topic, or just kind of where they exist inside of the hierarchy?

**Alya Abbott:** I mean, the channel is very similar to channels in other apps. So for example, it comes with some metadata, like subscribers, privacy settings, those sorts of things. And then topics are just another level of organization within that channel.

So for example, for your subscriptions, you would be managing your subscriptions to channels, and then you would automatically see the topics that are in the channels that you're in. We do actually have ways to within that mute specific topics, or follow specific topics, so you can kind of set your preferences there as well... But yeah, it's just kind of another level of structure.

And there's also ways to view -- instead of viewing all your messages in a feed, you can also view the topics. So there's an inbox style view, where you can see your unread topics, and then you can just jump into the places where you're like "Oh, this is relevant for me. Let me take a look at that." And there's another view that lets you see the recent conversations, so again, it kind of gives you different ways to summarize what's going on, and really dive into what's important for you and where you need to participate.

**Jerod Santo:** Does every message inside of a channel have to exist inside of a topic? Or is there also just like the "We're just messaging, we're not we're not topicking"?

**Alya Abbott:** Yeah, that's something that's configurable by the organization administrators. In general, there's not a lot of need for these -- it depends, but we generally recommend having at least the vast majority of the messages happen in topics. I mean, once you're replying to a conversation that's already ongoing, you kind of hardly notice this. It doesn't create any extra work. You just click and then you reply. It's not like you have to retype the topic, or anything else. So it's really not a lot of overhead. And once people get the idea, it's really pretty seamless.

**Jerod Santo:** Okay.

**Alya Abbott:** And we also give folks tools to kind of reorganize everything, if things do end up out of place. So you can move messages between topics, as well as between channels... So especially when an organization is just getting started and folks are getting used to the model, that really lets you reorganize things if things do end up in the wrong place \[unintelligible 00:12:01.04\]

**Jerod Santo:** \[00:12:04.21\] Yeah. I suppose if you really wanted just like a general chat inside of a channel, you could just have a topic called general chat, and then you're just like --

**Alya Abbott:** Yeah, you totally could. Absolutely. Yeah.

**Jerod Santo:** You know, it becomes a junk drawer. If nothing fits here, then it just fits in the junk drawer, and the junk drawer ends up being the only place people talk, and then you're not using the tool right anymore.

**Alya Abbott:** Definitely.

**Jerod Santo:** That's the biggest struggle.

**Alya Abbott:** Yeah. And the thinking is really that people are -- I mean, people are spending tons of time throughout the day on communication. Some surveys found that something like half of the time for a knowledge worker is spent on some communication of one kind or another... And so just making that more efficient can make a huge difference in terms of people's time. And if you think about what you're actually doing when you do communicate, and when you do chat, most of that time is really spent reading messages. So of course you're sending some messages, but there's more time spent kind of ingesting content. And so if that process is really smooth and seamless, and feels kind of structured and not chaotic, that's going to make a huge difference for people's experience throughout the day.

**Adam Stacoviak:** I'm looking at the screenshot on your homepage, which I assume is up to date. Is it up to date?

**Alya Abbott:** Yeah.

**Adam Stacoviak:** Pretty accurate?

**Alya Abbott:** Pretty accurate.

**Adam Stacoviak:** Okay, cool. Because sometimes homepages get out of date, you know?

**Jerod Santo:** They have a live demo there. Their personal chat is chat.zulip.org, like their dev chat, and you can join that anonymously, Adam. And then you'd actually be using the software, which is pretty cool. If you wanted to like actually see how it -- and you can go through channels, and topics... So that's a -- I've found that to be a pretty good way of just seeing exactly how it works.

**Adam Stacoviak:** Yeah. Where would I go to do that real quick? Because I was trying to open that conversation, like get into the actual UI.

**Jerod Santo:** Yeah. I don't know where the link is, but just go to chat.zulip.org, and then I think -- I'm currently in the design channel, looking at the channels and topic illustrations topic...

**Alya Abbott:** A-ha...

**Jerod Santo:** And it's very active and scrolly. I was just looking for the most recent conversations. So that's kind of cool. As you hop in, you can see all the recent conversations, and yes, you can jump into those different topics, and see what's going on there.

It seems pretty well organized. I mean, we use Slack on the daily, and we have slightly less organization... We have channels, and now there's threads, which is kind of a bolt-on, which kind of can act as a topic, but they're more like ad hoc, like "Hey, maybe I'll reply in the thread, or maybe I'll reply to the whole channel." And then it gets to be like "What's the idiom, or what's the culture around threads?" How do we use them? And people use them differently. And it gets to be hairy because of that, I think, this little bit of extra structure... Which really isn't very much; it's like one more level of structure. It's like channel and topic might help organize your communications. And it seems like it is, because you all still exist here, 12 years later... Yes, 12 years later. And now you're a thriving business on top of an open-source project... So people must like this model.

**Alya Abbott:** Yeah. I mean, we get lots of feedback from folks, and that's really the biggest differentiator for people, is that level of organization just makes a huge difference in people's experience using the product. People tell us "Sometimes I have to go back to Slack to talk to my customers, and it's just so chaotic." Having experienced the level of organization within Zulip, other things feel -- people start feeling like other things are messy, and hard to follow.

**Jerod Santo:** Adam, have you clicked around enough now to formulate what you were going to ask before?

**Alya Abbott:** Have you found messages from me yet? \[laughs\]

**Adam Stacoviak:** I just -- I do like it. So I'm going to paint a verbal picture of this visual I'm looking at... So channels on the left, topics to the right of me... Here I am...

**Jerod Santo:** Stuck in the middle with us?

**Adam Stacoviak:** \[00:15:54.19\] Stuck in the middle, you know...

**Jerod Santo:** Nice. Well played.

**Adam Stacoviak:** Great song, by the way. I like when you click on a channel, you see these topics, and then if you click on Show All Topics, you obviously get into a channel view with all the topics in it, that you can filter and scroll and you can easily go back to channels... I'm not signed in, so I can't see how I start new ones, but it does seem pretty snappy in terms of just how easily you can map around. I just wonder if it's overhead on anybody's part to organize messages, organize topics, because you can, you know? That's what I was trying to figure out.

**Alya Abbott:** Well, for the most part it's kind of self-organizing. So just when somebody is starting a new conversation, they'll start a new topic. I mean, in the Zulip community we do have a lot of folks who are new contributors, or somebody who's coming in who's kind of brand new to the product, or just checking it out, so sometimes they might not be sure exactly how to name a topic well, or where to post it... And then when somebody sees that it was posted in a place, they'll move it around to where it should be. So it's not like a big job, it's just you're reading your messages and you're like "Oh, this belongs to another channel. Let me move that over there."

**Adam Stacoviak:** It's kind of like a real-time forum, in a way. When I'm on chat.zulip.org, it's got the feels of a forum, and the feels of a real-time chat kind of combined into one... Which is kind of nice, because in forums there are threaded conversations, they're obviously topic-based, but they're not real-time, generally, to my knowledge. I mean, I haven't been on a forum in like active, I suppose, since the \[unintelligible 00:17:30.15\] wears days of my life... But I'm on forums here and there. I think there's some obvious ones out there, but I'm just not active in them. I'm very active in Slacks, multiple Slacks, not just our own... And really no Discords at all for me. So my only really experience is like older hip chat days, obviously Campfire, and then obviously now modern applications...

**Jerod Santo:** How about IRC? Did you ever get in IRC, Adam?

**Adam Stacoviak:** A little bit, a little bit, honestly. I just -- I wasn't quite hacker then as much as I am now, so I didn't quite get into IRC. I tried, I was, but just not like steeped...

**Jerod Santo:** Sure.

**Adam Stacoviak:** ...like real-time chat is. But this is kind of cool, because it's kind of like a forum and a real-time chat, all built into one. And it doesn't feel overwhelming, like you see this stream of content coming past you. I think there's some psychological things that happen in real-time chat applications these days that you feel like you have to keep up, or there's just this stream of data... It doesn't feel burdening thus far.

**Alya Abbott:** Yeah, and that's a really big thing we're trying to solve for as well, the sort of feel like "Oh, somebody sent a message. I have to respond right now, otherwise nobody's going to -- it's going to be messy, it's going to be confusing, and I'm not going to be able to reply..."

**Adam Stacoviak:** "How do I get back there?" Yeah.

**Alya Abbott:** Yeah, exactly. And then that disrupts people's focus time. Even if they are online, you want to be able to just dive into your work and focus for a couple of hours, and then when you need a break, maybe check in on your chat messages and follow up on stuff. Like, most of the messages people are sending are probably not so urgent that you need to interrupt your flow to jump in right away. And so that's part of the design here, is to really make it possible to say "Okay, I'm going to dive into the code, I'm going to dive into my project, and then reemerge and follow up on all the chats where I need to respond, and then go back to what I was doing."

**Jerod Santo:** The cool thing for us, Adam, if we did Zulip instead of Slack, is it's self-hostable. You can also use it in their cloud, so you can pay them money and they will host it for you. But if you were to -- I haven't looked at the cloud offerings or the way that it breaks out pricing-wise; Alya, you can obviously catch us up with that... But they can't hold our chat history hostage, you know? Our chat history is being held hostage inside of Slack.

**Adam Stacoviak:** It is...

**Jerod Santo:** And sometimes I look at that as a plus, like "Hey, who cares?" Sometimes it's nice that things disappear. And other times you're like "No, I told you this 91 days ago", and 90 days is the maximum, and so it's gone. It's gone forever, and we now have lost that information.

**Alya Abbott:** Yeah. Well, now they're going to actually start erasing it after a year I think, right?

**Jerod Santo:** Oh, are they? I don't know. I don't follow too closely along.

**Adam Stacoviak:** \[00:20:10.08\] Well, I've gotten a couple of those emails, and they are scary to see... I was actually a little nervous, because I was trying to quickly, as this topic came up in this conversation, to find that message, because I do recall them saying recently to us that there's some updates required by September, or something like that... And like final notices for X... And like you, Jerod, I'm like "Who cares?", in a way. But then I'm like "Maybe I do care." Maybe I might care, you know?

**Jerod Santo:** Right. You don't care until you do care... And you're like "Oh, no! It was in the Slack!", and then it's gone now.

**Adam Stacoviak:** Yeah. I don't know. Do you know much about that, Alya? Like, what the current state of Slack's -- I imagine you're probably leveraging it in some way, shape or form; or if you're not leveraging it, you're getting --

**Jerod Santo:** She's competing against it.

**Adam Stacoviak:** ...the inbound of it, right?

**Alya Abbott:** Well, we did -- I guess maybe you guys remember it was a couple of years ago maybe now that Slack switched from letting folks see 10,000 messages of history, and to just 90 days on the free plan...

**Jerod Santo:** 90 days, yeah.

**Alya Abbott:** And that was really -- it was framed as kind of a positive, but what we saw is a huge influx of folks, communities who can't afford something like paying for a pro plan on Slack, leaving Slack and importing their data and moving to Zulip. And -- I mean, for us, we have a really robust sponsorship program for communities and open source projects, nonprofits, education... All kinds of non-business uses for Zulip. We really try to enable folks to benefit from our software.

So we do sponsor free Zulip cloud standard plans for folks... We have I think over 1,500 sponsored organizations at this point, so it's a really robust program.

**Jerod Santo:** That's quite a few.

**Alya Abbott:** Yeah. And it's something that's kind of -- we really believe in Zulip as a way to help folks be more productive and really help them accomplish what they're trying to do, and so we don't want to wall that off, and as much as we can... Of course, we do need businesses and organizations that can afford it to pay for the product, but otherwise we really do want to share it as much as we can, and enable folks to do awesome things with it.

**Jerod Santo:** Yeah...

**Adam Stacoviak:** I've found the email that was scary. This was sent on June 24th. It says "Free workspace content older than one year will be deleted." And then I won't read it all, of course, but it says "This policy will begin taking effect", get this, Jerod, "August 26th."

**Adam Stacoviak:** Two days ago.

**Jerod Santo:** It's the 28th.

**Adam Stacoviak:** Yeah. So as of this recording - we're recording on August 28th...

**Jerod Santo:** They're deleting our stuff.

**Adam Stacoviak:** But it does say "Workspaces will be notified prior to the policy impacting that workspace." So we do have time.

**Jerod Santo:** They haven't rolled it out yet.

**Adam Stacoviak:** And it says "Your workspace is on a free Slack plan", because Alya, we are a community. We've been sort of hamstrung, I suppose, by Slack, and we've always been dumbfounded that they would never have changed their tune towards communities... And we have several communities in our sidebar that I'm a part of, and I'm sure, Jerod, you're part of some that I'm not... But there's relationships in business, there's partners were in their channels, or vice versa... And it always seemed like -- what's the line from Goodfellas, Jerod? Maybe it was one of the Godfather movies, I don't know...

**Jerod Santo:** Which one?

**Adam Stacoviak:** It was basically "Pay me", you know?

**Jerod Santo:** Oh, yeah.

**Adam Stacoviak:** You know what I'm getting at of here.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** It's a PG show here. That's how I've always felt about Slack. It's just like, great company, and I'm all for companies being ambitious and enterprise-focused and all that good stuff. I'm not at all against that. But I was always confused by their seemingly inability to see the goldmine of community that had leveraged Slack and its free tier to not find a way to make them pay in some way that wasn't thousands and thousands. It only seemed like they optimized for the large enterprises only, not for the smaller communities at all.

**Alya Abbott:** \[00:24:06.14\] Yeah. Well, and I guess our general philosophy on pricing is - look, if you're a business and you're paying somebody a salary, paying a small monthly fee for that user, a few dollars a month to have them have chat software that they use hours every day, and in our case that can help them be more efficient with their time - that's just so worth it, and it's a very reasonable way to do things. But if you're looking at an organization where the folks using chat are not your employees, so even if there's some kind of core employee \[unintelligible 00:24:39.15\] a few folks who are part of a business, but then you have a large community that's part of that organization, now that pricing doesn't make any sense at all. And so folks can contact our sales team for their specific situation, but in general, our approach is really businesses, it makes sense to pay that kind of level, but not for community members, even if there's a business involved.

**Jerod Santo:** Plus, if you're doing long-term thinking, the way you all are doing it builds value over the long run... Because the price of you all providing these standard plans for at this point 1,500 organizations which are community-focused, non-profits, open source, research, Academia, etc. these are people who will use and love your product, and it will help generate a network effect, you would hope, that would eventually bring their business to Zulip, their friend's business when they go to ask them for a recommendation to Zulip, who becomes a paying customer. And that stuff doesn't pay off in the quarterly or sometimes even the yearly, because you're actually losing money by giving this away to more people... But on the measuring 10 years, 15 years, 20 years down the road, that stuff compounds and becomes massive. And it's something that Slack I think currently has, to a certain extent, is some network effects, where it's like, people already have a Slack app on their phone, and so it's easy to add another Slack. In fact, yet another Slack is kind of a fatigue at this point. It's like "Oh, I have so many Slacks. I don't want to have another Slack." But it's a big advantage when it comes to getting people to use the tool if they've already used it, if they already have it on their phone or on their laptop. And so what you're doing is you're getting Zulip out there for these people, and you're doing good at the same time. So I applaud that strategy.

**Alya Abbott:** Yeah, absolutely. We definitely see folks saying "Oh, I used it, and --" We ask folks who are creating new Zulip organizations how they learned about Zulip, and a lot of them say "I've used it in a Zulip organization before", and I think a lot of the time that will be like an open source community somewhere.

And also, another way that folks from these communities are really contributing is that we get a ton of user feedback. So as you saw, our development community is open, and it's open signup, so folks will just come by and kind of share how they're using Zulip, what they think could work better, any kind of bugs they encounter, but also feature requests, as well as just posting and proposing feature ideas in GitHub... And we just have these really open discussions with our users, and that's really valuable for just figuring out the ways that we can improve the product.

**Jerod Santo:** So when it comes to Slack, Adam, you and I kind of have maybe two values, that they hit on one of them. One of them's like high-quality software and design. Like, that's the thing that we both care about. And then the other one's like open source community ethos, which Slack does not have. We like to have them both. And high-quality software in Slack - I think that's more questionable now than it used to be. I think they really did hit it out of the park in certain ways, and were groundbreaking in certain ways... Recently, I've been less impressed after some redesigns, and I feel like it's kind of stagnated. Of course, they've arrived. They are now part of Salesforce, and a big company and all that, and they have other people on their minds that aren't us.

\[00:28:16.18\] But I'm curious about Zulip when it comes to the software, and the way it all works... And does it fit into all the different places that you communicate? Because more often I'm using Slack on my phone, even though I stand at my desk for hours every day... You communicate all day long and all night long. And so Zulip on the phones, Android, iOS, Zulip on the web, Zulip apps... Do you have all that necessary surface area accounted for, and how do you all manage that?

**Alya Abbott:** Yeah, absolutely. So Zulip - you can use it just in a browser tab. There's also a desktop app for all the major platforms. And then yeah, Android and iOS apps. And we're actually currently in the process of rewriting our mobile apps from the ground up, using a different framework. We're switching to Flutter-based apps. So our current apps are definitely functional, but not as smooth and beautiful as we would like them to be. And so that next generation app is really going to get us all the way there, so we're very excited for it. And for old school folks out there, there's also a terminal client for Zulip, if anybody wants to use it that way.

**Jerod Santo:** Nice... How about APIs? Is it programmable?

**Alya Abbott:** Yeah, there's an open API. And actually, our mobile and terminal apps use the API to communicate with the server. So we're constantly testing it ourselves, and using it ourselves, and relying on that documentation ourselves. So absolutely.

**Jerod Santo:** Is the desktop app an Electron app?

**Alya Abbott:** It is, yes.

**Jerod Santo:** Have you considered a Taui app?

**Alya Abbott:** My understanding is that the engineering team was thinking about it, and we're kind of waiting for --

**Jerod Santo:** Okay... Because if you wanted to get the nerds excited, I think, if you came out and said "Zulip's desktop app is now no longer using Electron", then it'd be like, we'd just throw Slack right out the window, wouldn't we, Adam? All of us nerds would be like "Ah, finally. Something we can use here."

**Adam Stacoviak:** Yeah, pretty much.

**Break**: \[00:30:18.26\]

**Jerod Santo:** What are some of the biggest challenges you all are facing?

**Alya Abbott:** Good question. I guess one sort of thing that is complex for us is the competitive landscape... Slack and Microsoft Teams being the sort of big gorillas in the room, and Teams effectively gives away their chat for free oftentimes kind of as part of their suite, Microsoft suite... And it's really hard to get folks kind of -- and at the same time that it's free, it's not free, in the sense that people are spending their time and their energy and their attention in ways that aren't making them productive. Your employee's time is your most valuable resource, and so wasting that time and energy on an app that's frustrating, or hard to use, or is not organized in ways that you'd want it to be is a major cost, but it's hard for companies to budget it that way, and to really evaluate it that way.

So I think one thing we're really trying to do is get better at telling that story, and really communicating with folks and trying to explain this -- make people really sort of feel in their guts this sort of "Okay, this app might be free or it might be kind of an easy choice", like Slack; a lot of folks are familiar with it. It's sort of like nobody got fired for buying IBM, probably nobody got fired for picking Slack for their chat... There's lots of things that are great about it compared to sort of products that had come previously. But choosing a chat app is just so important to how folks are going to collaborate in your organization, and so that's really the message we're trying to get across.

A big challenge for us is to really get people off of their kind of default mode or the easy decision there, and really, really get folks to consider and evaluate our product, and to take that time and attention away from -- and there's so many other things that they need to be doing... To really think about this choice in a very intentional way.

**Adam Stacoviak:** It is hard to compete against free, especially when the Goliath is giving it away for free.

**Alya Abbott:** Yeah. I mean, Microsoft is facing anti-competitive lawsuits in Europe because of how they've set things up...

**Adam Stacoviak:** Yeah, it's unfortunate, especially -- you would think, as a user... Like you said, nobody got fired for buying IBM. I didn't make that up, but I don't disagree with it, to some degree... Except for what if you're missing out on what is free and open source, but you can also pay for it, when the Zulip name isn't as polished as maybe Microsoft, obviously? That's the hard part, is that you kind of have to win them with showing up, with the open sourceness of what you're doing, the way you've been in the trenches, with the communities, the way you've sponsored things... Not just simply the larger brand name, and the literal freeness that you can get with Teams. Now, I know that at certain points organizations have to pay for Teams, but it's pretty much free for the entrance, and then you pay once you're literally locked in.

**Alya Abbott:** \[00:40:10.20\] Yeah. And I think in the past a couple of things that have held us back have been, one, the design of the app. That's really something that we've been focused on improving. That's been like a major, major investment for us over the past year or two, and continues to be. For the longest time, our users would tell us that the user experience in Zulip is second to none, but the design could use some work... And that's not such a big problem necessarily for folks who kind of -- once you've gotten used to an app, you might kind of stop noticing some of these things. But in the initial evaluation, it makes a huge difference. If you open an app and you're like "Oh, this doesn't look modern. This doesn't look beautiful..." And so we're really trying to get away from that, and folks have an immediate kind of like positive response to the app, as well as enjoying the UI over the long term.

And then another thing we've been really focusing on is the onboarding experience, because there is a little bit of a different mental model for Zulip compared to other apps folks might've seen... And we do want to have that be easy to understand, and easy to onboard people, easy to get everybody in your organization, have folks get started with that... And also just -- I think almost any app, when you first encounter it, might feel a little overwhelming. If you've never seen Discord before, and you open it up, there's a lot going on. But some of these apps that we're competing with - most folks have seen them before, and so now they kind of have forgotten that first initial feeling of "Oh, there's so much happening. It's different." So we really want to help folks through that experience with Zulip, because we do have a lot of users who are coming in who haven't interacted with it before, to really get them across this threshold of like "Oh, I get it. This is comfortable. Some things about it are different, but a lot of patterns I'm familiar with from other applications work here as well... And it really is pretty intuitive once I have a handle on it."

**Jerod Santo:** Well, I asked in our Slack community just moments before hopping on if anybody's used Zulip and what they think about it, and one person said "Used it at a different company, liked it a lot. It's kind of like Slack. The higher ups replaced it with Teams, as Zulip wasn't "auditable." So it wasn't the free part, it was the auditable, which to me makes not 100% sense, but there you go.

**Alya Abbott:** Yeah, I'm not so sure, because we do provide different ways to export your data, including like compliance exports, or you can just export it and -- I don't know. Okay, okay.

**Jerod Santo:** Yeah. He says it was infinitely better than Teams. So there you go.

**Alya Abbott:** Alright, well...

**Jerod Santo:** So that's cool.

**Alya Abbott:** But that's an example of that kind of like what might be a little bit -- I don't know, I guess folks have their own priorities and I don't want to like second-guess the management, but it's just that perspective of like your team's efficiency, and how happy they are with the software they have to use every day...

**Jerod Santo:** I don't know anybody who likes Teams. I know lots of people that use it. I'm not a Microsoft hater anymore. I used to be when I was a younger man... But I will say that I don't know anybody who says like "Microsoft Teams? That's good software right there. We love it." No one, no one says that. Has anyone ever said that to you, Adam?

**Adam Stacoviak:** Not directly. \[laughter\]

**Jerod Santo:** Indirectly? Like, you were listening to them talk to their spouse, or something?

**Adam Stacoviak:** I don't know...

**Jerod Santo:** "I love Teams...!"

**Adam Stacoviak:** Through the tea leaves, or something...

**Jerod Santo:** Now, Discord people seem to love, and I'm not really sure why, personally. I've signed in, I've joined some Discords...

It seems like a hot mess to me. But it's very big in like gaming communities, musicians, and crypto scam artists I know use it, other communities... And I'm not sure what it is about Discord. I know they have some cool audio features built in. They kind of have a lot of different stuff, because it came out of - I think gamers would hang out and talk to each other, initially. Do you ever have to compete with Discord, or do you have to explain Zulip in light of Discord, and how you all differentiate from them?

**Alya Abbott:** \[00:44:03.29\] It depends. So Discord is not so much designed for business use, or use within organizations that needs to be closed and have sort of -- because it's a single account across all your organizations; it's a different structure there.

**Jerod Santo:** Right.

**Alya Abbott:** We do have Discord users who have definitely requested some features that Discord has. I would say that - yeah, their kind of video, and calling, the way they do that is quite nice, and that's something we've heard folks interested in.

Something that we're actually working towards is Discord has -- maybe if you haven't administered organizations, you haven't explored that side of it, but they have really nice and flexible ways to manage permissions and groups within an organization. And so that's actually a big project that we have going on right now, like really, really flexible permissions management, where you can create an arbitrary group, and then give that group kind of an arbitrary set of permissions within your organization... And I think that's going to be really, really nice for anyone administering a large organization.

**Adam Stacoviak:** That's one thing I really wish we had in our Slack, Jerod, is that we have people come, and they share things they should not, aka spam...

**Jerod Santo:** Yes.

**Adam Stacoviak:** And I would just like to be able to eventually boot them, because I delete the message, and I look at them and I'm like "Well, you're clearly not here for the reasons everyone else is here for. You've violated the code of conduct intended for this place..." There's no way for us in our current state to enforce these kinds of things, aside from just deleting messages. Sure, we could probably log into Slack and delete their user, but that doesn't stop them from coming back. I'm not sure if any platform can really do that, to like prevent somebody from re-creating a new account, or whatever... But I do wish we had some moderation tools where I'm sure even the community inside of our Slack would step up and say "You know what? I'll help you guys, because it's 2 a.m. and you're sleeping, and I'm not, because I'm in a different country... And if I see a spam message, it doesn't have to sit there for eight hours until the morning", or whatever time it is when we look at Slack again. It's like "Well, hey, this thing has been sitting there with people piling on, or looking at it, or clicking it..." And we can't do that stuff. So I wouldn't mind having some moderation tools.

**Alya Abbott:** Yeah, we have some tools like -- I guess if you deactivate a user, they won't be able to rejoin with the same email, and you can also disallow throwaway email domains; it definitely is helpful for preventing spam. You can also -- personally, you can mute a user. So if you as an individual don't want to see somebody's content, we do let folks have the option of muting that person, and that just hides all their stuff for you, so you never have to interact with it.

**Jerod Santo:** It would be cool if you could auto-block new users if they start a message with "Dear sir/madam." Auto-block, sorry.

**Alya Abbott:** Write a bot, I guess...
**Jerod Santo:** \[laugh\] Yeah.

**Adam Stacoviak:** Some sort of pattern-match against known -- yeah, I mean, it doesn't happen often. We get some spam here and there. And mostly -- I mean, I get it. Go join a Slack, or find a place to belong, and share your messages. And you do that with enough numbers, you'll get people. I get it, it's a numbers game, but it doesn't make any sense to me, because you're not really getting the long-term benefit you actually want for a brand. And so it's such a nasty thing, really. And like I said, it doesn't happen too often, but often enough where I'm like "Yeah, I wouldn't mind some tooling."

**Jerod Santo:** What would a migration look like?

**Alya Abbott:** So for something like moving from Slack into Zulip?

**Jerod Santo:** Just for instance.

**Alya Abbott:** Yeah, sure.

**Adam Stacoviak:** Just for instance... \[laughter\]

**Alya Abbott:** As a random example...

**Adam Stacoviak:** Hypothetically speaking...

**Jerod Santo:** Yeah, yeah, yeah. Apropos of nothing.

**Alya Abbott:** \[00:47:54.23\] Yeah, so we have instructions in our help center for how to go about it. So basically, what you would want to do is, assuming you want to keep your message history, you can export that through Slack. It might be limited, I guess, depending on your situation... And then if you're moving, say, to Zulip Cloud, so that's our managed SaaS offering, you would just send over that data to us, and we would import that into a new organization for you. And so you could preserve all your - not just the messages, but also the user data. So you'd have a running start on that.

And then we also -- I don't know if you guys have integrations, but also, to make it easier to move over your integrations if you have any, we have Slack-compatible webhooks. So basically you could just kind of remap where your webhooks are sending their data to be Zulip, and then on your own time later on, if you want to move over to more like Zulip native integrations, then you can do that. But things would be working for you right away. So yeah, and you can tell folks where to log in, or we can automatically send emails to all the users that you imported with their login information. So however you want to manage that.

**Jerod Santo:** And they would just get an email, and they would maybe have like a password reset on the first sign-up, or like... Obviously, you're not going to import their passwords.

**Alya Abbott:** Yeah. And we have all the social auth as well. So if folks want to log in with their Google account, or GitHub, or anything like that, that's also an offer.

**Adam Stacoviak:** That's 90% of my anxiety, if we're hypothetically speaking, about things...

**Jerod Santo:** Yes, we are.

**Adam Stacoviak:** ...is I feel like I've been like in this waiting pattern in my own brain. I haven't taken any action, I've been just thinking that maybe Slack would someday get it, and somehow just recognize that there's so many communities that have built up their thing around them... And that many of us in even developer land, or just let's just say tech land, have numerous logos/icons in our Slack sidebar, so we bounce from one workspace to another... And I like that. I don't want to be in a world where I have to like still, I guess, keep Slack, or... I just like the unification of it, and as a user, I don't want to have to go to the Slack app, and then the Zulip app, and then the whatever app. I would just like a unification, if it was possible. I'm sure it is. I think there are some out there, but there's diminishing returns.

My point is that I've been just anxious about what it would take to literally migrate, if ever we actually had to... Because we've got 7,000-ish people in our main channel... Not all of them are obviously present and active every day. I'm sure some of them come and go, maybe some of them lurk... I have no idea because I don't really have any analytics to our usage in terms of just beyond messages I'm paying attention to. So I just wonder if we ever moved to something else, how much would we lose? How hard would it be to get even our active people to stay involved?

**Jerod Santo:** Right. Like, would they come with us, and would they continue to hang out?

**Adam Stacoviak:** Or they'd be like "Zulip? What? Why?"

**Alya Abbott:** Yeah. I mean, I can't promise anything about your specific experience, but we have had folks tell us that when they moved to Zulip, they actually started getting much better community engagement, because it works quite nicely for folks who are not around all the time. I mean, one kind of category of folks, as you were saying, are may be people who are lurking, or who are just kind of coming by once in a while to check in on something... And if you're coming to something like Slack, it's hard to -- you might see the latest messages. It's really hard -- it's going to be not really possible for you to kind of catch up on what you missed if you're checking it out every couple of weeks or every month, in an active organization... Whereas for Zulip, if you just want to sort of check in on things occasionally, folks will come in and they'll look at that recent conversations you maybe saw when you were exploring the app, and instead of having to look at sort of individual messages and try to figure out what's going on, they'll just see that list of topics, and they can be like "Oh, this topic sounds interesting. Let me jump into that."

\[00:52:14.13\] And so you don't even have to feel obliged to kind of make everything be marked as read, or kind of manage your own reads necessarily, if it's just something where you're not following every little detail. You really can kind of just skim that list of what's been going on, and jump into the ones that are of interest.

So yeah, we've had folks say that something like an open source project, that it can actually really be great for community engagement, because people can select the parts that are interesting to them, and just follow those, and jump in on those. You can even configure notification -- there's a concept of following topics. So once you've seen something that's interesting, if it's a community you're not engaged with very regularly, you can follow that particular topic and say get email notifications when there's more messages just to that topic. And so there's really ways to follow specific conversations and find things to engage with for occasional users in a community.

**Jerod Santo:** I do like how you can set your Zulip to public as well. Can you do that on like a per-channel basis?

**Alya Abbott:** Yeah, exactly. So this is something that -- there's an overall organization setting for whether you want to have public channels as an option. So for example, some businesses might not want to share anything, and they just want to turn that all the way off. And then yeah, for any given channel, you can configure it to be kind of public for logged in folks, private or public, even without logging in. So yeah, what you guys were saying, in the development community there's a bunch of channels that we've marked as completely public, and then yeah, you can just kind of come by and not have to log in and just view messages there. And then of course, if you want to participate, then you would create an account, and log in and post.

**Jerod Santo:** Now, are those public channels - do they get indexed by search engines?

**Alya Abbott:** They don't. We do have a tool for exporting your Zulip data, and then you can get that indexed by search engines... Like kind of an archive of all the messages. But it's actually kind of a major technical -- the reason is it's a major technical project to make those indexable by search engines, and we just haven't had a chance to prioritize that project yet. But that's definitely on the radar, but it just requires quite a bit of technical work to make that work.

**Jerod Santo:** Yeah. I mean, that'd be pretty cool for public ones, because then it would double as an indexable forum.

**Alya Abbott:** For sure.

**Jerod Santo:** Because a lot of those conversations become kind of canonical resources, or they could be, but they are lost to the ether. But if they were actually indexed...

**Alya Abbott:** Yeah. One thing we do a lot is linking to conversations. So you can link either to a conversation, or even to a particular message within that conversation... And so for example, when we, say, file an issue for a Zulip feature, we'll generally link to a conversation where we had some initial brainstorming discussion of that feature. And so when folks are working on it, they can get that extra content, and context. And then also, if they have a follow-up question, they can just pose that question in the same conversation, and continue from where it left off. So that linking does make some things easier to find.

**Jerod Santo:** So one thing you might not know, Alya, about Adam, is that he is an avid homelabber. And so what would a migration look like to the self-hosted? If Adam were to become our system administrator, and run our Zulip community out of his homelab...

**Alya Abbott:** Yeah.

**Jerod Santo:** ...what would that look like?

**Alya Abbott:** Yeah. So it's pretty similar, except for you would skip the part where you email us, and \[unintelligible 00:55:40.24\]

**Jerod Santo:** Okay... One last step. Even easier, Adam.

**Alya Abbott:** Exactly. Yeah, we have an installation guide that is pretty straightforward. We really do work hard to make it easy to self-host Zulip, and also make the installation process as easy as possible... Really smooth upgrade process when the new version comes out. So it's definitely a priority for us, and there's detailed documentation on how you need to do everything. So it should be very doable for you if that's something that you enjoy. Yeah.

**Jerod Santo:** \[00:56:14.19\] You just have a Docker image?

**Alya Abbott:** Yes. Sorry, this is not the part that I personally work on nearly as much as some other things...

**Jerod Santo:** That's okay. All good.

**Alya Abbott:** But yes.

**Jerod Santo:** Did you hear that, Adam? They've got a Docker image. Okay...

**Adam Stacoviak:** Mm-hm...

**Jerod Santo:** And what aspects of Zulip Cloud, the hosted version, are completely inaccessible to you as a self-hoster? Are there specific features that you will never be able to use in self-hosted? Or is it all there, but you have to worry about backing it up and making sure it's up and all that kind of stuff?

**Alya Abbott:** It is all there. So Zulip is 100% open source.

**Jerod Santo:** Nice.

**Alya Abbott:** There's nothing that we're locking away from self-hosters. If you self-host - so we do offer paid plans for self-hosters.

You don't have to sign up for one, but they're an offer. And the kind of two major things that we're providing with those paid plans - so one is mobile push notifications. So the way that App Store policies work, both on Android and iOS, is that if you have a mobile app, which our apps are also 100% open source, but you probably want to use the app that we put in the Play Store, or the App Store, rather than kind of rolling your own, which is a whole thing...

**Jerod Santo:** Yeah...

**Alya Abbott:** And so the way those App Store policies work is that a single app can only get push notifications from a single server. It's kind of like an anti-spam security measure on their end. And so for your self-hosted server to send notifications to the Zulip mobile apps, what you do is basically bounce that traffic through our server, and so that's a service that a lot of folks who are self-hosting choose to pay for as part of our plans.

And then the other piece is just support. So if you want any kind of support with running your Zulip server - so there is community-based support in our development chat. So folks do come by and get some help there. But if you need SLAs, or if you need something more than just asking a question on chat and seeing if folks are around to reply, then we do have support offerings as well. So those are kind of the types of plans for self-hosted organizations.

**Adam Stacoviak:** I did find a repo, and I know that you may not be able to go deep on this; if you can't, it's okay. On your Zulip org, on GitHub, it's docker-zulip. So I assume this is official. It's containing configurations, images etc. for all of it. There's a docker-compose file there, so...

**Alya Abbott:** Yeah, so I guess the way it's described in our docs is it's an officially supported experimental Docker image.

**Adam Stacoviak:** Okay...

**Jerod Santo:** Official, yet experimental. So you know, tread softly, but... Officially.

**Adam Stacoviak:** 102 lines in this compose file. I mean, that's a lot of lines. So you've got SSL certificates set up for folks, you can set up a custom CA certificate if you want to, you can point to a different Git repo... So you can point to the official, or you can have your own fork, which I think is pretty cool... And you're just a docker-compose away from running Zulip locally.

**Jerod Santo:** It sounds pretty awesome. There is also an architecture document on your docs, which I've found to be pretty good at describing the way the whole thing works, and the various parts. Postgres backend, they're using Redis and Memcached in certain areas... It's a Django web app for the backend, and then there's a single page app which is written in TypeScript - probably React, I'm not sure - for the web in-browser experience. Obviously, the mobile clients you mentioned are getting rewritten into - did you say Flutter?

**Alya Abbott:** That's right.

**Jerod Santo:** Yeah. And so they're all using that same backend API. Now, if you're self-hosted and you want to connect your phone app to that, are you just basically saying like Zulip.Changelog.com? Would we just create a --

**Alya Abbott:** Yeah, just when you sign in, you put in that URL for your server, and you're good.

**Jerod Santo:** \[01:00:17.18\] Wham, bam. What do you think, Adam? Do you want to dockerize us?

**Adam Stacoviak:** Ha-ha!

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Well, see, that's a great question, obviously... But now you have to be your own uptime for your own chat apps.

**Jerod Santo:** That's the high price of self-hosted.

**Adam Stacoviak:** That is the high price of self-hosted. I would want to compare Zulip Cloud and other ways first, but I'm not against the idea of self-hosting. I just think it takes a lot of responsibility to do so.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** I assume -- maybe you've answered this already and I was reading docs, or the docker-compose file while you said it... And if I missed it, I'm sorry.

**Alya Abbott:** No worries.

**Adam Stacoviak:** But how does your iOS/Android app work with a self-hosted scenario? Do you point it at like a URL kind of thing?

**Jerod Santo:** Yeah, I asked that one.

**Alya Abbott:** Yeah, exactly.

**Jerod Santo:** Asked and answered.

**Alya Abbott:** No worries, yeah.

**Adam Stacoviak:** Repeat yourself, please.

**Alya Abbott:** So when users log in, they'll just put in the URL for your server, and then they're good to go.

**Jerod Santo:** You just CNAME a subdomain and you're good.

**Adam Stacoviak:** Yeah. So self-hosting - yeah, I mean, you would have to have... Even if it was like literally self-hosting in the closet, or self-hosting on DigitalOcean, Render - those are two that are mentioned in your docs. We obviously prefer Fly. Fly.io. Not paid to say that, but just definitely very passionate. So I guess we can self-host on Fly, right Jerod?

**Jerod Santo:** One hundred percent.

**Adam Stacoviak:** We can self-host anywhere.

**Jerod Santo:** I just thought it'd be cool to run it out of your closet.

**Adam Stacoviak:** It would be cool, except for, I think -- I don't know if the uptime would be as good. I mean, the ping, the latency... Gerhard may have opinions about it, that's for sure.

**Jerod Santo:** It's just chat, you know?

**Adam Stacoviak:** It is just chat.

**Jerod Santo:** Worst-case scenario is we can't send each other memes for a few hours.

**Alya Abbott:** I mean, we've had folks self-host Zulip air-gapped, like on a ship...

**Jerod Santo:** Oh, really?

**Alya Abbott:** ...where they weren't going to have connectivity with the wider internet, just as there's chat within that ship community...

**Jerod Santo:** That's cool. So if we ever decided to travel the world, maybe on a sailboat, like our friend Alex McCaw did, we could have Zulip on that sailboat with us.

**Adam Stacoviak:** That would be cool. Self-contained Zulip, and I guess local area network only, right?

**Alya Abbott:** Yeah, yeah. Might not be required if you have five people on your boat, but...

**Jerod Santo:** You could even go local machine only, you know? You could unplug that machine from the whole internet and have Zulip just on that machine, if you wanted to.

**Adam Stacoviak:** Truth.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Truth.

**Jerod Santo:** Not very useful that way, but you could do it.

**Adam Stacoviak:** Via the terminal. The Terminal app even.

**Jerod Santo:** Yeah.

**Break**: \[01:02:46.28\]

**Jerod Santo:** Well, there's a Terminal app.

**Adam Stacoviak:** I haven't seen visuals of this yet. How cool is this Terminal app? Have you seen it, Jerod?

**Jerod Santo:** I'm excited for a Terminal app. I think that's very hacker. I like that.

**Alya Abbott:** Yeah, if you go to Zulip.com/apps you'll see a link to it.

**Jerod Santo:** There you go.

**Adam Stacoviak:** Okay, Terminal beta... Cool. It's very TUI-like, Jerod. Obviously. It's an application.

**Jerod Santo:** I do like TUIs. It's an official Terminal client, written in Python. It seems like Zulip is almost entirely written in Python, except for that Flutter part and that web app, of course, has to be TypeScript... But you guys have Python roots?

**Alya Abbott:** Yeah, Zulip is one of the first major projects to be using Mypy static typing in Python. So we're engineers, we're part of developing that.

**Jerod Santo:** Awesome. I'm just staring at your Terminal UI now...

**Adam Stacoviak:** Same.

**Jerod Santo:** I've seen a squirrel, and I've become distracted. I forgot to continue talking to you.

**Adam Stacoviak:** What I'm seeing on the side though, if I can talk through a little bit - and see if you're following me, Jerod - it seems like you've got the channels, of course, and it seems like those are topics beneath it, potentially... Obviously, it's not as full-featured as an actual web UI, or an application UI. Do you find that people actually use this Terminal app a lot? Is it one of the primary client set that you have in your stats? What do you think the usage might be?

**Alya Abbott:** I don't have a number in handy for you. I mean, folks do use it... Definitely not as much as the other clients, but for sure. I guess philosophically, I would say one piece of it is that - you know, we've talked about just how much time folks are spending in chat... And so having that chat experience feel pleasant and natural, and do what you want I think is really, really important. You don't want to be annoyed and frustrated by something in an app you're using every day. So we do believe in giving folks flexibility and options and configurations and different ways to experience Zulip that matches well with their workflows. And I would say having a terminal app as part of that - for some folks, that is really the natural way for them to engage with a piece of software, and it feels really smooth in kind of how they want to experience it. So I think that's really valuable, just because people are different. We can't make an app that is just one way, and works perfectly for everybody. There has to be flexibility for folks to engage with it in different ways.

**Jerod Santo:** If we can use this GitHub repo as a proxy for usage, I would say there are people using this. It has over 600 stars, but most notably 871 merged pull requests, and 165 open pull requests. So people are working on this. People are collaborating on this. And of course, people only work on and collaborate on software if it's useful, and being used by folks. This is not an afterthought. This is very much an officially supported thing, with 77 contributors, so pretty cool.

**Alya Abbott:** \[01:09:58.04\] Yeah, and we had multiple interns working on it this summer, so yeah, it's definitely interactive, and...

**Jerod Santo:** That's awesome. Tell us about the team. Tell us about the company, and all the people involved.

**Alya Abbott:** Yeah, so we have a pretty small core team of folks who are paid \[unintelligible 01:10:14.20\] to work on Zulip. And we do think that's really important kind of as part of our model, that there is a team of really talented expert engineers and other folks for whom this is their day job. It's really hard to run a project where it's kind of a side gig for everybody.

So with this core team, we've also invested a lot into making it really easy for folks to get started contributing to Zulip. So there's been a huge amount of investment into creating the space for a really active, really lively community around it as well. And that comes in terms of tons and tons of documentation... I think you saw some of our production documentation, there's also tons of contributor side documentation from, as you mentioned, how systems work, but also just the contribution process, what a good pull request looks like for us, and everything about that process. And that's really something that we've put a lot of thought into, like what is that process of contributing, and how do we make that a really excellent experience both for us in terms of kind of reviewing the work, as well as for the contributors themselves, and make that a really great, positive experience, a great learning experience for folks...

For example, with a team on the order of like 15 paid team members, we had 124 people contribute to our last major release. So that's like around a six-month cycle. So it's a lot of folks who are either doing -- some of them are doing kind of a formal internship program with us... We've been participating in Google Summer of Code for a number of years now... I don't know if you're familiar with it, but basically Google funds internships for open source projects, as well as kind of managing that overall structure of helping folks find projects to work on. So that's been amazing for us. We have generally -- most years we have about 15 to 20 interns, most of them mentored by kind of alumni of the program, or other community members... And that's been another really great way for us to bring folks into the community.

So yeah, Zulip is open source, not just in the sense of like the code being open, but really just in our whole model of how we develop the product, and how we engage with contributors, and how we engage with our users.

I guess one of our folks who joined recently, he started out as an intern, and then joined as a full-time team member, and he commented that he was surprised when he got added to kind of all our private company channels, just how little traffic there is in those channels. He was thinking that -- when we were giving him feedback on things he was working on, maybe we're like somewhere off on the side discussing that amongst ourselves, and then providing the summary version... He was like "Oh, wait... No, that's not how it works." I was like "No, no, no. Yeah. If we're talking about how the product should work, we just talk about that in the open, and that way everybody can kind of understand the decisions, can contribute to the decisions..."

We're very non-hierarchical in terms of it's really about what your ideas are, and how clearly you communicate them and explain to them, not what your title is, or how long you've been involved with Zulip, or anything like that. It's really about kind of working together to come to the best decision we can about how something should work. Yeah, let me know if I didn't quite answer everything, all the parts of your question, but...

**Adam Stacoviak:** Has she answered your question, Jerod?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** \[01:13:51.09\] Okay. What's stopping you from - or have you considered - raising funds? I know you had grants in the past, but I'm not sure what your angle is. I mean, there's obviously this idea of commercial open source companies out there... We're very anti "Rug pull, not cool" here around these parts, which means "Don't change your license once you've gotten to critical mass, because it's against your future business objectives." Hopefully I paraphrased that well enough for you, Jerod... I think there's an opportunity, and I'm just curious, have you? Why haven't you? What's the status on that front?

**Alya Abbott:** Yeah, absolutely. So we have intentionally not raised VC money, and do not plan to raise VC money. In terms of the business model, what we want is just to build a sustainable company on top of this open source project. So we've discussed some paid plans we have on the cloud side, on the self-hosted side, services we can provide... And so that's really our strategy, to have our users pay for the software, and then that funds the development of the project and the product. And kind of a key reason we don't want to go the VC route is that we feel that kind of misaligns the incentives. There's a kind of inherent misalignment of incentives.

So for us, we're not going to take 100 swings at this. We're not going to try to build 100 different products and see which ones land, and abandon the ones that don't. We really are building Zulip because we think it's a better way to work, and we're really, really committed to making that around for our users for the long term. So as I mentioned, we still have users from 2013 who are on Zulip now, and we want that software to be around for the long run.

And so we want to just take that one single bet and make it work. Whereas VCs, their incentives are -- they're looking for the next Facebook, your next giant company that just explodes, and they're willing to take big risks in order to have that probability of a really remarkable, amazing return. Whereas for us, we want to take very small risks, and have a very high probability of success, without necessarily aiming for that galactic, outsized return. Our main priority is really to get to a point where we're making enough money to really continue to develop the software, and have the staffing and the team that we want... And it doesn't have to be stratospheric. And of course, we would like to reach as many people as we can, and we think it can benefit lots and lots of different kinds of organizations... It's a huge market; there's definitely tons of opportunity. But just the kinds of risks we're comfortable taking to get there are very different from the kinds of risks VCs would feel comfortable with taking to get there.

**Adam Stacoviak:** What if that's not true?

**Alya Abbott:** Which part?

**Adam Stacoviak:** All of it. What if there are venture capitalists that align with open source? ...which is becoming a thing. What if there are venture capitalists that see your idea as the way, and they want to fund companies that have pry-off-my-cold-dead-hands aspects to open source? Would your tune change?

**Alya Abbott:** Well, I think it's not just about open source. I think there are now starting to be VC firms that are focused on open source, and really buy into that model... But it's also just the structure of how you do that investment. Do you try to hire up really quickly, spend tons of money in marketing, even if the return is not there, but just to get that growth curve? What are you trying to do, and what is your strategy to get there? I'm not going to tell you 100% never in the next 100 years we'll take VC money. We're a small company. We do, to some extent, make decisions about things when we need to make them, not planning things for 50 years ahead... But that has been our strategy so far, and we've not been approached by a venture investor who we think would be completely different from all the other venture investors such that we would start thinking about it.

**Adam Stacoviak:** \[01:18:15.11\] I think the reason why I come with those questions is less to challenge you, by any means. It's like zero about challenging. And it's more like, if Zulip is the best, and it is open source, and it is superior in so many ways, in so many models even of how you can use the software; not just in your cloud or in the self-hosted version. The exporting, the non-fettered access to it, to be able to move, and all those things... If it's superior, I would want to -- if it were me, I would want to do all I could to ensure everyone could use it more. And the way you get there - it's generally the reason why people raise money, is not because they literally just want money, it's because they can leverage that money as a resource to go faster to the roadmap. And we talked earlier about Flutter, we talked earlier about some different areas... And maybe you're slow and steady, and that's okay. And there's nothing wrong with that. I just wonder if a little funding that was in alignment with your morals, values etc. towards open source, the way you run your company, if that money didn't challenge those values, if things would change. Because if you truly are better - and we've seen even in our own Slack a person say "Infinitely better than X." So we hear that ourselves even. If that's truth, then I would want to do all I could to get that truth to many people.

**Alya Abbott:** Yeah. And we're definitely -- so we're not currently raising money, but we definitely are currently exploring kind of different strategies on the go to market side, and that's something that we're thinking very actively about, the sort of how do we increase that reach and grow faster in terms of kind of finding different ways to introduce folks to Zulip, and to reach more people. So it's definitely a major priority for us right now.

**Jerod Santo:** Yeah, that has to be one of your biggest challenges. 9 out of 10 people don't know who you are. Right?

**Alya Abbott:** Yeah, no, it's true. It's true. It is a very big challenge.

**Jerod Santo:** No offense, but I mean even --

**Alya Abbott:** For sure, yeah.

**Jerod Santo:** Most things, 9 out of 10 people don't know what it is.

**Alya Abbott:** For sure. Yeah. Yeah. I mean, there's tons of things they're trying, and...

**Jerod Santo:** I like the free for open source education etc. that you already discussed. What are some of your other ideas? What are some of the things you're thinking of trying to get more people to know what Zulip is, to make Zulip a household name?

**Alya Abbott:** I mean, some of them are kind of standard things. Paid advertising, going to conferences and various kinds of events, and sharing Zulip that way... One thing that -- another direction is kind of content. So we've had blog posts on various topics, we're starting to -- you know, one of the things that I talked... You can probably see my excitement about it - it's this kind of side of community management, and getting folks engaged in an open source project... For example, we're working on partnering with some organizations on blog posts around that kind of thing... And so just kind of getting the name out there in whatever way... Because I think, as you were saying, kind of the brand recognition and just kind of awareness matters. People aren't constantly in the market for a new team chat, but we want to be top of mind when they are starting to think about it, and when it does come up.

But yeah, I would say we don't necessarily have kind of like something unique other than we do have this open source angle, and so engaging with community and like the open source community more broadly, and sponsoring open source projects is definitely one angle for us that we're investing in.

**Jerod Santo:** Well, it's one of the hardest nuts to crack, and everybody out there is trying to crack that same nut, aren't they? And so there's a lot of noise, there's a lot of competing voices, and you definitely have a lot going for you. I think leaning in on community and open, and I think moderation, as Adam said earlier, as you guys continue to flesh out the product - those are all good strategies. If there was a magic carpet that you could go on, that would automatically get you to brand awareness, of course, we'd all just hop on that magic carpet.

**Alya Abbott:** \[01:22:27.00\] Exactly. But in general, our style is just try to be really -- like, as clear and direct as we can. That's really our focus for all our kind of marketing and so on. We think the value is there for folks, and if we can communicate that clearly, we don't need to get super-marketingy, super-salesy. Just... Yeah, tell folks what's there.

**Jerod Santo:** Very cool. Adam, anything else from you?

**Adam Stacoviak:** Just to add onto what you're saying here, Jerod, I think probably -- without digging into the data, I will hypothesize that probably the biggest challenge first is awareness that you exist. And then obviously, once they realize you exist, the opportunity for superior feature sets, then I would say that the very next thing is like "Okay, now what?" Which is our requests for information on hypothetically what it would take to move, what it would take to go from a Slack or a Discord.

I feel like if you could do content around that subject, not just documentation, like how to, but like good stories of folks who've moved, and their journey, and to demystify the scares and concerns... Like, my main scare is - is that a proper adjective? I don't know.

**Jerod Santo:** I'll allow it.

**Adam Stacoviak:** Or I guess anxiety point is - will we lose the people that we have in our community? Will they bounce? If you can showcase what's on the other side of the wall, rather than me assume, as somebody who is not happily, but happily using Slack, given the things we've already said... I still like Slack; it's still amazing. It's just, they've got warts for people like us, communities like us. I feel like that's the content I would personally -- I would look at the data and I think that would be the hypothesis... Get awareness, show off the amazing feature set that really captures 80% of who likes you most, and then show how easy it is to move. And almost make it like "You should be doing this. It should happen today. We can help you." And if there's "money to invest", in quotes - it could be time, it could be people, it could be people hours - is to guide and assist certain organizations on that path.

**Alya Abbott:** Yeah. And some of what you described, we do have case studies on our site where a lot of folks talk about starting initially with something else and then moving over to Zulip, and sort of that experience. But parts of what you've said, you're kind of reading off of the to-do list I was working on yesterday.

**Adam Stacoviak:** Just yesterday. Okay, cool.

**Alya Abbott:** \[01:24:55.13\] Literally just yesterday, yeah. I was thinking -- you know, we have some content in our help center about that migration path, but we definitely need more clarity on just kind of bring all those pieces of information together, and like coming from different kinds of tools here, "Here are the steps you take", and just... Yeah. Folks are busy, there's a lot going on here... To the extent that we can make that easier for people, it can make a big difference.

**Adam Stacoviak:** If I had to divide my time up into fifths, I'd take two fifths of that time and dedicate it to that kind of content. If not more. Because fourths is like, whatever, 25%, 25%... I mean, that's pretty easy, one fourth. I feel like two fifths sounds better to me. Two fifths of my time would be focused on awareness and showing off the better world, the FOMO.

"You're missing out. On freedom. Control. Access. Enjoyment."

**Jerod Santo:** Privacy.

**Adam Stacoviak:** Privacy. And then obviously, your dev team and engineering teams can be focused on all the surface area. Flutter, that migration. Finishing out those applications, polishing the peripherals.

**Jerod Santo:** Your dev team does a great job on documentation, compared to what I've seen in a lot of projects. We see a lot of open source projects - the documentation is really good, the readmes are very deep, and detailed, and organized, thoughtful... And so obviously, you want your dev team to be devving. That's what they're there for. But as much as they can write about what you're doing technically, decision-making, architectural stuff - not just in documentation form, but in content form - I think that would pay off dividends as well... And obviously, it can also double as documentation in a certain way. Cool.

**Adam Stacoviak:** What's next?

**Jerod Santo:** Exactly. What's next?

**Adam Stacoviak:** What is next, for you, the listener? Are you going to go to Zulip.com?

**Jerod Santo:** You've got the .com. It's a big deal.

**Adam Stacoviak:** It is a dot com. It is a big deal.

**Jerod Santo:** Yeah. It's a five-letter .com.

**Adam Stacoviak:** Free, open source, cloud or self host... Unfettered. Do it today.

**Jerod Santo:** And if you think we should switch to Zulip, hop in our Slack and tell us. \[laughter\] We'd be happy to at least try that Docker image. I mean, I'm going to give Adam a to-do, you know? See if he can get it running on Docker. On your home lab or Fly, and just toy around with it. See how it feels. Try it out for size, you know?

**Adam Stacoviak:** Yeah.

**Alya Abbott:** I mean, or if you want to just try Zulip, it literally takes less than two minutes to create an organization, Zulip Cloud, and then you can just poke around and experience it for yourself.

**Jerod Santo:** It's almost too easy, Adam. It's almost too easy.

**Adam Stacoviak:** Yeah. I feel like we should try cloud out first. And if we like how it feels, take the next step.

**Alya Abbott:** Yeah.

**Adam Stacoviak:** That's half the battle, right? Because sometimes that switching of the UI and everything, it can be jarring. The ideas and the features that may be there, but maybe it feels weird. I don't know.

**Alya Abbott:** And then give us feedback. That's the other thing. If there's anything that feels off, or feels confusing, just come by in the development community and tell us and we'll try to fix it.

**Adam Stacoviak:** Very cool.

**Jerod Santo:** Sounds good.

**Adam Stacoviak:** Well, thank you for this time. Thank you for going through all the details with us. It was awesome.

**Alya Abbott:** Thank you for the great set of questions.
