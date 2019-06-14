**Nadia Eghbal:** Todd, you work for the government... Tell us what your actual job is.

**Todd Gamblin:** Okay, so I work for a specific part of government... I work for Lawrence Livermore National Laboratory - it's part of the department of energy. I'm a computer scientist, that's my job title (we don't really have official job titles here). Effectively, I'm a researcher, I'm a project lead, and I'm also a developer. I work on an open source project Spack, which is one of the things we're gonna talk about, and I also lead a bunch of other projects - I lead the dev ops project here at the Lab for simulation teams, and I do research in machine learning for parallel performance.

**Nadia Eghbal:** And for those unfamiliar, what is Lawrence Livermore?

**Todd Gamblin:** Lawrence Livermore is one of three labs in the National Nuclear Security Agency. It's part of the DOE, and we're responsible for a whole lot of different national security missions. That includes things like nuclear non-proliferation, making sure that people don't sell nuclear materials... We're also responsible for the U.S. stockpile, making sure that it remains viable, and then we do work on a lot of just basic research projects. We do some climate simulation, we have people working on that, we're part of the -- I don't know if you remember Obama's Cancer Moonshot, we have people working on that initiative - there's a lot of interesting data analysis and machine learning there - and just general computation.

\[00:03:55.26\] I think all sorts of missions at the Laboratory are based on computing and our Livermore Computing Center, which is where all the different clusters are that we run. I work both with the research organization and with the computing center, and also with the code teams, who are from all different parts of the Lab.

**Nadia Eghbal:** So you play with nuclear weapons all day?

**Todd Gamblin:** I do not play with nuclear weapons all day. \[laughter\] What I do is mostly in a support role. We're working with the simulation team... One of the things that we simulate is nuclear weapons, that's true. We also have a whole lot of open science codes; we work with all those different teams to help them get their simulation up and running on our machines... My role is mostly taking what they do, looking at it and trying to make it go fast, and also just making sure that they run effectively on the machines. That's why I run this dev ops team... We call it the HPC Developer Ecosystem team. That's about collaboration tools, we're trying to deploy secure CI for our center, and work with the teams to help them package and share all the different parts of their codes.

In the research role, what I do is I work with a lot of students in academia, I have post-docs who work for me, and we'll usually talk to the code teams, try to figure out what their problems are, what kind of things are they having issues with in terms of making sure that their simulations run fast, and then we try to come up with ways to speed them up. So my background is really performance tools. We'll go look at a parallel simulation and try to measure "What's it doing at runtime? Where is it spending its time?", we'll use profilers, trace tools, "Is it bound on memory? Is it bound on CPU? Could we do vectorization better?" Stuff like that. Basically, we support the code teams in lots of different ways.

**Nadia Eghbal:** Cool.

**Mikeal Rogers:** So in terms of like your team and everything... Is this a bunch of people in the same physical location? I think when people hear of a lab, they're thinking like some place with a giant hadron collider, or something... Is this institution slightly virtualized, as well? You mentioned you're working with different students, and stuff like that - are they all on-site in the same place, or is the institution a little bit more virtualized?

**Todd Gamblin:** I would say it's both. Livermore itself is a one square mile laboratory in Livermore, California; it's like an hour from San Francisco. We do have a giant laser here... We have the National Ignition Facility, which is the world's largest and highest energy laser; basically, that's like 192 beams that focus on something smaller than a pea and try to implode it. That's a fusion experiment. Some of the simulations are simulating that, so we sort of iterate with them.

So that's more like on-site stuff... We would go and visit the code team, or they would come to our office, we have meetings, like a normal company... I sit in a building with the big computers, so basically I have an office building and there's essentially like a 48,000 square foot data center attached to it. But yeah, there's a lot of collaboration that goes on here.

We also collaborate across the DOE and with a whole lot of universities. I have telecons all the time, I have collaborators at the University of Delaware, University of Arizona, University of Illinois and other places, with students, and then we also collaborate with people across the DOE. The Exascale project that I think I mentioned earlier - that's a collaboration of six different laboratories; it's all three of the NNSA labs - that's our agency, the National Nuclear Security Agency; that's one part of DOE, and then there's also the Office of Science. You may have heard of Argonne or Oak Ridge National Laboratory, or Berkeley Lab - those are Office of Science laboratories and we have telecons with people there all the time.

To some extent they're similar, because they have large physics experiments on their sites too, and all those big labs have big computing centers, but... We travel around the different labs and also to conferences and do things like present papers... So it's a fairly diverse job, working for the DOE.

\[00:08:10.26\] I like it a lot because I'm not always working with programmers or computer scientists, I also get to talk to people who are doing physical sciences and other stuff. It's a pretty cool environment from that perspective.

**Nadia Eghbal:** Can you talk a little bit about your lab's history with open source? I think you've mentioned in previous conversations that your lab has open-sourced a bunch of other types of projects before, and I was wondering also how did you personally get into open source in your current role?

**Todd Gamblin:** If you look at Livermore's history, I think from the Lab's founding in 1952, we've deployed fast computers; building software for them has been a long part of the lab's history. We built this thing called the Livermore Time Sharing System - I say "we", but this was way before my time... And that was one of the first time sharing operating systems to run on like a supercomputer, and that was so that the physicists could swap out time for their simulations.

We also used to build compilers here. Apparently, we had a compiler team, there was something called "the Pastel Compiler." I think Richard Stallman actually wanted to base the original version of GCC on that, but I believe the memory requirements for it were way too high for ordinary computers... It wasn't gonna run on something that wasn't like one of our supercomputers, so he went and built GCC on his own.

