**Gerhard Lazu:** So I have heard of this new tool called Dagger a few months back... And I signed up, and some weeks later I got the invite. It took me a while to look at it properly, but when I did, I really wanted to share the conversation with the people behind it, because it felt special.

So I would like to start by thanking you for making time, Sam and Solomon, to join me today. We would have had Andrea as well, but unfortunately he's not feeling well, so... Get better, Andrea, and maybe it'll happen next time, all four of us.

**Solomon Hykes:** Thanks for having us.

**Sam Alba:** Thank you.

**Gerhard Lazu:** So I've learned so much about Dagger in the last few weeks, actually... But what I don't know, and I'm sure that other people would really enjoy learning more about, is how did the Dagger idea start, Sam?

**Sam Alba:** Yeah, it started a while back, actually. We spent a few years at Docker, all of us, and Solomon was the founder, and we worked for many years for Docker, and to make Docker successful... And around 2018 we all decided to do something different in our life. It took us a while to realize that the most important thing for us was to actually work together. So that was the initial goal before starting the Dagger project - it was about starting a company to work together on something that matters to us.

\[03:46\] So we did that at the end of 2018, went to YC, participated to the batch winter '19. Solomon was actually a partner, he can share more about that experience... And we spent all of this time talking to people and learning about their problems. We interviewed a lot of different companies... And what we learned along the way was all companies - small, medium and large - are building an internal platform for application delivery. Sometimes they call it CI/CD, CI/CD pipeline, internal platform, whatever is the term, but it's always the same thing. And what we realized is in building this they were missing something in the middle, that is still missing, actually, because Dagger is not well known yet... And this missing thing is a way to program everything they have to do in order to bring a code locally, all the way to dev staging and production. This is what we're all trying to achieve right now with Dagger, is a programmable environment for developers to develop their internal platform.

**Gerhard Lazu:** So how do you see, Solomon, Dagger fitting in this landscape where the companies are struggling to find solutions, and some of them succeed, but maybe it's not what they expected, maybe it takes too long... How do you see Dagger fitting in this landscape?

**Solomon Hykes:** I think actually companies looking to build a CI/CD system, to build a delivered platform - they find tons of solutions... And that's sort of the problem - they end up with too many solutions. Different teams using different solutions, different teams deploying differently, multiple CI systems co-existing, frontend teams, backend teams, machine learning teams, infrastructure teams all have their favorite tools and systems, and there's just so much offer. There's a new startup every day coming out with a new infrastructure management tool or CI pipeline tool. There's just so many. So there's tons of great tools and systems out there, but the experience of using them is very fragmented. So where we fit in is we try, we aspire to solve this fragmentation problem by unifying what you already have into a cohesive platform. So that's where we fit in.

**Gerhard Lazu:** I like that you are talking a lot about applications and about application delivery, and not about infrastructure, which I find interesting. Why is that? Why are you thinking about applications and not about infrastructure?

**Sam Alba:** It's actually a \[unintelligible 00:06:16.06\] can take a long time, is my point. We could talk only about that point, actually. My opinion is the infrastructure is seen differently from different people. What I think is the infrastructure is a dependency to delivering the application, and it should be considered that way. We shouldn't see the infrastructure as its own thing. Seeing the infrastructure as a dependency drives you to make the right decisions, because it serves a purpose, and the purpose is delivering your application in a secure way for your application to run reliably and be redundant etc. We know all the best practices.

**Solomon Hykes:** Yeah, I think that infrastructure is a relative term. Infrastructure as a term - it only makes sense relative to something above it. It's the infrastructure FOR something. It's below something. It's the structure below... But below what? In our case, it's below the application. Outside of that context it's just structure, I guess.

So from our perspective, the goal is the delivery application. It's a very complex application now, because it's the cloud, and things are complicated... And it's got dependencies, like Sam said. And some of those dependencies are things that you, the application team, cannot change. They're there, and you can use them, but you can't change them. That's the infrastructure. That line, between the stuff you can change, that you wanna deliver and update and push and all that, above - that's the application. And below, things that you can't change, but you need - that's the infrastructure.

Different groups of people will place that line in different places, and also, the line will move over time. Containers, when we started with Docker and all that container thing, infrastructure was either bare metal servers or VMs. Containers were not available to most teams as an infrastructure component. So containers were something that developers set up.

\[08:12\] Containers were a way to move stuff up, to escape the constraints of existing infrastructure that IT would typically lock down too much. For example, as a developer, if I wanna install a new package for image processing or something, then I have to ask permission from a sysadmin, and maybe it's available, maybe it's not... Maybe the version they install is not a branch I want, and it's whatever the Linux distribution -- whatever \[unintelligible 00:08:37.20\] So that's just a pain to developers.

So containers started out as a tool above the infrastructure line, and then fast-forward five years, the infrastructure industry leveraged containers as a new means of delivering infrastructure, and so now it's largely below the line. So yeah, the point is the line moves over time.

