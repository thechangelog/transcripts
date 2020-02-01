**Johnny Boursiquot:** Hello, Go Time listeners, and welcome to the first episode of 2020. My name is Johnny Boursiquot and I'm joined by an exquisite panel today. Joining me are Mat Ryer, Carmen Andoh, Jaana Dogan, and our special guest, Kelsey Hightower. Hello, Kelsey, and welcome to Go Time.

**Kelsey Hightower:** Oh, awesome to be here.

**Johnny Boursiquot:** Good stuff. So it's 2020, and I don't know about y'all, but usually after the holidays I have this sort of haze, I'm just trying to come out of the little bit of time off, and trying to figure out how to compute again... I'm not sure if anybody experiences that... Mat, I'm sure you do, because you're always like that, no?

**Mat Ryer:** Yeah... Basically, that's how it is for me. But no, it is hard sometimes to take a break, but if you can do it, it is worth it. And when you get back -- I really miss it, so I'm really keen to get going again once we start, so... I've had a good week so far, actually.

**Kelsey Hightower:** A new decade is like a time for reflection, and I was able to reflect back... And I noticed that in 2020, the most CPU-intensive application is my web browser... I never thought that's what we would end up in 2020. \[laughter\]

**Mat Ryer:** Yeah. They didn't predict that on Back to the Future, did they?

**Kelsey Hightower:** No... Tabs. Chrome tabs.

**Carmen Andoh:** We can't invent flying cars because we're too busy trying to optimize our browsers.

**Mat Ryer:** We're too busy on Twitter, yeah. \[laughter\]

**Johnny Boursiquot:** Jaana, welcome back to the show. You've been gone for a little while.

**Jaana B. Dogan (JBD):** Yeah, I took a couple of weeks of breaks, I think, here and there... I'm still trying to come back. Last day was my first day at the office, and you know, I was questioning everything... Like, "Hey, am I really qualified to do this job?" \[laughs\]

**Carmen Andoh:** Ooh...

**Kelsey Hightower:** The important question though is does your badge still work? You come back from holidays and you have trouble badging in? That's a sign. \[laughter\]

**Johnny Boursiquot:** It's like, your heart skips a beat, like "Oh, crap. What happened?" \[laughs\]

**Mat Ryer:** Yeah, I've had that... I was using my bank card. I thought I'd been fired. \[laughter\] I couldn't get in.

**Jaana B. Dogan (JBD):** I'm trying to work from home, to be honest. I have this suspicion that I can get fired anytime... I'm just working from home. It's better not knowing. \[laughter\]

**Carmen Andoh:** Just be home anyway. You're like "Whatever..."

**Johnny Boursiquot:** \[00:03:58.10\] Any day could be your last... That's rough. Carmen, how are you?

**Carmen Andoh:** I'm well. I need a vacation from my vacation, I think... But it was nice to get time off.

**Johnny Boursiquot:** That's good, that's good. Like Kelsey says, it's time for reflection, and I think we should do a little bit of that for 2019. It's been a big year for cloud, I think... And I don't think there's anybody here more qualified than Kelsey to talk about the impact that things like Kubernetes, and things coming out of AWS, and all the other cloud providers and things that they're doing... It seems like they're pushing the boundary in terms of what makes folks productive.

So operators are impacted, developers are impacted, and when I try to wrap my head around everything going on in the industry right now, it's kind of hard to see -- I'm seeing blurred lines... And Kelsey, maybe this is something we can start with. I've been an operator and a developer, so I kind of get a sense on both sides of what lens to look at things with... But if you're a traditional operator, what does technologies like Kubernetes, for example - how are they changing life for you? And on the other side too, as a developer, what should you care about? Or is there even a line?

**Kelsey Hightower:** Yeah, so the good news is I think 2020 the hype is now just dying off. This is good. We are finally getting to the point where most of the new projects are just remixes of the existing ones. Communities are merging; we saw this with the OpenCensus and OpenTracing communities, to OpenTelemetry...

So now that we've done a lot of experimentation, I would probably say the last four years have been just trying ideas, from infrastructure all the way to developer tooling. And now what we're starting to see is that the buzz is kind of dying down; now people are more focused on production... And I think one good indicator is -- probably we can't extrapolate big, but when Docker canceled their conference coming up in 2020...

I remember 2,5 years ago if you were at DockerCon, it felt like that thing was never going to stop growing. It was at five or six thousand people, and there was just no end in sight... And now they're moving to a virtual conference. Now, there's probably all kinds of reasons for it, but my guess is probably the attendance started to drop or shift to other events... But that's a good signal to me to indicate that now we're in this other phase. We have all of these tools, let's just put them to use.

Now we're getting to that part I think I like... When infrastructure gets boring, something else will become exciting above it. Right now we're starting to be in that phase. So I think if you're a practitioner looking at all of these things, you've made it. We're on the other side of the hype curve now. You can stand back and just start to really listen to what people were doing in production, and you're gonna probably see a lot of good examples in the wild of what people actually are using, versus what's being said out loud, or inside of that hype cloud that we just came out of.

**Johnny Boursiquot:** So are we still at the stage then where things like Kubernetes are -- we're still trying to figure out how we should use them, what we should use them for? Obviously, you can approach this from different angles - if you're trying to build a platform for folks to use, or if you're trying to run your own data center, for your own business purposes... I think there's still some confusion around who should really be adopting and using Kubernetes and for what. Are we still in that phase where there's some confusion around its use cases?

**Kelsey Hightower:** Some people are, but luckily for me, I was there from the very beginning, and now I'm stepping back and reflecting. If I reflect back, Kubernetes is about the how. Everything underneath is still the same. The kernel is still there, the virtual machines were still there... What we did was change the how.

Before Kubernetes, Puppet, Chef or Ansible was your tool of choice to do some of the same things with multiple machines. Kubernetes changes the how. Some people call it abstraction; we introduce things like pods, we leverage some distributed system principles around service discovery... But all of that is just the how. How do you find your applications, how do you configure them into the load balancer?

