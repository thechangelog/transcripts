**Gerhard Lazu:** So we're back for the third Kaizen. I can't believe it's been 30 episodes, and I'm not the only one. Adam can't believe either than it has been 30 episodes of Ship It.

**Adam Stacoviak:** Yeah... It really is insane, honestly... I mean, this show was just an idea recently. I think anybody who makes things come to life from nothing is always flabbergasted by the creation, I suppose, once you sort of get into it... But podcasting is a little bit different, because it really is a journey. It's a journey pre-production, and it's a journey post-production. Now we're obviously post-production, 30 episodes in, and I think it's just kind of crazy, looking back and thinking this was just an idea... And then in particular to podcasts, the impact to us and to the audience. That's why I love it. That's why I love the game.

**Gerhard Lazu:** Yeah. I mean, we shipped it, right? It took us a while; it took us five months to ship the first three episodes... And then it was like a roll. What blows my mind is that my mind is on episode 40. And most people don't realize this. The next five episodes are pretty much locked in. The guests, the topics, the flow... And even the five ones after that are nebulous, nothing locked in for real, but it's coming... So for me, it's even more mind-blowing, because I'm already like in February. I'm thinking February right now.

**Jerod Santo:** Yeah, you just live in the future. I think you might be the most prepared and scheduled out podcaster in the entire universe, Gerhard.

**Gerhard Lazu:** \[laughs\] Okay... I want to think that's a compliment...

**Jerod Santo:** I'm happy that I got us scheduled out through December, but you're -- no, it is.

**Gerhard Lazu:** Thank you.

**Adam Stacoviak:** That's a compliment.

**Gerhard Lazu:** I don't want to leave myself open to unique encounters and like...

**Jerod Santo:** \[04:15\] Yeah, that's a challenge. Serendipity is taken out when you're scheduled out.

**Gerhard Lazu:** That is a great word. I haven't heard it in a while. I thought I was the only one using it. Okay...

**Jerod Santo:** Happy to surprise and delight.

**Gerhard Lazu:** Right. Well, thank you very much in which case, Jerod. I appreciate that. Thank you. And what I'm really excited about is -- I don't think many people realize this, but there's like a theme to this; there are like multiple themes. A couple of episodes, they kind of cluster together, and there's a build-up... And a lot of the episodes that we had -- like the last 10-15 ones, they're leading to something. They're building to something. And that will be the Christmas episode, episode 33, which I'm very excited about. We'll come back to that a bit later, but... One of the things which is on my mind is the incident 2. Our last episode, 20, our last kaizen, episode 20, was all about incidents. We called it "Five incidents later."

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** And there was something which I wanted to understand, which I didn't at the time... Was why was an unhealthy pod put back into service. Do you remember that?

**Jerod Santo:** I do remember that. We didn't have answers.

**Gerhard Lazu:** Yes. So my answer is we're using the "latest" tag. What that means is that if something is unhealthy, and it has to go back to the previous one, it will use the "latest" tag. But "latest" has moved on. So it doesn't keep the old SHA, the one that was working; it says "always the latest." So if you were to go back, then you always go back to the latest. Any by the way, the latest already moved, so that's like the broken version.

**Jerod Santo:** Oh, you're pointing back to the same version, which is broken.

**Gerhard Lazu:** Exactly. Exactly.

**Jerod Santo:** Why are we doing that?

**Gerhard Lazu:** Um, some corners have been cut... \[laughter\]

**Adam Stacoviak:** The honesty, I love it.

**Gerhard Lazu:** ...and that worked well for quite some time. So I have to say that even though those corners have been cut, there was like a trade-off to be made. It was like a conscious trade-off... And it only failed once. So that trade-off has bit us once.

**Jerod Santo:** Right.

**Gerhard Lazu:** But I think it is high time that we revisit the whole GitOps approach. The GitOps approach that we have, but not really have, to how we run our infrastructure. So while we do version all the manifests, and everything is in the repo, and we apply them, some manifests reference "latest", and "latest" can move. So we cannot -- basically, right now we don't capture everything we run at the SHA that we run. So Ingress NGINX, external DNS - we have versions for those, but for our app, we have "latest".

The thinking goes we always want to be running "latest". When do you not want to run "latest"? Apparently, when "latest" is broken.

**Jerod Santo:** \[laughs\] Exactly. The one time when you definitely do not.

**Gerhard Lazu:** That's when you don't want to run "latest". \[laughs\] But that's something that -- yeah, we will be investing in. I will be spending a bit of time on that, among many other things. But that explains this incident too, which - I didn't have an explanation ten episodes ago.

**Jerod Santo:** Yeah. How did you learn of this?

**Gerhard Lazu:** Um, I looked at the manifest, and I tried to understand what happens. So I went through the steps of what would happen, or of what happens in Kubernetes when -- like, the new one gets put in service, it fails, the old one crashes, and when it gets restored, it gets restored with "latest". So that's what happens.

**Jerod Santo:** \[07:56\] So my developer brain sees something like this, and I think infinite loop. Is that going on here, or does it just fail? Because if it runs "latest", "latest" is broken, it runs "latest", "latest" is broken... Does it just keep doing that over and over again?

**Gerhard Lazu:** Yeah. So in our case, what happened was that the version that was running - that crashed. Because it's just meant to restore it, right? It crashes - not a problem, it will come back.

**Jerod Santo:** Right.

**Gerhard Lazu:** But when it comes back, it doesn't know which version it should come back with, because it has "latest", and it resolves that when it boots. And "latest" has moved along, which is where the problem comes from. So we need to capture the version of the app that we want to run. Not the app, it's the app container image. Currently, because we use "latest", that always changes. So yeah...

**Adam Stacoviak:** That's a challenge.

**Jerod Santo:** It's always nice to get answers to mysteries...

**Gerhard Lazu:** Yes. I love a good mystery, especially when I have an answer for it...

**Jerod Santo:** Exactly.

**Gerhard Lazu:** Otherwise it drives me crazy. I hate it. Like, "Oh, \*\*\*\*! What's the answer?!"

**Jerod Santo:** It's like that show, Unsolved Mysteries, which I always avoided, because... Come on, give us the solution already. Have you guys ever watched that one? It's probably dead now, but back in the day they would show these mysteries and they're like, people who are actively being sought by FBI, or whatever... And there's no solution. At the end they're like, "If you know where this person is, please let us know."

**Gerhard Lazu:** Unsolved cases.

**Jerod Santo:** And I'm always like, "I want the solution!"

**Adam Stacoviak:** Yeah. It's those shows that don't have endings essentially that get me. It's like, "I can't watch that..." It drives me crazy.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Okay... So what are we doing to solve this then? If "latest" can't be used, how do we uncut that corner?

**Gerhard Lazu:** So right now we have Keel.sh, which basically watches the Docker image updates, and when there is an update, it will just basically update itself. But what we have in the deployment, it's also "latest". So we need to use GitOps properly. What that means is commit in the manifest the version of the app that should be running, and that should automatically be applied, which is where Argo CD comes in, or something like that. I'm thinking Argo CD; maybe there will be something else.

So basically, the infrastructure gets continuously reconciled with what is versioned in the repo, and what we version in the repo is the app updates. So when a new image is built, there will be a new push to the repo, a new commit to the repo, which has the exact version of the app that should be running, and there'll be a reconciler which will make sure that that is true. And that's currently what we don't have.

So finish GitOps... We're 90%, maybe 95% there. Because we version the manifests, but we don't update them when the app updates. And we don't apply them when the app updates. So that's what's missing.

**Adam Stacoviak:** Is there like one place to learn exactly what the requirements are for GitOps to comply, I suppose? You could search on Google what is GitOps, and there's a lot of pages that describe what is GitOps.

**Gerhard Lazu:** I think GitOps.org is a good resource. That's the one that I would recommend for learning what GitOps is. And in a few episodes we'll have Alexis from WeaveWorks, where we'll be talking all about GitOps.

**Adam Stacoviak:** So GitOps.org doesn't resolve to anything for me...

**Gerhard Lazu:** GitOps.tech. That's the one.

**Adam Stacoviak:** So this is what you would consider the canonical resource for learning about GitOps at least... It's gonna link out to WeaveWorks, it's gonna link out to a PDF, an ePUB book... So I guess this is a book, too?

**Gerhard Lazu:** So the last time when I've seen it -- I'm seeing this has a few updates. I wasn't aware of the book, so that must be something new...

**Adam Stacoviak:** It does say "We've just released our short book on GitOps."

