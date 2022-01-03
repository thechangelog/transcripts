**Gerhard Lazu:** The first present this Christmas is a CI/CD LEGO set that Changelog.com is already using for production. The entire story, including code and screenshots, are available in our GitHub repository; see pull request \#395. Our new pipeline gets coding to prod at least twice as fast as before, and you can see it running in GitHub Actions.

Since we recorded this, we made it over a minute quicker, which is a big deal when everything used to take less than five minutes in total. And there is one more pull request open, which will improve it even more. Check the name of the person that opened PR \#401. If you like the CUE language and understand the potential of direct acyclical graphs for pipelines, this present will take your CI/CD to a whole new level.

So in episode \#23 we were talking to Sam and Solomon about this new universal deployment engine called Dagger - that's how it was introduced - and one of the things which I mentioned towards the end is that I would like to make it part of the Changelog infrastructure. So - hi, Joel, hi Guillaume.

**Joel Longtine:** Hello.

**Guillaume de Rouville:** Hi.

**Gerhard Lazu:** How are you doing today?

**Joel Longtine:** Good. Excited to be here with you.

**Guillaume de Rouville:** Yeah, same for me.

**Gerhard Lazu:** How was it for you to work on this? ...because we didn't have a lot of time, really; we tried to squeeze it around all sorts of things... What was it like the last month working on this? Tell us about it.

**Joel Longtine:** For me, it was fun. It gave me an opportunity to dig into Dagger, in the tool, and the way that we use it, more than I had thus far. I'm relatively new to Dagger, so this was part of my learning about how our system actually works... And it was fun to kind of begin to grok how we use CUE, how we use BuildKit, and how the layers and different file system states work together in those contexts.

It was also fun to work with you and Guillaume and try to figure out how to replicate what you've done in CircleCI inside of Dagger... Like you said, in part so that we could actually transition it over to GitHub Actions, or wherever else you wanted to run it.

**Gerhard Lazu:** Right back at you. What about you, Guillaume?

**Guillaume de Rouville:** \[00:03:58.01\] For me, it was really fun working with you. One of the things maybe, some of headaches because I didn't know CircleCI, and it's quite interesting to -- because as I was helping you... I know Dagger, I don't know this technology, so to help you port it, I had to learn a lot of things, \[unintelligible 00:04:14.29\] and we encountered a lot of issues along the way, and in order to tweak them, to fix them, you need to properly understand what you're doing... Because your config at the moment, the CircleCI one, is quite a big one, and in order to port it, we needed to understand it properly. But it was a lot of fun.

**Gerhard Lazu:** That is actually my key takeaway as well. I wasn't expecting to learn as much. I was hoping, but I wasn't expecting it... And then with you two - it was great; we went on such a journey... And I think what helped is that we didn't have a lot of time, but we had long gaps between us working together. So maybe it was like a couple of days, and then we got together for like half an hour or an hour. Joel, you're in Colorado, and Guillaume was in Paris, so he's like an hour ahead of me. I think that really helped, because in a way we found a pace, and then we just bounced ideas off one another, and we bridged that gap really nicely, I think.

**Joel Longtine:** Yeah, I think that's one of the things that I got out of this too, was just the where we are now, and what's possible with Dagger today, and some of the difficulties that we currently have... Interesting interactions between CUE, and BuildKit, and how we're interpreting that CUE, and applying it BuildKit states... And then kind of what we're doing with this new release, just what I'm seeing as being possible in that context, and just how much more intuitive and powerful it's going to be.

So that was part of what was fun for me, was learning what our current state is, while learning where we're headed, and seeing where that delta is actually gonna be an immense improvement in the tool.

**Gerhard Lazu:** So what does the new pipeline look like? We get and compile the dependencies, and we do this in parallel. So we do tests, and we do prod. The tests - we need to compile them, then we use a cache, and this is something to do with the volumes, like to copy all the layers. We don't need to go into too much detail, but it's BuildKit and CUE working together, and then we run the tests. Before we can run the tests, we need to start the test database. It's an ephemeral one, it's just a container, PostgreSQL, because the tests are integration tests, some of them, so they need the database... And then we stop the database when the tests finish running.

Now, in parallel, we resolve the assets. These are like the CSS, the JavaScript, all that in development... It's like a step towards production. Then we digest them, and that is one of the inputs to the production image.

On the right-hand side we have to compile the dependencies for production. We have the same caching mechanism, and this is like -- it's a necessary step based on the current version of Dagger, which by the way, this is something which will improve. And how do I know that? Well, Joel has been telling me all about it and he's been very excited to work on that. Maybe you wanna mention a little bit about that...

**Joel Longtine:** Yeah, so we're basically improving the developer experience around the low-level interactions that Dagger has with BuildKit. So we're basically changing the API to BuildKit. Right now we have kind of an implicit, kind of spread all over the place API to BuildKit, instead of our CUE packages. And the changes that were in the process of building out actually make that API much more explicit, and kind of form like a low-level representation of the BuildKit API within CUE... Which then can be used by our packages, or other packages, to interact with BuildKit, the various file system states and actions on those file systems as well.

\[00:08:07.23\] So yeah, I think this is gonna get a lot better. We'll be able to actually use some of the features that we weren't able to use this time around, of BuildKit, like mounting volumes in a much cleaner way.

**Gerhard Lazu:** Okay. And then when that is done, the last step is obviously assemble the image and push it to Docker Hub. The one step which we don't have here, and we would want, is to git commit the digest of the image that was deployed, so that we can do like a proper GitOps way, so that rather than our production pulling the latest - and you know, there's a couple of issues around that; I won't go into them, but I know we have to improve that... We would like Dagger in this case to make that Git commit. And I say Dagger, but now I realize it could just be GitHub Actions. And why do I say that? Part of this pull request we did the integration with GitHub Actions, and we'll get to that in a minute. But first of all, I would like to show what the new pipeline looks like, and what makes it better. So what are these green items here, Guillaume? How would you describe these? What are they?

**Guillaume de Rouville:** These are -- I think it's actions. An action represents a step, so in general, it lies inside a definition in Dagger... So how do you build a Dagger pipeline? You just assemble actions \[unintelligible 00:09:25.12\] That's how you have parallel dependency builds.

**Gerhard Lazu:** Okay. What is an action? If you had to describe it, Joel, how would you describe an action?

**Joel Longtine:** An action typically would be like a collection of BuildKit steps. So the people familiar with Docker - a specific command within a Docker file, like a copy, or an exec, an env - those sorts of things... They basically represent a stage within BuildKit. And typically, one of these actions is gonna be a set of those steps. So it might be a number of runs within a container exec-ing a shell script, or something along those lines, and then getting the resulting file system state.

**Gerhard Lazu:** They all run in the context of a container, right?

**Joel Longtine:** Yes.

**Gerhard Lazu:** So when you think of a step, there's a container which gets created, that step runs, and there's some inputs and outputs for that one step, is that correct?

**Joel Longtine:** Yeah, that's a great way of describing it. So you have the set of inputs - that could be a file system state, that could be a volume mount, it could be secret mounts as well... This is something that's a piece of BuildKit and some of the new features that docker build got as a result of BuildKit.

So you have all these inputs coming into this node, which is that file system state plus some action... And then something results from that. If you're doing an echo hello to world.txt, then that new file system state has that new file on top of it.

**Gerhard Lazu:** Right, yeah. So if you can see here, these steps - I mean, there's no cache, right? If you remember the Docker file, if you think about that, and how some of those commands could be cached, and then they're really quick... For example, the app image - you can think of it almost like a command in the Docker file. So that is cached and it takes 0.9 seconds. It just has to verify where it is in the cache. Now, these run in parallel, and we'll do a run for you to see what they look like. But this whole pipeline as a whole, even though it looks flat, it runs in parallel, and it takes 190 seconds. So it's a slight improvement over the 3 minutes and 38 seconds which we had here. But you have to realize that these 3 minutes and 38 seconds will always be just that. I mean, this is using caching. But Dagger, if it does use the caching, if everything is cached, if you don't have to compile anything, it just has to run the tests themselves - it's five times quicker. That is a huge speed-up. So this pipeline run, all of it, took 45 seconds. And the test took the longest, 42 seconds... Versus 3 minutes and 38. So - much, much quicker.

\[00:12:14.16\] And by the way, this will run against any Docker daemon. That's the only requirement. You need Build Kit, and the easiest way of getting Build Kit is just in your Docker. It already has it. So there's no special CI setup required; you can run this anywhere, whether it runs the same way, whether it runs in GitHub Actions, Circle CI, or your local machine, which is really cool.

