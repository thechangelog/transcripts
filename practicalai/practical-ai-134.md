**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I am a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal emerging technology strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I'm doing very well. A little bit chilly here in Atlanta; I don't know what's going on with that. Mid-May - we're supposed to be sweltering heat.

**Daniel Whitenack:** Yeah, it's a little bit chilly here as well. I don't know what's chilly for Atlanta though. It depends on your reference frame.

**Chris Benson:** I don't know, I'm guessing it's like 60 out there, or something like that.

**Daniel Whitenack:** Okay. That sounds pretty delightful to me, actually... \[laughter\]

**Chris Benson:** I mean, if it's not 85 by now, it's just not normal, so...

**Daniel Whitenack:** What are you keeping busy with these days?

**Chris Benson:** Just lots of technology stuff at work, having a good time with it, and I'm super-excited to pause in my day job, so that we can have a good conversation about AI/ML.

**Daniel Whitenack:** Yeah, yeah. And specifically, I know in my job recently we've been working on a few different deployments of the same model, one to an edge device which is disconnected from the internet, one cloud deployment, and then another one for an on-prem system. And that carries with it, of course, all sorts of joy in terms of fitting into resource constraints, but also optimizing a model for different deployments. And I think that's definitely one thing that -- I don't know if anyone ever pitched being a data scientist to me, but I don't know if that was part of the pitch, like optimizing for certain hardware and all that... It's cool, but it's definitely sometimes laborious and hard. I don't know if you've run into this in your past...

**Luis Ceze:** Yeah, you have to be a data scientist AND a software engineer to do that, right? \[laughs\]

**Chris Benson:** You know what strikes me as you're saying that, Daniel - the thing is I'm kind of doing a similar thing, but being in the defense industry, we have a completely unsoftwarelike name for it. We call that Joint All-Domain Operations. Nobody outside this world would ever -- they're like "That's software? Really? That's AI? Really?"

**Daniel Whitenack:** \[00:04:19.13\] Wait, what acronym is that?

**Chris Benson:** We call it JADO.

**Luis Ceze:** JADO... \[laughs\]

**Chris Benson:** We call it JADO, and stuff... But you'd never know. I don't think anyone outside my industry would ever associate JADO (Joint All-Domain Operations) with software, and Kubernetes, and AI deployment.

**Daniel Whitenack:** I would have no idea what that meant if you gave those words to me... But I think we'll both be enlightened today quite a bit on this subject. I'm really excited, because we have Luis Ceze with us, who is co-founder and CEO of OctoML and professor at the University of Washington. Welcome, Luis.

**Luis Ceze:** Thank you. Thanks for having me on the show. It sounds like you guys are fun to talk to. Can't wait for the conversation here, so... \[laughter\] And it's a nice, sunny day in Seattle, by the way...

**Chris Benson:** We don't take ourselves too seriously, trust me.

**Luis Ceze:** Okay, I love that. That makes it even better. Just to finish the weather theme of the conversation, it's a nice, sunny day in Seattle, in the 70s, so I'm wearing a T-shirt here... \[laughs\]

**Chris Benson:** What's up with that...? He's in Seattle and he's having the great weather... Seattle is famous for rain. And we're here in these other parts of the country and it's just kind of meh...

**Daniel Whitenack:** Isn't it though -- correct me if I'm wrong, but summertimes in the Pacific North-West are quite delightful, aren't they? It's just like the winter, like rain and fog, and...

**Chris Benson:** That does sound nice.

**Luis Ceze:** Yeah, that's great. Yeah, winters are long, but the summers are awesome. So there's some balance in the Universe and nature here; especially for a native Brazilian like me, that matters, having a nice summer...

Well, thanks again for having me on the show. It sounded like from your adventures with machine learning deployments we're gonna have a lot to talk about here, so...

**Daniel Whitenack:** Yeah, for sure. So before we get into all of that, maybe you could just give us a bit of a background on yourself and how you got interested in this topic and ended up working in the areas that you're working now.

**Chris Benson:** From your moment of birth right up until this recording.

**Luis Ceze:** Exactly. Great, perfect. So as I was mentioning, I grew up in Brazil, and the funny thing is -- I like to joke that I'm in the 20th year of a three-month internship in the U.S. I was in school in Brazil, I was recruited by IBM Research in the early 2000's to work on the Blue Gene Project. It was a three-month internship that became a year-long co-op, and \[unintelligible 00:06:25.03\] close to where you are, and then after that I came to the University of Washington as a professor, and next thing I know 20 years have gone by.

So anyways, at IBM I worked on hardware/software codesign. We were part of this team building the Blue Gene machine, the first Blue Gene machine. This was like hardware and software design for very high-performance molecular dynamics simulation. And a lot of it, if you look at the kind of workloads that we ran there, was high-performance linear algebra. Then you have HPC systems with all sorts of internode communications, reductions, parallelized communication and so on.

