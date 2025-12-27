**Adam Stacoviak:** Don't mind me, I've got a little cough drop in my mouth there... I've got this nasal drip, so if I sound a little nasally, that's why. But I do have hot water, a tablespoon-ish of honey, and a little lemon. So...

**Alex Kretzschmar:** That's what you need. A spoonful of sugar helps the medicine go down, so they tell me.

**Adam Stacoviak:** Wow... Gosh, that's so good. So good. Alex, how are you, man? How's life? You good?

**Alex Kretzschmar:** Mostly good.

**Adam Stacoviak:** Mostly good.

**Alex Kretzschmar:** I mean, you see me here in my attic studio in Raleigh, and we've had the house on the market for three, four months now... We're trying to move back to England.

**Adam Stacoviak:** That's right, yeah.

**Alex Kretzschmar:** But nobody's buying houses right now. So we're kind of living in this perfect show home of a house, and --

**Adam Stacoviak:** Because you've got it all ready to sell... It's always clean... It's always clean, so you can show it...

**Alex Kretzschmar:** Yeah. It's nice...

**Adam Stacoviak:** You're in the middle of a recording... You've gotta show it in an hour, "Gotta end the recording and go", right? Is that how it works?

**Alex Kretzschmar:** Yeah, that's it.

**Adam Stacoviak:** Well, London's calling... Is this on air material, a little bit of it, or no?

**Alex Kretzschmar:** Yeah.

**Adam Stacoviak:** Are you cool with that.

**Alex Kretzschmar:** Yeah.

**Adam Stacoviak:** Okay. Just in case.

**Alex Kretzschmar:** Yeah. Well, if we don't end up selling, we'll stay. What choice do I have...

**Adam Stacoviak:** That's right.

**Alex Kretzschmar:** ...if the place doesn't sell?

**Adam Stacoviak:** It is what it is, right? I hate that phrase, "It is what it is..." I feel like it's just such a -- such a give up moment, you know what I mean?

**Alex Kretzschmar:** You know, many years ago when I was working at the Apple store, we used to have these little bets on the genius bar about how our conversation would go from the opening line... And if someone used the phrase "What it is, is", we'd be like "Uh-oh... This is going to be a good one."

**Adam Stacoviak:** Oh... "Tell me your story about how your photos don't sync to grandma's device", or "There's offloading happening", or "Where are my apps?"

**Alex Kretzschmar:** I'll tell you, there are only so many times you can reset someone's iCloud password within the same 10-minute appointment without losing your sanity.

**Adam Stacoviak:** Yeah, that's -- how long ago was that for you? About a decade, or more?

**Alex Kretzschmar:** Yeah, a long time.

**Adam Stacoviak:** 15 years?

**Alex Kretzschmar:** iPhone 4 era, so... When was that? A long time ago.

**Adam Stacoviak:** 2008?

**Alex Kretzschmar:** Yeah, maybe. '10, '11, '12, maybe... I don't know. Something like that. A while.

**Adam Stacoviak:** Well, I guess 2007 was the first one... So --

**Alex Kretzschmar:** I was there when the iPhone 4 launched. I remember we had a... Because it wasn't available in many --

**Adam Stacoviak:** That was the best one.

**Alex Kretzschmar:** I think so... It was certainly a really good one.

**Adam Stacoviak:** I mean, the current version is an iteration of the iPhone 4, right? It's the same blocky feels...

**Alex Kretzschmar:** Really? But I remember it wasn't available in many countries at that point. So what ended up happening was we'd get a bunch of what we called resellers queuing up outside the store first thing in the morning, with thousands of pounds in cash in their pockets, buying as many iPhones as we could sell them, to ship them off to Dubai, or Abu Dhabi, or just... It was all Arabic customers that we had purchasing these things for resale. It was kind of crazy, actually.

**Adam Stacoviak:** Yeah. And that was back in London?

**Alex Kretzschmar:** Yeah. Well, Manchester, but yeah.

**Adam Stacoviak:** Manchester. Forgive my lack of geography understanding of the United Kingdom. I just, I don't know where things are at -- I've never been there to know where things are at...

**Alex Kretzschmar:** It's \[unintelligible 00:05:50.07\] I say London to Manchester like it's a big deal, but it's probably no further than Houston to Dallas, in reality.

**Adam Stacoviak:** So like four or five hours, kind of thing?

**Alex Kretzschmar:** Yeah. It's pretty close, really.

**Adam Stacoviak:** Well, if you said Dallas, and I lived in Austin, I would say Austin, because... It's Austin. Or Houston. So I get the correction. I get the correction. Interesting, interesting. Well, friends, if any of that made it into the show, which I imagine some of it might - maybe all of it, who knows...? This is my good friend, Alex. We've become friends over the years.

**Alex Kretzschmar:** Hello!

**Adam Stacoviak:** Big fan, as you know, Alex, of your podcast, that is no longer in place... Man, self-hosted is such a wild world these days, bro... Obviously, you know... I was the last -- I don't think the last time, but like one of the last times we talked, I was surprised by your creation of... What was it? Linux Server IO. Is that right? Is that what it was?

**Alex Kretzschmar:** Yup.

**Adam Stacoviak:** Gosh. And we found that out, and you were the very first entry in there, because obviously, you started it...

**Alex Kretzschmar:** Yeah, it was my personal blog, and then it morphed into something else.

**Adam Stacoviak:** And now it's like where the trusted images of all your favorite things as a home labber, that's usually your source. Maybe if you're running Plex in a container, you're running that Plex container... I'm personally not; I'm using the official Plex media server.

**Alex Kretzschmar:** Well, fun story with that one... Plex actually approached us back in the day to help them write that Docker container. So technically, you're just running a fork of the Linux server container, technically speaking.

**Adam Stacoviak:** Technically. Okay... A derivative.

**Alex Kretzschmar:** Yes. A derivative is more accurate. Yeah, it was a fun project, because you know, 10-15 years ago, whenever it was now - I'm getting old - there was just no standardization in the containerization space. People weren't writing -- if they existed, they weren't writing coherent documentation at all, and there was no kind of standardized base image pattern, or anything. And there is some weirdness in how the Linux server images ended up architecting around S6 to have like this init system inside the container... Because obviously, if PID 1 dies, then the container dies with it... And some of the services need multiple things running inside the same container. So it's a bit of a weird thing trying to containerize some of these apps that were written before containers were really the native deployment format for server software in general now.

**Adam Stacoviak:** \[08:23\] Yeah. How do you feel about the Podman/Docker war? Do you feel like it's a war that's won? Are you a Podman person? What's your feels?

**Alex Kretzschmar:** I'm not. You know, I'm ex Red Hat, so I really should be pro Podman, shouldn't I?

**Adam Stacoviak:** Yeah...

**Alex Kretzschmar:** But the thing that Podman misses for me is it's a very purist implementation. So it's extremely technically sound... What it misses for me though is some of the user spice on top. That last 10% that Docker closed in terms of usability. Because all the primitives for Docker pretty much were there before Docker came along. It was just the packaging of Docker with the standardized image format that really made it take off. The trouble with Podman though is when you want to do basic stuff, like even just mounting a volume, you've got to do this user ID shuffle, because --

**Adam Stacoviak:** Really?

**Alex Kretzschmar:** I'm talking specifically about rootless Podman here. You've got to do this user ID shuffle, because the user IDs inside the container don't map to the IDs on the host properly, unless you do this shift... And so it ends up being this world of complicated UID scripts, shuffling nonsense that I just haven't got time for.

**Adam Stacoviak:** Huh. I guess I'm not that much of a Docker user to know exactly what you're talking -- I definitely mapped UIDs to UIDs, but I never really hit the issue. I do know if you mismatch on ownership there's an issue, but that's -- I sort of leave it to the AI, or the Stack Overflows, or something else that's like slightly above my pay grade.

**Alex Kretzschmar:** Well, I'll break it down as best I can, just really simply... So in a rootless Podman container, you end up shifting the user IDs by roughly 100,000 or so. It depends on how you've got it configured. So on your host, you would probably have a user ID of something like 1000.

**Adam Stacoviak:** Right. 1000, yeah.

**Alex Kretzschmar:** Inside the container, it would be the user ID 100,000 and 1000. So like 101,000. So you've got to find a way to map those IDs from what the container sees to what the host can speak, so that the file permissions for those bind mount volumes actually work. And that whole mess -- the fact I've just had to explain that to you is exactly my point.

**Adam Stacoviak:** Yes, I'm feeling your point.

**Alex Kretzschmar:** With a daemon that Docker has running as root - yes, there are some security implications with that, but also comes simplicity for the user experience.

**Adam Stacoviak:** Right. This is the world of like potentially SE Linux, I think... Like, you maybe mentioned Red Hat... Does that play into it at all? Like, this whole purist security Linux thing that I'm sort of just being exposed to. I've just now moved to Fedora 43... First time I've ever ran Fedora as a desktop, even.

**Alex Kretzschmar:** Oh, cool.

**Adam Stacoviak:** I'm loving it, honestly. It's really cool. Traditionally, I've been an Ubuntu server kind of guy. I only really ever ran Linux as a server, never as a desktop. And so only the last few months have I actually taken the plunge and began to run a system that's based on Linux. And honestly, Silicon Valley back there is running on Fedora 43, just so you know...

**Alex Kretzschmar:** Alright. Good. Yeah. There's some other interesting stuff that Podman does as well. They have this thing called the quadlets. Don't know if you've heard of Podman quadlets.

**Adam Stacoviak:** Not yet.

**Alex Kretzschmar:** It's a bit of a silly name... But essentially, they're SystemD units that let you run your Podman containers as SystemD units, instead of using something like Docker Compose to define the state of the world that container would see.

**Adam Stacoviak:** Okay. Yeah, so you have a .service file for it instead.

**Alex Kretzschmar:** \[12:03\] Effectively, yeah. I know I give Podman a hard time, but it does do some stuff really well.

**Adam Stacoviak:** Well, I didn't ask you to talk about Podman at length, but I'm really curious about this... So I think the one thing you mentioned and just glossed over, which may be super-important, which is rootless versus root... That seems to be the divider there, which is the big reason why people think they want to use Podman. It's more secure because it's rootless, versus root. That seems to cause problems based on what you've just said.

**Alex Kretzschmar:** Well, I come at this from the home lab angle; the pragmatist angle of "I just need my Plex \[unintelligible 00:12:36.07\]

**Adam Stacoviak:** "It's me, I'm secure", right?

**Alex Kretzschmar:** Exactly.

**Adam Stacoviak:** Right.

**Alex Kretzschmar:** Whereas I think a lot of the motivation for rootless Podman and that whole movement in terms of Bootc, and a lot of the...

**Adam Stacoviak:** Ooh... You went there.

**Alex Kretzschmar:** ...containerization changes that are happening is because of the enterprise, where that stuff does matter, where SE Linux does matter, AppArmor does matter. But in my home lab, I don't care.

**Adam Stacoviak:** "I don't really need that stuff." Yeah. I mean, even if you had an API locally that you were doing something with, no auth, right? Why do you have auth? No auth? Tiered auth systems. Like, if I'm external --

