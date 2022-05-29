**Gerhard Lazu:** I'm so happy to be welcoming another Ship It fan on Ship It today. Welcome, Puerco.

**Adolfo García Veytia:** Hey, Gerhard. Yeah, I'm a super-big fan of your show. I've been a fan of some of the Changelog podcasts over the years, mostly Go Time, and now Ship It.

**Gerhard Lazu:** I'm curious, what difference does this podcast make for you?

**Adolfo García Veytia:** So right now I'm working mostly in securing workloads for open source, but before that I used to be a DevOps engineer, and mostly dealing in how to build and ship software, so it just fit perfectly for me hearing about what other people are doing, some cool tools, all of that.

**Gerhard Lazu:** And does it resonate with you? Do you find like it's something that just relates to your maybe past work, and somewhat your present work as well?

**Adolfo García Veytia:** Yeah, absolutely. I mean, so much about DevOps and shipping software is about the human side of things, so hearing people actually doing that in the trenches is really helpful.

**Gerhard Lazu:** Okay. Did we cover any topic which you've found controversial?

**Adolfo García Veytia:** Well, going from Kubernetes, I did not share the idea of storing PostgreSQL in the local file system, but... I mean, everybody does it their own way, right?

**Gerhard Lazu:** Where would you store it? I'm curious.

**Adolfo García Veytia:** \[04:01\] I don't know... I don't know which problems you had at the time. I don't know what kind of load you had on there... I usually used to rely on the cloud providers volumes, but it seems that -- this is another part that I admire of your setup, is that you always want to get them ready to be easily movable to anywhere... So that's one way of doing it. But maybe some of the other offerings add too much complexity, so we had to do it.

**Gerhard Lazu:** Well, we talked in episode \#50 how we actually moved to a managed PostgreSQL, so that has happened... We also migrated off of Kubernetes, to a PaaS... That was a bit crazy, but we had to get good reasons for that. We talked, again, in episode \#51 how to use the PaaS better. And there's like a couple more coming, but I think Kubernetes will have its comeback. And I think PostgreSQL will finally move to like a properly managed distributed one. It could be Fly, it could be somewhere else... But somewhere that we can connect from multiple compute or runtimes, whether it's Kubernetes, whether it's a PaaS; wherever the app runs, it can connect to the PostgreSQL instance, which is distributed, which may be just a PostgreSQL protocol... So we don't know. But we'll see. We'll see. But you're right, that was a very controversial - even for many people that I talked to, it was like "Why are you doing that?" It just generated so many questions.

So one more question about the podcast and then we'll move on... What topics would you like to listen on Ship It? Are there any topics that you would enjoy us covering?

**Adolfo García Veytia:** Right now I'm really interested in seeing how some of the stuff we're gonna be talking about gets adopted by people, and hearing about the challenges that we're gonna be facing. Some of the tools we're gonna discuss today are becoming really quickly the standard for securing some of the workloads... So I work on the open source projects, \[unintelligible 00:06:02.17\] these tools, and I will be really interested in finding out the challenges, or difficulties, or any suggestions that people may find. So if we can have people working on that and sharing, it would be a great asset.

**Gerhard Lazu:** I'm thinking exactly the same thing... So I'm really glad that you're confirming that that is a good idea and we should do more of that... Specifically supply chain security, and all the container and the configuration security as well, how do we sign them, how do we verify them, all those topics. We'll dig into them in a few minutes.

But first, we are both going to KubeCon EU. How amazing is that? It's been my first conference in-person in like two years, maybe two-and-a-half years, and I'm so excited.

**Adolfo García Veytia:** Yeah, it's gonna be incredible, because we did have an in-person KubeCon in L.A. and attendance was still low. It was weird because you were doing your talks in huge rooms, and with very few people in them... We missed a lot of friends in KubeCon, so I'm hoping that this one will return closer to the glory days of past KubeCons.

**Gerhard Lazu:** Yeah, I mean... Again, an in-person conference, and KubeCon... Yes!! I'm just so excited. So excited.

**Adolfo García Veytia:** Yeah, absolutely.

**Gerhard Lazu:** I'm very excited to meet you. Which people are you excited to meet, apart from me? We've already established that... \[laughter\]

**Adolfo García Veytia:** For example, I've been working for several years now with several contributors from Kubernetes, from Europe and India, which I've never met in-person before, so I'm really excited to have a change of meeting them. Some of \[unintelligible 00:07:44.02\] back there, and - well, lots of other people from Kubernetes. Even some from the Americas didn't make it to the last conference back in L.A, and I'm really excited to meet them.

**Gerhard Lazu:** \[07:58\] Have you checked the agenda? Do you have any talks, or any events that you're keen on joining?

**Adolfo García Veytia:** Well, I am going to do some volunteering for the Sigstore booth. I also have to talk, so I expect my schedule to not allow me this time for attending a lot of the sessions. So I'm more expectant of the chance of meeting everyone at the events after the sessions.

I'm trying to be also a track host for some of the talks of some of my friends, for example in SIG security, and I'll be helping more than attending this time.

**Gerhard Lazu:** Right, okay. Now, I did check the agenda, I have noticed your two talks, and I have one important question. Is your content ready yet? Are you finished with the slides?

**Adolfo García Veytia:** Ready? No...

**Gerhard Lazu:** You know what conferences are like, with people... Exactly. Is the answer no? Like, you're finishing the slides a day before, right? \[laughs\]

