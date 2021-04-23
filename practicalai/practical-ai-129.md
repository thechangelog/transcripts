**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I'm a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal emerging technology strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I'm doing good. It's a beautiful spring day and we're about to talk AI with interesting people. You can't ask for much more than that, my friend.

**Daniel Whitenack:** Spring has sprung...

**Chris Benson:** Spring has sprung.

**Daniel Whitenack:** Since you're in the South - one of my co-workers this morning was talking to me about every 17 years the cicadas, like the cicada brood --

**Chris Benson:** It goes crazy.

**Daniel Whitenack:** Entomologist... Is that what it is? I forget the name. The one that starts with an E. That scientist. I'm not one of those people; the one that studies bugs... But are you aware of this?

**Chris Benson:** I had heard that actually before, and it affects me in a fairly direct way. So long-time listeners, and as certainly Daniel knows, I do a lot of wildlife stuff on the side; separate from this whole AI thing, I do a lot of wildlife stuff... And one of the things I do is I am a snake wrangler among other things, as part of that wildlife thing. So I am commonly picking up copperheads - with the appropriate safety equipment, by the way; just so no one gets the wrong thing... And copperheads love cicadas.

**Daniel Whitenack:** They're a poisonous snake, for those that aren't in the U.S. Chris is very adventurous.

**Chris Benson:** If you're not in the South-Eastern United States, a copperhead is a venomous snake, and so I have a lot of experience with those. Totally off-topic, of course. But the cicadas - yes, the favorite meal of a copperhead.

**Daniel Whitenack:** Oh, okay. It's their primetime.

**Chris Benson:** That's right. Who knew we were going here at the beginning of this show...?

**Daniel Whitenack:** Yeah, yeah. Well, I am sure that there's all sorts of interesting AI to predict the cicada brood numbers this year... But that's not the topic of this week's show.

**Chris Benson:** \[00:04:16.24\] That's not what we're talking about today. I'm so sorry, folks.

**Daniel Whitenack:** Yeah. I'm pretty interested by the topic and guest this week, because it seems like we talk a lot on this show about GPUs, or accelerators, or specialty parts for AI are mentioned, but a lot of times they're mentioned just in the context of the accelerators, not the software component that goes along with them. And of course, I've found - and I don't know about you, but I've found that a lot of times when I have access to this really cool card or something, and I wanna use it, but the problem is not having access to it, it's the software that I write for it has all of these issues. So I'm really excited to talk about that sort of software/hardware interface today.

**Chris Benson:** Real-life AI right there.

**Daniel Whitenack:** Yeah, exactly. Real-life, practical.

**Chris Benson:** Very practical.

**Daniel Whitenack:** With Dave Lacey, who is chief software architect at Graphcore. Welcome, Dave.

**Dave Lacey:** Hi. Pleased to be here. It's great to see both of you.

**Daniel Whitenack:** Yeah, and before we jump into things, do you wanna give us just a brief sketch of your background and how you got into doing what you're doing now?

**Dave Lacey:** Sure, yeah. I'm a computer scientist, and I particularly specialized in compilers and that area of computer science. I did research in that in Academia. And then over the last so many years - I don't wanna say, really - over the last quite a few years, I've been working at various companies, working on the software stack to target new types of hardware, in different areas... Most recently, we'll talk about today, in Graphcore and AI, but previously, in HPC, and in meta-processing, network processing, all kinds of things. So very much a software guy trying to make sure that as we push the field forward and get new hardware to enable new things, we have software that can support that and let users actually program these new wonderful things that get crazy.

**Daniel Whitenack:** Cool. And you mentioned a few different things... Of course, there's AI-specific hardware, there's high-performance computing (HPC). I think a lot of times when people think about AI hardware, maybe they're thinking about GPUs... But the story is a lot more diverse than that. So maybe you could give us a little bit of a sketch of the landscape of AI-specific, or hardware that targets AI workloads, I guess is a good way to put it. What would be those categories of things out there?

