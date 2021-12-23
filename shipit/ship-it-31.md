**Gerhard Lazu:** It's been several years since we worked together - 2016, 2017 - and I think it's been too long since you and me played the game of table tennis. How's your game? \[laughter\]

**Tammer Saleh:** I was so bad at table tennis.

**Gerhard Lazu:** That's not true. That's not true. I've seen improvement. I've seen those years in which you really improved. And the last games that we've had were really good. So I enjoyed them.

**Tammer Saleh:** It was a lot of fun. I don't know if you know this, it was never official, but it always kind of seemed like your seniority at Pivotal would directly correlate with how good you were at table tennis. \[laughs\]

**Gerhard Lazu:** Yes. I knew that, but I never mentioned it to anyone. I think it was like a little thing, yes.

**Tammer Saleh:** I'm pretty sure most of my engineers let me win, just to make me feel better.

**Gerhard Lazu:** I'm sorry, not me; no, we had some great games. So did you play much in the last three, four years?

**Tammer Saleh:** Not at all. I mean, it was entirely a Pivotal thing. It was built into the Pivotal culture. You're pair programming and you need a quick 15-minute break, where you get up and you jump around, and there's table tennis tables right there, and you're playing doubles, so you're a pair, you find another pair that also needs a break... I mean, everything about it was just built around Pivotal.

**Gerhard Lazu:** \[00:04:21.24\] Yeah. I really miss that. From the whole office culture, which seems to be slowly disappearing when it comes to remote work, and this is like the new norm, and we're in it for the long drive, shall I say... I really miss that table tennis, that social aspect. I mean, pairing is great. You can do it remotely. But what you can't do remotely is play table tennis.

**Tammer Saleh:** It's true. I mean, I've always been very passionately 100% remote. Our company has always been 100% remote, even before the apocalypse. And that made the apocalypse a little bit easier for us to weather as a company. But I do miss that camaraderie of going out to lunch together, that camaraderie of playing a game of table tennis together. And obviously, there's a tax to being remote when it comes to communication, right? Communication is just more fluid when you're sitting right there. At the same time, there's always benefits, one side or the other. And I think the benefits of being able to find amazing talent who's uninterested in moving to some central location, and the benefit of everyone in the company being on equal footing. You know, companies that do remote where there's a mothership and small offices - the small offices always feel like their growth is going to be stunted. And it is, because they're not close to leadership and close to where the decisions are made.

And even more important - and I think this is more about American culture and what's been happening to American culture over the past, I don't know, 20, 30, 40 years... As people congregate more into the cities, we are getting a very strong cultural divide. It's probably happening in other places too, but for us, it's incredibly strong between the cities and the countryside, right? And I feel like the more fully remote various companies move towards, the better it's going to be for society, because you get people from different backgrounds all working together, and you start to flatten out the cities. I think cities are not a great thing from a cultural point of view, right? They're a huge strain on infrastructure, and it would just be much better if we could just flatten them a bit and have the small towns grow a bit bigger in the countryside. And I think fully remote allows that.

**Gerhard Lazu:** Yeah. I can see that. And I do have to say, having left a big city not that long ago -- I mean, I'm still around it. I'm still around London, but I'm not living in London anymore. And I do appreciate the advantages to that; but I can also see some of the trade-offs. So there's always some trade-offs.

**Tammer Saleh:** We miss the really good dinners.

**Gerhard Lazu:** Yeah. And the table tennis.

**Tammer Saleh:** And the table tennis, yeah.

**Gerhard Lazu:** Okay. Now, one other topic that I know that you're really passionate about besides dinners and table tennis is Kubernetes.

**Tammer Saleh:** It's true. It's true.

**Gerhard Lazu:** Same here. Same here. Big fans. So I know that you're seeing so many things around Kubernetes - so many social interactions, so many teams interacting with Kubernetes. And I see companies these days, they no longer say, "Oh, Kubernetes is interesting. Maybe I should try it out." They need Kubernetes. And that's a very interesting mind shift, which happened I think in the last maybe year, two years. So a company, when they start with Kubernetes, what problems do you see them having?

**Tammer Saleh:** Yeah, that's a great question. And just to put a little bit of context in it - so at SuperOrbital, we have two lines of business. One of the lines of business - the biggest one - is our engineering services. We help companies out with very difficult Kubernetes-related problems. We have a very small team, very senior, seasoned engineers, with a lot of judgment. And when one of our clients has a very unusual and challenging problem with Kubernetes, like going on-premise via Kubernetes, or doing some very deep security stuff with Kubernetes - that's when they bring us on board for short term engagements, whatever, we help out.

\[00:08:16.08\] We also have a smaller part of our business, which is producing workshops and training. And the reason that I bring this up is because when we are doing our workshops, that's when we engage more with companies who are just starting to embrace Kubernetes, right? So we don't help those customers on the engineering front as often, but more likely, we get to train them and show them how complex Kubernetes is.

That's the key problem with Kubernetes... I mean, everybody who's used it, knows it, but the complexity is huge. I mean, there's something like 80 different resource types that the Kubernetes API understands, the last time I looked. And each one of those can have dozens or hundreds of attributes that you have to, to some degree, understand. And especially as you're doing production workloads in Kubernetes, the defaults are not always in your favor, right? So things like affinity rules and stuff, which - this stuff is improving, but... Affinity rules, security, all that stuff is things that are kind of left as an exercise to the reader with Kubernetes. So the complexity is just enormous. And new releases, they used to have been quarterly, and now, literally, they slowed it down, because quarterly was too fast. Now it's every three -- three times a year, new releases. Sure, it's a minor number, but we all know that in the Kubernetes world the minors are basically majors, right? So 1.23 is around the corner right now. By the time this is published, it'll probably be out.

