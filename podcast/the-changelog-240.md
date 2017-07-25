**Adam Stacoviak:** Welcome back everyone, this is The Changelog and I am your host, Adam Stacoviak. This is episode \#240, and today we're talking to Ben Ubois, the creator of Feedbin - a simple, good-looking online RSS reader. Feedbin is also open source.

We talked to Ben about the indie web and app developers, how RSS usage has changed over the years, particularly since Google Reader shut down. We also talked about RSS versus the social web that we're in now, and the idea of an RSS resurgence and taking back control over the content we choose to subscribe to.

We have two sponsors today, Linode and Hired.

**Break:** \[\\00:01:16.10\\\]

**Adam Stacoviak:** Alright, we're back. Jerod, we've got Ben Ubois here. This is an interesting show because of how far back it goes... It goes back to 2014.

**Jerod Santo:** Oh my goodness... So we have to give a shoutout to an old friend of ours, Alex Kessinger - you might know him as voidfiles on the interwebs. Alex suggested this in our Trello board, to have a show on Feedbin. Ben, you may know that as the feedbin.me days, not even feedbin.com. He said, "We should have Ben Ubois on, talk about Feedbin." This was January 2014, and it sat in our queue for however long that is.

**Adam Stacoviak:** Long time.

**Jerod Santo:** And not that we were not interested, it was just one of those things.

**Ben Ubois:** That's awesome... I had no idea. I worked for Alex for a time, and I like him a lot.

**Adam Stacoviak:** You worked at App.net?

**Ben Ubois:** No, it was after the App.net thing kind of collapsed, and we both joined a media startup company. He was the head of engineering and I was just working for him on whatever he needed. We just kept in touch since then.

**Jerod Santo:** Very cool. Was that around the January 2014 time range?

**Ben Ubois:** I'm bad with dates and remembering things, but...

**Adam Stacoviak:** Where were you at yesterday?

**Ben Ubois:** I don't know... Yeah, I was at home.

**Jerod Santo:** Likely story.

**Ben Ubois:** Yeah, so I had known him since 2013, and 2014 sounds about right going to work together.

**Jerod Santo:** Interesting. Well, we're here to talk about Feedbin, which is your open source RSS reader. We're here to talk about RSS, the business of it, the change in time, what were you all using, what Feedbin is, all the technology and stuff.

\[\\00:04:03.06\\\] I'll just say, as a bit of a disclaimer, that I've been a Feedbin subscriber/user probably ever since after the Google Reader shutdown... So a long-time user. Adam has not, as I introduced it to him - what was it, Tuesday? Or Wednesday?

**Adam Stacoviak:** Tuesday or Wednesday, that sounds about right. Not the concept of RSS...

**Jerod Santo:** Yeah, one long-time user and then you have one person who's not a user at all... So the gamut of potential users here.

**Adam Stacoviak:** Very gamut.

**Ben Ubois:** Yeah, but Adam, you said you do use RSS though, right?

**Adam Stacoviak:** I do, yeah. And I've been using RSS forever. I think when Google Reader did its thing I started using it less, and especially when Twitter became more of the thing to share news and to follow people and news, and not Twitter's this whole new thing where it's just everything. It's mostly angry people and politics these days... I don't even know what the heck to do these days.

**Jerod Santo:** It's harder to find the tech stuff there.

**Adam Stacoviak:** It's totally fine, but whenever you're trying to use Twitter as a RSS reader-ish kind of thing - or at least a news collecting thing, you have a hard time defining what news you're intaking. It sort of defines what you take in, because you have no control over your feed, whereas with Feedbin or the concept of RSS, obviously you're taking the URL or pointing to a URL and saying subscribe, and you have much more control over what you take in.

**Ben Ubois:** I agree with that, yeah. I think RSS totally lets you take control of your news feed... At least compared to Facebook, who's gonna algorithmically insert a lot of stories, but you still get to choose who you follow.

**Adam Stacoviak:** That's true.

**Ben Ubois:** But the content is still a little more wide-ranging than someone's blog, I think.

**Adam Stacoviak:** Right. I mean, you can make lists and things like that, but we give the control to social networks at first because they give us the... I don't know, they seem to care more about the end user at first. I can remember a day when Twitter actually cared about developers. Maybe they do more so these days, but they've had a bad reputation with their early adopters, so to speak, where they kind of like turned their backs on the early adopters of Twitter... Where you don't have a lot of people using the API like they were originally, or to the ones that do a lot more of that stuff themselves. But the point I'm trying to make is that we, as users of that platform, give a lot of control to them, and we consume the timeline in real-time, chronological, and then they go and change the game and they throw an algorithm behind it and they say, "Well, this is actually what you care about more. This is what you should care about more", instead of saying, "Well, I actually subscribed to that person, so I wanna get all their tweets, not just the ones you think I should be checking out."

**Jerod Santo:** Right.

**Ben Ubois:** It's interesting to hear you say, "Twitter used to care about developers, or currently does not care about developers." I look at it as like, corporations don't have feelings or really care about anything except for profit and...

**Adam Stacoviak:** Surviving.

**Ben Ubois:** ...that sort of thing. Some of them are socially conscious around the environment and that sort of thing, but more or less I don't think corporations have feelings, which is why I'm a big fan of indie software, because indie software is made by individuals, and individuals care about things and have feelings.

**Adam Stacoviak:** That's true.

**Jerod Santo:** Yeah, it's one of these continuums, right? Because the smaller the corporation, the more the individuals have to say, and especially once you hit a point - Twitter size, Facebook size - IPO, now you have shareholders and everything else. Twitter started off very small, it was a small subset of -- what was the \[unintelligible 00:07:55.29\] podcast company?

**Ben Ubois:** Odeo.

