**Erik St. Martin:** Okay, we are back for another episode of GoTime. It is episode number 20. Today on the show we have myself, Erik St. Martin, we also have Brian Ketelsen here - say hello, Brian.

**Brian Ketelsen:** Hello!

**Erik St. Martin:** And Carlisia Campos...

**Carlisia Pinto:** Hi, everybody!

**Erik St. Martin:** And our special guest today should not be unknown to anybody. He's really well-known in both the Go and Kubernetes community. Please welcome Kelsey Hightower.

**Kelsey Hightower:** Hey, I'm happy to be here.

**Erik St. Martin:** For those who may not be aware of who you are, would you like to give a little background on who you are and what you're working on?

**Kelsey Hightower:** Awesome! My background is I'm currently at Google, working on Google Cloud technologies, mainly around some open source projects that I've been a fan of for a very long time, mainly Golang and Kubernetes, which is kind of a distributed systems framework for doing Google-style deployments - that's a quick way to sum it up. I also spent some time with CoreOS and Puppet Labs.

I consider myself a syst admin who can code.

**Erik St. Martin:** \[unintelligible 00:01:32.18\] the syst admin part; you're more a syst admin than a coder.

**Kelsey Hightower:** Well, for the last five years I've been doing primarily full-time development amongst other development roles, but I also started my career as a system administrator, so I always bring that level of thinking into it. If I'm writing code that I'm going to connect to a database, I'm going to implement retry logic; I'm not gonna throw that over the wall, because I know who sits on the other side of the wall.

When I'm writing code these days, I'm always keeping that... Not just building the app, but who has to actually manage the app and what does that side look like? I'll never forget where I started in tech.

**Brian Ketelsen:** Doesn't that kind of fit into the serverless category? Everybody's talking about serverless computing, which drives me insane; I think we've covered that a couple times. Don't we have opsless now, where you're just throwing it over the wall to Kubernetes and nobody has to worry about it?

**Kelsey Hightower:** Yeah, so to me Kubernetes is what happens when ops people take their expertise and codify it into a system. To be honest, it's gonna take ops people or someone in an operational role to deploy Kubernetes and keep that running and upgrade it. We saw that from an announcement today about the whole Pokémon GO stack. The Google SREs did a lot of work in upgrading them underneath the covers.

So you always have ops, but I think even in a system like Kubernetes where you're not necessarily interfacing with an operations person to get a deployment done - you kind of have an API for that - but there's still some operational thing that you can do to leverage even a system like Kubernetes. The way you log, the way you retry connections, the way you handle yourself in a clustered environment are all operational concerns that I think being a syst admin in the past really helps me embrace these platforms when they show up.

**Erik St. Martin:** And learning to create abstractions - that's one of the beauties of Kubernetes... We've had the virtual machine world for a while, that kind of started getting people used to being abstracted from the physical hardware, and now we're starting to be able to abstract people more from kind of the cluster operation side of things where they don't really have to be concerned with all the failover and things like that.

\[00:03:47.08\\\] But like you said, you still have to focus on how you retry your logic and making sure that you're doing things in an item-potent manner, but you don't have to be so concerned with your failover strategies and scaling as much, because a lot of that is handled for you.

**Kelsey Hightower:** Yeah, I think Kubernetes can really appear to people kind of like a Go runtime. Most people don't even know the Go runtime is there; they have the statically linked binary, and a lot of people forget that the Go runtime just happens to be embedded in there and handles the garbage collection. It handles scaling across multiple cores for us. And Kubernetes is very much that way. You put Kubernetes on top of a group of servers instead of a group of cores, and Kubernetes' job is to run your application in a way where you don't have to think about garbage collection. When you delete an application from Kubernetes, under the hood we're cleaning up the images and processes, making sure that resources aren't being wasted.

Just like we do in the programming world, I think Kubernetes represents putting a runtime on top of infrastructure.

**Erik St. Martin:** That's actually a really interesting way to look at it.

**Brian Ketelsen:** I've heard several people on Twitter talking about Kubernetes almost being analogous to the Linux Kernel, or the cloud. How do you feel about that concept?

**Kelsey Hightower:** Yeah, it's one I repeat quite a bunch. I think Mesosphere really made that term popular. I've read about it years ago in a white paper from Urs at Google about the data center as the computer, and if we're starting to subscribe to that notion - the data center as the computer - then it needs a kernel, it needs an operating system. I'll be talking about this at one of my keynotes coming up here at KubeCon, this very idea that if Kubernetes is a kernel, then what would a system call interface look like? And to me, that's where we start to get into applications that deploy themselves.

On a UNIX system you launch an application and it will bind to a socket. In Kubernetes, a deployed application can create a load balancer with a public IP address, and clients can bind to that. We wanna scale out... On a machine you can create multiple processes; in things like Kubernetes we have APIs for that. On a UNIX system we have a syscall interface; maybe you interface that with some libc or something. But in Kubernetes it's just a REST API that lets us do very similar semantics you would do on a regular operating system; we just do it at a cluster level.

I think Kubernetes does a great job of fulfilling the contract between hardware, in this case multiple computers, and software - your application running in the cluster.

**Brian Ketelsen:** So what do you think it is about Go that makes Kubernetes so special? Do you think there is a good relationship between the fact that Kubernetes is awesome software and it's written in Go?

**Kelsey Hightower:** Yeah, I think a lot of people... The programming language, or even the spoken language - my wife is a bit of a linguist herself and she ESOL here in Portland; I think the language and the community that surrounds those languages influences the way you think and build things. In the Go world it's very easy to build these cross-platform, statically linked executables, and if you think about the way Kubernetes is deployed, we have a bunch of independent executables that can move at various versions, or we can upgrade them as we will, and it's really built around the way Go works. We have these small binaries that we just drop in or replace to do upgrades, we are not afraid to do things using some kind of parallelism or concurrency... Most of the components in Kubernetes are able to scale because Go really makes that super easy. We don't have to play a bunch of tricks with our API server or tricks with the agents.

The other benefit is most of the tools we rely on in Kubernetes - Etcd, Docker, some of the other plugins - it just so happens that they are also written in Go. So we have this strong ecosystem that makes Kubernetes special, mainly the community, and most of them have Go skills either from Docker, Etcd, and those skills transfer right over to Kubernetes with little effort, which has been really key to our adoption.

**Erik St. Martin:** \[00:08:01.28\\\] I think Flannel is also written in Go, isn't it?

**Brian Ketelsen:** Yes.

**Kelsey Hightower:** Yeah, Flannel... Pretty much every tool in the stack - Weave, Prometheus, InfluxDB... You name it; almost everything that's being used, even Fluentd, I believe. So it's across the board, we seem to just land on tools with little effort just happen to have a chance that they're written in Go. Vault from Hashicorp... It just goes on and on.

**Carlisia Pinto:** So are you using a plugin architecture for Kubernetes?

