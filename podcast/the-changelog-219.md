**Adam Stacoviak:** Welcome back, everyone. This is The Changelog and I'm your host, Adam Stacoviak. This is episode 219, and today Jerod and I are talking to Eli Bixby about TensorFlow. Eli is a Developer Programs Engineer at Google, and this episode is produced in partnership with O'Reilly Media in conjunction with OSCON in London next month. We'll be there; make sure you say hi. Head to oscon.com/uk and use the code PCCL20 to get 20% off your registration.

We talked to Eli today about what TensorFlow is, why it's open source, and the role it plays in deep learning.

We have three sponsors today - Toptal, Linode and DataLayer, a conference organized by our friends at Compose.

**Break:** \[00:52\]

**Adam Stacoviak:** \[02:05\] We're back for a great show. This one, Jerod, is in partnership with O'Reilly; we're going to OSCON, it's going to be a blast. OSCON London. In fact, it's not we, it's you. You're going.

**Jerod Santo:** That's right. I'm pretty excited to go to London for OSCON, and just because I've never been to London. It'll be fun.

**Adam Stacoviak:** Our guest today is Eli Bixby. Eli, you're actually on the Google Cloud team, but you're a Developer Programs Engineer at Google. What do you primarily work on?

**Eli Bixby:** I primarily work on machine learning; right now that's the various machine learning products. We're focusing right now on the cloud machine learning platform launch, which uses TensorFlow. I'm doing a lot of TensorFlow.

**Adam Stacoviak:** You don't actually work on TensorFlow, but you work around TensorFlow.

**Eli Bixby:** Yeah. So there's the user/contributor distinction; I'm a big user, not a contributor. Except to Docs, occasionally.

**Adam Stacoviak:** Gotcha. For the listeners today, this show is all about TensorFlow, even though Eli's not a contributor to it, he does a lot of education around it. Eli, you're doing a talk at OSCON London, and you're doing a workshop with Amy Unruh, also in dev relations with you. Your talk is Deep Learning With TensorFlow as a beginner, and the workshop is a deeper dive into it. Can you break those down for us?

Actually, before we do that, I want to mention that we have a code. So if you're thinking about going to OSCON, we actually have a code. Go to oscon.com/uk, and use our code PCCL20, and you get 20% off the registration. Make sure you tell your friends too, because, as we said, Jerod's going to be at OSCON. We want to meet all the listeners we can. We'll have T-shirts, we'll have stickers, Jerod will have mics, we're sitting down talking to people... And maybe, Eli, we can talk to you, if…

**Eli Bixby:** Yeah! I'll be around.

**Adam Stacoviak:** \[03:57\] Yeah, let's get back to your tutorial session and your talk. Kind of break down what you're going to be covering there.

**Eli Bixby:** The tutorial session, we get a little bit more in-depth. We like to get people… Since it's a tutorial, we like to get people writing TensorFlow code; that's the goal. There's so much hype around it that we don't need to hype it, but there's a big leap from, "Oh yeah, I've read some news articles about TensorFlow" to "I wrote a basic linear regression." That's the goal for that.

If you use other Python, big data libraries, if you use NumPy, SciPy, like here's a little bit of the correspondence; write some very basic things, and then we launch into one of my favorite machine learning applications, which is Word2vec; that is embedding words into vector space, that's the description to that. It's kind of cool; words become these lists of numbers, and those lists of numbers are meaningful, and they encode the relationships between words.

The talk is going to be a little more of an overview, like "Here's what you can do with TensorFlow. Here's some neat tooling we provide to make it easier to use, and to make it work in production at scale" and all that stuff. That's going to be more of a demo; we don't really time to get people's hands wet, but I'll provide you with tons of resources to learn more during the talk.

**Jerod Santo:** Awesome. Adam, you mentioned our code, PCCL20; that's not the easiest code to remember.

**Adam Stacoviak:** No.

**Jerod Santo:** So if you're interested in that 20%, definitely check the show notes, we'll include in there. Not only will we be there and we have that 20% off coupon, we also have a free ticket to give away. So if you want to come to OSCON London, hang out with me, Eli, have some fun, learn more about TensorFlow and all the other things, we have a free ticket. We're going to give it away to a lucky subscriber to Changelog Weekly, which is our weekly newsletter that covers everything that hits our open source radar. If you're not subscribed to that, now you have the best reason ever to get subscribed, because we'll be giving away that ticket on Weekly I think September 17th. So check that out.

Well Eli, what we like to do before we get into the main topic of TensorFlow - we know that you're speaking about it at OSCON, but we don't know too much about you beyond what you're doing at Google today. We like to get to know our guests a little bit, and hear some background on where you're coming from and how you got to become the Developer Programs Engineer at Google. Can you give us a little bit of insight into your history with software?

**Eli Bixby:** Yeah. So I'm a recent grad, actually. I graduated three years ago with a degree in Math and Computer Science from Oberlin. I wanted to do something that was a little bit different from normal software engineering. I always loved teaching; I love the art of presenting information well. I was contacted about this position, and it seemed like a great fit.

From there, there was a need for people to cover this ML stuff within developer relations, especially. TensorFlow was released a year after I joined, and it was all coming online as I was joining, so my math background helped a little bit there. I've just been drinking from the fire hose ever since then.

**Jerod Santo:** You mentioned that you have a partner-in-crime there in dev relations, Amy Unruh, who's going to be with you in OSCON doing those workshops. In the pre-call you mentioned something funny about Amy - she was in research, in a university-style environment, thinking that she wasn't going to be relevant to industry, and all of a sudden this machine learning, and all these things that just were the area of research and development, all of a sudden are very relevant to many people. Can you expand on that for us?

