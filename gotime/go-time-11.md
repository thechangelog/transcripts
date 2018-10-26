**Erik St. Martin:** We are back for episode number 11 of Go Time. I'm Erik St. Martin. Today we have Brian Ketelsen on the line...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** And Carlisia Campos...

**Carlisia Pinto:** Hi, everybody. Glad to be here.

**Erik St. Martin:** And our special guest today is the queen of containers, Jessie Frazelle. How are you?

**Jessie Frazelle:** Good, how about you?

**Erik St. Martin:** Doing great! So we were out last week and we are back; we've got some good news before we get started. Today we're gonna talk to Jessie about all things containers, working on open source projects and any other fun topics that we come up with along the way. Before we get started we have two exciting pieces of news. First, Carlisia is now officially a full-time Go developer.

**Carlisia Pinto:** Oh my gosh, yeah!

**Erik St. Martin:** Do you wanna tell everybody a little bit about that, Carlisia?

**Carlisia Pinto:** Sure. So I've been open to this possibility for a while now, and I will be joining the fine folks at Fastly next week; next Tuesday will be my first day there, and I'll be in San Francisco for my own boring week, and I'll be working remote from San Diego. I'm super excited... You should definitely check out Fastly, they're awesome.

**Brian Ketelsen:** That's great, this is great news.

**Erik St. Martin:** We're excited for you.

**Carlisia Pinto:** It's such a good team, I love all of them.

**Erik St. Martin:** And no more Ruby.

**Carlisia Pinto:** No more Ruby, just Go. APIs and network stuff.

**Erik St. Martin:** The second piece of news is not only are we not kicked off, but we have sponsors. We actually have two sponsors for this episode. Linode, who will be doing all of our hosting for the Changelog and Go Time CMS' that are being worked on and we've talked about before, and also Equinox. We'll talk a little bit about each of those later in the show, but first let's get started with Jessie.

Jessie, you also have a new job, right?

**Jessie Frazelle:** Yeah, so I started two weeks ago at Google, but I really have only done one week of orientation and then I went to a conference, so it's sort of surreal.

**Brian Ketelsen:** But business as usual for you, right? A week of work, a week of conferences...

**Jessie Frazelle:** Yeah. I mean, I've submitted a few pull requests, so there was that. I think I need to update them... But yeah, business as usual.

**Brian Ketelsen:** That's awesome, congratulations.

**Erik St. Martin:** So you're getting to work on Kubernetes, or...?

**Jessie Frazelle:** Yeah, I'll be working on Kubernetes. I don't know specifically what yet. Before, I had previously made a PR to add seccomp to Kubernetes, and then I made a pull request to also clean up some Docker files and then Go Lint a few things, so hopefully that's good.

**Carlisia Pinto:** I want to put a word in and say congratulations, Jess.

**Jessie Frazelle:** Thanks.

**Erik St. Martin:** That's awesome. Everybody seems to be going to work for Google now. I keep seeing everybody joining Google.

**Jessie Frazelle:** I mean, it's pretty nice.

**Erik St. Martin:** Are you working with Kelsey and everybody, too?

**Jessie Frazelle:** Yeah, Kelsey and them are all there, and Francesc - it's all super-cool people teams, and even in my first week I had multiple people e-mailing me who I had maybe only seen their names on like a kernel mailing list. I'm like, "Wow, you're really cool." So they just have a ton of really cool people, I guess.

**Erik St. Martin:** A little star struck?

**Jessie Frazelle:** \[00:04:00.23\] Yeah. \[laughs\]

**Carlisia Pinto:** Sarah Allen from Bridge Foundry also just joined Google. She's doing some mobile work and also using Go.

**Jessie Frazelle:** Nice!

**Brian Ketelsen:** That's awesome news.

**Carlisia Pinto:** Yeah.

**Erik St. Martin:** So first you started out on Docker... You were there for a few years, right? Were you on the founding team? How long were you with Docker?

**Jessie Frazelle:** I had contributed before joining, but I think I was there almost a year and a half, or something. Or a little over a year and a half.

**Erik St. Martin:** Definitely one of the most well-known members of the Docker team.

**Brian Ketelsen:** Yeah, almost the public face of Docker, definitely. We should talk about how hard it is to be the OSS maintainer for such a large project.

**Jessie Frazelle:** Yeah, it's definitely painful, and I actually missed it after leaving, which I never thought would happen. But it is super hard to be the person giving people bad news all the time and then taking people's crap when they're frustrated because stuff's not working - which totally makes sense, and I get in that mood too when stuff's not working, and then go yell at some maintainer somewhere. But I think it's easy to forget that there's another human being on the other side of the issue.

**Carlisia Pinto:** I wonder if you have opinions on how things could be better for maintainers on such a large project. I'm sure you have opinions.

**Jessie Frazelle:** Yeah, I have a lot of crazy opinions. One of the most interesting things I think is if the maintainers from Huawei that helped us, they're located in China, I think, but it almost seems like there's a lost-in-translation type of... The fact that they don't insinuate that we're being mean, or something. Because a lot of other people will just read a response out of context and maybe it's just a little blunt, but it wasn't meant to come off that way. So it's kind of funny that we all realize that the Huawei contributors would respond back so nicely, even when maybe we were being a little bit disgruntled. Keeping that in mind for everyone would be cool.

**Erik St. Martin:** I think a lot of people, whenever you're upset about something, you're naturally going to read the other person's response as an attack, right? I think that's the hardest thing, to take a step back and look at it objectively and not use your own current mood as your means of interpreting what somebody's saying.

**Jessie Frazelle:** Totally.

**Erik St. Martin:** Yeah, so tons of work. I don't envy you.

**Brian Ketelsen:** I can't even imagine. It's like juggling cats that are already juggling chainsaws. \[laughter\] Everything's sharp and everything has claws.

**Erik St. Martin:** I submitted a pull request two weeks ago to Docker, and I think there was like 80 or something pull requests then; now it's well over 100, like 120 pull requests.

**Jessie Frazelle:** Oh gosh, they must be anxious right now. Whenever we got to 100 or over 100, it's like "We need to merge things or close things..." It gets scary.

**Erik St. Martin:** So that was kind of your point... Yeah, I saw that post - I think you posted it on Twitter earlier, where somebody was like "My condolences, you're now an open source maintainer."

**Jessie Frazelle:** Yeah.

**Erik St. Martin:** He was talking about finding that comfortable line where you know you can't close everything... So for Docker it's 100?

**Jessie Frazelle:** Well, usually it stays around 75 or so, but once it hits over 100 it makes almost everybody kind of... That three digits, it's rough. But issues-wise, I think that we honestly gave up. It's not that we don't care about issues, but there's no way that's ever gonna go to some reasonable number.

**Erik St. Martin:** No, and once it gets so big, people can't even keep up with the fact that they're submitting duplicate issues, because you can't find a similar issue.

**Jessie Frazelle:** \[00:07:57.14\] Yeah. We were even fortunate to have someone who is so active in the project from the community itself; I swear, we all joked that he's like a human database of Docker issues. I swear, he really just knows them all, and he would be like "This one's a throwback to this other old one that's super old", so eventually Docker ended up hiring him, and I think that was like the greatest move ever. \[laughter\]

**Erik St. Martin:** It's like Damian for Docker issues. \[laughter\]

**Jessie Frazelle:** Yeah... It's crazy.

