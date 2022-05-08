**Gerhard Lazu:** So we talked in episode 50 with Adam and Jerod about migrating changelog.com from Kubernetes, LKE specifically, to Fly. And we have Mark from Fly joining us today to ensure that I'm holding it right. Welcome, Mark.

**Mark Ericksen:** Thanks. Glad to be here.

**Gerhard Lazu:** Do you know what it means, holding it right?

**Mark Ericksen:** It sounds like it's a tool, and am I doing this right? Am I going to hurt myself? Yeah, that's what it means to me.

**Gerhard Lazu:** We have plenty of experience of holding those tools wrong, starting with Fastly, the CDN; sometimes Kubernetes... So we just tend to hold them wrong, or I tend to hold them wrong, and I want to make sure that I'm holding it right. So my expectation is that after today's conversation with you, I will be holding Fly, Elixir and the combination much, much better than we were doing with Kubernetes and Elixir. So let's see how that works out in practice.

**Mark Ericksen:** Awesome.

**Gerhard Lazu:** So how long have you been involved with Elixir applications, Mark?

**Mark Ericksen:** About six years.

**Gerhard Lazu:** Okay. And what did you do before that? What did you do before Elixir?

**Mark Ericksen:** I started programming way long ago, when I was younger, but really, most recently, before Elixir I was in the Ruby world, and doing Ruby on Rails development. And prior to that, I was in C\#, .NET. And then when I learned Rails, it was like, "Oh, my gosh, this is such a better way to do web development than what was even pre-MVC with .NET." So I fell in love with Rails. I was like, "That's what I want to do." And then, eventually, I discovered Elixir, and that's really captured my attention, like "Oh, my gosh, this is the way I want to be doing development."

**Gerhard Lazu:** Nice.

**Mark Ericksen:** \[04:20\] And I made that switch.

**Gerhard Lazu:** Okay. So when you were doing Ruby on Rails, where did you use to deploy your applications? How did that work?

**Mark Ericksen:** Yeah, we had gone through multiple different jobs. Sometimes the companies were large enough where we had our own operations teams, and they managed all of that. It was completely invisible to me. So I was just among the pool of developers, right? And then other places, much smaller companies, development and management of those servers fell to our responsibility, and we would have problems where sometimes we would be on a server, and the server would just die, and we didn't really know why... And so you'd restart it. And eventually, it was like, "You know, it'll just be easier if we went to Heroku." Even though it was more expensive, it was moving the app to run on Heroku when we had Rails, just because we didn't have the platform experience for maintaining that.

**Gerhard Lazu:** Okay. So self-hosted on bare-metal or VMs for a while, Capistrano maybe...

**Mark Ericksen:** Yup. Yup.

**Gerhard Lazu:** That was there, I remember. Mina, Puppet, Chef... That was used as well for deployment for a while, and a couple of others. Ansible came along... Docker? How was your Docker with Ruby and Rails? Did you have such a phase?

**Mark Ericksen:** We never really went that way.

**Gerhard Lazu:** Okay. Interesting.

**Mark Ericksen:** It was more of, we were just deploying the code up and starting up like that. Yeah.

**Gerhard Lazu:** And then Heroku, the huge PaaS movement - that changed a lot of things. I remember when it came long and I resisted, and I resisted until Cloud Foundry got me, eventually, so I got the buildpacks experience in Heroku. And then Elixir came along. And I'm not sure whether the experience is better now than it was seven, eight years ago, of running Erlang apps, BEAM VM apps, specifically on Heroku. But I remember the Elixir buildpack and the Erlang buildpack were not very good, again, seven, eight years ago. Did you deploy any Elixir apps on Heroku?

**Mark Ericksen:** I never did. No.

**Gerhard Lazu:** Okay. So I think you've saved yourself a lot of pain, because I think we were both around the same time doing this, and it was just not very nice. And then you went to Elixir, and then what did you do then? Did you continue with Heroku or -- actually, no. Sorry. You just said that you didn't. So what did you do when you had Elixir apps? Where would you deploy them? How would you run them?

**Mark Ericksen:** Yeah. So I was at a company where we had quite a few Ruby apps that were still Ruby on Rails, and we were starting a migration to Elixir. So we had multiple large services. It wasn't like the microservices, but they were services with single responsibilities. And so we started to -- initially, they were just on AWS EC2 instances that we were just managing ourselves, and then it was, "You know, we could do better. It would be easier to manage this if it was in something like Kubernetes." So we actually went with AWS EC2--

**Gerhard Lazu:** EKS?

**Mark Ericksen:** Yes. So we actually went with the Amazon EKS as the managed Kubernetes server, which was super-helpful. So we didn't have to deal with that, but we still had to deal with, "Okay, now we have these Ruby apps and these Elixir apps." So yes, we turned to Docker for those, getting those all containerized, and then being able to have the services be expressed and defined to have these different apps talk to each other in our Kubernetes cluster.

**Gerhard Lazu:** Okay. I'm curious to know how much of those operational concerns, or the production runtime concerns leaked into how you developed apps. So when you had Elixir, did you run a local Kubernetes cluster? How do you make sure that it works in production before you go to production? I mean, did you have such problems?

