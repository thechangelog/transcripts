**Adam Stacoviak:** Alright, we've got a fun thing happening here - a new show, JS Party...

**Jerod Santo:** Party time...

**Adam Stacoviak:** It's a party every day. It's a party every Friday.

**Jerod Santo:** It's gonna be a party every Friday.

**Mikeal Rogers:** But Javascript...

**Adam Stacoviak:** You're hearing Jerod Santo (managing editor) and Mikeal Rogers, host of RFC, and now JS Party.

**Mikeal Rogers:** Welcome.

**Jerod Santo:** We are.

**Adam Stacoviak:** Launching a new show, it's cool to have a few in the feed already, so if you've just come to this brand new, you may have listened to it live... We may be several months down the road and you're coming back and you're listening to episode one for the first time, and you wanna know who's behind this, so we thought it'd be kind of cool to rewind a little bit, and Jerod and I can sit down and talk with the hosts behind this. We'll have a conversation with Mikeal Rogers, we'll have a conversation with Alex Sexton, we'll have a conversation with Rachel White, and kind of get to know their back stories, their ideas, plans and fun things for this podcast.
Mikeal, maybe the easiest way is to help people understand who you are, maybe your credential. People that come to this show, what should they know about you?

**Mikeal Rogers:** Sure, yeah. Well, I won't get into the whole thing because that'd take too long, but I guess I'll just get into my history of the web. I didn't really start writing a lot of Javascript and working with web stuff until I worked at Mozilla and started working on the platform. So in this really weird way - but honestly, this is kind of how my whole career has gone - I learned it from the bottom up, rather than from the front. So I didn't start writing websites and then slowly worked my way down the stack... I actually started by tearing apart the web platform and figuring out how to do automated testing of the Back and the Forward button, and digging into the guts of the Mozilla platform. That was how I came to Javascript and to the web platform. I really kind of fell in love with it, and then was pretty primed to be really into Node.js when Node.js came out as well.

One, because I have a networking background, so I really loved the non-blocking aspects of it; I loved how close I felt to the network layer with it, but also it was just so nice to be working with Javascript in the web platform and on the backend.

This was like the first week of Node being released, that I got really into it. I literally told people at Mozilla that I was working for and writing predominantly Python and Javascript that I was no longer going to write Python anymore.

**Adam Stacoviak:** You were that bullish on it, huh?

**Mikeal Rogers:** Oh, yeah... I mean, first of all, I had spent maybe four years working on a project called Windmill, which was very similar to Selenium, except we had figured out how to do a lot of cross-domain stuff before they did, and rather than being in a privileged environment, I wrote this really insane HTTP proxy that basically rewrote everything to look like it was all coming from the same domain even when you were bouncing around different domains, so you wouldn't violate the security policy. And to get the tests going faster, I had been optimizing this HTTP proxy for about four years.

I was doing everything that you could do to make something fast in Python, and to make it killable when you hit Ctrl+C, as well. I had alternative versions of most of the standard library, I was digging into the guts of how you do iterative responses - what we now call streams, but what then was kind of like a generator type thing in Python. I was really doing everything you could possibly do at both the Python level and also at the HTTP protocol level. I was parallelizing a lot more of the requests than you would normally do... I had a lot in there to make that fast.

**Jerod Santo:** So were you using Python Twisted in the evented tools, so that \[unintelligible 00:03:52.21\]

**Mikeal Rogers:** \[00:03:58.17\] So I had used Twisted. I worked for the Open Source Applications Foundation on a project called Chandler, and that was using Twisted... And there was an early version of Windmill where I tried to use Twisted, but in that environment it wasn't that big of a wind, compared to just using WSJI with a generator and getting iterative responses that way. There wasn't quite enough parallelization going on with one test browser to really justify all the overhead of Twisted. So it didn't make it much faster, but you did need to iteratively return the responses, so that things would start rendering right when you got data. I was familiar with that.

In the Mozilla stuff that I was using, I was also using Asyncore, which is another non-blocking library -- not as bulky as Twisted, but also much buggier than Twisted, and it comes with the standard library, so you know it's terrible. \[laughter\] So I had done all the things that you could do to make Python programs fast.