The other very cool feature is that open tracing is built in. So what that means is that you can see what does the span look like for a cached run, versus an uncached run. And all you have to do is to run Jaeger, and have an environment variable. By the way - all this code, all the integration is here. So if you look at pull request 395, you can see all of it.

So what we're seeing here is that this cached run - we can see it compiling the dependencies, and you can see that some of these steps run in parallel. So \[unintelligible 00:13:02.05\] are still running, while the test cache already started here. \[unintelligible 00:13:07.21\] so on and so forth... And tests - the tests are running, and we are already... We started building the production image. And that is the beauty of the pipeline. You want to run as many things as you can in parallel, and then I do like optimistic branching, it's called, in CPUs... And then when you get to the end of it, it's just like the last step. You assume that everything will just work, and that's what will make it really quick.

So you can see what a cached run looks like. You can see that all these steps are really, really quick, the tests take the longest, and all in all, we're done in 47 seconds... 46.98. Let's be precise.

**Joel Longtine:** I think that's one of the beautiful things about Dagger and our use of BuildKit too, is that because we're describing at a very fine-grained level the relationships between these relatively fine-grained steps that might be within the context of an action, we can run many of those in parallel. So if you need to go run a bunch of things along, say, the assets pipeline, you can do that at the same time that you're doing stuff with Mix, and then like you said, you're basically waiting for both of those things to be done, because those are inputs to some next stage. And you can imagine much more complicated versions of this as well, where you're going and building a ton of microservices in parallel.

**Gerhard Lazu:** Yeah, exactly. What about the GitHub Actions integration? Well, this is a screenshot, this is what it looks like. We wanted to do like a point in time, and we can see how much quicker this is... But I would like to talk about this, and maybe Guillaume can run us through it, what does this look like. This is a GitHub Actions config. So what can you tell us about it, Guillaume? How do you read this?

**Guillaume de Rouville:** So it's like a normal GitHub Action. What I see here - you have environment variables, so a Docker host, the \[unintelligible 00:14:57.04\] to the Jaeger endpoint, and then you have a job, only one job, which is named ci. It runs on Ubuntu, so you just check out the code for the context of the changes. Then you use basically Dagger here...

**Gerhard Lazu:** A Dagger action, yeah...

**Guillaume de Rouville:** A Dagger action, exactly... And then you configure the Tailscale tunnel, I think it's for you, I believe...

**Gerhard Lazu:** Yeah. Because this Docker is remote, that's right. And it's the same Docker host which I use locally. I don't run Docker locally, I just have a Tailscale tunnel, which connects me to that host. And it's the same host that the CI uses. Now, there's an improvement to be made there, and we'll get to that maybe at the end... But yeah, it's the same one. So if it runs locally, it will run exactly the same in the CI, and that's really cool, I think. And then what about the last step?

**Guillaume de Rouville:** Basically, it's the step you do when you run it locally. You just do a Dagger \[unintelligible 00:15:53.22\] and I presume you have specified an input, which is a local folder, and you don't have to specify it.

**Gerhard Lazu:** \[00:16:07.10\] That's right. So if you don't see the glue code, so the \[unintelligible 00:16:08.23\] - you're right, it's just a step, which already takes some values that have been preconfigured. So those values are committed, including the secrets, by the way. Dagger is using this really cool thing called SOPS - you may have heard of it, from Mozilla - to encrypt all the secrets. So we have to set in terms of a secret the \[unintelligible 00:16:26.15\] for them to be able to be decrypted, if you think of it like the private key... And yeah, everything just works. So we commit secrets, right; we're crazy, I know... No, actually, it works really well. It's a done thing. And I waited for a long time to do this, and I'm really excited.

So this is what the glue code looks like locally. So it's basically what puts everything together. It is a makefile, that's what we use. It just makes things easier. It just runs a bunch of commands. And what I would like to point out is, for example, the new CI package, it declares a new CI... This is a plan, is that right? Is it called a plan, or is it an environment?

**Joel Longtine:** It's an environment in the current version, and we're transitioning to the name plan, or a dag, potentially.

**Gerhard Lazu:** Right. Oh, that's a good one. Dag this. It asks me to enter my username... This will be stored encrypted, by the way, because -- no, this was to be stored as text; nothing secret, it's Gerhard, you already guessed it... And then it asks me for my Docker Hub password, so that it can push the image. These are stored encrypted, using SOPS, locally. And then there's a couple of things here, we'll skip over them... And then we provide the inputs. Those inputs are important because that's what the environment, or the plan, or the dag, as Joel mentioned, calls it. So we have the app, which is basically the whole source code... There's a couple of things that we need from the environment, like the Git SHA, the Git author... Hm. I don't think I fixed those; I need to fix them. Okay, this is something which still needs to improve; I just realized, going through this now. See? It's so good we're doing these things. So helpful.

Cool. So then the Docker host, which is the remote one, it knows how to connect to it... And then it runs the same command that you've seen in GitHub Actions. Docker -- sorry. Docker... That's like a Freudian slip. Dagger - Dagger Up, log-level debug, environment CI. And that's exactly the same thing.

The other part of this is obviously the CI queue. And this is like all the code that actually declares the pipeline. And what is this ci.queue? How would you describe it?

**Joel Longtine:** It's basically the description of those various stages that we were describing earlier. So there's the app image, you had the test container, or the test db container definition prior to that... And then -- let's see. This is some of the -- so deps is basically kind of helping copy the actual application, which is all the changelog.com source code, into a container... And then we have just some CUE variable, or CUE fields, in essence, that help us store some information about how we wanna be mounting these dependency caches and build caches...

**Gerhard Lazu:** Yup.

**Joel Longtine:** We also do the same thing for Node modules... And then this \#depscompile is - we're using that basically as a way to describe a kind of structure, that we're then going to apply in a few other places. So you can see \[unintelligible 00:19:35.22\] And we do the same thing with dev and prod, if I remember correctly.

**Gerhard Lazu:** Yeah. \[unintelligible 00:19:50.28\] with something changed; actually, added... Because it appends stuff to it. Okay. And what is CUE?

**Guillaume de Rouville:** \[00:20:05.08\] CUE is a configuration language. It aims to be a better JSON and a better YAML. It stands for Configure, Unify and Execute. Basically, I think Joel will be able to continue after that... \[laughs\]

**Joel Longtine:** Yeah, so like Guillaume said, it's a configuration language, and one of the things that I think is really lovely about CUE is schema definition, data validation, and it basically allows you to create configurations that have types, so they can be type-checked, preferably, before you get to prod... \[laughs\] And that actually is true; it's how it works.

I personally love that it is not white space-dependent, like YAML is. I've been bit so many times by that, with Helm and other various tools; Ansible comes to mind, too... There's lovely things about those tools, and I've found myself bitten by that bug and a number of them.

**Gerhard Lazu:** That's why YAML vaccine resonated with you, right? When I mentioned it, this is exactly what I meant, because you had the bug multiple times, and damn it, it's not fun.

**Joel Longtine:** Yeah. I've had production deploys fail because an engineer added an environment variable and used tabs instead of spaces in a Helm chart. I prefer not having those sorts of -- those sorts of problems are avoidable, and CUE is a really powerful tool for doing that.

Just to kind of dig into the schema definition stuff a little bit deeper, because I think it's useful to understand... You can basically define the shape of a particular configuration, including constraints on different fields. A good example of this might be like a Kubernetes deployment. So you can have a Kubernetes deployment with your API version, your kind deployment, and then you can, for instance, say, set the CPU field, and actually set a constraint on that. You can set an upper bound, and a lower bound etc.

And then when any configuration from a developer or an SRE comes into that, if it doesn't match that specification, then the compile of the CUE will fail. So it will allow you to fail at a much earlier stage, potentially even on a developer's local machine, rather than once it gets to production.

**Guillaume de Rouville:** That's exactly what we've been using. We've developed a serverless package to usually deploy serverless functions on AWS. That's basically what we used. So it's kind of useful... Sometimes you have -- the names, they are forbidden characters, and we just do it, we use these validations to fail early.

**Gerhard Lazu:** Yeah. Okay. So yeah, there's a lot to explore here. I really, really like CUE, I have to say; there's so many great things about it... And it makes not having the right inputs, not having the right values - it just really helps. The compiler errors for CUE were really good, and they steer you in the right direction. And with Vim, there's a good plugin which kind of works; I can share it in the show notes... But it's good; it's much better than not having it. I'm sure that that can improve as well.

**Joel Longtine:** There's some rumblings in the CUE community around creating a language server as well.

**Gerhard Lazu:** Ooh... Wow. An LSP. I would love that. I would love that. Okay, right. So I'll definitely want to watch, for sure. So what comes next?

