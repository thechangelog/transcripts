**Jerod Santo:** We're back with Gerhard Lazu, our resident SRE. What's up, Gerhard?

**Gerhard Lazu:** It's all good. It's actually ten times better...

**Jerod Santo:** Our website is? I hope so...

**Gerhard Lazu:** That's the title of this show, it's "Ten times better." \[laughter\]

**Adam Stacoviak:** I like ten times anything.

**Jerod Santo:** Yeah, 10x SRE, or what's going on here?

**Gerhard Lazu:** That's exactly what it is. It's 10x... That was the theme for this setup; it has to be ten times something. It doesn't matter what that ten times is, as long as it is ten times something, like an order of magnitude better. And guess what - it is.

**Jerod Santo:** Nice. So it could have been ten times slower to deploy, or ten times longer response times - none of that. It had to be ten times better.

**Gerhard Lazu:** Yeah.

**Jerod Santo:** Well, for those who haven't listened to the annual Changelog infrastructure episode - welcome. You are here, this is not -- it hasn't been a whole year, it's been a half year, so it's now like a semi-annual... But we worked faster this time, didn't we, Gerhard?

**Gerhard Lazu:** We did, because we had the basics covered really well, and the base was so good that iterating was super-simple, and what we iterated on was basically what mattered the most - uptime and response latency. We had a couple of tricks up our sleeve; I think it was combined, I had one and you had one... We've put them together, and we did it faster and we did it better this year. And not much has changed, actually... So I think that's almost like what everybody wants - introduce a little change, not much change, but make it so much better... Which we did.

**Adam Stacoviak:** Fine-tuning. There's details in the fine-tuning that make things faster, and that's what you've gotta optimize for.

**Gerhard Lazu:** Yeah, I think it takes a while to learn your system, I suppose, to learn all the components, properly learn them... And then when you're comfortable with all the components, figure out which is the smallest change that you can make for the biggest improvement. And that's what we did.

**Jerod Santo:** Yeah.

**Gerhard Lazu:** Shall we spoil it? I mean, if someone just wants to listen to five minutes, we can spoil it and they can--

**Jerod Santo:** No, let's tease it. Let's hold it back.

**Gerhard Lazu:** Alright, we'll tease it.

**Jerod Santo:** Stick around, listener...

**Adam Stacoviak:** Yeah.

**Jerod Santo:** \[03:49\] Let's start with this - not much changing this time around. A lot changed last time around. Our 2020 episode, which came out last October, was a big change... A lot going on, and some of the reaction to that episode was -- and we're on Kubernetes now, and it's like "Hey guys, you're on a three-tier web app website." You have a database and an application server, and NGINX, or whatever. Kubernetes is way overkill.

So let's start there, Gerhard... What do you think about that? Do you agree with that?

**Gerhard Lazu:** Not really. \[laughter\] And this is like the \[unintelligible 00:04:22.23\] controversial part.

**Jerod Santo:** I assumed you were gonna say that, because you're the one who set it up, so...

**Gerhard Lazu:** Right, so... I think that's a very simplistic view, because you're right - when you boil it down, that's exactly what you have. It's just a Phoenix app, it's a web app. You have a database, you have a proxy (maybe), and that's about it. That's what you have. But it's almost like the iceberg. There's like the thing that you see at the top, and there's everything else behind or below the sea level, or the sea line.

So what else do we have below? Well, you have certificates. You have load balancers. You have DNS. You have code updates. You have tests. You have CI/CD. You have dependencies. You have dependencies of dependencies. And the list goes on and on and on. And things are changing all the time. So given you have so many things, how do you manage that? Usually, what happens - you don't. You just go with the flow. Let's say you don't care about your CDN integration. Just tick a box and assume everything just works. And most of the time it does, but when it breaks, do you even know that it broke?

What about the monitoring? How do you manage the monitoring? And again, it just goes from there, because you're running a production system. A production system that is serving a lot of traffic, which Changelog.com does. And even if it's a simple app -- I think it's simple because we made deliberate choices; it could be a microservices architecture. We didn't choose that, but it could be. The fact that we don't have that - it doesn't mean that we don't have all these things around it. Could you have one thing that manages all those things? Could you have -- control plane is the term that many use today, but that's what we kind of have. We have a control plane that manages all the things. And when I say "all the things" - all the things that we could convert. There's always more work that we could do. And I think that's where the next improvements are coming from for us. We have a very solid base, and improving is very simple now. And everything is like in a single place. So you have this single thing, which you can hold in your head. Everything is automated, everything recovers... And again, I don't wanna spoil it too much, but migrating from the 2021 setup to the 2022 setup in terms of time-wise - we could perform a live migration in 27 minutes, from nothing to everything. How cool is that?

**Jerod Santo:** Do you already know all the Kubernetes stuff? So when people think about setting up a Kubernetes cluster, they talk about the complexities of the API perhaps, or the tooling, or the ecosystem... I always think back to CNCF's -- it's not a roadmap; what is that? It's like a trail...

**Gerhard Lazu:** The landscape.

**Jerod Santo:** Yeah, the landscape... And there's all of these words that I don't know any of them, and each one of those is like a complex piece of software. And I get overwhelmed. You've got this rolled out, and I'm just curious, was there a Kubernetes learning curve for you, or had you already done that previously, and so when you started helping us you already understood what you were doing? Because I think a lot of the cost for people - if they're like "Well, is this worth doing for me or not?", it's like "Well, do I have to learn all the Kubernetes things, or do I need to have somebody that knows them already?" I'm just curious where you're coming from.

**Gerhard Lazu:** So I had some knowledge, but it was mostly basic. But the thing to understand is that I have been doing infrastructure for - I don't wanna say decades, because that's like bragging... But let's put it "a really long time." We were joking about webmasters... I used to be one. CGI-bins - oh yes, baby. Those were like the good old times.

**Jerod Santo:** "Oh yes, baby..." \[laughs\] I remember CGI-bins. I wouldn't describe them as the good old times, but... You were probably better at them than I was.

