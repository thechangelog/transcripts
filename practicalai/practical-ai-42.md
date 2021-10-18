**Chris Benson:** Welcome to another Fully Connected episode, where Daniel and I keep you fully connected with everything that's happening in the AI community. We'll take some time to discuss the latest AI news, and we'll dig into some learning resources to help you level up on your machine learning game.

My name is Chris Benson, I'm the chief AI strategist at Lockheed Martin, and with my is my co-host, Daniel Whitenack, who is a data scientist with SIL International. How's it going today?

**Daniel Whitenack:** It's going great. Dealing with allergy season, but such is life... How about with you? \[laughter\]

**Chris Benson:** Exactly the same. I live in Atlanta, so there are plenty of pollen to go around... And looking forward to enjoying the weather without quite so much around.

**Daniel Whitenack:** Yeah. If you hear me sipping something, it's tea with honey in it; that seems to be doing the trick.

**Chris Benson:** Yup, I have my drink along... So we'll go through the episode and people will hear gulps from both of us as we go along here...

**Daniel Whitenack:** Yeah, exactly.

**Chris Benson:** No worries. So it's been a little while since TensorFlow Dev Summit this year...

**Daniel Whitenack:** Yeah... Did you watch it online? I did. I didn't watch every part of it, but I watched quite a few videos of it, since I wasn't there, and it was pretty awesome. A lot of the announcements... We had our episode previously where we were talking about TensorFlow 2.0 and contrasting it with PyTorch, and having gone to this point, I was really excited about some of the announcements we knew were gonna come out of this.

So even though it's been a little while, I wanted to recap what happened at TensorFlow Dev Summit this year, what the announcements are, and some of the implications. Are you good for that?

**Daniel Whitenack:** Yeah, that sounds great. I was at the TensorFlow Dev Summit not this year, but the previous year; it was definitely very inspiring. Lots of good stuff. Like you said, we had the episode about TensorFlow 2.0 when it wasn't really -- like, we were just hearing about it... So making some of those things concrete I think would be great, also because I'm learning a lot about them right now as well... So I'd be happy to learn some things from you and do a little bit of recap.

**Chris Benson:** \[03:49\] Well, I'm certainly no expert at it, but I've used it and I'm delighted. Some of the key things about TensorFlow is they had announced the alpha release at the Dev Summit, and have gotten into it a little bit, and been reading the docs, and trying some of the various examples they offer, and starting to think about making it my primary tool going forward... And the very first thing that will impact the most people is the fact that they have officially adopted Keras as their primary interface into it. It's kind of an 80/20 rule, in that now you're gonna do 80% of your work probably through Keras, and you would only go through some of the traditional, very difficult things that maybe Keras doesn't hit if you're out there as an edge case, through more of the traditional TensorFlow API. And they're deprecating some APIs, and combining it, and trying to generally clean it up.

Have you used Keras in the past?

**Daniel Whitenack:** Yeah. I mean, I've done some examples, and that sort of thing. Keras in general - it's kind of like a higher-level interface around some of the TensorFlow internals. Is that how you would describe it?

**Chris Benson:** Yeah, I would, and that's mostly actually how I've used TensorFlow in the past, with Keras on top of it... And I think a lot of people in the community would say the same thing. It's a much more user-friendly API, it's a higher-level API, and it feels a lot more familiar to people who have done object-oriented or functional programming in other languages... So it's a lot simpler, but most of the things you're gonna do are covered by it. And then if you happen to be one of those people who has some sort of either extremely complex use case, or kind of an edge, or maybe you're working on a new architecture in some way, then you might abandon Keras and go into the other lower-level APIs that they offer.

**Daniel Whitenack:** Yeah, so maybe it would be helpful for me as well to just think about -- so if we were to do programming with TensorFlow, and let's say that we're creating a neural network of some kind, prior to TensorFlow 2.0 and Keras being default, from your perspective what would it look like to program TensorFlow without Keras? To me it seemed kind of -- you had to write a lot of code and a lot of boilerplate. Is that your experience? What's the main thrust of what Keras adds and gives you?