**Adam Stacoviak:** Wow.

**Mikeal Rogers:** So when Node first came out, the weekend right after Jan Lehnardt said, "Has anybody written an HTTP proxy in this thing?" and I was like... That Node thing looked cool; I wanted to learn it, it's the weekend - why don't I write an HTTP proxy? I know how to do that. This was when Node still had this awful promisy thing that didn't look anything like Promises today; it was really bad. It didn't really have streams/streamed data yet, but all of the interfaces had different APIs, so you couldn't just plug them together, you couldn't pipe, there was no Pump -- I actually wrote Pump later... Which was the precursor to stream.pipe. It was not that great, but it was still less than 80 lines of code...

So I got this proxy up. When I ran it, I was really kind of blow away. First of all, when I hit Ctrl+C, it would just die every time. You have no idea...

**Jerod Santo:** Little things...

**Mikeal Rogers:** After writing Python for like five years every day, writing a program and hitting Ctrl+C and having it consistently end - I can't describe to you how great it feels, how warm in your tummy you get when that happens. So that was one thing... And two, it was faster than that Python proxy that I had written. I knew all the things that I could do to this to continue optimizing at the protocol level, but it was already just way faster.

So at that point, for the things that I was using Python for, it was just so clear that this was a better way to do that, and that this had a lot more longevity. I mean, this is just starting our and it's already better. If I can get involved right now, I can make sure that it stays better.

Also, when I first got involved in the community and started with Ryan and all these early people, a lot of my frustrations with the Python community -- and I think that this was probably the same among a bunch of communities... But all of these languages that had hit a lot of growth and traction and gotten a lot of new developers, when Moore's Law was in really obvious effect, when the processor speed was doubling every year - we weren't going multi-core yet, we weren't cutting things up in the Docker images yet... Why would you sit down and optimize something and make it efficient when you're gonna squeeze out 25% and computers are gonna get twice as fast in a year?

So there wasn't a very strong focus on being very good at parallelization, actually parallelizing I/O tasks... So not thinking about threads, and stuff like that. Anyway... I really felt like the Python core community wasn't listening to what people actually needed to do with it, and when I started to get involved in Node, there was a huge focus on "What are people doing with it? What do we need to do to enable this big community? How do we keep the core really small and enable a ton of innovation on top of it so that we don't have to hold anybody back?"

\[00:08:01.22\] Everybody had their head on straight in the early days, and I felt like it was a very good opportunity for me... At that point I'd been working in open source nonprofits for four years straight. I was one of the first people to try and get people using GitHub inside of Mozilla, I had a lot of thoughts about building community, about how to grow and gain a lot of traction in the ecosystem, and it was a really good place to do that work - it's a brand new language, with a BDFL that really does not want to maintain a giant standard library, so he's more than willing to create a great ecosystem instead... It was a good place to be.

**Jerod Santo:** Yeah... Coming from a scenario where you're a user of Python, which is an established, large language with a huge ecosystem around it and where you probably wouldn't have as much of a voice, here is Node - a brand new scenario where your voice can be heard and your desires could be expressed...

**Adam Stacoviak:** And you can have some impact.

**Mikeal Rogers:** Yeah. I mean, it was true then and it's still true now that it is so much easier to make change - especially a huge change in something new, than steering an old ship in a new direction. Reforming projects is considerably harder than starting new ones. Even the reforms that have been made to the Node.js project that I've been involved in, getting into the foundation and all of that, a big part of that and one of the reasons why that was actually easier was that we'd literally forked it and we had a lot of greenfield opportunities to really shift things into another direction and prove that they worked before we merged all of that back into the project.

**Jerod Santo:** Yeah. So as we fast forward, speaking of the fork... io.js (the fork) was actually where we met you, or at least -- I don't know, Adam, if you knew Mikeal beforehand, but that's when I met you... We interviewed you on the Changelog about io.js and the forking at that time. Then we got you back on to talk about the merging and the surprise where the community actually made it through and it was stronger for it... Take us where you are now in terms of your relationship with Node as a project and what you're doing in your day-to-day life and your work.

