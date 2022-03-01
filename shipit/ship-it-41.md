**Gerhard Lazu:** Hey, Mauricio, it's so nice to meet you again. How's Knative these days?

**Mauricio Salatino:** Oh, everything is going great there. I'm super-excited to see what happens this year, with all the CNCF incubation and all that stuff. And I'm kind of planning for the next milestone, because after 1.0 now I feel like the community is coming together to figure out what's going to be in 2, and in the future for the project. CNCF is a bit part of that, but we need to keep focused on making sure that we can keep adding stuff in there.

**Gerhard Lazu:** I know that very few people know this, especially from our listeners, but you were the one that actually tagged 1.0.

**Mauricio Salatino:** I was doing some tagging there; too many repositories and too many things to release... So I did some tagging. I was doing the release for the first time, and it was a very particular release, because it was 1.0. There are a lot of details around how Go deals with semantic versioning, and we needed to come up as a group with a solution for that. So yeah, I did the taggings, and we did the release, and it went quite well, to be honest.

**Gerhard Lazu:** Yeah. Knative 1.0. That's been a long time coming, and I was so glad to be part of that group while that happened. It was just three months while I was in that Knative group, in the Knative community, but I really enjoyed it, and it was great to see you push it through. Herd all the cats, do everything that had to be done to get it out... So thank you for showing me how it's done.

**Mauricio Salatino:** It was pretty exciting, to be honest, and it was a very good learning experience. I remember that at that time, when 1.0 went out, I wrote a blog post about my personal history with Knative. I don't know if you looked at it, but... It was a very personal experience, because I've been looking at the project and working and promoting the project for -- you know, since it was announced by Google. So I'm kind of like a big fan from the developer perspective, so I was really, really happy to see this going, and also to see that enable the CNCF incubation process. I think that's great; that was a fantastic 2021, on the professional side, of course.

**Gerhard Lazu:** I really enjoyed that blog post, but also your Knative weekly blog posts. I think those were my favorites. They helped me understand the Knative landscape a lot better. I was able to basically gather the things that -- your top of the mind for that week. It really inspired me to look as a whole, rather than on specific things... Because I was focusing on Knative eventing and RabbitMQ, but you had a much wider perspective. And the reason why I mentioned the whole shipping aspect - because you have a bit of experience with that, for a CNCF project like Knative, which is fairly big, long time coming... And it was great to see you do that.

But now we are talking about something else. The topic for today's episode is Continuous Delivery for Kubernetes. That's a book that you're writing, Manning is the publisher... So I'm wondering, when did you start writing this book?

**Mauricio Salatino:** Well, it's a long, long project. Writing a book, I don't know if you know, but it's a very painful process... And I think that I started last year around March. At that point I had a proposal for Manning, what I thought I should be writing... And that changed completely after writing the first three chapters and after going with Manning through a process of trying to figure out if that works for them or not.

Manning, at least from my perspective, they have a different style of writing books; they have all the very in-action books where you just go and see how a single project is used, and then you kind of like increase the complexity of the topics. My book, because it's about continuous delivery, it covers a bunch of different tools, one per chapter.

I started with the idea of having kind of like step by step tutorials, focusing on projects and discussing the concepts that those projects were promoting. And that quickly changed to a more conceptual work, with pointers to tutorials and with pointers to projects that are solving different aspects of continuous delivery, but for developers. Always with the focus on developers, because that's usually the audience that I try to target.

**Gerhard Lazu:** Okay. Why did you start writing that book?

**Mauricio Salatino:** \[00:08:05.27\] I started writing it because I've been presenting in conferences for the last four years in the Kubernetes space, and I keep noticing that the successful projects in the Kubernetes space - they are all following kind of like the same patterns and the same approaches... And the more you look into these projects and the ones that are already standing out, they are always focused on making the developer more productive. Sometimes they do not focus on developers, but developers get impacted by them. And I'm really into that developer experience, into building tools for developers.

As a developer, I want a bunch of stuff to happen around my software, the software that I create, and the only thing that I care is that software gets delivered and it's doing something useful for the use case that you are building. And all these tools are in some way related to that story, and as a developer I had the feeling that I need to understand them all in order to be productive. Through the years I started learning all these tools, and I got to a point where I said, "Okay, this is a story worth sharing." All these lessons learned, all these perspectives, all this overview on higher-level views that I'm gaining - they are worth sharing, the same as you mentioned with the Knative weekly blog post. That's pretty much what I'm doing in the work, I'm just trying to extract knowledge and just put in a high-level, and then just point to the right resources for people to just consume that.

**Gerhard Lazu:** So thanks to Radmila from Manning, two amazing things happened. First of all, I got a free copy of the book, that I could read. I read the first three chapters in detail, I left a lot of feedback in the LiveBook.

**Mauricio Salatino:** Perfect.

**Gerhard Lazu:** I still don't know how to share that with you, but it's there. There's two more chapters, which I haven't finished reading yet, but I will... I really liked the down-to-earth approach and very pragmatic approach that you took. But to come back to the second amazing thing - one of the listeners that wants to participate in the raffle that we'll have, they can win a free a copy of the book. So thank you, Radmila from Manning, for making that happen.

**Mauricio Salatino:** Perfect.

**Gerhard Lazu:** And coming back to the book - I really enjoyed how you go into the details. More than how you go into the details, you have this application, the Walking Skeleton, as you refer to it in the early access preview... I mean, it's not the finished version, but if someone wants to read it today, that's what they would see. I really like how complex it is, real-world; it's not your Hello World application. And how many things you hit because of that. Like, how many problems you get to see and solve because of that. What gave you that idea?

