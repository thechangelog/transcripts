**Adam Stacoviak:** Let's begin here then. How about this? We asked for somebody who can school us in WSL.

**Craig Loewen:** Nice. Okay.

**Adam Stacoviak:** The open sourcing, of it, the --

**Jerod Santo:** Are you the one?

**Craig Loewen:** I'm the one.

**Jerod Santo:** I thought so. That's what I've heard.

**Adam Stacoviak:** ...all the things. Where should we begin? What should the world know about WSL?

**Craig Loewen:** So the big news this week is that we took the Windows Subsystem for Linux and we open sourced it. So what exactly does that mean? Because we actually have a bunch of different aspects of WSL, it touches a lot of different places in the OS... And to put it in a sentence, what we did is we took the code, the logic that says "Give me a Linux VM, make all of my Windows files access it, give me access to the GPU" - we took all of that, and that is open sourced. And so that joins some of the other projects that we already have open sourced. The kernel that powers WSL is open source, as well as our graphical library, basically repository called WSLG, to power GUI apps in WSL - also open source.

**Jerod Santo:** Okay.

**Craig Loewen:** So the only thing that's not open source these days is the WSL1 implementation...

**Jerod Santo:** Which is old, right? Old and busted.

**Craig Loewen:** Yeah, which is the old version. It's not the default anymore. And the reason why we're leaving that closed source is because it's very tied to the Windows image, whereas everything that we've done now, we've been able to remove it from the Windows image; it ships out of band of the Windows image...

**Adam Stacoviak:** It does.

**Craig Loewen:** ...so now we're able to fully open source it.

**Jerod Santo:** Gotcha.

**Adam Stacoviak:** You have to enable it and install it too, right?

**Craig Loewen:** Right, so you can run wsl --install to install the full thing. What that does is it installs an MSI from GitHub, which does the WSL logic, and then it enables the virtual machine platform, optional component in Windows, which gives you virtualization.

**Adam Stacoviak:** The thing that bugs me about Windows is -- and I'm new to it, so it's not even a criticism. It's just more like I don't know how to do it, and it seems hard to do it. It seems like it should be more logical... It's how to make it dev mode.

**Craig Loewen:** Oh, I see.

**Adam Stacoviak:** To go from Windows Pro to dev mode. I'm coming for WSL, I'm coming for the awesomeness that Windows is... But the marriage of Linux and the Linuxes of the world in concert with Windows, and running rsync and htop on just like different Linux commands in this Windows world is a really cool thing, I think. And I feel like WSL is going to keep making that better and better and better, and potentially draw Mac users over to this world. I went back from Things, that's only on the iOS Mac platform as a to-do platform, to Todoist, because Todoist is everywhere. And it's so fast on Windows. I click on the icon and it's up. On Mac I click on the icon, I wait, and I wait, and I wait, and I wait, and then it's up. And the experience on a Windows machine is like night and day. But WSL is why I'm coming.

**Craig Loewen:** For sure. And we actually -- so the team that I work on is the developer experiences on Windows team. And we own some other different areas, like Windows Power Toys, as well as Windows Terminal... And so we are trying to bring a lot of that "Hey, I love using Windows because of this developer-focused feature", trying to bring that at those experiences.

**Adam Stacoviak:** Right.

**Craig Loewen:** So one of the other things that we just did this year at Build was in Windows settings we made Advanced Settings a page. So it takes a lot of those feature requests of things like "Hey, I want to turn on --" One of the things we added there was long file paths is now a toggle there, which is awesome. Being able to turn on end task again. So you right-click on something in the taskbar and it has End Task. We put all of those in one place.

So for your question of "Hey, how would I get dev mode?", I would really recommend checking out the advanced settings page, and you can like flip through that and it should really quickly set you up.

**Adam Stacoviak:** \[07:51\] How about this? How about this? Instead of that, how about y'all create a -- would you call it a TUI in PowerShell?

**Craig Loewen:** Oh, I see... Yeah...

**Adam Stacoviak:** Like, you said the WSL GUIs... Why don't you do a GUI app that gives me a menu that says "Yes, yes, yes, no, no, no, take away, move...", like the Titus scripts do, and things like that, to make it Windows kind of for everybody, and kind of Windows for everybody plus developers. You know, make it a little bit more like hands-on guided tour, versus figured out... Which is kind of like that \[unintelligible 00:08:24.12\] go check out the settings menu. That's good, but it's not the guided tour.

**Craig Loewen:** For sure. You're wanting a "Hey, let me run through this..." Maybe an extra setup.

**Jerod Santo:** You're asking for a wizard? Is that what you're asking for, a wizard?

**Adam Stacoviak:** It really is. Well, Titus Scripts -- I forget what it's... I think it's called Titus Scripts.

**Craig Loewen:** Yeah.

**Adam Stacoviak:** It's Chris Titus, he's well known out there on YouTube... We'll link in the show notes. But I use whatever he suggests, and it's this GUI that does that, but it's third party. Not to say that it's bad or good, and I don't even know how to qualify that, but... Bring it that in-house. You have a massive amount of developers; just make it easier for developers to use your machine, is what I want.

**Craig Loewen:** Totally. And that's a really cool idea, and I think some of the other things that we're working on that would work really well with something like that are a winget. You might've seen the Windows package manager being able to winget install, you know... I can install things directly through that. The other cool feature that's coming out of that is winget configure. So what's neat is you have a YAML file, and it's a description of the state of your computer. So you're saying "I have these apps installed, and these are the status of my settings." And what's neat about that is you go winget configure, apply this configuration, and it will put your computer in that state. Which is awesome, because I actually use that as my setup script...

**Adam Stacoviak:** That's so wild.

**Craig Loewen:** ...and it's not even a script, because I can apply it to a machine at any time. I don't have to worry about "Oh, is this going to mess anything up, or change it?" Because it's not a script running that's running commands that could fail. It's literally checking "Is this thing installed? If it's not, install it", which is a pretty powerful tool.

**Jerod Santo:** Hah.

**Adam Stacoviak:** Yeah. There's a lot of cool things happening there... And that goes back to almost that -- I mentioned to Jerod in other shows, and obviously he and I podcast, and... You're the newbie here, to this scenario...

**Jerod Santo:** No offense. \[laughter\]

**Adam Stacoviak:** No offense. But I've told him before... I ran a podcast -- I've been podcasting for a very long time. And I think this show was at least 12 years ago... And it was the Microsoft before VS Code, it was the Microsoft before TypeScript, it was the Microsoft when you had less developer love, and you all were kind of making the seemingly good choices to have this comeback, so to speak... Because in my eyes you were less cool, and everything Mac was super-cool. Just generally. But there was a major shift there, and I was calling, I was like "You know what? Because of this --" I can't remember what it was, but it was around 12 years ago... Because of something y'all were doing, I'm like "They're going to be coming back. They're going to start doing things, because I'm seeing this change, and it's not this accident. It's on purpose." And I feel like a lot of this is like -- there's such cool stuff in there. So WSL is a big part of that. So tell me about the cool things you can do with WSL, and specifically WSL2.

**Craig Loewen:** So the primary use case for the Windows Subsystem for Linux or WSL is running your Linux workflows, apps, tools, utilities, and more. And so it really runs the gamut of what you're able to do with it. For example the Minecraft team at Microsoft, they program -- Minecraft, they use WSL to actually do that. We see teams who make the Linux kernel for Azure, and both for WSL - they also use WSL. Even -- if you remember the Android phone that Microsoft made, the Surface Duo, that was also programmed with WSL. And so what I kind of love about it is it is this really wide range of customer base that we get, of use cases that you get with it... And anything from "Hey, I want to build a website, I want to train an AI model, or program a phone", are things you're able to do with it. And so it is a pretty powerful tool.

**Adam Stacoviak:** Yeah, for sure.

**Jerod Santo:** Can you explain to me exactly how it works?

**Craig Loewen:** Yes.

**Jerod Santo:** Without whiteboarding, you know... Do your best, but --

**Craig Loewen:** \[12:11\] You're right. So the architecture is - we actually have a virtual machine that powers it. And it's a virtual machine that we actually took that technology - "took" is in quotes - from Azure. And so it's a utility VM, a lightweight utility VM. And we have a kernel in it that's preloaded, so we kind of skip the necessary boot process... We basically go from cold start to ready to -- you know, a Bash terminal that's ready for input in about two seconds on average, which is like blindingly fast to pull up a full VM.

**Jerod Santo:** Sure.

**Craig Loewen:** And we also get a lot of other cool benefits from using that tech. The amount of memory that we have in that VM expands and shrinks as you use it over time. And so we do a lot of work to try and conserve all of your resources so it feels like the same machine. So what really happens is you run WSL.exe, and then we have a service on Windows that goes and talks to - there's a set of APIs called the host compute service; that depends on a subset of Hyper-V APIs based on the virtual machine platform component. And it talks to that and says "Give me a VM."

So we get at one of those lightweight VMs, we load the Linux kernel in it, which is included with the WSL package, and then we start a single VM, and we have our own custom init process inside of that. So we start this Linux process, and then we take a look and say "Okay, what distro is the user loading?" So the user is saying "I'm loading Ubuntu." And we say okay, we find that VHD, where the user has their Ubuntu data, and then we load that and mount that into our WSL VM.

And so all of your distros, when you're running them simultaneously in the same VM, they're running almost like containers, because they're separated by namespaces in Linux. So you're running it there, and then we do some final work to basically do some plug and play bits. Like, we mount your Windows drives for you, we do some work to mount your GPU, we have a special GPU device... Basically, we do the finishing touches, and then after that we load that VM and connect to the STDIN and out, then you're done. So it touches a lot of different parts in the OS, but it's pretty cool that that all happens in two seconds.