**Mark Ericksen:** \[08:00\] That's a good question. So I was the one who kind of introduced Kubernetes at that company. So I was the one who went through Minikube, figuring it out, went through several books and trying to understand it all... And once I got it, I was like, "Okay, this is how we can do this."

I think it does influence how we build our apps. It can. Sometimes I don't think it's even necessarily a conscious decision, like "Oh, this will be an easier way to do it." It's just, if you're aware of how it's being deployed, you might make choices. It's kind of in the background of your mind.

**Gerhard Lazu:** I'm also thinking about the specific versions that you use, because if you develop on a Mac, and I think the majority does, on Mac OS, you install Erlang, for an Elixir application - which version do you install? How do you install it? How does it link against the system libraries? OpenSSL - how do you solve that problem? Do you even test with OpenSSL in development, even configure that? And if you do, how does that version of OpenSSL correspond to the production version? And then you have a database, or maybe you have other systems. And before you know it, you have like this huge setup that every single developer has to figure out on their machine, and it'll be different maybe even between other developers. You have different Mac OS versions... Maybe someone wants to develop on Linux, and before you know it, you have like this sprawl, like these different ways of developing things. And we all know that if it works on your machine, it doesn't mean it works, right?

**Mark Ericksen:** It's true.

**Gerhard Lazu:** So how do you handle that problem with the version of PostgreSQL? Because I'm imagining there will be a database with a version of Erlang when you work locally, versus when it runs in production. Did you have any such issues?

**Mark Ericksen:** You know, you bring up Postgres, right? Certain features are available in different versions of Postgres that aren't available in others.

**Gerhard Lazu:** Yeah.

**Mark Ericksen:** And it is a choice you have to make as a team. And really, I think, the team has to decide what do we value, what do we want to say is a minimum requirement. So we're all on this version of Elixir. We're all on this version of Ruby. And yeah, if you're on a Mac, then sometimes the OpenSSL issue becomes an issue when the macOS gets updated. Myself, I run on Linux. And so, yeah, I was that guy who was like the one on Linux who was creating that little friction there.

**Gerhard Lazu:** And you would say to everyone, "Everybody run Linux", and no one would listen, and you'd get so frustrated... "But it's so much better...!"

**Mark Ericksen:** And hey, it's going to be running on Linux and the server, right?

**Gerhard Lazu:** Exactly. And they would ask you, "Which Linux version?" They'd go, "Oh, you know what? It doesn't matter. It's a different operating system in production." All it matters is Linux. Different kernel version - let's ignore that part. It's Linux. That's what we care about. \[laughs\]

**Mark Ericksen:** Yeah. I'm not running CentOS on my desktop, right?

**Gerhard Lazu:** Yeah. Okay. By the way, what do you run on your desktop? I'm very curious.

**Mark Ericksen:** It's in ArchLinux-based distro.

**Gerhard Lazu:** Okay. How do you install Erlang?

**Mark Ericksen:** Erlang? I use a tool called ASDF. It is a version manager for lots of different tools. So I use it to manage my Erlang version, my Elixir version... It'll also do Node and Ruby, and it can even do things like Postgres. And what I like about that is there is a file that it generates called a .tool-versions, and that records the different versions of the tools that ASDF is using. And so some people can actually check that into a project. So you can create a global one that might sit in your home directory, or a local one that's specific to a project, which I really like.

So as I change directories around, and "Oh, I'm going to be going over here to this older Ruby project", as I change into that, it activates the older version of Ruby that's appropriate for that particular project. And the same thing when I'm going between different Elixir applications. I haven't upgraded this one yet. It's on an older version of OTP, the Erlang version and Elixir. So I like that. That's my preference.

**Gerhard Lazu:** \[11:57\] Okay. I have never used ASDF, but I'm curious now... I'm very curious how it compares to NixOS, which is something that I've recently picked up on my Linux host. I don't use it, because my developing is spread across number of machines. I use an iMac, I use a MacBook Pro, and I use this Linux host, which is a fairly new one. I love that it's fanless, no fans. Even the MacBook Pro has fans, and the iMac definitely has fans. I can tell. Even if it's a Pro - I mean, well, they can get really loud sometimes. And I'm curious to see how ASDF works, because what I used to do, and even now for Changelog, we have a makefile, and the makefile resolves a bunch of dependencies, especially from an operational perspective. So kubectl we're using, flyctl we're using now... So it installs a specific version locally in the .BIN directory, the .BIN being local to whichever directory we are in. It doesn't however manage PostgreSQL. For that, we're using Docker Compose. And on a Mac, the experience isn't very good. On Linux, it's slightly better, but I still think that the native workflow, not having any containers, not having any VMs - it's much, much better.

Now, the flip side to that is if you can spin up a VM where you can do your development - these become almost non-con concerns, because you just spin up a VM based on a host, right? Whether it's a VM bare-metal doesn't really matter. And that \[13:23\] GitHub Codespaces, I'm thinking... That is a very interesting proposition for sure.

ASDF - I will check it out. So I'm just curious how it compares to NixOS and the things I've been learning there, because I really think those name spaces, where you get the exact versions, those directories, - I mean, they're just as a concept super, super-important. Then how do you make sure that what you run locally and what you develop against is what you get in production? Is that important? Did you ever find that being an important thing?

