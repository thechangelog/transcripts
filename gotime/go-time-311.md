**Natalie Pistunovich:** My name is Natalie Pistunovich, and today I have a guest who's back on the show after three years, round about, straight from the COVID times, as a flashback to our last conversation... And we are here to talk about how with Go you can ship software, and not just ship code. Carlos, my guest, is a software developer who is based in Brazil, and he currently works at Charm, and maintains GoReleaser and other open source software. Carlos, how are you doing?

**Carlos Becker:** Hey, I'm doing good. Thank you. Thanks for having me again.

**Natalie Pistunovich:** Yeah, it's been a minute... What time is it for you now?

**Carlos Becker:** It is 5pm.

**Natalie Pistunovich:** Oh, okay. I was curious about our time difference. It's 9pm here in Berlin. So tell us a little bit about your background.

When did you start using Go? What did you do before that? What were the languages you were using, what were the tools you were using, what you're up to today?

**Carlos Becker:** I started as a teenager, teaching myself C... But then after some years I went to college and learned a lot of Java, and worked with Java for a long time. After a couple of years I started to work in operations, like DevOps, SRE, that kind of thing...

**Natalie Pistunovich:** After some years as a software developer.

**Carlos Becker:** Yeah, after some years as a software developer. And since most of the tools were written in Go, I decided to learn Go, so I could, I don't know, fix issues I'd found, or at least understand how things work. And that was like seven, eight years ago maybe. Yeah, I've been doing Go ever since, basically. I worked a couple of years as a DevOps SRE person, and now I'm working as a software engineer again, since a couple of years. So yeah, kind of weird career, but that's what I did so far.

**Natalie Pistunovich:** Cool. And when did you start doing open source?

**Carlos Becker:** Around college, too. At that time, it was the high ages... High ages? I don't know what the right word is, but it was like the time when that Twitter Bootstrap was very famous... And it was that time where there were a lot of component libraries for JSF, and JWT, and all those things... And I kind of ported Twitter Bootstrap to JWT, and that was my first open source project that has more than three stars, I think. It was 2012 maybe, maybe earlier. I don't remember exactly when, but around that time.

**Natalie Pistunovich:** And you're maintaining GoReleaser. This is the open source tool that takes most of your open source time.

**Carlos Becker:** Oh, yeah. Yeah. That one I created to just solve my own issues. I had another tool to manage Zsh plugins at the time, and I was tired of manually uploading binaries to releases... And first I wrote a shell script, and later I wanted to do more things, and eventually, I wrote GoReleaser... And I've been working on it for the past six to seven years, something like that. It's a lot of work, but it's very nice, I think.

**Natalie Pistunovich:** Yeah, yeah. So we're here to talk about how Go is a great choice for shipping everything as a bundle, not just code. What are some of Go's features that help that, and you like?

**Carlos Becker:** I think cross-compiling static binaries is one of the best features, because it simplifies build of binaries; you don't have to have the right version of GCC, or Mozilla, or anything else... And you can just ship the binary. There are some caveats; the resolving of DNS domains, and that kind of thing, but other than that, it works really well. It also simplifies packaging for Linux distributions. For example, you can just create a dev package with the binary, and that should work. So yeah, I think it's great. I don't know what your opinions are, but I like it.

**Natalie Pistunovich:** I'm sharing that there's a some conference talks I gave on this topic; one of them actually an hour... On why Go is a good choice. So I will join you for this \[unintelligible 00:05:19.14\] on why Go is a great choice. We're in agreement here, let's say; no devil's advocate, for sure. It has some other interesting features as well, that may be somewhat useful... For example the garbage collection making things efficient... What are your thoughts there?

**Carlos Becker:** \[00:05:42.06\] I really like that I usually don't have to think about any of that. In most cases, it just works, which I think is great. And still, if I think it's weird, for whatever reason, I can use pprof to get the profiling of CPU, and memory, and threads, and all that kind of thing, and try to understand what's going on. That for sure helps a lot. But yeah, I've worked a long time with Java. In Java you can customize how GC works, and there are different JVM implementations with different GC implementations, and everything is kind of - how can I say... It doesn't always work how you expect it to work, which is in my opinion not too good sometimes. If you really understand what you're doing, it probably does what you think it will... But sometimes you don't really know what you're doing, and those times you get --