**Mauricio Salatino:** Exactly that - trying to create an example... Even with Knative, with Tekton, with Crossplane. And then you quickly realize that Hello Worlds are easy, they are awesome... When you look at KubeCon presentations about a single topic, you see an example that looks nice, it's doing a bunch of stuff... But then you want to go there and try to change something and everything breaks. And I don't know, through the years I feel that I'm very good at finding bugs in open source projects by just trying them out. And because I'm involved in so many communities, by having an example that is mixing different tools and using them in a way like a real user will use it, I keep getting in touch with communities, fixing bugs in different open source projects, and now I'm just building that example as part of the work, because I believe that if you really want to see how the tools work and how complex they are, you need to have a better Hello World example.

I was advised against having a single example for the entire book, because usually it's pretty difficult to cover the same example from different angles... But I took that as a challenge, and I think that it's worth investing time in a larger example, that as you suggested at some point, those examples should be part of kind of like a foundation. Maybe the CNCF, maybe the CD Foundation.

\[00:12:06.14\] I'm also going through the process of trying to figure out in which foundations should I host these examples, when they are a little bit more mature. They are in constant flux because of the tools and because of the project itself, and I keep finding more and more lessons by just doing that. So there is no reason why I should stop.

I feel that if I manage to finish this book, the example at that point will have so many other new lessons that I can definitely do a second edition and keep adding chapters, until it's an infinite kind of book.

**Gerhard Lazu:** Definitely. The gift that keeps on giving, that's what I call these things. So the application - it's called From Monolith to K8s.

**Mauricio Salatino:** Yes.

**Gerhard Lazu:** It's in your GitHub repo currently. You're looking for a place which will be more common, so it's not your application, it's our application that we share. It's a reference, that's how it was built, that's the spirit in which it was built. You're right, it was a suggestion to find such a place; we haven't found one yet... So if someone from the Continuous Delivery Foundation is listening to this, I definitely support the idea of having it there, in the CD Foundation. I checked before we started recording to see if it's there; it wasn't there. We talked about this maybe two months ago... So whoever I need to talk to, whichever email or vote I need to send across, I'd be more than happy to do so, because it definitely feels like this is a reference application; it's fairly complex. I know that the Spring framework had the music store, Rails had the blog... So these reference applications have been with us over the years, in different shapes and forms, and they're very, very valuable.

**Mauricio Salatino:** Yeah. And in this case it's a little bit more strange, because even if I'm using Spring now for some of the services, I'm using Go for some of the new services that I'm building now, I'm using kind of like React on the frontend... So that's a different community. And anything Kubernetes - Knative, Tekton, Crossplane, and all these tools that are more from the Kubernetes community.

So definitely the CD Foundation sounds like the right place. I've started having some conversations with the one special interest group that they have that is called Best Practices. Kind of like the initial proposal is to see if I can create some tutorials in a format that relates continuous delivery, and a specific topic, like for example event-driven architectures, and then I just put that under that space, in their foundation. If I can get that work, like adding more tutorials and linking the work and just pushing the examples into their organization, it might be the next steps. But it's a long process, I think.

**Gerhard Lazu:** You mentioned about the long process - I could see the long process just when it comes to the application... Because you mentioned that you started the book last year in March. Did you mean 2021 last year, or 2020? Because time is a bit funky in recent years.

**Mauricio Salatino:** Yeah, it is funky. I would say that the project started in January 2021, and then in March the idea was changing a bit. In March it was more like it looks today.

**Gerhard Lazu:** The reason why I ask about this is because I had to look at the repository for the application. This one's public, by the way, open... And a lot of the how-to's are also publicly available. Obviously, if you want to get a deeper insight into the why and how, the big picture, that's where the book comes in... But the application, the repository started in 2020.

**Mauricio Salatino:** Yeah, because the applications and the examples were mostly created around for different conferences where I was presenting. So if I wanted to show, for example, how to orchestrate cloud events, very early on, when nobody was doing that, and Knative was trying to start to provide some of the risk mechanisms, I would just write an application in that repository, link a readme or a step by step tutorial, and then just have all the resources in there.

\[00:15:57.22\] I've found quickly enough that that repository is just the main entrypoint for all the repositories that are hosting different services, and different tutorials as well... But that's kind of like the main entrypoint. That's why the repository is pretty old; I would say that before that I had the repositories of the services, even before having a single depository for all the tutorials. And most of those services, if you look at my GitHub repository, I have like 450 repositories in there. And most of those are tutorials, or examples that I've used to present in different conferences around different years.

Regarding that, it's funny enough - this year, if I manage to get into a conference in Barcelona that is called JBCNConf, it will be my tenth year in a row presenting in that conference.

**Gerhard Lazu:** Wow.

**Mauricio Salatino:** That's why I have so many examples and so many presentations.

**Gerhard Lazu:** So it would be fair to say that you've been doing this for some time now, and you've been thinking about this and you've been refining this idea of continuous delivery, of applications, of the cloud-native landscape, of Knative, of what it means for an application to be cloud-native... So these thoughts have been occupying your headspace for a long, long time now. And I really like the journey that you've been on, and it shows the effort and how everything is coming together. I think this book is like a milestone, but this journey - you've been on the path for quite some time, and I love these types of stories.

**Mauricio Salatino:** Yeah. I would say that that path has started around 2015. So I one hundred percent agree; I think that if I manage to finish this book, this is going to be kind of like the summary of my last 6-7 years of work. And doing all those presentations, and examples, and all that stuff is very related on working with open source projects. I feel that that's part of the work that I'm doing.

So for me, it's usually like 30% on coding, 30% on planning, and roadmap, and then the other 30% is in going and meeting people and sharing experiences and lessons learned. I used that loop through the years to just keep going and keep learning and keep staying up to date with the stuff that is happening around this space.

**Gerhard Lazu:** I can really relate to that, because for me the Changelog application was a bit like that. So when I started in 2015-2016 with Jerod and Adam, the whole idea was "How do we deploy this thing?" That's how it started. How do we deploy this application? And we just went from WordPress to Phoenix. It is still a monolith, but over the years we made it cloud-native. And it works on Kubernetes, we ran it on Docker Compose, we had Docker Swarm, we used Concourse at some point, Ansible... We went through all the generations step by step and we shared that story along the years. And the people loved those episodes so much that they said "Well, why don't you do a podcast?" And that's how Ship It started.

