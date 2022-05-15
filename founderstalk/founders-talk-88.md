**Adam Stacoviak:** Well, Peer, this is Founder's Talk, thanks for joining me. It's been a pleasure, I guess, seeing your journey. I've been paying attention from the outside, obviously... Here at Changelog, we have an affinity and a love for open source, and I guess you're hanging out in a space called commercial open source. Do you like that term? Is that a term that you aspire to, or what's your take on that term?

**Peer Richelsen:** I think it's a very good term. I didn't know about the term when we started this project. For us, it was just an open source project. And to be fair, it was also not commercial by the day we started it, so it wasn't even a commercial open source software company. But yeah, I mean, once I started looking into the space - and there is obviously FOSS or Free Open Source Software, and COSS or Commercial Open Source is obviously the commercial \[unintelligible 00:05:18.21\] open source software. And I think it's actually one of the very important ways of going forward with open source, because if you've seen some of the downsides of open source, maintainers burning out without funding, without a team, and a lot of security risks as well, if you've seen the log4j vulnerability.

**Adam Stacoviak:** Yeah.

**Peer Richelsen:** But just the two-- I don't know how many; two, three people maintaining it as a hobby... The likelihood that a commercial open source software has any severe vulnerabilities is I think lower, because you have the budget to do security audits and hire the same amount of people that would usually work at Stripe on Microsoft or Facebook.

**Adam Stacoviak:** And so the current venture you're working on right now is the-- I'm not going to say infamous, because that's kind of negative, right? But I would say the famous Cal.com. And I have to say, right up front, on the top, I've been a Calendly user for many, many years.

**Peer Richelsen:** \[laugh\] That's great. I love Calendly.

**Adam Stacoviak:** Not a Cal user so far. And I figured you did. But I've been a very happy user of Calendly, because it totally has disrupted the way that I personally have taken meetings probably for like the last four or five years. I can't even remember a day - this is how long I've been using it - since I've emailed back and forth, "When can you meet, when can you meet, when can you meet", that kind of thing and playing that volleyball back and forth; my gosh, what a savings. And is it safe to say, or the easiest way to say that you're the open source Calendly? Is that how you describe yourself? How do you take to that?

**Peer Richelsen:** Yeah, for the longest time. I mean, it's literally our tagline for the longest time on the landing page, to be the open source alternative to Calendly. And that's also, I'd say, most of the initial growth, because people who are aware of Calendly know immediately what Cal.com is about, because it's like you can make the connections. It's same as Supabase is saying the open source alternative to Firebase, which is obviously a product by Google and has a lot of developer acceptance.

No, I mean - for us going forward, we prefer the term open scheduling, because at the end of the day, that's what we do. We try to build a very open, developer-friendly scheduling product. And there's not many other open scheduling companies out there, if you take a look. Our main competitors are likely also other open source Calendly alternatives. And by 8th of February, the recording day of today, we haven't seen anyone else doing what we do, and so we feel really strong about the open scheduling space.

**Adam Stacoviak:** Yeah. Maybe we can probably touch on some unique edge cases what you're doing, but one thing I saw recently on Twitter around Cal.com was -- and do you just call yourselves Cal.com or do you call yourselves Cal? What's the right phonetics for your brand?

**Peer Richelsen:** Yeah, we usually refer to Cal as the product, and then Cal.com as the company.

**Adam Stacoviak:** Okay.

**Peer Richelsen:** The same as WordPress and WordPress.com, if that makes sense, or \[unintelligible 00:08:06.23\] both works for us.

**Adam Stacoviak:** \[08:10\] Okay. So a feature then of Cal.com, I guess, would be this future where if I own a token that I can meet up-- and I'm not even sure how this feature works, but this is like the interesting thing I see you pointing at, and not something I see from Calendly. Not that it's a race of features or whatever, but I saw that and I was like, "Okay, that's super-interesting", because I'm learning and embracing more and more of this Web3 future, and the useful cases of NFTs. We had a show on our main show called The Changelog with Mikeal Rogers going deep into NFTs, the whole technical bits around it. So we've been covering it for a while, but the use case of NFTs are super-interesting, and this idea of a token or this ownership of something getting you access to something else is something I saw as a feature set, or a future feature set for you. Can you talk about what that is and how that works?

**Peer Richelsen:** Yeah, absolutely. So we actually went live with this product about two or three days ago on Product Hunt and--

**Adam Stacoviak:** Okay. So it's early days.

**Peer Richelsen:** It's very early days, yeah. It's literally ground zero, and we were awarded with Product of The Day, I believe 400 up votes, and one of the tweets actually went viral with more than 250,000 impressions, and I think like 900 comments, and I don't know how many hundreds of retweets.

To put it in a nutshell, we built an integration, and there's many integrations. We have Zoom integration, and other integrations, that is Web3-compatible, which means you can request ownership of a certain token as a matter of verification to book someone's time. I, myself, I'm in the Orange DAO, which is the Y Combinator, like the unofficial Y Combinator DAO, the Decentralized Autonomous Organization that is investing in other YC crypto projects. So it's a mix of like a VC firm, but very decentralized. There's no single CEO or president. Everyone can vote on proposals, and it's settled on a blockchain. And we have our own token, which is the Orange token. And now what I'm doing is I can publicly send a link on Twitter or in the discord of the Orange DAO or on a public website, and only people from the Orange DAO who own the same token can book my calendar. And that's amazing for office hours, for group calls, but even for sales meetings or some other stuff where you need a certain gate, and you don't want to have everyone book your time.

**Adam Stacoviak:** Similar to the way you might do a payment to see somebody's time. You essentially show some sort of authentication, or some sort of event happens prior to the authorization of booking the event, right?

**Peer Richelsen:** What I find interesting about NFTs is less-- I don't own any expensive NFTs. I don't own a Bored Ape Yacht Club. I don't own a CryptoPunk. I don't even know if I would keep it if someone gifts me one. I mean, feel free to give me one if you listen to me.

**Adam Stacoviak:** \[laughter\] Me too, please. Yeah, give both to me and Peer CryptoPunks, sure.

**Peer Richelsen:** But no, I mean, what I find interesting - for me, it's a decentralized SAML, where it gives you authority over certain attributes. Like, you could have, let's say-- and we all know SAML, for onboarding a new employee that now gets access to your team ownership or something.

**Adam Stacoviak:** Right.

**Peer Richelsen:** And if you own an NFT, you could have an NFT-- let's just brainstorm in the future. A DAO could have an NFT that only the sales team has, or an NFT that only the marketing team has, or the leadership team. And this NFT now gives you access to a range of different products, and one of them with us could be scheduling.

Basically, once you get granted this decentralized asset, it now opens certain doors, like a key to the conference room, right? So that's very interesting to me. I care less about the art. I care less about the videos and 3D animations. I care about the fundamental idea of having a decentralized database, because that's at the end of the day what a blockchain is. It's an open source ledger that just runs the same protocol, and that's very interesting for-- I think any open source company should look into Web3.

**Adam Stacoviak:** \[12:18\] Yeah.

**Peer Richelsen:** There's a lot of things you can do.

**Adam Stacoviak:** Well, I guess then, going a couple layers deeper into this feature, what's the vision for this? In the few days it's been out--

**Peer Richelsen:** Yeah.

**Adam Stacoviak:** ...what's going on with it?

**Peer Richelsen:** We've seen a good amount of usage already. I don't think this is, for the next few weeks, a big priority. It's for us more of like keeping our research and development skills intact, and really be looking out in the market, like what's something people are working on, what's something we can contribute to, what's something we can inspire people to do.

The difference between Web2 and Web3 in terms of usage is obviously millions versus billions. There's billions of people using Facebook, but there's probably only a couple millions using Big Cloud, or some-- I don't even know what a Web3 version of Facebook is. But for us, it's to be very early into these types of new technologies, and to learn. I think there's a ton of early mover advantage in these new technologies, and for us it's more of a question of when versus if. I truly think that DAOs is an entirely new, legitimate form of organizations, and I don't think this is going to go away anytime soon. Sure, there's going to be DAOs that go to zero, but so is companies, startups. The failure rate of startups is probably the same as for DAOs. \[laughs\] So I think once you accept the reality that this is here to stay, and people will buy and create and own tokens, it only makes sense to be one of the very first people to look into the space and see what happens. Even if, let's say, this doesn't become a moneymaker or doesn't become a core priority, it's worth the risk to launch something like this.