**Gerhard Lazu:** \[08:14\] Well, there you go... Perspectives. \[unintelligible 00:08:15.00\] and you remember the past much better than it actually was. So there's an element of that.

**Jerod Santo:** Right.

**Gerhard Lazu:** So I've been doing this for a really long time, and I can appreciate the cycles that we went through. We had many, many cycles, and I've learned to learn on the job. And if you optimize for that, there's nothing new that is too daunting, or too -- I mean, it's exciting; you'll make mistakes, but after you've been over six, seven cycles... They come and go. Remember Ruby on Rails? Oh man, those were the good old days. Phoenix I think captured some of that... The point being that even though I didn't know, I kind of know how to navigate that landscape. And you're right, if your baseline is like zero and you have little experience, it is daunting, and you would want a curated experience. But if you have seen these new technologies emerge, and you know where you are in the cycle, like are you going on the uptrend? Where about are you in the law of innovation of diffusions... Or the law of diffusions of innovations?

**Jerod Santo:** That sounds better.

**Gerhard Lazu:** Uh, what is it...?

**Adam Stacoviak:** Law of diffusion of innovation.

**Gerhard Lazu:** That's it.

**Jerod Santo:** What's that?

**Gerhard Lazu:** So early adopters -- basically, any new thing, whenever you're introducing it, you have to focus on the first 2.5%, the early adopters.

**Jerod Santo:** Oh, this is like the curve of people who are gonna adopt it. It starts with like the enthusiasts, and it goes to the...

**Gerhard Lazu:** Exactly. Early majority...

**Adam Stacoviak:** The spread of a new idea.

**Gerhard Lazu:** Exactly.

**Jerod Santo:** Gotcha.

**Gerhard Lazu:** And Kubernetes right now I would say it's the late majority. It's not laggards. You can still not do Kubernetes. But I think it's the late majority now. So we waited for it long enough before we went into Kubernetes... I would say we were towards the end of the early majority that adopted it. That's what I think. So a lot of the components were fairly mature. And while mistakes could be made, it was more difficult.

Our hosting provider, Linode - because that's how it all started... "Let's get some VPSes" - remember those days? And then VMs, and then cloud instances...

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** So they offer a managed Kubernetes service. And that was the thing which we were waiting for, so that we wouldn't need to worry about the control plane, about Etcd, and certificates, and the integration with \[unintelligible 00:10:37.28\] So all that stuff was abstracted away from us. Once we had that, we had the building blocks. And we had to identify a couple of things, but they were fairly well-define - cert manager, external DNS, Ingress NGINX... That was pretty much it. And these were fairly standard components that have been improved over the course of a year or two years. So we were just like after 1.0 -- I think cert manager was the only one which wasn't 1.0, but then later on it was...

So the components were fairly mature. There were so many blog posts, and use cases, and mistakes that have already been made before us. And what we wanted to do was fairly standard. So there's nothing crazy. The documentation was written... We weren't those early adopters. We were like towards the late early adopters; we were not the innovators, definitely not.

So a lot of the stuff made sense, and it was easy. Now, having said that, we still hit a couple of interesting things.

**Jerod Santo:** It doesn't mean there wasn't any pain, right?

**Gerhard Lazu:** Yeah, we still hit a couple of interesting things. Shall we go into that? What do you think? Some interesting things that we've hit? So some interesting things that we've hit were around the PostgreSQL operators. We chose PostgreSQL Crunchy first, and it was fairly hard to work with it because of how complicated it is. It's doing so many things, it has so many features. And the replication bit us.

**Jerod Santo:** Right.

**Gerhard Lazu:** So we had a replicated PostgreSQL, and we had downtime because it was replicated. You wouldn't expect that to happen.

**Jerod Santo:** \[12:12\] Because it wasn't replicated, right?

**Gerhard Lazu:** Because it was replicated. We had downtime because it WAS replicated.

**Jerod Santo:** I thought it stopped replicating.

**Gerhard Lazu:** Exactly, it stopped replicating.

**Jerod Santo:** Okay, so it wasn't replicating... \[laughs\]

**Adam Stacoviak:** Which one was it? \[laughs\]

**Gerhard Lazu:** No, no, no. Hang on. So we had the replication in place. The replication stopped working...

**Jerod Santo:** And it took down our primary system.

**Gerhard Lazu:** It filled up the writer headlog, it filled up the disk...

**Jerod Santo:** Right.

**Gerhard Lazu:** It went down. The secondary was way, way behind, so it couldn't be promoted to primary, and we had downtime.

**Jerod Santo:** Right. And we had data loss.

**Gerhard Lazu:** And we had data loss.

**Adam Stacoviak:** Yeah, we did.

**Gerhard Lazu:** Oh, yes.

**Jerod Santo:** That's way worse than downtime, in my opinion.

**Gerhard Lazu:** Oh, yes. We had the backup from like six hours ago, or...?

**Jerod Santo:** It was like six hours.

**Gerhard Lazu:** Nine hours ago, or something... It was like a bunch of hours and we've lost some data, yes.

**Adam Stacoviak:** Thankfully it wasn't a ton of data, but it was definitely a data loss.

**Gerhard Lazu:** Because we had backups...

**Adam Stacoviak:** That's the lucky part on our side.

**Gerhard Lazu:** Because we had backups, yeah.

**Jerod Santo:** We had good backups, but yeah, six hours back... Thankfully -- was there any podcast episodes that were published during that time? I don't think there was an episode. That would have been a bigger problem.

**Adam Stacoviak:** Something was...

**Jerod Santo:** There was just news items and comments...

**Adam Stacoviak:** Mm-hm...

**Jerod Santo:** ...and a few things where I had edited a thing and I had to go back and edit it again. Thankfully, we caught it fast enough that I remembered, and we're a small team, so we remembered our data loss. We were like "I know what I did yesterday", or the last six hours... So we fixed it up.

**Adam Stacoviak:** In a larger team that would have been catastrophic.

**Gerhard Lazu:** Yeah. That was not cool. That was really not cool... And you go through the documentation, and it's not like "Do this" or "Do that." You don't have a list of simple steps to follow. And then you're scrambling, and it's like "I just need to get this thing back up." That's all we cared about. And what would be the simplest thing? So I think two hours later we had this like "No, we just have to restore from backup", because resizing the disk was difficult... It was just a mess.

