**Jerod Santo:** Alright, we're here with Dustin Kirkland, we're talking about Ubuntu. Dustin, do you have a PSA for eight million Ubuntu people out there? Tell us what it is.

**Dustin Kirkland:** That's right, Jerod. Yeah, so just yesterday 8.3 million Ubuntu 12.04, which was the Precise Pangolin release of Ubuntu...

**Jerod Santo:** Precise Pangolin?

**Dustin Kirkland:** Pangolin.

**Jerod Santo:** Not Penguin.

**Dustin Kirkland:** Not Penguin.

**Jerod Santo:** Why not Penguin?

**Dustin Kirkland:** Because...

**Jerod Santo:** That's too typical

**Dustin Kirkland:** Yeah, that's too easy to get.

**Jerod Santo:** It's a little weird, keep it weird.

**Dustin Kirkland:** So a Pangolin - look it up, it's a pretty cool little animal. It rolls up into a ball...

**Jerod Santo:** Like an armadillo.

**Dustin Kirkland:** It's a lot like an armadillo. Here in Texas we call that an armadillo.

**Jerod Santo:** \[laughs\] Okay...

**Dustin Kirkland:** So 12.04, LTS, we released in April 2012 - five years ago. It just end-of-lifed on 28th April 2017, so two weeks ago, basically.

**Jerod Santo:** Okay... But people are still running it.

**Dustin Kirkland:** Eight and a half million machines checked in at Security.Ubuntu.com and said "Hey, give me my updates", and updates are no longer available for 12.04 in the normal archive. So you've got two options. Number one, please (Please!) upgrade your 12.04 systems to 14.04 or 16.04 - we've got two newer LTS's out there. You can upgrade your desktops, you can upgrade your servers... It's a really simple, automated process. If you can't upgrade, we do have an extended security maintenance product from Canonical where we will provide those security updates for another two years. So come talk to us, and we're happy to help if you can't upgrade. But by all means, upgrade if you can. We need to get the 12.04 machines their security updates.

**Jerod Santo:** Right. Because right now they're just out there on the internet and they're vulnerable, man.

**Dustin Kirkland:** Totally, yeah. Don't use those on public Wi-Fi at the coffee shop or hooked up to your cable provider without a firewall.

**Jerod Santo:** Alright, so there's that.

**Adam Stacoviak:** PSA - done. What's next?

**Jerod Santo:** What's next? The last time we had Dustin on (June 2016), Ubuntu Everywhere...

**Adam Stacoviak:** That's right...

**Jerod Santo:** Now we're talking about Ubuntu--

**Adam Stacoviak:** Mostly everywhere.

**Jerod Santo:** It's already everywhere, but we're scaling back the vision a little bit.

**Adam Stacoviak:** It's a little different.

**Jerod Santo:** Refocused. Tell us about this shift in you guys' vision.

**Dustin Kirkland:** \[00:03:57.23\] Sure. So I think the biggest and most obvious change is we're mourning the death of the Ubuntu phone. The Ubuntu phone was a pretty awesome experiment that we ran for almost five years now, but the Ubuntu phone project is now no more.

**Jerod Santo:** It's no more.

**Dustin Kirkland:** However, there is some amazing research and development that went into creating an Ubuntu-based operating system that could run on mobile devices. And in doing so, we now have an OS that we can update transactionally, atomically.

**Jerod Santo:** Really? That's cool.

**Dustin Kirkland:** Yeah. We also have a new packaging format that looks and feels a lot more like packages look and feel like on phones. All of that work has folded into the "Ubuntu on IoT devices" effort. So the phone's done. Android, iOS - that's what we're stuck with for the rest of the decade.

**Jerod Santo:** Right. So it's not gonna be on phones, but it's still gonna be on IoT devices.

**Dustin Kirkland:** IoT devices, absolutely. There's a little Ubuntu booth over here showing off Mycroft, which is an open source digital assistant, or artificial assistant. It's like an Alexa or a Google Home, except it's built on top of a Raspberry Pi, it's running Ubuntu, it has its own voice recognition software and its own backend that solves problems for you. That's one of many types of devices that you'll find the Ubuntu IoT story on... Drones, printers, all sorts of neat devices. So the phone lives on in IoT devices.

