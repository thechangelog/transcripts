**Daniel Whitenack:** Welcome to Practical AI. I am Daniel Whitenack, a data scientist with SIL International, and I'm joined by my co-host, Chris Benson, who is a chief strategist for AI and high-performance computing at Lockheed Martin. Hey, Chris. How are you doing?

**Chris Benson:** I'm doing fine. How's it going, Daniel?

**Daniel Whitenack:** It's going good, no complaints. It's been kind of gloomy weather here for a while in Indiana, but you know, such is this time of year, I guess.

**Chris Benson:** Sounds good. I'm about head out of town for LiveWorx in Boston, where I'm gonna give a talk. It'll over by the time this episode comes out, but right now I'm looking forward to heading there and doing that, and meeting a bunch of people out there.

**Daniel Whitenack:** Awesome. Well, I'm super-excited about our guest and our topic today. As our listeners know, we have a particular passion for the practical side of AI, hence the name of the podcast. We realize that a lot of times the blockers for AI projects are not necessarily the sophisticated modeling, but the whole productionizing things and operationalizing things... And one of the companies that's really leading the way in this area (at least I feel like) is a company called Seldon. Today we have Janis Klaise, who is a data scientist at Seldon, joining us. Welcome, Janis!

**Janis Klaise:** Hi! I'm very pleased to be on this show.

**Daniel Whitenack:** Awesome. We're really happy to have you. Maybe we could start things off by just hearing a little bit about your background and how you eventually got into AI and data science things.

**Janis Klaise:** Yeah, sure thing. My background is actually in mathematical modeling. I did my Ph.D. at the University of Warwick here in the U.K, and there's a doctoral training center for complexity science which is basically applied maths to real-world systems, and with a particular interest on systems that are made up of simple rules, but that can result in interesting image and behavior.

Just to give you a couple of examples - people in my cohort worked in various problems, ranging from traffic modeling to modeling the spread of infectious disease. One of my papers was also roughly related to that kind of thing... So that's my background.

**Daniel Whitenack:** \[00:04:14.08\] Awesome. And did that academic training transfer naturally into industrial data science work? I know a lot of people, including myself, maybe had some awkwardness or weirdness in trying to transition from academic science into data science and industry... So it sounds like your work maybe was more applied though.

**Janis Klaise:** Yeah, I can definitely relate with what you're saying, because the incentives in Academia and in the industry are completely different. But the great thing about my department was that it was very multi-disciplinary and people were working on all kinds of things. I mentioned things like epidemiology research, but also there was a small group of people doing machine learning research with also some industry applications. This was a smaller portion of the center, because we didn't have as many staff members doing research in machine learning... But there were some good ones, and towards the end of my Ph.D. I started taking more interest into machine learning and started going to \[unintelligible 00:05:30.16\] clubs and be more interested in student talks about the topic, and as I was looking for a job in the industry, and preferably a modeling job, I realized that this is the best way of going about it and I should really pick up the subject in my spare time, if I can.

**Chris Benson:** Janis, I was wondering, as we were prepping for getting online and talking to you about this - is by chance the company named Seldon in any way related to the Hari Seldon figure in the Foundation series?

**Janis Klaise:** Yeah, I was partially expecting this question, and that's exactly true. In fact, I'll tell you -- before I joined Seldon I had not read the Foundation series, even though I'd heard about it... And soon after I joined, I asked this exact same question, and afterwards I read the books... So yeah, thanks for the question.

**Chris Benson:** No worries. And just for the listeners - it had been a while since I read the series; it's a fantastic series (it's been around forever) by Isaac Asimov. The idea there is that this figure, Hari Seldon, is what's called a psycho-historian, and it's essentially evaluating society based on mathematics... They're in a galactic empire, and he predicts that it's about to fall, and it's gonna be 30,000 years of chaos. And he uses this psycho-history analysis to figure out a way to take certain actions to narrow the chaos down to a mere millennium.

The series is about what he does, and he creates these two Foundations at each end of the galaxy, filled with scientists and engineers, and stuff... But just since we've made the reference, I wanted to relay that to anybody who had not read the book series.

**Daniel Whitenack:** Yeah, it sounds like kind of a central piece of that story is prediction... Maybe kind of bridging that gap, I'm assuming that's the reason why the Seldon name was chosen. Filling in the gaps of your story, Janis, you came to Seldon - what is Seldon's relation to what they're trying to do in machine learning and AI? ...and assuming it's related to that because of the name and the relation to prediction, and all of that.