I think this goes to show that it has not matured that much. I mean, it's getting there, but it hasn't matured that much. And if you need that type of redundancy from PostgreSQL, then - well, you either have some DBA chops, especially when it comes to PostgreSQL and you know what you have to do, or you're just paying for that... Which, I think for us, if it really mattered, we would have just paid for that, for the problem to have been taken care of.

But the interesting thing is, I always thought that maybe Crunchy was too complicated... And then we tried the operator, the Zalando one, and the same thing happened. So it wasn't an operator thing. And here's the thing - we still don't fully understand where the latency is in the Kubernetes networking stack, but we know that there is some latency and we have some very high spikes... So an operation that should take maybe up to 100 milliseconds will take five seconds. And then if you have plenty of those things in a certain series of events, things will just get out of sync, and they will not be able to continue replicating correctly. And when that happens, the system will not be able to recover.

It was a surprise to me - and I remember looking at this for a really long time, and thinking "Could it be Linode's private networking?" And it wasn't. That wasn't the problem, even though it indicated there's some network latency. So we went down to a single Kubernetes node, everything was running on the same node, and it still had the same latency problems. So there was something -- and it wasn't CPU-bound, it wasn't high network throughput, so we weren't hitting any sort of limit, other than network latency.

So how many metrics would we need to enable in the different layers of the stack, and how well would we need to know that stack to debug this issue? I think that's where a lot of people that hit issues with Kubernetes - that's where they're coming from. You wouldn't expect these -- these aren't normal problems; these are just almost like specific to the stack that we are running, which in this case is Kubernetes... So you kind of need to be an expert to kind of know how to look at this...

\[16:16\] But I do hope that some technologies -- I think they've been around for a while, but again, it goes back to how do you pick and choose your components. So what I'm wondering is would Linkerd have helped with this? Could Linkerd show us the latency between the different services, and to see when it spikes?

**Jerod Santo:** What is Linkerd and how would it do that?

**Gerhard Lazu:** It basically intercepts all the traffic between -- imagine Ingress NGINX when it talks to the app, Linkerd would place itself between Ingress NGINX and in this case the app. So we'd see all the latency between the two components.

The same way it would intercept all the traffic between the app and the database, the PostgreSQL service, to show us when there's any sort of weird latency between the two services.

Now, we could enable all the metrics for PostgreSQL, but you need to find the dashboards, then you need to understand those dashboards, if you have Grafana or something else... Then you're literally becoming a DBA.

**Adam Stacoviak:** That's the hard part though. You talked about Crunchy... What was the other one you talked about we moved to?

**Gerhard Lazu:** The Zalando PostgreSQL.

**Adam Stacoviak:** So you've got those two, and then you consider "Would Linkerd have helped us?" But that shows to me at least, from someone from this perspective, which is not a Kubernetes operator - I'm not an SRE - is that you have to have some sort of understanding of the different tooling available in the ecosystem, which means you've gotta pay attention, very closely...

**Gerhard Lazu:** Yes.

**Adam Stacoviak:** And not to just know which tools are available to manage Postgres, like we need to, and replicate and whatnot, but also a high degree of understanding of those tooling and how they'll actually help you. I think that's just a very daunting, high-touch world that Kubernetes presents. It may be the future, and I'm not sure in terms of the law of diffusion and innovation where we're at, if it's early majority or late majority in terms of adoption of Kubernetes at large, but it seems like it's still iterating, it's still getting better... Because we thought it was Linode's networking, and it wasn't. Then you suggest different tooling... But that to me says you've gotta have your ear close to the ground of Kubernetes and all its intricacies to really deal with this kind of problem, or problems like it. We were dealing with it in Postgres. I'm sure there's other databases that are gonna have issues. But it's similar, it's the same kind of issue, where it's a latency of some sort that spikes and causes everything to slow down, and then... Haywire.

**Gerhard Lazu:** Yeah. So they do say - and let me be specific. Kelsey Hightower has been saying this for a long, long time - don't run your data services on Kubernetes, because things get complicated. And I think this is a first-hand experience of what he was referring to. Things may seem okay for a long time, but then things start getting problematic. You have the combination of tooling that maybe wasn't meant to run in these types of environments, and how do you basically evolve it so that it embraces this distributed -- everything can go and come within milliseconds, as containers do. So I'm wondering if something like CockroachDB - which is meant to be run as a distributed PostgreSQL replacement - would have helped. I don't know. Would we have benefitted from a managed PostgreSQL instance? Maybe. So maybe we should have listened to that advice and not run PostgreSQL in Kubernetes.

But all these things - first of all, they made us just understand the stack a little bit better; when I say "us", mostly me... And it made me realize that simple is best. So for the 2021 setup, we are running just a very simple, stateful set, single PostgreSQL instance that can restore from backup in less than one minute.

\[20:14\] Let's say that you lose everything. If you backup frequently, which we do - every hour, by the way; and I have to change that setting. I've set it to be three hours, but I need to change it to one hour. It's super-simple. And then the database will back itself up every hour. We can lose an hour worth of data; we can back it up every 30 minutes. But it's very simple. And then you have backups, you can self-expire them... By the way, we backup to S3... And we backup the entire media as well.

These backups, the reason why they were important is because when we did the 2021 setup, all I had to do - I had to let this system restore from backup, to pull all our media, which is 85 gigabytes right now; all the files, all the mp3's, all that stuff. So to download that from S3 is fairly fast, especially for mp3's. They download like a few gigs per second. It's gigabits, not gigabytes, by the way, and we have 85 gigabytes. That's an important distinction. But it's all those avatars, all those small files when you have to download, they take slightly longer, because there's so many of them...

But we can restore everything from scratch -- so let's say we delete everything. Within 27 minutes, because of all those small files, everything is restored. The database, super-fast; the media files, the whole lot. And because it's so simple, do you need to have a distributed system? You can use these local SSDs; that's another problem which we had. Disks not dethatching, nodes not rebooting... We had another downtime because of that. And I know that all these issues have been fixed. We were early adopters in the case of Linode Kubernetes engine.