\[00:08:06.00\] Now, the interesting thing here is a part if that journey - we decided to take the Linux machine and treat it like the hypervisor. So we moved networking, security - all of these things that you typically got from a cloud provider like IaaS, or if you're on VMware on-prem, VMware already had these things to integrate your machine to the rest of the environment. We had to go rebuild all of that in the Kubernetes world, and we got pretty far. We did a decent job of networking; it's still confusing for a lot of people to be managing bridges on Linux machines instead of having the underlying networking fabric... And then we also did another thing - we took the application packages, container images, and we decided to just let them run side by side on the kernel, and we spent the last 3-4 years trying to securely do that... And that's a very hard problem, because the Linux kernel isn't designed to give you that kind of security for untrusted workloads.

Now we're coming back full circle, where now we're gonna take those container images, some of the things we got from the Kubernetes world aka a pod - one or more containers, their volumes and their dependencies - and we're gonna put them on micro VMs. So we just went five years to come back full circle. We made the VM smaller, but we're keeping the API from Kubernetes, we're keeping the container image, and now we're back to much better virtualization, almost the original purpose of cloud.

**Johnny Boursiquot:** Interesting.

**Jaana B. Dogan (JBD):** Does this mean that individual nodes at some point end up being a virtual machine? We are trying multitenancy... Do you see Kubernetes APIs just replacing all, and each pod probably ends up being a virtual machine in the end?

**Kelsey Hightower:** I can almost guarantee. Guarantees are bad, because people come back and listen, like "Dude, you were so wrong..." \[laughter\] "You were overly-confident." I am overly-confident that we will go back into a world where there will be one pod/VM. But to think we call a virtual machine is dramatically changing. I think Amazon hinted to this with things like Firecracker. We saw Firecracker come out... And for those that know their history, Firecracker comes from the Chrome team, where they decided that they want to isolate things at this level.

When you can isolate things at this level almost using some of the machine-level isolation, then you can actually isolate a web browser tab, Amazon is isolating serverless workloads... Now you're in a really interesting spot, because guess what, one thing we already have - every cloud provider has a really nice hypervisor layer that most people don't see. We already have things like VPCs, Direct Connect... So imagine saying "Let's strip the kernel down by 80%." Strip down the virtual machine; no floppy disks, no things we don't need... And then just pack the container or the pod in there.

That means you could be using the Kubernetes API, but all you're really doing is launching these lightweight virtual machines connecting to the existing stuff... And now we can take the eight years of advancements in the cloud, or VMware on-prem, and pair it with all the beautiful things we like about Kubernetes.

**Johnny Boursiquot:** One of the things I've heard you speak about on a number of occasions is getting to the point where the things that we're moving around as the folks who look after the infrastructure is really data. I think the terminology you used is "infrastructure as data." Can you talk a little bit more about that? What exactly does that mean to me if I'm moving around YAML files today, to try and set up clusters and manage infrastructure? What does that mean to me?

**Kelsey Hightower:** It's funny, people complain about YAML, like "Oh my god, YAMLs... So terrible." And you have to step back for a second. I'm gonna just talk through my journey of this to get to where I get to the concept of infrastructure as data. If you have five Linux machines, the first thing you're gonna try to do is write some Bash scripts. You're gonna write some Bash scripts, some for loops, you're gonna SSH things around...

\[00:12:09.18\] And if you've ever seen people write Bash scripts over time, you go into their home directory and you see files like "Do this stuff 01. Do this stuff 002, but don't use it anymore, because you should be using the other script." \[laughter\] So you have no version controls, you have no semantics, no abstractions. You're just writing Bash scripts.

Fast-forward to configuration management. We get things like CFEngine - big shout-out to Promise Theory - and then we get Puppet, Chef and Ansible, and then they formalize. It's almost like the Ruby on Rails for shell scripting. So now we have this configuration management error and we all start to say "Infrastructure as code." The problem is now you have to test it, people can write any code they want, it's unbounded context, and it's the same problems we had with software - how do you secure it? You're gonna have bugs... it's just all over the place. But it is a better place to be than we were before.

Now let's get to infrastructure as configuration. Now we're removing all of the abstractions into the runtime, so the how. How do you create a load balancer, what goes in the load balancer and how do you remove it? That implementation detail - we're gonna have a lot of discipline and we're gonna move it into these controllers. So if we're talking about Kubernetes, these are gonna be the controllers. If you've been in cloud, you've already done this. We always have control planes that do the heavy-lifting. Same is true for networking - we expose ports and protocols, not the control plane.

So configuration as data - we get to something very similar. Now what you say is "I want a load balancer in this region, pointed to those services. No for loops, no if statements, no programming language concepts." So all you have is a data model. And that data model represents everything that the state machine on the other side can do. Why is this more powerful? Well, when you're working with data, then you can manipulate the data much easier than you can manipulate code.

We've seen this before, in the Go world - there's 10,000 Hacker News posts, "Oh, the same thing, but written in Go." I prefer Go as my favorite language. So every time we do things in a language-specific way, we end up having to rewrite this thing to be compatible with those libraries, and so forth. But when you move to infrastructure as data, we can have these high-level APIs. You can write them in JSON, you can write them in YAML, or if you're an enterprise, you can go XML if that's your thing...

**Johnny Boursiquot:** Oof...

**Kelsey Hightower:** But either way, every tool that comes out from here going forward can translate all the data that your infrastructure is described in, to do something else. That's extremely powerful, and I don't think people have really comprehended what this means going forward.

**Mat Ryer:** It reminds me of actually JavaScript frameworks. A lot of those are -- you essentially have data, and they're applied against a template. And then you just focus on changing that data and mutating the data in different ways. That's what they mean by reactive; the experience reacts. And when you actually work like that, it is sometimes really quite surprising what it does automatically.

If I think about that as an idea applied to infrastructure, it really does, from my point of view as a user of this - that is massive. It is a very different way of thinking about it.

I wonder, in the design then, through the life of Kubernetes - because you know, building abstractions is hard - were there any abstractions that didn't fit, or things that didn't quite work, that had to evolve differently? Or because of the nature of it, you were able to get a good design from the very beginning?