**Dave Lacey:** Sure, sure. I think the ones everyone knows about are CPUs, clearly; they definitely have their place in this landscape and this specific task. And then obviously, more recently, GPUs, because of the nature of the highly power they'll compute. And what they target - they've had quite a bit of success.

I think you see quite a few companies now, and ours is Graphcore where I am from, and obviously I'm biased - I think is one of the leading (probably THE leading) new type of chip in there, where what we're trying to do is produce a chip that's specifically for machine learning and AI.

One of the things about other chips is you'll find that they've been designed for something else. CPUs, we know they do all kinds of things; GPUs originally graphics... And then our chip is something where we've gone "Well, can we design a processor that's just for this space?" And this space is really important. You've got so much application that it's worth designing a processor specifically for it.

I think that's the new kind of breed of processor you'll get, and I think the IPU is the one, obviously, that really fixes that, so it allows us to do more in this space than other processors can, because we thought about from the beginning the kind of attributes you need for an AI chip. So what kind of data are we dealing with, what kind of patterns does that involve, what ramifications does that have for us, for example, on the memory hierarchy... Our memory hierarchy is very different to other processors, and so on... Just so we can kind of process data in a different way, or the compute units, and so on. That's what we're finding - we're finding a third place now where we have specialized hardware, ML, AI, intelligent compute in general. That's where the IPU sits for us, in Graphcore.

**Chris Benson:** \[00:08:30.05\] So as we've talked to different folks through different episodes and everything, just trying to understand kind of where you fit in, and you're kind of laying out the landscape... Still at a high level, could you talk a little bit about the different categories before we dive fully into Graphcore, just so that we know in our heads where to position it, how that fits it? Because people come into this conversation with different levels of understanding and knowledge on what that is. Can you differentiate the different pieces of the landscape, and then as we focus in on where you're at, we'll have some context?

**Dave Lacey:** Yeah, yeah. I think if I can take that landscape and talk about it from the types of processing that different processors do?

**Chris Benson:** Sure, sure. That's fine.

**Daniel Whitenack:** Yeah, that'd be great.

**Chris Benson:** Yeah.

**Dave Lacey:** So a CPU very much deals with scalar processing. Scalar processing is dealing with individual numbers, maybe small groups of numbers together, like small vectors and things like that... And that's very good for the general computer, because maybe anything could be split down into individual numbers, right?

**Chris Benson:** Sure.

**Dave Lacey:** So that's kind of the CPU space. GPUs - what they deal with primarily is large vectors of numbers. I think that's very clear, right? So big, contiguous blocks of numbers; they come in, and you're going to deal with them in parallel. Of course, if they're dealing with them in parallel, they can get better efficiency, so they can go faster \[unintelligible 00:09:46.17\] with the same power.

I'd say what you could call the IPUs - you could them graph processors, in the fact that they're dealing with data that we have to deal with a lot in parallel; so they're highly parallel processors... But the connections between them - they don't come in big, contiguous blocks of vectors. You're gonna have to take one number from over there, one number from over there, and one number from over there, and then kind of deal with them in parallel. And that's in some ways a way you could characterize the graph processor, and it's one of the aspects to think of in categorization.

Another categorization, if I may, is also about the type of number you're dealing with. Again, those CPUs and GPUs have a wide range of number of formats, if you like. They deal with integers, and also fixed point numbers, and floating point numbers with certain different precisions. But in AI I think we're finding a lot that when you need to deal with floating point numbers, so fractional numbers to represent -- you're kind of representing probability distributions most of the time, right? So you don't need a lot precision. What you need is a lot of range. You should think of a probability distribution; that's kind of what it is.

So again, naturally, you're dealing with numbers that are low-precision floating point, with ranges you have to deal with, and the randomness involved in there as well, injected in. So you can think about the shape of the data and the type of the data, and which processor deals with what. That's probably a reasonable way to describe that landscape \[unintelligible 00:11:22.03\]

