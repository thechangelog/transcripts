**Adam Stacoviak:** I am here with Kris Moore. Kris, I've been looking forward to this conversation because I am a TrueNAS fan, and I hear that you work on TrueNAS. You're the Senior Vice President of Engineering for iXsystems, so glad to have you here on the Changelog. How you doing?

**Kris Moore:** Oh, really good. It's a pleasure, Adam. Hey, I'm a geek at heart and I love to come and geek out and talk TrueNAS all day. So this should be fun and entertaining, looking forward to it.

**Adam Stacoviak:** How long have you been doing what you've been doing for iXsystems? I mean, give me a spectrum of your experience.

**Kris Moore:** Sure. So I'll give you the brief history bio. So I've been with iX going on just about 18 years now. So that's a pretty good career, especially in the tech industry.

**Adam Stacoviak:** That's a long time.

**Kris Moore:** It is. Staying with one company...

**Adam Stacoviak:** Almost the age of ZFS.

**Kris Moore:** Just about, just about. Which - I mean, that is an oddity in our industry, just talking to someone who's been with a single entity that long. So I've been with iX a lot of time now, started kind of messing around with BSD, Unix back in the '90s... I was like most software engineers, I did a stint in support, so a lot of time on the phones dealing with customers in the early days... And then I came over to iX I think - what was it? Late '05, early '06 kind of timeframe. Originally, I was the guy who did PC-BSD, which was a desktop version of FreeBSD. So we took things like KDE, and different window managers and wrote a custom graphical installer, and all that good stuff that made FreeBSD desktop, if you will. I did that for iX for many years, and then about six, seven years ago I got pulled into the TrueNAS side. We were having a lot of success with FreeNAS and TrueNAS product at the time that iXsystems, and started doing a lot of QA, helping out with those efforts within iX. And then over time, one thing led to another, and to the senior vice president role on that now, where I have a team of engineers. I have both hardware and software engineers, everyone from doing UI all the way down to file system development on ZFS. And then quality engineers, automation engineers, people doing testing, docs, IT, all that good stuff wrapped up around the engineering side of the fence here at iXsystems.

**Adam Stacoviak:** I think it's kind of interesting, because my journey here has been like "I came for the ZFS, and I kind of stayed for everything else", you know... It's kind of funny, my first adventure with ZFS was like bare metal Ubuntu, and managing it from the CLI. No UI. Just understanding the actual ZPool or ZFS commands, from creation, to configuration updates, and stuff like that. Creating pools, literally in the CLI, just like a crazy person, you know what I'm saying?

**Kris Moore:** No, hey, that's how a lot of us started. So you must have started -- ZFS on Linux came a little later, so I had a little bit of a head start, I bet, because we got that in FreeBSD a bit earlier on... And I remember even in the early days I wanted ZFS integration and PC-BSD. We were still running on the older UFS file system on FreeBSD, which... I mean, it worked, but ZFS was the shiny, new, awesome thing, and it still -- it's a great file system, even for desktops in that way...

**Adam Stacoviak:** It is.

**Kris Moore:** But yeah, same thing. I was the one of the first guys working on support for it to allow the bootloader to do things like boot environments, where you could make a snapshot, and then roll back, if say an update went bad... All that good stuff. I cut my teeth on a lot of those things in the early days of ZFS showing up in our world.

**Adam Stacoviak:** Yeah, I think my -- I'm trying to recall it... My Proxmox installation is a dual disk ZFS-backed installation. So the operating system level SSDs are dual disk and ZFS. However, my TrueNAS box I don't believe is, unless it is by default. Is it by default?

**Kris Moore:** You mean like boot device mirrored kind of thing?

**Adam Stacoviak:** Right, like redundant drives.

**Kris Moore:** Yeah, yeah. So TrueNAS - it depends entirely how you installed it. If you only have one boot device, it's not mirrored, of course.

**Adam Stacoviak:** No, it is actually, now that I think about it. I have two boot devices, so I guess it would be mirrored. I just can't recall what I did.

**Kris Moore:** \[00:08:18.23\] Yeah. If you went and set that up, then you should have mirrored redundancy. We see less and less people doing that these days, but in the early days of FreeNAS in particular, that was a lifesaver... Because a lot of people were using cheap boot media, USB sticks in a lot of cases, and those are not great, as you can imagine... You know, that $20 or $10 USB stick you has at the local Walmart probably won't last that long.

**Adam Stacoviak:** That's not what I'm using, Kris...

**Kris Moore:** Hopefully you're doing better than that. But in the early days, that was the thing, was you'd go buy cheap boot media, USB-based, and then mirror it, and that was kind of your first level of protection from losing your boot device.

**Adam Stacoviak:** Wow.

**Kris Moore:** These days of modern M2's, a lot less of the homelabbers are doing that. But it's still cool to have the option. We have found on the enterprise side over time, especially with SSDs, they tend to wear out right around the same amount of time, especially if you're running mirrored...

**Adam Stacoviak:** Hm... So it's not really worth it. Yeah.

**Kris Moore:** So you're not buying yourself much apart from if you have a catastrophic failure, one of them really does bite the dust horrifically.

**Adam Stacoviak:** Yeah. In my case, I'm literally on SSDs, not M2 SSD or NVMe. So it's literally two HD store 250-gigabyte drives. That's my setup in this case in particular. But hey, those might die at the same time, too. You just never know.

**Kris Moore:** You never know.

**Adam Stacoviak:** For now I feel pretty safe though, Kris... So don't harsh on me.

**Kris Moore:** You're good. You're good. I'm not gonna jinx you here. Hey, just take your config backup every once in a blue moon, anytime you make major changes, and then worst-case scenario - okay, if they both bite the dust, you reload, you restore, your config and you're up and running again. I mean, I'm running with a single M2 on most of my devices. I usually use like a 120-gig boot device, and I just backup my config. I had one of them actually fail on me about six months in, and I just swapped it out and I was up and running a few hours later. It just wasn't a big deal,

**Adam Stacoviak:** I suppose could you backup that config then? We're getting a little ahead of the story to some degree, but quickly here... Could you backup that config on an automated basis instead of TrueNAS to, say, a store that you have on the drives, or on the system, I suppose?

**Kris Moore:** So there's a couple of ways you can do that here. Yes, if you're willing to use the API, our TrueCommand product, which is our single pane of glass, kind of TrueNAS companion does that for you automatically. So it will go and take a snapshot of that config every time changes are detected, actually, and then you can go pull it back out of the TrueCommand UI and restore it if you need to. So a couple of different ways to do it. There's people out in the wild that do scripts and all kinds of stuff to email it to themselves every so often; it's not a very big file.

**Adam Stacoviak:** Well, now that I think about it, what sense would it make to have it on a ZFS store in a system I can't boot?

**Kris Moore:** To have the...?

**Adam Stacoviak:** Well, if my primary operating system drive took a dive and doesn't work anymore, and I'm backing up to stores that are on the system I can't boot...

**Kris Moore:** Yeah, it doesn't help you; you need to back it up off site. That's why --

**Adam Stacoviak:** It doesn't really help. Unless I can move those drives to a different machine, and then --

**Kris Moore:** You've gotta have a way to retrieve it, so that doesn't make a lot of sense. That's why most people either set up something to automatically email them the script, or fetch it periodically via the API, or use the TrueCommand product and just let it do that for you.

**Adam Stacoviak:** Yeah. Alright. Well, let's get into the meat and the potatoes, as they say. So I mentioned TrueNAS... TrueNAS has a couple of different flavors. You've got Core, which is the old school version of it, which is actually the new old school version of it, and you have Scale. But the history goes beyond that. You mentioned I think FreeNAS in your introduction of like your history at iXsystems... Like, how did we get to TrueNAS, Scale or Core? What was before that? What has been iXsystems' adventure into hardware sales backed by really good open source? How's that worked?

**Kris Moore:** \[00:11:56.00\] Sure. So FreeNAS and iXsystems have been involved with that since '07, I believe. It's been an interesting journey. It started as a FreeBSD project, just to do basic NAS functionality by a fellow out in France. He ran that for a while, and kind of ran out of steam, and was ready to move on, do something else, so iXsystems adopted the project, if you will, at the time... And kind of built it up over the years. I mean, in those early days, it was even pre-ZFS; we were doing UFS NAS. But then ZFS came along, and like just kind of changed the game for everyone. Like, this was THE file system you wanted to run.

**Adam Stacoviak:** Zettabyte means something, right? Like, zettabyte file system.

**Kris Moore:** Oh, yeah. Copy on write, have instantaneous snapshots, all the data integrity stuff built in... That was a game-changer for FreeNAS back in the day. And so iX just built that up over the years. Eventually, we launched an enterprise product line based on that; some of the FreeNAS Pro line, if you're old school enough and remember that. And then over time that got rebranded into TrueNAS. So TrueNAS was our commercial offering, and FreeNAS was the free open source offering.

Well, a few more years went on, I came along the scene and we went under a major effort to unify the software. Because for a long time there we ran two different builds; we would do the FreeNAS open source build, and then we would take that and go package it up and build the enterprise thing. But the enterprise thing was still all open source, so it wasn't like we had a real reason we had to do that. It was more just a legacy; this is how we've always built it. So we came along and said "You know what, let's see if we can unify these images. They're all open source either way. Let's have one image that does everything." And that led to the branding unification too, because now it's a little awkward - you have a FreeNAS image and a TrueNAS image. We decided to go ahead and rename them all to just TrueNAS. We ended up with TrueNAS Core - basically, the free thing you download off the website - and then TrueNAS Enterprise, which is the thing that's paired with our hardware, which gets you things like high availability, and shelf support, closure management, and proactive support, and all those other goodies that you would expect on an appliance that you would buy from a vendor like iXsystems.

And then going a little more forward into the history, we decided to launch a Linux variant of TrueNAS, which we dubbed TrueNAS Scale. And again, porting the same open source middleware, so a lot of it's all sharing the same base, it's just we swapped out the BSD underneath to Linux; actually, Debian-based is what we are today. And we did a lot of work to port ZFS, and make it -- or I guess not port it. That's the wrong word. To make it very portable between the two platforms. We wanted to have the FreeBSD ZFS and Linux ZFS be 100% in parity, if possible, because you need that flexibility for people who are migrating back and forth, and being able to share pools, and all that good stuff.