The interesting thing to me is that the original authors of Kubernetes, they never envisioned that Kubernetes would be used directly by application developers. That's fascinating to me, right? There's some tweet by Joe Beda where he said that they always viewed YAML as an implementation detail, as like the assembly language, or whatever, the API that you would talk to Kubernetes via. And there would always be something on top of it that would smooth over the rough edges and take care of a lot of that complexity, and make all those decisions for the developers, for the engineers. Yet, here we are, right? We are all wrangling YAML in order to use Kubernetes.

So absolutely, when we train our customers in Kubernetes, our most popular workshop is this core Kubernetes workshop, where it's like you just want to get your application developers up to speed on how to use Kubernetes. The complexity is just astounding, and you need all of your engineers to understand it if they're going to carry the pager. Especially a smaller company, where your application engineers need to be able to debug issues with their applications in the cluster when things go sideways, they need far more knowledge than you would expect.

**Gerhard Lazu:** So when companies come to you saying that, "Hey, Tammer (and your awesome SuperOrbital team) we need help. We really need help", what do they need help with? Is it training? Is it running stuff? What does that look like?

**Tammer Saleh:** Because of the nature of who we hire and how we're positioned, we don't help with maintenance on clusters. We don't help with on-call or upgrading clusters and that kind of stuff. It just doesn't make sense to engage with us for that kind of thing. But customers definitely come to us for training, and they come to us, like I said, for the harder Kubernetes problems.

**Gerhard Lazu:** Can you give us a few examples, like some hard Kubernetes problems that companies struggle with, or teams struggle with?

**Tammer Saleh:** \[00:11:48.27\] Yeah. We have a couple of clients who are attacking on-premise installations for their product. They have a product that they run, but they want to deliver it to other companies, on-premise, in the other companies, AWS accounts, or even bare metal, or whatever. And the interesting thing about Kubernetes is that it is becoming that ubiquitous platform. It is becoming that assumption that you can make, that if I'm going to go on-premise, I want to target Kubernetes, because that's going to hit 80% of my potential customers. That's easily becoming the case. And going on-premise is very difficult, even with a substrate like Kubernetes to lean on, because often you get zero telemetry, right? You get no metrics, no logs, no hands on the keyboard, you can't kubectl exec into something and fix it. Usually, with these engagements, or usually for our clients, their customers are highly regulated, highly secure companies, that have very strong security postures.

And so what our clients need is not only to believe that what they are going to be deploying into their customers' Kubernetes environments are well-engineered and using all of the best practices from Kubernetes' point of view, but often, they also need a lot of custom code developed in order to do health checks. For one customer, we actually built a dashboard that their customers can go to and see the health of their application, but also the health of the underlying cluster, basically, so that their customers can self-select into, "Should I file a ticket? Or is it actually a problem with our own cluster, and we need to go to our own operations team?" That kind of thing is fundamentally important.

When we were at Cloud Foundry, we have so much experience with the headaches of trying to ship on-premise that we just naturally -- that's why we ended up with all these customers doing it, because we just had that experience already.

Another fun example is we had a crypto client who wanted to integrate AWS Nitro secure Enclaves with EKS. And the Nitro Enclave thing is a really interesting technology where you can run verified code in a highly secure hardware-based environment that has to be built into the chips on the actual machines that AWS gives you. And even AWS engineers cannot access the memory for that code, but using it is a huge pain. I mean, using it is incredibly difficult. And the code that runs inside this secure Enclave cannot do things like network, or anything. You can only communicate with it through this weird VSOC that happens at the kernel level. And so integrating that with EKS turned out to be very challenging, and so they brought us on board to help out with that. And as it turns out, we were, I think, maybe still the only people who have done that integration, the only people who have tied EKS and Nitro together so that you could launch a secure Enclave from a pod, and communicate with it directly from that pod. And we know that because we actually had to work with the AWS engineering team to get it done. And it was a lot of fun, and we blogged about it, and the engineers loved that work. It's part of the reason why we can attract such senior talent, is because we get to work on the more interesting projects like that.

**Gerhard Lazu:** Right. You've hit on so many things, and I'm getting to ask one thing, which is very close to my heart. So in Cloud Foundry, we knew to use BOSH to manage Cloud Foundry. Is there such a thing in Kubernetes where when you deploy Kubernetes on bare metal, what would you say? What should users or teams use for that management of Kubernetes on bare metal or on-prem?

**Tammer Saleh:** There's a variety of tools for deploying Kubernetes to bare metal installations. And that's not really the hard part with Kubernetes. In the cloud, there's managed Kubernetes, and that solves all your problems. That's not the problem with Kubernetes in complexity. In fact, getting a Kubernetes cluster up and running is fairly easy. On bare metal, you have some issues with the networking, but there's projects to solve there. You've got kube-router, and you've got MetalLB, and you've got others that solve that problem for you.

\[00:15:56.17\] It's interesting that you brought up BOSH and Cloud Foundry. For those who don't know, the way that Cloud Foundry was designed was that we had two different products. We had BOSH, which was sort of a competitor to Terraform and Ansible and Salt. I don't know this for sure, but I think it came right out of the Google's Borg. It's like a rewrite of Borg, basically. And it's very difficult to use. But once you use it, once you learn it, Stockholm Syndrome kicks in and you start to love it. There's huge BOSH fanatics, right? And BOSH was the tool that the operator used to deploy Cloud Foundry; very difficult to use, but very powerful. And Cloud Foundry was the interface that the operator then could present to the application developers, which was basically a blatant rip-off of Heroku, which was a great model. Twelve-factor buildpacks, all that stuff made it really easy for application developers. But here's the interesting thing - I refer to that as the great wall Dev Ops model where Cloud Foundry allowed the operator to serve the application developer well by giving the operator this beautiful wall that both sides really appreciated. The operator appreciated how easy it was to manage Cloud Foundry through BOSH, and the application developer appreciated how powerful it was for them to manage their application through Cloud Foundry.