I suppose there are other ways you could split it up as well, but I quite like those as a way of splitting these things out... And it kind of leads you to think "What kind of applications could these be good at?" by thinking about them in that way.

**Chris Benson:** Yeah, I see your point on that, absolutely.

**Daniel Whitenack:** And maybe you could connect -- so you talked about the graph nature of the IPU, the Graphcore processor, and taking a number from over there, and how that works. Could you sort of map that onto the typical AI types of tasks that we're wanting to perform, and how that connects? People that, for example, started using TensorFlow before TensorFlow 2 are maybe familiar with saving \[unintelligible 00:12:02.21\] or something like that, or loading them... Does that connect to what you're saying, or what's the connection?

**Dave Lacey:** \[00:12:11.11\] Yeah, so there are several, and there are some different levels \[unintelligible 00:12:12.19\]0:12:14.27\] One of the graphs that people talk about in things like TensorFlow and so on is the compute graph, which is the way data flows around between big, intensive operations. And that's certainly one of the larger, coarse-grained things you can think. But I'm talking more about the graphs that connect the information together.

If you think about what \[unintelligible 00:12:37.11\] or they're convolutions. Now, let's look at convolutions for image processing. That's a really good example, because what you have there is you don't have quite the auto-connectivity of the matrix multiplier operation. You have a kernel which is going to apply the same thing to lots of different parts of the image across the image axis.

The \[unintelligible 00:13:04.13\] So you have a particular fan-out graph there, and then the operations you can get into as you get into other neural networks... Say if you look at things like ResNet or EfficientNet in image-based neural networks, you can see that actually you get grouped convolutions, or separable convolutions... Again, where you're kind of splitting up the data and then recombining it in finer and finer ways. So it's those kinds of things that require hardware that can cope with efficiently moving that data out, and also a software stack that can target artificially as well, so \[unintelligible 00:13:41.12\] I always like to remind people that you need the software to target those as well.

**Chris Benson:** It takes them both.

**Dave Lacey:** Yeah, yeah. And then if you get into even more recent things that people are doing, where you have -- a lot of what we do at the moment \[unintelligible 00:13:57.28\] It takes some data coming in, and it'll do a big weighted multiply between them. But really, that can be quite inefficient. We've got this trend go really big recently, which is great; it's pushing things forward with these really big \[unintelligible 00:14:15.20\] language models, and so on.

But it's not very efficient, and you'll see that the shape of that data means there's actually quite a lot of sparsity in there; a lot of that data could be zero, and that leaves you with even more complex data patterns. And I think that push for efficiency is another space where you'll get naturally a graph structure. Naturally, a graph structure is anything where you have almost (in my mind) irregular connections between the data.

So I think there are lots of different ways of looking at the graph within a neural network or any kind of machine learning program, but I think the key one for me is "How is the data connected together?"

**Daniel Whitenack:** Yeah, and I know that at some point Chris and I were talking about \[unintelligible 00:14:54.29\] I forget which of the major AI conferences it was, but they were talking about trends year over year in terms of what people were focusing on, and I know that there was a big boost in people looking more and more at what's called Graph Neural Networks. Does that connect directly to what you're saying, past the other things, in some way? Because I know a lot of people are talking about these things, and my understanding is in some ways people \[unintelligible 00:15:24.09\] they have just a way of encoding the graph into a tensor, and then you'd still have the tensor operations. But in other ways, there's actually graph-native operations that you can do within the network itself. I'm not an expert in these things... Have those connected with what your company is doing at all?

**Dave Lacey:** Yeah, it's something that we're quite interested in, and actually, some of the research groups we work with are interested in that kind of network. It's yet another type of graph, but the graph is not the model itself, but the data that the model is consuming. What we've found is that there's a lot of choice there; there's a lot of choice in how you represent the data structure. There are many ways to do that. And then the actual data processing operation you'll do will be different depending on that. So if you represent it as a list of edges, or a dense matrix, or a bit-vector, or things like this.

