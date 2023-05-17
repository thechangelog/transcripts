**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I'm a data scientist building a tool called Prediction Guard, and I am not joined today by my co-host, Chris, but I am joined by an amazing guest, who is an expert in all things model optimization, and efficiency, and running on CPUs, which is super-exciting. I've got Mark Kurtz, who's director of machine learning at Neural Magic. Welcome, Mark.

**Mark Kurtz:** Thank you, Daniel. Thanks for having me on.

**Daniel Whitenack:** Yeah, yeah, of course. So let's maybe just start out with a kind of state of model optimization right now. So first off, could you kind of describe - when you're talking about model optimization, or that set of tooling, what do you mean by that, and how does that fit within maybe the things that a data scientist or an AI person would want to do?

**Mark Kurtz:** So whenever we're looking at model optimization, we're usually focused on a few different techniques, but the ultimate goal is to make the overall model smaller and faster. Neural networks are known to be very large models, especially compared to more traditional machine learning, and it turns out the size of those models is the important part in terms of exploring a large dimensionality of the space, but it actually doesn't use all those pathways at inference time. So what we specialize in is specifically pruning, where we're going to remove connections within that network, quantization, where we're going to reduce precision of those connections in the network, so going from, the typical FP32 down to \[unintelligible 00:02:24.19\] And then additionally distillation, where we're taking larger models and trying to teach a smaller model to mimic the capability and the functionality of that larger model.

So it's kind of overall high-level, and yeah, it's a very exciting space right now; it's kind of exponential in terms of the number of research papers that are constantly coming out on the topic. Everybody's very excited about sparsity, specifically, mainly because you can turn these large models and get rid of up to 95%, even 97% of the weights are actually useless in these. Obviously, you can use that for a lot of efficiencies around performance and energy, and that's specifically where we've been focusing in at Neural Magic, and what I've been focusing in on my work.

**Daniel Whitenack:** Awesome. Yeah, I definitely have felt this problem... So I'm sort of asking this question maybe for others out there that maybe haven't felt this problem as much... Why is it important to make models smaller, or make them more efficient? How does that fit within what enterprises or even users running smaller applications - why is that important for people, I guess is the question?

**Mark Kurtz:** Generally, there's going to be two cases that we're looking at in terms of deployment. One would be an embedded space, where we're running on the edge, and trying to work there... So generally, you want real-time latency, and optimizing the accuracy as best as possible. So if you're using an object detection model, you want to make sure that, for example, you're on a security camera, trying to draw object detection, and make sure that you know when a person walks in a frame, and whether or not that's alarming or not. Versus a dog, or something like that. So in general, on that edge application, what you can do is use a larger model, remove a lot of the pieces from that larger model; so you can keep the accuracy of the larger model, but take up the space of the smaller model. So a significant improvement in terms of accuracy on that edge device, while still maintaining the constraints that were set for you in terms of memory, and latency that you need to request back with.

And then the second one would be on the server side. And that's generally where we're looking at more throughput-based applications, and potentially also latency if they're shipping the data up to some server to be processed, either on NLP, or computer vision. But overall there, what we're looking at is - especially whenever people get into larger deployments on ML and neural networks, the cost significantly shifts, not from training, but to deployment. For a lot of larger enterprises that actively deploy 80%, 90% of their costs is purely in deployment on these machines. So what you can do is take the exact same model that you have, reduce, again, the amount of compute they need to run it, so that one, it'll run faster, but two, ultimately what that means is that it's going to run significantly cheaper. And we have cost savings on the order of 10x, 20x, even larger if you're really trying to specialize and Optimize. So it can be a significant reduction once you're at that scale.

I would say definitely if you don't have anything deployed yet, don't worry about optimizing the model, worry about getting a use case that works, and something that you can prove out. As soon as you go into deployment, model optimization is a great thing to start, because it's essentially just free performance that's left on the table, that can significantly affect your bottom line.