**Jerod Santo:** In two seconds.

**Craig Loewen:** Yeah.

**Jerod Santo:** And that's the first time you use it, obviously... Like, after a reboot or whatever; it's going to stay running, so subsequent calls, or... I mean, it's just a VM running, basically.

**Craig Loewen:** Exactly.

**Jerod Santo:** And do you manage it like a VM? Like turn it on, turn it off, pause it etc?

**Craig Loewen:** You can, but we try to make that invisible to the user. And so what we do is we listen if there's any open file handles on Windows... hat's the technical term, but really, it's "Hey, do you have a terminal window open? Do you have anything listening for the output of WSL.exe?" And if you don't, so I close all my terminal windows, we go "Oh, you're done using WSL?", we wait a minute, and then we shut down the VM for you. And then when you go and start it up again, we start it up again for you. Because the startup time is so small, we can save a lot of resources on your computer.

**Adam Stacoviak:** And the way you get to -- so tell them how you get to Ubuntu.

**Craig Loewen:** Oh, pretty easy. All you've got to do is go to -- if you literally go to your command prompt or PowerShell and type wsl --install, it will set up everything for you. You will probably need to reboot to enable virtualization if it's a fresh machine. And then once you reboot, Ubuntu will install automatically. And then after that, it will just open, you type in your new username and password, and then you'll be at Bash. And from there, you can open up terminal, and you'll have an Ubuntu profile, with the Ubuntu coloring and graphics. You can run full GUI graphic apps. And we also now have support from a ton of new distros, like Red Hat, Fedora, Arch Linux, and more... Joining the family with distros like Debian and OpenSUSE, that have been there for a while.

**Adam Stacoviak:** Here's a question/idea. And I'd say it's an idea if it's a brand new thing... Unless you've already built it, then it would not be an idea.

**Jerod Santo:** That's a question?

**Adam Stacoviak:** Right. So I'm a fan of Proxmox.

**Craig Loewen:** Okay.

**Adam Stacoviak:** \[16:17\] Are you a fan of Proxmox? Do you understand Proxmox, or what it is?

**Craig Loewen:** No.

**Adam Stacoviak:** Okay, so Proxmox is an open source Hyper-V for Linux. And so you can run a hypervisor, which is Proxmox, and you can install Linux, you can do.... VMs, essentially.

**Craig Loewen:** Right.

**Adam Stacoviak:** When will, or is it on the roadmap to make WSL like that? Because I love it because I can run one single machine in all my Linuxes, and then marrying this with this potentially "Hey, Adam is no longer a Mac user. Now he's a Windows user", but I also want to command an army of... Linux, you know? ...sort of thing. Potentially even IP addresses. Like, Hyper-V has IP addresses and everything; full network, but they're VMs.

**Craig Loewen:** Oh, I see. Are you wanting to run like multiple different virtual machines running Linux?

**Adam Stacoviak:** Yeah.

**Craig Loewen:** And what would be the use case for it, versus \[unintelligible 00:17:10.04\]

**Adam Stacoviak:** Well, one might be running Pi-hole, for example.

**Craig Loewen:** Got it.

**Adam Stacoviak:** One might be running Plex.

**Craig Loewen:** Yeah.

**Adam Stacoviak:** And that machine will have a mount automatically mounted on boot, from my NAS, which is a whole separate machine, that's running TrueNAS. And so that's a dedicated NAS appliance for the whole network. Everything can store things there.

**Craig Loewen:** Yeah.

**Adam Stacoviak:** Everyone in my family has access to it, and it's all authenticated, and it's provisioned, and it's ZFS... It's amazing. So that VM, that could be running WSL versus Proxmox, would run Plex.

**Craig Loewen:** I see. And then where is Hyper-V falling short for you for using that kind of scenario today?

**Adam Stacoviak:** It's not on Windows.

**Craig Loewen:** Hyper-V?

**Adam Stacoviak:** Hyper-V does that? So here's my -- I'm not a Windows user, so I don't know what to use to get there. So does Hyper-V do it by itself? This is a thing?

**Craig Loewen:** So in Hyper-V you could set up a full VM... I think this is a great question which we get on the WSL team: "What's the difference between using WSL and Hyper-V?"

**Adam Stacoviak:** That's my question then, I guess.

**Craig Loewen:** Right, exactly.

**Adam Stacoviak:** There you go. Rewind as if that was the question.

**Craig Loewen:** \[laughs\] Great question.

**Adam Stacoviak:** Because I knew what I wanted, but I didn't know it existed, or what's out there that does it.

**Craig Loewen:** Exactly. So the answer there is WSL does use Hyper-V under the hood... But WSL is kind of the more specialized use case. So Hyper-V is going to give you a lot more of that fine-grained detail control. You're like "I want multiple VMs. I want to control exactly what mounts. I want to control exactly the networking behavior of NAT, versus something else, etc." Having that level of fine-grained control over the virtual machines totally is a Hyper-V scenario.

**Adam Stacoviak:** Okay.

**Craig Loewen:** And for the scenario you described, I think Hyper-V would meet those needs. So where does WSL come into the play if Hyper-V behaves like that? The answer there is WSL is mainly trying to simplify that experience for a developer in a dev environment. Hyper-V - you're able to grab any Linux distro, you can set it up, you can have a full virtual machine and get it ready to go... But by nature of the extra layers of customization, that can take a little bit more time and setup. WSL is like the fast track of "I want to get started as quickly as possible. Just drop me an Ubuntu. And I want my GPU to work just as it would on a Linux device, and everything's pulled over." We kind of set that all up for you and make that just really easy to use from A to Z. That's totally our goal.

**Adam Stacoviak:** Gotcha. So is Hyper-V a non-Microsoft product? Is it somebody else's? Does it cost money? Is it open source? What is Hyper-V?

**Craig Loewen:** \[19:52\] So Hyper-V is based in Windows. It's a Windows feature. So it's an optional component that you can turn on and off inside of Windows... And it's available only on ProSKUs, and other SKUs as well. So it's not available on \[unintelligible 00:20:03.00\]

**Adam Stacoviak:** I have Pro, I'm cool.

**Craig Loewen:** Okay, great. So you'll be totally set up.

**Adam Stacoviak:** Yes.

**Craig Loewen:** Yeah. So you can just go to turn Windows features on or off, enabled Hyper-V, and then you'll be fully able to access it. And it's made and supported by Microsoft.

**Adam Stacoviak:** Okay. How's the UI for it? Describe the interface.

**Craig Loewen:** The interface is - there's a Hyper-V manager, and then it has the ability to go in and enable, and turn on and off, and create or delete these virtual machines there.

**Adam Stacoviak:** Okay. What is it like to do like PCIe passthrough...? Can you do things like that? Like, how complex can you make these VMs?

**Craig Loewen:** There's a lot more ability to make those complex. Specifically, since I'm the product manager for WSL -- Hyper-V is a much broader set of capability. And so for advanced things like PCI Express, best to go get statements from the Hyper-V team; they can give something more accurate.

**Jerod Santo:** But you know there's GPU pass-through, because you're using it.

**Craig Loewen:** Right.

**Jerod Santo:** So PCIe --

**Adam Stacoviak:** Gotcha.

**Jerod Santo:** \[unintelligible 00:21:00.27\]

**Adam Stacoviak:** Probably some sort of interface to manage those things. I was curious about that, because --

**Jerod Santo:** Probably.

**Adam Stacoviak:** ...I mean, in the past, just as an example, these questions are less like enterprise, because probably no one's doing that necessarily... But maybe they are. Maybe in dev environments. But it's more like a home lab question. So my curiosity was like, okay, I was beginning to tinker with the various NAS opportunities out there, and I was like "I want to play with it in a VM. And I want to pass through some virtual drives to this thing."

**Craig Loewen:** Right.

**Adam Stacoviak:** And sort of have a skunkworks of a TrueNAS install, or an UnRaid install, or whatever it might be. And so my lure to Windows at this point is that WSL being there, and then obviously Hyper-V, enable these cool things while also running a very cool operating system alongside of it. Like, I can have my cake and eat it too.

**Craig Loewen:** Totally. And that's probably one of my favorite things about working on WSL, is that there's a lot of reasons that I love Linux... I studied robotics in university, and we used a lot of Linux to program robots. Things like ROS, the Robotic Operating System etc. Very Linux-focused. So I do love using Linux, but there's so much that I love about using Windows as well.

For example, I really enjoy games, and being able to have my full set of games, and they work just as I've used them for a long time on Windows is awesome. And now I have the ability to kind of run those both simultaneously, on the same box. It has been amazing.

**Adam Stacoviak:** Yeah, no having a KVM, or something like that. How can we make it faster? Latency is probably the biggest concern. First of all, where does latency come from? How do you shrink it? What do you all do against it? Can you make it faster? Is it the fastest it will ever be, the latency between a Linux command on a Windows file system? What's the beans there?

**Craig Loewen:** Totally. There's actually a really cool website \[unintelligible 00:22:52.28\] .com. They're a third party website, not directly affiliated with Microsoft, and they write articles about -- they compare, on the same hardware, what's the performance for the Windows Subsystem for Linux versus a bare metal version of Linux. And we do take a look at those and say "Hey, this is a great understanding of where our performance is", and maybe areas we could improve. In general, it's about a 5% virtualization tax. 5% to 10%. It depends on what you're doing.

