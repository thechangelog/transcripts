**Johnny Boursiquot:** Hello, and welcome to Go Time, the show where a diverse panel and special guests discuss all things Go is known for, including cloud infrastructure, distributed systems, microservices, serverless, and especially today, the very popular and open source container orchestration platform, Kubernetes.

My name is Johnny Boursiquot, and joining me today is a stellar cast of characters, as Mat Ryer would usually say, including Mat himself, and two other folks who know a lot about Kubernetes. Please welcome Joe Beda, formerly the CTO of Heptio, now part of VMware, and Kris Nova, author extraordinaire and all-around Kubernetes guru. Hello, everybody!

**Joe Beda:** Hello, hello!

**Kris Nova:** Hey!

**Johnny Boursiquot:** Hello!

**Mat Ryer:** It's very good to have you on the show today. This is gonna be a nice little back-and-forth... I know a lot of people listening to this show know - or at least I think they know - a lot about Kubernetes, but I do want to level-set a little bit. This is something that we like to do on this show - to be approachable for both beginners to Go, people that are part of the community, haven't been part of the community for that long, and for those who know the goings on and they know that Kubernetes is made out of a lot of Go behind the scenes.

Let's start out by basically figuring out or really unpacking what it means to have container orchestration, and where Kubernetes fits into that whole picture.

**Joe Beda:** Nova, do you wanna start out, or do you want me to give my quick five-minute "what is Kubernetes"?

**Kris Nova:** I want you to do your five-minute Kubernetes so that I can pick on it afterwards.

**Joe Beda:** Okay, you can tell me where I'm messing up.

**Kris Nova:** \[laughs\]

**Joe Beda:** Assuming that folks have a good grounding in containers - a container, just to really level-set here, is taking a program plus all the things that it depends on, packaging that up into a thingy, and making it so that you can take that thingy to different machines and run it in a predictable way. So it's really about program portability. I think folks in the Go world, with static linking and bringing everything in, are kind of spoiled, where you can take a Go binary and it pretty much runs wherever you wanna run it... But try doing that with a Ruby app, or a PHP app, or a Python app, or a Node app, or whatever. Not everything is hermetic as Go, so packaging things up as a container is great.

Obviously, it was Docker that made containers super-accessible and easy to use, but the original Docker only did that for a single computer, whereas our experiences at Google building similar(ish) type of systems over about ten years was really that this stuff gets interesting when you start looking at containers and that portability across many computers.

So what Kubernetes does is you tell it what you wanna run - "I wanna run ten copies of this container image", the image is the thingy - and then it decides where to run these things, and it makes sure that they keep running over time.

\[00:04:10.10\] Then once you do that, there's a bunch of other problems you have to solve - what does networking look like, what does storage look like, how do you have these things find each other, how do you actually manage load balancers that point to a set of these things? So there's a whole bunch of problems that are downstream of that \[unintelligible 00:04:22.06\] of assigning programs to computers.

So that's Kubernetes from an orchestration point of view. Along the way, we ended up building essentially a generic distributed system kernel for being able to describe not just how you run containers, but which containers you wanna run, how you upgrade them, and we've made that extensible, and that's where a lot of the interesting stuff going on right now is in the ecosystem.

**Kris Nova:** Yeah, and then I think just to follow up on that - you knocked it out of the park, as per usual... I think the only thing here I would wanna call out would be just the importance of the APIs as we've been building them out over the past four, five years now. Like you said, Joe, it's sort of a distributed systems kernel, but really the value here is being able to standardize on this across the industry. For the first time we're seeing folks come together and defining their applications, defining their networking, defining their storage, all in the same way... And that's a very powerful primitive in the cloud-native ecosystem.

**Johnny Boursiquot:** Right. The whole term - this whole cloud-native terminology...

**Joe Beda:** I can define that one for you if you want...

**Johnny Boursiquot:** Yes, please.

**Joe Beda:** Alright, so I assume that there's gonna be a lot of folks who are gonna disagree in terms of the definition of cloud-native... So Nova wrote a book on this also. She's probably the expert, but I'm talking right now, so I'll finish up... \[laughs\] Sorry, Nova. In my mind, cloud is essentially running on somebody else's infrastructure; it's API-driven, it's self-service, and it's elastic. So from the point of view of developers, cloud is often like not talking to a sales guy as a service. You can just walk up and drop a credit card and get going. That's really powerful.

And I think you can still take those API-driven self-service and you can apply that inside of an enterprise, where somebody else - it might be another department... But if you're doing it right, you still have that self-driven experience for application developers. Cloud-native, in my mind, is tools, culture, processes to take the greatest advantage of that.

How do you actually take that capability, the API-driven self-service, and then back-propagate that to how you build software. What's your definition, Nova?

**Kris Nova:** Again, you're stealing all my good one-liners here. I think that was a really good way of defining cloud, as sort of a first-class primitive. But when I think cloud-native, I think cloud is one thing, but native is a whole other thing, that I think is overlooked a lot... Which is on day one, walking up to the dry erase board, your terminal, wherever you're writing code, wherever you're designing your systems - day one designing it to be ran in the cloud. So we're looking at a lot of lift-and-shift, or taking in an existing legacy application and moving that over... In my mind, that's just taking a legacy out and running it in the cloud. That's not necessarily a cloud-native application. Again, it's starting that main function with the cloud in mind.

**Mat Ryer:** Yeah, so how did the project start then? Joe, did it come out of the work you're doing at Google, and then the open source project kind of spawned from that?

**Joe Beda:** I started up Google Compute Engine, which was this weird thing of running VMs at Google, because hardly anybody did anything with VMs at Google... And it was really about sort of establishing the infrastructure cloud for GCP. You look at any major cloud, and VMs are sort of the cornerstone service, and everything builds on it.

