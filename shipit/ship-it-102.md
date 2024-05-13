**Justin Garrison:** Hello, and welcome to Ship It. I'm your host, Justin Garrison, and with me as always is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** Hi!

**Justin Garrison:** Today on the show we have a fascinating topic from Anita Zhang of Meta, who has been there for a little while and done a couple of different really interesting jobs. But right now we are talking mostly about the container scheduler they have, and just managing Linux servers at scale. She's an engineer D, manager D on the Linux team.

**Autumn Nash:** Okay, like how cool is that job title, though? Like, you've reached new levels when you can have a cool job title that has Systemd in your job title. Also, her sweatshirt game - unmatched.

**Justin Garrison:** I know. Yeah, we saw her, she was at Scale, she gave a talk there, and I reached out and was like "Hey, I've read the Twine paper. Do you wanna come on the show? I'd love to talk about how you manage millions of machines. Physical hosts, rolling out Linux." This is just fun to talk about, because I'm a nerd.

**Autumn Nash:** It's amazing. Well, not just that, but just the fact that they do it all on prem, and they do all of it themselves. And then they are awesome enough to open source a bunch of their cool stuff once they get it working on all of these millions of things, and then they open source it so other people can use it, which is rad.

**Justin Garrison:** They work mostly upstream, yeah. It's like they're working upstream with the Fedora and CentOS and these communities... And while Twine, their container scheduler isn't open source, a lot of the other components they have too just --

**Autumn Nash:** They contribute a lot to upstream, and I think that is super-rad, when corporations actually make the effort to be good stewards of open source, and actually make real contributions back. That's really cool.

**Justin Garrison:** I mean, of all the things in 2024 that are going away, it seems that open source contributions and diversity are the --

**Autumn Nash:** Are the important stuff. \[laughs\]

**Justin Garrison:** ...the things that might help long term, and... Wow, it's been interesting.

**Autumn Nash:** You know, like 90% of infrastructure is open source, but let's totally shoot ourselves in the foot in the future. No big deal.

**Justin Garrison:** Yeah. So, great conversation, great conversation today. But as always, we want to talk about a few links, or a couple of links, things we've found interesting, that we read, or in my case, I listened to something and I'm going to share a different podcast.

**Autumn Nash:** \[unintelligible 00:05:26.16\]

**Justin Garrison:** I listen to a lot of podcasts... And I don't know if this is allowed on a podcast, to talk about someone else's... But I'm gonna do it anyway, because I thought it was really cool. And specifically, this was on The Verge's podcast, or the one that Nilay Patel does, called Decoder. That's what this one's called; not the VergeCast. Decoder is the podcast, and this one is about -- it's an interview with the CEO of Dropbox, because that is a fascinating story about how he talks about remote work.

And one of the things that I latched onto in this was he does what Amazon does with document-driven meetings, which I've found very fascinating working at Amazon, just the whole, like, you write a big document, and then everyone reads it quietly at the beginning of the meeting. And that is what you do. And if you're not at Amazon, that sounds completely foreign, and I always thought that that was kind of one of the seeds of one of the best asynchronous and remote work possibilities available.

**Autumn Nash:** \[06:25\] It is.

**Justin Garrison:** It was like, you could do a lot with like "Hey, we're gonna do a lot of thinking upfront to write this document, make it coherent, and make it a little too structured for Amazon's likings..." Like, some of that could be more flexible, but keeping it structured in a way that makes it easier to consume, so people know what to expect. If you're going into a one-pager, \[unintelligible 00:06:37.16\] a six-pager, all of those types of meetings have very structured requirements going into it. And in this podcast, Drew mentions that Dropbox adopted document-driven meetings around COVID time, when they said "Hey, we're gonna go all-in on being remote." And I've found it fascinating, just the conversation they had, and --

**Autumn Nash:** I didn't know Dropbox was remote. They have been since apparently 2020-ish... 2021. I think it was in the 2020s when they said they announced fully -- like, "Hey we're just going fully remote." And they definitely leaned into this document-driven culture of like "We write docs to share ideas. There's no slide decks." And I thought it was cool... As well as Dropbox being an on-prem company. They are notorious for -- they remove themselves from the cloud environments, and shared how much money they saved.

So Dropbox, I'm sure -- like, any large company is going to be hybrid, but where's the majority of their spend? And they are one of the ones that the majority of their spend is going to be on-prem, in their servers that they manage, but still being a remote company. Those two things don't seem to line up in my head, where it's like, every datacenter I've worked in was an on-site, on-prem environment.

**Autumn Nash:** I think your techs and your engineers are different though, right? Like, your engineers and your corporate people versus the techs and the people that are actually doing your hardware are two different components. Because a lot of companies are technically remote, but -- well, not just that, but I think it's also interesting, a lot of people seem to be owning hardware in data centers, but they're not actually managing their data centers. Not Dropbox specifically, but just talking to like people in industry lately, it seems like the new thing is... It's somewhere in between owning your own data center, and cloud, but instead, they own their hardware, but they just have it in another data center maintained by other -- like, by techs overall, which is like interesting; it's almost a new offering.

**Justin Garrison:** When, and colos have done that for a while, it's just not been as visible.

**Autumn Nash:** Yeah. But startups are doing it now, which is wild, because that was the bread and butter that cloud was really going after, was "Hey, if you're a startup, you can start here... So in case you don't know how many servers you need..." It's that low investment upfront, because you're just getting started. That was cloud's bread and butter. And now the fact that they're utilizing this new way of going about it where you're on prem, but not your own on prem; I wonder if that will steal a lot of startups from cloud.

**Justin Garrison:** At the very least, knowing that it exists, that you don't have to go to a data center yourself. Like, you could ship a box somewhere, they unbox it, they rack it, they stack it, they plug it in, and you get an IP address. And it's a slower process than calling an API and getting a machine, but long term a more financially viable, like, "Hey if I know I need this for three, four or five years..."

**Autumn Nash:** That's what I'm saying, it's a lot cheaper... So it's like you're getting to the point where you are making a very viable other option to cloud, you know?

**Justin Garrison:** Yeah. So I thought it was a really interesting interview, specifically around the remote work and document-style meetings, as well as being an on-prem environment. Cool listen. If anyone else is listening to Decoder or The VergeCast podcasts, go check it out.