So after IBM I went to grad school, in grad school I did work on hardware and compiler support for speculative parallelization, essentially making it easier for folks to write parallel code by not having to prove that the code is actually parallel.

Then I came to UW. In UW I started in my faculty career working on hardware/software codesign for emerging applications. So I had done a bunch of work on approximate computing; essentially, the idea is to take advantage of the fact that some applications don't have to have perfect execution to have a meaningful and useful answer. Simulations are like that, there's multiple valid outputs... And of course, machine learning is a huge workload in that category. That's how it started, actually. I was working on hardware and software optimized for machine learning, for energy efficiency, better performance... And then about six years or so ago I started collaborating with folks in the core machine learning group here at UW. Carlos Gaston, who's a friend of mine, also a Brazilian... You know, Brazilian transplant to the U.S, although he's Brazilian-Argentinean, transplanted to the U.S. He has a long history in machine learning systems.

\[00:08:05.09\] We were chatting six years ago - so there was already a growing set of machine learning models that people were interested in, and a growing set of hardware targets. It's kind of crazy to think about that. Six years ago GPUs were just starting to get popular for machine learning. It feels like that has always been the case, but six years ago it was just kind of like picking up.

**Chris Benson:** A lot has happened since then.

**Luis Ceze:** I know, yeah. So now we do CPUs, and GPUs are picking up, people started talking about \[unintelligible 00:08:30.21\]but at that time it was getting heated again. And then people started talking about building accelerators, so we were like "Whoa, kind of interesting that there is this growing set of models already starting to fragment the ecosystem", with TensorFlow... PyTorch didn't quite exist yet, but there was already some fragmentation going on, and a growing set of hardware targets. So now imagine this cross-product of models, frameworks, and hardware targets. It's very becoming a pretty complex cross-product. So we started thinking about "Oh, wouldn't it be nice if we had a common intermediate representation that allows you to do high-level model optimization and generate specialized code for that model and the specific hardware targets?"

Tianqi Chen who's an incredible machine learning systems researcher was Carlos' grad student at that time, and Carlos and I started co-advising Tianqi, and that was the genesis of "Let's look at machine learning model optimization and compilation as a way to actually optimize and deploy machine learning models."

I had other grad students... Thierry Moreau, who was working on specialized architectures for machine learning, got interested as well. So he quickly became part of the mix, and started working on FPGA backends for machine learning models as part of this mix.

So that's how I got into that. In the end, everything boils down to high-performance linear algebra, I would say, for machine, and I had a history with that at IBM, and everything kind of came together - approximate computing, high-performance linear algebra and machine learning, in the genesis of the TVM project.

**Daniel Whitenack:** Awesome. And maybe we could just sort of take a step back -- you talked about machine learning compilers, we talked about intermediate representation... Maybe for that person out there that has taken the Coursera course and they went through the Coursera course on deep learning something, and - hey, it never talks about machine learning compilers; they learn maybe how to do a training thing, and they created an image classifier, and then they learned how to do an NLP thing, and do autocomplete, or something... And then they end the course and the know how to use TensorFlow, and do some data pre-processing stuff, and maybe even a little bit about GPUs, but they never heard this, machine learning compiling.

**Luis Ceze:** Yeah, absolutely.

**Daniel Whitenack:** Where does that fit in?

**Luis Ceze:** Yeah, I'm gonna translate all of that. You're basically saying "Well, I'm really missing the audience here." So let me translate all of that. \[laughter\] When you write a typical machine learning model -- by the way, I'm really glad that machine learning tools are becoming more and more accessible. More and more people can build meaningful and useful machine learning models, either starting from an existing one or tweaking and creating new ones. I'm so glad that the tools are getting much better for that.

But now, when you create a machine learning model though, in the end you need this model to actually run well on whatever hardware device you want them to run. Today, this is typically done by having a set of libraries that implement parts of your model - different layers, that have often handcoded implementations, and then your high-level framework like TensorFlow or PyTorch just gets your model and calls these hand-tuned libraries that either NVIDIA provided, or AMD, or Intel... The hardware vendors typically provide those libraries, and then the frameworks stitch everything together to produce the thing that runs on your hardware... Which is all well and good, it's nice and easy, being able to build pretty complex systems that way... Except that now, as we build richer and richer and more complex machine learning models that really need to make the most out of the hardware they are deployed to... Which is great, so it's kind of crazy that you can build gigantic language models or very complex computer vision models that do a ton of computation... That's really pushing the limit of how fast you could run just by riding on Moore's Law. So you need to be able to squeeze much more performance out of that.