**Erik St. Martin:** Do you guys keep statistics of how long it takes to turn around issues or pull requests? I'm interested to see whether some have lagged so long you just had to delete them.

**Jessie Frazelle:** Yeah, so issues and stuff - there's definitely stats on this, but I don't actually know the answer. But issues, it's like we don't really care about the oldest there, but with pull requests we'll have weekly maintainer meetings and we'll go through the oldest. Usually, the oldest is something where it was controversial, so it's nice to do those in the maintainer meetings, because we can easily get two looks good from me from two people in the meeting. Or if people really are objecting to it, they can voice their concerns there without us having to do 85 million different back-and-forths on the actual pull request itself. So usually that's only like a month old probably, tops.

**Brian Ketelsen:** That's not too bad.

**Erik St. Martin:** Yeah, that's not as bad as I was expecting it to be. Because you've gotta figure that it grows faster than it goes down; you're either spending time managing other people's pull requests or writing your own code, and that's gotta be a hard debate, which thing you work on.

**Jessie Frazelle:** Yeah, it's a juggle. Because we used to - I don't know if they still do this, they probably don't... But we would try to have maintainer days, where like on Tuesday one week I was just closing issues that day, and then the rest of the week I got to write code. So almost everybody kind of had a day where they did stuff, but I think it happened more organically than that, in that if I was stuck on the actual feature I was building, I would then go and close things to free my mind. I think that's almost like the best system, when it happens organically.

When you're stuck in a maintainer day and the day before that you were just about to finish your thing, it sucks.

**Carlisia Pinto:** How's your workflow, Jessie, for accepting PRs or evaluating PRs? Do you download the PR and run it locally in run tests? Or is that automated? How does it work?

**Jessie Frazelle:** So normally I would just make sure that it has the first CI passing, which is checking that it's been signed, and all that stupid legal stuff. Then if it's actually green in the CI... Say it's just a small bug fix and they added a test case, I'll go in and check out their change, remove the fix and then make sure that the test fails without it, and then add it back in and make sure that it passes locally too, even though the CI just did it, just for sanity's sake. And then if it's a bigger one, we'll usually have some sort of design review of it first, unless they just popped into the repo and gave us a new feature.

After the design review, we go through and do a full-on code review, but I would say most pull requests that come in, they're like a typo change or some small fix. The feature requests are what take the most time, but when they're done correctly it can be smoother.

**Erik St. Martin:** \[00:11:49.28\] Yeah, so I'm actually quite impressed by the pull request process for Docker when I went through that. There's a number of automated CI steps that it goes through. There's a document that it starts out, "Describe what the problem is, describe how you fixed it, give us a one-liner for what's gonna go in the changelog"... There's all this documentation that they expect you to put in there, and it's really clearly defined. It's probably one of the best I've seen, doing pull requests.

**Brian Ketelsen:** Who put all that together, Jessie?

**Jessie Frazelle:** The CI stuff, before I started at Docker, we used Travis and it only ran our unit tests, which considering that you've made a change to Docker, you probably know that most of our tests are integration tests, and they take a really long time. So we were testing the integration test by hand. Two people would have to look good to me on the PR and two people would have to test that PR locally, which is such a waste of time. It was basically like that comic where it's like, "I'm waiting for it to compile", but you are writing tests.

**Erik St. Martin:** I still rock that T-shirt with the swords... "Compiling. Carry on."

**Jessie Frazelle:** \[laughs\] Totally. So we ended up switching to Drone, and Drone had some issues with Docker and Docker, because we need very specific things to test Docker, since we need Docker for Docker... Yeah, it's crazy.

**Erik St. Martin:** Docker inception.

**Jessie Frazelle:** And it also just totally messes with your server after. So we then switched to Jenkins. I kind of just switched it overnight, and at first a few people got mad, just because nobody likes change. And it didn't exactly work right away, but once we got things working, now it's all still Jenkins and there's multiple architecture builds. It's kind of cool, there's like arm-power-z... IBM gave us these power-z nodes and I was like "ooh, mainframe!" and then they ended up being really slow.

**Brian Ketelsen:** Did you hack the Gibson?

**Jessie Frazelle:** It would have been cool. \[laughter\]

**Erik St. Martin:** So talk to us a little bit about what you worked on for Docker, because Docker's a pretty big project. Now it's split up across I don't even know how many repos and subprojects, but what specifically did you enjoy working on?

**Jessie Frazelle:** Yeah, I think most of the engine team itself worked on more the container runtime stuff and design of the CLI. Then there was another whole team that handled all the distribution of tarballs. I like more of that, and then also I ended up doing that whole thing with the CI, where I was like the CI assist admin for way too long. Then also I redid our entire bash scripts for our apt repo and set up an rpm repo as well; now they're stuck with those terrible bash scripts because of me, but... \[laughs\]

**Erik St. Martin:** I hope I have the name right... I think it was Yehuda Katz that said this, and he said something along the lines of the thing he fears the most about releasing stuff open source is having to maintain it. And it's almost the same thing - you build the CI thing out and it's awesome, but now you're the maintainer.

**Jessie Frazelle:** Yeah, and it became super stressful because the Windows servers that we had for some reason needed to be restarted every other day. So just the first ten minutes of my day were like restarting Windows servers, and I was like "This is such a waste..." And there was an entire team that did CI for the enterprise side of Docker, so finally they took it over and redid it; it made it way better than I ever could, because I really didn't know that much about Jenkins and stuff like that. So I think now it actually runs pretty well, but it was pretty stressful there for a time.

The entire CI once broke because of a stupid kernel bug, and then we ended up upgrading to a kernel with another bug. So I was basically like, "Computers just don't work. We should all give up now." But then we got over it.

**Brian Ketelsen:** I think we've all been there.

**Jessie Frazelle:** Yeah. \[laughs\]

**Erik St. Martin:** ...like, daily.

**Carlisia Pinto:** Daily, I was gonna say.

**Erik St. Martin:** \[00:16:01.12\] How can I love tech and hate tech so much at the same time?

**Jessie Frazelle:** It's terrible. \[laughs\]

**Brian Ketelsen:** I have a question for you. It's a little bit of a different topic, but you've been at Docker, you've been at Mesos, and now you're at Google. Many people say that Go is kind of the language of the cloud. You've seen pretty much the whole cloud now - what do you think about that proposition?

**Jessie Frazelle:** At Mesosphere they were writing a lot of C++ - that's what Mesos is written in - and they even had some cool networking stuff in Erlang, but other than that it's all Go, that's what I've seen. And I love Go, so obviously I'm biased, but I even made a couple pull requests to Go and I wanna make more as well, because it's super fun to contribute to that. It's almost more fun than something on GitHub for some reason, because it's different and new. But yeah, I would say that's definitely the language of the cloud.

**Brian Ketelsen:** What is it about Go that makes it better for cloud work?

**Jessie Frazelle:** Probably the fast compile time, because I honestly forgot when I was compiling Mesos how slow things used to be, and just with header files, and everything needs to compile again, and I was just sitting there twiddling my fingers, not knowing what to do with life. So that's definitely helpful, and also being able to compile it into a binary and not have to worry about .so files and stuff like that. It's so nice. Distribution.

**Brian Ketelsen:** Yeah, the static binaries make a huge difference. I would agree with that, sure.

**Erik St. Martin:** Yeah, I think that's a big thing that attracted everybody to the language - being able to do static binaries, but still have a more dynamic feel to the language.

