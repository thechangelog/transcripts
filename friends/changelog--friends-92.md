**Jerod Santo:** Well, today is a very good day, because we are kaizening. And Gerhard is here, and Adam is here, and I am here. Hey, guys.

**Gerhard Lazu:** Hey, hey. It's good to be back.

**Adam Stacoviak:** We almost weren't all here.

**Jerod Santo:** But we're all here now.

**Adam Stacoviak:** It's happened. Rain, and thunder, and lightning...

**Jerod Santo:** Internet outages...

**Gerhard Lazu:** So what happened?

**Jerod Santo:** To my internet?

**Gerhard Lazu:** Yeah, to your internet.

**Jerod Santo:** I don't know, it just went down, and stayed down, about 12:30 on Monday, maybe 1:30... And I called them and told them my internet was down, and then they said "We'll fix it", and then they didn't fix it. And then they did fix it. But it's a little bit too late for us. We actually were going to record at 9am, I think, on Tuesday, and it came back up around 11am on Tuesday. So not even a 24-hour outage yet. Still, way too long. Way too long for my liking. And it was just my house. I don't know what happened. They said they had to rebuild the modem, which was apparently a remote rebuild... I think they just flashed it with a new something or another...

**Gerhard Lazu:** You only have one, let me guess. You only have one internet.

**Jerod Santo:** This is correct. Well, I do have my phone. I told you guys I could just tether to my phone and play hot -- hot and loose? No. Not a saying.

**Adam Stacoviak:** Loose and fast.

**Jerod Santo:** Fast and loose. Thank you.

**Adam Stacoviak:** I don't know.

**Jerod Santo:** I was thinking fly close to the sun, and then I was thinking fast and loose, and I said hot and loose. But Gerhard, you said you had like a multimedia presentation, I'm going to have to have really good internet, and so we just called it off.

**Adam Stacoviak:** Can't \[unintelligible 00:04:32.11\]

**Jerod Santo:** So now we're here, the internet's back, the rain is over... I'm assuming it's done raining there, Adam. You're all clear.

**Adam Stacoviak:** Yeah, I think so. No -- yes, we're good.

**Jerod Santo:** Okay. And Gerhard brought us some goodies. You've got a story to tell us?

**Jerod Santo:** I do, yes.

**Jerod Santo:** Tell us what you have to say.

**Gerhard Lazu:** I was thinking about this for some time, actually...

**Jerod Santo:** Wow.

**Gerhard Lazu:** And what I was thinking is when we get close to launching the pipe dream, to launching Pipely, how do I want to do this? And that's the story.

**Jerod Santo:** The story is that you were thinking about it, or that you've thought about it and you're going to tell us more?

**Gerhard Lazu:** Well, the story is that I will tell you more. A lot of stuff has happened. I decided to double down on the pipe dream, on Pipely... I decided to -- like, all my time went there. And what that means is that we have something. We have something good.

**Jerod Santo:** We have something. Is this the launch story?

**Gerhard Lazu:** Well, I think it's good. Let's just -- let me set the expectations at the right level, and let's see if Adam approves of the toy that we want to wrap for him. So that's the bar.

**Jerod Santo:** Okay. That is the bar.

**Gerhard Lazu:** Does Adam enjoy this toy that is being built in the factory, and let's see what he thinks of it.

**Adam Stacoviak:** I love toys.

**Gerhard Lazu:** Don't we all...?

**Jerod Santo:** Alright, let's get right to it. Show us the toy, Gerhard.

**Gerhard Lazu:** Alright, so I'm going to share my entire screen. That's why when I mentioned that this is a presentation style, it is a presentation style. I could even share the slides. Now, they're about 80 megabytes big.

**Jerod Santo:** Wow.

**Gerhard Lazu:** Because there are some recordings as well, right?

**Adam Stacoviak:** Some multimedia.

**Gerhard Lazu:** If something will not work live, that's okay. I already did it. It's recorded. The screen behind me will be out of sync with the things that we'll be doing, but the thing itself has been captured, so that we can tell a good story.

**Jerod Santo:** Alright.

**Gerhard Lazu:** So the thing which I would like us to do now is click around a few versions of the Changelog site, and talk about how responsive different versions of the Changelog site feels to us. And I think this is why Jerod's internet was important, so that he experienced it as close as he would normally. No tethering, nothing like that.

**Jerod Santo:** Right.

**Gerhard Lazu:** So we will start with the origin. The origin, as our listeners will know, runs on Fly. And we always capture a date when this was created. This particular origin was created in January of 2024, 12th of January, which means that the URL to go to the origin - by the way, most users will not do that. This is for the CDN to do that. It's Changelog-2024-01-12.fly.dev. And I want you to be logged out. That is important. Or just use simply a private window. Whichever is easier. We don't want any cookies, we don't want you to be logged in, because the experience will differ if you are. And this is going to be our baseline. So it's important that the reading is accurate. And this is as slow as it gets. This is if we were to hit the website; this is running in Ashburn, Virginia, and it basically comes down to your network latency to Ashburn.

**Jerod Santo:** Okay.

**Gerhard Lazu:** So let's open up the website. I'm going to open it up as well, and I'm going to click around and see how it feels. How responsive does it feel? That's what we're aiming for. Remember to be signed out. That's the important part.

**Jerod Santo:** I'm clicking around, I'm signed out. I'm in a private window.

**Gerhard Lazu:** Perfect. So how does it feel in terms of responsiveness, the website?

**Jerod Santo:** \[00:08:15.06\] Average.

**Gerhard Lazu:** Average. What about when you click on News? Do you see any delays? Anything like that?

**Jerod Santo:** I would say there's a slight delay.

**Gerhard Lazu:** It doesn't feel as snappy. Adam, what about you?

**Jerod Santo:** It feels like it's rendering. I can see it rendering.

**Adam Stacoviak:** Do images play a game into this?

**Gerhard Lazu:** Oh, yes. Absolutely.

**Adam Stacoviak:** Okay. Because that's what I'm noticing most that's laggy. The viewport kind of gets painted and then it moves around because the images catch up, and... It feels like I'm on tethered internet, basically.

**Gerhard Lazu:** Right. There you go. So imagine if Jerod had a tethered internet, how slow that would feel.

**Jerod Santo:** Oh, my gosh... Double tether.

**Gerhard Lazu:** Cool. Yeah, exactly. Something like that. Yeah. Now, the interesting thing is that even though the images do serve from the CDN, everything else around them - the JavaScript, the CSS, all of that - I don't think it does. Let me just double check that.

**Jerod Santo:** Oh, it should.

**Gerhard Lazu:** It should. Yes, actually does. So it is just a request to the website. You're right. Actually, everything, all the static assets are served from the CDN. It's just a request to the website, which makes it feel slow. And I don't think we're biased, I don't think we are imagining this... I have been looking at this for quite a while, and it all comes down to that initial request. Anything that hits the website for me takes about 360 milliseconds. And this is constant. So I'm showing here the HTTP stat output, a tool - we talked about it; we may drop a link in the show notes. And that's what it comes down to. The origin itself is slow. The further away you are from it, the slower it will get. But you in the US, I would have expected this to be snappier. So interesting that it isn't.

**Jerod Santo:** I mean, it's borderline snappy. I can feel it a little bit, but it's not bad.

**Gerhard Lazu:** Right. And I think that is because you have the Changelog.com experience. So now if you go to Changelog.com and do exactly the same stuff that you did before, Changelog.com, and you click around, how does it feel now?

**Adam Stacoviak:** Instant.

**Jerod Santo:** Yeah. I mean, it's snappy.

**Adam Stacoviak:** Versions of instant.

**Gerhard Lazu:** Almost instant. Some pages feel... I think the News is the one that you notice - that paint just takes like a little bit longer. It's not instant. It doesn't load instantly. But it's significantly better than if you were to go to the origin.

**Jerod Santo:** Agreed.

**Gerhard Lazu:** And this will be, this will be consistent for everyone. I think that is the advantage of Changelog.com actually running through the CDN; all the requests run through the CDN, even the ones to the website. So the thing is that if it's not in the cache, if it's a cache miss, for me the homepage loads in about 300 milliseconds... Which is slightly better than when I go to the origin, but it's not great. Now, obviously if this is a cache hit, in my case it loads in under 20 milliseconds, or around 20 milliseconds. And 15 times quicker is a noticeable difference.

**Jerod Santo:** Sure.

**Gerhard Lazu:** So as soon as these things get cached, it's really, really fast. So we would expect this from a CDN all the time, right? It should consistently behave like this. And by the way, title proposal - "15X quicker, maybe." We'll see. We'll see.

We're getting there.

**Jerod Santo:** Note taken.

**Gerhard Lazu:** So the problem is that with a current CDN, 75% of homepage requests are cache misses. So 75% of all requests.

**Jerod Santo:** Which is to me insane.

**Gerhard Lazu:** It is insane. That sounds pretty bad. So some would say, present company included, it defeats the purpose of a CDN, right?

**Jerod Santo:** I would agree.

**Gerhard Lazu:** Yeah. But there's more...

**Adam Stacoviak:** "But there's more..."

**Gerhard Lazu:** There's more.

**Jerod Santo:** \[00:12:06.28\] Tell us, tell us.

**Gerhard Lazu:** So this is a question for you, both Adam and Jerod. What do you think is the percentage of all get application requests that are cache hits? How many of all the requests that go to the app, to the origin, do you think are being served from the cache? And the options are 15%, 20%, 25% or 30%. What is your guess?

**Adam Stacoviak:** Well, I buzzed in thinking it was a game show... My bad. I buzzed myself in even.

**Jerod Santo:** Go ahead. You get to go first.

**Adam Stacoviak:** 20%, please...

**Gerhard Lazu:** 20%. Okay. Jerod?

**Jerod Santo:** So you just told us that 75% are misses.

**Gerhard Lazu:** Yup.

**Jerod Santo:** And that's every type of request. Now you're asking --

**Gerhard Lazu:** No, sorry. Just the homepage. Just the homepage is 75% miss, which means the homepage is a 25% hit. Now I'm asking about all the requests to the application origin. Remember, we have a few origins.

**Jerod Santo:** Okay.

**Gerhard Lazu:** Just going the application origin.

**Jerod Santo:** Okay. I'm going with the highest possible choice, 30%.

**Gerhard Lazu:** So yeah, 17.93%. So yes, Adam is closer. 15% would have been accurate. I think 20 is more accurate, because 17.93 is closer to 20.

**Jerod Santo:** Sure.

