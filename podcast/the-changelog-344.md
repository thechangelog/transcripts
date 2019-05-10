**Adam Stacoviak:** It is 2019, it's a new year...

**Jerod Santo:** It is.

**Adam Stacoviak:** ...and we're way into this year, as a matter of fact...

**Jerod Santo:** Q2.

**Adam Stacoviak:** But in terms of infrastructure, we're kind of new. This has been up for a few months now. Gerhard's here, Jerod's here, and we're talking about the infrastructure for Changelog.com in 2019. It's changed since the initial time we did this show, which was \#254, back in June 2017... Is that right?

**Gerhard Lazu:** Yeah, that's right. Almost two years.

**Jerod Santo:** That's right.

**Adam Stacoviak:** Almost two years. So new infrastructure... What's new? What's going on here?

**Gerhard Lazu:** Everything is simpler than it was before. We've learned a lot. We've cut a lot of the fat that we had in the past, we've learned from our mistakes... We haven't made that many new mistakes, which is always good, but we have learned a lot.

One big difference is that not only we have embraced all our partners fully with this new infrastructure, but also we have blogged about it on time, and we have shared a lot more with the audience and with our users than the last time we did this.

**Jerod Santo:** That is true.

**Adam Stacoviak:** I cut you out on time there; I almost feel like that was self-inflicted, not like Jerod and I \[unintelligible 00:03:05.01\]

**Jerod Santo:** There's a sub-tweet in there.

**Adam Stacoviak:** Yeah...

**Jerod Santo:** You did blog about it on time, and very well, a very nice post, which we will of course include in the show notes... Possibly a lot of our listeners have read that post. I know a lot of our listeners two years ago enjoyed episode \#254, and I was wondering why, and a few people told us... I think that our infrastructure is a nice example of a real-world application. It's not a larger application, it is a custom application; but because we have - at least Gerhard and I, with regards to the deployment, have intimate knowledge of the needs, and the decisions, and all these things, it's less Adam and I poking at a black box that somebody else owns, and more us talking about a black box that we participated in creating... So there's some real-world takeaways, we hope.

When we did this two years ago -- Gerhard, why don't you just real quickly... You said lots changed, we've simplified, and we're gonna focus obviously on the new infrastructure, but in order to talk about simplification, can you at least review the old way we deployed Changelog.com, before this new shiny?

**Gerhard Lazu:** \[00:04:15.17\] Yes, of course. Two years ago we were using Ansible to do a lot of the orchestration and a lot of the tasks running in our infrastructure. We were using Concourse for our CI, which we had to run ourselves; it was not a managed service. This year there's no more Ansible, there's no more Concourse; everything that runs is self-contained within Docker Swarm. So we have services, everything is nicely defined, and the core of Changelog infrastructure is a Docker stack.

**Jerod Santo:** And at the core of driving that infrastructure, previously Ansible - basically, Gerhard has replaced Ansible with, pardon my French, just a badass makefile, if I may just break our own rules here, Adam, and go explicit for a second... A makefile that does all these things. It's kind of amazing.

**Gerhard Lazu:** Yes, the makefile was an interesting twist to what we had before, because before we had to run all these commands, and there were a couple of scripts which you had to remember, and it felt a bit ad-hoc. Having a single makefile, what it gives us is a single place to go and to look at all the things that we could do.

For example, if we just run make in our repository, in the Changelog repository, we see all the targets. In make they're called targets. Just to give you a couple of examples, make SSH, and we can SSH into hosts. Or for example make a contrib, which allows someone that cloned a repository for the first time to make contributions to changelog.com. That's something which we did not have before.

So there are a couple of very nice things that make life easy of developers, which are also operators. The barrier of entry is very low, and it's just easy and nice to work with.

**Jerod Santo:** Where did you get your make skills? ...because I've opened makefiles, I've looked at them and thought "Oh, wow..." A lot of them, I think, are auto-generated from autoconf, or something... But mostly, it's like "I'm going to compile this software using make", and that's what I'd call the core use case. But obviously, there's lots of things that you can do with make, and you're doing a lot of them almost as like a scripting tool.

Where did you get these wizard make skills? Where did you learn this stuff?

**Gerhard Lazu:** That is a very good question, and I was convinced you were going to ask me that... Actually, one of my mates was saying "I will listen to the Changelog show that will come out, because I want to learn more about make"...

**Jerod Santo:** There you go.

**Gerhard Lazu:** ...so I was sure that someone will ask me this question. \[laughter\]

**Jerod Santo:** I'm happy to be your pawn. Yeah, go ahead. Please answer it.

**Gerhard Lazu:** So I didn't know make until a couple years ago. Make is this really old build tool... And when I say "really old", I mean in the best possible way, in that it has these decades of experience that went into it. A lot of sharp edges for sure, but there's a lot of good documentation, a lot of good examples, as well as bad ones... But all put together, it's a mature tool.

I first picked up make while joining the RabbitMQ team. The RabbitMQ team had the entire build system based on make, and on a tool called Erlang.mk. Erlang.mk is a tool that's built by Loïc Hoguin; he is also the creator of Cowboy, which is the web server that Phoenix uses behind the scenes, as well as a bunch of other projects. So make is still very present in the world of Erlang, and definitely in the world of RabbitMQ, and that's where I picked up a lot of the make skills.

**Jerod Santo:** \[00:08:00.26\] So is it a tool that you commonly go to? Was this out of the norm for you to reach for this particular task, or is it just one of those second-nature things, like your hammer, nowadays?

**Gerhard Lazu:** I think it's a bit of both, to be honest. I used Bash for a lot of things, and I had scripts all over the place... And what I've seen in make was the potential to make all these different scripts saner. I really liked the fact how you can have make targets that depend on other make targets, and it has a certain composibility that Bash scripts didn't have.

It's also simple, in that it comes pre-installed on every system. On Mac you just need the X-code tools and you have make. Okay, it's an old one, it's version 3, and you want a newer make to benefit from some of the newer features, but all in all it's omnipresent. It's almost like Bash, it's everywhere. You don't need to do anything special to get it.

I've seen the potential of just improving a little bit an old approach which I had for many years, and it worked well... So I could see it work on a big project, which has many dependencies, which has many things that have to happen, and I just got to appreciate it.

**Jerod Santo:** Very cool. Well, let's back up a step, because maybe we've gotten ahead of ourselves, and I am totally to blame here, because I wanna hop into the nerdy details of this makefile... But we described a little bit of the deployment infrastructure that was previous there, we talked about simplifying it, but we haven't actually described what it is. You mentioned Cowboy is an Erlang-based web server that Phoenix rides on, so to speak - just to take the Phoenix metaphor, I guess... Does the Phoenix ride? I don't know. It's on top of Cowboy. So what is Changelog.com's?

I can answer that one, because I work here. Changelog.com is an Elixir-based Phoenix application, so it runs that technology stack... And it was previously deployed, a couple years back, using what you said there, Gerhard - Ansible, Docker, Concourse CI... And we can talk a little bit about each of these moving parts. One of the goals this time around was let's get rid of some of the moving parts, let's slim it down, if we can - make it simpler to run, simpler to understand for me (as not the primary author of the infrastructure) and generally try to remove as many parts as we can, and rely more on modern technologies, as well as more on Linode, their load balancers, for example... But the base of it is it's an Elixir-based application that uses an NGINX proxy, it has a Postgres database, it has requirements for some local file storage, because that's how we upload our episodes into the system and process them with ID3 tags, and whatnot, using FFmpeg... So those are the constraints that we're working inside of and what we're trying to actually deploy... And then the way we go about deploying is what we're changing and what we're trying to improve upon.

So when you describe the new setup, you start off by saying that Changelog.com is a simple three-tier web app. We talked about the makefile, you mentioned that we've simplified removing Ansible, and we're using Docker Swarm... Can you go a little bit step by step through those tiers and through the way it looks, and then we can talk about some of the decisions that we made along the way, and what we were trying to get accomplished? But first of all, get the lay of the land; not as it was back in 2016-2017, but as it is right now.

