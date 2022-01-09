**Gerhard Lazu:** So I'm really glad that we managed to get together again, because it's been quite some time... I've actually been at Changelog episode 374, which was part one of my KubeCon North America 2019; so it's been a while. I know that many things have changed for you, Alexis, and for Weave Works as well, since the last time that we talked... So I'm wondering, what is the most meaningful change for you in the last two years?

**Alexis Richardson:** Apart from all the obvious ones... You know, like, there was this thing - what was it called again?

**Gerhard Lazu:** I forgot... \[laughs\]

**Alexis Richardson:** It's just all a blur. No, I mean for me --

**Gerhard Lazu:** Yeah, apart from that.

**Alexis Richardson:** ...a big change is that I moved house to Oxford, which goes with us going fully distributed. We'd always been a distributed company, actually, with people in the U.S, Europe, even Asia as well... But of course, with the pandemic, we moved out of our physical offices, and became fully remote for a while. Now we're sort of probably gonna stay mostly that way. It's good to have a couple of places to get together now and then. And with some changing family circumstances, I moved out to Oxford, which is a lovely town, 60 miles outside London, where actually I grew up.

\[04:03\] The last time I was here, there was hardly any tech, when I was expecting it to be still essentially a bit of a desolate wasteland of technology... But actually, it's grown a lot since then, and we're even getting investors who are willing to come and see Weave Works in Oxford, which is quite exciting.

**Gerhard Lazu:** Okay.

**Alexis Richardson:** The company has done really well in the time through the pandemic, and I'm really proud of what the team has achieved. I think it's a testimony to our culture, our willingness to work together and help customers... And I suppose on the technology side, our GitOps message has really taken hold. People understand it, it's widespread, we have products that implement GitOps very clearly... So do other people, which was always an intention. We'd wanted GitOps not to be a product, but a particular trend that everybody could implement in their own way.

The CNCF did a GitOps definition in the working group, which had over a hundred participants from almost as many companies, and came out with something that was just five lines long, but will do for now. The only thing I can say is it took less time for a hundred people to agree on the definition of GitOps than it did for ten people in the CNCF TOC to agree on a definition of cloud-native. \[laughs\]

**Gerhard Lazu:** Okay, okay... So that is all great signals, I suppose.

**Alexis Richardson:** Yeah, I suppose so.

**Gerhard Lazu:** I remember in 2019 when you mentioned about GitOps, it was something new to me... And I was thinking, "What is this GitOps?" and you mentioned "Well, it's been around for quite some time, and there wasn't quite a term for it... It wasn't so popularized." And here we are, two years later, when a hundred people can agree on that, on what it means.

**Alexis Richardson:** Yeah...

**Gerhard Lazu:** Okay. Where can we find this definition?

**Alexis Richardson:** If you type "CNCF GitOps working group" into Google, it should pop up. There's something called Open GitOps, I think, which has it there... And we'll probably have other things, other kind of conformance things and standard tools that people can use for all kinds of stuff. And it's just the beginning, because at the moment we're still at the "Everything that is old is new again" stage of technology; just like containers recapitulated VMs, which recapitulated mainframes, I think that GitOps recapitulates many, many things before it, like DevOps, infrastructure as code, CI/CD... Even going back to the early '90s with the Promise Theory from Mark Burgess, and a lot of the ideas that he had are now easy to implement. That's the key difference. And just like Docker made containers, which were just a Linux person thing, into something that any developer could use, I think GitOps is making operations into something that any developer can take control of... And that is a really important change, because as I've said again and again, the number of developers is increasing very fast, and it will probably be a hundred million in the foreseeable future. If it's growing 15% a year, that means it doubles every five years. The question is what tools will they use? What will their expectations be, what will they build, and for whom? So we think GitOps is a simplifying solution to a lot of this technology to come.

**Gerhard Lazu:** Okay. So we have all these cool technologies, we have the landscape which is growing, which is expanding, GitOps - everybody agrees what it is... But there's still something missing. I know that you recently spoke about this; you're expecting - or maybe wishing - that there was an app store for the enterprise. We're still missing that.

**Alexis Richardson:** Yeah.

**Gerhard Lazu:** First of all, what is this app store, and where is it? Because I don't see it.