**Joel Longtine:** \[00:23:59.14\] I think one thing that occurs to me - at least as far as I remember, this is currently still using the docker build. So you're actually pushing out the contents of a bunch of those steps to the Docker Engine to actually then build the image... And with Europa and some of the improvements there, that should not be necessary. You should be able to just take the output of one of these stages and just add the information that you want on top of it, and be off to the races, and then be able to push that directly. Because right now what's happening is a bunch of the context is still having to be pushed from within BuildKit to Docker Engine, so that it can build the image. And that will not be necessary with some of the new Europa stuff.

**Gerhard Lazu:** Interesting. Okay, it sounds great. Anything to add, Guillaume, to that, or something else?

**Guillaume de Rouville:** Yeah, I think that with Europa, as Joel mentioned earlier, the DX will be far better. What we're trying to do at the moment - if the people watch the PR with Europa, it will \[unintelligible 00:25:11.15\]

**Gerhard Lazu:** I think -- yeah, that makes a lot of sense. Europa will make this a lot simpler. And while we had to jump through a couple of hoops, it just made it obvious they shouldn't be there... So I'm really excited to adapt this to that new way. That will be great. And to see what improvements we can get. Because at the end of the day, that's what you care about, right? This looks not as good as it could; I mean, it works, and that's what you care about, make it work, make it write... I think that's what's happening; now we're making it write, and then we're making it fast. I'm very excited about that.

Okay. Well, I'm gonna wish you both a Merry Christmas, even though this is weeks before Christmas... But by the time listeners will be listening to this, it'll be Christmas... And a happy new year!

**Joel Longtine:** Same to you, Gerhard. Thanks. It's been a lot of fun to work with you and Guillaume on this. It's been a nice opportunity to get to know you, and get to know Guillaume as well. Like you mentioned, I live in kind of the Boulder/Denver area, and Guillaume lives in France... And it was a good opportunity to bump into each other more regularly.

**Gerhard Lazu:** Definitely. Right back at you again. Same for me, so I'm glad that this worked the way it did. I also had a lot of fun. Thank you very much.

**Joel Longtine:** Thank you.

**Guillaume de Rouville:** Yeah, thank you.

**Gerhard Lazu:** Our second present to you this Christmas is sharing my way of understanding CPU time used by Kubernetes workloads. Think near real-time Flame Graphs, as well as being able to compare CPU profiles for the same process, at different points in time. If you're familiar with Brendan, Gregg's book Systems Performance, this goes really well with it. So why is this a big deal? And why was it more difficult to do this in the past? I know just the right person to unwrap this present with.

**Frederic Branczyk:** Let me talk a little bit about why that's interesting and why that's useful. So profiling has kind of been in the developer toolbox ever since software engineering has existed, because we always needed to know "Why is my program executing, and how is it executing the way it is?"

So profiling has been around for a very long time. It's essentially us recording what the program is doing. You can literally think of it as we're recording the stack traces that are happening 100 times per second. That has kind of evolved over the years. Profiling used to be a very expensive operation to do, which is why you only did it when you really needed to. So one thing that kind of changed the perspective was when we discovered sampling profiling. In the olden days, the way that profiling worked is that we literally recorded everything that was happening in our program. And naturally, that's really expensive.

\[00:28:10.06\] Sampling profiling kind of go a different strategy and say "Actually, we only need something that's statistically significant." So instead of recording everything that's happening, as I said earlier, we only look at the stack traces a hundred times per second. And that, we can do incredibly efficiently.

The reason why this is super-useful and why being able to record stack traces with statistical significance is useful is that now we can say "This is where my program is spending time." So that can be used to save money on your infrastructure, but also there are a lot of optimizations that you can only do if you have that type of depth of data to analyze. So you can actually down to the line number tell what is using your CPU resources.

One really cool conversation that I had yesterday - this perfectly translates in the serverless world, where you actually pay for basically every single CPU cycle that your serverless function is running, and any CPU second that you can cut off from that is money you're saving from your serverless bill. I think that's a really obvious value proposition. Because we simply have this data and we're recording it always, we can actually reliably tell where we can optimize our code.

**Gerhard Lazu:** So out of these three things - saving money (very important for some), improving performance... I love that. Shipping code fast - great. Making it better and improving it - I love that. And when things go wrong, understanding what exactly went wrong. What CPU, what disk, what network, where is the bottleneck from a system perspective, as well as obviously from like if you have microservices, between microservices. So Parka helps us understand from a CPU perspective where is the time spent. In the current implementation, in the current version, that's what it tells us really, really well. So how about we try it out?

We're going to run it in our production Kubernetes setup. Just like that. Why not? Create a namespace, apply the server, and apply the agent. And as I do this in the background, what is the difference, Frederic, between the server and the agent?

**Frederic Branczyk:** The server is essentially the component that allows you to store and query profiling data, while the agent - the one and only purpose of the agent is to capture this data from your applications at super-low overhead. And one of the really exciting technologies that we're using here is eBPF. So because we know exactly what the format is that we're gonna want this type of data in, we can in kernel, without having to spend all of this overhead of doing context switches from kernel space to user space, we can immediately record the stack traces in kernel, and present it to Parka Agent, and then Parka Agent - it does some resorting in the data, but essentially it just sends that off to Parka. And then from Parka you can actually visualize it.

**Gerhard Lazu:** Okay. So we have the server and the agent... So let's port forward to the server, to the UI, and in our browser, local host 7070 - let's see what that looks like.

**Frederic Branczyk:** One thing that I think is really important to mention - everything revolves around the pprof standard. This is kind of an industry standard format for profiling data. So everything produces or works with pprof format. So you could send any kind of profile, like memory profiles that have been captured through some other mechanism, to Parka, and analyze that as well. It's just that the agent today can only produce CPU profiles and continuously send those.

\[00:32:12.14\] The agent actually also produces pprof-compatible profiles, and maybe we can have a look at that later. The server ingests those, and then one additional really cool feature, I think, is any query that you do in the Parka frontend, you can download again in pprof format. And if you have any other sort of tooling around the pprof format, you can still use them and compose your workflows.

**Gerhard Lazu:** Okay. We are on the server, looking at all the CPU profiles. This is the profile coming from container Parka. How do we read this? There's a CPU sample, we can see the root, that's the root's span... What about all the other spans? What are these?

**Frederic Branczyk:** This is what's called a Flame Graph, and every span that we're seeing here represents how much this span, as well as all of its children make up in cumulative. That's actually what the frontend also says - the cumulative value.

**Gerhard Lazu:** Right.

**Frederic Branczyk:** And essentially, we're saying "Everything from this point onwards and further down, uses up --" In this case you're hovering over one that says 11%. So, for example, we can see here in the middle, runtime.greyObject, for example. If we were able to optimize that greyObject function, for example, and say -- for whatever reason we're able to optimize 100% of it away, we would actually be saving 15% of our CPU resources here.

In this case, you actually clicked a particularly interesting sample, because we can see in our metrics above that we have these spikes every now and then, and we can very clearly see what it is that is causing this spike in this profile; we can see that it's garbage collection. A very classic thing, that can use a lot of CPU resources.

**Gerhard Lazu:** Right. So this is garbage collection that happens in \[unintelligible 00:34:01.13\]

**Frederic Branczyk:** Right.

**Gerhard Lazu:** Okay. So why does this garbage collection happen?

**Frederic Branczyk:** Because of how Go works, you allocate objects in memory, and when you don't use them anymore, eventually the runtime will come around and see that this piece of memory is not in use anymore, and kind of free that memory to the operating system, so that anybody on the machine can use it.

And in this case, essentially, what we're seeing because we have such a huge spike, that's telling us Parka is doing a lot of allocations, it's allocating a lot of memory, that then consequently is kind of thrown away and can be garbage-collected. So it seems like there's probably some potential in optimizing allocations here.

That said, having allocations is not a bad thing, because at the end of the day I can write a program that does absolutely nothing, and does no app allocations, but that's also not useful. Producing a side effect - it's one of those things that as software engineers we try to not produce a side effect; but as it turns out a side effect tends to be the thing that's actually useful in the real world.

**Gerhard Lazu:** That's when real work happens, right? These spikes are an artifact of real work happening. And if I had to guess, without knowing too much - I mean, what Parka does behind the scenes, but not knowing all the details... I think that this is related to all those profiles being maybe read, being symbolized, or something happens in the background. So it reads a profile, builds whatever data structures it needs to build to get an output, and when that output/result is achieved, then all the intermediary objects can be garbage-collected. I think that's what's happening here.