**Mauricio Salatino:** Exactly. Perfect.

**Gerhard Lazu:** So I can relate to your story about working on something long-term, on a codebase, on an application, and using that to learn and to share your learnings with others.

**Mauricio Salatino:** I find it really amazing, because I just suggested \[unintelligible 00:19:01.28\] I keep getting, over the years, every time that I present this in a conference or in a meetup or whatever, I keep getting people coming back and telling me that they want to help me to build an example. So I have a number of contributors during the years that have pushed me to make things better, even for them. So I know what they need in order to start contributing, but it's still under my personal organization, which is always a limitation for more people to see it, more people to give it a try... And also, it just puts all the pressure on me, on making it better. So I'm really hoping to be able to move this sometime soon.

**Break:** \[00:19:45.27\]

**Gerhard Lazu:** I'm curious, why do you call it delivery and not deployment? Why Continuous Delivery for Kubernetes and not Continuous Deployment for Kubernetes?

**Mauricio Salatino:** Yeah, that's a very good question, and I would say that it's delivery because what I'm interested in seeing and pushing through Kubernetes is the features, not stuff that runs. So I'm not interested in how things are running or how they are running, I'm more interested that this X feature is up and ready to be consumed by a user. I think that's the main reason behind it. I do not care much about the technicalities on how that gets deployed or how that gets executed in a container, or Lambda, or whatever... But I think that that's mostly the reason. Does that make sense, to your point?

**Gerhard Lazu:** It does. My curiosity comes from the fact that I always think of delivery as something that you do, but you don't get it all the way out there, so it's like ready. It's integrated, it's there, but I haven't deployed it yet, and I don't know when that will happen, as in it needs to go maybe through a couple of more stages. It's ready, delivered, in that it hasn't been deployed yet; it's available in some repository as an artifact. But when I hear deployment, in my mind what happens - "Okay, I know this was pushed into production. This was shipped into production." So that's the distinction which my brain makes.

**Mauricio Salatino:** I feel that that makes a lot of sense as well. It's kind of like a different perspective on the terminology around the CD space is so confusing, and different people use terms in different ways. That's why the CD Foundation is creating that glossary. And I think that they are more aligned with you than with my description.

**Gerhard Lazu:** Right. So can we also read the title of the book as continuous deployment? Because you do talk about how to get code out there --

**Mauricio Salatino:** I do.

**Gerhard Lazu:** Okay, okay. So it can be used interchangeably; delivery is like a loose term, but we're definitely seeing how to deploy code across multiple applications - you're calling them services; it is a microservices application, it has a resemblance of a microservices application... So how do you manage that complexity, and how do you scale it out, and how do you deal with different aspects of that. Okay.

So I'm going to ask you something which maybe I should have asked much earlier, because I like my Why's early... Why is delivering code frequently important

**Mauricio Salatino:** Yeah, there are several reasons for that. And the main reason, I would say, from a developer perspective is just to validate that the things that you are doing are improving things or bringing new functionality, and not breaking stuff. So the faster, the more times that you deploy, the easier it is to get the errors; and if you find an error, the easier it is to fix it.

**Gerhard Lazu:** \[00:24:06.07\] Okay.

**Mauricio Salatino:** Following that approach, I would say that I'm interested in just making sure that developers are not blocked by deploying new versions of things, and they have kind of like a continuous flow of changes to production or to the environment where they can at least get some validations for a different set of users. Maybe it's not production, but it's kind of like a place where users can access, or we can give access to a specific set of users. I'm really into that.

For me, when I started with Kubernetes, that seemed like a long way. For me, what I started with Kubernetes, I was developing Java applications, and I was with that monolith mindset. And if you just want to apply the same principles that you were bringing with these very big applications, then you are not really leveraging the power of Kubernetes. In this case, if you are building on top of Kubernetes, you should be able to extract all the benefits from having this amazing software that is scaling things, and that is routing traffic across very complex networks. And for that reason, I would love to see people using Kubernetes kind of like in the right way, and being able just to keep deploying new versions of their application, maybe even in parallel, just to try out different features and keep evolving.

I don't know why, but when I think about this kind of applications I do think about Gmail. As a user, I use Gmail, and I can see that it's changing, but it's never down; it's always working. And if it gets down for a bit, it might in a region only. But it keeps improving all the time; I don't see the changes, and I would love to, as a developer, to be able to participate in a project that works in that way.

When you look at the entire industry, at least from my perspective, I haven't seen so many examples of that being done in the open. So I too feel kind of like a personal mission there just to show people how some tools can help you to go there.

**Gerhard Lazu:** We're so similar in this respect, definitely. Showing people how we can do this publicly is so important, because it is hard. And I think part of it are the tools - they are complex, let's be honest. Kubernetes is complex. There's a reason for that complexity, most of the times. But also, there's an element of people complicating things and making them more complex than they need to be. So I think part of it is self-inflicted, and the part which is down to the tooling - that can be managed. What's more difficult to manage is the self-inflicted complexity, which - you don't need to make things as complicated or as complex as you make them.

You mentioned something important - you mentioned about doing Kubernetes the right way. What does that mean to you?

**Mauricio Salatino:** For me, that means being able to use the mechanisms that Kubernetes provides, in a way that allows your applications to be scaled up... And also, again, just to keep deploying new versions of the same applications in a continuous fashion, without shutting the entire application down and then just deploying the new version. I would love to show how you can basically do that, having multiple versions of the same service, and then route traffic to one, to another, just to shut down that service and replace it by another implementation, for example in a different language. All those kind of interactions that enable developers to trust in contracts, write just the API and trust that the other team is going to do the right thing with that, and making sure that the application doesn't crash altogether. That it's more resilient, and that you can scale it more independently.

