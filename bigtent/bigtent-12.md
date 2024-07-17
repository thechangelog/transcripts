**Tom Wilkie:** Hello! I'm Tom Wilkie, and welcome to Grafana's Big Tent, the award-winning podcast all about the people, tools and technology around observability. I'm joined today by Mat Ryer. Hello, Mat.

**Mat Ryer:** Hello.

**Tom Wilkie:** Devin Cheevers... Hello, Devin.

**Devin Cheevers:** Hey, Tom.

**Tom Wilkie:** And Alex Koehler. Welcome, Alex.

**Alex Koehler:** Hello.

**Tom Wilkie:** How are we all today?

**Mat Ryer:** Not bad. I haven't had any incidents, so I'm feeling pretty good.

**Tom Wilkie:** Mat, have you rerecorded the intro? Is that a new intro?

**Mat Ryer:** It is not. Yes.... Is it? No, I don't know. Is it?

**Tom Wilkie:** Yeah. All of the answers, and we'll edit the right one in post, right?

**Mat Ryer:** There you go. That's basically like multiple timelines, and then you just pick whichever one ends up being the right one.

**Tom Wilkie:** This podcast is the MCU of observability...

**Mat Ryer:** Yeah... \[laughs\] So Devin, is this your first appearance on the Grafana podcast?

**Devin Cheevers:** This is my first one. Actually, it's my first podcast, so bear with me.

**Tom Wilkie:** Oh, welcome, welcome. Whereabouts in the world are you, Devin?

**Devin Cheevers:** I'm based in San Francisco, California, so it's earlier than the rest of you.

**Tom Wilkie:** Is it 7 AM there, by any chance?

**Devin Cheevers:** It is 7 AM, yeah, so I'm booting up.

**Tom Wilkie:** Have you had your morning coffee?

**Devin Cheevers:** I'm drinking my energy drink now.

**Tom Wilkie:** Brilliant. Brilliant. And Alex. So Alex, you're from Prezi, if that's right...

**Alex Koehler:** Yeah, I'm working as a senior SRE in Prezi.

**Tom Wilkie:** Welcome. Welcome. And whereabouts in the world are you?

**Alex Koehler:** I'm located in Germany.

**Tom Wilkie:** Germany.

**Alex Koehler:** So I already had my morning coffee, my afternoon coffee, and the rest of the \[unintelligible 00:01:42.15\]

**Tom Wilkie:** Good. Yeah. I have had my morning and afternoon coffee. I'm ready for the podcast. So welcome, welcome to Grafana's Big Tent. Is this also your first appearance on a podcast, Alex?

**Alex Koehler:** Yes. I have never spoken at a podcast before, so I'm pretty new.

**Tom Wilkie:** Well, welcome. We're a good first podcast, I hope. Mat, what do you think? Are we kind to our guests?

**Mat Ryer:** Well, ideally not, but I suppose we should be if it's their first time, right?

**Tom Wilkie:** Well, you know, how else are they going to learn?

**Mat Ryer:** Good point, actually. Let's be brutal. \[laughter\]

**Tom Wilkie:** So Alex, welcome to Grafana's Big Tent. I wanted to ask you first, what do you do at Prezi?

**Alex Koehler:** Prezi itself, as you probably are aware, is that presentation software on the internet. We make it easy for our customers to create wonderful visual presentations, and I am responsible for part of the infrastructure, and we do the platform provision and on call thing, and all these things that are tied to the let's say infrastructure and provision.

**Tom Wilkie:** Brilliant. I've put half of my presentations on Prezi. Just a great way to get them out into the community. How long have you been working at Prezi, and generally, how long have you been in the infrastructure space?

**Alex Koehler:** I started in the infrastructure space around 2007, so I had some share on fights with infrastructure and bare metal servers and cloud servers, and all the rest... And I started at Prezi one and a half years ago, and we started to make it reliable, available and cheaper for ourselves.

**Tom Wilkie:** So Alex, tell us a bit more about your tech stack at Prezi. In particular, what is it? What is it you're running on? You mentioned cloud servers there? Are you mostly in the cloud now?

**Alex Koehler:** Yes, we run most of our infrastructure and workloads on AWS. We use the classical Elastic Beanstalk, or EKS... We have some EC2 instances... We use the usual load balancers, classic load balancers, application load balancers... Most of our workloads is running on Kubernetes. So we have Kubernetes in there, we have the most loved Helm charts, that we deploy on it, we have databases, we have load balancers, we have CloudFront as CDN... we have a lot of petabytes of data in S3 for all of our customers, because everything you add in your presentation ends up in an S3 bucket... We are good a AWS customer, I think.

**Tom Wilkie:** I'm not sure anyone from AWS listens to this. You don't have to say that.

**Alex Koehler:** That's good.

**Tom Wilkie:** So you mentioned Kubernetes there... What made you inflict Kubernetes upon your developers?

**Alex Koehler:** That's actually a good question. It has been there before me, and when I look at the resources that have been created five and six years ago, someone made a decision that Kubernetes is a good thing... But no jokes; when I look at Elastic Beanstalk, Kubernetes gives me a unique interface to interact with it. It's just Kubectl, and you basically get what you want to see. When I look at Elastic Beanstalk, either it's based on Docker, on EC2 instances, or it's based on Elastic Container Services... And it gives me a lot of trouble to even start with debugging it. So Kubernetes may not be the most easiest tool, but it at least has a clean interface to interact with.

**Tom Wilkie:** I mean, we're 100% Kubernetes at Grafana Labs, by the way, so I was kind of somewhat joking about the infliction of Kubernetes. It's definitely the future, it's just definitely a bit of a learning curve as well. I mean, Mat, you've had quite some exposure to our Kubernetes clusters at Grafana Labs, haven't you?

**Mat Ryer:** Yeah, they are something to behold... And makes me very happy that we also have very good incident management response as well... \[laughs\]

**Tom Wilkie:** Can I can I assume, Alex, by you both being in Germany and using Kubernetes, that you're also a big Prometheus user?

**Alex Koehler:** We are a big Prometheus user. I even changed the documentation for Prometheus, so actually I'm a Prometheus contributor.

**Tom Wilkie:** \[06:07\] Oh, fantastic. Thank you.

**Alex Koehler:** But yeah, we have multiple instances of Prometheus in Prezi for our different use cases, and we collect a lot of metrics. We're quite happy with it, because it's just working. That's not a big deal, to debug, and...

**Tom Wilkie:** Yeah. I mean, obviously, we're huge fans of Prometheus at Grafana Labs as well. Massive, massive users ourselves, and big contributors. So yeah, thank you, and we're very happy. Am I right in thinking that most of the alerts that get fired to your on-call team come from Prometheus then, or from an alert manager?

**Alex Koehler:** Yes, you're right. We collect most of the metrics directly via our exporters, from our applications, or from Node exporter, for example, for the EC2 instances. We even scrape CloudWatch to a certain degree, to get metrics about usage of the SQS service, for example, and then ship the alerts via Prometheus Alert Manager... Because again, that's a unique, a standardized interface, and we just write the YAML files... Hate it or love it, but at least it's readable, and then we can alert what we want to alert.