**Alexis Richardson:** Ha-ha! I mean, we have things like, you know, Helm chart repositories as artifact, and companies like Amazon have marketplaces, Red Hat has Operator Hub... So in a sense, we are, little by little, getting closer to the idea that there is a systematic way to extend one piece of enterprise software with another. But really, I was talking about -- you know, it's a castle in the sky. I think the reason I discussed the enterprise app store is because in a way, it's such a ridiculous idea.

\[08:04\] If you look at the presentation that I gave, which if you find GitOpsCon, the keynotes that I gave for KubeCon - it's all there; there's a YouTube video and the slides are online, and I'll give you a link afterwards that you can share with your audience... But if you look at it, you'll see that I'm talking about how in technology we have these sort of pivotal moments. And for me, a really important technology moment in the last few years - not the only one, by any means - was the iPhone. When the iPod appeared, people said "Why do we need this? We have the Walkman already." And then they bought it and they went "Oh, \[unintelligible 00:08:40.26\] cool device." And then we saw that the Zune was a way to do it badly... You know, don't make it brown; tip for next time. Things like this. But it wasn't really until that form factor also became a phone and then a camera that people went "Hang on a minute, this could be a really profound change in how we interact with technology..." And you know, not necessarily even in a good way. I mean, it brings things like Facebook into your life maybe too intrusively. But it was a really important moment. And if you look at the Apple share price and at the graph of other Apple releases over time, you'll see there's a big push up after this thing appears, followed closely by the app store.

And what the app store did was it made it possible to put anything on your phone. And those two together created what people call "the iPhone moment" or "the App Store moment." It's just a sea change in convenience and experience. And if you think about the web, we need these richer experiences, because before that we had HTML, then we had Ajax... But while that was going on, we had phone apps, and I think you may recall there was this great technology called WAP at one point, that everybody was saying was gonna change the game... And I was wondering how my Nokia 9000 or whatever it was, with its screen that was about the size of a coin, and it was LCD, was going to help me to do something cool online, like I could with Amazon on Yahoo! on my phone. And obviously, the technology just wasn't up to it. But with the iPhone, and of course, high bandwidth, you have essentially a computer in your hand, and that means that you can start to build a whole new kind of human experience around it, for better or for worse.

So I think that it is appropriate to draw an analogy between then and now, and say that we have not had yet the iPhone moment for cloud-native technology. I mean, a smaller, but equally profound shift was with the web, which then produced Amazon, eBay etc. I think with the web we didn't have one moment, we just had lots. You choose your favorite. My favorite might be the day that Google came out, or the day that Bill Gates said "The internet is important", or whatever it was. With iPhone, it was a clear, single point in time. And I think whether it's a shift of several steps or one thing, cloud-native has yet to achieve the kind of obvious change that those moments have. And the characteristic is you can't imagine what life was like before it.

**Gerhard Lazu:** Yeah.

**Alexis Richardson:** When somebody makes a show on TV, and then they have to have everybody with long hair and big suits, or old clothes, and instead of carrying phones they've gotta pick up the phone on the desk, and they're all smoking... It's like, "Oh, I know... We're in the '70s. Great!" Or it's early '90s and there's a businessman with a big mobile phone, the size of a briefcase. But really, we can't remember that time, because it was ridiculous. We didn't have mobile phones, what are you talking about?

So what will the thing be that is the iPhone moment to me, App Store moment for cloud-native and Kubernetes, and everything else? I really hope it will be a good thing, by the way, and not another notch on the bedpost before you'll expire.

**Gerhard Lazu:** \[11:47\] Yeah. I think many people, when they think about the App Store, they just imagine the apps themselves. And the parallel which they would draw is - well, we have Helm, right? We can install these things. It's very simple. And we have these compositions, so it's a solved problem. But actually, there's so much more to that than just installing something. And I think that's what the majority is missing - it's all the interactions.

**Alexis Richardson:** I mean, it needs to be in the right state at all times. If you install software and it stops working, how do you fix it?

**Gerhard Lazu:** Yeah. But it goes into, for example, like security, like compliance. It's not just the artifact that you get, right? It's not just the image that you get, that it runs, and it behaves like a 12-factor app... Obviously, since then, things have moved along, but still, it doesn't just -- it's not like a cloud-native app. There's a lot more to that. It's like, it fits in the whole ecosystem. And you have the whole ecosystem. There's upgrades to think about, there's multiple versions to think about; there's so much stuff. And not everything is an app. You have stateful services, or stateful systems. What about those? I mean, they need to get in this world, they need to be operated and upgraded and managed the same way. What about observability? Then you have concerns, which traverse every single app. There's so much to it.

