**Gerhard Lazu:** I think that a new year is a natural time for new beginnings... And as our listeners know, we used to run all of changelog.com on Kubernetes until April 2022, when we move to something simpler; something that's all our team can be comfortable with. What I'm most comfortable with is bare metal hosts. I'm also comfortable with Kubernetes, and it just so happens that I have some bunch of droplets lying around, \[unintelligible 00:01:36.19\] with various workloads, mostly PHP and MySQL, that are due a refresh. \[unintelligible 00:01:42.21\] the five years are coming up, and I wanted to try something else. So given a bunch of bare metal hosts with fast, local SSD disks, how would I convert them to a production setup running Kubernetes? That was my starting point. And I've been preparing for this since episode 25, October 2021. Andrew, welcome back to Ship It.

**Andrew Rynhard:** Thank you. I'm glad to be here again.

**Gerhard Lazu:** How are you?

**Andrew Rynhard:** I'm doing well. It's been -- wow, that was a year ago? It feels like five years ago.

**Gerhard Lazu:** Lots of things happened, yeah...

**Andrew Rynhard:** A lot has happened since then. But yeah, I can't say all of them were bad. Most of them were good, so... Yeah.

**Gerhard Lazu:** Okay. Well, we will dig into that. I won't press too hard right now, we're just getting started, but we'll dig into that. Steve, thank you for making the time to join us.

**Steve Francis:** Yeah, my pleasure. Good to be here.

**Gerhard Lazu:** I really appreciate all your help in the Talos community Slack. I had so many questions, and you answered some of them so well; it was super-helpful. Thank you.

**Steve Francis:** Yeah. My pleasure. It's actually fairly unusual that I get to answer the technical questions, because --

**Gerhard Lazu:** I know, right?

**Steve Francis:** ...I'm not really the technical person in the company... \[laughs\]

**Gerhard Lazu:** So what is your role within Talos, by the way? Because our listeners don't know.

**Steve Francis:** Yeah, so I'm the CEO. I've been with the company about two years. Before this, I founded logicmonitor.com, a SaaS-based data center monitoring service, which is where I've worked with Andrew before.

**Gerhard Lazu:** Okay. And now you're full-time with Talos.

**Steve Francis:** Full-time with Talos. I was one of the initial seed investors in Andrew's company, and it's just because I -- before LogicMonitor I used to run data centers myself,; I ran data centers for Citrix Online, and ValueClick, and some other big companies... So what Andrew is doing with Talos, Linux, I think is the most innovative thing I've seen in operating systems in the 25 years I've been doing it.

**Gerhard Lazu:** Wow. Okay. I'm sure it was more than just the tech that attracted you to Talos?

**Steve Francis:** Yes. Yes. I mean, Andrew, when I started, basically the company was Andrew and Spencer, who was basically the co-founder... And Andrew had just started. He was the lead engineer. So it was a very small company. But yeah, it was working with Andrew, and the innovation that he's bringing, and the approach.

**Gerhard Lazu:** So what was the hook, Andrew, from your perspective? What is your side of the story?

**Andrew Rynhard:** I don't know... I mean, I think Steve is just a nice person. \[laughter\] I thought the idea was crazy. It's a brand new Linux distribution, no Bash, no SSH... So really, Steve introduced me to another one of our angel investors, Saïd Ziouani. He was the CEO of Ansible...?

**Steve Francis:** He was founder and CEO of Ansible. Now he's the founder and CEO of Anchore.

**Andrew Rynhard:** That's right.

**Gerhard Lazu:** Wow. Okay.

**Andrew Rynhard:** So Steve put me in touch with him, and Sayid - he knows his stuff when it comes to open source; super-smart guy. And everyone just said "Okay, Sayid thinks this is a good idea", and Steve is a friend of mine, so he gave me that opportunity to talk to these people. He could have said, "No, you're just a gym rat jujitsu guy, and I don't want to put you in front of my friends." \[laughs\] But he did that, and so... Yeah. Now, I'm fortunate enough to say I'm the CTO of a company.

**Gerhard Lazu:** Okay. So just to make it clear, this was not the jujitsu winner joins, or winner -- it wasn't one of those things, like whoever wins...? \[laughter\]

**Steve Francis:** It was a challenge match, but I lost, so I got to be CEO. \[laughter\]

**Andrew Rynhard:** Yeah, loser is CEO. \[laughs\]

**Gerhard Lazu:** Okay. So I don't remember exactly where I've seen this, but apparently you, Andrew, have something in common with MMA. Is that true, or are those just rumors?

**Andrew Rynhard:** Oh, yeah, that's true.

**Gerhard Lazu:** Okay...

**Andrew Rynhard:** \[00:05:53.19\] So I was competing in mixed martial arts. I was training in San Jose, California. That's what I thought I was going to do. And long story short, I ended up deciding that I'm going to go back to school, and I got into UCSB for physics. And so that's what actually brought me out here to Santa Barbara. And I didn't do jujitsu for some time, I was kind of out of Mixed Martial Arts, and it was still very much a big part of me. I started dealing with a bit of depression, because your identity as a fighter - it's a big thing. You see a lot of fighters when they actually decide to not do it anymore, they don't know who they are. I felt that way a little bit. And so I've found a gym called Paragon out here in Goleta. It's a really world-class and renowned, well-known gym, and there was this tall, lanky, really strong Australian guy...

**Gerhard Lazu:** Called Steve?

**Andrew Rynhard:** Steve. Yes. Called Steve. \[laughter\]

**Gerhard Lazu:** Wow... Okay, I just guessed it. I've only seen the head, by the way. Nothing else. Wow, okay...

**Andrew Rynhard:** And so -- yeah, from there, I kind of got away from mixed martial arts, just because I thought that if I'm going to do things like with technology and whatnot, getting hit in the head probably isn't a good thing. In fact, in college I did a study on it. That was one of my reports, or whatever... And believe it or not, getting punched in the head over and over again can have long-term serious health effects.

**Gerhard Lazu:** Right. Who would have thought that?

**Andrew Rynhard:** Yeah, I don't know. I don't know. So I decided I wasn't going to necessarily compete ever again in mixed martial arts. I have three kids... It doesn't make sense. It's probably not responsible of me. I still do very much love the sport, and I still very much train for it, but... Yeah, competition days are well past.

**Gerhard Lazu:** I see. Okay. Okay. So tech it is. That sounds like a very sensible choice to me. Okay. So I'm just wondering, when there's an argument, do you ever settle it by jujitsu, I mean between the two of you, ever? Has it ever happened? \[laughter\]