**Gerhard Lazu:** \[11:57\] There you go. So that's the new element which I wasn't aware of. If you scroll down, you see push-based deployments, pull-based deployments, which is what we have, by the way... We have a pull-based deployment model. And WeaveWorks were the ones that coined the term of GitOps, and this is the canonical resource, for me at least, when it comes to GitOps.

**Adam Stacoviak:** Okay. So they have this graph down there... Or, sorry, this -- what do you call this thing? Infographic, I guess... A graphic to look at, essentially outlining what --

**Jerod Santo:** Is there information on the graphic?

**Adam Stacoviak:** Say again?

**Jerod Santo:** Does the graphic have information on it?

**Gerhard Lazu:** Yes.

**Adam Stacoviak:** It does have information on it.

**Jerod Santo:** Oh, that's a classic infograph then.

**Adam Stacoviak:** That's right. It's really just a graphic of what the flow is, from application repository all the way to deployment, what should happen in there. So are you seeing that we're somewhat adhering to this push-based deployment graph here, this idea?

**Gerhard Lazu:** Yes. The difference is that in the pull-based deployment there's an operator that observes the image registry, and then updates the environment repository. The environment repository is basically which stores the config for everything that's running in an environment. So basically, those would be our Yaml manifests. Currently, that doesn't happen.

**Adam Stacoviak:** And the reason why this flow is prescribed is to prevent things like calling on "latest" when "latest" is broken.

**Gerhard Lazu:** Yes. Or "latest" changes. Because you don't know what you're running, so you're trying to capture your production as much as you can. Not as much like fully, like to the SHA. Not even to the version, because when you tag an image with a version, like v1.0, you can update the tech to point to a different SHA. So you want to point to a specific SHA, which will not change. It's like a Git SHA, but it's the equivalent in container images, which is what we would want.

**Adam Stacoviak:** Which is important for recovery from a disaster. So in this case, a disaster happened, the application failed, you needed to reboot, you rebooted, but you called upon latest, and latest wasn't right... So if you would have had continuity in place, the operator would have told the environment repository which SHA to point to, essentially, so that when you reboot, you don't pull from a broken "latest".

**Gerhard Lazu:** Yeah. So a couple of things had to go wrong in our case when instant 2. The version that was running - that one came down as well. So the version that was running came down, it had to be rebooted, the pod, and when the pod was restarted, because it was pointing to the latest, it pulled the broken version. So that happened as well, on top of latest being broken.

So it needs to be like a sequence of events for this to happen, which is what happened in our case, and that's why those are rare. So as I mentioned, in the year since I had this set up, it only happened once. It was enough for us to have an incident. It wasn't a major one, it was just a minor one, because production was up, everything was cached, we served from the CDN... We ARE serving from the CDN everything, except the authenticated users, except the dynamic requests. So not like the gets. This was like a post, a patch, and we have quite a few of those. I didn't actually realize how many of those we have... Because whenever we visit a link, like news and press, that's the most popular one we keep hitting; we keep doing a lot of posts. So there's that.

But anyways, it was like up for anyone that was casually browsing it; people could listen to podcasts. Only a few URLs that were not in the CDN were not available.

**Adam Stacoviak:** That's a good -- to your point, Jerod, the unsolved mysteries... If you listen to Kaizen 20, we solved some more mysteries for you. So if you left that conversation thinking "Gerhard, what actually happened behind the scenes?" Well, we've kind of recapped some of that, so... The mystery is solved for those unsolved mysteries of Kaizen 20. You're welcome.

**Gerhard Lazu:** \[16:12\] But I do have very exciting news... So not only we solved that mystery, we did something even better. And I think we discussed about this also in episode 20, about a tighter Honeycomb integration. So one of the things which we did since - we integrated Honeycomb with Fastly, with our CDN, so we can see a lot more details about how the CDN behaves. Which are the cache hits, which are the misses... I don't mean "misses" like the missus; I mean like M-I-S-S-E-S. There's no U there.

**Jerod Santo:** Solved clarification...

**Gerhard Lazu:** Yeah... \[laughs\] And we can just drill down, observe a lot of stuff... That's amazing. The level of visibility which we have right now - we can answer so many questions, including the pull requests which we had open. I'm going to fire it up now, because I forgot the exact number. There were some new pull requests since.

This is issue (not pull request) 383. "Why do some mp3 requests take 60 seconds or more, while others complete quicker?" So we have an answer to this question, as well as full visibility into how the CDN behaves, the app behaves, the Ingress NGINX, how it behaves and how they interact among one another... And some of the details which we get are fascinating. I can finally be properly curious in prod, and I didn't know what it meant until I did this integration, and some of the level of detail is just amazing.

We can for example see the top URL's, the top episodes by browser, by user agent, by data center, by country, by city... It's just so much insight. And this is just like the content stuff. Then it comes to the CDN. As I mentioned, the cache status; how many hits versus how many misses. We can slice and dice by audio requests. And rather than building dashboards, we can do something even more amazing, which is literally start with a query, and keep asking questions, and keep getting answers, until we understand what's happening.

**Adam Stacoviak:** So this is the first time we've been able to have observability to this level on our CDN. So to recap, we leverage it quite well, because all requests go through Fastly first, prior to hitting our application. So it would make sense that if you make that choice and lean that heavily, trust that much on your CDN - in this case we do; we trust Fastly, they do an amazing job for us, for many years now... But now we actually have observability into various specifics of how it operates for us, where we never had before.

**Gerhard Lazu:** Correct.

**Adam Stacoviak:** And this is thanks to the details and visibility that Honeycomb gives us.

**Gerhard Lazu:** Correct. Yeah. That was one of the big improvements since episode 20. And we can see the slowest requests, and we understand that the XML ones, like the sitemap, or the feeds that are the slow ones, they take 5 seconds sometimes to load. The website is fairly fast; the only time when it gets slow is when we serve static assets from the website. So in the Phoenix app, when there's a cache miss in the CDN, it has to go to the app - actually, Ingress NGINX... Ingress NGINX has to go to the app, and the app has to store a PNG, or JPEG. It's usually a PNG. That's the one that took quite a bit of time. So I was looking at it -- was it earlier? Yes. Let me find it, it's right here. That was an interesting one. It was icon-small... No, it wasn't that one. Time elapsed. This was it. It was actually a GIF. News item, 1.4 minutes to serve it. That's how long it took to serve that news item GIF, all the way to Hong Kong. So someone from Hong Kong was accessing it...

**Adam Stacoviak:** \[20:37\] They were waiting that long, huh?

**Gerhard Lazu:** They were waiting that long because they had to go all the way to our data center in New York.

**Adam Stacoviak:** It’s probably a big GIF, too.

**Jerod Santo:** Yeah, they always are. I mean, GIFs are just large files, unfortunately.

**Adam Stacoviak:** Yeah, they tend to be megs. At least a meg, sometimes ten. Maybe 50, but...

**Gerhard Lazu:** Let's see... How big is it? We have that as well, that information. Body size... 18 kilobytes? No, it can't be.

**Jerod Santo:** No. Megabytes.

**Gerhard Lazu:** Like 18 million... Let's see.

**Adam Stacoviak:** Should we ask Siri to do some math for us again?

**Gerhard Lazu:** Yes, Siri. 18 million bytes.

**Jerod Santo:** We should ask Honeycomb to do that math for us.

**Gerhard Lazu:** Right. So that's the one thing which we need to set. I was setting some derived queries... But let's see. But not for this specific thing. 17 kilobytes -- 17 megabytes.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** We have a 17-megabyte GIF. And serving it to Hong Kong, that’s how long it takes.

**Adam Stacoviak:** It’s pretty heavy, yeah.

**Jerod Santo:** Yeah Sometimes we do lazy-load those, so you're not actually waiting end user experience. You can read what the news item is, and then as long as it takes a minute and a half to read, by then the image is loaded; it's still too long, but...

**Adam Stacoviak:** Yeah. Well, I don't think anybody's optimizing for reading -- unless your image, or something like that. Maybe you're optimizing for those things to be super-fast; large GIFs like that, for example.

**Jerod Santo:** Well, if we had it on a CDN in Hong Kong, it would be much faster.

**Adam Stacoviak:** Okay. That's the question I was thinking of asking... Like, okay, the observability lets us know this event happened, right? The event being this GIF was served from New York to Hong Kong at this speed, it's this size, etc.

The other question is it was a miss - so why was it a miss? These are questions we'll begin to answer ourselves as we dig into this. Okay, why was it a miss? Okay, now we know, and we’ve figured... What was the answer to that? Why was it a miss? Why was it a cache miss?

