**Justin Garrison:** Hello, and welcome to Ship It. I am your host, Justin Garrison, and with me as always is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** Hi.

**Justin Garrison:** You know it's an audio podcast, right? They can't see you wave.

**Autumn Nash:** Hey, you never know. It might be a clip... I think \[unintelligible 00:01:03.12\] way too excited at this point, so they just assume that I'm doing something ridiculous...

**Justin Garrison:** Yeah. Can you tell that I'm moving around right now? \[laughter\]

**Autumn Nash:** Oh yeah, we're not on video... \[laughs\]

**Justin Garrison:** We're on video right now. For anyone behind the scenes, Autumn and I sit on video to record this, because you know, it's just nicer to see someone's face as you're talking to them, and when they're trying to wave you to say "Shut up, I want to talk now", that's easier to do.

**Autumn Nash:** And Justin's always making me jealous of his very cool office, so then I had to go get a cloud light to be as cool as his office... And it's still not as cool, but I'll keep trying.

**Justin Garrison:** Well, the one cloud light there in the middle is stepping up your game. I see where you're going.

**Autumn Nash:** I'm gonna get some more, don't worry.

**Justin Garrison:** If no one's seen my office and seen the videos, I have a shelf behind me. I have a workbench behind me, but like a shelf of toys of basically things that I've collected and built over the years.

**Autumn Nash:** And Legos, and candy... He has the best candy stash.

**Justin Garrison:** I need to show you my new 3D printer. It is awesome.

**Autumn Nash:** Oh, my God. Is it the one that you're talking about on BlueSky? Because you guys made me jelly, and I was like...

**Justin Garrison:** Yes.

**Autumn Nash:** You got the one that you were talking about on BlueSky?

**Justin Garrison:** Yes. I got the Bamboo...

**Autumn Nash:** I'm so jealous. I want one of those so bad.

**Justin Garrison:** I have one big problem with it right now, is the fact that it works really well, and none of my 3D printers in the past have ever worked really well, and so I'm going through spools of filament that I never was using before... Because it took me so long to like replace filament and print things and, all this stuff. And now I have this new, fancy 3D printer, and it has an automatic filament loader, and I've already gone through like three spools of filament in the last week. So yeah...

**Autumn Nash:** Okay, but what have you printed so far?

**Justin Garrison:** I will show you a video of the marble run that I printed, which is awesome, because it's just like, it's motorized, and it's all 3D-printed, and it's great.

**Autumn Nash:** I'm so jelly. First you had a Wreck-It Ralph, and then you had a Lego head, and now you're just like "I got the 3D printer you wanted. Let me make all the cool stuff." Rude...

**Justin Garrison:** Living my best life. But that's not why people are listening. I mean, if you want to talk about 3D printers, we can talk. Anyone out there that works at a 3D printer company, let us know how you ship software. How do you manage firmware on all these devices, and cloud services? Hit us up, ship it@changelog.com. That would be a cool topic.

**Autumn Nash:** My kid has a Toybox, and their software is so adorable. And now they let kids build stuff, and download new prints, and all that cool stuff. So it's really cool how software and 3D printing is made to kind of make it more accessible for little kids to be able to do 3D printing. So that would be so cool.

**Justin Garrison:** Yeah, the more you can make it like an appliance, just the better. And that's what this 3D printer, the Bamboo -- the P1S is the one I got. It's very much like an appliance. It has a mobile app, and I literally just send the print jobs from the app.

**Autumn Nash:** That's how the Toybox is. You can do it from their little iPad. And every now and then there'll be some free prints, and they get so excited... But it's so cool, because can you imagine being able to do that when we were little kids? You just go make your own toys, you know?

**Justin Garrison:** Yeah. I printed this marble run, because it's what I would have wanted as a kid. I was like "This is so cool." The marbles just go down the slides, but it's still cool.

**Autumn Nash:** I saw a meme, and it says your 30s is for reliving your childhood, or like being yourself... You know what I mean? Like your truest self, and it's so true. I'm more of a child in my 30s than I was in my 20s. I'm just like, I'm gonna get pink hair, and do all the cool things... I think we're reliving your childhood right now.

**Justin Garrison:** On today's show, we have Verónica López. She gives us a great overview on releasing software, in a lot of different ways. She is part of the Kubernetes SIG Release team, as well as someone who previously worked at Planet Scale, helping Release a managed database. So that's the interview today, and we're gonna get to that in just a minute... But like always, we like to have a couple topics or articles that we want to just talk about with everyone. And this week, I've found the CVE that was recent, CVE 2024, 3094; it's a very catchy name.

**Autumn Nash:** Cool!

**Justin Garrison:** But it was all about backdoor exploits in the XZ Utilities in Linux. And this was using a compression library, LZMA, which is pretty esoteric. It's something that people are using because they know about it; it's not like a command that they're always running... But it happened to be as part -- it was used in part of like SSH public key decryption. And so when you send a public key to an SSH server, it would then say "Oh, hey, I need to decrypt this public key. I need to validate. I need to do certain things." And it would pass the public key onto the LZMA utility to decompress it. And that would happen to pass it on to Systemd, and allow a login basically, in this process. And that whole thing was happening. And someone discovered that "Hey, sometimes when I pass this, it's slow. And it uses a lot of CPU. And there's something that seems a little out of place." And so they kept investigating, and found out that the XZ Utilities was maintained by a person that is maybe nefarious, and had maybe even --

**Autumn Nash:** \[00:06:08.24\] Ooh, it's maintained by a nefarious -- interesting.

**Justin Garrison:** It was maintained and pushed, and they've found a lot of things in mostly the build process that was replacing obscure code, and dropping in binaries into the release packages. And this was doing some backdoors. And so the current theory, as we're recording this, and as it was exposed last Thursday or Friday, is that basically, a malicious actor could use a specifically-crafted public key, go send it to your SSH server if it's exposed somewhere, and it would cause eventually Systemd to execute code. And that code would be executed, and it could be just any code that would run on a system with root privileges, or it could be a reverse shell, or something else along those lines. And it was specifically targeting 64-bit Linux, RPM and Deb distributions. It was not widely deployed, at least this version that was seen as nefarious. And so most of those distributions rolled back the version before this was taken over and this happened... But it was very fascinating just to look at, like "Oh, this one library was maintained by someone that we didn't actually know too much about, and they took over --"

**Autumn Nash:** Wait, but to clarify, the actual library had suspicious code in it?

**Justin Garrison:** The package that was distributed, yes. The library itself, when you look at it, looks completely fine. Everything looks normal. But during the build process to build the packages for that library for distribution, that's where it got injected in. And so if you go download it from GitHub, or wherever -- it was on GitHub, it got taken down... But they had access to some of the sites -- but the build scripts were actually injecting and downloading binaries, and putting them into the packages as they were being deployed.

**Autumn Nash:** Wow...