**Adolfo García Veytia:** Exactly. And it's mostly because I'm still working on the demos. We are working on a lot of cool stuff for the Kubernetes supply chain and release process, so I'm still trying to finish some features I'd like to demo. Once I know what I can show, I'll do the slides.

**Gerhard Lazu:** Okay.

**Adolfo García Veytia:** I have a long flight in front of me, so I have time to do them.

**Gerhard Lazu:** That's exactly what I would expect to happen... You're just like still figuring these things out. So what are you working on right now? And Adolfo or Puerco, which one do you prefer?

**Adolfo García Veytia:** So right now we did a demonstration of the SBOM Tools. SBOM is Software Bill of Materials... That we built for Kubernetes during the KubeCon in L.A. So those tools have become more sophisticated in the six months that just passed. We now have the ability, for example, to attach multiple -- to split SBOMs into multiple SBOMs.

For example, an SBOM is a list of materials and assets that you release with your software. It can list, for example, source code, container images, binaries... Everything that you put out as a software release is listed in there. And usually, you will find that you get a huge list of everything which you download, and you use. But now we've been focusing on splitting the SBOM into micro SBOMs, which you can store right besides the images, for example. So instead of having one central SBOM, you will have the contents of the image stored inside of the registry, and we now are working on the tools to pool those together, and that you can present a central view of all of the information in separate SBOMs in one central place.

Then we just finished signing Kubernetes. There will be some demos about those signatures, how they're structured, what information you can get from them, and if I have time, I will also like to show some of the provenance attestations that we publish with the Kubernetes releases. We'll see.

**Gerhard Lazu:** Okay, okay. So there's two talks that you're giving. One is just you; you were talking about "Make the Kubernetes supply chain work for you", and I'm very curious of digging into what does it mean for it to work for me, or for a listener. And the second one - you have a talk which is being co-presented with you, Carlos... You're both from Chainguard. You have Sasha from Red Hat, and Steven from Cisco, and that one is "Releasing Kubernetes less often, and more secure." I love that title, it's a great one.

So I would like to dig into the first talk first, and I think a lot of things that you're mentioning - the tooling, and the demo, I think it applies to the first talk. Is that right?

**Adolfo García Veytia:** \[12:05\] Yeah, exactly. My talk would center on those tools. So most of the tooling that we've built for Kubernetes, and also some of the tools that we, in turn, use, like all of the six tools for container image signing are not specific to the project. So you can download all of the SBOM tools that we have and produce your own SBOMs. We have release tools to sign and publish on GitHub your artifacts... So we have a couple of those, and I'll try to present a coherent story of how to put all of those together, so that you can also use them in your project. That's the first one.

**Gerhard Lazu:** I'm wondering, can you give us a really quick tour? Let's imagine that I'm producing some software, and it has some container images that I'm releasing... Maybe some manifests, I don't know. As a quick summary, what are the tools, how do I use them, what does the process look like, in a few minutes?

**Adolfo García Veytia:** So I think I'll center the talk on how to do your release using probably GitHub Actions, and then pooling some of those tools together. So you would get, for example - the first thing is that you build your project and produce this bunch of container images and binaries, and then you can produce the Bill of Materials, the SBOM for your project, using our tools.

Then using our tool you can attach that SBOM to the images, then you use Cosign from Sigstore to add a signature to those. And time permitting, we'll see how to produce an attestation summarizing everything that you run, and the outputs you produced.

**Gerhard Lazu:** Okay.

**Adolfo García Veytia:** So that's basically the gist of it.

**Gerhard Lazu:** So the tools that you used to create the SBOMs - what are those tools? What are the names?

**Adolfo García Veytia:** Well, it's a project called BOM (Bill of Materials), and it's any tool that we derived and produced from all of the libraries that we built into the Kubernetes release project. Two years back, when we decided to give Kubernetes releases in SBOM, a lot of work went into producing that, and so we thought "Okay, this is software that is worth releasing for other projects to take advantage of." And it's been doing well. We have gained some external contributors into the project. Right now it's incubating -- the tool itself is incubating in the Linux Foundation, ACT workgroup, which is automating compliance workgroup in the LF... And it's been adopted by other projects. For example, I just helped one of the Istio maintainers to produce the Istio Bill of Materials using the Kubernetes tool, so it's nice to see that cross-project collaboration going on, where we do the effort, other people can take advantage, and in turn, they contribute back to us with batches, and also learning.

**Gerhard Lazu:** So this tool, I'm imagining it's a CLI. It's a Go-based CLI...

**Adolfo García Veytia:** Yeah, exactly.

**Gerhard Lazu:** And you pointed to a container image, to a registry, to a binary... What do you point it to, and what happens next?

**Adolfo García Veytia:** There are still ways that you can run it. You can point it to source code directories and it will produce an SBOM of those, including the dependencies that it finds. You can point it to container images, and it has support, for example, going inside of the container images, and it has support for listing the packages that are installed in the images, the operating system packages... You can point it to single files, for example SBOM-listing all of your binaries; we use that for Kubernetes.

\[16:08\] It also has support for other not as widely used artifacts, like for example image archives... And we are - I hope I can finish this one for KubeCon - also adding support to indexing inside of the operating system packages. So say you point a tool to an RPM, or an APK file, and it'll list everything inside of it.

