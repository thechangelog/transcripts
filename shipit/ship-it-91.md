**Justin Garrison:** Hello, and welcome to the Ship It show. I am your host, Justin Garrison, and with me is Autumn Nash.

**Autumn Nash:** Hi, guys.

**Justin Garrison:** Thank you so much for subscribing. This is the first episode back after Gerhard was running the show, and he did a great job for 90 episodes. And last year, when the show went on a hiatus, I was a subscriber, and I was very sad to see it go. And so I emailed the Changelog folks and I said "Hey, is there any chance that I could help out with the show?" Because I love talking about software, and everything that happens to software after you get committed, basically. Whenever code turns into software, is the thing that I'm really interested in, and running systems is a big part of my career and all of my interests. So they thankfully said "Let's talk about it", and here we are. So Autumn, thank you so much for joining me.

**Autumn Nash:** Yeah, I'm really excited to be here and to be on the podcast with you.

**Justin Garrison:** We usually will start the show with hopefully a couple links or things that we've found interesting for the week, but for today, because this is episode 91, the first one that you're hearing our voices, we just wanted to give you a little background on us, because we probably don't know you and you don't know us... So wanted to just go over a little bit before we jump into our interviews.

So like I said, I am Justin, I have been an infrastructure engineer and developer and sysadmin for quite a while now. I started my career in the helpdesk at a university, worked up to a sysadmin role, I did like VDI environments, I worked at Disney for six years working on animated feature films and Disney Plus, and worked on Amazon on EKS for quite a few years. So now I'm at a company called Sidero, and I just enjoy the infrastructure space... Oh, I also authored Cloud-native Infrastructure a few years back with a good friend. And so I've been doing this for a little while; I'm very much involved in open source communities and enjoy talking to people that are working in their industries, on running software, SREs, DevOps, platform engineers... All those job titles are just people I love meeting at conferences and seeing what they're doing. Autumn, how about you?

**Autumn Nash:** I'm Autumn Nash, I am a software engineer. I've worked in big tech for about four years. Before being a software engineer I was a solutions architect, a specialist database solutions architect, and I did SQL. And before that, for years, I taught coding with Milspouse Coders. It's a nonprofit organization that empowers military spouses with code and teaches women how to get into tech. I'm on the hackathon committee, and I've now for the last couple years been the education board chair. So I teach coding, I like to speak about coding, give talks... And I think that's all.

**Justin Garrison:** That's all. That's still quite a bit...

**Autumn Nash:** Oh, and I do lots of mentoring with rewriting the code, Milspouse Coders, and a few other people.

**Justin Garrison:** And when we were talking about bringing the show back, Autumn, one of the main reasons I wanted to have you as my co-host for the show was because your background and interests are so much different than mine. And I love having someone that can argue their points, and have valid points and push back on anything that I'm like "Oh, well, just do this." I know very little about databases, and I know very little about SQL databases. I've used them for various things, but I am no expert, and having you on the show - I think it's going to just allow us to not only talk to more people more in depth about some of the topics, but also just give a variety of backgrounds, and things you've worked on, and companies you've worked with, and programs you've built are just very different than the things I've done.

**Autumn Nash:** Do you use a lot of Java in system engineering?

**Justin Garrison:** I have never written a single line of Java in my life.

**Autumn Nash:** Oh, Java is my jam. \[laughs\]

**Justin Garrison:** That is exactly another reason that I'm excited for this, because that's just something -- I wrote some Scala for some example code, which is like the closest I got... And I actually did some Kotlin for a little bit, but I don't jump into the JVM very often. I have fine-tuned the JVM and run Tomcat apps from back in the day... But it's not something that I've written myself. I tend to stay in the like systems, Python and Go area.

**Autumn Nash:** That's exciting, because I feel like I'm definitely down to learn a ton more systems from you. I do love Python though, so we can totally agree on that... \[laughter\]

**Justin Garrison:** And for this show format, we like to bring just some interesting -- some things that we've been learning or doing over the past week. This will be a weekly show, again, but we also want to bring in guests from various industries and technologies and systems to talk about what it's like to run software at different scales, small and big, in clouds and on prem, in a variety of different use cases. And so today's show we have Jason Hall, who is from Chainguard. And Chainguard is a security company, but they also build a lot of container images. And I've known Jason from the container and Kubernetes space, and when he reached out about building containers, I wanted to dive a lot deeper into that. So we can jump into the interview with Jason, and we will see you afterwards for a few extra things to close out the show.

**Break:** \[00:05:51.25\]

**Justin Garrison:** Today on the show we have Jason Hall, a principal engineer at Chainguard. Welcome to the show, Jason.

**Jason Hall:** Hey, good to be here.

**Justin Garrison:** So for those people who probably maybe have never heard of Chainguard, which is - I mean, for myself in the container space, that'd be surprising. But give us an overview of what Chainguard is and what you do.

