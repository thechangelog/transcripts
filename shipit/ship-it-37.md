**Gerhard Lazu:** So when I was recording episode 31 with Tammer Saleh, he told me that Nixery is cool. Never heard of it, but then I checked out \[unintelligible 00:03:30.00\] tweets about Nixery.dev and ad-hoc container images with packages from the Nix package manager... All I had to do was do a docker run and I knew that I had to talk to the person behind Nixery. Welcome, Vincent.

**Vincent Ambo:** Hi, everyone. I'm Vincent.

**Gerhard Lazu:** So I can see that your name in this recording is Tazjin. Did I pronounce that right?

**Vincent Ambo:** Yes.

**Gerhard Lazu:** So what's the story behind that?

**Vincent Ambo:** \[00:03:56.06\] Tazjin is the username I go by online. Honestly, I've been using it for (I think) about 15 years, and the real origins of it are kind of lost at this point. My best theory at this point - because I was a teenager at the time - is it was related to the Warcraft games, because they have a race in the game that's called the Trolls, and the Trolls have a specific format of forming their names. And according to these rules, you could get the name that I use as my username. I don't actually play any of those games, but I think at some point I came up with the name in some context, and it just kind of stuck. It's short, six letters, and usually available \[unintelligible 00:04:30.02\]

**Gerhard Lazu:** Okay. Everywhere. Like Twitter, GitHub - you don't have the issue of anyone having it. Okay, great.

**Vincent Ambo:** I did have a situation once where a musician tried to use this name, and we had a bit of an interaction, because they were trying to get into my Instagram, where I also have this username... But it all got resolved nicely in the end.

**Gerhard Lazu:** Okay, that's good to know. So it's unique, but even then, some people want that name. I wish I had gotten @gerhard on Twitter when it was still new. I thought it will never catch on. I did get it on GitHub, because I liked the Git idea... So there you go. And Instagram - again, I was lucky, I suppose.

**Vincent Ambo:** Yeah.

**Gerhard Lazu:** So when we were exchanging emails, you were telling me that you were in between places. Did you manage to set up in the new place?

**Vincent Ambo:** Yeah, I guess. I've recently moved from -- well, actually, the from is kind of complicated, but I've moved to Moscow. I'm in the process of learning Russian. It's a very interesting language, and I find learning new languages is kind of a stimulating thing to do. And the best way to do it is to actually immerse yourself, at least for me.

So I moved here recently, I tried out a few different parts of the city. It's a mega-city, for those people that don't know. It's got about 20 million inhabitants and stretches sometimes like a hundred kilometers from one end of the urban area to the other. So it takes a lot of time to get used to.

And yeah, I've found a nice flat now, decent water pressure, which is something that was often a problem in flats I've previously had... And starting to settle in. It's been a couple of months now, and it's starting to feel like home.

I lived out of a suitcase for about a year before that, in different countries, and while it's fun for a while to always be in new places and meet different people etc, you reach a point eventually where you're like, "I'd just like to have a home where I can unpack the suitcase and not worry about where I'm staying in 30 days." So it's nice to have that back.

**Gerhard Lazu:** Yeah. With good water pressure and a good internet connection, right?

**Vincent Ambo:** Yes, of course.

**Gerhard Lazu:** ...which is only yours. So speaking about internet connections... How is yours?

**Vincent Ambo:** I'm in my office at the moment. It's part of a co-working space, and I don't actually know what kind of connection is this. I suspect it's just some sort of redundant fiber connection coming in here. Internet infrastructure in Moscow is very good. Most buildings that I've been in just have fiber coming to the home, and it works fine for me.

At some point I stopped doing stuff like measuring my internet connection speed, latency and so on, in the same way that I kind of stopped caring about how fast my CPU is, and all of this stuff... Because it reached a threshold where I'm like, "It's sufficient for my needs, and I don't really need to look at this anymore."

**Gerhard Lazu:** Okay, that makes sense.

**Vincent Ambo:** But just in case, I have two redundant, additional connections set up here... So if the primary one fails, we'll be able to continue.

**Gerhard Lazu:** Right. So the reason this is on my mind is because I was recording the intro for episode 35 today - whch we'll ship this week - and that's the one about multiple redundant internet connections, and three weeks trying to sort mine out. It was quite interesting, so that's why it's on my mind.

**Vincent Ambo:** I'm looking forward to that. Maybe I'll steal a couple of pages from your book.

**Gerhard Lazu:** Sure thing. I'll be happy to share as much as you want, and as much as is helpful. So tell me about Nixery... Why did you create it?

**Vincent Ambo:** \[00:07:49.24\] It's interesting, because I have to figure out where to start with this story. So back in the days when Kubernetes was still a fairly new project, I was working at a startup in Sweden that was starting to eye the Kubernetes world a little bit for various internal projects and deploying software that was not super production-critical, but with the intention of finding a new and slightly more modern way of hosting everything.

At the time, I got very interested in this concept of declarative infrastructure. I jokingly said at some point that there's something I call Tazjin's Law, which is that any infrastructure process that's not controlled by a reconciliation loop will eventually fail, in some strange way. And Kubernetes is sort of the embodiment of this idea. You have a bunch of small process, the various controllers, and you give these processes a bunch of desired state, and then they go and they reconcile everything continuously, until it's in the shape that you want. There's a term I learned for this at Google a while back, which is continuous intent-based actuation. And it sounds very fancy, but I think it's a good expression of this model.

So the interesting thing while I was looking into how Kubernetes works and all of that is that you very quickly run into a strange kind of distinction, which is that all of your inside of Kubernetes stuff is declarative, but you're deploying container images in there that are fully imperative. At least at the time, there weren't very many alternatives to things like Dockerfiles, and a Dockerfile is essentially a list of sequentially-executed steps. So even things like an env command, which adds an environment variable, essentially ends up being a sort of mutation that is applied in order on the image that you're creating.

So this seemed kind of strange to me, and I didn't do anything with it at the time. It was maybe 2014, I would guess... And I just kind of let this ruminate in the back of my head for a couple of years.