**Autumn Nash:** I also think that that shows you how much -- like the culture of people moving jobs every so many years. People take things they learned at their previous job, that made their meetings more efficient... And things that are good from companies will transfer to other companies. People will take what they like and what really made an impact, and take it to the new place they're going to.

**Justin Garrison:** \[10:13\] Yeah, every environment is going to be different. I know plenty of people that won't work from people from certain companies, because they try to force it too much. They're like "Oh, well, at my last company we always did this, so we have to do it here." I'm like "This is different."

**Autumn Nash:** There's always somebody on \[unintelligible 00:10:26.01\] who's like "Don't hire these people, because they'll make you do this..."

**Justin Garrison:** There's pros and cons of it, and at least in the interview Drew points out that they adapted it; they're not doing the Amazon's strict six-pagers, but they're like "Hey, we have documents, and we read the documents, and that's where we share the data." And it's not up to a good presenter, or a slide deck, or something like that.

**Autumn Nash:** Which makes it really efficient, and I think you have less pressure to take notes too, when you know that you have this document that you can take with you after that meeting, and be able to look back... Or when you have to talk to someone else about the meeting that you were just in, you have a good basis of what you spoke about in that meeting.

**Justin Garrison:** If only Amazon had a good document searching... \[laughs\] My biggest gripe there is it's in 10 different systems, and you always had to find the PM who did it... HashiCorp had a really good document search engine on top of Google Docs, which is where they did all their documents.

**Autumn Nash:** Did you work for Hashi?

**Justin Garrison:** No, no. They open sourced it.

**Autumn Nash:** Oh. It's funny though, because it seems like every big company -- like, there was a thread on Twitter the other day, and people were like "The thing I have missed most about (I think) working at Google was Scanner", when everybody said that they hate it Scanner... But like a bunch of people that left said that that's what they've missed... And I will see the things people say they miss when they leave different big companies... And it's funny, the things that you're like "This is horrible", but then you miss it when you're gone later.

**Justin Garrison:** How about your? What's your link?

**Autumn Nash:** My link is the Twine paper from Anita's team... Which I thought was just amazing, the way that they're able to scale that many Linux hosts, and the fact that it is on prem, but -- the way that she was speaking about updating and stuff... And just - when you read the actual white paper, and see all the tools that they've created, and how some of them are open sourced to make it easier... But they built so much of it in house. And they use really minimal, almost -- like, they use a lot of things that just come with Linux distributions, which I thought was really interesting, but they also have built their own tools... But it just seems like they kept a really amazing level of simplicity to make it not complicated. I just wonder if it's -- I won't say easier, but if it helps them to onboard people when you get too Meta... Because a lot of their stuff that comes from Linux, like Systemd and that kind of stuff... That's awesome, because if you've used that at your other jobs, you're not onboarding to some super-complicated system.

**Justin Garrison:** It's interesting too, because complexity at some point becomes the standard. And when you think of -- I always think of cars. Cars are extremely complex systems, and they're failing all of the time. You have multiple misfires in your engine all of the time, and you don't ever know about it, but anyone can be taught to drive it. And the pedals and the steering wheel, and some blinkers, if anyone uses them, are pretty standard interfaces, right? And those are things that we can use reliably, and anyone can jump into any car, and it's like "Oh, I know where most of this exists." And something like Kubernetes is extremely complex, but it's like a standard interface, too. Like, "Oh, I know how this works", because I can jump from one Kubernetes cluster to another, and say like ",Oh I know how this complexity is going to work in some regard. There's gonna be details and things that I don't understand", but that just kind of becomes the easy layer of it.

When I was at Disney Plus, we were building everything on ECS, and we could never find any ECS experts. Like, there was no one out there that knew ECS, unless you worked at Amazon. I'm like "We're not hiring Amazon people, so how do we get ECS experts to come?" So we hired a bunch of Kubernetes experts. Everyone on the team was a Kubernetes expert, and we're like "Hey, if you squint, this is kind of Kubernetes." But there was all these edge cases and things that we had to build around, because it's like "Oh, it's not Kubernetes, and we know that we're not driving a car, we're riding a bicycle", or something. It was a different paradigm of how we had to treat the system.

**Autumn Nash:** \[14:15\] But I think that's almost like a secret sauce. Like, they worked really hard on implementing as simple as possible, while also making tools, but they implemented their own tools when it was necessary to truly make it easier, but they kept a lot of it as simple as possible...

**Justin Garrison:** And the fact that they had different goals. It was trying to have a single system that manages a million machines...

**Autumn Nash:** Well, and just different kinds of machines, and different workloads... And I think that when you can really strike the balance between simplicity and using standard things and open source things that people have a lot of experience with, so you can onboard and find those people, that you can bring to that team to help you to scale, but at the same time creating enough well-made internal tools to help you to be able to differentiate into the scale up aspect also, because it's a million hosts; that's a lot. I think that just having that secret sauce and figuring that out just can make your organization amazing.

**Justin Garrison:** Well, and I also have to think that working upstream primarily helps with that recruiting, right? It's like \[unintelligible 00:15:17.16\]

**Autumn Nash:** Yes. I think that is really underrated, because when you're contributing upscale, for one, you build better relationships, right? It's easier to recruit. You're keeping a lot of what you're using simple, because you can also -- so you can find people that know how to do that job, just like you were saying with the EKS thing. I wish people would see that value, because then we also get more people in the open source community, and this becomes this great cycle of like --it's those beneficial relationships, you know?

**Justin Garrison:** And I still would love to see some white papers from them about the things that aren't open source, or talked about right now... Like, how they roll out Linux updates, right?

**Autumn Nash:** She said some of those take a year, but then they made some of it where they were updating so frequently... It just seems like such a very well-oiled machine, and it was just fascinating. And their white paper is fascinating. I love white papers and post mortems, because you learn so much.

**Justin Garrison:** Well, in that case, you're gonna love the outro for today as well... And we're gonna just leave people on that, and we're gonna cut over to the interview with Anita, and talk to you again after.

**Break**: \[16:28\]

**Justin Garrison:** So today on the show we have Anita Zhang from Meta. Anita, you are an engineer D, manager D is your title. Is that correct?

**Anita Zhang:** Yup.

**Justin Garrison:** I think that's fabulous, as a Linux user and a longtime restarter of services. Tell us about what you're responsible for at Meta.

**Anita Zhang:** Well, I support a team that basically -- well, my manager supports the Meta's Linux distribution. I like to call it operating systems. It sounds better. But we primarily contribute to Systemd, to eBPF-related projects, building out some of the common components at the OS layer that other infrastructure services build on top of.

