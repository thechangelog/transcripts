**Jerod Santo:** Kaizen 16. Gerhard, what have you prepared for us this Kaizen? I think every time I don't know what to expect, and this time, I do know what to expect. So what changed? What's new? What's fresh?

**Gerhard Lazu:** Well, I shared the slideshow.

**Jerod Santo:** Yes, you did.

**Gerhard Lazu:** I mentioned the last episode I have a slideshow, with my talking points, a couple of screenshots, things like that. This time I shared it ahead of time, and I prepared ahead of time as well... But also, I've been making small updates to the discussion, I think more regularly than I normally do. Discussion 520 on GitHub. I mean, we always have one for every Kaizen, but this time I just went a little bit further with it. And I think it will work well. Let's see.

**Jerod Santo:** Alright. Well, take us on this wild ride. Adam's also here. Adam...

**Adam Stacoviak:** What's up?

**Gerhard Lazu:** Hey, Adam. Everything's up.

**Adam Stacoviak:** It is up.

**Gerhard Lazu:** Whenever someone asks me that, everything's up. That's the SRE answer. Everything's up.

**Jerod Santo:** Everything is up.

**Gerhard Lazu:** Otherwise I'm not here. If something's down, I'm not here. \[laughter\]

**Jerod Santo:** You know it's up because Gerhard's here.

**Gerhard Lazu:** Yup. So everything's up.

**Jerod Santo:** I like that.

**Gerhard Lazu:** Well, last Kaizen we talked towards the end about the pipe dream.

**Jerod Santo:** Oh, yeah.

**Gerhard Lazu:** That was the grand finale. So maybe this time around we start with that. We start with the pipe dream. We start with what is new.

**Jerod Santo:** We start where we left off.

**Gerhard Lazu:** Exactly.

**Jerod Santo:** Love it.

**Jerod Santo:** So we'd mentioned that - or at least you mentioned, Jerod... Or was it Adam? I can't remember. Anyways, we will clarify this after I mention what I have to say. Wouldn't it be nice if we had a repository for the pipe dream, self-contained, separate from the application? Whose idea was it?

**Jerod Santo:** I think it was both of ours. Adam said "Can this be its own product, or something?" And I said "Well, it could at least be its own repo", something like that.

**Gerhard Lazu:** That's right. So github.com/thechangelog/PipeDream is a thing. It even has a first PR that was adding dynamic backends... And we put it close to the origin, a couple of things, so you can go and check it out. PR1. And what do you think about it? Is the repo what you thought it would be?

**Jerod Santo:** Well, for those who didn't listen to Kaizen 15, can you tell us what the pipe dream is?

**Gerhard Lazu:** Well, I think the person whose idea it was should do that. However, I can start. So the idea of the pipe dream was to try and build our own CDN, how we would do it. Single purpose, single tenant, running on Fly.io. It's running Varnish Cache, the open source variant, and we just needed like the simplest CDN that we needed, which is, I think, less than 10% of what our current CDN provides... And the rest is just most of the time in the way, and it complicates things, and it makes things a bit more difficult for the simple tasks. How the idea started, I would only quote you again, Jerod. Would you like me to quote you again? That was Kaizen 15.

**Adam Stacoviak:** Please do. So many quotes.

**Jerod Santo:** Sure. Let's hear it. I like hearing what I have to say.

**Gerhard Lazu:** "I like the idea of having like this 20-line Varnish config that we deploy around the world, and it's like "Look at our CDN, guys." It's so simple, and it can do exactly what we want it to do and nothing more... But I understand that that's a pipe dream..."

**Jerod Santo:** Right.

**Gerhard Lazu:** That's where the name came from. "Because the Varnish config will be slightly longer than 20 lines, and we'd run into all sorts of issues that we end up sinking all kinds of time into." Jerod Santo, March 29th, 2024. Changelog & Friends, episode 38.

**Jerod Santo:** Okay. So there you go. What's funny is - you know how when you're shopping for a car and you look at a specific car... Maybe you buy a specific car, and then you see that same car and color everywhere? After this, I have realized not just hearing the word "pipe dream", or maybe the words, if we can debate, is it two words or one... But I actually realized, I say that a lot. I call lots of things pipe dreams. And I didn't realize it until you formalized it. And now I'm like self-conscious about calling stuff pipe dreams. I think I did it on a show just the other day... I was like "Dang it!" Because now it's a proper noun, and I feel like it's a reserved word, you know?

**Gerhard Lazu:** It's almost a product.

**Jerod Santo:** Yeah, it's almost a product. If you could package up and sell 20 lines of Varnish, we would do it. But if you can't, we would at least open-source it and let the world look at what we did. So it has its own repo, and it has its own pull request... So you know, it's going to be a real boy. Does it work? Does it do stuff? I mean, I know you demoed it last time, and it was doing things, but does it do more than it did before? Or is it the same?

**Gerhard Lazu:** \[00:07:43.02\] Yeah. I mean, the initial commit of the repo was basically I extracted what would have become a pull request to the Changelog repo. That was the initial commit, and we ended up with 46 lines of Varnish config. The pull request 1, which added dynamic backends, and it does something interesting with a cache status header... We end up with 60 lines of Varnish config.

Why dynamic backends? That was an important one, because whenever there's a new application deployment, you can't have static backends. The IP will change, therefore you need to use the DNS to resolve whatever the domain is pointing to. So that's what the first pull request was, and that's what we did in the second iteration.

Now, I captured what I think is a roadmap. It's in the repo, and I was going to ask you, what do you think about the idea in terms of what's coming? So the next step would be to add the feeds backend. Why? Because feeds - we are publishing them to Cloudflare R2. So we would need to proxy to that, basically cache those. I think that would be like a good next step.

Then I'm thinking we should figure out how to send the logs to Honeycomb, exactly the same as we currently send them. So that same structure, same dashboard, same query, same SLOs - everything that we have configured in Honeycomb would work exactly the same, with the new logs from this new CDN.

Then we'd need to implement the purging across all instances. I think that's slightly harder, because as we deploy the CDN in like 16 regions, 16 locations, we would need to expire, right? Like, when there's an update. So that I think is slightly harder, but not crazy difficult. And then we would need to import all the current edge redirects from our current CDN into the pipe dream. And I think with that, we could try running it in production, I think.

**Adam Stacoviak:** Good roadmap. I dig it.

**Jerod Santo:** So our logs currently go to S3, not to Honeycomb, in terms of logs that we care about. And I know that I previously said we only care about our MP3 logs, not our feed logs, in the sense of statistics and whatnot, but that has since changed. I am now downloading, parsing and tracking feed requests like I am MP3 requests. And so we would either have to pull that back out of Honeycomb, which maybe that's the answer, or somehow have it also write to where S3 is currently writing to, in the current format, for us to not have major rewriting on the app side. Thoughts on that?

**Gerhard Lazu:** So we can still keep S3, whatever intercepts the logs... Because in our current CDN -- obviously, the CDN intercepts all the logs. And then some of those logs, they get sent to S3 indeed. But then all the logs, that get sent to Honeycomb. So you're right, I forgot about the S3 part.

**Jerod Santo:** Right.

**Gerhard Lazu:** So on top of sending everything to Honeycomb, we would also need to send a subset to S3, exactly as the current config. So that's an extra item that's missing on that roadmap, indeed.

**Jerod Santo:** Alright, cool. So we add that item to the roadmap, and I think it's all honky dory. Do you know how you're going to implement purge across all app instances? Like, what's the strategy for that? No idea.

**Gerhard Lazu:** No idea currently. I mean, based on our architecture and what we have running, so that we avoid introducing something new, as a new component, a new service that does this, we could potentially do it as a job using Oban, I think. Because at the end of the day, it's just hitting some endpoints, HTTP endpoints, and it just needs to present a key. If we don't use it, anyone can expire our cache, which is a default in some CDNs.

**Jerod Santo:** \[laughs\] Yeah, it. We've found that out the hard way.

**Gerhard Lazu:** Exactly. So that's something that we need. I think an Oban job would make most sense.

**Jerod Santo:** It's actually pretty straightforward, because we already have a Fastly purge function in our app, that goes and does the thing, and then we just change this to go and background Java reset on all these different. Now, there has to be some sort of orchestration of like - the instances have to be known. Maybe that's just like a call to Fly, or something, or I don't know how...

**Gerhard Lazu:** \[00:12:11.12\] DNS...

**Jerod Santo:** Okay, DNS-based, yeah.

**Gerhard Lazu:** We can get that information by doing a DNS query, and it tells us all instances, and then... Yeah, we can get all the URLs.

**Jerod Santo:** Yeah, that sounds like a straightforward way of doing it.

**Adam Stacoviak:** Where's the data being stored when we upload?

**Jerod Santo:** Currently?

**Adam Stacoviak:** In Pipe Dream.

**Jerod Santo:** Pipe Dream is just a cache, so... You mean where's the cache data being stored?

**Adam Stacoviak:** Okay, so Pipe Dream is just -- what exactly does Pipe Dream do?

**Gerhard Lazu:** So Pipe Dream is our own CDN, which caches requests going to backends. So imagine that there's a request that needs to hit the app, and then the app needs to respond. So the first time - like, let's say the homepage. Once the app does that, subsequent requests, they no longer need to go to the app. Pipe Dream can just serve, because it already has that request cached. And then because Pipe Dream is distributed across the whole world, it can serve from the closest location to the user.

**Adam Stacoviak:** To the person.

**Gerhard Lazu:** Exactly. And same would be true, for example, for feeds, even though they're stored in Cloudflare R2. The Pipe Dream instance now goes to Cloudflare R2, gets the feed, and then serves the feed.

**Adam Stacoviak:** Gotcha.

**Jerod Santo:** And so Varnish is storing that cache locally on each instance.

**Gerhard Lazu:** Correct.

**Jerod Santo:** In its local disk storage, or however Varnish does what it does.

**Gerhard Lazu:** So by default, we're using memory, but using the static backend like a disk backend would be possible, yes.

