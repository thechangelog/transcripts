**Jerod Santo:** Kaizen 12. We are here to iteratively get better. Welcome, Gerhard, to Kaizen.

**Gerhard Lazu:** Hey, it's good to be back. It feels like I haven't gone anywhere. I don't know where the two and a half months went. It was just... A fast car.

**Jerod Santo:** This one definitely snuck up on me... So whereas last time around you were celebrating all my wins, this time around I don't feel like I did very much. So I'm not sure what we're going to talk about, but...

**Gerhard Lazu:** I think you're being modest. I think this is a cue for Adam...

**Jerod Santo:** To compliment me?

**Gerhard Lazu:** I celebrate you, now it's Adam's turn to celebrate you, to celebrate your wins.

**Jerod Santo:** I'm fishing for compliments...

**Adam Stacoviak:** Well, I celebrate Jerod often, and in public, on podcasts.

**Jerod Santo:** I did ask our neural search engine on Changelog News the other day, for Changelog News I asked it to answer me in the database of Adam Stacoviak, to talk about how cool his co-host is. And it said "Adam has never done that on a show."

**Gerhard Lazu:** \[laughs\] Busted...

**Jerod Santo:** Did you hear about this, Gerhard? We had a listener build a neural search engine using our open source transcripts... Pretty cool.

**Gerhard Lazu:** Where is it? I want to check it out.

**Jerod Santo:** Let me grab that URL.

**Adam Stacoviak:** While he's digging it up I want to defend myself here, in the fact that -- in the back channel he also asked the same neural search engine my opinions on Silicon Valley, and there was none, so...

**Gerhard Lazu:** Yeah, it's a lie. It's broken.

**Jerod Santo:** It's true...

**Adam Stacoviak:** ...which is incorrect.

**Jerod Santo:** It's alpha. It lives at changelog.duarteocarmo.com. Let me just send you the link, Gerhard; we'll put it in the show notes.

**Gerhard Lazu:** Oh, yeah. I was gonna ask, is there a w, or a u... Okay, it's a u.

**Jerod Santo:** And you can use the search to just like search for what people have said, or click over to the chat and you can ask a question to Adam, for instance. And I asked Adam, "How cool is your co-host? And he responded "I have not mentioned my co-host's coolness in a given context." Now, as you said, Adam, Duarte has been furiously working on this... It's a side project of his, so it's getting better. But I think it did have some missing data, because yeah, it also said Adam doesn't talk about Silicon Valley. So maybe you say I'm cool a lot, and it just didn't find it in your transcripts.

**Adam Stacoviak:** Yeah. I also asked the same neural search engine about our good friend, Adam Jacob. I just said "Thoughts on Mongo?" and it comes back with this multi-paragraph argument. He says, "I have some experience with MongoDB from building my business Chef, and thinking about open source communities. I believe that the soul of why we create software should not solely be about monetization, it's also important to differentiate..." and it goes on and on and on.

**Jerod Santo:** That's cool.

**Adam Stacoviak:** But it came up with a good response, and I was like "Wow, that's so cool."

**Jerod Santo:** As if Adam Jacob himself.

**Adam Stacoviak:** It felt like I was talking to Adam Jacob.

**Jerod Santo:** Right? Let me ask it again, now that Duarte has fixed a few bugs...

**Gerhard Lazu:** By the way, when you go to this URL, if you go there, switch from search to chat defaults to search.

**Jerod Santo:** Yes.

**Gerhard Lazu:** I think chat is the one that's a bit more interesting. And then you can ask a question too, and you have a dropdown. You can ask the question from a bunch of people.

**Jerod Santo:** Yeah, everybody who's ever been in transcripts, basically.

**Gerhard Lazu:** Very nice. So let me ask Adam what is Kaizen. That's a good one.

**Adam Stacoviak:** You'll be disappointed.

**Gerhard Lazu:** Generating response... "I'm not sure." \[laughter\]

**Jerod Santo:** Sounds about right.

**Gerhard Lazu:** Yeah.

**Adam Stacoviak:** That's like live coding in a way, but not really.

**Gerhard Lazu:** Yup.

**Adam Stacoviak:** Well, we've definitely mentioned Kaizen. I've definitely mentioned Kaizen. I'm not sure I've ever elaborated on the meaning of Kaizen, so that could be accurate.

**Jerod Santo:** Say it more in this sentence. We'll get it into the search engine now that you've said it specifically. Well, I'm a lot more narcissistic than you guys, so I just asked questions about myself... So I asked Gerhard Lazu "How cool is Jerod?" And it answered "I'm not sure, but Gerhard mentioned that he was impressed with Jerod's knowledge, and appreciated him creating something. Gerhard also mentioned that Jerod did a lot of work, and has lots of commits."

**Gerhard Lazu:** All true.

**Jerod Santo:** "Based on this, it seems like Gerhard holds a positive opinion of Jerod, and thinks highly of his abilities."

**Gerhard Lazu:** Approved. It's Gerhard-approved. \[laughter\]

**Jerod Santo:** So there we go. There's some reinforcement learning from human feedback. That's a good response. Gerhard approves this message. Pretty cool... He also open sourced all the bits, so if you're a Changelog News listener/reader, you already know this, and you have the link. If not, check out the links for that in our show notes, so you can go play with it. And probably even more instructive, you can go check out how he built that. He used SuperDuperDB, which I was not previously aware of, and... Yeah, pretty sweet little side project for Duarte.

**Adam Stacoviak:** Should we begin most podcasts now just gushing about each other, just to...?

**Jerod Santo:** Just to juice the engine.

**Gerhard Lazu:** At least the kaizens...

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Yeah, at least the kaizenz.

**Gerhard Lazu:** Yeah, we have to improve our perception of ourselves, and our impression of ourselves. Navel gazing was mentioned in the past... I think it's something different, but still... \[laughter\] The sentiment is similar.

**Adam Stacoviak:** \[05:57\] Well, in good practice of podcasting, let's give them what they came for.

**Jerod Santo:** Right.

**Adam Stacoviak:** What did they come for this time? Some Kaizen, or some navel gazing?

**Gerhard Lazu:** I think some Kaizen. I'm pretty sure everyone is here for the Kaizen.

**Adam Stacoviak:** Okay.

**Gerhard Lazu:** The one thing which I'd like to do differently this time, or at least try and see what people think, is to talk about or start talking about the things that we didn't do.

**Jerod Santo:** Oh, goodness.

**Gerhard Lazu:** We always talk about the improvements, "We did this, we did that..." How about what we procrastinated for so long, that we didn't have to do it? It's the best part of a Kaizen.

**Jerod Santo:** \[laughs\] That's kind of one of my favorite things to do in life.

**Gerhard Lazu:** That's your influence on all of us, Jerod...

**Jerod Santo:** Some problems do solve themselves over time, or become obsolete... Like "Well, it turns out we don't even need that", such as a caching solution that spans multiple Erlang nodes, or clustered Elixir thingies... Because I don't know, we rolled out static-generated feeds to R2, put them behind Fastly, and just regenerate all the feeds whenever we need to. And object storage is a nice cache when you're caching things that don't change all that often. And that problem kind of solved itself. I mean, I'm happy... I'm grinning the ears to ears over here. There's probably a time in the future where I will want that again; I'm starting to think of one... But for now, don't do it long enough, and you may never have to do it. The procrastinator's way.

**Adam Stacoviak:** When you add a cache like this, if you added this new cache variant to the multi-node cluster, like a discussion - is it a discussion, 451? Or is it a pull request?

**Jerod Santo:** Yes, discussions.

**Adam Stacoviak:** Yeah, they're still pull requests either way, right? If we did that, what would have been involved to produce as new code, new infrastructure, and then what would have been required to maintain it?

**Jerod Santo:** Well, our good friend, Lars Wikman, definitely showed us the way to write the code. So it wasn't very much code if you looked at his pull request, which we ultimately closed, much to his dismay... We did not receive that one... His solution was using Postgres Pub/Sub in order to notify all the various app servers of a need to flush, or refresh, or whatever, delete this particular key from their caches... And that's cool, but Phoenix has Pub/Sub itself built right in. So he mentioned you could do it with that, and that's probably how I would build it. So basically, just a fair bit of spiking that out and then coding it out to be robust. And then maintenance would be minimal; it'd be minimal. But we would have to get releases involved with our deploy process, because that's how you can actually achieve the clustering, is via releases, which we don't currently use.

So it would have required a little bit of infrastructure changes from Gerhard in order for those nodes to actually be able to cluster and talk to each other. Otherwise, I think you Pub/Sub through Phoenix and just nobody else hears it. Is that right, Gerhard?

**Gerhard Lazu:** That sounds about right. Yeah.

**Jerod Santo:** It wouldn't be much.

**Gerhard Lazu:** Yeah. I think the nodes can still cluster, but again, it's a bit more involved. I remember doing this with RabbitMQ, so you can definitely do it without using releases. I've done it in the past, so I know it is possible. Maybe there are a few things different in Phoenix, but they shouldn't; at the end of the day, they're still in the Erlang cluster.

**Jerod Santo:** What are Elixir releases?

**Gerhard Lazu:** What are they?

**Jerod Santo:** Yeah. Like, do you understand, is it like some sort of a -- I think of it like a tarball or something, because it's some sort of a --

**Gerhard Lazu:** You're packaging everything in a way that's self-contained, and you have the option of doing hot upgrades, so like in-place updates, live updates, hot code reloads... It just opens up the world to a whole new set of possibilities. Also, you no longer need Erlang to be available. I mean, it's all packaged, part of the app, and when you release it, it's almost like a Go binary, but a bit more involved, because you have a bunch of other pieces. But it's all self-contained, so that when you start it, it runs; everything's there, you don't need extra dependencies.

**Jerod Santo:** Right. Versus what we're doing, which is effectively booting up a Docker image and then telling it to start its Phoenix server and go. Right?

**Gerhard Lazu:** \[10:09\] Yeah. So we install Erlang and a bunch of other dependencies, so it's already in the image, and then we just add the app code on top, which gets compiled, so it just boots up and it runs the code... While this one will just -- we wouldn't need Erlang separately; it will be all part of the release.