**Eli Bixby:** \[08:01\] Yes. Amy has a PhD from Stanford in A.I. related things, and sort of joking that it's all suddenly relevant again. This idea of deep learning is based around… In the ‘80s they were called perceptrons, but it's based around this really old idea of, "Let's build a very high-level abstraction of a human brain, and maybe we can teach it things." Then it kind of fizzled out because it turned out that "No, we can't teach it things." But then it's like, "Actually it turns out we just need a few hundred thousand more of these perceptrons, or a couple million more of these perceptrons, and we can teach it things." That's obviously been enabled by hardware. They couldn't do that; it wasn't a failure of academia necessarily, it's just that they couldn't do it in the ‘80s, and now we can. All of this research is now suddenly relevant and there's this whole reawakening in this area of research.

**Adam Stacoviak:** That's kind of cool too, because I know a lot of people that have gone to school for things that's really hard to get a job in, and this could have been one of them. As you said, the desire to do this stuff didn't match the current technology, so it wasn't quite the right timing, but now is the right timing. So you have all these people potentially that have a lot of wealth of knowledge and research around this topic, and can get jobs and be relevant again in that area.

**Eli Bixby:** Yeah. This is a story that gives hope to academics everywhere.

**Jerod Santo:** I was going to say, it's kind of the opposite of what many people experience with their university degrees, where many things that you learn go from relevant to later irrelevant, right? Or obsolete. This is the opposite trend, which is surprising, I'm sure.

**Eli Bixby:** Yeah. It always moves into something else in academia, but it is a sudden shift into industrial relevance, which is uncommon.

**Adam Stacoviak:** Yeah. Obviously we want to talk about TensorFlow. The cool thing, Eli, is that while we're working with O'Reilly on producing this show and going to OSCON, this isn't the reason you're actually on. It's a two-for-one for us because we wanted to have a conversation on machine learning, but specifically on TensorFlow and deep learning. And when it came up like, "Hey, let's work with O'Reilly on some promotion around OSCON and producing some shows with some of their speakers," and all that good stuff, we went down a list, saw your name, saw TensorFlow, and we're like, "Let's get him on, because we want to do a show around TensorFlow anyway", so this is perfect timing.

For the listeners who don't know much about TensorFlow or haven't touched this whatsoever, can you give a breakdown of what TensorFlow is? Maybe even why it's named TensorFlow.

**Eli Bixby:** Yeah, I love giving the name-based breakdown, because it is pretty much the easiest way to do it. So the Tensor part - tensors are just an n-dimensional matrix generalization. A tensor has a shape which is described by a vector, so a tensor with shape 50 is just a list of length 50. A tensor with a shape 51 is a list of 50 lists, all with a length of one, and so on and so forth. So you can imagine this being useful to bundle up different kinds of data. For example, an image might be 10,000, 256x256, 3, right? Where you have 10,000 of these images in a little batch, they're 256x256 pixels, and each of them have three channels. So that's what a tensor is.

The flow part is a little bit more complex, but if you've ever played around with a graph computation framework, say like Spark, then you're familiar with this idea that you build a computation graph, and then you do deferred execution on that graph, where you calculate the upstream dependencies and use that to evaluate whatever node you want the value of. So it's just this computation graph where the edges are tensors. So tensors are flowing along this computation graph, and then you get tensor flow.

**Adam Stacoviak:** \[12:21\] And it's all modeled around the actual brain, right? The whole point of TensorFlow in particular is that it's meant to be around the brain's initial cognition.

**Eli Bixby:** The initial idea of deep learning is modeled around this very abstract idea of how neurons work that neuroscientists have now actually rejected, but we keep it around because it turns out to do good stuff. I would be remiss if I didn't say TensorFlow is more general than that, actually. It's not just for deep learning; arguably any computation that's efficient to describe as a graph of tensors is a good fit for the TensorFlow use case.

This includes… There's people internal to Google building phasing inference systems on top of TensorFlow, and people have talked about simulation systems that are on top of TensorFlow. Granted, a lot of the higher-level, easy-to-use wrappers that we provide with TensorFlow are focused on deep learning, because that's the first application. But it is built to be an extensible, more general system that you can build on top of.

**Jerod Santo:** So deep learning is a kind of machine learning. It is a specific tactic or strategy - is that fair to say?

**Eli Bixby:** Yeah, so I think deep learning generally… It's kind of ambiguous, but it's often synonymous with NeuroNets. This idea that you have a node that represents a neuron, and you have some inputs to this node, and those inputs go through an activation function and result in a single output. And you have layers, and layers, and layers of these nodes. And if you think about the layer of these nodes, one layer feeding into the next, it becomes clear why tensors are important, right? At that point, that activation function is really… Rather than calculating it for a single node, you calculate it for an entire layer at once, and you're doing some fancy linear algebra stuff, which is why it pays to have this general system.

The Python wrappers are on top of a C++ API that does all the fast tensor computation stuff, it does the graph execution (the graph execution engine) and there are people out there that are building wrappers in other languages. So it's really meant to be a base upon which the entire community can build.

**Jerod Santo:** It seems like from Google's perspective the movement of saying, "Let's take this mathematical science or this research science and let's apply it to useful things", first it was Search, and now expanding upon that in many different ways, it's kind of like -not even a secret sauce, but it's Google's move. And it's a great move, by the way. But because of this, like... Alright, I'm an application developer and many people out there are building either web apps or mobile apps. This stuff was very far from us in terms of something that we could possibly use, or do, or apply and make our products any better. And all of these open source efforts, TensorFlow amongst others, I call it "bringing the cookies down to the bottom shelf where the kids can reach it." Now we have an opportunity at it, which is why the Changelog is interested in this kind of stuff. But doesn't it seem like you're taking this superpower that was inside Google, you've open sourced back in November 2015, and now everybody can use it, and everybody can get the cookies.

**Adam Stacoviak:** \[16:16\] Yeah, I like that.

**Jerod Santo:** Aren't those cookies valuable? What do you think is the... In your opinion — and if Google has an official stance, that's fine as well — but why open source something that's this research-heavy and invested in?

