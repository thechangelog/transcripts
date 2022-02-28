**Gerhard Lazu:** It's finally happened, after months and months. Actually, no. After years of talking about it.

**Adam Stacoviak:** Years, nice.

**Gerhard Lazu:** And months of working on it.

**Adam Stacoviak:** Months and years and months.

**Gerhard Lazu:** Yeah. We have finally switched all our assets to S3, AWS S3. And the hero behind that effort is Jerod. Welcome, Jerod.

**Jerod Santo:** Well... Are you still a hero if you've been talking about it for years, and you finally do the thing?

**Gerhard Lazu:** That's how hard it was. It was so hard.

**Adam Stacoviak:** Why years? Why months? I mean, I think you said this in the last Kaizen, Jerod, like, doesn't it just make sense to put your assets on S3? Why, as a developer, are you apprehensive to do that early, or I guess this many years late?

**Jerod Santo:** \[03:48\] So the original decision was due to a couple of things, the main thing of which was my inexperience with Elixir as a programming language, and my desire to keep it simple. And the post-processing upon upload of our MP3 files, which are quite large, versus like an avatar, which is not a big deal, was -- with my skill set at the time problematic in a remote sense. So I was like, "Hey, keep it simple. We have this huge disc, old school. Upload it to the disc that's sitting right there, and keep it all local, keep it all compact. It's the easy button, and that's going to get us to production faster." So you know, maybe this is a technical depth that we just took on knowingly knowing that. I had built web apps where I would upload to S3 prior to this one. So it wasn't like it was an unknown thing at the time. It was a decision to be made, and I made that decision, and it didn't cause any problems for many years, and then it started to. And so it's just in time, or maybe a little bit late, but it's priorities at a certain point. It just became not a priority, until it became a priority, and I think our work with Gerhard on the platform changes started to percolate, like "Yeah, this is a problem. Here's why. And it becomes more and more a problem", and then finally you're like "Okay, this thing is now-- it's time."

**Adam Stacoviak:** Right.

**Jerod Santo:** And that was probably a year ago, and so now maybe we're a year late, but it hasn't really slowed us down all that much. But we're definitely ready to fly now.

**Adam Stacoviak:** The reason why I point that out is because when people think about our platform and the things we do, it's contextual. I can even recall the conversation you and I had with Nora Jones, Jeli founder. It's all about context in terms of an incident even, or in this case like a decision, which isn't necessarily an incident, but it's like the context. So the context is, you've been a developer for many years, you are familiar with even using S3, but you weren't actively, on the daily, eight hours a day, six hours a day, or whatever your programming time would be, wasn't daily just on the platform. You had multiple roles to play. So you had to have trade-offs, you had to have, as you said, just-in-time decisions... So you punted this decision until, basically, the year 2022, which is totally cool.

**Jerod Santo:** And it's worth noting that when we built this platform in 2014 and '15 - or was it '15 and '16? I don't know. It was 2015, for sure.

**Gerhard Lazu:** Yeah, '15 and '16.

**Jerod Santo:** ...I was full-time contractor building web apps for a living. This was very much-- I mean, Adam, you weren't full-time yet. Or you were coming up on full-time?

**Adam Stacoviak:** 2015, I went full-time. February 2015.

**Jerod Santo:** Yeah. So we were just getting Adam full-time, and I was doing this as a weekend warrior, and I wanted to learn Elixir. I got excited about it. We've told this story before. You can go listen to it. I think Beam Radio was the most recent time that I told this story, which is a cool Elixir podcast you all should listen to if you like Elixir...

**Gerhard Lazu:** Hey, Lars.

**Jerod Santo:** Hello, Lars. And I wanted to learn Elixir as I built it. So I was very much learning as I went. And this was one of the parts where I was like, "Ah, I don't know if I can get this done all at once. But if I keep it local, I know how to do that." And so that's what I did. So it was context, but also it was just like, you have to pick-- it's kind of like the innovation tokens concept. I already spent a big one on Elixir and on Phoenix, and it's like, "Do I also want to involve S3 uploads in this process?" And I just didn't want to at the time.

So that's the why... The why is so long. Again, it was priorities, I think. And because I'm not a full-time engineer on our platform, I work on it when other things aren't going on, and so I can prioritize according to our immediate needs. And so it's kind of a squeaky wheel situation. But Gerhard, it's been squeaking for a little while, and so finally... And mostly it's limiting us in a couple of ways. Gerhard, why don't you just tell the folks what having those files local, what were the implications of that?

**Gerhard Lazu:** Yeah. Before I say that, I want to mention that this is reality. This is what it looks like, okay? It's great ideas that take a really long time to get to the point where they finally happen. And it takes trade-offs, it takes a lot of dead ends... Because I remember us trying this in the path and discovering things which we weren't expecting, which made this change difficult. And there's always something more important, to the point that a day comes and you say, "You know what? It's been two years, I'm going to do it." And two weeks later, you've upgraded all the dependencies and you still haven't done it.

**Jerod Santo:** \[08:15\] Yeah, exactly. \[laughter\]

**Gerhard Lazu:** Which is the yak shave.

**Jerod Santo:** The yak shave from last time.

**Gerhard Lazu:** Exactly, episode 30. So that happened. And then ten episodes later, we did it. And part of this was also is how do you test this without breaking production? Because, by the way, we did a live migration without anyone noticing any downtime; or maybe some 404s, right? It was like a couple of minutes of 404s for some MP3 files.

**Jerod Santo:** Right.

**Gerhard Lazu:** And we did it I think like in an hour, maybe two hours, the actual migration...

**Jerod Santo:** It was super smooth. That was awesome.

**Gerhard Lazu:** Yeah. How do you do this feature? How do you plan it out? How do you roll it out when you try to fit it around so many things in a non-disruptive, easy way that you can back out of if things don't work out? And we have to coordinate, you and me, and it's like all these other things happening... So again, I'm the weekend warrior when it comes to Changelog, and the late-night warrior.

**Jerod Santo:** Right.

**Gerhard Lazu:** And how do you make it work? So it's the reality. It took us a long time, but I'm so glad that we got it done. Why am I so glad? This opens up the possibility of having more than one application instance. We could only ever run a single Changelog because we needed to have a disc mounted that we could read and write from.

**Jerod Santo:** Right.

**Gerhard Lazu:** So those that are using Kubernetes, you know there is very few storage drivers, CSIs, that actually support that. And the ones that do, there is all sorts of weird edge cases with them - deadlocks, slow-downs, latency... You know, issues.

**Adam Stacoviak:** Stuff.

**Gerhard Lazu:** So it's definitely complex, because it's a complex problem. And we love doing simple things, as you know, listening to us and knowing all our story and the journey. So not only we can run more than a single instance of Changelog, we can finally go multi-platform.

**Jerod Santo:** Da-da-da...

**Gerhard Lazu:** Mm-hm.

**Adam Stacoviak:** So new beginnings, right? Of course, lots of stuff in there. More context, too, to-- you did touch on one of them. Jerod, you're in Central Time Zone. Gerhard, you're in GMT, is that right?

**Gerhard Lazu:** Yeah, UTC right now. Yeah.

**Adam Stacoviak:** UTC right now. So even different spectrums of time, so coordinating, and they're both not full-time engineers. So I think this just speaks to more of our desire to learn, but then our desire to keep things simple, and that it doesn't require necessarily full-timers all the time. And maybe that's why it takes a little bit more extra time, because you both aren't full-time on the platform itself.

**Jerod Santo:** Yeah. So we rolled it out, let's just call it end of January, and I had it done-- I don't want to roast Gerhard here... I had it done mid-December maybe, or earlier, and I was like, "Hey, the code is done." Now, was the code done-done? No. It was the done where you think it's done. It had 5% needs left; but those needs, I wasn't going to know until you and I started going. So the rest of it was actually sitting behind Merry Shipmas and the stuff you were working on for that episode, as well as the synchronization that Adam refers to. So there were other things in the way.