\[00:12:13.20\] So that's where a machine learning compiler comes into play. When you write a piece of code in a language like C, for example, you run it through a compiler and you run it on your hardware. You don't even think about it, you run it through a compiler and you run it, but for machine learning we don't do that. So you just interpret the model. What a machine learning compiler does is essentially treats this process of going from your model to what runs on your hardware has a compiler problem. What do I mean by that? I mean by translating your model into a representation, as we call it, the intermediate representation - that enables optimizations of your model.

For example, you could fuse a layer with \[unintelligible 00:12:46.29\] fully-connected layer, which would be matrix multiplication followed by \[unintelligible 00:12:52.04\] fuse them, treat them as a unit, and generate nice, new, fresh code that's specialized to your model, to run on your hardware target.

And then with a machine learning compiler what do you get? As an end user, the benefit that you get is your model becomes highly-optimized, executable for your target hardware. The difference of performance can be huge - 2x, 3x, sometimes 50x better performance than your stock high-level framework execution time and speed. Does that make sense? Essentially, you treat that -- basically, what you take for granted in writing regular software, it does that for you in machine learning. So it produces a fresh, highly-optimized binary for your model.

**Daniel Whitenack:** Yeah, that makes a lot of sense. It sounds like a lot of what we're talking about here is performance in the sort of maybe latency and resource-consumption type realm... When we're thinking about compiling, is that mostly what we're concerned with, or do some of these compilations -- like, for example, does the actual performance of the models predictions, does that ever come into play when you're doing this sort of optimization as well?

**Luis Ceze:** Great question. So performance here isn't big. For a computer systems person, performance typically means how fast it runs. But for a data scientist, performance also means how good are the statistical properties of your model. By and large, machine learning compilers do not change the accuracy of your model. There are optimizations - for example, you can do automatic quantization; you can quantize parameters in your model that can change the behavior of your model. In that case you do trade off some accuracy for better execution time or for better system performance. But for the most part, in fact what we focus on in Apache TVM are transformation optimizations that do not change the accuracy of your model at all... Even though we do support quantizations and so on, by and large the way it's used is compilers are modeled faithfully to run without any changes in accuracy.

To tie back to your commentary earlier of deploying on multiple hardware, say deploying on the edge, getting the right performance and using the right amount of resources that fits in your hardware is something that's an extremely laborious task. So if you have a model that's gonna run on a Raspberry Pi-like device - say it's computer vision, and the first version of your model runs at half a frame per second, and uses too much memory, and doesn't leave any other compute resources for the other things you need to run on your device, you can't really deploy it.

Our experience with several users and customers is that the process of getting a model that is ready from a data science point of view, from the accuracy point of view, to being able to be deployed, it could take weeks to months of hardcore software engineering work... And that's what we want to ultimate with with Apache TVM. And all the machine learning compilers do similar things, but Apache TVM is just especially good at doing that, because it uses essentially machine learning for machine learning.

The process of translating your model to an executable, like a deployable artifact - it's a search problem. There's literally billions of ways in which you can compile the same model on the same hardware target. The question is "How do you pick the fastest one?" You cannot try them all, because they'll take too long. So you have to use intuition. That's what software engineers do. We replace that intuition with machine-learning-based optimizations that learn about how the hardware behaves in the process of optimization, and uses those models of how the hardware behaves to tune and search the right way of optimizing and compiling your model to the hardware target.

**Break:** \[00:16:22.24\]

**Daniel Whitenack:** Luis, I'm curious - one of the hardest problems in running this podcast I think is just the wide variety of jargon that is used throughout all sorts of different areas of ML... And I know that on this podcast we've talked before about model serialization. So we've got something like an ONNX project, for example, where maybe I could "save" a model to ONNX and maybe load it into a PyTorch model, or into TensorFlow... It's this sort of overlapping serialization format.

So as people are thinking about kind of saving and serializing their models, where does maybe this compilation fit in in terms of the developer workflow. Let's say that I have my model created, or I've trained it -- let's say I'm in TensorFlow and I've decided on a way to serialize it. So I've output a file that corresponds to my serialized model; what happens next? What's the workflow look like after that in terms of Apache TVM and the compilation process?

**Luis Ceze:** Great question. So there's many ways in which Apache TVM ingests your model. One is exactly what we've talked about - so there's a frontend to Apache TVM that ingests a model that's been serialized into ONNX. So it just imports the model, and then you specify the hardware target, and then you wait for a little bit, and then you get your artifact ready, your executable for your model, and you package it in various ways.

But there are also ways in which you can call TVM directly from the code that specifies your model. So you can do that from TensorFlow, from PyTorch, from MXNet, or Keras, and so on. Essentially you load your model graph into the TVM representation, then you choose your hardware target, and then you compile.

So there's these two ways in which you can interface with TVM - either via a serialized model, or by just embedding a few lines of code to call TVM. In the flow from data to your deployed model, you create the data, curate the data, create a training set, specify your model architecture... Sometimes it's a little bit of architecture search. You arrive at your model architecture, you train it, and then you're able to actually test and validate your model, and then you're happy with it.