**Frederic Branczyk:** The two major things are definitely what you already mentioned. Symbolization, because this happens asynchronously, as you have uploaded your profiling data... And then it's actually ingesting and writing that profiling data to its storage. This is something that, because we're doing continuous profiling, it happens continuously. And every network request that we receive causes memory allocations. Because we read that from the network stack, and that causes memory allocations.

\[00:36:11.11\] Now, there are a number of optimizations that can be done to reduce this, and you can reuse buffers, and stuff like that... And we'll get to all of that, but it's unlikely that we'll ever get to know. Zero. But there's definitely lots of optimization potential here.

**Gerhard Lazu:** Okay. I do have to say, looking at this Flame Graph, it's really amazing. If you remember how difficult this used to be in the past, where you had generate a pprof, and then use that pprof, or something similar that can read that profile, to get at this Flame Graph, and then try and slice and dice... Now, if I don't want this Flame Graph, I want a different one, I just click on it, and there we go. Database, Postgres... Let's see, what do we get from Postgres? Okay. So this is slightly a different view. This is a machine-compiled binary, right?

**Frederic Branczyk:** Right.

**Gerhard Lazu:** So why do we see only these numbers? What are those numbers, first of all?

**Frederic Branczyk:** Yeah, that's a really good question. So these are the raw memory addresses that we obtained from the agent. And the reason why we're only seeing memory addresses is because most of the time when you install a package from -- let's say a Debian package, or something like that... By default, these packages are distributed without debug information. So they were intentionally removed from those binaries to reduce the size of the binary. Sometimes it can also have a performance impact, but usually it's just for size optimization.

In the case of Debian, for example, if you still want those debug symbols, the convention is that you -- let's say "apt-get postgres", the convention then is the package name is -dbgsym (debug symbols), and that downloads the debug symbols as a separate package, which can then again be picked up by the Parka Agent as well.

But in this case we didn't have any debug information available, and so - yeah, this particular Postgres binary is stripped, and so it does not have this debug information. That said, there is a really cool project called Debuginfod, where the distributions have come together and they're hosting these servers where using this build ID you can request the debug symbols on-demand.

This is great news, because it means that you don't have to install these debug packages manually anymore. Parka can just go through this Debuginfod server and retrieve it itself. That's the good news. The bad news is Parka doesn't have support for this just yet. We already have support for this plan, I just haven't got to it yet.

**Gerhard Lazu:** So there's a good news and a bad news, and that "yet" is the good news and the bad news. It's coming, but it's not there yet.

**Frederic Branczyk:** Exactly.

**Gerhard Lazu:** That's really cool. I didn't know this. I knew about \[unintelligible 00:39:14.16\] and being able to use those build IDs to get the debug symbol for this particular binary from that server? That's really cool.

Okay, so we've seen Postgres... What about Erlang VM? So this is our app, and we can see that we have beam.smp all over the place, which is the name of the binary for the Beam Erlang VM. So we see the same thing here...

**Frederic Branczyk:** Yeah. So this is kind of another variation of this, but the first difference is this is not a binary that was compiled to machine-readable code, right? This is, in the broadest possible sense, interpreted code. The good news about Erlang is it actually has a just-in-time compiler. So what that means is even though it is technically a virtual machine, on the fly it compiles parts of your code to actually machine-executable code.

\[00:40:17.22\] This is kind of good news again, because at least in theory, the same strategy can be applied. It just turns out that a lot of the strategies that these dynamic languages or virtual machines tend to very subtly differ, and so we do have to essentially implement small pieces of runtime-specific things.

One thing that's actually really cool, that I think Erlang does implement, and the Node.js runtime implements as well, is something called perf.maps. This is something that many just-in-time compilers implement, where essentially the just-in-time compiler, because it generates or compiles this code on the fly, it can also write out this mapping from the memory address to the human-readable symbol, and that Parka Agent can, again, pick up and symbolize on the fly. Now, I have tried this with Node.js... Unfortunately, we haven't gotten it to work with Erlang just yet.

**Gerhard Lazu:** Okay.

**Frederic Branczyk:** There seems to be something specific that the Erlang VM does, that we don't fully understand yet... But it's one of those things where language support is something that's always in progress, and hopefully will soon have full support for the Erlang VM as well.

**Gerhard Lazu:** Nice. So we can't really see that. But there's another thing which we haven't shown - the compare one; the compare view. So we can compare two profiles side by side... So we take a low one - I think that's how you like to start. You take a low profile on the left, you take a high on the right, and it will compare them side by side. So how do we interpret when this loads, how do we interpret this result?

**Frederic Branczyk:** Yeah, so this is going to be hard when we just see memory addresses, but essentially, anything that is blue has stayed exactly the same. It used exactly the same amount of CPU in the one observation as it did in the compared one. Anything that's green, the CPU cycles got less. I can actually see one very tiny one on the left...

**Gerhard Lazu:** That one.

**Frederic Branczyk:** ...somewhere in there there's one that got very slightly better. 50%. It seems like it was two CPU samples before, and now it was only one.

**Gerhard Lazu:** How do you know it was two CPU samples?

**Frederic Branczyk:** So we see that the dif if -1, right?

**Gerhard Lazu:** Right...

**Frederic Branczyk:** And the current sample is 1. So there must have been two before.

**Gerhard Lazu:** Okay. So that's CPU cycles.

**Frederic Branczyk:** It's observations of stack traces. So we at most look at a process 100 times per second, and so that means -- 100 means one CPU core being used; in this case, this is 1%, like one millicore...

**Gerhard Lazu:** Right, okay.

**Frederic Branczyk:** ...that was being used within those ten seconds.

**Gerhard Lazu:** Okay. So this one is slightly better... But this one, the beam.smp - and I wish we knew what this was... Or maybe this one, which is just a memory address... This is 350% worse. So I can see, or I can think -- I mean, even though this is very Christmasy, and I like it, like red and green, and it's very nice, it would be easier if we had used a different color for the ones which have an infinity. Maybe black, or something like that, which - they're completely new. I like the diff idea, but a different color from the ones that are like -- for example this one, +700. So this is just worse... But this is brand new. This didn't even happen in the previous sample.

**Frederic Branczyk:** \[00:44:13.27\] Yeah.

**Gerhard Lazu:** Okay.

**Frederic Branczyk:** I'm writing this down.

**Gerhard Lazu:** Cool. So this is great, to be able to see the difference... And I'm just wondering, if we were to take this memory address, and you were to look into that file, into that perf.map file, would we be able to figure out what this is?

**Frederic Branczyk:** It's possible. The problem is, in this case -- so we can look at the process and we can kind of go through the steps of what the Parka Agent would do manually, and then we can try to see if we can figure out why this is not able to symbolize this.

My theory is, because of what we can see here - the way that this binary code was memory-mapped, we weren't actually able to understand where it's mapped. So the way that this works is - let's go back to our terminal, I would say, and we can inspect this, actually, the way that binary code is memory-mapped for the process.

**Gerhard Lazu:** Okay.

**Frederic Branczyk:** So we can, again, look into our procfs - this is where all the magic happens in Linux...

**Gerhard Lazu:** Okay, so do we wanna go like on the host?

**Frederic Branczyk:** We can do the host, or the container. Yeah, it shouldn't matter. Both should work.

**Gerhard Lazu:** Okay, yeah. Let's go on the host. So we won't go on that -- \[unintelligible 00:45:38.02\] There we go. That's the proc. Yes?

**Frederic Branczyk:** Right. And here there's a file called maps...

**Gerhard Lazu:** Yes.

**Frederic Branczyk:** Yeah. So let's have a look at what it says in there. And the way that symbolization effectively works is that we take that memory address that we saw, and we try to find in which range within this file that memory address is from.

**Gerhard Lazu:** So this one right here. Okay. So that's the memory address. So do we need to do 7ff? I mean, I can see something here, 7ff...

**Frederic Branczyk:** Well, if you're able to search within your terminal, maybe we can -- it's a bit of a hack, but we can search for the address that you have copied, and we can just try to remove certain digits until we maybe get a match.

**Gerhard Lazu:** Okay. So let's remove those \[unintelligible 00:46:41.10\]

**Frederic Branczyk:** And as we can see, the ranges don't have the 0x prefix here, so we're gonna need to remove that.

**Gerhard Lazu:** Okay.

**Frederic Branczyk:** So this is an interesting one... And this is exactly why this is not working. So the way that this table works is that we have these ranges, and then it tells us on the very right, this is the binary that this executable code came from. Actually, the stack - I wanna say this could be a... I don't know if it's necessarily a bug, but what can happen in some languages - and in Go this can happen as well... Sometimes when we do the stack trace snapshots, when we retrieve them from eBPF, sometimes the kernel does them a bit too tall, and we don't fully understand why. Basically, what it does is it goes back and walks the stack, and sometimes it walks too far. And in this case, it doesn't actually make sense that the stack contains executable code. That shouldn't be how things work.