**Kelsey Hightower:** With Kubernetes we embrace the whole distributed system model. There are parts of Kubernetes that do have a plugin model. If you think about the agent that runs on the machines, there's somewhat of a plugin model there. We interface with different container runtimes - Rocket or Docker. On the API server, the plugin architecture is more of a contract with APIs. If you wanna build a custom scheduler, you don't have to recompile Kubernetes. There's no monolith binary there. You can just build another scheduler, and as long as you conform to the APIs and you follow along there, you become a first-class citizen in Kubernetes.

We like to think of plugin models as two different things. Some things that are local to a particular component or service, you'll see more of an in-process, in co-base plugin model to extend the system, but we're moving more and more towards a model where all functionality extensions could be done with external binaries that interface via a well-defined API contract.

**Carlisia Pinto:** Gotcha.

**Erik St. Martin:** Yeah, so when you look at Kubernetes from kind of like a generic perspective, there's resources that are managed, and then there's generally some sort of service or component that's responsible for watching, Etcd, for changes to that resource, and then reconciling the cluster - updating the pod or things like that, based on what it's observed as the changes.

So to Kelsey's point, you'd have a pod that's been submitted to the API and it's sitting there and it doesn't actually have a pod running. Well, the system noticed that that's been added to Etcd, and then the scheduler basically finds the ideal node to put it on, and then it finds the resource that's in Etcd to that node, so that it knows that it's assigned. Then basically we come back up for scheduling. You can kind of replace any of these pieces.

Another concept is a replication controller. It kind of sits a layer above a pod and says how many of those you need to have running. There's basically just a loop that's running and watching for changes to the cluster, and basically queries a label to see how many of them are running, and then fires up another pod. So you can kind of inject yourself in any of these points and create your own systems out of it, or tweak the behavior to be more in-line with your use case. This is kind of what I'll be talking about at KubeCon as well, thinking about things in those terms where it's not just deploying an application, but building applications on top of it. Because you can kind of replicate these same concepts. I have some resource definition of something I want, I'm asking of the cluster, and then I have some sort of controller or scheduler that's reconciling the cluster to move toward that desired state.

**Kelsey Hightower:** Yeah, I think if we draw connections to the Go community, it's just like some function returning your channel. The implementation details about what's coming through that pipe, that's implementation detail, and I think the observer - just like in Kubernetes, these objects can be observed. So if you're listening to a channel and you get a strut from that channel, what you do with it is up to you. It's a very similar model in Kubernetes - multiple processes are watching for things coming out of essentially a channel, and taking action and also responding to change the behavior of the overall system.

**Brian Ketelsen:** \[00:12:10.23\\\] Kubernetes was one of the first times that I saw a system where you described resources in a desired state, and saw that reconciliation process in the background. That's really interesting to me. Have you seen patterns like that prior to Kubernetes, where you say "This is what I want, go make it happen", as opposed to a model where you just make a request for a thing that happened? I've never seen that desired state before with a reconciliation model.

**Kelsey Hightower:** I think we've seen this in a lot of somewhat declarative systems with a DSL in front, like Puppet, CFEngine, Chef - all of those tend to have an intermediate state where you as a user, and in those cases infrastructure as code, you would write in these DSLs, and they had a compiler that would compile it down into a service catalog. I think the difference with Kubernetes is that Kubernetes is more of an online system where you're sending state changes to a central authority that has consensus amongst all the other components, and whenever the state transitions to something else, all the components are kind of notified at the same time. So it's a very reactive system.

In other systems, even though you have this desired state idea where you would write code in one language, it would be compiled to something else that will be consumed by the agent running on the machine - those are always in some kind of loop, of like "Every 30 minutes go check back for a new version of the user's desired state." Kubernetes is declarative, so in the Kubernetes world when you create an application, either using a pod manifest, and when that pod manifest is deleted, the corresponding process or container is also removed from the system. I think that combination of a declarative system that's driven by desired state makes Kubernetes feel vastly different from other systems, even though there is some overlapping functionality, but the experience is driven by those two things in combination.

**Erik St. Martin:** Yeah, my brother actually just messaged me - a prime example of that would be Ansible, right? You're setting a desired state of what a file should look like, or what packages should be installed, and things like that, and it tries to reconcile state. But again, that's not real-time, it's not reacting to the changes live.

**Kelsey Hightower:** And it's also not declarative in many ways, because usually with Ansible if you were to put a resource let's say to add a file to a system, the first run of Ansible with that declaration in your Ansible playbook and you run it, the file would be created on the other side. But if you were to remove that resource from your Ansible playbook and run it again, the file will not be removed.

I think the difference with Kubernetes is that we handle and we store all the state of the world for the entire cluster, so when something gets removed, we know exactly what to do to clean it up. We have the entire view of the cluster in a central place.

**Erik St. Martin:** And I've been finding it really interesting to work with some of these concepts and start thinking about building applications in those terms, and the concept of label and things like that, where you can make your containers and pods attracted to some nodes, and repelled by others. Now with 1.4 I get to delete scheduler logic that I had written, because now they have the concept with soft and hard requirements for labels which basically solves one of the problems that I had.

\[00:15:55.11\\\] As an example - this is actually kind of streaming cable... A soft label would be that any of these nodes are capable of running this particular video stream, but they're preferred on these nodes. Basically, you could have a hard requirement on a label for a given zone or collection of machines, and then you would have another label that is the preferred set because maybe there's additional bandwidth to come from the other nodes. Then basically it would try its best effort to schedule onto the nodes that are preferred. In the event there's just not enough space on those nodes, it would fail back to ones that come at the cost of bandwidth, or something.

It's really interesting to be able to do that by just applying labels to a machine, and you can do that with public vs private clouds and stuff like that, where you could try to run in your private, but move onto public.

**Kelsey Hightower:** Yeah, that's right. Kubernetes is definitely meant to put, like we said, that runtime on top of a set of machines. It doesn't matter if those machines are a Raspberry Pi cluster under your desk, or some cloud provider, or your own bare metal machine. Kubernetes really makes sure that we stick to the script. We sit in the middle, on top of gear, and you can do whatever you want below that, you can do whatever you want above that, and you kind of end up building your own platform.

I always refer to Kubernetes as a framework for building distributed systems, and one popular use of that framework for most people has been deploying applications via containers. But nothing's stopping you from imagining new systems that do different things.

**Erik St. Martin:** That's one of the things I'm particularly interested in, seeing what comes from Kubernetes as a continues to scale outward. Like you said, the current consensus from most people is that you just set it up on your machines and you throw your containers at it. And I'm really happy to see more use cases coming up, where people are kind of starting to interact with it closer, and writing their own tooling to look at the state of the cluster and to make changes to the cluster based on that.

I think we're gonna see some really interesting things come out over the next couple years. Even Kubernetes itself has changed a bit. Things like PetSets are getting introduced...