**Gerhard Lazu:** So yeah, I think you were too optimistic, because if 30% were cache hits, that would be good. It's actually 17%, 18%. 18% are cache hits, everything else is a miss. And the window is the last seven days. The last seven days. So in the last seven days, only 18% of requests were served from a cache.

**Adam Stacoviak:** How does this make any sense?

**Gerhard Lazu:** Right. So - October, 2023... This is when we started on this journey. This was issue 486 in our repo - what is the problem? Well, after October 8th, 2023, CDN cache misses increased by 7X. It just happened. We looked into it, we tried to understand it, and we could not.

**Adam Stacoviak:** And it's been ever since then, or -- just like this systematic problem ever since then?

**Gerhard Lazu:** Well, it has been low ever since. So the cache hits have been low to the application specifically ever since... Which is why even when you go through the CDN and you think things are snappier - and they are, to some extent - many requests, they are just cache misses, especially going to the application.

So here we are today... It's only been three weeks. So it's only been three weeks. So let me explain what that means. So it depends how you count.

**Jerod Santo:** Okay...

**Gerhard Lazu:** So the thing is that roughly that's how much time I had to spend on this, about three weeks in total...

**Jerod Santo:** Gotcha.

**Gerhard Lazu:** ...but spread over like a long period of time.

**Jerod Santo:** Right.

**Gerhard Lazu:** So we are just about to unleash our clicks on the Pipedream.changelog.com.

**Jerod Santo:** Okay.

**Gerhard Lazu:** Bring your mice out and let's do this.

**Jerod Santo:** Let's unleash --

**Gerhard Lazu:** Let's see how this feels.

**Jerod Santo:** ...our clicks.

**Gerhard Lazu:** Pipedream... And by the way, anyone can reproduce the same experiment. Remember to be logged out. That part is important. Or a private window. Because if you have any cookies, it will bypass the CDN. That's the rule.

**Adam Stacoviak:** When should I do this? Right now?

**Gerhard Lazu:** Right now. Yeah, right now. Just click around and tell me how it feels. I mean, I've tested it myself, but I don't have your experience... So how does it behave on your side of the world?

**Adam Stacoviak:** \[00:15:50.29\] So one thing in particular that I noticed between the two of them right away - because I clicked into News... And it seems like there's this paint delay on the right hand side. So we split that viewport News - left side is subscribe, right side is the newsletter. Very, very cool. But that right side, newsletter side, the background color seems to like delay paint. I'm not sure if that's -- it's happening here as well as the \[unintelligible 00:16:15.08\]

**Jerod Santo:** That's an iFrame, so that's a secondary request.

**Adam Stacoviak:** Gotcha. Okay, so I'm not going to judge that then.

**Gerhard Lazu:** I think that's important.

**Jerod Santo:** I mean, it's fair to judge it.

**Gerhard Lazu:** It's like the whole thing. Like, how does one compare to the other?

**Adam Stacoviak:** Where's that iFraming from, though? iFraming from...?

**Jerod Santo:** From the same site.

**Gerhard Lazu:** Same site. Yeah.

**Jerod Santo:** It should be, yeah.

**Gerhard Lazu:** So for me -- again, for me, when I click on News, I can see that the iFrame... You're right, there is a little bit of a delay. But when it paints, for me it paints instantly on Pipedream. On Changelog.com there's a little delay between the whole thing. That's at least how I experience it. Now, anyone can reproduce this, and we wonder, or I wonder, how do you perceive the two? Wherever you are in the world, if you click around... These are live links, by the way. Changelog.com and Pipedream.changelog.com. They should both behave -- sorry, they will both have the same content, and what I'm wondering is how do you perceive them? Is there a significant difference? Is it the same?

**Jerod Santo:** Right.

**Gerhard Lazu:** What do you notice? What about you, Jerod? Do you notice anything different?

**Jerod Santo:** My experience specifically on the episode page, which I think is a good one because it has a lot of, let's just call it first party content; not even CDN content... Because I do -- I mean the CDN is a CDN, right? So I do see the images lazy-loading in slightly, just like they would on the previous one. However, the first party content - for instance, I'm on "Making DNSimple", podcast 637, which has all the podcast information, all the chapters, and then the entire transcript, which is lengthy... And it loaded in very quickly. Obviously, my browser is not rendering that text, that's off the screen, but it has to at least download it in the HTML. So that was very fast. Other than that, it feels similar to Changelog.com, and it's the images that I do notice load in -- because they're lazy-loaded, they load in a split second later. Other than that -- but yeah, I think the episode page is a good test, and it's significantly faster.

**Gerhard Lazu:** Okay. So Pipedream.changelog.com, if you look at the requests to see the network requests in your developer tools, you will see that all the static assets, they load from cdn2.changelog.com, which is the Pipedream2. So everything that we serve, all the origins, whether it's the assets, whether it's the feeds, or the website - it all goes through the Pipedream. And the application was changed -- that's what we were talking about earlier; we may unpack that. The change is to every public URL that we serve, now we have an alternative, which is all running through the Pipedream. I'm using an HTTP stat here, and I'm going to https://Pipedream.changelog.com. If it's a cache hit, it loads for me in 25 milliseconds, which is slower than Changelog.com. It's five milliseconds slower in real terms. 25%, roughly? Roughly 25% slower. However, if it's stale, it should also return within 25 milliseconds, which is what's happening here.

Our content should always be served from the CDN, regardless if it's fresh or not. And in this case, what we see -- if it's already been served once, it will stay in the cache until there's pressure on the cache. And we control when that is. We just basically size the cache accordingly. We give it more memory, and then more objects will remain in memory. And what we want to do is to always serve content from the CDN, whether it's stale or not.

\[00:20:07.28\] So this was a cache hit. You can see there's a cache status header. It was served from the edge. We see what region it was served from. By the way, if you were to do a curl request, you'd see the headers, you would see like all this information. Even in your browser developer tools, open any endpoint and you get this information for every single response. We see what was the origin that the CDN had to go through to fulfill the request. The TTL - that is the important value, which is how long was that object stored in the cache. In this case, it's minus four. It's a negative number, which means that it's considered stale. The default value, the default TTL is set to 60 seconds. Anything that was requested within 60 seconds is considered fresh. But then we have this other period, this other value, which is grace, which says "For 24 hours, continue serving this object from the CDN, but try and fetch it from the background." And also we see that this has been served from the CDN 26 times already.

As I read these headers - these are important; every single request now has them. And we can see which was the region, was it an edge region... And we don't have an origin yet, but we should, by the way; the closer you are to the origin, it just says the origin. Shield - all that we can configure now. What a shield origin does, basically - the CDN instances which aren't close to the origin, they will go to the CDN instance which is closest to the origin. And that's so that we place as little load on the origin as possible. I don't think that will be a problem for us, but we can do it if you want to.

And the question is, after all these years, are we holding fly.io right? What does that mean? Well, Changelog the application has only been deployed in two regions. Actually, one region, and we have two instances... But we always wanted to have it spread across the world. The problem with that is how do we connect to the database? Then you're introducing latency of the database layer. But now, the CDN instances, they can be spread around the world. So does it mean that finally we're doing this right?

**Jerod Santo:** Right. We just put it in front of our app, instead of making our app be distributed. Now we're distributing in front of it.

**Gerhard Lazu:** I think so. Yeah. So shall we see where these instances are running?

**Jerod Santo:** Yeah. I'll see it, man.

**Gerhard Lazu:** I'm curious. Are we curious about anything else before we move on to that?

**Jerod Santo:** I'm curious about the rollout of this thing, because I've noticed a few things this week and I'm wondering if maybe things are pointing at different directions, and if that explains some stuff that I've been seeing... But we can maybe hold that for later.

**Gerhard Lazu:** I think we can talk about that now, just so we go through this. We never had this situation before, by the way, where we have two application instances completely separate, that are pointing to the same database. So the data is always the same, but one is going to become the new production, and it's configured in a certain way, with a new CDN, and the existing application, the one that's behind Changelog.com is still consumed by our production CDN. I mean, we have two CDNs. That's the situation. And we can't change the production application, because if we do that, then we have rolled out the new CDN and we don't know whether we are ready yet. I think that's what we need to determine today. What else is left? How do things look so far? And just like assess the readiness of the new CDN.

**Jerod Santo:** Yeah.

**Gerhard Lazu:** \[00:24:03.13\] Of the Pipedream. So what things have you noticed, Jerod, that are off?

**Jerod Santo:** So I shipped Changelog News Monday afternoon, and that particular episode has dramatically lower downloads. So low, in fact, that it has to be a bug somewhere in the system that it's not real. Like, it's not a real number. And I'm wondering if maybe a bunch of podcast apps got pointed to the new CDN, and we're not capturing those logs, which is how we get these stats. So that was the first thing. I was like "There's no way that this has actually only been downloaded 700 times", or whatever it was, in the first day. That was the first thing I noticed. And you're nodding along, so you're thinking probably that's the case.

**Gerhard Lazu:** Yeah, I think so. I think that that's what happened. So depending on which instance picked up the job - this is all like background jobs - it must have pushed a different URL than the live one. So then all those podcasting platforms - how would you call them? All the podcast --

**Jerod Santo:** Clients.

**Gerhard Lazu:** Okay, so all the podcasting clients - some of them, maybe all of them - may have picked... But I think if it would have been all of them, we would have seen zero downloads.

**Jerod Santo:** Yeah. It wasn't all of them. It was just some of them. And maybe eventually the other app caught up and started doing things... Because we send out a bunch of notifications, in the background.

**Gerhard Lazu:** Now, because we have multiple instances -- and I think this must be a job queue, right? Whichever instance picks up the job, basically it puts its own URL, and then ships it to the actual... So it means that we are in production, without wanting. \[laughter\] Damn!

**Jerod Santo:** Yeah. So -- I mean, assuming that all of those clients got their podcast episode, then it works. But we have no way of knowing. So if our listener here didn't get Monday's News episode for some reason, let us know. Because --

**Gerhard Lazu:** Oh, no, they did.

**Jerod Santo:** Well, they might have...

**Gerhard Lazu:** I mean, the URL is correct, but they are going to the new application instance, which we're not tracking.

**Jerod Santo:** Which goes to the new CDN.

**Gerhard Lazu:** Which has the new CDN, which has the Pipedream --

**Adam Stacoviak:** Same database.

**Gerhard Lazu:** Yeah.

**Adam Stacoviak:** Same data. Just different applications on the CDN.

**Gerhard Lazu:** The data will be the same.

**Jerod Santo:** Okay, let me tell you the other thing I've noticed.