At that point, your model has the right statistical properties, you know it does what it's supposed to do. And what do you want to do? You wanna make it run fast. So now you have a trained model. At that point, that's what you hand off to, say, Apache TVM, either via ONNX, serialized models, or via calling directly the \[unintelligible 00:19:57.28\] Then you specify your hardware target, and then you click Compile, so you call compile, and that's when TVM does its high-level and low-level optimization magic, and it also uses this machine learning from the machine learning engine to tune the code for your specific model on your hardware target.

**Chris Benson:** \[00:20:14.25\] So I'm curious -- I've got maybe several questions that I'm gonna try to combine into one a little bit... And you can segment them any way you want. If you go through that optimization process, a) what does that output look like? How is that different from the model before you took it through the optimization process in terms of how you approach inference on it, and what are the limits in terms of that target architecture that you're trying to hit? You mentioned the Raspberry Pi, and in this day and age there are tons and tons of low-capability or low-power targets that you might want to run a model that otherwise would have been impossible. Can you describe what that looks like after that optimization and what the limits are on it?

**Luis Ceze:** Great. Okay, so let me tell you first of all what that looks like. So the output is really an executable. It's just an executable code for your model. That includes your model, plus a runtime; the runtime will \[unintelligible 00:21:08.22\] support for your model, that's tuned for that hardware target. With TVM you get a custom package binary for your model.

The way you call it - you load that binary and then there's an API to call... It could be a shared library. For example, one way of packing this whole thing up is there's a .so library (or .dll in Windows) where your model is just fresh, executable code, with an API that you call to do inference on. Does that answer your question? This is what it looks like as the output.

And then there's many ways of making it standard. You can put in a Python wheel and have Python bindings for it... There's many ways to make it easy to call it.

**Chris Benson:** Yeah, it does. As a follow-up - and I'm gonna say something extreme... As we're building bigger and bigger models, and we're taking things like GPT-3 and things that are very large, and we have this once-upon-a-time-unrealistic expectation of putting them into places that you would be like--

**Daniel Whitenack:** I think Chris wants to run GPT-3 on his smartwatch.

**Chris Benson:** You are closer than you realize on that one...

**Luis Ceze:** Absolutely. And we had people asking about this. There's a limit to that; you can't get around physics. So even if you compress it to the maximum, if it doesn't fit to the memory that you have, it just doesn't fit.

**Chris Benson:** I understand.

**Luis Ceze:** Or if it uses so much compute that it's gonna take too long to do the inference, then it's gonna be a useful output. And of course, in the process of searching what hardware makes sense, you can use a tool like the Octomizer. Let m just put a quick plug in here.

**Chris Benson:** Sure.

**Luis Ceze:** Octomizer is a software as a service platform that OctoML built, that uses Apache TVM as its engine. It's like a very easy to use -- TVM, as you can tell based on this conversation, is likely to be a more sophisticated stack for more general data scientists. in general, data scientists already have enough to worry about; making models that do the right thing is what they should focus on. With the Octomizer, we are raising the level of abstraction to match that. So you can upload your model, it has a nice graphical user interface where you upload your model, it tells you what the layers are, \[unintelligible 00:23:00.28\] you can click on the hardware targets that you want, or you can have it do this for you by running across them all and see which ones it runs best at, so you can get the highest throughput per dollar... We do support Raspberry Pi's now, so \[unintelligible 00:23:13.00\] If it doesn't, it's just gonna say "Hey, I couldn't run this model there." So then you know that, even doing all this magic, it does run on that hardware target.

Anyway, so back to what you were asking... Now on the limits, how do we know -- we can't get around physics, so there's only so much compute resources that you can afford in an edge setting, but there are plenty of new techniques that actually can twist and turn your model to make it fit. One for example specifically for language models that you brought up, something that we've done quite a bit of work on, is support for \[unintelligible 00:23:42.05\] So these language models are giants, but there are a lot of zeroes in it. As we all know, lots of zeroes - easy to compress, right? And if you wanna multiply something by zero, you don't even need to multiply it, right? And if it's a bunch of zeroes, why even write a bunch of zeroes in memory? Just say "Only write the non-zero values." Sure, you can do that, and that actually goes a long ways in using less memory and using less compute.

\[00:24:07.21\] I'll even go as far as saying that we can quite run GPT-3-like models on tiny devices, but we're getting close to running pretty large models because of good, sparse computing support, and also other forms of compression and quantization that makes big models fit in edge devices.

**Daniel Whitenack:** Just to follow up on the inference side of things - maybe this is part of what you're building with OctoML, because like you were saying, Apache TVM maybe is a lower-level thing for real experts, OctoML maybe is...

**Luis Ceze:** More accessible, yeah.