**Daniel Whitenack:** \[06:02\] We've mostly been talking about kind of like model size and optimizations, and I do want to get sort of down and get into the nerdy stuff around like how some of this works. But before we do that, I'm also curious about this element of deployment on GPUs versus CPUs. It seems like some of what's indicated, at least in the tooling that you're building, is the potential to take a large model, which might require a GPU at inference time, and potentially run that on cheaper commodity hardware that only has a CPU, maybe doesn't have a GPU. What is the state of that now, and how far can you push that? Maybe also how can people best think about that in terms of when and when that might not be possible, I guess?

**Mark Kurtz:** As you said, we specialize almost entirely on CPU performance. And in that, actually our latest ml inference results on MLPerf has have come out. So in that we show that we're running faster than T4's, and A40's, and things like that, on just commodity CPUs; so server-based CPUs, stuff that you have on your laptop, desktop, things like that. And it's very surprising, that what's thought of as these little CPUs can outperform the GPU. And we see this generally across every domain that we've tackled. And that's been across image classification, object detection -- excuse me, segmentation... And now we're working in the NLP and NLG space, and actively coming out with that. But overall, we're seeing the same use case where these models are over-parameterized, we can take away a lot of that compute, and what that means is that you can actually get the CPU and the GPU about equivalent in terms of \[unintelligible 00:07:57.17\] the sparsity and the dynamic setup of CPUs, we can run and skip all those zero multiplications. So a significant reduction in compute, they're about even, but then the CPU has a unique cache hierarchy, which means that we can reuse that cache more often than what you can get on a GPU. I'm on an L2, being extremely quick, faster than a GPU's main memory, and L3 being about equivalent.

So overall, what we do on a performance optimization is skip all the compute to get even, and then use that cache hierarchy as efficiently as possible on the CPUs so we can get faster memory access than even you can get on a GPU. And we pay a little bit more by doing a little bit more compute by doing that, but overall it works out and you can actually beat the GPUs in that setup with just pure software.

**Daniel Whitenack:** I anticipate this is maybe a question that you get sometimes, but it's like, you hear so much about the necessity of GPUs for running these large models. Do you find generally practitioners are just unaware of this possibility of running these large models on CPUs? How has that been for you and those that you work with that are actually doing this amazing work and have these awesome tools? Like, how has that been in terms of overcoming that barrier of perception that people have?

**Mark Kurtz:** It was a barrier that we had especially early on, a couple years back, where it took a lot of convincing to even get in the door, to talk to anyone, because they just didn't believe what we were saying. Now it's gotten to be quite a bit better, especially with the newer software that's been pushed out, and the newer chipsets on CPUs. They're getting a little bit more even in terms of GPU, so it's within a stone's throw, to try and match GPUs, so people are a little bit more accepting of it...

\[09:51\] But yeah, whenever we show them the numbers, generally the first reaction is "Well, let me try it out on my hardware, because you guys have gotta be doing something weird. Let me try to do that, let me replicate that." And as soon as they do, then the next question is "Okay, well, how do I do this to my model?" And that's usually where the tricky part comes in, is model optimization hasn't always been the easiest thing to do. It can take a lot of research to enable new architectures, and things like that... But that's what we've been also specializing on at Neural Magic, is making all the research that we're doing, being able to put that into open source, and also building out a SaaS platform on top of it, so everyone can easily play with hyper-parameters and get something that is consumable. But I would say that's probably been the biggest gap in terms of trying to get people off of GPUs and onto CPUs, is the model optimization that needs to take place first, to be able to run faster than the GPUs.

**Daniel Whitenack:** You talked a little bit about sparsity, which I want to dive into over time, and I want to get to those tools and open source stuff... You mentioned these large models, and people are probably used to hearing these numbers, 3 billion, 7 billion, 13 billion, and up from there, that these models have in terms of numbers of parameters. Could you describe a little bit what you mean when you say 90% to 95% of these connections? Or maybe less than that, but a high percentage in some models have no impact on the actual forward pass or inference in the model? Could you describe a little bit more what you mean by that?