**Gerhard Lazu:** Changelog, as Jerod very well put, is a simple -- well, it's more complex, but it's just a web application--

**Adam Stacoviak:** It seems simple, right?

**Gerhard Lazu:** \[laughs\] It seems simple from the outside...

**Jerod Santo:** It does.

**Gerhard Lazu:** \[00:12:01.13\] It does a lot of things, a lot of heavy lifting. It does a lot of just \[unintelligible 00:12:03.11\] will be very complicated if you were not using Phoenix, and if you were not using the Erlang VM, and we can circle back to that... But it's just a web application, in a nutshell, which needs a database, and it's 3T in that we have a proxy in front. It's a little bit more complicated than that, because the proxy does a couple of things... But it's just your typical web application.

The core - this core, like database, application, proxy - all is described as a Docker stack. A Docker stack - you can define your services that make up your stack. In this case we have a bunch of services (there are a couple more that we define) that form the core of Changelog. The nice thing about this is that because we describe the core of Changelog in a Docker stack, we can spin it up locally on a machine that runs a Docker daemon that is configured to run in Swarm mode... Which is very simple - just Docker Swarm in it, and the Docker desktop all of a sudden runs in Swarm mode, where you can deploy Docker stacks. That allows anyone on the team to run the core of Changelog - and when I say the core of Changelog, I mean everything except the IS bits; so anything that, for example, can only run in Linode, like a load balancer - a NodeBalancer in their case - or a block storage volume... Obviously, you couldn't get that locally, but you can get everything that makes Changelog. And we can set up production - identical copies of our production - locally, because we describe everything declaratively in this Docker stack.

So this description of what is Changelog before it existed in these Ansible tasks -- it was a bit difficult to understand. You couldn't go in one place and see it all. It was like a file over here, and a file over there, and this thing had to run, and then that other thing had to run, and they had to run in sequence, and eventually you would get Changelog with all its components... It was a bit more difficult to visualize and understand.

**Jerod Santo:** Right.

**Gerhard Lazu:** So we have the Docker stack that describes what Changelog is at its core, and then we have all the IS components that are around it. As I mentioned, a NodeBalancer that terminates SSL connections, gives us the high uptime... It's all managed by Linode, and it's very nice to work with. That has a couple of benefits, like for example we can define multiple versions of Changelog and we can just modify the balancer to root to different versions, which is when we do breaking upgrades, which hasn't happened yet, but I'm sure it will... It's a nice way of making them with minimal downtime, with minimal impact on users.

In front of the load balancer we always had this - we had Fastly, which we use for CDN... Which basically caches all the content. It has some nice features; for example, we get the IPv6 for free, we get the HTTP/2 for free... So everything that's static benefits from these features, which are all Fastly features. We just leverage them.

**Adam Stacoviak:** It's much better than building them yourself, right?

**Gerhard Lazu:** That's for sure. That's a very complicated problem to tackle yourself, and you definitely couldn't do it as a one-man operation. It's too complex. Too many variables, too many things to worry about.

**Adam Stacoviak:** Well, it seems like in this day you may think that CDNs are pretty well-known, but some people might just reach for block storage, for example, because if it's just assets, maybe like "Well, I wanna store this on my own, and not think about robotic caching, or all these other features, like IPv6, for example, and the logging we have, the streaming logs, and stuff like that. So it's interesting that some might just reach for block storage, but in this case a CDN really gives us some super-powers that we didn't have to build ourselves.

**Gerhard Lazu:** \[00:16:11.20\] Exactly. So the truth is that we still use block storage, but we use block storage which is a Linode feature, which is completely opaque to the CDN. All the CDN does - it will read some static files from somewhere, it doesn't matter where they come from, and then it will cache them... So whether we use block storage, or whether we use a local volume, that doesn't really matter as far as the CDN is concerned. Once the file is in the CDN, it's in the CDN.

The CDN just makes sure that our content is quickly accessible - mp3s, especially mp3s, through the entire world. So they get served from the edge locations, rather than from the Linode data center where the Changelog application runs, and where the source and the origin of all the media and static assets is.

**Adam Stacoviak:** Which is really important for us, because we literally have a worldwide audience. We have listeners in Japan, listeners in South America, listeners in Africa, New Zealand, where you're at... Not where you're at in New Zealand, but where you're at in London. You're in London, right?

**Gerhard Lazu:** Yeah, that's right.

**Adam Stacoviak:** All over the U.S., North America... So we literally have a global audience, so we had to have a CDN to truly respect -- I think an average mp3 is around 100 megs roughly, but still, that's a decent amount to pull down, and you wouldn't wanna pull it from Dallas, Texas, or New York, or New Jersey, or something like that. You'd wanna pull it from your local pod, so you can get it faster.

**Gerhard Lazu:** Definitely. That's definitely a good thing to have. In our case, the cherry on top is how we can just get IPv6 and HTTP/2 with no effort on our part, simply because our CDN provider does that... So that's great.

**Adam Stacoviak:** Thank you, Fastly, for that. \[laughter\]

**Jerod Santo:** Quick question about the block storage - and this is like a "Does Linode support this feature?" kind of a question, so maybe I'm not asking the right folks... But maybe Gerhard you know. Could you set up a block storage in a CDN mode, where they'll basically distribute that storage geographically, and you could be like a CDN block storage? Because that would be cool.

**Gerhard Lazu:** I don't know if Linode has that feature, to be honest. I'm more familiar with Google's Cloud. I work a lot with Google's Cloud, and I know about their storage volumes. They have different modes in which they run, but by default have multi-region... So basically every write goes through three separate -- actually, that's multi-region... Sorry, that's Google Cloud Storage which I'm thinking, which is similar to S3... Sorry, I was thinking about the volumes of the -- I forget what they're called now... The persistent disks which you get are actually replicated; all rights are in three separate zones. So it's one region, but three zones, the SSD drives that you tend to get, which is similar to Linode's block storage.

As far as I know, Linode doesn't have something similar to S3, which is more like object storage...

**Jerod Santo:** Right.

**Gerhard Lazu:** ...which is what we would want, to make sure that we are consuming an API when it comes to our storage, we're not consuming devices... Which is what a block storage is. It just presents a volume, you mount it...

**Jerod Santo:** You mount it, yeah.

**Gerhard Lazu:** ...but it's not on the physical machine.

**Jerod Santo:** Right. And when you say physical machine, you mean virtual machine.

**Gerhard Lazu:** Virtual machine, of course. \[laughter\] Yes, it's not on the virtual machine. Yes, definitely.

**Jerod Santo:** \[laughs\] The physical virtual machine, yes.

**Adam Stacoviak:** By default though, S3 is not a CDN though, right? You still have to layer on some CDN on top of even S3, if you were gonna use S3 for object storage, for example.

**Gerhard Lazu:** That's is correct, yes.

**Jerod Santo:** Right, CloudFront.

**Gerhard Lazu:** \[00:19:56.02\] But the difference between, for example, block storage and S3 is that S3 - you consume it via an API, and you work with objects. You don't work with files... I mean, you can, but the performance is not good. There are different modes in which you can use that, but they are like -- I wouldn't say hacks, not classes either, but it's not how it's meant to be used. You're meant to put a file, get a file, list files... You have operations like that.

**Jerod Santo:** Yeah. Let's stop for a moment and I will explain a little bit, because people might be wondering why are you not using an object storage... And Gerhard, you asked me this as well - why do we need local storage? Because in the age of 2019 - or I guess when we started this, in 2016, even then I had been using Heroku for many years, and they will not allow local storage of files. It has to be transient, it has to be ephemeral... And you store things in Memcached, or you store them in S3, or you know, services.