**Tom Wilkie:** So that kind of moves me on, and I think the thing we mostly want to talk about today is the kind of how do you handle on-call responsibilities? How do you handle incident management, and how do you do that at Prezi? So do you mind just like -- who is on call at Prezi? Who handles these alerts?

**Alex Koehler:** We are big believers of "You build it, you run it." So there are multiple persons responsible right now. Every team has its own on-call rotation, and actually maintain the services they write. There's also an additional group, which we call SRE. So it's not SRE like Google invented SRE, it's more of like infrastructure or platform team, and we are also available 24 hours, seven days a week to manage AWS issues, or to help the developers debug stuff... Because when you look at a microservice system like we have, it's quite complex. It's not easy to restart that application, and it works -- again, it's more which application now has actually an issue.

**Devin Cheevers:** What has the history of that team been at Prezi, Alex? The platform team or the SRE team.

**Alex Koehler:** They started in the past to provide a platform for the developers as a golden path to production, so to say... So provide unique resources, and unique deployment engines, deploy in the same way, so that every service at least looks 80% the same... And the platform team is just there to manage the underlying infrastructure, to make sure that the deployment engine is working, to have a look at cost control... You know, AWS costs are skyrocketing. And we provide central tooling like logging, and alerting stack, and a monitoring stack, and access management to our developers.

**Tom Wilkie:** This sounds very familiar to Grafana Labs. We have a central platform team doing very similar sets of responsibilities; looking after our infrastructure, and our costs, and our observability stack as well. So it's good to meet someone else who follows the same pattern. Actually, we just had the whole platform team at their off-site in Dublin last week, and... Yeah, I went and visited them for a day, managed to get stuck on the tarmac in Dublin on the way back, as one does... Do you ever get the whole team together?

**Alex Koehler:** They met in March. You may know that Prezi is a company from Hungary. They met in Budapest. I was not present, due to sickness reasons... But they brought together the whole company, and the other free infrastructure team members have been there. Me not.

**Tom Wilkie:** Oh, I'm sorry about that.

**Mat Ryer:** \[10:06\] What's the culture like when it comes to appetite for risk then at Prezi? Do you tend to be quite careful? Or are you allowed to take risks and do things and move fast and break things? What's the sort of attitude?

**Alex Koehler:** We actually implemented SLOs in the past. So every team has an error budget, and is allowed to act inside this budget, and deploy small batches, and deploy fast and early. So the whole deployment cycle is fast, but when it comes to let's say bigger changes on an infrastructure level, we are a little bit conservative... Because if you, for example, update a Kubernetes cluster on AWS, there is only one way, and it's update the version and be happy or not. But on the application level, we are quite flexible and fast. So it's a mixed approach.

**Mat Ryer:** That makes sense though, because I agree, for some things you do need to be more careful. But it is nice -- as an engineer, it's nice to be able to innovate and do things... And error budgets are great; we do have an episode on this in the season one, for anyone interested. The SLOs episode. It's really, really interesting; we dig into what error budgets are, and how to use them. It's great.

**Tom Wilkie:** Do you think engineers at the coalface, so to speak, think about the error budgets on a day to day basis? Or do you think it's more of a kind of like release management, or engineering leadership thing?

**Alex Koehler:** I think it's a failsafe mechanism. I don't think the application developers think about error budget the whole day... But it brings them back to reality when they did \*bleep\* up. So it's more or less "Okay, I've got so many minutes or hours of outages this month, and now I should be careful and do something that increases the reliability of our system."

We also have a lot of feature flags in our system, so we release quite often behind feature flags, and then activate feature flag or features for different user types, or user groups... And that I think is also bringing up a lot of reliability, because you can release software and then just have partial groups using the software parts you released.

**Tom Wilkie:** Does it ever \[unintelligible 00:12:25.19\] You mentioned engineers might occasionally make mistakes, and burn their budget quicker than they expected to, and therefore be careful a little bit more for the next month... But do you ever see it go the other way? Do you ever see engineers see that they've got loads of budget left at the end of the month, and throw it at the wall and see what sticks?

**Alex Koehler:** Actually, I never thought that, because engineers are still responsible for the software, and if they throw away their error budget, they must be stand up and fix the issues. I never saw that.

**Tom Wilkie:** No, I haven't seen that yet either. We should maybe do some chaos testing if the error budget is -- if there's too much left... See how we can break it.

**Mat Ryer:** Yeah. I think developers don't pay attention to it day to day, because you don't really -- you don't have that feedback. If if in your IDE - and you're writing code - you could run something that would give you a kind of estimate on "Yeah, this is basically going to have this kind of impact in some way", that'd be interesting. But just knowing that there's an error budget, being in a culture where there is an error budget I think is enough, because it tells you "Look, it's okay. Do things."

**Tom Wilkie:** Failure is tolerated.

**Mat Ryer:** Yeah, exactly.

**Tom Wilkie:** Your IDE idea is interesting, because it's very hard to predict what impact something will have on the error budget. We do the same with cost control. So every time you go and deploy a piece of software internally at Grafana Labs, there's a little bot that comments on your PR that says "This is how much it will cost to deploy that software."

**Mat Ryer:** It's so good.

**Tom Wilkie:** \[13:58\] Trying to add that feedback into the development cycle. But yeah, if only you could predict "Ah, well, if you deploy this flag, you'll see your error budget go away for this month."

**Mat Ryer:** Yeah. No, but that bot that tells you the cost is really useful. And sometimes you might just have a bug in there that's going to do --

**Tom Wilkie:** Or a typo, yeah.

**Mat Ryer:** Or a typo, yeah, and you're like "Whoa, that's a big change." But it's also very nice if you're doing optimizations right?

**Tom Wilkie:** Oh, for sure. The name of this bot, by the way, is Kost, with a k. Because it's cost to our Kubernetes system. So you get a comment from a GitHub user called Kost, saying "You're about to spend 300 grand. Did you really want to do that?"

**Mat Ryer:** \[laughs\]

**Alex Koehler:** I think -- one step back to the error budget... I think one important thing is we have error alerts on fast burning rate for error budget. So imagine you have one hour error budget left, and you will burn it within half an hour, or soon... You get an alert, and I think that's also part of the fast feedback cycle for developers, to just make them aware that when they do something, it has consequences.

**Tom Wilkie:** Would you say that's the primary source of your paging alerts at Prezi?

**Alex Koehler:** That's actually a good question. I didn't make any statistics about it, but we get a lot of alerts about error budget burning rate, and so on and so on.

**Tom Wilkie:** Because we had a previous episode, I think, about these SLO style alerts, and it's something we're super-keen on. And one of the things I really love about them is they've got a really good signal to noise ratio. If they do alert, something's really wrong, and you really do have to go and look at it.

