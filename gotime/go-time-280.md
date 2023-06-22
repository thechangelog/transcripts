**Angelica Hill:** Hello, and welcome to Go Time. It's been a hot sec since I've been here, and I'm extremely excited to be hosting a semi \[unintelligible 00:00:55.08\] episode where we're going to be deep-diving into a specific project that was worked on by members of our beautiful Go community, and talking through some of the trials, tribulations, issues they encountered, things that they worked on and why, and hopefully, through exploring this specific case study, we as a community can learn a little bit of what to do, what not to do, and some tips and tricks for similar projects we might be working on.

I'm extremely excited to be joined today by two wonderful women, Samantha Coyle and Neethu Elizabeth Simon, who along with their team at Intel helped to create an ML pipeline that enabled image processing and automated image comparisons which enabled healthcare use cases through their series of microservices that automatically detect, manage and process images received from OEM equipment.

So in this episode we'll be chatting through those challenges they encountered, and we'll be focusing specifically on the weight strategy for their ML pipeline healthcare solution microservices. We'll also touch on how improvements were made to an open source package, a Go package, of course, as part of this project.

So without further ado, I'm going to intro you to our two guests. As I've mentioned, we have Sam Coyle, who's a software engineer at Diagrid, where she develops Go microservices and enables developers to run high-scale modern applications using open source technology. She gets the opportunity to contribute to Dapr upstream in her current role, and has a history of developing computer vision-based containerized applications and Go microservice for industrial applications at the edge. So she was very well placed to work on this specific project.

She has her CKAD certificate, which she got in 2021, which is a tribute to her knowledge and her interest in distributed workloads and her dedication to that area. She also spends a lot of her time doing technical reviewing, and authoring some Go textbooks. So clearly, she's very passionate. She's also passionate about empowering early career gophers and engineers, and really encouraging diversity in our space. She's part of a family of gophers, which - I was really interested to find out we have whole generations of gophers. We have her brother, who is the OG gopher, as you have told me, Ethan... Although, I don't know, is he still the OG? I feel like you've been rocking up at GopherCon, giving some amazing talks, so...

**Samantha Coyle:** Yeah, we may need to reevaluate.

**Angelica Hill:** And then of course, your wonderful twin sister, who's also a gopher. So you very cheekily slipped into your bio when I asked you to write a little bit about yourself that your favorite conference experience was presenting on the main stage at GopherCon 2022, which I feel like for those of you who don't know, I love GopherCon, I'm one of the chairs... So I don't know whether you put that in as genuinely your favorite experience, or whether you were just trying to get in my good books.

**Samantha Coyle:** 100% favorite.

**Angelica Hill:** For sure. Okay, lovely to hear it. So how are you today? Are you excited? I think this is your first time on Go Time.

**Samantha Coyle:** Yes. I'm super-excited to be on my first Go Time podcast. Good day so far. Tacos, and coffee, and so I'm very happy y'all are having me.

**Angelica Hill:** Really excited to have you, and I'm hoping the next hour will not turn your amazingly good day into a bad day. But we shall see.

Next up we have Neethu Elizabeth Simon, who's on an IoT ML team. She's a senior software engineer in the network and edge group at Intel Corporation. She has vast industry experience building small end-to-end vision-based machine learning solutions. Again, a great fit for the project we're going to be discussing today. She's currently focused on building containerized microservices for computer vision-based AI/ML solutions for retail and healthcare use cases. She has a master's in computer science from Arizona State University, and is extremely passionate about promoting girls in STEM. She actually won the Women Who Code for 2023. Applaud for her award. Was it 100 Technologists to Watch? Was that the award, Neethu?

**Neethu Elizabeth Simon:** Yeah.

**Angelica Hill:** ...for her contribution to the space. And then you also have the 2020 Society of Women Engineers D and E award for being a powerful technical contributor and advocate for STEM education. So a very active member in that space, and I applaud you myself for all your work.

**Neethu Elizabeth Simon:** Thank you.

**Angelica Hill:** It needs to be done. And I must say, as a side note, I'm very excited to be sitting here on this podcast with us three women on the stage, talking about an extremely technical project. It makes me very happy. Awesome. So I feel like I've been alluding to the project we're talking about today in my intro, so let's get straight down to it. So tell me, what is this project that you worked on?