The reason is very lame, and is very simple... \[laughs\] It's that it's easier for me to develop software with a concept of local files; it's easier for uploads, it's easier for metadata, it's easier for FFmpeg... We just shell out to FFmpeg to do our ID3 tags. A feature that we need and that at the time (and probably still today) would have slowed me down dramatically to have to write an Elixir-based ID3 tag thing. Now, ID3v1 is out there, but there's no ID3v2 library, which maybe eventually we'll write anyways... And if you're out there interested, holler at us if you'd like to write something like that.

But I wanted to shell out to FFmpeg and pass it a file and let it do its thing. That's a very simple and straightforward way for me to get things done. The end user demanded it, Gerhard; and the end user was me. I said, "No, we're just gonna go ahead and use local file storage", like old curmudgeons... And that decision has had its pros and cons through the years, but here we are, with block storage.

**Gerhard Lazu:** I have a little twist to what you said...

**Jerod Santo:** Okay.

**Gerhard Lazu:** I'd like to offer an alternative approach.

**Jerod Santo:** Sure.

**Gerhard Lazu:** It's very important for anyone to take stock of how they work and what works for them. The worst mistakes which I've seen in my career is teams that choose something for what it could be, or what they think it could be, and not for what it is. So when you know what works for you and you know what you're comfortable with, rather than picking a tool for its merits, you need to think "Well, how is this going to work for me?", which is a very difficult question to answer.

So rather than going to, let's say, Kubernetes, because everyone is using Kubernetes these days... Rather than saying "We're going to use Kubernetes" and that's the end of it, I was saying, "Well, hang on... What's the simplest thing that would improve what we have, that would be better without, for example, picking a tool before we know whether it fits us?"

You mentioned block storage - it's easy, it's comfortable... It might not be great, but it works for us, and I'm sure the day will come when we will replace that with something else... But it was too big of a step. We had to make smaller steps, for example replacing the CI and changing the way we define the core of Changelog. That was an easier step to make, which made everything simpler and nicer to work with. One day, I'm sure the time to replace block storage and the time to use Kubernetes will come... But it was not in this situation.

**Break:** \[00:23:58.26\]

**Jerod Santo:** So simplification was one of our main goals. Another goal that we had was to allow a better integration into GitHub pull request flow for contributors, with running the tests, integrating with a CI... Concourse CI does a lot of things really well, and Gerhard, you actually introduced it to me back then, and I enjoyed a lot of its benefits. One of the things it doesn't do well was what I think is a rather simple feature, just because of the architecture of Concourse CI, which is really a power tool for building your own pipelines - this doesn't really integrate very well into the needs of GitHub for those pull request builds. With that and other reasons, we've replaced Concourse CI with Circle CI, this version around. Gerhard, walk us through that... Circle CI - what it's doing, how it got here etc.

**Gerhard Lazu:** If I remember this correctly, your exact words were "Concourse is a black box. It's nice, but I don't understand it. Can we use something else?" \[laughter\] That was pretty much it.

**Jerod Santo:** Something like that, yeah.

**Gerhard Lazu:** You didn't like the fact that we had to manage it ourselves, which that was definitely a big drawback. It was a black box for sure.

**Jerod Santo:** There was an integration between Ansible and Concourse to where as a person that was just trying to use it, I couldn't understand "Is this an Ansible thing? Is this a Concourse thing? Do I change it here or there? What do I run locally? What do I run in Concourse etc.", and I never actually grasped the entire mental model, which is why one of the major goals to simplify was to fit this inside my monkey brain.

**Gerhard Lazu:** I completely agree with you - Concourse is a very complicated tool. You can do some great things with it... For example, the entire RabbitMQ pipeline - and there are many pipelines - are run by Concourse, and it's a beast. It's a beast. And that's overkill for what Changelog needed.

Circle CI ticked a lot of boxes, and I think the most important box which it ticked, at least from my perspective, was that they are our partners. So if Changelog is recommending that "Hey, check them out. Check this service out, it's a cool service", how would we know if we're not using them?

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** I mean, on paper they are great, but we're not using them; we're not dogfooding them, so we don't know how great they actually are. And when they have some scaling issues, when they have just growing pains, we're not aware of that. So it's very difficult to empathize with the people that we recommend to use this tool... And from my perspective, that was the biggest reason to switch to Circle CI - manage less infrastructure, embrace our partners, and just see what the experience is like.

\[00:28:07.16\] Not only that, but because we are using Circle CI, our users can see how to use it, and they can maybe try and mimic what we do as a starting point, and then make it their own, obviously.

Circle CI is a lot simpler in terms of what it does for us. I'm sure you can do some amazing things with Circle CI, but we don't. The reason why we don't is because switching from Concourse - well, the reality was I had to do a lot of things when it came to the switch, and I was thinking, "Okay, what's the simplest thing to use Circle CI to do all the things that we need, but not the more complex bits? And are these things better suited, for example, for Docker? Can we define this as a loop?" For example the application updater. We have this service that runs in Docker that updates our application. This has a couple of benefits.

First of all, it decouples CI from production, so CI is not aware about production. All CI does is run tests, obviously run the builds, resolve all the dependencies, do the packaging, do the assets, and then it pushes the result in the Docker image to Docker Hub. And that's it. That's where the CI stops. It doesn't have access to any secrets, to production secrets, which is great from a security perspective... And if let's say one day we wanted to try another CI system, it would be fairly easy, because it does only a subset of the things that we need it to; it's not tightly coupled with everything else.

**Adam Stacoviak:** So moving from Concourse to Circle CI was somewhat painful, because we were putting more in CI that should have been; as you've mentioned, moving some things to Docker, this application update loop, so on and so forth. Is there such thing as like -- obviously, it seems that way, but CI lock-in, where there's so many interesting tools in a platform and/or open source CI for example even, that you can kind of get locked into those particular platforms.

**Gerhard Lazu:** Definitely. I would definitely agree with that. And we were somewhat locked into Concourse, because we had Concourse do the things that other CIs cannot do as easily. I mean, sure, it's possible. Anything is possible, but at what cost? In our case, we almost had to take a baseline, and we had to use a CI for the things that we wanted - like Jerod mentioned, PRs. Concourse wasn't good at PRs for us. It can do them, but they're not as first-class as some of the other things. PRs in Circle CI are very easy; they're so easy. That was a nice feature, which we embraced... But for example orchestrating our infrastructure, I would not have put that in any CI, to be honest.

Concourse is a bit more than a CI. As Jerod was alluding to, it's this automation platform almost. It does so many things, and some - it does them really well, but it's a very complex system. It's not a CI, it's a lot more than a CI. So a Circle CI - we just use it, run our tests, as I said... When there's a pull request, we run our tests, resolve all the dependencies, package assets, and then produce a build artifact, and that's it.

**Adam Stacoviak:** Walk me through a lifecycle then of what it means to be continuously built and monitored. As we do local changes, we're fleshing out a new feature, we ship it to GitHub - walk us through the lifecycle of what it means to be continuously deployed and then also monitored.

**Gerhard Lazu:** Let's take the most common path, which is the one where someone pushes a change into master branch. So we're not creating any branches, we're pushing a small change to the master branch. When the master branch updates, Circle CI receives the update via a webhook, and it runs the pipeline. By the way, we can also define pipelines in Circle CI, which is very nice.

\[00:32:08.00\] The pipeline - all it does is, the first thing, it resolves the dependencies, makes sure that we have everything we need. Then it runs the tests. It compiles assets, any assets that we need; this is the CSS, Javascript, images... And then it publishes an image to Docker Hub.

We have this application updater which I mentioned runs within our production system, and it continuously checks to see if there's a new image. If there is a new image that was published to Docker Hub, it pulls that image, and because it's a Docker service, it will spin up a new instance of Changelog. If this new instance passes all the checks - there are a couple of health checks which we define - then it gets promoted; so we have blue-green deploy. It gets promoted to master, and actually gets promoted to the live application. The old application just gets spun down.