**Kelsey Hightower:** I'm gonna touch on that topic for a second... So in my view, Kubernetes is super, super small. Just like Golang has a standard library, but the core language itself is really small. So if we were to think about the core of Kubernetes, it's also super small. We have maybe four or five - depending on how you look at it - core object types. We have a node object, that is normally backed by a real machine (bare metal, VM, what have you), but that is an object that runs in Kubernetes. You need a node because we bind the other object called a pod where you express "Here's my application, here's its volumes." You express those in terms of a pod, and pods run on nodes. So those are the two kind of core objects to Kubernetes.

Then we have this other object, something that says "Keep one of those pods running at all times" or "I would like to have five of those pods running." That would be another object type.

The other objects, it's very debatable whether they're really core concepts or not, because you see that we have extensions in Kubernetes. A deployment will be an extension. A service will be more of a core thing, so something that drives "This collection of applications belong to the same service." So once you have the service, the pod, the controller and the node, if you look at everything else, even DNS is just driven by what we see in the service.

\[00:19:51.03\\\] A deployment or a PetSet - those are more workflows on top of those other objects. Those become kind of like the standard library; they become the patterns that allow people to leverage the low-level objects in new ways, where everyone doesn't need to learn how to bind to a raw TCP socket, interpret the bytes for an HTTP request. You just import net/http and off you go. So I like to think of the other objects in Kubernetes as very much that standard library that most people wanna see in their cluster. So as we start to evolve Kubernetes and it's growing over time, I think it's more of our standard library is growing on top of the Kubernetes core objects that have enabled us to do all of these new things like scheduled jobs, deployments, and anything else that anyone would like to cook up.

**Erik St. Martin:** Yeah, I'd agree with that. It's mostly abstraction layers on top to help facilitate tasks that you would want to accomplish with those lower-level objects. When you see a list of all these things it supports, it probably does look overwhelming, but like you said, they're just really workflow-type scenarios. "How do I make sure that five of these pods that look alike stay up, so that there's always five running, no matter what?" and that's really a replication controller.

You guys are kind of trying to deprecate that for the replica set, right?

**Kelsey Hightower:** Yeah, just a naming convention. Now that we're on the topic of objects in Kubernetes, it's very much like in Golang where there's core types inside of the Go standard language specification. But you're also able to crack types yourself, right? You can have a type that may be a collection of other types, and pretty much the same thing works in Kubernets. So view it like, in my case I've built a tool that allows people to integrate with LetsEncrypt. In order to do that, I could just drop something in there and just start scripting and automating a bunch of things, but in Kubernetes we also support user-defined types at runtime - we call them third party resources.

You as a user or as a vendor, you can craft a new Kubernetes object type and send it to Kubernetes through the third party extensions or third party resources, and we will automatically take your type definition and we will automatically generate the API endpoints, storage in Etcd and the integration with kubectl, which is the Kubernetes command-line tool. So now you have the ability to start creating these certificate objects.

The schema is up to you or the developer of the tool that will be observing these objects, but that will allow you to extend the system in ways that we haven't even imagined, but still feel first-class to people that are used to using Kubernetes and the core types.

**Brian Ketelsen:** Now, if you were interested in spinning up your own Kubernetes cluster, fire up a web browser, go directly to Linode.com/gotime, get two months for free with the GoTime20 code, and you can start your own Kubernetes exploration using awesome Linode cloud servers. Eight data centers across the world, plans starting at just $10/month. You can get full root access, which means that you get to deploy Kubernetes. They've got native SSD storage, 40 GB network and fast Intel Xeon E5 processors. It would be a perfect way to get started playing around with Kubernetes, with just a few Linode nodes.

And you could go to Kelsey's Learn Kubernetes The Hard Way repository... What's the repo for that, Kelsey?

**Kelsey Hightower:** It's kelseyhightower/KubernetesTheHardWay on GitHub.

**Brian Ketelsen:** Yeah, that would be the pefect place to get your feet wet with Kubernetes - Linode and Kelsey Hightower together.

**Carlisia Pinto:** \[00:23:47.20\\\] Kelsey, you were talking about something that the developers can do, and a lot of this is going over my head because for the last four years I've worked at companies of sort of mid-size, that had actually very good dev ops teams. As a developer, I always work closely with dev ops, however I don't get to play with these tools unless I do it on the side. I haven't done it on the side, so I can't even comment too much. So just to have an idea - yesterday was the first time that I used Docker, and I had a very strong motivation to do it because some stuff on my machine wasn't working and I didn't want to spend the time. I was like, "Okay, I'll figure out Docker. It can be a solution for me, it can be a solution for the other devs on my team if they wanna use it, so I'm not solving the problem just for me. Once I solve this, everybody can use it because it's replicable", and that's one of the beauties of using containers.

Of course, once you have containers, you have to manage them. Now, from a perspective of a developer, what should we be looking at? Because what I'm thinking is, "Well, what if my dev ops team is not using Kubernetes, and what if that's not available to me?" How do I explore this in a way that I can maybe integrate it with my apps and make good use out of it? How would one approach it, or should we not - as developers who are not handling dev ops, is there nothing there for us? Or is there something there for us of benefit?

**Kelsey Hightower:** I think that's a good question, and if you think about who's building these systems, they're mainly developers these days. I would like to see more ops people, and we do see them building features around it, but I think you're thinking about this world where the developers are now spending a lot more time in operations, building operations-specific tools. Stepping back, it's just all software. This software just happens to deploy other software. It's kind of like writing your own unit tests, right? You're writing software to test your application, so in this case it's software to manage applications, but it's just all software.

As a developer, you may be less interested in deploying and managing a Kubernetes cluster. There are different roles on the team for that, and if you're in a position where you have a dedicated group of people who are using a hosted system, that's great. As a developer, what you kind of care about is "I have this application, an application running on my local machine, and Docker's a fantastic piece of software that lets you take a Linux machine and abstract away the needs of SSH, systemd unit files, logging - all of that kind of goes away, but it's still there underneath the covers." Docker sits on top of a single machine and gives you this really nice API, you're packaging the app, push it through a repository and running it anywhere that you find a Docker. This is perfect.

But in production, you have a lot more concerns than just starting and stopping an application. Who's going to collect the logs and push them to a central place? How do you express the need of "I want this application to run across multiple machines, multiple data centers." That particular set of requirements needs a higher level tool or language in order to express and enforce to make it happen. A lot of those concerns - you start to get into this idea of clustering. I have multiple machines, and the machines that we're using these days, these are mainframes; they're not built to last forever. So we're dealing with these machines that are going to fail. If you're in a cloud provider, the VMs are ephemeral, so you have to plan that the machines that you're running on can be blown away at any given time. They can die, like migration, so you probably want a system that can account for that.