**Neethu Elizabeth Simon:** \[05:50\] Yeah. So this was actually a biopharma-based healthcare kind of a solution. It is architected and developed in a way that we can no reuse it for any other use cases, and other industries, like retail, or industrial, or something like that. So I can't go explain a lot of the details, because there are some customer confidentiality there... But we'll keep it very high-level technical, so that the listeners can learn from it, and learn from our challenges, and how did we overcome some of these challenges.

**Angelica Hill:** So at the most base level, what was the problem you were solving?

**Samantha Coyle:** So it was image processing at the edge, which - being at the edge introduces additional complexities and considerations. And so that's kind of where we played into some of the Ajax Foundries community. And so what that is, is this way of working with IoT devices and developing Go microservices at the edge. So they have a bunch of SDKs, and different features that you can use, so that way you can enable cool projects like ours. So yeah, edge image processing and enablement. I think that's it at a high level.

**Neethu Elizabeth Simon:** Yeah. And I can add on a little bit more details on the project-wise. It's a distributed microservices-based containerized solution. So what we have is like two systems here; one we call as the OEM device, which is connected to an image-capturing device; it can be a microscope, camera, or any other such device. And then it automatically collects these and then transfers it to a different device called as the gateway, which is running the Linux Ubuntu in our case. All the machine learning pipelines are run on this gateway, we get back the results, and then all of that is sent back to this OEM device. So our solution basically helped automating all this image capturing, transferring, managing, processing... All of these processes were automated by our solution that we developed.

**Angelica Hill:** Awesome. And as you were coming to this problem, as you were thinking through how to address it, was it a given that you would write it in Go? Why was Go the language that you chose?

**Neethu Elizabeth Simon:** Yeah, so me personally, I'm pretty new to Go. I've jumped around several languages. I started with Java, and now I'm coding in Golang. So Golang is an open source programming language, which was introduced by Google, to build simple and reliable software. It is very, very popular in building distributed microservices-based solutions, it runs faster than most of the other programming languages that are used for non-scalable servers and large software systems. So for us, it was not a difficult choice to make, to go with Golang. Also, Go is designed to run on multiple cores, and Intel is a CPU-producing company and manufacturing company, so that's important to us. So concurrency and scale is already built-in for Golang, and it provides all these multi-threading capabilities, which makes it really fast to program the languages for the distributed system.

**Samantha Coyle:** Yeah. It's also something -- so I'm not at Intel anymore, but it is kind of the go-to - pun intended - language of the org at the time. So it kind of made sense for this project. And also, again, kind of the framework that we were working with supported working with Go. So that's kind of why we just stuck with it, because it was tried and trued, and we were familiar with it.

**Angelica Hill:** And then in terms of your initial discussions about the solution and how to architect it, I'd be interested to hear, just because I think it's useful to hear the decision-making questions you asked yourselves; why you ended up going with a containerized and a microservice infrastructure? What were the questions you asked, how did you evaluate that decision?

**Neethu Elizabeth Simon:** \[09:55\] Yeah. So for our organization - from the last couple of years we've been pushing for these containerized microservices kind of an architecture. Containerized because, as you know, containers are lightweight, which \[unintelligible 00:10:05.16\] which is more economical and scalable. What do I mean that is you don't have to set up an entire environment on a new machine. We can just use the Docker and Docker Compose files, independent of the operating system where these applications need to run. So it's very lightweight, and we don't have to install this entire OS stack. A virtual environment does. So containers are easy to maintain and develop.

So that was one reason... And then the other piece is microservices architecture is actually a very loosely-coupled architecture, so it's very easy to build our application services, add and remove them without affecting the overall solution architecture. And like Sam mentioned earlier, our project is based on the Ajax Foundry services, which is again, an application microservices-based architecture. We built all our applications on top of Ajax, basically, so that scalability we were able to achieve because of that microservices architecture.

**Angelica Hill:** Awesome. So you've decided kind of the broad approach, you've decided Go is the way to go... Again, no pun intended. \[laughter\] This is gonna happen the whole episode... I would love to hear how did you -- and I feel like perhaps, if I'm remembering right, it was you, Sam... How did you come across the Go implementation for Wait For It? And for the listeners, what is that? Where did you find it? And maybe you could give a little info on how you move forward thinking about using it.

