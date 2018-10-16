**Jerod Santo:** Alright, welcome back, party people! We are excited today, as we're always excited here on JS Party for the shows. Today we've got a little bit of a special show for you. We're taking Feross, your beloved JS Party panelist, and we're turning him into a bit of a guest. So this is me, Jerod, And Feross is here, and we're gonna have a little bit of a conversation about a very cool project that Feross has put together and put into the world, and that is called BitMidi. A bit of a fireside chat, although a strange one, as it's morning time for both of us; I was gonna say get your cognac, have a nice drink, sit down by the fire, let's talk about BitMidi, but that just kind of doesn't feel like what we're doing here today. Either way, we're gonna have fun. Feross, what's up, man?

**Feross Aboukhadijeh:** What's up, Jerod? How's it going?

**Jerod Santo:** Going very well, going very well. Hey, I've been thinking about this show a little bit this morning, and just what we're gonna talk about with BitMidi, and before we get into the nitty-gritty of what it is, how you built it, why it's cool, why midis are rad, all that kind of stuff, I wanna talk about you a little bit. We met back in 2016 when we had you on the Changelog, and we learned a little bit about your history with School Notes, and the ways you were making money kind of accident, kind of on purpose, and how you got into the open source game and how you do all the cool stuff you do around WebTorrent and these things... And I wanted to catch up with that and maybe have the JS Party listeners who haven't listened to that show - by the way, if you wanna go deep into Feross' history, go back and listen to that episode of the Changelog; we will link it up in the show notes... I can't remember which episode it is off the top of my head. And I didn't write it down, so check the show notes for that... But let's find out what you're up to lately.

You put out these cool projects, and I know you've got a Patreon thing going... Give people a little bit of your recent back-story and what's up with your life.

**Feross Aboukhadijeh:** I don't know if you heard the most recent news of all, but I actually just started my master's degree a couple weeks ago.

**Jerod Santo:** Really? Congratulations, I guess. Are you studying CS, or what's the degree in?

**Feross Aboukhadijeh:** \[00:03:37.23\] Yeah, so I actually started a masters degree in CS back in 2013; I did it immediately after my undergrad, and put it on hold to go and try to start a company. We did that for a little while, and we were acquired by Yahoo! and worked there for a year. And while I was at Yahoo! I started the WebTorrent project. So WebTorrent sort of came out of that, it came out of the startup experience that I had. A lot of the ideas around using WebRTC to do peer-to-peer connections, the insight that could be used for bringing something like BitTorrent to the web all happened because of the startup.

Then after I left Yahoo! at around the beginning of 2015, I basically just worked on open source constantly, and went and traveled around and talked to conferences, and shared what I was doing, and I met a lot of cool people and found a lot of people to collaborate with on WebTorrent.

**Jerod Santo:** Did you have an income at that time, or were you just living off savings? Were you scraping the bottom of the barrel? How were you making money during that time?

**Feross Aboukhadijeh:** That's a bit of both, so a bit of savings, just being really frugal while I was working at Yahoo!, so I could build a bit of savings, but then on top of that I also had, like we talked about in that Changelog episode, I had a site called Study Notes, which was providing some ad revenue basically from some Google AdSense ads that were on that website. Those two things sort of gave me the flexibility and the freedom to basically work on open source for now money for several years, and it's been really cool to be able to do that... Definitely not having to worry about the financials on the day-to-day, like a lot of the people who wanna do open source do. It has been really nice.

**Jerod Santo:** Very cool. I found that episode, 227, and I misspoke, I called it School Notes; that's what I get for going off of a three-year memory... But Study Notes was that project, and that's very cool that you got to do open source for so long. You also somewhat recently - maybe a year ago - you do have Patreon support, you do have a few other things going on... Tell us about that, and then how you decided to go back to grad school.

**Feross Aboukhadijeh:** With the Patreon, I was sort of getting interested in open source funding, and everyone's been talking about open source sustainability, it was sort of top of mind... So I was thinking about "Is there anything I can do to help solve this problem for people?" and I just became kind of interested in it... And as a way of investigating whether there's some idea I could come up with that would help all open source maintainers, myself included, but also a lot of my friends, I thought I'd explore a couple of different ideas.

One of them was "Is Patreon actually a solution that we could use to solve this problem?", so I thought I would try to do a Patreon and see what it's like, and how much work it is, and whether it would be possible to actually get an amount of money where you could actually just work on open source from it... So it was honestly mostly just an experiment.

I've tried other experiments since. I made this thing called thanks, which you can run a command in your Node project, and it'll -- so you run npx thanks, and it'll look through your whole dependency tree and figure out which of the packages that you're depending on are created by authors who are looking for donations currently. That's pretty cool.

**Jerod Santo:** Yeah, that's awesome. I remember logging that back when it happened. Hanging on on Patreon for a second - you say this is an experiment... Do you have result? Did you test the hypothesis? What's your experience with Patreon in terms of the experiment, and what are your thoughts on it?

**Feross Aboukhadijeh:** I think it's actually really hard to recommend Patreon as a general solution to solving open source funding, because it requires a lot of work, first of all, just to create the page, and you have to kind of have a bit of ability to do marketing, I guess, to be able to sort of pitch why people should support you... So that's one thing. And then not everyone wants to do that or is good at that.

The people I've seen who've been most effective at being able to get to an amount of money where they could actually say "Okay, I'm gonna work on open source part-time or full-time", I would say that's at least a few thousand dollars a month, but here's the big problem with this - the problem is people are talking about open source sustainability as if it's this thing where if you could just get to breakeven, where you're barely making ends meet, that somehow that's like a good thing, because now you're sustainable... But a lot of us who are doing open source could go get a job and be really well compensated doing that, so it's really not an ideal goal to just try to get to sustainability. The goal should be profitability. That might not sound good to a lot of listeners, because they might think open source isn't about profit, but... I think Kyle Mitchell at Npm said this really well. He said, "If you're making a profit, that's a sign that you're not being exploited.

\[00:08:17.05\] Imagine if you had a job and you were just barely making ends meet - that's not a good position to be in, especially when the work you're creating really adds a lot of value to a lot of companies. Anyway, I just think the bar should be raise a little bit to more than just like -- you know, so that my savings isn't being drained while I'm working on this software for people. But anyway, that's besides the point.

To answer your question about the Patreon, I think there's only been a few people, maybe like 10 or 20 programmers that I know who've been able to breach that one thousand dollar per month barrier, and most of them already had existing Twitter followings, where they could just sort of reach out to all those people.

The other thing that's weird about that is you don't really wanna be asking fellow programmers, fellow open source people to fund you. Really what you wanna do is ask companies, so the whole thing is kind of weird. All the rewards I offered on my Patreon, for example, were all stickers and things that I knew the other developers would want, but I realized after the fact I actually would rather just be taking money from a few companies who are using my software than trying to ask for support from all these people who really shouldn't need to be supporting me.

**Jerod Santo:** A couple of quick thoughts there and we'll get back to the main course here, because as you know with the Changelog, I could talk about this stuff all day, and I'll tend to, so I'm cutting myself off as well, but two thoughts to add to what you're saying there... On the sustainability side, I agree with you 100% that we shouldn't have the goal of sustaining -- like, survival shouldn't be the goal, but thriving. Open source projects should thrive, they shouldn't just survive, so I agree that we should raise that bar.