**Mikeal Rogers:** Yeah, so I was one of many people leading the io.js effort in the fork; I lead an effort to get everything merged into the foundation as well. Because of my work doing that, the Linux Foundation really wanted somebody to take the reins and lead the foundation in the early days, with a focus on making sure that the merge completed and that everything remained stable. There's a lot of people with really strong opinions, all coming together and trying to work together... They really wanted to make sure that everything went smoothly, so I was hired to lead the Foundation and to make sure that all that stuff went well.

It did go really well, and I'm still with the Node.js Foundation. From the time that we merged, the core communities I think probably quadrupled in size. There's so many more contributors, so we've had to continue to scale how that community works, and I've been involved in that, as well. But it's certainly not in danger of falling apart of collapsing, the way that people may have been concerned in earlier days. My role is much more administrative now.

**Adam Stacoviak:** It's a lot of work too that you put in. I remember when we first met you around the io.js timeframe, and the side chats... We had a couple emails, we talked to Scott Hammond from Joyent, I got some advice from you on how to best navigate that conversation... And I just remember thinking how busy you were; I think you were at DigitalOcean at the time and you were transitioning to different roles, and I was just thinking, "You do this for the community in your spare time." I couldn't believe just how much work that people like you would put out into these communities, outside of your day-to-day "I've gotta ship something". I was just astounded by it.

**Mikeal Rogers:** \[00:12:15.01\] Yeah, that was a really crazy time. I think one of the reasons why I was working so hard was that there weren't a lot of people that had history in the community that everyone that needed to be involved in the conversation would still speak to. A lot of what you didn't see at the surface was that it took a long time for things to get into the kind of bad state that they were in, and it wasn't just, "Hey, everybody is mad at Joyent..." A lot of people started to also get upset with themselves. Once there's conflict at all around something, everybody will start to conflict with each other.

I had stayed out of daily core development as of 2012 - I think that was the last time that I put code id - and focused a lot more on the ecosystem. But because I had been there early, I had a lot of relationships with all those people, because I continued to do community conferences and a lot of general community work. People mostly like me, I think - or at least would still speak to me - so I felt like I was one of the only people in the position to bring everybody to the table and get everybody on the same page.

**Adam Stacoviak:** There's a lot of work... I remember seeing all the issues on the iojs.org and the Technical Steering Committee conversations, documents being created on how the government should be formed, and obviously that made you fast forward to six months ago when we started Request For Commits - it made you a great co-host with Nadia Eghbal. That show, and just a lot of rich history... I think it's even been said - in the recent behind-the-scenes of the ending of the first season of Request For Commits... Where it was like your stories from the battlefield. You come from a "been there, done that", "been in the war, came out, slightly scathed", a happy growing loving community...

Now we're here at this point where we can actually talk about celebrating the direction we're going. You've been through all these bad times and now it's like, "Here's some good times. Let's celebrate them." Jerod and I had this desire to do a show around Javascript for a while... We had kind of resisted this camp-based type show where we've always had The Changelog, and we went into GoTime for the Golang community... We felt like that was our next great step, but we just didn't know when or how best to navigate that, so when you said one day in Slack, "Hey, y'all should do this", and we were like, "Hey, we should do this." That was like 6-8 months ago, and that sort of pushed us over the edge, and now we're here, at this point... People may be listening to this months down the road from now, loving JS Party.

We've got some awesome music, a fun theme where it's a party every single week, we're celebrating this great community... It's not just simply Javascript, it's the entire web platform, which is why we asked you some stories about your back-story. But let's talk about this show today, let's talk about where we're going with it. What do you love about the idea of JS Party?

**Mikeal Rogers:** I'm really interested in chronicling the web platform expanding beyond the browser into IoT, into mobile, into now desktop applications... It's crazy. So not just extending what the web can do, but also how we use it. Obviously, Node has been a critical component in enabling that to happen, but it's an enabler, it's not the story. If you're gonna talk about IoT, Node is a part of that; Node enables Javascript to be on IoT, but without Johnny-Five I don't think that anybody would be using it, right? \[laughs\]