**Alexis Richardson:** Well, I think it's worth contrasting what the world looks like with phone apps. We don't think about that too much, and the world of enterprise IT. I mean, the reality today with Kubernetes is if you and I decided to have a competition, we started in the same Amazon zone, just using the same computers basically, and we use the same version of Kubernetes. Let's say we both use EKS, Amazon's provided service, and I install my cluster, you install your cluster; maybe we each agree to put a couple of things on it - a couple of add-ons, Prometheus, something else, and maybe some apps... And we each do it in lockstep. Then we let it run, and then we wait for like a couple of days. I would ask, is your app now the same as my app? And generally, we have no idea. And that is why enterprise IT is still hard, because we don't wanna be in a situation where these things are diverging, potentially. We wanna be in a situation where we know that they're correct we know that they're the same, and we know they're under control. I think this is key.

And the presentation that I gave made some pretty cheap jokes at the expense of enterprise IT, the classic IT crowd model, with the guys in the basement saying "Have you turned it off again and on again?" But actually, you can't even turn off most enterprise software. It just keeps running. And then upgrading - you know, that's a chance for the team to take a few weeks off, deleting... I mean, how many people who did open stack PoC's back in 2013 and 2014 - they're still running somewhere in the organization.

**Gerhard Lazu:** Yeah, exactly. Even today. And they will, for many years, because everybody will be scared to touch them. It's like, "I'll leave it there." Who knows how much cruft you would accumulate? You're right, it's difficult to imagine the Nokia before the iPhone. Like, "What was that even like?" App? How would you get an app? Then we had the Blackberry Store, I remember that... And that was always like "What is running on this? We have no idea", because the interface was all wrong; the interactions were all wrong. So do you know of any enterprises today that have had maybe a mini App Store moment? Any examples?

**Alexis Richardson:** Well, I think people are starting to realize that there are some benefits to thinking in this way. I was talking with somebody a couple of days ago about the benefits of Kubernetes fleets. A fleet is basically a heterogeneous group of clusters. And if you're following the Kubernetes standards work, things like cluster class is starting to speak to this challenge. You may not know how many there are, you may not know who runs them, but there might be a few thousand clusters, and some of them have some properties that you wanna change.

Let's say you wanna upgrade one of those... Well, hang on a minute. Why are we even upgrading? Wouldn't it be better just to shut the whole thing down and start a completely new one, on a new version, and then redirect the traffic? If we could make that easy, then for some, but not all cases, that might be a better way than trying to upgrade in place. And that's a really good example of approaching IT with a consumer mindset instead of an enterprise IT mindset. The whole idea of an upgrade leads us into problems, in some cases.

**Gerhard Lazu:** Yeah.

**Alexis Richardson:** \[16:06\] I mean, sometimes we dispose of consumer technology because it's not upgrading in the way that we want to. It's just better to get a fresh thing, sadly, and let someone recycle it. So that's a good example.

Another example is - I see people discussing whether Kubernetes is a cloud or not. And of course, this mindset comes from when Kubernetes appeared, everybody said "Oh, it's like Google for everybody else." And they think "Well, Google is running this big cloud. So we can be like Google." Why would we wanna be like Google - no one stops to explain this. But let's pretend it's a good idea. Therefore \[unintelligible 00:16:37.21\] it must be a private cloud technology. Well, hang on a minute... Is it really a private cloud technology? Do we really wanna have lots of different teams on a single Kubernetes cluster? Is it even designed for multi-tenancy? If you ask the Kubernetes team if it's designed for multi-tenancy, you'll either get the answer "No", or you'll get silence, and then looking at the feet. And that's Kubernetes, not Borg. Borg is a different thing.

So actually, it's an app server... And if we could - going back to the "Shutting it down, turning it off and on again easily", always turn it on again in the state that we wanted to be in - that would be great. It's just like the old days of Java and Tomcat - you have a little app running in Java \[unintelligible 00:17:16.06\] you don't need it anymore, you shut it down. You want it again, you boot it up. It just takes a few seconds, so what's the problem?

Now, I know Kubernetes still takes more than a few seconds to boot up, but we're not that far away from it getting to the point of it being convenient. So that then becomes actually a really important goal. So when you find people in the industry who do not treat their Kubernetes clusters as special snowflakes, they have to be looked after by a dedicated, named team of people, but instead have got to the stage where the whole infrastructure is more or less disposable - give or take a few assumptions - and the team are happy to move around, and some people are leaving the team and new people are coming in and being productive, then they've moved past that stage of thinking like a cloud, and machines, and starting to think in terms of disposable technology.

