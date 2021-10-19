**Jerod Santo:** So Aaron, we have you here to talk about a few different things - OAuth, IndieWeb, tracking yourself since 2008, as it says on your website... You're super into tracking your location. I thought we'd start there, kind of interesting... I mean, we're all being tracked at this point, but you're doing it to yourself, on purpose. Do you wanna tell us about that?

**Aaron Parecki:** I've been doing it for a long time. 2008 was quite a whole ago now...

**Jerod Santo:** Yeah, totally.

**Aaron Parecki:** I've just always been fascinated with data collection, and personal data collection about myself, and I actually technically started tracking myself at least ten years before that, when I dug up some log books that I'd found from my early childhood, or having written down when we left for school and when we got there, and the times... And it was about two years of this, of this collection of notebooks that I've found, with that... And I was like "Yeah, that explains a lot. That explains a lot."

**Jerod Santo:** So you've been doing it on purpose, \[unintelligible 00:03:43.29\] GPS for a long time. Have you learned anything about yourself, habits, or...? Has that data tracking -- I enjoy data tracking, but I always think... I stopped doing it; I'm like "Why am I doing this?" Because there's nothing actionable. There's nothing to learn. But it seems like you're getting something out of it. So have you revealed things about yourself, to yourself, or what?

**Aaron Parecki:** \[04:07\] I know that that's really the glamour idea of learning insights about yourself, and things like that... And there's definitely some ways where that's possible, but I would not say that's my primary motivation at this point for doing it... But what I have done with that data is used it to remind myself of things or used it to be able to geotag or remember where I was on a certain date, or tag other things with my location. So if I have a -- well, I guess cameras do this automatically now, but if I have a photo from a not-smartphone camera, with just a date on it, and I wanna be like "Where was that from? Where was I when I took that photo?", I have that data now, so I can go back and dig it up and correlate it with the location, because it has a timestamp.

**Adam Stacoviak:** Were you a big Gowalla user, by any chance?

**Aaron Parecki:** Oh yeah, and I still use Foursquare.

**Adam Stacoviak:** Foursquare or Gowalla, which one's for you?

**Aaron Parecki:** Well, Foursquare now, because Gowalla is gone.

**Jerod Santo:** Right.

**Aaron Parecki:** But I did use Gowalla briefly, and then switched to Foursquare, and have been using it since then.

**Jerod Santo:** You still use it.

**Aaron Parecki:** Yeah.

**Adam Stacoviak:** That's interesting. Logbooks even... Like, before GPS, you were logging yourself.

**Aaron Parecki:** Yeah, totally.

**Jerod Santo:** Like, writing down "I got home at 3:28 PM", that kind of thing?

**Aaron Parecki:** Yeah, I made a little spreadsheet on a little notebook and filled in with the dates and times, I filled out who drove the car that day...

**Jerod Santo:** That's kind of cool.

**Adam Stacoviak:** What do you think made you do that? What were some of the early thoughts around doing it? Did you do it intentionally, or was it just sort of like for fun?

**Aaron Parecki:** I have no idea.

**Jerod Santo:** No idea.

**Aaron Parecki:** I mean, it was definitely intentional. I have no idea why I did that.

**Jerod Santo:** Well, one thing you said is you're kind of obsessed with maps... And I think -- actually, Jack Dorsey once said that about himself... You know, the idea for Twitter when it started was like what's your status, or kind of like what are you doing right now... And that came out of his interest in like where people are, and what they're doing. And he kind of thought of it like in a train sense, or in like a -- there was a mapping part of what his thought process was there. Now, obviously, he stumbled upon something quite different from that, but... Was your interest with maps tied into the interest of like "Where I am, when I am"?

**Aaron Parecki:** Yeah, definitely... And I also remember doing this as a child on long road trips between Portland and California - I remember taking the giant fold out maps and a highlighter and then tracing the route on the map, but in real time. So like "Oh, now we've made it to this off-ramp. Let's go fill in that little trace. Oh, we've made another mile. I can see this mile marker", so I'd trace that. Doing that in real time, because you know, GPS tracking hadn't really existed at that point.

**Jerod Santo:** Right. That is kind of cool. Do you also find yourself a completionist?

**Aaron Parecki:** Yeah, well...

**Jerod Santo:** Because you're starting to hit on some things that resonate with me, and I'm a completionist, so I'm starting to think "Hm..."

**Aaron Parecki:** I would say I would probably describe myself as -- the problem I have is that if I start something, I need to be able to continue to do it indefinitely. So there are some tracking projects I've started that I have stopped, and I will tend to not bother starting something else; I know I can't continue it.

So one of the ones that I have, for example, not been able to do, even though I've tried a couple times, is tracking my mood. So I think it'd be very fascinating data. But I've had two problems trying to collect that data. One, the amount of effort it takes is slightly too much to be able to plan on doing it indefinitely, whereas the amount of work it takes for me to track my location indefinitely has now reduced to almost zero, because I've automated so much of it...

And the other problem with tracking my mood is I have not been able to find a good rating system that I can rely on to be consistent over time. So I've tried three-point scales, five-point scales, ten-point scales, and they all have various problems and inconsistencies...

\[08:05\] And the last problem is that as I try to track my mood, I am either influencing it negatively, as in if I'm thinking to myself "I'm not in a very good mood", it'll put me in a worse mood, having just thought about that. So it doesn't even seem -- like, all of these problems with it, even though I love that data, just caused me to completely fail to collect that, even though I've tried several times.

**Jerod Santo:** Yeah. It's like, you're a faulty measuring stick, because your mood affects the mood, and you're trying to observe the mood... Kind of the Heisenberg's principle of observability, or something like that, where you end up changing the thing you're trying to observe.

**Aaron Parecki:** And that was actually one of the big conscious decisions I made when I started tracking my location, which was I didn't want the fact that I was tracking my location to change where I was going. So at the beginning, think back 2008 - smartphones were brand new, the iPhone was only a couple years old... So that was not really a normal thing that most people had access to at that point. So the big worry was like "Oh, well if you're tracking where you're going, aren't you gonna be concerned about somebody finding out, or concerned about whatever?" So I just tried to make sure that the act of tracking my location was not changing where I was going, as in I wasn't avoiding places, or I wasn't even going down other streets in order to complete a city grid, or things like that... Because I wanted it to be passive collection, just about what I do, not trying to treat it as a challenge to visit every street, or something.

**Adam Stacoviak:** What do you do to go back to it? You said before you could map it back to places, or whatever... How do you go back to this data, and enjoy it, or make sense of it, or analyze it?