**Jerod Santo:** Right.

**Gerhard Lazu:** It shipped in November 2019, we started using it, it was the beta... And just when it went live I think in May, we were already starting to switch some production workloads across. And then by -- was it August or September? I can't remember. Everything was across. Something like that.

So did we need a multi-node Kubernetes cluster? The answer is no. What we needed was proper CDA integration. And that's where the speed comes from. So by properly integrating with a CDN, in this case Fastly, the website is actually 15 times faster. The latency.

**Adam Stacoviak:** Did you say 15 times?

**Gerhard Lazu:** One five. Yeah.

**Adam Stacoviak:** One five.

**Gerhard Lazu:** Actually, let's do this... By the way, we are integrating with Grafana Cloud, so we ship all the logs, all the metrics to Grafana Cloud, and then we have synthetic monitoring set up there, we have probes running all around the world... By the way, not all probes are reliable, but we have plenty to show us what's happening.

**Adam Stacoviak:** And we're monitoring our babies now.

**Gerhard Lazu:** We are, yes. The feeds, and we have alerts, and reports... There's so many things we have set up, so thank you, Grafana Cloud. That's a really cool thing.

**Adam Stacoviak:** Behind the scenes Jerod called our feeds our babies, so...

**Gerhard Lazu:** Yes, he did... \[laughs\]

**Adam Stacoviak:** A little joke there, but... Yes, we're monitoring our babies, which is our podcast feeds.

**Gerhard Lazu:** Yes. And if a baby is crying, guess who gets the Telegram message? This is a Grafana Cloud integration. I do.

**Jerod Santo:** That is the way it should be.

**Gerhard Lazu:** Yeah, exactly. That's how you stand by your infrastructure, if you're willing to be woken up at night. And guess what - we're caching it... So caching doesn't go down anymore. All of Fastly would have to be down before Changelog would be down. So we have proper integration, which we didn't have before. We did some caching, but not as much as we do now.

Anyways, before we enabled caching, the Changelog website, the average latency - so we have San Francisco, Dallas, New York, London, Frankfurt, Bangalore, Sydney and Tokyo. These are all our probes. So the average latency across all probes was 818 milliseconds, before.

**Jerod Santo:** \[24:06\] That's kind of embarrassing.

**Gerhard Lazu:** Yup. Now it's 66 milliseconds. So how much is that? 880 by 66 - 13.3 times. Not quite 15, but not 10 either. It's more than 10.

**Adam Stacoviak:** We can round it to 15.

**Gerhard Lazu:** And guess what the uptime is?

**Adam Stacoviak:** A hundred percent.

**Gerhard Lazu:** A hundred percent, exactly.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** A hundred percent. \[laughs\]

**Gerhard Lazu:** It's a hundred percent, that's exactly right.

**Jerod Santo:** All the nines. We want all the nines.

**Break:** \[24:32\]

**Jerod Santo:** So this speaks to really geographic relocation of our assets, right? We had all of our images and mp3's and CSS and JavaScript assets served via CDN, all the way back to when we've set this system up.

**Gerhard Lazu:** That's right.

**Jerod Santo:** But we didn't serve the entire website via that CDN.

**Gerhard Lazu:** That's right.

**Jerod Santo:** So even though Phoenix is really fast, even though we're set up good, and we even have in-memory caching in places where it makes sense, like the feeds... Because who wants to recalculate the Changelog's feed of 400-some-odd things every time it gets request... We cached that in the app. In addition to that, we now have it behind the CDN. And just the fact that that used to be served from New York East, even if it was really fast to answer in Bangalore, in Tokyo, it's never gonna be under -- well, it's gonna be an average of 880 milliseconds around the world, right?

**Gerhard Lazu:** Yup.

**Jerod Santo:** There's not much we could do about that, while our responses were coming from a centralized, single pop, as they call it, point of presence... Which is the way it was. So now every request goes through Fastly, and... We should have done that a long time ago.

**Gerhard Lazu:** We should have. \[laughter\]

**Jerod Santo:** I'll take full responsibility on that one, because I kind of slept on it for years.

**Gerhard Lazu:** Nah...

**Adam Stacoviak:** I think you resisted it, actually. Didn't he resist it for a little bit? You were like, "No, let's not do that."

**Jerod Santo:** \[28:15\] Yeah, I think it was --

**Adam Stacoviak:** I'm not trying to call you out or anything, I'm just trying to know what were the circumstances for saying no, really.

**Jerod Santo:** No, it's fair. I think it's because I didn't read the docs well enough and I didn't realize how easy it is to just bypass that if you have cookies set. Because I thought -- you know, we have signed in users, signed out users... I guess I always had done it that way; I just served the dynamic parts from the application, behind NGINX, and I served the static parts from a CDN, and that was just what I was used to, so that's what we did. And I thought it would be hard to switch, because I didn't realize that there's just like a setting where it's like "Hey, pass through Fastly if you're signed in." Which is probably a minuscule percentage of our traffic is signed in users...

**Gerhard Lazu:** That's right.

**Jerod Santo:** ...maybe a lucky 3%. Maybe 1% of requests are signed in people. So a little bit of ignorance, a little bit of just old-school "This is how I do it", and then because we didn't have worldwide monitoring, we had single-point monitoring, it always seemed pretty fast. We always got good scores...

**Adam Stacoviak:** Is it good for you? It's good for me.

**Jerod Santo:** Yes, exactly. Is it good for us? Is it good for people in the States? Once we've set up the Grafana with around-the-world monitoring, then you start to realize "Holy cow, this is not fast for everybody."

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So I think it was just less important because I didn't realize how bad it was out there.

**Adam Stacoviak:** Well, that's interesting too when you talk about observability. You don't know what you don't know until you know, or something like that...?

**Gerhard Lazu:** The unknown unknowns.