Inside of Google nobody used VMs, because they used this system called Borg. It was kind of a little bit like Kubernetes; the idea of container, the way it gets packaged up in images - all that stuff is different... But the general idea of like you describe your program, and then you have a system that schedules it and runs it had been sort of proven out over ten years at Google. So we understood the benefits to developers and the efficiencies that you can get from that.

\[00:08:10.05\] So we were in this bind -- I mean, there were a couple of things that we wanted to do with Kubernetes. The first thing was essentially change the game as we were competing with other clouds. Folks like Amazon were running away with this market, and so we could have gone head-to-head on VMs, or we could have also decided to try and get folks to write programs a different way, in a way that speaks to the strengths of Google Cloud.

And then the second thing was we wanted to start bringing into alignment the way that folks build stuff internally, versus the way customers build stuff, so that the experience that internal googlers were running with was closer (if not identical) to the way that external customers were running.

And then we definitely had a sense that none of this stuff would have had an impact if it wasn't open source. We really saw open source as being absolutely necessary from the beginning, and by committing towards truly being open -- from day one were like "Hey, you can run this on Amazon", which really surprised folks... We also did things like brought in a lot of great folks from Red Had. Red Hat was a great partner early on, in terms of really expanding the set of scenarios and the thinking behind Kubernetes... So yeah, that's how things got started.

**Mat Ryer:** That's a really interesting story. And the whole problem is really interesting... I was an App Engine user for a long time; although it's not clear from the outside, it's not publicly represented in any way, I can see now the difference when you use App Engine to what it was like before, and I can only imagine what's gone on underneath... Something to do with Kubernetes and containers. Because it definitely feels more natural for deployment, just from an App Engine point of view. Is that right, something like that happened on that project?

**Joe Beda:** Well, I think App Engine has seen its own evolution, and I don't wanna speak for that team necessarily... But there was always a little bit of a tension between honestly GCE and App Engine, and I think some of that actually applied to Kubernetes and AppEngine also.

I just gave a talk last week at the SpringOne Platform conference, and one of the things I talked about was a little bit of the difference in philosophy between infrastructure as a service and platform as a service. Infrastructure as a service fundamentally is a set of building blocks, is a set of legos, a toolbox that you can construct all sorts of different things out of. And that applies to both VMs, but I think Kubernetes is still at that sort of toolbox level... Whereas I think as you get closer to platform as a service, it becomes much more of a framework, where their preferred patterns - if you don't adhere to those patterns, then it's definitely a lot harder to use, or impossible to get what you wanna get done. That can oftentimes be very productive, but it can also sometimes be limiting, too.

I think we're looking forward, we're trying to enter in a world where there's not nearly as sharp a line between these two different perspectives, these two different ways of approaching these problems.

**Johnny Boursiquot:** In my mind, I'm trying to picture who in the organization, or what role, who does this fall to? Basically, am I to look at Kubernetes as the thing you deploy applications on, or am I to look at it as the thing you use to build the platform that you deploy applications on? So is it a platform builder, or is it a deplatform?

**Joe Beda:** I think that - and I'd love to get Nova's take on this, too... But I think that there's roughly three personas for Kubernetes right now. What we find is that there's the platform teams, and I think the most forward-thinking organizations think about platform as an internal product. How can they provide something that lets them scale out, provide a larger menu of services to their internal teams, and in some ways provide a cloud-like experience, but within the constraints of that larger organization. That's how we see this play out in enterprises a lot of times.

\[00:11:57.11\] And then you have application operators and application developers, and it's really the application operators that run on top of -- you know, they don't face with Kubernetes... And sometimes people wear both hats, in a sort of dev opsy type of way.

But then I also think when we look at those platform operators, oftentimes they're gonna wanna say hey, there's raw Kubernetes, but also using extensibility, using other systems, we actually have a preferred way to use Kubernetes that's gonna be easiest... And through the fullness of time, we want that preferred experience to be similar to the experience of a PaaS, where developers can just show up, get stuff done; the ops role is much diminished in terms of the drudgery, and it starts feeling more like "Hey, I write code, I ship it, and it just runs" type of experiences.

**Kris Nova:** Following up on that - and we talk about this in the book Cloud-Native Infrastructure a little bit - I think there's a fourth role. I think there's what we called in the book an infrastructure engineer. These are effectively the folks like Joe and myself. These are the folks who are writing software to manage and mutate infrastructure behind the scenes. Folks who are contributing to Kubernetes, folks who are writing the software for the operators, folks who are writing admission controller implementations and so forth... I think it's this very new engineer role, that we haven't seen until we've started having -- effectively, as Joe likes to put it, a platform-platform.

**Johnny Boursiquot:** Along those lines - which actually brings up something that I saw earlier on Twitter - these roles require so much from an experience standpoint that it would be hard to have, say, a junior developer join one of those teams and be able to contribute effectively. Is the barrier to entry to be able to contribute to something like that just so high that -- I see folks hiring... The job postings are like a mile long, and "You need experience in this, and you need experience in that..." So it seems hard, or at least from my standpoint it seems like the barrier to entry there, to be able to effectively contribute in such a role is quite high... Is that true, from your experience?

**Kris Nova:** My thoughts here are it kind of depends on how mature your team is. If we had infrastructure engineers and platform folks already in place, with systems in place to build out an application image and push it to production, then I think the barrier to entry here is pretty low. It's effectively writing in an application of your choosing, in a language that you want, and letting the systems that are in place take it from there.

Now, getting those systems in place is a completely different story, and that's where I think we see the high barrier to entry, with folks who are coming in and having to answer "How do we start implementing solutions for the various stages in our build pipeline and pushing to production?"