\[00:16:03.00\] There's even more to that story, as well... Johnny-Five wouldn't have been written without Serialport from Chris Williams who started JSConf, and I don't think we would have a community if it weren't for JSConf, so... There's a lot going on there, and I think a lot of it is somewhat untold, and as it continues to expand, I'd really wanna dig deep into that story. It took us a while to really figure out what hosts would be good for this...

**Adam Stacoviak:** Or even format - what was the best way to roll it out... Jerod, I gotta hand it to you, man; the original name for this was a bit pretentious - JS Matters. We wanted it to be a play on words, like Javascript matters - like it does matter, but then also talk about Javascript matters of substance... That was one thing, but you're always this -- I don't know how to describe it, but one day you're like, "JS Party", and as soon as we both heard it (Mikeal and I), I know for sure it was like, "Yeah, that's it." \[laughter\]

It needed to be something that was playful. We didn't want to come to the table with this -- sure, it's a serious podcast, but we wanted to come with this whimsical attitude to some degree where it's like, "Come and have fun. Let's just not sit down and argue about things." And Mikeal's perspective of like, "We should have differing opinions. We should have people who come on the show and we should have panelists who oppose one another - in respectful ways, but can speak - and not just simply agree with one another to move the conversation forward." I think that was a good perspective.

**Mikeal Rogers:** Yeah, I think you can only do that with a panel, right? Because you get into a rhythm where certain people will play devil's advocate, or at least try to advocate what the opposition to your opinion is saying, even if they don't believe it, and you really only get that rapport if you have a consistent panel. If you're just interviewing people, you really don't wanna take a hostile tone with your interviewee.

**Adam Stacoviak:** Well, there's a lot of interview shows out there, too... The Changelog, Request For Commits - even though they're highly conversational, they're very much interview style shows where it's two hosts and a guest. This is a bit different - you mentioned panels. Alex Sexton is one of the panelists, Rachel White... We've got a couple backups; we haven't exactly firmed up, but the panelist as we know it now is you, Mikeal Rogers, Alex Sexton and Rachel White - all coming from different perspectives, different paths, too...

When we sit down and talk to Alex Sexton and Rachel White about their story, like we did with you today, we're gonna hear a very different perspective, how they came to where they're at, and then obviously be a part of the show.

**Mikeal Rogers:** Yeah, I mean... Alex Sexton loves to disagree with me. He was one of the first people that I ever thought of.

**Adam Stacoviak:** He's like, "Yes, can I do that on a podcast, so everyone hears it?" \[laughter\] Sweet.

**Mikeal Rogers:** Even if he agrees 99%, the first thing he'll say is this 1% where he's like, "Yeah, you're full of shit about this...!" \[laughs\]

**Adam Stacoviak:** It was kind of funny, because in the pilot -- we've gotta air this at some point, since I'm mentioning it... I remember in the pilot that we had done - and this is even like three months back... We've been trying to iterate on this idea to some degree for a while now, but even in the pilot, the very first ten minutes, or ten seconds, I think -- not ten minutes, ten seconds... He's already on you, in that degree. So I can see that you've got that rapport with him.

**Mikeal Rogers:** Yeah, he's great with that. He was the first person that I thought of for that. Also, he has a very different perspective than I do. He came in it much more from the frontend world, from building websites and then getting involved in the web platform. And then he has a lot of context around the other web platform work that I really haven't been all that involved in. But then, when I thought about having the two of us on there... It's like, we're roughly the same age, we've been speaking about the same amount of time... That didn't feel like rounded enough for me at all, so I immediately started thinking of like "Who are some of the newer voices with really, really different perspectives than we have, that we could bring on?" and that was how I thought of Rachel, who's amazing.

\[00:20:09.14\] She's relatively new to the whole scene, but is at the top of most of our speaking lists for different conferences and stuff like that. She's just been amazing. And she comes from this IoT community that I think me and Alex know about, but aren't involved enough in to really know what's going on. We know enough to know that there's a ton of stuff going on there that we have no idea what's going on with that.

