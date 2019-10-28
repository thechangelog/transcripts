**Adam Stacoviak:** Let's kind of give an intro to both of you. You're both well-known, but we're gonna start with you - give a back-story of who you are to Kubernetes, so to speak.

**Brendan Burns:** Sure. So I am one of the original creators of Kubernetes, one of the people who wrote the original prototype that sort of was the pitch vehicle that got everybody involved in saying that we should do this and started to set the ground rules for the project, and been involved from the beginning, sitting on the IRC channel, talking to people, going out to conferences and meetups and king of hitting the pavement for a long time, to kind of drum up a lot of interest...

You know, I look around at this conference and there's a lot of really interested people, and it wasn't very long ago that I had a lot of people asking me why the heck they should be interested in this thing... So it's an interesting turnaround.

**Adam Stacoviak:** How long ago was that point of view?

**Brendan Burns:** I don't know, it depends--

**Adam Stacoviak:** Two years, three...?

**Brendan Burns:** \[00:03:42.04\] Certainly two years ago, but even a year, a year and a half ago I think you ran into people who were still -- and then obviously still, throughout, there's a lot of people who haven't necessarily... If their thing is working for them, that's great, there's don't need to change. But definitely early on there was a lot of... I think people were just sort of still kind of getting used to the cloud and virtual machines and traditional tools like Chef and Puppet, and all of the sudden all this new stuff -- it's like, "Oh, I have to learn all this new stuff? What am I gonna do there?"

**Adam Stacoviak:** Gotcha.

**Brendan Burns:** That was an interesting time, doing a bunch of meetups. It was a lot of fun though. It was a lot of fun to get out of your shell and go and meet with a bunch of different people from different places, different experiences, get to know them and get to know the kind of products they want you to build.

**Adam Stacoviak:** So for the listener's sake, it's safe to say that you've been here since the beginning.

**Brendan Burns:** Yeah, I would say I've been here since the beginning. I think a lot of the technology stretches back further than that...

**Adam Stacoviak:** Because it's from experience, inside of Google...

**Brendan Burns:** It's from stuff that's been in the Linux Kernel since 2008, and work that's been done on the Linux Kernel... And even further back. I did this talk a while back about sort of like the history, and you can point back to chroots in UNIX in the late 1970's as sort of being the beginning of containers. It's important to point back and know that this is not an original idea; this is a collection of tools that have put together a lot of different ideas that people have had over the years. Now I'm a distinguished engineer at Microsoft, and running a lot of the container and dev ops stuff that Azure does.

**Adam Stacoviak:** Very cool. And Gabe, what's your history with Kubernetes specifically?

**Gabe Monroy:** So I kind of came at it from a different angle from Brendan. My history really comes from the developer experience angle. I was doing some consulting in New York, and 2008 happened and it kind of evaporated overnight, and I took all the commonalities that I was seeing around all the different companies that I was working with, and it was all around deployment automation being on fire everywhere... So I started a company called OptiMend, building tooling to make deployment automation easier; basically, running around and adding on early CI systems and Debian packaging and a bunch of stuff to automate software delivery, at a time when that wasn't commonly done.

From there, I sort of evolved a sort of PaaS and created this project called Deis, which turned out to be really popular. It was more or less Heroku, but running on your own servers, which was a very common refrain we were hearing from people back in 2009, 2010 timeframe. But I had the interesting experience of having to replatform the container-based -- actually, early involved in the container ecosystem, close with Solomon, and it was one of the largest external contributors to the Docker project for a while, just before it became popular... Only because we needed it for the Deis project.

What ended up happening over time was every orchestrator that we tried to platform it on just didn't work, and something was wrong... That eventually led me to Kubernetes. I think the first time I ever talked to Brendan was about extending the Kubernetes API. I'll never forget... I was on a plane or something, and I think you said--

**Brendan Burns:** SREcon. It was Dublin. Going to SREcon in Dublin, and I'd done this stuff--