**Chris Benson:** Sure. I think the biggest thing that people are talking about that was welcome, and certainly makes it easier, is the fact that it is defaulting to eager execution... Eager execution is where you're typing your commands out, it's going ahead and doing them. And you're seeing a lot of the other popular frameworks have already been doing that... So to give you a contrast, prior to eager execution becoming the default through Keras in TensorFlow 2.0, TensorFlow 1.x graph is essentially -- you can think of it as having to write out a plan all the way through... You get a complete plan, and then you run it. Whereas if you're used to working in a lot of languages where you can just type in a command and every command can take effect immediately, you didn't have that option in TensorFlow 1.0. So you create these graphs -- it was more complicated, it was a lower-level API, so it was more effort to create, if you were not already familiar with the syntax, and then you'd have to kind of run it and see where you're at and kind of start all over.

That was both a challenge for those users, and it was also really the source of power in TensorFlow 1.0. And that is fundamentally what you're working on - you're working on a graph that you are assigning all the various attributes and notes to, and you're creating this architecture in your graph, and then you would go execute it. And Keras is kind of giving you a very friendly wrapper, as you said, around that, so that a lot of the complexity that you were subjugated to in TensorFlow 1.0, if you were not using Keras - a lot of that has been taken away, and reasonable defaults have been put in place, because that's what most people are gonna use anyway... So I think the user experience is now probably competitive with things like PyTorch and other frameworks that people have said "Oh, I just don't wanna deal with TensorFlow. Let's go do X."

**Daniel Whitenack:** \[08:06\] Yeah, so you're exactly describing me. A lot of these things, when I would try to do examples with TensorFlow, especially if I wanted to start with an example that was similar to where I wanted to get with my model for work - I would start with that example, but it was really hard for me to grasp what I needed to change to adapt it to my situation, and I think a lot of that had to do with maybe the verbosity party, but I think mostly the eager execution.

Like what you're saying here, there's really two things at play - there's the API or the syntax or the packages that allow you to build things up quickly; that's kind of the Keras side of things. So I'm looking at a Keras example right now, and you can import these Keras layers, and there's dense layers, and 2D convolutional max pooling... So these sorts of things just give you really quick access to commonly-used building blocks of neural networks, so I think that removes some of that verbosity element, and it allows you to build things really quickly, build up a model very quickly.

The other thing, like you were saying, was the eager execution. So even if you weren't able to build up this model very quickly, I think that the graph execution that you had in TensorFlow 1.0 - which also is still part of TensorFlow 2.0, so you can do that if you want to or need to - was really a blocker for me personally... Kind of in the same way that I always struggled programming Spark jobs and other things that were not executed immediately when I send a command -- if instructions were getting stored up and they weren't executed immediately, it was really tough for me to get over that hurdle of debugging, and optimization, and interactive development. I never really got the hang of that, and I think that carried over when I was trying to do things in TensorFlow 1.0.

**Chris Benson:** Yeah, I think a lot of people had that experience. I think a couple of the key things to call out are that the way Keras is doing it is much more Pythonic. It's the way you would expect Python to be structured... Whereas TensorFlow under the hood is really focused on the graph, and you're almost thinking -- almost like it's a language onto itself in terms of the way it's put together... And I'm not talking about the syntax, but it's not a natural way of thinking necessarily for everybody who is using Python out there, whereas Keras very much was. So it's kind of working in a mind frame that they're already used to... And now with the eager execution, the TensorFlow site notes that it's a more intuitive interface, it's easier debugging, and a more natural control flow.

I think just that sense of familiarity and the expectations you have will be met, and it will bring a lot of people back that may have looked at it the first time and said "Ugh, too much... I don't wanna deal with all that." Hopefully it will bring them back in.

**Daniel Whitenack:** Yeah. I just saw a tweet recently, and I'm sorry if you wrote this tweet and I forget to mention you; I forgot who it was, but it was something like, you know, when you first start doing side projects and other things with programming, you're like "Oh, I'm gonna write everything in C, and low-level, and I'm gonna understand all these pieces of it", and ten years later when you're doing side projects you just want to build something super-quick... And I think it's the same actually in organizations. After a certain point in time you just need to be able to iterate really quickly, and all that. So yeah, I'm really happy to see this.