**Adam Stacoviak:** Yeah. Well, I didn't know Rachel until you introduced me to her, and my new question for her every time I see her now is, "What have you built lately? What's the latest robot you've built?" And she's always got something funny, and every single time it's got something to do with cats... That's Rachel. She's awesome.

**Mikeal Rogers:** Yeah... She's also super funny. Alex and her are both actually really funny, so that's great, because I'm not super funny; that will really balance things out and make it a fun show. If you're gonna call it JS Party, you need some funnier people on.

The first time I met Rachel... I think it was actually the first time that she spoke at a (I guess you can call it) a tech conference, but barely... I was doing this thing for a while called JS Fest - it was a week of smaller, half-day events, and because you can have an organizer just pick talks and not have to deal with the venue and all the other logistics, you can start to really experiment with different formats. So one thing that I started to put together before this one that we did in Oakland was this DHTML conference, where we had literally funny talks that were sometimes somewhat fake; we were sometimes pretending that we were in the past... Really self-referential humor type stuff. And I decided to have Jen Schiffer start curating it, because she's just brilliant, and kind of lives in the satirical world a little bit with her work \[unintelligible 00:22:04.09\] and stuff like that. So she found Rachel to give a talk called, "I'm kind of famous on the internet", that was just brilliant. \[laughs\]

**Adam Stacoviak:** That's a good title from her, I'm sure. That's her humor, too... She's got such a fun attitude. She's so much fun to be around, she's so much fun to talk to, and when I got to know her better, I totally understood why you thought she'd be a great panelist for this show.

**Mikeal Rogers:** Yeah, it's gonna be a fun show. It's gonna be really good.

**Jerod Santo:** One thing that we're trying to do with this show - we've mentioned it's live. We have a set schedule, Friday afternoons - depending on where you are in the world; if you're U.S.-centric, you're either around lunch time or you're winding up your day, and we can all get together and celebrate Javascript and the web, and the things that people are doing in the greater JS community. So that's why we wanna have all these different perspectives, we wanna be as inclusive as possible; everybody can come, share their opinions... There'll be a live chat room, so that will be a really fun way of interacting with the hosts, and I'm sure Mikeal, as you guys get to become more familiar with it, you'll get better or worse at responding to people as the thing goes on... So it's going to be lots of fun.

But in light of our desire not to just be Node-specific, not to be just hardcore "people talking about V8" or just talking about frontend, new APIs that are in the browser... We wanna make something for all of us - frontenders, CSS design people, Javascript hardcore programmers... If you touch the web platform and JS is in any part of your life, this show is for you. At least time will tell; that is our goal, whether or not we achieve that. So in light of those desires and what we're trying to pull off in terms of a celebration every week where we can all come together and talk, what are some of the things people can expect in terms of topics, conversations that we'll be having...? What do you expect -- of course, I'm asking you to prognosticate, because it will probably change as we go... We are iterating, and it'll probably be different by the time this ships than it is right now, but what do you expect in terms of topics that people can come and listen about?

**Mikeal Rogers:** \[00:24:20.01\] So because we're doing it every week and we're trying to be really consistent, I think that we will pick up things that are topical. If some big web news thing goes out, or some new library ships that everybody's talking about - that will end up being a subject, for sure. We will follow that, and that will be kind of fun.

I don't know about you, but whenever I see people talking about an announcement like that that goes out and I know a lot about it, everybody misses all of the context and all the subtlety, and there's a couple podcasts in the political space and in the economic space that do a really good job of deconstructing that and really coming back to like, "What does this really mean, with some of the background that's going on here?" So I hope that we can actually do that as well with some of these news items. I think that we have enough people and context to really suss that out.

I think I also want to try - and this is a really difficult thing to do - to unwind a lot of stuff that's going on in the web and explain it from the ground up. We start to throw around jargon and words for entire sets of specifications or work that's going on like everybody knows what we're talking about, and at the end of the day most people actually don't know what that means. Even progressive web apps...

**Jerod Santo:** I still don't know what that means... \[laughter\] I'm pretty sure I've built a couple of them, but I don't know what that means.

