**Adam Stacoviak:** Well, Alex, finally here. Finally sitting down. We've met face to face briefly...

**Alex Kretzschmar:** In Raleigh, funnily enough, I think it was...

**Adam Stacoviak:** Yeah. Right in your backyard, basically for All Things Open. We're gonna go back there again this year. Are you gonna go back again this year? What do you think?

**Alex Kretzschmar:** Yeah. My talk was just accepted, I got the email yesterday. So you try and stop me... It's 20 minutes down the road, so really I've got no excuse.

**Adam Stacoviak:** That's right. So born and raised in the UK. Now you live in the -- that do they call that? The Tech Triangle? Is that what it is?

**Alex Kretzschmar:** Just the Triangle, I think.

**Adam Stacoviak:** The Triangle. Okay.

**Alex Kretzschmar:** People not from Raleigh call it RDU, other people call it the Triangle...

**Adam Stacoviak:** And what is RD -- I know Raleigh Durham... What's the U?

**Alex Kretzschmar:** Raleigh Durham as in DU Durham. By the airport code.

**Adam Stacoviak:** Gotcha. That makes sense then. Okay. I've flown in there, many a times. I think I've been to North Carolina, to Raleigh specifically, on three occasions, all for All Things Open... And Jerod and I don't always get to go together. I've been there three times, he's been there I think three times as well... But one of those times was not together. But we always go to Sullivan's downtown to eat steak when we're there. Have you been -- do you do go out and around into downtown?

**Alex Kretzschmar:** Well, there's Angus Barn if you want a proper steak.

**Adam Stacoviak:** Okay. Well, I'll take a recommendation. I've been going to Sullivan's. They're pretty -- they're solid. Sullivan's is solid.

**Alex Kretzschmar:** Sullivan's is okay. You're from Austin, right? Where you get proper beef.

**Adam Stacoviak:** Right.

**Alex Kretzschmar:** Yeah, I was just there for -- well, twice, actually. Texas Linux Fest, and DevOps Days Austin just happened. I wish I would have known you're coming back, because I would have taken you out for some proper beef.

**Alex Kretzschmar:** Yeah... We went to Terry Black's, and that was pretty nice.

**Adam Stacoviak:** Oh, that's proper. I mean, they're kind of like... I don't know, I feel like they're not -- they're obviously great folks. And I'm not knocking anybody for making great beef. But there are some up and comers that need more attention than Terry Black's.

**Alex Kretzschmar:** Yeah. Terry's was good, because it was touristy, and we wanted to eat on a Monday, and most of the places are shut on a Monday...

**Adam Stacoviak:** Oh, yeah. Mondays are like shut down for any barbecue spot. It's not gonna happen. I mean, they're not open. They're literally not open. They're like "We've worked, and now we're done." So that's how it works. Well, good to have you back here in Austin. I know that -- I actually was gonna go to Linux... Was it Texas Linux Fest, is that what it was?

**Alex Kretzschmar:** Yeah. The one down by the -- I think it was at Palmer Events Center down by the water.

**Adam Stacoviak:** Yeah. And I happen to have my dear cousin - and she's basically a sister... You know how some family is like -- their label is x, but really they're a lot more like y. And so she's my cousin, but she's a lot more like a sister than simply just a cousin. And so when she's in town, I throw everything out the window and it's dedicated to spending time with her.

So she came into town, and I couldn't go the Texas Linux Fest. And I wanted to. So... Bummer \[unintelligible 00:07:01.16\]

**Alex Kretzschmar:** That's how it goes sometimes.

**Adam Stacoviak:** Yeah, it is how it goes sometimes. But you've been in and around the Linux world for a while. You run a podcast, you've read a blog, you wrote/are the original author of "Perfect Media Server", which I have used and did not know that you were the maintainer and original author of until literally this morning, when I was like "What the heck else does Alex do? Let me see." And I'm like "Oh. Yeah, I've used this guide in some cases to sort of get more information on what a Perfect Media Server might be like." And this is -- I was actually on a journey towards the end of 2022, going into 2023, having spent many years building out a media server, never doing it properly... And when I say properly, I mean having Linux as the operating system. Something built on Linux. My media server was Plex always, but for a long time I ran it as the PMS server on Mac. And that was fine, but there was some limitations, obviously. Macs do run it very well. I don't know if they have \[unintelligible 00:08:09.28\] Intel-based CPU Macs...

**Alex Kretzschmar:** \[00:08:14.08\] The new Macs are pretty good, because they have their -- what's it called...? Video toolkits, or something like hardware encoding. So not only do the new Macs sit power idle when they sat there on the desk, but also the hardware encoding is pretty good. We were just talking to Casey Liss on Self Hosted about -- he came on to talk about the Vision Pro, on the podcast... And we ended up digressing a little bit and talked about Plex. Because it's the gateway drug for everybody into self-hosting.

**Adam Stacoviak:** It sure is, yeah.

**Alex Kretzschmar:** You know, you think "Well, I've got this Plex server running on this--" For me - this is sort of going back 10 years now... I bought a Synology box, and I was like "Well, I've got this thing in my house that's always on. Surely, it could be doing something else for me. Oh, what's this Plex thing?" And then it snowballed, and now, as many services as I can self-host in my life, I do. So I have a self-hosted Google Photos clone, with an app called Immich, for example. Next Cloud to replace Dropbox. And the list goes on and on and on.

But as part of that journey, there was a lot of mistakes made, and a lot of technology had to kind of catch up. So again, going back to the 10 years -- moving out of the Synology sort of training wheels mode, where you have an app store, and you have a GUI, and all this kind of stuff... Eventually, you start finding where the edges are. You know, like when you go bowling, and they've got the little bumper rails up?

**Adam Stacoviak:** Oh, yeah.

**Alex Kretzschmar:** You feel like that's the Synology experience, really. So I moved then to UnRAID, and the cycle repeated after a year or so. I was like "Well, UnRAID's more flexible. It's real Linux underneath. It's got XFS filesystems, ext4, and I've got parity checks, and I've got all the apps I could ever want", and stuff like that. This was before UnRAID had Docker support. So way back in the beginning, I used to maintain VMs for UnRAID, which -- I used to maintain like an Arch Linux package repository for UnRAID, that people could install a lot of their media collection apps onto VMs on top of UnRAID. And then Docker came along, and it just seemed like a natural progression to kind of turn that into a container maintaining team. So that's where linuxserver.io came from. It was sort of born out of my personal blog, of messing around on my journey of discovering Linux, and thinking "Well, nobody else is making these containers. Nobody else is writing good documentation. Why don't we try and do that?" And it's one of those things, like, the youthful arrogance of being in your mid 20s, of not knowing what you don't know. There's no way I'd start a project like that today, because I know how much I don't know. And in my mid-20s I was like "Sure. How hard can it be?"

**Adam Stacoviak:** That is pretty funny. "How hard can it be?" is usually the beginning of most good stories, right?

**Alex Kretzschmar:** It's certainly the beginning of every good Top Gear episode.

**Adam Stacoviak:** So you were part of linuxserver.io?

**Alex Kretzschmar:** Yeah, it was originally my blog. So blog.ktz.me sort of morphed into linuxserver.io. And me and a couple of guys just started writing Docker files, honestly, and writing documentation, and coming up with some standardized stuff... It's kind of hard to think back to back then, but nobody was really doing the base image thing. Nobody was really doing standardized documentation, or CI pipelines, or anything like that. It was all just kind of a bunch of people pushing stuff to Docker Hub and hoping for the best. And I just figured that there was a gap there. It was right when I was doing my computer science masters conversion, like career change. I was working at the Apple store, and I kind of got bored of fixing iPhones, and resetting \[unintelligible 00:11:51.03\] iCloud password three times in ten minutes. And so I thought "Right, well, this Linux thing looks kind of fun", so I took a career change course, and here we are.

**Adam Stacoviak:** \[00:12:05.12\] That is so crazy. I had to go to linuxserver.io/blog, and I had to confirm that this is accurate... Because like linuxserver.io, if you've been in this world, like you are, obviously... You're the original person of this - I'm not speaking to you, I'm speaking to the audience when I say this - and then you know that there's a lot of really good Docker images out there that are hosted and maintained and supported by linuxserver.io. And I had no idea if I went to page 16 of the pagination of this blog I would find IronicBadger, again, and again, and again. Holy moly. That's what I love about podcasting, is--

**Alex Kretzschmar:** August 2013. Look at that. Yeah.

**Adam Stacoviak:** I mean, I knew that you were cool, but I didn't know you were this cool, Alex. You're pretty cool, man...

**Alex Kretzschmar:** Well, I mean, I'm not involved with the project anymore. They do a fantastic --

**Adam Stacoviak:** It doesn't matter. You began a movement. That's cool.

**Alex Kretzschmar:** They do a fantastic job maintaining a bunch of stuff. And they were always adding new containers, and things like that, but...

**Adam Stacoviak:** Yeah.

**Alex Kretzschmar:** Yeah, after a while it made sense to split out my personal blog from linuxserver.io. So blog.ktz.me does exist again; I don't write as much as I should, but...

**Adam Stacoviak:** Wow. Okay... Gosh, this is not supposed to be an interview show. This is supposed to be friends, and we're supposed to talk about things, not interview you... But I feel like, gosh, now I need to ask you more questions about just, I suppose -- so you mentioned CS degree. I think you said master's degree in CS. Is that right? When you were when you were speaking there.

**Alex Kretzschmar:** Yeah.

**Adam Stacoviak:** I was enamored by your history, and then trying desperately to listen at the same time, and catch the details. We podcasters have to multitask, right? We have to guide the conversation, keep it entertaining, and also listen, which --

**Alex Kretzschmar:** It's true.

**Adam Stacoviak:** ...really, I think, overall is a muscle memory skill set you overtime build. But I'll digress... I can't believe this; back in 2013... This is a long time. I mean, this is not that long ago, but... I mean, tech moves fast. That's like a decade-ish ago. It's 11 years at this point.

**Alex Kretzschmar:** Yeah. And back then you were crazy if you were running containers in production, and now you're kind of crazy if you're not.

**Adam Stacoviak:** Right. Like, is there any other way?

**Alex Kretzschmar:** Yeah... Well, I mean, Amazon might have you think otherwise, but... I mean, there are certain use cases where containers just don't make sense. I worked for a bank in London for a bit, and they had Oracle databases, and even 10 seconds of downtime cost more than my annual salary to the company. So the stakes are a bit higher, and they just -- they want Oracle to do their thing, and the databases are just a monster, but... You know, what I've found interesting was -- you mentioned Perfect Media Services, how we ended up down this road... I was looking for the first post, and February 2016 was the first Perfect Media Server post on Linux Server. It was putting together some of the pieces of the jigsaw. And the absolute most important piece was something called Mergerfs. The developer of that software actually lives in Austin. You should probably get him on the show and talk to him.