**Gerhard Lazu:** Okay. Out of all the different artifacts that it supports, which one was the hardest one to implement?

**Adolfo García Veytia:** Container images.

**Gerhard Lazu:** Container images, okay.

**Adolfo García Veytia:** Yeah. They are more complex, they are nested... It's an artifact that is nested, in the sense that it has layers, it has file systems inside of those layers, those file systems can be layered on top of each other, and then you have the operating system packages inside of that, so it's a multi-dimensional thing inside of them.

**Gerhard Lazu:** Okay. And do you see just the name of packages, or do you see more details about those packages? ...like name of maintainers, email addresses, licenses... How much detail do you get in the SBOMs when they're produced?

**Adolfo García Veytia:** Well, it depends on the artifact. For example, when you're running against Go modules, you will fetch 1) the dependencies, it will take licensing information... So it has a classifier that tries to run through the licensing files it finds, and recognize which license it does... So you get that information in your SBOM.

And maintainer support - I don't think it's already there. So we need to add the name of the maintainer of the Go modules to the SBOM. I don't remember if we have that in Go modules; I will have to check. And then, for example when you go to -- for example when you go into a container image, you get the name of the operating system packages that it finds inside of the layers, you get the version... Licensing information is not yet extracted, I think... And yeah, you get the nice structure about how the container image is built, layers, and then inside each of the packages.

**Gerhard Lazu:** Okay. This is an obvious one, but I think that many are thinking this same thing, which is why is this important? Why is having this list of dependencies and all those details important?

**Adolfo García Veytia:** That's the purpose of the SBOM. So let's say that you have an incident inside of your system; some companies run really complex systems, with hundreds, maybe thousands of workloads, and a vulnerability comes up. \[unintelligible 00:18:43.18\] we have this example right now of Log4j that recently happened, right?

**Gerhard Lazu:** Yeah.

**Adolfo García Veytia:** So it turns out that companies have a hard time knowing what's running inside of their computer systems, and they have a hard time knowing even -- so if they have a hard time knowing what's running, they have an even harder time knowing if those workloads \[unintelligible 00:19:10.22\] vulnerability. So the first step to knowing that is producing information to know what's running where. And that's where the SBOM comes in.

For example, if you have your workloads completely covered by SBOMs, and describing all of the dependencies that you have, you could simply go and query those SBOMs and find out what is running where. And you could take action based on that. And SBOMs also help you in doing other things, like for example licensing, compliance... Right now the focus has been -- since the executive order to \[unintelligible 00:19:49.22\] cybersecurity came out last year, a lot of focus has been put on SBOMs and the way they are produced, consumed, and how tools play with each other.

**Gerhard Lazu:** \[20:05\] Okay. So those SBOMs, when they're used with containers, they end up being added to the container image. And then I think you mentioned Cosign from Sigstore being used to sign those container images. Before we go to Cosign, those SBOMs are like spread across hundreds, maybe thousands container images. How can an organization see what dependencies they have from those SBOMs, if the SBOMs themselves are attached to all those images, and then the question becomes, "Well, what images are we running?" Is there like a centralized place where those SBOMs can be added for an org, for them to see "Okay, these are all the images, these are all the SBOMs..." Because I imagine there will be a lot of duplications... Or is that maybe too far in the future, what I'm thinking?

**Adolfo García Veytia:** The last six months or so, people were focusing more on "How do I write an SBOM? How do I actually get the information--" There's still lots of debate going on on the right way to produce an SBOM. So what is the true nature of the information in an SBOM? There is debate going on. But the past six months have been mostly about organizations focusing on producing SBOMs, because others will start at some point demanding them from them... And the tooling to use them is starting to emerge right now. Some of the known security tools out there are already able to consume those SBOMs and ingest them and analyze and allow you to take action. There's a little bit of policy around them, but it's still the early days on how you can do it.

There are some of us - like, the company I work in is one example - who are thinking about the problem, trying to come up with solutions to actually make them more usable and easier to work with.

**Break:** \[22:13\]

**Gerhard Lazu:** So in this landscape then we have Cosign from Sigstore. How does Cosign help signing images and how does that work very roughly, in terms of certificates, where they're stored, verification...?

**Adolfo García Veytia:** It's a good entrypoint. So Cosign is probably the most developer-centric tool in the Sigstore set of tools. What Cosign does is it will -- in its easiest operation mode, Cosign will allow you to generate a key pair, and then sign a blob, a file. But then, beyond that, things start to get more interesting.

So the first one is Cosign is part of the Sigstore Project, and Sigstore is not only just about signing. Sigstore has a public transparency \[unintelligible 00:24:45.22\] where all of the operations get stored. So while you can generate a key-pair with Cosign and keep the keys to yourself, you can also use your cloud's KMS system to store the keys and use them. For example, if you run workloads inside of Google Cloud, you can store your keys inside of Google Cloud's KMS, and when you run Cosign, use those to sign and continue.

But then the really, really great thing about Cosign is that it has the ability to generate ephemeral keys, where you generate a key and a certificate, and it's valid for a really short period of time; you sign your things and store the public key inside of Sigstore's transparency log.

So whenever you need to verify that artifact, Cosign can go and query the transparency log for the public key, the certificate, to verify the artifact that you've just signed, and basically it works like magic in the sense that you don't need to distribute \[unintelligible 00:25:56.23\] The information about all those signatures can be attached to the container image in the OCI registry.

