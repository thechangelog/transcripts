**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer, and today we're talking about releasing. We talk a lot about reading and writing code, but there's nothing better really than actually getting your thing in a real user's hand, so that they can use it. It's kind of the point of why we're doing this. So in order to get it to them, we have to release it, and that's what we're gonna be talking about today.

I'm joined by - you won't believe it - Johnny Boursiquot. Hello, Johnny.

**Johnny Boursiquot:** Hello, mate.

**Mat Ryer:** How's it going?

**Johnny Boursiquot:** It's good! I just realized that you're the only person I get to call "mate." Whenever we're on a show, I feel like saying "mate." Hello, mate. How are you doing, mate?

**Mat Ryer:** Yeah, you should. I like it. I mean, you should be more friends with more pirates, probably.

**Johnny Boursiquot:** Probably...

**Mat Ryer:** Because they're always at it. \[laughter\] We're also joined by Natalie Pistunovich. Hello, Natalie. Welcome back!

**Natalie Pistunovich:** Thank you. Hi!

**Mat Ryer:** Welcome. How have you been? What have you been up to?

**Natalie Pistunovich:** Keeping my office cold, as we've talked about, because I really like working in a colder temperature... And I'm enjoying the last few days of the cold weather... Mainly, I've been enjoying some snow, and a lot of freezing. But not when it comes to code. Code freezing is the opposite of releasing, and that's not that we're here for today.

**Mat Ryer:** \[04:11\] That's right, that's the opposite. Yes. Well, I hope you can stay warm; I can see you have a scarf on, which I have no problem with... Well, we're also joined by the creator of GoReleaser... Carlos Becker is here with us. Hello, Carlos!

**Carlos Becker:** Hello, everyone. Thanks for having me.

**Mat Ryer:** Thanks for coming on the show and thanks for GoReleaser. Something I use every day... For anybody not familiar with it, maybe you could just give a quick overview - what is it?

**Carlos Becker:** Basically, a tool that builds your Go projects to whatever, GOOS, GOARCH, and any combinations you want, and it creates Linux packages, homebrew-tap recipes, or whatever the name is. Also, Snap packages for Linux, .deb, .rpm, .apk, Docker images, and pushes to S3, and whatever other thing you want to, basically.

**Mat Ryer:** Yeah. When I have a Go tool, I use GoReleaser to -- it does the builds for me for all the targets that I want. I just specify it in a config file. And it pushes it also up to GitHub for me. So it creates the release in GitHub, and it includes the changelog, and things like that.

If you're building tools that you release in that way, it's a great choice. Johnny, have you ever used GoReleaser, or tools like it?

**Johnny Boursiquot:** No, I haven't. But I've heard so much about it, and I really wanted to come on this show for Carlos to convince me that I need that in my life.

**Mat Ryer:** Yeah... Let's see if that happens.

**Carlos Becker:** Yeah, I can try to convince you the same way I convinced myself to write it, actually... Because I didn't want to keep more shell scripts all over the place... So yeah, it's a YAML file, so at least you don't have to copy-paste a lot of shell script.

**Mat Ryer:** And Johnny, you love YAML, don't you?

**Johnny Boursiquot:** Let me tell you, I love YAML. \[laughter\] It is a treat every day. I love YAML.

**Mat Ryer:** Yes.

**Carlos Becker:** It sounds ironic...

**Mat Ryer:** \[laughs\] No, not at all. Sarcasm is not Johnny's style. We can take from that, but he truly loves YAML. So let's talk generally about releasing then... What kind of processes are there for it? The simplest one of course is just manual releasing, which to be honest, I'll do for as long as I can. I quite like just running a script deliberately, to do a release... Especially in the early days of a project. How do people feel about manual releasing like that? Do you feel like automating is something you should do early?

**Johnny Boursiquot:** Well, before you answer, Carlos, I wanna make sure I'm coming at this from the right reference point. Let's frame this discussion a little bit. So what we're talking about is you have your Go project and you want to get it in the hands of people, in the form of the binary, the end result. Maybe you wanna distribute it with Homebrew, or APM, or whatever... So you need to get that executable, that project in the hands of folks. So is that different? Does it solve a different problem than when I'm packaging up my application? Maybe I have a service that I'm deploying somewhere, that's gonna interact with a bunch of other services... Maybe I'm using a containerization technology and maybe I'm using an orchestration tool... Maybe I'm in that environment. What kind of releasing are we talking about, I guess is where I want us to start.

**Carlos Becker:** I think it's more about tools, about services, like you were saying... At least the projects I worked on, I don't usually create tags for every release, because usually there are lots of releases every day... Release meaning pushing something to production. So the commit hash is pretty much the release. You basically just build/create a Docker image, or whatever you ship it with, and push to production, and that's it.

\[08:26\] For binaries that other people use, I don't think you need to automate right away if you don't want to, but my goal for GoReleaser was to make it so simple that you can also do it if you want, because it's just the GoReleaser and that's it; you don't need to write any YAML for the first releases, because it implies everything \[unintelligible 00:08:50.08\].

**Mat Ryer:** Yeah, it has sensible defaults, doesn't it?

**Carlos Becker:** Yeah...

**Mat Ryer:** But you can then configure that if you want to.

**Carlos Becker:** Yeah.

**Mat Ryer:** Very cool. Having that ability to wrap up the changelog as well - that's another feature of GoReleaser that I find particularly useful... Because really then what it does is - for anyone not familiar - it goes back and looks at the Git history between the two releases and pulls out the comments. So that actually gives you quite a good overview of what's changed in that release. It turns out to be a quite good starting place for a changelog.

So your tool is very practical... It addresses really practical things. Do you find that is a good approach, generally, to software? Is that usually how you approach things?

**Carlos Becker:** Yeah, obviously, I try to solve practical problems most of the time. Sometimes I find some problems to solve that don't really exist, like every software engineer, I think... But yeah, I think so.