\[00:16:18.15\] Actually, I think what people really want is a way to explore through those choices at the moment, actually, to kind of push things forward. This is one of the reasons that we're kind of quite keen on having a very flexible, programmable software stack, because there are all these choices to make.

I think it's a really great example you've made there with GNNs, because it shows that what we might be doing in 2-3 years' time in this field is gonna be quite different to what we were doing 2-3 years ago. And if you think like five years before that, then it wasn't neural networks, right? It wasn't deep learning, and stuff.

So I think key for us, as much as having the right processor and having these graph techniques, if we could call them, as a family, the important thing is to have the capacity to do innovation. A part of that, for us, I think, actually does come down to the software quite a bit, actually. It comes down to making sure that people can modify it in a good way, and extend it, as well as having the kind of easy, out of the box thing, where they're just like "Ah, I just wanna run a TensorFlow program", or something like that. I think that the GNNs is a very good example of where you want that flexibility.

**Break:** \[00:17:27.22\]

**Chris Benson:** My head is also still spinning a little bit on something that you were talking about a little while ago, and that is the software and the hardware - you need them both. Over the decades, the world has been very CPU-focused, up until this most recent time period where we're really digging into AI, and all of these new hardware architectures have come into being... How do you approach -- given the fact that we're having all this innovation, and how these hardware architectures are coming out, how do you approach writing the software that goes for that hardware, that makes that hardware run? Especially when you think about the fact that we have a long history of being specific to different types of CPUs, but now the sky is the limit on what's happening... How does that change the act and the thought process and the planning for building software?

**Dave Lacey:** I think it does a lot, actually. I think CPUs are amazing; they've been so successful in fixing an architecture, fixing all aspects of the architecture - the way the instruction set runs, the way that memory hierarchy works... And then applying it to lots of different fields and having that success I think is a remarkable thing. I don't know if it works for all fields though. And I think what we find in AI is one thing that we've been very keen on right from the start, and I definitely see other people in the field talk about it, is this idea of co-design.

\[00:19:58.24\] Co-design is this general idea where you want to design several aspects of a system together. So clearly, one of the big aspects of co-design is design your software stack and your hardware architecture at the same time. That's something we're very keen on at Graphcore, and actually we've been, right from the beginning - we were very keen on making sure we worked on how the software was gonna target the chip, make sure we modeled everything, right up to the full neural network applications as we designed the chip, and pushing that all through.

I think later on in the company what happens then is you need to extend that software stack and really invest in building that core for really robust solutions... And now we've got more software people than hardware people. It's a really big part of what we do. We're as much a software company as a hardware company. But even right at the beginning it was very much "Let's design these together."

I don't think it stops there, actually. You could also say you co-design - and we'll see more and more of this - the machine learning algorithm architecture itself, along with the software and the hardware, and the system; so the kind of way you -- particularly for training, for large-scale, large data machine learning training, which is the world we're often in at Graphcore... You're not talking about one process here, you're talking about hundreds of thousands of processes working together, and they all need to be connected via networking cables, and put into racks, and then the power management, and all this kind of stuff has to be put around it. And really, you need to co-design all of that together. I've had someone use the term algotechture before to describe this, and I think "Yeah, why not. That's a fair enough term."

**Chris Benson:** That's fascinating, what you're saying. I'm not trying to cut you off; I actually want you to expand on that... The idea of doing software/hardware, the actual ML architecture and the system - that seems daunting, because all of those individual topics, people spend their whole careers doing that. How do you blend that in a cohesive way?

**Daniel Whitenack:** It seems like your team make-up is very important for that...

**Chris Benson:** I would imagine so...

**Dave Lacey:** Absolutely. Yes, team make-up is important, and in the company we really stress that. I think partnerships are very important for us; we've always been quite keen on working with commercial consumer internet companies that want to do large-scale deployments behind a search engine, or whatever there is; you know that kind of thing... Which we also want to work with research groups, both university and company research groups, to see where that's going. And we're not alone; a lot of companies will. That's part of why there's this keenness to bring ML researchers within companies, to work on that.