The downside of these kinds of alerts though is they really lack context. They're gonna tell you "You're about to break your SLO on this service", but they're going to tell you why. So how do you tackle that problem? How do you give people context when they're receiving one of these alerts?

**Alex Koehler:** That's an issue for us as well, because the current SLO setup was done by Infrastructure Engineers, and they are pretty service-focused. So we have alerts on every microservice we run, and that's not user-facing. So we get an alert, for example, that an authentication service is broken, but what does this mean for the customer? And is there an effect on our paying customers as well, or not? So that's an issue for us. And we may change that in the future, but right now we are pretty scoped on technical SLOs, meaning a service is running, or the request rate is too high or too low, and the failure rate is too bad.

**Tom Wilkie:** Yeah. We make this distinction internally between kind of critical alerts, that will page someone, and warning alerts that basically just go to Slack. And I'm sure, like every company, you've got a Slack channel somewhere with thousands of warning level alerts going off, that you've trained all your engineers to ignore, basically. Often I find the context for that critical alert, that SLO alert is going off is somewhere in that warning Slack channel. But unfortunately, very, very hard to find.

**Alex Koehler:** For that -- I mean, the Prezi culture is all hands on deck when a certain criticality is reached. So we distinguish between SSH warning alerts, and critical alerts... And for all the critical alerts, we tend to raise an incident more often than less... And that brings different parts of the company together, and looking at the things... And that's better than being alone and trying to decide "Is this now a critical incident or not?" Because that decision is really lonely.

**Tom Wilkie:** \[17:46\] Yeah. Oh, for sure. So one of the things I'm interested in -- because you say your developers also do on-call for services they write. And the traditional DevOps model - I'm a huge fan of that. But how do you balance the workload between the software engineering and the operations? How do you make sure that this is sustainable, that you're not burning people out?

**Alex Koehler:** We are pretty lucky, and are in a stable phase. We do not have a lot of alerts waking up our developers... But when we reach such a phase, I think the most important thing is to have a look at the alerts; why are they coming? Can we fix it? And then reduce the amount of alerts... Because as you said, they actually are paid for implementing business features, and not for debugging things. But when we make them teach us to do the operations stuff, we are overwhelmed with actions and tasks. So it's a trade-off. Basically, help them to write good and stable code, and good applications, and they help you to not be overburdened in operations work.

**Mat Ryer:** That's a good deal, isn't it?

**Alex Koehler:** And most of the time, it works out. But I think, like always in life, there are phases where the \*bleep\* hits the fan very often, and then there are phases where it's so quiet that you have to check your monitoring system if it's still working.

**Mat Ryer:** Yeah.

**Tom Wilkie:** I can't remember the last one of those though. That'd be nice...

**Mat Ryer:** I know of a case where they have so many alerts that they're actually -- they have a metric on how many alerts are currently firing, and then they use forecasting in Grafana Cloud to predict "Is this a normal number of alerts firing?" And it's just a massive sort of problem, and they were able to get quite creative with the tools to solve that. But it's nice to sort of tackle the problem at the source, isn't it?

**Tom Wilkie:** Well, and ideally, if the same development team is handling the on-call load, the operational load of a service, and the development of it, if the ops load increases, necessarily, right? There's only -- what is it? ...like 36 hours in a day, or something. The amount of time you can work goes down on features, right? And so hopefully there's a kind of natural balance between ops load going up and feature work going down.

**Devin Cheevers:** I know one of the things we've been excited about on the product side with IRM is those pre-built dashboards we've built for customers out of the box. So you can get some easily accessible data for your IRM load in a dashboard you're already using, most likely in Grafana... Alex, how much are you looking at the action dashboards on the overall load? And what's kind of your patterns there?

**Alex Koehler:** We did make statistics in the past to find out which team was paged in what amount of time, or how many pages they received... But we abandoned that I think at the end of last year, because it was too much of work in following up the conclusions out there... So it's not enough to just see "Okay, that team was paged 100 times last quarter." You have to go to them and talk to them and think with them through the process of "Is this a good alert or not?" We try to encourage them to have a look at their alerts by themselves, and they actually do it; they are responsible for their own alerting. So they are responsible if they are woken up in the middle of the night or not.

There is a good culture going on in reducing alerts, or scoping the alerts to a certain degree... So they are pretty, pretty concise, and not broad. Because no one likes to have an alert that says "There is high CPU load." Have a look, please. That's not helpful.

**Tom Wilkie:** Yeah, I want my CPU load to be high. I'm paying for those CPUs. Please don't waste them. Please don't leave them idle.

**Mat Ryer:** You want an alert if they go low.

**Devin Cheevers:** There's a nice thing in Grafana IRM, because if you've got your team set up in Grafana, you can scope all those dashboards to the team, and get your team specific metrics out of the box and you don't have to do any work. So team A could go into Grafana OnCall and see the alerts that are just specific to their teams.

**Tom Wilkie:** \[22:02\] You'd never guess that Devin is the product manager for Grafana IRM, would you?

**Devin Cheevers:** This is my contribution... \[laughter\]

**Tom Wilkie:** Actually, one of the great things about doing this podcast is even as the CTO you still learn about product features when you come on here... Because I didn't know we did that.

**Mat Ryer:** Yeah.

**Devin Cheevers:** On call insights.

**Mat Ryer:** And we should also say that Devin is a human; it's not the Devin -- that AI developer bot thing.

**Devin Cheevers:** Please. That's two weeks ago.

**Mat Ryer:** Exactly.

**Tom Wilkie:** I have no idea what the context is on that one.

**Devin Cheevers:** Wait a minute, you haven't heard about Devin?

**Tom Wilkie:** No. What's Devin?

**Devin Cheevers:** Oh, Tom...

**Mat Ryer:** It's gonna change the world.

**Devin Cheevers:** You're doing a good job being focused that you haven't seen that.

**Tom Wilkie:** Could someone please explain to me what Devin is?

**Devin Cheevers:** The world's first AI software engineer.

**Tom Wilkie:** Ah... I've just been living under a rock for the past few days.

**Devin Cheevers:** So the \#devinschannel internal to Grafana was pretty upset, I have to say. There's four of us at Grafana, and we feel like the other Devin is stealing our thunder.

**Mat Ryer:** A little bit, yeah.

**Tom Wilkie:** So we were talking about SLO alerts, and generally the whole idea of signal to noise ratio... What else have you done to kind of improve that, and reduce alert fatigue in general? This is a big challenge in our industry.

**Alex Koehler:** We did, as I explained, the sensible thing and talked to engineers that only actionable alerts should be raised. We make an overview... So as you said, every team has its own Slack channel, where the alerts are just listed... Yeah, that's basically all you can do. Because every team has its own idea what is a good alert and what not? And if a team wants, for example - going back to the CPU example; if a team wants to be alerted when the CPU is raised over 80%, then let the team be alerted. Just make sure that they don't page anyone with that information. Because I think what's important is there is a part, you get informational alerts, where you just what to see "Okay, that's happening", and you get paging alerts where the whole system just tells you "Hey, there's something wrong. Please have a look immediately."