**Andrew Rynhard:** It would be fun to say yes, but actually, we've never really had an argument, to be honest. I'm not even lying here. we get along very well. Again, going back - jujitsu, it teaches you a lot. I think martial arts in general teaches you a lot. It teaches you how to be confident, how to avoid confrontation... And Steve's a brown belt, I'm a brown belt... Getting a brown belt in Brazilian jujitsu is no easy task. It's very, very difficult, and along that path, you learn a lot of human social skills, or at least you're supposed to, in my opinion. And so yeah, that has helped us sort of navigate how to be friends, and also run a business together. And I think we do a pretty good job of keeping the two separate, and not letting one interfere with the other.

**Steve Francis:** Yeah. I mean, I would summarize the thing that jujitsu teaches you in a short term is you respect everyone but you're intimidated by no one. Whether they're above you in a hierarchy, in a business sense, you can respect them, but you don't get intimidated. You still speak your mind, or whatever. And that's what we want to embody in the company.

**Andrew Rynhard:** Yeah. That's great. I've never been able to -- Steve is like my translator oftentimes. He's much better with words. That's perfect. Exactly.

**Gerhard Lazu:** Okay. Well, I find it's fascinating how from jujitsu sparring partners, or sharing the same gym, you know...

**Andrew Rynhard:** Yeah, you could call it sparring partners. Yeah.

**Gerhard Lazu:** Very nice. Okay. Now, speaking about partners, I want to give a shout-out to two people that helped me navigate Talos OS. When it was ready, they were there. And this has been, as I mentioned, years in the making. Now, Georgie... How do you pronounce his surname? I'm not sure.

**Andrew Rynhard:** That is a great question. I'm not sure I ever said it out loud... \[laughter\]

**Gerhard Lazu:** Alright... Frezbo! Frezbo!

**Andrew Rynhard:** Yes, there you go, Frezbo. \[laughs\]

**Gerhard Lazu:** \[00:09:55.01\] Alright, so his surname is Frezbo. So Noel, thank you very much for all your help in the Slack. I mean, some of those answers were spot on. And of course, Andrey Smirnov, because he's everywhere, right? So Andrey is everywhere. So thanks, guys. I really appreciate it.

**Steve Francis:** I mean, all our staff are amazing. We have an amazing team. They're all really good. But yeah, Andre is -- I don't know how he does all the engineering work he does, because he is also extremely helpful in the community Slack.

**Gerhard Lazu:** Yeah. I think it really helps to feed that... Being close to your users, it helps you figure out what is missing. I mean, that's such a great approach. Okay.

**Andrew Rynhard:** Yeah. And it's just about being genuine too, I think. if you're gonna do open source, you should have, you should be genuinely concerned about the people that are using your product. Otherwise, open source becomes theatrics, in my opinion.

**Gerhard Lazu:** That's right.

**Andrew Rynhard:** We do open source because we want to be helpful. Of course, as a business we want to also make money...

**Steve Francis:** \[laughs\] Which is not really Andrey's view from a few years ago. A few years ago Andrey was like "No, we're pure open source. We're never gonna charge for anything."

**Gerhard Lazu:** I have noticed that, by the way. I have noticed that. That was very interesting.

**Andrew Rynhard:** Yeah. There has been a bit of a transition there, of course... But yeah, it's just about being genuine, and I think those two -- to Steve's point, our whole team is really good about that... But those two in particular seem to be more public about it. We're all genuinely wanting to make a really great product for all of our users, and to your point, it's about being there for them. So, yeah...

**Gerhard Lazu:** So back to my conundrum - again, first-hand experience; this was not set up... "One day I decided I'll go for this, and I'll see what happens next", which is one of my favorite approaches. So given a few bare metal hosts, with fast local SSD storage, the quickest way for me to get Kubernetes was Talos. I tried a few other things, but there is nothing simpler than booting the right image and running three commands. I'll start with the first one. Let's see how tech-savvy we are among the three of us. The first one, talosctl gen config. What happens next?

**Andrew Rynhard:** What does that do, is that the question?

**Gerhard Lazu:** No, what is the next one? There's three commands to run to get a node after it has booted to have Kubernetes on it. The first one is to gen the config. The second one is...

**Andrew Rynhard:** Apply config.

**Gerhard Lazu:** Correct.

**Steve Francis:** --insecure.

**Gerhard Lazu:** Yes, always. \[laughter\] Why? Why is it insecure? That's a very interesting point.

**Andrew Rynhard:** Well, at that point, we have no PKI.

**Gerhard Lazu:** Hmm, okay.

**Andrew Rynhard:** We have no certs on them. The configuration files that you just generated - they are not present on Talos, so we don't know how to secure the API yet. And so it's just sitting there, saying, "Hey, give me a configuration file. And once you give it to me, I'll secure myself on these ports."

**Gerhard Lazu:** Okay. That's a great one. The last command. It starts with a B.

**Steve Francis:** Bootstrap.

**Gerhard Lazu:** That's the one. That's it. Three commands.

**Steve Francis:** Bootstrap etcd. That's it, yeah.

**Gerhard Lazu:** Apply config bootstrap. And that's it. That's all it takes to get Kubernetes on a bare metal node. And by the way, this is open source. There's nothing to pay. Anyone can do this. I was so impressed, like --

**Steve Francis:** A lot of people do. \[laughs\]

**Gerhard Lazu:** And a lot of people do, exactly. So as simple as this sounds, I'm sure there's like a big story behind it to get to this simplicity. Who would like to start?

**Steve Francis:** Well, this is Andrew's story.

**Andrew Rynhard:** Yeah. Well, I guess the question is "Where do I start?" Where we're at today has really been the vision for me personally, where I wanted Kubernetes to be. It was a lot of fun learning Kubernetes using kubeadm, doing Kubernetes the hard way; it was fun. But that fun very quickly dies, and never returns when you're doing this in production. And so the goal has always been to make it that simple. But along the way, we've had to make a lot of big decisions.

\[00:13:57.23\] We started off with kubeadm, but kubeadm just fundamentally wasn't designed with the idea of a Linux distribution that is purely API and configuration-driven. So there was some weirdness in trying to shoehorn that into our paradigm.

So then we decided to go down to a project called \[unintelligible 00:14:13.13\], which was formerly a CoreOS project. It was self-hosted Kubernetes. So it would spin up a temporary control plane using static pods, and then using that temporary control plane you'd actually apply your control plane, which would be backed and stored within etcd. Then you'd tear down the old pods and then you have Kubernetes sort of managing itself. And that's as scary as it sounds. I thought it was really cool, but in practice, it was very much a pain, and so we decided to go away from that entirely.