**Adam Stacoviak:** I was just thinking about expiring, because we just did this yesterday where we had to correct deployed/published episode, and we ran into a scenario where Fastly was caching, obviously, because it's the CDN, and then I went into the Fastly service and purged that URL, and then it wasn't doing what we expected. And I bailed on it and handed it to Jerod, and Jerod checked into R2, and R2 was also caching.

And so we essentially had this scenario where our application was not telling the CDN that this content is new, expire the old, purge etc. And I just wonder, in most cases, aside from the application generating new feeds, which happens usually at the action of a user... So me, Jerod, somebody else publishes an episode, or republishes. Couldn't the expiry command, so to speak, come from that action, and inform the CDN?

**Jerod Santo:** Yeah, exactly. Which is how it works right now with Fastly. Like, after you edit an episode, we tell Fastly to purge that episode. The problem we had yesterday is that Fastly purged it, but then Cloudflare also had a small cache on it. And so Fastly would go get the old version again and say "Okay, now I'm fresh." And so we had two layers of cache that we didn't realize. And so that's probably fixed now... But yes, it would be basically everywhere in our app that we call fastly.purge, we would just replace that with pipedream.purge, or whatever, which would be an OBAN process that goes out to all the app instances.

**Adam Stacoviak:** I see. So the question was mechanically how to actually purge the cache, not so much when.

**Jerod Santo:** Yeah. Because we already have when pretty much figured out.

**Adam Stacoviak:** Gotcha.

**Jerod Santo:** Which is pretty straightforward, really, because it's when we publish, and when we edit, or delete; those are the times that you purge the cache. Otherwise...

**Adam Stacoviak:** What's the point, yeah.

**Jerod Santo:** \[laughs\] Otherwise you don't do it. Please don't.

**Adam Stacoviak:** It doesn't make any sense. Change hasn't happen, so don't change.

**Jerod Santo:** So.

**Adam Stacoviak:** Okay. How plausible is this Pipe Dream? Should we rename it to something else, because it's not a Pipe Dream anymore? Or less of a Pipe Dream? Obviously, I'm not suggesting that naturally, but it becomes real... Does it become an oxymoron when it becomes real?

**Gerhard Lazu:** I don't know, I quite like the name, to be honest. I think it has a great story behind it; so it just goes back to the origin.

**Adam Stacoviak:** \[00:16:05.15\] And the CDN is a pipe, right? I mean, it is a pipe, so....

**Jerod Santo:** Yeah, exactly.

**Gerhard Lazu:** Yeah. I like that, that pipe idea. That was one of the follow-up questions - do we keep a space, or introduce a space, or no space? That's a really important decision.

**Jerod Santo:** Space or no space. What about a tab? Should we put a tab in there?

**Gerhard Lazu:** \[laughs\] We can.

**Adam Stacoviak:** Camel case, no space, space...

**Gerhard Lazu:** What do the listeners think? I mean, you've been hearing this story for a while, and you've heard us think... I think we should have a poll, and that's how -- I know that's how we end with names like Boaty McBoatFace...

**Jerod Santo:** Yeah, exactly. \[laughs\]

**Gerhard Lazu:** We're very aware of that. This is not that. We're just asking, what would be the way to spell it that would make most sense? Pipedream one word, Pipe space Dream... Pipe Tab Dream - I'm not sure about that. I think we can do one like as for fun. Or camel case indeed.

**Adam Stacoviak:** I'm leaning towards one word. The Merriam-Webster dictionary and the Cambridge Dictionary both say that it's two words.

**Jerod Santo:** I'm seeing it two words everywhere, except for old English, where it was pipdream, all one word.

**Adam Stacoviak:** I'm leaning towards one word though. Just Pipedream one word.

**Gerhard Lazu:** Okay.

**Jerod Santo:** And I'm leaning in the other direction. So we need a poll. \[laughs\]

**Adam Stacoviak:** Great...

**Gerhard Lazu:** Well, the repo name is already lowercase pipedream, no spaces, no nothing; no dashes, nothing like that. So I think it would make sense. So yeah.

**Jerod Santo:** Alright, we'll run a poll...

**Gerhard Lazu:** See what people think. Yeah.

**Jerod Santo:** See what people want. Give the people what they want.

**Gerhard Lazu:** Correct. And when we do switch it into production, whenever that happens, I think we could maybe discuss again whether we rename it, when it stops being a pipe dream for real. For now, it's still like a repo, it's still a config. It runs... I mean, if you go to PipeDream.Changelog.com, it does its thing. But it's not fully hooked up with everything else that we need.

**Jerod Santo:** I have a new name. Pipe Reality.

**Gerhard Lazu:** Pipe Reality.

**Jerod Santo:** Just... Let it marinate. Not now. Not yet.

**Gerhard Lazu:** Pipe Media? \[laughs\] I don't know...

**Jerod Santo:** Pipelog?

**Gerhard Lazu:** Pipelog. Ooh!

**Adam Stacoviak:** Here's a better one.

**Jerod Santo:** Changepipe.

**Adam Stacoviak:** Pipely.

**Gerhard Lazu:** Pipely. \[laughs\]

**Jerod Santo:** Ooh...! That one really... \[laughs\]

**Gerhard Lazu:** I think that's the winner. \[laughs\] I think that's the winner. Quick, buy the domain before someone else buys it.

**Adam Stacoviak:** Oh, boy...

**Gerhard Lazu:** Pipe.ly. Oh, yes.

**Jerod Santo:** That one's almost too good.

**Adam Stacoviak:** Almost.

**Gerhard Lazu:** Yeah.

**Adam Stacoviak:** Is this really where we're marching towards? I know this began as literally a pipe dream, and it's becoming more real...

You've had some sessions, according to the -- maybe I'm jumping the gun a little bit on your presentation here, but you've podcasted about this, slash live-demoed this... We've been talking about the name, we've been talking about the roadmap... Is this really a true possibility to do this successfully?

**Gerhard Lazu:** Well, based on the journey so far, I would say yes. I mean, it would definitely put us in control of the CDN, too. A CDN is really important for us, so it's even more important than a database, because we're not heavy database users. And we'll get to that in this episode, I'm sure. So a CDN really is the bread and butter.

Now, we need something really simple. We need something that we understand inside out. We need something that I would say is part of our DNA, because we're tech-focused, and we have some great partnerships, and we've been on this journey for a while. It's not something that one day we woke up and we said "Let's do this." So this has been in the making for a while.

**Adam Stacoviak:** We were almost forced.

**Gerhard Lazu:** In a way, yes. I would say encouraged, in a way; like, we were pushed in this direction.

**Jerod Santo:** There were other options... Yeah.

**Gerhard Lazu:** Yeah. But I think there's this natural progression towards this. And it doesn't mean that we'll see it all the way through, but I would say that we are well on our way to the point that I can almost see the finish line. I mean, even the roadmap, right? Putting the roadmap down on paper, it made me realize actually the steps aren't that big, and we could take them comfortably between Kaizens. And I don't want to say by Christmas, but wouldn't it be a nice gift? A Christmas gift? What do you think?

**Jerod Santo:** I mean, I think that's a bold roadmap. Let me add this to the roadmap... Or maybe I'm not seeing it in the repo and it's there. A test harness. Is there a test harness?

**Gerhard Lazu:** No, there isn't a test harness, no.

**Jerod Santo:** I would love to be able to develop against this with confidence, especially once we start adding those edge redirects, and different things... I would love to have that as part of the roadmap, so that I can fire it up and --

**Gerhard Lazu:** Create an issue. I would love that.

**Jerod Santo:** Okay.

**Gerhard Lazu:** Yeah. Go for it.

**Jerod Santo:** Cool.

**Gerhard Lazu:** Open source for the win. Cool.

**Jerod Santo:** So I'm going to open-source the issue, and then you open-source the code.

**Gerhard Lazu:** Amazing. I love that.

**Jerod Santo:** Just making sure you didn't say "PRs welcome" and you're moving on.

**Gerhard Lazu:** Cool.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Can we revisit the idea of this being a product? Single-tenant, single-purpose, simple. Seems like a replicated problem set.

**Gerhard Lazu:** Honestly, I think so. Honestly, I can definitely see this being part of Fly.io.

**Adam Stacoviak:** Well, there's this name for which we cannot name in regards to Fly. It's more of a class of people, I would say, is probably that. I'll be even more vague. Sorry, listeners...

**Jerod Santo:** That's so vague that I don't even know what you're talking about.

**Adam Stacoviak:** There is some inside information. I'm not sure how much we can share. But then there's like Tigris that has led the way in a lot of ways... And I just talked to Ovais, because - by the way, they may even be sponsoring this episode. Fly is not only a partner, but also a sponsor of our content... And I had a conversation with Ovais, who is one of the co-founders of Tigris, and he shared with me that if it weren't for Fly, it would have taken them years to build out all of the literal machines across the world, with the NVMe drives necessary to be as fast -- to be what Tigris has promised. And I don't want to spoil it for everybody, but Tigris basically is an up-and-coming S3.

And because of the way that Fly networks, and because the way that Fly handles machines across the world and the entire platform that Fly is - very developer-focused - Tigris was able, I think within nine months, to stand up Tigris. And so you can deploy Tigris via a single command in the Fly CLI. And then you can also have all of your billing handled inside there... This is not an ad, I'm just describing it.

But when I said that back in the day, I was thinking about Tigris... Because I had first learned about them and knew about the story, and I knew they were built on Fly. I knew their story was only possible because of what Fly has done. And I think that this pipe dream is realized, or capable of being realized because of Fly being what Fly is. And I feel like we have this simple nature, sort of the -- I said really simple CDN, but I'm not tied to that, because RSS has kind of won the really simple part of it. But I think that's kind of what it is. I feel like other people will have this, and it can certainly live in this world of Fly. I don't know.

**Jerod Santo:** There's a possibility there. I think we build it for ourselves and then we'll know more.

**Gerhard Lazu:** Are we thinking "Make it private"? The repo? It's still not too late...

**Adam Stacoviak:** Are we going to rug-pull these people before there's even a rug down?

**Jerod Santo:** \[laughs\]

**Gerhard Lazu:** Well, no one's using it, so...

**Jerod Santo:** Yeah, private rug. It's 60 lines of Varnish. I think we're getting ahead of ourselves, right?