**Jerod Santo:** First, Hong Kong visitor of the day... Or it's expired, or who knows...

**Gerhard Lazu:** Yeah. I mean, those are kept in cache right on Fastly, and they can't cache like the entire Internet. Even for us, they can’t the cache all of our content.

**Jerod Santo:** They can probably cache all of our content at all of their pops, and barely ever notice, don't you think?

**Gerhard Lazu:** They could, but I think the reason why they're not is because they have to shed some of the extra content that is not accessed within, I don't know, x hours, days, whatever. So they don't guarantee that everything will be in the CDN all the time, even though our headers asked for it to be in CDN for a few weeks, I believe or something. I'm not sure exactly this one... We can check to see how long it should be kept in the CDN for, this specific request, but as far as I remember, it’s just meant to be a few weeks at most. So if that wasn't accessed in a few weeks, then it may expire when it's requested again, which will be a miss.

**Jerod Santo:** Right.

**Adam Stacoviak:** Why don't they just make people pay for that desire then? I guess if you're a larger site, with much more assets than we have, then maybe that becomes more and more expensive... But it's in our affordance right now to ask them to do that.

**Gerhard Lazu:** Yeah, that’s a great, great idea.

**Adam Stacoviak:** \[24:02\] So why wouldn't they offer it as a service, like "Hey, just cache the whole thing indefinitely, and I’ll pay for it."

**Gerhard Lazu:** I would love us to be able to do that. All our stuff should be cached all over the world. I agree.

**Adam Stacoviak:** What’s our assets on stuff like that? What would be the weight, in terabytes?

**Gerhard Lazu:** No...

**Jerod Santo:** No.

**Adam Stacoviak:** Or in Gigs?

**Gerhard Lazu:** 100-150 Gigs? Not that much.

**Adam Stacoviak:** That's pretty reasonable. I mean, I can go buy a 14-terabyte hard drive for under 400 bucks.

**Gerhard Lazu:** Yeah, but you need to multiply that times how many times you want, how many ops you want.

**Adam Stacoviak:** That’s true.

**Gerhard Lazu:** But still, you’re right, it's not a lot of data. I wish it was cached, and I wish we had an e-tag implementation, so that if the content doesn’t change, it won't expire from the cache. I mean, we have it configured, we have cache shielding, or pop shielding, which means that there should be at least one pop where this is always kept in cache. So if another one doesn't have it, it should get it from that pop, rather than come to us.

**Adam Stacoviak:** Right. And their network’s probably faster than ours.

**Gerhard Lazu:** Of course, yes.

**Adam Stacoviak:** Right. It should be at least, by design.

**Gerhard Lazu:** It's optimized, right? I mean, they should -- they have all the optimization, they have the best routing between their pops, which is how it should be. So you're right. But this, we've never had before, and this is the exciting thing. Now we know why our 99th percentile -- why we have such a bad tail latency. Because sometimes this stuff happens. We didn't have this visibility before, and that's the exciting stuff.

**Jerod Santo:** When does the law of diminishing returns come in?

**Adam Stacoviak:** The now known from the unknowns

**Gerhard Lazu:** I didn't hear any of you. \[laughs\] Do you want to try again?

**Jerod Santo:** When does the law of diminishing returns come in? Because you know, slow clients are slow. We can't make every request fast. Where do we know, "Now, we're just basically toiling away at something that's not worth our time anymore", versus "This is actually a valuable optimization"?

**Gerhard Lazu:** I'm really glad you brought this up, because we have -- this is something which we weren't able to see before... We have Apple Watches consuming MP3 files. And they are slow, so they take many, many minutes. Our longest consumer was something like 40 minutes. Imagine someone being connected to our website and consuming MP3's for 40 minutes. It was an Apple Watch, and there was a couple of others like that.

So when it comes to content that is not in the cache, I don't think we should spend much more time on that, except if we're talking about using an object store versus local store, but that's like a separate conversation. However, we should absolutely try to serve as much as we can from the CDN, especially when it comes to the static content. GIFs, PNGs, MP3s - all that stuff should be served directly from the CDN, which is exactly what Adam was suggesting.

**Adam Stacoviak:** I mean, it'd be different if we had an unreasonable ask from them; if it was like, terabytes and terabytes of data - that's unreasonable. But if it's like, sub-200 gigs, that's not unreasonable to ask a CDN, to in perpetuity hold that until it's expired.

**Gerhard Lazu:** What are you thinking, Jerod?

**Jerod Santo:** Well, this is what I've been saying for years. That's what I had been thinking. \[laughter\]

**Gerhard Lazu:** Okay, you're being facetious now, right? Facetious...

**Jerod Santo:** No. Facetious... No, I'm not. I've been saying it for years - can't they just cache our stuff forever, and just keep it and never request it again until we tell them that it's fresh? I understand that, okay, if we're going to do what Adam proposes, you're kind of becoming a snowflake, right? Like, "Hey, Fastly. Please treat us differently." But isn't there just a way that they can scale to all their customers, to let you say, "Don't ever request this again, please"?

**Gerhard Lazu:** I would love to have that conversation with someone from Fastly. I've been trying for years.

**Jerod Santo:** That’s what I’ve been saying for years. I don't want them to keep asking me for new --

**Adam Stacoviak:** Well, I don't want them to treat us differently either.

**Jerod Santo:** ...my ShipIt-28.mp3 hasn't changed, it's not going to change. It's never going to change. It’s never going to change.

**Adam Stacoviak:** \[28:07\] Right. We know it's never going to change. So, just keep them.

**Gerhard Lazu:** I will not name any names, the people that I reached out that I knew within Fastly, but if a listener knows someone within Fastly that wants to have this conversation, I would love to do that improvement... Because Honeycomb - this new integration showed us how much can improve within the CDN. And we are reaching diminishing returns within the app, within our own infrastructure, where the biggest wins right now are in the CDN.

**Adam Stacoviak:** Right.

**Jerod Santo:** For me, imposter syndrome sets in when I think "Surely, we're holding it wrong." You know, like the Steve Jobs response to the antenna on the iPhone 4 is "You're holding it wrong."

**Gerhard Lazu:** Yes.

**Jerod Santo:** I feel like we're just not using Fastly right...

**Adam Stacoviak:** All these years.

**Jerod Santo:** I mean, I understand how to set HTTP headers, and we use e-tags, and we set cache control, we've tweaked some stuff, but I just feel like we're not using it right for some reason, and that's why part of me is just wondering... That's where I like the toiling away, like "Well, how many times can we tweak the way that we tell Fastly to do things?" But I don't know. I just thought this is how CDNs work, is like "Hold on to it till it's fresh, please." That seems like a button you click in a click op somewhere, but I don't know.

**Gerhard Lazu:** Yeah. So I'm surprised when content that should be cached for -- now that I think of it, some of it is even cached like for a whole year. The stuff that we know is not going to change. And that content is being requested, even though it was requested before, and it's requested again, and it hasn't passed a year. So what's going on Fastly? I can’t answer that.

**Jerod Santo:** Right. I mean, our old episodes, the long tail of listens on our shows is bewilderingly awesome. Like, you go back to a show and you're like, "Wow, 33 people listened to this today", and it's four years old. Every day, our MP3s are being requested, pretty much all of them, plus or minus some outliers. So they shouldn't be expiring, unless you set the expiration to an hour, or 30 minutes, or six hours. But if we're setting it to a long time, I do not understand why we have so many cache misses.

**Adam Stacoviak:** Especially, I mean, given -- it'd be different if our content was highly volatile in terms of change. We're a media company, the things we create are long-term artifacts, so just by nature of the business we're bringing, like the character type we are, the persona, so to speak even, we know that the reason we're using the CDN is to be globally fast. And the data we're giving them to be globally fast doesn't change, if ever. So we want to be globally fast forever, and pay for that. And we put Fastly in front of everything to enable that, so that even if our app is down, we're still serving cache pages, and the same thing for our actual files, like MP3s and GIFs and things like that. Just by the nature of us being a media company or a media entity, the things we have tended to never change.

I think we've changed like an episode, just to go back and update... We call it a remastering, and we were doing that for a bit. We were remastering some of these shows Jerod was talking about, that had high degrees of listens, that are several years old. So rather than having that listener go back and listen to an old show and still be sort of like unimpressed by the audio quality in comparison to now, we went back and remastered those.