Kubernetes is entirely different from that, right? Kubernetes is what I call the kumbaya Dev Ops model where everybody has to know everything, right? Kubernetes doesn't have the concept of an operator, versus an application developer. At best, it gives you some tools where you can kind of build that using \[unintelligible 00:17:35.27\] and stuff, but that's really difficult to do. And nobody knows quite where the line is supposed to be. Yeah, so everybody does it differently, you know?

**Gerhard Lazu:** Yeah. Okay. So they do have YAML in common... \[laughter\] That's still around. That's like \[unintelligible 00:17:55.16\] but maybe not for long. Who knows? We'll see. So what I'm taking away from this is that Kubernetes is everywhere, and teams, they need Kubernetes because it's the easiest way to get something out there, it's ubiquitous, it's everywhere, and it handles the complexity really well. So you're right, the AT resource types, plus all the custom ones that you can install and, typically, you get via CRDs, and they get even more complicated. It's a great way of modeling some really complex software, whether it's microservices, whether it's stateful services, and that's like, hmm... Not fully, but it's getting there for sure. I think there was a maturity level that had to happen at the data services side as well, just to understand that operating model.

**Tammer Saleh:** Yeah. It's not just ubiquitous, it's just becoming the standard, right? It's expected that if you're going to, as you said, model out your application infrastructure, then you're going to do it in YAML, using Kubernetes objects, so that you can deploy it anywhere.

**Gerhard Lazu:** And there are some really great projects in this Kubernetes ecosystem and in the bigger cloud-native ecosystem, which work well together. But it's intricacy of finding the right combination of objects or the products that make sense to you, and that's where the complexity lies in. So the kumbaya - anything goes and everything goes. And by the way, there are teams for which a certain combination makes sense, which would never work for other teams. And that's what gives it the beauty, and also the complexity.

**Tammer Saleh:** It's building blocks, right? The entire community is all about building blocks. And if you have a large enough team that you can dedicate a couple of people to choosing the right building blocks and wiring them all together and producing this really great experience for your engineers, then that's great.

**Gerhard Lazu:** Do you think that teams would do better without Kubernetes?

**Tammer Saleh:** Yeah, yeah, yeah. I mean, again, it depends on the size of the team. But I'm going to just ball-park that 30%-ish of people who come to us saying, "We're looking to embrace Kubernetes. We're going to move to Kubernetes, and we'd like your training or your help on the engineering side to get it done, and to get it done right", about 30% of the time when people come to us asking for that, we try really hard to convince them not to; because if you're a small startup, then unless you're doing something really complicated, then it's just too much for you, right? I mean, you're not focused on your own innovation; instead, you're focused on managing Kubernetes.

\[00:20:29.18\] So here's a story... When I was, I don't know -- through most of my life, I've been a Linux user, until around 2006, I think it was. And I used to run Linux on all kinds of hardware I ran. I was one of those geeks in college that had a small network of Sun and different servers, and things like that. And for the longest time, I ran Linux on my laptop as my daily driver. And around 2006, I realized that I was spending 20% of my time trying to figure out how to close my ThinkPad without the kernel panicking, right?

**Gerhard Lazu:** Oh, yes...

**Tammer Saleh:** Seriously, it was about an hour day, every day, you know?

**Gerhard Lazu:** Yeah. Doesn't want to sleep. Linux doesn't sleep, does it?

**Tammer Saleh:** Yeah. It's always working for you, you know? And I just flipped the table, I bought a Mac and I never looked back. To me, the analogy is that Kubernetes is that Linux on the laptop experience. There's always going to be problems, because you're always integrating two dozen different technologies to get a full Kubernetes system running. And it's fine if you have administrators there to focus on that task. But if you're a 10-person startup, that's not where you need to be. You should be on Heroku, or Fly.io or-- what's the other, Nitros, or Google Cloud Run, Fargate... Any of those are better choices than Kubernetes. The litmus that we give these people when they come to us is, "Stay on these fully managed platforms for as long as you can." And every time an engineer says, "We should really use Kubernetes for this, that or the other", you say "No, we should stay within the confines of a twelve-factor app", as much as you can. You change your product definition so that you can stay within that confine, whatever you can do, until you really believe that you need to provision raw EC2.

When an engineer says, "Look, this is an important feature. The only way we can get this feature done is if you give the keys to AWS, because I need to provision some instances. We're going to configure those instances. We're going to run systemd on them. We're going to tie in all the logging and all the metrics into some sort of centralized system. We're going to have alerting and everything set up", and all of that, that's when you say, "No, no, no, no, no, no. We're never going to provision raw instances", because Kubernetes is the future for all things cloud-level; all things that would be infrastructure as a service. Instead, you should be using Kubernetes. That's the inflection point.

**Break:** \[00:22:52.22\] to \[00:24:19.23\]

**Gerhard Lazu:** I think that you've heard this question many times before, but I still have to ask it. Do you think that Kubernetes would have been this popular and successful was it not for Docker?

**Tammer Saleh:** Yeah. Yeah, that's a great question. I mean, obviously, who knows? But from my point of view, I don't think Kubernetes would have gotten off the ground at all if it wasn't for Docker as a standard, right? We all know that Docker, as a company - they had an opportunity and they just couldn't white execute on it. So whatever. That is what it is. But the thing that Docker gave to the technology community is that standard of what it means to be a container. And we all know that there were containers before Docker, right? I mean, LXD, there was Solaris Zones, FreeBSD jails, sort of, right? And things like Solaris Zones, arguably, were better. If I remember correctly, they ran separate kernels per container, right? But it was that standardization of how you create a container and what a container-- how you create a container image, and what a container image actually is, that allowed tools like Kubernetes to flourish. So absolutely not. I don't think K8s would've been a thing without Docker at all.