**Mat Ryer:** So Natalie, what about you? Do you tend to go straight for continuous integration and continuous deployment systems, or would you be comfortable with somebody just deploys it manually for a bit?

**Natalie Pistunovich:** Yeah, releasing and deploying was generally probably one of the biggest mysteries when I started in my career, let's say... The coding part was always clear for me... As much as you can have it clear when you come out of a university versus a bootcamp; so you know lots of concepts, but then you have to go and put them in practice, and that was surprising. But the part of how actually it's being -- like, what happens in the life of a project after you finish writing the code a specific time, let's say, has been something that I was in the beginning a little bit embarrassed, and asked "But how do people end up using what I write?" And then you go to the scary DevOps people and like "What do you do?" "What do you mean what we're doing?" \[laughs\]

So releasing has never been something that I've done a lot, let's say, and being a developer advocate is definitely even less on my plate these days, because you do lots of projects, you put them on GitHub, and then you write a tutorial... This is the new way of delivering content... \[laughs\] So I am here, I guess, to ask more questions about what is new in releasing, for those people who actually do use this a lot. So Carlos, when you were convincing Johnny to use this, I was also on the being covinced side.

**Carlos Becker:** Okay...

**Johnny Boursiquot:** You've got your work cut out for you, Carlos... \[laughter\]

**Mat Ryer:** Interesting, Natalie... You're saying that you're pushing code into GitHub is kind of how you're releasing, if it's open source projects and things... That's different with Go modules, because now we are more conscious of actual releases by tagging properly. But that's the other thing that you think about, like what gives us the confidence to release, before we get to that point of feeling like we can push this code out? Why do we do that with any confidence? Because that's a big thing. If you release something that then breaks, of course - especially if you've got lots of users - that's not good. So what can we do to make sure the release is good before it goes out?

**Carlos Becker:** \[12:17\] I think the first thing is having a lot of tests, and running them all the time. I think this is probably the most important thing, because if you are testing early, something is broken and you don't know, if you are testing, probably is broken and you don't know too, but at least other things you might know when they break...

**Mat Ryer:** \[laughs\] Yeah...

**Carlos Becker:** Yeah, I think that's the first part... And the other part is not having a process that is too hard to follow, or that has too many moving parts, because whenever you need to do a lot of things manually, you're prone to make some mistake and do something wrong.

**Mat Ryer:** Yeah, and so then with continuous integration and continuous deployment systems - they will often watch the repositories. So when the pull requests get merged in or when code gets merged into the main branch, that then triggers some operation which can then go and do that release work... And do lots of people use GoReleaser in that context?

**Carlos Becker:** I think so. I actually created it with that in mind, because if you think about having reproducible builds, my machine is not something that I can easily reproduce... So running in CI seems to make more sense; either on CI, or on a Docker container, or something that you can reproduce easily.

If you look into the GoReleaser documentation, there is a topic there about continuous integration, configuration examples for Jenkins, GitHub Actions, and a lot of other CI. I think most people use them on CI, but also a lot of people run it locally, too. That's the stuff where you sometimes need to sign something and you don't want to put the keys there, or something like that. I would say the majority of the releases are in most CI's, yeah.

**Mat Ryer:** Yeah, that makes sense.

**Johnny Boursiquot:** Yeah. I'm looking at the documentation - it seems like you thought a lot about the entirety of the release process, and even for those who have to cross-compile; maybe you need a binary to ship to a Linux environment, a Windows environment etc. and there are limitations. And I'm not throwing shade at you in any way here... Under Limitations, you punt hard on cgo. \[laughs\]

**Carlos Becker:** Yeah, it's because honestly I didn't want to maintain a Docker image of everything you need to cross-compile with cgo to whatever OS people are using. There are a lot of examples, like using GoReleaser to cross-compile with cgo, and a lot of Docker images, and all that... So I just didn't want to get that into GoReleaser, because the scope of GoReleaser is already very big, it's already a lot of things to glue together and make everything work... So I didn't want one more very complex thing together in there. But it's not like officially baked into GoReleaser, but it does work given the right environments, let's say.

**Johnny Boursiquot:** There are some contributions and recipes, if you will, for doing that out there... Which kind of leads me into the overall ecosystem, the community around this project. It's got 7,000+ stars on GitHub, it's been forked 518 times from what I'm seeing here... I don't think I've ever seen a project of this kind forked so many times. I'm wondering what folks are doing... Did you build something that is extensible, in a way, that you can sort of add on capabilities on top of it? I'm wondering what are some of the use cases that you hear about when people fork this project? What are they adding to that?

**Carlos Becker:** \[16:20\] I think some of them are probably pull requests, and the others I don't really know. I think sometimes people fork it to experiment things. I've seen some cases of that. But if they are \[unintelligible 00:16:33.09\] GoReleaser with different capabilities, I'm not aware, so I don't know.

**Johnny Boursiquot:** Let me change the question... What are some of the pull requests or additions that you've seen and that you've accepted from the community, beyond the original feature set that you've developed?

**Carlos Becker:** For example the Snap packages build, the signing part also was contributed by -- I forgot his name, but he was working on \[unintelligible 00:17:01.16\] load balancer, I think, at the time. I remember \[unintelligible 00:17:05.21\] but I don't remember his name. And also a lot of bug fixes, small features here and there, things like that.

**Johnny Boursiquot:** So you would consider this project pretty stable then, at this point, yeah?

**Carlos Becker:** Yeah, I've been wanting to get a v1 since one year or more ago... But every time I think "Now it is stable", I find something that I need to change in the configuration, or something like that... And then I decide to give it more time at that point, for a while.

**Johnny Boursiquot:** It's cool to stay at v0... Look at Terraform. It's been v0 forever. \[laughter\]

**Carlos Becker:** Yeah, I wanted to go to v1 so I can start working on v2, or something like that... I don't know what v2 will look like yet, but I think I would change a couple of things. I'm kind of eager to start hacking on that. I promised myself to only start when v1 is stable, because I don't want another Python v2 vs. Python v3 situation.