**Gerhard Lazu:** Okay, go on.

**Jerod Santo:** So that's one.

**Gerhard Lazu:** Let's debug. Live debugging. I love this.

**Jerod Santo:** Two you already know about, which is that - and this is probably the exact same issue, is that when we posted our auto posts to I think Slack in this case, it posted the app instance URL, not changelog.com URL.

**Adam Stacoviak:** I thought it was Zulip. Wasn't it Zulip?

**Jerod Santo:** It might've been both. Actually it was both. Yeah, it was both. And so there was a URL mismatch, which I think is the exact same issue.

**Gerhard Lazu:** Yup.

**Jerod Santo:** And then the third one is that - I subscribe to all of our feeds, because I want to make sure they all work... And so whenever we ship an episode, I get like five versions. You know, just padding our stats, getting five downloads for the price of one... And specifically the /interviews - so yesterday's show with Nathan Sobo, two days back as far as we shipped this, but yesterday when we record... It went out and I downloaded it on the Changelog feed, and I downloaded it on the plus plus feed, and I didn't download it on my interviews only feed. Because you can just get the interviews if you want. And that feed did not have that episode until this morning, when I logged in and said "Refresh the feed." And I forced it to refresh that feed, and then I got it. And again, that's probably -- those are background jobs. So somehow that did not get refreshed. So that's the third thing.

**Gerhard Lazu:** Okay.

**Jerod Santo:** The fourth one...

**Gerhard Lazu:** Okay.

**Adam Stacoviak:** There's four?

**Jerod Santo:** Yesterday I disabled Slack notifications entirely. And this is our last step to cut entirely over to Zulip. And I have a blog post which is going out announcing that "We're no longer on Slack. Don't go there." However, after Adam shipped that episode, it posted the new notification into Slack, even though that code doesn't exist anymore, and I deployed it. And so I'm guessing it still exists on your --

**Gerhard Lazu:** That's exactly it.

**Jerod Santo:** ...your experimental one is not keeping up with code changes.

**Gerhard Lazu:** Yup. That's correct.

**Jerod Santo:** Okay. So all my bugs are related to this very exciting deployment that I didn't \[unintelligible 00:28:14.20\]

**Gerhard Lazu:** This is it. We broke it. I don't think we kaizened it, I think we broke it. \[laughter\]

**Jerod Santo:** I think so.

**Gerhard Lazu:** Yeah, yeah, I think we broke it...

**Jerod Santo:** So those are the four things I've noticed.

**Gerhard Lazu:** No, sorry, I broke it. Let me take responsibility for this.

**Jerod Santo:** Yeah, that's much more fair. I had nothing to do with it.

**Gerhard Lazu:** Single-handedly.

**Break**: \[00:28:28.27\]

**Gerhard Lazu:** Okay, so let's talk through this in terms of what a potential fix would look like. We have a new application instance which behaves as production, from all purposes, right? The content is exactly as production, it connects to the same database instance, it has all the same data. What isn't happening is the code updates aren't going out automatically. That has not been wired, because my assumption was I will only deploy this one instance, I'm going to change a couple of properties so it has the new CDN configured, and I'll see how it behaves the whole stack in isolation. What happened, obviously, is the new instance is consuming the same jobs, the same background jobs as the existing production... So very helpfully, it has sent the new links, which are all temporary, especially like the application links, the ones that you've seen in Zulip and a couple of other places, which are just for the application origin and they are only meant to be there for the CDN. Everything should go through the CDN, but the CDN hasn't been configured yet through everything, because that's like where the test comes in. How does the application behave? So some links need to be application links.

How does the CDN behave? So on and so forth.

So in this case, we need to somehow fix those links, the ones that went out and they're incorrect... I'm not sure whether we know what they are, and if not, then we need to basically make this experimental application instance not consume basically jobs; not process any background jobs.

**Jerod Santo:** Yeah. We just need to disable OBAN in that one.

**Gerhard Lazu:** Perfect.

**Jerod Santo:** And then it would never get invoked unless you manually go to the website, right?

**Gerhard Lazu:** Yeah.

**Jerod Santo:** And then we want to make sure that nothing crawls it.

**Gerhard Lazu:** Yes. That's a good one.

**Jerod Santo:** Because then they'll start sending traffic to its endpoints instead of our main website.

**Gerhard Lazu:** So let's do that toot sweet. So I think -- yeah, I think we're finished with the recording. Let's go and do it. No, no, we haven't... \[laughter\] Don't worry. This is still going. Okay. So yeah. But that seems right.

**Jerod Santo:** Those two changes I think will mitigate the current issues. Yes.

**Gerhard Lazu:** That sounds about right.

**Jerod Santo:** Okay. So that makes me happy, as long as we get those rolled out here...

**Gerhard Lazu:** Yeah. We've figured it out. We've figured what the issues are. Alright. So what do I want to do now? I think I would like to see how many Pipely instances we're running all over the world.

**Jerod Santo:** Okay.

**Gerhard Lazu:** And for this, I'm going to use a new terminal utility which I've found, that I was like "Yes, this is exactly what I was missing." It's called Fly Radar. This is what it looks like. We need to go to that. It's all ncurses-based, it's all happening in my terminal, and it's beautiful.

**Jerod Santo:** Cool.

**Gerhard Lazu:** Flyradar Zero to One - I can see all the Changelog applications. The one that we're going to look at is a CDN. So by the way, the two applications - do you see this one? thechangelog22250505 is the new application instance; that was deployed three days ago. While the one above, the 2024, that is the current production. And that was updated one hour ago.

**Jerod Santo:** Cool. This is cool.

**Gerhard Lazu:** So the code will differ. And the Slack notifications - if this application instance picks up a job, it will do whatever it's configured to do, which will be the wrong thing.

**Jerod Santo:** Okay. Another thing we can do briefly before we figure that out is we could just redeploy that one, so at least it's current, and it won't do any Slack notifications. Because I definitely don't want to say "We're no longer doing Slack notifications" and then have another one come in, and I'll have egg on my face.

**Gerhard Lazu:** As soon as we stop recording, I'll go and do that. Not a problem.

**Jerod Santo:** Okay.

**Gerhard Lazu:** So let's have a look at the CDN 20250225, which is the instance when it was deployed, and it has had a few updates... What do we see? We see 10 instances, you see the region, and you see it's been updated one day ago.

**Jerod Santo:** I see Sydney. Is that right?

**Gerhard Lazu:** Yes.

**Jerod Santo:** I see Chicago...

**Gerhard Lazu:** Yes.

**Jerod Santo:** LHR. Is that Virginia one?

**Gerhard Lazu:** \[00:36:13.03\] Heathrow.

**Jerod Santo:** Oh, London Heathrow. Of course.

**Gerhard Lazu:** Yes. These are the airports, by the way.

**Jerod Santo:** JNB... That's --

**Gerhard Lazu:** Joe Berg. Johannesburg.

**Jerod Santo:** Johannesburg. Very good.

**Jerod Santo:** San Jose...

**Gerhard Lazu:** Yes. Correct.

**Jerod Santo:** Okay. IAD. That one's -- that's the Virginia one.

**Gerhard Lazu:** That's the one.

**Jerod Santo:** Okay.

**Gerhard Lazu:** Should we leave some for Adam?

**Jerod Santo:** Adam, do you want to guess these? SIN?

**Adam Stacoviak:** I know DFW...

**Gerhard Lazu:** What is DFW?

**Jerod Santo:** Oh, that's where you live.

**Adam Stacoviak:** Dallas, Fort Worth. And I think France -- FRA is probably France, is my assumption.

**Jerod Santo:** France... What's SIN?

**Gerhard Lazu:** No, that's actually Frankfurt.

**Adam Stacoviak:** Oh, Frankfurt.

**Jerod Santo:** Okay. Germany.

**Adam Stacoviak:** That makes sense, too.

**Gerhard Lazu:** Singapore...

**Adam Stacoviak:** Singapore.

**Jerod Santo:** Oh, Singapore. Cool.

**Gerhard Lazu:** Oh, man. I keep seeing this. Okay. And SEL - I don't know what SEL is. Oh, come on... I keep seeing \[unintelligible 00:36:55.20\] Okay, I don't know. Alright. Let's do \[unintelligible 00:36:59.13\] I think regions, I think; in the regions list. There we go.

**Jerod Santo:** SEL is San Diego, Chile.

**Gerhard Lazu:** Yeah. That's the one. Santiago. That was it. SEL. That's how we see what the regions are. Cool.

**Jerod Santo:** That's cool, man. We've gotta get over there in Australia or New Zealand, or something.

**Gerhard Lazu:** Well, we do have Sydney, so...

**Jerod Santo:** Oh, that's true.

**Gerhard Lazu:** We can add -- yeah, we can add more. I mean, we have 10, but we can add more.

**Jerod Santo:** No, Sydney covers it. I just forgot about Sydney.

**Gerhard Lazu:** Yeah. So you've seen all the machines, and in terms of other uses - it has logs, alpha logs... So this is something that's really cool. So these are the logs for the new -- let's see what logs do we have, what requests we have flowing to the new Changelog instance.

**Jerod Santo:** This is a cool TUI. Congrats to the Fly Radar coder/author/person. This is cool. It reminds me of k9s.

**Gerhard Lazu:** Yeah, exactly. That's exactly it. Yeah, that's exactly it. Oh, look, we have some requests. Robots. Robots got some requests, and the homepage got some requests. And this is IAD. So we can see what instances were requested.

**Jerod Santo:** Okay.

**Gerhard Lazu:** So now, let's go to the --

**Jerod Santo:** I'm not liking these requests, Gerhard. How come we're getting requests?

**Gerhard Lazu:** Yeah, exactly. Well, we will be getting, because we have the CDN, we have monitors set up... We have a bunch of things. Now, these are the requests going to the existing -- you can see there's a lot more traffic going to the existing application. If you ask me, there's too much traffic. The CDN is not doing his job. That's what we're trying to fix, right? There's way too many requests hitting it. And you can see that the regions - we have two regions. EWR... Adam, what does EWR stand for? Do you know?

**Adam Stacoviak:** \[unintelligible 00:38:39.10\]

**Gerhard Lazu:** Right on. Okay. Yeah, perfect. That's exactly what it is. \[laughter\]

**Jerod Santo:** That's right on, man.

**Gerhard Lazu:** Yeah. So we can focus only on like specific instances to see the log. So I think this is really cool. So we've seen this... Let's move on. Furkankli Flyradar. Furkan Kalaycioglu. That's quite the name. Furkankli. Yeah, so he built this. I think it's a really cool tool. We can go and check it out on GitHub. It's all written in Rust, so it's really, really fast. It's a terminal UI and it was inspired by k9s, indeed.