**Gerhard Lazu:** Exactly, I was just gonna say that. I've heard many people talk about the value line, and how the value line is moving... And when you have a PaaS versus an IaaS, the value line shifts, and then the API changes. So the primitives, the building blocks are higher-level. If you use those higher-level building blocks successfully, you can do it a lot more quicker, and then you can standardize, and then you have economies of scale, and a bunch of things come into play... Which don't when you are talking VMs and bare metals, and so on and so forth.

The truth is that we have all those building blocks, and there's so many these days, including containers. Thank you, Solomon. \[laughs\] So now, the choice is even more difficult of "Well, what do I choose?" And then you have serverless, and you have monoliths... So application - what does application mean to you? Because it's not a monolith. It's not like my container, is it? It's more than that? How do you think about application, Sam?

**Sam Alba:** So what I saw in the past few years is a lot of people try to take their own specification of their application as it is internally in their company and try to make a standout with it. We saw a lot of different initiatives, including inside Docker with that at some point \[unintelligible 00:10:10.26\] So we saw a lot of different application formats out there. What I think now, after spending some time talking to companies and working on a lot of different implementations of internal application delivery is that the application format should be considered as everything needed to deploy this application. Basically, everything you need to do in order to take this code, build it, test it, publish it... Even including continuous deployment tasks like Canary deployment, A/B testing - all of that. All of this I think is part of the application, and this application exists only in the context of a deployment. Otherwise, the application doesn't make any sense.

Something on your iPhone - it's easier to think about what is an application on your phone, although until you've put your credit card on the App Store and installed some applications, it's still an application deployment. So I think the same thing applies for any type of application out there. So to talk a bit more about those formats that were out there so far, I think they can be useful for some companies internally, like an application for a set of services, a Git repository, all of that... But this format is not portable. Only what can be ported is the way to deliver this application, which is really what Dagger is solving today.

**Gerhard Lazu:** So my understanding is that what Docker did for packaging code is what Dagger wants to do for application delivery. Is that a correct summary, Solomon? Would you agree with that?

**Solomon Hykes:** \[11:57\] In one dimension, yes. I mean, there's major differences, but there was something we were trying to do when we worked on Docker, and there were multiple opportunities, and we get to choose one. Docker made a choice to focus on being a next-generation runtime for applications. It's a new way to -- a specific build artifact, a specific runtime, and it has advantages over existing runtimes, higher-level language runtimes and high-level PaaS, building your own on top of a VM... You know, containers hit that sweet spot, and so with Docker we had no choice but to follow the market, what the market wanted out of Docker, and that was a new kind of runtime. And that eventually became an infrastructure concern.

But what we worked on that led us to Docker initially was a different goal - we were trying to standardize; we were trying to unify the industry around something, anything, so that we can all leverage at least one thing that we all had in common. But it turns out once you enter the arena as one possible runtime, you can win or lose in that arena, you can be very, very successful, and I think Docker as a runtime was very successful. Even more successful if we include the clones, and forks etc. But it was not ubiquitous, and it can't, because fragmentation is inevitable. So what we realized this time around is if we want to actually contribute something that can truly be ubiquitous, that anyone can use, regardless of their choice of runtime, and infrastructure, and language, and anything, then you have to give up on also wanting to be the runtime for the application. You have to choose. That's why Sam mentioned all these application standards, and Docker Compose through CNAB, which is - my understanding is it's kind of taking that model and trying to make it a ubiquitous standard... It will never be, because it can't, because it includes strong assumptions about what an application should look like. It gives one answer to the question "Where is the line? Where is the line between application and infrastructure? What is the shape of the line? How do you connect the two?" That's an answer... So if you're rooting for that standard, that implementation, you're rooting for everyone to adopt that answer.

What we're doing is we're rooting for everyone to define their own answer... The answer to "Where's the line between application and infrastructure, and how do you connect them?" It will be a different answer for each software team, we believe. There'll be patterns, commonalities that will come and go, but yeah, your delivery platform, the way you connect application infrastructure if you're a software-enabled business - it's strategic. It's unique to your application. And if your platform is generic, then that means your application is generic. It's not a realistic goal. So our goal is to -- and to answer your question, we're kind of picking up an original goal that we had while we worked at Docker, that we had to abandon, and now we're trying to achieve it in a different way by saying "We're not gonna run your application, we're not gonna tell you how to run your application. You tell us how you wanna run it and how you wanna deploy it, and Dagger can help you."

**Break:** \[15:07\]

**Gerhard Lazu:** What you've just told me makes a lot of sense. And the reason why it makes a lot of sense is because having spent a really long time in this space, I can see it. But what I don't know is how exactly does this solution that Dagger proposes actually work. So how do teams and application developers declare in Dagger what their application delivery flow looks like? How do they do that?

**Sam Alba:** So I'll start with this one... First of all, we --

**Solomon Hykes:** Sorry, I had to do it... \[laughter\]

**Gerhard Lazu:** No, that's good.

**Sam Alba:** Alright, we'll start again then... \[laughter\]

**Solomon Hykes:** Sorry. Go ahead.

**Sam Alba:** So we use a config language that you know and you probably mentioned already in the podcast, I'm not sure... It's CUE. I think you talked to Marcel. You interviewed him.

**Gerhard Lazu:** Yes.