**Gerhard Lazu:** I think so. But once we start adding the test harness, once we start adding the purging... Which, by the way, is specific to our app, but maybe that would need to be generic, by the way. So if this was to be a product, we would need to have a generic way of purging, doesn't matter what your app is.

\[00:24:02.11\] So there's a couple of things that we need to implement to make this as a product... And in that case, it would be in this repo, I think. But it could also be a hosted service, like Tigris is maybe, especially if we get the cool domain. Why not? I can see that. And this can be our playground; the Pipe Dream can be our playground. But then the real thing, with all the bells and whistles, could be private.

**Jerod Santo:** Yeah, I think we build Pipe Dream in the open, and then if we decide that there's a possibility there, then you genericize it in a separate effort.

**Gerhard Lazu:** Yeah. The one thing which I do want to mention is that there's a few people that helped contribute. This is also time for shout-outs...

**Jerod Santo:** Of course.

**Gerhard Lazu:** ...to Matt Johnson, one of our listeners.

**Jerod Santo:** Shout-out to Matt.

**Gerhard Lazu:** And also James A. Rosen. He was there from the beginning. So the first recording that we did, that's already live. The second one as well that we recorded; I haven't published it yet, I still have to edit it. But that was basically the second pull request that we got together. And even though a bunch of work went obviously in the background, before we got together, when we did get together, it was basically putting all the pieces. So we did like in this very open source group spirit. And yeah, so there's that.

So I think keeping that true to open source would be important. And if not, then we would need to make the decision soon enough so we know which direction to take. But you're right - rug pulls, not a fan at all. We should never do that. And even the fact that we're discussing so openly about this, I welcome that. I think it's amazing, this transparency, so that we're always straight from the beginning what we're thinking, so that no one feels that they were misled in any way.

**Jerod Santo:** Agreed, agreed.

**Gerhard Lazu:** I like it. Well, the last thing I would like to mention on this topic before I'll be ready to move on is that we livestream the CDN journey at Changelog with Peter Mbanugo. There'll be a link in the show notes. We got together and we talked about where we started, how we got to the idea of the Pipe Dream, and where we think of going. So if you haven't watched that yet, it'd be worth -- there was a slideshow. Not as good as the last one, the last Kaizen, but it was... I'm happy with it, let me put it that way.

**Jerod Santo:** Awesome.

**Gerhard Lazu:** Cool.

**Jerod Santo:** We'll link that up.

**Break**: \[00:26:25.14\]

**Jerod Santo:** What's next? Custom feeds.

**Gerhard Lazu:** That's one of your topics, Jerod...

**Jerod Santo:** Custom feeds.

**Gerhard Lazu:** So tell me about it. I don't know what it is... I know what it is, but I don't know what exactly about custom feeds you wanted to dig into.

**Jerod Santo:** Yeah. So custom feeds is a feature of Changelog.com that we've wanted to build for a long time... Probably not quite as long as we waited on chapters, but we've been waiting, mostly because I had a false assumption, or maybe a more complicated idea in mind. We wanted to allow our Plus Plus members to build their own feeds for a long time. The main reason we want to allow this is because we advertise Changelog Plus Plus as being better. Don't we, Adam?

**Adam Stacoviak:** Yeah. It is better.

**Jerod Santo:** It's supposed to be better. However, people that sign up and maybe only listen to one or two of our shows, whereas they previously would subscribe publicly to JS Party, for instance, and maybe Ship It, they now have to get the Plus Plus feed, which was - because of Supercast, all of our episodes in one ad-free master feed. And so for some people that was a downgrade, because they're like "Wait a second, I want the Plus Plus versions, but I also don't want all your other shows", to which we were quite offended, but we understand. And that's been the number one request. I would call it a complaint, but actually, our supporters have been very gracious with us. They ask for it, but they don't -- they say it's not a big deal, but it would be nice. In fact, some people sign up for Plus Plus and continue to consume the public feeds, because that's what they want to do.

But we wanted to provide a solution for that for a very long time, and because it was Plus Plus only, I had it -- in terms of like blockers, I had this big blocker in front of it, which was "We need to get off Supercast first. Because that's the reason why it's a problem, is because Supercast works this way", which is our membership system that's built all for podcasters... And it's served us very well, but it has some technical limitations such as this one.

So moving off Supercast is a big lift, and not one that I have made the jump yet, because there's just other things to do, and it works pretty well, and lots of reasons... And so I didn't do custom feeds for a long time thinking "Well, we've got to get off of Supercast first." And then one day it hit me. "Why? Why do we have to get off of Supercast? Can't we limp into this somehow? Can't we just find out a way of doing it without getting off of Supercast?" And the answer is actually pretty simple. It's like "Well, all we need to know is "Are you a Plus Plus member or not", locally to our system, which lives in Supercast? And then I remembered, "Well, Supercast is just using Stripe on the backend", and it's our Stripe account. And that's awesome, by the way. They give us direct access to our people, and no lock-in and stuff... And so kudos to them for that. And so I was like "No, all we actually have to know is do you have a membership?" And all the membership data is over in Stripe. And so it's simply a Stripe integration away from having membership information here in Changelog.com. So I built that, it worked just fine. And then I realized, "Okay, now I can just build custom feeds, and just allow it to people who are members..." And so we built out custom feeds, and it's pretty cool. Have you used them, Gerhard? Have you built a custom feed?

**Gerhard Lazu:** No. I still consume the master feed, the Master Plus Plus feed, with everything.

**Jerod Santo:** The Master Plus Plus feed. That's fair.

**Gerhard Lazu:** But do you know what I would love to do? To build one now.

**Jerod Santo:** Oh, you would.

**Gerhard Lazu:** Yeah. Let's see what happens if we do that. So Changelog.com... How do I do that? Like, run me through that, Jerod. I sign in...

**Jerod Santo:** Are you a Plus Plus member? Of course you are, because you have the Plus Plus feed.

**Gerhard Lazu:** Yeah.

**Jerod Santo:** Okay. So sign in Changelog.com, and go to your home directory, with tilde.

**Gerhard Lazu:** Yes, I'm there.

**Jerod Santo:** And there you should see a section that says Custom Feeds.

**Gerhard Lazu:** I do see it.

**Jerod Santo:** Okay. Click on that sucker.

**Gerhard Lazu:** Get started. Okay. New feed. Alright.

**Jerod Santo:** There you go. Add a feed. Now, you're going to give it a name; that's required. Call it Gerhard's Feed.

**Gerhard Lazu:** Yes, sure. Gerhard's Feed.

**Jerod Santo:** You can write your own tagline, and that'll show up in your podcast app. You can be like "It's better."

**Gerhard Lazu:** \[00:34:04.27\] Hang on. I'm still at tagline. "Jerod made me do this."

**Jerod Santo:** Okay...

**Gerhard Lazu:** \[laughs\] Okay. Moving on.

**Jerod Santo:** Then you get to pick your own cover art, because hey, you may be making a single show a feed, maybe you're making all the shows... You can pick the Plus Plus one, you can pick a single show... Pick your cover art; or you can upload your own file. You've gotta pick a title format...

**Gerhard Lazu:** Hang on...

**Jerod Santo:** So this is how the actual episode titles come into your podcast app. Maybe you want to say like the podcast name, colon, the title of the episode... Maybe you just want episode titles... You know, put a format in there. And then you can limit your feed to start on a specific date. Some people want like fresh cuts, between the old days and the new days, and so they want to start it on this date, because it doesn't mess up their marked as red, or whatever.

**Gerhard Lazu:** Okay. September 13th. Start today.

**Jerod Santo:** It'll start today.

**Gerhard Lazu:** Okay.

**Jerod Santo:** It's going to be empty. And then pick the podcast you want.

**Gerhard Lazu:** Okay. So hang on... Oh, I see. Okay. Okay. I see. I see. So upload cover art... That's the thing which was messing with me, because I wanted to add mine, but then it said, "Or use ours." And when you say "Or use ours", I'm basically changing the cover art which I uploaded, with one of yours. Interesting.

**Jerod Santo:** Right. Ours as in a Changelog cover art that previously exists.

**Gerhard Lazu:** Got it.

**Jerod Santo:** So you can like use JS Party's, or upload your own file, and you'll have your own cover art for your own feed.

**Gerhard Lazu:** Okay. So I've made a few changes. First of all, the name is Gerhard & Friends.

**Jerod Santo:** Okay.

**Gerhard Lazu:** The description is Kaizen 16, this episode.

**Jerod Santo:** Okay.

**Gerhard Lazu:** The cover art - I uploaded one, but then I changed it to Changelog & Friends.

**Jerod Santo:** Okay.

**Gerhard Lazu:** Starts today, 13th of September.

**Jerod Santo:** Yes.

**Gerhard Lazu:** Title format, I will leave it empty. And for the podcast, I'll choose Changelog & Friends. Okay.

**Jerod Santo:** Yes.

**Gerhard Lazu:** And this feed should contain Changelog Plus Plus, ad-free, extended audio. Yes.

**Jerod Santo:** Bam.

**Gerhard Lazu:** And automatically add new podcasts we launch. I'm going to deselect that, because I only want Changelog & Friends. Save.

**Jerod Santo:** Perfect.

**Gerhard Lazu:** Boom. It's there.

**Jerod Santo:** There you go. You built a custom feed. You can grab that URL, pop it into your podcast app, subscribe to it...

**Gerhard Lazu:** Got it. And I've found the first bug.

**Jerod Santo:** No, you didn't.

**Gerhard Lazu:** So the bug is, if I upload my cover art, and then I select another cover art from one of yours, it uses my cover art, but not in the admin. In the admin it shows me that it's using yours, but when I create the feed, it's using my cover art.

**Jerod Santo:** Okay, so you did both.

**Gerhard Lazu:** I did both, yes.

**Jerod Santo:** And then submitted the form?

**Gerhard Lazu:** Correct, yes.

**Jerod Santo:** Okay. You are the first person that's done that, I think.

**Gerhard Lazu:** Of course. \[laughter\] Of course.

**Jerod Santo:** People usually pick one or the other... So okay, open an issue. I will get that fixed.

