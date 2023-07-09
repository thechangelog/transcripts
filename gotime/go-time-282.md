**Natalie Pistunovich:** So some time ago I was on Twitter, and I saw a tweet that said "I'd really be interested in an episode debating Kubernetes versus serverless function for distributed systems." And it continued, "As someone working a lot with serverless to create large-scale systems, for me complexity in Kubernetes doesn't seem worth it, especially when onboarding new people, but I'd love to hear other perspectives. I could be missing out." So this is when - Joe, right?

**Joe Davidson:** Yup, that's right.

**Natalie Pistunovich:** Hi, Joe. You wrote this sweet.

**Joe Davidson:** Yes, indeed. Yeah. I think this episode is gonna be like a whole unpopular opinion. Right?

**Natalie Pistunovich:** So you wrote this tweet, and you were interested in having this conversation, so we brought you here today, I guess, with the perspective of "Maybe it's too much." But we also found going on in that thread Abdel, who was interested in providing another perspective. Abdel, how are you doing?

**Abdel Sghiouar:** I'm good. How are you?

**Natalie Pistunovich:** Good. So I guess your opinion, we already know. And we have a third guest, Srdjan, which - we're gonna keep it as a surprise, without introducing your background or your context just yet, and we'll see kind of how it goes and where can we find your opinion on the scale of complexity versus not complexity, I guess. So would you guys would like to introduce yourselves?

**Srdjan Petrovic:** I'll get started. My name is Srdjan, I'm a software engineer at Google, and I will keep the rest secret, I guess.

**Abdel Sghiouar:** I'm Abdel, I'm a cloud developer advocate at Google. I've been at Google for almost 10 years. So my background is actually in infrastructure. I came from a background of working on networking and storage, and data centers, and racking servers, and switches, and stuff like that. And then I came to cloud, and very quickly started being involved with Kubernetes... And now I co-host a podcast about Kubernetes, so obviously, I am extremely biased about this topic.

**Natalie Pistunovich:** And also knowledgeable.

**Abdel Sghiouar:** Yeah, I've been on Kubernetes for like five or six years now. So...

**Natalie Pistunovich:** Joe, how about yourself?

**Joe Davidson:** I'm Joe. So I am a consultant at Infinity Works. We mainly work with cloud-based, kind of what we call digital transformation. I'm also the maintainer of a project called XC, which is kind of my baby. It's not related to serverless, but... Mainly, I work in AWS, so that's kind of where my knowledge lies, and... Yeah, I'm trying to work with Go as much as possible, hence being here.

**Natalie Pistunovich:** So while all our listeners probably have worked with Kubernetes for a while, with and without, I would recommend students that I'm teaching as DevOps 101 class to listen to this episode. So when you go into complex terms, just give a moment of explaining them, and then feel free to dive in. So okay, do we need this complexity? I'll bring the question just like that.

**Srdjan Petrovic:** Why don't we let Abdel speak first? And then we could reply.

**Abdel Sghiouar:** Okay, sure. I didn't expect we'll jump directly into it. So then my counter question would be "What do we mean by complexity when we talk about Kubernetes?" Okay, before that, do we mean complexity of having to choose, or complexity of Kubernetes versus serverless?

**Joe Davidson:** I'd say the kind of--

**Natalie Pistunovich:** I would say the latter.

**Joe Davidson:** Yeah. Yeah.

**Abdel Sghiouar:** The second one. Do we need it? No. Not everybody needs to be on Kubernetes, the same way as not everybody needs to be on cloud, and not everybody needs to do machine learning. There are valid cases for using Kubernetes, and as well there are valid cases for using serverless. . The part where I said earlier I'm biased - I'm biased because for me Kubernetes is not complex, because I understand it. And I think that Kubernetes as a platform is whatever you want it to be. It's for me three main things. It's an abstraction layer on top of infrastructure. So if you have delved like myself with infrastructure before, where you had to write Chef and Puppet recipes, and Bash scripts to automate things, then Kubernetes is pretty nice in that sense, because it simplifies managing infrastructure.

But then you can also look at it as a platform, as a layer that you don't have to really understand how it works under the hood. It has an API, and it's actually very funny that a lot of people that says Kubernetes is complex are developers who are supposed to be in love with APIs. Because if there is one thing that developers like is APIs and programming languages.

Then the third part, which I think we don't talk about very often, is the extensibility aspect. So Kubernetes API is extremely extensible, and you can build your own things on top of it, and you can automate your own little things, and there are companies that are making business and pumping up billions just from this. So I think what I'm trying to say as a TL;DR is it really depends on what do we mean by complexity, and it really depends on what you're trying to do. And I just need to be very honest here, I have a background in consulting, so the answers to my questions are always going to be "It depends."