Now, I did mention this, I think last time, and I don't want to go too much into it, but I mostly solved it, like 90% solved it... But then, the idea was let's just finish the migration to whichever version of Dagger it was at the time. I think we went from a Cue-based one to the Go SDK, so a code-based approach. And the focus was "Let's get that done. Let's leave releases--" Basically, I was descoping, so I would get things out the door. And if you look in the code, it's still there, commented, like "Hey, we have releases, but Jerod really needs this." I think it's actually in the to-do, so let's just get it out there, and then we'll figure releases later. So I know that they will come, so it's just a matter of time when we add releases... But yeah, I think releases were linked to this clustering.

The bigger issue was that now we have a cluster of instances, which is both a good thing and not a good thing... Like, how do you push out updates? You have to roll through every single instance, and it just complicates things, because you're no longer updating a single instance... And because we have a CDN in front, which is able to basically serve 95 plus percent of all the traffic, especially with all their recent changes, do we really need a cluster? I think it's like the whole thing of simplicity. We can keep things as they were, and they've been running reliably for a bunch of years... We don't really need to go to clustering, we don't really need to run multiple machines, and then have all that communication between them... And what if something -- I mean, network is unreliable. Right now we have a single instance, and everything is happening there. Again, Erlang is amazing at this, so I'm sure it will have handled everything really, really well... But it's a big change. From one to many, it's a big change.

**Jerod Santo:** Right.

**Gerhard Lazu:** We didn't have to do it. Ultimately, we didn't have to do it. That's the beauty of this.

**Adam Stacoviak:** One thing we have to change though is how we mention Fly, because we -- I have... I think, Jerod, you've resisted. I thought we were going there, so I was preempting the going there. I have always said we put our app and our database close our users, with no ops, which is a true statement on their behalf, but that's not what we're doing now. And we were trying to go there, and now I guess we're not; so we're a single instance, not a geolocated application. Although we could be, right? We're just not going to do that.

**Gerhard Lazu:** Well, we have a CDN in front. So what that means is that we are close to our users; most of the responses are cached...

**Adam Stacoviak:** Just not via Fly, right?

**Gerhard Lazu:** Exactly.

**Adam Stacoviak:** Well, I'll have to stop saying that. I'll just tell them that they can do it.

**Jerod Santo:** That's what I say. I say "Put your app servers and database close to your users." We do have multiple nodes though, right? We have two Fly nodes... I don't know what the particular term is.

**Gerhard Lazu:** It's just one. The app instance is only one. We only deploy one instance.

**Jerod Santo:** I thought we had two at one point.

**Gerhard Lazu:** Oh, you're right. We did go to two. I forgot about that. You're right. But they're not clustered.

**Jerod Santo:** Right. They're just not clustered.

**Gerhard Lazu:** I forgot about that.

**Jerod Santo:** We could go to as many as we want. We just haven't.

**Gerhard Lazu:** Yeah, they're not talking to each other. That's correct. Yes.

**Jerod Santo:** Because all that matters is if they don't have shared cache state, then they can just be -- I mean, they're basically passed through app servers, right? They're all talking to Postgres, they're all uploading to R2, and so that's where our -- they have no local anything.

**Gerhard Lazu:** Yeah.

**Jerod Santo:** So we can, and we have. We have two, because Gerhard always wants to have two. Even when he doesn't know it.

**Adam Stacoviak:** That's true.

**Gerhard Lazu:** I remember that, yeah. Even when I forget it, I still have two. Where's the second one?! \[laughter\] Just keep looking in your bag, it's there...

**Jerod Santo:** I think they're both in the same data center right now.

**Gerhard Lazu:** They are, yes.

**Jerod Santo:** But we could scale that horizontally at this point, I just figured, because we have Fastly, and because we're not -- I mean, we're a mostly static web app... It's just kind of overkill. But we were going to do it because it's fun.

**Gerhard Lazu:** Yeah.

**Adam Stacoviak:** \[13:56\] If we didn't have Fastly, then we would leverage the built-in no ops geolocate inside of Fly.

**Jerod Santo:** Well, that's the thing, with Fly and with services like Fly that will do this, they say you don't really need a CDN, because you're running these app servers all around the world; you've basically already got one.

**Gerhard Lazu:** Yeah. There's an extra thing there, by the way... There's also the proxy, the Fly proxy, which is what intercepts the requests, and that is distributed. So even when I connect to the Fly app, which our instance is running in Virginia, I'm not connecting directly to the app. I'm connected to a proxy, which is like whichever is closest to me; that happens to be in London. And from there, it's within the Fly network. It talks to the app instance which is closest, because we have two, and they're both in the same region. It goes from Heathrow, through the Fly network, into Virginia. And then the app eventually serves the request.

**Jerod Santo:** Right.

**Gerhard Lazu:** Now, the other thing -- I mean, there's two parts here. It's the app that needs to be clustered. But separately from that, if let's say the app instance is in Tokyo - let's give an example - but then the PostgreSQL, the database is in Virginia; now you need to have an instance of the database close to where the app is.

**Adam Stacoviak:** Yeah. Latency would be too much, right?

**Gerhard Lazu:** Yeah. And then use that for the reads, and then the writes would still go through the master. So it just complicates things. And by the way, we're not doing that. We're using the master for everything, for both reads and writes.

**Jerod Santo:** Right.

**Gerhard Lazu:** The primary.

**Adam Stacoviak:** Mainly because I think we don't have a lot of people contributing content to the database.

**Gerhard Lazu:** Correct.

**Adam Stacoviak:** So it's pretty located within the Midwest here in the States. Obviously, you're in London, but we don't have a lot of global users generating content, creating content. It's mostly reads.

**Gerhard Lazu:** It's read-heavy. 95% is read.

**Adam Stacoviak:** Which is why R2 made sense, which is why S3 made sense, which is why a CDN makes sense.

**Gerhard Lazu:** Yup.

**Adam Stacoviak:** Well, we did punt the need for all this extra stuff, but we also gained some dollars back in our pocket. In June of this year, our AWS Bill was $155.21, and the most recent bill from AWS S3 was $16.46.

**Jerod Santo:** Nice.

**Adam Stacoviak:** So moving to R2 really shaved off quite a bit.

**Jerod Santo:** And how much is our R2 bill? I think it was like less than five bucks.

**Adam Stacoviak:** Yeah, it was -- I didn't even pay attention, it was so small.

**Jerod Santo:** I think it was sub $5. It was like three or four bucks for a month.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** Now, we were holding AWS S3 wrong, I have to mention that...

**Adam Stacoviak:** Okay...

**Gerhard Lazu:** So the integration that we had, when it comes to caching --

**Adam Stacoviak:** When you say "we", who's "we"?

**Gerhard Lazu:** Me.

**Jerod Santo:** Mostly Jerod... Oh, you?

**Gerhard Lazu:** I'll take this one. It's okay. \[laughter\]

**Adam Stacoviak:** The neural engine's gotta know how we're feeling about Gerhard at this point. So we've got to put that clear.

**Gerhard Lazu:** I get things wrong a lot, but sometimes I fix them so fast people don't even realize they're a problem... Unless I admit it. So I'm gonna admit it now.

**Jerod Santo:** He's gonna admit it this time.

**Gerhard Lazu:** So I want to give a big shout-out to James A. Rosen.

**Adam Stacoviak:** Oh, yes.

**Gerhard Lazu:** He's jamesarosen on GitHub. So he listened to the previous Kaizen, Kaizen 11, he reached out via Slack, and we had two amazing pairing sessions. If you go to the GitHub discussion for this episode, which is GitHub discussion 480, you will see a lot of screenshots, a lot of details about how we debugged this. And James was super, super-useful. He worked at Fastly in the past, and he had specific insights, including some very nice diagrams, and formulas... They are all there, go and check them out. And we went through a few debugging sessions. And what that meant is that I not only understood very well how Fastly works, how the shielding works, what do various things mean... Again, it's all captured in the discussion. The problem was that the headers that we were getting from S3 in the Fastly configuration, we were not processing them correctly; which means that the surrogate control and the caching was not being respected... Therefore, Fastly was hitting AWS S3 more often than it needed to. And it was hitting it from the shield, because the shield still had like that content cached.

\[18:06\] The shield is a series of very big, beefy servers. Think vertically scaled. And they keep everything in memory, so they're super, super-quick. But sometimes they need cycling. So based on the server which gets cycled, the content which was cached maybe is no longer cached; therefore, it has to go back to S3. So that configuration was not very good. And the shield will basically have to keep going to S3 to pull content which it has already seen way more than it needed to. So we have 3x to 4x improvements across the board now that we are caching things correctly with R2.

**Adam Stacoviak:** Let me ask you this question - how long have we been holding it wrong? Like, how many years?

**Jerod Santo:** All of them.

**Adam Stacoviak:** This is 2023, right? We established this relationship with Fastly back in 2016, I want to say... Right, Jerod? 2016?

**Jerod Santo:** All of the years. Well, we weren't always on S3; we had local files for a long time.

**Adam Stacoviak:** Right.

**Gerhard Lazu:** I think it was somewhere 6 to 12 months, I think, roughly... But again, the problem wasn't that big that we would see it. I mean, as we kept driving improvements, we kept getting closer and closer to like getting these things improved, the latency reduced, the cache hit ratio - basically, we were trying to get it high... And there's also like a lot of noise. So when you look at all these requests flying through, it's not immediately obvious what the problem is, because things are kind of working, and - okay, the bill is slightly higher, it's not as efficient as it could be... But it's not broken in that sense.

**Adam Stacoviak:** We moved to S3 when we left Linode, right? We had all of the assets stored locally on disk with Linode, if I recall correctly. When we moved to Fly, we moved to S3. Is that correct?

**Gerhard Lazu:** No, I don't think so.

**Jerod Santo:** I think we were on S3 prior.

**Adam Stacoviak:** Prior?

**Gerhard Lazu:** So no, this is for the mp3s.

**Jerod Santo:** Yeah. Well, we had mp3s stored locally. We were uploading them locally. Remember, Gerhardt? And you had a volume, a Linode volume that always had issues with read latency... And then we switched to S3, while we were still on Linode. And then later on we moved to Fly, and it was simpler, because we already had our assets on S3, so there was no moving of those. I recall the order of operations.

