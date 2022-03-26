**Daniel Whitenack:** Well, welcome to another Fully Connected episode of Practical AI. In these episodes, Chris and I keep you fully connected with everything that’s happening in the AI community. We’ll take some time to discuss some of the latest AI news, and then we'll dig into some learning resources to help you level up your machine learning game. I’m Daniel Whitenack. I’m a data scientist with SIL International, and I’m joined, as always, by my co-host, Chris Benson, who is a tech strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing great, Daniel. How are you doing today?

**Daniel Whitenack:** Doing pretty good. How's the strategy world after our last Fully Connected, when we were talking about innovation teams and stuff? A lot of those ideas have been swirling around in my mind, and I just figure that's what the life of a strategist -- like, you're thinking about those things all the time. So I've been thinking about you over the past week as you've been strategizing.

**Chris Benson:** We pretend like we know what's going to happen next. It's a great gig if you can get it.

**Daniel Whitenack:** Yeah. Well, that's the thing. Isn't the saying like, if you try to predict the future, that's the one thing you can be sure you're going to get wrong?

**Chris Benson:** Yeah, yeah, yeah. I'm pretty okay being wrong, too. I'm just saying. \[laughs\]

**Daniel Whitenack:** Yeah, you sort of embrace that.

**Chris Benson:** We did the strategy one, and then I know we've talked about data fabric recently, and that's also been another interesting thing. I'm still working on that pretty intensely in some stuff that I'm doing... And having a good time, because you know what? This whole AI thing keeps rolling forward.

**Daniel Whitenack:** Yeah, yeah, definitely. And there's something I wanted to bring up in this episode and talk through with you... It's not like an extremely recent thing. I mean, it was back in, I think, August that some of this came out, but we haven't talked about it yet, and I realized we haven't talked about it yet. And at the time, there was a lot of language floating around that I didn't really know what people were meaning when they said this stuff. I've kind of circled back to some of that and kind of figured out what we're talking about, at least a little bit, and I'd love to talk through that with you, and that's around the topic of foundation models.

\[04:01\] So this is something that was work done at Stanford University, actually in a center for research on foundation models, CRFM, at Stanford University, and they came out with a fairly lengthy and very interesting report on this topic, which they're calling Foundation Models. And I remember at the time people were sort of responding to, I think, mostly the name foundation models like, "Oh, what do you--". Maybe there's some hubris around saying, "Hey, we're working on foundation models, which are the foundation of AI." Clearly, they've also released some articles around this, or blog posts, and I think that clearly wasn't, at least, their intention... But it's a super interesting article. So the article that they wrote is on the opportunities and risks of foundation models. First off, I guess, Chris, have you come across this term?

**Chris Benson:** I have come across it, and I too have found it confusing in the same way. And so this is an interesting article that you've found here. Do you want to give us a definition?

**Daniel Whitenack:** Well, I figured that being in the good spirit of a programmer, I would just rather copy and paste than create my own... So we'll go for the definition from Stanford.

**Chris Benson:** Okay.

**Daniel Whitenack:** And that's actually, I think, a good thing to start with just sort parsing through. So they say, "We define foundation models as models trained on broad data (generally using self-supervision at scale), that can be adapted to a wide range of downstream tasks." So let's take a step back and parse through that. I think most of our listeners are familiar with some type of models, that jargon. By this, probably we're meaning mostly neural network type of models, modern model architecture, but basically some sort of parameterized function in code, that is trained based on some data using a training algorithm of some type, an iterative training process. So that's a model, and they're saying foundation models are trained on broad data, generally using self-supervision at scale. So some of those terms, particularly self-supervision, might not be the most familiar to people. Have you run across this in your own work, Chris?

**Chris Benson:** Yes, in terms of different levels of supervised learning and the fact that we are now more and more training models that are either unsupervised, or at some level between that, self-supervised. The thing that I am curious about here is how should I think about this in terms of transfer learning? Is this something that I would use as a base for transfer learning to build upon?

**Daniel Whitenack:** Yeah, I think that when they're doing their report, two things or the two pillars on which foundation models, that they're calling them, are built - if I'm remembering right, they talk about transfer learning and scale. So for those that are maybe familiar to transfer learning, that's where you have some sort of pre-training that goes on, and that's on a task that's maybe related to the task that you want to eventually do, but then you sort of transfer-learn or fine-tune that model for the actual downstream task which you're interested in, which is different from the pre-training task.