**Gerhard Lazu:** Yeah.

**Frederic Branczyk:** \[00:47:54.14\] So it could be that this is just an artifact of that. But because it's also a virtual machine, maybe there's something happening that we don't understand, and we are actually executing code that is on the stack. It seems unlikely, but it's one of those things where -- I'm not an expert on the Erlang VM, so I don't know for sure...

**Gerhard Lazu:** Yeah.

**Frederic Branczyk:** But my intuition says that this shouldn't be possible just from the way that processes work.

**Gerhard Lazu:** Right. Okay. So this is like the Erlang runtime itself, how it executes code on the kernel. That's what we would need to know.

**Frederic Branczyk:** Yes.

**Gerhard Lazu:** So I think that we have a person that we can ask, which is Lukas Larsson. Even though he's very busy, I know, and he's focused deep down on some very gnarly problems in the world of Erlang, we can ask him... And if you're interested to follow what happens - I mean, this is like pull request 396, is what started this - I intend to keep as many details as I can here, and all the follow-ups. So yeah, this is a place to go, I suppose, to see what else has happened since this was recorded.

So what I would like to say is thank you very much, Frederic, for running us through Parka.

**Frederic Branczyk:** My pleasure.

**Gerhard Lazu:** I can see so much potential here... I really like where this is going and how simple it makes certain things. It makes me excited as to what's coming next year. But this was great. Thank you, Frederic.

**Break:** \[00:49:34.14\]

**Gerhard Lazu:** What we want to do is, first of all, fix this R, damn it. Someone can't type. Infrastructure... As if my life depended on it. Right. So we want in 2022 for the Changelog.com setup to use Crossplane to provision our Linode Kubernetes cluster. That's the goal. And the way we're thinking of achieving it is to follow this guide to generate a Linode Crossplane provider using the Terrajet tool, which is part of the Crossplane ecosystem. And we can generate any Crossplane provider from any Terraform provider. Cool. So how are we going to do that?

**Dan Mangum:** Yeah, I think -- well, there's a couple different parts here. In order to be able to test out anything that we generate, we're going to need a Crossplane control plane running somewhere. That being said, we need to generate and package up this provider to be able to install it in Crossplane, and go through our package manager there. But it could be as simple as even just having a local \[unintelligible 00:50:57.01\] cluster to start out, and after generating, using go run to just apply some CRDs and see if it picks them up correctly.

**Gerhard Lazu:** That is a good idea. I like it. But I have found issues when I went from \[unintelligible 00:51:10.14\] to something else. GKE, LKE, any Rio cluster, because there's different things, like RBAC, for example, or different security policies, or who knows what. So I like starting with production, which is a bit weird, because you would think -- like, you start from development; but I like starting with production. What I'm thinking is I want to start with Crossplane installed in a production setup... And I can't remember if this was episode \#16 or \#17, where I was saying that if there was a Crossplane -- \#15, there we go. Gerhard has an idea for the Changelog '22 setup. So the idea was to use a managed Crossplane, which would be running on the Upbound cloud, and with that Crossplane, that should manage everything else. So that is our starting point. That's what we're doing here. If we go to Upbound cloud - there we go. Control planes. I have already created one... It's a Christmas gift.

**Dan Mangum:** \[00:52:12.24\] Nice...

**Gerhard Lazu:** So this exists. I will contact you after my free trial... \[laughter\]

**Dan Mangum:** That's good.

**Gerhard Lazu:** So just before Easter, I'll say "Hey, Dan, is there like an Easter Egg in here, or something?" Cool.

**Dan Mangum:** We'll send you an email as a reminder... \[laughs\]

**Gerhard Lazu:** Cool. So we have a control plane, we have a Kubernetes cluster, which is this one... So K... K version, that's the one.

**Dan Mangum:** Also, just to note, you'll want to make sure to clean up that token that was exposed there before you post this anywhere, because that'll give folks the ability to get a kubeconfig to your cluster.

**Gerhard Lazu:** This token, yes. Thank you. Oh, yes. That would be quite the Christmas gift, wouldn't it? \[laughs\]

**Dan Mangum:** Yeah.

**Gerhard Lazu:** "Here you go! You have access to it. You can take everything down." That is a very good catch, thank you. Cool. We have Crossplane, we have access to it... Could we see the versions? So I use K9s, and I think you do, too. I've seen you use it a couple of times. It's a lot quicker. So these are all the pods... If I do d for describe, it's version 1.3.1. Cool. Is that good enough?

**Dan Mangum:** Yup, that's good. Although, actually, by end of day today you'll be able to get as recent as 1.5.1. But a nice policy here is also -- and this will actually be rolling out today as well... You know, we have patches for minor versions, and your control plane will automatically receive the latest patch here, and you shouldn't see any disruption with that. So you'll actually get up to 1.3.3 if you kept this control plane around.

**Gerhard Lazu:** Right, okay. But to get Terrajet to work, will I need a newer version of Crossplane, or is 1.3 sufficient?

**Dan Mangum:** 1.3 should be fine for what we're doing here. Terrajet just basically generates the provider, so as long as that provider is supported, then you're good.

**Gerhard Lazu:** Cool. Okay. We can connect to this, everything is running... Shall we just follow these instructions and see how far we can get?

**Dan Mangum:** Sure. Yeah, it sounds great. And a disclaimer for everyone at home - I am not intimately familiar with Terrajet actually, because we had another team of Crossplane contributors who have worked on this... So I'm gonna be learning as we go along here in terms of the actual generation process. So this should be fun.

**Gerhard Lazu:** That's amazing. So that is --

**Dan Mangum:** That's correct, Muvaffak; yup.

**Gerhard Lazu:** Okay. And Hassan.

**Dan Mangum:** Yup.

**Gerhard Lazu:** Okay, amazing.

**Dan Mangum:** All those folks are actually some of my co-workers at Upbound, and Muvaffak has been a Crossplane maintainer with me for a number of years now.

**Gerhard Lazu:** Amazing. Okay.

**Dan Mangum:** Yeah, they're awesome.

**Gerhard Lazu:** Well, thank you very much. Let's how all it works. My favorite. Let's see what happens.

**Dan Mangum:** Right.

**Gerhard Lazu:** Excellent. What follows next is an hour-long pairing session with Dan, condensed into seven minutes. If you don't want to listen us two newbs figuring stuff out, skip ahead to the end result, when I talk through with one of the Terrajet creators, Muvaffak Onuş.

**Gerhard Lazu:** You used this template...

**Dan Mangum:** Mm-hm.

**Gerhard Lazu:** Okay... Why?

**Dan Mangum:** If you're intending to make this an open source project, that's a way to get started right off the bat.

**Gerhard Lazu:** So basically clone this, right?

**Dan Mangum:** If you click the Provider Jet template there, it will have a "Use this template" button, which means you can just create a new repo right from it.

**Gerhard Lazu:** Okay. Let's go for that.

**Dan Mangum:** Awesome.

**Gerhard Lazu:** Changelog... Perfect. Okay. First step, provide a Jet Linode. Clone the repository CD, replace Template with your provider name. Okay.

**Dan Mangum:** Yeah.

**Gerhard Lazu:** So where was the template?

**Dan Mangum:** \[00:55:52.13\] So all you're doing here is you're specifying what you want your provider name lower and upper to be, and then these commands are going to replace all instances of Template.

**Gerhard Lazu:** Ah, I see. Okay, I'm with you. Okay. Replace all the occurrences... I see. So now I just basically run this command. Okay.

**Dan Mangum:** I'm guessing that has to do with the name of the Terraform repo, potentially... But it says \[unintelligible 00:56:14.00\] broken link, potentially...

**Gerhard Lazu:** Found. Cool. So that is the link that we should use. Perfect.

**Dan Mangum:** So it sounds like that just the Terraform provider Linode is what we're looking for there, if I look in the Docker file here and see how Terraform provider source is used.

**Gerhard Lazu:** It's adding this... I think it's --

**Dan Mangum:** I am a little confused about the difference between Terraform provider source and Terraform download name here, based on the Docker file that we're looking at...

**Gerhard Lazu:** Yeah.

**Dan Mangum:** It seems like they should be the same.

**Gerhard Lazu:** Yeah... I think they should be the same. I think you're right.

**Dan Mangum:** I think that might be getting Terraform itself, and installing it. Let's see if there is a --

**Gerhard Lazu:** Ah, yes. You're right, that is getting the Terraform itself. You're absolutely right. Okay, so this actually is the entire URL.