**Adam Stacoviak:** Wow.

**Alex Kretzschmar:** He works for Morgan Stanley. He's a pretty interesting guy. He was at Texas Linux Fest, so I got the chance to meet him. Antonio, his name is. And this is the magic sauce, because it allows -- Mergerfs allows you to take multiple hard drives of different sizes, of different file systems, and bring them together under a single mount point. So you could have 10 hard drives, any size, of any file system, and then you just go to a single directory on your Linux system, and all 10 of those drives appear under that one system as if they were just one big drive... Which, if you think about it, that's what a lot of people have been trying to do for a long time using RAID, is to try and take this JBOD, this "just a bunch of disks" and kind of bring them together in some kind of a unified fashion. But the downside of RAID, or ZFS, or any of these kinds of drive pooling systems that existed before was that you had to commit upfront to your vdev layout as part of your ZFS pool, for example.

\[00:16:15.03\] You can't easily expand the ZFS pool, even now. They've added dynamic RAID expansion, but still, mirrored vdevs are probably still the best way to go... And then that means you've got to buy a minimum of two hard drives at a time. And back in 2016, I didn't have the scratch to do that. I just wanted to buy a 1, 2, 3, 4-terabyte hard drive, whatever was the biggest one back then, throw it in my media server and call it good for six months to a year until I could afford another one. And that's kind of how it grew. I mean, things are a little different now. Hard drives are in the 20-terabyte range. But still, the same principles do apply.

**Adam Stacoviak:** Mergerfs... So it sounds like maybe you're -- probably a fan of ZFS, obviously, but maybe... Do you not use ZFS then in your media server? Do you prefer Mergerfs?

**Alex Kretzschmar:** They're different tiers. So my media collection, as -- I'm going to skirt around the bush a little bit here, because we have to be a little careful, but...

**Adam Stacoviak:** Yeah.

**Alex Kretzschmar:** ...is backed up on the internet, so to speak. Like, if that went away tomorrow, I wouldn't lose any sleep.

**Adam Stacoviak:** How much terabytes is that?

**Alex Kretzschmar:** I don't know... I keep getting to sort of the 100 terabyte-ish range, and then having a mass clearout right back down to like 20 or 30 again, and it just slowly creeps back up over time, as family members request things, and all that kind of stuff. But for anything that actually matters, that's on ZFS. Because it has all the bitrot protections, and it doesn't ever serve you up a mildly corrupted file; it just refuses to serve that bit if it can't get the correct checksum stuff for it.

Also, backing that stuff up with ZFS send, and -- I use Jim Salter's tool, Syncoid; Sanoid and Syncoid pairing, to do all the snapshots and replication and stuff like that with ZFS... So I use both now. I have three or four hard drives dedicated to media, and then I have a couple dedicated to photos, and drone footage, and... Well, now I do YouTube, so a bunch of YouTube video, like A roll and B roll stuff that I'll never look at ever again, but... I'll keep it, because one day I might need it. You never know.

**Adam Stacoviak:** Gotcha. Well, then let's dip our toe a little further into ZFS... Or as I would say, ZFS, because - I get the difference. Let's not go there. But I like the way you say it. It's cool.

**Alex Kretzschmar:** I just use whatever -- because my name has a Z in it. Alex Ktz, and Zed FS, Zee FS, I don't care.

**Adam Stacoviak:** Yeah, yeah. I suppose then are you -- do you go into the TrueNAS world then? Do you simply go Ubuntu, or maybe NixOS? Or do you serve the master of TrueNAs, and just bow down to Scale, or Core? I don't know how hardcore you are, but how do you feel about that?

**Alex Kretzschmar:** Well, it's an interesting question, because up until fairly recently, TrueNAs, FreeNAS, whatever, was BSD only. It was kind of ruled out for me, because BSD is just different enough from Linux that my muscle memory gets tripped up every single time. But with -- I think, is it Scale is the Linux one? Or Core?

**Alex Kretzschmar:** Scale, yes.

**Alex Kretzschmar:** Scale is the Linux one. And now that's the primary development target. Things are a little different, and I thought "Right, I'm gonna try this out." TrueNAS Scale is now the future of the product, and it's where iXsystems are taking it, and... "Okay, this must be for real." Until I found out they deploy all of the apps on top of TrueNAS as Kubernetes templates. That's just -- why? Why do they do that?

**Adam Stacoviak:** Why do they do that?

**Alex Kretzschmar:** I don't know. Can we not just have a docker compose file, like everybody else? Or like UnRAID does, with app templates, or something...

**Adam Stacoviak:** Yeah... I like Compose. I mean, I don't really run containers, unless it's via Docker Compose, honestly.

**Alex Kretzschmar:** Same.

**Adam Stacoviak:** \[00:19:57.24\] I just think -- I'm not gonna like run the command ever as just plain old Docker. I'm always gonna have a compose file. It gives me a directory to change directory to, to manage datasets that might be non volume, that's Docker -- like, I might store data locally in that directory, versus a volume... Or just an environment file, or just any sort of config that lives alongside of the Docker Compose YAML file. I feel like that gives me a home, and I don't Docker unless it's Docker Compose really, personally.

**Alex Kretzschmar:** I totally agree.

**Adam Stacoviak:** Which makes sense for linuxserver.io, because that's a big thing that they do, really, is they provide these images, but then they also provide compose templates right alongside of it, that is pretty much copy and paste, which is great for gateway people who are like "Oh." Like we said before, Plex is a gateway; you find it, you learn about Docker, you learn about containers, you start going further into the Linux world, and next thing you know you're at least a Linux novice, if not a version of an expert; maybe a moldable expert, I don't know. That's kind of where I feel -- like, I'm not an expert level by any means, but I'm certainly not novice. I'm somewhere in that middle ground. And it really is because I didn't want to run this thing on Mac. And the primary issue I had was not with the Mac platform, it was with the inputs; the literal hardware. I would have USB-C disconnections and data corruption because Macintosh computers, these Macs are not really designed to be NAS hardware; while they can be, the Thunderbolt port is so fraught with issues. They even have adapters you can adapt to the port to make sure the cable doesn't wiggle at all.

And I would have this thing literally racked into a rack, like a Mac Mini or something like that, and any movement whatsoever on the rack, even if you move the chassis a little bit to do maintenance on your rack - which you are going to do - I would have port disconnection issues. And I've lost so much data -- I'm just kind of done. This is not how it's supposed to be. I love Mac, I love the operating system, I love all the ease of it... Obviously, I use it daily as a driver, and it's my go-to operating system... But when it comes to that kind of reliability with a connected drive, Macintosh just doesn't compare to what you can do with a motherboard, some RAM, a CPU and Linux on top of it.

**Alex Kretzschmar:** Yeah. USB connectivity has always been a bit of a risky business.

**Adam Stacoviak:** Yeah.

**Alex Kretzschmar:** Any kind of -- well, where it's not contained with a lockable pin...

**Adam Stacoviak:** Yeah. So let's go back to Mergerfs. We kind of dovetailed a little bit there, talking about our flavor of file system... Which I feel like any given person who has dabbled with or played with ZFS - which I've never used Mergerfs; so I've never done this. I like the idea of it, but then again, I don't even care, I guess, about the true, or what you would call the hidden cost of ZFS. I think you linked to it at least from one of the pages you mentioned, where you were talking about Mergerfs on perfectmediaserver.com.

I don't mind the hidden costs of ZFS. I felt like "You know what? If I want reliability of my data, I don't mind commanding Linux. I don't mind mainly installing ZFS and managing it. And I don't mind throwing a couple extra hundred bucks at RAM just to make sure I have --" I mean, I run ZFS on Ubuntu on a ZimaBoard as a backup target. I don't care if it's got enough RAM, because I don't care about performance. I'm not accessing that data. I'm backing up to it. So I don't really care.

And people will say ZFS is inefficient with RAM. I think it's actually efficient with RAM. It's using it on purpose. It's not accidental, it's by design. And it's better suited for ECC.

**Alex Kretzschmar:** Right. If you're reading the same thing from a spinning disk two or three times, it's going to put that at the top of the cache. Like, you're in the middle of a video edit or something... It'll bring those assets into RAM, and they'll sit there, so they don't have to go to disk every time. So it's super-efficient. I mean, yes, it uses a lot, but that's kind of the point of RAM, is it not?

**Adam Stacoviak:** \[00:24:03.09\] Yeah. That is the point of RAM. I'm gonna see if I can go and find a response. I don't do a lot of tweeting, I would say, or X-ing, or posting on X, but a potential mutual adjacent friend of ours, Christian Lampa, which you may know from YouTube, potentially...

**Alex Kretzschmar:** Yeah.

**Adam Stacoviak:** I like Christian. I like his content.

**Alex Kretzschmar:** Yeah, I know Christian.

**Adam Stacoviak:** But he shared this sentiment recently, and I think he was really just probing for feedback. And he says "I'm wondering if you really need ZFS in a home lab. A simpler and less--" and this is where I was going off on like the inefficiency. "A less resource-hungry file system seems like a great alternative." And he puts the thinking emoji. And I just responded with kind of what I just said here. "ZFS is resource-efficient. Why would you not want all that it offers just to save a few hundred dollars on RAM?"

It is a very amazing file system. Now, the expanded ability you talked about earlier, where you have to have rate expansion, or disexpansion - yes, there are limitations there. But I think those limitations come with knowledge of how it works. So mirrored vdevs, or whatever you might do to expand your pool. There are limitations there. And going back to Mergerfs, which I've never used - how does that compare to ZFS when you have to expand it? I know you mentioned you don't use it for certain data, but where do you use Mergerfs versus ZFS?

**Alex Kretzschmar:** Mergerfs literally globs together any disks that you supply underneath a specific glob point. So for example, you could have three or four disks in your "array" today. And you could pull one of those drives; immediately, it would disappear from the pool. There'll be no data loss, because the magic of Merger is that each disk has an individually readable and addressable filesystem on it. There's no striping of the data.

Downside is that there's no parity either. So you need a third-party tool to generate some kind of redundancy for a mergerfs array. So something like SnapRAID, which is a snapshot -- it basically takes a snapshot of your data disks, and then calculates parity on that. A little bit like UnRAID, although UnRAID does that in real time, versus SnapRAID, which does it as a cron job that you run every day, or something.

With ZFS, as we've said, you have to expand the vdevs very carefully. But with Mergerfs you can add and remove drives willy-nilly, because each disk is an individual file system; it doesn't matter. There's not going to be any data corruption, or anything like that.