**Adam Stacoviak:** Basically, observability provided a lot of data to understand some of the problems because either you don't have time, or you not necessarily don't care, but you don't care because you can't care. You don't have the data to really understand the full-rounded picture of the problem or the concern. And that's what's interesting - once you start to monitor some of the things, you really start to understand the real problems. And that's why I think there's a lot of pluses to -- it doesn't require Kubernetes to use Grafana, right? We don't need Kubernetes to use Grafana, but the full-rounded picture of what cloud-native asks of teams, or prescribes or subscribes, is this picture of Kubernetes "simplified plane" that everyone understands; you can go from our organization to a whole different team that is using Kubernetes and it's roughly the same API, and all the same concerns. You've got an understanding from team to team, if you're someone who moves around or someone who SREs for many people... It's just a standardized way of doing things.

I'm curious though about the average... Because you said 880 was the average. Sure, the highest -- because that says average. What was the highest?

**Gerhard Lazu:** So this is the average latency, and we have all the different points. Can you see that?

**Adam Stacoviak:** Yes.

**Gerhard Lazu:** Okay, cool. So this is all probes...

**Adam Stacoviak:** We'll put a screenshot into the show notes for sure, but...

**Gerhard Lazu:** So let's look - for example Dallas, which is closest to where Adam is. So in Dallas, what we're seeing is the average latency is 42.20 milliseconds. And that's a pretty good latency. You can see that you have a couple of high ones... The max goes to about 200 milliseconds.

**Adam Stacoviak:** This is now, not before.

**Gerhard Lazu:** This is the last seven days. So we're looking across the last seven days.

**Jerod Santo:** If your maximum response time is 200 milliseconds, then you're sitting pretty.

**Gerhard Lazu:** 200 milliseconds, exactly. And that's where the average -- and this is Dallas. Let's take London, for example, for me. London is 87 milliseconds, and the maximum is 400 milliseconds. Now, what we need to understand is that some of this is also related to probes. Do you see the uptime? It says it's 99.98%. Well, what that actually means is that some Grafana probes are either overloaded, because they take more than five seconds, which is exactly what happened here. They take more than five seconds. And that's a timeout; if a response takes more than five seconds to come back, it's considered an error. It may have taken longer, but it's considered "No, it didn't respond quickly enough." But maybe the probe was being overloaded.

\[32:22\] I know that when we were looking at Bangalore - I think that was the one... Was it the Bangalore? See, for example these errors here - this was the fourth of May. The error rate was very high. But all it meant is that the probe may have been overloaded. Not necessarily the website, because I'm pretty sure Fastly was rock-solid around this period. You just have to think how many pops they have, how many points of presence. So once we get in the Fastly cache, any endpoint should be able to serve it.

So we have a shield in New York, and then every other point of presence basically distributes from there. It reads it from that cache and it replicates across the whole world. And we have micro-cache, so we cache every response for 60 seconds, and then if there's any cache misses, it will continue serving stale content while asynchronously going back to the origin and requesting an update. So it should always serve cached content... Unless obviously the point was like down, or reloaded, or something like that, which very rarely happens, and then we re-route traffic. So typically, when there are issues with the high latency, it's most likely the probe.

Let's see... For example, can I see one probe here that was not very healthy? For example this one. This was Tokyo. Do you see how the latency went slightly high? So Tokyo was having not a great day. The Tokyo probe. Same thing here, in Bangalore. The Bangalore probe was all the way up to five seconds, so some requests were timing out. But which probe out of here looks most loaded? Let me just open this in a slightly bigger view. It's Frankfurt. Look at Frankfurt, how many spikes it has; do you see these spikes? It goes all the way to three seconds, four seconds. Now, in the big scheme of things, this is no big deal. You think "Oh, this is okay." But the probe, I think, is overloaded.

**Adam Stacoviak:** What does that mean, to be overloaded? Like, the Grafana probe - it's got a lot of logs it's doing for not just us, but others?

**Gerhard Lazu:** Yeah.

**Adam Stacoviak:** ...similar to the way a noisy neighbor is on a VPS?

**Gerhard Lazu:** That's exactly right. Or whatever routes this is taking, the route is overloaded, the networking. We don't know what route it takes. So however this probe runs, we can see now -- we never had this. And this is a really fascinating thing. Who knows what problems we had in the past, in the 2021 setup, but because we never had this level of visibility, we didn't know. We didn't know what we didn't know.

So now we know that, for example, users in Frankfurt, maybe -- maybe there's an interconnect that is slow. Maybe it's not just that probe, but still, we are able to serve within seconds most requests. So we monitor the NGINX logs, and we can see the response times, we can see the traffic served. This is, by the way, after the CDN cache. So we still need to get the logs out of the CDN to be able to visualize the same thing. That's something which I wasn't able to set up just yet, but it's on the list.

We can see that the 99th percentile, the average 99th percentile is 707 milliseconds. So we are under one second. This is NGINX to the app. But the time interval is ten minutes. So if we go to, let's say, five minutes - it's a lot. One minute - look at that. Whoa... What happened here? So when the time interval is one minute, the 99th percentile response time was one minute. The 95th percentile was 300 milliseconds, and the 99th percentile was one minute. So what the hell happened here? I don't have the answer, but I would love to find out.

**Adam Stacoviak:** Well, now you know there's a problem though. That's the thing. Because before you didn't know there was a problem.

**Gerhard Lazu:** Exactly.

**Adam Stacoviak:** \[36:09\] And if we're dealing with replication of databases - and this was sort of like attached to that. As you begin to --

**Gerhard Lazu:** Here's the thing... All this runs on a single, massive host. We have 32 CPUs, AMD Epyc, 64 gigs of RAM, or 128 gigs of RAM, SSDs, super-fast... It's a single host. So how can the 99th percentile between Ingress NGINX running on that host, and the app, which is running on the same host, be this high?

**Jerod Santo:** Bitcoin miner...

**Gerhard Lazu:** It's not, but sure... \[laughter\] I assure you it's not.

**Adam Stacoviak:** I'm glad you shared the specs of that server, because that does put it into context of--

**Jerod Santo:** It should never happen.

**Adam Stacoviak:** ...its capability, and that this shouldn't happen.