**Dan Mangum:** Right.

**Gerhard Lazu:** I think it's actually all of it... Ah, no. Maybe not. Because look at the location.

**Dan Mangum:** Yeah, it's just the URL prefix. So I think it's just --

**Gerhard Lazu:** It's this.

**Dan Mangum:** Yeah, exactly.

**Gerhard Lazu:** Okay, that makes sense. Cool. Okay, so this is the Changelog, this is Terraform provider Linode, and then that's it. v4 GitHub, I think.

**Dan Mangum:** Yeah. I'm confused a little bit about the v4 GitHub portion of that.

**Gerhard Lazu:** Mm-hm. Well, that was added there, so that means that there should be a GitHub... Um, not this one. This one, the Changelog.

**Dan Mangum:** It'd probably be helpful if we took a look at one of the -- potentially if some of the existing providers use this, and...

**Gerhard Lazu:** Mm-hm. So if we take this one -- is this public? It is. Cool. So GitHub - look at that. GitHub is there.

**Dan Mangum:** Yeah. So I think this is an example of \[unintelligible 00:58:18.01\] so I think you'd have Linode instead of GitHub, right?

**Gerhard Lazu:** Yeah, yeah.

**Dan Mangum:** But I'm not sure where the v4 is coming from necessarily. I didn't see that there.

**Gerhard Lazu:** Actually - yeah, it's v4 GitHub. That is interesting. You're right. I didn't see v4 either. So I've seen GitHub... I don't know where that's coming from, indeed. Okay, so if we come back to this... Maybe I'm not reading this right. The way I understand it, it's actually the Linode Terraform provider. It's this one that I'm linking to. This is it.

**Dan Mangum:** Yup.

**Gerhard Lazu:** This is what I think I need to provide. So it's basically this.

**Dan Mangum:** No, I think what you have potentially is right... Because I believe this is pointing to -- well, no. Is it using the Linode -- hold on one second, actually...

**Gerhard Lazu:** So in this example it was -- oh, yeah, you're right. No, actually no.

**Dan Mangum:** Here we go. This is helpful. So I'm dropping it in the Zoom chat here. This tells us where integrations is coming from, which is the Git repo. The org is called Integrations, that Terraform Provider GitHub is in. And then GitHub - they don't have the v4 in there though. I don't know where that's coming from.

**Gerhard Lazu:** Yeah, no... So I think there was something here, there was something in the documentation. Where was it? This one.

**Dan Mangum:** Oh, I know what it is. This is a Go package, and they have a v4 version. So that's just the import path for the Go package. So you can leave that out as long as the Linode provider is a normal Go package here.

**Gerhard Lazu:** \[00:59:54.19\] Look, that is the line... Found, downloading. So that pulls it from the right place. Okay, great. If your provider is using an old version... How do I know if it's using an old version? Oh, okay, I see. I was confused. \[unintelligible 01:00:10.17\]

**Dan Mangum:** I believe you need an actual replace stanza down there at the bottom.

**Gerhard Lazu:** You think?

**Dan Mangum:** I believe so...

**Gerhard Lazu:** Okay. This is a require. So the way I understand it, I need to replace this, with this.

**Dan Mangum:** No, I believe that you'll have a dependency there on HashiCorp Terraform plugin SDK, and then you'll have a replace statement at the bottom of the go mod, that indicates you want to replace that dependency that's in your require with the fork there that Hassan has.

**Gerhard Lazu:** Okay. So you're saying that all I need to do is comment out this line. This replace.

**Dan Mangum:** Yup, that should be what we're looking for here.

**Gerhard Lazu:** Okay. I wasn't sure that go mod supports this...

**Dan Mangum:** Yup. \[unintelligible 01:00:56.22\]

**Gerhard Lazu:** ...but okay. Yeah, okay. They're more tidy.

**Dan Mangum:** I believe here is where we need to setup whatever the credentials are needed to talk to Linode...

**Gerhard Lazu:** I see.

**Dan Mangum:** So we may want to do the same thing that the Terraform provider is doing, but --

**Gerhard Lazu:** I see what you mean. Okay, I'm with you.

**Dan Mangum:** Yeah.

**Gerhard Lazu:** So the only thing that we really need is a key.

**Dan Mangum:** To talk to Linode?

**Gerhard Lazu:** Yeah. That's the only thing.

**Dan Mangum:** Cool.

**Gerhard Lazu:** I would call it CLI token, because that maps it to what the Linode CLI expects it to be.

**Dan Mangum:** Is that what you use with Terraform to be able to authenticate?

**Gerhard Lazu:** I don't know.

**Dan Mangum:** Because I believe what we're doing here - so we're taking things out of the provider config and then setting the environment variable based on that, so when the underlying Terraform plugin is invoked, it will utilize those credentials specified by the environment variables.

**Gerhard Lazu:** Yup. Let's see... Linode token.

**Dan Mangum:** Nice. So I'm guessing that's what we want there.

**Gerhard Lazu:** That's what we want, yeah. Where does this key come from? Hang on, let me see. \[unintelligible 01:02:03.03\] Where does this key come from?

**Dan Mangum:** You just deleted the variable that was key username... But you can name it whatever -- sorry, it was way up at the top.

**Gerhard Lazu:** Ah, nftoken. I see, okay.

**Dan Mangum:** Yup, that sounds good. I also am gonna have to wrap up here pretty soon...

**Gerhard Lazu:** Okay, let's wrap up now.

**Dan Mangum:** Okay.

**Gerhard Lazu:** Yeah, let's wrap up now. I think this is a good point.

**Gerhard Lazu:** After the pairing session with Dan, I had a few more with Muvaffak Onuş, one of the Terrajet creators. And then he joined me to talk about the end result.

**Muvaffak Onuş:** Yeah, I'm glad to be here.

**Gerhard Lazu:** We had a couple of early mornings, and I think I had a couple of late nights... So why did we do this? The reason why we did this is because we wanted our Kubernetes clusters to not be provisioned via UI or CLI. So no click ops, Dan; that was a great word. No click ops, no UI, and not even CLI. We didn't want to have a CLI that we need to command a type to provision a Kubernetes cluster. Now, that is not entirely true, because obviously, we still have to give it a config... But there's something that provisions the cluster for us, and that is Crossplane. But not just Crossplane. There's this secret sauce element which I didn't know about, until Dan mentioned that "Hey, have you seen Terrajet?" That was your idea...

**Muvaffak Onuş:** Well, so you see, in the Crossplane ecosystem there are many providers, and not all of them have support for all APIs that clouds actually expose.

**Gerhard Lazu:** Right.

**Muvaffak Onuş:** And one of the examples was Linode. We didn't have it provided. Also, the plan with Terrajet, the motivation was that "Let's build something that can utilize the whole great Terraform community and the great work that they did." So that was how it came to be. Design a code generator and a generic controller that can take any Terraform provider and bake a Crossplane provider up.

**Gerhard Lazu:** \[01:04:02.21\] Right. So this is full-circle happening. Markus, if you're listening to this - this is what happened with your Terraform provider. I remember I worked with Markus while he was still at Linode. We were using Terraform to provision the instances, which were running Docker at the time, to host the changelog.com website and the entire setup. Then that was the seed which created the Linode Kubernetes engine. Then Markus joined Crossplane and Upbound, and now, using the Terraform Linode provider that Markus started to provision Kubernetes clusters on Linode, using the Terraform provider, using Crossplane. Like, how crazy is that? It just takes a while just to wrap your head around. This was like years in the making, and we didn't even know it until a few months ago, when Dan mentioned Terrajet. I didn't even know that this thing existed.

So that's what we're using as a generator for a Linode provider that uses Terraform. So - okay... How many providers have been generated with Terrajet to date, and where can we see them?

**Muvaffak Onuş:** Yeah, so today we have the provider for the big three, AWS, Azure and GCP, and those three providers have almost 2,000 CRDsin total.

**Gerhard Lazu:** Right.

**Muvaffak Onuş:** And then if you go to Crossplane Contrib, you will see other providers, similar to like Jet Linode; for example, we have Equinix, Equinix Metal, we have Exoscale... All of these are completely bootstrapped by the community. So I would say in total like seven or eight right now.

**Gerhard Lazu:** Okay. Yeah, there's quite a few providers... TF, Equinix, I can see that; provider Helm, provider Civo... What else am I seeing here? Provider Jet AWS - this is an interesting one. So even though you have an AWS provider, there's also a Provider Jet AWS. Do you know the story behind that?

**Muvaffak Onuş:** So the provider AWS, the one that calls APIs directly, has around 100 CRDs, which means perhaps 100 services... But AWS has hundreds. So if you look at that Jet AWS, you will see it has 765 custom resource definitions, which is, you know, just too many for the Kubernetes community at this point.