**Justin Garrison:** So you're the kernel of Meta's infrastructure.

**Anita Zhang:** We have like an actual kernel team to do the kernel, but... One layer up, I guess.

**Justin Garrison:** \[laughs\] One layer above that. So describe the infrastructure, describe the sources. I have been following what Facebook and Meta have been doing for a long time as a Red Hat user at other places, and seeing the upstream contributions... But I know many people to this podcast may not know what that infrastructure looks like, and what you actually do.

**Anita Zhang:** Yeah, I mean, we've been around a while. We personally -- the company owns millions of hosts at this point. A mix of compute, storage, and now the AI fleet. Teams primarily work out of a shared pool. So we have a pool of machines called Twshared, where all of the container jobs run. There are a few services that run in like their own set of host prefixes, but for the most part the largest pool is Twshared. A lot of our infrastructure to support this scale is homegrown.

**Justin Garrison:** \[18:09\] I don't know anything off the shelf that's gonna do a million hosts.

**Anita Zhang:** Yeah... Me neither.

**Autumn Nash:** That's amazing. So Meta has their own flavor of Linux, I guess?

**Anita Zhang:** No, we actually use CentOS for production, all of our production hosts, and even inside the containers we're using CentOS. Desktops are primarily some flavor of Fedora, Windows or macOS.

**Justin Garrison:** And what does that look like for what you're doing at the fleet level? You're provisioning the OS, or have some tooling to provision the OS, and from talks that you've given that I've watched - you had a great talk at Scale, by the way... If anyone wants to see that talk, it's on the Scale website. But you're doing upgrades. If I want to upgrade a million hosts, I'm like "Hey, I needed to roll out a new version of the operating system", that's gonna take a little while. There's a lot of processes and there's a lot of risks there, right? Because you could be causing other things to fail. So how do you do that in a safe way, and at that size?

**Anita Zhang:** You know, we've gotten a lot better at it over the years. When I started, we were doing like CentOS 6 to 7, and I think that probably took like a year or two to actually reach over like 99% of the fleet. And there's always that trailing 1% that for some reason they can't shut down their services, or they don't want to drain \[unintelligible 00:19:23.09\] traffic, and things like that. But now we're able to complete I'd say like 99% of the fleet in a year or less. We started doing a lot of validations sooner, so now we actually hook in Fedora ELN into our testing pipeline, and we start deploying parts of Fedora ELN and running our internal container tests against them. And so \[unintelligible 00:19:49.01\] a few system-wide distribution changes that will be ready once CentOS -- I guess now CentOS Stream 10 is going to be released later this year.

**Justin Garrison:** Describe Fedora ELN. Why is that different than what you're running?

**Anita Zhang:** So Fedora ELN is -- man, I don't know what exactly it stands for. Fedora-something Next. So it's going to be like the next release of Fedora that will eventually feed into things like CentOS Stream.

**Justin Garrison:** Basically like the rawhide equivalent of like "Hey, this is a rolling kind of new thing", but eventually that gets cut down. How does that relate? Or I'm actually really curious - CentOS Stream, when they moved to this rolling release style of distribution, how did that affect how you're doing those releases and doing upgrades for those hosts? Because you have to at some point say "This is the thing we're rolling out", but the OS keeps going.

**Anita Zhang:** Yeah. I'd say the change to Stream didn't really affect us much, because we were already kind of doing rolling OS updates inside the fleet. So when new point releases get released, we have a system that syncs it to our internal repos, and then updates the repositories. And then we have Chef running to actually pick up the new packages and things, and just updates depending on what's in those repositories. So the change to stream didn't really change that model at all. We're still doing that picking up new packages on like a two-week cadence.

**Autumn Nash:** Do you guys use a lot of automation that you build in-house?

**Anita Zhang:** Yeah. We kind of have to.

**Justin Garrison:** The repo syncing - I had a project at an animation we had \[unintelligible 00:21:19.07\] that we would sync all the repos internally, it all sits on NFS, and then we mount everything to NFS to pull in repos... And I forget, it was like a Jenkins tree of syncing jobs that would all run to like register a system, and pull down 300 or something repos that we would sync every night, and like "Okay, let's fetch all the files now." And then squirrel those away somewhere on a drive, and then host them, so that everyone else can sync to it, and then have it like rollout to the testing fleet. It's a lot of data, and it's a lot of stuff that you just have to -- as packages get removed from upstream, and you're using them in places, I'm assuming you have some isolation there, because as far as I know, most of your workloads are containerized on Twine, on Twshared as like the base infrastructure, right?

**Anita Zhang:** \[22:09\] Yup. So containers, they don't get the live updates that the bare metal hosts get. So users can just find their jobs in a spec, and for like the lifetime of the job, the packages and things that go into it don't change. I mean, there are certificates that also are used to identify the job; those get renewed... But we have a big push to get every job updated at least every 90 days. Most jobs update more frequently than that.

**Justin Garrison:** Is that an update for like the base container layer, or whatever they're building on top of?

**Anita Zhang:** Yeah, they'll actually have to shut down their job and restart it on like a fresh container, and they'll pick up any new changes to the images, or any changes to the packages that have happened in that time.

**Justin Garrison:** Can you describe Twshared for the audience as well? ...because that's one of the things that I think is really fascinating, that you have your own container scheduler, and as far as I know, all those containers are running directly with Systemd. You're not having like a shim of like an agent... I mean, you have agents, but go ahead and describe it.

**Anita Zhang:** So I used to work on the containers team, the part that's actually on the hosts. The whole Twine, our team, consists of like the scheduler, and there's like resource allocation teams to figure out which hosts we can actually use, how to allocate them between the teams that need them... And then on the actual container side, we have something called the agent, that actually talks directly to the scheduler and translate the user specification into the actual code that needs to get run on the hosts. And that agent sets up a bunch of namespaces and starts Systemd, and basically just gets the job started.

**Justin Garrison:** And that's Systemd inside the container?

**Anita Zhang:** Yeah. So the bulk of the work that is done in the agent, at least where the Systemd set up, is it translates the spec into Systemd units that get run in the container. So if there are commands that need to run before the main job, those get translated to different units, and then the main job is in like its own unit as well. And then there's a bunch of different configuration to make sure the kill behavior for the container is the way we expect, and things like that.