Every time I go back to C or C++ and have to wait... Like, "Oh, come on..." I think everybody should have to compile one just to keep us honest though, right? \[laughter\]

**Jessie Frazelle:** Yeah, because I was complaining about the slowness that came with upgrading from 1.4 to 1.5 Go and I was like, "What?! I'm a terrible person. Such a hypocrite. I should not have done that" \[laughs\] after seeing what C++ was like.

**Erik St. Martin:** Yeah, we've joked about the compile times. But now they're back down... I think they split the difference, I think they're less thanhalf way from where they were between 1.4 and 1.5, so we're getting closer... But if you go back and compile a C or C++ app and then go back to Go, you realize just how fast it is.

**Jessie Frazelle:** It is amazing.

**Erik St. Martin:** I guess we should probably stop and talk about sponsors real quick. I think now is a good time, right everybody?

**Carlisia Pinto:** Yeah, let's do it.

**Jessie Frazelle:** Cool.

**Erik St. Martin:** So Linode is the first one, and we've mentioned that all of our new CMS architecture will be hosted on that. Ours and Changelog's, because we are a part of Changelog. So Adam and Jerod really love Linode, and everything's gonna be hosted there.

I think Brian was saying you have some experience with Linode, right Jessie?

**Jessie Frazelle:** Yeah. Since I set up our CI, we also needed a separate server for testing IPV 6, because it's hard to do in most cloud providers, but they had a really good setup, so we ended up using that, which was nice.

**Brian Ketelsen:** Oh, that's nice. Linode was one of the first VPS's as I stood up many years ago, probably 10 or 11 years ago now, and I really enjoyed using it for a long time.

**Jessie Frazelle:** Nice, yeah.

**Brian Ketelsen:** I understand one of the neatest things about their setup is that you've got a CLI tool that you can use to manage it; just get your API key and go to town managing your nodes directly from your terminal. I'm all about managing stuff from the terminal.

**Jessie Frazelle:** I didn't even know about that, and now I feel like I just did it a terrible way with bash scripts. \[laughter\]

**Brian Ketelsen:** \[00:20:05.24\] Now, one thing that is missing - I know they've got SDKs for Python and Perl, PHP, Ruby, Java and Node, but there is no Go SDK. So anybody who's out there looking for an opportunity to make a mark in the Go land, a good place to start might be Linode SDK for Go.

**Erik St. Martin:** And we have a discount code too, which is 'GoTime20', and you get two months free, which is a $20 credit. The nodes are $10 each per month, and these are all SSD and I think they have eight data centers to choose from.

**Brian Ketelsen:** They do, and they've got really nice Xeon E5 processors, 40 gbps network. You can go to linode.com/gotime to get started, let them know we sent you, because we're awesome and so are they.

**Carlisia Pinto:** People are asking if they can make an SDK for Linode. Not only you can, but you should. You should do a Go SDK for Linode. That's what we're looking for.

**Erik St. Martin:** Right. How long do we have left on this episode? And... Go! \[laughter\]

**Brian Ketelsen:** And... Pull request submitted. That's awesome news. So they have lots of add-ons. They can do backups for you, they can do load balancing, they do some management professional services and DNS as well, so give them a shot. It's one of the original, the OG BPS providers, if you will, and they're pretty cool.

Our other sponsor is Equinox, and we've talked about Alan Shreve a couple times, and his other project, ngrok. Equinox is pretty slick because it allows you to manage updates for the applications that you send out to your customers. At my job at Backplane we use Equinox to deliver the command line application that lets you update your backends. So Equinox is pretty slick; I think I wrote maybe a three-line bash script that allows us to deliver that new command line application up to Equinox's server, and then using Equinox's infrastructure you can either do a brew install or an RPM install, Debian, or just download a tarball or a zip file or a Windows MSI installer. It's amazing that we just do one quick bash script to upload that source code and it gets compiled for all the different platforms, uploaded to Equinox's infrastructure, and then all of our customers, regardless of their platform, can stay updated all the time. They just have to implement a small API in their app, and then the app becomes self-updating, so when we release a new version they just type 'backplane update' and it automatically updates their app. Pretty neat.

**Erik St. Martin:** That's the coolest thing, I thought... Rolling all the RPMs and all that stuff for you. Jessie was mentioning that earlier, that becomes a process in itself, just kind of deploying all the packages for stuff. And the self-updating thing, I wanna play with that.

I've seen this... I think you've talked about it maybe a year or so ago, and I kept meaning to go play with the self-updating part and I have not yet, and I feel bad.

**Brian Ketelsen:** It really is. I started at Backplane in mid-April maybe, and it was the first thing I did... Maybe my second day there - the first code I submitted was the Equinox client, and we couldn't be happier with how easy it is to run. Very nice. So go to Equinox.io and sign up for their automated application delivery service with self-updating stuff. You won't be disappointed at all.

**Erik St. Martin:** And remember, when you support our sponsors, you keep us on the air. \[laughter\]

**Brian Ketelsen:** That's right. The network will pick us up for another season, and hopefully that season will be as epic as Game of Thrones is this season.

**Erik St. Martin:** I think that's hard to compare.

**Brian Ketelsen:** \[laughs\] I'm coming in with dragons next week.

**Carlisia Pinto:** \[00:24:01.28\] But this is true, though. These companies have other places they can advertise, and they're advertising with us because they're supporters.

**Brian Ketelsen:** Yay, thanks to our sponsors.

**Erik St. Martin:** So Jessie, I saw something on your Twitter profile that got me laughing... Maintainerati. Coming to a bike shed near you. \[laughs\]

**Jessie Frazelle:** Oh, yeah! So I decided after I wrote that blog post about closing pull requests to start a conference that's more like an open space for maintainers, because it seemed like a lot of the maintainers that responded to my blog request had cool ideas about ways to fix things or even just problems they were having, and they were so similar to the ones that we saw that I was like, "Obviously we need a space to talk and combine and conquer."

**Erik St. Martin:** That's awesome. So have you set dates and a location for that?

**Jessie Frazelle:** Yeah, so it's gonna be next to GitHub at their office in San Francisco on February 15th.

**Erik St. Martin:** Awesome. How many people are gonna be there?

**Jessie Frazelle:** So I think we're gonna cap it like 120 for the first one, just so that we can make sure that it's not out of control and certain, and people can talk and discuss things.

**Erik St. Martin:** You don't wanna have problems to maintain the maintainers? \[laughter\]

**Jessie Frazelle:** Yeah...

**Carlisia Pinto:** And where do people sign up for the event?

**Jessie Frazelle:** We have a website, maintainerati.org, and right now it's just a form fill-out with e-mail addresses, and then I think we're gonna send out invites pretty soon, once I get my life together. \[laughs\]

**Carlisia Pinto:** Cool.

**Erik St. Martin:** At everything about that I started laughing. Like, "Coming to a bike shed near you" and WONTFIX Cabal.

**Jessie Frazelle:** Yeah, it's called "The WONTFIX Cabal" and it's basically run by the maintainerati. Because I already own that domain. \[laughter\]

**Erik St. Martin:** So it started with the Containerati, right?

**Jessie Frazelle:** Yeah, I haven't really used that domain for anything cool and I should, but yeah... Somehow I should combine the two into the ultimate Cabal... I don't know.

**Erik St. Martin:** Yeah, what would you call that? It's like The Maintainerati Of The Containerati, or...

**Jessie Frazelle:** Like The Red Wedding Of Containers... \[laughter\]

