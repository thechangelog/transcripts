**Jerod Santo:** Well, should we kaizen? Do we need a pregame at all?

**Gerhard Lazu:** I'm prepared.

**Adam Stacoviak:** You never know.

**Jerod Santo:** I'm always ready. I was born ready. I came out of the womb and I was like "Kaizen!!"

**Gerhard Lazu:** \[laughs\] See... Studio-wise, that's why we are recording.

**Jerod Santo:** That's right.

**Gerhard Lazu:** You cannot make this stuff up. That would have been a wasted joke.

**Jerod Santo:** I kind of did just make it up, but I know what you're trying to say... Ah, that wasn't true, Gerhard. I didn't actually say that out of the womb. But...

**Gerhard Lazu:** Really?

**Adam Stacoviak:** We thought it was true, actually.

**Jerod Santo:** So you can make this stuff up, is my point.

**Gerhard Lazu:** Yes, of course.

**Jerod Santo:** But you can't make it up twice, and so good thing we hit record. Alright, Gerhard, take us on a journey. Take us on a ride. Tell us where we're headed.

**Gerhard Lazu:** Well, I want to start with a question, and an answer as well...

**Jerod Santo:** Oh, gosh...

**Adam Stacoviak:** Sweet. I love it.

**Jerod Santo:** I always feel like I'm like coming to --

**Adam Stacoviak:** An interview.

**Jerod Santo:** ...a quiz, or at a test... Yeah, "This is gonna be more painful for us than it is for him" kind of a thing.

**Gerhard Lazu:** This is gonna be good. This is gonna be good. So do you remember what was the question that we asked, or the proposal -- actually, yeah, that was a question that we asked in the last one, in last episode.

**Jerod Santo:** Yes. It was like goals for the year?

**Gerhard Lazu:** Yes. So we started with that, yes, but there was something else.

**Jerod Santo:** Oh, shoot. Adam, do you remember that?

**Adam Stacoviak:** I do, yes.

**Jerod Santo:** What was it?

**Adam Stacoviak:** It was "What do you want to do this year?" Something like that.

**Jerod Santo:** No, it was something else.

**Gerhard Lazu:** \[unintelligible 00:05:08.14\]

**Jerod Santo:** Oh, should we start a CDN?

**Gerhard Lazu:** "Should we build a CDN?" Yeah, that was the question.

**Adam Stacoviak:** Okay. Yes, I'm well aware. I've been marinating here on this topic for a bit.

**Jerod Santo:** Okay.

**Gerhard Lazu:** "Should we build a CDN?" So the follow up to that is "Did we build a CDN? Did it happen?"

**Jerod Santo:** Oh, "Did we build a CDN?"

**Gerhard Lazu:** "Did we build a CDN?", yes. \[laughs\]

**Adam Stacoviak:** Gosh...

**Jerod Santo:** And you want us to answer that question?

**Gerhard Lazu:** Well, I can answer it... The answer is no.

**Jerod Santo:** I didn't build a CDN. Adam, did you build a CDN?

**Adam Stacoviak:** I tried...

**Jerod Santo:** \[laughs\]

**Gerhard Lazu:** Yeah, no, we didn't --

**Jerod Santo:** Gerhard, did you build a CDN?

**Gerhard Lazu:** I tried... \[laughter\]

**Jerod Santo:** You both tried, but I have a feeling Gerhard tried a little harder than Adam.

**Adam Stacoviak:** Thank you, Jerod.

**Jerod Santo:** Just a feeling.

**Gerhard Lazu:** I had some help. It wasn't just me, by the way.

**Jerod Santo:** Okay, let's hear about it.

**Gerhard Lazu:** Do you know someone called James A. Rosen?

**Jerod Santo:** We do, because he's been instrumental in our community lately.

**Gerhard Lazu:** In our CDN saga.

**Jerod Santo:** We're name-dropping him just constantly.

**Gerhard Lazu:** Yeah. So he was very kind to give me an hour of his time, maybe a bit longer... And we tried building it.

**Jerod Santo:** Oh, okay. Cool.

**Gerhard Lazu:** So yeah, so we did have a go at that... And we stopped when we realized that we cannot terminate TLS in Varnish, without something called Hitch.

**Jerod Santo:** Okay...

**Gerhard Lazu:** What that means is that if we build a CDN built on Varnish, we also need Hitch, so that Hitch is the component that connects to Fly, to our Fly app, because that puts up TLS... And we need that component before we can do even like the simplest Varnish config. And our app has HTTP disabled, so it only serves HTTPS, and for that, we cannot do it without Hitch. So that's where we stopped.

**Jerod Santo:** Okay. So you ran into a hitch.

**Gerhard Lazu:** We ran into a hitch, there you go.

**Jerod Santo:** Yes. So why didn't you just put Hitch in there? Why didn't you just go grab Hitch?

**Gerhard Lazu:** Well, it took us an hour to get to that point.

**Jerod Santo:** I see. So you said "If I can't build a CDN in an hour, I'm not doing it."

**Gerhard Lazu:** Exactly. "I'm trying something else." \[laughter\] I did promise I'm not going to spend a lot of time on that, so...

**Jerod Santo:** That was true. Okay.

**Gerhard Lazu:** We were just trying to see how far we can get. Serious talk now... We went with \[unintelligible 00:07:18.23\] James was there... We had a couple of -- the feedbacks to the last episode was really good. We had a bunch of people basically get back to us. I'm reading some names here... Matt Johnson - I think he's the one that wrote the most. So thank you, Matt. I went through all of your comments. I thought about them, and I also replied to them. I don't have a lot of time, but I did make time for that. Those were some very good comments, so thank you, Matt. There was Lars Wikman...

**Jerod Santo:** Of course.

**Gerhard Lazu:** I still don't know how to pronounce his name. I'll try again. Lars Wikman. There you go. That's closer.

**Jerod Santo:** Closer.

**Gerhard Lazu:** His actually idea was on point. Like "Hey, have you heard of Bunny?" And I was thinking "I haven't. I haven't heard of Bunny CDN." But Easter is coming...

**Adam Stacoviak:** Well, it's not about the bunny.

**Gerhard Lazu:** \[08:06\] You're right. It is not. I was expecting you to say that. However, Changelog has a bunny. What does that mean?

**Jerod Santo:** I have no idea.

**Adam Stacoviak:** Gosh...

**Jerod Santo:** Is this is a mascot, or something?

**Gerhard Lazu:** Try this... In your browser, bunny.changelog.com.

**Jerod Santo:** Oh, my goodness.

**Gerhard Lazu:** Bunny.changelog.com.

**Jerod Santo:** Oh, it loads.

**Gerhard Lazu:** Lars Wikman, thank you very much. We tried it.

**Jerod Santo:** It loads our website.

**Gerhard Lazu:** Yup. So it's a temporary CDN that sits in front of Changelog; it's just there so that we can compare it. The comparison was "Let's do synthetic probes, synthetic HTTP requests." Remember we had Pingdom, and then we stopped using Pingdom?

**Jerod Santo:** Yes.

**Gerhard Lazu:** Okay. Well, I'm trying a new service called Hyperping. Hyperping.io. Okay, lots of name dropping... It's gonna be a fun one.

**Adam Stacoviak:** Nice.

**Gerhard Lazu:** And I tried it, and I liked it.

**Jerod Santo:** Hyperping. What do you like about it?

**Gerhard Lazu:** Hyperping.io. The whole idea - there is like a single person behind it. Leo... Hang on, give me a second. I have to find his surname.

**Jerod Santo:** DiCaprio.

**Gerhard Lazu:** No... \[laughs\] I don't think so. But close enough.

**Jerod Santo:** That would be sick, wouldn't it?

**Gerhard Lazu:** That would be sick.

**Jerod Santo:** What a surprise that would be... Get him on --

**Gerhard Lazu:** Leo Baecker. We got like a couple of emails back and forth, I liked the whole story... It seems fairly simple, and it works interestingly well, surprisingly well. Much \[unintelligible 00:09:33.08\] than Pingdom. Having used Pingdom for many, many years myself, I went shopping, and we used Grafana Cloud for a long time... I think we still have Grafana Cloud, by the way, in the synthetic monitoring. So I used quite a few over the years. Uptime Kuma, big fan of Uptime Kuma. Again, all these things we've used.

**Jerod Santo:** Uptime Robot? Have you ever used that one?

**Gerhard Lazu:** Yes, I even paid for it for like a whole year. Yes. So I pretty much went through most of them. So I liked Hyperping. And I tried it, and I compared Fastly, Fly, Bunny, and Cloudflare.

**Jerod Santo:** Oh, my goodness.

**Gerhard Lazu:** And we have more than a month's worth of data.

**Jerod Santo:** Who wins?

**Gerhard Lazu:** Do you wanna guess? \[laughter\]

**Jerod Santo:** I think I know the answer, because you're very excited about Bunny, so I'm thinking it's bunny. I'm gonna guess Bunny.

**Gerhard Lazu:** Yup. That's it. But by how much? That's the question.

**Jerod Santo:** That I don't know.

**Gerhard Lazu:** So... Should I share my screen? What do you think? Or at least the window, so that we look at some numbers, and we talk about that.

**Jerod Santo:** As long as you read them out loud for our listeners...