**Gabe Monroy:** And you did the TPR -- first pass at TPR, the extension model, on the plane. He's like, "I'm gonna push this branch up, you guys take a look at it." And me and Matt Butcher (the architect on Helm) were super excited to work with him on it. So from there, I ended up joining Microsoft by way of an acquisition seven months ago, and now I'm sort of Brendan's counterpart on the PM side, working on the Azure containers portfolios - the AKS, the ACI, the servers broker stuff, dev tooling... Lots of different things we've got in the hopper.

**Adam Stacoviak:** I think it's interesting the perspectives here. You represent the end user, so to speak, to a degree; a user of Kubernetes to build a platform on, pre-Kubernetes even, trying different platforming tools, different orchestrator tools to build Deis on, and eventually... You know, my perspective from it isn't as a user with Deis, but it seemed like Deis was trying to catch some steam, but it caught a lot of steam with Kubernetes. That's what really solidified in making it easy to use.

**Brendan Burns:** \[00:08:14.01\] I think it was one of the first PaaS platforms to realize that the future came in replatforming on top of container orchestration. I think now, a year and a half, two years later it seems obvious, with Cloud Foundry and with OpenShift and others replatforming on top of container orchestration. I think Deis really saw that early, and I think that caught a lot of attention.

**Gabe Monroy:** Yeah, one of the interesting things to me is how the developer experience of the time when Deis was popular is kind of falling out of favor, in a lot of ways; Twelve-Factor is pretty limiting, and Kubernetes opens up a lot more opportunities. So we ended up kind of shifting our focus to things like Helm and Draft and Brigade and some of the newer stuff that's a little bit more Kubernetes native in this disposition, and I think what you're seeing from Brendan with Metaparticle is taking that jump a little bit further.

I think it's really tricky with developer experience, because on the one hand you want to be innovative, but if you go too far, you're gonna lose people; if you don't innovate enough, people are gonna be like, "Well, that's not compelling enough for me to drop whatever my current thing is." I think Deis definitely hit a sweet spot in kind of where it was at the time, but I think in a way we've kind of, as an industry, move on from that a bit, right?

**Brendan Burns:** Yeah, I think that's the case.

**Adam Stacoviak:** What's the state of Deis right now? I know it was in acquisition seven months ago... What's the state of the company, the project? Because it's like a company, and then a project in the same, which is somewhat confusing to most people.

**Gabe Monroy:** Yeah, it's an open source project, and what's really cool to me is we've spent a lot of time trying to put proper governance around it, and even small things, like semantic commit messages so we could write changelogs... A lot of that stuff to really just try and get a community of maintainers to step up. What I'm really excited about - there's a group called Team Heffy or whatever, who is sort of taking on the Deis workflow project and driving it in a new direction. I'm really excited to see that work taking off. It's been highly active.

**Brendan Burns:** And I would say the Deis team itself, the engineering team from the company has been -- they are a core part of the Azure Container Service team at this point, responsible for a lot of the engineering work that went into the AKS launch that we did recently, as well as the open source projects that we've launched recently Kashti, this GUI for Brigade... It's a workflow engine. The Draft tooling that we announced a month or so after the acquisition... So that whole team is contributing to both the core Azure container's experience, as well as open source tooling that makes Kubernetes better, regardless of where you're gonna run it.

**Gabe Monroy:** And even things like the Open Service Broker, which interestingly derived -- we started thinking about it first at Deis as a PaaS thing, because it was a Cloud Foundry-ism, and when we were platforming on top of Kubernetes, we were like "Well, there's really a better way to solve this in Kubernetes." That linked us up with Red Hat and Google, and we all kind of worked together. I'm really excited to see things like the Open Service Broker stuff landing, not just from Microsoft, but also from folks like Google and Red Hat. Everyone's talking about this, because it's a pretty important part of the modern stack.

**Adam Stacoviak:** Was that announced here at the conference?

**Gabe Monroy:** It was, yeah.

**Adam Stacoviak:** I didn't catch that announcement. Can you give me kind of an overview of what that is?

**Gabe Monroy:** Yeah, sure. The general idea is, you know, just because you can run something in a container doesn't mean you should, right? So things like data stores... Often the operational characteristics of a hosted cloud service - Azure Cosmos DB, for example - are gonna be much appealing to a container-based equivalent. And yet, people wanna be able to use the Kubernetes APIs to manage that stuff, so how do we build a bridge between Kubernetes and this world of Azure services? Or even on-prem services, Oracle databases, things like that.