**Carlisia Pinto:** I have very serious concerns for the day after this conference. How all these maintainers anarchists are gonna come back and just not fix things.

**Brian Ketelsen:** Yeah, they're just gonna start closing issues left and right.

**Jessie Frazelle:** Yeah, so me and Katrina Owen, who recently joined GitHub, she was like "Yeah, they wanna hear about all the features that the maintainers want", and I was like, "It's so ironic that we're gonna be the ones demanding features from GitHub."

**Brian Ketelsen:** There's a really juicy irony in that, isn't there?

**Jessie Frazelle:** Yeah. \[laughter\]

**Erik St. Martin:** So what other things do you have going on lately? Mostly caught up with your new gig with Kubernetes? Are you working on anything personally for projects? You're always seeming to be trying to port new things to run inside containers. We actually were joking that you're probably trying to get Skype in a container.

**Jessie Frazelle:** Okay, so one, I had Skype working in a container \[laughter\] on this commuter that I was trying to use.

**Erik St. Martin:** I knew it!

**Jessie Frazelle:** I literally have like three computers in front of me right now, but it just like decided to fail, of course, because computers... So yeah, I guess personally I made that contain.af website, which I should add more questions to; it's like a quiz game to help people learn about figuring out things in their environment as far as what syscalls and capabilities you have. But honestly, I don't have time for that because I'm still trying to figure out my new job, and stuff.

**Brian Ketelsen:** So for anybody who hasn't seen it yet, Jessie's dotfiles are the most amazing thing on the planet. I think that if I could take a month and just go spelunking through those dotfiles, I would be the happiest man on the planet.

**Erik St. Martin:** \[00:28:02.03\] You know, I'm not important anymore. Brian used to borrow my dotfiles... \[laughs\]

**Carlisia Pinto:** I went to check out her .vim files because I remember Brian mentioning it. Next week I'm getting a brand new machine, and for the first time in three or four years I've decided that I'm going to have clean slates. So I checked out Jessie's .vim file, and not only the vimrc file... She actually has a makefile there for you to run, and just magically configure out the things.

**Erik St. Martin:** Let's say you're stoked for all of that, that we can have folders for each thing and then when I'm on a machine I can just kind of symlink the things that I want for that machine.

**Jessie Frazelle:** Yeah, I love the symlink thing... It's so nice.

**Brian Ketelsen:** These dotfiles are a thing of beauty. So there's containers for everything, and then a beautiful little bash script that converts the command that you want to run into the container command to actually run the container. It's beautiful. How long does it take to build all those Docker files and actually ship them up to a Docker hub?

**Jessie Frazelle:** I actually have a private registry where I host them, because for some reason - and I think that they're trying to fix it - my automated builds on Docker hub, they just don't build. I just think I have too many. So I have a private registry that has Jenkins hooked up to it, so it runs continuously and just pushes them there. Then I secretly use that, while everybody uses my public ones... Which is crazy. \[laughs\]

**Brian Ketelsen:** You really are the container queen.

**Erik St. Martin:** Docker registry is telling you, "Alright Jessie, this is getting out of hand." \[laughter\]

**Jessie Frazelle:** Well, it used to happen, because I have multiple Docker files in one repo itself; there's like over a hundred in that one repo, and the infrastructure is not built to rebuild all those Docker files the second I push. Because I'll push them multiples times a day, and maybe a forced push right after I'd just pushed, because I messed something up. So I think it just times out after rebuilding ten of them, and it's a random ten every time, or something.

**Erik St. Martin:** Just like a denial of service attack every time you push... \[laughter\]

**Jessie Frazelle:** Yeah, it's really bad. And finally someone noticed, that worked there other than me, because I think they have a very long-standing issue open about this. But then they were like, "Oh, this looks really bad. Your Docker files that a lot of people use are super out of date", and I'm like "Yeah, I just kind of gave up on it working, so..." \[laughs\]

**Erik St. Martin:** I just love every time somebody mentions something, it's almost like you're like, "Challenge accepted."

**Jessie Frazelle:** Yeah... I almost feel like there hasn't been - it's been a while since someone said something that I have not actually containerized yet, so it makes me worry some for the future.

**Erik St. Martin:** I got a big one for you... A window manager.

**Jessie Frazelle:** Oh, nice, nice... I've been meaning to try that. Everyone's like "Why don't you run i3 in a container?" and it just makes me think that at that point I'm making Rancher on the desktop.

**Brian Ketelsen:** Well, that's true.

**Erik St. Martin:** Yeah. \[laughs\]

**Brian Ketelsen:** Is that a bad thing, though?

**Jessie Frazelle:** No, that's something that would be so cool, but I would need help from their end. He had X working at one point, and I don't know if it was correct X. He wouldn't let me use it, and I was like "Okay, please."

**Erik St. Martin:** He was just keeping it a secret to himself.

**Jessie Frazelle:** Yeah, like either it was so bad that he didn't want me to even try it, or it's so cool that they're gonna do some thing with it.

**Brian Ketelsen:** There was about three weeks a year or a year and a half ago where I ran CoreOS on my desktop as my primary developer machine, and it was challenging, I won't lie.

**Jessie Frazelle:** Wow, nice. Everything's in a container then.

**Brian Ketelsen:** Yeah, everything had to be in a container, and it was painful.

**Erik St. Martin:** Yeah, I tried that for a workstation for a little while, and I got a little annoyed. For your own desktop you want it to be pristine, but sometimes you just gotta get stuff done and you shortcut, and you wish you didn't, but yeah...

**Jessie Frazelle:** \[00:32:07.26\] Yes, that actually keeps me up at night. I just, I can't... \[laughter\]

**Erik St. Martin:** It would keep me up at night if all sorts of other things weren't already keeping me up at night. \[laughter\] It's like there's no more time left. Alright, so everybody wanna talk about any news and projects?

**Carlisia Pinto:** I actually had a question for Jessie... Is there time for that still?

**Erik St. Martin:** Yeah, there's always time for Jessie.

**Carlisia Pinto:** Alright, so Jessie, question about your prolific speaking life... What can you share with us? We, who are not speaking, we're not doing lightning talks, we're not doing conference talks - what can you share with us for us to take the first step?

**Jessie Frazelle:** Yeah, I think that the first time that I actually spoke somewhere was at a Brooklyn JS meetup in New York. That was really cool, because it was all people that I knew there, so it was a super comfortable feeling. I would almost say that meetups are awesome as a start.

Then I got asked because of Steve Francia to Gotham Go. That was my first big conference, and I was super nervous. I think that's the first time I also showed GParted in a container, which is super not related to Go, but I was just like taking up time.

**Erik St. Martin:** They both start with a G...

**Jessie Frazelle:** Yeah, it's around there. So yeah, I guess even having people to say that you should speak at certain conferences is huge.

**Carlisia Pinto:** Yeah, I agree with that. My takeaway here is try to do it in a setting where you know people in the audience, to make effort to invite people who are not speakers to start speaking. I had that experience myself my first time; the first time that I did a lightning talk was my very first programming job, and I had to do it. It was so painful, but I didn't have an option; otherwise I'd be like, "No way!" And I did it.

The second time that I did it again was a few years later and it wasn't painful at all. So having that person that would just say, "Hey, why don't you do this talk here?" I think it helps a lot.