So if you are just storing a bunch of movies and TV shows, and you don't need the utmost in bit rot protection and all the fancy stuff that ZFS offers you, it's a very cost-effective way to build out a small system. The performance is pretty good, too... So it's based on top of Fuse, which is a software layer of like a file system that basically runs in user space, rather than kernel space. So there are some performance limitations. It will easily saturate a gigabit connection, don't get me wrong... But you'll use a little bit of CPU as you do it. So things like the ZimaBoard, that are a little bit less powerful, may struggle to saturate a gigabit connection with Mergerfs, for example... Whereas with ZFS, because of all the caching and stuff, they might be fine doing the same thing. So really, it just depends. The answer in building servers and infrastructure is always "It depends."

\[00:27:39.08\] I just, for example, this weekend wrote a blog post about doing a bunch of Quick Sync hardware video testing to like figure out "Is an eighth gen Intel CPU that much better than a 13th gen, versus an Arc Pro for basically people running Plex Media servers?" And the outcome, much to the chagrin of Reddit, was "It depends." \[laughs\] It depends on what your budget is, it depends on how many streams you're doing, it depends on what the availability of specific used hardware is in the marketplace this month, et cetera, et cetera. And the same is true across -- when you build a certain system, whether it's a media server, whether it's a network, whether it's deciding what to have for lunch - there's always compromises you've got to make. "Oh, I've run out of cheese, so I can't make this particular thing." Or "Oh, well, I can't get this particular brand of whatever thing I like." It's a tenuous analogy, but bear with me...

**Adam Stacoviak:** I'm following you.

**Alex Kretzschmar:** I just think that there's a lot of "It depends" in our line of work, and it annoys people sometimes that that's the answer, but it's the truth.

**Adam Stacoviak:** Well, when I went to that post, I was like "Where is your definitive answer here?" And all you gave me was data, and I was upset. So I'm with them. \[laughs\] I'm just kidding. I was just looking for "Give me the silver bullet, Alex. Which CPU is it? I'm buying it right now."

**Alex Kretzschmar:** Well, okay. Okay. So the answer is if you have budget coming out the wazoo, just buy the newest stuff, because it's got the most codec support, it's got the fastest cores alongside it, so all the software encodes that you might want to do are faster. It can run VMs, it can run a million containers, and not even break sweat. But if budget's a concern - and this is where the hidden cost of ZFS, again, starts to rear its head... The whole reason I got into Linux in the first place was something called PCI passthrough. Because I was a poor student doing my master's, and I couldn't afford a second computer. So I was like "Right, I'm at my desk at home, writing a dissertation. I want a desktop computer", and I couldn't afford one. "So can I just throw a graphics card in my server, and then do PCI passthrough, and then make two boxes behave like one?" We all remember the Linus video "Seven gamers, one CPU", I think, from a long time ago... It's that kind of principle. And it's just a rabbit hole. You can always find rabbit holes to go down with Linux. And for me, PCI passthroughs was the one that got me, and then self-hosting has been the one that's got the after that.

**Adam Stacoviak:** Yeah, for sure.

**Break**: \[00:30:15.06\]

**Adam Stacoviak:** It's interesting how some version of "Not good enough" got us to where we are. My version was trying to run Plex and various data stores, basically, via the platform I had available to me, which was a Macintosh. And I had repurposed Mac Minis, etc. And yours was Synology. Do you recommend Synology to this day? Is there places where you think that platform fits? Or is it just never a thing for you? Like, would you give it your grandmother, or to your mom? Who is Synology for?

**Alex Kretzschmar:** I'm laughing over here, because my answer is gonna be "It depends."

**Adam Stacoviak:** Oh, gosh... Come on.

**Alex Kretzschmar:** \[laughs\]

**Adam Stacoviak:** Well, you can't say that anymore. No more.

**Alex Kretzschmar:** Well, it does, because there's a lot of useful features in Synology for small to medium businesses. They've got a lot of stuff with 365 integrations, and Google Suite backups, and Vim support for all sorts of like Windows host client backups, that kind of stuff... But they did some skullduggery which kind of ticked me off a bit with hard drive incompatibility. So unless you use Synology-branded hard drives, after I think it's three or maybe five years, they'll start throwing warnings, whether the hard drive's good or not, saying "You are not using Synology-supported stuff." And I'm like "Dude... It's a hard drive."

**Adam Stacoviak:** Yeah, come on.

**Alex Kretzschmar:** I know you want to lock people into your stuff, but that's just not cool. So...

**Adam Stacoviak:** Yeah. I mean, even -- my issue with Synology was similar to yours, where I was coming from Softraid on a Mac. I don't know, are you familiar with Softraid, by any chance?

**Alex Kretzschmar:** I think I looked at it a long time ago, but not recently.

**Adam Stacoviak:** I mean, it's similar to I guess an installed file system like ZFS, in the fact that it's software RAID, not hardware RAID. And I think they recently, like in the last couple years, began to have a Windows version of it. So I think for a while there, it was only on a Mac. And I've found out about it because of OWC, which is a pretty well known hardware manufacturer for a lot of Mac peripherals. And so they have these things called ThunderBays in four drives, six drive, eight drive, I think rack-mounted versions of it... And then Softraid was the preferred thing you would run as software to do the RAID. And so that's kind of how I found out about it. And my disks and system in that case, while the unreliability of the cable is known, the reliability of the software and the speed of it in the hardware was amazing. If it weren't for that cable, I'd still be there. Like, if the cable didn't disconnect, I'd still probably be back in that world. So... Whatever.

The point I'm getting to is that my experience with Synology was not terrible, it was slow. Moving from a very fast system, like the write speeds, no matter what configuration I did with it... And this is back when I was only on one gigabit Ethernet, because 2.5 and 10 just wasn't available to mere mortals like us at the time... This was multiple years ago. And now it's sort of an everyday thing now. But I just could not get write speeds, and I'm like "This is just crazy. How are these things very -- just very slow, just very slow."

And so I got frustrated with the fact that "Well, I'm going to spend a lot of money on the Xeon processor, in this Synology..." Because I'm go big or go home kind of person. I'm gonna put RAM in it, I'm gonna stuff it with hard drives, eight terabyte at the time I think was the drive size... And it was a Xeon processor, and I'm like "This is --" And I didn't know. I thought "Just throw in a Xeon processor. That's how you get the speed. Okay?" That's not exactly how you get the speed. That's how you get the computation, but not speed.

\[00:35:59.16\] And my experience was just that it was like "Well, very expensive hardware, for really not that great of performance, personally." And so that's what sort of set me on like "The only way to get there is to learn Linux, and bite the bullet, and dive deep in." Eventually, I built my own thing, my own box and whatnot, I chose the motherboard, I chose the CPU, and that was a very fun, very rewarding experience... Because to this day, I'm like steeped in loving all things what we call home lab now. It wasn't called home lab then, but it is now, and that's what unifies us, this single word. It's like "Okay, do you speak home lab? Okay, we could be friends", kind of thing.

**Alex Kretzschmar:** And it all started from a Plex server. Slippery slope.

**Adam Stacoviak:** It is a slippery slope. Yeah. It absolutely is. So I guess you do recommend Synology in certain cases, but you would not personally use it yourself, because you've transcended that.

**Alex Kretzschmar:** They're an appliance, aren't they? They are good at doing... So a remote backup system, for example - I have one in my infrastructure at my mom's house in England, and I use... So I've got two offsite backups. One is at my mother-in-law's house, which is my old English... So when I emigrated six years ago, I left my old server in England, full of the old hard drives, and I'm like "Right, I'm just gonna leave this in a closet. It's just going to run until the end of time." When we went back a couple years ago, I upgraded the CPU, and dusted off the hard drives, and stuff. So it still works, it still goes just fine. It's got like 20 terabytes worth of ZFS drives in it, and it's a remote endpoint that I connect to over Tailscale.

The other one is the Synology box at my mom's house, and I use something called Restic, which is a file-based backup system. I configured that using a tool called AutoRestic. I used that combined with MinIO and S3, running on the Synology to do file-based backups. Because obviously, ZFS Send is a block-level thing, whereas Restic is file-based. So you've got a separation of concerns there. If there's ever any issues with my ZFS snapshots getting borked for some reason, I've got a completely separate system, again, over Tailscale, to another box somewhere in England, using Restic.

So that's what I use it for, and the performance - I couldn't care less whether it's half gigabit or 10-gigabit speeds or whatever, because my spectrum up load is going to be the limiting factor no matter what happens.

**Adam Stacoviak:** Restic, AutoRestic, Tailscale... Gotta mention Tailscale, right? You know I love Tailscale.

**Alex Kretzschmar:** Well, yeah, corporate shill time... I mean, they do pay my mortgage now, but... I used to -- well, before I worked there... In fact, they sponsored Self Hosted again, long before I worked there... And I made a video for them about a year ago -- or I made a video about them; I shouldn't say for them. I made a video about them a year ago, which caught their attention... And they said "Do you want to come and do that for us full-time?" And I was like "Yeah, sure." So that's what I do now.

**Adam Stacoviak:** Very cool. Well, yeah, we are also sponsored by Tailscale, as you are well aware of... And I also used Tailscale before that. I think I even pursued Tailscale, I'm like "Hey, I love y'all. Can you please just find a way to make a value proposition between us? Because I feel like we reach your audience." And that was pretty easy for me.

That's cool how you made that video, and I was checking out the YouTube channel for Tailscale recently, and I was noticing how when you took that over - I don't know if you actually took it over, but you're more prominent there, if not the most frequent there... How much better the production is of it, how much better the content is... But there was -- I think Tailscale Up was a conference. And there was content there, but it wasn't -- it was just sort of like you just throw content there. It was a content bucket. It wasn't a driving force of the information around the product... Which I think you've done a really good job of producing those videos.

\[00:40:00.24\] Again, I don't know you too deeply. I've been a fan over the years, but I wasn't so steeped in knowing all the things you've done. You do a really good job with producing those videos, and that takes a lot of - I would say skill, and then also on-camera personality. You do a really good job of the content, and the production part of it, too.

**Alex Kretzschmar:** 95% is the accent, though, I think...

**Adam Stacoviak:** Yeah, I mean, you do have -- that is your secret sauce. I can't -- maybe I could do that. I don't know. I don't have your accent, that's for sure.

**Alex Kretzschmar:** Every American that ever tries to do a British accent that I've heard, that goes "Hello, governor..." \[unintelligible 00:40:31.15\]

**Adam Stacoviak:** Oh, I don't even try. I don't even try to impersonate the British language or accent at all. It's just not -- I can't do it. I can't do it.