**Samantha Coyle:** Yeah, it was kind of like it sounds obvious, and it sounds easy defining a weight strategy for your different services. So in its most basic form, an example of - you could think of like a service waiting for its database to be up and ready before accepting requests. So it's like you have these dependencies that you need to be up and ready for requests to go through, and for your service to behave as you would expect.

So especially if you think about a production-level environment, it's really important that you're able to write to your database, or that you know your dependencies are up and ready. And so that's kind of some of the high-level context going on here when we talk about a wait strategy and having your services waiting for other services.

So that's kind of some of the background here... And so for this project in particular, it was interesting, because we had two different machines. We had that Windows machine, and we had a Linux edge box running different microservices. So we had to have some coordination between the services running on the Windows machine and the services running on the Linux edge box, just to make sure, again, that everything was up and ready as we were expecting, and such that everything could process as we expect, and that there were no surprises... Even though there are some times.

So yeah, that's kind of the background, waiting for our service dependencies to be up and ready... And so I think it's pretty common that people have probably heard of the vishnubob Bash script. So this is like a Bash script implementation to allow for that logic of waiting for other services and waiting for your dependencies, TCP host and port to be up and ready before starting that service itself. And so you'll often see that applied into the Docker layer using that vishnubob Bash script on your command or entrypoint. And so yeah, our org was familiar with that from past projects, and we wanted to look at "Well, hey, we need this, because we need our services to work cohesively, and be up and ready before proceeding." So we looked at "Okay, well, should we use this one? Or are there alternatives?" And so thankfully, the Go version, the Wait For It Go repo is linked to the vishnubob Bash script. So that's kind of how we stumbled upon it. That was very long-winded...

**Angelica Hill:** \[14:06\] No, that's great. I mean, you stumbled upon it... How do you go about thinking through whether it's the right fit? ...whether it's going to do what you need it to do. And then follow-up is where to then use it and how to implement it.

**Samantha Coyle:** Oh, there's a lot to that. And to kind of compact it -- and Neethu, stop me and interject...

**Neethu Elizabeth Simon:** Sure, sure.

**Samantha Coyle:** Okay, I guess I'll start with at what layer is it most appropriate to add in this logic, and how can you decide what's best. So obviously, I will caveat that all of this is very dependent on your use case. So obviously, what made sense for us for this project might not make sense for everyone for their projects. So for us, we looked at "Okay, well, what's tried and true? What have people done before that's worked?" And again, that's using the Docker layer approach.

So it's kind of there's two options. You can apply it in the Docker layer, so your build area - Docker or Docker Compose. And I'm sure there's plenty of other options. Or you can apply it in your Go application code layer itself. So those are like the two main options. And I'll kind of dive into the Docker side, I guess, to start out with.

So again, for us, our team knew about the vishnubob Bash script, which is where you'll have your Dockerfile with your command to start your service. And then in your Docker Compose, if that's what you're using - which, that's what we used - you would have an entrypoint where you're overriding the starting of that service, wrapping it with that Wait For It script, saying "Hey, start my service, but wait for the other services." So that's typically what happens. But with that, if you do use the Docker Compose entrypoint, it also has the potential to override your Dockerfile command. So that's actually a known issue with Docker Compose, that you do have to keep in mind if you go with that approach. So you just append your command to the overwritten entrypoint. And Docker Compose also depends on keyword, but I don't think it's a thing anymore in version 3, so that's not really an option I think people go with nowadays.

So that's kind of like the Docker side of things. And then there's the Go side of things, which is what we went with. And for us, it made the most sense to stick with the Go side of things just because not all of our services were running with Docker. So that was like a big caveat for us. We wanted a homogenous solution for all of our services, at test and deploy time. So that's why we went with the Go Wait For It, which again, is inspired by that Bash script version. It's pretty consistent with what you expect from the vishnubob Bash script, but written in Go, as a Go executable, that you can bring in - well, with modification, currently - to your projects. Yeah. So those are the two main things, and some of the considerations we had.

**Neethu Elizabeth Simon:** Yeah, and just adding onto what Sam just mentioned... It was pretty simple to deploy and start our services, our existing services, without making a lot of changes after bringing in this new Wait For It package. We only had to make an additional fields change in our server structs to define the dependent services that it needs to wait for. But other than that, we didn't have to make a lot of changes in our existing code, so that was one other reason why we went with that particular package.