**Sam Alba:** So people who are familiar with the show know the language already... Which is good for Dagger, to be honest, because the language is not well-known yet, and so it will help as the language progresses for onboarding with Dagger.

**Gerhard Lazu:** So just to add a little bit, a clarifying piece... This is Go Time episode 163, "CUE: Configuration Superpowers for Everyone." By the way, that's the reference. That's the exact episode that you can go and listen to to hear more about CUE. So CUE is one of the building blocks of Dagger.

**Sam Alba:** Yes, and so CUE provides a very compelling and powerful configuration language, that platform engineers or application developers - I mentioned \[unintelligible 00:19:00.08\] because it's always someone different in a company who does take care of the CI/CD pipeline in the internal platform by extension.

So they use CUE to declare everything that they have to do in order to take the code from the code repository all the way to running the code live on any environment \[unintelligible 00:19:22.15\] So Dagger right now offers through CUE a way to define all of that, everything. The way it works roughly is -- so you use the CUE language, Dagger does not change the CUE syntax; that's very important to us. We just add the ability in a CUE configuration to attach some steps to run, and we run them inside containers, and it's fully transparent for application developers. So the way it works is you define what you want to do by using packages that Dagger providers, basically. Or you can write your own.

**Gerhard Lazu:** \[19:59\] What is a package, by the way? Can you give us an example of a package? Because that's a fairly important concept.

**Sam Alba:** Yes. So CUE offers the ability to import packages, first of all... And Dagger piggybacks on these to provide a standard library of packages of reusable building blocks. So one of these packages, for instance, is the ability to manipulate a Git repository to deal with the GitHub authentication, to integrate with TerraForm, for instance, in order to rely on some infrastructure definition, or providing some infrastructure resources along the way.

Recently we added a package for Argo CD. That was a contribution from someone in the community. The idea was to - from the application delivery pipeline to generate an Argo CD configuration and call Argo CD directly from Dagger. So there is a reusable package now.

Dagger also has the ability to define packages that you can share and import. So they don't have to be (all of them) inside the standard library. We only add packages that we think are general building blocks that people can reuse.

We also have packages that are cloud provider-specific - GCP, AWS... Inside GCP there is a package for GKE, dealing with the authentication. Then they all generate Kubernetes clients that you can reuse... So you can import those packages and use them pretty much like you would do in a programming language like Go, for instance. And then behind, once your configuration is live, there is a way to set inputs. Some of them can be secrets. For secrets, Dagger manages the encryption of secrets. Then you type "dagger up", as simple as that, and your application is live.

**Gerhard Lazu:** So Dagger takes some inputs. There's also outputs, I assume. The outputs are a result of the packages running, or the definitions that call packages? Would you call that a plan? Is that a plan in the Dagger language?

**Solomon Hykes:** Yeah, so the development flow that Sam described, what you're doing there is you're writing -- that's when you're writing a configuration for Dagger. So you're telling Dagger how to deploy your stuff. And without Dagger, you would typically do that in a bunch of places, which is one of the problems. We can't do it just once and then run it everywhere. You probably have to repeat and duplicate information and fragment it. It's gonna deploy from your laptop. You're gonna have shell scripts, a Docker Compose file maybe, a makefile, a custom Python script, some Ruby scripts, a custom JavaScript script...

There's a lot of custom and reusable tools out there for deploying from your laptop. Then sometimes you're gonna reuse the same scripts on a deployment server, a staging server, maybe you'll bring it into your CI... But then what happens in your CI is that CI wants to be CI/CD; because if you only do CI, there's not enough money to be made, because CI is infrastructure. A CI system is a runner for your scripts everytime something happens on source control; a very valuable thing to do. But there's \[unintelligible 00:23:06.16\] So now, what all these CI systems are doing is adding more and more sophisticated pipeline systems. And a lot of those are configurable in Yaml. You write a Yaml description that then says "Run this script" and "Run that script" and "Connect these things." They all have a different system, but they have in common that they use Yaml, which is an awful development experience... And also, it's not your shell script; it's different. So now you have two things.

And then what happens is your CI/CD process is in place. It uses Circle CI, GitLab, GitHub, Jenkins, whatever, and it's very \[unintelligible 00:23:38.15\] Yaml thing, and you update it and you add -- now, sometimes there's an Action thing on GitHub, for example, a Docker container you plug in... So you start kind of adding things, and now all of a sudden that doesn't work on your laptop anymore. And also, you can't just look at the code for it. You're looking at a Yaml file, and that Yaml file says "Run this container." So you're running a container, but that's a binary thing. So now you're gonna go look for "How was that container built?" "Oh, here's the Docker file. I've found it. Oh, this one is a Python thing. It uses the APIs for this particular CI system, so it's not portable." "What if I have a different CI?" Well, you've gotta start over.