**Jerod Santo:** Okay. The ghost of the mobile phone is in IoT devices. Mycroft - I had to look it up; that was Sherlock Holmes' brother.

**Dustin Kirkland:** Yes.

**Jerod Santo:** When you said that, I thought "That sounds like a thing I know about..." Good name there. Mycroft.ai... Check that out. Open source stuff.

Okay, so a shift in strategy, lots of things learned... Hey, it takes guts to kill your baby, as I tell Adam. We use that analogy... Sometimes you have to kill your babies.

**Adam Stacoviak:** Yeah, sometimes you have to kill your babies. It does take guts, because you were saying "Everywhere", and phone - it means everywhere... And I guess the next best thing would be IoT devices, right? Because that kind of is to some degree what a mobile phone is, but not really.

**Dustin Kirkland:** It's an emerging market, for sure. I mean, you guys are geeks, I bet you have all sorts of devices around your house...

**Adam Stacoviak:** A lot more devices than phones.

**Dustin Kirkland:** A lot more devices than phones, that's right. And some devices have probably been around for a few years, and they're not getting updates. If you wanna have some fun, go home, open up a Linux terminal and `sudo nmap --fingerprint-os`  your entire network. Nmap will run a series of heuristics and try to guess the operating system in kernel that's running on all of those devices. You're gonna find a whole bunch of unmaintained Linux 2.4, Linux 2.6, 10-15 year old kernels on devices you didn't even know were running an operating system, much less the Linux-based operating system.

**Adam Stacoviak:** Okay.

**Dustin Kirkland:** That's the problem we're trying to solve with Ubuntu Core, Ubuntu Core being our OS for embedded devices. They're gonna get updates, the same way Ubuntu gets updates - transactionally, safely, and without you even needing to know or worry about that.

**Adam Stacoviak:** So certainly a more secure IoT device world...

**Dustin Kirkland:** Absolutely.

**Adam Stacoviak:** ...which is a huge issue.

**Dustin Kirkland:** Absolutely.

**Jerod Santo:** It's one of the biggest issues with IoT.

**Adam Stacoviak:** That's understating it, of course, but you've got baby monitors being taken over, you've got garage doors, you've got micro -- who's using an IoT microwave out there? What for?

**Dustin Kirkland:** Who knows, but it's happening, I guarantee it.

**Adam Stacoviak:** Securing that thing.

**Dustin Kirkland:** Exactly, it's all about the security. You know what the "s" in IoT stands for, right?

**Adam Stacoviak:** Tell me.

**Jerod Santo:** There is no s.

**Dustin Kirkland:** Security. \[laughter\] And you're exactly right... \[laughter\]

**Adam Stacoviak:** I was like, "IoT - where's the s in that?" \[unintelligible 00:07:42.02\] He's sneaky, he's sneaky.

**Jerod Santo:** \[unintelligible 00:07:43.18\] "I walked right into his plan." \[laughter\]

**Adam Stacoviak:** Well, can we maybe rewind and say why you were even going after the phone? Was it simply this mission of everywhere, or was there a real reason?

**Dustin Kirkland:** \[00:07:56.17\] You know, we had some early partners on it. We're all just free software -- we're here at OSCON, and you won't find more free software - truly GPL free software - anywhere in the world than in the Canonical and Ubuntu family of software. GPL and AGPL are our default licenses; we really default to a free software world. And we were running a lot of Android and a lot of iOS devices on our persons, on our tablets, but we've got this innate desire to run open source and truly free software that we can inspect, that we can update, that we can fix... That was the real goal of the phone.

We ran an unsuccessful Indiegogo campaign to raise 32 million dollars to build our own hardware and OS. We raised half of that, and set the record for --

**Jerod Santo:** That's a lot of money, man...

**Dustin Kirkland:** Well, we set the record for the most committed. There was over 16 million, we got over half way there to the commit, but we gave it all back when we didn't reach the whole...

**Adam Stacoviak:** It's a wise move.

**Jerod Santo:** It's like the nugs guy. Did you guys see the nugs guy? He got his nuggets.

**Dustin Kirkland:** I did. What was it, three million retweets, or something?