**Eli Bixby:** Yeah, so Google actually has an internal meeting every week; TGIF, you've probably heard about it. It's company-wide. Sergey and Larry stand up there and crack jokes. But this is almost verbatim a question that an audience member asked. There's people inside Google that are thinking these thoughts, too. There's a great doc that sort of circulated around the time of the release by Jeff Dean, one of the progenitors of TensorFlow, sort of like, "Why Open Source TensorFlow?"

A lot of it is because we've published a lot of white papers in the past. The MapReduce white paper, which resulted in Hadoop; the BigTable and Colossus White Papers, which resulted in HDFS and many other distributed file systems, so on and so forth. When that happens - there are smart people outside of Google, like a lot of them, and they're going to take these white papers and turn them into APIs that will become the industry standard, because they are founded on such quality ideas. Quoting Jeff Dean, you end up with this ridiculous sentence, like "Google Cloud Bigtable Now Supporting the Industry Standard HBase API", which is ridiculous! We built Bigtable, we published this Bigtable white paper, HBase was made significantly down the road, HBase became the industry standard. Now we're trying to expose Bigtable as this cloud service, and all of a sudden we have to adapt to this slightly and annoyingly different API.

**Jerod Santo:** Interesting.

**Eli Bixby:** So it really is part of the much larger decision Google has made to bring the fire to whoever that Greek person you're supposed to bring the fire to is. \[laughter\]

**Adam Stacoviak:** Or the cookies.

**Eli Bixby:** Or the cookies, yeah. The cookies was the metaphor we were using.

**Adam Stacoviak:** I keep hearing this too, from other people who have either worked inside Google for a bit, either as an intern or a full-on employee, that there's tools that you have inside of Google that when you stepped outside of the Google-sphere, you miss them. One of those - we actually teed this up a bit in the last show with Beyang Liu on Sourcegraph - there was this thing called Google Code Search. I'm sure you probably know about that, Eli, where you can actually search inside of Google for various code that is used — this is all kind of hearsay basically from Beyang. And that's kind of where Sourcegraph came from. There was this tool, this superpower that Google had, and stepping outside of that sphere, he no longer had it, and they wanted something similar, so they built Sourcegraph.

**Eli Bixby:** Yup. If you look at Docker... Google's usage of Bork! preceded Docker by — oh, I don't know, a decade? The same story is repeated many places in the industry. It's been a big decision to say, "Yeah, this whole thing where open source replicates things that we're doing internally - we think there's a better way." We think part of that way is being part of open source community, and just being the best place to run these open source frameworks on our infrastructure. And that's really what cloud is about: being the cheapest place, being the fastest place, being the most convenient place.

And there's all sorts of ancillary benefits. It's really hard to hire machine learning experts. If you get an extra three months of time from each machine learning expert you hire because you don't have to teach them TensorFlow, because they already know it because it's the industry standard, that's pretty great.

**Jerod Santo:** \[20:15\] So let me just play devil's advocate and go the other way. We're all about open source here, so you know I don't necessarily follow this reasoning.

That's a great insight — we publish these white papers, people take the white papers, turn them into open source projects that we then end up having to align ourselves to, when why not just open source it from the start, and be the player in the game? Why publish the white papers? Why don't you keep them all to yourselves, and then you don't have to worry about any of that stuff?

**Eli Bixby:** Yeah, that would be fine if people never left Google, right? It would also be bad for… Like, Google wins when computing as a whole advances, right?

The nice thing about the technology industry is we're all pushing against this abstract "how-do-we-do-this." We're not fighting for pieces of a pie, we're fighting against the arbitrary foe of not being able to do stuff.

**Jerod Santo:** \[laughs\] Right, right. Well said. Well, we're about to come up against our first break. After the break, we're going to get into how you would use TensorFlow, why you would use TensorFlow - all these questions that I'm sure I'm not the only one that they're floating around in my head, and Eli is going to help us out with all these things right after this.

**Break:** \[21:32\]

**Jerod Santo:** All right, we are back with Eli Bixby, demystifying TensorFlow, trying to figure out not just why it's cool, but what can I use it for, who is it for? These kinds of questions. So Eli, we'll start with that one. Who is TensorFlow built for? It's obviously not just for Google, otherwise they'd keep it to themselves. Who should be using this?

**Eli Bixby:** Yeah, so the initial audience was largely research scientists or people at the cutting edge of machine learning, but we really want to move it back and add layers on top so that its usable for data scientists, useable for devs that are learning some data science, that are learning some machine learning, and just very accessible for them. That's sort of where the layering comes in, and there's a lot of that.

**Adam Stacoviak:** So research scientists - do those types of people typically have any programming knowledge? Would we consider them non-engineers, are they newbie engineers? Where do they sit at in the gamut of being able to program?

**Eli Bixby:** They're all fluent programmers, but maybe not fluent software engineers; that's how I would describe them. I think that's part of why it's awesome to have this environment like Google where you have domain experts sitting next to really experienced software engineers who can kind of say, "Oh, maybe you want to frame your abstractions more like this, because it'll be more extensible, or save you maintenance costs" and that sort of stuff. There's really value in bringing the two groups together.

**Adam Stacoviak:** \[23:49\] I've also heard when it comes to TensorFlow, or I guess more machine learning, more of this deep learning in general, it's like giving a machine eyes. Almost like that it can see something if you give it a picture, it can decipher what that is. That's where you get some of those things where if you hold your phone up, and you're looking at a different language, it will repaint it in the proper language. Can you expand on this idea of giving the machine eyes?

**Eli Bixby:** One of the first things that deep learning excelled at above traditional machine learning techniques was computer vision. So just to sort of step back, the distinction between machine learning and deep learning is deep learning is a generally a subset of algorithms that require a lot more data, a lot more compute time, and a lot more time, but you maybe need to know a little bit less about the structure of the data. You need a little bit less domain expertise to structure your algorithm.