There's a sidecar for the logs specifically. So logs are pretty important, as you'd imagine, to users being able to debug their jobs... There is a separate service that runs alongside the container to actually make sure that no logs get lost. So those logs get preserved in the hosts somewhere.

**Autumn Nash:** Twine sounds really cool, too. I was reading the white paper about that yesterday...

**Justin Garrison:** How does that work with like the sidecar? I would assume - I've never really actually done this side the of... Like, Systemd inside the container, running on Systemd... So if I log into a host, and not the container, I see just services all the way down, right? They just look like standard Systemd units, they're just isolated from each other, right?

**Anita Zhang:** Yeah. So the container job, it will be like one Systemd unit, and you'll see a bunch of processes in it, and you'll also see a couple of agents that we run, but mostly just the usual Systemd PID 1 one inside the container, and their own instance of JournalD, Logind, and all that stuff.

**Justin Garrison:** And that was the question I actually had, is like, I assumed that Journald would handle the unit login. But you said there's a sidecar that I'm assuming is like getting that logs out to Journald on the host, or at least some way so that you don't lose those logs inside the container.

**Anita Zhang:** Yeah.

**Justin Garrison:** That's cool. At that point, it's just native Systemd, really? Like, you're just using every feature of Systemd to isolate and run those jobs... And then you have an overarching scheduler, resource allocator, all that stuff.

**Anita Zhang:** Yeah, pretty much.

**Justin Garrison:** \[25:47\] One of the things that I've found super-interesting in the white paper was host profiles, where different workloads - you basically like virtually allocate clusters, I guess, for a lack of better... Entitlements is what you call them, for like "Hey, this job gets this set of hosts", and then you can dynamically switch those hosts to needing different kernel parameters, file systems, huge pages, and you have a resource allocator that does that, as far as I understood... How does that affect what you're doing? You have a set of host profiles, you say "Hey, you can pick from a menu", and then we know how to switch between them? How does that typically work?

**Anita Zhang:** So that part's a little newer than from the time I was in containers. So you create a host profile, you work with the host management team to do that, and then you can, I believe, specify it in your job spec. And then when you need to either restart your job, or move the job around, they actually have to drain the hosts. Most host profiles require a host restart, because things like huge pages - you need to restart the hosts to apply... And then the jobs gets started back up on the host with the host profile you're asking for.

**Justin Garrison:** How does that affect you as the OS team? Is there anything that you're doing specifically for that?

**Anita Zhang:** Not specifically, but they do -- so the host agent actually builds a lot of their components on top of Systemd as well. So they've been doing things like moving more configuration out of Chef into host agent, where it's more predictable... So things like Systemd, Networkd configs, or the sysctl configs that also go through Systemd as well.

**Autumn Nash:** Is that a Linux penguin on your sweatshirt? Because that's the coolest sweatshirt I've ever seen if it is.

**Anita Zhang:** Oh, yeah. The \[unintelligible 00:27:28.11\] hoodies... Yes, this is the one that Justin was talking about.

**Autumn Nash:** That is so cool.

**Justin Garrison:** Yeah, they had them at Scale, and I was very jealous, because they're cool. And this is an audio podcast, so no one knows what we're talking about... But basically, there's a bunch of little, small tuxes inside the hood of the hoodie.

**Anita Zhang:** If anyone from Scale is listening, they probably have hoodie.

**Autumn Nash:** I'm sad that I missed your talk at Scale. It was on my schedule, and then I think -- I forget what we were doing, but somehow I ended up somewhere else, and I'm super-sad to miss your talk. Do you get to contribute a lot to open source? Because Meta seems really big on contributing, or releasing things for free, I guess.

**Anita Zhang:** Yeah... I'd say at least the way the kernel team and our team operates is that we're mostly upstream first. So everything that we write, we write it with the idea that we're gonna be upstreaming it. And that's how we managed to keep our team size small, so that we don't have to maintain like a bunch of backports, things like that.

**Justin Garrison:** But you have to wait for it though, right? You're like "We're gonna write this internally, we're gonna hope this gets upstreamed, and then we have to either wait for the release to consume it. Or we're just going to keep running it", but then if upstream needs changes, you have to kind of like merge back to it.

**Anita Zhang:** Yeah. So the kernel - we actually build and maintain internally, so we can kind of pull from the release whenever you want. And we can kind of do the same thing with CentOS too, because we all contribute to the CentOS Hyperscale SIG. That's where any bleeding edge packages that we want to like release immediately, it goes into like the Hyperscale SIG.

**Autumn Nash:** It's really cool that you guys contribute to upstream first, but also kind of maintain your own stuff, so that way you can kind of pick and choose if you want to put something -- you know, it's like a bug fix that you need earlier, you can already apply that.

**Anita Zhang:** I mean, I'd say Meta is super-into release frequently... And so if we always stick to like upstream, then we'll always get like the newest stuff, and we're less likely to run into some obscure bug from like two years ago, that was really hard to debug.

**Justin Garrison:** How does release frequently, and a million hosts go together? Because you mentioned that it takes about a year to basically rollout an update to every host? But if you're pushing out updates to the OS every month, then you have like 12 different stages of things that are going through release, and that makes it really hard to debug... Like, "Oh, what version are you on? Did we fix that bug somewhere else?" How do you manage that?

**Anita Zhang:** \[29:58\] Yeah, so it's mainly the major upgrades that take like up to a year. And we're about to go from CentOS Stream 9 to 10. That will probably take a long time than if we were just doing our rolling OS upgrades. So the thing about CentOS is that we do maintain kind of like ABI boundaries. So we expect that the changes that Red Hat and CentOS are making to packages are mostly like bug fixes that won't break compatibility in the program... And that's remained true. We haven't run into a lot of major issues with rolling OS upgrades. Most issues come from like when we personally are trying to pull in like the latest version of Systemd or something, and we're rolling that out. Those we have to do with more intention.

**Justin Garrison:** You mentioned an AI fleet... From what I've heard Zuckerberg talk about is like Meta has more GPUs than anyone else in the world, basically. How do you manage that? Not only how are the drivers installed, because Linux and Nvidia aren't always known to be the best friends, but then how do you like isolate those things, and roll out those changes?

**Anita Zhang:** Yeah, I'm probably not like the best person to ask about it, but we do you have a pretty sizable team now of production engineers dedicated to supporting the AI fleet and making sure that it's stable, and that our train jobs don't crash, and things like that...