**Mat Ryer:** Yeah.

**Natalie Pistunovich:** Would you say that most of the contributions that you're getting are steady throughout the year, or is there any Hacktoberfest spike, or you see a spike when somebody discovers the tool and then a group of people support it? Or no particular behavior in the contributions.

**Carlos Becker:** I don't think there are any particular behaviors. I've seen sometimes a couple of spikes, like when someone famous talks about it on Twitter; I see spikes on stars, for example. But not particularly on pull requests. Sometimes in issues, but pull requests I don't remember. \[laughter\]

**Natalie Pistunovich:** Yeah. Being a maintain or a creator of such a big open source project, when you go and interview in companies for your next job - is this something that the employer sees as a good thing, because you have such a good initiative? Or is it actually something that's potentially offsetting because you might put too much of your time for this? What was your experience?

**Carlos Becker:** My experience is that sometimes companies reach out to me because I have GoReleaser. I don't know if they see my code or whatever, but they want to talk with me..

**Natalie Pistunovich:** Hm. Basically, they send contracts your way. They skip all the interview stages. \[laughter\]

**Carlos Becker:** Yeah, more or less... Something like that, yeah.

**Natalie Pistunovich:** Cool.

**Carlos Becker:** For me it has been good. It's a lot of work, of course, but it's nice.

**Mat Ryer:** Yeah, there is something you get for free when you think about working with somebody that has already an open source project, especially if they founded it... Because it takes a lot of different things to do that, to go through that process. So I understand why people kind of skip the interview process, because you've sort of like proven all the main bits that people need... That's why I do always encourage people, especially if you're junior, to get involved, if you can, in some way, in open source... Because you never know; and the network that you build, the knowledge that you're getting from doing it, and also future opportunities. They're very real. So yeah, I'd always encourage that. This is a nice example of that.

**Carlos Becker:** \[20:19\] Yeah. And I don't know about you, but the most I've learned about programming was reading other people's code.

**Mat Ryer:** Yeah.

**Carlos Becker:** So you get a lot of code to read for free, basically, on GitHub...

**Mat Ryer:** Yeah. So how did it happen then, when you released GoReleaser? Was it a kind of slow burn, and you had a few people? Was there kind of a quick uptake? And what's it like managing that process?

**Carlos Becker:** Basically, at that time I was working on my first Go project, actually. I was learning Go, and I wrote \[unintelligible 00:20:54.05\] and I had a shell script, like I said, and I didn't like it. And then I created another project, and I don't remember what it was, but I needed the same scripts, basically, so I created GoReleaser, which was basically that ugly shell script in Go, with YAML instead of environment variables and flags.

Then I just posted it on Reddit, and it got like -- I don't remember how many hundred stars in a couple of hours, and a lot of issues and pull requests. Then it was stable for a while, and then someone famous started using it, and then there was a spike; then stable, someone famous, a spike, stable... And basically that's it.

**Mat Ryer:** Yeah. And it's lots of different people probably using it in slightly different ways and in different environments, and stuff... So I can see how you get a lot of pull requests of that ilk.

**Carlos Becker:** Yeah... For example, Hugo uses it... And Hugo uses cgo, actually. And when Hugo started to use it, I think it was -- I don't remember his name, and I don't know how to pronounce his name also... But his username is @bep. He opened a couple of issues, a couple for WordPress if I remember, and found a lot of things to improve, and we've kind of hacked something together on a weekend, and then Hugo started using GoReleaser, and then there was a spike... I think a lot of it is due to Hugo.

**Mat Ryer:** I didn't realize Hugo used cgo...

**Carlos Becker:** Yeah, I think because of its SaaS part, if I'm not mistaken... But I might be mistaken; I don't remember.

**Mat Ryer:** That's cool. But if someone from that project helped with some changes in GoReleaser, then that's really cool as well. That's kind of a nice example of open source working, where both GoReleaser the project and the other project that's doing the work or helping - both are benefitting. I think that's always quite nice.

Have there been any challenges with working in that open source world? Like, some people find it difficult saying no to features, but saying no to features is quite important, isn't it? Are there other challenges that you've found?

**Carlos Becker:** Yeah, saying no is one of the things -- at GopherCon Brazil a couple of years ago I actually talked a bit about that... Because saying yes is easier, but it comes with a lot of \[unintelligible 00:23:32.24\] people who expect you to be there forever, basically.

**Mat Ryer:** Yeah...

**Carlos Becker:** I think that adds up with the other part, which is finding time to do everything you want to do, including open source and other parts of life. That's the hardest thing, for sure, and saying no to things helps a bit, but there's still a lot of things, like bug fixes and things like that, that \[unintelligible 00:24:00.06\] them anyway, so... It's still hard to find time sometimes.

**Mat Ryer:** \[24:07\] Yeah. And it takes real time, it does... That's also worth remembering for people that use open source projects - the amount of time and effort that goes into them definitely is great. But generally, has it been quite a positive experience for you then, open source?

**Carlos Becker:** Yeah, I would say this.

**Mat Ryer:** Are the community all usually nice people, and pleasant, and all that?

**Carlos Becker:** Yeah, I don't remember having to deal with anyone who was rude, or whatever. Everyone was always super-nice with me, so I had a good experience with that. It was nice.

**Natalie Pistunovich:** You mentioned a little bit of that -- you wrote this, basically, when you were starting, using Go... And in the beginning you introduced this project as kind of automating everything. In my mind, automating everything means like automation \[unintelligible 00:24:58.07\] But somehow everything dev-opsy is actually in Go. Did you choose intentionally Go for this, or did you just use Go because you were using the language at the time? What was your thought process for this choice?

**Carlos Becker:** I used Go for several reasons. Because the other languages I was working with before were basically Java and Ruby, and neither of them seemed right to me... And my shell script was already very complex, so I kind of \[unintelligible 00:25:29.02\] It was meant to release a Go project, so I thought it also makes sense to write it in Go. That was basically my thought process at the time.