**Adam Stacoviak:** Mm-hmm. When you say "worth it", you mean the feature of kind of looking at tokens as an authorization/authentication mechanism.

**Peer Richelsen:** Yeah, the engineering work to launch it, the marketing work to make it, obviously... Even the marketing has already paid off in high dividends, because some people don't care about tokens, but they've heard about Cal, and they may eventually want to use some sort of token, so they make an account today, but then use the Web3 integration once they actually joined the DAO, or bought an NFT.

I think also what we intend to be is to just showcase what you can actually do with an open platform, because technically speaking, anyone could have built this Web3 integration. Like, it's not just us; it's just being capable of building such a thing in an open matter. Like, the entire integration is open source, everything can be looked at as just very inspiring for other engineers to think about what's actually the possibility of having an open access to a calendar.

**Adam Stacoviak:** Speaking of the we, how big is the team these days? Give me a rough count of like engineers, marketing, whatever you want to share.

**Peer Richelsen:** It's very engineering heavy. I think over 70% of the team is engineers. We are anywhere between 10 and 12, however, you want to see the freelancers and part-time. Some of them are -- sometimes they work a full month, sometimes there's not much to do in terms of marketing or some other tasks; designing or just customer support is sometimes flexible. I'd say the core team is 10, roughly, with, I believe - I can check that later - seven engineers or so.

**Adam Stacoviak:** So I guess the reason why I was poking there was having the bandwidth to be able to support an edge feature. To be worth it is one thing, but--

**Peer Richelsen:** Yeah.

**Adam Stacoviak:** Because it kind of can take you away from your core product, which is, I guess it's still scheduling though; you're just doing a bleeding-edge version of that. And then maybe that brings in high value. I mean, it's just as good as marketing as it is maybe a feature, because you're bringing in high value, or in quotes, "high-value" people, because these are innovators or perceived as innovators, and they could be high net worth folks because they've got a CryptoPunk, for example. You know what I mean?

\[16:10\] So if they're in that space, then you're really attracting some unique people who see innovation. And if Cal is an innovation on what Calendly has already done in the open source space, but going farther and beyond, as you had said, maybe that's worth building, because you're bringing in those kind of people.

**Peer Richelsen:** Yeah, absolutely. And our core vision is to connect a billion people by 2031. We always think of what's something we want to include, and we've launched, I think, 13 languages so far. And when we see something like the Web3 industry, which is still technically underserved in terms of products - like, they just recently launched like a Zoom for Web3, and there's no Salesforce Web3, there's no Google mail for Web3. It's very much a new frontier, and it's still millions of people who use cryptocurrencies today... And I think being this pioneer in this new industry is very important for us to just show that there's more to just being a knockoff.

I've seen a lot of open source projects who never escape the mental model of being a Calendly alternative. I mean, eventually, we will probably get rid of that claim and be the open scheduling product. And those things, like these Web3 integrations and the developer platform and the open API - none of these things is something Calendly is doing. And so eventually, it's not a matter of feature parity, but also rate of innovation and listening to our customers.

**Adam Stacoviak:** Yeah. I mean, this is a-- I wouldn't necessarily call it an issue. I don't even know how to describe it. I mean, you've got even as so much as GitLab versus GitHub, you know?

**Peer Richelsen:** Yeah, absolutely.

**Adam Stacoviak:** I've been a friend of Sid's for many years. In fact, we've just had a show with Sid celebrating his S1 status--

**Peer Richelsen:** Amazing, right?

**Adam Stacoviak:** ...getting on the IPO status, and all that stuff... What an amazing run. But at the same time, at the same rate, there's always been this comparison between GitLab and GitHub, because GitLab is essentially the open source GitHub.

**Peer Richelsen:** For sure.

**Adam Stacoviak:** And they've gone beyond that, because now they're the DevOps platform and so much more. A single application does so much for enterprise teams, whereas GitHub really didn't win very much, at least early days, in the enterprise space. They really won with the consumer and the individuals like you and I. They got, essentially, the heart of open source under its belt in terms of sheer code and repository. It's like, you just can't deny that.

**Peer Richelsen:** Yeah.

**Adam Stacoviak:** And I actually talked to Sid about that. So you see that with even GitLab and GitHub, and maybe Cal versus Calendly, and you've got-- pick your thing, right? Even like with Supabase, for example, and Firebase. Well, we talked to Paul Copplestone and he said they're kind of reluctant about that tagline now, because it's not really-- not so much not true, but it's not what they're trying to do. It doesn't really encapsulate their vision anymore. And so maybe it began, and in particular with his stance with Supabase, was that when they attached the open source alternative to Firebase tagline, they shot up on Hacker News, got a lot of press and a lot of attraction and attention, and that's what got them their attention. It wasn't the only thing that kept it, of course, but it got the attention because there was something about Firebase, something about what it did, and it was acquired by Google, and this sort of proprietaryness of it behind closed doors... And people want that open source nature. You may not care to contribute to the code, but you may care about the stewardship of that code in the future. So if Supabase fails, this thing you've poured your work into as a open source contributor or user base of that because you love Postgres - you don't want to see that just die with the company, right?

**Peer Richelsen:** Yeah.

**Adam Stacoviak:** Similar to even ZFS. I know I'm on a little bit of a rant here, because these are all percolating things for me. Like, even ZFS, the file system, is 20 years in the making; like, it's been about 20 years. It's now got a lot more legs, but it was inside of Sun Microsystems, somehow open source licensed a few years in. Sun Microsystems was acquired by Oracle. We know Oracle was totally against open source, right?

**Peer Richelsen:** Yeah.

**Adam Stacoviak:** \[20:09\] And only by sheer luck was the codebase open sourced enough to fork it and turn into open ZFS. So that is an example of the reason why you want code to be open sourced, the reason why you wanted to serve the populace, the commons of the people, because it's no longer useful if people can't use it, right? What's the point of code if you can't use the code, right?

**Peer Richelsen:** Absolutely.

**Adam Stacoviak:** I'm on a bit of a rant here, so help me get back into a show... But I just see this happening, this idea of like Cal versus Calendly, how do you get out of this shell...? How do you get off under that shadow, kind of thing?

**Peer Richelsen:** Yeah. So two points to that. First, we did pretty much the same playbook, and Paul's also an investor in Cal. We went completely bananas on Hacker News when we just had "Calendly open source alternative" as a single title. We didn't even have a description. People immediately knew what this was about, because obviously Calendly is a strong brand, and people like, love-- I love Calendly. I love the idea of sending a Cal link, right? Because otherwise, I wouldn't be in this business, if I fundamentally disagreed with the mechanics.

But that really drove our early traction and gave us community members who shared the same sentiment. If you've taken a look at other scheduling products, there was x.ai, which was a more AI-focused scheduling tool, and it's like a closed source SaaS product. And a ton of companies build their scheduling infrastructure on top of x.ai. Aand they recently shut down, because they got acquired by some event scheduling company. And we had people in our inbox crying because they didn't know where to go to, and they didn't know -- this is not a business priority, but in two weeks, we have 1,000 people who need a new scheduling product or something, right?

So this is really what happens when a closed SaaS-- like, you're being thrown out of the house you're renting, and now you need to find a new house. Whereas if you have open source, everyone owns the code. No one and everyone owns the code, and I think that's very beautiful, because if we shut down and you may have a commercial license with Cal.com Inc, or you may not, the worst thing that's going to happen to you is maybe you get a bit less engineering support, but still, we will probably be at a point where there's so much knowledge built around the project...

Most people don't even know WordPress has a company. When I got started and I started hacking on WordPress, I was like 15 or something, and I didn't even know what open source companies are. I just thought, "Oh, cool, someone made this for free. That's great." So if WordPress' company, Automattic - knock on wood - shuts down tomorrow or gets bought by some PE firm and they rip out everything, then nothing changes. The code is there, the deed has been done. What type of company can say that?

I find that really impressive, the longevity of open source. We've been forked 1,000 times. If we delete our repository and we go crazy, it's like, the code is still there. It's impossible by now to get rid this company, this project. And I find that really inspiring, because if anything, when you provide a service and you have customers who love it, why not have these customers forever? Why should something only be for a short amount of time?