**Erik St. Martin:** I think nerves get to people, and coming from the other side, too... Brian and I, we're a ball of nerves stepping up on stage, and all we have to do is welcome people, we don't have to give a technical talk. So I think being comfortable with the fact that I think everybody is nervous, and then thinking the crowd doesn't want to see you fail; everybody's rooting for you, everybody wants you to do a good job, so I think getting over that, and more, you're talking to friends... The light you put yourself in sometimes helps. And having other people who speak a lot is also helpful, that can give advice and make people understand that it's normal to feel that way.

**Carlisia Pinto:** Yeah, and there are a lot of people who want to help o that front.

**Erik St. Martin:** There's been a number of people for GopherCon who have offered to help review talks and to give speaking advice and all that stuff. I'm actually quite surprised how much people rehearse. I never really thought about that.

I was talking to Dave Cheney one time and he was talking about how many times he rehearses it to make sure he's got his timing down right. And he knows exactly when he's falling behind and has to speed up or slow down and stuff like that, because he knows from this slide how long it takes to get to the end. I never would have thought about it that way... So preparation is everything; if you're fully prepared then you're not nearly as nervous, because you've rehearsed it so many times.

\[00:35:59.19\] I think people step up on stage and they get nervous, they rush and they don't realize where they're sitting, whether they should slow down or speed up, which only adds to the nerves.

**Jessie Frazelle:** Totally.

**Erik St. Martin:** Yeah, and anybody who's speaking... We can compile a list too, because I know we've had a few people for GopherCon offer help with people wanting to get up on stage and speak, and we can make connections there, where we can maybe give people advice on doing that. Did you submit a proposal to GopherCon, Jessie?

**Jessie Frazelle:** I do not think I did, probably because I was so busy. In another year or so I definitely want to. This is my first GopherCon that I'm actually going to, and I'm so stoked.

**Erik St. Martin:** It's gonna be awesome. Did you see that Jerod started a container tech room?

**Jessie Frazelle:** Yes, I'm very excited for that. All he did was say 'containers' and I just popped into his mentions. You're like one of those people... \[laughs\]

**Erik St. Martin:** I loved the response, "Yes!" The idea there is to get a bunch of people together who wanna hack on things like Kubernetes and various CoreOS projects, Docker and all that stuff. It's one of the rooms I wanna hang out in, if I can hide for long enough.

**Brian Ketelsen:** There's too many cool things going on...

**Jessie Frazelle:** Yes, hiding at conferences is key. \[laughs\]

**Erik St. Martin:** But you see, I have a phone and they keep calling me. If I turn it off, they send people to come find me. There's only so many places you can hide.

**Jessie Frazelle:** Totally.

**Erik St. Martin:** Alright, so projects and news. Do you have anything exciting that you wanna talk about?

**Carlisia Pinto:** Yeah, so talking about presentations... I got some help from Bill Kennedy recently to do my GoBridge talk at the Women Who Go event. So he gives me this formula that he - he was inspired by Dave Cheney's post, or they worked on it together, I'm not very clear on that, but it made me lay out my talk so quickly and easily. Then he reviewed it and I got a better idea of what the formula was.

I got so excited about it that I submitted two lightning talks for GopherCon... One for GopherCon and one for the kickoff party. I was like, "Yeah, I've got this, no problem. I can write... I have a formula and I just fill stuff in, and voila!"

Of course, I still need to put the slides together and I still need to rehearse, but just getting the abstract, the intro and the conclusion ready, once you've got that, you've got more than 50% of the content ready.

We put it up on the GoBridge Park, it's a repo called "Presentation Help", and I hope people will add more to it, too. I've just put this up today. I would love to see people contributing with links to other stuff, and I'll do that too, with time, as I run into things.

**Erik St. Martin:** I'll have to find some, too. Katrina Owen sent a bunch of links and videos and book suggestions on Twitter for public speaking stuff. I'll find those...

**Carlisia Pinto:** I know you're super busy - if you give them to me I'll put it in. She's also on the Women Who Go channel and she has put a bunch of information. She opened a Trello board. Women, we have resources! I wanna get this thing kicked off. I know Cassandra Gil from Iron.io was looking for women to speak at the GopherFest recently, and she only got one submission from a woman, and it wasn't even technical enough. There are women Gophers out there, so let's get them speaking.

**Jessie Frazelle:** \[00:40:04.00\] Totally!

**Brian Ketelsen:** Speaking of women Gophers, that Women Who Go birthday party last week was awesome.

**Jessie Frazelle:** That was so much fun!

**Erik St. Martin:** I'm the only one who missed out. I was sitting home with FOMO.

**Carlisia Pinto:** There were a lot of people I didn't get to talk to, Jessie included. The time just went by so fast. It was awesome.

**Erik St. Martin:** I feel that way every year at GopherCon. It's like, "Yay, we're here! This is gonna be awesome!" And then it's like we're packing up and leaving.

**Brian Ketelsen:** Yeah, and you missed talking to 1475 of your friends, because you only got time to talk to 20.

**Erik St. Martin:** Well, I feel bad too, because it was like the first year we dealt with everything individually, but it's grown so big, and during the day jobs, too. I'll look and I'd be like, "There's speakers I didn't actually get to talk to." It's hard now. I wanna try and change that this year. If I don't find all the speakers, they need to come find me, because I don't wanna miss talking to speakers.

**Brian Ketelsen:** And now I'm just laughing, because we know it's not gonna happen. We're not gonna get to talk to everybody, it's just not gonna happen.

**Erik St. Martin:** Show up at my door at home if I don't speak to you at the conference. \[laughter\] It'd be kind of hard, I don't think I wanna publicize my address.

**Brian Ketelsen:** I will. Erik lives at... \[laughs\] So another interesting open source project that got an update this week is GoKit, who has a fancy new pretty website, GoKit.io. A very nice website with good, clear explanation of the goals of the project and the details behind each of the packages. A long overdue update for the website, it looks really good.

**Erik St. Martin:** That's awesome. We have to get Peter on some time too and check GoKit.

**Carlisia Pinto:** Yeah, definitely.

**Erik St. Martin:** I wanna talk about a post I saw by Francesc on... I forget what he called it; it was like analyzing code with BigQuery, or something.

**Jessie Frazelle:** Oh yeah, that was so cool.

**Erik St. Martin:** I love his wit too, because it's like "Two seconds and $7 later..." \[laughter\] I wanna work at that skill where you're just billing... Like, "Yeah, I need to run a seven-dollar query..." \[laughter\]

**Jessie Frazelle:** It was crazy though... When I saw that thing I was like, "One query for seven dollars? Wow..."

**Erik St. Martin:** I wanna see what the bill is to do that. How much did that blog post cost?

**Carlisia Pinto:** What I wanna know is what is his budget?

**Jessie Frazelle:** Oh, yeah...

**Carlisia Pinto:** Right?

**Brian Ketelsen:** Alright, Jessie, you're the insider now. You gotta tell us what his budget is.

**Jessie Frazelle:** I have no idea, I don't even have a budget for my stuff, so...

**Brian Ketelsen:** You will, soon.

**Erik St. Martin:** There were some interesting things that came out of that, though. I mean, aside from the crazy regular expressions that were on there, it was kind of cool seeing what packages people use most often.

**Jessie Frazelle:** Yeah, yeah.

**Erik St. Martin:** It seemed like a lot of it was logging packages, like glog and logrus...

**Jessie Frazelle:** Yeah, there was logrus and then another one that was like top two.