**Joe Beda:** Yeah, there's definitely a lot for folks to wrap their heads around. If we call Kubernetes a distributed systems kernel, then the folks who are extending it, the folks who are going deep on that - in some ways they're kernel engineers. And for somebody to actually become an expert in Linux and go deep on the Linux kernel and understand the ins and outs of the system - that's not an easy thing to do, right?

One of my observations here is that a lot of this stuff is new, but if we look at AWS, and you look at the menu of services there - that's not easy. There's a lot to wrap your head around, there's a lot to understand... It's a full-time job over months to actually become proficient on AWS. That's why they're doing things like Lightsail. And I think it's gonna be a similar thing for any sort of advanced cloud-like system; there's a learning curve to actually pay for there.

I think one of the things that we see is that there are similar learning curves for things like being proficient on Linux at all... But it's a shared thing, and it's assumed, and people climb it together, and over time it sort of becomes part of the background noise of actually just being in our industry. I think we're seeing the same thing happening with cloud, where a certain level of proficiency with Amazon is almost expected and background noise, to some degree... And I think we're gonna find that if Kubernetes continues on its trajectory and becomes more sort of the common substrate, then proficiency or at least a working knowledge of Kubernetes will become part of the background noise for being proficient in our industry.

**Mat Ryer:** \[00:16:04.22\] And speaking of the open source teams, this project, when it started, presumably it started like most projects do - with a much smaller scope, I assume. I don't know. Has that evolved and has that changed over time? Were there any surprises in that, or what were the interesting things that you saw happening?

**Kris Nova:** I think the interesting thing for me was even getting Kubernetes up and running... Which, again, Joe wrote the book on this one. But I've noticed, both in the open source ecosystem, as well as in the commercial enterprise, going from zero to Kubernetes has always been a high point of friction for a lot of folks. Looking backwards in time, that was what originally attracted me to Kubernetes in the first place, and I think that I was surprised that we've come as far as we did, and we still don't have necessarily a great story here.

I think we're getting close with projects like the Cluster API, and tools like Kubeadm, but again, I still think that there's a lot of questions that need to be answered, to this day, when it comes to going from zero to Kubernetes.

**Joe Beda:** Yeah, I think that's the biggest surprise for me also. Early on in Kubernetes I wrote a pile of Bash for deploying Kubernetes in a bunch of different environments - GCP and some other stuff - and it didn't age well, let's just put it that way... \[laughs\] I actually wrote a way to dump a stack trace in Bash; I'm kind of both horrified and proud of that. So I don't think we took seriously enough the lifecycle of the cluster itself, running it, the different types of environments that it runs, how do we actually build deployment systems that scale across all those environments... Because launching a cluster in a major public cloud provider is a very different experience than doing a cluster on bare metal, doing a cluster with Raspberry Pi's.

I think one of the strengths of Kubernetes is that it scales from everything, from like -- we have retailers putting it in every store. I think Chick-fil-A is an example of this, where they're using that to run their in-store systems, like point of sale, and digital signage, and stuff like that... All the way up to examples like the particle accelerator at CERN - they're essentially using it for data analysis there. So that's a huge scalability, but what that means is that the way that you administrate the lifecycle actually changes across those things, and the complexity that that brings I think is something that we very much underestimated early on in the project.

**Johnny Boursiquot:** One of the things that you might tend to hear in the industry, if you go to a few conferences - you're gonna hear like "Well, we're gonna use Kubernetes so that we're able to deploy across all the clouds. That's gonna be our primitive, if you will, that sits on top of everything else. That way we have the freedom to move from cloud to cloud, or to use all of them at once, if we want to." Do you think that's a wise thing to do? Should companies and developers and teams be building at that higher level, without really taking advantage of any one cloud's particular strengths?

**Joe Beda:** Well, my take on it is I think multi-cloud strategy can make a lot of sense for a lot of companies. Now, first of all, if you're a startup and it's all about proving that you can add value to the world, and not going out of business - yeah, do everything you can, by hook or crook, to actually get to that point where you prove your value proposition. But I think as we look at more mature businesses, it's really a matter of risk mitigation. I think that these companies look at dependence on a single vendor as risky, and if there's ways to actually mitigate that risk, it's worthwhile, and Kubernetes can be one technique on how to do that.

I think what it also does is it creates a clear separation of operations roles. You can have specialized teams that know how to run and manage Kubernetes on top of infrastructure X, Y or Z; maybe you use services for some of that, and you can outsource some of that. But then what you end up with is some commonality in terms of experience at the application level.

Now, we may not be able to hide every detail of the underlying platform, and there may be places where you wanna take advantage of special cases of the underlying platform, but if we can reduce the gratuitous differences, we can make application teams and that skillset more portable, we can even make applications more portable...

\[00:20:03.01\] And I think one of the things that we see with businesses is that it ends up being a point of leverage between them and their vendors. If you're going to Amazon and you're a big customer and you're negotiating your discount - because that happens... \[laughs\] If you're 100% locked into various primitives, you're not gonna get as good a deal unless you're a credible flight risk. Unless you can say "Hey, it'll be a two-month project, but we can move from infrastructure A to B." All of a sudden, that actually creates a much more even playing field between you and your vendors.

**Kris Nova:** Following up on what Joe is saying there, I think getting the abstraction right as we start looking at defining applications, networking, storage, what have you - across clouds, part of a very interesting mental journey that we went through when we were starting to look at designing the Cluster API was that no matter how generic you make it, you're pretty much always gonna run into a situation where there's gonna be some cloud-specific something that you're gonna need to define... So it's an exercise of trying to figure out 1) what are the generic parts, and 2) how do we minimize the amount of configuration you need so it's designed for a given cloud.