**Justin Garrison:** Under Twshared, do they just show up as a host profile? Or do I get an entitlement that says "I need GPUs for this type of workload"?

**Anita Zhang:** It's more like the latter. So even though everything's in Twshared, we know what kind of machine type they are. So you can specify what purpose you're using the machine for, and things like that.

**Autumn Nash:** What's the difference between a production engineer and a system engineer?

**Anita Zhang:** Well, I'm a software engineer technically, I guess...

**Justin Garrison:** The title? \[laughs\]

**Autumn Nash:** So a software engineer, then there's a production engineer, and a system engineer...

**Anita Zhang:** There are a lot of titles...

**Autumn Nash:** I know...

**Anita Zhang:** I'd say production engineer and software engineer are the most similar. Especially in infrastructure, when I was in the containers team, the production engineers and software engineers pretty much all just did the same stuff. We were all just focused on scaling, and making the system more reliable. I'd say in like a product team, production engineers focus more on operationalizing and making the service production ready, while the software engineer is kind of like creating new features, and things like that.

**Autumn Nash:** Okay, that's interesting.

**Justin Garrison:** One thing I've found fascinating about some of the talks you've given and information is the fact that Meta is still notably an on-prem company. You have your own data centers, you have your own regions, you have machines... And it doesn't seem like you try to hide that from people. You don't try to abstract it away. At least I haven't ever seen a reference to like "It's our internal cloud." No, it's like a pool of machines, and people run stuff on the machines. And the software and the applications running on top of it are very much like a -- this is just like a Systemd unit; you're just running it containerized.

What other types of services do you have internally that people need? I mean, I saw references to things like sharding for like "Hey, we need just fast disk places, and we need some storage and databases externally." But what are the pieces that you find that are like common infrastructure for people to use?

**Anita Zhang:** Yeah, I mean, I'd probably dispute the fact that people have to understand kind of like the internals of how the hosts and things are laid out... So the majority of services - we're talking like millions of hosts in Twshared - they are running containers. And I'd say a lot of their knowledge about the infrastructure probably stops at when they write the \[unintelligible 00:33:43.27\] and to the point where they go into the UI and look at the logs.

So if you're just writing like a service, a lot of that's abstracted away from you. You don't even have to handle load balancing, and stuff. There's a whole separate team that deals with that as well.

**Autumn Nash:** That's awesome.

**Anita Zhang:** \[34:00\] Yeah. But if you're on the infrastructure side, sometimes you need to maintain those widely-distributed binaries on the bare metal hosts. So us running Systemd, or the team \[unintelligible 00:34:07.21\] that does the load balancing, they also run a widely-distributed binary across the fleet on bare Metal. There's also another service that does specifically fetching packages, or shipping out configuration files, and things like that. But yeah, most of the services people write, they're running in containers. Databases - they have kind of their own separate thing going on as well. Most of them are moving more into Twshared as well, but they have more specific requirements related to draining the hosts and making sure there's no data loss.

**Justin Garrison:** Right. All those shards... Making sure that enough of the data replicas are available.

**Anita Zhang:** Yeah. But they're like one of those teams that - they just want their own set of like bare metal hosts as well, to do their own thing with. They don't care about running things in a container if they don't have to.

**Justin Garrison:** Yeah, typical DBAs. \[laughs\] What would you say are some of the challenges you're facing right now on the OS team, or just in general on the infrastructure?

**Anita Zhang:** The AI fleet's always a challenge, I guess. Making sure jobs stay running for that long. I think every side event is kind of an opportunity to see where we can make our infrastructure more stable, adding more validation in places, and things like that. Just removing some of the clowniness that people who have been here a long time have kind of gotten used to.

**Justin Garrison:** And you mentioned that as far as like moving more things out of something -- traditional configuration management like Chef, and moving it into more of like a host-native binary that can manage things, I will say more flexibly... And I guess more predictably. I think you've mentioned that, where it's just like "Yeah--"

**Anita Zhang:** Yeah, making things more deterministic, removing cases where teams that don't need to have their own hosts, shifting them in Twshared, so that they're on more common infrastructure... Adding more safeguards in place, so that we can roll things out live, and stuff like that...

**Justin Garrison:** You also mentioned in the -- again, referencing the paper, because I've just recently read it... All of your hosts are the same size, right? It's all one CPU socket, and I think it was like 64 gigs of RAM, or something like that.

**Anita Zhang:** Yeah, that's probably not true anymore. But yeah, the majority of our compute fleet looks like that, yeah.

**Justin Garrison:** Okay, so the majority of Twshared is like "We have one size", and you're just like "Everyone fit into this one size, and we will see how we can make that work", right? Because you can control the workloads, or at least help them optimize in certain ways... Because not all AI jobs or big data jobs are going to fit inside of that envelope.

**Anita Zhang:** Yeah.

**Autumn Nash:** Especially with databases in AI.

**Anita Zhang:** Yeah. And we're trying to shift to a model now where we have bigger compute hosts, so that we can run more jobs side by side, stacking... Because realistically, one service isn't going to be able to scale to like all the resources on the hosts forever... So yeah, we're getting into stacking. Yeah.

**Justin Garrison:** So yeah, it's more like a bin packing approach and saying like "Hey, maybe we do have some large hosts", I'm assuming especially for the jobs that do need like "Hey, I don't fit in \[unintelligible 00:37:11.02\] of RAM", and a local NVMe isn't fast enough for whatever reason, or is going to cause the job to run longer.

**Autumn Nash:** Do you think AI is going to change the way that Meta does infrastructure, because you're adapting to the change in how much bigger the hosts you need, and how much more GPUs, and all that kind of stuff?

**Anita Zhang:** Oh, I mean, even in like the past year, we've made a few notable infrastructure shifts to support the AI fleet. And it's not even just like the different resources on the host, but all of the different components, a lot of them have additional network cards, managing how the accelerators work, and how to make sure they're healthy, and things like that.

**Justin Garrison:** Yeah, I suppose once you have any sort of specialized compute or interface, whether that's network, some fabric adapters, you always have snowflakes in some way, where it's like "Hey, this is different than the general compute stuff."

**Anita Zhang:** \[38:07\] Oh, yeah, for sure.