**Gerhard Lazu:** I will read them out loud. I will, yes.

**Jerod Santo:** Okay. Who names their CDN Bunny, though? I mean, honestly...

**Gerhard Lazu:** I know. When I heard the name, I was thinking "Seriously? Is this like a serious thing?" And apparently, it is.

**Adam Stacoviak:** Well, bunnies are fast.

**Gerhard Lazu:** Bunnies are fast. Yes, you're right. I think that's the whole idea. Yeah, it's in there. Can you see that?

**Jerod Santo:** But so are rabbits, which is just a --

**Gerhard Lazu:** Okay, so I just clicked on this link, Changelog on Fastly, and this basically puts me right in Hyperping. This is the interface. Okay?

**Jerod Santo:** Okay.

**Gerhard Lazu:** So what we're looking at is the last 24 hours' pings from all over the world. Basically, every single location that Hyperping supports, it's been running against Changelog Fastly. This is Changelog.com. The average response time across all continents - Europe, North America, Australia, Asia, Middle East, South America, and Africa, all of them...

**Jerod Santo:** That's not all the continents, but okay...

**Gerhard Lazu:** All the continents that Hyperping runs in. \[laughter\]

**Jerod Santo:** Okay. You said "All of them", so I just wanted to make sure. Okay.

**Gerhard Lazu:** All continents Hyperping has probes in... And the average response time is 422 milliseconds.

**Jerod Santo:** That seems slow...

**Gerhard Lazu:** It does, right? So what we see is that Europe and North America is fairly stable. So they're around 150 milliseconds. So fairly stable, fairly responsive... 115 milliseconds.

**Jerod Santo:** Where's our slow continent?

**Gerhard Lazu:** \[11:51\] So the slowest one is Middle East, at 681 milliseconds, and it's fairly flat. You can see the line is almost like a flatline. Australia is 516 milliseconds, and Asia just about the same. So Europe and North America, 150. All the other continents are around 500 or more. Between 500 and 700 milliseconds, okay?

**Jerod Santo:** Okay.

**Gerhard Lazu:** Average response time for the whole month...

**Jerod Santo:** 372.

**Gerhard Lazu:** 372. So that's number that we are comparing. Okay? So remember, this is Fastly.

**Jerod Santo:** Okay.

**Gerhard Lazu:** This is Fly. This is when we go directly to the app. So we're not going to the CDN. The average response time for the last 24 hours is 268 milliseconds.

**Jerod Santo:** This doesn't make sense to me, because... \[laughter\] I don't need to tell you why.

**Adam Stacoviak:** Please, explain.

**Jerod Santo:** But you know why... Because Fly - there's no caching at all there. I mean, it's literally running through Phoenix every time you hit it.

**Gerhard Lazu:** Not quite. There's a proxy in front, and they --

**Jerod Santo:** Oh, the Fly proxy.

**Gerhard Lazu:** ...have edge locations. So whenever you hit a Fly endpoint - it doesn't matter where you are - you will hit the edge location which is closest to you.

**Jerod Santo:** Yeah, but how does the Fly proxy know that we have stale data or fresh data?

**Gerhard Lazu:** So as far as I know, it doesn't do any caching. And by the way, if someone's --

**Jerod Santo:** That's my point, I said no cache.

**Gerhard Lazu:** Right. However, it's traversing the Fly network.

**Jerod Santo:** Okay.

**Gerhard Lazu:** So we are traversing the Fastly network, versus the Fly network.

**Jerod Santo:** Right. And we don't have multiple Fly hosts, in multiple locations. So it's all going back to a singular location, like Fastly is. Correct?

**Gerhard Lazu:** Exactly. Yes.

**Jerod Santo:** Okay.

**Gerhard Lazu:** So in Fastly's case we don't use the shield for the app; we had that issue, remember... And we still don't have shielding. So if the edge location doesn't have the page cached, it will go to the origin.

**Jerod Santo:** Right.

**Gerhard Lazu:** And the origin - you're right, it's in a single region. It's in Ashburn, Virginia, which is the Fly origin.

**Jerod Santo:** Don't tell everybody. They're gonna find out.

**Gerhard Lazu:** Right... We can edit that part out.

**Adam Stacoviak:** It's in \*gibberish\*.

**Gerhard Lazu:** It's not like -- this is everywhere. This has been versioned in our repository for at least six months, maybe even more. So yeah.

**Jerod Santo:** Now you're telling them way too much.

**Gerhard Lazu:** Okay. Alright. Alright. Because people can't read.

**Adam Stacoviak:** TMI.

**Gerhard Lazu:** Okay, so Fly will do the same thing. And the problem that we're getting here is the caching, right? The caching doesn't seem to be working as we would expect it to on Fastly. I think this is basically the heart of the problem. We are proving - we're using an external service - that the caching doesn't seem to work the way it should. We get a lot of misses, which means that there is a lot of like it enters through the Fastly network, it has to go to the origin... And the Fastly network from Hyperping - again, this is the perspective; the perspective is wherever Hyperping probes run, which is why we're using the same synthetic monitor, to monitor all three destinations, all four destinations. So we're trying to do like for like to have as few variables as possible. Anyways, if we go to the last 30 days, 263. So we can see that North America --

**Adam Stacoviak:** It looks like Europe and -- or Iran, or India, Middle East, Asia is high again.

**Gerhard Lazu:** Yeah. But it's lower than Fastly. We're looking at between 300 and 400 milliseconds, not 600 to 700, or 500 to 700. So the average response time across all the probes when we go directly to the app, and basically we're going through the Fly network, it's 263 milliseconds. That is the average response time. So putting a CDN makes our app slower. That's what I'm trying to -- that's like the bombshell. Putting a CDN makes our app slower.

**Adam Stacoviak:** That is a bombshell. That's a shame. Does that mean they're using like faster switches? Is this a hardware thing or a software thing? What exactly do you think -- what's your hypothesis on what impacts this seemingly small, but relatively big in the grand scheme of things difference? 100 milliseconds or so is kind of a big deal.

**Gerhard Lazu:** Honestly, I don't think the network is as optimized as it could be.

**Jerod Santo:** \[16:05\] Well, I just wonder how many POPs they have? I mean, could Fly have more?

**Gerhard Lazu:** I don't think so. I'm pretty sure Fastly has more. Yeah. Fastly is like a CDN... Like, first and foremost.

**Jerod Santo:** Yeah. And they're a publicly-traded company... They are well deployed.

**Gerhard Lazu:** Yeah. And before this, we didn't have another CDN to compare. But now there's Bunny. Bunny.changelog.com. So let's have a look at that CDN. Average response time...

**Adam Stacoviak:** Oh, no, I'm seeing the numbers already. Gosh... This is a massacre. \[laughter\]

**Gerhard Lazu:** Like, I'm literally reading the numbers... All I did was set up some monitoring, let it run, and let's see what the numbers tell us.

**Jerod Santo:** Okay... Say the number real quick, and then we can --

**Gerhard Lazu:** 53 milliseconds in the last 24 hours...

**Adam Stacoviak:** Average.

**Gerhard Lazu:** ...average, across all the continents. Let's look at the last 30 days... 66. 66 miliseconds.

**Jerod Santo:** These are all from the same locations.

**Gerhard Lazu:** Yeah, exactly the same. Same configuration, same everything.

**Jerod Santo:** So they're smokin on the high end, on the low end... Like, in terms of the fast ones are faster, the slow ones are faster...

**Gerhard Lazu:** Europe and North America are like 20 to 50 milliseconds. Really fast. Australia, the same. Australia is about like 50 milliseconds. Asia is a little bit slower, 60 milliseconds... Middle East and South America is 120 milliseconds.

**Jerod Santo:** Okay. Do these numbers give you pause, Gerhard? Do you know what I mean by that? Did you stop and think "Can this be right?" Because this is a massacre, and so then I turn to like "Am I benchmarking wrong?"

**Gerhard Lazu:** I did. So I checked, and I would really like to present these numbers to others, and I'd like to basically find what I'm doing wrong. Like, we have been at this for years; literally years. This is another data point.

**Jerod Santo:** And we're not complete idiots.

**Gerhard Lazu:** Exactly. So I was thinking, "How much of our requests are cached, versus not?" So if I look at Fastly -- we're looking at Honeycomb now. We're looking at all the logs as events that come from Fastly. We're looking at the homepage, because that's the only one that the probes are going to. So they're going only to our homepage. They're not going to feeds, they're not going to any -- like, it's just the homepage.

So we're looking at the homepage, and we're seeing that in the last day, the last 24 hours, we had just about the same amount of misses as we had hits. What that means is that our miss ratio is 50% today. So half of the requests do not get served from Fastly. Fastly is just in between; we still have to go to Fly, and it has to come back. So of course, it's going to be slower.

**Jerod Santo:** Right, because it has to go through Fly. It's going to add Fly's time on top of its time.

**Gerhard Lazu:** Yeah, exactly.

**Jerod Santo:** Roughly.

**Gerhard Lazu:** I was looking at this other dashboard, which is Bunny... You can see the top right... The cache hit rate is 99.89%.

**Jerod Santo:** And that's with the exact same headers and everything that we're sending back...

**Gerhard Lazu:** Everything. It's exactly the same configuration.