**Janis Klaise:** \[00:08:02.27\] Yeah, sure. The Seldon name is actually very fitting, as you say, because it's all about predicting the future. But what we are doing at Seldon is we are doing machine learning deployment primarily, and this is everything that happens after your data scientists have finished their job and developed some models, trained them and achieved good enough performance, so that they're ready to go out and be applied in the business.

There's a lot that needs to be done for that step to materialize. Typically, a data science model - there's this whole setup of how you deal with the data and the modeling scripts, which are typically Python, or maybe our scripts, or maybe some other languages... And after the training is done, then you have maybe some artifacts, some model weights which you can then load again and then make predictions... But that doesn't really make it easy for people inside the business to use the models, so what needs to be typically done is productionizing the model, which would in the simplest case involve wrapping it with some light API, like a REST endpoint, for example, so that it can start living in the company's infrastructure, and other business apps can start communicating with it by sending requests, getting predictions back, and then those predictions being acted on.

**Chris Benson:** Can you extend that a bit and talk about what the products that Seldon has are, and what projects it's engaged in, and give us a sense of what your customers or users are, and why they're coming to you? What is it they're trying to solve when they engage in your products and projects?

**Janis Klaise:** Yes, of course. Seldon is an open core business, meaning that our primary product which the company is built on is open source. It's called Seldon Core, and it's a machine learning deployment platform that runs on top of Kubernetes. It basically enables people to wrap up their trade models, which can be trained using any frameworks. Your data scientists can work in Python, or R, or even Java, or any other framework.

**Daniel Whitenack:** Even Java...

**Janis Klaise:** Well, yes, if you feel like it...

**Daniel Whitenack:** \[laughs\]

**Janis Klaise:** Because it's model-agnostic, we don't get in the way of the data science modeling, but what we're interested in was once that data science part is done, you can wrap up your models into Docker images and then deploy them using Seldon Core, and the models will be running on Kubernetes seamlessly, and you can start using them in your business.

**Daniel Whitenack:** I've heard of Seldon a little bit in the past, but leading up to this conversation I tinkered around with some more of what Seldon is doing, and was super-impressed... So much so that I'm encouraging one of the teams that I'm working with to use some of this for deployment.

I had a model for reading comprehension, and getting that into production was as easy as writing a particular Python class with a predict function, and then using some of Seldon's tooling to basically just specify that "Hey, I want a REST API on this port, and my class is called this name" and then Seldon kind of took care of the rest, and that deployment piece.

So I was super-impressed with the whole workflow. I'm sure I missed -- you can tell me what other pieces of Seldon I missed. I'm sure I only touched on a little bit of what you offer.

**Janis Klaise:** \[00:12:11.14\] Yeah, and that's really great to hear, that you're getting some value out of it already. Continuing on that - Seldon Core is the open source deployment platform, and then on top of that we are building an enterprise layer which is supposed to make things a bit easier, and also more accessible to people that are not necessarily that familiar with the command line. What we envision with the enterprise option is a centralized place to monitor all your models in deployment, both monitoring them, sending off new deployments, or decommissioning old ones and having a rich interface of inspecting the models, how they're doing, and also have team collaboration and authentication with different levels of permission - who's allowed to put new models in production, who's allowed to decommission the models, and that kind of stuff.

**Daniel Whitenack:** Cool. I know that Chris and I have talked several times on this show, and in our conversations outside of the show, about this sort of weird friction that exists between engineering teams and data science or AI teams often, in that the tooling that the AI people are using is really weird in comparison to what engineering teams are used to... Like, what are these Jupyter things floating around, what do they do...? And that creates a lot of friction oftentimes in terms of actually building value out of the AI stuff.

So in terms of who's latching onto this tooling that you're building, do you see people coming from both of those sides, or from maybe a DevOps side, and those trying to productionize what data science teams have passed off to them? ...but maybe there's people also from the AI side? What are you seeing in terms of trends in that sense?

