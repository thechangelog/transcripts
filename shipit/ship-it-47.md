**Gerhard Lazu:** A month or so ago I was asking my Dagger team "Who is a good person to talk Docker Swarm with?" And Sam, he turned around and he pointed to the person that was sitting next to him, and said "Andrea was the lead engineer on Docker Swarm. So maybe talk to him." Welcome, Andrea, to Ship It.

**Andrea Luzzardi:** Thank you, thank you. Happy to be here.

**Gerhard Lazu:** Before this episode I did a bit of research, and I've found so many good presentations, recorded ones, slides about Docker Swarm... So you did an excellent job promoting it, I have to say. This is 2015, 2016. A lot of good stuff.

**Andrea Luzzardi:** Yeah, '15, '16, '17 also...

**Gerhard Lazu:** Yeah, it was a couple of years, for sure. Why are we talking about Docker Swarm? That is a great question, that I'm sure many of our listeners are thinking. Tyler Smith, one of our listeners, was asking about "Let's have an episode about Docker Swarm." Which prompted me to ask around and see who would be the best person to talk Docker Swarm with. So Tyler wrote "I use Docker Compose in development and production on a single machine." Tyler, I hope it's not the same machine. If you've learned anything, please tell me it's not the same machine.

"While I'd like to explore scaling my apps, I feel like I might not need Kubernetes yet. I would also like to keep leveraging my Docker knowledge." And he has the following questions. Before we cover the questions, I am so curious to find out from Andrea about the Docker Swarm story. How it started... Let's start there - how did Docker Swarm start? The idea, the concept, the implementation... What did that look like?

**Andrea Luzzardi:** \[03:58\] Yeah, I'd be happy to talk about that. It's actually a very long story, so I have to go back a few years... So it all started with dotCloud, which was the company behind Docker at the time. So we have to go back to 2011, actually. At the time, if you wanted to deploy an application, you had two choices. So either you manage your own machines, like provision a cluster, either bare metal or with EC2, and kind of like figure out a way to provision your services manually, or like using Salt or Ansible. Or if you're lucky enough to use Ruby on Rails and Postgres, then your answer was Heroku. But there was nothing between. If you happened to be using Django and MySQL, then you were out of luck. You had to provision your own cluster.

So that was the premise behind dotCloud - it was like Heroku, but it was any language, with any database. And it turns out that it's pretty hard to do, because now you have to handle a bunch of different languages on every machine, with different versions per language, and that's not something simple to do. Also, at the time it was impossible on EC2 to run VMs, because you were already in a VM. So that's where containers came in.

We discovered \[unintelligible 00:05:20.05\] started to create our own container runtime internally. That's basically an ancestor of Docker. But there was no tooling around that, so we had to built our own container builder, which eventually became Docker Build. We had to build our own registry; we had to build our own load balancer, because load balancers were meant for machine-to-machine, but not machine-to-container.

It's actually Sam Alba that created something called Hipache, the Apache for hipsters. It was an HTTP load balancer for containers. And finally, we had to put those containers into machines, and so we created a container orchestrator internally.

So we had this entire stack, with basically what eventually became Docker, the registry, Docker Hub, Docker Build and Docker Swarm. So we had all these platforms back in 2011. Then a few years go by and Heroku now has buildpacks to build any language. They were getting a lot of attention from the community, and we thought that was pretty cool; why don't we open source the core of what we have, starting by the container runtime? So that's where Docker came to be, in 2013. So that's the long history behind that.

In 2013 we open sourced Docker, and about a year after, in 2014, we reached 1.0. That was announced at the first DockerCon. People started to have questions, like "How do I do this, or that?" For instance, some of the questions were like "Okay, now I have a container, but I need to run my entire application." And people were starting to do some hacks around that, like shoving an entire init system, like systemd inside the container to run multiple processes. We were trying to push a new approach, of just running a single service per container... And so basically having multiple containers, like microservices. And then the question arose, "I can docker run one container, but how do I do that with multiple containers?" So that year we released Docker Compose...