**Jerod Santo:** \[\\00:08:00.09\\\] Odeo, yeah. It was three people inside of Odeo building it, and when it first came out and all the early adopters, you could talk to the individual people who were not just working at Twitter, but were actually making the decisions. Over time, it grows and turns into something - I very much agree with you - that has no feelings or doesn't care (in terms of individuals' care), but it's one of these things... As tech users and people on the forefront, we see these companies incubate and start really small, and then we see them turn into something that they weren't, which is inevitable if they're gonna be successful.

**Ben Ubois:** Yeah, and with Twitter that can be painful, because people remember when it was small and you could name everybody who worked there, if you were following closely... And they were trying to attract people that you identify with, instead of celebrities and that sort of thing. That transition can be painful, but I think at a certain point you just have to recognize that it's not for you anymore, specifically.

**Jerod Santo:** Right. Let's get back to RSS here, because comparing and contrasting - and I'm with you, Ben, in terms of liking indie developers... Indie everything, really, and I think the open source mindset is very indie; it's like, "Let's just get together and build a thing together", and we've seen even that grow up over the last 5-10 years into something that it wasn't before. We've seen a lot of fruit from that growing up, and with that comes problems as well, but RSS has been all about indie, it's been all about control, it's been all about a really pure technological solution that's simple; it's right there in the acronym.

Tell us about your perspective on RSS and why you began Feedbin, especially in light of the Google Reader shutdown around 2013 - was it before or after that? Give us some historical context with you and RSS feeds.

**Ben Ubois:** Yeah, so I personally go back with RSS to around 2004... I was starting to get into web development at that time and I was visiting a lot of blogs - that was a pretty peak time around web developers talking about web development on their blogs, and I found myself visiting a lot of these sites and just kind of reading archives, but then I would come back to the sites. Then I feel like I was aware that in the sidebar people would link to their RSS feed, and I was like "What is this? This makes no sense." I click on it and it looks like machine barf, because it's all XML.

**Adam Stacoviak:** Machine barf is a good word. \[laughter\]

**Ben Ubois:** But then I came across NetNewsWire, which is a great Mac app developed by Brent Simmons at the time, and that let you put the machine barf into a very nice, consistent, well-designed format, and it let you be a completionist for any website you were interested in. If they post a new article, then you see that article in a very timely manner, and you can be sure that you're not missing anything.

**Adam Stacoviak:** That's Jerod's love language right there - completionist...?

**Jerod Santo:** I am a completionist.

**Ben Ubois:** Yeah. It also becomes the single destination then, because you're no longer visiting dozens of websites individually; you just go to one place, which is your RSS reader, to read all the content that interests you. So right away I was hooked, and I used that for years. When the iPhone came out, I think I started using Reader, which is a wonderful iOS app, probably one of my favorite iOS apps to this day.

Then I eventually switched to using Google Reader, which would sync with both NetNewsWire and Reader. And I was kind of down on Google Reader; I thought it was an interesting product and I liked the sync service, but I was thinking about it maybe in late 2011, early 2012... I was thinking, "Google isn't really \[unintelligible 00:12:04.12\] this all that much." In fact, they had a big update that \[unintelligible 00:12:08.22\] just to kind of like prop up Google+ or something, at the time...

\[\\00:12:16.09\\\] But I was like, "I kind of want something on the web, that's as good as NetNewsWire is on the desktop and Reader is on iOS, and Google Reader is not that." That, combined with -- you know, at the time I was working at a web development agency, but I was building mostly static marketing sites, and I loved seeing the backend development and system administration and all that stuff... I just felt like I wasn't getting enough of it. So I thought, "My number one passion and hobby is reading these RSS feeds... Let me see if I can build something for that."

So I started building it in Rails, which was also fairly new to me, in late 2012. Along the way, I was thinking this thing needs to have great uptime, because if I'm gonna be visiting it frequently it needs to always be up; that's gonna cost me money, basically, just to keep the servers going. So I thought, "Well, I'll build in a billing component, so that maybe I can convince some friends and family to sign up, just so that I can keep it running", basically so I can use it.

Feedbin launched in early March of 2013, and about two days after launch, Google announced that they were shutting down Google Reader, which was insane. The timing of that was really crazy for me, because...

**Jerod Santo:** Crazy good, right?

**Ben Ubois:** Yeah, in a good way. It was overwhelming in a way also, because right away there is a ton of attention in that space and on Feedbin. I didn't know what I was doing around running a web service, and I had a lot of catching up to do. I still had a day job at the time, and I was just working really hard to keep everything running, and...

**Adam Stacoviak:** Keep it up.

**Ben Ubois:** ...and try to spread the word that this is an alternative out there. Two days before - it was great timing, but if I had launched six months before, that would have been even better.

**Adam Stacoviak:** Because you would have been a little further along in your experience of running the service, not just launched and have to take in all this mass traffic.

**Ben Ubois:** Yes.

**Adam Stacoviak:** I'm assuming you had a hockey stick, right?

**Ben Ubois:** \[laughs\] Yeah, the Google Reader shutting down was huge, but the next amazing thing that happened was pretty much out of the blue the developer of Reader, the great iOS and Mac app, contacted me and said that he wanted to support Feedbin in his next version. So he has a huge built-in following, and Feedbin was going to be an exclusive service to Reader, at least for the time. That really put Feedbin on the map as a viable alternative, because everybody was already using Reader, and they would need something for it to synchronize with.

Feedbin had an API, and he was able to get sync working with that, and that kind of established Feedbin as a viable business, I think.

**Jerod Santo:** I have a very similar story to yours, minus the open source business that you began as an RSS reader fan. I never actually used NetNewsWire; I think I started on Google Reader, but used Reader (the app) on iOS. And I hated Google Reader's website so much that I actually used the Reader app for Mac as well... So when I found Feedbin, it was very much because I was using Google Reader as my sync service effectively, my dumb pipe, which worked very well for that purpose.