**Justin Garrison:** So it wasn't something that you could go audit the source code, because you're not like "Oh, look, this looks fine, but somewhere in this build script there was a complex sed command." And that sed command replaced some things. And then, down the road, in that complex build stage of how a package gets built, binaries were injected into the library, and then it was discovered.

**Autumn Nash:** I think this is, again, a good case for why you should take the least amount of dependencies or extra files as possible... Because that's just wild. But also, you could need it.

**Justin Garrison:** I mean, in this case, in a Linux system -- you can't SSH with public keys, right?

**Autumn Nash:** That's true.

**Justin Garrison:** SSH keys are just the standard today, and it's more secure than passwords. And so we're doing the secure thing, but also "Oh, look, a backdoor." So it was very -- it brought up a lot of conversations around how to pay maintainers, especially for things...

**Autumn Nash:** This is a great segue to my article.

**Justin Garrison:** Exactly. I'm leading right into it.

**Autumn Nash:** Great. Your podcast \[unintelligible 00:08:45.24\] now you're doing all these great segues... I'm so proud of you.

**Justin Garrison:** We're professionals now.

**Autumn Nash:** We're getting our lives together over here.

**Justin Garrison:** \[laughs\] I wouldn't go too far... We're still buying toys. \[laughter\]

**Autumn Nash:** That means our lives are together. What do you mean...?! You're my favorite big kid friend. I just got to get you to drink coffee so we can be really ridiculous. Can you imagine if we were caffeinated properly? We would be like unstoppable. Okay, "Open source foundations unite. Uncommon standard for EU Cyber Resiliency Act." This makes me so excited, because I love open source. For instance, this could have been -- if we were able to pay maintainers and invest more into the open source community, you have a better chance at stopping things like that. o this is an act where the Apache Foundation, Blender Foundation, the Eclipse Foundation, OpenSSL, PHP Foundation, Python Foundation, Rust, and I think a few other people are getting together and they're working on some legislation in the EU. It's called "The Cyber Resiliency Act." They've been working on it for about two years, and they're trying to basically codify best practices for cybersecurity, which I feel is like super-needed.

\[00:10:05.03\] And I also love that Open SSS is working on this, because they have scorecards on how much they're involved in the security scene in general in open source... But because this will also have fees if you break those laws, and if you're not holding up that standard. I wonder if this is another way that they can create a way to pay maintainers in open source, and to reinvest in open source if they are able to reinvest these fees that they might charge... But I think it's just so cool that these foundations are willing to work together to better security, and to create a standard. Because 70% to 90% of software is made in open source. And these are people that are usually not paid to do the work. So this is awesome, to have that standard that everybody will hopefully be able to maintain... And we can also teach about security, and it can be like an educational thing also.

**Justin Garrison:** Yeah, there's a lot of things with open source maintenance. I mean, the burnout is real, of like "Hey, how do you have a single person that maintains something so critical to the rest of infrastructure?" But then also, people should be able to retire from open source, or pass on what they were doing, or just say like "Hey, this is deprecated. No one should use this anymore." Do you remember - what was it, Leftpad, that the developer removed it, and he's like "I'm done with this thing. I'm removing it from Npm." I remember that day on the internet; everything broke. Everyone's builds were broken. If you had anything Npm, you were hosed, because somewhere in your supply chain, someone was using this, and it disappeared from the internet. And as a maintainer, they should be allowed to say "I'm done maintaining this. I don't want to add features, I don't want the attention, I don't want whatever it is. I don't have to do that."

**Autumn Nash:** I mean, it's work. Even if you put a project that's not that big, there's always stuff that you're going to have to patch and maintain if it uses any other dependencies or libraries... But I do think that there's going to be some pain that comes with this, because it's hard to make a standard for different projects that have different things involved. But luckily, I feel like with the wonderful variety of the different open source communities that are coming together for this, hopefully they'll be able to figure something out... But maybe the standard will also force people to allow newcomers into open source, because it will be more to maintain in security. So hopefully, that will also help push that, because you need new people. We can't just keep having the same people in open source, because they're gonna get tired, and there's a lot of work. So hopefully, this all increases security standards, increases the amount of hopefully paying maintainers, and the ability to onboard new people.

**Justin Garrison:** And one of the things that's really interesting to me about open source in general is just it's kind of borderless.

**Autumn Nash:** That's my favorite part.

**Justin Garrison:** And that's a great thing, but if I'm living in Southern California, and I want to work on open source, and I want to be paid for it, it's like, my level of what is worth my time is very different than some people in other parts of the world or even other parts the United States. Like "Hey, you know what? I don't need that much money. I will do the same sort of maintenance for half or a quarter of the pay", which is definitely a problem for companies around the world, which is like outsourcing, and where the work gets done... Because hey, guess what - my cost of living might be more expensive, so I cost more money. Then how does that apply when someone like the EU or foundations are trying to discover and help maintain these things?

**Autumn Nash:** That's kind of tech in general though. People have always gotten paid more in the US for tech than in the EU, or in Canada. But I think it's definitely going to be paying like that, trying to have the same standard for different projects that have different requirements. So it's definitely going to be a lot to figure out, but at least it's a move in the right direction, I guess.

**Justin Garrison:** \[00:13:53.09\] Yeah. In finding that funding, or something that you might get in trouble for. Like "Hey, we open-sourced a thing. We are an EU company. Oh, you didn't maintain it, or you pushed it out as insecure, or you didn't patch it in a reasonable amount of time? Guess what, you need to fund these things."

**Autumn Nash:** I also kind of wonder if it will change how we handle open source security in the US. Will we ended up with an act like this? Will open source communities in the US say "No, we don't want this"? It'll be interesting to see if we follow.

**Justin Garrison:** I just need to know, do I need to click another Accept Cookies button because of this one? Or is this -- because I'm out, if it's more cookie pop-ups.

**Autumn Nash:** \[unintelligible 00:14:30.06\] You're ridiculous.

**Justin Garrison:** It was just funny... I remember when that law was being enacted, and everyone's like "Oh, it's only if you're in the EU." I'm like "Yeah, no one cares. They're just gonna push it everywhere." I live in California and I'm clicking pop-ups on every device, every browser, every time I clear my cookies. It's like, do you want to clear your cookies to fix this bug?" Like, no, because I don't want to accept all the cookie pop-ups again. \[laughs\] I will live with the bug forever. It's fine.

**Autumn Nash:** Do you see this? This is equivalent to when people -- they say if your website takes two more seconds to load, people will go to a different website. And I'm like "This is our attention spans now."

**Justin Garrison:** So let's move over to the interview with Veronica. I just want to apologize for anyone listening - this was recorded while she was at KubeCon in Paris, so there are a couple sirens, and some lower-quality audio than we might be used to... But it was a great interview. Veronica has gone back inside the Kubernetes community; that's the word, not ecosystem. Inside the Kubernetes community for a long time, and has been part of SIG Release for a long time. It was great to talk to her about things at Planet Scale, open source and closed source sort of releases. It was a lot of fun.