**Jerod Santo:** He set the record for the most retweets. Do you know the story, Adam?

**Adam Stacoviak:** No, tell me.

**Jerod Santo:** Some guy tweeted about...

**Dustin Kirkland:** A high school kid, I think.

**Jerod Santo:** Yeah, a high school kid tweets @Wendy's "What's it gonna take to get free nuggets...?"

**Dustin Kirkland:** "How many retweets is it gonna take for me to get free nuggets for a year?"

**Jerod Santo:** And they said 18 million.

**Adam Stacoviak:** What?!

**Jerod Santo:** And he said "Consider it done." He took a picture of that conversation, tweeted it and then it just went crazy... And he set the record; he beat Ellen from the Oscars a few years back.

**Adam Stacoviak:** Wow, that was a big photo, too...

**Jerod Santo:** Most retweets in history - 3.5 million, something like that... Nowhere near the 18 million, but Wendy's gave him the nuggets.

**Dustin Kirkland:** They made good on it, yeah.

**Adam Stacoviak:** A valiant effort, nice.

**Jerod Santo:** Yeah, because he set the record, you know?

**Adam Stacoviak:** Nice.

**Jerod Santo:** So it's kind of like that, only you guys gotta give -- I hope this guy doesn't have to give the nuggets back later.

**Dustin Kirkland:** Yeah, that's gonna be gross. \[laughter\]

**Jerod Santo:** But you guys gave the money back, so that's... That's the right thing to do.

**Dustin Kirkland:** You know, we went on to create the operating system, we put it on three or four devices - a couple of Meizu devices, a couple of BQ phones, I ran it on a Google Nexus for a few years... It was really some beautiful technology. I'm delighted to see that the children of that technology lives on in the IoT space, and I think that's even more important.

That's a space where I think open source and free software is extremely important. You're going to want to know what software is running on your router, on your voice-over-IP phone, your refrigerator, all of those devices.

**Jerod Santo:** Especially when you get into the things that are vital for life, like medical things, safety things, right?

**Dustin Kirkland:** Yes, absolutely. It's safety-critical. I was thinking more from a security and privacy perspective, but yeah, absolutely, the life-critical stuff as well.

**Jerod Santo:** Yeah, for sure.

**Adam Stacoviak:** If you had been successful though, would it have been a Apple iOS/Google Android/Canonical Ubuntu world? I'm just kind of curious if that's what you were trying to do, or was it simply open source secure Linux?

**Dustin Kirkland:** The real vision was always convergence. It's when this laptop here that you're looking at and your phone merge into one thing, so that when your phone is nearby or touching or docked into this that's providing the CPU memory, RAM, the disk, the storage, the network connectivity for this larger format shell that you're in. And a bigger screen, a user keyboard to type on... But when you take that phone away, it's got everything that you need on, so you can be just as productive on that. So we were going for convergence.

Over the course of the couple years, we showed that vision, but it's just really hard to do when you don't control the hardware platform and when you're the third entrant in an already crowded market.

**Jerod Santo:** Well, even a company with the size and clout of Microsoft couldn't get their mobile --

**Adam Stacoviak:** Yeah, that's true.

**Jerod Santo:** I mean, they wanted to be the third runner, and they didn't even hold on.

**Dustin Kirkland:** Yeah, that's true.

**Jerod Santo:** It was an uphill battle.

**Dustin Kirkland:** \[00:12:01.07\] There was a lot of us fighting for third place. Blackberry... Remember ten years ago, Blackberry would have been the clear...

**Jerod Santo:** ...leader in that.

**Adam Stacoviak:** I heard they're coming back. They have something new out recently.

**Dustin Kirkland:** Good for them. \[laughter\] Good for RIMM...

**Adam Stacoviak:** RIMM is always trying to do something.

**Jerod Santo:** Research in Motion...

**Adam Stacoviak:** So you mentioned some things extracted from this effort - are those open source? Where are they at? Can people tap into those? Give us your take on that.

**Dustin Kirkland:** Yes, absolutely. Yes, open source, absolutely. There are two real key pieces that came out of the phone that now is the basis for Ubuntu as an embedded system. One is Ubuntu Core. Ubuntu Core is an Ubuntu operating system that - as I was telling Jerod just a minute ago - is put together in a way that we can do in-place atomic transactional upgrades.