**Natalie Pistunovich:** But it works on my machine.

**Carlos Becker:** Yeah... Yeah.

**Natalie Pistunovich:** Do you have some experience in multi-platform deployments that you can speak from? Or was it mostly kind of in a standardized one, in a repeating one?

**Carlos Becker:** You mean like different platforms CPU, architecture-wise, or...?

**Natalie Pistunovich:** Operating systems, yeah. Like, did you actually get to feel this benefit of the simple cross-compilation?

**Carlos Becker:** Oh, yeah. I had for a long time a cluster of k3s, a micro distribution of Kubernetes on my Raspberry Pi's at home... Because I like to suffer, I think. \[laughs\]

**Natalie Pistunovich:** What are you doing with it?

**Carlos Becker:** Running a lot of Prometheus exporters, and...

**Natalie Pistunovich:** Monitoring kind of your light at home, and so on?

**Carlos Becker:** Automation stuff, basically.

**Natalie Pistunovich:** So other than lights... I'm curious now - other than lights, what other house automation do you have? Air quality?

**Carlos Becker:** Air quality no. I do have automations to turn on the alarm system, to turn off the A/C when I leave the house, to open and close the garage doors... Actually, I had to write \[unintelligible 00:07:52.29\] to do that, and sodder some stuff. \[unintelligible 00:08:01.15\] Yeah, it was really fun. What do you have at home?

**Natalie Pistunovich:** Hue lamps. Lots of abstraction layers. It's just an app that controls things. I used to have an app that would monitor also the air quality, but also it was something that I just got off Amazon. Nothing that I made on my own. But maybe one day Tiny Go will be offering not just a Gopher badge, but also Gopher monitor.

**Carlos Becker:** Yeah, I think I did look at Tiny Go for Arduino. I don't remember why I didn't use it. But my firmware is actually -- I just send messages to \[unintelligible 00:08:42.10\] and there is another Go binary running on my Raspberry Pi's that listens to those messages, and sends messages back, and that stuff. So the firmware was small, because I don't want to have to unplug everything, and put it on my computer to update, and all that. But it works. It's open source, too.

**Natalie Pistunovich:** Yeah, for sure.

**Break:** \[00:09:08.16\]

**Natalie Pistunovich:** Go also has a single binary approach that you just compile it once, and you get one binary pair operating system and so on, and architecture... And it's different from how things were in the past. Like, did you have a chance of being a release engineer, where it was checklists and a bit less streamlined that you can tell about?

**Carlos Becker:** I did work in a company that I helped releasing Java software, but it wasn't multiple operating systems. It still had checklists, and Canary deployments, and all those things... But yeah, not a lot of experience with building desktop apps or that kind of thing.

**Natalie Pistunovich:** It's interesting to do that comparison of how a binary streamlines it, versus how -- for people who are maybe only experienced with Go, from recently, and are kind of curious to hear how was it in the past, or how is it with other options... So if there's anything fun fact you want to share about there, it can be interesting. Were the checklists from paper?

**Carlos Becker:** No, it wasn't, for sure. I think it was a GitHub issue template, or something. It was many years ago, I don't quite remember. But the checklist was like -- some of it was automated; I think like unit testing, and the canary I think until some point was automated, too... But I don't really remember too much; it was too many years ago.

**Natalie Pistunovich:** Memories you prefer to forget, I get that.

**Carlos Becker:** Yeah.

**Natalie Pistunovich:** The garbage collector made the cleaning. \[laughter\]

**Carlos Becker:** Yeah, it did clean it up.

**Natalie Pistunovich:** In your experience, how does Go's handling of dependencies contribute to software deployment stability and reliability?