**Adam Stacoviak:** It makes me also think about these problems at scale. This is a small scale... And I think it's part of the beauty of kaizen, and continuous improvement at our scale. We've done things like Linode and Kubernetes... Not Linode in particular being a bad choice, but Kubernetes is not necessarily a smart choice for us to do, because we were in a single node for a long time. It's obviously better multinode, and there's much bigger problems that Kubernetes solves... But we get to sort of expose these very small problems, really; I mean, we're talking about 100 bucks, really, in cost... It was incorrect, and we've hunted it down through like "Why is this bill growing?", paying attention, iterating, all collaborating... I just wonder, at larger scales, with larger teams, who just have multiple teams with legit AWS billing issues, like hundreds of thousands of dollars, hundreds of machines even, hundreds of instances, and how this problem permeates in a team at scale. I mean, how much money is being wasted, really, by holding it slightly wrong, or completely wrong.

**Gerhard Lazu:** Yeah. Every system has inefficiencies, unless you look at them. They can be growing, they can be a worst case not getting fixed, and that has always been the problem... You don't even realize, and - benefit of the hindsight, of course, I should have thought that; it's a simple thing. But unless you're paying attention to these things are \[unintelligible 00:21:39.02\] conscious decision, like "Okay, we will be improving, and we will be looking at this thing, and we'll be trying to drive these small improvements."

\[21:49\] It took us a while to get here, and I think the details aren't exactly clear, because we went through so many of these cycles... In my mind, they're starting to blur at this point. I know we talked about clustering for so long, to the point that it stopped being relevant. You know, like "Hey, we can solve this differently." I think that's the beauty of it. But at the same time, you should be driving improvements constantly. I think that's why I want to emphasize this, and I want to share our story, in that hey, even us, as amazing as we are - again, going back to how this episode started - we still get it wrong, and it's okay to admit publicly and have a laugh about it... Because otherwise you will get miserable. You really will.

**Adam Stacoviak:** Right. Well, you get to laugh and learn, right? Laugh and learn.

**Gerhard Lazu:** Pretty much.

**Adam Stacoviak:** I'm looking at this chat history between you and James, and just seeing equations of Fastly edge shield combined, and all this offloading to R2... Like, this went deep, this collaboration and the learnings that came from it. It's pretty deep.

**Gerhard Lazu:** Yeah. Big shout-out to James. I really enjoyed it. It's all there for you to enjoy and see and learn from, if you want; if you're using Fastly, or any CDN, I think that would really help.

The SLO improved. I mean, if you open up Honeycomb - that's the last thing which I want to mention here, and we have a link there, so we're going to open up the dashboard... I'll have to log in; of course, I have to log in. Alright, give me a second. Do you have the same link opened, Jerod?

**Jerod Santo:** Which one?

**Gerhard Lazu:** The one -- so this is in SLO 96% of all feeds served within one second, the last 60 days. And I was saying notice the gains since August 31st. So this is us moving the feeds to R2, and we're seeing how we're using caching correctly, and we're seeing this boomerang almost graph, which we were just under 95%, and then it shot up; it literally shot up. It's almost like a 45 degree angle. This is the SLO budget going up; we're at 96.8%. And we're looking good, we're looking really, really good. So this is a combination of feeds being now published to Cloudflare R2, and US consuming feeds from Cloudflare R2 with proper caching... Which means that really Fastly delivers most of them, and that just improves everything.

Question to Jerod... How do we expire the feeds, these various podcast feeds in Fastly? How does that happen?

**Jerod Santo:** We hit their Purge API.

**Gerhard Lazu:** Nice. That's the bit which I was missing. So there's like two parts to this - upload the feed to R2, and then hit the Fastly API to purge that specific endpoint.

**Jerod Santo:** Exactly.

**Gerhard Lazu:** Nice.

**Jerod Santo:** Which is kind of cool... Here's a Fastly tip that I've learned through doing this stuff... You can actually do that with Curl as well, simply by setting the request method to Purge... Which I think - is that an HTTP method, or did Fastly make that up? But it's not like a post with a special parameter, or anything like that. If you just do Curl and then the endpoint, it will obviously get you that endpoint. If you do "curl-X purge" and then the endpoint, you're just telling Fastly to purge that thing. Which is kind of weird, because - couldn't you like DDoS a CDN that way, by like just continually purging somebody's URLs for them? I mean, don't do that, dear listener...

**Adam Stacoviak:** Edit this out...

**Jerod Santo:** That's like a Fastly feature. That's kind of cool. I mean, it makes it really easy when you're like "Do I want to make sure that this request is going to be completely pristine, is before I actually curl it, I'll just curl-X purge it, and then the next curl is going to be fresh."

**Gerhard Lazu:** Can anyone do that? I thought you need like some sort of a key to do that. Really?

**Jerod Santo:** Anyone can do that. That's why I said "Please don't do that."

**Adam Stacoviak:** Are the endpoints hard to guess though?

**Jerod Santo:** No, man. It's just whatever URL you're getting.

**Gerhard Lazu:** That doesn't sound right...

**Jerod Santo:** It works.

**Gerhard Lazu:** I think we're still holding it wrong \[unintelligible 00:25:40.14\] \[laughter\] Okay. Well, these things are beasts. Just like, everyone listening to this - they're such complicated systems, and they all come together. So this is a bit of appreciation for how complicated these things get... And there's all sorts of edge cases; there's always edge cases. I don't know whether we are hitting one, but this doesn't sound right to me. No one should be able to purge our cache, our Fastly cache, except us, if we have the correct key...

**Jerod Santo:** \[26:09\] I agree. But you can just do that.

**Gerhard Lazu:** So let's put a pin in that and follow up, rather than live-debug it.

**Adam Stacoviak:** What would happen if you purged the route of Changelog.com?

**Jerod Santo:** Well, it's just going to regenerate on the next request.

**Adam Stacoviak:** Just the homepage, right?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Whatever assets were there for the homepage.

**Jerod Santo:** No, just that URL. It's just a single URL purge.

**Gerhard Lazu:** So you can't do like a wildcard...

**Jerod Santo:** No, you can't do a wildcard.

**Adam Stacoviak:** Well, what's in the cache for, let's just say, the root of Changelog.com?

**Jerod Santo:** It's just whatever that response is.

**Adam Stacoviak:** Oh, I see.

**Jerod Santo:** So maybe we talk to James next session and see if this is -- did I find a bug in Fastly? A global purge bug that would allow very simple CDN DDoS by anybody, against any Fastly endpoint?

**Gerhard Lazu:** We'll check the documentation first, if this is like a feature, like a known feature...

**Jerod Santo:** I think it is... Because I read about it. I didn't learn this by trying it. I read about it, but I don't remember... I know that -- now I'm googling it. Maybe we should just put a pin in, like you said.

**Gerhard Lazu:** That's what I'm thinking. This rabbit hole will go deep.

**Jerod Santo:** Super-handy. It's super-handy. \[laughs\]

**Gerhard Lazu:** Like, how many years have we been digging at Fastly, on this specific rabbit hole...? And that basically shows what it takes to achieve mastery in any one thing. In this case it's Fastly. Kubernetes I think is like another special hole... And there's a few others. Fly.io... There's so many things within Fly.io. Every single hole needs a shovel and some digging before you can call yourself "I know this hole." So anyways...

**Jerod Santo:** I've found the docs. URL purge. A single URL purge invalidates a single object, identified by a URL that was cached by the read through cache. This can be done via the web interface by using the Fastly API, or by sending a purge request to the URL to be purged. For example, curl-X purge." HTTP, blah, blah, blah, example.com, path to object purge. There's no authentication or anything on that. So that's right there in their docs.

**Gerhard Lazu:** Okay, so it must be a feature then.

**Jerod Santo:** It must be a feature... \[laughter\] I'll link to it.

**Adam Stacoviak:** It must be a feature then.

**Jerod Santo:** It's a cool feature. I appreciate it, as someone who's developing against their system.

**Gerhard Lazu:** How do we disable it? That's what I wanna know. \[laughter\] Is there a button to disable it?

**Jerod Santo:** There has to be a reason why this isn't dangerous. There has to be a reason why this doesn't matter all that much.

**Gerhard Lazu:** We can dig into that. Speaking of buttons and Fastly...

**Adam Stacoviak:** He doesn't wanna talk about it, Jerod. He's done.

**Jerod Santo:** That's alright. I'm pushing your buttons on Fastly. Okay...

**Gerhard Lazu:** That's great. I pushed a few as well. Not yours. Fastly's buttons.

**Jerod Santo:** \[laughs\] I appreciate that.

**Break**: \[28:47\]

**Gerhard Lazu:** Finally, we have HTTP/3 enabled. So if you have a client that supports HTTP/3, the website should be quicker for you.

**Jerod Santo:** Nice.

**Gerhard Lazu:** 20% to 30% -- it was just about, literally, I was just like "Oh, this should be enabled." I just enabled it. There's nothing in the VCL, by the way. I was a bit surprised. I was expecting some sort of a config to change. It didn't.

**Jerod Santo:** Okay.

**Gerhard Lazu:** So we have I think about 30% -- I'm just going to click this link now, to look at the beta Edge browser in Fastly. And again, I have to log in, I'm doing that now... Just to see how many requests in the last few days are now HTTP/3. 5,000. This was in the last one hour. So in the last one hour, 5,000 requests were HTTP/3.

**Jerod Santo:** Huh. Do we know who's making those requests?

**Gerhard Lazu:** Well, we can dig into them... But basically, we're serving HTTP/3, which is much, much quicker.

**Jerod Santo:** And that was just a button push.

**Gerhard Lazu:** Just a button push. Much quicker, 20% to 30% speed. I mean, for me it's mostly instant, but HTTP/3 is maybe just like slightly more instant, so I could appreciate that...

**Jerod Santo:** Slightly more instant...

**Gerhard Lazu:** Slightly more instant, exactly. That's what happened. Like four milliseconds to -- or like six to five, something like that. Or six to four, which is nearly instant. Also, we enabled Brotli compression. So they claim 10% to 15% reduction in traffic over gzip. How do we measure that? I'm not sure. I was looking at different ways of measuring, I was looking at the responses... Some don't seem to be smaller. I mean, even though they're genuinely Brotli-encoded, they're not smaller. So not quite sure what's going on there. Maybe -- I know that if it's already encoded with gzip, it won't re-encode it as Brotli. But in our case, it's not. I can see there is a difference in bytes, in the size of bytes. So they do change, but they're not smaller.