So you download an image, a copy, a BOS that you're going to upgrade to; that gets installed into a second location, essentially. It's a Squashfs, it's a special file system, and when you reboot, you reboot into that new Squashfs, that new image, and if everything goes okay, you pass your system checks, your burn-in checks, we clear the flag, which says "This is a good boot", and then the next download can come down and will be the next upgrade. If you need to roll back, you can just switch back, reboot back into the previous Squashfs. So the first half of it is Ubuntu Core.

**Jerod Santo:** Quick question.

**Dustin Kirkland:** Yeah.

**Jerod Santo:** Why can't we have that for all of our computers?

**Dustin Kirkland:** We're getting there.

**Jerod Santo:** Because I'm still afraid of upgrading... I would love to have for servers, for laptops...

**Dustin Kirkland:** That's a great question... So we're getting there, especially on the server space. Are you familiar with Kubernetes containers? Ubuntu Core we can also use as a server operating system. You have to think about that OS a bit differently. It's a bit of a mind-meld when you get into your root file system being read-only. You cannot modify files in the root file system; that's really a different way of interacting with the Linux UNIX system.

So we can get there, we can run Ubuntu Core on a desktop, but your desktop's gonna feel much more like a kiosk, at least in the near term. Now, that's okay, and that's actually what you want in some server applications, where what you're doing is interesting inside of a container - maybe a Docker container, maybe an LXD machine container.. But we are using Ubuntu Core in clouds - so in virtual machines and in physical machines - to provide the same benefits that you want out of an OS for an embedded system, but for a server that you don't wanna be afraid of upgrading. You want in-place upgrades, and we can do that safely with Ubuntu Core and applications running essentially as containers.

**Jerod Santo:** Okay.

**Dustin Kirkland:** Now, applications are the second piece of the fruits of the Ubuntu phone labor, that now fits into our entire strategy across the board. It's a new packaging format for Ubuntu called Snap - Snap packaging. It comes from Click packaging - Click was the packaging format for the phone. That's evolved actually into a packaging format that's now generally useful.

Click was good for packaging the Facebook app or the calendar app for the Ubuntu phone. Snaps are much more general purpose, and we can use those to package any service or application. So it can be GUI apps for an Ubuntu desktop or tablet, it can also be server apps, it can be databases like Etcd, it can be web servers (Apache or NGINX) - it's a fantastic, modern take on packaging.

**Jerod Santo:** Is that effectively a file structure reorganization to everything, like Sandbox inside of an app folder instead of spread across the file system? Is there more to it than that?

**Dustin Kirkland:** Yeah, that's part of it, and that's exactly where it starts. Every Snap carries with it all the files that it needs to run, which has been a pain in the RPM world, frankly.

**Jerod Santo:** Isn't shared libraries, isn't that good?

**Dustin Kirkland:** Yes, it's good... To an extent.

**Jerod Santo:** Or you thought it was good for a long time.

**Dustin Kirkland:** Well, it's good for what it is, it's not good for what it's not... And there's a tautology for you.

**Jerod Santo:** Thank you.

**Dustin Kirkland:** \[00:16:04.01\] Disagree with that one, I dare you! \[laughter\]

**Jerod Santo:** This man speaks truth!

**Dustin Kirkland:** No, there are shared libraries which are part of that base Ubuntu Core image.

**Jerod Santo:** Yeah, so they're available already, and you can link to them.

**Dustin Kirkland:** Yes. And there's some that you want to come from the operating system... The low-level stuff, the glibc, the SSL, the standard libraries... But having gotten to know many thousands of developers over the years, developers want to build with the tools they want to build with, want to ship with the libraries that they want to ship with, and some languages have that natively built in. Java, for instance... As much as you either love or hate Java, if you understand how Java works, your JAR file contains all of the code that you need to run, and it's part of its portability.

And you might have down-level versions of compression or some library like that, but you don't care, because that's the way your app was supposed to run.