So we spent quite a bit of time to make all that work happen in the ZFS side. We had to add some kind of \[unintelligible 00:14:44.18\] on your Ubuntu back in the day, which was extended attributes, and ACL support, the full NFS v4 style ACLs on Linux; that just wasn't a thing yet. So we undertook those efforts to get them into the Scale product, and now where we're at today, which is pretty much feature parity with everything we had on Core or Plus or all the other fun little benefits we got being on the Linux side of the fence, with access to more fun things to play with.

**Adam Stacoviak:** And I suppose now you might be at another branding conundrum, potentially, with...

**Kris Moore:** Sure.

**Adam Stacoviak:** There's some concerns out there, like "Is Core going to die? Is Scale the future?" I see Tom Lawrence - I'm a fan of Tom - sharing this information, and there's just some confusion I suppose, again, in the TrueNAS water. Can you explain that and what might be happening?

**Kris Moore:** So I'll do my best to try and put people at ease and explain the situation. So Core, again, FreeBSD-based; it's a lot more stable, it's mostly in a maintenance mode, and we're trying to keep it very rock-solid, and we're gonna keep supporting it. Again, we've got enterprise customers running this, so it's still here for a while to go. And then on the Linux side, that's kind of the up and comer; that's the teenager in the house, right? A lot of energy, a lot of new, exciting things are landing there... And we're seeing all the momentum shift to that variant of the product. So that's not a real secret. Again, anybody who's paying attention can see that with their own eyes.

\[00:16:05.09\] But that said, we're not dropping people on their head. We're gonna support Core as long as it makes sense to do so. And especially when we have enterprise customers who prefer to run that platform... Just because some people don't want to do any kind of upgrade or migration; they're pretty happy just to set up the NAS and not touch it again for five years. So it makes sense, so we're gonna do our best to support both, make sure security is good and both.

But again, it's not a secret - Scale is where all the innovation is happening these days. So if you want that shiny, new feature, it's going to be on the Scale side. And if you're a homelabber, this is particularly important for anybody who's a do-it-yourselfer. The hardware supports is just flat out better on the Scale side of the fence. The Linux Kernel - again, no offense to the FreeBSD guys; it's been a great product, and I've been a BSD guy for almost 20 years. I was on the core team a couple times... So that's where my heart was at. I get it. But at the end of the day, just as far as sheer breadth of hardware support, and kind of features and functionality and all the bells and whistles, that's going to be on the Linux side.

**Adam Stacoviak:** So I didn't hear anybody say that core was on maintenance mode. And you said it's in maintenance mode.

**Kris Moore:** Well, maintenance mode in the sense that we're not going and like actively breaking things, adding new features and functionality. We're very conservative there. So whether you call that maintenance mode or not... It just means we're very careful on what we're putting in. So you're not going to see big, shiny, new features land on the Core side; it's more about making sure it's rock-solid, the supporting features it has, it doesn't regress, it doesn't change, it stays fast, it stays stable... That's what we're all about right now on the core side. Because honestly, that's what a lot of people just want their NAS for, is they want \[unintelligible 00:17:42.08\] in the corner, not touch it, not look at it, and hopefully everything just runs, and ZFS does its thing. And so we're gonna aim to keep providing that experience.

Now, not to say it's not that on the Scale side. Scale, especially over the last couple of years, has reached a point where it's just about 100% as stable as core is, especially for like core NAS functionality. I mean, if you're running SMB, iSCSI, NFS, it's more or less an equivalent experience, maybe better if you have hardware that's not as well supported on the BSD side of the fence.

**Adam Stacoviak:** Gotcha. Yeah, I find myself -- so we had Alan Jude on a while back, and he reinvigorated and clarified, I would say, the fact that FreeBSD is not Linux. So hammered that home, for sure. Whereas someone who doesn't really, I guess, swim deeply in the Linux waters understand the difference between a BSD or a FreeBSD, or the different variants there, or - I think there was a different word for it there. In Linux you've got variants, and I think in BSD they're just like... I don't know what they are; targets, or something. I forget what he called it. I can't recall in this moment.

**Kris Moore:** Yeah. Kind of like distros versus it's an operating system. Because you think about Linux - it's a kernel, plus a bunch of other things to turn it into a distro, right? FreeBSD at its roots is historically a complete Unix-like operating system. That means the kernel, the user land, all that stuff's designed in concert, to work together. And there's pros and cons to that model, versus say the more modular Linux model.

So FreeBSD - you'll end up with a vanilla system, and they're always all the same. They're all just FreeBSD. And then you go add your application layer on top of it, which is your packages, and your ports, and ways to extend it. But there is like a core layer, if you will, which is more than just a kernel; it's also the user space, the shell, the bin utils, all that kind of good stuff. The compiler's even baked into the base system, all that. Whereas Linux is a little bit more you get to pick and choose, and pull pieces out, and put certain pieces in, and that's how you end up with Red Hat, or Debian, or Suse, or whatever.

**Adam Stacoviak:** Yeah, for sure. So I guess the question is if somebody is new to TrueNAS, they should choose Scale, right?

**Kris Moore:** At this point, that would be my recommendation, especially for a homelabber. I mean, if you're just starting your TrueNAS adventure, I would recommend you start with Scale first. Again, if you're procuring your own hardware and all that, and you want the best shot of it just kind of working out of the box, no questions asked, Scale is going to be your best bet. Plus you'll have access to some of the shinier, new features. The UI is a lot prettier.

\[00:20:22.10\] Actually, I'll back that up, too. We've done a lot of work on the Scale side to reinvent parts of the UI, to make it more user-friendly. So if you're just getting started in particular, you'll probably find it a little easier to get that initial SMB share created, or bring up your pool for the first time if you're not like a ZFS God already, right?

**Adam Stacoviak:** Right.

**Kris Moore:** So that those are the kinds of things we've done. So it has those niceties...

**Adam Stacoviak:** A CLI junkie.

**Kris Moore:** Yeah, if you're a CLI junkie, you could probably jump into Core, and just be like "I get it, I know what it's doing. I can see what it's doing from the UI, and I know on the backend what that means." But if you're a little bit more of a novice in those waters, I'd say start with Scale; you'll probably just end up with a better experience overall.

**Adam Stacoviak:** Yeah. I'm using Scale. I considered using BSD, because of the conversation with Alan, and just reconsidering my adventure, I suppose, into Linux, and which one I should choose. And in my case, it is a home lab environment. At the same time, it does have Changelog's archives on it, so it's also sort of like homelabs/enterprise production. That ZFS store cannot die, right? That would be catastrophic. I do have a backup plan \[unintelligible 00:21:26.03\] is not a backup plan. I get it.

**Kris Moore:** Good. I'm glad you said that, \[unintelligible 00:21:29.21\] if you didn't. \[laughter\]

**Adam Stacoviak:** And I think that TrueNAS itself, Scale or Core, is very helpful with having a better backup plan, because of just the UI and the built-in replication. Sure, I can do it as a CLI junkie, so to speak, from my beginning days with ZFS, which I'm comfortable with... But you've got to trust your own scripts, and then own the code that I wrote, in concert maybe with an LLM, or a ChatGPT 4, or whatever. So I've got to trust that stuff, and I've done it, and I have trusted it and I've tested it. But at the same time, I was like "Is this really viable? Am I trying to be a Bash script kitty for my ZFS backups? Do I want to do that, or should I trust TrueNAS? Should I finally take this hardware I've got and move it to a TrueNAS option?" I did that recently, in the last month. So I'm familiar with TrueNAS, but I don't have years of history, whereas I have years of history with ZFS directly.

I guess that being said... I'm not really sure where I'm trying to go with it, except for that you've got a great UI for all this stuff. It does seem very stable. However, I have hit a couple things that really just drive me crazy, and I can't believe I hit these bumps. We can talk about that now, or we can go deeper into some other worlds. What do you think?

**Kris Moore:** No, we'll talk about that, but first, I just wanted to make the point... I think a lot of people hit that place like you did, where it's like "Am I going to be a weekend warrior script kitty, and like beta-testing my own custom bespoke solutions? All I need to do is backups, right?" It seems like a simple task we all have. So a lot of people hit that fork in the road... And at the end of the day, yes, TrueNAS is all open source, and built on open source... And sure, you could go roll your own Arch, or Debian, and do it all by hand.

**Adam Stacoviak:** Right.

**Kris Moore:** But some of us have lives we want to live also, outside of just sitting there, troubleshooting our own gear... And so TrueNAS comes in like "Look, we've done all that work for you." It's a pretty good sized team we have here just to make sure things like replication just always works. Backups always work. They're reliable. Because once you go down that rabbit hole, it's like "Oh, well, I got the replication working. But how do I monitor? Oh, I've gotta set up alerting. How do I do that? How do I make sure that that --" And just on and on it goes. Well, how about data integrity? Am I monitoring my disks enough? Am I getting alerts properly? Am I backing up -- now I've gotta backup to the cloud too, because I need off site... So now I'm scripting \[unintelligible 00:23:51.00\] or something else, and it's just like... At some point it's like I've got better things to do.

**Adam Stacoviak:** \[00:23:59.17\] I felt that pain. I was like "I'm going too far with this." And I was like, well, you've got a great UI, you've got smart monitoring built into TrueNAS... There's so much into it. The data replication I did recently, moving data around, I was like "Hm... I just pushed a button, made sure that the dataset was there, and chose to replicate from one dataset to the other." Because I was moving from disks to disks within the same machine, but different pools. So I was moving from old pools to new pools, essentially. Imported those polls, etc. all that good stuff, but... I mean, in my CLI ZFS scenarios, it was a lot more just challenging, just because you had to remember all the commands, and don't get it wrong... And doing ZFS send and receive by hand - I mean, you've gotta have a slight master's degree or a good tutorial with clarity, so that you don't mess it up. And you don't want to mess up a multi-hour send/receive, right? If it gets there and at the end you have an error - what a waste of time, right?

**Kris Moore:** Yeah. Or you screw up the remote site and your snapshots aren't in sync now, and "Oh, I've got to start over..." It's, one of those things, it's a lot of pain and time to do it right and do it well, or you can just use something that we literally, if you're a homelabber, we provide for free already, that does exactly that. And not only is it tested by us, but by the other hundreds of thousands of users doing it every single day. At some point you just hit that wall where it's like "This is just a lot easier to deploy on another system." But what's cool \[unintelligible 00:25:29.20\] there's no real mysteries or secrets; you kind of know what we're doing under the hood.