**Gerhard Lazu:** Yeah. I can imagine having so many CRDs in your Kubernetes. You wouldn't even know which one to pick; there's just so many of them. Okay, so that makes sense. And we added another provider, haven't we? In the last week.

**Muvaffak Onuş:** Yes.

**Gerhard Lazu:** That was amazing. 12 commits, that's all it took to generate a provider Jet Linode, which is Crossplane Contrib. This is, by the way, our gift to you, our Christmas gift to you. If you want to provision Linode Kubernetes Engine clusters using Crossplane, this is the modern way of doing it... Because has built a Crossplane provider for Linode, which hasn't seen much maintenance, I think. The last update was a year ago, maybe a bit longer, and I don't think it's working with the latest Crossplane versions. Many things have changed since... So this one we know it works. But it only has a single resource, right? Because that's all that we needed.

**Muvaffak Onuş:** Yes.

**Gerhard Lazu:** And that is the LKE resource. Linode LKE cluster. Now, if you want more resources, contribute. It's an open source repository, public to everyone. So if there's anything missing, what I would like to see is a Linode instance. I would like to provision some Linode instances, some VMs with this. So that would be my request to anyone that's listening to this; Markus, maybe? What do you think? Or someone else. But anyways, it's there... I'm wondering, what is coming next for Terrajet?

**Muvaffak Onuş:** So Terrajet - when we first started with Terrajet, we had hit a problem with APIs, so we were handling that many CRDs, actually.

**Gerhard Lazu:** Right.

**Muvaffak Onuş:** \[01:07:52.20\] When you install 700 CRDs \[unintelligible 01:07:52.21\] for 40 minutes or something, which affects all the workloads that it was supposed to schedule. So we have fixed that problem; there was a patch and we accelerated some of the processes in upstream. So now, we are able to use those Jet providers.

In January, we will have a big splash of announcements. We'll announce AWS, Azure and GCP providers, Jet providers with their API group stabilized, conflicts are stabilized, and API fields are stabilized. And then we will start making some of the resources \[unintelligible 01:08:35.08\] which has more guarantees around that.

Then we will have commercial WebHooks in Crossplane, which will affect how easily we can make a resource, let's say, that you're not happy with the implementation in Terraform provider; you can just switch to native implementation, with API calls directly to AWS.

**Gerhard Lazu:** Okay.

**Muvaffak Onuş:** So all this new stuff that will allow community to bootstrap new providers, and make upstream work with them. It's just so many CRDs, and built easily, that you won't have a problem like "Hey, is this resource supported?" Well, yes. Probably. Instead of, you know, let me take a look how hard it would be to implement it.

**Gerhard Lazu:** I do have to say, having gone from nothing - like, I knew nothing about how to implement a Crossplane provider - to using Terrajet... That was really smooth. I think anyone that is determined to write a Crossplane provider that doesn't exist yet, and there is a Terraform provider which exists - ours, and they can have it. Which is amazing to see. So this is basically proof that your idea works.

**Muvaffak Onuş:** Yeah. I mean, in fact, we had a case where someone in the community - the provider Exoscale, you saw... That was actually written in six hours.

**Gerhard Lazu:** There we go. Amazing.

**Muvaffak Onuş:** And also, that was the hardest part, bootstrapping the provider. If you, for example, decide to add an instance resource to Jet Linode provider, it's 10 or 15 lines of code \[unintelligible 01:10:10.07\]

**Gerhard Lazu:** Yeah, that's right. So all the commits are there, go and check them, see what we've done for provider Jet Linode. Again, it's very, very simple. So what I would like to do now is show you how easy it is to actually do this. And I say "show" because we record video, and we may not have time to publish everything in time, or ever; things can get very busy. But at least we'll do a step-by-step process; there's a pull request, by the way, in the Changelog org, the changelog.com repository, pull request 399, which has all the text, all the screenshots, everything on how to do this, all the links.

So this is what we're going to do next - we're going to install Crossplane, install the provider, and then provision the Linode Kubernetes Engine cluster using this provider. Then we target it, and then we try something crazy. You know that I'm all for crazy, trying crazy things and seeing what happens... So that's what we're going to do next.

Okay, so I am in the 2021 directory currently, and I'm going to do -- I'm already targeting our production Kubernetes clusters. Oh yes, of course - Muvaffak, when I mentioned this to you first, like I develop in production, you laughed... But I'm serious. \[laughs\] That is the only thing that matters. If it's not in production, it's in inventory. I don't like inventory, I like stuff being out there.

So make, in this case, LKE Crossplane. And what that does - that installs Crossplane version 1.5.1, using Helm, straight into production. So installing Crossplane... Two minutes later, it's done. That's how simple it is.

The next step is make Crossplane Linode provider, and that's it. That's simple. That was really quick, because the provider is super-small. Like 18 kb, I've seen the image; which then pulls a bigger image. How does that work, can you tell us?

**Muvaffak Onuş:** \[01:11:58.12\] Yeah. So the \[unintelligible 01:11:58.19\] that contains your CRDs, and also some information about your package. Once it's downloaded by the package manager, it installs the CRDs and then creates a deployment with the image that you provided there. So that other image contains the binary.

**Gerhard Lazu:** Okay. And which version did we install of the provider? Version 0.0.0-12. So there's no tag for this. This is like a dev-only version. We trust dev in production. The dream is real. Production became dev. Great.

Okay, so we installed it, we configured it, it's all there. So how can we check that the provider is there? If we maybe get all the pods in the namespace, Crossplane system? Because that's where everything gets installed. We see that we have Crossplane installed, we have the Crossplane RBAC manager - these are two pods, and the third one is the Jet Linode pod. Cool. So what can we do next? I'm using K9s as the CLI allows me to do things really, really quick. So if we go to look at all the aliases, which is Ctrl+A for me, and I search for cluster, we see a new CRD. And the CRD is in the Linode Jet Crossplane IO v1 Alpha 1 group. That's how we can provision new clusters. So let's try that.

If we go to Cluster, to list out clusters, we have no clusters. Great. Let's do "Make Crossplane LKE." All this does - I still have to run a command, okay... I know what I mentioned earlier, there will be no commands, but this is a different type of command. I'm not telling the Linode API "Hey, Linode, create me an LKE instance." I'm telling Crossplane to create on my behalf an LKE instance. And there's something really cool about this, because Crossplane will continuously reconcile what I ask of it. How cool is that? I think that's my favorite Crossplane feature, which happens to be a Kubernetes feature as well. You know, declarative, you tell it what you want, and it will make it so. I love that story. Great.

Okay, so this succeeded. What are we seeing now? We are seeing that 42 seconds ago a new LKE 2021, 12, 17 - by the way, it's the 17th of December when we are recording this... It just uses the current date when this new cluster has been created, or it's asked to be created.

So if we go to Linode, and if we go to our Kubernetes lists, we see a new cluster which is Kubernetes version 1.22. Nice. I'm wondering, could that be our new production cluster for 2022? If you could see me, I'm winking; yes, it will be. 1.22 Kubernetes will be the first version of our production 2022 Kubernetes cluster. This is it. Because it's ready, it's synced, we have the external name, which is the ID, the instance has booted... Great.

Okay... So did it work? Well, let's try make a Crossplane, LKE kubeconfig... All these, by the way, are in our repo, you can check them out. Actually, do you wanna tell us what happened behind the scenes, like how were we able to do this?

**Muvaffak Onuş:** Yeah. So Crossplane has this notion of connection details secret, where it stores all the sensitive information you need to use that resource, if any. For example, we see that mostly in Kubernetes clusters database instances, where you have a password, or some other details, and not in others, for example with PCs where you don't need any token or something to connect.

\[01:16:00.01\] So here, what we see is that Terrajet does this automatically, using Terraform's tfstate, and exports it in its secret. And then we have added a custom configuration that will get that secret - you see the attribute .kubeconfig; that is automatically put here, taken from state. But the problem is that Linode Terraform provider actually base64-encodes the kubeconfig. So you've got secret base64 encoding, and then another encoding on top of that. What we did was to provide a custom configuration for Terrajet, which takes one field from attributes and base64-decodes it and puts it here, which makes it ready to use right away, with kubectl, or other provider Helm, or provider Kubernetes controllers.