**Jason Hall:** Chainguard produces container images that are hardened and minimal and up to date as much as possible. That includes like development time images, like a Go image, a Python, a JDK image, runtime images to run your app on top of. We have a very small static image for Go binaries, but also Java JRE, and Python, and a bunch of stuff like that... And we build images for -- sort of application images for cert manager, for Postgres, for Kafka, for Zookeeper, and a million other things. The value we provide is we keep them up to date to get rid of CVE fixes. We actually try to get fixes even faster than upstream, and then make them as small as possible, so that there's nothing in there that you don't need to get away from even more CVEs.

We have a number of public latest images available for everything we build, basically everything we build... And then customers can get an SLA on CVE fixes, every version tag we provide, and FIPS variants for like certain regulated industries, government applications, things like that. So yeah, we try to make hardened minimal container images at scale, as quickly and as well as possible.

**Autumn Nash:** I have so many questions... What's your release process? Because it's gotta be hard to release that many architectures, and like different images... But how do you release them before upstream? Because how do you go through all the testing and then know upstream is going to take them?

**Jason Hall:** There's a lot of questions in there, which I'm happy to answer.

**Autumn Nash:** I have so many more. I'm holding them back. \[laughs\]

**Jason Hall:** Wonderful. Excellent. Excellent. You mentioned architectures - we only build for ARM and x86 right now...

**Justin Garrison:** Only? Come on...

**Jason Hall:** Only. Only 99% of the use cases. As for our release schedule, we have a scheduled build every - I think it's two hours. But also during the workday, we also just push every change from main. So as someone is doing fixes to the image, it's also rolling out those config changes.

You mentioned testing... There's a ton of - well, there's a ton of interesting stuff about testing. We don't do, I think, enough testing. I don't want to make it sound like they're untested images, but the testing bar is very high, I think, and we can always improve there.

The testing we do on the images as they go out the door is actually part of a really cool thing we do. We build everything with TerraForm, we configure all the images with TerraForm, and one of the nice things that gives us is TerraForm is also usable to spin up and deploy resources, cloud resources \[unintelligible 00:12:01.21\] K3s clusters locally, and interact with them, and deploy Helm charts, and things like that. So we will build an image, let's say for cert manager, and before we tag it, we'll send it to a Helm release for that image, make sure that it works, run a script against it, do some sort of basic smoke testing on it... And then only after those tests pass will we tag it as Latest and release it out into the world.

**Autumn Nash:** So are you only patching for CVEs of like the actual container, or of like languages, containers, security bugs, all of above?

**Jason Hall:** Yeah. Our patching story is another huge gigantic set of infrastructure. Unlike most image build processes, we separate package builds from image builds. The image builds just take packages and put them into an image. Think like Docker file, apt install, foo bar baz, things like that. Our image build process can only do that. It can only put packages into an image, and set metadata like users, and what paths should exist, and things like that.

The packages then is the actually interesting part. How we build these upstream source repos into packages is using a tool called \[unintelligible 00:13:15.25\] which takes upstream source, fetches it, runs a build step... And because we are responsible for building those packages ourselves, we can also inject patches into them at that time. So we'll do things like - let's say it's a Go application, has a dependency on some vulnerable upstream project of it... Then we can actually inject a patch to say go get update that dependency to the fixed version before the upstream apply that patch and do their own release. So generally, this is considered safe. I mean, I think Go is really good before that, for minor changes like that. We do have, again, a set of smoke tests that we run before that package is considered.

**Autumn Nash:** So when you say upstream, are you talking about let's say Rust, or OpenJDK, or one of -- I don't know; are you talking about like languages upstream, or like container upstream, or \[unintelligible 00:14:08.02\] upstream?

**Jason Hall:** \[00:14:09.05\] The upstream projects. Rust is one of the packages that we build and put into a package and then put into an image. But everything also -- like I said, cert manager, and Postgres, and Kafka, and we have a Go image, and a JRE image, a Python image... All those projects are the upstream. So because we build from source, we're able to also apply a patch or do a dependency upgrade before the upstream open source project is able to update that, and then do a release... So we get those CVE fixes out even faster in a lot of cases then.

**Justin Garrison:** Are you also part of like CVE reporting process for any projects? Because I know a lot of the maintainers will get "Here's the report. I'm gonna announce this publicly in two weeks. You can have time to fix it and patch things", and then all these mysterious releases happen in the next two weeks... But I'm assuming you're still outside of that process, right? You're not inside of any of the languages and CVEs as they come in.

**Jason Hall:** Yeah, exactly. A number of open source projects, really high profile, broadly used ones, have embargo processes for things like that. We're not a part of any of those embargo processes currently; we'd love to be. But the sort of interesting thing about that is even though we are only working on the public information about these releases, we're usually able to get that release into the package, and into an image, and into the users' hands before the people that are part of the embargo are able to. So those embargoes exist because, traditionally, the software takes two or three weeks to get through their system. So you better get two or three weeks' worth of forewarning. Well, if it takes three hours to get through the system, we can just wait until it's public, take the release, put it in, ship it out the door.

That being said, if we were part of any of these embargoes, we would be able to get it the second it was unembargoed, and we'd be able to publish that image. But yeah, it is always interesting to see the -- usually, it starts with there will be a security release on Tuesday. No more information. And then you start, and on Tuesday at noon you'll see "Oh, three PRs were opened and merged within five seconds, and then a release was cut. Interesting."

