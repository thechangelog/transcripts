**Jerod Santo:** Well, we have Ben Ubois back, the creator of Feedbin. Ben, February 17th, 2017 was the last time we talked. What's up, man?

**Ben Ubois:** Yeah, it's been a long time, and I think a lot of things have happened since then. Good to be back though, thanks for inviting me. It's good to see you --

**Adam Stacoviak:** For the first time.

**Jerod Santo:** For the first time.

**Ben Ubois:** Yeah.

**Jerod Santo:** Back then we were Skype audio-only. Now we have full video, we get to see each other's faces, and... It's kind of weird getting to know somebody in-depth for a couple of hours and having deep conversations about their work, their life, their thoughts... And then I think you and I emailed back and forth once, when Feedbin wasn't working like I wanted it to... And it ended up being my mistake; I think I had malformed XML going on...

**Ben Ubois:** I remember that.

**Jerod Santo:** ...and I was like "Ben, why is your thing broken?" And he's like "Actually, your thing is broken." And he was right. But it's weird. Then years go by, and we haven't talked, so... Great to catch up. But just a weird phenomenon, I guess, of podcasting era of life.

**Adam Stacoviak:** Yeah, I would say that's a podcasting thing... Because we talk to people a lot, and then we don't talk to them again for potentially a year, or more, in this case...

**Jerod Santo:** \[00:04:02.03\] Yeah.

**Adam Stacoviak:** New long-time listeners will know that we recently have begun to say for be-backs like Ben - we call them be-backs, people who come back to the show.

**Jerod Santo:** Right. Like Schwarzenegger, "I'll be back."

**Adam Stacoviak:** This is the first time we've seen you, so this is a new thing, I'd say, over the last two years. So new long-time listeners of the last two years will now hear us say this here and there during our show, where "Hey, Ben, it's the first time we've actually seen you, but we have talked to you before."

**Ben Ubois:** Yeah. Well, we can talk about new stuff, you know... We don't have to rehash anything...

**Adam Stacoviak:** Well, we're gonna talk about RSS, so we can't avoid that, right? \[laughter\]

**Jerod Santo:** We were talking about RSS the last time...

**Ben Ubois:** RSS is boring... We can gloss over that...

**Adam Stacoviak:** They say that. It doesn't seem that's the case though.

**Ben Ubois:** I heard that it's dead actually, so we should just let it go.

**Adam Stacoviak:** Yeah, it's definitely dead.

**Jerod Santo:** How many deaths has it died, is the question. I mean, you had the one big death which was when Google Reader shut down; that was RSS's biggest death.

**Ben Ubois:** Yeah.

**Jerod Santo:** But that was like when Feedbin started, right? Around the same timeframe. So for you, that was kind of like a birth.

**Ben Ubois:** A rebirth, yeah.

**Adam Stacoviak:** Well, just to be clear too, the last show we did with Ben, the first and last - I guess most recent and first - had "RSS resurgence" in the title. So is it a re-resurgence? I'm not really sure.

**Jerod Santo:** Or we're just here to talk about it again. We will find out. Well, let's talk a little bit about Feedbin. So we had you on the show to talk about Feedbin the last time, we talked about RSS... Long-time Feedbin subscribers. I'm a long-time Feedbin user. Still am. So five years...

**Adam Stacoviak:** I'm a subscriber, less of a user.

**Jerod Santo:** I'm like a daily user, which is an in-browser, also API-style, paid-for service that is an RSS reader. I'm sure you can describe it better that I am. I use it with an app on my phone, which is not built by you... I think I still use the Reeder. Yeah, Reeder with two e's...

**Ben Ubois:** That's a good one.

**Jerod Santo:** ...to connect to Feedbin. And then I use a browser tab. You know, just get a little bookmark, open up Feedbin, read my feeds... And have been doing that happily ever since. Adam also signed up, I think probably around that same time, because we convinced him to check out Feedbin.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** But Adam, you don't use it.

**Adam Stacoviak:** Well, I paid for it...

**Jerod Santo:** \[laughs\] You pay for it, but you don't use it...

**Ben Ubois:** I was gonna say, as long as you're still sending a check...

**Adam Stacoviak:** Literally since 2017 I've paid $30 a year for it, so...

**Jerod Santo:** Right. So you're still paying him, but you don't use it. So I guess we can do a little bit of like Yin and Yang here. We have a daily user and a non-user. And I guess part of this conversation around RSS is like why do certain people love it, but most people don't use it still to this day; what are the problems with it as a technology, where does it thrive, where is it continuing to thrive, or starting to now? And some of this - I mean, we have now Feedbin authors, we have a creator of an RSS reader service/app, we have users of that app, one person who uses it faithfully... And the other one who's kind of fallen off, which happens, from time to time, with software. It's like, well, let's psychoanalyze Adam - why do you not use Feedbin, now that Ben and I have you cornered?

**Adam Stacoviak:** Well, I shared some of this with you, Jerod, in terms of the pre-call for this... And I think it's because my feeds are overwhelming. It's not even Ben's fault. It's not the application's performance fault... In fact, Feedbin is amazingly fast. I cannot believe how fast this thing is. It's just so fast. I mean... Fast.

**Jerod Santo:** Is it fast...? \[laughs\]

**Adam Stacoviak:** So it's not even Ben's fault or Feedbin's fault. I think it's just the fact that RSS is - even though I like it and love it, and as you know, Jerod, our livelihood is dependent upon the fact that an mp3 gets delivered on the internet via an RSS feed...

**Jerod Santo:** Right.

**Adam Stacoviak:** ...despite my love for it, I still can't find a way to truly reap the benefits, I suppose. And I would say that's an \[unintelligible 00:07:43.25\] issue, like "What should I follow?" Because I'm following things that are overwhelming. Axios, Crunchbase News... I'm just pulling some out there. Daring Fireball is in there. Forbes Innovation... So not Forbes at large, but Forbes Innovation, so what's happening in tech...

**Jerod Santo:** \[00:08:02.29\]Right.

**Adam Stacoviak:** Hacker News, some stuff from Indeed's engineering blog, Kottke, I think that's just in there by happenstance... The Mozilla Blog...

**Jerod Santo:** Kottke? He's done.

**Adam Stacoviak:** Is he? See, I didn't even know that. Geez.

**Ben Ubois:** Taking a break.

**Jerod Santo:** He's taking a break. I'm still subscribed as well. I hope he comes back at some point. He's on hiatus... Indefinite hiatus at this point. We'll see what happens.

**Adam Stacoviak:** The GitHub Blog, the Loop, the New Stack... A couple individuals like Marco Arment, and Matt Mullenweg, Matt Rickard is on my list...

**Jerod Santo:** Right. Which we'll talk about as well.

**Adam Stacoviak:** CSS-Tricks... We're gonna have Chris on here shortly for the legacy of CSS-Tricks... But I think the things I pay attention to are not a lot of signal, in terms of like it's --

**Jerod Santo:** A lot of noise.

**Adam Stacoviak:** Right. It's good publications; I'm not saying these are bad publications by saying they're noise, but it's a lot of information. More than I can keep up with, so I abandoned it. Probably similar to the people who subscribe podcasts and get too many in their feed and they're like "Ah..."

**Jerod Santo:** Right.

**Adam Stacoviak:** The same phenomenon happens there as well.

**Ben Ubois:** I think that's really common, the getting overwhelmed thing. I hear that a lot. And you're saying it's not Feedbin's fault...

**Adam Stacoviak:** It's not Feedbin's fault, yeah.

**Ben Ubois:** ...but I don't know. I mean, there could be something in there to nudge you in a direction, or something. I personally don't like that, because I wanna stay away from an algorithmic timeline, or suggested content, or that sort of thing... But you know, I do think that's kind of the thing that a lot of the newer services are trying to address, like Facebook or Twitter, by just showing you what they think is gonna keep you engaged.

**Jerod Santo:** Right.

**Ben Ubois:** But my suggestion - I was just talking to a friend about this the other day - is just start with the really infrequently updated stuff. Honestly, you don't need to subscribe to anything that does news as its business, because it's gonna be instantly overwhelming. And that's a perfect thing to -- there's gonna be new stuff every day, you can always just go to their homepage when you feel like it and see what's new. But the people that post once a week or once a month - that's the sweet spot for RSS.

And now that I think about it, there is a feature that could help you in Feedbin. If you go to your subscriptions page, you could sort by post volume and then just unsubscribe from the top 50%. Cut your list in half just immediately.

**Adam Stacoviak:** \[unintelligible 00:10:29.28\]

**Ben Ubois:** Yeah. \[laughs\] I mean, I already know it's Hacker News...

**Jerod Santo:** Forbes...

**Adam Stacoviak:** Well... I don't have Hacker News on my list...

**Jerod Santo:** I thought you said it was.

**Adam Stacoviak:** HackerNoon, sorry. If you heard Hacker News --

**Ben Ubois:** Oh, HackerNoon. Okay, okay. That's different.

**Adam Stacoviak:** The Verge is in there, Axios is in there, Wired is in there, The New Stack... FreeCodeCamp? Come on... I can't let FreeCodeCamp go away.

**Jerod Santo:** So let me just first add my Amen to what Ben is saying... And I also use it in that fashion. I've told you this, Adam... It's kind of a "You're holding it wrong" problem, which is common. And one that I learned by experience is when I had Hacker News in there, when I had The Verge in there, I would just quickly get overwhelmed by how many times they post. So I did what Ben is describing. I kind of did it ad-hoc, as I got -- I'm like "Ahh, I'm so sick of these", and then I go unsubscribe from it.

So anything that publishes news or aggregates news is probably not worth putting in there. You want individuals, you want infrequent authors... I subscribe to a bunch of individual engineers; they may not write but once or twice a year, but I don't have to worry about that, because that one time that they publish, there it is.

So maintaining the signal to noise ratio is, I think, a big part of what makes an RSS reader's experience good or bad. And Ben, one thing -- I mean, I do not want algorithmic timelines in Feedbin. If you switch to that, I'd probably finally stop paying you money... \[laughter\] Adam wouldn't probably quit using it, and still pay you money, but...

**Adam Stacoviak:** \[00:12:08.12\] I'd still pay you...