**Gerhard Lazu:** So while we can get the kubeconfig locally, and then we can use kubectl and use that kubeconfig to target that cluster, what we may want to do is let Crossplane provision other things inside this cluster, so that we wouldn't necessarily need to give this kubeconfig away. It stays within Crossplane, it's all there, Crossplane has it for it to be able to provision other things inside of this cluster. And maybe this is the path where I lose access to Kubernetes clusters. Is that it? \[laughs\] Like, it's more difficult for me to just run commands against them... The idea being that this could be like a fully self-automated system. It creates itself, it provisions itself with everything it needs, it pulls down all the bits, including the application, the latest version of the Changelog app, and it just runs. It updates DNS, because it's like a self-updating system... So this is one step closer to a self-updating, self-provisioning system. And that is a dream which I had many years ago, and I'm one step closer, and that makes me so happy.

Okay. So we have the kubeconfig locally, and I'm not there yet in that dream world, so I'm still putting in the kubeconfig, pulling it down locally, and now going with K9s, targeting the new cluster. And what we see is that it's just like any regular cluster, there it is. Just the default pods. Four minutes ago they were created. If we look at the node, it's the new node; it's version 1.22.2, so the latest Kubernetes version on Linode currently... And I'm wondering, what is going to happen if by accident - and I'm doing air quotes - if accidentally Jerod deletes the cluster? \[laughter\] I don't know, Jerod, I just gave an example; we do crazy things together all the time, so you're the first one when I'm thinking about someone deleting some Changelog infrastructure... \[laughs\] So let's just click this Delete button, pretend I'm Jerod, "Oh, I don't recognize this cluster. Let me just delete it. It's just extra resource."

So let's delete the cluster... And yes, I confirm I want to delete it... And the cluster is gone. Luckily, I deleted the correct cluster; I haven't deleted our production cluster. But if I had deleted our production cluster - I mean, good luck setting everything up. There's like a lot of stuff to do, a lot of steps. And yes, we have like a make target, which puts everything together, and it's okay... But it's not as good as it could be.

**Muvaffak Onuş:** Yeah. Jerod wouldn't do that.

**Gerhard Lazu:** No, Jerod wouldn't do that. \[laughter\] No, he wouldn't. I do that all the time... You know, like "Let's just take production down. Whatever. Let's see what happens. Just for the fun of it." So what will this do behind the scenes, with the new setup that we have? Muvaffak, can you tell us?

**Muvaffak Onuş:** Yes. So what's gonna happen is that the controller will reconcile and see that the cluster is not there, it's gone... Which is what happens when you first create a resource. The very first thing that a provider does is to check whether the resource is there, and create it if not. And for further controllers, it will be just like that, "Hey, I checked the resource and it's not there, so I need to create it." So it goes ahead and tries to create a new cluster.

**Gerhard Lazu:** \[01:20:21.25\] Right. And that takes 30 seconds, a minute...? How long does it take for it to figure out that "Hey, I'm missing a cluster"?

**Muvaffak Onuş:** Well, so because it doesn't get any events or anything in Kubernetes cluster, it will need to hit the long wait period, which is like one minute. So at most, in a minute it will recognize that change. Or you can make a change on the custom resource, which will trigger a Kubernetes event. So you go to that controller and it will start all the processes there.

**Gerhard Lazu:** I was trying to find this out to see where it's reconciling. It's finding it -- I think I just missed it, the event. Everything is synced now, everything's ready... The cluster is back; I mean, I just had to refresh the page.

**Muvaffak Onuş:** Nice.

**Gerhard Lazu:** What about the Linodes? Is it still there? It's offline. Interesting. I don't know why that's offline. So when I deleted the cluster, whatever happened behind the scenes... Maybe the default node pool got deleted as well. Oh, it's booting... So I think that the node was deleted as well. And this is like the worker VM. And a new one was created.

So deleting the cluster from the Linode UI, from the cloud.linode.com - it also deletes all the worker nodes. So when the cluster gets recreated, it has to obviously recreate all the nodes... And there it is. It's back.

Okay, so everything here is ready, it's synced... Because while the cluster has been created, the cluster object, the node pool that's associated with it hasn't been finished yet, and I think that's where composite resources come in. Can you tell us a bit about that?

**Muvaffak Onuş:** So in other cases where you have the node group represented as a different resource, you can actually have like two resources in a single composition.

**Gerhard Lazu:** Right.

**Muvaffak Onuş:** And additionally, just like you mentioned earlier, we can have more things installed there as well... Because the dependencies are resolved automatically, just like in Kubernetes. So for example, you would create your composite cluster resource, a cluster will be created and node groups will be booted, and then the installations will start, with provider kubeconfig or provider Helm.

So once your composite cluster CR reports ready, everything is ready, and just back in initial state. So it will just revert it back to the original state, including all the things in composition.

**Gerhard Lazu:** Okay, so now what happened is we are targeting the same control plane, and we could see how the pods were being recreated. So 90 seconds ago, 100 seconds ago, everything was created from scratch. We accidentally (air quotes again) deleted the cluster, Crossplane recreated the cluster, the node pools recreated, the node pool had a single node, and then everything was put back on; by default, what's there. What we would have been missing, if for example we had added any extra resources, like Ingress NGINX, or ExternalDNS, or all the other components that we need - those would no longer be present... Because let's be honest, we deleted the cluster, and that should delete everything in it. And this is, I think, where the human i.e. me, would have come in and run commands, "Ah, I have to get production back, because it was deleted." But how amazing would it be if Crossplane could do this? So it would know, "Oh, it's not just a cluster which I need, it's all this extra stuff that needs to be present in a cluster." Now, that is really exciting. Next year, right?

**Muvaffak Onuş:** Yup.

**Gerhard Lazu:** \[01:23:52.22\] I think we did enough this Christmas. \[laughs\] Cool. Alright. So what happens next? Well, I think here's a couple of improvements that we can do... I already mentioned about installing all -- I think this was your idea... Can you tell us about your idea, Muvaffak? This was really, really good, the two compositions.

**Muvaffak Onuş:** So maybe I can give a little summary about what a composition does.

**Gerhard Lazu:** Sure.

**Muvaffak Onuş:** A composition has two parts. One is XRD - similar to CRDs, but you define your own API. But with XRDs, you can define two different APIs. One is namespaced, and the other one is cluster-scoped, which does not have any namespaces. So what we usually see is that people create a composition with all the base system components in the same composition. We call it "batteries included."

If you go to platform references we have on the Upbound org, you will see some of the examples, where we for example install Prometheus, or a few other tools that your platform team might want every cluster to have, like security agents.

In this case, as listed there in the PR, you've got the cert manager, you've got Grafana Agent, and a few other components that you want installed. And then the other composition is usually the application itself. In that composition you would define what Changelog specifically needs, so for example you would create a single cluster with that base composition, and then refer to it from many namespaces in your seed cluster, and from many applications that can be installed to that cluster.

**Gerhard Lazu:** Right.

**Muvaffak Onuş:** So you would have the cluster that is managed in one namespace, maybe like Changelog system, with its own \[unintelligible 01:25:47.19\] So you would have that production cluster, but different teams or developers in their own namespace - they would refer to that central production cluster in their claims that are defined, again, by you, via XRD.

**Gerhard Lazu:** Yeah.

**Muvaffak Onuş:** So it's about like in publishing a new API - instead of going through all the fields of the specific clouds, you would publish API, with the only difference that you want it to be configured.

**Gerhard Lazu:** Okay. That is really cool. I can hardly wait to do that. That is seriously cool. Having all this stuff abstracted in a composition, to just capture what it means for the entire Changelog setup to come online, would be so amazing.

The other thing which would be also amazing is to move Crossplane from being hosted on our cluster, to be hosted on Upbound cloud. Because the dream is there is a seed cluster somewhere, which is managed by someone else, in this case Upbound cloud. The Crossplane is there, we can define all the important stuff, and that is the seed which controls all the other clusters, everything else; and not just clusters, other things as well.

Again, I don't wanna go too far with this idea, like blow your minds completely, but why doesn't it manage some Fly.io apps? Or why doesn't it manage maybe some DNS? Or why doesn't it manage other things from the seed cluster? Because right now, the external DNS is what we use in every cluster to manage its own DNS. And that's okay, we may need to do that, but what about a top-level thing, which then seeds everything else. So that's something which I'm excited about.

Well, I'm really looking forward to what we'll do together next year, Muvaffak, with all this stuff. There's so many improvements which we can drive... I'm really keen on that. It's the first step. But you as a listener, what I would say is have a look at the provider Jet Linode in the Crossplane Contrib org, see if it's helpful, and... Merry Christmas and a Happy New Year. Anything else to add?

**Muvaffak Onuş:** Yeah, it was great working with you for the last couple of days to get all these things done. Yeah, I'm honored to be here. Happy Christmas.

**Gerhard Lazu:** Thank you, Muvaffak. It's been my pleasure, thank you very much. See you next year!