And I look at companies like, let's say, Webflow, which is this website creator, or Squarespace or Wix. These are amazing companies to capture value and provide a hosted service. But eventually - I mean, 10 years is a long time in tech, but not a long time for, let's say, the end consumer. I have my own, let's say, email address for 20 years now, and I intend to keep it for the next 20 years. If I had my blog there and at some point I get an email, "Hey, we're shutting down" - like, go figure - that's usually when you start to realize how short-term most technology is.

\[24:07\] And to be an open source is just really great, because we even have a longevity guarantee, which means if we eventually even shut down, we want to reincorporate as a nonprofit organization to have a more, let's say, lower-tech team, smaller ambitions, but just maintenance of the codebase, and maybe even donate it to, let's say, the Apache Foundation, or something. But we do have policies in place where we think if this ever fails as a startup, as a VC-funded growth case, we want this to be a thing in the next 10-20 years.

**Break:** \[24:37\]

**Adam Stacoviak:** What's the state of things now, I guess, since you got a recent round of funding? I think it was just late last year, right? It was like seven million, or something like that. I forget what the exact number was.

**Peer Richelsen:** 7.4, yeah.

**Adam Stacoviak:** 7.4. You wouldn't forget the number, would you?

**Peer Richelsen:** \[laughs\] Yeah. I mean - yeah, it's last year we announced it, I think, in December. The fundraise was concluded a few months before December; like four months, I think. It's a group of amazing technologists. It's anywhere from Open Source Capital, which is very obviously interested in the open source space... Naval, and Balaji, the ex-CTO of Coinbase, and then there's a ton of other, like Neha from Confluent, and some other open source all-stars, like ex-CTO of MongoDB. And it's just really cool to have these ex-operators, founders and technologists who have built these amazing companies. Chad Hurley, the co-founder of YouTube... It's really interesting to be working with the people I've-- it's pretty much always people I wanted to work with, and it gives us a lot of confidence to really push for, let's say, connecting the billion people by 2031.

**Adam Stacoviak:** How did you come to that number? I mean, that's such an interesting year, I suppose, and I guess if you were counting 10 up from 2021 --

**Peer Richelsen:** We started 2021.

**Adam Stacoviak:** Okay. That would make sense then. A decade from now. Yeah.

**Peer Richelsen:** Yeah. \[laughs\] It also sounds cooler than 2030.

**Adam Stacoviak:** Right. Okay. 2031, sure. Okay. So why that number? How did you get-- what's the quantifiable metric behind the scenes that says, "Okay, this number makes sense"?

**Peer Richelsen:** \[28:01\] Yeah. So obviously, as open source, metrics are really tough. Self-hosted telemetry is a two-sided sort. I couldn't even tell you how many Docker instances run today. I don't think Docker knows how many Docker instances run today, or WordPress. So that obviously is a challenge. But for us, we have a metric which is just raw bookings, which we track with anonymous analytics. That gives us some sort of feeling... We've done almost a million bookings by now, which is obviously a great signal. But how we came to 1 billion - I mean, in 10 years I don't know how many people will be on the web. I imagine 8 billion or something, in 10 years. To have to build technology that's truly open and accessible and really solves a core problem, which is two humans meeting... I mean, that's literally all we do nowadays. I barely use my email. I use my email to send Cal links. That's pretty much my day job. I imagine yours is similar.

Sure, you sometimes send some follow-up notes, but the true human connection happens in, let's say, FaceTime calls or podcasts, or dentist appointments, or massage appointments, or telehealth, or hiring marketplaces. The sheer amount of use cases for two humans to meet and make time is infinite. And by having this vision of connecting a billion people, we really optimize to make the right decisions to reach as many people as possible... The same way WhatsApp is now connecting like 2 billion people or something. They've really always focused on having a simple, yet powerful tool that works for absolutely everyone.

**Adam Stacoviak:** What's the possibility then, I guess, if we-- since I'm such a die-hard user of Calendly for many years now; I've only really used them in the context of mostly setting up podcasts or Zoom calls to meet people, pretty much.

**Peer Richelsen:** Yeah.

**Adam Stacoviak:** But I have a masseuse, I've got a chiropractor, I've got a dentist, as you mentioned. And I would think that those types of folks would either use Square in their calendar set up... Like, how does Cal fit in a world where you've got commerce happening and meetings happening, and... Where do you plan to go from there?

**Peer Richelsen:** It's very interesting. There's a lot of companies offering scheduling products, but it's never their core use case. It's like feature versus company. And something should be a company, something should be a feature. If you take a look at Clubhouse versus Twitter Spaces, Clubhouse alone is probably not strong enough to be a company, but I love Twitter Spaces. It's a great feature for the Twitter app.

I think the scheduling problem, with time zones and availability and checking multiple calendars and having integrations is just so complicated and hard that not even power users, but just the average user quickly notices that all these pre-made Squarespace scheduling products are just features, and not products. We have a ton of telehealth medicine companies who probably use Squarespace, but then end at their Cal.com iframe or script, just because it does what it should do, and it's just not a feature.

So I think another thing to mention is the network effects, because eventually, when more and more people start to integrate Cal.com - let's say, your dentist uses Cal.com and you have a Cal.com account yourself, there is very interesting network effects at play where it could overlap your schedule, where it says, "Oh, you're not available on Monday, so don't show me the Monday of your dentist."

There's another thing where we could auto-match certain availabilities, like maybe there's a feature one day where it, let's say, sets up recurring meetings with something. And if the recipient and the link sender has a Cal.com account, there's a ton of things we can do with this network of time.

\[31:54\] So that's just a few things why we think that eventually there's going to be a trend where Cal.com becomes the commodity for scheduling. And being a commodity also means being super-compatible to everyone else's instance. And that's something where we see really true long-term network effects at play, even with payments, like accepting payments for booking, cryptocurrencies as a booking... I have a friend who runs a massage studio and she's taking bookings over-- like paid bookings. That unlocks an entire new business model for millions of people in all kinds of industries.

**Adam Stacoviak:** Yeah. So I go to my barber, and the first step when going to my barber is going to whatever page Square sets up for them. They've got their card reader on-site, or whatever hardware they have, and Square is very much-- they're also a sponsor of ours, too. This is why I know so much, at least, about them. They're a hardware company and a software company.

**Peer Richelsen:** Yeah.

**Adam Stacoviak:** They have hardware, the physical device there. And I'm curious -- because I can see that future, that innovative thinking... Is that a future for you, where one day my barber could be using Cal instead, and you've got hardware and you compete with Square, a billion transaction per year company, just a massive company, all that good stuff? But I go to my barber, I go to his site, pick a date that works for me... It's got all this confirmation stuff via text, confirming I'll be there, because every missed booking for a barber is like one less seat. He might do 8, 10 cuts a day, and that's it. He's really counting on every appointment showing up... Unlike a dentist, where maybe they're a little bit more flexible, because they're just different, I guess, maybe in their pay structure or whatever, insurance involved, who knows...

**Peer Richelsen:** No-shows are always expensive.

**Adam Stacoviak:** Yeah. And I get there, I do my cut and I pay with my card with the Square hardware. Everything was through Square's infrastructure, basically. They give that barber the ability to never have to write a line of code, basically. And I love that, right? It takes people who would never write code - not that they can't, but just would never, because their skill is in taking care of people like mine's hair.

**Peer Richelsen:** Yeah.

**Adam Stacoviak:** Trim my beard, whatever it might be. Today I don't have one, but whatever it might be.

**Peer Richelsen:** The barber is a great example, but I think an even better example are the sheer amount of marketplaces that are on the web, like Toptal, Upwork--

**Adam Stacoviak:** Okay.

**Peer Richelsen:** ..what's it called? \[unintelligible 00:34:13.05\] and some other pretty much marketplaces where the company provides a platform, but the users book other users. Now, that's a use case you can't do with Calendly; you can't do that with SavvyCall, you can't do that with Motion, because fundamentally, these tools are consumer-focused, link-sharing products. For us, we can and we actually have marketplaces that use Cal to use the entire infrastructure that we provide, including the UI components and the APIs to facilitate marketplaces.

So in your case - sure, the B2C, the consumer barber may use Square, but the marketplace, the Airbnb for your local barbers, or the marketplace for your masseuses or massage studios, or your dentists... We have a ton of telehealth marketplaces that use Cal. And for the same reason as they use other developer-first products, because they build it once and then they provide it to millions, potentially billions of customers, without even knowing.

It's likely we end up partnering with Square and providing them the scheduling infrastructure that really works, than having a direct-to-consumer sales funnel to your barber. I don't think we will be going that route. It's also very inefficient to be selling to individual barbers versus selling to software providers who then build scheduling.