**Gerhard Lazu:** \[26:10\] Okay, interesting. Where does the Sigstore transparency log run? In terms of infrastructure, I'm thinking. It must be a public service, so that anyone can connect to it. Where does that run?

**Adolfo García Veytia:** Yeah, so Sigstore is a project from the Linux Foundation, and Sigstore is providing all of the infrastructure for running the transparency load. So currently, the project has an ongoing effort to get Sigstore to general availability, and some of us are working on that project to finish all of the infrastructure changes required to get the project to GA. So we have been looking at things all the way from the infrastructure to defining all of the policies, like deprecation policies, release policies... So really getting everything the project needs to get it out there.

In terms of infrastructure, it runs in Google Cloud, and it has the backing of some companies that \[unintelligible 00:27:17.16\] Chainguard, where I'm working, is one, but it also has support from Red Hat, from Google, VMware, and lots of others.

**Gerhard Lazu:** Okay. Is it a Kubernetes cluster? Or one of the components, is it the Kubernetes cluster? Is it using GCS? I'm just trying to imagine it in terms of an architecture; what does it look like roughly?

**Adolfo García Veytia:** Yeah, it runs on Kubernetes. The transparency log itself runs -- the backend is a project called Trillian from Google, which powers the transparency log, and in front of it it has a Sigstore component which is called Rekor. Rekor is the part of the project that stores and serves the information in that transparency log. So that's one. And then everything runs in the Kubernetes cluster.

Then there is another component which is called Fulcio. And Fulcio, what it does - it's the certificate authority for the project. Fulcio is in charge of handing out certificates to sign and verify all of the artifacts that you sign. Those are the two infrastructure-wise heavier components.

**Gerhard Lazu:** That sounds like a really important component in this stack, the supply chain security stack, that everyone is contributing towards, or at least thinking about, but definitely being a part of in different ways. I know that this becomes almost like Letsencrypt. Maybe not as big, because the timelines are different. Letsencrypt has been around for a long time now, many years, but I can see it becoming increasingly important, and maybe from a scale perspective one day it could become even bigger than Letsencrypt, because everyone has to do this that run software. It doesn't have to be just like a public-facing software, and I can see this becoming really important. It's almost like the modern security infrastructure, or a component of the modern security for the internet.

Someone described it as like the wax seal of the cloud-native infrastructure, and I think that is very, very accurate in terms of how I'm picturing it. It's so important. Not everyone used PGP or GPG, but even that is fairly significant. But this - I think it has the potential of becoming even bigger, and I'm really excited to see where it goes. So that's why the building blocks - they have to be really solid, and many big companies have to be involved in it for it to be successful. And I don't think there can be any one dominant player, because I think it will belong to everyone at some point. Or maybe it already does.

**Adolfo García Veytia:** \[30:06\] Exactly, that's the idea behind the project. So it's not a company endorsing it, it's an open source project where lots of people can come and contribute. The idea is to make it as vendor-agnostic as possible.

So comparing how Letsencrypt was able to secure the web world is really appropriate and a really good analogy of what Sigstore is trying to do for the software world.

The idea is that no one single organization, no one certificate authority should control them. In Sigstore you are in control of all of the identity that signs your software. One key difference is in Letsencrypt you proved your identity basically by showing that you are in control of your domain name.

**Gerhard Lazu:** Right.

**Adolfo García Veytia:** So either by DNS, or putting a special file in a predefined location you are able to demonstrate that you own the domain, and Letsencrypt would issue a certificate for you based on that.

In Sigstore things are a little bit different. The way it works is that you use OIDC identities to sign your software. So currently, the way it works is that when you're trying to sign an artifact, Cosign will ask you to log into one of the OIDC providers that it supports. So once you log into your provider, it will start the OIDC flow, and then use the identity to generate that certificate, and sign your artifact.

But if you think about it, one key difference here is that in Letsencrypt when they issue a certificate, you are in position of the certificate and you install it in your own web server. In Sigstore the infrastructure to do the verification has to be carried by the public service. So the Sigstore public good service that we are working on getting ready for GA has to handle each request for verification of those certificates. So when you pull the container image and you try to verify the identity, it will go and check in the transparency log that the record exists, so that log has to be handled by Sigstore.

Fortunately, there are a lot of smart people working on the team to get that infrastructure ready, and it should be -- perhaps by the time you hear this it'll be GA, or pretty soon afterwards.

**Gerhard Lazu:** So for KubeCon EU 2022 - that is the reference point when this will go GA.

**Adolfo García Veytia:** We're trying, but... We'll see, yeah.

**Gerhard Lazu:** Okay. Nice. How long has this been in the works, by the way, setting all this up, the infrastructure and solving this problem?

**Adolfo García Veytia:** Sigstore has been around for about a year and a half. Quite a lot of traction for that time. It has quite a lot of traction for that time. And the GA project -- I mean, some of the infrastructure was already running, but then defining a goal to get it to GA and to actually having established goals, the policies of the rotation of log, all of the \[unintelligible 00:33:27.28\] that has been in the works now for around three months or so.

**Gerhard Lazu:** Okay.

**Adolfo García Veytia:** And it involves everything from writing the infrastructure, the Terraform, the access controls... Everything.

**Gerhard Lazu:** Okay. Is there a repo that we can link in the show notes that maybe shows what this looks like? Or maybe a blog post?

