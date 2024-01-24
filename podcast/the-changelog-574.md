**Jerod Santo:** Alright, we're here with Allan Jude, we're here to talk about BSD, specifically FreeBSD. Allan, thanks so much for coming on the show.

**Allan Jude:** No problem. Thanks for having me.

**Jerod Santo:** We're happy to have you here, we're happy to fulfill a listener request. Shout-out to Vladimir, who writes "I enjoy listening for discussions about the state of modern Linux distros, episodes about Red Hat, Debian, Nix etc. but I don't recall any about FreeBSD. I'm sure lots of people heard high-level facts it's another Unix-or its networking stack is better than Linux, or something about ports, or macOS was based on it etc. I'd love to learn why and who the OS is for, and how it's different." So there's your task, Allan. We brought you here to tell us these things... Why and who is the OS for, and how is it different?

**Allan Jude:** Yeah, I guess to start, I'll go back into the prehistory of computers, basically...

**Adam Stacoviak:** Hah! Let's go all the way back.

**Allan Jude:** ...with the original version of Unix that came out in the '70s, and because of the consent decree, that meant that AT&T wasn't allowed to -- in order to maintain this monopoly on the phone system, wasn't allowed to compete in some other spaces, including computer software... And it had to license its patents to universities very cheaply. And so it ended up providing copies of the Unix software with the source code to a bunch of universities, so they could build on top of it and do research based on it. And that eventually led to what was called the Berkeley System Distribution, or BSD, at the University of California, Berkeley, where they've made their own version of it, and kept tweaking it and adding the things they felt were missing. And it was one of the kind of pioneers of the open source movement, although back then it was more mailing physical tapes of code back and forth between these different universities, and one person trying to compile that all together... Because there was no GitHub yet, so somebody literally had to kind of be like a copy editor and put all the different pieces contributed by different people together, and make it into something.

And that went on for a long time and worked quite well, but as time went on, AT&T decided that was worth more and more money, and the other problem was, people who had worked with this stuff decided that "Oh, we want to actually make a product out of this and sell it", or even sell support for it, and so on. And so a company called BSDI started up to sell this BSD operating system to regular people, and maybe made the trademark mistake of having the phone number 1-800-its-unix. And since AT&T owned the trademark on Unix, they were very displeased with this, and it resulted in a bunch of lawsuits about, some of that code is copyright AT&T, you can't just go selling it, and quagmired the BSD code in lawsuits for a couple of years. And about then is when Linux actually started; when Linus decided to build Linux. And there are quotes from Linus saying that "If BSD hadn't been tied up in the lawsuit at the time, I probably would have never started Linux. I would have just used BSD."

**Adam Stacoviak:** That's interesting.

**Allan Jude:** \[08:00\] But those all got settled, and it turned out there were like four files that just got rewritten, and there was never actually something that was being done wrong necessarily... But it scared people off enough and delayed the development long enough that Linux gained a lot more popularity in the meantime. But in general, then, after the last versions of that, the university was kind of done with it after dealing with the lawsuits and everything, and so they came up with the BSD license, which, compared to the GPL, is much shorter; you could fit it on a business card. The modern version has just two clauses in it: don't remove the copyright, and reproduce the copyright in the manual. Those are basically the only requirements.

The original BSD license had a couple of more, including like "You can't use the name of the university to promote your product", just because this code came from the university, and "You have to include the line that this includes code that came from the university in the manual." But of course, as you can expect with something open source, when that proliferated, and you had 200 different companies having contributed code to something, and you have to list all 200 of them in the manual for every product, it got a little out of hand. So the advertising clause got removed from the license to make life easier for everyone.

But the difference there in the license is what makes most of the difference in what BSD is and why people choose it over Linux, oftentimes... Because the license doesn't -- it's what we call a copyfree license, whereas the GPL is a copyleft license. The idea with the GPL is that it has a very strict requirement that if you make changes, you have to give those back and make those public. And if you build a product out of it, you have to provide the source code for that to any user that asks. Whereas the BSD license is copyfree. It's basically, you're free to do whatever you want with it. The only rules you have to follow is you can't claim you wrote this, when other people did. So you can't just delete the copyright statement. And you do have to acknowledge that you used other people's code in the manual, or somewhere in the code. And that's the only requirement.

So if you are a company that's building an appliance, like a washing machine, and you want to build in a network stack so that you can do a push notification to your phone to tell you when your laundry is done, instead of having to write your own, you could take this open source one and just build it in. And then at the back of the manual you just have a page of copyright notices. Whereas if it was GPL, you could probably do the same, but then anybody who asks, you have to mail them a CD with the source code for it... And if you made any changes, the license is viral, so it infects those changes, and you have to give those away freely as well. And that can cause -- maybe it's not that big of a burden, but it can cause a lot of extra headaches for compliance. Making sure that you're following that license all the time, and you don't accidentally not, can be a big impediment to companies wanting to embed or build a product based on top of code that's under a more restrictive license.

So then I guess the question was who uses FreeBSD... And that comes down to a couple of different categories. There's the people that have been using real Unix since a long time ago, or people that got started in computer science in university, at the time where every university was using BSD, and so that's just what they started with... And then there's people that were building a product and chose BSD because of some of the technical features that it had.

FreeBSD pioneered the practical implementation of containers in the year 2000, whereas we only saw containers and namespaces on Linux come much, much later. Now, it's gotten maybe a lot more built on top of it since then, but the concept came originally from BSD.

And then a lot of companies, as we talked about, can take the BSD code and build a product on top of it. And a lot of the reason why BSD continues to thrive is that those companies see the value in investing back in FreeBSD. So while the license doesn't say you have to give your code back, if there's any code that's not specific to their product, and is not their intellectual property, they have an advantage of contributing that back... So it means when they go to build the next product on a newer version of BSD, it's that much less diff that they have to try to rebase on top of.

**Jerod Santo:** \[12:15\] So I'm curious, Allan, why you use or choose BSD personally. What's your story coming into it?

**Allan Jude:** So back in the late '90s, when I was a teenager, I finally got on the internet, and I discovered IRC, and thought this was really cool. And I wanted to host an IRC server, to have my own IRC server instead of using the big popular one with all the people on it... Because that way, I could be in charge. Because I was 13. And so I asked around a little bit and learned about it, and I apparently needed this thing called a shell account, which is basically -- it was pre SSH, but you'd telnet into somebody else's server and be able to leave a process running. And it turned out a good chunk of the servers you could get a shell on back then were BSD. And so that's what I started and what I learned.

And also, especially back then in the early days of Linux, there were a lot more rootkits and vulnerabilities and problems if you were running Linux, especially when you were doing things like hosting something public, that you're encouraging people to try to connect to. And so that's where I got started with renting \[unintelligible 00:13:15.15\] I was 13, so I didn't have a credit card, so I had to go to the post office and get a money order, and mail it to some guy the next state over, to let me run something on his computer, on his T1 line - because I only had dial-up - and used that for a while. And it happened to be a FreeBSD 2.2 box. And so that was the first kind of non-Microsoft operating system I had ever used. And then after a couple years, I decided to go beyond that, and start a hosting provider to do what that guy had been doing, but on a bigger scale. So then I installed FreeBSD 4, and that's when I really learned to be a sysadmin. Because you have to be really good at being a sysadmin when you're purposely letting other people connect to your machine and run processes on it.

**Adam Stacoviak:** Yeah, for sure.

**Allan Jude:** And so I very quickly learned to use some of the features, and to be able to lock stuff down. So FreeBSD's networking stack has a feature called DummyNet, which allows you to -- originally created for doing research at universities, it allows you to simulate different network conditions, so you can purposely make it really high latency, like it's a satellite link. Or make it have a certain ratio of packet loss, like it's a WiFi link. But it also allows you to just say "Hey, any connection that matches this rule is limited to this many megabits per second", or whatever. And so being able to use that to deal with the fact that I only had so much bandwidth from the provider, and I needed to share it fairly across hundreds of people, and how to do that.