**Chris Benson:** Yeah, that's a very interesting question, actually. From what we've seen both from community members reaching out on our Slack channel, but also in conversations with some of our clients, it is typically a very varied bunch... And I think it depends quite a lot on how data science - both the modeling part and the production part - is organized in companies. There tends to be a difference, especially with bigger enterprises and smaller companies in that regard. In bigger enterprises, typically places like banks, there appear to be quite a lot of silos between teams, so data scientists for example would only be responsible for the development of models, and once they're kind of happy, then they just chuck it over the wall to the DevOps people or the engineers who actually have to put it in production.

That's not always the best way of doing things, as the data scientists then don't get any feedback on how the models are doing, and the data engineers don't get feedback about "What is this thing? How do you productionize it?", whereas in small companies it seems to be people are doing many roles at once, and this is something that when I joined at Seldon last year I also had to pick up... So instead of just doing pure data science and modeling, I basically had to take up the engineering best practices, because we are at heart an engineering company... But yeah, the people are varied

**Chris Benson:** Janis, how did Seldon actually get interested in doing model inspection and interpretability? What was the motivation that drove the company in that direction?

**Janis Klaise:** \[00:16:07.18\] To answer this question best it's maybe fruitful to discuss a bit more about the capabilities of our open source deployment platform.

**Chris Benson:** Absolutely, sure.

**Janis Klaise:** When people think about productionizing models, usually they think of single models. You have a model, you wrap it up in a single Docker image and then you deploy it. So if it's a TensorFlow model, maybe you use TensorFlow Serving, for example... Or if it's a Python model, maybe you write a Flask app. And then that's kind of it; it's a single model, you send requests of data through and get predictions back, and then you use them in whatever way you see fit.

With Seldon Core there's a lot more functionality that you can have. With Seldon Core we have this inference graph abstraction, which is part of every deployment... And it can be as simple as a single model, which is probably most use cases in the business. But you can do a lot more interesting things. For example, you can have several models running in parallel, and then you might want to make predictions using all of them, and then before returning the prediction, you might wanna combine all of them using some custom business logic, for example. It could be as easy as a majority vote, or it could be just returning all predictions. So you get ensembling at inference time, for free.

Another way you can use it is instead of ensembling models at prediction time, you can route traffic to models. You could have, say, two models, and have a router; it could be an A/B test, for example; if you've developed one model and then put a second model alongside it, you wanna split traffic 50/50 and see which one performs best.

Or you could have custom business logic. Maybe you have several models and you know that one model does best at a particular time of day, for example, and another model does better at a different time of day. That's domain expertise that can be coded into the routing. Or similarly, if it's for example a recommendation use case, maybe you have a couple of models and some of them do better on certain demographics and some of them do better in other demographics, and then you can code that into your custom business logic router as well. So you can do quite a lot of interesting things with Seldon Core beyond single-model serving.

**Daniel Whitenack:** You've just recently released and are promoting this Alibi project, which is described as being concerned with model inspection and interpretability... I've heard of interpretability in terms of interpreting individual models; maybe black box models that you try to gain some insight into... But then what is the difference when you're meaning model inspection versus model interpretability? Does the inspection have to do with this routing logic and which models actually got used for a particular prediction? Or what's the difference and the distinction there?

**Janis Klaise:** Yeah, that's a very good question. When engineers talk about monitoring live systems, they typically think of things like, for example, requests per second, and the total load on the nodes that the models are living on, and that kind of stuff... But when you're approaching the question of monitoring machine learning models from a data science perspective, then there are a lot of very interesting and useful things that you might want at inference time, rather than just raw predictions. This is what I mean about monitoring and interpreting machine learning models.

\[00:20:13.01\] Just to give you a few examples... One we've already touched upon, and we'll go into detail - it's about model explanations; you might want to go through your request logs historically and see "Okay, why did this model make this particular prediction on this particular instance?" and you could have a component in the Seldon Core graph that is a model explainer, and then you can basically send that historic request through and get a model explanation back as to roughly the logic that it took that particular time.

Other uses cases - you might be interested in whether your data distribution is evolving in time. If it's changing, your model might become stale, and then you might wanna flag it for retraining or decommissioning, so you would use components that do outlier detection on the data, or more generally concept drift on the data... So if your data distribution is constantly changing over time, to create those alerts. Those can all be part of your Seldon deployment.

**Chris Benson:** What does the tooling look like for these sorts of things? Obviously, it sounds like -- I know we're about to get into Alibi and it's probably leading the way, but could you describe the landscape of tooling? Is it custom logic in many cases? How are people dealing with things if they're not using Alibi?