**Adolfo García Veytia:** I know that we open sourced some of the Terraform code to get the Sigstore tools... Because the idea is that you can also -- everything in Sigstore is open source, so you can download any of the components, run it separately, or you can run the whole thing inside of your premises if you want to.

\[34:11\] Some of the work that we've been doing for GA has been open source; some of the Helm charts, some of the Terraform was going to be open source as well... I don't know if -- I don't have it right here at hand, but I can certainly \[unintelligible 00:34:24.01\]

**Gerhard Lazu:** Yeah, that's okay. I'm more curious about how it all fits together; the overview of the different components, like the architectural diagram, I suppose... That's always worth a thousand words. Just understanding at a high level, and to have a better appreciation for how -- I don't wanna say complex, but how challenging it is to solve this in a simple way. In a way that just makes sense, and everyone agrees with, and everyone says "Yup, this will work." Just basically seeing that.

Even for Changelog, for example - I still think about the architectural diagram which I drew I think in 2019. I still keep going back to that, and I wish I was able to update that... And I'm wondering -- because then the question becomes "What tooling are you using for that? Oh, that's a very interesting-looking diagram. Is it ASCII art, is it something else? Let me see." And before you know it, that in itself generates another conversation.

But being able to appreciate just how big this thing is I think would go a long way, that's what I'm thinking.

**Adolfo García Veytia:** Yeah. I was in charge of defining the IM, and the groups, and defining the part of the access to the project... So I can check with the folks running the infrastructure and see what we can get.

**Gerhard Lazu:** Okay. So the other talk that you'll be involved with - this is one that you're co-presenting - is the one about releasing Kubernetes less often, and making it more secure. So I'm intrigued by both the less often part, and the more secure part. But I think the more secure part - we've covered it fairly well in talking about Sigstore, and BOMs, and Cosign, and the transparency log, and all of that. So why releasing Kubernetes less often? What is the story behind that?

**Adolfo García Veytia:** Yeah, so this talk is basically the Kubernetes SIG Release update from \[unintelligible 00:36:26.15\] So during the day I'm a software engineer at Chainguard, but I am also one of the technical leads with Kubernetes SIG Release, and this talk is going to be like our update about the work we've been doing for the past year. And one of the things we did last year was switching Kubernetes releases from four a year to three a year. The decision was made to move it that way.

After one of the releases - I think it was 1.19 - fell right in the middle of... You know, there were race protests in the U.S, there were -- I don't know if we'd run already into the pandemic... So it was a really challenging one for the release team. And also, we felt that the majority of the project now would enable a more comfortable release cycle, where we instead of having a three-month release cycle, we would do it in four, and enhancements have more time to get into the -- to meet the deadlines, the documents, so that features and all the bugs are in place, ready for the release.

So we decided to switch from four releases a year to three, and it's been working out. This was after that long release, that it proved that everybody was in a more chill state of mind, and things worked really well. \[unintelligible 00:38:01.14\] more of a time commitment for the volunteers in the release team, but in general it's been working well.

**Gerhard Lazu:** \[38:10\] Okay. So going from four releases to three has been a good thing. What about going from three to two? Like, if you follow the same pattern. Would it also be a good thing, I'm wondering? And if not, have you talked about it, like why not two a year? Why three a year?

**Adolfo García Veytia:** Yeah, so two starts to become more difficult, because if you miss your enhancement for one release, you have to wait six months until you see it in the next one. So it's kind of difficult to do that.

The amount of enhancements going into Kubernetes releases has been increasing quite rapidly, so slowing things down to get things right is one thing, but then you don't want to do releases that have huge amounts of change that they may even turn out to produce problems, because things have changed so much from six months to the next six-month cycle.

**Gerhard Lazu:** Okay, okay. That makes sense. So what about the support window? We had a fairly unfortunate situation; I wouldn't call it -- an unfortunate series of events. Let's call it that. We were running 1.20, and we had to upgrade -- this is a managed Kubernetes; we had to upgrade to 1.21 within a certain time period. I think we had like three months to upgrade to 1.21. If we didn't upgrade to 1.21, there would be a forced upgrade for us. The forced upgrade would mean that all the local data from the host where that worker node was running would be wiped. That was okay, but that would have introduce downtime that we didn't want. So we were thinking, "Can we just delay this update, just like for another week or two?" and we couldn't do that. So we were basically forced to upgrade. And we don't do in-place upgrades; we always spin the new version. We upgrade the components, like for example the external DNS we're running, cert manager - there are always a bunch of updates that we pick along the way... And I know that 1.23 - that's a big one, because that's the one that I think removes Dockershim.

Luckily, we didn't have to go to 1.23. We had 1.21, 1.22. But still, for us doing a long blue-green worked really well, in that you deploy the new one, and then you start upgrading the components, and eventually migrating the workload, the important workload for us.

Being forced to upgrade is really not fun. It just introduces pressure, it's just stress, you have to move on, you have to move faster, you have to cut some corners... It wasn't a fun experience. So I'm wondering, from a Kubernetes release team, how are you thinking about support windows for previous Kubernetes versions?

**Adolfo García Veytia:** Yeah, so our policy has been to support three branches. Right now we've just released Kubernetes 1.24. This is the one that deprecates Dockershim.

**Gerhard Lazu:** Oh, sorry. So it's not 1.23. Okay, 1.24. Thank you. Okay.