The other way of doing it is the opposite of shared libraries, which is static compilation... Which is now again in vogue. If you don't do anything in the Golang world, Golang is gonna want to compile statically. That's showing a shift in the way applications are being developed, and fundamentally, snaps are a packaging format developed and fundamentally snaps are a packaging format that allows that. DEBs and RPMs don't allow that; it's difficult (if not impossible) to do that in DEBs and RPMs... So we've created a packaging format that's modern and addresses that.

**Jerod Santo:** Is this moving you guys further away from Debian in terms of the likeness of the two distributions?

**Dustin Kirkland:** I don't think so, because the underlying -- there's one binary that has to be running on the system to use Snaps, and it's SnapD... It's the daemon that is required to host and run. It's a lightweight little Golang service, essentially, but we've ported that SnapD to Debian; it's available in Debian, in Fedora, in CentOS, in Suse, in Arch, in Gentoo... You can use Snaps anywhere, in fact. In fact, the same Snap can run anywhere, as long as you have a SnapD that's running on that system.

**Jerod Santo:** That's cool.

**Dustin Kirkland:** Yeah. So no, I don't think it moves us further from Debian. Deb's not going away, but new software we're rapidly migrating towards using the Snap packaging format. For instance, Kubernetes is a big, complicated bit of software, also written in Golang; we package Kubernetes as a Snap and deploy it as a Snap.

**Adam Stacoviak:** When we come back from the break, we're gonna talk about Bash on Ubuntu on Windows, specifically Bash on Ubuntu on Windows server, which was announced recently at Microsoft Build Conference. We ask questions like "Why is Microsoft behind this move? What can we expect from Windows Server, but more importantly, who is asking for this and why?" Stick around.

**Break:** \[00:19:00.07\]

**Jerod Santo:** Last time we had you on -- in fact, the reason that we brought you on was the big Bash on Windows announcement last year, and we found out on that show that -- Dustin was the messenger... Microsoft did a lot of the work and it was kind of their idea, and Canonical played along and that was great, it was very cool.

**Dustin Kirkland:** I think we were a little more involved than that...

**Jerod Santo:** Oookay, now I'm giving you not enough credit... But my takeaway was at least they came to you, and a lot of the work had to be done by them.

**Dustin Kirkland:** Yes, that's right.

**Jerod Santo:** So I'm backing down on that a little bit, thank you for --

**Dustin Kirkland:** I mean yeah, it does -- Windows kernel is still proprietary software that a few Windows developers at Microsoft have access to. We don't. But we do do quite a bit of work to provide the QA, the automated testing, the upgrades and the updates of the Ubuntu image into the store...

So we've since moved that image from Ubuntu 14.04 to Ubuntu 16.04, which involved quite a bit of testing and QA, a few adjustments. The Microsoft team has done an amazing job responding to issues in GitHub, fixing things that were broken or not quite working right... As you can imagine, things go wrong when you're doing something as complicated as that...

They've also released it out of beta, and it's now generally available in Windows 10 on the desktop. The big announcement today at Microsoft Build - we're at OSCON in Austin, Texas... At Microsoft Build in San Francisco, Microsoft is announcing that same Bash on Ubuntu on Windows experience for the Windows server, which has been a frequent request of Windows users. They like this Bash thing for their desktops, but man, they really wanna use this on a server.

Now you can imagine literally Apache running natively on a Windows server.

**Jerod Santo:** It's kind of weird, isn't it?

**Dustin Kirkland:** It is a little weird. SSH directly on a Windows server.

**Jerod Santo:** That's pretty cool.

**Dustin Kirkland:** Yeah.

**Jerod Santo:** I mean, I think...

**Dustin Kirkland:** It's a new Microsoft.

**Jerod Santo:** What are the other advantages? Why not just run a Linux server then, if you're gonna have everything on -- you know... Maybe because you still need your SQL server, or something.

**Dustin Kirkland:** Yeah, there's absolutely a time and a place for a full Linux virtual machine, and that doesn't go away when you need a Linux kernel, for one reason or another. Maybe you're opinionated about what Linux kernel you need; you need a particular interface, or maybe you're custom-compiling and you're tuning it or tweaking it.

So yeah, there's absolutely Linux machines running in the millions, Ubuntu machines running in the millions, instances in Azure, in Amazon, in Google Compute... So that doesn't change. I don't think that changes at all. If you go over to the booth here, Microsoft has a big booth, and they have one screen up - it is the Bash Ubuntu shell that Rich Turner is constantly running demos on. It's fantastic. I like to lurk in the back, as conspicuously as possible...