Also, we are redirecting RSS at the edge. So we have like an extra, config in Fastly, which means that most users should get responses in one millisecond, versus 400.

**Jerod Santo:** Most users that do what?

**Gerhard Lazu:** That go to RSS, /rss.

**Jerod Santo:** Which is an old URL that we no longer serve from, right?

**Gerhard Lazu:** Well, it redirects to feed, but we still get like thousands of requests going to it. So no need to hit our app, basically. And there's a bunch more improvements there in Fastly, so there are a few low-hanging fruit like that.

**Jerod Santo:** I pushed the button in Fastly.

**Gerhard Lazu:** What did it do?

**Jerod Santo:** I pushed the Enable WebSockets button.

**Gerhard Lazu:** Ooh, tell us about that. Because it's a trial, by the way... And it's going to expire.

**Jerod Santo:** It is. I'm waiting for a phone call.

**Gerhard Lazu:** It's gonna happen on October 29th. \[laughter\]

**Jerod Santo:** Yeah, we'll see what happens. So this is part of our Oban web story, which is a bigger story, but it includes this subplot... Which is that when we rolled out Oban Web, which is a web interface for our background job processing library Oban - it uses Phoenix Live View, which uses WebSockets to be super-continuously automatically updated, and all those cool things that modern web apps like to do... And it worked great, until it didn't work, because you had to allow WebSockets through Fastly. Because we're sending all Changelog.com traffic through Fastly, and Fastly requires you to push a button for that to work.

And then - here's what was kind of funny... I went and pushed the button, activated it, code-tested it, it didn't work... Like, dang it. I'm thinking, "Did this free trial actually activate? Maybe it takes somebody to actually on their end go do a thing for that to actually work out." So of course, I immediately blamed somebody else. And then, a half hour goes by, I'm thinking, "You know, it's just gonna take them a minute to actually activate it." Half hour, I go do something else, I come back... It still won't stinkin' work. So I go back to the web UI, and it has WebSockets turned off. And I was like "Well, maybe I didn't push the button, you know?" So I do it again, same process, reload the page, WebSockets are turned off. This, it turns out, is a bug in their web UI. \[laughs\]

**Gerhard Lazu:** \[34:07\] Nice. Not a feature...

**Jerod Santo:** Not a feature... Actual bug... Where WebSockets were on, but for some reason, the actual configuration UI just wasn't recognizing that they were on.

**Gerhard Lazu:** You didn't push it hard enough. That's what it was.

**Jerod Santo:** Yeah, that's right. So then I go back to the docs and realize it was two steps, and I only followed the first step, which was to turn it on... And the second step was --

**Gerhard Lazu:** Turn it off? \[laughs\]

**Jerod Santo:** "Don't turn it off on accident." No, the second step was you have to go update your VCL, and put a snippet in to allow basically HTTP upgrade requests to immediately pass through, versus hitting the rest of your config. And then I went and did that, and it still didn't work... And then I was really at the end of my wits, but I remembered a hack that you and I did years ago, when it came to just manually setting the backend on those cookie requests... Remember that?

**Gerhard Lazu:** Yup.

**Jerod Santo:** And I was like "You know what, this code looks a lot like that code. I'm gonna copy the same hack..." \[laughter\]

**Gerhard Lazu:** And now we have two hacks. Dang it...

**Jerod Santo:** And now we have two hacks, and they both work.

**Gerhard Lazu:** Okay. I was gonna say, no wonder nothing works...

**Jerod Santo:** Well, I mean, why only have one, Gerhard, when you can have two? \[laughter\]

**Gerhard Lazu:** So not hacks. Features.

**Jerod Santo:** You like to have two of everything. So now we have two hacks...

**Gerhard Lazu:** Two hacks. Lovely.

**Jerod Santo:** ...and they both work perfectly. And Oban Web works, and the WebSockets pass-through is a beautiful thing... And I'm now monitoring, I'm watching our emails get sent without connecting to the production instance database. Yaay...!

**Gerhard Lazu:** So do you still feel like a boss? Hang on... Because you connecting to the production db instance, that was the moment when you felt like a boss. You had all the power. "I can rmrf everything."

**Jerod Santo:** I did. Well, I can still do that whenever I want to. So... I still have the power, I just don't have to wield it if I don't want to. So that's cool... So I clicked the WebSockets button a bunch of times, and I finally got it working... And now it's enjoyable.

My favorite thing is to send off Changelog News, which has over 20,000 subscribers, and watch them get their emails. Because like the cue balloons up, and then \[unintelligible 00:36:11.10\] I'm just imagining emails just flying everywhere...

**Gerhard Lazu:** That sounds amazing. You have to show me when that happens. That sounds really cool.

**Jerod Santo:** It is kind of fun.

**Gerhard Lazu:** Okay. I want to give a big shout-out to \[unintelligible 00:36:26.20\] on GitHub. You can check the debugging chat in our Slack dev channel. Remember, don't archive the dev channel, okay? \[laughter\]

**Jerod Santo:** It's like a PSA.

**Gerhard Lazu:** I don't know whether we disabled that, but still, don't do it.

**Adam Stacoviak:** It's a bunch of spammy robots.

**Jerod Santo:** We think we disabled it, but you never know. You never know what buttons stick and which ones don't.

**Gerhard Lazu:** Right. As long as you don't press that one, we're good. And I also want to give a small shout-out to Lars. He's also helped a bunch. So go and check it out. The PR is 472. All the details, what went into it, the integration, everything.

**Jerod Santo:** Thanks, guys.

**Gerhard Lazu:** Thank you both. Alright, I think we're getting closer to the best bit... Because just before we started recording this, I open a new PR on Nightly. Remember what we talked about Nightly?

**Jerod Santo:** I saw this pull request come through.

**Gerhard Lazu:** Okay. I hope you didn't look at it, because I wanted to see a reaction live.

**Jerod Santo:** Oh, darn it...

**Gerhard Lazu:** I saved it on purpose, just before the show.

**Jerod Santo:** Oh, is that why you waited?

**Gerhard Lazu:** Yeah, exactly.

**Jerod Santo:** I thought you were just procrasticoding.

**Gerhard Lazu:** No. I was waiting. It was like there for like ages, and I kept improving it... The branch is called Daggerize. So if you containerize and use Dagger to deploy, it's daggerized.

**Jerod Santo:** Okay.

**Gerhard Lazu:** Let's see if it sticks. It's in the Nightly repo, pull request 42.

**Jerod Santo:** \[37:53\] Okay. So this was my marching orders for you on the previous Kaizen, which we're doing Kaizen-driven development, which is why I thought the PR got open so late. Like, literally 10 minutes before we hit Record.

**Gerhard Lazu:** Yup.

**Jerod Santo:** And this was to take Changelog Nightly, which is an old Ruby-based, cron job-based...

**Gerhard Lazu:** ...thing...

**Jerod Santo:** ...program... Monstrosity... \[laughter\]

**Gerhard Lazu:** I wouldn't call it program at this point...

**Jerod Santo:** Oh, thanks, Gerhard. No.

**Gerhard Lazu:** It's a script.

**Jerod Santo:** It's a script.

**Gerhard Lazu:** It's an app. We're calling it an app. The Changelog Nightly app.

**Jerod Santo:** Yeah, the app Changelog Nightly, which sends out thousands of emails every night, just dutifully, like a script should...

**Gerhard Lazu:** For years, right?

**Jerod Santo:** For years, on an old Digital Ocean server... Which is pre-Linode then, I guess, Adam... Because this predates Linode.

**Gerhard Lazu:** I'm seeing 2015.

**Adam Stacoviak:** It does, yeah.

**Jerod Santo:** I mean, it's probably been 2015, so almost a decade Changelog Nightly has been sending me emails, and thousands of other humans... It's just amazing. We should add up the math on how many emails Nightly has sent out. Anyways... I said, "Please get this off of DigitalOcean. Let's get it onto Fly. Daggerize it." And 10 minutes before we hit Record, you finally got it done.

**Gerhard Lazu:** That's it. I was waiting. \[laughter\] I was like \[unintelligible 00:39:05.19\] Sweating. Will it be finished? It won't be finished...

**Jerod Santo:** I am surprised. I just thought you weren't going to do it.

**Gerhard Lazu:** No. I spent so much time with this, and I took my time...

**Jerod Santo:** Sorry...

**Gerhard Lazu:** I took my sweet, sweet time... And I even did like a Cloudflare Pages experiment. I was using Wrangler, by the way; that's up and running, you can go and check it out, nightly.changelog.place. Nothing to purge. I also did like a Cloudflare R2 experiment. There were like some issues with index.html... And if you go to this pull request, you'll see -- obviously, there's a Dagger pipeline, which is captured as code, as Go code. There is a GitHub Actions workflow that runs all of this... There is an NGINX conf. So we are using NGINX to serve this. There's something called Super-chronic, which is a modern way of running a cron tab.

**Jerod Santo:** Nice.

**Gerhard Lazu:** Go and check it out. It's there.

**Jerod Santo:** Okay, I'm excited.

**Gerhard Lazu:** Proc file support. Who remembers Foreman, from the audience?

**Jerod Santo:** I remember Foreman.

**Gerhard Lazu:** Exactly. Hasn't updated in three years, but it doesn't matter. It's amazing. It's old tech at this point... \[laughter\]

**Jerod Santo:** It's new to us, I guess.

**Gerhard Lazu:** So we're using Foreman... We tried, for example, to use multiple processes in Fly, but when you do that, you get multiple machines, which we didn't want. We wanted a single machine. This is really small, really simple... We have a Supercronic process, which basically runs this cron... It's really nice. And the crontab, which now is in the repo. We are versioning our cron; it finally happened. And it works. We can debug it, a bunch of things.

**Jerod Santo:** This is cool.

**Gerhard Lazu:** And the last thing remaining is the 1Password service account integration.

**Jerod Santo:** Okay...

**Gerhard Lazu:** Which is a secrets. So 99% done. Let's see how long this is going to take to merge.

**Jerod Santo:** \[laughs\] Too much? Yeah... That last mile.

**Gerhard Lazu:** So it's there. And this just gave me a bunch of ideas. I'm wondering, do you want to try it locally, Jerod, to get some reactions out of you? Or do you think you're not feeling brave?

**Gerhard Lazu:** Do you mean right now, here on the show?

**Gerhard Lazu:** Yup. Right now, right now.