**Gerhard Lazu:** Nope. It shouldn't happen.

**Jerod Santo:** Well, what do you surmise? What's your gut?

**Gerhard Lazu:** Something in queue proxy. I mean, that's the only thing. It's not the database. It's not the app. It's something between all those components that make up Kubernetes. We have Calico for the CNI. Maybe it's that. Maybe it's the overlay network. But this is where that -- it's almost like you want more observability... It's almost like you know you have a problem, and before you didn't have it, you were so ignorant you didn't even have a problem.

If you look at the external monitoring, everything looks good. Everything is fine. From a CDN perspective, things are okay. And that is the experience that we want to give our users. The website is always available, it's super-fast regardless of where you are in the world... And these are the things that we are now becoming aware of. So the question is "Do we invest in this? Or maybe do we do something else?" And when I say something else, do we continue down Kubernetes, or do we take a platform-as-a-service? Our problem has always been bandwidth, because we need a lot of bandwidth. Think hundreds of terabytes of bandwidth.

**Jerod Santo:** I feel like on the detective shows is where they say "Zoom in and enhance." That's what you're doing to us here. We zoom in -- and at a certain point, you zoom and enhance, and you just can't enhance any further. You're staring at a blob, and you're like "I don't know what that is."

**Gerhard Lazu:** Yeah.

**Jerod Santo:** That's kind of where we're at, so you're gonna need another level. You need another zoom or another enhance in order to dive down. The smaller these problems are, the more time you spend figuring out how to get that zoom done, and probably your ROI (so to speak), or the law of diminishing returns hits you, and you're sinking massive amounts of resources into solving this tiny little problem that may or may not be worth it.

**Gerhard Lazu:** That's right.

**Jerod Santo:** I mean, ignorance I guess was bliss, except for our users it wasn't bliss. We thought it was fast everywhere, and now we know that it wasn't. It's better, and yet we still have this little thing that's like "What?! What's going on there?"

**Gerhard Lazu:** Yeah. And it does happen fairly frequently, by the way; so there's something there. Would tracing help? I don't know. If we look at the last six hours, we have a spike here; that was 7 PM. And they're not periodic. They happen -- like, 4 PM... Could it be the database backups? I mean, they do run every three hours, and you have 4 and you have 7, so maybe... If we go to the last 12 hours...

But then you have all these smaller spikes. This is 1 PM, so not really... You had these spikes... And again, most of this stuff, if you look at the traffic that we serve, it's nothing. The server is not even 1% loaded. CPU is not an issue, and network is not an issue. Nothing is an issue. All the components are healthy, very little memory use... So it's not a problem. So is it a good thing? I think it refines your understanding. I think it makes you think about your setup in ways that you haven't thought before. So you really do feel like the master of your domain. And most things are easy to set up; I think it's just like knowing which things to set up. And what I'm hoping that we'll do with this, and with Ship It, is that we'll share some of those stories. We'll share the things that worked out and the things that didn't work out, so that others would have to do this.

**Jerod Santo:** \[40:21\] Wait, wait, wait... What's this "Ship it" you just said? What's this thing? What are you talking about?

**Adam Stacoviak:** \[laughs\]

**Gerhard Lazu:** So I'm thinking about -- it's been like five years in the making; every year we have been improving our infrastructure, our setup, we've been shipping it, sharing it with you all... So how about we do this more often? How about we do this every week? How about we do some interviews and some sharing of how to ship stuff, and what else is other than shipping? Because getting it out in production - that's such a small part of the story. I would even say it's like the tip of the iceberg. It could be, but there's so much underneath. It's all the other things that you need to care about. So it's a new show that we would like to start, and this is the first episode. This is the first episode of that new show.

**Adam Stacoviak:** I like that. I'm excited. I'm excited about this show. I think this is so awesome... We've been asked "Why don't we do this? Why do we even care about Kubernetes ourselves, to use it, considering our three-tier application, and not really needing, so to speak, that?" I think because we care. It's because we're explorers. This is fun, to dig into this kind of stuff. And as you mentioned, Gerhard - will Kubernetes be the solution for us forever? Maybe... Is it great? Sure, in many ways, but it also has a lot of downfalls as well. Will a PaaS make more sense? Will a \[unintelligible 00:41:40.05\] or whatever Linode have in the future, or Digital Ocean - will that make sense? Maybe, I don't know.

For our application you mentioned we need a high bandwidth... I think that's part of the journey. And doing this show, sharing our story, like we had in the last couple of years, consistently, naturally evolved into the need to wanna share more. And not just our story, which is gonna be one part of it, but other stories, other teams' stories and how they ship things. Wouldn't it be cool to learn how Kubernetes ships Kubernetes?

**Gerhard Lazu:** Oh, yes.

**Adam Stacoviak:** Or how different platforms ship their different platforms? Do they use their platform to ship their platform, or do they do something different? Are they dogfooding, are they champagning (or whatever you call it)? That's gonna be a fun journey, and I think that's what is really fun about this... It's do more, not just less.

**Gerhard Lazu:** I think that's the one thing that we've learned - there's so much to this. There are so many good conversations that can be had. There are so many problems that others are sharing... Like, I was researching about network latency in Kubernetes, and I came across blog posts which were saying "How Kubernetes made my latency ten times worse." And I was thinking "That's my problem!" But it wasn't. It was just a clickbait. I clicked on it and I was like "Oh, damn it!" \[laughter\] They just wanted me to click... So I wouldn't want that for others.

I would genuinely want to dig into this, with different people that have had similar problems, or that have maybe tooling that can help with this problem. To help us understand what the problem is, to help others understand, and maybe come up with a solution which works for more than just us.

So there's, again, a way to curate these problems, a way to understand them and to see what makes sense... Because Grafana Cloud does make sense for us, but it maybe doesn't for others. So what else is out there? We don't know. And it's not a fixed thing. It's changing all the time. Every KubeCon there's new tools, there's new approaches, there's just new people, new efforts going on. So what are they? It is a full-time job just keeping up with all the things. And it happens to be fun.

**Break:** \[43:50\]