**Mark Ericksen:** Well, I think it's interesting just that you mentioned NixOS, because I've been hearing about it in the Linux space. It is a very different thing. It's like an alternative to Docker, right? It's like a declarative expression of, "This is what the system should look like", and then it can bring that up. It's something I've been wanting to play with, so I'll have to pick your brain some other time about that.

**Gerhard Lazu:** Okay.

**Mark Ericksen:** As far as the difference between production environment and the versions of things and local development, it really hasn't been that much of an issue. Usually, it would be something that we might feel between members of the same team as we're checking out... Someone adds a new library, for instance, and then there might be an issue that we discover at that time. But in terms of avoiding those problems on production, I count on a staging environment, that I'm going to be deploying to a production-like environment; it may even have access to like a backup of the production data, and I'm going to do some basic sanity checks there. Where I care about uptime, I care about the service that I'm providing to my customers, I'm going to use a staging environment.

**Gerhard Lazu:** Okay. So we already have three. We already have a local development environment, we have a staging environment, and we have a production environment. And I think that is the starting point for the majority. Some of us like to write tests, so then you have a testing environment as well. So now we have four places where we need to make sure that things are in sync, because otherwise, versions are in sync, you know, upgrades, whenever you do any security patches... What is the impact on performance? What is the impact on latency? Whatever the case may be. Performance means different things. Let me just clarify that with latency and throughput. And while, okay, like in some cases you need like staging, you don't do this maybe in staging... But I know that, for example, changing the OpenSSL library or upgrading your kernel will have certain performance implications. And Heartbleed - oh, my goodness, me, I still remember that, and all the Intel patches. And so those were pretty bad months. And then why is my application 50% slower? Nothing changed. Oh, there's this new library. And before you know it, two months have passed and you're still trying to figure out what went wrong.

\[16:05\] So okay, let's put up a pin in that, because I think we're getting a bit ahead of ourselves... But the one thing which keeps coming up are versions. And when we started with the Changelog app, which is in Elixir app, I forget which version it was, but it was definitely not 1.6. So our application was generated a couple of years ago, three at this point, maybe four... I lost count. I don't know which version of Phoenix we were using then, but things are very different. So is there something for us to do there, do you think? How do we reconcile this old app? How do you even know what is new in Phoenix?

**Mark Ericksen:** That is a problem I faced a lot, even just in Rails, right? If you've been in the Rails space or -- I think it's the same with any framework. I don't have any personal experience, but I can imagine Django, and everything else has the same kind of situation, where I generate an app and it's using some template to start out a lot of my files, which I then customize. And I had the same problem with Rails that we have in Phoenix, which is I started it, it would generate a bunch of files, I've customized the configs, and everything has drifted from what it originally was. And now I've tried to continually keep current with what version I'm on. I'm wanting to move my version of Phoenix or Rails to be newer and newer and newer, and I might even go through the Changelog notes to see what are the things I need to change, but still, the generated files are not the same, right? It's still going to be different.

**Break:** \[17:37\]

**Gerhard Lazu:** So I would like to understand how can we upgrade the files that we're generating, our application? First of all, how can you even tell what the differences are? Because it's not something that we do often. So we can talk about the practical steps of figuring out what the diff is between the latest version of Phoenix and the one that we're using, which I don't even know what it is. It doesn't really matter, because it's the differences, reconciling those differences; first of all understanding what they are, and knowing how to reconcile them.

**Mark Ericksen:** Yeah.

**Mark Ericksen:** And because it's been such a long time, I think we have a lot of work to do. I mean, we're not even using Erlang releases.

**Mark Ericksen:** Ah, yes.

**Gerhard Lazu:** \[20:01\] Or Elixir releases. And that's a big one. We're still slinging around Docker images, container images. Maybe there's a better way and we don't know about it. But first, it starts with the configs and the stuff which is generated.

**Mark Ericksen:** Yeah. One of the things I've done to help figure out what's changed is I'll generate a version of a Phoenix app, of like this older version of Phoenix that I'm migrating from, and then generate the new one, the new version that I'm wanting to target. And then I'll merge diff the whole directories.

**Gerhard Lazu:** Okay.

**Mark Ericksen:** And just see what's the difference, and then I can manually make the adjustments. But I do have a friend who created a tool that I can share with you, that you can possibly put in the show notes.

**Gerhard Lazu:** Yeah, that's a good idea.

**Mark Ericksen:** Because that only gets you so far... Because one of the things that you realize is when you generate your project, you generate it with other libraries. Like with Phoenix, there are some other libraries that you might use to generate your user authentication system. And that library - it's not like Devise in the Ruby community, which is a whole library that does a lot through behavioral magic, but it generates this -- like the one in the Phoenix world, it generates a bunch of files and lets you customize them. So the version of that needs to be updated as well, and considered. So the resource that I'm sharing is one where you can say, "I'm going from this version of Phoenix to this new version, and here are the flags that were included."

**Gerhard Lazu:** Okay. The generator diff, I'm looking at it now. Okay, we'll share a link in the show notes. That's a good one. So is this just for Phoenix, or is this for other things as well?

**Mark Ericksen:** Yeah.

**Gerhard Lazu:** Just for Phoenix, okay.

**Mark Ericksen:** This is specifically for Phoenix. There are other tools that will do the same type of thing, but this one you can say, "Well, I know I did mine with binary IDs", or "I did mine with MySQL instead of Postgres", and all these different flags. So you can set those flags and see what does that look like from my old version to my new version.