If there are any issues with the new application, for example it doesn't pass its health checks, the deploy fails... And we get a notification by using Rollbar in our Slack. So whenever there's a deploy, whether it's a good one or a bad one, we always get a notification in our Slack by Rollbar. So we can see what gets deployed, who deploys it, and when it was deployed.

**Jerod Santo:** Which by the way, you can participate in all of this via Changelog.com/community, free signup; grab a free Slack invite, hop into \#dev (free \#dev; all things free here) and you can see those Rollbars flying in throughout the week. And maybe you'll get annoyed of them and maybe you'll leave the room, but if not, you can hang out there and see the stuff that's being deployed. Just a quick pitch to come hang out with us in our community Slack.

**Adam Stacoviak:** \[unintelligible 00:33:54.12\] more to that. Gerhard mentioned this earlier, too - the invitation of being able to use some of these partners, but also being able to see CI, and you mentioned Jerod too about a real-world app, and being able to see how it's done in open source... It's not a very sophisticated app, it's pretty easy to jump in, but the invitation is there, really. I think that's what you're really saying here - if you're out there listening to this and you're like "How in the world did they do this?" and you're listening to this show, follow Jerod's instructions. That's how you get. You're invited, everyone's welcome. Come check it out, see how it works, ask questions even; we love that.

**Gerhard Lazu:** That's actually something which I've picked up from you when it came to Changelog. Not everybody that runs a business is as open as you are. So not only you do your development in the open of the entire application, but we share everything we learn, all the fixes. I know that Nick Janetakis - he's one of our Phoenix-Elixir fans, and he's in the \#dev channel all the time...

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** ...and he keeps mentioning us on -- what was it? Not Stack Overflow...

**Jerod Santo:** Hacker News.

**Gerhard Lazu:** Hacker News, that's the one. Thank you, Jerod. And he's very excited to see that he can pick up a lot of the things that we learned, and he also gets to share when he learns something... Because it's open source; he can do a PR, and all of a sudden our application is better, and everybody benefits. That's the one thing which I loved about Changelog, how open it was.

Jerod, you were the first one that open-sourced the entire new Changelog.com application. I thought that was great. And then later on you did the same for infrastructure, but because it was done so late, it made little sense to the users. I mean, they've seen this finished thing. While with this new infrastructure, the entire codebase, everything we do is in the same repository as the application. There is a monorepo, right? It's one happy party.

**Jerod Santo:** Right. It's one happy party and everyone's invited.

**Adam Stacoviak:** That's right, that's right. Come have fun, come have fun.

**Gerhard Lazu:** \[00:35:52.25\] That's exactly right, and that's the one thing which I've always appreciated, and even loved the way we did things at Changelog. I really like that. You can even see what things we have in flight... For example Raul Tambre - he wanted IPv6 support, and the reason why we did that is because he said "Hey, I would like IPv6 support, and this is where we could start", and even the PRs, and that was one of the nicest features to work with the community. Just really, really nice.

Actually, now that I think of it, PR 246, where we made it easier for everybody to contribute to Changelog.com, that's what started this new look at how we use Docker and how can we improve our use of Docker so that anyone can benefit from this simple approach.

**Jerod Santo:** Yes, and the advantage of having an identical setup in development and production, which I've never been the beneficiary of. Gerhard, you and I had slight differences throughout this process, as you were on Linux and I was on Mac; we got to iron out those kinks, but just having the exact same circumstance... And even today, I still run the local version, and then I'll kick over to the local Docker version, because I still have my old-school setup, and realize -- I have an actual clone, so to speak, of what production is... And it's much better that way. You're converting me. You're converting me into a Docker fan.

**Gerhard Lazu:** I'm very glad to hear that. A little secret is that actually there are three layers. The first layer is your local dev setup, where everything runs on a Mac or a Linux, and you need to install on your machine Erlang and Elixir and everything else. Then there is the contributor setup, which is the one that we did in PR 246; that's where we're using Docker Compose \[unintelligible 00:37:49.09\] and then Docker Compose orchestrates all the components.

And there's a third approach, which is actually closest to production, where there's a local stack. The reason why we use a local stack is because some things are different, like certificates, for example. We don't have SSL locally. We could, but it's not something that we run locally. Our SSL, by the way, is terminated by the load balancer, so that's something that even if we did have locally, it would not reflect production.

**Jerod Santo:** Right.

**Gerhard Lazu:** So there are these three tiers. I think you are between the first one and the second one; I don't think you're that used to running a local copy of production locally yet... But I think we're getting there.

**Jerod Santo:** While we're talking about Docker, let's loop back to something that you said earlier, which has to do with running in a loop. I think one of the neatest hacks, so to speak, little tricks that you pulled off is this self-updating Docker container. Basically, as you pointed out, once Circle CI has a build, it publishes it to our Docker Hub, and that's the entire application, right? And then on the production host, there is a Docker container whose entire purpose is to update the other Docker containers. Am I describing it correctly? Or just the app container, basically.

**Gerhard Lazu:** Just the app container, that's right. It's called the Application Updater, and its only purpose is to update the application.

**Jerod Santo:** Is this custom code? Is this a solution you're using, or other people...? Is this standard practice? I just don't even know...

**Gerhard Lazu:** \[laughs\] I don't know if it is, to be honest...

**Adam Stacoviak:** I like his giggles before he answers some things... \[laughter\] It's like he's revealing this \[unintelligible 00:39:32.20\]

**Jerod Santo:** He's waiting for us to ask those things...

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** These are actually all good questions, which I very much enjoy, I have to say that. So the gist of this application updater is literally a WhileLoop, and Docker service update. So it's a Docker service update that's running in a WhileLoop, which is like three lines of code. That's it. That's how simple it is.

**Jerod Santo:** \[00:39:59.06\] Where does that code exist? Does it exist in a Docker file, or is it part of the Docker stack? Where does that actual code exist?

**Gerhard Lazu:** There is a Docker file that builds the container image, which runs this code. And the image gets deployed with the entire stack (part of the Docker stack) onto production. So you get the application, you get the database, you get the proxy, and you get the application updater.

**Jerod Santo:** Right. So is the code for the application updater - this Docker service update running in a loop - is that code in the Docker file that then gets built as the image? Or does it exist -- where does that code actually exist in our codebase?

**Gerhard Lazu:** The codes, as with everything else, exist in Changelog.com. It is a script in Changelog.com which gets built into a Docker image.

**Jerod Santo:** Okay.

**Gerhard Lazu:** For example, we have a Docker image for the application, which defines what the application is. We have a Docker image for the proxy, where all the legacy assets are stored. So we have a Docker image that has this application updater code, which is a subset of what we have in the Changelog repository, and it's literally just like a script, a simple script which has a WhileLoop.

**Jerod Santo:** Okay, so which file in the repository...

**Adam Stacoviak:** \[laughs\] I can answer this one.

**Jerod Santo:** ...are we gonna find this code, Gerhard? Which file is it in?

**Gerhard Lazu:** So in Changelog.com there is a Docker directory, and in the Docker directory is the Update Service Continuously file.

**Jerod Santo:** That's the question I was asking.

**Adam Stacoviak:** There you go.

**Gerhard Lazu:** Sorry, some questions are hard for me... Especially the simple ones.

**Jerod Santo:** I'm mostly razzing you, because it's just funny to ask you to continually drill down on the specifics... But also because I wanted to look at it while you're talking, so I just continued to. There it is -- what's it called?

**Adam Stacoviak:** Update Service Continuously.

**Jerod Santo:** Boom! Okay, I'm with you. I've got the file open... Continue, sir.

**Adam Stacoviak:** He's also linked this up in the blog post too, so that's why I'm tracking a little bit closer... Because when he talks in the blog post about the Docker service, managing the lifecyle of the app, he points to the running loop via a link, which links to the code that you're talking about, Jerod.

**Gerhard Lazu:** That's exactly right.