**Jerod Santo:** But we can also programmatically purge endpoints from Fastly by way of our system. It'd be easier to code that up. I just don't -- I've never done it, because I feel like it keeps purging anyways. And every once a while, I'll hop in there and just purge one manually. Especially if it’s released...

**Adam Stacoviak:** I'm with you, Jerod. I feel like we're holding it wrong. I do. I feel -- I don't know why we're holding it wrong. It seems like the logical way a CDN should work is the way we think it does work... Yet we are holding it seemingly wrong.

\[32:12\] So yeah, listeners, if you're out there, if you know somebody at Fastly who knows more than we do... We have connections in there, but we've hit certain dead-ends on that front... But we'd love to have some help... Like, Fastly, come on this show. Come on YouTube with Gerhard and triage how we use our CDN and help us de-antennagate ourselves and hold it right. \[laughter\] You know what I mean? Let’s not CDN-gate ourselves here.

**Gerhard Lazu:** Over the years, we've had some epic support threads with Fastly. Epic. Some of them have not been solved.

**Adam Stacoviak:** Unsolved mysteries.

**Gerhard Lazu:** Many unsolved mysteries when it comes to Fastly.

**Adam Stacoviak:** Just hold it right, please.

**Gerhard Lazu:** I'm looking... So I think we're holding it right, but I think there's stuff happening within Fastly which we don't fully understand.

**Adam Stacoviak:** Right. And maybe that's just how it works. It doesn't make sense why it is that way. So if it works that way and that's how it does work, that seems odd, given the reason you'd use a CDN.

**Gerhard Lazu:** I think we can Kaizen Fastly. I think that's what you're getting to.

**Jerod Santo:** Yeah.

**Gerhard Lazu:** Because in the last 24 hours, we had 3,000 misses on MP3 files. This is in the last 24 hours.

**Adam Stacoviak:** That's incredible.

**Jerod Santo:** It doesn't make sense.

**Gerhard Lazu:** It doesn't make sense. Exactly.

**Adam Stacoviak:** The whole reason we engaged with Fastly in the origin, before we got to what we could do application-wise, was to deliver our MP3s globally, fast, forever. So to have 1,000 misses in the last 24 hours is egregious.

**Gerhard Lazu:** 3,000.

**Adam Stacoviak:** Especially--

**Gerhard Lazu:** That's crazy. I agree with you.

**Adam Stacoviak:** Triple that. 3x that. Because if we can have one pop -- so let's just say it’s a size requirement. Too much data, forever... Okay, sure. We have to purge somewhere. Fine. Then have one pop be the canonical. That one is forever. And then you can miss somewhere else and pull from your own pop fast, not from us.

**Jerod Santo:** Well, we shield through LaGuardia, so we should have that. LaGuardia should have it, if Hong Kong doesn't. **Gerhard Lazu:** Exactly, yeah.

**Jerod Santo:** So I'm not super-clear if that still shows up as a miss, if Hong Kong misses but grabs it from LaGuardia, and it doesn't grab it from us. Gerhard, you know the difference? But—

**Gerhard Lazu:** Yeah... So I'm not sure, but that's something worth digging into. This is exactly—

**Jerod Santo:** Yeah. Let’s solve this mystery.

**Gerhard Lazu:** Exactly. How does this stuff work within Fastly? This is the first time we could have a really good conversation about this, because of this integration.

**Adam Stacoviak:** We have data now. We have wisdom. Before, we had assumption. Now we have like, "Look, here's Honeycomb."

**Gerhard Lazu:** Facts. Hard facts.

**Adam Stacoviak:** "This is where it goes. This is how it works." Yeah.

**Gerhard Lazu:** It’s amazing.

**Adam Stacoviak:** Even asking for support makes it so much harder, when you have no visibility into what's going on. Now we do, so we are armed with more data to support ourselves differently in our argument back like why things are not working the way they should be, or how we think it should be.

**Gerhard Lazu:** Yeah.

**Break:** \[35:19\]

**Adam Stacoviak:** So Jerod and I got some brand new computers recently, brand new M1 Macs, and like any new Mac, you take your sweet time setting it up... And in my case, Jerod, you may concur with your case, I'm doing it all manually. I'm not scripting anything this time, I want to take my time... Because the M1 Mac is so different, even Homebrew has a couple -- it has one slight variance in how you set it up with what you add to your, in my case, and I think yours too, Jerod, the .zshrc file. So there's a couple particulars to deal with, and I haven't gotten to the point yet to set up the app. Actually, I have, but I haven't done it yet. So my thought’s like if I'm setting up changelog.com for a dev environment on my new Mac - how? What's the way? The readme isn't super clear, there's a Docker path I'm not sure is still working... So what do we do? How do you do it? Have you set it up, Jerod? Where are you at?

**Jerod Santo:** I have not set it up yet, because I haven't needed to. I still have my old laptop right here, that I can use. I would not use Docker, because I didn't use Docker last time.

**Adam Stacoviak:** Okay.

**Jerod Santo:** I would set it all up individually. But maybe I'd even just procrastinate until we're on Codespaces. What do you think, Gerhard?

**Gerhard Lazu:** That's exactly what I'm thinking.

**Adam Stacoviak:** It’s even better.

**Jerod Santo:** \[laughs\]

**Gerhard Lazu:** That’s exactly what I’m thinking. The reason why—

**Jerod Santo:** I don’t even want to set it up if I don't have to.

**Gerhard Lazu:** Exactly. I uninstalled Docker about six months ago, or four months ago, something like that, and it's not coming back on my machine, or any other machine, like my local machine... However, I'm running Docker on Linux, on a Linux server in Linode, which is my development machine.

**Adam Stacoviak:** Is that right?

**Gerhard Lazu:** That's right. So what we want is GitHub Codespaces, where we can run our own infrastructure. So rather than using the Azure VMs, which is what runs GitHub Codespaces, we want to be running our own, whether it's Linode, or - and this is where the big one comes in - Equinix Metal.

**Jerod Santo:** I don’t think they’ll go there, will they? GitHub.

**Gerhard Lazu:** Well, no, they won't, but like, can they allow people to use, like -- you know, as you can run your own GitHub runners with the GitHub Actions... So you should be able to run your own hardware, wherever it is, with GitHub Codespaces. I think it's a natural next step. Because whatever needs -- because you pay for the hardware. That's where the cost for the GitHub Codespaces is... And that's fine if you want the simplicity. But if you want to run, for example, on the ARM servers, or fast Intel servers with dedicated CPUs, dedicated NVMes, 20-gigabit networks, why wouldn't you go to Equinix Metal? So that's what I'm thinking... Because in that world, everything is amazing.

**Adam Stacoviak:** \[40:18\] So I guess then—

**Gerhard Lazu:** Or it will be when I’m finished with it.

**Jerod Santo:** It’s all rainbows and—

**Adam Stacoviak:** Isn't the thing with GitHub Codespaces that is their -- like, their thing is their infrastructure, so their VMs, their hardware, and it's optimized... Obviously, it's probably Azure-backed, considering their parent company, etc. But isn't that what they sell? Are they selling the agnostic route to dev environment to the cloud? They’re selling—

**Gerhard Lazu:** Not currently—

**Adam Stacoviak:** ...Codespaces, which is hosted by them, right?

**Jerod Santo:** Right. It seems like it's natural for us to want that, but it doesn't seem natural for GitHub to want to offer that. So maybe it's like a Cloudspaces alternative which is genericized, is the answer.

**Gerhard Lazu:** So there’s GitPod, I’m aware of that.

**Jerod Santo:** Yes, right.

**Gerhard Lazu:** There's Tilde.dev as well. There's a couple like that... But what I really want to do, having listened to the GitHub Codespaces episode on the Changelog (I forget the number), I tweeted Cory, like, "Hey, we should talk." He said, "Yeah, sure. Email me", and I didn't have time to follow up on that email. But I really want to do that, because I see the potential of GitHub Codespaces, but I would use it slightly differently now. We're always up for partners, aren't we, Adam?

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** So if GitHub wants to sponsor Changelog with the GitHub Codespaces, we'll be more than happy to use it, and help it improve. But my first go-to would be what I know, right? Like, bare-metal servers somewhere, or Linodes, or wherever, spin them up... And that's where Crossplane comes in. There's like a couple of things happening in the background that will start coming together. There's an Equinix Metal episode with Zac coming. Number 29, I think. Actually, it came out... By the time we're listening to it, it came out, the episode with Zac.