\[00:27:54.03\\\] From history in general, the core principle, even if you're not using Kubernetes, your team is going to have to build something very similar. How do I decide which machine my application runs on? Well, if you have a dev ops team and depending on how they do things, they may be recording that decision in a spreadsheet, in a tool like Ansible where you say, "This app runs the database. This server runs my web application." That would be manual scheduling, right? That concept of scheduling, as a human you would say "Well, we know that's the database server, because it has this name or it has this storage." That act of scheduling in Kubernetes is an automated process where you as a developer can craft one of these manifests where there's a deployment manifest. You can say, "My application needs one CPU and let's say 16 megs of RAM. That's enough to handle this many requests per second. If you want to scale above that, then give me more of those instances running and then we can actually scale horizontally." So as a developer, there's that dev test cycle, which is great for a single machine, but when it goes to production, as a developer you need a new set of concepts to express "I need five copies of these applications running, with these resource requirements. And oh, I'd also like to expose these to our customers over this particular port, not that port."

So if you think about it, Kubernetes takes a dev ops team and rolls it into a system, and in return gives you the developer an API that you can use to express what your application needs to run in production.

**Carlisia Pinto:** Very cool. I wanna go into this right now. \[laughs\]

**Brian Ketelsen:** One of the things that I think the concepts behind Docker and Kubernetes bring, even if you don't use them, is the dev ops world and the Twelve-Factor application ideas are so important even if you're not using containers, but you get so much more benefit from them when you are. When you inject your configuration using environment variables, your life becomes drastically easier in Kubernetes and Docker. When you write all of your logs to standard out, your life is easier in Kubernetes and Docker. Those are all practices that you should be doing, whether or not you're using a container manager or a scheduler, and it makes your life drastically simpler when you are.

Those are the kind of things that I think are complementary in the container and orchestration world, that we should be doing regardless.

**Carlisia Pinto:** Brian, how do we get the Twelve-Factor implementation of those ideas, facilitated by using something like Kubernetes?

**Erik St. Martin:** As an example, if you have a token that needs to be exchanged between two services or you wanna verify a TLS certificate, if they are passed into your application through an environment variable, then what happens is when you create your pod specification, your pod manifest to give to Kubernetes, you can map in a secret that's stored out in the cluster, which contains these things as environment variable into your pod.

**Kelsey Hightower:** I wanna interrupt there... Kubernetes doesn't really care about Twelve-Factor at all. If you have a set of data that you wanna consume, a synchronous object in Kubernetes can be stored into a file that you name and will be injected into your container at runtime, or you can prefer to put them into an environment variable. That's kind of your pick.

\[00:31:43.22\\\] To Brian's point, a distributed system like Kubernetes, which has the liberty to reschedule your application in the face of failures automatically for you - a node were to die, or say you have three nodes, and you have your application running, and you say "I would like three copies of my application running in Kubernetes." Maybe by default we put one application on each server, but that's more of an implementation detail.

If one of those servers were to die, you don't need to change anything. We will automatically move that third instance to one of the other nodes that have room to run your application. Now, the fact that his will happen in the automatic fashion is in your best bet or benefit to adhere to some of the things around Twelve-Factor, which, to sum up all 12 other factors, decouple yourself from the machine.

If your application is looking for a specific file on a specific server, you're going to run into trouble and you're gonna be unable to benefit from Kubernetes' ability to move you to another machine.

This is why in Kubernetes when you have a token or a database username or password, you have the option of taking that secret that you or the dev ops team can define as key/value pairs in Kubernetes, but you as a developer - we talked about that API... The API also extends it to like a YAML file, if you like to think of it that way. It's a big YAML file where you can say "My app needs this container version, it needs these five secrets. But you know what? From my application I don't consume configuration over environment variables. I consume configuration over files on disk", and you as the developer can say "I wanna reference this secret, this username or password, and I wanna put those secrets in this file."

Kubernetes will do that automatically. It will make a callout to the API server runtime, pull in that secret, write it to a temporary file, inject it into your process. When you process starts, it will just see a file like it has always been, but we still stay true to the Twelve-Factor way of doing things. We don't write that file to the underlying server. If we move your process to a new server, we go back through all of those steps I've just mentioned, to make that configuration available.

So in some ways, Twelve-Factor really was talking about a system with a few limited capabilities. It comes from the Heroku camp, and Heroku was a great system for moving us forward into giving people constraints and a contract. In Kubernetes we almost give you a few more contracts to let you have a little bit more flexibility on how you build your process; maybe we give you a 13th or 14th factor, but the idea here is to decouple your application from the machine. If you do that, then you're allowed to benefit from what Docker does, what Kubernetes does... Because in the Docker world we don't talk about RedHat versus Debian, we talk about application images, container images. In Kubernetes we don't talk about installing applications to servers, we talk about installing applications to clusters. The machine doesn't matter.

**Erik St. Martin:** The interesting thing about injecting configuration config maps or secrets into a pod as a file - there's some trickery because it's not actually that file that changes, but you can still watch the file system for changes to realize that your config has changed, that somebody within the cluster has modified it.

**Kelsey Hightower:** That's right.

**Erik St. Martin:** This is kind of what Kelsey's bringing home... You can build applications the way you typically will as long as you're not coupling yourselves too much. I think people get a lot of the fear of missing out. Kubernetes is just wickedly cool, it does a lot of stuff for you, but not everybody needs it either, and it comes with a cost. You have lots of stuff to administer, and now you have a distributed data store, Etcd that has to be managed and maintained and backed up. There's a lot of things that you need to do to kind of maintain the cluster itself, so getting ahead of yourself can also be a bad thing, too. If you build a well-designed application, you can containerize it and put it out in Kubernetes with minimal effort.

**Kelsey Hightower:** \[00:36:10.15\\\] And on that note as well, it's just like goroutines - you can go a long way in Golang without ever touching goroutines. If you're building a web app, the goroutines that are being used by net/http are kind of hidden from you in many ways, but you can go really far. Some people use it; they just start using these things for no apparent reason, and there's a lot of overhead. Now you have to worry about locking... All of these issues that come from dealing with goroutines, if you choose to go that route prematurely. On the flipside, having goroutines, when used correctly and get out of your way, just like net/http, you can handle multiple requests from a single process, and if you have multiple CPUs, like I said, it will be in parallel, but that's hidden from you. But it's just an added benefit that was just added as part of the core thing that the Go runtime does for you.

I think over time, even though most people would say if you look at Kubernetes, it is kind of overkill, it is a lot of overhead, but I think the entire industry will rebase to expect "My app should be able to run in multiple data centers and have tooling that allows it to stay available", because all customers now just assume any website will be available quickly from anywhere in the world, and it will be up 24 hours. Anything less than that, people complain, regardless of how big of a company you are.

**Erik St. Martin:** Yeah, I think that's fair. People have become accustomed to this whole five nines uptime. They kind of expect it out of every site, and completely lose their minds anytime their mobile app doesn't connect right away.

There's a lot of services too, so I say that the maintenance of Kubernetes comes at a cost too, but a lot of people aren't maintaining their own Kubernetes clusters either; they're using public services that offer Kubernetes. GKE and CoreOS has an offering, and there was somebody else that I remember has a Kubernetes offering.