\[24:20\] So you have this fragmentation problem where the actual deployment logic is split up into lots of different pieces, using different languages... So you can't reason about it as a whole, number one. And each piece is tied to a specific runner, a specific piece of CI infrastructure. So when you're writing a configuration for Dagger, you're doing the same thing once more. You're writing a configuration that describes how to deploy. But the big difference is, 1) it's a better development experience, because it's a language that's better than a shell script, and also better than Yaml. It's sort of like the best of both standard, imperative programming and the best of a declarative system like Yaml. So that's kind of -- like you said, it's a building block. 2) There's reusable packages. So if someone is really smart - maybe yourself, you wrote a piece that you need... It could be a pattern, it could be an automation, it could be integration of a tool, TerraForm, as Sam mentioned, Argo CD, whatever, over time an ecosystem builds and you can reuse those. That seems obvious, even trivial for application developers. But as we know, in DevOps and cloud land, that actually does not exist, amazingly. Not fully. We're in the uncanny valley of delivery as code. It kind of looks like code almost, and it makes it weird, but it's definitely not as fun to do. Writing all these Yaml files, templating them, and copy-pasting shell scripts is not as fun. So it's a better experience, and you can run it anywhere.

**Gerhard Lazu:** I'm going to set the bar really high now, because you started with a very high bar...

**Solomon Hykes:** Okay...

**Gerhard Lazu:** So the way I hear it is that this is the best thing possibly since Docker.

**Solomon Hykes:** \[laughs\] Okay.

**Gerhard Lazu:** That's what I hear. Because Docker changed the way we package and we run applications... Or even code. It doesn't have to be applications. It can be stateful stuff as well. Services. Whatever. So if what you're telling me is true - and I have no doubt about that - then there will be a world, maybe a not too distant world, where Yaml will be an artifact, an output, a by-product. We will have a config language that has a runtime built in, and it has a type system built in, it has proper templating, proper secret management - all of that. It integrates with all the building blocks that we call infrastructure today, so that shipping code into anywhere (not just production) will be different.

**Solomon Hykes:** Yeah, I think that's true. Yeah. I mean, it has the potential to be that. I do think it has the potential to be as impactful as Docker. Certainly, I hope we'll be the ones to deliver on that potential, but I have zero doubt that someone will. And I don't see why not us, because we're doing it now and it's working. But yeah, it seems inevitable. It has to happen, because it's just too painful to keep doing things the way they're being done now.

**Gerhard Lazu:** It is. I can relate to that pain. I've been feeling it for years, but there hasn't been a solution that looked like it may work. And I think Dagger is the first thing that I have seen in recent years that may just work. It's a crazy idea, very ambitious, things can go whichever way... But the same thing was true for Docker. And by the way, Docker didn't start as Docker. Docker started as dotCloud. And the things that followed - I don't think many people could have foretold what was going to happen. The direction was great...

**Solomon Hykes:** Including us.

**Gerhard Lazu:** \[27:50\] Including you, exactly. That's exactly what I'm thinking. So you didn't know just how big and successful it's going to be. And when Docker came along, everything changed - for application delivery, for running systems... A couple other things happened, like Kubernetes, for example. I think that was an interesting one. But the container image and the container format, and even though the runtimes changed over the years, and I know that we use Docker Compose and Docker Swarm to run Changelog, and then we switched to Kubernetes... And it's okay, we like it; we like the container, we understand the value... But we still use a lot of makefile. We still write a lot of Yaml. And it's okay, because we've been doing it for years, but it's not great. And that's the point that you're trying to tell us - "Hey, there is a better way." So CUE is one of those amazing things. By the way, I looked it up - Configure, Unify, Execute. So it's in the name of the language.

But I know that Dagger has also another special component, and that is not Docker, even though it makes use of Docker. It's Buildkit. Can you tell us a bit more about that relationship, Sam? Because I think that's the other big, important component in Dagger, which is Buildkit.

**Sam Alba:** Yeah, absolutely. So Buildkit is indeed the other part that makes Dagger very powerful. Dagger has a -- it's in the name, the term "DAG", for Directed Acyclic Graph, which is pretty much the same execution flow that a makefile does, but in a more elaborated way thanks to CUE, and Buildkit, actually.

How Dagger works under the hood - that's really a bit technical, in the sense that it doesn't have to be understood by users. Even developers, platform engineers who are developer a Dagger configuration - they don't have to understand that. Exactly like when people use Docker Build, they actually use Buildkit behind. But they don't have to understand it. Same thing for Dagger, it's just that you don't have to write Docker files; you can build from your Docker files that you already have. You can actually call make if you want, and include your makefiles, or run your bash scripts if you want from your Dagger config... But the execution side of it happens within Buildkit, and Dagger calls to Buildkit directly through what's called LLB, Low-Level Binary, which is a binary of code that Buildkit implements.

So Dagger talks to Buildkit directly, and generates those instructions from CUE. And Buildkit offers a lot of different things - pretty much the same thing that you know from Docker file, it's just that in my opinion when you write a Docker file and you type "docker build", you'll probably use less than 10% of what Buildkit can offer.

So with Dagger today you can really step up the game by producing really fine-tuned execution from your configuration. So it's a bit abstract from when \[unintelligible 00:30:38.03\] and I'm sure Solomon will explain it better than me...

**Solomon Hykes:** I don't understand it as well \[unintelligible 00:30:42.24\]