**Gerhard Lazu:** I will. Let me take a screenshot so that I remember. Boom. There.

**Jerod Santo:** Awesome.

**Gerhard Lazu:** Cool. It looks great. Actually, hang on... The picture which I want for this cover art is us three recording right now. So if Adam looks up, I'll take a screenshot... There you go. That will be my cover art. Got it.

**Adam Stacoviak:** Love it.

**Gerhard Lazu:** Too good.

**Jerod Santo:** So custom. So cool. You know, one thing I was going to do, which I haven't done yet - this is a reminder - is I want to put the Changelog legacy cover art in the list. Don't you think so, Adam? Like, you can have the old Changelog legacy logo if you want.

**Adam Stacoviak:** That would be cool, actually. Super-dope.

**Jerod Santo:** Yeah. That's an idea we had, is like to expand these, to like a bunch of -- maybe have like custom artists come in and create new cover art you can select from... That might be cool.

**Gerhard Lazu:** Very cool.

**Jerod Santo:** But yeah, it's been kind of a screaming success, honestly. Currently we have 320 Changelog++ members, and those 320 people have created 144 custom feeds so far.

**Gerhard Lazu:** \[00:38:00.22\] Including mine.

**Jerod Santo:** Including yours. I see yours right there. And the cover is your face.

**Gerhard Lazu:** Correct.

**Jerod Santo:** Yes.

**Gerhard Lazu:** Cool. So cool.

**Jerod Santo:** So that's the feature.

**Gerhard Lazu:** That's amazing. It worked very well, I have to say. I just still have to load it in my podcast player... But once I do that, amazing.

**Adam Stacoviak:** Well, let's stop there then, because that's where I'm at, and that's where I'm stuck, Jerod.

**Jerod Santo:** You're also stuck?

**Adam Stacoviak:** Yes. So Gerhard's next step is to do what I've done, and I think he may have the same outcome. I don't know. My outcome was I loaded the URL into my clipboard, on my iPhone, opened up Overcast, Add Podcast via URL, did that, clicked Add URL, and it says "Not a valid URL."

**Jerod Santo:** Does yours have a start date?

**Adam Stacoviak:** No.

**Jerod Santo:** Okay.

**Adam Stacoviak:** I don't think so.

**Jerod Santo:** So yours has a bunch.

**Gerhard Lazu:** Hang on... The URL only contains feeds. It's /feeds/ a SHA. So it doesn't have the full --

**Jerod Santo:** Oh, I might have screwed that up yesterday when I was fixing something else. When I was giving you your account.

**Adam Stacoviak:** Well, this has been weeks for me. I just haven't reported it to you yet.

**Gerhard Lazu:** And you've been waiting for this, to do it live?

**Jerod Santo:** Why would you wait this long? Were you waiting for this?

**Adam Stacoviak:** Yes. Public embarrassment.

**Gerhard Lazu:** \[laughs\]

**Adam Stacoviak:** No... Just the fact that I just haven't done it yet. I'm sorry.

**Jerod Santo:** Okay. No, that's alright. I think that that Copy URL button should have copied the entire URL. Did it just give you the path, Gerhard?

**Gerhard Lazu:** It did. Yes.

**Jerod Santo:** No wonder it's not a valid feed. So I literally fussed with that yesterday, because I was giving Adam a different copy-paste button, and I might have broken it yesterday.

**Gerhard Lazu:** Now, interestingly, if I hover over it, I can see the correct link. But when I click on it, I only get the path.

**Jerod Santo:** Yeah. The href is correct, but the data dash copy value is incorrect.

**Gerhard Lazu:** Right. So --

**Jerod Santo:** And I'm pretty sure I broke that yesterday. So that used to work, because all these other people were happy... But you're sad because I broke it yesterday.

**Gerhard Lazu:** So I have a quick fix... You right click the get URL, and you say Copy URL, rather than relying on the click action.

**Jerod Santo:** Right.

**Gerhard Lazu:** And then you get the proper URL.

**Jerod Santo:** Try that, Adam.

**Gerhard Lazu:** Let's see if that works.

**Adam Stacoviak:** Let's see here. Copy link... Did it solve my problem? Let me enter it... Boom goes the dynamite. It's at least not yelling at me. It is taking its time, though. So...

**Jerod Santo:** Well, the other reason why that was happening probably a few weeks ago is because if you loaded a feed that has all of our episodes, for instance, a thousand plus, 12-megabyte XML file, we would serve it slow enough that Overcast would time out, and it wouldn't think it was a valid feed. But then I fixed that by pushing everything through the CDN. Because at first, when I first rolled it out, it was just loading directly off the app servers. And I know it's just a little bit too slow for Overcast.

**Adam Stacoviak:** Right. Okay. Next question then. This is a UX question. I am not a Plus Plus subscriber, but I can click the option, and I assume it does nothing, to say "This feed should contain Plus Plus, ad-free, extended audio." I haven't clicked play, because I just literally loaded it for the first time now... But I'm assuming that I won't have Plus Plus content, because I'm not a Plus Plus subscriber. Is that true? No, I do have Plus Plus content.

**Jerod Santo:** I'm thinking you are an admin, and so it doesn't matter.

**Adam Stacoviak:** Okay, gotcha. So does this check then only show up for people who can check it?

**Jerod Santo:** The entire UI for building custom feeds only shows up if you are an active Plus Plus member or an admin, which is literally the three of us.

**Adam Stacoviak:** Okay. That makes more sense then.

**Jerod Santo:** Like, you can't even build custom feeds. Now, I did consider custom feeds for all. Let the people have the custom feeds... But Plus Plus people obviously would be the only ones who get the checkbox. That's something that I'd be open to if lots of people want it... But for now, I was like "Well, let's let our Plus Plus people be special for a while."

**Adam Stacoviak:** \[00:41:54.27\] Is there a cost center with these custom feeds? Is there an additive to the cost if we were having to deal with costs?

**Jerod Santo:** Marginal.

**Adam Stacoviak:** Okay.

**Jerod Santo:** Every custom feed has to be updated every time an episode is updated, and so if we had 100,000 of them, there would be some processing, and maybe hit some R2 too many put actions versus, versus -- you know, it's free egress, but it's not free all operations.

And so there's class A operations, class B operations... And the more you edit those files and change them, I think eventually those operations add up to costing you money, but it's marginal on the margins. If it got to be a huge feature, where -- I mean, if we had 100,000 people doing custom feeds, we'd find a way of paying for that. You know? \[laughs\]

**Adam Stacoviak:** Yeah. It's a different problem.

**Jerod Santo:** But yeah, it's a marginal cost, but not worth considering.

**Adam Stacoviak:** Gotcha. Okay. So the copy can be updated pretty easily. It's probably a fix going on already for that, because it's so simple.

**Jerod Santo:** Yeah. Before this ships it'll be out there.

**Adam Stacoviak:** Good. Well, because - I mean, I was like "Well, how do I get this URL to my iPhone?" I guess I can like copy it and like airdrop it to my iPhone, and maybe it'll open up in the browser... And I was like "Let me just go on the web and get URL, essentially."

**Jerod Santo:** Yes. Our user experience assumes that our users are nerds... And so far, before I broke that copy button yesterday, there's been zero people who are like "Now, how do I get this into my podcast app?" No one's asked us that, because all of our Plus Plus members completely understand how to copy and get into their whatever; they are smarter than me, most of them.

Now, if it was for a broader audience, and this was a baking show, and we were going to provide custom feeds for bakers, or aspiring bakers, then I probably would have to have more of a hand-holding -- and Supercast actually does a really good job of hand-holding you into your private feed, because it's not a straightforward mental process for most people; just for nerds.

**Adam Stacoviak:** Yeah. Yeah, I agree. It kind of requires some workaround... There's really nothing you could do about that. I mean, you're adding literally a custom feed via a URL that that no index knows about, so it's obvious you have to do some sort of workaround to get there, to get your feed into your --

**Jerod Santo:** Yeah... I mean, a better UX would be after the custom feed's created, we send you an email, and that email contains a bunch of buttons. Each button's like Add to Overcast, Add to Pocketcast, add to Apple Podcasts. And depending on --

**Adam Stacoviak:** I like that idea a lot.

**Jerod Santo:** That's how Supercast works.

**Adam Stacoviak:** Yeah, I like that idea a lot. Email them every time it changes, so that they go and -- upon creation, and now that is immutable until... Well, theoretically immutable, until they edit it again. And then it's muted, it's in stone.

**Jerod Santo:** Mutated?

**Adam Stacoviak:** Yeah, it's mutated.

**Jerod Santo:** We could certainly add a button that says "Email this to me", next to get URL. Maybe like "Email me the URL."

**Gerhard Lazu:** It's a good idea.

**Jerod Santo:** And that's like a fast way to get it into your phone without having to do phone copy-paste, or airdrop like Gerhard did...

**Adam Stacoviak:** Yeah. Because you don't know about the email happening.

**Jerod Santo:** So that's a good feature even for nerds, because it's just easier that way.

**Adam Stacoviak:** Well, that would have solved the problem of me having to get the data onto my iPhone.

**Jerod Santo:** Totally.

**Adam Stacoviak:** Which, my email is.

**Jerod Santo:** Exactly. I think we should add that as a feature.

**Gerhard Lazu:** It's a good idea.

**Jerod Santo:** Hey, Jerod here in post... That email it to me feature just shipped today, and that copy-paste bug - fixed. Kaizen.

**Adam Stacoviak:** Custom feeds are here, y'all, if you're a Plus Plus subscriber. By the way, Changelog.com/++. It's better.

**Jerod Santo:** If you are not a Plus Plus subscriber and you desperately want this feature, let us know... Because you know, squeaky wheels and oil...

**Adam Stacoviak:** Must be in Zulip... \[laughs\] It's the other catch, right? Anyways...

**Jerod Santo:** Well, Gerhard's not even on Zulip yet, so let's not get ahead of ourselves.

**Gerhard Lazu:** No, but what's the URL? Because I would like to join.

**Jerod Santo:** Changelog.zulipchat.com.

**Gerhard Lazu:** Okay. But can you just get on from there? I don't know, it's new to us.