**Jerod Santo:** Oh, look at that...

**Gerhard Lazu:** Yeah. Yeah. That's it. So... Issue five, March 22nd. That's when I just stumbled across it, so I captured it. You can go and check it out. But it was really cool. When I've seen Flyradar, I thought "Wow, this is exactly what I wanted." Anyway. Anyway. Back to the Pipedream. So which backend do you think serves the most requested URL? Another question... We have three backends, or three origins. You have the application origin, the one that we've been focusing on, there's a feeds backend, and the assets backend. So in the last seven days, which backend served the most requested URL?

**Jerod Santo:** \[00:39:58.09\] Like, the one top URL, which we also don't know what it is --

**Gerhard Lazu:** The one top URL, exactly.

**Jerod Santo:** ...which one serves that particular...?

**Gerhard Lazu:** That's the question. Yes.

**Jerod Santo:** Okay. I'm gonna go with feeds.

**Gerhard Lazu:** And there's only three possible answers.

**Jerod Santo:** Yeah. I'm gonna go with feeds.

**Adam Stacoviak:** Same.

**Gerhard Lazu:** Feeds? So apparently, we are serving this podcast original image about 10,000 times per day... \[laughter\]

**Adam Stacoviak:** Gosh...

**Gerhard Lazu:** Or once every 10 seconds.

**Jerod Santo:** So that's the assets endpoint.

**Gerhard Lazu:** I had to check what it was. Yeah, it is assets.

**Jerod Santo:** It's our album art.

**Gerhard Lazu:** The Changelog. So the answer was assets, actually.

**Jerod Santo:** I guess that makes some sense, because everyone has to download that into their podcast app all the time.

**Gerhard Lazu:** Yeah.

**Jerod Santo:** Cache that sucker. Come on.

**Gerhard Lazu:** I know, right? Do a better job with caching it. That would be a good thing. But honestly, it was the second one.

**Jerod Santo:** Podcast feed. So we were almost correct, if it wasn't for that one image...

**Gerhard Lazu:** I'm wondering, how does the new CDN behave for our most requested URL, which is not a static asset? So how does it behave for podcast feed? I'm going to run three commands... Actually, a few more than three. The recording has been done, so if anything doesn't work as it should, we'll switch back to the recording, but that's going to be a backup. Alright, so let's go back into the terminal, and we'll experience this firsthand just to see what it feels like. So I'm in the Pipely repository, and the first command which I'm going to run is just debug. And by the way, anyone should be able to clone the repository and do exactly what I do. What's happening here is behind the scenes it is building everything that we need for the CDN, including the debug tooling, and it will run it locally. And the TUI that you see here - because it is a TUI, it has a couple of shortcuts - is Dagger. So all this is wrapped into Dagger.

**Jerod Santo:** Okay.

**Gerhard Lazu:** So I have a terminal opened in Pipely, all running locally. Alright. So the first thing which I'm going to do is I'm going to benchmark the current CDN, Changelog.com. So I'll do just bench CDN. All this is wired together, it's sending a thousand requests to the feed end point, and this is what we see. So the current CDN serves about 300 requests per second, and it's the size that is the interesting one. The size is about 220 mebibytes per second. So I think that the CDN is faster, but the bottleneck here is my two gigabit home connection. And this is as much as I can benchmark it. So that's the limit.

So if we were to benchmark using the same connection, CDN2 - this will go to the Pipedream, to feed; this is how that behaves. And by the way, this is live, real traffic that's happening here. So 177 and 132 megabytes per second. So what do you think is happening here, if you had to guess.

**Jerod Santo:** Well, my guess would be that it's not as much bandwidth as Fastly has.

**Gerhard Lazu:** That is correct. Yes. So I'm looking at Fly here, and this is a CDN instance. We have the different instances. Do you see here like London Heathrow? That is the one that lit up. It lit up in response to me sending it a lot of traffic. And you can even see it here - if I do London Heathrow, you can see that's the one that was serving the most bandwidth. And actually, what I've hit is the 1.25-gigabit limit of this one instance.

**Jerod Santo:** And that's just a constraint of the actual instance on Fly. Like, that particular Fly VM, or whatever they're called.

**Gerhard Lazu:** That is correct. Yeah, exactly. So if I do Fly CTL machines list, you'll see that - and let me just do \[unintelligible 00:43:50.10\] You'll see that we have like a single instance in Heathrow. We could run more, and that's what we're going to do here, to see if running more instances will increase the bandwidth. So I'm going to do -- let's do flyctl scale, count three. We're just basically going to run three instances in the Heathrow region.

\[00:44:13.26\] The reason why we don't do this is we'll just add cost. When we are in production we may need to do this, because some areas may be running hotter than others, so we may need to scale it accordingly. But right now, every single region has one instance only.

So let me do machines list. So what I want to see is they are all started, and they're all running. The health there is one. Yup. These are all good. Yup. Everything is nice and healthy. So now let's go back and let's run the same benchmark. And we'll see it live... Okay. So still the same thousand requests to the feed endpoint. And 180 - so just about the same. Not much has changed. It takes a while for everything to warm up and the requests to be spread correctly. We've seen there a blip... So let's see how does it behave now. Okay, so we're 150 megabytes per second. If we run this a few more times so that everything is nice and spread --

**Jerod Santo:** That was requests per second, right? You said megabytes per second. That's requests per second.

**Gerhard Lazu:** So this is -- so 171 mebibytes per second, which is almost like 1.7 gigabits. And the requests, we have 228. So these three instances, that's what we see. And if we run this enough times -- when I tested this last time, I was able to get to about two gigabits. But it's not like an exact result every single time; based on network conditions, based on a bunch of things, based on where those instances are placed within the Fly network... But three instances, and even when I added more, I've seen there was like this limit. Obviously, the two-gigabit --

**Jerod Santo:** Well, you max out, eventually.

**Gerhard Lazu:** Exactly. I max out eventually. I'm still not maxed out currently, and the reason why I know that is because if I bench CDN 2, I can see that that brings me the close to that two gigabits. 220.

**Jerod Santo:** CDN 1. This is Fastly.

**Gerhard Lazu:** CDN 1. Yeah, this is Changelog.com. This is Fastly, that's correct. And it's those 300 and something requests per second.

**Jerod Santo:** So Fastly is still faster, because we haven't added enough instances in your region in order to get our bandwidth up on Fly to max out your Gerhard personal bandwidth.

**Gerhard Lazu:** Exactly.

**Jerod Santo:** Okay. So adding instances doesn't really move the needle very much, but it does move it eventually if you really wanted to.

**Gerhard Lazu:** Exactly. So this is maybe even a question to the Fly team. So when it comes to the instances, if I look at what instances we provisioned, you can see that we are running shared CPU 2X, and they get two gigabytes of RAM. The question is - and I think we kind of like touched upon this last time - even the performance instances, we don't seem to be getting more bandwidth. There is a point at which an instance doesn't get more traffic. And depending on maybe the region's capacity, maybe there's some sort of a limit that we're hitting. Now, do you remember Bunny?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Bunny was super-fast.

**Gerhard Lazu:** Okay. We can bunch bunny --

**Jerod Santo:** Bench bunny or bunch bunny?

**Gerhard Lazu:** Bench bunny. We can bench bunny. And Bunny will go, and this is how that behaves. Bunny changelog.com...

**Jerod Santo:** But Bunny doesn't let you, right?

**Gerhard Lazu:** Exactly. So it ratelimits me. So I can't benchmark Bunny.

**Jerod Santo:** You think that's because they don't want to be benchmarked, or do you think it's because they're just fighting off --

**Gerhard Lazu:** I think it's throttling, yeah. They are throttling. So bunny changelog.com -- and I have been benchmarking them quite a bit in preparation for this...

**Jerod Santo:** You might be blacklisted... \[laughter\]

**Gerhard Lazu:** ...so my IP might be blacklisted somewhere on the Bunny side. Yeah. But that's the reality. Cool.

**Adam Stacoviak:** You should be able to get some sort of like pass, like "Hey, I'm a developer and I'm testing things."

**Gerhard Lazu:** Right.

**Jerod Santo:** Just benchmarking.

**Gerhard Lazu:** \[00:47:57.15\] Of course. Yeah, I think so. I think so. Cool. Okay, so I'm wondering, if I had a hundred-gigabit internet connection, and one day - and this is a fact; one day, I will have that internet connection - and Fly did, too... Because remember, Fly -- I mean, in this case Fly is the bottleneck...

**Jerod Santo:** Correct.

**Gerhard Lazu:** What could we expect from Pipedream? Just up runs the whole of Pipedream locally.

**Jerod Santo:** Okay. So now you've got no network.

**Gerhard Lazu:** No network. Exactly. It's just like the -- everything is running on the same host, and you can see that this is actually forwarding traffic to the feeds endpoint, to the static endpoint, to even the application origin.

**Jerod Santo:** This is like all of our features.

**Gerhard Lazu:** So it's all here.

**Jerod Santo:** It's all here.

**Gerhard Lazu:** It's all here. So let's do "bench feed" and let's see what we get.

**Jerod Santo:** Oh, we're getting massive amounts of --

**Adam Stacoviak:** That's 200,000 requests.

**Gerhard Lazu:** That is 200,000 requests. Yes, it's more. What do you see in data? Can you read that out for us?

**Jerod Santo:** 85 gigabytes.

**Gerhard Lazu:** That was a bit silly, but yes, it's every 10 seconds. So now it's switched the -- because we had so many requests, the scale switched from one second to every 10 seconds. And this is what we see. We are pushing 11,000 requests per second, and we're transferring eight gigabytes - not gigabits, gigabytes per second. So if you had a really fast network, we could saturate close to a hundred gigabit.

**Adam Stacoviak:** That's insane.

**Gerhard Lazu:** Yeah. So the software works...

**Jerod Santo:** And that's just a credit to Varnish, right?

**Gerhard Lazu:** Pretty much. Yeah. It really, really works. It really works.

**Adam Stacoviak:** When you hold it right.

**Gerhard Lazu:** When you hold it right.

**Jerod Santo:** And you don't have a network. \[laughs\]

**Adam Stacoviak:** Sorry.