**Adam Stacoviak:** Yeah. It's an interesting world, man. I've always known Calendly was cool by being a user for so long, but I just never considered the amount of money, I suppose... The economy, I suppose, of two people meeting, and what a company--

**Peer Richelsen:** Yeah, it's a big problem.

**Adam Stacoviak:** It definitely is a big problem. I am so thankful. I just saw a lot of bashing recently - and I guess it was indirectly bashing of Cal too, because it was bashing of Calendly... Of this whole--

**Peer Richelsen:** Oh yeah, from \[unintelligible 00:36:08.10\] Twitter?

**Adam Stacoviak:** \[36:11\] Yeah. I don't even know what all the details were. I just know it was like, "You're elite because you send the link to your Calendly", something like that. And I was just always like, "I don't understand that."

**Peer Richelsen:** It's about scheduling etiquette, and I really don't get it, both as a biased founder of a scheduling product, but also as a lover of Calendly and lover of Cal, and other... I mean, I like all the scheduling products. Every time you remove the friction out of meeting someone, it is a bliss. It's just a waste of time on both ends.

**Adam Stacoviak:** My life has been bliss for many years now because of this lack of friction. I just couldn't understand the person's argument, because I'm like--

**Peer Richelsen:** Absolutely.

**Adam Stacoviak:** I just tell people, "If you ever want to meet with me, my calendar is open to you. Here's my link. Go there."

**Peer Richelsen:** Yeah. "Bookmark it."

**Adam Stacoviak:** Yeah, exactly. I can cancel that meeting. Now, I'd love to have some sort of token to potentially let them in, or whatever, but that's a different story.

**Peer Richelsen:** You know what? Another cool feature that Cal has is called opt-in bookings, which Calendly hasn't shipped yet. So basically, if someone leaks your link and people spam your Calendly link today, you would get 100 bookings, right? Like, I could find your link and make 100 bookings.

**Adam Stacoviak:** Yeah.

**Peer Richelsen:** Yeah, and you would manually need to kill every single meeting. We have a feature called opt-in bookings, where you first get a message, "Hey, this person would like to book you. Do you want to accept or reject it?"

**Adam Stacoviak:** Ah.

**Peer Richelsen:** So it's like a middleware in between.

**Adam Stacoviak:** Right.

**Peer Richelsen:** Also, if you connect your Calendly or SavvyCall to other integrations, to Zapier... Like, if someone books me, create an entry in my database. Now, that's going to be interesting when 100 people DDOS your calendar, because now your Zapier is running nonstop and creates 1,000 entries in your head table.

**Adam Stacoviak:** Yeah.

**Peer Richelsen:** So yeah, there's a ton of things which we really start from day zero and rethink how we actually do the bookings. And this is just one of the features that we do differently, or we give you an option to it. It's optional, obviously.

**Adam Stacoviak:** Right.

**Peer Richelsen:** But yeah, about the scheduling etiquette - we actually wrote a blog post about this whole thing, and... I mean, I want to interview this person; like what's the difference between sending someone a scheduling link, or sending someone written dates, like "Hey, it's nice to meet you. Do you want to meet on Monday 5:00 PM, Friday 6:00 PM or Thursday, whatever?"

**Adam Stacoviak:** Yeah.

**Peer Richelsen:** That is literally the same power play dynamic, because now the other person needs to do all the homework and see, "Does it work on my calendar? What's the best time?" And then they potentially need to spend more time to figure out what's working, go back to you and say, "Sorry, none of these days work." How can you even have an argument about this?

The only thing I always send when someone requests to meet me -- first of all, by the way, if someone wants to meet you, you send the link. If you want to meet with me or I want to meet with you, then it's my duty... It's like asking someone out. Like, "Hey, if you want to meet with me, then I'll do something first to-- I'll do the work. If I want to meet with you, I'll do the work." So first of all, that's just normal etiquette, I imagine, right? That's just how humans work. If I want something, I'll be as helpful as possible.

Now the other thing is - I always say, "Hey, I'd love to meet. Here is my link. But feel free to send me yours, if that's easier for you." Problem solved. There's literally no power play at work, because I don't care if you reply with a link. I literally don't care. Like, great, now I can use your link, because then I can choose. And I even think receiving a link is better than sending a link, because that gives me control over when it should happen. As a link sender, you maybe forgot to block your Sunday or something, right? Or you forgot to block out your Friday evening and you already have a date, and then you may need to reschedule. But if you receive a link, now I can take my time and I can look into my calendar and say, "Yes, Monday is perfect." So this whole discussion -- and obviously, this person received a lot of opposite opinions of like, "No, these scheduling products are amazing."

**Adam Stacoviak:** \[40:13\] Yeah, I've seen so many people be like, "I just got so much value from it. You're just \[unintelligible 00:40:15.01\] person."

**Peer Richelsen:** Yeah. So I wouldn't say it's bad. It's amazing marketing. And even when that blew up, we saw a ton of new users signing up, because people were like, "Hey, if you don't like Calendly, there's also Cal." I mean, the entire industry is still so young. Just think about how many people you know who have a scheduling link versus those who don't. My mom is using my link and - I mean, that says a lot, right? We made the mom test. If your mom can use your product, you have A+ usability. \[laugh\]

**Adam Stacoviak:** Well, I'm die-hard, man. I'm forever in this world. To the argument - I think there's a bit of context too, because not every meeting has the same context.

**Peer Richelsen:** Yeah.

**Adam Stacoviak:** And so the power play and the struggle - I don't quite understand that. I feel like it's an invitation. When I register my link, it's more like you want to meet with me. If you want to know my openings, this is the easiest way to find it out, versus... And they already-- it's implicit that you know the churning battle of sending emails back and forth. Just pick a time that makes sense for you. And that's what I say, "Here's my link. Pick a time that works best for you. And if there's something that doesn't fit, let me know."

**Peer Richelsen:** The people who don't like scheduling links probably have an EA.

**Adam Stacoviak:** Yeah.

**Peer Richelsen:** They just have an account executive and they magically make events in your calendar appear.

**Adam Stacoviak:** Right.

**Peer Richelsen:** That's obviously-- I mean, we've raised 7.4 million; I could probably hire an executive assistant, and I wouldn't, because I don't even think that's a better experience. The executive assistant should not be focused on looking into your private calendar and see if you have a dentist appointment. That's not a good use of your time.

**Adam Stacoviak:** Right.

**Peer Richelsen:** Or of anyone's time, of the account executive assistant or yours.

**Adam Stacoviak:** Yeah.

**Peer Richelsen:** So yeah, this whole conversation is very entertaining to look at, in my eyes.

**Adam Stacoviak:** But good marketing for sure, right?

**Peer Richelsen:** Oh absolutely, yeah. For both. On that day, I was chatting with Tope, the Calendly CEO, and we're just trading notes and just finding this insanely funny, this whole interaction on Twitter. So yeah...

**Adam Stacoviak:** How does that work? What kind of relationship do you have with Tope?

**Peer Richelsen:** Very open, very good. We had, I think the first call about - the only call - about three, four months ago. Again, this market is massive. If we go for billions of people, it's like, the sheer amount of use cases... And Calendly is doing a lot of things differently than us. As you said before, GitHub and GitLab are both like multi-billion dollar companies. What's the market cap of GitLab nowadays? Like 50 billion or 60 billion, or something?

**Adam Stacoviak:** I don't even know. It's so many billions, I have stopped counting, basically. It's a lot.

**Peer Richelsen:** Yeah. At some point it's like anywhere north of 20. Maybe the stock market crashed, and then now it's 25 or something, but yeah. And I would even argue, people meet for two reasons. People do two things on the web - it's making money, or meeting friends, or meeting people. And eventually, people realize that meeting people in person versus texting or social media - like, who knows? Maybe Cal turns into some sort of calendar-based social network where it's about the actual interaction with someone and not about just posting on someone's timeline.

There's so many things where both Calendly and Cal become multi-billion dollar companies without ever having a war. It's not like there's a resource we're fighting for. I mean, obviously, most people only have a single calendar link, like yours; you have Calendly, I have Cal.

**Adam Stacoviak:** Yeah.

**Peer Richelsen:** So eventually, the B2C market will get tight. But I think if you look at the sheer amount of people - Telegram, WhatsApp, Signal...

**Adam Stacoviak:** Dropbox versus Box...

