**Gerhard Lazu:** One of the talks that I didn't have time to watch in-person... I think it was while I was giving my talk - this was Cloud Native Day in 2022 - was Florian's talk, "Why we switched to serverless containers." I have re-watched it on YouTube, twice. Not because I was preparing for this, but because I really liked it, you know? So Florian, welcome to Ship It.

**Florian Forster:** Well, thank you for having me.

**Gerhard Lazu:** What is the story behind the talk? What made you want to give it?

**Florian Forster:** It basically boils down to we have been huge fans of Kubernetes so far. And I still really like the ongoing effort behind Kubernetes. But while running a cloud service that should be kind of scalable, we hit some limits around the quickness of scalability in Kubernetes, and we rethought our stack to better adhere to that, and to kind of get better scaling efforts and better cost profiles as well. Because that's also a side. So the economical side was also kind of a driver to that.

**Gerhard Lazu:** Yeah, yeah. So when you say serverless containers, what do you mean by that?

**Florian Forster:** Well, we labeled it that way because we thought, "Okay, Citadel is being built like a Go binary, crash it into a container, you can run it basically everywhere." And that's what our customers do. They use normally Docker Compose, or Kubernetes. And we wanted to keep that availability around, so that we actually eat our own dogfood, and not just create something new for our internal purpose, but instead rely on the same things we tell our customers. And so serverless containers is kind of the definition - in our head, it's basically a platform where you can run some kind of OCI image. And you could call it native, you can call it AWS Fargate, you can call it Google Cloud Run, whatever fits your poison. I mean, it could even be like fly.io, or something like that. Basically, plug in a container and it should be scalably being run. That's kind of the definition we made right there.

**Gerhard Lazu:** Okay. Okay. So the container part - that is very clear. But why serverless?

**Florian Forster:** Because we don't want to handle and tackle the effort of running the underlying infrastructure in general. Because, yeah, if coming from Kubernetes, you are well aware you need to handle nodes to some degree, even with things like GKE Autopilot, there is still an abstract concept of compute nodes behind it. And the whole, let's say undertaking with Cloud Run and AWS Fargate and all of those - you basically plug in your container and tell it "Please run it from 0 to 1000", and you don't need to care whether it's one or 100,000 servers beneath. That's why we call it serverless to some degree, even though the word is absolutely -- it's wrong. \[laughs\] I don't like the word serverless, to be specific.

**Gerhard Lazu:** Okay. So if you could use a different word, what would you use, instead of serverless? What do you think describes it better?

**Florian Forster:** You could call it container as a service, to some degree, I think... Although that's kind of plagued by the HashiCorps, Nomad, and Kubernetes, and Docker Swarms... Because people tend to think that a managed Kubernetes offering its container as a service. And I don't like that nuance, but that's a personal opinion... Because I still, to some degree, see the underlying infrastructure. And yeah, serverless kind of reflects well on - yeah, there is no server to be managed... But still, you can use your funny old OCI image and just throw it in and it will keep it working.

**Gerhard Lazu:** Yeah, yeah. So just by going on this very brief conversation, my impression is that you've been doing this Kubernetes dance for quite some time. Right?

**Florian Forster:** Yes... \[laughs\]

**Gerhard Lazu:** You're not in this for a few months and decided you don't like it... Or you've tried it and you said, "You know what? This is not for us." You've been using it for a while, because you have a very deep knowledge about the ins and outs of how this works. So tell us a little bit about that.

**Florian Forster:** Well, I mean, the first contact points with Kubernetes were around where the kube-up script was still there, by kubeup.sh.

**Gerhard Lazu:** Wow... Okay. I don't remember that thing... So that's a really long time. Okay.

**Florian Forster:** \[00:05:43.03\] Yeah. It was way pre Renshaw, pre K3s... Yeah, even OpenShift was like the classic OpenShift at that point in time. Yeah, at the company I worked at that time we had a need for an orchestration system to run some things in a scalable fashion, and we started poking into the Kubernetes ecosystem, because everybody was kind of hyped... "Yeah, yeah, Google is behind it. Borg is being replaced by Kubernetes." Everybody was talking in that way, and I thought it's worth looking into it. And I liked some \[unintelligible 00:06:13.27\] but still, until today, it kind of gets more enterprisy, and that's a great thing if you are an enterprise. But if you're a startup, it's too much abstraction, too much things to care for. It feels not like a hands-off operation. I mean, even just running observability in Kubernetes is like, "Yeah, pick your poison." There is like 20 different ways of doing things, and why should I even have to need to care for that too much if I just want to run like one container? Please run that container for me. And so yeah, that's where my personal change from Kubernetes to something else started. But still, I totally like what they do on their end, even though a lot of complexity is involved.

**Gerhard Lazu:** So I think we finally did it. We've found the person with 20 years of Kubernetes experience, right? Everyone thinks they don't exist. We've just found him. \[laughter\]

**Florian Forster:** I definitely aged like 20 years around Kubernetes...

**Gerhard Lazu:** Because of it? I see. Okay, okay.

**Florian Forster:** Yeah, definitely. I mean, at one point, funnily enough, we decided to switch to Tectonic, like from CoreOS; it was at that point still around... With their self-hosted Kubernetes control plane, like running the kubectl plane in containers... It was a great thing to do. And as well Etcd. But yeah, it had some nifty tweaks and problems... And you aged quite well in that case.

**Gerhard Lazu:** Okay, okay. So what is it that you do now? What is your role?

**Florian Forster:** I'm not sure what the translation into English is, but let's call it person for everything that nobody else takes care of...

**Gerhard Lazu:** I see. Janitor? No. Handyman? No... \[laughter\]

**Florian Forster:** I label myself as CEO, though still I feel more like a CTO-ish, head of DevOps-ish kind of guy, but...

**Gerhard Lazu:** Whatever. Yeah. Whatever needs to happen, you know, you're there.

**Florian Forster:** Exactly. I do a wide range on the business side of things, the overall vision on how we want to shape Citadel, and also the things - how can we ease some stress in our operations part of the game... So normally, well-opinionated about many things, even though I'm not all the times able to talk in the whole depth.