**Natalie Pistunovich:** And then you found out Kubernetes and Docker and everything is written in Go, and you're like "Yes! I made the right choice!"

**Carlos Becker:** I knew about that before, actually. I started as a software engineer, software developer many years ago, and for a while I was working as a DevOps/SRE and all that stuff.

**Break:** \[26:00\]

**Mat Ryer:** So Johnny, at your place how do you do releases? How do you manage releases? What does a release mean in your job?

**Johnny Boursiquot:** Oh, you said at my place, and I'm like "At home? " Yeah..."

**Mat Ryer:** Do you do releases? \[laughter\]

**Johnny Boursiquot:** I release my kids outside all the time.

**Mat Ryer:** You semver their breaks...

**Johnny Boursiquot:** \[laughs\] Well, we have, as you'd expect with a company as large as we are - Salesforce - and all the other companies that we've acquired over time, everybody sort of comes in, every team comes in with their own ways that are customized for their build pipelines and everything that they need to do. You throw in there compliance things, security things... These things can get really complicated. So in some cases, some tool as simple as GoReleaser could work just fine; in oher cases, just doing a go build and getting the executable, because you know exactly where it's gonna go, how it's gonna run, you know everything about it, you control that environment quite well, and you can go as simple as that. The only thing you might need maybe is just the makefile, to help you with triggering builds, and whatnot...

\[28:11\] So it varies so much in an organization as big as ours. It's one of those things where truly it is -- because we have access to so many of these tools, it is truly a matter of what is it that I'm building now, and how do I need to get it from my computer to where it needs to be running? So you kind of have to make that decision -- you can't ignore making that decision, saying "Well, we usually do things this way for this particular class of software. We usually do things that way for this particular class of software." So there's some archetypes that we follow, but there's no one size fits all. There just can't be.

**Mat Ryer:** So is each team responsible for their own releasing?

**Johnny Boursiquot:** Yeah. At Heroku, which I don't think is gonna be a surprise for many folks who are familiar with Heroku and how Heroku does things, but teams follow a total ownership model. They own the software they write, they own the delivery of that software, and they own the operation and health of that software. So if the thing breaks at 3 o'clock in the morning and you're on call - well, your team is responsible for it, so you get up and you take care of it kind of thing. And that's basically part of the Heroku culture. That's something that we're proud of. It's not perfect; no system, no design, no approach is perfect. Everything has its pros and its cons. But yeah, we have our own release tooling, we sort of consume our own dog food as well.

If you're familiar with Heroku at all, you'll know that basically there's release pipelines, you can promote things from environment to environment, and things like that, so we consume our dog food in a lot of ways, too... but there's no strict mandate that it be done a particular way. I think there's enough autonomy, there's enough trust with each engineering team that every team finds the right way to release a particular piece of software... Because no two teams do exactly the same thing... Some things are common, but it's on a case-by-case basis.

**Mat Ryer:** Yeah... So is that something you have to push back against all the time, or is that just already accepted everywhere? Because it's very common to see these people all doing the same thing and really having that desire to want to solve that once for them, you know?

**Johnny Boursiquot:** You remind me -- I've given a whole talk at QCon, on the dangers, or the challenges rather, of trying to introduce some sort of a common layers... This was in the context of SRE, but basically, the challenges of trying to introduce common layers of tooling, and practices and things like that across teams, especially when everybody is releasing software their own way, the way that makes sense for their teams and what they're building...

So whenever you need to introduce something that crosses team boundaries, it can be challenging, because teams are often under deadlines, and they need to ship something, and all of a sudden here you are and a comment says "Hey, how about we settle on GoReleaser for all the things?" and then teams that haven't been using it or haven't seen a need for it, they start looking at it like "Um, we've got stuff to ship, man... We don't need this. Our build pipeline right now - it works just fine. We don't need to do that." But here you are, like "Well, if we do that, we can standardize. Everybody can be using the same thing. It will be perfect." And then -- nope, that's usually not the way it goes. As we all know at this point, it's not always a technology decision. Sometimes it their team dynamics, there's business requirements, there's deadlines, there's features that need to be shipped, there's operational concerns, a lot of cross-departmental -- the icky gooey people side of things often is the barrier to getting a technology adopted.

**Mat Ryer:** \[32:06\] Yeah, that's amazing to hear that... It's actually really interesting to hear the insights and what it's like there... But I think it's a good lesson. And you talked about those common layers as well... Because that also applies in code, with abstractions; if you try and do those abstractions too much, you can easily overdo it. Or too early? You can easily do the wrong kind of thing. And GoReleaser in a way abstracts some of the other tooling underneath it, doesn't it? So did the design of GoReleaser change much from its initial version over time?

**Carlos Becker:** Not much, but a couple of times yes. I remember one particularly big refactoring which was very early on, to basically start using context and pass information through a context from one pipe to another... It's called Pipe internally, like upload to S3 is a pipe, build is a pipe... So the pipes talk to each other through a context, basically. Before, it was sequentially calling every pipe which was on the pipe at the time; basically, calling several functions, and they are -- I think they were messing with global variables, or something like that. I don't recall correctly... That was the biggest one.

But I think the hardest part about abstractions is actually the interface for the user, or in GoReleaser it's the YAML file, like how the YAML file should look like for Docker, for example. I mentioned Docker in particular because I changed it like 100 times already... And 100 times is a lot, and it's not that much better than when I changed it a couple of times. And that's the hardest part, for me at least... Because other software like Docker also changes, and then sometimes the abstraction I made that had a lot of things I thought were granted, are not granted anymore, or something like that... And then I have to change things.

**Mat Ryer:** Yeah... That's the thing, you are abstracting those concepts...

**Carlos Becker:** Yeah.

**Mat Ryer:** That is a hard thing to do... To do it well is very difficult. And to be honest - I mean, I've been using GoReleaser for a long time, so I don't want people to think that means this thing's changing all the time, and not stable. It really does feel stable; it just kind of works, and I think you'll really like it. If you are releasing Go tools in particular, that is very easy, very good. So do you feel like it's settling down then, this abstraction? Do you feel like you're getting there?