The coding was actually rather trivial. There was one aspect that's interesting that I was hung up on, and maybe I'll just tell that story real briefly. So the part that I was hung up on was that when we upload an MP3 file into our system, we run some transformations on it. We're basically doing the ID3 tagging, we're making sure that the episode artwork is attached... All those things that you're going to do that you want that MP3 to be ready to be shipped. And that's done via shelling out to FFmpeg. The reason we shell out to FFmpeg - I actually had told this before, so I'll keep it brief - is because there's no id3v2 library in Elixir, and to this day, that's outside of my wheelhouse. I think I could probably sit down and give myself 40 hours to work on it and get something going, but I'm just never going to have that much time. And so we use FFmpeg. It works great. It's one of my favorite tools. And it works on a local file path, right?

\[12:11\] And so that's kind of where the decision was like, "Well, I'm going to use FFmpeg. I'm going to use local files. And I'm going to attach and run that inside of this library that was called Ark." We've since switched to Waffle, which is a fork and an extension. It's a community takeover of a project that was no longer maintained, and so we switched to Waffle as a part of this. Shout-out to the Waffle devs for keeping it going. That's totally awesome. And it has in it a transform step. So if you think of the upload, like you're inside the library, you define your upload file, and you give it its properties. Where am I going to store this? Okay, we've got to switch all those to S3 versus local pads, make sure all the pads still work... And then this transform step is where you basically shell out to FFmpeg.

When we switched to the S3 way of doing it, that transform step no longer has the data that it needs, because we re-read the file off disk to get the new duration of the episode, as well as, I think, the final bites that it is after you've done all your dirty work. And I just couldn't get it plugged into this transform step, and I'm trying everything. And finally, it dawned on me--

**Gerhard Lazu:** Did you stop and start it again?

**Jerod Santo:** Of course. \[laughter\]

**Adam Stacoviak:** Many times.

**Jerod Santo:** Every single thing that you could do as a developer, I tried, as well as just googling around. I think I was helped a little bit with the Elixir forum, where somebody was talking about them also not being able to do this. Sometimes you're wondering if you're holding it wrong, like we talked about last time...

**Gerhard Lazu:** Oh, yes.

**Jerod Santo:** And having a confirmation of like, "Yeah, actually it doesn't work", because you can't get the data you need at this stage in the pipeline. I finally threw up my hands and realized I don't have to use the library for that step. Sometimes we just get stuck in this -- what they call a local maxima; like, you're right in this little area, and you don't think outside of that box and realize, "I don't have to use the library for all of it. I can actually just transform it with my own code at a different time, and just skip the transform step altogether." And once I had that thought, everything else was just easy-peasy.

**Gerhard Lazu:** Yeah.

**Adam Stacoviak:** That's cool.

**Gerhard Lazu:** I remember that. I remember you showing me, "Do you see this?" That's all it took. It was like one line.

**Jerod Santo:** Yeah. Well, you said, "You deleted a bunch of code", and I'm like, "No, I just moved it all over here, and I call it right there." I have my own module now, versus it being inside of the Waffle library kind of instantiation. And so it was really just moving the code around was all it took. And then it just worked. I was like, "Alright, sweet." Everything else was just work. But that was like the "Can I actually get this done?" question answered from there on out. It's just like, "Okay, now I've got to go do all the other things, which are straightforward tasks. So it wasn't that bad. It was just that one little thing that had me stuck, and once I figured that out, it was just wait on Gerhard to get ready...

**Adam Stacoviak:** Where were you at when you had that realization? Were you running, walking, driving, showering?

**Jerod Santo:** I think I was actually standing right here where I'm standing right now, at my computer. I think I was reading that Elixir forum post and I realized "This guy has the exact same situation that I'm in and he can't get it working." And he might have even said something like, "I'm just not going to use it" or "I'm going to try something else", and I was like, "I should try something else." And I was like, "Wait. I can just... Try something else. I can just write it myself and just use my own module." So I was standing right here, just staring at the screen.

**Gerhard Lazu:** Did you update that forum post, or that forum thread with your--

**Jerod Santo:** I am not a good citizen of the web. I don't think I did.

**Gerhard Lazu:** Okay, action item, after this Kaizen.

**Jerod Santo:** Totally.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I have to go back and find that.

**Gerhard Lazu:** Yeah, so we can link it as well and we can show our listeners that you actually did it. We could link this up with your reply.

**Jerod Santo:** Okay. This is kind of like on JS Party - we do a new year's resolutions episode, and the next year, I go back and listen to it and I hold everybody's feet to the fire. And say, "Did you actually?"

**Adam Stacoviak:** Oh, boy...

**Jerod Santo:** Then we all fail.

**Gerhard Lazu:** \[16:04\] There we go, we know how it works.

**Jerod Santo:** Yup.

**Gerhard Lazu:** Pull request 400 in our GitHub repository has the entire story. You can see Jerod's struggles, and you can see the new Kubernetes configuration, everything that I had to do to get this running. So the reason why Merry Shipmas was important is that one of the gifts was using Crossplane to provision a new Linode Kubernetes engine cluster using Crossplane. And we had to build a new provider for it with Terrajet. You can listen to episode 33 if you're curious about the specifics... But that was, I think, pull request -- I have to look it up. I'm going to look it up really quick... 397, I want to say? 399. So one before.

**Jerod Santo:** Ah, there you go.

**Gerhard Lazu:** Pull request 399 has how we configured the auto-restoring Kubernetes clusters with Crossplane. And we joke about Jerod deleting a Kubernetes cluster and wanting us to have an anti-Jerod mechanism... You know, like you have an antivirus... No. \[laughter\] No, no, no, no. Jerod would never do that. It's just me that deletes things, for sure. Remember Kaizen 20--

**Adam Stacoviak:** My DNS.

**Gerhard Lazu:** ...or Kaizen 30, when I admitted to deleting the DNS token?

**Adam Stacoviak:** That's right.

**Gerhard Lazu:** It was me. It's always me.

**Jerod Santo:** Yeah, you do like deleting things.

**Gerhard Lazu:** Yeah, and seeing what happens. Anyways, 399 had to happen first. We wanted to provision a Kubernetes cluster with Crossplane, and we did that. That is actually our next year's - actually, this year's, 2022 - cluster, which is what we tested to see how this would work before taking it into production. So we are still running on the 2021 LKE cluster. We're in the process of migrating to 2022, and we want to test this new integration out with S3 in something which looks like production, and is as close to production as possible, but it's not our actual production. So if there's any mistakes, we can go back. It's a nice, safe, low-risk, low-stress way of trying things out and seeing if they work. And in our case, it did.

**Break:** \[18:04\]

**Gerhard Lazu:** So January 25th, 26th is when we switched the assets served directly from S3, from AWS S3 on, and since, a couple of interesting things happened. First of all, our fav icons, favicon.ico, I-C-O, however you want to to pronounce it, we have seen elevated 404 responses for those. But I think you were saying, Jerod, that's like a default behavior for some browsers. And even though we tell where to find the icon, they don't look for it there. Is that right?

**Jerod Santo:** \[20:22\] Yes. So in the head of our responses - not the headers, but the actual head section of your HTML - we specify where that shortcut icon is. And as part of this process, all of our uploads and our static files are coming from the same CDN now, whereas they previously weren't. And so we moved all of our static files to /static/. So the default behavior of browsers is to look at /favicon.ico, and some browsers will do that no matter what. Now, I'm guessing a lot of those are command-line, robotic kind of things. You can also specify where it lives, which is what we're doing in our HTML. So browsers who obey those rules are still loading it, but we're having increased 404s. We can definitely throw a redirect or something in there that just makes them go to the right place, but not something that we're super worried about at this point.

**Gerhard Lazu:** Yeah, that's right. So even though the 404s are elevated, it shouldn't affect anyone. We had like 10,000 in the last 24 hours just for that file alone.