**Gerhard Lazu:** Because time, right? And time constraints. You can't be everywhere, doing everything all the time, at 120%, right? You have to pick your battles.

**Florian Forster:** Exactly. I mean, if you asked me whether I like Go generics or something like that, I need to resort to the answer "I have not experienced them yet, because I haven't had time to look into it."

**Gerhard Lazu:** Okay...

**Florian Forster:** My engineers will tell you a different story, but I'm not opinionated on that end.

**Gerhard Lazu:** So what does Citadel do? And maybe I'm mispronouncing it, but I'm sure that you will give us the official pronunciation.

**Florian Forster:** I mean, we call it Citadel as well, so it's totally fine. And the logo kind of tries to reflect the word origin, because it comes from the French way of building fortresses, with the star design... The place where you commonly see this is in Copenhagen, for example; there's still like the fortress with the star design. That would be called Citadel, but in French, but nobody cares. So Citadel in English.

\[00:09:45.18\] What we basically try to do is we want to bring the greatness of zero, like a classic closed source proprietary cloud service, with the greatness of key cloaks, run yourself capabilities, and we want to combine them into one nice, tidy package, so that basically everybody who has at least a heart in engineering can solve some of the problems around the identity game in general. So that includes things like "I want to have a login site, I want to have authorization, I want to have single sign on, with different IDPs, I want to have tokens that I can send through the world..." And everything like that. So basically, you could call it a turnkey solution to solve user management and authentication in general.

**Gerhard Lazu:** Okay. Okay. So there's one word that comes to mind when you see that. Actually two. CPU and hashing. \[laughter\] So from all that description, all I'm thinking is "I hope your CPU is fast, and your hashes are even faster." But don't skimp on the cycles. Right? Like, make sure you do enough iterations. Okay? No cheating, please. Okay.

**Florian Forster:** Yeah, I mean, it comes down to hashing. We rely on Bcrypt normally, and yes, we need many CPU cycles... But also, there's like a second thought, that if you do signing tokens - so that's also quite exhaustive for CPUs nowadays. And so yes, we use a lot of CPU to make that happen.

But actually, the stress is somewhat alleviated down to the future, because the pass key concept and \[unintelligible 00:11:30.03\] in general, since that relies on public-private key cryptography, it reduces quiet well on our end the amount of CPU we need to use, because RSA signature verification normally takes around one millisecond. So it's not that much of a stress. But hashing, Bcrypt, password with 10 to 12 of iterations might be more unrivaled of like 800 milliseconds to 1,000 milliseconds, around that \[unintelligible 00:11:57.27\] if you run like two to four CPUs.

**Gerhard Lazu:** Yeah, yeah. Okay. Do you use GPUs for any of this?

**Florian Forster:** No. At the moment, no. I mean, it comes down to a certain degree that our cloud provider does not really allow for that... And on-premise environments also are oftentimes really restricted in the kind of GPU they have around... And so we try and avoid for Citadel too much of integration and depth there. So we still rely on CPUs. But there might be a time where we want to retrain some analytics model with machine learning, and so we are looking into that space. But it's not yet there, to be honest.

**Gerhard Lazu:** So most of the workloads that you run, I imagine they're CPU-bound, because especially of the hashing. But I also think network is involved. So you need to have a good network. I'm gonna say good network - not high throughput, but low-latency network. Can you predict these workloads? I mean, people sign in whenever they need to sign in; they don't sign in all the time. Right? So can you tell us a little bit about the workloads specifically that you run?

**Florian Forster:** Yeah, we have a common pattern called double-dip traffic. So we often see like traffic starting like seven o'clock, until twelve, and then from one to around seven in the evening. So that's the major traffic phase. But if you spread that across the globe, you see certain regions ingest traffic during certain times, but globally, overarching, it's basically a big white noise line. It's like more flat if you watch all the regions, but if you really do a region, you really see like double-dips happening all the time.

\[00:13:45.23\] And yeah, having a network that can be easily and fast scalable, and really provides low latency to our customers, because they use our API, our login page, is kind of important to the service quality. And so we internally set our goal to "Okay, let's try and keep latency below 250 milliseconds for 80% of the calls." That's kind of the SLO we're aiming at, but that's not all the times possible. I mean, down under - yeah, you get bad latency. You get strange latency if you go for South America... So yeah. Normally, it does not -- it comes down not to the problem being Citadel, who you can easily run at the edge, but rather how can you move data along the journey, and that's kind of the thing that holds you back most.

**Gerhard Lazu:** Yeah, that's right. Especially if you're in like SAML, or something like that, where you yourselves need to talk to another provider, which itself may have variable latency at specific periods of time... And then you can only guarantee what you get, basically. You can't make (I don't know) GitHub login, or Twitter login, or whatever you're using, faster than it is.

**Florian Forster:** Yes. It's bound to external services. And in our case, for the storage layer we mainly rely on CockroachDB, since they can move around and shift data closer to data centers that they are actually being used. But still, the data is the most heavy thing right there if you want to reduce latency.

**Gerhard Lazu:** Okay. What does your tech stack look like? Like, what do you have? What is Citadel running on?

**Florian Forster:** Basically, we use internally Cloud Run for our offering, so Google Cloud Run, because we can easily scale during traffic peaks, as well as CPU peaks, because Google will scale Cloud Run containers as well based on CPU usage. That fits our narrative quite well. And also, the ability to scale to zero in not frequently used regions is really a thing we really like.

Below that, we use CockroachDB dedicated, as like their managed service offering of Cockroach. In the past, we actually did run Cockroach on our own, but we figured the amount of money and time we need to invest basically is being taken by Docker if they run it; it's even economically more value, because they include their license quite nifty into their cloud offerings, so... Basically, you have multiple reasons to do that.