**Carlos Becker:** I think a lot of people still don't quite know how go mods are supposed to work. I still see confusion, especially when using like private modules... And those things I don't think help too much. I also think that the dependency managers should somehow inform me that the dependency I'm using is using cgo, because sometimes you only find it out when you try to run it. Like, you've compiled the binary... Or when you try to compile to some operating system, the library doesn't support it; it would break. Or sometimes people implement some function for operating systems, but most of them, they just like panic unimplemented, or something like that. I saw those things, too. And then you only find out when they're running, which is kind of annoying. So yeah, this is one piece I would like to see some improvements.

**Natalie Pistunovich:** Do you have some tips from your experience you can share?

**Carlos Becker:** Tips for like finding out those things?

**Natalie Pistunovich:** And like best practices. Or like how do you do this with the modules ever since this was introduced, this change?

**Carlos Becker:** I think I use it as regular people use it, basically... The only thing I think I do and some people don't is that I kind of run go mod tidy very often. I like that it cleans everything up for me. But yeah...

**Natalie Pistunovich:** Do you have this after every commit or something running, the tidy?

**Carlos Becker:** In some projects, yes. In other projects, I run manually. Every time I change some dependency, I run go mod tidy. It's on my editor too, so it kind of does it for me sometimes. I don't know if people tend to run it all the time, but I do.

**Natalie Pistunovich:** There's an interesting poll... Not an unpopular opinion, but it will be interesting to also ask... So how often do you use that?

**Carlos Becker:** And what do you think about go mod tidy and go.mod in general? What are your opinions? I'm always curious about that.

**Natalie Pistunovich:** I mean, it's nice that you have everything organized in an automated and simple way. And I think one of the bigger benefits that it introduces is not actually in the context of DevOps, but in the context of security... Anyway, it's not the Go way to have too many imports, so you're already kind of -- it's easier to keep track, because you have less, but also, there you can see the dependencies, and the transitive dependencies... So if you and look at your go mod files for a little bit, it's good kind of that you have this extra information for free.

**Carlos Becker:** \[00:15:46.22\] Do you use the go.mod proxy feature constantly? It does it automatically if you run go install, and give it a tag, or something. I don't know if you know that, but for people listening that don't, the go.mod cache caches the hash of all your dependencies and everything, from that tag, on their server. So I saw people deleting the tag, and \[unintelligible 00:16:11.13\] again, and then try to run go install, and it breaks, because there are differences now, and they get really confused about that sometimes... Especially like people new to Go.

**Natalie Pistunovich:** Wait, why would somebody delete that?

**Carlos Becker:** Maybe they try to, I don't know, run something, and it fails, and then they delete -- like, run something automatically on the tech, on GitHub, for example... And then it fails, and they want to run it again; then they delete the tag and create it again.

**Natalie Pistunovich:** Is deleting a tag like a practice in some other place?

**Carlos Becker:** I don't recommend it, but people do it.

**Natalie Pistunovich:** Like, where's the idea coming from? Do they do this in another language, or in another technology?

**Carlos Becker:** No, I just get tissues about it sometimes because of GoReleaser.

**Natalie Pistunovich:** Interesting. Oh, okay. \[unintelligible 00:16:53.17\] True. So "I tried doing something I'm not supposed to, and it's not working. Can you fix that?" Interesting.

**Carlos Becker:** Yeah, pretty much. Also, people create the tag, and then figure something is -- like, some small thing is wrong; then they fix it, and recreate the tag, and try to publish the release again, and it fails, and it's weird... I don't know.

**Natalie Pistunovich:** Maybe it can be or unpopular opinion. "Don't delete tags."

**Carlos Becker:** Yeah, that can be my unpopular opinion.

**Natalie Pistunovich:** \[laughs\] Generally from the features that we covered now, the dependencies, the single binary, the cross-compilation, you were using all of that in some way in GoReleaser, or is this also a part of it that you're not really giving it any special attention?

**Carlos Becker:** On GoReleaser you can set it up to do the go.mod proxy stuff. And when GoReleaser runs against a tag with that enabled, it'll cache the dependencies in that etc. in the go.mod cache. And also, this single binary thing - it's the default configuration for GoReleaser. If you run GoReleaser, you need to create a GoReleaser.yaml, with cgo disabled \[unintelligible 00:18:13.24\] couple of platforms by default. I try to make it in a way that it just works. So that's what it does. So yeah, I kinda use it a lot, let's say.