**Brian Ketelsen:** Speaking of GKE, how about the blog post that was just released about Pokémon GO? Have you read that yet Kelsey?

**Kelsey Hightower:** Oh, you know I read that, man! \[laughter\] I live that! Our Google SRE team is amazing, and they represent why... You know, there's really no such thing as no ops. Even though the teams behind Pokémon GO... You know, they have their ops people as well, they interface with our ops people, but they didn't necessarily need to invest in a huge operations team thanks to being able to partner with Google's operation team. GKE, for those listening, is kind of the commercial offering of Kubernetes. We just put some deep integrations to the Google Cloud, but it's the exact same codebase and open source project that anyone else is allowed to use, or use in their own environment.

So that was a big win for the entire Kubernetes community, because Google doesn't build Kubernetes by itself, just like Golang; there are tons of contributors. And with any new system, especially around infrastructure tools, it isn't real until it's in production and people really are sending production and meaningful traffic, right? On the surface you will say, "Oh, it's just Pokémon GO", but trust me, that game makes a ton of cash. And whenever cash is involved, it's all the same - no one wants to lose revenue.

A game like Pokémon GO, that was used worldwide, globally, and it was a big sensation for a lot of people that were playing the game, it had revenue attached to it, so it became a very business critical situation that it ran well, and it was really nice to see Kubernetes shine in real life, in real workloads.

**Brian Ketelsen:** Yeah, there are articles about that. We will put that in the show notes, it's a really impressive read. I'm curious... One of the things that when we talked about having you on the show - you said if you had a free weekend to hack on something, you would wanna hack on self-deploying Go applications. Tell me about how you would go about that? What would you spend that weekend doing?

**Kelsey Hightower:** \[00:40:07.19\\\] I actually did that weekend like two weekends ago when I was in New York. I was thinking about Kubernetes and all these platforms as a service tools, and the thing that made Go awesome to me, regardless of the syntax, the features or the standard library, was this idea that you could just do a compile from your Mac, spin on a Linux binary that was self-contained, SCP it to a server - that was one of the first things I did at my first GopherCon talk. To me, that idea made programming fun again, and made it easy to consume other software that was written in Go.

And to think about it, now when we move on to Kubernetes and then we turn back and say, "You have to create all of these YAML files, you had to learn what goes in those YAML files...", we feel like we're back in that world of "Alright, now you wanna do a deployment, you have to do all of these steps to get there." I built this little app, and you'll see it at KubeCon as part of my keynote, where the app itself now can say, "Oh, I know how to generate my own deployment. I can expose flags on my binary that will say &lt;&lt;I would like five copies running&gt;&gt;" The user can decide how much memory it should ask Kubernetes for.

What I've done in my prototype - it was actually on GitHub - is called "Hello, Universe." "Hello, world" is old school. "Hello, Universe" is the whole thing, right? So "Hello, Universe", when it launches this stuff onto Kubernetes, using the API, I go find all of my pod instances that are running, I attach their standard out to my standard out, so even though the binary is running on my laptop, you see all of the standard out going to your laptop. And when you hit Ctrl+C to kill the process, I clean up all the resources in Kubernetes and I shut down the service, I shut down the deployment, I even remove the secrets. On the command line you give a few flags to say "Here's my TLS cert, private key, and public key"; all I do with this library is upload those to Kubernetes so they're secrets. So transparently underneath the covers, you can scale an application across one or more clusters, but it feels like it's just a simple app running on your laptop. To me, that is game-changing.

Imagine that experience, if someone told you "Download my project, run it on your laptop to kick the tires and when you're ready just give it a Kubernetes flag and the URL of a Kubernetes cluster or a federated cluster", and it will deploy itself across all your clusters and give you a dashboard, a UI where you can actually interact with how it's running. Just kind of like PS on a real server, but imagine your application becoming the userland for a thing that's running in the cluster.

To me, that is something that would move the industry forward and really show people the power of these stacks, with little effort.

**Brian Ketelsen:** That's insanity. I know what I'm reading tonight.

**Erik St. Martin:** Alright, I've already got the GitHub repo pulled up. \[laughter\] It's really interesting to start thinking about these things. One of the things that I'm talking about is taking basically deployments of apps, same thing but using third party resources. So taking basically a configuration for what is a channel lineup or cable television, submit it to the Kubernetes API - there's a controller that watches those things and is like "Hey, I need to spin up a pod that does video streaming. I need to map in its configuration for this and I need to make sure that there's one copy of that that stays alive." Likely there will be two, there will be a failover location, but from a generic perspective it's just insuring that, as the person responsible for doing channel lineups and doing cable television streams, I don't have to care about hardware or software or anything. I'm just posting the same thing, desired state. "I would like this group of channels to be streamed towards this area, and go!"

\[00:44:05.23\\\] And when I don't want that to happen, or I wanna change it in some way, I just update that resource and the cluster adapts. It's really kind of changing the way you look at building applications, and it's really interesting.

**Kelsey Hightower:** And for our Go developers listening here, this is where the parallel is. Before I started writing code in Go, I was doing mainly Ruby and Python. With those languages, you always have to do a pause before you start thinking about concurrency. Like, "Oh, Ruby - I wanna do concurrency. Alright... Let me put paths and \[unintelligible 00:44:35.26\] in front of this thing, let me go and get NGINX, and oh man, I gotta go get this Redis queue thing", just to do something in parallel. Whereas in Go it's kind of there for free, so you take on more ambitious projects, like "I'm going to write my distributed database using Golang." Because now you don't have to worry about the facilities of accomplishing that goal; it just seems like it's there. The community is already building these things, you can go get inspiration.

So anytime you can free up that mental overhead of doing something really hard and it's provided for you, that gives you the courage or time to go and build these more challenging things. I think Kubernetes does the same thing for these large, complex deployments. Now a lot of that is pushed lower, and you can just focus on getting that done.

**Erik St. Martin:** I love gaining the Kube control command for stuff, too. That's one of the best things about third party resources like that. Now I'm not asking Kubernetes about pods and replication controllers and things like that, I'm asking it about my thing, you know? Get certs, get streams, get whatever, and I get to just kind of see that; and if you have some sort of controller running, monitoring the state of the cluster, you can just be updating a status on your resource and then you can see, "Hey, this is the state of my TLS or my LetsEncrypt, or..."

**Brian Ketelsen:** ...or my cable TV channel.

**Erik St. Martin:** Or my cable TV channel. Technically, it's a group of channels. It's between two and eight, two and ten, and one multiplex screen.

**Brian Ketelsen:** I can't wait to hear this talk. But first, we do need to talk about a new class on Code School.

**Break:** \[00:46:14.11\\\]

**Erik St. Martin:** So Kelsey, what's next for Kubernetes? Anything you're particularly excited about that's coming down the pipe?