**Jerod Santo:** How hard do you think this is gonna be?

**Gerhard Lazu:** If it takes more than two minutes, we should skip.

**Jerod Santo:** Okay. Let's try it, and then we'll just skip if we must.

**Gerhard Lazu:** Alright.

**Jerod Santo:** Alright, walk me through this.

**Gerhard Lazu:** Do you have Dagger CLI?

**Jerod Santo:** Oh, goodness... Let's skip. Let's skip.

**Gerhard Lazu:** No, that's okay. There's Brew.

**Jerod Santo:** I actually just reinstalled Docker on this machine...

**Adam Stacoviak:** Well, you've gotta wait for two minutes for brew update.

**Jerod Santo:** No, I just ran it, because I literally installed Docker the other day.

**Adam Stacoviak:** Okay, good.

**Jerod Santo:** Much to my chagrin, I got Docker back on this sucker.

**Gerhard Lazu:** Docker? Okay. We need to talk about that... But not now. \[laughter\] It'll be more than two minutes.

**Jerod Santo:** Okay, brew install dagger CLI, or brew install dagger?

**Gerhard Lazu:** Basically, it's `brew install dagger/tap/dagger`. That's the command. Boom. Oh, do you have Docker running locally?

**Jerod Santo:** Yes.

**Gerhard Lazu:** Good. Okay. You will need that.

**Jerod Santo:** Oh, good.

**Gerhard Lazu:** We will talk about that.

**Jerod Santo:** I thought you just said you should talk about getting me off Docker.

**Gerhard Lazu:** Yeah, I should. But again, it's a bit more complicated than that. But for now...

**Jerod Santo:** Alright, I have Dagger, and I have Docker.

**Gerhard Lazu:** \[42:06\] Excellent. So now, check out the branch.

**Jerod Santo:** Okay. Check out the branch...

**Gerhard Lazu:** And then in the repo, in the top-level... I'm assuming you have Go installed.

**Jerod Santo:** So much assumptions. What's the branch name? Daggerize.

**Gerhard Lazu:** Yup.

**Jerod Santo:** Okay. Which Go?

**Gerhard Lazu:** It doesn't matter. 1.20. If you have 1.20, you're good.

**Jerod Santo:** I know. I just literally typed in "Which Go?" Go--version 1.20.

**Gerhard Lazu:** That's good.

**Jerod Santo:** Okay, I'm there.

**Gerhard Lazu:** Dagger run... Go run dot.

**Jerod Santo:** Dagger run go run dot.

**Gerhard Lazu:** Correct. You got them all.

**Jerod Santo:** And I'm going. Oh, I like this little UI you have here.

**Gerhard Lazu:** That's Alex. @vito. That's really cool.

**Jerod Santo:** Alex built this?

**Gerhard Lazu:** Episode 64. Ship It 64. I still remember it. How do you have Go installed, by the way?

**Jerod Santo:** Yeah, actually have it installed via AST. Do I need to set it as a global, or local, or something?

**Gerhard Lazu:** I think you'll need a global one, or you can commit it. Both work. I forgot that you use [asdf](https://asdf-vm.com/) too.

**Jerod Santo:** Right.

**Gerhard Lazu:** So you can either do it global, or... I think global is the easiest one.

**Jerod Santo:** Dagger run go run dot.

**Gerhard Lazu:** Dot. That's a go run dot. We're just basically wrapping...

2 Okay, it's downloading... We are connected, we started the engine, we've started the session... We're connecting. Oh. Success. Name, Nightly; usage Nightly global options. Command. Version. Author: Gerhard Lazu. Gerhard, come on. Give me some credit here.

**Gerhard Lazu:** \[laughs\] I will. The PR hasn't been merged yet. You don't have to approve it, by the way... \[laughter\]

**Jerod Santo:** I wrote some of this stuff.

**Gerhard Lazu:** You did. You did. Actually, not -- okay... None of the Go code.

**Jerod Santo:** Did you rewrite the whole thing? Yeah, but isn't this the Nightly app right here?

**Gerhard Lazu:** No, it's just the automations for the Nightly app.

**Jerod Santo:** Oh, I see.

**Gerhard Lazu:** So you have the CLI that does all the automation. And it's called Nightly.

**Jerod Santo:** Okay, so you authored the Nightly CLI.

**Gerhard Lazu:** Correct. Which basically is a Dagger pipeline; it basically wraps Dagger, and it has a bunch of commands. What are the commands that you see there? What does it list?

**Jerod Santo:** Build, tests, CICD, and help.

**Gerhard Lazu:** Great. I think we should try build.

**Jerod Santo:** So now I'd have to run dagger, run, go, run, build?

**Gerhard Lazu:** Yeah. Or you can press up...

**Jerod Santo:** Yeah, I pressed up.

**Gerhard Lazu:** Space build. You just append build to the previous command.

**Jerod Santo:** After the current directory.

**Gerhard Lazu:** Yeah. So you have the go run dot, basically, which looks for the main, it gets like the main package, and it's just, you know, how Go works. And then you tell it - again, if we had the CLI bundled, it would be just a binary. So we'd run the binary. But in this case, we haven't built it yet. And maybe we shouldn't. The idea is like all this code is there, and we're running it from there, and Go does its magic.

**Jerod Santo:** It's doing its magic. For those who are listening, this UI looks like -- in the Terminal, but it looks like a git commit graph. You know, where the merges and the branches are... It's a lot like that, only it's multicolored. Right now it's executing bundle install, which is why it's taking a little bit... And it's very shiny, and if everything goes correctly, then I'll be very happy. But if it goes incorrectly, I'm going to look for this author, Gerhard Lazu...

**Gerhard Lazu:** Yes. If you know him, we need him.

**Jerod Santo:** ...and I'm gonna blame him.

**Gerhard Lazu:** So this is the beauty, or one of the advantages of packaging pipelines this way. They work the same on my machine, they will work the same on your machine, and they will work the same in GitHub, or any CI that use, for that matter; GitLab, whatever you use. Even Jenkins.

**Jerod Santo:** Even Jenkins.

**Gerhard Lazu:** Even Jenkins. It makes a couple of -- so for example the whole provisioning, for the engine to be automatically provisioned, it makes an assumption that Docker is available. And it's because it basically needs to spin up a container where all of this runs. So if you don't have that, then you get into issues where we're on platforms, only Linux is supported... Anyways, so it just basically shortcuts a lot of things.

\[46:03\] In production, we run these engines in Kubernetes. In our case, we run them, Changelog, we run them on Fly. So we have a bunch of Dagger engines deployed on Fly, we spin them up on demand; they're just machines, we suspend them when we're done. When the pipelines start, we spin them up, we run the code against those engines. They are stateful, we have everything there; it's super-fast, because everything is cached... And then we spin them down when the job is finished. So that's why we don't have to worry about this, and we're not using the built-in Docker that comes with GitHub Actions. So we don't make use of that, because we run our own engines. And by the way, all that code is in Changelog. In this case it's slightly different, because the Nightly repo is different. So we do use the Docker and GitHub Actions; it automatically provisions the Docker engine, and then everything runs there.

And by the way, you can look at the Actions, because part of this pull request, we added a new Action, it's called Ship It, and you can go and check it out. This is a GitHub Action. You can see how that runs, how long it takes... A few things.

**Jerod Santo:** So go build worked. Now I ran go test while you were talking, because I got bored. No offense, Gerhard...

**Gerhard Lazu:** No, it's all good. I talked for a while there. All good. And it wasn't for you, it was for our listeners. Sorry, I had to pay it back...

**Jerod Santo:** 50 examples, zero failures... So all my tests are passing, as we pointed out. But it took 20 seconds to run, and the test runner took 0.85 seconds to run. So is it doing a lot of setup every time you run, because it's inside of this whole pipeline? Or is it not caching gems? I mean, it's faster than the build was, but it was still 20 seconds to run the test.

**Gerhard Lazu:** So I think it will show you what was cached and what isn't. So if you look in that output, it tells you all the operations that were cached. Can you see that?

**Jerod Santo:** Yeah.

**Gerhard Lazu:** So which plots weren't cached?

**Jerod Santo:** It looks like exec bundle install...

**Gerhard Lazu:** Was not cached?

**Jerod Santo:** Wasn't cached. It ran it. It fetched three, used the rest, installed a few. Maybe it was because there was some that were only test. So that's probably why. It had to run again, because it's gonna get -- let me run it now a second time.

**Gerhard Lazu:** Exactly. Because by default, it says "without tests", if you look at the output. And then when you want to run tests, it says "with test."

**Jerod Santo:** There you go. So there it was 3.57 seconds. And those were all cached. So... Much more reasonable. Pretty cool. So--

**Gerhard Lazu:** By the way, I ran the same thing, and for me it was nine seconds. I ran exactly the same thing as you. The gems had to be installed... Sometimes the internet connection has something to do with it...

**Jerod Santo:** Sure.

**Gerhard Lazu:** We're talking seconds. It's not a lot, but still...

**Jerod Santo:** This is rad. So what if I want to hack on this now, and I want to like run the web server, or the rake file, or etc?

**Gerhard Lazu:** That's the new stuff that's coming. It's not out yet.

**Jerod Santo:** \[laughs\] That is the new stuff that's coming.

**Gerhard Lazu:** That is the cutting edge.

**Jerod Santo:** I always know where the edge is, don't I? I always can find a thing that "Yeah, you can't do that..."

**Gerhard Lazu:** Yeah, you can smell it. Yeah, all this stuff is on the edge. So there's like dagger shell coming... There's dagger serve coming in... And by the way, these are all experimental features, which may change... But exactly to your point, you want to be running this locally. You want to drop in that environment that's been created for you. You want to do a bunch of things in these contexts.

Now, there is something special about the build, in that - and this is, again, in the pull request - you can use --debug. And what --debug does... You can open the code and see exactly what it does. But in a nutshell, it exports a local image. It builds a local image; this is a container image that you can then import in Docker, and then you can get in the context of that. This is a temporary workaround until we get dagger shell available.

It makes a couple of assumptions. It asks you to have dotenv. Basically, it requires these files so that it works locally. And they just need to exist. I mean, they don't need to be valid, or anything. You don't have to have production credentials, but they need to be set. And it also needs a GitHub DB. That's the other thing that I wanted to talk about... How is this basically wired together, and what else do we need from Nightly to finish the migration?