And I think if you look at how we're using the provider config in the Cluster API, you can really see that we're able to start versioning cloud-specific bits while still maintaining a generic superset of configuration as well. This is just coming out of lessons of when we were designing the API for Kops, when we were doing it for Kubicorn, and trying to make it as generic as possible... And eventually running out of ways of making it generic.

So again, if you get a chance to read my book, we talk a little bit about some of these primitives, of how you would effectively use software to manage the lifecycle of a Kubernetes cluster. And if you look at one of the most fundamental principles of Kubernetes, it's declarative in nature. In other words, you define what the goal is or the intent is here, and then we just go and reconcile that state over time. All the Cluster API is is taking that original lesson and applying it to infrastructure.

So you start off by first declaring what your Kubernetes cluster should look like, and then we go and we reconcile that and try to bring it to life. Now, this helpful when we start looking at the lifecycle of a cluster, because if we wanna make changes to our cluster, if we wanna scale it, if we wanna upgrade it, if we wanna mutate it in some way, we are following these same principles of declaring what we want, and letting something take action behind the scenes.

**Joe Beda:** The way I would say it is that we're essentially using the Kubernetes patterns, that have been proven at scale, to manage Kubernetes itself.

**Johnny Boursiquot:** That makes sense.

**Mat Ryer:** It sounds like Inception. \[laughs\]

**Joe Beda:** Yeah, there's definitely -- the logo for the Cluster API project is a stack of turtles, because it's turtles all the way down.

**Mat Ryer:** Yeah, right.

**Johnny Boursiquot:** \[laughs\] Nice. So we do have a question from our GoTime FM Slack channel... And for those listening - yes, when we record live, we do take questions live, so this is your opportunity. You've been told. Ian asks in the channel "Is Kubicorn still alive, or has it been displaced by a Kubeadm and Kops?"

**Kris Nova:** That's a good question. I do know that folks - myself included - use Kubicorn from time to time. I don't think it was ever intended to be production-ready or to solve managing a Kubernetes cluster at scale in the enterprise. I think it was a good thought exercise, and I think that probably the biggest piece of value that I got out of it was it was the first open source Kubernetes management tool that was built on top of Kubeadm... And that is still in place, to this day. If you actually look at how Kubicorn works, it's relatively static at this point, because we're able to just vendor Kubeadm at runtime with the latest version that is being pushed by the upstream folks. So the way I look at Kubicorn is it's just a way of automating using Kubeadm instead of a cluster.

So I think that we learned a lot with Kubicorn, we learned a lot with Kubeadm, and I think Cluster API is a really great representation of taking all of these lessons together and coming up with a way of doing this together as a community. So long answer - it's not necessarily growing, but I wouldn't say it's necessarily dead either.

**Break:** \[00:24:18.29\]

**Mat Ryer:** It's funny, this is something that I've noticed has been mentioned a couple of times already - this theme I'm quite interested in, around the fact that this idea and these projects have to evolve. You talked about underestimating the complexity of deploying to different targets, and that's kind of a good example, where you almost have to underestimate that at the beginning, otherwise you probably would never undertake some of these projects, which end up being enormous in scope, and in power, and in capabilities. So it's that idea that you couldn't design this in a vacuum. You have to build it and have it be used, and get it out in the real world, before the software can get good and get hardened, and stuff. Would you agree with that?

**Joe Beda:** Yeah, I think -- a couple of things... I think we did have a pretty clear idea of what we wanted Kubernetes to grow into when we started out, based on the experiences with Borg. But there were definitely areas where we skimped out the gate, and tried to simplify things to just get started. You need to just get started on this stuff.

I think then also as the project grew, there were things where I think we expanded scope. Early on we recognized that -- this was probably three, three-and-a-half years ago, we recognized that as we added more and more capabilities to Kubernetes... Like, number one is that we wouldn't be able to keep up with all the ideas that folks had, and number two is that there's a chance that we're gonna get some of this stuff wrong and we need a way to experiment... So we started creating extensibility mechanisms inside of Kubernetes, and I think that really transformed Kubernetes from being just container orchestration to really being -- you know, when we start talking about platform-platform, in a technical sense; it really is the underpinnings of that. And then in doing so, it allowed us to keep Kubernetes scoped.

There's a lot of stuff that's happening in Kubernetes' orbit that is not part of the Kubernetes project, and I think that's part of the success of the thing altogether - enabling a thriving ecosystem, where you can do interesting things on top of Kubernetes, without talking to any of the core Kubernetes developers. That has really turbo-charged the project and the ecosystem in general. So much of all the excitement above the Kubernetes interface on the application side, on the facing side of the interfaces is really about "How do you start using Kubernetes not just to deploy applications, but to provide active distributed management for those applications?"

**Mat Ryer:** \[00:28:11.22\] It's interesting you talk about that -- in what ways is it extensible then? What types of extensibility is possible?

**Joe Beda:** Kubernetes has a bunch of built-in objects that you actually can write to it. You can say "I want a pod", which is essentially a set of containers, and then Kubernetes takes care of picking out which machine to run that on, and then gets it started. Then you can say "I want a replica set", which means that I want a copy of this particular template; I want ten of them. Kubernetes will make sure that you have ten of them. Then you can say "I want a deployment, which is a version of that." So you can do version upgrades, and all that. So we build up these stack of layers, and there's a bunch of built-in objects with Kubernetes.

The core extensibility that I think has folks so excited is this thing called custom resource definitions (CRDs). It's a way for you to essentially create new objects in Kubernetes, extend the schema of Kubernetes, so that you can bring your own stuff to it. If you say "Hey, I don't like the way Kubernetes does deployments, because you can't do blue-green deployments the way I wanna do blue-green deployments." You could write a peer to the deployment object called the blue-green deployment, that implements your logic for how yo do this stuff.