**Mark Kurtz:** Yeah, definitely. And I'll take two steps to doing that. One is just covering kind of the 90%, 95% class, at least where we've been able to get to on those, and the second is looking specifically at large language models. So for the first one, whenever we're looking at getting rid of 95% of weights - let's take ResNet-50 as an example. This is our toy benchmark model, this is essentially what \[unintelligible 00:11:47.02\] we prove out all of our technology on, because it's a common feature in MLPerf, and for most performance to us.

So what we can do coming in is looking at those convolutional layers; it has - I forget how many million parameters with that, but it's definitely not the 3 billion, 7 billion or up on top of that. But within that, we can actually zero out; so what we're doing is taking all -- imagine taking all those parameters and dumping them into a giant array, and we're just going to zero out the ones that are not important. And figuring out the ones that are not important is part of the research. The easiest assumption is just saying that the weights that are the largest are the ones that you want to keep. So the ones that are furthest from zero are the ones that you want to keep. Generally, you can think of those in two ways. One is that as the model's training and being regularized, the weights that don't matter are going to move toward zero. And then the other thing is during that forwards pass, the weights that are higher magnitude have more of an effect on the output. And everything else is going to be noise in between.

So we're able to essentially get rid of just -- and whenever I say "get rid of", I mean setting those parameters to zero within 95% of them. So you're left with 5% of your weights that are nonzero. And that's actually all that you need to preserve the accuracy on ImageNet for ResNet-50, for example.

And some quick kind of intuition in terms of how I've been able to think about this, and why it works, and things like that, you can see as we increase the size of our dimensionality in our optimization space, what we're doing is - and there's a few research papers out on it - that we're able to connect more of the local mins. So the optimization process will slowly converge further and further down, because more of the local mins are connected. Generally though, there's only a few of those pathways that you actually need to connect those local mins; so all that we're doing is we're following down that most optimized pathway and removing everything else around us in terms of that dimensionality.

So it's kind of one of those things that as you're training, it's slowly selecting the weights that matter, that get you down to that local min. And there's very few -- so the important part was that large dimensionality of the optimization space, but not every direction mattered, right? So then we can get rid of it.

\[14:01\] And then diving in on the LLM side, large language models - we actually have a recent paper that came out from one of our principal research scientists, Dan Alistarh, called SparseGPT. And that's where we're looking at taking OPT and BLOOM models all the way up to 175 billion parameters, and being able to optimize those and remove as many weights as possible, all in this case in one shot. So just using the model without any retraining, we're able to get rid of around 60% of the weights without doing anything. And there's a new paper out of Cerebrus, actually, that was looking at the LLM story, and they're able now to get to 80% sparsity on these LLMs with retraining.

So that's kind of the research direction that we're headed down now, is proving out how optimized we can make these models. Because there's also a lot of interesting stuff that happens with the large language models, specifically because it's generating one token at a time, very latency-bound, and that means that it's a lot of memory excess to load those weights. So if you can quantize those and then get rid of half of them, you're already at anywhere from a 4x to 6x speed-up just on your inference times. And that's generally where we're focused and looking at currently, to try and get those LLMs to run faster.

The other thing to call out for those too is 7 billion parameters, and 175 billion parameters - those don't fit in a single GPU. So now you have clusters of GPUs to serve one model. And a lot of that compute is just completely wasted, because all that it's going to is trying to maximize the memory on the GPUs. For CPUs, you can throw a few terabytes on there and it works out fine. So that's the other thing I'd call out with the LLM in terms of GPU versus CPU.

**Break**: \[15:52\]

**Daniel Whitenack:** This is really interesting, Mark. I want to follow up on what you were just talking about, which I think is a really - it's sort of a subtle point, but it's really interesting in that... I think if I understood you right in what you're saying - let's say that I have one of these large models, 175 billion parameters or whatever, and even for inference, I have the necessity to have multiple GPUs just to load that model into the memory of the cards. Whereas on a CPU, you can have terabytes of memory; what I'm assuming is you can load that in as long as you're able to execute it quickly, which I guess is the other piece. So am I right, you sort of have to have both the ability to load it into memory, and you have a bit more space in that on the CPU side, but then you also have to be able to execute it very quickly, which I guess is why you would think about both space and sparsity. Is that an accurate way to put it?