**Carlos Becker:** Yeah, I think so. Recently, I think the only change is adding more stuff, which is kind of okay... For example, Snap has -- we didn't have all the configuration possible, or more abstractions, and now we are adding more things. Docker Manifest had some changes recently, so also this is a kind of offer, trying to make GoReleaser create documents for you, in an easy way, so that you can also customize the way you want, and what you need. But it's pretty much stable... The core parts haven't been changing in years, I think...

**Mat Ryer:** Do you use GoReleaser to release GoReleaser?

**Carlos Becker:** Yeah, GoReleaser releases itself with the version it's built and it's using to release it. I don't know if that makes sense, but...

**Mat Ryer:** The version before...

**Johnny Boursiquot:** You don't even have to write the code, it just writes itself.

**Carlos Becker:** Yeah... \[laughter\] Basically, when they're releasing GoReleaser, they just run the tests, build etc. and then it runs go run main.go and releases itself with the version that's being released... So that's it.

**Mat Ryer:** \[36:18\] Oh, it releases itself with itself, literally. It's not the previous version you have installed. It's THE version. Well, that's one way to dogfood. I suppose if that fails, you know that you shouldn't release it.

**Carlos Becker:** That was the idea, yeah. True. Make sure it works, it releases itself. If something is wrong, it will probably fail at some point.

**Mat Ryer:** Yeah. Wow. It's so meta that way... It is like Inception.

**Natalie Pistunovich:** So what are your recommended best practices for yourself, that you were following when you were doing this release? Surely, you developed a whole system over the time, other than seeing if it fails or not...

**Carlos Becker:** I think it depends on the project for some things... I don't know, I have to think about it. I actually don't have a list of good practices.

**Natalie Pistunovich:** Do you have some sort of thing you always do when you release the new version of GoReleaser, or with GoReleaser?

**Carlos Becker:** No, I just run the tests, which the CI does, and that's it.

**Mat Ryer:** It's not like a celebration...

**Natalie Pistunovich:** Because you know if it says it's fine, you know you can trust it.

**Carlos Becker:** Yeah. It has a lot of tests, so...

**Natalie Pistunovich:** Yeah.

**Carlos Becker:** I can say I can trust it. There are some bugs that sometimes I \[unintelligible 00:37:30.08\] and then I add a test for that, and then it's covered for the future versions.

**Natalie Pistunovich:** That's definitely a serious vouch of confidence.

**Carlos Becker:** Yeah... But it has like 90% of coverage, or something like that.

**Mat Ryer:** It has 90% of what, sorry?

**Carlos Becker:** Test coverage.

**Mat Ryer:** Oh, right, right. Yeah, that's an interesting subject, because a lot of people, obviously -- you've got a percentage, you've got a metric, you've got a thing to push towards. Do you think 100% test coverage is a good idea, or not? And if not, why not?

**Johnny Boursiquot:** That's a trap. Watch out, it's a trap.

**Mat Ryer:** Yeah, I'm gonna undo all those job offers when you say "Nah, don't worry about testing everything." \[laughter\]

**Carlos Becker:** I don't know... I don't think 100% is something you aim for for every project. I think for libraries it makes sense, but for binaries, for example, some things are very hard to test, like handling errors and closing files; it's very hard to test that. Because of that, it's very hard to get to 100%. So I don't think it's worth investing that much time just to get 100%.

**Mat Ryer:** Yeah, I'm with you on that. Does anyone else disagree with that? Or maybe we should save this for unpopular opinions... \[laughter\] I mean, I think that's just good thinking, genuinely. If the tests give you enough to give you the confidence... You know, if you overtest and you wanna make a tiny change somewhere, you can't. You have to go and then update the tests. And often, in that overtested environment, multiple tests are failing again, because you end up repeating yourself a lot in the test code. So yeah, I'm with you. It's really the quality of that test coverage, not just the quantity of it...

**Carlos Becker:** If you could measure confidence on the test suite, I think that should be the aim, not test coverage itself. The confidence you have in the tests, that should be what you aim for.

**Mat Ryer:** That's a good point, yeah. Maybe we could use the cameras to look at the engineer that does the push, and see how confident they're looking, and classify them. It's like, "This one looks like a coward. Stop the release!" \[laughter\]

**Carlos Becker:** Yeah. And you can't manually test. You just go test and push to production. It's the best! \[laughs\]

**Mat Ryer:** \[40:01\] There you go. That's the confidence. You see, that's it. But if your tests are the promises of your project, if they cover all those promises, then you really can do that; you're not saying anything extra. Everything else is undefined, and there are sometimes -- you get into problems there, if people start to rely on this undefined behavior that's just emerged.

**Carlos Becker:** Yeah.

**Mat Ryer:** But yeah, I think so... I mean, if you've described your intentions in your test code, you should be able to run the tests and deploy happily. That's how I do it...

**Johnny Boursiquot:** I wanna pull on a thread, because this has been bothering me for some time...

**Mat Ryer:** Oh, no...

**Johnny Boursiquot:** Not you specifically, Mat; you haven't been bothering me...

**Mat Ryer:** Not this time. Phew.

**Johnny Boursiquot:** ...not for long, at least.

**Mat Ryer:** Yeah. I got your last note. \[laughter\] I got your last email.

**Johnny Boursiquot:** Here's the thing though... For something that is seemingly so quantitative, we do have a very qualitative way of measuring it. So we talk about sort of a confidence in tests, and how much is good enough... We can't come out and say "Well, it must be 100%." "Well, it could be 100%, but some of those tests are so brittle that you might as well not have 100%..." A vast array of reasons why you should, or shouldn't... But it's all very subjective.