**Tom Wilkie:** Yeah, for sure. We've done something similar. We also tend to look at just things like tuning alert thresholds. The really simple stuff, like when you introduce a service, you generally add a ton of alerts on things you think might go wrong. Honestly, it's quite interesting looking at when alerts fire simultaneously. And it's often an SLO alert, and one of these other alerts that was introduced, on like "Oh, this particular log line in the logs are firing more often than not." And so we internally have this thing where we really try and encourage people to not add those log line based alerts, for instance, or the alerts based on real causes, but just rely on the SLO alerts, because they're much more easy to tune, and much more kind of actionable when they do happen. I'll say the only -- I was kind of confused. They say you're not supposed to alert on causes, only on symptoms. Is that right, or was it the other way around?

**Devin Cheevers:** Don't alert on symptoms, alert on causes, right? Is that right?

**Tom Wilkie:** Well, whatever way around it is then, we always encourage people to do that, and rely on the SLO style alerting... Except for with disk space. We always make sure we've got the \[unintelligible 00:25:20.08\] Prometheus alert on disk space... Because if you run out of disks, all bets are off.

**Alex Koehler:** And certificates.

**Tom Wilkie:** Oh, and certificates. Yeah. Good example. So apart from certificates and disks, what did the Romans do for us? Mat will get the reference. That's a Monty Python reference.

**Mat Ryer:** Yeah.

**Devin Cheevers:** You were right, Tom, actually. Symptom focused, not cause-focused. Symptoms of it.

**Tom Wilkie:** Ah, I'm glad the AI bot chimed in there.

**Mat Ryer:** Because you don't know the causes, that's the thing, right? I guess.

**Tom Wilkie:** Because there's an uncountable number of causes. It could be anything. Whereas the symptoms to a user hopefully are more bounded.

**Mat Ryer:** Yeah. It could be you've hired me, and then that's actually the root cause. But...

**Tom Wilkie:** I hate this whole concept of a root cause, because the root cause of all plane crashes is gravity. But it's not helpful.

**Devin Cheevers:** Contributing factors.

**Mat Ryer:** Yeah. That is good, contributing factors.

**Tom Wilkie:** \[26:11\] Mat, here's a question for you. Actually, we should do this as a roundtable. Mat, what was the worst incident you've ever caused, personally? Well, at work.

**Mat Ryer:** Yes. I assumed that's what you meant. I've been quite lucky. But the worst thing that happens - because we use our own Grafana incident tool internally... And so sometimes if we break that, which is a piece of software like any other, we have error budgets like any other. But what we tend to do is release internally first for a bit, and let the Grafana people kind of test out our release, and then we go to production. So sometimes we do break Incident Response inside Grafana, and then we can't even declare an incident about it. And you realize how useful the tools end up being, because when you then don't have them, then you're really sort of like -- you know, you really feel it. So that's the one that I never -- I'm never happy if we break incident internally, because...

**Tom Wilkie:** I imagine this is how engineers at Slack feel when they break Slack.

**Mat Ryer:** Yeah, what do they do?

**Tom Wilkie:** Do they go and use Microsoft Teams, do you think?

**Mat Ryer:** Yeah... \[laughs\]

**Alex Koehler:** Or do you remember the incident at Facebook or Meta when they just shut down their own authentication system and couldn't access the data centers?

**Tom Wilkie:** Yeah, I remember. That was a long time ago, yeah. Alex, same question for you. What's the worst incident you've been involved in at work?

**Alex Koehler:** Some years ago, I shut down some parts of Japan. I was working at a firewall company, and I had a debug session on one of my lab machines, and another debug session on one of the backbones of some internet company in Japan... And my boss and I was debugging, and he hit Shut Down \[unintelligible 00:27:53.11\] And he thought it was on the lab, but it was not on the lab. And then down goes the backbone.

**Tom Wilkie:** Oh, no...! Did you have to send an engineer out to press the ON button again?

**Alex Koehler:** Luckily there, it was not in a tight-sealed data center; it was pretty accessible. But it was the middle of the night for them, and we had to wake someone up. And we said sorry a lot of times.

**Tom Wilkie:** I bet. Devin, do you get to cause incidents in your role?

**Devin Cheevers:** I'll give you a stretch one, which is - I was involved with a large social media company here in Northern California. The team I was working with or on managing years ago sent a push notification, let's say 12 hours before a developer conference that said something like "Meet Mark in the teleportation room", or something. It ended up with a bunch of news outlets saying "This large company is going to release some sort of technology" that wasn't actually true. And so it was like one of these incidents where you can't do anything, you've just got to wait it out... But I got a phone call at basically midnight, that was like "I sent this push notification early... What am I supposed to do about it?" That was mostly just calming people down and saying "It's okay, no one will really remember this in six months... Except for that podcast I'll do 10 years later."

**Tom Wilkie:** Did you have to quickly come up with a new feature to announce?

**Devin Cheevers:** No, but it is amazing how much people can pick up from just one headline from a push notification.

**Mat Ryer:** Yeah. And how many people did it go to?

**Devin Cheevers:** It went to everyone that had downloaded the app for that large conference... Yeah, which included the journalists.

**Tom Wilkie:** Oh, no... That's like sending an email out to all of your users with hello first name.

**Devin Cheevers:** Exactly, yeah.

**Tom Wilkie:** It's like, "Your usage is very valuable to us." Oh, no...!

**Mat Ryer:** How many people turned up to meet Mark, though?

**Devin Cheevers:** A couple thousand? \[laughter\]

**Mat Ryer:** That's amazing.

**Tom Wilkie:** \[29:53\] My worst incident ever... I remember it vividly, because it was the morning after the Christmas party. Luckily, at the previous employer. And I was sitting in a cafe - I didn't go into the office that day; I went and sat in a local cafe and worked from there. And I was doing -- funnily enough, Alex, I was upgrading my Kubernetes clusters... And this was before managed Kubernetes service, so the upgrade was a lot of TerraForm, a lot of Ansible. I think it was Ansible at the time; and I fat-fingered it, and typed the wrong thing, and the TerraForm apply removed every single EC2 VM we had. We only were only running in a single region at the time, and it just deleted all of them. And I'm like "Uh-oh..." We literally just deleted our production cluster.

It was definitely a, you know, go on Slack, apologize profusely, and figure out how not to make it happen again in the future... But we managed to we managed -- we were back up in production in like 20 or 30 minutes, because everything was stored in Git. It was a TerraForm apply to get everything back, and then Kubectl apply to bring all the services back up. And generally, we were serving traffic in 20 or 30 minutes later; it was quite impressive. But yeah, we learned very quickly about the "Maybe do a diff before doing an apply", or plan before doing an apply, sorry. And doing things like having your TerraForm applied by a GitHub Action and things like that, to make sure there's a level of review involved... You know, and the fact that you can put flags on TerraForm resources saying "Do not allow TerraForm to delete these things." We learned how to do that then.