**Gerhard Lazu:** Exactly. Well, you need to have a hundred-gigabit connection, so I think that's the hard part. And Fly needs, too. Fly needs to have - or whatever provider we run, it needs to have more network capacity. Because right now, my internet is faster than what the Fly instance does. And I can't saturate it. And we've seen, because I can saturate -- I can saturate Fastly. Cool. And I think the interesting thing, which I haven't shown yet, and I could, because it's behind me, but anyway, that's not very visible... What I would like to show is basically I'm hitting the limit of my CPU. Where I'm running this benchmark, it's a 16-core machine, and I'm running both Varnish and the benchmarking client, OHA, O-H-A in this case. And between the two of them, they're saturating 16 cores. And that's what we see here. So the bottleneck really is the CPU. It could go faster. Because again, networking - it's just all in the kernel. So Pipedream and Pipely is an iceberg, and we explored just the tip of it. So most of it is underwater.

**Jerod Santo:** Are you talking about lines of code?

**Gerhard Lazu:** No, I'm talking about many things, but let's go.

**Jerod Santo:** \[laughs\] I'm wondering how many my 20 lines have ballooned into at this point.

**Gerhard Lazu:** Oh, it's there... It's there... That thing is coming up, so stay tuned, stay tuned.

**Jerod Santo:** Okay.

**Gerhard Lazu:** So VTC stands for Varnish Test Case.

**Jerod Santo:** Okay.

**Gerhard Lazu:** And Pontus Algren...

**Jerod Santo:** Oh yeah, I saw this comment.

**Gerhard Lazu:** Yeah. So Pontus Algren, one of our Kaizen listeners, mentioned this in a Zulip message back in December, 2024. So he said "Regarding the testing of VCL, did you consider the built-in test tool VTC?"

**Jerod Santo:** So you were doing something else previously... I can't remember what you were doing.

**Gerhard Lazu:** Yes. We are still doing that, but I'm also doing this.

**Jerod Santo:** Okay.

**Gerhard Lazu:** So I'm just going to play the recording, okay? It's just easier. So just test VTC is going to run in three seconds, all the tests for the different Varnish configuration that we have for Pipedream.

**Jerod Santo:** Cool.

**Gerhard Lazu:** \[00:51:56.16\] So this is really, really fast. This is the equivalent to your unit tests, if you wish.

**Jerod Santo:** Weren't you running the tests against like production instances last time?

**Gerhard Lazu:** I was. I'm still there.

**Jerod Santo:** You still are?

**Gerhard Lazu:** Yes.

**Jerod Santo:** Why wouldn't you replace it?

**Gerhard Lazu:** Hang on. Give it a minute, we're getting there.

**Jerod Santo:** Oh, okay. Sorry.

**Gerhard Lazu:** So this is what the VTC looks like... And basically, you can control it at a very low level in terms of the requests, the responses, the little branching. So think of it, when you're trying to come up with a final Varnish, you make little experiments to see how the different pieces of configuration would work. And that's what VTC enables you to do. You can write a subset of your VCL, you can configure clients, you can configure servers, and you can make them do things in an isolated way, in a very quick way. You can basically model what the thing is going to look like, and you're going to check if what you thought would happen does happen. And that's what makes it really, really fast. And it's all built into the language.

So it's there, and we have it, and it gives me a nice tool to figure out what is the minimal set of varnish that I have to write for this. And I think this is where that number of lines of code and number of lines of config comes in... But we all know that we want acceptance tests. We want to see what users will experience. And remember, this is what you were asking for, Jerod. You were saying, "How do we know that this new thing is going to behave exactly the same way as the existing thing behaves?" So what we now have is - you see the test acceptance; these are all the various things that we can run in the context of Pipely. We can do test acceptance CDN, test acceptance CDN2, or test acceptance local. And this is using Hurl, and we're describing the different scenarios that we want to test for real, testing these real endpoints. Which one would you like us to try out?

**Jerod Santo:** Local.

**Gerhard Lazu:** Local. Great. So what I've heard is Changelog. \[laughter\]

**Jerod Santo:** That's exactly what I said.

**Gerhard Lazu:** \[unintelligible 00:54:05.06\] Changelog, okay?

**Adam Stacoviak:** "So what I've heard is..."

**Jerod Santo:** I don't know why you even asked.

**Gerhard Lazu:** \[laughs\] Well, you have to have a bit of fun. So test acceptance CDN and test acceptance CDN is going to run the same tests against the CDN. It's going to test the correctness of our CDN.

**Jerod Santo:** Not using VTC, though.

**Gerhard Lazu:** Say again?

**Jerod Santo:** Not using the VTC stuff.

**Gerhard Lazu:** No. This is Hurl. This is Hurl stuff.

**Jerod Santo:** Okay. So these are different tests.

**Gerhard Lazu:** Exactly. This is like a different level. The VTC stuff is just for the Varnish config. Hurl, in this case the acceptance test, are doing real requests and checking the behavior of the real endpoints. Like, for example, am I getting the correct headers back? Am I being redirected? Is this returning within a certain amount of time? What happens if I do this request twice? How does it behave? Is it a miss versus a hit? What happens? So we have 30 requests that we fire against the existing CDN and we see how it behaves... And then what we're going to do - we're going to run the same requests against the new CDN. And it's slow. Why do you think it's slow?

**Jerod Santo:** Well, I don't know what these tests are doing, so I can't answer that question.

**Gerhard Lazu:** So these tests are checking the behavior of the various endpoints. For example the feed endpoint, or the admin endpoint, or the static assets endpoint. In this case, you can see that we are waiting for the feed endpoint. So if you go back and you think about the various delay, and the stale versus miss, we are checking how the stale behavior -- sorry, we're checking how the stale properties of a feed responses behave. So if I'm going to hit this endpoint within 60 seconds, will it show up as stale? So literally, we're checking and we have to wait to see, will it expire? Will it refresh?

**Jerod Santo:** Gotcha. So you're delaying on purpose to see if it'll actually expire.

**Gerhard Lazu:** \[00:56:12.10\] Exactly. I'm delaying it on purpose, and it takes about 70 seconds, because we need to wait that long to test the staleness. And by the way, that's something which I'm going to do next... So we're going to check the staleness of something. And the staleness currently is set to 60 seconds. And you can see, we can do the variable delay... So this is the real CDN. We're going to Pipedream. We're not testing the local one, we're testing the Pipedream one. And this is the existing configuration, which we consider to be production.

Now, you said local, and now we can do the same test, we're going to run them against local, and we're going to change a couple of properties, because locally we want a slightly different behavior, and what we care about is that speed. We want these tests to be much, much quicker. And in this case, you can see the actual requests going through, you can see the responses, you can see the headers... We still are testing delays, but the delays are much shorter, which means that the test will complete much, much quicker. So we control these variables, and production is just as it is. This is how it behaves, and that's where we're testing, so it will be slightly slower. Shall we do it for real? Would you like me to try and run another test and see how it behaves if I do the acceptance local? Or shall we move on to something else?

**Adam Stacoviak:** What is the conclusion from that? Like, conclude some things for me.

**Gerhard Lazu:** Well, the conclusion is that we are able to run the CDN locally, and poke it and prod it and make sure that the CDN in this case is behaving exactly as we expect it to. We have a controlled way of configuring everything. What I mean by that - I mean the backends, the various backends that we use... We have properties to control like TTL staleness/freshness, and see how different configurations change the behavior of the system. We also have it deployed, and we can check if the existing CDN behaves the same as the new CDN. I haven't written all the tests, only like the big ones. Does the feed endpoint behave correctly? Do the static assets behave correctly? What about the admin endpoints, or those that shouldn't be cached? Do they behave correctly?

So I'm starting to build a set of endpoints and a set of tests that check how those endpoints behave. And there's certain differences. One CDN behaves slightly differently, like the existing one, that we're trying to improve on. So we can see where does it fall short? And there's a couple of interesting things that we can look at. For example, I've seen that we, for example, don't cache the JSON variant of the feed, of the RSS. Maybe we'd want to do that. I don't know. But going through this, testing the correctness of the system made me look into parts where I wouldn't normally look. The best part is that we can run this locally. We are in full control of everything that happens in our CDN. It's a lot of responsibility, and it takes a certain level of understanding to know what the tools are and how they fit together... But we have it.

**Jerod Santo:** Yeah, that's awesome, because now we don't have to just poke at a VCL in the sky and hope that it does what it does, and just only test in production.

**Adam Stacoviak:** That's right.

**Gerhard Lazu:** That's it.

**Jerod Santo:** We can actually make changes with confidence.

**Adam Stacoviak:** Is that a state of the art for any of the CDNs out there? Can you do this level of acceptance test between -- I guess you probably can't, right? We can't run Fastly locally. We can't run even Bunny locally. We can only run our own thing locally, so you can't really test the way you'd develop it locally, and then develop it in production... But you can test XYZ CDN versus Pipely, or Pipedream, right? You can test that. That's what you're doing right now.

**Gerhard Lazu:** \[01:00:04.29\] Yup. I think the first step is being able to run it locally, and running anything of that magnitude locally is hard.

**Adam Stacoviak:** Let me rephrase that. I would say, if you are unhappy with your CDN provider, thus far has there been a way to say what the original question was, "Can we trust moving to something else?" In this case, the something else is something we've built, not a different public provider... And so we're scrutinizing a little bit more. But if you were unhappy with one CDN, and you were thinking "Man, I want to move to a different one", has there been a state-of-the-art to test, I guess, the efficacy between different CDNs? Has this tooling been there before?

**Gerhard Lazu:** I'm not aware if it has. If someone from our listeners is aware of such tooling existing, I'd love to learn about that. I think it pretty much comes down to DIY, as in how much of the correctness of the system are you testing for? And in this case, even though it is a CDN, it is part of our system, because it determines how the Changelog website and the application and all the origins behave ultimately. How do users perceive them? And the best thing that we have, honestly, are the logs. Because based on the logs, you can see what users experience. But is that good enough? I mean, these systems are really big. Like global scale big. It's really hard, for example, even for me -- I mean, sure, I could force and test every single endpoint... But when I'm running these tests, when I'm for example testing Changelog.com, I'm testing wherever I'm closest to, based on the network conditions, based on whatever's happening. And I need to encode certain properties that I care about to check that they are behaving correctly. The same tooling could be used for any other CDN. So once we encode the things that we care about in terms of the correctness of the system... Let's say that one day we migrate to Cloudflare. If we did that, we would run the same set of acceptance tests against Cloudflare, or whatever we're building there, and see "Does this thing behave the same as the thing that we're migrating from?"

So there are these harnesses that we are required to have to make sure that the systems behave correctly, because they're big, complicated systems. And most of them are beyond our control, as we've learned over the years. Does that answer your question, Adam?