**Jerod Santo:** So if you're listening to this in the Changelog Podcast and you're interested in our new show, Ship It, you can go right now to Changelog.com/shipit, subscribe there. If you happen to be subscribed to our master feed, which is your one-stop-shop for all Changelog podcasts, you're already gonna get it. We're gonna ship it right into your feed. But if you're interested in coming along this journey with Gerhard, and with us, and with our setup, and with other people's setups, and see where this thing goes, definitely subscribe to Ship It.

Now, if you're listening to this on the Ship It feed - hey, congratulations. You're already here. Welcome. But I'm excited, too. This should be a lot of fun, and I think I will learn a lot by listening, and maybe even participating a little bit.

**Gerhard Lazu:** I think that makes so much sense, because there's so many good ideas out there. There's so many good ideas that are good ideas for a while, and then they're terrible ideas... But that's okay, because ultimately, what do you care about? How does this help you? Does it make sense? And what else is out there? It's almost like the novelty factor - that in itself is good enough to subscribe, and to just like "What's around the corner?"

One thing which I would love to find out - I mean, I'm putting this out there in the Universe - is that one of the guests on Ship It is none other than Elon Musk. Does he ship Kubernetes to Mars? I would want to know that... \[laughter\]

**Jerod Santo:** Wait, wait, wait... What are you saying now? \[laughter\]

**Gerhard Lazu:** Like, why not? How does he ship those rockets? That's like proper engineering. We're just playing here.

**Jerod Santo:** Okay... So this is an episode request.

**Gerhard Lazu:** It is.

**Jerod Santo:** This is not a promise.

**Gerhard Lazu:** No, no, no.

**Jerod Santo:** Okay, good. Because I got very excited; I was like, "Really?!"

**Adam Stacoviak:** Gerhard is dreaming, and we are \[unintelligible 00:46:33.09\]

**Gerhard Lazu:** Six years from now it will happen, I'm sure. Between now and six years - that's how long this thing took. From an idea--

**Adam Stacoviak:** Well, it makes sense. He just did SNL. He should do Ship It.

**Jerod Santo:** Yeah, we're the next natural step from there.

**Gerhard Lazu:** I think so. And maybe we can help him curate the tech that will get shipped. Why not? When I say "we", it's like the royal we. The Ship It group.

**Jerod Santo:** Right.

**Gerhard Lazu:** So he doesn't ship the version that has all this downtime, because I don't think that will be good for the mission. I think we're just looking at the downtime that we had before... We had a lot of downtime. And now it's like all green. 19 days, all green, since we did the switch to the new setup. We didn't have any downtime. 100%.

**Adam Stacoviak:** That's awesome.

**Gerhard Lazu:** Okay, it's a little window, but this should never go down, unless we mess something in the CDN config. That's possible.

**Adam Stacoviak:** Yeah, because at one point I said "There goes the nines..." \[laughter\]

**Gerhard Lazu:** Oh, yes...

**Adam Stacoviak:** Because the last time we talked, we talked about the nines, and how much they cost, and how much each nine costs, and the effort... Not just the cost, but the effort required to get to those nines. And that's kind of part of it too, because we're going on this journey thinking "This is improving." And sometimes improving isn't just simply infrastructure and speed, sometimes it's knowledge. Sometimes it's understanding. And maybe the current version you've improved, but you've really just improved your understanding of the system and what's required, and the system we've currently got might not fit the bill for what you really need; which means something else, where you're iterating towards that learning... And that's the interesting part.

**Gerhard Lazu:** Very well put.

**Jerod Santo:** \[48:07\] Gerhard, do you expect a community, or do you desire a community around this show? Do you think there'll be people involved, helping guide direction, ask for certain topics, certain interviews? What are your thoughts on who this is for, and how involved they're gonna be?

**Gerhard Lazu:** I think we can approach it from multiple angles. I think a community would be nice, but a community -- I think it just needs to make sense for the community, rather than for us or for me. So if a community would find that useful - sure thing. But I think it's more around -- I mean, the CNCF... I just recently came back - and when I say "came back", it was right here, in front of the computer...

**Jerod Santo:** Virtual.

**Gerhard Lazu:** The virtual KubeCon Cloud-Native Con 2021. We have a good interview, possibly one more, or two... Anyways - that's a fantastic community. There's so many things happening there. So would I see a Ship It community? A community is hard work. And I think a community, if it serves itself and if it's self-sustaining, maybe. But I think if anything, it's sharing interesting topics, it's solving specific problems that others would find helpful and interesting, and it's more like spreading ideas and approaches and perspectives that make sense to some. That's what I'm hoping to get out of this. Obviously, learn new things, and share those learnings.

I think those episodes will be very time-specific. It's almost like, there will be a journey, and in that journey the episodes make sense, and they build one on top of the other, and eventually have a nice journey that -- I mean, we used to do it every six months, ever 12 months, something like that, so I would like to do that a lot more often... So like smaller steps. Gain a lot more perspectives and share it a lot more often rather than once every six months or once every year.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** That's what I'm hoping... But what do you think?

**Jerod Santo:** I mean, I could imagine a world where there's a group of enthusiast shippers... Maybe the act of running things in production is technology-specific, so that you might have the Kubernetes community and the Ansible community, or whatever. But I think people are interested in these things, whether they're SREs, or they're DevOps, or they're sysadmins, like I used to be back in the day... I could imagine people rallying around and hanging out together and talking about these topics. It's similar to how JavaScript folks hang out and talk about JavaScript in the JS Party community of our Slack... That show is very community-oriented, and we want the community to actually come up with ideas, and challenge us, and request the guests... So that's like a community-oriented show. I was just curious your angle on that for this particular podcast.

**Gerhard Lazu:** I think that makes a lot of sense. All those things make a lot of sense, to have engagement from the listeners. That's the way I would phrase that. Again, it's more around exploring and sharing, and that's what I'm really passionate about. And finding ways to improve Changelog in a way that is open source and others can benefit... Because that's one thing that we have always done - shared our approach publicly. If you look at the commit messages, there's so much insight in them. And I find that very interesting, because --