**Adam Stacoviak:** Interesting. Do you think you stayed with BSD because that's what you grew up with? Or were you ever called to the dark side, to the Linux world? What made you stick and stay? That's why you used it, but why did you stay?

**Allan Jude:** Mostly just because everything made a lot more sense to me. Things were organized in a much different way... And partly, I think -- because the few times I tried to use Linux, it was never the same Linux a bunch of times in a row. Somebody was using Red Hat, and somebody was using Debian, and another one would be Slackware, or something... And they were all so different; it was very confusing. Whereas all the FreeBSD machines were kind of this one holistic thing.

And also, the fact that in FreeBSD there's the kernel, like in Linux, but also the user space stuff, like Core Utils, and all that other stuff, are shipped as one package. So the tools are always integrated, and don't have to deal with trying to work on a different version. And so you don't have some of these weird artifacts you get with Linux, where each distro decides to ship a different version of like the DY utility, but with the same kernel, or whatever.

So, I remember being very excited after years when GNU Core Utils DU finally got the -A flag for showing the apparent size of a directory. So if there's compression, it can show it. But that version only ships on newer Ubuntu, and if you're still using CentOS, you didn't have that feature. And it was just like... Interesting. But mostly, it's just once you know a tool really well, every time you use a different tool, you just hate the fact that it's not the tool you know. And I think that's the main thing that's really kept me.

**Jerod Santo:** \[16:16\] Right... I think a lot of things perpetuate for that reason.

**Allan Jude:** Yeah. And one of the big things is there's a very clear separation between what is the operating system, and what is the packages I installed. So on FreeBSD, if you do a fresh install, and you go into the package manager and list what's installed, the list is empty. Well, some tools are built into the operating system, like tcpdump, and netcat, and some of the basic stuff like that, and like the compiler. Those are part of the operating system. And then anything I decide to install goes in a prefix directory; it goes under User Local, because this is a local modification I made; it's not part of the operating system. And it means that I can have completely different packages that are separate from the operating system.

And so those packages are always fresher than what you -- like, if you're on Ubuntu, and the last LTS is 22.04, so most of the software you have is the software from 2022. Whereas on FreeBSD, if you run the latest package set, you have the software from this week. And that can make a big difference as far as trying to use a new feature in an application. Or just -- you're running a web server and they've released a new version that has a feature, and you want to use it, the fact that I don't have to wait till the next LTS release, or try to shoehorn it in there.

**Adam Stacoviak:** Do you like Linux? Are you a Linux hater? Are you a Linux lover? Do you divide the line? How do you do it?

**Allan Jude:** There are some cases where I have to use Linux. Like doing video transcoding stuff... Well, Nvidia makes the graphics drivers to use the GPU as a GPU on FreeBSD; they don't make the drivers available to do the video transcoding stuff on FreeBSD. So in my sysadmin experience, there are some Linux machines, and I use them, but I often find myself trying to make them look more and more like BSD, just for my own comfort, and realizing that that's probably just making it worse.

**Break:** \[18:12\]

**Jerod Santo:** So I was first exposed to BSD in college. I've never run it, so now my experience level. So this is my level of personal experience...

**Adam Stacoviak:** Same. Never ran it.

**Jerod Santo:** ...was at college. This is like turn of the century computer science department, University of Nebraska. And there was like this pecking order of nerds. And it was like correlated with population size. So most of the people are running Windows, and they're like at the bottom of the pecking order. But it's the most of them. And then some of us - see how I'm now personalizing it - some of us had branched out and learned to run Linux on our laptops or our desktops. And there was less of us, but we were cooler than the Windows people. And then there was one guy, one guy who ran FreeBSD. And he was at the top. He was the hardest of the hardcore. And we all kind of looked up to him, and was kind of afraid, and he also was a bit snobby, and looked down on us... And I just was afraid of it from then on out, because I was like "Only one guy knows how to do it. I'm cool with Linux; it's already hard enough. I'm already not a Windows person." These are very juvenile thoughts, of course... But it seems like that's the view I saw, like this divide of the Linux and BSD people, is there's more Linux people, less BSD, but BSD is like even harder core... Does that resonate with you guys, or is that just like what my perspective looked like at the turn of the century?

**Allan Jude:** I definitely have seen that perspective oftentimes -- especially back in the early 2000s, I would say that BSD definitely wasn't harder. It was probably much more well documented, and if you had wanted to, you could have done it, and probably even had less difficulty.

**Jerod Santo:** Okay.

**Allan Jude:** Some of that has maybe inverted a bit now. Linux has gotten a lot more mature, and there's a lot more documentation out there than there was back in the early 2000s. Yeah, I'm trying not to have too much bias here.

**Jerod Santo:** Sure.

**Allan Jude:** But there is that general perception, and I don't know how well deserved it is, that --

**Jerod Santo:** Yeah, or how it started, or whatever...

**Allan Jude:** ...that BSD is harder-core... But for a long time, it was definitely if you were doing business with your computer, if you were making money hosting something, you wanted to be doing that with a BSD, and then Linux was this kind of -- it's what the kids are doing, but it's just a toy. And that has changed a lot. It's been 20 years, and more than that, and IBM spent a couple billion dollars making Linux better... And then separately, since then, bought Red Hat. But... I think part of it is also the assumptions that BSD makes -- I guess the best way I've heard it phrased is Unix doesn't stop you doing something stupid, because that would also stop you doing something clever. But it does mean that there are no guardrails to keep you from shooting your foot off.

**Adam Stacoviak:** Something that will make me think about BSD differently, which I really haven't considered so far yet, because I'm an Ubuntu user primarily... 22.04, or 23.10. I do have one system stuck at 23.10, that I will upgrade whenever 24.04 is available... I don't know, so sometime this year I'm gonna upgrade that 23.10 machine. And I'm waiting for the day, basically, for the LTS. April is roughly when it will be. But I'm a ZFS lover. As a matter of fact, I own a book that you may know about. I don't know if you know this book... It's got your name on it. It's called FreeBSD Mastery, ZFS Edition, essentially. And I got it because I wanted to learn more about ZFS. And the reason why I bring it up is because as part of preparatory for this conversation, like any good podcaster, I went to ChatGPT and said "Can you tell me some things about BSD that I may not know?" And then I know the overlap is obvious with ZFS, and I was surprised when it said that the integration with ZFS and BSD could be better, because of a more compatible licensing mechanism.

And so I kind of want to hear more about that, because I love ZFS. All my filesystem storages I have are all ZFS-based. But here I am, saying I use Ubuntu right. And meanwhile, I probably could get a better experience if I would just try FreeBSD. And then not just read your book to learn about ZFS, but also how to use ZFS on FreeBSD.

So with that in mind, the integration with ZFS seems like it could be better or more stronger, because of just various things it has incompatibility with the license. Now, that may not be true for OpenZFS. And I know ZFS has had some licensing history that may not be pertinent, but is that accurate with what you know? Is ChatGPT smart in saying that ZFS can be more tightly integrated to BSD because of its license compatibility?

**Allan Jude:** Yes.

**Adam Stacoviak:** \[28:10\] Okay. Sweet.

**Allan Jude:** ZFS and OpenZFS are licensed under the CDDL, which is a slightly modified version of the Mozilla Public License. And so the CDDL says - I'm not a lawyer; don't take my legal advice. But in general, the license says that you can make a binary out of CDDL license code, and you can license that binary however you want, so that you can make a product out of it, or whatever. And so you can make a ZFS binary, a kernel module, or whatever, and license that even under the GPL, so it'd be compatible to integrate it into the Linux Kernel. But the GPL itself requires that any code you link into it has to be licensed under the GPL and the CDDL. It doesn't let you just change the license on that code to be under the GPL. And so that's where that kind of incompatibility comes in. But it's not a very strong one, and Ubuntu is pretty sure that their legal way around it is working.