\[07:51\] And so I think it does get to that, Chris, because they're talking about a variety or a wide range of downstream tasks. So this is the scenario where you had some pre-training that happened on one of these foundation models, a large model, and then your transfer learning, or maybe in a zero-shot or few-shot way, that model's able to perform a variety of downstream tasks. So it would fit into that zone of transfer learning, zero-shot, few-shot type of scenarios. So that's one side of it, that pillar of transfer learning.

The other side is scale. Now the interesting, I think, connection between scale and self-supervision is that in the, I guess, more traditional supervised machine learning world that we started with, you always had a dataset that was annotated or labeled for the task that you're interested in, and then you change your model on that dataset. The problem with that is that that's hard to scale, right? It's hard to scale across a wide variety of tasks because you have to have a data set for each of those tasks, and it's very expensive and time-consuming to create those labeled datasets. But also, if you think of the size of even one of those datasets, the more data you need or the more complex task it is, you might need to label a whole lot of data.

For example, the question-answering task in natural language processing - I've learned, because I'm working with some of that data now - it's really time-consuming to build those datasets or conversational AI data sets. Sometimes a lot of very hard and difficult work goes into making those.

So if you want to scale your datasets for training in that sense, self-supervision is actually really kind of another important feature here of these models... Because let's say you had just a bunch of text, just like blah, a bunch of text, right? Well, you can actually, in a self-supervised way, create your own training data to train this foundational model or this large language model by - let's just take some sentences, remove words and say the task is, "Tell me what word went here?" And since you are the one that took the word out, you know what word should go there. So you are self-supervising this pre-training task, which is much more scalable in terms of preparing the data for training.

**Chris Benson:** So I misused the term earlier. I was conflating unsupervised with self-supervised. Pardon my confusion there.

**Daniel Whitenack:** Yeah, it's confusing terminology, right? There's the semi-supervised, self-supervised, unsupervised, supervised... There's a lot of supervision going on of different types. So yeah, it's worth kind of diving into those. But yeah, I think the idea is we're really talking about scale, and you can't build large datasets, at least not in a cost-efficient, time-efficient way, if you're always thinking just in terms of supervised learning.

**Chris Benson:** Yeah, fair enough. So how might you think about implementing this? If you're out there and you're interested in moving into this as a new skill set that you want to develop for your organization, what would a good first step be?

**Daniel Whitenack:** Yeah, I think that that's a really interesting question in this work, because actually, one of the things that they talk about - because they're talking about opportunities and risks with foundation models - is that accessibility and homogeneity are things that come up with foundation models... Meaning that actually me, like my team, working, I might not be able to create one of these foundation models, because I don't have the resources.

\[11:48\] So just to give a couple of examples, we're talking about here -- certain things that people might be familiar with are things like BERT or GPT-3 in the language space, but then there's other computer vision models and other modality speech models like thinking of wav2vec or other things. So if you imagine tasks in computer vision, tasks in natural language processing, tasks in speech technology, and you look at what people are doing now, very often, a bulk of the things that people are doing are homogeneous in the sense that they're all built on one of these foundation models, whether it's BERT, or wav2vec or one in the GPT variety or-- all of these are built on one of these foundation models, like, "We fine-tuned BERT to do this, or we transfer learned this foundation model to do that."

And so this is one of the things that they bring up in the paper as a risk, is that there's two things that come out from this, right? One is not all researchers and practitioners can create their own foundational model, because I don't have racks of GPU maybe, or the computational resources, the manpower to actually create a model on this scale. So that's one thing is like, "Hey, is it bad? Is that necessarily a bad thing?" I think it is concerning that this concentration of people that can actually create this state-of-the-art work.

But then the other side of that is if there's an unexpected behavior or bias in that foundation model, then that actually filters through down to a huge number of downstream tasks and applications, because no one's retraining that foundation model, right? It's just there and everybody's using it. And so that's another risk. So I think the implications are really what should be on the mind of practitioners in terms of this trend, maybe.

**Chris Benson:** What that reminds me of, just as an analogy as you were saying that, is if we look at the software world in parallel, there are some software that's out there that you find in open source that are in just about everything, and they flow downstream... Thinking about the bias in the model or something, but if you get a bug in the software, something unintended, it can have fairly substantial consequences as it flows downstream. Is that the right way of thinking about this, since you're relying on this so much that if you do go awry, it's going to multiply itself many times?