**Jerod Santo:** Yeah, you write books in there.

**Gerhard Lazu:** Yeah, I did, actually. I think we could publish a book.

**Jerod Santo:** We could probably pull a book out of your commit messages.

**Adam Stacoviak:** Yeah, there's a lot of text in there.

**Gerhard Lazu:** ASCII art, and all those things... Links... There's a lot of stuff there. Yeah, check it out.

**Jerod Santo:** Emoji...

**Gerhard Lazu:** Emojis... They're the best.

**Jerod Santo:** Lots of emojis.

**Gerhard Lazu:** They convey so much emotion.

**Adam Stacoviak:** \[52:01\] In regards to the community though, we can say that we have a dev channel in our community Slack... And if I'm keying off of what Jerod's saying, it's like "Where can people hang out at?" So we already know that Changelog.com/community is there, it's free to join and it's open... We already have a dev channel. But are you saying maybe a Ship It channel makes more sense, where similar to JS Party - we have a JS Party channel and people hang out there, and chat during live shows... And maybe this show isn't live, but we can start to have "Hey, I like this show. I wanna invite this person. I wanna suggest that person." Well, where do people go and congregate? Where can that happen?

I think we've already paid for the price of admission, which is free, and the infra is there, thanks to a free Slack, and the community, all that good stuff - it's done. So a matter of moving some of that conversation from Dev to Ship It, or just promoting Dev to what could be Ship It?

**Jerod Santo:** Either way, in terms of the logistics of that getting done, it sounds good to me... But I think we should definitely have a Ship It channel where folks can hang out and talk, and throw ideas out there, and have a place to discuss the show and things around the show; it doesn't have to be about the show. But I think that would be rad.

**Gerhard Lazu:** Do we have comments enabled on episodes?

**Jerod Santo:** We do.

**Adam Stacoviak:** Yeah...

**Gerhard Lazu:** Okay. So that's one.

**Adam Stacoviak:** ...for now.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** If you listened to a recent Backstage, for now. \[laughter\]

**Jerod Santo:** We thought about turning them off, so you can go listen to tht conversation... And we actually agreed on turning them off, and then I just didn't do it. \[laughs\]

**Gerhard Lazu:** Okay...

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So we might leave them on forever because of laziness. Or maybe they'll disappear. But I don't know. Go listen to that Backstage episode; what was that, 16? All the emotions around comments. But for now they're there, and I don't know; I'll just leave them on, because people do seem to like them.

**Adam Stacoviak:** And since then - this is a micro-version of that conversation; I've seen more adoption of our comments... And especially that recent blog post you've got there, Jerod...

**Jerod Santo:** I wonder if that episode spurred on--

**Adam Stacoviak:** If it weren't for that, you wouldn't have people talking to you.

**Jerod Santo:** Yeah, I wonder if that episode's spurred on more comments. They're like "Wait a second, these guys have a comment section? I didn't know that till they posted a show about it."

**Adam Stacoviak:** And then even since, I've look at our design of it, and I think that for a signed out user it could be -- we could do better design to make a better effort to encourage discussion...

**Jerod Santo:** Oh, yeah... Like, actually an emoji picker?

**Adam Stacoviak:** So there's definitely some things we could do...

**Jerod Santo:** Reactions... There's all sorts of stuff we could do.

**Adam Stacoviak:** Just guides to higher value content, really. Higher value comments. But that recent post you did - you might as well timestamp it. That got a lot of comments itself; the Backstage episode we're talking about is episode 16, accurately titled "Let us know in the comments." So yes, let us know in the comments...

**Jerod Santo:** So yes, there are comments on each episode, so it's a great place to have conversation... Especially, I like the permanence of those, in terms of it's attached to the episode, so if you have follow-up links or questions regarding the content, it's a great place for that... Whereas, of course, there's a conversation that's gonna happen on Twitter, and on Reddit, and on Hacker News, and on LinkedIn... Do people have conversations on LinkedIn? I don't know about that.

**Adam Stacoviak:** They do.

**Jerod Santo:** And elsewhere...

**Adam Stacoviak:** They have lots of conversations on LinkedIn.

**Jerod Santo:** And in our Slack... But there's some value to the comments on-site, so...

**Adam Stacoviak:** Yeah. It's worth it, in my opinion. But if you're listening to this and you're thinking "Well, one, they've answered my questions around community...", because clearly we just-in-time produce the future of things, so we just determined that we're gonna have a community, and it'll potentially be the Ship It channel in Slack... But if you have a request for an episode, there's an easy way to do that, changelog.com/request. It's there for every show we have - The Changelog, Founders Talk, Ship It... All the shows, essentially. So if you have a request for a guest or an idea, that's the best way to share it with us.

If you wanna join the community, it's there, Changelog.com/community. No debate about that. And if you care about shipping it, then you should ship it with us.

**Gerhard Lazu:** Also, if you care about all the other things that happen before shipping it, and after shipping it...

**Jerod Santo:** And while you're shipping it?

**Gerhard Lazu:** And while you're shipping it, yes... \[laughter\] That's almost like a point in time, but there's so many things happening before and after. And it's not like a single event. You find yourself shipping it, and you would like to think that every time it's the same; that's what we aim for, it's an ideal... But it's not. Sometimes you ship it and you take production down. You go "Oh, crap! What did I do?" Well, there's a great lesson to learn there.

**Adam Stacoviak:** Yeah.

**Gerhard Lazu:** I think it's those things which are really interesting - how do you build systems where shipping is so easy and straightforward that you don't even think about it? I think we were rather fortunate that that was the case for us... Just git push and everything will take care of itself. Or merge, if there's a PR.

**Adam Stacoviak:** Well, you hear it here first. Gerhard, our resident SRE for hire has been promoted to podcast host, coming at you weekly. Changelog.com/shipit. I'm excited, Gerhard. I've been a big fan of what you've been doing with us for so long, and I'm glad to get to a weekly cadence, where it makes a \[unintelligible 00:57:16.14\] sense to talk about what we're doing, about what others are doing, and all that fun stuff. But hey, listeners, you know what to do - Changelog.com/shipit.