So there's like a couple of things coming together, which make me really excited, and which I think setting anything locally for development - it is a time sink, and should have environments which are pre-built for development in an automated way, and you just click a button and you have it. And when you're finished with it, you take it down, and you don't have to worry about it. You don't have to worry about upgrading PostgreSQL, or are you running the right version of Erlang, or should you install Docker, or put up with Docker desktop updates, which have been getting really annoying in recent months, which is one of the reasons why I uninstalled it.

**Adam Stacoviak:** My main issue has always been -- I manage Homebrew, I upgrade some things in there. I don't want to specifically upgrade particular things, so I say ‘upgrade all’ essentially, or just ‘brew upgrade’ after update, and next thing you know, Postgres is updated to the latest and my Postgres is broken... And that was always the culprit. And then a couple times, it was Erlang, and that kind of thing.

Because my local hackery things that aren't really connected to a dev environment shouldn't overlap with my actual dev environment for the application. I'm kind of in that weird space where it's like my truck - I have a gas-guzzling Ford F-150. I love the new EV F-150, the Lightning coming out. I want to buy a new truck sometime soon, because I’m due, it's like seven years old... But I don't want to buy a gas vehicle. I want to buy an electric vehicle.

\[43:49\] So I don't want to spin up my own dev environment. I want to use Codespaces, or some prescribed dev space that I don't have to worry about, that's always just fresh... Because I’m me, my identity is me, you know my trustworthiness, or the application should, or our config should, so I can then get access to a certain database maybe a drive-by contributor shouldn't get access to... That kind of thing. And even drive-by contributions - those are harder to do probably. Maybe through dot dev it's somewhat easy if it's a typo or something like that. But if it's a contribution, I think it's much easier for us.

**Gerhard Lazu:** So I'm thinking of the GitHub Codespaces experience, but maybe not necessarily running on Azure as it is today. But I'm not suggesting that we should all set up some bare-metal servers. No way. It's an approach that our contributors should be able to use as well. And you're right, identity should be baked in. But that's like the long-term. Short-term. I think you want the short-term. The short-term answer is use your old machine. \[laughs\]

**Adam Stacoviak:** I would say short term answer would be "Can we get sit up on Codespaces in their current blessed way?" and hope for a future where they have a more infinitely configurable version that's for the ways you want to use it. So I'd say let's re-engage with Cory and GitHub on that front. I know they’re willing, we've talked to them recently, so we know they're willing. That gate has not closed. They want us to be on Codespaces and leverage it that way.

**Gerhard Lazu:** Amazing.

**Adam Stacoviak:** So I'd say let's use it the way they want us to use it currently, get going that way, and then whenever it needs to scale in different ways, then it can. Or you can use GitPod to do it your own way with Equinix Metal, because that's what GitPod does, right? GitPod lets you be anywhere; they're agnostic. Whereas Codespaces is simply GitHub, simply Azure infrastructure.

**Gerhard Lazu:** I'm happy if the Changelog.org would have this capability, if GitHub Codespaces was part of the Changelog.org, and we could use it out of the box. I think that would be amazing, right? So if we can contribute to that, and we can make sure that anyone wanting to contribute that the Changelog app, we could get that working very well with Codespaces, which currently isn't... That, you're right; that is a good short-term solution. So I think you just gave me a Christmas gift, Adam.

**Adam Stacoviak:** I'm going to hold on to that. I’m not going to set it up locally. I’m going to wait -- I’m going to wait for my Christmas gift, which is Codespaces wrapped in a bow.

**Jerod Santo:** The challenge with this path being short-term is that Gerhard is the most organized podcaster in the universe, and he's scheduled it into March and April. \[laughter\] So that doesn’t sound very short-term to me.

**Gerhard Lazu:** I’ll need to make room. I'll need to -- I don't know, someone cancel an interview, maybe... \[laughter\]

**Adam Stacoviak:** No, here's what can happen... Honestly, behind the scenes, what happens is you may plan that way, but you have got to plan for a buffer; even if you have it planned out, there's always a -- Jerod and I have done this, too. We've had it planned up several weeks to a month, and something happens, and we're like, "We’ve got to go change the order."

**Gerhard Lazu:** Yeah.

**Adam Stacoviak:** And so because you get to run the show, you can make those calls.

**Gerhard Lazu:** Yes.

**Adam Stacoviak:** Just because you're setting that motion. Now, if you've made a promise or whatever, reach back out to them and say, "Hey, I'm sorry. We've got a timely episode coming out. I need to bump you back one week." They're probably not going be upset. And if they are, give them a free T-shirt, or whatever it takes to make them sweet

**Gerhard Lazu:** How do you do that? I don't know how to give them a free T-shirt.

**Adam Stacoviak:** You tell me or Jerod.

**Jerod Santo:** We'll talk offline. We'll talk offline.

**Gerhard Lazu:** Alright. Okay.

**Adam Stacoviak:** It's too easy. And we'll make it happen. It’s too easy.

**Gerhard Lazu:** Okay. It's amazing, what a free T-shirt will do... \[laughter\]

**Adam Stacoviak:** Yes. We love our listeners, and we love our guests just as much, if not more... So if ever we have to apologize, we’ll do it with very sweet kindness.

**Gerhard Lazu:** Alright. GitHub Codespaces in December, here I come.

**Jerod Santo:** There you go. Let's make happen.

**Gerhard Lazu:** Let’s make it happen.

**Jerod Santo:** Christmas is coming early. Or right on time. So I think the actual short-term solution is brew install Elixir, brew install Postgres, clone the repo...

**Gerhard Lazu:** I don't think that's going to work.

**Jerod Santo:** Why not?

**Gerhard Lazu:** I guess the versions have changed. I never even tried—I think by default PostgreSQL will be version 13, or maybe even 14 if it's out yet. I don't know whether things will work with that.

**Jerod Santo:** Oh, it does. I’m running it.

**Gerhard Lazu:** Are you? Okay.

**Adam Stacoviak:** And the readme is a little off, too.

**Gerhard Lazu:** The readme is off. Yes.

**Adam Stacoviak:** ...in terms of what it prescribes. It just said dependencies are Elixir and Erlang; it doesn't say which Postgres, and everything else.

**Jerod Santo:** \[48:16\] Just wait for the transcript to come out, of this episode, and then follow that. I'm telling you, brew install Elixir, brew install Postgres, clone the repo...

**Gerhard Lazu:** Okay. So first step--

**Jerod Santo:** `mix deps.get`

**Gerhard Lazu:** ...Gerhard gets a new MacBook M1 for Christmas. \[laughter\]

**Jerod Santo:** I already got one, Gerhard. I can do this work.

**Gerhard Lazu:** Alright. Just post it to me. \[laughter\]

**Jerod Santo:** Well, unfortunately, with the ship dates on these new MacBooks, I also don't think that's a short-term solution either.

**Gerhard Lazu:** I know. 4-6 weeks. I've seen that. Yes, I know what you mean.

**Adam Stacoviak:** You had to order it like a month ago to get it on time for Christmas.

**Gerhard Lazu:** Yes, I know.

**Jerod Santo:** Alright, so the short-term solution is keep your old machine around, and use that till we have a medium-term solution.

**Gerhard Lazu:** Exactly. Yes.

**Adam Stacoviak:** Which I do. It's right next to me. It's no problem to use it. But, like anybody, I want to get set up on this new machine and never look back to the old, and just format the drive and roll on.

**Break:** \[49:15\]

**Jerod Santo:** Last Kaizen we talked about moving our uploads to the cloud, specifically S3 is cloud. I wanted to give a quick update on progress there. I wanted to have it done by the time we recorded this, and the fact that Gerhard, you and I met (was it last week?) to discuss a game plan to getting us from where we are to 100% cut over. We did not quite get there, and that's because I had a yak shave instead. So I thought I would take you guys on a little journey.

**Gerhard Lazu:** I did a few as well, so it's okay. Your yak shave held yak shaves. It's all good.

**Jerod Santo:** \[laughs\] So... You know, I only have so much time to work on the platform, and I have to use that time wisely, and sometimes it's GitHub issues-based development when things come in, because then you know it’s a user or a listener or a reader’s need, or something that they hit up against. So I end up deprioritizing things that I want to do; probably not always the wisest... But it happened again. I had my waffle branch, which waffle is the new replacement for Ark. Ark is the upload library that we had used previously, that went unmaintained, taken over by the community and now called Waffle... And so we've cut over to that, I have my branch... It's like, I said it was -- what did I tell you? How many percentage points did I have done when I told you the other day, Gerhard?

**Gerhard Lazu:** I think it was like 90%.

**Jerod Santo:** 90?

**Gerhard Lazu:** Yes, 90% is what I remember.