**Alex Kretzschmar:** No... When people ask me to try and do an American accent, I always turn into a Southern \[unintelligible 00:40:47.20\] so I try not to.

**Adam Stacoviak:** Right. Do you know Mat Ryer, by any chance? Is that name familiar to you? Mat Ryer?

**Alex Kretzschmar:** No.

**Adam Stacoviak:** Matt Ryer is also -- I believe he lives in London. I could be wrong where exactly he lives... But he always, when be podcast with him -- he's a friend of ours. He works at Grafana, but he's also done tons of stuff in and around the Go world. He always tries to mock/impersonate me, in particular, and my accent... And he just doesn't do a good job, in my opinion. But whatever. I digress.

**Alex Kretzschmar:** We did pretty good, eh? We made it sort of like 35 minutes in before we mentioned Tailscale.

**Adam Stacoviak:** Well, you mentioned them, not me though.

**Alex Kretzschmar:** I'm always pleased when that happens.

**Adam Stacoviak:** But yes, we --

**Alex Kretzschmar:** I know, I know. I brought it up. It's just how it goes.

**Adam Stacoviak:** They might actually be sponsoring this episode. I don't know. I think we've got them on the schedule still yet. I'm not sure when it'll land, but I think this may be, it may not be... But I'm happy to mention Tailscale, sponsored or unsponsored, because I'm a true fan of Tailscale. It's the only way for me. I mean, I can do my own VPN stuff, but it's just like "Why?" I think an overlay in most of my cases is exactly what I need. So...

**Alex Kretzschmar:** You know, I find interesting - you mentioned about like video production and things being a bit of a difficult thing to do. I don't think when I took the job I'd appreciated quite how much being full-time in making content was a lifestyle job. You know, when you go to sleep at night, you're sort of noodling on an idea, "How do I position this particular thing?" Or you're just driving, taking the kids to school or something, and it's always there at the back of your mind. Do you find the same thing with doing a podcast on the regular, like you do?

**Adam Stacoviak:** Oh, yeah. Absolutely. I think, for example... Yeah, if I know we have an upcoming conversation happening, usually in the week or the couple weeks, or a topic I want to broach - the exact same thing. I'm thinking "Well, who's the best person to talk to about that? Should that be based on the project? Should we have them on Friends and talk about it in a more talk show format, where it's more loose and less interviewy?"

Absolutely. Yeah, I think that's -- and you kind of always have to be thinking about not so much unique ways, but not just simply slapping some people together and just talking. You're gonna have to have some purpose. And then I'm thinking -- for example, I'm having Bryan Cantrill on this week, which actually will come out next week on the actual podcast, but recording this week on Wednesday... He and I are both --

**Alex Kretzschmar:** \[unintelligible 00:43:21.26\] really loudly and that will upset them.

**Adam Stacoviak:** Yeah, precisely.

**Alex Kretzschmar:** Do you remember that video from forever ago?

**Adam Stacoviak:** No. What was the video?

**Alex Kretzschmar:** Bryan Cantrill, in a datacenter, with a latency chart of sums ZFS servers, showing him shouting as loud as he could into the server rack, and how that vibration of the hard drives caused a latency spike. It's like a super-old --

**Adam Stacoviak:** What?!

**Alex Kretzschmar:** Yeah, it's pretty interesting. I'll see if I can find it and send it to you.

**Adam Stacoviak:** Back in his Joyent days, I bet.

**Alex Kretzschmar:** Yeah, probably.

**Adam Stacoviak:** Yeah. Well, he and I are both - I guess to put it mildly - super-fans of Silicon Valley...

**Alex Kretzschmar:** The TV show, I assume.

**Adam Stacoviak:** \[00:44:01.20\] Both, actually... But yes, the TV show for sure. Silicon Valley the TV show. And I'm wondering if it would upset people if we just talked about that the entire time. And I don't think I'm going to do that, but as part of this whole "I'm driving my kid to school", or I'm driving from here to there, or doing this, I'm in the backyard cutting grass, listening to a book, but also side chatting with myself in my own brain, this future of "How will I present X to Y?" kind of thing is definitely there. It's like "Would that really upset people, if we talked about what are my most favorite scenes? Can we spend 20 minutes with that? What if we spent 30 minutes? What if we just talked the whole time about Silicon Valley the TV show, would that really upset people?"

**Alex Kretzschmar:** It's got to be when Russ Hanneman turns up with his car with the doors that do this, not this, right?

**Adam Stacoviak:** Yeah, "Not that." Yes, precisely. Yes. Or looking for thumb drives in the trash heap. You never know...

**Alex Kretzschmar:** They did a remarkable job with that show, honestly, of making it believable, yet entertaining, yet obviously fake, all at the same time.

**Adam Stacoviak:** Are you a super-fan of Silicon Valley then?

**Alex Kretzschmar:** I don't know what superfan qualifies as, but one of my servers is named Anton in honor of is the garage server of Guilfoyle... So perhaps yes.

**Adam Stacoviak:** My Pi-Holes are Guilfoyle and Dinesh.

**Alex Kretzschmar:** Fantastic.

**Adam Stacoviak:** I have two Pi-Holes.

**Alex Kretzschmar:** That's good.

**Adam Stacoviak:** I mean... \[laughs\] I used to have Richard in there, and I think Gavin was in there as well, but then I minimized, because I had two locations for a while, and now I only have one, so we have two in one location... So Richard and Gavin were --

**Alex Kretzschmar:** I tend to name my servers after favorite fictional characters. Mooncake is one, from Final Space. Magrathea is another, from Hitchhiker's Guide.

**Adam Stacoviak:** Oh, yeah. Magrathea. That would be so awesome. You're right.

**Alex Kretzschmar:** I have a Zoidberg somewhere lurking around, too...

**Adam Stacoviak:** Yeah, I think steeping culture, geek culture, sci-fi culture into tech things I make or build... Like, my main server is called Endurance, because I love the movie Interstellar, and that ship was awesome... And so Endurance is an awesome name, and so my Proxmox box now - it used to be a standalone Ubuntu Server, now it's a full-on Proxmox box, that actually has a lot of different services in it, but the main boxes is Endurance. I love that. So I didn't know you were a Silicon Valley fan... So I guess I would classify a superfan to be somebody who's watched all six seasons multiple times.

**Alex Kretzschmar:** Oh, well, yes then.

**Adam Stacoviak:** Yeah?

**Alex Kretzschmar:** I'm a bit of a Mike Judge fan, to be honest with you...

**Adam Stacoviak:** Okay.

**Alex Kretzschmar:** I never really -- I was a bit young for Beavis, but King of the Hill, Office Space... He's just a genius, I think, that guy.

**Alex Kretzschmar:** Yeah, Office Space definitely resonated with me. Less of a King of the Hill fan, less of a Beavis and Butthead fan. Definitely more of his, I guess, more adult... Beavis and Butthead was a little too immature for me.

**Alex Kretzschmar:** I'm still working my way through King of the Hill for the very first time.

**Adam Stacoviak:** How was it?

**Alex Kretzschmar:** I think I'm at like season six or seven, or something... But it's one of those ones that I just put on every now and again, and I'm like "Oh yeah, this is kind of --" But it's amazing how it's still totally culturally relevant.

**Adam Stacoviak:** Really?

**Alex Kretzschmar:** Yeah. Yeah. It's basically a show about parenting, masquerading as an entertainment show of the time... And a lot of the stuff, particularly as I view America with a bit of an outsider's lens, I feel like Mike does a really good job of, again, in Silicon Valley, of doing the same thing, of giving you the perspective of an outsider ridiculing the people, but also empathizing with them at the same time.

**Adam Stacoviak:** \[00:47:40.06\] Yeah. I feel like Silicon Valley the TV show is an absolute masterpiece. Every time I rewatch an episode, I see something new and unique and different... There's like a little detail always in there. And one I shared recently - I believe I shared it in our Slack, and maybe via DM to somebody... It was the fellow that was at the data center. And I believe, if I can look it up really quickly, his name - it was at Maleon data center. His name is John. That's right, John Browning. And there's a scene where he is standing in front of the servers, and you can clearly see him current, because he's the person standing there, the cameras facing... And then you see his name badge connected to his shirt pocket. And you see Young John, clearly, in his name badge. It's got his photo on it, his name... And he's so young, and so seemingly full of hope. And then obviously, the current image of him is hair pulled back, kind of frizzled, defeated for the most part, but content with what he's doing... And you see this juxtaposition between John Browning now, to John Browning probably when he started at this data center, years and years ago. This photo was taken probably day one of him being an employee there, and he's just so young. He's probably in his, I would say 19, early 20s in the photo. And then obviously, John Browning as we know him, as the character, is not in his 20s. He's more probably I would say closer to his 50s.

**Alex Kretzschmar:** And as that character ages, then he and Guilfoyle strike up this relationship through that chess game.

**Adam Stacoviak:** Yeah.

**Alex Kretzschmar:** And it's like "I'm gonna move one piece", and Guilfoyle keeps getting beaten and he's like "Ugh..."

**Adam Stacoviak:** Yes.

**Alex Kretzschmar:** It's just -- yeah. Do you like that character?

**Adam Stacoviak:** Yeah. I mean, all the characters I think are very special, in a way. Monica's character arc was really interesting... Initially, we thought she and Richard would have some sort of relationship that never happened. I think they canceled that, because it doesn't seem like this should be a love story... "So let's tease it, but let's just like put the tension there." I think if she saw his thing when he was going to the bathroom, and there was a joke later on about her seeing it again when he goes to the bathroom, because Laurie Bream put her down at the end of the hall, right in front of the men's bathroom as a way of retribution...

**Alex Kretzschmar:** Are all VCs quite so? I've never dealt with one personally, directly. Are all VCs weird like that? I know they're portrayed perhaps a little rigid.

**Adam Stacoviak:** You know, I think it's a stereotype to some degree, but I think there's a lot of truth in the stereotype... Because every time I speak to people who I know personally and well, where I believe them to tell me the truth thoroughly, tell me that they've had unique experiences with venture capitalists. Are they all like that? I don't know... But I think there's some version of some truth there.

Now, I think Laurie Bream's character was uniquely packaged, let's just say. She was uniquely odd. Because I think to be in that kind of position, you have to be such an analytical person, and potentially removed from empathy to succeed, right? There's a certain breed of person that's highly successful in that kind of strategic position, that the ones who thrive the most are the ones that have lack of empathy.

**Alex Kretzschmar:** You're probably right.

**Adam Stacoviak:** Or not very good with understanding.

**Alex Kretzschmar:** Because if you want to make a decision that's right for the business...