**Peer Richelsen:** Yeah, exactly.

**Adam Stacoviak:** \[43:59\] Drop a few letters in the front of it, it's just Box, right? Dropbox or just Box? \[laughter\] It's kind of silly at some point, and that's why I asked you what's your relationship with Tope, because there could be this perspective... And I only loosely know some of his history with raising money even. I think that his first round of funding was like $100 million or something like that, and it was years into it. He had to grind for a long time with Calendly.

**Peer Richelsen:** Yeah.

**Adam Stacoviak:** And I only know that really by way of Kurt Mackey, who was on Founders Talk a bit ago and really shared with me that part of the story. I'm like, "I had no idea. I've been using Calendly for so long, I don't even know who the founder is. I run this show called Founders Talk, I'd love to have him on the show at some point, and just hear that story." Because you were able to raise money pretty quickly, while he wasn't. I'm not sure what the difference is, what the context is there really, but there's this scenario where you just want to understand the details around that. And I just had never really considered that fact, that grind. Every startup is a grind.

**Peer Richelsen:** For sure.

**Adam Stacoviak:** You've got Dropbox versus Box... You're going to have competition. Somebody's going to come into the space, be very similar or very same. And I think the market rewards those who are not straight-up copiers, but there's like this, the best artist steal kind of aspect. Obviously, it's a lucrative space. There's going to be a lot of things happening here, a lot innovation. I'm just curious about the relationship, how it works out.

**Peer Richelsen:** Yeah. I don't think he ever thought of us as like a copycat, because we straight up are not -- first of all, there's tons of Calendly copycats that are just SaaS businesses, different name, same features, and there's no differentiation. It's not even a different target market. Like, literally trying to do the same. So for us being an open source alternative, I see alternatives as literally an alternative, because pretty much all of our enterprise customers let us know, "Hey, whatever you're doing, we cannot do with Calendly. So we love you for doing this. This is amazing." Highly regulated industries, medical companies... We have government customers who luckily don't use Calendly. I wouldn't feel comfortable having government appointments go through a private company's database, just for the record. For any government, for any-- imagine Angela Merkel booking Joe Biden over Calendly. That sounds pretty scary.

**Adam Stacoviak:** Why is that? Can you zoom into that? What's the fear there?

**Peer Richelsen:** Well, I mean, for data privacy reasons... And there's a ton of companies, like AWS, for example, who have very strict policies around calendar sharing and calendar integrations, and they pretty much only allow to use self-hosted technology that they can look into, like completely vet the technology and see if there's no outgoing API requests.

**Adam Stacoviak:** So these are examples where they're using the self-hosted Cal?

**Peer Richelsen:** Exactly. Yeah. Those are examples where even if Tope and I were at war, they would just be like, "No, we can't serve this use case." Same as GitLab versus GitHub, right?

**Adam Stacoviak:** Right.

**Peer Richelsen:** So once you have a big enough--

**Adam Stacoviak:** There is a competition, but there may not be a war.

**Peer Richelsen:** Exactly. And I mean, at the end of the day, every company, at some point, competes. We may (who knows?) build native payment processing into our bookings. But I think it's less of a copycat, but more of like respectful-- we are very respectful and very interested in each other's journeys, because both of us have a long way to go. I mean, raising funding is the day zero, not the goal. And for him, and for the team, they've been going on for like 14 years or something, or 10 years; more than 10 years.

**Adam Stacoviak:** A lot of years. Yeah.

**Peer Richelsen:** A lot of years. And I'm grateful for their pioneer work of normalizing link sharing. I think that's the biggest thing that this pandemic has shown us; that the more and more people work online and remotely and in a different time zones... You know, we've never had that decentralized organizations before ever. If you take a look at our team, we have 14 team members in 12 different time zones or something, anywhere from China to Vancouver, which is almost around the entire globe. So that new world requires new solutions.

\[48:11\] And it's naive to think that Calendly, even for Tope, to be like, "We own this space now, and there's no one else going into it." So I don't think he-- he's very respectful with us and I'm respectful with them. It's a very interesting relationship, but I think that's how most second-time founders or mature founders think of the space. You don't compete on war, you compete on the best product and let the consumers decide.

**Adam Stacoviak:** Yeah.

**Peer Richelsen:** And it's also a driving function for innovation, because obviously, once you start having a competition-- and that's what we see with these mega corps, like Google having a monopoly on search, and YouTube and stuff... At some point, innovation stops for lack of incentives. And I think at the end of the day, even if Cal may just turn out to be a small -- like go back into a free open source software, just the raw pressure would've made both of our products much better.

**Adam Stacoviak:** Help me understand the footprint then. So what are the ways I can be a consumer of Cal? Remind me again - Cal is the product and Cal.com is the SaaS implementation, right?

**Peer Richelsen:** Right.

**Adam Stacoviak:** So that's how you differentiate.

**Peer Richelsen:** Yeah.

**Adam Stacoviak:** So if I want to use Cal, I have the option to use Cal.com. And since it's open source, I can spin probably a Docker instance on some VPS, or some cloud host somewhere or whatever, and I could administer my own. So if I'm an enterprise and I have restrictions, whatever, whatever, then you've got the EE directory in your open source repo, which is under a different license that is not open sourced, it's proprietary code; still in the same vein, similar to GitLab. I mean, these are all normal practices...

**Peer Richelsen:** Yeah.

**Adam Stacoviak:** But I can adopt or pay you for-- still while using maybe even your open source instance, some EE features and whatnot. I described probably somewhat the version of that, but give me the real version of how people can use Cal.

**Peer Richelsen:** Yeah. It was very accurate, very accurate. Good due diligence on our repo. No, we talked to Sid as well, and as the biggest open source IPO recently, we think that's also the best practice to build commercial open source, because it really-- not only some open source companies have like a closed source enterprise edition, and then that defeats the whole point of doing your own due diligence on the security and everything... So yeah, we've had at least two security audits so far reporting all kinds of things, which would probably never been found if it was a closed source product. So that's really great, to see both the free open core alongside the enterprise edition and our repository being checked by peer reviews.

Now, the business model is -- I'd say we have two very different products. We have the SaaS option, same as GitLab has a SaaS option to do whatever you can do on GitHub. That's cal.com/adam. Reasons to use that over Calendly is it's much shorter, and obviously time matters. I type my link. I don't know about you, but I type my link in iMessage or in emails, because it's just cal.com/peer. It takes me like four and a half seconds.

**Adam Stacoviak:** Yeah.

**Peer Richelsen:** That's really cool. So--

**Adam Stacoviak:** Mine's a lot harder.

**Peer Richelsen:** I imagine.

**Adam Stacoviak:** For Calendly, it's my whole name. You could probably find it if you-- now I'm going to get a bunch of spam and I can't opt out, but... Yeah, t's my full name. So it's painful to write Calendly and my name, and then whatever the actual calendar it is for that special link. I have an unfurl for that. I don't. I can't type it anymore. I used to.

**Peer Richelsen:** Yeah, I imagine. No, I mean, branding is a big thing. It's not the core. I mean, I wouldn't say, come to Cal because of the branding, but we have a ton of people who really appreciate these short domains. I'm a big fan of Hey.com. I use Hey.com for all my personal emails. And the domain, I love it. Every time I give it to someone, like a hotel receptionist or something, they're like, "Oh, this is cool." And we see the same behavior, branding, obviously - you can copy the recipe of Coca-Cola, but you won't be competing with them in terms of brand.

**Adam Stacoviak:** Yeah.

**Peer Richelsen:** \[52:00\] And for us, Cal.com is a real, real-- I have a statistic on Cal.com/open. The day we rebranded, the signups went ballistic; literally vertical, like a rocket. So it's undeniable that the brand is important. But what's more important to me is, first, consumers don't give a s\*\*\*t about open source. They rarely even know the difference. If we really want to connect a billion people, I'd say 90% of them don't know what open source means, or they have never interacted with open source in a way, like they've never opened a GitHub repository, but they care about the best product. At the end of the day, best brand, best product and best price - that's usually the triangle.

And what we've seen with open source - I mean, listen, this company has been around for pretty much eight months now, and we are not only on par with Calendly, but already build things that people ask that were nonexistent in Calendly. So the rate of innovation and the rate of deployment or the security - we have about 13 languages, 13 or 14 languages that are all made by the community and peer-reviewed by the community. It's a major factor for us to be actually a better product. So it's not only about selling to enterprises and having these highly regulated industries, but also it helps us to really have a short feedback cycle, talk to customers. And also, scheduling is a very integrations heavy market. So Zoom, Google Calendar, Apple Calendar and Google Meets - that's just a few to name, and then there's some analytics products...