**Justin Garrison:** There's so many directions we could go right now with this conversation... The reason I wanted to initially have you on the show was when you were talking about the container build process... Because everyone that is familiar with container builds is like "Here's a bunch of Docker files, and we manage Docker files in various ways." And you were telling me that all of your container builds are TerraForm-based. And that was interesting to me, as in how are you managing, why did you pick TerraForm, and what benefits do you get from removing Docker files? I'm assuming TerraForm is still calling Docker, or packaging something... But I could be absolutely wrong there.

**Jason Hall:** Our journey to TerraForm didn't actually start off as a journey to TerraForm. We set out wanting to build these really hard and really minimal, really good images, and at first, when we started, we didn't have hundreds of them. We have hundreds today. We have five or six JDK, JRE, Python, things like that. We've built a tool for this called apko. Sometimes it's called apko. There's no official pronunciation of it. But apko does not use Docker to build images. Because all it's doing is taking existing packages and putting them in an image. At the very core, these packages are tar files, gzipped tar files, and all in images is gzipped tar files. So you really don't need to invoke a container to move them from one to the other. You can just untar, retar, HTTP push to the registry.

So that's what apko does. And that worked for a while. We can build a very minimal, good Python image, a very good, minimal Go image. And then we started to get more and more of them. We were at that time releasing on GitHub Actions. We had a big, gigantic sharded GitHub Actions release that would do all of these; invoke the apko CLI to build each of these... And I don't know how broadly this is known, but GitHub Actions has a shard limit of 256. So once you create a shard matrix of 257, the whole thing just breaks.

\[00:18:11.15\] We've found that out, I think, when we were about at 220 images... And so we had not much time to figure out how to get around this. Of course, we had terrible ideas about how we could shard the shards, and sort of lean into the terrible situation we built for ourselves...

**Justin Garrison:** Let's make an org just for this, and then we'll splinter more orgs in more repos. Like, "Hm, wait a minute..." \[laughs\]

**Jason Hall:** Believe me, we had every bad idea that's possible to have. But it was sort of around that time that we kind of looked around and thought "We don't like this. We don't want to double down on this world." Because of some other projects that some of us had been involved in, we had built a TerraForm provider for other container build tooling, sort of on a whim, on a weekend. We'd throw together a TerraForm provider for this. And we really liked it, actually, and we use it to this day.

So we had some experience building TerraForm providers, and we thought "TerraForm is pretty good at declaratively sort of mapping out the change you want to make, and then show you that plan, and then it can apply it, and that apply is entirely orchestrated by TerraForm." Like, you just say "I want --" Traditionally, you say "I want 500 VMs, and six Kubernetes clusters, and two load balancers, and whatever. TerraForm, make it go", and it does it. Well, if we write a provider for apko, it's not terribly hard to say "Build 500 images with these packages, show me the plan, and go." So that's what we did. We built a TerraForm provider, and freed ourselves from the shard limit of GitHub Actions. We have since had to reshard, because we're building too many things on those forerunners... But we're at least out of the business of having to fight GitHub's 256 matrix shard limit.

**Autumn Nash:** You said you built two architectures. Are you building all the latest versions of each language in different architectures? JDK, Rust, Python - are you building all of the available versions of each?

**Jason Hall:** We mainly only build what is supported upstream. So something like Rust is only -- I think Rust only has one latest... Don't quote me on this - it only supports officially the latest version. Go supports the last two, Python supports the last three, I think maybe four. So we build currently each of those supported versions upstream, and then as the old versions sort of fall off the tail, we pick up the new one and drop the old one. But yeah, we build every supported version for both architectures. Currently, there's two. That's the sort of set of packages we have, and then the image build infrastructure puts together all the packages for all the architectures we support, and pushes them off to the registry.

**Autumn Nash:** That's amazing. It's really hard to build different versions, and different packages... I don't think people realize how hard it is to build different architectures, and to keep it all going, and test passing...

**Jason Hall:** Yeah.

**Justin Garrison:** Especially as quickly as they're coming out, with that many images, right? Because I could do it with one or two, and then I'm like "Oh, now I want to do 10. Okay, well, what other decisions I have to make?" Did you find anything surprising with your move to a TerraForm provider? Because Docker is known for having this DAG that they create. The Directed Acyclic Graph is like "Hey, that's what Docker does." But also, that's what TerraForm does. And they just do them for different resources. Do you care about any of that? Or is it because you're doing something a little more simplistic of untar source, do a little bit tar source, and not going through like a multistage build process? Were there any surprises that you've found when moving to TerraForm?

**Jason Hall:** Hundreds of surprises. \[laughter\] So you're totally right, Docker builds execute a directed acyclic graph of steps. If you have multistage builds, many parts of those can run in parallel, and then only sort of join at the end. This all goes back to the philosophical change we made right up front, to say "Package builds are different than image builds." Package builds build source into like a contained - think of like a DEB... We use APK from the Alpine ecosystem, but think like a DEB, or RPM, or something like that. They're all just different sort of formats of tar... But source to an APK is one step. And then taking those packages and putting the right packages into an image, and pushing it to the registry is the other side. By splitting that, we get a lot of benefits.