**Aaron Parecki:** So everything that I've collected, I've now normalized all the different ways that I have been collecting into my current sort of database, which is actually just a collection of JSON files on a hard drive, and they're sorted into year/month folders, with a file per day. Then it's a line of JSON per file, within the file. So what that basically means is that none of these folders are very large. At most I have 86,400 lines in a file; one per second. That's the max resolution I can track with mine... And it's a very manageable dataset. It's not anything fancy. It's easy to back up, easy to sync between multiple computers... And that is where everything is stored now. So my current GPS tracking app that I wrote - I have a thing that writes into that storage format on the server, and then over the past years of using different kinds of apps I've converted all that data into that format.

And then I've got some simple tools on top of that, which will load it in a web interface, for example, where I can just pull up a day and then see the whole path for the day on a map. And then the other way that a lot of this data gets used is on my website, when I post a photo or post a note on my website, which - this is getting into the IndieWeb thing, but I don't actually post on Twitter; my bot posts on Twitter. So I post on my website, and my websites posts up to Twitter for me. And anything I create on any social media ends up coming back to my website, in some form. So my website is the canonical version of my online presence across whatever platforms I happen to be using this year.

When I create a post on my website, then that also has a hook into my location database, so I can tag every post on my website with where I was, at the time it was posted, even if the thing I'm using to post doesn't know about my location.

**Adam Stacoviak:** Very interesting.

**Jerod Santo:** And your website is a wealth of things. I looked at the copyright, I think it was back to 1999... So I like this -- you have your hub, and everything else is just distribution or broadcasting into other spaces... But aaronparecki.com - that's yours, you own it, you can do whatever you want with it, you've built over time... A lot of us replace our website, but it seems like you've been adding new portions. So you can tie into this lifelong database of GPSes positioning and use it however you like. It's pretty cool.

**Adam Stacoviak:** Up at the top; is this accurate? The time of day for you, the battery life of your phone or something? And then your cloud? Like, what's the "partly cloudy where you're at, 60 degrees"? Is that based on your phone, or what?

**Aaron Parecki:** \[12:33\] It's current. That's, again, tapped into that same location database. So my website always knows where I currently am, and whether I'm on a bike, or on a plane... And because it knows where I am, it knows my local time, and it knows the weather.

What that means is that -- so I used to travel a lot, obviously; not anymore, but I was previously traveling a lot for work, and hopping between countries, and cities, and doing all these workshops and conference talks... And it meant that basically at any given moment nobody would know what time it was if they were trying to contact me, because I could be anywhere.

So I put that on my website as a way to be like "Oh, if you're trying to get in touch with me, you can just go to my contact page and it says "Oh, it's 3 AM, because Aaron's in Sydney", and then you'd know it's probably not a good time to expect a response.

**Jerod Santo:** You've made life really easy on a potential stalker. They would just be hooked up with all the tools they need, just to know exactly what you're up to.

**Aaron Parecki:** I have thought of that, and I also definitely recognize that I am extremely privileged in that I am not likely to have a stalker, because I am not a woman on the internet...

**Jerod Santo:** Right.

**Aaron Parecki:** So that is something I've been aware of and I realized not everybody can do this. I like to think of it as I'm able to use this privilege of being a straight, white male on the internet to be able to demonstrate some of the things that are a little bit farther-fetched about self-tracking and publicizing that information, because I'm not likely to become a target.

**Jerod Santo:** Yeah. Well, one thing all people can do is the IndieWeb thing, which you're promoting and practicing yourself. So this idea of IndieWeb, which you've been a part of for a while, is something that everybody can opt into that way of going about engaging with the internet. Do you wanna just touch on that briefly? We're gonna get to OAuth and there's so much to talk about there that we do wanna save time for it, but... I think IndieWeb is important and interesting. You obviously do, too; you've been a co-founder of IndieWebCamp and have been a part of it for a while.

**Aaron Parecki:** Yeah. I like to think of my website as demonstrating all of the things that are possible to do with your own personal website and expressing yourself online, and I fully realize that not everybody will do all of the things that my website is doing, nor should they. But I would like to have as much of that public as I can, in order to demonstrate what's possible. And then people can choose which of those things they like. Maybe you like the idea of having just the time of day it is where you are, but not anything about where you are. Or maybe you like the idea of having all of your photos on your own website, treating Instagram as just a copy of your account. So you can pick and choose from all of the things that all of us in the IndieWeb community are doing. I've just chosen to use my website as a way to demonstrate a lot of what is possible.

**Jerod Santo:** What are the touchpoints -- so for somebody who's like "Okay, IndieWeb sounds cool, but maybe intimidating. I'm not sure..." Is there a list of lists of like "These are IndieWeb people who are doing IndieWeb things" and you can steal some of their ideas? Or are there implementations of these things? I know there were some open source projects for a while that were trying to promote this lifestyle of posting online in syndication... Some have fallen by the wayside, but where do you send people who are interested in IndieWeb?

**Aaron Parecki:** \[15:51\] The main home of the IndieWeb online is IndieWeb.org, and that is a wiki where it's a documentation of what everybody is doing with their websites, both in the past and what could be done in the future. And the community is organized mainly in an online chat, so that's available through an IndieWeb fashion; the website, chat.indieweb.org, as well as IRC, as well as Matrix, as well as Slack, and as well as possibly Discord. We're experimenting with a Discord bridge as well. And they're all connected, so you can join via any of them and you're talking to everybody all at once. So you're not tied to one of these platforms. I'm trying to make it accessible. Come in using whatever is the easiest for you.

And the community also is organized around events. So a heavy event-based, meetup-based community. Again, it was a lot of in-person events every year; I have been hosting a conference in Portland, it was the IndieWeb Summit, and we've obviously been on pause the last two years now. It was always in the summer. But we're still doing a lot of online meetups in the meantime. These are over Zoom usually, sometimes Jitsi, and you can join any of these meetups and just come and chat and learn what other people are doing.

The main idea of the IndieWeb community is to get people to have their own presence online. Just have your own website. And that can mean a lot of different things to a lot of different people, and that's great that it can.

So if you want your website to be just a one-page thing about you and what you're doing and links to find you elsewhere - that's great. That is your website, you control that, and you can do that. If you want your website to be a full-on log of everything you've done online and offline, that's also great; you can do that. So there's obviously a lot of range i-between those two extremes, and we do see a lot of people fall into various levels of that. So you could have a WordPress blog, which is a great, easy way to get a website that you can post things to and collect your online life on that site.