**Justin Garrison:** How has that affected your global optimization around things? And I know - again, the paper is old now. It's like 2020, I think is when it was published... Which is probably looking at 2019, 2018 data. But in general, something like 18% overall total cost optimization because of moving to single-size hosts, because you're just like "Hey, our power draw was less overall, globally." So I think the web tiers was like 11% -- I should have had it up in front of me... 11% more performance by switching to host profiles and allowing them to customize the host. Have you had things like that over the past four years, with these either optimizations in specialized compute, that have allowed you to even gain more global optimization? Because at a million hosts, a 10% gain in efficiency or lower power requirements is huge. That's like megawatts of savings.

**Anita Zhang:** Yeah, we are also working on our own ASICs to do like inference and training. That's probably the place where we're gonna see not just like the monetary gains from developing in-house, but also on the power and resource side as well.

**Justin Garrison:** That's fascinating.

**Anita Zhang:** That's starting to come out this year in production.

**Justin Garrison:** Have you been enabling that through FPGAs that you allow people to program inside the fleet? Or how does that -- how do you come out of like "Hey, we have an ASIC now, and it does some specialized computing tasks for us"?

**Anita Zhang:** Yeah, that's a better question for the silicon team.

**Justin Garrison:** That's right.

**Anita Zhang:** I only see the part where we actually get the completed chip, but I'm sure they're doing their development on FPGAs.

**Justin Garrison:** And at some point they have like "Here's a chip, go install it for us. And here's a driver for it." Right? They need to give that to you as a host team.

**Anita Zhang:** Oh, we have a team that actually I work pretty closely with, that writes \[unintelligible 00:39:57.12\] over the kernel. I think the accelerator is just over PCIe.

**Autumn Nash:** Meta sounds awesome. It sounds like you get to actually really dive deep on what you're learning, and like your part of infrastructure, or development... Because it seems like you have teams for everything.

**Anita Zhang:** Yeah, you can really go as deep as you want to here.

**Justin Garrison:** Yeah, I really want to see an org chart now. There's so many of these teams that just keep popping up, like "Oh, yeah, no, we have a team that does that."

**Autumn Nash:** I know. That's cool that it almost gives you enough abstraction that you can really focus on your specialty, because you get to really be deep in that area, because you're not having to worry about all the extra components, I guess.

**Anita Zhang:** Yeah. That's my favorite part. I mean, some people are just really into developing C++, or like the language. But then I'm on the infrastructure side; I just really like working directly with hosts.

**Justin Garrison:** And you've been there for a little while now, right?

**Anita Zhang:** Almost eight and a half years at this point.

**Autumn Nash:** I feel like people go to Meta and stay there forever... Because you probably get to get really good at whatever you're doing. Plus, I feel like it would be cool to talk to those other teams, because when you have questions, they must be really good. If they're so specialized in that area, then they must know so much about that when you go to like collaborate with other teams.

**Anita Zhang:** Yeah, it's super-nice \[unintelligible 00:41:13.27\] Like, literally anyone, if you have a question. Everyone's super-nice about helping you out, as long as you're nice, too.

**Autumn Nash:** What did you do before Meta? Or is this like -- have you worked at Meta your whole career?

**Anita Zhang:** Yeah, I started here out of graduation. I did one internship before I started here full-time.

**Justin Garrison:** What are you looking forward to working on in the next year? Are there big projects or big initiatives that you would like to tackle? Or even things in the open source, or like things that you want to give back and make sure other people know about?

**Anita Zhang:** I mean, I'm always interested in doing more stuff with Systemd. I think there's still a bunch of components internally that could be utilizing Systemd in more ways, making sure that we're on a common base. That's kind of the main general goal that I'm always going to be focused on, I guess.

\[42:10\] There are also some bigger -- I mean, Journald, I've been trying to get us to replace our syslog completely, and move entirely to systemd-journald. That's an ongoing effort.

**Justin Garrison:** That was one of my best claim to fames at Disney Plus, was I disabled our syslog. I was like "No, we're just doing Journald now", and it saved us so much just like IO throughput on the disk, and everything... And there was a lot of problems with it, too. Maybe we weren't ready to do that, but I was like "We can't ship Disney Plus until our syslog's off."

**Anita Zhang:** Yeah, I wanna be there.

**Justin Garrison:** It was great. It was a great feeling one day, when I'm like "I don't need this anymore. I don't need our syslog."

**Anita Zhang:** I mean, \[unintelligible 00:42:50.13\] Systemd Networkd was pretty cool, but... I mean, now that that's done, I can just like be happy with it. There's probably some more stuff we're going to be doing with like systemd-oomd, the out of memory killer. I think we're about ready to get Senpai upstreamed into Systemd. Senpai is like a memory auto-resizer that we wrote... And I don't think that that's been open sourced in any way. I mean, we have like an internal plugin to do that with the old \[unintelligible 00:43:22.28\] I think it's time to get that into systemd-oomd as well.

**Justin Garrison:** Is that for resizing the container, the cgroup, and saying how much memory they have available? Or is that something different?

**Anita Zhang:** It's a way to kind of poke a process and make sure that they're only using the amount of memory that they actually need... Because a lot of services and things will allocate more memory than they need.

**Justin Garrison:** Interesting. Like a "Get back in line. You don't get that memory."

**Anita Zhang:** A little bit.

**Justin Garrison:** Yeah. Have you been doing anything with immutable file systems, or read-only, or like A/B switching hosts for -- Fedora has Silverblue... I use a distro called Bluefin, which is kind of built on top of that, which does like A/B switching for upgrades to do reboots every time. It sounds like you're doing rolling updates, so you would still be writing packages to disk instead of like flipping between partitions.

**Anita Zhang:** I mean, we're trying to shift to like more of an immutable model internally. We have something called \[44:22\] And right now we're rolling out a variation of \[unintelligible 00:44:26.01\] It's similar to -- the goal is like kind of an immutable file system, but it's making strides to get there. We still have to rely on Chef to do a lot of configuration, but a lot of it has shifted to a more static configuration, that is more deterministic and gets updated at a cadence where we can more clearly see what the changes are.

**Justin Garrison:** And I was asking that because leading into you said you want more Systemd stuff, and I'm curious if you're trying to use things like Systemd system extensions, or sysext, or whatever it's called, that are like layering different things on top of Systemd... Which is typically for an immutable file system, but still allow changes to happen.

**Anita Zhang:** Yeah. I haven't looked too deeply into what that team's been up to... But I do know that they did make use of some of the bleeding edge Systemd features to build these images, and things like that. We're not using Systemd sysext just yet. I mean, I wouldn't count it out.