**Autumn Nash:** Someone scoop her up. She is amazing.

**Justin Garrison:** So we will talk to you after the interview.

**Break**: \[00:15:47.28\]

**Justin Garrison:** Alright, today on the show we have Verónica López. Veronica was a tech lead, or is a tech lead with the Kubernetes SIG Release, and was previously at Planet Scale. Thank you so much for coming on the show, Veronica.

**Verónica López:** Yeah, I'm very, very happy to be here.

**Justin Garrison:** Can you describe the software and the systems that you were responsible for at Planet Scale, and kind of how those worked?

**Verónica López:** Yeah, of course. Well, to talk about that, I will have to talk about most of my recent career, where I have been, for better or for worse, focusing on release engineering, but not just the delivery of the final product, what you call DevOps as deployment, but the full lifecycle of it. What it entails. So in my specific case, and from the, I would say the school of thought that I come from, inherited from the Kubernetes team, but also the CoreOS team, is taking care of every single step of the development process, being aware of how that will look like, for example as a binary, or whatever format you decide to deploy; taking care of not just the code, but how that code interacts with other pieces of code, and the security aspects more recently... And then how is that going to affect users who had a previous version of that same software.

So yeah, it is very fun for me. I think that it is an area of current software engineering, infrastructure engineering that a lot of people dread, and I think that is because they haven't had the experience or the opportunity to really work through all the lifecycle process of it. People usually think that it's a less technical job, that is like just clicking buttons and it's deployed, because the infrastructure fairies take care of it...

**Justin Garrison:** Where do I hire me some fairies? That sounds great. I would love some infrastructure fairies that just make it all happen magically. That would be wonderful.

**Autumn Nash:** I work in release engineering too, and there's no fairies. None at all.

**Verónica López:** You only exist as like a Golang backend developer, or as a Kubernetes operator -- a person operator. And it's like, yeah, but someone has to build the Gremlins that make both of those things connect. Since most of the time those things are not visible, not only to the users, but to other engineers, unless they fail, people take it for granted a lot.

**Autumn Nash:** Not just build, but you have to maintain them, and then add to them, and then scale them, and pray they don't break... And then when they break, you have to fix them.

**Verónica López:** And then if you're familiar -- if you have been working in the software industry for the past 10 years, you know that upgrades are not what an upgrade used to mean 10-15 years ago, where it was just like "Oh yeah, click a button and that's it." Or an apt-get install. It's like that, but at scale. And at scale is where things break. Or maybe not break, or whatever... But you have to take way more considerations. And yeah, that's mostly what I have been doing. If I had to summarize it in a single word, it's upgrades. \[laughs\]

**Justin Garrison:** And you have a very broad experience with upgrades, because being at CoreOS, which is an operating system that people would build on, being part of the Kubernetes community, which is strictly open source, but it is consumed and repackaged and modified in various ways that you're producing binaries, and then also at Planet Scale, where it's like, these are services that people depend on, and they're building stuff on - how did that kind of progress for you, and what are some of the major differences between a solely either open source "Here's some binaries", versus a service that people are depending on to run and be available?

**Verónica López:** Yeah. Oh, there are many, many aspects. One of them is, for example - one of the companies that I used to work at, we had a main distribution for let's say three different Linux distributions. But then one or two big customers, who paid us enough money, that worked with another Linux distribution that we originally did not support, we created a little team of three people just to support that Linux version, that those two customers were paying enough money for.

\[00:24:11.07\] So that meant on packaging, our main offering, and then running the tests, and writing the tests, and getting familiar of course -- first of all, getting familiar with what that Linux variety required, of different aspects. And this was not an application in terms of like UI, or whatever; it was the \[unintelligible 00:24:32.28\] So it was learning deep Linux internals, plus how with the \[unintelligible 00:24:42.09\] components would work with those Linux internals.

So in that case, it was literally custom made. In most cases it was transparent, but then there would be like specific things that we needed to work on. And in that case, compared to open source - yes, there was a small but dedicated team for that.

In open source, you get what the team gets to build. \[laughs\] We work very, very hard, very hard to ship things on time. We have three major releases a year, plus monthly patches... And as I said, we work really hard to deliver them on time. However, as distributed systems, something can get in the way. And that can be anything - it could be a human factor, it could be a machine factor, it can be a test, it can be whatever. A cloud provider issue, and that wouldn't allow us to ship on time. We usually don't ship things more than 24 hours later when it's in our hands, but when it's out of our control, it has happened that we even delayed it for a week. But that is rare. So those would be the difference. And even if people yell at us, there's not a lot we can do. That is a difference. And there's always the invitation to "Okay, if you want to make this better, you can contribute." I acknowledge that it's not as easy as it sounds, but there's always the invitation. So that'd be one of the aspects here, the pressure that you have; not to say that on the open source side we don't have pressure, but it's a different type of pressure, especially these days, where everything is monetized.

**Autumn Nash:** It makes me sad that people are so mean to people in open source sometimes, and they're so "Well, give me this now", and I'm like "Dude, are you working for free? Calm down..." Like, unless you're going to contribute something, go sit somewhere.

**Verónica López:** Totally. I have a couple of things to say about this. First thing is that I'm at KubeCon Paris right now, and there was a session where two prominent contributors in the Kubernetes community read mean comments that people --

**Autumn Nash:** Yes...! Some of the stuff that people say, I'm just like -- I don't know, if they do it because it's the internet, and they feel like they're removed from the process, where they feel comfortable to say these things... It was so funny, I was giving a presentation at \[unintelligible 00:27:18.24\] and I was like "If you want to take anything away from this, tech is small. Be nice." Because I'm just like, I don't understand how people just say these things. And I'm like "You have to work with these people." We all work in this big ecosystem of things that depend on other things, and I just don't understand why people can be so mean for no reason.

**Verónica López:** For no reason, honestly... That's a very good point for the next thing that I was going to say about this... Especially about the upgrades for Kubernetes, that we ship three times a year - it's, at least in my experience, and my friends' experience on the private side of things, like in a private company, or in the industry in this moment... People used to go behind several versions of Kubernetes. So there's this dichotomy of like - I'm gonna make this up. Let's say that version 1.29 of Kubernetes is coming out tomorrow. Your average company that relies heavily on Kubernetes is not even on 1.28 yet.

**Autumn Nash:** \[00:28:24.05\] We're still trying to get people off of Java 8... \[laughter\]

**Verónica López:** Yes. To a certain degree, I understand. There are many considerations to have there. So me being in this specific position, I am constantly pulled by both sides. On the industry side, on the private side, it's like "No, no, no. We cannot upgrade yet, because blah, blah, blah, blah, blah", and so on. Or "We have certain dependencies..." I'm not saying it's unjustified, but that happens. And the other side is like "Why didn't you deliver this on time for the freshest version of Kubernetes" when we're delayed for like 12 hours.