**Jerod Santo:** I like that pragmatic approach, because a lot of the IndieWeb blog posts or content that I've seen historically - some of it is very purist and idealistic to the point where like it's all or nothing. And I like that, the way you're presenting it, and maybe the way that the communities moved, or whatever... It's a bit more like opt-inable to different aspects of IndieWeb. I resonate with a lot of what you're saying, and there's also bumping up against either technical limitations, or time limitations, or content that I don't care about quite as much... Like, I don't really care -- I guess historically with my tweets I have posted them on Twitter and then I had a thing that would suck in those into my website; there's like an open source thing, like a tweet archive kind of a thing... Twitter now offers that - you can log in and click down a zip file every once in a while if you wanted to... But it's not the purist "Publish there and then syndicate", it's "Publish over here on your platform", but then make sure that I ultimately have those things, so that Twitter couldn't remove them. So it's kind of not full indie, but at the same time I very much believe in the power of owning your own domain, publishing your own content on your own website, especially content that matters to you and you want to last for a while... And then using the different social networks for what they're good at... As opposed to writing for free on Twitter.com all my thoughts, for example.

**Aaron Parecki:** Exactly, yeah. And I think it's actually even more of a problem of when you're writing these longer-form things that are tutorials, or things that you want to use to build your own brand, or build your presence online, and then you go and put that on Medium, where it's 100% somebody else's platform, and you're just giving content to somebody else's domain.

So for those, it's especially important - put that on your website and then use those platforms, like you're saying, to promote the thing that you wrote on your website and drive people to your own place online.

**Adam Stacoviak:** \[20:02\] It's really great for a source of truth too, because if use your personal domain as the hub, and you broadcast to Twitter or somewhere else, and somehow in the middle there are changes - well, this is actually the source of truth. It reminds me of the very last episode of Silicon Valley, when he sent the message -- stop me if you've heard this one before, but... He sent a message and purposely put four dots in it, not three, which is a common ellipses. And somehow the AI in the middle there decided to compress it, which taught them how they subjected security, all these fun things, whatever; turned that four-dot ellipses into a three-dot ellipses.

**Jerod Santo:** Oh, boy...

**Adam Stacoviak:** So long story short, somewhere in the middle that can change, and by you having your hub, you can confirm truth, essentially.

**Aaron Parecki:** Yup.

**Break**: \[20:47\]

**Jerod Santo:** So Aaron, back in December of 2019, in a post titled "It's time for OAuth 2.1" you wrote "Trying to understand OAuth often feels like being trapped inside a maze of specs, trying to find your way out, before you can finally do what you actually set out to do - build your application." That resonated with me. And you go on, of course, to speak in-depth about that and about OAuth 2, and 2.1, and where we've been and where we're headed... But how do we get there? How do we get to that point? Because it's been a long and windy road with OAuth, and a lot of people involved... Why does it feel like that, or at least why did it feel like that in December of 2019?

**Aaron Parecki:** That's a good question. Yeah, I still stand by that statement, and here we are, a year and a half later and still working on 2.1, but obviously it was in no small part due to the events of 2020 slowing that work down... But - how do we get there? Honestly, I think it's a natural evolution of the space, and I don't even think it's necessarily bad that it happened that way. It started out in 2012 with the OAuth 2 draft being published, and that draft, the core draft was -- I had been going through a pretty rough time in the spec world, and there were several arguments involved in creating that, and there were several people who quit in a fit of rage to go and do other things, because they were just done with the spec world, which I totally understand... And what was left in that core draft was a relatively small amount of information, a small spec. It was a core, it was a framework, actually; it was not even a spec. Which means you can use it to build things, you can use it to build specs. But by itself, it didn't necessarily describe a complete interoperable system. So there are a lot of good parts in it, but you need more in order to actually finish building out a system. You need more pieces.

\[23:59\] So there's that aspect of it, and then the other aspect is that -- so over the years there were things discovered about the core spec that were maybe security problems, or there were better ways to do things. And a lot of that stuff ended up being expressed by new specs and new extensions, one of them being PKCE (Proof Key for Code Exchange). That was an extension developed originally because mobile apps couldn't do the flow the sort of normal OAuth way, and they needed that solution for that... And then it turns out it's been discovered that that extension actually solves a number of different attacks that weren't even really thought of when PKCE was originally developed.

So this is stuff that just sort of happens over the years of people building things with the specs and deploying the systems and getting experience with how these things work and how they evolve, and then documenting it. And that's really what specs are - the documentation of a system. And yes, there's a lot of them, because we've learned a lot over the last nearly ten years, and I think that's okay. It's okay to have that evolve slowly like that. It doesn't need to be something that you create perfectly in the first strike. Realistically, that's actually not possible, to go and set out to design a spec and make it perfect on the first try. That is how we got there. It was a lot of filling in the gaps in the original OAuth 2, it was a lot of patching of security features... And also there's the whole section of things that were intentionally not described by the spec... For example how an API can validate access tokens, which was at the beginning sort of considered an internal implementation detail of a system... But it turns out, as we've seen people create companies around the idea of providing OAuth as a service, then it makes sense to provide a standard way to validate an access token so that you can interoperate with different company services.

So it's just a lot of evolution, slow evolution of the space, and that's how we got to December 2019, of "Yes, there's a lot going on." There are a lot of different pieces, a lot of moving parts. And if you actually take a look at those moving parts and all the different building blocks and all the different pieces, there is a much simpler picture that's sort of coming out the other end, which is what we're trying to capture in OAuth 2.1 - there are a lot of things that are known to be not good practices anymore, so let's take those out, there's security features that we should just always be doing, like PKCE, because it solves many different attacks... And if we can consolidate all of those, then that's just less stuff for people to read. Because I don't want you to have to read ten specs in order to get to the point of what the industry considers the best practice right now.

**Jerod Santo:** So OAuth 2.1, which it sounds like it's still in the works, is not new things; it's a distillation of things that were how OAuth 2 evolved, and said "Here were the good ideas. Let's get rid of those bad ideas. This is how you should do it now."

**Aaron Parecki:** Yeah. Just trying to modernize OAuth 2.0 without actually changing -- without adding new things. So we're not trying to invent a new spec, we're not trying to say "Everything about OAuth 2 was terrible, let's start over." It's really just trying to encapsulate what is currently regarded as the best practice of OAuth 2. And the problem with OAuth 2 is that if you say "OAuth 2", it actually doesn't mean anything, because it's so many different specs in reality. OAuth 2 is a collection of several different specs, and you kind of have to know which ones are relevant. So the idea with calling it OAuth 2.1, giving it a name and a new RFC is that that just sets a new baseline. So that's giving a name to what is the best practice and what we do consider to be OAuth 2 today.

**Jerod Santo:** \[28:02\] So are those guardrails there? I know that 2.1 isn't ratified or finished or whatever, but if you were to say 2021 and onward, if you're doing OAuth 2, here's the flow. Or maybe it's three flows, or whatever it is. "Here's the simplified version now, and here's how it would work." Could you explain that to us in words...

**Aaron Parecki:** Yeah, yeah.

**Jerod Santo:** ...or is that a half-hour dissertation? Okay.

**Aaron Parecki:** I mean, I can give you a short version.