**Kelsey Hightower:** The community, and... You know, we have the Cluster Federation. I was just doing a presentation earlier this morning about making it easy to manage multiple clusters. Today, Kubernetes makes it easy to manage multiple machines; Kubernetes Federation will make it easy to manage multiple clusters, so in the 1.4 release, and I also have a tutorial on GitHub called Kubernetes Cluster Federation that shows you how to actually build multiple clusters and then join them together, and then start interacting with more than one cluster as a single cluster, using the new Federation capabilities. So go check out that tutorial if you want to play with that.

\[00:48:05.17\\\] That to me is one of the most interesting things, because we want people to feel comfortable having multiple clusters, so that you don't have one big cluster trying to span multiple data centers - that's gonna be a disaster - but enable to make it easy for people to do the right thing. The Kubernetes community has to step up - and we did - and Cluster Federation enables you to do the right thing. It's a game changer in my opinion.

**Erik St. Martin:** Yeah, I know for my particular use case it threw away a whole area that I was going to have to build when the Federation stuff came out, because the same kind of problem is multiple data centers spread out across the world, and they're kind of divided up by different groups who maintain them. So the Federation thing, I haven't started building that out yet, but I'm super impressed by that. It's like every release I get to delete some code, which is awesome.

**Brian Ketelsen:** Well, speaking of game-changing, let's talk about Kelsey and his live code demos. If there's anybody in the entire history of conferences that has changes the game, it's Kelsey and his off-the-cuff live demo on the screen. I don't know if you had done this before GopherCon 2014, but you shook the world when you were booting containers off of a slide.

**Erik St. Martin:** He PXE booted a VM from a container...

**Kelsey Hightower:** Yeah, to me honestly, I'll tell you guys... I didn't go to college to learn this stuff and so have many other people, and for me to really learn some of these concepts, especially early on, the only way I could actually get it was to get it running, and once you make it work for the very first time - you guys can probably relate to this - you start doing that little dance; you've got your headphones on, your family is looking at you crazy, and that feeling is when I think technology proves itself that it's working for you; it's not something that you're working for.

So when I present or get a chance to be given the stage and I really want people to feel it in the shortest amount of time possible, I think the live demo keeps me honest as a presenter to stick to the facts, stick to actually what works, and it also lets everyone else feel and relive that moment when I got it to work, and they see it work. I think a lot of people are getting inspired when they see this, like "You know what? If he just did that in 20 or 30 minutes and he just put the steps on GitHub, there is no reason I need to put off doing the exact same thing." I think that's very inspiring to people, myself included.

To me the live demo is a requirement for me, just to make sure that I'm doing my job as a presenter, and it's one of my things that I kind of use as a crutch. The live demo is risky, but the payoff seems to be huge.

**Erik St. Martin:** I'm not gonna lie, last night I was having a conversation with Brian how I could one up the PXE booting by live launching a cable TV stream, but then I had to worry about the bandwidth concerns. Bandwidth at conferences is never good.

**Kelsey Hightower:** Yeah, but now that the challenge is set, I look forward to you doing it. Now if it fails... \[laughter\] You'd better be ready to handle that.

**Brian Ketelsen:** Generally, presenters get their own hardwired Ethernet access. It's not only Wi-Fi networks. I don't think you can use that crutch, Erik. I wanna see like TV, broadcast from your laptop, on stage...

**Erik St. Martin:** If I limit it to one program in the stream, I might be able to do it over a hard line. But typically it's a 38/8 stream.

**Kelsey Hightower:** Anyone out there listening, the way you prepare for a live demo is not the way Erik is doing it right now. If you're gonna do it, you need to do it. You gotta own it. \[laughter\] Pick the use case, and then you do whatever it takes to make it possible. Because at the end of the day - just do it, man! All of this psyching yourself out, and if this and if that - nobody wants to hear that, man. You get on stage, you do your thing... Don't tell us about it. I'll see it at KubeCon, and make sure you deliver.

**Brian Ketelsen:** Gauntlet thrown.

**Erik St. Martin:** Right. I think that you have a really creative way though of explaining stuff to people, too. It's not just the live demo stuff. This year's GopherCon you did the talk about writing your own scheduler, and using Tetris. That was awesome! You take something that seems complex, right? When most of us think about how do I take these resources and efficiently place them on nodes - we think that that's a job we wouldn't want. I wouldn't wanna write the scheduler. But then you kind of break it down into these manageable ideas, thinking about things in Tetris terms. Everybody can relate to Tetris.

I think that's why people love watching your talks - you take things that seem out of reach for people and bring them down to levels that everybody can connect with.

**Kelsey Hightower:** Thank you. That's kind of the goal there. I try to spend as much time as possible not learning something, but understanding something. And if I feel that I get to the point of understanding that I can articulate it with a video game, then I know I think I've done my preparation job.

**Carlisia Pinto:** I wanna ask you Kelsey, maybe switching gears a little bit - where would you like to see Go going as a language as it matures, to support a project like Kubernetes which is obviously very sophisticated and very on the larger side of things? I'm interested to know where do you see you could get most support, from the community, from the language itself and from the ecosystem.

**Kelsey Hightower:** I think we've already had some good support so far. When we would run into issues where we had to stay stuck on, like Go 1.4 and some of the issues with 1.6, I think for us having the Go Team step in and use Kubernetes to actually help find and locate performance issues has been a huge help. People in the Go community just using the project and giving us feedback, or even looking at our code and saying, "Hey, there's a much better way of writing" some of the implementations that we've done in Kubernetes.

And I think for Kubernetes also package management is highlighted to the next degree. For small projects not really having a one blast solution for dealing with packages, third party dependencies - that can be handled, but in Kubernetes the interdependency chain is pretty large, even the interdependencies for the project. So I think the native vendoring directory went a long way, but I think all the progress that is made on the third party dependency management front will be a big help to Kubernetes in our community. And also just better examples for people that are... If you write Golang and you use Kubernetes or you're even interested in distributed systems, it will very much be to the benefit of our community and the project to get more Golang experts contributing to Kubernetes.

I think our project has a lot of people that were also new to Go. That's not necessarily a bad thing, but we always can benefit from other people of Go expertise, helping refactor, clean up the codebase and also just teaching our community some of the best practices that we've seen over time.

**Erik St. Martin:** Yeah, and there are a lot of Special Interest Groups too, if there's particular areas of the Kubernetes project that you're interested in. If you're interested in a scheduler, or app deployment, or the networking side of things... I can't even remember all the different special interest groups that are out there, but you can kind of hang out... Most of them do weekly meetings and things like that.

It's a big project with a lot of things that it does, but it's easy to kind of find a little area that you're excited about and get with other people who can help you pick up that particular part of Kubernetes much faster.