**Mark Kurtz:** As you said, you have a total space you need to take up, and then a minimum latency that you want to respond to the user outright, and that's going to set the constraints for your hardware. And for CPUs currently, at least for the smaller models, you can get to a usable speed on those. If you've seen LLaMa.cpp, they're doing \[unintelligible 00:17:19.18\] and things like that on smaller models, and they're usable, but they're less accurate. So what we're trying to do and what we're actually working on right now is making sure we can get that GPU-class speed while maintaining the large memory advantage of CPUs. So you can deploy this 175 billion parameter model on something local, and you don't have to worry about data privacy, or anything like that. It's just there, working and available, and highly accurate for you.

**Daniel Whitenack:** \[17:47\] I've definitely heard people that I've talked to who have tried various optimization techniques and have maybe been dissatisfied with the performance hit that they're getting, not in terms of compute, but in terms of actual model performance, or accuracy, or whatever. Does that performance hit often come about because of the quantization that's maybe part of the optimization techniques? Or are there multiple sources of that performance? How should people think about that?

**Mark Kurtz:** I think the biggest thing there is honestly just the amount of choices that people have to apply, and not knowing when to apply them. Because generally, for quantization for example, you can apply quantization to pretty much anything at int8 for both activations and weights, and have it recover. But there are definitely cases where - for example, we've been quantizing EfficientNets quite a bit on the image classification side; there's one or two layers in some of these that are extremely sensitive for whatever reason to quantization, and you can't quantize those. So removing those,, then you get 100% recovery.

So it's a lot of these kinds of little things that researchers know intuitively, in terms of having used this constantly, what will work and what won't. But that's not really coded into software anywhere to make it easy for people to use. So generally, they'll go through, try and quantize, and there's no feedback loop, there's no methodology; it's just "Hey, I was able to apply it in one-shot, but it lost 5% accuracy." I'm talking about quantization. But if you do a quantization work training scheme, generally you'll recover all of that back, and it generally works completely \[unintelligible 00:19:29.15\]

Same thing on pruning. Pruning - you'll definitely see more of a drop, and it's much more of a requirement to do training-aware on the pruning side, at least to get to really high sparsities. But you definitely will see this kind of the choices that are made in the hyperparameters that are chosen - those can significantly affect the recovery and the quality.

So generally, I'd say if they were seeing drops in performance, it's primarily because of those choices, and those issues, and just the wide breadth that's available right now, and not knowing how to narrow it down. And that's what we're actively working on. Does that make sense?

**Daniel Whitenack:** Yeah, yeah, that's good for people to -- myself, I want to develop a little bit more intuition around these things. Because like you say, sometimes you're just like "Oh, here's the command that I run on the command line", and I get this file out that is smaller, but I don't have a great intuition about -- it's similar to hyperparameter tuning, right? That takes time to figure out "Okay, how should I think about changing my learning rate if this happens, or if that happens?" that sort of thing.

You mentioned one thing which I think would also be good to kind of clarify and help people understand, is like training-aware optimization, versus just, I guess, optimization... Or I don't know what the counter to that is. Could you talk about those, how they're differentiated? Some people might guess what that means, but how are they differentiated, and how does that work out in practice, in terms of how you would optimize a model?

**Mark Kurtz:** Technically, you have three categories generally available \[unintelligible 00:21:07.16\] training-aware, and then we have post-training or one-shot, which are kind of interchangeable... And then we additionally have on sparse transfer, which is something that we've been pushing a lot, because the research has worked out quite a bit for it. So I'll cover all three of those in a little bit more depth.