**Adam Stacoviak:** Kind of. I mean, I think it does. I think what I was pointing at or potentially trying to uncover is the potential of -- you know, we're all allergic to vendor lock-in, essentially. And I wonder if there's a level of vendor lock-in, because you don't know unless you make the move. And it's hard as a developer, or an IC, or even a VP to say "We've got to make this change. We've got to move to a different platform because of X, Y and Z." And whatever their data is, whatever their reasons are. And I wonder how many people or how many teams are staying where they're at because they have fear of the unknown. The unknown is that they can't test to this degree, this acceptance level.

**Gerhard Lazu:** I mean, yeah, that is real. I mean, just think about the journey that we had to take to get to the point where we are today. It took a lot of effort, it took a lot of time, it took a lot of understanding what even are the components. And we could have picked something else, we didn't have to pick Varnish. But we didn't want, or at least I didn't want to change too much at once. One day we may replace Varnish. It is possible. The real value is in understanding what the pieces are and how they fit together, whatever those pieces are. Whether it's Kubernetes, whether it's a PaaS. It doesn't really matter. It's a database... Take your pick. Each context is different.

So then how do you go about understanding what the pieces are? How do they interact? And how do you ensure - I think this is coming back to where we started - that what we do does genuinely improve things? And that is the hard part. Being able to measure correctly, being able to understand what improvement even means in the first place is really hard. And what trade-offs are you okay to make? We take a lot of responsibility by running this ourselves, and I'm very aware of that. I think that is really the hard part. Being confident that you can pull this off, having the experience that you can pull it off, and you can learn anything that you're missing. And if you apply those principles to whichever context you operate in, you'll be good. It won't be easy, but you'll have learned so much.

**Break**: \[01:04:36.00\]

**Adam Stacoviak:** Because we're able to do this whole multi-application, multi-CDN scenario, is there a way to, say, test 75% of our traffic goes to existing CDN, 25% of our traffic goes to new CDN, over a course of time, as this confidence gets to a higher level? What's the proper way? You don't just switch it off, right? We're testing, and confirming it, and things like that. How does it work in different scenarios. But is that the prudent way to roll it out, or am I jumping the gun on your presentation?

**Gerhard Lazu:** No, no, no. I think this is good. This is exactly -- I mean, these are the big questions, because honestly, there is no right answer. So a progressive rollout is the most cautious one, especially if you don't know how the new system is going to behave. In our case, we're spending a lot of time to double check that the correctness of the system is right, and that the system behaves correctly when it comes to all the other... So it's one component, the CDN, but it integrates with S3, it integrates with a bunch of other... It integrates with S3 for stats. It integrates with Honeycomb for all the telemetry, for all the traces, for all the events. It integrates with R2, the different R2 backends for the actual storage of certain components. So there's a lot of -- we're just basically replacing a central piece, and everything around it still remains; the integration has to be right.

So yes, we could do a gradual rollout in that maybe from a DNS perspective we say "25% of queries return this backend, or this origin." Sorry, in this case, let me just not compound the word origin... 25% of the requests go to Pipedream, and 75% go to Fastly. And how do they behave? But at that point, we are maintaining two systems, which is okay, but it cannot be a long-term solution. So we want to shorten the window in which we run both systems at once, and that both are active. Because we could very easily switch, for example, to Pipedeam, make sure that everything runs correctly. Let's say that we detect that "Hey, for some reason something isn't behaving correctly." We still have the old system. We just point the DNS back and everything continues as it was, which is why two of everything. That's another principle that we have.

So at this point, we have two CDNs. We have two applications, which are completely isolated. Now, they are running on Fly; the runtime is the same, but if one was to go down, the other one wouldn't know about it. So we've designed this in a way that is very cheap to fail. The new stuff, if it fails, will have impacted maybe a few minutes' worth of traffic, and fail catastrophically... Which is why we're running all these benchmarks, running all these correctness, to make sure that the chances of that happening are low. No guarantee in anything, but they're low.

And going back and forth is super-easy, because we run both things at the same time. The problem of running both Fastly and the new one is that we may see inconsistent data that gets written out. I'll go to great lengths - I mean the logs, I mean the events; I'll go to great lengths to ensure that's not the case. But if there are little discrepancies, we may end up with different data, and it may take a while to find that out, especially on the metrics side.

**Adam Stacoviak:** What kind of data would be different? Like a different image or, you know...?

**Gerhard Lazu:** The stats that we write. All the requests that come in, the stats that we write to S3, for example. And when Jerod processes them, when the background jobs kick off, they just can't reconcile the two different ways of saving the same data. Because there's a lot of config in Varnish -- sorry, there's a lot of config in Fastly that configures how we write out the logs to S3. And that will be accurate; the problem is that certain properties that Fastly has, Pipedream may not have. Again, let's remember, Fastly is a version of Enterprise Varnish, which is completely different. It's only them that they have certain properties about Varnish. We don't have certain methods, we don't have table lookups... There's so many features that we don't have in the open source Varnish. So there may be differences in what we may be able to do. For example, the GeoIP stuff. I don't know how that's going to work, or if it's going to work at all. And maybe it's fine. But that's an example of something that's running these two systems at the same time, we'll need to reconcile the differences.

\[01:12:20.15\] I suppose it's not too different to switching everything across and then "Oh, you are missing these properties that you care about", but that is the risk of going from one thing to another thing.

**Jerod Santo:** Well, I've found the answer to my question. It looks like it's about 308 lines of code at this point.

**Gerhard Lazu:** Great. We were getting there, but that's okay. \[laughter\] You preempted it. All good. All good. All good.

**Jerod Santo:** Yeah, it's what I care about.

**Gerhard Lazu:** Yeah, I know. So it's quite -- yeah, it changed a bit, and we'll go over that in a minute. So.

**Adam Stacoviak:** One more question for you before we go on.

**Gerhard Lazu:** Yes.

**Adam Stacoviak:** You said the phrase "Enterprise Varnish." Is there such a thing? Do they have like a different fork of it they're developing?

**Gerhard Lazu:** Yes. Absolutely.

**Jerod Santo:** Open core style?

**Gerhard Lazu:** So there's obviously Varnish, and there's Enterprise Varnish. Enterprise Varnish is a paid product. As far as I know, when Fastly started - this is like going through their blog, and going through the various public information which is out there - they started with Varnish, but they've been changing it a lot over the years. That was their starting point.

I don't know how similar it is to the Enterprise Varnish, but at this point we can assume it is a custom platform. Customized Varnish - I don't even know if it is Varnish. They're certainly VCL, but I don't know how that maps to what they actually \[unintelligible 01:13:31.26\] Because that's like all their like proprietary software.

**Adam Stacoviak:** Right. Who's in control of this Enterprise Varnish? They are?

**Jerod Santo:** The Varnish people.

**Adam Stacoviak:** I searched it on Google and I couldn't -- I mean, I'm still using Google, yes...

**Gerhard Lazu:** If you go Varnish Enterprise - yeah, there is even like a company, a consultancy behind it.

**Jerod Santo:** Yeah, varnish-software.com. They sell Varnish Enterprise. They have the open source Varnish community version...

**Adam Stacoviak:** Alrighty. I didn't think I landed on the right page. It seemed like not the right place, but...

**Gerhard Lazu:** Yeah. Varnish Enterprise and Varnish Software is the commercial...

**Adam Stacoviak:** Never been here before. Okay, brand new.

**Gerhard Lazu:** Yeah.

**Adam Stacoviak:** Okay, so Varnish Cache is the open source community version. Varnish Enterprise -- these are things I'm not familiar with. I just never paid attention to this detail. So you've got Varnish Cache, open source, Varnish Pro, Varnish Enterprise, Varnish Controller, Traffic Router... Okay, so you've got like different layers. So we're using obviously the openly available to every developer out there Varnish Cache. They are using, likely, highly likely, Varnish Enterprise.

**Gerhard Lazu:** Yes. And the reason why we know this is from the documentation. They have certain, for instance -- it's like, one behavior that we had to work around... As you can see here, we have different instances running. So we have Pipely running, which is Varnish. That's what -- it's like Varnish 7.7.0. But we have feeds, and feeds is - the TLS proxy, we talked about it in the last episode. The TLS proxy terminates TLS to backends. In this case, HTTPS traffic. Varnish itself cannot go to TLS backends. It doesn't terminate SSL. Varnish Enterprise does. And the reason why I know that is because that's what we use in the FastAVCL config. So Varnish in that case does terminate TLS. And that is a Varnish Enterprise feature only.

So that was like another thing that we had to solve somehow... And Nabil - again, thank you very much for helping out with that... Writing this very simple Go proxy, which uses little memories, is highly performant, and is able to terminate SSL, which then in this case Pipely connects to. And it's all running locally. So feeds, assets, and app - they're separate processes, and we can see this by... Let's just do this. Look at that. This is like the whole process tree of what's running in Pipely.

\[01:15:59.25\] So we have tmux... Obviously, that's the session which I have opened here. Bash \[unintelligible 01:16:04.07\] It's just a wrapper. It basically invokes Gorman, so it runs like all the various processes. And we have TLS exterminator, local port 5000, proxies to Changelog Flydev. We can see the process, we can see the memory usage, all of that. It's using currently -- what is it? Eight megabytes of memory. And that was asked of benchmarking. We ran a benchmark here.

TLS Exterminator, we're going to feeds, and we're going to... Which was the other one? There should be one more there. Changelog \[unintelligible 01:16:37.26\] the static assets. And then, eventually, we have Varnish.

So you have quite a few things running here just to get that experience that in Fastly's case it's just all part of Varnish. So we are bringing different components together, building what we're missing, so that we get something similar. And ultimately, what we care is how the system behaves from the outside. Do the users get the experience that we want them to have, or that we expect for them?

Alright, so... I could do this live, but I think it's easier. I can focus a bit better. So the tests - we can run them locally. Now, I did mention that we're using Dagger. So if I do dagger login changelog, what that means is I'm going to authenticate to Dagger cloud. And then everything that runs locally will be sent the whole telemetry. Like, how the behavior of the various commands, how do they change? In this case, I'm running the acceptance test locally. And by connecting Dagger to Dagger Cloud, I'm able to see all the different things that run for those acceptance tests. All the commands that get installed, all the tools that get installed, all the commands that run... And in this case, I can even see the actual requests that go to the local instance of Varnish in great, great detail. It's all real time, it's all Wasm goodness... And the tests are hooked up, too. So when I run something locally, or even in CI, it all goes to the same place, and I can understand how these various components behave. How long do they take? That's what we see here, like a trace, or the various steps. So when something is slow, or it misbehaves, I know where to look.