So this is really a combination of extending the schema, and then running a piece of code that essentially does that reconciliation loop that Nova was talking about earlier, that was so core to the Kubernetes way of doing distributed systems.

And then the exciting thing is that folks are both applying this to more domain-specific problems. So you can say "Hey, instead of managing the deployment of a generic program, I can manage the deployment of a MySQL instance, or I can manage the deployment of a Kafka instance." So we're starting to see this idea of people essentially taking operational knowledge, rending that into code, and then having that code run on top of Kubernetes. So you can essentially create an RDS-like system, using this Amazon analogy, but using Kubernetes as a substrate for both describing what you want and actually implementing that logic for how you're gonna actually run an RDS-like system.

And then we see people applying this to not just running stuff on Kubernetes, but you can take that control pattern and apply it to other things, whether it be configuring a hardware load balancer, whether it be configuring services in a specific cloud. I also talked to people who have a custom resource definition inside their enterprise that describes a team, with who's on the team... And as soon as you do that, it creates the Bitbucket repo for them, it creates the Slack channel for them, it automatically sets up their CI/CD system, all based on that essentially declarative document of what you want... And then you have a bunch of these extensions that go out and manipulate these outside systems. That's the exciting distributed systems kernel that I think has given Kubernetes a second wind.

**Kris Nova:** When I'm talking with folks who are new to Kubernetes and I'm trying to explain to them the power of CRDs that Joe was just talking about, I usually start off by first defining two very important elements of a CRD that you see throughout every object in Kubernetes, which is the spec, which is effectively the definition of what you would like, so your declaration; then you have a status, which is this real-time status of what is currently happening with the object. And because we have both of those at the same time, that's where this reconciliation primitive comes into play, and that's how we're able to build these complex reconcile loops and controllers and operators arbitrarily, for whatever we want, as a software engineer. And I think a lot of folks don't realize the power and the genius that Kubernetes gives us when it comes time to defining these operators and these controllers.

**Johnny Boursiquot:** Well, I definitely think they're gonna be looking into it now... \[laughs\]

**Joe Beda:** One of the things I will say is that writing one of these controllers - it's actually harder than it actually should be right now. That's an active area of exploration, where folks are figuring out what are better ways to actually both use Kubernetes as a user, but then also program Kubernetes to use these automation patterns. We still have a ways to go to make this stuff be a lot more consumable, a lot easier to work with.

\[00:32:10.17\] One thing I wanna do is I do wanna pitch a book. It's not one of mine or Kris', but it's Programming Kubernetes by Stefan Schimanski and Michael Hausenblas. I have a copy that I'm holding right here... If you wanna start saying "How do I use Go to start programming Kubernetes and start doing some of this CRD and controller loop?", this is actually -- you can do worse than starting with this. It's an O'Reilly book.

**Mat Ryer:** Thank you.

**Johnny Boursiquot:** Very cool.

**Kris Nova:** Yeah, and I think it's important to call out - there's tooling in this space as well. We're starting with a prototype; there's a solution, the operator framework that came out of the folks at Red Hat and Core OS. We have Kubebuilder, which is an open source upstream effort... So we are starting to look at ways of building out frameworks for us to start developing controllers and operators, but again, it's a lifetime of iterating and working on it, and we're just not there yet, I don't think.

**Joe Beda:** And to bring this back to Go, I think Go is the preferred language for this stuff right now... So there you go. \[laughter\]

**Mat Ryer:** Yeah, I was gonna ask about that, actually... If you look at the GitHub.com/kubernetes/kubernetes repo, which I guess is the main Kubernetes codebase...

**Joe Beda:** We call that the KK. \[laughs\] Kubernetes/Kubernetes.

**Mat Ryer:** Cool! We won't nest that any further.

**Joe Beda:** Yeah. \[laughter\]

**Mat Ryer:** So I noticed that in the language breakdown it's over 90% Go. So why was Go the language of choice then for Kubernetes, when you started out for this project?

**Joe Beda:** Well, and I think the other 10% or whatever is probably Bash, and that's all me, I'm sorry... \[laughter\] I think we picked Go -- number one is that clearly Docker was a big piece of the puzzle, both then and now. And Docker being written in Go was definitely influential. I actually insisted that we do it in Go, because Brendan Burns, one of the other founders - the initial prototype for Kubernetes was written in Java. And I think one of the things that I looked at is -- and then we also were influences looking at Mesosphere, which was an older system; some different ideas being used in Mesosphere for how you extend it and how you program it, but it's essentially a large C++ codebase.

And so I was looking at like "Okay, do we wanna do the C++ thing, like Mesos? Do we wanna do the Java thing, with the Apache, Hadoop type of thing that comes with Java? Or do we wanna actually go and look at the community and the quality and the type of code that's being written, and the interactivity in the community that we see happening with Docker?"

I think that Go ended up being this really great mix of system-level enough that it felt like you weren't insulated from the things that you're running on, but still much more approachable, much more productive than something like C++. Because finding new contributors and getting them productive in a large C++ codebase is really hard. Now, that being said, I think that there are cases, and I think I've heard people criticize Kubernetes as being like "Go written by Java developers", and I think there's definitely parts of the codebase where you look at it and can definitely see that... But I do think that having Go as an approachable systems-level language ended up being very much the right call for Kubernetes.

**Kris Nova:** If you are interested in learning more about folks who have criticized Kubernetes for being an object-oriented-like system written in Go, I gave a talk at FOSDEM last year called "You can't have a cluster\*blip\* without a cluster." It talks about a lot of the anti-patterns in the Go programming language that I think came out of a more traditional object-oriented mindset. Not to pick on your and Brendan too much, Joe...