We just really embraced the fact that Talos - yes, it is a Linux distribution, but really, at its core, it is a Kubernetes bootstrapping or whatever kubeadm and bootkube qualify themselves as. That's what we are. And so we just said, "Okay, we tried to be good citizens within the open source world, but the paradigm shift that we've made - it is pretty drastic, and we think for the better... But it also means that existing tooling doesn't work very well with us." And so we rewrote everything from the ground up. PID 1 is rewritten completely in Go, it is specifically built for this purpose. It's got the whole controller pattern within it, very much like Kubernetes read-only file system...

So it's been a long road to kind of get to where we're at today. Like you said, there's a lot going on under the hood to make it that simple. In fact, in our demos that we do for potential customers, we have to feel bad about how good and fast the demos go, because it's like - yeah, you've got a Kubernetes cluster on bare metal right now, running BGP with VIP for HA control plane... Okay, cool. You just did that in like three minutes. But that's the beauty of it.

**Gerhard Lazu:** Where's the rest? \[laughter\]

**Steve Francis:** Yeah, exactly. Unless they know how Kubernetes works and how complicated that is to achieve, if they're new to Kubernetes, they're like "Alright, well, this looks pretty simple..."

**Andrew Rynhard:** Yeah, exactly. They don't really know what they're looking at. So we're kind of -- yeah, it just puts us in a weird place. My demos are literally like "I know that's short, but that's the magic of it."

**Gerhard Lazu:** You've made it too good, Andrew. That's the problem. You've made it too good. Steve comes along, "What the hell? This is just too simple." \[laughter\] No, no, seriously, seriously... I mean, that is exactly where you need to start, because there's so much more that needs to lay on top of it. And you need some very solid fundamentals on which to build. And having the operating system redesigned from scratch to be Kubernetes... I mean, there is a separation, obviously, between Kubernetes and the operating system... But that is so nice and clean that you almost don't even see it.

I mean, being able to talk to your operating system through CLI only... Okay, it has an API - sure, you can talk to an API. But the CLI is there to talk to that API... That's it. I think that's what everyone -- like, why package managers? Seriously.

**Andrew Rynhard:** Exactly.

**Gerhard Lazu:** I mean, that's what we used to do 20-30 years ago; surely we have moved on since then, right? \[laughs\]

**Steve Francis:** We don't... We just want to build out VMs for everything. \[laughter\]

**Gerhard Lazu:** Exactly, yeah. And you just throw away so much complexity; even when it comes to networking, there's so much stuff happening just in that stack, never mind everything else - storage, securing whatever boots... It's just like, it's never-ending. And good luck configuring all of that. It doesn't matter what configuration management system you use. There is a lot of complexity there. Okay...

**Andrew Rynhard:** \[00:17:52.24\] Yeah. It's ten different files, and depending on which distro, it's network manager, or it's just good old \[unintelligible 00:17:59.20\] files... To your point, I think at that layer of operating -- like, the operating system layer, like you said, this is a 20, 30-year old way of managing this. If we're going to get beyond things like climate change, and these types of things, fix real problems, we can't be sitting here worrying about building RPMs and doing package managers. The Linux distributions and the fundamental way we run technology needs to be just forgotten about; it needs to be "That's the way it is." And the best way to do that, in my opinion, is to make it so simple that it doesn't even matter. It doesn't really -- it's not really a thing.

But when you allow a human to get onto a machine, we have a tendency to love everything that we can interact with. We want to make these servers special, and name them after Lord of the Rings characters... But by just simply getting humans off of the box, we've already kind of cut that emotional tie, and it allows us to start thinking about the next layer of things that we really need to solve, to really do things at the scale we need to land on Mars, or something like that. I don't know.

**Gerhard Lazu:** What is your perspective, Steve? ...because you've seen data centers from every which angle. How does this fit in that world?

**Steve Francis:** Oh, this is the way it should be. I mean, I started with configuration management tools way back in the day of CFEngine, when it was a small open source project, and I've been through all the Chef and Puppet and everything. One of our large enterprise customers who has many fleets of servers - I'm always asking them, "Why run on Talos?" and his answer was basically this; it was because even when you run a configuration management tool, and you have set everything you want in a Linux server, it's controlling Result.com, \[unintelligible 00:19:56.07\] and everything else, there's always going to be something that you haven't thought of to control, that some sysadmin is going to come through and change, that is going to superficially work and then break on the next upgrade. So in his case, they were talking about the fact that they have one particular cluster, and someone came through and set the RAID controller to caching mode. And it wasn't supposed to be, because it was supposed to be a highly available system, with redundancy, and they wanted the data to persist on the disk. But that wasn't managed by their configuration system. And so that caused an outage, and they lost data, and bad things happened. So that was one of the systems that they've moved on to Talos/Kubernetes. And now it's like "Oh, you want to change the caching controller, you kind of SSH into the box and use the RAID admin tool." So that whole avenue of people making things special snowflakes is just cut off... But it improves their system reliability a lot y basically keeping humans out of the equation. Humans are the ones that mostly break things.

**Gerhard Lazu:** Yeah. And at least you should have a trail, like "Why did we do this change?" Can we track it via version control in a way that everyone sees, everyone understands? Can we maybe add some pictures to the thing? That's like the human side of things, rather than an admin changing something somewhere, not telling anyone, and his job is secure, because only he knows how the thing works...

**Andrew Rynhard:** \[laughs\] Yeah. Right.

**Gerhard Lazu:** Okay... So what is part of the operating system? Because the operating system is really, really small.

**Steve Francis:** Well, our operating system is really, really small. Talos Linux is.

**Gerhard Lazu:** Talos is really small, yes.

**Steve Francis:** A generic Linux... Systemd is basically an operating system. \[laughs\]

**Gerhard Lazu:** Oh, my goodness me. Oh, that was like one of the things. I think it's the second thing. The first thing was SSH. Not having SSH is such a good thing. You don't even have to worry about securing something that doesn't exist. Like, that's just the best. Okay.

**Andrew Rynhard:** But yeah, the operating system really is just the PID 1, and a Linux kernel. There's some magic you've got to do with the initial init that the kernel loads, and then you switch route after setting up base pseudo file systems like dev, and proc, and whatnot. But to your point earlier about networking being a big part of how you manage Linux - honestly, that's where most of the complexity within Talos exists. Otherwise, it's pretty simple.

\[00:22:18.22\] It's funny, because a big reason why Talos Linux exists today is because I was learning Linux from a project called Linux From Scratch. Basically, it's exactly what it sounds like - you build a Linux distribution from scratch. And in that process, I learned that Linux is actually very, very simple, at the end of the day; it's very, very simple. But Linux distributions have made it complex, and they've made it sort of tribal by having a love for a certain package manager. And that's really the only difference between any two Linux distributions. So really, Talos throws all that out. And so it's just as close to the Linux kernel as we can get as possible. And the init system just gives you mechanisms or knobs and buttons that you can turn and push in order to configure the kernel, ultimately - because that's what Linux is - but in a well structured way, instead of free-handed, and between any two files you have tabs, or spaces, or comma delimited... This is a nice, structured way of doing it.