So the acceptance tests, they run locally in one minute and 26 seconds, and that's pretty good. So what else is left? We're nearing the end... What else is left before we can deliver this toy to Adam? That's what we are working towards. So the first thing is the memory headroom. What does that mean? Varnish, we are configuring it to use a certain amount of memory, so that it can serve as many things as it can from memory. So it's really, really fast. And I went through a couple of iterations basically, and we'll see that in a minute... The value which I set initially was not the right one. Varnish kept crashing and I had to find out what the right value is, because it's not very obvious.

Forwarding logs, that is the part which -- I think it's an important one, but it's a smaller component compared to everything else. So we will have one more process running. In this case, it'll be Vector. And Vector is going to consume all the Varnish logs, and it's going to deliver them to different sinks. That's what they're called internally.

So one will go to Honeycomb, and we'll be able to compare "Is the data the same format as we get from Fastly?" Because all the dashboards, and all the alerting and everything else should work the same. The SLOs and all of that. And are we able to send the same logs with the same format to S3, so that Jerod is able to process the metrics? And that is the important part. When you mentioned that the numbers went down - well, we're not getting those metrics from the new instance.

**Jerod Santo:** Yeah.

**Gerhard Lazu:** \[01:20:11.03\] And the last one is the Edge Redirects, and that's just basically writing more VCL, which is fairly straightforward at this point. And by the way, LLMs are very helpful. So I was using agents for this, and they really go through it like they just... Zed was very good. It was a very nice episode. I enjoy that, by the way. So stuff like that, which makes this super, super-simple; it's literally copying config from one file to another file and just reformatting it. But we have most of it. A couple of things are different, because again, our Varnish doesn't have all the properties that the Fastly Varnish has, like table lookups. And specifically, there's more like if/else clauses and a couple of other things, but nothing crazy... But mostly straightforward. And this is also going to clean up a lot of redirect rules, because they're all over the place. There's jobs, there's go-tos, there's quite a few things in our existing Varnish config.

And then the last one is the Content Purge. So we'll talk about that in a minute, but the memory - this is what it looks like, the memory. So basically, do you see -- we are looking at the memory usage of an instance of Pipely/Pipedream. And you can see that the limit is two gigabytes, and we want to be just under it. But then sometimes what happens - there's some requests coming in all of a sudden. This is like one instance that was hit particularly badly. I don't know what was happening with it, but there's lots of traffic going to this instance... And by the way, it was more like bot traffic. It felt like agents are trying to scrape it. That's exactly how it felt. They try different things, so it was all just garbage... And when we see these drops, is Varnish was crashing because it was running out of memory. It was getting OM-killed. So I had to adjust that headroom a couple of times, and now it's been stable, if we look at the actual... Let's see if we find it here. It's this one. So I'll look at the last six hours. You can see all the various Varnish instances, the memory. We never had those big drops. There's smaller drops based on data being replenished, and how it changes. We still need to understand those metrics, by the way, but that's coming. That's coming. So things have been stable from that perspective.

Cool. And... 800 megabytes. That's how much headroom we had to leave for Varnish. This was version 005. It was the last one which we pushed, and things have been stable ever since. So we need to leave 800 megabytes free, so that things don't get killed. That seems to be the goal. The number 400 was not enough.

And the pull request 12 is up there, which - we're going to send logs to Honeycomb. That is the first one. There's not much else other than just like a placeholder for it, but that's the next big thing. And we need content purge. And for this, I need to tango with Jerod on this one.

**Jerod Santo:** Mm. It takes two to tango.

**Gerhard Lazu:** Yeah, pretty much. Pretty much. So this is where we talk about "How do you imagine us integrating Oban with Fly in this case, to understand what the various Pipedream instances are?" Because we need to send requests to every single one of them when you want to purge content. There is no orchestrator, which was what was happening in Fastly. You would send the purge request, and then Fastly would distribute it to all the instances... Or not, because things weren't cached that well anyway. \[laughs\] The point is, we need now to orchestrate that purging across all the instances. So how do you think we may approach this, Jerod?

**Jerod Santo:** Well, we need some sort of an index or a list of available instances. Perhaps we could get it from Fly directly...

**Gerhard Lazu:** Yeah, there's DNS. We can send a DNS query and it will give us all the instances.

**Jerod Santo:** So as long as we know some sort of standardized naming around these instances, so they're not our app instances or whatever; it's like our Pipely instances...

**Gerhard Lazu:** Yeah, the machines themselves.

**Jerod Santo:** Then we just create an Oban worker that just says -- you tell it what to purge, it wakes up, says "Alright, give me all my instances."

**Gerhard Lazu:** \[01:24:07.16\] Yup.

**Jerod Santo:** Gets that from Fly, and then just loops over them and sends whatever we decide a purge request looks like to that instance.

**Gerhard Lazu:** Yeah. I would really like to do this maybe before the next Kaizen.

**Jerod Santo:** Sure.

**Gerhard Lazu:** I think that's a big one. Because if you think about it, it really is like these two big things. It's sending the logs and the events to Honeycomb and to S3, content purging, and that's like this piece where we need to work together on this. And then the edge redirects are really simple. It's literally just like copy-pasting a bunch of config, clearing it up... And that's it. That's it.

**Jerod Santo:** That's it.

**Gerhard Lazu:** That's how close we are.

**Jerod Santo:** That's how close we are.

**Gerhard Lazu:** And it's not even Christmas.

**Jerod Santo:** So close you can almost play with that toy.

**Gerhard Lazu:** Yeah.

**Jerod Santo:** Gerhard has been playing with it.

**Gerhard Lazu:** Yeah, I have. I mean, benchmarking is -- I mean, anyone can try it. You've been trying it. We go to feeds, we serve assets... Now we just have to do like some of the, I think tooling around it, like some extra stuff that is not user-facing...

Because the content purge - I mean, if you think about it, do we need to do the content purge? 60 seconds, that's how long things will be stale, because they get refreshed ultimately every 60 seconds. The problem with that is maybe that is too aggressive for static assets. We would like to cache them maybe for a week, maybe for a month; I don't know. Stuff like the image that we've seen, the Changelog image - that doesn't change. So that could be cached for a year. Right?

**Jerod Santo:** Right.

**Gerhard Lazu:** Unless it gets effectively content purged.

**Adam Stacoviak:** Is there a way to like classify assets as like "This will never change", kind of thing? Like, give things like buckets, like A bucket is like on that every whatever minute cycle, B bucket's like "This almost never changes, so let's just go ahead and cache that almost forever."

**Gerhard Lazu:** Absolutely.

**Adam Stacoviak:** And then C is like "These things will never ever, ever change. And when they do, it's a manual purge."

**Gerhard Lazu:** Yeah. I mean, all that is possible. The question is, what is the simplest thing that we could do, that would ensure a better behavior than we've seen so far from a CDN, and something that maybe doesn't require a lot of maintenance? So as I was thinking about content purging, I was wondering "Well, if we expire everything", let's say within... Or like if we say feeds, refresh them every minute. Static assets, refresh them every hour. The application - refresh maybe every five minutes; maybe every minute. I'm not sure. Maybe we don't need content purge.

**Adam Stacoviak:** When you say refresh, does it literally delete from the CDN, and pull it over from wherever? Or does it just check freshness?

**Gerhard Lazu:** So when a request comes in, it will check freshness when the request comes in. Which means that -- let's say a request arrived an hour ago, and the detail is 60 seconds. When the second request arrives, it checks - is that considered stale or fresh? If it's considered stale, if the detail is longer, it will still serve the stale content, which means it could be an hour long, whichever the duration is between requests... And then it will go in the background to the origin to fetch a fresh copy. So subsequent requests will get the fresh content, but never the one that checks the freshness, if that makes sense.

**Adam Stacoviak:** Does it pull it even if it's the same?

**Gerhard Lazu:** Yeah, because we are configuring the detail. We're saying "Only keep it for 60 seconds." We're not doing any comparisons. We're not doing any ETag comparisons, we're not doing anything like that.

**Adam Stacoviak:** That's too CPU-intensive to do, comparisons, like checksums and stuff like that? It's not that kind of thing? Because I'm thinking like Rsync, for example; whenever I do things -- this is not the same, but it's similar. It's like "Hey, I want to go and push something there." But you can also do --checksum, which is let me do a computation between the two things and confirm... Like, even though certain things may have changed, like updated on or whatever, but it's still the same data, it doesn't actually update it. I'm just wondering if that's a thing in CDN world.

**Gerhard Lazu:** \[01:28:17.05\] Yeah, it is. I mean, that's where, for example, the ETags come in. In an ETag header you can put basically the checksum of the actual resource, and then it will check it first. Like say "Is this ETag different than what I have in my cache?" And if it's not, then this is up to date. So it's not time-based, it is header-based. And all it does, it just goes and checks the resource on request. But it still means that the first request that comes after that object has been cached may serve a stale content. Actually, it will return a stale content. The first one will always return a stale content, because that's when the check happens. There's no background, anything, to running the background to compare all the objects which I have in memory, are they fresh or not? And this is where the content purge comes in. When you know that something has changed, you're explicitly invalidating these objects in the CDN's memory.

So let's say you've published a new feed. You know you've updated it in the origin. Then you send the request to the CDN, which I believe that's what we have today, to say, "Purge this", because there's a new copy. And then the first request is going to be a miss. It will not be a stale, it will be a miss, because the CDN doesn't have it. It has to go to the origin.

**Adam Stacoviak:** What is this -- would it hurt your presentation to go back to the what's left to do slide?

**Gerhard Lazu:** No, it's okay. Of course.

**Adam Stacoviak:** I kind of want to see that list again. Okay, yeah.

**Gerhard Lazu:** Yeah, of course.

**Adam Stacoviak:** What's left? What does it take -- what do we reasonably think is required to get to... I love the zero indexing too, by the way, of this list... Although your font doesn't let it be very straight. I'm pedantic now as a designer looking at it...

**Gerhard Lazu:** That's okay.

**Adam Stacoviak:** What's required to get all this done? How difficult of a lift is the remaining steps to put a bow on it?