**Daniel Whitenack:** Yeah, definitely. I think that that is exactly the -- it's not an exact parallel, because we're thinking of mostly issues maybe stemming from data, and bias and data maybe or something like that... But it is parallel in the sense that like, "Hey, if everybody imports this one package and it breaks upstream, then there's a huge consequence downstream", right? And the parallel here would be everybody's using, let's say, BERT to create all of these different NLP applications... Well, what happens if there's this bias in BERT? And we've seen examples of failures of these large models, right? And so yeah, I think that is a good parallel.

So Chris, I think maybe one of the things that I remember when this came out is that people were kind of thrown off by the terminology. I think even in the blog post that I was reading, which I'll link in our show notes, they say the name Foundation Model has also drawn significant attention, and given that, they want to clarify it. So there's a whole clarification in this article. I'll link in the show notes.

**Chris Benson:** They threw me off at the beginning of the show.

**Daniel Whitenack:** Yeah. I mean, naming is difficult, right?

**Chris Benson:** It is.

**Daniel Whitenack:** So what is that? Naming variables is the most difficult part of software engineering...?

**Chris Benson:** In the software world, there's nothing harder than naming variables well.

**Daniel Whitenack:** \[15:53\] Yeah. So I do feel for them, and I think that they were making a good attempt at this. And I've actually felt this tension maybe in our previous conversations, because I come from the NLP world, and we have this term "large language model", which is essentially what they're calling a foundation model for our space, right? But the thought process around that type of model and the way it's used downstream, the way it's trained, that is pervasive across other modalities, right? In computer vision, in audio, even in areas where people are doing biological structures and other things, this idea of having a large base model that's trained in a self-supervised way at scale, and used in a variety of downstream tasks - that idea is kind of pervasive.

So I do like the fact that -- like, in the past I've felt this tension, even when I've taught classes, like "What do I call this thing we're doing, this new trend in how we're operating?" And I think you could talk about it under the heading of transfer learning, under the heading of few-shot, zero-shot, or self-supervision... But I do appreciate the attempt to create a term that sort of encompasses all of these things that are at play, because there's definitely this trend. So I don't know if you have any thoughts on that. I'm not opposed to the name, actually. I kind of like having a name to refer to this as, but I don't know if it's catching on. I don't hear tons of people using it out there, so maybe it's not catching on, but I kind of wish that it or something like it would, right?

**Chris Benson:** I had heard the term, but just like self-supervised learning, I don't think I had really gotten the correct meaning right on. It's interesting - in the article here they kind of talk about this trend, as you pointed out, and where it's going and what the implications are, and they talk to that a little bit lower in the article. And they specifically kind of address the pace of technological process, the entrenchment of the models themselves because of some of the limitations that you pointed out earlier, and the demand of the human social side of it and technology... And it raises a good point. I mean, they empower us to be able to use these things, because it gives us a capability we might not otherwise have, but there's definitely some pitfalls there, especially in terms of biasing the data that you pointed out.

Where do you think -- I mean, as someone who is using large models on a regular basis yourself in the work, do you think that this is probably where things will continue going for some time, or do you see any alternative? I think it's kind of a necessary evil to have foundational models, by that name or otherwise, to build work upon, shoulders of giants kind of idea. Any thoughts there, or whether the risks are too great?

**Daniel Whitenack:** Yeah, I think that, as you mentioned, in my own work we don't train, for the most part. We're training a lot of downstream task models, and few maybe what would be considered foundational models, or in this sort of self-supervised, pre-training way, although we have done it a bit. So I've benefited a lot in my own work from this trend, and I think it does come with risks though.

I think when I was going through this article and thinking things through, a lot of it centered around concentration of power and other kind of trends in the AI world, especially because I work at a nonprofit that works with minority language communities. For the most part, local languages, minority languages are left out of foundational models in the NLP world, right? So I already view this as an issue. And they bring this up in terms of -- they talk about supporting diverse research, and I think regardless of the modality that we're working with, it's important that we consider whether it's geographic diversity, language diversity, but also diversity of those creating the datasets and training the models and having representation - all of those things I think are really critical.

\[20:20\] If this trend continues and we don't think about that side of things, then those marginalized groups, in terms of how they're able to use these foundational models and the implications of the applications that are produced, they're only going to become more marginalized... Because if foundational models are a key piece -- I keep calling them foundational; foundation models are a key piece of this new tech stack that we're building for the digital sphere, and those groups are just left out, or there's bias in the models against those groups in various ways, then that's a real problem in terms of their own flourishing in the digital sphere.

**Chris Benson:** I think that's a fantastic insight that you just made there, and that is that from an economic standpoint, people who make these large models, these foundation models, are intended to solve the problems which are probably being done by what is current mainstream, current top of the power stack, if you will, in terms of companies and countries even. And so there is an incentive to unintentionally perpetuate inequality with these. And so I think that would be a real dilemma.