\[\\00:16:00.01\\\] And just for some historical context, this was the summer of 2013; it's when the whole Google Reader announcement and shutdown on July 1st (I looked it up) happened. Around that time -- I mean, there were thousands of us, maybe tens of thousands that were scrambling. Because as a daily user of Google Reader sync service - that was just going away. Many of us I think never actually found new homes; I think there's a lot of people that just quit using RSS at that point.

**Ben Ubois:** I think so, too. I see that a lot, and I kind of feel like those people just need to google it. \[laughter\]

**Adam Stacoviak:** I feel like there should be some sort of resurgence. I almost brought that up a little earlier, but I don't wanna go that direction too early... For the reasons that we just talked about - whether it's Instagram, whether it's Facebook... However you consume your community; it's kind of weird to say "you consume your community", but the point is the news, the information coming from the people you follow, if Instagram, Facebook and Twitter are those places, then they've all begun to dictate to you what information matters more to you, rather than you having the control, which is what we talked about earlier.

So I feel like there needs to be some sort of resurgence, because if it weren't for the -- what was the term you used, Ben? You said the "machine barf"? Because that's the hindrance. The machine barf is what stops people. They hit that URL, it pukes onto their screen, they're like "I have no idea what to do with this. Let me get out of here as fast as possible", back-back-back, and they never come back to RSS.

Or they've been there, they used the Google Reader, and they it bailed, it stopped doing what it did, and they're like "Well, I'm done, too. I'll just use Twitter."