**Gerhard Lazu:** Do you think that having a microservices architecture is a requirement for this?

**Mauricio Salatino:** \[00:27:49.15\] I don't think so. I think you might have different approaches for different use cases. I do believe that if you want to scale a specific functionality on its own, without scaling up the rest of the application, you might need to have some kind of separation in there. I'm really interested in exploring more and going deeper into how cloud providers recommend their customers to implement different applications, and how that maps to the open source space. Because for most of these distributed application challenges, there are already solutions, and the problem right now is how these solutions can be built with open source projects without relying on cloud provider-specific tooling. So there is a journey there that needs to be explained, and it's not that easy to figure out on your own.

**Gerhard Lazu:** I think it's very important to mention that different contexts are completely valid. So even if you do have a monolith, it's still okay and it may still work very well for you to use Kubernetes. And Kubernetes is not a requirement, but it makes certain things easier, especially if you don't introduce a lot of complexity from -- again, I think it depends on the context, it depends on the perspectives, it depends on what you're trying to get out of it... But from my experience, as we evolve our Changelog application, it is a monolithic application; it is a single container image, and everything runs there, including the background jobs. Part of it is down to the VM. So the Erlang VM scales really nicely, it's very fast to boot up; the boot-up is not slow. I know that some runtimes can be slower to boot up - and I'm looking at Java; there's good reasons why that is. There is some legacy there as well, some optimizations, just how that bytecode works... But even in that case, your applications, your services in the book - they are Spring applications, Spring Boot. And I think you mentioned something about converting them to Spring Native. What does that mean?

**Mauricio Salatino:** Alright, so that's a whole new thing going on in the Java community. In Java, we have the Java SDKs and the Java \[unintelligible 00:29:55.12\] That's kind of like the optimized environment for running Java applications. So when containers appeared, running a Java virtual machine inside the container - it does consume more memory, because you need to do a bunch of stuff on some memory and CPU utilization in different ways. So you can run applications that are platform-independent. But with Spring Native now what they are doing is using a new VM that was created by Oracle, that is GraalVM, that allows you to generate binaries, basically. So the end result is more like a Go application; the startup time is similar, but of course, there are some trade-offs when you run in that approach, and when you run with the more classical JVM applications that are compiled and have a binary - they will run and they will not be able to optimize themselves while they are running. That's a different story when you run with the JVM. The JVM is all the time just picking up memory utilization and understanding how the application is performing, so it can improve and fine-tune itself while it's running.

So you kind of like have the two scenarios... And I think that by having GraalVM and Spring Native allowing you to create these more optimized binary images, we can cover a wider spectrum of different applications, like low-running monoliths that are going to be running for months or years. And the other space - you know, functions more like Lambdas, that need to quickly boot up and run... And in those situations, Spring Native and GraalVM are the tools to go, because that's what you need when you're running functions, you need fast startup times, so you can have a lot of cold starts and you can just start processing \[unintelligible 00:31:41.09\] as fast as possible.

**Gerhard Lazu:** Yeah. So to go back to the monoliths that are running on Kubernetes - it is possible; we've been doing it for years. There is a good experience to be had. I think some Java applications can be a bit slower to boot, even though there are ways of speeding that up... At least in my experience, I don't remember ever having to run a GraalVM application in Kubernetes. The only example that I can give is the RabbitMQ PerfTest CLI tool.

\[00:32:08.18\] We had a GraalVM implementation; it was a much smaller single binary, much quicker to boot up. I do have to say the performance wasn't on par with the native Java, JDK, JRE runtime, but even then, they were small issues, which I was expecting to be fixed as the GraalVM, the runtime matures. And this was like a couple of years back, so I haven't checked since. But it's very promising, for sure.

As a monolith, I think the things which are more important - a monolith running in Kubernetes, because the application is from monolith to Kubernetes... I think your example application in the book, it's worth pointing out that the services - they feel a bit like monoliths, in that even though they're broken down, they still take quite a while to spin up. So the boots are slow. But even then, for example, not depending on local storage is very important. We did have, for example, volumes in the Changelog application that we would use to mount, and all the media used to be stored on those persistent volumes, the PVs. The problem with that was that you can only have one instance of your application running.

**Mauricio Salatino:** Exactly.

**Gerhard Lazu:** And if you have a storage driver which can support multi-write, there's other issues with that - slow writes, sometimes data can get corrupted, depending on which one you use... Again, different maturity levels, different sorts of things, deadlocks... Things get a bit more complicated.

So I think that's one way of doing monoliths in Kubernetes wrong. Now, we have still been doing it for years, and we are improving; we've only just switched to S3 for storing all that media, so there's no more persistent volumes. The other one is around databases - where do you store your database, and how do you access it? I think that's another big one. And if you run it on Kubernetes as well, then maybe you can't run your application in multiple Kubernetes clusters, because how do they connect to the single database? What would you recommend there? How would you recommend that applications, monoliths running in Kubernetes solve that problem, the database problem?

**Mauricio Salatino:** The database problem. In the book I definitely try to cover some of those points, because for a developer -- as a developer, I don't want to worry about data, basically. I just want to know that I can connect, and then I just want to connect to the database and store my data, and just get the data back. So what I've seen so far is that, of course, depending on what you're doing -- like, if you're creating your development environment in the cloud, people \[unintelligible 00:34:30.22\] and install it. That's far from being production-ready, and that's very complicated to maintain over time. So if you're developing something and you really need a database instance, that might be a quick way just to get one up... But then when you move through the chain, like when you go to staging, and when you start dealing with real data and you need to be secure, then most of the time you would just end up connecting with a cloud provider. You can go to Google and just get Cloud SQL in there. They use the same APIs and they allow you to connect with similar drivers to what you would do if you are developing locally; that makes a lot of sense. And they also give you availability across regions, and all that stuff. That's really nice. It is expensive, but it really depends on what you are doing. Even if you have a startup and you need to invest in something like that, I would recommend people just to go that route, instead of just building your own database in your own server; of course, that's what we used to do before.