And upfront, we use Google CDN and Google Global Load Balancer with Cloud Armor to mitigate some of the risks around DDoS, and rate limits, and stuff, because we see malicious behaviors all the time... And yeah, the stack is really lean in that regard... Because the only thing we can append to that from an operational perspective is like we use Datadog to some degree for observability purpose, and also Google Suite... And we're kind of torn in between, because - yeah, why should I send logfiles to Datadog if they already have -- I already have them in Google's cloud offering. Why should I pay twice for it? But there are some catches in Cockroach's offering that you only can use Datadog to monitor the database, and so we've kind of bound to Datadog. So it's not so funny in between state there...

**Gerhard Lazu:** Interesting.

**Florian Forster:** ...because we try to reduce our amount of third-party processes whenever possible on that end.

**Gerhard Lazu:** Okay.

**Florian Forster:** That's kind of the stack we use.

**Gerhard Lazu:** I like that. It's simple, but it sounds modern, and it's complicated in the areas where it's sometimes by design; as you mentioned, this coupling between CockroachDB the dedicated one, which is managed for you, so you're consuming it as a service, and there's a coupling to Datadog. And I'm sure that choice was made for whatever reasons...

**Florian Forster:** Yes... \[laughs\]

**Gerhard Lazu:** Okay. So there's Google Cloud, there's CockroachDB, there's Datadog. Anything else?

**Florian Forster:** \[00:18:10.03\] We use TerraForm to provision infrastructure, and we use GitHub Actions mainly to do that. We have still some stuff in TerraForm Cloud, but we're constantly migrating into GitHub Actions and private repositories, because it fits better with our flow. 80% of the company knows how to deal with Git, and so we -- we did a lot of classic GitOps in the past, with like Argo and Flux and all of those tools... We feel comfortable with Git, and so we try to shift as many things that we can into into that space. So from a source control perspective - yeah, it's GitHub with us. But that's about it on that end. There's more chat tools, and things around, or auxiliary services, but the core operations really revolves around that stuff.

**Break:** \[00:19:03.18\] to \[00:21:02.08\]

**Gerhard Lazu:** How much of this do you use for the actual Citadel software as a service, where it's all managed for you? I think you're calling it the cloud now?

**Florian Forster:** Yup.

**Gerhard Lazu:** \[unintelligible 00:21:11.10\] versus building the binaries that you make available to users? Is it like most of this is for the cloud service, or what does the combination look like?

**Florian Forster:** I think 80% is for the cloud service, because the whole CI side of the story comes down to GitHub Actions, some Docker files, and some custom-built shell scripts, because protoc and gRPC tends to be a little bit nifty how to build clients with gRPC. So that basically comes down to that from a CI perspective. And we can basically run all our components we have - like, we have a management GUI in Angular, we have like a cloud GUI in Next.js, we have like the backend of Citadel, which is written in Go... And we can cram everything into GitHub and GitHub Actions, into a dockerfile, basically. And that's a process that is constantly evolving to reduce drag for additional committers... Because it kind of is -- if you don't make that understandable, it's a high entry bar to commit things.

**Gerhard Lazu:** Yeah, of course.

**Florian Forster:** \[00:22:23.26\] Yeah, and you need to reduce the drag. I think an honorable mention on that end is like Cypress for each retest stuff... Because we test our management GUI with Cypress, which basically passes on to our API, so we can do that end to end from our perspective... Yeah, and then there's like automated things, like Dependabot, and CodeQL, and static analysis tools to make the security right... But that's about it, because we think the tool drag - I call it often this tool drag... I don't like having too many tools around to do the same job, because you lack focus if you do that.

**Gerhard Lazu:** Of course. Of course, that just makes sense. Yeah, that cognitive overload of having ten ways of doing the same thing, based on the part of the company that you're working in... Okay, okay. So how many engineers are there for us to better understand the scale of people that touch this code, and work on this code, and help maintain it? So there's the company, and then the community, because that's also an important element.

**Florian Forster:** Yeah. Currently, it's like eight dedicated engineers, like software engineers from our end, working on Citadel's code. Some of them also working on things like the Helm chart, and stuff, because it's mainly our engineering staff who does that... And then we have like 20, 25-ish external contributors across the field who do a variety of tasks. Because we have also some separated packages from Citadel. Like the OpenID connect library, for example, is not in Citadel; we use it on our end, but we needed it to create, for example, a Go library for OpenID connect, and we wanted to have it certified, so we needed to do like an extra leg on that and. And we have separate maintainers on that end from Citadel, because many people are using \[unintelligible 00:24:17.17\] without our knowledge, so to say.

So it's multiple projects, multiple contributors, but the stack beneath is kind of the same. And with us it's basically the eight engineers who work on that, even though the company now has roughly 15 employees since we started to work more and more on technical writing things, API documentation... Because otherwise, it's not nice to work with--

**Gerhard Lazu:** Oh yes, the docs. Oh, yeah. Tell me about it. Yeah. Okay, okay. \[laughter\] Oh, yeah.

**Florian Forster:** Docs is like the conflicting major pain point all the times. And I don't say that lightly, but I think that you can use that on any project - as soon as it's kind of open source, it's hard to get good quality, consistent reading docs... But that's a topic - for example, we want to invest quite heavily over the coming few months, because we really feel like if you want to engage with developers and engineers, you need to have proper documentation. Otherwise, it feels like the impediment is too high.

**Gerhard Lazu:** Yeah, for sure. And I can't think of a better way to show the users that you care, you care about your product. I mean, very few would dig into the code and say, "Wow, this is amazing code. I'm going to use this product, because it's amazing." How often does it happen?

**Florian Forster:** \[laughs\]

**Gerhard Lazu:** But put like a nice docs site out there, easy to search, easy to understand, with good flows, and people go "Wow, they really spent some time", even though the code may not be that good, but the docs are, and then the perception is "This is amazing."

**Florian Forster:** \[00:26:02.05\] Yeah. I mean, I have recently heard the term "Content is oxygen for the community", and I think that's also applicable to the documentation side of things, because it's not only outreach content, but also, and rather important, the documentation side of things. Because even if you write like the best blog about something, at one point you will link to your documentation, and if that link is not nicely, tidy being done - yeah, it breaks the experience. And so if I need to point out one specific thing we need to improve over the coming months, it's really docs. They need to have a clear flow. "Where should I start? From where can I go to what?" So they need to reflect the user journey, basically, and that's kind of the biggest rework we will do, is restructure docs to better appeal for that.