**Gerhard Lazu:** Oh, yes.

**Andrea Luzzardi:** ...to be able to \[unintelligible 00:07:34.01\] And then the following question was like "Okay, now I've composed, but I'm running this on the laptop. How do I run this on a different machine?" And I don't think at the time there was any Terraform, or at least it was not popular enough, so we released Docker Machine. So now you have Compose, you have Machine, and you can deploy your containers to one machine, but now if you start three machines, how do you manage that? And that's where Docker Swarm came to be.

\[08:02\] And we were not talking about orchestration back then. It was much simpler than that. It was like "We have this very popular Docker API, that works with one machine. How do we make this API on multiple machines?" So Docker Swarm was this very simple API multiplexer that was completely stateless. You could join a couple machines together. It would just boot up, scan the state, and give you the same Docker \[unintelligible 00:08:27.23\] and Docker Run would just pick one machine, docker restart, and all of that. Basically, we just made it multi-machine. So that's pretty much how Docker Swarm came to be.

**Gerhard Lazu:** Okay. So it was this multiplexer... Okay, so hang on. First of all, Sam was a hipster? I still can't get over that. \[laughter\] No way, I can't imagine Sam...

**Andrea Luzzardi:** Yeah, it was a load balancer for hipsters.

**Gerhard Lazu:** Okay, I see. I have to ask you where he got the inspiration from. Maybe we very quickly say "Hey Sam, can you join this, and answer this question?" But no, no, no, I'm going to ask it offline, and maybe if someone's curious we can share the answer via Twitter, or something similar.

**Andrea Luzzardi:** We're not very good at naming stuff.

**Gerhard Lazu:** Yeah. I thought Solomon was the hipster... \[laughter\] He was obviously very, very popular and he was very excited about Docker. And that's actually how I got into Docker. That excitement, and the story, in that you can take it from a really simple -- like from your local machine, and you can go into production, and you have something very similar in production. It's the same familiar API. I really like that. But you're right, it was like "So how do I scale this from one machine to multiple machines?" And when I had to do that, I said "Okay, well, it kind of makes sense as long as I can join them... But what happens afterwards?" How do I do upgrades? How do I handle my stateful stuff, like my database, my PostgreSQL? What happens with the volume? Will it move around? What about the whole plugins, where for example I want to stream those logs to a log aggregator, and metrics, and then it has to have... All the questions start coming out of that.

So I'm wondering, Andrea, how did you go from this Docker Swarm, which was just a multiplexer, to a system which needs to handle a distributed config, which needs to handle networking across multiple hosts, and rebalancing things, and volumes moving... Basically, all the things that Kubernetes does. How did you go from that simple multiplexer to something more? What did that journey look like?

**Andrea Luzzardi:** Yeah, so we started with the multiplexer, which released in 2015, and then the community came back with questions. Basically, everything you said. "Okay, now I have two containers running, but how do they talk to each other? How do I attach storage?" And Swarm at the time - we built it with the same principle as Docker; it must be good DX, simple to install, simple to use... And Swarm basically followed that by being stateless, and using the same Docker API. But we realized that the Docker API, which was designed for a single machine, didn't cut it anymore. We needed something... And that's where Swarm mode, so the internal component SwarmKit came into play.

The idea was twofold. One, we're gonna have a dedicated API for multiple machines. So that's the Docker Service API, that contains more hooks for multi-machines, like what's the replication strategy, how many instances you want, do you want to pin this container to a specific machine, and so on and so forth. And then also having state, finally. You cannot do complex cluster management without state. But what made it hard is that we didn't want to have to set up a three-machine Etcd cluster to manage one production machine.

\[11:58\] So that was really the tricky part, and so that's where most of the engineering went. We started to basically have a Raft implementation. So we took Etcd's core Raft implementation and bundled that into SwarmKit, so that nodes could just talk to each other and reach consensus. And then we created this Docker Service API on top.