How might you tackle that going forward, to where if we're looking at foundation models as being somewhat core to most workflows in the AI space, because they're available and they accelerate where you're trying to go, but that they are built on imperfect data that has bias, that leaves out marginalized groups - do you just iterate and add those in and redo that? There's a certain investment, obviously, to be made in that. Do you have any thoughts on least evil path forward to get the best foundation model with the least amount of unintended consequence over time?

**Daniel Whitenack:** Yeah, it's a difficult question... My sense is that that is why Stanford created this center. We would love to have someone from the center on the podcast, but I haven't talked in detail about the motivation to them, so I'm not putting words in their mouth, but... I think there's multiple sides to this. I think one side of it is having think tanks or research groups that are really thinking about the problem, and how foundation models, large language models, computer vision models, and other pre-trained models are influencing society more generally, and the opportunities with that; because there's clear opportunities, but there's also risks. So having that research side of things I think is a key piece, but also I think as practitioners, this needs to be part of our thought process when we're using these models.

And I mentioned this fairly frequently on the podcast, but the idea of probing the behavior of the models that you're releasing into production I think is a key piece of this. So not just trusting that like, "Hey, Google or OpenAI created this great model. I'm going to fine-tune it on this task. Okay, it does great on my test dataset, so push it up to production." I think thinking of behavioral testing, where you actually probe, "How does my model respond to these changes in my data? What if I perturb my data in this way? What if I switch out this for that? What if I make this change, which should be invariant in the output? Is it actually invariant in the put?" And creating that sort of test suite of behavioral tests for your model I think is a big thing that practitioners can keep in mind in terms of how these foundational models might impact their downstream customers.

\[24:16\] The report actually does a -- they talk about the social impact, but they have this mindset. There's a figure three in the paper... Their figures are really nice. I wish I could make figures that nice. They talk about these sort of almost like a value chain of usage of these foundation models, starting from data creation, through data curation, through training and application and deployment, and they think about the impacts of those models along that chain. So there are real people on either side of that chain, right? What is the diversity that's represented in those groups, and what might be the impact of having biases in the data producer's or the consumer's side, the makeup of the consumers? So I think that's a really good way of thinking about it, and having that more holistic picture in mind is helpful.

**Chris Benson:** Yeah. As you were going through that, it struck me that in addition to accounting for the unintended consequences behaviorally as you perturb data and stuff, that the flip side of that coin becomes vulnerabilities from a security standpoint, in terms of affecting the outcomes of foundation models, or any model for that matter, by doing that. And so it all just has a greater multiplier associated with the foundation, since you're building so much on top of that.

So as we look at this in the days ahead, it will be interesting to see as well what the security implications are of protecting the end-users that are impacted by this, meaning the model will change the behavior of lots of different executions on that, where people are using it for various use cases that affect people. I would conclude by noting that in all of this that we're talking about, it's starting with human beings and it's ending with human beings. And we are a little bit at the mercy of the models as we're trying to make improvements in other ways in our lives to do things productive in the world. It's a curious set of problems that we face going forward.

**Daniel Whitenack:** Okay, Chris, so in continuing our way through this material that Stanford has put out, they actually do have -- I think your point made around people on either side of this, they talk about emphasizing the role of people. So I think they're very much with you in that. They also use this terminology in terms of how to mitigate some of this risk and vulnerability stuff. They talk about how foundation models can, and increasingly should, be grounded. Now, that was also a term that I wanted to make sure that I sort of dug into a little bit, because maybe it could mean a variety of things. Is that terminology you've come across?

**Chris Benson:** No, I ran across that in the article a moment ago, just before you said it, and I was wondering... And then you went there. I was wondering, what do they mean by grounded? So what do they mean by grounded, Daniel?

**Daniel Whitenack:** So it is interesting that there's a couple of ways that you could come at this. And I've found people talking about this idea of grounded models coming from the vision perspective, but also coming from the NLP perspective. I think you can kind of get to the same idea from both directions. If you're coming from the computer vision side, you might want to look up some things about CLIP, which is a model that's being talked about or a methodology that's being talked about quite a bit.

\[28:02\] But from the language side, the interesting thing about language is that language is a way to encode knowledge about the real world in some sort of concrete way, right? Even the words that I'm talking about right now, I have thoughts and ideas in my mind, I have perceptions of the real world, and I'm encoding them in a concrete set of symbol representations, right? And so there's a set of symbols that aren't really like the set of symbols... D-O-G conjures up ideas in my mind about what those set of symbols mean. And I know it does for you as well, having 10 or more of them at any given time.