So those are the signs I'm seeing, but nobody is actually trying to solve the whole problem at once, because I think it's probably too big for one person to solve. We see little pieces of the elephant at a time.

**Break:** \[18:19\]

**Gerhard Lazu:** I think that makes a lot of sense, and I do find myself in a similar situation when it comes to upgrading Kubernetes. Not even Kubernetes, even like the components; the essential components, like external DNS, like cert manager... You maybe want to install it again from fresh, because there's always drift, and that's where all the problems come from. Migrations. What happens if a migration goes wrong? You have a back-up, then you restore the back-up \[unintelligible 00:20:19.28\] What if that doesn't work anymore, what do you do then? How do you recreate the entire world? And I think that GitOps as a model can really help.

So if you capture the entire definition, like the base zero, and then on top of that all the things can happen... So when you start again, you start from the same baseline, and then whatever needs to happen, will happen, and that's okay because of reconciliation, because of loops... But what is that baseline? Like, no data, just the declaration.

**Alexis Richardson:** Well, yeah, that's the problem today. Let's face it, there's no really good GitOps solution that includes data right now... Let me explain what I mean by this. I think there are some amazing data solutions out there which we can discuss. When I say "a good GitOps solution" I mean something that has got to the point where it's easy for just about everybody... And GitOps is still breaking slowly out of the Kubernetes world to a bigger world of application developers; it needs to be as simple as building a web page right now. It's not there yet. All the techniques that it's based on, like the Chefs and the Puppets of this world inspired all these infrastructure-as-code ideas, and so on. You know, those are more complex, and this is becoming simpler, but it's not there yet. But it does basically deal with apps, if you know what you're doing. But data is much more challenging.

Now, we do have some very great technologies, like Apple Time Machine, which is based on Solaris -- what was it called? Not zones, but...

**Gerhard Lazu:** Snapshots?

**Alexis Richardson:** The Solaris snapshotting technology, ZFC.

**Gerhard Lazu:** ZFS.

**Alexis Richardson:** The world's most amazing data storage layer. And some people I know, even friends of mine, have tried and failed to bring ZFC to the masses a few times. It's just not happened yet, and I think there's just the few pieces missing, that somebody will crack... But we'll get to a place where -- you know, GitHub has a history, applications have a history in GitHub or other tools, and data will have a history, and then you'll be able to bring those histories together sufficiently well to just about recreate your world... Which is not the same - let me be clear for pedants - as solving any hard computer science problems. There will be edge cases, we will make mistakes, things will fall out, but generally speaking, the business will kind of work around that stuff.

**Gerhard Lazu:** GitOps, even though it's still getting there when it comes to data, I think it does a great job at capturing the entire infrastructure as it runs, and the tooling improved a lot in recent years.

**Alexis Richardson:** I think so.

**Gerhard Lazu:** Yeah. When I started looking at it, the GitOps CLI didn't exist; now the GitOps CLI is a thing. But what is the GitOps CLI? It's the first time I've heard of it in recent weeks... But I really like the promise, especially the starting with it.

**Alexis Richardson:** So the GitOps CLI is a part of Weave GitOps, and that's just something we wrapped around Flux, and it's our open source project; we recommend that you try it out. We have some ideas to make it even more exciting in the future, but right now it's pretty simple. The idea is essentially that GitOps should just be a very natural part of every developer's workflow - for testing, for rolling into production, for going back... And this should be first-hand verbs that everyone is familiar with, but this has got some time to go.

**Gerhard Lazu:** Okay. So it's easy to get started. The two commands - that's great. Start with GitOps, and two commands. I really like that story. The Getting Started obviously needs to be simple for anyone to even consider trying it... Because - like, why would I?

What are the benefits to using GitOps, for those that are still thinking "Should I use GitOps? Do I do GitOps?" What are the benefits of GitOps?