In addition to that, we pushed also other parts of Docker to become modular. So we had Docker networking modules, Docker volume modules... And kind of like started to have multi-machine built into that. So that happened... I think Swarm was stable in 2015, and probably a few months later, end of 2015, we started to work on this new mode, which we announced -- I think it was DockerCon in 2016, in June. So it took us 7-8 months to come to that.

So yeah, that's how we went from a simple multiplexer to a full-fledged orchestrator. At the same time, there was Kubernetes that was available, but it was kind of hard to set up and manage and use. You know, there's the very famous documentation by Kelsey, "Kubernetes the hard way", but at the time it was actually "Kubernetes the only way", because there was no managed service, there was nothing... So you had to jump through many hoops to get a Kubernetes cluster up and running. We wanted to provide something simpler; not the only way of doing it, but from what we were hearing from the community, we just wanted something for small size clusters. We didn't want to manage 10,000 machines. Most applications at the time were pretty simple, because Docker was not really great at multitenancy. On a single machine you could not have multiple customers fighting for the same CPU, because isolation was not great... So people were managing many small clusters, rather than a 100 machines cluster. So at the time, the strategy made sense.

**Gerhard Lazu:** So you mentioned Kelsey Hightower, and I'm very glad that you did. Not only we had him recently, and he mentioned "Kubernetes the hard way", how famous it became, and how many people drew inspiration from it, but he's also the same person that introduced you and Sam at KubeCon North America 2015, when you talked about Docker Swarm and Kubernetes. That was the title of the talk, "Docker Swarm and Kubernetes." And what Kelsey said is "It's the first talk where he knows that the boss made someone present at the conference", because Sam was presenting with you, and at the time he was your boss. Now, I'm wondering if the same thing happened now. Because I asked who knows Docker Swarm, and Sam went "Andrea does!" So he basically volunteered you for Ship It. \[unintelligible 00:14:42.07\]

So one thing that you mentioned at that conference, in that talk, was how Docker Swarm 1.0, how you benchmarked it to a thousand nodes, and how it could run 30,000 containers. What was that like, to benchmark that, to realize the scale that it could reach? Because I'm pretty sure at the time Kubernetes was not able to run on a thousand nodes, in 2015.

**Andrea Luzzardi:** Yeah, for sure. That was actually a very interesting talk. As I said, the goal again was to make running on multiple machines easy... So Swarm had a built-in orchestrator, but the goal was not to push our orchestrator everywhere; we actually had support for Docker Swarm backed by Mesos, and the reason we were at the first KubeCon was to announce that Docker Swarm supported running containers on Kubernetes. We just wanted to have the Docker API simple enough, but if you wanted to run a Kubernetes cluster or a Mesos cluster, so be it. You could bind Swam to your Kubernetes cluster and just do a docker run, and it worked.

\[15:51\] So the built-in orchestrator, that was just for - you know, if you had neither Kubernetes nor Mesos, well, we had a simple one baked in. That was the goal. It turns out the built-in one was so simple because - again, stateless, just a multiplexer, \[unintelligible 00:16:06.14\] People were saying "Oh, it's so simple. Will it handle 10 machines, 20 machines?" So we just fired up a thousand nodes cluster, and we were running commands against it, just to see how it would go, and it didn't break at all. So that was not the intended purpose.

I think the internal automation, we were regularly pushing it (I think) to 20 machines. That was the target. We didn't think at the time anyone would run it above 20, because again, multitenancy was not great, so... Many clusters for one company, rather than a gigantic cluster.

Also, it was in 2015(ish), so people were just migrating to containers. They didn't have their entire infrastructure on containers. Most of the machines were managed manually, and then maybe they started to have one cluster on the side just for containers, and it was more or less per team or per service. I guess the 1,000 machines app, and it was a happy incident, but not my design.

