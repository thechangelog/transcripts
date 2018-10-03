**Adam Stacoviak:** So Jason, what is this service mesh, what is this Istio thing? Why is it important?

**Jason McGee:** Yeah, kind of a strange name, service mesh... We spend a lot of time arguing about what to call it...

**Adam Stacoviak:** It's kind of confusing if you don't know, right?

**Jason McGee:** Yeah, it is, absolutely. Let me maybe put it in a little bit of context. My personal background - I spent the first half of my career at IBM, building Java app servers (20 years ago, I guess). The goal of the app server was to build a platform that developers could use to build applications, and to kind of solve all the common problems that you encounter when you build particularly kind of network-facing applications.

What I think is happening today in the cloud is we're kind of reimagining that idea that platform idea in the era of cloud... And there's some pieces that make up that platform, and some of them we've already agreed to - containers, with Docker, is kind of the foundational technology that we think new apps will get built on top of, and we've all kind of agreed on containers as the way to package and run software.

The next layer that we all kind of agreed on was Kubernetes, and the problem Kubernetes was solving is "Alright, I don't have one container, I have many of them. How do I deploy them and control them and scale them and keep them running, and kind of solve all the lifecycle problems that exist when I'm running a bunch of containers?" We've all agreed on that as the kind of de facto technology to solve that problem.

Service mesh I think of as the third layer of this new platform that we're building... And the problem service mesh is trying to solve is "How do I actually control the interaction between different applications that I'm writing?" If containers let me write an application, in real life most interesting things are solved by having lots of pieces of applications talk to each other... So how do I actually see and understand how those different components talk to each other and have some control over that? At its heart, that's what service mesh is trying to do, is give us control over the interaction between apps.

**Adam Stacoviak:** So you were one of the founders of Istio, is that right? What's the story there? Several members, and you were involved -- obviously, you've been a veteran at IBM... What's IBM's role, and what's your role?

**Jason McGee:** Sure. Like many things in the industry today, there's quite a lot of collaboration in technology. I run the platform as a service team for IBM Cloud, and as part of my role, we look at new technologies that we wanna bring to market... And a couple of years ago we were thinking about this space - how do we help with microservices, how do we help developers build and manage microservice applications? We have all these different components working together... And we started building a piece of technology -- we actually open-sourced a piece of technology called Amalgamate, which was kind of our viewpoint on how to do programmable routing and control between different services within a cloud architecture...And we've put that out there a couple years ago.

About two years ago at KubeCon I was talking with some of my counterparts at Google and came to realize that we were solving similar problems and we kind of viewed the microservice management space in a similar way.

\[00:06:51.17\] We got together, had some drinks and chatted about the space, and decided "You know, we actually see the world the same way... Maybe we should join forces and combine some of the work that we're doing."

At the time, Google was really focused more on security and telemetry, or kind of how do you get visibility of the traffic between different services... So we decided to join forces, we combined our technologies together and we created the Istio project. We kind of worked on it, you know, not in secret, but largely just the two of us, along with the guys at Lyft, who contributed one of the key technology components to Istio, until about May of last year, when we launched the project.

So it was really the coming together of like minds around how to solve one of the emerging problems in the cloud-native space.

**Adam Stacoviak:** Maybe break down Istio for us... I know it's Connect, Secure, Control and Observe, but break down each of those and why those are important to, say, service mesh and how it applies.

**Jason McGee:** Yeah, so there's kind of three key features, if you will, or capabilities that Istio tries to provide... And remember, it's always in the context of kind of multiple services talking to each other.

The first is traffic management - providing a way to programmably control how different services talk to each other. I'll give you a really simple example - how do you roll out a new version of an application? When you roll out a new version of an application, you might want to test that new version with 5% of your traffic, to see if everything's working okay... Or you might want to have a subset of your users try the new version. Maybe everyone on the East Coast is gonna try the new version, while everyone else in the world stays on the original version.

You need the ability to kind of control the roll-out, so one of the goals of Istio is to give you that kind of programmability of routing, so that you can decide who calls who, what versions get routed to, how the traffic gets split... And that's something that everyone has to do on some levels, but everyone has kind of solved in their own ways. Kubernetes doesn't solve that problem directly... Lots of people have built custom solutions to do that. Istio tries to kind of bake that into the service mesh. So that was one key - advanced traffic management for dev ops, for resiliency testing and things like that.

The second key thing Istio is trying to do is security... And this is actually turning out to be a really interesting space with Istio; we could probably dive deeper here, but historically, the way security was often implemented was down at the network. You would define firewalls and network rules and segment your networks to control who could talk to who, and which services were visible to each other.

That model doesn't work very well in the era of public cloud and in the era of very distributed architectures, where maybe part of your app is running on IBM Cloud, and a part is running in a data center, and parts are running on Amazon... You don't have one network that spans all of that, so with Istio what we tried to do is say "Can we move all of that security up closer to the application? ..so it's not defined in terms of the network, but is defined in terms of the application itself", and automatically set up secure connections between services, and allow you to specify policies about who can talk to who, but independent of the network. That's turning out to be incredibly powerful for a lot of the early users of Istio, because it gives them a different way to secure their applications.

\[00:10:34.21\] Then the final thing that Istio was after was observability or telemetry - how do you actually see what's going on? One of my favorite case studies in the microservices space was some material I read around the Gilt Groupe (online shopping) site. They're not a customer of mine, they're not an IBM Cloud customer, they're just people who have talked about their own journey to transform to a microservices architecture... And the kind of tidbit that always stood out to me with them is, you know, their original architecture was a very classical kind of web and database application.