**Gerhard Lazu:** Okay. So while the config files and these files which get generated... This tool is great, and I'm even thinking, as you mentioned, I can see myself generating a new Phoenix project with the version that I'm targeting, and then diffing it - maybe specific directories, not everything - with the version that I'm going from, just to figure out what I need to change. But it's also the changes in how things get tested, built, but also deployed. I know there are Erlang releases... Do you call them Erlang releases, or do you call them something else in the Elixir community?

**Mark Ericksen:** Yeah, we just call them releases... Or generating releases or building a release.

**Gerhard Lazu:** Okay. So we don't use that. We just run the commands, the mix commands, in the context of a container, we generate the image... I mean, I think there's a Docker file, I think. I forget exactly how this works, but we just run those commands, we generate the container image, which is ready for production, bundle, compile assets... We still use -- is it Node.js? I think Yarn, something like that. There's like a Yarn compilation. ESBbuild, I think is the new tool. We talked about going to ESBuild, which we're still not using... So these are two examples of things that we would want to use. But are there others? Are there other, I don't know, better ways of doing this in the Elixir community that we don't know yet?

**Mark Ericksen:** Well, I think there's a lot of benefit to releases. You're already doing Docker, which is good. But one of the problems I had, a previous experience, is that we were just loading our source code into the Docker container and saying on startup, it was just, okay, "mix compile and mix Phoenix server run" kind of a thing. And depending on how large the project is, going through the whole compilation process can take time, and it would cause our automation setup to say, "The container's not responsive. It must not be okay. It's not healthy, and I'm going to kill it." So the benefit of releases is you're shipping compiled code. It's smaller. The actual Docker layers that are getting pushed out are smaller, so that that's faster... But it just starts up a whole lot faster.

**Gerhard Lazu:** \[24:16\] Okay. So would you still use Docker containers or container images with releases?

**Mark Ericksen:** I do. Yeah.

**Gerhard Lazu:** Okay. Okay. Is there something, a resource in Elixir community that you go to when it comes to running it in production, using container images or something else? Is there such a resource that you know of, or use?

**Mark Ericksen:** For running in production, or for like the step before, that is building the release and getting the Docker container all set up?

**Gerhard Lazu:** I think both, but the goal is how do we deploy into production? And these are the steps, and the releases is the current recommended way of doing that. The end goal is how do I run my Elixir app in production?

**Mark Ericksen:** Well, the Phoenix documentation includes a little section on deployment, where they have guides that are specific to a few different hosting providers: Heroku, fly.io, Gigalixir, and just how to do releases in a generic sense, not specific to any platform. That's, I think, a good place to start, like to say, "I want my deployment to be set up", and then separately it's "How do I get it into production and how do I maintain it? How do I observe it? How do I manage it?" Is that kind of also what you're thinking?

**Gerhard Lazu:** It is, of course; all those are follow-up concerns. The first one is how do I get it out there in a way that is efficient, in a way that I'm using the platform's strengths, whatever the platform is... And that is a good one. I will include it in the show notes and maybe go over it myself, because I know it's changing a lot. And in my mind, once you have container images, the case is closed. We have container images, we'll get them around... That is the currency that we trade in. But I'm wondering, if that is still true when it comes to platforms, is that still the best approach or the recommended approach when it comes to a platform, now that we migrated from Kubernetes to Fly.io, to a PaaS?

**Mark Ericksen:** Yeah. So with Fly, we still do recommend with an Elixir app going through Docker, and preferably even releases. I think that gives the best experience. And with the newer versions of Phoenix - that's Phoenix 1.6.3 and later - it has a lot of that built into it. So what that means is the Fly tooling, I can say in Fly "I want to deploy my app", and it actually says, "Oh, I'm aware that this is a Phoenix app. I'm going to run some of these Phoenix commands that I know are there." And so it can run to generate releases, and just do a lot of that config for you. So it helps get you there. But that's on the newer apps, right? So that's kind of where this comes back to, "Well, if I generated my app on an older version of Phoenix, all my config may not be the same. It might not look that way."

**Gerhard Lazu:** Right.

**Mark Ericksen:** So it, it can't do all of that. So we do have some documentation on how to do that with Fly. The long form way, like, "Hey, here's how you can do it on any version of Elixir or Phoenix that you're coming from." But yeah, at Fly, we still do recommend the Docker and releases just as a smooth process.

**Gerhard Lazu:** Okay. So I already have my first two steps. The first one is reconcile the config, make sure it's using the latest version so that we can use releases properly, and then use releases in the same context of container images, which will make them smaller and quicker to boot. That's the one thing which I've found myself adjusting. And there wasn't the concept of a startup probe when I looked, which is something that we're using Kubernetes just to not run the readiness probes or the liveness probes too early, because the app is slower to boot.

\[28:02\] And there's actually something - and maybe you can tell me if this is a good idea or not - that we do on boot, which in practice it works really well, because we not only trigger a database backup, or we used to, before we deployed the new version. So as the new version is coming up of the app, we run a database backup before we run migrations. So if there's anything in the migrations that messes it up, we can go, "We have a backup ready to go back to." Do you do that? I mean, let's just stop here for now. Did you ever find a need to do this?

