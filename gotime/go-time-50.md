**Erik St. Martin:** Welcome back everybody to another episode of GoTime. Today's episode is actually number 50, so I think that makes us officially over the hill.

**Brian Ketelsen:** What?

**Erik St. Martin:** When do we get a senior citizens' discount?

**Brian Ketelsen:** 55, when we belong to AARP.

**Erik St. Martin:** So another five episodes.

**Brian Ketelsen:** Yeah.

**Erik St. Martin:** On the show today we have myself, Erik St. Martin, Carlisia Pinto is also here...

**Carlisia Pinto:** Hi! You so mispronounced my name, but I love you, it's okay. \[laughter\]

**Erik St. Martin:** Yeah, we're moving fast here, sorry.

**Brian Ketelsen:** At least he didn't do the trained monkey thing where he says "Say hello, Carlisia. Say hello, Brian." Yes, Erik, we're trained monkeys.

**Erik St. Martin:** In that case, say hello, Brian.

**Brian Ketelsen:** Oh... You're going to hell. \[laughs\] Hi, Erik!

**Erik St. Martin:** And our guest for today is actually Kris Nova. Hi, Kris.

**Kris Nova:** Hi!

**Erik St. Martin:** Do you wanna give everybody a little bit of a background of who you are and some of the stuff that you're working on?

**Kris Nova:** Sure, yeah. So I am really into Go, the Go programming language. I work a lot in Kubernetes and in the container space. I'm constantly coming up with little open source projects in my spare time, and I work on the Azure team at Microsoft, and we're working on bringing Kubernetes to Azure and making that awesome.

**Brian Ketelsen:** You just answered my first question, which is "What's the proper way to say Azure?"

**Kris Nova:** I say Azure because I'm really into mineral collecting and my favorite mineral is azurite, so it just kind of like was a no-brainer for me. But I've heard Azure in the wild quite a bit.

**Carlisia Pinto:** I would say Azure.

**Erik St. Martin:** Yeah, I actually have the same problem trying to figure that out, and I think Adam Stacoviak the producer might have corrected me during a conversation we had... And I think it's actually based on Eastern countries versus Western countries. I think in the U.K. they say Azure, or something like that.

**Kris Nova:** I've definitely heard both, but I just go with Azure... And that's what I think most people on my team say.

**Brian Ketelsen:** I would always use the "juh" sound; the question is whether we would accent the first syllable or the second one. You say Azure (accent on the first syllable) and you work at Microsoft, so we're rolling with that. It's done.

**Kris Nova:** Alright!

**Erik St. Martin:** It's official.

**Carlisia Pinto:** Sorry, I cannot change it.

**Brian Ketelsen:** I'm gonna call Scott Guthrie and let him know that that's how this is from now on. \[laughter\]

**Erik St. Martin:** You've got him on speed dial.

**Brian Ketelsen:** Done and done! You're right, I should send him a text. Calling is rude.

**Erik St. Martin:** \[laughs\] So let's talk about a couple of the projects, too. The most recent that came out was Draft; we talked about that either last episode or the one before, and that's ridiculously cool. Did you happen to work on that specific project?

**Kris Nova:** We've been working on it for a while before we sort of announced it, and I've been involved with the team; I work fairly closely with them. I'm actually on like a neighboring team, but the way we do things is everybody -- all the individual contributors kind of work together. So I've contributed to the project and helped along the way...

**Brian Ketelsen:** \[00:04:04.27\] So that's a no? \[laughter\] I'm just messing with you, Kris. I'm feisty today... Could you tell?

**Kris Nova:** Yeah...

**Brian Ketelsen:** Okay, good. It's gonna be a good show, I feel it. You were mostly behind Kops though, right?

**Carlisia Pinto:** Kris, have you finished your sentence? You were just suddenly interrupted...

**Kris Nova:** No, it's fine. So I worked out a lot in Kops; I helped to bring the private topology in Amazon to Kops... That was something I coded a lot end of last year, and now I'm one of the maintainers. My involvement now is pretty much I do a lot of code reviews and I help manage the project on sort of a high level.

I'm not contributing every day, like I used to be several months ago... But hopefully, I would like to change that, as I've been going through the process of getting Kubernetes up and running on Azure. I'm kind of missing a lot of these old paradigms that we had when I was working on Amazon, and I really would like in my spare time to dedicate some effort into getting an Azure implementation coded into Kops so that I can get some of those bells and whistles that I'm used to having in a certain way.

So that's something that I'm gonna start coding here as soon as I get some free time, probably in the next couple of weeks or so... So I'm excited about it.

**Brian Ketelsen:** Here's a question - for those of us who don't have a ton of Azure experience, how does Azure compare feature-wise to AWS? Are you finding that you couldn't still get everything you need done? Is it roughly analogous?

**Kris Nova:** I would say so. Actually, I kind of like it more, because of the way that we handle our resource groups. What a resource group is is it allows you to give an ID to a set of arbitrary resources in Azure, and you can group on them that way. You just tag everything with a unique name and it doesn't matter if it's a public IP, a VM, a VNet... Anything. They all help me tie together with one string, and I think that's pretty handy, especially if you plan on running multiple clusters out of the same account, which is something I did in Amazon all the time and struggled with. But I think ultimately at the end of the day it's almost one-to-one.

I can get a cluster up and running with acs-engine in one or two commands, and it's exactly what I need and I'm working fine.

**Brian Ketelsen:** Oh, that's awesome.

**Erik St. Martin:** Yeah, it's one of those things that I keep meaning to play with as well. In the past five years it's just been kind of like an explosion of different cloud providers, and it's just so hard to get time... You don't really wanna move your infrastructure too often; that's painful. But it's cool though, because a lot of tools now make it a lot easier to bootstrap a cluster, too... Especially in the Kubernetes world.

**Kris Nova:** Yeah, I was gonna say that's in my mind one of the big wins for Kubernetes, which is once you get all your infrastructure and all your applications bundled up into the Kubernetes way of doing things, you kind of don't really care about the cloud anymore, or at least that's the idea.

There might be subtle nuances, but I've had a ton of personal apps and a ton of projects that I used to run on Amazon that as soon as I had \[unintelligible 00:07:17.03\] up and running in Azure it's like "Now I'm just rocking it in Azure, and life's good!"

**Erik St. Martin:** Are you self-hosting? Like a Kubernetes inside Kubernetes?

**Kris Nova:** That's something that I think we're gonna see in the near future probably.

**Erik St. Martin:** That's one of those things that keeps getting on my list, since I've seen it on -- I know Tectonic does that too, but since I've seen it done, it's like "Oh, man... I really wanna do that...", just manage the Kubernetes components inside Kubernetes, too.

**Kris Nova:** Yeah, and that's what's beautiful about it - in order to get a control plane up and running you just need to have these bare minimum set of components that are already running in containers. It's a good model.

**Erik St. Martin:** \[00:08:02.15\] So do you wanna talk maybe a little bit about what Kops is, for anybody who's not familiar with the project?

**Kris Nova:** Sure. I guess there's a lot of -- I don't wanna say controversy, but a lot of people kind of put Kops mentally into different spaces, so I'll kind of answer what it is for me. Basically, it's sort of what is the layer below Kubernetes. It'll solve "I have no resources in the cloud, whether that be Azure or AWS, and I want those resources in place, and then after those are in place, we need to bootstrap a Kubernetes cluster." So Kops sort of makes one amalgamation of all those steps going together.

It's a deployment tool, but more importantly, it's also an after-market management tool. When you do go through the exercise of creating resources - again, whether these are IP addresses, network interfaces, VNets, VMs - you can store a concept of them, and then if you need to scale them or change them or update them or modify them later, you can.