But because the FreeBSD license is literally two sentences, "Don't take off the copyright" and "Reproduce the copyright", it means that we could pull in all of ZFS, the codebase directly into FreeBSD. So if you go to the FreeBSD GitHub and the repo, under syscontrib there's a directory called OpenZFS that has a whole copy of the ZFS source code. So this means ZFS is completely just built into FreeBSD. So the FreeBSD bootloader has full support for reading from a ZFS pool, and so you can boot directly off ZFS, even if you're using all the advanced features of ZFS. So this allows a feature called boot environments, where your root filesystem, if it's ZFS, it's actually a virtual file system, and you can have multiple different ones, or you can clone it and take snapshots. So when I'm preparing to go to a conference or something, I have my laptop that runs FreeBSD, that I give my presentations off of, and I use a desktop most of the time when I'm at home... So I haven't used my laptop much in the months between conferences. So I'm going to update the OS, because it's been a while, but that's when everything has the greatest chance to break, when you're installing all these package updates, and so on.

So with ZFS I can take a snapshot of my root filesystem, and save that as "Before I broke everything." And then update stuff. And it all seems to work. And I check at home, and I can play stuff on the TV, so my HDMI is working, everything's fine. But say I fly to the conference, I get there, and something isn't working right. I can just reboot in the bootloader, say "Hey, I want to use the image of before I broke everything, instead of the latest version of FreeBSD." And it will roll back my root filesystem. But, importantly, it doesn't roll back my home directory. So I still have the latest version of my slides, but I have an older version of my OS that still works, because whatever latent problem I found, that ex Windows didn't want to support a certain resolution, or whatever broke. And so that can be really powerful.

Or if you've ever tried to update the firmware or the OS on like a little router or something, they often have two images; they always have like the one-year update, and then there's like a spare one \[unintelligible 00:31:15.20\] switches to this, so that if you somehow botch the firmware update, they have a second firmware they can boot from in the meantime. So FreeBSD had a feature like that before it had ZFS called NanoBSD, that let you do that. You'd partition up your disk into two big partitions and one little one. And the little one would hold the configuration, and the two big ones would be like version A and version B of whatever you're trying to install, whether it was a firewall, or a router, or whatever. And you'd be running off A, so you'd update B, and the next time you'd boot you'd switch to B, and then you can ping pong between these two images. But ZFS allows you to do that with an unlimited number of images. Because each is just this virtual file system in the pool, you can have as many of these as you want, and you can access them directly from the bootloader and decide which one you want to use.

\[32:01\] And when you're switching to one, it doesn't make the other ones go away. All the data is still there, because ZFS is copy on write, so only the bits you actually changed are taking space. So having seven copies of your operating system doesn't take that much space, because you only have to store the differences, not all of the data seven times. And so that allows much deeper integration.

But also, if we go back -- when we talked about the fact that the base system utilities, like top, for example, are not a separate package that came from a different maintainer somewhere. That is part of the FreeBSD operating system. So when you start top on FreeBSD, under the line where it tells you about how much free memory you have, it has two lines about ZFS, telling you "This is how much of your memory is being used by the \[unintelligible 00:32:43.04\] this much is for frequently used files, this much is for recently used files, and this much is data that's pending being written. Here's what your compression ratios are, and memory", and all this other information that would only be there if you had ZFS. And because FreeBSD is integrated with ZFS, top can just be compiled against the version of ZFS \[unintelligible 00:33:02.19\] and be able to get that information all integrated.

**Jerod Santo:** Pretty rad.

**Adam Stacoviak:** Yeah. Very read. I think I'm gonna be playing with FreeBSD soon, Jerod.

**Jerod Santo:** Ha-ha, I'm sure you will. But Adam, why not OpenBSD? So that leads us to our next line of questioning here... Because you were talking about Linux distros.

**Adam Stacoviak:** Right.

**Jerod Santo:** Certainly less BSDs. I can count them on one hand. I only know three; I'm sure there's more... Free, Open and Dragonfly. But I'm no BSD person.

**Allan Jude:** And NetBSD.

**Jerod Santo:** Okay, so four. Is that all of them?

**Allan Jude:** There's GhostBSD, which is more of a -- it's more like a distro. It's FreeBSD, but includes a GUI by default, and it has a lot more -- it's more like a Linux distro, in that they took the OS and then added a bunch of packaging and defaults on top of it. And if you want to run FreeBSD on a laptop, as like a daily driver type machine, GhostBSD probably is a better place to start, because it will be more familiar to somebody used to Linux... Whereas FreeBSD out of the box includes no packages and no GUI. You can install GNOME, or KDE, or MATE, or whatever you like, but you have to know to do that. Whereas with GhostBSD it comes separate.

So with the BSDs -- the NetBSD, OpenBSD and DragonFlyBSD are not really analogous to a distro. They are all originally based on the same code for BSD Lite from the University of Berkeley, but since then, because the open source patches might have gone back and forth, they are since then completely divergent projects.

**Jerod Santo:** So they're forks.

**Allan Jude:** Yeah, they're forks of the same original code from the very, very early '90s. And so being 35 years later, a lot has changed in between there. So they are part of the same family tree, but the kernels are quite vastly different. And kind of the goals of each of the projects is very different. So NetBSD is really designed around portability. Especially back in the early days of Unix, that was one of the big things. Some people had like a PDP, and then they had faxes, and all these different computers that were completely different architectures. Before the invention of C, every time you had a different kind of computer, you had to rewrite the operating system to like the assembly language of that computer. It wasn't like we have now, where the x86 and ARM are the two main kinds of computer, and we don't have to deal with very many others. There's PowerPC, and MIPS maybe, and a couple things like that. But we're not dealing with hundreds of different architectures. There's three, four popular ones.

So NetBSD wanted to maintain that, and works on all of those weird architectures that we just mentioned, and a bunch of ones you've probably never heard of, and a bunch that only existed in Japan, and never shipped anywhere outside of Japan. So NetBSD's focus is really that portability, and being able to run on anything.

\[35:57\] A lot of their ethos from the beginning was "There were these bigger mainframe type machines, and they don't make an OS for them anymore. We can be the open source OS, so people can still use to run these." And that has a lot of value, but it doesn't have quite the same mainstream appeal as running commodity servers with regular applications.

But NetBSD did pioneer a very interesting thing called package source, PKG SRC. And this is a package manager that's not specific to one operating system. So it's supported on various different versions of the BSDs, Linux'es, Solaris and its derivatives, Lumos and so on, and it allows you to get some kind of basic applications on stuff. People who are like "Oh, I need modern Python on HPUX", PKG SRC is a way to do that. And that came out of the NetBSD project.

And then OpenBSD has really had a focus on security, and is kind of like a research operating system where they're trying new concepts and ideas to make more secure computers. So they invented a bunch of common things we do. They're the maintainers of OpenSSH, that every operating system uses as a way to securely connect to a remote machine - that's maintained out of the OpenBSD project, along with lots of other applications. They have their own BGP server, and they've maintained a BSD licensed version of rsync, and lots of other applications that you might actually use.

But they've also pioneered a lot of concepts. They have a system called Pledge, where an application can say, at the start, after it's done its initialization where it maybe needed root access for something, it can pledge that it will only use these system calls from now on. And if it ever tries to do more than that, because maybe somebody used a buffer overflow to try to make the application do something it's not supposed to, it will actually -- the operating system will say "You promised you wouldn't do that, and we'll stop the program." And this allows you to kind of sandbox a program.

FreeBSD has something -- it's not exactly an alias. It's called Capsicum, and it's a lot more fine-grained, but it means it's a lot more difficult to retrofit existing applications to that more locked down sandbox. And it works very well if you're writing a new application and design it from the beginning to support this compartmentalization. But Pledge is a very easy way to retrofit existing applications to make them safer.

They also invented a couple other concepts. They relink the kernel, all the different parts of the kernel together in a different order every time you boot, so that everybody's machine is different, and an exploit won't be able to just work on every OpenBSD 7.4 machine.