**Gerhard Lazu:** Yeah, it makes sense. Even now, to be honest, what people recommend is run small Kubernetes clusters, don't run big ones. It's an anti-pattern. You'll start hitting various issues around DNS, around networking, around scheduling, if you run two large containers... So this is a known thing even today, and it's not recommended.

**Andrea Luzzardi:** Yeah.

**Gerhard Lazu:** Weird things happen in large clusters, that's what people are saying. The ones that tried and failed.

**Andrea Luzzardi:** And besides the technical challenges there's also the simple challenges like cost management. Because most of the billing is per machine, if you start to mix everything together, you don't even know "Hey, how much is this production service costing us?" Now I think there's tooling that can take a deep dive inside Kubernetes to figure out cost per service, but at the time you were billed by machine; so if your entire company was running a single cluster, you would have one invoice, and then good luck figuring out why the cost was increasing.

**Gerhard Lazu:** Yeah, that's a good one.

**Break:** \[18:10\]

**Gerhard Lazu:** So I'm going to switch to one of Tyler's questions. One of the first questions that he asks is what are the differences between Docker Swarm and Docker Swarm Mode.

**Andrea Luzzardi:** Okay. I think we briefly touched on that before, but the transition from the two was like going from a stateless multiplexer to an actually full-fledged orchestrator. So I think maybe it's a naming fail. It's so similar; there's only the extra word "Mode", but they have nothing to do. One was a multiplexer that would run as a separate container, whereas Swarm Mode was this stateful thing built into Docker, that had a new API, the Services API. And even though it was baked in, it was off by default. There was \[unintelligible 00:20:15.17\] but if you don't use Swarm Mode, if you just install Docker, the memory footprint is the same. But then you would just type "docker swarm init", and it would just put up the internal process. So yeah - same name, entirely different project.

**Gerhard Lazu:** \[20:34\] Okay. So Docker Swarm Mode is when you run docker swarm init.

**Andrea Luzzardi:** Yeah. That turns on the Swarm Mode, which boots up the internal SwarmKit. We had this naming scheme with BuildKit, SwarmKit, VPNKit, and all the Kits. Those are basically things that run inside Docker. BuildKit that powers docker build, SwarmKit that powers docker swarm init.

**Gerhard Lazu:** So how do you go from Docker Swarm Mode, Docker Engine or Docker Daemon, which runs in Swarm Mode - how do you go from that to Docker Swarm? Is it just a matter of joining multiple Docker Swarm hosts? Is that it?

**Andrea Luzzardi:** Yeah, that's exactly it. You pick one machine, you do docker swarm init, and then on any other machine you do docker swarm join and then the address of that machine, and they start to form a cluster, \[unintelligible 00:21:21.09\] Raft consensus, and sharing network information, and start replicating stuff... So that was the goal; it's one command and you have a cluster.

**Gerhard Lazu:** And that's what you want to be very careful when it comes to consensus, when it comes to the number of nodes that you have. So always have an uneven number of nodes. I'm wondering, how does Docker Swarm pairs, like two nodes for example - how do they reach consensus if they couldn't talk? Who would win? Which side would win? \[unintelligible 00:21:52.09\] that's what I'm thinking.

**Andrea Luzzardi:** Yeah, we put a lot of engineering to make it easy... Maybe too easy, because then engineers are like "Okay, this is easy, but how does it work? Because I wanna know." And the way it works behind is that it tries to pick same defaults. So when you init, you run in a single leader mechanism. You have a single Raft node. When you join another one, that one is not part of Raft; it's just a node set to run containers. When the third joins, then they form a Raft cluster.

**Gerhard Lazu:** Ah, interesting.

**Andrea Luzzardi:** And when the fourth, and so on - there's no more than three Raft members, because that's too much. Because it's actually changing the config between 3, 5 or 7. Above 7 it doesn't make sense. It's too slow, and there's too many edge cases. But internally, you could configure a number, by default it was 3; the first three machines to join - part of Raft, and the other ones could just run containers, and that's it.