I think it's sort of introduces this new paradigm of "I need infrastructure and I'm gonna probably wanna change it later as my use cases grow and evolve and expand", and with Kops I can do that through one friendly command line tool which ultimately becomes an API that you can trust.

**Brian Ketelsen:** So how does Kops differ in scope from kubeadm.

**Kris Nova:** Kubeadm is sort of the second half of what Kops does. Kubeadm says "The infrastructure is in place and now I wanna bootstrap a Kubernetes cluster", where Kops goes "I'll manage the infrastructure, create it if you don't already have it, and bootstrap a Kubernetes cluster as well."

**Brian Ketelsen:** Oh, okay.

**Erik St. Martin:** So you're actually speaking about your development or the history of the development of Kops, and lessons learned and all that stuff. Without giving away the secret sauce of our talk, do you wanna give maybe like a little background of what that entails, and maybe some of the struggle that you had to make you realize and learn from these observations?

**Kris Nova:** Absolutely. Yeah, again, I don't wanna give too much away here, but basically I came into Kops and the community was moving very fast, and obviously, if you've ever watched the Kubernetes community, the whole Kubernetes community moves very fast. We've started working and developing, and as I started going through this iteration cycle as a developer, I started to kind of notice that things were getting noisy, for a lack of a better term, and I started to kind of re-evaluate the code, and then me and the rest of the Kops maintainer team kind of got together and started to go through this exercise of evaluating the code and figuring out what could be better and what was really going on here.

I really think it was like a classic taste of -- we went through and we coded it with like... I believe you were saying something about best intentions, right? We were going through and trying to create an environment that would be easy for us to scale and change later. So we had abstraction, we had interfaces in place, we had put a lot of work into making this thing scalable, and actually in the long run a lot of that stuff kind of came in and ended up getting in our way. We slimmed it down and became much more expressive with our code, and that ultimately made a much quicker developer cycle.

To kind of go into the developer empathy side of things here, it actually got other maintainers and other contributors excited and involved in the project.

**Erik St. Martin:** And what was that effort like? How long did it take to refactor this codebase from this crazy unwieldy thing that you were alluding to, into something that you're more proud of now?

**Kris Nova:** The timeline was super quick... It was about three weeks. We were trying to make a release - I think I wanna say 1.54; I have it in my deck. And the thing is in the Kops community we usually try to do a release right after Kubernetes. So a Kubernetes is N, and 1-2 weeks later we wanna have supporting Kops for version N as well.

\[00:12:09.27\] So as we were sort of scrambling to get this done, we started to go through it, look at the code and realize "Oh, maybe this is a lot of effort and a lot of code here to dissolve one simple problem. Maybe we can take this whole giant bundle of Go code out and replace it with a handful of really expressive functions."

\[alarm sound noise\]

**Brian Ketelsen:** Uh-oh... Danger, Will Robinson! Danger!

**Erik St. Martin:** What is the...?

**Brian Ketelsen:** It sounds like a weather warning.

**Kris Nova:** I think we just got an AMBER alert here in Colorado, and that was my Okay Google box on the shelf behind me.

**Brian Ketelsen:** That would actually make sense, because you can't mute those things.

**Kris Nova:** Yup.

**Brian Ketelsen:** So Kops - we understand now. Can we talk about Draft? Because I think Draft has probably more impact on your day-to-day Go developer than Kops does. What's the story with Draft? There's so much hype, like "Draft is gonna change everything", but I haven't sat down and tried it yet. What's Draft gonna do to make my life easier?

**Kris Nova:** Again, I think this is moving into the developer empathy and operational empathy space. Draft makes it really easy as a developer to get an application that you're working on locally running in your Kubernetes cluster with relatively low overhead.

I guess the story behind it would be you have a Draft daemon that's running and it's watching a directory for deltas; as it detects a delta, you make a change, like add a new line and save the file, or something.

It'll detect that and it will go through this rebuilding and redeployment cycle where it'll bundle up your application into a container, push it to a registry and then use Helm - that's sort of like behind the scenes of what's going on in Draft - to actually make a deployment in Kubernetes and run that in Kubernetes.

**Brian Ketelsen:** Oh, wow...

**Kris Nova:** I used to work on Scala, and this tool reminds me of sbt quite a bit, with this sort of "You run it and it sits there, and as soon as you make a change, it'll sort of recompile" what it did in Scala. For Draft, for recompiling it's actually a build stage where it will actually compile your code if you're writing Go. Or if you're writing an interpreted language, it'll just stick it in a container and then push that out to the cluster... Which is pretty handy, because if you've ever developed for Kubernetes, you know there's like -- I have this alias in my Bash profile that I'm certainly not proud of, where it would do all this stuff that I've just talked about, and it was kind of hacky... This is a much more elegant way of doing that.

**Brian Ketelsen:** Yeah, everybody has that same nasty Bash script if they're working in Kubernetes. It almost sounds like a "Heroku for Kubernetes" sort of thing; simplifying the whole development workflow. That sounds cool. Does it use a concept of buildpacks or something similar to determine how to containerize the application, or do you still have to provide guidance on the containerization of your app?

**Kris Nova:** So there is buildpacks. I think right now we support six or seven languages, and those are built into the codebase. I know we plan on growing those over time.

**Brian Ketelsen:** That's really cool. I'm looking through the docs now to see what the list of those six is... I don't see it yet, but I'm sure it's there somewhere. That's really awesome. I'm a Draft-sold person; I'm gonna have to go play with it.

**Erik St. Martin:** I think there was an article - I forget who posted the article from the Microsoft team when Draft was released... But that listed the languages, I think -- I was trying to look it up real quick.

**Kris Nova:** There's a directory in Draft... Let me see if I can pull it up.

**Erik St. Martin:** \[00:15:54.03\] And in addition to that, how does this work as far as like -- what's the word I'm looking for here...? Sharing the cluster with production systems for like multitenancy, multiple developers leveraging the same Kubernetes cluster... Does your application as it's being built out in Draft - is that in its own namespace, or are you kind of sharing the cluster with the rest of the world? How does that work?

**Kris Nova:** So there's a command Draft in it; you specify the namespace you wanna run in, and as long as two people are using different namespaces, they're not gonna conflict.

**Brian Ketelsen:** Nice, that's really cool.

**Erik St. Martin:** So is this type of stuff mostly what you're working on at Microsoft? What other things are you responsible for? you said you're working on the Azure team, right?

**Kris Nova:** Right. So right now I'm working on some internal projects that are sort of like behind the scenes that we're gonna announce later once they're a little more fleshed out... But basically I'm on the ACS team, and building out bigger, badder, more awesome Kubernetes functionality for Azure users.

**Erik St. Martin:** So is there a particular part of Kubernetes that you prefer to work on or that you find yourself mostly working on? Because I think the thing we all find is there's so many components that it's really hard to be aware of all of them - the scheduler, the networking components and storage... There's just a lot of moving parts, and as you said earlier, it moves so fast.

**Kris Nova:** It does. To put it into perspective, when I first started on the Deis (now Microsoft) team, I had never really even interacted with a cluster past the API. My entire Kubernetes career up until January of this year was bootstrapping and digging through kubelet logs, and understanding how the components of the control plane fit together... And once the API was up and running and I could send an HTTPS request to it, that was sort of where I stopped.

I think I still kind of naturally go into that space - underlying bootstrapping and how does the system work even behind the scenes and what \[unintelligible 00:18:07.03\] look like, and making sure that's all happy and healthy. And then of course, how does the infrastructure underneath that fit into that whole orchestration bin.

**Erik St. Martin:** Kind of like the provisioning aspect and kind of how all the components communicate between themselves, and not so much the application layer - am I understanding that right?