Then as the machines evolved, we've deployed more and more fast machines, and in the '90s they started looking more like clusters. We were one of the first labs to look at deploying Linux on our machines and maintaining our own Linux distribution for HPC (high performance computing) machines. So we did that...

We have a developer here who ported ZFS to Linux from Solaris, and he maintains that port, that's pretty popular... And I think in general in the research community people have done open source a lot. I don't think that necessarily means that they've taken steps to popularize or necessarily build really large communities around their tools, because it's kind of a niche area, but we do have lots of open source projects.

ZFS I think is one of the major ones now, and then Slurm is used all over the place, and that was invented at Livermore. That's a resource manager... It's basically like a batch system for submitting jobs to clusters and managing the nodes and the memory allocating time to users.

**Mikeal Rogers:** These are pretty high-end use cases... Who are the other users of these open source projects, other than Lawrence Livermore?

**Todd Gamblin:** Other labs deploy Slurm, and actually a lot of university computing centers will run that. Our Linux clusters all run Slurm; even our IBM Blue Gene machine - which is like a million and a half cores - runs Slurm, and other national labs also run Slurm on their systems.

**Nadia Eghbal:** \[00:11:09.03\] The name makes me laugh every time.

**Todd Gamblin:** Yeah, I think it's actually from Futurama... So yeah, we have lots of interestingly named tools. And then ZFS I think is used in the industry. I'm not a file systems expert, but I know that a lot of companies have started using ZFS on Linux; it's fairly widely used all over the place.

We ported ZFS because our interest is in -- so we also have developers who work on a parallel file system called Lustre, and that's what we run on our clusters. Lustre is a parallel file system where there's a local file system that it's based on. Lustre runs on top of ZFS in our current configuration, and we're pretty psyched about that, because we get some good performance out of it.

**Nadia Eghbal:** Was Spack the first project that you had open-sourced at Lawrence Livermore yourself?

**Todd Gamblin:** \[00:12:03.00\] It wasn't, actually. In addition to Spack, I've had a bunch of different research projects. For my PhD I worked on a scalable clustering algorithm. That's open source, it's called Muster and it's on GitHub, too. That was sort of for finding nodes in a parallel application that very similar performance characteristics.

I don't think that really caught on... It was sort of a research project; it wasn't generally useful, like a package manager is. We also had a project here called -- well, originally I wanted to call it ClownCar, but that was deemed not serious enough, so we renamed it to CRAM, which stands for ClownCar Renamed to Appease Management. \[laughter\]

**Nadia Eghbal:** Oh, government...

**Todd Gamblin:** So that dealt with a real problem that we had here. When we deployed the Sequoia machine, which is the big IBM Blue Gene/Q system, originally people anticipated running maybe like 200, maybe 400 jobs at a time on that thing, and they were thinking that each job would be maybe 10,000 cores, or something like that, on the order of 10,000.

Now the mission has sort of changed, and one of the things that we're very interested in is uncertainty quantification, so trying to figure out what inputs is the simulation sensitive to? We decided that we wanted to run lots and lots of small jobs on the machine; we had people who really wanted to run a million and a half one-core jobs on the system, and the resource manager couldn't handle it, because it imposed some OS requirements, sockets, memory on the front-end of the system, so we would have to have a process per job that was running in the system, and they couldn't handle that many...

CRAM basically takes one job and splits it into lots of them, and manages that sort of on the cluster, as opposed to on the front-end. So it's kind of a stopgap until we get a more scalable resource manager.

Those are just some examples, but I would say in the research world there's lots of open source software. That's kind of the default for people who are doing research, publishing papers about it... We have a compiler project here called ROSE - it's a source-to-source compiler; that's been open source for a very long time, and actually they've gotten a lot of traction before my project. They've been really well funded by different parts of the DOE historically.

**Mikeal Rogers:** Do you have a sense of how long it's been the default? Because it hasn't always been the default to do everything open source. Do you know when that shift happened? Or just like as long as you've been in it, you've been able to do everything open source?

**Todd Gamblin:** As long as I've been in it, yes. I started here at the lab in 2008, and I know that it goes back further than that. Our early efforts with TOSS, which our Linux distribution (based on Red Hat) - that was in '99 or the early 2000s. Actually, there's a policy document from the DOE from 2004, and it basically says that for all the software developed under the Advanced Simulation Computing Initiative, which is what funds most of our machines - we can talk about that as well - it should be open source, unless there's a reason not to make it open source.

An open source nuclear weapon simulation sounds like a really bad idea, but some of the other software that we develop to make our systems run - that's pure computer science; we can put it out there, and other people can use it and benefit from it... And they do.

So yeah, there's a DOE document that says we should make this software open source from like 2004, and it's interesting because -- you know, that's something we're struggling with now... We do have an IP organization as part of the Laboratory. Livermore has had some successful commercial software come out of some of our projects. Dyna is a physics simulation package that a lot of auto manufacturers use to model things like crashes, and that's been very popular in the industry, and it was originally a Livermore product and I think we've made a significant number of royalties out of it.

\[00:16:20.02\] But other projects, like Spack or a lot of this infrastructure stuff - I don't think we're gonna be able to sell that, and I don't necessarily think that we should, because we're in sort of a niche here. There aren't that many sites that do large-scale high-performance computing, and I think we have the same motivation that a lot of these larger industry open source projects do. We wanna share resources among the different computing sites, and try to develop a lot of the infrastructure together, instead of doing something siloed at different laboratories and developing it independently, because I think it's just redundant effort at that point.