**Jerod Santo:** Wow.

**Gerhard Lazu:** That's quite a bit, but they all come from Fastly directly, so they don't hit the app. Fastly can't find that file in our AWS S3 bucket, and everything is fine. The other interesting thing is that our misses for MP3 files have increased, and I think you had a good theory about this, Jerod.

**Jerod Santo:** Yes. So I believe that is because we do not have Fastly set up to do origin shielding, which we had previously, and we have on the changelog.com domain. And so what that does is you select one of their pops, usually one that's close to wherever your origin is. Now, our origin is S3, so that's going to be U.S. East, or something.

**Gerhard Lazu:** U.S. East, yeah.

**Jerod Santo:** So yeah, you would pick LaGuardia or something like that as your shielding point of presence inside of Fastly, and it acts as basically a proxy for the other ones. So instead of always going to S3 for misses, it will go to LaGuardia, and LaGuardia will go to S3. And as long as LaGuardia has it, then all of Fastly's other points of presence are going to ask it first. And that will definitely decrease your misses, assuming that we understand what a miss means. And coming out of Fastly, I think we do, but we could be wrong.

**Gerhard Lazu:** Yeah.

**Jerod Santo:** So getting that fixed, I believe, would've resolved that. We also haven't looked into increased S3 charges, but they definitely could be going up, because all those misses are still costing money. So we'll have to look into that. If it's moving the needle, we definitely need to fix it. If it's not moving the needle at all, it's kind of like - well, it's more Amazon's problem than ours.

**Gerhard Lazu:** Yeah. This is what always happens. You improve one thing, and then you're already thinking about the next improvement. At least that's how my brain works. So in this existing situation, what I'm wondering is why do we have to worry about AWS S3, our CDN? Why isn't that the same thing? And I suppose if we were using CloudFront for our CDN, this would be less of an issue, I think.

But what I'm really curious about is - sure, how does this behave, but I think we talked about this in Kaizen 30... What if we used another CDN, besides Fastly, which integrates with this? And you know where I'm going with this; I'm thinking CloudFlare. I'm thinking CloudFlare R2. Could we try that out and see if that is simpler in terms of configuration, in terms of setup? I don't think we'll have the same amount of stats and logs that we currently have from Fastly, so that obviously will likely be an issue. But I'm wondering if that would be a simpler setup from performance, from customer satisfaction.

\[24:07\] I mean, right now what I'm seeing is -- I was looking at the 99th percentile, and I've seen that our 99th percentile today was, for example, 657 seconds. So some requests would be great to dig into those to see which were those requests, are taking 657 seconds to serve. That's like 10 minutes. Who's waiting ten-- I think that must be one of those Apple watches again, waiting for an MP3 file to stream so they can listen to it. It must be right over 4G

**Jerod Santo:** Maybe.

**Gerhard Lazu:** So it's a great one to dig into. But I'm seeing these spikes, which - they didn't happen before we switched, or at least they weren't as severe before we switched to S3. And Honeycomb makes it so simple to see how our 99th percentile increased significantly since this switch. So for example, we had January 24th, we were around -- looking at the last 28 days, the granularity is two hours. Our 99th percentile will be around 500 milliseconds. Those were the peaks. Now, the peaks are 12 milliseconds. Our 99th percentile is actually worse since we went to S3 for the static assets. It would be great to dig into it why that happened, because we thought this would be improved.

**Jerod Santo:** Roll it back. Roll it all back. \[laughter\]

**Gerhard Lazu:** I think that's what you need to do, Jerod. Two years of thinking about it... \[laughs\] We have to go back.

**Adam Stacoviak:** Not another laugh fest...

**Gerhard Lazu:** But -- no, seriously... This opens up the possibility to us running more origins, and just digging more into why this is happening and what needs to improve... Because I still think we're using parts of this wrong. And we had a great comment from Steve Schwartz for Kaizen 30. He was offering an alternative analysis of our CDN issue, and he was talking about the 18-megabyte gifs, which is crazy big. I agree. So smaller image file sizes, that's what he was recommending, to reduce the impact on non-first-world visitors. That makes sense; so making those images smaller, so that wherever they served from, the latency is not as high, and serving all that content is not as high. But for MP3s - I don't think there's much we can do about that.

**Jerod Santo:** So it's worth stating that any 18-megabyte gif file that we serve was not one that we created. We cover news, and we link to repos and demos, and things like this. And so we'll pull into those news items, images, gifs, YouTube videos, etc. So this was somebody else's gif that we are now -- we're not hot-linking it. We go ahead and upload it to our own system and re-host it, but we don't do any minification, or - what's it called? ...compression on gifs. They don't compress well, anyway. It's a terrible format in terms of that. But that's the kind of thing that you will find on an individual news item page, and it will also scroll the homepage until it scrolls off the top of the homepage. But those aren't things that our developers are creating and putting into the app, if that makes sense. Those things are minified or-- I keep using JS and CSS terms. They're compressed, they're image-optimized things.

So these are kind of like third-party relics that we're hosting, and I think compressing those might be a exercise in turmoil. Maybe I'm wrong. I just know that gifs have historically never compressed well, and so you might not be able to -- so the answer then is like now you're making content decisions, basically, like "Hey, stop putting awesome gifs in it." Because somebody might have a cool demo of their open source project and have a 32nd gif that's worth a thousand words, or more, but is it worth 18 megabytes? Now it's a content decision. So it's an interesting trade-off.

**Gerhard Lazu:** Yeah, for sure. I have a couple more answers. Thank you, Honeycomb, for making it this easy. Not sponsored; at least not this portion. So I was slicing and dicing as Jerod was giving us that amazing answer, that 99th percentile, why is it so high. And apparently, before our audio Mpeg files, which had that content type, were taking the 99th percentile, was actually 20 minutes.

**Adam Stacoviak:** \[28:19\] 20 minutes... Human-readable formats - Honeycomb, please.

**Gerhard Lazu:** \[laughs\] Yes, please. There is actually a way, I just have to set up the derived columns. Liz was showing me how to do that. Thank you, Liz. That was great.

**Adam Stacoviak:** I'm gonna get it wrong again?

**Gerhard Lazu:** Yeah. So 20 minutes was a 99th percentile for our audio files before. Now, since we went to S3, it is just 12 minutes. So it is an improvement. They are taking less to serve. What I was curious about was how long does it take to serve the other content. Because we have offloaded all those MP3s and all those static files off the server. How fast is the origin now? So that's what I would like to ask it next. How about we do that?

**Adam Stacoviak:** What Gerhard is doing behind the scenes is he is deep into various dashboards where you can just sort of like ask Honeycomb pretty much anything about your system in production right now. And what he's doing is he's digging into essentially times between different content types and how it was delivered back, essentially the time, and seeing what that difference is, so that we can say, "Okay, this content was served in this amount of time", or "This content was served in that amount of time" and sort of understanding your system better so that you can see, "Okay, this is how it performs with this kind of load, or that kind of load", and then be able to fine-tune your system to perform accordingly, as you like. And so this beautiful magic box called Honeycomb allows you to ask these panes of glass this question, and essentially, just go finite, super finite into these details. Maybe I've given Gerhard enough time to get his answer back.

**Gerhard Lazu:** Yeah, I do have it. So it improved marginally - the XML ones are those feeds which I'm looking for - but not enough to show a huge alleviation in the pressure. So it's almost the same. And that shows that the time is not network-related, it's whatever needs to happen inside the system. So what I'm thinking is maybe PostgreSQL. Maybe when we go to a different PostgreSQL, maybe when you have reads a bit more optimized... And those are metrics which we're still missing, just to understand how can we improve our PostgreSQL query so that when we build those feeds, they don't take as long as they take currently.