\[41:25\] It's like, "What is the confidence level in a test?" Well, that's a very human thing, right? My confidence level might be higher than yours, so should we just get together and decide what our collective sense of confidence should be for something? If I told you my very critical to you package is 50% covered with tests, but I'm very confident in that 50%, would you put that in your mission-critical project?

**Mat Ryer:** Yeah, I would, because I trust you, Johnny. \[laughter\] I would die for you, Johnny. I will release anything you tell me to.

**Carlos Becker:** I would write tests for the behavior that depends on your library, probably... \[laughter\]

**Mat Ryer:** You'd add some tests...

**Johnny Boursiquot:** So you'd write the tests to ensure that my stuff is tested. Or you could open PRs. That might be the simplest way.

**Carlos Becker:** Yeah, that too.

**Mat Ryer:** Well, actually, if you wanna report a bug, a PR with a failing test is a great way to explain that bug.

**Johnny Boursiquot:** Golden.

**Mat Ryer:** Yeah, really cool. It's very rare, but when that happens, it's just so great. You just run it, you see the failure... There's no ambiguity in the language, because you're talking in code at that point. So that's a nice tip... If you can use a failing test to prove your point, please do so.

**Johnny Boursiquot:** It's even better if you actually have the fix for that failing test as part of the PR.

**Mat Ryer:** Yeah, that's true. But sometimes people are using the code in an unexpected way, or a way that they shouldn't be using it, and it's not really a -- that's the thing, it's about taking some of that ambiguity away... But yeah, if there's a simple fix for something, then that's the silver bullet, ain't it?

**Natalie Pistunovich:** It doesn't mean that when you take a new library that you find, you actually run tests locally before you start integrating it, and then running tests for your whole project?

**Mat Ryer:** Oh, that is gonna put a lot of us to shame... \[laughter\] Johnny, do you run the tests for all your things you import?

**Johnny Boursiquot:** Look at how I'm punting this. You can't see it, but on my screen right now I'm punting over to Carlos... \[laughs\]

**Natalie Pistunovich:** Yeah, so this failing test that you've written... Would it be failing because you took the library, you integrated it into your code, you ran your code, you tested YOUR code, not that library, and your code was the one that was behaving unexpectedly, so that's how you came to this? Or did you test that library that you imported? ...not for obviously everything, but for maybe one, two things that are really important for you in your project.

**Mat Ryer:** \[43:58\] Yeah, so for me I'll say - having the test code in a different package in Go, which some people like to do it, some people don't... But you can have your test code alongside your normal Go code, in a different package... And that means you're then using your own Go code as an external package. So you have to import the package, you're using it as a third party is gonna use it. So in that world, the test code and the user's real code is the same kind of environment... And that's one of the advantages of doing that, because you are operating very closely to how users are operating.

I was quite like that, because it helps also with -- you get to really see the API footprint that you're building, especially if you do TDD stuff and you see the little IDE dropdown, and it tells you all the options. That's a very nice way to get a sense of the API that you're designing, and thinking about "Is this gonna be kind of confusing, or easy, or whatever?"

But yeah, the point about the testing - that's very nice, when the user's code looks like your test code... Because it also allows them to copy and paste it, and things like that.

Christian on Gophers Slack - and by the way, you can join in the conversation there - says "GoReleaser is one of my favorite tools in the entire Go ecosystem. Thanks for working on this, Carlos." I just thought I'd read that out; it's nice. I've got nothing nice to read about anyone else, sorry. \[laughter\]

**Break:** \[45:30\]

**Mat Ryer:** So do you actively spread the word about GoReleaser? Do you do anything to try and get people to find out about it?

**Carlos Becker:** Not really... The only things I did was -- more in the beginning I posted to Reddit, and I made some stickers and leave it at GopherCon Brazil, and some Go meetups...

**Johnny Boursiquot:** That was it.

**Carlos Becker:** Yeah. Sometimes I write something about it on my blog, about new features or things like that... But I never spend much time thinking about marketing, or...

**Johnny Boursiquot:** You did it, man. The single biggest thing you can do for your project. It doesn't mean it has to be finished. You can just have an empty repository. But if you have a good logo and some stickers...

**Carlos Becker:** My wife designed the logo, actually...

**Johnny Boursiquot:** \[laughs\] That's awesome. Make it a family project, a family activity. But yeah, if you have a good sticker, a good design, a good brand, a good logo - man, your project is bound to skyrocket, you know? \[laughter\]

**Carlos Becker:** Yeah, those \[unintelligible 00:47:38.05\]

**Mat Ryer:** Oh, the logo is the little gopher on the rocket, is that right?

**Carlos Becker:** Yeah.

**Mat Ryer:** And your wife did that?

**Carlos Becker:** It's because people sometimes put the rocket before releasing, or something like that...

**Mat Ryer:** Yeah, that's great. But Johnny's right, actually. A logo and a good name... And GoReleaser really just tells you what it does, so you can't really argue with that... So yeah, that does help.

**Johnny Boursiquot:** \[48:11\] Unless you put an awkward pause in there, like "GoRelease Her."

**Mat Ryer:** Oh, like a hostage situation...

**Carlos Becker:** I was about to say...

**Johnny Boursiquot:** There's a lot of ways you could misinterpret it... \[laughs\]

**Carlos Becker:** ...there's black metal band variant - Gore leaser..

**Mat Ryer:** Oh... And you clashed with them. Do you get a lot of cross-traffic?

**Carlos Becker:** Some people \[unintelligible 00:48:32.16\]

**Mat Ryer:** Do you get a lot of metal fans trying to use GoReleaser and they're like "What is this, maaaan?" That metal, classic mental voice...

**Johnny Boursiquot:** "Why is there some sort of furry animal thing? What is this? This is not metal..."

**Carlos Becker:** Yeah... \[unintelligible 00:48:47.15\] it screams...

**Mat Ryer:** Yeah. Well, that's what happens when you don't have good test coverage. That's where you get your screams from. Natalie, you're into metal, aren't you?

**Natalie Pistunovich:** Yeah... When you say "screams", it was a little bit hurting my ear, because \[unintelligible 00:49:03.05\]