**Nadia Eghbal:** So what's it like when you think you have something that you might wanna open source? What does that process look like for your Lab? Do you have to talk to the IP Office?

**Todd Gamblin:** Well, yeah... So the IP Office wants to make sure that the thing that you're putting out there as open source is not something that we could potentially get royalties off of. That's kind of interesting, because the government in general, technically -- I don't think we're actually allowed to have intellectual property if we were actually a part of the government, but we're a contractor. So because we're a contractor and because we're run by this LLC, we can own things and potentially license them out under commercial licenses, I believe. I'm not an expert on that.

But yeah, so we have to go through the IP organization when we put things out there. For most of my stuff, getting the approval isn't actually that hard; it's the actual process that's kind of tedious. Livermore's software release process involves burning two CDs and carrying them to three buildings throughout the Laboratory, one of which is in like a classified area... So I can't have some of my post-docs go do that, because they can't go into classified areas. That part is kind of tedious, and there's forms that you have to fill out, and they're actual paper forms, so that can be frustrating. But in general, the approval is pretty good, and I think the Lab is okay at a high level with open source software. They actually are starting to recognize the benefits.

The thing that I would really like to do here is start thinking about open source a little more carefully in terms of like "What is our open source strategy with this thing?" Look at open source as a potential software sustainability strategy for DOE projects. That's kind of like what we're doing in Spack; we've actively tried to build a community around that.

Depending on what it is, maybe that's a good strategy, maybe it's not. There's some things that we wanna develop internally that we wanna keep a well-staffed team on, and there's other things that we can probably share effort with other laboratories on and that we would wanna build like a larger community maybe, even out to Academia or industry around. I think it really depends on what the software is, which one of those things you wanna do.

I was on a working group here that was trying to come up with -- I guess it started out as like a software engineering working group, and I think by the end of it we had changed the name of the working group to Software Sustainability. I think everyone thought we were gonna come back and say "Okay, everyone should do waterfall, or everyone should do Agile, and here are the tools that you should use", and what it ended up being was "We think we need more than that to sustain our software here. We need an actual plan for how the project is gonna develop, who we're gonna include in the community, who we think is our target audience for this thing and how we're gonna sustain it, who's gonna contribute to it...", so we sort of came up with a plan that centered around that, instead of trying to be prescriptive about how people can develop their software.

**Adam Stacoviak:** After the break, Nadia and Mikeal talk with Todd about the back-story of Spack and where it's going. We talked about Spack's growing community, how they're finding contributors, especially in a government context. We also talked through the details of Spack becoming a NumFOCUS affiliated project and what that means for it. All this and more after the break.

**Break:** \[00:20:15.21\]

**Nadia Eghbal:** Todd, you've mentioned Spack a couple of times as an open source project that you've created while at Lawrence Livermore... Could you explain a little bit about what Spack is for people that are not high performance computing people, and what inspired you to create it \[00:21:42.03\].

**Todd Gamblin:** I have an easier time explaining Spack to people who are not high-performance computing people than to people who are high-performance computing people, in the sense that like I think people who are not high-performance computing people are familiar with package managers... Spack is a package manager; it's not a binary package manager, it builds things from source, and it's for running on these large machines that we care about. That's anything from like a Cray machine or like an IBM Blue Gene, or just a Linux cluster. We run lots of different things like that.

I think the reason that I built my own package manager is because the way that we distribute software in HPC is kind of different from what you would expect from most software products. People actually build their code from source on the supercomputers, typically because they wanna optimize it for hardware, but also because that's kind of how scientists put their code out there. If you download a simulation code, it comes as a tarball and it probably has dependencies on maybe some math libraries or a numerical solver, or something... And these can get really complicated.

If you look at the climate community, they have just a whole bunch of Fortran models that are tied together in different ways. Our codes tend to be like C++, some C and maybe some Fortran down in the numerical libraries, but primarily they're C and C++. We have Python drivers for some of those things; I think recently we're getting into Lua.

But yeah, so one simulation could be 47, 70, maybe 100 libraries in C, C++, Fortran and Python. So building that and linking it all together and getting fast native libraries there is kind of hard.

And the other thing that we care about is exotic compilers. So we don't just build with GCC, we build with GCC, Clang, Intel compiler, Portland Group compiler, and then maybe the Cray compiler on the Cray machines... Lots of different ways to optimize your code. And there really wasn't a good package manager for experimenting with all that and swapping compilers and compiler flags, and for building lots of different versions of things.

\[00:24:05.00\] Another problem with the software ecosystem here is that people will distribute their code, and maybe it relies on a very specific version of some research library, because maybe that research library is published like by a university, maybe they don't have the greatest release cycle set up, or maybe they don't even do releases. Maybe they just publish to the head of their repo. It's hard to rely on some of those things, and so we have to be specific about a specific commit, maybe a specific revision, or even like a specific version where something isn't broken. And you may get two packages that depend on two different versions of something. So we needed something to support all that.

Essentially, Spack is a tool to build software the way that I was building it, where I would have lots and lots of different versions of things, and essentially any dependency graph that you make is a new version, so we assign a hash to that. And that's a lot like -- if people are familiar with Nix or Guix or some of these, they call them "functional" package managers... It's a lot like that, but we have the added requirement that we wanna rely on the vendor libraries. So when you get a super computer, it comes with an optimized version of MPI (message passing interface); that's what people use to communicate among the processes in their application. So we wanna be able to build packages that actually rely on vendor products, as well as things that we can build from open source. Putting all that together led to Spack.