**Gerhard Lazu:** Interesting. Okay. And would the Raft members move around? Let's imagine you have 5 containers, but you have only 3 members part of the Raft cluster. Let's imagine that one node, the one which runs one member, dies. Would the Raft membership move around to one of the running nodes, which is just running containers? Is that how it would work?

**Andrea Luzzardi:** Yeah, actually there were a couple commands to manage that. There was docker swarm promote, and docker swarm demote. So Swarm would pick three machines to decide what to do with Raft; the first three to join. But then we're not shifting consensus around, because that's a risky operation. To shift consensus around you either have to currently have consensus... Like, you cannot -- if there's a netsplit, there's one machine on the side and two on the other, you don't know, did the other two die, or did a netsplit?

So we didn't want to change Raft topology dynamically, because that's very dangerous, but we provided tools for the operator basically to change membership status between the nodes, with promote and demote. So you would do like a Docker node list, you would see all the nodes, you would see which ones are part of Raft, and which one is currently the leader node, and then you could promote some other nodes or demote others... And it would just figure it out dynamically.

**Gerhard Lazu:** \[24:21\] This brings back so many memories from years of discussion on the RabbitMQ team about quorum queues, and how should Raft be implemented, and what semantics it should have, and which parts of Raft are safe when you throw in the real-world operational aspect, nodes getting overloaded, network splits, nodes getting upgraded... What do you do then? There's so many hairy situations. And what you just mentioned just brought all that back. You don't know what the right solution is.

**Andrea Luzzardi:** Yup, yup.

**Gerhard Lazu:** End users would tell us "But why don't you fix this?" "Well, we can't." "Of course, you're lazy." "No, no." "You're not doing your job properly enough." "No, actually it's really hard." And then by the \[unintelligible 00:25:04.15\] It's just a bunch of excuses. So yeah, those were some very tricky conversations, along with that history.

I think we have time for one more question from Tyler, before we go back to a slightly different topic. When might it make sense to use Docker with Swarm Mode in production? That's one of the other things that Tyler was wondering. What would you say, Andrea?

**Andrea Luzzardi:** Good question. I think it's very different today from what it was back then. I think my answer today would be -- you know, if you're asking me where would it make sense to use MySQL versus Postgres, I would just say "Just use RDS. Just use a managed service."

I think Swarm today is still one of the easiest ways to manage your own cluster if you want orchestration in containers. It's simple enough to set up and operate. Although I think managing your own cluster - there's use cases behind that, but by default I would just encourage everyone to use a managed service. It could be like a managed Kubernetes cluster, or even like a managed proprietary service, like AWS ECS, or anything basically where someone else gets paged when the management plane breaks.

**Gerhard Lazu:** When the Raft consensus algorithm breaks or it needs help. That's basically what you're saying. \[laughs\]

**Andrea Luzzardi:** Exactly.

**Gerhard Lazu:** It's hard enough to have someone to worry about that, which is what happens by default with Kubernetes - you don't even know there is such a thing. The management plane - you just have an API to it and that's it. You're not concerned with the operation of the management plane. So that's what you're saying.

**Andrea Luzzardi:** Yeah. Unless it's part of your core business, I don't think you should be fiddling with Raft consensus at 2 AM.

**Gerhard Lazu:** Okay. So do you know if a managed Docker Swarm service exists today?

**Andrea Luzzardi:** So there were a few incarnations of that. I think at some point AWS had a Swarm-compatible service. I think they supported -- with a specialized CLI they could parse a Compose file, and Docker Swarm supported to run a Compose file as a manifest file... So AWS - there was this special CLI which would take a Swarm-compatible file and convert it to... I think it was ECS, or maybe something else. So you could, in a sense, use a managed Swarm, even though the implementation was not Swarm, but API-compatible. I don't know if that's still around, but it used to be around.