So that is Talos Linux, that is our operating system, is just putting some structure in front of Linux with an API, and a more complex networking stack, that's interpreted, or at least directed by the configuration file. And that's the bulk of Talos. And of course, there's some operational knowledge too baked within Talos, like protecting you against doing stupid things with etcd. So imagine you're trying to upgrade two of your control planes at once, and that means -- well, let's assume you have three; that means etcd is going to be down because it doesn't have quorum... It will stop you from doing silly things like that. So there's some operational knowledge baked into it as well, that makes it a little bit unique, but it's simple at the end of the day, really. It just took a lot of work to get here.

**Steve Francis:** Yeah, very minimal. One thing I like to throw out there is Talos Linux I think on it has something like 32 binaries installed on the whole operating system, most of them to deal with file management, loading file systems...

**Andrew Rynhard:** A lot of them hard links, too.

**Steve Francis:** That's true. So they're duplicates. A typical Ubuntu install has like over 3,500 binaries, executables installed. So that's a lot more things that can attack, and be misconfigured, and need to be secured. Just things to go wrong. The less code there is, the less to go wrong.

**Break:** \[00:24:39.17\]

**Gerhard Lazu:** We talked about simplicity, we talked about networking, and this surprised me in the best possible way... Not initially. Initially it was like a WTF moment for me... But I was thinking "How the hell do I cluster these things?" And, okay, Omni has something to do with it, and we will leave this for slightly later... But Talos has KubeSpan. And KubeSpan just blew my -- I didn't realize it was that simple. I was like "What am I missing? This can't be it..." And it's a piece of technology... Spoiler alert, it's WireGuard behind the scenes, which I love... Like, having dealt with OpenVPN, and IPsec, and a bunch of other things, I was like "Oh yes, please, let it be WireGuard." So it was like a Christmas wish for me. Like, if I have to deal with it, just let it be WireGuard. And the way nodes cluster is incredibly simple. I wasn't expecting it to be that simple... So I was like "I must be missing something."

So when you first mentioned it to me, Andrew - this was, again, October 2021. You only had just released it; it was like a new thing.

**Andrew Rynhard:** Yeah, that was really new.

**Gerhard Lazu:** Yeah. And I was like "Wow, this is amazing." And now, having it experienced via Omni, that felt like magic. It just didn't feel real. So do you want to tell us a little bit about KubeSpan now? Can you expand on what you told us in October? Because I'm sure you remember what you told us a year ago... \[laughs\]

**Andrew Rynhard:** I'm sure, I'm absolutely certain that I don't. But let's see if I do. Let's see if I can be accurate. So yeah, KubeSpan, as you've already said, is really built on top of WireGuard. But the harder part of WireGuard is just doing like key distribution, and making other nodes aware of other nodes, and really orchestration. But WireGuard is incredibly fast, secure... It's really, really great.

So KubeSpan just really is orchestration for how do nodes discover other nodes, and how do we automatically configure WireGuard, and how do we do key exchanges? And so there's this lightweight discovery service that we run, where Talos will actually encrypt a blob of data, which ultimately just teaches other machines about itself, and they all sort of send their information there, congregate there, get information about each other from there, decrypt it using their keys, and now they know all the IP addresses of those machines, and they can go and communicate with them using WireGuard. It's actually really, really simple. It's just really taking WireGuard and trying to make that simplified for people. But WireGuard really is the magic, and it's literally just a boolean flag within Talos. It's no "Generate this key, and put this in etcd, and then run this daemon." It's just KubeSpan enabled = true. And then you're done. It's really great. It does feel like magic.

**Steve Francis:** Works across networks, behind firewalls... It's pretty slick.

**Gerhard Lazu:** That's in itself a piece of magic. WireGuard in itself is not as complicated as OpenVPN or IPsec to configure, but it still has its complexity. But KubeSpan - I mean, as Andrew says it, it's just a boolean. I mean, I was thinking "Surely, there must be more to this." There wasn't. I was like "Where's the rest, damn it? The docs don't have anything... I don't know. Does it work?" And everything just worked. So that was a very nice surprise.

**Steve Francis:** Were you running in multiple locations that you needed KubeSpan?

**Gerhard Lazu:** Yeah. So this is it. So I told you before we started recording that we have four guests here... This is the moment.

**Andrew Rynhard:** Alright.

**Gerhard Lazu:** Alright, everybody...

**Andrew Rynhard:** Wow. Wow, that looks like some hardware right there... What is that? I mean, it's a computer, I think... \[laughs\]

**Gerhard Lazu:** It is. Okay... So one of my Christmas presents - or shall I say two of my Christmas presents - were an open bench table...

**Andrew Rynhard:** To yourself, right?

**Gerhard Lazu:** To myself, of course... No. My wife got it for me. She knew exactly the color to get. Black. \[laughter\] Okay, so open bench table, fanless Sea Sonic PSU. Is that the right way up? It is.

**Andrew Rynhard:** It is.

**Gerhard Lazu:** Fanless \[unintelligible 00:30:38.13\] A very old EVO 870... No, this way. SSD. That's for storage. There's an SD card... And this motherboard - it's one of my first supermicros. I'll have it forever. It's an X9SCA-F. It's 11 years old. Well, it will be 12 years old by the time this episode comes out. It was also a Christmas present, by the way. It was one of the first Xeons, the E3s, 1230... Max it out, 32 gigs of RAM... And this baby got Talos.

**Andrew Rynhard:** Nice!

**Gerhard Lazu:** So this is one of the Talos hosts. Three network cards. An IPMI, and two 1 gigabit ones. It's a beauty. So yeah, I'm a proper hardware nerd, as you can see... And I have it for a long, long time. So that's one of the hosts. Let me just put it down.

**Andrew Rynhard:** Is that for your home's use cases?

**Gerhard Lazu:** That is, yeah.

**Andrew Rynhard:** Okay.

**Gerhard Lazu:** \[00:31:40.20\] Ask me about my NixOS afterwards. I have another completely fanless system, AMD build, crazy NVMe drives, whatnot... Anyways, that's another story. And that is one of my Talos nodes. The other one is, again, a bare metal host, running in a data center... And I'm still missing a third one, to create my quorum... Which is where a lot of my issues started, because I was starting with a single node, which was a control plane that had to schedule workloads. And that's where a lot of the help came... And "Yeah, you can do this, you can do that", and there's like a few gotchas... For example, you have to boot... So you have to apply the config to the control plane first, if you want to configure it to run workloads. Because once you apply it, and then you apply it again, it won't fully do it. Again, it's like me doing things that were not anticipated. But it's possible; like, all of those things I worked out, and whatnot... So that was really, really good.