**Chris Benson:** \[laughs\] Yeah.

**Daniel Whitenack:** But those symbols are representative of things that are grounded in the real world, right? It's just a symbolic representation of things that are grounded in the real world. And so this idea of grounding is thinking about more widely, like, well, instead of always just having a labeled dataset that says, "Oh, here's D-O-G, here's dog in my text, and that's an entity. I'm going to label it as an entity of some type, and do named entity recognition, or something." Well, thinking about a language model being grounded is a much broader way to look at this, where you realize, "Oh, well that has other representations that are actually grounded in multiple modalities of how people experience dog, and language is just one of those. Or textual language is just one of those." There's also a way to say dog, in audio, and there's all sorts of -- of course, the internet is filled with images and videos of dogs, and there's drawings of dogs... And so there's not a single sort of element that's representative of dog in any modality, right?

You could do the same from vision, right? If you have a single picture of dog in your dataset, your model is going to assume that's the only way you can represent dog, right? And so when you see a different type of dog, it might cause your model to have a vulnerability, because it's not used to classifying a Pug as a dog, when all it's seen is a Golden Retriever, right?

And so the idea of grounding - and if anyone wants to correct me... Our listeners can correct me, but it really has to do with pooling together these modalities of data to ground our model in more than just a single symbolic representation of an idea. But building multimodal models that can ground our ideas or our perception of these ideas in the multiple modalities to increase robustness and flexibility, especially if we're using these on a variety of downstream tasks. I feel like I said a lot there. I don't know if any of that came true.

**Chris Benson:** If I'm understanding you correctly - correct me if I'm not - you're basically saying having that diversity to achieve what the model is representing. So the representation is built on diversity, it gives it that robustness, it gives it that ability to recognize all the things that that representation might take the form of. Is that a good way of summarizing?

**Daniel Whitenack:** Yeah. Yeah. So I looked up a few things here in terms of this idea of grounded. I liked a description actually from DARPA, which I know you're a fan of; they talk about the explosive growth of language models and all this stuff, and they say, "ML suffers from a need to train on large amounts of annotated data." And then they talk about this sort of project they're talking about, which is related to grounding, "...aims to enable computers to acquire language in a manner similar to how children do. Because children acquire language based on their perception of oral and visual information, not just textual information." It's not just like you teach a child to read based on just text, apart from audio and visual.

\[32:22\] So it's a broader way of thinking about how you teach a certain learning, how we teach our models the information that they need to know, which is actually encoded in multiple modalities. And it might not always be audio and video, maybe it's related to physics about how the world works, or something like that.

**Chris Benson:** Understood. I just want to note as an aside that I prefer your definition of grounding far more than the one I usually get, which is me on weekends, it's my wife telling me, "No, you're not going to go fly that Cessna; you're going to do yard work instead. You, sir, are grounded." That's what I usually hear. So yours is a much better definition in my book.

**Daniel Whitenack:** \[laughs\] Yeah, yeah. And you can think of how this would create or could create vulnerabilities, right? Like, we based on our perception of the world, we know that a bird belongs in a tree, right? But then if I put a car in a tree, we have the common sense to reason that based on all our experience in all of our modalities of existence, and we know that that's odd.

**Chris Benson:** It is.

**Daniel Whitenack:** That's not quite right. But that's not how machine learning and AI systems typically work. They would just know, "Hey, there's a tree here, and there's a car here."

**Chris Benson:** Yeah.

**Daniel Whitenack:** And that can create an issue.

**Chris Benson:** If it's not a Whomping Willow, it should not have a car in it.

**Daniel Whitenack:** Right. \[laughs\] That is definitely true. Okay, well, I'm really interested in this idea of grounding. I don't know if you remember back when we talked with Jeff Adams, who was the -- he was on the team, or helped lead the team that created a lot of speech technology at Amazon, related to Alexa...

**Chris Benson:** Yeah, I do.

**Daniel Whitenack:** ...and other things. He talked about what he was really excited by in future, was thinking more holistically about language. That's particularly what he's interested. But when he said that, what he kind of expressed was that we experience language in all sorts of modalities. So language models and speech technology moving forward is going to be very multimodal, was kind of how he was thinking about that. And that was something really exciting to him. So yeah, I think this is something that I'm really excited about, and yeah, this idea of grounding is really interesting.