**Alexis Richardson:** \[23:56\] Well, that's a really good question... One of the key benefits is that it automates a lot of steps that you would do manually when it comes to deploying and managing your stack. If you want to deploy lots of components into Kubernetes, several different GitOps technologies - including Flux, and Weave GitOps, but others as well - will work in this way. They will run an agent inside Kubernetes... In fact, you can do it without an agent too, but the agent example is the simplest to explain. They'll run an agent in Kubernetes, which is aware of potential updates, and then when it sees that a potential update is available, it will deploy it. And that particular mechanism is what we call a pull, which is, again, something that has been done before Kubernetes came along; it was an earlier idea. But it's nice, because it has properties like security, it can inherit all of the Kubernetes security and lifecycle and operational capabilities, just by being embedded inside Kubernetes and living inside it. It can also see all the current Kubernetes state securely, which allows it to compare the current running state with the intended state without breaking security. And that means that you can observe whether a cluster is in the right state or not without breaking security, which is very nice.

Another property is that it scales. So this is something that you would be aware of if you had done previous work in Pub/Sub. But as you add more and more copies of a source of information, it becomes more scalable to pull changes asynchronously, than to try to push them all at the same time to the listeners on the remote clients. That's because some of them get there at different rates, some of them don't get there, some of them may not be ready, and other reasons as well.

So this matters when, for example, you have the use case like a telecommunications company, where the Kubernetes clusters are running in the mobile phone towers, and you might have three machines running a few clusters... Or another example is restaurants, where they have Kubernetes clusters in the restaurant. Believe me, this is true today. Or aeroplanes, where there's a Kubernetes cluster in the airplane.

So all of these things are connected back to a centralized controller (HQ) where the decisions are being made. And once a decision has been made, we virtually pushed virtual synchrony out to the remote clusters, in this case in the telco towers... But the actual changes will be pulled in. And the scalability matters when you have thousands of these things, which you do, in this case. So this is about taking Kubernetes to the edge scalably.

Another thing is that nobody touched the cluster, and yet you have thousands of identical clusters. Or they can be different if you want them to be. So you can have complete management of a huge fleet across the geographical area, all in software, which means that now we can take something like the telco infrastructure, which is upgrading to fast comms like 5G, and that could become an extension to the cloud. So that's like a mind-blowing event; that could be one of the key steps towards the iPhone moment for cloud-native apps. When we have an always connected set of nodes that form a single virtual cloud infrastructure, we'll be able to run apps wherever we want to, whenever we want to, that do whatever we want to. And that's pretty cool as well.

So I think all of those things come from GitOps. But then there's even really basic things, like "Do you know what stage your cluster is in?" Yes, you do, with GitOps. It's great. So in the example of Alexis and Gerhard, each start a Kubernetes cluster, we wait a couple of days, we can check if we're in the same state.

**Gerhard Lazu:** Mm-hm. So I have a less mind-blowing example, but real, real-world. This is my own experience, when it comes to the Changelog infrastructure.

**Alexis Richardson:** Great.

**Gerhard Lazu:** So your listening to this podcast is being streamed from a Kubernetes cluster.

**Alexis Richardson:** Hurray!

**Gerhard Lazu:** And that Kubernetes cluster, when it was configured, even though it does use a pull-based model when it comes to updating itself, it's not using the GitOps tool that you'd be familiar with, like Flux or Argo. It's using something called Keelsh. Now, even though that does something completely different and we're always running on latest, which is very dangerous... Anyone in GitOps say "No, never run latest, because you don't know what latest means, and it changes..." And we even had issues with that.

\[28:06\] The one thing that worked really well is the CI/CD system, whatever that may be, not having the keys to production. Not knowing even where production is. The CI/CD system stops after it produces an images, it publishes it to a registry of images - DockerHub, in our case - and there's this component which continuously keeps watching that image, when has the latest image been updated. And the properties of this, besides security, which you mentioned, which is a big one for many, is that you can run multiple Kubernetes clusters, and all you have to tell it is "Just pull from latest.' That's all you have to do. And that applies to everything.

So I think we're about 80% there, but I never really completed the 20% to go to Flux, or Argo, or something like that... Which I really want to do, because I see the benefits of that. And we have been experiencing those benefits for about two years now, and it's great. Pull-based for deployments is great.

**Alexis Richardson:** Well, there's a few things we need to add. You mentioned compliance... So the App Store has a model where, you know, whether it's Apple or somebody else, somebody will certify that once an artifact is in the store, it meets some quality assurance. At least that's the idea; it's not always true, but... You don't always wanna push changes to your telco towers unless somebody has vetted them.