**Adam Stacoviak:** Right.

**Kris Moore:** There's ZFS replicating under the hood, and they're doing snapshots, and they're doing all the stuff that I'm familiar with. So that should hopefully provide you a bit of comfort and other folks comfort that there's no black magic here. It's all very straight, open, open source things, and that's something we pride ourselves on. We're not doing anything secretive in that sense.

**Adam Stacoviak:** It does give me comfort in that. And I would actually -- if anybody came to me and said "Adam, what should I do? If I'm getting into ZFS, what should I do first?" I would say eventually move to TrueNAS, but I was like maybe at first stand up your own -- pick your flavor of Linux. In my case, I'd probably say Ubuntu; pretty solid out there. Install ZFS... I mean, in a moment, with some disks available, even in a virtualization state like a Proxmox with virtual disks, you can toy around with a proverbial ZFS box that is for storage, and learn. And I would say go with the CLI for a bit, just so you know what it's actually doing, and the different things you can do with it, for the same reason you just said, "Now, you know, Adam, that what we're doing behind the scenes is just simply those same commands, but behind a GUI." Because that does give me comfort.

And if I needed to, I can go into the shell inside a TrueNAS and do my own thing. I'm sure, if I wanted to. You may not like it or prefer it. Maybe you can, I don't know. I don't have that much experience with TrueNAS, how much you allow or suggest folks to actually go into the shell...

**Kris Moore:** We do give you access to the shell. We have SSH, and it's there for a reason. We tend to steer newbies away from it, just so they don't foot shoot... Because again, once you go into the shell, we're basically taking the guard rails down, right? So you could do something good, you could also do something very bad. So we recommend, look, if you're old enough to drive, and you kind of know what you're doing, absolutely. If you want to go double-check it, this is the beautiful thing - it's open, there's no secrets. So you can go drop to the shell and say "I'm gonna run zfs list, I'm gonna check the snapshots..." And it's really helpful. If you think you see a problem in TrueNAS, you can go check it and investigate it. We can do it for debugging, too. It's fantastic. But again, I would caution people, if you're not a ZFS person, and you have data you care about, maybe try it in that virtual environment first and kind of get your feet wet before you start running commands that GPT maybe told you to, and you don't quite know what they're doing under the hood. But by the same token, if you already grew up in that environment and know your way around - absolutely, feel free. Go take a look and see what it's doing behind the scenes. And if you see something that we could do better, we're all ears.

**Break**: \[00:27:59.20\]

**Adam Stacoviak:** So the one issue I've had - and I'm surprised by it; I do not expect you to solve it on this conversation, but maybe tell me if it's common - is that I was following, once again, Tom Lawrence; I was following his tutorial because I'm a Tailscale fan. I love Tailscale, and every machine I have is on Tailscale. Now, my early issue with TrueNAS Scale was that I didn't know how to use Tailscale with it. I like to access my SMB shares from different locations via my tailnet. So that was my turn-off and why I kept running my Ubuntu CLI self-ran version for a while... Because I can run Tailscale in Ubuntu too easy. I didn't know how to do it with TrueNAS Scale. And I think you have applications that you can install. And you choose a poll... So when you set up apps, for anybody who's listening to this, I'm in the sidebar, essentially. I choose the Apps section, and you can check available apps, and you can search for any of them. And the tutorial basically is to install the Tailscale application, enter in your auth key from Tailscale that you can set up, all that good stuff, and then boom, you've got an application running, I think as a virtualization inside of Kubernetes; you can clarify all this, Kris, as I'm done here... But then the thing does never fully booted. It was like deploying; it was like stuck at deploying. So I can never fully deploy this application for Tailscale. Simply just enable my box to have -- so I access my SMBs via my tailnet. That's my long story short, that's where I'm at.

**Kris Moore:** Okay, so I'll give you a little background on it. So yeah, it's using Kubernetes on Scale, it's really running Linux containers, Docker images, if you will, under the hood, so no real mystery there... And I'm not a Tailscale user myself, so I can't necessarily troubleshoot it, but I can tell you, when it says it's stuck in the deploying phase, what you need to do in the UI is it'll show you which container instance is running, you click the three dot menu and say "Show me the logs for it." It means for some reason the container's refusing to start all the way and get to a healthy state.

Now, it could be it's saying "Oh, your API token's bad" or \[unintelligible 00:32:53.21\] who knows what the error message would be.

**Adam Stacoviak:** It could have been that. Yeah, that's true.

**Kris Moore:** It could be something that simple, or it could be like "Oh, I'm starting up and I don't recognize this network config." Again, I'm not Tailscale user, so I don't know what their specific error messages are, but that's the first place you'd go hunt it down, is "Show me the logs to that container. Let's see why it's not starting fully." And nine times out of ten it's gonna be right there at the bottom of the log, like "I stopped because blah."

**Adam Stacoviak:** Right. It's probably obvious... This is definitely -- now that I know this, definitely something that I could have troubleshot better in the moment.

**Kris Moore:** And you can understand, the way we do the apps, the reason you see that deploying is because it tries to heal. Because sometimes apps -- I mean, let's be honest, it's software; software sometimes has bugs, they can crash. So Kubernetes and TrueNAS, they're gonna try and be helpful and automatically try to restart, and that's why hence the deploying... It's like "Okay, well, I'm gonna try this again. Maybe it's a transient. The network was down. Maybe..." I mean, who knows what. And nine times out of ten that works great. But if you're deploying something fresh for the first time and you can never get it to that online, fully running state, go check the log for the container. It'll give you the info that hopefully helps you troubleshoot and figure out "Oops, I fat-fingered putting the key in, or something."

**Adam Stacoviak:** \[00:34:10.09\] And that might be it, honestly. I mean, it's probably the key, now that I think about it. I should not have blamed TrueNAS, I should have blamed myself and done better with that. I didn't know you could take the logs on these apps. That's cool.

**Kris Moore:** Yeah. If TrueNAS s screwed up, we'll own that. If we screwed it up, file a ticket, and we'll go take a look and see if the app's borked, or something. But again, until we have that info, we can't go anywhere yet. So...

**Adam Stacoviak:** Which I guess the next step there would be like the forums. You've got amazing forums. I mean, I've already learned so much about ZFS just from the forums, not even TrueNAS-related. There's one person in particular -- I think I emailed that person. Is his name the Grinch, or something like that?

**Kris Moore:** Yeah, I recognize that name from the forums. Yup.

**Adam Stacoviak:** Does that person work for iXsystems, or are they just like super-passionate?

**Kris Moore:** No, we've just got a lot of -- I mean, some of the folks on the forums do work for iX, and usually you'll see like an iX badge or something on their name, like myself and others... But we have a lot of really passionate users, who do this as a hobby, some of them do it for work too, for their day job, they also have TrueNAS at the office, just like they do at home... Honestly, that's how we get into a lot of businesses, is people will try it at home, sysadmins, and they're like "This is amazing. This is great. I really should be running this at work. Why are we doing that other thing that we all hate to administrate, when I can use the same thing I do at home, and it'll do all the same functionality?"

But yeah, back to the forums... There's a lot of really good, helpful people there. It had a reputation in the early days for being the Wild West, forums being what they are... But these days, if you haven't come back and checked it out, the forums have gotten quite nice, and there's a lot of good stuff coming there.

**Adam Stacoviak:** Definitely lots of info there. And I've appreciated the depth, and I think there's times whenever you can have curmudgeons in forums, with like snarky responses, and all the reasons why people are like...

**Kris Moore:** "RTFM!"

**Adam Stacoviak:** ...forums are not that great. I think that there's a somewhat Tame nature, in my experience, with the forums around TrueNAS, which I was quite happy with, because I think -- I've seen some presidents of iXsystems folks in there, as well as the Grinch and others, if that's truly his name... I can't recall if that's his actual name or not, but let's assume that that moniker works in this moment. And if not, then I'll apologize later. Those people were very helpful. And they're also very passionate. They'll help you learn how to set up pools... And if you're configuring a mirrored scenario, versus a RAID-Z2, or Z3 - like, you're considering different options - they'll talk you through what your scenario might be, and give you that feedback. Sometimes a little snark, but that's okay; that comes with it, to some degree. But...

**Kris Moore:** Well, if you're getting help for free, you can put up with a little bit of snark We just try and make sure it doesn't get out of control.

**Adam Stacoviak:** Absolutely. Absolutely. And then I think my next one I'll mention - and you might be aware of this one... Or it might be a me issue.

**Kris Moore:** Hit me. Hit me.

**Adam Stacoviak:** So I've got me -- okay, so I've got my box right now connected to the network via an Ethernet port. It's got dual Ethernet ports on it, Gigabit Ethernet. But I also have a dual SFP+ NIC on my box, and I've got the connections, I've got the aggregation already set up. I'm running UniFi, I've done that before. I did it as the Ubuntu box, as it was beforehand... But whenever I try to set up that -- like, I add a new interface that is a bonded interface, all the things, I guess there's some sort of UI that after you do that, it sort of puts it in a temporary state of like x seconds...

**Kris Moore:** Yeah.

**Adam Stacoviak:** It never lets me make that connection finally. I've tested with ping that it goes to the static IP, all that good stuff; the Ethernet port doesn't go away, and my new dual aggregate bonded SFP+ static IP address via link aggregation does not come online. But I have tested; it will come on temporarily with ping, but it won't be move to it.

**Kris Moore:** \[00:38:04.16\] Is it coming online too late for you to make it in time? Because I think it's like a 30-second timeout, or something...

**Adam Stacoviak:** Well, that's the funny thing, is I don't get that UI whatsoever to confirm it. It's like, keep testing changes. It's got two buttons, test changes and - I forget what they actually are without doing it... But there's never been one that says "Yes, keep configuration." That button is not there.

**Kris Moore:** It's supposed to pop up when you say Test Changes. There's supposed to be a modal window that pops up that says Confirm and click OK, and that's to present prevent you from locking yourself out of your box, where you make a change and now you can't reach your NAS, and you're stuck going to the console. Are you on the latest Cobia, 23.10.2?