We used to discuss with the AWS team things that would not work on that particular service; we would try and make the API compatible as much as we could, to make it semi-managed, I guess.

**Gerhard Lazu:** Yeah, that makes sense.

**Break:** \[27:55\]

**Gerhard Lazu:** So I remember in 2018 when we were thinking of migrating - or I was thinking about migrating from a Docker that we used to install with Ansible on Ubuntu, and then convert it into Docker Swarm... And I think we only had one at the time. We converted Docker Swarm to be able to use the API, and whatnot... Or maybe I'm misremembering this part. Maybe we weren't using Docker Swarm, but anyways. We were basically managing our own Docker instance in production, and that was not fun.

And in 2018 I thought "You know what - how about we pick an operating system that has Docker pre-installed and it manages all of this, Docker upgrades and all of that?" So that's when we picked CoreOS. It came with Docker, a lot of the mounts were read-only; that was great. The upgrades were very nice, in that it could self-upgrade itself, and we liked that... There were a couple of quirks there, but I was really excited about going to Docker Swarm. And that was 2018...? It must have been 2018, because at the end of 2018, like for 2019, we went from Docker Swarm to Kubernetes. And that's something that Tyler is asking - should he just go to Kubernetes? Or should he use Swarm?

Having used both, I liked a lot of things that you mentioned. First of all, it's a managed service. Kubernetes these days - you just get it as a managed service, and you don't have to worry about the little intricacies around the control plane, the worker nodes, all that stuff. So having a managed control plane is such an important thing. That was the first thing. The second thing was around the ecosystem. The reason why we went to Kubernetes from Docker Swarm end of 2018 beginning of 2019 was because we could all of a sudden install these things on Kubernetes and not have to worry about packages... So the value line moved up. We could get a Prometheus, for example, and we didn't have to worry where it comes from, how it gets wired, all those things. It was much, much easier. There was something like external DNS, which was very nice.

\[32:17\] So part of that, we stopped using Terraform. We went to Kubernetes. Of course, Kelsey told me that's a bad idea; don't do that. You want a control cluster, and then you want your workload cluster, rather than mixing the two concerns, which is what we did, and we still do today... So there's some food for thought for me, and things to improve, for sure. But the migration was fairly simple, I have to say. And it felt like it's a step in the right direction. So I'm wondering, where do you sit when it comes to this, Andrea? Would you use Docker Swarm for production if it was managed? Would that be enough for you to pick Docker Swarm, is just like that managed part? Or would you go to Kubernetes? What would you pick, and why?

**Andrea Luzzardi:** Yeah, I think it really depends on the use case. I've been using, for instance -- myself in the past, I've been using ECS to get a managed service; a little bit easier to use as a user, but it really depends on what I'm trying to do, and if I value porting from one cloud provider to another, for instance. I think I would probably consider Swarm if I was running an on-prem cluster, or a cluster I'd provision manually with machines... But I wouldn't do that, unless I have some weird requirements about the machines, or it needs to be in a cage, a control, or something like that. But I think by default, for regular web applications, I would just use a managed service, whether it's Kubernetes, ECS, or something else.

**Gerhard Lazu:** Okay.

**Andrea Luzzardi:** I think one of the main reasons is about ecosystem. You know, if I run into problems, I want to be able to google the problems and see some people ran into the same problems as me, and so on and so forth.

**Gerhard Lazu:** This makes me wonder, why do you think Kubernetes became so popular over the years? Because at one point, Docker Swarm was so much more advanced than Kubernetes. And at one point, as you mentioned, you could run containers in Kubernetes via Docker Swarm. The integration was the other way around - Kubernetes was running Docker engines for a long time, and then the dockershim was removed, and the whole container runtime change, that was like a huge, huge deal.