**Kelsey Hightower:** \[00:15:46.21\] This is where I learned the most as a developer, from working in the Kubernetes community - so a big shout-out to Brendan Burns, Joe Beda, and people like Brian Grant, that was a little bit more behind the scenes. The work that they put into the API design -- also someone named Clayton Coleman from Red Hat... They spent so much time on the API design.

When you open up a Kubernetes configuration, you see the API version, and then the API group. And maybe about halfway into the lifetime of Kubernetes we decided there should be a thing called core. What's required to run a container? You need things like the scheduler, you need things like what is the definition of the thing you wanna run, the pod, and you need something like a replication controller. These things represent core, including things like services and so forth. With those core primitives you can build everything else.

Red Hat came along and said "You know what - we can't just give customers raw Kubernetes..." And they have this concept of OpenShift; it's like a PaaS in a box, very similar to things like Cloud Foundry... And they started adding things like deployments, and namespaces. So those two things come from Red Hat. The problem though is they're very opinionated things, like a deployment that does rolling updates a certain way. What if you wanna do something like a blue-green deployment or a canary rollout? The deployment object is very opinionated in how it rolls things out. So we decided to say "Hey, let's slow down for a moment. We can't bring all of OpenShift into Kubernetes. We should probably leave those things on the outside", and I think Brendan Burns came up with this idea of the custom resource definition - this idea that you could just give us your schema, we would generate the rest of the API for you, so all the tooling will work, kubectl will work... And then you can actually implement your own control loops that would then watch for this data to show up in the system, and then you could build your own platform.

So in wrapping, the thing to take away here is that the first system we've built on Kubernetes was a thing to manage containers and services. And then people went on to build things like Kubeflow for machine learning, and Istio for networking and service mesh, all on the same principles - control loops do the implementation, and your data model represents what that control loop can do.

**Carmen Andoh:** Kelsey, are there cloud problems that you can't solve with the CRD approach that you were trying to work around?

**Kelsey Hightower:** This is a really good question, because I go to all of these companies and they're just making CRDs for everything. There are CRDs to take a shower. I'm like "Dude, no. You just literally go take a shower. You don't need to do kubectl apply. Take a shower! Like, come on, we're going a little bit too far..." \[laughter\] I think what people have to understand is that there are things that really work well in a declarative model, and there are things that are a little bit in the grey area.

For example, let's think about a CI/CD build. Typically, with a CI/CD build you're triggered by some action. Someone checked in a bit of code, and then that kicks over or sends a notification to run the build. And if that build fails, then you have a decision tree. Do you retry the build, or do you just alert the user?

Now, let's take that and try to make it a declarative model. If you try to make that a declarative statement, you may define the trigger; if this source repository sees the change on master, then run the build. And then that could be a declarative object that sits there, and the system will then try to behave and represent that. But here's the thing - how do you represent a build failure? That's a very imperative thing. So what Kubernetes has - and it's a very important part of the Kubernetes API - there's a status field at the bottom. This allows us to capture the imperative side effects from the declarative statements we make. So when that build fails, if you look at your status field, it will say "Hey, this build failed for these reasons, but you're never touching the declarative state that you want, the trigger, you just have the results of the trigger." And people tend to mix the two.

\[00:19:47.03\] Some people will put the status as part of the API, and now it's no longer declarative, because I'm not declaring that I want a failed build, so why is it part of the API? It's just an output of the API. So that nuance is really key to getting that right.

When I see people trying to roll a bunch of imperative things into Kubernetes, it gets really tricky on how to build that API without munging the two worlds.

**Mat Ryer:** That's really interesting. So in the event of a failure then, what happens? How do you say what I'm gonna do in this case?

**Kelsey Hightower:** I love this part of Kubernetes... It is on the implementation to eventually get to the state. This is the whole promise theory. The whole promise theory is that I want a load balancer to exist in region A. That's my declarative statement. Here's the thing - it may never happen, but the control loop may have a policy that it's gonna try every three minutes until it does. That's the only thing that you can get from Kubernetes.

So when people say it's taking long, or it's too slow, or let's say there is a failure - well, the promise is I'm going to tell you about the failure, and I'm going to try again with no further input from you, because the declarative statement is already in place.

**Mat Ryer:** And that declarative statement is valid, is validated. So it's not like you're gonna get a runtime error or anything back.

**Kelsey Hightower:** Exactly. So with this set of inputs, I promise you that I can go and configure a load balancer, because I created that contract.

**Mat Ryer:** That's how some managers work with developers as well. They just say "This is the thing. Just go and do it."

**Johnny Boursiquot:** Keep trying.

**Mat Ryer:** "I'll try every three minutes, I'm gonna check to see if you've done it..." \[laughter\]

**Kelsey Hightower:** But you know what? So here's the problem, and you all can probably chime in - I've never seen a set of product requirements so clear that if I did exactly that, everyone's happy. It's like "Hey, I gave you a vague idea of what I want, you did what I asked, but that's not what I wanted. Could you change it?"

**Mat Ryer:** Yes, yes... And of course, it's hard to do, because when we design things, we're doing it at the beginning, often. And I don't think we pay enough attention to the learning we get from doing it. I still think that's a big issue that we have, just on that point.

**Kelsey Hightower:** I'm gonna pull on that thread, because it's very important. Kubernetes has an alpha/beta stable progression, and it's for what you've just said - we start with these alpha objects, so we can actually learn, "Is the API good enough? Is the status field good enough?" And what we often learn is that we get it wrong and we start adding annotations to be this kind of side-channel for the official API. And then we study those annotations, and typically, the right annotations that are applicable to a wide range of problems become part of the official API, and then you have less. So to me, in Kubernetes, the if statements are the annotations. "If this is for NGINX and not HAProxy, then these annotations apply."

**Mat Ryer:** Yes, that's a good lesson for anyone writing tech - that thing that getting things wrong is okay; it's part of the process. I once had a manager who pulled me into his office because he'd look over my screen, and -- I was doing TDD red-green testing; he'd look over my shoulder and kept seeing failing tests, so he thought I was struggling. \[laughter\] So you know, getting things wrong is what we do, isn't it, really? I mean, if you write code that runs the first time, do you really trust it?