**Devin Cheevers:** Was it a good \[unintelligible 00:31:32.25\] for the after effects of the party? Would you recommend it?

**Tom Wilkie:** I sobered up very quickly that morning, yeah.

**Devin Cheevers:** I was gonna say...

**Tom Wilkie:** Yeah. I had quite a lot of coffee too, to recover from that one. I think it was a good advertisement for version-controlling your config. But at the same time - yeah, it was also a good advert for doing things in test environments first, and not just doing them directly in production.

**Mat Ryer:** But you see, I think that's really the point of it. The point of this whole thing is to learn when things go wrong, and then adapt, and figure out how you can make sure this doesn't happen again. That's the key thing. And I think in that Kubernetes case, we're in a world where it's very easy to apply these things, but also, I guess, with that means you can also quite easily tear everything down and do things like that. So it sort of changes all the time. Everything you do with your products, with your tech, changes it. So this idea that you could predict and be perfect - we should put that aside, and the error budgets all the way.

**Tom Wilkie:** Well, with all of these incidents and outages that we've caused, or been part of, the main thing I think is actually how you handle it afterwards. How you get the team together, how you honestly discuss what the problem was, and how you make sure you victimize and blame the person that caused it and fire them immediately. That's really what the culture should be. Sorry, the British sarcasm doesn't come across on a podcast?

**Alex Koehler:** I was of an enterprise company earlier in my career, and I actually did that exact thing you described... There have been operations meetings every morning at nine, and then the vicepresident was there, and you have to explain what happened during the night... And that was so frustrating, because every time someone or something went wrong, you have to go up there and explain yourself. And I was not blameless, for sure.

**Tom Wilkie:** No, it's so important to have that blameless post mortem culture. I mean, otherwise you're never actually going to discover what went wrong, and you won't discover it quickly, and you won't be able to have that kind of open conversation about how do you prevent it in the future. If you're just pointing fingers, it's horrible.

We have this enviable - I guess, enviable - problem in some teams now in Grafana Labs, where it's a bit like that scene from Life with Brian, where everyone goes "I'm Brian. No, I'm Brian. I'm Brian, and so is my wife." Everyone wants to take responsibility for the incident, because there's this culture of like "No, this is how I did wrong, and how we can make it better in the future", and it's so healthy.

**Alex Koehler:** \[34:16\] And I think also when you have that culture, it encourages people to actually change things and not wait for someone else to change things, or wait for a longer period... But right now you have to be quick and adapt to changing market situations, and release features, and so on... And if you have a culture of fear, then you will lose track pretty soon.

**Tom Wilkie:** Yes, exactly. A culture of fear is just discouraging people from making changes. And in today's world, your ability to move quickly, change quickly and accept change is really what means you survive. So I guess it goes without saying, you have a similar blame-free post mortem culture at Prezi.

**Alex Koehler:** Yeah. After every incident we have, we just come together and collect all the necessary information, the useful information, and conduct a post mortem. We try to be blameless, and record what went well, where we have been lucky, where we could improve, and so on... And collect action items, and try to prioritize them, and make sure we at least work on the action items that are big enough, and have big impact. Actually, for a post mortem there are a lot of action items. I think too much to actually tackle them all. But let's just take the most important ones and make the world better after an incident.

**Tom Wilkie:** For sure. For sure. Mat, so you actually started the Grafana incident tool internally, at Grafana Labs?

**Mat Ryer:** Yeah.

**Tom Wilkie:** And what we're talking about here was one of your motivations, wasn't it?

**Mat Ryer:** Yeah, exactly. We actually wanted -- earlier designs were different, but if you look at the tool today, Grafana Incident, you'll see that we really sort of celebrate the people that are dealing with the incident. Forget blameless, we're almost like celebrating the people that are getting stuck in and doing things, and finding the places where we can break it. And then if you have good PIR after, getting in there and then follow up.

**Tom Wilkie:** What's a PIR, Mat?

**Mat Ryer:** A PIR - it's a three-letter word... No, it's not.

**Tom Wilkie:** Is that like a TLA?

**Mat Ryer:** Yeah. It's a PIR, a post incident review.

**Tom Wilkie:** Do we not say post mortem anymore? Is that a bit morbid?

**Mat Ryer:** Some people thought that was a little bit morbid, yeah.

**Tom Wilkie:** Okay. Fair enough. I should update my vocabulary.

**Mat Ryer:** Yeah, it's not so bad. But yeah, also nothing dies, nothing serious happens... Because it is part of that whole thing, I suppose, right? If it's a post mortem, then it means "Oh, no. Something really terrible has happened", I suppose. But I don't know. I mean, I don't mind it if you call it post mortem or whatever.

**Devin Cheevers:** As the PM in the room, I have a question for the engineers...

**Tom Wilkie:** \[laughs\]

**Devin Cheevers:** So the blameless thing is great. I've been part of a number of companies that have that. But what about the kind of natural phase or rhythm that I've seen happen, which is you release the project or product, you go a couple of quarters focused on feature work, and then you get to a place where you're like "Listen, we need to focus on reliability a little bit more this month, or the next few months", and it's all kind of above the board, and you have a discussion... But how do you go back and represent that to the business? How do you go to the business and say "Listen, we want to focus on reliability. Here's the value." How have you all done that in the past, and back to the product team, for example?

**Tom Wilkie:** I mean, I guess I can represent the business in this situation, right? Tell me why you need to go in and focus on or give a higher focus to reliability? Do you have data that shows your SLO performance has been poor? Do you have data that shows your latencies are high, or high customer churn because experience with the product due to reliability is low? We were talking about error budgets earlier. Are you are you seeing that you're routinely breaching your error budget? Even just -- how many incidents a day, a week, a month are you having? All of this kind of data can really help motivate these problems.

\[38:22\] It's interesting, because as the big bad manager in the room, I have the opposite problem, of engineers come to me sometimes and say "I really want to do the next month on reliability." And I go and look at the numbers and be like "But why? You're hitting four and a half nines on your SLA performance. Tell me why you want to do it." But honestly, I feel very deeply about like a bottom-up DevOps culture where it should be up to the individual product teams, the individual engineering teams to decide what the most important priority is... And if they come to me and say "I want to focus on reliability", of course I'm going to try and accommodate that.

**Alex Koehler:** I think as an engineer it's not only about reliability, it's also about maintenance. You have to update your libraries, you have to make sure you're using the latest OpenSSL library, or any other tool you use... So maybe it goes hand in hand, working on reliability and working on maintenance. And in my mind, it comes down to this 20% for every week or month or quarter just to work on that foundational things before they hit you in the back... Because when you don't do that, they will come after you some point in time later.

**Tom Wilkie:** Well, hopefully no one's gonna come after you...

**Mat Ryer:** Consequences will.