**Erik St. Martin:** I think the one that surprised me was Assert. It was used more than anything. it was used more than the context package and a bunch of other things; I was really surprised to see that, the Testify framework, which I haven't actually used, but it must be used quite a bit for it to be up there. I tend to stick to old school, I use a lot of standard library.

**Jessie Frazelle:** Yeah, I usually use the standard. I think that we switched actually to Assert... No, we use GoCheck and Docker... But I've seen Assert used as well, I guess.

**Erik St. Martin:** I haven't used GoCheck either... Does that do mocking or anything like that, or is it just extra assertions on...?

**Jessie Frazelle:** \[00:44:06.13\] It's just extra assertions. I think that we were gonna use the other one and then we found some weird bug and then submitted a patch, but then decided to use GoCheck... I have no idea what we did there.

**Erik St. Martin:** Somebody picked it and everybody stuck with it.

**Jessie Frazelle:** Yeah, and if we ever chose anything new today, it would become this huge monstrosity because so many people would have opinions. At some point you just have to choose it and deal with the people that are mad.

**Erik St. Martin:** I guess that's the benefit of working on smaller projects, right? Because generally you can get more people to agree on stuff. The bigger it gets, you're almost guaranteed to have at least a couple people that you can't get consensus with, and people who won't move at all.

**Brian Ketelsen:** The flip side of that though, the benefit of sticking with the standard library is you don't have to have fights about which testing library to use.

**Jessie Frazelle:** Yeah, for sure.

**Erik St. Martin:** It's like, we can all agree on one, or we can agree on none.

**Jessie Frazelle:** \[laughs\] Totally.

**Erik St. Martin:** I mean, I guess it's a couple extra steps to do your own assertions, but I haven't suffered enough to really go playing with another framework, and I think a lot of that is just time, too.

**Brian Ketelsen:** Especially in testing, though... There's really nothing that I need to do in testing that I haven't been able to do with the testing package.

**Jessie Frazelle:** Yeah, I completely agree. Because every single testing that I write of my own is only the testing package. It's just cleaner.

**Brian Ketelsen:** Yeah. Easier to read, and that's what Go is all about - easy to read code.

**Jessie Frazelle:** Totally.

**Erik St. Martin:** The other thing I saw was... Who was it from CloudFlare that did the net/http timeout post?

**Jessie Frazelle:** Oh, Filippo... I don't know how to say his name. \[laughs\]

**Erik St. Martin:** That's right. That actually had a couple of things in it that I didn't even realize. He walked through basically how all the timelines and deadlines worked in the HTTP package, and there were a couple of them that actually surprised me. One of them was like your write timeout included the read during the TLS handshake, and you wouldn't expect that... But there's a couple of things like that. That's an interesting read if anybody's interested in internals of stuff.

**Jessie Frazelle:** Yeah, their blog is so good. For a company blog it's very detailed and technical.

**Brian Ketelsen:** It's deliciously technical.

**Jessie Frazelle:** It's so good... And they go into Kernel stuff, too. There was one on getting the kernel to send packets faster.

**Erik St. Martin:** Oh yeah, I remember that post. That was a while ago.

**Jessie Frazelle:** Yeah, it's burned in my brain, it was so good. \[laughs\]

**Erik St. Martin:** I love watching all those posts on it. There was one last month that was something to do with optimizing TLS that was really good, too.

**Jessie Frazelle:** Yeah, yeah.

**Erik St. Martin:** But I geek out over a lot of their posts, just because they're all super low level and technical.

**Carlisia Pinto:** Well, now I'm gonna have to ask - do you ever read the Fastly blog?

**Erik St. Martin:** No, I actually haven't.

**Carlisia Pinto:** They have a very good blog, too.

**Erik St. Martin:** You're giving me more stuff to read here... I don't have time for this.

**Carlisia Pinto:** Well, just read the right thing then. \[laughs\]

**Erik St. Martin:** So I need somebody to curate these lists for me. \[laughter\] Brian does it with GitHub projects. He just comes to me with a list of the cool ones, I don't have to dig through the whole thing. Now I just need somebody to give me a curated list of technical blog posts. The more technical, the better. I like when they make me feel dumb, because that means I have to learn stuff to understand it. Some of these - it's not hard to make me feel dumb either.

**Carlisia Pinto:** \[00:47:57.24\] There is one more project I wanted to mention. Jesús Garcia Crespo, he mentioned Concourse and I hadn't heard about it. It's an open source CI system for Go, so if you wanna host your own CI, there you go.

**Brian Ketelsen:** That's a good one. \[cross-talk\]

**Erik St. Martin:** What was that?

**Brian Ketelsen:** Oh, I was just jumping to \#FreeSoftwareFriday. If you've got something to add for Concourse, go for it.

**Erik St. Martin:** No, I was just gonna say that I tend to lean towards either Jenkins or Bamboo just out of habit, but I need to give something else a try. I haven't run my own CI locally in quite some time. The other thing I actually just saw on Twitter just before we started the show was that etcd3 is now out.

**Carlisia Pinto:** Oh wow, cool.

**Brian Ketelsen:** What's changed there? Etcd2 brought gRPC, didn't it? I wonder what the big change is for etcd3.

**Erik St. Martin:** One of them brought the new Raft protocol, what was that?

**Brian Ketelsen:** Oh, maybe that was etcd2.

**Erik St. Martin:** Yeah.

**Brian Ketelsen:** So maybe 3 is where they changed all the gRPC bit...

**Erik St. Martin:** The one thing I know came in it was watches. So you can watch for keys to change.

**Brian Ketelsen:** Oh, like Zookeeper style watches?

**Erik St. Martin:** Yeah. Other than that, I'd have to look because I haven't kept up with the release. That's the problem with being excited about too many things, you can't one hundred percent know what's going on in all of them, but that's one I vaguely remember. I think you are right though about gRPC being used instead of protobufs.

**Brian Ketelsen:** Nice.

**Erik St. Martin:** Or, I'm sorry, using gRPC with protobufs rather. Before it was all HTTP and JSON, wasn't it?

**Brian Ketelsen:** Right.

**Erik St. Martin:** But yeah, we should look after this; I wanna see what else is in there. That doesn't help the listeners, but...

**Brian Ketelsen:** Well, they're helping us out on the Slack channel, so I'll read off the list. Improved latency and through put, less protocol overhead via gRPC API layer, better disk utilization, new storage backend with less memory overhead per key, automatic TLS configuration, flat binary key space, getting key watch by prefix, getting key watch by interval... Lots of good stuff here, I'm excited to see what etcd3 offers. This is cool.

**Erik St. Martin:** See, they don't even need us any more, we just need everybody who's in the channel.

**Brian Ketelsen:** Yeah, thanks for feeding this stuff to us, guys.

**Carlisia Pinto:** Talking about feeding, Jerod just reminded us that there is such a thing called Changelog Weekly; if you're looking for feeds of awesome stuff, there we go. Erik...

**Erik St. Martin:** That is right, how did we not talk about Changelog Weekly?

**Carlisia Pinto:** Yeah. It's every Saturday morning. Usually I sleep in a little, then I get up and I open my phone, and there it is.

**Erik St. Martin:** Your sleeping in is like 6 AM. You're always up at like 5 AM.

**Carlisia Pinto:** Yeah...