**Mark Ericksen:** There's one company I've worked at where they would sometimes need to go back. I only remember one occasion where it was like, "Oh--" I had to restore an older version of the database to recover something that had gone wrong. I typically don't do that. And the main reason is, is because some of the things that we've just learned over time -- we learned it a lot in the Rails community with migrations and just what makes a safe migration.

I'm going to share a link to an article that we have on the Fly website, the blog, where we talk about safe Ecto migrations. Ecto is the database layer that's specific to Phoenix, but a lot of these same principles came from the Rails community and the lessons learned there. And really, it's just about, well, I don't want to actually do data migrations when I'm doing my data structure migrations. So I might structure my tables, add a new field, change an index, something like that. And then there's this separate process of, you know, I really need to just fix some data that happened, and how we can run those separately. So then when they run separately, we can actually write unit tests around the code better, and test that "Yes, it's catching these different situations." But yeah, I do understand the concern of being able to either test a migration on a test database before you actually run it on your production data, and then being able to restore back. I get it. Sometimes it's necessary. Even with all the careful planning that we do, sometimes you need that.

**Gerhard Lazu:** Okay. So if you were to implement the database backups before running the migrations in the context of Fly, how would you do that? What is the way that, with everything that, you would say, "Yes, this is good. This is what I think would work best"?

**Mark Ericksen:** Okay. So pause... \[laughs\] I don't actually know how to do that.

**Gerhard Lazu:** Okay.

**Mark Ericksen:** What I mean is Fly's Postgres databases are not managed databases in the way that Heroku has managed databases. They're set up and configured for you, but they don't have people who are observing them and taking proactive measures to, "Oh, you're about to run out of disk space". It doesn't have that stuff.

**Gerhard Lazu:** Okay. So I need to reconsider a few things, if that's the case. \[laughter\] It's like half managed, but not fully managed. Okay.

**Mark Ericksen:** Right.

**Gerhard Lazu:** So it's like some things are done for you, but if you get things wrong, it's up to you to fix it. Is that what you're telling me?

**Mark Ericksen:** Yes. And so there are automated nightly backups, and I believe that there is a way to trigger manually that you want a backup to run. I'm just not sure how to do that. I'd have to check the docs.

**Gerhard Lazu:** Yep. Okay. I see this, January 22nd, Postgres backups. Your best bet would be to install cron on a separate app or a VM you run elsewhere, and have it do the pg\_dump for you. Okay. So that's something that we used to do on Kubernetes. We would use to run a Postgres stateful set, single instance, no replication. When we would use to back up every hour, the backup would be just a cron job that used to run a cron job -- no, what do they call them? I forgot the naming already.

**Mark Ericksen:** Oh, the name in Kubernetes?

**Gerhard Lazu:** Yeah.

**Mark Ericksen:** Yes, scheduled jobs.

**Gerhard Lazu:** That's the one. Thank you. Yes, yes, yes. So a scheduled job would run every hour, create a job, create a pod, run the backup... It just used to run pg\_dump. Very, very simple. Did we -- yes, we did compress it, and then we just streamed it to AWS S3. Super, super-simple.

\[32:06\] When the application, when a new instance would be deployed, we would have in containers that would run this; it would run the backup, and I don't think it would run the migration. No, it would do a full backup. It would sink the assets to S3. We don't have that issue anymore, because the assets are now stored on S3. So we don't do that. But we would run a DB backup part of the pod coming up. And then the application would start, and a couple of extra things would happen before the Phoenix server run would happen. So that's how that would work. So something equivalent I think in Fly, would be to - as Kurt mentions here in this community post, I'll share the link - run this scheduled job on a separate app. And then when the app would boot, maybe trigger this backup from the application instance, maybe. I can see that working, for sure.

So we talked about a few things, but I think we're just getting warmed up, because Fly changes a lot of things for us when it comes to single instance, multiple instance. And while we migrated to Fly and we only run Fly, the expectation is that we will run in multiple places. So Fly is one of the origins, as I refer to them from the perspective of the CDN; there is a CDN. But there's some discussions that we had before we started recording this which make me rethink some of that. But the point still stands that we will have more than a single instance. So when we enabled multiple application instances, we've hit this issue that Jerod talked about when it comes to ETS tables and the app instances not clustering. So first of all, why might we want to do that? Why might we want to cluster the application instances? And is there anything in the Fly platform that we can leverage?

**Mark Ericksen:** Well, clustering Elixir applications is something that's unique to the BEAM, really, the Erlang virtual machine. And there's so many other platforms or languages and frameworks like Ruby or Node that just don't have a concept of this. So you tackle those problems in a different way. But when you're talking about Elixir, it's like, "Well, we have some extra tools in our toolbox. There's some more things we can do. And I think one of the reasons that we want to be able to cluster is because -- so in Kubernetes, you could do cluster where the nodes could discover the other... An Elixir node in one pod could discover one running in another one through the libcluster library, and you could do a Kubernetes way of the library. It would query the Kubernetes interface and query for where are the other nodes that I can talk to, and they could actually link up that way.

Within Fly, there is a DNS way that the apps can query for each other. So one of the things that's interesting to know about Fly is in the background, internally, there's an IPv6 network that all of your applications are able to talk on and discover other applications running in that private network.