So right now, the 99th percentile for our feeds are 1.2 seconds. Not bad, right? Because our feeds are fairly chunky. I think it's a couple of megabytes. I forget exactly how much. And they hit the database fairly hard. Even when it's cached, even when everything is buffered, it takes a while to transfer all the data, all those megabytes between things. So moving the static assets off the server hasn't improved this, which is what I was hoping I would see. But that hasn't happened. So I'm wondering, is there another content type that has improved? And I'm just going to go through the entire list now. No, not images... Text, HTML... I think this is the same. Let's see. Showing events in this group. Has HTML improved? Not really. Actually, it's gotten worse, which is interesting, because we don't store any HTML pages on S3. Do we, Jerod?

**Jerod Santo:** No.

**Gerhard Lazu:** I don't think we do. All that is coming. So that is actually worse. The 99th percentile is a lot more spikier now. So that's an interesting one. I don't think we're holding it wrong. I think we have more questions to dig into, and I think that's a good one to look into next.

**Adam Stacoviak:** Speaking of something to look into next, I do want to plug a recent episode of Founders Talk, because we're talking about Honeycomb. And I truly believe this gives us superpowers, and that's exactly what I talked to Christine Yen about. The title of that show is "Bringing Observability Superpowers to All", because that's their mission. And if you're a fan -- if you're not a fan, you should listen to this show. Christine went deep on the subject of all things observability, founding Honeycomb alongside Charity, the bees that make up the team, and a bunch of other fun things. So we are definitely loving Honeycomb, but if you love the behind-the-scenes from a founder, CEO perspective, that's exactly what you'll get from that show. So it's episode 86 on Founders Talk. Make sure you check that out.

**Gerhard Lazu:** \[32:18\] I'm going to share another behind and the scenes item regarding Honeycomb. That was meant to be another Christmas gift, which I didn't have time for, and we got blocked on other things and I had to reprioritize. I did have, I think, an hour-long session with Liz, Lizthegrey. Thank you very much, Liz. That was so, so good, because it helped me understand some of the superpowers which I was missing. I was still thinking in terms of dashboards, and I was still thinking in terms of having these queries prebuilt. It's actually the opposite. You need to go and explore and dig into and ask questions, and seeing Liz doing that was so cool. And now I know how to use Honeycomb correctly. I was holding it wrong; definitely holding it wrong. And now I can dig around anything. It's just so good for us. We can understand things so much quicker than before. It takes me minutes, things that before would take at least half an hour, maybe even longer.

**Adam Stacoviak:** I was thinking, as you were digging into this, what the experience might be for our listeners. That's why I had to step in and comment in a little bit, because I'm thinking, "Gosh, we might be losing the audience." They may be, the few, the tried and few might stick around in terms of brain-power, and then come back whenever Jerod speaks and maybe it gets more interesting again, or something like that... Just kidding. \[laughter\]

**Gerhard Lazu:** Good one.

**Adam Stacoviak:** But I was just thinking, maybe this would be something where we throw a 20-minute session on YouTube of you just digging into Honeycomb and just being curious; maybe bring Jerod on or Liz on or some sort of tag-along to sort of dive deep... Because I think that would be super fruitful. I would for sure watch it. And I can imagine anybody listening to this and hearing us gush about our observability superpowers thanks to Honeycomb would be like wanting to watch that as well.

**Gerhard Lazu:** Again, Merry Shipmas was meant to be videos. We recorded those videos, I just never had time to edit them and never had time to publish them. So that's like another behind-the-scenes thing. So that's exactly what it was meant to be. And we did record the videos with Crossplane, with Dagger, with Frederick, with Parka, but they never got published. And the idea was to do the same with Honeycomb. I didn't even have time to record that episode or part of an episode. But yes, I would really like that, for sure.

**Adam Stacoviak:** Well, expect things in the future, listeners, and future viewers, because we'll circle back with Gerhard on some ideas on this front... Because I was unaware of that. I love these live Kaizen podcasts, because -- I don't want you editing that, Gerhard. You've got too much stuff to do.

**Gerhard Lazu:** For sure.

**Adam Stacoviak:** We'd rather find other things to do. And Jerod and I will find folks either currently on our team, or people we can bring on our team. We're a growing, small -- I always say small indie media company, because it definitely puts us in perspective, but we're not brand new small. We're just 13-years-later small. You know what I mean? ...but we want to solve those problems. I find it super-valuable to get those kind of conversations out there into the world. And if it's a thing from the Merry Shipmas episode - which is super-cool, by the way. I loved that we had Breakmaster Cylinder do some cool Christmas jingles in there.

There's a little surprise in there that we didn't even tell you about. I love making these things special for our listeners, and so I'd love to find ways to get those conversations onto YouTube, the full-length videos. We'll figure that out though. So listeners, stay tuned.

**Gerhard Lazu:** I have 45 gigabytes worth of screen flow files, which are videos that I can share; 4K videos and all that stuff. My internet can handle it. \[laughs\]

**Adam Stacoviak:** Now it can, yeah.

**Gerhard Lazu:** \[35:46\] Like the one gigabit - full-on, not a problem, so I can upload those. But I would love to follow up with Liz and Honeycomb just to show what this new thing means, because now we have CDN metrics, and we can slice and dice and we can understand a lot more about our origins. And this will become increasingly important as we are going towards multiplatform.

So the reason why I'm really big on this is because we can try more of what's out there. We were never prescriptive about Kubernetes, or this platform or that platform, whatever the name may be. We want to try as many as possible out and share our learnings, share what works, share what is easy, share what is interesting. And the only way we can do that is by trying more platforms out, trying more tools out. It's not about promoting this tool over that tool, it's about genuinely sharing what we think about them and what worked for us. Contexts are very important. And our context - you already know it. We've been talking about it for years. But maybe it will work for you, too.

So what challenges remain for our multi-platform? The big one is a database, right? Because currently, it just runs on Kubernetes as a single-- I'm blanking out. Not stateful set. Yes, as a single state-full set. That's exactly what it's called, as a single stateful set. It's really simple. We even did -- do you remember, Jerod, the easiest migration? I showed you how to migrate, how to restore from backup.

**Jerod Santo:** Yeah. You just delete the current one.

**Gerhard Lazu:** Exactly. \[laughter\] So the easiest way to fix--

**Adam Stacoviak:** Which feels so wrong, I'm sure, right? It's like, delete--

**Jerod Santo:** It does.

**Adam Stacoviak:** ...to restore?

**Gerhard Lazu:** Because it just restores itself. So you delete it and it just restores itself. That's how simple it is. It pulls the latest backup and it just boots up with the latest backup. That's it.

**Adam Stacoviak:** Wow.

**Gerhard Lazu:** Really, really simple. So moving that PostgreSQL elsewhere. We talked about I think CockroachDB, or at least we've mentioned it... But I think we're thinking Fly, a database PostgreSQL that runs on Fly. I was testing WireGuard out, and it works. I still have a tunnel working on my machine, so it's very easy to connect to it securely. So I was impressed with that.

But also, how do we connect to the database from -- well, obviously, multiple locations. Kubernetes is one of them. So can we run LKE? Can we have multiple origins? How do we update those at the same time? Those are some of the challenges which I have in mind. Anything else that you can think of, Jerod?

**Jerod Santo:** That's the big one, I would say. Everything else is stateless already, so... It's all on you, Gerhard. My job here is done.

**Gerhard Lazu:** Nice. Anything that you're leaning towards when it comes to PostgreSQL? Are you curious to find out about it running in a specific place?

**Jerod Santo:** Well, there are a lot of hosted offerings, and so I would, of course, be curious to know how each of them works, what they cost, pros and cons. We know Heroku has one, we know that AWS has one. I mean, the list goes on. Those are just the two off the top of my head. Yeah, I'm curious. I don't know how far my curiosity leads me. Does that mean I want to go try 12 hosted Postgreses out? I'd prefer that you do that legwork, Gerhard. \[laughs\]