**Jerod Santo:** Everything is the same. It's not like we've configured this differently. Do you do any config on the sucker, or...?

**Gerhard Lazu:** All I did - serve stale. That was it. Basically, serve from CDN, and go in the background and go and do fetches. That's it.

**Jerod Santo:** This episode brought to you by Bunny.net.

**Gerhard Lazu:** \[laughs\]

**Adam Stacoviak:** Gosh...

**Jerod Santo:** Sorry, I had to say it.

**Gerhard Lazu:** I paid for it. I'm paying for Bunny. This is running on my account... So yeah, not sponsored.

**Adam Stacoviak:** Well, somebody at Bunny is pretty happy right now.

**Jerod Santo:** Thank you, Gerhard.

**Gerhard Lazu:** Yeah, it cost me a dollar for the last month... \[laughs\] Gerhard.io is also on that same CDN. So yeah, when I've seen this \[unintelligible 00:19:49.21\] Thank you. You're a genius.

**Adam Stacoviak:** So where's Cloudflare in this mix?

**Gerhard Lazu:** \[19:56\] Exactly. So let's move on, because I think we gave Bunny enough time... I think we should talk to them if they want more.

**Jerod Santo:** Yeah.

**Gerhard Lazu:** So there is an epic - and I say epic - issue. It's 486. And this is a public one, it's in our GitHub repository, and you can see a bunch of things there. So I did screenshots, I did a lot of details. Not what we discussed today, because I didn't have the data. My last comment was February 25th. But I captured a lot of details.

So where is Cloudflare? CloudFlare - we need the enterprise account to be able to set the header override. Sorry, the host header overwrite. Without that, we get infinite redirects; Fly redirects back to Cloudflare, Cloudflare goes to Fly, so we get like an infinite loop. So to be able to try Cloudflare, to compare CloudFlare, to Fastly and Bunny, we need an enterprise account. So Adam, what are your thoughts there?

**Adam Stacoviak:** I am working on it... So hard. So hard. Literally worked on it this morning prior to this show, worked on it last week, worked on it two weeks ago... We have a budding relationship there, but that was not given to us yet to give this comparison, which is super-unfortunate, because I would have loved to have had those average numbers in this mix. Because it would be nice to know how truly these large behemoths compare to what was thought of as potentially as a joke by name, Bunny. Bunny is funny, and fast.

**Jerod Santo:** No joke.

**Adam Stacoviak:** You could use that tagline if you like it, Bunny. Bunny is funny, and fast. Yeah, I wish we had the enterprise account too make this comparison, because obviously... I guess within an hour you hit a roadblock, of Hitch, to build our own CDN... Ultimately, my desire would not be to build our own software. I think we're not in the business of making software necessarily, although I think it makes sense when it makes sense... But as a media company, we're in the position to promote those who are trying to innovate. We're promoting the innovators. And in some cases, help them innovate by feedback loops and partnerships and usage like this. That's where I think we really fit in the mold of the grand scheme of developer tooling. So my desire is really not to build a CDN.

**Gerhard Lazu:** Yeah. I know.

**Adam Stacoviak:** I would like to use the best CDN, and promote that phenomenal CDN, because that's what we do. That's our main thing. Our main thing is delivering a singular object across the globe, as fast as absolutely possible. That's the name of the game.

**Gerhard Lazu:** So building a CDN - again, it was a joke. We had a bit of fun. We weren't serious about it. I wasn't serious about it.

**Jerod Santo:** I was a little bit serious about it.

**Gerhard Lazu:** Well, we can do it, but there are other options. In the heat of the moment, you continue the joke... But seriously - I mean, Adam is super-adult about this, and he's on point.

**Jerod Santo:** Adam is adulting.

**Gerhard Lazu:** Exactly. He's adulting.

**Adam Stacoviak:** Well, I have to be. I have to keep it straight here. Otherwise, we'll be engineers and just have fun.

**Gerhard Lazu:** Just nerds, doing nerdy things. \[laughter\]

**Jerod Santo:** I like the idea of having like this 20-line Varnish config that we deploy around the world, and it's like "Look at our CDN, guys." It's so simple, and it can do exactly what we want it to do, and nothing more. But I understand that that's a pipe dream, because that Varnish config will be slightly longer than 20 lines, and we'd run into all sorts of issues that we end up sinking all kinds of time into.

**Gerhard Lazu:** And then we need to become Varnish experts.

**Jerod Santo:** I'm a nerd, but I'm an old nerd. I've made the mistakes. I was a little bit serious... I was hoping you would get further with it, but...

**Gerhard Lazu:** Yeah. I mean, we still can. That's why I didn't want to spend too much time on it; I timeboxed it. We talk about it, and we figure out "Do we want to invest a bit more time?" And that's fine. That's not a problem. We give it another hour or two and see how far we can get. I mean, it's not an insurmountable problem... It's just one that maybe want to sidestep. And I was excited about Adam's proposal to try Cloudflare, and I had looked at it. So we just basically keep picking at this problem from different perspectives... And the solution which is simplest, and it means that we have the least amount of work to do - that's what we would like to pick, please. Because we are not in the business of building CDNs, you know?

**Jerod Santo:** \[24:15\] In the meantime, by the way, I'm kind of in a holding pattern, because I have big things in the works that I would like to roll out, but a lot of them - specifically, I'm working on custom feeds - are dependent upon CDN changes... And so I don't want to go make CDN changes inside of Fastly, and then have to port those over to somewhere else... Or our custom CDN, as I was thinking about how you might roll something out... So kind of blocked in that regard. I have other stuff I can work on, so it's not like block-block... But I would love to have our CDN figured out here sooner rather than later.

**Gerhard Lazu:** Got it.

**Adam Stacoviak:** So what is it good next step then, given that we want to solve this CDN problem? To me, the good next step is we have to compare Cloudflare. We have to truly give it a try to get the synthetics done right, and feel good about that. And I think maybe as a group here, are we pursuing the fastest possible CDN? Is that the true benchmark? Is that what we want? Ultimately, we want speed, but is that - I guess, is 150 milliseconds down to 26 milliseconds in the North American region, just as an example... Is that a big enough gap to pursue whoever gets to sub 50 milliseconds in North America? Is that the goal for us?

**Jerod Santo:** I would say speed is obviously one of a handful of factors that we would take into consideration. And it's probably near the top of the list... I mean, because when you want a CDN, you kind of want a fast CDN. Not even kind of, but you do.

There are other things, like how hard is it to hold, for instance? Because that's important. What does it cost? Do they have other offerings that are compelling? Like, there's all kinds of things -- do they unlock stuff that we couldn't previously do, or that we might want to do? Are there partnership opportunities? Obviously, with our business, that's a huge aspect of it.

And so I think there's not just a singular variable, and so I don't think we're just gonna say "Well, Bunny is the fastest CDN, so therefore we're going to use it", but it's certainly a high watermark, and something that we wouldn't take lightly.

I think slow is a problem... Right? There's a fast enough, but then there's also not fast enough. And at a certain point, we need to be fast enough.

Shipping mp3 is around the world doesn't need to be the fastest thing in the world, because people aren't waiting on them. Their apps are downloading them, generally speaking. Now, if you're on a website, listening, the faster you can get to whatever that JavaScript event is play through \[unintelligible 00:26:45.24\] event in which it can continue to play the rest of the thing, so it's downloaded enough to start - you want that to be as fast as it can. But honestly, that's probably like 1% of our listens.

So the mp3 shipping needs to be fast, and we don't want anybody to be looking at their app and like watching it download 7%, 8%, 9%. That's not good. But that does not have to be the only thing that matters. Of course, we want our website to be as fast as possible, because that does matter.