**Alex Kretzschmar:** I'd just get annoyed.

**Adam Stacoviak:** Yeah. Like, there's no auth for an API I'm writing locally. That's just causing problems. I don't need to authenticate to my own API, in my own home lab. I can trust me, okay? I'm the admin here. We need a shirt that says "I'm the admin here."

**Alex Kretzschmar:** Yeah, it's true. Yeah, "Look at me. I'm the admin here." If anything though, my adoption of Tailscale over the last few years has made that stance of mine even stronger, because I have no ports, nada, opening my firewall anymore. Nothing.

**Adam Stacoviak:** I only have Plex.

**Alex Kretzschmar:** Oh yeah, maybe, for the --

**Adam Stacoviak:** That's my only port open.

**Alex Kretzschmar:** ...the advertisement of the server for friends, right?

**Adam Stacoviak:** Right. And we do external watching, for my kids mainly. I mean, I do have to watch Silicon Valley in a pinch, here and there, okay...? So I might be on the subway, or something like that, which - we have no subways here; I'm just making a story up. But I've gotta get my --

**Alex Kretzschmar:** This is America, we don't do subways. \[laughter\]

**Adam Stacoviak:** You know...? We don't have subways around here... No, the ground's too hard here in Austin to do a subway. Like, it's rock under there. I mean, I think Elon may be trying to find a way to make a hole, but we'll see.

**Alex Kretzschmar:** My land is a trusted zone, completely.

**Adam Stacoviak:** Do you VLAN a lot then? I imagine you probably have an IoT VLAN at least, right?

**Alex Kretzschmar:** I do. Yeah. So when some random piece of IOT junk arrives off Amazon, it's not getting on the same VLAN as my server. That's just not happening.

**Adam Stacoviak:** Yeah.

**Alex Kretzschmar:** But other than that --

**Adam Stacoviak:** And the issue there is that it might be shipping software onto it that's got a rootkit or something like that that could be trying to infiltrate... Or like \[unintelligible 00:14:46.27\]

**Alex Kretzschmar:** You just don't know. It could do that. It could just have an algorithm that crawls open SMB shares and lists the file directories.

**Adam Stacoviak:** Oh, gosh... That's fearful.

**Alex Kretzschmar:** I don't know. I mean, who knows what these things are doing, or capable of? ESP devices over the years have gotten so capable... I watched a video just last night of a guy that built, using one of these ESP32s, a little display; like a Need for Speed kind of like mini map for his car... And he had like 2.5 million map tiles that he generated for the UK, and had petrol stations on it, and restaurants... It was really cool, actually. So they're very capable devices, is my point. You just don't know what they're up to.

**Adam Stacoviak:** Gosh... Do we want to go to Bootc? I mean, do you have anything good to say about Bootc? What's your thoughts on Bootc?

**Alex Kretzschmar:** I think it's a really interesting development. I don't know a huge amount about Bootc technically, but in terms of where it fits in in the space, I think it's a logical conclusion of where things should go next. The immutable atomic OS...

**Adam Stacoviak:** Are you able to describe Bootc, so that folks can follow? I'll try, but I won't do a good job. I'm gonna put it on you.

**Alex Kretzschmar:** Yeah. Well, you go first and I'll look it up.

**Adam Stacoviak:** \[16:03\] Okay. Uh, geez... What I know about Bootc - it's out of Red Hat, it's part of their world, essentially, and they're setting this up... It's essentially a system that can change itself underneath, and it's... What's the right word? You can't change the system. It's immutable. So what you have is what you have, and you can update underneath your data... But that's the part I don't get. And I know that Steam Deck, and some other gaming things are doing on top of it is really cool... I just don't know what's cool about it yet, aside from being able to build your own Linux distro for yourself, potentially. That's kind of where I've been dabbling at. And when I say 'dabbling', just a moment, and I got scared and I ran away. That was all of it.

**Alex Kretzschmar:** Did you go to Red Hat Summit this year, per chance?

**Adam Stacoviak:** I did not. But I did go to... Texas Linux Fest!

**Alex Kretzschmar:** Oh... It's the first one I haven't been to, in maybe seven or eight years.

**Adam Stacoviak:** Oh, man... I think I reached out last year and I was like "Hey, I might be there" and I didn't end up going. And me and a buddy went, and thank you to Carl George from Red Hat for the invite...

**Alex Kretzschmar:** Yeah, Carl's a good dude.

**Adam Stacoviak:** ...and all the folks who are running that conference. It's an amazing conference. If you're even close to Texas during Texas Linux Fest, you're missing out if you don't go. Seriously, it was a blast. I was at two workshops, both amazing... It just is like one of those really feel-good, regional Linux conferences, so you get that regional feel, where it's sort of small and intimate... But all the right people there to sort of still go deep into this world of Linux.

**Alex Kretzschmar:** Did Carl share with you any of his pocket meat?

**Adam Stacoviak:** No. Does he have pocket meat?

**Alex Kretzschmar:** \[laughs\] Yeah. Carl George... I met Carl for the first time - it must've been 2017 or '18 at Texas... And he was "Hey Alex, how you doing?" You know, in the way he does... "Hey, Alex, would you like some of my pocket meat?"

**Adam Stacoviak:** He's a very jolly person.

**Alex Kretzschmar:** "You're a complete stranger. Why are you offering me your meat?" \[laughs\] But it turns out he lives in San Antonio, and there's this meat market near his house... And so he came out for All Things Open in October to Raleigh, and I literally placed an order with him to bring me vacuum-packed packages of San Antonio meat market meat to Raleigh, so that I could get my fix of Texas barbecue remotely.

**Adam Stacoviak:** Oh... Yes, Texas barbecue. Yes... Good old Texas barbecue. It is the best...

**Alex Kretzschmar:** If I lived in Austin, I'd be the size of a house. I mean, it would be a problem, I think.

**Adam Stacoviak:** It would be a problem. It's a problem around here, okay? Texas is big, and so are the people. People in Texas are big people. But not everybody... But some of them, pretty big.

**Alex Kretzschmar:** I still need to make it out to something like Salt Lake, or something like that. I mean, I've done the Franklins, I've done the... What's it called? Down by the river... Terry Black's. You know, \[unintelligible 00:18:50.11\] I need to do some of the others.

**Adam Stacoviak:** If you came here, I would happily take you, and we can take Carl, too. He can come, too. You're invited, Carl.

**Alex Kretzschmar:** \[unintelligible 00:19:04.28\] but you'd find time.

**Adam Stacoviak:** Yeah, yeah.

**Alex Kretzschmar:** \[laughs\]

**Adam Stacoviak:** I would probably -- so I've been wanting to take him... We've been meaning to meet, Carl and I, at Salt Lake... Which - I live about 10 minutes from the original Salt Lake. So the one that began it all for Salt Lake. And it's like going to somebody's backyard ranch, and their house. It's so cool that it's not even like restaurant feels; it's like somebody stood up a little barbecue in their house and it just started to morph over time.

**Alex Kretzschmar:** Well, that's probably exactly what it was.

**Adam Stacoviak:** Well, that's exactly what it was. It was like "Hey, let's make some barbecue. Oh, people come and eat it... Oh, cool. Let's keep doing this." And there you go. There's nothing wrong with Salt Lake. They're good. It's not my favorite, though. But it's still amazing. So you can't go wrong. I would take you to The Switch, which is near here... I think it's under-known, and... It's just so awesome, man. They've got a really good platter, they've got an amazing chopped brisket baked potato... I mean, just like a little baked potato, with chopped brisket in it. I mean, come on... Is your mouth watering?

**Alex Kretzschmar:** \[20:15\] I'm hungry now. We're not far off lunchtime for me.

**Adam Stacoviak:** The Switch, I would take you there.

**Alex Kretzschmar:** Yeah, that's quite -- I'm just looking at it on a map. That's quite a ways outside of the city limits, too.

**Adam Stacoviak:** It is, but it's really close for me. So I live about 10 minutes West of The Switch.

**Alex Kretzschmar:** Nice.

**Adam Stacoviak:** So I live in that area there. Okay, Texas barbecue, Texas Linux Fest... Bootc...

**Alex Kretzschmar:** Well, we were talking about Bootc briefly...

**Adam Stacoviak:** Podman... Rootles... Well, we don't have to go into Bootc. I'm more -- you know what I'm interested in? I'm interested in the number. This number. Tell me if this number matters to you. Five zero, comma, zero zero zero. What does that mean to you?

**Alex Kretzschmar:** 50,000, yes.

**Adam Stacoviak:** 50,000, right? Congratulations.

**Alex Kretzschmar:** Thank you. Yeah, I think I know where you're going with this, but...

**Adam Stacoviak:** That's a feat. I mean, you've grown the Tailscale channel on YouTube from - I don't know what number, but... 50,000 is nothing to shake a stick at. That's awesome.

**Alex Kretzschmar:** About 1,600 subscribers when I took over...

**Adam Stacoviak:** Yeah.

**Alex Kretzschmar:** It's been a lot of work...

**Adam Stacoviak:** Does that make you happy? Does it make you sad? Do you feel content? Discontent? What are your feels right now when I say the number five zero, comma, zero zero zero?

**Alex Kretzschmar:** You know, to some degree the subscriber count itself doesn't matter that much... Because you can put out a video that gets 2000 views, and you can put out a video that gets 50,000 views, or 100,000, or whatever, and there's just no connection between the number of subscribers to the number of views you're going to get. But it is a nice vanity metric, and it is a nice thing to turn around to management and say "Look, we've got a big number. It now says 50,000." It's a nice signal, and I really appreciate everyone that has subscribed to the channel, of course.

**Adam Stacoviak:** Yeah.

**Alex Kretzschmar:** It wouldn't -- I mean, I wouldn't be able to put a roof over my head without people watching, so... It's quite humbling in a way, but it also in some ways doesn't matter that much. Like, maybe you understand what I'm trying to say about it...

**Adam Stacoviak:** I know what you mean, yeah. In the grand scheme of things, right?

**Alex Kretzschmar:** Yeah. I also kind of just feel like we're just getting started. I've just taken over as the head of developer relations for Tailscale about two weeks ago now... So we're putting together a plan to build out a team to support me on the backend, because up until today it's been just me. So I've been editing, scripting, filming... Doing everything.

**Adam Stacoviak:** Wow. That's a lot of work.

**Alex Kretzschmar:** It's too much.

**Adam Stacoviak:** It is too much.

**Alex Kretzschmar:** So we're putting together a plan, and there'll be some job postings going up in the new year... So keep an eye on the Tailscale Careers site - a little pluggy plug. If you want to work on my team, come do some video editing, come do some dev rel stuff, it'll be a good time.

**Adam Stacoviak:** Yeah. Well, I've been following, and actually, when I saw that number, I was like "Let me go check it out." And I think you're at like 52,000 now. So I think since that post, a few more thousand have subscribed. And then I saw a button there, and it said Subscribe, and I'm like "Gosh, Adam, you haven't subscribed to this yet?" Which is so weird, because that's how the algorithm works, which is probably why you say it doesn't matter if you have 50,000 subscribers or not... Because I watch your stuff, but I'm not a subscriber.