Now, some people use Raspberry Pi's for this. I don't think many people use bare metal hosts. But what do you see the typical workload where Talos shines?

**Andrew Rynhard:** It's certainly bare metal, and fast becoming edge. You've already spoken about Omni, and I'm sure we'll get into that at some point... But in particular, Talos in combination with Omni, edge is starting to become really, really powerful. And in fact, I think Talos, in those two use cases, bare metal or on-prem, I would - say not necessarily bare metal; that could be VMs - and edge, and in combination with KubeSpan, there are some architecture designs that simply people would never have thought of doing before, because of the complexity and potential things that go wrong. But with Talos Linux, it's just there. It's possible. And so it starts exposing limitations in other projects out there in the world, but we can get into that later. But certainly, I would say bare metal, on-prem VMs, and edge. Which is a shame, because Talos works just as well in the cloud. I mean, it's literally the same image; you can get the same exact benefits of Talos within the cloud, but it's just -- it's not quite as popular as the aforementioned places that Talos is really popular.

3:Yeah. I mean, there's not so much of a compelling use case. If you're running in the cloud, you're probably running on EKS, or something like that. We certainly do have customers that say, "Alright, I'm in all the clouds, and I want to unify my management across them, and so I'm going to use Talos." But most people that are in the cloud, they just use their native cloud provider, which is usually the right thing to do.

**Andrew Rynhard:** Yeah, it makes sense.

**Steve Francis:** But the other thing - you alluded to this before - Raspberry Pi's, we have lots of people in the Kubernetes at home community that run Talos on Raspberry Pi's, and other small SBCs.

**Andrew Rynhard:** And they're a great community, too. They're a really great community; they give us great feedback all the time... I'm in their Discord; they're probably like "Oh, great. Why is this guy watching over everything? We can't talk about it..." I hope they do talk about it; that's where I get a lot of inspiration. But yeah, the Kubernetes at home users are a really great group of people.

**Gerhard Lazu:** Why do you think they use Raspberry Pi? Why is that so popular?

**Steve Francis:** Well, it used to be cheap... \[laughs\]

**Andrew Rynhard:** Yeah, exactly what I was gonna say. I would say affordability, some small footprint... They're not noisy... I have a supermicro in my closet, and I can't sleep with that thing on it. It's loud.

**Gerhard Lazu:** I know what you mean.

**Andrew Rynhard:** I love having the power, and it's fun, but I also like my sleep.

**Gerhard Lazu:** Yeah. Fanless.

**Andrew Rynhard:** So something like a Raspberry -- yeah, fanless... And Raspberry Pi's are really, really great for that. And it's just kind of fun knowing that this small little board is running... Like, for me in particular too, just knowing it's running Talos Linux, a single Go binary and a kernel, and it's spinning up Kubernetes, and it's just on this little thing that's in the palm of my hand... It's really, really fun. People build these cool little stacks, you stack them on top of each other and stuff like that, and put fancy LEDs and whatnot... So yeah, I think there's an element of fun, and it used to be more affordable as well, for sure.

**Gerhard Lazu:** \[00:36:11.08\] Yeah. I mean now, if you want to get like a decent one, they're crazy expensive, by the time you add all the things.

**Andrew Rynhard:** Yeah.

**Gerhard Lazu:** I mean, it was cheaper for me to get like a fanless PSU, and an openbench, that to get all like the Raspberry Pi equivalent... And this thing aged really well. Again, it's going on 12 years, and it can still run pretty much anything.

**Andrew Rynhard:** That's awesome.

**Gerhard Lazu:** You know, eight cores... Okay, they're hyper-threaded. 32 gigs of RAM... Okay, it's DDR3, slightly slower, but put a fast SSD on it and you have two one-gigabit cards... I mean, there's no Raspberry Pi that has two -- so you can use two networks at the same time, which of course I would have, because... You know, you want two fully redundant networks in your house, of course; and two fiber lines, and all that. All that to run Talos... \[laughs\] No, no, I have big plans for it. But anyways, let's see how it goes.

I mean, the beginning was important for me. The beginning was taking something that was meaningful to me, and taking it into production, like my production, which right now, as I said, it's like nine Digital Ocean droplets. All of those can be collapsed in a single bare metal host. But you can't have just one, right? You need to have another one, which acts as a backup. And this brings me to the next point. What is the CSI that you typically see being used with Talos? What is the storage interface, and how is storage exposed to Talos?

**Andrew Rynhard:** Yeah, so the typical one that we recommend is Rook CEPH, largely because it's battle-tested, and we have some familiarity with it as well. We also recommend a couple of projects from OpenEBS, their Mayastor project, and their Jiva...

**Steve Francis:** I pronounce it Jiva, but...

**Andrew Rynhard:** Okay.

**Gerhard Lazu:** Like JIRA. JIRA, but there's like a V instead of an R. Yeah, JIRA.

**Andrew Rynhard:** It's definitely Jiva for me now.

**Gerhard Lazu:** Okay, great. \[laughs\] I'm glad we settled that one.

**Andrew Rynhard:** Anyways, those three in particular, but probably in that order, I would say. Actually, Jiva is probably becoming more popular than their Mayastor. So yeah, Rook CEPH... And there is a lot of people that think that because of the way Talos is designed, and its restrictions and whatnot, that storage is just not going to work. But at the end of the day, our goal is to get out of the way to allow you to do the things that you need to do, and storage is obviously one of the most important things that you need to do. And so if you can run a CSI within standard -- I don't want to say standard Kubernetes, but non-Talos Kubernetes, by and large you can run that within Talos. But there is one place where it's a bit of a caveat, and there's a couple of \[unintelligible 00:39:00.16\] CSIs that just simply won't work with Talos, because they make some really big assumptions about what they can do. And in my opinion, really bad practices. They assume that they can actually escape out of their container, literally NS entering into PID 1's namespace, and going so far as figuring out what operating system am I running on, so they can figure out what package manager to use... And doing a yum, or dnf, or apt install to install whatever they need in order to use their CNI. That's just a big gaping hole in security that I'm not comfortable with...

And so there are some of them that do make these assumptions, that there's Bash, they can break out of their containers, but we're working to stop those, and we will never support those, in my opinion. So yeah, again, our goal is to get out of the way, and by and large, the CSIs will work.