**Natalie Pistunovich:** \[laughs\] That's a fair disclaimer. You mentioned you've been with Kubernetes, or been using it for five, six years or so. And you also mentioned you find comfortable saying that you generally understand it. Would you say that it's the same easiness of understanding it for somebody who steps in now, given that it obviously grew with complexity over the time?

**Abdel Sghiouar:** \[05:46\] No, definitely not. I think that the problem, or the challenge with Kubernetes, as any technology, is that you need to understand why it exists, to understand what problems it solves. And I'm not advocating here that every single person who \[unintelligible 00:05:58.08\] your students, I'm not advocating that every single person who is trying to come to the tech world and to DevOps, that they should go spend a year racking and stacking servers and writing Bash scripts to feel the pain, so they can fall in love with Kubernetes because it solves these problems.

**Natalie Pistunovich:** Bootcamp.

**Abdel Sghiouar:** Exactly. That's not what I'm advocating for. What I'm trying to say is that it's complex if you are -- I mean, it is complex in the sense that the ecosystem around Kubernetes is huge. Because the problem also with Kubernetes implementations today is that it doesn't start and stop as Kubernetes. It starts as Kubernetes, and then you need logging and monitoring, and you need identity, and you need networking and security and all these other things. It's the whole ecosystem. I don't know if you folks are familiar with the CNCF landscape, which is a page that highlights all the projects that falls under cloud-native. And that landscape is --

**Natalie Pistunovich:** We'll add this link to the show notes.

**Abdel Sghiouar:** Yeah, we will have a link. It's huge, right? And when you go to that landscape page, you'll see there is like categories. So \[unintelligible 00:06:57.18\] category, databases category... And inside each category there are multiple tools. And so I think part of the complexity is actually having to choose, "What am I going to use with my Kubernetes, that would potentially make my life easy?"

**Srdjan Petrovic:** And in some ways, Abdel, is this correct that Kubernetes was trying to simplify things compared to doing it with base VMs? And then serverless function and Cloud Functions just takes it in all the way up? So yeah, I think Kubernetes itself is trying to help simplify running thousands of VMs, and scheduling jobs on them, and so on.

**Abdel Sghiouar:** I think it's a fair way of putting it, yes.

**Srdjan Petrovic:** Yeah, I would agree with that. I've just learned Kubernetes recently, and at some level, it is very simple, but it's still -- yeah, it wasn't easy. There's so many knobs and settings, and you have to set memory explicitly, and so on... The YAML file is, sure, for one service, one deployment; they've made it super-trivial, and I really like it. But then you start running other deployments and other services, and that YAML file just grows and grows. And then you get into like custom resource definitions that other companies create on top, and... Yes, soon you're configuring a lot.

I wouldn't say it's a lot -- there's a lot of unnecessary configuration. I almost feel like every line in that config is important and does something, and you can just omit those lines, and the defaults are pretty good. So yeah, I would say it's actually a very, very -- it's probably the best infrastructure management system that I've come across, even comparing to what Google does internally. I've really liked Kubernetes, but it takes a while to learn it. And once you learn it, it's fun and you can do stuff. It's just that first hump, and... Yeah.

**Break**: \[08:52\]

**Natalie Pistunovich:** Joe, what is your experience with Kubernetes? Have you worked with it in production? Have you used it for long?

**Joe Davidson:** Not in production, no. So my experience is kind of a few courses and kind of side projects, playing around with it, trying to kind of understand the thought process around it. And to me, I guess - yeah, I kind of figured that there would be a "It depends", as there always is. But I think the main question for me was kind of why has it become almost the default, I think in the Go community at least. I know maybe it's because there's a history of intertwining of Go and Kubernetes... But in Manchester, UK, where I'm from, we're kind of a serverless fanatic city, I would say. So it was only until I started working with companies outside of Manchester did I start finding more and more people using Kubernetes. And yeah, for me, I just, I couldn't quite understand it, just because to me, I see the kind of learning curve, where - with serverless, to me, I'm just writing a Go function, and then I'm hooking it up to some kind of infrastructure, and then invoking it, and I'm kind of spending more time solving problems than kind of thinking about the infrastructure around it, if that makes sense.

**Srdjan Petrovic:** Yeah, and I think that's a really valid use case for you, and for a lot of people. But I think once you get into maybe performance issues, and you need to allocate more memory for some things, you'll have some read-only data, you'll have some caching, I think those are more advanced use cases where Cloud Functions might not work for you, or you want to do RPCs, or other things.