**Jerod Santo:** Yeah, give us the simplified--

**Aaron Parecki:** And I can also give you a long version.

**Jerod Santo:** Let's start with the short, and we'll try to catch up...

**Adam Stacoviak:** Give us a medium version.

**Aaron Parecki:** \[laughs\] The short version is "Disregard password and implicit grants. Those don't exist anymore." So the main flow in OAuth 2 and OAuth 2.1 is the authorization code flow with the mechanism described by PKCE. So PKCE is a neat little trick that's been added into the authorization code flow. It turns out there's several reasons why that's a good idea, which are way too detailed to go into right now.

**Jerod Santo:** Okay...

**Aaron Parecki:** But it is always a good idea for every kind of app to use PKCE. I do get a lot of people confused - because of the origins of PKCE - about whether you should use PKCE if you have a client secret, for example... And it turns out the answer is yes, use PKCE even if you have a client secret, because a client secret is not solving some of the attacks that PKCE does solve. So it's not a replacement for a client secret, it's not an alternative, it is just how the authorization code flow should work.

Now, the client secret issue is how do you authenticate a public client, like a mobile app, or a single-page app? And the answer there is you can't. There is no way to do that, whether or not you're using any OAuth flow or OAuth at all; so you just don't, and you rely on the redirect URL and the registration of that, and the fact that domain names are the other foundation of our security online, and that's enough protection of those kinds of apps.

The main OAuth flow today is authorization code flow with PKCE, and use that for everything unless you have a very specific reason otherwise. The other flow to be using would be the device flow, which is an extension, and that's what you'll be using when you're on an Apple TV, or other devices that don't have a browser or don't have a keyboard.

Then the third sort of -- I don't wanna call it a main flow, but the third flow that will be commonly used as the client credentials flow, where it is an OAuth client that's not acting on behalf of a user. It's just the client acting on behalf of itself. So there's no user involved in the flow. It's just the client shows up and says "I want an access token", and then it gets one.

**Jerod Santo:** Which happens a lot with administrative apps; their backend tooling, where you're just trying to remotely manage a service, which we do a lot of that stuff around here... And you just don't need, and there's no client being represented. You're just like "No, it's just us. It's just Changelog trying to update a DNS record", or something.

**Aaron Parecki:** Yeah. And it's kind of like using an API key to go make a request somewhere... But by including it in the OAuth world, it means you can use that alongside of your OAuth flows that do have users. So you end up with the same access tokens, and you end up with the same ways of validating things, and you don't have to hardcode as much stuff in every different place it's being used.

**Jerod Santo:** Right. So there's no advantage as a service provider to doing the OAuth style, except for the fact that you're probably doing it for your client style anyways. So it's just one path of authentication for your API, regardless of which style you're doing... Versus, like you said, if you're like "Well, we also have this API token thing we do for service accounts." And that would just be like a whole other code path for the provider. Is that what you're saying?

**Aaron Parecki:** Yeah, so let me rephrase that, I guess.

**Jerod Santo:** Okay.

**Aaron Parecki:** So using client credentials has the advantage of using the same access token format that you'd be using for flows that do have users involved. So if you're building on a system and you expect a user to be logging in, you should be using OAuth. You'll end up with access tokens and your APIs can validate those access tokens. If you also have a situation where you're expecting clients to not have users log in, because they are just service-level things, then if you fit them into the same framework, you can have your clients go get access tokens from the same place, your OAuth server, and your APIs can validate access tokens in the same ways they're validating the access tokens for users.

\[32:24\] Now, the alternative would be you would have a special API key thing that your APIs know how to validate those API keys, but now you've got a whole separate thing to manage, of like issuing those, provisioning those, getting your API to validate those... Whereas using the OAuth client credentials flow means you've consolidated that logic.

**Jerod Santo:** Okay. I think I understood you, but I've regurgitated poorly, so... You did a good job the first time, and a better job the second time. Thank you for that. The device thing is interesting... Because back in 2012 we didn't have these devices, really... Or did we? I mean, where you have like an Apple TV or a ChromeCast thing that you're trying to sign in with... And there's no keyboard there. There's no there-there. It's like, "Well, it's gonna pull up this thing onto the screen, and you're gonna go letter by letter..." There's no browser usually, right?

**Aaron Parecki:** There's usually no browser in those, which means you can't open a web page and send these off to the OAuth server. So what we have seen is people build password dialogues into those devices... And then yeah, you've got the on-screen keyboard that you're scrolling letter by letter, switching to the symbol page...

**Jerod Santo:** Oh yeah, you get your long password...

**Aaron Parecki:** Long password, and you're entering it very slowly in front of anybody else in the room. So...

**Adam Stacoviak:** It's painful.

**Aaron Parecki:** ...that's great... And that's not a good solution. So the fix for that is the OAuth device flow, which kind of separates -- the application is gonna be getting the access token from the device you're using to log in. So you will start the flow on the TV; there is no keyboard, there is no browser, and instead it says "Hey, go over to your computer, or go pull up your phone, go enter this link, and then enter these six letters." And that establishes the connection between the TV and your phone, and then you can finish logging in on your phone, where you do have a keyboard, and a browser, and your password manager, and things like that.

**Adam Stacoviak:** And potentially even more hardened security for the person's true identity, because face ID, and touch ID, and whatever ID...

**Aaron Parecki:** Right, you can tap into multi-factor auth, you can tap into single sign-on to other systems that the TV doesn't even have to be aware of... Lots of benefits.

**Jerod Santo:** So OAuth can handle that now. Another thing you mentioned in that post which I thought was interesting - it was kind of an aside - is that there's Justin Richer has this whole other idea... Transactional authorization. I don't know if that's still a thing. You say maybe eventually that'll be OAuth 3. Has that advanced, or is that still a thing, or what's the situation with that?

**Aaron Parecki:** Yeah, there's been quite a lot of movement on that front since 2019. So the -- it was called transactional authorization in 2019 when Justin had originally proposed it, and since then there actually is a new working group formed at the IETF to take on that work... And it's been renamed since then, so now it's called GNAP. And don't even get me started on the naming...

**Jerod Santo:** \[laughs\] What's it stand for?

**Aaron Parecki:** That was a whole thing... It was a very long discussion on the mailing list, and pages of Google Docs of suggestions and voting... It was a whole process. But that was when the group was formed; we had to decide on the name for it, and... Anyway, a whole thing. So GNAP - Grant Negotiation and Authorization Protocol is what that stands for.

**Jerod Santo:** Okay...

**Aaron Parecki:** And that was the least bad suggestion out of all of them... \[laughs\] So that is a new IETF group, meaning it's not happening within the OAuth working group. However, there are a lot of people who participate in both still, just like OAuth and OpenID Connect, where OpenID Connect is actually not even in the IETF, it's in its own foundation... But there are a lot of people who participate in both.