Managing databases inside Kubernetes - I don't wish that to my worst enemy, unfortunately. I haven't met any DBA that would be happy by doing so. So I would say just try to stay away as much as you can. But of course, you need a solution for it.

The other approach is to have an installation of a database outside of your Kubernetes cluster, and just connect from inside Kubernetes. And that's quite common for on-prem setups. Governments, they tend to do that, because they already have Oracle, or...

**Gerhard Lazu:** \[unintelligible 00:36:01.06\]

**Mauricio Salatino:** \[00:36:03.08\] Yeah. So that's what I've seen in my experience, again, and it is one of the topics that I would like to cover in the book in more depth. I think that in the packaging and how you install software, also in chapter four - I don't know if you have read that - but I do talk about infrastructure. Because the same happens with message brokers. What do you need for an application usually? A message broker, a database, and some other services for sending emails, and doing that kind of stuff. That's the main reason why the application has the shape that it has. Each of the services kind of like feels like monoliths, they are monoliths on their own, and I want to show how complex they will get if you \[unintelligible 00:36:38.21\] then the next step is just connecting to a database. Then the next step is - okay, that database leaps outside your cluster; what kind of complexity do you have? Then secrets become a problem, you need to deal with that... And when you realize you've spent kind of like two months trying to figure out how to just get a simple job application communicating with the database, which is nonsense.

**Gerhard Lazu:** Yeah, I know what you mean. I did spend a fair amount of years in this space, looking at distributed, stateful systems in Kubernetes - RabbitMQ is one of them - and while the operator gets you really far and it works really well for RabbitMQ specifically, especially since RabbitMQ is built for clustering, and Erlang, and all those things are there, all the primitives are there, other systems like PostgreSQL for example - it's a bit more challenging. It's still possible, but challenging. And the only time that our application had downtime when it comes to the database was when PostgreSQL replication stopped working correctly. So we got a couple of those, unfortunately. I mean, it's just the reality of operating, in our case. Maybe we did it wrong, it's possible.

But since we switched to single-node PostgreSQL, that automatically restores from backup when it gets deleted, it works really well, and we didn't have any issues. Putting a CDN in front definitely helped. We are very read-heavy; our application is read-heavy. We're serving static files, mp3 files, stuff like that, so a CDN goes a long, long way... And we are up even when maybe there's issues with the origin, with the database. But it just goes to show that it is complicated, and as Kelsey Hightower says is, "Don't do it."

**Mauricio Salatino:** Exactly.

**Gerhard Lazu:** Just go for a managed one if you can. It simplifies things a great deal. And the choice is there. I mean, every cloud provider has a managed PostgreSQL, a managed MySQL, a managed - whatever you may be using. PlanetScale is there, CockroachDB is there... So there's like a couple of options, and more and more are appearing. I know that even for example Fly, or Render, they have managed PostgreSQL databases... So even that may be a better solution, which isn't very expensive, than running your own.

Oh, I have an important question - cloud native with a dash, or without a dash? \[laughs\]

**Mauricio Salatino:** That's what's my main fear with the title of the book. It's so generic... Originally, it was going to be Cloud-native Continuous Delivery, and I wanted to remove Kubernetes from it. But it was so heavily based on Kubernetes that we felt that we need to do Kubernetes. And then we removed cloud-native because of that, because it's just such a buzzword. It doesn't add anything to the title itself. I would say that cloud-native should go with a dash.

**Gerhard Lazu:** Okay. Yeah.

**Mauricio Salatino:** What about you?

**Gerhard Lazu:** I think so, too. Yeah, I think so, too. Now, there is an inconsistency, because even when you link to Joe Beda's on VMware, I think he doesn't use the dash.

**Mauricio Salatino:** Yeah, probably.

**Gerhard Lazu:** So whichever one, cloud-native - I think is should have a dash, but in many places it doesn't have a dash... So being consistent is more important than which one I use, as long as --

**Mauricio Salatino:** Than finding -- yeah.

**Gerhard Lazu:** Exactly. Because even in your book I can see there's sections which use with a dash, and there's other sections which use without a dash... So I think standardizing on that would go a long way, so at least people know, is it with a dash, or is it without a dash? I don't care which one, as long as I'm using the right one, or the consensus.

**Mauricio Salatino:** Yeah, consensus-based decisions there.

**Gerhard Lazu:** Exactly.

**Mauricio Salatino:** I think that that's really important. And the feedback is really appreciated, because when you're writing drafts, this is all about making sure that the ideas are there, and the refinements will come afterwards. And that's also like the editorial process that should go through it, just to make sure that we just align with the ecosystem that we are talking about.

**Break:** \[00:40:28.13\]

**Gerhard Lazu:** So I would like to talk with you specifics... How would you deploy an application that is running on Kubernetes? What would you pick? This is your application; what would you write your application in? I think I already know the answer to this... Would you do Java, or something else?

**Mauricio Salatino:** I think that lately I've been playing a lot with Go, and what I'm doing is I'm just taking a look at the Go ecosystem, trying to figure out how does it compare to the Spring and Spring Native ecosystem, just to see how far off they are. I tend to believe that the Java ecosystem is way much more mature, because it has been around for a long time, but as you mentioned, it has a lot of legacy. Sometimes bringing simple stuff like building a container took us, the Spring Boot community, several years to include that into now our standard procedures.

So I would say that I would write in Go because of the challenge, and because now I'm working with Go in Knative... So I want to actually get more and more experience, understanding how the Go community is evolving. There are advantages of common functionalities and libraries that I can see in the Go community, that are really interesting how they got developed and how they have been maintained... So I would definitely go with Go right now, and I would definitely use Go \[unintelligible 00:44:42.01\] in order to just iterate faster on top of it.