\[00:11:57.14\] The Open Service Broker API has some verbs, provision, deprovision, bind, unbind and give me the catalog and that's basically the broker, that's it. And so what we did was we built a set of Kubernetes resources and Kubernetes controllers that can manage the lifecycle of apps, and what you get at the end of it is a Helm chart where you can Helm-install Wordpress, and it looks and feels just like any other Helm chart that you would install, but where there would be a MySQL container, you instead have Azure database for MySQL. But the lifecycle management of the tooling is exactly the same.

**Adam Stacoviak:** Very cool. Let me go a little further back in the past... How many years has there been since the public birth (of some sort) of Kubernetes? How far back does it go?

**Brendan Burns:** It was about three and a half years; it will be four years next June.

**Adam Stacoviak:** Four years. So I think pre-call -- I don't know if those made it into the actual audio that will go to the listeners' ears or not, but Brendan, when you said you remember a year, a year and a half back even(ish) when people were still questioning Kubernetes, and we're a point now where to me - and maybe everyone else is thinking this, too), Kubernetes has won. You've got a conference that was 1,000 people last year, 4,200 people this year, significant growth, a lot of buy-in from worldwide partners, members in the CNCF and so forth, so it's definitely won. Can you kind of, as somebody who's been there since the beginning, shed some light on kind of where you came from and where you're at now?

**Brendan Burns:** Yeah, it's really incredible to see; it's humbling, I would say.

**Adam Stacoviak:** Did you expect it? Is it a surprise to you? I know you're good and the team behind you is good...

**Brendan Burns:** I don't think you can ever expect this kind of stuff.

**Adam Stacoviak:** Right. This is a shift.

**Brendan Burns:** You have to go into it and believe that you're gonna work hard and hopefully the right things are gonna happen, but I don't know that you ever take it for granted. There was a moment -- I really actually remember a distinct moment about a year and a half ago, I would say (maybe a year and three quarters ago) where I kind of felt the wind. It's like the wind switched from being in my face to being at my back. It was sort of just this intuitive sense of, like you've crested the hill... And you're not done, but it's getting easier.

I still think that there are a lot of people out there who are thinking about container orchestration and still sort of wondering "Where's the value prop for me?" So I think that we're still talking about container orchestration, but I don't think we're gonna talk anymore about what container orchestrator to use. I think we kind of always knew that that was gonna happen for some API.

**Adam Stacoviak:** At some point, someone was gonna --

**Brendan Burns:** Someone was going to -- it just doesn't make any sense, right? If you were a monitoring company, if you were a developer, you don't want there to be multiple APIs, you want there to be one API, because then you know... You know, I remember we had this discussion, and Gabe knows this, because he actually took Deis and platformed it on a bunch of different orchestrators before they chose Kubernetes.

We talked to people and they said "Which one am I supposed to target? I'm a monitoring company, which one am I supposed to target?" We don't have those conversations anymore, and I think everybody's happier, the developer ecosystem is happier for having that. I kind of always said there would be sort of a POSIX standard here, and I think that's what we're seeing emerge... And now the exciting thing is "Okay, if this is a commodity, if every public cloud has this as a service, what do we build next? What do we build on top?" So I think that's the other exciting part - we can finally sort of put the orchestration API behind us. It was never intended to be the final API. We need to start thinking about 'What are the layers we build on top?", and that's really exciting to me.

**Adam Stacoviak:** Do you have any insights into what's next then?

**Brendan Burns:** Well, so Metaparticle, that I talked about yesterday, is something that I think is important.

**Adam Stacoviak:** That was interesting. Do you wanna give you a breakdown real quick for those who didn't catch your talk?

**Brendan Burns:** Sure. Metaparticle is actually an independent open source project at Metaparticle.io. It's really trying to, I would say, bring distributed systems to people who might not otherwise be distributed systems developers. Another way that I've said it before is like "Visual Basic for the cloud." How do you have an experience where you can think about the concepts of cloud-native computing, but not necessarily the details of "Hey, there's this YAML file here, and there's this Kubernetes object..."