**Tom Wilkie:** Yeah. The other way to motivate this is to look at the amount of time you're having to spend on toil. Toil is the googly term that you use to describe undesirable routine things you just kind of have to do. If it's updating dependencies, or it's manually adjusting the scaling on your service, anything, the kind of manual labor that could be automated... And literally, go and measure the tag tickets, or PRs into your repo as toil or not toil, and present the ratio of those.

**Alex Koehler:** I think we spoke about managed Kubernetes before, and one thing which is cool in managed Kubernetes, they force you to update. When you ever have run vanilla Kubernetes, you just install it and you're good to go, and it runs basically forever. But with managed Kubernetes, they force you, for example for AWS, every three months to just update the \*bleep\*. And when you don't do that, at a point in time they update it for you, and then \*bleep\* breaks. So that's basically -- you are driven to do that.

**Tom Wilkie:** Yeah. And there's other cool things you can do in those situations. We were talking about updating your TLS. We put a limit on the age of the binaries that are allowed into production. So you can't run a binary that's like three months old. You're just not allowed to. The system stops you. And this forces you to have a recent build. And given that you know you're gonna have to do this very frequently, why not have a CI system building it for you, why not have a CD system doing the automatic deployment for you, and why not have to worry about all of this? And use something like Dependabot, or renovatebot to make sure your dependency is always up to date.

But yeah, I would say these kind of things should be relatively easy to justify with data. It's just a case of gathering that data can sometimes be quite painful... But yeah, knowing the right data to gather, like number of issues that are tagged with toil, number of incidents, SLO performance, or error budget, these kinds of things... Devin, is that the kind of thing you're looking for?

**Devin Cheevers:** \[41:52\] Yeah, it sounds good. I mean, and this podcast title is sustainable, I think. I think it'll end up being sustainable when we ship it... And one thing that I looked at as prep for this was I got the Dora metrics... You have this new framework called Space... But I think it can be a bit overwhelming for a lot of folks to try and figure out how to track all this. Alex, you even mentioned earlier it's been hard to measure maybe at a global level. But one thing that we do in our core product is we have a score for your specific schedule and your rotation. So you can actually get a health check on your team. You're an individual team - you can get a score and a health check on that actual schedule. I think that score is based on "Are there any gaps in your rotation? What is the average load per team member?" So if one team member has significantly more load than other team members, that is unbalanced. Alex, I saw you nodding there. Do you use that score? Does your team use the scoring \[unintelligible 00:42:47.27\] in on-call?

**Alex Koehler:** Yeah, but for a different reason. We shifted the responsibility for the on call rotation planning to the teams. We use an iCal integration you have in the on-call system. So every team is responsible for their own shifts, and we just double-check that there are no gaps in there. Because it's hard to create a gap in Google Calendar, for example, and then the on-call product just shows "Okay, your rotation is not healthy. There is a gap." And then we can have a look. Because disaster happens in those gaps. When you have a gap for an hour where nobody is available, it's for sure that there is an issue.

**Mat Ryer:** Yeah, but I like that approach that you were talking about, Tom, where you put the tooling in place, and you sort of put these gates in place. And the earlier you do that, the better. You make it completely everyday normal stuff. And then it becomes easy. It's very difficult if you try and do all this stuff manually, or...

**Tom Wilkie:** Especially with dependency updates, right? Dependabot has really changed the game here, because if I was only updating my dependencies when there was a major CVE, a) I wouldn't be doing it that frequently, which means I'd have to learn how to do it each time... And if I'm on some old major version, and I'm having to move to a new major version, that might actually involve rewriting some of my code. That might actually be painful. Whereas if I've taken that pain and I've spread it out over lots of small increments, every day or every week for the past six months, and got the team used to doing it, got everyone comfortable with the idea that we're just always going to be on the latest version, then hopefully we've made it more predictable, we've made it less stressful, we've kind of taken the edge off of it.

**Mat Ryer:** I like that also, for just releasing main. I love projects where you can just release main. You can only really do it if you've got amazing test coverage, basically; that's the trick to do it. But if you do have that, and if you trust your tests that much, the freedom you have is just great. And of course, it's a trade-off. There'll be times when you wish -- you know, "This is a bad idea. This feels like a bad idea." But yeah, I agree. Spread the pain out, I love that point. Spread the pain out. It's necessary anyway.

**Tom Wilkie:** That's my motto for life.

**Mat Ryer:** Yeah. Spreading the pain. It's Tom. Yeah, that's your wrestling strap line, isn't it?

**Tom Wilkie:** \[laughs\]

**Mat Ryer:** What was your wrestlers name again?

**Tom Wilkie:** Have we discussed this in the past, have we?

**Mat Ryer:** No. You've got to now improvise a wrestler's name.

**Tom Wilkie:** Oh, are you looking for improvisation? Yes. And my wrestlers name was...

**Mat Ryer:** Yes, and...

**Tom Wilkie:** No, I didn't --

**Mat Ryer:** Yeah. It's just a big improv --

**Devin Cheevers:** Warrior Wilkie?

**Tom Wilkie:** You're being far too nice to me, though. And you don't have to be nice to me --

**Mat Ryer:** Could you be The Wilk?

**Tom Wilkie:** Big Wilkie. No, that would be my burger, if I ever made one.

**Mat Ryer:** Wilkie. Devin, what would your burger be if you had to release a burger?

**Devin Cheevers:** I don't know... The DC Bison Burger?

**Mat Ryer:** There you go. It sounds like you do know. Where did you come up with that so quick?

**Tom Wilkie:** Why DC?

**Mat Ryer:** That's his initials.

**Tom Wilkie:** Is that because you're anti...

**Mat Ryer:** Marvel.

**Tom Wilkie:** You're anti \[unintelligible 00:45:54.28\]

**Mat Ryer:** Oh, I thought he was anti-Marvel. He's more Batman.

**Tom Wilkie:** Yeah, more of a Batman universe than a --

**Mat Ryer:** That's the only universe I've seen Devin in.

**Devin Cheevers:** Do we like Bison Burger? Bison burger is good. I don't know if they've got it over in the UK... Probably.

**Tom Wilkie:** I think I've eaten one before. Yeah. I've tried to eat every animal I could.

**Devin Cheevers:** \[46:15\] Alex, did they get them in Germany?

**Tom Wilkie:** We've just completely lost the vegetarian audience there.

**Mat Ryer:** Well, I'll bring them back... I'm a veggie. I don't eat meat. Not because I love animals. I just hate plants.

**Tom Wilkie:** So let's get this back on topic, shall we? I wanted to finish off... So Alex, you recently went through a migration from Pager Duty over to Grafana On Call... And I just wanted to -- you know, what on Earth made you do that?

**Alex Koehler:** We started using Grafana Cloud for ingesting logs in 2022, in the end of this year... And in that process, we started to dig around at the on-call plugin, and we discovered that we just can have the same features in Pager Duty, in on-call, without additional costs at that moment, which is a huge saving for us. And that's the reason why we switched off Pager Duty and started to route all our alerts to On Call. And we're quite happy with that, because it just works. It was a little bit of a migration process, because the Pager Duty integration was there for a very long time, and it was very old TerraForm code, and we had to gid out and root out quite a lot of skeletons in that process, where teams that have been abandoned or dissolved have not been removed from Pager Duty... And then we just switched over.