Surprisingly, there's actually scenarios where WSL is faster than bare metal Linux, just because of the nature of how things are set up. There are scenarios where that works, and there's also scenarios where we're going to be slower, especially around things like heavy IO; it's an area where we want to perhaps see some speed improvements. And so that is probably one of the areas that we want to improve... But I would say in general, if you're looking for speed and performance, we're very comparable to bare metal Linux, which is pretty great.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So y'all been open source for five days?

**Craig Loewen:** Two days at this point.

**Jerod Santo:** \[24:04\] Officially, perhaps. The initial open source commit was five days ago.

**Craig Loewen:** Right. That's when we froze it. We froze the build.

**Jerod Santo:** Gotcha. But you didn't actually hit the button in GitHub until two days ago.

**Craig Loewen:** Exactly.

**Jerod Santo:** Alright, so we're both right.

**Adam Stacoviak:** Alright.

**Craig Loewen:** We're both right. Exactly. \[laughter\]

**Adam Stacoviak:** He's a litigator.

**Jerod Santo:** It's inconsequential.

**Adam Stacoviak:** He needs these details to be clear, okay? Continue, Jerod.

**Jerod Santo:** Well, I'm just curious... I mean, 23,000 stars, huge press, obviously, 1,001 issues open... Interestingly, a lot of these seem like they're before that, so maybe a lot of these issues are using this internally.

**Craig Loewen:** So we actually had the repository open for a long time before this.

**Jerod Santo:** Okay. You just didn't talk about it.

**Craig Loewen:** Yeah, we used it as our public-facing, let's interact with the community --

**Jerod Santo:** Okay, but the code wasn't there.

**Craig Loewen:** Yes, exactly. So no code was available there, but it was "Hey, are you having an issue?"

**Jerod Santo:** Gotcha.

**Craig Loewen:** Us on the WSL team would take a look and communicate with the community there.

**Jerod Santo:** Okay.

**Adam Stacoviak:** That's an interesting thing to point out too, because there's this idea of, obviously, open source. We all get that. But then also the line between end user to development team making the thing is often so obscure that you don't even attempt it. And what you did was create a direct path. Like, if you've got WSL thoughts, come say hi.

**Craig Loewen:** Yeah, exactly.

**Craig Loewen:** And we take a look, every week --

**Adam Stacoviak:** That's kind of cool. Even though it wasn't open source, you were doing open things.

**Craig Loewen:** Yeah, exactly. And that was pretty awesome for us, and really helpful. We've gotten so many good community feedback, and requests, and... What's awesome is even before we open sourced, people were making projects for and with WSL. Some users would take a look at our code when we'd make updates and be like "Oh, they added the string" of a feature that we hadn't announced, and then write a blog about how to go access and use that. Someone even wrote a fix with a private binary of how to use WSL with 64 cores and more... So we're really excited to open source now and finally be able to say "Hey, okay, we know there's tons of excitement. Now you do have full access to really party with WSL."

**Adam Stacoviak:** Yeah.

**Jerod Santo:** How do you parse out those contributions and decide which ones are good, bad, indifferent? Like "Ah, we're going to take this idea and do it ourselves", or "We're going to merge this in and give you credit." Or "We're going to ignore this, because it actually doesn't align with Microsoft's vision" etc.

**Craig Loewen:** Yeah, it's a really good question, and something that's pretty difficult to do, I think, to kind of do that well. Be respectful to the community, get good community contributions, but also have a clear vision and understanding of the product.

I think it comes down to very clearly having a mission statement and goal for WSL. I think people use it for a lot of different things, and they'll say "Maybe I want it to work in this way, very specific to my scenario." But WSL, at the end of the day, is a way -- it's for developer scenarios. It's for the ability to run Linux tools for development on Windows. And having that kind of front and center really helps guide us of, when we look at a contribution, "Is that helping that mission statement?" Can we then give feedback and say, "If you change it in these ways, that would be better. We'll be able to contribute it, or add it and merge it into the product"? And so that's really our goal.

**Jerod Santo:** Gotcha. So that helps guide your decision-making process. If you were to categorize or summarize, if you were an LLM and I said "Summarize these 1,100 issues." You know what I'm saying?

**Adam Stacoviak:** \[laughs\]

**Jerod Santo:** I mean, he's got his thumb on his pulse...

**Adam Stacoviak:** Oh, my gosh... I love it. Continue. I'm sorry. I was caught off-guard.

**Jerod Santo:** I was just thinking about what are the kind of things that people are requesting, or maybe even hitting up against? Towards that mission, where are you? And what kind of stuff is still in the way? Is there like "50% of our issues are this thing, or 20% of that thing..."?

**Craig Loewen:** For sure. I would say it's a variety, and it's changed over time. So the 1,100 issues that are open right now are just -- a lot of them are kind of feature requests of things we'd like to see... And it's definitely a variety of things, and there's so many more closed issues, actually... I think we're at like maybe 10,000 or more.

**Jerod Santo:** \[28:14\] I can tell you. Yes, 10,400. So I'm not picking on you by saying there's 1,100 open.

**Craig Loewen:** Right, right. Only 10% are still open. It's not bad.

**Jerod Santo:** That's pretty good, right?

**Craig Loewen:** Yeah. And it's kind of a difficult question to summarize, but I would say the top issues that are on my mind for it are "How do we improve our ability to use memory in WSL?" How do we make it faster to access your files on Windows, from WSL and vice versa? How do we improve the ability for your disk space to automatically expand, and then shrink once you're done using it? How do we improve the ability for people who are building on top of or with WSL, like Docker Desktop, Podman Desktop, NVIDIA, and more? How do we empower those organizations and products to have an awesome Linux experience when using that? I would say those are my kind of top of mind...

**Jerod Santo:** Gotcha.

**Adam Stacoviak:** Here's an example from what he's saying here, too. So an example of speeding up the file system is - I'm just on Windows, Jerod. I opened up this terminal. I think it's called PowerShell, right?

**Craig Loewen:** Right.

**Adam Stacoviak:** You open up PowerShell, and you go into your Ubuntu, which I always forget how to, so I have to just up-arrow until I see WSL... But there's a way. Was it wsl -- ...?

**Craig Loewen:** wsl.exe will just land you right in there.

**Adam Stacoviak:** Okay, so wsl.exe in this thing. And now you're in a shell that has Rsync. And so you're running Windows, you're in a terminal, and you're running Rsync... So now I can take some files on this Windows machine, because I've whatever through compression to put it into long-term storage, or whatever... And I do that, and I run that command which is a Bash script, probably, on that same Ubuntu image... And then I would Rsync it over to the NAS, on a Windows machine. That's badass. That's awesome, dude. Does that not get you excited?

**Jerod Santo:** I mean, it's cool.

**Adam Stacoviak:** I mean, isn't that cool?

**Jerod Santo:** It is cool.

**Adam Stacoviak:** That's dope!

**Jerod Santo:** I think so, too.

**Adam Stacoviak:** Alright. \[laughter\] They've embraced Linux that well.

**Jerod Santo:** Right.

**Adam Stacoviak:** To enable... I mean, it's fast. It's so fast.

**Jerod Santo:** Teach me about the file mappings. You know, how you're actually accomplishing that...

**Adam Stacoviak:** The backslashes.

**Craig Loewen:** Oh, yes. Yeah.

**Adam Stacoviak:** Play a song, Jason. Play a song.

**Jerod Santo:** There's a place I'm driving towards... Which is that I think backslashes are trash.

\[30:33\]

**Jerod Santo:** I despise backslashes. Okay? They disgust me. This is one of the primary reasons why I don't like Windows. It uses backslashes in its path names. Forward slashes are cool, I'm down with underscores, hyphens are okay... The pipe character is fine... I'm even okay with the tilde, and back ticks... All good. But backslashes - get those dreadful characters out of my face before I slap someone. And I'm looking at you, PHP namespaces...

Matt, do you have -- have you thought of any good lyrics? Any rhythms and rhymes for the backslash? This song could be called "Backslashes are the worst", it could be like "Backslash, you disgust me."

**Adam Stacoviak:** I would just call it Backslash.

**Jerod Santo:** By Mat Ryer.

**Mat Ryer:** "I don't mind Ash... I don't even mind Bash.. I like caching and cash, and I'll clash with the dash in a flash, man... I'm not going to say gash... I don't even mind hash... I'm out on the lash, man... I've got a rash. Oh my gosh, man, I'm going to smash your face in if you backslash me. That's trash. Backslashes are trash. A backslash is a trash... Yeah, a backslash is a trash... And don't say forward slash... Just say... Slash... Just say slash. Just say slash... No need to say the forward bit... Just say slash..."

**Craig Loewen:** \[laughter\] Are you a forward slash --

**Jerod Santo:** I'm a forward slash purist... And I was going to bring this up with the advanced settings, because I was like, "This could be an advanced setting. Like, please -- I know this runs deep in the file system, but please, don't use forward slashes in my Windows..." So eventually we'll get there. But how does the -- so if I hit wsl.exe, I'm dropped into Ubuntu.

**Craig Loewen:** Yup.

**Jerod Santo:** Where am I in my file system?

**Craig Loewen:** So you start in your Linux file system.

**Jerod Santo:** Right. So I'm like at the root, or my home drive, or stuff like.

**Craig Loewen:** Your home drive, right? So if you do pwd, you're like at home/craig would be mine.

**Jerod Santo:** Sure. If I'm in yours, it's weird, man. \[laughter\] This is not my directory...

**Craig Loewen:** \[unintelligible 00:33:19.04\] But if you start there, that gives you the best performance. That's why we start you there. Because obviously, Linux binaries to Linux files gives you the best perf. But you can go to the Windows file system. So if you go to cd/mount, you'll find all your drives.