**Alex Kretzschmar:** Yeah.

**Adam Stacoviak:** And that's a weird thing.

**Alex Kretzschmar:** It's funny.

**Adam Stacoviak:** I kind of like that. I like as a consumer not having to subscribe to everything.

**Alex Kretzschmar:** \[23:37\] Well, because I generally think that good content -- there's a bunch of tropes on YouTube, and the people that rely on the Like/Comment/Subscribe/Smash that Like button, all those kinds of tropes that exist on YouTube. Like, if the content is good enough, you don't need to say any of that stuff. People watch people, they're not watching the Tailscale channel. They're just watching me and what I'm doing. You look at Linus and how he's had to grow his channel, sort of beyond the cult of just Linus... And obviously, he's way down the road from where I am, but... It's really interesting, he'll just make random cameos in videos that are hosted ostensibly by someone else on his team, and then he'll just helicopter in for five minutes and say a couple of pieces to camera, and then go away again. And you know that he hasn't done anything in like post-production, or scripting, or really been involved in the video at all, but they're really struggling to enter that post PC era, that post Linus era. Hopefully, Tailscale won't suffer from that problem, because I don't really chase the fame aspect of it, or I don't want to be famous, or anything like that. But I do want people to be as excited about stuff that I am as I am... And that's really my driving goal, is to just -- like this week, for example... I've set up a self-hosted image instance; you know, the Google Photos replacement.

**Adam Stacoviak:** Yes, tell me about this.

**Alex Kretzschmar:** Done by Alex and his team at Futo, and Lewis Rossman, in Austin, no less. So they're on your doorstep, dude. So I set this up, and I was like "I can delete Google Photos now." And I finally did it. I've actually finally deleted my quarter of a million pictures in Google Photos. It took me all weekend... You have to go through the web UI and select a maximum of like 10,000 images at a time. It's --

**Adam Stacoviak:** Really, one million, for real?

**Alex Kretzschmar:** Yeah, it was like a quarter of a million pictures. Yeah, it was quite a lot.

**Adam Stacoviak:** Wow.

**Alex Kretzschmar:** But Google makes it really difficult to leave. But anyway, I'm off the Google source, finally. It's about time the self-hosted guy actually did that, but... I was like "Well--" I bought my family for Christmas when my daughter was born five years ago some of those little Google picture frames. And so we just had this shared album where I just dropped photos in every few months, and then it would update their picture frames remotely... And I'm like "Oh. Oops... I guess I've just broken that workflow for them."

**Adam Stacoviak:** Just the favorites, basically.

**Alex Kretzschmar:** Effectively. Yeah. And so I came across this project called Immich Frame. And this lets you turn any device -- because it's just a web view. So you can run it on Android, iOS, and Apple TV, and Android TV... Just a web browser even. And it lets you turn any of those devices into essentially a Google Photos frame. So I can just drop pictures into an Immich album on my self-hosted server, connect this Android tablet that I'm going to give to my family for Christmas back over Tailscale to my house, and the same functionality exists, but it's all completely self-hosted and completely -- I own the whole shebang. That's what I love about this stuff. Getting people excited about that real world use case.

**Adam Stacoviak:** Yeah.

**Alex Kretzschmar:** It's like - yeah, Tailscale's cool, Immich is cool, and all that... People don't wake up in the morning and go "You know what I'm going to do? I'm going to sign up for a new VPN, and..." It's like the "Now what?" problem. How do I actually use this stuff, make it useful?

**Adam Stacoviak:** Right. I think my usage of Tailscale is pretty simple. I think I just connect my services and I don't do much, really... I'm not a deep Tailscale user, and I kind of feel bad. So I'm actually thinking about having Claude help me go deeper, because I'm just like -- I don't know how else I can use it personally... Aside from the obvious connected tissue of my home lab; that's really just it. And it's really just mainly -- I'm gonna show my colors here a little bit, but I think for me I will SSH into Cineplex, which is what I call my Plex machine... So I just type "SSH Cineplex", because that's what it's named in Tailscale. It's the name of the machine, the hosting. That's really - sadly, potentially; maybe you'll be sad by this - my use of Tailscale, is just easier hostname SSH around my home lab.

**Alex Kretzschmar:** \[28:04\] It's great. It's fine.

**Adam Stacoviak:** And the occasional external view of something of a service running. I don't have a lot of -- I could do better with that. I've got other problems I'm dealing with in my home lab, which is just writing a few more pieces of fun software for me...

**Alex Kretzschmar:** You know, home-labbing.

**Break**: \[28:22\]

**Alex Kretzschmar:** So how'd you do your backups, Adam?

**Adam Stacoviak:** Gosh, I don't have backups, Alex... I've got Raid, okay? I'm just kidding... I really don't have offsite backups, okay...? I'm not practicing 321. I'm in a situation I could -- like, it could go down... Right in this moment, it could just like catch on fire over there, and I will have to say "Get the thing, get the extinguisher" and put it out, and my stuff is gone. So I don't have backups.

**Alex Kretzschmar:** Well, there goes one of my pitches for you... It would be an offsite backup.

**Adam Stacoviak:** \[31:55\] Well, that could be a pitch, though. I need an offsite backup. So what would you do? How would you do it?

**Alex Kretzschmar:** Well, I have a friend in Canada... So I'll tell you how I do it. And so I have a ZFS array in the basement, which has just got, I think, five 20-terabyte hard drives in it...

**Adam Stacoviak:** Okay.

**Alex Kretzschmar:** ...and then I use -- it's a program called zrepl. Z-R-E-P-L, for zreplicate, I guess... And it essentially mirrors all of the ZFS blocks to Canada, which is where my friend lives. And he's got a similar-sized server -- he actually runs an MSP. So he just carved out a few user rack space for me to use there.

**Adam Stacoviak:** Nice friend.

**Alex Kretzschmar:** He's a very nice friend. \[laughs\] I'm sure he would offer you some rack space if you paid him a few Canadian rubles every month...

**Adam Stacoviak:** Yeah.

**Alex Kretzschmar:** And I just use Zrepl over Tailscale, because it's an SSH-based protocol for the replication.

**Adam Stacoviak:** Could you do the same thing with Hetzner, by any chance? Like, I don't know enough about Hetzner... I know you could do a lot of cool things with production machines, I know you can do some pretty decent sized builds, because you can choose your CPU and stuff like that... But do they have that level, of like ZFS (ZFS to me, because we're different)?

**Alex Kretzschmar:** My brain is so confused about that letter... Because it's in my name, Alex KTZ. People always give me a hard time about that one, and I'm like "Ahh..."

**Adam Stacoviak:** Yeah... I'm not giving you a hard time. I'm just being clear that I say ZFS. That's it.

**Alex Kretzschmar:** \[laughs\] I just pick whatever.

**Adam Stacoviak:** Could you do that with Hetzner, though? Could you do that with like a -- I don't have the friend, I wouldn't mind the friend... But for those who don't have the friend, how could you do the same thing?

**Alex Kretzschmar:** There's a couple of ways. I mean, the trouble with any cloud provider is that once you get over a few hundred gigs of storage, the cost becomes prohibitive pretty fast. So there's a service called - and I'm not affiliated with them in any way, but there's a service called zfs.rent. Go take a look.

**Adam Stacoviak:** Dang.

**Alex Kretzschmar:** What you do is you send them a hard drive, and they put it into a slot in one of their servers - I think in California, but don't quote me on that... And you pay them 10 bucks a month per slot that you occupy. So if you want 20 terabytes of offsite backup, you send them a 20-terabyte hard drive; it can be direct shipped from Amazon, or Best Buy, or wherever...

**Adam Stacoviak:** Wow.

**Alex Kretzschmar:** They'll rack the drive for you, and then they'll give you an IPv4 address and a VM, and then you use that as your ZFS replication target offsite. 10 bucks a month, job done.

**Adam Stacoviak:** That is good... That's a good find. I should get them on the show. This is a really -- I wish I thought about this. zfs.rent is the coolest domain ever... And then any notable person with RAID in their house has got to be running ZFS. And if it's -- I mean, if it's ButterFS, sure. Okay. BTRFS.

**Alex Kretzschmar:** There just aren't many alternatives. I know Butter gets a bit of a hard time, perhaps unfairly, but.. ZFS, at this point, really -- for me, there's nothing that comes close in terms of the reliability, the development trajectory that it has, with the \[unintelligible 00:35:10.21\] Klara systems with Allan Jude in Canada as well... TrueNAS, of course, has been industry standard for sort of normal people for a long time...

**Adam Stacoviak:** Mere mortals.

**Alex Kretzschmar:** Non-enterprise deployments, of like iSCSI storage, and... Anything you want to do for a small/medium business, whatever, TrueNAS is the answer. I just can't think of anything better. BcacheFS is kind of promising, but then there was that whole drama recently with Kent Overstreet and Linus Torvalds in the Linux Kernel mailing lists and development trying to sneak some weirdness there...

**Adam Stacoviak:** I'm unfamiliar.

**Alex Kretzschmar:** Oh, go look it up. It's a whole tranche of...

**Adam Stacoviak:** Stuff.

**Alex Kretzschmar:** Drama. Yeah.

**Adam Stacoviak:** \[35:55\] Oh, gosh... That's what we need, is more drama.

**Alex Kretzschmar:** Well, Bcache got accepted into the Linux Kernel, which you would think would be an amazing thing, right? We've now got another file system native in the Linux Kernel... Because this is one of the downsides of ZFS, is the licensing drama. Are you familiar with all that?

**Adam Stacoviak:** Loosely... I mean, I know about the origination in Sun, and the accidental open sourcing... I've talked to Matt Aarons before... We have a good friend at Oxide, and Bryan Cantril..l. So I kind of have some of the backstory of the Sun days, and... I guess not "Sundays", like the day of the week, but S-U-N space days... Capital S, u, N.

**Alex Kretzschmar:** Sun Microsystems.

**Adam Stacoviak:** Yeah, Sun Microsystems. And it's got an interesting history. And I think even the accidental open sourcing of it was really wild, and then now you have OpenZFS... I don't know -- and Allan Jude came on the podcast and talked about, and really got me wanting to become a BSD nerd... And I tried for a little bit; I just did enough to be familiar... But I just was like "Okay, Linux is really for me." I just don't need what BSD has. And it felt like an uphill battle for me, personally... But I get it. I get it. But the licensing thing is really where it's at. The issue, at least.

**Alex Kretzschmar:** The trouble with BSD is I learned Linux first, so all my muscle memory is Linux.

**Adam Stacoviak:** Same. That was me.

**Alex Kretzschmar:** And just stuff like the way that grep works, or sed works, or just basic command line utilities like that... It's just different enough in BSD land that I'm like "I'll just go back to what I know." There's a lot to like about the BSD universe. There really is. But it's just never stuck for me.