**Jerod Santo:** That's smart. And what about Dragonfly? What makes that one different?

**Allan Jude:** So back at the end of FreeBSD 4.11 -- so FreeBSD now is at version 15. But back at version 4, they were looking at how to support basically multi-core systems. Now, this was just when we were getting past the \[unintelligible 00:38:51.13\] you had one CPU that was one core, and maybe you had a second socket for a second CPU. And that's all there was. But as we were getting into this idea of having multiple cores, and even threads and so on, the model that the kernel had to use for managing all the processes needed to change. And FreeBSD picked one specific way to go, and one of the developers really wanted to go in a different direction. And so he forked FreeBSD and created DragonFlyBSD, that tries to apply the concept of message passing, and so on, a lot more. And it seems to have gotten some traction in like the high-frequency trading space, because of the way the message passing applies... So that project is up there.

FreeBSD ended up changing what it was doing to even a third option, but since FreeBSD 6, the process model has worked very well to support that -- and with FreeBSD 14 or 15 we can support up to 1024 cores on a machine, and I think Linux is going to get there soon, but I think most versions of Linux are still stuck at not able to support more than 256 cores... Which seemed like lots even only a couple of years ago, but now that I've personally used machines with 192 cores, it's like "Oh, we're definitely going to exceed 256 any minute now."

**Break:** \[40:11\]

**Adam Stacoviak:** So if you were just beginning with BSD, which BSD would you choose? Is FreeBSD the choice that people should select first? Should they choose the portability one? How do you choose? I suppose based on what you've just said, it makes sense that FreeBSD is probably the one you'd say.

**Allan Jude:** I would say if you're trying to install something on a laptop, GhostBSD, which is FreeBSD with a default GUI and so on, is probably the best place to start. When I started, I was never trying to install Unix on my machine at home. It was always "This is gonna be on a server somewhere that I'm gonna SSH into." And so that is definitely one where FreeBSD excelled.

I had a FreeBSD machine I rented in Michigan, that I installed this FreeBSD 6.1, and upgraded in place, over only SSH. It had no KVM, or any remote access. I upgraded all the way to I think FreeBSD 11 before I finally retired the hardware, because it was too old. And so just the reliability and -- because you separate the applications from the operating system, upgrading the operating system is a lot less perilous than... So often now it's like "Rather than upgrading the OS in place, I'm just going to reinstall, because that'll be safer", right?

**Adam Stacoviak:** Yeah, that's exactly why my machine is at 23.10, and I haven't done any sort of changes to it, because I'm like "I don't want to mess up this machine." And I feel kind of stuck, basically, until 24.04 comes out, and is blessed as an LTS, or whatever. Then I'll move to that, probably. And I'll probably still even then tiptoe around it, because it's a precious little system.

What about the homelabbers out there who are running Proxmox? They just want to play. They don't have bare metal to install it on. Can you run FreeBSD as a VM in Proxmox, just to tinker and play? Do you know of a good tutorial that you can suggest for that? Or is it just pretty easy?

**Allan Jude:** It's pretty easy. On the official FreeBSD website you can download already built qcow2 images that you could just fire up, or you can get the installer ISO and just do the install...

**Adam Stacoviak:** Yeah. Okay, that's easy.

**Allan Jude:** Pretty easy. I personally put a bunch of work in making it less complicated to get ZFS by default... But every time I watch someone do it, I learn more about how not easy maybe it is...

**Adam Stacoviak:** Okay... Well, maybe you can watch me do it and see if it's not easy.

**Allan Jude:** Yeah. Part of the problem of working with something too much is I can do the FreeBSD installer with my eyes closed. I know exactly the order of the \[unintelligible 00:44:07.20\] and stuff. So literally, put me in front of a keyboard and turn off the screen and I can finish an install of FreeBSD. And that makes me maybe not the best person to try to make the installer easier for anybody else to use.

**Adam Stacoviak:** The most committed, that's for sure. Yeah, because I feel like after this conversation I'm gonna test on Proxmox first, and then I'll probably take my ZimaBoard, or - I don't even know... Can you do a FreeBSD install on a Raspberry Pi?

**Allan Jude:** Yup. There are pre-built images for Raspberry Pi's, and the RockPro, and the Pine board... There's a whole list of supported platforms.

**Adam Stacoviak:** Gotcha.

**Allan Jude:** It's really been nice now that ARM v8 is pretty standardized, where you don't need a special one-off image for every different board now. It's just like, this ARM-64 image will just work on any modern little ARM board.

**Adam Stacoviak:** Right. I was gonna say, it doesn't seem like there's any hardware limitations to playing with FreeBSD... Is there any that you're aware of?

**Allan Jude:** Not especially. Certain Broadcom WiFi chips aren't well supported, but that's really Broadcom's fault, because they make it impossible...

**Adam Stacoviak:** That's their problem.

**Allan Jude:** Well, it's FreeBSD's problem, but it's -- yeah...

**Adam Stacoviak:** And they're pretty popular, too.

**Allan Jude:** But the Intel ones -- Intel, when they commit the drivers to Linux, they dual-license them, under the GPL and the BSD license, so that FreeBSD can use that source code to get the drivers working under FreeBSD as well. Both for Intel for WiFi, and their built-in GPUs. And that goes a long way.

**Adam Stacoviak:** What about a FreeBSD system that runs obviously ZFS, because it's built-in, it's open ZFS built-in, but it's really intended to be a Docker machine, running a particular Docker container that runs Plex, and needs access to a GPU and stuff like that? Can you do that with FreeBSD? Is that going to be a problematic system to build?

**Allan Jude:** \[46:06\] There's a couple different ways to approach that. Docker specifically doesn't really support Linux, although the more generic concept, the container runtime stuff - there is growing support for being able to do that directly on FreeBSD. For the specific use case you're talking about, it might make more sense to use Beehive, which is FreeBSD's hypervisor - kind of like KVM on Linux - and you could pass through the GPU. So you could have a VM that would run your Docker container, and be able to pass through the GPU.

**Adam Stacoviak:** It doesn't have to be a Docker container. I mean, is there a more native FreeBSD way to do things that isn't Docker-related?

**Allan Jude:** Yeah. FreeBSD's container concept is called jails. They basically are a chroot that contains a different install of the OS, that can have other packages, and so on. And they have a restriction on which IP addresses it can use, and you can lock it down. It's since grown a bunch of features, like the network namespaces, kind of like on Linux, where you can have this basically be almost like a lightweight VM. It has its own network stack, its own files, everything... And that's how I run Plex on my FreeBSD ZFS machine, is I just have a jail, and then inside that jail I install the Plex package from FreeBSD's package system.

**Adam Stacoviak:** Just like that. It's too easy. Okay.

**Allan Jude:** Yeah. \[unintelligible 00:47:21.21\] from my storage into there... This way, Plex can only see the media dataset from ZFS that I wanted. I didn't want it indexing my photos.

**Adam Stacoviak:** That's why I like my Docker Compose setup, because I pass through via Docker Compose which mounts I want the Plex Docker machine to know about. And it can only see those, and that's it, essentially. And that's why I like that process. But I figure there's probably a more native way to do it.

**Allan Jude:** Yeah. And those concepts were originally done in 1999 on FreeBSD by a company who wanted it. They were just trying to support PHP 3 and PHP 4 at the same time as a web host. And so they paid for this feature, and they said "We need this as a competitive advantage. But a year from when we finish the project, you can open source it." And so a developer built it on top of FreeBSD for this web host, and they used it, and then it became open source.

**Adam Stacoviak:** That's awesome.

**Allan Jude:** And that concept has continued to grow, and Sun saw that concept and built their concept of zones based on top of that... And that's why ZFS has specific support for delegating datasets to a container. Because Solaris had its own concept that they borrowed the idea from FreeBSD. And then full circle, eventually ZFS comes back to FreeBSD and Linux, and support for those has landed. And actually, my company did the support in Linux for containers with ZFS. So in ZFS 2.2, which will come out with Ubuntu 24.04, you'll be able to actually ZFS zone a dataset to like an LXD container, so then root inside that LXD container can see that dataset, make its own child datasets, make its own snapshots, and so on.