**Gerhard Lazu:** Right.

**Mark Ericksen:** And it's actually done through WireGuard, which is a great technology. And what that means is I have the ability for my apps to use libcluster as well, the same library, to discover and link up to the other nodes. So that works great when my two apps are sitting side by side in the same data center, and that also works when my app is in a new region, somewhere else in the world. That IPV6 network still connects them privately, and they are able to connect up and sync. And that right there is -- I don't know how to do that with AWS, even multi-region. Getting my app to do that was something that was just beyond me and the people that I had access to. So it was just like, "Oh, we're just not going to go. Multi-data center - that's too hard." So Fly actually made that simple, and that's one of the reasons I was very excited about trying to tell people in the Elixir community about Fly, and it's why I took the job at Fly. I was like, "No, this is really cool. This is like magic."

**Gerhard Lazu:** \[36:16\] Okay.

**Mark Ericksen:** And we can do things with the Elixir now that other people can't do.

**Break:** \[36:20\]

**Gerhard Lazu:** So I know a thing or two about Erlang clustering, its strengths, its weaknesses... We will not go there because it is a rabbit hole, in multiple ways. But I'm really curious about running multiple nodes of the application, distributed across the whole world by simply scaling the app. That sounds super simple. Now, I know there's a lot of stuff that needs to happen in the background. We're not going to look into networking, the whole VPN, the WireGuard... I'm amazed by it. I think it's just like what it enables, especially when you run flyctl locally, I think it's really cool; database backups, connecting to private instances. It's really, really cool. But I'm really curious about running multiple instances of the same app, and what it means for pushing out updates. How does that work behind the scenes? How do I get my application update out there when you have maybe ten instances running, when there's a database migration involved? How does that work in practice? That sounds like -- I won't say like a recipe for disaster, but you need to be a bit more careful with what migrations you're running when the new version may affect the existing running versions.

**Mark Ericksen:** \[40:03\] Yes. So the resource I shared earlier is about safe Ecto migrations. And that is one of those things that you just have to be aware of when you're in any large environment where you have many different nodes, even if they're not clustered, right? Just, I've got a whole bunch of servers and they're going to be running different versions of my app at any given moment as a deployment is rolling out. And my database changes - what does that mean? So there's strategies we have to take for "How do I make it change to my database that I want without breaking an older version of my app, that's reading from it?"

**Gerhard Lazu:** Right.

**Mark Ericksen:** And that's just a generic situation that we have to deal with when we're wanting to provide non-interrupted service, or that the user is not going to all of a sudden hit an error, their query failed. So there's strategies for doing that, and sometimes that's a multistage deploy where you might go halfway to the migration, to the full change that you want in one deploy, and then follow it up afterward with a second deploy that finishes it. There's strategies for that. But to answer your question, the way Fly does it is it's a rolling deploy where a new one will go out, and health checks have to pass before it's considered, "Okay, it's up and good", and then it will roll out to all the other instances. And there's a special instance that's run very first, that runs the migrations. It doesn't actually run the app. It starts it up just enough to run the migrations, not to actually run the full instance. So it says, "Okay, can we run the migrations?" Because we're only going to run them once. We don't need to run them every app, having, say, "I'm going to run the migrations now", and trying to do that and discovering, "Oh, it's already been done ", or having to deal with any kind of locks or queries or anything like that.

**Gerhard Lazu:** Interesting.

**Mark Ericksen:** So you have one instance that's going to run on the primary database, assuming you might have read replicas... And then once that's good, then you have the instances that roll out one at a time.

**Gerhard Lazu:** Okay.

**Mark Ericksen:** So you do have that situation where your app is going to be in multiple states, where your database is in your application that doesn't know anything about these database changes... It's the older version, where it needs to at least not break.

**Gerhard Lazu:** Okay. So that's interesting. So if we run the migrations explicitly on container startup, how is that going to work with a primary? I mean, will every single app instance coming up still run the same migrations and realize, "Oh, this is already run"? Is that how that's going to work?

**Mark Ericksen:** Well, actually we recommend not running on container startup.

**Gerhard Lazu:** Really?

**Mark Ericksen:** Yes. So when you create a Fly app, it generates a fly.toml file, T-O-M-L. And in there, there is a little section called deploy, and you say, "This is my release command, and this is what runs my migrations." And so the tooling looks for that and says, "I'm going to run that special in a little container." That's how my database migrations are run."

**Gerhard Lazu:** I see. Okay. So that's another one for my checklist, remove the database migrations from the container startup, and use the Fly tooling to do it for me. Interesting. Or maybe at least have some way of detecting, "Oh, I'm running in Fly this container image. Don't run this command. Fly is going to handle it via the configuration." That makes sense.

**Mark Ericksen:** Well, it's probably not going to break anything if you still have it in your database or in your Docker container, just because database locks are already something that the migrations do. So you can't get into a contention where they're trying to make competing migrations at the same time.

**Gerhard Lazu:** And I think if a migration has already run, if the same migration tries to run from a different container is the same thing as trying to apply the migrations again, but they've already been applied. So I think there's like a version. I don't know exactly how it works in Elixir, but I assume from what I used to know from my Ruby on Rails days. Okay. So it's like a knob that says, "Oh, I've already applied this. There's nothing for me to do." So it's like an idempotent operation, it just moves on. So maybe there's nothing to do there, maybe.