**Jerod Santo:** Yeah. So probably I'm at like 94% now... And then here comes an issue, issue number 393 hit our GitHub issues, which we'll link up... Newsletter links proxy encodes special URLs with HTML instead of percent based. This is a tiny little bug that was just interesting to me.

\[51:59\] So what happened is, in our Changelog weekly newsletter, which goes out every Sunday morning, it includes all the shows from that week, every episode we put out, as well as all the news and the links and the repos and the commentary for the week, we linked to Chris Manson's post called It's All Gravy. And his website is Chris.manson.ie, probably because he loves Internet Explorer, and then /it's-all-gravy... Only it's is a contraction, right? So, it's, it apostrophe s. And the son of a gun left the apostrophe in there. Now, I'm giving him a hard time, because I know Chris, he's a JS Party listener, hangs out in the chat... And he left that apostrophe in the URL. First of all, isn't that just like, blasphemous right there, having an apostrophe in your clean URLs, people?

But what happened with that apostrophe is the way that we encode that creates the HTML encoding instead of percent-based, which you'd expect in the URL, which caused people that clicked on that link in our newsletter to go to a web page, which was a 404, because it was incorrect.

Now, certain browsers actually manage it okay, and the apostrophe looks fine in the address bar and everything, which I thought was kind of interesting. And so I thought, "Here's a bug I should chase down, while not working on these uploads to the cloud branch that I'm supposed to be working on..." And so I started to figure out - okay, mystery time... What is going on here?

So I dive into our codebase and I find the line of code in question, and everything looks legit to me, and then I realize, okay, I'm calling this Phoenix... So we are an Elixir/Phoenix application, for those who haven't been following along the whole time... And at a certain point, we call into Phoenix. And Phoenix has an HTML library that generates HTML, and there's a function called link... So if you're familiar with -- every web framework has like a link function; linkto was Rails’ invention, which everybody's pretty much copied. Phoenix’s link works very similarly. So all we're doing is calling that and just passing it the URL, which has the apostrophe in it.

So I started digging a little deeper, and I started thinking, it's like, "Whatever is happening is outside of my domain, right? It's a dependency that's doing it." So I don't know, Gerhard... What do you do in this circumstance? You’ve got a dependency that's not doing something totally right? What's your first move? I guess you're more of an ops guy, so maybe your developer chops are maybe rusty, but what’s your instinct?

**Gerhard Lazu:** No, not really. Not really.

**Jerod Santo:** Okay, good.

**Gerhard Lazu:** So I would look at an issue to see if there is an issue in the repo for the DEP. I would try and find the code, see what happened around it. Like, I would call a blame, see if that is different... And if I can't find anything, I would just open an issue on that repo, explain my problem, link to my code, and ask the developers, "Hey, how would you solve this? What do you think? Is it legit? Am I holding it wrong?"

**Jerod Santo:** Yeah, exactly.

**Gerhard Lazu:** "What’s the problem here?"

**Jerod Santo:** Yeah. So the interesting thing about this one is I'm not really savvy with these character encodings, and I'm not sure why it's doing the HTML encoding versus the URL encoding, but my first question is, like, is this even a bug? Or is this just like the way it would work if you pass it an apostrophe?

And when I start to have these questions - you laid out a very clear path to potential victory, but I'm lazier than you, so my first thing is like, "Am I running the latest version?" That's just what I ask myself. Like, maybe this was fixed between my version and now. So my first step is, "Well, let's just upgrade stuff." And I start to -- even if it's like a procrasticoding thing, I'm like, "I'm going to go check out my deps tree and see how old everything is." A bunch of stuff was out of date, so this begins the yak shave. So instead of fixing that, I'm like "Here's what I'm going to do - I'm going to update all of our deps."

**Gerhard Lazu:** \[56:11\] Update everything. Oh, my goodness me. Okay... What can possibly go wrong...? \[laughs\]

**Jerod Santo:** Exactly. So we're on Phoenix 1.5, and 1.6 was out. Most Elixir packages do a pretty good job of following semantic versioning. So I knew this was a minor upgrade, so there are some breaking changes, but -- or no, a major upgrade breaks changes. There shouldn't have been any API changes, right? Yeah... So this one kind of bit me. So there were API changes. \[laughs\] So I thought I could just safely upgrade. And I did all the auto upgrades... So inside of Elixir's mix tool, if you have patch version upgrades, it'll just auto do those for you. They're green, you can just upgrade those, because they're assuming semantic versioning.

So I did all those, ran the tests, everything was fine. Then I went to upgrade Phoenix, which was a minor version upgrade from 1.5 to 1.6. Got that done. While it was kind of doing its thing, I was like, "Well, I'm going to go read the changelog and see what's going on." And I did notice that they made a breaking change, which I guess that's not semver, so that should have went to 2.0. They don't want to go 2.0, because it's too major, or whatever... But I did notice it, and I'm like, "Man, this is something that I need to look at." So I did the upgrade to Phoenix 1.6, had some failing tests... I was like, "Alright, good. My tests are testing things, and they change the API..." And so I'm going to have that, but it's like two changes.

So what did they change? Well, the way Phoenix works as it passes the request data from your controllers down into your views and to be used in the template, there's this bag of data called assigns, and in the assigns, there’s a bunch of -- it’s literally a map, or a struct, or a dictionary, or a hash, depending on what your language of choice is, right? So it's keys and values, and there were two keys that no longer exist - view module and view template. What do these keys hold in them? Well, they hold in them the information of what's the currently active or being used module that's handling this request, and which template is going to be used to render.

So I did find those. There were two places I was using those, and I changed them. And there was a new way of doing it. Fine. And I upgrade, and all my tests pass, and so what do I do? I ship it, baby. I send it out there, and it's all good. And then I start to realize, via Twitter, that our Twitter embed’s broken. It's just showing like the default news and podcast for developers thing, and like a stock share image. We actually have player embeds, where you can click play right there on Twitter and start playing the episode. So that Phoenix upgrade, even though I thought I'd covered all my bases, broke all the metadata on all of our pages, across the entire site.

**Gerhard Lazu:** Wow...

**Jerod Santo:** ...which led to Twitter embeds breaking, all third-party integrations that are based on the meta elements in your HTML - busted. That led to me refactoring our entire meta module, because that data is gone, and the entire thing in that module is like, "Which view am I, and which template am I? Okay, here's my meta information." So I refactored that entire meta module; it took me a few hours... I'm not even happy with the way it works now. I liked it better before. And I fixed it... And the yak was shoven, or shaven. What's past tense for shave?

**Gerhard Lazu:** Shaven.

**Jerod Santo:** I shaved it. I shaved that sucker. But I did not get our cloud uploads done... So that's my excuse, and I'm sticking with it.

**Gerhard Lazu:** Well, first of all, you were very determined to shave this yak... \[laughter\]

**Jerod Santo:** Yes, I was.

**Gerhard Lazu:** And I'm glad that you didn't give up, until it was all done.

**Jerod Santo:** Success, baby!

**Adam Stacoviak:** Yes. Well, the question is, did the upgrade even fix the original URL issue?

**Jerod Santo:** \[01:00:15.25\] No... It’s not a bug. It’s a feature. \[laughter\]

**Adam Stacoviak:** That's the best!

**Gerhard Lazu:** By the way, the number is 394. I checked. It’s not 393. 394.

**Jerod Santo:** Oh, I’m sorry.

**Gerhard Lazu:** That's okay. That's okay. Second of all, this reminds me of exactly what happened. You said that you had to shave a yak, and we had to get together, where I upgraded -- I've set up the new version of our Kubernetes deployment... And it's amazing how I was shaving a similar yak.

You know how you do an upgrade of Kubernetes, like from 1.20 to 1.21, and then you think, "Hmm, maybe I should upgrade Ingress NGINX. Or even better, "I should replace it with Traefik." Why? Because then we don't have a cert manager. Excellent. So, Traefik and take care of all of that. Great.

What about external DNS? Let's do that as well. What about Honeycomb agent? Let’s do that as well. What about Grafana agent? Oh, crap. They broke something... \[laughter\] So maybe try and figure out what the config is. And before you know it, like two days, like three days, whatever, you say like, "No, no, this is just too much. I just have to keep some of the older versions, because it's just too hard, and I'm biting too big of a chunk", which is exactly what you've done, right? And before we know it, the yak is like a herd. \[laughter\]

**Jerod Santo:** Yes. Somewhere in there I completely lost the thread, you know?