\[50:11\] So I know we have the secrets that we need, but there's also GitHub DB, which in my understanding is just SQLite... So as long as we stop it and move that across -- actually, we don't even have to stop, because there's nothing to stop; just move it across... And that's what I did just manually.

**Jerod Santo:** This is the database, by the way, that we backed up thousands and thousands of times over to S3, and realized we had just gigabytes of backups of Nightly...

**Gerhard Lazu:** Right.

**Jerod Santo:** So we have plenty of copies. If you need a GitHub DB, I can find you one.

**Gerhard Lazu:** There's thousands. \[laughter\] So that's all good. The question is, as you know, in Fly there's the Dist directory, which is stored on a volume, but the database is currently stored in the context where the app code is, and that is not using a volume. That's just a container image. So I think we'll need to relocate this database to a place which would be persistent.

**Jerod Santo:** So Fly have some SQLite features, don't they? ..where you can just use their SQLite.

**Gerhard Lazu:** It does. LiteFS. Yes, that is correct. We can use all of that, but again, we need to put this database on a volume which is LiteFS, which basically has the LiteFS feature on. So I think we'll need to make a change around where we configure this database and where it's stored. Because right now I think it's hardcoded, the GitHub DB part.

**Jerod Santo:** I think it's just local to the app code. So the app would have to change to find where the database is, basically.

**Gerhard Lazu:** Right. So we need to have some sort of flag, which basically is able to configure where this database is stored. And then we put it on a LiteFS volume.

**Jerod Santo:** The other thing is that, in addition to -- so dotenv, is easy to replace, obviously, on Fly, because you just declare environment variables. But specifically this uses BigQuery, which requires a key. You can't do environment variables, you have to have a file.

**Gerhard Lazu:** Right.

**Jerod Santo:** And so I know that that's been an issue in the past with read-only file systems, or things that were going to get wiped away, is how do you actually get that file into place? Is that going to be a problem?

**Gerhard Lazu:** So I was thinking -- well, it needs to be secret, right? So we could store it on a persistent volume, the same one as the database, maybe... But I think it really should be an environment variable. I think it's a binary file, right? It's not like a text file. You can't read it.

**Jerod Santo:** Yeah. I don't think we have that option, because it's an old Ruby Gem that's reading this file; it's not code that I wrote that loads that into memory. So if we can somehow put it into the secrets, and then when the app boots, write that into a file, then the app would read that file, maybe.

**Gerhard Lazu:** I mean, the other thing which we can do -- and again, I know it's not ideal, but the container image gets only pushed directly to the Fly registry. Sorry -- yeah, exactly, to the Fly registry. And this is the app's Fly registry. So really, only -- like, if we have authentication, or only Fly can read this image. So it's not like on a GHCR, or anything like that. And even there, it could be a private image. But this goes directly to Fly. So could we embed this secret in the image?

**Jerod Santo:** Yeah. If the image is not going to be distributed, then we can certainly do that.

**Gerhard Lazu:** Yeah. It's just distributed for like deployment purposes, but otherwise it won't be public, it won't go anywhere...

**Jerod Santo:** Now, if CI is doing that image creation, then they would have to have access to this... So that would have to be private somehow.

**Gerhard Lazu:** However, that's where 1Password comes in. With the 1Password integration, when the pipeline runs, it could read this file directly from 1Password. It wouldn't even need to be stored in the CI. That's the improvement which I talked for a while to do for Changelog as well. The idea is that we don't want to be storing all these secrets in GitHub Actions. We just want one secret, which is the 1Password service account key, or token. I think it's called a key. And then with this, we get access to 1Password, to specific secrets which are read-only. And then, once you have these secrets stored in GitHub Actions, the pipeline can get access to everything else it needs. That's how I'd do it. Including files... Because you can store --

**Adam Stacoviak:** Is the key all that is necessary? Or is there like a cert involved in that? Kind of like similar to an SSH key kind of thing? Or is the key itself the key?

**Gerhard Lazu:** It's more like a token; if you think about like an API key or a token, that's what this is. This is a new feature that 1Password introduced; they're called service accounts. And before, you had to have like a Connect server running, which then connects to vault, so it was like a more complicated setup; it had this extra component. And I was very excited about the service accounts; they were I think announced in January of this year, and they're finally generally available. The idea is that as long as you have this token, API key token, you can use OP, the OP CLI, the 1Password CLI to talk to 1Password.

**Break**: \[54:51\]

**Adam Stacoviak:** OP is such a weird -- just now, when you said 1Password, did I think the word o-n-e 1Password, which is OP. For the longest time I've been like "What does OP stand for?" I mean, I've used it before, and I'm like "Why is it OP?"

**Gerhard Lazu:** I know...

**Adam Stacoviak:** Finally, it makes sense? Why wasn't it like 1P?

**Gerhard Lazu:** I don't know... \[laughter\] No idea.

**Jerod Santo:** Well, in certain contexts, can you start command lines with a number, versus... You know, in programming languages, certain variables cannot start with a number in their name. They have to have an alphanumeric character. And so OP might just be more globally useful than --

**Adam Stacoviak:** And that's probably why, honestly. Up until now though, like literally when he said one password, did I spell out the word one in my brain, and thought "Okay, that's why it's called OP."

**Jerod Santo:** I just thought their command line was overpowered this whole time, so I thought they were just calling it OP, you know?

**Adam Stacoviak:** There you go...

**Gerhard Lazu:** There are a few binaries that have, for example, 2 (the digit two), 'to' (letters t, o), 3 (the digit three). Apparently, it's a Python package. Lib2...

**Jerod Santo:** I had that as well. Oh, it's gonna upgrade from Python 2 to Python 3 kind of a thing.

**Adam Stacoviak:** You could just alias 1P to OP, if you wanted to, of course... But that's the Easy button.

**Gerhard Lazu:** I like that idea. That's what we're doing in our pipeline. 1P. \[laughter\]

**Adam Stacoviak:** 1P. This key that you have for 1Password - it's in GitHub Actions and no one can see that, right? That's not something that's public.

**Gerhard Lazu:** It's a secret, correct.

**Adam Stacoviak:** It's a secret-secret. That's cool. That's cool. We could do that on the Fly via CI though, because... You know, that's the way you want it.

**Gerhard Lazu:** Exactly. And then the secrets - we can modify them in 1Password, and we no longer have to update them anywhere else. Because whatever is connected to 1Password is able to retrieve the latest values. This will be so much nicer.

**Adam Stacoviak:** That is the way to do it. I sure hope they win. Okay, I sure hope they win, because there's just some -- like, as a user, daily active user of 1Password for a decade or more, there's some oddities with how it operates from a UX standpoint, as a user.

**Gerhard Lazu:** Yeah.

**Adam Stacoviak:** The application - great. Even the application I have some issues with, but whatever. It's a little strange. So I just hope they figure out how to win long-term.

**Gerhard Lazu:** Yeah.

**Adam Stacoviak:** Because that's a great feature.

**Gerhard Lazu:** Well, we need another password manager. We need two... We've already established that.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Passbolt.

**Gerhard Lazu:** Okay. Tell us more.

**Adam Stacoviak:** Well, what I know about them is they're open source. We did talk about that via DM, Gerhard, and I did reach out to the CEO, who I spoke with through our ad spots... I was impressed. And I didn't consider the license... So this was one of those moments where I was like "Okay, you say you're open source... I'm gonna assume you're the best version of open source." But I think it's AGPL, which is frowned upon in some cases. It's not not open source, it's just not always not user-hostile.

**Jerod Santo:** It conforms to the open source definition. Does it not?

**Adam Stacoviak:** Right, it does conform. But some businesses have issues with it. And I think the TL;DR response from the CEO was "Because this is used like an application, it doesn't have an issue. Whereas if you're trying to consume the software and repackage it, that's when AGPL actually has more of a compliance issue." And so to his defense on that, I think that's kind of pretty accurate... Although the premise of Passbolt seems quite awesome, where they actually have -- if I understand correctly, different than 1Password, where you have one secret, and you get access to the whole vault, which is encrypted... This encrypts more like ACLs, where you have more finite access controls to particular buckets, basically, or folders... So much like a file directory.

\[01:02:16.24\] And it's really designed for teams who may have multiple projects, with hundreds of passwords per project... Whereas -- like, if I go into 1Password now, if I'm not in my particular Adam-only 1Password, it can get a little messy, with all the extras in there. Like, I can search for something, and now I'm seeing our organizational secrets, where I don't really care to see them. I would love to have the same kind of access, but I don't really care when I'm searching for Adam's favorite password, .com or whatever, and I'm finding like all of our GitHub secrets and other things. It's just messy.

So I think there's some things with Passbolt that they're doing to sort of compartmentalize where you keep your secrets, who you give them to, who has access to them... And different stuff like that. It's a bit more fine-grained, their approach towards cryptography, and sharing, and decrypting and encrypting.

**Gerhard Lazu:** Well, I'm all for trying, as a second alternative. We always need two, right? What if the primary one fails? We need to figure out how to sync things between the two, but... That sounds fun.

**Adam Stacoviak:** Gotta have two, right?

**Gerhard Lazu:** We have to have two, correct.

**Adam Stacoviak:** You should have two. I'm not sure you have to. You should have two.

**Gerhard Lazu:** You should have two, yes.

**Jerod Santo:** Even when you don't know it.

**Adam Stacoviak:** That's right.

**Gerhard Lazu:** Yeah, exactly. Even when you forget about it. "Oh, hang on... You're right, I do have two. Yes, I did forget about it..." \[laughter\]

**Jerod Santo:** That was awesome.

**Gerhard Lazu:** We could fix this problem in 1Password as well, by the way, Adam. We could create a new vault... Currently, we have a shared one, which is shared amongst all of us. When I say all of us, the three of us. But we could create another one, which is infra-specific, or whatever-specific, and then just a few of us can be part of it.

**Adam Stacoviak:** I mean, it's not that big of a deal. It's more like -- I suppose if you're in a larger organization... Again, we're a small team, so we have smaller scale problems. I think they're more like warts in this scenario. Like, it's not that big of a deal. I can operate around it. But like, I use 1Password personally, and in business, and then also in the secrets context. So I've got like three different contexts I use my 1Password in. So I was just complaining a little bit that whenever I'm using it personally, like literally Adam in this context, not Adam as part of Changelog, like it's just my own secrets in there, I've gotta wade through SSH keys, and just like different things that are part of our infrastructure stuff... Which isn't that big of a deal, except for it's just not relevant in that moment.