Also, it's pretty cool how you can actually switch back and forth between off-loading things to the graph and then executing it, and then coming back... There's this little decorator. You can call tf.function on a function, and then it's a graph, apparently; or it goes to the graph.

That's pretty cool. I think that they've -- I mean, I hope... I know it's been something that they've put a lot of thought into, so I hope it works out that it is actually a lot easier to use, and really eases the logical burden as people try to learn TensorFlow. I'll certainly be trying myself.

**Chris Benson:** \[12:10\] You know, when I was in New York City recently at the AI conference that O'Reilly puts on, somebody - and I'm trying to remember who it was that I was talking to - had a great analogy. They were saying "If you wanna think of the old version of TensorFlow, you could almost think of it as (some programmers may recognize this; not everybody) an abstract syntax tree", in the sense that when you're writing in a programming language and you have whatever the syntax of what you're working in, it gets compiled down into what's called an AST (abstract syntax tree), which is a representation of the language that is (let's just say) more friendly to the system to be able to utilize... So they were kind of comparing the graph of TensorFlow 1.0 as to creating an AST and then having to go and execute it, versus the more Pythonic approach.

One of the things that I noticed, that I was really welcoming in seeing - I noticed that Keras has what I've used mostly, which is an object-oriented approach, which is kind of its default, but it also has a functional approach, which is strictly functional and therefore people coming into this from functional programming languages should find that very welcoming... So it kind of gives you an option from a lot of different areas. If you're coming in from a very functional ethos, then you should feel right at home in Keras as well, just like the rest of us who've done OO for years.

**Daniel Whitenack:** Yeah, this is exciting. And I know that there's a bunch of resources online - we'll put some links in the show notes - several Google Colab notebooks and other resources if you're wanting to experiment a little bit with TensorFlow 2.0. There's a bunch of stuff out there, and they announced a bunch of learning resources at the summit as well, so we'll go through those soon.

There's a lot of resources out there, and I guess -- is it still the alpha release of TensorFlow 2.0, or has that changed?

**Chris Benson:** As we're recording this, I think it's still the alpha. I tried updating a few days ago, and it was the same. They had not done a more current one; I can't swear to it at this point, but I'm hoping that they're getting enough feedback within the community to get a next build out pretty soon.

**Daniel Whitenack:** Cool. We would love -- if anyone that's interested wants to join the conversation that we're having around TensorFlow 2.0, you can join; we have a Practical AI Slack channel in the Changelog Slack. You can join that at changelog.com/community. We also have a LinkedIn page where you can provide some comments to let us know what you're thinking about TensorFlow 2.0; if you think things are improved, or not improved in certain ways, let us know. We'd love to hear your feedback.

**Chris Benson:** So they've made some other announcements as well, that are kind of in the ecosystem at large, and I thought probably maybe -- probably the next thing that certainly got me very excited was TensorFlow datasets. They have actually, within the TensorFlow namespace, just like you have now tf.keras, you also have tf.data.datasets, and they have really done a lot of work to try to make all the work on getting data into TensorFlow and pulling it from various places much easier than they previously... And they have a tf.data API that goes along with that.

They're putting lots of popular research datasets, such MNIST, and Street View house numbers, and the 1 Billion Word Language Model Benchmark, and Large Movie Review's dataset... All these things are now in it, and they're gonna keep adding that in. So I haven't tried that side of it, but I think the effort is -- you know, we're always talking about how we spend 80% of our time getting the data ready, and finding the right data, and combining it, and all that... And I think this is intended to really make that process a bit less painful.

**Daniel Whitenack:** \[16:02\] Yeah. So I have a little bit of a gripe here, and it's not against this necessarily... I'm all for this TensorFlow datasets thing, and I think particularly for getting up to speed with TensorFlow... And figuring out the different patterns, and getting something from zero to running, this is really great. My gripe - and actually, I just encountered this over the weekend; I was -- I shouldn't say I was working over the weekend, because I shouldn't have been, but... I was more playing over the playing with PyTorch, not with TensorFlow, and a lot of these APIs, the TensorFlow datasets - there's also this in scikit-learn and other modeling packages, where you can import this dataset or that dataset, and it does seem kind of like magic as it comes in...