But I think I kind of agree with you, Joe, that there are a lot of people that assume "I'm just going to use Kubernetes", whereas serverless functions or Cloud Functions would just work great for them. And I think how people make decisions what to use is not -- I don't understand it. And you could argue "Why use Kubernetes? Why just not use VMs?" You can make arguments for the whole spectrum. And I would think that most people on that spectrum, they're not in the right category they should be in. But then I sometimes have these forward-looking things. "What if I outgrow Cloud Functions? What if I get so many requests, and I'm paying gobs of money for Cloud Functions? Why don't I just start with Kubernetes and I can grow into any scale?" That could be one reason. There are many, many reasons. I don't think we should get into which one is better. It's just, there's so many dimensions on which people optimize, I've learned.

**Abdel Sghiouar:** Well, I think that there are a few things that have been mentioned by the two of you. So let's start from the last thing you said. I think debating Cloud Functions as a service versus Kubernetes is the wrong debate, because Kubernetes can do more than just functions, right? If you really think about it, it has APIs for functions, jobs, apps, static, stateless and stateful... It has pretty much an API for any sort of deployment that you would need... Which technically developers are in either of these three categories. You're either writing a backend, an API, something like that, or a frontend, you're writing a job, with pipeline and orchestration, or you're doing functions... Which, in my head, functions are just a special type of backends, right?

So Kubernetes can do a lot of things. So the question then becomes, for you, Joe, for example, if you tomorrow need to go from writing Go functions that deploys on AWS Lambda, to glue a bunch of services together to write jobs, are you going to be able to use lambda for that? I would probably assume the answer is no, and you have to pick up another tool. And then we could argue there is also a learning curve for that next tool you have to learn. This is one thing.

The second thing, which I think is so important... And I'm not tooting on our own horn, but there is a person in my - he's actually my director, Richard, and he wrote a very interesting article debating the... There is this movement called Shift Left, which essentially is what DevOps is all about, like making more developers more empowered, more responsible etc, etc. And his argument is "Instead of focusing on shifting left when you are doing modernization, you should focus on shifting down." Essentially, shifting down means giving that complexity to the cloud provider; letting somebody else deal with all the complexity... Which, because we're on the topic of Kubernetes - I mean, using a managed Kubernetes is pretty easy. Like, deploying your own Kubernetes is the problem. But using a managed version of Kubernetes is pretty easy.

And you said something very interesting, Joe, that is getting out of your marketing Manchester to work with international customers you realized a lot of people use Kubernetes. I think that that's the unfortunate consequences of the DevOps and Shift Left movement. Because what's happening right now in our industry is that we're just expecting developers to know more. 10-15 years ago you'd go to work, you'd write code, you'd ship a binary and you'd go home. That's it. That's a Java developer. Probably you do some tests, or not... No one expected you to know how to SSH into a server. No one expected you to know how to set up an SSL certificate. That was not even an expectation.

\[16:23\] But now, I think you're all aware there was this massive thing called full-stack engineering, where we suddenly expect engineers to do everything: frontend, backend, security, storage, databases... Like, when was the last time you heard of a DBA? It was maybe like 15 years ago. They probably still exist, but we don't hear about them that much.

And I think this is the core of probably the -- I wouldn't call it the problem, but the debate... It's like, why do you as a developer feel you need to learn all of Kubernetes? So the core of the problem is, if you think it's complex because you have to learn it, then the question is "Why do you have to learn it?" Are you in the right setup? And what I mean by the right setup, I mean the company, the organization, the team, the way you are structured, that is trying to utilize your time to the maximum, instead of having you waste time doing things you don't need to do.

I'm going a little bit philosophical here, but I think that the whole question then is, if you don't need to learn Kubernetes, then just don't. It's not really that big of a deal. And if you feel the need to learn it, then probably the question is, "Are you organized in the right way, the most efficient way, or not?" I don't know if what I'm saying makes sense...

**Srdjan Petrovic:** I think, Abdel, maybe you are pointing out that if you're part of an organization, there'll be a continuous deployment pipeline. So it's very similar to Cloud Functions, in that you write some code, you submit it, and then eventually that code is going to make it into production. I agree with you - if you're part of a company that has processes like these, that is quite simple. But many people who are writing Kubernetes apps today don't -- you know, just building a Docker container and uploading it somewhere, creating an account at Docker Hub, labeling it, tagging the right thing, then updating the config... It really is not a seamless experience, especially if you compare it to go run. And even though I work in systems infrastructure, to me these are just steps in the way. I want to build a binary, and I want to run it locally, or I want to run it in the cloud, and I don't want to build containers, upload them somewhere, tag them, and then change config files, and then apply the changes, and then wait for the rollout, understand how the rollout is happening... To me, these are just things in the way, and I presume for Joe as well.