\[00:22:17.20\] The second step can be really dumb, and really fast, because it's only doing tar and HTTP. We've since made it more complicated, but at its core, it's basically just doing tar, make an image, push it. And the package side is relatively linear. There's not a lot you can do to parallelize it or to make it into a DAG that you can execute concurrently. It's mainly fetch the source...

**Justin Garrison:** Write files to disk, read files to disk, write files to disk, right?

**Jason Hall:** Yeah, you kind of -- I mean, that's perhaps an oversimplification, but for the most part, there's not a lot you can do besides just throw more resources at this linear build. That's not the case with a bunch of image builds, which are just fetching tars, doing stuff and pushing those tar files back up to the registry. That's very parallelizable. If you aren't pulling and pushing as fast as you can, you're doing it wrong. You should be able to do that as fast as you can.

So that's where TerraForm really helps with its DAG, is we can -- we're not building sort of a bunch of Docker builds concurrently, which each execute their own DAG. We're executing a bunch of DBKO builds concurrently, which are unrelated from each other, and can really be super-parallelizable.

You asked about other surprises along the way... And I should mention, the testing story of these images also complicates things. So we build an image, we push it to the registry by digest; it's not discoverable, no one should be able to use it yet. Then we run tests on it. We put it in a real cluster, we run some smoke tests on it... Can I create this resource? Can I send a SQL period to Postgres? Can I make a Java build? And only after that passes do we tag it as Latest, or with whatever version.

What gets complicated is if you're doing this massively parallel image build, you're potentially spamming one cluster with just a ton of the entire cloud-native ecosystem landscape installed on one little tiny cluster locally, and that thing grinds to a halt. So a lot of the work we're doing lately has been to isolate these tests from each other, spin up a K3s cluster, install cert manager on it, run a test, and when it passes, tear down the cluster. Spin up another one with Crossplane, spin up another one with Calico, spin up another one with whatever.

So they each get their own little tenant, and don't have to, first of all, vie for resources, but also there's a lot of WebHook validation, that breaks something else being installed. Two copies of cert manager don't like to be installed at the same time. So that was a big surprise for us when we started running stuff as parallely as possible. A lot of things don't like to run in parallel when it comes to testing.

**Justin Garrison:** When Helm version two came out I once ran a for loop on every Helm package that was available, and installed it in my Kubernetes cluster just to see what would happen. Yeah, there's so many things that are like "No this, we can't install with that other thing."

**Autumn Nash:** I love that you did that on purpose... \[laughs\]

**Justin Garrison:** Totally. It was fun.

**Jason Hall:** Did you have a fan for all the smoke coming out of?

**Justin Garrison:** It was in GKE, it wasn't my fan. \[laughs\] I just threw it out there.

**Jason Hall:** So in some data center, yeah.

**Autumn Nash:** Like, "We're breaking somebody's stuff." He's like "It's not mine though, so it's cool."

**Justin Garrison:** Yeah, I wanted to see where it breaks. And that's the interesting -- like you were just pointing out, when you put all of this stuff together, you find where the boundaries are for how they're supposed to work. And you're like "Actually, these two things should never be installed together, and now we have to put logic somewhere, either early in the packaging pipeline, where we have other logic, or later in the testing", to say like "Oh, now it's gonna take longer, because we have to make 18 different clusters to verify these things." And yeah, you have to just shift where that logic is based on those boundaries of other pieces of software.

**Jason Hall:** Yeah.

**Autumn Nash:** And sometimes that's honestly the only way you're gonna find out, is when you do it.

**Jason Hall:** \[00:26:02.01\] Exactly. I don't think we would have done this if we knew it was this hard... But I'm glad we're doing it this way, because... What's that saying? We don't do it because it's easy, we do it because we thought it would be easy.

**Autumn Nash:** Yeah. Isn't that like software in general, though? It's always like "This is gonna be so easy. It's gonna be like three lines." And then like six hours later, you're like reassessing your life decisions... \[laughs\]

**Justin Garrison:** If you weren't naive going into it, you would have not gotten into it. It's just like "Hey, I got this." Simplify everything down to like the pieces you know, and then you're just like "Oh, actually, this is really hard, and I see why no one's done it before."

**Jason Hall:** Yeah.

**Justin Garrison:** The TerraForm module that you wrote - because you have this apko binary, which basically is doing... At the end of the day, a TerraForm module executes some code. Is the TerraForm module under all the covers a shell script that executes apko to do the thing?

**Jason Hall:** No. So TerraForm providers are written in Go, luckily. We're a pretty Go-centric place. Apko is written in Go, and TerraForm providers are written in Go... So we basically refactored the important bits out of the CLI into libraries that we could call from TerraForm. That being said, there's also - among the TerraForm providers we have is one that runs shell scripts. All it does is take an image and say "Can I run whatever \[unintelligible 00:27:17.19\] version on this image?" So we do at the end of the day run a bunch of shell scripts, but for the most part for building the image, or completely for building the image, and most of the time for standing up a Helm release we use the Helm provider for that.

**Autumn Nash:** Is that why you picked TerraForm, because you're a Go shop? Why TerraForm, compared to its competitors?