I mean, I understand that Kubernetes inside Google was Borg and Omega, right? So obviously, it existed before Docker existed inside Google, but that's a completely different thing. In order to get community adoption, in order for this open source thing to flourish... If Kubernetes had been built as an open source product and had its own idea of what a container is, and had this thing of "You have to run these commands to generate an image, and then we run this...", I just don't think it would've gotten adoption at all. It wasn't just the standardization of Docker, too. It was also, frankly, the -- I don't want to use the term hype, because Docker is a very powerful and important technology; but there was a wave where people were just really excited about Docker, and anything that embraced Docker got an immediate uplift because of that. And I think Kubernetes benefited from that.

**Gerhard Lazu:** Yeah. I remember that age and period really well, when you had to run containers. It didn't matter how, didn't matter where, you just had to run containers. And Kubernetes wasn't a thing back then.

**Tammer Saleh:** So few people even knew what containers were, right?

**Gerhard Lazu:** Exactly. They were like, "What? Containers what? Why would you want containers?" And I remember FreeBSD jails as well. I'm yet to start a FreeBSD jail successfully. I've started that project ten years ago when I got my first FreeBSD server, and I never got, to this day, to get a jail up and running because of how complicated it was. And I started like, "Ah, there's so many configuration options." And Docker made its running commands, and you have it. That was brilliant. So as an idea, as a concept, it was really, really good. And things then, they got complicated and it happened what happened. But you're right, we are here today where Docker is no longer part of Kubernetes. It used to be. And that created quite the confusion.

**Tammer Saleh:** People say that, they're like, "Oh, Kubernetes dropped Docker, and it's no longer--" But that's my point, is that we shouldn't be thinking about the word Docker, we should be thinking about the standard that Docker created. So Kubernetes is still using Docker as a standard just as much as it did before, right? It's still an integral part of what it means to be Kubernetes.

**Gerhard Lazu:** I think it's the container run time, but the clarification came afterwards, like "No, we're not dropping Docker support, because Docker means so many things." It became an ecosystem. And even now, the default container registry is the Docker Hub, right? So if you don't specify -- and that's also Docker. It's part of Docker. But also, the container run time, the containerd, runC, and a couple of others, but I think these are the two popular ones. So that's what they meant by removing Docker as a dependency of Kubernetes. And I'm wondering if you have to be good at Docker to do Kubernetes. Do you need any experience with Docker? Do you need to run Docker locally to get Kubernetes? I know that you can get Kubernetes in Docker, which confuses a lot of people, and I never recommend it, but--

**Tammer Saleh:** \[00:28:24.23\] Turtles all the way down, and turtles in a circle even.

**Gerhard Lazu:** Yeah.

**Tammer Saleh:** We actually get that question a lot, especially when we're talking to people about our workshops, because-- I guess the answer is sort of. You sort of need to be good with Docker in order to be good with Kubernetes. And what I mean by that is - our core Kubernetes workshop actually doesn't use Docker at all. You never run a Docker command throughout that entire workshop. And even when we go under the hood, as you said, nowadays, you don't even see Docker on the nodes, because it's all containerd, right? You need to understand the concept of what containers are, as in sort of tiny VMs that can share some stuff.

We talk about the Linux namespaces that are being used in Kubernetes when we talk about the different things you can share amongst containers, but you don't have to be great at crafting a Docker file, for example. And crafting a Docker file is an art. It is hard to create an efficient, really good Docker file, and to understand all the security implications and everything. And to some degree, I think that shows how Docker did the tech community a service by giving us the standard, but did us a disservice by making that standard so low-level. I mean, as an application developer, you need to understand not only app get installed, but also the app cache, and the difference between Alpine Linux and Ubuntu... All this stuff is kind of crazy.

So most successful teams that I've seen, instead, centralize at least the skill of crafting Docker files, if not just using a single centralized Docker file across all of your applications. That's a thing you can do, right? So most teams I've seen have centralized that knowledge of how you create efficient Docker files, and all that... And then application developers just need to understand -- maybe locally, they need to understand docker compose up and maybe a few Docker command line things. And they need to understand, maybe, how to push Docker images, but frankly, often, that's just taken care of by the CI/CD system, too. So no, I think you can make a lot of use of Kubernetes without having a deep understanding of Docker.

**Gerhard Lazu:** For me, Kubernetes makes a lot more sense, having started with Docker and having spent a couple of years in that ecosystem before Kubernetes was a thing. And that's very easy to ignore and forget, because my beginning was not Kubernetes; but many people, this is where they start, and they miss the whole Docker thing. I mean, they may have been running it locally, but not to the point that they understand it, not to the point that they've been using it for a couple of years and really understand what's happening under the hood.

So I think some Docker concepts - and as you've mentioned, it's not just a run time; there's so many other aspects of Docker - are really helpful to get started with Kubernetes. What other things do you think are helpful when you get started with Kubernetes?

**Tammer Saleh:** In terms of knowledge, I think it's almost more important to have a deeper understanding of Linux networking, and just networking in general. From our experience, understanding how a cluster IP service works, for example, and all the IP tables stuff that happens there, understanding how load balancers work, understanding why node ports are a terrible idea, or understanding how Ingress works at layer seven, right? All of that is conceptually harder for our students, from what we've seen, conceptually harder for people who are new to Kubernetes, because they just never had to deal with that kind of networking knowledge.

I think another thing that's important for a team who's getting started with-- well, first of all, let's talk about how you should adopt Kubernetes. First of all, even though I kind of pooh-poohed the value of the Kubernetes managed services like EKS, AKS, and GKE, you absolutely should use them. I mean, yes, you can deploy your own cluster, but why? Just go with one of the managed solutions. Frankly, they're cheaper, especially GKE, right?

\[00:32:08.25\] And if you have a choice, just to-- if you have your druthers about which Cloud to be on, GKE is by far the best experience, and Azure is by far the worst experience, not just in terms of Kubernetes, but just across the board, right? And AWS is what it is. So if you're on AWS, you're probably forced to be on AWS, and whatever; you're on EKS. And then once you've got that, as I mentioned before, there's so much other stuff that has to be configured and deployed on top of that, and our best advice is just to keep it as simple as you can.

