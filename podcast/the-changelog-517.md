**Jerod Santo:** We're here to talk about server side WebAssembly, right?

**Shivay Lamba:** Yes, yes.

**Jerod Santo:** This is the new hotness.

**Adam Stacoviak:** Is it the new hotness?

**Jerod Santo:** I think so. It's burgeoning, right? It's on the cusp.

**Adam Stacoviak:** It's right there.

**Jerod Santo:** So much so that I don't really understand it. \[laughter\] So inform us, school us, first of all why, but then - I think the how for me is also confusing. So yeah, why WebAssembly on the server?

**Shivay Lamba:** So let's kind of go back and explain very briefly what WebAssembly is. So WebAssembly is this bytecode, and it's a compilation target for a lot of the various powerful languages like Rust, C++. So it started as a browser technology, to kind of circumvent some of the issues that come with JavaScript...

**Jerod Santo:** Right.

**Shivay Lamba:** ...and because of the performance limitations of JavaScript, you could run other programming languages directly on the browser, with the help of WebAssembly, because browsers natively only support JavaScript. So you could compile other programming languages and functions in those languages, like C++ or Rust, and do these WebAssembly bytecodes... And you can run these WebAssembly bytecodes with JavaScript, to be able to run some more highly-performant functions.

But we saw that the uses of WebAssembly was not just limited to the browser, and we saw that because of some of the benefits that come with WebAssembly, and - those are primarily three of them. The first one is the portability. WebAssembly bytecodes are very small in nature; they have a very small blueprint, and very small size.