So for training-aware, what we're doing is taking the exact same model that you're wanting to deploy, and the exact same dataset it was trained on, and continuing the training process further. So while we're continuing that training process, we could be continuing it -- this is where the hyperparameters come in, but generally, it'll be about half the time that originally took to train it; we'll train it for that much longer. And as we're doing that training, we're iteratively pruning away or we're applying quantization, or both. And the reason we're continuing that training is because as we're iteratively applying these optimizations, we're slowly moving the model away from its local min, and it has to adapt and adjust back. So by slowly doing that and training over some time, we allow small jumps that the optimizer can recover from, and adjust the remaining weights for, rather than doing it all at once.

\[22:15\] And the all-at-once piece is where we get into post-training and one-shot, where we're not going to try and retrain the model at all, we're going to take a small calibration dataset, and then we're going to use some heuristics or algorithms to figure out using a calibration dataset how to optimize that model and remove weights, or quantize.

The most common case would be static quantization. We're using a calibration dataset to figure out the activation ranges for each layer. And once you have the activation ranges for each layer, you can set up a simple quantization scheme to say "This layer is going from negative six to six. Now I need to fit that range into an int8 scale of 0 to 255", and be able to map that in. So that would be a simple post-training or one-shot application.

And then the final one is sparse transfer, which works exactly the same as transfer learning or fine-tuning, it's just we're starting with a sparse model to run through, and that's a lot of what we've pushed up in Neural Magic into our SparseZoo, are these open source sparse models; we have sparse BERTs, and ResNet-50s, and YOLOv5s, and things like that. And you can just take those, plug in your dataset, and transfer over to it. So the sparsity map stays in place, and it just adjusts the remaining weights to fit your dataset. We have a few papers out on that as well, that shows that sparse transferring works just as well as regular transfer.

**Daniel Whitenack:** Yeah, that's really interesting. I guess this would somewhat depend too -- if I'm just thinking of like the average practitioner out there, probably in a lot of the space that I work in, in like the larger language model area, I'm not going to be able to retrain one of these large models on the original dataset, right? Or even half of that. Or for half of the epochs, or whatever. But these other things are certainly things that I do all the time, like fine-tuning, transfer learning... So it's cool to understand that there's options out there. Am I correct in assuming that - you mentioned the SparseZoo that people can find on your website, and we'll link in here to that... Researchers, your team, practitioners, whoever are the people out there are also putting in work to actually release some of these sparse models publicly to the community, so that I can take those and then maybe do fine-tuning on that; or maybe it's just good enough from what's released in the community. Could you tell us a little bit about that community, and what's being released?

**Mark Kurtz:** So on the open source side, pretty much everything that we have on the SparseZoo currently has either been from our lab... We have a few that are from Intel's lab up as well, and some Hugging Face examples, and things like that... It's primarily because a lot of the sparsification research is all built around a few models, like ResNet-50, BERT, and things like that, and they don't expand it out past those models to prove out their algorithms. So we have the best of those, and then - yeah, that's exactly what our team is working on. And we get some community contributions in every once in a while for sparse models that people have generated or transferred.

So our goal is to be able to push these up, so that as you said, anyone can come in from the community and be able to pull those down and get value out of those models. So you can think of them as sparse foundational models, rather than the dense foundational models.

**Break**: \[25:58\]

**Daniel Whitenack:** Mark, in addition to the SparseZoo, which is really cool, I know that Neural Magic is producing some pretty interesting and useful tooling otherwise as well, in terms of actually doing some of this optimization themselves... And I see certain things - DeepSparse, SparseML... Could you describe a little bit about... If I'm a practitioner, I have a model, and I want to do optimization, what does that look like for me right now with the tooling that's available?

**Mark Kurtz:** So we have SparseML, which is our open source model optimization framework. It's built primarily on top of PyTorch, and then we have integrations with Torchvision, Hugging Face, YOLO, \[unintelligible 00:26:54.14\] pretty much all the common repos that most people are using we've already integrated with, so you can use our integrations and just plug in your model and go along with that.