The idea is that you would be able to make a package that could build across all those different platforms and that people would be able to install it and say "spec install foo" and have foo, which is not generally the experience on supercomputers.

**Nadia Eghbal:** Interesting just hearing some of the things that you have to be particularly concerned about, and it feels almost like you're doing open source but for a smaller but more engaged community of users, beyond your Lab. It sounds like a lot of it is for other labs, or that type of audience, more than a general public, which might be how we normally think about open source.

**Todd Gamblin:** Yeah, I mean... I think for a lot of the simulation codes, the usage model is very different from what you see in web development. Depending on the team -- some of the teams are their own users, so it's a research project, they're developing this thing and they're testing out different versions of it and they're doing experiments with the latest version of it. But they might rely on some math libraries, or something.

Other teams do publish software that can be used by lots of people and they'll actually bother to package it themselves, but I think the build process on these machines is so complicated that your typical computational scientist doesn't wanna get into all those details; they wanna focus on the science.

We actually talked to different teams in the community and try to figure out "What's your deploy process?" Some of them had good practices, and others said "Well, we have one user on every machine, because we build the code once, and there's this guy who runs it for everyone." Then everyone talks to him, they send him their inputs, and he goes and runs it and he sends them the outputs. That doesn't seem scalable to me, but that is how some of the teams operate, and it has worked for them historically.

Now we're starting to see more sharing in the community, and also this sort of push for exascale computing has caused people to really think about how portable their code is... So things like this have started to matter to them.

We have people who are really concerned with performance portability, which is another good reason to package your software and to use libraries that work across different architectures... For a long time - since like the '90s - if you could run on a Linux cluster you were probably okay and the processor architecture on a Cray maybe didn't look so different from what was on a Linux machine. But now, if you wanna get a really powerful system, you might need to use GPUs, you might need to use like a Xeon Phi, which is like a many-core from Intel... Or maybe you wanna run on ARM, or some other exotic type of architecture, and you have to take the same parallel code and get it to run into those models.

\[00:28:14.16\] A GPU is very different from a Xeon Phi in terms of how you would parallelize code for it, and it's very different from your multicore processor. So I think people have started to realize that they have to rely on libraries for that. They really wanna separate that concern out and give it to someone else who works on maybe like the math library, or some abstraction layer for their loops, whereas historically the tuning was not so different across the different architectures that you had to outsource the task to someone else; the teams could get by by writing parallel code for their own system.

**Nadia Eghbal:** So how does that play into thinking about getting contributors for an open source project like Spack? Because I imagine -- I noticed that Spack has a lot of contributors, and there are only so many people that are using Spack in the first place, or your total audience is smaller... Do you feel like you kind of know everyone who could contribute to it, or are there people out there that you think should be contributing but aren't aware of it?

**Todd Gamblin:** I think that one really intriguing place where we could get more contributors would be like industry... I think definitely we could grow the audience for it right now. I think there's a lot of people who still just build things by hand.

I think when you look for contributors you only have to think about what's the structure of the community. For HPC actually I think there's maybe more roles than people are used to in the software community. I think you're used to thinking like developers and users, but actually we have -- so there's users, there's like scientists who want to get on a machine and they wanna run some application and do some kind of simulation. There's also the developers who actually make that simulation (they might wanna distribute their tool) and there's people who run HPC centers. So actually, in this field, your typical HPC center has a user support team, and they deploy a lot of the common libraries and things that people need on their system.

Actually, one of the motivations for Spack was that that particular task was getting to be very overwhelming at Livermore computing, where I am.

In my case - I was a researcher and I wanted to deploy things on the machines for students and post-docs who were working for me who don't necessarily know how to build all these things, but they want to run them. Then we also have a users support team that deals with the application teams, so they deploy software for them. Then some of the application teams actually deploy their own software.

The original contributors to Spack were people who were at these HPC centers who were just sick of building things by hand day in and day out, and wanted to deploy things on these machines. Our deployment model is a little different from what you might be used to from the cloud... Most of these machines have like a shared file system across all the nodes, and will go and build a copy of an application and put it out there, and the users can use these things called modules. So they can say "module load Hypre", or PETSc, or some library, and that gets the tool into their environment, so that they can use it.

So yeah, we targeted the HPC centers to try to get them to work together initially... But it turned out that we started getting more contributions from actual application developers and people kind of hacking on HPC code on their own, and I think that's actually served to really grow the community, but that wasn't something that was necessarily planned.

**Mikeal Rogers:** The other HPC centers - are they as adept at open source as Lawrence Livermore is? Do they have similar policies around it, or are you a little bit ahead in that regard?

**Todd Gamblin:** I don't know that we're necessarily better or worse than the other labs... I think there's strengths and weaknesses in terms of the process. There is no standard process for releasing open source software; it kind of varies from lab to lab. In terms of actually having popular research software, I think -- Argonne has worked on MPICH for a really long time. MPICH is like the most popular -- well, I don't know if it's the most popular, because there's Open MPI now, but it's a major MPI implementation... So they've maintained that for years and they've actually got lots of funding to do that (or at least some funding). And then they also have developed math libraries like PETSc, Oak Ridge has developed IO libraries...