And I think our engineers love it, because it gives them the same features. And as I mentioned earlier, we gave them the responsibility for planning their on call shifts within Calendar. Before they had to do it in TerraForm and get an approval from an SRE engineer, and then they have to run TerraForm... And that's hard to keep the transparency in TerraForm, or what the shifts are looking like, and... Yeah. So that's the motivation behind it.

**Tom Wilkie:** Very cool. And how's the experience with the tool been so far? Have you enjoyed it?

**Alex Koehler:** Yeah, we really like it. Also, it gives us one UI to go into and have a look at our logs. And then if something is wrong, have a look at our alerts, and get the escalation there. So it's basically one tool for more features. So that's cool. We even increased our usage with the incident plugin recently, where we just rolled out a homegrown tool, and just moved our incident process to Grafana IRM for the incident plugin. And now we have at least the on-call for escalation, and the incident plugin for all the things that don't go well and need additional escalation.

**Devin Cheevers:** We have a fancy name for that one UI aspect you talked about, Alex. We're talking about observability native IRM. Tom and Mat, I don't know if you've heard that yet, but...

**Mat Ryer:** Love it.

**Tom Wilkie:** Again, the reason I do the podcast is to find out about our latest marketing attempts...

**Alex Koehler:** And I try to avoid that observability word, because it's very hard for German language.

**Tom Wilkie:** Oh, really? That's interesting. I've not heard -- do you mind expanding on that? Why is it hard?

**Alex Koehler:** No, it's hard for my tongue to pronounce it. It's the same with reliability, and flexibility, observability, you name it.

**Mat Ryer:** Whereas German words are famously very easy to pronounce for us, so...

**Tom Wilkie:** I mean, I don't know what it is about everything I seem to be involved with and mistranslations, but the name of my first startup was a company called \[unintelligible 00:49:45.01\] which was -- we were working on Apache Cassandra, but if you're a French listener, you'll realize that \[unintelligible 00:49:51.28\] means "naked bottom."

**Mat Ryer:** Wow. And you're now claiming that that wasn't deliberate.

**Tom Wilkie:** Yes, exactly. \[laughs\] That was not deliberate.

**Mat Ryer:** Gotcha.

**Tom Wilkie:** \[50:05\] Obviously, we're hugely grateful for you using the tool, and being a customer... Is there anything you miss about Pager Duty? Anything -- you know, you get a chance to ask us now. If you had one wish that you would be putting in Grafana On Call...

**Alex Koehler:** Actually, Pager Duty had quite an impressive UI. It was not so user friendly. A lot of different objects... I don't know, they have those service objects, the business service objects, and you have to go there, and go there to find out things... What I really like with the On Call thing - it's just a simple UI, you have to click on it, and you can pretty fast comprehend what you see. So that's actually cool. I didn't prepare a wish, so I can't come up with one now. \[unintelligible 00:50:49.07\]

**Tom Wilkie:** That's fine. You can always email them to podcast@grafana.com. I don't know where that email goes, but I'm sure someone will --

**Mat Ryer:** Just send him to Devin. Devin's the PM for this whole --

**Tom Wilkie:** Okay, Devin's the PM. \[laughter\]

**Devin Cheevers:** I'm not giving out my email, sorry.

**Tom Wilkie:** Okay... It's just first name dot last name @grafana.com, by the way.

**Devin Cheevers:** Oh, you did... You went there, Tom.

**Tom Wilkie:** Everyone. I mean, that's everyone's email at Grafana Labs, so...

**Devin Cheevers:** Where's the tomato then? But Alex, you did mention in your blog post that service -- maybe the service view inside of IRM wasn't particularly strong at the time of that blog post. I do think we've made some improvements there. We have shipped some improvements to that, and there's more coming, meaning you'll be able not only to scope your IRM reviews to teams, but also to services. So we've done some initial work on that that's out, and more is coming. So yeah, I'm just curious on that transition from a service perspective. Did you feel some pain there? Because Pager Duty is so service-centric.

**Alex Koehler:** Yeah, that's one of the reasons I said it's complex to comprehend in Pager Duty, because Pager Duty \[unintelligible 00:51:57.02\] business service, and then you attach a service to a business service, and then you have some flow in there. As I said, the Pager Duty integration has been around for a pretty long time in Prezi, so there have been a lot of business services and a lot of abandoned services... So the whole flowchart was wrong, actually. And in the process, because at the time we migrated there was no option to move that to on-call, we just abandoned it. We may reuse it when there is now a chance to do it, but the thing is, you have to go around in the company and ask "Okay, what are our business services? What services form our business services?" And that's a lot of footwork to talk to any engineer and try to come up with a detailed view on our systems.

**Mat Ryer:** Yeah. I should just say that -- you can read Alex's blog post; we'll put it in the show notes as well. It's on the Grafana blog. You wrote about this and went into quite a lot of detail, which is great. It says it's a seven-minute read, but it only took me six minutes.

**Alex Koehler:** You cheated.

**Mat Ryer:** I did, yeah.

**Alex Koehler:** You skipped the images. I actually put in images, and there's text on the images.

**Mat Ryer:** I see. Yeah, you're right. That would take me approximately... Yeah, one minute. No, you're right, seven minutes. So if you've got seven minutes to spare - and who hasn't? - you could check it out.

**Tom Wilkie:** So I think one of the things we're always keen to talk about, one of the things we're always keen to understand with users is where do you want to go with this tool? What would the future hold for for IRM? Again, if you had a magic wand... And other than just automatically responding and fixing all your incidents, and generally meaning you don't have to do any work anymore... \[unintelligible 00:53:43.23\] tractable than that.

**Alex Koehler:** Actually, you already spoiled it. The more time I see on-call and IRM, the more stressful it is. And that's not because the product is bad, because you only look there to just be paged when you have been paged. What my wish is just that the tool stays simple, in terms of just usable, and not be over complex, and be friendly for our engineers that are not quite often doing on call work.

\[54:18\] So I spoke about the different teams having responsibility for their tools, and there are actually teams that are quite often on call users, because their services are producing errors, and are quite important... But there are other teams there that are not quite often in on call. So if the product stays usable for them as well, that is a big, big plus. And if you can make it resolve anything automatically and solve the issue, that's cool, but that's not possible, I think.

**Mat Ryer:** In some ways... Yeah, we do look at that a lot. We have also Sift, which is the AI/ML thing, which does sort of like root cause, or contributing factor analysis, and tries to find what could be going on here. And then it isn't a great leap to think "Well, maybe you can then automate that", which you can do. And you can do it today with the webhooks. Some people do that; they will have a webhook for something that fires off, and then they've just got some code that just tries some basic things for them. But we always prefer people to fix the problem before that, if you can. But it's very tempting.