**Kris Nova:** Yeah.

**Erik St. Martin:** So if you had plenty of free time, is there an area that you would love to dig into deeper?

**Kris Nova:** I think I really would like to get into building out new applications in Kubernetes. I've kind of always gone through this exercise of getting Kubernetes up and running, dealing with the infrastructure, solving those networking and network overlay problems... I've never actually had the joy of "I'm gonna write an app, I'm gonna stick it in a container and I'm gonna go run it in production in Kubernetes." I've always watched other people do that and it's always so fun and exciting...

So I've secretly been kind of like, "One of these days I'm gonna move my blog over, on a weekend, or something like that..."

**Erik St. Martin:** But indirectly, you've helped everybody launch their stuff, right?

**Kris Nova:** Right.

**Erik St. Martin:** So yeah, there's a lot of value in that, but I think it's always fun, looking at stuff... I look at Jessie Frazelle too, and it's like "She put what in a container...?!" \[laughter\]

**Kris Nova:** Yeah, we actually did a Helm hack night in San Francisco last week, and I might have had one too many beers, but I thought it would be a good idea to try to run IE6 in a container, just because some of this stuff we're dealing with here at Microsoft requires IE. So I was like "Hey, if I have a Docker file for that, that'll make it much easier."

\[00:19:46.07\] So I started going through the exercise, and it's actually pretty fun containerizing odd things. I had a good time. And once it's done, it's kind of done forever and you don't really have to deal with it anymore. It's kind of like you give yourself these neat little LEGO blocks.

**Brian Ketelsen:** We've gotta know how deep was that rabbit hole for IE6.

**Kris Nova:** It really wasn't that bad at all. It was really no different than getting IE6 running in Wine on Linux.

**Brian Ketelsen:** So you did in Wine and Docker?

**Kris Nova:** Yup.

**Brian Ketelsen:** That makes sense.

**Erik St. Martin:** Actually, that sparks some ideas, too. One of the programs that I always like using on my Mac is Navicat. I like having a consistent UI for database stuff... So I naturally thought on my Linux machine they have Navicat for Linux, except it's just the Windows version in Wine... So you've gotta have all the 32-bit libraries and all that junk, so running that in a container would be awesome.

**Kris Nova:** Yeah.

**Brian Ketelsen:** It would.

**Erik St. Martin:** My contribution to the world... \[laughs\]

**Kris Nova:** I think it was cool for me because containers always were kind of like this mystery, and then you kind of realize, there's a lot going on, but at the end of the day we're head in your kernel... So whatever we would be setting to the kernel "in real life" you're gonna get pretty close to the same functionality coming from a container, and it was like "Oh, this is sort of not this black mystery face anymore. I kind of get it now." And I think actually seeing the Xserver get started and actually bring something up on my screen was kind of like that a-ha moment.

**Erik St. Martin:** I think there's difficulty in adoption of containers though, because explaining the differences -- I forget who it was, whether it was Brendan Gregg or somebody... I was reading kind of like a performance article where it basically said that most of his day is spent exonerating the container, that most people wanna "Oh, this isn't performing right... It's gotta be because it's in a container" and things like that, and you start to realize there's not a lot of magic there; it's all operating system things being called; it's not the container, it's the configuration the container's getting, right?

**Kris Nova:** Right.

**Erik St. Martin:** But I guess the natural assumption is that it's a lot closer to a virtual machine, and that there's a bigger layer of abstraction there.

**Kris Nova:** But it's really not... It's just a container, at the end of the day; \[unintelligible 00:22:14.22\] something, and that's that.

**Erik St. Martin:** Yeah, that's basically what I tell people - it's a lot closer to just a highly configured process than it is a VM.

**Kris Nova:** Yeah.

**Brian Ketelsen:** So you guys were just acquired - "you guys" being Deis - by Microsoft... Tell us about the culture change there. Deis was a nice startup in the Boulder - Denver area, and then you went off to Engine Yard, and now Microsoft... So that's two big changes in two years; what's the culture like at Microsoft? How do microsofties think about Go and containers in general? What does that feel like?

**Kris Nova:** I was so impressed and fell in love so quickly... Because I was kind of worried, like "Am I gonna still be able to write Go? What is this gonna look like?" and I think after the first day of exploring /Azure on GitHub and going through the code, like -- Microsoft loves Linux. We love Go, and the culture is great. I still feel like I work at a startup, I go to work with my best friends every day, we go out to eat lunch... Life's good.

**Brian Ketelsen:** Wow.

**Erik St. Martin:** It's really interesting to see the love for Linux coming out of Microsoft in recent years, and making Bash run on Windows, too...

**Kris Nova:** I love it. And it's so cool... I feel almost a sense of pride to be a part of that, because coming from a world where Microsoft is always sort of different, and Windows is always sort of different to be like "Hey, we're gonna build out these really awesome products in this really great cloud, using Unix, using Linux, using Go, and making these awesome technical decisions..." It's really exciting.

**Erik St. Martin:** That's so awesome. So how about free time? What do you like to do in your free time? We know some stuff from the band thing... You've got quite a collection of instruments.

**Kris Nova:** \[00:24:06.01\] I do. I play a lot of music; I have a whole basement filled with instruments. Actually, we're moving next week, so they're all in boxes right now, so I'm having a guitar withdrawal...

**Brian Ketelsen:** Oh, man...

**Erik St. Martin:** Yeah, I think my guitar withdrawal has passed... Now it's just a decoration for my office. \[laughter\]

**Brian Ketelsen:** It's like one of those Ghost paints? I've just put my whole band room back together, because I had put hardwood in it over the last month... Now all the hardwood's done and I put the whole band back together last night, and plugged in my amp for the first time at 10 PM, and went a little bit crazy on channel three, and it was really -- it was awesome. It felt so good.

**Erik St. Martin:** Carlisia, do you play any instruments?

**Carlisia Pinto:** No, I don't. I played piano for a couple years when I was -- I can't even remember; maybe I was nine. But I don't remember a thing. I remember how to position the fingers. That's it.

**Erik St. Martin:** I think in order for me to say that I played the guitar, we would have to clearly define what the definition of "play" is... \[laughter\]

**Carlisia Pinto:** I might be taking up ukulele soon...

**Brian Ketelsen:** Oh, ukulele is so much fun.

**Kris Nova:** Yeah, that's such a cool instrument.

**Erik St. Martin:** I don't know, I think the keytar is a pretty cool instrument though, too. It's one of those things... To see somebody who knows how to play it is awesome.

**Kris Nova:** I played synth in a band for a number of years, and that sort of went anywhere from weighted key piano, to playing organ, to actually having this super teeny-tiny microKORG with little itty-bitty keys on it... And keytar - it's such a unique instrument, because you have to kind of have one hand that's doing piano things, and then your left hand is on that flybar where you can get the modulation and the pitch bend and everything.

It took a while to get into this -- like, I'm holding it like a guitar, playing it like a piano, and my other hand is doing guitar things. But I bought it, and then the first thing I had to learn how to play was Frankenstein by the Edgar Winters Group. \[laughter\] I played that for like six months straight. I'm pretty sure the neighbors were like "If I hear that riff one more time..." \[laughter\]

**Brian Ketelsen:** ...somebody's gonna have to die.

**Kris Nova:** Yeah.

**Brian Ketelsen:** I just pasted a YouTube search result for Jordan Rudess' keytar solos into the Slack. I've seen him live several times, but one of them he did like this nine-minute epic keytar thing, and it just changed my idea of keytars forever. Very awesome.

**Kris Nova:** I will check that out.

**Erik St. Martin:** So I think by the time this episode is released, we will be in our 30-day window to the conference. Are you well prepared? Are you sitting back, relaxing, rehearsing, or still racing and doing last-minute changes?