\[00:16:17.29\] Maybe I just describe my system as having four replicas, and I want you to take care of ensuring that -- you know, in code I'll say I want four replicas, and you take care of figuring out how to deploy it, how to put a load balancer in front of it, and stuff like that.

I think that there's always been this inevitable trend in configuration management - and actually, we talked about this a lot with the Helm team - around like... Configuration management gets more and more programmatic, and eventually it turns into like a bad programming language, and I think that at some level we should just admit that (as some people said) configuration is code, and I think we should admit that like "Well, if configuration is code, maybe you should just write it in a real programming language." There's all of this tooling around unit testing that we've built, all of these practices around writing software code, that don't extend into the way we configure and deploy our applications at all. I don't think that anybody -- someone pinged me and said "I was just starting to think about what it meant to unit-test a Kubernetes config", right?

It's kind of crazy that we have 20 years of people thinking about unit-testing code, and yet we're having to reinvent it for configs... Like, why? We should just go to a place where there's frameworks, there's UI, there's all of the kind of stuff that we expect - code conventions, all of this stuff - and then we can express that in code.

I think if you do that, not only do you end up with a better system with one source of truth, but you actually also build a more accessible system. You can have people who might otherwise just be front-end Javascript programmers, who are starting to think about deploying distributed systems. I think it's the only way that we scale the industry to the number of systems that need to be built.

So I think it's maybe like Kubernetes at the beginning, it's an experiment, it's an idea; I wanna start a conversation, start a community. I don't know that it will be the one, but I think something like it will be the way that we build systems in the future.

**Adam Stacoviak:** This question is more for either of you really, just kind of teeing off what you said there, it's how we got here - can you go back into the history of Kubernetes and the community? Not just the technology, but the community, the impact... How did we get here? What were the right recipes that other open source would-be's of Kube-- maybe there's not a repeat, but there's somebody out there looking to what you all have done around the technologies, around the community, around the governance, even around joining CNCF, and Google's perspective, and now Microsoft's perspective on containers...

**Brendan Burns:** I can talk about that a little; I'll start it, and then Gabe can give his perspective as well. I was a student of the FreeBSD Linux course in the early 2000's, and what I was thinking about community and technology and how technologies win, I thought a lot about that. And you know, I think Linux in that world won, because it was friendly and open and it was an ecosystem that you could build on. There are no technical reasons why it won, I don't think. It won because of the community that it built, and it won because of the ecosystem that developed around it, and then the technology came afterwards. People were like, "Oh, okay, it's won. Let's go in and harden security, let's go in and do all of these things."

So that was part of it - it was that it's not okay to just build a community, you have to build an ecosystem. You have to do a good job of sort of telegraphing what you are and what you're not, and staying to your commitments and saying, "You know what, this is the line where Kubernetes stops, and this is the line where--" and I think we did that with Helm, actually. I had conversations with Gabe where we said configuration management, package management is something that Kubernetes is not gonna do; we're not gonna pull that into the core. That's gonna be a project that lives on top, gives space for an ecosystem to develop around you...

\[00:19:58.15\] I also think I went into it with a real humble attitude, a real "every single question is important" kind of attitude. I think that's incredibly important also. It makes it a welcoming community. I'm really proud of the community that we've developed; I think it's pretty unique, honestly, and in tech in general, in terms of the degree to which it welcomes people in. I think that's critically important, and it was (I hope) a big part of the success as well. I don't know.

**Adam Stacoviak:** What do you think about the perspective, since you kind of come at it as a developer, user experience implementer, kind of end user perspective... Because you weren't involved in the creation of Kubernetes, you were involved in building something like a PaaS and needed an orchestrator the entire time, and here comes Kubernetes. Can you kind of show your perspective on that?

**Gabe Monroy:** It's interesting to me, one of the things -- before I joined Microsoft, I would pull up a quote from the Borg paper. A lot of these systems are sort of inspired by the way Google is managing infrastructure internally. And in the Borg paper, right in the first part of it, they call out the reasons why they built it, and there's three things they call out. The first is they wanted to empower developers for self-service. They wanted developers to be able to deploy these large clusters without having to involve ops, for example.