You know, maybe there were ten instances running in a cluster to handle the load, a single monolithic app... And over a period of years, they refactored that into a bunch of microservices, and when they got done, they had like -- I forget the exact number... It was like 300 or 400 microservices; each of those microservices, you have to imagine, there's probably at least 3 instances running, so you go from running like 10 things to running 1,200 things, right? So you have this much more complex environment to manage... How the heck do you actually see what's going on? If there's a performance problem, where does it exist, where are the bottlenecks?

You need a totally different way to kind of observe behavior in a much more complex network of services like that... So part of the goal of Istio was to provide ways to automatically gather all of that data about who's talking to who and how it's performing, and tracing, and log collection, and everything, in a transparent way, and to make it so every developer didn't have to figure out how to solve that problem themselves.

**Adam Stacoviak:** So like a single interface, essentially... It's a single end point for everyone to check into, essentially, across multiple networks, multiple clouds... That kind of thing.

**Jason McGee:** Right, and one of the really (in some sense) magical things that Istio does is it manages to do all of this without really having an API that you have to write to as an engineer, as a developer. It does this through a technique of using what's called a sidecar to capture all of the traffic coming in and out of every service, and then give us a control point where we can redirect that traffic or secure that traffic, or collect data about that traffic, without changing anything about how you write your app.

Netflix Open Source is another kind of popular framework that people have used to build microservice apps... Obviously, written by the guys at Netflix for their own purposes. And one of the characteristics of Netflix OSS was it was written in Java originally, it has APIs, and you change how you write your code to take advantage of it. With Istio, you don't have that. You can just use normal TCP connections, normal HTTP connections, and the mesh kind of captures the traffic for you and transparently gives you all these features.

That means it can be language-neutral, it can run in any environment, and as a developer, you don't really have to do anything; in fact, you can kind of just turn Istio on on your app without changing anything, and turn it off later if you don't want it... Which is a pretty nice characteristic.

**Jerod Santo:** Yeah, that's super awesome. As a developer, I wanna do as little as possible and gain as much benefit as possible, so... \[laughter\] That's quite a selling point.

**Jason McGee:** Exactly. Developers are lazy, right?

**Jerod Santo:** Yeah, absolutely... That's like one of our core competencies. So how does it plug in though? You said sidecar, or sideload... Where does it actually plugin? We're talking like a switching layer, like routing? How does it just capture all the traffic and redirects stuff?

**Jason McGee:** Right, so the way to think about Istio is there's kind of two big pieces - there's a control plane and a data plane. The control plane is responsible for collecting policies, and giving you a way to manage the system, and the data plane actually handles all your traffic.

In the data plane there is a key component called Envoy. Envoy is another open source project; it was originally created by the guys at Lyft, and Lyft uses it to manage all their service interactions and their production systems.

Envoy is basically a small C++ implemented layer 4-7 proxy or router. It handles all the traffic; it can do load balancing, it can do circuit-breaking, it knows about all the different protocols, and essentially what Istio does is run an instance of Envoy next to every single instance of every service in your applications. That's what it's called a sidecar - it kind of sits right next to your app.

\[00:15:18.09\] So if you wrote an app in Node.js, right next to that app would be an instance of Envoy... And Envoy captures all the traffic. Now, when you run this on top of something like Kubernetes, we can do all that for you. We can automatically inject Envoy into your application without you doing anything. We can set up Kubernetes so every time you run your containers, we automatically insert this extra container that has Envoy in it, and then we redirect all the networking through things like iptables, to say "All inbound/outbound traffic for this container goes through this Envoy thing." So it can become super-transparent. It's awesome in Kubernetes, because literally, you can just turn it on and off like a switch on individual namespaces or applications.

If you run Istio somewhere else, like in a VM, you might have to do a little bit of configuration to configure essentially iptables, normally, in your host operating system to redirect the traffic... But that's kind of a one-time thing you do to force the traffic to flow through Envoy, both directions.

Once that's there, then Envoy can kind of do all this magic, and the goal of the control plane, the Istio control plane, is to program all of those Envoys. If you imagine, the architecture I just called out, if you mapped to Gilt's architecture, which I have not data to say they're actually using Istio, but just to use their numbers - if they have 1,200 things, there'd be 1,200 Envoys running.

So then the question becomes "How the heck do you program and manage 1,200 of these things?" and that's what Istio's control plane does - it does all that for you... So you can define some simple policies, like "When application A talks to application B, use version 2" - that's a policy you configure, and we translate that into Envoy configuration and push it down into all of the sidecars for you... So you can kind of ignore them. You just manage them through Istio, we manage their configuration, and you kind of transparently get all of this behavior.

So it's a pretty cool approach, that makes it very easy to manage and makes it very language-neutral... So it doesn't matter how you build your app, you can use any programming language you want.

**Jerod Santo:** One question I always have with these kinds of things - it sounds like with Istio by the time you need it, you probably already know that you need it, like you're feeling that pain... But with microservices more generally, the question always becomes "When to microservice?" or "At what size?", or if ever... And there's a lot of opinions on that.

Aaron Patterson, who's kind of a Ruby core developer, had a great tweet a while back about microservices where it says "It's how you turn a function call into a distributed systems problem..." \[laughter\] So there's a lot of people that I think reach for them earlier than they ought to, and then they find that... I'm just curious about your take on that, because you talk about companies -- our audience goes from all sizes; we have single-developer shops, all the way up to people working in the Fortune 100's, to the tech giants... So we kind of have people in all different areas; how do you know, in your opinion, when to microservice and when Istio is gonna be something that you're gonna be interested in?

**Jason McGee:** Yeah, it's actually a tough question, because it depends on technology factors and a lot of people dynamics. Let's take the microservice part of it first, and then the Istio part second.