**Joe Beda:** \[00:35:47.23\] Yeah, well, you know, a big part of it is that the community grew so fast, and there were so many folks that came out the project without knowing Go beforehand... That both helped boost Go, but it also meant that they weren't necessarily -- they were maybe experienced programmers, but not necessarily experienced in Go... So I think that's kind of the result that you get. I bet you there's a lot of codebases out there that look very similar, based on the same sort of dynamics.

**Kris Nova:** And it's a successful pattern. It's working for us. It's interesting, again, going back to that lesson of evolution over time, how we got here and how we didn't necessarily wake up in the morning and sit down and say "We're gonna go and build the system out this way." So... Really cool.

**Johnny Boursiquot:** One of the things that really showed the value of Kubernetes to me was when -- like, in the beginning there was always talk about "Well, we're doing container orchestration that sits on top of virtual machines, and Kubernetes handles that for you; it gives you that abstraction, the pods and whatnot." So the level at which you could deal, the unit you could deal with for deploying things - basically, you didn't have to deal with the virtual machines and whatnot. So now that serverless - I'm doing air quotes - is a thing, and we probably all know it's more of a marketing term than anything else, but still, the idea of supporting serverless on Kubernetes is a thing, right? With the virtual-kubelet project, that makes it possible.

Along those lines, are you seeing Kubernetes as the platform that whatever the next deployment model is - we went from virtual machines, now it's more about containers, and we're doing the function-as-a-service thing... And whatever the next thing happens to be, are you seeing Kubernetes as the enabled? Whatever we come up with next, Kubernetes will be able to handle it through its extensibility?

**Joe Beda:** I hope so. I can't predict the future... I think the first thing to recognize is developers, engineers - we have this mindset of "There's one true way to do things", so we see these new technologies, they're shiny, everybody gets excited about it... But the reality, as you see this stuff play out over time, is that we only ever add stuff, we never remove stuff, just as industry... The mainframe business is actually a growth business for IBM. So VMs aren't gonna go away any time soon.

I think one of the things that we can do is we can view this as a spectrum and we can actually provide different gradations/stops on that spectrum, such that folks can pick the right tool for the job as they're doing stuff. And I don't think even any application is necessarily a serverless app, or a container app, or a VM app. What you can say is "Hey, I'm gonna do most of it using a function-as-a-service platformy PaaSy type of thing", and then like "Oh, I have this one thing I need to do that's like a machine learning model, and maybe I need to evaluate that with containers." And then "Oh, I need to do something that's using some sort of big legacy monolith, so I'm gonna be running that (or my big iron database) in a VM or on physical hardware", or whatever. And that can all be one application, using that set of technologies. I think that's what we see as being more typical as you see these new technologies come forward, these new frameworks, versus replacing the old thing. And hopefully, Kubernetes is gonna be flexible enough that it can actually be a good basis, a good starting point for the next thing.

**Break:** \[00:39:11.15\]

**Mat Ryer:** Yeah, so Jon Calhoun was telling me that a lot of people look to the Kubernetes codebase for examples of patterns, and things like this. You mentioned some of it being a different kind of mindset when it was written... There are obviously gonna be then good examples too, and they're the ones that are used, according to Job. So yeah, is there any other specifics around how things are organized?

One of the things that Jon mentioned was that it had to evolve so quickly, and you sort of can't start with a good, clean design; everyone's is sort of gonna naturally evolve anyway, so I think that in itself is quite a good lesson, but... Is there anything about code structure or anything about the project, or other things for Go developers to take away from the Kubernetes codebase?

**Kris Nova:** I think the Kubernetes codebase, in my mind, is probably the single best example of how to use Go interfaces. And especially when you're looking at more unconventional principles in Go, such as composition and embedding, I think we do a really good job with what we basically use \[unintelligible 00:41:32.00\], which is embedded in every Kubernetes object. That's a great example of how we're able to define generic bits and then share them across other objects that contain other specific bits to that object.

So again, I think this kind of alludes to an OO-style thought pattern, but these are first-class features of Go, and I think Kubernetes does a really slick job at using these in clever ways.

**Joe Beda:** I mean, I see the warts... \[laughter\] I think Kubernetes has lived through having a monorepo, trying to split things out... It's kind of half split out right now; I don't even wanna describe the current state of affairs in terms of trying to break the repo up. That's been a painful process to go through, so I think there might be some lessons to take away, the pros and cons of monorepos.

I think the one thing we did get right though is we wanted Kubernetes to be a well-structured principal distributed system... So instead of creating a single binary out the gate, we actually took different capabilities and we broke that out into different binaries, and had those things communicate to each other over essentially the same APIs that everybody else has access to.

So I think structurally, creating multiple binaries that can talk over the network, and holding the line about no private interfaces - I think that's definitely a lesson to take away... Maybe not for Go specifically, but for as you start building distributed systems, creating the right mechanisms to help enforce a level of cleanliness of architecture I think ended up being something that worked out well.

**Mat Ryer:** And I guess you're also dogfooding continuously, as well.

**Kris Nova:** Yeah, absolutely. We're totally dogfooding our own client. If you look at the actual official client in Go, for how folks would build a Go program to interface with Kubernetes, that's the exact same source code that we use internally at Kubernetes itself. So we're actually running the same code that we're prescribing folks to use to solve their own problems... So I think that's a really good pattern to take away here.

**Mat Ryer:** Yeah, I agree with that. And even just the fact that it gets used a lot, and you find any bugs... But there's actually a few other interesting side effects that we noticed as well at Machine Box, which is a similar kind of thing - we use the SDK, we have a Go SDK for the Machine Box APIs, and we use that in our integration tests. So we kind of try and fold as much into the integration as we possibly can, just to test as much at the same time. But yeah, it does provide that level of stability, and that's really interesting.