**Autumn Nash:** 90% of the time people don't use the freshest version in production anyways, for one because it's gonna have bugs, and it's better for people to test it and to play around with it first... And being mean is not going to make someone release something faster. Your comment does not make me want to stay up till 2am. It's not going to make anything build faster... So what is the point?

**Verónica López:** It's mostly that... Because sometimes we do push it; like, okay, I can stay up for a couple more hours. Or also, this specific team, my Kubernetes team is very distributed. So we'll have people in the American continents, and then Europe...

**Autumn Nash:** Another reason why I love open source, because you can be like "Hey, this is your time zone. Could you please watch this build?"

**Verónica López:** Sometimes it's literally just the machine time. Like, I cannot speed it. We have to wait.

**Justin Garrison:** The cadence we have for specifically something like Kubernetes, but even the trickle down effects of like "We're releasing three times a year, and then we're only supporting it for 18-20 months", or something like that. So it's like "Hey, you have to get off the old version."

**Autumn Nash:** I love that you guys actually stick to your end of life cycle.

**Justin Garrison:** You know, a lot of it is because providers. On EKS, we would say "Hey, we're gonna force-upgrade you at some point. We need to get you off, because we don't have enough people to support this old version." But --

**Autumn Nash:** Not just that, but there's so many vulnerabilities. And I know why we have a hard time getting off of -- because of different dependencies, but...

**Justin Garrison:** Well, you come from Java land, and yeah, there's a lot of vulnerabilities... \[laughter\]

**Autumn Nash:** We've already established this during Gloria's talk, that you can no longer talk about Java. Okay, Mr. Kubernetes?

**Justin Garrison:** That's okay, you could throw the shade to Kubernetes, too. We've had plenty of CVEs and things as well.

**Autumn Nash:** Okay, but you guys are like making me want to play with Kubernetes. I literally use Docker, and I have no need for Kubernetes, but the people in the Kubernetes community are so cool, I'm like "I might actually go play with that." It sounds horrible to maintain them, but I might try it, just because I want to hang out with you people...

**Verónica López:** No, you can hang out with us without trying it. Honestly.

**Justin Garrison:** We'll get you to a KubeCon. You'll come. It'll happen.

**Autumn Nash:** I'll be the Docker and Java person that plays with databases, and I'll just randomly be at KubeCon for no reason.

**Verónica López:** I have been seeing a renaissance of Java for like cool startups.

**Autumn Nash:** I love Java. I hope more people start to use it. Every time somebody uses JavaScript for an infrastructure, part of my soul dies a little bit. It hurts so bad. I'm just like "But why? Like, can we talk about this before we make these technical decisions? Send me a meeting invite. Do we have to do this?"

**Verónica López:** Yeah, I agree.

**Justin Garrison:** One thing I was gonna ask about that cadence is how much do you think that that leads to burnout of the maintainers and the people that are pushing software for the date release? Like "Hey, we want to batch things up, and that's the only way that we can actually put out this release." But also, it is going to affect all of these other people downstream. Not today, but in 18 months, and then they have to scramble to do an upgrade, because... Like, how much of that burnout do you think happens with this release cadence, and how can that even be avoided in the future? How do we make that better for people? I know back-porting to Java 8 isn't the answer... But there has to be some in between there of --

**Autumn Nash:** \[00:32:23.28\] Are you trying to hurt me?

**Justin Garrison:** No, I'm just saying, because my sysadmin job - we were literally... Like, Java 8 was coming out, and we're like "Everyone moved to it", and we're like "Nah..." We were on Java -- I don't remember what version at the time, but...

**Verónica López:** Well, that's a very good question, because I don't even remember how long ago was this... Maybe like two years ago? Don't quote me on that. We used to do four releases a year. And that led to \[unintelligible 00:32:46.17\] So that was the main trigger for us to decide, or first proposal to have fewer releases a year... Because people were burnt out.

Second, Kubernetes is a big, big, big community of many contributors, and all of them are equally important. However, the people who get to decide, or to do the final code reviews are mostly the same, regardless of the feature, for many reasons. They're experts at Kubernetes, but like really experts. Both at implementing it, but also at creating it. And they have the time, they are usually paid to do that...

**Justin Garrison:** Yeah, that is their job.

**Verónica López:** That is literally their job. And they have been doing it for many years, and they like it very much. So this is to say that the more power you have in the Kubernetes community, the bottleneck starts being narrower for the amount of people who have such power to review and/or accept a new contribution. So usually, before a release, the same group of people will be flooded with requests of different things: of code reviews, or to cherry-pick different things... That includes my team, but is not limited to my team.

**Autumn Nash:** What language is Kubernetes built in?

**Verónica López:** Mostly Go.

**Autumn Nash:** Dang it.

**Verónica López:** So even if other people are technically able to review the code, they don't have the power, the hierarchy power. So yeah, this leads to a lot of potential burnout, because a lot of people rely on the same group of people. So on one hand, for that reason, in the permanent "positions" that we hold in the SIG teams, we have redundancy. For example, I am one of a few tech leads, because all of us or most of us are volunteers, and we don't get paid, or at least not full time to do that work. So this means that if we have an emergency, or we have to focus more on day job, or on family, or whatever it is, we can step aside for a little bit, and someone else takes over. Sometimes it's not well balanced, and someone, a specific person, or a couple of people have to deal with all the load for like six months, and then other people will take over. It's a balancing act.

So yeah, this can lead to a lot of burnout... There have been a lot of conversations about this, both within the teams, but also at KubeCon, and in the industry in general... We also have built a lot of resiliency to ignore the comments. I can say for a fact, almost, at least for my team, we don't get burnt out by the comments, by people forcing us to deliver things faster. I mean, sometimes we get annoyed, but not burnt out. We're mostly burnt out when there's a lot of work to do, and there are not enough hands to do it.

\[00:36:00.26\] Now, the paradox of it all is that there are a lot of contributors that are really good, but to earn a spot where you can be in a position of "power", you have to demonstrate huge amounts of responsibility, but also of time, and I think that is a huge privilege.

**Autumn Nash:** That is a privilege. And I think that's why a lot of people are gonna have a hard time getting into open source. That makes me sad, because I would like to be a bigger open source contributor, but it's hard to get into projects, and it's hard to advance when you have a full-time job, and kids, and all those extra parts to it...

**Autumn Nash:** Yeah. There was a year where I won a Kubernetes contributor award, and that was the year where I spent four months waiting for my work visa to come through, so I had the time while I was finalizing the hiring process, and then my visa... So that's the reason why I was able to do that. And my reward was a little contributor reward. But now that I have had a stable job until a few weeks ago, and life, my contributions really lowered. And it's like a little gremlin living in the back of my mind, that I'm like "Oh, I'm not working hard enough in open source, and I'm a tech lead", you know? But it's a balancing act, honestly.

**Autumn Nash:** Another thing - to go back to release schedules, it's also like a tricky balance, because you don't want to burn out your maintainers and the people that are doing your release, but also, if your gap between your releases gets too big, it's harder to upgrade, because you break more stuff when you're patching.