**Jerod Santo:** Yeah, which is nice... But what might be a feature, if you're thinking - and I'm curious if you put thought into like... I haven't been a first-time user for years; like that first run, like getting started... Because a lot of the problem is like "Who do I subscribe to? What do I see when I first sign up? I've got an empty feed here. What do I do about it?" I'm sure you've put some thought into those things... But I'm curious, if you could have nudges in the UI or in the app that says "Oh, you've just subscribed to this publication. It publishes 12 times a day. Are you sure you wanna do this?" And you can say "Yes, I'm sure", and then you just go ahead and let that happen.

**Adam Stacoviak:** Yeah, classify as a high-frequency free feed, essentially. Like, "This is a feed that's high-frequency."

**Jerod Santo:** Kind of like putting in some -- maybe not best practices, but things that generally are playing to RSS strengths, and not shooting yourself in the foot... Even just like little messages that says "Hey, have you thought about that kind of a thing?" or "Is that too much personalization, or too much Ben's opinion in the software?"

**Ben Ubois:** Yeah... I mean, that is another thing that I just wanna be so hands-off and not presumptuous in any way. But it does lead to these kinds of situations, and probably is not the best thing to do from a business standpoint. I haven't spent any time growth-hacking, so it's leaving money on the table.

But yeah, as far as getting started, definitely low-volume is great. But also just put in what you're passionate about. Don't subscribe to things aspirationally. This isn't the year you're finally gonna learn Go, so go ahead and unsubscribe...

**Jerod Santo:** \[laughs\]

**Ben Ubois:** But just, you know, the stuff you actually do already love.

**Adam Stacoviak:** I guess, since you mentioned business, what is the state of this application to your focus? I wouldn't say importance, but your focus. Because we may suggest during this show you do things that you're just unwilling, and I think this might be the larger problem, or thinking \[unintelligible 00:14:11.28\] which is "Is there enough enterprise incentive?" And I don't even wanna use the word "enterprise". Just business incentive for someone, if it's not you, Ben, if it's someone to focus their efforts on iterating this user experience to give RSS a chance. And I think you have put the best foot forward of an indie dev.

There's other things out there like Substack and folks who are obviously pushing the creator and email and RSS ball forward, but is this worth enough in terms of a business to put this effort in? Like, what's the state of the business for you, the application for you? Is it enough of a livelihood for you to even give more effort to?

**Ben Ubois:** Oh, absolutely. It's my full-time job. I think about it every day, even if I don't work on it every day... And I'm still a super-enthusiastic user of the product. I mean, it's unfortunate - there's a lot of great apps that work with Feedbin, and I feel like I just can't use any of them, because I owe it to the business to just always use my own thing. And I love it.

**Adam Stacoviak:** So you'd benefit them from these improvements; you'd benefit from -- so I think about Shark Tank when they say no to certain deals. They'd say "That one would take too much marketing to get to market." Or "That would take too much X to really get the scale that a shark might want to do the deal." And I think of it kind of like here, this idea that Jerod just shared with you, is like, just share the frequency.

There's certain things about the experience of using RSS, whether you're someone like me, who's well aware what it is, how the technology even works, one. And two, we're podcasters, so we actually leverage the technology as part of our business, deeply. These are things that can on-ramp folks into the RSS experience. Even discovery, your own index of like "Hey, of all the people that use Feedbin, in this category here's the top five links of this week." Things that get people into the world of consuming content, which is powered by RSS.

\[00:16:16.13\] So they don't really have to care about RSS theoretically. They have to care about how -- you know, subscribing to content is really what they're asking for, which really is RSS, right? But is it enough for you to kind of keep evolving? I didn't know it was your full-time job. I wasn't aware. Which is awesome, because that makes me really happy, because I want you to do well.

**Ben Ubois:** Yeah. It's been almost ten years now. It'll be ten years next March.

**Adam Stacoviak:** Wow...

**Jerod Santo:** That's great.

**Ben Ubois:** Yeah.

**Jerod Santo:** Is it growing? Would you say your customer base continues to grow, or has it just reached a threshold that it can support?

**Ben Ubois:** It is sustainable, and it has been that entire time. You know, things happen, and there'll be like a lot of new people interested, and signing up... There was a thing two years ago where everybody was staying at home all the time, and there was a lot of news, and that was a huge growth period, for instance... And then it's receded somewhat since the beginning of the pandemic highs... But yeah, it's still a very good place business-wise.

It's never really made sense to grow it beyond me and the designer I work with, but I think there's opportunity there. If I just wanted to chase the business, that's definitely something that can be done. There's other RSS readers that are definitely going hard in that particular direction, of just making like an enterprise play. And you know, I admire that from a business perspective, but then I despise it from a product perspective.

**Adam Stacoviak:** What's the position of disposition? Why do you despise it, or what about it do you despise?

**Ben Ubois:** Well, because it wouldn't be something that I would wanna use anymore. It would just be about making the money, I think. And there's definitely a lot of great enterprise tools that I would enjoy working on, but a new service for businesses is not one of them.

**Adam Stacoviak:** We mentioned Matt Rickard... One of his points was essentially business incentives work against RSS, which may be directly correlated to that... How do you say "despise"? Is it disposition? Obviously not. But how do you say "Towards your... Despise?"

**Jerod Santo:** His disposition is that he's despised. \[laughs\]

**Adam Stacoviak:** Is it disposition? Okay, I'm like, "Gosh, am I jacking my English up here?" Yeah, so there you go...

**Ben Ubois:** Well, I know what you meant... But yeah, I don't think that's the right word.

**Adam Stacoviak:** I don't think it's the right word. It doesn't sound right. But Matt Rickard was on the show a while back, episode 463, and he recently penned his thoughts on RSS... Which he does; he blogs a lot, so he shared some bullet points... And one of them was "Creator incentives work against RSS, and business incentives work against RSS." I think that's kind of what you're saying there. If you go too hard on the paint as an enterprise or as a larger business around RSS, it might be a product that you don't think should be out there for the creator economy, the creator world... Is that what you're saying? Because it doesn't match the user, the how things work. It's just too enterprisy, basically, is how I grokked what you said.

**Ben Ubois:** Yeah. Well, I mean, the way I interpret Matt's points there - more like what's the incentive for larger businesses to publish RSS.

**Adam Stacoviak:** Oh, I see.

**Ben Ubois:** Like, how do you monetize your feed?

**Jerod Santo:** Right.

**Ben Ubois:** And yeah, I think that is an issue.

**Adam Stacoviak:** That's true. If you only consume RSS, you're going to be not hitting their ads, you're not gonna be on their pages... You're sort of circumventing all the things they put in place, which is the ad marketplace.

**Ben Ubois:** Yeah, and people do things -- you can have like a paid feed, but that's a lot of overhead to manage. You can post excerpts, and then you have to click through to read the full thing... I think that can be a good experience for the right content... But yeah, business incentives is something I don't think about at all, because I think there's enough interesting content out there from individuals that have more to gain in terms of creating a personal brand, or that just wanna share what they're working on.

**Adam Stacoviak:** \[00:20:26.04\] My pushback on that business incentives not aligning would be "Well, these businesses use Twitter." And Twitter is essentially an excerpt of whatever they're putting out there. It's awareness about the content or the idea being shared. So if these businesses are willing to use Twitter, then they should be willing to use RSS in a similar fashion. That is if RSS has a fluid user interface that's reliable, that's well-known. A scalable place to go, similar to the way Twitter is a scalable place to go to consume the future news or what's happening today.

**Ben Ubois:** Yeah. Well, that's something else that I think about, and one of my goals with Feedbin is to make it omnivorous. So if people only wanna post on Twitter, that's great, because Feedbin can pull in tweets. You can subscribe to your home timeline, individual accounts, safe searches, all that stuff. So wherever the content is, I want Feedbin to be able to go and get it, and put it in one place for you.

**Jerod Santo:** So when you pull in Twitter, do you pull it in according to whatever their API gives you back, or can you pull it in chronologically? I guess could you give people what they usually would want from Twitter, which is just a reverse-choronological list of the tweets from the people they follow? Or are you just like "Hey Twitter, give me the timeline for Jerod Santo" and whatever they send you, that goes in?

**Ben Ubois:** Yeah, both of those things. The way I use it is just following individual account, @ handles.

**Jerod Santo:** I see. So you don't put your Twitter account into it, you're just like "I'm gonna follow this account in Feedbin." I see.

**Ben Ubois:** Yeah. I personally do not do that, because I like it separated out by who's posting, just like RSS feed. But you absolutely can just subscribe to your entire home timeline, and then it just shows up as one feed.

**Jerod Santo:** Gotcha.

**Ben Ubois:** And I think it works really well in this context. I had always experimented with thinking about how Twitter could work as RSS... And I don't know if you remember, but --

**Jerod Santo:** They used to.

**Ben Ubois:** ...Twitter used to have RSS feeds.

**Jerod Santo:** I do remember.

**Ben Ubois:** But it wasn't a great experience, because all you got was the text of the tweet. And it didn't look good; it has all the @ junk, hashtags, all that stuff... And then I was thinking about it, and I think the key to making a tweet look good is all the metadata. You have to have the profile picture, you have to have when and where it was posted, you have to separate out all the @ mentions so they're not part of the content... And then there's also some opportunities to really expand a tweet, because now you have a whole page available of screen real estate.

And a couple of things that came to mind immediately were like "Oh, okay, we can do full-bleed images", just like write in the post body. So instead of a couple little thumbnails that you have to click to expand, they're all just right there.

One of my favorite ways to use Twitter was always about people that posted a lot of good links. Getting recommendations from somebody whose taste you like is one of the best things that you can use Twitter for. And one of the things that Feedbin does with the space available is if there's a link, it can just go and fetch the text to that article and display it alongside the tweet, so you can read the whole thing without ever leaving Feedbin.

**Jerod Santo:** \[00:24:07.16\] Right. That's all cool stuff, I think, as a reader. If we focus back in on the creation side for businesses, for even individual creators, the attraction of Twitter from a creator's perspective is the opportunity to have viral spread; the instant feedback loop of likes and replies. It's the network. You're not gonna get that with RSS feeds. So much so -- I mean, you're not even gonna get subscriber counts. Twitter will tell you how many people are following you, and that's a nice metric, right? It's a simplified metric. Maybe not the most useful metric, but it's easy to follow, and it feels good when it goes up.