**Kris Nova:** I've had my deck done for a while... I gave the talk about a month ago -- I gave the short and condensed version of it for an internal thing at a company... So I think I'm ready. Probably as we get closer to the conference I'm gonna get a little more like "Oh, man... I wanna make sure that this thing is perfect and on point", but I'm just excited. This will be my first GopherCon, and I'm speaking there, so that's pretty rad.

**Erik St. Martin:** Oh, you haven't attended yet?

**Brian Ketelsen:** Oh... Newbie.

**Erik St. Martin:** It's gonna be awesome. Brian, we found the one person who doesn't procrastinate.

**Brian Ketelsen:** Right, I was just thinking "Wow, this person has their talk done ahead of time?"

**Carlisia Pinto:** That's unheard of...

**Brian Ketelsen:** Usually we spend the night before each next day, moving between hotel rooms, helping people finish their talks. Last year I don't even know if we got to sleep the night before each day, because it was just moving from one hotel room to the next, listening to people's talks, fixing their slides... It was lots of procrastination, so we're very proud of you, Kris.

**Kris Nova:** \[00:28:11.11\] Thanks. It does keep changing, I will say that. The story -- it's like a fish story, it gets more dramatic every time I tell it, but as Kubernetes grows and as I learned more, and as I kind of go deeper into the rabbit hole, I'm like "Oh, this might be another interesting tidbit to throw in there..." So I think I'm probably on my fifth or sixth revision of it.

**Brian Ketelsen:** Evolution is okay, but not having it done the day you show up to the conference - not so okay.

**Erik St. Martin:** There are those beautiful people who can just get up on stage and totally wing something, though... And I can only be in awe.

**Brian Ketelsen:** Do you know who's really good at that? This is totally random, but Charlie Nutter, the guy who does most of the JRuby stuff... He can show up at any conference and you just give him a topic and he'll riff an entire hour-long talk flawlessly with live code.

**Erik St. Martin:** Wow.

**Kris Nova:** Wow. That's like rock climbing without a rope.

**Brian Ketelsen:** Yeah, that's pretty much what I say - wow. If you've ever seen it, it's impressive.

**Erik St. Martin:** So do you guys wanna talk about anything projects and news-wise? I think we have probably like 15 minutes or so left in the show.

**Brian Ketelsen:** There are a lot of interesting projects that have been updated lately, and there's some news. Let's dive into it. I'll start with Go Play - holy cow, is that cool! So you guys know I've had this - I don't know if "obsession" is the right word, but I've been trying very hard to learn front-end development, and I'm an old dog and it's a new trick; it's not going terribly well. And I've had this conception that using GopherJS would make my life easier, for better or worse (I don't know if that's true)... But there's a front-end framework called Vecty that's built on GopherJS and it's very much in the style of React, in that you build components and reuse them, and such... But Vecty isn't terribly well documented yet, because it's still kind of in flux. And somebody built a "Go playground" thing called GoPlay.space.

If you go to https://goplay.space - it's a Go playground front-end, and there's also a back-end that submits your code off to the playground and then reformats it... But it's nice because it's got some slick integration with GoDoc, so you can highlight something and on the right side of the window it will open up the GoDoc for that stuff... So I'm really excited to see this giant codebase - "giant" maybe isn't quite the right word, but a large enough codebase that gives a great example of Vecty and and client and server-side Go... It's a really neat project, and the tool itself (goplay.space) is just like the playground, but better. It's a neat tool.

**Kris Nova:** Yeah, I was looking at this -- I saw this on Reddit the other day... I do actually try to keep up with our Golang as a moderator, from time to time. But I saw this... You're able to click on the Go functions and it would pull the GoDocs right there on the right...

**Brian Ketelsen:** Yeah, isn't that neat?

**Kris Nova:** Yeah, I'm gonna use this all the time, whenever I'm demo-ing stuff at the office, just because we have a lot of people who look at it who may not be super-involved with Go, and having the docs right there as you're going through the code is gonna be invaluable.

**Brian Ketelsen:** Yeah.

**Erik St. Martin:** So is this something that you host? I haven't looked at this yet... Is this something that you host yourself, or is it just like an alternative play site that you can go to?

**Brian Ketelsen:** It actually uses the playground in the background, but if you wanted to host your own, you could... But you don't need to, because he's got one hosted at goplay.space.

**Erik St. Martin:** Oh, cool. I'm gonna have to start using that.

**Brian Ketelsen:** Yeah, it's really slick, and there's lots of extra sugary features on top of the playground that make it neat.

**Erik St. Martin:** Oh, no way... I was just playing around -- \[laughter\]

**Brian Ketelsen:** \[00:32:09.16\] NO WAY!!!

**Erik St. Martin:** I had to open this up, because you guys were talking about... So on top of clicking on a function, you can just go to the imports statement and click the imported package and it brings up the package docs, too...

**Brian Ketelsen:** Yeah.

**Kris Nova:** Yeah.

**Brian Ketelsen:** Slick. That's why I wanna go enjoy this source code... I need to assume - or subsume - at all "read it, become it, learn it, do it..."

**Erik St. Martin:** NO WAY!!! Alright... \[laughter\]

**Brian Ketelsen:** Shut the front door!

**Erik St. Martin:** Yeah, if you click on the word "package" or the word "import" or the word "func", it actually brings up the doc for the package clause and import declarations and function declarations... The actual docs for that in the language spec. That's sweet...

**Brian Ketelsen:** Pretty cool.

**Erik St. Martin:** Yeah.

**Kris Nova:** Also, just because we're all hackers here, there's a Settings button in the upper right and you can change it over to Dark Mode and it looks really legit.

**Carlisia Pinto:** Nice.

**Brian Ketelsen:** Oh, it is legit!

**Carlisia Pinto:** Thank you for that.

**Brian Ketelsen:** Legit!

**Erik St. Martin:** And for anybody who doesn't like the standard, you can change your tab width, too...

**Brian Ketelsen:** I like 8 a lot. I don't know why, but I like 8 a lot.

**Erik St. Martin:** This is so slick.