So I was working off some example that was like a machine translation example using RNNs (recurrent neural networks), and it used one of these datasets - not the TensorFlow datasets, but a different one... So I was able to run it pretty quickly, but then I was thinking "Okay, well now I wanna use my own data, which is not available in the API that loads datasets", and it was really tough for me to figure out "How do I get my custom dataset into the format that the automatically-loaded dataset was imported into?" That's caught me several times... And even in scikit-learn, you kind of do this magical import and it's great, but then figuring out the format that was imported and what happened - it was a little bit tough. Maybe that's not the case with these, but in general, that's my one gripe about these sorts of things; it kind of hides a little bit of that pain.

**Chris Benson:** Yeah, I think... I'm waiting to try it out myself, because I know when I was watching the video of the announcement for it, it sounded pretty awesome, as you would expect... But I haven't actually tried it, like I said, to see if it helps. The things they were talking about were - they have this API that supposedly will help you bring in your data and use it, and if it's not in the right format, it will help you convert.

I know that they have this concept of the dataset builder, and that every dataset is supposed to be exposed as a dataset builder. So you can download, extract and write it to a standard format, and I know they had a method called "Download and Prepare", and you can load it from disk \[unintelligible 00:18:32.20\] and some of the others... So they were very clear; it looked like they were well-written as method calls, and it was very clear what you would do with them. They were named well. I do not know if it fully meets the expectation that they at least set with me. I am looking forward to less pain in the future, and I will be frustrated if it turns out not to live up to that.

**Daniel Whitenack:** Yeah, for sure. So please reach out to me if you know how to ease some of my burden on this front... I'm looking through some of the examples now on the TensorFlow dataset site, and it looks like they're imported as this tf.data.dataset format (or type). If that's fairly standardized and there's good documentation around that type, then maybe that would ease some of my concerns.

But yeah, the thing loads in, and then you can immediately call some model to train on this dataset, and it's sometimes hard to figure out what the format of that is... But it seems like this is a fairly standardized thing, so maybe it's not an issue.

**Chris Benson:** \[19:44\] I hope so. It will be interesting to see if the community at large really takes this on. I think to be really useful you'd have to put in hundreds or thousands of different datasets, so people weren't already there and people don't have to go and do the conversion themselves, and such. I think it would be cool to have something like, you know, if you go to data.gov and look at all the different datasets that are available there (I've pulled from that as a source in the past), and if you could get an initiative to where many of these datasets that are very useful get pulled over and automatically converted; maybe upcoming census data would be great... So I'm kind of looking to see where the promise goes down the road, and whether or not they get much larger than the 29 that they announced.

**Daniel Whitenack:** Yeah, for sure. I'm interested to follow it.

**Break:** \[20:40\]

**Daniel Whitenack:** It seems like there was -- I guess this TensorFlow Datasets was announced and integrated within TensorFlow, but there were also a lot of things that were announced that are kind of like add-ons or bolt-ons to TensorFlow...?

**Chris Benson:** Yeah. They're actually calling them add-on as well.

**Daniel Whitenack:** Okay, so I'll call them add-ons to be correct, so I don't offend anyone at Google, which I hope to not do... So one of those was TensorFlow Federated. I have this memory in my mind when they announced TensorFlow Federated, even with like the same picture; I feel like it was a year or two ago, and I remember them talking about it, and I don't remember anything between then and now, until they announced it at the Dev Summit, so maybe it just took that long to materialize into existence, or something... But it does seem pretty cool. Did you understand the gist of what TensorFlow Federated is?

**Chris Benson:** I've read what they have on the site about it, but I'm not sure that I have fully grokked how I'd use it. On the site they say it's an open source framework for machine learning and other computations on decentralized data, which isn't a terribly useful statement by itself... What's your understanding of it?