**Break**: \[00:27:20.28

**Gerhard Lazu:** We could, very smoothly and gently, transition about Neon.tech Postgres.

**Jerod Santo:** Please smoothly and gently transition us.

**Gerhard Lazu:** So I would like to start by giving a shout-out to Brendan Stevens from Neon.tech support. He spent I think at least two hours, maybe close to three; we were pairing on a very specific issue, which has to do with how to configure SSL certificates when connecting CA certs specifically in Phoenix, when connecting to Neon.tech Postgres. A couple of things there... The documentation was almost correct, but not quite, so we went through a few things there. This is issue -- I think this was 492. So this is the one that we covered at length in the last episode, but I added a couple of more things from this pairing session going through that last bit.

We needed to do this so that we verify peers via SSL options. Basically, we check that the endpoint that we're connecting to has a valid SSL certificate or TLS certificate. So that's what this was about. It was fun, so thank you, Brendan. Funny thing - we used to work at Pivotal/VMware. Never met, but we met in this context, so that was fun.

**Adam Stacoviak:** That's pretty cool, man.

**Gerhard Lazu:** That was pretty cool. And Stephen Barry. So if you hear your name, Stephen Barry, your name came up. He was also in the support org at Pivotal/VMware, doing RabbitMQ support. And I think Stephen was Greenplum, I think... Anyways, that was a good session. So pairing felt very natural. We had a good session, and we figured it out, so big shout-out to Brandon. And he taught me a few things, interesting things about Postgres, and extensions... So there's more that we can use to dig into.

A cool thing that he mentioned is pghero. I haven't heard about pghero, but it looked really interesting. So one of the things that we improved for this Kaizen - we deployed pghero, we connected it to Neon.tech Postgres, and now we can have insights. This was pull request 507. We deployed it on Fly, and it's available on our private network, so you can't access it. And if you can, let us know, so we can fix it. But no, you definitely can't access it. \[laughter\] So did you have a chance to play with it, Jerod?

**Jerod Santo:** I did. I'm running it right now, in a browser tab.

**Gerhard Lazu:** Okay. What do you think?

**Jerod Santo:** Very cool. It's showing me some duplicate indexes that we have, so things we can improve on... Overall, very green, not very much red, so I'm assuming that our PG is pretty well managed and handled... I haven't clicked through all the tabs. So pghero provides an overview of your database, and some best practice advice, that kind of stuff, as well as like checks on what's healthy, and then there's all kinds of tabs... Queries, space connections, live queries, maintenance etc. But I haven't dug into those yet. I just got it running and read the homepage. So tell me more.

**Gerhard Lazu:** Well, this was mentioned as something that we can use to basically get a dashboard into Postgres. And anyone can, by the way. It gives you a couple of things; if you haven't spent years and years tuning or learning Postgres, this is a quick way of, at a glance, seeing what is green, what is orange, what needs your attention. And yeah, I like it. I just clicked around, everything seemed very interesting... So if we do suspect any issues with Postgres, I think this would be the first place to start.

Apart from the two orange things, which is 11 duplicate indexes, we would that maybe to -- I mean, it says here "Indexes exist, but they aren't needed; remove them for faster writes." That's why we would do that. And the other one was slow queries; we have to slow queries. What does it mean? It means queries that take more than 20 milliseconds. We have one that the average time is 62 milliseconds, and we have 29,000 almost. 29,000 times this was executed. And the other one was 29 milliseconds. So we have two slow queries, but we're talking milliseconds.

**Jerod Santo:** \[34:23\] Right.

**Gerhard Lazu:** Maybe we should dig into those. I don't know. But interesting.

**Jerod Santo:** Yeah, I actually rewrote that first slow query as a part of something else that I was doing. It's not out there yet, but that one's not going to exist.

**Gerhard Lazu:** Okay.

**Jerod Santo:** And that only runs in background jobs anyways, but not in page requests. The second one is loading episodes by download count... And I think it's loading a lot of them, and I'm thinking that is either our -- it's tough, because this doesn't tie it back to like what page has been requested, or anything like that. That's either going to be our episode popularity page, which is public, or it could be a statistic in page that's inside our admin, that shows downloads across multiple podcasts... In which case it's way less important. And the fact that it only has 6300 calls, versus the other one, which I think runs in the background, and has 4x that, makes me think that's probably an admin page, so maybe not even worth addressing... But cool to know, and definitely, I'll go over those duplicate indexes for sure, because I'm a clean freak, you know?

**Gerhard Lazu:** Yeah. And seeing what else is going on here... So we know the queries that run, do expect those to -- again, it gives you a good view. The space that's being used by various things, what is unused... Things like that. The connections... We're saying that we suspect connections. I'm not sure whether we will be able to see - and I'm clicking on that; it's taking awhile to load. Maybe we'll just see what the connections are doing. But if we suspect some connections that are terminating prematurely, or hanging, or anything like that, maybe this can help. I don't know.

**Adam Stacoviak:** What would it take for these queries to tie back to like an error trace kind of thing, where it ties back to a page? Is that a config in this? Do you think it's an option?

**Gerhard Lazu:** I haven't looked, to be honest. I'm not sure.

**Jerod Santo:** I think as a human.

**Gerhard Lazu:** As a human.

**Jerod Santo:** I think that a human would have to do that. And I know nothing about pghero, so we could be talking completely out of thin air here, but I just don't see how it being a general Postgres diagnostics tool would have hooks back into anything beyond that, that silo.

**Adam Stacoviak:** I see. I suppose when you call Postgres, you're not saying "Here, here's the page I'm calling from, or the URL structure I'm calling from." It's just simply a database call, right?

**Gerhard Lazu:** Yeah.

**Jerod Santo:** Right. And this tool is basically talking directly to Postgres, and it's using a bunch of Postgres' queries and tooling inside of it, and exposing them via a web interface for you. It's kind of just -- you can get all this stuff with SQL queries, basically.

**Adam Stacoviak:** Is this like an open source tool that you could just use in any instance, or is this like a neon thing?

**Gerhard Lazu:** No, no. Pghero is open source; it's coming from - I think Spotify, or Shopify... I sometimes get them confused.

**Adam Stacoviak:** Me too.

**Gerhard Lazu:** Okay, I'm loading the page up. Pghero. So his GitHub username is @ankane. Andrew Kane. He's apparently the one that made the last commit, and I'm not sure whether he's the one that has the most commits... Actually, contributors - yes, he's first, which means...

**Jerod Santo:** He is the owner.

**Gerhard Lazu:** There we go. So a performance dashboard for Postgres, see it in action, and it's battle-tested at Instacart.

**Jerod Santo:** Okay. I've seen a handful of these Instacart open source projects that aren't owned by Instacart proper, but they all have that little "Battle-tested by Instacart" thing on them. And so I'm guessing he was allowed to create this as part of his work, and open source it under his own name, which is pretty cool if that's what they're doing.

**Adam Stacoviak:** Very cool.

**Jerod Santo:** Yeah.

**Gerhard Lazu:** Yeah, big thanks to Craig Kerstiens at Heroku for the initial queries and boots watch for the theme. So credits. So this project seems to have some history. Love this. "Everyone is encouraged to help improve this project." Oh, yes. Oh, yes. Here are a few ways to --

**Jerod Santo:** Get in there, Gerhardt.

**Gerhard Lazu:** That's very cool. Yeah, we can kaizen it as well... If we don't have enough kaizening to do on our end. \[laughs\] Cool.

**Adam Stacoviak:** MIT-licensed as well. Sounds good. Yeah.

**Gerhard Lazu:** Alright. So ready to move to the second one? Or do we still want to pghero it?

**Adam Stacoviak:** Let's do it. Move on.

**Gerhard Lazu:** \[38:16\] Cool. So one of the things that I was very excited about when we transitioned to Neon, Neon Postgres, is the ability to create branches, database branches, where we can try things out. I think that's a killer feature. There's nothing to explore, there's nothing to import... You just create a branch and off you go. So pull request 508: "Enable changelog.com devs to create prod db forks with a single command." Now, that sounds very royal. It's just Jerod, let's be honest. \[laughs\]

**Jerod Santo:** It is me. I like how you royaled me.

**Gerhard Lazu:** Yeah. So what do we think about that? What do we think about that as an idea?

**Jerod Santo:** I love the idea. Would love to see it working with a single command. We merged this PR minutes before recording.

**Gerhard Lazu:** Right. So no time to test it.

**Jerod Santo:** So it's live, baby... I don't know. It looked pretty innocuous. I went through the files change and there wasn't much that looked like it was any sort of danger... So I went ahead and just merged that sucker. And I do have my WireGuard all set up, I have Dagger 0.10.3 installed, as you requested, Gerhard.

**Gerhard Lazu:** That's amazing. Okay.

**Jerod Santo:** I did all the things, you know?

**Gerhard Lazu:** So you prepared. Yay...!

**Jerod Santo:** I'm ready for this to rock my world. I know last time you surprised me, and I immediately started asking for more, and you're like "Please, please continue to be happy about this surprise." And so I felt bad, you know? And I want to really embrace what you've done for me here.

**Gerhard Lazu:** Cool.

**Jerod Santo:** So let's do it.

**Gerhard Lazu:** So in a nutshell, this builds on a recently-released Dagger, I'd say functionality, but it's almost like this is the third generation of Dagger... Which enables anyone to write functions, and then reuse those functions. So use each other's functions. You can think of it like the GitHub Marketplace, or Docker Hub, but this is for functions that you could use in your pipelines and locally.

**Jerod Santo:** So more like npm...

**Gerhard Lazu:** In some ways, yes. In some ways, yes. But what's really cool about this is that, for example, I wrote a function that's called dbbranch, and Jerod is now going to run it for the first time. The only thing he did - he just installed the prerequisites. There is only two. Really just one CLI, the Dagger CLI for us... Because I already configured an engine, a Dagger engine, which is running on Fly, that we are connecting to, again, privately. This is not exposed publicly, so it doesn't need to run Docker or any other container runtime, which is required for the engine. That's where all the operations run. So there's a Changelog directory in the Changelog repository. I'm assuming you're there...

**Jerod Santo:** Wait a second, there's a Changelog directory in the Changelog repository?

**Gerhard Lazu:** That's right. Changelogging Changelog.

**Jerod Santo:** This doesn't get me excited anymore, Gerhard. I don't know about this.

**Gerhard Lazu:** It's Changelog all the way down.

**Jerod Santo:** Oh, my goodness.

**Gerhard Lazu:** So it is a bit Meta. So the idea with this is that we will put any Changelog-related functions in this directory. The first one is db fork. It doesn't matter how that's implemented, it's there. The next one, maybe, I was thinking it could be fresh data, if you need it. So you want to pull fresh data in your local Postgres instance, and I could add it, but let's see first how this works. The other idea, because you have dagger call - I was playing with this; again, this is a joke - is booty. \[laughs\]

**Jerod Santo:** Excuse me?

**Adam Stacoviak:** Oh, my gosh...

**Gerhard Lazu:** Dagger call booty. \[laughter\] If you need to edit it, it's okay. But I thought it was funny.

**Jerod Santo:** It is funny.

**Gerhard Lazu:** I don't know what it will do, but it was too good an opportunity not to make the joke.

**Jerod Santo:** Let's just assume that you're referencing treasure, like a Pirate's Booty... And that's what you're calling for. Okay.

**Gerhard Lazu:** Sounds good to me.

**Jerod Santo:** That's rated G.

**Gerhard Lazu:** You make it safe. \[laughter\]

**Adam Stacoviak:** I'm done with both \[unintelligible 00:42:07.22\]

**Gerhard Lazu:** \[42:11\] Alright. So back to dbfork, okay? So dbbranch. So you're in that directory, and you have WireGuard running so that you can connect to the engine, and there is an envrc, which by the way is not hidden; you can just source it. All it does is it basically sets an environment variable which tells it "Hey, the engine is running at this IP address", and because you have WireGuard running, everything works.

So the next thing that you could do is use netcat to check that you can connect to that port. It's a TCP port, and this is using WireGuard, and it's using that private IP address. Sorry, private hostname.

**Jerod Santo:** Okay. So I'm in the directory, and now I'm going to source envrc...

**Gerhard Lazu:** Yes.

**Jerod Santo:** ...and I'm going to run nc -- I haven't run netcat for years. Tell me the command.

**Gerhard Lazu:** nc, and then there's a dash, v for verbose, z for I can't remember what, and capital G, which is a wait flag. And then you do 1; so you want it to timeout in one second... And then you give the host name, which is dagger-engine-2024-03-28. It's yesterday's date, right? It's not difficult.

**Jerod Santo:** Okay. Got it.

**Gerhard Lazu:** Dot internal. This is a convention.

**Jerod Santo:** Port 8080.

**Gerhard Lazu:** Port 8080. And see if it works.

**Jerod Santo:** Missing host and port. So I'm not doing the command correctly. I put them as the same thing; like a -p, or something?

**Gerhard Lazu:** So I'm just going to zoom in. I'm still screen sharing. You can see it right there. By the way, this is an pull request as well.

**Jerod Santo:** So they wanted me to -- okay, succeeded.

**Gerhard Lazu:** Nice. That's perfect. So that basically confirms that you're able to connect to the engine. Perfect. If you run dagger version locally, you should be able to see 0.10.3. I want to confirm that's the case.

**Jerod Santo:** That's correct.

**Gerhard Lazu:** Nice. So the next thing is to run dagger functions. Dagger functions is a command that shows you all the functions which are available in that repository, in that path.

**Jerod Santo:** Dagger functions. Initializing.

**Gerhard Lazu:** Nice. So this is going to set up the connection to the engine, it's going to upload all the code, and the engine will do the work... So very little runs locally.

**Jerod Santo:** Alright, dbbranch is the only one listed, and the description is "create a dbbranch on the neon.tech and return the connection string."

**Gerhard Lazu:** That's it. Cool.

**Jerod Santo:** Alright.

**Gerhard Lazu:** So the next step is to configure a Neon API key environment variable, because that's what's needed to be able to talk to Neon.

**Jerod Santo:** Okay. Do I have one of those? I probably should. I've been up in there.

**Gerhard Lazu:** You just log in, go to your account... I'm going to do the same thing now. Neon.tech, login, then continue with Google... I haven't logged in, so let me go through the login now... Okay, I'm there. And you click on your username, you go to - I think it's Account Settings, and then you go API Keys. There you go.

**Jerod Santo:** Account Settings, API Keys, Create New API Key...

**Gerhard Lazu:** That's the one.

**Jerod Santo:** Dagger branch. Okay, copied.

**Gerhard Lazu:** Nice. Now, if you go back and export, NEON\_API\_KEY, all caps, and then the value of that key that you copied.

**Jerod Santo:** Done.

**Gerhard Lazu:** Cool.

**Jerod Santo:** Rock my world, Gerhard. Rock my world.

**Gerhard Lazu:** Dagger will.

**Adam Stacoviak:** Rock it.

**Gerhard Lazu:** Dagger will rock your world. Dagger call \[unintelligible 00:45:19.03\]

**Jerod Santo:** Dagger call booty... No, I'm sorry.

**Gerhard Lazu:** Not yet. We're still working on that, remember? \[laughter\] \[unintelligible 00:45:25.20\] and then you give it a single flag, which --neon-key...

**Jerod Santo:** Okay...

**Gerhard Lazu:** And the value is env: and the name of the environment variable for the Neon API key.

**Jerod Santo:** Alright.

**Gerhard Lazu:** Cool.

**Jerod Santo:** I think I've typed it correctly. I am now executing. It's connecting, it's initializing.

**Gerhard Lazu:** Nice.

**Jerod Santo:** Changelog. Oh, is it done? "Before starting the app, run the following in order to --"

**Gerhard Lazu:** That's it. It's done.

**Jerod Santo:** It's done? That was fast. So this made a snapshot -- or it's made a new branch on Neon.

**Gerhard Lazu:** Exactly.

**Jerod Santo:** This is using like the Neon API to do that.

**Gerhard Lazu:** \[46:02\] So now you copy those values, the exports, paste them in your terminal, go a level up, and then boot the app. Booty the app. \[laughs\]

**Jerod Santo:** Oh, my app's already booted, though... So I'll come back and -- so this will now connect my app to that snapshot.

**Gerhard Lazu:** That's exactly what it will do, yes. I'll believe it when I see it.

**Adam Stacoviak:** Is this the default way for all neon, or is this the way that we had to do it for our app because of circumstances?

**Gerhard Lazu:** No, I mean, all of Neon. Basically, you create a branch, you get a connection string, and you connect to that branch. And that branch is a fork of your primary branch, and that's your production in our case... And in everyone's case. The primary one that you don't want to mess up. And then you work on your fork, and when you're happy, you basically delete the fork, and then merge the code, do whatever you have to do, push it, and then it will use the main branch.

**Adam Stacoviak:** If you do like schema changes... How does that work?

**Gerhard Lazu:** As far as I know, everything happens on the fork. It will not modify the main one. So the assumption is that you will have some code, maybe run the migration, that when the app boots - by the way, that's our case - it will make the change on the main branch.

**Jerod Santo:** Well, I don't want to pee in your pool here, Gerhard, but it didn't work.

**Gerhard Lazu:** Okay... What didn't work? And you can't, because we're not next door. \[laughter\] But I like the expression.

**Adam Stacoviak:** The proverbial pool.

**Jerod Santo:** Well, because you were using the Boy Scout rule, and while you were doing this work, you also upgraded all of our dependencies... And so I pulled the code down, and I don't have the correct Node.js installed. So now I have to upgrade my Node.js.

**Gerhard Lazu:** Oh, I see. Yes, yes.

**Jerod Santo:** So it's going to work, but it's just gonna --

**Gerhard Lazu:** I'm forcing you to stay up to date. I'm terrible...

**Jerod Santo:** You're just gonna have to wait a little bit longer, I guess...

**Gerhard Lazu:** I'm terrible at keeping all those dependencies updated. I'll stop doing that. That's okay. \[laughs\]

**Jerod Santo:** No, I like it. It's just not good for coding together.

**Gerhard Lazu:** I know. The Changelog.com development team does not agree. I will comply. \[laughs\]

**Jerod Santo:** Okay, the app is now booting.

**Gerhard Lazu:** Nice.

**Jerod Santo:** And I am now going to load the homepage...

**Gerhard Lazu:** Sweet.

**Jerod Santo:** And I'm going to expect to see today's episode... No. The most recent episode was in December of '23. So I'm still on old data. Maybe my app isn't configured to use the connection string, or something, to the snapshot?

**Adam Stacoviak:** Did you do the copy-paste of the --

**Gerhard Lazu:** Yeah, you need to do the copy-paste.

**Jerod Santo:** Oh, you know what? I did, but I did it in a different tab. I've gotta do it again.

**Adam Stacoviak:** When in doubt, copy-paste.

**Gerhard Lazu:** Exactly.

**Jerod Santo:** Yeah. And then copy-paste again.

**Gerhard Lazu:** And if it doesn't work, did you paste? \[laughter\] And if you did, try again. Copy-paste.

**Jerod Santo:** \[unintelligible 00:48:43.03\] I'm booting the app... And I'm loading the homepage, and I'm expecting to see today's episodes. If I just ship to Ship It... There it is! \[unintelligible 00:48:53.02\]

**Adam Stacoviak:** No way...!

**Gerhard Lazu:** Yes...!

**Jerod Santo:** ...just shipped today, so I've got fresh data here.

**Adam Stacoviak:** No pee in the pool.

**Gerhard Lazu:** Sweet.

**Jerod Santo:** This is a peeless pool.

**Adam Stacoviak:** Only water. No pee.

**Jerod Santo:** \[unintelligible 00:49:03.11\]

**Gerhard Lazu:** I'll have a drink to that. I'll have a drink to that... Of water. \[laughter\]

**Jerod Santo:** So that's cool...

**Adam Stacoviak:** So I guess rewinding back to my question... So when anybody integrates with Neon and they want to do this kind of integration where they want to have DB forks to give devs this superpower, basically... This is a feature of Neon, but is it only living in the API and you've got to do your own coding in your application level to enable your devs to use this feature? Because that's kind of what you did here, right? You've had to add some variables and make the application use different strings... Is this what everybody has to do?

**Gerhard Lazu:** So no... You can do it via the UI. Go in the UI, click on the branch, boom. It works. You could also use the Neon CLI to do the same thing, but for that you need Node, you need a couple of things, you have to install it... Things like that. This, the function which I added, is an interface to the Neon API. And I'm using the Neon Go SDK, which by the way is a community contribution... And I'm looking for the name. Kislerdm. So Kislerdm - he's a community member, and he's a Neon community member, and he wrote the Go SDK for Neon.

**Jerod Santo:** \[50:23\] Dmitry Kisler.

**Gerhard Lazu:** Dmitry Kisler. That's him. So thank you, Dimitri. That's basically the SDK, and in the pull request, the 508, Jerod, you can see exactly how I integrated it. I'm pulling it down... So again, it's an implementation detail. I could have used something else. I could have called, for example, the Neon CLI... But this seemed the most elegant. The idea is that the implementation doesn't matter. And to be honest, it doesn't even matter whether you use Neon. In our case, that's what we do. But if we change, for example, back to Fly Postgres, it's possible, one day... Who knows...? The idea is that this interface will not change. So you want to give simple, convenient interfaces to your developers, so that they do not worry about implementation details, which are ops, or infra. All Jerod cares is a fork for the database. And while he cares about his fresh data, which was what we discussed in last episode... And I tried to deliver.

**Adam Stacoviak:** Well, this is this shows off the relationship between ops and dev, because as "ops", your role, you care about good DX, and the way you've given good DX is not necessarily the Neon way; you've given the way you think our application should deal with this as an interface to any database provider that has forking as an option.

**Gerhard Lazu:** Exactly.

**Adam Stacoviak:** That's cool. Okay, I'm glad you highlighted that, because that's important. It just shows off the love for DX... And really, I suppose, Jerod, did that pass the test? Are you a happy dev, that your ops provided good DX?

**Jerod Santo:** Absolutely, I would say... But I don't like the folder Changelog in my Changelog.

**Gerhard Lazu:** We can call it something else. That's okay.

**Jerod Santo:** \[laughs\]

**Gerhard Lazu:** What would you like to call it?

**Jerod Santo:** I can never be 100% satisfied. It just wouldn't be me...

**Gerhard Lazu:** No, no, that's good. I mean, we are kaizening on this. It was just like my first step, so we're going to make it better.

**Jerod Santo:** Yeah, yeah. I know you're not tied to it. I just know that when you create folders, they live for years.

**Adam Stacoviak:** That's true.

**Jerod Santo:** So let's get this one. I think Ops maybe. Is it Ops? Are these ops?

**Gerhard Lazu:** Sure. We can call it Ops. We can call it Functions, we can call it whatever you want. Ops is fine.

**Jerod Santo:** Because that's the kind of functions it is; like, we're gonna put one in here called DB... What did you say it was gonna be called?

**Gerhard Lazu:** Fresh data. I was basically going off your name. You said you want fresh data, you do dagger call fresh data, boom; you get fresh data in your local Postgres.

**Jerod Santo:** Right. And that one would actually pull it into my local Postgres.

**Gerhard Lazu:** Correct, yes.

**Jerod Santo:** I probably would prefer that... But I'm happy with this.

**Gerhard Lazu:** Okay.

**Jerod Santo:** Super-happy. I just want to let you know that I'm super-happy.

**Gerhard Lazu:** That makes me very happy. You being happy makes me very happy... Which makes Adam very happy. We are all very happy.

**Jerod Santo:** Alright... Yeah, this is awesome.

**Adam Stacoviak:** I think this is -- what I like too is the, I suppose, care. Like, we're kaizening, but I think there's a level of care here from one individual on the team to another individual team. And so Gerhard, you have particular expertise and specificity when it comes to how you implement things. And you don't just get the job done, you think about the other person in the job roles, and that's what you've done here, is "Let me think about and have empathy for Jerod and the other devs who may join our team in the future to give them an elegant way to sort of like pull in fresh data", as an example. That to me is kind of cool. I like to highlight that, because we're humans making software for other humans using the software to enjoy podcast to make more software. What a many layered onion there. But that to me is kind of cool, that you've got this humanity in the process. That's a good Kaizen episode there too, just the Kaizen thought process that you care, and so therefore you put good DX in the processes, not just the work.

**Gerhard Lazu:** \[54:00\] I appreciate that. Thank you very much.

**Jerod Santo:** Let me ask you about Neon costs. If we had 10 devs doing this, and they were all branching off of that one, and they're all coding against it, aren't we paying more money than if it was running on their local Postgres'es as an org?

**Gerhard Lazu:** I haven't looked at that, to be honest.

**Jerod Santo:** Okay. That'd be my next thought, is like, if I'm paying more money out of pocket in order to do that this way, I probably would just do the fresh data into my local and not run a branch... And I get it that it scales to zero, but that's when you're not using it. And maybe I go to lunch and leave my laptop on, and my DB connection's still open. And so just that idea of like I'm paying money to use it nonstop is a bit -- it bugs me when I have so much raw horsepower to sit here on this laptop.

**Adam Stacoviak:** Your DB connection being opened during lunch - wouldn't that go idle?

**Gerhard Lazu:** If there's no background jobs that perform any actions, yeah; if there's nothing running in the background, then I think you should be fine. But it's a good point, right? We have a lot of horsepower locally. The M1... They're beasts.

So it would make sense to gather data running locally. The question is when we do that how good are the connections of those devs? Do you want to pull all the data down? And if it's fine, then yes, we pull all the data down, and it's running locally. How often do you do this? Do you have -- local, you only have one. And if you want more than one branches, then you need to have like multiple instances of Changelog. I think, in your case, the Changelog database. In your case, I think you only work on one dev database.

**Jerod Santo:** Yeah.

**Gerhard Lazu:** You don't need multiple. So that's fine. I will -- as a follow-up... This is exactly what I was going to ask - my primary worry is that it's not fast enough. That means you do like a lot of back and forth, back and forth, so you're always paying the penalty of the database not being local.

**Jerod Santo:** And that was the main feedback that we got on my point last Kaizen, when I said I'm excited about working this way... There was a handful of people, which probably represent a much larger group of people, who were like "I would never do that, because I work on airplanes, I live in the sticks., I go offline a lot, and I want to code wherever I am... I don't want to be connected to a remote Postgres." And I was like "I totally get that." Where I'm mostly doing it, I have a fast internet connection, I'm wired in, I have gig internet, I'm not paying extra to use it... And I kind of like the idea of developing against something that feels more production speeds... So I was kind of like "I'm cool with it."

That being said, the more that I thought about it, I was like "Yeah, I probably would just want to develop against my local Postgres, generally speaking. I just want fresh data all the time." And so I think that's a good point. And it's kind of a "To each their own", you know?

**Gerhard Lazu:** I would like to emphasize an approach that was very dear to me when XP was still fun and young, and everyone used to love extreme programming. You always want to do just enough, and keep asking "Is this enough? Does this deliver on what you wanted?" So rather than going and spending a lot of time on coming up with a perfect solution, do just enough, that looks like it's just enough, and ask "Is it enough?" So with that in mind, I think what we have now - this was very simple to implement. It embraces Neon, and the whole branching model. I can see some people wanting to use it, and it was easier to implement than the other option, which has certain requirements from Postgres, it has to do checks like "Am I importing the same Postgres version?" Are you running 16.2 or 16.1? I mean, we had issues in the past, where even small minors, that had like breaking changes between them... There was like one bad indexing one which I remember; it's still somewhere in our issues. So it's a bit more complicated, because we don't control the local environment.

\[57:47\] The other option - and now I'm very glad we are discussing this - we could spin up a Postgres in the Dagger engine.

There is that option of running Postgres as a service, importing all the data... But then the question is "Well, where's the Dagger engine running?" Currently it's Fly, and you want it to be local. And to get it local, currently you need to contain the runtime. It means Podman, or Docker, or something like that. And I don't think you want that.

**Jerod Santo:** Don't do that to me.

**Gerhard Lazu:** Okay, so I won't do that to you.

**Adam Stacoviak:** You don't have Docker on your machine, Jerod?

**Jerod Santo:** I don't run Docker on my machine. I have it on my machine, but I will only power it up in desperate scenarios.

**Adam Stacoviak:** Right. So you don't have the application launched. Okay.

**Jerod Santo:** Correct.

**Adam Stacoviak:** Just trying to understand... Because I think that Podman or Docker seems to be a prerequisite for most dev environments, in some cases, shapes or forms, so that it's likely there... But "Is it running?" I suppose is the next question.

**Gerhard Lazu:** I knew this, which is why I set up that remote engine, so that Jerod could actually test this. So I knew that he doesn't have a container runtime locally, and that's fine; that's perfectly fine. So as long as you will run a local Postgres, which is the same version as the Neon one, this will be very straightforward. Or more straightforward than if we have to do checks and ensure that it's the same one; then we have to do failures, and things like that. So that's fine.

**Jerod Santo:** No need for that.

**Gerhard Lazu:** So always assume it's the same version. I will pull the data down. I know that you have a gig internet, which will make it nice and fast, even if we compress... So... Next Kaizen, that's what I'm thinking.

**Jerod Santo:** Cool.

**Gerhard Lazu:** Fresh data... Are you still happy with fresh data?

**Jerod Santo:** Or booty.

**Gerhard Lazu:** Or booty. I think fresh data. I think we'll go for fresh data. Dagger call fresh data it is. \[laughter\]

**Break**: \[59:22\]

**Gerhard Lazu:** So I'd like to spend a little bit of time talking about your 55 commits, and no pull requests, Jerod. What is lurking in those 55 commits...? \[laughter\]

**Adam Stacoviak:** Oh, my gosh...

**Gerhard Lazu:** ...that you've made since the last Kaizen?

**Jerod Santo:** We're kind of like yin and yang, you know? We're kind of like opposites the way we roll.

**Gerhard Lazu:** That's why it works so well, I think.

**Jerod Santo:** Yes. Because you document everything and create pull requests...

**Adam Stacoviak:** It's ying and yang...

**Jerod Santo:** Isn't that what I said?

**Adam Stacoviak:** No, you said yin and yang. I'm kidding, it's a Silicon Valley joke.

**Jerod Santo:** Oh. I don't watch the show.

**Adam Stacoviak:** It's a Silicon Valley joke.

**Jerod Santo:** You're asking me about my last 55 commits I did? That's a hard thing to answer...

**Gerhard Lazu:** Anything noteworthy in those 55 commits, that we want to be kaizening? I'm sure there must be like a bunch of things that are noteworthy.

**Adam Stacoviak:** There were some things I saw in there... Well, I think one thing is that you pulled out --

**Jerod Santo:** Pulled out turbolinks?

**Adam Stacoviak:** ...turbolinks, yeah.

**Jerod Santo:** That's true.

**Adam Stacoviak:** That's kind of like a big deal...

**Jerod Santo:** I suppose... So the reason for that wasn't because it wasn't working or anything like that. We are designing a new Changelog News homepage, landing page, design... And we want to be able to do a clean break from our current assets, which is our CSS and whatnot. The weird thing about turbolinks is when you are hopping back and forth between pages that have different styles, or a page that supports turbolinks and one that doesn't, is you'll often have the wrong stylesheet applied. Not often; that's not fair. But you'll sometimes have either no stylesheet applied, or the wrong one applied, based on whether the destination page supports turbolinks, or if it's navigated to directly... There's just this weird uncanny valley of page navigation. And the reason for turbolinks was merely to allow for our player to run across the site, with the idea of people reading our website like you would read a Stumble Upon style website with links and information and news. Back when we were posting a feed of news on the homepage - maybe you're listening to the podcast, maybe you're looking at the comments, you click over to this news item, you're going to read this story etc. and we want that player to persist throughout. We've since simplified our website and moved away from that model, for various reasons, which I could dive into if it's interesting... But we just don't think that we really need that anymore. And what we really want to be able to do is to navigate between different app layouts seamlessly. And in preparation for that, I just took turbolinks out. It also reduces our overall page weight, because there's a lot of JavaScript, relative to how much JavaScript we use, supporting the turbolinks-based navigations and form submissions etc.

So that was one thing I did. And that was really just in preparation for this new news page. Everything else is just house cleaning... Our Twitter embed broke at one point. I thought it was just Elon that did it. You know, changes to the X API and stuff, and so I just left it, and I'm like "Oh, great. They broke audio embeds." No, I broke audio embeds at one point, when I was upgrading our paths to the new way that Phoenix wants you to do verified routes. So I fixed that...

\[01:06:16.16\] A lot of housecleaning... Minor changes, you know, like putting our Changelog++ album art on the homepage, as if it's another podcast... Why not? That's the kind of stuff I do. As I'm just working on other stuff, I'm just constantly improving...

The big stuff that I'm doing, which also is not a pull request, but could be more of a pull request, because it's like one big feature, is the custom feeds work that I referenced earlier. And that I think will land soon, but probably just for us to use internally, and make sure it's all working right...

**Gerhard Lazu:** That's a good idea.

**Jerod Santo:** ...and cool. And then we'll roll it out as part of our Changelog++ revamp, which is pending. And that's all I've got to say about that, unless you had specific other --

**Gerhard Lazu:** No, no. I was just wondering, because I didn't look through all the 55 commits. But...

**Jerod Santo:** Right. Little things. You know, people write in, they say "Hey, it'd be cool if this would happen", or "The way you're sending--" I mean, we have the nerdiest listeners and readers. I love it. So our conversations are always very technical, and with advice. Like, the way our plain text Changelog News email rendering was sub-optimal. And so we had a few back and forths, and I realized, we're taking Markdown content, and turning it into plain text to send a plain text email, which actually munges everything and puts everything in one line. And I don't know that, because I don't read plain text email. I'm a normal nerd, not a super-nerd. I just read HTML email, like most people do. But the ones who have their plaintext email, they're like "This is all one long line." And then I've realized, I was like "I have to switch it to plain text." And then I was like "Wait, Markdown basically is plain text. Why don't I just send the markdown as plain text?" And it's gonna be much better formatted for them. And so I did that, and two people were super-stoked. So I felt good. Stuff like that...

**Gerhard Lazu:** That's very cool. That's real kaizening.

**Jerod Santo:** Just kaizening, man.

**Gerhard Lazu:** Very sweet.

**Adam Stacoviak:** Well, before we go, I do want to mention there is one other CDN to consider...

**Jerod Santo:** Oh, really?

**Adam Stacoviak:** I've had a conversation with their CEO. They are deeply integrated with Fly. In fact, they're built on top of Fly. Some would say they listen to our episode before we even recorded it and shipped it... I'm sharing it in our shared Slack as we speak... So maybe as we circle back to this never-ending, seemingly never-ending CDN saga, as you've said in our PR with a TM (we're trademarking that), is the pursuit of who is the holy grail? Who has and holds the holy grail of CDNs? So Tigris... I talked to their CEO. Really cool... Obviously, big fans of Fly, S3-compatible... They have some big ideas. Not all big ideas that we would totally embrace, but definitely big ideas for an S3-compatible object storage that is intended to be a CDN for developers.

So I would add that to your list, Gerhard, as we continue down this path. I'll keep working with our friends at Cloudflare... Which we've gotten closer, I should just say, with Cloudflare. We're now promoting their Developer Week, happening April 1st through April 5th. There's a meetup here in Austin I want to invite everybody to. I can drop a link in the show notes, April 4th. I'll be there. It's in the Austin office here in Texas, so... If you're in the area, come and say hi. There are limited seats.

So I'm obviously pulling for Cloudflare, because there's so much relationship investment there in terms of how we work... But no ink on paper, no enterprise plan in hand... So therefore, they haven't paid their deposit, basically. But they've definitely shaken the hand, let's just say, if that's the way to say it. So I'm leaning towards Cloudflare, and I'm hoping that there is no embarrassment whenever we do the testing with them as well... Because that would totally suck, basically... You know? \[laughs\] Like, build all this up, and like not really any better than Fastly performed... Or even Fly with no real CDN, just simply the Fly network... So anyways, I'll leave it there. Dig into that. Have you heard of Tigris before?

**Gerhard Lazu:** \[01:10:22.20\] I have... And I'll check it closely. I've just heard about it. I haven't looked into it, but it's on my list. So thank you for that. I'll check it out.

**Adam Stacoviak:** Yeah. I would add just to your curiosity list, not -- don't go to deep, unless you really want to.

**Gerhard Lazu:** One hour.

**Adam Stacoviak:** Yeah, whatever it takes. And hopefully next time we come around to kaizen we'll have gotten our enterprise keys from Cloudflare... Because we're using R2; we just need to move to the CDN and do a true test before we really go deep on that relationship. I feel like we need to do that... And we're missing one thing. Otherwise, that would had been this test. What a shame.

**Jerod Santo:** To be continued.

**Gerhard Lazu:** Indeed. The CDN saga. I like it. I like it. It's gonna be amazing. Whatever comes out of it is going to be amazing. I'm going to add a couple more details in discussion 499 in our GitHub repository. If anyone wants, for example, to set up some monitoring on our public endpoints to see how they perform, to look at them, to see if they spot anything interesting, different, unusual... Like, the more eyes on this, the better. But I'm going to share my results, and we'll see where we take it from here.

**Adam Stacoviak:** Discussion 499, by the way, is the one for this Kaizen 14. They don't put the 499 \[unintelligible 01:11:35.15\] of the discussion, they don't put it on the index. So when they're looking at the index, it's like "Which discussion is 499?" So that's why I clarified.

**Gerhard Lazu:** Kaizen 14. Got it.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** There's one more thing which I want to mention... And I want to say that Jerod was right.

**Jerod Santo:** I like that.

**Gerhard Lazu:** The thing which I was telling in January shipped on February 29th. Jerod was right.

**Jerod Santo:** Oh, yes...!

**Gerhard Lazu:** It shipped on February 29th.

**Jerod Santo:** It did.

**Gerhard Lazu:** It did.

**Jerod Santo:** This was your life project.

**Gerhard Lazu:** Exactly. Yes. So...

**Jerod Santo:** On your birthday. On your 10th birthday.

**Gerhard Lazu:** On my 10th birthday.

**Jerod Santo:** Not your fourth birthday. I did the math wrong. On your 10th birthday.

**Gerhard Lazu:** Exactly. On my 10th birthday it went live. The name is "Make it work."

**Jerod Santo:** "Make it or work."

**Gerhard Lazu:** And if you look for that, you may find it on Apple Podcasts... But what you should do instead is go to Video.gerhard.io. That should be the entrypoint.

**Jerod Santo:** Video.gerhard.io. It sends me to a YouTube channel...

**Gerhard Lazu:** That's it. Cool.

**Jerod Santo:** Make it work.

**Adam Stacoviak:** What exactly is this again? Give a one-minute refresher.

**Gerhard Lazu:** Yeah. So it's a new content space that I created. I was big on screen sharing, I was big on video, I was big on conversations that just go through all sorts of rabbit holes... So talking of holes - the square hole; we'll talk about that in a minute. So this is various conversations from various places, and some of it is audio-only, some of it is screen sharing... And I'm slicing and dicing it based on the format. So for example with Eric, when we talked about BuildKit in the context of Dagger and Docker, we talked about how much of BuildKit is in Dagger, how does that relationship work, what is good about BuildKit, how did he discover BuildKit, things like that. So I think we talked for maybe an hour, I think, 45 minutes... Part of it was video, and part of it was audio. And that is a format that many are familiar with. But what people are not familiar with is, for example, talks. Like, how can you do like a talk only online? For example, "The square hole" was a talk that we submitted for KubeCon, for EU, that didn't make it through the CFP stage. So we thought, "You know what? We will just go ahead and do it anyway, and just put it online exclusive, not even Rejects conf." Like KubeCon Rejects.

So that was a talk that I was very excited about. I thought it was like a very good idea in terms of how it fits... And it was a bit of Argo, it was a bit of Dagger, it was a bit of Talos... It was a combination of all of it. And it's online only. It's on YouTube, so you can go and check it out.

\[01:14:18.27\] The other one was like when I was at KubeCon, I brought my 360 camera... I bought a new one. I was thinking "You know what? Let's try how this would work."So I did some 360 recording, and we were in the booths of various companies, including Dagger' booth, and we were recording, having a conversation. We showed the 360 video... I think it's cool.

The idea is that this content space, I'm thinking of Once -- do you know once.com? The idea "Pay it once, own it forever..."

**Jerod Santo:** Right.

**Gerhard Lazu:** I'm thinking of doing something similar for this. So makeitwork.gerhard.io is just a placeholder. People that want longer-form content... It's basically the things that I go deep on, and it takes me a while to go through that. And then I condense that in maybe an hour or two... I'm thinking of publishing it there, and charging once for it, and then you get access to all the content. So it would be paid content, but it'd be more than a book or a course, because it's something that spans a long time. And again, I mentioned the project of a lifetime.

I love producing a certain type of content, that includes screen sharing, that takes a long time to produce... And I had fun doing it. And AI is helping. I mentioned that; it's really helping with a lot of things. One day, it could even edit the videos. Who knows? I don't think we're there yet, but I'm curious. It's definitely generating some great art, it's definitely doing some good summaries... A lot of heavylifting that I used to do in the past, it's helping with. And I think it's only going to get better.

**Adam Stacoviak:** Yeah, I agree. I mean, we have an AI feature inside of Riverside that does summaries of descriptions, and I don't take it verbatim, but I allow it to create my list, of sorts, so that I'm like "Okay, what are we actually talking about?" because it kind of creates the list for you, and is essentially your AI brain to remind you what the conversation was about. And I'll pull that out and recraft it in my own way, in the human way, of course... But it's definitely helping me remember. This table of contents we kind of put into podcasts that help write the description, voice the description, plan for the show, the publishing of it and whatnot... So I can definitely see that. And that's cool.

Even - I'm not sure if this is AI from Apple, but I'm still... I mean, sometimes I'll even come to tears for the videos they put together of "September last year", kind of thing. Whatever kind of tale they give you for your videos on the iPhone. And I'm like "Wow... That had pretty decent music. It showed all the cool videos and clips and photos of me and my family", and here I am, a dad in tears, essentially. That's -- I didn't edit that. They did that. That's amazing. So I imagine at some point it gets better and better. And then you just rely and trust, really, the edit; the editor. The AI editor.

**Gerhard Lazu:** Well, you still want to review it, for sure... But at least it doesn't take 10 hours to get there. You get there like in an hour.

**Adam Stacoviak:** \[01:17:16.23\] There's a certain level of trust that comes there though, right? You just preview it, you're not actually in the details, "No, no, no, the cut is here, not there." You're more like "Okay, that's good taste." Move along.

**Gerhard Lazu:** Yeah.

**Adam Stacoviak:** Cool.

**Gerhard Lazu:** And I had to use this because of Kubernetes. I had to use this. Kubernetes, sorry. Pod, right? You have to use Pod. So there's like a pod.gerhard.io. And that's where just like the audio-only portions are. But some of this content doesn't fit audio. A lot of this content doesn't fit the audio format... Because screen-sharing is very specific, and you need to see things, and there's like a certain level of detail that you would miss in an audio-only conversation... So yeah. Every conversation which I do needs to have screen sharing. Because without it, I feel a lot of detail is lost. My perspective.

But anyways, that was it. So Jerod was right, it was 29th of February. That's when it went live. And we're exactly a month later, 29th of March...

**Jerod Santo:** Right on schedule.

**Gerhard Lazu:** There is a bunch of KubeCon conversations that will go live... And including the whole pavilion, the whole solutions showcase, the whole 10-minute walkthrough through like the entire thing... So it's video-only. Audio is just noise. If you were to listen to it, it's just lots and lots of noise. It was a noisy floor. But... Yeah, it was fun. KubeCon was amazing, by the way. This was my favorite one. I haven't been to a more immersive KubeCon. There were so many people. So many great conversations. My voice left me twice. Like, in the span of three days. It was like full-on, morning till evening... And then parties... Luckily, I didn't stay up too late. I went like into my nice, quiet hotel, and just like had a bit of downtime. That was good.

But it felt very personal. This KubeCon felt very personal, in the sense that you weren't talking to vendors, you were talking to friends. There were 16,000 friends. Can you imagine?

**Adam Stacoviak:** That's so many. Wow.

**Gerhard Lazu:** 16,000. It was an amazing conference. So yeah.

**Adam Stacoviak:** That's awesome.

**Gerhard Lazu:** It was only a week ago. I literally came back one week ago. So yeah, it was a busy month.

**Jerod Santo:** Cool stuff. We'll link up to make it work. I don't know, video.gerhard? Pod.gerhard? Just send us all the links, Gerhard, and we'll put them in there for folks, so they can follow along with your life project.

**Gerhard Lazu:** Sounds good. Do you want to talk about the next Kaizen? Or is this the bombshell that you want to end on? I'm thinking Jeremy Clarkson. I still love the man. The artist.

**Jerod Santo:** I don't know Jeremy Clarkson.

**Gerhard Lazu:** Jeremy Clarkson, from Top Gear, Grand Tour?

**Jerod Santo:** Kelly Clarkson. No, I'm not a Top Gear guy. You know I'm not a car guy, Gerhard.

**Gerhard Lazu:** Yeah. I am. So yeah... \[laughter\] Is Adam the car guy?

**Adam Stacoviak:** I was, when I was younger, and I did watch Top Gear... But there were just such expensive cars I was just like "Forget it. I will never be able to do this." I grew up absolutely poor, in a small town in Pennsylvania. My hope was very low.

**Gerhard Lazu:** I just loved the silliness. I mean, you can be silly in any car. And the fun of it.

**Adam Stacoviak:** Sure.

**Gerhard Lazu:** They had some good shows. Those were really like bangers, as they call them. I think those were like the most funny ones. And in some countries you would maybe not even visit, because they're dangerous. Anyways, it was a funny show. So yeah, that's where the bombshell comes on. He always ends his shows on a bombshell. And I'm not Jeremy Clarkson. Far from it.

**Adam Stacoviak:** What exactly would you describe as a bombshell?

**Gerhard Lazu:** A bombshell is something that is - like you want to know more about. Someone's like "Hey, you've said this thing? No, no, you can't stop here. Like, keep going." It's almost like --

**Jerod Santo:** Like cliffhanger?

**Gerhard Lazu:** Yeah, cliffhangers. Yeah, I think so. Yeah, cliffhanger. Something unexpected, something like "Oh, interesting. Okay..." But we can end there as well.

**Jerod Santo:** Well, I think we ended on a bombshell, then.

**Gerhard Lazu:** We can end on a bombshell. Let's go make it work. \[laughs\]

**Jerod Santo:** There you go.

**Gerhard Lazu:** Cool.

**Jerod Santo:** Alright. Happy kaizen, guys...

**Gerhard Lazu:** Kaizen.

**Adam Stacoviak:** Yes.

**Gerhard Lazu:** See you next time.

**Jerod Santo:** Kaizen.

**Adam Stacoviak:** Kaizen!