So I think that make-up and the communication between those is really important within a company to do that... And partly, it's just an awareness to want to do it. It's just having that communication freely flowing, and actually have the right culture within a company to foster \[unintelligible 00:22:52.19\]

There is a flipside, I have to say, in that you've gotta be careful not to design out the future, if you like... Because you could interpret this idea as being "We'll harden a piece of software into a chip." We'll take ResNet-50, to give you a good example - and say "We'll make a chip that will do that really well." I don't think that's really co-design, because you have to also design for generality. Design for not just the algorithms of today, but the algorithms of three years time, or four years time as well, because a chip has to last that long, and people want that flexibility.

**Chris Benson:** Is that a little bit of an artifact left over from an earlier time, when you were still thinking about CPUs, and there would be -- things would start in software; you'd solve a problem in software, and it would stick and be maintained over the years, and finally, it would get incorporated into chips... Is that a legacy mindset that maybe has been brought forward but doesn't work when you're advancing on the ML architecture as rapidly as we are?

**Dave Lacey:** \[00:24:04.04\] Yeah...

**Chris Benson:** I mean, if you bind it into the chip and you're stuck with that... Whereas we're seeing rapid advancement over the last few years in terms of where things are going.

**Dave Lacey:** Exactly that. I think that's exactly right. You just need to look, as everyone who subscribes to \[unintelligible 00:24:16.18\] will see, the fire hose of innovation here is just huge, and you have to plan for that. I think good, flexible software is the key to that... But then you have to design your hardware to match that as well. So exactly; I think that's hit the nail on the head, yeah. We're in a real fast-moving space here. It's not stopped, there's still a lot of way to go before we settle down on exactly what the algorithmics are here.

**Daniel Whitenack:** Chris knows I love to get into the practicalities, and I guess what I'm thinking of is you have your Graphcore processor, the IPU over here on this side, and over here you have already established community frameworks like TensorFlow, PyTorch over here on this side... And obviously, people want to use those, they want to use Keras or whatever, and I'm sort of looking at a diagram which we'll link in the show notes, about your popular graph framework software, which is very well-written... But you've sort of got the frameworks on this side, and you've got the processor on this side. Could you explain for people what it takes to connect something written in TensorFlow or PyTorch that people are used to, ti this new way of processing on the graph processor - what's in between there?

**Dave Lacey:** For sure. Let's take TensorFlow as an example, and I'll see if I can walk through that diagram from left to right. So you have your TensorFlow program, written in Python usually, and what that describes - usually, it describes some model that you want to optimize, and then you apply an optimizer to it. And that model really is -- we're back to this compute graph; it's a series of linear algebra operations connected together, and out \[unintelligible 00:26:04.00\]

That graph gets explicitly represented in TensorFlow. So a data structure gets created, which is that graph. At that stage -- it's called a call graph in TensorFlow; so it's pretty much what you've written, more or less.

And then what happens is -- well, the first thing that happens really is that that gets differentiated. So we create the backwards pass to say "How do we calculate gradients on that?" and then it gets wrapped in a kind of -- that whole data structure then represents a big loop outside that says "Feed data in and update my weights as I calculate these gradients."

We take that whole graph, and then it gets passed first through the TensorFlow compiler flow. And that's not a graphical thing, that's the tensorflow-upstream developers; they'll take that graph and they'll canonicalize it into smaller operations; they'll do some optimizations on it, and they'll convert it into what's called an HLO graph and an XLA graph, so this goes through their compiler infrastructure, which is called the TensorFlow \[unintelligible 00:27:14.04\]

At the end of that you have a kind of slightly lower-level split up graph where we're still talking about kind of quite big linear algebra operations, like matrix multipliers and things like that, but it's being kind of reduced down and tidied up and made a bit more kind of closer to the hardware.