\[00:18:46.07\] For me, microservices is fundamentally about people and teams, and like how you organize a team of people and how you organize an application to have independent parts... And how big each microservice is or how many of them you have varies a lot. I don't actually think there's some magical size of code or something that makes it a microservice. I think it really comes down to microservices are useful if you have a high rate of change... If you are working on something that's changing a lot, and you need to be able to rapidly deliver, microservices is a good approach.

In fact, I always think that microservices makes this explicit tradeoff - you're trading off more operational complexity in exchange for faster velocity.

**Jerod Santo:** That's a good way to look at it, yeah.

**Jason McGee:** Yeah, you get faster velocity because you have -- basically, people don't have to talk to each other as much, in my experience...

**Jerod Santo:** You've decoupled your development...

**Jason McGee:** Yeah, and decoupling really is probably less about technology and more about "This group of 12 people can kind of act with some autonomy - they can make their own decisions, they can deploy when they need to, they can make changes without having to coordinate with everybody else."

And if you're changing stuff a lot, that's super-valuable... So you tend to see microservices in environments where there's a high rate of change, and if you look at (let's say) traditional or existing applications, a lot of people have debates about "Do I go refactor some existing app into a bunch of microservices?", and I think again it comes down to "Is that app changing?" and "What parts of that app are changing?" There might be pieces of an application that make sense to kind of refactor into a set of independent services, because it allows you to change those parts quickly... And there's other parts of the app that you haven't changed in ten years, and there's no inherent advantage of moving it to a microservices.

So I think you have to just get down to how do you organize and where are the places where you need change. I mean, I look at my own team -- one of my other jobs on my team is I run the Kubernetes service for IBM cloud... It's called IBM Cloud Kubernetes Service, and it's a managed Kube platform; that platform itself is built with more than 100 people, it has dozens of microservices... We built and deployed the whole thing in five months, we make 100 updates a day... None of that is possible without kind of a microservice architecture underneath you to give you the ability to decouple all those changes.

Now, if you go give a look at Istio, the question then becomes "Do I not need Istio until I have a bunch of microservices?"

**Jerod Santo:** Yeah...

**Jason McGee:** ...until I get to some scale. And I don't think that's actually true; I mean, I understand completely why people kind of go there, because even the way I described Istio sounds more valuable when you have lots of things... But the reality is observability, for example, or version routing are useful even when you only have a few things... Being able to collect data about what's going on, and being able to control updates is really valuable.

One of the things we've tried to do in the Istio project is make Istio very incremental, meaning you can adopt it in pieces and you can adopt it incrementally on portions of an application. So it's not like a big all or nothing switch where one day you just decide "We're gonna Istio-enable the whole world and turn it on." You can bring Istio in and just use it for monitoring, to see what's going on, or you can bring it in and just use it for version routing, or something like that, and then kind of grow with it as you go.

The sidecar thing actually helps a lot with that, because you didn't have to change your app to do it... So you literally can decide one day to turn on Istio on one of your services and we'll inject the sidecars and it'll start doing new things and you didn't have to change anything about your app.

**Jerod Santo:** \[00:22:53.11\] So it sounds like even in the small, if you have microservices, there's value there... But know that you don't necessarily have to adopt all that Istio has to offer. I think then the deciding factor would still become the cost of operational complexity, or moving parts, versus the value provided by observability or whatever specific features that you're looking for... And then is there an operationally cheaper way of accomplishing similar means? I guess that would probably be the cost-benefit analysis there when you have a small amount.

**Jason McGee:** Yeah, I think that's a good way to look at it. I think that's actually one of the real challenges, if you will, in the container ecosystem today... Have you guys ever seen the -- the Cloud Native Computing Foundation maintains this landscape chart...

**Jerod Santo:** No...

**Adam Stacoviak:** It's huge.

**Jason McGee:** It's huge. This chart of basically like all of the technologies in the cloud-native space, and all the vendors and startups and everybody who has solutions in each category... And it's like the most densely packed collections I've ever seen. \[laughter\]

**Adam Stacoviak:** It's a good slide at KubeCon, that's for sure...

**Jerod Santo:** It's getting crazy out there, that's for sure...

**Jason McGee:** Yeah, yeah. And on one hand, that's awesome; it means there's just a ton of really amazing innovative work going on... But as the average developer or the average company assembling all those pieces, it's hard... Maybe too hard, in some cases, to warrant. So you do kind of have to make this judgment call, and like what extra stuff do you want to bring into your environment... And I think that holds true with Istio today.

Today, if you wanna use Istio, you have to make a decision you wanna use Istio, and you have to install Istio into your environment, into Kubernetes, and you have to do some work to manage it and update it, and things like that... So there's a cost to using it, and you have to kind of weigh off "Does the cost warrant it for whatever I'm getting out of it right now?"

I think what will happen with Istio in particular is there's just a tremendous amount of excitement and energy behind Istio, and I really do believe -- it's hard to predict the future, but Istio has all the hallmarks of a key technology that will become kind of a de facto part of the environment that we all work with, and therefore it'll start to get built in.

In IBM's case, our intention is to build Istio into our Kubernetes environment... So it will just be there. If you use Kube to run workloads, the Istio pieces will just be there all the time, and you can just decide to turn them on or turn them off... And therefore, the kind of overhead of just choosing to use it goes down.

I think that's what's gonna happen in the industry in general; you're starting to see people adopt platforms. They're either using a public cloud platform, and that public cloud combines a bunch of the capabilities in that crazy picture, with all the icons, or they're using a software distribution that kind of combines some of those pieces together... So you kind of defer that work to the platform provider to do the integration for you.

**Break:** \[00:26:17.02\]

**Jerod Santo:** Jason, we are on the cncf/landscape GitHub repo here, where some of these images that you referenced earlier are sitting... So listeners, if you'd like to look at these images, they are informative and a bit overwhelming; definitely check out our show notes, they're right there for you... Or if you are at your computer, just got to GitHub.com/cncf/landscape and there you have it. There's a trail map and then there's the current version of the landscape, which is what you're talking about, which has all of the different icons or avatars there.