**Jerod Santo:** Forward or back slash?

**Craig Loewen:** Forward slash. Your favorite.

**Jerod Santo:** Okay.

**Craig Loewen:** Yeah.

**Jerod Santo:** So your C directory is mounted in your /mount.

**Craig Loewen:** Exactly.

**Jerod Santo:** Gotcha.

**Craig Loewen:** And so you can go to mount C, and then you can access your whole Windows files from there.

**Jerod Santo:** And that's what you're doing with your Rsync.

**Craig Loewen:** Right. And you can have all of your Linux --

**Adam Stacoviak:** I nodded to the audience. I nodded to Jerod when he -- he leaned over and asked me that question. Continue, Craig.

**Jerod Santo:** Thank you.

**Craig Loewen:** \[laughs\] So you can have your forward slashes and fully go through your C drive. You can run Bash scripts on your C drive, you can run whatever Linux commands you want, like rsync, totally accessing everything. And what's cool is all of that is done through your Windows user access. So behind the scenes, we actually have a file server that we've set up. It uses a protocol called Plan 9. The P9 protocol. And we have a file server set up both in Linux and on Windows to serve their files to each other. So wherever you are... You know, there's some people who prefer backslashes, right? You can go access the Linux files with backslashes.

**Jerod Santo:** Right.

**Craig Loewen:** And go edit all that. You can open stuff with notepad.exe, and access the files from there... And so --

**Jerod Santo:** So if I launch notepad.exe and I go File, Open... Is that how it works?

**Adam Stacoviak:** I don't know.

**Craig Loewen:** Yes.

**Jerod Santo:** Sounds right.

**Craig Loewen:** I can confirm that.

**Jerod Santo:** Yeah, he's an expert.

**Adam Stacoviak:** Yes. I'm still I'm still learning, so I don't know.

**Jerod Santo:** How would I navigate to like my Etsy directory in Ubuntu, to edit a config file or something?

**Craig Loewen:** So you could go File, Open in Notepad, and then in File Explorer we have a Linux section. So on the left side of File Explorer there's all that quick access menu ribbon for like my computer, things like that. Network...

**Jerod Santo:** Craig's computer...

**Craig Loewen:** Yeah, Craig's computer, if you're on my computer.

**Jerod Santo:** \[laughs\] Yeah, get on Craig's home drive... Yeah.

**Craig Loewen:** And at the bottom, we've added a Linux logo, when WSL is installed. You can click that and then you can find all of your Linux distros there. So I would click Linux, Ubuntu etc. and then I would be able to access all my config from that.

**Jerod Santo:** Do those files exist when wsl.exe is not running, or do they only exist when it's running?

**Craig Loewen:** They do exist when WSL is not running, but the -- the top-level folder will exist. When you open that, we spin up the WSL VM, so we can serve it to you.

**Jerod Santo:** Gotcha. Pretty seamless then...

**Craig Loewen:** Right. And kind of my favorite part --

**Adam Stacoviak:** It's so well baked in. That's what I was thinking. It's so well baked into Windows. I love it.

**Craig Loewen:** Right. And that's kind of been our goal, of - we want it to feel like one machine. There are folks who prefer backslashes, folks who prefer frontslashes...

**Adam Stacoviak:** \[laughs\] You keep saying this.

**Craig Loewen:** You can use either or, right? And even --

**Adam Stacoviak:** Some would say neither... Only the one. Only the one, sorry.

**Craig Loewen:** \[36:12\] And some people prefer GUI... Like, their editor, they run it fully in Linux. They run a Linux editor from WSL, and other -- I'm a VS Code fan, and I love Vim, so I have Vim bindings in VS Code, and I run everything that connects to WSL. So it's the Windows UI, with Linux backend in VS Code. That's how I set it up, which is pretty awesome.

**Adam Stacoviak:** That's so cool. I mean, it really is cool.

**Jerod Santo:** And you can run the same thing inside of Linux. Like VS Code on Linux, right?

**Craig Loewen:** Yes. Yes.

**Jerod Santo:** But it's just more native, I guess, with Windows.

**Craig Loewen:** Totally. And even if I'm -- because I'm pulling up stuff on Windows projects as well, all my extensions are saved, all my settings are saved across it... So it's --

**Jerod Santo:** Now, why not just rock Vim directly?

**Craig Loewen:** You know, I like VS Code. \[laughter\]

**Jerod Santo:** Fair.

**Craig Loewen:** I like the Shift-Control key command palette...

**Jerod Santo:** Sure. You've gotta have your Copilot up in there...

**Craig Loewen:** Yeah.

**Adam Stacoviak:** That's right.

**Jerod Santo:** Alright. Very cool.

**Adam Stacoviak:** It's dope, man. I love it. Okay, so if someone's out there, listening, like "You know what? I'm a Mac user. This stuff sounds kind of cool." What's a good path to -- obviously, go buy a machine you can run Windows on, but let's assume they have a machine, they can run Windows... They have to get the thing. Let's assume they could do all that bootable stuff. They've installed Windows for the first time, it's booted up, they've logged in... Take us from there. What do you do?

**Craig Loewen:** So what you need to do is go open up Command Prompt, or PowerShell, just type in wsl --install. It'll start installing everything, you hit Yes to elevate... You're probably going to have to restart, and then you will get full access to Ubuntu. And we actually pop up an out of box experience, or an OOBI, if you will, which gives an overview of all the different features that we have in WSL. So a lot of the things I talked about today, like GUI apps, ability to access files... We explain "Hey, this is how that all works." You'll get that, and that has links to our documentation. So it all has like a Learn More link. And if you want to get playing around with it, you can go to the terminal and just use it as you want. If you want to learn more, you can go right to the doc straight from there. So that's what I'd recommend.

**Adam Stacoviak:** Okay. I missed that beautiful boot thing, whatever you're talking about there. I missed that --

**Jerod Santo:** You didn't get the OOBI?

**Adam Stacoviak:** I don't think so.

**Craig Loewen:** Okay, let me know. File a bug. github.com/microsoft --

**Adam Stacoviak:** Let's assume I did and I canceled it, because I was too excited just to play with the toy... I don't like the bother me before I go play thing, so I don't know if it's a bother me before I go play thing...

**Jerod Santo:** You want a wizard, though.

**Adam Stacoviak:** Yeah, I do want a wizard, but I want to I want to -- I want to get started, but I want to be able to recall it. So maybe make it more easily be easily recalled.

**Jerod Santo:** It's in the Help menu.

**Adam Stacoviak:** Yeah. Like, remind me later, "Hey, there's still this cool walkthrough."

**Craig Loewen:** Okay. I'll be the physical reminder for it. If you go to Start and then type in "WSL Settings", there's a settings UI on how to control everything in WSL. There's that welcome to WSL bottom left, and you can click it and check it out again.

**Jerod Santo:** Bam. Craig is our own personal OOBI.

**Craig Loewen:** Yeah. OOBI, LLM \[unintelligible 00:39:10.10\]

**Jerod Santo:** \[laughs\] You're all things to all of us.

**Adam Stacoviak:** Very cool, Craig. Thank you so much for explaining it to us, man. I think it's so cool. I bet I'm a fan.

**Craig Loewen:** Awesome.

**Adam Stacoviak:** I'm a fan.

**Craig Loewen:** Thank you for having me. It was awesome.

**Break**: \[39:23\]

**Jerod Santo:** Mads, how is your last name pronounced?

**Mads Torgersen:** Torgersen.

**Jerod Santo:** Torgersen.

**Mads Torgersen:** The most American way you can imagine. That's how I do it in America.

**Jerod Santo:** How would you do it not in America?

**Mads Torgersen:** In Denmark, I'm Mads Torgersen.

**Jerod Santo:** They just ignore the D altogether.

**Mads Torgersen:** They ignore the D, and many other sounds.

**Adam Stacoviak:** How do they say your first name?

**Mads Torgersen:** Mads.

**Adam Stacoviak:** Mads?

**Mads Torgersen:** Yeah.

**Adam Stacoviak:** Like you made a mess?

**Mads Torgersen:** Almost. It's a little more of an a sound to it, but...

**Adam Stacoviak:** Mads. Mads. So no D sound.

**Mads Torgersen:** No D sound.

**Jerod Santo:** And then the last name was what?

**Mads Torgersen:** Torgersen.

**Jerod Santo:** No G's.

**Mads Torgersen:** The G's in there, but it's very faint. It's like a little W sound.

**Jerod Santo:** Torgersen... Torgersen...

**Adam Stacoviak:** You must be upset then.

**Jerod Santo:** How long have you been --

**Adam Stacoviak:** Everybody's calling you mad.

**Jerod Santo:** ...hearing people say it wrong?

**Mads Torgersen:** 20 years.

**Adam Stacoviak:** Everybody's calling you mad.

**Mads Torgersen:** You know, I'll take it.

**Adam Stacoviak:** Yeah? Are you upset right now?

**Mads Torgersen:** No.

**Adam Stacoviak:** Okay, good.

**Jerod Santo:** I think Mads is one of the coolest names out there.

**Mads Torgersen:** You know, just roll with it. It actually gives you extra leeway in life.

**Adam Stacoviak:** I don't know what you do here, but I love your name. I'm just kidding, I know what you do here. \[laughter\]

**Mads Torgersen:** It works.

**Jerod Santo:** And is your title Principal Architect? Is that your title?

**Mads Torgersen:** Yeah.

**Jerod Santo:** And you lead the C\# language? Is that --