**Natalie Pistunovich:** Do you have people who start using GoReleaser, and then say "Oh, I discovered those cool features"?

**Carlos Becker:** I don't remember any cases of people discovering new features, but I do remember cases of people finding out about some features about ldflags, and that kind of things.

**Natalie Pistunovich:** What are some advantages that Go is offering in the term of monitoring and maintenance of software after it shipped, from the DevOps perspective?

**Carlos Becker:** I think it's good that you have Prometheus libraries for everything... Tracing, profiling... You can profile in production, which is, I think, awesome. Yeah, I think those are the main things. You can derive everything else from there, I think. I don't know, what have you used in production, or have used any of that in production?

**Natalie Pistunovich:** I mean, all the tools that use monitoring, that the purpose of them is monitoring and maintenance are written in Go... So the benefit is that it's a fitting language. And I guess that consistency is also something that is useful, in the sense that it's going to be always -- no breaking changes and whatnot.

**Carlos Becker:** Yeah, that's a good one, too. You can totally get code from Go 1.2 and build it now, and it will still work, which is amazing.

**Natalie Pistunovich:** \[00:19:57.14\] Yeah, I have a whole agenda that I think Go is a great choice for AI - jumping a little bit for a second from DevOps... And yesterday, I was giving a training with O'Reilly on this topic, how to write software with AI. And somebody said, "I have a problem, that I noticed that ChatGPT sometimes returns .NET 6 and sometimes it returns .NET 8. How can you solve that?" And you can fix that, in some ways; I can think of some workarounds and some things you will put in place, but honestly, it just shows that this is not a good choice in the long-term. It's just not as compatible as Go. So kudos yet again to the Go team.

**Carlos Becker:** Yeah, that's a good point.

**Natalie Pistunovich:** Back-compatibility is really such a big advantage, in so many different things. Yeah, jumping back to the DevOps world... If we talk about infrastructure as code, and best practices there, how does Go play there? What are some benefits that it brings to this world of configuration management, and deployment where it's infrastructure as code, and so on?

**Carlos Becker:** Yeah, I think it can go in a couple of different ways. If you deploy containers, it's really easy to build an image from scratch with just the Go binary, and just run it. So that's cool. Small images with a single layer, that's awesome. If you still use things like Ansible, and those things - which is totally fine; I use them in my home lab - I usually build the dev packages with the binary, and just tell Ansible to download and install the dev package, and that's it. So I don't have to set up an interpreter, or anything. It just works, which is awesome, I think. I don't know what else people are doing.

I don't like a lot like how Ansible works. It's a lot of YAML, it's written what you can and what you can't do... Most of the other tools are like Ruby syntax, basically, like Chef and Puppet, I think is the other one. So yeah, I would really like some tool like that, with a statically-typed language that cannot complete and work properly... How do -- do you use like something like that, or how do you deploy your Go apps?

**Natalie Pistunovich:** As a person who is not employed at a specific company, but mostly doing freelance projects, I have less recent experience of setting up so much of that. So I'm talking from my experience in the past of doing that, when I was like an engineering manager, on an SRE team, and so on... But these days I'm teaching this at the university here, and I'm talking about back then. So I'm asking you, because I need to catch up as well. \[laughs\]

**Carlos Becker:** Yeah, I was not touching Kubernetes for a year or so, and I just started to mess with it again a couple of weeks ago, and it's kind of overwhelming. It's a lot of things to relearn. Things I know, but I didn't remember, like the syntax and all that... It's a lot of YAML \[unintelligible 00:23:23.09\]

**Natalie Pistunovich:** Yeah. How would you compare Go versus other languages in the context of infrastructure as code? Are there some scenarios where you can think Go is not the best choice for this?