**Justin Garrison:** Which is a really interesting -- when we deploy software internally at any company, at least the best practice is just like small releases all the time, right? You just keep rolling out small changes all the time. But you can't do that with this big open source thing that is Kubernetes; you have to package that up, and you have to have this release window, and code freezes, and all that other stuff. It's like "Hey, this is going to be a big deal, because we're going to have breaking changes, or promote things in the API." All of that really changes. And I remember with CoreOS, I really liked your release channels that you implemented. So CoreOS had the stable, the beta, the alpha, and as a channel, just like "Hey, you subscribe to this thing, and we will push it out for you." And I know a lot of CoreOS users always turn that off. They're like "I don't want my infrastructure changing."

**Autumn Nash:** It's also a really good way to test though, because then you're more ready for production when other people have used it. You know what I mean? When people are using it for --

**Justin Garrison:** I mean, for open source you ask people "Hey, can you test this thing?", but they're not testing it in production. They're like "Oh, I spent 10 minutes and it worked", kind of thing. It's not like a big --

**Autumn Nash:** Well, every now and then you have like maybe researchers that are just running -- a lot of times you have people who are running something that's important, but if it breaks, it's not gonna be like the worst thing ever...

**Justin Garrison:** And that's what I loved about CoreOS, where I had in my dev environment the beta channel, and automatic updates were turned on. And I'd just come in, I'm like "Oh, look, there's a new version." And versions didn't matter at some point, where it was just like "Oh, I have CoreOS", and people were like "What version?" I'm like, "I don't know. I'd have to go check." And that's fine, because it was so stable, and it was so reliable that that release schedule just allowed it to push out. But that is very different in something like Kubernetes, where it is this big open source thing, and there is no release channel subscribing to the latest thing, because there's so much kind of churn in how things are still adapting, even evolving 10 years later. Kubernetes is 10 this year, and it's like, the APIs still change...

**Autumn Nash:** That's actually really good. Think about all the open source projects that are like much older than that, and they're still trying to figure it out. So I think Kubernetes is doing pretty good.

**Verónica López:** Yup. And then I have seen companies trying to inherit that version of the channeling, but then for different reasons - I'm not saying that they're wrong, they just deviate from the original purpose of the channeling system. Then product, or business needs end up using the channels for different requirements, for different purposes. And that breaks the original purpose of the channeling system that we came up with.

**Autumn Nash:** \[00:40:05.25\] That makes sense.

**Verónica López:** Yeah, but it's fascinating, and even though you would like to implement things in isolation, without anyone touching them, the beauty of these systems is that you get to work with a lot of people with different needs, and you have to adapt. So that is most of my work; my life would be so much easier if we get to replicate these little paradigms into every type of system that I work with. But there are always differences, because either people don't understand, or because people don't understand and don't care... And that is not necessarily bad, but it's different. So it's like "Okay, how do I make this work now?" So that is a never-ending challenge...

**Autumn Nash:** You sound very talented. Whoever ends up picking you up is going to be so super-lucky.

**Verónica López:** That is very sweet. Thank you.

**Justin Garrison:** Where do you think release engineering and release scheduling in this sort of release goes from here? What is best practice for those sorts of channeling inside of a company, or as open source maintainers are like "Hey, I need to release this thing. Should I just push out little changes all the time and hope people catch up to me?" What is it that you're seeing that's different between those businesses and open source?

**Verónica López:** I wouldn't call it best practice, because as I said...

**Justin Garrison:** It's just practice.

**Verónica López:** Yeah... But things that I would recommend in general would be to test as early as possible with the most real-life type of system that you have. Whatever it is that you sell, or that you work with. A common pitfall that I see when people try to use, either this channel-based system, or similar, is that they start testing the alpha channel with a very simple Hello World. And then they assume that since everything went well there, then the beta version will work with the Hello World plus one. And then the GA will work with the real thing. That is a very common pitfall. I see why that happens, but it does not translate to that, especially in distributed systems, where a Hello World for a distributed system is not the real state of the world.

So more than best practice or not best practice, from what I have seen is to encourage people to test as early as possible, but with as real datasets or systems. Even if they're dummy, but that they're as real as possible, so that they can make a difference between the signal and the noise, and have more reliability.

**Justin Garrison:** It seems like the further you go and the more complex a production environment, just the more dependencies you have. And you have to at some point be able to like collect all those dependencies to actually work together at some point. There's still glue, and there's still these little pieces that are going to miss, of just like "Oh, I have a Hello World thing. All I need is a load balancer and some compute, and I'm fine." And then once you're in production, it's like this crazy mess of "Well, I have three tiers of load balancing, with these other random databases, that are various versions, and they have cruft in them, because we've done some migrations, and we've done some things..." In the real world that always looks so much different than what that clean "I can erase and redeploy this at any time" and "I've lived with this system for five plus years." Those are very different environments.

**Autumn Nash:** This is also like the cycle of hype in tech. Really good, simple stuff is the best.

**Verónica López:** Yeah.

**Autumn Nash:** Just don't overcomplicate stuff. It doesn't need to be the most complicated -- like, you don't want it to be old as far as like patching, but like reliable... Sometimes simple is key, and having as least amount of dependencies as possible, because that just complicates stuff in a way that is not fun, and usually you don't even need half of it.

**Verónica López:** \[00:43:57.04\] Of course, yeah. For sure. And even when you end up needing several things, then the incremental, either testing, or upgrades, however your business model works - but little by little, it works better. Because then what you end up having - and it's what we see 90% of the time - is that you have to orchestrate a big upgrade, that needs to take into account so many aspects that you forgot, that at the time of development you were like "Oh yeah, we should keep this in mind", and then no one remembers, because it was a little thing. But it's the addition of little things that end up ruining everything, and then when you think you're ready, you're not.

**Autumn Nash:** Every level of complexity adds more edge cases. You know what I mean? You see all these blogs, and they're like "And then add this, and then do this shiny thing." And I'm like "But you could have done that with three really simple \[unintelligible 00:44:56.29\] and it wouldn't be as cool, but it would have been more reliable, and you would have achieved the same product." And I feel like people want to overcomplicate things, when you can do things and make it cool, and you can get the same product, but in a way that you can control and develop in a more incremental pattern.

**Verónica López:** The challenge that a lot of practitioners have is, as you said, more complexity. You want to make it as less complex, and simplify it as much as possible, and then solve the problem. And then once you have solved the problem in a little -- I think about it in thee mathematical term of integration, right? You partition the big problem into little parts. So you solve it by the part. Some people are good at that part. But then people forget that once you solve the little parts, you have to zoom out again, and put those little pieces together again, to then find a common solution. It's very hard; I'm not judging anyone...

**Autumn Nash:** Best practices are always like "This is gonna be the best practices", and then you actually go do it, and then you're like "Oh, this was horrible. I didn't account for so many things. This doesn't actually work that way..."