I'm curious, but not enough to really -- like, if we went to one that was working well, I wouldn't be like, "Now let's try the other six", because that's not the way I roll. But I know that's the way you roll, and I'm definitely interested. Depending on how much work is involved in getting that done, I think it's valuable not just for, but also for others, which makes me more interested in it; it's like, can we share this information and put it out as a useful resource or something? Then I'm more interested.

**Gerhard Lazu:** Yeah. I definitely like trying a few things. I don't go crazy in that I do a comparison of the entire market. That's not me. It's like, what is close to us? What makes sense? Can we compare two or three, like a short list? And then we go with the one that, again, makes most sense for us. It doesn't mean it's the best, it means it fits us, based on everything we know. And I'm a big fan of the work that Fly have been doing, especially around the Firecracker. I think that thing is amazing, around the infrastructure which they have. Equinix Metal, I think that's a really solid player. I like the bare metal aspect of it a lot. WireGuard, I think it's amazing. And their commitment to Phoenix. So to me, it just makes sense. I mean, we seem like we are attracting one another, and it's not forced in any way. It's just their blog posts, the stuff that they talk about... It just suits us.

**Adam Stacoviak:** \[40:12\] I think the context there too is why. So we're a podcast platform first, and then I would say a news syndication platform... I would say really in parallel, but we're most known for the -- or I guess we're known for both really, the news feed and the newsletter and the podcast. I guess it's very parallel in terms of hierarchy. But why? Why do we need -- do we have a massive user base? Do we have a massive hit count every day? Do we have just tons of traffic? No. We do own our podcasts and our Mp3s, that's why we have Fastly and the CDN, all this different stuff we've talked about before. But why do we need -- because we don't, right? It's for the learnings. It's for the learnings and for the sharings of why would we try to multi-platform, have an LKE, have an application that can be deployed to different run times like you just said before, be deployed to a Linode Kubernetes engine, be deployed to a Fly setup, or have a database on Fly... Like, why would we want to do that, Gerhard? Why are we most attracted to that? Is it because we love to cause pain, we love to explore, we love to share? Why do you think?

**Gerhard Lazu:** Because we like to improve.

**Adam Stacoviak:** Okay.

**Gerhard Lazu:** And we don't know what improvement looks like, Kaizen exactly.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** Is that simpler? Is that better? How can we talk about Kubernetes if we're not using it? How can we talk about it if we haven't tried some of the pain points? And okay, we have a monolith. We try to make the best of it. We don't rewrite it as microservices - now, that would be crazy - but we try running it on multiple platforms. And at the end of the day, it's a Phoenix app. Where is a great place for running Phoenix apps? Well, Fly comes to mind, based on the blog post, based on Chris McCord working there, the creator of Phoenix. It just makes sense.

We could just push it to Heroku. We could definitely do that. And I would be up for trying it. I don't know what pain points we would find, but we couldn't even entertain that idea until pull request 400 was merged, which is why this is significant. The work that Jerod did - I was mentioning this - from my perspective, it's the most significant improvement in six years to the app itself; because before, we couldn't do this stuff. It was either LKE, or Heroku, or Fly. It wasn't an "and" problem.

**Adam Stacoviak:** It was an "or", yeah. Or now it's an "or".

**Jerod Santo:** Real-time follow-up... I logged into our AWS console and I checked our current month's S3 costs, and I am currently setting up shielding as we speak, because we need to get that sucker shielded. \[laughter\]

**Adam Stacoviak:** Oh, boy...

**Jerod Santo:** Yeah. Let's--

**Adam Stacoviak:** Hundreds?

**Jerod Santo:** Let's give a percentage...

**Adam Stacoviak:** Tens?

**Gerhard Lazu:** Or thousands.

**Jerod Santo:** Our current month billing is up 1,900% over previous months.

**Adam Stacoviak:** That's a lot. Well, we normally have like a $20 bill. So maybe it's like 150, 200 bucks.

**Jerod Santo:** Here's where Kaizen gets real. When did we set this up? So we've been on it for--

**Adam Stacoviak:** Last Tuesday.

**Gerhard Lazu:** A week.

**Jerod Santo:** So one week, and we've got about $500 in costs. Per week, so that's two grand a month.

**Adam Stacoviak:** Really glad you looked into S3, Jerod, during this conversation.

**Jerod Santo:** Whereas we were paying $28 a month previously. So roll it back. Roll the whole feature back... \[laughter\]

**Gerhard Lazu:** This is not an improvement, is it?

**Jerod Santo:** I'm literally rolling out the shielding for Fastly right now. I'm hitting activate. So hopefully that'll probably knock it down to a quarter, maybe hopefully an eighth.

**Adam Stacoviak:** \[laughs\] I don't know what you would even call this - live fixing, live cost savings?

**Jerod Santo:** Just trying to save us money while you guys are talking. Welcome to Ship It. Kaizen.

**Gerhard Lazu:** Does it work? No, it doesn't. Let's go back. \[laughter\]

**Jerod Santo:** I think this was a terrible idea.

**Adam Stacoviak:** 500 bucks later... Alright, so this is where we tell you about change log.com/++, where if you are a die-hard subscriber or a listener, there is ways you can help us. Now, we don't really need that help, honestly. This is just being mostly joking. We would much rather you just share our shows with your friends. I mean, to me, that's the best payment. But if you like our shows and you don't really care for the ads and you want the extra bits we put in the end of our ++ episodes - which isn't every single episode; it's sometimes, but we do strive for it. I know Jerod does more than I do, to strive for putting extra bonus stuff there.

**Jerod Santo:** \[44:22\] Yeah.

**Adam Stacoviak:** And it's just because I have -- I don't know, just less time, I guess.

**Jerod Santo:** Plus higher bit rate audio. We were just talking about that. So if you're an audiophile, hear Gerhard's luscious tones in even more quality.

**Adam Stacoviak:** Just five subscribers at a yearly would help us pay that S3 bill. \[laughs\]

**Jerod Santo:** Help us pay our S3 bill.

**Gerhard Lazu:** Slack high five or it hasn't happened. \[laughter\]

**Adam Stacoviak:** So that was mostly a joke, but a good reason to tie that in. So back to Fly and Chris and some of the things they're putting out there... So I'm going to read a tweet that Chris McCord put out, I think it was yesterday. It was 28th... Is that right? No, two days ago. He says, "I'm blowing my own mind deploying Elixir apps across the world on Fly and seeing them cluster together. PubSub's just arrived in Sydney and Amsterdam. A couple minutes later, I can have another instance in Hong Kong. And it all works, somehow. This deserves a little screencast."

Now I don't even know what the heck he's talking about necessarily, but that kind of attraction, that kind of real-time, raw, just being excited about their own platform, and then the words, it all works "somehow"... That to me is like -- I know Chris is pretty sharp. We've had him on the podcast a couple of times where we've shared the Elixir and the Phoenix story. We've obviously been drinking the Kool-Aid for many years, but we're not going to change. We've got some Ruby roots, but we're not going to suddenly just be like, 'Okay, done with Elixir, done with Phoenix" and bail. We're in it to win it.

But this is what drives me. They are super-curious about making Elixir, and in particular Phoenix, very fast, very distributed across the world, putting apps close to their users. That's what attracts us to their platform. And so I can just share one little note... Behind the scenes, we are in talks about what it could take to technically put our platform on Fly. We do have the support and buy-in from the top-down. It's still in the works, it's not a done deal yet...

But going back to Founders Talk - I've had Kurt on Founders Talk, we talk about, essentially, his entire journey as a founder. I'm a big fan of his... And so he's always been a straight-shooter with me, always been easy to work with, so I'm just excited about what that might turn into.

So as it turns into this sort of look at multi-anything, I'm excited to put Fly into the mix, because they're great people. They obviously care about Elixir, we care about Elixir, and I'm just so excited about where that might come from too, as well as their desires for Postgres and global distributed and all that good stuff. So... Pumped.