**Carlos Becker:** I can talk from experience about Go versus Java, for example. In Java, depending on what frameworks you use, you either deploy a .jar file, and run it with Java directly, or you can deploy a .war file and put it like in JBoss, or Wildfire. I don't know what its name is these days, but it was JBoss at the time. Like, it works, but in needs a lot of things in place before you can actually deploy the application. You need to have the JBoss setup there, you need to have some configurations files set up there... And then you place the .war in the right place for it to work.

In Go you can just write the server and everything, and ship a single binary... So it's a lot simpler, I think. It's one step versus I don't know how many. It depends on the use case. But one step versus a lot of steps, usually. And I also deployed some Ruby apps in the past, and it's not so different, but -- it actually it is different. You ship the entire codebase to production, which is - I don't know, it can be good, it can be bad... But you need to have the right Ruby install, you need to make sure the dependencies are there... And then you need to start your server with something like \[unintelligible 00:25:00.25\] I don't really remember it, but yeah. Break start, I think.

**Break**: \[00:25:11.26\]

**Natalie Pistunovich:** So is there any scenario you can think that Go is not a good choice for this? Or you say from everything you experienced so far, Go is great for infrastructure as code?

**Carlos Becker:** I think in the infrastructure as code part I can't think of any bad scenario for it. You can argue that you can be more productive with Rails, for example, and I'm okay with that... But I think deploying it is easier. Although there is now like the 37signals people, they're pushing again for old-school deploying, just copying things to servers and running... And I mean, for most use cases, it works. We over-engineer a lot as an industry, I think.

**Natalie Pistunovich:** Looking ahead, do you think Go will take even a bigger part in DevOps practices? Or will it eventually hit some limit?

**Carlos Becker:** I don't know... I think the tendency is good, because there are already a lot of tools written in Go that we use daily for monitoring, deployments and all that... So I'll say that probably most people writing new operation tools today will probably choose Go, because there are already so many things in that field written in Go... But I don't know, maybe AI takes over eventually, and we don't have to think about it anymore. I don't know.

**Natalie Pistunovich:** Well, you will have to think of other things when that happens... \[laughs\] Speaking of AI - so DevOps has been around for a while, there was SRE, which is sort of softwary DevOps... And now MLOps is becoming a thing. What are your thoughts on MLPps? How do you feel this in relation to everything, how do you see Go's part there?

**Carlos Becker:** When you say MLOps you mean the continuous deployment of machine learning and that kind of thing?

**Natalie Pistunovich:** Of models and machine learning-based apps, pretty much, yeah. LLM Ops, AI Ops... It has several names, but I think MLOps is slowly taking the center...

**Carlos Becker:** Yeah, I did work in a project that had a little bit of that. We had a team of machine learning and big data engineers. I don't know what they were called. And they would write Python code to generate reports, or I don't know what was everything they were doing... And my team was responsible for automating, putting those models and everything in production. We ended up writing a Kubernetes operator in Go to deploy Python containers, basically. It did work really well, but I don't have much experience other than that. I don't know what other people do, and I don't know what will happen in the future either. It's evolving really fast, all those things, so...

**Natalie Pistunovich:** \[00:30:01.10\] Yeah, it is interesting to follow and seeing how that -- I see lots of parts of the checklist that Go checks for things you would need from an MLOps platform that you have in Go. And it's the same things that make it a good choice for like FinTech, and eCommerce, and so on; that it's high loads, and it's fast, and good parallelism and everything... I can imagine lots of platforms or lots of tools that are AI-based, serving AI models, and taking user input, sending it to the AI for whatever processing and returning that... All the ChatGPT-based stuff. This is really very similar to what Go is already doing, like Stripe, and so on. So I see MLOps slowly going into the world of Go's reign in the world of DevOps.

It was also interesting to see how Samir, who's leading the Go team, wrote one or two weeks ago a couple of articles on how he sees Go play a part in the AI being introduced to the world of software. Also saying some similar things, like acknowledging Python is there because it is the language people will keep developing models with, and so on. That is the data science language; this will probably not change. Go is there for many good reasons, but also Rust can have some parts where it's -- I don't know, where you need some more memory-focused things... It's still interesting to see what will be exactly the balance between them, but...