The second thing is they wanted to build software that was extremely reliable and resilient to underlying infrastructure failures. And the third thing was that they wanted to be able to throw hardware at the problem to scale out. So if there was a scale event, or they needed distributed workload, they could just add capacity and everything would take care of itself. And what's interesting to me is I think that though not all companies operate at that scale - Microsoft scale, Google scale, that kind of scale - those three things are still important to everyone, especially as... You know, the reality is there's only so much compute power you can pack into one server; as you get the benefits of distributing this stuff out and self-healing infrastructures that eventually converge, declarative models for how you wanna manage this stuff - this really impacts folks who are operating at the 20 server scale, as well as a many-thousand server scale.

I was enticed by that proposition, and I think that we still have a lot to go on that first thing, the empowering developers, and I think that my big takeaway from this conference, including not just Brendan's keynote, but also Kelsey this morning, and Michelle Noorali actually at the keynote before, talking about "Look, Kubernetes is still hard for developers."

So I still think we've got a ways to go there, but the good news is that on the other dimensions I think we're actually in a pretty good place. Brendan and I actually were joking the other day that when we start talking about enterprise security features like RBAC, and policy and governance, you know the project has moved on from its phase... So I think that's a good thing to see, because it means things are maturing.

**Break:** \[00:23:00.24\]

**Adam Stacoviak:** Let's talk about the acceptance of it and who's using it, because I think at this conference my eyes were opened to a different type of user which I really hadn't considered, but I'm not as close to this project as you guys are... But it's like you've got people who are accepting the cloud, and then you've got traditional IT, which is present here more than I've ever seen at maybe the tech conferences I've gone to over my years.

I see a huge presence of actual IT, not just cloud application developers who ship to the cloud and are in this new world, where sort of like old school virtual machines and behind the scenes, behind firewalls - that IT is present here, looking to new ways where Kubernetes is taking over what they had done before... And in some ways they're kind of scared of it.

**Brendan Burns:** Well, I don't know; I would hope that they're not, in the sense of actually--

**Adam Stacoviak:** Well, not so much scared... Let me clarify what I mean by "scared" - it's that it moves so fast; they're used to deploying and chilling down and just sort of maintaining, not in a bad way, but that sort of like the older IT world, you know? And that's not here with Kubernetes. Kubernetes is fast-moving.

**Brendan Burns:** Yeah. You know, we've talked a lot about how much it needs to slow down; I think that there's a component of like once you're starting to talk about those enterprise features, you're also starting to talk about "it's great to have a three-month release cycle, but if half your customers aren't gonna adopt your three-month--"

**Adam Stacoviak:** ...what's the point of releasing?

**Brendan Burns:** What's the point...? But I would also say I think that as much as we talk about Kubernetes empowering developers, I think Kubernetes actually also really empowers operators, even traditional machine operators, because the whole purpose of the technology is to provide this abstraction boundary between the developer and the machine. So just like I can deploy apps and not care what machine they land on, that makes a reliable app.

I can upgrade machines and know that I'm not gonna impact customers. If I'm an IT ops and I wanna roll a new kernel, I don't have to go talk to all my application owners and convince them, and try and say "Hey, please, could you reboot your app? We need to do this security migration..." - no, I just go through the cluster, one by one, do the upgrade, reboot the machine, do the upgrade, reboot the machine, and then I know that the Kubernetes infrastructure will move those end user applications around, so they won't even notice. They won't even know that I went into the software upgrade across my entire OS. That's a hugely empowering thing for a traditional IT developer.

I think that separation of concerns is actually one of its real strengths. We think of it as being developer-oriented technology, because at the end of the day it's a developer-oriented API, but the abstraction boundary and the isolation, the decoupling works in both directions. So I actually am not surprised at all that there are more traditional IT people here; if I were them, I would adopt this in a heartbeat, because it's gonna make my life dramatically easier.

**Adam Stacoviak:** Okay. Gabe, do you have anything on that?