**Chris Benson:** It is. It'll be interesting to see how it develops. I know that in the past, as we've hit interesting ideas, we tend to have multiple shows that include them in the discussion. So I suspect that grounding is one of the new things and probably foundation is another one, though I might ask our larger community, please be better at naming, because we've spent a good bit of the show defining some confusing terms as you come into it, until you get used to it.

**Daniel Whitenack:** Yeah. So I would say you and I are only just even touching on this idea of foundation models and the other implications of them. Just to give listeners a sense of this, there's other things that are discussed in the work from Stanford, their report, including what I thought was a really interesting one around misuse. So we talked about the vulnerability of these foundation models, one being that there's a single point of failure. And then we've talked about this idea of grounding, where maybe these foundation models don't always have the common sense that they should, or aren't grounded in multiple modalities of how we experience the world. So that's one.

\[35:58\] But then there's this idea of misuse, which means that -- and I thought maybe you would find this one intriguing, Chris, particularly... The idea that you can create a really flexible, extremely powerful model, which lets you do downstream things, a whole variety of downstream things much easier. It means that you can do a whole variety of downstream things much easier, right? So in other words, you can do named entity recognitions, sentiment analysis, other things, but you can also do other things, like create fake news, or target marginalized groups or whatever. You can do those things much easier, too. So I think that's a difficult one. On the one side, we're creating these large language models that we would like to be more accessible to people, because we don't want the concentration of power around these foundation models being with just a few entities. But the wider you distribute these, maybe the more possibility there is for misuse in the community, which is I think why we saw OpenAI restrict usage of GPT-3 for so long. So I don't know. I don't know what the right balance is there, or if there is a right balance.

**Chris Benson:** It's interesting. I think a while back, way back, early in the show, there were really only data scientists. And then as this industry has matured and we've gotten many different roles with different names - we've got deep learning engineers, we've got all sorts of different names now - I think that you just pointed out that there's yet another one there that is coming to being, and that is the foundation model security analyst, who is a person charged with evaluating downstream intended consequences by a malicious actor. So there's probably a whole cyber security industry that you've just coined just now, Daniel.

**Daniel Whitenack:** Well, I'll take credit for it. Why not?

**Chris Benson:** There you go. It's yours. It's a resumeable thing, my friend.

**Daniel Whitenack:** Yeah. It's like coming up with voice-first or--

**Chris Benson:** That's right.

**Daniel Whitenack:** ...I don't know. Yeah, some of those other things.

**Chris Benson:** Yeah. They'll call you Daniel, father of...

**Daniel Whitenack:** Father of the foundation model security analyst.

**Chris Benson:** That's right. That's right.

**Daniel Whitenack:** Yeah, I'll take that. So as we finish up here, just to tie in a learning resource to this whole discussion of foundation models - I don't really know a better one than this, but I have mentioned it before, and it keeps growing and becoming better - it's the Hugging Face Course. So if you just look up "Hugging Face course", and of course, we'll mention it on our show notes...

Hugging Face - maybe people think it's just natural language processing, but it has grown far beyond that. And really, if you want to get a sense of what is it like to use foundation models and import them and fine-tune for a downstream task, fine-tune a pre-trained model, or use these big datasets or portions of these datasets that are being used in foundation models, Hugging Face and the model hub, the dataset hub and their training API is really the best way to start into that topic, at least in my opinion. And they have their own course, that includes videos...

Just looking at the thing here, they have already on the left-hand side - they give an introduction, they talk about Transformers, which is their library, but you can access all sorts of model architectures, and then they talk about fine-tuning a pre-trained model, sharing models and tokenizers... These are all themes that we've talked about in this episode.

**Chris Benson:** Indeed.

**Daniel Whitenack:** So definitely take a look.

**Chris Benson:** I feel the need to tell people that you're not paid to do that, because you've offered them up as a fantastic learning resource - which they are - a number of times. So if our listeners haven't gone there, they really, really should.

**Daniel Whitenack:** They really should, yeah. And they continue to just boost our own work at SIL. So yeah, I don't feel bad at all about giving them another plug.

**Chris Benson:** When you're good, you're good, you know? And they're good.

**Daniel Whitenack:** Yeah, I know. Well, Chris, I appreciate you talking through this subject with me. It's been fun.

**Chris Benson:** Thanks for teaching me.

**Daniel Whitenack:** Yeah, on to the next. I hope you have a good evening and rest of the week.

**Chris Benson:** Sounds good. See you next time.

**Daniel Whitenack:** Bye.
