**Jerod Santo:** So we have a short time span here.

**Adam Stacoviak:** We do, we have very short time. Let's do it the right way, I guess... Do we need to give anyone the breakdown?

**Brian Ketelsen:** We need a spiel.

**Jerod Santo:** This is a crossover show, so Erik is still gonna introduce it like normal, but then we're gonna kind of interview you guys, right? \[unintelligible 00:01:04.07\]

**Brian Ketelsen:** Yup, \[unintelligible 00:01:06.10\]

**Erik St. Martin:** Okay, so I'll still do the intro?

**Adam Stacoviak:** I was actually thinking about, what if I did the intro and act like I wasn't Jerod -- or, actually, act like I wasn't Erik, and I said that this actually wasn't GoTime, but it might be, and then Jerod, you say "I don't think it's really the Changelog either. Which one is it?" What do you think?

**Erik St. Martin:** I think you guys should do the whole host thing for the whole show, right? Intro and all, we're taking over.

**Jerod Santo:** Okay.

**Brian Ketelsen:** Yeah, GoTime Takeover, I like that.

**Jerod Santo:** GoTime Takeover.

**Adam Stacoviak:** GoTime Takeover.

**Jerod Santo:** Well, we don't do an intro though.

**Adam Stacoviak:** No, we really don't.

**Jerod Santo:** Our intro is in the post, so we just start talking on our show.

**Adam Stacoviak:** Technically, we do. This could be the show.

**Brian Ketelsen:** This is the show.

**Jerod Santo:** Which show is it, though? Is it GoTime, or is it the Changelog?

**Adam Stacoviak:** It's both. Simultaneously both show, and...

**Brian Ketelsen:** I'm so confused...

**Adam Stacoviak:** ...and we don't know where we're at.

**Brian Ketelsen:** We should start at the beginning and work our way up.

**Jerod Santo:** We should introduce Erik and Brian, OR we should introduce Jerod and Adam.

**Erik St. Martin:** It's quantum podcasting...

**Adam Stacoviak:** Yeah, quantum podcasting.

**Jerod Santo:** Well, we're here today to talk about Virtual Kubelet, which is something Erik and Brian, you are both super excited about, and Adam and I are both super ignorant about, and so I'm about to get schooled--

**Adam Stacoviak:** Speak for yourself, man...

**Jerod Santo:** Oh, you know about this?

**Adam Stacoviak:** I know all about it, I was part of the hack team.

**Jerod Santo:** Alright, Adam, tell us all about it.

**Adam Stacoviak:** My name isn't on the list; why is my name not there? Anyways, I'm kidding around.

**Erik St. Martin:** I like taking credit for your work.

**Adam Stacoviak:** That's right. You were right, Jerod, I'm ignorant. Go ahead.

**Jerod Santo:** Well, since we've established that, help us out here, guys. Help us understand [Virtual Kubelet](https://github.com/virtual-kubelet/virtual-kubelet) - what it is, who built it... The whole spiel, and then we'll pour into all sorts of questions and side conversations around it, but why don't you two give us the rundown?