**Gerhard Lazu:** This is what I propose... I was reading a blog post from Tõnis Tiigi introducing Buildkit. It's from 2017. And there's a link to a talk that Tõnis gave at DockerCon 2017, I believe. So I'll link it in the show notes. Watch that talk, which explains everything about Buildkit, including the LLB, how it works, there is the DAG... That's a great one to watch.

**Solomon Hykes:** If there's one thing to take away from our explanation of Buildkit- there's a lot to cover, but the main thing that you won't get from that presentation is that everybody else uses Buildkit to build, and Dagger using Buildkit for much more than build. And I think it was already known that Buildkit is just an incredible low-level build system. It's vastly superior to almost anything else out there, because it's low-level, so it can focus and specialize. It's kind of like LLVM in the compiler world. Very similar.

\[31:49\] But we're taking it one step further and saying -- it's so powerful that the name is wrong. I don't know what it should be called. It's not just to build; it's a generic virtual machine for DAG computation. That's how we use it. And it turns out a great application of DAG computation, in other words writing your program like a DAG, and running it like a DAG, is pipelines, especially when you have multiple pipelines and they're interconnected, and you need data to flow through them in one direction. So anything related to CI/CD will always be better when you program it as a DAG. So we leverage that. But it's a common point of confusion that we have to clear up, I think, often... It's that, you know, if you dig into the internals of Dagger and you see Buildkit and you think, "Oh great, they have this built-in build capability", which is true, as a nice side effect is anything that involves building stuff, you can leverage to Dagger APIs natively. You can reimplement your own Docker build natively to Dagger if you want, but it's not just build. Anyway, I'm repeating myself. It's important.

**Gerhard Lazu:** That sounds amazing. I can see how powerful that is. But the reality, at least for me, the implications of that is that I have to run Docker. And I uninstalled Docker on my machine about six months ago, and I don't have to update it anymore, I don't have to worry about licensing anymore, and there's a lot of contention around Docker recently. I sidestepped it in that I uninstalled it, I just use the runners in the CI/CD systems, or - and this is something recent - I'm looking at moving my development through \[unintelligible 00:33:20.15\] there will be Linux, there will be Docker... Not a problem. So from that perspective, obviously today Docker is a dependency of Dagger. And Dagger will not work without Docker. Correct?

**Solomon Hykes:** Not completely correct. You can use, if it's really important to you to use Dagger without any Docker engine, you can. Most people that we talked to choose to use it with Docker, because they have it... But yeah, not everyone has Docker installed, and not everyone must be forced to. Buildkit itself you could run as a separate daemon.

**Gerhard Lazu:** Interesting.

**Solomon Hykes:** But that demon is going to need to talk to something capable of running OCI containers. And that something could be the Docker engine, it could be Containerd, which often is bundled with a Docker engine... But you can run it separately, if that's your preference. I think there's calling runC directly, which is the even lower-level tool, so you can get away with that... Or you can do any of those - Docker Engine, Containerd - remotely. And you can even run the Buildkit daemon remotely.

So these projects - Buildkit, Containerd - can be run remotely, and there is well-documented methods for connecting to them in management, then remotely via SSH for example, etc. So Dagger supports all of that. If you add your favorite custom Buildkit and/or Containerd infrastructure, either that you wanna build or that you already have, you can leverage it with Dagger, and it just works... Which is pretty cool.

**Gerhard Lazu:** It is very cool, yeah. It is very cool. I love that world... And I'm wondering, if I was to use that option today, are there issues around, for example, volumes? Because that always used to be a problem when you would mount local volumes... Or like if you had to copy lots of stuff, and then the Docker daemon would be remote. That, in my experience, didn't used to work as well... But maybe there's no such thing in Dagger.

**Solomon Hykes:** Yeah. So the job of Buildkit is you define DAGs, graphs of things to do, of operations, and then you run it; there's a begging and an end, and then you get outputs. You provide inputs, you get outputs. Very powerful, very scalable, blah-blah-blah. But it does not use or depend on the concept of Docker volume.

**Break:** \[35:36\]

**Gerhard Lazu:** This is something which I have to ask... I've been thinking about it and I have to ask it - how is Dagger different from TerraForm?

**Solomon Hykes:** TerraForm is a great tool for managing your infrastructure, and Dagger is a great tool for making your CI/CD pipelines more portable, so that you can deploy all the different parts of your application in the same way, and deploy them from anywhere - a local machine, CI, other CI etc. If your existing CI/CD pipelines involve TerraForm in any way, calling Terraform directly, using resources provisioned by TerraForm, then you should keep doing that with Dagger. Dagger will help you integrate with TerraForm better if you're already using it. It does not replace TerraForm. It shares some commonalities in how it works internally - there's a graph, there's a declarative language etc. A lot of people ask, because they know TerraForm very well, and they -- it's mostly a matter of positioning. We have to be more clear what it's for, what it's not for... But yeah, the short answer is they're related, but complementary.

**Gerhard Lazu:** That is a great answer, thank you very much for that. So with that in mind, I love tools that use themselves, like dogfood them, and you're basically the first users, so that you can see what doesn't work. I'm a big fan of that. Does Dagger use Dagger? In what way, Sam? Tell us about it.