And for us being open, just as an example, we have a Web3 video integration, which is called huddle.io-. Huddle01.com, sorry. A bit of a mouthful, huddle01.com. And they provide a peer-to-peer Zoom alternative with NFT avatars, and you can connect your MetaMask... Pretty much same niche focus as our Web3 integration. And they told me they've been trying to chase down the head of engineering, or the CTO, or like the VP of engineering at Calendly to build the integration. They literally said, "Just give us docs. We will build it for you and we would love to be part of this ecosystem." And it took them like months and they still haven't received a reply. And for us, they saw Cal.com, they saw the opportunity, and they opened the pull request, and three days after was merged. That's just fantastic for any developer who wants to contribute to a project, or any SaaS business, honestly.

If you have the alternative between an open core where anyone can contribute... For example Tandem, which is another Andreessen Horowitz-funded company which is doing like Zoom, but more for remote teams, and really \[unintelligible 00:54:54.05\] control of your computer, and a ton of really cool things. For them, it was the same experience. They looked at Cal and they said, "Hey, this is quite interesting and quite easy to integrate." And without our permission, they made a pull request, and we looked at it and it was safe to merge, and now they're live. And that's something I mentioned a lot of consumers will appreciate. They will never know what the process is behind the scenes, but one day they wake up and be like, "Why does Cal have 20 apps and Calendly only 10, or something, or 100 apps? Or why is this missing? What can I do to add it?" So I think that's just something where open source really shines.

If you have the developer, you pretty much own the market for most industries. You could be the PayPal and have good GMV, but I would want to have my stock in Stripe, because I think that's where the innovation is happening, when you really foster the engineer communities.

**Adam Stacoviak:** Yes, but they're also not open source.

**Peer Richelsen:** That's true. But also, I don't think an open source Stripe wouldn't be better than a closed source Stripe, because I think the value proposition of Stripe is the valuable partnerships with the banks.

**Break:** \[56:04\]

**Adam Stacoviak:** Definitely an interesting space, that's for sure. I mean, I never really considered how complex it could be. It sounds like what you're saying though is even by current measures, current time and market even, you're innovating faster than Calendly. And that's not you talking crap, it's just simply--

**Peer Richelsen:** No, that's just statistics. If you take a look at cal.com/open, the amount of pull requests and changes.

**Adam Stacoviak:** Yeah. What do you think is driving that? Do you think that-- I don't want to pit this as like a you versus them. I just want to understand the mindset, really. Do you feel like you understand the value proposition of what this market is more, and you're moving faster as a result of that? Or do you think that they've got, not so much lazy, or just -- like, whatever it is whenever you get comfortable, you know what I mean?

There was something Steve Jobs said, it was like, "Don't be comfortable", right? "Always be out there--" I forget what the quote actually is, but it's something on that, like "Don't be comfortable." Do you think it's a matter of contentment and comfortability, or do you think it's lack of vision, and you have the vision - not you personally, but you as corporately Cal? What do you think?

**Peer Richelsen:** Well, I'd say there's two or three powers at play. One of them is we're six months old, or let's say ten months inclusive of \[unintelligible 01:00:20.18\] initially, and they are 10 years old. So it's the difference between 10 months and 10 years. And I imagine I'll be at a bit-- I have different life priorities in 10 years than I have today. Now, that's not an excuse... There's a ton of-- I mean, the Microsoft CEO has done an amazing quarter recently, and obviously everyone's way beyond my age, and he's just crushing it. So I wouldn't say that's the main argument. But yeah, having-- as you mentioned before, it was not easy for Calendly initially, and it was a long, long, long grind, and now they really have an amazing business, but that was not always the case.

I think yeah, your priorities at some point change and you'll be like, "Oh, maybe this is fine for now." I mean, not everyone-- maybe they have ambitions to go public. Maybe they have ambitions to become the next GitHub or something. But no, for us, I think, first off, it's very young, and we don't think of stopping anytime soon. We're not really happy with the product today. Well, we are happy with it, but not content, as you said, or comfortable.

The second thing at work is the feedback cycle. We have a Slack channel with almost 2,000 users or engineers. If something doesn't work, if something needs to be improved, if a button should be on the left, not on the right, we know it immediately. I literally open my MacBook 8:00 AM in the morning and get feature requests that totally makes sense, are well reviewed, sometimes even built by the community... And I just click on Merge Pull Request, and suddenly, a really painful bug has been fixed that otherwise would've taken-- again, not trying to belittle them, but any SaaS company would take... First, you send a ticket to Support @ company.com, and then support says, "We will look into this. We will add it to our roadmap", and then you never hear back from them again. That's literally my experience with 99% of SaaS companies I report a bug to. That's not the case for open source.

I saw a tweet, "I want to work at this company just to fix this bug and then quit again." And I forgot what this company was, but someone tweeted that. And this is literally why you contribute to open source. Some bugs are just so annoying to your own usage that you just want to jump in and change a single line of code and re-contribute it back, or something. And that's obviously also amplifying the rate of innovation. And just as a side note, the languages we've launched - we couldn't do without the community. I don't speak Arabic. I don't speak Chinese. I don't speak Japanese. And if it was a closed source team and you have this valued system of privacy and you want to protect your codebase and you don't want to exposure... Like, we don't sign NDAs. Why would we sign NDAs? Everything's public. So there's so many more efficiencies by being a public company that-- well, obviously we have NDAs for the production database, but anything code related is common code. And that really helps us move fast and really innovate faster.

**Adam Stacoviak:** What about specific ways that your team's able to work? Async, remote, distributed... What's your setup?

**Peer Richelsen:** We are fully remote, fully async. We don't have any recurring meetings on the team; only some optional check-ins, if you want to. We use Cal for our internal meetings... \[laughs\] So if you ever want to do a pair programming session, everyone has a pair programming link, and you just book someone and jump on a call.

\[01:04:01.04\] I made a tweet the other day of how async companies can make use of scheduling products, because I fundamentally think async-first doesn't mean async-only. We still need eye-to-eye conversations. And the rate of information we both are exchanging is probably 100 times higher than if I were to send you an async document and then you send it back. And I think a lot of companies have this culture of, "Hey, let's jump on a call", or just randomly call you. That's a no-go for us. We always schedule calls, and we take-- if it's a non-priority, we move it at the end of the week, let's say, if it's something that's not urgent. And sometimes by Thursday, you cancel the event on Friday, because it's just been fixed or something.

So we really want this async culture, and having a scheduling link also gives the other person the control, because you can book out your busy times. You can put in calendar events for focus time. I use Clockwise, which is like a Google calendar extension to help me block my productivity hours. So even though we are working on a sync product, it's actually helping us run asynchronous, which is fantastic... Because not everything can be asynchronous, like drop interviews or calls with investors, or closing calls or podcasts. \[laughs\] These things will always be synchronous, and we want to make sure that having a synchronous meetup is as pleasant as possible.

**Adam Stacoviak:** Sometimes I bring out verbatim -- something I ask you in the sort of opening questions that aren't part of the show, that document, I said, "What lessons have you learned that you can share?" And you just said community-first. So unpack that for me. What does that mean? What lesson is that when it comes to community-first?

**Peer Richelsen:** Yeah. I mean, we had a community before we had a product. When I started, back in the day, it was called Calenzo.com. I made pretty much like a visual white paper website where you could sign up for a waitlist, and that waitlist would also take you to Slack. So pretty much like, "Here's what I want to build - an open source, developer-first Calendly alternative. If you think this is great, join our community." And from that day on, we've been nurturing our community with updates, we sometimes do Twitch streams where we live code new features, which obviously also only works for open source, and celebrate Product Hunt launches. We've been Product of the Day twice now with two different launches, Product of the Week, of the month, just because we have this super-powerful community. We have investors from our community who put in as little as $2,000 in our seed round.