**Adam Stacoviak:** Yeah. So offsite backups, zfs.rent... Unaffiliated. I don't have any experience with it, so if you check it out, y'all... Your mileage may vary. Report back, of course...

**Alex Kretzschmar:** The other option you've got - it's just a Raspberry Pi with a USB hard drive, and shove it under the stairs at your mom's house, or something, you know?

**Adam Stacoviak:** So how does that work then? I mean, ZFS is so RAM-intensive... But I guess for a backup you don't need a lot of RAM, right?

**Alex Kretzschmar:** Precisely.

**Adam Stacoviak:** Is that the idea? It's just a backup, so the arc can be small.

**Alex Kretzschmar:** You are not going to be limited by the performance of the Raspberry Pi, you're going to be limited by the performance, presumably, of your internet pipe.

**Adam Stacoviak:** Right.

**Alex Kretzschmar:** That's going to be the bottleneck.And even if you do end up being limited by some local thing on the Raspberry Pi, it's a backup. Does it matter? It's going to run overnight, every night, for the next 5, 10, 20 years, whatever. So if it takes an hour or it takes six hours, who cares?

**Adam Stacoviak:** I have to do this. You've given me a Christmas present. Thank you, Alex. This is my new --

**Alex Kretzschmar:** This is what motivates me, dude. It's just, like, solving real problems for people. So I'm glad to hear that.

**Adam Stacoviak:** I like that. Okay. So Immich is what you stood up... You're off of Google Images, if I understand correctly. There's no favorites list, like (I presume) in Google anymore; you've gotten a whole new hosted system that is Immich all the way... And your family is still happy with their Google frames.

**Alex Kretzschmar:** The family - one of the family texts me this morning and said "My photo frames stopped working." And I'm like "Oops..." I might have pulled the trigger a bit too soon on the deletion, but... I just wanted to stop paying Google eight bucks a month for the two terabytes, you know?

**Adam Stacoviak:** Yeah. How many hard drives did you buy?

**Alex Kretzschmar:** Well, for eight bucks a month, amortized over five years, I can buy probably two 20 terabyte drives.

**Adam Stacoviak:** Yeah. It's not the end of the world... I mean, there is some value there that you don't have to manage it, but now you've got your friend; you've got your friend in Canada...

**Alex Kretzschmar:** \[39:49\] Well, I'm also not training Gemini's future models with my images, and the images of my daughter. There's a huge digital sovereignty aspect to my motivations for getting off the big tech train when it comes to really deeply personal data like photos and documents. I mean, I'm sure many of us use Gmail even, and I've been a Gmail user since, I guess, 2004, 2005 era, when it was cool and a beta product. And I look back at the original emails, I'm like "Oh, my God..." Every email I've had in the last 22 years, they know what it is. It's a lot of data. It's a big dataset.

**Adam Stacoviak:** You get paid to run a home lab, though. Would you say that? Is it fair to say you get paid to run a home lab, for the most part, or play with a home lab?

**Alex Kretzschmar:** Uh...

**Adam Stacoviak:** Well, you get paid to make videos...

**Alex Kretzschmar:** The phrase "If you do what you love, you never work another day in your life" is very true for me. I'm extremely privileged and lucky to get to do what I do. Thanksgiving weekend was just a couple of weeks ago as we record, and I decided that I was going to learn Kubernetes over the weekend.

**Adam Stacoviak:** Oh. How'd that go?

**Alex Kretzschmar:** And I spent the whole weekend glued to my laptop, and I had a great time, and I've now got a three-node Kubernetes cluster in a closet, and it works great. And then I was able to turn that into a piece of content for work. So for me, I'm just very privileged. This is what I'd be doing anyway... So the fact that I get paid to do it is just a huge bonus for me.

**Adam Stacoviak:** Yeah. Can we maybe touch quickly on -- I guess, as long as you'd like to, actually; I said 'quickly', but however... These are the fields that I think get exposed through vibe-based podcasting, let's just say. I've got this vibe that going to Tailscale from being a podcaster -- I don't know what else you did then, so I'm not going to diminish what you were doing. I don't know. I know you were running the podcast, then you got the job at Tailscale... What were you doing before that? Were you consulting, or...? What I'm trying to get to is how was it to go from podcaster, that I knew you of at least, and then now you work for Tailscale to produce content there.

**Alex Kretzschmar:** I was a Red Hat consultant in Europe for a year or two, and then I moved to the States, and I got a job as a TAM, sort of managing OpenShift accounts, and things... It was fine; it was pretty boring... As long as the customers were happy...

**Adam Stacoviak:** What's a TAM?

**Alex Kretzschmar:** A technical account manager. I'm sorry.

**Adam Stacoviak:** Okay.

**Alex Kretzschmar:** So yeah, I basically have, I don't know, half a dozen accounts assigned to me, and I would have weekly calls with those customers - big, big spend customers - and make sure that they were getting value for money. And that their support tickets were being slipped through the queue correctly, and if there was anything new coming with -- like, I was there during the OpenShift 3 to OpenShift 4 transition, which was a big shift from a RHEL base to an atomic immutable base OS image, and re-architecture of around CoreOS, and Project Atomic, and all that stuff for Red Hat. And just helping customers navigate the complexities of all that stuff, and just telling them what they need to know ahead of time... And so there's a lot of skills in that that actually translate pretty well to video. There's also a lot of skills that translate from being on the genius bar back in the day to being personable, and being on video, and figuring out what someone's problem is, and then presenting it to them in a way that they can understand. So where I am now is like the summation of an entire 20 year journey, really, of just failing upwards. \[laughs\]

**Adam Stacoviak:** Talk to me about the personal feels though of getting to go from, I guess, seems like interesting work, but maybe not so fulfilling, based on what you're saying... You were running self-hosted, at the time, I believe, right?

**Alex Kretzschmar:** Yeah, yeah.

**Adam Stacoviak:** And that podcast has since ended. And then you go to Tailscale... Being able to go and create content... Like, "Hey, I used to do this stuff for free." Marginally for free. Sure, you probably had some sponsors to maybe cover some rent, or some things like that, some pieces, but not the full paycheck necessarily to get to do it as a job.

**Alex Kretzschmar:** \[44:10\] Well, you've got two routes to go as a content creator, don't you? You've got one which is to do it the really hard way, and do it yourself, and bootstrap your own small business, and interface with all these different companies, and manage sponsorships, and negotiate every cent that they give you. Then you've also got to be a creator, and an editor, and just... You've got to be 5 to 10 different roles in one. I chose to go an equally difficult, but totally different path, of trying to do that, but within a corporate organization, a startup organization.

I've been really lucky in so much as that the Tailscale channel doesn't have to pay for itself in the traditional way that, say, any other content creator has to pay for itself, because it's a brand awareness play, ostensibly. That's the purpose of the YouTube channel, is just to say "Hey, look at Tailscale. Look at the cool stuff you can do with Tailscale." And that's it. We're not reviewing products, we're not taking placement sponsorships, we're not doing any of that other stuff... Which I kind of find a little bit dirty, to be honest. I don't ever really enjoy doing that stuff. It's a necessary evil. I understand, everybody's got to eat. But the attention that you're selling as a content creator, you're monetizing that attention for - well, money, I suppose... \[laughs\]

So yeah, it's nice to have insurance, it's nice to have a paycheck and all that kind of stuff, doing it the Tailscale way... I don't know where it will end up, though. I mean, I really -- I love what I do. I mean, the fact that I get a paycheck reliably every month is fantastic. But there's that phrase... Do you remember -- of course, you've got Mike Judge playing behind you on Silicon Valley... You remember Office Space, right? Where he has the interview with the Bobs...

**Adam Stacoviak:** Yes...

**Alex Kretzschmar:** If \[unintelligible 00:46:01.09\] ships a few extra units, I don't see an extra dime. Where's the motivation?

**Adam Stacoviak:** Right...

**Alex Kretzschmar:** And of course, my motivation is I get a paycheck every month... But if the channel goes from 1,600 subscribers to 53,000 subscribers, I still get paid the same, you know?

**Adam Stacoviak:** Yeah.

**Alex Kretzschmar:** I suppose the validation is that I can --

**Adam Stacoviak:** You could negotiate, though... Right?

**Alex Kretzschmar:** Well, I suppose...

**Adam Stacoviak:** You could hinge some hallmarks and some milestones... Well, you get to hire too, so you get to make some friends...

**Alex Kretzschmar:** Yeah, yeah. I suppose the validation is the promotion, is the fact that I'm still employed, is... Lots of different positive signals. But these are the sorts of things that you think about in the shower, and just at like 2am your mind starts going, you're like "Well, how can I maximize just everything? How can I maximize it for Tailscale ? How can I maximize it for Alex? How can I make sure that the audience is getting the most out of it, too?" Because ultimately, if the audience is happy, that will drive everything else down the road. So really, my focus isn't on me, it's not on Tailscale, it's on what people want to see, and need to hear, and want to hear. Some of my best-performing content has been hour-long deep-dive tutorials in how to set up a self-hosted server from scratch. It's got nothing to do with Tailscale, does it? But it's on the Tailscale channel... And so it's a really weird, unique thing. And I've started to see other competitors of ours copying that strategy... Which is kind of interesting, but...

Yeah, it's a very unique way of doing DevRel. Because if you think about what developer relations typically do, they'll be hacking away on SDKs, and API code on the backend... And people don't really see it, unless you're a developer and you want to integrate with back in the day Twitter, or something. And then they might go to a conference and talk to a room full of a couple of hundred people, and that talk is never seen again.

\[47:58\] Whereas what we're doing is effectively that same cycle, that same loop, but we're not focused on the developer aspect as much, we're focused on the end user, the top of funnel user, a mythical person, and getting them excited about using Tailscale for free, and hopefully they have such a good time that they then go "Why aren't we doing this at work? Why are we doing open VPN? Why are we..." And hopefully, then that motion turns into a sale two, three, four years down the road, whatever it turns out to be. It's a fascinating space, and... I don't know, I kind of feel a bit weird talking about it publicly, but here you go.

**Adam Stacoviak:** I'm enjoying it. I'm sorry you feel weird about it.

**Alex Kretzschmar:** It's just a bit navel gazy, isn't it? But anyway...

**Adam Stacoviak:** Well, I suppose you're the guest here though, you're the friend here, so you have to navel your gaze a little tiny bit, just to fulfill your role... Come on, Alex. We can talk about me if you want to, but that's not any fun. The question I have for you, I suppose, is - you work at Tailscale... This is going to be on YouTube, and this may be seen by other people. How honest can you be about your curiosity? Do you have an itch? And if you have an itch, do you feel like you have the freedom to speak publicly about the curiosities as a developer, as an engineer, as a Linux nerd, as a home labber, as a self-host, or whatever?