**Gerhard Lazu:** Nice.

**Mauricio Salatino:** You know, I've been using Google Cloud for some time, so I would definitely choose Google Cloud as my target platform, creating a Kubernetes cluster in there.

**Gerhard Lazu:** Autopilot?

**Mauricio Salatino:** Probably not. I'm more like a standard guy...

**Gerhard Lazu:** Okay.

**Mauricio Salatino:** ...because I have been using the standard one for so long that I would rather just do that. And I would definitely give it a try, to Google Cloud Run, mostly because what I'm doing right now in the Knative space is working with Func CLI; I don't know if you have seen that.

**Gerhard Lazu:** No, I haven't.

**Mauricio Salatino:** Basically, it's an initiative that is building on top of Knative, and most of it, what we are trying to build is a developer experience that looks like Cloud Run. So basically you just have a CLI that creates a function for you, just a scaffold, the template, in any language that you want. Then you just do func deploy, and it just deploys that into a Kubernetes cluster that is running Knative.

**Gerhard Lazu:** Okay.

**Mauricio Salatino:** It does expose some interfaces, for example consuming cloud events... So you can start connecting different sources of events to that function, so you can trigger that function. I'm in love with that, the programming \[unintelligible 00:45:49.26\] I think that there is a lot of exploration that needs to be done in that space. So I would choose a framework that feels like that, because I want to get more into that space. I'm not more like a serverless guy in general, but all this work in the Knative space, and in Func specifically, have pushed me towards that \[unintelligible 00:46:09.08\] And I think unless the use case is completely the opposite, or we need to do a lot of batch processing with weird stuff, I wouldn't go for that. But you know, if you asked me to build an application right now, I would start with that and see how it works.

**Gerhard Lazu:** Okay, okay. So if you're telling me Cloud Run and Knative, then you don't even have to worry about an Ingress, you don't have to worry about certificates. All that is taken care of for you, including auto-scaling. That's just like built in, so again, you don't have to worry about that. Interesting. What about the deployment part? How do you deploy updates to your application?

**Mauricio Salatino:** So I would go for more like a GitOps approach, and I would love to have my application closed to just an application repository where I can just change it, and then it gets built automatically for me somewhere remote, and then it gets updated into that cluster.

Because I'm talking about Knative, I would expect to be able to -- something that I haven't seen implemented that much, but different vendors are implementing something similar... That when you make a change and you have a new version available from that, you can choose how much traffic to route with it, or some constraints on which traffic is going to be hitting that new version as well.

I would love to see the entire cycle automated... And with Func, it's something that we are doing now. We are doing on-cluster builds. So basically you create the function that is local, and then you can just connect that through a Git repository, and then trigger the build on deploy in a remote fashion... Or you can do it locally as well.

**Gerhard Lazu:** Interesting.

**Mauricio Salatino:** Yeah, it's getting really interesting, and there are a lot of things going around that project that caught my attention. And remember what we discussed before - I'm not up for Hello World examples, and if you take a look at Func nowadays, you will see you can create a function that you can deploy, and it runs, and it scales, and all that stuff, but it's just a single function, with printing something in the logs. That's fine. But what happens when you have a hundred functions and they need to send events between each other?

**Gerhard Lazu:** \[00:48:10.14\] Okay.

**Mauricio Salatino:** I want to make sure that I have in a repository all that described, in a declarative way, that every time that I change something, it gets reflected into my cluster.

**Gerhard Lazu:** Okay. How does Jenkins X and Tekton CD, the two tools that you mention in the book - how do they relate to what you just mentioned about Func and how you would do deploys today?

**Mauricio Salatino:** Perfect, that's a very good question. So just let me step back a bit on my Jenkins X story. It's pretty similar to Knative. I started with Jenkins X pretty early on when they announced the project... And I don't know if you know the founders from Jenkins X, but James Strachan and James Rawlings...

**Gerhard Lazu:** No... Just by name, but no, I don't know them as I know you.

**Mauricio Salatino:** Very interesting story. James Strachan and James Rawlings - they were working for Red Hat. They were the people that really motivated me to go into Kubernetes full-on in 2015. They basically started with Kubernetes when it was announced.

**Gerhard Lazu:** Wow.

**Mauricio Salatino:** They built the first Java API for interacting with Kubernetes clusters. That's \[unintelligible 00:49:13.28\] which was pretty much CI/CD for Kubernetes, in 2015. That for me was like "What the hell are these guys doing? It's like, they're pushing so hard into that space."

And basically, after a couple of years in Red Hat, they decided to move to \[unintelligible 00:49:32.01\] and they founded Jenkins X, trying to solve the problems for CI/CD on top of Kubernetes full-time. And it was pretty clear that Jenkins wouldn't cut it, because of the architecture of Jenkins itself, and that's why they started heavily pushing for Tekton. In the very early days of Tekton they said "We will use Tekton as our pipeline mechanism, and because we are building a CI/CD system, we will need to make sure that Tekton evolves."

**Gerhard Lazu:** Right.

**Mauricio Salatino:** And then it becomes a tool that basically was gluing a bunch of different tools on top of Kubernetes, providing that GitOps flavor... Again, pretty early on, before even GitOps was a thing. For me, that was kind of like a learning experience on the open source side. I basically participated in that community, learned a lot about how they build Jenkins X by continuously deploying Jenkins X into production for people to consume... And it was kind of crazy. They were doing 4,000 releases a year. It was pretty unstable sometimes, but they were going really, really fast. And the problems that they were trying to solve was mixing up 20 different CNCF projects at the same time, all changing, Kubernetes changing... So everything was breaking all the time, and they had a way to make sure that they keep on a stable release for the users, but at the same time they have 3-4 releases a day, with new features, and solving stuff.