But at some point, Docker Swarm I'm sure it was a great choice. And people said "Kubernetes - okay, it's a new thing, not \[unintelligible 00:34:46.26\] Because you had Docker, and Docker was a great tool. And even to this day, a lot of people depend on it, and it's just so easy. It's the easiest thing. So I'm wondering at what point did Kubernetes -- I don't wanna say was starting to get maybe more popular, and why. That always fascinated me. I think we had the Kubernetes documentary, so I have a lot of the Kubernetes story, but I'm missing the Docker and the Docker Swarm story.

**Andrea Luzzardi:** Yeah, I think the main reason behind that is that Swarm was about -- again, it started with a simple promise of you have one Docker machine, and now you have multiple machines, and we're gonna help you with that... Whereas Kubernetes is much more than running containers. It's this set of API constructs where you can do a bunch of stuff on top. Running containers is one thing you can do. At the beginning it was the main thing you could do, but it was very much extensible. It was easier for the ecosystem to plug into that, for load balancers to plug into that, to have third-parties plug into that. So I think that really contributed for the ecosystem to kind of standardize on that.

\[35:59\] It was hard at the time; if you wanted to swap something out of Swarm, you had to make a PR against Swarm and do that. So it was hard for vendors, basically, to come in, because also we didn't want to approve every single vendor PR that came in. We call those drive-by PRs, where a vendor would drop their PR and it would be buggy six months later, but they would never contribute resources to fix it.

So we were kind of solving one problem of running containers, whereas Kubernetes started to be this orchestration API. Not just orchestration, it was like a cloud API, where a bunch of vendors could just standardize on that with a YAML file, come in, drop their controllers... So I think that's the reason why Kubernetes became so popular.

The thing to remember also at the time is that it was not Swarm versus Kubernetes. There were many tools around. You mentioned CoreOS, and for instance, CoreOS had Fleet to manage a bunch of containers. There was Nomad by HashiCorp, which is still around, and it works great, as far as I know. There was Swarm, of course, there was Kubernetes... There was Mesos, that was used by enterprises; a lot of big companies were using that.

**Gerhard Lazu:** Apple. I remember.

**Andrea Luzzardi:** Yeah, I think they were one of the biggest users of... Twitter also were using Mesos. So it was a time when there were a bunch of tools for different needs. Mesos for enterprises, and Fleet, if you were into the CoreOS ecosystem it maybe made sense... And Nomad for HashiCorp made sense... And then Swarm - it's this built-in thing, simple to use, and then Kubernetes takes a different approach, where it's an API... But at the end of the day, the ecosystem standardized so much that it kind of overshadowed all the tools. But back in the day there were five or six different tools, with many users in each, and to each their own, depending on the use case.

**Gerhard Lazu:** Yeah, that's actually a good point. I forget about the other tools; you're right, they were there. I remember Mesos, I remember trying it and thinking "Wow, this thing is really complex." At the time I was into Cloud Foundry, and I was part of the Cloud Foundry ecosystem, and I liked that idea around simple as compared to -- it was almost as simple as Heroku. I really liked that. There was BOSH, the whole management of Cloud Foundry, and all the services that you had, the stateful services... There were some good things in that ecosystem which I worked on for a bunch of years. And at one point that was the simplest thing.

So you're right, there were so many more things, but someone Kubernetes just eclipsed everything else. That's what happened. And I'm wondering what comes after Kubernetes? That's something which is on my mind a lot. I see Docker, and I see Kubernetes, and I see something else. I'd like to think, on my best days, that I'm working on that something else, but we'll see. We'll see when it launches, and we'll see how the users adopt it, and what happens afterwards. But that is a topic for a different day, for sure.

So when it comes to Docker Swarm, what are the good memories that you have, from the time that you spent working on it? Maybe something that's memorable even to this day; something that you're proud of, something that always makes you smile. Do you have a couple of those things?

**Andrea Luzzardi:** I have a ton of fond memories with Swarm. I spent (I think) overall probably over three years working on that. At first it was with my co-worker \[unintelligible 00:39:35.26\] It was just the two of us at the very beginning, and... Yeah, I have a bunch of memories, like going to all these conferences, and meetups, and getting a ton of questions... And excitement. People were excited because we were answering a problem they had.