**Alex Kretzschmar:** I mentioned a few minutes ago that the channel to date has basically been just me. That comes with a huge bonus of it's just me that decides what gets put out. So to date, the last two and a half years that I've been at Tailscale - yeah, I've had basically complete creative freedom, which is both a huge blessing and a massive responsibility at the same time, because you're representing the brand, and... For example, Kevin Purdy, who is ex Ars Technica, who we hired earlier this year to write for our blog... He's an amazing writer, by the way; you should totally go and look at the Tailscale blog. He wrote a piece about how to jailbreak your Kindle, and put Tailscale on it. And it was on Hacker News yesterday, and we saw a huge spike on the backend. But putting something about jailbreaking a device and breaking a EULA on a corporate blog - there are just certain topics you can't really touch, and that one, it falls under sort of fair use. And it's, it's fine, we think, legally speaking, but there are huge tranches of self-hosting that I just cannot talk about. Wink-wink, nudge-nudge, the stuff behind you is what I'm talking about.

**Adam Stacoviak:** For sure.

**Alex Kretzschmar:** And we can't talk about circumventing geopolitical, geo-blocked content restrictions and circumventing copyright, obviously, and everything that goes with it. And for me, the reality was some of that stuff was the reason I even got into self-hosting in the first place. So I have to find a whole other seam of stuff to talk about, which can be challenging, admittedly, sometimes. But then we have product release weeks, and you sort of think to yourself, "Well, now I'm going to actually put together an advert, effectively, for the products... But how am I going to do this in a way that doesn't feel like an advert?" And so it can be tricky, but also very... It's very creatively challenging and rewarding at the same time.

**Adam Stacoviak:** Well, what are you doing in your home lab currently that isn't so much Tailscale, but more just like -- I know you just mentioned Immich... But could you describe the level of home lab that you have? Do you have a massive unified system? Are you rocking something else? Take me through, from gateway to client.

**Alex Kretzschmar:** Yeah. UniFi fanboy over here. Self-admitted.

**Adam Stacoviak:** You are? Okay, okay...

**Alex Kretzschmar:** Yeah... Yeah.

**Adam Stacoviak:** \[51:51\] It's hard not to like them, right?

**Alex Kretzschmar:** It really is. Well, apart from the price. There's definitely a UniFi tax.

**Adam Stacoviak:** Yeah, the \[unintelligible 00:51:55.01\] definitely does get you. Yeah.

**Alex Kretzschmar:** Yeah, I've got the UCG-Fiber, their new fiber gateway, that's really nice. And I replaced a -- I think I had a Dream Machine Pro, or something... Like, when we were getting ready to sell the house, I just downsized everything from sort of rack gear as much as I could, to the sort of small utility switches...

**Adam Stacoviak:** \[unintelligible 00:52:13.28\]

**Alex Kretzschmar:** Yeah.

**Adam Stacoviak:** Nice. Okay.

**Alex Kretzschmar:** So I've got like a ton of those Lenovo mini PCs, the Kubernetes cluster I mentioned a few minutes ago... I've got a couple of MS-01 Minisforum devices doing all the heavy lifting... I've got a hundred terabytes of spinning rust in the basement, give or take, running ZFS that I talked about... That's in a 19-inch Sligo case. But yes, it's pretty minimal, dare I say, for what I do. I need a set of infrastructure to run Tailscale stuff on for the videos, and then I need a separate set of stuff to run my home sort of pseudo prod. And yeah, I try and keep it as simple as I can. 10 gig for all the trunks, the unified aggregation switches, for like 260 bucks? They're great.

**Adam Stacoviak:** What about any applications? You mentioned Kubernetes, and that's kind of new. It's like three weeks old for you, I would say, right? That's since Thanksgiving, three weeks...

**Alex Kretzschmar:** Yeah, roughly.

**Adam Stacoviak:** So what are you running on there? You wanted to learn it, but what are you running? What kind of applications are on there?

**Alex Kretzschmar:** Nothing yet. I don't trust myself with it. \[laughter\]

**Adam Stacoviak:** Nothing. That's cool.

**Alex Kretzschmar:** My media server primarily is my main application server. So that has Plex on it, that has Jellyfin, that has all the other stuff... Paperless, NextCloud, Smokeping...

**Adam Stacoviak:** Interesting. Plex and Jellyfin...?

**Alex Kretzschmar:** Yeah, because Plex keep turning the screw, don't they? Trying to charge you money to stream your own files, that kind of stuff.

**Adam Stacoviak:** Are they? I haven't experienced that personally, but what's the latest?

**Alex Kretzschmar:** I'm ready for their rug pull. It was about two weeks ago, there was another nail in the coffin there. I mean, look, I understand... Plex need to get money from their audience to support development. The trouble with it is that they gave it all away for free at the beginning, or they gave lifetime passes away for too cheap... You know, I bought Plex lifetime for 75 bucks 12 years ago.

**Adam Stacoviak:** Wow...

**Alex Kretzschmar:** And they haven't seen another dime from me since.

**Adam Stacoviak:** Except for a bunch of marketing and new users, potentially.

**Alex Kretzschmar:** Well, okay, in my specific case maybe... But that's not the average --

**Adam Stacoviak:** Well, I guess me too a little bit, but yeah. I mean...

**Alex Kretzschmar:** We're not the average user, are we?

**Adam Stacoviak:** No, I would say probably not.

**Alex Kretzschmar:** That's not a good business model. That recurring revenue - that's what you need to build a business around. And it's interesting, if Plex launched today with its client app suite, with its fit and finish and polish, and codec support and everything else, I'd probably pay 5-10 bucks a month for it and not think twice. But because it has been free for so long, or in my mind at least I paid that lifetime fee and it is free forever after that... It's tough. Like, you can't ever really charge for something that used to be free, or used to be a lifetime tier. So they kind of ruined their business model 15 years ago, and they're kind of paying for it now. So... It's tough for them.

**Adam Stacoviak:** That is true. That is true. I like Plexamp. So outside the typical Plex ecosystem...

**Alex Kretzschmar:** So good. So good.

**Adam Stacoviak:** I listen to a lot of my music externally, hence the port... And Plexamp is a dedicated -- you've got it on iPhone, I believe, I think you have it as a Mac app via the iPad app, I guess... I don't know the other platforms; I guess, maybe on Linux, potentially... Android, I'm sure... And Plex has done a great job of having like client apps kind of everywhere. And so you're right, I -- I guess if they had an open core. An open core that if I could self host - which I guess we already do self host - then maybe not... I guess you're right, how do you charge for that? I suppose maybe particular features; like you said, codecs, or...

\[56:20\] So an example of maybe how they can make money - hey, don't do this by the way - is I watch a lot of 4k content in my home. And so maybe -- I'm a unique, kind of maybe a super-user, so to speak. I'm the kind of person you may -- I'm an enterprise customer, so to speak, to Plex; maybe to get HDR from my 4k, and have that codec, which requires a certain amount of developer tooling and engineering to make that work... Well, maybe you pay for things like that. Certain -- or lossless. I guess that would be kind of sad, to force you to compress your own music... But if you had lossless on your wave files, and that wasn't gated, but maybe you gated to get money... But you're right, it is kind of a rug pool to the lifetime customers. Maybe there's a lot more customers they can get that aren't lifetime, and they can just kind of give us the pass because we've been invested for so long. I don't know.

**Alex Kretzschmar:** I do think piracy is going to have a moment, as inflation continues to bite, and people just can't afford... You know, as the media space continues to homogenize... You saw the Warner Brothers acquisition by Netflix recently. Those massive corporate mergers are never good for consumers. It's always going to result in long-term higher prices, less choice, less content.

**Adam Stacoviak:** More gates... More toll booths...

**Alex Kretzschmar:** Yeah. I do think piracy will have its moment over the next few years as a result of all that homogenization. We kind of had a nice honeymoon period for the last decade, led by Spotify, I think, where - that was a all you can eat. But you're starting to see famous artists now pulling out of Spotify, because they don't pay their artists enough. And you know, people like Tidal are coming along, and Qobuz... And you end up with this fragmented ecosystem. And the same thing's happening with video. Arguably, it's already happened with video, because of just how lucrative a streaming service can be.

I remember -- the original promise of Netflix was that it would just be one subscription and you'd get all the movies, and all the TV that you can eat. And then that kind of fell by the wayside, as the studios realized how much they were --

**Adam Stacoviak:** \[unintelligible 00:58:38.14\] all of our money. That's not cool...

**Alex Kretzschmar:** Yeah, exactly. Video, as you well know, is expensive to produce, let alone blockbuster-scale graphics effects, and entire industry's worth of crews, and sound people, and costume, and set design and everything that goes into making a good movie. You've got to recoup somehow.

**Adam Stacoviak:** Mm-hm. Yeah... Do you have Targets near you? Like, Target stores in Raleigh?

**Alex Kretzschmar:** Oh, yeah. Le Tarjay... Yeah.

**Adam Stacoviak:** Tarjay. Yeah, that's true. Tarjay. Is that one of your places? Does your wife love Tarjay?

**Alex Kretzschmar:** Well, my five-year-old does, because most times she leaves with some new thing...

**Adam Stacoviak:** Oh, yeah. My five-year-old loves -- well, he's going on six now, but he loves... "Let's go to Target, mom." Because Target means... Maybe something for him. The reason why I asked that question was because I don't really care to go to Target, necessarily. I mean, let's be honest, I don't think I like to go to any store unnecessarily. Like, if I don't have a mission, "What's the reason to be here? To browse? Come on, what's the point here?" But apparently, it's to spend time with your family, and so I'm cool with that. I want to do that, okay? I am okay with that.

**Alex Kretzschmar:** I can do that at home, without spending money, though...

**Adam Stacoviak:** \[01:00:03.24\] That's right. Like, we don't have to go to Target and buy the snacks we don't need, and the things that we -- you know, to be attracted by the end caps, or whatever; I'm just going to not play that game. But I do play that game. And I used to happily play that game, because I could be like "Hey babe, I'm going to go over to the the Blu-ray section for a little bit."

**Alex Kretzschmar:** Oh, yeah.

**Adam Stacoviak:** It's not there anymore.

**Alex Kretzschmar:** No.

**Adam Stacoviak:** It's not there anymore, Alex. What are we doing? The only place I can buy my hard disk content is from the ultimate bookstore, Amazon.

**Alex Kretzschmar:** You will own nothing and you will like it. Isn't that Cory Doctorow's enshittification culmination?

**Adam Stacoviak:** Well, I think that was actually the New World Order, or maybe the New World Forum, or something like that... They did that, and then obviously, it's part of the enshittification that he's extrapolated from that. If Cory was here, he'd probably word-salad me for 30 minutes on how I'm wrong... But I love Cory. He's the best. I absolutely love Cory.

**Alex Kretzschmar:** He's a good dude, yeah.

**Adam Stacoviak:** It's been too long, actually. We should get Cory back on the pod soon. But yeah, you can't really go to the physical store, and... I mean, you can't buy CDs anymore either. So whatever. But do not take my Blue-Rays away, okay? I want to own the film, and I want to have it in perpetuity. I don't want to buy the white album on every format. Just let me buy the one, and I'm done. Let me have the lossless version of it, the blessed version of it...

**Alex Kretzschmar:** You mean you don't want to buy the remastered remix, deluxe super-edition box set on 33 RPM vinyl reissue?