So the next phase, which I don't think is part of the standard definition of GitOps, is the fully-integrated policy and compliance into this, so that we can have a concept of trusted delivery. And that includes the buzzword of the day "supply chain", signing your artifact, so check provenance, attestation... All the cool, new scanning tools can be part of this. Things like linting, things like static analysis... There are so many different examples. But fundamentally, you're saying "I get something from a safe place, I move it through a sequence of safe places safely, and I get it out to the right place safely."And that I think is really critical for the App Store, as well as what you're saying.

**Gerhard Lazu:** How does the GitOps model fit with the CI/CD (the continuous delivery pipeline specifically) model? Because the pipeline, the one that delivers into production - I mean, the last step is "deliver this", and this is running... But the GitOps model changed that slightly. What does that change look like?

**Alexis Richardson:** You still do pipelines, but they work in a slightly different way. So we talk about GitOps pipelines as well... So the basic example is I have a CI tool which does some things, and then I'm ready to do a deployment. In the old days, my CI tool would run scripts to do that deployment. And that's okay with small-scale, simple steps... But when we've got more than a few things happening, if one of the steps fails, the CI tool - you basically have to replay the whole update in order to get your update done correctly.

With GitOps, the CI tool is not responsible for the last step of the actual update of the cluster. It is responsible for presenting artifacts and changes ready for deployment, in repos that contain immutable artifacts, which we call the immutability firewall \[unintelligible 00:31:05.10\] From that immutability zone, the agents in the cluster can see the available new things and selectively pull them in and deploy them. And then Kubernetes, because it's a conversion orchestrator, will usually get these systems in the right state, with the help of the agent, which in our case is Flux... And that means that your pipeline now includes something that's running inside the cluster, and the last mile is a pull, rather than a push.

Now, again, I wanna state very clearly, there are variations on this pattern. So you can do the whole thing as 100% push, but the last mechanism is making some changes, because it includes the cluster. And that has to be done securely.

\[31:49\] The second example is one where staging is involved. And this can be done in many, many different ways. One way would be to have an actual persistent staging cluster. So we push candidate changes into the staging cluster, we inspect them, and then we once again do some more CI work, and then we push changes into production. Or we can do things where we have a stage release, so we push changes into production and then do a canary, and the CI tool continues to play a role, for example observing the canary. The only difference with GitOps is, just like in my first example, the CI tool interact with agents running inside the cluster.

Now, in the case of a canary it's gonna interact with a tool called Flagger, which is something that manages a canary roll-out. But it's just the same idea, except some of the -- you replace a few scripts with agents running in the cluster, is the basic change.

**Gerhard Lazu:** How does the pipeline interact with the canary? How does it know what the canary does? I mean, it can't be synchronous, right?

**Alexis Richardson:** In the case of Flagger, it outputs to Prometheus, according to configurable SLOs. So you can basically tell it "Hey, push this canary out another 5%, unless this metric is over this number." And then that interacts with external systems. So if you want to hook that up to your CI, the CI can sit there waiting, watching for metrics coming out of the Prometheus channel to show you what's going on. So there's all kinds of things you can do.

**Break:** \[33:20\]

**Gerhard Lazu:** What about the CI pipeline? And in this case, the CI is more like a CI/CD pipeline, because even though it doesn't do CD, it observes a component that does the deployment. What happens if for example Flux - because I imagine that's the tool which in this case updates what's running in the cluster... What if it can't do that? Maybe there's not sufficient resources, maybe some compliance has failed... How does Flux communicate that back to the CI/CD pipeline?

**Alexis Richardson:** So there is a right mechanism which people have been putting into GitOps tools, which helps them to use essentially privilege channels, so they can communicate flags back. There is -- I can't tell you exactly what level of support there is for different things; what I can also tell you is that we have GUI tools which allow you to look at the difference between what's in the running state and what is in the intended state, which means that you can then see if things are in the state you want them to be. That allows you to see if a job was completed. This is an area of active work.

**Gerhard Lazu:** I see what you mean. Okay, that makes sense. So I would like to shift a little, because we talked a lot about GitOps... But one very important thing when you try to gauge how far down the GitOps model you are is the maturity model.

**Alexis Richardson:** Yeah.

**Gerhard Lazu:** What can you tell us about that?