**Mikeal Rogers:** Right, and you'll see people -- Nolan Lawson does this sometimes... [Mariko](https://kosamari.com/) does an amazing job of this. She's a programmer in New York. She will take a word or a subject that people throw around a lot that she has noticed other newer people are kind of afraid to ask what that means, and she'll dig into the entire history of it and explain it from the ground up for people that don't know what's going on, and that turns out to be pretty much everybody.

When Nolan Lawson wrote that piece on progressive web apps, I think that everybody went, "Oh, god... Finally, I can stop pretending like I know what this means...", like there's actually this explainer now. So I really want us to try to do that, as well. When we bring up a news item about some topic in some area, we actually unwind it enough to go like, "Well, let's back up... How did this start? What does this actually mean?"

**Jerod Santo:** You can teach all of us how WebRTC works.

**Mikeal Rogers:** I don't know if you can explain that in a podcast... \[laughter\] It's one of the more overly complicated parts of the web.

**Adam Stacoviak:** Visuals required?

**Mikeal Rogers:** Maybe, I don't know. I think we could probably get into some of that; I think that I can explain part of that. I think that you just have to talk about the data part and the media part separately, that's the difficult bit.

**Jerod Santo:** Well, don't start teaching us now, or we'll never get out of here. \[laughter\]

**Mikeal Rogers:** Alright.

**Adam Stacoviak:** So who should listen to this show? If someone's listening to this right now, what kind of thing are they doing, what role will they play? I know you mentioned the web platform, but that's one of those jargons you mentioned that you may assume "I'm part of that" or "I'm not part of that." Is is simply, "I build websites, so I listen to this podcast?" Who is the best fit for the kind of thing we're doing here?"

**Mikeal Rogers:** I think that if you work on the web, if you use web technologies to build anything, whether it's CSS or Javascript, if you work on IoT, on serverless, on any of that - we're gonna get into all of those subjects. If we aren't doing enough job of unwinding these topics so that everybody is on the same page, give us that feedback and we will continue to work to do a better a job to unwind that enough so that everybody can understand it.

\[00:28:09.01\] Because especially with the breadth of the topics that we're talking about, even if you really understood one thing that we went and talked about, you wouldn't understand the next. You're not gonna have the deep, low-level network knowledge and the CSS knowledge, right?

If we're not doing a good enough job of explaining it, just let us know and we will continue to get better at that and continue to actively unwind this stuff, so that everybody working on the web can really learn more about this, understand more of this. And as all of these new news items and framework etc. come out, I really hope that we can share more of what the "insiders" know about this with the general public. Having been in this for so long, you really forget how much insider knowledge there is around all of this, that is required for your context if you're gonna be involved.

**Adam Stacoviak:** Jerod mentioned earlier about a live chat room - that chat room is actually Slack, and we're piggybacking off of some new things we're changing about the Changelog community. We used to charge for accessing the Changelog community... It felt so weird... Jerod, I don't know about you, but when I was at All Things Open and I was sharing some news stuff that we had done - this was October when we rebranded the new site, and all that good stuff; I was trying to get people to desire to be a part of our community and be involved, and every time I was telling people that it was $20/year it just felt weird. Like, "Sure, join the community, but you gotta pay."

Well, now it's free, we're opening it wide up. You get access to our Slack community, and part of that Slack community is the JS Party Channel; live every Friday we'll do this show. To get access to Slack while you're listening live, head to changelog.com/community. Back to what you said, Mikeal, about iteration - I think it's gonna be hard not to iterate this thing to where the community desires it to go, because they're gonna be directly involved if they choose to be.

That channel, I'm sure, will be pretty active; I'm sure we'll have lots of feedback readily available every single week about what we're doing, what talks we're talking about, and I'm sure that we'll do things around opening it up so that the community can actually participate in topic suggestion, and things like that. We very much want this to be, in my opinion, something that's for the community. If it doesn't serve that, then we're missing the mark on what we're trying to do here... Because you can't celebrate unless you've got some people with you.

**Mikeal Rogers:** I agree.