**Steve Francis:** Out of the way, but not to sacrifice security.

**Andrew Rynhard:** Yeah, exactly. Yeah.

**Gerhard Lazu:** \[00:40:04.05\] I know that security is a big deal in Talos... Can you tell us a bit more about that, Steve?

**Steve Francis:** No. But Andrew can. \[laughter\]

**Gerhard Lazu:** Okay, alright. That's great. Okay, so no, hang on, we have to find --

**Steve Francis:** I mean, Andrew can tell you all the drivers and parameters and everything, and when it comes to me, I can tell you it's very secure. \[laughter\]

**Gerhard Lazu:** Correct. Okay. So it's a very high-level -- it's very compressed; that's great, right? Because when you talk to other CEOs, that's what they want to know. "Is it secure?" "Yes." "Great! Next point..." \[laughter\] Alright. Okay, so Andrew, you had a slip there, and I'm glad that you did... You mentioned CNI in the context of CSI. Let's talk about CNI.

**Andrew Rynhard:** Oh. I did. Sorry.

**Gerhard Lazu:** So Flannel, as far as I know, is the default CNI in Talos. Why have you chosen Flannel?

**Andrew Rynhard:** Really, it's simple. I mean, it's gonna have the most coverage out of the box. It's just kind of works, and it doesn't have a lot of bells and whistles, and that's a good thing for the standard or default experience with Talos. Cyllium is also a very, very popular combination with Talos. If you're the type of person who finds Talos interesting, you're kind of naturally going to be the person who finds Cyllium interesting, because it's --

**Gerhard Lazu:** Absolutely. "How do I replace Flannel with Cyllium?" is my next question... \[laughs\] Let's skip to that part.

**Andrew Rynhard:** We can. Yeah, that's simple. I mean, really, you just teach Talos "Hey, don't install Flannel, and instead use this URL to install the CNI, at the point in which CNI is required to be installed." And so you just host your manifest somewhere, Talos will pull them, install them, and basically replace Flannel that way.

We are thinking about having more native integrations in the future, but it's not on the near-term roadmap... Cyllium being a high, sort of a really interesting CNI that we could hopefully partner with even, but offer a native, out-of-the-box experience and just have it say "CNI = cyllium". And we have baked in manifests to do that.

**Gerhard Lazu:** Okay, that's a great question. What about -- again, still specifics, but we are very close to going high-level again... What about Metal LB? What about the load balancer? Because that's typically used in the context of bare metal. So what are your thoughts there?

**Andrew Rynhard:** We recommend that all the time. I think MetalLB is a really great project. I love it. It's simple, it's well built, well designed, and we recommend it all the time with Talos.

**Gerhard Lazu:** Okay.

**Andrew Rynhard:** Yeah, we talk about it all the time; I have nothing bad to say about it. It's just "Use it. It's great."

**Gerhard Lazu:** Just go for it. That's very nice. Okay.

**Andrew Rynhard:** Yeah.

**Steve Francis:** Talos delivers vanilla Kubernetes at the end of the day, so you can run whatever your choice is of any of these capabilities. We will probably have easy defaults, so it's like the default install; unless you say otherwise, we'll install MetalLB on bare metal, and maybe let you configure a different CNI that includes storage... But right now, it's just vanilla Kubernetes, done really simple, really securely.

**Gerhard Lazu:** That is a great starting point. And again, everything that I've tried so far, it worked really well. And I wasn't expecting it to be that simple and straightforward. Now, there's a lot of blanks to be filled... And that's on purpose, right? Because you can't know what CNIs people will choose. And if anything, you maybe mention "Hey, this person or this use case, we are aware of this being used." Again, I think it's usage, people talking about it... That's something which I'm hoping to do a bit more as I'm continuing on my Talos journey, sharing how did I change my CNI, and why did I pick one versus the other... Because it's a real production, with real needs, that the majority will have. What about MetalLB? How did that work, and what does it look like in practice? So are there things that you typically see your customers install on Talos? ...like some common, common things.

**Andrew Rynhard:** \[00:44:14.09\] Yeah, definitely. We've kind of touched on them already. MetalLB is definitely common. Rook CEPH is definitely common. What are some other ones? Definitely ingress controllers, obviously. The NGINX one is great. That's the one I've used. It works very, very well.

**Steve Francis:** The usual monitoring and logging...

**Andrew Rynhard:** Yeah. Prometheus, Loki, Grafana... Sort of the cool crowd of all those day two operations tools. Those work just fine on Talos, and they're definitely popular with Talos.

**Gerhard Lazu:** Okay. So again, continuing on this high-level trend... What use cases is Talos known to work very well for? And if you have a couple of specifics, go for it. Steve, maybe this is something that you can share with us, some use cases that you know, that are okay to be public, maybe...

**Steve Francis:** Yeah. Bare metal... So people like bare metal often for either latency of performance, or geographic latency. So Talos is extremely low \[unintelligible 00:45:14.17\] because it's such a small operating system, it itself uses very minimal resources, and leaves the rest for the workload... So we have some video game companies running on top of Talos, because they want the most performance they can, and they want to run it on bare metal; we have some defense work going on for similar reasons... The military has lots of money, but a lot of their compute resources are running on things older than the board you introduced us to... \[laughter\] So they need to run modern software on old hardware, because their procurement times and deployment times are so long... So they want the most effective use of the resources they do have. And edge deployment has become quite big, approximately in the last six months; that's really taken off. A lot of that's due to Omni, but also a lot of it is just people running Talos on very small form factors, very simple... It's got to be kind of appliance-like running on an edge, where they don't have skilled IT resources to go and do whatever... And it's got to be, I'd say, in a hostile location, kind of, so they want to keep it secure, and just "Alright, if something goes wrong, turn it off and turn it on. We guarantee it will be back to the state it was before." So those are kind of the big ones.

**Gerhard Lazu:** Okay. Okay. We've mentioned Omni a couple of times... I think now it's the moment to talk about it. Steve, do you want to continue?

**Steve Francis:** Yeah. Well, so Talos does make setting up a Kubernetes cluster really simple. Omni makes it next-level simple, where it's really -- so Omni is our SaaS service for the installation of Kubernetes. So the way it works is you log into your Omni account, your SaaS portal, you download the installation media for a Raspberry Pi, or an ISO for a bare metal, that you can put onto a USB or whatever, or an AMI for Amazon, or Google, or Oracle, or wherever you want to run your compute resources... So basically, you boot your machine wherever it is off that image, and that's basically it. So that image that you've downloaded has built-in WireGuard endpoints, and joint tokens, so as soon as the machine boots, it registers with your Omni account, and it shows up as an unallocated machine in your web portal.