\[39:53\] But I guess my fondest memory must be 2016, when we introduced Docker Swarm. It was hard. It was especially hard because we were trying to make something simple. And to make it simple, we had to pull in every team working at Docker to make it happen. We had a few core goals for Swarm. One was to be simple, so with a bunch of help, with Raft, and consensus, and stuff like that. The other one was to be secure by default. So the security team helped us a lot with mutual TLS, and things like that. We needed a bunch of help from networking, to do multi-OS networking. Also, suddenly, everything that used to work fine in a single machine was completely broken. The volumes API, docker volume create - cool, that works \[unintelligible 00:40:43.20\] but now we need plugins. Or even the engine itself, since now it could optionally run an extra process, we had to change it. So we ended up having the entire company, basically all the teams working in a way or another inside the project, and that was really fun to see.

**Gerhard Lazu:** Yeah, nice. Well, I can imagine -- I mean, Docker was such a craze when it first came, the first couple of years. And then there were all these things, like the additive nature of the various things that you mentioned, and then Swarm came along... I remember there was a point where I just couldn't keep track of all the things that were happening. There was so much coming from the Docker ecosystem. That was quite a sight to behold; even on the receiving end it was overwhelming just to see how many things were happening, and how quickly they were happening. Some very big challenges, for sure. Is there something that you would have done differently, knowing what you know today?

**Andrea Luzzardi:** Honestly, I don't think so. I think we did what we did with the information we had at the time. And again, I think the ecosystem was entirely different back then. \[unintelligible 00:41:50.07\] shiny, new thing. People didn't know what to do with them. People were still running VMs with shell scripts at boot time to configure dependencies, or cloning --

**Gerhard Lazu:** That still happens today. \[laughs\] It hasn't changed much.

**Andrea Luzzardi:** Yeah. But now it's kind of niche to do that, whereas before that was standard. By default, you would clone AMIs, manage AMIs... There were actually a few cool tools from HashiCorp, like Packer, to actually create your AMIs in more programmatically. But I think given the information we had, that's the best we could do. So I'd probably do exactly the same thing.

**Gerhard Lazu:** So as we prepare to wrap up, what would you say is the most important thing for Tyler, as he's considering whether to go with Docker Swarm, or whether he should bite the bullet and go for Kubernetes? What would you tell him?

**Andrea Luzzardi:** I would say to Tyler to look at your requirements and what you're trying to achieve, and I would suggest to -- unless you have some special requirements, I would strongly suggest to go towards a managed service. It doesn't need to be Kubernetes; it can be ECS, or Cloud Run, or Lambda... It depends on what kind of payloads you wanna run. But I would advise against running machines and getting paged for machines; I think in 2022 there's no need to be paged in the middle of the night because a machine went down. So I would suggest to -- maybe if you find Kubernetes to be a little bit too hard to learn, I would ask what kind of payload are you trying to run, and if it's a simple web service, maybe you could consider a Google Cloud Run, or Fargate... There's many other services than Kubernetes, but the suggestion is the same - look for something managed, and not to worry about machines.

**Gerhard Lazu:** That's a very good point. And even if you have to use a platform as a service these days, whether it's Heroku, whether it's Fly.io, whether it's something else... It doesn't really matter. Maybe that's enough; maybe that's all you need. If all you're trying to do is run some images, and you have a database, and that's about it.

Okay. Andrea, it's been an absolute pleasure talking to you. Thank you very much for joining me. Tyler, I hope this was helpful for you. If you have any follow-up questions, drop them in the comments. There will be a lot of links in the show notes. Enjoy some talks from 2015-2016, some slides from Andrea... Some of them are really, really good, by the way.

See you around, Tyler, and thank you again very much, Andrea, for joining me today.

**Andrea Luzzardi:** Thank you so much. It's been a pleasure.