**Kelsey Hightower:** \[00:56:00.20\\\] I should be mentioning too that I'm a very pragmatic person. I'm not going to complain about missing features in the language, like seriously. Go does a really good job of handling 80-90% of the use cases. There's always gonna be a gap from a different language or someone's preference. I've kind of got to the point where any shortcomings in Go do not stop me from executing the things that I wanna do. Easy that you can walk by and complain about them, I see a lot of that... "If only Go had generics", or "If only Go had X..." And I get it. If that will help people improve, I can understand the ask, but I don't see any glaring holes that Go has that have prevented people from executing on their ideas, and I think that is really how Go should be measured.

Were people able to execute the things that they wanted to do? How did Go help them? And in some ways we could talk a little bit about how Go prevents them, but as people are shipping these products, you can see that Go is definitely doing a great job of enabling us to do that.

**Erik St. Martin:** I think that that's a good point too, working solution over no solution, right?

**Kelsey Hightower:** Right.

**Carlisia Pinto:** Going back to something you said, Kelsey, I can only imagine the amount of best practices and good practices that you have acquired as a group of contributors to Kubernetes. Is there any chance we can get a compilation of these best practices? I think the community needs something like this. Everybody keeps asking and it's sort of a mystery. You know what it is when you see it, but it'd be nice to have some sort of list somewhere.

**Kelsey Hightower:** I don't know if we necessarily have all the Go experts and all the best practices. I think the Kubernetes team will tell you first hand. They're learning as they go as well. If you about it, both projects aren't that old, so I think a lot of people that are contributing to Kubernetes, some of them learned Go for the very first time in order to contribute to Kubernetes. I think we're in a position of... We're kind of a microcosm of what's happening in the Go community itself. We have some long time Go users who contribute to the project, we have some people that are new to the language, but I think that kind of speaks to one of Go's strengths, that you can kind of jump into a very large Go codebase and contribute.

But also on the flipside, since Go is relatively young, we do have some best practices, but even Kubernetes challenges some of those best practices because they may not work for the way we want to do things. So I think there's a big tradeoff and I think a lot of that is starting to be surfaced in some of these conversations at the Code Bubble.

**Brian Ketelsen:** One of the things that I had put in the show notes about interesting Go projects and news, which is generally our next segment, but it makes really good sense to bring it up here, is the Go Build Template that Tim Hawkin put out, which is extracted directly out of Kubernetes. The Go Build Template is a make file and Go project structure. Together, it allows you to have a Go application that will build itself in Docker containers on every platform that Docker supports, and the make file is beautiful, and all of the code is beautiful. Really all you have to do is clone that Go Build Template, add your code to it and you have some of the really nice best practices for building and testing and structuring your application. I loved that when I saw it; I think he just released that two or three days ago, and I starred that immediately because that is one of the things that's come out of Kubernetes - how to manage a Go application from a building and testing perspective when it comes to containerization. That whole make file is a piece of art, really nice.

**Kelsey Hightower:** \[00:59:52.20\\\] Yeah, along those lines I also think our end-to-end testing Kubernetes are magnificent. We have this big distributed system, tons of moving pieces, but we have these very elaborate end-to-end tests that take real versions of our code and from the tree, and we are able to test end-to-end user functionality. We don't rely strictly on unit tests and mocks. We simply just launch all the components and run things straight through Kubernetes to find real issues that people would have in production. That has been a goldmine.

Keeping Kubernetes relatively stable - we have a good reputation for being stable; we're very liberal about introducing new features... So one best practice there would be liberal use of alpha. We are very clear in our API, "This is an alpha feature and is subject to change to API and implementation." Then it moves to beta, and that beta period could be months or even a year if necessary, and then it goes to stable. I think that's a really good practice that any large, well-adopted project, any size project should really consider this idea of propagating your APIs from alpha to stable, and then once they become v1 stable, you gotta own it and not change it and rip it off from other people; then they will actually start to trust your project and their APIs.

**Carlisia Pinto:** That is a beautiful concept. I was looking a little bit at your tests for the APIs, I think I saw a little of what you're talking about. It sounds to me it would be a beautiful way to just maintain integration tests, like you're saying, through production environment light in a cluster, and use that as your test phase.

**Brian Ketelsen:** One of the training modules that I'm giving in the training class up in Boston next week is how to test real-world applications, and how real Go applications do testing, and there are probably four references to Kubernetes in there, because Kubernetes testing is just top notch. It's really impressive how well they've managed to test the really hard things that are in a distributed application. They're testing them in Kubernetes; you don't see broken Kubernetes releases. You don't. That's real-world best practices right there.

**Erik St. Martin:** I think a good thing to note too when we think about the idiomatic use of a language in these large projects is I don't think it's right to put a lot of expectations on these big projects to have nothing but idiomatic Go. There's lots of contributors coming from many places with many different backgrounds, and we can look to anywhere... Like Ruby on Rails - if you look through that codebase, I'm sure you will find lots of examples of non-idiomatic Ruby code, too.

That's just kind of a thought, that while we desire to have these things be there, it's not all that odd to find large projects in a language that don't have the best uses of the language.

**Kelsey Hightower:** Right.

**Carlisia Pinto:** That's why it would be great for somebody to extract the examples of, "Well, these are the good things, the good ways that we found to write Go that turned out to be easy to work with." And like Katrina was saying in the last episode when she was here with us, she was saying that she found a bunch of reputable things that people were doing that were wrong and non-idiomatic; they were correct implementation-wise, in the sense that they would work - I'm talking about the Exercisms in Go... And she started doing a compilation of those things, so people know "Okay, these are not desirable ways to do it", which I think is also a good contrast.

**Erik St. Martin:** I get what you're saying... Kind of look through and find the patterns and the anti-patterns and kind of document those so that people continue to do the good things, and at least stop doing the undesired things.

**Carlisia Pinto:** \[01:03:54.03\\\] Yeah. I'm thinking... Also, this would go for people who are veterans on the project, that have run into these things and could maybe contribute to the list.

**Erik St. Martin:** You know what's really interesting though, outside of the implementation details, the way it's written in Go, what Kubernetes does have really good documentation on is the conventions of the design of the system. It's easy to find -- like, if you're implementing your own object to be represented in Kubernetes, these are the types of things you use. You expect fields here. You have a spec property on your resource and that represents the desired state, and you have a status property... And even though this is your own whiteboard and you can do whatever you want, there's still these conventions they like you to follow within, so that the system can work to your benefit, and there's lots of documentation on API conventions and things like that. I need to find the links to those.

**Brian Ketelsen:** This is the segment of the show where we like to give a shout out to free software maintainers and projects. The OSS maintainers are groups that make projects that you love; there are so many of them that make our life easier, and it's something that's important to us, to give a shout out to the people and the groups that make the things that we use every day, and maybe take for granted.

I'll start off today... I have actually two of them from Dave Cheney that I've been using a whole lot lately. His github.com/pkg/errors is a beautiful way to wrap your errors without losing the original error type. I know that there has been a little bit of talk about merging that into standard library - I hope that happens, because it's just an amazing package for managing errors without losing the history of the errors. It's propagated up the stack, I love that.