One of our customers wanted to be able to run Docker inside of a container. They wanted to do hosted CI, and so they needed each customer stuff to be separate from each other. But each customer wanted one Docker, and if you just did LXD without the support from ZFS, Docker couldn't use the ZFS driver, and get all the advantages of ZFS when using Docker.

**Adam Stacoviak:** So many layers there. It's like Inception. Am I sleeping now, or later? Am I going to get the kick and wake up yet? What's happening here...?

**Allan Jude:** Well, especially -- because you can do an unprivileged LXD container, which has a root user inside, that as far as that user is concerned is root, but as far as the system is concerned it's just an average user that doesn't have any special permissions.

**Adam Stacoviak:** For sure.

**Allan Jude:** You can have the same user ID in all these different containers, but it actually maps out on disk to a different user ID, so that the system can tell the files apart. And yes, it can get very inceptiony.

**Adam Stacoviak:** Yeah, I bet. What about networking? What can you do fun with networking around FreeBSD? I know that you've got some cool stuff in there, but if I wanted to tinker with it, build my own router, just do fun things with ports on a machine that I have access to, whatever...? Give me some fun stuff.

**Allan Jude:** \[50:15\] Yeah, one of the main ways people get started with FreeBSD is using one of the kind of open source appliances based on FreeBSD, whether that's like pfSense or OpenSense as a router, which - it's a router firewall with a web GUI. And that's how a lot of people get started. Or there's TruneNAS. If you have a machine and you just want it to be your ZFS machine, rather than trying to learn it all yourself, you install TrueNAS on it, you get a web GUI, and then you have a ZFS machine.

**Adam Stacoviak:** That's Core, right? Not Scale. Scale is based on Debian. Isn't that right?

**Allan Jude:** Yeah. So TrueNAS Core is based on FreeBSD, and TrueNAS Scale is based on Linux, because people wanted Docker support.

**Adam Stacoviak:** That's right. I was in that crowd, going "Please..." Okay.

**Allan Jude:** One of the ways that people tended to get first exposed to BSD is using it in one of these appliance type situations, and then wanting to do just a little bit more with it. So getting a different machine and starting with a plain install of FreeBSD, and learning it more themselves, and building something more advanced than the kind of out of the box appliance is meant to do.

**Adam Stacoviak:** What about in your network? What are you doing with FreeBSD? You mentioned Plex. What else?

**Allan Jude:** Yup. So FreeBSD has two main firewalls that you can pick from; one called PF, which is actually originally from OpenBSD, but the FreeBSD version is quite a bit different now... And then IPFW, which is the original firewall, and has some very interesting capabilities around forwarding and changing things. So using FreeBSD as a router or a firewall is very common. You could use just a net router for home, or even like a full like BGP router for core internet. Lots of ISPs, use the BSDs for the routers because they have very good uptime, all the tools built in, you don't have to worry about the packages changing out from under you... And long-term support. Each main version of FreeBSD is supported for five years. So if you use the 14 branch, or the 15 branch, each of those gives you a whole five years, and it generally matches the lifecycle of machines, so that you don't have to worry about upgrading very often.

In particular, there's a guarantee in FreeBSD of stability. So if you build something for FreeBSD 14.0, it's guaranteed that'll still work on FreeBSD, 14.4, when that comes out. And only between major versions can anything break that might make your life difficult when you go to upgrade.

But stuff you can do on the network - like I said, lots of different options with firewall, and we talked about at the beginning, DummyNet for traffic shaping... And there's really interesting capabilities there. But it also has a concept called Vnet, where you can have a completely isolated separate copy of the FreeBSD network stack. So in those containers, they can have their own complete network stack; that means they can have their own firewall. So each container can have its own complete separate firewall, with its own firewall rules. They can even have conflicting IP addresses. So you have two containers that have the same IP addresses, and as long as you don't link them together, they won't see each other and won't have a conflict. And this can be very useful for simulating networks. If you need to build something where you have 100 machines all emulate some network for work, or whatever, you can do that all within one machine, and because it's using containers instead of VMs, you're not having to dedicate a bunch of memory to every one of those, and run out of RAM, and trying to start 100 VMs.

And just a lot of composability, so it has a bunch of these different layers where you can compose stuff together, and be able to create whatever you want, including using DummyNet between those VNETs to control how much traffic can go where, and filtering, and all that stuff.

**Adam Stacoviak:** What about this scenario - so I have two Pi-holes, and I have a DNS mask, a load balancer essentially machine in between them, that I point my router at that single IP address, I have two Pi-holes, and I load balance to those two Pi-holes based on a DNS mask. If I want to do that in the FreeBSD world, what would you suggest? If I want to replace that machine with a load balancer built on FreeBSD.

**Allan Jude:** \[54:18\] Yeah, so you can just install a DNS mask on FreeBSD.

**Adam Stacoviak:** That's it.

**Allan Jude:** It's one option.

**Adam Stacoviak:** Okay.

**Allan Jude:** There are other options...

**Jerod Santo:** Too easy, Allan. Give us a harder way.

**Adam Stacoviak:** \[laughs\]

**Allan Jude:** What might be more interesting is actually replacing the Pi-holes with something running BSD, and using CARP, which is actually another technology from OpenBSD, the Common Address Redundancy Protocol. It allows multiple machines to basically share an IP address, and so if one of the Pi-holes goes down, the other one will notice "Hey, that Pi-hole hasn't said "I'm alive" in the last 200 milliseconds. I'm next." And it'll take over. And that way, the traffic -- you never noticed that one of your Pi-holes went down. And so it's very common for a web server, a DNS server, whatever, to do this, so that as soon as a machine goes down, another machine takes over for it, and you never -- you don't have to worry about it.

**Adam Stacoviak:** Yeah.

**Allan Jude:** And then FreeBSD is very popular as a load balancer. You can use Relayd, depending on what protocol you're trying to load-balance, or all the other common stuff, like NGINX, or HAProxy, and any of those applications.

**Adam Stacoviak:** Yeah, I think in this case it's DNS itself. I'm an idiot when it comes to protocols...

**Allan Jude:** Well, for DNS, you can also just configure your client to know that there are two different DNS servers, and try them both, without necessarily needing a load balancer. Because I can't imagine your DNS load on your Pi-holes is so heavy that you need two of them.

**Adam Stacoviak:** No, it's for fun. It's just to learn and tinker, really. I mean --

**Allan Jude:** Exactly. And doing the CARP thing, so that you can just unplug the cable from one of them and watch the traffic just instantly switch to the other one, and the applications don't notice - it's a really good skill for a sysadmin to practice in their home lab.

**Adam Stacoviak:** You'd be surprised of my network traffic. It's pretty intense around here. Just kidding...

**Jerod Santo:** In that case, Allan, how would you actually know - because you want to be able to have diagnostics on that down machine. How do you know if you have two machines sharing the same address, and one hops in when the other one's down?

**Allan Jude:** Usually, what you do is they would each have their own actual IP, and then they would share like a floating IP...

**Jerod Santo:** Gotcha.

**Allan Jude:** ...kind of like you would use in the -- the same concept like Amazon, and Digital Ocean and other provide in the cloud.

**Jerod Santo:** Yeah, like an Anycast kind of a thing.

**Allan Jude:** It's not quite Anycast, because that requires BGP... But it's the same idea, yes, of - those machines communicate, and they have an election decide who's the leader, and that person does it. And then if you look at ifconfig, or some of the other metrics you get out of BSD, you can see "Oh, I think I'm the leader" or "I'm a follower", or "I know that things are broken, and I'm down."