I think it's really hard to build a developer-first company without a community... Borderline impossible, in my opinion. And that's also why I don't think Calendly would be able to open source and then compete in the open source space, because open source is not just like leaked code. The Twitch codebase was leaked. That doesn't make it an open source company. It's the entire values and visions and theses and community engagement. So it's a real \[unintelligible 01:07:09.00\] it's a real strong feedback loop for us. It's something we will always foster and prioritize. And also, obviously, it also helps us to do the right thing, because I think once you lose touch with your customer base, you may end up doing business decisions, like charging the wrong feature, or removing the wrong feature. And we're always kept accountable by literally 2,000 people. It's like having a board of 2,000 customers that constantly tell you, "Hey, we like this more than this." Sometimes you need to go against it, for - well, good reasons, or some other reasons... But in general, it's a really good guiding system to make the best decision.

**Adam Stacoviak:** \[01:07:51.04\] What about you personally? What would you say your day is like, your personal day? What are some of the things that excite you about maybe even just today, or this week, and what are some things that are like super-challenging for you personally?

**Peer Richelsen:** Yeah. I've finally been back to the gym. I did a rest week last week just to recover from just some back problems and some other stuff... So I'm very glad to be having some gym time again. It's really relaxing for me. My day is pretty structured. Again, I use Clockwise to put in lunchtime and focus time, and pretty much -- I'm usually working on more like US hours than European. It's not uncommon for me to work until midnight. Or not midnight, but like 11:00 PM, and then I sleep until 9:00. So I get like eight hours of sleep. I have an Oura Ring, so it keeps me accountable to get in my eight hours of sleep. And we're actually working with a developer platform to launch an Oura integration where it would reschedule your link if you had bad sleep. So it would reschedule your morning event if you had a bad sleep before.

**Adam Stacoviak:** Yeah, because there's times I'm like, "These are days-- I definitely can be here on Tuesday all the days, but today..." Because we have kids. Just saying we have kids basically means chaos ensues unexpectedly. So something will happen to my wife's morning, which impacts my morning, or our day, or our lunchtime, or just anything. So yeah.

**Peer Richelsen:** You're going to love the next app that I'm working on. Something we haven't talked about is we're launching an app store for time, where any person can launch-- kind of like an App Store for your iPhone. You can launch a small app, whether it's a video integration or just something else in our app store, something like the Slack app store \[unintelligible 01:09:35.11\] And one app I'm personally working on is called Mute My Cal, and it's a big red button that makes an explosion sound when you press it, and it reschedules your entire day.

**Adam Stacoviak:** Yes.

**Peer Richelsen:** So basically if you have an emergency, your kid just ran into the wall and now needs to go to the hospital with a bleeding nose, you just do that, and then your entire schedule-- you auto-send a message to everyone who you had a meeting with, and it also offers you to move it to just a few settings. That's something I'd love to have, because so many times... Like, I recently was sick \[unintelligible 01:10:12.02\] and I was like... I had like eight calls that day, and I clicked on every event, "Hey, I'm sorry, I'm sick. Can we do tomorrow? Hey, I'm sorry, I'm sick. Can we do tomorrow? Hey, I'm--" And that day I was like, "I want a big, red button." \[laughter\]

**Adam Stacoviak:** Yes. I would totally nuke my day. I might even nuke half the day, or nuke my morning; something, anything, nuke a portion of it. So at some point you then have settings which can cause issues, Peer, but we'll get there when we get there.

**Peer Richelsen:** Yeah.

**Adam Stacoviak:** I'll be a first user though. I'll be a beta tester for you if you'd like, because I'll nuke my morning just for fun. \[laughs\]

**Peer Richelsen:** \[laughs\] It makes a cool sound effect as well.

**Adam Stacoviak:** It sounds like there's some instant gratification in terms of like some sort of visual and a sound effect. So that might make me happy. It brings me out of my potential funk because of the situation. And then I know that through automation and trusting the system, basically, that things will get rescheduled.

**Peer Richelsen:** Yeah, for sure.

**Adam Stacoviak:** And that actually has been one thing I could say personally about my experience with sharing links to my calendar... It's been really easy to not only schedule, but then reschedule, and allow them to reschedule, too. Because I'll get a cancel or a moved link, and all this stuff just happens and I'm like, "I didn't have to get one email from them to approve with them and go back and forth." And life is just so much easier because of that reduced friction. And if this nuke button can give me less friction, then...

**Peer Richelsen:** Ease of mind for emergencies.

**Adam Stacoviak:** Yeah. Yeah, for sure.

**Peer Richelsen:** I mean, everyone wakes up one day, and especially now with this pandemic... Bailey, my co-founder, knock on wood, just has COVID since yesterday, and - yeah, I mean, one day you just wake up and you're just not functioning, and you want to have a "Nuke my Cal" button to say, "Sorry, I'm out of office for the next--" And maybe even you're at a setting where it not only nukes your Cal, but it also just blocks out three or four days in advance. So you don't even need to log into Calendly, change your availability on Cal.com. You don't even need to do anything, just as like, "I'm done for this week."

**Adam Stacoviak:** \[01:12:19.04\] Precisely. Yeah.

**Peer Richelsen:** Exactly, "Don't deal with me." Yeah.

**Adam Stacoviak:** I've got some ideas for you. We should workshop this, because I can share some more ideas with you back and forth on this.

**Peer Richelsen:** Yeah, I'd love to talk to power users of scheduling links.

**Adam Stacoviak:** There's a lot of things you can do with this. And you know what - that's why I wanted to have this conversation with you, because I have been such a fan of Calendly and the process for so many years. And even this call here, we scheduled and I apologized, I'm like, "I'm sorry, I'm sending you a Calendly link." I just wasn't sure if you'd be offended. I didn't think you would be, but I just pre-apologized like, "Hey, I know we're talking about your product, and this is what I use", and you know that. That's the marketplace. That's how it works.

But at the same time, I was like, "I don't want to offend you by sending you the opposing marketplace constituent, basically." So that's just how it works. But I've just been such a fan of the work in this space. And I would say, now having this conversation with you, I'm kind of renewed. Not that Tope is by any means not focused, and I don't want to speak ill of their focus, because they seem very focused as well, but clearly, you have a magnification on a particular focus, and it might even drive them. Because from my perspective, having been such a user for so long, I didn't see any competition for them...

**Peer Richelsen:** No. Yeah.

**Adam Stacoviak:** ...for years. And maybe that's why the areas where you've been able to push and succeed - they just hadn't gone into those areas because there was no competition. It's like the turtle and the hare kind of perspective. I don't know if this is actually a great analogy or not, but the turtle - they kind of like just move at their own pace, whereas the hare felt like they had all the time in the world, because they were fast. Because they were fast, they could stop and chill and look at the flowers or do whatever the hare did in the story. I don't remember the exact story, but the turtle just had to move at its absolute fastest pace, which was still slow, and the turtle won, over the hare. You know what I mean?

**Peer Richelsen:** No, I mean, I totally get that sentiment, and I wouldn't even blame Tope or-- I mean, everyone builds companies for different types of reasons. For the longest time, it technically was an indie business.

**Adam Stacoviak:** It was, yeah.

**Peer Richelsen:** It's a bootstrapped, organically-grown organization. And being bootstrap has pros, but it also has a ton of cons. For us as a VC-funded business, with employees who have equity in the company, millions of dollars in the company, who want to make this thing take off... It's just a different sense of incentives. And incentives, at the end of the day, drive everything; the good decisions and the bad decisions. Culture is very important, and we try to keep our culture very developer and community-focused and humble.

And I think it's also interesting the difference between not being bootstrapped, because it gives us, with the VC funding, just focus on building... I mean, that's the classic playbook - aggressively building market share focused products, and not taking what's... Like, we've turned down some enterprise deals, let's say, where we would really need to stretch our codebase and focus on an entirely different set of problems. Even though it may make 200,000 a year or something, we turned it down, because we did not depend on it immediately to keep the lights on.

So I think there's some unfair advantages and it would be not smart to play them to your strengths. So for us - sure, revenue is great, and it's important, and a key KPI for us, but so is market share and developer adoption. So if we can grow faster and really build a great product for these people to use, we should be in good shape.

**Adam Stacoviak:** \[01:15:54.29\] Can you share any details around revenue right now? Are you in the black, in the red? Are you making more than your burn rate?

**Peer Richelsen:** We've recently hired a ton of more people and we'll probably end up hiring maybe 5 to 10 more in the next quarter... So we will be in the red for a long time. That's what VC funding is for. We have about five to seven years of runway, so there's not really a requirement for us to turn a profit.

We could turn a profit probably next quarter if we chose to, if we wouldn't be reinvesting in building out the team and building out more features or marketing, branding etc.