**Gerhard Lazu:** One thing which we want to emphasize is that this doesn't mean we're moving off Kubernetes.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** It just means we're expanding. It means we will be learning from multiple places. And if you remember episode 35 about my lost packets, I'm a firm believer in having two of everything. \[laughs\] So why have a single CDN when you can have two? Or why have a single Kubernetes when you can have two? And we should definitely do that.

**Jerod Santo:** Well, let me give you the pragmatic answer to that, Gerhard, which - maybe our listeners are thinking, "I've thought it in the past", which is because you pay twice as much. That's why. If you have two, you're paying twice as much. That's one good reason not to have as many. Why not have two Teslas? Well, because then I have to buy two Teslas.

**Gerhard Lazu:** Right. So you're right, that is a pragmatic approach. But can you survive without those? \[laughter\]

**Jerod Santo:** Without two Teslas? No, I've got to have them both. If one of my Teslas breaks down--

**Gerhard Lazu:** Yeah. I mean, that's okay. I mean, for us, would we want to be down? I mean, what does it take? It just helps you appreciate more, right? It's tech. It's stuff which is a lot softer, right? Those servers are in the cloud. Sure, they cost money. How can we make it so efficient that they don't cost that much money, right?

\[48:01\] If you think about the traffic that we're serving, it is significant. It is not world-shattering, right? We don't even register on the Fastly's -- if we were to move off it, I don't think they would notice a drop in their global traffic... But it's a sane amount of traffic, and when Fastly goes down - it happens rarely, once every five years in our experience - we are not completely down, even though BBC is. That's okay... Our setup is-- \[laughter\]

**Adam Stacoviak:** "Even though BBC is..."

**Gerhard Lazu:** Well, that's what happened, right?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Yeah.

**Gerhard Lazu:** So New York times was down and a couple others... I mean, they run their infrastructure as they think is best. Same for us. And if we can be efficient and if we can optimize, then I think we should.

**Adam Stacoviak:** Honestly, we don't know what teams out there need though. So our exploration isn't to say, "Hey, follow us", it's "Hey, pay attention to what we're exploring and the things we're determining and learning from these explorations."

**Gerhard Lazu:** Right.

**Adam Stacoviak:** It's not, "Follow us." But also, we don't know what teams out there are facing. They may have ultra resilience problems. They need to have two CDNs, because they cannot stay in -- I think there was some sort of tweet out there recently like one minute of downtime for Amazon is just an enormous amount of money, and why they spend so much effort into basically not making that happen.

Now, obviously, Amazon's an extreme case, because they're the largest distributor of products worldwide probably, but not everybody has that problem. We don't know what teams out there have. So follow us in terms of learnings and exploration, not so much take our advice on having two CDNs. It may not be necessary for you.

**Jerod Santo:** Yeah, don't do everything that we do. Maybe you need zero, maybe you need four, and we only needed one or two. I appreciated hearing from the Grafana OnCall team. I just listened to your episode 36, Gerhard, where they talked about when DigitalOcean's Kubernetes engine went offline, and because they were set up for, I guess, it's multi-cloud - I guess that's what you call it, right? They were set up because their Kubernetes was set up correctly. They cut over to -- I don't know if it was Google's deal or some other platform within minutes, and they were rocking and rolling. So for them, that I was important. Now, for other people maybe it's like, yeah -- even from the start you asked me what was important, and I said, "Well, we can handle a half an hour of downtime. Our business isn't going to implode. But two days of downtime? We've got problems, right?" And so it just depends on everybody's circumstance.

So yes, a lot of the things that we do are exploratory, are to learn and to share, and they're not necessarily the wisest, most prudent, pragmatic choices, like let's pay twice for everything, right? Maybe that's not worth the trade-off in your guys' circumstances, but I think it's worth talking about that. That leads us into some listener feedback we've had. I'm not sure if we should just hop into that now, or do you want to take a break?

**Gerhard Lazu:** Let's go for it.

**Jerod Santo:** Because this is incredibly on-topic. So I'm going to leave this feedback anonymous, because we didn't get his permission, but he did come into our Ship It channel of the Changelog Slack. By the way, change.com/community. Join the Ship It channel over on Slack, hang out, ask questions... We would love to have you there.

And this listener says, " I don't know if this is the right place for feedback, but as a long-time Changelog listener, I was excited to see a DevOps-focused podcast. I've found some really interesting services via Ship It. But to be frank, the episode play long advertisements. Guests are often folks from a company that sells a DevOps-focused product, talking about how great their product is. And a lot are great", he says. "Incident and Honeycomb stand out. But what I really want is to hear from the people in the trenches, using the solutions. It's a lot more meaningful for me to hear about these services from someone who got value out of them, rather than the people making them."

I thought this was really solid feedback. We're always trying to Kaizen the show, not just our platform, but how can we continuously improve... And this is something that I've thought about as well, and that we've talked about. Gerhard, do you want to share some of your thoughts around that? First of all, I'd say that Grafana OnCall episode is a great example of that style show. They're using these things. There was the Grafana story in there as well, but it was an example of somebody who's like, "How do you deploy your system?", which I enjoyed. But speak to this particular piece of feedback, because it's something we're aware of and we want to make it as awesome as possible.

**Gerhard Lazu:** \[52:16\] Yeah. It's very difficult for me to not get excited, generally excited, about some of these products, because we use them. And we don't use them to advertise them. We use them because they are generally interesting. And again, we use them. We wouldn't be using them if they weren't good. And for every Incident and for every Honeycomb, there are many others that we don't even mention, that we tried out, but they didn't work for us for whatever reason. And there are so many niggles and so many -- maybe I won't say negative talking points, but they're just complicated. So we focus on the positive a lot more than the negative one. Even though I know that some of you would love that.

But what I would like to say is that I took the feedback on board, and when I had the pre-interview with the OnCall team, Matvey and Ildar, I told them, "Look, no selling of any kind. I'll try to be as little excited as possible about this thing, based on listening to the feedback." That was one thing.

The other thing -- and this goes hand in hand with how we schedule the episodes. So by the time we received this feedback, maybe we had like another three, four, maybe in the five episodes already recorded and scheduled to go out. So it took us a while to change things. It took me a while to change things.

So in response to that feedback, I was looking for teams that want to share how they use things. One example is this week's episode; I'll talk about the one from Open Sesame with Gunnar and Tom, where they talk about how they use AWS, and they're users. They're not selling any tech-related product. Now that I think of it, I think they are, but we've never mentioned it on the show. \[laughter\] So we've never mention it on the show. The idea is that we took this feedback on board and we're trying to cover more end-user stories. The one with Robin, Haunted Codebases and Complex Ops? That's a good one. Maybe the episode will not be called that. That's episode 39. But that's another one which is--

**Adam Stacoviak:** I like the working title. It's a good one.

**Gerhard Lazu:** Yeah. I mean, that's what he calls them, haunted codebases. So I think it's going to stick with that. But there's a few others like that coming up, which are more focused on the end-user stories. The problem with those is that some companies are not as forthcoming. They have different limitations, they can't say certain things, they don't know what they're allowed to say... It's a lot more difficult to schedule those interviews from the big names that you would recognize; while Honeycomb - it's easier to do an episode on that. But I took the feedback on board. Anything else to say?

**Adam Stacoviak:** I want to say a couple of things. I think it's too easy in our shoes to only look at the positive feedback to us. And I actually greatly welcome this negative feedback, or in the negative light feedback, because it helps us reframe what we're doing and have a greater perspective on what we're trying to do. Because without the positive and the negative, you just seem to gravitate toward these different directions.

Now, something you had said before, Jerod, about Gerhard and this perspective towards talking to the founders or the people who created these products, was that Gerhard kind of goes shopping for us. So in some ways, like you had just said, Gerhard, we're using the ones that are good. We're not sharing the negative stories. Maybe some people would like that, but we're just not trying to talk negatively about certain products or certain teams, because everything out there takes effort. Just because we gravitate towards Incident or different brands or whatever it might be, it's not so much our endorsement, but it kind of is, because we like them. So that's sort of an endorsement. I look at it just like you had said, Jerod, like this is Gerhard going shopping for our audience and saying, "This is things we've tried and things we've liked."