**Alexis Richardson:** So the maturity model is also in the slides that I gave at the GitOpsCon; I talked about the enterprise app store. So there are a few layers... The most advanced layer is what we call scaled GitOps. When you think about your whole fleet as potentially a single entity, just like you think about a data center as a single group of computers, and you have a capability, and abstractions, and tools to manage roll-outs and policy across the whole fleet. That's pretty amazing, and there are some companies out there doing that today with proprietary tools.

**Gerhard Lazu:** \[36:05\] And that's like level four, right? It's like the highest level on the GitOps maturity model. Okay...

**Alexis Richardson:** The next one, which I think most of our customers are trying to get to, is what we call enterprise GitOps, which is when you've got config management at the infrastructure/cluster/app layer, the main layers of the stack, and quite a few pieces of the workflow as well. That already just has such enormous cost savings and such boost in developer productivity and operational metrics that for many people it just is a goal, especially if they're in a hybrid or multi-cloud environment, or something like that. And those both for us are commercial customers.

The other two layers are what we call prerequisites, and are called GitOps. So prerequisites is when you're basically doing Git, but no ops. So this is what people at GitLab call Git ops. So essentially, they've got all kinds of runners... Or in the case of GitHub, GitHub Actions would be doing exciting and important workflows around Git, which could be part of an installation or a deployment, but they don't actually do anything operationally. Don't actually sit there, inside the cluster, continually verifying that it's in the correct state, and correcting it if it drifts. They don't do things like manage canaries, they don't do things across clusters... It's very, very basic stuff. That is for many people entry-level. It's a good thing to do.

The next level up is what we call core GitOps. That's when you are basically aligned with the precepts of what the GitOps working group has published. It's very basic stuff. It just says you have continuous reconciliation based on a plan in a shared mutual store -- version-controlled store, sorry. And this is almost identical to the methodology pioneered by Chef and Puppet, except that it's more easy to use now, you can apply it to more things all up and down the stack, there's less scripting involved, it's more programmatic, it's easier etc.

So just to recap - you've got your prerequisites, which is Git workflows. If you're just doing Git workflows, you're not doing GitOps, because you need to be doing ops. If you do core GitOps, you're adding the operational loop, which means that you now have automation. The system looks after itself. Then you add enterprise GitOps; you add more clusters, you move up and down the stack, you start encoding things like policy as code, platform as code into it. And then finally, at-scale GitOps, which is when you stop even thinking about individual computers and systems, and actually look at the whole, holistic problem.

**Gerhard Lazu:** Yeah. Even the clusters - at that point, the clusters are just like a resource.

**Alexis Richardson:** Right.

**Gerhard Lazu:** It's not about your app. Yeah, that is a very exciting world. That is the castle in the sky that you were referring to earlier?

**Alexis Richardson:** Well, the castle in the sky for me is actually the enterprise App Store, because I still think, for some of the reasons you mentioned, that enterprise apps are distributed apps. They may have multiple services. Some of them aren't used by people; they're services. Some of them have complex state, some of them have weird identity... All of those reasons mean that the enterprise App Store is always gonna be different from the lovely consumer one-app/one-person/one-phone experience. But it doesn't mean we can't strive to get there. It's a utopia.

**Gerhard Lazu:** Right. Well, everything starts as a crazy idea, until it stops being one, right? Someone that you and me know said that once... So first of all, your GitOpsCon North America talk, the ten-minute one - I watched it; it's great. That is a great summary of what we have discussed here.

There was also GitOps Days 2021 in June, and there were a couple of really good talks. The one around the GitOps maturity model - that was a great one. There was the inflection point, I think - GitOps has reached an inflection point, something like that, that Cornelia gave. So there were a couple of good talks at that conference, which we will link in the show notes. How was your GitOps Days 2021 experience for you?

**Alexis Richardson:** \[39:57\] Spectacular. I mean, I'm really proud of what the team pulled off. Let me just describe it to you. It's quite something. We're (I think) a reasonably well-known company at this point, but we're not a big company. Yet, our very small, very motivated, very talented team, who works constantly with our customers and partners, was able not only to get a great set of real-world use case talks, but also (check it out) they got a representative of Amazon, and Microsoft Azure, and VMware, and Red Hat, and Mesosphere (now D2iQ) to all stand up in one place, at one time, and say "We're using GitOps in production in our systems", and they all gave Flux demos, because they're all using Flux, except Red Hat, which is using Argo and a little bit of Flux on the side for some of its customers. That was amazing. And another is Alibaba, that spoke at the previous conference.