So I see this to be the power of Cloud Functions, and to me, the thing about Cloud Functions is that it's a sandbox that it's really hard to leave. By the way, I'm trying to be -- I work at Google, but I'm trying to be independent... And if you need to do anything more, like you want to add some caches and stuff, it just seems like it's uncomfortable for me to exist in that environment where I can't do something. And that something is typically, in my mind, centered on performance... But I don't know if that's a real concern of people out there. But I think as a developer, to me, Cloud Functions feels too constrained, and I'm kind of forced into a sandbox that I can't exit, even if I outgrow the sandbox. So Joe, maybe you can talk about that, and what is your experience of working in that sandbox.

**Joe Davidson:** Yeah. So I guess personally, I've not really felt those constraints. The last project I worked for, we were working for an insurance company, and we were basically having to generate quotes for hundreds of policies, essentially, a second. So it might not be on the scale of a Google application, but we were getting quite a fair amount of throughput, and just kind of using lambdas, using Go... We didn't have to think too much about performance apart from in our actual code. So in any parts where we were fanning out requests and fanning back in, we could use goroutines... But the actual kind of infrastructure - I don't think it was working against us.

\[20:19\] I suppose that the only kind of constraints that we did have, admittedly, were for hosting frontends. So we were doing server-side-rendered frontends, which I think Cloud Functions aren't too fit for purpose for... So that's when we kind of upgraded a level to a managed container. So we would deploy it just to Fargate, I think it was, which I guess is potentially, on AWS at least, the easiest way to just deploy your container. So we just built the frontend and deployed it there.

I have seen frontends hosted in serverless functions before, but I think the kind of proximity to the user was an issue, especially because we were using its node, so like the cold starts weren't as great as the \[unintelligible 00:21:04.20\] So yeah, in the kind of performance-intensive areas, I'd say yeah, we didn't feel those constraints. And if we wanted to, we could tune the configuration, we could up the memory, set some provision concurrency if you're expecting a certain amount of load... So yeah, I wouldn't say I felt that, but maybe we hadn't reached the kind of throughput that would require a move to Kubernetes.

**Natalie Pistunovich:** It probably depends on the type and the structure and the architecture of your app. So now it's time to ask - Srdjan, what are you working on?

**Srdjan Petrovic:** Thanks, Natalie, and Abdel and Joe. We have been working on a protocol Service Weaver, which aims to make it easy to write and deploy distributed applications, and then to write them and then deploy them in the cloud, or choosing --

**Natalie Pistunovich:** ...which is written in Go...

**Srdjan Petrovic:** It's written in Go, that's right, and we really like Go. And it's really targeted -- just trying to not make strong opinions about Kubernetes versus Cloud Functions... It's really targeted about how do you stitch multiple of these independent services together, and overcome complexities. I would say, for example, Joe, if you have 10 Cloud Functions, or Abdel, if you have 10 containers, and you want to make a change across two of those, or three of those, and roll it out... You know, it's not just about rollout, it's about versioning. So you have to worry "What if this service updates its code, but then the service I'm talking to still runs the old code?" And we've just spent a lot of time worrying about versioning issues, and so we wrote this framework, which assumes that everything is rolled out atomically, and so you never have to worry about versioning across Cloud Functions or containers. And then we've taken that and worked on performance, and so on. So that's it, in a nutshell. I don't want to talk too much about it. I find this conversation super-fascinating.

I would ask Joe, actually -- so I feel like generally cloud databases have really changed the landscape, because most services now can be stateless. But then I think why not just do JavaScript plus a database like Firebase? So forget about cloud at all. Just run in the browser, with a backing database... That seems to me actually to be way simpler than even Cloud Functions. And I guess, again, there are use cases where that doesn't work, and I think that's the answer. Yeah, I don't know what you guys think... You know, if we're gonna go into the extreme, then just do that, and you're done. So Cloud Functions, there's something in between; you have an API that you call from your app... Yeah, it's a whole spectrum, and I think I agree with both of you - where you fit on that spectrum is not where you're at right now. Where you should be is not where you're at right now, and I think people are sometimes misplaced.

**Abdel Sghiouar:** I think it's interesting that you think -- you said "Firebase. Forget about cloud." Well, Firebase is cloud, right? So... \[laughs\]

**Srdjan Petrovic:** It is, yeah, but you are accessing it from the browser, right? You're accessing a database.

**Abdel Sghiouar:** \[24:07\] Correct. Yeah. I mean, sure. It's a very interesting conversation... So I'm a developer by education. I never really worked as a software engineer. So there is obviously a part of the kind of mentality that I miss, or I don't always get right, because I don't understand what you're trying to optimize for. I find it interesting that developers would always argue against Cloud in the way that you guys are arguing against it, or you folks are arguing against it. But then you would spend hours debating Go versus C, versus your favorite programming languages, and just kind of bashing the Java developers because you don't like Java, or Java developers bashing the Rust developers because Rust is for kids... It's very fascinating to me.