**Adam Stacoviak:** Oh, yeah.

**Alex Kretzschmar:** ...of like outsourcing a certain entire department and making hundreds of people redundant locally... Like the whole Chinese factory situation that they cover.

**Adam Stacoviak:** Right. With Gavin. He's like "I don't care. This is not the new China. I want the Old China." Right?

**Alex Kretzschmar:** Yeah. Yeah.

**Adam Stacoviak:** "Why are these kids here singing to me? Get them out there working." Like, it's a bad demeanor to have as a human being. But that was -- he's like "I'm here for a reason. Build my boxes." Well, it sounds like you and I could probably talk about Silicon Valley for a whole entire show too, so maybe we should --

**Alex Kretzschmar:** I mean, it depends... If we're agreeing on whether Jackson Hole is closer than --

**Adam Stacoviak:** Oh, it's definitely further. I think Gavin proved that with the 10 flights he made -- what was his name, his sidekick? What was his name? I try to remember all the character's names very well...

**Alex Kretzschmar:** It escapes me, too. So...

**Adam Stacoviak:** \[00:52:03.29\] Hoover. Hoover was his name. I love that character, too. Gosh. I mean, the way he was gonna throw down on - Patrice was her name? ...when she was talking crappy. He's like "Some would argue that none of the things you ever invented was actually good for the company. It never made money. It would have been better if you didn't invent those things at all." And he was gonna like \[unintelligible 00:52:21.27\] up on her and like attack her. And Gavin was like "Stop that, Hoover!"

Anyways, back to some home lab stuff. Gosh, we could probably go on about that. So I was also catching up with your current stuff, your blog, as you'd mentioned, blog.ktz.me, which is a cool domain... And you mentioned a while back - and I haven't played with this personally yet, and I know you have a YouTube video on it... It is on the Tailscale user, or I suppose channel on YouTube... And you built out an OpenSense box here on your blog back in 2023, like last year sometime. Not that old... So if you built this recently, it's still current for you. Like, November to now is not that far, so this is not ancient history. But it's a bit -- it's not this year.

**Alex Kretzschmar:** Well, that box is actually pretty ancient. I built it the week I emigrated to America, but I only finally got around -- because doing a podcast, as I do, I quite often mention Open Sense, and things. And folks are like "Oh, Alex, what build you running for it?" And I'm like "Well, it's this really old i3-3225", so third-gen Intel chip that these days is worth about $6. So the build is still relevant. I actually got fairly recently a UniFi PDU Pro, which lets we look at the individual power draw of each plug socket that each device is plugged into... And I thought that this box pulled somewhere in the region of 10 to 15 watts. Unfortunately, it pulls more in the region of 25 to 30 Watts. Old hardware is less efficient, that kind of a thing. So I am kind of on the lookout for a replacement. I might get one of those M100s or something similar that has like a handful of 2.5-gig NICs on it. Or I might try and build something with SFP+ in, because I've gone 10-gig in the house since I built this box...

Also, I hear reliably that my Spectrum woes may be over soon; that AT&T are apparently going to be servicing my neighborhood with fiber, which goes up to five gigs. So I might actually need more performance from the firewall soon, anyway.

But if you are looking for a fairly cheap-ish kind of build-it-yourself firewall, it's pretty hard to beat an Open Sense box. So solving that sort of $150 to $200 range, you can put together your own Mini ITX-based system with a really old CPU for pennies off eBay. It just depends, again - I know I'm banned from saying it, but it depends on what the availability of different hardware components are. You may find it's hard to find a very old specific Intel motherboard with two NICs on it, for example. The DQ77KB is the one that I used in that build, because it has the dual NICs. You could look on AliExpress and find a more modern, more power-efficient system for not much more money... So it really depends on what you're looking for.

**Adam Stacoviak:** Well, there's a couple of things in there that we can talk about, which is, one, should you run your own router/firewall, versus just buying UniFi? Which - you mentioned UniFi in the power switch at least... What was it, the --

**Alex Kretzschmar:** I've got a lot of UniFi gear in the house. Yeah.

**Adam Stacoviak:** And I'm a fan of UniFi. And in all honesty, my home lab is not so precious to me that I need to run all the services like maybe you might be, because you're more professionally aligned with that being a true thing for you, so that you can leverage the ideas and the content for your Tailscale job, and your personal podcast...

**Alex Kretzschmar:** That's the excuse I give Amex every month anyway... \[laughs\]

**Adam Stacoviak:** \[00:56:04.29\] Yeah. So I guess the one thing is power efficiency, you've mentioned a couple of times, which - I'm becoming more and more power efficiency focused. Not so much that I'm like "Wow, that's drawing so much. I need to cut it down." But at the same time, here in the US, and I would say in a lot of places, there's inflation of prices for groceries, inflation in prices for our power, and I know that my power bill in this summer is likely going to be around $300 to $400 a month. And that's insane. It's just insane to think that's the norm.

**Alex Kretzschmar:** Well, when I emigrated six years ago, the power price per unit, so kilowatt-hour was about 10 or 15 pence a kilowatt-hour or something like that, in London. Where I am in North Carolina it's 12 cents a kilowatt-hour, give or take. So... So far as I'm concerned, in my personal infrastructure, 12 cents is about $1 per year per watt, give or take. And I'm totally fine with that. If my rack - which I've got the data now to prove this - pulls 300-400 watts, am I getting $300 or $400 worth of utility out of that spend every year? Well, most definitely, because as you mentioned, I use it to -- it's like a carpenter with his chisels, right? I'm using it as part of my day job, it gives me a lot of utility in terms of Plex, and Jellyfin, and all that kind of stuff.

But on the UK side, my old UK server for example that's at my mother-in-law's house - it's gone from 10 or 15 pence a kilowatt-hour up to 40 or 50 pence a kilowatt-hour in the last couple of years... Which is quite a big difference. And it's not my power bill that it's affecting, but I'm still cognizant that I don't really want to be running really old dual Xeon boxes, for example, that are hot and noisy, and drawing down hundreds of watts just sat there, doing nothing. So that kind of base idle power draw is a big attraction for me; if I can get that down under 100 watts for a big server that's got half a dozen hard drives in it or whatever, then I'm all about that.

**Adam Stacoviak:** So you would not say that you're -- you're aware of the power draw, but you're not fixated on reducing everything to as low as possible. You do shop for efficiency though, right?

**Alex Kretzschmar:** Generally, my stance in life is pragmatism. It's the reason I'm talking to you from a MacBook today. It's the reason that I don't necessarily -- as much as I don't agree with everything that Plex has done in terms of like user data sharing over the last couple of years, I still run a Plex server just for a couple of bits and bobs here and there... Although I'm getting closer every day to switching it off and going Jellyfin full-time.

**Adam Stacoviak:** Is that right?

**Alex Kretzschmar:** But that's another discussion. You know, it's just pragmatism first. I want to achieve a certain task, I want to achieve a certain goal with technology, with computers, whatever, and sometimes you just have to sacrifice or compromise on a couple of scruples to get there.

**Adam Stacoviak:** Well, let's go there. Enlighten me. Because I don't have a reason to entertain Jellyfin necessarily... I'm not in the details necessarily of the amount of user data sharing that Plex is doing. I do think that I've always wondered what will happen when the person who is me, that is really only using Plex to serve up my own data, my own movies -- and it seems that they're moving more and more into some sort of streaming thing, which I think is sort of turning their back on, or turning away from their core audience, or at least what got them to where they're at. Now, is that wrong, I don't know.

**Alex Kretzschmar:** \[00:59:49.20\] That's absolutely right. I mean, if you think about the business model of Plex, there isn't really a huge amount of money in letting people serve their own content on their own boxes. You're just not injecting yourself into that transaction anywhere. Whereas if you are streaming stuff through some internet-based TV service, you can claim that you were the originator of that traffic, and probably gain a couple of pennies per stream. Over time, that's going to add up, Office Space style.

But the issue with Plex is that fairly recently, sort of six months ago, they decided it was okay -- this is just one example in a long string of FUs to their user base, I think... They decided it was okay to send all the people you were friends with on your Plex server, your watch history. They sent you a little email, like a newsletter, saying "Hey, did you know Alex just watched Silicon Valley?" And you think to yourself, "Well, that's cool. I didn't know Alex was into Silicon Valley", for example, or Star Trek, or whatever it is. But then you extrapolate what needed to happen in order for them to send that email. They know what content must be on your box, because they've done some kind of a content ID to say "This file is Silicon Valley." Okay, we know they do that through the metadata stuff anyway... But now know that that must be stored on their servers somewhere. They've then cross-reference that with you and your user ID, and then they've gone on and decided it was okay to actually make that publicly available, "publicly", to people within your friend network on Plex, which I don't believe was part of the original idea behind Plex. The whole point was to share files from my local box, and not involve a third party and allow that kind of data collection to happen. I just think it's completely unacceptable for them to collect that data in the first place, let alone share it.

**Break**: \[01:01:45.04\]

**Adam Stacoviak:** And how does Jellyfin compare when you compare --

**Alex Kretzschmar:** Well, it doesn't have a cloud component at all. So one of the big issues with Plex is that if your internet goes out, you can't log into Plex; even though the software is running locally, even though the files are local, you can't authenticate. So you can't access Plex. Jellyfin is completely self-contained and completely local, fully open source compared to Plex, which has a closed core. And Jellyfin, as a consequence, doesn't provide some of the niceties that Plex does, like friend sharing - you have to do this all yourself. User management - you have to do it all yourself. There isn't really an easy way for remote friends and grandparents or whatever to access stuff on your server without opening up ports in your firewall, or getting them to use something like Tailscale.

It's a lot more do-it-yourself. You've got to bring a lot of the pieces of the jigsaw together yourself with Jellyfin, and some of the clients are -- they're good, but they could be better. They're not quite as polished as Plex, for example. They don't have a Samsung TV client... I mean, I don't know the last time I went to a random TV app store and didn't see a Plex client. With Jellyfin unfortunately that's just not the case yet.

Look at the business model... With Plex, the business model is monetize the user's data, it looks like. And with Jellyfin - well, it's a free and open source project with no financial incentive, really; they're just a bunch of cool people making cool -- like, it's the true spirit of what open source means.

**Adam Stacoviak:** Yeah, I think where I struggle potentially with open source - and I'm obviously a huge fan of open source... But where I see interface meet open source tends to lack in comparison to something that is funded. I.e. Plex has a phenomenal user interface. They've got apps for every platform. And I think if you lean on open source in that way, because there's no financial incentives, there's going to be some sort of diff between my NVIDIA Shield version of my application for Plex or Jellyfin, versus the Apple TV version that I also run in the same household. And that's where I'm like "I don't want to lean on open source now." I would love it if it was amazing... But who's going to make it amazing? I have no idea. I don't want to sound like an anti open source person, but that's just where I'm like --