**Adam Stacoviak:** Uh, you know... I'm tempted. I'm tempted. But then I would just be filling somebody's pocket who bought the license to those masters. Anyways, whatever... What are your thoughts on the lack of media, or the fact that it's only buyable on Amazon?

**Alex Kretzschmar:** I think piracy will have its moment.

**Adam Stacoviak:** How will it have its moment though if there's no media to pirate? How will you pirate?

**Alex Kretzschmar:** Oh, they're sneaky. They'll find ways to rip it in other ways, I think.

**Adam Stacoviak:** From the stream? Like encryption? De-encrypt it?

**Alex Kretzschmar:** Yeah. I mean -- well, ultimately, it's displaying on a screen somewhere, and there are ways to... I don't know how much we should talk about this... There are ways to circumvent pretty much any DRM if you try hard enough.

**Adam Stacoviak:** Okay... I don't try very hard personally, but I can imagine there's somebody out there who does. Yeah.

**Alex Kretzschmar:** Neither do I. That's for other people to do. I just -- I might benefit off their fruit on occasion. Forbidden fruit.

**Adam Stacoviak:** I try to buy all my media, honestly. I mean, I really don't -- I'm not calling you out, and I don't even know what... I don't know what would make me want to be, I guess, a pirate, or a consumer of pirated material, in this stage of my life. When I was younger, yes, because I didn't know any better, and I also was poor... And I'm still just like marginally less -- a little less poor...

**Alex Kretzschmar:** We talked about this a little earlier on, didn't we? We talked about the experience, the overall experience of Docker versus Podman.

**Adam Stacoviak:** Right. Okay.

**Alex Kretzschmar:** And the overall user experience of having five or more subscriptions, and having to go to a store and buy a physical disc... Ultimately, it's worse than what you can get if you put your eye patch on.

**Adam Stacoviak:** I see...

**Alex Kretzschmar:** The overall user experience is just better. And I think there's a -- I don't even know if the movie studios can coalesce around any single service... I don't think it's possible. But until they do, the quality is better, the bit rate -- they're not going to do rug pulls and remove content, like Friends famously was on Netflix, and now isn't; it's somewhere else... That stuff happens all the time. One of my favorite cartoons, Final Space, just got completely deleted from the legal internet.

**Adam Stacoviak:** Really?

**Alex Kretzschmar:** Yeah. Someone's life's work, the creator of that piece of work is just -- it's just gone.

**Adam Stacoviak:** And what is it called?

**Alex Kretzschmar:** \[01:04:13.23\] Final Space.

**Adam Stacoviak:** What is this Final Space? I don't know about this.

**Alex Kretzschmar:** It's a stupid cartoon, but it's quite entertaining. It's got this cute little green thing in it called mooncake...

**Adam Stacoviak:** Okay...

**Alex Kretzschmar:** Anyway... It's a fun little thing to put on late at night, when you just want to vegetate.

**Adam Stacoviak:** Is this not on Netflix then?

**Alex Kretzschmar:** I don't know, it used to be on one of them. I forget where.

**Adam Stacoviak:** Let's see here. I landed on a Google result... Well at least it's not available on the ad-supported plan. Because I am an ad-supported user of Netflix. I guess that's more rug pulls... Like "Let me just increase your price, or give you--" Actually, it's not ad-supported. Actually, it is, but it's because I get it from T-Mobile. So I have a phone, and they give me Netflix, and I'm like "Okay, I'll get it for free. Why would I pay a little bit more to get the ads removed? I don't mind them." And honestly, Netflix does a pretty good job with the ads. They're not that invasive. I hate the pause screen... I want to pause to see the thing, not the ad...

**Alex Kretzschmar:** I'll do everything I can to avoid adverts. I'll pay for YouTube Premium, I will run Smart Tube to watch YouTube... I will pay for a Netflix ad-free tier... The reality is that I just don't want to support the behavior of companies that will do these kinds of -- like, Final Space is a great example. So not only was it canceled before the show's narrative finished, which happens all the time on streaming services, but they also just deleted the entire series from Netflix, so that they could use it as a tax write-off. I just don't want to support that behavior. It's the same thing with Google Photos, it's the same thing with media...

I think, without sounding too much like a mouthpiece for like Cory, or something - genuinely, it's egregious what a lot of the industry, the big tech industry is getting away with, using our data to train their models to then sell us back even more... And the AI bubble, whatever you want to call it - it's an industrial bubble. So there will be -- some useful stuff comes out the other side of it. But when it goes pop, I think it's going to be very painful for people.

**Adam Stacoviak:** Oh, interesting.

**Break**: \[01:06:35.13\]

**Adam Stacoviak:** You said AI. We have to talk about AI now.

**Alex Kretzschmar:** We haven't talked about AI yet, no.

**Adam Stacoviak:** Gosh... You said that.

**Alex Kretzschmar:** You look at the utility that people get from these things... Certainly, when I'm writing a video script, I'll run a bit that I'm stuck on through it and say "What do you understand as to what I'm saying here? Does this make sense?" I'll do it into a voice memo, and dictate it, and then give it to Claude and say "Polish this explanation about something", or "Tweak this bit of code and make this do this, instead of that", or whatever. And historically, if you look at the industrial revolution - we're going back a couple of hundred years here - there was a huge amount of speculation in the industrial revolution era. A lot of people made a lot of money, and that's happening now, in the AI space... And not every idea that should have been funded got funded. I mean the other way around - there were a bunch of ideas that shouldn't have been funded, that did get funded simply because people were hoping, speculating. We've seen this many times over the years. But these industrial revolutions and the AI revolution is one of those, because it's a tooling thing, as opposed to say 2008, which was a made up financial banking bubble, whatever. There was nothing material moving humanity forward there.

So say what you like about AI, but it's here to stay, I think... And the big players, like OpenAI, Anthropic, Google, of course - they'll be here to stay, because every other startup is building their tooling on those big guys' models. They're not doing the R&D spend to train their own models. They're just using Anthropic models for an API key behind the scenes. So I think the big guys will be okay. But yeah, it's the circle of money that has me concerned... Like OpenAI giving NVIDIA money, NVIDIA investing back in OpenAI, and so on. It's worrying.

**Adam Stacoviak:** Yeah. What is your relationship with AI? Are you a daily active user? What's your stance so far?

**Alex Kretzschmar:** Yeah, probably... I'll reach for it quite often now. Yeah.

**Adam Stacoviak:** Okay. Do you have the itch right now on the pod to be like "Can I just claude something real quick?", just because you have to?

**Alex Kretzschmar:** No. I mean, if I'm stuck trying to explain something, I might -- where I'd have reached for a Google search a year ago, I'll probably reach for a chat now instead, with a Claude or a ChatGPT, whatever... It's just replaced Google entirely for me. Whether that remains once the adverts start getting dropped, we'll see. But...

**Adam Stacoviak:** \[01:13:52.06\] Yeah, I've seen some things shift in ChatGPT, that I talked about on a podcast recently... We were talking about trying to determine which podcasts were the better AI-focused podcasts to listen to, and we were hoping to find Practical AI in that list - which is a show we co-produced for a while with Chris Benson and Daniel Whitenack. And they've since taken the show on their own... We still are working with them behind the scenes, but you know, we have some skin in the game, let's just say. As so we were just curious, "How did it rank?", whenever you search for it in chat. And when I did that, in ChatGPT in particular, at the bottom area, where you would put a new prompt in after you put the initial one and you've read the whole thing - down at the bottom it said "Create a playlist on Spotify." And I was just like -- I mean, I get the connection there... But I don't, because I'm not trying to make a playlist. I didn't prompt you about a playlist. I guess I kind of did by asking about a list of podcasts... So I mean, maybe it's to some degree relevant... But they're probably getting money, in some way, shape or form, or a kickback. I'm assuming.

**Alex Kretzschmar:** If they aren't now, that is certainly a business model they will deploy in the future...

**Adam Stacoviak:** Right. Yeah.

**Alex Kretzschmar:** ...when the speculative bubble does whatever it does. They haven't turned on ads yet, they haven't turned on X-rated stuff yet... There's a whole bunch of levers that Sam Altman and people at his level can pull to monetize, that they aren't doing right now. Just the whole space long-term at the moment doesn't add up. Because the energy requirements to power it are just so vast... I mean, they're spinning up nuclear power stations to power this stuff. We're seeing that we can't manufacture enough NAND chips. We're seeing that -- it's just bonkers. It doesn't add up long-term.

**Adam Stacoviak:** And when you mean NAND chips, are you talking about like RAM-type things?

**Alex Kretzschmar:** Yeah. So the little black chips on your RAM sticks - those are NAND flash chips. They go on M.2 SSDs:, they go on RAM sticks... They go everywhere, in everything; everything, literally everything that has electronics in it has some kind of NAND flash storage somewhere on it. So it's going to affect regular people really soon. I mean, right now as a PC builder, I'm --

**Adam Stacoviak:** RAM prices are through the roof right now? I mean, have you tried to buy RAM right now?

**Alex Kretzschmar:** Yes... \[laughs\] Just building the Kubernetes cluster a couple of weeks ago.

**Adam Stacoviak:** Yeah, I mean, I -- thankfully, I bought some RAM recently for a build of mine, just before that spike... And I was kind of sad, because I needed -- I actually meant to buy a set of four DIMMs as one kit. But like a fool, I bought two disparate kits of two, thinking I could just put them together, and... Anyways, I'll spare the details, but with this particular processor - it's an AMD processor... And it's got challenges with like a non-kitted - or what do they call those? You probably know the term... \[unintelligible 01:17:05.22\] to each other. And I didn't -- I'm learning, right? Like any homelabber. I've never had to buy four sticks of RAM and concern myself whether they were from the same \[unintelligible 01:17:17.23\] together.

**Alex Kretzschmar:** Yeah. It's just tricky. RAM on the new chips - those are very sensitive to the timing, and...

**Adam Stacoviak:** They are. And especially at the faster speeds. I mean, I think when you're on the edge like that, you're going to the faster speeds, then you should expect some dragons, to some degree... But the dragon I didn't expect was the cost dragon... Because I was like "I've got to swap these out. Oh my gosh, what happened to the prices?!" Like, I didn't pay that two weeks ago, and then now it's like astronomically priced. I would even -- I'm like "Okay, fine. I'm cool with it. I'll just only use two for now. I'll make do."

**Alex Kretzschmar:** \[01:17:56.00\] Yeah. It's tough. And everything -- I mean, even daft stuff that you don't even think needs RAM, or needs a NAND chip in it, like in your car... New cars - they're probably expensive enough to absorb a few hundred dollars here, a few hundred dollars there, but... Stuff like, I don't know, a coffee pot. The smart coffee pot will have a NAND chip in it. And that's not quite enough margin to absorb a 3x, 4x price increase without that price going up. Yeah, it's just a -- it's going to be tough.

**Adam Stacoviak:** Yeah. That's interesting. So that's the negative side, I would say, of AI. Do you have a positive side to AI?

**Alex Kretzschmar:** Oh, yeah.