**Adam Stacoviak:** Yes. Actually, I had just updated before I did this, because I was like "You know what - maybe there's some new features that just make it easier." I don't know, maybe I was wrong.

**Kris Moore:** I don't have an open ticket I know of around this, but do me a favor. Let's get me a bug ticket with a debug file, and we're gonna take a look and see if we can identify why it's doing that in your case.

**Adam Stacoviak:** Okay.

**Kris Moore:** I'm not aware of others still hitting this issue. I think back in the early days we did have a handful of issues there, but those should all be resolved now. So if there's some other case we haven't encountered yet, send it over; we're gonna go get it addressed. And it's good timing, because we're going into the RCs, and final release for Dragon Fish. So if you've got a bug, we want to address it.

**Adam Stacoviak:** Gotcha. Now, when I went to the forums, back to the forums and the helpfulness there, it seemed like -- and again, I didn't spend a ton of time trying to figure this out... I just kind of hit a couple walls, tried a couple more times, and I was like "Okay, I'll figure it out later." It's not that important to suddenly be on a -- I mean, I would love to have a bonded aggregate, 10-gigabit connection to my network... But hey, it's not that big of a deal for now. Eventually, it's better. It's not the end of the world in the moment. They had said something like "You couldn't have an Ethernet port be active while you also add another aggregate." So that could be something where like maybe I didn't deactivate the existing connection. So maybe that was it.

**Kris Moore:** Were they all intended to be on the same subnet as that one?

**Adam Stacoviak:** Exactly. Yes. That might be --

**Kris Moore:** Yeah, we don't want you to have multiple interfaces on the same subnet, at the same time. That actually could be the reason you're prevented from moving forward. That's intentional. Now, okay, I can already hear people screaming, complaining, "Oh, but Linux allows it." Linux allows you to do a lot of things, and sometimes things that are very bad from a network administrator's standpoint. So having multiple interfaces on the same subnet - yes, Linux will allow it, but we try and do everything we can to prevent you from foot shooting and having to troubleshoot your network later, and find out why things aren't behaving properly; which route should it be taking... I ping out in one interface, it's coming in another, and everything's getting confused, and that my services don't behave the way I expect.

So that is still a limitation we have in the software, which we do try and keep you more to a little bit of a saner network config. So yeah, in your case, I would say remove the original subnet from the other Ethernet device, and then see if you can apply it... Again, without actually seeing it, and sitting down and troubleshooting with the team, that is something I will throw out there. So again, people have different opinions on that. And if you ask on the forums, you probably will get flamed, like "Ah, do proper networking" kind of thing, but... That's how it goes.

**Adam Stacoviak:** Well, I think this comes to the UI, which I do want to get to, because that's kind of where I want to -- less to troubleshoot further, but more to clarify. So I have ENO01, or EN01 I believe is the Ethernet port there for it... Yet it is unclear what I should do to add a new link aggregate interface, because while I know I have the existing one, it's scary to reset it... Because even when I push Reset to like maybe remove it, it says "This change can interrupt connectivity, and it must be tested before making it permanent." I'm like "Of course, I don't want to lose the one I have." So I'm thinking like if I'm adding one that is on the same subnet, part of your UI should be like "Hey, you've got one active already. Let's establish the new one you're trying to add, and kill the old one." The flow should do that, in my opinion.

**Kris Moore:** \[00:42:00.25\] That's where I think we could probably improve, which is why I'd really love to get a bug ticket and just confirm that's what we're hitting here... Because that is something where we could probably make it a little more user-friendly, to say "Hey, we detected you're trying to set this up with the same subnet here. We should clean up the old one for you at the same time. Do you want to proceed?"

**Adam Stacoviak:** Right. And that's not happening. And that could be a me issue, it could be a you issue... I don't know.

**Kris Moore:** Yeah. We'll figure it out though. Again, get us the debug; that has all the gory details, and my engineers can rip that apart and say "Okay, now we see what he's got set up."

**Adam Stacoviak:** I'd be happy to do so, I'm sure. Like, yes, more trouble. Let's fix it. So let's move on now then to the interface, because I wanted to -- what I love most about TrueNAS is really this interface. Has it always been this good? And when I say "this good", it is -- barring the couple issues I've mentioned, it's really easy coming from a CLI ZFS, you know, junkie, so to speak, or cowboy so to speak... Now it's like, well, when I'm at my dashboard, I have got network, I've got memory, I've got my CPU, I've got all of my pools available... When the last time the scrub was ran, how many disks... Everything is at my purview. The path it's on, available disk space... Such a beautiful UI. Has it always been this nice?

**Kris Moore:** Well, it's not always been that nice. We've always had a good UI; that's always been a key piece of the TrueNAS experience, is the fact that you want your UI to do things, so you're not shell-scripting and doing it all from the command line all day... But gosh, it's been a good seven years now where we switched off Django and went to Angular for the UI, and set up proper API, UI, REST, all that good stuff... And so ever since we did the Angular UI, it's gotten better. If you've seen the core UI, that one's a little bit more organic growth, I guess.

**Adam Stacoviak:** Okay...

**Kris Moore:** If you look at it, you can kind of see the evolution of FreeNAS and TrueNAS, where we added things, and new pages got added... And so when we did Scale, when we were first kicking off the project, we kind of went back to the drawing board and said "Okay, we've been doing this now for ten plus years, just kind of throwing things in as we add new features... Oh, new cloud sync. New this, new that." Can we design a better UI that helps unify a lot of these things into less pages? Because there was a bit of page fatigue prior, on the core side, which you can still see today if you go look at it. There's just a lot of pages to choose from.

So instead, we consolidated things on Scale. So instead, you'll see things like a data protection page. And when you go there, you've got widgets that show you "Here's my Cloud Sync tasks, here's my ZFS replication tasks, here's my snapshots. Here's all these things that are related to data protection." Or, for example, the networking page has all the networking things on it, versus ten different pages of different items. I'm trying to think... Same with storage, datasets... We've done a lot of work to make ZFS management kind of painless through the UI... Because ZFS is really stinking powerful, and there's a lot you can do with it. And so the challenge and the art is how you take that and then make it something somebody can click through, and it's pretty, and it gives you all the feedback you need.

So it's come a long way, I'd say, the last year and a half, two years. It's really Come into its own, and it's shining the way we kind of envisioned back in the days when we even started the Angular UI, a good six, seven years ago. So pretty happy with it. Not to say we're complete; we always have a lot more things we want to do.

I'll throw a little sneak tidbit out for your listeners... So in the fall release, we're looking on adding some more dashboard widgets, of different sizes, so you can customize it a little more fully... And add GPU feedback to the dashboard, too. So if you have an Nvidia, or an AMD discrete GPU in the system, you might be able to get your temperature and utilization and all that good stuff. So we're gonna keep improving it, and I think there's still -- each page I look at, I'm like "Ah, I'd love to fix that..." But all the big things that we wanted to do I think are starting to come together, and people see that when they install Scale for the first time.

**Adam Stacoviak:** Yeah. You'd mentioned your senior vicepresident of engineering, so I would assume that the interface for the thing you manage, and I guess senior vicepresident, is under your purview. Is the UI something that you pay personal close attention to, or what's your personal take in it?

**Kris Moore:** \[00:46:02.24\] I'm not only a senior vicepresident, I'm a heavy TrueNAS user myself, so absolutely I pay attention to it. I run my own rigs at my house, I have my own rack in my office at home... My personal TrueNAS'es are two I've built, because I also like to assemble hardware, and I've been that homelabber, just like you are, so that's where my roots are... So yeah, absolutely I pay attention to it. We have a UI team, and they handle the designs, and the implementation side of the UI... But it doesn't mean I don't go in and give my feedback. I think maybe they cringe when they see me coming, because they know "He's got something for me."

**Adam Stacoviak:** Oh, my gosh... "He doesn't come around too often to yell at us, but now \[unintelligible 00:46:31.29\] Well, not yell, I'm sure... "Give us stuff to do."

**Kris Moore:** I absolutely love to do that though, because a lot of times I'll go home and on the weekends - sure, I'm fiddling with my own TrueNAS system. I'm installing some new apps. I've just set up a \[unintelligible 00:46:44.17\] system on it, and got that all dialed in, and along the way I was like "Hey, there's some things we could do better on the app's UI, we could do this..." And so I go make my JIRA tickets and say "Here's the things we should address in the next version", and then eventually it ends up on the roadmap.

**Adam Stacoviak:** Yeah.

**Kris Moore:** I guess that's what one thing I get to do with the title, is I can go and drop things on the roadmap like that. So I do take advantage of it from time to time.

**Adam Stacoviak:** For sure. Well, let's talk about then -- since we're talking about that, let's talk about leading the teams of engineers that at the most deepest levels, at the Linux levels, with ZFS, and you mentioned before keeping... I believe you mentioned Core and Scale's ZFS - I don't know what you call them - in sync, or making...

**Kris Moore:** Future compatibility, all that?

**Adam Stacoviak:** Compatible, yeah. Because that's a big deal, too. I don't know -- I have moved ZFS pools from systems to a virtualized TrueNAS system inside of Proxmox a while back, and had some issues because at the ZFS level you've got different versions, and there's import compatibility, there's flags that are features that may or may not be in your distro of Linuxes or BSDs available to you... So there's things that can happen. ZFS can move around, but you might lose features, and you might even have pool issues. So what do you all have to do to sort of manage the core to be stable, and work with all Linuxes, and stuff like that? Well, I guess Debian, not all Linux.

**Kris Moore:** Let me give folks a little primer on the ZFS side. So ZFS, of course, it's a file system, but it does have versioning in it. And so a while back, they added feature flags with ZFS. So when the new ZFS 2.2 rolls out, it may have a handful of new features; block cloning is a good example. That's where when you make a copy of a file, it's actually not copying all the blocks, it's just doing a pointer, so you save space; in-line you do, basically. So that's the type of thing that's a feature that's turned on when you upgrade to a newer ZFS version. And it sets flags on the pool to say "This pool is using these features."

Well, of course, that's hard to rollback. If you go back to an older version of a Linux or something that doesn't have that modern ZFS, it checks those feature flags and says "Oh, I'm halting. I don't recognize this flag, and this means I can't read the data properly. I don't understand it." That's intentional, that's how it's always going to be. It has to be that way. It's the only way you can get new features into a file system like ZFS. So you have to take a little bit of care when you decide to roll forward. So one of the nice things we've done in TrueNAS is you do have a chance to try before you buy.