**Johnny Boursiquot:** \[00:44:08.26\] So John on the channel is asking if by Kubernetes being an open source project - has that forced you down a particular path in terms of code structure, and organization, and how you package things up... Would you have done things differently if it was a private repository or private project?

**Joe Beda:** From code structure, I don't know that we would have. I do think that there's a scale-out at the community... The code and the community co-evolve, which I think is an interesting thing in that as the project grew, we needed to have ways to actually govern who was in charge, who got to decide what features, how the stuff moved forward... And I think Kubernetes has been what we call open governance now, where it's essentially an open set of folks that are actually deciding what the future of the project looks like. It's not controlled by any one company, or anything like that. And I think there are places in the code structure where we've actually seen that play out.

I think the extensibility mechanisms are definitely amenable to this open source sort of "Let's let things go wide" type of thing... I think maybe we wouldn't have done this same level of investment in extensibility if we hadn't had the open source angle to it.

I think we've broken GitHub, essentially. I mean, the size of the project, and the workflows... There's essentially this system called Prow, that the Kubernetes community wrote, that essentially is GitHub automation. Essentially, almost nobody has real admin privileges in the Kubernetes GitHub org. Instead, it's all commands through /test or /approve or/lgtm in the issues, and then it's the Prow robot that actually does all this stuff there... So we can have a richer ownership model, a richer permissions model on top of that. That's stuff's all written in Go also. But that's not the code itself, but really how the community, how the code processes work is definitely part of that.

**Kris Nova:** There's something to be said about the speed at which we were iterating in Kubernetes. We've brought this up a few times now, which is as an open source project, it moved very quickly, and I think we see that reflected in the Kubernetes K/K repository, with the amount of binaries that we have in there, and the amount of dependencies that we're vendoring. Not that I need to bring up \[unintelligible 00:46:37.19\] But yeah, I think that it grew quickly, and I think because of that we see the repository take a unique shape, that we might not have seen otherwise.

**Johnny Boursiquot:** Speaking of governance and the influence of companies over a project, every time any popular open source project gets -- or at least the organization behind those projects gets acquired, or... Basically, there's always sort of this moment, this knee-jerk reaction moment where you're like "Ugh, there goes our project. Now we're gonna start seeing things that are beneficial to one company, and not to others..." From an outsider's perspective it appears as if Kubernetes hasn't suffered from anything like that with the acquisition of Heptio by VMware... But I'm curious, too -- at a glance, what would be, say, one or two of the most advantageous benefits since the acquisition, that basically has benefitted Kubernetes?

**Joe Beda:** The first thing I'm gonna say is that Heptio - we contributed to Kubernetes; we weren't the largest contributor. I think we probably punched above our weight, based on the size of the company, but it's a pretty big pool that we were playing in.

\[00:47:47.17\] I think one of the things that my co-founder did well while he was at Google was start the Cloud Native Computing Foundation, and brought folks together. This is Craig McLuckie, the Heptio co-founder. And this ended up being sort of a vendor-neutral place for holding Kubernetes. There's pluses and minuses to the CNCF and the Linux Foundation... That's a whole other conversation over drinks type of thing. But I think in general, having this not be owned by any single company has been one of the keys to success for the project, and has actually let it continue to thrive, as we've seen the ins and outs through any sort of company in the industry, whether that be Heptio or whomever.

In terms of Heptio joining VMware, I think we were able to activate a lot of folks inside of VMware, bring more people to the community, really start to fill in some gaps that we've seen through the eyes of our customers. We definitely have a focus on making sure that we're putting more into the project than we're getting out of it.

**Kris Nova:** To follow up on the governance commentary of earlier, I think Kubernetes was the first of its kind, and kind of set the pace and the tone, and set the (for lack of a better term) reference architecture for a successful CNCF project. And if you look at tools like -- Joe, you had mentioned Prow earlier, that's now an open source tool that you can vendor, and you see that being used throughout the CNCF ecosystem... And then we're using it locally on our end for Falco, and I know a lot of other projects who are using it as well. And again, we just have Kubernetes to thank here for being the first one to go through the CNCF graduation process, and to set the tone for a lot of the processes moving forward.

**Johnny Boursiquot:** Very cool. As we wind down to the remaining few minutes here, I'm interested in knowing what the next big steps, or the next big features or improvements that you see in Kubernetes, or whether you think you're getting to the point where you're gonna have a more stable codebase, just refining things... Or do you see big pieces still remaining to make the platform complete, so to speak?

**Kris Nova:** I've got an answer here, and obviously, I'm a little bit biased, but if you look at the problems that we've solved as a community - we've already kind of addressed storage, we've iterated over storage a few times; we've done that with networking, we've done that with compute, we've even done that with how we define our applications and how we start to look at managing state over time... But if you look at the security status, there's not really a good story in place yet. I think that's a bit of the final frontier for Kubernetes to figure out and solve.

There's a lot of known issues about running your applications in Kubernetes and keeping those applications secure, and even keeping your Kubernetes cluster secure. So in my mind, that's one of the big - like Joe said earlier - warts that I've noticed in the ecosystem.

**Joe Beda:** Just to be clear, it's possible to do. I think it's just not as easy or straightforward, or as turnkey as you need to. I think there's more to be done there in terms of -- I think from a security point of view, Kubernetes in the fullness of time will become the high watermark in terms of security best practices, because you end up with a heck of a lot more insight in terms of what programs are running, how they're running, who actually decided to run those things, who took what action. You get all that data that you often don't get in more traditional dev ops types of situations. But I think we see the potential there; I don't think we fulfilled that potential yet. So I definitely agree with Kris on that.

I think one of the things we talk about a lot in Kubernetes, in the core project, is making Kubernetes boring. Good infrastructure is boring. I think Brad Fitzpatrick was at one point talking about a Go release, and said "Hey, there's nothing interesting in this Go release, and that's actually a good thing." Go has gotten more interesting since that time, I think, but there was a time where the thing was stabilizing and it got boring, and the release notes were like "We improved the garbage collector, and things are faster, but from a user's point of view nothing changed. "