**Daniel Whitenack:** \[laughs\] Yeah. The video associated with this one did help me... It seems to me like there's a relevant cycle that happens with TensorFlow Federated, in that you've got all of these devices, whether they're phones, or tablets, or whatever they are, with some small amount of the dataset that you wanna train on... So what happens is you initialize a model on each of these devices, and then do a bit of training on each device, and then those devices send updates to a central server, which kind of combines all the models together from all of the different devices, and then sends out a new initial model for them to continue to retrain. So you've got this cycle going on where the devices are pushing up initial and next models to a centralized server that's combining them, and then pushing a model back to the devices.

It's a pretty interesting idea. I know that of course there's implications for privacy and other things if you don't have to have people's data leave their devices; of course, that's a really nice thing. But also, you may not have to do as much data transformation, or store as much data in your own infrastructure either.

The one thing that I question about this is "How many people other than Google would use this?" That's the one thing I maybe struggle with a little bit.

**Chris Benson:** \[24:16\] Yeah, if you're using a cloud provider, and your GPUs or TPUs or whatever you're using is abstracted away, I don't know the -- I know my employer has a whole bunch of DGX machines, and maybe for splitting large workloads across those I suppose that might make sense...

**Daniel Whitenack:** Yeah. If you had an app that was very privacy-restrictive, or your data really couldn't leave devices...

**Chris Benson:** Yeah... And are you talking about federated or privacy?

**Daniel Whitenack:** Federated, but I guess that leads to privacy. Federated is, I think, related - our listeners, please correct me if I'm wrong... But there is a privacy advantage to federated, in the sense that you are training on a federation of devices without data leaving those devices, so you don't have to pull maybe sensitive data from people's devices back to a central place to train on it. But then there is another announcement that they had around a specific library - TensorFlow Privacy - which deals with differential privacy, which I hear is on-trend.

**Chris Benson:** Yeah, I'm assuming that this is kind of a response to the fact that over the last year privacy issues around datasets has become -- you know, we're talking about it on so many episodes... There's GDPR, which is the General Data Protection Regulation in Europe, and so I guess this is an early attempt to formalize how we do privacy guarantees in datasets, for training and such.

**Daniel Whitenack:** Yeah, and for our listeners and for myself as well, this idea of differential privacy is really a way to put limits on the impact to people's private information that you're storing. I'll probably point our listeners to some great talks that I've listened to in the past from \[26:21\] and others from Immuta. They were guests on our show...

**Chris Benson:** It was early on.

**Daniel Whitenack:** ...maybe one of the first episodes, yeah... But they have some great information related to differential privacy, if you wanna learn a little bit more about that. But it does seem that this idea is filtering into the mainstream now, so definitely something to check out.

What other announcements were interesting for you, Chris?

**Chris Benson:** Well, they talked about TensorFlow Probability as a library for probabilistic reasoning and statistical analysis.

**Daniel Whitenack:** It sounds like something those finance people would like...

**Chris Benson:** \[laughs\] Probably so. And they talk about that it is a Python library built on TensorFlow, that makes it easy to combine probabilistic models and deep learning on model hardware, and then they call out TPUs and GPUs. So this is one I haven't delved very far into, but I'm looking forward to trying it out.

**Daniel Whitenack:** Chris, have you used a TPU for your work yet?

**Chris Benson:** I have not. Well, I'm assuming I have in terms of using Colaboratory, because I've done that plenty of times... But at work - and this is just us - we have NVIDIA DGXs, so we're using GPUs from NVIDIA in that case. That may change over time, or we may add over vendors in, but that's where the bulk of my focus has been.

**Daniel Whitenack:** Yeah, I'm always curious about -- maybe I can look up some statistics online about the adoptions of TPUs versus GPUs, but I'll have to come back with that in a follow-up episode.

**Chris Benson:** \[27:56\] Yeah, I'd be curious. Do you know if TPUs are being sold outside of Google Cloud? Because I'm just not familiar with it, since I haven't been doing it directly.

**Daniel Whitenack:** Not to my knowledge, but someone please correct us if we're wrong. My only interaction so far is in Colab, and trying them out there... But I haven't done a lot with them.

**Chris Benson:** Maybe this is an invitation to Google to come on this show. A while back we did have NVIDIA's chief scientist, Bill Dally, come on and talk about GPU technologies... So if someone from Google wants to come on and talk about their TPUs, you have an invitation right here.