RSS doesn't have those kinds of things because of the nature of the way it works, so much so that FeedBurner came along years ago, and even -- I mean, the reason why everybody used FeedBurner wasn't because they couldn't publish their own feeds; it was because FeedBurner would give you a \[unintelligible 00:25:06.22\] subscriber count. That's pretty much why people liked FeedBurner. Because they could point their RSS feed through FeedBurner and FeedBurner would give them that subscriber count, which they could then use that to attract advertisers, to feel good about themselves, to compare themselves to other people... Whatever we do with our subscriber counts, right? That ended up being kind of a black hole, because FeedBurner then got bought by Google, and it quit getting worked on... I think it still works today, but there's always these -- what if it just completely stopped doing things, your redirects all break, and now your feeds are broken... But I bring it up because it's the tractor-beam that is a little bit of analytics, a little bit of knowledge of "Who's reading my stuff?" That's what creators want.

**Adam Stacoviak:** Yeah.

**Ben Ubois:** I agree with that.

**Adam Stacoviak:** I think there's probably an opportunity for you though, Ben, because that's not what I'm seeing now. I think growth for you could be "Hey, creators, let me tell you how many subscribers you have here on Feedbin. Let me tell you what your attention span is here on Feedbin." And it's not gonna be an at-large all of your RSS feeds, but as Feedbin's market share grows, that number that represents that person's or that creator's feed becomes more and more significant, because as Feedbin's market share grows, then that means more and more people are gonna be using it... And if we paid attention to Feedbin in terms of our subscription to our RSS feeds, because you were growing, then you would get more of our attention as a creator. And we would begin to desire our audience to consume -- like, I'm looking at Jerod's Twitter handle in Feedbin now, and it's actually really good. Your content isn't good, Jerod... \[laughter\]

**Jerod Santo:** Well, I was gonna say...

**Adam Stacoviak:** Feedbin's display -- I'm just kidding.

**Ben Ubois:** He's just saying you're handsome, I think.

**Jerod Santo:** \[laughs\] I'll take it.

**Adam Stacoviak:** What's really good is he's a recent one; so we have a news edition to the show now, it comes out on Mondays... And so on the 18th, which was two days ago, you tweeted "Hot off the press", and you linked to it. And inside of Feedbin is not only your tweet, but the page you linked to. So changelog.fm, the page of the news feed... Now, one thing that is missing from that section is the actual audio, but that's probably not your fault. It might be our fault. However, the point is us as creators knowing how well this works in there and knowing that you're growing and you care about creators as well as consumers - we might put more and more effort to make our content experience better inside Feedbin, therefore giving you more market, more audience.

**Ben Ubois:** Yeah. And I think that's a good strategy. I definitely have to think a lot about the privacy implications of that once I start storing articles that get read, and how long they get read for...

**Adam Stacoviak:** Right.

**Ben Ubois:** \[00:27:58.21\] But I consider this just like an RSS reader best practice. Feedbin and many other readers actually do report subscriber counts, and the way it's typically done - the way Feedbin does it - is just in the requests header. If you look at your server logs, you'll see an X Feedbin subscriber count thing with the actual number. Now, you've gotta parse server logs like it's 1999, but it is there.

And there was a company that was trying to do this as a service almost as a FeedBurner competitor, where they would aggregate all of those RSS subscriber headers for you... I don't know if they exist anymore, but there's been attempts that have been made. Like, people who wanna attract the bigger fish to it.

But you know, like I said, I don't know that that's a great thing. Bigger fish are also like bigger publishers, with a lot of posts. And like we were saying earlier, that's not always the best fit.

**Jerod Santo:** It kind of goes against the ethos.

**Adam Stacoviak:** Yeah. Well, that's the problem, Ben, because you have personal opinions that somewhat overlap with your product opinions, and those two don't always have the best overlap in the Venn diagram. So I can appreciate your opinion, but you kind of have to wear two hats, right?

**Jerod Santo:** Yeah, but at the end of the day he's gotta sleep well at night...

**Adam Stacoviak:** Now, I'm not saying don't sleep well at night, by any means. I'm not saying that. The product can't always just be for you though. It can be for you, but it can't -- so for example, I'll take us. We're creators; I would say Jerod and I are individuals, but we have a brand called Changelog. If we wanted to have more of our subscribers use it to consume our podcasts, because it's a good web version of it, or because they use RSS feeds anyways and we wanna improve that experience, then I think that would be a net positive for us to say "Hey, you know what - one other great alternative view is 1) you can subscribe at Changelog via Feedbin, and you get our tweets, those things pull in pages of audio", all this cool stuff because it's just how Twitter works. If we promoted that, it would be a net positive for you, despite us being a high-frequency feed.

Because I've gotta imagine our Twitter, plus our podcast feeds and the news feed would be high-frequency, and it kind of goes against the whole point of earlier, of like "That's why I bailed." So I get that. But that's an opt-in. If someone subscribes to us for those reasons, that's an opt-in. And they may get overwhelmed. That's just, I guess, the nature of subscribing to content.

Same thing with Twitter - right now I'm kind of overwhelmed with them algorithming me. The algorithm has got me deep, so I'm unsubscribing to these things that I never even asked for, which is like tags, and somebody tweeted this...

**Jerod Santo:** Right. Viral tweets?

**Adam Stacoviak:** Yeah. Like, give me my timeline...

**Jerod Santo:** "We thought you would like this viral tweet." It's like, "You were wrong. I do not like this viral tweet." \[laughs\]

**Adam Stacoviak:** Yeah... Well, that's part of iteration in product, too. And experimentation. By no means am I saying don't sleep at night. I don't want you to take that hat off completely, but you have to wear two hats. One which says "I'm the business owner. How do we grow?" and then two, "I'm Ben. I wanna enjoy the product." How do those two coincide, and how can I build a product that supports both of those?"

**Ben Ubois:** It is a conflict. I think to a fault I come down on the side of going with my opinion on the thing, even if it is probably not the best business idea... Mostly just because of how Feedbin got started just kind of accidentally being in the right place, at the right time, with Google Reader shutting down two days after the launch. And instead of immediately trying to figure out what the thing to do is to capitalize on that, I just doubled down on making the thing that I wanna use. That's always my first choice... And it just felt like the right thing to do, and still does.

**Adam Stacoviak:** \[00:32:11.22\] I agree. I mean, we make podcasts that we think people will like, but also it begins with us liking the content.

**Jerod Santo:** Right. We could probably make podcasts that more people listen to.

**Adam Stacoviak:** Precisely, yeah.

**Jerod Santo:** But we don't want to.

**Adam Stacoviak:** We're not like "What do you want? Let's just give it to you." It's more like "What do you want, and what do we want to give you?" and how do those overlap.

**Jerod Santo:** The cross-section.

**Adam Stacoviak:** And somehow -- yeah, exactly, there's a crossover there. We've got to enjoy what we produce.

**Ben Ubois:** Yeah. The way I always thought about it is if I am going to work on somebody else's dream, then I could just go get a job somewhere. So this thing is my dream, and I get to decide what goes into it.

**Break:** \[00:32:55.18\]

**Jerod Santo:** So the beauty of RSS and the open web, which RSS is a part of, is that Feedbin is not RSS. It's not the RSS experience. You just happen to be the one that's on our show right now, so of course we're grilling you on ideas and changes and stuff... But there's tons of people that are doing RSS readers.

**Ben Ubois:** Yeah.

**Jerod Santo:** Feedly is much bigger in terms of like they're more of the enterprise play... I haven't looked at what they offer as a product in a long time, because I'm a happy user of yours, but I know every time RSS comes back up, people will list "Here's what I use", and it's like a dozen of them; and there's probably way more that people don't list... Just like whenever you look at the top podcasts - there's always a dozen or so, and then there's a whole bunch of them that people listen to and enjoy.

**Ben Ubois:** Yeah, I think there is a long tail, for sure.

**Jerod Santo:** My point is -- of course, we're not saying you have to do all these things, or should do all these things, or like "RSS depends on you, Ben Ubois. Otherwise it's gonna continue as-is." I think we enjoy when we try to talk about ways we can make this technology and this ecosystem better for all of us, so that we can have an alternative to what we currently have, which is siloed, big-tech, algorithm-driven, ad-driven social experiences on the web. And RSS as a technology we all know is the underpinnings of lots of things. But as a reader, as a social network, it is not. It could be a social network. It could be your personally curated, chronologically-timelined, beautiful, "safe" social network. It could be all \[unintelligible 00:38:15.24\] and it's not quite that. And every time we get mad at all of the social networks that be, we say "Why can't we just all use RSS? Like, we have one. It's right there."

\[00:38:26.02\] And so then the next step is like "Well, it's lacking some stuff though. Here's what it's missing." And some of what it's missing is what makes it beautiful, but some of what it's missing is what makes it suck, right? Not be sticky.

**Adam Stacoviak:** Jerod, that's a great way to put it. Everything he just said is what I've been trying to say all along. \[laughter\] Seriously.

**Jerod Santo:** That's why we're a team.

**Adam Stacoviak:** Yeah, that's exactly it. What is missing... You know -- say it again, Jerod. What it's missing is its downfall, but what it's also missing \[unintelligible 00:38:50.29\]

**Jerod Santo:** It can be. It can be. There's certain aspects of it... Like the discovering. Discoverability is a big problem. Like I said, you're on Twitter because you wanna go viral. Well, when you go viral, somebody puts your content in front of somebody else, and they also enjoy that content, right?

**Adam Stacoviak:** Right.

**Jerod Santo:** ...now that they've discovered you. And they're like "Wow. This @adamstac guy has interesting things to say. I'm gonna follow him."

**Adam Stacoviak:** So much good stuff. Yes.

**Jerod Santo:** But how can we get some of that stuff with our federated, distributed, non-centralized RSS technology? We're kind of stuck, like it's 1999.

**Adam Stacoviak:** I'd say from someone with tastes, like Ben. That's why I think you might even be well-positioned for this... Because while it may not necessarily be the hat that Ben Ubois wants to wear, the Ben Ubois who runs the business has good taste. And you have good morals, which you've built this product on, so you might be the best person positioned to do these things, because you're not gonna compromise and crumble for the dollars; you're gonna compromise and crumble in the positive ways for the network effects of creators and the consumers. Because it's a net-positive for everyone, really... And Feedbin gets to be at the centerpoint.

**Ben Ubois:** I like that.

**Jerod Santo:** "I like that..." \[laughs\]

**Ben Ubois:** Well, one of the things you mentioned was about discovery... And I have a question for both of you, which is like "Who does do discovery well?" You look at companies that have thrown so many bodies and so much money at the problem, and if you sign up for a new Twitter account today, it's like, who do they recommend you follow? I don't know, the president of the United States and a celebrity? You're not gonna have a great experience by following those people. Facebook I guess was successful for a while... I guess they still are. They have billions of people on there. But I don't know... I mean, my parents use it, but that's all the people I know. TikTok, people like that, kind of thing...