Most of our customers have already spent so many innovation points when they are adopting Kubernetes. We kind of feel it's our mission, our job to help guide them towards more conservative solutions, and fewer moving parts... Because it's so tempting, once you've got Kubernetes, like "Ah, I guess I need Istio because Istio does all these cool things. It does. And if you need those things, that's great, jump on board. But holy crap is Istio complicated, and it's dangerous. I mean, if you misconfigure Istio, you can really do damage to your production traffic. And avoid any tooling that you don't have an immediate pain point for. When you look at the CNCF landscape, it can often look like you're in a toy store. You see all these wonderful, cool gadgets and you just want to grab them all up into your basket, but you need to show a lot of restraint, because every one of those that you add is something else you have to manage and understand.

**Gerhard Lazu:** Oh yes. Yes. Most people forget about that, and install it, and that's it. Well, how are you going to upgrade it? And some components don't upgrade as well as others. And then that just opens a whole new world of problems, a whole new set of problems, like "Do you upgrade in place, or do you stand up another Kubernetes cluster?" And if a cluster gets too big, well, should you split it in multiple clusters? And before you know it, you're solving problems that you didn't even know existed before you chose Istio. So maybe don't?

**Tammer Saleh:** Right. Exactly. Exactly. You're like, "Where am I?" \[laughs\]

**Gerhard Lazu:** Exactly. "I thought I understood networking." No, you don't.

**Tammer Saleh:** Yeah. When you get to understand networking, and you see how Istio actually works, you're like, "Oh, my gosh..." And there are some components that are kind of tables stakes for a new cluster. A cert manager is a great example of just-- okay, everybody should have a cert manager running in their cluster. But there's so many other things that are cool and interesting, but probably not something you need.

Another example is Helm. Helm as a tool is amazing for installing third-party packages, something that somebody else has to maintain, right? You need Postgres? Then sure, use the official Postgres Helm Chart is the best way to do it, by far. Well, Postgres may be a bad example, because there's also operators that do an even better job, right? But what I see teams immediately doing because they just didn't know any better, they just assumed that this is how you use Kubernetes, is they start building Helm Charts for their internal applications; small teams doing this. And Helm, although it's great for package distribution and consuming third-party software, in order to author a Helm Chart, you are using a Turing-complete templating language in order to generate white space sensitive data structures.

**Gerhard Lazu:** How crazy is that? Oh, my goodness...

**Tammer Saleh:** It's just crazy. It's crazy, right?

**Gerhard Lazu:** I'm glad it's not just me that thinks exactly the same way. I'm glad it's not just me. So I'm not the crazy one. Okay, good. So yeah, I have confirmation I'm those crazy. \[laughs\] Okay.

**Tammer Saleh:** I don't know about that, but in this one aspect, you're not crazy.

**Gerhard Lazu:** Damn it. Almost. Almost. Almost. \[laughter\]

**Tammer Saleh:** And the sad thing about it is they just don't know any better. They've got very simple applications, they're a small team, and they end up spending a lot of time building these Helm Charts to distribute them, and stuff. You don't need that. Customize, for example, is a great tool for managing your YAML when it's being deployed to multiple environments, because you can make very small changes. Customize is much easier to understand, much easier to maintain. If you're really small, you don't even need a tool like that. You could just apply the YAML and just call it a day.

\[00:36:14.19\] I think when a team chooses Kubernetes, where it should focus on is automation; building out their own internal automation system, not just for managing the cluster, using Terraform, which is by far the best tool for that kind of stuff, but also for managing the resources inside the cluster. A CI/CD pipeline, maybe using GitOps at the end, or whatever... That's the fundamentals that your team should focus on, because once you have that, all the other changes become simpler. And frankly, that automation is half of the value prop of Kubernetes, because the Kubernetes API is so good. It's so easy to automate stuff through Kubernetes. And if you're not investing in that automation, you're wasting that value. And then, obviously -- I mean, I run a company, so I should say that... If you're just choosing Kubernetes, you should be looking for training. And I love our workshops, obviously, but there's others, right? But you do need to invest in your engineers' knowledge, because they are going to have to debug it when it goes sideways, and you don't want them floundering and using Stack Overflow in the middle of an outage.

We offer engineering services, usually not for people who are just now adopting Kubernetes, unless you've got a very interesting application you're moving over, but you should be finding experts, either hiring Kubernetes experts, or finding a partner that you can integrate with your team, that will give you those subject matter experts for Kubernetes, because you're going to save a lot more time and money in the long run if you do that early on.

**Break:** \[00:37:53.09\] to \[00:39:23.01\]

**Gerhard Lazu:** You've touched on a really important point, namely the investment in automation. So if you use Kubernetes - that's great, especially if you need it; but you will have to invest in automation. And I think there's a set of principles which are really important that you have once you enter this world of cloud-native Kubernetes. Because otherwise, making choices will be really difficult. Automation is really important once you are in the world of Kubernetes, in the world of cloud-native.

**Tammer Saleh:** Absolutely.

**Gerhard Lazu:** What other things are important?

**Tammer Saleh:** \[00:39:55.19\] Well, I mean, if you're going to move into that world, again, as we said before, the complication is just massive. I mean, there's so much that you're pinning together, that you're tying together. I think that it's important if you're going to do that, that you invest in education in your engineers, so that they can understand this complexity. And depending on the size of the company that you are, depending on the size of your engineering team, many companies invest in what we're calling internal platforms. And you can just view that as an extension of the automation. It's almost a spectrum of how sophisticated these internal platforms get, and kind of what model they use. All the way from - on the lowest level side is just the platform team providing maybe a centralized Docker file, maybe a centralized Helm Chart... That's one of the few times we've seen Helm used internally in a good way... And a centralized CI/CD system, so that the application developers can plug their app into the Helm Chart using that Docker file, and it gets automatically deployed to all the various environments, and such.