**Justin Garrison:** Yeah. It's one of those things that looks really interesting, especially if you're trying to move more into immutable filesystem layers... Lik, "Hey, I still need to configure this. How do I do that in a composable, immutable way?"

Well, Anita, this has been great. I'm just nerding out, because I'm trying to learn all the things that I've done in the past, and still doing in the future... And I think it's great that Meta is not only doing this at like just a core level of just like "Hey, we just have Systemd, and things run in that", but also giving back upstream with the Systemd builds, and all the stuff that you've been publishing in the white papers, which Autumn and I were reading, and talks, but also just the open source work... So I think that's fascinating. And we didn't even get to talk about eBPF really that much... Because that's a whole other topic.

**Anita Zhang:** \[46:08\] Oh, yeah... \[laughs\]

**Autumn Nash:** You have to come back. I think Meta gets a really bad rap for a lot of things, but I don't think that you guys get enough credit for the amount of open source you guys do, and the white papers... The white papers you guys have written on databases and the database contributions alone is amazing. And there's been so many things given away for free, so people can gain knowledge. I don't think Meta gets enough credit for that.

**Anita Zhang:** Yeah, I think from the engineering standpoint we just kind of get the warm fuzzies when people actually use and like the stuff we write...

**Autumn Nash:** That's like the best part of being an engineer.

**Justin Garrison:** Well, I find it fascinating because Meta is one of the few places that doesn't sell the things that they talk deeply technically about. Amazon and Google and Microsoft are like "Hey, we've built this amazing thing. Now go buy it from us." And Meta is like "No, we're solving our own problem, and we're just giving it back to you." And that's a really \[unintelligible 00:46:59.04\]

**Autumn Nash:** That's what I'm saying. I think that people talk about what Meta does wrong, but rarely do people talk about the fact that they'll be like "Hey, I just figured this really cool way to do this at a crazy scale. And here it is. You can read about it and learn about it for free." And I'm like "That's awesome." So... I think I've learned a lot from the different database papers, and different white papers that you guys have released... And it's crazy that you guys released an entire AI model for free. It's insane.

**Anita Zhang:** Yeah.

**Justin Garrison:** Yeah, I've been running a Llama. I haven't done Llama 3 yet though, but it's on my list of things to play with.

**Anita Zhang:** Awesome.

**Autumn Nash:** I feel like white papers are a great way to learn and really get in-depth for something, so you can go and like do that project or try something out, because you get to see why that solution was made for that problem, and kind of like figure out how to use the projects that you guys release. I think it's cool the way you do that.

**Anita Zhang:** Yeah, I really appreciate the academic side of things.

**Justin Garrison:** Yeah. And then having a podcast, we get to have people come on like you, that are hands-on all the time, and just like figuring out those problems. So this has been great.

**Autumn Nash:** That's so cool, to read a white paper and then get to talk to you about it.

**Justin Garrison:** Anita, thank you so much... And we'll reach out, I'm sure, in the future with more things. Maybe in the future we'll talk about eBPFs and ASICs, and more work that you're doing on the OS layer... Because that's just a fun thing, and seeing how it grows.

**Anita Zhang:** Alright. I'm looking forward to it. Thank you.

**Autumn Nash:** Have a great day.

**Break**: \[48:29\]

**Justin Garrison:** Thanks again, Anita, for coming on the show and talking to us all about how Linux is managed at Meta, and how containers run, and upgrades, and all that stuff. Again, if you want to read more, the link to the whitepaper is in the show notes, so check it out. For today's outro I made up a new game with a silly name. This one is called "Faux or fo' sho'." And Faux being spelled f-a-u-x, so this is -- you're gonna have to spot the fake or the real thing in this list.

**Autumn Nash:** Oh, I'm dying... I'm not prepared.

**Justin Garrison:** So in today's list of Faux and Fo' Sho' we have lists of white papers. Some of these white papers have been generated by ChatGPT. Some of them are real white papers that have come out in a fairly --

**Autumn Nash:** Oh God, "whitepapers generated by ChatGPT" just sounds \*bleep\*.

**Justin Garrison:** I mean, it only gave me the titles. I didn't ask for a full white paper. I didn't read it.

**Autumn Nash:** Oh, no...

**Justin Garrison:** But we're gonna start with one that -- I believe all of these are going to be loosely AI-related, because we're on an AI theme with \[unintelligible 00:53:47.15\] So one upfront that is a very common and very popular whitepaper, for people that don't know it - I'm just giving you this first one... It's called "Attention is all you need." And this was the Google white paper about transformers, and when they kind of introduced transformers into AI, and how words relate to the word before, so it can keep these big context windows. It's a very notable AI paper, because it introduces transformers and attention. So that's the first one. But that's what we're talking about here. So I'm just gonna give the title, and Autumn, you've gotta tell me if it's Faux or Fo' sho'. So the first one we will start with is "AI for all. Strategies to improve representation and inclusivity."

**Autumn Nash:** I hope it's real, because it sounds not horrible...

**Justin Garrison:** It is a paper that should exist, but it is definitely faux.

**Autumn Nash:** I feel like we should have known it's too good to be true.

**Justin Garrison:** I know, right? Throwing it out there if anyone wants to pick these up.

**Autumn Nash:** It doesn't sound like they get enough funding.

**Justin Garrison:** Yeah... Maybe you have to figure out who's going to pay for that one, to do that research. So how about "Casually abstracted multi-armed bandits"? Those are words...

**Autumn Nash:** I think it's fake... I don't know.

**Justin Garrison:** That is a real --

**Autumn Nash:** Why?! What is this about?

**Justin Garrison:** I've just read the intro on this one... Multi-armed bandits is about like decision trees, and like how you figure out what to deal with... And so they're abstracting these decision trees in AI. Yeah, these titles are just --

**Autumn Nash:** Bandits?

**Justin Garrison:** Bandits. Yeah, multi-armed bandits.

**Autumn Nash:** Okay...

**Justin Garrison:** So that one is Fo' Sho'.

**Autumn Nash:** Goodness...

**Justin Garrison:** "AI and the future of work: adapting to automation and augmentation."

**Autumn Nash:** That sounds real, but I feel like all the real ones are made up by AI, and all the fake ones are like "What is going on here?" So I'm gonna say this should be real, because it sounds legit... But it's probably not, because it sounds good.

**Justin Garrison:** Yeah, that one's fake.

**Autumn Nash:** Oh, my God.