**Carlos Becker:** Yeah, I can say that probably Go is cheaper to run than Python... So it will be good to see more Go and less Python. My unpopular opinion. \[laughs\]

**Natalie Pistunovich:** Well, not in this audience.

**Carlos Becker:** Yeah.

**Natalie Pistunovich:** You mentioned briefly pprof. Are there any other lesser known features or tools in Go that are beneficial for DevOps that you can talk about? Also, if you can chat a little bit more about pprof.

**Carlos Becker:** I didn't use pprof a lot, so I don't know how much I can talk about it... It's just like used to understand some performance issues at some point in time, and generating flame graphs and all that, which is really helpful. And other things I like that are not well known... I really like the Testscript library. I don't know if you know it. You can use it to create -- it's extracted from the Go codebase. It's an internal package in the Go codebase, but there is a public version on GitHub, and you can use it to create an intermediary script language to integrally test your Go software.

**Natalie Pistunovich:** We'll add a link to that in the show notes for those who want to try it.

**Carlos Becker:** Yeah. It's really cool. At Charm we used it on soft serve recently, and it was really good to -- it helps testing a lot of the things that were hard to test otherwise.

**Natalie Pistunovich:** For example?

**Carlos Becker:** It's a Git server, so basically almost everything was kind of hard to test... It helped because it's basically an integration test. We really kind of run Soft-Serve, and we added some other helpers there to create users etc, etc. So the script to test a specific feature reads like something that it is easy to understand, actually; it's not like 1,000 lines of spaghetti code to set up everything, and then test something. It's just like a shell script, sort of. I really like that, and I don't know if a lot of people know it, but I'm telling everyone about it so they can try it out.

**Natalie Pistunovich:** Yeah. Cool. And some other interesting tools or features you're also using?

**Carlos Becker:** \[00:33:57.15\] I really like the race flag when building and testing to find race conditions. A good one that I'm using too is goleak from Uber, I think, to find leaky goroutines. It already saved me some bugs. What else...? I think those are like the most -- maybe not as well known ones. What are you using then, that we don't know about?

**Natalie Pistunovich:** I don't think I have any secret surprises. Last week we had an episode about the tracing tool that was quite interesting. I think it's not yet released, but we're talking with two of the maintainers of it, and that was kind of interesting to see their perspective of everything. Yeah, in my world of context tracing does not get a lot of attention, and it was fun to get an option to dive into that.

**Carlos Becker:** Yeah, it might be, because you will probably only use tracing when you really need it.

**Natalie Pistunovich:** Again, going back to that AI, serving models... \[laughter\] Shave off those microseconds from the ChatGPT response.

**Carlos Becker:** Yeah... It might be a while till you really need it, so... I think that's part of the reason. Same thing with profiling; most software -- it's hard to... It's not hard. What can I say...

**Natalie Pistunovich:** You need to be in a very advanced kind of stage to even need that.

**Carlos Becker:** Yeah, you need to be doing something very different, or something where you really need to shave microseconds off... And most companies, most software never get to that point.

**Natalie Pistunovich:** Yeah. So before we jump to the last question, which will also be a little bit about AI, can you give some summary or a checklist that covers the best practices when you ship a software? Like, make sure you ran enough go tidy, and at least ran it one last time", would be one example.

**Carlos Becker:** I can tell you what I do. So basically, I run go mod tidy without thinking about it too much; I always do that to make sure everything's cleaned up. GitHub Actions, run all the tests... I only tag after the tests passed. And pretty much GoReleaser takes care of the rest for me. I never delete tags, and I always use go mod proxy in the word mix; not always, but when it makes sense. Like some private projects - you can't really use it. But yeah. And I always try to -- it's not really a checklist of releasing, but a checklist of how to ship software in general, maybe... I always try to use the smallest possible base image for Docker images. I usually also ship like Linux packages, Debian, RPM, Alpine...

**Natalie Pistunovich:** Beside Docker images, do you use latest, or do you actually use tags?

**Carlos Becker:** I use tags, usually.

**Natalie Pistunovich:** That's another thing we can add to our checklist, right? Concrete tag, where you can --