\[36:01\] GNAP, on the other hand - so it's a new IETF group, and it's a new document, and that work has continued on since then. It has gone through a pretty extensive amount of changes and iterations, and redefining the scope of the document, and pulling some of it out into a new document... Again, the whole idea with that one is explicitly to not assume any compatibility with OAuth, but solve similar problems.

So I know a lot of people's frustrations with OAuth, beyond just the fact that it's in a bunch of documents - there are some things about how OAuth works that you can't really change at this point without breaking a lot of assumptions of a lot of software. So those are things that we kind of have to just deal with and live with now in the OAuth world... And it's not broken, it's fine, but it's not ideal. And there isn't a good way around that one.

We're trying to clean up OAuth with OAuth 2.1. I would think of that as like housekeeping; you know, clean up your house before a guest comes over, kind of thing... But GNAP is more like "Rebuild the house. We're gonna start from a new foundation."

**Jerod Santo:** Do you have any "For instances" on things in OAuth 2 that you've just described in general? Are there any examples of what you're talking about?

**Aaron Parecki:** Yeah. One of the examples of something that is pretty deeply baked into the model of OAuth is the idea of a client. This is where you would go to the developer website of a company and you would say "I'm gonna build an OAuth app against your API, I'm gonna register a client", and you go in there and you type in the client name, you upload an icon, and then you get back a client ID and a client secret. Or you may only get back a client ID if you're building a mobile app.

And then you use that client ID and your client secret in your applications, you configure the applications with the client ID, with the client secret if you have the secret, and you do an OAuth flow.

The reason this is potentially a problem is that there isn't really a distinction between the concept of "I'm building this app", like it has a name and it's in the app store, and the difference between a particular instance of that app running somewhere. This is the most obvious with mobile apps. I publish an app into the App Store, and it's identified by the client ID, and it has a name, and it has an icon, and all that... But when it runs on somebody's phone, it is a unique piece of software on one person's phone. And somebody else running that same app - it's the same software, but it's a different instance. And because it's a different instance, we actually have an opportunity to do a lot of things around the security of it that just don't really mesh well with OAuth. And yeah, you can shoehorn a bunch of the stuff in it.

One of the security features that would be really useful is to be able to say "Okay, the access tokens issued to this person's phone cannot be used by anybody else's instance of that app." So if an access token is somehow shared with another device, you wouldn't be able to kind of swap it out and have it be put into another person's phone, because the access token is tied to that one device. And this is something that we are trying to solve in many different ways right now in the OAuth community, this idea of authenticating individual instances of the software with specific keys on each specific instance of an app. Again, it's not that it's impossible to solve it within the OAuth framework, it's that it's fighting the OAuth framework, trying to add that concept into it. So it ends up being harder to describe, like I am struggling to describe right now...

**Jerod Santo:** \[laughs\]

**Aaron Parecki:** It ends up being harder to describe that because of the assumptions of OAuth being -- you have an OAuth client, it has an identifier, and that's just kind of the client. That is the client, but it's not really, because there's an instance of the client that isn't really talked about in OAuth. So with GNAP it's flipping that completely on its head, where there isn't really the concept of one group of software. Every client is an instance by default, and has its own keys by default, and that is permeating the entire part of GNAP, where you start the flow with your own keys, that cannot be shared with any other piece of software, and then you can take advantage of the fact that there are unique keys baked in from the beginning for each instance.

\[40:19\] So yeah, it's not impossible to do these things in OAuth, and we do see people adding in those security features and bringing in those properties into OAuth clients, and you can definitely do it. But it is not the easy way to do it, it's not the default way, and it's a lot harder to describe.

**Adam Stacoviak:** You said GNAP was essentially start over, right?

**Aaron Parecki:** Mm-hm.

**Adam Stacoviak:** Do you feel that's the best way? What are your thoughts on the direction? Obviously, you seem to be pro OAuth 2.1, or current 2.0... Where do you land on that? Are you for GNAP? What do you think is good or bad about it?

**Aaron Parecki:** Yeah, it's a good question. So I should also clarify, I am one of the editors of OAuth 2.1, meaning I am participating in the development of that draft, which is progressing on the standards track... I am also an editor on GNAP spec. So I am involved in that work, and I do work with Justin and Fabian, the other editor, on that draft as well. So I do think that within the OAuth world, the OAuth 2.1 work is extremely important, and I do think it's worth doing that work, regardless of anything else that happens elsewhere.

So I think that there is obviously a huge amount of software that's deployed with OAuth today, and it bakes in these assumptions, and it's fine, and it works, and it needs to be continued to be supported for a very long time... And I think that all of that stuff does benefit greatly from having a simpler definition of OAuth, which is OAuth 2.1.

Now, totally separate from that - I think there's a lot of interesting opportunity with GNAP to make this work in ways that are easier to deploy in situations that we haven't necessarily thought of yet. So for example, the device flow was not thought of at the beginning of OAuth, when OAuth was first created, and it's been added into it. And it fits into that world in a way that is definitely not the sort of natural way of doing it, because it has to rely on these assumptions that maybe don't apply in the device world... And I think we're gonna see more of that happening in the future as more kinds of devices appear and technology keeps evolving.

One of the aspects of that is this whole idea of self-sovereign identity, which we're seeing as a huge community right now using digital wallets for identities, and things like that... None of that is very mature at the moment. It still feels very experimental. And a lot of it completely does not work with the assumptions of an OAuth world. So you'll see people either completely not understanding OAuth from that world because it doesn't match the underlying assumptions of how they're thinking about the world, and some people will try to sort of shoehorn OAuth into that model... So what we're hoping is that with GNAP it can be a better fit for a lot of the future developments of things that are maybe not even thought of yet.

**Adam Stacoviak:** So you think that work for 2.1 needs to happen no matter what, because OAuth is gonna be around; it's not gonna go away. So we need to continue the work to stabilize things. But GNAP might be a better future.

**Aaron Parecki:** I think there's potential for that. And at the very least, I think there's potential for GNAP to point out some of the assumptions that OAuth is making that maybe we don't need to rely on anymore. Maybe there's ways to sort of backport some of that work into the OAuth world, if it can be demonstrated that those assumptions were holding back progress in other ways. And that kind of stuff is hard to do within a single working group, because of how much legacy there is, of how much deployed and running code there is, which - again, it's not that that's bad. I'm not saying that's bad at all. It's great that there's a lot of running code, because that's what actually matters, at the end of the day. What I don't like seeing is people not realizing what assumptions exist in a system, and not being willing to challenge those assumptions. That is kind of why this has to end up happening in a new group, because it's a lot easier to just say "Well, we're just gonna forget about all of those assumptions and start with a green field and then come up with something that hopefully does result in running code, and useful in some deployed systems..." But if not, maybe we can use that to point out some of the assumptions in OAuth that don't need to be there and should change in OAuth.