\[44:14\] When it comes to sharing the cache, and I think this is something that you mentioned as well, the ETS tables where we store, where we cache the website content... So I'm wondering whether we have to do that at all. And there's live view, there's like multiple things coming together here... But when it comes to sharing the cache between the application instances, now that we have multiple ones, what is the recommended way in Fly?

**Mark Ericksen:** So I'm not sure how much of this you covered for your listeners, but just for you, dear listener, who might be like, "What is ETS?" - so ETS is an Erlang Term Storage. It is an in-memory cache that's very fast, but it's specific to Elixir Erlang and the BEAM languages. So yeah, you can store anything in ETS, which is really handy, because it doesn't have to go through some other external serialization. It's like a binary format. But the problem that we're talking about here is that yeah, it's in-memory on that instance. So when you add now a second instance in the same data center even, they both have their own copy of that cache. And I think the problem that you guys were describing was a situation where you release a new episode, and the instance that I'm connecting to when I release that episode invalidates the cache; everything goes great on that instance, but my visitor who comes to the other instance, that cache is still the old value and it doesn't show up. Is that right?

**Gerhard Lazu:** Yes, that's right. That's exactly what happened now. A lot of this stuff happened between episode 50 and 51. And while you are tuning into episode 51, which follows exactly episode 50 where we talk about the Fly migration, there is a lot of stuff that happened in between. And exactly as Mark points out, we had the issue where a cache from one instance was different from the cache of another application instance, which means that sometimes the episode would be there and one request, and in another request the episode would not be there. And we have multiple layers of caching. So first of all, we have a cache in the CDN, then we have a cache on the application instance, and I don't think the Fly proxy does anything caching-wise; it just passes through all the requests. But we have two layers of caching - the CDN and the ETS cache, which is specific and local to every application instance. And you have multiple -- well, you may have different caches. No, you will have different caches if you don't cluster. So when you cluster those applications, what happens with the ETS caches, which are application instance-specific?

**Mark Ericksen:** So when you cluster the application and you have now these two instances that are clustered, ETS is still unique and individual to those running instances. It doesn't automatically become a shared cache. There is a thing called DETS, which is distributed ETS, but that has a lot of other complexity. So honestly, just thinking about this situation you guys were describing, what I think is the smoothest way that also gives you the opportunity to have new features that you could add to your application is when you have clustering, Phoenix has the ability to do Pub/Sub built into it... Pub/Sub being publish and subscribe. So what you can do is when the apps cluster to each other, they can just -- you have the ability to notify, like when one instance receives a new episode, that's an important message. That's one you care about other instances knowing about, so you can publish that message out, and they all subscribe to that and they can say, "Oh, now I know I can just either update my cache, or I can invalidate the whole cache and just let it get rebuilt", whatever makes the most sense.

But then, if you have that publish and subscribe ability, then you can do fun things when you have live view... Live view being -- it's a web socket connection to the browser where the user is actually getting live updates. They can actually push to the user. So say you have a live view page that shows as people are listening to and playing a current episode, you could actually have a little notification pop up in the corner that says, "New episode was just released. Be the first to hear it!", and they could just get that in real time. So you can start doing fun things like that, and Pub/Sub makes that really easy.

**Gerhard Lazu:** \[48:30\] Yeah. I was looking at the Live Beats app that Chris was blogging about, and I thought that was really cool. And I liked that it had the same element or the same area of MP3s, audio, listening with multiple people to the same tracks, and we all listened to the same track, same audio file... I thought that was really cool, and I think there's a lot that the changelog.com application can do and can learn from the Live Beats app. How involved were you with that, Mark. Did you contribute to that, or did you think, "Wow, this is amazing"?

**Mark Ericksen:** I did not directly commit code to that. I was involved with some of the discussion and just early versions of it, and I got access to the repo and was digging around it, I was like, "How did Chris do that? Oh, that's really cool. Let me copy that idea for something else I'm working on."

**Gerhard Lazu:** Right.

**Mark Ericksen:** That's really what part of the goal with this app is, is it's to be an example of, "This is a good way to build a Phoenix application that tackles some of these larger problems." People always assumed in order to do anything like a Spotify interface where I can continually navigate around while I have music playing and go to different pages, then I'd have to have like a single page app with a whole JavaScript frontend. And what the Live Beats app is showing is, well, actually, no, you don't have to have any frontend big JavaScript app. It can all be server-rendered and you can still have that ability. And so it's really intended to be an example app. So I encourage you and anyone else who's wanting to dig into something like that to check it out.

**Gerhard Lazu:** I think that's really cool. And I think Jerod, if he's not already all over it, I think he will be very soon, because there's a lot to learn and a lot that we can do better for the changelog.com app. And because we are already on Fly and we can leverage all these things, like the platform itself, some of the primitives that the platform provides, the amazing Elixir friendliness and the thinking that goes into connecting your application, your run time to the platform - I think there's a lot there that I'm pretty sure we haven't dug into fully... Like Fly Postgres, you mentioned that package. Do you call it a package, or do you call it an Elixir dependency?

**Mark Ericksen:** It's a Hex package.

**Gerhard Lazu:** A Hex package. Okay.

**Mark Ericksen:** Yeah.