**Carlos Becker:** Yeah, sometimes even with the checksum of the tag, too. I think it's a good practice security-wise, because you can override tags, but you can't override its checkum, so I think that's why people do that. Maybe even just using the tags might not be enough. People do that for GitHub Actions too, but instead of pinging to a version, they ping to the commit of that version, basically. So if people recreate the tags, you will still be using the previous version. Those are security concerns.

\[00:37:50.29\] Another good thing to do is sign something, at least the checksums of your artifacts. Maybe sign the Docker images, too, upload the SBOMs, because some people really like those... Yeah, I think that's what I try to do, at least. But most of it I set up one time, and GoReleaser takes care of it for me. Not that I'm trying to sell anything... It's all I do.

**Natalie Pistunovich:** It is open source.

**Carlos Becker:** It is, yeah.

**Natalie Pistunovich:** Yeah, so it sounds like the biggest part of the checklist is defer to GoReleaser and let the machines do the hard work.

**Carlos Becker:** Yeah, I mean, if you use some other language that doesn't use GoReleaser, you can -- GoReleaser doesn't support that, actually. It can do all that too, you just need to script it yourself. In my case, GoReleaser already scripts everything, so I just use it...

**Natalie Pistunovich:** What other languages are supported?

**Carlos Becker:** Right now just Go.

**Natalie Pistunovich:** Yeah, good choice. \[laughs\]

**Carlos Becker:** I started a long time ago to implement something to add other languages, but I never really got into it. You can import precompiled binaries through this. You can build outside with Rust, for example, and import the binaries, and GoReleaser will just push them to production, and all that... But I don't know if a lot of people use that. I added it as a feature.

**Natalie Pistunovich:** Well, I'm curious to see what will you be adding to the GoReleaser for AI, whatever that will mean...

**Carlos Becker:** Yeah, I don't know either. It's a surprise.

**Natalie Pistunovich:** Cool. Then, segueing to the fun part...

**Jingle:** \[00:39:35.13\]

**Natalie Pistunovich:** So the last question for this episode... What is your unpopular opinion, and is this related to AI? \[laughter\]

**Carlos Becker:** It's not related to AI, but I think a good unpopular opinion I have is that people should probably learn more shell script, because you can go a long way with shell script. Sometimes we over-engineer things, we create an entire software team for things that can be easily automated with shell scripts, basically.

**Natalie Pistunovich:** When you say "need to learn", can ChatGPT do it for them?

**Carlos Becker:** Yeah, you can do it.

**Natalie Pistunovich:** Shell scripts --

**Carlos Becker:** I've never tried to generate shell scripts from ChatGPT, so I won't assure quality of any of that, but... Yeah, Bash has its gotchas, and I think people give up on it before learning it properly. So maybe that's my unpopular opinion. We should all study more Bash scripting.

**Natalie Pistunovich:** I actually have a deja vu... I think this was an unpopular opinion at some point. There is a chance I said something similar. So we're again taking the same side. That's a very, very consistent show; we're very much on the same page.

**Carlos Becker:** Cool.

**Natalie Pistunovich:** I've been trying to find an unpopular opinion, and I think it's not necessarily unpopular, but it's worth mentioning still... Prompt engineering is not something you should learn from YouTube influencers, and take one master prompt that always works... But actually, it's good to compare that to how to write a good email. You can use some templates to generally understand how that works, but this has to be personalized. You cannot take "Here's one email that I send, and it always works for all my use cases." Same way when I see people ask questions about "But this is the master prompt. A person who is a prompt engineer told me to use this." To my ears it's like saying "Email engineer." \[laughter\] It's all about communication.

So to summarize this so that this can actually be tweetable, "Prompt engineering should be learned as a skill, and not as a set of templates to just follow." Yeah, that will be it. Let's see how unpopular that is. But until then, I want to say, Carlos, thank you so much for joining. This was a fun episode. I enjoyed talking about Go, and hearing more about GoReleaser... And all the cool things we have mentioned will be in the show notes. Thanks, Carlos, and thanks, everyone.

**Carlos Becker:** Thank you.