**Gerhard Lazu:** Zulipchat.com. I'm doing it now. Let's see. Log in. Okay. Log in with Google. There we go. Yes, continue... Okay.

Sign up. You need an invitation to join this organization.

**Jerod Santo:** \[00:46:10.08\] Alright, go to our Slack, go to Main, scroll up a little bit... You'll see there's an invite link.

**Adam Stacoviak:** To get into Zulip, you have to go to Slack.

**Jerod Santo:** \[laughs\] It's a Trojan horse. That's how you do it.

**Adam Stacoviak:** That's right.

**Jerod Santo:** Install one through the other.

**Adam Stacoviak:** Listeners, you could do this, too. You can follow the same instructions. It is in Main... I think it's Friday, September 6th.

**Gerhard Lazu:** Okay.

**Adam Stacoviak:** Jerod posted it as a reply to, after that conversation, "Now we're trying out Zulip, in earnest." And there's a link that says "Join Zulip here", and it's a long link that I could read on the air, but no one would ever hand-type that in.

**Gerhard Lazu:** No. I agree.

**Adam Stacoviak:** We can put it in the show notes though, so it might be there.

**Jerod Santo:** So there you go.

**Adam Stacoviak:** Yeah. We've shared our thoughts already elsewhere on Friends with this, but I'd be curious... We'll be so many Kaizens away - well, at least one more Kaizen away, multiple months, before we get Gerhard's...

**Jerod Santo:** By the next Kaizen, we may be transitioned over to Zulip.

**Adam Stacoviak:** We might be self-hosting it, but I don't think we should do that.

**Gerhard Lazu:** No way, there's a Kaizen channel...! This makes me so happy.

**Jerod Santo:** Yes, and it's for all ideas about making things better, and stuff. I even put one in there, you can read it.

**Gerhard Lazu:** Oh, wow. Okay. I'm definitely going to check this out. This is nice. This is a very nice surprise. It was worth joining, just for this.

**Adam Stacoviak:** Oh, wow...!

**Gerhard Lazu:** So cool.

**Adam Stacoviak:** This is nice!

**Jerod Santo:** Yeah. Isn't that cool? I thought a Kaizen channel would be on point.

**Gerhard Lazu:** So cool.

**Jerod Santo:** So I was kind of thinking "Well, how do we replicate our dev channel over here?" And it's like "Well, dev is just one thing. Let's have a Kaizen, and then different topics can be based on --"

**Gerhard Lazu:** Big thumbs up.

**Jerod Santo:** Yeah.

**Gerhard Lazu:** Big thumbs up. So amazing.

**Jerod Santo:** Alright. Awesome. Custom feeds, Zulip chat, kaizening... What's next on the docket?

**Gerhard Lazu:** Well, I'm going to talk about one very quick improvement. Actually two, which I've noticed... The news.

**Jerod Santo:** Yes.

**Gerhard Lazu:** I love the latest.

**Jerod Santo:** Oh, you like that?

**Gerhard Lazu:** That graphic is so cool. I really like the small tweaks. Also the separators, the dividers between the various news items... They just stand out more. I really, really like it. And it feels like more -- the Play button is amazing, by the way. I love it. I can definitely see it.

**Jerod Santo:** I made the Play button stand out.

**Gerhard Lazu:** Yeah. It feels so polished.

**Jerod Santo:** Thank you.

**Gerhard Lazu:** It really does. But the latest is so amazing. And the news archive - it's there, and it works.

**Jerod Santo:** Yes, it is.

**Gerhard Lazu:** Amazing. So...

**Jerod Santo:** I appreciate your enthusiasm. To tell everybody what the latest is... I literally put an arrow and the words "The Latest" on our homepage that points to the issue. Because it's kind of -- it could be discombobulating. Like, you look at it -- on a desktop, at least. On mobile, it goes vertical. But like on the left is kind of the information about news, and the signups and stuff. And on the right is the latest issue. But you may not know, like, "What am I looking at?" when you land on the page. What's the thing on the right-hand side? And so I just put this little arrow, hand-crafted with SVG, by the way... And the words "The latest." Someone's just scratched them on the page. That points to that issue. So it's just kind of giving you a little bit of context... And Gerhard loves it, so I appreciate that.

**Gerhard Lazu:** It gives us another dimension, it's playful... It's like, there is some fun to be had here. It's not just all serious. It's not like another news channel... But it's really, really nice. The whole thing - it feels so much more polished compared to last time. I can definitely see like the tiny, tiny improvements. Very cool.

**Adam Stacoviak:** So much Kaizen.

**Gerhard Lazu:** Indeed.

**Jerod Santo:** Polishing.

**Gerhard Lazu:** Cool. Well, the next big item on my list is to talk about twice, 2x faster time to deploy. This is something we just spent a bit of time on... I was surprised, by the way - the latest deploy was slower than 2x, but we can get there.

**Jerod Santo:** Okay...

**Gerhard Lazu:** The first thing which I would like to ask is how do you feel about our application deploys in general? Does it feel slow? Does it feel fast? Does it feel okay? Do you feel surprised by something? How do application deploys, when you push a change to our repo feel to you?

**Jerod Santo:** Historically or after this change?

**Gerhard Lazu:** Historically.

**Jerod Santo:** Historically, I would say too slow.

**Gerhard Lazu:** \[00:50:04.29\] Too slow. Okay. Adam?

**Adam Stacoviak:** Yeah, historically too slow.

**Gerhard Lazu:** Okay. Okay. So what would make them not too slow?

**Jerod Santo:** Maybe like a 2x improvement might do it... \[laughter\]

**Gerhard Lazu:** That's so \[unintelligible 00:50:18.06\] I literally meant like how many minutes or seconds -- I think we talked about that...

**Jerod Santo:** We have.

**Gerhard Lazu:** ...would it feel that it's good enough?

**Jerod Santo:** There's this threshold that I'm not sure exactly... It's probably fuzzy, but it's the point like where you're waiting so long that you forget that you're waiting, and you go do something else. And I think that's measured in single-digit minutes, but not necessarily seconds. Like, I can wait 60 seconds. I can wait one minute, and maybe I'm just hanging out in chat, waiting for that thing to show me that it's live. But as soon as it's longer than that, I'm thinking "Well, I should come back in five." Then I forget what I was doing, I don't come back, and I've lost flow, basically.

So I would say around a minute... 30 seconds would be spectacular. It doesn't have to be instant, but I think two, three, four, five minutes - it's going to be where you're like "Yeah..." It's kind of like friction to deploy, because you deploy it and you're like "Now I've got to wait 5 or 10 minutes." That's my very fuzzy answer.

**Gerhard Lazu:** Okay. That's a good one. So what used to happen before this change - we used to run a Dagger engine on Fly, so that it would cache previous operations... So that subsequent runs would be much quicker, especially when nothing changes or very little changes. The problem with that approach was that from GitHub Actions you had to open a WireGuard tunnel into Fly, so that you'd have that connectivity to the engine.

And what would happen quite often is that tunnel, for whatever reason, would maybe be established, but you couldn't connect to the instance correctly... And you would only find that out a minute or two within the run. And then what used to happen - you would fall back to GitHub, which is much slower, because there's no caching, there's no previous state... And the runners themselves, because they're free, they are slower. Two CPUs and seven gig, which means that when you have to recompile the application from scratch, it can easily take seven, eight, ten minutes. And that's what would lead to those really slow deploys.

So what we did between the Kaizens, since the last Kaizen - let me see which pull request was that... It was pull request 522. So you can go and check it out, to see what that looks like. So when everything would work perfectly, when the operations would be cached, you could get a new deploy within four minutes; between four and five minutes, thereabouts. And with this change, what I was aiming for is to do two minutes or less.

And when I captured, when I ran this, the initial tests and so on and so forth, we could see that while the first deploy would be slightly slower, because there was nothing, subsequent deploys would take about two minutes. Two minutes and 15 seconds, the one which I have right here, which is a screenshot on that pull request 522.

So how did we accomplish this? We're using Namespace.so, which - they provide faster GitHub Actions runners; basically, faster builds. And we run the engine there. And when a run starts, we basically restore everything from cache, the Namespace cache, which is much, much faster... And we can see up there basically - like, per run, we can see how much CPU is being used, we can see how much memory... Again, these are all screenshots on that pull request.

And while the first run obviously uses quite a bit of CPU, because you have to compile all the Elixir into bytecode and all of that, subsequent runs are much, much quicker.

\[00:54:00.22\] And the other thing which I did, I split the -- let's see, is it here? It's not actually here. We need to go to Honeycomb to see that. So I'm going to Honeycomb to look at that. I've split the build time, basically the build test and publish, from the deploy time, because something really interesting is happening there. So let's take, for example - before this change, let's take Dagger on Fly, one of the blue ones, and have a look at the trace. So we have this previous run, which actually took four minutes and 21 seconds. And all of it is like all together. It took basically three minutes. There's some time to start the engine, to start the machine, whatever, whatever. All in all, 4 minutes and 20 seconds.

So in your run, for example, this one, which was fairly fast, it was two minutes and a half, if we look at the trace. We can see that Dagger on Namespace... The build test and publish was 54 seconds. So in 54 seconds we went from just getting the code, to getting the final artifact, which is the container image that we ship into production. In this case, we basically publish it to gcr.io. And then the deploy starts. And the deploy took one minute and 16 seconds.

So we can see that -- you know, with this split it's very clear where the time is spent. And while the build time and the publish time is fairly fast - I mean, less than a minute in this case - the deploy takes a while, because we do blue/green, new machines are being promoted, the application has to start, it has to do the health checks... So there's quite a few things which happen behind the scenes, that if you look at it as like one unit, it's difficult to understand.

So this was ideal case. This is what I thought would happen. Of course, the last deploys, if I'm just going to filter these Dagger on Namespace - by the way, we are in Honeycomb... We send all the traces, and all the build traces from GitHub Actions to Honeycomb... And you can see how we do that integration in our repo. You can see that we had this one, 2.77 minutes, which is roughly 2:40. But the next one was surprising, which took nearly five minutes. And if I look at this trace, this was - again, nothing changed; stuff had to be recompiled. But in this case, the build test and publish took nearly three minutes, which - this tells me there's some variability into the various runs when it builds it. I don't know why this happens, but I would like to follow up on that.