**Alex Kretzschmar:** It could be you, Adam.

**Adam Stacoviak:** Oh gosh, no.

**Alex Kretzschmar:** It could be you.

**Adam Stacoviak:** It would absolutely not be me. I would support --

**Alex Kretzschmar:** PRs welcome, right? That's the running joke, isn't it?

**Adam Stacoviak:** \[01:07:41.04\] That is the running joke. And I think that's the beauty and the challenge of open source, is that PRs are welcome. And that if you want change, you be the change. And I'm down for that, and I would be way down for that if I was younger. It's not where I would value my time. I would rather exchange a lifetime license fee like I've done with Plex, in a way to pay for it, versus pay for it with my time, simply because it's just not where I'm at. I would welcome anybody else who feels they have that time to do so and get good value from it. That's how open source works, is you also show up and you give value, and you get value in your career, your opportunities, or you get value as a user, or you get value as a sponsor of open source, or whatever it might be. I'm not that person at this moment, nor will I be in the foreseeable future... So not to anti open source, but just like --

**Alex Kretzschmar:** So which is right then, Plex or Jellyfin? Dare I say the answer is "It depends..." \[laughs\]

**Adam Stacoviak:** It depends. It probably does depend. Well, I think it gets more clear to me, and I may have to make compromises on my user experience, if Plex keeps going the direction it goes. Because I've already gotten like this feeling of they care less about the kind of user I am for Plex, even though I've given them a lifetime pass. Like, I've bought the lifetime pass that they've asked me for. I've exchanged the request of me as a consumer, and have done it a few times too, because I have other users that are in my network. And so I have multiple lifetime passes. But I see more and more that Plex is less seemingly like they're for what I'm trying to do with Plex itself. And so maybe Jellyfin is my future.

**Alex Kretzschmar:** It's obvious when you look at the features they choose not to prioritize.

**Adam Stacoviak:** Like what?

**Alex Kretzschmar:** Well, audiobook support for example has been high up in their user forums. They have this upvoting feature that Plex Pass users cannot request certain features. Audiobook support, for example, has been high up that list for many years, and they just -- they're not interested. And if they were interested in becoming like the premier self-hosted fully local file serving thing, they wouldn't be adding all of these streaming services, and all this other stuff that nobody's asking for really, other than somebody who needs a bottom line padding somewhere.

**Adam Stacoviak:** You're right. I mean, I think -- so I use Plex Amp.

**Alex Kretzschmar:** Oh, Plex Amp is fantastic, though.

**Adam Stacoviak:** I think it's great. It could be improved.

**Alex Kretzschmar:** In what way?

**Adam Stacoviak:** It's just not as modern as it could be. It's not as fast as it could be. There's a level of caching it can do at the client level that it doesn't do... There's definitely UX improvements in particular. I think the UI is not the worst ever; I would say it's okay. There's definitely ways it can be improved upon when it comes to --

**Alex Kretzschmar:** But the recommendation engine, the bit that actually matters, is pretty good. And it's on par, if not better than what you get from the Spotifies and the Apple Musics of this world.

**Adam Stacoviak:** Yeah.

**Alex Kretzschmar:** And it's all local. And I really appreciate their mood playlists and stuff like that that it figures out for you. I did hear a rumor - and I don't know how true this is - that they are working on some kind of a Spotify Connect style Plex Amp feature, that will let you stream to multiple endpoints (a bit like Sonos do, a bit like Rune does) from Plex Amp. And if that comes, then it really will be unquestionably the greatest self-hosted media player. Or music player, I should say.

**Adam Stacoviak:** Yeah, I think -- I'm down for that. I mean, I think audiobook is probably next. I'm a big -- despite Cory Doctorow being what I would consider a friend and multi-guest appearance here on the show and other shows we have here, telling me that I shouldn't be, I'm a fan of Audible. I mean, they've really done a great job cultivating good content. Now, their demeanor as DRM, and lockout, and artistry, and strangling the market... Forget all that stuff, okay? I get the books I want.

**Alex Kretzschmar:** Audible, as you say, has done a lot, like Amazon and Walmart before them, and \[unintelligible 01:11:48.06\] before them. They've all done these things to strangle mom and pop and local independent media outlets...

**Adam Stacoviak:** Right.

**Alex Kretzschmar:** \[01:12:01.05\] And at least Audible gets people paying for books and authors get paid. That is a huge plus. If you're interested in liberating your audiobooks from the DRM that Audible encases them in, there's an app I can wholeheartedly recommend called Libation, which then lets you download the - I think it's an m3u file, or... I forget the -- .aax maybe... I forget the format exactly. It downloads that \[unintelligible 01:12:28.15\] and then spits you out an encoded file at the end, which you can then throw into your Plex Media Server audiobooks folder. And if you're an iOS user, you can use an app called Prologue, which does almost everything you could ever want to basically be a self-hosted Audible clone. So I've got all my audiobooks just there.

**Adam Stacoviak:** Is that right?

**Alex Kretzschmar:** And these are all books that me and my wife have paid for on Audible, so there's no piracy going on here at all. Like, we support these authors, and it's fully DRM-free. So if for whatever reason Audible decided to rug-pull - not that I'm suggesting they're going to, but...

**Adam Stacoviak:** They might.

**Alex Kretzschmar:** If they decide to change the terms of service on us, and books that are more than 10 years old, you can't listen to anymore without rebuying them or something... Who knows...? That's never going to happen to the thousands of dollars' worth of books we've bought on Audible.

**Adam Stacoviak:** Yeah. That's good. I'm going to look into that after this podcast, Libation, and liberate my Audible. Because -- I mean, I don't know how you are... Since you rewatched Silicon Valley, you may relisten to your audiblebooks. There's a couple of books that I relistened to. I've probably listened to both versions of The Martian, the one with Wil Wheaton and the one with the other reader that I can't remember his name... They're both amazing. I like Wil Wheaton's version of it, because he's got that Wil Wheaton-ism that he is... I'm a big fan of Ray Porter as a voice actor. So pretty much I discover new things to listen to and enjoy because of Ray Porter being the narrator of the book. I love Ray Porter. I can just spew out if you want to listen to anything I've got to recommend, you personally or the audience listening. I have no problem.

**Alex Kretzschmar:** Yeah, let's hear it. Let's hear a couple at least.

**Adam Stacoviak:** Okay, I'll pull up my list here... Hold music, please...

**Alex Kretzschmar:** I enjoy listening to -- there's a good balance when I'm falling asleep of like technical... They've got to be interesting, and slightly technical, but not so interesting or technical that they actually hold my attention, but not so boring that they don't hold any attention whatsoever.

**Adam Stacoviak:** Right. That's a fine line, yes.

**Alex Kretzschmar:** So I've found a really good one for that is Adrian Newey's "How to build a car" for F1 nerds.

**Adam Stacoviak:** Really?

**Alex Kretzschmar:** It's a little bit of a life story of Adrian Newey, the famous Formula 1 car designer... And that for me is what I like. If I need to fall asleep, but my brain's racing, I'm gonna put the Adrian Newey's book on and I'll fall asleep in 10 minutes flat every time.

**Adam Stacoviak:** Well, I've got my list up... And I will say, beginning with Wil Wheaton - I know I mentioned Ray Porter. But Wil Wheaton - he narrated Ready Player One, and Ready Player Two. Both of those books are in their own places phenomenal. I think Ready Player One as a book is obviously a lot better than the movie, although the movie was still pretty cool.

I would say I discovered Nick Jones, which I believe is also a fellow UK inhabitant. I don't know. What do you call yourself, national, where you're from?

**Alex Kretzschmar:** Person? \[laughs\]

**Adam Stacoviak:** I think he's from the UK. Nick Jones. But Ray Porter read his series, and it was... Gosh, what is it? I'm trying to find the -- because there's like six books in the series. I'm trying to find the one that I can recommend, that begins it. It's the Joseph Bridgman series. If you look that up, Joseph Bridgman, Nick Jones - I've read them all, or listened to them all. They're all phenomenal. It's kind of like an interesting take on time travel. Really, really cool.

\[01:15:54.11\] A more recent one that I took a little bit to get into, because I'm not really into like military... Although I've been in the military, I'm not really into like military fiction, I'd say. And I got into Jack Carr's series on the Terminal List. And the Terminal List is now a series on Amazon Prime. You can go check that out. I haven't watched the series yet, but the Terminal List as a book, and then the follow-up, True Believer... I think there's one more book in the series; maybe a couple more. It's really solid. I dig it quite a bit.

And then I think my all-time favorite series ever is the Bobiverse. It is "We are legion. (We are Bob)." It is so good. It's a software developer -- it's not spoiling the story. It's a software developer that dies and comes back AI. That's the whole entire premise of the story. So if you read the \[unintelligible 01:16:48.00\] I would say a version of that. That series is like five -- I think it's gonna be six books deep. But Ray Porter reads it for the author, Dennis E. Taylor, whom I think is -- he's actually a software developer himself from Canada, turned author. And he has some really like -- there's a lot of entanglement in the story around the Bobiverse, and We Are Bob, and We Are Legion, and all the different books that have come after it... There's such a -- because it deals with relativity, and space travel, and time dilation, he has software he's homebaked and written to maintain the chronological order of details. It's that entangled. Like, that's cool to me. Behind the book is a software developer turned author that wrote his own software to maintain the chronological order and time dilation details of all the travels that happen as part of the series. I think that's just super-cool. But Ray Porter - pretty much anything he reads, I will at least pay attention to it and consider diving deep into it.

**Alex Kretzschmar:** The narrator makes all the difference.

**Adam Stacoviak:** It does. Yeah, I think that person really has their job set for them. One I really had higher hopes for was this book by Nathan Hystad and Jasper T. Scott, and I think it was called Final Days. It had a really good beginning, it had potential, and then it just got really, really different. And then it ends. It's not a bad finale for how it should end... But if you go and listen to it, it's worth listening to, but it's not a relisten, in my opinion. I will relisten to stories again a year later, a year or two later, because my wife says I'm weird like that... But I just really enjoy things. We don't have this plethora of really good things coming out, and so I have to kind of go back to what I know. And because I have a human brain that forgets the details, or wants to immerse myself even more in some of the other details, I don't mind relistening. I could probably go on, but that's enough for now.