**Jerod Santo:** Now I feel like \[unintelligible 00:42:15.28\] because I'm staring at that word, "running in a loop", and I just never clicked on the link.

**Adam Stacoviak:** I did, because I was curious. I was like, "What does this mean?"

**Jerod Santo:** That's right. I think I got my money's worth with getting Gerhard to answer. \[laughter\]

**Adam Stacoviak:** It's better that way.

**Jerod Santo:** Okay. So is it basically pinging the Docker Hub? Or is it just saying "Do a Docker service update --quiet."

**Gerhard Lazu:** And --image.

**Jerod Santo:** Right.

**Gerhard Lazu:** --image specifies an image. If the sha of the image changes, it will pull the new image and update the service. You know how in Docker you have images, and images have tags? We always track latest. But latest is just a tag that points to a sha, which is similar to a Git sha that points to a unique commit.

So the latest tag, when it points to a new sha, then the Docker daemon knows, "Hang on, there's actually a new image", even though the tag hasn't changed. But the tag is pointing to a new image. It's almost like the Master branch, which changes as you have new commits. The latest tag in Docker is exactly the same - it points to a place which changes over time. And when the CI updates the latest tag for the Changelog image, this loop and this Docker Service Update knows that it has to pull the new image down and update the service, which uses the image.

**Jerod Santo:** During that time period at which it's pulling down the new image and then starting the new app container, do we have two app containers running simultaneously - the old one and the new one?

**Gerhard Lazu:** That's right.

**Jerod Santo:** So who answers the phone when somebody calls?

**Gerhard Lazu:** \[00:44:04.02\] Internally in Docker there is an IP, which is almost like a gateway, and any request coming in goes to the live app... And the live app is the one that's healthy and has passed all the health checks. The new app, as it starts up, is not ready to serve requests. So it needs to come up in the health check checks, port 4000, whether the response is a 200 response. When the new app container - when that health check passes, the service knows to update the internal rooting to point to the new app instance. It's all automatic, it's all managed by Docker, we don't have to do anything.

We used to have lots of scripting that used to make this switch for us, which is still in the old infrastructure repository, where all this was kept. It was complicated, it was custom... We're not using that anymore; we're just delegating to the Docker service update, which manages all this lifecycle for us.

**Adam Stacoviak:** We're just smart, because we're getting it for free, where we've had to write that ourselves before, in Ansible/Concourse land.

**Gerhard Lazu:** Exactly, exactly. Now we don't have to worry about that, it's all managed for us. We would do something similar if we use another system. It's a property that's very desirable. This blue-green deploying, never take production down until the new version is ready is very desirable. We had it for a long time now, even though we did it ourselves, which was difficult to understand, difficult to maintain, and because it didn't change, things didn't go wrong, but if things started going wrong, it will have been this code that was written a couple years ago... And it is what it is.

**Jerod Santo:** So now if it doesn't go right, instead of calling Gerhard, we call Solomon Hykes -- or I guess he's moved on; we'd call Docker and say "What the heck, this health check isn't working/this Docker Service Update is failing." Is that the proper escalation now, when we have issues, is "Hm. Blame Docker"?

**Gerhard Lazu:** I think, to a degree, yes. That's the same thing, like -- for example, when something doesn't work with Linode, what do we do? We need to call Linode. Or if something doesn't work with Fastly, we call Fastly.

**Jerod Santo:** Right.

**Gerhard Lazu:** I suppose that's the trade-off of having someone else do something for you, but I think it's a price worth paying, knowing that you don't have to deal with any of the complexities that go into one thing. And even though it might look very simple -- I mean, if you look at some of our other scripts that we used, it's not that simple, and a lot of things can go wrong. So it's a nice thing to delegate.

**Jerod Santo:** Yes, absolutely. Anytime we can pass the buck, let's pass it right one. One last question while we're down here in the mucky-muck of this updater - how does the circumstance work in which a slightly more complicated push, which also has some database migrations in it? How does the system do the update AND some sort of manipulation of the database which is on the block storage?

**Gerhard Lazu:** Right. When the new application instance starts, it will run the database migration. And this is not optional, it always does it. If the database migration makes the database incompatible with the running application (the lime application), the lime application -- it won't crash, but parts of it may stop working.

**Jerod Santo:** Right.

**Gerhard Lazu:** \[00:47:39.20\] But this being Erlang and being Elixir, it's just basically some processes will start crashing inside the Erlang VM. When it comes to, for example -- I think this is mostly in the admin area, because most of the website is static, and what the users see once we generate that static content, it doesn't go to the database. So this is definitely one way of, let's say, screwing production. If you have a bad migration or something that does a breaking change to the database, it would take your production down.

But let me ask you this question - what would the alternative be?

**Jerod Santo:** The alternative would be if I have a bad migration, it would never promote that app container, except that we would have to have a separate database instance or something, right?

**Gerhard Lazu:** Yup.

**Jerod Santo:** Because you've already migrated the database, so the app container doesn't really matter, because the database is in an unknown state. I guess the alternative would be auto-rollback...? Things get complicated quickly.

**Gerhard Lazu:** I know that, and they get very complicated, and especially with a system like--

**Jerod Santo:** Which is why--

**Gerhard Lazu:** Exactly, why we don't do that.

**Jerod Santo:** Exactly. \[laughs\]

**Gerhard Lazu:** So it's something to be aware of. It's something that, if it happens, it's bad luck, but you always need to be mindful of this thing... And the alternatives are very costly - both time-wise, both effort-wise, and do you need that complexity?

As I was mentioning earlier, I work on the RabbitMQ team, where distributed stateful systems is the bread and the butter of what we do. Any sort of rolling migrations are extremely, extremely complicated. That's why - how do you, for example, upgrade a RabbitMQ cluster? Most of the time, rolling upgrades work. But when we introduce breaking changes at the protocol level or at a scheme level, we recommend to deploy something on the side, like blue-green deploys. If we do that with something like PostgreSQL, image setting up a database copy, what happens with the rights that arrive to the data, which is like with databases running in production - how do you basically move them to this new database instance? PostgreSQL is a single instance, not a cluster, which complicates things even further... So it's a complicated problem, which I don't think we need to solve, to be honest.

**Break:** \[00:50:31.16\]

**Adam Stacoviak:** We didn't go deep enough into monitoring in the last segment, so let's do that now. We have Rollbar, we have Pingdom, and this new thing I didn't even know existed until literally minutes ago... So if you look at netdata.changelog.com, this is visibility into our CPU, our RAM, our load - all sorts of interesting stuff. So what is netdata? And kind of tail off the monitoring piece of how we run Changelog.

**Gerhard Lazu:** \[00:51:48.20\] Netdata is definitely a component which we didn't mention; it gives us visibility into system metrics, so what happens on the host, on the Linode VM that runs the Changelog application, the database and all the other components that make up Changelog. I would have to mention logs, as well; logs and metrics - they kind of go hand in hand.

There's one more component, which would definitely be the application exceptions, which - I already mentioned Rollbar. By the way, we mentioned Rollbar to track errors, as well - application errors, application exceptions - and also to track deploys. So they kind of go together.

**Adam Stacoviak:** Because if there's code in a deploy that's bad, you wanna track it back to an error etc.

**Gerhard Lazu:** Exactly. And you'd want to see how often those errors happen, when they started happening, in which deploy it was introduced, and so on and so forth... And Rollbar is really good at giving you that visibility.

When it comes to logs and metrics - we mentioned this even two years ago - we aggregate all the logs from the entire infrastructure and we ship them to Papertrail. Papertrail now is together with Pingdom; they're part of SolarWinds, SolarWinds Cloud - they're like this nice observability stack.

So the logs, we ship them to Papertrail via Logspout, and metrics we delegated to netdata, which is this amazing open source product, free - we love free; it's completely free, completely amazing, in that it gives you per-second metrics. There are very few metric monitoring systems that give you that level of visibility... And not only we see the CPU, the network - we can see for example TCP sockets. And when we first introduced IPv6, the one thing which we notices - this was on the old stack, by the way - we had a TCP socket leak, and it's something which netdata made very easy to see.