**Adam Stacoviak:** He's wearing an Ubuntu shirt that's orange... You can't miss him. \[laughter\]

**Jerod Santo:** Yeah, you can't lurk.

**Dustin Kirkland:** But watching the questions that come up, and people's heads sort of turn when they see and understand what's going on there... I'll tell you, to answer your question, it's the fact that it's instant, that when you click on that Ubuntu icon on the Windows desktop, you're in a Bash shell immediately.

**Jerod Santo:** That's cool.

**Dustin Kirkland:** Immediately! There's no boot-up time, there's no unclean processes or services that might start or might not start, whether you're on a network or on an airplane... You're in a Bash shell and it feels really native, really natural.

**Jerod Santo:** That's cool.

**Adam Stacoviak:** So what does this do for a server?

**Dustin Kirkland:** What does the Ubuntu on Windows do for a server?

**Adam Stacoviak:** Yes.

**Dustin Kirkland:** \[00:24:03.24\] Good question, and I think...

**Adam Stacoviak:** Who asked for it and why?

**Jerod Santo:** Lots of people, it sounds like.

**Dustin Kirkland:** Lots of people, yeah. Digging through the GitHub issues, feature requests on the Microsoft GitHub site you'll see this request quite a bit. I think it's the bridge between "I'm doing this on my desktop, and it's cool, but I have this server at work" or "I have this Windows server where I want Bash. I wanna be able to grep and awk and sed through my local Windows file system."

I think last time I shared the anecdote about how I had to modify some code on a Windows machine which I hadn't really used in almost 20 years, and I was struggling my way through Visual Studio, when what I needed to do was replace one word in 21 files, and... Maybe there's a way to do that Visual Studio - I don't know how - but it occurred to me that "Wait a minute... I could literally just drop down to a Bash shell, find .-files=pipe sed, rewrite those files and I'm done. That was awesome.

So I think server users want to be able to take advantage of that as well.

**Jerod Santo:** Yeah. It makes sense that once you get a drink of it in one environment and you're like "Oh, this is awesome, because I still have all my apps that I like on Windows, and I've got my Linux shell, which is far superior to what I had previously... But when I go to the server that I've been running, that I have already, I can't use any of these tools that I have either fallen in love with or have always loved and wanted in Windows and now I have them... So I'd love to have them on my server", especially when it comes to automation, description and stuff...

**Dustin Kirkland:** Yeah, I think it's the power of apt... The fact that 55,000 binary packages are available in Ubuntu 16.04, one command, one click away... It's been beautiful to watch Windows users come to terms with the fact that there's an app store built into Ubuntu. We've never called it an App Store, it's a package archive, right? But it's fundamentally an app store where everything is free and open source software.

**Jerod Santo:** There's no pricing.

**Dustin Kirkland:** No. Apt-search anything you want, and it's there.

**Adam Stacoviak:** So would it be practical then to have a Windows server running Apache or NGINX, versus Microsoft's -- was it MIS, or IIS?

**Jerod Santo:** IIS.

**Adam Stacoviak:** IIS, that's right.

**Dustin Kirkland:** Yeees... \[laughter\]

**Adam Stacoviak:** It's practical.

**Jerod Santo:** Definitely practical.

**Adam Stacoviak:** Why is it practical? Why wouldn't they just go to the Linux server in that case...

**Jerod Santo:** Because they maybe already have the Windows servers...

**Dustin Kirkland:** Yeah, there's certainly reasons why you might wanna spin up a Hyper-V virtual machine on Windows and run Ubuntu or another OS inside of that to run your services. That'll happen, and there's good reasons to do that. Maybe there are networking reasons, or firewall reasons... You know, it's a flat namespace, it's a flat network space, the Bash shell on the Windows server. It's the same IP address, all the packets that land at the IP address which is that server endpoint, all the ports are flat, so it feels like the two are one. From that perspective, that might be what you want. It also might not be what you want.

**Jerod Santo:** Right, but they're not forcing it on anybody, right?