\[00:32:19.25\] I think in large part -- I mean, all the different laboratories have had some large open source project that they've put out there. I think DOE has had an open source software ecosystem for a while. I don't know that they've always had licenses or thought about the licensing aspect of these things, or thought about building communities around them. I think a lot of them are sort of maybe confined to a team at a particular laboratory who maintains the tool.

Accepting pull requests wasn't really easy before GitHub; even setting up infrastructure outside your laboratory could be difficult. A lot of Livermore teams have had trouble setting up all the hosting infrastructure that you need to host an actual project with collaboration tools, Subversion, things like that. So we've had people actually host their projects outside the laboratory to make it easier to get the hosting done for the open source communities. Not all the teams were willing to do that...

Al Livermore recently we've consolidated our GitHub presence, we've gotten more and more people to join the GitHub organization for LLNL; I think it's become easier, so more and more people are getting into that and really starting to think about how they put their software out there and how they do build communities around it.

**Nadia Eghbal:** I wonder how much - I know government is not a monolithic thing, so maybe just for you guys - of open source practices are being influenced by industry, versus they're doing it on their own... Do they care what companies are doing now with open source and looking at that and saying "Oh, we should do it like that?" Like getting on GitHub, stuff like that, or is it in their own bubble?

**Todd Gamblin:** I think different people are pushing that at different laboratories; it just really depends on the part of the laboratory. You could have two groups on the same hallway who feel very differently about this. We have some teams who are reticent to put their development version out there, they don't wanna release things before they're done, they don't know about doing development out on GitHub, and then some of them have actual sensitivity concerns around what they're doing that maybe prevent them from doing that. Or at least the lab doesn't provide 100% clear guidelines on when you can do development out on GitHub and when you can do development inside. Like, you can release your software, but it was for that version; what do you do about incremental changes to the thing? Can you host development outside?

Yeah, so we have people here who have really pushed to get -- Ian Lee, the guy who presented at GitHub Universe on Livermore's open source software, he really pushed to get people to consolidate there and to use open tools, to use sites like Readthedocs and stuff like that, and other labs have people like that as well.

But you know, like I said, I think that labs have for a long time -- software projects, they don't think about building a community around it, and they don't think about it in the same way that the industry does now, in the way that I saw... Like, when I was at the Open Source Leadership Summit (the Linux Foundation event), it seemed like a whole lot of companies had bought into this notion that there were just basic infrastructures that they didn't wanna pay for themselves and that they wanted to build communities around so that they could focus on differentiation and not doing the same infrastructure stuff over and over again. I'm pushing for that here, for us to start thinking that way about a lot of our infrastructure projects, and I think other labs are starting to do that, too.

I wouldn't say though that historically the labs have been against that, I just don't know that they've thought about collaborating among the different labs as much.

**Nadia Eghbal:** In terms of where you decide to start going with Spack, I noticed that Spack joined NumFOCUS as an affiliated project... For anyone who's listening, NumFOCUS is an umbrella organization for a lot of scientific and academic related open source projects, so I was wondering why did you decide to join NumFOCUS, what does that mean to you and what was the process like?

**Todd Gamblin:** \[00:36:25.23\] I don't know, it was kind kind of on a whim. I went to the NumFOCUS web page and I looked at their supported projects and their affiliated projects. I mean, I like all the stuff that NumFOCUS is doing; they're doing all kinds of awesome things, especially for the Python community, and R...