**Gerhard Lazu:** Yeah. Okay, that makes a lot of sense. Yeah, for sure. For sure. I'm just taken aback by how simply you've put that. It's a very high problem, right? And it all boils down to this. So if you don't get this, then forget everything else, about like making them easy to understand. I mean, that's important, but what are the flows? Where do you enter? What are the entry points? Where do you drop off? What happens next? What is the follow-up? What is the story that you get when you go to the docs? And if you just get referenced -- by the way, there's so many types of actually... Four, as far as I can remember; there's guidelines, there's references, there's...

**Florian Forster:** Examples, oftentimes...

**Gerhard Lazu:** Examples, exactly.

**Florian Forster:** API documentation...

**Gerhard Lazu:** Oh, yeah.

**Florian Forster:** In our case, we split out the whole self-hosting part, because in our cloud it's not applicable. But if you want to run it on your own, you need like production checklists, examples to deploy it to x, y, z, how to configure all the nifty details, how to configure a CDN, how to configure TLS... I mean, there's a whole array of topics just for the self-hosting stuff. And so you kind of need to figure out that flow, and it will take you a lot of time to do that. But if you figure it out, it will get beautiful. The only thing you can break at that point is basically to style how you write content, in what kind of language, and that's especially difficult if you have non-native speakers and engineers; they tend to write different documentations, as dev rels, or as content marketing guys or gals, because it's just a different way on thinking of it... That's the second thing to get right there.

**Gerhard Lazu:** For sure. For sure. Okay, so I'd like us to come back now to your talk, because one thing which I really liked in that video, and in your presentation, is you talked about why you haven't chosen Microsoft, and why you haven't chosen AWS. It's not like, you know, "We haven't even looked there." You did try them, you did consider them, but there were certain things which wouldn't work for you. So tell us a little bit about that, how you ended up with Cloud Run, which I don't think it was your first choice, but basically, you ended up there because of your requirements.

**Florian Forster:** Yeah, the first and most prominent thing that struck us was kind of having end to end HTTP support. Because we provide gRPC APIs to our customers, and they need HTTP/2. And while verifying that with all the different offerings, it was kind of hard to either get proper documentation, whether they support it or not, or they oftentimes only supported it from their CDN to the customer's site, but not in the upstream... And so that was kind of really like bogging us down on that end.

\[00:29:51.03\] I mean, we could have chosen the route and say "Okay, we do not offer gRPC, but only gRPC web and REST, because we supply that as well. But we really wanted to have the HTTP capabilities, because we think at one point there is a unique opportunity to be taken to use streams and stuff for identity-related things. So if something changes, we can notify you immediately, which can be an interesting way of thinking of it. And it reduces latency quite a lot. I mean, our own measurement states that's reduced seven milliseconds each call purely down to JSON serialization... Which is not like a bad thing, but it's seven milliseconds.

**Gerhard Lazu:** Yeah. It adds up, right? Seven milliseconds here, three milliseconds there... Before you know it, it's a minute.

**Florian Forster:** No, really, if you have microservice architectures -- I mean, if you have like five services cascaded, and every time they call like our introspect endpoint to validate some tokens, it adds up. It's 50 milliseconds only serialization at that point. But that was just the decision they made there, and really, the major breaking point was the HTTP stuff. It was just too confused, too not clearly stated. We started poking around, we saw that eventually you can make it work, to some degree. For example, Azure - what's it called now? Azure App Container Instances, I think... They now use Envoy as proxy, so you now get HTTP/2... But as soon as you want to use the web application firewall - yeah, well, you're in a bad spot, because that thing does only support HTTP/2 to the front, and not to the back. And the CDN as well. So it always did come down to friction on that end. And so yeah, we choose Google Cloud Run, exactly. That's one of the major reasons we chose Cloud Run, even though we don't like some of the limitations with Cloud Run. There are some which we don't like.

**Gerhard Lazu:** Tell us about them.

**Florian Forster:** I mean, I still to the day not fully understand why Google Cloud Run needs to use their internal artifact registry... Like, you need to push your images into Google's registry, and from there on out, you can fetch it in Cloud Run. I don't know why that decision was being made. There might be a technical reason to that. I mean, you could argue on availability; that would be a ground. But I don't like that fact. And the other thing that really is kind of a bad thing is if you want to use VPCs, you need to use the VPC connector, which now can be edited. I guess they released that like one month back, or something like that, but you need to have basically VMs in the background that handle connectivity from your Cloud Run to your VPCs. And since we use Cockroach, that traffic passes through a VPC, and we use like \[unintelligible 00:32:47.18\] gateways, so we pass anyway traffic through that, because we want to have control over what traffic leaves our site, and stuff. And that VPC connector thing is always \[unintelligible 00:32:56.11\] It's there, I don't like it, because it scales not down. It's just scaling up, and then I have like 10 VMs running in the background, doing nothing. But yeah, it's kind of a thing I don't like. But other than that, it's a great tool.

**Gerhard Lazu:** That's right. One thing that maybe we haven't done as a good job to convey this is that your service is global. So when you're saying VPC connect, you don't mean just in one region or in one zone; you mean across the whole world. So how many pops do you have worldwide, where Citadel runs?

**Florian Forster:** We have like a core pop region. It's like three regions we run constantly, that comes down because we run our storage there as well. And sometimes if we see different traffic profiles, we start regions without storage to them, just to get some of the business logic closer to customers. So that can range normally from three to nine regions during normal operations. But since Google's internal network is quite efficient from our perspective, and their connectivity is really great, we don't need to spread it to more regions than that normally.

\[00:34:13.14\] We did some internal experiments, we built like a small TerraForm function where you basically can throw in a list of regions you want to deploy, and it will basically deploy to 26 regions in like one to two minutes...

**Gerhard Lazu:** Wow.