And on the landscape specifically, we have service mesh and discovery at step five -- excuse me, on the roadmap, which is kind of like a step-by-step thing of how you accomplish this, or... I don't know what's at the end; success is at the end of the road... And step five is "Pick a service mesh and discovery", or something like that.

We see Envoy, which you mentioned, we see CoreDNS and Linkerd. Istio is not there... If we look at the landscape, Istio is there, but there's like 16 other icons next to service management, so it seems like at least -- I don't know how fresh these are, but at the time of creation of these docs, Istio was one of many options; you're saying that it will (hopefully, in your eyes) become the de facto for this particular section of the cloud...

Maybe speak to the fact that it's not in step five yet... Of course, on the Cloud Native Computing Foundation stuff; this is not IBM stuff... But just tell us about how it fits in there and how it's gonna beat out these 16 others.

**Jason McGee:** Sure. Let me help explain the charts maybe a little bit. So the trail map and the big boxes on the landscape chart are the official CNCF projects. They're the projects that are kind of managed by the Cloud Native Computing Foundation as open source projects.

The landscape has everything that's going on in this space, so you see projects, but you also see technologies and companies that aren't necessarily part of CNCF. Envoy as an independent project is officially a project under CNCF now, so the Lyft guys -- Matt Klein at Lyft donated Envoy to CNCF last year; I forget exactly when that happened, but in the last 6 or 8 months.

Istio is not there yet, so Istio is not currently an official project of CNCF. That's in progress, so that should happen over the coming months. We really wanted to get Istio to kind of a 1.0 level, get the core architecture set before we made that step... So that's happened now, in the last couple of weeks, and we feel really good about where we are.

The journey to 1.0, kind of as I alluded to, is a two-year journey to bring all these technologies together. Now the kind of core design is set, and if you actually looked at the evolution of Istio, there's been some pretty substantial changes in the conceptual model, in the APIs of the control plane and kind of how it works over the last year... So we felt "Yeah, let's get this thing in a good spot and then we'll bring it to CNCF." So it'll come.

CNCF is an interesting foundation, because it's not trying to pick winners and losers... So you will often see what are essentially competing technologies live within the umbrella of CNCF. In the container world we have both containerd and Rkt. In service mesh space we have Linkerd, and there's a related project called Conduit, which is really an alternative to Istio that exists underneath CNCF. That's cool, that's fine... This is a community of people kind of building out the best technologies to solve these problems, so Istio will slot in there in the coming months.

**Adam Stacoviak:** \[00:31:08.23\] I thought that Conduit was folded into Linkerd, at least version 2.0.

**Jason McGee:** Yeah, that might be true. It's hard to...

**Adam Stacoviak:** It's hard to keep up, there you go...

**Jason McGee:** ...keep track of all these things. \[laughter\]

**Adam Stacoviak:** Even for Jason.

**Jason McGee:** Even for me. I spend every day on this and I'm like, "What the heck...?"

**Jerod Santo:** Right. There's this great Mitch Hedberg line... He's one of my favorite comedians, and one of the things he says -- he said "I'm sick of chasing my dreams. I'm just gonna ask them where they're going and catch up with them later." And I kind of feel like -- I wonder when is this landscape going to shake out a little bit, and all of the... There's tons of innovation, so it's a gift and a curse, right? You've got all this innovation, you have new projects, you have excitement... It's Cambrian explosion kind of thing, but any space where you need a roadmap with like ten steps, and then there's like "Choose your own adventures along the way" - it's really kind of like... They actually have dragons on their roadmap (or trail map), which is kind of fitting, because it's kind of like "There'll be dragons there..."

I'm just curious, when will things start to shake out and settle down a little bit, to where it's like clearly -- like you said, clearly it's Docker. Clearly, it's pretty much Kubernetes for orchestration. When do you think the rest of this will be really kind of shaken out and we can just catch up with it later?

**Jason McGee:** Yeah, I guess if I really knew the answer to that, I could make some money... \[laughter\]

**Jerod Santo:** And if you told me, I could make some money, too.

**Adam Stacoviak:** Fortune telling.

**Jason McGee:** That's right. I could create a whole business around that. Look, I mean... I think it will settle out in layers. There's pieces we agree on, and there's always kind of the hairy edge that everyone's still experimenting and trying to figure out what to do...

I do think the container layer is essentially settled with Containerd. I think orchestration is settled with Kubernetes... Service mesh you can't say is settled, because we're still early in the adoption curve, but all the indicators, from who's working on what projects, where different companies are invested, the level of excitement... I really feel confident that Istio will take its place as that third layer.

You know, higher up the stack of stuff that's here in CNCF - yeah, it may take a while, to be honest... We're at the beginning still of what I think is a pretty formative foundational change in how software is built... Not only cloud, but containerization. If you think about environments like Kubernetes and Istio, they're incredibly metadata rich, meaning they give you a ton of information about how software is executing and who's talking to who, and you can do some really interesting things. You can take something like Istio and watch all the traffic flowing through it and automatically detect who you're talking to, or what protocols are being used, and apply security in new ways... You can take all the data and apply machine learning to it and make better decisions about resource management, routings...

All of these companies are exploding because we have this level of access and control over the environment that just wasn't possible before... So I think we'll see that diversity for a long time. I think for the next -- it's hard for me personally to look much more than three or four years out in this space, but certainly over that time period I think the core diversity will still be there. I think the bottom layers are settling out...