**Mat Ryer:** It's offensive.

**Natalie Pistunovich:** I was trying to make a joke about hurting the ear, and the screams... Yeah. I hope it went across.

**Mat Ryer:** Yeah, it did. Yeah, we've learned our lesson.

**Natalie Pistunovich:** \[laughs\]

**Mat Ryer:** Yeah. Yeah, not screams, Johnny. So you said that... \[laughter\]

**Natalie Pistunovich:** Carlos, the project can be supported by anybody who likes it, and there's several ways to do this, right? There's GitHub Sponsors, there's backers, there's the Open Collective... Can you tell us a little bit about which one you like more, or you like all of them...? What's a good way to support for everybody who wants to show their appreciation?

**Carlos Becker:** The Open Collective is mostly if you want to support the project itself, because that money is spent mostly on stickers, buying domains, and things like that... Buying domains - actually, just renewing the only domain it has.

And if you want to support me as a developer that works on GoReleaser, then I like GitHub Sponsors better, because I can just transfer the money to my bank account and do whatever I need or want to do.

**Natalie Pistunovich:** So you can go and buy some personal domains...

**Carlos Becker:** Yeah, for other projects that I won't have time to work on... \[laughter\]

**Mat Ryer:** We don't wanna get into any tax conversations...

**Carlos Becker:** Oh no, please...

**Johnny Boursiquot:** And you're gonna put that on the record, in this show... \[laughter\] Jeez, Mat...

**Mat Ryer:** GoReleaser.com is the website, so if you wanna check it out - it is a very cool website, and you can see the little rocket gopher in there... Well, I'll tell you what, everybody - it's that time again... It's that special time; time for unpopular opinions.

**Jingle:** \[50:54\] to \[51:11\]

**Mat Ryer:** Do you have an unpopular opinion for us, Carlos?

**Carlos Becker:** I have a couple, but I don't think they are so unpopular... For example, I don't think we need generics... But I think this was talked about in the last episode. So I will go with go.mods are great, but I don't think most people will do that v2 folder thing for major bumps, or whatever. I get it why they ask you to do that, but I don't think people will do it. I won't do it, for sure, because it's already hard to keep one version, one stable version. A lot of stable versions is -- sorry, I'm not going to try it.

**Mat Ryer:** \[51:57\] Yeah, that's very interesting. What will you do then, if there's a second major version of GoReleaser?

**Carlos Becker:** You can just add it to your go.mod file and put a /v2 at the end of the first line, I think; I don't remember the keyword there, but just doing that already works. I think the only thing that doesn't work if you do that is other dependency management tools that are not Go modules... But honestly, I don't care that much about that.

**Mat Ryer:** Fair enough.

**Johnny Boursiquot:** So you're not the only one who thinks along those terms, Carlos... We have entire projects that have, rather than going to a v2, they've changed names, they've rebranded, they've created new vanity domains... \[laughs\] Yeah, people are going out of their way to not have to go with the whole v2 thing.

**Mat Ryer:** They're really pushing the boundaries of semver there... Like, "This is version one point a billion, point two."

**Johnny Boursiquot:** \[laughs\] Exactly, exactly. I mean, that is a signal to the Go team, I guess... But yeah, at this point I think that ship has sailed. Modules is what it is, and you might get some fixes, and updates, and even features at some point, but it is the way of the land.

**Carlos Becker:** Yeah. At least we don't need $GOPATH/src to put projects there anymore. That's a good thing, for sure.

**Mat Ryer:** Well, that can be my unpopular opinion then, because I really like that. I like just being told where to put things on my hard drives. It's one of the things I struggle with in my daily life, so... They were like "No, you have to have one folder. Put everything in there." I was very happy with that. But yeah...

**Carlos Becker:** Yeah, I didn't think it was bad either, but for new people starting to learn Go, it was kind of hard to explain...

**Mat Ryer:** Yeah, it was weird.

**Johnny Boursiquot:** That was the hardest part, basically having to explain -- imagine trying to teach someone how to program, and then having to explain the GOPATH first. It was painful.

**Mat Ryer:** Really? "Just put this stuff in this folder." \[unintelligible 00:54:19.05\]

**Johnny Boursiquot:** "But why?" \[unintelligible 00:54:21.17\]

**Mat Ryer:** Yeah... \[laughter\] No, if they're pushing back on that, Johnny, that's a tough class. They're like, "Why? Why can't I have it in any folder I want?" "Because this is computers, and there's rules. It's just chaos. You can't just have anything anywhere."

**Johnny Boursiquot:** "Or just do as I say."

**Mat Ryer:** Yeah, that's why your training turned into more of a bootcamp, isn't it, Johnny?

**Johnny Boursiquot:** \[laughs\] Exactly.

**Mat Ryer:** "Okay, I don't wanna hear a word out of you maggots."

**Johnny Boursiquot:** "Just do it! Stop asking questions!"

**Mat Ryer:** That's the approach to teaching GOPATH there, by Johnny Boursiquot. Johnny's available to hire for training, by the way, listeners.

**Johnny Boursiquot:** It's true, jokes aside. Yeah.

**Mat Ryer:** Yeah, it really is. And he's a great trainer. I don't get any kickback for saying this. He's brilliant; I've been in one of his classes, so I do recommend him if you get the opportunity... Okay, any other unpopular opinions, everybody?

**Natalie Pistunovich:** I have one that is a little bit related to Go, and it's from reviewing the applications for the diversity scholarships for GopherCon Europe, which just closed yesterday... And it also a little bit contradicts a previous unpopular opinion that I expressed here.

**Mat Ryer:** Hm...

**Natalie Pistunovich:** What I said one of the previous times was that just try things, even if you're maybe a little bit scared, or not sure about. And then we saw some surprising applications by people who don't associate themselves with any minority or diversity groups, and also have decently-paying jobs, and apply for a diversity scholarship. This is an example of something you should not necessarily go for. \[laughs\]