**Daniel Whitenack:** Yeah, it has a bunch of convenience built in... So I'm curious on that inference side; maybe you could contrast the two. If I compile a model with Apache TVM - you mentioned Python wrappings around that output model, and maybe there's other language wrappings... Is that as simple as sort of importing a Python library and then importing your compiled model and running an inference, or what other sort of workflow changes might you have to do to run an Apache TVM compiled model in terms of the Pythonic ways that people sort of are used to doing things?

**Luis Ceze:** It's exactly what you said, it's two lines of code. So the resulting Python wheel - you import it and you call inference on it, and that's it.

**Daniel Whitenack:** That's awesome.

**Luis Ceze:** Yeah. And that's the experience that we offer with the Octomizer. And then the Octomizer also has an API call, by the way. So if you want to invent the model optimization compilation to your workflow, you can use the Octomizer -- I don't \[unintelligible 00:25:32.19\] super-easy. TVM itself - you have to set up your task framework, you have to spin up some instances to run this auto-tuning and this optimization tuning component, you have to collect the data for the machine learning model based optimizations, and so on... And it's work, it pays off, but it's work you have to put upfront.

With the Octomizer you can replace that with two lines of in the API. You upload the model via the API, and then you specify your hardware targets, and then you start the optimization process and then when it's ready, you can download the resulting wheel that it can import into your workflow. So you can do all of that either via the web interface, or via this API.

**Daniel Whitenack:** Awesome. I know I'm super-interested in OctoML, and I know that you're kind of in beta now. It doesn't have such a long history. Maybe you could tell us how that came about, if it was sort of natural... Feeling some of these pains of the lower-level things, expertise in Apache TVM and the desire to have that be more automated and have some convenience around it... Could you give us a little bit more of the motivation there in your thought process with OctoML?

**Luis Ceze:** Yeah, absolutely. Maybe I can do a quick once-upon-a-time on OctoML as well. So we had worked hard on Apache TVM... It started as a research project and it got quite a bit of traction, being deployed in Amazon, Facebook, Microsoft and so on. And when running one of our conferences, we were like "Oh wow, there's quite a bit of interest here", but the folks who were attending were really machine learning researchers, engineers, or folks that have data science and machine learning experience, as well as software engineering experience. We said "Oh, cool, we want more people to use it. We of course wanna continue catering and growing the open source community."

So that's why we formed OctoML, to invest in Apache TVM and grow the community, grow the ecosystem, work closely with hardware vendors to enable more hardware targets on TVM. TVM today has a pretty broad set of hardware targets. It has service CPUs from Intel and AMD, and ARM CPUs \[unintelligible 00:27:33.18\] So NVIDIA GPUs, ARM GPUs, Intel GPUs, AMD GPUs, AMD APUs, we have FPGA support... We have a broad set. And a lot of these were done with us in partnership with hardware vendors, and some hardware vendors that go and put the work into the open source package.

\[00:27:52.03\] And the reason that I keep emphasizing open source here is that I don't think it would be sustainable to have a project of the diversity that TVM needs, or any sort of machine learning compiler needs to thrive. The diversity of models that it supports, frameworks, and hardware targets. The only way you make the diversity manageable in my opinion is by having an open and welcoming community that even competitors can collaborate. Kind of like Linux. Linux is a great story of success, and that's what we want with TVM.

And what we wanted to do with OctoML is enable more hardware targets and work with hardware vendors, but then also make the power of TVM and machine learning model optimization compilation accessible to the broadest set of users possible. And the way we approach that is by building a high-level service that makes it very easy and it's so natural that you'd never choose not to use it. That's really the goal of the Octomizer. And we made it into a SaaS offering because machine learning moves fast, as you know. Models change fast, and there's new hardware targets almost every other week... So the best way to do that is to actually package that into a service, because then we can take care of all of the complicated lower-level things that you don't want your data scientists spending time on.

**Chris Benson:** So you got me pretty excited about it as we've gone through this... With different people having their practical workflows that they're using, whether it's TensorFlow, or PyTorch, and they have a deployment string attached to it... And I know that you've mentioned it targets several frameworks, we've talked about the two biggies and stuff... Can you talk a little bit about how, first on the Apache TVM side, and then talk about where we optimally can use OctoML... But give me a practical sense of how do I get that into my work stream. What do I need? What are the limitations? What should I avoid ? What should I do? I'm just trying to get a sense of "How do I get started?" If I'm listening that you've sold us on what to do here, and rubber-meets-the-road kind of moment.

**Luis Ceze:** Yeah, absolutely. If you are so inclined and you want to do some software engineering adventures, you should definitely go to tvm.ai. There's plenty of tutorials there on how you can get started. There's a TensorFlow example, there's a PyTorch example, there's an ONNX example... And you can just go there. And that's how you use the open source offering there.