And then, all you do is you go into your web portal, if you want to make a new cluster, you go to your unallocated machines and say "This one's a control plane. This one's a control plane. This one's a control plane. Worker, worker, worker, worker, worker. Go. Create cluster", and that's it.

And WireGuard gets deployed, KubeSpan is configured, Talos is installed, Kubernetes is installed, the cluster is bootstrapped... But that all happens automatically; you get a nice management GUI where you can see performance, and nodes, you can run upgrades... It's really simple, really slick.

**Gerhard Lazu:** \[00:48:01.13\] Yeah. That is the one thing which, again, I was expecting... Because I started with the open source one, and I was expecting there to be more things to do... But once I realized that "Hang on, the image which I downloaded, that is mine, was generated for my own account", and as soon as that image boots, it's ready to go. It will show up in the UI. It's all configured, it's ready to literally just set it up. And I was expecting the Talos CTL port, the 50,00 to be open... Nope, no such thing.

**Steve Francis:** No, because all the authentication is done through the SaaS account. So it ties into your authentication provider, Google, or GitHub, or whatever. So you can have multiple users going in. And if someone leaves your company, you don't have to lock down all your Kubernetes clusters and take away their tokens. It's just like they can no longer authenticate through the account, and they can't connect directly to the machines... So we're good to go. Security is kind of paramount in this design.

**Gerhard Lazu:** Yeah. That was the first thing which got me. I was thinking "Why does my Kube CTL not work? Why does my Talos CTL not work?" And for the Kube CTL, it was like really simple. Just a matter of \[unintelligible 00:49:09.18\] install the plugin, and off you go. Because it needs to authenticate with Omni. And that was like a small gotcha for me there. But once I figured that out, it was very easy. Okay, so are you supposed to manage those nodes with Talos CTL? ...once Omni manages them. How does that work?

**Steve Francis:** In general, no. Because Omni is going to be the source of truth, so it's going to reconcile the state of machines to the state that it knows about. But if you do something kind of out of band using Talos CTL and change the configuration of the machine, Omni is going to reconcile it differently, and override, which is why we don't allow that level of direct access to machines through Talos CTL.

**Gerhard Lazu:** So you're the second person telling me that. It is definitely true, because Andre told me exactly the same thing. I was like "Hey, Andre, what's going on here?" And he said, "Yeah, I mean... Omni manages that." So yeah... Even when you specify a node, like -n, you need to figure out which one to specify, and then certain commands don't work... So that was by design.

**Steve Francis:** Yeah.

**Gerhard Lazu:** Okay.

**Steve Francis:** But you can get all the information from your nodes, for sure.

**Andrew Rynhard:** Yeah, we wanted to make it -- you can still debug, of course, with Talos CTL; that's still really, really important. But when you're managing Talos nodes with just Talos CTL, you're forced to think about them as individual nodes still, where with Omni, it gets us a centralized place to think about these things in more broad strokes. So you could just say, "upgrade my cluster to this version of Talos", and we have the logic to roll that out in the same way, instead of you rolling that yourself and writing Ansible playbooks, or whatever your poison of choice is.

**Break:** \[00:50:55.17\]

**Gerhard Lazu:** So there was KubeSpan in 2021, there was Omni in 2022... By the time this comes out, it'll be 2023; the first episode for 2023. What can you tell us about the things that you're thinking about for 2023?

**Andrew Rynhard:** Wow. We literally just had a meeting about this this morning; like, that was literally 20 minutes before this.

**Gerhard Lazu:** So timely! So timely. Great timing. It's meant to happen.

**Andrew Rynhard:** I don't know if I've had enough time to really digest what I should say publicly... But I definitely think things like making Talos even more secure is high on our priority list, secure boot being one of them; looking at things like integrity measurement architecture, where we can actually remotely attest to every single file that is Talos... And you can cryptographically attest that this is this version of Talos, and there's no way it can be otherwise. And having like a way to attest to that in Omni, and having a green little checkbox, and when you click Download Isolation Media, it's all encrypted with the key that's unique to your account... And just securing it all the way up through the workload. Workloads are obviously another -- they're another beast entirely, because we don't have control over those types of things... But we want to give people the ability to extend it to their workloads as well.

So I would say just security in general is always a thing that's on our list. Steve, I don't know if you have anything that stuck out to you in that list?

**Steve Francis:** No. I mean, security is the main thing, including \[unintelligible 00:52:38.06\] now, but it's not as smooth as we want it to be, or some of our customers want it to be... But in general, Omni will certainly be our focus for the next six months. It's still in beta right now. It'll be GA hopefully by the end of this month. Yeah, there's some features to roll out into \[unintelligible 00:52:59.17\] a new product there's always going to be a whole bunch of new things we'll be adding on in the short term, as we find new use cases and customer requests... But it's going really well. I mean, it's still in beta, we've already got a couple of contracts for it... So we're very pleased; it's been very well received.

**Andrew Rynhard:** Yeah, Omni is definitely in the 2023 list. I'll just add one more thing that I think is exciting for our users, for our old-school users... And that is that we're going to be looking at breaking up the Talos config into multi-doc YAML. So if you need to configure an interface, it will be of kind interface, or something to that effect, and you can push that to Talos and manage those independently of each other; have it completely be reactive, being able to do some of those things while still in maintenance mode, like configuring network, so that you can even start to think about how to join a cluster... So making the configuration management story easier, stronger, better, faster, is something that I'm personally really excited about, and that's something I think we'll definitely do in 2023.

**Gerhard Lazu:** Wow, that is super exciting. That's the one thing which I was wishing for, but there's like a couple of other things... Because you're right, they're like individual components; it's starting with desks. So you don't always have to apply the whole machine config just to modify the disk. That makes so much sense. And even though it's great to just have YAML to work with, and you can see the diffs and whatnot, being able to target only a subset of your system is super-powerful. And then if you do make a mistake, it's only within that specific thing; it's not like everything.

**Andrew Rynhard:** Exactly.

**Gerhard Lazu:** If there's a failure in here, and was it applied... So yeah, it's a lot more atomic, and that makes a lot of sense.

**Steve Francis:** Yeah, you said it's great to work in YAML with a straight face. So that was -- \[laughter\]

**Gerhard Lazu:** Yes. Now, now, now... I have a love/hate relationship going back about 10 years... So I've been through all the cycles. So I've been down there, I've been like in a ditch, in the hole, and I'm back up again, and like through the plateau of disillusionment, and all of that... So I'm where I need to be; it's just YAML at this point; it's like Bash.