**Angelica Hill:** And I'd be interested to hear, Neethu, from you a little bit on how - whether with this package specifically or in general, how do you check that it's safe, and it's okay, and we're good to go to use it?

**Neethu Elizabeth Simon:** \[17:58\] Yeah, yeah. So for our projects in our team, we do make sure that the open source packages that we are adopting for our projects, or integrating, need to have a proper license, and they need to have some kind of a developer activity on their GitHub repos in recent times, to make sure it has been maintained, and it's not like a stale package out there.

So with that regard, we did see that there were two other packages which did kind of the same thing. One was this Wait For It, and then there was another one, which was a net-wait-go kind of a package... So as Sam mentioned, the Wait For It is based on this vishnubob Bash script, it is the Go utility to wait for the availability of a TCP host and port for these dependency services.

And this package had an MIT license, and it had some kind of developer activity on their repo, compared to this other one, the net-wait-go, it did not have a license, and I think from last two, three years there has been no updates or any PR reviews or comments or anything on that package. So for us, it was an easy choice to just go with the Wait For It package option that we had, just to minimize the risk on the project-wise.

**Samantha Coyle:** I actually saw this morning that there's another option out there... So it's like one of those things - I think it's a common problem, and so there's lots of different solutions out there for it. I think the third one is called Wait For X. I've just found that one today.

**Angelica Hill:** The beauty of technology, new solutions just keep on springing on up.

**Samantha Coyle:** Yeah.

**Angelica Hill:** Okay, awesome. So you've decided on your architecture, you're going with Go - which I'm just gonna keep on saying - and you've evaluated the package for use. How did you then move? And maybe, Sam, you could give us the granular detail, from saying "Okay, we want to use this", to then bringing it internally and getting it ready to be used?

**Samantha Coyle:** Yeah, that's a good question. So the thing about the Wait For It - I want to say Go package, because it just comes very natural to say... But it's not technically a consumable package. And so that's a thing with this repo, if you do choose to use the Wait For It package (I guess, I don't know), it's only using package main, which for all of us gophers that means we can't consume it, unless we modify it. And so what that meant for this project in particular is, unfortunately, I had to copy-paste their code.

So it was nice, because we've got all of this wait logic, and of course, giving proper attributions to the author who originated the repo, but it was really unfortunate, because it wasn't the Go natural way of creating open source packages such that other gophers can consume them, and contribute, and so forth. So that had a few side effects.

I mean, for one, it meant extra code for our team to maintain, and of course, modify, as we found little things here and there.

So one of the big things that I did was I copy-pasted in the logic, so that we could bootstrap all of our main.go's and all of our services to work with the logic. And as Neethu said, it was copy-paste modify, and then a minor modification to all of our server's structs to define all of our dependencies. So we can say, "Hey, wait for this service, wait for that service." So it made it really clean, but it made it to where I also had to add a wrapper around their logic, so that way it was more idiomatic to look at and to consume.

\[21:56\] So I think they just had functions called wait, and so I added a wait package, naturally, and I added a "4dependencies". So it was wait.4dependencies... Which is very natural and very easy to understand what's going on. So a few modifications and one other learning.

And this was so funny, because -- so I brought in the logic, added my wrapper, and my additional method, so it was pretty and nice to work with. And then our tech lead and Neethu, they were like" Hey, what about an error case? What happens if the service never becomes available? What do we want in that case?" And so I think it's really interesting thinking about "Do we retry? How often? What makes sense for our use case?" And everyone's different...

So what I found out in just bringing over the logic was that I didn't translate that aspect from the repo. So with the initial bringing in the wait logic for our services, it just hung... If your depending service never became available - and I don't think that's something you necessarily want, especially in, say, a production-ready environment... So I actually had to go back and add that timeout logic, because in the Wait For It repo that's on the CLI side of things; not necessarily translating 100% in the wait logic that exists right now.

**Angelica Hill:** I'm going through this process... I mean, you've spoken a lot about the modifications, the copy-pasting... Did you, if any, have any interactions with the core authors/maintainers? How did they support? What was the process there? Was that zero, you kind of just copy-pasted, do your thing, make it work? Or did you have any communication or interaction with them around "Hey, this isn't super-usable. What's up with that?!"