**Mat Ryer:** \[56:07\] Okay. What's \[unintelligible 00:56:12.25\] Johnny? I hand all the sensitive ones over to Johnny. Johnny, what do you think about this really difficult subject?

**Johnny Boursiquot:** I don't disagree... So at the risk of annoying a few people out there, it's easy to -- actually, the reason I'll say this is because this is a conversation I've had with some colleagues and friends recently... It's easy to feel resentful when you see that there are opportunities that are being created, opened up to people who don't look like you... If you happen to be white, or male, or usually white and male. It's easy to be resentful. And obviously, I've never been a white male, so I wouldn't know exactly how that feels, so...

**Mat Ryer:** \[unintelligible 00:57:01.27\]

**Johnny Boursiquot:** What I can say is that I've been on the other side of that, where there hasn't been any opportunities, and there hasn't been any callouts, or any doors that I could see, that I could imagine being open, where that made the journey more difficult than it could have been. So it's hard to decouple ourselves of these emotions that we feel; when we see those opportunities being created that we can't apply for or we can't be a part of or take advantage of, because these things are being created for others - it's very hard to see that and appreciate it sometimes. I get that. But for those folks, the only thing I can say is that basically the field has been the way it's been for so long.

These efforts are trying to level the playing field. We don't all start at the same starting point in life, or in our communities, or our environments. We don't all start at the same starting point. So when you compare yourself to somebody who's so far behind you you can't even see them, or you don't even realize that they're there, this is what these programs are designed to do. They're not giving them an unfair advantage, they're really sort of saying "Hey, here's a door that is open, that perhaps has never been open for you, that if you put in enough hard work and effort and persistence, you can walk through it." It's not a handout, it's not an exclusionary thing. We're not trying to discount from you to give to others. That's not what that's about. It's about creating opportunities that don't appear for a whole class of people that don't look like you. Again, it's something that we kind of have to look inwards for...

So that's the one thing I'll add to that... Only because -- and again, I'm \[unintelligible 00:58:56.23\] soapbox here, but it's something I've been thinking about recently, trying to empathize and put myself in the shoes of people seeing these things, and trying to envision "Well, if I saw that and they told me I couldn't apply because I'm a white male, how would I feel about that?" So I just wanted to add kind of a flavor to that, and really just say "Hey, I get it. I understand, I recognize it. I acknowledge that it's gonna feel a little harsh and unfair", but look at it with a different lens, from a broader perspective. That's it for me.

**Mat Ryer:** Well said. Very good. I couldn't agree more, Johnny. I don't wanna get into it too much, but I think that is what some people think; they see programs that are correcting something, and it feels discriminatory against them. You're right, you have to look at a bigger picture. Very generous of you though, Johnny mate. I would have been much more annoyed if I was saying that... \[laughter\] It bugs me, by the way, when people do that... But yeah. You know what I mean. Very diplomatic.

\[01:00:09.13\] Well, I think that might be all the time we have, I'm afraid... Carlos, thank you so much for joining us. And as Christian on Slack said, thank you for GoReleaser. It's a great tool. Hopefully you'll come back and join us on Go Time another time.

**Carlos Becker:** Yeah, for sure. Thank you for having me, and thanks everyone.

**Natalie Pistunovich:** Thank you, Carlos.

**Mat Ryer:** Thank you. And also Johnny Boursiquot, Natalie Pistunovich, and I've been--

**Natalie Pistunovich:** Mat Ryer.

**Mat Ryer:** Yeah, thank you. I was gonna say it, but you said it. \[laughter\] And by the way, let's just say - if there's anybody that feels like they're part of a minority in tech, that wants to come on Go Time, get in touch with one of us on Twitter. I will say our Twitter names... Because if we can help in some way, then we'd love to do that. I'm @matryer. Johnny Boursiquot, what's your Twitter name, mate?

**Johnny Boursiquot:** I'm @jboursiquot. I'm not gonna try and spell it for you... Probably you're just gonna look me up and then click on the link. It's gonna be easier.

**Mat Ryer:** How are they gonna look you up? \[laughs\] Just type "Johnny" and then spend half an hour guessing how to spell Boursiquot till Google gives you a clue... \[laughter\]

**Johnny Boursiquot:** Exactly.

**Mat Ryer:** Yeah. Natalie, you can't talk... Pistunovich - come on...

**Natalie Pistunovich:** No, that's why my handle is @nataliepis.

**Mat Ryer:** Yes, absolutely. There we go.

**Johnny Boursiquot:** That is easy. So here's a trick though... If you search "golang johnny", I should be at least on the first page.

**Mat Ryer:** You're Golang Johnny?

**Johnny Boursiquot:** I'm Golang Johnny. You didn't know?

**Mat Ryer:** That should just be your name.

**Johnny Boursiquot:** Literally, I'm like the first search result.

**Mat Ryer:** Oh, "Golang Johnny."

**Natalie Pistunovich:** It's worth mentioning that there's more than one way of spelling Johnny.

**Johnny Boursiquot:** Oh, maybe I should spell that one... J-O-H-N-N-Y.

**Mat Ryer:** Oh, Golang Johnny. I can't believe that you're Golang Johnny, mate. I'm starstruck. I can't believe it. \[laughter\] I feel like you should be in like a band in the '20s. It's amazing.

**Johnny Boursiquot:** Amazing.

**Mat Ryer:** Carlos, what's your Twitter name, while we're at it?

**Carlos Becker:** Mine is @caarlos0. It's very weird, but...

**Mat Ryer:** Yeah, yeah. If you get no followers, it's your own fault for having a really complicated user name.

**Natalie Pistunovich:** That's a template for your hacker name.

**Mat Ryer:** Yeah. Are you sure that wasn't your password?

**Carlos Becker:** Yeah...! \[laughter\] \[01:02:28.24\]

**Mat Ryer:** No, don't say it. Text it to me privately. Okay, thanks, everyone. See you next time.