And I think our goal is to get to that point where the core of Kubernetes is super-boring, and all the interesting stuff is actually happening outside of that core. I think we're continuing to head down that road. So I think that's a good place for us to be in, to actually have the excitement happening in the ecosystem, but not in the core.

**Kris Nova:** \[00:52:23.18\] I think it was the first time I heard somebody use the term "boring" to describe software. I think it was Rob Pike in one of his early talks, when Go was first coming out.

**Mat Ryer:** Yes. Well, here's a quick question for you. If I write k8s...

**Joe Beda:** Ha-ha-ha!

**Mat Ryer:** ...am I embarrassing myself? Is that hot or not? I don't know. Is that in still, or...?

**Joe Beda:** Oh, that's in, yeah.

**Mat Ryer:** Oh, that's in.

**Joe Beda:** So just for those -- it's how people write internationalization or localization... It's like i...

**Johnny Boursiquot:** I18n...

**Joe Beda:** I18n, that type of thing. Or Andreessen Horowitz, i16z... \[laughter\] It's that same type of thing, where between the k and the s there's eight letters. But then we also have the advantage that you can call it "kates" (k8s). So a lot of times when people are reading it, instead of calling it Kube, or Kubernetes, they'll actually call it kates. I don't know who started that... It's both cool, because it's like a shorthand, but it also I think is one of those things that creates a little bit of a barrier for new folks in the Kubernetes world, because it's yet another piece of jargon to learn. It's like, "Okay, Kubernetes, but then I see k8s... What the hell is going on with that?!"

**Mat Ryer:** Yeah.

**Kris Nova:** I was gonna say, I just really like it because it minimalizes the amount of characters I need to talk about Kubernetes on Twitter.

**Johnny Boursiquot:** That is useful, yes. Speaking of more jargon... Is it "kube cuttle", is it "kube control"? \[laughs\]

**Joe Beda:** \[unintelligible 00:53:46.09\] We argue about this stuff all the time. We had one employee at Heptio, now at VMware - she insists on mispronouncing Kubernetes as Kapernikes (Copernicus). \[laughter\] It's kind of a game we play about finding the worst pronunciations for anything that we talk about.

**Johnny Boursiquot:** Awesome.

**Mat Ryer:** And the last question for you, Nova... There's 85,000 commits in the K/K repo. Which ones you favor, and will accept the short hash?

**Kris Nova:** Which commit is my favorite...? Let's call it Joe's commit. Joe holds the official title of the very first commit to the open source repository, and if it wasn't for that, then I don't think any of us would be here right now.

**Mat Ryer:** That's a great answer.

**Johnny Boursiquot:** There you have it.

**Joe Beda:** \[00:54:38.20\] I just wanna argue against that... What happens - we had a repo before we actually moved it to GitHub. I was just doing janitorial work of actually saying "Okay, let's get this thing ready for release..." \[laughs\] So I can't claim that I wrote all that code. I just was the one who check in the first code as we were cleaning stuff up to do the initial release.

**Mat Ryer:** I think the GitHub history doesn't lie, and it is admissible in court.

**Johnny Boursiquot:** \[laughs\] You know you can revise that history, right...? I'm just saying.

**Mat Ryer:** Can you...?

**Johnny Boursiquot:** \[laughs\] Alright. Well, I think this has been really one of the funnest shows I've been on, because I have a passion for infrastructure, and as an SRE, it makes me happy to know that boring technology is what we want... Because I don't want exciting when I'm on call, so... \[laughs\] Yeah, it's great to know where the project is headed, and it's been awesome having the two of you on the show.

Joe, you do have, on a regular basis, TGI Kubernetes that you host live, where we watch you sometimes stumble on things, but most of the time you get through it, with the assistance from everybody else...

**Joe Beda:** Yeah, and I think we're at show 90-something there. We do this every Friday... And Nova also hosted a large number of those too, when she was working at Heptio. And I know that she's looking to start doing some of her own streaming on Twitch, too.

**Johnny Boursiquot:** Uuh, nice. Looking forward to that, Nova.

**Kris Nova:** Yup, we did our first one, and we're working on building it out. I think we're gonna focus more on Kubernetes and other container orchestration, so broadening the scope a little bit... And of course, we're a security company, so I'm sure we'll see a lot of security talks.

**Mat Ryer:** Great. We look forward to watching, I suppose...

**Kris Nova:** Yeah, I think that's the correct word to use there.

**Mat Ryer:** Yes, thank you. \[laughter\] I was just checking.

**Johnny Boursiquot:** Waiting for the confirm... \[laughs\]

**Joe Beda:** It's weird that -- I mean, the streaming, sort of YouTube/Twitch stuff has sort of a different feel to it than podcasting, and I think it's consumed in a different way... So I think it's interesting to see the different mediums find their own way of working.

**Kris Nova:** Yeah, when you first start streaming, there's like this moment when you're halfway through and you realize you've just been in a tiny room, talking to no one, for like 30 minutes... \[laughter\] It's really easy to go off the deep end a little bit there.

**Johnny Boursiquot:** Awesome. Well, thank you very much for coming on the show, and for those of you listening live, we appreciate your being on the channel and asking questions. For those of you who will be listening to this show later on, we hope you enjoyed it. Please, reach out to us on Twitter @GoTimeFM, let us know who you'd like to have as guests. We can always reach out to these exciting folks and come talk about this stuff you know and love in Go.

Thank you very much... This is it for us.

**Joe Beda:** Thanks so much for having us on.

**Kris Nova:** Yeah, thanks!