I talk a lot about Jenkins... There's not much about Jenkins X, but I do introduce Tekton in the book, and talk about Jenkins X, because what they taught me was the fact that usually having that Git repository as a single place of truth, that you are going to use to sync through a Kubernetes cluster - it's definitely the right way to go.

Also, for me as a developer, what I learned from them is that I want to build this stuff, but I don't even care where is that build. I just want them to get built. And I don't even care what are the components building those things. I just want to push for my application source code and I want to get a new container, plus a new bunch of jumbled files or a Helm chart at the end of the pipeline, that I can just go and deploy.

And from that perspective, I think that Jenkins was covering the entire space, and for that same reason it was such a complicated project that it was pretty difficult to grasp for people really wanting to run that in production in their companies.

**Gerhard Lazu:** That makes sense. So do you care if it's a push or a pull?

**Mauricio Salatino:** From GitHub.

**Gerhard Lazu:** \[00:51:59.05\] Yeah. Or do you care if the CI/CD pushes code into production, or if production pulls it down? Do you have an opinion around how that should work, what is good, what are the trade-offs, the whole push versus pull into production aspect?

**Mauricio Salatino:** I would be careful emitting a strong opinion on that, because as a developer, I don't want to get involved with production deployments. But I would be very in favor of the CI pushing to production, if that basically means declaratively saying "Hey, these are the new versions of things; just apply that into the cluster."

**Gerhard Lazu:** I always thought that if your CI/CD system can push into production, it most probably has too many privileges. Because it's almost like in your production you declare what you care about, and what you care about - I always want to be running the latest version in production, if possible. And then your production should know how to reconcile that state. I know it's not entirely GitOps, and I know that GitOps has specific SHAs that you want to be running in production, which makes a lot of sense... But really, what you care about is that you run the latest version. And I don't think they are competing priorities. You need to make that work within GitOps, and GitOps requires specific SHAs, because now how do you roll back? And we've been doing this wrong for a long, long time, by the way.

**Mauricio Salatino:** Exactly. My question is \[unintelligible 00:53:22.07\] because from that statement the only thing that I would be disagreeing some point is that I'm not entirely sure that I want to run the latest version. I want to run multiple versions, from my perspective. I want to run multiple versions, and I want to be able to do that without going crazy. So I need a tool to do that, because without the right tools it's almost impossible.

**Gerhard Lazu:** I think you can run multiple versions for short amounts of time, but at some point you will have database migrations, right? And even at the same service; you will have a migration at some point... Even if you have a microservices architecture, and each microservice has its own data store... So if you're abiding by that, at some point you will migrate data. So will your previous version know how to operate with a new migration? And maybe the answer is no. So in that case, sure, there will be a period in which both versions will run, but at some point if migrations succeeded, the new version will take over, and the old version will eventually just be recycled.

**Mauricio Salatino:** Yeah, 100%. And it's very specific to the use case and how do you build the applications to deal with that version to version incompatibility. And how stateless they are, and how do they define those data contracts as well.

I was very interested a couple of years back into a company that is called Delphix; I don't know if you know them...

**Gerhard Lazu:** No.

**Mauricio Salatino:** But they were basically in that business of making data snapshots for these kinds of things... For when you are moving to different versions and you really need data to be moved around, or migrated, or move around servers, or move around \[unintelligible 00:54:56.22\] And I think that that's something that I haven't seen in the open source space.

I will be really interested in figuring out who in the CNCF ecosystem is focused on data, and making sure that data is available for developers, and to the production. So how you can make data available in development, staging and production, and make sure that you have kind of like the same evolution on the data \[unintelligible 00:55:20.27\]

**Gerhard Lazu:** One thing which I did try in recent months, and it worked fairly well, was Planet Scale with database migrations. Planet Scale - they branch your data; this is like your Git branch, and I use that with Wordpress. And the way to install WordPress is you have to start one of those branches. It will do all the database migrations and mutations, and then you commit that change. And then your main is always like it's locked and it shouldn't change, and when you want to start doing any changes again, you start another branch. I thought that was a very interesting idea, and it mapped to my Git mindset of how that works.

\[00:55:58.12\] Now, we haven't used that with our application, and what we do is very simple. Before we deploy a new version, we take a back-up. It's actually one of the first things that happens when a new version goes out. It takes a back-up of the database, and then it runs the migration. We never had a problem with migrations in six years, but if there was one, we would have a backup to go back to... Because we never had to do it, it's not automated, but there's always a backup to go back to if you mess things up. And the easiest way to do that is just delete the database, recreate it, and by default it restores from backup, so you can tell it which backup version to restore from, and that's it.

Now, we don't have a lot of data, and we're thinking gigabytes, right? If you have terabytes or petabytes, it's a whole new problem. So, again, context matters.

**Mauricio Salatino:** Yeah, I think that dealing with data like Git - it's a really interesting concept. I don't know how that works at scale, and I've never been so involved into that... But it feels that that's kind of like one of the missing things for application developers, to figure out these forever-evolving services and schemas and migrations and all that stuff.

**Gerhard Lazu:** Yeah, for sure.

**Mauricio Salatino:** Because for me, that's the main thing that would block me to keep deploying new versions.

**Gerhard Lazu:** Considering that we are recommending to not run a database in Kubernetes, I can see where this is going. You just want a database vendor that manages this, or some sort of like an IaaS which has its managed service... So I can see that being the answer even in the future for this.

Now, I have a crazy idea that I want to run by you... And this is off the beaten trail. Can you imagine a post-Kubernetes world?

**Mauricio Salatino:** Yes, and I'm really looking forward for that world...

**Gerhard Lazu:** Okay... Tell me more. Why, and how?