Then on the other side of the spectrum is implementing a full Heroku, where the developers are insulated 100% from the details of Kubernetes, and they're given a really nice interface. We have never seen that done successfully, just to be clear. I've never seen that work where the developers did not still have to understand the intricacies of Kubernetes; because at some point, they've got to break glass in case of emergency.

**Gerhard Lazu:** Yeah, because you have to run it, right? You've built it, but you have to run it. And guess what? It's running on Kubernetes. So if you don't know how to debug it, or even understand what is happening, good luck to you.

**Tammer Saleh:** And if your platform team is so good that they have actually built a full interface on top of Kubernetes that takes care of all the details and the application developer only needs to interact with that interface, that platform they built, I've got news for you - you're probably in the wrong industry. You should spin that off and clear house, right?

**Gerhard Lazu:** Oh, you gave me an idea, because even though we use Kubernetes to run all of Changelog, the developers - they don't know that. They still just git push; and all the automation takes care of the rest. So we were using Docker Swarm before, and we were using Docker before. The experience, as far as developers are concerned - it has never changed. It has always been git push. Isn't that the Heroku experience, git push and it runs?

**Tammer Saleh:** That is. That is. But what happens when there's a fire? How do the developers debug when--

**Gerhard Lazu:** They don't.

**Tammer Saleh:** Okay. \[laughter\]

**Gerhard Lazu:** They don't. So around that, we have a set of services, for example, Grafana Cloud, where we send all the logs, all the metrics. So if there is a problem, that's one of the first places where you would look. A new addition was integrating with Honeycomb. And Honeycomb gets the Fastly logs as well, which is the CDN; because it's not just Kubernetes, it's also what's in front of it, and then what's behind it as well. There's all these components.

So having these different ways of understanding what is happening in your runtime, whether it's Kubernetes or something else, is important regardless what the run time is; for example, getting exceptions. That's a really old thing, which we used to do when we used to SCP our Ruby code, or FTP it, right? We still used to get exceptions. I forget what the name of that tool was. Do you remember what we used back in the day?

**Tammer Saleh:** There was a number of them. In fact, I actually wrote one of them...

**Gerhard Lazu:** Exactly. That's why I'm asking you. \[laughter\]

**Tammer Saleh:** I wrote Hoptoad, which later became Airbrake, and competed against Get Exceptional, and hilariously, both Airbrake and Get Exceptional were purchased by the same person, and now they're actually running under the same umbrella, which is kind of funny... But yeah.

**Gerhard Lazu:** Right.

**Tammer Saleh:** Yeah. You need all these things. You need all these interfaces into understanding what your application is doing. I'm really excited, by the way. This is a bit of a tangent, but I'm really excited by all the stuff that's going on with eBPF, especially with things like, I think it's New Relic's Pixie. So yeah, New Relic's Pixie is really exciting because of the deep insight it can give in a language-agnostic way. It's one of those things that you could see as a building block so that the developer does not need access to kubectl exec, for example.

**Gerhard Lazu:** \[00:44:18.05\] Exactly. That's it. That's, I think, what a successful ops side of like running Kubernetes look like, where you don't have to get there. As a developer, for example blue-green - if you do that properly, and if you have all the redundancies in place, even when something goes down, the end user doesn't see that. And it doesn't matter that it runs Kubernetes. And when it comes to debugging it - well, if you're a small team, and let's say the problem is in Heroku, what happens? Do you debug Heroku? No. No way. You don't get the keys to Heroku to debug the stack, right? It just gets scheduled somewhere else, and that's how that gets solved. So what I'm saying is having that visibility into how things run is really important. And if that's your experience and your interface, that's great. I think that's one of the principles that are really important, regardless what the run time is. And if it's Kubernetes, so be it.

**Tammer Saleh:** If you're going to be using something like Kubernetes, you need to invest doubly strongly in observability and in all of that metrics. But I'd argue that you need that just as much, if not more, if you are not using Kubernetes. If you're trying to do raw AWS, for example, it's even harder to build all that observability infrastructure in place. But it's absolutely, if you're just moving into the cloud world and moving into this whole type of world where automation and where -- a cloudy world that that's focused on automation, you need that observability, not only for your own ability to debug, but eventually, you're going to feed that observability back into your automation, right? You're going to do automated blue-green rollouts, where you want the automation, over the course of maybe a day, to look for errors, to look for reduced metrics, and to roll it back.

**Gerhard Lazu:** Yeah, that's right. I know that I really like ops and infrastructure, that side of things, but our Kubernetes set up is simple on purpose, and some things could be better. It can always be improved. We have it public. Anyone can check it out to see how we run and how we set up and which components we pick. A cert manager is part of it, ExternalDNS, Ingress, NGINX, all the stock stuff.

**Tammer Saleh:** Yes. ExternalDNS, also absolutely necessary.

**Gerhard Lazu:** Yes. It's part of it. And the Kubernetes is managed, so we don't deploy on bare metal servers, even though that's become simpler over the years since we've embarked on this journey. And there's other options which we will also be exploring.

So whether you do Kubernetes or something else, there will be certain operational concerns which will be difficult. And there's a level of maturity that you need to have on the team to navigate them. And I think that's what is important to almost reiterate. And in certain cases, like Istio, I'm sure some things it makes better, but networking - I don't know. I think networking gets more complicated with Istio. And if you're okay with a trade-off, maybe it's a good one to make, but I wouldn't. We haven't chosen Istio, so there we go.

**Tammer Saleh:** I agree with you 100%.

**Gerhard Lazu:** Talking about Kubernetes and how we run it, do you recommend a big cluster, or do you recommend smaller clusters?