**Adam Stacoviak:** How has it impacted your home lab?

**Alex Kretzschmar:** Well, take a look at this website: quicksync.ktz.me. 100% vibe code slop.

**Adam Stacoviak:** Oh, gosh. What is this?

**Alex Kretzschmar:** This is a benchmarking website that I put together over the weekend, that allows people to benchmark the transcoding performance of their Intel CPUs. So trying to answer the question of "Which CPU do I buy for my media server?"

**Adam Stacoviak:** Oh, my gosh... This is spectacular.

**Alex Kretzschmar:** And this was me and Claude for about two or three evenings this weekend. So my positives around AI are that I know just enough to be dangerous as someone that's been adjacent to developer technologies for the last 15 years. I'm not very good at actually writing the code... It takes me way too long, and I get bored before I get finished. This allowed me to get something finished and out the door way faster than I ever could have done by myself. Okay, I didn't learn the intricacies of how the API calls work, and what have you under the hood, but... Honestly, I don't need to. It's just a flat JSON file that gets stored in Cloudflare R2... This page loads that JSON file client-side, and then renders the webpage locally... And that's all I need to know, as kind of like a normal developer-adjacent person. I don't need to know every intricacy.

So for me, this has allowed something to exist in the world that I would have really liked to have seen 10 years ago when building my first server... And it's taken the information from being a flat text file to being something interactive, that people can kind of enjoy, hopefully.

**Adam Stacoviak:** Wow. Help me understand what I'm actually seeing here. So how are you getting all these benchmarks?

**Alex Kretzschmar:** It's crowdsourced. So you see up in the top right-hand corner, you can clone the Git repo to your server...

**Adam Stacoviak:** Right...

**Alex Kretzschmar:** ...and then you could just run the benchmark script, and then it will submit the -- it will pull down a Jellyfin container, because it just uses FFmpeg... It pulls down some drone footage that I edited together a couple of years ago into like a test file, and then it will just encode those files in different codecs. So it will do a CPU software encode, to give you an idea of the raw horsepower of your CPU... It will then jump into the Quick Sync engine, which is the hardware transcoding thing built into your CPUs... So it does 1080p, it does 4k 8-bit HEVC, and then 4k 10-bit HEVC hardware encodes. And so you can kind of see on the graph the performance of the newer chips is a lot better, as you would expect... But the energy usage also goes up. So it's like trying to find that sweet spot between energy usage, performance, price etc. So yeah, crowdsourced information... This is not a scientific experiment of super-high accuracy, but it's the best we've got in the real world.

**Adam Stacoviak:** Hm. Is there a plan for an API?

**Alex Kretzschmar:** To do what?

**Adam Stacoviak:** \[01:21:53.02\] I guess pull it, look at it... I guess you do have to have the website... I guess an API just lets you have access to the data in a different way, that isn't a flat file. It's JSON, you know... A lot easier to sort of parse, and do things with.

**Alex Kretzschmar:** Yeah. Well, it pulls it down as a JSON file right now... So I guess I could just put a link to the raw JSON file, sure. Yeah. There's nothing proprietary or sensitive in there. There's no -- the only user-identifying information for GDPR reasons that I wanted to keep was an optional submitter ID. I don't record IP addresses, or anything like that. So when you submit your results, you've got the option to give me your username if you want to; you don't have to. But everything else is just generic "CPU score this." So yeah, I mean, there's nothing sensitive in there.

**Adam Stacoviak:** Wow. I mean, I like this kind of stuff. This is those kinds of things, like you had said -- this is where I'm really... This is where I'm truly enamored, is that, like you said, you know just enough to be dangerous, not enough to actually code it yourself. And even if you did, you'd probably get bored, because it would take you weeks, or months, or just too much of your life taken away. But you have the knowledge to connect different dots, that only someone like you, or maybe a small few like you would have those dots to connect. And then now you have this superpower, essentially, to take that interesting idea, architect it into some version of a platform, and then execute it.

**Alex Kretzschmar:** It makes me more productive. It makes me more productive, yeah.

**Adam Stacoviak:** And this will pay dividends in the future, though. I mean, I don't know if this has a sad ending or a happy ending, because at some point maybe Intel CPUs go away... It's a whole different subject.

**Alex Kretzschmar:** I'd like to expand this to support things like NVIDIA GPUs, because obviously, they have the NVENC encoders in them... The newer AMD CPUs have hardware transcoding as well.

**Adam Stacoviak:** Yeah.

**Alex Kretzschmar:** So expanding it to support different vendors... Intel Arc GPUs, of course, are important to test as well. I just don't have any of those on hand. So yeah, I do want to expand this as we go... But for right now, at least, it's just Quick Sync, but over time... Yeah.

**Adam Stacoviak:** So I'm looking at Morgan Peterman's -- I love that last name, Peterman... His profile, because he is the dependency that you came from. You forked his Quick Sync calc, I assume to build on top of. He and I worked together at Red Hat, and we were bored one afternoon and put together this initial version of the script. So I just forked it and built on top of it, and it's where we are. It's open source, baby. It's in action.

**Adam Stacoviak:** Wow. So his commit was last year. So 22 commits there... You're now at 127, so a hundred or so commits on top of the original Quick Sync calc... I imagine you'll probably contribute back to -- upstream potential? Or just leave it as its own thing? Maybe expand it?

**Alex Kretzschmar:** I think it was always in my intention that my repo would be like the primary, I think, in this case, because -- I wanted to give Morgan a lot of credit, because he did a lot of the work on the original script. But in terms of like long-term ownership, that was what I was more interested in. So I don't know, we could contribute back to upstream, but...

**Adam Stacoviak:** I'm not trying to call out what you -- I'm just thinking of how do you architect it? Because it's not called QuickS ync benchmarks, but if you're talking about Nvidia GPU type things, then it goes from Quick Sync benchmarks to... Something different, you know? It has a different life to it. It morphs at that point... Which is really interesting about this curiosity, because you scratch one itch, and then next thing you're like "Well, now I can do that... And I've got this idea that connects there... And that idea influences this, and it enables that."

**Alex Kretzschmar:** \[01:25:56.06\] In a way that I couldn't do just as a solo dude before AI came along.

**Adam Stacoviak:** Yeah.

**Alex Kretzschmar:** Because you're at the velocity where the ideas can flow... They still flow faster than what the AI can generate, but not that much faster. So...

**Adam Stacoviak:** Yeah... That's the phenomenon that I think a lot of folks are experiencing... And I'm curious, what were some of the things that you did to do a little less vibing and a little more coding? I know there's this pejorative nature to the word "vibe code"...

**Alex Kretzschmar:** Yeah, there is.

**Adam Stacoviak:** ...or if you have vibe-coded something, it's like "Oh, come on now... You don't know Rust? You didn't write that yourself? Seriously?"

**Alex Kretzschmar:** Yeah. I spent a long time in the planning phase with it... So before it wrote a single line of code, I probably spent two, three, four hours going through what the various pitfalls of different decisions might be. And then once we talked through all of that, the actual coding part only took about 20 minutes. It was kind of stupid how fast it was in the end.

**Adam Stacoviak:** It is, kind of... Yeah, I'm with you on that. Plan for hours, code for five minutes.

**Alex Kretzschmar:** But only if you've taken the time -- otherwise you're just guessing.

**Adam Stacoviak:** Yeah, exactly. If you didn't plan all that, and you didn't think through, and you didn't go back to the specs, or the RFC, or just something that was like the crucial piece that was the one thing that would have stuck AI because it would make all these assumptions in a plan that wasn't well-formed... Well, now you've handed it a truly well-formed, potentially even like with an implementation mandate sitting next to it, that's kind of like not the implementation, but the various things of proper code, or different ways you want to do things, so that when you get to the implementation stage, it's not guessing, because you've already thought through a lot of the, like you said, pitfalls. That's interesting.

**Alex Kretzschmar:** Yeah. Like I said, I know just enough to be dangerous now.

**Adam Stacoviak:** Well, I think that's what we need, is the thinkers, in this case... And that's really where I'm camping out. I see this new power available to people who can wield it, because they have some experience in history; some wisdom, so to speak.

**Alex Kretzschmar:** The flip side of that though is I didn't have to collaborate with anybody on this... Whereas in the original case, I spent a lot of time collaborating with Captain Morgan, right? These days I can just sit in my room and do it by myself. And so the collaborative spirit and nature of open source kind of diminishes a little bit, because I'm so empowered by it. And that's a risk... I don't know how big of a risk, but it's a risk in all of this.

**Adam Stacoviak:** That doesn't bother me, really... I mean, not necessarily... Because even my own personal usage of open source hasn't been in the collaborative. It's been in the consumption, and the availability, and I would say maybe the hyping and the popularizing and the showcasing... I haven't really had a lot of collaboration personally in open source... So that doesn't really personally bother me.

I'm also kind of a fan of open source, not open contribution. I don't think you have to -- they're not cut from the same cloth necessarily. I don't think you have to be open source AND open to contribution. So there is a way you can envision an idea, or have a vision for it... And sure, you may put it out there as open source, because you want to share, but it doesn't mean you really want the feedback loop, because you've got a plan.

**Alex Kretzschmar:** Well, the other downside, of course, is that - how did these models get smart in the first place? They got smart off the back of all of our open source sharing... And now we're just feeding back themselves into themselves. There's got to be a reckoning --

**Adam Stacoviak:** \[01:29:50.12\] That's cool, though. I mean, what a unique thing to think about. So honestly, this is really an interesting thought experiment I try to push myself to, which is kind of a mind bender... I try to think hundreds of years, or at least a certain amount of years in advance from today, that future Adams or future Alexes look back on these moments and they're like "Wow, thank you so much for putting all this blood, sweat, tears, effort into the open, so that we can have this thing that now helps us make", I don't know what. I have no idea what will get made. But even in this moment here, you're expressing this -- this is a monumental feat. Producing this website, and this level of care, in a few days, in a hundred commits... You know what I mean? Solo? Wow... Where will we be 10 years, 20 years from now, because of that truth, because of that openness? I sure hope it doesn't backfire on us. And I'm not wise enough to see that future, or even speculate, but in the moment I feel like that is a net positive on the future, because it's already net positive to me, in this moment.

**Alex Kretzschmar:** Yeah. I think there's a bunch of people, a huge tranche of people, actually, that kind of missed the forest for the trees in this regard. My take is typically a pragmatic one, of "Well, if I don't upscale and use these tools and I don't start solving these problems for myself using these tools, someone else will. And then I'll become less relevant as a human." So I think the superpower of these things in the longterm is the empowerment they give the individual to solve their own problems, and scratch their own itches, which then feed into your collective experience as a human to solve other problems down the road... And you both make each other better in the long run. It's going to be really interesting how the business models of these AI companies play out over the longterm, but I'm optimistic that they won't all be complete \*bleep\*.

**Adam Stacoviak:** Optimistic...? You don't seem optimistic. You seem hesitant.

