**Erik St. Martin:** Alright everybody, welcome back for another episode of GoTime. It's episode number 42, and today's sponsors are Backtrace and DataDog.

On the show today, your hosts are myself, Erik St. Martin, Carlisia Pinto is also on the show - say hello, Carlisia...

**Carlisia Pinto:** Hi, everybody.

**Erik St. Martin:** And also Johnny Boursiquot is here. Say hello, Johnny.

**Johnny Boursiquot:** Hey there, happy to be back.

**Erik St. Martin:** And our special guest for today is Kavya Joshi. We should probably start with an intro... I know you've done a couple of talks and stuff, and you're gonna be speaking at GopherCon, but we'd love to hear it from you - who you are, the things you're working on...

**Kavya Joshi:** Cool. So I currently work at a startup in San Francisco called Samsara. We're an Internet of Things startup. We do hardware, software, firmware, and I'm primarily a backend or a systems developer, and I do a little bit of infrastructure as well.

I feel like as of recently I kind of have a crush on firmware too, so I've been trying to do a little more of that. Apart from my day job, I speak at technical conferences, I've given a couple talks on Go, or Go-related, at least. I've given a talk on Python, on a Python library.

I'll be speaking at GopherCon this year, which I'm super excited about... And I write a little. I just published an article today. In fact, it's my first technical blog post, believe it or not... So I do all of that.