Then secondly, there's a celebrity culture on the web which translates into programming and open source, where we look at successful people and then we try to turn that into a model. This happens on YouTube all the time: "If I can just get to 100,000 subscribers, I can be a YouTuber and I can YouTube all day, or I can stream on Twitch all day", and we look at these extreme outliers as examples, instead of as outliers... So it's very difficult to get there, but we tend to say "Well, this person did it, and so can I", which doesn't mean you can't; it's just that that doesn't make it easy or sustainable as a model that you should follow, so... All good points.

Real quick, let's touch back on the grad school thing, and we'll close that loop and then we'll get to BitMidi.

**Feross Aboukhadijeh:** Yeah, so I just thought it would be fun actually; I don't really have much of a reason for why I --

**Jerod Santo:** \[laughs\] I love that.

**Feross Aboukhadijeh:** I figured if I didn't go back and finish soon, then I probably would never finish. I think there are a lot of classes that would be fun to take, and... Yeah, I just decided to do it. I'm also TA-ing a class while I'm here. There's this really cool class that's on sort of like low-level computer systems, C++, and it talks a lot about file systems, and how those are implemented, and stuff like that... And yeah, it's gonna be fun to help teach that and get back some of my skills which are really rusty in that area.

Yeah, I don't know... I don't know what else to say about it. It was kind of a spur of the moment decision too, to be honest. Two, three weeks ago I just woke up one day and I was like "I should go back and get my degree." Then I contacted the CS department and found out that I just had to fill out a one-page form and they could reinstate me... Because it had been so long that they actually deleted me from the system; they were like, "You're probably not coming back to finish your degree. It's been five years."

**Jerod Santo:** They'd given up on you.

**Feross Aboukhadijeh:** They gave up -- but they were wrong, because I came back.

**Jerod Santo:** Well, I just have to say that the answer of "I just thought it would be fun" is such a Feross thing to say... I feel like that can maybe be your tagline or your motto, because so much of the projects that you put out I think are -- in me it invokes just the joy of programming and creating things, and I always feel like the joker... Not on the recent Batmans, but the old-school Batman, if you remember that one from 1990, where he says "Where does he get all of these wonderful little toys?" or something like that. He's just kind of in awe of what Batman pulls out of his belt.

\[00:12:23.04\] So when you released BitMidi, and these other projects - thanks as well, which I thought was really rad - everytime you make an announcement, I'm like "What's Feross up to this time?" It almost always just seems like either to lift up other people in terms of things and sustainability, or this is just to bring joy to the world, or even just to yourself.

BitMidi, which you announced back in August - I think you launched it back in August - is a web app that is for listening to free midi songs... And that's the gist of it right there, and it's just kind of like, "Okay, this is cool, and I'm glad it exists", but I'm curious why it exists... \[laughter\] What was your inspiration and what was your decision to put what it appears to be a lot of time and effort and polish into this project? Tell us about that.

**Feross Aboukhadijeh:** I wanted to listen to some midi files because I just realized that I hadn't heard a midi file in a while... And they used to be pretty common on the web in the early days. I used to find websites that just autoplayed music in the background, and they were always midi files; they were always that sort of charming, old-school sound that midi files have... And then I just didn't hear them on websites for a long time. Obviously, it went out of style to auto-play music automatically... \[laughs\]

**Jerod Santo:** Auto-play especially, yes.

**Feross Aboukhadijeh:** Beyond that, you'd think even when you go to old sites, you'd still hear that... But I noticed that I hadn't seen that in a while. Then I looked into it, and the HTML tag that is used to autoplay midi files or any other kind of sound file in the background is not around anymore... And in fact, it never even was in any other browser besides Internet Explorer, which shows how long ago this was. I think it was even removed from there. But the point is that you can't just add a -- it's called &lt;bgsound&gt;. You can't just add a &lt;bgsound&gt; tag to a page anymore and get it to play midi... But I figured "Okay, maybe you could just use an audio tag to do it."

**Jerod Santo:** Yeah, this is something that we've run into with the audio tag, because there are some legitimate uses of auto-play with the audio element. For instance, if you're listening live right now, you had to go to Changelog.com/live, and then you probably had to click the Play button, because we can no longer auto-play from the audio element.

There's actually some heuristics in the browsers; if you've done it a bunch of times, they'll allow it to happen, but browser vendors - almost all of them now, specifically I know Chrome and Safari - have made that auto-play, which isn't a feature inside of the audio element API not work, much to the rejoicing of end users. This is something that we're glad went away, because there was so much abuse of it, but there's also cool and legitimate uses. I think, by the way, this is why Twitter will auto-play video without the audio going, as you scroll the stream, and you have to click for sound... So yeah, lots of limitations on the audio element, which I think have continued to get locked down as time has progressed. I run into that as well with our stuff.

**Feross Aboukhadijeh:** Yeah, it's really too bad, because when that happened, they actually broke a lot of audio demo type sites. There were a lot that just assumed they could play audio right away, and they didn't provide a mechanism for clicking to start the demo, so they're just broken, a lot of the time.

**Jerod Santo:** So &lt;bgsound&gt; does not even work anymore...

**Feross Aboukhadijeh:** Yeah. It doesn't exist. I don't think it even ever existed outside of Internet Explorer; it's not in Chrome or Firefox or any of the other browsers.

**Jerod Santo:** Okay.

**Feross Aboukhadijeh:** But you'd think you could do an audio tag that points to a midi file, but if you try that, you'd be wrong, and it wouldn't work... Because they don't even have midi files support anymore either. It's not just the &lt;bgsound&gt; sound tag, it's actually the whole midi format. It's not part of the web.

\[00:16:01.02\] I don't know the exact history of why that was decided, but I guess one reason is that operating systems used to include midi playback as like a feature of the operating system, a midi synthesizer; I think that was built into Mac at one point, and you can even still find a midi settings thing... If you go to the Utilities folder, there's a midi setup app.

So I don't really know the whole history here, but midi is not used as much for audio playback, and I think OS's are removing their built-in stuff, so it makes it harder for a browser to play back those files... So I could see why they wouldn't want to ship a whole midi playback infrastructure, basically, if it's not gonna be used that often by websites. Including that in the browser is kind of big... That's because of how midi works, which we could talk about if you want.

**Jerod Santo:** Yeah, let's dive into that in the second segment. I just did search "midi" in Spotlight and there's an audio midi setup .app, which I didn't install, so I'm assuming that's just in the Utilities folder there. In case you wanna use midis, you can get it going in your OS, at least in macOS, but not there by default.

I wanna dive deeper into midi and how you accomplished this. I know there's Web Assembly involved, there's lots of stuff that's interesting, but before we get to that, I wanna talk a little bit about the releasing of BitMidi, and you strategies there... Because one thing that I think you're very good at is getting eyes on the things that you create, and I think BitMidi is no exception to that. Tell us about releasing the thing, because this is something that as Javascript devs, as open source people, whether it's a little library or a huge endeavor that's a framework, or a web app you want people to check out, a lot of us struggle to get eyes on our things... And you've had somewhat success at that, so I'm curious if you're intentional about a release, what your plans are... I know you have a big launch announcement and you go into the details of BitMidi; I saw it on Hacker News, I think you put it on Product Hunt... Tell the people about releasing and what you go through and kind of how the different things work.