**Gerhard Lazu:** Got it.

**Adam Stacoviak:** Maybe that would make more sense, to have an actual separate vault.

**Jerod Santo:** Aren't there separate vaults?

**Gerhard Lazu:** Yeah...

**Jerod Santo:** I have a private and a shared vault in mine. I don't use it personally, so I don't have this problem, so I'm not sure exactly the context... But it seems like you could just activate your private vault, and not see any of our stuff.

**Gerhard Lazu:** I think in 1Password you can disable shared vaults, I think... But I'm not sure. Because you just basically toggle visibility and you say "I don't want to see this vault in my 1Password."

**Adam Stacoviak:** I have a private, Jerod... We have Changelog.com, we have a shared, and then you can have more subvaults. So everything that I'm talking about is in changelog.com. But whenever I search -- this is all almost TMI, in a way... But whenever I search in search, in 1Password, it's...

**Jerod Santo:** It's everything.

**Adam Stacoviak:** Yeah, it's all the vaults. That's on iOS and desktop.

**Jerod Santo:** What was your master password set to? I forgot. \[laughter\] TMI?

**Adam Stacoviak:** I'm just making fun of his laugh over there...

**Jerod Santo:** Is that TMI?

**Adam Stacoviak:** That is TMI. Yeah, you almost got me. Just kidding. So close... So close!

**Jerod Santo:** Mother's maiden name?

**Adam Stacoviak:** Here you go - it's capital B, X...

**Jerod Santo:** Or the name of your first pet?

**Adam Stacoviak:** Yeah...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** So yeah, when you search in there, it's everything.

**Gerhard Lazu:** But I know what you mean. I mean, there's a couple of things in the UI which I wish they were improving just as much as we are. I'd really wish that 1Password did that.

**Jerod Santo:** They should kaizen things.

**Adam Stacoviak:** \[01:06:02.25\] They really should kaizen things. They should consult us and kaizen things.

**Jerod Santo:** They should hire us to come there and tell them to kaizen stuff.

**Adam Stacoviak:** That's right.

**Jerod Santo:** Like, "Don't you guys know that you're supposed to be improving continuously?"

**Gerhard Lazu:** Yup.

**Adam Stacoviak:** Here's the T-hirt to prove it.

**Jerod Santo:** Mm-hm... Okay, so I'm excited about Changelog Nightly. This is really cool. We're the last mile... It will probably take us to the next Kaizen before we get this over the finish line, it seems... Don't you think, Gerhard?

**Gerhard Lazu:** Well, I think there's just like a few things which we need to figure out. I don't think it should be that long. I mean, I was sitting on it for a while, I have to say... But I think it'd be more interesting to figure out whether we want to serve these assets from Fly.io, like the files, or whether we want to upload them to R2.

**Jerod Santo:** I'd just serve them.

**Gerhard Lazu:** Okay.

**Jerod Santo:** I mean, these are like as low-traffic as you can get. Literally, we just send one version of this to Campaign Monitor, and say "Email this to this many people." And then we serve the index file for anybody who hits Open in Web.

**Gerhard Lazu:** Okay.

**Jerod Santo:** So I just don't feel like any more than that's necessary...

**Gerhard Lazu:** What about Buffer? Do we keep Buffer, or can we remove that?

**Jerod Santo:** No, we can remove Buffer? We don't even use Buffer anymore. Yeah.

**Gerhard Lazu:** Okay. Because I know the scripts, whatever it's called... Script-something - I forget, in the crontab - it does the generate, the deliver, and there's one more buffer. So we want generate and deliver.

**Jerod Santo:** Yeah, I think the Buffer is probably a no-op at this point. I've definitely disabled it. So it probably just doesn't do anything.

**Gerhard Lazu:** Okay. Yeah, maybe there's a bunch of cleanup to do there as well... Maybe. Or just leave it as is. It's all good. Okay... And then we want to deliver after we generate, and don't deliver if we don't generate.

**Jerod Santo:** Correct.

**Gerhard Lazu:** Okay. What if something fails? How will he know if something fails?

**Jerod Santo:** I won't get the email?

**Gerhard Lazu:** Okay, that's a good one. I've enabled Sentry DSN.

**Jerod Santo:** Okay. What's that?

**Gerhard Lazu:** So Supercronic has this built-in integration with Sentry where you can see your crons that failed directly in Sentry. So I set up the same Sentry DSN that we have for the app, for the Changelog app... So you should be able to see failures in cron, using the Sentry integration.

**Jerod Santo:** That's cool. I'll take it.

**Gerhard Lazu:** I thought so, too.

**Adam Stacoviak:** I'll take it.

**Gerhard Lazu:** It's like "Oh, I can enable this variable." I enabled it... It's a public one, by the way. Don't use it, because we don't want to see your failures, basically... \[laughter\] I mean, Sentry says it's okay for it to be public, and we have had it public for a while; no one has thought about this, so...

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Why are you telling everybody? \[laughter\]

**Gerhard Lazu:** Well, we don't want to see your failures, that's the point. I mean, why would you spam us with your failures? I mean, go and get yourself a key. That's a better idea, I think.

**Jerod Santo:** Right. I mean, I don't even want to see my own failures, let alone somebody else's. Right?

**Gerhard Lazu:** Exactly. Maybe only if someone wants us to kaizen their failures. That's the only reason why they would share it.

**Jerod Santo:** That's right. So that's cool.

**Adam Stacoviak:** We'll have to figure out what we're gonna do here though.

**Jerod Santo:** For what?

**Adam Stacoviak:** Because we're gonna get back another $30.70 when this move is complete.

**Jerod Santo:** I think maybe we go out at KubeCon and we treat ourselves, you know?

**Adam Stacoviak:** To have a drink.

**Gerhard Lazu:** Hang on... How are we getting $30 back?

**Adam Stacoviak:** We pay for Digital Ocean.

**Jerod Santo:** You know, Digital Ocean. That server can go away.

**Gerhard Lazu:** Oh, I see. Yes.

**Adam Stacoviak:** Yeah, I don't know why it's 28 bucks a month, but... It is.

**Jerod Santo:** You beefed it up at some point, because that's not bottom of the barrel. That's like two steps up.

**Adam Stacoviak:** No. I don't know what's making it 28 bucks.

**Jerod Santo:** You can usually get in on those things at 5 bucks, 10 bucks, on every VPS provider pretty much. 5 bucks entry fee. So 20... That's a beefy machine.

**Adam Stacoviak:** I don't think I created that server.

**Gerhard Lazu:** It's been so long... I'm sure that whoever created it forgot. It's been 10 years almost.

**Adam Stacoviak:** In fact, I'm almost certain I didn't do it. But...

**Gerhard Lazu:** Well, I think that's the cleanup. I think that's something that we can follow up on.

**Jerod Santo:** But, the important thing is that we can go out for drinks at KubeCon when we see each other. November 6th through 9th, in Chicago.

**Gerhard Lazu:** \[01:09:51.11\] Oh, yeah. Finally, after seven years, we finally meet one another.

**Adam Stacoviak:** Oh, my gosh... I'm not sure what I'll do.

**Gerhard Lazu:** Well, you'll realize there's more than the head... \[laughter\] Like, "Wow, there's more to you."

**Adam Stacoviak:** "Let me look at the rest of you. Hold still, Gerhard..."

**Jerod Santo:** Gerhard, entire body.

**Gerhard Lazu:** Exactly.

**Adam Stacoviak:** "There's your arms... Oh, my gosh. You've got arms."

**Gerhard Lazu:** We've only been seeing each other's heads for seven years now. It'll be so weird... \[laughs\]

**Jerod Santo:** It will be weird.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So we're excited. We're going to be there... We're going to be doing some recordings at the -- not at the venue, because reasons... Mostly reasons that I don't understand. But regardless of that, at the Marriott Marquis, which I assume is right next to the venue.

**Adam Stacoviak:** It's connected via breezeway.

**Jerod Santo:** Because people aren't going to want to Uber or Lyft over to talk to us. And we'll also, of course, be at the main show, and just enjoying conversations... Gerhard, you've been to this event before. Adam, you have, too. I have not, so I'm not really sure what to expect. Maybe you guys should talk, because I don't even know what it's like.

**Gerhard Lazu:** It's big. It's lots of people, it's a lot of energy... A lot of things are happening.

**Adam Stacoviak:** Well, he's been there since it's been bigger since I was there, which was just before the pandemic, which was probably the biggest it had been since I'd been there. I think the last year I was there was 2018. Seattle.

**Gerhard Lazu:** That's been a while.

**Adam Stacoviak:** Big conference, a lot of fun stuff.

**Gerhard Lazu:** Imagine nearly 20,000 people.

**Jerod Santo:** Is it that big, 20,000?

**Gerhard Lazu:** Close...

**Adam Stacoviak:** Yeah, it's tiring, too. It's a people-overload... I could only imagine being like a superstar there, having to talk to everybody about Kubernetes...

**Jerod Santo:** Like Gerhard?

**Adam Stacoviak:** ...and the Cloud Native Computing Foundation, and the direction of everything... Like Brendan Burns, for example. When I talked to him there last time, I think he almost fell asleep during the conversation. And it's not because I was boring. \[laughter\]

**Jerod Santo:** See how fast you had to qualify that? You knew what was coming.

**Gerhard Lazu:** He preempted it. "No, it wasn't because of that."

**Adam Stacoviak:** It was the last day... Actually, it wasn't him. It was somebody else that almost fell asleep, but I can't remember the person's name. They're from WeWorks.

**Jerod Santo:** Point being is people were tired...

**Adam Stacoviak:** Very tired, yeah.

**Gerhard Lazu:** It is high-energy; you need to pace yourself, for sure. I've been to a few...

**Adam Stacoviak:** You do. It's a marathon. Like four days for some of these folks. The trainings, the workshops, the pre-meetings, the deals that might happen as a result of being there, if you run a company, for example... You're probably going to not just be there talking to people on podcasts; you're probably gonna be selling your thing.