**Sam Alba:** So it's very important to us as well, because in my past in my career I worked on some products that we were not using internally, and it's always very difficult to just rely on your users to get feedback. You have to use your products. Honestly, sometimes it's not possible, somehow... But for us, we have to, and we need to, actually... Because as a software company, we have also problems and needs in terms of application delivery.

So there are a few areas where we use Dagger today, and a few areas where we'll use Dagger even more tomorrow. The first one that comes to mind is running the test internally. Right now we run all of our integration tests for the standard library, which is the reusable packages that Dagger provides. All of those tests are being run inside Dagger, which brings some advantages. First of all, you have CUE to define those tests. I don't know if you used any test framework in the past, but anyway, there is always some effort to implement those tests. Having CUE is really handy.

\[40:03\] Then another advantage is to make -- since all of your tests usually should run in your CI, defining all of the CI logic on your CI system is very challenging, because developing your test is software development, and as any software development, it has to be maintained and evolve over time, and grow... And doing that on your CI requires always a very long and difficult development lifecycle. I don't know if you've --

**Gerhard Lazu:** Oh, yes.

**Sam Alba:** ...tried CircleCI, and GitHub Actions...

**Gerhard Lazu:** All of them. I know what you mean exactly.

**Sam Alba:** Yeah. And so replacing all of that with a Dagger app, so you can just develop your tests locally... And then your CI just needs to do the same, as a simple Dagger app. So that makes everything your CI does portable, including running your tests.

Then there is the deployment of our DAGs. There is even more that we need to move over to Dagger. An example right now - if people have access to the repo, they will see that we use Go Releaser to build the Go binaries... So Go Releaser is nice, because it can do one thing simply and well, but there are certain things you want to do in your release process that Go Releaser cannot do, and that we need to do with Dagger. So there is an effort in progress to move over to Dagger for that.

**Solomon Hykes:** And in that case we'll keep using Go Releaser; we'll just wrap it in a Dagger configuration that calls Go Releaser and other things. It's just that if you only call Go Releaser for everything, then there's no point in having the overhead of Dagger.

**Gerhard Lazu:** That is really cool. Always the first test of a successful tool/utility product does that thing itself. And if it does - great, because you're the first one(s) to realize what isn't working. And it is in your best interest to fix it for you first and foremost, and then for everyone else. Of course. So I love that story. That's one of my favorite features of any product, the product using itself.

I'm glad that you mentioned the repository, Sam, because I know Dagger is still in a closed beta. So if someone wanted to start using Dagger today, how would they do that?

**Solomon Hykes:** Go to dagger.io, click Request Access, there's a short form... If you have a use case in mind, even if you're not sure, we ask extra questions about that. We love learning about use cases, hypothetical or real... And then we send the access relatively quickly. We're not actively hunting for people to join, because we have a fairly large pool of people already testing, and they have plenty of problems already, so we're focused on fixing them... But it's always exciting when someone joins; that's the best contribution anyone can make at the moment - it's a use case, and then you will have time to try applying Dagger to the use case and to tell us how it went... And especially what went wrong, so we can fix it.

**Gerhard Lazu:** Yes, I like that. And knowing a bit more about the story behind Docker's success and how challenging that was for the team, I think that this - at least in my mind - is one of the learning that you took away from that. So rather than making it wildly popular, everybody using it getting so much feedback that you cannot even keep up with it, is it true that this is one of the things that you're doing differently, and in a way better?

**Solomon Hykes:** We actually did the same with Docker... It didn't last as long. No, you're right that we -- yeah, yes and no, because with Docker we did focus a lot on giving early access to people, even before it worked properly. Even before it built. The first meetings we had privately \[unintelligible 00:43:38.01\] and then it ran, but it was fake. If you go in the history of Docker at the Docker repo, there's a file called fake.go, that pretended things were happening, but they weren't...

**Gerhard Lazu:** \[laughs\] It's crazy.

**Solomon Hykes:** Yeah. We had little private meetups at our office - back when you did things in offices - before launching. People would come and talk about Docker, how they would use it... But what's different is that ended pretty quickly; it lasted a couple months, then boom, it was out... And we did feel like we were not ready.

\[44:11\] So Docker was very successful. It happened for a good reason, but we did pay a price in terms of preparedness, and especially on the business side, because we didn't have a plan for monetizing it, and we didn't really think it through, and then we had to think it through in a very different environment, where -- you know, you're in the tornado, when everything is happening very quickly. The whole industry wants everything from you, and you've gotta decide things right away. So this time we're designing a cloud product in parallel to the open source tool we mostly talked about. And when we launch, we plan on having a complete picture on how you're gonna use the open source tool, how you're gonna use the cloud product, how they'll connect, and how our business will be a sustainable one, so that the tool can continue to exist and improve... Because you don't wanna be in a situation where nobody pays for it, but everybody is pissed off at you for not investing money and making it better for them... Which is basically what Docker had to go through. And then they're angry when you start charging. "Why didn't you fix my Docker Desktop bug? Grrr! Why are you charging money for Docker Desktop? Grrr!" Pick one.