No, we're not profitable. I don't think it's the case for most 10 month old companies, and also never the goal for VC funded companies. No, but revenue is great. I mean, I think revenue's been growing consistently for 30%, 50% month over month. We are experimenting a lot with the new infrastructure pricing, so those deals are now coming in. And as you may imagine, enterprise deals usually take anywhere from six months to two years to really flourish. Us having closed these deals already is just a testament of people really want this, because if you're only 10 months old and you have two or three enterprise customers, then it's a good sign.

**Adam Stacoviak:** Yeah, absolutely. So do you pay attention to revenue, or is it -- like, how top of line is it for you on the KPI?

**Peer Richelsen:** I sign into Stripe like every three weeks and have like a surprise face. \[laughs\]

**Adam Stacoviak:** Like a down or an up face?

**Peer Richelsen:** No, like a good face. But it's not like I manically look at the day-to-day revenue. We've actually had a bug where people were able to create a pro account without paying, and I didn't notice, so maybe I should look more out for actual revenue... We fixed it now, but this would probably not happen as an indie business, because that's your bread and butter.

**Adam Stacoviak:** Right.

**Peer Richelsen:** At the end of the day, we at least intend to go public, and we will be always judged on fundamentals and not on stories and rainbows and butterflies.

**Adam Stacoviak:** Yeah.

**Peer Richelsen:** Revenue for us is a very important KPI, and especially, the enterprise space has very interesting margins.

**Adam Stacoviak:** So when I met Sid Sijbrandij years ago... This was before I believe he even disclosed it to someone like me that they plan to go public. We've been friends over the years, so maybe we'll be friends over the years and we'll have you back on it at some point. So--

**Peer Richelsen:** Would love to, yeah.

**Adam Stacoviak:** Did I hear you right? You said you intend to go public. The plan is to be a public company.

**Peer Richelsen:** We don't want to go public for the sake of going public. I'm a big proponent of not having a-- I'm trying to have not a big ego. I'm trying to make this decision based on my ethics and values and not like--

**Adam Stacoviak:** I think it's one thing to have conviction than an ego, though. It sounds like you have conviction, not an ego.

**Peer Richelsen:** Yeah. Well, I mean, some people want to go public because they want to go public. Some people see going public as the best way to have the most impact. For us, to reach a billion-- well, first off, there's two ways to think about it. A, to reach a billion people, you probably need north of 100 million in funding, which at the end of the day means you will probably raise one, two or three consecutive rounds of funding, which then also means the people you bring on board will look for a liquidation event to return the fund. I mean, that's just pure mechanics.

**Adam Stacoviak:** Yeah, that's how it works.

**Peer Richelsen:** So eventually, by just picking a very big, ambitious goal like connecting a billion people, you end up in an industry where you either sell for a couple billion to Google, or you go public. And I'd like this to be an independent company the way Sid runs GitLab as an independent company. And even Stripe will eventually go public. There's just too much forces at play to liquidate early investors.

So that's the first line of thinking. Once you're in this industry, you will probably end up having a liquidation event, if things go well. And the second way of thinking is we think as an open source company and looking at other open source companies. Being a public company is another testament of being just -- yeah, a public, an open company, that anyone can share in the upside of.

\[01:20:10.23\] I bought GitLab on the Daily IPO, because I never had a chance to buy any secondaries before. And I want them to do well. I truly believe in the mission and I want the retail investors to profit off it as well. So I think that's my view on public companies. I don't see it as a way of just having it in my CV, or a checkmark. It's more of like, okay, what's the economics behind it, what's the best way to connect as many people as you can, and then fundamentally, that's probably the outcome.

**Adam Stacoviak:** Yeah. The way you describe it is almost the way you build goals and habits, right? Sometimes someone can just set a goal and not put in the habits to get to the goal.

**Peer Richelsen:** Yup.

**Adam Stacoviak:** Whereas it seems the way you described it, you described all the habits, which is like the intermediate outcomes that you want to see happen. Well, a natural result of those things happening is going to be the kind of company that goes public, right?

**Peer Richelsen:** Yeah, absolutely right. It's a mix of compounding effects, like every day trying to do your best, and really small iterations, and growth and revenues growing exponentially, usage is growing exponentially... So eventually, that by design ends up being a big company.

And the second thing is there's some people who overly obsess about making a million dollars or making 10 million or having this fixed mindset of goals. And for me, revenue is just the outcome of a very good product. It's an outcome of solving a massive pain, in a massive market. And if you check both of the boxes and you do a good product in a massive market, it's really hard to not make revenue. If you really take a look at the companies who solve a massive problem, they may struggle to turn a profit because they have huge costs, but it's really hard to solve a \[unintelligible 01:21:48.21\] big problem and not make any revenue. So for me, it's more like the outcome, not the goal.

**Adam Stacoviak:** Let me reveal something then to you, because I was pressing you on this revenue perspective, not so much for you to disclose your revenue or for you to say how often you check it or to know the exact number. What I was really trying to understand was what are you focusing on. Because what you're focusing on isn't--

**Peer Richelsen:** We focus on bookings.

**Adam Stacoviak:** Right, exactly. What is the KPI that you are focusing on? Because it sounds like you're getting to the outcomes and the different stuff. We've got a gap there, to some degree, but that's why I was really asking, was like, what are you really focusing on? It was my kind of follow-up question, but we got there a little ways.

**Peer Richelsen:** That's great. We got there, yeah. No, absolutely bookings. And also it plays well with our vision of connecting a billion people, because if we charge enterprises per booking and we intend to connect a billion people, then obviously connecting a billion people is a good metric.

**Adam Stacoviak:** Well, Peer, I'm excited about what you're doing. I'm glad we had this conversation, because I definitely understand what you're doing far more better. We didn't necessarily go into your personal story as much as I wanted to...

**Peer Richelsen:** Next time.

**Adam Stacoviak:** Next time, for sure. And I can guarantee, based upon what you're doing, you're going to be a regular back on here, maybe next year, six months from now, or whatever the next big thing is for Cal, for you, and I'm totally open to that. Anything in closing? Any wisdom you want to share? Is there anything on the horizon? What's a super-secret that maybe no one knows about that you can share here today? Maybe it's out there, kind of known, but not quite well known, or something completely secret that you can kind of give a tease to today.

**Peer Richelsen:** Yeah. Well, I mean, I can definitely tease some stuff. So we had this amazing Web3 launch a couple days ago, literally two or three days ago, and that went viral with a quarter million impressions. But I think the next launch, or the next announcement will probably going live in like two or three weeks. I think that will really make waves. So I'm very excited about that. I can't disclose what it is right now. I know everyone wants to know it, but maybe by the time this goes live, we can add it in the show notes.

**Adam Stacoviak:** Well, let me say, this show won't go live for at least two weeks, maybe three weeks. So I think we have some time, if you can share something. But if not, then I'll leave it to you.

**Peer Richelsen:** I think for legal reasons, I can't disclose yet. But it's very, very exciting. I mean, something I can disclose is the app store for time, which is going live, and we will have a developer program where we will give out small grants or even small investments into, let's say, time-based startups.

If you want to build a hiring marketplace or a mental health marketplace, not only we provide you with the infrastructure, but also with the knowledge and funding to really build something that connects two people. So that's something I'm really excited about.

**Adam Stacoviak:** Interesting. Alright, Peer. Well, thank you so much for your time today here on Founder's Talk. It's been awesome talking to you. Anything else that-- is there anything left unsaid, anything I didn't ask you?

**Peer Richelsen:** Well, first of all, thank you for having me, and I love the show; excited to be part of it. Anything missing? Yeah, you can follow me on Twitter. It's @peer\_rich. It's an abbreviation of my last name. Please don't try saying my last name. It's a mouthful. I've had this handle for 10 years, so don't blame me... \[laughs\]

**Adam Stacoviak:** Richelsen. It's pretty easy. We'll get it right. Don't worry.

**Peer Richelsen:** Oh, okay. Okay. So yeah, please-

**Adam Stacoviak:** It's not the German enunciation version of it, it's the Americanized version of your name. I'm sorry, but that's what you \[unintelligible 01:25:03.23\]

**Peer Richelsen:** Yeah, that's perfect.

**Adam Stacoviak:** Well, cool. It's been awesome having you. Thank you so much for joining me. Thank you.

**Peer Richelsen:** Thank you. Ciao.

**Outro:** \[01:25:14\]