\[00:34:37.07\] I think what also tends to happen is you look at -- there's different personalities of how people adopt technology, and for the bulk of the market, for most companies - certainly here at IBM I spend a lot of my time talking about larger enterprise customers... They're gonna look for a partner that helps them assemble these pieces... And public cloud is one form of that, where we -- either it's IBM, or Azure, or Microsoft, Google, we're all kind of delivering a cross-section of this whole picture as a service on our clouds... So that's one way to deal with the diversity - you have a platform provider who does it for you.

I think the same thing happens on the kind of software distribution side. Most people \[unintelligible 00:35:24.14\] most people will pick a partner who can pull some of these pieces together for them.

**Adam Stacoviak:** One of our questions in the list here is "Why is service mesh suddenly so interesting?" and it seems like maybe because of this roadmap now that question seems to be answered to some degree, because like you said, Docker is the container, so that's step one. Step two is CI/CD; those are for the most part -- there's different platforms for it, but if you're doing a public cloud, you have your own ways of doing that. And you've got orchestration - that's Kubernetes, Helm; those are involved there. Prometheus is a graduated project, so that's a clear winner...

And then five is the next step, which is Envoy, CoreDNS, Linkerd, and then obviously Istio here... So it seems like, as you mentioned, the layers - these are beginning to be solved; that's just the next step, obviously, to pick a winner... And I'd assume that you pick a winner by integration. You mentioned that Google's involved in this, IBM is involved in this obviously, Azure has their own thing, something called -- what is it called again? Service Fabric mesh, so one more level of obscurity in there; now it's Fabric, too \[unintelligible 00:36:33.14\]

**Jerod Santo:** Is that a competing thing, Jason, or is it just by name? Because I know sometimes Microsoft and names don't necessarily jive.

**Adam Stacoviak:** Yeah.

**Jason McGee:** Yeah, I don't know actually how directly aligned that is. They've been doing a lot of stuff, so...

**Jerod Santo:** Okay.

**Adam Stacoviak:** What I see happening here thought is that at each level, as we start to pick away the layers of cloud-native, it's essentially the agreeability; we all agree that Kubernetes wins, we all agree that Docker wins, we all agree that Prometheus wins... So the next might be \[unintelligible 00:37:00.17\] choose, and that's the winner. Is that fair to say, Jason?

**Jason McGee:** I do think it's fair, and I certainly think that public clouds have been a big influence on who the winners are... You know, not always. Watching Kubernetes kind of become the de facto is quite interesting. It seems very obvious sitting here right now that Kube is the winner; if you went back in time 12 months or maybe 15 months it wasn't as obvious, right? And there were some big players who hadn't made that choice yet. Amazon hadn't made that choice, Docker hadn't made that choice yet... But there was so much momentum around the developer community around these technologies that eventually everybody had to acknowledge they needed to support it, they all put their weight behind it, and that kind of takes the air out of the room on other stuff.

**Adam Stacoviak:** Tell me if you remember this term, Jerod, and Jason, too... DC/OS. Data center operating system.

**Jason McGee:** I do.

**Jerod Santo:** Yeah, Mesosphere, right?

**Adam Stacoviak:** I'm going back a couple years in our history -- in 2015 we talked about Mesos and Mesosphere, and this kind of goes back to what Jason is talking about.

**Jason McGee:** Yeah, I mean... Yeah, they had a moment there where DC/OS could have become what Kubernetes is now. That didn't happen for a variety of reasons, and now all of that energy has moved to Kube.

Istio is interesting too, I think... I always try to look at like -- look, I've been in IT for... I'm not that old, but I've been in IT for a long time, and to some level it's the same problem...

**Adam Stacoviak:** How long have you been in IT? Come on!

**Jerod Santo:** Yeah, spill it.

**Jason McGee:** 22 years(ish), 23 years. You know, at some level it's the same problems, right?

**Jerod Santo:** Yes.

**Jason McGee:** \[00:38:46.25\] We're not solving -- maybe with the exception of machine learning and AI, to a large extent we're not solving fundamentally different problems; we're just solving them in better, more efficient ways... So you've gotta look at a technology like Istio and go like "Why now?" Why was this approach possible now? And I look at it and I go, okay, to me there's like two factors. One is the adoption of new approaches like microservices that's generating a need. We now have these very distributed systems that are made up of lots and lots of components, so you need something like an Istio to help you manage that.

And then the second component is the approach... Like, "Let's run 1,200 independent proxies to route all the traffic" would have been a ludicrous thing to do five years ago if that meant "Do all that yourself", like install them all yourself, configure them all yourself... So the fact that we all agreed on containers and Kubernetes and the capabilities that that base platform \[unintelligible 00:39:46.25\] made it feasible, maybe combine that with public cloud, which kind of brings as a service an infrastructure into the picture, it makes it feasible to run an architecture like that. So you have a need, and you have a technology foundation that we've built up that makes it possible to take that approach. Istio kind of falls into that gap in a really nice way.

It's funny -- I haven't looked at the numbers in six or seven months, but when we've launched last year, within a few months of launching the project last year we were watching the open source stats on project adoption, and it was tracking ahead of where Kubernetes was at the same point in its lifecycle... So like four months in of Kube versus four months in of Istio. Istio was actually tracking higher than Kube, and I think that's a sign to me -- not that Istio is more popular than Kube, but that Istio is building on top of the momentum.

It's like when the iPad came out. The iPad outsold the original iPhone. Well, that only happened because we all had iPhones already, so we understood the model, and you could see that added value... And I think that's what's happening at Istio, too.

**Adam Stacoviak:** It's interesting too that Docker sparked the conversation of what it obviously did, and then when Kubernetes won in this landscape, it seems like they were the keys to enable the next level... Like you mentioned, you wouldn't wanna do 1,200 proxies by hand, you'd want something to automate it for you, because otherwise you're just silly. It's silly.