**Tammer Saleh:** Oh, yeah. So when Kubernetes first came out-- I mean, first of all, the short answer is many small clusters. The long answer is when Kubernetes first came out, CIOs looked at it and said, "Oh, this is great. We're probably using 20% of our CPU and memory across all of our VMs, across our entire fleet", just because of natural inefficiencies between teams, right? You need a new app out, you throw a couple of VMs out there, you call it a day. And the CIO's job, part of it, is to reduce infrastructure costs, right? And so the CIOs looked around and they said, "Oh, this is great. We can \[unintelligible 00:47:53.26\] out of this", right? "We can take all that stuff and just shove it into one big, massive cluster, and save so much money." And I think that drove a lot of initial Kubernetes adoption. I mean, obviously, there was a lot of grassroots adoption of Kubernetes, but there was a lot of adoption coming out of the IT organizations in larger companies because of that driving factor.

\[00:48:14.18\] Now, when the operators started using Kubernetes, they saw what I think of as the real benefits. I don't think the benefit of Kubernetes is about orchestrating containers. I think it's about that beautiful idempotent, declarative and ubiquitous API. And especially when you start extending that into external services, external resources that you're managing, like using, for example, Crossplane to provision AWS resources through kubectl - it's a fantastic experience, right?

**Gerhard Lazu:** Yes.

**Tammer Saleh:** And the operators looked at it and said, "This whole Kubernetes thing is pretty cool." However, blast radius is a thing, right? And so if you got everything in one big cluster-- and especially those poor operators who went through the 1.8 through 1.11 upgrade path got burned so many times on trying to upgrade these clusters in place, and they started developing these complicated blue-green cluster upgrade strategies where they'd deploy an entirely new cluster... And that's necessary and great, but now we've figured out that, well, you should just be running many small clusters. And there's two different ways you could do it. You run a cluster per bounded context for your microservices. In other words, you could have a cluster just for your shopping cart stuff, the next cluster just for your front end stuff, and a cluster for your back end, and all of that. But a better way of doing it is to run all these clusters as homogenous workloads, where they're all running identical workloads.

In fact, one of our clients is doing that, and they're referring to it as fleets internally. So what they do is actually really smart. They run a cluster in AWS per availability zone, and that does a couple of things. It's a natural dividing point for the different clusters, and it means that they also keep all of their traffic inside each \[unintelligible 00:50:02.15\] because all the services in cluster A are always talking to other services in cluster A. They don't try and do cross-cluster traffic. And that saves them a good amount of money, because they have a lot of networking that's happening in AWS. But also, it means that when they're upgrading these clusters, they can just upgrade one, and if it goes sideways, who cares? Burn it down, rebuild it, and you're fine. You've only lost - what, 20%, 25% of your capacity? And you just keep moving.

Now, of course, the big elephant here is state. You can't do that with databases. And so the best solution that we always propose to our customers is, "Look, if you're going to run stateful workloads in Kubernetes--" which, by the way, that's a lot of innovation points; you really need a team to manage that if you're going to do that. That's a dangerous thing to do as a small company. But if you're going to run stateful workflows in Kubernetes, at least shove them into a smaller cluster that you know you have to treat as a pet. You've taken all of your other clusters, your stateless ones, and you've made them into cattle, which is beautiful; then you constrain all your stateful workloads into one, or just use RDS. Just externalize your databases entirely, right?

**Gerhard Lazu:** It's a tough problem. And yeah, unless you've been solving that problem for some years, it's really difficult to appreciate. And even the operators - I'm glad that you mentioned it earlier, for PostgreSQL. Do you know how we run PostgreSQL?

**Tammer Saleh:** How do you?

**Gerhard Lazu:** We run it as a stateful set. No Helm, no operator, nothing like that. And since we did that, it's been more stable. It has not failed since we went to a stateful set, a simple stateful set, PostgreSQL container-- sorry, PostgreSQL image.

**Tammer Saleh:** And what were you doing before that? Were you doing RDS, or were you doing--?

**Gerhard Lazu:** We tried running the Crunchy Data PostgreSQL operator, and it failed because of replication. Actually, we even covered this in an episode at length, but the point was the primary stopped replicating to the replica. So the \[unintelligible 00:51:55.02\] failed up on the primary. It crashed. The secondary could not be promoted. The replica could not be promoted to primary, because it was too far behind, and then we didn't have a database.

**Tammer Saleh:** \[laughs\] Ouch.

**Gerhard Lazu:** \[00:52:10.11\] And we couldn't reboot the main one, because the PVC filled up, and we couldn't resize the PVC either. And we thought, "Nah, let's just crunch data." We actually went to the Zalando one, the other PostgreSQL operator, and the same thing happened. So obviously, there was an issue at that point with networking, and that broke PostgreSQL replication, which resulted in a less stable database.

**Tammer Saleh:** Yeah. But I mean, come on, that's not because of those operators. You would have the same problem running a stateful set. I think you probably changed other things at the same time as moving to a stateful set, or maybe changed the way you use it, or something like that.

**Gerhard Lazu:** We don't replicate. \[unintelligible 00:52:44.15\]

**Tammer Saleh:** Oh, okay. There you go. Yeah.

**Gerhard Lazu:** We back everything up. Every hour, we do a full backup. And we can restore from backup within two, three minutes. So a blank node can pull the backup down from S3 and boot up in three minutes. We'll have less downtime, and it's a very simple procedure. Now, would I choose a managed--

**Tammer Saleh:** Right. You've got a potential data loss issue of up to an hour, right? Half an hour median data loss if you lose the PV, right?

**Gerhard Lazu:** Exactly. Yes.

**Tammer Saleh:** But that's a trade-off that you're willing to make. That's fine. That works great.

**Gerhard Lazu:** Exactly. And if I was to choose any PostgreSQL type of service, I would just go for a managed one, like CockroachDB, something like that. I mean, that's what I'm thinking, because it's a really hard problem to solve. I've been trying to solve this for a couple of years. I don't think I have, in a different context, because it's really difficult.