So if you're listening in and thinking "All this sounds a little bit sci-fi to me. It's gonna take a few more years to land", trust me, these people are all doing it for you already, and it's worth finding out about, because this is going to be how we operate a lot of systems in the future, at scale.

**Gerhard Lazu:** I do regard you as a bit of an innovator when it comes to a few things. I think GitOps is one of them. I think in 2019 it may have sounded as an innovation, like "What is this GitOps thing?" I think at this point we're like early adopters, maybe even slightly beyond that point... And that's why I brought this conference up, because there were some real-world use cases of how GitOps is being used, and it's not so - as you mentioned, a pie in the sky. It's not a pie in the sky anymore; some ideas maybe, but not this. People are using it, and it works. And with that in mind, I'm wondering what is coming in the next six months for the world of GitOps?

**Alexis Richardson:** Well, good question... So we've touched on most of the things. GitOps on the edge is becoming more and more common. I'm seeing a lot of retail stores -- the United States Air Force has a beautiful use case on the CNCF website. So before a fighter jet takes off, it reloads its Kubernetes using Flux.

**Gerhard Lazu:** No way. Seriously? Like the F-35?

**Alexis Richardson:** I don't know which planes, honestly...

**Gerhard Lazu:** Okay...

**Alexis Richardson:** But if you read the use case, you'll see that this is not a joke. This is part of their Platform One software platform for secure management of containers in real assets.

**Gerhard Lazu:** Wow. That is impressive.

**Alexis Richardson:** The same day there was a presentation on the GitOps Days - a lovely presentation from Ricardo at CERN, who manages an extraordinarily large and a very heterogeneous infrastructure, talking about how GitOps has basically made it all possible. I should add that Ricardo has young children, so he's managing to do his job AND sleep at night...

**Gerhard Lazu:** Okay... \[laughs\]

**Alexis Richardson:** This is really important. You don't wanna be working up in the night, and GitOps can help. We had a customer who just rolled out 5G with GitOps. There's gonna be a press release next week about that. Everyone's super-excited about that. And it's already doing HA, which is pretty cool.

**Gerhard Lazu:** By the time you're listening to this, by the way, which will be end of December, that will already be out. So we'll link it in the show notes before we publish.

**Alexis Richardson:** Yeah. Well, all of those are quite big-scale things, so what's coming is more real-world cases, more edge... And then I think we're gonna see a lot of work around the deployment pipelines. Not just in the world of GitOps, but of course, also in the CI/CD world as well.

DevOps and Git ops are becoming secure. They are becoming policy-integrated; they're becoming ways to get code and assets into production wherever you want, with 100% attestation along the way. That's the future. And then of course, fleets and platforms, the different ways to scale are gonna be very important. And all these things are being sort of unlocked like levels of a computer game by just continuing in the same direction.

**Gerhard Lazu:** That's amazing. And all this while Christmas is happening, and all this while all the life is happening, so there's like a nice progression to these big things happening, while, you know, carry on as normal; everything's fine, right? Keep calm.

**Alexis Richardson:** \[laughs\]

**Gerhard Lazu:** So as we are preparing to wrap up, I would like us to summarize this for our listeners. What would you say is the most important takeaway from this conversation?

**Alexis Richardson:** I'd say that you should be not scared to try out these new technologies. We've got a GitOps demo running on GitHub Codespaces, with a GUI that you can use right away, that I would recommend. You're welcome to contact me personally if you can't find it. I'm @monadic on Twitter, and alexis@weave.works is my email address. Within an enterprise organization, if you're using Kubernetes and you want to help scale or you're worried about onboarding applications, talk to me, because that's something that is a lot easier than you may have thought. Same for multi-cloud, same for integrating secure DevOps into the toolchain, all of that stuff. I think it's very much kind of happening, and happy to help anybody with their problems around it.

**Gerhard Lazu:** My most important takeaway is that I've been sleeping on the wheel for too long, and it is time to get properly into GitOps and try this out. I will do exactly as you said, reach out, if I get stuck, so thank you very much for that; that's super-helpful. And I'm really excited about 2022, what we will do for Changelog with GitOps, as well as see what others will do for their real-world applications. I mean, if the Air Force can do it, I think we can do it.

**Alexis Richardson:** Indeed, indeed, indeed.

**Gerhard Lazu:** That's the way I'm thinking about it. This has been a pleasure, thank you very much, Alexis, and looking forward to the next one.

**Alexis Richardson:** Take care.