**Florian Forster:** That works really well. But you get strange problems if you do that, because sometimes you want to have like hot regions, because your application is anyway running, it can serve traffic quite easily... If you have to cold-start a region, it always takes a few milliseconds to do that. And it's not like a big thing, but it can influence customers' view on your service. Because if you hit the login page and it takes like two seconds to get everything spinning, and database connectivity set up, and everything, it gives you some drag. And so we're trying to keep hot regions, as we call them.

**Gerhard Lazu:** Yeah, that's crazy. Like, you say that two seconds is slow for a whole region to come up. It's like, "What?!" \[laughter\] Like, try booting something; it will take more than two seconds. Anything, really. Wow, okay...

**Florian Forster:** I feel it's like engineering ethos that you might at some time over-engineer certain things... But still, it feels right to do that, because it's more easy to just scale up an existing region and throw some more traffic into that. You can easily steer that around. The thing you most of the times will miss out is basically 50 milliseconds. There is edge cases with different regions... So if you live like in Australia - yes, we don't have like an immediate region in your vicinity... But yeah, that's a matter of - if you have enough traffic, you will actually open a region at one point, and then you try to keep it hot as long as you can. And I always think the classic engineering decision that comes down to that is the same thing that Cloudflare and Fastly are constantly arguing around... I mean, the last time I checked, Cloudflare was still "Let's build small regions across many places", and Fastly was like, "No, let's build like huge data centers, with huge compute to them." It's a matter of what your service needs to decide that, and we decided that "Yeah, two seconds feels bad."

**Gerhard Lazu:** Yeah. But it's interesting... Sometimes routing to a region which is further away, sending a request to that region can be faster based on your workload. And even though your workloads are super-optimized, for something to be up and ready in two seconds, that's just crazy. Try doing that with Java... \[laughter\] Right? Or something which is like slow to start. Not picking on Java, but it's known for slow starts, which is why you wouldn't stop it. And that would be like a no-starter; like, you can't even consider that for what you're doing. Maybe GraalVM does things better. But JVM, it's slow by design, because it runs optimizations... I mean, a lot of things need to happen. Again, nothing wrong with that, but not suitable for this workload.

**Florian Forster:** I mean, it's even small things involved into getting like fast startup latencies... One big drive \[unintelligible 00:37:20.27\] hypothesize - we don't really have evidence, but we hypothesize - is that the image sizes of your containers influence that quite a lot. Even though I think Google does quite a lot of magic in caching things in Cloud Run to scale it quickly. But nonetheless, we see that bigger images take more time. So for example, we have a documentation page built with Docusaurus, and we normally use Netlify to deploy those things, and we are now currently testing to move that to Cloud Run as well. And that container is approximately 500 megs in size, because of the images and stuff, and it takes more time to start. So it takes like three to four seconds just to get like the node server started, even though everything is pre-built, so it's not like we are compiling stuff on the fly. It's really like start the Node server with static assets.

**Gerhard Lazu:** \[00:38:14.18\] Okay, okay. Yeah, you're right, you're right; that can make a big difference as well. So a few seconds is not bad, right? Especially if we have like a blue/green style of deployment, where -- and I know that Cloud Run supports that. So you're not taking the live version down, and that's okay... Something that needs dynamic requests - for that it's a bit more difficult, right? Because it needs to service it, it needs to keep the connection open... There's like a couple of things happening, rather than just static ones, where you can just cache them, use a CDN. So you said that you are using a CDN, right?

**Florian Forster:** Yup.

**Gerhard Lazu:** Okay. Okay. How is that like? How are you finding the Google CDN? Because I haven't used it in anger; I mean, only small projects... How does that work in practice?

**Florian Forster:** I actually quite like it. One of the things we like the most is that you can cache assets across multiple domains. So for example, each of our customer has their own domain name, and our management GUI is built with Angular, so we have a lot of static assets to that... And if one customer accesses that data in one region, we can cache it for basically every customer. And that's nice, because you basically can ignore the name as the host name, and instead just cash the files. And that's a feature I have not easily found in CloudFlare or Fastly's offering. I mean, you can always make it work to some degree, but that was basically -- yeah, just input a validation rule into the Google CDN and it will take care after all that stuff.

And the overall strategy with Google's pricing is more beneficial to our end, because we basically only pay usage, and we are not feature-locked. And with the Cloudflares, Fastlys, and everybody, you basically are always feature-locked until you get to their enterprise offering. And at that point - yeah, the cost is quite steep to be paid at that end... Even though they have great offerings, but it feels wrong to spend so much money on a CDN, when it's just -- it's basically caching some static assets. I mean, it's not doing the heavy-lifting, it's more quality of life improvement, I would call it.

**Gerhard Lazu:** I was reading something about this as well, enterprise features, feature locking, things like that. It was your blog, where he said you charged for requests, right?

**Florian Forster:** \[laughs\] Yes.

**Gerhard Lazu:** See, I have done a bit of research; not too much, but I did notice that, where you mentioned that... And to me, that is very reasonable. You don't have to upgrade to higher price tiers just to unlock certain features. I mean, why? Does it cost you more? I mean in development time sure, but you don't get the full experience of the service. Per seats - again, that pricing can work in some cases. So what influenced your decision to do that? I thought that was very interesting, for all the right reasons.

**Florian Forster:** We thought long and hard about our pricing, so many times in the past... We even had like a feature locked model, closely to what Cloudflare does... And what does not reflect well in the security area is if you want to provide your customers with a security service, you should give them the means to have a secure application, and not to tell them, "No, if you want to have 2-factor, you need to pay extra", because that kind of defeats the purpose of having an external specialized system of handling the security in the first place...

And the second thing there is like if you price by identities, customers will stop creating identities at one point, if they can choose. And we wanted to remove that sensation by telling them, "Hey, store as many things as you like, do as many things as you like. The only thing we want to have from you in return is we need to be able to finance our infrastructure to some degree, and so it comes down to pay us for the usage."