**Adam Stacoviak:** Oh, really?

**Kris Moore:** Yeah. I don't know how many folks know this...

**Adam Stacoviak:** I didn't get that chance, I don't think. It wasn't clear to me. I just was like "Upgrade!"

**Kris Moore:** It depends on where you're coming from, and if you're upgrading. So say you're upgrading from a version of Scale that's a couple years old; with ZFS we'll say 2.1. And now you're coming to the new Cobia and it's got 2.2. We don't automatically upgrade your pool for you. That's very intentional. And you might say "Well, you should do that for me." No, we give you the chance to make that choice to hit the Upgrade button of the pool later, because maybe you decide you have to roll back, "Oh, the driver I was using doesn't work as well here, or there's a bug, or for some reason I need to roll back to the old... Or I need to maintain compatibility so I can export a pool and import it in another system." Whatever the reason is, we give you the option to go click the button to say "I'm now ready to commit and upgrade to the newer version of ZFS, and turn on the fancy new features." So that's something that shows up in the disk page. When you go in, you'll probably see an alert too that pops up after a while, that says "Your ZFS version is running an older version. Click here when you're ready to upgrade" kind of thing. So that's kind of the story there.

\[00:50:18.05\] So again, if you know you're going to be using pool interoperability between different systems, just pay attention to that, just be aware that if I have older systems, maybe I don't want to upgrade this one to the newer version. Same thing if you're replicating. You could end up in a situation where potentially a replication stream needs a newer version of the pool on the receiving side. So it's just, again, something to be aware of as you go into your updates and say "Okay--"

The way I do it personally -- so as I have two ZFSes, or two TrueNAS'es at my house, and I replicate between them. Of course, one's the primary, one's the backup. And so I'll often upgrade the backup system first, to make sure everything's stable there. Because the newer backup system should always be able to receive the older ZFS stream, no problem. Once I'm content, everything's good on the backup system, then I go upgrade the primary, and then once I'm good and everything's running okay, then I click the Upgrade Pool button and life moves on.

**Adam Stacoviak:** That's a good pattern. I like that.

**Kris Moore:** That's my personal strategy. People usually will use some variation of that. And then on top of it, I'll backup to off site as well, usually some sort of S3 bucket somewhere.

**Adam Stacoviak:** Gotcha. So I did say -- I didn't get the option to try before I buy. I guess it's try before you buy by default.

**Kris Moore:** Yes, by default.

**Adam Stacoviak:** You get no option to not try before you buy, because --

**Kris Moore:** No. Again, the caveat - I should have mentioned this - is if you're installing fresh, it is going to use the current version of ZFS. So it's not like -- when you go create a pool for the first time, it's going to create it with the latest version, whatever that is. For example, if you're making a new and fresh TrueNAS, and you know you need to support an older pool format, you want to install an older TrueNAS for the initial pool creation, to create it with that older format before you upgrade forward into the new version that has the new pool features, if that makes sense.

**Adam Stacoviak:** In my case, I was migrating from, again, that Ubuntu self-built box - or system, I suppose, is a better word to use... And so I was moving pools from a non-TrueNAS system. Got to try before I buy, because it was like "Hey, yeah, let's recognize this as a ZFS pool. Here you go, it's there. By the way, you can upgrade this. And like if you do, there's no going back" kind of thing. That was the paraphrase of what the dialog box said. And I'm like "I will upgrade in a minute or two. Give me a minute to just think about that." But it worked just fine.

**Kris Moore:** No, we want you to think about it. It's designed to make you stop and think and go "Am I ready to do this?" Because part of it too is you can't use the rollback boot environments. Because again, if you're going back to older software, you need to know that those are not going to be accessible once you upgrade the pool to a newer version.

So you did ask about it in context of Core and Scale though, too. So what we do try and do is keep the two versions running a similar ZFS version. The version we have in Cobia and the Dragonfish that's coming out next month is that based on 2.2, and then we're getting ready to go into the release candidate, and release phase of a 13.3 of Core, which will have the same 2.2 version of OpenZFS. So again, we'll have parity between those two; this will allow people to move back and forth as needed, replicate as needed etc.

**Adam Stacoviak:** I guess this is important too when you consider the "maintenance mode" that you mentioned earlier for core. Maintaining it, you have to maintain -- I would imagine that you have mixed environments. Some folks that use Core, and they're trying to "modernize" onto Scale, that you want to keep those pools interoperable.

**Kris Moore:** Absolutely.

**Adam Stacoviak:** Not locking somebody out of like "Okay, well, just because you've chosen to have a more legacy system like Core, that's still amazing, still stable, still maintained... But - well, you're now locked from moving data around with replication."

**Kris Moore:** Absolutely. It's still pretty common when we see somebody saying -- again, in my scenario, two TrueNAS'es, a lot of times people... One of them's the older Core version, and that's the backup system that's receiving the backups. Fine. And then I'm using Scale so I can get the shiny new apps feature, or some functionality that I want to use on the primary. Completely valid; some people do that. But we do our best to make those kinds of scenarios possible, so people have ultimate flexibility.

**Adam Stacoviak:** \[00:54:14.08\] Yeah. How do you think about at your level? Because you're pretty high up with iXsystems and managing TrueNAS. How do you feel about, I guess, competition? How does iXsystems make money? What is your business model? Why in the world do you give away this amazing software for free as part of the open source movement that we all love and are here for? How does it make sense, and how do you compare to competition? What do you consider competition to TrueNAS or iXsystems itself?

**Kris Moore:** Sure. So I'll try and avoid mentioning competitors names, just because --

**Adam Stacoviak:** Mention their names. Don't hide. Put them out there.

**Kris Moore:** But no, more seriously, a lot of competition wishes they have what we have, in the sense of an open source community with that many use yours. It's phenomenal. We like to make the claim we're the largest storage company in the world, because in one sense, we truly are, just by the sheer number of deployments of people out there running TrueNAS in the wild... Which is amazing. That does a lot for us as a company. And that really, in many ways, is the secret sauce. It's like, we put our money where our mouth is. You don't have to spend hundreds of thousands of dollars to get access to a product; you can literally go download it for free, try it, see if it works, "Does it do what I want?", fall in love with it... And then you come to iX and say "Now I'm ready for the enterprise, grownup version of it, because I've gotta go to work, and I have responsibilities, and we need SLAs, and I need all the support, and all that good stuff."

**Adam Stacoviak:** Right.

**Kris Moore:** So I guess I'll talk about the business side a little bit. So iXsystems, of course, we're the makers of TrueNAS, we do all the primary development, all the testing, all that good stuff on the software side. And then on the enterprise side of the business, we offer TrueNAS as an appliance. And that competes with more of your traditional vendors out there, if you can think of who they are out in the wild. But we're the kind of young \[unintelligible 00:56:01.02\] guys who do the really cool stuff, and offer a lot of neat functionality that's just all inclusive, it's there; we're not nickel and diming you for license fees, and all that good stuff. But we take that software, and we marry it to different hardware appliance platforms. The key thing is, we offer both single controller variants, so if you're not in a high-availability need situation, you can do that. Or we have the HA platforms, which everything's fully redundant. So one chassis, two discrete controllers in there, they all have redundant access to the storage, and we can do failovers between them. So if you do have catastrophic system failure or something, it can failover to the other controller, and you're back in business within seconds, because it's all accessing the same ZFS pool, and it makes upgrades super-simple, because you can failover between them. It's quite nice. So we do that on the enterprise side, and that's very popular. Our customers really love that.

And then we do things a little nicer, like the proactive support as well, which means we're getting alerts and notices if a drive starts to behave flaky, or if we detect some other error conditioner on the box... We can reach out to you and let you know "Hey, we've detected something on your rig here. We're gonna send you a new drive. Or we need to schedule a call to go dive into this deeper and see what's going on." So really popular on that side.

One thing I will speak about a little bit is I don't think a lot of people realize how much work goes into doing an enterprise product like that. So we come out of the home lab space, right? We're used to going on Amazon, or Newegg, and buying our parts and putting together our system, and kind of do it yourself... And that works to a degree of works. But to go to the real next level of enterprise-level functionality and stability is huge. Now we're talking - we spend a lot of time working with vendors, firmwares, trying to make everything as reliable as possible to get all the nines on uptime we can, on every single platform we sell and support. That's not something you get if you homelab it. A lot of times for homelab it's fine, it's good enough, but for an enterprise that says "Man, I'm running critical infrastructure off this. I cannot accept any kind of downtime." Like, there's a lot of extra work that goes into TrueNAS to polish it to that level, to make sure it's just rock-solid stable for the most critical of environments.

\[00:58:17.21\] And the beautiful thing is the open source community benefits a lot from that too, because a lot of those fixes end up in the open source side, of course... And then a lot of it is on firmware and vendors and all that good stuff, to make sure that everything's compatible, and it's just hunky-dory, and hotplug, always works... And yes, enclosure management always works, and you get the nice visuals, and you can tell the remote hands in the data center which drive to pull by just looking at a graph and saying 'Okay, it's the second down, third to the right, go pull that one that's flashing", that kind of thing. So a lot of work goes into that. But that's --

**Adam Stacoviak:** "Don't pull the wrong drive..."

**Kris Moore:** That's really the difference. But another thing is, because we're open source, we're able to work with our community to make sure the software is battle-tested, and we can be led by our customers a little better. I don't have to sit here as the senior vicepresident and guess where the market's going, and make bets on that, and try and hope I get it right. I've got a community of people constantly giving me feedback. I mean, that's what this interview is; you're giving me feedback on how you use TrueNAS. I can hear from people directly in the field, in the trenches, working on it at home, at work... "This is how we use the software. This is how we use the hardware. These are the kinds of applications we run, or the kind of services that we run. Here's what we wish were different, or worked better, or the new thing that we're interested in..." We get that feedback in a heartbeat. It's quite amazing.

And it's daunting, don't get me wrong. I've hired some folks who've come in from closed source competitors, and it is a little daunting to come into kind of an open source company that lives by that open source ethos, and they come in and go "Man, all my work is visible. Everyone can see what I'm doing." And I'm like "No, no, embrace it. That's a good thing." We have no secrets. We have nothing to hide. I don't have to go and tell customers "Trust me." I can say "Well, you can trust me, and you can go look at to code and see exactly what we're doing." I love being in that position. I'd rather be in that position that not.