**Daniel Whitenack:** Sounds good. Around those same lines, they did talk about performance enhancements... I'm talking about the Dev Summit now - they talked about another add-on or bolt-on called Mesh TensorFlow, which sounds very esoteric and interesting. It's apparently some type of thing that allows for massively parallel goodness of some kind, that I don't fully understand, but... I should watch the talk again.

**Chris Benson:** I should -- once again, that's one of those things that sounds very Google-ish to me, just from a scale standpoint... So it'll be interesting to see how many people are uptaking that.

**Daniel Whitenack:** Yeah. When I was there at Dev Summit, and also this year, watching remotely - I really enjoy some of the things, and hearing about some of the things, and some of them are immediately like "Oh yeah, that's great for users", and then other things, I'm like "Oh, that's really cool that Google did that, and now I'm glad I know, but I don't know that's gonna impact in very many ways." But I'm sure there's a lot of research people maybe in higher-performance computing, in these large-scale models and other things, that it's gonna make their life a ton better, and that's great.

**Chris Benson:** That's true. One of the add-on announcements I am keenly interested in - and we just had a show on reinforcement learning, and I kind of got schooled in what deep reinforcement learning is, and the state of the art... And timely for that is TF-Agents, which is a library for reinforcement learning in TensorFlow. Because historically at least, in my exposure, people may be using TensorFlow and deep learning, but they would tend to turn to other tools... And there may be some TensorFlow people out there saying "Wait, we have a way of doing it", but they are really standardizing it on TensorFlow 2.0 with this add-on... So I'm looking forward to trying that out, because that's a passion area for me, reinforcement learning; robotics, and simulation - it's all about that.

**Daniel Whitenack:** Alright, so because we're practical here at Practical AI, I think one really interesting thing to talk about with respect to TensorFlow 2.0 and recent announcements is the TensorFlow Extended, or TFX I guess they're calling it...

**Chris Benson:** Yup.

**Daniel Whitenack:** ...which is really concerned with, in my understanding, end-to-end workflows. As our listeners I'm sure know, and if you have tried to implement any sort of AI-related thing in production, you realize that the training bit which is often emphasized with the training of a model or the fitting of a model, is often a very small part of the overall work that's required and pipelining that's required to put AI into production. So you have to have things that deal with data pre-processing, you have to have things that deal with model serialization and optimization, you have to have things that deal with logging and monitoring, and also serving of models through some API... So there's a lot of different pieces of this, and my understanding is that TensorFlow Extended is meant to deal with the complexity of that scenario. That's what I got out of it.

**Chris Benson:** \[31:57\] I got that too, and I actually think this is certainly one of those most important announcements that came out of it. I think this is where, looking slightly outside of the deep learning space and looking at software in general, and how you make it work in a real-life situation, this is Google's answer to making it work in the real world by giving you an end-to-end platform... Because for a while, as TensorFlow came out, there were a lot of things that you had to do on your own, and figure your own way out; and it was interesting, as I worked with several different organizations that were interested in doing deep learning and operationalizing it - the last two organizations, they both were using TensorFlow, but they were both doing it in very, very different ways, and there was no standardization there... So I'm hoping that this is something that the entire community can buy into, and we can make it better and better, and therefore have a very sane expectation on how you operationalize... So I'm pretty excited about this.

**Daniel Whitenack:** Yeah. So just to give people an idea, I think the main things here that TensorFlow Extended includes, what they're calling components - I think I'm getting the word right...

**Chris Benson:** Yup.

**Daniel Whitenack:** So they have components, and those components report metadata, and those components are connected together in pipelines. You might have a component, let's say, for training, a component for evaluation, a component for post-processing, or whatever that is... All of those are separate, and you can pipeline them together. And then they all report metadata to this common metadata store, and that metadata store then tracks when and how those components have run. Then there's an orchestration element that would orchestrate those components working together to accomplish one or more tasks.

So it's very pipeliny, in the same way that people talk about pipelines with let's say the Airflow project, and others... And they showed examples with TensorFlow Extended where it integrates with things like Airflow or Kubeflow pipelines, where you're trying to manage these sort of pipeliny things and track them over time.