**Jason Hall:** Yeah, that's a good question. We have in our past a lot of Bazel experience, for better or worse. Generally, I like what Bazel is doing. I think it's a good idea.

**Autumn Nash:** What is Bazel? I don't think I've ever use that.

**Jason Hall:** Bazel is a distributed build tool from -- sort of forked out of an internal tool at Google called Blaze. But Bazel is very much DAG-based. You create modules, and they link to each other, and depend on each other, and then it says "Okay, I have this graph of stuff to do. I will do it as fast as I can, as concurrently as possible."

We have some experience with Bazel, with writing Bazel rules, with things like that. Bazel is kind of - the extension model is "Run this script", most of the time. The plugin model is "Tell me what Bash script to run." And so we didn't, for a lot of reasons, end up going with Bazel. TerraForm seemed really good. We were also using TerraForm to stand up all of our infrastructure, like you traditionally do with TerraForm. So we had a bit of experience with it. And really, a really nice thing that came out of it is being able to use the TerraForm infrastructure release code and providers with the image build provider. So you can build an image, run it, run a test, and then tag it, end-to-end, without having to sort of context-switch from "Am I in build mode? Am I in test mode? Am I in whatever mode?" To TerraForm, it's just executing stuff. And it might be anything.

**Autumn Nash:** I feel like releases are hard, so anything you can do to simplify them, and stop having -- like, not stop having, but to prevent as much human error or manual intervention, the safer your release usually is.

**Jason Hall:** Yeah. And TerraForm is really -- I mean, it's built for making infrastructure releases as safe and observable as possible. So it really was a good fit for also tying into our image builds.

**Justin Garrison:** Yeah, the more information you can collapse into a single DAG, the better. Because the more you put in TerraForm, the more it knows about other steps, and the better decisions it can make about the ordering of those steps. And once you get to a Bash script or a Jenkins file that calls a make command that executes a Bash script, you're just like "Oh, now I need to figure out how to get this back into the Jenkins file", and you're just like "Ah, this was a bad idea."

**Jason Hall:** Yeah. If you're only going through three different languages to do that, you're doing it right. It's really a Jenkins file, to a makefile, to a Bash script, to a makefile, to a Bash script.

**Justin Garrison:** Circular. \[laughs\] Yup, for sure.

**Autumn Nash:** \[00:30:00.18\] I know that life. \[laughter\] So when you say hardening, what do you do to harden your images that other processes don't have? And then when you tell us what you do to harden it, how did you come up with the process to harden these images?

**Jason Hall:** Hardening means a couple of things. I think the main thing we do is make them as minimal as possible. Most images out there - the Docker Hub Python image is based on Debian, which is a very stable, solid base to work on... But because it takes the Debian base image and then puts Python in it and says "Here's your image", it includes all of Debian, and it includes everything that comes in a standard Debian install, and everything that's needed to install Python. It's a lot bigger than it needs to be just to run "Python, hey, run this script." So a lot of the hardening we do is just cutting out that stuff.

This is another place where building images from discrete packages only is a really beneficial thing, because all of the stuff it took to build Python doesn't matter. We just take the pipeline that was built and put it in an image. Sort of like multistage builds on steroids. What it takes to build a Java application is not what you need to run it, so we hide all the stuff that it takes to build JDK or JRE, we put that in the package build process, and what comes out of it is just the bare minimum needed to run these applications.

**Autumn Nash:** The video game Nerd in me is "This is like containers with \[unintelligible 00:31:23.21\] \[laughs\]

**Jason Hall:** Yeah, yeah. Well, we had to sort of like go back to square one and really think "What are we trying to do here? What is it at the end of the day that we're trying to build? It's tar file systems to build stuff on top of." We don't need to run inside of a Docker file. You can actually just build tar files and put them in the right format, and push them, and that's an

image.

**Autumn Nash:** That's a cool part, of hearing people's motivation for things, because it's amazing how innovation comes out of like needing to do something, or needing to make something smaller, or bigger, or better... And then you're like "Wait, this solves other problems, that I didn't know we were gonna solve in the process", you know?

**Jason Hall:** Yeah. A lot of it, especially early on, before we ever started Chainguard, was a lot of us worked on the teams that built these images. So we had to wrangle Docker files daily, and understand changes to them... And Docker files are great, and the ecosystem wouldn't exist if they didn't come around, but there's a lot of complexity to them, if you let there be.

**Autumn Nash:** I've said a lot of bad words at Docker before... \[laughter\]

**Jason Hall:** Nothing I'm allowed to say while recorded, unfortunately.

**Autumn Nash:** Yeah, no... \[laughter\]

**Justin Garrison:** During your minification process, did that change expectations from users of the images downstream? Because the more I got used to Python including Debian in it, the more I just kind of abused that, and said "Oh, actually I can just call this Bash script, because I know it's going to be there." And literally, today, as my second week at my new job, and I just submitted a PR to remove five Bash scripts that weren't being used." I was like "There's no Bash on this system. We should just take those out." Are you actively pulling things out of the system, to say like "Hey, you don't need this", and then a user downstream is gonna be like "Actually, I was using that. Please put it back"?