If you go into the issue - which is, again, public - where we discuss this IPv6 support, when we first introduced this, there was a leak; Raul, that requested the feature - he could see it, and he could mention it, and we could discuss around metrics. So we see very detailed system metrics, and we can also see per-container metrics. We can see, for example, the application container - how much CPU it's using, how much memory it's using... And it's all real-time, it's all per-second. That means that we have real-time visibility, but for a limited duration of time.

Currently, we only display metrics for the last hour, and that's it. The reason why we do this is because the metrics are stored in memory. And even though we could give it more memory, we limit it to this one hour worth of metrics.

**Jerod Santo:** Because we're low on memory...

**Gerhard Lazu:** No, we're not low on memory. We could definitely--

**Jerod Santo:** \[laughs\] No, I know we aren't. That's why I say it that way.

**Gerhard Lazu:** \[laughs\] So we're definitely not low on memory. We have lots and lots of memory; bucket-loads of memory. But the more we store in netdata, we could do with do with storing in another system, which was built for historical metrics, which is Prometheus. So Prometheus and Grafana - they also form part of an observability stack which I'm very excited about, and it's something which I'm hoping that we'll be able to do in the future, which would give us a long-term visibility and we'll see how things change over time in the entire Changelog stack.

**Jerod Santo:** So this netdata - is it just running in another container on the host?

**Gerhard Lazu:** Yes.

**Jerod Santo:** So if we eventually said "Okay, it's time for Prometheus and Grafana", would you just set those up as other containers, on the host?

**Gerhard Lazu:** That's correct, yes.

**Jerod Santo:** I'm learning. I'm learning things. That makes sense. Okay, long-term metrics coming out of Prometheus is a nice-to-have down the road... In the blog post you also mentioned business metrics. I'm not familiar with these tools... I know we did a show on Prometheus probably three years ago, but that doesn't mean I remember any of it, and I'm here to tell you I don't... So while we're talking about business metrics, how could we use this beyond just netdata, but longer than a day?

**Gerhard Lazu:** \[00:56:11.03\] For example, let's say that you wanted to track how many times an episode was downloaded, and when it was downloaded. This is something that we could track, downloads - it could be like a rate of episodes. We could track them over time, and we can aggregate all downloads across all episodes. And that's obviously just one type of metric that we could have.

We could also track when the users stop listening, for example, to mp3 files; how much of them they download. We could start all these metrics alongside everything else in a system like Prometheus, and it would use Grafana to visualize those metrics. So literally anything that you wanna track long-term, we could store it in Prometheus' metric storage system, and we could visualize it using Grafana, which is a metrics visualization system.

**Jerod Santo:** So these are metrics that we care about, obviously, and we are currently doing that work, but we are doing it in an application. So... Is it easier in Prometheus than the way that I'm doing it with my Elixir codes?

**Gerhard Lazu:** I think it would be a matter of delegating that responsibility to something that was built for metrics. Prometheus, for example, is suited for metrics like high-frequency metrics, lots and lots of metrics, that continuously change. We could also use something like InfluxDB, for example, which is another system, also for storing metrics. This has a slightly different target audience, and that might be better suited for business metrics. That has maybe queries which are -- it's like a SQL query; you can run SQL queries, which I think would be better-suited for the business metrics. But I'm pretty sure that we can make Prometheus work for us for both types of metrics, rather than having these separate metrics systems running.

I think with InfluxDB only the core is free. I think there's like a paid version... I'm not sure on that, because I've only used it a long time ago, before it went all commercial. This was like pre-version 1.0 era.

I do use Prometheus every day. Actually, all the RabbitMQ metrics - there's a new feature coming out, which will be using Prometheus heavily in Grafana, and it's excellent for those types of metrics. System metrics... And the Phoenix application being an Erlang application, there's a lot of stuff that we could use for Changelog itself, which maybe we will need that level of detail, but it's nice to know that we could do it if we wanted to. And it's already been done for us, we don't have to reinvent the wheel; we can just reuse something in this context.

**Jerod Santo:** So for now I'm just dumping everything right into Postgres, and basically using good old SQL to slice and dice it into things that we wanna see. That being said, it's very manual. If we wanna have a new view -- in fact, I just added a view today, a graph of all episodes' first seven days reach. Basically, the launch data reach for episodes on a graph... And it's like, that's a feature that I had to develop. I would love to have a tool -- maybe similar to Metabase, Adam, where we're dumping the information into some sort of raw storage, and then it's sliceable and diceable in ways that are more ad-hoc, or more like a reporting tool. is that Prometheus, or is that Grafana, or is that neither of those?

**Gerhard Lazu:** \[00:59:55.24\] Grafana would be able to visualize metrics, and it has this concept of data sources. So you could, for example, use Grafana with InfluxDB, with Prometheus. It even supports Stackdriver, which is a Google product. So it supports these different metric storage systems. One of them is Prometheus.

I would need to take a closer look at all your metrics. I am very familiar with Prometheus, and I would know what it can and it can't do that well. Most metrics -- I haven't come across a metric that Prometheus can't store or you can't use it for. Maybe, for example, InfluxDB would be more efficient; now, do we need that? I don't know. Maybe. I would definitely need to take a closer look at the metrics. But what I do know for sure is that if you are writing code that manages metrics, you would be better served using a system that was built for that, and maybe writing code that is specific to your business needs.

In your case, for example those ID3 tags and those FFmpeg, I would be so happy if we could maybe switch to object storage, and not use block storage for that type of media, and for that type of static content, rather than maybe spend the time doing metrics-related work.

**Jerod Santo:** Sure.

**Adam Stacoviak:** Yeah, it's a bummer to have you build out features that could potentially...

**Jerod Santo:** Serve more people than just us.

**Adam Stacoviak:** ...serve more than just us, but also theoretically come at free.

**Jerod Santo:** Right.

**Adam Stacoviak:** Because if as a user I have questions and I wanna pull the data source without having to know SQL, or have access to the server, and I could do it just in the data source itself, it gives us more flexibility. And plus, as Gerhard just mentioned, it frees you out to do more high-value things.

**Gerhard Lazu:** Yeah, exactly. One thing which I would like to mention, very relevant - actually, two things... Grafana 6 came out, and it has this new, amazing feature. When I say "came out", it came out in February, so it's been two months out. It has this new feature where it allows you to explore metrics. You were saying about having to write these queries or having to write this code to see metrics in a different way. Well, Grafana has this feature which allows you to explore metrics and play with metrics, just to see what data do you have, what metrics you have, and which way you can combine them. So that's the one thing which is very cool.

Obviously, you can build dashboards, and dashboards are more static. We can give a couple of examples, we can link them in the show notes... But the other feature which I'm very excited about is Loki. Loki is this new -- it's part of the same stack, Grafana Labs, and it's for log aggregation. All of a sudden, we can ship our logs to Loki, which manages them, and it shows them in the context of the metrics.

For example, if we see our database is running slow, or our application is running slow or is crashing, or whatever may happen, we not only can see the metrics that correspond to those misbehaviors, but we can also see the logs, which will give us more insight. This combination is great to have.

Not to mention, now that you have the business metrics in the same system, you can overlay the business metrics alongside your infrastructure metrics, or application metrics, and your application logs. So you can see the impact that the database being down, for example, if it was to happen, what impact does that have on the audience, or in shows, or whatever it may be. And I don't mean just short-term, I mean long-term impact.

**Jerod Santo:** Yeah. Maybe ignorance is bliss though, because once I find out what that bug is actually costing us in terms of listeners, I might want to find a new career.

**Adam Stacoviak:** \[01:04:03.18\] Oh, boy...