**Mads Torgersen:** Yeah, I lead the language design. I'm the lead designer of C\#.

**Jerod Santo:** Lead designer. I just want to get it right, that's all.

**Mads Torgersen:** Yeah.

**Jerod Santo:** Cool.

**Adam Stacoviak:** That's a money title right there.

**Mads Torgersen:** Yeah, it's a good job. It's kind of nice.

**Adam Stacoviak:** What's it like being in your shoes?

**Mads Torgersen:** A little tight, honestly, after three days on the conference floor...

**Adam Stacoviak:** Yeah? Size eleven, size twelve?

**Jerod Santo:** \[unintelligible 00:43:11.13\] Mr. Literal.

**Mads Torgersen:** Yeah. \[laughs\]

**Jerod Santo:** Love it. Love it. Alright. Well, we're here with Mads Torgersen, the lead designer of C\#. Anders Hejlsberg started it, right?

**Mads Torgersen:** He did.

**Jerod Santo:** And then he handed it off to you.

**Mads Torgersen:** He handed it off to me.

**Jerod Santo:** How long ago was that?

**Mads Torgersen:** About a decade, I want to say.

**Jerod Santo:** Okay.

**Mads Torgersen:** I think TypeScript just had its 10-year anniversary.

**Jerod Santo:** Yes.

**Mads Torgersen:** That was when. \[laughter\]

**Jerod Santo:** So TypeScript became his new thing, and C\# became your new thing.

**Mads Torgersen:** Yeah. You know, we did C\# -- it was already my thing, to a degree. I worked with Anders for my first 10 years or so here... Then we were totally rebuilding the C\# compiler as an open source in C\# implementation, self-hosted... So we were kind of asked to not do too much language design, because people were busy re-implementing all the features we already had, and Anders and I went and did TypeScript with the JavaScript team. And then someone had to go back, and that was me. \[laughter\] So I came back to C\#, and Anders was gone, and I was in charge.

**Adam Stacoviak:** How did you feel about that comeback moment?

**Mads Torgersen:** \[44:21\] Daunting was the main emotion. I was like "Whoa..." Talking about what does it feel to be in my shoes... Anders left some pretty big ones.

**Jerod Santo:** Right?

**Mads Torgersen:** So it was fairly daunting to kind of take the helm there. But I had a lot of early guidance also from Anders. He was still around, so kind of grew with it, little by little.

**Adam Stacoviak:** What are some of the things you've found challenging and delightful early on? Like, the initial hurdles you had to get over, then some of the ones were just like "You know what? This is really awesome, to be in this position."

**Mads Torgersen:** Yeah... I mean, delightful is certainly, like, the collaboration when it works. We have a design team; it's a \[unintelligible 00:45:02.06\] It's people from all over; mostly the developer division, but even outside of that, and even currently we have someone who's not even at Microsoft. We have a \[unintelligible 00:45:12.02\] that designs C\#, and when that collaboration really rolls, that creativity there, and when you just get something right because everyone pitches in, and you get that synergy effect - that is just awesome. And the people working on it are great.

I think the main challenge for me originally was actually not so much technical, but more about when consensus wasn't there, about kind of having to be the leader, stepping up and saying "Okay, guys, we're doing this." Making progress when people disagree, handling those kinds of situations. As someone who's a little bit of a people pleaser like me, learning to kind of own the authority of being the lead designer... That took me some years. That was a struggle for me.

**Jerod Santo:** And when you do that, you end up owning the successes, but also the failures, right?

**Mads Torgersen:** True. Yeah.

**Jerod Santo:** How do you make those calls? How do you make a design decision, whether large or small? Like, "Now we're going to go this way." How do you ultimately make that call?

**Mads Torgersen:** Well, I will do almost anything to avoid making a dictatorial call. It is technically in my power to do so, but I find that decisions that have a lot of consensus, a lot of buy-in, where people might -- they might disagree with the outcome, but they agree with the process that led to it... Things were weighed, their points were adequately heard, that kind of thing - those decisions tend to end up usually being really good, and to stick. You don't then get to like the end of the production, shipping like a month from now, and then you realize "Oh, this was a crap decision", or something like that.

So taking the effort up front to have that, maybe a little more laborious process of getting everyone bought in, and thinking through all the options... That does tend to lead to good decisions. So that's what I try to do. But sometimes, you know, there is time pressure, you've got to make a call... And I will do it, but I'm uncomfortable with it, to be honest. \[laughter\] Because it's sort of like "What if I'm wrong?", you know?

**Jerod Santo:** Oh, sure. All those kind of doubts. So to give you my experience with C\#, it's probably 100 lines of code. I think I had a FinTech customer that needed -- I needed to extend an endpoint on our server-side thing in order to build a frontend thing, and I went into there, and I VS Code -- not VS Code. Visual Studio. And I took an existing endpoint, and I said "It's kind of like this, but different." I took that over there, and I compiled it around, and everything was great. That's my experience. You probably have less than that.

**Adam Stacoviak:** Zero lines of code.

**Jerod Santo:** Zero. So take us to C\# Landia, you know, as visitors here... And maybe characterize the language, and we'll talk about kind of where it's been, where it's going.

**Mads Torgersen:** \[47:58\] Yeah. I mean, C\# has been on quite the journey in terms of where we see ourselves in the world. It started out as a Windows-only closed source, mainly for apps and a little bit of server stuff back when that was - you know, how you said that. And now it's open source, cross-platform, and general purpose, used for vast numbers of things, not all of which Microsoft has a hand in, like gaming, for instance, with Unity and other platforms. It started out being, some would say suspiciously similar to Java, in some ways. It was sort of part of that same wave of object-oriented programming languages finally hitting the mainstream. It was always more -- it was always a bigger language than Java. It would sort of start at the same high abstraction level, but it would reach down further. C\# would have structs, and even unsafe code from the outset, to have interop with C, and with native code, to have ways of having better performance than you would have your only choice is objects and garbage collection, like it was in Java.

So that's kind of how we started out... And in terms of the unsafe code, of course, it's still there. You can still do it. We've cleaned up our act a lot by filling out that kind of bottom abstraction layer of C\# with safer constructs, that are more -- you don't have pointer arithmetic code so much anymore.

**Jerod Santo:** Right. Less sharp edges, yeah.

**Mads Torgersen:** But we still very much -- we are very focused on performance, and being one of the most high-performance garbage-collected languages out there.

**Jerod Santo:** Gotcha.

**Mads Torgersen:** And we are focused on pretty aggressive language evolution to keep the language as modern and fresh as we can... You know, as the state of the art of programming languages moves along, both in terms of kind of syntactic lightness, and ease, and also just the things we can do with them - we do our best to be part of that. Sometimes we follow, sometimes we lead. But we try not to fall behind, even with 25 years of history, to not become like a legacy language. We want to be a really good choice for your next project, not just one that you have to use because your company is all invested.

**Jerod Santo:** Right. So how do you personally track what's going on trend-wise? Do you look at other programming languages, burgeoning ones, ones that have interesting ideas, but they're niche? Do you think about where C\# can go from that great artist steal kind of direction?

**Mads Torgersen:** There's definitely a large element of that. Yeah, we do steal a lot. We do look at other programming languages, and if they have a nifty solution to something, yeah, we will totally steal it. Sometimes -- like, we will take the time to make it a C\# feature, one that feels right for the language. We don't just say "Oh, that looks nifty", and then grab its syntax and all.

**Jerod Santo:** Sure.

**Mads Torgersen:** We tend to make it our own. You'll see a lot of features from functional programming have made it into C\#, and because they're coming into an object-oriented kind of core philosophy, they do tend to take quite a lot of transformation to retain that usefulness that they have in their original environment, but to feel natural in the context of C\#.

**Jerod Santo:** So what languages are you looking around that maybe even you get language envy, because they don't have the constraints you have with the backwards compat and the huge install base... Do you ever think like "Oh, it'd be cool if we could do that"?

**Mads Torgersen:** \[laughs\] Yeah. I mean, we look kind of all over the place, we take some of the popular languages today... Actually, all the popular languages today, most of them seem to have taken a thorough look at functional programming, even though there isn't a language you can say is a super-popular functional programming language. But there's stuff like Scala, that is somewhat popular in industry use... We all kind of look at that.

\[52:05\] Then we -- you know, newer languages that have burst onto the scene, for various reasons, like Swift, for instance, we'll definitely look at. They have really nifty things about patterns that we were inspired by. We look at something like Kotlin, that they have a good flair for handsome syntax... Sometimes we'll be inspired by that. Python is really big, especially with AI now, but also in general, in terms of data processing and so on... The lack of strong typing in Python means that you can have some really elegant syntax sometimes for working with big data, for instance.

And so we're a strongly typed language, but we still look to Python for like "What are the things that people find really convenient? And can we do a thing that doesn't sacrifice the strong typing, and the kind of reliability of working in that environment, while being as nifty?", you know. So either features directly, that we were kind of inspired by Python for, like how they do indexing, and ranges, and so on... We stole a lot of that. Also just the feel of it. It used to be that every collection type in C\# would kind of have its own syntax for how you would initialize, how you create a new one with some elements. And now we have collection expressions, which are a nice syntax, that works across all the different collections, even your own.

So we try to -- yeah, we take a lot of that inspiration, but what we choose to take and not take, as well as many of our original ideas, it really comes from the need that we find in the developer community. We do the language design in the open as well, on GitHub. We have a lot of community participation. We, of course, go to events like these... So there's many ways that we just kind of keep tabs on what are the current C\# developers struggling with, what are the new C\# developers struggling with in terms of learning and getting into the language... And that's kind of what drives -- that's where the motivation comes from, and the set of problems we want to prioritize finding a solution for. And then sometimes the solution is "Hey, let's steal it from Swift", and sometimes the solution is "Hey, let's come up with something."