I don't want to make it sound simple because that would be disingenuous, but you don't need to craft your algorithm… Basically you have more tolerance in what's going on in your data, and you can learn many layers of structure. I don't know if you guys have ever seen the deep-dream images?

**Jerod Santo:** No.

**Eli Bixby:** So they're like these crazy images that look like they were drawn by someone who just sees eyes everywhere. So they take an image, and they "crazy" it up, and put eyes everywhere, and that's because someone ran the model backwards. And the model has some layer of abstraction that is specifically looking for eyes; above all the layers that are figuring out what shapes are, what colors are, what lines and all of those angles are, there's some layer that's like, "Here's where I look for eyes." And that's the sort of thing that deep learning excels at - picking out higher level features from large data sets.

**Jerod Santo:** I think one such example in use at Google is the Google Photos, recognition of not just color and location and metadata, but actually objects in space. Identification, like this is a mountain, this is a dog, so on and so forth. Is that particular feature using TensorFlow?

**Eli Bixby:** We've open sourced the inception model… I forget which version we open sourced, but the model running in production could do -- image classification is the task's name; it's called inception, and we open sourced a version of it, which is just TensorFlow code. You can actually train it yourself on your own dataset, or a really common task is to retrain part of the model on your dataset and use it to fine-tune. Image classification by itself might not be great at, say, learning what a flower is, right? But all of those lower layers of abstraction... You know, "Here's where shapes are; here's distinguishing foreground from background; here's colors and lines." Those are all useful for a variety of tasks, one of which is figuring out what flower a flower is.

If you retrain a piece this model on your dataset, you can get much shorter training times, use much less data, but still specialize the algorithm. Then you could pick out flowers, maybe an orchid from an iris.

The other thing I wanted to briefly mention — because there's a lot of people who want to integrate machine learning into their applications, but don't actually have a dataset. If you don't have a dataset, TensorFlow is not for you. If you don't have a dataset though, we do provide cloud APIs that provide access to the internal machine learning that Google uses. For example, we have a Vision API where you can send us a JPEG, or send us some image - I don't remember all the formats - and we'll send you back bounding boxes and labels for entities, or we'll send you back the emotions that faces in the images that are displayed. And it's just a REST API — it's super easy to use.

**Adam Stacoviak:** \[28:14\] It's almost like a comparative thing. You send it to Google, and you've already got this index of data that says… Basically all the learning has been done, and you provide that through an API.

**Eli Bixby:** Yeah, so there are two distinct phases of machine learning. There's training and then there's inference. One of the things that TensorFlow is made to do is make it really easy to bundle up a trained model, and then use if for inference elsewhere. You can basically export these models down to files that are maybe 100 MB, and you can put them on phones, you can put them on whatever device and do inference on that device, which is pretty cool. Behind the scenes, for the Vision API we have a trained model that we're using to do inference on the images that you send us. And we periodically update that trained model so that you're getting something near the best of what we have whenever you call the Vision API. We have a similar API for Natural Language, and Translate, of course, and Speech. You can actually send us audio files, and we'll do speech-to-text for you.

**Jerod Santo:** So let's do this; let's give this a shot, and we'll see if it works. I'm going to give you a basic use case, based on your idea about flowers, and maybe you can help us out. Give us a high-level soup to nuts on how we would accomplish this using TensorFlow or whatever tools we have available.

So I run a website that's all about orchids. I love orchids, but I hate other flowers — this is all hypothetical, I don't care about orchids. But let's say I'm an orchid enthusiast, and it's a user-generated content website, and I want my users to be uploading me pictures of orchids. Because I like orchids, I already have a compendium of images to use for training. How many would I need to have? Let's say I have 10,000 orchid pictures.

**Eli Bixby:** Let's say you have 100,000 to 1 million orchid pictures.

**Jerod Santo:** Okay, let's say I have three million orchid pictures on my hard drive, and what I want to do, I want to allow a person to upload a picture to a website - my website that I run - and my website will determine this is or is not an orchid. I believe that is as simple as it can get. Yes or no, this is an orchid. And I can use that to either reject their picture, or to accept into my… And now I have 3,000,001.

So can you take us through high-level, "Where would I start, how would I get this feature done?" so that I can start having people upload orchid pictures today?

**Eli Bixby:** Okay, so the first thing you have to figure out what kind of model you're looking for, what kind of model you want to build. Pretty much all models, almost all models, are broken down into two categories.

We're in the domain of supervised learning, which means "I have data, and I want to teach you things from my data." Within that domain we have Regression, which is "I want my model to spit out a number." 45.2.

Or Classification, which is "I want my model to spit out a category", Orchid/ Not orchid. So here we know we're in a classification problem. So then what we really need to do is we need to figure out, "Okay, what models have historically been successful for image classification?" And you can see, "Oh, Google has open sourced this inception model, but it takes two weeks to train from scratch, and probably my three-million-image dataset is not going to be enough to train inception from scratch." It's this huge, sprawling model... But you say, "Okay, many image classification tasks share a lot in common." Like I was mentioning before, we have to identify these higher-level features.

\[32:03\] "So maybe I'll just retraining the top few layers of the Inception model." This is a task called transfer learning, and then you teleport to four weeks in the future, when my transfer learning sample has been published, and you look at that sample, and you look at how you do transfer learning… I'm sure if you google ‘transfer learning TensorFlow' you'll find a sample that is not mine.

That's the breakdown high-level model. Then what you're gonna end up doing is you're gonna run this code, and you're probably gonna need to run it in a distributed environment. Inception is a big model, you have a lot of data, so you're going to need to figure out how to do that.

We provide basically wrappers around code that starts a gRPC server. I don't know if you guys know gRPC; it's this efficient RPC framework from Google. It uses the protobuf serialization format, and it's basically built to be fast for large amounts of data, it supports streaming and all that good stuff.