**Jason Hall:** There's an XKCD comic about "Oh, I removed this hot for loop in the middle of the thing", or whatever, and someone files an issue that was like "That's how I warmed my tea. I ran this script, and then I put my tea on the keyboard, and that's how it heated up. Why did you remove that feature?" Absolutely. Exactly like you're saying; people don't know what it is in the base image that they depend on, really. I mean, at a certain organizational level it's impossible to tell what it is in that image you actually need, versus what happens to be -- things just work because Bash happens to be in that image.

One solution to that is we have a dev variant of basically every image we produce. So there's a Python image that does not include Bash, and then there's a Python image that does include Bash, and the APK tool to install more packages if you need to. So you can use that dev image as a base image in your Docker file, and APK add any other thing you need, and then that's your new base, and you can go from there. I don't recommend that in general, because you're sort of not fixing the problem, you're just fixing the symptom.

\[00:34:10.10\] If your Python script has a load bearing batch dependency, reassess why that is. Is this really something necessary? A lot of times you find out when you get down to it that it's something stupid, like it needs to shell out to date to get the current date. Like, "Well, just don't." You don't actually need Bash; Python is perfectly capable of telling you what date it is.

**Autumn Nash:** Yeah, there's a whole library for that... \[laughs\]

**Jason Hall:** Yeah, and I don't think it works by shelling out to Bash.

**Justin Garrison:** I don't know... \[laughs\]

**Jason Hall:** As I said it, I was like "Oh, I really hope it doesn't."

**Autumn Nash:** I've been riding the struggle bus with Python the last couple days, and I'm pretty sure you can do it just with regular Python... So I think you're right.

**Jason Hall:** Yeah. A lot of it is -- and we do get reports from users and customers about why doesn't the Python image include some tool that I needed, and a lot of it is either we provide the dev image as an escape hatch for you, but also just education about "Oh, look in and see why you actually need that. Oh, you don't actually need it? Great, we're all better off." You improved your software to be more reliable and more dependency-free.

**Autumn Nash:** It's amazing what can go wrong with the dependencies. I was reading an automation script the other day; my senior engineer was like "Take as many dependencies out", and then you start looking at what you can do and what can go wrong, having more dependencies, and it really changes the way you think when you're doing the design.

**Jason Hall:** Yeah. And it has a huge impact on the number of vulnerabilities that scanners pick up in your image, right? If your Debian base image has 50 tools in it, and Python, but you only need Python, then CVE scanners are going to pick up issues in all of those other things, right? You don't actually need it, and there is a cost of having it. There's a cost to your scanner results, and you're accounting for those things.

**Autumn Nash:** Yeah. And it just puts your software at more risk, too. So...

**Jason Hall:** Yeah.

**Justin Garrison:** The last question I really had was around why APK? Like, I've written spec files for RPMs, and DEB packages... I've never written one for Alpine, for APKs. Why did you decide to choose that as your ultimate packaging format before you build those containers?

**Jason Hall:** That's a good question. I think mainly it was we had some folks on the team that were very involved in Alpine, and knew that format, and that's kind of just what we ended up with, because that was the first thing we tried... It seems to work out so far, so I don't think we're in any rush to move it.

The Alpine community has a lot of the same sort of ideals as we do. They try to be as minimal as possible, they try not to make it easy to accidentally depend on too much... And I think the APK format is good for making really small packages that have dependencies on each other. I don't know enough personally to say that DEBs or RPMs, or anything else have better or worse -- I don't know the differences. But yeah, I'd say basically we chose APK because we had some familiarity with it, and then we've gone from there.

**Justin Garrison:** I mean, DEBs and RPMs were created at a different time, when things were a little more complex that -- all the complexity was put in the package manager, to build not only the dependencies, but also like mocking systems for how are we building this in a clean environment, right? You had VMs, and clean directories and whatnot, to say "Hey, we need to build this." And I feel like - again, I've never written APK before, but I feel like that is much more of a container-centric, like "Hey, we already have this thing that exists, that envelops a thing, and we can untar and tar it, and the container is the eventual place to run it." So I don't know uses for Alpine much beyond container environments.

**Jason Hall:** \[00:37:37.01\] Yeah. As an example of that, APKs have the ability to run scripts when they're installed, right? A lot of package managers do. When you apt install foo, it can actually run another script and do something else, because it needs to set up a user, it needs to set up a directory, it needs all kinds of those things. APK has that ability too, but apko doesn't use it. So if the APK describes some script to run after startup, the image we build with that APK won't run that script; in the APK layer there's no arbitrary script execution. So that encourages us to put everything we need encoded in the APK's file system, instead of in who knows what in the trigger that runs after that package is installed. That's absolutely an artifact of that we are building for the container ecosystem of 2024, and not the mainframe ecosystem of 1985.

Computers have changed a lot. We have very -- we prefer immutable infrastructure, we prefer... Nobody's exacting into Docker containers and doing upgrades on these packages. We just nuke the whole thing and restart it, possibly in a new node.

**Justin Garrison:** Are you sure? \[laughs\]

**Jason Hall:** Well, hopefully not. We would prefer them not to.