And you can also do that across interfaces. For example, if you're doing this with -- say, it's your NAT router that you're trying to make redundant. If the internet-facing interface goes down, you want it to also purposely take down the LAN-facing interface on that router, so that the other router that still has internet will take over. And so you can have this kind of -- you can define these relationships so that if this connection goes down, sure, we might want to change the IP address on the internet side, but also, if we don't have internet, we don't want to advertise us as a router on the internal side.

One of the other interesting protocols that's available on FreeBSD and OpenBSD is called PFSYNC. So if you're using PF as the firewall to do the NAT, it can sync the state between your two routers, so that when you failover to the other router, it already knows about all your open connections, and you don't have your currently open connections disconnected when you had to failover to the other router. Whereas normally, that state only exists in memory on your router. Especially with consumer routers, that state table is usually the thing that gets full, and means you want to reboot your router.

**Jerod Santo:** Are you sure that works, though?

**Allan Jude:** Yes.

**Adam Stacoviak:** \[laughs\]

**Jerod Santo:** It sounds like it wouldn't work, like it would fail.

**Allan Jude:** \[58:01\] I'm sure it works. I've seen lots of really big, really big, important internet nodes using that to stay online.

**Adam Stacoviak:** That's cool.

**Jerod Santo:** I love the idea of Adam having like a fleet of Raspberry Pi's, that are all load-balanced in order just to handle his internal network's DNS requests. I think that would be amazing.

**Adam Stacoviak:** Just two... Just two. I follow Gerhard, Jerod. You know that. Two of everything.

**Jerod Santo:** Two of everything.

**Allan Jude:** If you're into DNS, you should follow Paul Vixie.

**Adam Stacoviak:** Okay...

**Allan Jude:** He's written a thing to actually detect the DNS over HTTPS, and break it on purpose... Because he's like "My network is a totalitarian regime. I decide who connects to what, and I control the DNS. Firefox doesn't get to decide to go use Cloudflare for DNS. No, no. This is my network."

**Jerod Santo:** \[laughs\] Oh, I like that.

**Adam Stacoviak:** It can do that?

**Allan Jude:** Yeah. Basically, it uses the firewall on FreeBSD to intercept the outgoing connections, and then when it sees the ones for HTTPS, it's like "Oh, I'll send a DNS request to it. If that one replies, then I know that's a \[unintelligible 00:59:00.22\] server. And nope, that one's not working anymore."

**Adam Stacoviak:** Wow.

**Allan Jude:** He gave a great talk about it at a BSD conference. The video is on YouTube.

**Jerod Santo:** So that had to be out of band though, right? Like, if you have an HTTPS request...

**Allan Jude:** Well, basically, this would be on your router -- you can't use any DNS server except for my DNS server.

**Jerod Santo:** Right, right, right. But that detection mechanism would be outside the regular connection, right? You're not like man-in-the-middling it.

**Allan Jude:** Right, yeah. The firewall triggers something external to go and check, "Is this host actually a \[unintelligible 00:59:29.25\] server? And if it is, then no, we're not going to let that packet go through."

**Jerod Santo:** Smart. We need to get Paul Vixie on this show, learn how to become totalitarianists inside our own networks, Adam.

**Adam Stacoviak:** I want to do that. I'm attempting that, so...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** And I feel like I'm being swindled by Firefox. Thank God I don't use Firefox, but whatever, you know? My "It can do that?" was actually "Can Firefox do that?", not --

**Allan Jude:** Well, Google's worse. Chrome is worse than Firefox.

**Jerod Santo:** Uh, true... So bringing up Firefox makes me think of just consumer-grade software, and what I think of with obscure operating systems is like lack of packages, lack of updates... And you know, I'm a Debian guy from way back, so I know what it's like to be pleasantly behind the curve, and then go grab some different sources, because I want that package that's newer than 18 months ago, or whatever it is... How is it with BSDs? Because I assume they probably have less access to software than any other operating system out there. Is that wrong?

**Allan Jude:** It depends... So on FreeBSD we have this system called Ports, which is basically a directory structure full of makefiles, that allows you to compile a lot of common applications. In total, that generates something about 40,000 packages. So not a small amount of software is properly supported on FreeBSD. And so Firefox, and Thunderbird, and Chromium, and whatever else you might want to use - and like we talked about, DNS mask, and whatever other applications you might

want...

**Adam Stacoviak:** Plex. You said Plex is a native install too, right?

**Allan Jude:** Yeah, Plex, including the version 4 if you have a Plex pass.

**Adam Stacoviak:** That's cool.

**Allan Jude:** And lots of other stuff. And so in ports - there are two flavors of ports. The default is called quarterly, and that's updated -- the versions of the applications are updated once every quarter, and then outside of that, it's only like bug fixes and security fixes, to try to, like you said, kind of pleasantly behind the curve a little bit to avoid the churn. But there's also the other set called latest, which is literally rebuilt every couple of days, and it's all those packages, the brand spanking newest version.

**Jerod Santo:** Okay.

**Allan Jude:** There's a great website called, I think, Repology, that compares the package repos on like Debian, and BSD, and all the other ones... And in general, FreeBSD is usually the second freshest, just behind NIX, who are somehow crazy and just keep everything even more up to date... So generally, not every single application is available, but most popular stuff is, except for things that contain too many Linux-isms, that are really, really specific to Linux...

**Jerod Santo:** \[01:02:08.17\] Yeah.

**Allan Jude:** Biggest pain in the last couple of years have been more and more applications assuming Systemd is available, which isn't necessarily the case on a BSD that doesn't have Systemd... But in a lot of those cases, we've been able to write shims that can pretend to be enough Systemd to get the application to work anyway.

**Adam Stacoviak:** Well, somewhat more importantly, how up to date are the LLMs with helping somebody learn OpenBSD? Like, this conversation will go away, you won't be here to just ask questions of later on when I'm tinkering; can I ask a ChatGPT and get good answers? What's your experience there? You probably don't use it, because you don't need to.

**Allan Jude:** Well, I've used it a little bit.

**Jerod Santo:** He writes the books that ChatGPT reads.

**Adam Stacoviak:** That's true.

**Allan Jude:** That's part of it. And there's a lot written about the BSDs, especially -- you know, FreeBSD had the best documentation throughout all the early 2000s, and so on. And all that's still out there. The number of people helping keep it up to date has not grown fast enough to keep up with the increasing breadth of the number of things that need to be written about... And so if you're looking for somewhere to contribute, the documentation is a great way to get started. And as I was kind of talking about with the installer, someone who's very new to it is the best person to write the documentation on it, because they don't know anything about it already.

The problem you have is once you know a lot of it, there's things you forget that you know, and that the person reading the documentation won't know. And you tend to skip a couple of steps, because they're so automatic you don't think about them... But it means the documentation suffers from that. And so don't think that you're too much of a newb to help the documentation. We actually need your newbness; before you get better at it is the best time to write the documentation.

**Jerod Santo:** Okay. How does one interact with the community? So let's say I'm ready, willing and able, I'm a FreeBSD newb, and I want to help with the docs. How do I even get started with that?

**Allan Jude:** So we've put a lot of work in the docs in the last couple of years, so they are now written in AsciiDoc, which is Markdown plus \[unintelligible 01:04:14.06\] and so you can just go to the GitHub FreeBSD and go to the docs repo, and make a change and open a pull request. But if you want to interact with the community, there's all the common ways. There's a Matrix channel, there's a Discord, there's a forum, there's a mailing list... Depending on how old you are, and which of those you prefer, and you'll find your people there.

**Jerod Santo:** \[laughs\] Okay.

**Allan Jude:** It is really interesting to see the stratification of -- you know, people of a certain age want a mailing list, the next age was forums, and then it was Discord, and that it was Matrix, or whatever.

**Jerod Santo:** Right.

**Adam Stacoviak:** It looks like there's a FreeBSD documentation project primer for new contributors as well...

**Allan Jude:** Yes.

**Adam Stacoviak:** ...which is a split HTML or a single HTML page. You can just jump in there; that's linked to from the repo.