**Adam Stacoviak:** gRPC is referenced a lot on Go Time. We have another show called Go Time, so it's all about Go lang, but gRPC is referenced a lot on that show.

**Eli Bixby:** Cool, yeah. gRPC is what runs behind the scenes to enable distributed tensor flow. But the abstractions you need to distribute your model are really simple; literally it's like a Python context. You're like, "With my GPU", and then everything in that Python context runs on your GPU, and it's magic. So you're going to need to look up how to distribute it; fortunately there's a tutorial on how to distribute TensorFlow Inception training on Kubernetes that's published out there. Kubernetes is great, because you can start up your Dockers containers, and Kubernetes will do all the DNS stuff for you, so you don't have to worry about too much about connecting all your TensorFlow servers.

Or, scratch all of the last few paragraphs, you could use cloud machine learning to train your distributed model, which is Google offering training, basically as a service. Hosted TensorFlow is a service. But you're going to run into another problem after you've trained, which is "How do I efficiently do inference?" Inception is this deep model that does lots and lots of linear algebra operations in order to do inference; even without having to calculate the updates for all of your little parameters, it's still going to do a lot of operations. So how do you do that quickly? TensorFlow Serving is another project; it's a C++ library that starts a gRPC server that basically takes a serialized TensorFlow model, starts up a server and gives you a gRPC API that you can call with your examples.

Or, again, instead of figuring out TensorFlow serving, you could just upload your serialized example to cloud machine learning inference, and do inference from there. So now you have a nice gRPC API that your website can call with your user's data. You'll probably have to do a little bit of data munging to turn it into the right format for inference, but that's sort of the high-level overview.

**Jerod Santo:** Okay, so training is something that can take multiple weeks, and you would love to have somebody else's dataset already trained. You can't solve a problem today, but maybe you can solve one the next quarter. Once you get your model trained, you still have this inference problem which is more… The way I'm hearing it, it's kind of like the real time aspect of applying the model — and please help my verbiage if I'm getting it wrong — against this particular piece of data that I'm holding onto right now, and running it through that. So those are two separate problems, both solved by TensorFlow in different ways; one is the serving project, one is by TensorFlow proper? Am I tracking you?

**Eli Bixby:** \[36:08\] Yup.

**Jerod Santo:** Okay.

**Eli Bixby:** So a model consists of only two parts: the architecture, which is how each individual node feeds into other nodes, and how those nodes' activation functions work, and how you're updating the variables, which is the other piece of the model. So you have all these variables that store the knowledge of the model. So this is what we mean when we open source… We open sourced SyntaxNet, for example. This is an architecture for doing natural language processing in TensorFlow. But it's separate from the trained model that we opened sourced, which was Parsey McParseface \[laughter\]. Which is —

**Jerod Santo:** I laugh whenever I hear it.

**Eli Bixby:** Yeah - we like to be whimsical - which is the trained model with those variables at their correct values, right? So you can think of all these sliders moving around, and some position of these enormous number of sliders corresponds to a model that does the thing you want it to do. The process of training is finding the right position for all of these sliders.

**Jerod Santo:** Gotcha. But even then you have your inference, which happens even after you have the trained model.

**Eli Bixby:** Yeah, so you fix all your sliders, and then you're just running yours values through your architecture to get the result.

**Adam Stacoviak:** Once you got this trained, you got your model and you're doing inferencing, how do you maintain it for accuracy? What's the process there?

**Eli Bixby:** There's all of these DevOps-y questions around machine learning. If you're looking to get involved in the machine learning community, I think this is a great place to do it. I think there's tons of tooling that developers are used to having, that machine learning experts are not used to having, but they don't know that they want. Or they do know that they want. Stuff like CI. We're trying to solve a lot of that stuff in the cloud, but I think there's a lot of room for additional tooling.

How we handle it in cloud ML for example, is you retrain the model on your new dataset. Say you went from 3 million to 6 million images, and you want to retrain your model because you think you'll get a better accuracy, or you changed your model architecture, and you want to retrain it on the same dataset. You retrain you model, you export another binary, you upload it to the inference API as a new version, and suddenly your frontend, or whatever, just has a new version to hit, that maybe has a different accuracy. Hopefully that was answering your question.

**Adam Stacoviak:** Yeah, I mean I'm just wondering, from a developer standpoint, what does it take to actually manage the accuracy of it. Not just from a programmatic standpoint… The cloud that you mentioned for Google that you've got there, and all that stuff… How do you know it's being accurate, how do you know you have the right results there? I guess do you take that feedback from the user once they upload the orchid picture and it's like, "Yes or no, this is an orchid. Clearly, I know this is an orchid. I took the picture, I grew the orchid... It's an orchid."

**Eli Bixby:** This is a whole area of research. The easy example is, whenever users correct you, you just file that away in your pocket, and just add it to your dataset.

**Adam Stacoviak:** Does that go back into the training portion of it, then?

**Eli Bixby:** Yeah. Then you retrain your model. But there's a whole other field called online learning. This is online, not in the sense of the Internet, but in the sense of a continuous process, like an online sorting algorithm. This is basically like, how do we… It's really hard. I don't think there's a lot of people doing it in production, but it's like how do we give immediate feedback to our models and improve the accuracy? You see how massive the field is; you, as a layperson, stumbled upon a very hard problem that we're not really solving in very many production systems yet.

**Jerod Santo:** \[40:02\] Right. So even at Google Scale or Apple Scale, the people that are putting this into practical products, when it comes to retraining new datasets, when Google's Photos catalogue goes from three petabytes to six petabytes, they just retrain the entire thing? Or do you guys have some other stuff going where you're doing all of this incremental training?

**Eli Bixby:** We do retrain a model, but this is where things like transfer learning come in, where you only retrain a part of the model. So this is very common when you want to change the architecture, but you don't want to retrain the whole thing from scratch. That's the field of transfer learning. That's the field of, "I want to somehow use the output" — and this actually gets into a really interesting thing that I want to talk about, which is this marketplace of models, which is how we envision the future. But you use the output of one model as the input to another model. Or you use the output of one model to train another model. There's lots of ways to do transfer learning, but it's basically one of the goals.