**Jerod Santo:** Yeah. One thing I appreciate about Swift is its ambitious scope, even from the outset, of being like from your command line scripting program, all the way up to operating system-level things... In terms of it can do it all. And I wonder what C\#'s vision is. I mean, are people using it for scripting and stuff, or is it just not that kind of language?

**Mads Torgersen:** They are. They are. There's even a scripting dialect of C\#...

**Jerod Santo:** Okay.

**Mads Torgersen:** ...although we're trying to kind of get just a regular C\# closer to that. C\# used to be -- like, as a member of that Java \[unintelligible 00:54:52.19\] H club, it used to be fairly clunky in terms of syntax... Like, declaring a virtual method, and overriding, and all that kind of stuff would, it's a thing with a lot of keywords involved, and your program would be a main method that lives in a class... So you have five lines of code --

**Jerod Santo:** Right. A lot of ceremony...

**Mads Torgersen:** Yeah, before you're even printing Hello World. And a lot of that we've cleaned up, which makes it more scripty, in a way, in feel. We took away a lot of ceremony over the years, made cleaner, briefer alternatives... It's like, why do you have to have all this here? Whenever people run up against a lot of boilerplate, that's when we think "Okay, is there a way that we could just clean this up?" And that's definitely inspired by a newer wave of programming languages, and more scripting-like languages, that are just more straightforward. You just sit down and you write, you know, bright line, Hello World, and there it is. That's your program. Now you can do that in C\# as well.

**Jerod Santo:** Very cool. What's some of the functional stuff that you brought in over the years?

**Mads Torgersen:** \[56:01\] So much... I want to say the first thing was generics, really. Like, parametric polymorphism came in from functional languages to Java and C\# and other programming languages around the early 2000s, I guess. Lambda expressions... We had a whole round of stealing. In C\# 3, when I first joined C\# almost 20 years ago, we had a very functionally-inspired push for like embracing querying as part of the programming language. We had a SQL-like syntax in C\#, that boils down to using lambda expressions, and code quoting, and all kinds of things that come from that.

**Jerod Santo:** Yeah. I've seen some of that and it's really cool.

**Mads Torgersen:** It is very cool. Yeah. Since then, I think some of the very impactful stuff we've adopted is pattern matching.

**Jerod Santo:** Nice.

**Mads Torgersen:** So C\# now has a very expressive pattern language/set of patterns for pattern matching. And it's very well integrated into what was already in the language. So that gives a whole new -- essentially, it gives you a toolbox to rival classic optic-oriented style, of lots of virtual methods... When you're kind of coding from the outside, you have -- maybe you still have a type hierarchy, a bunch of different types, but your pattern matching is just... It gets very clunky if you don't have something like that, and you want to have control structure that you can actually maintain, and read, and so on.

**Jerod Santo:** Right. What level does the pattern-matching come in? Like, at the function declaration level? Can you pattern-match parameters and have multiple functions that fire off depending on what's coming in?

**Mads Torgersen:** No. We don't have pattern-matching at the -- we already have function overloading, which many functional languages don't... And for better or worse, overloading is in the language. And so they will probably be too -- I don't know, never say never, but it might be too difficult to kind of also have a pattern-matching approach to those overloads on top. But we do -- at the statement and expression level, essentially, we have match statements, which are just old switch expressions dressed up, and switch statements dressed up... And we also have switch expressions, which are the more functional, expression-based way of doing it.

**Jerod Santo:** Gotcha. Cool. And what about pipelining? Is that a thing that is in C\#?

**Mads Torgersen:** Not in the classic sense, but we were -- back then when we did the whole querying thing, we were very inspired by pipelining in functional programming languages. What we did instead is extension methods, which many other languages have picked up since then, where you -- it's an example of kind of adapting something to a more object-oriented style. Essentially, you put a method on an existing type from the outside. And the nice thing with that from an object-oriented point of view is you walk up to a value of that type, you press a dot, and these extra methods show up. So you have the discoverability of like "What can I do now?" come not just from the members declared on the thing, but also that other people whose stuff you're importing put on there. So that's really good. That's a really good architectural pattern, it turns out... And at the same time, you get that flow. You start with the value, and you're piping it through various, maybe query methods, for instance.

**Jerod Santo:** Sure.

**Mads Torgersen:** You \[unintelligible 00:59:31.19\] you select, you do all those things...

**Jerod Santo:** Right. Building \[unintelligible 00:59:34.18\]

**Mads Torgersen:** \[59:38\] ...in a fluent style, just like you would do with pipelining in a functional language. And now, almost two decades later, the next version of C\# will have not just extension methods, we will start adding extension properties, and other kinds of \[unintelligible 00:59:50.25\] to kind of capitalize more on that composability that extension methods give.

**Jerod Santo:** Gotcha. How do you add all this stuff and then maintain backwards compatibility and performance?

**Mads Torgersen:** Sometimes it feels like backwards compatibility is -- like, we spent half the time on that. How do you come up with a really good syntax? It doesn't already mean something --

**Jerod Santo:** It doesn't break something.

**Mads Torgersen:** Yeah, it breaks something. We're fairly careful about breaking changes. We're probably getting a little more courageous as the years go by, but by and large, we don't obsolete things, and we don't break things. That's sort of like a core principle. Because you know, there's code that people are building, and have been building for decades, and if all of a sudden we start breaking all of that... Not so good.

So it is hard, and I honestly would have thought we would run out of like just design space long ago, but somehow we keep being able to get creative. Sometimes there's a little bit of compiler trickery involved to kind of make sure things can coexist... And we are -- essentially, we'd rather wait for the right thing than put something in that either breaks too much, or doesn't have an optimal syntax. If you're like "We could have this beautiful syntax, but we can't, because breaking changes", then we'd rather wait than put something inferior in. So we do try to keep - I think successfully - the quality bar really high for new features, how they feel, how they look, and how intuitive they are... And somehow, we're still able to do it. But it's honestly a bit of a mystery to me.

**Jerod Santo:** Fair.

**Adam Stacoviak:** How big is the team?

**Mads Torgersen:** It's very hard to count. Like, I am the C\# language design team in terms of like full-time work... There's a C\# language design \[unintelligible 01:01:47.02\] that is about 10, 11 people, that meet every week, and where all the decisions are made. There's a compiler team of a little over a handful of people that built the understanding of the language. There are people on the -- there's a tooling team that built things for VS, and VS Code, and have suggestions, and refactorings, and all of those things on top as well. They're the people who are like "Oh, there are these new features. Would you like me to turn your code into those?" Then there's the people building the .NET runtime that it all runs on, and the libraries... So when you start adding it up, I'm sure we'll get closer to a hundred, depending on how you count.

**Jerod Santo:** Yeah. So the keynote on Monday... Agentic was the word of the day.

**Mads Torgersen:** Mm-hm.

**Jerod Santo:** And I wonder sometimes how far into an ecosystem that kind of a trend permeates. And I imagine as it goes down, it eventually reaches languages... And I wonder -- I mean, I don't know if that's true or not... Kind of teeing that up as like, are new C\# language features considering some sort of tooling, or AI-related things? Is that reaching itself in the language design, or is that just like "Well, we can just ignore that stuff", and they do it at a higher level?

**Mads Torgersen:** We certainly can't ignore it. That would be at our peril, right? So far, I think there's a little bit of a -- I mean, certainly our tooling is just completely infused with AI already. You work with C\# in Visual Studio, Visual Studio Code, Copilot is all over the place, and being very helpful, more and more so. That's a really rapid development. So certainly there, of course.

**Jerod Santo:** Sure.

**Mads Torgersen:** \[01:03:45.01\] Then there's sort of a couple of other questions we have to take into account for the language design itself. One is I think a little bit of a red herring, but it came up sort of in the beginning of LLMs bursting on the broad market is like "Should languages be designed for AIs to be able to better train, or better predict, or something like that?" Is there something about programming languages that make them harder or easier for AIs to work with? That I think is largely -- I think we're already kind of past that. I think that's just as the models get bigger, they can figure it out. The models can work in whichever programming language you throw at them. The main thing they rely on is there being vast codebases out there to learn from.

**Jerod Santo:** Examples and documentation, right?

**Mads Torgersen:** Yeah. So they're fine. But people did -- a year ago at Build, that's the kind of question people would ask a lot. Nowadays I think there's a little bit -- you mentioned agentic; as you build architectures where agents talk to each other, maybe you do that programmatically, you put agents together and so on... And there's an interesting question about how do you do thinking of it as a form of distributed programming? What are good architectures for that and how do they influence the language? One thing that's come up is that C\# doesn't have any notion of union types in it... And those are actually kind of helpful for some of those architectures. Also, sometimes for AIs to be like "I know it's either this or that." With union types it's either an int or a string. That kind of thing. C\# doesn't really have a way to express that intent at the language level.

**Jerod Santo:** Gotcha.

**Mads Torgersen:** It doesn't really matter what it is, but if we had, then I think that would both help at the sort of architectural level, and also that intent is evident not just to other programmers, but also to AI reading and helping you maintain the code. So there's a little bit there, with an expressiveness that we are now kind of... We're at the drawing board, figuring out "Okay--" And honestly, we've been thinking about union types for a while; haven't really had the killer scenarios to say "Okay, we should go this way on them." There's this big design space... And I think this is the one that is kind of driving us to be like "Okay, we should have union types in C\#, and we should get them in."