**Johnny Boursiquot:** No...

**Mat Ryer:** I go and break it to make sure it's real, or... Yeah.

**Jaana B. Dogan (JBD):** Is there anything like being right, to be honest? We had this discussion at the API design show... You are always wrong. As you gain more experience, you always have more insights, so it's almost impossible to get to the point that you are very confident about the end result.

**Kelsey Hightower:** I think that's why it's really critical to expose as little of the API service as possible in the beginning... Because you can always usually add something, but it's really hard to take away.

**Mat Ryer:** \[00:24:02.06\] Yeah. And there is an art to it, and it's useful in Go - you can do little tricks like putting your tests in the test package, so it's an external package, and you import the main package. That's quite a nice way to see the footprint of the API as you're writing it, and keeps that in mind. And literally, in the autocomplete in the editors, if the list is too long, it gets a bit annoying. Well, that's what it's gonna be like for your users as well... So yeah, keeping everything small, and don't commit to anything too much. And it's about future-proofing things, but you do have to be honest. The whole team has to be really honest about the reality of writing code.

And if you do have influences in the team that perhaps aren't technical or don't think about things in this way, that's when you can get a lot of tension between product, and tech, and these things... So yeah, a part of our mission as developers probably is to communicate and educate on that point. It can be very difficult to do in practice, but it's really valuable... So it's great to hear that Kubernetes as a massive, successful project, has this approach. Sometimes it's wrong about things... I think that's a great lesson for people, actually.

**Jaana B. Dogan (JBD):** Kelsey, you mentioned that you learned a lot from Kubernetes as a developer... I think that Kubernetes has been playing a teaching role, as a teaching tool. Developers know more about the load balancers, networking, all the scaling implementation details, deployment... Some people think that this is an overhead, but I do think that it generally had a better impact to the overall community, and making people more aware of some of the critical design primitives. Do you agree with that?

**Kelsey Hightower:** Yeah, so if you're gonna go build a 30-foot skyscraper, usually all of the elements - the bathroom, the siding, the cooling, the heating - is on one blueprint. Maybe there's layers to the blueprint, but if you open up the set of blueprints for the building, everything's there. It all has to be connected. You need so much power to power the building, but you can't figure out how much power you need unless you know how many rooms, and the requirements.

Before Kubernetes, people were really thinking about software at different APIs. Go to the network switch, you program it there, you go to your load balancer, you program it there... There's no single place where you see everything. And the Kubernetes experiment was "What if you took everything that it meant to deploy an app? The secrets, the volumes, the load balancer, even the \[unintelligible 00:26:42.29\] permissions to even deploy it, and you give it one common set of languages?" We're starting to add security to this - network security policy, Istio policies... And now for the first time as a developer - you're right, we're now putting that front and center.

So you can say "Here's my application. It listens on this port. It needs these secrets. Oh, and I would like it exposed to the outside world with this DNS name. Oh, and if it fails, roll over to this other region." I can articulate all of that now, using a very clean API, and submit it to the system and have it converge to the proper state.

**Jaana B. Dogan (JBD):** Yeah, in the sense that we've been always living in the skyscraper, and we were avoiding what's going on there... But as the architect, you have to realize the truth, and Kubernetes is providing this really accessible API. It's just like you said, it's the common language. Once you know it, you can also extend it, and it's a really good foundational--

**Kelsey Hightower:** I'm looking at getting a new house built from the ground-up. I've always bought maybe a house brand new, right? And I was like "How long will it take to build the house?" And they were very optimistic; they were happy and smiling. They said "We can get it done in a year." I was like "A year? What the hell are you doing?" And they're like "Well, here's the thing... We have to make sure that the land is prepped, we have to go get permits every step of the way. We need a permit for this piece, and we need a permit for that piece... Someone needs to go and check that we do exactly the work that the permit said we were going to do, and we have to make sure that we have all of that... And then building the house - that's roughly the easy part. It's all the other stuff that we have to do..." Because you can't mess up the house and be like "Yeah, the roof is off slightly. Don't worry. We'll ship a patch for the roof." Like, "No, I don't want a patch for the roof." \[laughter\]

**Jaana B. Dogan (JBD):** \[00:28:34.00\] I have a question about this... Does this mean that you need a cloud provider to run Kubernetes?

**Kelsey Hightower:** I love that question. Here's the thing... I meet a lot of people that say "Hey, I have very little experience. I don't know how to manage a Linux server. Hell, I don't even know how to patch a Linux server. But what I wanna do now is I wanna leapfrog all of that and just start running a massive distributed system. I can do it in probably ten minutes, fifteen tops." And I'm sitting there like "Wow, man... That's a bit disrespectful to the industry", because this is not a point-and-shoot camera. There's a lot going on to this. We're talking about the difference between making a movie and filming your child's birthday party. These aren't the same things.

I think a cloud provider just brings to you a promise and a knowledge base that says "Look, we're managing this stuff for thousands of customers. We've learned all of this stuff, we're obligated to make it work as a full-time job, versus finding 10% of my downtime to play administrator." So I don't think you need it; you don't need a cloud provider. But unless you're being honest with yourself -- I go back to some of these teams and they've got like 20 people on their Kubernetes team because that team is responsible for networking, load balancing, security, metrics, AND the application, but they try to put it into the Kubernetes box, when the problem is much bigger than that.

**Carmen Andoh:** Yeah, Kelsey, I was thinking -- when you were using the 30-story high-rise analogy and Kubernetes, and having this one-API-fits-all approach... I think a counterpoint to be made is that because its one API to do all of the things, if you can't encapsulate it into small pieces the way you would for the plumber or the way that you would for the HVAC operator, it can feel overwhelming, and it presents a mountain of complexity.

So when you said "Wait, our managed service provider can take away that complexity and do this for you", that was really a good analogy to extend for companies who think that they wanna roll their own, and saying "Well, if you do, then everyone has to be the Jack or Jane of all the trades." So that's always the counterpart that I hear when I hear "Well, Kubernetes is using a 20-wheeler to carry one package." We've seen that meme on Twitter a lot.