**Gerhard Lazu:** "I'm just gonna uninstall it!" \[laughs\] No, that's not how it happened for me, but I know exactly what you mean... So I'm glad that this is one of the things that you're doing differently. It makes a lot of sense. I think it sets up Dagger for success. One other takeaway from what you've just said, Solomon, is that a good idea, even if it doesn't work in practice right away, it's still a great idea. And people coming around it - that's amazing to see. People that think like you. People that see and feel the pain that you do... And I really like that about Dagger, which is what I also loved about Docker. That was a real pain, you addressed it... A couple of things you could have done better... As always. Even now...

**Solomon Hykes:** Just a few!

**Gerhard Lazu:** It will always be the case. Yeah, just a few. \[laughs\] Right. We're downplaying it. And I see this different approach in Dagger, and I think - again, without the benefit of hindsight of Docker, is - I can see it working. I really can see it working. I know that the community is very important. It's essential to the success of any product. So how are you thinking about that relationship, Sam, with the community?

**Sam Alba:** Well, for me the community in a project like Dagger should be seen as an extension of the internal team. On some projects you have some code that is open source, and contributions externally that are managed on the side as a side thing, side task. For us, we try to reapply what we did at Docker, and for that specifically I think it was a success. You know, at Docker it was really an extension of the team, and no matter whether you were an external contributor or an employee, it made no difference from a project governance point of view. You were able to open a pull request and propose something, discuss a design, propose an implementation, even participate into maintaining the project, from an outside point of view, without being an employee... And we apply the same thing right now on Dagger. It's not of use because the project is still in closed beta, but for the people who have access to it, I think they can feel this way.

Same thing for internal discussions - we have a Discord channel with public channels, and we try to discuss everything related to development on public channels. We avoid side conversations internally, and we don't use Zoom. We use Discord and public channels for that. It's very important to involve everyone. That's what the community means to us.

I think without this aspect, you cannot build an ecosystem, really. You cannot really involve people and have external contributors feeling important to the project. It's not something that you can fake, basically.

**Gerhard Lazu:** I see it exactly the way you see it. I completely agree with everything that you've mentioned... So I'm wondering now, how can the community help you best? The mission is great, the idea is great, the way you're approaching the community is great... So how can the community reciprocate?

**Solomon Hykes:** \[48:20\] We have a strong opinion on open source contribution. I think it's misunderstood a lot, what open source contributors are relative to a project and product attached to it. I think when you participate in an open source project and you contribute to the code and the documentation or open an issue, any sort of contribution - that's the highest form of user engagement. An open source contributor is a power user. You know, there's users, there's power users, and then there's power users that are such power users that they actually contribute to the code and the docs of their own product. That's the ultimate level of achievement as a user.

But the word "user" is super-important, because what got you there is using the product, and liking it enough to use it more and become proficient in even how it works... And also, there's something that you disliked enough about it, or that was missing, that motivated you to contribute - maybe the code itself, maybe just the issue describing it, a detailed bug report... You know, there's a line you cross where you become basically the most valuable user possible, and it becomes a two-way exchange... And that's just what's really unique about open source, I think.

So basically, everything Sam said just before - either you build around a community of people like that, or you don't. Either you want it to be possible or you don't. With Docker, that worked really well, so we're doing it again. So that's indirectly answering your question, which is "How do you best contribute?" Just use it. Just keep using it. And if you try to use it and you fail to use it because you don't understand it, or it's broken, or maybe you're using it wrong, you're not sure - just any engagement around how you use it is automatically a contribution. Early in the funnel, where you're not really an active user, but you're trying - that's data on how can we help you and others like you get started. Just off the top of my head - the docs are incomplete, the explanation on the website is vague and confusing, the UX is pretty terrible, because it's ten layers of iteration that we haven't had time to clean up... We know all that, but from the inside, it's like a giant pile of work to do, an infinite pile of work to do... And every time you come in and contribute your priorities, your problems, your thoughts, your suggestions, you're helping us prioritize it... And that's how we'll make progress. So it's just immensely important.

That's our biggest test... There was a period at Docker when there was a lot of noise. I mean, it's still -- unfortunately, it's still kind of sticking in the history of Docker that at some point there was conflict with the community. We refused pull requests, and we argued with -- and you know, not a single time did that happen with actual users of our product \[unintelligible 00:51:05.14\] It was always with competitors and integrators that were not actually using our products. They just wanted to build another product, to get other people to use it, and they wanted the code. That's different; and it's part of the game of open source, and it's normal, but that's not the priority for us. The priority is someone who's using it, and using it so much that they wanna help improve it.

**Gerhard Lazu:** Focus is key, in everything, and knowing which are the things that you don't want to do is in my opinion more important than what you want to do. So from the perspective of focus, what are the things that you're focusing on? We've mentioned all the things that you would like to do, but you don't have time to do... What are the big items that you're focusing on in the next 3-6 months?

**Solomon Hykes:** \[51:56\] Well, we can tell you what our internal priorities are, and hopefully they align with the answer...

**Gerhard Lazu:** If you want... Yeah, I would love to do that. And I'm sure all our listeners would love to hear that. Yes, please.