**Jerod Santo:** It's a good question. I'd say TikTok and YouTube are probably doing discovery best, even though they're optimized for things that are maybe not the most uplifting, or net positive. They do engagement. I think more often than not a YouTube algorithm is going to hit me on the nose - and TikTok's - more so than Twitter's. I don't use Facebook, I'll say Instagram, because I do use Instagram, and it's a Facebook product.

That doesn't mean they're actually doing all that well... I think good discovery comes from your friends. It comes from your already existing social network. So even with podcasts, to this day, I personally learn about podcasts from people who listen to podcasts and talk about them to me. And most people who find us, they say "Yeah, my colleague at work sent me a link to the show, and I gave it a listen." So a lot of the discovery I think that's the best is personally curated by people that know you... So that's why I think that social network of other people who are like-minded - like you said, Ben, you like to follow people on Twitter who are good link-finders, right? They're gonna find good content and they're gonna curate content; they're gonna find the stuff that you like better than the current algorithms that be.

\[00:42:02.29\] So maybe the answer for a Feedbin or for the RSS ecosystem isn't necessarily like "Who has the best algorithm? What algorithm could Ben come up with to suggest content?" but it's more like "How can we better cross the networks that we have, the personal social networks that we currently already have, in order for us to share?"

Adam and I were talking yesterday... He likes my Feedbin, because I just tell him like -- isn't that what you said? I wish I had some of your subscriptions.

**Adam Stacoviak:** Yeah, I wish I can somehow know what your feed is, so I can just pick and throw what is in your list... Because there may be things that you like, that I wanna check out, and there's things that you like that I don't wanna check out.

**Jerod Santo:** Right. The technological move right now is like "Well, I'll export my OPML and you can import it." But that's not gonna be a general-purpose kind of a social networky thing. Or maybe there are tools, Ben, that we don't know about, for sharing and promoting... Even saying like "Share this with my --" I think with Google Reader there was a thing where you could subscribe to other people's shared, or starred, or something like that...

**Ben Ubois:** Yeah, absolutely. Well, for the OPML thing there's been attempts to do like an OPML hub sort of a thing... I don't think anything ever caught on.

**Jerod Santo:** Right.

**Ben Ubois:** Google - I think one of the things people really liked about it is that it did have kind of a mini social network for a time. They eventually stripped all that out in favor of a -- I don't know if anybody remembers Google+.

**Adam Stacoviak:** Yeah...

**Jerod Santo:** Unfortunately...

**Ben Ubois:** But that's something that people loved. But I think what made that work was Google Reader is free, and enough people were on it that you could count on your friends being there.

**Jerod Santo:** Right.

**Ben Ubois:** I don't feel like Feedbin is really in that place where there's like --

**Jerod Santo:** There's not enough users for that to have critical mass.

**Ben Ubois:** ...everybody you know is on there. Maybe a free service could do it...

**Adam Stacoviak:** That's a chicken and egg on two sides, where you -- Jerod has to get enough value from using Feedbin to then be my friend and share his experience with me, for me to say "I wanna try it, too." So that's the thing... You're not gonna get growth on that front if you don't have a way for people to cross-pollinate with one another in ways. Yeah, it's an absolute challenge, it really is, to not be a social network, but yet give social features.

**Ben Ubois:** Yeah. It'd be a cool thing to figure out. The star thing - you can do that. So there is a starred feed. There's people who publish theirs on their personal website...

**Jerod Santo:** That's cool.

**Adam Stacoviak:** What is a starred feed? What is this?

**Ben Ubois:** It just creates yet another RSS feed of anything that you star inside of Feedbin. So a star is just like a lightweight bookmarking feature, so you can refer back to something later... So then this feed exists at its own private URL, but you can share that with somebody, who can then put it into whatever their RSS feeder may be; it doesn't even have to be Feedbin.

**Adam Stacoviak:** I don't even know how to do that though. So I see the star feed... How do I even give it to somebody else then?

**Ben Ubois:** Copy the link...

**Jerod Santo:** What's a link? Just kidding. The old universal resource locator... So that's pretty cool. I think if there was like a way of saying "Okay, check inside of the product", I would also like to see other people's stars. You know, even something that simple. Now, that could be a privacy situation, where like "Well, I don't want people knowing my stars", and so maybe you have to decide how your stars are gonna work, and so it gets complicated.

**Ben Ubois:** Yeah. I mean, maybe multiple levels, like a public and private situation...

**Jerod Santo:** Right. Because even if it wasn't like -- okay, so one problem is if it was a free service, it may have 10x, maybe 100x the users, and so the likelihood of my friends or my colleagues or people that I already have a social graph with being on there would be much higher. So a paid service like Feedbin - much smaller; okay, so maybe then the small play, whatever the user base is, is what if I could just see the most starred stuff by everybody? That might be a place where like "Okay, I can go trawling through there." It doesn't have to be people I know, but because it's not that big, maybe it's just like "Hey, this article was starred by 75 people." That's a signal, to a certain extent.

\[00:46:15.24\] Now, you do have privacy implications there, but now you can start to show me things... And I wouldn't say necessarily like "Insert that then into my Feedbin feed", but maybe there's another subsection called "Most starred in the feeds list" that I could go check when I was interested.

**Ben Ubois:** Yeah. But again, I think there's like a scale and diversity problem really, which is like, if you do look at the numbers of something that has a lot of stars, it's like, it's not really a surprise. It's like, "What's the latest thing on Daring Fireball?" or something, or another big blog that everybody's already subscribed to anyway. So I think there needs to be a way to find the less obvious stories somehow.

**Jerod Santo:** Right. You almost need to go out and find curators and say "Hey, I really like your taste in this subculture that I don't follow myself. When I look at what you're sharing, it's really high-quality stuff. Could you be a Feedbin curator?" And "Oh, what does that mean?" "I'll give you a free account maybe, or whatever it is, and you just star the stuff that you're gonna share", and now you have almost editors. That doesn't super-scale, but at the size that we're talking about it could potentially be feasible. It's a lot of work though, Ben. It's a lot of work.

**Adam Stacoviak:** Ben, you asked the question "Where do you see (I guess) discovery" was I think what your question was for us...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** And I thought about Overcast. Because when you're in Overcast and you wanna add a new feed, the first thing you do is search the directory. But along with that page of searching a directory you also get suggestions. And there's suggestions for you, there's most starred, and then there's podcasts there, and categories. Society and culture, business, news, history, tech, all that good stuff. So I can go into the technology section when I go to the process of discovery, which is ultimately adding a new podcast to my queue or feeds - very similar to Feedbin - and in that list I get all the different tech podcasts that are being suggested by the platform Overcast.

**Ben Ubois:** Yeah. And how do you like those suggestions?

**Adam Stacoviak:** I don't mind it. When I go to the Technology section The Changelog is in there, so I'm really happy...

**Jerod Santo:** \[laughs\]

**Ben Ubois:** That's all it takes...

**Jerod Santo:** That's all it takes, to see your own stuff in there. You're like "This is a good recommendation."

**Ben Ubois:** Yeah. Now, if they could also throw in like JS Party, and --

**Jerod Santo:** Yeah, exactly. It could be better. \[laughs\]

**Adam Stacoviak:** It could be better. Oh, wait, there it is. I'm just kidding. I'm just kidding. But I do see what I would consider relevant podcasts that I would either a) listen to, or at least recommend if somebody wanted to listen to it. I may not listen to a person; I can say "Hey, this show, X, Y or Z, from whomever - yeah, it's great. It's out there. I don't listen to it, but if you want that content, it's probably a good piece of content that you can check out or pay attention to."

So I think that's good for discovery, personally. I mean, there's some sort of overlap there, which is "How do you discover through your user base what is signal, and how do you as a platform partner with those creators and give them exposure?" Because what you want is more good content creators out there who get value from platforms like yours, so that more people enjoy products \[unintelligible 00:49:33.12\]? And without that, your growth metric may stagnate or decline. And it's not like "Hey, Ben, save your job", but more like RSS has stood the test of time. It's died, it's lived, it's had a resurgence, it's had a re-resurgence again... You know what I mean?

So it's been everywhere in between, and it is the protocol that will never die, because it hasn't yet. It's been resilient. And everything at that is the epicenter of what you're building. So it's just a matter of "How do I get people to subscribe to content that is outside the over-algorithmed, over-engineered, over-privacy, anti-privacy social networks that just don't ultimately pay out." They may be a good mechanism for discovering new people, TikTok, YouTube, Twitter etc. I use all those platforms; they're all great in their own right. However, I think there's room in there for RSS to improve, and I think it begins with folks like you.

**Jerod Santo:** \[00:50:31.15\] It begins with you, Ben.

**Adam Stacoviak:** You and people like you.

**Jerod Santo:** Well, there's a cross-section here which I think will lead into another part of this conversation, because as Adam has said, our livelihood at this point - which didn't start this way, and we're thankful that it is this way - it relies on RSS as a technology. There's kind of two conversations that overlap, which is like RSS as a consumption/sharing mechanism, as a network, which we think is the thing that has died, and come back to life, and died, and really, at this point it's limping along; very few people use it in comparison to even the small social networks like Twitter. Twitter is a small social network in comparison. It's louder than the other ones, so there's a lot of press... But user-wise, it's an order of magnitude less than how many people are on Facebook, but still, huge in comparison to people that use readers like Feedbin. But the technology has stood the test of time, it is used... It's under attack, of course, in the podcasting space.

**Adam Stacoviak:** Mm-hm.

**Jerod Santo:** Spotify very much I think would like to get rid of RSS. And Apple doesn't seem to care one way or the other, which is kind of why it has thrived for many years, because Apple made it a thing that was used, and then ignored it for a very long time. I mean, almost no changes to the way podcasting worked inside of Apple podcasts for a decade, maybe 15 years, until recently. They're trying to do some stuff now. But the podcasting folks are making moves. I mean, I'm not sure - Ben, you have been working in the podcasting world. We should talk about some of the stuff you've been working on recently; I'm excited to hear about it. But there are people, like with the podcasting 2.0 movement now, where they're trying to bring up the podcasting part of the RSS spec to modern technology, and fill some of the gaps of what podcasters need in 2022 and beyond. So they're developing and changing. And RSS hasn't changed for a long time. I'm not even sure who the working group is; maybe, Ben, you know, or how that whole field works right now.