One more... Project Hail Mary by Andy Weir. That's a really well-known one though, because Andy Weir is the guy that wrote The Martian, which became a movie. Matt Damon was the primary character in there... I cannot wait for Project Hail Mary to become a movie. Like, just because I love both sides. I love the deep, deep book... And this book, Project Hail Mary is super-deep in the details. It takes a turn you would not expect. It's a phenomenal book. Ray Porter obviously narrates it, and I'm sure it'll be just as good as the movie.

**Alex Kretzschmar:** I noticed that Ryan Gosling is slated on the -- on the slate for Hail Mary. How do you feel about that?

**Adam Stacoviak:** You know, I don't know, honestly. I would say not judging based on his Barbie performance, because I didn't watch Barbie, and I'm not against it. I just haven't yet... It's like, I eventually have to... And I'm stuck --

**Alex Kretzschmar:** Ryan Gosling is just always very dry in his delivery. And if you like that, great.

**Adam Stacoviak:** \[01:19:54.00\] Yeah, so I've rewatched Drive recently... And it had been so long since I watched Drive the first time, which she's the character in... I had forgotten the entire movie. And I actually questioned, while watching it, like "Have I really watched this before?" That's how far it had been.

**Alex Kretzschmar:** If I recall, there's a lot of very serious looking goes on in Drive.

**Adam Stacoviak:** There is. Yeah. I don't know if I'm that excited about him being the star in Project Hail Mary the movie. I don't know, I can't say for sure... I think First Man was a really good movie that he was in. There's several -- which was basically the story of going to the Moon. That's why it's called First Man. First Man on the Moon. There's a lot of good things about Ryan Gosling as an actor. I think he does a pretty good job in most cases. It could be Ryan Reynolds... I think he was also slated to be -- and I think he's maybe good for it, too. I don't know. There's a comedic angle to the story, too. There's some humor in it. So I don't know.

I would also be certainly happy with a no name actor being found and discovered. Because that's a breakout kind of role. We don't see enough of that these days, I don't think.

**Adam Stacoviak:** We don't. Are you a big movie fan? I assume, since you run Plex, you must be a big movie fan then. Right?

**Alex Kretzschmar:** I think so. Yeah. I mean, I enjoy a good movie as much as the next guy, yeah.

**Adam Stacoviak:** If you had nothing to do for the next four hours, and you can go sit down and nobody's gonna bother you at all whatsoever, and you've got your favorite drink of choice, whether it's tea, or an IPA, or a scotch, or a bourbon... I don't know what your flavor is; whatever it is, whatever your -- a little snack, whatever it might be... Everything's set, and you're sitting down to watch a movie, rewatch or brand new, what are you going to sit down and watch?

**Alex Kretzschmar:** Well, every year on my birthday I do just that. And I always oscillate. I have two movies that Guy Ritchie did in the '90s. Lock Stock and Two Smoking Barrels, and Snatch. And I'm forbidden from watching these movies on any day that isn't my birthday, so I don't ruin them... Because I've watched both of them already about 20 times, and I just love the dialogue, I just love the pacing of the movie, I love the plot... It's almost Shakespearean tragedy in the sort of farcical nature of how so many different threads come together at the end.

So those two. I can't pick between them. Those are probably my absolute favorite movies of all time. Matrix is up there too, maybe. Probably a little bit down. The first one of course, of course.

**Adam Stacoviak:** Of course, yes.

**Alex Kretzschmar:** Yeah. Probably those three are my top three.

**Adam Stacoviak:** So The Matrix, Lock Stock and Two Smoking Barrels, and Snatch. I've never seen Lock Stock and Two Smoking Barrels. I have seen Snatch, but I have not rewatched Snatch.

**Alex Kretzschmar:** I'm jealous of you, because it's such a fantastic movie.

**Adam Stacoviak:** Well, now I have to acquire it, and then watch it. Because I do not own it. And I don't know about you, I prefer to watch movies... Even if I have the disk, I'm going to rip it and put it on Plex before I even think about putting in a BluRay player. I'm just not going to do it.

**Alex Kretzschmar:** Yeah.

**Adam Stacoviak:** I'm just not going to do it. It's not going to happen. And what I love, I suppose, about -- and I haven't gone deep on how all this works. I'm just a user, not a depth person when it comes to the .mkv format and what's behind the scenes there... But I'm happy that when I rip my 4k disks, that I keep HDR and all the audio codecs that go with it. So it's as if I'm watching the original. There's no loss, which I think is awesome, because I have an HDR 4k projector.

**Alex Kretzschmar:** And the bit rate's really high, too. This is something that Netflix and Amazon and all these guys - they advertise 4K, or I guess the resolution's technically 4k...

**Adam Stacoviak:** Right.

**Alex Kretzschmar:** \[01:23:40.18\] But the bit rate between a BluRay even and a 4k file that you'll -- even if it says Dolby Vision through like Apple TV Plus or whatever, the bit rate of the... You can just tell. If you have an OLED TV or something, and you're looking at this thing, you can just tell one is significantly more... It's got more meat to it than the other, more fidelity to it than the other.

**Adam Stacoviak:** Right.

**Alex Kretzschmar:** It's not like lossless audio, where you have to have the perfect headphones and the perfect speakers and all that, and a quiet room, and actually be focused on listening to hear the timbre of the snare, or something. N. High video bit rate makes a huge difference.

**Adam Stacoviak:** Yeah. So I assume you own Snatch, you have it on your Plex machine...

**Alex Kretzschmar:** I bought the DVDs as a student a long, long, long time ago... So I count that as a purchase.

**Adam Stacoviak:** Do you have then the HD version then, or have you just sort of gone back to the OG DVD? Because sometimes people are like "You know what--" Even Aliens, I saw this recently - there releases now on 4k of movies from our past. So Aliens, which was the second in the series from Ridley Scott... Alien was the first one, Aliens, plural, was the second one. And this has recently just come out on 4k BluRay disc for at-home purchase and whatnot. And I heard there was a big uproar about this, because there had been people who had watched it on every format since its release back in I think the '80s (I think it was the '80s), that they were like "I miss the grain. It looks amazing, but it doesn't feel like I'm watching the same movie." And you kind of aren't, because the way you perfect the transfer from the original tape to the transfer process, they have 2k, and then an upscale to a 4k, or whatever the transition might be for them... There is a grain loss, there is a colorization process...

**Alex Kretzschmar:** For sure.

**Adam Stacoviak:** ...all of that stuff. So I guess my question really is "Do you watch the DVD version of it because you're a purist?" Or would you be okay with the BluRay version of it?

**Alex Kretzschmar:** No, I think that the transfer is really important. So you look at things like the Criterion Collection, and they go through huge -- they go to huge lengths about how they do the transfers from the negatives to remaster them for high-definition releases. And I think the release makes a pretty big difference, but you can lose some of the nuance by having it be a different format than what you watched it in originally.

Just a couple of weeks ago we went to -- we didn't realize it was May the fourth, but we ended up going to the cinema to watch Star Wars Episode one, at the cinema, on May the Fourth. Obviously, Star Wars Day.

**Adam Stacoviak:** You didn't do that on purpose?

**Alex Kretzschmar:** No, we didn't. And it was anyone \[unintelligible 01:26:20.09\]

**Adam Stacoviak:** Yeah, right...

**Alex Kretzschmar:** We stood up at the end of the --

**Adam Stacoviak:** It's May the fourth, man...!

**Alex Kretzschmar:** I know, I know... And we stood up at the end of the movie, I looked at my phone and I said to my wife, "It's May the fourth. That's why this is on." \[laughs\]

**Adam Stacoviak:** That makes sense.

**Alex Kretzschmar:** We only realized at the end. But that movie held up and I will tell you, in the setting of it being in a proper cinema... Like, I had a Vision Pro for a couple of weeks, and that thing I thought was the best movie watching experience I've ever had. On the plane and stuff, I still hold that to be true... But nothing quite beats going to an actual cinema, with popcorn, and the noises, and the people around you giggling at \[unintelligible 01:26:59.16\] stupidity... It's just -- we've figured it out a long time ago; the cinema is where it's at. Can we just keep that going?

**Adam Stacoviak:** Well, then you also have directors like Christopher Nolan who when he creates films, he creates them for the cinema. And Tenet, one of his more recent films - and I think potentially even Oppenheimer, too - is criticized for the at home experience because it doesn't sound right... In quotes, "sound right." And the dialogue is a little off. That's because cinemas sound different, because it has a massive center channel, that all the action and initial kabooms and dialog come from like. It's just a massive speaker. It's a series of speakers even. And the sound design of the system, the actual hardware system is uniquely, not even apples to apples different than anything you would ever have at home.

That being said, I don't know about you, and how deep you go, but I had to in my newest house I built - which we moved to Austin two years ago, we built a house... In my last home I was -- for the first time ever in my life I actually had a room dedicated to be a media room, and it was big enough to actually be a theater... And because I'd built it, I was able to wire it... And so because I was able to wire it, I can play speakers wherever I wanted, and I could also place where I could put a projector, because the room was big enough.

\[01:28:29.04\] And so I did that in this newest house as well. And for those who listen to this show, they may have heard me say this already, but you're new here, so I'll tell you... But it may be a repeat for them... I have a 4k laser HDR projector. It is the Epson LA12000. If you have researched any projectors, this is a really phenomenal one to get at home for your home theater. I have Klipsch THX cinema speakers in wall, center channels behind the screen, I have a 120-inch acoustically transparent screen that allows you to have the speakers behind it, so my center channel's behind the actual screen. When I did all the installation, I made sure that the speakers were on an even playing field, an even plane, so that whenever the plane or helicopter or whatever happens, it goes around the room... It's not like low, then high, then low, then high. It's on a single audible plane. And then I topped it all off with actual cinema seats.

**Alex Kretzschmar:** Awesome.

**Adam Stacoviak:** So we have got two rows, a set of four and a set of three, because we have family who comes over, and that's my -- that's why I'm such a purist when it comes to like what I mentioned before, the HDR being present in the 4K transfer from the disk through MKV to being played through Plex.

**Alex Kretzschmar:** You didn't fancy a Kaleidoscope, like a BluRay Disc autochanger then?

**Adam Stacoviak:** I haven't tried it.

**Alex Kretzschmar:** I think they're like 25 grand, so I can understand why not...

**Adam Stacoviak:** Oh, gosh. Yeah. Okay, yeah, so... I thought you were talking about software. I'm like "Yeah, I would never -- I would probably never." No, I would never spend 25 grand for a player. I can't say I would, that's for sure... When I could build my own, right? And I can run it on Linux and stream it across my home network that is my home lab. That's where it's at.