I think that the core of this question is what are you trying to optimize for? Are you trying to optimize for engineering cycles? In which case I would agree with both of you, that for each use case there is something that fits. And if your goal is to optimize for time and engineering efforts, then choose the simplest that works for you.

Keep in mind that one of the arguments I would have against this culture of pick the right tool for the right job is that then you have to learn all these tools. Right? And that's kind of what Kubernetes is trying to solve for, is that once you know it, it just works for all the use cases. So that's just one thing.

One of my favorite books that I read is this book called "How generalists triumph in a specialized world", which is a book that tries to argue at the philosophical level this concept of generalization versus specialization. And I think that this kind of debate or spectrum, it manifests itself very strongly in our industry, because now we have -- the article I mentioned earlier about the Shift Down/Shift Left has this quote which I like, which says, "If you're looking for full stack engineers, there are probably nine of them in the world." Like, no one knows everything.

So yeah, so basically, on the spectrum of using the right tool for the right job, you might end up with having to support, to learn multiple tools, right? So there is that also to take into consideration.

**Srdjan Petrovic:** My concern would actually be that you'll outgrow the tool, as well...

**Abdel Sghiouar:** And then you would have to learn the next one, right?

**Srdjan Petrovic:** ...which is true, I think, for JavaScript. I mean, JavaScript is just an awful language... But if you ever outgrow the constraints of Cloud Functions -- and if I've heard of people whose bills have become so high, because they're paying per request, and the request has gone up, and now you have to rewrite everything. So I'm not against Cloud, Abdel, just to be clear. I guess I miss the days where you'd just run the binary locally, and you'd just do go run... And I just find it sad that we have to -- there are all the steps in between that you have to learn in order to run in the cloud, and... That's what it is.

**Abdel Sghiouar:** So let me ask you a question - what's your ideal situation? What's your ideal stepless "I want to run my app in the cloud" scenario look like?

**Srdjan Petrovic:** Go run. I mean, with a backing database. So you configure a database somewhere, and instead of running locally -- and that's what we... We're trying to -- I'm not just trying to argue something that we've written, but a simpler way to deploy an app that runs in a container, in the cloud, without I guess a lot of the hooks of... I mean, Kubernetes has so many hooks, which a lot of people find useful, and they are useful, of course... Memory, CPU utilization, what type of machine you're going to run on... But there are developers like Joe that just don't care, I guess. And for them, the overhead of Kubernetes is just a cognitive overhead.

**Abdel Sghiouar:** \[27:53\] Have you had a chance to look at Google Cloud Run ? ...which is what Fargate is the equivalent of, essentially. Fargate or ECS, I think, is kind of the same.

**Srdjan Petrovic:** Yeah, that's definitely a step in the right direction for me.

**Natalie Pistunovich:** Joe, I see you nodding. Did you also get to try that?

**Joe Davidson:** Yeah, yeah. Kind of a pet project, when I was messing around with a pet project... So yeah, I do like the simplicity of it, but I guess there's still the case of having to kind of -- you still have to create a container, a Dockerfile, and...

**Abdel Sghiouar:** Well, you don't have to. You can do build from source with something called buildpacks. So if you use the gcloud command, you can just build from source. You just run the gcloud command from the folder where the code is, and we will build the container for your behind the sceness. It takes a little bit more time to deploy, obviously...

**Joe Davidson:** Yeah. So that sounds awesome to me, because that's kind of what I'm trying to do. At the moment - soo I'm using CDK, so I just kind of write a function to create a new Lambda, and I point it to the folder where my binary is located... Or not where my binary is located, but where my main package is.

**Abdel Sghiouar:** Your source code.

**Joe Davidson:** Yeah. And I just do CDK deploy, and then it builds it for me, and then deploys it to a function... And that's kind of the workflow that I like. It means I don't even have to try anything out locally, because it's fast enough for me to just get something out there and try it in a non-prod environment. So the feedback loop is really good, and that's kind of what I'm looking for.

**Srdjan Petrovic:** I would say that things are converging. I think there are a lot of tools built on top of Kubernetes. GK obviously has the Autopilot, where you don't have to worry that you only have three nodes and you're running expensive jobs on them. Cloud Run is also addressing that concern. Yeah, with the right setup, I think it can be that simple, and I think that's the point you were trying to make earlier, Abdel, that you have a continuous deployment pipeline, and then it can appear like you're just submitting code into a repo and it's getting deployed... Which is sort of the Cloud Function -- at least deployment experience. There are other things that are managing the cluster, and so on