**Tammer Saleh:** I've got to tell you, I love the solution you just talked about, because too many companies-- and I've heard other people say this, so it's not like this is some insight that I have, but I agree with it 100%. Too many companies look around and they see all this really interesting and production-grade, hardened technologies coming out of Google and Facebook and other companies like that, and they think, "Oh, okay. Well, if we're going to play in the Cloud, we've got to have that", right? You don't. And if you try and build your system to be at that level, it's going to drag you down with the weight of it, right?

**Gerhard Lazu:** Oh, yes.

**Tammer Saleh:** And you looked at it and you said, "Nah, worst case scenario, we lose a PV. We can handle half an hour's worth of data loss", right? It's not that big of a deal. Then you can go with a single instance of Postgres without replication and you are fine, and your life is so much better, right? So I love that you had the self-awareness as an organization to make that choice.

**Gerhard Lazu:** Yeah. We don't use PVs, but that's another story. \[laughter\]

**Tammer Saleh:** Do you use a host disk for that? Or what do you do?

**Gerhard Lazu:** Oh, yes. It's like 10 times faster. We never lose that.

**Tammer Saleh:** You don't care. So it does mean that when you're rolling hosts under your cluster, you need to probably call downtime, right? You need to stop \[unintelligible 00:54:51.12\]

**Gerhard Lazu:** We have a single host. \[laughter\] It's so good. It never went down. We have a much better integration with the CDN. And what that means is that even when the origin is down, we serve stale content. And unless you do posts or patches or anything like that, \[unintelligible 00:55:13.01\] it works. And parts of the website may be down for most users, but you get your MP3s. We'll serve that content. We'll get the pages, and--

**Tammer Saleh:** Basically, what you're telling me is, "Boy, life is easy when you are a read-heavy workload, I'll tell you what."

**Gerhard Lazu:** Yeah, it is. It definitely is. And if we were to, for example -- if we had to have the database up, I really do think that going to a managed service, regardless who manages that, it's a much better proposal.

**Tammer Saleh:** Oh, for sure.

**Gerhard Lazu:** All the backups, all the replication, all that stuff - it's managed. You don't have to do that. And you're just consuming the PostgreSQL interface. That's it. So that sounds like a much better proposal. Like a CDN - would you run your own CDN? Maybe. I mean, if you're big enough, you'll have to.

**Tammer Saleh:** \[00:55:58.21\] If you're that scale, sure, right? And another thing about running databases inside Kubernetes is that you could think of it as almost addicting, because once you make the decision that, "Well, we're not going to use an external database provider. Instead, we're going to just run them as stateful sets inside Kubernetes. We believe in the Zalando operator", for example, right? Well, you're going to find that your developers are naturally just going to be provisioning databases. And that's going to result in multiple stateful sets, not big schemas in a large existing Postgres. It's just naturally going to proliferate. And that's the headache that you're going to feel, is that suddenly-- we have a client who's got hundreds of Postgreses. And I'm not going to name the client, obviously, but I will say they're running them wrong, and they know it, right? It's technical debt that we're helping them dig out of; but it's a huge pain, a huge cost for them.

**Gerhard Lazu:** Once you get to a certain scale, you're right; you have to take a certain approach. But when you're not there, don't take that approach. Take the simpler one. And what this approach means for us is that we can innovate elsewhere, and we can fight other battles. There will still be battles to fight, even if you don't do this one. It doesn't mean that you're less capable or less curious. It just means you've picked your battles in a way that suits you.

**Tammer Saleh:** And one of these days, as a company, you'll get big enough where you need that more interesting, innovative challenges. And there'll be companies like ours to help you out when that happens, but please don't just assume you need that prematurely. There's a similar with writing code. I'll tell you, iterating on a codebase -- because I've spent half my career as application developer, as well as operations. Iterating on a codebase before it's actually launched and in production is so much faster, right?

**Gerhard Lazu:** Oh, yes.

**Tammer Saleh:** You can make all kinds of schema changes. Who cares...?

**Gerhard Lazu:** Never ship. That's what you're saying. \[laughter\]

**Tammer Saleh:** Yeah. Basically, never ship, and you'll be the fastest startup.

**Gerhard Lazu:** So the opposite of this show. Don't ship it. \[laughter\]

**Tammer Saleh:** But I mean, it's the same thing. You launch when you need to launch, but you understand the fact that as soon as you launch, you're going to slow down by at least a factor of two, maybe three, right? And you increase the complexity of your operations stance, your Kubernetes usage when you need to. And you understand -- I mean, even embracing Kubernetes, you do it when you need to. And you understand that that much complexity is going to slow you down.

**Gerhard Lazu:** Yeah. That's a good one. That is a good one. So I think it's time to wrap up. We can have so much fun. I didn't even realize. I think we just have to do this more often, that's the only conclusion again, you know? As we prepare to wrap up, what do you think the most important takeaway is for our listeners from this conversation?

**Tammer Saleh:** Well, I mean, I didn't think it was going to be this when we first started talking, but I think the most important takeaway is don't use Kubernetes, unless you need to. Delay the adoption of Kubernetes. It's going to be on your roadmap. It's going to happen as you grow. But just like anything else, don't try and tackle that problem early. Use one of the existing managed platforms, not managed Kubernetes installations... Although, when you do adopt Kubernetes, do that; but just delay it for as long as you can. And even then, understand that you're spending innovation points, so use it in as simple of a way as you can, because you need to pay down that innovation debt, right? Focus on the automation, and focus on the education for your people, because you will underestimate how complicated Kubernetes is. You will be surprised when you start using it and start seeing all of the different ways that you can configure it, and all the best proud practices that are not codified in it.

**Gerhard Lazu:** Well, thank you, Tammer, for sharing so much valuable information.

**Tammer Saleh:** I had so much fun. This was great. Thank you.

**Gerhard Lazu:** Yeah. I had so much fun, too. Thank you. I'm looking forward to the next one. I really am.

**Tammer Saleh:** Absolutely.

**Gerhard Lazu:** Thank you.