**Break**: \[01:00:07.29\]

**Adam Stacoviak:** How does that dovetail into making money? So how do you -- you were talking about the business, what the model is. I imagine that from the outside it seems like support/SLA type things on the software side, or you have a -- was it a TrueNAS Enterprise? Is there another flavor of TrueNAS out there?

**Kris Moore:** Yup. TrueNAS enterprise products. So we have things like our M series, which - again, dual controllers, and those guys can scale up to 20 petabytes plus on a single system... And we're talking beefy systems --

**Adam Stacoviak:** When you say "controller", what is a controller, when you say that?

**Kris Moore:** A controller is just a computer inside a chassis. So you've got two controllers, two discrete computers; again, 100% redundancy. So you can lose an entire computer, with its power supply, with its network, and it keeps on truckin'. It fails over the other. The storage automatically goes to the other system within seconds; any shelves that are connected with extra drives go over to the second controller, and you keep on moving. So instead of an outage, now you get a blip. It's like "Oh, storage went away. Oh, it's back." Even though I just lost a stick of RAM, or something, right?

**Adam Stacoviak:** What kind of installs require that kind of like -- at what level are people operating like that? Can you give me some examples of...?

**Kris Moore:** Sure. So a lot of high-end enterprises. We could talk about media and entertainment, where they're doing a lot of video editing, we could talk about hospitals, we could talk about universities, with students on 24/7, we could talk about finance and banking... I mean, we play in a lot of verticals as far as the storage product goes.

Another one - virtualization; of course, I should mention that. A lot of people are running it as the backing for their VMware. And you need that high availability because of the VMs you're running on top, which might be part of your critical infrastructure.

**Adam Stacoviak:** Right. Like my Tailscale app. So important.

**Kris Moore:** Absolutely. Very important for Tailscale. We've got to get that right.

**Adam Stacoviak:** Okay, that makes sense then.

**Kris Moore:** Yeah, so it's a combination of the appliances, and that kind of rock-solid reliability, it's the support, it's the white glove support you get in that sense... We're the makers of the software and the hardware, and it's one unified platform and environment... Some of the troubles, some of the competition has when you're software-defined only is you don't control the hardware, so now you're dealing with all the "Oh, I just threw it on this Dell, and it doesn't work right, and the driver's funky, and the HBA doesn't respond right, and the hot plug didn't work because the firmware doesn't match..." There's a lot of things when you go to that level of enterprise that you have to work out in advance. You can't make your customers bleed on it.

**Adam Stacoviak:** So y'all are making your own hardware, from the ground up. Do you work with that team at all?

**Kris Moore:** Yeah. So yeah, I mean, we're not making our own motherboards, and stuff. We take a lot of the best in commodity assembling and we assemble it, we put it together. We do a lot of the chassis design, we do a lot of the stuff in between, that makes all that work.

**Adam Stacoviak:** Yeah.

**Kris Moore:** But yeah, I have those teams under me. That's our platform team, which - those guys are amazing, so shout-out to the platform guys, if you're watching this. Then we have -- I'm actually here... I don't know if I mentioned, so I'm sitting over in the Knoxville, Tennessee area; it's Maryville, it's a little suburb of Knoxville. This is where our iX Innovation Center is; that's the building I'm in. Here we have a lot of our software and hardware engineers. And down in the basement we have a nice R&D lab, cleanroom, static floor tiles, all that good stuff. It's very nice. And that's where we do our product design and prototypes. So we've got all kinds of good stuff on the bench, and we're testing thermals, testing voltages, checking sound levels... You know, designing new products that will be next year's offerings.

**Adam Stacoviak:** Wow.

**Kris Moore:** So a lot of neat stuff happens down in that lab. And it's almost like a kid in a candy shop walking down there sometimes. It's like "Oh, I want one of those, one of those... That looks neat... I don't know what you're working on there, tell me about that..." And then - yeah, it's fine. We give tours of it occasionally to customers and vendors that come in, and it's a lot of fun.

**Adam Stacoviak:** I would love a tour. That'd be awesome

**Kris Moore:** Neat place. If you're ever in the area, let me know.

**Adam Stacoviak:** Okay. So assembling, kind of making your own hardware... Which is a big deal, I think. I mean, is that a big business for you?

**Kris Moore:** Yeah. That's what pays the bills.

**Adam Stacoviak:** \[01:07:55.08\] Can you - not so much share a revenue number, but can you share a ratio? Can you say "Well, our hardware business accounts for 60% of our revenue"? Or how does it slice?

**Kris Moore:** No, but what I can say is the TrueNAS enterprise business accounts for our revenue. That is what pays the bills and keeps us funding TrueNAS the software, the things that you guys run and download for free. So absolutely. That's our business model, is we put it out there, we have people fall in love with it, they enjoy it, and eventually they say "Wow, that system I built at home - guess what, boss? At work you should buy one of these, because it's half the price of the competition you were just looking at. And not only that, I know it, and I love it, and it's amazing."

**Adam Stacoviak:** And they have amazing forums.

**Kris Moore:** And they have amazing forums, yeah. Shout-out to the forums guys.

**Adam Stacoviak:** Do you get a different access? I suppose you get support. Do you even need forums at that point, when you're an enterprise customer?

**Kris Moore:** No... We wouldn't make our enterprise customers go to the forums. They call up, they talk to our support team, we handle everything. That's part of the experience.

**Adam Stacoviak:** Gotcha.

**Kris Moore:** Support actually sits in this building too, a huge chunk of them. So when you call up, odds are you might be talking to somebody here in Maryville. And yeah, support team is amazing. They have access to developers just a couple floors up, and we talk and make sure things are working for our customers. But you really do get that superior support experience working with iX... Because again, we own it all - hardware, software, all the features; we can service it all very well.

**Adam Stacoviak:** So platform's under you, engineering is under you... Would you consider UI engineering, or is that a different sliver?

**Kris Moore:** Maybe it helps if I can just lay it out. So yeah, it's not just all me, so I'm not taking all the credit here. I've got a team of a VP, I've got a director, I've got managers and supervisors of various groups... But we have software engineering groups that's under a vicepresident, and that's a couple of teams; backend middleware, which is a lot of the Python and brains of TrueNAS, which is where a lot of the magic happens... We have a UI team, which of course is the pretty UI you've been talking about. Those guys work with the middleware. And then we have a backend OS team, which does ZFS things and Linux things. We have to control all aspects of the stack on the software side.

This is something else people don't realize when they talk about "Oh, you have an engineering team." A lot of people think an engineering product is just a UI sometimes... Which in a lot of cases that's all it is. But no, no, we're talking down to the kernel, the file system, all the way up to the middle layers, up to the top, to people running it on their laptop and accessing a web interface.

So I have those folks, we have a platform team, again, the hardware guys, who then build the cool products, support the cool products, and then marry that to the software... We have SQA and automation team, so that's testing, manual testing, automation testing... So every time a beta or RC or a new release drops, we go through sprints of testing cycles here, just to make sure we did a good job as engineers, and make sure we're putting out good quality code even for our free community users. We want it to be great for everyone. And then we have a performance team, so we're always interested in what kind of performance we're getting, what's possible, what can we do better... Those guys spend a lot of time talking to the OS and file system guys, because that's where a lot of times we're tweaking and tuning things to maximize performance, squeeze ZFS, every bit of it we can out... And then we have - let's see... So the performance team, we have documentation... So you mentioned forums a lot, but I don't know if you've seen our handbooks and guides; those are all open source --

**Adam Stacoviak:** Those are awesome as well.

**Kris Moore:** Those are great. And those are all open source, too. We even open source the guide. Community people contribute to those occasionally as well. So that's all open. And we have a docs team that does all the cool artwork and photography for the enterprise products, but also makes sure the guides on how the software works and all that's kept up to date.

And then I guess with another hat on I have the IT kind of DevOpsy kind of groups as well, which is infrastructure... You know, hosting the websites, making sure the update servers are up, and all the good things you need to do to run a product like this.

**Adam Stacoviak:** Wow.

**Kris Moore:** So it's a busy group \[unintelligible 01:11:41.25\] I can't take credit for it all. I've got a great team underneath me, so by no means is this a Kris alone enterprise.

**Adam Stacoviak:** What do you find most joyful in your work? Where is your happy place?

**Kris Moore:** \[01:11:59.01\] Well, for me, it's I get to work on something that I use and love and enjoy. And there's a lot of people who don't have that luxury. So I consider myself very fortunate in that regard. Not only is it I get to come to work, I get to see other people and I get to work with amazingly talented people, engineers and all the folks on our team, to make an amazing product that I get to go home and geek out on on the weekend and play with, outside of work even, and do personal things on and just love it. That is special. And again, I wish everyone had that opportunity. I know a lot of folks don't. It's just a job. And we run into those folks with "Yeah, I do storage at other big-name company. It's just a job. I can't afford the gear, I don't have access to it. They don't have a free version. I can't afford to spend $100,000 to buy that system to put in my home rack." But what I love is the enthusiasm you get from running a team of engineers and iXians - what we call ourselves internally - who are also enthusiasts of the product.

If I if I could draw an analogy, if I was a car company, it's like a car company of people who are just car aficionados, who love it, and they go driving on the weekend, and like that's their hobby, in addition to what they do for work. So I'll let you in on a little secret - when I'm hiring people or interviewing and talking, that's what I'm looking for, is people who have that passion, like I do, or that drive, who want to build something cool that they would want to use, and will use, and are using. Those are the kinds of people we attract here at iX. And again, it's infectious. It's a great atmosphere and environment where people just -- the energy builds; you know how when you get enough people in the room who are all excited about the same thing, good stuff just kind of happens... That's the environment I get to come and work at every day. So it is really a pleasure.

**Adam Stacoviak:** Yeah. It sounds like you've got a fun job. I mean, I'm a fan... I could probably enjoy doing what you do. I mean, it seems pretty --

**Kris Moore:** You should apply. Next time you see an opening, there you go. \[laughs\]

**Adam Stacoviak:** Well, I've got a job. I'm doing my job now, Kris, you know...?

**Kris Moore:** Oh, I see how it is...