**Jason McGee:** Yeah, exactly. It's interesting how all of these layers kind of build on each other and enable the next round. And even if you look at Istio, how it's built internally, it really is built very deeply on top of Kubernetes... Not just from the standpoint of how sidecars work and everything, but the actual implementation of Istio's control plane itself extends Kubernetes' data model, extends the Kubernetes API server...

I think on some level that's a little bit the untold story of Kubernetes - most users think of it as a container orchestration platform for running their apps, but Kubernetes is also becoming kind of the de facto control plane implementation, and you see lots of projects who are extending Kubernetes with new kinds of resources... So instead of having just pods and deployments, which are kind of Kubernetes concepts, you see builds, and in Istio you see virtual services and gateways... But those are all built into the Kubernetes API server.

It's really interesting to watch how as we introduce these new technologies, you're able to build on the momentum of the layer below in a pretty interesting way... Whereas in the past we would have had to build all that infrastructure out again, and you'd solve all the same problems, like "How do we protect the Istio APIs? How do you control access? How do you run it and scale it?", but all that is already solved, so we're just leveraging it.

**Break:** \[00:42:56.06\]

**Jerod Santo:** Jason, before I put this landscape picture away - because I still have it pulled up and I'm still looking at it... One thing when you see all these icons and businesses, and you see all these open source projects, it's interesting because it is kind of like "Here is some CNCF stuff, here's a company, here's an open source project...", and besides the sheer number of players involved, the other thing that strikes me, specifically in the cloud-native area of open source, is you have a bunch of for-profit (really) competitors in business collaborating on open source projects, and Istio is no exception to that...

Like you said, IBM, Google, Lyft, Red Hat. Surely, if you look at the full contributors list, it's probably people from many companies, so... Tell us about that milieu, that relationship where you're basically -- I don't wanna say "sleeping with the enemy", because that's probably too harsh a term, but like... You're collaborating with people who -- I mean, IBM Cloud is a direct competitor with AWS, with Google Cloud, with these things. What's that like?

**Jason McGee:** Yeah, it's interesting, it's full of conflict sometimes... But it's also just how the industry works, and it's been getting more and more like that over the years. I started this show talking about my 20-year-old app server experiences, and back then we collaborated on like specification documents, and we all agreed on some spec, and then we went off in our corners and tried to create the best implementation of that. That was the old way to collaborate.

For a long time now, the way we collaborate is we create open source projects, then maybe you extend on top with additional capability, or you differentiate on quality of service, or integration, or how you deliver it, user experience... So I think on one hand it's like -- maybe I'm so used to it that it doesn't even phase me anymore, because you're always having this conversation in your head about, for any problem space, what's the stuff that really should be open, collaborative technology that we all agree on together...

Because the one defining behavior of both developers and companies today is for the most part nobody wants to build a tie to some proprietary technology. That's always been true on some levels, but it is exceptionally strong today. You always have to have this debate about like, when you're solving a problem, what should I do in the open with others and what should I productize?

What I actually think is really different right now is the VC -- the availability of venture capital is frankly so easy right now that you also get this just tremendous explosion of independent companies, small companies who are trying to build a business.... Istio is a great example of that. When we started this two years ago it was just the three of us, Google, IBM and Lyft, and now I think there's like 4 to 6 VC-funded startups in the Valley just around Istio.

**Jerod Santo:** Competing with Istio? Or building on top of Istio?

**Jason McGee:** Building products around Istio by contributing to the project, and then building a product around Istio.

**Jerod Santo:** So what would be a product? Don't name it -- you don't have to say "Here's one, for example...", but what would be a business model or a product that would say "It's Istio plus our own stuff, so we're gonna contribute back"? What does that look like?

**Jason McGee:** Yeah, so an example of what it might look like - the simplistic business model is you're a distributer, so you provide a supported distribution of the code, that can install and run and be supported by you... You know, a company isn't -- they have a throat to choke when something goes wrong...

**Jerod Santo:** There's not much value-add there...

**Jason McGee:** There's not much value-add there; the only company that seems to have made that model really work for them is Red Hat, over the years...

**Jerod Santo:** Yeah.

**Jason McGee:** \[00:48:04.06\] More interesting, I think if you look at Istio -- the way I think about Istio is Istio is fundamentally building blocks, kind of low-level primitive controls that you can use to do these fancy things we've been talking about. So there's a tremendous opportunity to build UI and capability around those controls.

You could build a CI/CD system that automatically used Istio to do version rollouts, or Canary testing, or rollbacks by kind of controlling the flow of traffic.

One of the things we pioneered at IBM and Istio is a set of resiliency testing features. I'll get a little bit \[unintelligible 00:48:45.01\] for a second, but if you think about most distributed systems, where services are calling each other over the network, one common technique is everyone has timeouts; you make a call, you wait for some amount of time before you give up and assume that the other guy is never gonna come back to you. In a distributed system one of the common problems is everyone independently decided how long they would wait... So A calls B and B calls C, and the guy in the middle is not willing to wait as long as he should for the answer, so you get failures that aren't really failures... And you can spend a lot of time, especially when things go bad, like the network slows down, or something - all of a sudden, things all fall apart because of all these incorrect timeouts.

Well, in Istio you can actually artificially introduce delays between any two services, and simulate what would happen in the event of the network slowing down.

You can imagine -- and we actually did some research in IBM exploring this exact problem... You could actually write a tool that took a network of microservices and went through and programmatically changed all the delays and measured the results of the system and calculated for you how to attune the system so it behaves properly in the event of failures; it sets all the timeouts automatically.

So that's not Istio itself. Istio is just giving you the knobs to turn... But you could build a product on top that was like a testing tool, or a performance tuning tools that uses those knobs to actually do some higher-level things.

So there's tons of opportunity like that across security in all kinds of dimensions of Istio, where you could imagine building product that took those controls and actually solved some end problem that people have.