\[55:59\] And one other point I want to make too is that as an organization here at Changelog, we have a strict no pay to play. That means that people cannot pay to come on the podcast. The only advertisement you'll ever hear is explicitly in a sponsored spot. Now, we also work super-hard to make those sponsored spots amazing, informative, well done. We spend so much time with those teams to understand their problem set and how to best communicate it to our audience. And those are also by choice. They're opt-in. Just because we sell ads or sponsorships to the world at large doesn't mean we don't say no. We actually say no a lot. Just the same way that Gerhard says no to a tool or a platform he tries and then eventually errs, we also say no a lot behind the scenes.

So I would say, as a listener, when it comes to sponsored content, it is explicitly sponsored content. It's never full-length content. And then even more particular to that is that we choose the brands we want to work with, because we also believe in them. So if you hear an ad or a sponsor spot, take it one step further, because we've actually chosen to work with them instead of or in spite of other opportunities that we've just said no to.

So we hyper-focus on this. And this kind of feedback gives us a chance to share that hyper-focus. If it's not explicitly shared with you how hyper-focused we are on this, this line, let it be known here, because that's our goal. All of us sitting here care deeply about you as a listener. All of us here care deeply about Gerhard and his heart for the show. All of us here care deeply about your listenership of the show and your trust for this show, to not have that ever tainted. So trust us when we see say that we're here to share our best efforts and to always keep that line super, super-clear. When you hear an ad, it's an ad. When you hear a show, it's a show for the love.

**Gerhard Lazu:** And we will make mistakes, right? We're not perfect. And that's why we look for the improvements; how can we make it better. Now, if you know teams that would like to come on the show and talk about their stack, request an episode or drop me a line. It's that easy. Or coming to our channel. I mean, I have so many people that reach out to me and I say, "Sure, do you want to talk about it?" Very few follow through. And that's okay because we're all busy. It's been a crazy couple of years. I understand it. Everyone gets it, not a problem. But that is one way that we can genuinely make this better. People that want to come on the show, talk about their stack, talk about their experiences. It's not just me, right? It's about you, the listeners. It's about the guests that come on the show. So help us get great guests, and I would be more than happy to talk to them.

**Jerod Santo:** We would absolutely love that. There is a request form on the website. So you can just go to change.com/request, select Ship It in the dropdown, and we read those. They go right to Gerhard. We see them all and we consider all requests. I will say that this style of show where it's like, "Tell us about your operational setup", can be sometimes dry and brief, because not everybody has an interesting setup. In fact, if you had invited me on your show to talk about that, I would say, "Well, it's a Postgres database. We've got a Phoenix app in front, and we use Fastly as our CDN." And then you'd be like, "I hope I have some more questions..."

So not every setup is interesting, and that's fine. I like boring technology, but it doesn't always make for the most compelling conversations. So as you're thinking through people who would make good guests for that style of show that we're talking about here, think of people that have a -- maybe there's something interesting about their setup. Maybe they have a specific challenge in this industry that we don't have elsewhere. And so those make for more compelling conversations and stories. So keep that in mind. It's something that we consider, because we would love to do different format shows, especially the ones that are requested, but also, we want all of the conversations to have a compelling narrative, because otherwise we get bored and we move on.

**Gerhard Lazu:** And I think this also explains why it's so important for us to experiment with different things, do crazy things, do unconventional things that most companies wouldn't do or most teams wouldn't do. Of course, most companies don't need multi CDN. They need zero CDN. But if we didn't do that, how would our shows be? Would they be interesting? I mean, we have to try those things for real and run them in production to give a good informed, opinion of the failures of all the things that didn't work out, in a way that's it's also positive, rather than just picking on this provider or that provider. I don't think we would have many friends if we just basically went around and just crapped on everybody. That not our style.

**Jerod Santo:** \[01:00:38.04\] Hypercritical.

**Gerhard Lazu:** Like, "That's crap and that's crap..." No, no, that's definitely not us. I keep saying this. It is about the people, right? And we're trying to build these relationships, we're trying to tell these stories... So if you know someone interesting, do let us know.

**Break:** \[01:00:51.19\]

**Gerhard Lazu:** Are we in a good place to talk about new beginnings, the last new beginning?

**Jerod Santo:** I think we are. Let's bring it home, Gerhard. You have a new beginning of your own that is also related to Ship It, so let's hear about it.

**Gerhard Lazu:** Yeah. So I really like getting code into production... But production is real. Once something is out there, you get to figure out whether it works or it doesn't work. And how do you do that? Well, most people have a pipeline, have a Jenkins or have a GitHub Actions, or have a CircleCI, whatever they have, and you just configure it and it just works, and that's the end of it, I suppose. Then you have the flaky stuff, like tests which don't work, and you just keep clicking the button, pushing it through. How do you do rollbacks? You may have to call your DevOps expert to do those. That is a joke, by the way, even though I'm not laughing too hard, but that is a joke, about rollbacks in general... \[laughter\]

**Jerod Santo:** \[01:04:15.02\] Yes.

**Gerhard Lazu:** So the point being is that I really care about shipping it. So my commitment for shipping it is four weeks ago, five weeks ago, I joined a new team called Dagger for the people, not for the tech. It's who the people are and how I interact with them and how they work as a unit. So you may have heard this name, and you will have heard about episode 23 where I talked about Dagger... That was the beginning of something really interesting, and we grew it into something amazing. And I was really excited to be joining this group of people that really genuinely want to make CI/CD better, and don't think a better GitHub Actions or a better CircleCI or a drone or BuildKit-- sorry, BuildKite. The list goes on. Or better Jenkins.

How can we make our CI/CD systems have the same evolution as containers brought for applications? And there was Docker. When Docker came along, everything changed. So think Docker for CI/CD, which by the way, works for every single CI system that you have today. If it's CircleCI, you don't have to move. If it's GitHub Actions, that's great. Whatever you have today it will work, but it will be better. And this is not like a dream or like an idea that maybe it will work. It was part of Shipmas. We tried it. Our pipeline is twice as quick. We migrated - and I say migrated; we're still running on CircleCI. So we're running two pipelines in parallel, because why not?

**Jerod Santo:** Why not? \[laughs\]

**Gerhard Lazu:** Exactly, right? You want to see which one's better. And we've been doing this for about a month, almost two months now. And we can consistently see that Dagger running in GitHub Actions is twice as fast as CircleCI, our previous config. We don't have to write YAML. It runs locally. It has so many advantages, and it's all out there. We've been doing this for months. You can check it out, pull request 395, you can listen to episode 33... And I'm looking forward to sharing more of this with you, because it's a great idea that works well in practice, as well as, I think it can help you with your CI/CD. So I'm committed to shipping it, including shipping your stuff into production, not just ours.

**Adam Stacoviak:** As someone who talked to Solomon Hykes, speaking of Docker, way back before Docker was really the Docker it is today; this was back when I think Document Cloud was still there. I think that was their original company.

**Gerhard Lazu:** Yeah, the dotCloud.

**Adam Stacoviak:** dotCloud, sorry.

**Jerod Santo:** App.net. Remember App.net?

**Adam Stacoviak:** Yeah. This is just forever ago. Jerod, I think that show was even done with me and Andrew. Was that me and you on that show with Solomon Hykes? I think it was me and Andrew Thorpe.

**Jerod Santo:** I have no idea.

**Adam Stacoviak:** That's how long ago it was, which is basically forever ago. So to see Solomon in pulll request 395, committing code to our open source repository was just -- I think there was an internal giddiness to me when I was seeing these pull requests come in, and over Christmas break too, so I was trying desperately to keep... I committed to not thinking about work for two weeks, as best I could. And so here's these pull requests coming in over the holiday break and whatnot, and I'm just like, "That's so cool."