One of the goals that I already talked about was you have an abbreviated dataset, an abbreviated amount of time, and you want to specialize an existing trained model. But one of the other goals is, "I changed my network architecture, and I want to use the learned parameters of my old network architecture on my new network architecture." Or, "I have a new dataset, and I want to reuse to some extent the existing trained model. "

These are all hard problems, but it's very common to actually use the output of one model as the input to another model. So this is, for example… I was talking about Word2vec where we embed these words in this vector, and the vector is meaningful. So if you take the vector for king, subtract the vector for man, add the vector for woman, you get the vector for queen. They have these crazy, tied relationships. So if you build a model that makes Word2vec embeddings, you can use those Word2vec embeddings as the input to another model that maybe figures out whether your comments are trolls or not. Because the first model has some knowledge of the structure of the English language.

This gets to how we see things a little bit farther into the future, where we have this marketplace of models where you need to pick up a grab-bag of models to accomplish your task, but you don't necessarily have to do much retraining at all to get your goal. Or you don't have to be an ML expert to get to your goal. You can just pick up this grab-bag of models that does what you want. Then ML experts can get paid for their expertise in developing these models through this marketplace.

**Jerod Santo:** I think that's very fascinating, and I think a marketplace like that would flourish, because as the proprietor of the orchid website, I don't care at all about any of that stuff, I just want to know if this is an orchid or not. So if you can just give me an API that is going to give me a classification, for instance... Or, I'm sure they have to be more complex than that, but point being is at the end of the day most people are trying to have specific questions answered. I'm sure I would be willing to pay money to get that answered, as opposed to setting up a Kubernetes cluster, and so on and so forth.

**Adam Stacoviak:** Yeah, maintaining the learning, and all that stuff.

**Eli Bixby:** Yeah, and that's the natural language, and the speech, and the vision, and the translate APIs are sort of the first shot at that... You could probably use it for your orchid website. You just throw away every label that isn't orchid, and the ones that are orchid are the ones you say are an orchid. It'll give you back all the labels; I don't think there's a way to say, "I only care about x label", but certainly that's something you can imagine in the future.

**Jerod Santo:** \[44:03\] Right. In the meantime, I'll probably just code it up against Mechanical Turk, and let them decide if it's an orchid or not.

**Eli Bixby:** Yeah.

**Jerod Santo:** \[laughter\] That's just a bad joke.

**Adam Stacoviak:** I was going to say, you know, basically rely back on humans again. But...

**Jerod Santo:** Yeah, exactly!

**Adam Stacoviak:** ..whatever.

**Eli Bixby:** There are people who use Mechanical Turk to produce training datasets when they don't have data...

**Jerod Santo:** Oh, that's really smart.

**Eli Bixby:** …which is kind of funny.

**Adam Stacoviak:** You always need a human somewhere in the mix, that's for sure.

We're coming up on our next break, and we do want to dive deeper into TensorFlow model, so let's break here. When we come back, we'll dive a little further into that with Eli.

**Break:** \[44:39\]

**Adam Stacoviak:** Alright, we're back with Eli Bixby. We're talking about TensorFlow. Eli, we've got models, we've got layers, we've got all sorts of things that make up TensorFlow. Help us break down the components here.

**Eli Bixby:** I think there's a lot of different layers of abstraction to work at, one of which is actually called Layers, so that's going to be confusing. But there's a lot of different levels of abstraction, depending on who you are. A lot of work… Like I said, we sort of initially launched with this research scientists primary audience, but a lot of work since then has gone into building these easier to use levels of abstraction on top of TensorFlow, like the core graph execution system.

One of the big ones that we launched recently is TFLearn, which you can find at tf.contrib.learn, and what that does is it provides — if you use SciPy, or any of those ML packages that sort of wrap up a whole model in one line, it does one of those. So you can be like, "Okay, I got my deep NeuroNet classifier, and I'm going to fit it on this dataset that I have in Python, and then I'm going to train it… Or I'm gonna evaluate." So you get these nice, five-line model definitions. One rung down from that is Layers, which basically turns five lines into one. Instead of defining some parameters and a function that takes the parameters, you just define, "Here's a convolution layer," which is a thing that I won't get into.

Then WideNDeep — there's a blog post about it. It's like, "Okay, here's my dataset; it's sparse data." The difference between sparse and dense data is pretty simple - sparse data is like words, where you've got a bunch of words and you don't necessarily know how they relate to each other, so you can't number the words, like "word-0," "word-1," "word-2," "word-3", because why is "cat" more related to "bucket" than it is to "dog?" It just happened to be in the ordering that we gave it; there's no proper ordering of words. That's sparse data. Whereas dense data is like, "Here's a bunch of numbers." If you had weights and heights and stuff, that would be dense data.

\[48:15\] So if you know your dataset, you know things whether it's sparse or dense about it. You can just say, "Here's my dataset, here's the columns; evaluate the relationship between these two columns." These are really great tools for data scientists who maybe aren't ML experts, but have done a little bit of ML, and want to move more in ML. There are great places to hang out at, great places to experiment with.

Below all that is the fundamental, like, "Here's an optimizer that runs on the model architecture that I spent 50 lines describing."

**Jerod Santo:** A lot of moving parts. It seems like it's such a big project and effort that just depending, like you said, where you're coming from, or who you are, I think you said... What you're trying to do with it, that kind of informs where you're going to start, and where you should focus. But what about a curious developer who doesn't want to fall behind, and everybody's mentioning ML, and TensorFlow is always out there on Hacker News, and she's just wondering, "I should learn more about this. I've listened to the Changelog on it. I'm excited, but I'm still a little bit mystified." So it makes sense, Eli, that you're giving these talks and workshops at OSCON and other conferences, because there's a lot to learn here. But just give us a "getting started." If you had a friend at a bar that says, "Hey, I'd like to give TensorFlow a shot." What would you tell that person?