**Janis Klaise:** Yeah, that's actually quite a broad question, and in my mind I always split these sorts of questions into two parts. There's the engineering part, and then there's the data science part. On the engineering side it really is about "Okay, what sort of components do we need, that will talk to a model in production? How will that look inside the Seldon deployment inference graph?" and maybe sometimes these components needs to be stateful as well, which complicates things...

Then on the data science part it's less about the engineering of these components and more about the algorithms. What do you actually use if you want an outlier detection running alongside your model and detecting anomalous data instances? That's really the data science piece, and we've done some work specifically on outlier detection for Seldon core, and we have examples on our GitHub about that. With Alibi, we are sort of doing more in the direction of model explanations.

**Daniel Whitenack:** Maybe just describe -- so I'm thinking about Seldon Core and how it gives you these deployments, which might be like one model or multiple models tied together with business logic... Let's say I'm already using Seldon to do those sorts of things; how does Alibi fit into that? Is it a component that's like a library that you call from within those components? Is it something that runs on the side and reaches out to those things and tells you certain things, or analyzes logs...? How does it operate within this ecosystem?

**Janis Klaise:** \[00:23:38.17\] Good question. With Alibi specifically -- we got interested in model explanation as a company maybe around four months ago, and we thought "Okay, it would be good to support model explanations for deployed models in our enterprise product." On the data science team we did a bit of research of what kind of techniques are out there. In the academic literature there's actually a whole lot going on, and there's a whole host of things that you could try to try and interrogate what your model is doing... But when it came to the open source code, it's mostly research code, so it's not easy to use.

What we decided is that if we want to approach this seriously, then basically we need to recreate some of those algorithms, so Alibi was born as an open source Python package for some of the more famous or well-known algorithms for model explanation.

It's a completely standalone library, so you don't need to be interested in model deployment or any kind of productionization to try and use it. You can use it in a Jupyter notebook, you can play around with some models that you've trained in the same notebook and see what kind of explanations your models can offer on the decisions that they made. But the way that it ties in together with Seldon core, and eventually Seldon Deploy, which is our enterprise layer, is that it will be the back-end for producing these explanations of your models that are running in production.

**Break:** \[00:25:32.23\]

**Chris Benson:** I noticed on the Alibi website you note that Alibi provides - and this is in air quotes here - "consistent API for interpretable ML methods." What's in that API, and is it an API that's used during training, or testing, or what other scenarios \[unintelligible 00:26:45.02\]

**Janis Klaise:** APIs may be a bit of a grandiose term. It literally refers to the way we've structured these various kinds of explanation algorithms within the library. You could think of it in terms of the scikit-learn API, which we all know, which typically has two steps for any given model or estimator. You have the fit step, which takes in a training set, and then you have the prediction step, so you can make predictions on new instances.

With the model explanations it's a reasonably similar process, actually... Some explanation methods require access to the training set to be useful, so you would have a similar fit step; not always, but in some methods. And then really at explanation time, explanation almost exactly maps to the predict step, so you would have rather model.predict, you would have an explainer.explain and pass in a single instance that you want to be explained why the model made the prediction that it did.

**Daniel Whitenack:** \[00:27:57.00\] Cool. Is this model agnostic in the same way that Seldon deployments are, in the sense that if you wanna use TensorFlow, or PyTorch, or whatever, then these things kind of work out of the box? Or is this restricted to particular reference implementations, or that sort of thing?

**Janis Klaise:** Yeah, that's a very good question to ask. In the first iteration of Alibi - we're now in version 2, but we're still mostly focusing on what we call black box explanation methods... And when I say "black box", I don't mean a complicated neural network that we've created; what I mean is that all you have is access to a predict function, and this can be very general. It can be literally something that just takes in arrays and spits out other arrays. So it can be as general as an API that's already running in production.

So we have a couple of methods in Alibi that all work on these black box models, so it's very portable. We do have on our roadmap more model-specific methods, because once you start to know a bit more about what your model actually is, then you have a lot more leeway and a lot more interesting methods as well that you can apply, if you know the model architecture or the \[unintelligible 00:29:20.09\] for example.