**Verónica López:** All of this is with things that you can prevent. But in distributed systems, you have always to allocate room, time, effort, whatever, for things that you cannot prevent.

**Autumn Nash:** Distributed systems is constantly dealing with trade-offs.

**Justin Garrison:** And that's one of the things - like, we tell people keep things simple... But at any given time when someone's like "I'm deploying this thing. Here's my constraints, and here's the things that I have to bend to", they're dealing with the most simple thing they can think of at the time. I don't think people are necessarily like "I want to overcomplicate this thing." When people decide to pick Kubernetes, this very complex distributed system, they're thinking of all of the other things they're dealing with, and you're like "You know what - those 18 Bash scripts, and that Jenkins pipeline, and that other thing... Kubernetes would be simpler than that." But when someone comes into it fresh, and they're not used to the complexity, when they haven't built the complexity, then all of that looks too complex, and like "Oh, I don't know how you ended up here. This seems absolutely ridiculous. Why would you choose this?" Like, "Well, let me show you where we came from. Let me show you what the constraints we had before." Can you describe a time or an example of something that's blocked a release, especially for something like Kubernetes in open source, or even internally, like "Hey, we didn't anticipate this, and we had to push the release back because this happened"?

**Verónica López:** Yeah, well, there are many things... That is like 70% of my time. But to pass the responsibility more on my side, than my team, for example...

**Justin Garrison:** You don't have to the throw shade at anyone. You know, whatever it is...

**Verónica López:** \[unintelligible 00:47:45.06\] blaming the users, and stop blaming the poor Kubernetes operator, the human operator. No, for example in Kubernetes - and we have been very open about this, so this is not a secret... But the tooling that we have behind every release is massive.

\[00:48:03.10\] We are a self-serving team. That means that we don't only click buttons to release things. \[laughs\] We build the software behind our releases. That means - for example, the most recent and tough battle that we have been fighting is with the supply chain security stuff, that has not recently, but it has been a work in progress, that a year ago it started blocking our releases, because we wanted to sign - if you're familiar with supply chain security and all these new terms, newish terms... It's like signing, and promoting, and all these things. The container images are a promotor, and Kubernetes was built independently for that. \[unintelligible 00:48:47.21\] But obviously, we didn't want to redo it from scratch, so we tried to build the supply chain security stuff on top, or using the existing logic of the promoter. So that meant that at some point we needed the image to be signed twice. And the signature process, that had nothing to do -- it was orthogonal to the release process itself. But it was a requirement in a checklist. So if the signature didn't work for whatever reason, or because it timed out, or whatever, then the entire release was blocked, because all the artifacts were already created. You couldn't just click the button and try again. No, it's like, all the artifacts and - I don't know, from the hashes, to all those little things were already created. But the way that our tools work, they were like "This step is already done... So why are you asking me to run it again?" But it was stuck in the image signature part, and it could not move forward, because we asked it to be like that. Like, "Do not move forward if the image signature is not ready." But we did it, so that it was a secure process, not like -- not that it depended on it. So we decided to get rid temporarily of that part, because it was blocking us, and a release that would usually take, I don't know, five hours, would suddenly take a full week, or three business days, let's say... Between the coordination of different time zones and whatnot. And it ended up taking like a full week of work. So we were like "Okay, sorry. We have to get rid of this", and manually do things like that.

So that is a very specific part, but there have been times where -- I don't know, where the cloud provider has a bug, or an outage, or whatever, and it's like "Oh, sorry, we cannot run this." This is not specific to Kubernetes, but in general, and I think that most people have dealt with this.

But then on the industry side, the most common thing for me, and where I have found a lot of fun is when people, including myself, as a team, or combo of teams, think that something is ready to be released, when it's not. And it's ready to be released in terms of like it passed all the tests, and it doesn't seem to have any bugs, and it works on my computer -- or it works on cluster. \[laughs\] That's the new "It works on my computer", "It works on my cluster, and it works in my series of clusters." But then it's like "Yes, but it won't work with this type of user, because this type of user has something that you don't have in your 2, 5, 7 clusters." Because they're way more complex than you are. And then it's like "Oh, right."

\[00:51:59.27\] So the blockage is not like an operational, or like a button, or an algorithm, or something blocking it. It's more like a human factor saying "It will be risky to deploy this as it is, for this reason." But you have to be very attuned to that system. It's not like you can see it just because you're a Kubernetes expert. It's more -- you have to have a bit of that, but it's more about how well you know all the components of that system, to be able to say --

**Justin Garrison:** How it fits together. Yeah.

**Verónica López:** Yeah.

**Justin Garrison:** Thank you so much, Veronica. For coming on the show. If people want to reach out to you online, what's the best place for them to find you, or ask you questions and follow up?

**Verónica López:** Yeah. Well, I'm on Twitter... I was not active, until recently, again... It's @maria\_fibonacci. It's the silliest username in the world, but I created it over 10 years ago, and then people... I have tried to change it, and people are always like "No, bring it back." So I have a brought it back... And that's it. You can always send me a DM...

**Justin Garrison:** Or join SIG Release, right? They'll be able to work with you there; the Kubernetes SIG Release.

**Verónica López:** Yeah, yeah. Now, we have been in a little bit of pause of meetings, but yes, for sure. Come join us and you might find me there... But on the Kubernetes Slack, always, always. Abd we are active on -- our Slack channel is \#release-management. That's where we have activity. And also in \#sig-release. Yeah. But honestly, if you send me a DM, or even a tweet, and you have a specific concern, I will respond to you. Hopefully.

**Autumn Nash:** I'm just saying, I can't wait to see where you go next, because they are so lucky to have you. Someone hurry up and hire her and give her the coolest job ever, because --

**Verónica López:** That is very sweet. Thank you.

**Justin Garrison:** Thank you so much.

**Verónica López:** Thank you...

**Break**: \[00:54:00.12\]

**Justin Garrison:** Thank you so much, Veronica, for coming on the show and talking to us about that. For today's outro I'm trying to keep the theme of never repeating an outro segment... And this one I've titled "All the releases of the rainbow."

**Autumn Nash:** I love the ridiculous outro names you come up with, but then I feel like we should redo them sometimes, because sometimes they're hilarious, and the names are so good...

**Justin Garrison:** I'm going to run out of ideas, and we will repeat them at some point. But for now, I thought of a new thing, especially in the theme of what we were talking about in the interview, about releasing software, and checklists, and how things get rolled out. One of the things when I was starting with technology and infrastructure was "What does it mean to release software? And what does it mean to -- all these ways of describing release cadences", and one that often came up was "How does a blue/green deployment work? How does a red/black deployment work? How does canary deployments work?" Those were all interesting to me, and I didn't understand them. Now today, I understand that it's all just made up.

**Autumn Nash:** This is what happens when we let you take a nap. All of a sudden you have new outro ideas, and we've gone down a rabbit hole. Every time you go down the rabbit hole, it starts with you taking a nap, or a Dr. Pepper.

**Justin Garrison:** That's where all my best ideas start.