**Chris Benson:** So you've just explained it much better than the TensorFlow Extended landing page does.

**Daniel Whitenack:** \[laughs\]

**Chris Benson:** That was a really good explanation.

**Daniel Whitenack:** Thanks. We were just talking before we started recording about how I'm very in the mindset of Kelsey Hightower's philosophy of "Good developers copy, and great developers paste", so a lot of that that's in my mind, stuck there, is from the talk that was given at the Dev Summit about TensorFlow Extended. He walks through - in much more detail, of course - about these components and how they fit together in pipelines... So if you're interested in that and hearing more depth around that, it was a good talk.

One of the things that really stood out to me though, and is in line with a lot of different platforms that are out right now, including things like Pachyderm, and Domino, and even FloydHub and other things - this idea of lineage tracking... So utilizing the metadata that you're getting off of these components to actually track how many times have you run training, and when you ran that training, what was the graph of loss per iteration, and all of these sort of things allowing you to trace back what component did what, when, and how.

One of the other things, keeping in line with practicalities, and also keeping in line with the various things that you might want to do with models, including doing this pipelining, but then once you train a model, where does it end up... So they talked about a couple things as far as where that model might end up. One of those was TensorFlow Lite; another was TensorFlow for JavaScript...

**Chris Benson:** \[36:10\] Yup.

**Daniel Whitenack:** So there was a lot of talk about shifting and pushing models to low-power devices, kind of embedded devices and mobile devices, or even in the browser... And that seems to be following a trend that's been going on for some time, about porting models to these sorts of devices.

**Chris Benson:** Yeah. In my own experience we've targeted both mobile and IoT at a couple of different companies a lot, and being able to push inference as far out to the edge as possible, due to all sorts of different constraints... So I think TensorFlow Lite is -- I mean, it's been around, but it's such a key part of the ecosystem. And also, if you would have asked me a few years ago about JavaScript - and I say this as someone who does JavaScript separate from deep learning - I have been pleasantly surprised to see it working so well in the JavaScript world... And we may have an upcoming interview at some point here with someone who has done some work on TensorFlow for JavaScript. I think being able to push it out to all these different targets is pretty crucial. One that we haven't mentioned yet was also Swift for TensorFlow.

I think if you take all these last few things we've talked about in combination, I think that may be the single biggest strength for TensorFlow, is that the ecosystem has made operationalizing and pushing to various production targets; it's been thought out, they have a standard way of doing it, and there are these different approaches that are targeting those, and I haven't seen that at that level of sophistication from some of the other frameworks yet. That may be coming. But if there's anything that will keep TensorFlow up there as one of the dominant frameworks is the fact that they've thought about the operational side to such an extensive degree.

**Daniel Whitenack:** Yeah. On the operational side and kind of the building side, as a tinkerer, they also announced a couple of cool things... For a while, I've been a fan of the Movidius NCS USB sticks from Movidius (which is part of Intel now), which basically allow you to -- it's kind of like a USB drive that you plug into your computer and it has a specialized hardware chip in the USB stick that allows you to run inference on things like a Raspberry Pi, or something like that.

Google seems to be hopping on this bandwagon as well, and doing some interesting things with the so-called Edge TPU, which seems to be a similar idea. It's like a version of the TPU that's meant to be run on these sort of embedded devices, or single-board computer sort of things. This project is Coral, and they released a dev board which is kind of like a Raspberry Pi profile board, where you can have one of these chips embedded in there, and there's also a USB accelerator as well, similar to the Movidius NCS, although I guess this one has a USB-C interface... So that might be nice.

I think these things are just tons of fun. It's super-fun to grab one of these USB sticks and then create a little smart camera that classifies people at your front door. Fun project like that - it just makes them accessible and really enjoyable, so I appreciate them coming out with things like that... And there's more and more of those things coming out in general.

**Chris Benson:** Yeah, and the ability to prototype quickly - these really accelerate that. One of the places I've seen is certainly the Movidius sticks, and now as we look at Coral going forward, is companies having an idea, and somebody says "You know, I'm just gonna take a few hours and mess around and see what I think about that", and they can just try it at a really low cost, and they don't have to be necessarily hooked up to a big infrastructure and have all that plumbing worked out... And then they can kind of quickly figure out whether something is worth pursuing further or not. I've seen that done many times with these small, pluggable units.