**Samantha Coyle:** Yeah, so for the interactions with the author, I contributed back to the repo, and opened a pull request in December, so a few months ago. And... Crickets. It was crickets for a few months. And then very, very recently, like within the last 10 days, I think, I got a response, and he was like "Hey, this is awesome. Thank you so much." And he commented on how it was very readable, and he was excited to try it. And of course, he found an issue running it on his computer, that

I haven't been able to reproduce yet. I need to look into it a bit more. But yeah, so it's promising. It's promising, and it's in the works, and I think it should get resolved soon.

**Angelica Hill:** Awesome. So going forward, hopefully other gophers may not need to do the copy-pasta shenaniganing, fingers-crossed that you had to go through. Okay, so in terms of that process, working with this non-package, may-try-to-make-it-packageable, what were the core kind of takeaways? What were the core things that you learned trying to implement this specific part of your overall application infrastructure? And a valid answer is nothing... \[laughter\] You just \[unintelligible 00:25:25.21\] through and made it work... But are there any other pearls of wisdom, so that if anyone else does need to do this - fingers crossed they won't with this specific use case, but with others - other advice as to how to approach? Is there things that you wish you had tried earlier, different ways to approach it? Or even just like, I don't know, pinging the maintainer so that it doesn't take many a month to respond when it's a production-based issue, or package you'd like to use?

**Samantha Coyle:** \[25:58\] So I think for me when it came to the implementation, like contributing back to the repo itself, a learning that I had - and it was just kind of nice... So I guess for me, it was nice coming from the perspective of me and my team were consuming the package, right? So we knew what we wanted out of it. We knew from a consumer side of things how we would want to interact with it. We knew for our use case we did want retries, and so for us, that meant we had the timeout where it would try once, and check if that dependent service is up and ready. But then you could define "retry three times." Or you could say, "Hey, retry at 15-second intervals", up to 45 seconds.

So it was kind of this weird learning of where do you draw the line in terms of how much responsibility should this package take on, versus what we needed. Because right now, on the PR, the author, who was asking me, because I added a max timeout... And for us, I think it was like a minute. So it would try on 15-second intervals up to a minute. And so the author said, "Oh, what's the point of the max?" So I guess the learning is like, yeah, where do you draw that line? And everyone's gonna want a different thing, so how do you find a good happy path?

**Neethu Elizabeth Simon:** Yeah, I can add on just that - so this particular whole Wait For It project, or the package that we came across was for a different project I think two years back, that we worked on... And I think that was the December, not this December. It was 2021 December that Sam I think worked on it.

**Samantha Coyle:** I need to look, I don't know...

**Neethu Elizabeth Simon:** I think, yeah. And after that, we had this new project, where we again adopted the same strategy. So just the fact that it is taking so much time to write -- she opened the PR, but it didn't get merged, and we had to copy-paste the same thing for a different project... I think that would be, I would say, the challenge with this particular package. But I do want to mention, one of the challenges we had with this big project - there were plenty of them...

**Samantha Coyle:** Oh, yeah.

**Neethu Elizabeth Simon:** Yeah, we did actually talk together in the Open Source Summit, just like recently, three weeks back, and it was all about this particular project, the different challenges and learnings we had on this project... So yeah, I would say this was like one piece of that challenge, compared to the whole range of challenges we had to go through to get this working.

**Angelica Hill:** I'm gonna assume everyone's gonna go check that out after this... But if they don't, for whatever silly reason, could you give us an idea, what were the other kind of challenges that you encountered? What were the other things, gotchas that you think it might be useful for people to learn from?

**Neethu Elizabeth Simon:** Yeah, definitely, definitely. So this is my favorite one, but I feel one of the challenges which projects like us, open source projects might run into, because we are dependent on other open source projects... So what happened was we finished with our development work and everything by last year, somewhere around August; we released our project, and then we did have a dependency on a particular project called Project AIR. It was developed by TIBCO LABS. And what they did was they managed the machine learning pipelines, helped in the visual composition of these pipelines, deploying them, and execution... That entire piece was not dependent on this particular software piece that we integrated with our project.