**Justin Garrison:** It's very aspirational of you, and...

**Jason Hall:** No one's doing that, surely...

**Justin Garrison:** ...I applaud your efforts. \[laughter\]

**Autumn Nash:** Tomorrow someone does it...

**Justin Garrison:** I don't want to go into this, we don't have time, but that's the whole -- there were definitely systems that encouraged that behavior, that said "You have a container, you run it out there. We create a new init system for you, and we will upgrade this on demand, and you never have to restart it." And like, actually, no; that's just a weird uptime thing that we wanted to have on hardware, and we don't want that anymore.

**Autumn Nash:** It's amazing how technology goes in these cycles, and then they're like "Everyone should do this." And then they're like "Never mind, don't do it. Horrible idea. Our bad."

**Jason Hall:** That's just experience. People try something, find out it's terrible, try something else, find out that's terrible...

**Justin Garrison:** And being naive about why it's terrible. That's how you get good and bad from it.

**Autumn Nash:** I think that's the science of computer science. You have to try things, break it, do some stuff... And then you're like "Oh, that was horrible. Let's never do that again."

**Jason Hall:** Yeah. As long as you're learning. It's okay to break things as long as you're learning along the way.

**Autumn Nash:** Yeah.

**Justin Garrison:** Jason, this has been great. Thank you so much for coming on and talk to us about how you're building containers at Chainguard. Where can people reach out to you, or find more about the container images, look at some of these TerraForm files that you're building, or just ask you other questions?

**Autumn Nash:** My Twitter handle is @imjasonh. You can tweet at me or DM me, or anything.

**Justin Garrison:** I'm is part of that.

**Jason Hall:** I'm as part of that, yes. The letter I, the letter m. This is terrible... I picked this username when I was 16, and I didn't know I was gonna have to say it over podcasts, and over customer support... \[laughs\]

**Autumn Nash:** Okay, but can we talk? I'm so ashamed of the usernames I picked in high school...

**Jason Hall:** Oh yeah, this is the best one I have, let's be honest.

**Autumn Nash:** I was gonna say, that's not even bad... Some of them are like "Oh, my God... Let nobody ever find this."

**Jason Hall:** We won't go into that. You can also -- you can go to chainguard.dev to learn more about everything we offer. There are a number -- all these TerraForm repos are fully open source. The GitHub org is chainguard-images. Come take a look. Let us know what you find.

**Justin Garrison:** Awesome. Thanks so much.

**Break:** \[00:40:52.06\]

**Justin Garrison:** Thank you so much, Jason, for being on the show and telling us all about TerraForm, and building containers. And I always try to find out where in the stack is the Bash... Because every stack has it somewhere, at some level, and I feel like there's a makefile, or there's Bash... And it's very interesting to hear how they were building that out, and some lessons they learned with doing that at scale, in an open source way, with all of these different architectures and applications, just to be able to build those containers. That sounds so cool, because - yeah, starting with Docker files does sound like a nightmare once you get to 10 or 50 applications and containers you have to push out regularly.

So to close out the show, Autumn, let's talk about a couple of links we've found. Usually, we'll probably put this at the beginning of the show, but because it's our first one, we still wanted to bring up some things that we read recently, that we found interesting, or learned last week... So why don't you go first?

**Autumn Nash:** So my link is "How satellite images and AI could help fight spinal apartheid in South Africa." It is by the people at DAIR, I think it's called. Distributed AI Research Institute, and it's by Timnit Gebru. She is the AI PhD who left Google because they didn't agree with her ethics paper, and they kind of tried to push her out... So she is using data to help people to get more democratized resources, like school healthcare, parks and hospitals, and able to get more resources after apartheid had really separated a lot of those resources, and the resources have stayed separated and out of the reach of a lot of people that really need it... And they're going to use data and imaging and AI to basically redistribute those and to make a case backed up by data to help make things better for those people that don't have access to those things... But it's really interesting the way that she did it. It's in the MIT Tech review, which is one of my favorite sources for articles, and it's just really awesome. People talk about bad things AI will do, and then how AI will be profitable, but this is really cool to see AI being used to help people and to - I guess you could say like kind of right wrongs that were done in history... And it's going to be used to make things better for people, and at no cost to people, so it's really cool.

**Justin Garrison:** And essentially, if I understand it, they have satellite imagery, they're looking at the land, and then seeing places that are basically "This is green, or there's more buildings, or there's more roads", and whatnot, and you can figure out from that "Oh, where's the funding going?" If you look at enough land and find those patterns... Right?

**Autumn Nash:** Sort of that. And kind of like how far are schools. For instance - I forget what state it was; I think it was Detroit, but they did a study showing that because they had done charter schools, the schools were more and more out of reach of people who had less socio-economical power... So the schools just got further and further, kids were catching multiple city buses... So this is kind of like the same thing - are schools super-far away? Do they have access to healthcare? How far is it to get to those healthcare? Are there any parks in that neighborhood? How far are they from hospitals? What does it look like from above? And it's just amazing how -- this is one of the examples of how AI is going to help things like this, things like medical treatment, and all these different ways that you may not initially think of when you think of artificial intelligence, but it's going to improve people's lives.