**Eli Bixby:** Well, if they've never seen machine learning before, the gold standard is the Stanford Coursera course on Machine Learning. It' a great introductory course, I can't recommend it enough; it covers lots of topics. If you want an extra challenge, you can try duplicating your assignments in TensorFlow, and that's totally possible. Also, if you're familiar with machine learning and you just want to get into TensorFlow, there's a Udacity course, I believe, on Deep Learning using TensorFlow, for people who have machine learning experience, but not necessarily deep learning experience.

So again, the Getting Started guide always depends on who you are. We don't really have an avenue for people who have never written a line of code in their life before; that's pretty common of a lot of projects. It's hard to say... Like, where do you draw the line of people you're bringing into the fold of machine learning? I think there's never been a better time to learn machine learning, and certainly you can start with some of those resources. There are a lot of great ML classes that are online that started the whole MOOC thing, and I would definitely recommend taking one of those, just so you can get familiar with the terms, honestly. There's a lot of terminology that I've been throwing around, like "classification" and "regression", and so much of it will start to click as you're reading blogposts, as you're reading documentation. It's this feedback effect. The more terms you get, the more the things you're reading everyday anyways starts to make sense, and the more you learn from them.

**Jerod Santo:** We will definitely link up resources. You mentioned the Stanford course, there's a Coursera course... Give us those links, Eli, and we will include those in the show notes so those interested can find them easily. Definitely myself, I might need to check out that Stanford course. That sounds like a great way to at least demystify, like you said, the terms and jargon around it. Because there's definitely a lot of surface area here. I think even before the show, you mentioned… I think I might have said "the TensorFlow team at Google", and you said, "Well, it's not like there's just 12 people sitting in a room, and they do TensorFlow." This is the kind of thing that sprawls across campuses, and groups, and there's people that work on it from all different angles of the company. Is that correct?

**Eli Bixby:** \[52:18\] Yeah, and the number of people who contribute is one number, but then the number of people who are using it at Google, and outside of Google, it's like… My feeds blew up after it was released because everyone was trying it, but that level of excitement has stayed shockingly high. There's so many people publishing projects with it, which is fun, because once you learn and understand what's going on in the models, or once you learn how to read papers describing new models, there's so much content out there to learn. It's just getting over that initial hump, getting over the terminology…

I don't think it's restricted to this elite class of programmer, or elite class of academic person… I really think it is a thing that all devs can learn.

**Jerod Santo:** I believe that's the case. I think it's going to get easier and easier as well. It seems like there's still some infrastructure around the DevOps-y concerns. The more we can remove tangential education, in order to learn what you need to learn to use it, I think that will make that more and more true.

You mentioned excitement, and people releasing other projects... One project that got me excited — and maybe you can share some insights on this, maybe you can't, but it's out of the TensorFlow org (at least on GitHub) is the Magenta project.

**Eli Bixby:** Oh, yeah!

**Jerod Santo:** Which is music and art generation with machine intelligence. Can you share what that is with people?

**Eli Bixby:** Yeah, so generative models is the class, and it's so cool. It's one of my favorite things in machine learning. You basically take data in and you want to generate examples of this data that fits in the class. So Magenta — I don't know a lot about the specifics of Magenta, but it is an example of these generative models where you take in music, and you generate music from the properties of all of the music that you've taken in, really. It's pretty fascinating.

Another example, there's a big paper in this area on Generative Adversarial Networks, which is a fun little thing that I've been interested in looking into. But you can go see the same thing for images, actually. And they generate these spooky, uncanny valley images of faces, or bedrooms, where you… At first glance, it passes off as a bedroom, and then you realize the window curtains are like sheets, and not actually curtains, and the bed has a window in it, or something... It's just weird things out of place, but they do a remarkably good job of generating this. There's a whole team working on Magenta, and sort of these generated…

**Adam Stacoviak:** What's the point of it?

**Eli Bixby:** You know, I think it's...

**Adam Stacoviak:** For fun, or is it..?

**Eli Bixby:** Yeah, I think it's for fun.

**Adam Stacoviak:** Push the boundaries?

**Eli Bixby:** Yeah, you get a lot of people… You get a big injection of academic mindset into these communities, and the academic mindsets is very much like, "We want to do this thing because it's tricky. We have no ulterior motive for doing it other than the fact that it's tricky, and we believe that we'll learn things from accomplishing this hard task."

There was actually a gallery showing in San Francisco of generated artworks.

**Jerod Santo:** \[56:00\] That's pretty sweet. The readme, it says this is a project that asks, "Can we use machine learning to create compelling art and music?" It's like, if we can, we'll do it. That's really the point of it. "If so, how? If not, why not?" It's very much like Eli said, because it's tricky… Also because it gets people involved that otherwise wouldn't, right? Now you have this cross-melding of musicians working with research scientists, and so on. Interesting stuff.

**Adam Stacoviak:** I've stumbled on the blog post on the Magenta blog, it's Magenta MIDI Interface. I'm thinking, okay, now you probably, as a musician, create from your own keyboard, MIDI-wise, and then maybe pass that through something… I don't know, to create some random art? Random music? It seems pretty interesting, though. There's an API for that. Definitely inviting a lot of unique people into the mix of programming, which is what I like about this, too.

The big picture here is why open source is in the first place, right? We kind of answered that to a degree; Google has released white papers before, and had to deal with other people making things, I guess, and having to use that stuff that you actually white papered. Now in this case, with TensorFlow you're actually stepping up and open sourcing yourself; it may not be the only reason why to open source it, but now there's this invitation to a lot more than just academics, just developers, just engineers. Now it's musicians, now it's artists. Now it's a lot of different ways… Orchid lovers, obviously. \[laughter\]