Now, there's many ways in which you can use open source Apache TVM. So you can use it just as a compiler in what we call auto-tuning. Auto-tuning is the machine learning based magic that I told you about, that searches for better implementations. For that you have to do a little bit more work. So you have to set up a benchmark infrastructure... It could be just your machine, but then it takes a little bit longer, because it needs to run a bunch of experiments... So there's tutorials for that.

If you have more experience with the lower-level parts of your framework and you're ready to use a stack like Apache TVM, I'll start with that route. Try and run through the examples there.

Now, if you have some work to do and you wanna get your model ready quickly, and you wanna enjoy some automation, you can use the Octomizer, because it's a full SaaS offering. Then what you do today, the way you support it is you serialize your model to ONNX, you upload the model, and then once you upload it, there's all sorts of hardware targets that you can click; there's a checkbox for NVIDIA GPUs, Intel CPUs and Raspberry Pi. You can choose the ones that you want, and then you click Octomize, and then you get a notification when the workflow is done. You get all the performance comparison across all the hardware targets, and across even different ways of compiling your models.

**Chris Benson:** So between the Octomizer and having the baseline open source project, you can kind of choose the level of abstraction that you wanna get into for what your workflow is. So you have choice that way, right?

**Luis Ceze:** You do have choice, yes. You have choice of how you want to take advantage of that. You can go through the Apache TVM route; then you do it and we'll support that. There's a thriving community that will help you. Now, if you really want to get started from day zero and not have to worry about that, then you go to the Octomizer, either using the web interface or the API, and then you can our support, and you also -- you get access to our ready-to-go machine learning models for the hardware targets that you care about.

**Break:** \[00:31:50.19\]

**Daniel Whitenack:** Luis, this is super-interesting. What I'm wondering -- one of the things that we mentioned a few times is ONNX, and I think that it sounds like some of what you're sort of centralizing around with OctoML is ONNX maybe as a recommendation, since you've mentioned it a couple of times... Could you maybe just give those who aren't familiar a brief definition of what we're talking about with ONNX? And also maybe from your perspective as someone maybe not working on ONNX day to day, but working on something that depends on that, how you see that project progressing and the momentum with that.

**Luis Ceze:** Great question. I want to emphasize that even though I used ONNX several times, we do support directly -- you know, if you go \[unintelligible 00:33:28.13\] I do tend to like what ONNX aims to do, because ONNX is just a way of representing your model. Essentially, at the highest level it's a description language. So you can have your model, you built it in memory, you just specify whatever framework you'd like to use, and you want to store it, so you need to describe it somehow. So ONNX is an agreed-upon way by multiple players in the space that this is a good way in which you can describe a machine learning model. That includes documentation of structure, your layers, what each operator does, as well as all of your parameters get serialized in one single package.

ONNX is evolving, and it has its ups and downs, and I think right now people are getting more excited about it; I think there's an uptick now. I'm sure there'll be other model description languages and exchange formats that will pop up, and we are ready to support those as well.

I do think that it's good to have at least one format of storing models that is generally adopted, widely adopted, because then if you keep your models that way, chances are that the software components that you need in your workflow will support your model.

**Chris Benson:** This field is evolving so rapidly right now, and you have not only each framework's kind of way of doing things, but -- I'm looking through the tvm.ai website that you references, and going through and there's like the Get Start With TVM, and there's so many different options... And I can't help but wonder - you're covering so many architectures, and with all those changes happening, and this is happening at light speed all the time, we're constantly getting bombarded with new things... And I know that I as a practitioner struggle to keep up at times with all the things... How do you do that? How do you keep the project going, keep it current, keep all these new things coming out? I'm assuming you don't sleep.

**Luis Ceze:** Yeah, it's a great question. I do sleep \[unintelligible 00:35:17.26\] \[laughter\] I have to keep my natural neural network working; the way we do that is by having good sleep and a glass of wine on Fridays, you know?

**Chris Benson:** A glass of wine is a very important part of that, too. \[laughs\]

**Luis Ceze:** Yeah, absolutely. So the answer to how you keep up is really having a strong community and nurturing it, and being \[unintelligible 00:35:37.25\] and encouraging more folks to participate. Looking back, I'm very grateful for the community, and I think we were lucky to have been involved in helping catalyze that community, because somehow, luckily, TVM was able to capture the interest of folks that build the frameworks, folks that build new classes models. \[unintelligible 00:35:56.21\] but it's essentially different aspects of your model that makes them more powerful and more general needs to be supported in TVM. All of that were actually contributed by community members, and we help make that happen; we put a lot of work ourselves, too.

\[00:36:18.00\] But then the hardware vendors are the ones that actually really fuel the pain, to be honest, of this growing complexity of the ecosystem that you've put very well, Chris. Hardware vendors today, they have to write low-level libraries that are tuned for their hardware targets, for each one of the major operators in these models. Every time models change, they have to go and tune it again... So they're always having to update it, and that's not sustainable. That's why TVM automating a lot of that made it very attractive for them to contribute to TVM. And they wanted it to be open source, because they also want to enjoy the simplification effect that the community has.