I think that was right after Fernando Perez, the Jupiter guy (he's at Berkeley Lab); he had come out and given a talk here. So I don't know, I was inspired to go and do it. They had a list of requirements and they were like "You can be a NumFOCUS affiliated project if you this, this and this", so I wrote them an email and said "Okay, here's why Spack fits all these criteria." I think one of them was you had to have a community of contributors, you had to have more than three core developers, or something else, and you had to make significant use of their supported projects... So I just wrote an email that says "We do that. We package like 12 out of 18 of them, and we have a community... So what do you think? Could Spack be an affiliated project?"

And what does it mean to me? Well, I like what those guys are doing, and they said that if your project on the NumFOCUS web page, they can encourage people to contribute to your project. So I think for me it was that I'd like to be associated with this community so that potentially these other scientific developers could look at Spack as a potential package manager that they could use. So it's a way to get contributors and maybe users.

**Mikeal Rogers:** You've said something interesting earlier, which is that you've gotten more contributors from the user side of things than you have from the people maintaining the cluster side. Do you think that that's because you've democratized the whole role a little bit more, so you've made it easier and gotten it more accessible to them, or do you think it's just a difference in how those people think about the project and open source and contributions? Is it a cultural difference or is it actually just like a skillset difference?

**Todd Gamblin:** I think it might be a cultural difference. One thing I've found with the HPC centers is they don't adopt things easily; they have processes in place that they use to deploy software; that's been more of a socialization effort, like talking to them and saying "We're really behind this. This is a solid thing that you can rely on, and we have developers here at Livermore who are working on Spack, and we will work with you and help you to port it to new platforms."

For example, one thing we did to get NERSC (which is Lawrence Berkeley Labs supercomputing center) on board is we worked with them to actually port Spack to work in the Cray environment. That was a fair amount of work, but they actually put in some developer effort and so did we, and we thought that was valuable because we worked on CRE, too.

I think one of the things that we did with Spack that was really helpful for getting more casual users to contribute was -- I mean, we looked at Homebrew and some of these other projects... I mean, Spack's package format is based on Homebrew, it's just Python and not Ruby. We looked at what we could do to make it really easy to download Spack and install a package.

All you really had to do with Spack is clone it. It doesn't require you to be able to run Pip or some other Python package manager; you can just clone it and then you can run the Spack executable out of the directory there.

I think that has helped get the regular hackers to start using it. That, and we specifically chose Python because Python is a popular language for scientific computing. I should say that Spack is not the first attempt to build an HPC package manager, there have been others. Oak Ridge had an internal package manager that was based on Homebrew, but it was written in Ruby, and they had a lot of trouble getting people in this community to write packages, because nobody wanted to learn Ruby.

\[00:40:07.15\] Actually, there's another popular package manager that's written in Python from HPC at the University of Ghent (that's in Belgium). It's called EasyBuild. They've done really good things for HPC packaging, but their tool is focused mostly on (I'd say) administrators of clusters, and it doesn't make it easy to say "Do things in your home directory." You can, but I think it's not the model that people are used to, where they just say "Install this thing." They're mostly focused on being like an installation and build tool, and they don't have a lot of the package management features, like uninstalling software and managing dependencies after the packages are installed, that we tried to put in to make things easy.

I was kind of modeling the Spack contribution model on Homebrew, because that seemed like a successful thing, and it's actually something that people in this community use on their Macs, and it seemed like they did a really good job of making it easy to contribute. So to a large extent, I think it was because we made it easy for people to run it in their home directory that they've got us the casual contributors.

**Mikeal Rogers:** Right, yeah. It sounds like the big differentiator for you has been focusing on the users rather than on the cluster maintainers. And, aligning with NumFOCUS is part of that, because most of what they work on is there; being in Python is definitely a part of that, too.

**Todd Gamblin:** Yeah.

**Mikeal Rogers:** Coming up, we get into funding for Spack and how Todd keeps this thing alive, what it's like working on a project from grant to grant versus ongoing programmatic support, and the challenges for open source in government, especially the Department of Energy. Stay tuned.

**Break:** \[00:41:54.27\]

**Mikeal Rogers:** So let's dig into it a little bit... Tell us a little bit about how you get funding for your particular projects. You mentioned a couple projects already that get you a fair amount of funding... How does the funding flow into your project specifically?

**Todd Gamblin:** So for Spack, right now we are programmatically funded. What that means is we're funded by a program. I guess in DOE (and in government in general) a program is a giant source of funding that's been allocated potentially by Congress; that's kind of the best kind of funding, because it doesn't end, unless something drastic happens (fingers crossed). You're basically doing production work at that point, or you're doing some important research project and you have milestones... I think that's fairly stable funding.

There's lots of research funding in government and in DOE. We have an internal funding source, so for all the grants that we get at Livermore, we tax them and we have this thing called LDRD - I think a lot of the other labs do, too; it's called Lab-Directed Research and Development... So if you are doing research, you can propose a project there - that's not necessarily for development though, so I think that's one of the complications.

\[00:44:08.26\] There's competitive funding grants from the Office of Science, so that's another part of DOE; it's outside the NNSA, but we can apply for funding from there. In fact, a lot of our basic science research is funded by that.

Then internally we have some funding pots that are discretionary... Basically, the management of the computational organization LLNL has discretionary money that you can go after. I think it's a more informal proposal process, but that's for things like hardening and maybe porting something to a new platform... Things like that. Sort of more mundane things, not way out there research. Those are the main ways that people get funded.

Other things that people have been known to do - there's a whole SBIR program in the federal government... Are you familiar with that? It's Small Business Innovation Research. That is funding for small businesses to get started. A lot of things that started out as maybe programmatic projects and then sort of outgrew them, they will spin off a small company and then apply for SBIR funding. That's a fairly common thing to happen.

Academic teams will do that, too. We've got some collaborators who built parallel programming models who've gone and spun off companies for things like that.

There are a whole lot of ways to get funded. Navigating all that I think is fairly difficult, and then one observation that I guess I would say I have about the whole process is that there is a lot of research funding in our area for cutting edge things, but as far as actually maintaining the software, that is not considered nearly as much. The value is placed on the cutting edge research and publishing papers and building prototypes, but then actually turning that into a product - there's a gap between the research funding and the production funding that you have to sort of cross.

I think doing that is often a lot of work... You need to socialize your thing, you need to convince someone who controls programmatic funding that they need this thing. Often times, that's getting it into one of our simulation codes, making them rely on it; that's something that would catch people's interest.

Other things would be making it a critical product for the compute center, like if we're actually using it to deploy clusters and we need it, and it makes us more efficient - that's another way that you can get programmatic funding. But in general, it depends on what the software is and what mission it supports how you get funding like that.

There's also a distinction between hard money and soft money. Are you guys familiar with that from Academic research?

**Nadia Eghbal:** No.

**Todd Gamblin:** Hard money would be like the programmatic money, where it's ongoing, it doesn't necessarily go away... It's either overhead for the organization, or it's part of how Livermore is supported over time. Soft money is stuff that you have to apply for, and it tends to have a short lifetime. If you get a research grant from our internal LDRD process or from the office of science, then it might end after like 3 or 5 years... So you need to have an exit plan or something that you wanna do, some way to productize the thing after that, or some other way to get funding.

Usually, the exit plan for a lot of projects here is get programmatic funding for the thing, but that doesn't always happen. It's not an easy task to get a project funded, I would say, and to get it to grown. I think that's pretty similar to elsewhere.

**Nadia Eghbal:** Nobody cares about maintenance, huh?

**Todd Gamblin:** Right, and I think that's actually -- I don't think people think about maintenance as much as they should. I think people think that once you do the research, that it's magic, or something, and the software continues to work because you've already done the development for it... But there's a ton of maintenance that we have to do, so we're pretty conscious of the maintenance cost for things.

\[00:48:07.23\] Depending on the part of the organization it is, the compute center here is very conscious of the maintenance costs. I don't necessarily think that the people who are running research programs are always aware of that, or thinking about how that thing might take off after the research program. I mean, that's not 100% true because there are programs...

Tech Transfer is something that we care a lot about. We're supposed to make products viable for industry, and people like it when you do that... But on the software side, I think that -- I think one thing is that the labs... Like, we're fundamentally a science organization, right? We have a science mission, and we have national security missions that we support, so those are the main focuses of the lab. Software is something that supports those missions, but I don't necessarily think that we think about software maintenance in the same way that a software company or a dotcom would. I don't think there's as much consciousness of the ongoing maintenance costs and of what it takes to support software long-term.

For example, for our simulation codes I think there was this study done, and we found that the number of engineers per lines of code that they had to support and maintain on our teams was a lot -- we had a lot more lines of code per engineers than industry teams do. That was interesting to me, just from a "what do we think about maintenance" perspective.

**Mikeal Rogers:** I feel like we're covering some of the instability in the funding and we're kind of focused on that, and what it doesn't do... But I'm just trying to compare this to other funding sources that we've talked about. If you start a startup, you're gonna have to go out and beg for money every two years...

**Todd Gamblin:** Yes.

**Mikeal Rogers:** If you do grant funding, you're gonna spend a year to get a year of funding, and then have to beg for money again, year on year on year for grants. I think compared to those funding sources, it's actually relatively stable.

**Todd Gamblin:** It is. Programmatic funding is definitely stable compared to those, and I think that's a good thing, right? I think you've talked on this show in the past about software as a public good, right? Maybe the infrastructure is something that should be funded by some part of government for maintenance. I think the thing that you have to figure out there is which software products have something to do with the mission that the government cares about? Because that's the stuff they're gonna pay for.

On our side, the things that I'm pushing for are -- we've gotta think about things that could have a broader impact, we've gotta think about things that we could build communities around, because then we could get both contributors for our projects, and also the investment would pay off for us because we'd be supporting something and getting more out than we put in.

That's actually something that I've tried to point out with Spack - I have this chart that shows "Here's the amount of programmatic funding that we have for Spack", it's like two engineers, or something like that, and "Here's all the contributions that we've gotten." Over the course of a year, the number of packages developed by Livermore went from almost like a 100% of the packages in Spack to less than 25%, so we're getting most of our packages now from external contributors, and that's stuff that we wouldn't have ever been able to sustain ourselves. So I think that we have to find places like that and apply the stable funding there for the ongoing maintenance investment and use it to try to build communities that can help to sustain the software... But that's a hard thing to think about. That's not something that most software engineers think about and it's not necessarily something that most researchers think about, how to actually sustain the product like that.

**Nadia Eghbal:** I'm wondering, for getting contributions specifically... That must be influenced by academic cycles as well, right? So if you have people that are contributing while they're doing their post-doc, and afterwards they stop - is that a thing?

**Todd Gamblin:** \[00:52:04.27\] Yeah, that's a really good point. I think that might be another aspect of the research funding structure that maybe doesn't work so well as the long-term sustainability strategy. In research you're really encouraged to be a PI (principle investigator) and to start new things, so to advance your career in research, you need to publish, you need to run things, you need to get grants, you need to start new projects, but maintaining the old thing doesn't get you additional research kudos necessarily.

I think some projects have managed to make it do that, projects that are widely used... I mentioned the ROSE compiler here. They've published tons of papers, and they always have new collaboration going on some piece of their compiler infrastructure. But there's only certain products that can do that.

We have a paper on Spack, we submitted it to the State-of-the-Practice Track at Supercomputing, which is the big conference in my area, and I think that got us a lot of publicity, but how we would publish more papers, or continue to publish papers about it is up in the air, so we have to rely on the programmatic funding there, and on actual software developers, not just researchers.

**Nadia Eghbal:** Can you talk a little bit about Exascale? Because I know you mentioned that that's a project where the focus has been on actually developing the software and not just on writing papers or getting funding that way, so how did that happen?

**Todd Gamblin:** The Exascale computing project is a major collaboration between the six national laboratories. So it's Livermore, Los Alamos, Sandia, Argonne, Oak Ridge and Lawrence Berkeley Lab. PNNL is in there as well - that's Pacific Northwest National Lab... And I think some other labs are collaborating. But it's a project to build a software stack for an Exascale computer. What that means is we like to measure things in FLOPs in HPC, where a FLOP is a floating point operation. I think your typical web application doesn't deal so much with FLOPs. An Exascale machine would be capable of a billion billion FLOPs - that's floating point operations per second.

So there are plans to build large Exascale machines, and this project is to design the software stack. That's at exascaleproject.org. That was sort of motivated by an immediate need to go and actually build the software stack so that when the Exascale machine gets here - which is something that we're planning to do - that we actually have scientific code that can run on it. Another focus of the project is to make it so that industry can actually take advantage of some of the things that we built.

There's 15 or so simulation codes in the Exascale project, everything from like nuclear fusion to the climate community, to molecular dynamics... There's lots of useful science there that could be used and could have an impact on industries, like for making cars better, making more clean energy in different areas... But we'd like the industry folks to be able to use that. So the project is definitely focused on delivering that software stack.

I'm involved in it in two ways - one is with Spack. I would like Spack to be the package manager that's used for the Exascale project, so that that's how we deploy things on supercomputers, that's how we built things and that's how we make it easy for, say, someone in the industry to pick up one of these codes and use it.
I'm also the lead on a software productivity project - I'm the Livermore lead on a software productivity project (Mike Heroux and Lois Curfman-McInnes from Sandia and Argonne are the main leads on this). But there's actually like an effort within this project, because it has to deliver software, to make the developers more productive.

That involves things like putting training out there, familiarizing scientists and some of these computational scientists who develop the applications with how to build communities and how to write documentation, how to use source control well, how to have a release cycle, things like that.

\[00:56:12.29\] I think it's kind of new territory in a lot of ways, because I don't think we've had a coordinated effort to build a software stack quite as large, so one of the things we've been talking about lately is "How do we coordinate releases of 15 applications in 80 different software projects?" That's not easy. And "Do we need a coordinated release cycle, or should we teach teams to release things on their own pace?" Those are things we're debating here.

**Nadia Eghbal:** And just to clarify, that is an open source software stack...

**Todd Gamblin:** So not all of it is open source. For example, some of our weapons simulations are included in the Exascale project, because they need to be able to run on Exascale machines, but those are not open source. Sorry.

**Nadia Eghbal:** Phew!

**Todd Gamblin:** Yeah, but in large part -- a lot of the science parts of it and a lot of the math libraries and the computer science infrastructure are open source; this is stuff that people could build on. I think it would be really awesome if we could build simulation frameworks and things that someone could come along and build an open source code on top of, because that helps both Livermore and other organizations out.

Our code teams are sort of starting to think about that. We recently had an effort internally to look at how our simulations are structured, and I think they found that something like 40%-50% of the code is pure computer science - no physics, nothing sensitive - and that part could be factored out as like a general tool kit that we could use, and open-sourcing that seems like a really good idea, because we could get contributors and we could help open science with the stuff that we're building.

**Nadia Eghbal:** So how do you get industry contributors involved in situations like that? Do they come to the same sort of conferences that you do? Do you have to reach out to them individually?

**Todd Gamblin:** Yeah, that's a problem. They don't always come to the same sorts of conferences. Industry HPC has always been -- it's something that people shoot for, but not a lot of companies really get into it. There are companies like Exxon that have HPC clusters and they kind of do their own specific simulations for things like oil wells, how the ground is structured, what's gonna happen when we drill here... And those are really big users of HPC. Aerospace also, the Boeings of the world...

But one of the goals of this project would be to sort of expand the middle tier of HPC. It's always been sort of elusive. We'd like to have smaller companies able to use these kinds of resources, but I think the complexity of getting into supercomputing has been so high that they haven't necessarily jumped on board. But there are really good success stories for using HPC in industry...

I think Procter & Gamble - I'm blanking on the guy's name, but he came out here and gave a talk about all the different ways that they use HPC. You've heard of Procter & Gamble I guess, but they have lots of companies under them that they run, so he talked about how they'd used simulations for everything from making the diaper production line more efficient, to making better scentless detergents, and things like this, or improving the way that detergents are mixed. So there's all these applications out there that people could take advantage of this stuff, but before we get industry contributors, we're gonna have to make it a lot easier.

The other problem with getting industry contributors I think is that in many cases for something as complex as like a piece of simulation software, the industry folks really want someone to support it, they want someone to call and to say "We're having problems deploying this. What do we do?" I think for that we would have to look into starting small companies to support parts of this infrastructure, or to have maybe a support contract for like an Exxon or a P&G.

**Nadia Eghbal:** \[01:00:06.16\] Well, we're gonna close out on that note... Do you have any final thoughts to share about lessons learned from your experiences open-sourcing in a fairly (I'd say) comparably difficult context?