**Abdel Sghiouar:** Okay, so what I wanted to mention, and the reason why I asked you about "Have you used Cloud Run ?" is I don't know if you're aware of this, but Cloud Run came actually because of Kubernetes. So two, three years after Kubernetes was released, the community worked together on something called Knative. I don't know if you know what's that. So Knative is a framework for Kubernetes that gives you an abstraction layer on top of Kubernetes so you can write and deploy apps in an easier way. This is kind of the most straightforward way I could explain it.

It is an open source project. It was open sourced by Google and a bunch of other companies... I think that today, no one runs Knative by themselves, because no one needs to do that... So Cloud Run is Knative under the hood. And actually, the Cloud Run API allows you to deploy your app using the simple way, which is gcloud run/deploy whatever, or you can actually use the Knative API, which is a YAML file. So you can write a Knative YAML file and submit it, and the API would accept it. So it's interesting that we had to go all the way into the extreme, which is Kubernetes, and had people fight and not like it, and then came somewhere in the middle to try to solve the problem with Cloud Run .

I would say, as Srdjan said, things are converging, in the sense that people are trying to make it easier for the top 70% or 80% of developers who just want to write code and don't have to worry too much about infrastructure.

There are some things I wanted to mention... This is kind of weird and bizarre for me to talk about it, but I was in meetup a couple of weeks ago, and there were some folks from Microsoft talking about their -- I believe it's called Azure Application Containers, or something like that. It's a sort of like in between Fargate and Cloud Run type of thing. So it's the simplicity of Cloud Run, but with the knobs of Fargate, and with some of the knobs of Kubernetes... Because it is still Kubernetes under the hood, and they allow you to do this group applications in like a sort of like container. Not container in the sense of Docker, but container in the sense of their way of structuring the apps; their own kind of like namespace, if you want. Ad then the apps can talk to each other... They use DARP, or DAPR, one of these open source frameworks --

**Srdjan Petrovic:** \[32:23\] DAPR, yeah.

**Abdel Sghiouar:** Yeah, DAPR. So these dapr.io for service discovery, and for the gRPC places and all of those things. So if you are building like a complex, multi-microservices application, it's actually -- it looks very darn good. Actually, I was very impressed with it. And the developer experience looks very good. The interface is awesome. So it's on my list of things I want to look at.

And the point I was trying to make is I wish actually we can get there with Cloud Run. Because Cloud Run is great when you're writing one microservice. It feels a little bit clunky when you're doing multiple microservices, because of the way it generates the URL, and you cannot predict how the URL will look like before you generate it, so you have to deploy one service at a time, get the URL embedded in next one... You can do service discovery between them using Cloud DNS, but no one likes DNSes, so I think developers don't want to do that... So I wish we could get to a situation where we can make multi services with Cloud Run as easy as doing it with Azure.

**Srdjan Petrovic:** Can I say something, Abdel?

**Abdel Sghiouar:** Yeah.

**Srdjan Petrovic:** I would say that cross-microservice communication, cross-service communication is where Service Weaver is really trying to make a difference, that you don't worry if they run, you just assume that \[unintelligible 00:33:30.09\] in your programming language... But there were a bunch of people who asked us "Why do you guys even do RPCs?" A lot of people use the event-driven model, or asynchronous communication of Cloud Functions, where you write to a database, and it triggers something. I thought it was also an interesting discussion, RPCs versus this kind of asynchronous event-driven communication of Cloud Functions. Joe, I'm curious to hear your opinion, because to me, it almost seems like -- it's simple, but there are a lot of pitfalls in this kind of event-driven model. If something doesn't run, you have no idea why is it not running. I want you to provide us a little bit of feedback on that versus RPCs.

**Joe Davidson:** Yeah, so I guess we kind of do a hybrid approach. So when we're talking asynchronous, as you say, we write stuff to our documents store, which actually in AWS you can like hook a cloud function to something being written to the document store. So we kind of go with that, because it means it's auditable. And we don't use anything like gRPC or anything like that. We use API gateway. So that's one of the pitfalls that you were talking about. We have to kind of expand out of the event-driven into something transactional, and API gateway is not exactly -- I think you spend some time going through an API gateway, and that's not ideal in a time-sensitive application.

I guess you do have to kind of invest a lot in the tracing of information going around the system, and where is it getting clogged up, where's the erroring. But if you do it properly, I don't know if it's -- I wouldn't say that's an issue.