So since we incubated Apache TVM into the Apache Software Foundation, there was even more interest, and industry became more comfortable in contributing, because now there is professional independent governance for the project. Before it was a few grad students and a couple folk, some contributors sitting in a virtual room, or folks at the University of Washington, too.

Anyway, so that was a long answer to your question, but basically, it is by having an open source community and having the technical incentives for folks to contribute to it. That's how we deal with the growing diversity.

**Daniel Whitenack:** I'm curious more about that open source side. Could you give -- maybe there's people out there listening that are working on what they feel like might be the next really cool AI practitioner tooling, or data science developer tool, or something... They want to get this project out there, they want to have it be an open source project and get other people involved... Do you have any tips for those sorts of people out there that are working on tooling, working on new things, in terms of helping them understand how they might foster a community around those things, and maybe get a little bit of momentum going? What are maybe the key points with that?

**Luis Ceze:** That's a great question. I would say first recruit early users and truly listen to them and make them feel like they're part of your adventure here, and then you're helping them succeed, and their success is your success. We got lucky and we were fortunate that we had early users that were very involved in giving us feedback, and by showing that you care about their feedback and implementing quickly, and then that catalyzes the process.

So you kind of have to treat them as customers paid with love. So they're giving you feedback, and you respond to that by making their lives easier. So that's the first thing - really treat your community as well as possible, and respond fast.

Second, whenever picking the general thing, try hard and find what are all the other open source tools \[unintelligible 00:38:51.10\] that exist there that are very adjacent to what you do, and have a lot of clarity on what is your differentiation there. So what kind of new problem are you solving, how do you communicate that. If it's related to a research project, it might be a little bit easier, because you write a paper about it, and people read the paper and it's like "Oh, you're solving a cool problem" and they come and take a look at your work. So those are two things - a clear differentiation, and then recruiting users as early as possible, so you can iterate fast... And if you solve their problem, chances are they're gonna tell their friends and colleagues, and they start using it too, and that's how you catalyze it.

**Chris Benson:** I'm kind of curious, kind of in the same strain of that last question - you are affecting so many other communities out there, that may be commercially-based with a hardware vendor... There's a lot of communities involved in the targets that you're compiling to, and I can't help but wonder, how do you see those types of communities getting involved? Because you are essentially a pretty significant influencer in how those targets get used. Because if the compiler is really awesome, that benefits them in a big way. How do they choose to engage you? Do you need more engagement from those target communities to do better, and what kind of value can they add? As you're hitting Raspberry PI, I would imagine the Raspberry Pi community would have to be keenly interested in working with you on this.

**Luis Ceze:** \[00:40:16.21\] Yes, it's a great question, Chris. So ARM is already fully bought into the TVM ecosystem. They've built their CPU, GPU and NPU compiler on top of TVM. They're a very active contributor to the open source community and they work closely with us at OctoML as well. So some of the big players, of course, for example let's say NVIDIA - NVIDIA has a very mature, probably the most mature systems software stack for machine learning on their hardware, and arguably, that's a good chunk of their success. And even NVIDIA is interested in working with TVM. I've seen some commits from them. We support NVIDIA pretty well... And the point I wanted to make here is the following - for hardware that's really popular, the community is gonna do it anyways, even if the hardware vendors themselves are not involved. So we have really good support for NVIDIA, we did a bunch of work the community did a bunch of work because NVIDIA hardware matters. We have very good performance on NVIDIA hardware because of that.

The point here is not to just, say, compete with cuDNN and TensorRT... Of course, they know their hardware, they do well, in many cases we do really well in some cases that were not on their radar, and we want to offer users a choice of which one to use, and sometimes even choose it automatically for them.

In TVM there's something called best of both worlds. When you process a model through TVM, you can choose to either use cuDNN or TVM native. \[unintelligible 00:41:29.10\] and you compose this for the end user. What you care is that your model runs fast, right?

So the point I wanted to make is that for this big hardware, the community supports it. For emerging hardware vendors, honestly I don't know if they have any alternative. The alternative is to build everything in-house.

Let's say you are a new AI chip company and you have a great idea for a hardware mechanism that's gonna make a certain class of models run really well, and that's your business - you're gonna cater to this set of users. So \[unintelligible 00:41:55.10\] go and look at the ecosystem and you say "Oh, now I have to support PyTorch, TensorFlow, Keras", and like I said, you have to support these types of models. So you start looking at everything that needs support to connect to the rest of the ecosystem. It's a daunting task." So that's a huge incentive for them to come and use TVM. Because if they support a very clean code generation interface that we made very easy for new hardware vendors to come and be part of the ecosystem, I don't think they'll find a more compelling alternative, to be honest... Because how are you gonna spin up a team of 15 compiler engineers who are going to build your own internal compiler? That is just hard to imagine.