Now, the second one is the security sandbox model of WebAssembly. What that means is that the WebAssembly itself, the \[unintelligible 00:05:18.03\] bytecode cannot do anything on its own. So it's very -- I mean, it's not susceptible to attacks from viruses, or some third-party attacks. You use some other technologies such as WASI, which is WebAssembly System Interface, to be able to make API calls or interact with (let's say) the file system.

So it's a very secure sandbox model that is followed within WebAssembly. And these are primarily the biggest reasons why WebAssembly 3 is also being used on the server side.

One of the biggest areas where you see it being used is with the help of containers. If you take a look at the standard Linux containers, the Linux containers are usually very big in size, so they are large, and they also have a very large boot-up time. So if you are willing to spin up a container, it will take a lot of time to spin up. But WebAssembly containers, on the other hand, are much more smaller, and they spin up a lot more faster. So anywhere from 10x to 100x in terms of being smaller in size, and also in terms of the boot time.

So if you're having a lot of applications on the edge, on the server side, that are mainly resource-constrained, you're able to run these applications very quickly with the help of a WebAssembly container.

So these are some of the biggest reasons why we're seeing now WebAssembly not just on the browser side, but also picking up a lot on the server side.

**Jerod Santo:** Okay, so what technology is underneath the WebAssembly? Do you still need V8, or something? How is it running inside of the Linux operating system, or whatever it's running on?

**Shivay Lamba:** Yeah. So the best part about WebAssembly is that there's no underlying technology as such.

**Jerod Santo:** There's none.

**Shivay Lamba:** So WebAssembly itself is a dedicated technology in itself.

**Jerod Santo:** Okay...

**Shivay Lamba:** So the idea is that the bytecode that we generate, the WebAssembly bytecode - that is independent. It is portable. That means that it's not dependent on a particular system. So the same bytecode, you could technically run it on a Linux system, or you could run it on the browser. So the bytecode itself is independent.

Now, of course, it's a compilation target... So you take a particular function and you compile it. And again, it's a polyglot environment. That means you could use either let's say functional languages or even your scripting languages, like PHP, JavaScript, Python to basically compile it into the WebAssembly bytecode.

**Jerod Santo:** Weren't the initial implementations though inside of browsers? I think the browser vendors were the first ones to basically implement WebAssembly bytecode execution inside of their browsers.

**Shivay Lamba:** Yeah.

**Jerod Santo:** So then was there like an effort outside of the browsers to bring it to Linux or something, or how did that work?

**Shivay Lamba:** \[08:03\] Yeah. So just to kind of recap on the entire history, and I'll be very brief in that... So WebAssembly standards basically started with Assembly.js. So there's an alliance called the Bytecode Alliance, which basically started with Assembly.js, and this is primarily, again, focused on bringing some of the capabilities that you find with Assembly language, and being able to port that over to the JavaScript landscape.

But the Assembly focus, or people who are working on Assembly.js, they wanted to work on maintaining Assembly.js, but also ensure that it met with the W3C standards, with the standard web standards.

**Jerod Santo:** Okay.

**Shivay Lamba:** So that kind of led to the growth of WebAssembly as a tool. And there's of course a funny story why the name was kept as WebAssembly... Generally, it's not limited to web, or like the WebAssembly itself format is not very similar to Assembly.

**Jerod Santo:** It's neither web, nor Assembly.

**Shivay Lamba:** Exactly. Right. But that's the way it started.

**Jerod Santo:** Yeah, that's where its roots were, but that's not where it lives anymore. That's not what it is.

**Shivay Lamba:** Exactly.

**Adam Stacoviak:** That's why you say WASM; because at that point, you're not confused.

**Shivay Lamba:** Yes, exactly.

**Jerod Santo:** Right. Because then like "What's WASM mean?" You're like "Well, it's short for WebAssembly." \[laughs\]

**Shivay Lamba:** Because I think that's the number one preconceived notion that people carry with WebAssembly, is that it's related to web. So I was just last week at KubeCon, which is one of the largest developer conferences for Kubernetes and cloud-native technologies. And I would just say that WebAssembly was the central talking point in every conversation that I went. There were a number of companies that are today working on WebAssembly, and specifically server side WebAssembly. So I also gave a couple of talks on WebAssembly at KubeCon, and also over here at All Things Open.

**Jerod Santo:** Okay.

**Shivay Lamba:** And it's just there. It's growing. You're having uses of WebAssembly, server side WebAssembly in running databases, it's being used to run within Kubernetes, it's also running alongside Docker containers... Docker recently just announced their partnership of being able to run Docker with WebAssembly... So all of this is just showing that people are really appreciating and adopting WebAssembly in their day-to-day usage within the server side.

**Jerod Santo:** Okay. It's portable, it's secure, and it's fast; boot time fast.

**Shivay Lamba:** Yes.

**Jerod Santo:** So those are obviously huge advantages... Where would it fit in, or where would you say a use case of server side WebAssembly, or even with Docker -- like, what would a Docker-powered WASM thing look like?

**Shivay Lamba:** That's a really great question. Primarily, you could think of it in this way... Let's say if you are working with an IoT device - the IoT device will have very limited storage, and very limited compute power. Now, if you were to run a standard Docker container on that environment, again, as I mentioned, Docker containers will have a very long load time; they will spin up in a very long time. And what you want is a small blueprint, like for your runtime to be small... So that's where you could basically use a WebAssembly container. This WebAssembly container will be small, it will be fast to boot, and you could do your main inference - for example, it could be machine learning inference, or any type of inference, on the actual WebAssembly container... Whereas your standard Docker containers would still be able to handle anything related to your standard input/output, for example file management, or anything that you want. So all the network capabilities could still be managed with the help of your Docker containers.

So the \[unintelligible 00:11:43.23\] looking at is that you're not -- basically, the idea is that you're not replacing your Docker containers with WebAssembly, but they are meant to basically run side by side.

**Jerod Santo:** Interact with each other.

**Shivay Lamba:** \[11:56\] Yeah. Where they basically help and work well together with each other. Your fast boot times, especially for running specific functions, are being handled with WebAssembly, and your Docker containers are doing all the standard operations that you'll typically have in such kind of a system.

**Jerod Santo:** Yeah. So we see a lot of people talking about this in the edge compute space... We know Vercel is talking about it, we know that Deno, for example - you know, Ryan Dahl has written about... I can't remember what his post was, but it was basically like web containers, or something; it was the same concept. So that's an obvious place, where the fast boot time is very important for them...

**Shivay Lamba:** Definitely.

**Jerod Santo:** ...because your serverless functions have to be there, and you don't want them to be cold starts all the time...

**Shivay Lamba:** Yes.

**Jerod Santo:** So they're getting gains there...

**Shivay Lamba:** Yeah. And one of the examples that you mentioned was recently announced, Vercel Edge Functions, which again, use the Vercel Edge Runtime. And that's mainly powered by V8 and WebAssembly. And again, the main idea is the small blueprint of WebAssembly.

One of the other areas that we also see, especially on the serverless function side, is that typically if you're having, let's say, a serverless function, you might use AWS Lambda, Netlify Functions, or even Vercel Functions; there typically you'll have your programming languages like Python or JavaScript that you're writing your serverless functions in.

**Jerod Santo:** Yeah.

**Shivay Lamba:** But if you're writing your functions in WebAssembly, again, one of the biggest benefits that you get is the portability. You're not dependent on a particular environment's dependencies that will make your serverless functions have to change based on their dependencies. Very similar to how the VMs and container concept came into the picture.

So that's where WebAssembly's serverless functions will also play a role. And of course, you get the other benefit of the WebAssembly security sandbox model, that helps you to secure these functions.

So you just create one function, and you can deploy it anywhere that you want. And that's how the Vercel Edge Functions also work - you have these edge locations, and whichever is closest to your area, dynamically, those Edge functions will spin up in that particular area, whichever is nearest to you. And you are using the power of WebAssembly to do that compute quickly.

**Jerod Santo:** Yeah. It's super-fascinating that this technology that began in the web browser might actually be more relevant outside of it. Like I said, this is the beginning of this phase; huge excitement at KubeCon, so the builders are starting to build things... We'll see downstream applications here coming up; Vercel Edge Functions is a good example.

WebAssembly in the browser though - has it ever really delivered on those promises? You know, Figma really knocked it out of the park...

**Shivay Lamba:** Definitely.

**Jerod Santo:** ...but where was the Figma-inspired followers of that technology? It seemed like Figma was kind of a standalone of like "Here's a really rich -- you know, the Holy Grail of a Photoshop-esque thing in the browser, that works really well...", and they did it with WebAssembly, right? And then like -- what else was going on in the WebAssembly space in the browser? Cool stuff?

**Shivay Lamba:** A lot of cool stuff. Actually, one of the talks that I gave at ATO was also around TensorFlow JS, which is a machine learning library for the web. And one of the great ways that you can actually use TensorFlow JS is doing the machine learning inference on the web browser.

There are a number of different backends that are supported, and what I mean by these backends is not like you're a service \[unintelligible 00:15:12.07\] but what you can use is things like WebGL, and WebAssembly itself. So TensorFlow JS has a WebAssembly support, so what you can use is - if you use the WebAssembly backend, you could use the CPU or the GPU resources of your own system, and do those machine learning inferences much more quicker in the web browser.

So that's probably the biggest areas where WebAssembly on the browser side is being used. Apart from that, there are a number of different companies, like Adobe, which uses it on the Photoshop on the web browser Microsoft Flight Simulator... And then there are a bunch of online video editors that use WebAssembly for doing very quick rendering of the videos.

\[15:57\] So those are just some of the examples... But one thing that I like to touch upon is... So the CNCF, which is the Cloud Native Computing Foundation - they conducted a micro-survey a few months back on the state of WebAssembly. And to be honest, the results just came out just before KubeCon. And you could say that in terms of the percentage of the usage of WebAssembly inside the browser and outside the browser, today more people are using WebAssembly outside the browser than inside the browser.

I'm not entirely sure if the exact metrics... Again, you can probably go and check out the CNCF WebAssembly forum, and you'll be able to find those metrics. But it's definitely true that WebAssembly has grown a lot more than just being a web technology, and now as a full-stack technology probably... Because you see it across various spectrums, not just like frontend, backend, and even databases.

**Jerod Santo:** Very cool stuff. Well, where can people go to learn more?

**Shivay Lamba:** Okay, so there are a bunch of different links that I'd like to share. So the first one is definitely visit the WASM.io. That's kind of the landing page for everything if you want to get started with WebAssembly. Then we have the Bytecode Alliance, which is primarily the governing body that determines and comes up with new proposals for WebAssembly. So if you can, join the weekly meetings that go on there.

Now, specifically if you're looking to get into the WebAssembly on the server side, on the cloud native side, there are a number of channels in the CNCF Slack, which is the Cloud Native Computing Foundation's Slack. So if you are more interested on the server side and on the cloud-native side, then you can definitely join those.

And apart from that, there are a number of different \[unintelligible 00:17:39.29\] courses that are free of cost, that you can definitely take a look at in order to understand what exactly is WebAssembly.

I think one of the biggest developer experience issues that people usually find is they don't understand the WebAssembly format. So again, you'll find it very similar to Assembly language, but the thing is that you don't have to write the code in WebAssembly format. It's mainly served as a compilation target. So that means - just know the basics of how Assembly language works, internally how operating systems work. If you have that decent amount of knowledge about those, then you'll be able to capture the essence of how WebAssembly basically works a lot better.

So I definitely recommend to have at least basic knowledge about these concepts before getting started with WebAssembly.

**Break:** \[18:27\]

**Jerod Santo:** Alright, we've got Yishai Beeri here from LinearB. And Dev Interrupted...

**Yishai Beeri:** Yes.

**Jerod Santo:** ...which is your podcast.

**Yishai Beeri:** That's right.

**Jerod Santo:** Welcome. Welcome. Welcome. Tell us what you're up to with LinearB.

**Yishai Beeri:** So LinearB is a startup that's focused on helping developers and dev teams improve, basically looking at the data in your development process, your Git, your JIRA, understand what's holding the teams back, where are the bottlenecks... For executives, we show them dashboards, metrics, DORA metrics, and ways to manage improvement. And for developers, we provide a real time alerting engine. We have a smart bot called WorkerB that lets developers know about what they need to do right now to push forward their work.

**Jerod Santo:** Okay. So what is the thing you've found holding developers back most of the time? What's the big one?

**Yishai Beeri:** The big one is the code review process. The PR, or MR, depending on your Git flavor.

**Jerod Santo:** Right. Merge request, pull request, code review...

**Yishai Beeri:** Yeah. So we've found --

**Adam Stacoviak:** Code reviews is pretty in the middle there.

**Jerod Santo:** Universal?

**Adam Stacoviak:** Yeah, it's universal.

**Yishai Beeri:** Yeah. And we've found that, on average, a change could wait for two to four to six and beyond days, just to get reviewed...

**Adam Stacoviak:** Really?

**Yishai Beeri:** ...and eventually merged. I'm talking about...

**Jerod Santo:** Days...!

**Yishai Beeri:** ...days and weeks.

**Jerod Santo:** Weeks!

**Adam Stacoviak:** Wow...

**Yishai Beeri:** Yeah.

**Adam Stacoviak:** Well, we were just talking about queues... And that's a queue, right?

**Jerod Santo:** Once you're queuing, now you're just --

**Yishai Beeri:** It's both a queue, but it's also -- there's a human that's eventually going to review your stuff. It's not the only thing they're doing.

**Jerod Santo:** Oh, totally.

**Yishai Beeri:** And they're not always aware of the queue. So they're not efficiently working in the queue, but also, today, in most organizations, there's like a single queue. All PRs look the same, they all get the same treatment. Even if it's a one-liner change to your documentation, or a complete refactor of a sensitive system, it's gonna get the same treatment. Someone has to review, for a principal, or something, and then the queue becomes stupid. So one of the things that we're pushing is a system called GitStream, which is about automating and providing some routing and automation for your PRs. So as a team, you can decide which PRs are automatically approved... So ship it, and then tell the team or show the team, maybe someone wants to take a look... Maybe some PRs need three reviewers, because they're touching sensitive areas.

So it's like a rule file that you put in the repo, some GitHub Actions on top of that to automate the work... And then you stop doing the reviews that you should not be doing, and you have time to focus on the reviews that matter.

**Adam Stacoviak:** \[24:10\] Well, that's the question... What's the point of a code review?

**Yishai Beeri:** There's... Yeah, keeping with --

**Adam Stacoviak:** I mean, I obviously know what the point is. I mean, I'm not naive. But what's the point as an organization?

**Jerod Santo:** Of that particular code review.

**Adam Stacoviak:** Right. Why do organizations go through the process of code review? What's the ending goal of that exercise, to review the code, obviously?

**Yishai Beeri:** I'm thinking of like three main reasons. One is keeping the code quality up, making sure that code structure, decisions made in the architecting the code or the change, and sometimes finding bugs - that's one reason people do code reviews. The other is to make sure more people in the team understand the codebase, and there's not like one owner, or only the person who wrote the code knows what's happening... So it's a way to spread knowledge. It's a great way to onboard new developers to the team, or juniors, because you can coach them through code reviews, and then eventually have them review code of others as they grow into the team.

So in LinearB, we use that metric to really show how you've successfully onboarded someone. If they're starting to do code reviews for others in a substantial scale, that's a successfully onboarded engineer.

**Adam Stacoviak:** So should every pull request or merge request require code review? You're saying no, basically, on this rule file.

**Yishai Beeri:** Yeah, I'm saying you can be smart about it.

**Adam Stacoviak:** Okay.

**Yishai Beeri:** So the principle for code reviews - yes, the quality... Get some knowledge spread, get more people to own. But not every change requires the same level of review, or even a human review.

**Jerod Santo:** What kind of rules can you have, such as amount of code touched, maybe specific files that are modified, or...?

**Yishai Beeri:** Yeah, the file types, specific files or paths, the size of the change, the nature of the change... We have teams that default to two reviewers, because they're in a regulated industry, and they're using the rules to drop down to just one reviewer, in some cases. Like, okay, if it's a documentation change, or a change to CSS, maybe I don't need two reviewers. Or maybe I can auto-approve, and rely on my tests and other automated systems to make sure there's no really bad thing going into my codebase.

So it's a combination of the complexity, the size, the types... And you can connect this to basically any test. So if you have some custom logic that will look at the code change and decide, "Oh, this is a change with some label", you can use that as an input to say, "Okay, the rule now is to do something."

We have a team that's using this to -- if a developer is using a deprecated API internally in their codebase, then automatically request changes. So the GitStream bot will tell the developer "Hey, you should change your usage to avoid the deprecated API." So that's a specialized kind of use case.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Cool stuff. Going back to the blocking or the queuing aspect of a code review... I'm curious if you've thought about or you've worked at all with stack diffs in order for people to move on in their work, while they're still waiting for code reviews of certain things... Is this something you guys have used, or advocated for, or have tooling around?

**Yishai Beeri:** So we look at code reviews, there's like two types of problems. One is the queuing, and waiting on humans, waiting on a process, which we solve for directly... And typically, developers move on to other code, open another branch and do another feature, or another bug... So they're not blocked, but their work is blocked.

\[28:11\] This PR that I just opened may need to wait for a few days; I can still move on with other stuff, but my work is now delayed, and I'm not learning, and there is a context switch which is going to be expensive. If I get the review back in three days - oh, my mind is already elsewhere. I need to reload all that. So that is something we solve for directly.

The other kind of problem is those accumulated merge conflicts... So all these solutions around stacking those, like merge queues, now GitHub is playing in that area as well... So that's not something we solve for directly. This is more on managing the order in which things get merged, and the complexity of merging multiple changes. We're more focused on the human problem, not the technical, like diff problem.

**Jerod Santo:** Gotcha.

**Adam Stacoviak:** So what if the human isn't there? You know where I'm going with this, right?

**Yishai Beeri:** Like automated --

**Adam Stacoviak:** GitHub Copilot or something like it will eventually review our code, right? It writes a lot of it, tests... I know a lot of people who have all their tests written by GitHub Copilot. So what happens when the human isn't there anymore for code review?

**Yishai Beeri:** So I think it's a good thing. If you have automated, even basic reviews... We already have tests today, right? We have quality gates, and linters, and whatnot, that are kind of a code review.

**Adam Stacoviak:** Right.

**Yishai Beeri:** Some teams still manually do style comments, and request some changes...

**Jerod Santo:** "Double quotes, not single quotes!"

**Adam Stacoviak:** Well, I know for every pull request for him, I go and take him from four spaces to two -- nah, I'm just kidding.

**Yishai Beeri:** Yeah.

**Jerod Santo:** You'd better. You'd better.

**Adam Stacoviak:** \[laughs\]

**Yishai Beeri:** I think going from human to machine in that area is great, not just because of the efficiency, but also it takes away the sting of having to quabble about this... There's a well-defined standard, and the machine just fills your stuff.

**Jerod Santo:** Yeah.

**Yishai Beeri:** So I think simple code reviews done by Copilot, or similar AI that, "Oh, I'm guessing this needs to change." That is a good thing, and it frees the developers to focus the review time on more advanced things, like "Okay, what's actually going to happen?" Or you forgot to make that change in the other repo, because only together they would work. Dependencies, and complex -- I think humans are not going away, but they can move up the complexity scale, and leave --

**Jerod Santo:** It's kind of like a pre-commit hook; before you actually open that code review request, you've already had the robots code-review it for you, before you take the human step. So maybe go back to the cycle, and write some more code, because GitHub Copilot or Tabnine or whoever said, "Hey, man, this code sucks. Fix these seven things."

**Adam Stacoviak:** "This is bad code."

**Jerod Santo:** So now you're just not blocking that code review, but eventually, you gotta get back to it.

**Yishai Beeri:** I think eventually the divide between your local code and the PR can go away, right? There's no real difference between a pre-commit hook and tests-running on a GitHub Action once you have created a PR. I look at this as a continuum, and it's about how long does the test take to run. Is it something that can run as I type in the IDE? But it has the same purpose, right? The same meaning.

**Jerod Santo:** Right. I was using pre-commit hook like metaphorically, meaning "Things I do before I actually request a code review from my boss", or from whomever.

**Yishai Beeri:** Right. So before you invoke a human...

**Jerod Santo:** Yeah, exactly.

**Yishai Beeri:** ...you've got to automate stuff. And you know, you probably should not be reviewing code that does not pass the tests, and is failing on the \[unintelligible 00:31:45.15\] stuff. Because you want to be --

**Jerod Santo:** Right. You're kicked to the curb for doing that.

**Yishai Beeri:** Yeah.

**Jerod Santo:** Literally, to the curb, sometimes...

**Adam Stacoviak:** "You're out of here!" \[laughter\]

**Yishai Beeri:** \[31:57\] Once you have humans involved, there's also a lot of smart automation or semi-automation that you can do. "I found you the best reviewer based on the code changes, and I assigned a PR to that person." What if they're not responding quick enough, or they're out? Maybe they're on vacation a couple days. So today, as the PR owner, you have to manage and chase people, and if a system, a scheduler took that away from you and said, "Okay, he's not responding. I have the next one lined up. Their review queue is pretty shallow. I can get them to respond", this person is busy, and has 10 reviews lined up... I'm not going to bother him. That kind of management is something humans suck at. Only code and automation can be really good at that.

**Jerod Santo:** Automation, yeah. That's cool stuff, for sure. What about when it's actually on the code reviewer's desk? And they're ready to work on it? Is there anything we can do for them, like in their work, while they're actually reviewing, to help them be more efficient, more effective, get it done faster etc.?

**Yishai Beeri:** Yes. So the first smart thing you can do is before they start to work, give them context about those reviews in the queue. Because one review is going to take them five minutes, and the other review is going to take them 40 minutes. So we have a feature called "Estimated review time."

**Jerod Santo:** Knock out the easy ones...

**Yishai Beeri:** In the notification you get for a code review, we already tell you how long it's going to take you. Some machine learning, lots of data... So if it's a 30-minute thing, you're not going to do this between meetings; you're gonna set some time. If it's a two-minute thing...

**Jerod Santo:** Get it done. That's cool.

**Yishai Beeri:** \[unintelligible 00:33:41.24\] So context is key for making smart decisions about when to review. And then for inside the review, I think find a smart way for the issuer to leave some breadcrumbs on how you should be approaching this. I'm talking about with complex reviews, not the simple PRs. So can you record like a mini guide, or leave, like "This is 1, 2, 3, 4, 5. These are the areas, that's the order you should be looking at the changes", and maybe some small notes.

**Adam Stacoviak:** Some sort of synopsis. Some sort of summary, like "This is why I wrote the code I wrote."

**Yishai Beeri:** Yeah. Developers don't like to document.

**Adam Stacoviak:** "And this is why you should like the code I wrote." Right?

**Yishai Beeri:** Yeah. So documenting is great, but a lot of developers don't like to do it.

**Jerod Santo:** A lot of extra work.

**Yishai Beeri:** You have PR templates, you have all of that... That's great. But can I maybe leave some in-line comments, saying "Number one, number two, number three", and then get some sort of --

**Jerod Santo:** Who's "I"? The coder who wrote the code?

**Yishai Beeri:** The coder leaves some breadcrumbs, thinking about the reviewer, and at least the order and the process that they're going to go through.

**Adam Stacoviak:** Right.

**Yishai Beeri:** That could be interesting, to help the reviewer get into what I'm doing, and understand what I was going for.

**Jerod Santo:** Right. So now the code review is done, are we done?

**Yishai Beeri:** So code review done for me means the PR can get merged. So yeah, when we're done with that, you're in most cases now up to your CD, or deployment schedule. That's either completely owned by the developers, and then it's typically continuous, or it's out of their hands, and then it's going to be waterfall. But they can't control it, so at least measure it, so you know how long it takes for code that got merged to make it to production, or to make it to staging, so you have a notion of the delay and how much you're paying in delayed learning cycles, because my code has to sit for three weeks before the release is cut, and customers can actually enjoy it. But in many cases, it's out of the developer's hands by that time.

**Adam Stacoviak:** How would you summarize what you do then? Is this fair to say -- would you say, as LinearB, "We help humans successfully review and merge code efficiently"?

**Yishai Beeri:** \[36:06\] Yes. I mean, we help developers, which is a type of human mostly... Usually...

**Adam Stacoviak:** Well, you said humans... I'm back onto humans, because we were talking about robots versus humans; so I guess at that basic level...

**Yishai Beeri:** They're humans.

**Adam Stacoviak:** Yeah, sure, of course. Developers. Would an AI be a developer, though?

**Jerod Santo:** Not yet.

**Yishai Beeri:** Not yet.

**Adam Stacoviak:** Okay. I just wonder --

**Yishai Beeri:** So yeah, it's about the human process.

**Adam Stacoviak:** We're getting into semantics here, but the point is --

**Yishai Beeri:** More than the machine process, and helping the team deliver faster, more consistently, have less days that suck with context switches and blocks... So it's developer experience, feel better as a developer, because developers like to produce and like to get their code actually...

**Adam Stacoviak:** Out there. Of course.

**Yishai Beeri:** ...out there. So better developer experience, better efficiency and productivity as a team... That's what we do.

**Adam Stacoviak:** Now, let me ask you one more potential curveball... What happens when most of the code reviews are not done by humans anymore? Will LinearB have to pivot?

**Yishai Beeri:** No. So code reviews are just part of what we look at. We look at the whole cycle. But when more gets automated, you're left with a more difficult code reviews, the complex ones, and that's still a human process thing. So you will still want to measure, and you will still want to make sure you're helping your humans do the right thing and remove context --

**Adam Stacoviak:** I like this humans talk - helping your humans.

**Yishai Beeri:** ...remove the context switch costs and pain... So when that future happens, we've moved the problem to an even more lucrative, complex code review part. Okay, we've removed the simple ones, that --

**Adam Stacoviak:** Even more lucrative. So you could charge more for harder code reviews? How is it more lucrative, I guess the better question?

**Yishai Beeri:** More lucrative as a problem to solve.

**Adam Stacoviak:** Okay, right.

**Yishai Beeri:** Like, that part is not going away.

**Adam Stacoviak:** Because it's worth more, it's more valuable, so if you can solve a problem, you make more, potentially.

**Yishai Beeri:** Yeah. Today, I would say the first step into getting more efficient is to get rid of the meaningless, or stupid, or very, very simple PRs that you don't really need to review. That's gonna free up a lot of your time to review and be more efficient about the heavy ones. Then the next step is to be smarter about your scheduling and your decision-making in those code reviews.

Another critical thing that can help the team is knowing when to go sync for a code review, instead of doing async, like, comments on the pull requests. There is a time when you say, "Okay, now I need to pull the -- it's going to be more efficient if I pull the developer, and we jump on a call, or grab a room and figure this out in a sync mode." So all of this tooling and decision support for the complex PRs - there's so much more to do there.

**Jerod Santo:** Alright, here comes the slider... What would you say if I said, "Cancel code review. Everything goes in. Trust your employees or team here."

**Adam Stacoviak:** I was almost going to say that... Like, just ship it and see what happens, right?

**Jerod Santo:** Why don't we just call it all off?

**Yishai Beeri:** Yeah... Just use tests and commit directly...

**Jerod Santo:** Testing... That's right...

**Yishai Beeri:** Commit to master...

**Jerod Santo:** Quick changes, ship it, fix it in production.

**Yishai Beeri:** Yup. I love it. Two problems. One, this works well with very strong teams. So does pair programming, right? Let's just pair-program; no code reviews. If you have a consistently strong team, it can work. In reality, it's hard for all of the teams to get to that level and maintain that. The number of developers worldwide is like doubling, and it's still behind the needs. By definition, you're going to have a lot of juniors.

**Jerod Santo:** Yeah.

**Yishai Beeri:** \[39:53\] That's not going to be going away. More than half of your workforce will be juniors, for any foreseeable future. So code reviews and pull requests - you know, that started as an open source thing for very, very loosely-coupled, distributed teams, but it became the gold standard, or the commonly-accepted standard for any team doing software development, except for the very, very high-end teams that are "Okay, I'm good enough to work without it."

So losing pull requests - that's not going to happen. They're here to stay. But starting to pull out those pull requests that can go into that mode, and be shipped first, asked later - there's a Ship/Show/Ask model, there's a bunch of options... And it's gonna be a fraction of your PRs; not everything. And now the smart thing is "How can I be intelligent about which fraction and which PR gets to go into the fast lane, and which PR gets to go through--"

**Adam Stacoviak:** "Which ones cause issues in production?"

**Yishai Beeri:** Yep.

**Adam Stacoviak:** You know what I'm saying? That's how you figure it out.

**Yishai Beeri:** Also, maybe look at who's doing the coding. If this is a new person on the codebase, give this a different treatment than the person who wrote everything, in and out. It's not about trust, it's about managing your resources to be the most effective.

**Adam Stacoviak:** Right. Making developers, human developers, more efficient. I love it.

**Yishai Beeri:** Yup. And happier.

**Adam Stacoviak:** And happier.

**Break:** \[41:23\]

**Guy Martin:** So I saw the GitLab person doing this, so I've gotta take selfies with you guys, too.

**Jerod Santo:** Please do.

**Jerod Santo:** Cool.

**Adam Stacoviak:** I was behind the mic, I think. I was hiding.

**Jerod Santo:** The third one you got you.

**Adam Stacoviak:** I did, that one. Open... Scene... Complete it for me.

**Guy Martin:** Open Scene...

**Adam Stacoviak:** Isn't that -- OSC?

**Guy Martin:** No, no, no. Universal Scene Description.

**Adam Stacoviak:** Universal Scene Description. USD.

**Guy Martin:** USD.

**Guy Martin:** USD.

**Jerod Santo:** United States Dollar...

**Guy Martin:** Not United States Dollar...

**Adam Stacoviak:** USD... This is interesting, because this came out of Pixar, right?

**Guy Martin:** Yeah, it was an open source project that came out of Pixar.

**Adam Stacoviak:** And it's permissively licensed.

**Guy Martin:** Yeah, permissively licensed, so an open source project... And they built it and open sourced it because they needed a way to describe 3D worlds for visual effects, right? You need to describe the scene, the materials in it, objects, all that stuff. And I guess about 2017-2018 NVIDIA started looking at this and said, "Hey, we have this thing..." This is long before I joined. I've been there eight months. And they had this thing that you need to say, "Hey, we have a simulation engine, right? We want to be able to define a full 3D representation of a factory, or something in the real world, and USD is this great way to do this. Right? So let's not reinvent the wheel, let's go use this thing..." And then since that time - you know, I've been hired, I've been there eight months, and I'm helping them kind of understand... I have a background in open source, open standards, used to run an open standards body called Oasis Open for a couple of years... And so I was hired to kind of figure out how we do a better job of understanding how to work with USD, right? We're doing a bunch of work contributing it back, but then there's conversations around "What does USD look like, and how do you potentially make it the HTML of the 3D web, or 3D world?" We all know HTML, HTML makes total sense, it's a standard that everyone can agree upon, it doesn't matter what the browser is... USD can be the equivalent to that. And I think that from an open source and open standards perspective, there's a lot of value in beginning to understand what this looks like.

**Jerod Santo:** So at this time, is NVIDIA the only organization using USD?

**Guy Martin:** Oh, no, USD is widely used. It's used the visual effects industry, a lot of other people are looking at it and going, "Hey, this makes a lot of sense", and figure out how we kind of look at this and understand what this looks like.

**Adam Stacoviak:** You're a user of it, right?

**Guy Martin:** Absolutely.

**Adam Stacoviak:** NVIDIA is a user of USD, you're in charge of it... But you mentioned one of the issues they had is that it's got such -- I don't know how you describe it... Like big companies, large dollar company behind it - they have a hard time letting contributors contribute back to it. So it's open source, right?

**Guy Martin:** No, I mean, they do contribute back.

**Adam Stacoviak:** But you said it was challenging though. It was one of the challenges.

**Guy Martin:** \[45:58\] Well, it's an open source project, and you need to make sure you balance the needs of all the companies involved. And I think that's kind of where from an open source perspective we need to think about what is standardization and what is open source -- how do you marry the best of open source and open standards? It's a lot of what I spent my time on at Oasis, is understanding the intersection between open source and open standards... And I was telling Todd the other day, our organizer, Todd Lewis here, "Hey, we should be thinking more about this maybe for 2023 for ATO, what is the good intersection of open source and open standards?" Because we've sort of -- as an industry, a lot of us go and say "Open source is great, and... Oh, gosh, standards... Ugh, I've gotta go through the long process of getting something standardized." And frankly, having been involved in the standards side, I can totally see both perspectives of how open source people go "Oh, standards isn't fast enough." The standards people go, "Yeah, open source people - you have no staying power. You don't kind of understand that you've got to be in it for the long haul, and you've got to be making decisions that are going to live for decades", right? So I think finding that balance is going to be interesting.

**Jerod Santo:** So what is USD in its essence? Is it a language? Is it a specification? Is it a file format?

**Guy Martin:** It's not a specification now, and it's both a file format and a runtime. So think about -- take the visual effects perspective, right? You need to define a scene, and you need to define everything that's part of that scene; all the objects in it, what all the materials are, what all the lighting is, all of those things. And the things that NVIDIA has been looking at and has added is kind of the physics the physics part of it. I mean, if you think about a visual effects shot, in a movie, probably there's some cases where you want realistic, physical reactions to things, there are some cases you want completely unrealistic physical actions.

**Jerod Santo:** Totally.

**Guy Martin:** In the Omniverse thing that NVIDIA is building, we're looking at trying to make sure we have exactly -- and we have a physics engine that gives you exactly realistic, physical responses. So imagine, you have a factory, and you've got a bunch of shelves - and I think there was a demo that we showed of this - and somebody accidentally pushes over a shelf... You want all of the falling objects, you want everything to react in actual realistic physics, because you want to be able to simulate these things. So the thing that Omniverse is really built for, and kind of where we think USD is extremely valuable, is the ability to take any sort of digital content creation tool, like Autodesk Maya, or Houdini, or Blender, and have them all work together at the same time, so anybody can be in their own digital content creation tool, and you can all be working at the same time. And you can be working on a scene, everyone in their own tool, and have it actually built and rendered in real time, so you can see what's going on.

The other thing we talk about with Omniverse is it kind of gives you the superpower. So if you imagine building a full factory... And we've done some work with - announced has been BMW, and others that we're working on building full factories... Basically, simulating a full factory. And I mean everything, from the way it looks, to the way robots behave in it, to the way humans behave in it... You have this ability, if you actually get that to work and you get IoT sensors in the robots and everything else, to be able to say, "Okay, something happened two months ago, or a day ago." You can go back in time and say "What happened? What were the conditions? What was everything that was going on?" and sort of be able to do a root cause analysis.

**Jerod Santo:** Okay.

**Guy Martin:** But something that the Omniverse also gives you is the ability to go forward in time and say, "Let's simulate all these different conditions that can happen." And if you think about it, it's not just factory floors, but autonomous driving, which NVIDIA is doing work on, right?

**Jerod Santo:** Sure.

**Guy Martin:** If you want to be able to simulate for autonomous driving a child running out in front of the car - obviously, you don't want to do that in real life...

**Jerod Santo:** Right. Anything that's expensive to test...

**Guy Martin:** ...or dangerous, right?

**Jerod Santo:** Yeah, exactly.

**Adam Stacoviak:** \[unintelligible 00:49:45.28\]

**Jerod Santo:** Yeah, yeah.

**Guy Martin:** And you think about the different conditions right? You want to be able to test for autonomous driving that is as safe, you want to be able to test "Okay, that child running out in front of the car, in perfect spring conditions", you want to be able to test in various lighting, and in various weather conditions... And really, the only way to do --

**Jerod Santo:** Right. When the sun's coming out right over the horizon...

**Guy Martin:** \[50:06\] Right. And really, the only way to do something like that is what we call synthetic data generation. So it's actually having a computer generate all these conditions, and be able to test AIs...

**Jerod Santo:** Yeah.

**Guy Martin:** We kind of sometimes say that something like the Omniverse is almost like a Holodeck for AIs, right? You want to be able to test AIs and all the conditions that potentially are going to happen... And you're not gonna be able to capture all that data, realistic data; you've got to generate a large portion of it.

**Adam Stacoviak:** Is that one use case of Omniverse, or is that actually Omniverse?

**Guy Martin:** Well, I mean, Omniverse, is built to support use cases in gaming, it's built to support use cases in autonomous driving, it's built to support basically full-fidelity visualization of 3D worlds.

**Jerod Santo:** So is that an NVIDIA product?

**Guy Martin:** Yeah, Omniverse is a product that we have.

**Jerod Santo:** Okay. It's not just a concept.

**Guy Martin:** No, no, no.

**Adam Stacoviak:** It's a real thing.

**Guy Martin:** It's a real thing.

**Jerod Santo:** I thought maybe it was like NVIDIA's version of the Metaverse, but they want to call it the Omniverse...

**Guy Martin:** Well, no... I mean, that's right -- Metaverse is a hype term, right? Metaverse is a hype term. We all know this.

**Jerod Santo:** Omniverse is like the Metaverse but you can use--

**Adam Stacoviak:** What did you call it, the universal Metaverse?

**Guy Martin:** No, industrial.

**Adam Stacoviak:** Industrial Metaverse, that's right.

**Guy Martin:** So GTC is our big tech show, and we did a bunch of stuff at GTC, and also at SIGGRAPH, we did a big keynote at SIGGRAPH where we talked about how the industrial Metaverse, the concept of the industrial Metaverse is going to be something that is as important, or some might say more important than the gaming stuff. And I love games, guys.

**Adam Stacoviak:** Which is a great thing. It's R&D for, like you said, expensive things. A good example might be Event Horizon. Remember that -- or not Event Horizon... That was the movie, I think it was called --

**Jerod Santo:** Yeah, Event Horizon.

**Adam Stacoviak:** That's the scary one, never mind...

**Jerod Santo:** Deep Blue Sea? Deep Impact.

**Adam Stacoviak:** Deeper Horizon, I believe... Well, whatever. It was that Louisiana oil spillage down there... Like, to simulate what went wrong, and things like that - that would be something that you might want to do... Exxon Mobil - like, you would want them to simulate how they react like this...

**Guy Martin:** Exactly.

**Adam Stacoviak:** ...how this occurs, physics... Because that sucks for the planet, right?

**Guy Martin:** Right.

**Adam Stacoviak:** Those are things where we probably need this basically impossible to replicate scenario, right? I mean, you'd have to destroy the Earth and replicate it to test it.

**Guy Martin:** And if you think about it, it's not just that one scenario.

**Adam Stacoviak:** It's Deep Horizon...

**Guy Martin:** ...it's the multitude of scenarios that we can't even imagine. So I think Omniverse has been used by companies that are doing like wind farms, right? With the big wind --

**Adam Stacoviak:** With the birds.

**Guy Martin:** Well, bird strikes, or what happens when your wind conditions go to some insane amount that nobody ever thought that they could... If you've simulated that ahead of building an expensive wind farm like that, you can engineer the actual physical thing to address something that you were never gonna be able to test in real in reality.

**Adam Stacoviak:** \[unintelligible 00:52:48.09\]

**Jerod Santo:** Does this only exist in the math, or is this like --

**Guy Martin:** No, it's an actual product, an actual technology.

**Jerod Santo:** Oh, I understand that much, but is the product itself just running through the scenarios in some sort of mathematical way? Or is it observable? When you say it's a Holodeck for AI, I'm wondering, where do the humans fit into this?

**Guy Martin:** Well, the humans fit into it; if you think about it, right now there's some support for like AR glasses, but it's primarily -- hey, you're all looking at a viewport, right? A two-dimensional display, but you're looking at a viewport that shows you everything that's happening. So if you can imagine sort of what a visual effects artist looks at today when they're building a scene, it's the same thing.

**Jerod Santo:** Right.

**Guy Martin:** You're using a viewport --

**Adam Stacoviak:** I've gotten a pool design before, and they've taken me around the whole entire pool right, and into the pool, and up around the pool, and over my house...

**Guy Martin:** Yes, exactly.

**Adam Stacoviak:** Is it like a replay of that?

**Guy Martin:** Yeah.

**Adam Stacoviak:** Okay.

**Guy Martin:** Yeah. So it's what we call a full-fidelity visualization; you can look at a scene from any angle, you can actually run through a set of scenarios and see what's changed... And the interesting thing is that you look at something like what Pixar needs it for, right? Again, they sometimes need unrealistic physical things to happen, but they don't have this concept of -- an example is you have an object and you want to throw LIDAR at it, and see what the physical reaction is to that. It's not something that Pixar needs to do for visual effects. But the rest of the industry, that's looking at full fidelity digital twins - you need to have a digital twin act in the virtual world as it's going to act in real life.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** When do we get in this thing?

**Jerod Santo:** Yeah. Where is the Holodeck for humans, and when can I sign up for it?

**Guy Martin:** Where's the Holodeck for humans... Well, the nice thing is Omniverse is free for individual users. You can go check it out and look at it. Go to NVIDIA and find -- search for the Omniverse page. It's available for users to play with. There's a lot of work going on to make it fully available in the cloud... We've announced a bunch of things with, for example, Siemens tying in with their industrial control systems, and working with us in Omniverse to actually make this happen...

**Jerod Santo:** Cool.

**Guy Martin:** The open source and standards part of it is the USD. It's how do we as an industry --

**Jerod Santo:** How do we design the scenes...

**Guy Martin:** And NVIDIA has done a lot of work on this, and other companies have, too - how do we come together to figure out how we make USD this thing that everybody is able to use, whether it's in Omniverse or in other things?

**Adam Stacoviak:** Well, Guy...

**Jerod Santo:** Thanks for joining us, Guy. It was awesome.

**Guy Martin:** Yeah, you bet. Thanks, guys. I appreciate it.