**Jerod Santo:** Well, there was a time where the browsers were doing more to make -- I mean, there was this whole movement where (let's call it) consumer-facing RSS was a thing that was gonna happen.

**Adam Stacoviak:** Right.

**Ben Ubois:** Yeah, I also was gonna blame the browser vendors, because if you look at something like Safari, they used to have a nice XSLT stylesheet that they would put on top of RSS feeds so when you click on one it looks like formatted links and text, instead of raw XML.

However, I recognize that there's a strategy tax (I don't know if that's the right word) there, because they all have... Apple, specifically, has Apple News which launches, basically, an RSS reader.

**Adam Stacoviak:** Yes, it's definitely that kind of style.

**Ben Ubois:** They have an \[unintelligible 00:18:27.20\] but it crawls XML feeds. So with those kinds of conflicting interests and never being foothold at a browser level or OS level...

**Adam Stacoviak:** Do you feel like page views is a concern here, though?

**Ben Ubois:** Yes.

**Adam Stacoviak:** Because that to me is a reason.

**Ben Ubois:** You have a choice whether you want to publish an RSS feed or not, and for the sites that do choose to publish an RSS feed, I think it makes sense for the browsers to do something with that. Because the browsers aren't making anybody do anything they don't wanna do, and the website operators have full control over whether they wanna have an RSS feed, whether they wanna have full-content RSS feeds, all that kind of thing.

However, I think that the kind of business that would not want an RSS feed also is the kind of business that would not have a very interesting RSS feed. The interesting content out there, in my opinion, is all the personal blogs of people who are not really in the business of producing content. They do it because they're interested in what they're writing about, or recognize that there's value in what they have to say.

**Jerod Santo:** \[\\00:19:49.28\\\] That's exactly how I use RSS, and which is why I still love it to this day. Because I am a completionist, Adam, and I absolutely have to get to inbox - zero, RSS - zero, Twitter - zero, all the zeroes... Because of that, it limited how I used RSS. I couldn't subscribe to the people that, as you said, Ben, wouldn't have -- well, you can't subscribe if they don't have a feed, but there's a lot of sites that publish feeds, but they're not good RSS feeds... Like Mashables, if you subscribe to like a Hacker News feed - you're just getting aggregated content or the quick hit news, and huge batches throughout the day. It's not a good way to go about things.

But like you said, Ben... If you find the indie bloggers, the guy over here who like to write about this thing, and the gal over here who loves web animations and she publishes maybe - you don't have to keep up - once a month, and you're gonna see that. There's so many goodies that come in an RSS if you do it that way.

**Ben Ubois:** Yes, low volume is a key to enjoying yourself with RSS.

**Adam Stacoviak:** Well, especially if you plan to get to the end of the feed. \[laughter\] In the case of -- Jerod, what you had said... Even if you're not a completionist, right? Even if you just plan to keep up, let alone complete.

**Jerod Santo:** Right.

**Adam Stacoviak:** Try to subscribe to Hacker News, some sort of frontpage feed; consider yourself consumed with that, it's gonna be a fire hose.

**Jerod Santo:** Right, it consumes you.

**Adam Stacoviak:** Exactly. And I think the point of RSS - at least what I like most about it - is that it puts you in more control over the things, because you can easily just delete something from your feed and now you don't subscribe anymore, because "Hey, the frequency got too high" or it kind of moved you away from this personal relationship with the indie artist out there and whichever nice you're hanging out in, and you're actually able to get through that news, versus feeling overwhelmed. It's a whole different topic, but I think in general people are overwhelmed today.

**Jerod Santo:** I tend to agree. Let's loop back into the business side of it here, Ben. Back to the Google Reader thing, we had a bit of a Cambrian explosion; you had great timing... There were other people that were scrambling to get together their alternative services. There were some little small players like yourself, there were big ones giving it away, and here you are charging. Feedly, for instance, was one that was really popular around the closing, because it was free; maybe \[unintelligible 00:22:14.17\] I don't recall, I haven't used it since... But you had all that competition, then you had the Reader thing, where you exclusive, or at least right up there up front.

So you had these two big moments early on where you probably got a lot of customers, but you're very much in a dwindling - you even said, a lot of people just moved on... We are the few, the proud RSS readers. The users are small, so here you are, trying to build a thing. I thought you had \[unintelligible 00:22:45.25\] probably because your website might be updated - where you said you worked at Flickerbox. Is that no longer the case? You're full-time on Feedbin?

**Ben Ubois:** Yeah, so I switched to doing Feedbin full-time actually in early 2014, because I had gone to the point where I felt comfortable financially to do that.

**Jerod Santo:** Awesome.

**Ben Ubois:** Yeah, that was awesome. That was a good feeling. It certainly was not my intention, it was not anything that I was shooting for, it just kind of fell on my lap, which I hate to say, because I know that a lot of people try very hard to make that happen and it doesn't work out for them. So I recognize that I was very lucky, and I tried to be thankful for that, especially when things started going well.

**Jerod Santo:** Sure.

**Ben Ubois:** \[\\00:23:39.28\\\] So RSS I would say is dwindling, and there are few people who are into it, but the people who are into it are passionate. Feedbin has probably more customers that signed up before Google Reader shut down than after. So there's more people that have been with Feedbin since the beginning than there are that have signed up since then. They stick with it, they come back every day, or at least several times a week. I think this is probably an industry-leading number, but the average time on the site is over 70 minutes for Feedbin, which I think beats Facebook and anything else out there.

**Adam Stacoviak:** That's a lot.

**Ben Ubois:** So these people are into it, and that's all I need for Feedbin to be sustainable.

**Jerod Santo:** Very cool. Well, I wanna dig into Feedbin the product, talk about what it offers, talk about the open source and the technical side of how it's all wired together, because that's very interesting to us, too. So we're gonna take our very first break, and we'll take that up on the other side of this.

**Break:** \[\\00:24:53.22\\\]

**Jerod Santo:** Alright, we are back with Ben Ubois, talking about RSS, talking about Feedbin, talking about open source and software. Ben, give us the lay of the land of what Feedbin is. You gave us the start of it, and a little bit of the business angle about some of your fortuitous timing. Tell us about the product, what it is today, and maybe even tell us where you'd like to take it.

**Ben Ubois:** Feedbin is primarily a web-based application, it's a full-fledged replacement for something like Google Reader. You could also use it instead of any native app; it works great on the desktop and will work on mobile, as well. A lot of people also do like to combine it with a native app like Reader, which is probably one of the most popular ones out there, because they just like the native app experience. Feedbin will synchronize with Reader, and then everything will be reflected when you log back into the website, and you can pick up right where you left off.

The way that I like to think about Feedbin is just as a nice place to read on the web. I think the web has gotten increasingly hostile with ads and pop-overs, and just de-emphasizing the content in an unhealthy way. Feedbin is all about the content; there's nothing there except for your content that you choose to subscribe to, and tools to help you enjoy that more and manage it better.

**Jerod Santo:** \[\\00:27:54.04\\\] Very cool. How about, in addition to it being a nice place to read on the web - does it have any unique features beyond what you'd get with a Reader, perhaps? The one thing about Google Reader - at least the way I used it was it was just my sync service. Does Reader offer things above and beyond like a sync for your OPML, if you wanted to use it with an app in front of it, like the web interface? I guess I'm asking this really poorly, but are there other features that set it apart, perhaps from other RSS things?

**Ben Ubois:** If you are primarily or exclusively using RSS through a native app, I would say the experience of using any RSS service is largely undifferentiated. And that comes back to what the app authors want to implement; I think an app author would wanna provide a consistent experience across any service that they support. So while Feedbin does offer some extra API endpoints that would enable app developers to support some of the extra features that Feedbin has, they don't always choose to do that, just because it is then inconsistent with other RSS backends. So that is a real challenge.

The question then becomes "Why do you use Feedbin over any other service if you are just using a native app?" and I think about that all the time, and I work towards that goal of differentiating it. I don't think I've been super successful in that regards, because Feedbin does cost money, and there are free alternatives. With a larger company - like Feedly - I kind of get nervous around what their intention is. They're a freemium product, and I just feel like with that they have to make compromises around features, to get you to upgrade, and how they think about and treat your data.

With Feedbin - I think of it as a premium product, and you get a lot out of it, because I don't have to hold back anything. Every idea I have for what would make it better is available to every customer, and I treat it as well as I can around uptime and performance, and I've put a lot of money into the infrastructure and servers and all that stuff. So I think it's just a very well crafted experienced that is not matched by any of the other services.

**Adam Stacoviak:** Feedly has got some interesting language on their homepage. Their selling point at least, which I'm assuming that's what this is, is just right underneath the "Welcome to Feedly", and it says, "The content you need to accelerate your research, marketing and sales." It says it twice - at the top and at the very bottom. There's no other links to a blog or About, or any details to research what they are, but I can imagine that's the best selling point, to say "Here's a way to consume RSS feeds." I'm not saying it's bad, it's just confusing to me. I don't get it.

**Ben Ubois:** It's an approach that I recognize, which is "How do you explain what RSS is without using the word RSS?" That language to me sounds like, "Oh, you're a business professional", whereas I think Feedbin is more targeted at web professionals, savvy users and just passionate people in general with diverse interests. It also doesn't shy away from being techy. There is stuff in Feedbin that you wouldn't understand unless you have a pretty firm understanding of how the web works. However, there's a great interface on top of all that that makes it look nice and enjoyable to use.

**Jerod Santo:** \[\\00:31:52.09\\\] What's interesting to me is you have multiple pressures on Feedbin as a business, and just to put it out there, Feedbin is $3/month subscription fee, so that's the way Ben supports himself with it. You have free alternatives, like Feedly and others, where like you said, if you're using it as a sync service and you have native apps on all your devices, you can't actually do better than a free service, in many ways.

Then you have the dwindling use of RSS, which we've discussed, and the increasing use of social networks. Then you have the inability to explain it to people who may love RSS, if they could just get over that technical hurdle. So you have all these different struggles as an independent developer trying to support himself with a business, and in light of all that, you also open sourced it. So the very last thing you could think of, as reasons why I may not subscribe to Feedbin, is now you get the person who's super technical and they love RSS and they think Feedbin is a superior experience, but they're a hacker. So now they can say, "Oh, I can just run it on my own server. It's here, open source." That seems like your last holdout. So tell us about the decision to open source it, why you did that and how that's going.

**Ben Ubois:** I didn't put too much thought into it. I thought about how it would impact the business and that sort of thing, and I kind of decided that I don't feel like it's a threat that someone can run it themselves. I think that that should give any customer confidence that they can look at the code and see that nothing is happening with their data that they don't know about.

**Adam Stacoviak:** So it's more for transparency.

**Ben Ubois:** Yeah. They can add features and they can run it themselves if I get hit by a bus, or whatever. Also, I was interested in trying to see if it could be a successful open source project. I guess I was doubtful about that...

When I look at open source in general, I kind of feel like the successful projects are framework and utilities. I can't really think of any full-fledged applications that are also successful open source projects.

**Jerod Santo:** I'm trying to think of a counterpoint, but I can't do it. \[laughter\] Adam, maybe you can think of one... What's a very successful open source app or product? One that I was thinking of, that I used for my business is Errbit, which is an open source version of AirBreak, which used to be called Hoptoad, I think. It's an error-catching service.

**Ben Ubois:** I've never heard of any of those things.

**Jerod Santo:** Okay, so when Feedbin throws a 503 or whatever, where do your errors go? Maybe to your logs, and now you're tailing logs and all this kind of stuff. Well, you have error-catching services which do a nice job of parsing and displaying and notifying and all these fancy things, for other applications. So it's a web app that I run on Heroku, and I use it to catch errors, and I log into it and all these things. There's lots of people that use that one in effect; I think that's probably also in our backlog, Adam, of people to talk to... The Errbit folks. So there's one.

There's a for-sale alternative to it. So that's an example, but I tend to agree with you. Changelog.com is an open source - it's not a product, but it's an open source application. We haven't seen a Cambrian explosion (is it the second time I said Cambrian explosion?) ... We haven't seen a huge influx of PRs. We've seen plenty, and we're thankful for those...

**Adam Stacoviak:** Enough to make it worth it.

**Jerod Santo:** Oh, definitely worth it, but it's not like the whole community is building this thing, right? I'm assuming that's how Feedbin is. It's not like... Well, you have 24 contributors (I'm just looking at your GitHub page) so it's not like the Feedbin user base is building Feedbin with you.

**Adam Stacoviak:** There's actually an upcoming sponsor we have that has a similar story in terms of open source in a parallel product that's hosted and sold as a hosted product. But you could take this thing and run it on your own... It's called Sentry; it's for error tracking, since we're talking about error tracking.

**Ben Ubois:** \[\\00:36:07.01\\\] I was gonna mention Sentry, because that's in the same vein as what you were just talking about.

**Adam Stacoviak:** Very similar in terms of product development. Open source product - you can totally take Sentry and host it yourself and run it yourself; it's the same exact thing that you would buy or try for free on their site.

So it seems to me like where you have this open source core or open core - which is becoming more and more of a trend - and you build on top of it as a hosted thing, but the open source version is like "Hey, if you want to use that or you want to use it differently, here's your licenses..." or for whatever reason it's open to you to use however you like. You've got the service that parallels it, and sustains it, frankly.

**Ben Ubois:** Yeah, so another hero of mine - I believe someone who has been on the Changelog in the past - is the author of Sidekick, Mike Perham.

**Jerod Santo:** Oh, yeah.

**Ben Ubois:** His business model was inspiring to me, because Sidekick is an open source background job processing utility that integrates great with any Ruby environment, and he also offers a commercial license for it. But again, I think of that more as a utility, rather than a full-fledged application, although it does have a very nice web interface. I think he's been very successful with that as a business, and I think it's an interesting example of sustainable open source, because he has built-in motivation to keep making it the best background job processing framework out there.

**Adam Stacoviak:** It seems to me like you're trying to downplay the thing you've done, though. Does it seem like that to you, Jerod?

**Jerod Santo:** In terms of open sourcing it, or building it?

**Adam Stacoviak:** Well, just that it has less ability to be successful. It's almost like you seem surprised, Ben, to some degree, that you're successful, or that RSS could be or a feed reader could be that important to people, it being open source, and a paid service could be more successful than it currently is. It almost feels to me like you're just not sure of it.

**Ben Ubois:** Yeah, I would say that's true, I am not sure of it. It's hard to do any kind of attribution tracking around how big of a bonus is that for customers that it's open source. And just looking at the pull requests history, it's like, yeah, there's been a few awesome contributions, but there's far from a thriving community there.

So I would say it is somewhat unproven whether it's a positive or a negative thing. I like it, I think it's interesting, however I don't know how much that's worth.

**Jerod Santo:** Well yeah, six open PRs, 66 closed; I'm not gonna get a count on how many of those were merged, but these aren't terrible numbers... Now, of course, you have your own subjective opinion on what's been good or bad, or has it been a support burden... You do have 53 open issues, so there's people that are reporting bugs, and I agree, especially as I hit your Readme and I see that you have a gazillion environment variables to define and all sorts of other things to get it going... \[laughter\]

**Adam Stacoviak:** Wow, that is a gazillion...

**Jerod Santo:** Well, he has all these services you could share with, and stuff.

**Adam Stacoviak:** Yeah...

**Jerod Santo:** I would probably look at this and say, "Yeah, I'm gonna pitch them $3/month, because this isn't worth my support", even though I could definitely run the server if I wanted to, right?

**Ben Ubois:** Yeah, it's s still cheaper than the cheapest DigitalOcean instance, so I think it's a pretty good value to just pay for it.

**Adam Stacoviak:** \[\\00:39:43.11\\\] Back to the indie thing, though... I think that as anybody who's probably in that realm of RSS, they probably have some kindred spirit to the indie software developers in the web world, in the blogger world, where they are going to want to support you. It's less about value, and it's more about -- it's value plus... It's like, "I get value from not running my own DigitalOcean server (or name your host here)", but at the same time they wanna support you as a developer to keep making it happen, because they value the end-all product they're using, not just the fact that they give some money or they save some money.

**Ben Ubois:** Yeah, and I think that's huge. Like I said, RSS people are passionate people, and they do care about who they're giving money to, and that design matters, and everything else like that. So I almost think about Feedbin as indie Mac software, even though it's very much web-based.

**Adam Stacoviak:** That's a good time to take a break, actually. We'll take this break, and when we come back from it, we're gonna dive a little deeper into how this thing actually works, so when you do use it on-site or if you run the open source version on your own server, you know how it works. We'll be right back.

**Break:** \[\\00:41:01.03\\\]

**Adam Stacoviak:** Alright, we're back with Ben Ubois, and we're talking about this awesome thing called Feedbin. I've never used it; I'm gonna sign up, I'm gonna check it out, but one of the things we wanna know about is behind the scenes. You mentioned it's a Rails app... What else? There's a gazillion environment variables... What else have we got going on here?

**Ben Ubois:** Yeah, I think I mentioned earlier that I was pretty new to Rails when I was starting out with Feedbin. I'd actually used it way back in 2006 for a college thing, and then took a very long diversion, working in PHP for many years, and then started getting back into Ruby and thought I'd build Feedbin in Rails.

\[\\00:44:08.02\\\] So I tried to make it as vanilla as possible, just because I didn't have a better opinion than what was already there. I like the philosophy of Rails and all that... So that's really the main app. The other things that are in use are Sidekick, which... I really even had scaling problems early on; I didn't know what I was doing, and there was just way more stuff that needed to be done than I had anticipated because of the growth. So Sidekick kind of solved scaling for me. The biggest issue was "How do I check hundreds of thousands or millions of feed URLs efficiently and in a timely way?" Because you know, if you're on a single thread in a Ruby process, every HTTP request is gonna take, on average, a couple of seconds. So that just does not work out if you're limited by number of processes. Because of Sidekick's threading model, I was able to really parallelize that and actually push that out onto a handful of cheaper DigitalOcean servers.

That runs on eight different servers right now, with a few Sidekick processes for piece, and then it can have maybe like 1,500 requests per second that way... Which is a number I'm proud of. I know there's probably Go and Rust people who are like, "Pff... Whatever", but that works well enough for me, and it does it in a way that I feel like it's never far behind anything. So I've been really happy with that.

The only other separate service that's similar to that is this image processing system. Feedbin, when possible, will try to pull out a relevant image for the article, and put that next to the article's summary. When I was building that, it was really important to me that the image be high-quality. I have worked on designs where it was \[unintelligible 00:46:21.26\] like, "Okay, every piece of news here has to have an image next to it", and I've seen other readers designed in that way also.
The result is that you get some really low-quality, pixelated logo of some company, and that just doesn't look good. What I wanted to do was make sure it was frequently photography, and that there's a minimum size, formatted as a JPEG - I think that's a good indication that it's gonna be a better quality than a PNG, or more indicative that it's gonna be a photograph. So it goes through all these filters and criteria, and then it gets resized with ImageMagick, and then pushed to S3. Then Feedbin can pull that back in and display it alongside the content.

Also, one thing I'm really happy with - I got this idea from Twitterrific, the iOS Twitter client, where they blogged about... Apple has a bunch of cool image APIs, and one of them does face detection. So it will tell you in like an X/Y coordinate wherein the image faces appear. What they did with that is they were like, "Okay, we'r gonna crop all these images so they fit into our template, but we don't wanna cut off heads in the crops." So using the facial detection - in this case Feedbin does not use Apple stuff, so it can't use those APIs, but it uses another project that does the same thing; it will figure out where faces are...

**Jerod Santo:** \[\\00:48:03.06\\\] What project is that, do you know?

**Ben Ubois:** The name is escaping me at the moment, let me get back to you on that.

**Jerod Santo:** Nokogumbo?

**Ben Ubois:** No, that's more of a general purpose HTML5 parser.

**Jerod Santo:** I'm just looking at your gemfile trying to decide, "Which one of these gems is what he's using for that part?" That was my guess.

**Adam Stacoviak:** OpenCV?

**Ben Ubois:** Yes, OpenCV, that's correct.

**Jerod Santo:** There you go.

**Ben Ubois:** Yeah, so OpenCV has that feature as well, with the face detection, so Feedbin can make an intelligent crop on any image that has a face in it, and keep that centered. The results of that are amazing, because it looks like it was done by hand, rather than by a machine.

**Jerod Santo:** Yeah, I can really say that as a user I've been very happy with those results. I remember reading a blog post and thinking, "I don't know if this is really gonna work", but it almost looks like these images are art-directed, because it finds the interesting part - especially with the faces - and it turns out remarkably well, so I'd just say job well done on that.

Tell us about the process... Does that image detection, cropping and associating into S3 - is that part of the crawling process, or does that happen when you hit the Feedbin homepage? Where is that in the flow of the application?

**Ben Ubois:** Both the feed refreshing service and the image processing service - they're Ruby apps, but they're just based on Sidekick. The only process that's running there is the Sidekick process. From the Rails app, those get feed up as Sidekick jobs, but it's set up in a way so only these specific servers on DigitalOcean will grab them. Then that service will then take over from there. So the part that does the work is just a Sidekick job.

**Jerod Santo:** Gotcha. Keep it simple.

**Ben Ubois:** Yeah.

**Jerod Santo:** So you have those three major sections - you have the web app, you have the refresher, you have the image service, and it looks like you also have some sort an HTTPS proxy probably, because you're pulling images that are mixed content, or something...?

**Ben Ubois:** Yeah. I almost feel like it's less of a big deal now. Browsers have de-emphasized the mixed content thing. But that was a cool little project I found from GitHub (it's called Camo) which will re-write image source attributes to point to their proxy server. So then your proxy server terminates SSL and then makes the request to the image and then returns that, so then you don't get the next content issues.

**Jerod Santo:** Cool, I guess on the technical side I would just have one other line of questioning, which is around the web interface itself. It's almost hard to say, it seems like it's maybe like a single-page app launcher \[unintelligible 00:50:55.29\] or it's at least at a kind of rich Javascript environment; there's a lot of keyboard shortcuts, there's a lot of navigating without actually changing the URL... Can you talk about the frontend architecture a little bit?

**Ben Ubois:** Yeah, so the thing that I am most proud of here is the design, and that's the work of a very talented designer I work with named Todd Collins, who works at the company I used to work at, Flickerbox. And the way it all works technically is for the most part through Rails remote Javascript execution. So when you click on something, that will render a .js.erb file, which will come back over HTTP and then execute in the full Javascript environment.

However, that hasn't always offered the performance that I wanted, so there's also extra Javascript on top of that, so that "When I click this thing, I need something to happen now, not when the HTTP request finishes." It's a little bit of a weird hybrid between the remote Javascript and Javascript on top of it.

\[\\00:52:04.25\\\] I don't love it, but it's been flexible enough that I can get everything done that I need to get done, but I'm also keeping an eye out for something like Amber, which might be a better fit eventually because it is very much like a single page app... At least the primary app, not so much the setting screens, but the main interfaces.

**Jerod Santo:** Exactly, I would tend to agree, and that's why I was curious how it was put together, because it seems like it's very much your poster child for a framework like Amber, or some sort of React-based thing. Real quick, tell us about actions, because we're talking about differentiation and this seems like a place where you're really embracing your nerdiness, which is really why I even ask you specifically about this features. It's almost like an "if this, then that" type of a thing that you've built into it... Can you tell us about that?

**Ben Ubois:** Yeah, people love actions, and it was the often requested feature, like "How can I filter this stuff?" It worked out really nicely, because I was looking into adding full-text search to Feedbin, and I settled on Elasticsearch (which I'm a huge fan of). Elasticsearch has so many features that I couldn't even begin to understand it all, but one of them that jumped out at me was something called the Percolator. The way the Percolator works is it's almost like a saved search. You say, "Here's the terms that I'm interested in. Now when I send you content, also go ahead and tell me it if matches any of the registered searches that you know about."

That was a perfect fit for what actions does, because acting on content as it's published... A super common one is people don't wanna read an RSS article that has the word "sponsor" in it.

**Adam Stacoviak:** Oh, sneaky... \[laughter\] I haven't thought about that, but that does make some sense. So you're essentially performing a grep on the article content, and if it contains something, do something with it.

**Ben Ubois:** Yeah.

**Adam Stacoviak:** So what are all the actions you could do with it?

**Ben Ubois:** A more positive one -- I don't love that, because I think people should support the content... So a more positive one, and one that I use - or have used in the past - is let's say you follow a website that has multiple authors, but I like to follow individuals rather than websites. So if there's only one author that I'm interested in, but their content is mixed in with a bunch of other authors, then using actions... I can use a negated search, like "author is not John Doe" and then mark that as read, and then that feed will only show me articles that are written by the author that I'm interested in.

**Adam Stacoviak:** Wow.

**Jerod Santo:** That's actually really cool; I didn't even know you could do that. I have a specific use case for that, that I'm gonna go do. Awesome.

**Ben Ubois:** Yeah, so you can then scope that to a specific feed, because you only want it working on that one feed that you're interested in. And then you can set up what you want the action actually do. So like if it matches, then go ahead and mark that as read, or alternatively you could star it. If you're using Safari on the Mac, you can actually have it send you a native push notification for that article.

**Adam Stacoviak:** I'm looking at that same interface right now on Chrome, so I'm assuming that it would say "Mark it as read", "Star it" or "Notify", if I was in Safari.

**Ben Ubois:** \[\\00:55:58.27\\\] Yeah, that's right.

**Adam Stacoviak:** That's interesting. So essentially, you're \[unintelligible 00:56:01.20\] doing some sort of grep on it, which could be a negative or a positive towards a search in there, you can include certain feeds that you've got in your feeds, and do those three things with it. Are those the only three actions you can do with it?

**Ben Ubois:** Yeah.

**Adam Stacoviak:** I mean, that's all that matters to a feed reader, right?

**Ben Ubois:** Yeah. There's an idea I've been kicking around, and I don't wanna promise anything, and I generally never pre-announce features, but one idea that I've always wondered about is something that is more along the lines of "If this, then that", which is that Feedbin also has a lot of built-in sharing services. It'll hook up with your Pinboard account, and then you can easily save articles to Pinboard.

**Adam Stacoviak:** That makes sense.

**Ben Ubois:** So the idea that I had was combining that with actions to automatically send stuff that matches that to Pinboard. The downside of that for me is it's not very purposeful that way. If you're saving something to a service like Pinboard, I kind of want that to be very intentional, and not in an automated way that's just spewing stuff over to that account. But I kind of like am down on \[unintelligible 00:57:21.13\]; I know a lot of people love it, but I also feel like you should be really thoughtful about what you are archiving, because there's a tendency towards just wanting to save everything, which is almost like a hoarding tendency in my mind.

**Jerod Santo:** Also the same thing on the sharing side, too. I mean, if you think about hooking it up to a Twitter or to a Facebook share... You could say, "That'd be really nice... But is it, though?" Like, are you just adding to the noise of automatically sharing...?

**Ben Ubois:** Yeah, so I would have agreed with you in the past, because even launched without any shining features -- I was like, "I don't like sharing stuff. I'm an introvert, I think that social is kind of lame." What changed my mind about that is I was thinking about -- you were saying earlier that people are moving away from RSS and to sites like Twitter and Facebook, but if you think about where content on the web originates, it's not from Facebook and Twitter, it's from websites that usually have RSS feeds. So if you're gonna be the one that originates content, then you need tools to help you do that, and Feedbin can do that for you using those integrations.

**Jerod Santo:** I see what you're saying. As a publisher, you're basically syndicating yourself via your RSS feed, through Feedbin, if you wanted to.

**Ben Ubois:** Well, I don't have an non-awful term to describe this, but if you're like a thought leader type, or just someone who likes to share interesting stuff, then I think a very good way to surface that stuff is through RSS, because how else are you gonna stay on top of all that content? If you're just on Twitter and looking at what other people are linking to, then you're already a step behind. But if you're on the RSS feed, then you're right on the source.

**Adam Stacoviak:** That is certainly true, especially if you've been doing a great job of curating various groups or sites that you can put into folders... So if you've been doing a great job of curating great sources over the years, whether it's for yourself or for your team, or if you're like us - Jerod and I, we keep our finger on the pulse on a lot of stuff, and he uses RSS far more than I do... I think though, Jerod, it's probably more personal for you, but it does trickle obviously into the work we do here at Changelog.

**Jerod Santo:** Oh, yeah.

**Adam Stacoviak:** \[\\00:59:57.06\\\] I never really considered that using RSS more heavily gives me more control over hearing about the things I might typically hear about I guess more at the source perspectives, versus hearsay or retweets on Twitter, and already filtered from somebody else.

**Ben Ubois:** Yeah, one integration that Feedbin has is a way to post links to Tumblr. If you are authoring a link blog or something like the Changelog used to be, you could see an article that's interesting in Feedbin, and then pull down the Tumblr share sheet and then post that directly to your link blog, without leaving Feedbin.

**Adam Stacoviak:** So you've been doing this for a little while now, right? This is your full-time thing, right?

**Ben Ubois:** Yeah.

**Adam Stacoviak:** You do nothing else, nobody else vying for your time - it's simply Feedbin; it's what you spend your art on. Your creativity is all poured into Feedbin, is that right?

**Ben Ubois:** Yeah.

**Adam Stacoviak:** So it's pretty important for you to have a great outlook on where RSS is going, wouldn't you say?

**Ben Ubois:** Yeah.

**Adam Stacoviak:** Or at least you should.

**Ben Ubois:** Yup.

**Adam Stacoviak:** Okay.

**Jerod Santo:** Are you leading the witness? \[laughter\]

**Adam Stacoviak:** If that's the case, then I'm kind of curious what your thoughts are on where things are going. Earlier - it may have been in the break, I'm not sure - I think I said we need to have a resurgence, because clearly the three of us see some great utility in this. Clearly, you and Jerod are far more an RSS users than I am, although I still use it, just not quite as often... I'm kind of curious where RSS is going. How can we bring this, how can we create resources, how can we bring this back to a more personal relationship with a lot of the indie creators out there? What do you think is happening here? Where are we going?

**Ben Ubois:** Yeah, so I do think, unsurprisingly, that RSS is more important than ever, and especially around taking control of your own newsfeed, because there are people who are out there who are intentionally misleading you. The only way to prevent that is to read content from people you trust, and I think RSS is the best way to do that.

**Adam Stacoviak:** That's really the truth. It happens a lot in the news these days; it's a big topic, at least politically... I think a personal relationship with your content is pretty awesome. I'm often talking to Jerod - and he's a completionist, so he's sharing often these stories with me of how he's going through his RSS reader, and I'm just envious of that; I've been waiting to get back into that groove... And I do it; I do it kind of in fits and starts, where I get back into that groove, and then I kind of... It's like reading or writing - I wanna read more often, I wanna write more often, but it kind of wears off after a bit and I kind of fall off the horse. Then I talk to Jerod again, and Jerod's like, "Oh, it's so awesome. This horse is so great! I'm riding this horse with RSS feeds..." \[laughter\] My metaphor's dying on me.

**Jerod Santo:** I never say that to you.

**Ben Ubois:** \[\\01:02:55.13\\\] I think the first step with RSS is to be passionate about something. Once you have that, the rest just kind of happens naturally. Think about what you're passionate about and what you would like to know more about, and then go find that stuff and subscribe to it.

**Adam Stacoviak:** Real quick before we let you go - where can people find you at? What's the URL for Feedbin? Is it feedbin.com? You were feedbin.me back in the day, is that right Jerod?

**Jerod Santo:** Feedbin.me, back in the day.

**Ben Ubois:** There's kind of a funny technical reason behind that switch, actually... Feddbin.com was not available; it had already been purchased and was offered for sale by some kind of domain reselling service... You know, one of the leech types of services. I was pretty happy with .me, but for some reason not all top-level domains are treated equally, so I started getting bug reports that people connected on Wi-Fi services offered through AT&T at Starbucks could not connect to Feedbin. The issue turned out to be that AT&T could not connect to any .me top-level domain.

That was a really weird thing, because I assumed top-level domains are one of those things that always just worked, but that's not really the case. I was like, "Well, I want the .com, because I'm old enough that .com means something to me, and I have the money now, so let me just get that and also solve this other technical issue." So yeah, a really long way to answer your question of yeah, Feedbin is at feedbin.com

**Adam Stacoviak:** There you go. Did you have to pay a lot of money for it, since they were selling it?

**Ben Ubois:** Yeah, I think it was like two or three thousand.

**Adam Stacoviak:** Wow... That's a lot for an indie. It's a lot of money.

**Jerod Santo:** Straight off the bottom line.

**Ben Ubois:** It was meaningful to me... It was meaningful enough to do it, so it was worth it, I think.

**Adam Stacoviak:** Yeah. Well, Ben, it's been a pleasure to have you on the show, man. Thank you for sharing the story of Feedbin with us, and potentially the future of RSS. Maybe the revolution will be charged by you, we'll see. Thanks for coming on, man.

**Ben Ubois:** Yeah, thank you, guys. This was a lot of fun.