**Gerhard Lazu:** Yeah. I think you need to be very deliberate about the people that you want to talk to, and it's something which I've learned... And there's a couple that if you really want to talk to them, make sure you talk to them before the conference, and you set something up.

I want to give a shout-out to Frederic, from Polar Signals. He reached out -- they launched today Polar Signals Cloud. And I'm so excited to be talking to him. Ship It 57 was the last episode when we talked... And we had a couple of conversations, starting with KubeCon 2019. That was our first one. You can find him on Changelog. And we were talking about Polar Signals Cloud, Parca, a bunch of things... We had Shipmas, we had a couple of things with Frederic. Solomon - I really want to record with him. I really, really want to record with Solomon. So that's another one. And Eric...

**Adam Stacoviak:** Have you ever recorded with -- you have. It's been a while though, right? You had him on Ship It a while back.

**Gerhard Lazu:** We had a few, but it's been a while...

**Adam Stacoviak:** But never solo. It's always been with somebody else.

**Gerhard Lazu:** Never solo, that is correct. I'm thinking one on one, maybe. Maybe.

**Adam Stacoviak:** Well, you have to talk to the person who owns the room.

**Gerhard Lazu:** I know. Which is you. Right? \[laughter\]

**Adam Stacoviak:** It's us, technically, but you know... Just saying, it could be fun.

**Gerhard Lazu:** Yeah. Putting it out there... But again, I would really like to talk to him. Also Eric, I mentioned... He's the BuildKit maintainer. He's been through some really cool things with distributed caching... I think R2, S3 on steroids, B2... Basically, all the \[unintelligible 01:13:55.21\] some really cool stuff there.

**Adam Stacoviak:** All the twos...

**Gerhard Lazu:** \[01:14:00.11\] All the twos, exactly. He's on all the twos. So yeah. And I'll be at booth N37. Dagger will have a booth, so you can come and say hi. I'll be definitely there. Or you can also record with us in the Changelog room. So we can talk in a bunch of ways. But I'd say be deliberate. If you're hearing this and you want to talk to us, make sure that you reach out, because we may not meet.

**Jerod Santo:** Yeah.

**Gerhard Lazu:** That's how crazy it gets. Not because we don't want to, because we didn't know.

**Adam Stacoviak:** Yeah. I would say Twitter DMs, or Slack; that's free and open.

**Gerhard Lazu:** Or emails.

**Jerod Santo:** Or email.

**Gerhard Lazu:** That works as well.

**Adam Stacoviak:** Changelog.com/community.

**Jerod Santo:** Mastodon... You can hit us up on Threads... Or on Instagram...

**Gerhard Lazu:** Or just leave a comment on this episode. That also works, right?

**Jerod Santo:** We have comments on the website...

**Adam Stacoviak:** That's true. Yeah.

**Jerod Santo:** Does that cover all of our communication media? LinkedIn...

**Adam Stacoviak:** Oh, yeah, we do have a LinkedIn, you can get us there...

**Jerod Santo:** Gerhard's on LinkedIn...

**Gerhard Lazu:** I deleted it, and I had to create it. All the spam... Anyways.

**Adam Stacoviak:** Well, we do have the phone number as well, that they can call. You can call us as well, if you want to.

**Jerod Santo:** You can call us...

**Gerhard Lazu:** Do we have a phone number?

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** Really?

**Jerod Santo:** We have a phone number. Oh, yes.

**Adam Stacoviak:** We do have a phone number.

**Gerhard Lazu:** It's right there in Fastly's cache.

**Adam Stacoviak:** If you call, I will say hello.

**Gerhard Lazu:** Adam is looking it up. He doesn't know... \[laughs\]

**Adam Stacoviak:** Well, I know it, I just forgot the middle numbers though. So it's been - and always has been - 1888 974 CHLG, and/or 2454. So 888 974 2454. Again... I'm just kidding. No more. \[laughter\]

**Jerod Santo:** And if you call that number, Adam will answer it, and...

**Adam Stacoviak:** I will.

**Jerod Santo:** ...it'll be awkward unless you have something to talk about. So if you're going to call it, think ahead of time "What I want to talk to Adam about."

**Adam Stacoviak:** That's right.

**Jerod Santo:** Otherwise, it's just gonna get super-awkward quickly.

**Adam Stacoviak:** And we've had some of those conversations that had turned out --

**Jerod Santo:** It still might get awkward, but...

**Gerhard Lazu:** You can give him some kudos, you can -- obviously, we haven't praised each other enough in this episode, so you can always do that.

**Jerod Santo:** Right.

**Adam Stacoviak:** Nah.

**Jerod Santo:** I think if we're gonna get kudos, you should put them directly into our transcripts repo...

**Gerhard Lazu:** Oh, yes.

**Jerod Santo:** ...so we can train our neural search engine on them. You know?

**Adam Stacoviak:** That's right. Well, KubeCon, we're coming for you, whether you like it or not.

**Jerod Santo:** Yup.

**Adam Stacoviak:** It's been many years since I've been there, and I'm excited to meet you face to face, Gerhard.

**Gerhard Lazu:** Yeah, me too. Me too, me too.

**Adam Stacoviak:** To see the rest of your body, beyond your head...

**Gerhard Lazu:** \[laughs\] That's too funny.

**Adam Stacoviak:** You said it. It's hilarious.

**Gerhard Lazu:** I know. You see, that's how it happens. Just plant the idea, and see what happens.

**Adam Stacoviak:** "I've got more than a head..."

**Gerhard Lazu:** ...and then see what happens.

**Adam Stacoviak:** Oh, my gosh...

**Gerhard Lazu:** \[laughs\]

**Adam Stacoviak:** Chicago. We've got 30 more bucks to spend because of Digital Ocean going away, so we're coming there on fire with some money to spend.

**Jerod Santo:** 30 bucks per month. Amortize that thing for a year...

**Gerhard Lazu:** Yeah, we have to switch it off first. It doesn't count otherwise.

**Adam Stacoviak:** Oh, okay. Well, you'd better wrap that PR up then. Come on.

**Gerhard Lazu:** I know. The pressure is on us is we want beers.

**Adam Stacoviak:** Kaizen. Yeah, Kaizen. Will you be wearing your Kaizen T-shirt, do you think?

**Gerhard Lazu:** Who is that question addressed to?

**Jerod Santo:** Yeah, who are you asking? We all have Kaizen T-shirts.

**Gerhard Lazu:** I don't have one.

**Adam Stacoviak:** Both of you.

**Jerod Santo:** What?!

**Gerhard Lazu:** Nope.

**Adam Stacoviak:** You don't have one?

**Jerod Santo:** We sent you one.

**Gerhard Lazu:** No.

**Adam Stacoviak:** How is this possible?

**Gerhard Lazu:** Well, maybe you did, but I never received it.

**Jerod Santo:** It never came... Well, there was a couple years there were shipments were not easy to land... But I'm pretty sure -- didn't I at least give you a coupon code or something for the merch shop at some point?

**Gerhard Lazu:** Yeah, I don't -- we talked about that, but...

**Jerod Santo:** Everybody that we work with has our shirts. And the fact that you don't is a crying shame. I think we should just bring some to Chicago with us, or something.

**Gerhard Lazu:** That's a good idea. It's just a month away...

**Jerod Santo:** Then we don't have to worry about all this shipping across the Atlantic.

**Gerhard Lazu:** That's a good idea.

**Jerod Santo:** Or the Pacific.

**Adam Stacoviak:** \[01:17:48.29\] Well, I'll go to merch.changelog.com and I will order a Kaizen T-shirt and have it shipped to the Marriott Marquis, because that's where you'll be.

**Gerhard Lazu:** Yeah.

**Jerod Santo:** That sounds dangerous.

**Gerhard Lazu:** Do we have the size? Because -- oh, we don't have the size. That was the problem.

**Jerod Santo:** Oh.

**Gerhard Lazu:** Yeah, that was the case since as far as I can tell.

**Adam Stacoviak:** You think so?

**Gerhard Lazu:** Yeah.

**Jerod Santo:** We'd better get to work on that. That's what I said last time...

**Adam Stacoviak:** Well, this is embarrassing to end the show like this... I guess we'll have to iterate.

**Gerhard Lazu:** Well, that's one thing to improve. And by the way, we can talk about all the other things in-person about what else we want to improve, unless there's something specific that you want to shout out now. What happens -- because I listen to these not only to realize which jokes didn't work out, but also what should I do next. So if there's anything that we want to shout out, now is a good time.

**Jerod Santo:** I think we just want to get Nightly shipped, so that we can --

**Gerhard Lazu:** Switch off Digital Ocean.

**Jerod Santo:** ...spend money at KubeCon.

**Gerhard Lazu:** Okay, nice. Anything else?

**Jerod Santo:** I've got 30 bucks that I want to burn a hole in my pocket.

**Gerhard Lazu:** That's a quick one. I'm pretty sure we can do that this week even, before this goes out. Challenge. Accepted.

**Jerod Santo:** I don't have any other marching orders at the moment, Gerhard. I think we'll think of some in the meantime for our next Kaizen... But right now I haven't put much thought into what we should do next.

**Gerhard Lazu:** Okay.

**Jerod Santo:** Or what you should do next in that regard.

**Gerhard Lazu:** Yeah. I know Passbolt came up, there's a bunch of things like that... Erlang releases... So there's always things. I think it's just a matter of priority.

**Jerod Santo:** Yeah.

**Gerhard Lazu:** And if you can't think of anything - oh, there's so much to do.

**Jerod Santo:** Right.

**Gerhard Lazu:** Which is like nothing obvious. That's good.

**Jerod Santo:** Cool.

**Gerhard Lazu:** Cool.

**Jerod Santo:** Well, let's end it right there. If you're going to be at KubeCon in November, hit us up via any of those channels and let us know. We'd love to record, we'd love to just say hi... We'd love to see the rest of everybody's bodies in Chicago.

**Adam Stacoviak:** Gosh...

**Gerhard Lazu:** That will be amazing. Maybe too much. \[laughs\]

**Adam Stacoviak:** So many bodies...

**Gerhard Lazu:** Every body. We look forward to seeing every body there.

**Jerod Santo:** We wanna see every body there.

**Gerhard Lazu:** Yeah, that's it.

**Jerod Santo:** Alright, kaizen.

**Gerhard Lazu:** Cool. Kaizen.

**Adam Stacoviak:** Bye, friends.