And then the other part is that we have recipes, and I'll go through recipes in a second. But we have those kind of precoded integrations, or you can create your own integration. Usually, it only takes a few lines of code; we've done all the hard work in terms of making sure that whenever we want to optimize a model, that you just have to wrap the optimizer in PyTorch. Essentially, wrap the model and the optimizer, which is what our code handles, and then it's going to go through and handle the optimization \[unintelligible 00:27:27.22\] So there's no coding really from your side, or from the practitioner's side, on implementation.

And then the other part is then coming up with an optimization recipe that people want to use. And what that's going to lay out is saying that "I want to prune from this epoch to this epoch, for example, and then apply quantization, and target these layers, and at this sparsity level, things like that." We have automated ways to generate those, as well as examples on the SparseZoo and in other places.

That's generally what it would look like, is get up and running... We definitely recommend checking out the SparseZoo first, see if there's anything that you can do to just transfer the model onto your dataset, because those are the quickest and fastest ways. And then otherwise, if you do have a specific model architecture that you're looking at, then you can start going down this integration pathway and generating your own recipes. And that's the current state that we're out.

The other thing that I wanted to call out is that we're working on a SaaS platform right now to make all of this more intuitive, so you have a UI to be able to predict where that model is going to end up before you start optimizing it. And then additionally, actively benchmark it across your different deployment scenarios. So this is called Sparsify. We've had an old kind of alpha state for a while that was downloadable, and we're actually going through alpha testing right now. So anyone that is interested in trying that out, definitely reach out. We're going through Alpha currently, looking to go to beta in probably the next month or two months, and then a GA following up after that. So definitely check that out as well.

**Daniel Whitenack:** Yeah, that's great. Yeah, I love how you're thinking towards usability as well around these things, because I do see this as something that kind of blocks people on optimization a lot, because they get stuck... Like you say, it's like "Well, what recipe do I use here? It seems like there's a million options. Where do I start?" So that's really awesome to hear. Just so people can understand - there's options available in the SparseZoo; I'm kind of scrolling through there now. There's a lot -- even ones that I know that I use, like DistilBERT, which is fine-tuned on Squad - I use that all the time for question-answer, and apparently I should use the sparse one, because that would help out a lot, both in terms of compute and speed.

Let's say that a model is not there... And in particular, people of course are interested in like all of these things being rapidly released all the time. So one of the things I know that I've seen in optimization platforms over time is it's hard to maybe support new architectures as they come out... So how are you all approaching that, and what is the state of being able to be flexible with these optimization schemes for a variety of architectures?

**Mark Kurtz:** \[30:21\] Looking at the base framework that we have pushed out in SparseML, for example, everything's implemented such that it's supposed to be able to run with any model architecture. So there's no real big assumptions on there other than you have convolutions, and you have linear layers inside of your models somewhere, that we can target for optimizations.

So everything's set up very generically, which means that whenever there is a new architecture that comes out, or new weights, things like that, it's going to take some time for us to tackle that, and that's if it gets onto the list of top-used models, things like that... But that is the nice thing about having an open source community, is that people are welcome to come in the tooling, and the framework there should work out of the box with everything... And they're more than welcome to be able to commit or push up whatever they're working on. And we have an active Slack community and GitHub community for people to come in. Our engineers are actively on that. So they can come in, look at it and easily get support on any issues they're running into.

**Daniel Whitenack:** Awesome. For the listeners who are wanting to get plugged into this, we'll make sure and include the links to the Slack group and the GitHub in our show notes, so make sure you visit there and get plugged in and start optimizing your models.

As we kind of get a little bit closer to the end here, I'm wondering about a couple of things. One is I know that - like you're saying, you're actively involved in research in this space... What trends are you seeing in research around optimization, and in particular, what are the directions that your team is sort of excited to go into in the near future in terms of the research side of this?

**Mark Kurtz:** So I'd say there's two big trends right now. One is around the focus on post training. Our principal research scientist, Dan Alistarh - him along with his lab came up with this algorithm called OBC/OBQ, which we actually have a webinar which will have already aired by the time that this comes out... It's airing tomorrow. But that algorithm specifically is where a lot of effort's going around, which is requiring as little data as possible, and no retraining, and trying to increase sparsity as much as possible. So that's one of the key things that people are trending down, is trying to do that.