So that's what you're seeing in the VC community, and frankly, that's what you're seeing in companies like IBM and others that are building Istio onto their products, and figuring how to take these new tools that we have and solve some high-value problems for people.

**Jerod Santo:** What are some heuristics that you use inside of IBM to make these decisions, like where you draw those lines between "This is an Istio open source core contribution", versus "This is a value-add that's proprietary to IBM and we're gonna sell it", versus "This is a service", or whatever... I'm sure there's probably hundreds of those a week, some bigger than others, but do you have guidelines, or is it just your own personal gut, like "This is gonna go in open source and this is not"?

**Jason McGee:** Yeah, it's a blend of guidelines and gut feel for sure, and some of these things you don't know the answer to until you make some guesses... And you adapt. Sometimes it's better just to optimize for being wrong and changing, instead of trying to get it right at the beginning... But one of the kind of core measurements I use is anything that's gonna touch the application itself. Of course, APIs are the obvious example, that you would program to in your code... But also any files or artifacts that you would put into your application and into your deployment pipeline.

Things that actually touch the app should be part of an open community. That's the kind of core contract you're trying to create for people - whatever you're writing could run somewhere else, or could run on another provider... So I use that a lot. If it looks like to solve this problem I need an API, then either that API needs to be in open source, or I need to find a different way to do it, so that the application can become portable \[unintelligible 00:52:10.11\]

\[00:52:14.07\] There's others, of course... You can do the feature chasing game - if you add a feature that nobody else has, that's possible; that's a tough game. I personally think that's a really hard game. If you create a feature that's an add-on on top of an open source project, one of two things usually happens - it's either not that useful of a feature, so nobody cares and nobody copies you... So you have this unique feature, but it's not very high-value. Or it's really valuable and useful, and eventually it will just show up in the open source project, whether you want it to or not. Somebody will go "Oh yeah, that's a great idea" and they will add it into the open source project.

So you wind up having like a window of time, where maybe you're ahead... That's a hard game; sometimes that's an interesting game to play, but it's a lot better, especially in the cloud world, to differentiate on 1) being the thought leader and defining these projects... You know, if you look at Istio, lots of people will have Istio; at the end of the day, IBM and Google are the kind of key thought leaders behind what's going on in that project and will have a lot of influence over where we think it evolves to, so you can lead through leadership in open communities... And then some of that comes down to "How do you deliver?" Do you deliver it in public cloud, do you deliver it as a service, do you integrate it with everything else you're doing so it just becomes super-easy to use? ...so you're not making a decision on a single piece of technology, you're making a decision on this full platform that you wanna go use, right?

**Jerod Santo:** It seems like a very complex game of chess.

**Jason McGee:** The old best of breed versus best in class kind of decision... It is complicated, I agree with you.

**Jerod Santo:** Which makes it fun and interesting, I'm sure, to participate in... Not on the side of what goes into the open source, but on the other side of what doesn't get to, or what directions are wrong for the projects...? So let's just hypothetically say Google has a vested interest in Istio moving, as a project, in a specific direction that plays to Google's core competency or their strategic advantage in business. Who makes the calls and how are they made on what stuff goes in in the case that IBM is like "Neah, we don't really think that should be happening..." Well, now what happens?

**Jason McGee:** Oh yeah, so what you're talking about is basically how does open source project governance work...

**Jerod Santo:** In this case, yes.

**Jason McGee:** In this case -- so every project has some governance structures. Google has been a great partner with us on this project. We have it set up where we have essentially an executive steering committee and a technical steering committee, which have representation from across the community, from all the major vendors involved, from \[unintelligible 00:55:01.23\] positions from the community itself, and those committees are basically there for exactly the purpose you talked about, which is "How do we make sure we're making project decisions in the interest of all the parties involved?" and not decisions that only benefit one party. It's a sign of health of an open source project if it has a good governance structure.

It's funny, 20-30 years ago IBM was maybe the pinnacle example of proprietary, but over the last quarter century we've been doing open source deeply in our DNA for a long time, and one of the things that often happens behind the scenes at IBM is when we join open source projects we do a lot of work to try to make sure there's the right governance structure in place for that project to allow these kinds of decisions to be made in the right way...

\[00:55:55.03\] And if you look at the container space, for example, IBM and Google and others worked together to create the Open Container Initiative, and to create CNCF, and form those projects and foundations explicitly to make sure that if you looked at container tech -- you know, at first that was an open source project, but it was all run by Docker, and Docker has been a great partner, but we all knew that if this was gonna play the role we thought it was gonna play as the kind of foundation for software for the next 20 years, it needed to run in a project that had the right open governance structure, so we created OCI together, and we created the containerd project, and we kind of set up a structure that allowed those decisions to be made more fairly.

**Adam Stacoviak:** I think what's interesting though when you mention governance, and maybe why Jerod asked that question is because 1) it's not clear by going to the Istio website... You know, like "Here's how this project is governed." For one, to be an invitation to say hey, I know that the thought leaders are Google and IBM; however, if you would like to get involved, there's certain ways you could technically influence the direction of this project.

From what I understand about CNCF, and maybe potentially why you may want to become an incubated project, is that they provide that for you. There's essentially neutrality. When Jerod asked that question earlier, like "How do you interact with Google and how is that--" I forget what term you used, Jerod, but... You know, one of the benefits of being part of CNCF is that neutrality, and sort of the "Let your guard down when you come here, because we're not trying to steal your bacon, we're trying to make it possible to make it."

**Jason McGee:** Yeah, I think CNCF is interesting in that way. I do agree that that's the role of CNCF. CNCF is a little bit different than some other communities. Apache is maybe the opposite example, where Apache has a particular process, governance structure, and all projects under Apache follow the one governance structure. CNCF itself doesn't impose a particular governance structure on each project; they can make their own decisions.