**Brian Ketelsen:** That's funny, because I don't look forward to Changelog Weekly nearly as much as I look forward to Changelog Nightly, which I get almost midnight every night. That's when I know it's time to go to bed. I look at Changelog Nightly, which has a list of all of the bursting in interest things on GitHub; it kind of shows you the projects that are taking off on GitHub, and that's kind of a neat way to catch new and interesting projects. So the Changelog Nightly e-mail is my cue to go to bed. When I see that come through, I read it and then I go to bed.

**Erik St. Martin:** Actually, I don't think I'm signed up for the Nightly one. The weekly one I am, but not the nightly. That's terrible. I mean, how can you be a co-host on the Changelog podcast and not actually be subscribed to all of that stuff?

**Brian Ketelsen:** \[00:52:04.25\] We're taking away your license to podcast.

**Erik St. Martin:** Right? Next week it will just be Brian and Carlisia. \[laughter\]

**Brian Ketelsen:** Yeah, I don't know how you can subscribe to those things. I suspect that if you went to Changelog.com and started clicking on buttons, you could find an e-mail subscription for them there, but they're both well worth it.

**Erik St. Martin:** Nobody needs us. Somebody's about to drop them in the channel.

**Brian Ketelsen:** Yeah, just wait for somebody to tell us on slack what the URL is. On that note, we should probably move on to \#FreeSoftwareFriday. Every week we like to say a shout out to either the projects or the maintainers of open source projects that make us happy, and it's something that we enjoy quite a bit because we know that often times running an open source project or maintaining an open source project is a thankless job. So I'll start off this week with jq. It's the most awesome command-line tool ever if you need to deal with JSON. You can pipe JSON to jq and pull out a single element, you can reformat it, you can pretify it... Pretty much anything you need to do with JSON on the command-line, jq is your tool. It's written in C, it's super fast, and I think it should be installed just like awk and sed and grep. It should be a standard UNIX utility.

**Carlisia Pinto:** That's pretty cool.

**Jessie Frazelle:** Nice, I use that all the time. And yes, it should be in the core utils.

**Erik St. Martin:** Yes, it should come on all Linux installs.

**Jessie Frazelle:** Yeah.

**Erik St. Martin:** Carlisia, what do you have?

**Carlisia Pinto:** I have this tool called goconvey...

**Erik St. Martin:** Yes!

**Carlisia Pinto:** See, I had never seen this. I don't use it - just a disclaimer - it was mentioned to me by Ricardo Longa. It's a tool for testing Go, but if you haven't used it or don't know, you have to go on the repo to check it out, because it's impossible to explain. It just makes your tests run on your browser, and it's pretty and colorful.

**Brian Ketelsen:** Yes, goconvey is really nice. There's two pieces to it - they have their own assertion, BDD sort of language framework, but the other piece is that they've got that beautiful UI for running your tests. You can open up your browser and you can watch everything be green or flash red when there are errors, and that doesn't require using their special test framework. You can use it with the standard testing package. So goconvey is really nice, we use that.

**Erik St. Martin:** That seems to be the confusion for some people, unless they changed the website. It used to focus a lot on the custom assertion framework they had, and it wasn't as noticeable, but you can use that, which is standard library testing.

**Carlisia Pinto:** Yes, thanks for the clarification, because being that I haven't used it, I don't know all the details. Thank you for that.

**Erik St. Martin:** Yeah, it's cool. It does browser notifications and stuff that show you passes and fails and all that stuff, so you can just kind of keep running. It's a really cool project.

Jessie, we're kind of blindsiding you here, but do you have an open source project you wanna thank?

**Jessie Frazelle:** Totally. Okay, so I have one, and then I have a little small tidbit. \[laughs\] Okay, sorry, I got really excited because I really like this. There's this really cool project by Brian Redbeard from CoreOS, it's called GPget, and it automatically does the whole get this GPG signature and check it against this file that I've just downloaded, without you having to do all that same curl typing crap. That's pretty neat.

Then also my co-worker from Docker, Michael Crosby, he has the world's best gists, but they're undocumented and completely random, but you'll find yourself in this goldmine of something 75% finished but super epically awesome.

**Erik St. Martin:** \[00:56:14.29\] So you're just searching around for treasures...?

**Jessie Frazelle:** Yeah, and he's gonna be mad at me for stalking his gists.

**Carlisia Pinto:** We need the link, what is the link, the account?

**Jessie Frazelle:** The GPG get is BrianRedbeard/gpgget and then just CrosbyMichael on GitHub gists.

**Carlisia Pinto:** Okay, cool.

**Erik St. Martin:** I'll link Michael... We've seen a bunch of stuff by him before, too.

**Carlisia Pinto:** Yeah, because you all know him.

**Erik St. Martin:** Yeah, from back in the whole Skynet thing, that kind of got abandoned.

**Brian Ketelsen:** Skydoc, that's right.

**Erik St. Martin:** Yeah, so the only thing that lived through all of that was SkyDNS.

**Brian Ketelsen:** But at least it lived well, and still lives.

**Erik St. Martin:** Yeah, until somebody writes something better. Alright, so my project this week is Ranger, which is a file manager for Linux, and it has VI key bindings. It's all written in curses and all that jazz, so that's what I use on my system when I need a file manager. It has kind of cool previews, and stuff like that.

**Brian Ketelsen:** Yeah, I have to admit I haven't seen that before, but when you put it in the show notes, I brew installed it on my Mac and I was instantly impressed, because command line file management is awesome.

**Erik St. Martin:** Yeah, it's got multiple columns and all that good stuff.

**Brian Ketelsen:** Like Midnight Commander.

**Erik St. Martin:** But better.

**Brian Ketelsen:** But better, yeah.

**Erik St. Martin:** It has to be better.

**Brian Ketelsen:** I am DOS age. When I was a kid we didn't have Windows, we had DOS, and we used Midnight Commander.

**Jessie Frazelle:** I have a DOS computer in front of me right now. \[laughs\]

**Erik St. Martin:** Nice...

**Carlisia Pinto:** Of course you do!

**Erik St. Martin:** That's not your work computer, is it?

**Jessie Frazelle:** No, it's just everything else is stacked on top of it right now.

**Erik St. Martin:** I don't think I wanna know what a C or C++ build takes on that.

**Jessie Frazelle:** So bad, probably.

**Brian Ketelsen:** It doesn't count if you're using it as a monitor stand, Jessie.

**Jessie Frazelle:** \[laughs\] Yeah, it really has a computer on top of it, and then a plant.

**Erik St. Martin:** Is that the San Francisco version of like a college apartment, rather than milk crates you have old 486 computers and stuff and like that as coffee tables?

**Jessie Frazelle:** Pretty much. I'm like a San Francisco computer hipster.

**Erik St. Martin:** A lot of people are getting back into collecting old hardware like that. And what was that new Kickstarter that just came out, that chip. That looked really cool too, being able to play retro games on it, and stuff.

**Jessie Frazelle:** Oh, nice.

**Brian Ketelsen:** I haven't seen that.

**Erik St. Martin:** Yeah, I'll have to link to that. Dave just got one, he was all pumped; he sent me a picture. He was like, "Dude, it came!" \[laughs\] He's awesome. He's so addicted to hardware, too.

**Brian Ketelsen:** He does the coolest projects.

**Erik St. Martin:** What I wanna know is how people get the time for all this stuff. I feel like there's just not enough time in a day.

**Brian Ketelsen:** I think it has something to do with no kids.

**Jessie Frazelle:** \[laughs\] And no sleep.

**Erik St. Martin:** Yeah, it's true. Well, I think we have the no-sleep thing covered.