The second one I would say is a large push around quantization in terms of getting to lower bits. And that's something that's been around for a while, but it's something that's becoming more and more prevalent as we're looking at the larger models... Mainly because their execution time is mainly dominated by trying to pull in these large matrices of weights.

So there's been a big push there now around trying to get down to -- you know, pass int8 down to int4, int3, int2 quantization on these active representations. I'd say that's the other trend.

The final kind of bonus trend that I'd throw in there, because I said two - the third one would be more research around sparse training. So specifically trying to figure out how to start with an unoptimized and untrained model, and be able to make it sparse from the start. And then \[unintelligible 00:33:35.11\] training is generally what we do to guarantee accuracy. We'll start from a dense converged model, and then iteratively print on top of that, which adds training time, right? So now there's a lot of research going into trying to figure out how quickly the model can be pruned, and then be able to carry that over as it's straining. So that's where the other big piece is. And all three of these are definitely active areas that we've been investing heavily in, especially looking at the journey of AI space now, going through that.

**Daniel Whitenack:** \[34:08\] Yeah, I know it must be a crazy time for you all, just like it is a crazy time for everyone... But yeah, I think this is a really important piece of it. I know one of the trends we've even talked here on the show about - it seems like a lot of people are talking about serverless deployments of machine learning, deep learning models, and I know a lot of the issues related to that, and things that people are dealing with is cold start time, and loading models into memory... I don't know if that's impacted you all at all, but it seems definitely relevant. Like, if you're gonna run your model serverless, you probably want it as small as possible, I would imagine.

**Mark Kurtz:** Yeah, absolutely. Absolutely.

**Daniel Whitenack:** So you mentioned where people can find out about Neural Magic - on Slack, on GitHub... I would really encourage people to do this. As we close out here, what are you kind of personally excited about during this -- I mean, like I say, it's a crazy time for everyone right now, with generative AI, and the way things are trending... What's exciting to you right now about the AI community and certain things you're seeing? What do you see as kind of positive trends, I guess?

**Mark Kurtz:** The part that I'm most excited about is that generative AI space, specifically in being able to augment humans. Obviously, there are a lot of privacy concerns, and data concerns, and bias issues, and things like that in this, which I don't want to see LLMs deployed everywhere becoming a default response for like Google search, or something like that. But it is really exciting to see, even in my day to day, starting to use these actively to augment what I'm doing around content generation, and framing, and things like that.

So that's one piece that I'm really excited for. And with the work that we're doing at Neural Magic, we're especially looking at these, because one, we want to see that continue to grow in open source, and I think that's been the other push that's been really big, and really exciting to see, is that whenever GPT4 came out, it was completely privatized; they've put out a little white paper on it that had no details about it at all. A lot of data concerns and things like that within that. But the open source community has already released - and I can name probably ten models so far that have been released since then, that are ChatGPT-like, or GPT4-like. So it's really exciting to see that.

I think the next stage from those open source models is going to be making them runnable anywhere, right? So you don't need this big GPU cluster farm to get something that is usable. And that's where we're really looking at going. We're actively working on the LLM deployment issue right now, and hope to have something out in the next few weeks, next few months that people can start actively using, download it, they can run it anywhere they want, on any CPU, and it'll be just as fast as GPUs.

**Daniel Whitenack:** Cool. Yeah. Well, keep us posted. I know I'm personally interested in that one, so... Yeah, thank you so much for joining us, Mark. This is a really fun conversation. I love getting into the weeds of these practicalities, because this is a topic where people get stuck a lot, is on the deployment side and the optimization side. So yeah, thank you for all that you and your team are doing at Neural Magic in this area... And yeah, keep up the good work. We're excited to see it. So thanks for joining.

**Mark Kurtz:** Thanks, Daniel. It was great talking with you.