**Gerhard Lazu:** Yeah, on hex.pm. So that's a good one. How it optimizes the connection to the database, read replicas versus write replicas, or the write master, whatever the case is... I haven't looked into all the details, but there's a lot of interesting stuff on Fly that we can do with Elixir releases. And I'm wondering, do we even need a CDN? I know it's a crazy idea, but if we configure all these things correctly and if we have our application, this should be across all the Fly regions. I mean, it sounds a bit crazy, but if we did that, would we even need a CDN? Now, that is a very interesting proposition, for sure. And live view - an amazing technology. I'm sure we'll we will come back to this in the not too distant future. But a thing which I would like to talk about now, Mark, is about Thinking Elixir, your podcast that you've been running for a few years now. Is that right?

**Mark Ericksen:** Yeah, it's been over a year. We're at 96 episodes. It's a weekly show. Yeah.

**Gerhard Lazu:** Yeah. So I would say almost two years; 52, with some breaks. So when you have 100, you're close to two years. Okay. Is there an episode that you recommend we, or me, listen to? And don't say the future one with Jerod that you're going to record. I'll definitely listen to that one.

**Mark Ericksen:** \[laughs\]

**Gerhard Lazu:** Okay?

**Mark Ericksen:** \[52:06\] No, actually there's one of them that was a recent one... There's a couple, actually, that were recent. There were the things that changed my thinking, and one of them is episode 93. So this was not that long ago. It was April 5th, and it was Preventing Service Abuse with Michael Lubas, and it's just that idea... So he's coming at it from a security-focused perspective, and wanting to say that, in thinking about security, but not like, "Oh, I'm trying to prevent cross-site scripting", it's not that. It's more about, "People are going to try to abuse my website by having me accidentally send out spam, or unintentionally. I'm not trying to enable that, but they're able to abuse my site to send out spam, because maybe I offer invites, that someone can invite someone."

So I learned about some different techniques, and Plug being a part of the Elixir Phoenix framework for handling requests, some tooling that's built into Plug. So we can do those kinds of things. We can say, "I'm going to use ETS tables and do rate limiting", so you can't just keep brute-forcing password attempts and things like that. So I think that's really important sometimes. And when we're in the smaller stage, either personal projects or small companies, we sometimes maybe have our services abused just because we're not even aware of those. And that was like one of those like, "Yes, I need to dig in deeper on that and start applying that."

**Gerhard Lazu:** Okay, so that's a good one. Episode 93 on my list, plus 100 and something, I'm thinking, with Jerod talking about Changelog on Fly. That's what I'm thinking. Okay. I love that idea.

**Mark Ericksen:** Perfect.

**Gerhard Lazu:** As we are preparing to wrap this up, I'm wondering, what is a key takeaway that you would like our listeners to remain with from our conversation?

**Mark Ericksen:** There's a lot of fun stuff we didn't really get to get to, but I just think some of the things that are fascinating -- you mentioned the Fly Postgres library, where we're having to think about we have a distributed app. Because I think what Fly really enables is the ability to have a globally distributed app. You teased this idea about a CDN, right? But if I'm actually able to -- like, the whole point of a CDN is to get the serving up of assets closer to my users so that it reduces the time, and makes it a better experience. Now, with Fly, it actually makes it easier to run my whole server closer to the users. And if I can have my app distributed widely enough, and I know where my audience is, then yeah, you kind of start to question, "Do I need that whole extra layer of my CDN? Because those assets are served by my app anyway? And if my app is already there, maybe I don't actually need a CDN." It really depends on what you're doing with the CDN.

But I think that the takeaway I want people to come away with is that, "Wow, Fly is actually something that lets you do something that you couldn't easily do before", and especially if you're in Elixir. Because obviously, I run the Thinking Elixir podcast, Elixir is what I love... It's the language that I love and I love talking about it, and I want people to be able to come experience the things that you and I are experiencing, like - hey, functional programming. That solves a whole bunch of problems of state management that object-oriented stuff - it just causes problems. How many numerous bugs have we dealt with that are just state management like that?

Anyway... I just hope people are willing to try Fly out; even if it's not Elixir, just whatever language you're working in. If you can put it in Docker, you can run it on Fly, and there's lots of tooling that we have to make going multi-region even easier... Be it Rails or Node or Django or Java, there's ways to start to take that multi-region and do things you couldn't do before.

**Gerhard Lazu:** I really like that, especially since I've had the special appreciation for Erlang, the BEAM VM, which precedes Elixir, which precedes Changelog. I've seen its value, I've seen its potential, I've seen its abuse, and I've seen how well it handles all of it, and I'm surprised just by how resilient the system is, Erlang specifically. I really like it. I think there's a lot there, and I think that Kubernetes was taking us on a path that has a lot of advantages, but we also forgot some of the things that run times like Erlang just do so easily - the clustering part, the hot code loading, the supervision trees... It's almost like you're running a very complex Kubernetes system inside Kubernetes when you run Elixir and Erlang, and you don't even realize it. And microservices - well, Erlang has been doing it for decades, before microservices were a thing. So there's a lot there, and I really like and I appreciate it from that ecosystem.

Mark, it's been a pleasure talking to you. Thank you very much for joining me on Ship It. I'm looking forward to next time. Thank you.

**Mark Ericksen:** My pleasure.