So seeing that work out for you too, and knowing your heart for this passion of shipping applications in efficient ways and teams growing and all this good stuff - that makes me super happy for you to be involved with Dagger, knowing that Solomon Hykes is a part of it. Founder, right? One of the co-founders, seeing him come back around... Because I know there was a lot of drama and controversy over the years around Docker and all the things... But Docker changed everything.

I run Docker at home. My Plex server is run via Docker. My Pi-hole is via Docker on Raspberry Pi's, which is super awesome. It's just super cool. It's such a cool technology. But then to see Solomon come back with another big idea to say, "Okay, here's what we did with containers in app deployment. Here's what we can do with a container idea." As you said, a comparison, not so much the exact thing in CI; it's cool, because you can pick your deployment pipeline that you want. You don't have to choose a brand new platform. It's not a platform killer, it's a platform better-maker. I don't know how you would describe that. It makes the platforms better that they're already on.

**Gerhard Lazu:** \[01:08:31.15\] Yeah. I do have to say, I never dreamt of working with Solomon. And working with him, it's just something else. Pairing with him, working with him - seriously, it's a whole new kind of experience.

**Adam Stacoviak:** Is that right?

**Gerhard Lazu:** Oh, yes.

**Adam Stacoviak:** He's a cool man.

**Gerhard Lazu:** He's just so intense, in the best possible way. I thought I was fast. He's maybe 100 times faster than me. I mean, his mind is just crazy.

**Adam Stacoviak:** Oh, man.

**Gerhard Lazu:** Just experiencing that is just so amazing, just so energizing. But I also want to say the rest of the team are equally impressive, in different ways. So I genuinely joined them, not just because of the problem space, which is very close to my heart, but generally, it is because of the people. All the conversations which we had, how we interacted... Just things clicked. And Changelog is one of the example applications in production that are part of the Dagger universe. So there's always a bigger story.

So how do we deploy Phoenix, Elixir applications with this new tool called Dagger? What does that look like? Can we agree on, as a community, Phoenix, Erlang, Elixir, how to deploy applications, how to package them? So you start having these building blocks that you can start composing. And if you have a Node application, you want to push it to Vercel, or if you want to go to Netlify or anywhere else, you have a WordPress app, what does that look like?

So if we have these building blocks, these packages, as we call them -- and by the way, there's no more YAML. I'm so happy about this. It cannot be underestimated how important it is to not be writing YAML, but have a language that is automatically formatting, it's typed, it will tell you when you make an error, CUE, it's just amazing. And we had a show, on Go Time, and I think there was another one about CUE, it's an amazing technology. BuildKit itself -- you think Docker, but I hear BuildKit, and that is amazing. I know that some people don't like Docker, because of the pricing changes, the licensing, whatever things happened... But BuildKit is amazing, and the technology behind, it's changed the world.

So you take the people, you take the tech, you take the potential and where it's going, and it's all based on a story that we started six years ago... Even actually longer, because I had this thing called Deliver. You remember, Jerod?

**Jerod Santo:** Mm-hm.

**Gerhard Lazu:** eDeliver. That's how we started.

**Adam Stacoviak:** Way back. Yeah.

**Gerhard Lazu:** So it's actually 10 years in the making and it's like the loop is closing. So you can't make this stuff up. It's literally the signs were there all along, and connecting the dots backwards, everything makes sense. That's what makes me excited about this.

**Jerod Santo:** That's cool, man. Congrats.

**Gerhard Lazu:** I'm really curious to put this out in the world for others to see and tell us why it doesn't work, why maybe we should use Nix. And we just had that conversation with Vincent recently, right? It all comes together. So yeah. Can you tell that I'm really passionate about this stuff? I'm not sure. Did I convey it enough? \[laughs\]

**Adam Stacoviak:** Well, those exact words even were spoken by Steve Jobs in your unexpected episode \#22, "It's crazy and impossible", where Steve said, "You can't connect the dots forward, you have to connect them backwards." I'm paraphrasing what he had said, but that rings back to even that.

And that's so cool, to see Deliver, and then the connection to us and how that happened, and then all this come to full fruition. And I think that's what really is for us. I'm always happy on a podcast; like we say, we came for the tech, but we stay for the humans, because that's such our DNA. We can talk about these different things and be excited and whatever, but truly it is about the humans. And that makes me so happy for you, to just see your career path and your passion path really come full circle. And working with Solomon is probably pretty cool. I mean, I've been a fan for many years, and the rest of the team, of course. But how cool is that, really? So cool. I'm happy for you.

**Gerhard Lazu:** \[01:12:12.21\] Thank you. We are all part of this together. I'm seeing the journey together, separate. There's obviously different journeys, but I'm seeing this in the making. I'm just basically seeing all the signs, and I get so excited about that, because I realize it may look like a coincidence. Actually, it's a series of coincidences, but it's very clear to me which way we are headed. And even if nothing comes out of it, the fact that we were together, the fact that we tried, improved, and maybe things worked out in a different way, that's okay. We still had that experience, and that is worth remembering and worth cherishing.

**Adam Stacoviak:** Well, audience, tune back in to 10 episodes later. This is episode 40 of Ship It. So every 10 episodes, we come back, we huddle up together, myself, Jerod, and Gerhard, and we talk about Kaizen, this concept of continuously improving. And we take feedback, obviously negative sometimes, or in a negative light, and we do that. And so to the person who shared that, we said it anonymously, but thank you for sharing that. We want our audience to push back on us and challenge us to be committed to the truth we say that we are, because that's how we keep our north star. So thank you for that.

But this is episode 40, Kaizen. We come back every 10 episodes, so we'll see you back here now that you're a listener or a long-time listener. If your new, subscribe; go to changelog.com/shipit. Subscribe anywhere you get your podcasts. We'll come back every week. At least Gerhard will. We'll come back every 10 episodes. What do you think, Jerod? Does that sound good to you?

**Jerod Santo:** Sounds great.

**Adam Stacoviak:** Episode 50? Episode 50?

**Gerhard Lazu:** That sounds great to me, but I have one last thing. The person that registered ship.it, please reach out to us, because we would like the domain. \[laughter\]

**Adam Stacoviak:** Or shipit.fm.

**Gerhard Lazu:** Yes.

**Jerod Santo:** Either of those two.

**Adam Stacoviak:** Gosh, we have waited to do a vanity URL. So normally we'll do like founderstalk.fm, or changelog.fm, or practicalai.fm, or jsparty -- I'm just naming all of our shows, by the way.

**Jerod Santo:** Yes, .fm

**Adam Stacoviak:** But we don't have it for Ship It yet, because we really wanted shipit.fm. And then I guess ship.it would be just as cool. We don't want to settle for shipitshow.fm, or some flavor like that. It wouldn't be bad. It doesn't roll off the tongue as well. We love the name of the show.fm as best as possible. So if you know somebody who knows somebody who knows somebody, a friend of a friend, ship.it would be okay. My preference would be shipit.fm.

**Gerhard Lazu:** And then you can get show previews and a lot of cool things.

**Jerod Santo:** All the cool things get unlocked.

**Adam Stacoviak:** Yeah, all the things.

**Gerhard Lazu:** Let's improve this one together. Yeah. Let's Kaizen this one together. I would really like that.

**Adam Stacoviak:** That's right.

**Gerhard Lazu:** Alright. Well, as always, it's been a pleasure. I'm really looking forward to the next one, see what other crazy things we do and what sticks... And let's follow up on the S3 and let's see how we can keep the bill down, keep it sane.

**Adam Stacoviak:** Get that bill low.

**Gerhard Lazu:** We're going to share some links, share some screenshots in the show notes... But otherwise, see you in 10 episodes for our next Kaizen.

**Jerod Santo:** Kaizen.

**Adam Stacoviak:** Later.

**Gerhard Lazu:** Laters!