I know there was RSS vs. Atom years ago, and RSS won... And RSS has just not changed as a spec, that I know of, for many, many years. And podcasting as a namespace of that space, or as an implementation of that spec, is starting to change via grassroots efforts, speaking specifically of the podcasting 2.0 stuff. Have you been following that at all, or know what they're working on with the new podcasting namespace?

**Ben Ubois:** No, I haven't heard of podcasting 2.0.

**Jerod Santo:** Okay, so it is led by Adam Curry and Dave Jones, and they've been working on PodcastIndex.org, which is a completely free, open podcasting index. By their own words, they're here to preserve, protect and extend the open, independent podcasting ecosystem. And they've been working on basically additions - a podcasting namespace where they're gonna be adding new elements, new tags, stuff that's been missing... And they've already added a bunch of them; we've implemented a few. Things like transcripts, things like chapters, things like actual author credits, where you have rich objects for the people who are on the shows; not just the hosts and guests, but also other people involved in the creation of the podcast.

So one thing that could be cool about podcasting is following a person around, perhaps. You know, there's people who are guests; they don't have their own podcast, but they're on a lot of different shows, because they're interesting people. And so you could then subscribe to a podcast guest. That would be a good example.

**Ben Ubois:** I like that. Yeah, that's interesting.

**Jerod Santo:** \[00:54:03.16\] Maybe Tim Ferriss. Maybe you already listened to all of the Tim Ferriss shows, but also he's a guest on other shows; well, can I subscribe to Tim Ferriss in my podcast app? Well, with podcasting 2.0...

**Adam Stacoviak:** Do you know how much time I was \[unintelligible 00:54:13.17\] I will spend days, weeks, months, just scrolling YouTube forever, waiting for the next thing of this person I'm paying attention to currently.

**Jerod Santo:** Of your favorite creator, yeah.

**Adam Stacoviak:** If I could just subscribe to them on shows, rather than death-scrolling forever on YouTube, TikTok etc. OMG. I would get better sleep, and my life would be improved by 10x. I'm being facetious a little bit there, but the point is, I do scroll -- I'm like, "When is the next thing so-and-so will say X?" And I just wanna see them on the shows, and hear more what they have to say, because I wanna hear the circumference of their opinion about X.

**Ben Ubois:** Yeah, that's a good feature. There's some people like that that I try to follow, and...

**Adam Stacoviak:** This feature somewhat exists with Listen Notes. Are you familiar with listennotes.com?

**Ben Ubois:** Yes. They also sell access to a podcasts directory, right?

**Adam Stacoviak:** I'm not sure what they sell and how they sell it; I know that we're in there, I know that you can see different episodes, I know that you can pay attention to named folks... I'm not sure if you can subscribe to them, but I know if you wanted to find Dave Jones, or Adam Curry on podcasts, you can just go to listennotes.com and plug their name in, essentially, and you'll see them on their own shows, and other shows, too.

**Ben Ubois:** Yeah, actually Listen Notes is an interesting company; it's also like a one-person operation.

**Jerod Santo:** Right.

**Ben Ubois:** I think the creator lives in SF also. But yeah, there's interesting stuff on their blog about the infrastructure and backend things that I find fascinating, because that's the exact situation that I'm in, so I love to see how other people do that at that scale of one.

**Jerod Santo:** Right. And there's others; there's VC-backed things as well. Podchaser is one that I think is similar to Listen Notes, but was backed and recently acquired by a larger entity. There's a lot of acquisitions going on in this space. So there's a lot of hubbub around podcasting. There's money flowing in and out, people trying to solve some of these "problem". Really, a lot of them are enterprise things, which us little folk don't care about all that much. But there are cool stuff, like transcripts getting in there... I think the chapters, which we're working on internally here... Chaptering, trailers, location, soundbites, funding... So there's this whole value-for-value thing they're working on, where you can actually stream money to people as you listen to them; so non-advertising-based models.

I guess the point is there's a lot of people trying to make podcasting better. And specifically, the podcast index; they try and do that by like "Hey, we don't have to stand still with the technology." We can build upon the technology; it's built to be extendable via namespaces, and so what if we create a new podcast namespace and start to extend it via the old open source model of like "Here's our working group. Let's implement some stuff. Let's start supporting it, and get app creators involved." So they're out there, getting different podcasting apps to support these new features. And I don't think there's anything like that in the pure RSS world of readers. Do you know of anything, Ben, or has that just been stagnant?

**Ben Ubois:** It has been fairly stagnant for a long time. The biggest thing that I think hasn't really taken of was an attempt to kind of redefine RSS, which is an XML-based format, as JSON. And I really like that Feedbin supports it; it did from pretty much the beginning... Just because XML is hard. It's hard to read, it's hard to parse, and it can be really complex with the namespace thing especially, if you wanna do that in a valid way, or following a document definition... Whereas JSON - anything can parse JSON.

**Jerod Santo:** \[00:58:20.03\] Right. Is it the jsonfeed.org? Is that what that is?

**Ben Ubois:** Jsonfeed.org, yeah. By Manton Reece and Brent Simmons.

**Jerod Santo:** Yeah. We support that as well.

**Ben Ubois:** But then that doesn't really extend it, it just kind of re--

**Jerod Santo:** Reimplements it.

**Adam Stacoviak:** Well, then you have like a browser war. The way browsers have progressed, which I imagine is the same way readers will progress, is 1) how big is their market share, and 2) do they adhere to this new, suggested -- you know, even if it's a redefining of the RSS, do they support it? Because if the biggest behemoth in the reader space begins to support that new spec, well then it's got a lot more going for it to be supported by others, because you know, it's got a large user base, then you've got your features, whatever. It becomes almost a browser war scenario in terms of like "Oh, Chrome has this feature. Does Safari have this feature? No. Well, then Safari is bad, because Chrome has supported this feature." It becomes like a better or less-than because of a feature being supported.

**Ben Ubois:** Yeah. There's that. That would be good, I think. But then there's also like a chicken and egg problem, which is like, you know, if you're creating a spec, you're in outer space, and you just throw stuff back down to Earth and hope people pick it up. I mean, it's really on them to make something compelling with what they're trying to do.

**Jerod Santo:** Right.

**Ben Ubois:** The browser wars - I think the WATWG and the CSS Working Group, they come up with really compelling stuff all the time that make developers' lives better, and I think there is a big incentive for browsers to implement that. It also helps that there's essentially like two or three rendering engines right now... Whereas there's a million RSS readers, and a million podcast players.

**Jerod Santo:** Right.

**Ben Ubois:** Getting uptake is, I think, the challenge there.

**Jerod Santo:** Totally.

**Break:** \[01:00:22.21\]

**Jerod Santo:** I think that Atom was a much more complicated and featureful format. And RSS vs. Atom was the VHS vs. Betamax, was the HD DVD vs BluRay, or whatever. And RSS won. RSS stands for Really Simple Syndication, and so it seems like it won because it was simpler. I wasn't paying attention back then, during the Atom vs. RSS wars of yesteryear. I know that people will just do both as creators. You just publish both feeds, and Atom was always complicated in comparison.

So you're yet to be weary of making RSS too complicated by adding more things. But like you said, by using it - we've been with it for many years now, so we know what things it might be nice to have. Like, what if we could just get the whole subscriber thing somehow figured out with current RSS technology? Maybe it's the headers thing, but you're not providing some sort of end user way of parsing those out.. I know we do grab those out of our user agent strings, because we have a custom CMS that we built ourselves... So yeah, we know how many people subscribe to Founders Talk in Feedbin. And we've gotta work on that number, Ben. We've gotta get that number up. Do you actually subscribe to podcasts in Feedbin? I don't, personally.

**Ben Ubois:** Yeah, you can.

**Adam Stacoviak:** Tell us the number, Jerod. What's the number?

**Jerod Santo:** Well, I'll tell you. Two. Two people have subscribed to Founders Talk via Feedbin. So partially Adam's fault, partially Ben's fault...

**Adam Stacoviak:** Gosh...

**Jerod Santo:** And partially just reality.

**Adam Stacoviak:** I'm gonna make it three right now.

**Jerod Santo:** \[laughs\] Are you gonna subscribe to yourself? That's how we really hack our growth around here...

**Adam Stacoviak:** Well, I wanna know the experience of it, really... Because I think this is where -- I don't wanna go back to a point... I really think there's an opportunity to have similar incentives as a creator, and as Ben as the platform creator of this tool. I think I wanna know how my experience is in there as the creator, so that I can suggest it to people...

**Jerod Santo:** Sure.

**Adam Stacoviak:** ...as yet one more way to consume a good experience of the podcast. If you don't wanna go on Changelog.com, or if you don't wanna subscribe via an iOS or an Android app, which is probable. The most subscribed place for most podcasts is on a mobile device, desktop probably being second, and web listens probably third. Maybe web listens is probably second, and Feedbin is the third, but...

**Jerod Santo:** I would say mobile, mobile, mobile, and then web...

**Adam Stacoviak:** Yeah...

**Jerod Santo:** And there's like three people listening to it on their desktop.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I do know that Feedbin has a really nice podcast support. I always make sure our stuff renders in there, and I can hit Play, and it goes down in the corner, and I can keep reading and listening...

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I know you've put some special work into that kind of stuff, Ben... But you have a whole other podcast initiative going on; you teased me in the email. What are you working on with regards to podcasting?

**Ben Ubois:** Yeah, so this has been in the works for a while now. Like I was saying earlier, I am taking the approach of making Feedbin omnivorous. At first it was just RSS, then newsletters, because I felt like it's better to read it on a reading environment than in your email app. Then Twitter and YouTube feeds actually have some custom stuff to make them work nicely in there as well, too. And podcasts.

\[01:06:17.10\] But the podcasting component always felt unfinished to me, like you were mentioning before, that the main place people go to listen to podcasts is in a mobile app. So I wanna go where the people are, and so I made a podcast client. It syncs with Feedbin, it's for iPhone and iPad only currently, and if all goes well, it's launching next week.

**Adam Stacoviak:** Nice.

**Jerod Santo:** Nice! So it syncs with Feedbin if you want it to, or you sign up through Feedbin? It's like a Feedbin client, or is it a standalone thing that also works with Feedbin?

**Ben Ubois:** Yeah, so there's three ways you can use it. The original idea was that it would be for Feedbin customers. You're already paying for a Feedbin subscription - how can I add value to your subscription?