**Srdjan Petrovic:** Yeah, I mean, coming from Google, we're all about RPCs, and I didn't even realize how popular the event-driven model is. I would say Kubernetes is really also optimized for RPCs. And again, I guess that's another -- well, you can do Pub/Sub, and you can do stuff, but...

**Abdel Sghiouar:** Yeah, you can do event-driven as well.

**Srdjan Petrovic:** It's interesting that people thought that even the RPCs themselves are too complex. So yeah, basically, there are people, like Abdel mentioned - and these are valid use cases - where they want infrastructure to get out of the way, and they want the simplest possible way to run code in the cloud, and there a ton of products out there.

**Abdel Sghiouar:** \[36:04\] Yeah. And I think - back to the conversation, where we started with Knative. My line of thought there was I think that Kubernetes have probably done more good than bad, in the sense that it's allowed people to realize what's possible, and then allowed cloud providers to go and try to solve these things that people care about in a similar way. And that's why I mentioned earlier in the beginning that Kubernetes should today be perceived more as a platform, as something that you build on top of, instead of having to learn, and having to care about, essentially, in a way. I wish we get to a point where it becomes just an infrastructure layer. As Kelsey Hightower has said in one of his tweets, an operating system for the cloud. So it just does orchestration, and we don't have to worry too much about how it works under the hood. I think that's what I had in mind.

**Srdjan Petrovic:** Yeah, I agree. Hopefully, we'll get there. And hopefully, Service Weaver will just connect your services on top of whatever you're running... \[laughter\] If I could plug it again.

**Abdel Sghiouar:** Yeah, I think one other thing I wanted to mention is the thing you said that things are converging - they are, in a very interesting way. So I follow Cloud Run very closely. So we release Cloud Run; so okay, you can run a container, and it's an app... And then we did this buildpacks thing where you don't even have to write the Dockerfile. Awesome. And then now we're at a stage where people go -- which, it's interesting when I'm having this kind of conversations, because a lot of times developers will tell me, "Well, it would be nice to have this", and I cannot help myself but say "But Kubernetes can solve that easily."

So we are at a stage now where people started giving us feedback, saying "Well, I would like to have Cloud Run running my main container, but I need this extra container running next to, to do tracing, or to do logs, or metrics, or whatever." And I don't know if you saw this, but we released actually - I don't know if it's preview or beta - multi-container supporting Cloud Run. So now you can actually run a Cloud Run service with multiple containers inside. And I was talking to one of my colleagues this week in the office, where -- because the first time I heard about this, I was like "But that's a pod." That's essentially what a Kubernetes pod is about, right? And then I started talking to my colleague in the office, where we have a large customer in Europe using Cloud Ru, and he mentioned that one thing that they were doing is standardizing around OpenTelemetry. So they have OTel, which is the OpenTelemetry Agent, that runs as a secondary container, if you want, like an auxilary container, and then all your app has to do is use the OpenTelemetry API and spit out the metrics toward the endpoint, which is the container. And then that container will upload them to like a monitoring tool. Because OpenTelemetry is a pretty kind of like open standards telemetry collection agent. It can ingest telemetry in many formats, and it can also spit them out to Prometheus, or whatever.

So it's interesting that when we got to the stage where people said "We need an extra container to do extra things", then we just opted in for the pod model. \[laughs\] I just find this kind of interesting; what it looks like to me is people want Kubernetes, but without Kubernetes.

**Abdel Sghiouar:** Can I have a question for Joe? And then Joe can reply to Abdel as well. Are you concerned about portability? Because with Kubernetes at least, you can go from AWS to Azure to Google, right? GKE. So that's another nice feature of Kubernetes, is that you really aren't locked into the cloud provider. With Cloud Functions - Amazon has lambdas, Google has Cloud Functions... You're kind of locked into that development environment. Is that of any concern to you, personally, or to the people in your circle? Or do you trust that Amazon is going to keep their prices low enough that you don't really care?

**Joe Davidson:** \[39:50\] No, it's not really a concern. It's a thought, but what we're more worried about is if we want to move into some other way of running the thing. So if, say, there's this thing that comes out that's like Kubernetes, but with more defaults, so it's as easy as Cloud Run, but you can slowly add configuration, then maybe we'd want to switch from --

**Srdjan Petrovic:** So cost is not of any concern to you? I'm a little bit surprised, because these things do cost money... So why is it that the cost is of no concern to you? Is it because your workloads are not--

**Joe Davidson:** I think because we stick to serverless, and that kind of makes us cost-conscious as we're developing. So we all kind of have access to the billing, so if we enable something, then we know that that's going to add a certain cost.

**Srdjan Petrovic:** Well, let's say Amazon raises prices for Lambda. I mean, what are you going to do?

**Joe Davidson:** Yeah, I guess we'd eat the cost until we could --