**Autumn Nash:** How much Easter candy have you had?

**Justin Garrison:** \[laughs\] I do have Dr. Pepper Peeps. That's like a flavor now...

**Autumn Nash:** That's a thing?

**Justin Garrison:** Apparently, yes.

**Autumn Nash:** Okay, but are they good? Because like Peeps are...

**Justin Garrison:** The first flavor is Dr. Pepper-like... And then the last flavor isn't the best. But it is still good as like an initial "Oh, this is like a marshmallow Dr. Pepper."

**Autumn Nash:** How many did you eat, Justin?

**Justin Garrison:** We're not gonna talk about it. We are gonna talk about software rollouts, because again - so if you're new to this, or just like "How does this work?", I will say that blue.green is kind of a common one that people talk about a lot of times, where it's like "Hey, I have 10 replicas of my application, and I want to roll out a new version." And what you can do is you can put ten new versions somewhere else, that aren't behind the load balancer, and you switch the load balancer over and you say "Oh, look, I had 10, and I can push out 10 more." And that's good, for a couple of reasons. One is you can push out the application quickly, because you load balancer switches over. You don't have to change DNS, because if you're messing with DNS, you're gonna have caching, and all this stuff...

**Autumn Nash:** It's always the DNS'es fault.

**Justin Garrison:** There's always gonna be something in there that causes a problem if you can't control that tightly. So at the load balancer level, you just say "Hey, don't point to that old one anymore. That's the blue version. Point to the new version, that's green. We're good to go." The other benefit of this is you can roll back.

**Autumn Nash:** That is the best benefit.

**Justin Garrison:** Like, "This didn't work. There's a problem, for some reason. Switch the load balancer back and you're fine." The downside to that is you're running twice your infrastructure. Depending on what you're switching over, how big the application is, whatever it is, you can't do this at infinite scale, because you won't be able to pay for it at some point. If you have 10,000 replicas of something, and you need 10,000 more, you don't want to pay for that. And blue/green is not going to work in that situation.

**Autumn Nash:** Usually, you're not doing it for too long. Also, it's really good for catching bugs when it's maybe a bug that you wouldn't immediately catch, but it could - you know, something that you catch longer, when more people use it, and it allows you to be like "Okay, three days in we realized we really messed up, and we need to switch back, fix this really quick." And also, depending on how big your change is, your customers may not notice as much when you're switching back and forth... So there's a lot of -- it's funny... Do you remember when blue/green was a new thing?

**Justin Garrison:** It was like a brand new idea. I mean, because load balancers were kind of new.

**Autumn Nash:** That's what I'm saying.

**Justin Garrison:** If you were on-prem, if you had a physical server, you weren't gonna buy double the servers, to say "We're rolling out new versions." It's like "No, we're just gonna go SSH in and git pull, and then restart Apache." That was how you would roll it out. And you could do that automated, with Bash scripts, or whatever. But in this case, we're like "Oh, look, this infrastructure is disposable. Now we can, quote-unquote, buy double the servers, or make double the replicas for some of time." But yeah, like you were saying, this gets complicated. The lower in the stack you get, the more complex and more time that takes to do this blue/green... Because if I have a Kubernetes cluster, and I want the new version of Kubernetes, I have to replicate everything in my Kubernetes cluster. And that includes storage, and DNS, and databases, and all this stuff, and then applications may not all be able to switch. So if I have 100 applications, 90 of them might switch, but I still have to keep the old Kubernetes around for that last 10 applications, or whatever. So the more complex the thing you're trying to switch is, the more blue/green may not make sense.

**Autumn Nash:** \[01:02:12.13\] It is also very much a cloud infrastructure thing, because of needing both of those infrastructures and one being eventually a throw-away at some point.

**Justin Garrison:** Yeah. And this is different than disaster recovery, or a failover situation, where it's like "Oh, I have a region that has --"

**Autumn Nash:** Yeah, that's completely different.

**Justin Garrison:** That's a different thing. But this is - yeah, rolling things out... I will also say that red/black - I've seen it described different ways. There are people that are like "Well, technically, red/black has to sync", but again, it's all made up. Red/black today is often just used as synonymous as blue/green, it's just different colors. Because I'm red/green colorblind, either case I might have a color that I don't see. That's fine.

**Autumn Nash:** Poor Justin.

**Justin Garrison:** But let's also talk about the canary. Canary is like the other one that you often hear about, as like "Hey, how does a canary work in this situation?" And canaries are named that because of canaries in the coal mine, which - a canary, they bring it in a coal mine because a canary would consume more oxygen faster than humans. And so if the canary had a disruption in that oxygen, they would die... Yeah, it would die before the people.

**Autumn Nash:** Which is super-morbid and sad... But I guess it's better than letting a bunch of miners die. Especially because it takes so long to get out, so it was fast.

**Justin Garrison:** And miners meaning that people in the caves, not young children. \[laughs\] Just to clarify, as this is an audio podcast.

**Autumn Nash:** That's so much more morbid... \[laughter\]

**Justin Garrison:** I know. But canary is -- I describe it as like a slow-moving blue/green, where it's like you're just replacing some of your replicas, and you're saying like "Hey, I want 10% of them to be the new version." And that's just going to be behind the load balancer, so like 10% of your customer calls are going to get the new version. And canary works mostly when there aren't breaking changes, right? Like, if the data schema doesn't change, the API doesn't change, you need to have a way to be able to handle some sort of like mixed reality of like "I have two versions that are competing, that might be writing to different databases, that might be changing schemas..." Whatever it is, you have to handle that in the application logic, to know "Oh, I'm a new version, and until the old version is gone, I have to handle this in-app."

**Autumn Nash:** Which is a really good option for when you're trying something new, and you're not sure how it's going to work for your customers, and that people are going to like it... But you also have to have an application that you can either have that close of a change that you want to try, or you are basically running two different \[unintelligible 01:04:31.01\]

**Justin Garrison:** And there's also like A/B testing, which is similar to Canary, where it's like "Hey, we're gonna test this feature, and we just want to see if it works." And A/B testing is more often used in frontend development, where it's not just A/B, and you have like hundreds of tests going on at any given time. It's just like "Oh, I just want 10% to have this feature turned on", and what does that look like for the world. It's called A/B testing. It's mostly - I always see it in frontend, I don't see it on the infrastructure side of things. Usually when it's an application layer thing, or a backhand sort of thing, they usually call it canary. It's just a different term for it.

**Autumn Nash:** Yeah. It's kind of like beta testing games and different things, too.

**Justin Garrison:** Yeah, and it just gives you like a more controlled way to say "Hey, I just want this to exist." And sometimes you just need it to slow-cook for a while. I know plenty of deployments at companies I've been at before, where it's just like "Hey, we're gonna canary this for a week. It's just gonna sit out there, and that's fine, because we just want to see."

**Autumn Nash:** But it's really effective, because we all know stuff works on your machine, and it seems great, and then you give it to a customer and it's like "Oh my goodness, how did we mess this part?" So I think it's definitely effective.