And then in the same GitHub repo, a package profile. If you wanna profile your application, there is no easier way to do that. I know Go tool pprof is very powerful, but not so easy to use. So thanks Dave Cheney for all of the awesome work you do for our community.

**Erik St. Martin:** And how about you, Carlisia?

**Carlisia Pinto:** I am going to mention this project that I found this week, it's a compilation of blog posts called... Oh my gosh! Where is the link...?

**Erik St. Martin:** Are you talking about the Golang Spec?

**Carlisia Pinto:** Yes, thank you. It's sort of like a walkthrough, but really short and I think really gentle too, on different aspects of the specification for Go. There are posts about initialization dependencies in Go, simple statement notion in Go, anatomy of a Go source file... So just little, short posts that give you boring sites, things that maybe you wouldn't think about, and I thought that was pretty cool. I see that is started in 30th July, and there have been a few posts, so I hope this person keeps going with it. I thought it was pretty cool.

**Brian Ketelsen:** Nice. Erik?

**Erik St. Martin:** It's me?

**Brian Ketelsen:** It's you.

**Erik St. Martin:** So I've been knee-deep in Kubernetes the past couple weeks, so I don't have a whole lot new, but I'm totally gonna steal a package that made Brian's life much easier, which is this PID controller library that's written in Go. PID controllers take a target value, current value and then basically try to do some calculus and determine changes to be made. We've been kind of behind the scenes of designing this PID controller for controlling barbecue grills and temperature, so that prevented any of us from having to write one, which was awesome, because my math is not so good.

**Brian Ketelsen:** \[01:07:58.10\\\] Yeah, you didn't have to write any calculus. That's at github.com/felixge/pidctrl, and if you wanna see our implementation of it, that's at github.com/bbqgophers/qpid, and there might even be some videos of my barbecuer over the weekend running from a Raspberry Pi using Go to control the grill. Perhaps.

**Erik St. Martin:** Yeah, this is gonna be really interesting as we expand out on it and do meat probes and dashboards...

**Brian Ketelsen:** \[laughs\] It's all a hundred percent Go, too. It's got Prometheus there, it's running in Docker on all this great Go code. Good stuff.

**Erik St. Martin:** And then we deploy Kubernetes to it, right?

**Brian Ketelsen:** Well, I was thinking about that, you know? Since we were talking about this, one of the problems we have with the Raspberry Pi is the limitation of the number of things you can plug into it. But what if we federated the whole thing and made it a cluster of Raspberry Pi's? I happened to have like 20 of them in a drawer... Why not have a federated cluster of Raspberry Pi's, each reporting a piece of the information so you could have meat thermometers in each of the different barbecue items in your grill, and just have them all together? That's go big or go home.

**Erik St. Martin:** Is it eating up a lot of resources right now?

**Brian Ketelsen:** Are you kidding me? I think I posted a screenshot of top running while both Prometheus and Qpid were running at the same time, and it was at 0.03, or something... Just no resources at all. We're not even touching what a Raspberry Pi can do with that.

**Erik St. Martin:** And you're already worried about needing to federate?

**Brian Ketelsen:** No, not worried. I just think, if you can, you should. \[laughter\] Go big.

**Erik St. Martin:** We're kind of catching you off guard here, Kelsey, but do you have a project you would like to give props to?

**Kelsey Hightower:** I'm gonna say documentation is the thing that is killing everyone. Ops, devs, everybody is being destroyed because of lack of documentation, period. We all spend this time reverse-engineering libraries as we find them, so I wanna give a special shout out to Ben Johnson taking time from some of the fabulous libraries and managers like BoltDB - which I use in many of my projects - but the shout out needs to go to his documentation. If Medium was a repository, then the documentations that he's checking in there is crazy.

I think now people are starting to really learn what this stuff is, and as much as we like to use all these libraries, documentation is what really levels people up and gets them to the point where they can also start producing some of the things that we're giving a shout out to. So we don't often give enough credit to the other part of the tools we build. They need instruction manuals, right? So a documentation shout out to Ben Johnson. The many posts that he's done over the last few months are awesome. So that's me.

**Brian Ketelsen:** Awesome, that's a good one.

**Carlisia Pinto:** Couldn't agree more. Who's got the idiomatic Go thing there?

**Erik St. Martin:** I'm sorry, was that the...?

**Carlisia Pinto:** In the Projects and News?

**Kelsey Hightower:** Yeah, he just deep dives on what bytes are, and just different packages in the standard library, taking the time to detail how these things work. Not in a way that you would find in the standard library, but just in the way like from human to human communication. Like, "Here's this thing. Let's do a deep dive and give you some concrete things to think about", which has helped lots of people, even experienced Gophers like myself. When you read it from that angle, you start to get a better understanding of these things. So anytime people in our community can do that, it goes a long way - whether it's documentation for your library, or projects, examples on how to use it, or documenting someone else's library. Those contributions are greatly appreciated, even though they're not the thing that people import into their source code.

**Erik St. Martin:** Yeah, and examples. Example code. Because you can see these things and not connect with it until you see an example of code somebody's written using a library or even a project in general.

I think that we are 10 or 12 minutes overtime, which means we should probably cut the show.

**Brian Ketelsen:** \[01:12:15.20\\\] Oh, man...

**Erik St. Martin:** Unless we all want to be hang out here all day.

**Brian Ketelsen:** Oh, man...!

**Carlisia Pinto:** \[laughs\] Another one...

**Erik St. Martin:** Well, you say you'll be traveling, right Brian? So you won't be at KubeCon.

**Brian Ketelsen:** No, I think I'll be in Amsterdam.

**Erik St. Martin:** I'll get to hang out with Kelsey. You'll be another country.

**Brian Ketelsen:** But I'll be thinking of you.

**Erik St. Martin:** So now that you can feel a little more jealous that we have to end this show and I get to hang out with Kelsey and you do not...

**Brian Ketelsen:** Oh, man... \[laughter\] \[sighs\] FOMO&gt;

**Erik St. Martin:** So I wanna thank everybody on the show... I definitely wanna thank Kelsey for taking time out of his busy schedule to come on the show and chat with us about all things Kubernetes. Thanks to all the listeners, to everybody who's listening live right now and has been interacting with us in the GoTime FM channel. A huge shout out to Linode and Code School for sponsoring this episode; without them we wouldn't be on.

A shout out to Carlisia's employer, Fastly, for the CDN which will be leveraging for this show and all of Changelog's shows. Definitely share the show with any fellow programmers that you think might be interested. You can subscribe at GoTime.fm, and we are @GoTimeFM on Twitter. I think I've covered everything, so with that said, goodbye everybody!

**Brian Ketelsen:** Thanks, Kelsey.

**Kelsey Hightower:** Thank you guys for having me!

**Carlisia Pinto:** Bye! This was awesome!