**Feross Aboukhadijeh:** Yeah, yeah. I think one big hiccup or one big problem that a lot of people face when they release stuff is they just don't wanna be seen as like marketing themselves too hard, or being a spammer, or being kind of...

**Jerod Santo:** Self-promotional.

**Feross Aboukhadijeh:** Self-promotional, yeah. The thing is I didn't use to be as intentional about this, but now when I see that, I try to sort of immediately push back on it, when I see people who say things like "Self-promotion is bad", or any of this kind of stuff. I think it is obviously a fine line, but I think what people don't realize is that a Twitter stream is full of noise, just as one example... So if you just tweet out the thing that you did once, then a lot of people are gonna miss it; so being comfortable with pushing -- I think most developers are just way too far onto the side of not wanting to be self-promotional... And I'm not suggesting that people go way to the other side and become totally annoying, but I think a lot of developers - it's probably pretty good blanket advice, "Promote what you've built more than you are currently doing it." I think that would push 99% of the developers in the right direction, as far as where they are on that scale.

I've worked on something for several months, and I wanna make sure people see it, so I post it to Hacker News, I post it to Product Hunt at midnight, which is the right time to post it there to get the upvotes I'll collect across the day... So I go there a minute after midnight and post it, and then I usually prepare five, maybe ten tweets - I don't even know, but I just prepare a bunch of things and I tweet them out regularly for the next three, four days after I release something, just to make sure that people have definitely seen it. Maybe somebody will see a tweet twice from me about the same thing, but so what? Totally normal. If someone's interested in something, they're gonna be tweeting about it a lot. If you don't like it, you can unfollow them.

\[00:19:50.25\] People think like, "Oh my god, everyone's gonna see all these tweets I'm writing and they're gonna think that I'm annoying..." - no. Just relax, promote yourself more than you currently are, especially if you've put a lot of work into something. You want people to see it.

It's extremely motivational to get a response from people. It's really demoralizing if you work on something for several months and then you post it to Hacker News and then it gets no traction, and you're just like "Oh, I guess no one cared." It's like, no, maybe people just missed it. Maybe you should post it again. Maybe you should go to Reddit and post it on a bunch of different Subreddits that you think people would find it interesting. Try different groups.

For example, with BitMidi I thought it was gonna be a hit with people who are looking for nostalgic-type sites... I don't know, I didn't really know if this was even a real niche, but I just built this because I wanted to listen to midis, because I think they sound cool, and I missed them from when I browsed the internet in the early days. I thought that was gonna be the audience. But actually, midi is used a lot by musicians for talking to their instruments; it's a sort of protocol -- and we're gonna get into this later, I guess.

I just on a whim posted it to this Subreddit called "We are the music makers" or Reddit, and it got like 200-300 upvotes there... And I did not expect that at all, I just posted it there on a whim. So your audience might not even be who you think it is, and you have to shock and approach, try putting it in front of anyone who might possibly find it interesting and see what they say, and maybe you can adjust who you're building it for based on that.

**Break:** \[00:21:26.18\]

**Jerod Santo:** Well, thinking about Jordan Eldredge, who did Winamp2 JS and has had huge success getting that in front of lots of people's eyes - BitMidi reminds me of that in terms of what that was for the listeners, an HTML/Javascript reimplementation of Winamp 2, which was a beloved audio player by many, especially in the earlier days of the web... And it's flawless. It looks exactly like it. He got that on a lot of mainstream coverage; maybe not TechCrunch, but that style... Still technology coverage, but Mashable, and these sites that aren't -- it's not Hacker News, it's not Changelog News, it's a place beyond that... I think BitMidi may play there a little bit in terms of it has a bit of a mainstream, nostalgic thing to it; it's not just for developers, even though it's interesting to us for lots of reasons.

Did you have any efforts towards mainstream coverage, or is that something that you think about?

**Feross Aboukhadijeh:** \[00:23:34.11\] I usually wouldn't think about that, but for this site I thought I would actually try to contact some news sites... And I actually haven't had any luck getting anybody to write about it so far. But I did e-mail all the people at maybe like 10-15 of the tech publications that I thought would find it interesting, and I did the whole typical advice you hear - try to find someone who wrote about something related to what you're gonna pitch them... I found people who had either written about midi files, or retro, old, nostalgic web culture type things, and I e-mailed them. I basically got no responses, so... You can't let that kind of thing get you down. I don't know... I'm definitely gonna still try that same strategy again for the next site I build, and maybe I'll even go back and try e-mailing them all again at some point, to see if maybe they were all busy that week. I think it was the week that Apple announced the iPhones, and stuff... So I don't know. It could have been just bad timing, or unlucky, or something... I'm not gonna get down about it.

**Jerod Santo:** Sure. Just to kind of +1 what you said about developers promoting their own projects and themselves, is that I'm in the same place, where I feel icky about like "I don't wanna self-promote myself too much", and these feelings, or feel markety or spammy, because those are such repelling things to me personally that I don't wanna be that repellant... But let me just say to the developers out there who feel the same way that I do - do you know who doesn't feel that way? It's PR people and startups. Do you know who's contacting us all the time? It's these people. So it's kind of like "the squeaky wheel gets the oil." I would much rather cover the indie developer who's got this cool project that has five stars, as opposed to the startup that has a lot of traction and these other things, but I don't hear from them as much; I hear from the other people.

So just to echo what you're saying there, Feross, is do not feel shy, especially with Changelog, because we very much fight for the little guy, so to speak, is to submit your things, get the word out there, and sometimes if it doesn't stick, try again. Don't try seven times, because we also get those e-mails... "I'm just replying because you haven't replied." It's like, "Yeah, because this is the seventh time..." I'll usually give them the all-caps "UNSUBSCRIBE" reply on that one... But yeah, don't be shy, because other people are not being shy and there's a lot of noise, and you have to make a little bit of noise to get heard every once in a while.

**Feross Aboukhadijeh:** Totally, yeah. I totally agree. And I think most developers just naturally fall on one side of that equilibrium, just because of like a personality thing, I think, or like a culture thing, where people don't wanna do it... But yeah, I think everyone could afford to be a little bit more promotional and it would still be okay, it would still be tasteful. Just increase it slightly, and a lot of people would do well.

**Jerod Santo:** So we started to unpack midis and what they are a little bit, or at least you alluded to it... I'm completely ignorant about this; I just figured they're like a binary file format that's similar to an MP3, or some sort of encoding... But it sounds like they're kind of weird. What did you learn about midis, and then how did you get them to play on the web when they don't exist anymore in terms of a &lt;bgsound&gt; element that will parse and execute them?

**Feross Aboukhadijeh:** Midi, first of all, is mostly used by musicians to connect their devices together to control them. They can connect synthesizers, samplers or computers together, and then the devices talk to each other using midi messages. The midi files that you see online and that you find on BitMidi are almost like an afterthought compared to the primary use of midi, which is getting all these devices to talk the same language.