**Alex Kretzschmar:** I am hesitant. You look at how the last 25 years have gone with Apple and Google and Amazon and Microsoft, and the state of the current internet, and misinformation, and everything else... Like, it's -- let's not repeat those mistakes, I guess is what I'm trying to say.

**Adam Stacoviak:** Yeah. Yeah, for sure. Well, for the moment we can enjoy our feats of brand new Quick Sync deep dive benchmarks... I love this, man. quicksync.ktz.me. We'll link it up, of course. It is on GitHub... Are you open to contributions?

**Alex Kretzschmar:** Yeah. Yes, please.

**Adam Stacoviak:** Yeah...!

**Alex Kretzschmar:** Yeah.

**Adam Stacoviak:** Is there any other way? Did you license this? What was there an original license you inherited from the upstream?

**Alex Kretzschmar:** I think it's MIT, GPL... I don't know. One of them.

**Adam Stacoviak:** I don't see a license file at all, honestly.

**Alex Kretzschmar:** Oh...

**Adam Stacoviak:** Yeah, I think it's not licensed, necessarily, in the moment... Explicitly.

**Alex Kretzschmar:** Well, it will be. By the time this episode airs, it will be. \[laughs\]

**Adam Stacoviak:** Well, MIT FTL. Or FTW, sorry. Not FTL. I was thinking about something else. Well, Alex, I don't know what else to talk about, man... I know I love talking to you, man. I really -- I was thinking, "You know what? Who's a good person to chat with at the end of the year? And somebody I haven't talked to in a while..." And I knew --

**Alex Kretzschmar:** "I've run out of all the other options. Let's talk to Alex..." \[laughs\]

**Adam Stacoviak:** No. No, no, no. Not at all. We actually did have a plan for somebody else, and they did fall through, and you were a fill-in, but it wasn't because of that. It was -- I like talking to you. I think you've got some cool ideas. I mean, this benchmarking is the best, man. And I knew you were going to move to London, and I thought you were in SF for some reason, in our back chats, and I was reminded... "Yes! Raleigh."

**Alex Kretzschmar:** No. North Carolina. It's a snow day in North Carolina today, actually. We've got about an eighth of an inch of snow, and they shut all the schools.

**Adam Stacoviak:** \[01:34:09.13\] Yeah. Right? Like, scary. That's like nothing. I guess before we leave here, what is -- do you have a favorite Linux distro at the moment?

**Alex Kretzschmar:** Talos Linux. Justin Garrison would be very happy with that.

**Adam Stacoviak:** Yeah. He would be very happy for that. Is it because of your recent k8s explorations?

**Alex Kretzschmar:** Yeah. We sort of touched on the Bootc kind of immutable nature, and disposable, declarative nature of operating systems... I'll tell you, if Talos existed for just like non Kubernetes, regular Linux - that would be a chef's kiss.

**Adam Stacoviak:** What do you like about it? Help me understand. Like, what are we missing? What's the good stuff?

**Alex Kretzschmar:** I don't know... Have we got time for this? I just like the fact that the nodes are completely disposable. The storage -- for years you've written playbooks to configure nodes, and install packages, and do this, and do that... And now I have a declarative file that says "System, do this." And when it bootstraps itself, it doesn't know what it is until you give it that instruction... And then it just figures it out. There's no config drift. It's impossible for there to be config drift. It just is what I tell it to be exactly, and the only way to make a change is to update the config so it gets versioned, it gets all the niceties of that.

**Adam Stacoviak:** Is that kind of like atomic, kind of like Bootc then? Because that's kind of what Bootc is, right?

**Alex Kretzschmar:** Yup. Yup. Yup. It's the same idea. A different implementation, but same idea.

**Adam Stacoviak:** Yeah. Interesting. And so just hypothesize for a moment, in the non Kubernetes world, how would you see a Talos that isn't that focused on a different alternative? What would that be to you then? Where would you use it?

**Alex Kretzschmar:** Uh, for a home server.

**Adam Stacoviak:** Okay...

**Alex Kretzschmar:** I don't want to have to do an apt get to upgrade every six weeks, and then have something break, and suddenly my server doesn't boot anymore... It would be nice if I could just update a config file, push that to Git, and then it just figures it out and reconciles those changes, a bit like Argo CD and Flux do in the Kubernetes world, but at the OS level. That's what I want. That's the world I want to get to. Push a configuration change to Git, and then my server just figures it out.

**Adam Stacoviak:** How different -- I mean, maybe this shows my cards here a little bit, but how much different is that from a script that you wrote, a literal Bash script that just runs your system, runs all the app gets, and stuff like that, configures your system on boot? How much different is that?

**Alex Kretzschmar:** Well, you've got to put a ton of logic into the Bash script to do idempotency, you've got to do a ton of logic -- like, Nix kind of solved some of these problems a little bit, but it's a very imperfect solution. Let's say you have a list of packages you want to install, and you take one of those packages away. Well, there's now got to be some logic to clean that up. And then there's going to be some residual files, maybe a config file left here, something left over there... You just don't know. So the nature of declarative stuff is that you can test a lot more easily a specific implementation of an NVIDIA driver, maybe as a kernel DKMS build failure and all that stuff in the old world... But in the new world, that literally is impossible, because it built -- it's an immutable thing, and so we know it's going to work.

**Adam Stacoviak:** I think that's what Bootc is trying to solve, which is why I was kind of interested in it, but I just couldn't figure out how to use it. I don't know how to -- I just don't know yet. I haven't explored it enough to have a good --

**Alex Kretzschmar:** Yeah... I never quite know how to say this guy's name. Is it Jorge Castro? I never quite know how to say his name...

**Adam Stacoviak:** I don't know.

**Alex Kretzschmar:** ...but he he's running like the Fedora Silverblue... There's some cool stuff happening in this space very soon, I think. And... Yeah, it's going to be really fun when it lands.

**Adam Stacoviak:** \[01:38:02.16\] We put out a podcast recently called "The 4 DIMM problem", which I alluded to earlier... So I have an AMD Ryzen 9 CPU, and I have 4 DIMMs RAM. I should be able to do that, right? Well, let's just say there's a 4 DIMM problem. And Nabil, and Andrew, and AJ, and Ron are in our Zulip, talking about some different stuff... And Andrew O'Brien actually said "I wonder if Adam", that's me, "has tried Bluefin, now that he's settled into Fedora." He's mostly a Debian person, as he says here, but he said "I've tried Bluefin based on Fedora Core after a Ship It episode about it", which should have been a while ago, because Ship It has since ceased to be an active podcast... Amazing show, obviously. Archives are still there, check it out. No, I have not tried Bluefin, but I am interested in Bootc and this world that it's creating; this atomic declarative. And now that I hear you talk about Talos in that way... Which - I have not played with Talos. I have not personally played with Kubernetes really at all... And I probably should spend a Thanksgiving weekend, like you did, just knee-deep in it... Like I should have so many things, but I haven't yet. I am interested in, I just don't -- I don't know where to apply it yet. And that's what I -- I would like a guide. I'm like "What could I do with it?" Because that always gives me a reason to play with it. That's how I get curious, is I have a reason to do it. I mean, the reason why I have different VMs and different things happening is because I learned how to use Proxmox, and a bunch of cool stuff around Proxmox, and different flavors of Linux, from Fedora as a server, or Ubuntu as a server, or pick your battle; whatever you want to do. So I haven't done that yet though, but I'd like to. I just don't know where to begin.

**Alex Kretzschmar:** Linux is an endless rabbit hole. That's the best thing about it. And the worst.

**Adam Stacoviak:** It sure is. So are you going to be at Texas Linux Fest next year?

**Alex Kretzschmar:** If I'm in the States, sure. Why not?

**Adam Stacoviak:** Okay.

**Alex Kretzschmar:** It might be a bit of a long way to come from London, but I don't know. It is a good time, so... Hopefully.

**Adam Stacoviak:** I think it should be October-ish. Is that right? I don't know, I think it was in October this year...

**Alex Kretzschmar:** Yeah, that was the thing, because it's normally in March, or April time.

**Adam Stacoviak:** Oh, is it? Okay...

**Alex Kretzschmar:** And then they moved it.

**Adam Stacoviak:** They moved it.

**Alex Kretzschmar:** I like the new time. It's good. The issue is for me - it runs up against All Things Open, and we had a company offsite this year, and it was just a lot of stuff. So yeah, it's a tough one, but...

**Adam Stacoviak:** And All Things Open is a staple for you, you don't miss that?

**Alex Kretzschmar:** Well, it's five minutes down the road, so...

**Adam Stacoviak:** You can't miss it. You have to go, because it's like "Well --

**Alex Kretzschmar:** It's a great conference. Yeah.

**Adam Stacoviak:** It is a great conference. It is an absolutely great -- you know, this year they moved it on me, too. It's normally at the end of October, and this year it was at the beginning, and I planned some travel earlier in the year... And when I realized that the times collided, I was like "Oh man, I can't go this year..." And so we didn't have a presence there this year. Where normally, we're kind of like a staple in the hallway track, doing our booth thing, and podcasting.

**Alex Kretzschmar:** I did wonder where you were, actually. I should have messaged you.

**Adam Stacoviak:** Well, that's why. It's not because Todd was mean. Todd's amazing. The whole team that runs the conference is amazing. And I love it. And I was really sad to miss it this year. But what I was trying to say though is that if you're going to be at Texas Linux Fest, we can plan on The Switch, and maybe we could do a meetup, like "Hey--" We'll call in advance, if we can do some sort of like precursor to it. Let's have a little fun... I know that it's usually a Friday/Saturday thing, so we can plan it for Friday. It's usually the day I'm most available, because I'm a family guy, and Saturdays are reserved family... But we can certainly do the fest all day, and maybe a meetup that evening at The Switch for dinner, or something like that, and make it a fun thing. What do you think?

**Alex Kretzschmar:** Let's make it happen.

**Adam Stacoviak:** Let's make it happen. Well, Alex, it was good to talk to you..... Merry Christmas to you. I know it's just a few days away, or a few weeks away at this moment; two weeks, I believe. My kids are counting down. They're excited about it. I'm excited about it as well. And always good talking to you, man. Thank you so much for sharing time with me, and just being a little nerd, man, like I am. I love it. Thank you so much, man. Thank you.

**Alex Kretzschmar:** \[laughs\] I'm going to go and watch Silicon Valley now.

**Adam Stacoviak:** Well, you've been watching right back there... Wait, no; it's over there.

**Alex Kretzschmar:** Yeah, and now I want to watch it for real. \[laughs\]

**Adam Stacoviak:** There's Big Head. Where's Big Head? What's he doing? What are you doing, Big Head?

**Alex Kretzschmar:** Ah, it's so cringe...

**Adam Stacoviak:** Oh, this is where they're talking and he's like being the bad friend there. He's like "Oh, man, I'm gonna go back home right now." "No, you shouldn't go back home right now. Well, you can't be part of Pied Piper anymore." "Okay..." That's what's going on right there. That's episode two of season one, by the way. Alex, you're the best. Thank you so much.

**Alex Kretzschmar:** Awesome. Thanks, dude. Have a good one.