**Daniel Whitenack:** Now that we've talked a lot about what Alibi is in general, what the API is like and how you integrate it into your workflow, I'd be interested -- because we've talked about model interpretability in general on this show before, but I'd love to dive into a few more specifics, because this is really a practical project, that people can use.

One of the things that you talk about -- you talk about a lot of different methods. Maybe one that we could start with is you talk about Anchors and Anchor explanation. Could you describe what that is in general, and when it might be useful?

**Janis Klaise:** Yeah, sure. And just before I dive into the Anchor method in particular, I just wanna pick apart a bit what we really want from model explanations.

**Daniel Whitenack:** Yeah, that'd be great.

**Janis Klaise:** There's a couple of different notions of model explanation. In particular, people talk about global explainability, where you typically want to know how the model performs on average, on the whole of the training set, to try and draw some conclusions from it. Then there's the local explanation, which has been the focus of Alibi in the first few releases, which is answering the question "Given a specific instance and a model prediction, why did the model make this prediction?" But as you can already tell, this question is not well-defined. You can't really answer why the model made a prediction. You need to try and pick it apart a bit more. So one thing you can do is you can try and ask human-interpretable questions, that you would like about this model decision to be answered, and then given those questions, you can try and find algorithms that approximate the answers to those kinds of questions.

For example, you might ask "Okay, given this instance and this prediction, what is a minimal subset features and their values given which the model will make the same prediction regardless of everything else?" That's what we call an anchoring question. That's where the Anchor technique comes in. So you ask an interpretable question, and then you go ahead and see "Okay, how can I write an algorithm to do this?"

**Daniel Whitenack:** So in that case with the Anchor explanation, how would you phrase these anchor questions, or what would be the thing that you would be looking to come out of Alibi that would help you with that explanation, or make that explanation logically?

**Janis Klaise:** \[00:32:09.27\] The great thing about this is that these interpretable questions are asked when you want to design a new explanation method, but once the method is designed, you only need to be aware of what question that method is answering... So the Anchors method would return, say, a small subset of features of the original instance, and their values, which would result in the same model prediction 95% of the time.

Let me just give you a quick example... One example that we also have on the website. It's the semi-famous census income dataset from the early '90s composed in the U.S, and it's a binary classification problem of predicting whether a given individual will be a low-income individual or a high-income individual... And the threshold is whether they make less than or more than $50,000/year. The various features of each individual are their education level, their occupation, their relationship status, but also their gender and race, and various kinds of other features. So it's a fairly standard setup. You've got tabular data and you can train a binary classifier to solve this problem.

Once you have your classifier trained, you can then pick individual instances and run the Anchor algorithm to try and find for each instance which really are the pertinent subset of features that were important for this particular prediction.

For example, I might pick a woman who's mid-thirties, who's been separated, and maybe her profession is working in the government. I run the model, and it says "Okay, it's a lower-income individual." Then I run the Anchor explanation and what I get out is, okay, my anchor for this explanation is that their marital status is separated, and their work category is government work. With those two present, the model will make the same decision 95% of the time, regardless of all the other features. That's what an Anchor comes from - it anchors the decision to really what makes the most importance for this particular individual.

**Chris Benson:** I'm wondering if you could tell us a little bit about maybe a different method that you've implemented that might be useful in a different situation, or possibly in the same situation, in a different way. I don't know if that made a lot of sense, but...

**Janis Klaise:** Yeah, sure. I can talk through another method, or rather a couple of methods that we have in Alibi. When we first kicked off Alibi, we wanted to implement methods that didn't really have good implementations, but that were interesting and had received attention in the academic community. Anchors is one such method. And I'm not sure if you know, it was designed by the same people behind Lime, which kicked off the whole interpretability of machine learning area.

**Daniel Whitenack:** Yeah, I'm trying to remember... It was the one that gives you linear estimations of certain relationships, or something like that?

**Janis Klaise:** Yeah, so what Lime does is it kind of fits a linear surrogate model around the instance; it's basically trying to approximate the non-linear decision boundary with a linear one, and then the weights of that linear model can get interpreted as feature importances. It's a very familiar technique, but it has its shortcomings. The authors of Lime came up with Anchors, which they feel is a better solution for this problem.