**Andrew Rynhard:** Yeah. Right, exactly. I was just gonna add that it does open up some interesting opportunities as well for our users, where you could build controllers that Talos could load up very early on in the boot process, and they contain business-specific logic, and almost like CRDs, you can have a configuration file that that controller knows how to take care of, and you just submit it to Talos... Talos doesn't necessarily -- core Talos doesn't need to know how to handle it; that controller that you've embedded into your custom version of Talos could. And that could be whatever you imagine you want that to be. A controller for your BGP configuration... Who knows?

**Gerhard Lazu:** \[00:55:52.26\] Yeah. Okay. Now, the one thing which I should say is that I did manage to upgrade from 1.27 to 1.30. And again, there's like a theme here, because I didn't realize just how simple the whole process was going to be. The only gotcha was that I had a single node. And there's a safety feature to prevent a single-node etcd from going down. That was it. Like, once I had that part figured out, it just nicely rolled through.

So upgrades, which tends to be a very complicated thing, was fairly simple now. I didn't have many workloads, so maybe when there's more workloads... But you have like a nice, graceful shutdown, I could see all the steps it was going through... It's really well thought through; it's as if you've been doing this for more than two or three years. \[laughter\] Okay...

**Steve Francis:** Andrew's been working with Kubernetes for a long time. At LogicMonitor, he was the one that spearheaded our move onto Kubernetes...

**Gerhard Lazu:** Really?

**Steve Francis:** ...so that was probably what Kubernetes 1.10, or something like that...?

**Andrew Rynhard:** That was 1.7... And I think that was like my first official job in software, even though I was like studying software on my own for 10 years before that...

**Gerhard Lazu:** Wow...

**Andrew Rynhard:** I just loved Linux, and I think I was like six months into my journey there... And so for better or worse, I was put in charge of Kubernetes there. But it ended up actually working out really well.

**Steve Francis:** And you got hooked.

**Andrew Rynhard:** Yeah.

**Gerhard Lazu:** Wow. Can you imagine not using it? Can you imagine not using Kubernetes, using something else?

**Andrew Rynhard:** I can, yeah. Absolutely. I think it's dangerous when you start to put anything in life as the ultimate answer to everything. I think Kubernetes certainly has its pitfalls and downsides to it... I do think it's the best thing we have today. I also don't think it's for every use case out there. That being said, I don't live by that, and I definitely just use Kubernetes anyways, because it's what I'm familiar with... Again, going back to humans doing what they love, and avoiding all reason and logic because they love it... But yeah, I could definitely see a place without Kubernetes, and dare I say a Talos version without Kubernetes... I don't know. We'll see.

**Gerhard Lazu:** Yes, that's exactly where I was going with this. Okay. Okay. Okay. So let's talk about this after we stop recording. And listeners go "Noooo...!! Keep that in!"

**Andrew Rynhard:** That's how you're gonna keep them hooked for the next episode.

**Gerhard Lazu:** Yeah, exactly. There will be a follow-up, okay? That's a promise. That's a promise. Okay. Okay. What would you like from your community? What would you like to see from your users? Is there anything that you want to share with them, for those that are listening?

**Andrew Rynhard:** \[00:58:36.24\] I mean, first of all, I just want to say thank you. I vividly recall - and this is a big thing to say this, because I don't remember yesterday... I think from getting punched in the head for all those years, my memory is not great. But I vividly recall the day that I decided I was gonna put Talos out into the world. I was sitting at my old house, on the couch, it was a Thursday night, I think it might even have been like Valentine's Day, and it's probably not what I should have been doing on Valentine's Day, coding on a Linux distribution... I have a wife...

**Gerhard Lazu:** You had to get it out there. You had to get it out of your system so you could focus on other things.

**Andrew Rynhard:** Exactly. Exactly.

**Gerhard Lazu:** That's a legit reason.

**Andrew Rynhard:** There you go. Thank you. And so I made a Reddit post, and I went to bed, and the next day I wake up with all kinds of notifications. It's on the front page of Hacker News, and it's just like "Wow!" I genuinely thought people were gonna say, "This guy is out of his mind. Why would he create this? This is the stupidest thing I've heard of." And then literally, two months later I'm founding a company. So first of all, thank you to the people who -- we actually dove into what makes us kind of, I guess, special, and we paid someone to help us with this, and they found out that it is, by and large, the philosophy and just the way of thinking behind Talos that our users identify with. And it really, really resonates with them.

So first of all, just thank you to everybody for making that happen. And also, our community has been really great on Slack. I think I've only had to kick one person out, ever. And that was relatively recently, and we've had the community going well for four years now. Everyone's helpful, they want to help each other... It's just a really -- it's a fun little community to be in, and so I'm just really appreciative of that. And I think that's really what it's about. I don't know, Steve, if you have anything you'd want to add?

**Steve Francis:** No, I'm super-appreciative of the community. We seem to have reached the point where there's enough of a community now - there's 1,400 people on Slack, or whatever, and they help each other out. They give really good, detailed answers, and they take the time, and there's a lot of people that have done a lot of use cases that we haven't tried. Someone was asking about \[unintelligible 01:00:53.23\] running on Talos. And someone else answered, and said what they did, and what issues they ran into, and how they got around them... And it's just like, we've never even looked at that. So the community is coming along really good. They should just tell their friends to spread the word.

**Andrew Rynhard:** Yes.

**Gerhard Lazu:** Yeah. Well, that was part of the reason why we're doing this, because I thought you were onto something... And it took me awhile to make time to dig into it, and then take my time to properly look into Omni, go through my \[unintelligible 01:01:27.23\] a few nights. That was really hard. On macOS Monterey, and... Oh, my goodness me. And NixOS... Anyways, I go through, I now have my cluster, and it's bare metal, and it's glorious, and I can hardly wait to add more workloads to it... And then share it with everyone else. Like, why did what I did, why I did it, and see if it's helpful to anyone. I love that game. I really do.

**Andrew Rynhard:** Yeah. We appreciate that.

**Gerhard Lazu:** Thank you, Andrew, thank you, Steve, for taking the time, for sharing the philosophy of Talos, some of the stories, what is coming next... And I cannot wait, I cannot wait to see the next 6 months, the next 12 months, and just to see how far my own bare metal cluster running Talos gets. Thank you.

**Andrew Rynhard:** I'm looking forward to it. Thank you.

**Steve Francis:** Hopefully, it'll last as long as your board does. \[laughter\]

**Gerhard Lazu:** Yeah. Well, we will tell the story. Let's see what happens. Thank you both. Have a great start to the new year, because it is the new year when this comes out... I mean, this is -- we're actually recording this before Christmas... A little bit like backstage info. Merry Christmas to everyone, but again, by the time -- I mean to Andrew and Steve, definitely. But to everyone else, have a great new year. Alright, thank you all