**Allan Jude:** Yup. And that's also a great place to get started. As you're trying to follow those instructions, if you see some extra detail that'd be helpful to someone who's trying to do this for the first time, then that's a great place to contribute.

**Adam Stacoviak:** That's cool.

**Allan Jude:** But yeah, compared to the old days, when the documentation was written in DocBook XML, and had all these terrible things you had to learn, and all these tools you had to be able to do before you could start working on it, now that it's basically Markdown, if you can write a paragraph, you can contribute to the docs.

**Jerod Santo:** How does the FreeBSD project make progress? Like, what is the governance, and how does it all work?

**Allan Jude:** Yeah, so the FreeBSD project itself has what's called the core team, which is a group of nine people elected from people who have write access to the repos, every two years. And so instead of having one person in charge, like Linus Torvalds, instead in FreeBSD every two years we just elect nine people to make up the team of people that help decide who gets write access to the repo, and deal with -- you know, if people are having an argument over how to decide what to do, that happens there.

\[01:06:11.06\] But really, the core team is more about trying to direct people in the same direction, and cheerleading efforts led by individual developers, rather than strictly deciding exactly what the project is going to do next. So yeah, it's much more sustainable governance, in that we're not depending on one person, who can get burnt out, or just be bored of it, or just disagree with everyone. By having an elected body that changes on a regular basis, it means there's lots of chance to get new people into the leadership roles. I did two terms of that myself a couple of years ago.

**Adam Stacoviak:** Very cool. If I was coming to FreeBSD, from my world, Ubuntu, Linux, only, really, what would I have to unlearn? What are the core things I know as a Linux user primarily, and I'm going to unlearn them to do the FreeBSD way?

**Allan Jude:** I think the biggest one is you have to stop assuming your shell is Bash.

**Adam Stacoviak:** Okay...

**Allan Jude:** But you can just install Bash and have it on BSD if you want. It's just not the default.

**Adam Stacoviak:** What is the default?

**Allan Jude:** Just bin/sh, which is the original UNIX SH.

**Adam Stacoviak:** Okay.

**Allan Jude:** It's mostly equivalent to what is \[unintelligible 01:07:20.29\] is on Ubuntu. It just support doesn't support arrays, and a couple of specific Bashisms, but not a big deal. I think the biggest thing that you'll find surprising is that all the software you install doesn't go into just like user/bin, or whatever. It goes into user/local/bin. And the config files for anything that doesn't come with FreeBSD will be user/local/etc. Basically, we prefix all the paths of software that's not part of FreeBSD with user/local. And that means that if you screw up all the packages, you could, in an extreme case, just delete that whole directory and reinstall everything, without touching the operating system, and it wouldn't break anything.

**Adam Stacoviak:** Okay.

**Jerod Santo:** That's it? Those two are pretty easy.

**Allan Jude:** Yeah. And I guess the third one is that there's not /proc by default on BSD. Most of the stuff you would find there will be under sysctl on FreeBSD instead. There is a /proc you can get, but it doesn't have very much in it. Or if you're using FreeBSD's Linux emulation, where you can actually run unmodified Linux binaries directly on FreeBSD and it will translate the system calls from the Linux version to the FreeBSD version. There's a linprocfs, which provides a /proc that looks like Linux, but it's not there by default.

**Jerod Santo:** What about -- you said it's like Systemd, and stuff... What about --

**Allan Jude:** So FreeBSD still uses cron for periodic jobs, and it has its own other system called Periodic, which is more like "I want to run this every Sunday, and it's going to do a security audit of my system." There is a system called Devd, which can automatically respond to things from devices. So like "Oh, you just plugged an Ethernet cable in. Do you want it to automatically try to run DHCP on that interface?" Or you plugged in your headset; do something. Some of that stuff. But not something quite as holistic and all-consuming as Systemd yet. Having something like that, maybe like Launchd from macOS, or some other thing that does some of that - it could be interesting. There are a lot of those building blocks; so there are like supervisor things that can do some of the individual components of what Systemd does, that you can have, but there's not something that tries to bring all of those different pieces together yet. But it does mean that when a service doesn't start, it's much easier to figure out why if you're a sysadmin that understands shell scripts. But I understand that at same time there are interesting functionality that there's no direct analog for.

**Jerod Santo:** So being a BSD guy and mentioning Launchd, I'm curious your take on macOS as being rooted way back there... Isn't Darwin and BSD like the same core starting place?

**Allan Jude:** \[01:09:57.15\] So Darwin's mostly its own kernel, but the basic utilities, like ls, and du, and all that stuff were borrowed from FreeBSD 5 originally, and then slowly updated over time. There's a lot of BSD code in Darwin, which is then underneath macOS, but there's also a lot that is very specific to them.

**Jerod Santo:** Sure, sure. So have you used macOS? Can you compare it to your life in the BSD world?

**Allan Jude:** I've used some macOS. It is somewhat comforting to have the command line tools you used to, even when you're on a pretty operating system... But I don't have that much experience with it.

**Jerod Santo:** Fair.

**Allan Jude:** But you know, Microsoft borrowed a lot of code from BSD as well. Like, if you've ever run netstat on Windows, or ping and traceroute, those are all originally from the BSD codebase.

**Jerod Santo:** Really?

**Allan Jude:** Yeah.

**Jerod Santo:** I would expect them to be fundamentally different. I guess the way you ping things isn't super-low level, or... I don't know.

**Allan Jude:** Well, it was more that the whole concept of having a TCP stack when there was one available open source for free, and it was the reference implementation... You know, they've changed a lot about it over all the years since then, but the reason why some of those commands match up is because the original code was... But you know, some of that even predates FreeBSD. This is going back to the early days.

**Jerod Santo:** The primordial ooze.

**Allan Jude:** Yes, When DARPA was funding the development of the internet.

**Jerod Santo:** I don't know, I'm pretty sold, Adam. What are you thinking? It seems cool.

**Adam Stacoviak:** I'm thinking FreeBSD is an install away for me, because I'm about to spin it up.

**Jerod Santo:** There you go.

**Adam Stacoviak:** I'll probably play on Proxmox for a bit, and then find a reason to swap something out, and actually go bare metal once I learn enough... But it seems like it's got the right kind of building blocks really from me. I mean...

**Allan Jude:** Yeah. Maybe the best criticism of FreeBSD is it's a Lego set; it has all the building blocks, but that last 10% to make it into something perfect is not included, sometimes. So with the ZFS stuff it's quite polished, but you know, for example FreeBSD has had jails since the year 2000, but didn't quite get to having something like Docker, where you're just saying "I want this application" and it gets set up as a container for you. There are lots of tools to make containers, and then you go inside and install the packages or whatever... But not something where there's just a repo of already built containers that you can just slurp down and start running. Partly because there are definitely security problems with just slurping down an image that never gets updated, versus using the package manager to constantly keep the packages in a container updated... But that's what I would say, is that you're expected to add that last little bit to turn it into something... Which is also why you see so many appliance-type things built on BSDs, is because they're designed to be this Lego set that you can build on, and then add your custom stuff onto and not have the same license compliance issues that you might on something that's GPL licensed.

**Adam Stacoviak:** Yeah. I'm really interested to try out a machine with ZFS. I know you keep saying that ZFS, because you're Canadian, right? Are you Canadian?

**Allan Jude:** Because I'm Canadian, yes.

**Adam Stacoviak:** I thought you were Canadian. I picked it up along the way. You were saying process... I used to live in Canada, so I know. It's not Toronto, it's Toronto. Anyways... To show my Canadian cards there. So ZFS is important to me, obviously, as a file system and storage system. And then running Plex - I'd love to see how that works for me with -- I think I have an Intel 13900K CPU that is the main system for that... And it was mainly because I wanted to transcode 4k very easily, and have no issues whatsoever... And so I built a system around that CPU. And ECC RAM ZFS, obviously... But it was an Ubuntu system, not FreeBSD.

**Allan Jude:** My Plex machine is my build server. So it's a dual E5-2690.

**Adam Stacoviak:** Oh, man.