So yeah, this managed service provider seems to be the way to go... How do you feel like once somebody uses a managed service provider, what is the work to do after that? Where should the focus be? And I know this is gonna be not one-size-fits-all...

**Kelsey Hightower:** You know what's interesting? We are a collection of communities of people who can probably do it ourselves. It's one of the very hardest industries to service, because we are selling solutions to people who can actually visualize, or even have the skillset to just do it themselves. So it's very tempting and enticing to just go do it yourself. But think about power. Most people are getting power from a power grid, the equivalent of a managed service. There's some grid by a provider who knows what the hell they're doing, and most people could consider that overkill, that we have these massive grids... And we run a line into your home, so you can just flip on the light switch.

That works at scale, because imagine if everyone tried to build their own grid. This would be a straight-up disaster; people would be getting electrocuted all over the place, they'd all come up with some group therapy, like dev ops, to talk about what happens when the grid doesn't -- you know, like "Hey, I've been burned..." Everyone's walking around with half an arm, because they don't know how to run power grids. And there'll be a bunch of conferences about how to run power grids, and there'd be 20k-30k people talking about how to best manage power grids.

\[00:32:21.12\] This is what we're seeing in tech right now - lots of people are trying to be cloud providers part-time, and without the same level of budgets. So as the technology advances, eventually it starts to make sense. And maybe there's a trust thing that's missing. With power, we assume that it's always going to flow. And when it stops flowing, it becomes like a national emergency, if we have a blackout, or something like that.

**Mat Ryer:** Yeah, it's like The Purge. \[laughter\]

**Johnny Boursiquot:** That's a bit extreme...

**Mat Ryer:** I'm surprised how quickly it becomes The Purge, once we have a power cut. \[laughter\]

**Kelsey Hightower:** Well, okay... That's an extreme thing... You're right though, because people do feel like there's chaos. If a region goes down, the number of people who go to Twitter and just start going crazy... Like, you're right.

**Johnny Boursiquot:** Yeah, so along the lines of building our own power grids - is it fair to say that there's a bit of FOMO with the people who could do it themselves? Is it FOMO that's driving them to say "Well, I should try this, because heck, if I'm being selfish, this is a career thing. I wanna know how to run Kubernetes clusters, and do this and that..." So now you have this sort of resume-driven development, as we tend to call it. Even in the back of your mind, even that little voice in the back of your mind saying "Yeah, why don't you push for it? You can do that, right?" \[laughter\] Is there a bit of that?

**Kelsey Hightower:** I'm the world's biggest hypocrite right now... I'm starting this podcast, and I've got some recordings, I've got the dope mic and I was like "I need to host this podcast somewhere." And I've found all of these services; they're like $10, some of them were even free. They were like "You just come in, fill out this form, they'll host your RSS feed... You can even upload your MP3, and you're done." I was like "Nah, man... We ain't going out like that. What I'm gonna do is write XML by hand, read about all the tags..." I got my RSS XML, I put it on Google Cloud Storage, I've got my MP3, I did the ID3 tags for the MP3, I put a CDN in front... Just so I didn't have to use a managed service. Because you're right, I had this appetite for "I wanna know exactly how podcasts work. I wanna have full control, I wanna back up my data..." I don't want some limit telling me I can only stream 50 concurrent streams at a time. I was like "You know what - I know what to do here, I've got this." So I spent two days to save $12. \[laughter\]

**Carmen Andoh:** Oh, my god... I think you've just explained our collective zeitgeist or pathos as an industry. Like, why our ecosystem is an embarrassment to \[unintelligible 00:35:09.22\] In this new decade we need to innovate, we need to make Kubernetes boring, we need to experiment, we need to move up in the abstraction chain, but yet we also need to fundamentally know how things work. And that's the paradox we're in.

**Kelsey Hightower:** Yeah, and I think, honestly, if I were to recommend this to someone else, I think I value the knowledge of how podcasting works than the service... And yeah, you're right, our industry really appreciates the knowledge and the power that comes from the knowledge, versus what the business actually needs... And I think that the catch-22 - your business needs to survive, needs to grow, needs to be efficient, and sometimes you can leverage your cloud provider and make margins on top. That's just good business. But when we're at the helm, making decisions, we're like "Yo, forget good business. I'm about to deploy Kafka to process 25 messages a year." \[laughter\]

**Carmen Andoh:** It's nerd pride, right?

**Johnny Boursiquot:** Seriously, seriously...

**Break:** \[00:36:17.11\]

**Johnny Boursiquot:** We've been talking about the API for some time, and I think there's a reason for that... Is it fair to say that the learnings, the journey that we've gone through to have the Kubernetes API as it is today - is that really the crown jewel? And this is why I'm asking that... We have projects that are even looking to make Kubernetes simpler; one of the things you're gonna hear over and over is that "Well, Kubernetes is a complex system. There's a lot of moving parts. You've just gotta know what you're doing" kind of thing. And yeah, we're gonna have the people who are gonna geek out, and they're gonna go through the manual, they're gonna figure out "Okay, this knob goes here, and this one attaches here..." They're gonna figure it out, great. But you have projects that are trying to simplify that, using the same API, the same abstraction. I think of things like K3S, versus K8S. There's that common ground that is the API. Is it fair to say that the Kubernetes API itself, as we know it today, is really the crown jewel of this project?

**Kelsey Hightower:** Yes. And the reason why it's important is that Kubernetes makes it easy to have hyper-specialization. The internet is one of the best examples of hyper-specialization. Some companies just make web browsers, because you can rely on the specific protocols to show and display web pages. Some people go to Best Buy and you buy a modem and you screw it into the wall, and now you're online... Because now everyone can just hyper-specialize, because the connectors, their protocols are so standard. But remember, the internet is just massively complex, but the things it exposes means we can specialize.