**Justin Garrison:** \[00:49:44.17\] That's cool. My link for this week is called -- "It's not microservices or monolith, it's cognitive load you need to understand first." And it's by Fernando Villalba, I believe it's how you'd say... It's actually from December, but I recently read it. And it was a great read, mainly or rounds this argument of "Should I build a monolith or microservices?" And one of the things that I remember as a platform engineer was we always said that we reduce cognitive load for the developers by not having to think about all of the things, we just kind of made sane defaults for them. And the argument here in this article is very much similar, where it's like "How much are you dealing with the just thought process of a release cycle, or debugging things, or how things fit together, and like network latencies?" Really understanding how much cognitive load your team could handle is what determines your architecture for what you should be building. Because if you try to make it too many small services, that increases your cognitive load to say "Oh, even if it's a single piece of functionality, how that thing talks to something else is much more difficult when it's over a network, or through a load balancer, than it is if it's a library that you import, and it just makes a call to the same application in a thread."

So I really enjoyed the article just taking that sort of argument and flipping it on its head, like "Well, let's look at what your organization or your team is capable of maintaining in their heads and being able to debug", before we even talk about "Oh, should this be a separate repo or not?" or "How do I deploy this thing?" So I really enjoyed it. It's just one of those things that there's arguments all the time, because one company does microservices doesn't mean you should, by default. You really need to look at your team, and what your team is capable of, and how much cognitive load that's going to put on everyone in the team and in the organization.

**Autumn Nash:** I think that's a really interesting article, because it's not a way that I don't think people think of when they're building projects, or when they're building maybe engineering teams, or just how they want to try to shape their goals for the year, and all of that... So I think it would be really interesting to see the return on investment of thinking that way. I wonder if people would be innovating faster, or innovate more because of the reduced cognitive load... And it would be really interesting to see if they could not only implement that, but then take metrics and see if they were more productive or not... Because it just seems like if you're lowering the cognitive load, you could be more productive and do more with your time.

**Justin Garrison:** Well, and one thing they point out in the article is not all cognitive load is bad. Like, the goal isn't to reduce it as much as possible, because there's a cognitive load that helps you do what you do best. If you are an expert in a certain programming language, there is an amount of cognitive load that you have, but you want to keep that. You want that around, to be able to dive deeper into that particular area of whatever it is your specialty is. I thought that was really neat, because it's not all about "How do we make it so you don't think?" That's not actually the goal here. Let's help you think about the things that are important, and you add value to the organization or the business, or whatever, by like being able to have more cognitive load in the areas where you should have that cognitive load.

**Autumn Nash:** It would also be interesting to see what the cognitive load is in things that you enjoy doing, and that you find interesting... Because there's already so many studies about how people innovate more when they're interested, or it's something that they enjoy doing... And I wonder what the difference would be there.

**Justin Garrison:** Yeah, I'm sure a lot of that just goes into how easy it is to retain some of that information too, because it doesn't feel like cognitive load. Because I'm very bad with names and faces. So it's a lot of cognitive load for me to remember someone's face, even if I'm interested -- like, I'm really trying, but I really, really have to think about it over and over again to be able to see the next day "Oh, I remember who you are now." And that is a hard thing for me to do, but for some weird reason, my entire life I could remember horsepower for cars, because I liked cars, and I was just like "Oh, I remember that car has 320 horsepower." I don't know why; I can't tell you the person's name that I met last week, but I can tell you what they drive, and I can tell you how fast it is. It's just a different sort of like what you can latch on to, and what's interesting to remember.

**Autumn Nash:** I think it's just a different feelings when you do something that you're very, very interested in... Especially, I think, because of the way that engineering people that work in tech just generally seem to work... How many jobs you know that people build a bunch of projects on their own, or like they were found for that job because of the projects they contributed to? So much of it is different than most jobs, and the motivation, and how people seem to really generally enjoy that job, or work on projects in their own time, or just be like some sort of an interest, you know... I wonder what the relationship would be between those.

**Justin Garrison:** Well, thank you, everyone, for listening to the show today. We want to hear from you. If you run software in production, let us know. You can reach out to us on email. Shipit \[at\] Changelog.com is probably the best way to get a hold of us. We have some great guests lined up, that we already are excited to talk to them about various things. There is a lot of variety in the types of software and infrastructure... I know we have someone coming to talk about space, we have people talking about social networks, we have people talking about all different stacks. So if you are running production software and you'd like to be on the show, please send us an email and we can figure out a schedule and some topics that we'd be interested in learning from you from. So yeah, definitely drop us an email.

**Autumn Nash:** I'm really excited about the space one.

**Justin Garrison:** Yeah, space is going to be great. Again, yeah, thanks everyone for continuing to subscribe, and if you have friends that you want to show to, obviously send it to them, because we are going to be continuing this show for a week, or I mean every week now for the foreseeable future, and we want to help people just get into running infrastructure, and understanding kind of the challenges and what it's like to be a production engineer, developer, anyone in this space. So thanks, Autumn, for coming, and we'll talk to you all soon.

**Autumn Nash:** Thanks.