**Gerhard Lazu:** Let's talk about unknowns, because I think that's -- because the question is "How long is a piece of string?" and I don't know, like, what is a string? Show me the string, and I'll tell you how long it is. And what this means is that I don't know all the properties that we need to write out in the logs to see if we have them. And again, I know that the \[unintelligible 01:30:34.13\] we don't have. I mean, that's just not a thing. We don't have that. And adding that will be more difficult than if we are okay to not have it, for example. So maybe we do that. Or maybe we just add... Wherever the request is coming -- whichever instance is serving the request, we just use the instance's location, not the client's location. So maybe that's one way of working around it. So forwarding logs, it's fairly simple in terms of the implementation. What we don't know is what are all the little things that need to be in those logs for the logs to be useful, or as useful as they are today?

**Adam Stacoviak:** And this is the dance between you and Jerod.

**Gerhard Lazu:** Actually, no. That's the edge redirects. So this is forward logs. Forwarding logs is we have to send them to Honeycomb and to S3. Honeycomb so that we understand how the service behaves, what are the hits... Like, remember all those graphs that I was able to produce? We need to be able to see which requests were hit, which were a miss... So all that stuff, I think in a day I could get the Honeycomb stuff done. I think. There's nothing crazy about it. Some things will not be present, but most of it is fairly straightforward.

S3 is a little bit more interesting, because I haven't seen that yet, and I'm not familiar with the format. But I know it's a derivative of what we get in the request. So it's just a matter of crafting a string that has everything that we care about.

And I'm going to flag any items -- if they're problematic. So honestly, I would say a few days' worth of work, I can get the forwarding logs sorted.

\[01:32:10.07\] Then, moving to the edge redirects, the question is "How far do we want to go with them?" Are you okay with the current behavior, which everything expires in 60 seconds, and we can be serving stale content? Or do we want to implement what Jerod suggested?

**Jerod Santo:** I want purgeability.

**Gerhard Lazu:** Sorry, content purge. Not edge redirect. Sorry. Content purge, that's what I meant. Sorry.

**Jerod Santo:** Yeah. Well, I do want -- I want purgeability. I just like to have the control. I don't think it's going to be very hard to do. On the logs front, I don't think we want to lose GeoIP information. I think we could relatively easily -- since we're running a background process. I'm not sure if Vector has that kind of stuff built in, or if you're just gonna have a script that does two things, that pulls the IPs, checks it against the MaxMind database, and then puts it back in there.

**Gerhard Lazu:** There is some integration with MaxMind. I know it exists. I know there's the light version, which is free...

**Jerod Santo:** Yeah. Which is all we would need.

**Gerhard Lazu:** And if that's okay -- I haven't done it myself, but having looked at the config, as long as the file is in the right place, which won't be a problem, it's pretty much like baked into the software.

**Jerod Santo:** Yeah. So if we do that, then we're pretty much -- everything else we have. But I do think we should keep that, because it is nice to know where people are listening to us.

**Gerhard Lazu:** Okay. So that will make it slightly more difficult, the light version. If we had to go for the paid version, that would be a different story, because I don't even know what it takes to get a MaxMind paid database, and get it refreshed, and all of that.

**Jerod Santo:** Yeah, I think light is fine.

**Gerhard Lazu:** Okay.

**Jerod Santo:** But we'll have to look at the details.

**Gerhard Lazu:** So my goal is by the next Kaizen, all this to be done.

**Jerod Santo:** Yes, that's I've been wanting to hear.

**Gerhard Lazu:** That is my goal. That is my goal. Like, we are honestly -- one of my title proposals was "90% Done." I feel that we are 90% done. Or 10% left. All the heavy stuff has been taken care of.

**Jerod Santo:** That's exciting. Well, my title proposal is "Tip of the iceberg."

**Gerhard Lazu:** Oh yeah, I love that. \[laughter\] Tip of the mountain, or the -- oh yes, I love that.

**Jerod Santo:** Tip of the iceberg.

**Gerhard Lazu:** CDNLC. CDN like Changelog. Or, you know, "What would Jesus do?" Now, "What would Changelog do?" How would they build a CDN? \[laughter\]

**Jerod Santo:** Yeah.

**Gerhard Lazu:** Or bottlenecks. That's also a thing. There's so many bottlenecks in different parts of the system... Including me. I'm a bottleneck, by the way. My time is a bottleneck. But honestly, I'm very happy with where we are with this. I mean, I've learned so much, and it feels like we own such an important piece of our infrastructure. We were never able to do this. And only because we were patient and diligent, and we had good friends is why we are where we are today. And that makes me so happy.

**Adam Stacoviak:** Yeah, for sure.

**Gerhard Lazu:** So many people joined this journey. So...

**Adam Stacoviak:** Yes... I love that.

**Jerod Santo:** Those are three of my favorite things: patience, diligence, and friends, you know?

**Gerhard Lazu:** Yup.

**Jerod Santo:** It gets you far.

**Gerhard Lazu:** I think so, too.

**Jerod Santo:** Thanks, Gerhard. You're leaving us on a cliffhanger here.

**Gerhard Lazu:** Kaizen 19.

**Jerod Santo:** Oh...

**Gerhard Lazu:** Kaizen 19. This is it. This is the last one.

**Adam Stacoviak:** Should have worn my shirt today. Dang, man... It's in the wash. Well, I'm excited about this. I think -- let's say next Kaizen this is production worthy... What changes -- you know, once that's true. Once that's true, it's in production, it's humming along perfectly fine... What changes for us, specifically?

**Gerhard Lazu:** Our content is available more, or is available, full stop, when our application is down. That was never the case. When the application goes down, we are down. We've seen when we had that four-hour fly.io outage in that one region, and that's when we went to two regions. That's what prompted us to go to two regions.

\[01:36:05.24\] And with a CDN that caches things properly, that would not be the case. And by the way, that's something that I wanted to test. I don't think we have time for that now... But in the next time, we'll take the application down and make sure that we're still up. Now, that's still going to be -- so users which are logged in I think will need to do maybe something clever... And again, it's within our control. We can say "Even if you have a cookie, if the backend is down, we will serve you stale content", which is public content. So that we look like we are up, but none of the dynamic stuff is going to work. So that's one thing.

I think this gives us a lot more control of what other things our application used to do. Like, do you remember all those redirects that we still have all over the application, that we couldn't put in the CDN? ...because it would have been like working with this weird VCL language that wasn't ours, like pie in the sky, as Jerod used to call it, that we don't know how it's going to behave... So we chose to put more logic in the application than maybe we wanted to, because the relationship with the CDN was always like this awkward one. And I think we had a great story to tell. I mean, just think about how many episodes we talked about this thing, and now it's finally here, and it feels like... Like, was it worth it?

**Adam Stacoviak:** What was the first Kaizen we started this? Was it a year ago? A year-ish? A year and a half? I feel like two years.

**Gerhard Lazu:** I can't remember. Well, I remember October 2023. That was quite a while ago, which is when we were seriously thinking "Hey, is this an experience that we can expect?" That was like the important milestone in this journey that kind of like started all of this.

**Adam Stacoviak:** Right. So next Kaizen is roughly July something. It's May now, right8? If it's a two-month candence...

**Jerod Santo:** Kaizen 20. That's a nice number.

**Gerhard Lazu:** Kaizen 20. Look at that.

**Adam Stacoviak:** Nice.

**Gerhard Lazu:** We have to do it.

**Jerod Santo:** We have to do it.

**Adam Stacoviak:** So it's a quarter off of October. So October isn't quite -- September would have been the next Kaizen after July, right? So it's a little bit before October, but I feel like it's like almost two years. A year and three quarters, basically.

**Gerhard Lazu:** Yeah.

**Adam Stacoviak:** All the journey.

**Gerhard Lazu:** I think if we go to -- I'll just very quickly go to Changelog and the Changelog repository in the discussions. And I think we had even a question, "Should we build a CDN?" When was that...? January 12th, 2024. That was the first one when we asked the question, "Should we build a CDN?" That started out in my mind this journey. So January 2024. So it will be one year and seven months; six, seven months.

**Jerod Santo:** Yeah, call it 18 months.

**Gerhard Lazu:** 18, 19 months. Look at that. If it was 20 months, that'd be crazy.

**Adam Stacoviak:** Seven episodes it took us to do this.

**Jerod Santo:** We can delay our next Kaizen by a couple of months...

**Gerhard Lazu:** But let's remember, there's all these other things that used to happen, and they were happening around it. It wasn't just this. I mean, one of the things that was like kicking the background... But again, just look through all the things that we went through to get here today. But definitely, between Kaizen 18 and 19, this has been my only focus, because I wanted to get to a point where we can, you know, "90% Done."

**Jerod Santo:** Let's do it. Let's do the last 10% for Kaizen 20.

**Gerhard Lazu:** That's what I'm thinking, too.

**Jerod Santo:** And then we'll celebrate. Oh, I just had a good idea...

**Gerhard Lazu:** Go on, go on.

**Jerod Santo:** And we can cut this if we don't do it... But let's all go somewhere together for Kaizen 20. Let's be together.

**Gerhard Lazu:** Okay... I'm intrigued.

**Adam Stacoviak:** I like this.

**Jerod Santo:** Like London, or Denver, or Texas, or... Something.

**Adam Stacoviak:** It's happening in July...

**Jerod Santo:** Let's get together. Let's have a little launch -- let's have a launch party.

**Gerhard Lazu:** Oh, wow.

**Jerod Santo:** Do you like this?

**Gerhard Lazu:** I like where this is going.

**Jerod Santo:** I think it's gonna be good. Okay. We'll iron out the details, but we're all into the idea.

**Gerhard Lazu:** Yeah. I like the idea.

**Adam Stacoviak:** Denver.

**Jerod Santo:** Denver would be great.

**Gerhard Lazu:** Okay.

**Jerod Santo:** \[laughs\] Alright. Maybe we'll invite some friends.

**Adam Stacoviak:** Oh, wait. Dripping Sp-- I'm just kidding. \[laughter\] That's where I live, Gerhard, is Dripping Springs.

**Jerod Santo:** To our listener, let us know in Zulip if you would go to a Changelog Kaizen 20 Pipely launch party in Denver sometime this summer. Let us know.

**Adam Stacoviak:** It's a great time to be in Denver.

**Gerhard Lazu:** Oh, wow.

**Jerod Santo:** Throw a little party.

**Gerhard Lazu:** That's quite the cliffhanger.

**Jerod Santo:** Alright. Let's leave it right there.

**Gerhard Lazu:** Okay, perfect.

**Jerod Santo:** Alright. See you in Denver.

**Adam Stacoviak:** See you in Denver.

**Jerod Santo:** Kaizen.

**Gerhard Lazu:** Always.

**Adam Stacoviak:** Kaizen!

**Gerhard Lazu:** See y'all.