**Adam Stacoviak:** I've got a job. This is my job.

**Kris Moore:** Hey, there you go. There you go.

**Adam Stacoviak:** But at the same time, we make great partners adjacent; the brand, Changelog Media, we make great partners in other ways, too. So definitely opportunity for us to find ways to work together. And I'm already telling people about TrueNAS, you know?

**Kris Moore:** You are now an honorary iXian either way...

**Adam Stacoviak:** Sweet. Yeah. Yeah, I dig it. I was -- going back I guess one layer, whenever I was moving to the TrueNAS system, I was happy that I can try before I can buy, because I didn't have to upgrade those pools. And I was thinking "Well, I think what I'm doing here will work out." And so then I had enough confidence to actually import the pool fully and upgrade it... But I was like "You know what, this TrueNAS thing is really sweet." I was confident in a couple of days, just because I had that history of CLI management, which was just fine. I'm really happy for those days.

And then part of me was like "Man, now I can't type in zpool status -v and like be happy", or run a scrub manually. I'm giving up part of my hacker mentality, my hackerism, so to speak, in a way. Do you feel that at all going to a GUI?

**Kris Moore:** No, no, not at all. Don't get me wrong, I love the GUI, and I use the GUI, and that's what I enjoy, especially because I get lazy on the weekends. I'd rather go play with whatever the thing I want to do is, as opposed to having to script everything... But the nice thing about TrueNAS being what it is and open source is we don't restrict that access. You go turn on SSH and you're right in there, and you can run zpool list and see everything...

**Adam Stacoviak:** That's true.

**Kris Moore:** I personally actually have a handful of scripts that I keep on my storage pool that - what I do is I'll go... I'm a prolific shell scripter, right? So I'll go shell-script something up that does a thing on the TrueNAS, and I'll go into the UI and set it as a job to run either at boot-up, or periodically, or whatever the script is. Again, this is for advanced users, and this is the beauty of open source; you can kind of do what you want with it. So I wouldn't recommend it for everyone if you don't know what you're doing... But if you're like us, and you have that experience, and you need to scratch that itch and go do something a little off the beaten path, go for it.

\[01:16:01.14\] I will caveat, if you break it, I'm not going to be able to help you so much. You kind of went off the rails on your own... But the nice thing is you have that flexibility. Because - I mean, even TrueNAS the Dragonfish version, we have a command you can run to install the dev tools. So if you want to go hack on the system - and again, open source; we want contributions. If people have cool things, send them in. We've enabled that, so it's almost like an SDK. You can run one command and it turns on apt and all the Debian commands that you can go and do development work... Which is fantastic. That's how we basically develop it here. And we've enabled that to our community to do. I mean, not a lot of commercial closed source products do have that kind of flexibility. You just don't. But that's, again, some more value-add we can do with TrueNAS, which is "Oh, you want to add a feature? You need to do something a little custom because you've got a really strange workflow? Fine. Do it. Just don't come complaining to me if you break it." \[laughs\] That's on you at that point.

**Adam Stacoviak:** For sure. Well, you've mentioned homelab a couple of times, and I have as well... Homelab is a big deal. You've mentioned enterprise is where you make your money... But I've gotta imagine there's some money in the homelab space. What is the state of hardware for homelabbers? Are you guys looking at that market more closely? What's happening there?

**Kris Moore:** So we do address some of that. We have our mini line of TrueNAS'es, we have our minis, which are like little desktop units that are quiet and efficient, and you can do four drives, five drives, eight, whatever... And then we also just this last year unveiled the Mini R, which is a rack-mountable Mini. So great little system; you can get those if you're a homelabber. Again, some homelabbers want to go build their own, which I get, that's part of the fun; it's the hobby thing. But if you're like "Yeah, I'm a homelabber, but I don't want to go do my own hardware, and I want something that iX supports, and has all the testing and vetting... Or I want, like, say the enclosure management bit", because that's a piece that's really hard to do when you build your own hardware; we can't just map things for you automatically... That's a perfectly valid option.

And so yeah, we offer those; they're up on Amazon, they're up on the company website and store, and we see people grab those... And that's a good gateway device, especially even larger enterprises maybe will try that just see how it performs in their space, and kick the tires on an official platform before they go and scale up.

**Adam Stacoviak:** I just wonder if there's a middle ground there. For the folks who are homelabbers, but kind of like enterprise homelabbers, because they want to build their own thing... And you might say DIY, and in some cases DIY seems like a pejorative, but it's not really, because you're a DIY-er yourself as well... I would potentially spend several grand on a new machine if I can buy maybe a chassis from you all, and blessed components from you all, and be able to put my own CPU in there. And obviously, my own RAM. Is there a world where iXsystems will eventually support that kind of nature of homelabber? Because I've gotta imagine there's a big market for you out there, considering how ubiquitous you are in the open source.

**Kris Moore:** Absolutely. So I will say, we don't have that world here today, but there's no reason I couldn't run that through our product team and see if there's a world tomorrow where we could do something like that. No promises, but...

**Adam Stacoviak:** I think you'd be surprised. I mean the there's lots of -- I mean, I've done so much research... There's obviously no end to different pieces of hardware you can get out there. And then where you can get them generally is like Amazon, Newegg, CDW... I mean, you can be a home user as a CDW customer as well. I bought drives and RAM from them and whatnot... And this homelab world is sort of like this middleground between not quite enterprise, but they have enterprise tinkering desires... You know what I mean?

**Kris Moore:** Yes, yes...

**Adam Stacoviak:** So I don't know how to frame that as a business standpoint, but they're not just buy an appliance and move along. They're like "Can I buy good chassis? Can I buy good components from a worthy source? Not just random places."

**Kris Moore:** \[01:19:58.20\] We sit kind of halfway. We see some folks do that today with like the Mini R. They may buy that, put in more RAM, put a GPU in there, for example, because Plex is an extremely popular app people run on TrueNAS; they want their transcoding... So again, we're doing a little bit of that on the periphery, but not quite to the extent you're describing... But hey, something we'll consider.

**Adam Stacoviak:** I'd love it if you would run that up the ladder - or I guess down the ladder, potentially... \[laughter\]

**Kris Moore:** Sideways. I'll go to the product team.

**Adam Stacoviak:** Yeah, yeah, exactly. Sideways then. And just see, because... One, I would probably be a customer, and two, I've gotta imagine that there would be more opportunities out there. Now, I guess it depends if you can actually make money from it. It doesn't make sense for you to focus on it.

**Kris Moore:** Sure. Yeah, is it financially viable, and all that.

**Adam Stacoviak:** For sure.

**Kris Moore:** Part of the issue is if you sell something like that, can you support it? And then you lose money on the support, and all that good stuff. So you've got to do that math to make sure it makes sense for the business.

**Adam Stacoviak:** Yeah, absolutely.

**Kris Moore:** But in the meantime, we'll keep providing the same high-quality, awesome TrueNAS software that we always do, and do our best to try and support it on other hardware configurations. We're not unsympathetic to it, but at the end of the day we don't control every variety of every motherboard, and NIC, and all those things out there. So there's a challenge.

**Adam Stacoviak:** Well, when it comes to storage in particular it's about trust. I'm down to DIY, I'm down to tinker and homebuild, or however you want to frame it, but at the same time, it's storage, and I want to trust the components I'm getting. There's some things you can get from Amazon and be like "Totally cool. Whatever." Like a heatsink for an NVMe. Yeah, I'll buy that from Amazon. But if it's an HBA... I'm not gonna buy it from eBay unless I know it's a decent source. Like, if your HBA poohs the bed... I mean, that's like serious for your storage system.

**Kris Moore:** Oh, yeah. And you buy one that's been heavily used, and it's already got heat damage, or some other issues... I've seen that. It happens. Gotta be careful what you get off eBay, guys... Pay attention.

**Adam Stacoviak:** Absolutely. Well, what should we cover in closing? What else have we not said, Kris? I know that we've kind of covered a lot of it. We kind of went deep in some areas, maybe not so deep in others... But what's left unsaid?

**Kris Moore:** Well, I guess, let me just tease a little bit of the future and what's to come.

**Adam Stacoviak:** Please, yeah.

**Kris Moore:** So I mentioned a little bit about Dragonfish; you're on the Cobia release today... First, let me explain our release cycle, because this is a little bit different for people who are new to the Scale world, who come from Core. We used to be on a kind of a 12-month release cycle; with the Linux TrueNAS Scale product we're now on a six-month cycle. So we do day and date version, so 24.04, which is April of this year, and then there'll be a 24.10, and then so forth, and so on. So every six months we'll be dropping some sort of new major release that has features, and all that.

So the next one which is in the queue is 24.04, which - I know you mentioned Tom Lawrence. I think he just did a video on some of the cool features that are coming with that. 24.04 Dragonfish is important for a number of reasons. Number one is the biggest thing that a lot of Core users have been waiting for, is the ZFS ARC functionality has been changed on Scale. So you can use the same amount of RAM on Scale as you would have on Core for ARC now, for cache.

**Adam Stacoviak:** That's a big deal for people.

**Kris Moore:** That's something people have been waiting for for a while. We got that in. That's really kind of that last feature parity thing we needed for the majority of Core users who are kind of waiting to move to Scale. So that's in, that's great. The SMB side... So if you're an SMB user, that's been beefed up. Significant performance enhancements for that. Multi channels supported... And some of my favorite new functionality is you have things like auditing built in. So now TrueNAS can keep audit logs of your SMB user accesses, audit logs of user interface accesses... You can also see SMB session information now, so you can log in and see in real time who's connected to what, and what sessions are running, and all that good stuff. That's very, very nice.

Let's see, on the other side here... A lot of improvements on the backend, kind of sub ZFS performance things, block cloning is enabled... Again, that's that in-line dedupe. So if you're copying a file - you're an old school ZFS guy, so you know... If you copied files between datasets before, it actually had to make a copy of the file to move it over, and that took time, right? Well, with block cloning now - again, it's just making pointers. So you don't actually have to sit and wait for that 500-gig file to copy between a dataset. It's just instant like that. So... Very nice. And you get the dedupe benefits, because you're not storing a second copy of all those blocks. So that's a cool feature that's going to be in Dragonfish.