**Adam Stacoviak:** Yeah... It feels necessary as you keep biting more off though, right? As you go deeper into the yak shave. I mean, I guess this is an onion analogy more than a shave, I guess... Every new hair you shave away -- I don't know how to describe... Like, you just have to go further, you know what I mean? It feels like it's perpetual, and you just need to keep going. And then it's one part, personal determination, and then knowing you as a list, extra offer, you've got to get through this thing, whatever it is. So it's like, perseverance though...

**Gerhard Lazu:** I'm wondering, how much actual work happens like this? Really valuable work, like upgrades, fixes, refactorings... Because you start somewhere, and rather than doing the bare minimum, you say "Well, I'm going to do a little bit more, and a little bit more..." and before you know it, you're like a week in, and everything is amazing, but you’ve wasted the week on something which wasn't even on the board.

**Jerod Santo:** Right. It was not even on my agenda.

**Adam Stacoviak:** I wonder as well, because that's the state of flow, right? You can get through that yak shave, probably, because of a state of flow. Was this a sustained session, Jerod, or was it multiple sessions?

**Jerod Santo:** This was all one session. This is basically took my afternoon that I would have otherwise spent finishing that cloud uploads thing.

**Adam Stacoviak:** Right. Did you plan to spend the amount of time that you spent? So did you consume the time you desired to spend, or did you consume more?

**Jerod Santo:** Way more. I did not want to rewrite that meta module at all.

**Adam Stacoviak:** Right. This is my point then. So you want to do it in one session, you were in a state of flow, despite your aim, so to speak, being off... You shaved the yak, you didn't do what you intended to. However, you probably did as much work as you could have done in eight hours, or whatever number - some sort of multiple beyond that - because you're in such a momentum mode going on. That's my assumption at least, because you were in a state of flow. So to your point, Gerhard, I wonder as well - because when you get that kind of momentum, sometimes you just have to run with it.

Speaking of new, we've got some gifts coming up. It's going to be the holiday season, Christmas... You’ve got some Christmas gift for us, Gerhard?

**Gerhard Lazu:** I do, actually. I have four, five... We'll see how many. But a couple. More than a couple.

**Adam Stacoviak:** \[01:04:03.00\] Okay.

**Gerhard Lazu:** What I'm thinking is, I was mentioning --

**Adam Stacoviak:** Two. More than one, right? Two.

**Jerod Santo:** More than two.

**Gerhard Lazu:** More than three.

**Adam Stacoviak:** More than two, okay. A couple.

**Gerhard Lazu:** More than a few. Several. Several gifts. So I was mentioning at the beginning of the show that a lot of the episodes, when I spend time talking to the people that come on the show, there's always a background story to it. Usually, like a past story we share, we have a common past, but also I see a common future.

What that means is when we covered Crossplane, I was mentioning even during the episode that I want to make Crossplane part of our infrastructure, part of our setup. So what that looks like is managing our Kubernetes, managing our infrastructure with Crossplane. So how do we do that? What does that look like? What is the simplest thing that we can do to improve our Kubernetes deployments, so that when you want two, three, four, it's really simple to do that? What about using Upbound Cloud for that, rather than running around Crossplane? So that is one of the gifts - how do we use Crossplane to manage our infrastructure, our new infrastructure, the 2022 one, and going forward, what are the benefits of doing that?

So we're bringing them on board, with our story, with our Changelog story, with our setup story that's been evolving... And the mix is what makes it amazing, because we have the opportunity to try all these different tools out, show our approach, whether it's right or wrong, it doesn't matter. The point is, it's good enough for us, and there's always something to learn. We create great content, we promote the good stuff, the stuff that we believe in, that we use, and most importantly, we help it improve. We get feedback to those projects, to those products, and as a result, they improve.

Honeycomb is another one. We’ll have specific Honeycomb integrations. Dagger - I want to mention that as well. And that happened like over the last couple of weeks... Preparing episode 33, where a few gifts will be mentioned. Parka, I want to mention that as well. That actually happened today. In my lunch break, we were recording that segment, which will be part of episode 33, and that's the Parka one.

**Adam Stacoviak:** Yeah. I like seeing Solomon Hykes in our pull requests/comments back and forth on the Dagger stuff you're working on. I was paying attention to just that commentary. And so just one... You know, I think it's super cool that -- you know, we've been a podcast... Ship It is part of the network, but the network itself has been around for more than 12 years now.

We talked to Solomon like way back early days of Docker even, when he did that first talk to announce Docker, essentially... And now to be at a place to have the right kind of infrastructure for this... What was just once a Tumblr blog, happily on WordPress at one point as well, and worked just fine. Maybe we had a ton of misses there. Not misses, but actual misses; but we didn't have any caching, so we were good to go. And now to see this feature, Dagger, these GIFs, and Solomon Hykes, who is one of the creators of Docker - those catching up in the comments of our pull requests... It's cool. I love that. I was loving seeing that. It’s just -- the whole circle of life kind of thing. You know, like you had said even with Ship It, the pre-story, and then the future story. Like, I love all that serendipity, Gerhard, really, coming together.

**Gerhard Lazu:** It is a journey. It's really is. And many journeys coming together.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** And the little contributions that we can make to those projects, they're definitely helping us. We couldn't run the infrastructure the way we do without all the great tooling that's out there. And I wish we had more time to try it all, and to give all the feedback that we can.

\[01:08:12.00\] I think whenever people pitch the idea or request an episode, like "We would like to have this conversation", I'm thinking, "Am I excited about this? Is this something which I would use?" If the answer is no, it doesn't mean that tool is wrong. It means I'm not into it. I wouldn't use it. It’s a no from that perspective. So I love trying out the things that we have on the show, all the people - just go beyond that, go beyond that conversation and see what happens. Literally, see what happens. I love that stuff.

**Adam Stacoviak:** I like bringing that feedback to them too, in particular Honeycomb. I love just -- or even with Dagger, and Crossplane. I think we can give that kind of feedback differently than, say, a customer would, or a drive-by user who's just on the free tier, for example, of whatever it might be. We're going to give a different layer. Because one, to Fastly’s credit even, like - if you’re a listener who works at Fastly, we're not bashing you. We love Fastly. We're just unhappy with current things or certain things, and we want to improve them. That doesn't mean we're negative Fastly. We're quite pro Fastly. And I think that through the podcast and the content that comes from it, and just our willingness to try and be curious, but then put that on air on a podcast and flesh it out, for the sake of ourselves, as well as the listeners, who are like, "How are they solving these problems? How is Jerod shaving this yak? How is Gerhard shaving that yak?" He has no packets lost. Great. Okay, cool. Two ISPs later. All that fun stuff. That, to me - that's a journey. That's a narrative. That's a story. And I think that we can give that feedback to Crossplane, to Honeycomb, and even sharing how we have that observability into our CDN which we never had before - that is super cool. That may not be something that Charity and the team at Honeycomb thought about. Sure, you can observe anything really, but have they considered, like, should you observe your CDN? Well, I think now that we have this tool in our hand, the answer is emphatically yes, especially when it's your front layer.

**Gerhard Lazu:** Yeah, and it's all those ands which are really exciting for me... So Crossplane AND Dagger. Honeycomb AND Grafana Cloud. Most people don't think like that. They think, "Competitors."

**Adam Stacoviak:** Either/or.

**Gerhard Lazu:** No, no. It’s an AND proposition, because they all have their strengths and their weaknesses. And if you don't know what the trade-offs are, well that means that you don't know them well enough. Because there's no such tool which is just perfection. There's no such thing. It doesn't exist. So stop looking for it, and try and understand which trade-offs you're making.

So Honeycomb is helping us in specific ways. Grafana Cloud is helping us in other ways, and we'll have people on the show to talk about those things, and to talk about the improvements. If you want to know what's coming up in episode 33, you can go to our changelog.com, the repo on GitHub, github.com/thechangelog. There's a couple of pull requests opened, and the pull requests have Ship It Christmas gifts. It's an Echoes initiative, Echoes HQ; they were on the show. Arnaud was on the show. So we're using Echoes for that purpose, and it's all coming together, like one big, happy family—

**Adam Stacoviak:** And they’re red.

**Gerhard Lazu:** And they’re red, yes, for Christmas. Exactly.

**Adam Stacoviak:** That’s right. Red and white actually, because the text is white, and the --

**Gerhard Lazu:** Yes. It’s not coincidental. So there's many things coming together, and Dagger is improving, because it reflects some of the feedback that we're giving. Honeycomb as well. Crossplane as well. Every single person I get to talk to, they're taking notes of what they can improve. Fredrik - it was amazing to do that with him, to give him ideas... Because end users, the ones that are paying for it, for that product, they maybe are not as patient or not as knowledgeable, or they’re more entitled, or rushed, or...