**Adam Stacoviak:** Right. The only thing they say is you have to be neutral. That's the only boundary they have. You can run it how you want governance-wise, but you understand that if you join CNCF, you need to be neutral.

**Jason McGee:** Exactly. CNCF's philosophy is "We all agree on what the results should be. How you get to the result can be project-by-project", whereas Apache's approach was "Here's the process to get to the result."

**Adam Stacoviak:** Right.

**Jason McGee:** In the case of Istio, the process is documented; there's links on the community page on how to contribute in different working groups, there's links in there about the Technical Oversight Committee Working Group, which is the kind of overarching technical group... And then part of kind of moving forward is -- and obviously, this has evolved over time, but... You know, how do we get to voting procedures, and what's the formal governance rules, like the charter, if you will, and that's been kind of evolving over time.

I think at Istio there's no confusion about like "This thing is gonna run the right way." We already use the CNCF code of conduct... It's gonna have the right blend of who gets to participate. That's pretty important to us at IBM, for sure, so we're not gonna run a project where somehow we have \[unintelligible 00:59:21.28\]

The challenge sometimes is getting projects over the hump, like getting them birthed into the world...

**Adam Stacoviak:** Needed, or usable... Yeah.

**Jason McGee:** Yeah, exactly. Those early decisions, like you have to keep this kind of -- before you open it up too broadly, you have to kind of get it to a baseline, otherwise it becomes like the Wild West. That's what I think people have seen happen over the last 12 months, is Istio kind of going from 0.1 to 1.0, and we have a pretty good baseline now.

**Adam Stacoviak:** \[00:59:53.23\] Back in July, 1.0, you mentioned - I think it was in either the second segment or this last segment - there's a lot of excitement around the direction and the future of Istio. What's in the future? What's next?

**Jason McGee:** One of the big challenges we had over the last four months was just like -- there were so many interesting things happening in Istio, we had to kind of pull back and say "We've gotta get what we have out the door, out to 1.0, and stop working on new things." So we're pretty excited to have done that, and now we can start working on new things again.

There's lots of interesting spaces... One I think that has a lot of excitement right now is kind of multicluster meshes, or mesh extensions. If you think of the idea of the service mesh, obviously it's about connecting different services together... Services live in all kinds of environments. They might be on different cloud providers, you have some stuff in the public cloud and some stuff in your data center, on-prem, and you logically want one service mesh that spans all those environments. Maybe some stuff's running in Kubernetes, and some is on Cloud Foundry, and some of it is in virtual machines... So you have this notion of "How do you configure and manage a service mesh that spans these different environments?" So there's a bunch of alpha work in the project already, to allow you to set up these more distributed mesh environments where you connect different systems together... And I think that will be really valuable.

I actually was in Australia a couple weeks ago for a week, kind of visiting clients and talking to them about the space, and we spent a lot of time talking about Istio... And the notions of security Istio, and being able to do application-level security combined with this emerging idea of a hybrid mesh that spans their data center in the cloud - that was super-interesting to every customer I talked to, because it's one of the challenges they have. They want to adopt the public cloud, they want to enable all their teams to go fast, and build microservices, and use all these new approaches, but all those apps are talking back to their existing systems, so they need some way to kind of govern over the top of all that, and Istio gives them a way to do that.

**Adam Stacoviak:** One thing I see on the Istio homepage is a Learn More, but not a Getting Started... So what's the first step to adoption? I know you mentioned that you don't have to adopt all of it earlier in the call; you mentioned that you can just sort of like take little features of it as you need it, and at the same time you don't even have to change your application, so what's a good first step to adopting Istio?

**Jason McGee:** Basically, do the setup, follow the instructions on the website for setting up the quickstart with Kubernetes, and then there's actually some great examples built into the Istio project. There's an app called Bookinfo... So the first way to get going is just like get it installed and try it, and learn the concepts. To help make that happen, we built kind of a sample microservices app that has Istio applied to it, that is pretty extensively documented, as part of the project; it can help you deploy an actual app that has three or four microservices, and then explore how intelligent routing works, or how to get telemetry data, or how to secure it...

So there's some pretty good guides in the documentation section of the website that will kind of walk people step by step through how to make use of Istio. That's where I always tell people to start... It's like, "Don't apply this to your own thing first. Go try it out." You can do it in any Kube environment, you can do it on Minikube on your laptop, or in public cloud service - wherever you have Kubernetes, you can get going pretty fast.

**Adam Stacoviak:** Cool. Alright, we'll link up to this quickstart with the Kubernetes documentation; I found that, I just had to dig a little bit. One thing we try to cover, at least in the last portion, is like where is the project heading, how can people get involved, and what's a good on-ramp, so that when a listener closes out, they can easily go somewhere and we have links in the show notes for that.

**Jason McGee:** Yeah, and that's good feedback, too. We spend lots of time -- you know, part of an open source project you also have working groups to work on the website, and we have lots of arguments about how to organize the information and make sure people have an obvious path to get involved.

**Adam Stacoviak:** I would say if there's two people in the world that have good insights into what are core ideas you should have on homepages, Jerod and I would be those people, so...

**Jerod Santo:** Aww, thanks...

**Jason McGee:** That's good, I might pick your brains later.

**Adam Stacoviak:** Well, I said your name first, Jerod, of course...

**Jerod Santo:** Well, thank you, I appreciate being included in the list.

**Adam Stacoviak:** You're welcome, sir. Jason, thank you so much for taking the time to cover Istio with us. Congrats on the 1.0, congrats on all the work being done here. Clearly, great progress, especially on the security side, having considered that as a core piece of it, and how it moved from the network up to this layer is certainly an important piece. Thank you so much for coming on the show.

**Jason McGee:** Yeah, thank you. Thanks for having me.