**Dustin Kirkland:** No, I'm not selling Windows, either...

**Jerod Santo:** Nobody came to my door and said, "Hey, you need to run it this way."

**Dustin Kirkland:** That's right.

**Jerod Santo:** They're giving options, which is great.

**Adam Stacoviak:** But just because you can doesn't mean you should...

**Jerod Santo:** Or will...

**Adam Stacoviak:** Or will... But you can.

**Jerod Santo:** Right.

**Dustin Kirkland:** So that's entering beta. It'll be in beta for a while... I just saw a friend here cross the hall...

**Jerod Santo:** The joy of the conferences is there's friends everywhere.

**Adam Stacoviak:** A little friendly nod never hurt anybody...

**Jerod Santo:** There's even pigeons walking around...

**Adam Stacoviak:** I know, there's pigeons here. I don't understand why.

**Jerod Santo:** So there's no distractions at all.

**Dustin Kirkland:** Yeah, none whatsoever. What were we talking about? \[laughter\]

**Jerod Santo:** I actually don't remember...

**Adam Stacoviak:** Bash, Windows server... I think you were trailing off on that.

**Dustin Kirkland:** That's alright, it's good stuff. We're enjoying it.

**Adam Stacoviak:** So for those listening, where do they go to find out more?

**Dustin Kirkland:** \[00:28:09.06\] Rich Turner at Microsoft has a blog post that's out today talking about it. This is a new thing, it's in beta for Windows server and it will be for a while...

**Adam Stacoviak:** Does that mean you can sign up for the beta, or is it available to download for anybody?

**Dustin Kirkland:** I don't even know, but I'm sure, yes... Absolutely.

**Adam Stacoviak:** Information's still pending, but the announcement's being made today, blog post going out... Gotcha.

**Dustin Kirkland:** In the keynote there's a demo, watch it online... You guys have a list of awesome links at the end of the podcast anyway, so we'll get you that link.

**Adam Stacoviak:** We'll link it up in the show notes, for sure.

**Dustin Kirkland:** I love that, by the way. It's pretty awesome. It's appropriate, in that this is the Changelog.

**Jerod Santo:** Here's the log of stuff.

**Adam Stacoviak:** We've gotta log the stuff... \[laughter\] We actually have a bot that logs.

**Jerod Santo:** We call it logbot.

**Adam Stacoviak:** Logbot.

**Dustin Kirkland:** Logbot, alright.

**Adam Stacoviak:** Nobody knows about logbot.

**Jerod Santo:** Now they do... Announcing logbot! Vaporware coming to an App Store not near you.

**Adam Stacoviak:** That's right, that's right.

**Jerod Santo:** It's a figment of our imagination that we talk about...

**Adam Stacoviak:** It's a desire, a dream... \[laughter\]

**Jerod Santo:** Paperware... \[laughs\]

**Dustin Kirkland:** Good. And I heard you were gonna start working on an Alexa skill for the Changelog, right?

**Jerod Santo:** As soon you get back to your house, you're gonna start \[unintelligible 00:29:26.16\]

**Dustin Kirkland:** "Ask Changelog for episode 192 featuring Dustin Kirkland." \[laughter\] I don't know if that's the right number...

**Jerod Santo:** No, you got it wrong, but Alexa would correct you, I'm sure.

**Dustin Kirkland:** Yeah, she will. She knows this stuff.

**Adam Stacoviak:** "I think you mean..."

**Jerod Santo:** Yeah, "Did you mean episode 1--?" I don't know what it is...

**Adam Stacoviak:** What's the episode number, Jerod?

**Jerod Santo:** [Episode 207](https://changelog.com/podcast/207).

**Adam Stacoviak:** "I think you mean episode 207. Would you like me to play that for you." "Yes, Alexa."

**Dustin Kirkland:** "Yes. Set volume to zero." \[laughter\] I don't actually wanna listen to myself.

**Adam Stacoviak:** "Play at 1.25x."

**Jerod Santo:** Dustin, anything else before we let you go?

**Dustin Kirkland:** No... You guys are great, man. Thanks!

**Adam Stacoviak:** Thanks for coming in and thanks for talking about this, man. It was a lot of fun.

**Dustin Kirkland:** You bet, you bet...