You can think of a midi file as a collection of these messages, and stored in a certain file format, and they can be played back later. Say I connected a piano keyboard to my laptop and I pressed a bunch of keys - that's gonna generate a bunch of messages saying "This key is pressed, this other note is pressed. Here's how long it was pressed, and here's how hard it was pressed." Each of those key presses generate some of these events. There's an event, I think, to start a note, there's an event to stop a note, and each of those have a timecode...

\[00:27:45.22\] Anyway, it's just a protocol that encodes what buttons are pressed, and when things are started and stopped, and what notes they are, and so on and so forth... And there's no sound in those messages; there's no actual sound data. It's just saying "This key was pressed." It's up to the thing that's receiving that message to make it make a sound if they want it to.

**Jerod Santo:** And it could make any sound it wants, as long as it makes sense.

**Feross Aboukhadijeh:** Yeah, that's right. You could do anything with it. In fact, people sometimes use these midi messages to do things like control lights for a light show, or timing different stage events...

**Jerod Santo:** I was gonna say, it sounds very programmatic and useful. It sounds like you could very easily program, and I'm sure there are tools and software that is all about programming these things.

**Feross Aboukhadijeh:** Yeah, and there are actually libraries in Javascript that let you create these midi messages. By the way, it's probably worth mentioning there is this thing called the Web Midi API, which is a part of Chrome, and I think it's gonna come to other browsers later... That's actually a way to connect a midi device to your computer and then to be able to send messages to it from a web page, and to get messages from it, so two-way.

I could connect a piano keyboard to my computer, play some notes on it, and then capture those in a web page, and play some sound from it, or record which keys were pressed. It's similar to the WebUSB API, but it's specifically for midi devices, and it supports all the little midi messages that you might send and receive. But I'm not an expert on that. If we wanna find out more, we can talk to Rachel, because I know she's been playing around with Web Midi quite a bit lately. So that's a little bit about midi, and midi messages.

Midi files are just collections of these messages which have been assembled together, and then it's almost like when you play back a midi file, what you're really doing is -- it's almost like there's a fake instrument that's generating all those note presses after the fact, but you're playing it back. To actually make the sound, you need to have something that listens to those messages and actually can get the sounds of the instruments that are required and be able to play the notes that are coming through those messages.

**Jerod Santo:** Gotcha.

**Feross Aboukhadijeh:** So you literally have to have what's called a sound set, or an instrument pack. They have different names, but basically you need to have like -- someone's gone and recorded what every note on the piano sounds like when it's played, and what every note on a trumpet sounds like when it's played, for every instrument, and then put these into little files that are called the sound set. Then you combine that with the midi file to actually play the sound, to play the song back.

**Jerod Santo:** It's almost like a runtime for the instruction set. It's like, without this audio runtime, this set of actual sounds to instruct the instructions can't do anything... But you could swap those in, so maybe the exact same note on a piano versus on an organ - maybe it's the same exact note - you swap in the organ and you get the organ sound.

**Feross Aboukhadijeh:** That's totally right.

**Jerod Santo:** That's cool. I did not know that.

**Feross Aboukhadijeh:** Yeah. That's sometimes why if you play back a midi file in a different music player, why it would sound different. If you go to BitMidi, the file sounds one way, but if you play it in VLC, it'll sound different, and so on and so forth... And that's because the instruments are gonna be different, the instruments that are built into each of those programs are different.

It's kind of strange how there's no sound wave inside the midi file. It's almost like digital sheet music; you need to have somebody perform the sheet music to actually hear it.

**Jerod Santo:** Right, that's a good way of thinking of it. So you downloaded these hundred-thousand midi files \[unintelligible 00:31:21.15\] all these files, which are just the instructions, and then how did you get from there to BitMidi.com... Aside from the whole web app side, but the actual just playing of those - what was your process to get that done?

**Feross Aboukhadijeh:** I had mistakenly thought that there was no way to play back these on a modern computer, at least in an easy way. I didn't realize VLC could actually play midi files until after I built the website... \[laughter\]

**Jerod Santo:** Did you not try, or...?

**Feross Aboukhadijeh:** \[00:31:49.18\] No, I swear I tried, but I must have tried a couple of files that VLC couldn't understand... Because I distinctly remember being disappointed. I thought VLC could play everything, so I was like "What is going on here?" But then I figured, "Okay, maybe midi is kind of a weird format", because they need to have this instrument sound pack. I assumed they had decided that it's not a real media format, because it requires this instrument set to play back the sounds, so I figured maybe VLC didn't wanna include it for that reason, but I was wrong.

So in some sense, the whole reason I made the midi side was so I could play back these files, because I thought it was too hard to play them back, because VLC couldn't do it, and QuickTime can't do it anymore, and all the free programs that supposedly could do it looked really sketchy. I mean, there were no websites that I found that could do it, so I was like, "Oh, okay, fine. I'll just go and basically take something that's written that can play these back and compile it to Javascript." That was the whole approach I took.

**Jerod Santo:** So what did you find...? And then you compiled it to WASM, I assume. Is that what's currently being used on the site?

**Feross Aboukhadijeh:** Yeah, so there's a C library that can play back midis, it's called libTiMidity. I think you can even install it on Homebrew if you're on a Mac. So you get this command line program called TiMidity, and you can pass it an argument that's the midi file you wanna play, and then it'll play it. It sounds pretty good. You've gotta give it an instrument pack, so that it can play it back.

Then I found the library version of that, which takes in the midi file and the instruments and produces a WAVE sound as output. And I was like, okay, I need to compile this to Web Assembly... Which I had never done before, because I'd never had really a need to use Web Assembly or Emscripten, if anything... For whatever reason, it's just not something I ever needed to do, until now.

One of the main things -- a lot of people talk about how it's for performance, and that's certainly a thing that it's good at... A lot of people talk about how it let them finally stop writing Javascript, which is less true than they think, because I think we're still gonna need Javascript for a long time... But the main thing that I think makes it cool is that you can take code written in other languages, like C, that you don't wanna have to port to Javascript, and just be like "Okay, now it runs in the browser." That's the aspect of it that I liked a lot.

**Jerod Santo:** I'm thinking about your old moniker of a "mad scientist", and I'm kind of imagining Dr. Frankenstein - the first time he plugs all those arms together and the monster animates, and that feeling of like "I hacked this thing, and it's amazing. Look what I have created!" Did you have any a-ha moments...? I'm imagining the first time you heard that sound out of your browser window, of the midi actually playing, after you've used Emscripten to compile this libTiMidity into a Web Assembly thing, and then you've wrapped that and called it, and then "Here's the file." Was that a pretty awesome moment, when it finally played?

**Feross Aboukhadijeh:** Yeah, definitely. There were other websites that had attempted to build a Javascript midi player, but they all had certain problems playing back files; they were missing instruments... They seemed sort of Hello, world type things. There was one that could play back only piano instruments. There was one that turned all instruments into piano... So if you had a song that like ten different instruments, they would just all come out as piano, which didn't sound good, obviously, because you don't want your drums to come out piano key presses, for example.