So if you are an ISP, you view the internet differently than someone watching Netflix. It's just a totally different ball game. Kubernetes is meant to be the same thing - if you need to run at a global scale, meaning "I just need to be available everywhere. I need to be able to pick and choose my provider of choice", then that's gonna require a much more complex system to lay on top of that. It's infrastructure. Now, that's for people implementing that kind of capability. You can either buy it, or you can build it, but you don't have to start from scratch. You download Kubernetes and you start from there. And then that becomes implementation details.

So when I lay it on to of my infrastructure, if I've gotta lay it on top of GCP, you're probably better off starting with GKE. If I have to lay it on top of Amazon, you're probably better off starting with EKS, because all of the integration work to make it all really run underneath - that's the hard part. It's like what Linux and distros do - the drivers, the default package managers etc. Linux is also complex.

On the other side, as a developer, let's assume that either your team or whoever you bought Kubernetes from is doing a good job in terms of keeping that thing available. You get to then deal with a different API.

\[00:40:07.16\] You get to say "Kubernetes, run this. Kubernetes, run that. Kubernetes, tell me when that is no longer true." And for some people, that's all they know about Kubernetes. They've never installed it before. All they know is that if you give it things, it runs them. And when things aren't working, here's how you leverage the API to troubleshoot them. We have to do a better job as an industry of separating the two.

**Carmen Andoh:** Well, what about the future? I mean, we're getting better and better at having managed service providers to be able to help you get jump-start it, and provide value to the business... But I know you've also talked a lot about *Serverless*, and maybe that kind of form of compute. Can you talk about maybe what this decade should bring, and maybe *Operators* and why would they choose that instead?

**Kelsey Hightower:** Yeah, so the thing about serverless - I think that hype cycle will be very short, by design, because they have the right focus. Their focus is to make something useful, without managing the server infrastructure underneath it. That means that there's no reason to have long hype cycles.

Think about it - storage. I just upload some files. There's no need to have *StorageCon*. I upload the files. I don't really care how you're storing my files, I just wanna make sure that they're there when I need them. And when you look at the service philosophy, it's more about the APIs and getting things done than implementing the system underneath. So now we're asking ourselves, "In the future, what else is going to get the serverless treatment?" We've seen it done for email, we've seen it done for storage, we've seen it done for the internet... Most people use the internet in more of a serverless model.

So right now the last thing that's really standing are databases and compute. These are the two things that just won't die, for the things we've talked about earlier - people believe that they can do it themselves. One day I believe that there will be a CDN-like database. CockroachDB hints at this, the Spanner team also tries to provide this for customers... But imagine a world where you go and you put your data in the thing, and it's just available everywhere. That's going to be a game-changer, and maybe people may not wanna deal with a database service individually anymore, because they just don't make sense.

**Carmen Andoh:** Yeah, it feels like sooner or later the core competency of companies is not to run Kubernetes clusters, in the same way that we're not running our own data centers anymore... And that core competency is gonna shift elsewhere.

**Kelsey Hightower:** Or just make sure you get a lot of value from doing that yourselves. There's lots of companies where running a data center does make sense. If you think about what I think may happen, someone's going to collapse some of the layers. I remember when Oracle -- I've worked at enterprise a lot of my life before going to the startup world, and... \[laughter\] Actually, you know what - what makes me the most valuable now is I had that context of reality. And having these AIX boxes, or Solaris boxes running Oracle, and everyone just praying at the server not to go down... And when that happens, it becomes a very complex thing where you start to have 50 Oracle DBAs to manage two database servers; tweak and tune indexes, deal with the foul systems and upgrades...

And then Oracle did something amazing. Ten years latet from my initial exposure to Oracle, they came out with the Exadata. They're like "Alright, that's enough. We're gonna wheel in this refrigerator-sized thing. And it has the storage, the SSDs, all the RAM... And you're gonna close the door. Now, here's the thing - if you open the door, don't call us. Leave the door closed; don't mess with it, don't devops it, don't run Kubernetes on it, nothing."

**Mat Ryer:** Don't even look at it.

**Kelsey Hightower:** \[00:43:52.20\] Yeah, if it look at it, it costs extra. \[laughter\] They send you photos of it, and you pay the invoice, so you know it's there. But the key there though is that now people just start to focus on using the database, and not managing the database.

**Mat Ryer:** Yeah, I mean, that's me. That's my whole approach. It resonates a lot, because when I'm building things, I wanna just focus on the bits that are important or that are unique, that I'm doing. I really don't want -- I mean, if I could just get away with just stitching some things together to build a product, then I'm very happy doing that.

I use Firebase quite a lot. I'm working on a new project, and we've chosen Firebase; we're doing experiments with it... And technologies like that, alongside other things like App Engine and things - it takes away a lot of the things I have to worry about. And it is slightly abstracted, and there are times when it doesn't quite fit perfectly, of course... But yeah, I do think that's the right approach, really. I'm not gonna add much value by doing these things myself. I don't even get that thing, that nerd pride thing, where I think "Oh, I'm really smart because I made this thing..." So I'm definitely not gonna be doing that.

**Kelsey Hightower:** If you're listening to this and struggling with this concept, imagine you work in the IT department and you hire ten new people a week. You give them their laptop, and you give them the desk assignment. They go sit down at the desk, and you say "Hey, before you can get online, we practice devops around here. Here's a \[unintelligible 00:45:32.07\] cable and here's some raw Ethernet... And here's two in clips and you only get two so if you crimp this thing wrong you don't get online." And you lay the kit at their desk and say "Hey, make a Cat 5 cable, remember the crossover in the middle, and then you can get online."

And people will be sitting there like "What the hell are you doing? I have work to do." You're like "Mm-hm. You need to make a patch cable first, so you can get online." That is what we're asking developers to do every time we expose infrastructure to them at that level.

**Carmen Andoh:** Yeah. They need to work at that highest level of abstraction, as Mat was talking about. Firebase does that for him.