**Brian Ketelsen:** It's slick, isn't it? I was really excited... The person that released it -- let me get the name, because I was just looking at it a moment ago... It is Igor Afanasyev (I'm not sure). Igor's been talking about it in the Vecty room in Golang Slack for a long time, and finally he released the source a couple days ago... Really cool to see an implementation of something large in Vecty. So there's GopherJS on the front-end, straight Go on the back-end... Cool stuff.

**Erik St. Martin:** Now I need to try to avoid playing with this... \[laughter\] I just wanna take random code in here to see what happens...

**Brian Ketelsen:** Right?

**Erik St. Martin:** Like, if I use a channel and I click on the pointer thing, does it do something? I'm gonna be finding hidden things now...

**Kris Nova:** Right? Like, now I'm gonna find parts of the Goland documentation that I haven't looked at before, that I'm now gonna start reading.

**Erik St. Martin:** You almost feel obligated to read it after it pops up... \[laughs\]

**Kris Nova:** Right.

**Carlisia Pinto:** So the CFP for Gotham Go - which is New York City in 5-6 October - is opened. So the CFP is open and it will close on 15th July.

**Erik St. Martin:** ...which is roughly --

**Brian Ketelsen:** The last day of GopherCon.

**Erik St. Martin:** Yes. I'm thinking today is June...

**Carlisia Pinto:** Today IS June.

**Brian Ketelsen:** It is June.

**Erik St. Martin:** No, I was thinking today is July. I'm thinking "Wow, that's only a week away that it closes", but no, it's like a month and a week.

**Brian Ketelsen:** This is how you know we're really close to GopherCon, because we don't know what day it is, we don't know what time it is, we don't really even know what month it is, and we certainly couldn't tell you who the members of our family are.

**Erik St. Martin:** We have families?

**Brian Ketelsen:** \[laughs\] Exactly.

**Carlisia Pinto:** And the last thing I will mention for projects and news is that the videos from GopherCon China are online. Apparently, most of them are in Chinese...

**Brian Ketelsen:** Oh, that's cool...

**Carlisia Pinto:** It is, so let's practice our Mandarin by watching the videos.

**Brian Ketelsen:** I wanna learn Mandarin so badly...

**Erik St. Martin:** I tried...

**Carlisia Pinto:** And with that, I have to go.

**Erik St. Martin:** You are getting kicked out of your room?

**Carlisia Pinto:** I see people -- oh, wait... They're going away. They're going away, I'm not being kicked out...

**Erik St. Martin:** Crisis averted...

**Brian Ketelsen:** Yeah, flip them the bird. "Listen, [Fastly](https://www.fastly.com/)... We've got stuff to do here. This is GoTime." \[laughter\] See if that works, and let me know.

**Erik St. Martin:** \[00:36:10.02\] You're gonna get people in trouble, Brian...

**Brian Ketelsen:** I try... I told you I was feeling a little spicy today.

**Erik St. Martin:** So Go-vim 1.13...

**Brian Ketelsen:** Vim-Go...

**Erik St. Martin:** Yes, Vim-Go rather... It was just released, too.

**Brian Ketelsen:** I was looking at the release notes - there's some really nice stuff there.

**Erik St. Martin:** Yeah, one of the cool things was the -- what's it called...? Keyify?

**Brian Ketelsen:** Yes!

**Erik St. Martin:** So if you have like a struct literal and you didn't actually put the field names on there, it'll automatically look it up and do it for you.

**Brian Ketelsen:** That is really awesome.

**Kris Nova:** Wait, so if you define a struct literal, it'll define the members automatically for you?

**Brian Ketelsen:** Yeah, so if you've used an anonymous struct literal, or a struct literal without the keynames...

**Carlisia Pinto:** Sorry, I have to go now. Bye, this was fun!

**Brian Ketelsen:** Bye, Carlisia.

**Kris Nova:** Bye!

**Brian Ketelsen:** So yeah, you've got a struct literal where you didn't put the keynames in and you just counted on ordering to manage the assignment, you can type go-keyify in Go and it will put the keynames in for you... Which is cool, because that's a Golint big red flag for keynames, so... It's kind of slick. And there's a bunch of other stuff in this release.

**Erik St. Martin:** It also allows you to be lazy though, because you can just type really fast out the values and then just do go-keyify and let it fill in the fields for you.

**Kris Nova:** Oh, that would be cool.

**Erik St. Martin:** I mean, if you remember it. That tends to be my problem - there's lots of cool things, I just never remember to use them when they're useful; I remember them after the fact.

So I came across this cool project this week too called fsql, and now that you're talking about flipping birds, Brian, it has like a whole new meaning to me... \[laughter\] But it's a filesystem SQL, so you can run basically like SQL commands to search... So rather than just using like a find command and all its flags, you can actually do like a "select star from" and do "name a file like such-and-such", and check the size...

**Brian Ketelsen:** Oh, wow...

**Kris Nova:** I was curious... I saw that too, and I was wondering if you could like do a join... If you could take files from this directory and match them on files from that directory and show how they relate. That would be useful if you're ever doing a nested vendor and you wanna figure out which packages need to go where.

**Brian Ketelsen:** You can use "and" or "or" to join conditions...

**Erik St. Martin:** Yeah, but you can't join queries...

**Brian Ketelsen:** I don't know if you can have multiple select, yeah... A UNION would be killer, wouldn't it?

**Kris Nova:** Yeah...

**Brian Ketelsen:** You could do some crazy stuff with a SQL UNION.

**Erik St. Martin:** I'll betcha they'd take a pull request, though.

**Brian Ketelsen:** Well, you know, with a little bit of a Linux command line you could do that though...

**Erik St. Martin:** Yeah, you could...

**Brian Ketelsen:** You use fsql and then throw in some awk and sed and grep and all of the rest of it, but of course, that defeats the whole purpose of having fsql... So I'll be quiet now.

**Erik St. Martin:** I think other than that I don't know whether -- are there are any other news or things going on you guys wanna talk about before we wrap this thing up?

**Brian Ketelsen:** Well, we have our \#FreeSoftwareFriday we can't forget...

**Erik St. Martin:** Yes, and I have a cool one, too.

**Brian Ketelsen:** You do?

**Erik St. Martin:** Yeah, it needs some code love... It's Kubernetes related. I'll go first, being that I'm hinting at it anyway.

**Brian Ketelsen:** Okay.

**Erik St. Martin:** So we have a thing we're working on where we're needing to support multiple interfaces inside of a container; basically, one would be the mesh network like the Flannel or something, and then the other being like a VLAN interface for outbound video data... But anyway, so we're having to build our own CNI plugin to manage this, and I came across this project called CNI-Genie, which is actually ridiculously cool. It looks like it's still in its infancy, but basically you can add a CNI annotation to a pod, and then comma separate a list of CNI plugins you want to run.

\[00:40:12.29\] So either you can get multiple interfaces, so you can have like Flannel and Calico and all these things running in the same cluster, and then issue IPs from specific ones or multiples, and then on top of that it does some metrics collection thorough cAdvisor, where if you want it to, it can choose what interface it should give you, or which CNI plugin it should use, based on...

**Brian Ketelsen:** Based on network performance?

**Erik St. Martin:** Yeah.

**Brian Ketelsen:** That's crazy. So first of all, CNI is complicated enough without adding a comma-separated list of CNI plugins to make my life more crazy... \[laughter\] So God bless them for going there, but holy cow!

**Erik St. Martin:** The other interesting thing about this though too is a lot of people implement these networks at the Docker layer, and things like that. The cool thing about this is it would allow you to run multiples, in like a multitenancy environment, where people might have different requirements.

You could host multiple applications within that network and then have different CNI plugins that manage that, especially when you get into access control and things like that... But yeah, so...

**Brian Ketelsen:** That's crazy cool.

**Erik St. Martin:** And the other cool thing is if you need to migrate, you could have a Flannel network running and all your current containers running on Flannel, and then you stand up Calico side-by-side and then you're just kind of rotating out containers over onto that new CNI plugin and new network interface. So there's a thought there, too...

**Brian Ketelsen:** That's nuts. Crazy cool. I see that it's from Huawei and I know after talking to some people who went to GopherCon China that they are doing gigantic things with Go at Huawei, so cool to see them releasing open source, and I hope that we can find more ways to have that language barrier a little easier for all of us, to see the things they're doing and collaborate.

I know the Go community in China is huge, but it's kind of tough, since I don't speak Chinese. If I could just learn Chinese, it would be so much easier.

**Erik St. Martin:** I tried... This was -- wow, almost ten years ago now that I tried to do some Rosetta Stone for Mandarin.

**Brian Ketelsen:** That's awesome.

**Erik St. Martin:** I didn't make it very far.

**Brian Ketelsen:** Alright, so my \#FreeSoftwareFriday shoutout is to a person, not a project. Everybody has probably seen this person in the Gophers Slack, on GitHub, on Twitter... This is Florian Patan, and I hope I didn't butcher your name terribly, Florian... I apologize if I did. Florian is just an incredibly active member of the community and always, ALWAYS there to answer questions and help people out. I very much appreciate all of the work he does for the community; he's one of the cornerstones of the helper crew in Go, and it's awesome to see all the time he dedicates to helping people on Slack, on Reddit, on Twitter... Everywhere. Thank you so much for all that you do, Florian. We appreciate it.

Kris, is there any project or any person you wanted to shout out for \#FreeSoftwareFriday?

**Kris Nova:** Yeah, I would say the one person in the community who has stuck out to me more in the past few months than anybody else is Caroline Van Slyck.

**Brian Ketelsen:** Nice.

**Kris Nova:** I noticed her doing some work in godep with Sam in that whole effort, and just the code that they're cranking out, and the effort and the time that they're putting in, just being super proficient... It really stood out to me. So I would like to say "Thank you for all you're doing" to her.

**Erik St. Martin:** And she actually gave a talk at last year's GopherCon.

**Brian Ketelsen:** A great talk, about adding more users to your app by supporting Windows better.

**Kris Nova:** Awesome. I can get on board with that.

**Brian Ketelsen:** \[00:44:07.28\] Exactly... Since I'm sitting in front of a Windows machine.

**Erik St. Martin:** I'm just thinking of our 15-minute \[laughter\]

**Brian Ketelsen:** ...and how long it took me to get Skype working?

**Erik St. Martin:** Well, just how quickly you go from frustration with your computer to admiration...

**Brian Ketelsen:** So since we've got a few minutes left, let me tell you about my little recent migration. Everybody knows I just can't find an operating system I love (this is not news to anybody), but I've been pushing myself more and more into the Microsoft world lately, because I think the Windows subsystem for Linux is the answer to most of the problems that I have. It may not be everybody else's answers, but I wanted a Linux development environment and I don't want to sit at Linux daily, because e-mail is terrible... Lots of things are not so great about desktop Linux.

But development on Linux is what I want, so I thought WSL is probably the way to go. And with the latest updates, I'm running the Fast Ring Insider release, so I'm on build 16.1.99, so it's a very fresh release. There pretty much isn't anything in WSL that doesn't work flawlessly. I can't find anything that doesn't work perfectly in WSL, which means that I've got a Linux development environment, and it's perfect. Now I just have to get used to the Windows part, and I'm doing pretty well. I mean, I've always liked Windows e-mail; I just have a hard time with things like keyboard shortcuts and such.

The thing that killed me today was that Skype doesn't recognize my -- well, actually it does; even worse, Skype recognizes my external audio interface for the podcast, it just doesn't pick up the microphone. \[laughs\]

So the green light shows up that I'm talking in the audio interface, and in the Windows control panel I've got a little green light showing up that says I have inbound audio in my recording thing, but Skype is like "Nope, no microphone. Thanks for playing."

**Erik St. Martin:** That's odd.

**Brian Ketelsen:** So I blame Skype more than I blame Windows, because it works everywhere else.

**Erik St. Martin:** So because we haven't started a war yet \[laughter\], Kris, what's your development operating system and editor of choice?

**Kris Nova:** And this is the part of the show where everybody hangs up on me... I run Arch Linux and Emacs most of the time.

**Erik St. Martin:** I'm in Arch Linux an Vim person, so...

**Kris Nova:** I've been actually wanting to switch over to Vim... I know it's like "Oh my gosh, Emacs for life", but the more I see it and the more I hear about the community and how fast we're coming out with things like what we just talked about, with the struct literals, I think that it might be fun to dedicate a year to just switching over and just learning Vim and seeing how I like it. That's be something fun to do.

**Erik St. Martin:** Yeah, once you get the first set of key movements down - that's usually the hardest part; after that it's just a lifetime of learning new tricks, and being around other Vim people. They see you type four characters and they're like "You know you can do that in two, right?" and you learn something new...

**Brian Ketelsen:** Using Vim in front of an audience of 20-30 people that may or may not Vim - that is probably the most painful thing in the world you can do... Because at the end of the class people are like "You know, you could have done XYZ in Vim and done this a lot faster..." Alright, fine. Just get off my back. I do not need you criticizing my Vim motions.

**Erik St. Martin:** But you used to criticize my Vim motions...

**Brian Ketelsen:** I've never criticized your Vim motions. You're the Vim god, I know nothing about Vim compared to you.

**Erik St. Martin:** The history of mine and Brian's friendship and relationship -- actually, he was my boss for a while, and yeah... He used to give me a hard time because I'd fly through stuff demo-ing... So I'd just be like changing tabs and jumping around the file and things, like... "Slow down!"

**Brian Ketelsen:** \[00:48:16.16\] "Slow down! I can't even see what you're doing, you're moving so fast!" And that was actually what convinced me that Vim is a good place for me to go, because I used like Sublime Text and TextMate before that... But watching Erik fly through Vim, I was like "Oh man, I've gotta get some of that."

**Kris Nova:** And that's exactly what it was like for me... I've sat with some people who do the same thing and I'm like "If I could actually go through and learn that, I can see myself getting obsessed with it." Like, "I have to learn more, I have to be able to do this in one less keystroke", and it's just... I grew up with Emacs. It's like what the cool kids in high school used. We used to play games on it, so for me it's just second nature, I don't have to think about it anymore. Maybe it's time for me to learn a new text editor.

**Erik St. Martin:** I'll actually plug a book for anybody interested in learning Vim... I had used Vim for probably close to ten years before I read this book. It's Practical Vim by Drew Neil. I learned a ton from that book that I didn't know from ten years of using Vim. It teaches you to kind of look at the keystrokes and kind of the multiplier, the command, and kind of like a motion activity... And you start to realize that there's a format to them, like C is for Change, D is for Delete, and then you have a motion, which is like T... And then you can say like ; , so dt; means "Delete up to the semi-colon." Ct; is Change To ; ...

Once you start recognizing those patterns (DW is Delete Word) it becomes much easier to remember them all.

**Kris Nova:** Interesting.

**Erik St. Martin:** There's a cheat sheet somewhere, too... A poster.

**Brian Ketelsen:** It's my desktop. It's literally my desktop, because for some reason, once I got good enough to open files, move around, I stopped learning all Vim things. It's like "Yeah, I can open files, I can edit...", so I don't use very many motions and I don't use many of the extras. I know how to search and replace, and I know how to move to beginning, and search and all that stuff. I'm a basic Vim user, and I keep trying to convince myself that I need to learn all of the cool stuff, and I can get everything done without learning it, so I don't.

**Kris Nova:** Yeah.

**Brian Ketelsen:** Lazy.

**Erik St. Martin:** There's actually a follow-up book to that too, called Modern Vim, which gets into Nvim and things like that. I have not read that one yet, and it's not out yet, I don't think... It's still being written, but that will be interesting when it comes out too, because Nvim is really cool, too...

**Kris Nova: **

**Brian Ketelsen:** \[laughs\] Scott Mansfield just posted an upside down T-shirt with Vim commands on it...

**Kris Nova:** Nice!

**Brian Ketelsen:** The Vim cheat sheet... That's fantastic.

**Erik St. Martin:** I need that shirt.

**Brian Ketelsen:** Thank you, Scott!

**Kris Nova:** Yeah... And I feel like you see that a lot with Vim; like you said earlier, it's a lifetime of learning how to be better at it. People who use Vim grow and get better, and the longer they use it, the more they fall in love with it and the more they sort of learn to master it. And I guess for me, I don't really ever spend any part of my day-to-day coding life improving my editor skills. I can jump to a word, jump to a line, save and exit, and I kind of stop there.

**Brian Ketelsen:** That's me. I can do the basic stuff. I've never really learned -- now, today, since we're on editors and kind of going sideways, I did the free webinar for JetBrains on Gogland IDE, and I was blown away, because I did that with Florin and I was blown away by how many cool features are in Gogland. So if you haven't given Gogland a try yet - holy cow, do they have some really awesome Go stuff. We barely scratched the surface of the things that the IDE does, and it's really cool how well Gogland thought through all of the Go stuff.

\[00:52:10.23\] When you're looking at text editors, obviously there's a huge difference between the heaviness of Vim and something like Gogland, but... I've been using Gogland more and more lately, and I'm impressed by just how much it does.

**Kris Nova:** If I'm on my Mac, I use Gogland exclusively, and I'll write in Emacs if I'm at home on my Arch Linux box... And it's great. I remember coming over from IntelliJ with like the Go plugin; getting the Kubernetes codebase to index was like this 20-minute process... \[laughter\] I think it was like 7.5 gigabytes of memory, or something, and Gogland did it in less than 20 seconds and running less than a gig.

**Brian Ketelsen:** Wow...

**Kris Nova:** It's highly optimized for Go, and it works great. I use it for demos and I code in it all the time.

**Brian Ketelsen:** Now, one of the things we were talking about with indexing speed today - if you have Javascript mixed into your GOPATH with Go code, the indexing is significantly longer, which is part of my problem, because I've got this gigantic GOPATH. But I've put all of my code in my GOPATH; I just figured GOPATH is a great place to put all code, so that's why my indexing takes longer than most, because I have all these projects with Javascript stuff, and it's indexing those too, for all of its code intellisense stuff.

**Kris Nova:** I have a question - open question for the gang here... I have multiple GOPATHs in my home directory, for different modes of writing Go that I'm in, and then I just change my GOPATH variable based on like if I'm in Kubernetes mode, or if I'm in Azure mode. Am I the only one who does that, or...?

**Brian Ketelsen:** Not at all.

**Kris Nova:** Okay.

**Brian Ketelsen:** I do it by project most times. In fact, all of my classroom material for teaching Go is a self-contained GOPATH, and then I've got GOPATHs from my personal projects, and if I have a job - which sometimes I do - then I'll have a GOPATH specifically for that, just to keep everything clean.

**Erik St. Martin:** And if you're not already aware of this, I will up your "different environment" game. There's a project called [direnv](https://direnv.net/) that I use the crap out of. Basically, it allows you when you CD into a directory, it can execute shell scripts or set up aliases or your paths specifically for that directory. I have these different GOPATHs set up, but it just automatically changes for me when I go into the directory.

**Kris Nova:** I was literally thinking about writing this exact tool like two days ago.

**Brian Ketelsen:** Yeah, I use [direnv](https://direnv.net/) for everything. All I have to do is change into the directory and it automatically changes my GOPATH, exports, the Docker variables for Postgres, whatever. It was Erik, I'm sure, that introduced me to [direnv](https://direnv.net/), or maybe its predecessor. Because [direnv](https://direnv.net/) was written in Go, but there was another one before that that isn't... Same thing, though. You have an .envrc file, and it just automatically sources that when you're changing the directory, to change your GOPATH and set environment variables.

**Kris Nova:** Awesome.

**Erik St. Martin:** Yeah, it's so much fun. I use it to change up my kube-control configs and things like that, too.

**Brian Ketelsen:** You're not using kubectx yet?

**Erik St. Martin:** Usually, there's a kube-control or kubectl. I haven't got into the kubectl thing...

**Brian Ketelsen:** No, I'm talking about [kubectx](https://github.com/ahmetb/kubectx). There's a new app called [kubectx](https://github.com/ahmetb/kubectx) that allows (it's almost like [direnv](https://direnv.net/)) but it allows you to change your context for kube-control, and you can just type "kubectx work" and get a new profile.

**Kris Nova:** Awesome, because right now I have a bunch of kube configs in my directory, and then symlink them according to what I'm doing. But this sounds awesome.

**Brian Ketelsen:** Oh, no, no, no. I'll paste this one into Slack. It's awesome. We were using this last week when I was at training, and it's so much nicer.

**Erik St. Martin:** Or even with [direnv](https://direnv.net/) too, you can have it execute shell commands and stuff for you. So you can have it just change your context when you CD into the directory.

**Brian Ketelsen:** \[00:56:09.17\] Yeah, so I just put a link to that in Slack. It's GitHub.com/ahmetp/kubectx.

**Erik St. Martin:** I feel like we need to have an episode all the time where we share tools...

**Brian Ketelsen:** A tools episode? Heck yeah. I think that'd be an awesome episode. All of the cool things that we each put into the automation of our workspaces, that make our lives easy... That'd be fun.

**Kris Nova:** Yeah.

**Brian Ketelsen:** And then we could create this gigantic, super-duper repository of the best ways to automate your entire workflow, and the end of the day you wouldn't even have to write code. You'd just show up and click a button, the code would self-write, and you'd just watch the compilers work.

**Kris Nova:** Awesome. I finally just cracked down and I decided pushing my entire home directory up to a Git repo.

**Brian Ketelsen:** What?! The whole thing?

**Kris Nova:** Well, I Git ignore downloads and stuff like that, and the big directories that have all my junk on it on my Mac book or my Arch Linux box...

**Brian Ketelsen:** So like documents, too?

**Kris Nova:** Yeah. Dotfiles, documents - I just get it all up there and then I can just pull them down whenever I need them, and edit them and push them back up.

**Brian Ketelsen:** Holy cow... That's brave.

**Kris Nova:** Yeah... I also write my own Git server, so...

**Erik St. Martin:** I have a lot of my [dotfiles](https://dotfiles.github.io/) publicly too, although I don't think I've updated them in a long time. I need to just wipe stuff and start over, and using the [Stow](https://www.gnu.org/software/stow/) tool that makes that really easy, too.

**Brian Ketelsen:** There's another one... It's not RCS, but... Shoot. I just saw the other day something like RCS, the name is like.. One of those Ruby companies made a really cool dotfile configuration tool, and I saw somebody... Elithrar - who's Elithrar? The name is escaping me... On Twitter, Elithrar. Darn it, I'm blanking. I don't usually blank on names. Anyway, I'm gonna go look it up... While you guys talk, I'm gonna go look up his dotfiles.

**Erik St. Martin:** Yeah, so some of those things are cool, though...

**Brian Ketelsen:** Matt Silverlock.

**Erik St. Martin:** But I guess I'm like an old school Linux geek, so [Stow](https://www.gnu.org/software/stow/) just works so well for me. It just automatically symlinks, and the binary is there, and it's super fast, and the package exists already, and...

**Brian Ketelsen:** [RCM](https://github.com/thoughtbot/rcm). I said RCS, but it's [RCM](https://github.com/thoughtbot/rcm).

**Kris Nova:** I have a Bin directory that is just like eight years' worth of hacky shell scripts that I add to path whenever I move into a computer...

**Brian Ketelsen:** Oh, you've gotta publish that.

**Kris Nova:** Okay... Let's find it right now. I'll pull my dotfiles out and I'll publish it for you guys.

**Brian Ketelsen:** Thank you.

**Kris Nova:** I sometimes forget that they're not on every system, and I'll be like "Wait, you don't have this kcxx27d command?"

**Brian Ketelsen:** "Doesn't everybody have that?"

**Kris Nova:** \[laughs\] Yeah...

**Erik St. Martin:** I used to do that with Git aliases... First I'd alias G to Git, and then I had actual aliases set up inside of Git too, so that I could shorthand everything, and I'd be on somebody else's computer or logged in over SSH somewhere, and I'm trying to run my aliases and it's yelling at me that it's not a valid Git command, and I'm like "I don't know what you're talking about... Yes, it is!"

**Brian Ketelsen:** "Of course it is, I just typed my alias, GX!"

**Erik St. Martin:** And I have like an alias for viewing the Git log, where it's kind of like a tree where you can kind of see railroad tracks and things like that, and I just kind of have that alias, so it'll drive me nuts when I'm on somebody else's machine and I try to Git log and it shows up in the standard way, and I'm like "Wow, wait... What is this?"

That's the disadvantage to crafting your own workspace and environment...

**Kris Nova:** But it's also one of the things that's so attractive about it, right?

**Brian Ketelsen:** Yes.

**Kris Nova:** \[01:00:06.25\] I love Linux and I love being able to configure and make everything special just for me, because... I don't know, there's something that's sort of fun at the end of the day, knowing like "This is my secret command that nobody else runs, and most people will probably hate and disagree with, but it's mine!"

**Brian Ketelsen:** That's right. That's my favorite part. Having your own Bash aliases, and shell scripts that do the crazy stuff... That just makes me happy.

**Erik St. Martin:** They're fun to share, too... I remember -- I think it was you, Brian; the first time you saw in my shell prompt where I have it change the host name's color and put the little lock there when it recognizes that I'm SSH-ed somewhere else... Because I would constantly type a command that I thought I was running locally and I would run it on a remote system...

**Brian Ketelsen:** Yeah, I still use that, by the way... Because I love it! It's so awesome. And I added -- I don't think you had it before, but I added a little icon that shows an apple if I'm in a Mac and it shows a penguin if I'm on a Linux machine, and it has the lock if it's SSH-ed. So if I don't see the lock penguin, I know I'm on a different machine. That's handy.

**Erik St. Martin:** Nice. Yeah, it's just kind of cool, because it basically changes my prompt to basically make it really -- I really know that I'm on a remote system and I pay attention better. So except for the fact that I tend to be be on my Mac, remoted into my workstation, so I've become accustomed to seeing it there, so now I feel like I need to make it smarter... The difference between like machines that I own, or are on my local network, versus not...

**Brian Ketelsen:** That's a good idea.

**Erik St. Martin:** One of the other things that I have too is a helper to be able to tab complete machines that I've SSH-ed into before, because it drives me nuts.

**Brian Ketelsen:** I have that, too.

**Erik St. Martin:** It drives me so nuts having to type out whole IPs, or trying to remember what they are, or host names...

**Brian Ketelsen:** So I changed -- what's the new dmenu replacement we're using in Arch now? What is that...?

**Erik St. Martin:** Yeah...

**Brian Ketelsen:** You know what I'm talking about... It's not dmenu, it's the replacement - what the heck is it called?

**Erik St. Martin:** Rofi.

**Brian Ketelsen:** Rofi, thank you. So I have a Rofi script that if I just hit alt+D in Arch and just type a hostname, it will automatically SSH to the hostname, and I did that with some Bash hackery.

**Erik St. Martin:** Oh, cool.

**Brian Ketelsen:** I love me some Arch. And by the way, just because I'm running Windows now does not mean I'm not running i3 anymore... Which I think is the best thing ever. There's truly nothing better. I've got Windows in the background, I open up WSL, I start an Xserver, and now I'm running i3. I have all the best of all worlds.

**Erik St. Martin:** What window manager do you use, Chris?

**Kris Nova:** Right now I am running...

**Brian Ketelsen:** [xfce](https://xfce.org/)

**Kris Nova:** Yeah, [xface](https://xfce.org/). Do you guys say [xfce](https://xfce.org/)?

**Brian Ketelsen:** Yeah, I've seen it, but I've never said it, so I don't know... Xfce is what I would say...

**Kris Nova:** That's what I have now. I rarely actually get on my Arch Linux box; I'm usually just SSH-ed into it. But I ran Gnome for the longest time, and I think that's kind of like what I grew up with... But I'm just running this now because it was sort of the prettiest at the time.

**Brian Ketelsen:** It's light, too. There's not a lot of heaviness in Xfce. I'm pretty sure Erik was the one who introduced me to i3, and once you go i3, you cannot go back. You really can't. It's the best windowing environment ever.

**Erik St. Martin:** Oh, yeah... And just being able to quickly "hotkey" full-screen stuff, or... There's like a parent/child relationship, so you can have multiple windows set up, and they're kind of grouped into one container and you can just quickly kind of full-screen those two things at once.

**Brian Ketelsen:** \[01:04:06.17\] Yeah, it's awesome. If you like tile-ing in any way, and keep shortcuts -- because once you go with i3, you could just throw your mouse away, because you don't need it. It's brilliant for command line text editor people.

**Erik St. Martin:** Yeah, I think the only time I touch the mouse is when I'm a browser. That's it.

**Brian Ketelsen:** Links for life. Just kidding... \[laughter\]

**Kris Nova:** Yeah, browsing the internet links.

**Brian Ketelsen:** I'm sure Jessie Frazelle does.

**Erik St. Martin:** Oh... If links was the only thing there, no more browser compatibility issues with CSS and the way things load...

**Brian Ketelsen:** Right? No more Web 2.0... \[laughs\]

**Erik St. Martin:** So how would you run a video? I guess you could VLC it, or something... How would that work? What would YouTube look like in links? How would you watch the video?

**Brian Ketelsen:** I swear I've seen a links plugin that will play videos... I could be wrong, but I swear I've seen one.

**Kris Nova:** There's a video player that will actually convert video real-time; it will use ncurses and actually do colored ASCII to super impose the video in your terminal.

**Erik St. Martin:** What?!

**Kris Nova:** Yeah, I'm trying to find this library right now... It's pretty cool.

**Brian Ketelsen:** I've seen that, but I swear there's a thing that will actually embed in links... And maybe I'm thinking of something else. I don't know.

**Erik St. Martin:** I have to see the ASCII video conversion.

**Kris Nova:** Yeah, it's [ascii-video](https://www.npmjs.com/package/ascii-video). It's a Javascript package, of course. There you go.

**Brian Ketelsen:** Nice.

**Erik St. Martin:** I'm gonna have to play with this now.

**Brian Ketelsen:** I don't know... That means you have to use NPM. Just say no.

**Erik St. Martin:** Oh, sweet... like I'm actually looking at it now.

**Brian Ketelsen:** That is so cool. Yeah... Okay, that's cool.

**Kris Nova:** Yeah.

**Brian Ketelsen:** Not gonna lie, it's cool.

**Kris Nova:** This reminds me of the -- did you guys ever see the Star Wars Telnet server?

**Brian Ketelsen:** Yeah.

**Erik St. Martin:** Oh yeah, yeah... I did see that. Can we release ASCII versions of all the GopherCon videos? Do you think people would be mad? \[laughter\]

**Brian Ketelsen:** Yes, let's do... Let's definitely do.

**Erik St. Martin:** I think it would have to be in addition to the real videos.

**Brian Ketelsen:** I think we've gone twice as long as we normally go on an episode because we dived into "the tool."

**Erik St. Martin:** Yeah, we're probably totally into the after-show now...

**Brian Ketelsen:** Yeah, so we should say goodbye so we can keep going... \[laughter\]

**Erik St. Martin:** Alright, so we should say bye... Thanks everybody for listening. A huge thank you to Kris for coming on the show with us today. Thanks to Carlisia who wasn't able to continue, but she's here in spirit right now; she should be back next week.

**Brian Ketelsen:** Thank you so much for coming on, Kris. It was an honor to finally talk in person - well, not quite in person, but over the internet - to my best friend. If you guys aren't aware, Kris and I are bffs; we've been bffs for several months now, but we declared it on Twitter so...

**Kris Nova:** It's Twitter-official.

**Brian Ketelsen:** Yeah. We're Twitter bffs.

**Kris Nova:** Yeah. Yeah, thanks for having me. This was a lot of fun.