**Srdjan Petrovic:** Yeah, you'd have to eat the cost up till a point.

**Joe Davidson:** Yeah. So I think you can write a serverless application in a way that is not portable, but easily movable, if you were concerned about that. I guess maybe that's a good coding practice anyways, having an entrypoint that is thin, that is specific to where you're running it, into your business application... And that's kind of what we do. The main.go file has everything to do with running something in Lambda, but there's nothing to say we could have like another entrypoint. And I guess it's possible that you would get to a point where you have so many applications that if you did want to do that migration, then it would be too much... But would it be as simple as just deploying it to another cloud's Kubernetes? Or would you have already enabled some other stuff on that specific cloud provider? I guess maybe it'd be a less of an abrasive kind of journey, but...

**Srdjan Petrovic:** Interesting. So you're writing your app in a way that it can be moved in the future. Then you're worried about that, or you're at this point not even worried about that?

**Joe Davidson:** No, it doesn't really --

**Srdjan Petrovic:** Thank you. Yeah, this is good feedback. Because that was always a golden feature of Kubernetes, that you're not bound to a cloud provider.

**Joe Davidson:** Yeah. I guess it's kind of talking with customers... You don't often hear "Oh, we migrated our Kubernetes nodes from one cloud provider to another." We just hadn't heard it, so...

**Srdjan Petrovic:** Yeah, I think bigger customers worry about costs, because they spend millions on paying for their VMs. But maybe if you're not spending millions, then it's not that big of a deal.

**Natalie Pistunovich:** And this answer here seems to be "It depends." I would even dare say that the general answer to the question we started with is also, surprisingly, "It depends."

**Srdjan Petrovic:** What about Go versus JavaScript, Natalie? \[laughs\] Does that depend, or is it always Go?

**Natalie Pistunovich:** It depends on what podcast you are, right? There is the JS Party, and there's the Go Time party... So the Go Time podcast, sorry. So given we are at the Go Time podcast, there is an answer... \[laughter\]

**Abdel Sghiouar:** You would say it's Rust, right?

**Srdjan Petrovic:** It's Rust, yeah. \[laughter\] Or Java.

**Abdel Sghiouar:** \[43:11\] So I would be curious to get your opinions - all of you, actually - about WASM, like this new kid's on the street. It's making rounds, it's making a lot of noise, there are conferences being organized around it...

**Natalie Pistunovich:** It almost sounds like you're proposing our next episode... And I do like this idea. I did find this conversation interesting. I would be interested in chatting with you all, maybe even about that, if you all will be open to this topic.

**Abdel Sghiouar:** For the sake of transparency, I just shot an interview with somebody from Docker about it, because Docker released support for WASM in Docker... Which is kind of counterintuitive if you think about it, because why would you want to run WASM applications inside containers...? But beside the point. It sounds to me that if this technology managed to land in a way that would make people use it, that would solve a big part of these things that we're talking about, of "I just want to write my app, and I do not care about even containers. I do not want to deal with containers. I just want to do a "go run my WASM module" and that's it.

**Natalie Pistunovich:** Okay, Abdel, I am sold. There will be a part two about this topic.

**Srdjan Petrovic:** I don't know much about WebAssembly, other than people have said that we should explore there. Service Weaver might be good for it, but I haven't looked any deeper into that. We're sticking with Go for now. We're riding the Go train.

**Natalie Pistunovich:** It's also good, because there will be some time until the next episode, so you will have time to get on board with that. Joe, do you have any last words to say about your feelings about WASM? This will be our round of unpopular opinions for this episode... \[laughs\]

**Joe Davidson:** Yeah, I don't know too much about it either, but I've kind of heard about the ability to use Go to write frontend applications, and that is exciting to me. I've been playing around with HTMX, which I think you had the creator of on the show a couple of episodes ago... Which isn't WASM, but that's kind of the part of it that I'm excited about, and excited to learn about.

**Srdjan Petrovic:** Joe, by the way, thanks for -- I think you're providing a lot of good perspective of... I think you would fit the bill of someone who just cares about simplicity of development... Or mostly. Like, you don't care about cost, you don't care about portability, you just want an easy way to write and modify apps in production. So that's a very interesting perspective. Someone from Google, where the cost and the traffic is so obscene - we don't hear that perspective often, so thank you for that. Although there are people in the Cloud Run, we have Cloud Functions... There are people who would cater to that audience, for sure.

**Natalie Pistunovich:** And I will use the chance to say thank you all for joining this really cool conversation, and thank you to all our listeners and see you next time talking about WASM. Probably something before.

**Abdel Sghiouar:** Hopefully.

**Srdjan Petrovic:** Thank you, Natalie.