There were a bunch of things that were out there, so I had seen "Okay, I kind of play a midi", but all the different libraries had limitations that made it sound not as good as I thought it could or should sound. Then I also wanted the file size to be small, too; that's another thing I was thinking about, because I wanted the website to be fast. A lot of the previous experiments that I found literally around GitHub just ended up producing these 1 MB Javascript bundle sizes, for whatever reason. They were huge, and really slow to load.

I would say the moment was reduced a little bit by the fact that I had seen some similar things working, but once I had it all hooked up and it was all my code -- well, not all; I still used libTiMidity, but you know what I mean - my own contraption, once that worked...

**Jerod Santo:** \[00:36:16.01\] Your own creation, yeah...

**Feross Aboukhadijeh:** Yeah, that was really cool. I just sat there for hours and just played a bunch of different midis, and was very satisfied with the whole thing. I wanna say too that I did learn a lot from some of the previous attempts that I'd found on GitHub, the unfinished code that people had put up there... Because, like I said, I hadn't used Emscripten before, so being able to look at other people's attempts at compiling a midi player or any kind of player like that to Web Assembly was really useful. I definitely was inspired by some of the stuff I found on GitHub there, to be able to figure out how to do that all.

It's actually not as hard as you'd think to do it. I'm not that good at C or C++. I can read it and I can write it if I have to, but it's not at all -- I've never really written a serious program in it, but I was still able to go in and make a couple of changes here and there and then get it to work. It's quite cool. Have you actually done anything like that, Jerod, with Emscripten or Web Assembly?

**Jerod Santo:** I haven't. I haven't used Web Assembly for anything personally, where I've had that moment, or cobbled something together... I definitely had some experiments with C, in ways that I'm very much in your same camp - I can read it, I wrote it back in college, very simple things... But complex C programs are intimidating, but I can read and slightly modify them. I remember back in the day I took a gzip type of a tool which was written in C - it took me like three days to figure out how it all worked, but I was able to multi-thread it, basically, by changing like seven lines of code in the C program, so open source for the win there... And I remember that moment of like "Holy cow, this thing actually runs in--" I think it was across eight processors at a time. It just cut the process down by eight, and it was amazing, and I had barely changed any code... So I imagine it's a similar type of feeling.

We've talked about Web Assembly, I've interviewed lots of people about it, and I definitely see all these different use cases, but never personally ran into one where -- like you before BitMidi; it just hasn't crossed my radar as something that I've needed.

**Feross Aboukhadijeh:** Yeah.

**Jerod Santo:** I'm curious about the final step there. You have the Web Assembly executable, or that section that you can call into, and you have TiMidity running in that, which produces the sound... How do you actually hook that into -- is it the Web Audio API that you bridge that gap? What's the final glue that gets it to play?

**Feross Aboukhadijeh:** Yeah, it's the Web Audio API. You can take a buffer of WAVE sound data and then just play it using the Web Audio API. The part before that though was kind of interesting... When you're doing the build, the Emscripten build of the library, you specify which functions in the C program you want to be exposed to Javascript. You select, like, I want the function where I call 'read some more bytes from the midi file'. I can't remember what that function was called, but it's like 'read something'. You just pick a handful of the functions that you're gonna need to call, and then Emscripten produces this little Javascript (I guess it's kind of like a) loader file, that will actually load in the WASM. The WASM file is this binary file that you can't open in a text editor and read, but then there's a Javascript file that goes next to it, and when you include that in your website, it will do a fetch of the Web Assembly in the background. Then all the functions that you wanted to be exposed will be exposed once the Web Assembly is fetched. It will tell you when it's ready, when it's loaded everything in.

Those are C functions too, remember. The function signatures are kind of weird. If you call a function in C and it returns you a string, that's gonna be a char\*, which is a pointer to a character buffer. That's the other funny part - pointers in Javascript...

**Jerod Santo:** \[00:40:15.06\] Pointers...? \[laughter\]

**Feross Aboukhadijeh:** Exactly... But they come out as numbers, basically. They're just memory addresses as numbers, in Javascript. You can take that pointer and pass it into another function that needs a pointer. You can even call malloc() to get memory, and it gives you back the address as that number, as a pointer, but it's a number in Javascript.

Then if you need to do something like turn a char\* into a string, then you call a special function that Emscripten gives you; it's called Pointer\_stringify(). You pass it the number that represents the memory address where that character string is, and then it'll go and read all the characters until it finds the terminating null, and then it'll give that to you as a Javascript string.

**Jerod Santo:** Wow.

**Feross Aboukhadijeh:** Yeah, so you can sort of translate between the two levels. Now, obviously, you don't really want your users of your library to have to deal with C...

**Jerod Santo:** You wanna wrap that...