**Adolfo García Veytia:** Right. So there was a communications issue back then, because deprecations are announced in one release, but do not actually take place until further releases down. And I remember back then when the news went out - I think it was just someone picked it up from a release note, or something, that Dockershim was going to be removed, and people started panicking... But the actual deprecation is now.

**Gerhard Lazu:** Sorry - do you mean deprecation or removal? Has it been removed or deprecated?

**Adolfo García Veytia:** Yeah, the deprecation happened there, and then the removal is now.

**Gerhard Lazu:** Okay, okay. Yeah, that makes sense.

**Adolfo García Veytia:** \[41:52\] And yeah, if you see the actual documentation and communications around Kubernetes 1.24, there's a lot of things dealing with the Dockershim deprecation. \[unintelligible 00:42:01.14\] which users are affected, who isn't, who should worry... So basically, for people who are running their own instances of Kubernetes, it's more of a concern than, for example, folks who have their Kubernetes run for them, for example from a cloud provider. So that's the way deprecations usually work. They're deprecating at some point, and the actual removal takes place some releases further down.

And then we usually support three of the branches. Right now we've released Kubernetes 1.24, so that means 1.23 and 1.22 are under support. We also have a little maintenance period after we end-of-life one of those branches. For example, I think it was in 1.19 that it was already out of support, and it was in maintenance mode, and that means that -- I think \[unintelligible 00:43:08.19\] came along in Kubernetes, so since it was still under maintenance mode, we took the batch and cherry picked it to 1.19. But just because it was like a really, really important and critical patch. Other than that, we always keep two releases always under support; that means whenever the SIGs that handle the different components of Kubernetes have bugs - because actually features, we don't cherry-pick them. It's only bugs and security updates to the project. We cherry-pick those changes back to those branches. And once they're out of support, they don't the cherry picks.

**Gerhard Lazu:** So listening to you talk about that - it made me realize how much work that is. And I know it's a team of people behind this. But you do a lot of things. How do you find the time to do all the things that you do? It's not just the SIG Release technical lead, did you say, or technical -- technical lead?

**Adolfo García Veytia:** Yeah.

**Gerhard Lazu:** So you're not just the tech lead for the SIG Release group for Kubernetes, you're also involved with Sigstore, you're also involved with Chainguard, and I'm sure a bunch of other things. You go for regular bike rides... How do you find the time for all those things? How does it work?

**Adolfo García Veytia:** So right now it's part of my job, right? It's much more fun and less pressuring. But before this, before I joined Chainguard back in January, it used to be weekends and afternoons doing it.

**Gerhard Lazu:** Wow, okay.

**Adolfo García Veytia:** I think that's the story for most Kubernetes contributors. There are some people who are paid to do the work, but mostly it's volunteers. Even people testing the project inside of their companies - it's not their full-time job, but... Well, right now I have -- so Kubernetes is one of the key projects that my company is interested in, so I get to contribute, and I have more time, because I can do it in the daytime.

**Gerhard Lazu:** Why do you do that? Why do you give your free time for all this work?

**Adolfo García Veytia:** I don't know, it's just the nerd value I get out of it... I get excited by working at some of the problems that we work in. I work in the Kubernetes release side of things, not in the actual code that gets shipped to people. I ensure that the code gets shipped to them.

So I've been working on lots of interesting problem that I find interesting, like how do you secure things, and how do you parallelize the workloads to build things faster, to ensure the integrity; how do we verify the binaries that we put out and ensure that we do not ship a Windows binary to a Mac user... Things like that are the things I like doing.

\[45:55\] So I started working on that, and when the supply chain security world started emerging really hard last year, we started focusing our work in the scene towards securing the Kubernetes release process, and - well, here we are now, with these last few advances.

**Gerhard Lazu:** Okay. Out of all the things that you do work-wise, which one do you enjoy the most, and why?

**Adolfo García Veytia:** Do you mean like in my day job, or...?

**Gerhard Lazu:** Well, it can be both day job and in your free time... But all work-related activities that you do. All the projects that you're involved with, all the things that you do - which one do you enjoy the most? Is it the Kubernetes release, is it the Sigstore aspect, is it maybe something else? The one that you cannot wait to get to in a given week.

**Adolfo García Veytia:** Well, the one I enjoy the most definitely is working with some of the folks in the release engineering team... So we are a bunch of contributors/friends/also nerdy engineers who enjoy working on that... And I enjoy very much getting to design solutions for some of these problems, and just working over the ideas with them, and discussing them at meetings, and splitting the problems and seeing how other people come up with different solutions, and we all learn from each other - that's the more rewarding part for me.

Some of those transform in solutions that benefit a ton of people downstream. So you not only get to play around, play along with your friends, work on interesting problems and build cool stuff, but you also have a huge impact downstream.

**Gerhard Lazu:** I can see that. I can see that people coming together aspect, people that think alike, are alike, like the same things, and just -- you know, the problems and the work just attracts them, and it brings the best out in them. I can see that. And really wanting to get together around a specific problem.