**Todd Gamblin:** One of the things that I've learned from Spack I guess is that you really have to think about the broader context for the thing that you're building, and that means giving up some degree of control. I think there are a lot of projects where they've grown up in one lab and they've served that one team, and they could be more broadly useful, but making it easy for people to either jump in and contribute or to pick up the thing and use it for maybe something that the users didn't intend - it wasn't always one of the team's goals.

For Spack we've tried to be really open about contributions; maybe not necessarily implementing things for people, but helping them to implement things and thinking outside of our own use case. That's one of the ways that I think we've gotten contributors and that's how I think we've been able to grow our community.

**Mikeal Rogers:** I think that's a general open source problem... A lot of people who start projects don't wanna give up control, but they want people to work on it.

**Todd Gamblin:** Yeah, I totally agree. And teaching people to do that... Actually, that's one thing I could say - a lot of our teams are scared of what will happen if they put something out there as open source and they start to get a lot of pull requests. They're like, "What do I do? I'm gonna have to support all these things? How do I deal with this?", so one thing we're trying to do here is teach people to deal with those contributions and to say "I don't have time to implement that, but we can help you, and we can maybe improve the documentation in that area and then you can contribute, and we'll have to figure out how to maintain that feature, because maybe we're not gonna use it." So just being open to things like that I think can go a long way.

I don't have a silver bullet for "How do we maintain this feature you contributed after you contributed it?" I think that's the harder problem and you have to get creative.

**Mikeal Rogers:** Definitely. Thanks for coming on.

**Todd Gamblin:** Sure, thanks for having me. It's been great!