As a TL;DR, this change meant that we have less moving parts, and when Namespace works - and this is something, again, that we need to understand "Why did this run take longer?" It should take within two minutes, we should be out; a change should be out in production. Half the time is spent in build, and half the time is spent on deploys. So when it comes to optimizing something, now we get to choose which side do we optimize. And I think build test and publish is fairly fast. The slower part is the actual deployment. So how can we maybe halve that? How can we get those changes once they're finished, and everything is bundled, how could we get it out quicker?

**Jerod Santo:** Mm-hm. I love it. Do you have ideas on that?

**Gerhard Lazu:** Well, I think the application boot time could be improved... Because it takes a while for the app to boot. When I say it takes a while, it may take 20-30 seconds for it to be healthy, all the connections to be established... Now, I'm not sure exactly which parts of those would be the easiest ones to optimize. But I think the application going from the deploy starting and deploy finishing, taking a minute and a half is a bit long. So I'll need to dig deeper, like "Is it when it comes to connecting to the database? Is it just the application itself being healthy? Which part needs to be optimized?" But again, we're talking -- this is like a minute and a half. We're optimizing a minute and a half, just to put this into perspective. And that's why I started with the question, "How fast is fast enough?"

**Jerod Santo:** \[00:57:59.18\] Yeah. And I think if you're at 90 seconds, you're probably right about there. I would still go in and spend an hour thinking "Is there a low-hanging fruit that we haven't looked at yet, that we could squeeze 10 more seconds off?" And then I would stop squeezing the radish after that, you know?

**Gerhard Lazu:** I see.

**Jerod Santo:** That'd be my take on it. Adam?

**Adam Stacoviak:** Well, the flow it seems is -- every time new code is pushed to our primary branch on the repository, a new deploy is queued up. And this process happens for each new commit...

**Gerhard Lazu:** Correct.

**Adam Stacoviak:** ...to the primary branch. A new application is spun up, it's promoted... So if I deploy/push new code, and then a minute later Jerod does the same thing, my push does this process, my application is promoted. Jerod's commit does the same thing. His application is then promoted. And that's via networking. And then these old machines are just thrown off, and then the new machines are promoted, and they just fall by the wayside.

**Gerhard Lazu:** Correct.

**Adam Stacoviak:** Which totally makes sense. I think you have things happening that we want to happen. I agree with you on the low-hanging fruit... But on the app boot process, we've got even things like 1Password being -- those things being injected from their CLI. I'd imagine that API call is not strenuous, but it's probably seconds, right? So probably in each thing we're booting up as part of the app boot process, for every commit, there's at least one to several seconds per thing we're instantiating upon boot. Well, that's just me hypothesizing how things work, because...

**Gerhard Lazu:** No, that's a good one. That's exactly what... We're like trying to hash it out, so that we share the understanding that each of us holds, so that we can talk about like what would be -- because we talked about this in the past, and I really liked Jerod's question... He was asking -- we were talking about like kaizening, and we were talking about all this change, but "Are we actually improving?" And that's why when I try to think about this - and I was thinking about "Okay, what would the improvement look like?" And can we -- I mean, we can measure it, and we can check "Have we delivered on this?" And until like the last deploy that went out, I was fairly happy with the time/duration that these deploys were taking... But based on the one which I have right in front of me, the build going from one minute and a bit to almost three minutes - I think that variability is something that I would like to understand first, before optimizing the boot time.

**Adam Stacoviak:** Is it the CPUs then that's impacting it, do you think? Like the CPUs and the horsepower behind the build test?

**Gerhard Lazu:** Well, let's open up Namespace... Let's go to instances... We can see the last build, which - you can see here all the builds.

**Adam Stacoviak:** This is inside Dagger, is that?

**Gerhard Lazu:** This is Namespace. All this is Namespace, by the way. So we're using Namespace for the runners... And I would like --

**Jerod Santo:** This is a third-party service that's --

**Gerhard Lazu:** It is a third party service, yes.

**Jerod Santo:** That you just found, or someone told you about, or...?

**Gerhard Lazu:** Exactly, yes. I am paying attention to various build services, and... You know, \[unintelligible 01:01:02.10\]

**Jerod Santo:** I love that. Namespace.so?

**Gerhard Lazu:** Namespace.so, yes.

**Jerod Santo:** Our trial is almost over...

**Gerhard Lazu:** Exactly, yes. Now, how much will it cost us, by the way? Every minute --

**Adam Stacoviak:** Three days left on your trial...

**Gerhard Lazu:** Three days left of our trial, yes.

**Jerod Santo:** I'm getting nervous here...

**Gerhard Lazu:** So hang on... Per minute, we're paying $0.0015. Which means that for 40 minutes -- okay, for an hour, we're paying less than 10 cents, for an hour of build time. So pay as you go... It's really not expensive. So it's okay if I have to put my card, because we're talking cents per month, for our builds.

**Jerod Santo:** That makes sense. What does a single build cost us then?

**Gerhard Lazu:** So when it's five minutes -- let's see, I'll do the math now really quick. Hang on.

**Jerod Santo:** Thank you.

**Gerhard Lazu:** Hang on. It's less than a cent. A build which takes five minutes is less than a -- less than a cent...? Is that right? Yeah, less than a cent. 75... What is less than a cent?

**Jerod Santo:** Zero cents... \[laughs\]

**Gerhard Lazu:** No. There was like another unit in the past. I forget what it's called... Whatever.

**Jerod Santo:** \[01:02:10.21\] A satoshi? No, that's a different --

**Gerhard Lazu:** 75% of a cent.

**Jerod Santo:** Okay. So that's reasonable.

**Gerhard Lazu:** Yeah. Very, very reasonable, I would say.

**Adam Stacoviak:** Three quarters of a cent.

**Jerod Santo:** And if we get down faster, it's even less.

**Gerhard Lazu:** Exactly.

**Adam Stacoviak:** What exactly does Namespace do, though? I mean, is it just a machine that has proprietary code on it that we send something to do a build process?

**Gerhard Lazu:** So Namespace, basically - it runs custom GitHub Actions, much quicker, because they have better hardware, better networking than GitHub Actions themselves. So you can literally use Namespace to replace GitHub Actions.

**Jerod Santo:** So they just use the Actions API, but you're running on their infra.

**Gerhard Lazu:** Correct. Exactly.

**Jerod Santo:** Smart.

**Gerhard Lazu:** Or you can use like \[unintelligible 01:02:56.14\]. They also have preview environments, which I haven't tried, and code sandboxes... That's something new.

**Jerod Santo:** Sponsor...

**Gerhard Lazu:** That's what I'm thinking... Because I have a shout-out here. And hang on, let me just get the name straight...

**Jerod Santo:** To be clear, they are not a sponsor, but we're saying they should be.

**Gerhard Lazu:** I think they should be. I think Hugo -- I just know his first name, and I'm trying to find...

**Adam Stacoviak:** Yeah, because our credit card is expiring.

**Gerhard Lazu:** Right. We need those six cents, don't we? We need those six cents.

**Jerod Santo:** That's Gerhard's credit card for now...

**Gerhard Lazu:** Exactly. You can use mine, it's okay. Hugo Santos.

**Jerod Santo:** No relation. No relation.

**Gerhard Lazu:** Yeah, no relation, no relation. But I think if there is someone that you should talk at Namespace, I think it would be him. As I was setting all this stuff up, he was very responsive, even on the weekend, to emails... And I think he's one of the founders, by the way, so I thought that was like a very nice touch. And he really helped go through all the various questions which I had, and the various "Does this look right?" So he even looked at the pull request to see how we implemented it...

And all in all, the promises there - we can see that it does work well, when it works -- like, two minutes, we get those two minutes. But sometimes it takes more. And then the question is "Well, why does it take more?" So that's something which I'm going to follow up on.

**Jerod Santo:** Cool.

**Gerhard Lazu:** Cool.

**Jerod Santo:** Well, I'm excited for the follow-up and for this progress.

**Gerhard Lazu:** Indeed. Cool.

**Break**: \[01:04:15.00\]

**Gerhard Lazu:** So I would like to switch gears to one of Adam's questions... And he was asking if Neon is working for us as expected, and the state of Neon. So is Neon working for us as expected? Based on everything I've seen, it is. I was looking at, for example, the metrics, I was looking at how it behaves in the Neon console... This is us for the last 14 days. So what we see here in the Neon console - we see our main database, we can see that we have been using 0.04% of a CPU. So really not CPU, but in terms of memory, we have eight allocated; we're using 1.3 gigabytes. 1.3 gigabytes used out of eight allocated. So we are over-allocating both CPU and memory. So a fairly little load, I would say, and things are just humming along. So no issues whatsoever.

**Jerod Santo:** Do we need to push this harder somehow? Like, do we need to get vector search in our database, or something? Weren't you going to set us up an AI agent, Gerhard?

**Gerhard Lazu:** Yes, I was. I didn't get to that. But that would not use this database, by the way. That would be something different now.

**Jerod Santo:** Pgvector, man. Pgvector. Get it in there.

**Gerhard Lazu:** Right. I would, but not in this production database. So this is special. I mean, this is exactly what we want to see. If anything, we can -- because we have the minimum compute setting set to two CPUs and eight gigs of memory, and I know that Neon does an excellent job of auto-scaling us when we need to. We didn't need to get auto-scaled, because we are below the minimum threshold.

**Jerod Santo:** Right.

**Gerhard Lazu:** So we could maybe even lower the threshold and it would still be fine.

**Jerod Santo:** So we're not using this to its fullest extent, is my point.

**Gerhard Lazu:** No.

**Jerod Santo:** So we need some arbitrary workloads in order to push it.

**Gerhard Lazu:** Well, to see where it breaks. We wouldn't need it to break. I think if anything, one thing that I would like us to do more is use Neon for development databases. And I have something there, I haven't finished, but I would like to move on to that as well, if everyone's fine.

**Jerod Santo:** Adam, further thoughts or questions around Neon? This was your baby.