**Adam Stacoviak:** Or at least -- last time I've been to a party, it wasn't just me. \[laughter\] But to reiterate - live every Friday, if you're on the Pacific Coast; West Coast - noon; if you're on Eastern, it's 3 PM. It will be live at changelog.com/live. We're on Twitter... Our Twitter looks jacked up right now, so if you go there right this very second - literally, this second, as we're recording this - it's jacked up. It's @JSPartyFM on Twitter. We also will be at changelog.com/party. You can subscribe in iTunes, any other thing you can think of... RSS, you can listen online, you can listen live, which is what we encourage people to do, because that's where the fun is at.

We've got some awesome music from Breakmaster Cylinder; we've worked so hard with Breakmaster to get this music to be true, true party. Any feedback y'all wanna share about your thoughts on this music?

**Mikeal Rogers:** Can we listen to it right now?

**Adam Stacoviak:** Oh, yeah.

**Mikeal Rogers:** Yes, okay. So play it, and then we'll give it some feedback.

**Adam Stacoviak:** Give me a second, let me set this up. Alright, here we go.

\[00:31:52.27\] \[music playing\]

**Jerod Santo:** I'm bouncing already.

**Mikeal Rogers:** I know!

**Jerod Santo:** It gets funky, too. \[laughter\]

\[music ends\]

**Mikeal Rogers:** Oh, wow... That's awesome! I'm so pumped! I'm actually disappointed that now I don't get to do an episode of JS Party.

**Jerod Santo:** I know, right? Like, I'm ready to party right now!

**Mikeal Rogers:** It's getting me in the mood.

**Adam Stacoviak:** Yes. Well, the cool thing is we're actually setting up a soundboard, so when we have this show going on, we can actually play that music live for everyone. One thing we talked about doing, which is unplanned for this "meet Mikeal" conversation was taking questions from the community, especially if they're audio versions, and actually having them on the show. That soundboard might actually help us take some audio-submitted questions and actually play that audio live for everyone, and then include it obviously in the produced show that goes on the podcast feed.

**Mikeal Rogers:** That's awesome.

**Adam Stacoviak:** We played the full track for you - it's a minute and forty-five seconds long. I hope you love it, we've put a lot of work into this. The album art was meant to show you that this is truly a party. A disco ball... You can't not party without a disco ball, okay? You have to have a disco ball, or it's not a party... Or a party worth being at.

Alright... Mikeal, anything else you wanna share with the listeners who are either brand new to this show as we're launching it, or coming to this first episode months down the road, catching up?

**Mikeal Rogers:** \[00:34:52.26\] Good question. No, I can't think of anything, actually... Welcome to the party!

**Adam Stacoviak:** Yeah, welcome to the party, for sure. I just hope that our ideas today are true three months from now.

**Mikeal Rogers:** Yeah, I think that we're just gonna kind of follow where people want us to go. I think that we should also not be afraid to try some stuff out. In the planning for this show, we tried a lot of stuff that didn't quite work. It was a good idea, but it wasn't quite there, or ready, or whatever. I even wrote a bunch of custom code to play around with some ideas; then, once you're really using it, it's like, "Oh, this is 90% there, but not enough to really use and rely upon."

I like the idea of having lots of different modes of engagement. It'd be great to set up some audio voicemail service or something where we can just get listener-asked questions that we then ask on the air; that'd be great.

**Adam Stacoviak:** There's two ways that can happen, actually... We have one way, which is probably the easiest way; it may not be the long-term preferred way, but you can call 888-974-24-54 (888-974-CHLG, for Changelog). So you can call that and leave us a voicemail. We use Grasshopper for our virtual voicemail system, so you can call there and just leave a message, and we get mp3s dumped to us (although they are lower quality).

Or you can simply just open up QuickTime or something and just record something and then email it to somebody or drop it on Dropbox and tweet us, and we'll grab those. We'll find a more formalized way for it in the future, but if you're listening to this and you want a way, that's a good way to start. We'll go from there.

In lieu of getting this thing wrapped up, we've got live every Friday at noon Pacific, 3 PM EST, Changelog.com/live. Follow @JSPartyFM on Twitter, or also head to changelog.com/jsparty. Subscribe, don't miss a show.

Mikeal, this was fun. Thank you for doing this, man.

**Mikeal Rogers:** Yeah, anytime!