**Erik St. Martin:** So I guess to kind of fully understand it, how familiar are you with [Kubernetes](https://kubernetes.io/) itself?

**Jerod Santo:** So we've done shows on Kubernetes, which means we've had smart people teach us about it, and we haven't actually used it IRL, or anything, so it's very much academic and somewhat transient knowledge that floats in and out between my ears; I don't know if that speaks for you, Adam, but very generic knowledge, no practical use of it, so a general rundown would be nice, too.

**Erik St. Martin:** Okay, so from a high level, Kubernetes is an orchestration platform for containers, but really it's more than that. To fully understand how it works, you can think about - there's an API server as part of the control plane for Kubernetes. The control plane are all the components that Kubernetes kind of handles for you, and then you have your nodes with your logic.

\[04:04\] So you submit a spec for a resource that you would like, whether that's a service, or you're trying to run a pod, which is really just a group of containers, and the API server kind of recognizes that as desired state, whether you're creating one or updating it or deleting it, and then there's other components like controllers and things like that that run within the system that are just constantly trying to reconcile the differences.

So you just submitted a pod, I see a pod in the API, but I don't see a pod running on any nodes, so I need to assign this to the node and the scheduler runs, and things like that.

**Jerod Santo:** Who decides what a reconciliation looks like?

**Erik St. Martin:** That would be the job of the controller. There's different controllers - there's a controller manager process that runs that kind of encompasses some of those, but in some cases, like with the operator pattern, like [Prometheus](https://prometheus.io) and things, it has its own controller. And the controller's job is just to kind of look at what's in the API and watch it and monitor the thing that it controls and try to reconcile the differences. In the case of a pod, first the scheduler kind of jumps in and assigns a node through kind of looking at what else is running and available resources... But yeah, each resource type kind of works the same way - you're just kind of inserting it, and some process or another within the system is monitoring that and then trying to reconcile the differences. It's just kind of like a big reconciliation loop.

The Kubelet is actually the agent that runs on all your worker nodes, and it looks at the things that the scheduler has assigned to it, and looks at what's running in Docker and then reconciles the differences. It sees a pod in the API that it doesn't have running, it starts it; if it sees something running that is no longer in Kubernetes' API that's assigned to it, it deletes it, and that's sort of just rinse and repeat, that's how the process works.

The Kubelet has a bunch of other jobs, too. I actually wrote a [blog post](https://erikstmartin.com/post/virtual-kubelet/) today that kind of points out some of that stuff; it looks at the pod and it tries to fetch the images from the image repo, it attaches volumes to the containers, it handles the kind of networking, setting up the interfaces and dropping them in the container... So it's kind of the workhorse for each node.

**Adam Stacoviak:** What's the point of it? From my understanding, it's supposed to allow outside systems to call into the Kubernetes cluster?

**Erik St. Martin:** For the Kubelet, or the Virtual Kubelet?

**Adam Stacoviak:** The Virtual Kubelet. What's the point?

**Erik St. Martin:** Here's kind of where we get into the Virtual Kubelet. The Virtual Kubelet is just a process, but it behaves the way the Kubelet does. So it just runs somewhere in your cluster as an application, but it can access the Kubernetes API and adds a node resource to the cluster; so it just kind of posts a spec saying "Hey, here's a node", and Kubernetes thinks that that's a node, which means that the scheduler starts assigning work to it. So the Virtual Kubelet just sits here and monitors the API for any pods or things like that that could assign to it. And then rather than kind of interacting with a physical host, we created this provider interface, which just really -- you implement a few methods, like Create, Update, Delete, the Virtual Kubelet kind of does that reconciliation loop and populates the environment variables and volumes and things like that from your secrets and maps, so that you kind of have to do minimal work outside of implementing how a pod gets deployed. That's your job.

\[07:56\] The Virtual Kubelet kind of runs and calls into the provider at lifecycle events, like "Hey, we know that this pod is in Kubernetes, and we've asked you about the pods that are running (or whatever the equivalent is in the provider interface), what's running there, and we know that you don't have this. Please deploy it." It works in that way. Or "Hey, this is no longer here" or "We've received a Delete event on this pod, and you're still running it. Please tear it down."

**Jerod Santo:** So let me see if I'm tracking this here, Erik. So a Kubelet normally runs in the context of a node, and it speaks to the API server and vice versa, representing that node, so to speak. And then it kind of manages or handles that node's specific context. What is a node usually? Is it like a network endpoint? Is it like an IP address on a network? Is it a virtual machine? What does a node represent?

**Brian Ketelsen:** So a node is usually - in the Kubernetes context it's either a physical or virtual machine.

**Jerod Santo:** Okay.

**Brian Ketelsen:** It's a server.

**Jerod Santo:** Okay, very good. That clears that up. So then a Virtual Kubelet is basically saying, "Hi, I'm a Kubelet and I have a node, and I can answer all the same regular API calls that an API server would expect a Kubelet to respond to", only it's not really any of those things; it's just faking it.

**Brian Ketelsen:** Exactly. Now, it could be; you could use your Virtual Kubelet to run Docker containers just like Kubernetes does, but you could also build a provider for the Kubelet that did completely different things. One of the first providers we shipped was the ACI provider that lets us use Azure container instances to start work from a Kubernetes cluster without actually having a live node. Azure container instances are ephemeral; you start one and it goes away when it's gone, and you don't need to restart it.

**Erik St. Martin:** And I think part of the confusion we've had in conversations is the fact that like it's a node but it's not a node, and people wonder, "Is this a process that runs on a host instead of the Kubelet?", or things like that. I think to kind of fully understand that, you just think about a node in Kubernetes sense is just an entry in the API server. You just add yourself, and you're like "Yes, there is--"

**Jerod Santo:** It's just something that gets registered into the server. It's like a line item in the database, or something; it just knows about it.

**Erik St. Martin:** Exactly, and then the rest of the system reacts based on that, like "Okay, now I need to collect metrics from this", or "Now the scheduler is allowed to schedule things to this." Or "I know that I assigned this pod to this node, so when a kubectl exec comes in, I know I need to forward that request to that Kubelet", because it's responsible for that container that you're trying to get in. So it's really just an entry, and then from there you're interacting with the API.

It's super interesting because of the use cases. We talked a bit about that, and I think that's the part that confuses people the most. You're like, "Okay, so you're like masquerading as a node, but why?" Brian pointed out ACI... I don't know how familiar you are with Azure Container Instances, but...

**Jerod Santo:** I know they're ephemeral, because Brian just told me. \[laughter\]

**Adam Stacoviak:** It's true, they go away. \[laughter\]

**Erik St. Martin:** So the best way to kind of think about Azure Container Instances is -- they're called a container group in the context of Azure Container Instances, but it's basically like pods as a service. So you're not really thinking about Kubernetes and the whole cluster and some of the other resource types that exist, you're just like "Here's my group of containers that kind of share a namespace. Just deploy it. And I want a public IP." You're only trying to run this one pod, or something like that.

\[12:13\] There's no kind of service discovery and all of these things, and it makes it really interesting for people who just only have a couple things to deploy, or for quick workloads, like you just have workers and jobs and things like that that are running, that are fairly isolated, but you're only paying per second while these things run... And this is kind of where the power of Virtual Kubelet comes in, because now you can kind of have this node that exists in your cluster, with endless capacity. It could just kind of burst out in parallel, and you could run 100 workers on ACI pay-per-second, and then when they're done, they're done. And you don't have to have the spare capacity in your cluster to support all these batch jobs, or CI/CD or things like that. They just kind of run out there in ACI and come back, but as far as your infrastructure is concerned, you're just treating it the same way as your normal cluster, except maybe having some node selectors and things on there, saying like "I would like these types of jobs to run out in ACI."

**Brian Ketelsen:** It's like a temp agency.

**Jerod Santo:** Yeah, there you go. I was gonna ask permission to play the cynic here for a moment, because...

**Erik St. Martin:** Sure.

**Jerod Santo:** So the cynic might say, "Okay, this is a hack so that you can run ACI with Kubernetes, and that's very much trying to get us to just use ACI." Are there other uses? Is this what it's for? Does it go above and beyond, or is that the goal, and now the goal's accomplished, and now we should go try it with ACI?

**Erik St. Martin:** No, we created it with kind of like the modular back-end; we wanna encourage other people to implement these. We've got companies like [Hyper.sh](https://github.com/hyperhq) jumping on to build a connector to their systems... So we'd like to see this expand out more. Would we love you to use this with ACI? Absolutely. But I think it's more important than that, because we've got kind of like the Kubernetes landscape going on, but serverless is also catching on, and I think that this type of Virtual Kubelet scenario is a really awesome bridge in between the two, where you have these workloads that are really intermittent, whether that's a spike in traffic, or a batch job, or just CI/CD, right? Think about a commit-heavy day in CI/CD and how long you might have to wait for your commit to run through CI/CD, because you only have one virtual machine dedicated to that, so you only run five in parallel, or whatever you have that configured for.

This -- you don't even actually have to have a VM for your CI/CD, right? It doesn't matter whether there's one commit or 20, they just fan out in parallel and you just kind of pay per second while they're running, and when they're done, they're done. And in a lot of cases, it may actually be cheaper for you to do that, because you're not paying for all that idle time.

**Adam Stacoviak:** To the note of the agnostics to this, you've got in this diagram in this post you mentioned ACI (Azure Container Instances), AWS, and then as you mentioned just before, Hyper.sh. Now, you've got those in your examples there, but this is also -- you know, Microsoft developers were a part of putting this together, but it's not under the Microsoft org on GitHub. Can you talk about why that is?

**Brian Ketelsen:** \[15:57\] I think that we made a concerted decision to give this all of the reality of being a community project, as opposed to "This is a Microsoft thing, so you can run ACI." We want this to be a tool that people can use with ACI, but with anything else, too. We've already had discussions with other major cloud providers that we can't name that are jumping on board to play, too. So it's a community thing, and we didn't want the big Microsoft badge on top of it. We're happy to take the credit for building it, because it's a really cool thing, but at the end of the day we want everybody to be able to use it, and people to jump in and contribute.

**Adam Stacoviak:** Can you talk about what the world was like before this Virtual Kubelet? I'm imagining that often we produce projects like this or solutions that were at some point before duct tape, sort of a band-aid. Was this possible prior to Virtual Kubelet that people do this before, and how did they actually achieve these goals?

**Erik St. Martin:** So adding to Brian's point about the community aspect, I think that we're trying to evolve our own products and make them more usable and offer things to help customers solve problems, and I think things like Virtual Kubelet definitely do that, but I think more importantly though is the advancement of the community and the technology, and we're -- you know, Kubernetes is still so new when we're trying to figure out innovative ways to use it and run it in different scenarios, for different workloads, and how to do that efficiently. So I think this is valuable internally to Microsoft, but we could also see the value to the broader community, and I think that's why we decided that this should be done completely in the open.

Now, as far as "Did things like this exist?", not to my knowledge. A few months ago [Brendan Burns](https://twitter.com/brendandburns) and a couple of other people put together a prototype of something like this to connect ACI to Kubernetes, kind of proved out the concept, and we kind of decided to take that and turn it into a much more fledged-out product, with more features, and a community effort.

I think there's some stuff for doing serverless with Kubernetes; correct me if I'm wrong, Brian, but I can't remember the name of the project... There's one out there. But I think we saw this as kind of more of -- so serverless I think was containers; you have the warm-up time of the container and stuff, and I don't know whether we're quite there yet, but definitely the batch and CI/CD jobs and bursting out into a cloud provider - I think that that's the main appeal in the core use cases we're focusing on first.

**Jerod Santo:** So James Levato in the chat would like to know, "Does this mean that a Virtual Kubelet will support PowerShell?" Can one of you all answer that question for him?

**Erik St. Martin:** I'm not sure what that would mean, because the Virtual Kubelet really is just an application that runs and behaves like it's the Kubelet on a node...

**Jerod Santo:** Inside of Kubernetes, yeah.

**Brian Ketelsen:** And Kubernetes supports Windows workloads already. So if you deploy a Windows workload on a Kubernetes cluster that has Windows servers on it, then you can already do PowerShell.

**Erik St. Martin:** Yeah, and we do have the ability to pass in a flag when the Virtual Kubelet starts up, to tell it that it should behave as if it's a Windows node. So you could definitely do that to grow your Windows workloads out into ACI or any other provider as those start getting implemented.

**Jerod Santo:** \[19:53\] James, hopefully that answers your question. If not, reformat it and ask it another way and they will address it, if we have a more full understanding. Just going back to the Microsoft thing, I'd like to introduce a little bit of a meta-conversation, because it's something that Adam and I think about, and I'm sure you all have thought about, in just trying to navigate life with a job and also - I'll just, for lack of a better term, call a personal brand, or like the person that you are... And both of you have recently joined Microsoft as employees, and you do a lot of your public speaking in that context, you're doing open source in that context, whether on the job, off the job... How did you deal with putting on and taking off the "Microsoft hat" and the way that that signals to your friends and followers online and whatnot?

**Brian Ketelsen:** You go first, Erik. That's a tough question.

**Erik St. Martin:** I think actually part of the appeal to this job, and a lot of the discussions early on was that we were to be ourselves; we were to be genuine and altruistic. There's not really this push from executives or marketing for Brian and I to run around and shout from the rooftops, like "Everybody use our stuff!" We get a lot of opportunity to contribute in things, but they just want us to be us. If I'm excited about a product, I'll talk about it, and if I'm not crazy about it, I won't talk about it.

One of the interesting things though is that we get the opportunity to use a lot of this stuff, right? Things we didn't have time to play with when this wasn't our job. AKS, which is our managed Kubernetes instance - we got to play with that before it was announced to the world, and we got to offer really good feedback to the product teams about things that we thought the community would want or need, or questions that we have. That's super appealing, because you kind of get to -- Brian and I are more members of the community; we're advocates, but we advocate on behalf of the community to the product teams and documentation teams. We're deeply ingrained in these communities, and this is what we think that they would want, or these are the problems they're facing.

**Jerod Santo:** So it goes both ways. Brian, we'd love to hear your thoughts on that.

**Brian Ketelsen:** Yeah, Erik covered quite a bit of it, and I would just reiterate that the main focus of the conversations when we started was -- or at least when I started; I wasn't there when Erik had his conversations, but the main focus of them was just how much they wanted us to be ourselves and continue to be ourselves, and not put on the Microsoft marketing hat. So all of the things that I represent when I'm talking, or online, on Twitter, blog posts or whatever - they're honest and not sponsored. They're things that I've discovered which are fun, or things that I'm doing which are interesting, and some of that is because Microsoft has allowed me the freedom to go play with things that I just didn't have time to play with before... But I'm not going to talk to the public about Microsoft products I don't enjoy. Instead, I'll turn around and talk to those product teams and say, "You know, the people that I know in the Go or Kubernetes community would probably enjoy this particular thing a lot more if it did X, Y and Z." That's a really nice place to be in, because the people internally at Microsoft are hungry for that kind of data, and really want to build products that everybody loves, and it allows me to keep a good conscience about the things that I'm talking about online.

**Erik St. Martin:** \[23:54\] And I think it's hard too, because evangelism kind of got a bad name for so many years. It was kind of, "Buy people with good names and have them talk about your stuff", and I think people kind of feel dirty when they hear that, and that's why there's the whole advocacy thing. So I think it just takes time for people to understand the difference.

I think different companies do advocacy differently, too. I know Google has a very similar advocacy program like we do, where it's more about being genuine to the community and helping the product teams evolve products or create new product offerings that solve problems that you're aware of in your community.

When you think about developing products, you wanna create good things that people use. You often get detached from the people who are using it, you are too busy building.

**Break:** \[24:49\]

**Adam Stacoviak:** So Erik, when we were at [KubeCon](https://kccncna17.sched.com/) you mentioned to me this project, and sort of the back-story on how it came together was I guess being in Austin for a week or so prior to the actual conference, and you were sort of already there for a couple of weeks. Can you kind of talk about maybe the early process of organizing that and maybe whatever the back-story might be to kicking off this project?

**Erik St. Martin:** Yeah, I didn't organize it per se; we had talked about rewriting this in Go, because a lot of the people who were working on similar projects in Kubernetes itself, that was the language it was written in, and then it sort of evolved into this "Well, wouldn't it be cool if...?" We didn't really dictate what the back-end was, we just kind of provided this project where you can kind of invent what the node actually represents.

So yeah, we were all scheduled as a team to go out to Austin, and talking with Ria, the PM on the project, and Robbie from ACI team - like, "Let's just get everybody to go out early and hack on it", and I think it might have been Brian Liston, who is Brian and I's manager, I think it might have been his idea.

We kind of all got together for a week, and it was actually -- even internally to Microsoft, it was a pretty big deal, because what was it, Brian, like eight different teams were involved?

**Brian Ketelsen:** Yeah.

**Erik St. Martin:** So yeah, we had some CDAs (cloud developer advocates), we had some (I think it's called) customer solutions engineers... I forget what CSE means. We had some people from the ACI teams, and people from the Azure Container Service team, we had people from the CLI team who built out stuff where there's now a command within the AZ tool that Azure provides to just install it for you... We had people working on CI for it, we had people working on the actual implementation... it was just super cool to see this big group of people from different teams and even organizations within the company just kind of like all jumping in and making it happen.

\[28:00\] It was one of those things -- we started working on it as we all had time, weeks leading up to KubeCon, but it really didn't kick off and start development until that week there, and it was just awesome to watch it get to the point where it's at in one week.

**Adam Stacoviak:** That's interesting to hear that you were working on it prior to it; it would make sense, but I wasn't really sure where the context began. Who's idea was it? Was it a meeting and someone was like, "Hey, we've got this problem..."? How did the idea get formed, who was leading that?

**Erik St. Martin:** I'm actually not sure. Brian, do you know? I know Brendan Burns was the first person to spike out a prototype of connecting these two. In that case, it was just really the call to the ACI connector; its job literally was just to bridge Kubernetes with ACI. I'm not really sure who had the idea... My assumption is it was Brendan, but it could have been somebody else.

As far as turning it into a modular open source project, I don't really know either. We got together to talk about porting it to Go and fixing a couple of issues and adding some needed features, and then I think it was just kind of like this collaborative brainstorm of "Well, we could do this, and we could do that... We could make it an interface that could be implemented", and it just sort of evolved organically through these discussions. Those things are usually hard to remember.

**Brian Ketelsen:** I just scrolled back through Slack and it was [Erik's](https://twitter.com/erikstmartin) idea to turn it into a Go interface that anybody could implement so that any provider would work. So Erik, once again, is being shy and humble, but it was absolutely his idea to turn this into more than just the ACI connector and turn it into something big.

**Adam Stacoviak:** Nice! Can you recall that, Erik, or are you just being humble? \[laughter\]

**Erik St. Martin:** No, I honestly can't recall it.

**Adam Stacoviak:** He's such a team player!

**Erik St. Martin:** A lot of people kicked out ideas and it's really hard to remember where the ideas came from.

**Adam Stacoviak:** Why do you think you felt that way? If you can't really recall it maybe you can't remember this part, but what do you think motivated you to feel so community-oriented? \[laughter\]

**Erik St. Martin:** Well, I think Microsoft is community-oriented too, right? It was meant to be open source from the beginning when we started building it. As far as other people implementing that stuff, it's really interesting because what IP are you really protecting? Look at all of us who came together in a week and kind of got to where we're at... So if you hoard it to yourself and not to everybody else, how long would it really take them to make something that's similar...? So what's the point?

**Adam Stacoviak:** Well, it was also self-evident too at KubeCon, just how much the community had grown, and it was all because of the original idea, which was to not keep Kubernetes a Google thing and make it more of a community thing, and then ultimately be donated to the [CNCF](https://www.cncf.io/) Cloud Foundation (Cloud Computing Foundation), to have that as like an underlying DNA... It was self-evident at that conference, so I would imagine that being there, once you got there and just kind of seeing how the community has grown, that that's the way things should operate in this community.

**Erik St. Martin:** It's always a juggle, right? Because on one hand you have to have your IP, you have products and you want to evolve those, and you wanna kind of keep stuff to yourself, so that you have these value-adds over competitors. From a business perspective it's totally understandable, but I think on the other side of it, all of the cloud giants and things like that see the value of working together to evolve the space.

\[32:00\] From my perspective - and don't know if this is Microsoft's view, but this is definitely mine... Competing for customers is kind of a losing game. I don't think if we offered Netflix free services forever that we could ever get them to convert over, right? So the idea of trying to compete directly and steal customers - I think that you're putting in a lot more effort for little reward. Now, building abstractions, Virtual Kubelet, building things like [Helm](https://helm.sh/) and [Brigade](https://brigade.sh/) and things like that that help make the cloud, and things like Kubernetes and containers more approachable to a broader audience - now you're creating more customers for everybody, right? Because there's more people that have not adopted the cloud than there are people there, and it makes far more sense for us to keep helping make it more approachable than it does to sit here and try to compete feature for feature, or hoard our knowledge in projects and stuff like that.

**Adam Stacoviak:** Well, speaking of people, let's give some credit to those who are part of the team, but as a by-product of that, can you talk about -- something you said earlier was you all hacked on it prior to the conference, but the idea was spawned to go ahead of time and sort of time-box some collected effort. It seemed a little bit like tunnel vision to focus on it, and out on the other end came this prototypical project, in time for the conference. Can you give some credit to the team that was involved and mention some names, but then also talk about what it was like to meet up ahead of time, where you met...? What were some of the circumstances you were in to make sure that you were all very productive?

**Erik St. Martin:** Yeah, I mean -- because we were all in different teams with our own priorities, and the CDAs travel a lot, and speak, and are creating content, the engineers on the product teams are busy with their own features and stuff, it was one of those, like, jumping in and out as people had time... So it made a lot more sense, I think -- I give Brian and Ria a lot of credit for coming up with the idea of like "Let's get everybody there, under the same roof, for one week." It's much easier to focus on it when that's literally what you're there for.

**Jerod Santo:** I'm trying to determine the scope of this project in terms of like surface area, as something that comes together so quickly, and I found things interesting on GitHub, I tried to look at the dependencies, and it said there weren't any, but there's a vendor directory and there's a bunch of stuff in there, and then I ran a clock on it, and there's like 1.8 million lines of code... So you guys definitely had some type of dependencies. But maybe help us out with understanding -- you mentioned the effort that went into this. I was thinking a lot of it is the idea, the design, conceptual... How much code was cranking, and who gets the props on that stuff?

**Erik St. Martin:** I think it was roughly -- well, the end result, because a lot of code was created and then deleted... \[laughter\] So it's much harder to tell exactly how many, but I think the end result if you exclude vendor stuff is around 4,000 lines of credit. I can mention a few names... I hope I cover everybody, but they're all in the blog post - Brian definitely contributed, myself, Jessie Frazelle... I'm gonna butcher some names: Julien Stroheker, Neil Petersen, Ria Bhatia, Rita Zhang, Robbie Zhang and Sertac Ozercan. I wish I knew the last names here; you always know people by first name, but... I think that's everybody, and I'm sorry if I left anybody out. It was crazy, and heads down coding, and...

**Jerod Santo:** \[36:01\] Let's talk a little bit more about the possibilities now, because now you have this thing, you have this new opportunity, which is you can load up this virtual Kubelet inside of Kubernetes and basically be a facade for all these other things behind it... First ACI, and then also this Hyper.sh, which I'm just learning is an on-demand container, per-second billing, another provider... You list out a few things in the post, and you mentioned CI as one of them earlier in our conversation, but what are some other uses? I know serverless is a possibility, but potentially some drawbacks there, you have batch jobs... Open up into those and tell us why people might want to do this.

**Brian Ketelsen:** I've got a really good one. Kubernetes itself is very much a container-focused, container-oriented workflow, but the Kubelet really doesn't care what it's starting. So it's entirely possible to register a Virtual Kubelet on your Mac, and as the workload, give it the name of a Bash script or some executable to run, and have that be the thing that gets executed when Kubernetes tells it to. So you could do this in a container-free environment, and you would lose all of the benefits of containers, but it's easily possible to do something really crazy like that.

**Erik St. Martin:** Yeah, and another one I list as a possibility in the post is virtual machines. So the Virtual Kubelet doesn't care, right? Kubernetes only cares that this node exists, and gives it work. It doesn't really care how it deploys it, things like that. The Virtual Kubelet - same thing; it just calls out and says, "I need you to create this pod or delete this pod." So you could have your provider provision a virtual machine and then run that pod inside the virtual machine in complete isolation, like if you were running a multi-tenant environment.

So there's all these creative things, and I'm really interested to hear other things people come up with, but I think the primary focus for at least phase one of rolling this out to be production-ready would probably be more along the lines of like your batch and CI/CD type stuff, where your core cluster where you have your provision VMs that are just on 24/7, they're kind of set up at a capacity to handle your normal workload, with some headroom, and things like that... But then allow you to run your batch work that may be really intensive, or it takes a long time only running a single instance of; you could run as many as you want in parallel. And batch, CI/CD - think about it the same way. But those can run out in this virtual node that's ACI, and you're only paying for the time that they're running. And they don't have to be run serially, they can be run completely in parallel and you're paying the same amount of money, it doesn't really matter. But then you're not paying for this idle resources running, so that you have leftover capacity for when your batch job runs at 3 AM, or whatever.

**Jerod Santo:** One thing you mentioned about serverless which definitely piqued my interest when I saw it is that you may have issues with warm-up time, because basically the containers need to spin up and spin down. Can you expand on that, and tell me why that's different than a [Lambda](https://en.wikipedia.org/wiki/AWS_Lambda), or... I'm sure Azure has a serverless thing - what's Azure's called?

**Brian Ketelsen:** Azure Functions.

**Jerod Santo:** Azure Functions, thank you.

**Erik St. Martin:** I'll leave this to Brian to describe, because I'm newer to the serverless world, so I think he would have a much better explanation than me.

**Brian Ketelsen:** \[39:46\] First of all, I have to find that amusing, if I'm the resident expert on services
... \[laughter\] Because that's just hilarious. But on the serverless side, when you're running a function, you generally are executing code live in some sort of environment, but if you were to use ACI or some other Kubernetes-inspired thing to do that, then you'd have to download a container from a container registry, a Docker container... And the time that it takes to download that container could impact your startup time, which would make your serverless function slower on the first run, or on the first run on each node, since that Docker container would be cached for the second runs. So there definitely would be an impact in startup time with a container versus not a container.

**Jerod Santo:** Since you're the expert, Brian, how do they do it on Azure Functions and AWS Lambda? Surely, they have to spin up something on-demand as well in order to get the environment ready for you.

**Brian Ketelsen:** There's two answers to that. Both Azure Functions and Lambda allow code execution in a sanitized environment, but it's not a container environment. So you're just executing a function. It fires up Node.js and runs your JavaScript thing, but that's not in a container. I can't answer for Lambda, but I know Azure Functions allows you to run a Docker container too, so if you're using the dockerized workflow for either one of those, you're already paying that price in startup time, but if you're not, then it would be a big difference.

**Erik St. Martin:** Especially in the Kubernetes environment, too... It can be even more slowed if the container that needs to run hasn't run on that node before, because then the image has to be pulled, and then depending on how large the image is, you have to wait for that. That's even how Kubernetes works, it's an eventually consistent system. I use a declarative API to say "This is my intent, this is the desired state", and then it evolves there. There's no guarantee that that's instant, the second that Kubernetes tells me "Yay, I accepted your new pod." It doesn't mean it's running yet, and it could take who knows how long, depending on whether it needs to pull images, and things like that.

**Jerod Santo:** So the other thing that -- you're obviously very excited about this, but you wanna see what other people can come up with. So these are just a few potential use cases; it's not quite production-ready yet, or it's on its way to becoming production-ready? What would be like a call-to-action for people? ...beyond use cases - maybe providers, people writing interfaces, people trying it. What do you want from the community at large at this point, with regard to Virtual Kubelet?

**Erik St. Martin:** I'd like to see people actually using it in some real use cases, and start fixing things that come up. Like we said, this was an effort where we all came together and hacked on it for a week, a little time leading into it, so it's very much still in its prototype phase. For the most part it works, but I imagine there's some rough edges and there's different areas that we still need to solve for. But yeah, mostly trying it out, reporting bugs... I'd love to hear use cases people think of, or different providers...

It's working its way towards production. We've got some people using it internally and playing with it, so we've been fixing things that come up.

**Brian Ketelsen:** I think one of the first providers that we'll see that has a generalized business use case is like a Jenkins worker, where you run Jenkins Master, or whatever they're calling the Jenkins Master thing now - you run that, and then it spins up Virtual Kubelet instances to do each one of the tests or the suite of deployment tasks, and then they go away. I think CI is probably going to be the earliest use case for something like this, but I also agree with Erik, we're gonna see some interesting stuff, too.

**Erik St. Martin:** \[44:10\] I'm really surprised by the number of people who see the vision. I knew for us and Hyper.sh who had forked our original connector that Brendan Burns had written - I knew those people would get it, like "Oh yeah, we can work on it together." But the number of people who saw the vision of like "Oh cool, now we can Kubernetes and it doesn't actually have to be backed by a physical node...", and use some of this on-demand infrastructure as part of your normal cluster - it was actually really cool to see that, and to see one of the keynote speakers mention that... It was just like, "Whoa...!"

**Brian Ketelsen:** Yeah, one of the things that I'd like to see, and I would write if I had any time, is something like Xen Hypervisor adapter for Virtual Kubelet. [Xen](https://www.xenproject.org/) has an API - not a complicated one even - and it would be relatively painless to stand up a Xen node and use the Virtual Kubelet to run workloads inside Xen virtual machines, easily. That's another use case that would be really straightforward with Virtual Kubelet.

**Break:** \[45:30\] to \[46:09\]

**Brian Ketelsen:** Alright, so this is a hybrid show with Changelog and the GoTime.fm crew. In the GoTime Podcast we like to bring up interesting news and interesting projects that have come across our news desks over the course of the week, so we're gonna kick that off now. Lots of interesting things have happened since the last time we gave out news. Probably the biggest is the Go 1.10 Beta 1 release. Lots of things changed there behind the scenes, not a lot changed that's visible though, which is kind of nice... As per the Go usual. Erik did you have any favorite feature of [Go 1.10](https://beta.golang.org/doc/go1.10) that you wanted to hit?

**Erik St. Martin:** I mean, with every Go release there's always performance improvements, and I know that there was some stuff in there about lowering allocation latency and improving the garbage collector, but a lot of the stuff that I saw that was really cool was surrounding testing. It now supports caching your test results. If it knows that none of the code behind it has been changed, it just runs and then produces the output of the last run and shows that it's cached. So that should make consistently running your unit tests (your whole suite) much faster. It also runs govet before it does the tests, which is super cool.

**Brian Ketelsen:** It's interesting you mentioned the cache test results... That's actually a bonus side effect of the compiler changes that they made. The -a flag that we have in the previous versions of Go, that would force you to recompile everything - so if you did gotest-a or gobuild-a, they would recompile all the things underneath the covers... That's no longer supported, it's no longer needed, because the compiler now knows based on the contents of the file whether they've changed, and it doesn't use file timestamps; I think I have that the right way.

\[48:11\] So now it will only compile the things that are absolutely necessary to compile, and that benefit will be mainly in compile times, but it also comes across in terms of tests, too. So we don't have to rerun tests that have already run successfully with the exact same code... So I'm looking forward to increased speed for compile times; that will be fun, as always.

**Erik St. Martin:** Another exciting thing is if you're not watching the Gopher Academy Blog, we started our annual [Advent Series](https://www.gopheracademy.com/series/advent-2017/), and there's a whole bunch of good articles in there already, like writing a Kubernetes-ready service from zero, there's a gRPC one in there in Go, Brian wrote one about repeatable and isolated development environments for Go, Damian Gryski wrote one on minimal perfect hash functions... So there's a bunch of good ones in there already. That's not like all the ones I say are good, these are just the ones that I can think of off the top of my head, and there's still a couple weeks left, so definitely follow that if you're not already... We'll drop a link in the show notes.

**Brian Ketelsen:** Yeah, it's a really good series this year, lots of really great articles. So I came across something that should inspire the hackers in all of us. Everybody who has anything close to a modern car has that obd2 port underneath the dash, and I've always wanted to play with it, interface my--

**Erik St. Martin:** Me too...

**Brian Ketelsen:** ...and just do something super hacky and fun and awesome. Well, somebody on GitHub released a Go interface to the obd2 system, and they called it elmODB. So I'm assuming that Elmo is like the Sesame Street Elmo, but it's elmODB, and that's at GitHub.com--

**Erik St. Martin:** elmOBD.

**Brian Ketelsen:** elmOBD.

**Jerod Santo:** It's a database, or what's going on...?

**Brian Ketelsen:** It's OBD.

**Jerod Santo:** Oh, OBD, not DB.

**Brian Ketelsen:** I said ODB. I said that wrong.

**Jerod Santo:** The old dirty database.

**Brian Ketelsen:** Yeah, it's the Go adapter to that. In theory, you could bring a laptop into the car and really start hacking into stuff, and I intend to do that at some point really soon, because that just sounds fun.

**Jerod Santo:** Is there any way, Brian, that you could somehow hook your car up to your Go-based barbecue system, and maybe when you rev the motor, or something, it barbecues better? I don't know, I'm just spitballing here... What can you do?

**Brian Ketelsen:** These are good questions that I should probably--

**Adam Stacoviak:** Barbecue is better. I like that.

**Jerod Santo:** Barbecue is better...

**Brian Ketelsen:** Barbecue is better somehow... I don't know. That's a good question, I don't know the answer to that. I can't think of an immediate application, but that doesn't mean that one doesn't exist.

**Jerod Santo:** Real quick, Brian, for the Changelog side of the listeners who haven't heard about your barbecue system - probably most of the GoTime listeners have, but maybe there are new ones who haven't... Can you just tell us about this? Because it's so awesome.

**Brian Ketelsen:** Sure. It's a Raspberry Pi setup that Erik and I have been building for just a little over a year. It includes some hardware pieces, electronic pieces that control the air flow into a fire-driven barbecue... So a real old-school barbecue, with a fire pit. We use a Raspberry Pi that has a relay; the relay turns on or off a fan which feeds the air into the fire pit, which either dampens or increases the fire temperature. Then there are temperature sensors that determine the temperature of the smokebox, so we know whether or not we need to increase the temperature of the fire or just let it smolder for a while.

\[52:04\] The whole thing feeds [MQTT](http://mqtt.org/) data off to a [Grafana](https://grafana.com/) dashboard, so we've got gorgeous graphs that show us how hot the food is, how hot the firebox is... It's just a great, big IOT barbecue blast.

**Jerod Santo:** That's beautiful. Does the chart go online somewhere, so people can remotely participate in your cooking sessions?

**Brian Ketelsen:** It's funny you should ask that... \[laughter\]

**Erik St. Martin:** Brian was gonna do a whole pig one weekend, and this is like when we really threw it together, like "Okay, we need graphs and charts and stuff with Grafana... And I think it was me who came up with the domain name, but I happened to search and [bbq.live](http://bbq.live) was available, and we were both like, "Yes!"

**Jerod Santo:** So it is live. You got it? I'm loading it up right now...

**Brian Ketelsen:** You won't see any data there right now because nobody's barbecuing, but if one of us were barbecuing, you'd be able to pick which of the two grills, on the top of the screen where it says Home, pick either Brian or Erik's, and you could see the feeds from our barbecues.

**Jerod Santo:** Well, what are you guys waiting for? I wanna see these charts move. Run out there and start barbecuing something. \[laughter\]

**Brian Ketelsen:** We've got a job, man... \[laughter\] I can barbecue every day.

**Adam Stacoviak:** Aren't you usually barbecuing on Thursdays, though?

**Brian Ketelsen:** Thursday is a pretty big day for barbecuing, yes, but tonight we're going to get a Christmas tree and stuff that's gonna take me away from the house, so... No Q today.

**Erik St. Martin:** Our OBD2 thing - is this where we insert the legal disclaimer that we are not responsible for you damaging your car?

**Brian Ketelsen:** Yes, that's probably a really good place for that.

**Adam Stacoviak:** I had no idea this port actually even existed. I mean, I know there's ports, but I didn't know there was this certain port. I haven't even considered the idea of plugging something into it and port-scanning it or finding ways to hack it.

**Jerod Santo:** That just does metrics though, right? There's no write ability...

**Brian Ketelsen:** No, you can \[unintelligible 00:54:05.21\]

**Jerod Santo:** Can you?

**Brian Ketelsen:** Yes, you can.

**Erik St. Martin:** Yeah, so if you go to a mechanic, or you go to Autozone or Advanced Auto or wherever and you have a diagnostic light on, that's what they're connecting their little machine to to tell you what the code means.

**Jerod Santo:** Okay.

**Brian Ketelsen:** So it kind of connects to the CAN bus that goes throughout the car where all the messages from the internal computers kind of share... So yeah, you do have the ability to sometimes change stuff. You can definitely pick up the speed of the car, and RPMs and things like that through that port.

**Adam Stacoviak:** Remove the governor...

**Brian Ketelsen:** Well yeah, how much you can change really depends on the car manufacturer. Some manufacturers have a decently secure system, and some are wide open. I mean, you could literally do things like turn on the turn signals from your computer.

**Adam Stacoviak:** What's security like though? How secure do they make this thing? I don't know anybody who's hacking cars...

**Erik St. Martin:** There's people who have done it.

**Brian Ketelsen:** If they use TLS for encryption, then it would be really difficult to send messages to systems that require the encryption bits. But if they don't use any encryption, then you just need to know what message to send, because it's a giant bus. So you send a message out on the bus, and anybody who cares about it will do something. That's why some actions that you perform while you're driving cause other things to happen - you turn on the turn signal, but it turns off the left front headlight because the left turn signal is on... You've seen that in the new cars - that's all bus-driven.

**Adam Stacoviak:** I wonder if there's a database or an index out there of, like you had said, cars or trucks or vehicles that use or don't use TLS for encryption; that way it might give you a leg up, like "Oh, I have a Ford Explorer. I can hack that."

**Brian Ketelsen:** \[56:04\] I'm sure there is.

**Erik St. Martin:** Yeah, there's a lot of people who have reverse-engineered some of the messages on the canned bus, and things like that; there's lots of people apparently tearing apart their cars and reverse-engineering them... Surprisingly.

**Adam Stacoviak:** Like, "Hey honey, I just bricked the truck. It's no longer \[unintelligible 00:56:19.26\] Now it doesn't move."

**Brian Ketelsen:** \[laughs\] "We're gonna need a new truck."

**Adam Stacoviak:** And the manufacturer's like "What are you doing with the --" what is it, ODB2 port?

**Erik St. Martin:** [OBD](https://en.wikipedia.org/wiki/On-board_diagnostics).

**Brian Ketelsen:** Yeah, I said it wrong the first couple times and now it's gonna stick.

**Adam Stacoviak:** Does it mean something, is it short for something, OBD?

**Erik St. Martin:** Yeah, it's On-Board Diagnostics.

**Adam Stacoviak:** Okay, that makes sense... And it's version two, I'm assuming.

**Erik St. Martin:** Yeah.

**Jerod Santo:** It just reminds me of a Changelog we did back in the summer, Adam, with Tim Mecklem, who reverse-engineered the blood glucose monitor for diabetics with Elixir, and basically was able to build interfaces into that to get the data off, and then eventually to run the -- what's it called, the insulin--

**Adam Stacoviak:** The loop.

**Jerod Santo:** Yeah, loop was the term that I remember, but... Anyways, just thinking about reverse-engineering things, and devices that should have encrypted communications between parts that don't.

**Adam Stacoviak:** It kind of reminds me too of the movie The Martian. There was one point where Johanna-- I forget the girl's name now that I think about it, but she had to be tasked with hacking the computer to essentially override the ability for NASA to course-correct, essentially... And it kind of reminds me of that. She hacks into the code really quickly and determines that because it's not a secure type of thing, it's just meant to be a nice-to-have, not a need-to-have, they never really intended to put security on it, because they never considered that there would be mutiny, but of course, anytime you have a ship - or in this case spaceship...

**Jerod Santo:** Still a ship.

**Adam Stacoviak:** It's still ship, but it's a spaceship; you've gotta prefix it... That the crew may go against the will of its originator, which is NASA.

**Jerod Santo:** Well, let's not get Adam too far on The Martian...

**Adam Stacoviak:** Yeah, don't get me into the movies, man... But that's fun stuff to think about, to have -- everybody typically has a vehicle outside their house, and most people listening to either The Changelog or GoTime would be the type of people that would go out and find a way to hack this thing. I think it's pretty interesting to think about all the listeners somehow breaking in or interestingly hacking their vehicle.

**Jerod Santo:** Or maybe - just maybe - they're running Fuzzers against bbq.live, trying to ruin Brian's dinner. \[laughter\]

**Brian Ketelsen:** Bring it!

**Erik St. Martin:** Luckily, that is only push \[unintelligible 00:59:01.23\] there's nothing on bbq.live that actually pushes down to the controller. It's only metrics. If you find a way, I will be impressed.

**Adam Stacoviak:** Any more fun news to cover?

**Erik St. Martin:** There was the [Joy Compiler](https://github.com/matthewmueller/joy)...

**Adam Stacoviak:** Oh, gosh...!

**Erik St. Martin:** Yeah, which is the new go-to JavaScript compiler that recently came out. I haven't had a chance to play with it, so I don't know how it compares to [gopherjs](https://github.com/gopherjs/gopherjs). I don't know whether you have, Brian, but it seemed cool and it's something I will probably try to play with.

**Brian Ketelsen:** Yeah, it's not complete enough, so in terms of completeness, Gopher.js is close to 100% or at 100%. Joy, I think they claim roughly 80% complete; there's several things that don't compile from Go to JavaScript yet... So it's not quite there.

\[59:57\] Honestly, it was one of those things that I'm glad they did it, because it's awesome, but I wondered why they didn't spend the time on changing something in Gopher.js if that was the -- if there was something missing in Gopher.js, but...

**Adam Stacoviak:** I always wonder what happens there whenever you have a fork or a very paralleled project that's got similar motives, similar goals, and they intend -- or they go on their own, essentially. It's confusing sometimes.

**Erik St. Martin:** What usually happens is people get confused and they create a third option. \[laughs\]

**Adam Stacoviak:** Right.

**Brian Ketelsen:** Yeah. Rails and Merb, and... \[laughs\]

**Jerod Santo:** There's a section on the website that says "How does Joy compare to Gopher.js", so he does answer some of these things.

**Erik St. Martin:** Oh, awesome.

**Jerod Santo:** So you can read that, we'll link to it in the show notes, but the overall thing is they're two different approaches to the same goal, so apparently just wanting to take a different angle at a similar end, which I think is worthwhile.

**Adam Stacoviak:** Touché then.

**Brian Ketelsen:** Yeah, it's totally cool.

**Adam Stacoviak:** I think it's worth mentioning too the design of this page. I mean, going back to some things we tend to -- we've just had a conversation which is a future episode of the Changelog, it's just like this intention behind your design... This page does instill some joy into me. And for those going to [mat.tm/joy](https://mat.tm/joy/), which is the URL to go to to check it out, it says The Joy Compiler, and it's beautiful clouds, vanilla skies, and an air balloon.

**Brian Ketelsen:** Pretty pastel colors, yeah. It's very joyous. I would agree with that.

**Erik St. Martin:** Outside of that, we can kick off \#FreeSoftwareFriday, too.

**Brian Ketelsen:** Let's!

**Jerod Santo:** Let's do it!

**Erik St. Martin:** I'll go first. At KubeCon, Brendan Burns, who works at Microsoft and is one of the co-creators or Kubernetes, announced this new effort he created, which is called Metaparticle ([Metaparticle.io](https://metaparticle.io/)) This is extremely interesting... Basically, what it is is this idea that through annotations in code or actually almost like a DSL within the language, just basically libraries that you can include, that you wouldn't have to be familiar with a Docker file and a Kubernetes spec, and whatever you're writing your stuff, and maintain properties like what port it's bound to, and then the container and making sure it exposes it, and making sure the pod spec has that in there, and then making sure that the service that load balances between the instances of it also have that, and there's kind of like this disconnect where if you change things...

And it's just a lot for people to understand four or five languages to be able to build an application and deploy it to the cloud... So there's this experiment of this grand vision of what would it be like if it was just part of writing code, like it was a library within your code, and when you compiled it, it just knew how to containerize itself and deploy it... And it's really worth a look, and I'm interested to see these abstractions.

I think Kubernetes is an awesome abstraction over infrastructure, but I think we still haven't got to "What's the abstraction over that, that makes it just seamless to build an application and have it deploy?" ... for most use cases anyway.

**Brian Ketelsen:** Yeah, and this reminds me deeply of a Twitter conversation I had maybe a month or two ago where I said something similar to this... You know, what kind of abstractions are we gonna build on top of Kubernetes? What are we gonna build on top of distributed systems? And somebody that I remember respecting said something to the effect of "No, there will be no more abstractions. We've made all of the abstractions we can, and we're not gonna make any more on top of the stuff that we have. This is it." And I thought, "Well, that is just the most close-minded thing I've ever heard." Of course we're gonna abstract more; if we didn't abstract more, we'd all be writing Assembly language. We'll always continue to grow like that, and I think Metaparticle is a great step in that direction of really putting the complexity of distributed systems aside and just allowing you to code intent.

**Erik St. Martin:** \[01:04:09.16\] I forget exactly how Brendan worded it, but it was something along the lines of he wants to empower developers to build systems they wouldn't normally build. Learning distributed systems is a challenge; it's more things -- as developers, we're having to know and learn and understand a lot more things just to participate in the current way things are done.

I don't know who coined this, but having conversations with Joseph Jacks, he talks about it... When you think about this, it's like a pendulum - first we swing up and out, and that's kind of like what we're doing with some of the Kubernetes stuff, right? And then next we're kind of down and in, where it's sort of like embedded within the language, and Metaparticle and things like that are partly kind of like the down and inside of that...

**Jerod Santo:** I don't think we're gonna be done abstracting until we've recreated the holodeck from Star Trek. \[laughter\] At that point -- that's a good abstraction and we can just take a break after that and enjoy the fruits of our labor. But until then, more abstraction.

**Erik St. Martin:** I want almost Matrix style; I just want to think it and for it to be, right?

**Jerod Santo:** Exactly. Who would like to go next?

**Brian Ketelsen:** I will. I've got an interesting terminal emulator that I've found... It's at [github.com/eugeny/terminus](https://github.com/Eugeny/terminus), and it's yet another Electron app that you can install on Windows, Mac or Linux. I'm using it on Windows because it's actually a really nice Linux feeling terminal emulator, which is something that's missing in the Windows world. So it's a really good emulator for that Linux feel, but on Windows.

**Jerod Santo:** Well, I'll go next. A project that I love and I'm thankful for, and one that probably everybody has heard of, but still worth all the shoutouts, because Jack Likić's [Semantic-UI](https://github.com/Semantic-Org/Semantic-UI) is a beautiful system akin to a bootstrap or a foundation, but one that just really speaks to both my design sensibilities, and really just the way that you use it once you get used to the semantics of it. It just allows for very quickly cranking out admins and prototypes and stuff like that, in a way that's saved me lots of time, and also made me look not too bad with clients and whatnot over the years...

So if you don't know about Semantic-UI - you probably do though, because it's one of those 100,000 stars on GitHub type of projects - check that out, and thanks Jack for all the work you've put into it; I know he has. He's been on the show a few times, and he has a ton of people bugging him all the time about bugs and fixes and improvements, and it's like a huge, massive undertaking and a huge boon to the open source community, so... Check out Semantic-UI.

**Erik St. Martin:** Surprisingly, I had not heard of that. I've been disconnected from the frontend space, so...

**Jerod Santo:** Well, there you go. Adam?

**Adam Stacoviak:** Is it my turn?

**Erik St. Martin:** It is your turn.

**Adam Stacoviak:** Well, it's a little meta here... I'm gonna mention our transcripts, because it was a participant in Hacktoberfest, and then also 24 pull requests... So if you go to [github.com/thechangelog/transcripts](https://github.com/thechangelog/transcripts), we have all of our episode transcripts in markdown format, open source, meaning that not only can you read them as a markdown file if you wanted to, but you can contribute to them. So that means that if you wanna help clean up "unintelligible", which is super easy to find just by literally searching the repository for "unintelligible", and you wanna listen to episodes and hack... You can easily contribute to open source by fixing those kinds of things.

\[01:08:14.28\] I love that they're open source, because that was a dream of mine, and Jerod, you made it a reality, which I think, you know, it pays in spades when you don't really consider the impact of it, but like rewinding... You know, if we didn't do it like this, we would miss out on community. And chris48s and many others have submitted pull requests to improve these transcripts, and I think it's phenomenal. We've got 28 closed pull requests. None of them by me, and none of them by Jerod, you know what I mean?

**Brian Ketelsen:** Does that mean people actually listen to this stuff?

**Adam Stacoviak:** Yeah! I'm gonna just say a few names... We've got Jared Dillard, Sharang (it's some usernames, of course), Shari Hunt, chris48s, Dotan Dimet, Matt Warren... These were all obviously usernames. ShurcooL... Which was a self-correction; that was a GoTime episode. ComodoHacker, beardicus, merikan... Many others. caseyw, listener of GoTime, here in chat obviously; this time I'm not sure, but he usually is. A couple others. PeterMortensen...

The point is that we ship these shows, we transcript them so that they're accessible to anybody, as best we can - not only in audio format, but also text format. We have a human behind the scenes, [Alexander](https://github.com/alexandrumaier), who helps us make sure that every single episode we produce is transcribed to make it accessible, but he's not perfect, and the community can step in and help, and we appreciate it.

**Erik St. Martin:** You know, I think even outside accessibility it's nice for discoverability, right?

**Adam Stacoviak:** Reading along... Cmd+F...

**Jerod Santo:** It doesn't hurt for SEO for sure, but I'll tell you where it really helps... It's on the off-chance - and this happens once in a while - that somebody submits one of our shows to [Hacker News](https://news.ycombinator.com/), which is just the loveliest group of hackers in the world, every single time somebody would say "TLDL" (Too Long, Didn't Listen). They're like, "Why aren't there transcripts?" They've always complained, "I wanna just read this, I don't wanna listen. It takes too long." And finally, finally we can hear silence, as there's a transcript right there for you, and there's nothing to complain about. That's my own personal enjoyment.

**Adam Stacoviak:** Yes.

**Jerod Santo:** They can complain about the content, finally.

**Adam Stacoviak:** And on that note, I've gotta go in like one; it's a tight close to this show... But Erik, it wouldn't be a GoTime or a Changelog if you didn't take us out...

**Erik St. Martin:** \[unintelligible 01:10:54.29\]

**Adam Stacoviak:** What do you normally say? You normally say "Thank you, everybody, for..."

**Erik St. Martin:** \[01:11:00.04\] Well, thank Brian and I for being on the show... \[laughter\]

**Jerod Santo:** Real quick, let's give a shoutout to the missing voice on the show, [Carlisia](https://twitter.com/carlisia)...

**Adam Stacoviak:** Oh, yes, of course...

**Jerod Santo:** ...who is an awesome panelist on GoTime, and unfortunately not here today, but we're thankful for her.

**Adam Stacoviak:** Good job, Jerod.

**Jerod Santo:** She's a pillar in the Go community and the open source community. She's been a huge part of our community for a long time. Carlisia, we love you, and we miss you today.

**Erik St. Martin:** And we hope that she feels better.

**Jerod Santo:** Okay, now you can take us out.

**Erik St. Martin:** Okay. So thank you, everybody, for being on the show. I love the fact that Jerod and Adam came in and took over, so it was kind of fun, especially getting to talk about something that Brian and I have worked on recently... Huge thank you to all of our listeners; you keep the show going. Definitely share the show with friends and co-workers.

You can find us at GoTime.fm, or @GoTimeFM on Twitter. If you wanna be on the show, have suggestions for topics, hit us up on GitHub.com/gotimefm/ping... And I think I've covered everything. We've got a short holiday break, so we may skip a couple of episodes for the holidays, but we'll see you in a couple weeks.

**Adam Stacoviak:** See you, everybody!

**Brian Ketelsen:** Thank you!

**Jerod Santo:** Bye!

**Erik St. Martin:** Bye, everybody!

**Brian Ketelsen:** Bye!