**Jerod Santo:** Just kidding. That does sound pretty cool. So there's some other things that now I'm wanting you to help us -- actually, I have a good first test case for Prometheus (we can talk about that maybe offline) which is a simple metric, a business metric, that I'm not tracking yet, and I wanted to track, but I do not wanna add it to our current Postgres setup... That might be a good one for Prometheus.

What else, as we look to the future of Changelog.com...? We made big strides, we simplified, we've switched things out, we've decouples a little bit from certain aspects of our stack... There's a lot that we didn't do, and one thing that always comes up and what Adam asks is "Why not Kubernetes?" We asked this last time around... Let's go ahead and ask it again...

**Adam Stacoviak:** Let me go ahead and do it.

**Jerod Santo:** Okay, go ahead.

**Adam Stacoviak:** Why not Kubernetes? \[laughs\]

**Gerhard Lazu:** Why Kubernetes?

**Jerod Santo:** Why not?

**Adam Stacoviak:** Why not?

**Gerhard Lazu:** \[laughs\] We could be here all day and all night, right? \[laughter\] Okay, so the simple answer to that is that Kubernetes two years ago was hard. Kubernetes only recently is -- Linode, for example, doesn't offer managed Kubernetes yet, but it's almost there. They're very close to having managed Kubernetes. What that means for us is that we get to use it; we don't get to worry about upgrades, about when things fail, and so on and so forth.

Digital Ocean, for example - it already has a managed Kubernetes offering, and that's great... So that's something maybe worth considering. But what we definitely do not want to do is worry about our Kubernetes deployment. We just want to use it. Two years ago we would have to go to Google or some big vendor to get that. Nowadays, Digital Ocean, Linode very shortly, and others, have it. Which is great for us.

**Adam Stacoviak:** So managing Kubernetes yourself is a very difficult thing, and requires dedicated resources. Is that why we said no to that?

**Gerhard Lazu:** Oh, yes. Oh, yes. And the learning curve is very steep, and things are done in a certain way... It's just another layer of abstraction. It's almost like -- we were using Concourse, which is way too complex for what we needed, while Circle CI was good enough.

As an analogy, we're using Docker, for example, and Docker Swarm, which is good enough for what we need. Kubernetes would be nicer. And because we have these managed Kubernetes offerings and managed Kubernetes services, it's something that we could definitely benefit.

**Adam Stacoviak:** So if you're gonna use Kubernetes though, you wanna go in a managed scenario, rather than trying to run it yourself, in most cases...

**Gerhard Lazu:** Oh, yes.

**Adam Stacoviak:** ...unless you're extremely rich in terms of the business, and endless resources.

**Gerhard Lazu:** Yes, and you need something even more specific. For example you need to build custom Kubernetes resources, which is a world of its own. Very complicated. But if that's what you need, that's what you need. In our case, we don't need that.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** Now, I have a secret to reveal. I've kept some of the best parts for last.

**Adam Stacoviak:** Oh, please. Share them.

**Jerod Santo:** I'm excited.

**Gerhard Lazu:** With Linode, before, two years ago, we were using Ubuntu. And because we were using Ubuntu at the time, we had to manage Docker ourselves. And that was a pain. In this infrastructure, we're using CoreOS, which is container-less. What that means is that that comes with Docker pre-installed. It has this nice feature of auto-updates, which we don't use - we don't need to go into the details. By the way, all these are in our repository. We have all the reasons, we have discussions with the Linode team, why we didn't do it, and other alternatives, but the point is - we don't manage Docker. Docker is a managed thing for us, and that's very nice. Any updates, anything like that, we don't have to worry about. We don't even have to worry about installing it. On Ubuntu, the first thing if you wanna use Docker, you have to install it. On CoreOS, we don't have to worry about that.

\[01:08:05.25\] So because we no longer need to manage Docker, all the things that we used to do in the old infrastructure, we no longer have to do. So a lot of that code is no longer relevant in the new world, which is really nice.

Because we are running Docker in Swarm mode, we have a single instance of Docker, and we should have more, for sure... And to do that, we need to change a couple of things. For example, right now when we provision the block storage in Linodes, we do that using Terraform. We use Terraform to manage everything. I didn't mention that earlier on, but it's a nice little thing to have, and it's very simple as well. We love that.

So rather than having Terraform manage these block storage volumes, we would need to use a plugin for Docker, which by the way, Linode definitely has, and wrote for their users; that was very nice to see... Which would allow us, for example, to use Docker Swarm - we have multiple nodes - and as applications or as containers move from VM to VM, the volumes would move with it, which is very nice. And all this really is the core that sits in the managed Kubernetes wrapper. Because Kubernetes -- there are all these components which give you higher-level abstractions to something that runs containers, and in this case it's Docker. So you need Docker, and okay, you can replace it with something else, but you need something that runs those containers. Then you can use Kubernetes, that gives you a high-level API, that allows you to define things in a way that we do, but a bit more complex, where you can define the entire stack and what it means for all these containers to communicate in all the networks, and all the services, as I was mentioning earlier.

**Adam Stacoviak:** Which project is that, from Linode? Is that Kube Linode, or is that Linode Cloud Controller Manager?

**Gerhard Lazu:** I'm not sure... Let me see. There's actually developers.linode.com/kubernetes, and you have the Linode CLI which you can use to create a Kubernetes cluster.

**Adam Stacoviak:** That's what I was looking for. Okay.

**Gerhard Lazu:** ...which underneath - it just deploys the type of image that we use for our VM, but it does a couple more things. It sets, for example, the plugin that manages the block storage. It has other plugins or integrations with the Kubernetes components that integrate, for example, with the NodeBalancers. So we can define more through the Kubernetes API, and manage less via Terraform. So in a way, this is a stepping stone to managing Kubernetes, but it's a smaller step rather than a bigger one, which would have taken more.

**Jerod Santo:** Love it.

**Adam Stacoviak:** Yeah. Getting there sooner rather than later. I mean, the 2016 infrastructure, and now we're finally on Kubernetes... Great things, I guess. Sky's the limit now.

**Gerhard Lazu:** Yup, pretty much.

**Adam Stacoviak:** Maybe on the closing side of things, where are we lacking? We've talked about the future and where we're trying to go; obviously, we're not done... Typical software - it's never really done, is it? We're always improving. But where are we currently not as optimized? It may be an SSL, or HTTPS, things like that. Where are we lacking, that we could be improving?

**Gerhard Lazu:** \[01:11:37.25\] One thing which I'm constantly thinking about is what are the things that I have to spend time on, that is not automated? And one of those things is the stateful services which need updating. For example, PostgreSQL, to update it, it takes a lot of effort currently to do that. And when I say a lot of effort, I mean a couple of hours; I don't mean like days. But still, it's effort that we should not spend.

If you can define how the update should happen and what are the rules for the update, and we have a cluster, so we can have multiple PostgreSQL instances, and we can have automatic rolling upgrades, that'd be very nice to have. And there's PostgreSQL, there's NGINX, there's all these components which are auxiliary to the app, but are also part of the Changelog stack. So that's one thing which I would definitely like to improve, because it's still a manual process - we build Docker images, and we would like to automate that aspect.

The other one is HTTPs, for sure, and IPv6. We are almost there with IPv6. We have it enabled on Linode, we have the DNS entries; we also have it enabled on the CDN, so Fastly; we are already using their IPv6 feature. There are still some links in the blogs, for example, we have some images that we load them from S3, and we are not using the IPv6 URLs, which we should do... But that's a small thing.

A slightly related thing is HTTPS. And I say "slightly related", because you want IPv6, you want to use HTTP/2, and to have HTTP/2 you need to have HTTPs; everything needs to be encrypted. To do that, we currently have a certificate, but we manually have to renew, we manually have to install... When I say "manually", we just have to put it in a LastPass with all of the credentials, and then when you run Terraform, it just gets set up, configured on the NodeBalancer on the Linode side.