**Daniel Whitenack:** \[40:16\] Yup. And maybe you are the type of person that's saying right now "Oh, I want to experiment with TensorFlow 2.0, I want to experiment with some of these new bolt-on things and learn more." Well, we have some resources for you. Whenever we do one of these Fully Connected episodes, we like to end by providing some useful, practical resources for people to get hands-on, dive in, learn more about the topic... And thankfully, some of these resources for TensorFlow 2.0 and other things were announced at the Dev Summit.

One of those was a TensorFlow 2.0 course from DeepLearning.ai. I think it's the TensorFlow 2.0 course, right?

**Chris Benson:** It is. And they have a specialization where they are gonna have four courses total, and I believe as we are recording this, they've had the first one out for a while, and I went through it and it was good. It's a very good course. They announced that the second one was available in the last week or so, as I say this right now... So the DeepLearning.ai version is halfway out there. If you jump into it now, by the time you get through that and into the second one, probably the third one will be out as well.

**Daniel Whitenack:** I love a lot of the stuff that's come out of fast.ai, and fast.ai is kind of embracing the Swift aspect of TensorFlow, and is integrating Swift for TensorFlow into one of their latest courses. If you're into fast.ai or have used some of their stuff before, that might be a great place to start from that, too. I don't know anything about Swift, so I think that might be an interesting one for me.

**Chris Benson:** Sounds good. I know another one of the key educational things that they talked about in addition to DeepLearning.ai was Udacity has a TensorFlow 2.0 course. I have not tried that one... So that's coming up, and I'd like to dive into that one... So that's also out there as well. Both of those were announced at the Dev Summit.

**Daniel Whitenack:** Yeah. And if you haven't been able to get a spot at the Dev Summit one of these past years, it is kind of limited in how many people can go; that's kind of unfortunate that it has to be that way... But they did announce that in collaboration with O'Reilly they are starting a TensorFlow World conference (the conference name is TensorFlow World). This is a conference that if for whatever reason you can't come to the Dev Summit - and I think it's more meant to be a community conference - you can come to this TensorFlow World conference, where you can learn about use cases of people using TensorFlow, go through some tutorials, hear from the TensorFlow team as well... It sounds pretty cool, I would love to check it out.

I think also this is an opportunity as well if you're doing something with TensorFlow, you can submit proposals or submit talks to the conference, as well.

**Chris Benson:** Well, yeah, the call for speakers just closed last week.

**Daniel Whitenack:** Oh, sorry. We didn't get to you in time, but I'm sure that if you're in the world and you're doing that TensorFlow stuff, you probably already knew... But you'll still have the opportunity to participate in tutorials, and go for the great talks, and all of that stuff... So definitely check that out.

**Chris Benson:** Yeah. I was really thinking about it, and then I realized the day got by me before I realized that it closed... So it closed on April 23rd.

**Daniel Whitenack:** Things happen, yeah.

**Chris Benson:** Things happen. That's life.

**Daniel Whitenack:** Yeah, don't miss it - the deadlines for EMNLP and other things are coming up, too. I don't know any deadline for NeurIPS's, but some of those are coming up, so if you're doing cool AI stuff on the research side, don't forget about your deadlines and make sure and get your papers in.

**Chris Benson:** \[44:06\] There you go. And I'll close out saying I am seriously considering going to TensorFlow World, so I'm gonna explore that a little bit... And I am excited to see that the community is big enough to be able to support a conference onto itself now.

**Daniel Whitenack:** For sure. Thanks for suggesting this topic, Chris. I had a great time going through some of these things here... And like I say to our listeners, please engage with us on Slack or on LinkedIn; let us know your thoughts about TensorFlow 2.0. We're excited to hear your thoughts and see what you build.

**Chris Benson:** Yup, absolutely. Looking forward to diving in myself, and hearing from our listeners on what they're doing with it. Until next time, I'll talk to you later, Daniel.

**Daniel Whitenack:** Alright, bye-bye.

**Chris Benson:** Bye-bye.