**Justin Garrison:** If they sound too good... I probably should have picked more realistic titles, but all the realistic titles were just like really boring.

**Autumn Nash:** I should have known what I was getting myself into with you...

**Justin Garrison:** Yeah. So that one is definitely fake. Okay, here's another. "The hidden costs of homogeneity: exploring diversity in AI development."

**Autumn Nash:** \[56:07\] It sounds too good to be real, so...

**Justin Garrison:** I know, right? It's just picking them out now. It's just like "Yeah--" ChatGPT knows what should exist.

**Autumn Nash:** It would be a good idea. It might make things better, God forbid...!

**Justin Garrison:** And I picked those two specifically because Autumn did give a "Diversity in AI" talk at Scale, and so I was kind of leaning into that...

**Autumn Nash:** I'm not always this bitter, I promise...

**Justin Garrison:** I definitely was pulling those out as like "Oh, yeah. Autumn knows these should exist."

**Autumn Nash:** Did you take this from my talk...?

**Justin Garrison:** \[laughs\] "ChatGPT, generate some white papers from Autumn's talk." How about "Probabilistic inference in language models via twisted sequential Monte Carlo?"

**Autumn Nash:** I think it's real, but what are we talking about? What is sequential Monte Carlo?

**Justin Garrison:** These are English words...

**Autumn Nash:** Like, isn't a Monte Carlo a car? What are we talking about? And I never know with you, because you're always bringing out like a car example, or like analogy for everything... So I'm like "Did you make this one up, Justin? Or is it real?" It could go either way.

**Justin Garrison:** No, Monte Carlo is actually an algorithm.

**Autumn Nash:** Interesting...

**Justin Garrison:** It's popular actually in the animation area, which is where I first encountered it... And I started reading white papers about how Monte Carlo works. Because people used it for how they're rendering things, and how they're rendering light into scenes... And specifically, I think it's predicting on something. I have to look it up.

**Autumn Nash:** Well, I didn't know you could use an algorithm to render light. That's pretty cool. I mean, it makes sense, but...

**Justin Garrison:** I have so many cool white papers about ray tracing, where Pixar and Disney and DreamWorks, and all the animation studios were doing ray tracing early on, and figuring out "Hey, how do we figure out how these rays work?" But anyway, that's a side -- this one is real, again, because it sounds absolutely bananas, with the terminology and words that were used. So yeah, that one is Fo' Sho'.

**Autumn Nash:** Every time you say that word, it makes me happy.

**Justin Garrison:** I know. It's obvious that I should not be saying that word.

**Autumn Nash:** I need you to repeat the whole title before we like sign off, just so I can enjoy it like one last time.

**Justin Garrison:** It's Faux or Fo' Sho'. \[laughs\] I had to find something that had some alliteration.

**Autumn Nash:** It's ridiculous, and I love it.

**Justin Garrison:** Originally, I had something around Cap and No Cap, but that was too boring, so...

**Autumn Nash:** Oh, we're bringing Cap back for something. We need that. Oh, gosh...

**Justin Garrison:** I'm reaching behind me for the podcast listeners, so Autumn can see...

**Autumn Nash:** What do you even have in there?

**Justin Garrison:** These are my capacitors... And so the camera's not going to focus, because -- there you go. See, it's labeled as Cap. And the bottom box here is all my resistors, and it is labeled as No Cap. \[laughs\] \[unintelligible 00:58:55.26\] It's an audio show, so no one cares, but yes, my --

**Autumn Nash:** \[59:00\] Oh, you brought like nerdy and like pop culture together, and I love it. I love it!

**Justin Garrison:** So yeah, that's my organization of my electronics in my shelf behind me.

**Autumn Nash:** This is why I'm still friends with you, even though you don't drink coffee and you forgot how we met.

**Justin Garrison:** My son eyerolled like right out of my office when I showed him that. He just like hurt himself rolling out the door.

**Autumn Nash:** Oh my God, our kids are getting to the age where they can judge us. We're about to have teenagers, and they are gonna side-eys us so bad. My kid already side-eyes me, and he uses my sarcasm back, and it's so offensive. It's like a tiny version of me, and when I say these things to people, I'm like "Oh, bird!" And then when he says it to me, I'm like "Ahhh...!" I'm like "Why would you hurt me like that?"

**Justin Garrison:** That is definitely the reinforced learning of the artificial intelligence model working there. Like "Oh, man, that was me. That was all me."

**Autumn Nash:** It's like hearing my voice back at me, and it is painful.

**Justin Garrison:** You have to think later, like, "Did I say that? Wait..."

**Autumn Nash:** It's like his voice almost turns into mine, and when he does it to his dad, it's hilarious. When he does it to me, I'm like "How could you do my own voice to me? I thought you loved me. I gave birth to you." It's horrible. I'm never sure if I'm like proud, or like hurt, or...

**Justin Garrison:** You can be both. It's fine.

**Autumn Nash:** Some of them are really good. But then sometimes I'm like "How dare you...?"

**Justin Garrison:** So that's all the titles and white papers that I generated... So we'll let you off the hook. But I definitely think this one --

**Autumn Nash:** Dude, I cannot believe one had Monte Carlo. Now I want to go look up this algorithm, because that's fire.

**Justin Garrison:** Yeah, this one definitely is going to be an outro that will probably come back at some point, because this was -- I had more I wanted to do, and I was just like "I'm not gonna --"

**Autumn Nash:** We should do it for not just white papers too, but we should do like projects.

**Justin Garrison:** There's a lot. There's a whole list of open source projects, and...

**Autumn Nash:** Also, I just want you to keep saying that title over and over again --

**Autumn Nash:** Faux and Fo' Sho'.

**Autumn Nash:** I cannot -- like, this is how we know you spent too much time in California. That is such a California moment.

**Justin Garrison:** Thanks everyone for listening to this episode, and we hope to -- if you want to reach out, we actually... I haven't said - if you have people that want to be on the show, if you have topics you want us to cover, email us, shipit \[at\]Changelog.com. We read all the emails, we get back to most of them... And we always are looking for what you're learning, and what you're working on, and we like it to be open source, and what does it take to run software. And next week we have another retro episode that I'm just going to tease, talking about an old-school website that you may have heard of, and how it used to run 20 years ago. So...

**Autumn Nash:** Also, Rich is so much fun.

**Justin Garrison:** I know, Rich is great. So thanks everyone, we'll talk to you again later.