So if you have a Feedbin account, you can sign into the app, it's not additional cost, and then you manage your podcast subscriptions and playback in the app. But I also wanted to see if it was interesting to more people. I think podcasting probably has a broader audience than RSS does, so what about people that wanna use the app, but don't wanna have a Feedbin account? So then to support that, the app is free for everybody. You can download it and use it forever without paying anything. And then if you want to have sync, but not have a Feedbin subscription, there's gonna be an in-app option to subscribe to the sync service. It'll use Feedbin on the backend, it'll be less costly than a Feedbin subscription, and it'll just provide sync across devices. So you know, I'm trying the freemium model with it, essentially...

**Jerod Santo:** Cool. How long have you been working on that?

**Ben Ubois:** Off and on for about a year now. I started in the summer last year. I was interested in checking out kind of native development with SwiftUI, so that's what the app is written in. It was a really interesting experience. My background is in web development, and it was very different doing on-device stuff.

And then the concept for the app is initially I was thinking like -- you know, my internal barometer for where podcast apps are at is that there's a lot of really good ones and powerful ones, but I was feeling like they were almost too powerful, and starting to get into almost a complex territory. And when I think about how I use podcasts, really all I want is the player screen. And I'm gonna hit play, and then I'm gonna listen to an episode, and then it's gonna play the next one. And then when I'm done listening for the day, I'm gonna hit Pause, and then I'm gonna do the same thing over again. I'm like, "Can there be an app that's just a player screen?" and the answer is no.

**Jerod Santo:** \[laughs\]

**Ben Ubois:** You need some kind of management, right?

**Jerod Santo:** Well, you tried. You tried.

**Ben Ubois:** You need people to get podcasts on the device, right? So then it's like, okay, how do you do that? You need to integrate with a directory, you need to be able to search that directory, and then you need some kind of queue or playlist for what order the things are gonna be in, and you need to be able to edit that queue.

\[01:10:00.17\] And then, you know, when I think about how I listen to podcasts, there's kind of two types of shows I listen to. There's the shows where I listen to every episode, which in the app is called a subscription, and then there's shows where I'll listen to an occasional episode, where I'll check in once in a while and see if anything looks interesting to me, and then add that to the queue. And those I call Boomarks.

And then with those two things in place, I felt like it was kind of like the -- you know, people talk about a minimum viable product a lot, but a term I came across recently for this stage is the SLC product, which is Simple, Lovable and Complete. And that's where I want to start with this - get the basics right, have a nice experience, and then see how people like it, see what's missing, and keep going.

**Adam Stacoviak:** Wasn't that idea shared on JS Party recently, Jerod? Simple, Lovable, and Complete?

**Jerod Santo:** It was shared on something.

**Adam Stacoviak:** It was a clip I saw. I could have sworn it was you even saying.

**Jerod Santo:** It might have been Changelog News.

**Adam Stacoviak:** And it was a guest... I believe it was on JS Party.

**Jerod Santo:** I don't know. It might have been Changelog News. It's actually funny that you bring it up, Ben, because I had just recently heard of that concept of Simple, Lovable and Complete as being a better framing over Minimum Viable. And it might have been through Changelog News; it could have been JS Party, I don't know...

**Adam Stacoviak:** I think it might have been Changelog News, now that you say it...

**Jerod Santo:** It all melts together at some point.

**Adam Stacoviak:** It does... Because that's what happens.

**Ben Ubois:** Yeah. I can't remember either where I saw it.

**Adam Stacoviak:** There's some good merits to your idea though, for sure.

**Jerod Santo:** Yeah, your double-headed concept makes sense to me, because that's also how I listen. I have my subscriptions and then I have the shows that I just wanna keep around, and just check what they've been up to lately. Maybe there was a good guest, or an interesting topic. But I don't listen week in, week out, or day in, day out, or however often they publish.

So I think subscriptions and bookmarks are good concepts for the starter of simple, lovable and complete. I'm sure there's lots of other things... Complete is the C, right? Like -- gosh, that's the hard part. You know, like thorough...

**Adam Stacoviak:** You're right.

**Jerod Santo:** ...and just like polishing every corner, so that is complete. What you have -- the idea there being the things that are in the app are completely fleshed out ideas, right?

**Ben Ubois:** Yeah. I saw an illustration that went along with the idea, which is like a skateboard, a bicycle and a car. A skateboard is complete, but it certainly doesn't have all the features that a car does... But it can be used in its current state, while the next thing is being built.

**Jerod Santo:** Right.

**Adam Stacoviak:** Or even the concept of a board, trucks, and four-wheels. Another version of the skateboard could be the one where it's -- I don't even know what it's called. It's got only two wheels - one wheel in the front, one wheel in the back, and you can kind of wiggle to board. I don't know what it's called.

**Jerod Santo:** It's a ripstick.

**Adam Stacoviak:** Ripstick. Yes, a ripstick.

**Jerod Santo:** My kids love those things.

**Adam Stacoviak:** It's on the concept of a skateboard, but it's another variation of it. That's an innovation above and beyond the board, trucks and four-wheels concept.

**Jerod Santo:** It's complete as-is, but you add two more wheels and now it's a skateboard.

**Adam Stacoviak:** Two less wheels, technically. One in the front, one in the back...?

**Jerod Santo:** I was going the other way.

**Ben Ubois:** That's even simpler.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** That's right. It's taking away.

**Ben Ubois:** But then there's like the wiggle mechanism.

**Adam Stacoviak:** That's right.

**Jerod Santo:** Yeah, the wiggle thing makes it tough for us gen X-ers/millennials. But then there's the one-wheel, which I've heard is the bomb, by Adam Argyle. That was on JS Party. What's it called? It's called one-wheels?

**Adam Stacoviak:** I believe it's called one-wheel.

**Ben Ubois:** The solo-wheel...

**Jerod Santo:** Yeah, the solo-wheel...

**Ben Ubois:** With the electric motor...

**Jerod Santo:** Yeah, the electric motor. It's almost like a go-kart wheel in the middle of this thing.

**Ben Ubois:** Yeah...

**Jerod Santo:** And Adam Argyle on JS Party was just raving about how awesome the one-wheel is. It also was called a unicycle at some point, I guess, but... Different product altogether.

**Adam Stacoviak:** So what's it called? Did I miss the name of it, Ben? Did you share the URL?

**Ben Ubois:** I think I didn't say it. It's called Airshow.

**Adam Stacoviak:** Airshow.

**Jerod Santo:** Airshow. Okay. Where did that come from?

**Ben Ubois:** Just, you know, spitballing ideas... I landed on it just because it sounded nice. I like the "Air" as in lightweight shows... You know, it just feels good.

**Adam Stacoviak:** Is it .fm?

**Ben Ubois:** \[01:14:17.13\] I own that one now, but it's not live yet. We're talking about something that hasn't actually happened, because the app is in second app review.

**Jerod Santo:** Right. Ahh...! Welcome to iOS. So imagine that someone's listening to this six months from now, and so it's live. Where will they go? Is it airshow.fm?

**Ben Ubois:** Yeah, you can go to -- yeah, airshow.fm. That's a good place to go.

**Adam Stacoviak:** I was gonna say, because you must use Hover to secure your domains, because that's what it says... It says "Airshow.fm is a totally awesome idea. Still being worked on", and in parentheses, "Being approved by Apple." It doesn't actually say that, but I just threw it out there...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** I can imagine the concept... So you've got some collisions with -- it's a great, well-known term, but collisions with actual air shows, which are planes flying in the sky...

**Jerod Santo:** Right?!

**Adam Stacoviak:** You know, spectacles... But a great play, where you can have multiple or several planes as an avatar of some sort for the icon. It could be air show themed, essentially.

**Jerod Santo:** We know Ben has thought about the icon...

**Ben Ubois:** How did you see my icon?

**Jerod Santo:** Yeah. Well, we know that you care about such things, because I think -- your hamburger icon is classic. We even talked about that last time.

**Ben Ubois:** Yeah, I don't mind that double meaning. Feedbin - not so much in the U.S, but in the U.K. that's what you call a bin that you put animal feed in.

**Jerod Santo:** Do you like that double-meaning?

**Ben Ubois:** Sure. I could see how it applies, too.

**Jerod Santo:** \[laughs\] I couldn't tell if you liked it or didn't like it when you said that.

**Ben Ubois:** Yeah. You go to the feedbin to graze on news, or something. Maybe that's a stretch.

**Adam Stacoviak:** Well, I think it's a good thing. I don't think it's a negative thing at all. I think for a while there you'll have people potentially lost, until you have enough juice, I suppose, from the search engines to give you priority in the index... But I think it's a great -- it's got a lot of great things behind it in terms of what you can use. Airplanes fly, podcasts fly... You know what I mean? They're soaring through the internet pipes, so to speak... Getting to listeners' ears... A lot of fun things, a lot of fun aspects to that brand, an air show. Airplanes.

**Ben Ubois:** Yeah. My only requirement was just staying away from the word "pod", that's been used. Also "cast".

**Jerod Santo:** Cast. Pod and cast.

**Ben Ubois:** So pod and cast were out immediately.

**Jerod Santo:** Can I introduce you to an app called Airpod? Oh, wait... \[laughter\]

**Adam Stacoviak:** Or Aircast...

**Jerod Santo:** Aircast...

**Adam Stacoviak:** Yeah. Coming to a -- yeah, anyways...

**Jerod Santo:** Podshow.

**Adam Stacoviak:** Good stuff. Okay, so the mechanics are simple. A Play button, essentially. A play screen. And then you have the concept of a queue, which is probably a mixture of what you would subscribe to or bookmark. So you essentially have just a few ways really to mechanic the app as a user, but a really simple experience in terms of being simple -- what was it, usable and complete? What was the acronym?

**Jerod Santo:** Lovable.

**Ben Ubois:** Lovable and complete. But usable is nice, too.

**Adam Stacoviak:** Lovable and usable are synonymous, I would assume, to some degree.

**Jerod Santo:** So as a current Feedbin user who doesn't do it for podcasts - I subscribe to our news feed in there, just to make sure that the podcasts work, but I don't actually listen inside of Feedbin.

**Ben Ubois:** Yeah.

**Jerod Santo:** How would you imagine me using Airshow? Would you imagine me starting to use Feedbin for podcasts and listening to them in there, or would you imagine me just using it as a standalone?

**Ben Ubois:** Yeah, there is integration with Feedbin. That was important for me, to have the option to start something on device, and then pick up where you left off on the web. It kind of completes the picture there with like a desktop experience.