**Daniel Whitenack:** \[00:36:18.25\] Cool. So we've talked about the Anchor explanation... You list a few different methods. Like you were saying, there's multiple methods that are implemented in Alibi. There's the trust scores, and counter-factual instances and other things... But I was wondering, maybe as we move towards the end of our conversation here, if you could just give us a little bit of an idea of where Alibi is heading, and maybe also what Seldon has in mind for the future of Seldon Core and Alibi, and maybe other things. Where are you headed?

**Janis Klaise:** For Alibi we have a reasonably ambitious roadmap. I mentioned our API mimics the scikit-learn API, but for model explanations... So in an ideal world, we would be the scikit-learn of model explanations, bringing various techniques together in one place for people to use and compare and contrast what makes sense for their use case. Other than that--

**Daniel Whitenack:** So that would be like scikit-learn - if you're wanting to do classification, you can choose from any of... Whatever it is -- I actually don't know how many; like 20 or 30 implemented methods for classifications... So you're kind of imagining Alibi would kind of have that zoo of explainability methods that you could call using a standardized API... Is that the thought?

**Janis Klaise:** Yeah, that's our ambition with Alibi eventually.

**Daniel Whitenack:** Cool. What about Seldon in general? Are there other things on the horizon that you can share? Or maybe just things that you're excited about in the AI community, or at Seldon specifically.

**Janis Klaise:** Yeah. I'm not sure if you're aware, but this week is actually the CogX event here in London, which is the festival of AI where lots of companies go and present their emerging technology to facilitate all kinds of machine learning use cases in the industry. What we're actually doing there this week is we're demo-ing a first version of our enterprise product, Seldon Deploy, which has also Anchor explanations running with live requests. That's quite exciting from a product development perspective.

**Chris Benson:** As you are looking at that -- out of curiosity, with that particular event, is that more of a conference, or is it more of companies coming together to just demo their thing? What style of event is it? Are you essentially taking the opportunity to announce new product features in that, with the one that you've just talked about?

**Janis Klaise:** \[00:39:15.16\] Yeah, so it's kind of a bit of both. There are speakers, mostly industry speakers, but also companies have their own stands, where they can demo their technology, and that kind of stuff. I expect there to be fewer people from the pure machine learning research community, especially as it also coincides with ICML this week.

**Daniel Whitenack:** Cool. First off, congrats on the announcement. It's really exciting. Can't wait to see what's next and the hype around that, for sure. But let's say people who are listening to the podcast want to get hands-on with Alibi and/or Seldon Core, and/or Seldon Enterprise... What are the best ways for people to get up and running with Seldon or Alibi? Where can they find resources and get help?

**Janis Klaise:** Probably the best resource is our docs. You can just go on docs.seldon.io, and that will take you to the relevant documentation, either for Alibi or for Seldon Core, whichever takes your fancy. It has a lot of information to get you up and running.

**Daniel Whitenack:** Cool. And do you have any -- no worries if you don't, but as you've kind of explored this whole area of interpretability and explainability, do you have any recommendations maybe for people that are interested in learning more about that subject in general, as far as resources where they could learn about what has been done, or what people are researching? What's the best way to find that sort of information?

**Janis Klaise:** One thing I can definitely recommend, and something that we got a lot out of when we were first developing Alibi, is Christoph Molnar's book on Interpretable Machine Learning. As the title says, it's a book about interpretability techniques, and it's fully open source. It's available online and it's really well-written. So if people wanna get into the topic, then I think that's the best place to start, by far.

**Daniel Whitenack:** Awesome. Well, thank you so much for joining us today. I know I'm excited to dig in more to Seldon and to Alibi. Now I understand a lot more about how it fits into my workflow. I'd encourage people if you have questions or thoughts about Alibi or Seldon - of course, they have their Slack channel, but we also have our Practical AI Slack channel, which you can find at Changelog.com/community, and on our LinkedIn page as well, if you just search for Practical AI. We'd love to hear your thoughts on machine learning interpretability and inspection.

I really appreciate you joining us, Janis, and we hope to stay in contact, and really looking forward to seeing what Seldon does in the future.

**Janis Klaise:** Yeah, thanks very much for having me on this show. I would just like to quickly thank my co-workers, Arnaud Van Looveren and Giovanni Vacanti, who both are working on the Alibi project, and without whom I couldn't have done the work.

**Daniel Whitenack:** Awesome. I appreciate that, and I really hope that we can run into you at a conference sometime and catch up. Thank you so much for joining us.

**Janis Klaise:** Okay, great. Thank you!