Then eventually I found out about Nix, and I started learning how to use it correctly, how to build various bits of software with it. Essentially, what you need to know about it is that you build software declaratively. You have an underlying concept for how to take a bunch of sources from various locations, for example over the web, or from a file system, and then how to apply transformation to them that yields a build output. And eventually, I got back to this original idea of "What if everything in Kubernetes was declarative, including the images?", and I had this idea that since it's possible to write your own Kubernetes controllers, you could write a program that is using something like Nix or any other package manager really that lets you specify a list of dependencies, and you could create what's called a custom resource definition in Kubernetes - it's essentially like a custom type that you can add to the API and perform CRUD operations on - and you could in this type specify something like container image as the type, and content \[unintelligible 00:10:43.15\] and a bunch of other programs that you need in this container image. You'd submit it to the cluster, and it would get built by your controller and be made available to all of the machines in that cluster.

I ended up implementing this concept, and while demo-ing it, people realized that there's actually quite a lot of overhead to doing this, because in a system where everything is kind of eventually consistent, as is the case with this, you submit a resource and you don't really know exactly when this build is completed. So while you're demo-ing it to people - you're running for example a kubectl watch command, which shows you the current state of all of your containers, and you see image pool errors while this image is still being built. So it doesn't really make for a nice and fancy demo.

So in the context of creating a demo for this, I realized that it might be interesting to just put these things into the URL, that is the name of the image. So the image names are constructed of a sort of base name, which if you're familiar with Docker, it's omitted for the things that are from the official Docker registry... But it can also be any other registry, such as Google's container registry that you get with Google Cloud etc. And then slash, and then the path leading to your image inside of the registry, colon, and the version \[unintelligible 00:11:54.04\]

So I was thinking "What if we use these paths to sort of denote which packages should be in the image?" So if we want an image that has, say, NGINX and Git in it, we could write the name of the registry, slash NGINX, slash Git. And then the registry would automatically yield an image that contains these things.

\[00:12:17.21\] So I went and implemented that, and got a lot more wows from people than the previous sort of YAML-based, "dump this resource into the Kubernetes API server" implementation. And people quickly brought me lots of ideas for what this could be used for. For example, if you are debugging an active incident inside of a Kubernetes cluster, you might be interested in quickly running a container that has some debugging tools that are not included in any of the images you already have. So it's very useful to be able to layer this very easily onto an image in your cluster.

Another use case that often comes up is people running CI systems and needing a base image that contains, for example, a set of compilers and other build tools that they need. In that case it's also very useful to just make the definition of which things should be in the image that you're building with part of your build configuration. So that's kind of how that came about...

**Gerhard Lazu:** Okay. That's really interesting, because when I first looked at Nixery, that's exactly the thing that I started with. I want curl and I want htop - just two random tools, random utilities, to combine them. I didn't know about the versioning thing. I was going to ask you if I can specify the version, and apparently I can in the path, in the URL, so that's really cool. And I can see how this is really useful for ad-hoc tooling, or just-in-time tooling, debugging purposes, stuff like that.

For a CI system, I would use it, for sure... Like, for example if I want a specific version of the runtime. I would definitely pick that. But besides that, for example for my application, do you ever see someone for example pulling a specific version of an application that they build? And where would that application even be hosted? How would that work?

**Vincent Ambo:** Yes, absolutely. In fact, this was the original intended use case of Nixery; it's just that right now I don't think anyone is actually using it that way. There's a couple of reasons for that. So I think in order to explain this I have to go into a little bit of detail on how some of this actually works under the hood. And for that, I have to start with Nix.

**Gerhard Lazu:** Sure. Let's go there, yes.

**Vincent Ambo:** So Nix - if you read Hacker News and Lobste.rs and all of these kinds of pages you've probably come across a bunch of articles mentioning Nix... And if you've read any of them, you've probably also noticed that people seem to be sometimes almost talking about a variety of different things. The reason for that is that it actually is a set of different things, which can be a bit confusing, because they're basically all named the same. I think I'm gonna just lay out what those things are, and then we can kind of dive into where that overlaps with Nixery when it's relevant.

So Nix is a programming language, a purely functional, very simple programming language. You can kind of think of it as JSON with types; I'm stealing this from a friend of mine, \[unintelligible 00:14:56.04\] And it's so simple that it doesn't even really have named top-level variables. You can't even give names to things. It's just a data structure, and then you can write some transformations instead of the data structure.

It feels very natural to people who are used to languages like Haskell or Erlang, so more on the functional side of things, and it can feel a little bit alien to people coming from other backgrounds, which I think is one of the barriers to entry of the language.

The second thing called Nix is the package manager itself. So the package manager implements a concept called derivations. A derivation is essentially a data structure that says "We have a transformation that we want to apply to some data." Usually, this transformation is something like running a compiler or running some other tool that does file transformations. And these derivations specify all of the inputs that they have, fully pinned, which means that we have full SHA hashes of everything that gets into the derivation, and then this information together can be used to create a hash.

\[00:15:55.29\] So you take the hashes of everything going into your derivation, including recursively, if you think about other derivations - I'll bring up an example in a second - and the build instructions. You hash them together and you get something that uniquely identifies this particular operation to be executed.

An example of this is if you're building a program foo, and it depends on a library bar, then you would have a derivation for your library bar, and that derivation would be passed into the derivation for your program foo. And the hash of those together would yield the exact hash specifying how to build your program.

The interesting thing is that if any of the recursive inputs of your library changed... So for example, you're exchanging the compiler version, or you're linking against a new version of OpenSSL, then the hashes kind of change all the way down in this tree, similar to a data structure called a Merkle tree, if you're familiar with that.

**Gerhard Lazu:** Okay. How does this compare to a DAG?

**Vincent Ambo:** It essentially is a DAG.

**Gerhard Lazu:** That's exactly what I was thinking. It sounds like a DAG to me. Okay.

**Vincent Ambo:** Yeah. So you have this graph of some kind of root node, which could be like an entire operating system... Or if you're thinking even grander, like the entire state of the data center, or just a single package... And then you have this tree that unfolds below it, that represents all of the various inputs that need to go into this tree.