But yeah, it is more geared to just stay on the device.

\[01:18:07.21\] The integration with Feedbin is fairly lightweight at this point. If you choose to download the app and sign in with your Feedbin account, you're gonna get just a new source, kind of a left column, and it's gonna show you your queue. So you can pick up on the web. But then if you don't wanna use it there, that's totally fine. It's not gonna take over Feedbin in any way.

**Jerod Santo:** Right. But I do basically get free sync because I'm a Feedbin customer. Like, if I wanna use Airshow on two devices, I get the sync through Feedbin. That's nice.

**Adam Stacoviak:** This is great, because you've kind of got both sides of the coin, really. You've got feeds at large, and you can consume podcasts, and for those feeds inside of Feedbin that is a podcast feed. You could say "Hey, this is a great experience here, obviously, because I made it, but there's also these other cool things you could check out so that you have a way to promote Airshow via Feedbin by way of saying there's a simple or more complete and lovable experience elsewhere should you wanna take it. And there's free sync. You're welcome."

**Ben Ubois:** \[laughs\]

**Jerod Santo:** That's true, by the way...

**Ben Ubois:** Wow, I don't know if I think of myself as highly as you do, but I aspire to...

**Adam Stacoviak:** Ben, you should. Let me be the first person to tell you, you should.

**Ben Ubois:** Thank you. But yes, that's the idea. And yeah, it really just seems like it requires that native component. I don't love how Apple runs the store, but you've gotta meet the people where they are, and for Feedbin customers, that's on iOS.

**Adam Stacoviak:** So who should be using Airshow? What kind of podcast listeners should use it?

**Ben Ubois:** Well, I think if you like Feedbin, you should check it out. It's designed by the people who make Feedbin, so that's one thing that has going for it, if you're already into that aesthetic.

The other thing is - you know, you're talking about being overwhelmed with RSS feeds, but I think that's also super-easy to do with podcasts. A lot of podcast apps have notions of multiple playlists and preferences about what you're gonna retain, or just a lot of options... And it's very powerful and flexible, but I think it's easy to hide how oversubscribed you are. So I think by dialing it way back in terms of what's possible with the app, it could also help staying on top of the shows you actually wanna listen to.