**Gabe Monroy:** \[00:29:37.15\] Yeah, one of the big things that we're seeing from those traditional IT folks is the desire to lift and shift workloads into containers. I've been present for some pretty shocking -- the idea that you could go take a bunch of existing legacy Windows applications and in a few days get those things wrapped up in containers, moved over to an orchestrator and get all the benefits of, you know, the self-healing system, node failures, the workloads are gonna move around, the applications are much more resilient, you don't need to go back and decommission a bunch of old servers and hardware, maybe you throw a cloud move into the mix... I mean, that stuff is really enticing to traditional IT orgs, and these are the things that container orchestration makes possible... So I definitely agree with Brendan, there's a lot to like here.

I think we have to be conscious that container orchestration is sufficiently generalized that sort of modern cloud-native microservice development that we associate that with Kubernetes very closely, there's actually a lot of other uses for this stuff, IoT being another one. Lots of different things; machine learning... There's lots of different things that you can use this for. I think we're just scratching the surface of that.

**Brendan Burns:** Yeah, and I think that's definitely the case that I see people with... Maybe they're running a binary that they don't even know how to recompile, from an old version of Linux, and suddenly, with containers, they know that they can upgrade the kernel, but keep that whole thing working, and package up all the libraries and all the... They can effectively run Red Hat 4 binary on top of a modern Linux operating system. That's hugely compelling for a lot of IT operators.

**Adam Stacoviak:** So what do you say then when you said before about slowing down, in a press conference yesterday - neither of you were there, I don't believe; I didn't see you there at least - a fellow asked the question of LTS-ing Kubernetes, to the point where some IT can, like you had said, implement it, there's a new release, have some sort of schedule where this will be supported for a while, you can kind of depend on certain APIs, you can build upon certain things... Is there any conversations around that kind of slow-moving pace, or-- not slow to the point where you're not innovating and moving fast, but to the point where your release cycle can actually adopt some users?

**Brendan Burns:** I don't think that we've -- we haven't had the conversation about a formal LTS. We do back-port patches, important patches, not just to the previous release, but actually several releases back... So we do do some of the sort of more longer-term support things that you might consider, into the past releases. But that probably buys you a year, maybe... You know, conservatively, that would buy you a year before mostly the project would throw up its hands and say "Sorry, you should upgrade."

I do think we're gonna have to do that kind of stuff. I mean, I think maybe looking at the way that Ubuntu does long-term support, with a long-term support release, and then a bunch of smaller releases along the way that you can use if you want, but they're not the long-term support releases may be the kind of model that we need to move to.

I do think though that in the move to cloud one of the things that I think you're seeing is a move towards more auto-upgrading systems. One of the analogies that I draw is people used to update their browsers; now people don't update their browser, the browser just updates itself.

**Adam Stacoviak:** Yeah, I don't even think about that anymore.

**Brendan Burns:** Nobody even thinks about it, right? You couldn't even tell me -- I guarantee you can't even tell me the version of the browser you're running.

**Adam Stacoviak:** 75.

**Brendan Burns:** Yeah, like who knows?

**Adam Stacoviak:** That's how many versions there have been...

**Brendan Burns:** That's how much you pay attention to it, right?

**Adam Stacoviak:** Yeah...

**Brendan Burns:** So I think there's a degree to which if we're good about backward compatibility and we're good about making sure that what you did last year still works, people aren't gonna care as much about what version of it is, in an AKS world where we're delivering the Kubernetes API as a managed service. So I think it's a little bit of both. I think we're gonna have to do some of that, but I think also as people enter into this service, Kubernetes as a service world, maybe they're not as worried about that stuff.

**Adam Stacoviak:** Maybe let's talk about something you mentioned yesterday in your keynote which I thought was pretty interesting... It was this being able to scale to 100,000,000 developers. We'll link up to your keynote on video, but can you give like maybe a two-minute overview of what you meant by scaling to that? ...the scale at which GitHub is moving and open source is moving and what that means for...? Because we said earlier, one of the key components of successful Kubernetes cloud native is community, and that means more developers.

**Brendan Burns:** \[00:34:08.14\] For sure, and I think one of the reasons we've invested -- I mean, Gabe mentioned about third-party resources... I sort of worked on third-party resources before we even hit 1.0... Because it was clear even then -- I didn't try and merge it until after 1.0, but it was clear even then that extensibility and enabling people to build and integrate with Kubernetes without being in the core of Kubernetes was gonna be critical to our success. We were already seeing the strain points of the community, and we were -- I don't even know, probably at 100 contributors at that point, not the thousand plus that we have now.