\[00:42:20.10\] That's really what it boils down to... Because it feels like a nice trade-off, even though - and I can be honest on that, and it's during sales meetings - it can sometimes be a problem or impediment, because people still think in users. "I want to have like a million users. I want to have a price for a million users." And I mean, we have a lot of data, we can do cost estimations for that; it's not like a big problem. We even do \[unintelligible 00:42:42.07\] deals where we say "Okay, we'll give you like 10 million requests a month for a price XYZ, and we will use it for 12 months, and we will check after five months how it was working", because we want to reduce that friction out of the equation. But it's just a matter of different strategy, and we are committed to that end, because it feels like the right thing to do, even though it has some challenges.

**Gerhard Lazu:** Yeah, for sure. For sure. Yeah, I mean, to me, that sounds a more sensible approach, a more honest approach, a more open approach. Everything is out there for you to use. There's like one requirement that we are able to support all your requests, and we are able to give you the quality of service that we know what you want... And these are the SLOs, and that's what it will cost. Okay. How long have you been running the cloud service for, your cloud service? Six months, 12 months?

**Florian Forster:** Now, looking at the date, it's like seven.

**Gerhard Lazu:** Seven months. Okay.

**Florian Forster:** Yeah. The thing we call Citadel Cloud now is now seven months in age... But we had a service we called Citadel v1, with kind of a different sensation to it, with the old pricing I just mentioned... And that was started in mid-2021. But we learned so many things across that journey that we needed to reconsider some of the things, like pricing, deployment strategy, locations where we deploy, because customers actually care sometimes about that... The API needed to be reshaped to a degree... And so yeah, it comes down to an evolution of Citadel, like from version one to version two, and our cloud service changed as well. And so the new service is basically seven months in age right now.

**Gerhard Lazu:** Okay. What are the things that worked well for the cloud service in the last seven months? Good decisions, that proved to be good in practice?

**Florian Forster:** I think it's not only directly the cloud service, but the overall change in our messaging, what we actually want to sell, and why we recommend that you use our cloud service - that message is being picked up better since like the seven last months. So that's a thing we constantly improved. So many people now use the free offering we have, because it provides already a lot of value, and we are even considering increasing the amount of things we give you, the amount of requests as well, to get developers an easygoing free tier that they can actually start building software. Because nobody really likes to run things. And I think that's the most -- let's call it the biggest change I experienced so far in behavioral things... Because everybody's always shouting, "I want to run system XYZ on my own hardware", but in the end everybody turns to some kind of free hosted offering, because everybody just knows "Oh, no, I don't want to take care of backups. Oh no, it just runs. Oh no, I need to start it again." So --

**Gerhard Lazu:** "Upgrades? Again?! Oh, my goodness..." When did you last upgrade your phone? Serious question.

**Florian Forster:** My phone... I'm quite pedantic, so I will catch up on releases in one to two days. \[laughter\]

**Gerhard Lazu:** \[00:46:14.13\] Okay, that's a great answer... But for me, the updates just happen, right? I mean, unless it's like a major update, your applications on your phone - they just update. It's not a problem that people think about, or should think about. So if you run it yourself, guess what? You have to think about that. And then you say, "Oh, dammit, I want this free auto update feature. Why don't you give it to me?" Okay, well, it's not that easy. I mean, the easiest auto-update - like, delete it, and then deploy it again. And then you're good. But people don't want that. So the point being is, you want the service, because this stuff should be seamless, and someone needs to put in the effort for it to be seamless every single time.

**Florian Forster:** It's hands-off. We really call it hands-off. I mean, we take care of the TLS stuff, we will take care of updates, of backups, of rate limits, of malicious traffic... Everything is just handled for you, and that's a value I think is going great with the community... Even though Citadel's open source version is really like -- there is like 99% of the things that we have in our cloud service is in the open source code, and then you can run it on your own. You can even get like an enterprise license with us to get support, and stuff. So we really encourage you to do that. But the main reason we still encourage doing that is we see many customers having special requirements on data residency, or data access... And we always tell them "We don't want to do like a managed service offering for you guys, because it feels wrong. Because we still have access." And if your reason is, "Nobody else should have access", well then you need to run the system on your own.

**Gerhard Lazu:** Yeah. Yeah, that makes sense. I forgot, you're a security, right? \[laughter\] And security has this very important requirement. No, sorry, I have to run this. I mean, I understand... I can pay you to run it for me, but it has to be in the specific locations, with these restrictions, and... Yeah, that makes sense.

**Florian Forster:** Yeah. So that's the thing I think went great with the cloud service. So free tier is definitely a thing we will reiterate on, even though you could run it on your own. I mean, it's not like there is like a feature gap, or something like that.

**Gerhard Lazu:** Okay. What about the things that you wish you knew, before we \[00:48:29.24\]? \[laughter\] The "Oh, f\*\*k!" moments. And that will be bleeped, but...

**Florian Forster:** \[laughs\] Yeah, there are many. Honestly, there are so many. I'm going to choose to focus on the operation side of things for the first moment. It's really like, don't try and build many funny things, even though there are great open source tools around, and everything is ready. Just try and relax a little and use ready-made services in the beginning. Because we thought "Okay, let's run our own Kubernetes, or GCP", and stuff. "Let's get more control of it." Yeah, it was going great, but the added cost and the added slowness you have while maintaining our own Kubernetes and stuff - it's not worth it. So that's really -- just use turnkey services to begin with. And at one point, be ready to make decisions to change that stuff to more enterprisy side of things... Because \[unintelligible 00:49:36.04\] application to Netlify, and Vercel, and calls it a day... But I think that's only worth for the start. At one point you want to get more control, more flexibility... You want to create rate limits, you want private IPs, you want to have like the enterprisy things... And you get that way easier if you start focusing on using like Google Cloud, AWS, Azure, whatever is your poison, basically... Just use an infrastructure provider for that.

\[00:50:10.17\] While reflecting back, I feel like that would have helped us decrease some of the drag along operation efforts. And as well, don't run Cockroach on your own; just use the cloud service. Why not? You must really have valid and specific requirements that do not allow you to do that before you make that decision. So that's really a big thing on that end.

**Gerhard Lazu:** Okay.