\[29:56\] Now, after August we get to know that TIBCO is getting integrated with Citrix, so they are canceling the development on this project... \[laughs\] And no more support on this project. And we had to act fast, and we had to pivot with what we wanted to do further. So we did decide to find replacements for these individual features that this particular project was giving us. And currently, our team is focused on replacing these individual TIBCO Project AIR pieces with other open source projects. And we are planning for a release of this project by the end of this quarter. So after that, it will be available on open.intel.com for anyone to just go and play around with. It should be there on the GitHub.

**Angelica Hill:** And it is that kind of need to be agile, and keep an eye out for any changes, depreciations etc. Is that something that you can plan for? Or is it something you just need to - if you're deciding to work with this kind of like open source packages that could change, you just have to accept things are gonna be changing, you're gonna have to drop everything and find replacements, as you say... Is it just like a - can you plan? Can you do anything?

**Neethu Elizabeth Simon:** But I think the more difficult question is what if you don't find replacements? Do you have enough time to spend to develop these from scratch? And how does that affect your project timelines, and things like that? Yeah, it's complex.

**Angelica Hill:** And is that really the solution, is either you just accept that it's going to be depreciated, and there isn't a replacement, and therefore you have to work out how are you going to build this internally...? Is that maybe a reason too when you're originally architecting your solution not to use open source? Like, what is the trade-off? And I don't have an answer, I just think it's an interesting question between if you're building the original solution, advocating to build it in-house so it's internally maintained etc. And maybe it's a longer deliverability timeline, versus let's use this open source package, or in Sam's case, non-package package. Like, is that something that both developers and just like broader engineering teams should be really thinking through before saying, "Oh, great, there's this open source package available. Let's use it"?

**Samantha Coyle:** That's what I've been realizing. So in my current role at Diagrid I get to work and help out with the Dapr upstream project, which is super-me, liek giving back to the community and becoming part of the community. But yeah, I feel like when you hear open source, it's like butterflies and rainbows, and it sounds awesome. But then, it's like, there's so much more to it... Like, considerations like what you're saying, and how to make sure it's ready, like ready-ready for release... And there's so much more to it than I think we give it credit sometimes.

**Neethu Elizabeth Simon:** Yeah. I mean, to me I think it depends from situation to situation, how complex is that software piece. I mean, for something like a small thing, maybe we can develop it in-house. But something which is like a big feature, like this pipeline composability and deployment - these things, if you're going to develop something, it will take a lot of development time. And the larger question to ask is "Is your customer going to wait? How long are they going to wait?" I think we should just leave that decision completely on the customer's requirements. Like, what do they want? And just make your decisions based on that, instead of trying to find the right answer to that question, I guess.

**Samantha Coyle:** So to add on to that, it's kind of down too to if the team has expertise. And so if you think about really niche areas, maybe like CV at the edge... Not everyone's gonna have the machine learning knowledge, plus the app development knowledge, plus - the list goes on. I mean, there is overlap between these different fields, but that's another consideration when it comes down to that.

**Angelica Hill:** \[34:11\] And on the note of experience, I kind of want to bring us semi-full-circle.... I know, Neethu, you said that you were not a full gopher, although I can debate what the requirements are for that at the start of this work... And then we had the potential OG gopher, Sam, vying for the title of her family... What was the learning curve like there? Like how challenging was it? Both for yourselves, and I'm assuming some other members of the team who maybe weren't as familiar with Go - what was that like, to learn and implement in a language you weren't super-familiar in?

**Neethu Elizabeth Simon:** What I like most about software engineering is this vast variety of software languages, and tools that you can learn. And I've been fortunate to learn some of this and not jump between languages. To me, getting started on Golang I think was pretty easy, I would say; it was not very difficult. Not as easy as Python... I do like Python, because it's very, very abstract. Honestly, Python is very abstract when compared to Go. And Go - I felt like Go is a version of like C in a Python

range kind of a thing. Because C is difficult to learn, right? And Go has some of those features that C has. And I feel like Go has made some of those C features a little bit more easier with Golang, like the concurrency, and multi-processing, threading, and things like that... Which is kind of difficult to understand or grasp if you're programming in C. But Go, I feel like it's a little bit more easier to understand the concepts, and just Go and implement. I think the biggest advantage of Go is this open source community support that's available. I feel like documentation-wise it's a lot better when compared to some of the other languages we have out there.