**Tom Wilkie:** Yeah, I've never been a big believer in this using alert webhooks to fire automated resolutions of problems. I've seen people do this with things like "Oh, we'll restart the pod when an alert fires, automatically." I'm like "Well, you're on Kubernetes, and there's literally liveness probes, which will do that for you without a big Rube Goldberg machine of observability in the middle." Or similarly, like "Oh, I've seen the latency is high" and it'll automatically scale it up. No. What you really want there is an auto scaler, not, again, a big observability machine that's going to tell you when to scale up. So I don't know, am I just being an old fuddy duddy here? Like...

**Alex Koehler:** I think that comes from the old days when you have to restart your Tomcats in the middle of the night, so they can serve traffic during the day... But you're right, there's no reason to start a script that does something when you can just fix the root cause in that case.

**Mat Ryer:** Yeah, but one thing I've learned is any anything that you can do with these systems, people will be doing them. So...

**Tom Wilkie:** Yes.

**Mat Ryer:** And I like that example of the just too many alerts... So we're just gonna have a metric on the number of firing alerts, and then a forecast on that. I think that is a really kind of cool, creative... It's very pragmatic. So points for pragmatism. But yeah, you might not design it like that, but...

**Devin Cheevers:** I think we're really excited, obviously, for SLOs, and \[unintelligible 00:56:50.23\] in that area. We have a product that we're really excited about, we got some great stuff coming... I've gotta say, one of the things I'm most excited about is the SLO Learners. So SLO Learners was a hackathon project we did recently, the team did recently, to help set the SLO thresholds more easily through some ML feature.

**Tom Wilkie:** Oh, that's right, this is the Monte Carlo method for "What would my SLO performance have been if I tweaked this thing?"

**Devin Cheevers:** Yeah.

**Tom Wilkie:** Yeah, that was cool. I really enjoyed that one.

**Mat Ryer:** Is that getting into the product, Devin?

**Devin Cheevers:** I don't know. Sometimes...

**Tom Wilkie:** Yeah. Can we have an exact date by which that will be available, please?

**Devin Cheevers:** Oh, is that getting into the product?

**Mat Ryer:** Yeah.

**Devin Cheevers:** Oh, yeah. Soon. Soon. Near term. 6 to 12 months.

**Mat Ryer:** It's another hackathon success. We had an episode as well in season one on that hackathon that we do, and it continues to kind of drive great innovation. This last hackathon was phenomenal. The projects were phenomenal. I couldn't believe...

**Tom Wilkie:** Yeah. We'll have to do an episode on our hackathons this season.

**Mat Ryer:** Yeah, we should do. It's a good idea.

**Tom Wilkie:** \[57:56\] Get some of the winners along.. So one of the things -- and again, I've asked Mat for this before, but one of the things we touched on earlier was you often get more than one alert and page for the same thing, for the same incident. You might get an alert for multiple SLOs, on multiple different services, that are all related to one region or one availability zone going down, or whatever it happens to be. I've always thought this should be really tractable issue for AI to do that grouping for you. They should be able to say "Are these alerts always fired at the same time? They're related." And plus, you've got a really strong signal with the right UX to like train it, to say "Yes, these are related. No, these are not related." But I've never seen anyone actually do that very well. I mean, we don't do it, to be very clear. Have you ever -- do you know of anyone that does that? Can you tell me how they do it?

**Mat Ryer:** No. But that is a great hackathon project.

**Tom Wilkie:** Yeah, maybe. When's the next hackathon? A few months time? We should get someone looking there. Because I think that would be something that I'd use. And I'd love to see that in our tools.

**Mat Ryer:** Yeah, we've done a lot of work like classifying alerts, we've done a lot of experimentation on that data... And there are definitely things that we can do. And some of it you'll see surfacing in the Sift product and elsewhere. But that in particular, it does seem like they could do a quite a good job of that.

**Tom Wilkie:** So Alex, I just wanted to thank you very much for coming on. Is there anything else you wanted to talk about whilst we're here?

**Alex Koehler:** No, I think we touched the major parts of the product, and about alert fatigue, and the observability thing... I think that's a broad field, and I think there will be changes in the future, as you highlighted, maybe with AI, or maybe with additional tooling that helps you deduplicating things, and get learnings from it... But yeah, that's an interesting field.

**Tom Wilkie:** Yeah, we talked a bit about the deluge of warning alerts, and the very low signal to noise right sure they have... But the fact that often the actual kind of contributing factors are in those warning alerts somewhere - I think that'd be a really good area for AI to kind of filter down warning alerts and say "You just got this SLO alert. It may be/might be related to these warning alerts that we weren't going to tell you about otherwise." There's another good opportunity, perhaps.

**Alex Koehler:** Yeah, and I think we have to take care of that we don't do the product too complex, because with the changing industry, more developers will be on call, and it must be easy for them to access information, and to act on those information. And if we create additional expert systems, that's not helpful. We need to make sure that the product is easy to use, and concise, and gives you fast feedback; what's wrong, as you said, and what's broken.

**Tom Wilkie:** Yeah, I 100% agree. Well, I think that's all we have time for today. So thank you to our guests, Alex and Devin, thank you very much.

**Devin Cheevers:** Cheers. Thanks.

**Alex Koehler:** Thanks, too.

**Tom Wilkie:** So I'm Tom Wilkie, and I want to thank everyone for listening. We'll see you next time on Grafana's Big Tent.

**Outro**: \[01:01:14.03\]

**Mat Ryer:** Do you wanna just invent any other ideas, Tom, while we're here?

**Tom Wilkie:** This is how I get feature products into the feature now? Feature -- argh!

**Mat Ryer:** Yeah. We have to put products in our --

**Tom Wilkie:** This is how I get features into the product now, is it?

**Mat Ryer:** Oh, sorry. You corrected yourself.

**Tom Wilkie:** I was trying to do that whole -- you know, it conflicts my lack of ability to speak English.

**Mat Ryer:** Well, you could have just left it and we could have just snipped the words up and swapped them. That's how good they are. We'll just train a deep fake model of you.

**Tom Wilkie:** And how do you know this isn't a deep fake model of me?

**Mat Ryer:** Well, we don't, do we? Although, let's see your hands. Mind you, they fixed that even, haven't they?

**Tom Wilkie:** Yeah. No, I just naturally have six fingers.

**Mat Ryer:** \[laughs\] Yeah.

**Tom Wilkie:** These visual gags will go down really well on the podcast.

**Mat Ryer:** Yeah, they do. Well, people got imaginations. What do you want?

**Tom Wilkie:** What do you think they're imagining you and I look like here at the moment?

**Mat Ryer:** Well, hopefully gorgeous, because we are... So hopefully that. Probably good head of hair, I would have thought.

**Tom Wilkie:** \[laughs\] On both of us. Yeah.

**Mat Ryer:** Definitely.

**Tom Wilkie:** Wishful thinking, wishful thinking.