**Solomon Hykes:** So we have a weekly team meeting and we talk about how everyone's doing, and what everyone's doing, whether they're stuck and need help etc. and then how everyone's work contributes to our priorities as a team, and then we update those as we go.

Right now we have a few priorities... One is a strong and engaged core community. So we need a core group of people that consider themselves Dagger developers, and they're actively contributing to the Dagger ecosystem. It's a very small one. So the number of those people is not important. 5 to 10 people that are continuously engaged and don't leave, so it's not a revolving door... It's 5 to 10 people with 100% retention, basically. You're no longer at zero... And you wanna make sure they're happy, and they feel really involved. So that's the first priority, the developer community.

The second is successful (we call them) accounts. Actual projects, actually doing something real with Dagger, being happy and continuing to do it. So we have lots of data, lots of people interacting with us, trying -- we have some analytics... So we see activity, but activity doesn't necessarily mean a successful project, a successful account. So we wanna make sure there are teams out there that are successful using Dagger, and we know who they are, and we understand why. Very important. That's the second.

And that there already is a cloud product with a great conversion and great retention, so something we can actually sell. So that's the third priority.

**Gerhard Lazu:** I'm thinking of helping you with the second point, in that I do see the Changelog setup using Dagger. I really wanna try it out. I also think that I could help you with the first one, but time and priorities, as you've just mentioned - we all have them... So it's subject to that. And I also know that -- this was a tweet that went out several weeks back. I know that you're looking for people that want to join Dagger, to actually work on Dagger.

**Solomon Hykes:** Yes.

**Gerhard Lazu:** So which is the ideal candidate that you would like to apply for those very, very few roles?

**Sam Alba:** Well, I think it's a tough question, because everyone is different, so we don't have a type of people that we can describe really well in a blob of text. That said, there is this blob of text that was tweeted a few weeks ago that explains it as much as we can... And right now, we are looking to build a small team. A small team of what we call founding engineers; a founding team, not only engineers, actually... Really, a founding team that can participate in making Dagger evolving, but not only; building the company as well.

**Solomon Hykes:** \[unintelligible 00:54:41.07\]

**Sam Alba:** \[unintelligible 00:54:43.11\] first ten people, and I was part of them, actually. I was the first engineer hired at dotCloud back then, along with a few other people... And we were involved not just in building the product, but also in building the company, setting the culture for the next ten after us. So this is what stage we are in today. We are looking for people who are willing to build a product, for sure. That's the first thing. Are you convinced about the problem we are solving? That's probably the very first criteria. But the second one is really "Are you ready to participate in building the company?" and everything related to that - the company's culture, engineering processes, how you want to manage your day-to-day with other people... It's really about building the company, it's about defining all of those things.

Some of those things are defined today, but they are gonna change, and everyone participates into that. It's not the founders dictating how things should happen. It's really a teamwork.

**Gerhard Lazu:** \[55:43\] I really like the way you're thinking about this, I really like the description that you put out there. I know it's really difficult to capture that ideal candidate; it's actually impossible, to be honest, because there's always wildcards and curveballs... But I really like the way you went about it, and I wanted to mention it, because it felt important and significant.

So now, as we are wrapping up, I'm wondering, as a listener, which is the most important thing for me to take away from this conversation? Solomon, would you like to start?

**Solomon Hykes:** Yeah. I think if you are involved in DevOps and CI/CD, life is painful, but it feels like the future is exciting, and we agree. So the pain is not mandatory; it's okay to solve it. \[laughs\] I think we're just in a temporary state as an industry where it's very early and very broken, but also very exciting. So we're trying to contribute, do our part in making it less painful. And we need help.

**Gerhard Lazu:** I see what you mean. How about you, Sam?

**Sam Alba:** Well, I totally agree with Solomon, and I will just add, as an extra piece of information, that although Dagger is in closed beta right now, it's really easy to get access to it. We watch the queue pretty carefully every day and make sure that people are not waiting too long to get access to it... So feel free to sign up, and you'll get an access soon. And once you get access, it feels like an open community, that will be widely open at some point soon, once we feel it's ready... And then we are available to talk about your use cases.

We are also allocating time every week with the team to make sure we are reactive on people's questions and in people asking help about building the internal platform, as well. So we can help writing and implementing internal platforms using Dagger, giving advice and all of that... So feel free to join the community.

**Solomon Hykes:** Also, if you've signed up and you're wondering why you didn't get access yet, check your Spam box... Because it's probably there.

**Gerhard Lazu:** As for my takeaway - we missed Andrea. We hope he gets better... And I'm looking forward to all four of us getting together soon, maybe after I have set up Changelog running Dagger, and there will be some learnings...

**Solomon Hykes:** Ooh...

**Gerhard Lazu:** I like the sound of that too, Solomon...

**Solomon Hykes:** Let's see if you're still happy to talk to us after that.

**Gerhard Lazu:** I'm pretty sure I will. There's something there. But thank you very much for joining me. This was a great pleasure, and I look forward to next time.

**Solomon Hykes:** Thank you.

**Sam Alba:** Thanks so much.