And I did say I have a favorite, which is Python, but I do believe that every language has its own reason why it's there. For some applications you need Go, and for some applications you need Python, and for some you need C. We still use mainframes in some of the applications... So they've not been able to replace mainframe. Some of the banking applications, if you see people -- those applications are still there. So every language has a reason why it's there, and as developers, we should be open-minded. I just feel that we should be open-minded and pick the right language for your use case. Your use case should completely depend on what you should go for. And in microservices development, Go is one of the best ones to use.

**Angelica Hill:** So to circle back to my original question, where I said "Why did you choose Go?", if you got this whole problem again to solve, would you still use Go?

**Neethu Elizabeth Simon:** Yeah, definitely.

**Angelica Hill:** Okay. I love that, Neethu, you -- for those who are listening to this... Neethu was like straight "Yeah!" Sam looked to the side and was like, "Hmm... Maybe..." \[laughter\]

**Neethu Elizabeth Simon:** I think Sam has found a different language, or something...

**Samantha Coyle:** No, no, no... So I was like "Oh...", because -- so in my current role, I get to work, again, with Dapr. So in Intel, because we're working with edge-based applications, we worked with Ajax Foundries for developing our microservices for that framework, and those SDKs. But now that I get to work with Dapr and I'm aware of it, now I'm like "What would this look like in a Dapr environment?" So that's why I was like "Oh..." Because that's also in Go. So I'm like -- I don't know.

**Angelica Hill:** \[37:58\] The options...

**Samantha Coyle:** Yes.

**Angelica Hill:** So my kind of final question before we jump into unpopular opinions, although I feel like the Python one was edging on the side of Unpopular Opinions, given we're on Go Time...

**Neethu Elizabeth Simon:** I know... \[laughs\]

**Angelica Hill:** I mean, as we all know, you're never really done when it comes to technology, when it comes to software engineering, when it comes to anything; it's just continual iteration, launching new versions etc. How are you thinking about the development, the iteration of this work, of this project going forward, post initial launch?

**Neethu Elizabeth Simon:** Are you asking about this specific product?

**Angelica Hill:** Yeah. You know, just your lives, how are they going to iterate?

**Samantha Coyle:** \[unintelligible 00:38:38.25\] end of life. \[laughter\]

**Neethu Elizabeth Simon:** Yeah, philosopher question...

**Angelica Hill:** I think we need a whole other Go Time episode if we're going to ask you that question... \[laughter\]

**Neethu Elizabeth Simon:** Yeah, so Intel does not make money by selling software. That's the first thing. They make money by selling hardware, and chips, platforms. So Intel is very, very big on open source community, contributing to open source projects... So the goal for our project as well, or for our team, is to build these open source sample projects - it's also called as reference implementations - so that our partners, who are solution integrators who work with us, they can take our solution as a base, and they can build their own custom solutions on top of that. So in general, that's the goal with most of these open source sample projects that we build.

Now, this particular project, it's a little different... We are planning to support it as long as we have a customer who is using it. So if we don't have a customer, then probably we are just not gonna support it any longer. But if we have a customer, we are able to deploy this in a real environment, their environment, we will be supporting the project going forward. That's the plan for this project.

**Samantha Coyle:** And Neethu, isn't the timeline to release the project -- that's end of quarter, right?

**Neethu Elizabeth Simon:** Yes, end of quarter is what we are aiming for.

**Samantha Coyle:** Cool.

**Angelica Hill:** Soft commitment to launch... \[laughter\] Well, so it's been absolutely a pleasure chatting about this project, and just general concepts here... I'm hoping that everyone who is listening now, who is going to listen in the future, is going to find it as interesting and thought-provoking as I did. It's a true pleasure to have you both on here.

Just final thoughts, if you wanted the Go Time readers... Readers? I guess you can read the transcript... Listeners, watchers, peeps of the world to take one lesson, learning, fact away - it can be a fun fact about the project, if you'd like - what would it be? I.e. if they're fast-forwarding the episode and they just hear this little soundbite, what would be the most important thing that you want them to take away? We'll go to maybe Sam first.

**Samantha Coyle:** I would say my one-liner would be there is so much more to open source than meets the eye.

**Neethu Elizabeth Simon:** It's difficult to follow that...