**Feross Aboukhadijeh:** You wrap that up, exactly. If you use the Npm package that I published (it's called TiMidity), then it'll wrap all that up into a nice Javascript API. You don't even know that that's going on behind the scenes, which is pretty cool.

**Jerod Santo:** That is cool. Pretty amazing that all of this works at the end of the day, isn't it? When you think about all the intricacies of how these things work together?

**Feross Aboukhadijeh:** Yeah...

**Jerod Santo:** It's kind of awe-inspiring.

**Feross Aboukhadijeh:** The part that blows my mind is how people port giant games, that are huge code bases, and they port those over to Web Assembly. That's the thing I don't understand... Because doing this, there were certain function calls where it was calling "filesystem read", it was reading a file off the file system to be able to find those instrument sounds...

**Jerod Santo:** Right.

**Feross Aboukhadijeh:** Because the way the program works is it takes in the path to the folder of where all your instruments are, and then you can give it the midi data by passing that in through a function you call... But it will itself go and read the instruments that it needs from the file system... But how do you get that to work in a browser? Because there's no file system.

**Jerod Santo:** Exactly.

**Feross Aboukhadijeh:** And also, you don't want to load all the instruments beforehand. Even if you could put them into a virtual folder, you don't wanna load all those in.

**Jerod Santo:** Because they're too big?

**Feross Aboukhadijeh:** Yeah, they're like a hundred megabytes. They're too big.

**Jerod Santo:** Oh, wow.

**Feross Aboukhadijeh:** So what you do is -- Emscripten provides a way to basically put things into a fake files system, and you pick the path and then you pick the data that you want to be at that path, and then when the program tries to list out the files in that directory and read files, it'll just magically make that file system code work. But to be able to do the correct thing, which is to not have to download all the instruments beforehand, there's a little bit of trickery involved.

You don't want to download all the instruments and put them onto this fake file system.. So what you do instead is you can wait until the libTiMidity library tries to read an instrument, and then when it actually does the read call, then you go out and make a fetch request to the server to get the file, and then write it into the file system.

**Jerod Santo:** Can you just get a single instrument at a time?

**Feross Aboukhadijeh:** Yeah, because they're in different files.

**Jerod Santo:** Oh, that's great. I was wondering -- because eventually, if it's a 100 MB deal, then eventually you're gonna have to download that whole thing... But not if you're not using all the instruments, so that's great. You can split them out like that.

**Feross Aboukhadijeh:** Yeah, and if you go to BitMidi and you open up the network inspector and you look at the network requests, you can see exactly which instruments are in the song that you just played by seeing which instrument files are fetched. It's pretty cool.

**Break:** \[00:44:03.03\]

**Jerod Santo:** I have to give you props on this one thing, because you got past that big technical barrier of playing a midi inside of a browser, and that's where a lot of us would just stop, and have that satisfaction... That moment when you played sound files for an hour or so. A lot of us would be like "I scratched my own itch, and I'm done now. There's no more reason to finish this project", but you did do that. You powered through and you've wrapped it in a very nice website. There's lots of ins and outs of the web app, Preact... Tell us all about the experience of BitMidi. Of course, it's all open source code, so we'll link up the codebase in the show notes for those who wanna go poking through it.

I think the Preact author was giving you props, as like "This is a high-quality example of a Preact application." So tell us about the web app that surrounds the Web Assembly.

**Feross Aboukhadijeh:** Yeah, I'm kind of a weird front-end developer, I think...

**Jerod Santo:** \[laughs\] Why?

**Feross Aboukhadijeh:** Well, I'm not really satisfied with any of the stuff that's out there. I feel like as an industry we're doing something kind of wrong; I don't really know what it is, but it doesn't feel right... Something's not right. I don't really know how to fix it myself, but I feel like everything is too complicated, everything is confusing, everything breaks all the time, everything is slow... And I know that we're all solving hard problems and there's a lot of stuff going into websites today that wasn't there before, so this stuff is still being figured out. I didn't wanna use one of those off-the-shelf things. I wanted to piece together my own web framework...

**Jerod Santo:** Your own Frankenstein.

**Feross Aboukhadijeh:** Yeah, pretty much... And sort of solve all the problems myself and see if maybe there's some lessons there that I could learn, to turn into something useful for other people.

**Jerod Santo:** So you built a web framework inside here, is that what you're saying?

**Feross Aboukhadijeh:** I haven't pulled anything out into a framework, but yeah, there's like a lib folder with some useful stuff in there. Maybe that'll turn into something one day... My main thing was I just wanted to see if I just kept everything really minimalist, how fast of a site could I build, and how much of the stuff that's out there I could just sort of not use, cut out.

\[00:47:51.28\] A lot of web evangelists at Google are talking about how a lot of the frameworks that are out there sort of set you up for failure before you've even started by being so heavyweight that on a mobile device -- on an average mobile device, especially the average Android that's out there that people in the world have, you're gonna end up having such a large amount of Javascript that has to be downloaded just for the framework itself to get going, that there's not much room left for your app to do stuff. So you've already sort of lost the performance battle before you've even built your app, just because you selected a framework that's too big.

That's something that I care a lot about, because when I was working on WebTorrent I traveled a lot around the world, to different conferences and things, and I always used this free data plan that I got from T-Mobile, where you get free international data in a bunch of countries, but it's limited to (I think it's like) 128 kbs/second; I think they might have updated it to 256, but it's basically a little bit more than dial-up speed... So I quickly realized which websites I used were actually built in a minimalist way and which ones were built in a maximalist way, "Let's include everything."

I came to appreciate the sites that really tried hard to keep their Javascript amount low, and built their UI in a way that feels responsive even when the network is slow, or the network is missing. I just think a lot of sites could do better. I know that people are working on this, and there's a lot of hard problems to solve; I'm not trying to \[unintelligible 00:49:24.12\] but I just thought that if I could piece together my own approach using just the code that I know I need, and where I know every line in the app needs to be there, and that I understand -- not that I understand every line of code in the app, but I know every module that's included. I know the entire dependency tree and I know exactly why everything is included... So that I could build a really minimalist, quick, fast, responsive app.

And it's not perfect... I think I haven't succeeded to the degree I wanted to. There's still a lot of things I need to improve about BitMidi, but it's close. I think it's close. It's pretty good. There's some stuff that's hard to do, that I haven't done yet, like stuff with making sure the UI always shows a loading indicator when you do certain things, and I sort of wanna do some animations between pages, some page transitions that look cool... I haven't figured out how to do that in a way that doesn't make you wanna pull your hair out. And I can do some server-side database caching stuff that'll make things faster.

But on the whole, I think the site is a pretty lightweight, pretty performant website, even on old devices. I bought an old Android phone that is supposed to represent the median Android device in the world, and it's really slow, it's just a really bad phone, but it works pretty well, no problems. So I think I succeeded, I guess, in that sense; it actually works on an old phone... Whereas a lot more modern, or I guess more popular web apps just don't work, or are just too painfully slow to use.

**Jerod Santo:** Yeah. What I would love to do - and we probably can't do it here just with audio; in fact, maybe it would be fun to do a follow-up Twitch stream or some sort of video where we could walk through the code, and even have the site loading, and kind of pick your brain in terms of like what's happening when, how you put it together, why you made this decision... Kind of the fresh eyes, from the experienced eyes. Because it's difficult to explain just with you and I sitting here and talking exactly how it's all wired together and the way that the application executes. But that might be something fun to do perhaps as a follow-up.

That being said, maybe give us an idea of the dependencies you did pull in, and the reasons why you pulled them in... Some of the bigger ones. Like I mentioned, Preact, you've got some Express stuff going on... Give us an idea of some of the trade-offs, at least, that you can do via audio, without losing us as we follow along, the best you can... I know that's a tough ask.

**Feross Aboukhadijeh:** \[00:51:52.19\] Yeah, I mean... There's a bunch of things I could talk about. I'll just maybe throw out a few things. One thing I wanted to try on this site -- by the way, I just wanna be clear, I'm not recommending anyone do what I've done. If you're not interested in all the details of every dependency in your tree, then it's totally -- you shouldn't do this. You're gonna waste a bunch of time going down, figuring out how to do all this stuff, and in the end you're probably gonna have a bunch of bugs that you need to fix... And by the way, speaking of that, I actually understand a lot of the design decisions and the things that I was complaining about before, after having to implement my own.

I was like, "Oh, my version is so much simpler than the thing I didn't wanna use before... Isn't that nice?" But then a couple weeks go by and I realize, "Oh god, there's actually a huge problem with the way this is designed, and it's not handling some edge case..." and so I realize now why their design was more complicated. That happened over and over again, and in the end I kind of got to something that's almost the same as the thing that I didn't wanna use, but I understand all the decisions that went into it now. If you're interested in that, that can be fun, but I wouldn't recommend necessarily doing this unless you're interested in learning, spending a bunch of time. I just wanted to preface that, so that people don't tell me "This is an unpractical way to build an app. Why are you recommending people do this?" I'm not recommending people do this.

**Jerod Santo:** \[laughs\] The reason why I asked it that way was because of Jason Miller, the Preact developer, is vouching for it as a good example... Even though you're saying you went down a lot of rabbit trails, you did things yourself that you probably could have pulled in, you made bad decisions -- hey, we all make bad decisions as we go about building stuff; that's just kind of what we do. And you can always look back and say "I could have done it better" or "I spent too much time figuring this out..." So the idea is just to hear about that a little bit, maybe some of the trade-offs you made along the way... And even if people aren't going to look at this and say "This is how I must build my next web app", they could look at it and say "This is an interesting, different way to build a web app than I'm used to." So what would be some of the things they might look at, that you did, that could be informative, or at least experimental?

**Feross Aboukhadijeh:** Yeah, so one thing I wanted to do was make it so that I transpiled the minimum amount of code. I didn't wanna just pull in a big Babel preset, or even preset-env. I wanted to be extremely intentional about every single plugin and transform that I included... So I only transpile JSX out of the codebase, and a couple of features like class properties, object rest spread, and optional catch, which is when you can do a Try/Catch and you just omit the error in the Catch. So just a few little syntactic things which are gonna come to Javascript eventually, but which don't work in the latest version of every browser. My goal was "I need it to work in the latest Edge, the latest Chrome, the latest Firefox and the latest Safari", and same thing with mobile - mobile Safari and mobile Chrome. But that's basically it. I don't care about any other browser.

That's probably not practical for some people, but if you make that your goal, then you can have a really quick Babel build that just does minimum amount of stuff, and also avoids bloating your code with a bunch of polyfills and framework library code that's not gonna be used... So that's kind of cool. And there are approaches to make it work where you have two builds, and you can give the non-transpiled code to new browsers, and I looked into that, but in the end I just said "This is a hobby project. I'm just gonna support new browsers." I'm not dropping support for anybody who -- the site never worked for an Internet Explorer user, so they can't complain; it's not like I'm removing support, it just never worked for them in the first place.

So that's one interesting thing I think you can consider doing, and it's actually a pretty good recommendation, because a lot of times now the new syntax is actually as fast, or sometimes faster, and it's certainly often times less code than the old way of doing it; it's less bytes on the wire, which is pretty cool.

**Jerod Santo:** How are you measuring this? Is it Lighthouse scores? Are you looking at your bundle size and just trying to keep it below certain kilobytes? What's your measurement for success or failure with regards to some of these goals?

**Feross Aboukhadijeh:** \[00:56:02.00\] Lighthouse score has been the main thing I've been using. It's not enough to look at bundle size, because the bottleneck a lot of times these days is actually the time it takes the Javascript to execute, or to parse and then to execute... So if you send down a bunch of Javascript, even if it never runs, there's gonna be a big parse time there... Or if you gzip your Javascript and you're like "Oh, look how small it is", but it un-gzips to a bunch of code, it's still gonna have to parse all that code. So the gzip size is actually kind of misleading, in some ways... So you can look at Lighthouse and see what the time to first paint is, and the time to first interactive is, and that's a much better gauge of how quickly does the user see something, and then how quickly can they actually interact with the site, and the main thread is not busy with processing all the Javascript. Those are two really useful tools.

Google has a website you can go to, where you can put in your domain and then you can see historical, real-world user metrics. They're actually gathering metrics from people who've opted into metrics in Chrome, that shows how quickly your website loaded, how quickly the first paint happened, and how quickly it was interactive, and all these various data points... And they're gathering this for everyone one of the top websites out there. And not even top websites - even things like BitMidi are in the dataset.

Basically, if you access this dataset, you can see how real users out there who are using Chrome are actually experiencing your website. So if you improve it, you can see in the new data for the next day or the next month, you can see how much more quick your site has become on real users' computers.

**Jerod Santo:** That's awesome.

**Feross Aboukhadijeh:** Yeah, it's really cool. Back to Preact really quick - Preact is really cool because it gives you almost all the conveniences that you want from a front-end web framework. Let's say you like JSX and you wanna be able to use that, and be able to develop in a sort of React style, where you have components and where you have props being passed down through them, and you have maybe some context, you can pull components off of Npm - you get all that with Preact, but it's a tenth the size of React, so that's pretty cool. That's like a no-brainer decision to me, because a lot of the stuff in React is for reimplementing the way that events work in the browser... And the thing is the browser has a consistent events model now; all the browsers do it the same way, so you don't need to reimplement that. That's a bunch of code that's just doing nothing. I guess it's useful in the sense that if you're not using the DOM, the way React does it - you have things like React Native, which can use React, because they have their own events system, whereas there's no such thing as Preact Native. If you do Preact, then you're really assuming the DOM is gonna be there. So that's a downside for sure, but I'm only planning for this to be a website, so it's not a downside.

**Jerod Santo:** Are you opting out of any ecosystem things with Preact? I know you're keeping your dependencies as small as possible anyhow, but for other people making maybe bigger apps or bigger decisions, if you're using Preact, are there React libraries, projects, widgets, components that you're opting out of because Preact doesn't have certain things?

**Feross Aboukhadijeh:** There's a thing that a lot of people use called Preact Router. It's similar to React Router, and I've never been able to wrap my head around that, and why people like that. No offense to the authors, but I just find it's not the way my brain works. I don't wanna put my routes in HTML tags. I find that extremely confusing. Maybe this has changed. I haven't looked at these libraries recently, so if this has changed, I apologize in advance... But I want my location to be in my store, with all of my app's state, because I see the location as just another bit of state. The location that shows up in the URL bar is just another bit of state that my app is in control of, that I can set to anything that I want. So I want my location to be part of the store, and I want to use Redux-style dispatches to be able to change that location to be different, and then I want the response to that to be to change the URL that's up there in the address bar, and then re-render the app with the new page that's being displayed...

\[01:00:04.04\] And all that can be done if you just put your location in your store. Then what I do is I put my routes into another file, called Routes.js or Routes.json, and that's literally just the mapping from URL to a page component that's going to render that page; then it just matches on that using Express style URL matching.

To me, that's a lot simpler. The idea is "Okay, now my state is actually in one place, instead of being spread across these components, spread across these little weird route elements", and now if you serialize that and you store that, you actually have all the things you need to reproduce the state of the app, because it's actually all in one place now. I don't know, I may be missing something, but like I said, it's never been able to work for me, so I've opted out of that router stuff.

Also, another thing is Redux. Redux is pretty cool, but I've found the sort of ceremony around using it to be a little bit too much, so I kind of made my own Redux... But it's actually not that hard, since Redux isn't doing that much for you. You can just make a big switch statement, with a bunch of cases which are event names, and as long as you have that structure, you're getting a lot of the benefits of architecting your app that way, without having to do everything exactly the way they want... But if I were to do this again, I might actually just use Redux, because I do think it does mostly the right things and most of the decisions they make make sense to me now.

**Jerod Santo:** Gotcha. Quick follow-up to the Google tool. The chat room is asking about this historical data Google tool - is there a pointer to that? Is that just inside GA, or is there a specific tool, that you can get a link that we can put in the show notes for that tool?

**Feross Aboukhadijeh:** Yeah, I can get the link. I think it's Chrome UX Report, maybe. So search for "Chrome UX Report." It's a little bit of a process to set this up initially for your site, but there's a little tutorial that they have up there. What it'll do is basically create a little PowerPoint type thing that shows you the historical data. It's unnecessarily complicated the way you set it up, but the data is really good.

You can also use this thing called Google Page Speed Insights. That one's a lot easier to use. You just type in a URL and it'll tell you the real-world page load times for that site... But it's only the current stats. So as of yesterday, what are the numbers for that site. You can't get the historical data if you just use that tool, but it's pretty good to get an idea of where your site falls on the user experience spectrum, I guess.

**Jerod Santo:** Very cool. Okay, the last thing before we call it a day is the future. You know I want that continuous playback, so I'm gonna resubmit my feature request. \[laughter\] Once you give me that sweet midi, and then I go do something else, don't stop. Just keep them coming. That's my feature request. But what else do you have coming down the pipeline? What's the future of BitMidi look like?

**Feross Aboukhadijeh:** You know, after I did all this, I realized that there's actually a different C library that makes the midis sound better when they're played back, so I kind of wanna go and Emscripten a different library now. It's gonna take another few days, I think.

**Jerod Santo:** \[unintelligible 01:02:58.21\] Better sound is always better, right?

**Feross Aboukhadijeh:** Yeah. I think the sound could be better. There are certain instruments that don't sound that good. There's a clap instrument that's supposed to be like hands clapping, but it just sounds so wrong in the current implementation... I don't know whether it's the instrument that's off, or if it's the midi player that I compiled, but I would like to try this other one. It sounds a lot nicer. It's called FluidSynth. I hadn't heard of it before, but someone on Hacker News pointed me to it, and it sounds really good. There's an instrument pack for it. It's only 30 MB for all the instruments, which is really impressive.

**Jerod Santo:** Oh, nice.

**Feross Aboukhadijeh:** They're synthesized, they're not actually using samples, like recorded audio samples from the instruments. They're synthesized, so I assume it's mostly code that's generating -- maybe there are some samples in there, but they're able to compress the size down by filling in most of the information with code that generates the sound. That seems pretty promising, so I want to try that, to make it sound a lot better. And I agree with you, continuous play would be great... I just haven't done it yet.

**Jerod Santo:** \[01:04:02.26\] \[laughs\] That's why I brought you on today, to get my feature request in. That's our secret here with Changelog shows - they're all just Trojan horses for feature requests... So I just trapped you. Nah, I'm just kidding.

**Feross Aboukhadijeh:** \[laughs\] One of the things I was trying to do with this site, by the way, is not fall into the trap of building it, and then putting a bunch of time in and then finding out later that the site isn't gotta ever get any users, because no one cares... So one of the things I've been doing is I have a couple of lists in my to-do list application where I say "This is a feature that I'll do only when the site gets this many monthly users." The continuous playback is in the section right now of 10,000 monthly active users. That's a feature that I'm like, "I'll do that once the site gets 10,000 people using it every month."

Maybe that one should be in there, because arguably that's preventing more people from using it, right?

**Jerod Santo:** Okay, now I'm getting my opinion out there - that's probably one of the most sticky features, because I go there and I'll share a link and we'll laugh about it, and we'll be like "This is cool!" Like I said, I like to hang out in the Zelda sounds, but if I could just have a list... Like, when it stops making noise, I forget about it, and it's just in a background tab. Now, that's just one person, so don't take the feedback of a single user and extrapolate too far, but it's potentially a sticky feature, that's all.

But I like the fact that you're giving yourself thresholds, especially with a fun project like this. Like, don't put too much continuous effort into something that is cool and fun and interesting, but is ultimately not going to have continued use... Because you wanna build features for people, not for fun.

**Feross Aboukhadijeh:** Yeah, totally. I think this does have potential to be continuously used. I've put a little bit of effort into search engine optimizing the page a little bit, so that it can actually show up in Google... So maybe this will actually get more popular over time, even without me doing any active promotion of it; that'd be pretty cool. But yeah, there are some advanced features that I don't wanna add until I know that there's gonna be a lot of people who benefit. Maybe continuous play should already be in there.

I'd rather err on the side of doing less than more, just because I don't wanna -- I could do a bunch of stuff with keyboard shortcuts, or user-contributed tags, or a view of the midis that shows sheet music, or a visualizer, or an up-voting system... All this stuff is cool and I'd love to do it at some point, but right now -- actually, I was looking at the latest traffic numbers here... Interesting, it has around 6,000 monthly active users right now.

**Jerod Santo:** Oh, you're almost there.

**Feross Aboukhadijeh:** I'm almost there for the continuous play. \[laughter\] You've just gotta promote it a bit more, Jerod.

**Jerod Santo:** \[laughs\] Just push it real hard, yeah. Changelog's gonna feature BitMidi for the next three months, until there's 10,000 people.

**Feross Aboukhadijeh:** \[01:06:44.21\] \[laughs\] I think this approach is kind of cool, because I noticed as an engineer -- actually, I did this at the startup I did... We basically built this thing which we thought people would want for eight months, and then at the end we were like "Is anyone gonna pay for this?" We had this cool technology, but we did it in the wrong order. We should have made sure that it was a thing people wanted and would pay for first, so we could have built a lot less in order to find that out. In fact, we could have built nothing. We could have just talked to them and found out first, but because we're engineers... I wanted to get into the code and be like "Is this possible?"

I guess it's another common engineer -- we were talking earlier about software people not promoting themselves enough...

**Jerod Santo:** The culture.

**Feross Aboukhadijeh:** Yeah. I think another common failing of engineers is wanting to solve all problems with code. I've been trying to mix in contacting the press to get them to write about it, and waiting for the traffic to get high enough, and doing what I can to get that up before I go and invest more time into adding stuff to it. Yeah, I don't know... I think it's a good way to make sure you don't go down the rabbit hole and spend a month building a feature for a site that might not grow. But I think this is looking pretty good. I do wanna keep working on it more.

**Jerod Santo:** The counterpoint to those decisions is if you are personally a prime user, if it's your own enjoyment, and t is a hobby or it's a side project, and you still want it to be used by many people, but if it's a feature that you personally want to use - that's the other excuse to build it, right? As opposed to "This will serve lots of people." It's like, "Well, this will directly serve me and I will have a happier life because of it", then go ahead and build that feature.

**Feross Aboukhadijeh:** Yeah, that's true. And continuous play would actually do that for me, because I'm personally also annoyed whenever -- I wanna go and play all the Pokémon midis, or all the... What's the other one? Do you know the anime Fullmetal Alchemist?

**Jerod Santo:** I do. I didn't watch it, but I know of it.

**Feross Aboukhadijeh:** Yeah, they have a bunch of midis in there and I wanted to play them all. I have the problem as you.

**Jerod Santo:** All I wanna do is load up all Rick Astley's music. I know you've got five version of "Never gonna give you up" in there. I just wanna get Rick rolled continuously by myself. Can we just get that done...?

Well, Feross, this was awesome. BitMidi is cool. We're hitting up against a hard stop for you, so I wanna be respectful of your time.

**Feross Aboukhadijeh:** Yeah, no worries.

**Jerod Santo:** Any final words on BitMidi before we call it a show?

**Feross Aboukhadijeh:** Yeah, I think people should build more random, weird things, make the internet weird, and keep it weird, and just build stuff that you want to see exist... And don't be afraid to share it. Share it, and if you wanna message me your stuff, I'll share it out too, on my Twitter. If you build cool stuff, it should definitely be seen by people. Don't be afraid to blast it out, so that people see your stuff.

**Jerod Santo:** Very cool. Build cool stuff, keep it weird... And let Feross know, he'll help you share it. Thanks so much, Feross. This was an awesome conversation. We'll see you all next time.

**Feross Aboukhadijeh:** Alright. See you, Jerod.