**Mauricio Salatino:** \[laughs\] Because I think that we have learned so much from Kubernetes that now it's time to create a developer experience that basically hides Kubernetes from you. That's kind of like what Cloud Run and Func is, basically. I want a CLI or a tool that basically allows me to point the Git repository, and then just get something up and running somewhere. I don't want to care about all the other pieces that need to be there for things to get built in a secure way. I think that the supply chain, and the security supply chain is coming really hard these days... And I do care about security, but I do feel that those things need to get solved, and they need to get solved for me as a developer. So I know that I'm working in software, I'm responsible for the libraries that I use, I'm responsible for the things that I choose to use, but when I'm deploying something into production... You know, first of all we can repl use it, and then it's secure enough for me not to care much about how things get in there, right?

**Gerhard Lazu:** Yeah.

**Mauricio Salatino:** So that's why I do believe that there is a post-Kubernetes world where we basically use the Kubernetes API to build abstractions up into higher levels, where we talk about more like applications, when we talk about services that are running, but not specifically how do we create a deployment for Kubernetes. I think that the community is already over that, most of the things... Even like we are not writing Docker files anymore. We have all these tools that allow us to basically containerize our applications without writing Docker files... Because we know, we have recognized that writing Docker files is where all the vulnerabilities happen. The same with a Kubernetes deployment - if you messed it up there, you messed up a secret, then things go wrong.

**Gerhard Lazu:** What do you use instead of Docker files? I'm curious.

**Mauricio Salatino:** So Ko from Google, they would just use a base image layer and they would just create a container for you. In Spring Native they do the same, they use pre-built packs to define how the final container image gets created. And you always have defaults. If you want to change that, then you can just change the build pack or extend it, and then you will get the right thing that the company decided for you to use, not the thing that the developer decided to use...

**Gerhard Lazu:** Yeah, that makes sense.

**Mauricio Salatino:** ...which is very different. It's a very big difference.

**Gerhard Lazu:** Yeah, that's very interesting. Okay, so in this post-Kubernetes world there's still Kubernetes, or at least something that looks like Kubernetes from an API perspective, but you're not interacting with it. Those are higher-level concepts that you interact with; higher-level components such as Cloud Run, such as Func, such as Ko.

**Mauricio Salatino:** \[01:00:04.01\] Yeah. I do feel positive that we are getting there. I do feel that, even with Crossplane, the fact that you can create a database in Google Cloud by creating a resource in Kubernetes using Crossplane is great, but at the end of the day, I would expect that definition to be a little bit different, maybe with a user interface, and that the resource creations gets created somewhere in the back. Kubernetes is there, everything is there, but as a developer I just get a database and a URL and a secret to connect.

**Gerhard Lazu:** I can see that, definitely. I can imagine that. Okay. What's coming for your book in the next 3-6 months?

**Mauricio Salatino:** Okay, so I'm finishing writing chapter six, which is about eventing and event-driven architecture, so Knative eventing and event-driven architectures. That's focused more on cloud events, and why this is important fir wielding large-scale applications. The chapter after that is going to be about closer to Func and more serverless on top of Kubernetes, and how that works, and what kind of scenarios you should be implementing, and what happens when you are in this different cloud provider space, and how do you connect to things, for example, how do you consume events from the infrastructure.

Chapters 8 and 9, they are still under discussion. They are just changing. I know that supply chain might be one big topic to cover... I wanna \[unintelligible 01:01:19.21\] So the last three chapters are around platform building on top of Kubernetes, which I believe is something that we need to cover, and it is extremely related on how do we provide our users, that continuous delivery or continuous deployment platform for them to use. And supply chain, because it needs to be there as well for day two, right? Again, I'm not for Hello Worlds where you can just run your own pipelines and that will work; you need to definitely have the right daemon building and defining what things, what \[unintelligible 01:01:48.24\] to be moved around and deployed in front of users.

**Gerhard Lazu:** Can our listeners help you in some way?

**Mauricio Salatino:** Yes. There's tons of work to do. One of the ways that you mentioned is the early access program in Manning. You can access there, and access the drafts, and get in touch with me using Twitter, or even using the live book project in there... My DMs are open, so if there are listeners, I'm @salaboy on Twitter; you can just feel free to reach out. If you're interested about the book, I can definitely share some discount codes as well if you're interested in that. And as Gerhard mentioned, we have the source code of all the tutorials and all the step by step tutorials in GitHub; they are open. And the main idea behind those tutorials is that by creating a Kubernetes you can run all these applications, experiment with them, and then figure out what's stopping you, what's making you slow in your company or in your business use case that you're building.

**Gerhard Lazu:** I really like that, and that's something which I started doing as well; part of reading this book, giving you feedback, trying things out, seeing what doesn't work, seeing what is maybe a bit more complicated than it needs to be, how do we simplify that... Because I really do feel that this is our book, that we can all contribute to, and we can all be proud of.

**Mauricio Salatino:** Nice...

**Gerhard Lazu:** Obviously, you're the author, because you've put so much work into it. I can see in the application, I can see -- it's not just writing the book, it's everything else that is invisible, but that makes a part of it. So any way that we can help you, just a little bit... Because the effort is immense; it's really difficult to appreciate. But just look at the commits. Look at the three hundred and thirty something commits that the application had, and you will realize just how much work there is. Early mornings, late nights... And even if you just try it out and you tell Mauricio what doesn't work, that is enough.

**Mauricio Salatino:** Yeah, a hundred percent. And because the application is changing all the time, feedback is highly appreciated from users, for example, running in different platforms, with different setups, with different versions of things... Because at the end of the day, for me to be able to finish, to say that I finished the work, I need to make sure that the examples are stable, and people can consume.

We mentioned Go, and Java during this talk, but if you are like a Rust developer, or if you want to use any other \[unintelligible 01:04:02.11\] feel free to get in touch and we can just add another to that repository, just to show that if you are using Kubernetes, you should be leveraging this polyglot space \[unintelligible 01:04:13.07\]

**Gerhard Lazu:** Mauricio, it's been a pleasure. Thank you very much for coming on Ship It. I'm looking forward to next time, when the book is finished. Thank you.

**Mauricio Salatino:** Perfect. Thank you, Gerhard.