The way I think about it is maybe I can listen to (I don't know) 12 hours of podcasts in a week. So as soon as I see my queue getting longer and I'm not staying on top of it, that's like a really strong indicator that it's time to unsubscribe from something.

So you know, if you feel like you're overwhelmed with your current podcast app, or you just want a lighterweight approach to the whole thing, like something more casual, I think that it could be for you.

**Adam Stacoviak:** I can totally empathize with being overwhelmed with the feed, because that happens in my podcast feed, that happens in my Feedbin feed... And I'll consider it an internal epidemic, if that's even possible. It's a shame.

**Jerod Santo:** Well, we've discussed RSS, we've discussed podcasting... I assume Airshow is not podcasting 2.0-compliant quite yet, but I would definitely consider looking at some of the new features, such as transcripts, such as chapters...

**Ben Ubois:** I'm curious about the chapters thing... So Airshow supports chapters, but what it looks for is chapters embedded in the mp3 or AAC file.

**Jerod Santo:** \[01:22:01.29\] Right.

**Ben Ubois:** So are you talking about putting chapters as like as like a feed level thing, instead of the embedded thing?

**Jerod Santo:** Yeah, feed-level chapters.

**Ben Ubois:** And why is that advantageous to the thing that already is out there?

**Jerod Santo:** Well, it keeps your mp3 files smaller, first of all. It's also a lot easier to edit and build into hosting providers, so that you're editing right through a CMS admin, similar to the way you would your metadata, your show notes, your description, your chapters. Now, of course, they can also build that in to where it edits the mp3, and stuff, but why ship the chapters to everybody in their mp3 files when you could ship it once in the RSS feed? I think that's the idea.

Now, in the RSS feed it doesn't actually send all the data. It sends a URL of where the chapters exist. It's just like with the transcripts. The way they do transcripts is you point to a resource where the actual transcript exists. So that way, when an app wants to access the transcript, it can go fetch that as a separate request. So there's energy savings, performance etc. And I think editabily at author time by more people than those who can edit the headers of an ID3 file, which is a very small few. Most podcasters are not that technical. But if it's built into their WordPress or it's built into their Buzzsprout, or whatever is the hosting provider, then they can edit the chapters there. That's the overall concept. So it's awesome that you support that out of the box though, because a lot of the podcasting apps don't support the mp3 style chapters.

Our plan as we add chapters to our podcasts is to put them in both places. It's to have them both in the mp3, for the forseeable future. Maybe if the namespace takes off and everybody ends up supporting it, we don't have to ship the chapters in our headers. But then also include that in the RSS feed for apps that support it that way.

**Adam Stacoviak:** I think the beauty of that is -- I don't know how often someone takes an mp3 and just listens to it willy-nilly or by itself, but the beauty of it living in the file is that no matter where the file goes... Because really, the file is what you ship, not the feed. As the creator, the thing, the artifact is the mp3. I kind of -- unless I know more about the trade-offs, I'm kind of more for it being in the mp3 than the spec in the RSS feed... Because no matter where the thing goes, I can open it in preview on my Mac with spacebar, and if Preview supports chapters, I can listen to it right there.

**Jerod Santo:** Which it doesn't... \[laughs\] Which it doesn't.

**Adam Stacoviak:** But if they did...

**Jerod Santo:** Well, like you said, who listens to mp3's willy-nilly? There's so many things in the ID3 tags that --

**Adam Stacoviak:** Well, if you think about it though, Jerod, if a feed dies, if a feed is from ten years ago and is no longer on the internet, but I grabbed the mp3 before so and so pulled it down, it's a relisten forever. It could be a sermon, it could be an actual podcast, whatever, but if it's got chapters, then that thing lives with the file.

**Jerod Santo:** Sure.

**Adam Stacoviak:** We assume that the internet lives forever. We assume that --

**Jerod Santo:** No, I mean -- that URL can also be fetched and held. That's a very edgy edge case, I think. If I have an mp3 from ten years ago...

**Adam Stacoviak:** I'm curious though from Ben's point of view on the indie web kind of thing... Like, the simplicity of things. I think that in the file -- it's resilient.

**Ben Ubois:** Yeah. Well, I'm definitely -- I mean, it makes me nervous that they are reinventing the wheel on a thing that already exists, and is fairly well supported. There's platform-level support for parsing out chapter information. You can do that --

**Jerod Santo:** What do you mean by platform-level support? Like in iOS frameworks?

**Ben Ubois:** Yeah, in Swift. There's an API where you can just grab the chapter metadata.

**Jerod Santo:** Okay.

**Ben Ubois:** So that's already there, and if you're now creating a new format for it, then that's like "Okay, so I've gotta be able to read mp3 and AAC files, but then I also have to be able to do this XML thing." It's also adding kind of an interesting -- you said it was an external URL... So if I wanna grab all of that stuff, like frontload those requests so it's local on device, then there's kind of like an explosion of HTTP requests that need to be made. Like, you're about to have your 500th episode; now I have to make 500 calls to get all those chapters, to have a complete picture of the metadata.

**Jerod Santo:** \[01:26:33.18\] Would you download all my mp3's too though?

**Ben Ubois:** I guess that's unfair, because you do have to do that with mp3's.

**Jerod Santo:** So that's a small thing in comparison.

**Ben Ubois:** Maybe it's just a \[unintelligible 01:26:39.28\] with the way they've chosen to implement it, because that's something that could be improved. It's like, I'm already downloading this one thing, so let's get all that data right now.

**Jerod Santo:** Yeah. I think authorship was the major concern.

**Ben Ubois:** Yeah. And now that I think about it, there might already be an XML spec for chapters. \[unintelligible 01:27:00.01\] this Podlove thing...

**Jerod Santo:** I think the Podlove people are involved in this.

**Ben Ubois:** Okay. Yeah, I think in building this app I came across this Podlove thing that I think embeds the chapters in XML. Yeah, but then we go back to the spec versus the implementation thing, and it's like, well I already have chapter support, so why am I gonna implement another kind of chapter support?

**Jerod Santo:** Yeah, you'd have to be compelled by an abundance of podcasts that don't put them in the mp3's, but put them in the feeds.

**Ben Ubois:** Yeah, I think that's valuable. If people are already doing that, then I'd support that.

**Jerod Santo:** Right. As technical creators we're gonna do both, because I think both the advancement of the namespace and the features that are based on the feeds is important, but I also think that I'm gonna use exactly what already exists, because now I'm gonna get complete coverage. So I think it kind of depends on who comes to it when. There are very few podcasts that actually put chapters in at this phase, and they're very technical people.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So putting it in the feed which can be generated from the CMS I think is a net win, because you're gonna have a lot more people doing chapters that don't otherwise, because they don't have the technical chops to do so.

**Ben Ubois:** Yeah. I think the tools thing is huge. If it's hard as a publisher to put that stuff in there, then that's no good.

**Adam Stacoviak:** Right. And rewriting the file has its challenges, which we know, Jerod. I get that, too.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** And I haven't finalized my case, I'm just thinking like "Okay, what are all the pros and cons?" Because resilience to me says there's already a spec, like Ben's saying, but also, it lives with the file; no matter where the file goes...

**Jerod Santo:** Yeah, but \[unintelligible 01:28:42.00\] lives with the file as well, but we also put it in the feed, so... Why do we do that?

**Adam Stacoviak:** So you're saying the spec should say to put it in the feed and the mp3 in perpetuity? Or at some point the file would be bifurcated from it?

**Jerod Santo:** No, I don't think the spec should say it. I think if I'm writing a spec, I'm gonna tell you the way that you should do it, which they think the best way to do it is outside of the mp3 for the performance savings, for the authorship etc. But I think the fact that there's an existing way of putting it in the ID3 headers means that everybody who does that can just continue to do that. I don't know.

**Adam Stacoviak:** Yeah.

**Ben Ubois:** Well, that sounds like a good feature quest for podcasting 2.0, like "Let me write this stuff once and go ahead and rewrite my mp3 file, and publish it in the feed."

**Jerod Santo:** Yeah, I think having to get each individual host to do that is the hard part. But that's the thing about distributed, decentralized networks, right? This is a bunch of people that have their own priorities, and everything like that. And so you have to convince every -- your Libsyn, your Transistors... Your Anchor - which is probably never gonna do that, because now they've been owned by Spotify, and the people that started Anchor have left... You know, all of these different people who end up doing the publishing at the end of the day on behalf of the creators - each one of those has to do their own implementation, which is the hard part. That's why they're calling it a movement, because they're trying to create a movement, because you've gotta get people moving to actually adopt these things... And who knows? Maybe nobody will. I think they have some traction, but there's a lot of work left to do in order to get these things broadly supported.

**Adam Stacoviak:** \[01:30:14.20\] What happened with that, Jerod? This is sort of insider baseball, but didn't we have a -- we had an invite to Adam Curry, and he didn't say yes, but Dave Jones did say yes, but we wanted to have them both on. We wanna have the podfather on the show too, right? Because we want the full deal, the full enchilada, as we say here in Texas.

**Jerod Santo:** That's right. We wanted the full enchilada. We got half enchilada, and I was like, "Let's hold out for the --" He's like, "It's gonna take longer to get the whole." And I was like, "Well, we can wait. We're not in a hurry." That's kind of what happened.

**Adam Stacoviak:** What was your thing when you were on vacation, Jerod? "Hey, waiter..." You were saying something about your--

**Jerod Santo:** "Hey, waiter..." \[laughs\] Now you're very inside baseball. You're doing a visual representation of a thing I did on my vacation.

**Adam Stacoviak:** I'm pointing down with my finger.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Jerod was on vacation, it was a meeting we had, and something with the Margarita didn't have enough Margarita in it, or something... I don't know what it was. A Bloody Mary, or... It needed more, basically. And Jerod hey-waitered the person.

**Jerod Santo:** I hey-waitered them.

**Adam Stacoviak:** Mm-hm.

**Jerod Santo:** Yeah. So we're just hey-waitering Dave and Adam, and hopefully they'll come on sometime, the two of them.

**Ben Ubois:** Well, yeah. I mean, sure, I've given it like two minutes of thought; why should they just go ahead and implement my ideas...? \[laughter\]

**Jerod Santo:** We'll make sure to bring that up with them. Ben Ubois says "Guys, just read it from the ID3 tags."

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I can probably represent that argument for you better than I did on the other side today. I haven't put too much thought into these things either, but... I think it's cool that they're trying, at least, to do some stuff.

**Ben Ubois:** Yeah.

**Adam Stacoviak:** The unknown pro and con too that hasn't been discussed, that may take it one layer too far, I'll say - and we can just put it out there or go deep if you want to - is the process which you know, Jerod, as well as I do, deeply, of creating the actual file, and the behind-the-scenes production, even before it hits a feed, coming near to you, essentially, as a listener... It's behind-the-scenes post-production work on an audio file, in an audio program. In our case, we use Adobe Audition... And the workflow it takes to create the content, to create the ending wav file that gets mixed down into an mp3, ready for broadcast, but then also includes all the chapters in the mp3, to then there re-edit or perfectly edit on the initial write these chapters.

So there's a whole workflow issue that's beyond that, so I can kind of empathize with the fact that you wanna put it in a feed versus the file, because writing the file with the chapters is challenging, unless you have the software tech or workflow that works well.

**Jerod Santo:** Right.

**Adam Stacoviak:** So in those cases, I'm kind of leaning towards feed, because that's easier to write than a file...

**Jerod Santo:** That's what I've been saying.

**Adam Stacoviak:** Yeah. It's such a challenge... It really is a challenge.

**Jerod Santo:** It is. It's a pain in the butt, honestly.

**Adam Stacoviak:** Anything worth doing well is hard.

**Jerod Santo:** It's a very cool feature, and I appreciate when a podcast has good chapters. And with my app, that I'm listening to on it, supports those chapters. It's really a nice addition to the experience of listening to a podcast.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So we're working on it.

**Ben Ubois:** Yeah, chapters are fun.

**Adam Stacoviak:** Yeah.

**Ben Ubois:** You were gesturing before, Adam. You could throw that in chapter-specific artwork, so that it's synced up.

**Jerod Santo:** Right.

**Adam Stacoviak:** Absolutely. I mean, we are a sponsored podcast; I would love to change the art and give them some visual brand recognition, because that is a missing component. I think it would be helpful to our listeners, too. We have some awesome brands we work with. If we can swap the artwork temporarily...

**Jerod Santo:** Going back to my performance argument though... Each one of those images could potentially be 3,000 pixels square.

**Adam Stacoviak:** Oh, true. Yeah.

**Jerod Santo:** And you're gonna put that in your mp3 file, when you could just put it in one place?

**Adam Stacoviak:** Okay, okay...

**Jerod Santo:** Like, how many megabytes are we gonna put into these chapters, guys?

**Ben Ubois:** Well, you're a web developer. You know about squishing images.

**Jerod Santo:** \[01:33:55.25\] \[laughs\] I also know about forcing a bunch of megabytes down the wire on my users, so... I try not to do that.

**Adam Stacoviak:** Yeah. Even those who don't support chapters will be forced to consume the content that would support the chapter no matter what.

**Jerod Santo:** Everybody who downloads your mp3 is downloading a whole bunch of extra junk, and very few people ever need that junk.

**Adam Stacoviak:** Okay, I'm seeing the pros for a feed version of this...

**Jerod Santo:** \[laughs\] Alright, I've got one... Ben, what are we gonna do to get you on the side of --

**Adam Stacoviak:** That's why I said I'm holding out, because I'm not sure... Because on one side I see the benefits here for the resilience. I like the idea of taking the mp3 anywhere in the world and always having the chapters with it. So maybe you keep the chapters as ID3 and maybe not the images. Maybe at that point you can let the two go? I don't know.

**Jerod Santo:** And then somebody goatses you.

**Adam Stacoviak:** Goatses? What?! \[laughter\]

**Ben Ubois:** Don't google that...

**Jerod Santo:** Don't google that... \[laughs\]

**Ben Ubois:** Nobody google that.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** So let's put it here, Ben... Is there yet another resurgence of RSS? Yes or no? Where are you at with this? You're knee-deep in the water of RSS, so you must desire a re-re-again-resurgence.

**Ben Ubois:** No, there's no resurgence... But that's fine. I'm happy with where it is, certainly, as a user. I'm happy with where it is as a business. And I know a lot of other people are too, and I think that's okay. It doesn't have to take over the world to be interesting or significant or a benefit for people in their lives. I mean, it's almost better, in a way, because it can just be our thing, like the people who know and love it. I don't need the world's validation for my passions.

**Adam Stacoviak:** So no need for a resurgence. It can remain a small critical mass, which it is currently, who uses it and loves it every single day. I use it; I don't love it every single day. Jerod said, admittedly, yesterday, in prep for this call, "I use it every day." That's a quote.

**Jerod Santo:** Right. It's true.

**Adam Stacoviak:** So you've got Jerod. Multiply Jerods.

**Jerod Santo:** Here's the one thing that does need to happen in terms of resurgence... If you are an engineer, developer, tinkerer, whatever you are out there, if you're writing on the internet and your personal website or blog does not have an RSS feed, you need to stinkin' add one. That's all I ask. Because that's the only time where it really fails me, is I find a cool blog by a person, and I'm like "I would love to read more of their writings", and I copy the URL, I hop over to Feedbin and I paste it in, and Feedbin says "Cannot find feed", or whatever. I'm like, "You don't even have a feed?" You've gotta have a feed.

**Ben Ubois:** Yeah. That feels bad.

**Jerod Santo:** So we need at least that level of resurgence. Now, Ben, here's a feature - scrape those sites and watch them for updates. \[laughter\] Create feeds for us. Have no site disappoint. That would be cool. That would be a lot of work, but it would be pretty cool.

**Ben Ubois:** Yeah, there's been things like that... I never loved the results.

**Jerod Santo:** Yeah. I actually built one of those way back in the day, and I didn't like it either. This was like a decade ago... It would email me when a site changed. And it was just too finicky, because people change random stuff. And I used CSS selectors to select a portion of the site that actually mattered, and it would just always be like it didn't actually have a new update; they'd just rearrange stuff. It was always finicky. That was a long time ago. I'm sure there's more sophisticated ways of doing it.

**Adam Stacoviak:** I wonder if Waybackmachine would be at least a good initial step; if you can leverage the fact that they're gonna always check most sites for changes. I don't know. I just wonder if there's an API, that way you can at least use it as the --

**Ben Ubois:** My solution for that is just follow that person on Twitter. They'll probably also tweet links out.

**Jerod Santo:** Yeah, but then you've gotta hear everything they talk about.

**Ben Ubois:** Feedbin has filters too, so... You can get just the links.

**Jerod Santo:** It's a lot of work. I prefer you do the work and I can just subscribe to this feed.

**Ben Ubois:** \[laughs\] I am doing the work. I'm filtering those tweets, manually.

**Jerod Santo:** You're manually doing those? Ben reads each one, and he's like, "Ah, they're not gonna like this one. They're not gonna like that one."

**Ben Ubois:** Yeah. I'm way behind because of this call...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** \[01:38:20.08\] Well, airshow.fm is the new thing... It's probably out there for you to enjoy...

**Ben Ubois:** Fingers crossed.

**Adam Stacoviak:** ...in an App Store near you sometime soon. Airshow.fm is the future long-term URL for this new thing. Feedbin.com, of course... Ben Ubois, thank you so much for helping us to clarify some of the icky, fun, weird things about RSS that we just want to improve, but maybe it shouldn't, but maybe it should, but who's gonna do it, who's gonna champion it, whatever... This non-re-resurgence again to never happen... It could be just this smaller, critical mass... Whatever. But thanks for sharing your perspective. I think more than anything really just thank you for having solid ground to stand on as a product developer, which is the hardest part of making things. It's like, having firm, solid ground that you stand on and you say "This is what I want it to be, and there's a velvet rope of what features will go in, and what features won't go in." I think that's the hardest part as a maker, is determining what your lens is from which you're making your thing. So thank you for that. Thank you, Ben.

Anything else? Anything we didn't ask you, we didn't say yet? What's left? Anything?

**Ben Ubois:** Yeah, so I had some ideas of somewhere like technical directions we could go, but I think we're pretty long right now... But yeah, thanks for having me. I hope we didn't bore too many people. I love talking about this stuff, and I hope people are interested in hearing it...

**Jerod Santo:** Ditto.

**Adam Stacoviak:** It's been a pleasure.

**Jerod Santo:** Yup. Thanks, Ben.

**Ben Ubois:** Alright. Good talking to you.