**Adolfo García Veytia:** For example, the Kubernetes project to sign its container images, which we just finished, was a really good example of that. You have, of course, the Sigstore tools which are excellent, and you can use them to sign your workloads right now, but Kubernetes has its own set of challenges which are - well, not baked into the tools... So we had to instrument lots of solutions inside of the release process to be able to sign things. For example, problems like - we have a multi-stage release process; so we build our things in one process, and then promote and release them in another process. So how to ensure the integrity and the signatures from the first one, and carry the signatures to the next one. And then when we mirror things, Cosign will happily go and sign your OCI registry, but then we have to mirror -- so if we point it to one of the mirrors, the others don't get a signature, so how do we replicate the signature to the other ones? All of those problems - we broke them up in little pieces, and opened issues, and people were coming and grabbing some of those little pieces and contribute them back. It was really interesting. One of the best moments in the \[unintelligible 00:49:27.15\] I've ever been involved with.

**Gerhard Lazu:** I think that just based on the last few minutes, I would really like to learn how Kubernetes gets built, tested, and released. I think that is at least an episode-worth of talking about how does the machinery look like, and how do you ensure that it continues working year after year for many years now?

\[49:58\] And the releases... Because the amount of contributions, the amount of people involved and companies involved is a crazy number. I know that you know it... Tens, hundreds, thousands people. I'm pretty sure it's thousands of people involved with every single release... And it's fascinating to see and to understand how can you make that work long-term, with all the changes over the years.

**Adolfo García Veytia:** It's a really wonderful process. So the way Kubernetes works is contributors merge their code into the main Kubernetes space. So release managers, going through the process, making sure some of those changes get cherry-picked back to the branches where they're needed. And when we've got batch releases for the old branches, that release manager goes and cuts that thing.

Releasing a new Kubernetes minor version, like 1.24 now - it's a huge endeavor, comprised of several teams that go together and do things like the release notes, \[50:58\] enhancements, ensure bug triage is finished by that time, documentation, communications, the blogs... And there's a release lead that coordinates all of this. The release team is comprised of around 30-35 people who rotate every cycle. Right now, by the time this episode airs, the survey to be a part of the release team should be out; so if people are interested, they can apply there.

It's really competitive. Of all the names that apply, only around 13% get chosen. We of course encourage the leads to balance their team, and distribute it across the globe, across gender... All of that, to get a team as diverse as we can. That's on the human side.

On the technical side - just a super-quick rundown is we build the project, stage all of the artifacts, do end-to-end verification of everything that's out there, and then we run our release process that puts it out to the registries, to the bucket where you can download your Kubectl and all of the binaries... And now we also added the security artifacts around them, like \[unintelligible 00:52:10.24\]

**Gerhard Lazu:** Okay.

**Break:** \[52:14\]

**Gerhard Lazu:** I've been waiting from the beginning to ask you this... What is the story behind Puerco, your nickname that everyone knows you by? Like, you can say Adolfo, "Adolfo who?" But if you say Puerco, everyone knows in the CNCF who Puerco is. What is the story behind that name?

**Adolfo García Veytia:** Well, "puerco" means "pig" in Spanish, of course, and that's the way me and my wife have been calling each other since - I don't know, high school...

**Gerhard Lazu:** You're not calling her Puerco, are you? She's just calling you Puerco, just to be clear... \[laughs\]

**Adolfo García Veytia:** I call her Marrana, which is female pig.

**Gerhard Lazu:** Really?

**Adolfo García Veytia:** Yeah.

**Gerhard Lazu:** Okay... \[laughs\] Alright.

**Adolfo García Veytia:** When the internet came around, it turns out that not a lot of people wanted to call themselves "Puerco", so it was free in most services, so I grabbed it then. I've been Puerco ever since.

**Gerhard Lazu:** Okay. So it's a nickname that you and your wife call each other. Oh, wow. That's crazy.

**Adolfo García Veytia:** Yeah. It grew from her. Then my friends, and my parents, and everybody started calling me like that.

**Gerhard Lazu:** That's genius. You've found a nickname that you can hit everywhere. Because I've seen LinkedIn - Puerco. Twitter - Puerco. GitHub - Puerco. Okay, so I think I need to rethink my strategy, because I've been trying to get "Gerhard" on Twitter for like maybe ten years now, and it doesn't work.

Alright... Okay, now do we use the name that me and my wife call one another? That is a different question... \[laughs\] But you must be very brave to go with that, and I respect that; I really, really do. I'm very glad I asked. It's a great story.

**Adolfo García Veytia:** \[56:09\] I've never been one of those people that take themselves too seriously.

**Gerhard Lazu:** Maybe that is the key takeaway from this. I should take myself less seriously, and pick the name that -- I don't think it would mean anything for anyone. By the way, I call my wife, because she's Romanian and I'm Romanian as well - I call her "Urâta", which means the female version of "ugly", and she calls me "Urâtul", which also means "The ugly one", but the male version of that. Now, would that work? I don't know. I don't think people would know what that means, but... \[laughs\]

**Adolfo García Veytia:** Check on Twitter to see if it's available.

**Gerhard Lazu:** Exactly. I'm going to do it right after we finish recording this. So as we are preparing to wrap this up, I'm wondering - what is the key takeaway that you want our listeners to remain with from our conversation?

**Adolfo García Veytia:** Okay, so the main takeaways from all of this project and our experience building the signatures for Kubernetes has been -- the first is communities are hard to work in at the individual speed and pace that you would like to see your work getting done. So while we have been able to implement this really quickly from a technical point of view, we really have to take into account input from a lot of people, not just from SIG Release. The effort to get the image assigned, \[unintelligible 00:57:39.13\] active collaboration from people from SIG Security and from friends in K8s infra, who handle the infrastructure for the project.