Basically, what I'm trying to say in a long way is that the way we made it easier to add a new hardware target and the fact that there's a community around it, and the fact that there's a lot of momentum already, sells itself to the new hardware vendors. And we see that by having hardware vendors come wanting to work with us, to do some enablement work for them directly - we do some of that for some hardware targets, but a lot of times we just see the new, smaller, emerging hardware vendors going directly to the Apache TVM. Does that answer your question, Chris?

**Chris Benson:** It does. It was a really good answer, actually. It satisfied it. Thank you.

**Daniel Whitenack:** Yeah, definitely. I agree. I have sort of a strange question as we get more towards the end here... What else out there sort of across the AI industry do you have your eyes on in terms of things that really excite you in terms of where the industry is going, or maybe particular groups that are innovating, or a particular technology that you have your eye on? What else do you have your eye on as you're looking towards the future of the AI industry?

**Luis Ceze:** Well, there's just so many things. Let me start with the shorter term and then go to the longer term. So in the shorter term I think it's really exciting what's going on in doing more and more hardware-aware network architecture search. There's some companies doing it, but essentially, as you evolve how your model looks like with network architecture search, you do that in a hardware way. I think it's super-important, because it's complementary to everything that we talked about here. What we talked about here is having a model that is ready to be deployed and you're just gonna compile it; but now having the model in the first place will actually be better for the hardware you create. So that's one of them.

\[00:44:07.12\] The other one is more automations in the data management side. For example, I love what the Snorkel.ai folks are doing. I don't know if you've heard of them, but they essentially have tools that enable you to construct synthetic datasets in a programmatic way, that essentially automates a lot of the work that's required for you to start building a dataset to train models.

And then on the hardware side, what I think is happening right now that is really exciting is just to see more and more reconfigurable architectures coming in the mix. I'm sure you've heard of CPUs, GPUs, and TPUs like accelerators... You've probably heard of FPGAs as well, which is essentially a hardware fabric that you can program very much in the same way that you design hardware, but it's not quite as fast as a truly application-specific chip, but it's pretty general, and then you can do a lot of meaningful things with it.

I find it exciting that those FPGAs are getting more and more tuned for machine learning. Xilinx has offerings that way, Altera is enriching their FPGAs with more blocks that are more suitable for new models. I find this exciting in the short term.

In the medium to long term I just love what's going on in between machine learning and life sciences. Just seeing machine learning enabling very large-scale genomics studies, just crazy amounts of data to go and make sense of, data that is incredibly complex, because nature is a complex beast... And then also using machine learning to design systems. People are using machine learning to design molecular systems, people are using machine learning to design aircrafts, people are using (what was it again?) reverse design, where you give it the properties and it synthesizes something that has those properties using machine learning... These are all things that I find really, really exciting to think about, because machine learning itself is also systems.

So using machine learning for machine learning improvements is pretty interesting. We do that to some extent, but I feel like we're just scratching the surface. So you can use machine learning to design machine learning chips, you can use machine learning to optimize machine learning training systems... And when you close the loop there, that's when you should embrace and let it evolve, right? \[laughs\]

**Chris Benson:** I remember a while back we had some guests from Intel and they were talking just about what you've just said, using machine learning for chip design... And yeah, the sky is the limit. You can use it for so many different things at this point.

**Luis Ceze:** Yeah, absolutely. And machine learning itself, going back full circle now - as a workload, it's so tolerant to what we call noisy execution. By that I really mean - if you have flaky hardware, there's just no way around it. As we go to nanometer technologies, which - I don't know if you've heard, IBM just announced that they are getting to a nanometer process, making a lot progress with it; that's kind of crazy to think about, right? And it's likely to be very noisy and have very flaky transistors. The way we make use of that is not just by doing the typical systems design of layering error correcting - we should do that too, but with machine learning you can use that directly, because it's so tolerant to noisy execution. There's many interesting possibilities there, for better energy efficiency; machine learning wouldn't get as much bad rep by using a whole lot of energy, which I'm sure you've heard that before, right? \[laughter\]

**Daniel Whitenack:** Well...

**Luis Ceze:** That's a whole topic for a whole other conversation, so...

**Daniel Whitenack:** Yeah, and I hope we can have that conversation sometime. Well, Luis, I appreciate you taking time to help Chris and I fully optimize our discussion on the podcast to maximize interest. It's been great, I really enjoyed it. We'll have links to TVM, and OctoML and all the things in our show notes, so I definitely encourage our listeners to check those things out. I know I'll be playing around a bit after the episode. Thank so much, Luis. I really appreciate you taking time.

**Luis Ceze:** Thank you. You guys are really fun. I can't wait to hear your other episodes for other topics as well. You and Chris are really fun. Thank you.