**Adam Stacoviak:** \[44:43\] What about the progression of using OAuth? Moving from different spec to spec, OAuth 2 to OAuth 2.1. What is it like to be a developer, to have to deal with that change or enable my application to be within that spec? Is it a challenge for a lot of developers to go from version to version and kind of --

**Aaron Parecki:** Yeah... Well, OAuth 1 to OAuth 2 was a huge breaking change. Again, OAuth 1 had a bunch of assumptions that didn't make sense anymore. Mobile apps weren't' really a thing when OAuth 1 was created, and it turns out OAuth 1 doesn't really work at all with mobile apps. So that was a huge breaking change, and basically completely incompatible, and there's no way to migrate. It's from scratch; you write the code from scratch. And that's why Twitter, for example, still hasn't really switched over to OAuth 2. They're still on OAuth 1. And what we're hoping with OAuth 2 and what we've seen over the last (now) ten years is that it's a lot of incremental changes, a lot of smaller incremental changes. So you don't need to support the device flow, for example, unless you need to support those devices. So you don't even need to worry about that spec unless you are building apps for a TV. But also things like PKCE, which - it's not a new spec, but we are now hearing about it a lot recently because it is now recently being recommended for every kind of application, even web server-based applications.

So adding PKCE in is not a ton of work by itself, and it is something you can add incrementally to a system. That's all just to say that OAuth 2.1 is not supposed to be something like "Oh, you're gonna have to go tear everything out and replace it." It's really supposed to be "Well, it's very possible that the code you are running right now already is compliant with OAuth 2.1 if you've followed all of the recent guidance in OAuth 2." That's the goal, is that hopefully there will be a set of people who don't have to make any changes, and they will already be compliant with OAuth 2.1.

**Break**: \[46:36\]

**Jerod Santo:** So OAuth 2.1 says don't use the implicit flow. Why? What is it? Why avoid it? I already implemented it. Am I not supposed to use it now? Help us out with the implicit flow, and then explain PKCE, exactly what it solves, and maybe how it works.

**Aaron Parecki:** Yeah, so the implicit flow is one of those things that I probably would recommend replacing, if at all possible, with the more secure flow. The implicit flow was always a hack. It was created as a workaround for limitations in browsers. Keep in mind, these are limitations in browsers from 2010. So the world is quite a bit different now. Browsers can do a lot more things.

So the way the implicit flow works is the user clicks the link to log in, they're taken from the application over to the OAuth server, they log in there, like normal... This is all the same in both flows. But when the OAuth server is ready to go and give the application an access token, it sends the access token in the address bar, in the URL, in the redirect, back to the application. And the application will pull it out of the URL and then start using it.

So at first glance, you're like "Cool, that seems very easy. It saves a step. I don't have to worry about this weird authorization code thing, I don't need a token endpoint... It's just one redirect there, and one redirect back."

**Jerod Santo:** Right.

**Aaron Parecki:** So why is that a problem? Well, in OAuth we use these terms "front channel" and "back channel." So the idea with a back channel is it's the sort of normal or default way that you're used to making requests on the internet. It's an HTTP client to an HTTP server. And if you're using HTTPS, which you should be for almost everything these days, then that connection is encrypted. You know that when you send data, and what you receive - it's always secure and encrypted in transit, and you can trust the response that comes back.

I like to think of that as hand-delivering a message to somebody. So you can walk up to somebody, you can see them, they can see you, you can give them something, you can see they took it, and you know that nobody else came in and stole it, because you can see they have it now. That's the back channel. That's great. We should use that as much as possible.

The front channel is the idea of instead of an HTTP request from a client to a server, we're gonna have two pieces of software exchange data through the user's browser. So that means we're actually gonna use the address bar as a way to move data from one thing to another. So both OAuth flows - the authorization code flow and the implicit flow - start out in the front channel. The first request that the client makes is saying "Here's what I'm trying to do. Here's who I am, here's what I'm trying to access. I would like you to send the user back to this redirect URL when they're done." That is a front channel message, meaning the application does not make that request directly to the OAuth server. It actually makes the request to the browser, and tells the browser to go visit the OAuth server. That's fine, great... Although I can explain some issues with that as well, which there's also solutions for... But the important one is on the way back, where the OAuth server is trying to deliver the access token back to the application. Now, the secure way to do that would be in a back channel. But the OAuth server doesn't have a way to talk to the application in the back channel. The app might be running on a mobile phone, or it might be a single-page app on the browser; those are not an HTTP server, so they can't accept a back channel request.

So instead, the OAuth server uses the front channel, putting the access token into the address bar, having the browser delivered to the application. I like to think of this as sending a letter in the mail, where I'm trying to send you a message. I don't have a way to go and walk up to you to give it to you, so I instead put the message in an envelope, and I put it in the mail, and I trust that the mail carrier is going to deliver it to you. And there's a lot of trust there, there's a lot of inherent trust in the mail service. It'll probably work, it'll probably be fine, but I have no way to prove or guarantee that the message made it there. I also can't ensure that it wasn't copied in transit, or stolen, or tampered with, modified... I have no guarantee once the mail has left my hand and it's in the post office.

\[52:16\] So anytime we're using the front channel, it's that same situation. The OAuth server wants to give an access token to the client; instead, it gives it to the browser to deliver it to the client, which means now the OAuth server doesn't actually ever know if it really made it there. And think about if you get a letter in the mail, you have a similar problem on the receiving end. You don't actually have any guarantee that that letter is from who it says it's from. A return address isn't any proof at all. So if you ever get anything in the front channel, you can't be sure that it's actually from who you think it's from, meaning if you get an access token in the front channel, you don't know if it's the access token you were expecting, or if it's somebody trying to trick the application into accepting a different access token.

So this is the problem with the implicit flow, is that it actually sends the access token in the mail, and there is no guarantee on the sending side that it's secure, and no guarantee on the receiving side that it's actually the right access token. And there's not really a way around that. There's various patches you can do to solve one half of those problems, but not the other half. That's just inherently the problem with using the front channel.

The implicit flow was created because of old limits in browsers, primarily the lack of ability to do cross-origin requests.

Back in the day, cross-origin resource sharing wasn't a thing, so we used the implicit flow to avoid any sort of HTTP request. Instead, it's just using redirects, using the front channel. So - clever hack, but guess what - browsers caught up and now we have cross-origin resource sharing and it's not really a thing anymore, and it's not a problem to make cross-origin requests. So we don't need the implicit flow anymore, and we can't even solve all the security problems with the implicit flow. So it really just doesn't have a place anymore. That's the reason we're taking it out of the OAuth spec.