But also, we had to put out the document, the KEP (Kubernetes Enhancement Proposal), where you put ou your idea and people comment on it, and you propose the technologies that you're gonna use, and you get feedback from the community.

And it took a while... We were working to get the container images signed for around one and a half years, and it's now there. The work is still ongoing, we still have to not only optimize the signing process a lot more - this is just the first iteration for it - but we still have to sign on others things; we have the stations, we have to sign the binaries, and other things.

But I think the most important thing is that supply chain security in software is a really complex problem... So everybody who even tangentially touches software in any way has a role to play in securing the supply chain.

Right now, the ways that supply chains can get attacked are many; while there are a lot of smart people working on the problems related to it, it still needs help from everybody in the software industry. So I think it's really important to emphasize that, for example, Kubernetes as an open source project is doing its part, and so should all of the other projects play their own part.

I have some visibility to some of the efforts that are going on in other projects, and it's really exciting. The future is really promising, because some projects some ecosystems - I was just at PyCon last week, working with the ESF folks who are looking into ways of how they can sign their artifacts using Sigstore... So whenever you pull from PyPI, you're gonna get an artifact that is signed with Cosign and verifiable. And the same thing is happening in Ruby.

\[01:00:00.04\] Inside of the OpenSSF there's a whole - the OpenSSF is the Open Source Security Foundation, who oversees some of these projects - workgroup dealing with how package managers will secure their workloads and make them work. And just as open source projects have to do their thing, companies have to also do their thing, be it as an end user... End users have to really -- first of all, be aware of the risks involved in securing their supply chains, and now companies in the U.S, especially those that sell to the government, are going to face some compliance thing to improve their supply chains... And also, individual developers.

I was really struck at PyCon of how the individual developer doesn't have much awareness of the risks involved when pulling a dependency you don't know nothing about. The first thing is gain awareness of the problem. It's a complex problem, it's a dangerous problem, it's something we all have to improve. So if you consume software, try to think about what are the guarantees that that software is giving you, about integrity, about its origins...? And then do the same for the downstream consumer of your projects. Give them guarantees, build an SBOM, sign your artifacts, and always try to provide that awareness to both ends of the chain, so that people can do that. And this is just in the software chain. But the problem is much more complex than that.

For example, we at Chainguard have folks experiencing not only software, but also on the policy side, on research, people who are experts on how policy and how government does things... So it'a problem that is urgent and difficult to address.

**Gerhard Lazu:** So my take-away from your take-away is that - first of all, I knew this was important, but I didn't know just how important it is. And we still hear about all the CVs and the various security vulnerabilities that hit different service providers, but until it happens to us, or until we're not directly involved with it, it feels like "Oh, it happened to someone else. They should have done better." But we don't realize that actually it's maybe luck, or - you know, call it bad luck or misfortune that it happened to someone else, but next week or next month, or even next year, it could be you that you'll be part of it. So what did you do to prevent it? And if you did nothing - well, you will be less prepared when it comes, because it will come.

And just as nowadays it's incomprehensible to go to a website that doesn't use a secure connection... Like, HTTPS - who remembers when there was no HTTPS? Everything was like HTTP. And now most of the websites are HTTPS. So you expect that to be the norm. So why wouldn't you expect that all the software that you consume, and also put out there, that it's signed, that it's secure, that you know where it came from, that you know what are the building blocks, what did you put in it. And everyone should be able to do that, and verify - at the very least verify. And I know that that is very simplistic, because it's like a couple of steps that need to happen... But take the first step, that's my encouragement. Become aware of the implications of not doing it. And then what is this first simple step that you can take in that direction. And I'm very keen to do that myself with our own infrastructure, with our own app. And because it's all open source, I'll be very happy to share that with others, so that you can see what we do.

\[01:04:08.05\] And I can imagine an episode soon where we show how to do that, because it shouldn't be difficult. That's the whole point. The first step should not be difficult. Or the next one, or the third one. But a year from now, I expect us to be in a much better place, and hopefully you too, the listener of Ship It.

Anything else to add, Puerco, before we wrap it up?

**Adolfo García Veytia:** If you plan on improving the supply chain security of the Changelog, I'm happy to help, and be around to answer any questions, or even give you a hand in that, if you want... But that basically wraps it up. It's just more of a call of be aware, and be conscious that you are not alone. So yeah, you can be hit by the misfortune of getting attacked, but be aware that the way that you may be attacked is just by a vulnerability flowing upstream to you, from upstream to your project. So be a good player.

Some of the open source projects like Kubernetes are putting out software and tools that can help you. Also, some commercial companies like Chainguard are going to be releasing open source projects, and also commercial projects to help in the problem.

**Gerhard Lazu:** I'm looking forward to that as well, because I think the world is slowly moving in that direction. But the thing which I'm most looking forward to is meeting you in-person. Maybe the same day that you're listening to this, or the day after, at KubeCon EU, if one of you that are listening to this are there, ping us on Twitter. @puerco, we already established that, that's an easy one. I'm @gerhardlazu on Twitter, so that's slightly longer... But we'll both be there, and we look forward to talking to you. Thank you very much for joining me today, and I'm looking forward to next time, because I know it will be very, very soon. Thank you.

**Adolfo García Veytia:** Definitely.