**Justin Garrison:** And then as the canary's sort of rolling out, you can say "Oh, I want 10%... Okay, if this works for five days, then roll it to 20%, 50%." And you can automate that last tail of it, where like "Ah, I have pretty good confidence in this." The downside there of canary is it's a lot harder to rollback sometimes, because you are replacing the infrastructure or the application as you go... And so you can't just say "Oh, switch back to the old one. Something's broken." It's like "Oh, well, now we have to do another rollout." And you never really want to roll back, you always want to roll forward; that means releasing it again. And releasing the old version again, and going through those stages.

**Autumn Nash:** \[unintelligible 01:06:03.09\] you're doing a rollback, but it's just on a smaller amount, depending on how your infrastructure is set up. So it could be easier, depending on how you have it set up.

**Justin Garrison:** \[01:06:14.24\] And there are things like Kubernetes deployments have like this canary ability, which - it's called blue/green, and it does it as like a slow rollout, as like "Hey, we're just going to roll out pieces of this. We're replacing it in place", but you also could say, like, do full blue/green, deploy 100%, and then destroy the old ones sort of thing. And this also kind of wraps into like feature flagging, which is you roll out the new application with the feature turned off, whatever it is you're trying to push out to customers, whatever it is you want someone to use; you can deploy the application and say "Hey, the feature is actually off", and all of the application looks back to something to turn on the feature. They have some sort of synchronization method or some way to update their state, and say "Should this be on or off?" And that used to be called dynamic configuration, it used to be called a lot of things, where you're like "Oh, I can go through and I can send a Linux signal to all these processes, and they'll know "Oh, read the config again." And now we're in a new state of some sort. I didn't have to replace it, I didn't have to do anything, but the application was already out there.

So feature flagging or rolling out in dark mode is like you can deploy the application and just not turn on the feature until you have your big announcement, or whatever it might be. And that is a good way to avoid the blue/green cost associated with like "We have to run this twice", because you can still roll that out in a canary style, with it turned off, and you could still test it at like a smaller scale, saying like "Hey, the feature's available everywhere, but it's not available u unless you have this turned on."

And that was a really interesting thing for me at Amazon, where it's like, that's how re:Invent announcements worked. Like you, you're at re:Invent, someone's up on stage at the keynote, and they say "Hey, this feature is now available in all regions." That feature has been there for weeks; it just wasn't turned on. And that's how feature flagging works, it's just like "That's just out there, available, nobody knows that exists, and it's not available until we say it's available now to everyone."

And you can do feature flagging in a canary style, where you can slowly roll it out, but you also can do it for beta testers, or more active customers, or someone that says "Hey, I need this feature now." You can roll it out and just give them the feature turned on. You can do all sorts of different ways of managing that.

**Autumn Nash:** I was gonna say, a lot of - I wouldn't say smaller companies, but just a lot of different ways that people use it to deploy, because you can get a certain amount of customers that your team or company are working with to use it as kind of a beta program. But again, you're not doing the same infrastructure as a blue/green deployment, but you can kind of coordinate and get feedback from special customers that you work closely with to kind of get more feedback on your --

**Justin Garrison:** Yeah, the early accessibility of "Hey, I don't want to control where this is rolled out, or I don't want have a special like system behind the load balancer just for that customer. But I can just roll it out everywhere, and just say it's off by default, unless it's this customer, or this IDE."

**Autumn Nash:** And you can also just kind of put it out in documentation, or GitHub, or wherever, and say "Hey, there's this cool thing you can try. And if you don't like it, turn it off. Give us some feedback."

**Justin Garrison:** \[01:09:07.15\] And that's actually -- you bring up a really interesting point. Again, if someone out there wants to talk about documentation on the podcast with us, I would love to hear from someone that's done this a lot, because maintaining software releases and feature releases with documentation, and those sorts of things is also really difficult... Where it's like hey, if you make a big announcement, everyone wants to come and read about it, and come to get started. But you don't want to release it too early, because you're gonna go out a day or two early, or someone finds the dev site for docs, and they're like "Oh, look, this feature is coming." It's like "Oh, I didn't want you to know about it." So that's a really interesting way of how this gets maintained, too.

The last one I want to talk about is just like database changes. If we have an application, and it has a schema change, or something that's rolling out, again, in like a blue/green style, you're probably going to have two databases behind the application that are split. You're just like running it twice, and you're managing it twice, and if patches happen, you have to do all that stuff twice. In feature flagging or canary, you have to make sure that those things can live side by side, together, and the old schema exists with the new schema, at the same time, until you fully remove and deprecate the old version of the application.

**Autumn Nash:** Sometimes people will use a replica to - either you start with one replica, or it depends on if you're using distributed systems; you could start with so many, I guess systems or nodes, depending on what kind of database... And then you patch asynchronously. But you could also just use a NoSQL database and make it easier for you to change your schema.

**Justin Garrison:** Yeah, I mean, that's like a benefit of NoSQL; it's like "Hey, it's schemaless" so those schema changes...

**Autumn Nash:** You could add a whole new field, and nothing is different. I mean, you still need to be really careful with access patterns, because I think that is something that people don't realize that the way that you access your data, and data modeling is important to NoSQL, because your application needs to be able to have good performance to get that information back. But once you get there, you can add new fields, or have some data that's missing a field, and it's much more flexible with NoSQL.

**Justin Garrison:** Yeah. And again, NoSQL pushes some of that responsibility into the application. Say, "Hey, application, you know how to handle this if the field doesn't exist, or if the field is new", or whatever the case may be.

**Autumn Nash:** That's why I wonder why they don't teach more NOSQL in college, because I think a lot of people, especially when you're wanting to try new projects, NoSQL is more forgiving, and lets you kind of invent, and it's not as strict when it comes to like schemas... But also, it's good to learn relational databases also. But it's interesting that it's not as taught in school.

**Justin Garrison:** Yeah, the amount of data modeling you have to do up front for a SQL database... It's like "This is all the data I need. This is how it's related. This is where the tables exist. This is where the indexes are." A lot of that is more flexible.

**Autumn Nash:** I still have nightmares about one-to-one \[unintelligible 01:11:55.26\] But I mean, it's also interesting, because the skill of data modeling for NoSQL is so underrated and rare, because people don't know that it's important.

**Justin Garrison:** So that's it for today's show. We just wanted to talk about some of those release cycles, because that's something that's not often discussed - at least I don't see it unless I'm looking for it - and it was something that when I was getting started was very confusing. And again, it's all made up. It's just imaginary, and you should stick with whatever rollouts and features is working for your applications, for your infrastructure, for your databases, whatever... But you can explore some other options. Just do it in test.

**Autumn Nash:** I'm so excited that I've graduated to the part of being in tech long enough for something that was new to get a old...

**Justin Garrison:** So thanks, everyone, for listening to the show, and we will talk to you again next week.