**Adam Stacoviak:** I think the question I have is - you know, while the thresholds are low and we're below our overallocation, what should we expect? And this is good news. This is good news that we're not...

**Jerod Santo:** Yeah, I'm just saying it's hard for us to use it and see if it's good or bad, because we're not heavy database users. And I was just saying we just need some more arbitrary workloads to actually flex this thing. But I was mostly just being facetious.

**Adam Stacoviak:** Gotcha. I'm in the dashboard too, and I'm looking at a different section of that same monitoring section, which is like rows, I believe rows being added... Which is kind of cool, because over time you can kind of see your database updates, essentially; deleted, updated, inserted... So there's definitely obviously activity. We're aware of that.

I think the other things that we should pay attention to in terms of is it working for us as expected - I would say some of that is potentially on you, Jerod, and you too, Gerhard, is that we've got the idea of branching. Gerhard, I know that you're familiar with it, because you demonstrated some of this last time we talked, but... Being able to integrate some of those futuristic, let's just say, features into a database platform. This is managed, it's serverless, we don't have to manage it, we get a great dashboard, we get the opportunity for branches... Have you been using branches, Jerod? Do you need to use branches? Does that workflow not matter to you? The DX and the performance is the two things I think I care about.

**Jerod Santo:** \[01:12:02.18\] So I have a custom branch, which I use to not develop against, but to sync from. I think -- well, I guess it's not mine. It's that Dev2024. That's the one I use. Maybe Gerhard created that, but that's the one that I do use.

**Gerhard Lazu:** Yeah.

**Jerod Santo:** And I pull from that. So I'm not pulling from our main branch, because it's just less load on our main branch to do that. And so I'm using that, but I synchronize it locally, manually, and then develop against my own Postgres. Because I have a local Postgres. The one thing about it is because it's a Neon branch, I will have to go in here and synchronize it back up to the main, and then pull from it. And I'm sure that's automatable, but I just haven't done that. I've been waiting for Gerhard's all-in-one solution.

**Gerhard Lazu:** Yes, that's coming. That's exactly -- that's my next topic to share.

**Adam Stacoviak:** What exactly is that?

**Gerhard Lazu:** Well, that would mean tooling that's local to make all of this easy. Jerod would need to go to the UI to click any buttons, to do anything. He would just run a command locally, and the thing would happen locally. He wouldn't need to even open this UI.

**Adam Stacoviak:** Shouldn't that be a Neon-native thing, though?

**Gerhard Lazu:** It is. It does have a CLI, but the problem is you need to, first of all, install the CLI, configure the CLI, add quite a few flags, connect the CLI to your local Postgres... All that glue - that's the stuff which I've been working on. And I can talk about that a bit more.

**Adam Stacoviak:** And so the idea would be to just automate some of that, not have to go through all the steps.

**Gerhard Lazu:** Correct.

**Adam Stacoviak:** Still do the CLI installation like any normal user would, but maybe a Neon setup script that probably populates a file with credentials, or something.

**Gerhard Lazu:** Some command that you run locally, that knows what the sequence of the steps is, and what to do. For example, maybe you don't have the CLI installed. Well, install the CLI. You need to have some secrets. Well, here's the 1Password CLI... And by the way, the secrets is here, in this vault. So stuff like that, all that.

**Adam Stacoviak:** Yeah. Speaking of 1Password, did you notice their new SDKs? Did you pay attention to their new SDKs they deployed? TypeScript, Go, a couple others, for native integrations... Obviously, we're Elixir, so it doesn't really matter to us... But maybe in some of the Go pipelining I know you've probably done, would it make sense to skip OP and go straight to Go with the SDK? Because OP is their CLI, right? It's the same, it's not an SDK. The SDK lets you natively integrate into the language.

**Gerhard Lazu:** So it's possible to use something else... But at the end of the day, the integration needs to work, and the implementation, whether you use the SDK or whether you use the CLI, is just an implementation.

**Adam Stacoviak:** It just doesn't matter, yeah?

**Gerhard Lazu:** What we care about is like "Is it reliable, our implementation? Do we have any issues with it?"

**Adam Stacoviak:** And so far, no.

**Gerhard Lazu:** Yeah. Are we using like service accounts? And that's something that we've been waiting... Because without service accounts, we would need to set up a Connect server, which I didn't want to do. So that was a big deal for us. Whether you use the CLI or the SDK - we could, but it wouldn't make that much of a difference.

Now, if the application itself, while it runs, it was doing certain things, maybe that's interesting. Maybe we could change some of the boot phase, so that we wouldn't inject the secrets from outside the application. The application itself could get them directly. But I really want to get Elixir releases going. And once we have those, things change a little bit... But it's all just like maybe shuffling some code from here to here, but ultimately it will still behave the same, just like you would maybe bring it into the language. So I haven't seen their latest SDKs, but I would like to check them out. That's a good one for me to look into.

**Adam Stacoviak:** Okay.

**Gerhard Lazu:** \[01:16:05.11\] So the tooling that Jerod was mentioning to make things simpler for him - I've been thinking about it from a couple of perspectives, and I realized that to do this right, it will be slightly harder. And the reason why it's slightly harder is because I would like to challenge a status quo. The status quo is you need Dagger for all of this. Maybe you don't... So I'm trying a different approach. And the mindset that I have for this is Ken Beck, September 2012. For each desired change, make the change easy. Warning, this may be hard. Then make the easy change.

So what I've done for this Kaizen - I made that change easy, which was hard, so that I could make the easy change. So that's what happened.

**Jerod Santo:** How hard was it?

**Gerhard Lazu:** Well, let's have a look at it. So we're looking now at pull request 521. And 521 introduces some new tooling, but I promise it's just a CLI. And what's special about it is that everything runs locally. There's no containers, there's no Docker, there's no Dagger... Everything is local. And I can see Jerod's eyebrows go up a bit, because that's exactly what he wanted all this time.

So what pull request 521 introduces is Just, which is a command runner. It's written in Rust, but it's just a CLI. And if you were, for example, Jerod, or even Adam could try this - if you were to run Just in our repository at the top level, you would see (Just calls them recipes) what is possible. And the one which I think the audience will appreciate is Just Contribute.

So remember how we had like this manual step, like install Postgres, get Erlang, get Elixir, get this, get that... I mean, that's still valid. You can still use that manual approach. Or if you run Just Contribute, it will do all those things for you running local commands. It still uses Homebrew, it still uses ASDF... But everything that runs, it runs it locally.

And the reason why this is cool is because -- I mean, your local machine, whatever you have running, remains king. There's no containers... Again, I keep mentioning this, because that adds an extra layer. And what that means - stuff like for example importing a database in a local PostgreSQL is simpler, because that's what you already have running. Resolving the Neon CLI again - it's just like a brew install; it's there and you wire things together. You don't have to deal with networking between containers, you don't have to pass context inside of containers... Which can be tricky, especially when it comes to sockets, and especially when it comes to special files. So I'm wondering, how will this work out in practice?

And the thing which I didn't have time to do - I didn't have time to implement Just db-prod-import, which would be the only command that you'd run to connect to Neon, pull down whatever it needs to pull down, maybe install the CLI if it doesn't have it, and then just in your local Postgres import the latest copy.

Same thing for Just db-fork, which would be an equivalent of what we had before. The difference is that it was all using Dagger, and containers... Have you used it, Jerod, apart from when we've done it?

**Jerod Santo:** No.

**Gerhard Lazu:** There you go. Adam, have you ever run Dagger in the three years that we've had it?

**Adam Stacoviak:** Never. Not one time.

**Gerhard Lazu:** There you go. How many times did you have to install things locally for you to be able to develop Changelog in the last three years?

**Adam Stacoviak:** Well, that's where my personal angst -- it lives right there, in that question. How many times, what is the pain level... It's high for me.

**Jerod Santo:** \[01:20:09.07\] So Adam might be more excited about this than I am.

**Gerhard Lazu:** Pull request 521. I mean, even you, Jerod, if you want to try it... If you do dry run, it has a dry run option, by the way; it won't apply anything, but it will show you all the commands that would run if you were to run them yourself, for example. And there may be quite a lot of stuff when you look at it that way. But it's a good way to understand, like, if you were to do this locally, and if you were to configure all these things, what would it do without actually doing it? So I tried it on a brand new Mac, and I think that's the recording that I have on that pull request.

**Jerod Santo:** I might need to get a brand new Mac so I can try this.

**Gerhard Lazu:** Look at that. That's a very, very--

**Jerod Santo:** I've been waiting for a good reason to upgrade, you know?

**Gerhard Lazu:** There you go. And honestly, within five minutes, depending on your internet connection, everything should be set up. Everything is local - the Postgres, everything.

What we don't yet have, and I think this is where we're working towards, is how do we, first of all, cleanse the data, so that contributors can load a type of data locally... But I think that's like a follow-up. First of all, we want Jerod to be able to do this with a single command, refresh his local data... And after I have the bulk of the work done, this step is really simple. How simple? Maybe half an hour, at most. That's what I'm thinking. So not much.

**Jerod Santo:** So it should be done before the day's over.

**Gerhard Lazu:** Yeah, it should be done. Exactly, it should be done.

**Jerod Santo:** \[laughs\] The one thing I'm noticing is that you're switching back to brew install Postgres, and I'm just curious about that change.

**Gerhard Lazu:** So I mentioned it in one of the comments when I committed... Basically, when I was installing it via ASDF, the problem was with icu4c. I just couldn't compile Postgres from ASDF correctly. And since then, in Homebrew, we can now install Postgres at 16. So you can specify which major version, which was not possible, I think, two years ago when I did this initially. So there is that.

Now, let's see where this goes. I'm excited about this. If anyone tries it, let us know how it goes for you. If you want to contribute to Changelog... Like, how far does it get? And by the way, I tested this on Linux as well. The easiest way -- there's something hidden there in the Just, it's called actions runner. What it does is exactly what you think it does. It runs a GitHub Actions runner locally; for this you need Docker, by the way... And it loads all the context of the repository inside of that runner. So that's the beginning of what it would take to reuse this in the context of GitHub Actions. And what I'm wondering is, will it be faster than if we use Dagger? That's me challenging the status quo. The answer is either "Yes, it is", and maybe we should do that instead, and it will shave off more time... Or "No, it's not", and then I get to finally upgrade Dagger, because we're on a really old version.

