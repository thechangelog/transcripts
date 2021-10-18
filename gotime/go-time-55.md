**Erik St. Martin:** Welcome back everybody to another episode of GoTime. Today's episode is number 55. Your hosts for today are myself, Erik St. Martin, Brian Ketelsen, who joins us from Golang UK - say hello, Brian...

**Brian Ketelsen:** Hello, mate! \[laughter\]

**Erik St. Martin:** And Carlisia Pinto.

**Carlisia Thompson:** Hi, everybody.

**Erik St. Martin:** And our special guest today is Carolyn Van Slyck. Do you wanna give everybody just a little bit of a rundown, for anybody who may not be familiar with you already?

**Carolyn Van Slyck:** Sure.

**Erik St. Martin:** Just kind of who you are, the stuff you're doing, maybe your history in Go, the community...

**Carolyn Van Slyck:** Yeah, so my history with Go is a little short, but the way I got started is one day I was looking at a Bash script and I said "I wanna run this on Windows", and I had never written a line of Go, had nothing about it, but I knew it was cross-platform, so I said "I'm just gonna rewrite this in Go over the weekend", and that's how I got started. So that was for the Docker version manager.

Then in December I started working on the Go dependency manager, [Dep](https://github.com/golang/dep), the one dependency manager to roll them all, hopefully... It started off as just a couple little commits. Frankly, I just love the Go community so much. I have 17 years experience with C\#, but you guys are all so friendly, so I decided to come over and play. Now I do Go full-time and I work on Dep.

**Brian Ketelsen:** Yay!

**Erik St. Martin:** You also [spoke at 2016 GopherCon](https://www.youtube.com/watch?v=UOeeR7odY1I&list=PL2ntRZ1ySWBdliXelGAItjzTMxy2WQh0P&index=23), too.

**Carolyn Van Slyck:** I did, yes. I was trying to kind of convince people that there are Windows users out there and it's worth bringing them into the fold. I actually had someone come up to me at GopherCon this year and say that they tried it. They had no interest in supporting Windows, so they just did the bare minimum things I suggested, and they got Windows developers to start fixing things for them... It just warmed my heart.

**Erik St. Martin:** That's awesome. So they kind of laid the groundwork so that it ran, and then the community kind of jumped in and helped fix it so it ran better?

**Carolyn Van Slyck:** Yeah, that's exactly how it went down. You don't need to have Windows in order to just give people the foothold they need to contribute themselves.

**Erik St. Martin:** Did your background as a C\# developer - did that mean you were mostly developing for Windows platforms and you noticed a lot of the things that you wanted to run didn't have Windows support? What was the motivation behind that talk? What prompted you to tell the world?

**Carolyn Van Slyck:** My background has always been across the three operating systems, but for a good chunk of the beginning of my career I was paid by the day to work on C\# in the Microsoft world, and then at night I would be doing my own stuff with my Linux servers. But what happened was I got brought on to the Rackspace developer experience team, and I was the only person willing to admit that she knew Windows and could try something out and support our user base, which was like half Windows people, actually. So I just kind of got tired of helping people out and said "How can I expand this so that anybody who has a project can pick it up and make it easier for their users?" instead of just "Hey, Carolyn, can you help us make this work for Windows?"

**Erik St. Martin:** I'm curious how many of those you got wrapped into...

**Carolyn Van Slyck:** \[04:07\] More than I wanted to, probably... I have nothing against Windows; that's my beginning. I guess my frustration is that there's been this bit of a fence between the two communities, and maybe a little bit of looking down from both sides of the fence, which sounds against the laws of physics, but people still manage to do that on both sides... And I would love it to see more people, like Brian, who have kind of embraced that both sides have something really interesting and fun to offer, and it's okay to do both or support both.

**Brian Ketelsen:** That's right. All three, actually. Linux, too.

**Carolyn Van Slyck:** Yes, all three. Linux, too.

**Brian Ketelsen:** Don't be shy.

**Erik St. Martin:** I don't use Windows quite as much these days, but I think that's mostly just because most of my workflow stuff is on Mac and I develop for Linux, so therefore I develop solely on Linux. I periodically tinker with Windows, but I've never written software for it, outside of some C\# apps for people... But hopefully I will change that soon.

**Carolyn Van Slyck:** You'd be surprised.

**Carlisia Thompson:** Why hopefully?

**Erik St. Martin:** Well, you kind of need to be aware of the landscape, right? So I can't really have any solid opinions about Windows when the last version of Windows I used to any degree was like XP, right?

**Carolyn Van Slyck:** Sure.

**Erik St. Martin:** So I think just as a software craftsman you should really be familiar with where things are... It'd be like somebody in the late '90s or early 2000s using Linux being like "This stinks" and then never looking at it again.

**Carolyn Van Slyck:** Yeah, I run into that with a bunch of people. Personally, I run a Mac and then Linux is in Docker containers and in VMs, and then I run parallels, and that lets me jump into Windows apps. A lot of big companies - maybe not the cool ones, who let you use Google apps, but have things like Outlook that you need to use, and it just works so much better in Windows that I run all of those through parallels and just access them that way... So I at least stay a little bit in touch with that, and then it's not such a horrible effort to say "Let's see how my command line tool works on Windows."

That's one of the big things - you made a command line tool, it does some \[unintelligible 00:06:20.05\] script or something like that, and you may not think about Windows, but they probably wanna run it, too. So it doesn't have to be like desktop apps, it can be anything as a developer that you need, your Windows brethren probably would live to use, too. Sorry, I don't mean to jump on the Windows soapbox.

**Brian Ketelsen:** I have the biggest problem with virtualization. If I could just be happy in parallels or VMware or something like that, I would probably have a much easier life, but I cannot work in a VM, I just can't. There's a mental block, I just can't do it. So instead, I have Windows laptops, Mac laptops, Linux laptops... It's ridiculous.

**Carolyn Van Slyck:** Just have a six-port [KVM](https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine) to kind of handle it all?

**Brian Ketelsen:** I wish... I haven't found a KVM that works in modern computers anymore...

**Erik St. Martin:** Yeah, I haven't found -- obviously, I know some really good server-based KVMs and stuff, but for at-home desktop use I haven't really found a good one that I like either.

**Carolyn Van Slyck:** I have a two-port one from IOGEAR to juggle between my PC and my Mac laptop, and it works really well as long as you have those little display port adaptors.

**Erik St. Martin:** Yeah, I think my Windows usage is probably all VM too, and mostly because of like a random IE bug... And it's 2017, people - why do we have random IE bugs? Although I'm thankful, because earlier in my career I had to fight all the IE 6 stuff, and that was not fun.

**Carolyn Van Slyck:** My career goes a little bit before IE 6, actually... It used to be worse.

**Erik St. Martin:** Well, my career definitely goes before that, but IE 6 was probably one of the w-- because that's when people really started trying to do a lot of JavaScript and CSS-based stuff, and you had browser incompatibilities. And then there was just weird ones...

**Brian Ketelsen:** \[08:16\] You guys are so cute, with your IE 6... I remember back when I was a kid Microsoft sent me Internet Explorer 4 on a CD, because I was a Microsoft certified something or other... Internet Explorer 4 on a CD. I still have it somewhere.

**Carolyn Van Slyck:** You should. You should frame that.

**Brian Ketelsen:**   1997.

**Erik St. Martin:** I remember Windows 3.1... I wasn't working in computing back then, but I remember running it.

**Brian Ketelsen:** You weren't born yet.

**Erik St. Martin:** With 3.1?

**Brian Ketelsen:** Come on now...

**Erik St. Martin:** What was the release date? Somebody in Slack...

**Brian Ketelsen:** You were in grade school. What was the release date for 3.1?

**Erik St. Martin:** And I was fortunate as a kid to have access to a lot of computers, which was cool.

**Brian Ketelsen:**   1992.

**Erik St. Martin:** See, I was born. I'm young, I'm not that young.

**Brian Ketelsen:** Barely... So I have a story to tell that will help us kick off one of the main topics for our show today. I was walking home from [Golang UK](https://www.golanguk.com/archive/2017/) this afternoon; it's like 6:30 or something like that, and I'm kind of sneaking out because I didn't say goodbye to 600 people all at once, and it was so that I could come to the podcast. And as I'm turning around the corner to get on the main street to walk back to my hotel, I hear "Brian! Brian!" Some guy was shouting "Brian!" So I stop, thinking "Well, there probably are other Brians, but I guess it could be me." So I stop and I see this guy running towards me; he goes "I just wanted to let you know that I'm a big GoTime.fm listener, and I love the podcast, and somewhere around episode 42 you were doing a [interview with Asim Aslam about Micro](https://changelog.com/gotime/8), and he was mentioning these companies, and it reminded me, because I was walking really close to this company, that hey, I used to work there, and I know people there, and now they're doing Go. I think I should call them and see if they'll hire me to do Go."

So this guy, randomly listening to our podcast, calls his old boss and says "I hear you're doing Go now. Hire me back", and they did, and now he's doing Go because he listened to Go Time. I found that to be just -- I was giddy, I was so excited. That's awesome. We brought a person who wanted to be doing Go directly into a paying job, which is the best segue that I could possibly build for Carolyn. That's why we've got Carolyn on the show today.

Carolyn's doing awesome work over on Dep as a maintainer for the Dep project, which is arguably [the most important Go project on the planet right now](https://golang.github.io/dep/)...

**Carolyn Van Slyck:** Of course.

**Brian Ketelsen:** It's time for us to get her employed.

**Carlisia Thompson:** Carolyn, when you said you're doing Go full-time, is that what you meant, that you're working on the Dep project full-time? Or are you doing that and something else?

**Carolyn Van Slyck:** It's mostly Dep. You know, I've never been a maintainer before in an active community. I have open-sourced many things that I've done, but never had anyone else interested in working on it, and oh my goodness, I had no concept for how much time you could spend if you wanted to on curating issues, finding things for people to work on, helping people out... Because a number of people hit me up on Slack and were like "What's a really good issue to work on?" and I love that, I want that; please hit me up if you want Dep issues. And just going through things like that, and then obviously doing a ton of pull request reviews and trying to -- you know, I'm so used to just being an individual contributor, and whenever I do, that's what I get done that week; if I don't do it, it doesn't get done... And it's been incredibly novel to say "Well, I know we've got this pull request in, but thanks to chatting with other people in Slack, doing pull requests or just making issues for people to work on, I got 20 things done this week." That's just been a little crazy.

Maybe I should spend more time looking for a job, and less--

**Brian Ketelsen:** \[12:19\] Well, that's how you become 10x.

**Carolyn Van Slyck:** There you go, yeah.

**Brian Ketelsen:** I think it was [Bryan Liles](https://twitter.com/bryanl) who said it best, "You become 10x by helping 10 people do stuff."

**Carolyn Van Slyck:** Yeah.

**Carlisia Thompson:** So we have to go way, way back and investigate how you got into this position, if the opportunity to contribute to Dep came first and then you decided to (I'm assuming) take time off...? Because it seems that you're actively looking for a job as well.

**Carolyn Van Slyck:** Yeah, it was a convergence of events, really. Up until this April I was working at Rackspace, and they heavily encouraged me to contribute to open source... So I'd do smaller things, tools and things like that, but I was really looking to get more involved, and around December/January there were blog posts saying like "Dep is a real thing, and we really want people who aren't part of the Go Illuminati to contribute to it", and I was like "Well, that's cool, because I'm not really anybody in the Go community, but I'd still love to contribute." So I started doing a couple little things during my workday, and I justified it as -- well, we use [Glide](https://glide.sh/) right now, and we'd really like Dep to be a thing.

**Carlisia Thompson:** Let me pause for a minute so we don't get side-tracked -- or at least I don't get side-tracked. At that point, what were you doing? Were you doing any Go? You said you were using Glide, but were you also using Go for any of your work?

**Carolyn Van Slyck:** Yes, I was. At the time, Rackspace had a product called Carina, it was containers as a service, and you could push a button on a website and it would give you [Docker Swarm](https://github.com/docker/swarm) or [Kubernetes](https://kubernetes.io/), and then you could immediately start working with it. I loved it, and it was great. I worked mostly on the command line tool for that. The Docker version manager was a companion to it, and then it had a command line tool to kind of do everything. So I was definitely familiar in working with Go.

Then what happened, unfortunately, is that in March they cut my product and decided to go in a different direction. At that point I'd contributed enough to Dep that I just had this little thing in my head, which is "If they take me off this project, maybe I won't be contributing to this anymore; I'll be doing more internal things", and it just made me so incredibly sad... Because I realized Dep is for me personally -- I had gotten attached, and I thought "This is really gonna go somewhere." It's not often you get a chance to say "I worked on that thing, and ideally it makes it into the Go toolchain. That would just be really fun, it would make me feel really good about myself."

I'm incredibly lucky, I'm in a position where I had the funds to say "I'm not gonna work for a little bit, and I'm gonna focus on Dep." So I hit up [Sam Boyer](https://twitter.com/sdboyer) and just said "Are you cool with this? Like, I'm not some weirdo, lurker... Are you alright if I just work on this for a while?" He was just amazing and encouraged me to go for it.

**Brian Ketelsen:** I can't imagine Sam was disappointed by having somebody spend so much attention on Dep...

**Carolyn Van Slyck:** No, he wasn't. Excessive emoji were just everywhere at the time, trying to get me to go for it... So I did, and I just kind of switched over to doing that. In the meantime I've been looking for a job pretty passively, to be honest... I should try harder.

**Brian Ketelsen:** Well, you're on Go Time now, so that party is over.

**Carolyn Van Slyck:** There you go, yeah.

**Brian Ketelsen:** 60 million listeners. \[laughter\] 60 million listeners. Our Nielsen ratings are off the charts. I expect it's gonna be a little crazy now.

**Carolyn Van Slyck:** \[16:13\] I'm all for that.

**Carlisia Thompson:** I have a couple questions too about your beginnings. At that point when you said "Okay, I'm going to take time off and work on Dep full-time for a while", at that point how much Go experience did you have? And my other question is "How did you becoming an official maintainer for Dep happen?" Was it like you got a notification one day, or the conversation you had with Sam Boyer - was that what did it? How did it happen? What was the benchmark that made you go from non-maintainer to maintainer?

**Carolyn Van Slyck:** Sure. So yes, I had been coding in Go; it had been a little bit of some back-end services to power Carina and then also all the command line tools. So I was pretty familiar with it, but mostly from the CLI perspective, which Dep is a CLI, so that was kind of a natural transition for me. And then how did I become a maintainer... So I started with just the tiniest little PR, and I gotta give a shoutout here - Brian is the reason I did the PR in the first place... Because I didn't know where to start contributing, and he did this wonderful workshop webinar about how to do your first contribution, your first pull request for a Go project, and it just kind of gave me the nudge I needed to be like "I don't have to be someone who works at Google, somebody who's sanctioned to work on Go to submit my PR." So I did, and I just kept giving more and more, and after a couple months of doing that, I felt confident enough in a couple areas to start doing pull request reviews, and just give people feedback and things like that.

Sam noticed that and said "Hey, I've noticed that you're not just submitting stuff, you're also trying to help other people and give pull request feedback. Would you be interested in just being a maintainer and being able to merge some of these?", instead of waiting three days for him to come around and merge it. So that's kind of how it came about. So it wasn't like he had to ask the question, get down on one knee, and I said yes... \[laughter\]

**Carlisia Thompson:** That's so funny.

**Carolyn Van Slyck:** I think Dep at the time was very unique - I could be totally wrong; maybe people with more experience with open source could tell you, but for a more established project where there already were maintainers, I think maybe there would be more involved with becoming one... But I was basically one of the people stepping up and helping take the load off of Sam, because he got another job, and I think he has a family, and kids, so just being someone else there and being able to off-load some of that, so it's not just the Sam show, I think kind of helped that work out.

**Brian Ketelsen:** That's really awesome. Your tweet when you linked to the pull request that was finally accepted - I still remember that tweet, it made my day.

**Carolyn Van Slyck:** It made my Twitter month, I think.

**Brian Ketelsen:** You don't often get to see direct results from things you do, like the webinars. You hear people say "Thanks, that was awesome", but tying a webinar on contributing to Go directly back to a pull request and a first contribution to an open source project - that really tied the loop and made it fun.

**Carolyn Van Slyck:** Yeah, every time you get feedback like that it kind of helps give you that emotional recharge to go back out and do more things in the community... At least that's what I think. When I go to a meetup sometimes, even when a meetup doesn't go well last night I turned into a drowned rat and got totally rained out, and then had to give a talk dripping wet on the concrete at a [Chicago Gophers](https://www.meetup.com/Chicago-Gophers/), and it was really hard to be like "Why did I do this? I had to pay money to drive here, to park in downtown Chicago, and then give a very wet presentation...", but then people talked to me afterwards and it was all worthwhile.

**Brian Ketelsen:** \[20:10\] So let me recap here for just a minute... You've given a talk at GopherCon, which is the most prestigious conference in the world, you are a maintainer of Dep, and you talked at the Chicago Go meetup, too?

**Carolyn Van Slyck:** This was my first talk, at the Chicago Gophers...

**Brian Ketelsen:** Don't downplay this, Carolyn. Work with me here... Don't downplay me.

**Carolyn Van Slyck:** No, no, but I wanna talk about Women Who Go.

**Brian Ketelsen:** Okay, talk about Women Who Go, but just allow me to make my point that you're a goddess in Go, and you are one of the anointed, because you're awesome, and you made yourself that way.

**Erik St. Martin:** Brian should be paid to be a hype man.

**Brian Ketelsen:** Ain't I right?

**Carolyn Van Slyck:** I call him my Gopher job sherpa, to be honest... I've seen your magic in the past, and I'm glad that it's being focused on me.

**Brian Ketelsen:** I'm the Go whisperer...

**Carolyn Van Slyck:** I just wanted to call out that I started -- not started, but Women Who Go is obviously a thing, and when I realized that there wasn't one in Chicago, about the same time I started one up as well, so... If there's any ladies listening out there and you're near Chicago, even in the burbs, please, [come hang with us](https://www.meetup.com/Women-Who-Go-Chicago/).

We make little \[unintelligible 00:21:18.06\] so we'll get together and then we'll go to Chicago Gophers or other -- it doesn't have to be Go-related; we all went to the Docker birthday party, and just kind of makes a little "Go ladies" posse. It's fun.

**Carlisia Thompson:** So what was your talk last night about?

**Carolyn Van Slyck:** Dep, of course. At GopherCon this year I did a [lightning talk](https://www.youtube.com/watch?v=eZwR8qr2BfI&list=PL2ntRZ1ySWBfhRZj3BDOrKdHzoafHsKHU&index=15) about -- you know, Sam gave you the overview of "These are all of our really big plans, and then this is just brass tacks... This is how Dep works as of today, not how we'd like it to work in a month from now, and this is how you get started." And then just feeling questions as people try it out.

**Erik St. Martin:** You know how ironic it would be if your talk was about writing dry code? \[laughter\]

**Carolyn Van Slyck:** I hope no one took a picture last night, because literally I finished my talk, I looked down and I had a puddle underneath.

**Brian Ketelsen:** Oh, wow... That's rain.

**Carolyn Van Slyck:** Yeah... It was a little wet in Chicago last night.

**Brian Ketelsen:** But we command your discipline, and -- what's the word where you do things that you're supposed to do because you agreed to do it... There's gotta be one of those words.

**Erik St. Martin:** Commitment, responsibility...

**Brian Ketelsen:** There you go, all of those things. Thank you, Erik, for the words... Which I've lost.

**Carlisia Thompson:** One reason why I thought it was so cool that you were coming on this show today was to hear your story and share your story and share your background so people can know how awesome you are... And Sam Boyer, by the way, was saying "Yes, correct!" when Brian was saying that you are great... But also to give people an idea of how to take some of your experience and apply it to their journey. As Go is growing, I meet a lot of people that want to start working with Go, and they want to know how to start. And I'm sure they're not asking directly, but they also want to know how to get motivated, how to get wins -- this is me thinking that it's important for people who are starting on anything. Do you have anything to suggest to people that are beginning on this journey?

**Carolyn Van Slyck:** Yeah. First of all, when you're getting paid to do something other than Go all day, it's really hard to say -- it's the weekend, the kids are outside playing and you're like "No, but I'm gonna go read a book and then go through some coding exercises." So figuring out ways to sneak in using Go when someone's paying you - in my opinion that's kind of the trick. No one at Rackspace set out to pay me to do stuff with Go, I just kind of asked for forgiveness later, and tried to pick off things that weren't critical to our business path. It was a safe kiddie pool for me to learn Go. So what I kind of picked off was a Bash script.

\[24:22\] The nice thing about that - you'll find the little scripts. Usually every team has dev tools, little things that help their CI along, or commit hooks, things like that... They're usually written in Bash, or Python, or something like that, and the beauty of it is someone already wrote it; they've identified something, you know exactly how it works, and all you have to do is the port. You have to just figure out how to convert Bash or Python to Go. You don't have to come up with a revolutionary idea, you don't have to rewrite a to-do list or whatever (name something like that). Or a Slack bot is another good one. I mean, even if you just make a silly one...

One of the Women Who Go made a Slack bot that you could say Welcome to someone to the Women Who Go channel, and it would go to [gopherize.me](https://gopherize.me/) and make them a custom gopher. Those are all just like nice, little things you can do, and usually you can sneak that into your day job to try out Go and do things with it, and it'll kind of get more people working on things, because you know, someone next to you wrote something in Go, and then you see that, it gets checked in, you start using it, and then someone else on your team might pick it up, and that kind of helps give legitimacy and momentum to what you're doing, instead of just "I'm the random person who really wants to play with the shiny things." Instead of it being a shiny thing, you're using it to get stuff done on the job.

You could say, like, books and things like that... I definitely am reading things as I go, but it's just not how I work. How did I learn Go? I didn't read a book, I didn't do anything; I literally just looked at the language spec, looked at the Bash script I had to work off of, and just ported the Docker version manager over and said "Now I know Go." I didn't know Go at the end of the weekend, but I really felt like I did, and that was a win.

**Brian Ketelsen:** Like Neo in the Matrix, "I know kung-fu."

**Carolyn Van Slyck:** Yes, exactly. That's definitely how it went along. But once you get something like that though, having pull requests I think is one of the best ways that I have learned the Go way, the idiomatic way of doing things. I brought over a ton of -- I won't say "bad habits", but definitely different ways of looking at how to solve problems from my background in a bunch of other languages, like C\#. I have things in my toolbelt that maybe aren't the best tool anymore when I'm in Go. When I would open up PRs, I'd just be honest about it and say "Hey, I'm new to Go. I would appreciate it if you'd give me feedback on whether I'm doing this the Go way. I tackled it this way, I got it to work, so that's why I opened the PR, but if you could give me more ideas for how to make this really Goey, the better."

I haven't had a single person be mean to me when I say something like that. Everyone's just been really quick to teach me for free, so that was kind of nice.

**Carlisia Thompson:** That's really cool.

**Carolyn Van Slyck:** Yeah. In an open source community, even if you don't have something to do -- I started to run out of Go things to do at work, and that's where I started looking around and I saw Dep and I kind of jumped on that and started working on it. And it's really intimidating at first to contribute to a new project, especially when you're like "I'm a beginner, what on Earth could I do?", but usually the littlest things are sometimes the things that are most often overlooked by the people who are doing the heavy lifting from day to day.

\[27:56\] When we went into GopherCon, we had a readme and I think it was written in December, and there was no reality to that readme; it did not reflect how the tool worked at all at that point. And to the last day on the community day, I sat down at a table with like six people and we said "Let's make docs, let's do this." Some people didn't know Go at all, but it didn't matter. They took the tool, they used it, and their beginner perspective was incredibly valuable to us. I had been using things at this point long enough that I just didn't see the rough patches. We made a bunch of issues when things didn't work the way they should, and at the end of GopherCon we had a readme that worked. Our FAQ was much more organized, and we made that big announcement and there was something to back it. It wasn't just "Well, you guys are all gophers, go figure it out." We actually had enough information there to help people really understand how to use it and just boost the likelihood that anyone would stick with it.

**Erik St. Martin:** I wanted to make a comment too about the timeline, too. I think when people try to pick up a language or contribute to a project and stuff like that, I think people can beat themselves up over time, too... And we don't realize -- like you said, if you can sneak it in at work, you can learn it a lot faster. For most people it's really hard to just in your pastime acquire some new skillset unless you have no family and things like that. And it's the perception, right?

**Carlisia Thompson:** I love the insight that Carolyn had about being a person that is attracted to a shiny new thing, versus being a person who actually took the technology and applied it to something that had use. When I started my journey into Go, I was that person who was attracted to the shiny new things... \[laughs\] I just wanted to do Go. Half was that I was ready to move on from what I was doing in terms of technology, and half was like "I really like the way this looks, I wanna give it a try." And interviewing for jobs that were hiring for Go -- usually there are two types of employers, I think... One is "I just want a good engineer, it doesn't matter what they did in the past. They can learn easily." Then there are other types who want you to have specific knowledge. But either way, I think if you are applying to join a team that's doing Go, they want to know that at least you're not gonna hate it, and join and hate the language, and then leave or want to change the teams just because you didn't know what it was all about, then you learned it, then you hated it and now you want to drop out.

So having history to show that "At least I have looked into this and it appeals to me" is very useful, but of course, if you have something solid to show, versus "I haven't really done anything at work, I just wanna do this language and I have done a couple things here and there", it makes it a lot easier. But don't discount that also if you don't have the opportunity to work, there are many things that you can do (at least I think) to get you up to that point where you have a solid enough knowledge of the language and the ecosystem to be able to walk into an interview and be confident and show that you know enough to do the work.

**Carolyn Van Slyck:** Yeah, not everyone is fortunate -- so, I have no excuse to use Go other than Dep right now... But another thing I'm trying to get experience with is Kubernetes, which is kind of in the Go cloudy world... And with no real things to do, I decided to set up my home network Kubernetes, and then figure out what home automation jobs I can run on it. I don't have a barbecue cooker or anything like that; I don't have Raspberry Pi's monitoring my hog outside or anything...

\[32:08\] For example, I just got a new NAS, and it has Plex on it and it lets you stream movies to your TV... So as a present for my husband, I've been converting all of our Blu-rays and DVDs onto it, because getting up from the couch to watch a movie is, you know, a real problem in our household.

**Brian Ketelsen:** Oh, it's terrible.

**Carolyn Van Slyck:** Yeah, it's just brutal. The number of times we've streamed a movie that we owned just because we didn't wanna get up is maybe a little embarrassing. So here's a great way -- is it a terribly interesting thing to talk about? I'm not quite sure. It's not like a big data scale type distributed problem, but I have a couple Intel NUCs - these tiny little computer kits that you can buy, and they're all my little nodes, and they are just running 24/7, ripping movies for me.

So sometimes there's things you can do that scratch your own itch, that give you that experience if you don't have something terribly legitimate and important to do at work with whatever it is you wanna learn.

**Brian Ketelsen:** Those NUCs are awesome, by the way.

**Carlisia Thompson:** Absolutely.

**Brian Ketelsen:** I have one, and it's just the best little dev machine ever.

**Carolyn Van Slyck:** Oh, they're so cute. I admit that I have five of them. \[laughs\]

**Brian Ketelsen:** Absolutely. And be proud of it, too.

**Carolyn Van Slyck:** Yeah, I couldn't help myself, because I wanted to build out an HA cluster. I don't know... Because it's very important that my movie ripping is always available.

**Erik St. Martin:** Now, have you started working on the serious problem of how to make Kubernetes get you a drink or a snack?

**Carolyn Van Slyck:** I want a little robot. I want Johnny 5 from Short Circuit, and he can just bring me drinks and fight off robbers, and things like that. I think if you looked at his system programming, it could be in Go. You never know.

**Brian Ketelsen:** Node, disassemble #5.

**Erik St. Martin:** Although I will say it's probably good, that lack of desire for me to get up and get a snack, because that probably prevents me from snacking more than I should. Because I'm like "How bad do I really want this chips?" \[laughter\]

**Carolyn Van Slyck:** My cat likes to steal food off my plate like a ninja. As you're bringing your food up to your mouth, he's already pulled off three chips from the plate. That's just my own dieting strategy, I just let him sit with me, and whatever ends up in my mouth I guess was the right amount, most of it ends up on the floor with him.

**Brian Ketelsen:** Alright, so we've already established that you are a goddess; we've got the GopherCon talk, we've got the Chicago Go meetup, we've got the Kubernetes cluster at your own house...

**Erik St. Martin:** Women Who Go...

**Brian Ketelsen:** Dep management... What is it that you're looking for out of a job? Because I think we're gonna have to beat off the people and keep them away from us, so we need to filter this down a little bit. How do we narrow the pipeline down to your ideal job?

**Carolyn Van Slyck:** I would love to continue working in the open source space in some way, working on cloud infrastructure. When I worked on the Carina product I just loved it. I used to work in - I'm taking a little jog here for a second, but it will go somewhere... I used to work at a big enterprise company with draconian IT, and the thought of ever getting your own cloud or running something on AWS or getting a VM in less than three months was a pipe dream. And whenever -- at Rackspace we were able to say "Here's a container. Run something, and you don't need to get an approval or acquisition" - it was just magic, and giving that to the customers... I loved it. I've enjoyed my 17 years of doing app development, but right now I really would like to empower other devs -- I know it sounds so silly, but I love devs; I'd rather they were my customers than people with money. This is why I'm having trouble finding a job.

\[36:05\] But I love working in open source, and I like running stuff in the cloud, I love playing with all these things, and I'd like to make the software that runs the cloud, I guess... Anyone's cloud. I'm not picky.

**Brian Ketelsen:** That narrows it down nicely, and I know [Heptio](https://heptio.com/) is hiring, so I think we should make a phone call to Kevin and Joe over at Heptio and make an introduction. That's a good start. They're probably listening now, because everyone listens to GoTime.

**Erik St. Martin:** All 60 million of them.

**Brian Ketelsen:** Yeah... Call me, Joe. Call me. I'm feeling saucy today.

**Erik St. Martin:** So I think we probably have 15-20 minutes left. Does anybody wanna talk about interesting projects and news? And then we'll get into \#FreeSoftwareFriday.

**Brian Ketelsen:** Let's do.

**Carolyn Van Slyck:** Sure.

**Erik St. Martin:** Alright, I'll start first. I saw a really cool article by [Filippo Valsorda](https://twitter.com/FiloSottile) about [Calling Rust From Go](https://blog.filippo.io/rustgo/), which was really crazy, and I need to read it again. He gets into assembly, and the calling conventions and stuff like that. But it's super cool. He basically allowed \[unintelligible 00:37:18.08\] create a library in Rust and link it to Go, and call it without using cGo. It's a super cool article, even if you're not interested in calling Rust from Go; he advocates you don't do that. But it was a fun kind of learning experience looking through the breakdown of the assembly and calling conventions and stuff.

**Brian Ketelsen:** Funny aside, based on Filippo... He spoke at [Golang UK today](https://www.youtube.com/watch?v=Lxt8Vqn4JiQ&index=6&list=PLDWZ5uzn69eyM81omhIZLzvRhTOXvpeX90) and they didn't have an MC, so I ended up MC-ing this afternoon, and I introduced Philippo as "The guy who writes the blog posts that make me feel stupid." Because it's true - his blog posts are just like "What? What did you just write?" Yeah, so that was it. Just FYI.

**Erik St. Martin:** Yeah, he's done some crazy ones, like the cGo 1 and things like that, and some TLS...

**Brian Ketelsen:** Yeah, we got a lot of applause on that one too, so I'm not the only one.

**Erik St. Martin:** \[laughs\] I think we mentioned it on last week's episode too, but [Go 1.9 RC 2](https://groups.google.com/forum/#!msg/golang-announce/lcUUfQalrr4/pvJm8_4LBwAJ) is out, and you're all trying your code against it, filing bugs... Right?

**Carolyn Van Slyck:** Yes.

**Brian Ketelsen:** Yes, I have some production workloads running with Go 1.9. \[laughter\]

**Erik St. Martin:** I think that's just you, Brian.

**Brian Ketelsen:** What did we learn at GopherCon? What does RC mean for Go? It means that Google believes in it enough to put it in production.

**Erik St. Martin:** That's true, they did say that.

**Brian Ketelsen:** Was I the only one at GopherCon this year? I think I may have been.

**Carolyn Van Slyck:** It's a great point.

**Brian Ketelsen:** That's what they said. So if Google can put Go 1.9 RC 2 in production, then at least you could put just a little bit of your workload on it, too.

**Erik St. Martin:** Very true.

**Carolyn Van Slyck:** You know, if for no other reason than the new dot-dot-dot syntax not picking up what's in vendor just makes tears come to my eyes, it's so useful.

**Brian Ketelsen:** Yeah, exactly. Just so you could `go test` the current directory without skipping vendor, baby. That right there is the best thing ever. Well, maybe not ever, but it's a really nice thing.

**Carolyn Van Slyck:** Well, now that a bunch of people are starting to commit to vendor because at least the people on Dep have been encouraging it, the first thing everyone says is "How do I not run my dependencies tests?", the answer is "Use Go 1.9."

**Brian Ketelsen:** Upgrade.

**Carolyn Van Slyck:** Yes.

**Erik St. Martin:** \[39:50\] I also ran across two really cool libraries for Go. Well, one of them is something implemented in the first, but it's an interactive prompt library. It's ridiculously cool. It's called [go-prompt](https://github.com/c-bata/go-prompt), and it has some fun tab completion and stuff. If you click the link in the doc, you can kind of see how it works.

**Brian Ketelsen:** Wow...

**Erik St. Martin:** And I will link that for everybody who's following along live.

**Brian Ketelsen:** Man, shut the front door!

**Erik St. Martin:** And the other link is called [kube-prompt](https://github.com/c-bata/kube-prompt), which is basically Kube CTL (Kube Controller, whatever you wanna call it) - an interactive version of that implemented with this library. It's just ridiculously cool. I haven't built anything with it yet. I played with it a little bit, but now I want all my CLI's to work like this.

**Brian Ketelsen:** This is so amazing. Now, of course, it doesn't translate to radio very well, so everybody should just go to [github.com/c-bata-go-prompt](https://github.com/c-bata/go-prompt) and watch all the little ASCII cinema stuff on here, because it's so wicked cool.

**Erik St. Martin:** And it has the hotkeys and stuff like that to move forward, and things like that.

**Brian Ketelsen:** That is so pretty.

**Carolyn Van Slyck:** It's mesmerizing.

**Brian Ketelsen:** I'm rewriting my talk tomorrow.

**Erik St. Martin:** You're rewriting it?

**Brian Ketelsen:** Yup. That is so cool! Okay, I love this. I'm releasing a CLI tool tomorrow at my Golang UK talk. It's a secret. And I'm gonna have to rewrite the whole damn thing now using this. \[laughter\] I hate you.

**Carlisia Thompson:** I'm doing a bunch of CLI tools, maybe I'll see if I can add this. It looks really cool.

**Carolyn Van Slyck:** Was this using Cobra? Or how are they doing all this magic with their CLI? The little drop-down and everything.

**Brian Ketelsen:** I don't know, I just looked at the imports for a couple of these files and there aren't that many of them. It's almost all standard library, so I'm curious as to what they're doing.

**Carolyn Van Slyck:** Yeah, hopefully it's not a hard mode. I wanna rip this off and use it, too.

**Brian Ketelsen:** Yeah, this is really cool.

**Erik St. Martin:** I'll be interested to see how many CLI tools change after this, but really cool...

**Brian Ketelsen:** Yeah... Nice catch, Erik.

**Erik St. Martin:** And then there's another one that was cool, and I haven't played with this at all, but it's interesting in the fact of... This is the first thing I've seen -- it's called [GoWorld](https://github.com/xiaonanln/goworld), and it's for a distributed game server, and it kind of implements the logic for clients to talk to gates, which kind of dispatch them off to servers, and manages the objects and world and things like that, and you can hot-swap stuff. I didn't find any example games that had been written against it, but I think they had a chat client that was implemented against it. But I think it's really cool just to see -- I love seeing new use cases for Go, outside typical API's and command line tools, so I thought this was really cool, and I'd be interested to see if a distributed game or a mass multiplayer game actually ends up implemented -- whether in this, or in general, just in Go.

**Brian Ketelsen:** Well, we already know that Bethesda is using Go...

**Erik St. Martin:** Oh, really? Do you know what they're using it for?

**Brian Ketelsen:** I don't remember, but we saw a recruiter hiring for Go people at Bethesda a month or two ago... So there's Go stuff somewhere; we don't necessarily know what pieces of their infrastructure are Go, but definitely Go in the gaming industry. That's cool.

**Erik St. Martin:** Did anybody else have any other projects, news, blog articles they happened to run across this week? Everybody's been pretty busy?

**Brian Ketelsen:** Hang on, I'm behind the curve, but I did star a couple projects that were interesting... Oh, we talked about Go-tracing last week, right? So there's a good project written in Go for JS, [Vecty](https://github.com/gopherjs/vecty), that's really cool. Vecty is the GopherJS framework that looks a lot like React, but it's native Go that compiles down to [GopherJS](https://github.com/gopherjs/gopherjs) and it's really cool.

\[44:05\] And there's a person that wrote their own portfolio website in GopherJS in Vecty and it's actually been the most reasonably attainable article on how to do GopherJS, how to do Vecty. It's at www.marwan.io/blog, and there's a [Writing a Simple UI With GopherJS blog post](http://www.marwan.io/blog/simple-ui-gopherjs-vecty) on there. I'll drop that in the Slack because it's a particularly good read. It was the first time I thought "Oh, maybe I could understand this whole front-end thing."

**Erik St. Martin:** I'm gonna have to play with that. I still haven't done much on GopherJS.

**Brian Ketelsen:** I think GopherJS is pretty darn awesome. You still have to understand the DOM. You have to understand the whole event model of the browser, but at least you don't have to write JavaScript, or TypeScript, or ES2015 -- there are so many names for all this stuff... Whatever.

**Erik St. Martin:** \[unintelligible 00:45:06.03\] in the web development world, so writing JavaScript doesn't bother me too much.

**Brian Ketelsen:** Whatever. \[laughter\] Whatever.

**Erik St. Martin:** I'm taking my ball and going home.

**Brian Ketelsen:** That's right. You just take all your JavaScript and have fun with that.

**Erik St. Martin:** Anybody else have anything, or do we wanna jump into \#FreeSoftwareFriday?

**Brian Ketelsen:** No, let's do \#FreeSoftwareFriday, I have a good one. It's actually a repeat -- I think it's a repeat. I'd be shocked if it wasn't. So [github.com/spf13/cobra](https://github.com/spf13/cobra). If there were an easier way to build a command line application in Go, I don't know what it is. It's full-featured, it's fast, it's got code generators, and it's just awesome. [Steve Francia](https://twitter.com/spf13), thanks for building Cobra. Pretty much every major CLI app in Go now is using Cobra in the back-end, so there's a reason for that.

**Erik St. Martin:** And then next week you get to shoutout to the new Go Prompt. \[laughter\]

**Brian Ketelsen:** Shhhh! Don't tell anybody.

**Erik St. Martin:** Carlisia, what do you have? Anybody, anything?

**Carlisia Thompson:** I don't have anything today.

**Erik St. Martin:** And how about you, Carolyn?

**Carolyn Van Slyck:** I'd like to call out Captain Safia ([Safia Abdalla](https://safia.rocks/)), because she was actually the person who made me think that I was capable, and I could be one of those cool people who led a meetup or did a workshop. It was a while ago, and she was leading a tutorial at PyLadies for how to learn data science in Python. She used Carina to do it, and she used the [Jupyter project](https://jupyter.org/) and hosted it all. It just lit something up in my mind and I loved it, and she just inspired me beyond belief and I worked with her for the next couple of months to kind of do something similar and run workshops myself and teach people Docker and things like that. That's kind of what gave me the momentum and the guts to do something like Women Who Go Chicago.

So it's less like the projects she's done. She's done amazing work with Jupyter and everything, but personally, she's inspired me so much... I am where I am because she gave me the encouragement to do it, and that people wouldn't just boo me when I tried to talk.

**Brian Ketelsen:** That's awesome. I love it.

**Erik St. Martin:** Mine for this week is a repeat - it's somebody else's repeat, but everybody will be proud of me... I finally got around to using [Visual Studio Code](https://code.visualstudio.com/) and the VS Code Go plugin.

**Brian Ketelsen:** Nice!

**Erik St. Martin:** \[47:58\] Yeah, so huge shoutout to [Ramya](https://twitter.com/ramyanexus) for all the work she does on that, and to all the other contributors. I had a lot of fun playing with it this week. I'm still very much itching to use Vim, but she was on the show before GopherCon and I promised after things lightened up a little bit after GopherCon that I would give it a good Go... So that's what I've been working with this week.

**Brian Ketelsen:** [Code](https://code.visualstudio.com/) is pretty awesome, there's no doubt about it.

**Erik St. Martin:** It is. I love Vim, but man, that's nice.

**Brian Ketelsen:** Nice. How about you, Carlisia? Did you have anything?

**Carlisia Thompson:** I don't... Not today.

**Brian Ketelsen:** Okay.

**Erik St. Martin:** Alright, I guess that's a wrap. We're getting into the after-show now. That's where we say all the bad things about everybody. \[laughter\]

**Brian Ketelsen:** We have to thank our guest and do all the show closing stuff first, Erik. You forgot all of that.

**Erik St. Martin:** I'm getting there, I'm getting there.

**Brian Ketelsen:** Okay.

**Erik St. Martin:** Alright, thank you everybody for coming on the show. Definitely thank you Carolyne for coming on and joining us, and anybody who's hiring - you can't go wrong hiring Carolyn.

**Brian Ketelsen:** Yeah, seriously... Get on it!

**Carolyn Van Slyck:** Yeah, hit me up on Slack.

**Erik St. Martin:** We'll put your contact info in the show notes.

**Brian Ketelsen:** Show her cell phone number... \[laughter\]

**Erik St. Martin:** Address, social security number - all the good stuff. So if you enjoyed the show, definitely share the show with colleagues, friends, anybody who would find it interesting. You can find us at GoTime.fm. We are on [Twitter](https://twitter.com/GoTimeFM). If you wanna be on the show, have suggestions for topics or guests, even questions for the guests, you can find us at [ping](https://github.com/GoTimeFM/ping), just file an issue. With that, goodbye everybody! We'll see you next week.

**Brian Ketelsen:** Goodbye! Thanks, Carolyn.

**Carlisia Thompson:** Yes, thank you.

**Carolyn Van Slyck:** Bye! It was great talking to you.