**Samantha Coyle:** Sorry, Neethu... \[laughter\] Yeah, I'm just gonna say microservices-based, Dockerized solutions are the future, I feel, because we are moving into an Internet of Things era, where more and more of these AI machine learning models are going to get integrated in the IoT field, and you need to have microservices-based, containerized solutions... And for microservices, I've been saying Golang is the language to develop on. Yeah.

**Angelica Hill:** Love it. I promise I didn't pay you under the table to say it. Okay, without further adieu, I will jump into Unpopular Opinions.

**Jingle**: \[41:49\]

**Angelica Hill:** Sam, what is your unpopular opinion?

**Samantha Coyle:** I feel the pressure... But I think my unpopular opinion would have to be Christmas year-round. I know some people are believers that Christmas starts the day after Thanksgiving. Some feel it's just the month of December. But I am a believer of Christmas year-round. That's my unpopular opinion.

**Angelica Hill:** And what would that look like? Are we saying like Christmas gift every day? Like, wear your jingle bells with pride every day? What does that manifest as?

**Samantha Coyle:** I mean, the gifts - at first that sounds nice, right? Getting a gift every day. But then I'm like, we don't need much to be happy. So I think it's the spirit; the Christmas spirit year-round. That's what I would go for. Because Go - we have a lot of spirit in our community, a lot of passion and excitement, as we see with our episode, hopefully...

**Angelica Hill:** \[laughs\]

**Samantha Coyle:** So I think Christmas year-round - you can't lose.

**Angelica Hill:** Okay. How would you categorize Christmas spirit? I'm actually quite intrigued by this; what are the characteristics of Christmas spirit? Are we thinking like the Elf of Christmas, little cheeky elf energy? Are we thinking the robust, cozy, comfy, warm hug of a Santa Claus vibes? What is--

**Samantha Coyle:** Yes. Samta vibes.

**Angelica Hill:** Okay. So I can't be a cheeky Christmas elf year-round...

**Samantha Coyle:** Maybe. \[laughter\] No, so I always like to say Samta, because I go by Sam... So it's like Santa Claus vs. Samta Claus... Year round... I'd be cool with that.

**Neethu Elizabeth Simon:** So you're the one who should be giving us gifts, right?

**Angelica Hill:** Yeah, so Sam should give everyone a gift... That's the conclusion of this. Sam is committing, on the podcast, to give everyone a gift in the world, every day. This is what I'm hearing.

**Samantha Coyle:** Stay tuned, yes.

**Angelica Hill:** Stay tuned. She will containerize and package things for you every day.

**Samantha Coyle:** Yes. Only if they're wrapped in Go wrapping.

**Angelica Hill:** I really love that we could make this Go-relevant. So anyway... I agree. Okay, so unpopular opinion - Christmas spirit every day, but it has to be warm, cuddly Santa... Or Samta Claus... Not cheeky Angela elf. Got it. Neethu. Unpopular opinion.

**Neethu Elizabeth Simon:** Yeah, so I'm a little bit more on the technical side... So 25, probably 20-25 years back, when I was in college, when we were learning about software development, we had this strategy that you should be architecting and designing 40% of your time, and then 20% you should be coding, and the remaining 40% is on testing. So recently I saw on Twitter, we are spending way too much time on testing, trying to fix all the corner cases... Instead, we should be figuring out how to handle these corner cases. How do we graciously fail, without pulling the entire application down? So I felt like that is an unpopular opinion, because I've seen a lot of corner cases when it comes to these AI/ML solutions; a lot of them - because it is a new field - a lot of models don't work as they do in production... So maybe we should be focusing more on how do we fail graciously, rather than trying to find a solution to all these corner cases, or test all these corner cases.

**Angelica Hill:** That's a thought-provoking comment, I think, more than an unpopular... I love it, though; it gives me a lot to think about. Okay, so the percentages need to shift, and we need to stop trying to make sure that things aren't going to fail, and start thinking more about when they fail - because they will - how are we going to deal with that in a graceful manner, not like a cheeky Christmas elf.

**Samantha Coyle:** That's hard. \[laughter\]

**Angelica Hill:** Well, thank you so, so much. Regrettably, we are out of time. I would love to have you both on to speak more about everything and anything really; you're both the joy. So please, have a great rest of your day, let me know if you have any other cool projects to chat about... And without further ado, we're gonna do a little Go Time outro.