**Allan Jude:** So it's 40 threads at three gigahertz. So I didn't bother with a GPU for transcoding... \[laughs\]

**Adam Stacoviak:** \[01:14:08.05\] Yeah. Well, the problem with GPU vs CPU I've found is not that the CPU can't handle it, it's there's certain things that GPU does video codec-wise. It's not that you've got so many CPUs and they're strong, it's that you really need the logic. In particular, I think it's SmartSync, if I recall correctly, in the Intel GPU, the iGPU...

**Allan Jude:** QuickSync.

**Adam Stacoviak:** QuickSync. Yeah, thank you. I was thinking Smart, but Quick makes more sense, and that's true.

**Allan Jude:** But QuickSync generally is much faster than doing it on the CPU, but you can't get the same quality as you can get on the CPU. But on the CPU it's so much slower that usually at any reasonable bit rate you don't care about the difference in quality, because without a magnifying glass you're not gonna be able to see it.

**Adam Stacoviak:** Yeah. And I don't know too much about the way Plex interfaces with the hardware, but I know that there's the hardware encoding option inside of Plex, and I think it leverages that iGPU, and QuickSync specifically, because Plex has worked well with the Intel CPU... And so I didn't want to go the hard way, I wanted the Easy button, really. So I went with an Intel QuickSync iGPU system with lots of cores, so that when I want to do other things on that system, that -- it's a multi-use system, it's not just a Plex server... But that was one of the primary uses of it, just to see what I could do with it... But I really did not want to have an issue with my 4k stuff. I wanted to be able to rip 4k, and watch 4k, and also transcode 4k with zero problems. And I had problems on other CPUs and other setups, and that's what I ultimately landed on. Is it the best system ever? Maybe not. But that's what I chose.

**Allan Jude:** Yeah. I don't tend to use the transcoding very much, because I mostly watch on my TV. That just takes the plain 4k, and not have to -- you know, I'm not trying to stream into my phone, and dumb it down into my phone screen.

**Adam Stacoviak:** I've got kids, so... That's why.

**Allan Jude:** Yeah. Well, my niece and nephew are the fourth busiest user on my Plex.

**Adam Stacoviak:** There you go. There you go. Very cool. Well, that would be my first use case, would be that, playing more with a native version of OpenZFS. Obviously, I'm using OpenZFS on Ubuntu, but it's not maybe the same way you can set it up with FreeBSD.

**Allan Jude:** The ZFS code itself is basically the same. So since FreeBSD 13.0, it's been the OpenZFS version, as opposed to the previous Illumos version of ZFS. So in FreeBSD 13.2, I think it's ZFS 2.1.6, which is almost identical to what's in Ubuntu, which is 2.1.5.

**Adam Stacoviak:** Yeah.

**Allan Jude:** But if you're running -- if you install FreeBSD 14, you will get ZFS 2.2, which you wouldn't get on Ubuntu until April.

**Adam Stacoviak:** Yeah, I want it now.

**Allan Jude:** And so you'll get access to all those new features that are there. And then, as we talked about, all the integrations. So there's a tool in FreeBSD called BECTL, for controlling those boot environments, that will let you take a snapshot of your system before you try the next thing in your lab. That way, if it breaks, you can go back and unbreak it. Or even if you do break it, you can keep the broken one around to go back to it and work on it later.

**Adam Stacoviak:** Yeah. That's what I like about the built-in nature of ZFS in the operating system, is that you can do things like that. I may not do it every day, but it'd be nice to do it whenever I'm like "Okay, this upgrade is risky. Let me snapshot prior to", and do the upgrade; and as you say, if it gets botched, roll back. I don't have that option now. It kind of sucks.

**Allan Jude:** Well, Ubuntu tried to get most of the way there, but got distracted...

**Adam Stacoviak:** Yeah, for sure. What else, Jerod? Anything else to cover on this BSD journey with Allan?

**Jerod Santo:** No, I think we've pretty much covered it. For me at least...

**Adam Stacoviak:** \[01:17:41.27\] What have we not asked you, Allan, that you're like "Man, why did you not ask me this question about my love for BSD, or ZFS, or being a sysadmin, or whatever?" Your podcast maybe even, The Two and a Half Admins. I'm a fan, I listen to that. Not every day. Mostly when it's about ZFS, which is almost every episode, but...

**Allan Jude:** \[unintelligible 01:18:00.24\] if you are interested in BSD, I'm not the host anymore, but there's the BSDNow.tv podcast. It comes out every week. It's news about the BSDs. If you want to keep pace of what's going on there, or see interesting articles where people have wrote up how-to's on doing different things on BSD... Maybe Adam can write up his journey with setting up Plex, if he ends up doing that; that's a great one. And like Adam mentioned, I host the Two and a Half Admins podcast, which if you do sysadmin stuff and want to keep pace with what's going on, or just talk to some people that have been doing it for 20 years and have lots to share, then definitely check that out.

And then for my day job, I've co-founded a company called KlaraSystems.com, and we do support for ZFs and FreeBSD, as well as development. So we build custom features for FreeBSD and ZFS. For example, we talked about the support for LXD containers on Ubuntu built into ZFS - that feature was a company came to our company and said "We want this feature", and we built it and upstreamed it and made it part of OpenZFS for them. And we did the same thing for ZFS on Linux, and BSD, and for the BSD kernel itself.

**Jerod Santo:** Very cool.

**Adam Stacoviak:** Well, thank you for your book, thank you for all the knowledge you put out there; podcasting, of course... I mean, it's one thing to know, it's another thing to tell it, and you do a great job of doing that. I really enjoyed that book of yours as a primer for me, with ZFS, so I appreciate that... And I'm pretty sure I've bought it. I think I bought it.

**Allan Jude:** Well, there's the advanced version, the Advanced ZFS, that follows on to that, if you make it all the way through the first one.

**Adam Stacoviak:** You know, I think I may have skipped that one. I bought the initial one, and I think I just got on my way. I don't know if I ever went back to the Advanced. I'll look at the table of contents to see what's in there.

**Allan Jude:** Yeah. It's mostly more tuning in, and getting deeper into replication, and stuff.

**Adam Stacoviak:** Yeah, that's the fun stuff. I should get that then, because I like to send/receive, replicate, clone, all those fun things. Mainly, it's one thing to stand up a system, it's another thing to keep it up, and also to back it up, and to ensure that if something happened to that machine, that your data isn't gone.

**Allan Jude:** Yeah. Well, especially if you're using Proxmox, and every VM is based on ZFS, being able to replicate that to another machine, so if the Proxmox machine dies, you can just fire it up on a different machine - it's really valuable. And being able to use the incremental replication to keep a copy in sync, without having to re-replicate all the data, all the time. That can make a world of difference there.

**Adam Stacoviak:** And that is in this other book, the mastery version of it?

**Allan Jude:** Yup.

**Adam Stacoviak:** Alright.

**Allan Jude:** Yeah, so FreeBSD Mastery, Advanced ZFS.

**Adam Stacoviak:** Advanced, that's right.

**Allan Jude:** Yeah. Both of those are at zfsbook.com. Yeah, don't let the fact that the title says FreeBSD frighten you; all the ZFS commands work exactly the same on Linux. Some of the tunables are -- you know, it'd be sys modules zfs, blah, blah, blah, instead of what it is on FreeBSD... But outside of that, everything is the same, now that ZFS on Linux and the FreeBSD ZFS code are the same codebase.

**Adam Stacoviak:** I concur.

**Allan Jude:** And hopefully, in the next couple of months the mainline support for the community macOS version of ZFS will land in OpenZFS.

**Adam Stacoviak:** Yeah, that'd be fun.

**Jerod Santo:** That'd be cool.

**Allan Jude:** And that way, the same code will be available for all three operating systems.

**Adam Stacoviak:** Okay. We'll link up those things in the show notes for the folks; check that out. Allan, thank you so much. We appreciate your time.

**Allan Jude:** Yes, thank you.