It would be great if we could use LetsEncrypt, which I'm a big fan of, that gives you free SSL certificates. It's a great community effort and it's a great industry effort, and it's something that as open source champions, we should definitely be using. It's one less thing to worry about - "Does our certificate run out?" It doesn't, by the way - we don't have to worry about that until 2020 - but it would be nice to have this automated SSL certificates for us via LetsEncrypt.

**Adam Stacoviak:** You know, we could just throw the old SSL away and move away before 2020.

**Gerhard Lazu:** For sure.

**Adam Stacoviak:** We don't have to wait till June. Just saying.

**Gerhard Lazu:** I know, I know. \[laughter\] But we need to set up the integration with LetsEncrypt, so how do we use a LetsEncrypt certificate -- and it would be nice if... For example, Linode has this feature in their NodeBalancers. This is where, for example, Linode can do the integration for us, and obviously for all their customers, and then everyone gets to benefit.

**Adam Stacoviak:** So is that in place now, or is that being worked on by Linode?

**Gerhard Lazu:** Well, this was a feature request... I just made it live, in this show.

**Adam Stacoviak:** There you go. \[laughter\]

**Jerod Santo:** Do you hear us, Linode?

**Adam Stacoviak:** I'm sure Marques is listening.

**Gerhard Lazu:** Yeah, Marques Johansson, that's right.

**Adam Stacoviak:** Yeah, that's him. We've had good conversations with him. He's a great advocate inside of Linode for us as well. Listener of the show, lover of what we do, and then obviously wants to see us thrive, so... That's awesome.

**Gerhard Lazu:** Yup. I have to say a lot of the questions and a lot of the things that we had to work out through the Linode API, and by using the integration which he helped build a lot of these components, we were in constant touch with him and he was a great, great Linode representative and Linode developer to help us with a lot of things... And obviously, improve things for Linode as well, and all other users.

**Adam Stacoviak:** So SSL being improved, H2 being used... We've got some things we've gotta improve upon... What about CDN? I know we're kind of late in the conversation, but we had some weird slowdowns; is that worth at all touching on? I mean, a lot of work went into that to make it faster, and maybe it seemed like it should have been more straightforward, but it wasn't...

**Gerhard Lazu:** \[01:16:10.12\] Are you referring to the 503s?

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** That was very low-level in the networking stack. It was like a layer 2, layer 3 problem, which is very low-level in how rooting works, and how packets get lost, and roots aren't updated correctly, and stuff like that. And that was in a period when we were transitioning between infrastructures, so this was happening still in our old infrastructure... And I think since our new infrastructure, the problems mostly went away. But now that you've mentioned that, Adam, one thing which I would like us to do - and this is somewhere where we somewhat disagree with Jerod, is to catch more by the CDN, so that if the VM is down, for example, or if Linode was to have an issue in the data center, our static content that was cached would still be served, so Changelog would not go down.

**Adam Stacoviak:** As you said too, most of the stuff we do is somewhat static, too. I mean, once it's out there, it's sort of done... Unless there's an update, which is fairly infrequent.

**Jerod Santo:** I do not disagree that we should do that. I disagree -- how do I say it...? I realize the costs of making that change, versus the value in doing other things, which are higher-priority. I agree with you that that should happen. It requires us to change the way that we're doing some of our programming in order to do that, to go completely behind the CDN. So that's why I've delayed on it.

In principle, I'm with you. Even on speed. I would love to have all of our content delivered - especially our content that is mostly static - upon read. I mean, we write it, and then it's published, and then we are caching things in the app; but getting them into the CDN - I agree with you completely. That being said, the way that the app is built and the way that we like to keep things simple with the ability to customize responses for signed-in users, it just requires some heavy-lifting to enable to make that particular change... So there's just lower-hanging fruit - that's my contention.

**Gerhard Lazu:** This is a great example, Jerod, of understanding the landscape really well, and knowing which steps are worth taking. I think the CDN is very similar to my Kubernetes, in that I understand the value, I know that we should do it, but there are a couple of other steps - smaller steps, easier steps - that we should take first, and I think we have been, with the CDN. Things have been improving, as Adam was mentioning. We're not there yet; not for not wanting it, but we understand the complexity that goes with that change.

**Jerod Santo:** And this is the value of having a team, and being a team, and working together with people who have different domain expertise or technology expertise - we have a dialogue, and we have a push and a pull, and we can disagree, and we can state our cases, and we move forward together with our collective knowledge and experience, versus just making all the decisions yourself... Which is why I reached out to you in the first place, Gerhard, a couple years ago. I was like, "This journey would be a lot better if I had somebody with me who had more expertise in this scenario." Yes, I could trudge through and figure it out; it wouldn't be anywhere near as good, and it would have taken way longer to get deployed. But the long-term benefits - we bring other things to the team, and we build and grow together.

As a person who works alone a lot, it's just an enjoyable aspect of Changelog, that I think is on example here with some of our minor disagreements around "What is the higher priority?" Adam, you have your opinions on what we should be doing next, and these are things that we discuss along the way.

**Adam Stacoviak:** \[01:19:59.05\] What's interesting too is I've learned so much more about deployment where it seems like it's fairly easy - "I'll just put the code on the server and there you go. It runs", right? It's so much more behind the scenes to having performant production code, that's monitored, that has failover, have all these things that are concerns for a modern app, that not everybody really deeply understands or considers. And I thought "Deploying is pretty easy...", but clearly, it's not. It's very sophisticated.

**Gerhard Lazu:** I think that's the way it should be for most users of a system, and for most developers... But someone somewhere needs to worry and needs to solve the hard problems. And the more experience you gain in a certain area, the more you realize "Well, actually this is a lot more complicated than meets the eye", and if you don't like that type of work, it's really hard to do good work and to solve tough problems for users. That's why some systems fail in weird and wonderful ways because they have a lot of sharp edges. People haven't thought long enough or hard enough, or they haven't done it the way it needs to be done for things to be easy.

When we consume, for example, Linode services or Google services via an API or AWS, we say "Oh, that's easy", but there's an immense amount of work that goes behind the scenes, that most users aren't aware of. And that's the way it should be.

**Adam Stacoviak:** Yeah. How about this - we'll turn it back on the listening audience too, because I'm sure there's many more opinions out there that we're not hearing... So if you've heard this conversation and you've read this blog post, and you've examined our source code, and have trudged through issues and different PRs, and you've got some insights that you see that we can be taking different steps, help us plot out a roadmap. Join the community, Changelog.com/community, \#dev is where things are happening; \#sre is there, I just learned about that one today, that's pretty interesting. So if you wanna chat with us or share feedback on new tooling, new services that we should put on our roadmap, please reach out.

As with all things, we fly by the mantra of "Slow and steady wins the race", so we're in no rush to get there. We launched our latest platform 2016, so we've improved upon it every year since then; thank you to Gerhard and Jerod's hard word for making that possible, but -- we invite you, the community, to share your thoughts as well... So join us in Slack, join us in issues on GitHub, or even discussions on podcasts. It's pretty easy.

**Gerhard Lazu:** I would really like that too, I have to say. I would really enjoy to hear some feedback from the users, having put all this work out and having made everything available. I would really appreciate knowing what you think, having different viewpoints... I always want to learn, and I'm sure there are better ways or different ways of doing things that I would like to know about.

**Adam Stacoviak:** Yeah, absolutely. And all are welcome. Please come. As Jerod mentioned, the three free's - go to Changelog.com and sign up for free, get in Slack for free, and hang out in \#dev for free. It's all free around here. Enjoy the party. We love it.

Gerhard, Jerod, thank you so much for all your hard work on Changelog.com. It's tremendous how far we've come. I can't even believe we were once on Tumblr. Wow, that's crazy! And today - such a different world. It just shows that we're true to our motto, "Slow and steady wins the race", so keep pushing forward. Thanks, fellas. Great show.

**Jerod Santo:** Thanks, Gerhard.

**Gerhard Lazu:** Thank you both, thank you. Bye!