**Jerod Santo:** I was gonna say, you still work at Dagger, right?

**Gerhard Lazu:** I do, yes. Very much so. Yes.

**Jerod Santo:** \[laughs\] Okay. I just wanted to know how much you want to challenge the status quo...

**Gerhard Lazu:** No, no, no, that hasn't changed.

**Jerod Santo:** I'm just kidding, I'm just kidding.

**Gerhard Lazu:** Cool.

**Jerod Santo:** Cool. So for our listener, if you want to try this, github.com/thechangelog/changelog.com, clone the repo, brew install Just, just contribute.

**Gerhard Lazu:** That's it.

**Jerod Santo:** Try those three steps if you're on macOS. If you're on Linux, it's not brew install Just, it's apt-get install, or Yum install, or...

**Gerhard Lazu:** The installations are there.

**Jerod Santo:** Yeah. And then just contribute.

**Adam Stacoviak:** And what should we expect to see when we type in "just contribute"? Is instructions, or a set --

**Gerhard Lazu:** No, no, we do actually run the commands.

**Jerod Santo:** It's going to do it for you, man.

**Gerhard Lazu:** If you do just -n --

**Jerod Santo:** Now what if you have an existing repo, like Adam does? Can he do it, and it should pick up where he --

**Gerhard Lazu:** Yeah.

**Jerod Santo:** \[01:24:01.29\] Yeah. Give that a shot there, Adam.

**Adam Stacoviak:** I'm so scared.

**Gerhard Lazu:** What you could do is if you want, maybe start a new user. It shouldn't mess anything up, to be honest. It just installs -- maybe it does things differently, or it does things twice.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** I don't really know. But it should be safe.

**Adam Stacoviak:** I like this. I mean, I did run Just in our repository. You get contribute, deps, dev, install... These are all the actions, or recipes.

**Gerhard Lazu:** Correct.

**Adam Stacoviak:** Install, Postgres down, Postgres up, tests. And each of those have a little hashtag next to it, which is a comment, essentially, of what the recipe does. So over time we can expect to see more of these Just recipes if this pans out to be long-term. These recipes will potentially get more, and these will be a reliable way to do things within the repository.

**Gerhard Lazu:** And it's all local. That's the big difference. Because before -- I mean, even now, because we still kept Dagger, we still have everything that we had so far... That would always run in containers, which means it won't change anything locally.

And in some cases, that's exactly what you want, especially when you want to reduce the parity between test and production, or staging and production... But in this case, it's local. So you want something to happen locally. And local is not Linux, it means it's a Mac, so then you have that thing to deal with... In which case brew helps, and ASDF helps, and a couple of tools help. But you still have to know what are the commands that you have to run, in what order, what needs to be present when... And this basically captures all those commands. It's a little bit like make, which we had, and we removed... But this is a modern, I would say, version of that. Much simpler, much more streamlined, and a huge community around it. I was surprised to see how many people use Just. By the way, huge shout-out to Casey, the author of Just. I really like what he did with the tool. 20,000 stars on GitHub... A lot of releases; 114 fresh releases. 170 contributors. Yeah, it's a big, big ecosystem, I have to say.

**Adam Stacoviak:** One more question on this... Without me having to read the docs - thank you - if you can help me on this... Can I do just -n install, so I can just see what it might --

**Gerhard Lazu:** Correct. Yeah.

**Adam Stacoviak:** Can I just see what it might do?

**Gerhard Lazu:** Exactly.

**Adam Stacoviak:** Okay.

**Gerhard Lazu:** And -n, it basically stands for dry run.

**Adam Stacoviak:** Right.

**Gerhard Lazu:** The reason why you have to do it before the recipe is because some recipes can have arguments, and if they don't -- like, if you do the -n at the end, it won't work. So it has to be the command Just, the flags, and then the recipe or recipes, because you can run multiple at once.

**Adam Stacoviak:** Very cool.

**Gerhard Lazu:** But yes.

**Adam Stacoviak:** I assume that, because any good hacker that writes a CLI that's worth its weight in gold would always include a -n, right?

**Gerhard Lazu:** A dry run, yeah.

**Adam Stacoviak:** Good job. What was his name, the maintainer?

**Gerhard Lazu:** Casey, and let me see if I can pronounce his surname. He's Casey on GitHub, by the way... Rodarmor? The Blue Planet, apparently. Casey Rodarmor. You can correct us, Casey.

**Jerod Santo:** Shout-out to Casey.

**Gerhard Lazu:** Yeah.

**Adam Stacoviak:** C-A-S-E-Y, github.com/casey. Github.com slash -- I'm just kidding. I was just gonna say it one more time. Thanks, Casey.

**Jerod Santo:** Are we stuck in a loop?

**Adam Stacoviak:** Rodarmor. Rod Armor.

**Jerod Santo:** Red Armor.

**Gerhard Lazu:** Rod Armor. Yes, I like that. That's how we're pronouncing it.

**Adam Stacoviak:** Casey Rodarmor. Correct us if that's correct, or correct us if it's not correct, or don't correct us... But go to github.com/casey. Just do it.

**Jerod Santo:** Just do it.

**Gerhard Lazu:** Just do it, that's a good one.

**Adam Stacoviak:** I like it. That's cool, man. Thank you for doing that.

**Gerhard Lazu:** Not a problem. I enjoyed it. It was fun.

**Adam Stacoviak:** Okay, "Homelab to production."

**Gerhard Lazu:** "Homelab to production." So next week, on Wednesday, it's TalosCon. And I'm calling it Justin's conference. \[laughs\]

**Adam Stacoviak:** \[01:27:54.27\] It's the GarrisonCon.

**Gerhard Lazu:** The GarrisonCon, exactly. I'll finally meet Justin in person.

**Jerod Santo:** Oh, nice.

**Gerhard Lazu:** I'm giving a talk. It's called "Homelab to production." It's -- I think it's 5 p.m. So one of the last ones. We'll have a lot of fun. I'm bringing my homelab to this conference.

**Jerod Santo:** Oh, wow.

**Gerhard Lazu:** So we will have fun.

**Adam Stacoviak:** I almost \[unintelligible 01:28:08.07\] It's not quite a homelab, it's more of a mobile lab.

**Gerhard Lazu:** It is a mobile lab, but I will have a router with me. So it will be both the actual device, and the router, and... Yeah, we'll have some fun.

**Jerod Santo:** Now you're bringing two of them with you, or just one?

**Gerhard Lazu:** The device, the homelab, plus the router. So two devices.

**Jerod Santo:** Okay. Well, we want two of everything, so...

**Gerhard Lazu:** Two of everything, yes. Well, we are going into production, so we're going to take all the workloads from the homelab, and we're going to ship them into production during the talk, and we're going to see how they work. We're going to use Talos, Kubernetes, Dagger is going to be there... So yeah, we'll have some fun.

**Adam Stacoviak:** This is a live demo then, basically.

**Gerhard Lazu:** It's a live -- yes. Well, it's recorded, because I want to make sure that things will work... But I will have the devices there with me. You never know what Wi-Fi is like. And that's the one thing which I don't want to risk.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** Even like 4G, 5G, even mobile networks are sometimes unreliable. But I'm looking forward to that. So that's -- and it will be a recorded talk as well. So yeah.

**Jerod Santo:** Well, that's good, because TalosCon is on-prem, free and colocated with SRE Day. However, it's also over with. By the time this ships, it'll be two days in the past. And so happy to hear, Gerhard, that there'll be a video, because certainly our listener will want to see what you're up to, and it's in the past tense. So there you go.

**Gerhard Lazu:** And guess what?

**Jerod Santo:** What?

**Gerhard Lazu:** I'm going to be recording myself as well.

**Jerod Santo:** Okay...

**Adam Stacoviak:** What are you holding up there?

**Gerhard Lazu:** I'm holding a Rode Pro. Do you know the Rode Pros? Like the mini recording microphones?

**Adam Stacoviak:** Yeah, you can like clip them to your shirt, something like that.

**Gerhard Lazu:** Exactly. So I have two of those. Boom. And two cameras, I'll take them with me. They're 361, so I'll be recording like the whole talk, and then editing and publishing it. So that's the plan.

**Jerod Santo:** Cool.

**Gerhard Lazu:** So whatever the conference does, great. But I also want to do my own.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** So that's the plan.

**Adam Stacoviak:** Full control.

**Gerhard Lazu:** Indeed.

**Jerod Santo:** Awesome. Well, great conversation, good progress this session... What do you call it? This Kaizen.

**Gerhard Lazu:** This Kaizen, yes. What do we want to accomplish for the next one? Are we on the right trajectory in terms of the things that we talked about, in terms of what we think is coming next? Did we miss anything? It'll be Christmas, or just before Christmas...

**Adam Stacoviak:** I think the Just stuff with the database and branching with Jerod being able to pull it down will be a small, but big win.

**Gerhard Lazu:** Okay.

**Adam Stacoviak:** I think continue progress, obviously, on the Pipe Dream... Pipely.tech.

**Gerhard Lazu:** Pipely.tech, I like it. Did you buy the domain?

**Adam Stacoviak:** No, but it's available.

**Gerhard Lazu:** You have to. Not available?

**Adam Stacoviak:** It is available, for 10 bucks. Pipely.tech.

**Jerod Santo:** I don't know, I think we'v gotta get pipe.ly. Otherwise...

**Gerhard Lazu:** Yeah, pipe.ly.

**Jerod Santo:** ...we're just posers.

**Gerhard Lazu:** But I like pipely.tech as well.

**Jerod Santo:** So we might have to raise some money for this if we're gonna have to buy pipe.ly. We might need 50 grand.

**Adam Stacoviak:** The future's coming, and we're going there.

**Jerod Santo:** Kaizen.

**Adam Stacoviak:** Kaizen!

**Gerhard Lazu:** Kaizen.

**Adam Stacoviak:** Bye, friends.