An interesting thing about this is that because all of the inputs and the exact transformation applied are hashed together, you get a property out of this that's called repeatability. It's not quite the same as reproducibility; we might want to talk about that a little bit later... But it essentially gives you the guarantee that you can re-run this exact computation in the exact state that you expect. Nix has to do a bunch of strange hacks to make some of this work. For example, inside of a Nix build, the time is always the 1st of January 1970, and a bunch of things like this, because you always in build systems and other programs have some sort of impurity that leaks in from the outside. A lot of those need to be handled in some way.

But it's a very interesting guarantee to have, because the idea of repeatability is that things that are repeatable are equivalent. If you do something twice, then the output should be vaguely equivalent. And even if you have some sort of impurity, like you're running a C++ link on a machine with a lot of CPU cores, and you end up linking the binary in a different order just because of races in the CPU, the output that comes out of it in the end is still an equivalent program to the one that the other machine built. So it's a very strong guarantee, in many ways; it's quite useful for operations.

**Gerhard Lazu:** Isn't this what many referred to as idempotency?

**Vincent Ambo:** It's similar to idempotency. You don't have a guarantee that you get the exact same thing out at the end. So there's another guarantee, which the Nix community is sort of tangentially interested in, but hasn't fully achieved, called reproducibility... And reproducibility means that you build software twice and you get the exact same, bit for bit, output, on both ends.

The Debian project, the Debian Linux distribution - they've done a lot of work to achieve this for a variety of popular packages. They have a whole reproducible builds community around them that I think other distributions including Nix are also contributing to... And this is often stuff like patching software, build instructions to avoid putting the paths to the source files into the binary, and stuff like this. Because for example, if you build some code in your home directory, it contains your user name, you build it somewhere else, it contains somebody else's user name, and suddenly your binaries are not equivalent anymore.

So there's a lot of that work, but if you look at it purely from a functional perspective, like "What does this thing do?", then equivalent outputs should be mostly the same. If you're thinking about what you're deploying, for example, then unless you have some very strange kind of bug in your system, the source path probably doesn't matter very much. So that's kind of the difference between reproducibility and repeatability.