**Adam Stacoviak:** Precisely. Willing.

**Gerhard Lazu:** \[01:12:21.13\] Exactly. But we’re not. We genuinely want to help. We genuinely want to promote this stuff - what works, what doesn't work, and let's make it better. So, Kaizen.

**Adam Stacoviak:** Yeah. I love that. And I guess, to some degree, on that note, there's an order of things. So we talked about this show, in the initial part of the show, just the beginnings, how there was early innings... It was just an idea at one point. And as part of bringing that idea to life, one, Gerhard, we had to have a deeper conversation with you, and understand your desire. Clearly, you've realized a lot of that desire for us in your execution of Ship It, even so far to plan well ahead.

But all that's possible because, one, our willingness, but then two, capable and willing partners behind the scenes. And in no particular order, I'm going to thank some people who were on the charge this year, involved next year as well... Planet Scale, Fly, Equinix Metal, Render, Linode, Raygun, Sentry, Honeycomb, Grafana Labs, Teleport, LaunchDarkly, Incident, FireHydrant, Cockroach Labs... And I'm sure at least a couple more that I may have forgotten and didn't get in the list. If so, I apologize, but... Great partners make it possible to do this kind of fun stuff, and I am so thankful for them. I'm so thankful for you. I'm so thankful for our listeners. What would this show be if it didn't have listeners, right?

So you listening right now, we really appreciate you taking your time to either subscribe, or listen to a segment, or listen to a full-length show, even if you're not a subscriber. Thank you for giving us a little bit your time, hopefully a bit of your future trust and listen to this show further. We hope to one day have a beautiful vanity URL to give this, but until then, it's changelog.com/shipit. All the links to subscribe are there. You can subscribe via email, you can come in Slack... Hey, there is a community, it is free, so you can hang your hat, call this place home. Everyone's welcome, no matter where you're at in your hacker journey. We welcome you to be here. There's no imposters here. You can go to changelog.com/community for you to join, hang with us.

I love it, man. I'm loving the momentum and the direction we're going. I think enough pats on the back, but I'm just so thankful for this team here, the listeners, our partners... Really, I am. We’re just so blessed - really, we are - to be doing this show. It's so much fun.

**Gerhard Lazu:** Thank you, Adam. That was beautiful. Thank you very much. That’s reached a very special place. Thank you.

**Adam Stacoviak:** Cool. So 2022, here we come. We’ve got a little more shows left, but this is the last Kaizen episode. We'll come back here in 2022 with Kaizen, with Kaizen... 40?

**Gerhard Lazu:** Kaizen 40, that’s the one.

**Adam Stacoviak:** Kaizen 40. And hopefully, we'll have our Kaizen T-shirt in the merch store... So stay tuned to that. One more gift, potentially, a New Year’s gift, merch.changelog.com/. Until then, we’re out.

**Outro:** \[01:15:37.01\]

**Jerod Santo:** Hey y'all, Jerod here. So during the tail end of our recording, right after I told my yak shave story, Gerhard pretty much broke the show. Turns out he's been deep on a yak shave of his own regarding his home network setup and some nagging internet connection issues. I guess my yak shave story triggered Gerhard to consider the ridiculous length he's gone through, and - well, hilarity ensues.

Gerhard laughs uncontrollably, which makes me laugh uncontrollably. Adam keeps it together and desperately attempts to get us back on track, but not going to happen. It was so broken that we cut it from the episode, but it was also so funny that we figured we'd throw it in at the end, for those of you with a few extra minutes to spare and the curiosity to hear what it sounds like when the show goes off the rails.

Alright, here it is.

**Gerhard Lazu:** I’m sorry. I’m just \[laughs\] I’m just trying to hold something in.

**Adam Stacoviak:** Something is making Gerhard laugh really big.

**Gerhard Lazu:** It’s just too good. \[laughter\]

**Adam Stacoviak:** Oh, he's got a hidden thought that he can't get out, because it’s making him laugh too much.

**Gerhard Lazu:** I just remembered... \[laughs\]

**Jerod Santo:** What? \[laughs\]

**Gerhard Lazu:** \[laughs\]

**Adam Stacoviak:** I can't even look at this face. I'm sorry.

**Gerhard Lazu:** It’s just too good—

**Adam Stacoviak:** I can’t look at him. I have to look away.

**Gerhard Lazu:** \[laughs\] Okay. Alright.

**Jerod Santo:** What did you remember?

**Adam Stacoviak:** If you’re listening to this, try hard to look away.

**Gerhard Lazu:** \[exhales\]

**Jerod Santo:** Okay, got it.

**Adam Stacoviak:** He's taking off his glasses and everything.

**Gerhard Lazu:** It took me three weeks... \[laughs\]

**Jerod Santo:** Three weeks? \[laughs\] Oh my God, man...

**Gerhard Lazu:** It’s just too good to-- \[laughter\]

**Adam Stacoviak:** That’s true determination, because you not only did it -- you didn't do it in one session, you did it in multiples, and you kept going.

**Gerhard Lazu:** Multiple weeks.

**Jerod Santo:** \[laughs\] Multiple weeks...

**Gerhard Lazu:** \[laughs\] Three routers later... \[laughing out loud\]

**Jerod Santo:** \[laughing out loud\]

**Gerhard Lazu:** Two internet connections later... \[Laughter\] And all my packets aren't getting lost anymore. \[laughter\]

**Jerod Santo:** Oh, man...! \[laughs\]

**Adam Stacoviak:** That is an extreme yak shave, Gerhard.

**Jerod Santo:** That is.

**Gerhard Lazu:** \[laughs\] I’m sorry.

**Adam Stacoviak:** Extreme tales of yak shaving. That’s the next show.

**Gerhard Lazu:** That is the next show. Actually, there's like an episode with new ISPs -- I have two ISPs now. Both fiber connections

**Jerod Santo:** Two ISPs now... \[laughing out loud\]

**Gerhard Lazu:** Yeah, like two fiber connections coming into the house. Three routers

**Adam Stacoviak:** The funny part about this is like -- you have to think about that beyond just being two ISPs, that's two separate people coming to your house to install fiber...

**Gerhard Lazu:** Yes.

**Adam Stacoviak:** Because that's two separate fiber lines. That's like true dedication. \[laughter\] That's new holes into your house.

**Gerhard Lazu:** \[laughs\] Yes, exactly. Two holes in my wall. You’re right. I have two holes.

**Adam Stacoviak:** That's one more plug in your -- whatever. Maybe you even have a UPS for this even, I'm sure...

**Gerhard Lazu:** Not yet. \[laughter\]

**Jerod Santo:** Not yet. \[laughing out loud\] He just added that to his list of things to do.

**Adam Stacoviak:** That's some serious dedication.

**Jerod Santo:** Don't give him anything else to do, Adam.

**Adam Stacoviak:** I'm just thinking like - the logistics of doing that. That's being on the phone to order it, that's deciding to pay for it. That's one more line item on the budget, so to speak. That's somebody coming in your house, new hole, new fiber, new equipment. At least you're getting to use that LAN fill over though, on the uninfy system

**Gerhard Lazu:** I do actually, yeah. I do. Not load balancing yet, but I'm working towards it.

**Adam Stacoviak:** I’m sure you’ll be -- yeah.

**Gerhard Lazu:** \[laughs\]

**Jerod Santo:** Alright, we’ve got to reel this in. What's the summary here, Gerhard? What's the takeaway from this?

**Gerhard Lazu:** The summary is that now I have two LAN connections

**Jerod Santo:** \[laughing out loud\] You've already said that part. What's the takeaway?

**Adam Stacoviak:** What's the takeaway here?

**Gerhard Lazu:** You need two of each. \[laughing out loud\] Except your life. You only want one of those.

**Jerod Santo:** There you go. So I think we should do GitPod and Codespaces. \[Laughter\]

**Gerhard Lazu:** \[laughs\] Of course.

**Adam Stacoviak:** Yes, because you never know.

**Jerod Santo:** Kubernetes AND Fly.io, AND Render. That’s how we roll.

**Adam Stacoviak:** Well, I can agree with the N-plus. I mean that is smart. I mean, you can never have enough. That was actually coined best in the movie Contact. Anybody remember that? Why build one when you can build two?

**Gerhard Lazu:** I think I've had enough fun... \[laughter\]