**Florian Forster:** Other things? Yeah, our startup lesson is like "Don't assume things. Always validate things. Talk to your customers, talk to potential customers whether a feature is really needed." And we built, for example, too many features in Citadel. We assumed too many things in the past, and so we now strip some of the things that nobody actually needs. And you need to have like data to make that judgment, but other than that, it really comes down to "Check first whether somebody needs something", and not only one guy, but also multiple guys, and then build it, and not the other way around... Because you get a lot of dead code that you need to maintain, and it can have bugs... And yeah, so that's really a lesson we're mentioning.

**Gerhard Lazu:** Yeah. It's a good thing that you are pruning some of this stuff. Because what usually happens - you never touch it. You add it, but then you never touch it again. And that too often ends up in some very big messes, that no one wants to touch, ever... And then things just die like that, you know?

**Florian Forster:** I mean, as soon as you see somebody raising a concern, or a bug over something, and you think, "Is that feature even being used?" And you can't really validate to yourself, "Yes, that's actively being used." You should invoke a discussion if you want to rather remove it, because just one person is using it. It's just maintenance effort.

**Gerhard Lazu:** I'm wondering, on the operational side of your cloud service, how do you know when something doesn't work as expected? How do you know that there is a problem, basically, is what I'm asking?

**Florian Forster:** Let's say I am a huge fan of using existing data to get a sensation whether something's healthy or not... By which I mean we try and avoid active health checks; like, we don't ping Citadel from the outside world and figure out whether a service is available or not. I'd rather use the logfiles and throw them into some kind of analytics engine to figure out "Okay, how many status codes do we have, in what variety? How many calls? What's the latency?" Because that gives you a broad understanding of the health of your service across regions. Because if an error rate is growing, and that's being tied into a region, you'll normally know it's more an infrastructure-related problem. If the error rate is growing across the globe, it might be more on the storage side of things, because that's a global thing... And so you get quite fast a broad sensation of how things are.

And the other hugely important thing to us is like having traces, like open tracing. We use Google Cloud Tracing for that stuff, to get a sensation on whether releases change things, or smallish changes, or A/B tests also... Because sometimes we create a new branch in our open source repository, and refactor some of the code, for example, get user by IDs being revoked with a new SQL statement, and then we deploy it to production to get some traffic to it, and see how latency shifts around.

So it really comes down to observability based on the data you have around, but not checking it actively, because that gives you a wrong sensation. Because you're always checking happy paths there. I mean --

**Gerhard Lazu:** \[00:54:03.02\] Yeah, true. Yeah, that's a good point.

**Florian Forster:** Yeah, you can check a login page. I mean, filling in fields, pressing a button. It will work. But what happens if it's not working because the user has strange extensions in the browser, because they have strange proxies in their environment, because mobile connections are reset... So it does not reflect the natural world.

**Gerhard Lazu:** Yeah, that's a good point. Okay. So we're still at the beginning of 2023... What are the things that you're looking forward to? ...for Citadel, for your cloud service, for what you do, for the space, for the wider security space. You can answer this whichever way you want. That's why I'm giving you a wide \[unintelligible 00:54:43.25\] Pick whatever resonates with you the most.

**Florian Forster:** We have identified some needs for our customers who want to have more control over their general user experience... Because currently, people use the hosted login page from Citadel, which can be white-labeled, and you can basically change everything, and customize it... But still, it's like the \[unintelligible 00:55:11.09\] for you. Even though it's a good approach, because we can include all the security policies into it, and verifications, and stuff... But there is a huge demand in the developer space for having like only authentication APIs. So they basically can send us a username, password, and we will respond by true or false. So people want to create their own login experiences, as well as their own register experiences. And that's a thing we will tackle in the next few months, in the next coming months. We want to extend our APIs so that people can build their own login pages.

And during that phase, we will also change our login, because now it's built with Go, and Go HTML templates, and that's kind of not so beautiful as it could be. There might be a point where we change that to Next.js, to get like a more SDK-y approach, so that we kind of build our login with Next.js, and we will provide you the template that you can clone and create your own login without our intervention.

So Citadel might become more of a headless identity system in one place, where we just provide you the means to have different components that you can deploy, or if you don't want them, you can get rid of them. So that's kind of a natural evolution path we see there.

And the other big thing we will change in 2023 is we will extend our actions concept more. Basically, actions are -- you can invoke customized JavaScript codes in Citadel at certain points. Like, if a user is created, you can call a CRM system with some JavaScript code, you can fetch some information from there, and the whole action engine will be reworked that we can allow for more flexibility. So you basically can think of it like a GitHub Action; you can subscribe to events, and then execute something. And that's a thing we encourage quite heavily, even though it has a steep cost to be paid in regard of runtime security. I mean, running foreign code in a system is always not so funny to do...

**Gerhard Lazu:** Oh, yeah...

**Florian Forster:** We do a lot of pen testing, and testing in general... And that's the reason why you can't really run it everywhere currently in Citadel, because we want to reduce the threat surface, to get our bearings whether the engine works, and everything... So that will be a subject to be changed in 2023. So those are the two biggest, prominent points I think you will see from us on that end.

There is more underlying stuff, especially around machine learning and things, because we -- I mean, Citadel is built in an event sourcing concept, so we have a lot of data available... And we want to give our customers the option to train data, threat prevention models with their own data, to compensate for signal-based risks... I mean, that's kind of a little bit on the academic side of things, and we are working with research partners on that end. But bringing value from the data is a huge thing that we wanted to provide our customers.

**Gerhard Lazu:** \[00:58:28.25\] Yeah, okay. Okay. What about the cloud? Anything for the cloud that you have planned?

**Florian Forster:** Some things... \[laughs\]

**Gerhard Lazu:** Some things. Great. That's a great answer. We can move on. All good.

**Florian Forster:** I'm not sure much I should already disclose. \[laughs\]

**Gerhard Lazu:** No, no, all good. Let's move on. Not a problem. All good. \[laughs\]

**Florian Forster:** Let's see... A thing I can definitely disclose right there is the -- we are strongly considering opening additional regions, because we see now where traffic is originating from, and we are considering to expand our footprint on that end... And also a thing that will land in our cloud eventually is a feature I did not disclose yet. It's basically an event API. It's a simple API; you can basically fetch everything that changed in Citadel, with the whole body to it, like first name changed to whatever, because that gives the developer a great way of backpressure processing of things that changed, so they get a proper change track of everything.