At that point, out Graphcore TensorFlow backend takes over, and the first thing it'll do is it'll do a few more automizations on that data structure at that level. For example, in the chip we have a hardware unit for doing exponentials and sigmoids and the kinds of things that come up in certain non-linearity. So it will recognize those patterns in that graph, and say "Well, replace them with one special operator that will kind of go down to the hardware." So it'll do that kind of thing.

\[00:27:58.11\] Then it will basically convert those operations into an even lower-level form of graph, which is much more fine-grained than that. We have something called poplibs, which are libraries that implement things like matrix multipliers, or non-linearity operations, or things like that in Poplar. So let me talk about Poplar briefly, because I realize \[unintelligible 00:28:18.21\]

**Chris Benson:** Absolutely.

**Dave Lacey:** So Poplar is our graph programming framework. So that is a way of representing graphs that run natively on our device, that do these kinds of operations... And in Poplar we have graphs that kind of break it down to the individual processes. So on each of our chips we have about 1,400 cores/processors, each of which has hardware threading in there, so you've got about 7,000 parallel compute units. And Poplar graph kind of represents the graph at that kind of level. And poplib is what kind of then says "Well, I've got this matrix multiplying to do. How do I split that over the parallel units in an official way?" So that's where it does partitioning, and axis splitting, and stuff like that.

Then we have the Poplar graph compiler, which then will that fine low-level graph and create actual code to the device, which then goes into the graph engine, which then runs it.

There are quite a few levels... You notice quite a few compilers involved. We counted them, and there's like 5-6 different compilers that have to interact to get that efficient implementation down on that device.

There's some other things that go on, like sometimes you might want \[unintelligible 00:29:30.19\] so at a higher level you'll do model pipelining, and things like that, to get efficient models for \[unintelligible 00:29:39.02\] and things like that... But fundamentally, that's the flow.

**Chris Benson:** That was great. And by the way, I don't think I can recall anyone ever taking us through, even a genericized, not specific to your system, for that. So I appreciate that very much.

**Daniel Whitenack:** That was super-fascinating, and I think, as you mentioned, Dave, there's all of these layers, and of course, you're connecting to different frameworks that are out there.

It's intriguing to me from a software development standpoint... With these frameworks updating, and new architectures and operations being added, and all of that - one, how do you keep up that pace, and test that whole pipeline of things? Is it a matter of having reference implementations of all of these different models, and essentially running tests against the compilation of those upon new versions of your framework, or how does that work?

**Dave Lacey:** Yeah, exactly that. There's a lot of investment -- well, one is the development... A lot of software developers \[unintelligible 00:30:41.05\] a lot of investment in the regression system, and test infrastructure... And it all has to be done, because you have to have a really robust, comprehensive software product. There's no way around that for it to be usable. And to kind of blow my own trumpet a bit here - I think Graphcore, amongst the graph of AI startups, is really well advanced in that space. All the elements you have \[unintelligible 00:31:03.07\] the documentation, and how you do that, and so on.

So I think we have to try and keep on top of that, keep working internally at Graphcore to keep those \[unintelligible 00:31:14.26\]

The other thing I'll say that kind of really helps with this is being very open... So making sure that people can -- we document, and make sure that people can access well... This is something that you do get on other platforms, but I think we're leading in this, and being able -- to know what Poplar, the low-level graph compiler, explaining that, making sure that people can add custom operators in that... Those libraries I talked about - they're open source on GitHub... That kind of thing. Our TensorFlow and PyTorch backends are open source and everything, as well.

So by having a more open infrastructure, it makes it easier for the community at large to help you adapt to new things as well. And as we're getting more popular, more people using us, we get more community involvement like that as well, and I think that's an important part of it as well.

**Break:** \[00:32:10.24\]

**Daniel Whitenack:** Dave, I'm curious... As an AI practitioner, one of the things I would love to know from you is as you've spent all of this time making AI programs be sympathetic to a certain architecture, and for certain tasks, do you have any good advice or help for AI practitioners out there in terms of knowing how to tailor our AI programs or models more generally to be efficient for a certain dataset or task? Are there any good advice you have, or common challenges/pitfalls that you see people falling into, that could be mitigated with some best practices?