**Jessie Frazelle:** Oh, totally. Buy your kids the... \[laughs\] It's just using that time for something else.

**Erik St. Martin:** Alright, does anybody have anything else that we wanna chat about before we wrap this up? I think we're about out of time.

**Brian Ketelsen:** I don't think there's anything we didn't cover.

**Carlisia Pinto:** This show was awesome!

**Brian Ketelsen:** Did we miss anything on the whole internet today? I don't think so.

**Erik St. Martin:** This is fun, I think we can hang out here all day. It's still early where you are, right Jessie? \[laughter\]

**Jessie Frazelle:** \[00:59:59.19\] Yeah, it's like two.

**Erik St. Martin:** Alright. I wanna thank everybody for being on the show, especially Jessie. This has been a lot of fun. I wanna thank the listeners, I definitely wanna thank our new sponsors, Linode and Equinox.

**Brian Ketelsen:** Hurray! And I'd also like to thank Duncan for interrupting our broadcast when my kids showed up.

**Erik St. Martin:** We have a new co-host.

**Brian Ketelsen:** Yeah - Duncan, my dog. The kids think he's named after Dunkin' Donuts, but he's really named after Duncan Idaho from Dune. \[laughter\]

**Erik St. Martin:** Alright, so if you are not subscribed already, go to GoTime.fm to subscribe. Follow us on Twitter, which is @GoTimeFM, you can find us on Slack in GoTimeFM channel, and we have a GitHub, which is GoTimeFM/ping if you want to suggest topics or guests. I think that's it...

Show notes - we will have everything we've talked about, and we will put links to both Equinox and Linode and any discount codes that we have available for those.

Oh, and next week we're gone, because all of us here will be at GopherCon, so we can have a live roundtable discussion. Not live like recorded, but live like come-talk-to-us discussion.

**Carlisia Pinto:** It's not next week, though. Next week we have Beyang.

**Erik St. Martin:** That's right!

**Brian Ketelsen:** Don't take that week away from me, Erik. I need it! \[laughter\]

**Erik St. Martin:** We're losing time! For some reason I'm thinking next week... Okay, so yes, next week we have Beyang from Sourcegraph on the show, and then it's GopherCon.

**Brian Ketelsen:** Yes, and we will be live streaming GopherCon this year on Twitch, so if you're in the audience and you won't be able to make it to GopherCon, Twitch.tv/gophercon. That is gonna be epic.

**Erik St. Martin:** I'm excited.

**Jessie Frazelle:** I'm so stoked!

**Erik St. Martin:** Yeah, come find us too, Jessie.

**Jessie Frazelle:** Oh, I will. I will be finding everyone. You'll be sad that I'm there at one point, because you'll be like, "Argh, Jessie..."

**Erik St. Martin:** We're gonna give you like a paper, like the head sheet or face sheet with pictures of everybody, and you're gonna have to mark them off when you find them.

**Jessie Frazelle:** Yes, like Bingo!

**Carlisia Pinto:** Bingo, yeah! \[laughs\]

**Erik St. Martin:** And turn it into a whole game for everybody. They have to acquire something from each person on the list...

**Jessie Frazelle:** Nice...

**Carlisia Pinto:** So Jessie is not on the GoTime Slack channel, but Adam is saying, "Say hi on camera with us, Jessie." That's Adam from Changelog.

**Erik St. Martin:** Oh yeah, that's right, Changelog will be there, because we love Changelog. They'll be there doing interviews with everybody, so yeah, come over and say hi on camera.

**Jessie Frazelle:** Oh cool, okay.

**Erik St. Martin:** I promise they edit it, so they won't make you look bad.

**Jessie Frazelle:** Nice. I mean, there's so many bad shots of me in conference videos that it does not matter.

**Erik St. Martin:** It's like DMV photos... The ones you wanna see never end up there.

**Jessie Frazelle:** Yeah. I feel like it's just an ultimate troll.

**Erik St. Martin:** If you wanna see the worst one, the state of Florida with their concealed carry permits...

**Brian Ketelsen:** Oh my god...

**Erik St. Martin:** ...everybody I've ever seen their picture on their concealed carry permit looks like they should not get a gun. You'll see the picture beforehand, it looks fine, and then it shows up at your door and it's all zoomed in, and weird, shadowy, your eyes look all dark, and you just look evil.

**Brian Ketelsen:** Black and white... Mine makes me look like Unabomber. \[laughter\]

**Erik St. Martin:** Yeah... If you find us at the show, Jessie, Brian and I will show you. You'll look at it and you're like, "Yeah, I would not give that guy a gun. It doesn't even make sense."

**Jessie Frazelle:** Nice.

**Erik St. Martin:** I've seen worse, though. I have seen worse. Alright. Oh, I love Slack, this is awesome. Adam's reminding us...

**Brian Ketelsen:** Everybody's just telling us what to do on Slack now...

**Carlisia Pinto:** We are scripted. \[laughs\]

**Erik St. Martin:** See, I'm telling you they don't need us. \[laughter\]

**Brian Ketelsen:** \[01:04:03.21\] Just replace us with a bot.

**Erik St. Martin:** So at GopherCon we will be giving out T-shirts, so if you want a T-shirt... Has everybody noticed the cool logo for GoTime now? It's like this cool little sphere thing, but if you look closely there's a hidden Gopher in it...

**Carlisia Pinto:** No, no... NO!

**Brian Ketelsen:** You spoiled the secret, Erik...

**Carlisia Pinto:** You spoiled it, Erik.

**Erik St. Martin:** It was supposed to be a secret?

**Carlisia Pinto:** It was supposed to be something you discover on your own, like "Oh my gosh, there's a Gopher here! All along, for three years I haven't seen it!"

**Jessie Frazelle:** That's so cute!

**Erik St. Martin:** It's trippy, isn't it?

**Carlisia Pinto:** I had such a kick when I noticed it.

**Erik St. Martin:** I don't know, I think I see Gophers all the time, so it's like as soon as I saw the logo I saw the Gopher.

**Brian Ketelsen:** it's like going to Disneyland... "Oh, look, there's another Mickey." There's another Gopher...

**Erik St. Martin:** See, Todd's in the GoTime FM channel and he says it's not a secret. He noticed as soon as he subscribed.

**Brian Ketelsen:** See? There's no secret. You didn't screw it up, Erik. Good job.

**Carlisia Pinto:** No, it's alright.

**Erik St. Martin:** Alright, so I think we're extending everything. We should probably wrap this up though. As we've already said all of our closing stuff, I guess all that's left is goodbyes, and we'll see everybody next week.

**Brian Ketelsen:** Thanks, Jessie!

**Jessie Frazelle:** Thank you for having me, this was cool!

**Carlisia Pinto:** Thanks, Jessie. This was super fun!

**Erik St. Martin:** Yeah, we'll have you back on when you get more into what you're doing at Kubernetes, and you can talk to us about it.

**Brian Ketelsen:** No, we're not bringing you back until you have a budget. \[laughter\]

**Jessie Frazelle:** Yeah.

**Erik St. Martin:** You have to tell us somebody's budget. If it's not your own budget, it's gotta be somebody else's. If you make one up, we won't know the difference anyway.

**Jessie Frazelle:** Okay. \[laughs\]

**Erik St. Martin:** Alright everybody, we'll see you next week.

**Jessie Frazelle:** That was fun!

**Brian Ketelsen:** Goodbye.

**Carlisia Pinto:** Bye!