**Gerhard Lazu:** One cool thing - I like that you mentioned Debian, because I was talking to Frederic Branczyk, from Polar Signals, Parca.dev, a couple of weeks (maybe it's been months now), and I didn't know this trick, but he showed me how when they built Parca, they pinned the sources for Debian to a specific SHA. And what that means is that everything is reproducible, so if anyone was to pin the sources of the same SHA and they were to try and build Parca, they would get the exact bit for bit output... Which I thought was really cool.

**Vincent Ambo:** \[00:20:14.25\] Yes, that is sort of the holy grail that you want in the end.

**Gerhard Lazu:** Can you do that with Nix?

**Vincent Ambo:** Yes. So this thing about pinning inputs is very interesting. To expand a little bit on this I have to bring in one more thing that's almost called Nix; it's called Nix Packages. Nix Packages is a single GitHub repository that contains the definition of all packages that are currently publicly buildable with Nix. So if you think of the Debian distribution as a distribution that has some number of packages packaged for it, then Nix packages is kind of the equivalent for Nix. It's a huge repository - it's sort of a monorepo if you will - that contains all of these build instructions.

Because for each of the package definitions in there the inputs are what we call "fully pinned", you have exact versions and Git commit hashes and SHA hashes of all of the sources that you're pulling in from all of the third-party programs you're building. This means that the commit hash of a single Nix packages commit fully pins basically the entire universe. So this is a very cool guarantee that you can get with Nix, where you have to specify basically a single hash, and then the entire build environment, all of your compilers, all of your libraries, all of the tools that you run, everything is in a fixed version that you can kind of advance atomically. And roll back, of course, which is quite nice.

**Gerhard Lazu:** That's really cool.

**Break:** \[00:21:33.29\]

**Gerhard Lazu:** We were talking about pinning sources, reproducible builds, being able to go back and rebuild exactly the same thing bit for bit... I'm wondering, how does Cosign fit into this?

**Vincent Ambo:** Alright. Personally, I haven't sued it, so I'm not familiar with the exact implementation of it, but my understanding is that it's sort of you're signing individual layers of images. Is that correct? Or maybe you could expand...

**Gerhard Lazu:** So the idea is, in a nutshell, you sign the SHAs, so you don't have to trust whoever signed the SHA; you just need to have a signature that corresponds to the SHA, so that you know the SHA that you're consuming is the SHA that was built and was intended to be consumed. So you can basically verify that it comes from a source that -- actually, it doesn't matter the source, as long as the SHA is linked to a signature. And that gives you confidence in what you're consuming.

**Vincent Ambo:** \[00:24:04.10\] Okay. So in this case, my understanding of Cosign is that you are signing the SHA hashes of outputs. So you're building something, and then for example reproduce it as a tarball, which could be an image layer instead of an OCI image... And you sign the hash of that tarball.

**Gerhard Lazu:** Correct.

**Vincent Ambo:** In the Nix world, we kind of do things exactly the other way around. So what we are signing is typically the hash of all of the inputs. This ties back into the reproducibility discussion that we had a little bit earlier... If you have build instructions yielding a tarball with some arbitrary software, there's a fairly large chance that the software is actually not bit for bit reproducible. This means that if you produce one tarball of it, and you produce its hash, and sign and distribute the tarball and that signed hash, it's quite likely that no one else is actually going to be able to recreate that exact tarball from scratch... Which means that suddenly you have introduced, if you think about it in terms of immutable systems and stateful/stateless systems, you've introduced a bit of state into the universe, where there's now this one particular tarball in addition to the sources and build instructions of the program that you need to retain.

So one of the big ideas in Nix is that instead of looking at what the hash of the output is, we look at the hashes of all of the inputs, and then sign things over this. So we have the concept of binary caches; if you go to a binary cache, you're essentially asking for the output for a given derivation, meaning "I want to know if this cache contains a build program for these sources, with these sort of compilation steps applied to it." And then the binary cache will either tell you yes or no, and give you a tarball back, and we will have a signature that kind of represents this entire process." So the trust root is sort of one layer.

Of course, you now have a problem, which is that you could theoretically have a malicious binary cache, you could have, for example a university hosting a Nix cache mirror, and you might be trusting the key of that university, and they are now distributing a binary to you that is actually malicious. They've inserted some sort of code into it that you don't want to be running, and they are just pretending that it was built from the instructions that you gave them, or that you asked for.

So in order to work around it, there's some projects in the Nix community... The most interesting one, in my opinion, is something called Trustix, developed by Adam Höse. Trustix is sort of like a mini blockchain. I'm using this word very hesitantly in this case. It's closer in fact to the implementation of certificate transparency logs, where you have an append-only data structure published by somebody, that records all of the derivation hashes that they've built, and all of the output hashes that they've got.

And the interesting thing - if you have lots of different people running this Trustix thing over just the standard Nix packages package set, and say you get a distributed log from multiple different people where if the same hash occurs in multiple different logs, for a package that we know is reproducible, you know that you can trust this output from any of them, as long as you trust at least according to your own criteria, of the people that have performed these builds. But it's sort of signing at a very different level, I think, than Cosign.

**Gerhard Lazu:** So you have a source of inputs, you produce your ouput, but that output could be an input to something else.

**Vincent Ambo:** Yes.

**Gerhard Lazu:** So don't you end up signing the output, which is now an input to something else?

**Vincent Ambo:** The thing that you're signing still always includes the derivation hash. So if you have a downstream derivation, so a program that depends on a library, for example, then the hash of the thing you're including will be included in the hash of the thing you're producing. So you sort of always carry this bit of information about what was this build from, and how down with you in the tree.

**Gerhard Lazu:** Right.

**Vincent Ambo:** There is an interesting idea I actually just had, as we're talking about this... In container images in the OCI image format, the format that registries speak when you're downloading a container image and so on - you can attach some metadata to each layer in an image. This is what's typically known in the Docker world as the Docker version, or Docker history feature. You run Docker history on an image name and it tells you sort of the Dockerfile commands. But this is just a plain stream. You can put any information in there.

\[00:28:17.15\] So an interesting thing to do would be to include the derivation hashes of each of the layers or the contents of each of the layers in this manifest, this data structure representing the image, and then probably include it in the signing process, which now gives you an additional guarantee over what the contents are. That could be fun to implement in Nixery.

**Gerhard Lazu:** Interesting. Okay. So talking about inputs and outputs and versions, it reminded me that Nixery itself - there's no tags or \[unintelligible 00:28:46.18\] on the GitHub repository of Nixery. Why is this? I've found that very interesting. Why is this?

**Vincent Ambo:** That's probably an artifact of me working at Google at the time. So Google famously "lives at head." That's the phrase that's often used internally, and then published projects like \[unintelligible 00:29:05.07\] standard library created by Google. And I've sort of just stopped thinking about the concept of version numbers, explicit version numbers for software, because they always feel kind of arbitrary. It's like you're the author of some piece of software, and at some point you decide "This particular commit, for some reason another, either given by intuition or some set schedule, is a commit that I consider worthy of releasing." This is kind of slightly strange phrasing... And I don't really see what we get from that.

So the way it works in some of the monorepo setups, especially Google, that I'm familiar with, is that each commit that you create gets a revision number. A revision number is slightly different from a Git commit. If you look at two Git commits, for example, then the commits themselves don't tell you anything about the relation between the commits. It's just like a random bunch of characters and numbers. And if you look at two Git commit hashes, you don't know which one is older or newer, for example. In revision numbers you have strictly monotonically increasing numbers, which means that each time a revision number is assigned, it's exactly one larger than the last revision number, and every change to the repository happens completely linearly.

So what this lets you do is that you can sort of assign watermarks. You can say "In revision 4005, we broke this API. If you depend on this API, make sure you are using something before 4005. Otherwise, use something after 4005."

This is commonly done inside of Google, where there's a particular term for how rebasing or the equivalent of rebasing works in their version control system, where people will talk to each other about fixes that have happened in libraries and on other infrastructure that people are using, where they just say "Hey, just rebase your work past this particular revision number." And that's, for the most part, most of the versioning structure that you need.

**Gerhard Lazu:** Right.

**Vincent Ambo:** There is, of course, for service releases, some interest in being able to pinpoint exactly which version of a service you're running, and also declare which one you want to be running, rather than saying "I always want the latest one to run." And inside of Google, there's like 4 billion different solutions to this problem, some more or less \[unintelligible 00:31:21.01\] than others... And yeah, I don't have a good answer to that, but there are some ideas we have in the TVL world for how that could look.

But basically, to roll back to your question, it's just that I don't really believe in explicitly named versions. Just use the latest one, and it'll tell you if something breaks.

**Gerhard Lazu:** But how will it tell me if something breaks, because -- that's like the whole idea, right? When you look at the version, and typically semantic versioning is, whether we like it or not, it's the versioning scheme that most of the world uses... Kubernetes - because we've mentioned that. I'm not sure whether Nix uses that; I think Nix is calendar-based. I'm not sure...

**Vincent Ambo:** Yeah.

**Gerhard Lazu:** \[00:32:00.02\] ...which is my favorite versioning scheme. But anyways, going back to semver, which Kubernetes uses, like 1.22, 1.23... That version means something; that version bump, whether it's a minor, or a major, or a patch; regardless which version bumps, it means something. So it compresses a lot of this information in terms of should you expect something to break. Or are there new features, or is this just like a bug fix, and apply to a security fix, and everything is good...

So I think it's this hint that we would be missing if we don't have versions... And who has time to read all the changelogs, when you are consuming tens of different software in production?

**Vincent Ambo:** Yeah. I think this is -- interestingly, I think this might be a cultural things that we in the development community have to work on over time. So changelogs, if you look at them, contain a lot of information that might not be directly relevant to you.

For example, if you're looking at a changelog of Kubernetes, Kubernetes has a lot of moving parts, it has a lot of different groups, working on it with different interests and use cases... A single Kubernetes version changelog will contain an enormous amount of information about components that you don't use or will ever encounter, but that are going to be relevant to somebody else.

So I think we might need something like a concept of a break log instead of a changelog, where you explicitly only track the things that are likely to break compatibility with previous releases. And the reason I think this is a good idea is because if you're doing it with, for example, semantic versioning, you're leaving a lot of accounting up to a user deciding which version to publish and writing the changelog for that version, to remember all of the things that changed, that are actually breaking compatibility. And I think it's probably happened to a lot of people that something was released, a new, seemingly innocent version that ended up breaking some part of their system, because the authors of the software weren't aware that they made a change that was breaking.

I don't remember the details, but there was a change in the JVM; one of the JVM implementations had changed the internal representation of strings, I believe. Don't nail me down on what exactly the change was, but the new version had some slightly different performance characteristics, but no user-facing changes in the API of the \[unintelligible 00:34:16.09\] And this led to a very strange performance impact on lots of production systems that were upgrading the JVM.

So what we try to do in the TVL world, and what I also do in Nixery, is that we follow specific commit message standards. So if you look at the commit messages in these projects, we try to make it clear which ones of them are most likely to have an impact on end users, and which ones are just shuffling code around, or fixing typos in documentation, and so on. And there should be some way of saying, "Hey, I'm currently using this revision of this program. I want to update to this revision. Show me all of the relevant things that have changed since then", for whatever your definition of relevant is. There's no great generic solution to this, but it's a really interesting problem to start investigating for the future, I think.

**Gerhard Lazu:** Yeah. You mentioned something about revisions, and I think that is interesting, because maybe that's the bit that you're thinking when you put releases out. Just to double-check this - every single commit that you make - it doesn't get a revision, right? It's not every commit.

**Vincent Ambo:** So in Git, my preferred way of creating revision numbers is actually kind of implicit. So what you do is you count the number of commits in your current branch, and you use that as the revision number.

There is one complexity here, which is that if you are using merge-based development strategies, you can end up with two different points in the repository that have the same number of commits. So in that case, the number of commits is not actually unique. But Git has a feature for this in its command for counting the number of commits, which essentially lets you traverse only one side of a merge tree.

For example, you are always sticking to the left side of the merge tree, meaning that the merge commit itself is counted, but the things included by that merge from somewhere else are not. And then you get unique, monotonically increasing version/revision numbers for Git.

\[00:36:08.07\] We have a setup in the TVL repository where our CI system, whenever a commit makes it to the head branch, which is called \[unintelligible 00:36:14.11\] for us, a new revision number is created and pushed to Git as a ref... Which means that you can run a git fetch command locally and you get the refs that exist in the remote, and you have the same revision numbers locally.

But even if you don't run this fetch command, there's a one-line shell command that you can run locally that will use your CPU for a couple of minutes while it's going through the Git history, and it will yield the exact same numbers as \[unintelligible 00:36:36.24\] So you're not really dependent on keeping the state anywhere, as long as the actual Git hashes are the same.

**Gerhard Lazu:** Right.

**Vincent Ambo:** For Nixery specifically, it's interesting because most users of it right now are on the publicly-hosted Nixdery.dev website. At least if anybody is running a large private setup of it, they haven't told me. So I think that this is the case.

**Gerhard Lazu:** So they should, right? This is a good time to tell Vincent.

**Vincent Ambo:** Yes, it's a good time to tell me if you are running this in production on your own infrastructure. If that was the case, then I would probably take more care and at least maybe creating something like this break log I was just talking about, and noting more of what's changing there under the hood. But also, on the other hand, most changes in Nixery aren't really breaking. It's like, additional information being added to images, or additional ways of running it being added, but always with the intention of keeping it compatible with previous configurations.

So if you add a new environment variable, for example, because you're introducing a new backend for building - as a randomly picked example - then you should probably default that environment variable to whatever the behavior was before, so that somebody who isn't aware of this new things being added doesn't actually get affected by it in any way.

**Gerhard Lazu:** Yeah. This is fascinating. I am missing so much -- I mean, I'm fascinated by your take on this. It's something completely new. I have heard other people do this, but not to your extent, and I would love to see what that looks in practice. But I think this is where the podcasting format breaks down and I have to literally see it, and we \[unintelligible 00:38:02.02\] video and screen share... So maybe a follow-up stream, who knows...?

**Vincent Ambo:** This could be cool.

**Gerhard Lazu:** ...I would be up for it. But I'm really fascinated by this... Like, literally, how do you ship software, how do you ship Nixery. Some of the finer details around Nix and how you think about this - I think that's fascinating.

**Vincent Ambo:** I was in a conversation yesterday with a friend of mine who used to be one of the architects at Spotify, a company where I worked back in the day, a long time ago at this point... And I randomly said that I think release schedules should be unpredictable, including to the people that are writing the software. What I mean by this is that you should always submit code to your repository with the notion in the back of your head that this might get released at any moment in time, and doing things like a change that is split up across two different review units, but that changes behavior in between in a way that is breaking is probably something you shouldn't do. And a good way to enforce this sort of things and instill this sort of mindset in people is to make things kind of a little bit unpredictable.

So do regular releases of your services, just as an example, every n hours, where n is a range from, say, 3 to 8, and you don't exactly know -- there's no such thing as a merge window, or a release window.

**Gerhard Lazu:** Okay. So that's like a release monkey, right?

**Vincent Ambo:** Yeah. I like that phrasing, release monkey.

**Gerhard Lazu:** Like, from the Chaos Monkey, a release monkey. Anytime. You get a release anytime.

**Vincent Ambo:** That's great, yeah.

**Gerhard Lazu:** \[laughs\] Okay. I like that.

**Vincent Ambo:** In TVL, we have a single point in the repository where we pin Nix packages. The repository I talked about earlier, that gives us all of the third-party dependencies... And we have no automation for bumping this. It basically happens whenever somebody in the community feels like "Hey, I want to bump Nix packages." And this has an interesting effect, because it's the one single place where all external dependencies for all projects that we have come in, that lots of stuff randomly breaks.

For example, we have a bunch of Haskell projects, and Haskell projects are very prone to breakage on dependency updates, and this other thing. Especially if you try to not pin your dependency versions too much. So we end up in a situation where people are fixing each other's software, and eventually getting so good at it that the friction of doing this over time has gone down to the point where most releases just go through kind of seamlessly at this point, when we bump third-party dependencies.

\[00:40:16.20\] So that's an interesting sort of side effect that we've had, of not paying particular attention to exactly which version numbers of things we're using. There is -- I can't remember her name... There's a person from Honeycomb.io, if you're familiar with that... It's like a monitoring --

**Gerhard Lazu:** Yes. They're our partners. Very familiar. Who are you thinking? Charity?

**Vincent Ambo:** Yeah.

**Gerhard Lazu:** Charity Majors, yes.

**Vincent Ambo:** Charity Majors, right. So back when I used Twitter, I used to follow here, and I found her takes on the whole release situation quite interesting, because I think they overlapped to a large degree with what I'm thinking... Like, reduce the friction of releases by just doing them a lot, and not making them a special ceremony where somebody goes and signs the blessed commit, and then you print out a change request, and the CEO signs it etc. Just do it all of the time, and it will be a lot less painful. It will be painful in the beginning. I think we shouldn't dance around that; it's definitely true. But eventually, you'll figure out how to deal with it.

**Gerhard Lazu:** Yeah, for sure. I'm a big fan to every commit going straight into production. No gatekeepers, nothing like that. If all the tests pass, if the build passes, if it can boot in production, it can do the database migration - all the things it needs to do - it's out there. Every single commit.

**Break:** \[00:41:29.23\]

**Gerhard Lazu:** Something different about software that has versions, that goes out to users, and people expect it to come at specific intervals maybe; because you can't be always upgrading. Or when it does come, it's very clear about what breaks and what doesn't, and if anything breaks... And we go back to your break log. But still, that expectation that every week or every month there'll be a new version... And you can upgrade to it if you want. There may be, by the way, intermediaries, but if you ship every single commit, I think users of your software would be like "I can't upgrade every single time", and then how do you enforce upgrades, and backwards-compatibility, and stuff like that? You need to have those break points in your release cycle. But I'm pretty sure we could talk about this for the rest of the podcast, but we're not going to.

**Vincent Ambo:** Probably.

**Gerhard Lazu:** We're going to switch focus... And you mentioned TVL a couple of times. I thought that it means Television-Something. But it doesn't. What does it stand for, and how did you come up with the name?

**Vincent Ambo:** So TVL stands for The Virus Lounge, originally. I think most of the people listening can probably guess which virus inspired this name...

**Gerhard Lazu:** \[laughs\]

**Vincent Ambo:** So the background of this name is that in the early days of the lockdowns a lot of people were kind of missing out on social interaction and wanted to just kind of have the chats that we would previously locally have in bars, and such. So at some point I got this idea of "What if we just tweet out publicly a link to a Google Meet chat, where people can join and just talk about stuff?" And I did this on my Twitter account at the time. On the first day, a single person joined, and he said this great thing about "I think there's not enough spontaneous socializing on the internet", which kind of played into this whole idea. And then on the second day it was maybe five people, and then eventually we ended up with like 60, and the thing became a completely persistent video chat that was just always open, with people from all kinds of timezones, and with similar interests, that were just kind of hanging out.

It peaked at some point in terms of this kind of activity during 2020 of course, and after that things kind of gradually started slowing down again, as people sort of started resuming their normal lives, to the extent possible, depending on their location... And the people that remained as part of the community, which also has an IRC channel, are mostly people that have very strong shared interests. So a lot of them are current or former Googlists, for example, which brings in some people interested in monorepos... There's this joke that people leaving Google always try to rebuild Google, and I think to some degree I'm probably falling prey to this, too... And we stuck around and at some point somebody said on IRC "Hey, let's make a monorepo." And we just decided to do it.

So we were like, "Okay, what tooling can we use for this?" Nix seems like an obvious one, filling a niche, that I can talk about in a second... And we wanna use something that works similar to Google's code review; that's Gerrit, which is the code review tool built for Android. And we need something that can do code search for us. So we were looking around, we've found something called Sourcegraph that does it, and then we took all of these things and just stuck them together, and started building tooling around it. That's now the TVL project.

So we built monorepo tooling, and we have a monorepo, which is mostly containing the tooling for itself... But it's gotten to the point where external people that have nothing to do with TVL have contacted us and said "Hey, this looks very cool, and we like the workflows that you've built, and we'd like to start using this."

I know of two companies right now using a lot of our technology in their development stack, and it's probably gonna be more in the future, because we're getting to a point where it's pretty smooth and nice to use. If I can digress here slightly for a second...

**Gerhard Lazu:** Sure.

**Vincent Ambo:** I have some thoughts about developer tooling, which I think play into this a lot. So when you have an idea for something that you want to implement, there's a lot of stuff that you need to do between having the idea and getting feedback on whether the idea is valuable. If you're bootstrapping a completely new project, and you're doing it in the best practiced ways that currently exist, you're probably going to be setting up Git repositories and setting up a CI system, and figuring out what issue tracker to use... All of this kind of stuff. You could opt for just using GitHub, but even then, a lot of setup still needs to be done there. And then you need to figure out how to build your software, and you need to figure out how to test your software... All of this kind of stuff.

\[00:48:10.19\] Our vision for what we're doing with our repository is that the entire overhead of this gets reduces to just making a folder somewhere and dumping some code into it, and you immediately get all of this other stuff around it. And we're actually kind of at that point already.

The people in the community that use this the most have sort of remarked on how this reduces the feedback loop that you have for getting your ideas out and checking whether or not they're valid. So you feel a lot like this kind of becomes an extension of your thinking, and there's a lot of overhead that goes away, and then you're just working much faster.

The drawback of this is that if it becomes very easy to start new things and experiment with them, then you just pile on more of the same, and you never actually finish... But not all ideas are actually worth finishing either, so maybe that's alright.

**Gerhard Lazu:** My mind is exploding right here, because that's exactly how I think about software development. I have an idea, like "Will it work? I don't know, let's try it out." And then you just go from there, because it will shape, it will shift, and more people will add their own ideas on top of your idea. And before you know it, you end up with something so good, that you'd have never come up with on your own... And it's this shared consciousness. Everybody working on it and contributing to it.

**Vincent Ambo:** Yeah.

**Gerhard Lazu:** So I would love to see how this works in practice. I mean, never mind Nixery and all the other cool stuff we talked about, but this sounds like the essence of how you develop, how you get your ideas out there... Which happens to be at the core of Ship It. So, you know, will it work? I don't know...

**Vincent Ambo:** I am very happy to invite you and let you try it out. I mean, our repository is publicly available, you can clone it... But you will run into the problem that I briefly touched upon earlier when we discussed Nix's health, that there is a sort of learning curve to being able to use Nix proficiently, and this is the one thing that people kind of need to overcome to use the setup.

**Gerhard Lazu:** Right. So do you need to run Nix as your operating system to be able to do this?

**Vincent Ambo:** Not as your operating system. So you can install Nix even on a Mac.

**Gerhard Lazu:** Okay.

**Vincent Ambo:** I wouldn't guarantee that all of our software builds on Macs. I think the majority of our users are Linux people. But you can install Nix on a variety of operating systems, and actually, we have some plans for making it possible to even run it on systems like Windows in the future by decoupling a bunch of the requirements that it has from the core system. And then you can just use it as a build system.

**Gerhard Lazu:** Could you just pull down a container and start with that? Will that work?

**Vincent Ambo:** We have a member of the TVL community who shows up occasionally, and he works for a company that I forgot the name -- I think the company that he works for is called Gitpod, and they sort of build cloud-based development environments. And we've had some chats with him before, but whether or not it would be possible to have a sort of Gitpod for TVL setup, which would actually be the ideal way of doing this... Think - you just go to a website and spin a dev environment running somewhere else, and then you can just start using it. But we haven't done that right now... So there isn't a single, turnkey solution to diving into this stack, but it's definitely something to think about.

**Gerhard Lazu:** Okay. Would I still be using Git and the tools that I know? I'm assuming you will not take Vim as my code editor. I think that's not even an option on the table. I don't think anyone would do that, like take whichever code editor you have. But what about Git? What about the other tooling? I'm a big fan, for example, of Tig, the ncurses interface to Git... Anything ncurses, I'm up for it. Htop, K9s, all that good stuff. So how does that look like?

**Vincent Ambo:** We do use Git. We just have a Git repository in Gerrit. The workflows for this are very different from what you might be used to from the GitHub/GitLab etc. world. In short, the main difference is that your unit of review is always one commit. So if you make one commit and you upload it to Gerrit, that is something that you send to a reviewer, and then they make a decision on a commit. It depends on the rules that you've set up for your repository.

\[00:52:00.08\] You're not ever bunching together a bunch of changes into something like a pull request, which I think often leads to slightly unrelated things being accumulated at the same time. And also, your reviews work sort of like a first in/first out system. So you upload a bunch of commits and people can start reviewing these commits already, as you are working at the tail end of your chain of commits. And then some things might be merged earlier, or not; the control over when to merge things is actually an important topic, but it's up to you... And then you can avoid the issue of having, for example, multiple pull requests that depend on each other and not having a really good way of representing that to potential reviewers,

I think I learned in my time working on medium to large-sized C++ systems at Google that it's very useful to have things that are kind of still in progress, already in the stage of being reviewed... Because errors in thinking and stuff like that gets caught much earlier.

**Gerhard Lazu:** That's actually one of the first things which I do when I open a pull request. I start with a really simple commit; 10-15 lines, it doesn't matter how much it is, because it is the thinking that goes into it. For you to produce those 15 lines, you should have thought about it, you should have done a bit of research, just understood a bit the lay of the land, what is happening, how will this combine with something else... And you say "This is the direction that I'm thinking of going towards. What do you think, team members? Do you think this is good or not?" And the quicker they can tell me "No, this is a bad idea" or "Have you thought about this, that, whatever?", the quicker I can take the next step. Rather than me sitting on it for a couple of commits, a couple of days, hours, whatever that may be.

So after your first hour, half-hour, however long it takes you to get to that first step, you want to share that. But that only opens the pull request in the GitHub world. While in the world that you describe, that actually would be the pull request itself, right? The thing that would be reviewed.

**Vincent Ambo:** Yes.

**Gerhard Lazu:** I mean, does it actually even start as a pull request? I haven't even asked about that.

**Vincent Ambo:** So the concept of pull requests kind of doesn't exist in Gerrit. So a pull request, if you look at GitHub, is usually that you have a branch, and the branch contains some work, and you want to merge that work - or use some strategy for moving it over, like rebasing - into the head branch of the repository. Or really, any other branch, but you get the general idea.

In Gerrit, you don't push branches for things that you're working on. Instead, Gerrit uses the Git protocol in a slightly magic way, where instead of pushing to a branch, you push to a special Git ref. So you run a command that says something like \[unintelligible 00:54:26.00\] if you head branch is called master, for example. And then this would send the commit to Gerrit, Gerrit has a way of uniquely identifying this commit, and then if it's a new commit that it hasn't seen before, it will create a new review, and give you a link back actually, which you can send to people, or click on and send it to reviewers... Or if it's a commit that it has already seen, it will create what's called a new patch set of the previous review that you started.

So a common workflow is something like you start a change, you make a first version of a commit, you push it, a reviewer leaves a bunch of comments on your code, and then you create a new version of that commit, push it again to the same ref, Gerrit updates this as a new patch set, and the reviewer reviews again, until it's fine... Depending on your exact reviewer, first, of course. But the interesting thing is also that the entire history of the development of that commit is retained by Gerrit. So you can always go back and look at previous patch sets.

There's a situation on GitHub - I don't know the details of how it happens, I don't use GitHub a lot - where you can click on a review comment and get a page that says "Couldn't find this file", or something, because it's a commit that has been force-pushed away. So the history of that is no longer available.

**Gerhard Lazu:** Yeah, that's true.

**Vincent Ambo:** And that is just something that Gerrit kind of avoids. This is very similar to how things work inside of Google. So people might know that Google has its own version control system, but the majority of people use it through something that looks kind of like Mercurial. So if you're familiar with Mercurial, then it's basically the same workflow. But each commit that you make becomes its own unit of review. So each one of those is assigned a revision number and it's something that you send to a person. It means that you end up structuring the way you write these commits much more thoughtfully than you would if it's just a bunch of commits that I review together.

**Gerhard Lazu:** \[00:56:13.17\] Okay. So is this your masterplan to change how the world develops software, and make them develop a bit more like Google? Have the monorepo, have the not-pull requests... You know, because you mentioned that everyone that worked at Google tries to get others to work Google does things...

**Vincent Ambo:** Yeah, it's an interesting question... So I think Google is doing a lot of things in a less than ideal way, which is understandable, considering that it's pretty old for a tech company at this point, and there's a lot of stuff that has simply accumulated, legacy over the last decades. And there's a lot of stuff that I think we can conceptually improve upon. But my intention is not -- there's no masterplan of making everybody use the same stack, because there are different ways of working, and it's really a cultural question of like "What kind of culture do you want in your company?" It's very related to the whole cathedral versus bazaar conversation, and all this kind of stuff; what way of working works best for your team.

**Gerhard Lazu:** What way works for you best? Because obviously, something at Google worked well for you, and I think you're trying to capture that and share that with the world, that approach that worked well. What does that look like?

**Vincent Ambo:** So I think the thing that is most attractive to me about the way that not just development, but most things work at Google, is that there's a strong shared understanding of certain tooling. So it's almost culturally ingrained. You join the company and then you are flooded with these 2 and 3 letter acronyms that make absolutely no sense to you for the first couple of months. And then after some period of time, you are flinging them around as well.

**Gerhard Lazu:** Right.

**Vincent Ambo:** And they have cultural significance. People see a specific kind of link - three letters and a number - and they know exactly what kind of thing this is, what kind of tool this leads them to... And these are the same across all of the teams, in this enormous company.

So if you switch teams, there's always some stuff you have to learn that is specific to the new team, but you don't have to learn an entirely new tool stack. And if you're just doing a brief bit of collaboration with another team -- for example, if you're fixing a bug in some foundational library that you're using, you don't need to figure out where is that repository, how do they build their software? How do they track their bugs? etc, because it's completely consistent across the entire organization.

For me, this works really well, because I think there is an advantage to this sort of homogenous environment where a lot of concerns are offloaded to the group managing that particular concern, and they don't need to be reinvented. The argument against this is obviously that some people say that for them the flexibility to pick and shape their own tooling in many areas lets them work more efficiently. And I think this can be very true for small teams. Sometimes they have very particular opinions about how a specific thing should work... And it's in stark contrast to Spotify, where I used to work, where the idea at the time was that all teams should have complete autonomy. So the idea was that each team should be like a startup within a startup, and they could pick their own bug trackers, and code review systems, and whatever they wanted. And it's kind of the opposite extreme of what Google is doing.

For me, the Google way of doing things worked better. However, I should note - because I don't want to come across as somebody who's just blindly copying everything I saw there, or something. That's not the intention. There are a lot of things that could be done a lot better at the company. For example, you might be familiar with the build system Bazel, which is also used internally...

**Gerhard Lazu:** Oh, yes.

**Vincent Ambo:** \[00:59:38.09\] One of the things that Bazel sometimes struggles a bit with is that there isn't a foundational concept like the derivation in Nix, in terms of which everything else is expressed. It's not necessarily a criticism of Bazel, but I find that building a mental model of a complex system like that is much easier if there's a single thing at its core that you can understand, that is sort of simple and flexible enough to compose into many of the different things that a more specialized thing with different content could do.

I think Nix is currently not really reaching its full potential. It's being used for -- the Nix package set is being used for Nix \[unintelligible 01:00:15.22\] Linux distributions built on top of Nix... But for the most part, packages built with it are wrapping existing build systems.

Let's say you're building a Python package. There's a Python build system that is standardized. Nix will just call that Python build system and give you its output. What I think Nix could also be doing is going to the same abstraction level as Bazel, where you are actually writing the build definitions of your software in Nix itself. And then you get this interesting situation where you have a unified system that manages all of your external things, and the build instructions for your software itself. I think that's an interesting future that we could get to at some point.

**Gerhard Lazu:** Yeah. I like the idea of that. This conversation, if anything, it just made me realize how much I don't know about that world. How many similarities there are with Docker containers... I can see a lot of -- you know, even the whole Nixery, how it was built, the whole binaries, the whole inputs and outputs... I even saw this issue, which was like a proposal, "What about bringing Nix builds to BuildKit?" This is a Moby BuildKit issue \#1650. We don't have time to talk about that, but that was fascinating to read...

**Vincent Ambo:** Yeah.

**Gerhard Lazu:** And I think there's so much to learn from that world, which is completely new to me. So it's like, "Wow, this is amazing." I just wanna go and discover it and explore it and see what's good about it, what could be improved, so on and so forth. But as we prepare to wrap up, what do you think is the most important takeaway for the listeners that made it through to this point of our conversation?

**Vincent Ambo:** What I would say is that there is a set of technologies that you can learn, that kind of change the way that you think about stuff. Examples of this for me personally have been Emacs, which introduces you to the concept of completely introspectable, malleable software, or Erlang, which introduces you to the Ecto model and the way that they build distributed systems, which is still very relevant, even though it's quite old at this point.

And I think Nix and the concepts introduces by Nix fall into this category. It's one of those things that you look at and it seems extremely strange to you at first, maybe even a bit alien, but once you get far enough up on the learning curve of this program, it starts teaching you a slightly different way of thinking, that could be super-useful in many of the other things that you do, even if you aren't using Nix directly.

So I think the one takeaway that I would give to people is try - if you have the time at some point - to learn Nix. This is not an easy ask, because it's a complicated system to learn, and unfortunately we as the Nix community haven't really figured out how to teach it to people very well... But there are many, many different resources, many different approaches to teaching it; maybe something works for you. I recommend checking it out.

**Gerhard Lazu:** Okay. So we'll make sure to leave some notes in the show notes. But with that, thank you, Vincent. It's been a pleasure to have my mind opened to the Nix world, and Nixery... And it feels like I'm only just finding out about those things, which have been around for quite some time, so I'm very excited about it.

**Vincent Ambo:** Thank you very much, it was fun.

**Gerhard Lazu:** Thank you.