**Dave Lacey:** Yeah, it's a really good question. It slightly depends on whether you're talking about task performance, like how good your model is at a particular task, or whether you're talking about compute efficiency, kind of how fast it runs.

In terms of task performance, I think people need to be aware that those two are not islands that are separate... The architecture you write, whether you're aware of it or not, even if you just take on what other people do or whatever, has been affected by the underlying compute platform and what's efficient... Because if you were trying to study whether a particular kind of model architecture for example got a good task performance, but it was really slow, you probably wouldn't pursue that, even thought it might be quite a good way of going for if you're just looking at pure task performance independent of how fast it goes. \[unintelligible 00:34:38.16\] what hardware you've got affects how lucky you are being able to explore certain things.

I think it's a good question \[unintelligible 00:34:48.02\] I think one thing that's useful is just a kind of base understanding of what's going on underneath. Probably the important things there are if you're interested in the compute efficiency, knowing how things like for example batch size or certain sizes/axes of your matrices actually affect the hardware underneath, and it could be faster and slower.

I think the other thing is being very aware of the floating point behavior of various platforms, because that can vary a lot between platforms. A good platform should document that, and you should be aware of the tools they have to show when things are overflowing, or under-flowing, and so on, to know when you might be losing task performance... Not because of the model structure, but because of the data format that we're getting there. Actually, we're seeing new techniques coming in to help that, actually; you'll see things like automatic loss statements, for example. The software stack and the vendor should try to help there, try to make things more adaptive. So you don't have to think about those things, but I think it's worth just having a good, surface-level understanding of what's going on under the board of it.

**Daniel Whitenack:** \[00:36:02.18\] Yeah. Chris, you're probably familiar with Bill Kennedy in the Go world, and maybe you are as well, Dave... We've spent some time working together, and he always in our conversations was talking about this idea of mechanical sympathy as you're writing code... Which I think gets to a lot of what you're saying, Dave, in terms of - yeah, maybe all software engineers don't have to also be hardware engineers, but there is an element of developing a mechanical sympathy for what you're writing... Or that helps you write really robust and good software, that I think is really valuable.

In Go it's understanding "Oh, if I initialize a variable this way, it does something different than if I initialize a variable this way in terms of the memory that's allocated, and copies that are made, and all those things."

So having that sort of knowledge is really cool. And it's interesting to hear you talk about it in the context of AI... I think it's something that I definitely want to develop a little bit better intuition for \[unintelligible 00:37:05.28\]

**Chris Benson:** That segues into what I was gonna ask too, so we're both thinking along the same lines in terms of questions... And that is you've taken us into this and explained that compiler series, and we've talked about the interface being PyTorch or TensorFlow... And I know I am coming at it as a practitioner, as is Daniel. You have presumably different types of users, that need different amounts of that kind of mechanical sympathy - as Daniel described it, from Bill Kennedy - or knowledge of what's under the hood at different levels. How far do I need to go...? Should I learn Poplar, am I going that far? Am I going beyond that? If the answer was no for me, what other users are learning that? How do you break that out? How do you know who should be addressing what? Because that's a question we get all the time from new people in this field. There seems like so much stuff. I don't actually know what to address first, second and third... So could you break that down a little bit from that end user perspective?

**Dave Lacey:** Yeah, it'd be unrealistic to say that everyone needs to become a full-stack developer, full-stack being this incredibly complex--

**Chris Benson:** All the way down through the hardware.

**Dave Lacey:** Yeah, yeah. I think that's a really rare thing. I mean, you do get people like that. I've met people like that, they're great. And you wanna hire them, basically, when you see them... \[laughs\] But you're not going to get that... So I think what we find is it's harder for a sole practitioner. I think what we find in the companies we work for is they do that by teams. So you have very much a kind of implementation-focused team, an algorithm and ML-focused team... And the challenge there is to make it work hand in hand - the co-design thing I was talking about earlier - to work together, and just being honest about that, that you're not going to get this all in one person.