So that's a big push - making sure that we can effectively continue to innovate and iterate on the ecosystem without having to change the core codebase as much, and that's a huge part of scaling. But I also think that we have to start considering that the people who we are trying to appeal to are not necessarily gonna be distributed systems experts, right?

I think up to this point we've basically assumed that you have some degree of experience with delivering reliable systems at scale, if you're gonna come play in the Kubernetes world. If we're gonna go forward from here, we have to not make that assumption, and maybe separate out... Maybe if you're in the core, you need to do that. But if you're building on top, you should be able to consume abstractions that make sense to you at the level that you wanna build at.

**Gabe Monroy:** Brendan and I talk a lot about this idea - from my PaaS heritage, it's easy for me to color it all in PaaS, but talking about this idea of verticalized pass. I think that part of getting to 100 million developers is gonna be crafting a set of experiences that are unique, that are targeted at different audiences. Some are gonna be GUI-based, some are gonna be CLI-based, some are gonna be editing code in an IDE, and others are gonna be... Who knows, right? But there is no one-size-fits-all answer to all the problems that we're gonna need to solve going forward, so I think approaching this thoughtfully, with an eye towards principled architecture of the different layers is what's gonna allow us to set up a really resilient foundation in order to build the type of experiences that frankly society is depending on us to build.

**Brendan Burns:** Yeah, for sure. And I think someone once said the most important thing in any project is knowing what you are not; it's not knowing what you are, it's knowing what you are not. And I think if you set those things up the right way and you resist the urge to try and become everything then you build the right layering and you build the right modularity. I think that's one of the guiding posts we try and live to.

**Adam Stacoviak:** Maybe in closing let's talk to those out there who've heard the term 'cloud native', they've heard the term Kubernetes, they've looked at orchestration, they've looked at containers, but they've never really taken that first step -- they've dabbled with containers, but they've never really taken the adoption to even cloud.

**Brendan Burns:** Sure.

**Adam Stacoviak:** What are some good resources that you all point people to often to kind of get those first steps to get that a-ha moment? Because both of you have a - not so much you, but Gabe, you have a first day that you touched Kubernetes, and you were like "This is amazing." So where do you send people to to kind of get that original a-ha moment with Kubernetes, and to say "This is what you should do."

**Gabe Monroy:** Well, there's a couple things... I think the first thing for me is the 12-factor - it's not directly related to Kubernetes, but I think it was a really important moment in the development of how you would build software in a way that is friendly for the cloud. I think reading through that - it doesn't take very long...

**Adam Stacoviak:** What is it called?

**Gabe Monroy:** \[00:37:51.01\] 12factor.net is the website, and it's actually pretty dated, but it's held up quite well over time, I'd say. And then the other -- I don't know if there's a research for this, Brendan; you might know... But the thing for me that really hit home with Kubernetes was the idea of declarative infrastructure that has control loops that reconcile desired state and current state... These self-healing systems, and how all of Kubernetes is basically a series of objects that are representing desired state, and then a series of controllers that are enforcing that desired state, and pushing the world towards that state over time.

It was the first project I'd ever seen that had that kind of architecture that deeply. I actually think that was part of the extensibility model, because really what you do with the extension model is you say "Well, here's a new type of resource, and I wanna run another controller that's gonna enforce that sort of state." And there was a level of elegance and simplicity to the whole model that -- it was just different than anything else that was out there. Everything else felt cumbersome, complex in comparison.

I think the only thing that was weird/awkward about Kubernetes was the networking model, but shockingly, it only took a few months for everyone to realize that the Kubernetes networking model was actually the right one, and then everyone started adopting this IP per container, IP per pod kind of model. Once that's sort of behind you, you're left with this core of Kubernetes... It's actually really quite beautiful and really quite elegant in my view.