\[01:24:20.03\] A lot of little new UI improvements as well... There's a fantastic reporting feedback button up at the top, where you can with a click bring it up and submit as a screenshot of what you're seeing on your screen, along with a debug. So if you do run into a problem, we can hopefully triage it and fix it just that much faster now. That's really an amazing little feature.

And then just the usual assortment of scattered performance things. The Linux Kernel 6.6, for people who are curious - we try and follow the latest LTS kernels from upstream Linux. So if you're building newer hardware systems, that'll be a much-needed improvement for a lot of folks... But yeah, that's some of the major things, and we're excited to get that into people's hands. The beta is out now when we're recording this; I'm not sure when it'll air, but on Tuesday --

**Adam Stacoviak:** Next week. It'll go out one week from now.

**Kris Moore:** One week from now. Okay, perfect. So in that case, the RC is dropping March 19th, so RC.1 should just be out now. If people want to try that out and test it, that would be fantastic. One thing I will give props to our software QA team here is we've invested heavily in our test procedures over the last couple of years, in the team, and how we do the testing, the automation, the manual, all that good stuff... The RC releases are closer to what say a dot zero was a few years back. I mean, I regularly run betas and just don't have issues. I mean, the number of issues we have to fix has shrunk so much between beta and RC and dot zero. It's pretty amazing. That teams deserves a lot of credit.

So if people are ready to try some of those new features, by all means, give RC.1 a whirl. Let us know if you see anything. We'll fix it before the dot zero. But yeah, it's a pretty solid platform, and we're really thrilled to get that out the door.

**Adam Stacoviak:** So I did some checking while we were chilling out here, I suppose... I thought -- this is how unaware I was with what release I was on. So I'm on Bluefin.

**Kris Moore:** Oh, gosh.

**Adam Stacoviak:** So when I go into my Update section, that's the train I'm on.

**Kris Moore:** Okay.

**Adam Stacoviak:** So are you saying I should move my train to Cobia?

**Kris Moore:** Yes, I feel so much better now that you said that... Because that networking issue you had, I was positive we had fixed something around that in Cobia already... So you'll need to take some time here after the call or whatever, switch your train to Cobia, upgrade to 23.10.2, and hopefully your network issue actually is resolved as well.

**Adam Stacoviak:** And in terms of ZFS, that's always stable from train to train, I'm assuming. You're just adding features or performance improvements...

**Kris Moore:** We update ZFS versions, but the number one thing for us on the TrueNAS side is data integrity and stability. So...

**Adam Stacoviak:** Yeah, that's kind of scary to move from like beta releases -- that's when I'm like "Hey, I don't want to mess with this, because it's data", right?

**Kris Moore:** No, no, no. At the end of the day, ZFS is really the shining star under the hood, and we have to have that stable. So that's the number one thing. As a matter of fact, if anyone even hints at an issue with ZFS, that's like the top of everybody's stack internally here, and we're gonna go investigate that until we know what's going on. So yeah, even on betas we don't ship with really crummy ZFS code. That's too risky.

**Adam Stacoviak:** So let's say there's somebody out there that's a version of me, that are like "Man, I'm gonna switch my train from Bluefin to Cobia." What will I expect, what can they expect with this transition?

**Kris Moore:** I have to go back and remember the Cobia release notes now... But a handful of new features went in there. As a matter of fact, I don't know if you have the ability to show the screen, but if you go to the TrueNAS.com site, truenas.com/docs, what you will see is on that landing page you have a list of kind of the different versions. Core, Scale, there's our TrueCommand product, and then our hardware enterprise systems... And you'll see on that Scale, for example, 23.10 release notes. That's Cobia. So if you go bring that up, you can take a look, and I'll just kind of highlight a few of them here... But the apps page got a huge overhaul. So that's a lot cleaner, a lot better UI design.

\[01:28:02.12\] The storage pool creation page got a redesign as well. It makes it easier to do large-scale deployments. We're talking hundreds of disks. That's a big deal. We have also optimized to let you run up to 1,200+ drives on a single system. So think about it, 25 petabytes on one TrueNAS. That's pretty incredible.

Oh, SMB and NFS v4 multiprotocol. That was a biggie. So we do have a lot of customers who have mixed environments, say Windows and Linux... Or for whatever reason they need to be able to run SMB and NFS at the same time. Starting in Cobia, we now officially support that, with NFS v4 \[unintelligible 01:28:35.08\] and it preserves all the locks. So if a file is open on the Windows side, your NFS v4 client's not going to trample it. You don't end up with corruption. That's a big one. That opened a lot of doors for people.

Let's see... Some stuff on the enterprise side for a Lua support for Enterprise... dRAID was another one; that's a newer ZFS pool layout you can use. If you haven't read on that, I'd suggest go reading up on it. It's pretty interesting.

**Adam Stacoviak:** I'll check that out.

**Kris Moore:** Yeah, yeah. We also ported over Netdata now as the backend system that's doing all the stats collection... And speaking of that, there will be some exposure of the Netdata UI in a future release of TrueNAS coming soon, so people might keep an eye out for that...

I think that's some of the main highlights. But at this point, it's at dot two release; Cobia is pretty darn stable. It's what our enterprise customers are running in the field. So if you're not already on that, and still hanging out on Bluefin, I'd suggest upgrading. Now is the time.

**Adam Stacoviak:** Okay. Like I said, I'm a newer TrueNAS user, so I'm not sure how to... I haven't gone through much upgrading, or train changes before... So I was like "I'm just gonna stay where I'm at. I don't know where I'm at. I think I'm good", you know...

**Kris Moore:** Here's what to expect. It's super-simple. You go to the UI and you see a train that says "Oh, there's a new train that has the new version, 23.10, Cobia." You change train, it'll say "Okay, updates are ready. Do you want to apply?" You'll click Apply... It'll probably nag you first. "Do you want to backup your config file?" We always recommend that; just backup your config, store it on your desktop or laptop or whatever, so you have a copy... And then you just hit the button and kind of wait. And then it reboots, and then it comes back. It's all there is.

**Adam Stacoviak:** Well, I know the one feature I'll definitely appreciate would be the ARC changing, because like why have 128 gigs of RAM and dedicate only half to ZFS? I want to give it more, because this is a storage system. Give it as much as -- I mean, I usually go to like 80% for most cases. I don't know what you recommend for that, but 80% is a good number for a dedicated storage system.

**Kris Moore:** It is. And there's some calculation on the ZFS side that happens. It looks at the amount of RAM you have, and how much can we safely go, and all that... I forget the exact formula off top my head, but it's somewhere in that 80%, 90% of memory, depending on how much RAM you have in the box will end up being used out of box. That's in the Dragonfish beta; that'll be in the RC, which hopefully just released, and everyone can go grab now. Again, that's a worthwhile feature right there. A lot of folks are happy to see that \[unintelligible 01:31:00.03\]

**Adam Stacoviak:** Yeah, I'm doing it. Right after this call I'm doing it.

**Kris Moore:** There you go.

**Adam Stacoviak:** So when this show goes out, I'll probably be in the outro telling people how I did it and how fun it was.

**Kris Moore:** Well, then go do the beta or do RC.1, if you want to get that.

**Adam Stacoviak:** Oh, really? I should go to beta?

**Kris Moore:** Absolutely.

**Adam Stacoviak:** The Dragonfish beta?

**Kris Moore:** Come on, let's YOLO here. We can do this.

**Adam Stacoviak:** Are you that confident?

**Kris Moore:** I'm running all my personal stuff, and I have -- I mean, it's not a huge system. I've got 35 terabytes that I store on my home system... So it's data that matters to me. My wife would kill me if I lost all of our family photos and stuff... I mean, we're talking I'm in a ditch outside if something happens there, so...

**Adam Stacoviak:** Yeah, for sure.

**Kris Moore:** I trust it.

**Adam Stacoviak:** Dug by her.

**Kris Moore:** \[laughs\]

**Adam Stacoviak:** Happily. Okay, so your suggestion is to skip Cobia and go straight to Dragonfish from Bluefin.

**Kris Moore:** If you're adventurous... Well, no, I would go to Cobia first. Make sure that upgrade is good.

**Adam Stacoviak:** Okay. I'll go to Cobia first.

**Kris Moore:** You want to stair-step it. You want to go to the next release, make sure everything looks good and is happy... And then if you're adventurous and you want to go try out Dragonfish, give it a shot. And then just don't upgrade your pool if you need to roll back, because beta is too scary... Fine, if you can do that.

**Adam Stacoviak:** Okay. And so when Dragonfish comes out of beta, and it's a full release will be - what, next April?

**Kris Moore:** Yeah, this upcoming April. So we're about --

**Adam Stacoviak:** \[01:32:14.25\] I was thinking like last year in my brain, for some reason, when I said "next".

**Kris Moore:** No, it's hard to believe. It's like 30-some odd days from right now is when the full release comes out. So it's right around the corner. Like I said, especially with RC coming out, we have quite a few people, I think 1,500 plus running the beta right now. Usually, RC you're talking 10,000 start running it... It's pretty good numbers. And at that point, if it seems stable, and people aren't complaining about anything you care about, you can take the plunge if you want.

**Adam Stacoviak:** There you go. Alright. Well, Kris, I'll take your advice. After we hang up, I'm gonna do what we just talked about. Thank you so much for taking the time to just geek out with me on all the things you do for fun, and for hobby, it seems...

**Kris Moore:** Sure.

**Adam Stacoviak:** And I appreciate the hard work you put in for all of us to just enjoy, hobbyists and enterprise alike. It's a lot of fun to -- I find it to be a lot of fun to mess with storage. I'm like a weirdo, I suppose, in the world, and I'm just in the same room with a bunch of other weirdos in the TrueNAS world... Because not everybody is like super-fanatic about ZFS as I am... And that's just how it works. So there you go.

**Kris Moore:** Yeah. That's the part that makes work fun out here, man. I get to come to work with people who - again, if I go anywhere else, I'm the weirdo in the room. But here, it's like "Dude, I'm in the club. This is amazing."

**Adam Stacoviak:** You're accepted. You belong here. In fact, you run the show.

**Kris Moore:** That's right. \[laughs\]

**Adam Stacoviak:** Alright, Kris, thank you so much.

**Kris Moore:** No, it's been a pleasure, Adam. I really appreciate it. Thank you.

**Adam Stacoviak:** Yeah, thank you.