So for me, I agree with you. We got there by me bragging basically about my system, and it was because you said cinema. And I agree. I don't go to the cinema, almost ever, anymore... Unless I need to get out of the house, or there's a reason to really go and watch the opening of a particular film... Like John Wick 4, for example. My wife's like "Hey, you know what? You've been working really hard. I bought you tickets." I will not go and buy myself tickets to the cinema. I love the cinema. I went and watched it in IMAX on a massive screen. It was phenomenal. I loved it. It's not a replacement for my home system, but at the same time, I wait for movies to come out on BluRay, or 4k BluRay, purchase them, and then put them on Plex. And my initial experience with any new content is usually, in almost every case, when I've purchased it myself, because I like it a lot, on Plex. And in some cases, I'll watch it as streaming. But for the reason you mentioned about bitrate and stuff like that, I just generally don't like to do that.

**Alex Kretzschmar:** As a pragmatic angle to being in the family room sometimes and not having the bit-perfect copy to play... But with a self-hosted media server it doesn't really matter. You can just play the 80-gigabyte rip, whether it's on a cheap Roku TV, in a kid's bedroom, or on the 100-inch projector screen. It will just scale and transcode and do what it needs to do behind the scenes.

**Adam Stacoviak:** \[01:31:54.23\] Yeah. The only issue I've had - and maybe as host of Self Hosted you know this, and you've heard this... But whenever I play 4k files to an Apple TV that is getting access to the network via Wi-Fi, there's always lag and framedrops. But my NVIDIA Shield that is on the same network, the same Wi-Fi, does not have that issue.

**Alex Kretzschmar:** I had something with a Vision Pro... And I don't know whether this holds true to the Apple TV or not, but something to do with the specific 5-gigahertz Wi-Fi channels that the Pro was using had to be a certain channel in order to stop stuttering when I was doing like moonlight game streaming across the network. I don't know if that's worth some research on the Apple TV side, but...

**Adam Stacoviak:** Could be, because - I mean, they're both on the same Wi-Fi network. It's not a Wi-Fi issue. It's not a bandwidth issue on the Wi-Fi. And it's every Apple TV that \[unintelligible 01:32:48.03\]

**Alex Kretzschmar:** Not bandwidth, but air time.

**Adam Stacoviak:** Okay.

**Alex Kretzschmar:** If it's changing channels and it has to basically retune the channel of the radio that's broadcasting, as well as receiving... And that switch has some latency, and then it has to go back to the other channels that your other devices are on, et cetera.

**Adam Stacoviak:** Well, what else can we talk about as we let people go from this hour and a half fest of home lab, and --

**Alex Kretzschmar:** It's been an hour and a half, hasn't it?

**Adam Stacoviak:** ...media, and audiobooks, and self-hosting, and a little sprinkle of Tailscale in there...

**Alex Kretzschmar:** A little sprinkle.

**Adam Stacoviak:** A little sprinkle. Gotta pay the bills, you know?

**Alex Kretzschmar:** Mm-hm...

**Adam Stacoviak:** What else?

**Alex Kretzschmar:** I don't know. You're the host. You tell me. \[laughs\]

**Adam Stacoviak:** Have you got anything else? Anything left in your pockets?

**Alex Kretzschmar:** Well, we haven't talked about cars at all. We could probably talk about Volkswagen Golfs until the cows come home, but... I suspect that's a very niche topic.

**Adam Stacoviak:** It is very niche, and I probably couldn't follow you very well. I oddly have never been -- well, at one point my life I was a car guy. Never a person who worked on them. I certainly enjoy vehicles, and I'm more of a pragmatist when it comes to vehicles nowadays... I don't upgrade them after I purchase them. I don't do anything unique to them. They're simply a utility. And I'm probably the worst, because I drive an F250, and it just is my massive diesel truck, and it pulls me and takes me... In most cases I'm the only person in it, but I do pull things with it, so I use it as a truck frequently. It's not just a Texan Ferrari, so they say...

**Alex Kretzschmar:** \[laughs\]

**Adam Stacoviak:** ...which is -- in Texas F250s are super-common.

**Alex Kretzschmar:** I'll refer you to our previous conversation though, about trading time for convenience, with Plex and Jellyfin versus cars... Like anything, it's a compromise.

**Adam Stacoviak:** Yeah, it is a compromise. Alright, Alex, well, I'll drop some things in the shownotes for people to point back. I had no idea that you were part of, and the inceptor of, the inventor of - I guess the originator of - what has become linuxserver.io. I had no idea before this call. I loved that surprise. That's so cool.

**Alex Kretzschmar:** It is fun.

**Adam Stacoviak:** And I'm a big fan of your podcast, Self Hosted. Big fan of home lab, as you know. Big fan of Tailscale, who employs you... So keep doing what you do, and glad to call you a friend, and glad to have you on the show.

**Alex Kretzschmar:** Yeah. Thanks for having me. It was a pleasure. At some point we have to return the favor and have you on Self hosted.

**Adam Stacoviak:** I would say yes, and be there, no problem.

**Alex Kretzschmar:** Good deal. And I will see you in Raleigh in October, perhaps?

**Adam Stacoviak:** Yeah, you will see us in Raleigh in October. We are making plans with our good friend Todd over there at All Things Open. Big fans. Due for catch-up. He's been busy, we've been busy...

**Alex Kretzschmar:** Are you doing a live show?

**Adam Stacoviak:** You know what, we tend to do the hallway track. We tend to set up a booth. And I think you saw us how we had it set up last year.

**Alex Kretzschmar:** Yeah, I saw you last year. I was a bit chickened to come over and say hi, because we hadn't met yet. \[laughs\]

**Adam Stacoviak:** Yeah. Well, next year you have to, and you have to get on the mic, too. Or I guess this year, not next year. I'm thinking like last year/next year... But yeah, you get what I'm trying to say.

\[01:35:53.08\] Yeah, Jerod and I - we love covering the hallway track. There's so many stories in the hallway that you get to peel back as part of how we've done that, and we've perfected it over the years, and it's just -- we like it a lot. There's some people who listen that don't really care for the sound of the people there, but I'm like "You know what? That's what makes it the hallway track." If we were in the studio, would it sound like we're at the conference?

**Alex Kretzschmar:** I've had similar comments on my YouTube channel... Like, I'm in my basement, doing a server upgrade, and I've got my phone out in front of me like this, doing the selfie thing... And people are like "Dude, get a tripod." And I'm like "That misses the point."

**Adam Stacoviak:** Yeah, that's not the point.

**Alex Kretzschmar:** If you watch any Adam Savage stuff, you'll know what I'm talking about. He's in his workshop, and he's tinkering around, and he's got his phone balanced on like a little arm, and it sort of wobbles just a little bit as he's talking... And he made a really good point - he was doing an interview the other day - that each of those decisions enhances the narrative, and tells part of the story at least. Like, "I'm in the midst of moving around my shot, so of course my camera's moving." And the same is true of the hallway track. Yes, there's people talking in the background, but I'm at a conference with other people. That's the whole point. That's part of the narrative.

**Adam Stacoviak:** Yeah. We want to take you there. That was our point, was like - we want you to feel like when you listen, you're standing right there, as if you were there, even though you're in Europe, or Japan, or places where we have listeners that are not in Raleigh, North Carolina. If you can't be personally present, it takes you there.

**Alex Kretzschmar:** There's a balance, of course. If all you can hear is room noise, then that's a problem. But I know you guys do a good job with audio, so...

**Adam Stacoviak:** And we do, yeah. We run it through a system, an RX plugin that tones down the background sound enough; elevates the foreground, de-elevates, I suppose, or diminishes the background, to some degree. But we still have a present, we do some processing on it... We definitely EQ, we edit, so that there's less of the uhms and ahs... And they're not just the uhms and ahs, but just the stuff that happens when you have a natural conversation. And in a lot of cases, it's a better artifact in the end. So yeah, we'll see you there at All Things Open. Big fans. And what was the steakhouse you'd mentioned before? Not Sullivan's, but what was the other one?

**Alex Kretzschmar:** Angus Barn?

**Adam Stacoviak:** Is it Angus Barn?

**Alex Kretzschmar:** Like Angus beef, yeah.

**Adam Stacoviak:** Angus Barn, okay. And that's in downtown?

**Alex Kretzschmar:** It's like a 10-minute, 15-minute Uber away...

**Adam Stacoviak:** Okay.

**Alex Kretzschmar:** But make a reservation, because it's often extremely busy.

**Adam Stacoviak:** Would you say like a week in advance? Like, if I knew when we're going, in October or whatever the date is?

**Alex Kretzschmar:** Yeah, just make one as soon as you can, because it fills up pretty quick... And it's got a bit of a price tag, I'll warn you upfront, but it's good stuff.

**Adam Stacoviak:** Any good steakhouse is gonna have a price tag.

**Alex Kretzschmar:** Yeah, of course. But...

**Adam Stacoviak:** We usually drop some coin when we go there, because it's usually like we haven't seen each other in six months or four months, Jerod and I, and so like "Let's go out and celebrate our hard work, and enjoy some time together." The last time when were at Sullivan's, I got a smoked -- I think he did as well... A smoked old-fashioned.

**Alex Kretzschmar:** Oh, that sounds good.

**Adam Stacoviak:** And they bring it out in like this lighthouse kind of thing, like this glass casing with a bunch of smoke... I feel like I'm at like a Catholic mass, or something like that, if you've ever been to a Catholic mass, during Ash Wednesday or whatever, when they're smoking the place up... And they bring it out and they reveal, they open it up, and this big puff of smoke comes out, and it's a smoked old fashion. So good... I mean, that's a staple. Good steak, good bourbon, good conversation, stuffed bellies.

**Alex Kretzschmar:** Hard to beat it.

**Adam Stacoviak:** Yeah.

**Alex Kretzschmar:** The Angus Barn is sort of out by the airport area, so just giving you an idea of the distance... It's not downtown, but it's not super-far either.

**Adam Stacoviak:** Maybe you'll have to join us then, since you'll be in the same place.

**Alex Kretzschmar:** Yeah. I'm sure there'll be a few Tailscalers there - because we've got a booth - looking for something to do of an evening... So yeah, let's make that happen.

**Adam Stacoviak:** Yeah. One of the two nights, let's do it. Alright, Alex... Bye, friends!

**Outro**: \[01:39:47.11\]

**Adam Stacoviak:** I almost mentioned it during the show, but we turned to a different direction... Have you heard of Protectly?

**Alex Kretzschmar:** Yes.

**Adam Stacoviak:** And they have a 10-gigabit version, their six-port vault... I think it's energy-efficient, because it doesn't have any fans, and it's got all this stuff... I'm curious if that would be --

**Alex Kretzschmar:** Yeah, that's very similar to the one that I'm looking at on Aliexpress, that's got -- I think it's M305...