**Mat Ryer:** Yeah. It's really about the important bit. What's important for what I'm doing. Where's the value that I'm bringing. I think also we do a thing which I think might be necessary, which is kind of like ignorance-driven development as well. When people see the "finished" product, or whether it's a good user experience design or something - when they look at that, it just seems obvious, because it's matured, it's been through the pain, the process of figuring out the right thing... So it looks easy. That's the thing. We're kind of ignorant about things. I think if we knew everything that was involved in a product before we started it, we'd never start anything, because it always ends up being really hard and really complicated, always. Even very simple projects. So we kind of need that (don't we) naivety at the beginning, and that ignorance...

**Kelsey Hightower:** Well, I think it's hard, because so far in the industry we've attached negative terms with specialization. "Silos are bad. Not being a wider range of skills are bad." I don't think that's necessarily true. If I hired someone to do development, I wanna get them to focus a lot on development. If I'm in ops, I'm hoping part of my job is so that they can focus. There's nothing wrong with focus. Maybe there's something wrong where I'm not able to help you focus, because we need to collaborate to get there... But once the collaboration is done, can we not serialize the results, so that tomorrow we don't have to go through this again?

I think the goal is I want people to be able to hyper-focus and be the best person they can be, while not preventing them from learning other things if that's what they choose.

**Carmen Andoh:** \[00:47:58.00\] Well, you said in your Oracle experience they collapsed layers so that people could focus on a specialty, rather than all the other layers. And that particular specialty was still very productive and fruitful, and we've had lots of developers still working on it. So even if we were to collapse layers, we're still gonna find more work to do.

**Jaana B. Dogan (JBD):** I feel like maybe specialization is -- there's some stigma; people don't necessarily wanna specialize because tech is changing so fast. If you just know how to wire the cable, there's no guarantee that you'll be able to take it to the next level. In tech, we change the way we work every 2-3 years, so I think that's one of the main reasons people try to avoid to specialize.

**Kelsey Hightower:** You're right, specialization is a risk. If you over-specialize, you may find nothing to do. So I think a lot of times we take turns being specialists, even at the same job. You may specialize in QA for three months, and then you may specialize in development for another three months, and then when you step back, you say "Hey, the last year I've grown in three areas." But I typically like to focus, when I'm working, on one thing. Like, "Hey, I don't wanna play infrastructure person while I'm trying to figure out how to do my podcast."

**Mat Ryer:** Yeah. The same applies for limiting scope, as well. If you try and do too much in a product, you kind of can only touch the surface on everything... Versus if you strip it way back and limit the scope as much as possible, you can really do a great job on those things. It's kind of -- the way to be a 10x developer might be to divide the workload by ten. I'm not a mathematician, but I assume that works. \[laughter\] We'll edit that out if it doesn't.

**Johnny Boursiquot:** Good luck. \[laughs\]

**Carmen Andoh:** I think that is the premise of the book Essentialism, Mat, if you've read it... It's by George Mckeown. But it's true. I think that's kind of where I want infrastructure to go. I mean, I like that we've been so low-level, but when Kelsey started off the podcast saying that it's finally kind of getting boring... You know, I think that that means this - that we've collapsed some layers and we're finally letting people get on with solving real problems for their business.

**Kelsey Hightower:** And we see this in the runtime space quite a bit... Like the Go project in general - we have a very massive standard library that most people don't really think about implementing the HTTP protocol from scratch, to import net/http. And there's still room for improvement for higher-level things, but I think the programming world has really come to the conclusion that you need good, standard libraries, and that you kind of need a second layer of good, standard common libraries that everyone just uses, before people start writing their own libraries for very common things.

**Mat Ryer:** Yeah. I do think it applies all the way up, as well. There's Hugo, that static site generator that was started by Steve Francia, and the Buffalo project, which is a kind of hyper-example of that, where that is extremely high-level and abstracted away from a lot of the other things that are really going on in that application... And the evolution of that - I know that they are working towards a v1 release, and... It's that same kind of principle really, that you don't necessarily have to build all the things. The point is to get something good done, and then get some value from it. Get people using it. You learn so much by doing that. I never can stress it enough.

**Break:** \[00:51:45.06\]

**Johnny Boursiquot:** So we're coming up on our time with Kelsey, and it's been awesome having him... But I'm also interested in perhaps maybe something controversial from Kelsey.

**Kelsey Hightower:** Let's do it.

**Johnny Boursiquot:** We're trying to introduce a new segment to this show, that focuses on unpopular opinions.

**Jingle:** \[00:54:00.24\]

**Johnny Boursiquot:** Now, I know a lot of people like most (if not all) the things Kelsey says, but I'm interested in hearing something that perhaps folks may not like from Kelsey.

**Kelsey Hightower:** This is where you have to bring in the unpopular opinion, and let people comment on it. One unpopular opinion that people disagree with me a bit is -- there's two. Don't run stateful things on Kubernetes. That's a very unpopular thing, because people wanna Kubernetes all the things, and I'm just saying "But why?"

And then the second one is "Monoliths are the future." Because the problem people are trying to solve with microservices doesn't really line up with reality. Just to be honest - and I've done this before, gone from microservices to monoliths and back again; both directions. Most people say "Look, we lost all of our discipline in the monolith. We just started creating classes, this person went and bought the Gang of Four book, came back and started doing design patterns and then quit, so half our codebase is doing this thing over here..." So now it's a nightmare.

Now the codebase it's so bad, and you say "You know what we should do? We should break it up. We're gonna break it up and somehow find the engineering discipline we never had in the first place." And then what they end up doing is creating 50 deployables, but it's really a distributed monolith. So it's actually the same thing, but instead of function calls and class instantiation, they're initiating things and throwing it over a network and hoping that it comes back. And since they can't reliably make it come back, they introduce things like Prometheus, OpenTracing, all of this stuff. I'm like "What are you doing?!" Now you went from writing bad code to building bad infrastructure... And what you deploy the bad code on top of.

\[00:56:15.01\] There are reasons that you do a microservice, so to me a microservice makes sense in the context of you're a bank, and you have this big monolith that does everything. Then mobile comes out. You wanna do mobile banking, but it requires a different set of APIs. You don't have to add that to the monolith. You can go create a new application that handles most of the mobile concerns, and then connect back to the existing infrastructure to do its work. That makes sense to me. But this idea of microservices are a best practice - it seems to be unpopular with most people's initiatives.