And that thing - I mean, the event API will land at one point in our cloud service, but that needs some rigorous testing to be sure that all the inner fencings of our cloud service work out well, not that customers see the wrong data, and stuff. So that's a thing. And we are experimenting with different CPU profiles in our cloud service to reduce some of the latency we see, especially during hashing operations... \[unintelligible 00:59:55.17\] But there is like a limitation in Cloud Run's offering; you can't have really high CPU containers without high memory, and we don't need so much memory. Normally, Citadel uses 500 megs of memory; we don't use more. The rest is being handled by the storage layer and caching.

So yeah, that's a thing that needs untangling... So either we can use resources better, or we can somehow influence to have more CPUs in there, to get better latency. Yeah, that's an ongoing experiment. We always try to wiggle out some things.

**Gerhard Lazu:** Yeah. Okay. Well, that sounds like a very good plan for 2023. Let's see how much of that actually happens... As we know, the plans are the best.

**Florian Forster:** \[laughs\] Yeah, yeah,

**Gerhard Lazu:** Everything's gonna be amazing, and then reality hits, and then you realize that half the stuff you thought would work will be impossible. So that's my favorite - like, get it out there, see what sticks, see what doesn't, keep making those changes, those improvements, drop what doesn't make sense... Whatever.

**Florian Forster:** It's really testing things. And there is also some discussions around a reiteration of the pricing. For example, a thing we are currently testing, as well as deciding, is whether we want to give away a domain for free, for example. Because currently, if you want to have like a production domain with Citadel Cloud, you need to pay 25 bucks a month. But we are strongly considering whether we want to provide that domain name for free to developers, because it reduces drag along their journey. I mean, they want to start poking around, they want to use it... And if our cost attached to that is not so high, it's no real problem. And since Google changed some of their offering in the TLS space, you can get like customer certificates quite easily, without a huge cost profile. So a certificate would cost you only like 10 cents per month, per customer... So it feels like the right way to do it, but it's not yet a done deal.

**Gerhard Lazu:** \[01:02:06.03\] Okay, that sounds exciting. Not as exciting as your takeaway, because I'm sure that you had the time to think as we were discussing this, about the one key takeaway that you want listeners that got as far as this in the conversation with us. So honestly, this was very eye-opening for me, to see how maturely you're thinking about some very hard problems, like distributing code globally, latency, and the scale that you're thinking... You're saying a few seconds is too slow. And to me, it's like "Whoa, what?" Sometimes requests take longer than a few seconds, because it happens, because maybe you're on a phone, or you're in a watch, or whatever the case may be. And then your CPU isn't as fast, or the cellular doesn't work as well as you may think.

So to me, from what I'm hearing is operationally, you're very advanced. And you've tried a couple of things, and you've seen a bunch of things that didn't work out very well in practice, even though the promise is there, and the marketing is working well for certain things... So you have a lot of like -- I think street-wise, it's called; you're street-wise. You've been out there, you've tried a few things, and you know what works and what doesn't for you. So, again, for the listeners that made it thus far with us - and thank you all for sticking - what would you like them to take away from our conversation?

**Florian Forster:** I think the most important thought - in my space, to be specific - is don't think of the authentication system as two input fields and a button. Because that's plainly under-estimating the amount of effort in depth that goes into such topics. And so I would encourage every listener to always think thoroughly across the reasoning, whether you want to use just a framework in your application, or just create your own login thing... Because there is a huge attached cost to that in regard of operational security. Because you need to maintain it, you need to pen test it, you need to prove the security of the processes, and all that - let's call it dirty plumbing work, to make it happen.

And so I really encourage everybody, please use some kind of turnkey solution that's battle-tested... Even though if you use a framework from your language-specific thing, don't build it your own; you will hurt yourself at one point. And you don't need to take my word for it, but a general agreement in the industry is that it's better to have somebody deeply committed to the topic of authentication and authorization, to have them working on that, and not you. Just use something, and build great features and great products. So that's really my one thing I really want to get across to everybody.

**Gerhard Lazu:** It just shows that your head is where your heart is, right? ...which is authentication, authorization... I mean, if you build a company around it, you really have to believe it that thing... So you're committed through and through. And that continues to be top of your mind, which is important.

**Florian Forster:** Yeah, I mean, it's such a huge -- authentication and identity space, in general, it has a huge depthness to it. And it always feels like you can easily do that. But as soon as you start poking into the space, you will see there is like a huge amount of time flowing into it. I mean, the OAuth threat framework is like 60 pages. I recently did something for the Swiss government, which will come out in a few months... It's like 120 pages on just things you should consider when building something like that... And it starts with things like XSS, and CSPs, and... You need to care for that. It's just -- the depth is the problem, basically.

**Gerhard Lazu:** Yeah. Okay. So it may seem simple when you consume it as a service, but there's a lot that goes into it. And if you think you can do it - sure, but there are dragons there... So at least just be aware of them. Just don't get eaten without knowing what you're getting yourself into.

**Florian Forster:** Yes. I mean, you can always poke... If you want to make funny games, just go to a login page where you have a user, throw in your username, throw in your password, and if the response is coming back faster than 500 milliseconds, I can tell you something is broken already, because no solid password hashing algorithm will return a resulting that fast. Otherwise, they run huge CPUs. I mean, I call it \[unintelligible 01:06:53.15\] and stuff. Otherwise, you can't get that hashing through so fast. But yeah, that's just a sensation. That's a thing I always, I poke around login pages. \[laughs\]

**Gerhard Lazu:** Well, Florian, thank you very much for joining us today. It was an absolute pleasure hosting you. Thank you. It was a great conversation, and I look forward to the next one.

**Florian Forster:** Thank you. Likewise. I really liked your questions. And you see, I'm still laughing...

**Gerhard Lazu:** Yeah, exactly. So I've done something right. Thank you very much for that. Until next time. See you.