**Eli Bixby:** Well, yeah, this is what we love about open source, right? The community is open and available, and we tried to bring as many people in, because we all benefit in bringing in as many people in as possible.

**Adam Stacoviak:** How often are you asked to hypothesize about the future? I'm curious, because you've got… I know you're a recent graduate, so you may not have as much experience as you might like, but you're on the forefront for Google in terms of educating the developers, the masses, doing workshops and talks at OSCON, for example. So you're on the forefront of this, so I'm curious if you can help us maybe predict the future. I'm not sure how far in the future we should go, but where do you see things heading, when it comes to machine learning, deep learning, TensorFlow, and others?

**Eli Bixby:** Yeah. So I guess this is recorded, so someone can point to this five years in the future and be like, "This guy is wrong. He's totally wrong."

**Adam Stacoviak:** Or totally right.

**Jerod Santo:** Or "This guy is brilliant."

**Eli Bixby:** Yeah, yeah.

**Jerod Santo:** This is your big moment right here, don't blow it.

**Eli Bixby:** Right, yeah. I think that sort of marketplace that I was talking about is where I would love to see things go. I'd love to see a much lower latency and higher bandwidth pipeline between academia and industry in this area. I think we're moving in that direction, and I think TensorFlow's a great step forward.

I can't even begin to predict what the next big shockwave in the machine learning community is. There are people so much better qualified than myself to do that, that any attempt for me to do it would be insanity, but I do think that you're going to see this — I'm making air quotes but you can't see them— "the ecosystem", you're going to see it become really big, and become really diverse. I think, sort of what we saw in the data science community where we had this enormous proliferation of tools, if we can keep from duplication, I think we'll move so much faster than we have previously.

It's hard to… I don't know about concrete predictions, like "We will have robot overlords by the year XYZ" \[laughter\], but I think it's pretty clear now to everyone that the industry standard for X is going to be open source, and I think we're hoping that it's TensorFlow, and I think we're hoping that people are happy that it's TensorFlow, because it's a good tool. I do see that happening.

**Jerod Santo:** \[01:00:07.03\] Well, speaking of people who have enough experience to forecast the future, our other show in partnership with O'Reilly is from none other than Cory Doctorow who's keynoting the conference. Adam, we might have to ask him a similar question. We can compare and contrast Eli's answer and Cory's answer. Five years from now we can decide who got it right.

**Eli Bixby:** I'm sure he'll have a snappier, less rambling answer, because he probably gets asked that question all the time.

**Jerod Santo:** He probably does.

**Adam Stacoviak:** Yeah. His keynote is actually on "How You Got Here:" That's the exact title of it, so I'm curious, and I'm really jealous, Jerod, because you're going to this conference and I'm not, and it's also the first time that the Changelog is officially going international. Our show has been international forever basically, but we've never actually stepped foot off US soil to represent the Changelog anywhere. So you get to be the cool one and do it first, and you'll get to see this keynote firsthand, and actually get to talk Cory face-to-face, too. But we'll have him on the show. When's he scheduled, do we know? Did we earmark that? We don't have the notes, but...

**Jerod Santo:** It's a couple weeks out.

**Adam Stacoviak:** A couple weeks out we're talking to Cory Doctorow about probably the larger picture of open source. He's got some really deep insights, background's from the EFF and a bunch of stuff as an editor of Boing Boing. Just really a well-rounded person, so that might be kind of interesting.

As we did mention, Eli ,you've got the workshop - Diving Into Machine Learning Through TensorFlow, and you also give a talk, Deep Learning with TensorFlow, at this upcoming OSCON in the United Kingdom, over there in London. Once again, if you didn't hear that, the code to use is PCCL20; you get 20% off on registration. Tell your friends, we want to meet you there. When I say we, I mean Jerod; bummer for me, of course. Oscon.com/uk is an easy way to get to the website for the upcoming OSCON.

Eli, before we close out, any closing thoughts from you on machine learning, deep learning, OSCON, your talks, your workshop… What else do you want to share?

**Eli Bixby:** I'll make sure to get you guys all those resources, those classes. If you're looking for another podcast to learn about this stuff, check out the GCP Podcast, gcppodcast.com. But like I said before, I think now is the best time to start learning this stuff; I think there's so many resources out there. Don't be afraid to jump in, I promise it's not impossible, it's not too difficult. Yeah, just start learning about this stuff, it's fun.

**Adam Stacoviak:** One more mention of OSCON, we actually will have a table; we'll be in the Expo Hall. I have no idea where that's at, but if you're going to be there, look for us somewhere in the Expo Hall; we'll have a table, we'll have a big banner that says Changelog in front of it. We'll have two microphones sitting there, so we'll want to talk to attendees, we'll want to talk to some speakers.... Afterwards, we'll work with O'Reilly to produce a recap show. We're not sure if it's going to be one show, or maybe several small shows. We're not really sure, but we think that that's the general idea - one larger recap show, at least. If not, many smaller ones of different conversations.

Once again oscon.com/uk, use the code PCCL20 — 20% off your registration. See Eli, see Cory Doctorow, meet Jerod, sit down to talk, all that fun stuff.

Eli, thanks so much for this walkthrough of all this. I know it's a deep conversation to have around machine learning and deep learning; it's certainly not the easiest to navigate, but you did well and I appreciate you walking us through it. I can see why you have the Programs Engineer job at Google, that makes total sense for that.

**Eli Bixby:** Thanks.

**Adam Stacoviak:** It's time to say goodbye. Listeners, thanks so much for tuning in. Again, if you want to go to OSCON, use our code, get 20% off, meet us, talk to us, and hear from Eli and Cory there, as well as many others at OSCON London. But that's it fellas, let's say goodbye on this show.

**Jerod Santo:** Goodbye. Thanks, Eli.

**Eli Bixby:** Thanks, bye!