**Jerod Santo:** Interesting.

**Mads Torgersen:** Yeah. \[unintelligible 01:06:09.10\]

**Jerod Santo:** There you go. Yeah, that's interesting. It's like, you have all these potential users and use cases, and you're weighing those against all the hurdles and the potential drawbacks of a feature... And it's like you're just adding a new set of potential users. It's like, "Well, we have our human users and they've been asking for, but it hasn't necessarily percolated up as being so important that we have to build it..." And then we have these AI tools, these agents will be coding with it... And is this because they tend to use union types in other languages a lot, or...?

**Mads Torgersen:** Yeah, sometimes you see that. For instance -- and it's not just programming languages. If you look at something like -- just look at JSON. So much data is in JSON. And if you look at JSON schema - well, you can express a union type. And so since it's a big data exchange format, being able to express that union type in the languages that consume it means you can have a more faithful mapping from the JSON to whatever's the native representation of it in the language. That's true even without AI being involved, but when AI is also involved. And then there's that extra bit of "Can we express that intent faithfully when it's present in the data?"

**Jerod Santo:** Yeah.

**Mads Torgersen:** Yeah, it's a thing that I think will be a good fit in C\#, but it's definitely -- it's both getting its priority boosted by the AI scenarios, and that also gives us another set of concrete scenarios to help drive the design. You don't want to design a language feature in a vacuum. You want to have people ready to use it, so that you can use their designs to make the right decisions.

**Jerod Santo:** \[01:07:57.01\] Interesting. This may bring us back to last year's conversation about the thing that you said people were probably talking about last year... One thing that we're seeing and other people are seeing is in the world of -- I guess it's sort of in the vibe coding world, and beyond... Imagine vibe coding a few years from now, not right now. The tools that people are using are making a lot of the choices for them. And we're seeing where software services now are actually being skyrocketed in their usage, not because a human decided to use them, but because a vibe code tool decided to use them. You know, insert your tool here. And so software as a service providers are starting to think like "Maybe we're actually optimizing for the wrong audience, because it's a lot easier to convince one of these things, and then it's going to use us a thousand times", especially as we get more and more distanced from the code itself. Right now we have to look at all the output, but you assume that maybe at a certain point we look less and less and less, and I don't care what services it's using. Maybe I don't care what programming language it's using underneath the hood either. And so I wonder if there's a world wherein the AI agents are actually making programming language choice, just like a project manager might say "Well, we're going to use C\# for this." Have you considered anything like that? I don't know if that necessarily drives design, but it's just an interesting phenomenon that might happen.

**Mads Torgersen:** It is interesting. You make a really good point, that there's sort of a -- it's almost like search engine optimization.

**Jerod Santo:** It is, yeah. You want to try to look sexy to -- you want to kind of just poke up above the rest, so that all the AIs will pick you... And it's a huge multiplier if you can get them to do that.

**Jerod Santo:** Exactly.

**Mads Torgersen:** So you're sort of competing for their attention, if you will. That's a really interesting situation. I think -- yeah, from a design point of view, I think that it's probably more of a how much code is already there situation in that language, rather than... Like, it will start out by "What do people use when they do this?" That's because ultimately the models we have now are informed by what people have done...

**Jerod Santo:** Right.

**Mads Torgersen:** ...but as there's more and more code that's actually vibe coded, there'll be these self-sustaining, self-reinforcing loops maybe, where --

**Jerod Santo:** Yeah, it might start to eat its own tail. And that's been one of the concerns with generative AI in general, is the more that it generates, the more that you're now consuming your own generated content. Just like the movie Multiplicity; he got dumber and dumber and dumber every time he multiplied himself.

**Mads Torgersen:** Right. Yeah, there's definitely a risk there. And when you think about the role programming languages play there, they're sort of like "AI is non-deterministic", right? Programming is where determinism comes in again. This is true, and many people say that instead of asking AI to solve your problem, ask it to write a program to solve your problem, because then that program is deterministic, and it has predictable behavior, so --

**Jerod Santo:** It gets the math right each time.

**Mads Torgersen:** Yeah. So really, programming languages to some degree are the other side of the coin.

**Jerod Santo:** That's true.

**Mads Torgersen:** They're the face of that other side of the coin, if you will. They're the face of programming, the deterministic factor. And I think a lot of how software is going to develop is in how the interaction works between the LLM. What's the division of labor? How dynamic can that be, and how good can we get at using the right thing for the right job? Like, okay, now I need an AI because I need that kind of open world thinking; I need to understand and get a grip on something that is big, or nebulous, or whatever... AI for that. Now I need something that runs a million times a day, and that is trusted, and serviceable, and so on.

**Jerod Santo:** That's a program.

**Mads Torgersen:** \[01:12:02.22\] That's a program.

**Jerod Santo:** Right.

**Mads Torgersen:** But the AI might've helped write the program, and the program might've helped inform the AIs... So that interaction is really sort of like a very interesting field to watch, those couple years into the future, as you said.

**Jerod Santo:** Yes. And where those seams are, specifically.

**Mads Torgersen:** Yeah. I think that's going to evolve a ton over the next couple of years.

**Jerod Santo:** So as a programming language designer, maybe you're thinking "Well, how can I be the best tool to do the programmatic side of this LLM interaction?", maybe. Well, maybe not. I mean, you've got a huge programming language already...

**Mads Torgersen:** I honestly think -- I think we have a fine tool for that. Like, at the language level --

**Jerod Santo:** You can do all the things.

**Mads Torgersen:** ...we're good. Yeah. I mean, an interesting thing... Some people say like "Eventually, the AIs will just -- they won't even produce high-level programs. They will just generate machine code", because why not let them do all the stops. But I think the -- I actually think the high-level programming languages are super-useful for the AIs to do the right thing... Because there's so much intent expressed in a high-level programming language. The kind of expressiveness I think really helps drive -- like, it helps the AI kind of discern what's going on.

So I think high-level programming languages are here to stay, and they're kind of -- the interaction between natural language and high-level programming languages I think is very... I believe it really helps AIs train well, get good at stuff. That's my belief.

**Jerod Santo:** Do you think there's a higher level, that isn't quite plain prose or English or whatever your language is, but it's higher than your current highest-level languages, where it's almost like pseudocode with slightly more formalized, that would be like a new language perhaps, or a layer on top of C\#, or I don't know what it is? ...that's like actually "This is optimal. This is the balance between what the machine needs and what the human actually wants to write." Or do we just go straight to English and just let them figure it out?

**Mads Torgersen:** Well, the thing about programming languages right now is that -- I mean, they're deterministic and English is not. They have clear semantics, and English does not. That doesn't mean that they're as high-level as they can be. Certainly, a lot of the evolution of C\# over these past 20 years has been about having a more declarative and less imperative way to express things. You express what you want, rather than how to do it. And by no means do I think that evolution has stopped. We'll keep finding better ways to say less, and get the right thing, while still deterministic. So in that sense, yes. And I think that will be actually fine with the AIs. They'll be like "Awesome, they just told me what they're trying to achieve. I don't have to look at their for loop. I get what they're trying to do, because they're telling me directly. I don't have to infer it." I don't have to say "Is it this, or is it that?" So expression of intent - the more code kind of captures that, the better a bridge it is.. The better it is for both humans and AIs.

**Jerod Santo:** Right. So imagine something like that coming out of Microsoft. Would that be like a skunkworks project that some engineer just does on their own, and then pitches it to somebody? Or would that be like a thing where - I don't know who your boss is, Mads, but your boss comes in and says... Or somebody comes to Anders and like "Hey Anders, we want this new language." How would that even come out of Microsoft?

**Mads Torgersen:** \[01:15:44.20\] You know, we had never expected C\# to last this long and still be rocking. It's still so in its prime. It's still growing, and still... So if you'd asked me a few years after I joined, I would say "Yeah, maybe if we're lucky, C\# has a decade of like cool growth, and then it's like a legacy language." So I think it's not so much that another language will come in that's inherently higher level, I think it is that the languages will continue the race that we were already in before AI became a factor to raise the level of abstraction, push it upwards; become more powerful and expressive. Maybe AIs can help us do that, but I think -- I believe it's more likely to happen as an incremental process with the existing languages than it is for some language to burst on the scene that is like "Oh, it's so high level!" The AIs are going to love it, even though there's no code yet for them to train on. People are going to love it, even though they have all this install base of stuff... That just seems unlikely to me, but never say never... But it's much more likely that it comes from like organic growth, and just incremental improvement, and raising the level of abstraction.

**Jerod Santo:** Yeah. I would tend to agree. I think that that's perhaps -- I don't know if it's a shame, but it seems that it's probably harder than ever to start a programming language.

**Mads Torgersen:** I think so.

**Jerod Santo:** For that reason.

**Mads Torgersen:** Yeah.

**Jerod Santo:** And interesting ideas come a lot from a fresh start, because you have to have a new viewpoint perhaps, or a new set of primitives, or a new mission. Like "I'm going to start with this in mind, and start with just blank slate, versus being like "Yeah, but we have hundreds of thousands of people using it this way." And if that language can't get a foothold, then how does it even influence languages like C\# to be like "Oh, let's think about this differently."

**Mads Torgersen:** Yeah. If you look at the top 10 programming languages by usage, or whichever ranking system you want to look at, you look at the last 10 years versus the previous 10 years, versus the previous 10 years before that, the churn in the top 10 becomes less and less. So there's already been these effects in place where just because there's so much software...

**Jerod Santo:** Network effects.