I wouldn't suggest that people try and really do that unless they're super-interested in all the parts. You kind of always need to pick where you want to go, and so on. But I think despite what I said about these lower parts in the stack, the majority of what I'll call ML scientists, or data scientist or stuff like that - they don't need to know about those lower-level details. They need to just have some sympathy with it... And I think that's it. So maybe just dabble a bit to understand, learn a bit about the machines, but don't try to learn it really well. Definitely our user base is like that. You might say that maybe about 90% of the people are programming in the PyTorch/TensorFlow \[unintelligible 00:39:32.10\] and you've got a small group... But that group is very important for us, because what they can do is they can add new functionality, new capability to a stack or an application or a framework, or something like that.

Actually, maybe this is a case for the people to specialize a bit, and if you wanna be that person that can understand the details, that do that, but find good people to work with that understand the higher level, and vice-versa. If you really wanna understand the machine learning part of it and have some sympathy, but then maybe find some people to work either in the community, or set up your professional team structure to make sure you've got people with those other skills as well.

\[00:40:16.15\] We kind of have a mix at Graphcore. I'd say we have some people who are that kind of full-stack \[unintelligible 00:40:18.09\] and go up and down it. Obviously, we're in a bit different position, because we're in the implementation side of things.

**Chris Benson:** Right.

**Dave Lacey:** And then we have people who specialize in \[unintelligible 00:40:26.07\]

**Daniel Whitenack:** So Dave, I'm interested in -- of course, this space is developing rapidly, and I know Graphcore and IPUs have been gaining traction, there's good use cases out there, and we'll definitely link to some of the materials on your website and all of that... I'm kind of wondering, as you look to the future, this next year or two years with Graphcore, where do you see things going and what are you excited about seeing in terms of the development of this technology over the next year or two years as we look to the future?

**Dave Lacey:** Gosh, it's very hard to pick... There's an awful lot going on. I think the algorithm space will continue to move very quickly, so I'm very excited to see the fact that we might be doing very different things even two years from now from what we are doing, so people won't be talking about "Wow, look at these ginormous transformer \[unintelligible 00:41:19.20\]." So that's very exciting.

What's happening from a more kind of systems point of view, I think what's happening in the data center will be very interesting, the way that's put together, the way to get efficiency, the software and processes and the \[unintelligible 00:41:38.22\] will all have to work together. It's a fascinating space and it will evolve quite quickly in the next couple of years.

From a software point of view, I'm interested in how the current frameworks and stacks evolve as we try and go towards getting more efficiency. I guess I'm talking about parameter efficiency here, I suppose... Because that's gonna lead to new algorithms, and I think - this is just a personal gut feel; I don't know \[unintelligible 00:42:04.24\] that we have now, the ones that have been very popular, the TensorFlows and \[unintelligible 00:42:14.00\] are they the right ones? I don't think that's a settled thing... And that's very exciting, that there's still that kind of uncertainty about that kind of thing.

There's all kinds of stuff out there about how it's gonna grow, and scale, and that's now even talking about the actual applications that are gonna come out of this space as well. So all the way through, from top to bottom, there's loads of exciting stuff coming up, I'm absolutely sure of that.

**Daniel Whitenack:** Yeah, awesome. Well, Dave, we really appreciate you joining us. This is super-fascinating. I'm really excited by what Graphcore is doing. We'll make sure and link a bunch of links in our show notes for listeners. Definitely check out what Graphcore is doing, read their white paper and all the information about the Poplar software framework; it's really cool. And of course, the hardware.

I was just really enthused by the conversation, and I have a lot going on in my mind that I wanna think about more, so I appreciate that... Thank you for joining us, Dave.

**Dave Lacey:** Thank you very much, it's been a pleasure. It's been really good fun.