**Jerod Santo:** So then I've tracked all that... I don't know about you, Adam, but that was a good explainer; I think I'm with you.

**Adam Stacoviak:** Yeah, it was awesome.

**Jerod Santo:** Now going to what it's replaced with and why it fixes those problems.

**Aaron Parecki:** So this is definitely a challenge to do without diagrams, but... \[laughs\]

**Jerod Santo:** This is hard mode podcasting.

**Aaron Parecki:** Yeah, yeah. So the better solution is the authorization code flow, in particular with PKCE. The way that works is it starts off the same, the app makes a front channel request to the OAuth server to start the flow... The user logs in, like before, it does 2-factor auth, whatever they need to do, and instead of the OAuth server sending the access token back in the front channel, it still has to send something back in the front channel, because it doesn't have a back channel connection. What it sends is a temporary, one-time use, short-lived code. And that's called the authorization code. This is why it's the authorization code flow.

**Jerod Santo:** Okay.

**Aaron Parecki:** So that's what it sends in the mail. You can use this mail analogy to think about how this works. If you want to send somebody your house key, and you put it in the mail, how good are you gonna feel about that? Probably not very, right? Instead, it would be a lot better to put something in the mail where it doesn't matter if it's stolen, because you can protect it in other ways. So instead of putting your actual house key in the mail, you can put a coupon, a temporary, one-time use "Go to this desk to redeem it" kind of thing. And if somebody steals it - well, we can do other things in order to prevent it from being used by somebody who stole it.

An authorization code by itself is solving some of these problems, where now at least the application gets this authorization code in the front channel, so it doesn't know where it's really from, and that isn't the access token yet. But it can go redeem it for an access token at the token endpoint. And it can do that in the back channel. So it can go and take that authorization code, make a back channel request over HTTPS to the OAuth server, and now it knows where it's talking to and it knows who it's talking to, and it can get the access token in the response from that HTTP request, meaning it's in the back channel where it is secure. That's great, that's the authorization code flow.

\[56:17\] The problem is that if we can't authenticate the client, then if someone steals that authorization code - because it was in the front channel where it's possible to be stolen - how do we know that it's actually their client that we thought we were sending it to? If you send a coupon in the mail, and someone steals it and they go to the desk to redeem it for your house key, how do you know that you aren't giving the house key to the wrong person? And that's where PKCE comes in.

So PKCE attempts to solve this problem of not really knowing who is going to end up coming back with this authorization code. If you imagine - you've just sent this coupon in the mail, you wanna know that the person who received it is the same person that requested it. That's the key. The problem is that that request came in the front channel, which means you can't even actually really know who that request is from originally.

So this is the sort of brilliant part about PKCE. PKCE uses a hash mechanism to work around this limitation of not being able to have pre-registered secrets. So the idea with a hash - of course, it's a one-way operation. So if I told you to think of ten random numbers and write them all down on a piece of paper and then add them up and tell me the sum - that is an example of a hashing algorithm. It's not a very good one, please don't use it in production, but it is a hashing algorithm.

Knowing just the sum, I would not be able to tell you which ten numbers you chose. But if you tell me the ten numbers, I can verify they add up to the same number. So it's a one-way operation, meaning you can take the hash and share that in a front channel where it may be observed or stolen, because there's no way to reverse-engineer it. So if we take that mechanism of a hash, we can add that into the flow.

When the app first starts out, instead of just sending the user to the OAuth server, it first creates a random string, and then it calculates a hash of that string. We actually use SHA-256 for this. So it calculates a hash, and it puts that hash in the front channel request to the OAuth server. So someone could observe that hash, but it's fine, because they can't reverse-engineer it. The OAuth server can remember the hash, and when it issues the authorization code, it knows what hash it saw when it issued that code.

So now that coupon that's sending in the mail - it knows a sum (or the hash) that it created when it issued that code. So now when someone is coming back with that authorization code - which it hadn't previously had a way to link up with your original request - in order to actually use the authorization code, whoever is using that code has to be able to prove that they control the hash that was used to request the code. And they can do that by providing the original secret, which the OAuth server can calculate the hash of and compare the two hashes.

**Jerod Santo:** Hm... And the secret doesn't matter anymore, because it's one-time use, so...

**Aaron Parecki:** It's one time use, and that is over the back channel as well.

**Jerod Santo:** Oh, okay. Fair.

**Aaron Parecki:** Yeah. So what this means is that the OAuth server now knows that the thing that made the request with the authorization code is in fact the same thing that it sent the authorization code to in the front channel.

**Jerod Santo:** Nice.

**Aaron Parecki:** So if we think back to our house key analogy - if you sent this coupon in the mail, you don't really know who it went to. But instead of just sending it off to somebody in the mail, it had to be requested by somebody. So the request that came in would include a number, it would include that sum. You can write that down, create this coupon, send that in the mail... You've still got this number you're holding on to, and now when someone comes back with that coupon to redeem it, they have to be able to prove they know that secret number. But it's not just a secret number, it's a hash, which means they have to actually know the actual ten numbers that they chose, that add up to that number. And then you know that the person walking up to you at the desk is the person that actually made that first request on the phone, for example.

**Jerod Santo:** \[01:00:12.13\] Right. That's a pretty nice move.

**Aaron Parecki:** It's a clever little trick.

**Jerod Santo:** Yeah, because you're making the front channel, which is inherently (I guess) insecure, secure, because you're able to share the hash (which is publicly-available) fine, and then when you get to the back channel -- and as well as it being a one-time use thing. But the back channel is necessary, because you could have intercepted that on the way, or something. So yeah, we can use the back channel to provide the secret. Now, in most public-key/private-key - or where we have like a hash and a source - operations, providing the secret is not necessarily something that you wanna do. But because it is one-time and you're proving who you were, all you're proving is that you made this request in the first place, right? Then you can secure it that way.

**Aaron Parecki:** Exactly. This is not the same as actual public-key authentication, and it's not intended to be.

**Jerod Santo:** No.

**Aaron Parecki:** It is a much simpler mechanism, because it's doing just one particular thing, which is tying the initial front channel request for a particular login, to the particular request, in the back channel, for the access token.

**Jerod Santo:** Right.

**Aaron Parecki:** So every time the app starts this flow, it makes up a new secret. It's not part of the app's identity at all.

**Jerod Santo:** Totally.

**Aaron Parecki:** It's just unique to this one instance of this one flow. So yeah, normally in public-private key stuff you don't share your private key at all; you assign things. But this is not that same thing. It just happens to be using a hash that is also often used in other --

**Jerod Santo:** Right. And you generate a new one every time. Because all you're trying to say is "I was the original requester", but the next time you do the request it doesn't matter what those combos are, right?