**Adam Stacoviak:** One last one before we go... This podcast speaks to developers, so you've got people out there that are thinking "How can I get involved?" Not so much just using Kubernetes, or getting involved in CNCF, or the different places they can go to, or the different projects involved in CNCF... But what about contributors for open source? I hear there's a contributor ladder... I think its' CNCF Global, at the TOC level, but not so much at a Kubernetes level. What do you do to get new contributors? What's the onboarding ramp? How do you adopt new developers into the project?

**Brendan Burns:** I think it's a variety of things, one thing I would say is that the Slack channel is super active... And it's separated - we have a separate channel for users versus developers. Some people go and ask "How do I deploy apps?" questions on the users channel, but if you wanna go do coding, there's the developers channel. We try and mark a bunch of the GitHub issues with things like "Help Wanted." Some of that stuff is sometimes dated, and we don't probably do as great a job curating that as we could, but that's a good place to start.

I would also say though that we're reaching a place where there is so much in the ecosystem that often times a great way to get started is in one of the ecosystem projects. I've been doing a lot of work lately on client libraries in different languages - working on the Java client library, the .NET client library, the TypeScript client library... And that's nice, because it's an important part of the ecosystem, but it's a separate project from the main project, so it's an easier thing to wrap your head around, and maybe it's even in a language that you're familiar with, as opposed to Go, if you haven't had a chance to look at Go. So I think there's a variety of different places where you can find access points.

I would say with the main Kubernetes project, be persistent and patient. We really do want and value the contributions. We know that it's messier and harder in places than it probably ought to be, and in fact there's a SIG contributor experience - it's a special interest group for contributor experience - that's just kind of continuously trying to make it better. That's where things like the contributor ladder comes out of, and some of the messages that the bots chat back to you on your GitHub issues, and stuff like that. We definitely welcome people to come in and contribute, and figure out the place that works best for them.

**Adam Stacoviak:** Very cool. Anything else that I didn't ask that you guys are like, "Man, I wanna share this to this community listening to the show"? What didn't I ask you?

**Brendan Burns:** One thing that I'm kind of excited about that we announced at the conference is this thing called the Virtual Kubelet.

**Adam Stacoviak:** I've heard about this... Erik St. Martin is a friend of mine, he runs GoTime; he was part of the hack team that's been here for a week doing that, I think. I've got some of the back-story on it.

**Gabe Monroy:** \[00:42:05.08\] Yeah, Erik helped out quite a bit on that effort, actually. And what's cool about it to me is that it's really evidence of Kubernetes' staying power, because we didn't have this concept of a serverless container runtime like what we shipped with Azure Container Services back in July; it was the first major cloud provider to come out with anything like that. And we knew when we launched it that people were -- yes, they were gonna want to use it directly; containers in the cloud is pretty nice, easy...

Container Create turns out to be a nice experience for doing simple stuff. But we also knew folks were gonna wanna use the Kubernetes API, so we shipped a connector that basically bridged the two things; immediately, Hyper.sh, who had a similar product, they forked the connector (the connector-friendly fork), wrote their own runtime. Since then, Brendan and I were like, "Oh man, there's probably something we should do here", and there's actually a lot of meaty problems that we don't know how to solve yet. How do you attach volumes to a serverless container? How do you manage load balancers, scheduling affinities and things like that?

There are a lot of open questions, and I'm really pleased to see the reception to the Virtual Kubelet has been tremendous, and it looks like we're gonna have pretty much all the major clouds (and startups) who have these serverless container runtimes working together on this codebase that we're gonna be donating upstream to the Kubernetes ecosystem. I'm really excited to see that come to fruition.

**Brendan Burns:** Yeah, for sure. Over the next few years, I think one of the things we're definitely gonna move to is -- you know, if Kubernetes lets you not think about your machines, I think in many cases people don't even wanna have machines. So this move towards serverless containers and orchestration of serverless containers I think is the next really important part of what we're doing.

**Adam Stacoviak:** So listeners, I know we've just barely scratched the surface on this Virtual Kubelet, and I'm sure that in a future episode of GoTime Erik will go deep on what's going on there, so tune into a future GoTime episode. But for now, fells, thank you so much for your time, I appreciate it.

**Gabe Monroy:** Absolutely, thank you so much.

**Brendan Burns:** Thanks for having us.