**Mads Torgersen:** ...network effects. So something like that, it's harder and harder to break into the programming language market. You need to be connected to some new value prop, as you said. You look at a language like Go, it had its connection to Kubernetes and that whole world of containers...

**Jerod Santo:** Right.

**Mads Torgersen:** That really was the scenario, a new novel scenario that it could piggyback onto the stage with. That's kind of how you can break in. It's not on its own qualities, though they are probably involved in why it was used for those things...

**Jerod Santo:** Sure.

**Mads Torgersen:** ...it's really that you managed to piggyback something. We talked about Swift before... It was Apple's anointed replacement of Objective-C.

**Jerod Santo:** Right. That helps.

**Mads Torgersen:** And so they have a whole ecosystem just waiting for them. They just need to make sure that they can transition them with the carrot and the stick, until they got them. That seems to be the only way things are really making it in nowadays in terms of programming languages. And it's probably just getting worse and worse. Just because the -- it's now no longer just the installed base, it's also what the AI's trained on.

**Jerod Santo:** Yeah, exactly.

**Mads Torgersen:** So, yeah, it's really -- it's a shame, in a way... I love new programming languages and new programming ideas...

**Jerod Santo:** Yes.

**Mads Torgersen:** ...but I am not a super-optimistic about having like revolutions in that space, to be honest.

**Jerod Santo:** Yeah. Well, what are you optimistic about?

**Mads Torgersen:** What am I optimistic about? \[laughter\] Nice transition.

**Jerod Santo:** Thank you.

**Mads Torgersen:** Nice transition. You know, I am optimistic about many things in my life... If we want to keep it programming language-oriented...

**Jerod Santo:** Take it wherever you want.

**Mads Torgersen:** There is a lot of innovation in the space... It's just that it's going into niches or existing programming languages, rather than new languages all the time.

**Jerod Santo:** Sure.

**Mads Torgersen:** \[01:20:09.22\] That innovation keeps exciting me, and I think it keeps solving new problems. Obviously, for all the worry that people have about AI, I think it's going to -- I'm sure there are going to be problems we haven't even thought of yet, that we're going to have to deal with as it makes more and more of an impact on how software is built. There'll be headlines that are "AI did this" or "AI did that", and... Bad things happen.

**Jerod Santo:** Sure.

**Mads Torgersen:** But by and large, when we find that balance we talked about before, or as we get to it and maintain it through all the twists and turns that we'll have, I think the world is going to have really, really good software. That's my -- I'm optimistic about that.

**Jerod Santo:** Take us outside the world of programming. What else are you optimistic about? What else are you into? What interests you?

**Mads Torgersen:** Well, as a person...?

**Jerod Santo:** Yeah, sure.

**Mads Torgersen:** I have four kids.

**Jerod Santo:** Okay.

**Mads Torgersen:** They're all in their 20s now.

**Jerod Santo:** Nice.

**Mads Torgersen:** So my life, the last nearly 30 years outside of work has been a lot about having a family, doing things, traveling...

**Jerod Santo:** We're both in the trenches currently. We don't have any kids in their 20s, but we both have kids in their --

**Adam Stacoviak:** Speak for yourself.

**Jerod Santo:** Well, that's true...

**Mads Torgersen:** So I'm fairly new as an empty nester with my wife.

**Jerod Santo:** Looking forward to grandkids?

**Mads Torgersen:** Looking forward, definitely.

**Jerod Santo:** Yeah.

**Mads Torgersen:** I love the idea of being a granddad. I'm also very supportive of my kids taking their time. Those are big decisions. I know we rushed into them a little when we were young...

**Jerod Santo:** Sure.

**Mads Torgersen:** But obviously, that'll be great. Four kids is not one too many. I've loved being a parent for all this time. But it is kind of an interesting turning point in my life and in our life to be like "Okay, what's the day-to-day? What can we now do?"

**Jerod Santo:** Right. The empty nest.

**Mads Torgersen:** The empty nest.

**Jerod Santo:** What are you finding?

**Mads Torgersen:** Well, for starters, we are going to travel a lot. We both have the opportunity to take some extra time off in the fall, and we're going to spend a couple of months in Europe... We're both from Europe originally, don't get to go there a lot, and it's rushed when we do... Just go spend a bunch of time. I think travel is going to be fairly big.

**Jerod Santo:** Yeah. That sounds amazing. We still have -- our youngest is seven. Oldest is 17. So we're in the range where we're starting to get some freedoms back. No diapers, no naps... It's easier to go places as a family.

**Mads Torgersen:** One can babysit the other, that kind of thing.

**Jerod Santo:** That's huge, actually. Being able to go out on a date without having to arrange a babysitter was like a threshold moment for us.

**Mads Torgersen:** \[01:23:01.13\] Ah, getting dates back. I remember that as like a revelation.

**Jerod Santo:** \[laughs\] You forget what you've missed...

**Mads Torgersen:** Oh, my God. It's such a guilty pleasure how much you're like "Wow... Should we, like -- should we actually just go shopping on our date, just because we can do it without the kids?"

**Jerod Santo:** Right? Yeah, that was a big moment for us. But still traveling with the family...

**Mads Torgersen:** Yes.

**Jerod Santo:** Harder to travel just us two.

**Mads Torgersen:** Yeah. We still travel a lot with the family.

**Adam Stacoviak:** It's hard with both.

**Mads Torgersen:** Yeah.

**Adam Stacoviak:** Hard to travel with and hard to travel with not.

**Jerod Santo:** Without. Yeah, exactly.

**Mads Torgersen:** Yeah, both are challenges at that age.

**Adam Stacoviak:** Yeah. They're uniquely challenging. Like, one you miss them, and then when you're like "I want to miss you..." \[laughter\]

**Jerod Santo:** You've got to get away with --

**Mads Torgersen:** No comment. No comment.

**Adam Stacoviak:** I love my children so much, but sometimes you're like --

**Jerod Santo:** Sometimes you have to get away to miss them.

**Mads Torgersen:** It's just hard to keep in mind that you are a full person when you're in the middle of it.

**Jerod Santo:** Because you're so focused on it.

**Adam Stacoviak:** I'm learning to be a patient dad, too. So this is also a learning moment for me, to be more patient.

**Jerod Santo:** Oh, sure.

**Mads Torgersen:** Yeah.

**Adam Stacoviak:** It's so hard...

**Mads Torgersen:** It is really hard. It's just emotionally straining.

**Adam Stacoviak:** I always tell my oldest, "Being a daddy is hard." That's my phrase to him. Anytime I mess up, or like... I've got to go back and say "You know what? That wasn't too good there." Because you've got to show kids that you're sorry in those moments, too.

**Jerod Santo:** Yeah. For sure. And you can mess up.

**Adam Stacoviak:** I was like "Being a dad is hard, buddy."

**Mads Torgersen:** It is.

**Adam Stacoviak:** It's so complex and so nuanced that you just can't share what you've got to do as a dad to your son who's nine... But he can get some of it, you know?

**Mads Torgersen:** Yeah. And of course, you don't want to make it their problem.

**Adam Stacoviak:** Yes.

**Mads Torgersen:** But I think being put in those situations, it's stressful in the moment --

**Adam Stacoviak:** Well, if not, he judges you. He would judge you.

**Mads Torgersen:** Absolutely, yeah.

**Adam Stacoviak:** He'll make his own judgments. If you don't share that moment with him, and share their perspectives, and why things are the way they are, how they worked out the way they worked out... Whatever the scenario might be.

**Mads Torgersen:** It's important to be --

**Adam Stacoviak:** Yeah. If you have that grounding in a relationship, I feel like that's better than assuming. Like, "You figure it out on your own, kid, what happened there."

**Mads Torgersen:** You have to find a way to be vulnerable and sharing and being a person. Otherwise, you kind of --

**Adam Stacoviak:** You shape them.

**Mads Torgersen:** Yeah, you do. But somehow I find coming out on the other side after 28 years of having kids at home, I've learned so much.

**Jerod Santo:** Oh, yeah.

**Mads Torgersen:** I feel like I understand so many things so much better, and I have so many interpersonal skills, and so much more empathy... And that empathy I can attribute to learning -- all those hard moments and tough situations kind of accumulate.

**Jerod Santo:** It'll probably make you a better design lead of a language, even.

**Mads Torgersen:** It's quite possible. I'll let others weigh in on that. I'm probably not the best to say.

**Jerod Santo:** \[laughs\]

**Mads Torgersen:** Personally, I think I'm awesome, but you know...

**Adam Stacoviak:** Somebody else maybe not so much.

**Jerod Santo:** We'll ask around.

**Mads Torgersen:** Well, I thought that when I was young as well. I just wasn't right about it. \[laughter\]

**Adam Stacoviak:** Well, as part of this interview, we have to have three references...

**Jerod Santo:** That's right.

**Adam Stacoviak:** So we can go and talk to them afterwards.

**Jerod Santo:** "How awesome is he?"

**Adam Stacoviak:** That's right.

**Mads Torgersen:** Three references... Other people?

**Jerod Santo:** He's just messing around with you.

**Mads Torgersen:** Is he? Okay.

**Jerod Santo:** \[laughs\]

**Mads Torgersen:** I was totally ready...

**Jerod Santo:** "Other people?" He's like "Okay, here's my list."

**Mads Torgersen:** Yeah, yeah. Totally. I'll give you names as long as you leave me alone.

**Jerod Santo:** Do you have any letters of recommendation you can provide? \[laughter\] No, this has been fun. Very interesting stuff. It was awesome talking. Thanks for sharing with us.

**Mads Torgersen:** Great pleasure. I hope you keep having fun at Build.

**Adam Stacoviak:** Always. Love Build.