**Aaron Parecki:** Exactly, yeah.

**Jerod Santo:** Whereas if you had a singular private key and you'd give the public key out, you wouldn't send the private key even if it was a back-channel later.

**Aaron Parecki:** Yup. And this is actually kind of getting back to what we were talking about earlier, about client instances and the identity of clients...

**Jerod Santo:** Totally, yeah. Good point.

**Aaron Parecki:** In this model, the client authentication doesn't really matter. That's not the point here. That's why I was saying at the beginning that PKCE is not a replacement for a client secret, and it has nothing to do with whether or not you have a client secret. PKCE is useful to make sure that the thing that's requesting the authorization code is the same thing that's gonna be using that authorization code later.

If you have the ability to authenticate the client, then you absolutely should, even if you're doing PKCE. So that request for a token over the back channel - that can be authenticated for clients that have credentials, meaning web server-based apps. Or if you are doing per instance authentication of mobile apps, you can do it there as well. It would just be a per-instance authentication of some sort. And that, again, it just has nothing to do with whether PKCE is being used at all. It's a completely separate question.

**Adam Stacoviak:** What's interesting too is how it seems to be pretty transparent to a user. So you mentioned before Apple TV; it gives you a code, you go to somewhere.com/activate, you to that browser on your phone, you log in, so you authenticate via, say, your typical username and password maybe, I don't know... Is that the kind of scenario where PKCE is playing a role? ...so it's pretty transparent to that end user, where all I'm doing is typing in that six-character string that the Apple TV told me. I went to my browser on the phone, and it's pretty transparent from a user perspective.

**Aaron Parecki:** Well, PKCE isn't even visible to the end user, right?

**Adam Stacoviak:** Right, exactly.

**Aaron Parecki:** Because it's all just behind-the-scenes stuff.

**Adam Stacoviak:** The point I'm trying to make too is that that's good, because the more trouble you put in front of a user to be, I suppose, secure, or to use authentication, the more they're gonna write their password down on their monitor, or circumvent the system, or just not use it and be insecure anyway. So the cool thing is is that this protocol, this spec allows developers to make these things where users don't get fatigued by the process of authentication. You can still do it and it's not a challenge.

\[01:04:05.20\] Kind of a pain to open my phone, go to /activate, throw in that code, but I'd prefer that over, say, swiping my finger back and forth on the Apple TV, to use that example.

**Aaron Parecki:** Right, right.

**Adam Stacoviak:** It's very fatiguing as a user to make my friends wait, or make my wife wait or whatever while login. It can be done sort of quickly, because I have a lot more identity and presence on my phone that secures me to it to know; then I can give that code back to the site.

**Jerod Santo:** So you did it, you explained it to us without diagrams... I think you have diagrams somewhere, so let's not make this the only resource for people. Do you wanna learn the new OAuth 2 -- not the new, but the preferred OAuth things, you have to listen to the third part of this one episode of the Changelog... No, there's other resources. Aaron, point us towards them. I think you have a book on OAuth 2 simplified, there's guides, there's cheat sheets... How can people visualize this and learn it on their own time?

**Aaron Parecki:** Yeah. I've got a lot of resources available. So the book that I wrote, OAuth 2 Simplified - it is at OAuth2Simplified.com. You can find links to purchase it there. The contents of the book are also on OAuth.com. That is the web-based version of the book. That website is sponsored by Okta. And I also have a video course about OAuth, and that's where we talk through step by step all the flows. There's a whole bunch of exercises in there to actually try the stuff out yourself as well. You can find the link to that one also at OAuth2Simplified.com. The OAuth course is called "The Nuts and Bolts of OAuth."

**Adam Stacoviak:** Very good. We have Developer Day coming up from Okta, which is kind of cool. You'll be doing some talks there... What else is happening there? I think you mentioned Labs in the pre-call... What other fun things? We haven't even mentioned that on this podcast yet, but...

**Aaron Parecki:** Developer Day will be a lot of fun. That is on August 24th, and the first day is gonna be a bunch of really interesting talks, not just about OAuth, but about all sorts of web stuff and API and authentication... And I'll be doing a talk there with Vittorio from Auth0, so that'll be fun; always a good time chatting with him.

And the day after the sessions are the labs. And that is a full day of hands-on activities. It is entirely free, and actually they'll be streamed to YouTube as well, so you don't even need to register for those. You can just show up. That's gonna be starting at 8 AM Pacific, ending at 5:30 PM Pacific; every 90 minutes there'll be a different topic. I'll be kicking things off with a walkthrough of OAuth, we'll do exactly what we've just talked about here, of walking through PKCE step by step, against a real OAuth server. You'll be spinning up a little OAuth server and trying to get an access token, and I'll be there live and helping you through it.

And then the rest of the day we've got all sorts of fun events as well. There'll be a session from Auth0, we'll be doing stuff with Terraform and Kong and JFrog, so a lot of good sessions there.

**Jerod Santo:** Sounds cool to me. Well, we do wanna give a shout-out to \[unintelligible 01:07:01.07\] for introducing us to you, Aaron. This has been an absolute joy. You do a great job explaining these things... It's hairy technical details, and that's kind of the onus of this conversation, is like "Hey, OAuth is complicated." Why is it complicated? There's reasons for that. I think you're doing a good job explaining a little bit of the history and how things have changed over time, and how you're not gonna land on the perfect API or spec the first time anyways... So you have to learn as you advance, and that means that things got a little bit complicated, but now they're becoming a little more simplified, and there's a bright future ahead for authentication on the web.

Anything else that we didn't ask you or you wanted to touch on before we call it a show?

**Aaron Parecki:** No, that sounds great. Developer Day will be fun. Oh, I do have a show that I do with Vittorio on YouTube, The OAuth Happy Hour. It is approximately monthly... And we just chat for an hour about OAuth and talk about what's new in the OAuth world, what's been happening with the specs... Again, some of the details of some of the extensions that are brand new and still being worked on. It's a lot of fun; this is a live stream on YouTube. You can check out the schedule for that at Oktadev.events. There are links to the upcoming episodes there, and we schedule them usually a few months ahead of time.

**Adam Stacoviak:** Cool.

**Aaron Parecki:** Yeah, a lot of fun. Come bring your questions, too. We'll answer questions from the chat if you show up.

**Jerod Santo:** There you go. Show up and ask questions.

**Adam Stacoviak:** That's cool. Is drinks required, or are they optional?

**Aaron Parecki:** Drinks are optional. Bring whatever you wanna drink. We may even be able to hook you up with some drinks soon. I'm working on making that happen.

**Jerod Santo:** Nice.

**Adam Stacoviak:** Cool. It's been fun. Aaron, thank you so much for your time, man.

**Aaron Parecki:** Thanks for having me. It's been really fun.