They're like "Oh, we're bringing in Kubernetes, so we can do microservices. We are going to rearchitect everything" because it drives a lot of new spend, it drives a lot of new hiring... So a lot of people get addicted to all the flourishment of money, and marketing, and it's just a lot of buzz that people are attaching their assignment to, when honestly it's not gonna necessarily solve their problem.

**Mat Ryer:** It's so true that microservice architectures that I've used - the components are coupled anyway. One message from one thing, if it doesn't go into the other component, or the other service, then your thing doesn't work. It's coupled... They are. It really does make sense.

What about the practical teamworking aspects? Because one of the benefits of having microservices is you can kind of break your teams up in that way, and have the teams working somewhat independently.

**Kelsey Hightower:** Now we're talking about the problem with merge conflicts. At least my experience has been "How do we avoid merge conflicts? I know... Let's start another repository. Let's have a better API contract." We've been so bad at language-level API contracts, we decided to leverage things like JSON and RESTful interfaces to give us a much harder contract. They're very hard to violate, because they're so rigid. You can't reach behind a class and call a method, because you can't do that with REST. It's not easy.

So I think what happens in the team aspect is -- I like the idea of modules. When I saw the way Go did modules - you can actually have separate teams building modules, but that's independent of how you compile the modules into the final deployable.

At CoreOS I remember we used to do this a lot, we used to have a lot of individual modules, and then package main is where the collaboration happened. I would bring in my module and maybe add a route to it, or something. But once you touch that file, it's only because you're saying "Hey, I'm now part of the contract. Here's my route", but then I would just go do the rest of my work in the module, and allow the build system to take all of our work and combine it together. And if you're using tools like Bazel, it could be build one big binary, build three little binaries, with flags... But either way, that's a separate concern, the way you layout your source trees and how you develop code collaboratively, versus how you deploy the results of that effort.

**Mat Ryer:** It's funny, because I'm just starting a new project now, so I get to use all of my past experience on a greenfield project, which tends to be quite a unique thing to do. It's rare.

**Kelsey Hightower:** Your resume is about to get amazing. \[laughs\]

**Mat Ryer:** Yeah. Our approach is always to just kind of -- we'll start simple, with the simplest thing, so that we can get it working, and then let patterns evolve or emerge, and let different problems present themselves, and then you can solve them along the way. And it turns out - in the beginning at least - this is gonna be a kind of a monolith, and there's so far no problem with that.

Another way to solve some of the other problems we talked about is just not to have loads of people working on a project. It's not always possible, of course, but when it is, that's a great way to cut out a lot of problems. If there's just two or three of you building something, it's so much easier.

**Carmen Andoh:** \[01:00:14.12\] Yeah. The communication overheads to me, in any distributed project, are always the biggest ones, the biggest things that you need to solve for.

**Johnny Boursiquot:** Indeed.

**Mat Ryer:** Yeah, I actually pair-program exclusively with my business partner, David Hernandez. We only pair-program, so we immediately both know everything about the whole thing and we're basically doing the whole stack... But it's small enough, at least at the moment, that that's okay. And if you can keep it small, I think you should. It's a goal that you should have. It pays dividends immediately; I can't advocate for it enough. It's not always possible, of course, but it fights a little bit this instinct, particularly if you do raise money and you're VC-backed, or something like this; you wanna hire, and you want to build the team, because that's what you do... But I think it's worth just taking a step back from that; maybe you don't need to do it that way.

**Jaana B. Dogan (JBD):** To be fair, I worked for a company -- I was the only developer, and we were developing ten microservices.

**Mat Ryer:** \[laughs\] YOU were developing ten microservices.

**Jaana B. Dogan (JBD):** \[laughs\] Exactly, yeah... So just for the sake of following the microservices pattern, we were doing it. And I think this is a very common pattern in the industry.

**Johnny Boursiquot:** Indeed.

**Carmen Andoh:** Well, we look left, and we look right, and we say "Who's doing what?" I mean, really... That's also why we use common libraries. I remember working in a company and saying "Why are we doing testing this way?" and it's because another company did it. The real unspoken truth about our industry is we sometimes look left and right without any real sitting down and reckoning with what works for us.

**Mat Ryer:** Yeah. Everything we build, if you spend long enough on a project, you end up hating it. So whatever you've done, you've got something you hate. Oh, we had a monolith; we hated it. We did microservices, we hated it. If you spend long enough on a project, you're gonna hate it... And I think that drives a lot of decisions. You just want something different, you just want something fresh sometimes...

**Johnny Boursiquot:** Novelty. \[laughter\]

**Carmen Andoh:** Humans crave novelty. Humans absolutely crave novelty.

**Mat Ryer:** Yeah, indeed. That's why I'm wearing these glasses. They're not even real. \[laughter\]

**Carmen Andoh:** Well, I took a screenshot. I'll share on the Twitters... \[laughter\]

**Johnny Boursiquot:** Wow... Alright, so this has been an awesome episode. Thank you again, Kelsey, for coming on, and for regaling us your tales of putting together an entire infrastructure for your podcast to save $12... \[laughs\]

**Mat Ryer:** Are you gonna open-source that, by the way? \[laughter\]

**Kelsey Hightower:** I am. No, I actually have a set of command line tools that I will be publishing... Because I also do some things like translate the audio, using some of the cloud APIs... You know, you've gotta move it to the next level. You'll see that coming soon to GitHub.

**Carmen Andoh:** You're a nerd in the best way, Kelsey.

**Mat Ryer:** What did you write it in, Kelsey?

**Kelsey Hightower:** You know what, I just fell back to Java. Go just wasn't -- I'm joking. It's written in Golang. Come on, what are you talking about? \[laughter\] It's gonna be written in Go, of course.

**Johnny Boursiquot:** Ohhh...! Troll of the year, I hear. \[laughter\] Awesome. Well, thank you all for being a part of the show, thank you all for listening, and we'll catch you on the next GoTime.