**Erik St. Martin:** [One of the talks](https://www.youtube.com/watch?v=5erqWdlhQLA) that you gave - we'll start there - was [StrangeLoop](https://www.thestrangeloop.com/), I think, right?

**Kavya Joshi:** Yup.

**Erik St. Martin:** Where you did the talk about the implementation of the race detector. That was actually really cool. Did you come up with the idea for that, or just like digging into the internals, and you're like "Hey, I know all about the internals of this, I should go talk about it"? \[laughter\]

**Kavya Joshi:** No... That would have been quite convenient. No, I think the way that talk came to be was I heard about the race detector and I used it, and I was like "Wow, this is really cool. I wonder how it works." I have a masters in CS, and as part of my masters I was in a group that did distributed systems and operating systems, so I had a little bit of that academic background to dive into the thread sanitizer paper behind the Go race detector. Then I read the paper and I was like, "Wow, that sounds really cool, but I still don't know how it actually works in practice." That resulted in me digging through the source code and playing with the tool in depth. I was like, "This would make a really neat talk", and that's how that talk came to be.

**Erik St. Martin:** It's actually interesting... The race detector has been really cool since it came out; I never knew how it worked under the covers, with the vector clocks and things like that.

**Kavya Joshi:** Yeah, I thought it was really cool how something that I only mostly read about in the context of distributed systems was implemented in this tool. The relation is obvious, right? Because you're talking about concurrency... But the translation of ideas was quite cool. I thought it was pretty neat.

**Erik St. Martin:** \[00:04:07.20\] Funny story about the race detector - I think it was at the second [GopherCon](https://www.gophercon.com/)... One of the speakers, Blake Caldwell was at the speaker dinner and he was raving about how awesome the race detector was, and the person next to him, who happened to be [Dmitry](https://twitter.com/dvyukov), turns to him and he's like "Thank you!" \[laughter\] He didn't realize, in all this hype about the race detector, he was sitting next to the person who wrote it.

**Kavya Joshi:** Oh yeah... Dmitry has done a lot of cool stuff. Some of the other tools he's come up, like [Go Fuzz](https://github.com/dvyukov/go-fuzz), seems neat, all the work on the scheduler... All very interesting.

**Erik St. Martin:** Yeah, it's hard to follow all this stuff that some of the people on the Go team are doing... So many great contributions.

**Kavya Joshi:** Yup.

**Erik St. Martin:** So that talk is still super valuable... I think it was mid-last year, or was it the year before that you did that talk at StrangeLoop?

**Kavya Joshi:** That was last StrangeLoop, so September 2016.

**Erik St. Martin:** Yeah, so it's still very relevant for anybody who's interested in how things work under the covers.

**Kavya Joshi:** Yeah, and I think that's my favorite type of talk to give or material to present... It's going beneath the surface - I find that interesting, and I think it adds a lot of value to people's understanding of systems, which is cool.

**Erik St. Martin:** Yeah, I think I love the idea of learning at least one or two layers below the things you use. I think probably from an engineering perspective a lot of it is because there's a lot of leaky abstractions... Abstractions are great when everything works perfectly, but when things start to go wrong, you kind of want to understand what the thing you're using is doing, to help you with that.

**Kavya Joshi:** Yeah.

**Erik St. Martin:** Plus, it's just super geeky to know how some of this stuff works... Like, "Why do you know how the scheduler works?" You're like, well, you see, I had this odd question one day, and I was like "How does that work?"

**Kavya Joshi:** \[laughs\] "And I ended up spending like 20 hours on it, so now I can tell you all about it."

**Erik St. Martin:** At least these are things that are useful later.

**Kavya Joshi:** Yup.

**Johnny Boursiquot:** Kavya, one of the things I actually found quite interesting in that talk was how I sort of got into the vector clocks and how they're used... That was the first time I'd seen the applicability of vector clocks in that way. The illustrations you were using were on point in describing that and making it clear for somebody who has technical background how that works, but also I thought it was approachable. If somebody's a beginner and they don't quite know how concurrency works, they don't quite know how multi-threaded programs work, that was a good introduction into some of the mechanics that are used in that world. Is that something that you started out wanting to do, to make something that's approachable to various skill levels, or this is just the way it made sense in your mind?

**Kavya Joshi:** That's a good question. I think in terms of the flow, that's how it made sense to me. But while creating the content, I explicitly was trying to make it accessible for people with computer science backgrounds, but not necessarily knowledge on the topics that I was going to talk about or I was going to have to use to explain how the race detector worked.

I think in taking something that's deeply technical and making that approachable and accessible -- first of all, it's interesting because it's sort of a challenge. It's like "I have all this background knowledge, but I'm going to try to explain it to somebody who might not necessarily have that background knowledge. They have knowledge in other areas and other topics, but not necessarily the knowledge that's relevant to what I want to talk about. How do I make it accessible to them?" And that's an interesting communications challenge.

\[00:08:05.26\] I think the second thing about that is presenting a technical idea in an accessible manner I think only results in betterness, and better systems, and producing more interesting conversations, and sharing knowledge in a way that is accessible.

Here is a concrete example. [Julia Evans](https://twitter.com/b0rk) does a great job of explaining how to use system tools like `strace` or `netcat`, and she does a really good job of taking away the barrier to using those tools. Similarly, I have a friend who really likes performance engineering, and talks about profiling and tracing with me and the rest of his friends. I think in sharing that knowledge in a way that's accessible to all of us, it results in better systems being produced, more interesting conversations... Overall goodness, all around.

**Erik St. Martin:** I really love Julia Evans' drawings.

**Kavya Joshi:** Yeah, those [zines](https://jvns.ca/zines/) are pretty rad. I ended up printing a bunch of them and giving them to my interns. It was great.

**Carlisia Pinto:** I love the point that Kavya's making about presenting technical content in an accessible manner, and I'm thinking here as Go is growing so fast and people are coming into the language, how do people who are writing technical content and who are writing and giving presentations - how can they do this in a better way? And I'm wondering if you have tips to share with us and with the audience...

**Kavya Joshi:** Gosh, I wish I had knowledge that I could speak about in general... I think when I write a talk or an article, I spend a lot of time thinking about the presentation of the content. Things like "What order to present it in? What diagram, what animation would make it most intuitive for somebody listening to the talk for the first time? What would make it accessible to them??

**Erik St. Martin:** I think a lot of it comes from our assumptions of what we assume everybody else knows. In computer science especially, more and more people are coming without formal education, so that assumption of having a formal background in computer science can be difficult. I know there's a lot of concepts that aren't that hard to explain to people that aren't familiar with it, but you open up a book and you're handed a whitepaper -- save yourself! \[laughs\] Looking at the formal proofs, you're like "Okay, maybe I'm not smart enough to understand this..."

It's almost like if you start at a new company and you're not familiar with the domain. When everybody is speaking in acronyms and all kinds of things that you don't already understand, the whole business of what you're building can seem completely confusing and out of reach. But once you start learning the vocabulary, you start realizing it's not as complex as you thought it was; you're just not aware of all the little pieces and how they come together.

**Kavya Joshi:** Yeah, and I think that's a great analogy. Your target audience - they aren't necessarily beginners, or they aren't necessarily people without computer science backgrounds... It's just that they don't have the background knowledge that you do, because of all the time you've spent prepping for the talk, or just your general interest in the subject. They don't have that background knowledge, so I think it's just being aware of your target audience, the fact that they just might not have spent as much time geeking out on a subject as you have.

**Carlisia Pinto:** \[00:12:03.13\] I thought it was a worthwhile question to ask you, this question of like if you have any tips to share about how to prepare content, because I saw your talk at StrangeLoop a long time ago, and it was excellently done.

**Kavya Joshi:** Thank you.

**Carlisia Pinto:** Like Johnny said, it conveyed really well the concepts of the race detector and things that had to do with it. For example for me, one thing that I do - and I'm not claiming I'm even any good at it, but I just go from "Okay, does the quality of my writing improve tremendously if I finish and I sleep on it?" And yeah, if I sleep on it, the next day it gets better; two days, it gets even better. And then the margin of improvement starts diminishing.

So whatever people can do to make the content better, even if it has to wait, I think it's so worthwhile, because it will benefit so much more, rather than putting something out there that's concise, but not everybody's going to really get it... Blog posts, CFP submissions - it all becomes just a lot of noise.

**Kavya Joshi:** Yeah.

**Carlisia Pinto:** So I think you were on the track of saying what it is that you do... If you have more items that you want to share, that would be great.

**Kavya Joshi:** Yeah, I guess getting your content reviewed by somebody you trust... I've worked with a lot of great people, and something like having them read through the article and just tell me if it makes sense, as an outsider... We're very good about getting our code reviewed all the time, right? Code review systems... So I think if you get your content reviewed, that's helpful.

**Carlisia Pinto:** That makes sense.

**Johnny Boursiquot:** One of the recommendations for beginners in Go is to avoid the goroutines and dealing with concurrency primitives, the channels and what not... Don't jump into the deep end right away, because there's a whole different world there that you don't necessarily have to have for a lot of programs that you write. It's okay to write them procedurally, because you're gonna get a major speed bump anyway, especially if you're coming from something like Ruby or Python and what not.

So for somebody who basically doesn't typically program in a multithreaded environment and they need to sort of "Okay, I know I've been told not to jump in, but now I feel like I'm ready to jump in. I need to know some things, I need to have some background that's gonna help me to tackle concurrency in Go, and do it the right way." What would you say some of that background is? And perhaps you might even have some resources that maybe we could post after the fact on the channel or on the podcast page. What are some of the resources that you think would be useful for a beginner to have? What sort of background do they need to have to really be able to take advantage of concurrency in Go?

**Kavya Joshi:** I think the Go Docs do a great job... There's the walkthrough tutorial which explains the basic concepts pretty well. But then I think the best way to learn is to read a lot of code and write a lot of code. There's several open source Go projects... If you go and walk through the code, probably bust out your favorite debugger, or just write a lot of simple -- even if you start with a simple example, to just play around with "What happens if I spawn one goroutine? What happens if I spawn two goroutines? What if I use a channel in this way? What if I use a channel in that way?" Basically, by getting really hands-on into writing code and reading code.

**Erik St. Martin:** \[00:16:07.15\] I'm trying to think, who wrote the Go Concurrency Visualization tool?

**Kavya Joshi:** Oh, that's really cool!

**Erik St. Martin:** That's super cool to play with and understand how these things are happening in parallel.

**Kavya Joshi:** Yes, I know the tool you're talking about, but I'm blanking on the author's name as well.

**Johnny Boursiquot:** There's a recorded [GopherCon video](https://www.youtube.com/watch?v=KyuFeiG3Y60&t=2s), right? Is that what you're thinking about, Erik?

**Erik St. Martin:** Yeah... His name is escaping me. The number of speakers at the conference is growing so big... It's over a hundred in total, across all the years, to remember...

**Johnny Boursiquot:** It's a good problem to have, right?

**Kavya Joshi:** You're one of the organizers, is that right?

**Erik St. Martin:** Yes, yes.

**Kavya Joshi:** Cool. Is organizing GopherCon just insane at this point?

**Erik St. Martin:** It has its moments... The beginning of the year is usually pretty heavy, and then the month before the conference is really insane, but it's all worth it to see it come together in the end. But we're super excited to have you, and the deep dive into concurrency and into channels is going to be really cool. Even I have never looked at how channels are actually implemented, so I think that's gonna be really interesting.

**Kavya Joshi:** Cool, I'm super excited to go to GopherCon this year.

**Erik St. Martin:** Is that another one of your passion things, where you're like "I wonder how that works..." and then kind of dive down?

**Kavya Joshi:** Yes, yes... And especially with channels in Go, they're offered such a language primitive... So diving into how they worked was quite fun. And also the fact that they interact with so many parts of the runtime, as you'd expect. I'm excited about the talk.

**Erik St. Martin:** I'm kind of sad, I'll have to wait a month to see it... \[laughter\] Because usually the conference is so busy, we usually watch everything when the videos come out.

**Kavya Joshi:** Yeah, that makes sense.

**Carlisia Pinto:** I wanted to ask you about the article you just wrote for O'Reilly... I read through it, it's pretty awesome. Samsara, where you work -- is it Samsara?

**Kavya Joshi:** Yeah, that's right.

**Carlisia Pinto:** Do you follow these guidelines...?

**Kavya Joshi:** \[laughs\] Trick question... \[laughter\]

**Erik St. Martin:** Do you practice what you preach?

**Kavya Joshi:** So we follow most of everything in that article. For example, we use the [panic wrap](https://github.com/mitchellh/panicwrap) library that I talk about to report panics. We wrap all the goroutines that we create in a top-level function that does a recover for panic reporting, and we especially find the panic reporting very valuable for our production services.

We use an [errors package](https://github.com/pkg/errors), so the package is popular and for good reason, it's a useful package. We ship application metrics, so that's three of five... What was number four...? Structured logging - we use structured loggings. We currently ship our logs to AWS's Elasticsearch service, but it's pretty terrible, so we'll probably switch to something like Honeycomb soon.

Testing - I wish we did a better job at testing, or could... Just in general, we're having good testing practices, but at a system of our scale, unless you start with a good testing story from the beginning, it's hard to come in and get that rolling. We're getting there slowly, but I feel like on the testing side we could do a better job.

**Carlisia Pinto:** \[00:20:07.18\] Let me just mention that the article is on oreilly.com, and it's called [How To Ship Production-grade Go](https://www.oreilly.com/ideas/how-to-ship-production-grade-go). Definitely a worthwhile read. And I'm sorry, I didn't mean to put your company on the spot, but when I was reading this, I was thinking "This is really cool... How do you go about maybe introducing these at your company, if you're already not following these guidelines, or any other kind of guidelines for Go development?"

**Kavya Joshi:** Yeah. No, that's a good question. What about y'all? Do you have any good tips for other ways to make Go production-grade?

**Erik St. Martin:** Well, I guess a lot of it would be the same for any program in production - assume everything dies, and that nothing is perfect. You'll get a clock drift you'll get network issues... Those are usually the odd things to track down.

**Kavya Joshi:** Yeah.

**Erik St. Martin:** I think this is a good starting point for everybody, though.

**Johnny Boursiquot:** I think for a lot of us are using a twelve-factor model for configuration of your environment or the application runs, it's something that has been sort of a best-practice for a while now. I think it's still very applicable for Go programs, and it's something that we heavily use in our organization.

Also, when it comes to designing your own applications, what we've seen that has worked consistently well for us, whether for program design or for making testing easier, we rely heavily on interfaces. We tend to rely on interfaces over concrete types quite a bit, and then we worry about the implementation details later, because it's much easier to just bring in a concrete type and to satisfy the interface later on, while you're designing, while you're on a spike and trying some things, than it is to rip out those concrete types afterwards.

Basically, that approach of saying "Hey, I may not have all the answers right away", but running on with some interfaces and help me understand the program a little bit I think has been really great for us in architecting our application the way we want it to be.

**Erik St. Martin:** I love a lot of stuff that's out nowadays too for just configuration management and secrets management too. That gets more and more important as you move applications through environments, and it prevents people from doing things like submitting credentials to GitHub repos and things like that. That happens a lot... Some of these things like Bolt and Kubernetes' scripts...

**Kavya Joshi:** [Bolt](https://github.com/boltdb/bolt) is great!

**Carlisia Pinto:** Bolt is amazing. Docker also came out with a secret management system.

**Erik St. Martin:** Oh, interesting.

**Kavya Joshi:** Oh, yeah?

**Carlisia Pinto:** Yeah... Did I get it wrong? Nobody knows this? \[laughs\]

**Erik St. Martin:** I mean, it wouldn't surprise me, because...

**Carlisia Pinto:** I'm pretty sure.

**Erik St. Martin:** ...it falls in line with a lot of the container orchestration; [Kubernetes](https://kubernetes.io/) manages secrets, so with them doing their orchestration, it makes sense for them to also manage secrets being handed to containers. But I don't think I have seen that.

**Kavya Joshi:** I'm not super familiar, I haven't played with Kubernetes myself. We use AWS, so we just run our containers in [ECS](https://aws.amazon.com/ecs/). But how does Kubernetes do secret management?

**Erik St. Martin:** There's a resource type that is secrets, and you can manage things. Basically, there's almost like a manifest file that you use to deploy your containers or pods of containers out, and you can map in those secrets as either a file - so anything running in the container sees it as a file - or as an environment variable.

\[00:23:58.17\] So your program can just assume that a file exists on a hard drive, or that an environment variable exists and doesn't need to know or care how it gets there, which is really great because the QA environment can have its own keys, production can have its own keys, the application doesn't change, and then for testing even locally, you just set your environment variables, and done deal.

**Kavya Joshi:** Yeah, that sounds useful.

**Erik St. Martin:** And I just realized we are running late for our first sponsored break. Let's go ahead and take our first sponsored break. Our first sponsor for today is Backtrace.

**Break:** \[00:24:33.08\]

**Erik St. Martin:** We are back, talking to Kavya. We were just talking about Kubernetes... We were just running a little late, so we had to cut that one short. Did you have any other questions about Kubernetes? Is that something your team is eyeballing?

**Kavya Joshi:** Eyeballing, but right now it's on the wishlist, because we run all our infrastructure in AWS, and AWS has its own container management and orchestration scheduling service called ECS. We're quite tied in at this point, but the more I read about Kubernetes, the more I wish it was easy to switch over...

**Erik St. Martin:** I haven't looked at Amazon's implementation of the container orchestration... But yeah, we typically try to design as much of the software as possible where it doesn't have to be aware that's it's run within a container... It's kind of like how the secret management works. Really, it could be [Mesosphere](https://mesosphere.com/), or anything else. As long as the secret is handed it through an environment variable, no code has to change.

**Kavya Joshi:** Yeah, so for our secrets, in ECS... Well, you basically run a Docker container. So you can pass in environment variables to your Docker container; other than that, I think you can manage access control on your other resources using Amazon IAM roles, uhmm, but yeah, I don't think they have anything specifically for secrets, but you can make existing systems work.

**Johnny Boursiquot:** In our organization we too rely on AWS ECS for image deployments. Amazon has the KeyMS (Key Measuring Service), which provides you master keys that you can rotate on a regular interval. There's some best practices around that, but that allows us to get those keys, encrypt the secrets, and then we basically ship our containers, our images with a tool internally, that is able to retrieve, make a request to API to sort of retrieve some data from S3, and that object itself is encrypted using the key from KeyMS. At that point we can decrypt it and the value, and inject it into the environment as the application is booting.

That allows us basically not to have to pass keys around, in the nude, so to speak, and basically just keep it encrypted until it's actually retrieved and decrypted in the environment that it's needed. That's worked out for us quite well.

\[00:28:00.20\] Going back to what we mentioned about Kubernetes... I read about Kubernetes and I'm like, "Man, they're doing some really cool stuff" and I'm like "Okay, we're still tied into AWS right now...", and trying to bring in Kubernetes and redo everything we've done - it's cool, but it's just too costly for us.

**Erik St. Martin:** I need to look at how that works, because I'm interested whether Amazon has some of the newer concepts of Kubernetes, like deployments or cluster federation. Deployments would be -- so you have these primitives, like a replica set... So you have a pod, which is a group of containers that move together, and then you have a replica set that says "I need n number of these pods running within the cluster", and then you have a service that you basically expose that works basically as a load balancer between those things. So a deployment you can set up on these resources that need to be deployed, and it will basically deploy a new replica set with a new version of your containers in it, and then slowly increment account on that, but decrement account on the old one for you, and just kind of service this rolling update. I don't know whether Amazon - their container orchestration platform offers things like this.

**Johnny Boursiquot:** Yeah, so on our end, basically we have -- Amazon has this concept of test definition, which basically says, "Okay, for this given container, these are the configuration parameters that we want. This is how much memory, CPU, resource allocation... When you have an HA environment, this is where I want these things distributed; I want them distributed across different containers instances, in different availability zones and what not." But then Amazon also adds a service concept around that that basically says "Okay, I'm gonna create a service, and this is gonna be for long-lived tasks, defined by the test definition, and I want to have n number of them, and I'm gonna specify a maximum health percentage, and a minimum health percentage."

Let's take a simple example. If I need at a minimum two of this particular container running, I'll say "I want a service with a desired account of two, and with a minimum health of 50%." At that point, what happens is when you have a new container that you wanna roll out, what it will do is because of that 50% requirement it will spin down one of them, spin up the new container image, and then once that other one is up, it will basically spin down the other one and then replace it by the newer version. So it does have some of that orchestration in place, and it also has the ability to distribute the services in different instances across [AZ's (Availability Zones)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html), so it's kind of working out for us quite well using that scheme.

**Erik St. Martin:** That's awesome.

**Kavya Joshi:** That's what we do as well, but the additional piece that the ECS service doesn't provide is the load balancing. So you would have a load balancer (an ALB - application load balancer) in front of your service, for example, and if you set certain parameters on it, it will continue to route traffic to your services. The way that's managed that Johnny talked about, that side of it works out. The ECS service will bring up, bring down tasks with a new definition, but you have to ensure that you have a load balancer in front of your ECS service.

**Johnny Boursiquot:** Yeah, we ended up having to, in the beginning, roll our own internal load balancer. We had one service whose job was to route traffic to the different services that it was aware of. We kind of had our own service discovery behind the scenes, and internally we had an internal load balancer that basically all the requests went through. That service discovery component would then route the traffic to different services in the boxes that it was aware of.

\[00:32:05.09\] AWS has what they're calling the ALB (application load balancer), which is different from their classic elastic load balancer. The ALB has a capability to route the traffic to the different services that it is aware of within your cluster. I haven't played around too much with that, but it does sound like it helps with that aspect of it... Although service discovery is one of those things where there's different ways to do it, and I really like HashiCorp's -- they have a component that actually does that quite well... I'm blanking on the name of it right now, but they have one. [Linkerd](https://github.com/linkerd/linkerd) is another very good one as well.

So there's lots of options out there, but obviously you find the one that works in your environment.

**Kavya Joshi:** Cool. Speaking of HashiCorp's tools, because you mentioned [Vault](https://github.com/hashicorp/vault), and the one that you've just mentioned... Anybody here play around with [Terraform](https://github.com/hashicorp/terraform)?

**Erik St. Martin:** I haven't, no.

**Kavya Joshi:** Okay. It's another HashiCorp tool that is pretty magical...

**Erik St. Martin:** A lot of the HashiCorp tools are magical...

**Johnny Boursiquot:** I know, I'm a big fan of those folks there. They come out with some really good tools. Kavya, do you wanna talk a little bit about what the tool does, for those who don't know?

**Kavya Joshi:** Sure. Terraform basically is a tool that helps you manage your infrastructure - manage and bring up infrastructure. The cool thing about it is you specify the infrastructure you want as configuration, so it's declarative. Terraform looks at the state of your existing infrastructure, looks at the configuration you specified... Basically does a diff of it in some way, and figures out what actions to perform to bring your infrastructure up to the state you specified you want it to look like, and it applies those infrastructure changes. Basically, it creates this graph and it figures out dependencies.

Things can happen in parallel (modifications), it figures out what dependencies are, so it ends up being a very fast and easy way to specify changes to your infrastructure. We just started to use Terraform, so I'm a little taken by it right now.

**Johnny Boursiquot:** On the AWS stack - not sure if you've played around with that, but the counterpart to that is cloud formation, which once I discovered -- in the beginning I kind of baulked at specifying my architecture through JSON and YAML, but once you kind of dive in a little bit and look at cloud formation for what it is, you realize it's hard to go back to manual or using tools like Chef or Puppet to orchestrate that. Cloud formation, once you really understand how it works, it's really a great tool just for that purpose. Right now it's pretty much my go to for any sort of stack that I need to stand up.

It's easy to just say, "Hey, I want the same exact stack in a different availability zone or a different region altogether" and then basically things just happen magically. It's really awesome to use.

**Kavya Joshi:** Yeah. So Terraform works with - or you can use it with - things like Chef and Puppet for the provisioning stuff. What Terraform does really well is just specifying the infrastructure, the instances, the load balancers, whatever you want, to provide that specification.

\[00:36:00.17\] How we tend to use it is we do the provisioning off instances to actually like installing software and all of that separately, but we use Terraform just to bring up the new infrastructure.

**Johnny Boursiquot:** Yeah, that's very different from -- you wouldn't use that as part of your typical development workflow. It's not like your typical CI/CD pipeline. This is more like for standing up your infrastructure that first time, or if you need to reproduce it again at a later date, or if you need to modify it even. A lot of times you start out with, "Hey, I know I want a dozen of these EC2 instance classes that have this resource configuration for memory and CPU etc.", and then you realize "Oh, I don't need as much as I thought before" or "I need more."

You can easily change that... It's just infrastructure as code, so you just commit that, you make AWS aware of it, and all of a sudden the state machine kicks in to say "Okay, this is now the desired state for your infrastructure." If it needs to, it spins down resources, deletes things that are no longer needed, and it basically brings you to that desired state. So it's a very good tool for setting up that first time and modifying as you go, but obviously this is purely infrastructure, not necessarily your traditional development release pipeline.

**Kavya Joshi:** Yup.

**Johnny Boursiquot:** I think we're geeking out on infras--

**Carlisia Pinto:** --changing subjects... \[laughter\] Are you guys ready to talk about something else? I wanted to ask Kavya about how interested in firmware -- \[laughter\] you mentioned that you have the interest... It's something like you haven't necessarily started doing anything...? I'm super curious to know what would you do if you could get your hands on a couple hardware and you just go to do something...

**Kavya Joshi:** Yeah, gosh... So the startup I work at does firmware, because there's a hardware engineering team - we make the hardware... There's a firmware team, and the firmware team actually does use Go. We have sensors, and the sensors don't run Go - it's all embedded C - but the gateways which run [yocto Linux](https://www.yoctoproject.org/about/), they run some C++ and some Go, and then the backend is all Go.

I started at this company as like a backend assistant, some infrastructure, and that sort of role... But the more I learned about the firmware side of things, I'm growing increasingly fascinated with writing firmware code. It's cool that you can run Go on firmware, so in terms of what I'd do with that - oh, gosh...

**Carlisia Pinto:** It's alright, why don't you share -- I'd love to hear from you what makes firmware code interesting to you? I sort of have the opposite reaction whenever I program for hardware, because I worked for three years at a company doing just C code for - or mostly C code - for hardware. It's sort of a pain, because the hardware breaks, or doesn't work the way you expect, so it's not just the software you're dealing with; you're dealing with like this monster... \[laughter\] I'm not an electrical engineer, I have no idea how to deal with this, so that's that for me. So I was interested to know what makes firmware code writing for you so cool.

**Kavya Joshi:** Well, again, with the caveat that I haven't written much, I've only tinkered a little bit, I think the tradeoffs are somewhat fascinating. The firmware team has to think about power consumption, which is not something as like a backend or traditional software programmer you ever have to think about, right? It's like, you need to spin up another instance, you need more memory, you need more CPU - just spin it up.

\[00:40:18.02\] Obviously, you optimize your code and all of that, but it's very easy; you're not dealing with hard constraints... Whereas when you're talking about firmware programming, or programming on a device, those are all very real and very hard constraints, and a new constraint that you don't even have to think about is power consumption, whereas as a firmware programmer you're like "Oh, in sleep mode this is how much power my code is drawing. When it's not sleeping, this is how much power it's drawing."

The set of constraints you're dealing with is very different, and I think that's what makes it interesting.

**Erik St. Martin:** So are you interested in writing this firmware in Go, or just in general?

**Kavya Joshi:** In general, but Go sounds like a very convenient way to get started, with things like [Gobot](https://github.com/hybridgroup/gobot) and everything else that's coming out now.

**Erik St. Martin:** I think I kind of mirror the thoughts about the hardware... I'm not an electrical engineer, but I have piles of parts because I'm slowly learning. I think the fun part about learning firmware is 1) we write so much code that runs somewhere else, so writing code that you actually get to interact with, like see it turn things or light stuff up - it's really gratifying. And the thought that you can now invent physical things, not just programs to run is really cool. But I think that wanting a deep understanding of how stuff works is really cool, too. Understanding -- like you said, there's odd constraints that come to writing firmware, actual interrupts, and the amount of time your interrupt runs for, and how many assembly instructions... You can't do a Load, Modify, Store because if an interrupt takes place and modifies that registry out from underneath you, you can munge it and... It sounds like a pain in the butt, but I guess the more you build stuff, you want harder problems.

**Kavya Joshi:** Yeah...

**Johnny Boursiquot:** Concurrency is hard... \[laughter\]

**Erik St. Martin:** Yeah, the memory constraints are interesting too, especially if you're working on a normal ARM tip or something like that, depending on what series... I mean, you're working with kilobytes of RAM, and even if you use a BUS, you use like an SBI bus or something to talk to an external RAM, you're still not dealing with gigs or RAM where you're like "Yeah, who cares...?"

**Kavya Joshi:** Yeah.

**Erik St. Martin:** "It's their fault for only having eight gigs of RAM instead of 32!" \[laughter\]

**Kavya Joshi:** Yeah... We recently switched to using a different chipset and a different board for the gateways, and the firmware engineers are like "Oh my god, we now have maybe like 150 megabytes of RAM available?" It's just like, "Um, okay... What are you gonna do with that?" \[laughter\]

**Erik St. Martin:** Like, "Can you blink an LED with that?" \[laughter\] In distributed system in the cloud world and stuff like that, when you're thinking megs of RAM, you really are like "What are you gonna do with that!?"

**Johnny Boursiquot:** Boot VM, if you can! That's it. \[laughter\] I'm interested to understand... In the hardware world, do you have some sort of assurance that if you get it to work on the hardware when you're "developing", it'll sort of work every time consistently that same way? Do you have any such sort of guarantee, as opposed to the software world?

**Erik St. Martin:** \[00:44:18.01\] Yeah, so I can probably take this question... I think we should probably take our next sponsored break first, and then I'll come in with this, just because this might be a little bit more. So our second sponsor for today is DataDog.

**Break:** \[00:44:34.03\]

**Erik St. Martin:** So we are back. Before the break, Johnny, you had asked -- you're talking more like a testing scenario?

**Kavya Joshi:** More even like running -- like, once you ship your hardware product... Are you pretty much guaranteed that the code that you worked while you were testing and developing it is pretty much gonna perform the same way consistently when it's in the consumer's hands? Do you have any such guarantees?

**Erik St. Martin:** So there's a lot of testing that goes into the physical device to make sure that everything runs... Usually, there's a couple of test interfaces. Once the board is designed, some people use what's called a bed of nails, which is almost like another thing that comes down and makes contact points onto the physical device, and then it can apply voltage and things like that to different parts of the circuit, and then measure other parts of it.

I don't remember the year that this came out, but it's called the Joint Test Action Group, or JTAG - it's an interface out that a lot of microcontrollers implement, and it basically allows you to communicate with all the chips in almost like a shift register fashion, and you can communicate and apply voltage or read from pins outside of the microcontroller... So you're able to simulate a lot of unit tests on the actual physical hardware.

Then as far as the firmware goes, a lot of things like QEMU and things like that, unit tests are written... And then almost in the same way we write crash-only software and things like that, a lot of firmware development people have to try to -- because you can actually have hard faults. If you have a stack overflow or something like that, your microcontroller literally goes into a hard fault state and just like stays there. So there's a lot of things where people will basically trap those, because you get an interrupt when that happens, and you can almost set a callback on that interrupt, and people will reset the microcontroller to try to get it to reboot into a clean state, and things like that.

It's an interesting world... I don't develop firmware. I know an EE (Electrical Engineer) I've had an interest in learning more things about this...

**Johnny Boursiquot:** It sounds like you have a deep interest... \[laughter\]

**Kavya Joshi:** Yeah!

**Erik St. Martin:** \[00:48:15.00\] I'm always torn, because a part of me wants to take just like a single board computer, or like an Intel Edison and put Linux and Go on it, but a part of me really loves the Assembly and the C, and learning the guts of it... I've got some dev boards that are literally just like an ARM processor and some RAM. I just got one today. I actually thought UPS was going to show up while we were on the podcast... It has like a 4.3-inch touchscreen on the back of it, and a decent amount of RAM, a pretty fast Cortex microcontroller, and I'm dying to write some code for that. \[laughter\] But that's all gonna be C or C++.

**Johnny Boursiquot:** Do you think that working on systems with so little resources - compared to the really powerful servers that we're deploying stuff on in the cloud - teaches you to write code that is more performant, that is more conservative with resource utilization?

**Erik St. Martin:** I guess you think about it a lot... I try to be cognizant of that whatever I write, but I guess you try to be more aware of it that way. Usually your compile tool tell you how much space it's gonna consume on flash, which is also a problem, right? The chip only has so much flash on it for you to actually fit your program in. We don't even have to worry about disk storage.

If you wrote a program so big it fills up your server's hard drive, you're fired immediately. \[laughter\]. So there's things like that... Or you have to write code that pulls more code from external flash... But I think it forces you to be more aware of how the processor works, and Assembly instructions, and the registers, and how some of that stuff works, for sure.

**Johnny Boursiquot:** So in the cases where you need to emit data, it sounds like you can have storage that gets shipped with the product, or you're sometimes emitting that stuff over a network. In the world of IoT that we're in, everything is gonna be able to talk with a network... How would you emit data that you need to collect elsewhere?

**Erik St. Martin:** Most of it for IoT is gonna be some sort of RF-based thing - Bluetooth, Wi-Fi, things like that. You could do an USB interface or an SD card if it's not something... But for debugging purposes though, a lot of those debug interfaces - you can actually just have like a serial connection to your computer that you can kind of push log messages from. Debugging is probably one of the biggest pains with it.

One thing I will say learning about hardware - if you're not trying to actually design the electrical circuit, if you're just trying to build a gadget with Arduino and stuff, it's far more approachable than I thought it was... And especially, a lot of the chips speak really common serial interfaces - you have SPI, I2C and UART. And usually all of your chips - your Wi-Fi chip and your main microcontroller will just talk over one of those serial connections, or your flash, or your RAM will just communicate over that, which makes it really cool to reverse-engineer hardware that you have around your house... Like, "Oh, there's the microcontroller and there's the flash... What kind of data is it storing around there?" \[laughter\]

\[00:51:57.12\] You can get a lot of chips and wire them together. A lot of times there's -- Adafruit and SparkFun are probably my favorite places, because you can just order little breakout boards and then you only have to wire up the power and the serial lines and you're good. You don't have to worry about all the capacitors and supporting circuitry that are part of that circuit.

Carlisia, did you get to work with hardware at all, or you just mainly wrote firmware?

**Carlisia Pinto:** I didn't write firmware, I didn't write embedded code... I wrote code that drove machines, like printers and lemonadors - these huge custom-made machines. And even so, it was a pain sometimes. \[laughter\] The machine would turn off and I wouldn't know how to turn it on... Silly things. \[laughter\]

**Johnny Boursiquot:** There was no power button?

**Carlisia Pinto:** All the interruptions you can have with hardware programming... And then the hardware breaks and you have to stop and you're like "Okay, I don't even know where to start here."

**Erik St. Martin:** Yeah... Recording circuitry goes wrong and the voltage level drops... Your main voltage coming across the board, like "That should never go below 5 Volts" and it does, and it puts your microcontroller in a weird state... And then there's people who do this on purpose.

In the reverse-engineering hardware world there's a thing called "glitching" - you can basically set... The name for these attributes are escaping me, but there's attributes on the chip where you can basically put it in a read-only mode, which is what you usually do when you produce this, so that people can't read the firmware off of it to reverse-engineer and stuff, and you can set these bit flags on there. Now you can't get out the firmware to see if there's hardcoded passwords and things, but people have found ways to glitch the power at just the perfect frequency in order to (a fuse is what it's called) basically trip these fuses and then still let you extract the firmware. What level of super geek do you have to be to understand the physics of making that happen? \[laughter\]

**Johnny Boursiquot:** I don't know... Sounds like SQL injection to me... \[laughter\]

**Erik St. Martin:** I remember the first time I saw a talk about that, and I was like "You what...?! You just glitched the power and you're like, "Oh, we're in!"? They'll take heat guns, FLIR cameras and stuff like that, and they'll X-ray the chips and be able to see the communication that's happening between individual transistors and stuff... That's a level -- I like learning low-level stuff; that's probably a level I won't go to. \[laughter\]

**Johnny Boursiquot:** I'll stick to the cloud thanks...

**Erik St. Martin:** Johnny, Kavya - do either of you tinker with hardware at home?

**Kavya Joshi:** Tinker is as far as I've gotten... I've ordered an Adafruit board. When it gets here, I think I'll start playing with it. But I don't have any awesome projects lined up.

**Erik St. Martin:** Yeah, it always starts with something silly, and sometimes that's just a matter of finding a sensor... One of the first things I ever did was -- this was before Arduino got really big... There was a company called NerdKits, and a couple of people at work had bought one. Basically, if you picture the barebones components that are on an Arduino board - just an AVR microcontroller, the crystal resistors and an LED... They basically just sent you this stuff in a breadboard, and a long PDF of how to assemble this thing and run it.

\[00:56:04.00\] That's kind of where I started out, and one of my projects was somebody had sent me a gas sensor that supposedly was able to detect also alcohol... I was like "I'm gonna build a breathalyzer." \[laughter\] I don't know why, but I just found it cool at the time.

I'll go through Adafruit or SparkFun or something and just look through stuff, and be like "Oh, that's cool... I'm gonna get an LED Matrix. I encourage anybody who hasn't played with hardware just to even start with like a basic Arduino board, and find a shield to go with it. You start realizing it's not as unapproachable as you think it is... Except there's only a couple of common serial protocols that those chips are usually communicating with.

Brian is not on the show today, but him and I have been working on a controller for our smokers for barbecue, the heat controller stuff... He has set up an example with a Raspberry Pi, and just talking I2C over the GPI Pins to some relays, and stuff. It's pretty easy to interface with some of that stuff.

**Johnny Boursiquot:** I was so bummed when his talk to actually do a barbecue using his [PID Controller at GopherCon](https://blog.gopheracademy.com/advent-2016/qpid/) was not accepted. I wonder if the fire marshal had anything to do that. \[laughter\] Like "A live barbecue at a conference? Why not!?"

**Erik St. Martin:** I don't know whether they ever responded back to us about that... About whether or not we could bring our own barbecues. But there's still the lightning talk stuff, too...

**Johnny Boursiquot:** That's true...

**Erik St. Martin:** The hardest part about the talk selection process is the sheer number of submissions we get.

**Johnny Boursiquot:** And WHEN we get them... We're talking about the tail end of the deadline here... \[laughter\]

**Kavya Joshi:** I guess I won't tell you when I submitted my talk... \[laughter\]

**Johnny Boursiquot:** Oh, we know... \[laughter\]

**Erik St. Martin:** I think we kind of sidelined there on some cloud and hardware.

**Kavya Joshi:** All the good things.

**Erik St. Martin:** I think your talk is gonna be pretty fascinating... I think people really are receptive to how do things work under the covers talks.

**Kavya Joshi:** Yeah. I feel like the core contributors of Go also do a very good job talking or explaining, publishing articles of how things work under the hood. There is not content - or I can't find any content - online about channels already, but the design docs for the scheduler, for example, the garbage collector, even just the commit messages... They're all very insightful. It's cool.

**Erik St. Martin:** I think that the reason for a lot of that is probably just because -- it's a common thing I think I've heard from the Go team when I asked about some of this stuff... It's their implementation details. I think maybe there's hesitation to put a lot of content our there about how these things are implemented, because it could change in a matter of one release, and maybe it's just a matter of not wanting to encourage people to develop against the specific implementation. But I think people are also very interested in knowing how that works.

Plus, like you said, having an understanding of this brings more people to the discussion of like "How does this work? How SHOULD it work?" and things like that, rather than it being kind of like a secret organization. It's like, "Oh, that's the compiler... Nobody crosses that barrier."

**Kavya Joshi:** \[01:00:08.20\] Yeah, and I was gonna say, it's also something about the Go community as well... Every time one of these design documents is put out, for example, the document is swarming with people reading it and commenting on it on Hacker News, so there's clearly an interest from programmers (and Go programmers) to get into the innards of systems, which is nice.

**Erik St. Martin:** Alright, so one of the things we do in each episode - and I'm not sure how much time we have left... But sometimes we'll talk about some interesting projects or news or things that we've come across in the past week (or sometimes more, if we didn't have time to talk about it in the show before). Is there anything anybody wants to make sure that we mention before we end the show for today?

**Kavya Joshi:** [GopherJS](https://github.com/gopherjs/gopherjs) is pretty cool...

**Erik St. Martin:** Brian was in love with GopherJS. I think he's still playing with it on and off, but he was a big advocate for a while.

**Kavya Joshi:** Yeah... Writing Javascript straight up takes me so much time, but with GopherJS now, I don't even have to. It's wonderful.

**Erik St. Martin:** I think I've spent so many years writing Javascript that it's just easier for me to just write Javascript... But in all fairness, I haven't tried GopherJS.

**Kavya Joshi:** We're actually considering writing large swathes of our Javascript code in Go, so we can use GopherJS, and then run Javascript.

**Erik St. Martin:** Here's an interesting question about the adoption of GopherJS - how does that typically work, say, at your company? Because thinking about the way most companies are structured, you usually have a backend team and a frontend team, and the frontend team typically controls a lot of the Javascript... So is there a barrier to entry for the frontend team to pick up Go to learn GopherJS, or is this mostly just a group of full stack (as much as I hate using these buzzwords) engineers just kind of controlling the whole application?

**Kavya Joshi:** The engineering team at Samsara is pretty small - we're like 10-12 people, and we certainly have areas of focus. I'm on the assistance or the backend team (and there's three of us on that team), but the teams are not so much rigidly defined teams; they're fluid teams. I don't tend to do a lot of frontend, but there are certainly people who do both frontend and will do a little bit of backend. So I feel like most of the people who work on the Javascript side are familiar with Go and write a lot of Go code as well.

In general, the parts that we want to convert to Go and then use GopherJS for - I feel like it'll have to be in a slow and careful transition, like piece by piece. But I feel like the team as a whole is on board with it.

**Erik St. Martin:** Oh, that's really interesting. That's always been a question of mine for people adopting it. But yeah, I guess if you're working across the stack, that makes sense. But Go is not that hard to pick up though, I guess I'd argue... Maybe less though than Javascript; it's easier to pick up some Javascript.

**Kavya Joshi:** \[laughs\] In my opinion, but that's just me...

**Johnny Boursiquot:** Don't start a war... \[laughter\]

**Carlisia Pinto:** \[01:03:54.06\] I have two community-related news to share. One is the videos for GopherCon India 2017 are out. There are about [22 videos](https://www.youtube.com/playlist?list=PLFjrjdmBd0CoclkJ_JdBET5fzz4u0SELZ), there are some really good presentations there. And also today, in a couple hours, Dave Cheney's going to do a Go remote meetup, and he's going to talk about the hidden \#pragmas of Go. I don't think I know what pragmas are...

**Erik St. Martin:** This is interesting, I just clicked the link. What are pragmas...?

**Carlisia Pinto:** Yeah, right...? \[laughs\]

**Erik St. Martin:** The name came from the Pragma declaration that tell C compilers to alter their interpretation of pieces of code. Now, Go doesn't have a Pragma directive, but it does have ways of altering the operation of the Go compiler via directive syntax hidden in comments. Interesting.

**Carlisia Pinto:** And that was Erik reading from the description of the meetup.

**Erik St. Martin:** Yeah, I literally had not heard that this meetup was taking place until you just said something, so I happened to click the link, like "What is this?"

**Kavya Joshi:** Wait, that's today, huh?

**Carlisia Pinto:** Yeah, but it's recorded, so [you can also watch it later](https://www.youtube.com/watch?v=nmcPwqjPFbw).

**Erik St. Martin:** We'll remember to post a link to the recording in the show notes, that way whoever's listening to this after it's being released can watch the video.

**Johnny Boursiquot:** I also saw a mention of Francesc's new JustForFunc episode, [using Context](https://www.youtube.com/watch?v=LSzR0VEraWw). I watched that, it's actually pretty good... It does a good job of walking through the why's and the how's you'd use the Context package to help you handle abrupt termination of client server connections, and that kind of stuff. Pretty cool episode, everybody should go watch that.

**Carlisia Pinto:** Yeah, he gave a talk about Context in India as well. One of those videos for the GopherCon India this year is his, talking about the same.

**Erik St. Martin:** The Context package is absolutely amazing, especially when you have pipelines in your request, and it's spinning up other goroutines and things like that, to just cancel at the frontend. Also, the JustForFunc series is awesome. I haven't watched all of them yet, but I've been trying to catch up. I love the work that Francesc is doing with that. Have you watched any of those, Kavya?

**Kavya Joshi:** I've watched some of them, but in general, I think Francesc is just -- all of the content he puts out is interesting and accessible... I'm a fan.

**Carlisia Pinto:** We are fans of Francesc's, too. \[laughs\]

**Erik St. Martin:** Yeah... So I think we are a bit overtime, but one tradition we have for each show is we do something called \#FreeSoftwareFriday. Why it's Friday - I think that we just started the name before we released on Thursday... \[laughter\] What we like to do is recognize either contributors to the community or open source projects, or specific projects that make our lives easier.

It does not have to be a Go project, it can be written in any language. If you have somebody in mind, feel free; if not, that's okay, too.

I'll start with Carlisia and give you time to think about it if you have one, Kavya.

**Kavya Joshi:** Okay.

**Erik St. Martin:** Carlisia?

**Carlisia Pinto:** I thought you were saying you were gonna give me time to think about - that would last forever... But I do have one.

**Erik St. Martin:** I saw your doc, you have somebody in there, so you don't need time.

**Carlisia Pinto:** Yeah, I have something ready. I ran into this [goreporter](https://github.com/360EntSecGroup-Skylar/goreporter) tool, and I like it because I used to use this tool that was the same idea when I was doing Ruby and Ruby on Rails. It basically runs analysis tools and testing, it generates a code qualitative report that you can output to HTML on your browser and you can see what's going on with your code. It's pretty neat.

**Erik St. Martin:** \[01:08:03.26\] Oh, this is actually really cool. I wanted to do a comparison, too... Have you seen ReviewDog?

**Carlisia Pinto:** No, what is that?

**Erik St. Martin:** It's something similar too, and you can set it up to basically attach itself to GitHub and be run on every commit. It runs the same kind of checks. I'd like to do a comparison of what the features are.

**Carlisia Pinto:** This [ReviewDog](https://github.com/haya14busa/reviewdog) sounds like RubyCop.

**Erik St. Martin:** I don't think I've seen -- that might have been after I stopped doing Ruby.

**Carlisia Pinto:** I think it's called RubyCop, but that doesn't sound right...

**Johnny Boursiquot:** RuboCop.

**Carlisia Pinto:** RuboCop, there we go. Sounds like that. Cool, I'll check this out, too.

**Erik St. Martin:** And how about you, Johnny? Do you have anybody?

**Johnny Boursiquot:** Yeah, the team over at Robomongo. A little while ago I needed to quickly verify the schema of some Mongo databases that I was working with and deploying into the cloud, as I say... And going into the command line, you can quickly see everything that was in the different databases, so I went and looked for a GUI tool for Mongo, and there are lots of different options out there, but I found Robomongo over at [robomongo.org](https://robomongo.org/). It's quite usable and friendly. It's open source and free, so kudos to the team over there. It's a great tool.

**Erik St. Martin:** I'm looking at the page for it now, and wow... Mongo tools have gotten beautiful. I'm trying to remember the one that I used when I first learned Mongo... It looked like normal Linux GUIs - functional, but not the prettiest. This is actually really good-looking.

**Johnny Boursiquot:** I was surprised myself.

**Erik St. Martin:** How about you, Kavya? Do you have a project or a maintainer you wanna give a shoutout to?

**Kavya Joshi:** Oh gosh, can I say [GopherJS](https://github.com/gopherjs/gopherjs) again?

**Erik St. Martin:** You can totally say GopherJS again! \[laughter\]

**Carlisia Pinto:** Totally, yes.

**Erik St. Martin:** So mine is actually kind of suiting to some of our conversations today. It's a project called [GNU ARM Eclipse](https://gnu-mcu-eclipse.github.io/). If you play with embedded stuff, almost (I swear) all electrical engineers are Windows users, because it's very hard to find any tools for IDEs that work with stuff for anything other than Windows. I have a Windows VM I have to use for specific tools where I set my board on the floor and wire my USB cable.

So this is actually a really cool project that can do some of the JTAG and OpenOCD for debugging off of ARM development boards and ARM projects and interfaces with QEMU for running tests and stuff like that in an emulator. So it's a super cool project, and I'm really thankful for it because I'd have to be completely editing out of a Windows VM all the time without it.

Alright, so with that I want to thank everybody for being on the show, especially thank you to Johnny and Kavya for joining us today.

**Kavya Joshi:** It was fun!

**Johnny Boursiquot:** My pleasure!

**Erik St. Martin:** Huge thank you to our sponsors, Backtrace and DataDog. Definitely share the show with fellow Go programmers, friends, colleagues... If you aren't subscribed, you can go to GoTime.fm to be subscribed; follow us on [Twitter](https://twitter.com/GoTimeFM), and if you have something you'd like to come on the show and discuss or just have suggestions for guests or topics, hit us up on [ping](https://github.com/GoTimeFM/ping). With that, goodbye everybody! We'll see you next week.

**Carlisia Pinto:** Bye!

**Johnny Boursiquot:** Be well!

**Kavya Joshi:** Bye!
