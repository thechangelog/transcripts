**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I am the founder and CEO at Prediction Guard, and I'm joined as always by my co-host, Chris Benson, who is a tech strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing very well today, Daniel. How's it going?

**Daniel Whitenack:** Oh, it's going great. I spent the afternoon in sort of a brainstorming session with a couple of our team members here at Prediction Guard, and it was a ton of fun. Talking about a lot of prompt engineering things, and how different models perform, and that sort of thing... So it was a good time.

**Chris Benson:** I'm glad you're doing that, because you know what? I just want things that just work. I don't want to have to think about it. I'm glad you're thinking about it. I think we might have someone else to talk to who knows how to make things that just work.

**Daniel Whitenack:** Yeah, yeah. Well, a lot of the models that we're running sort of just work for us in terms of inference, because we're hosting some of our models in Baseten, and we've got Tuhin joining us from Baseten today. How are you doing, Tuhin?

**Tuhin Srivastava:** Hi, Dan. Hi, Chris. Nice to see you guys again. Thanks for the kind words, Dan.

**Daniel Whitenack:** Yeah, yeah, for sure. Well, it's exciting to have you actually back on the show, because it was, I believe -- I looked it up, it was like May-June 2021 when we recorded and released the last episode with you. So how are you doing? What's new, and how is Baseten? How has the ride been?

**Tuhin Srivastava:** Yeah, it's been crazy. I feel like the last -- I think it was like May 2021...

**Chris Benson:** That's like a millennium in AI time, you know...

**Tuhin Srivastava:** Oh, my God... It actually does feel like it was a different job ago.

**Chris Benson:** \[laughs\]

**Daniel Whitenack:** Yes.

**Tuhin Srivastava:** It feels like the job before the last job... \[laughter\] If that makes sense. No, it's been crazy. I think the last two years for everyone here have probably been a bit of a whirlwind... And you guys are pretty on top of current things, and machine learning and AI, and I imagine, just like for you guys, it's hard to keep up at times with what's going on.

**Chris Benson:** We only do one show a week, and we almost need a daily show, there's so much content now.

**Daniel Whitenack:** It's not enough, yeah. Don't give our listeners ideas, because I don't know if I could do a daily show... \[laughter\] But it is a lot. And I think -- so I'm looking back previous at our episode, and last time we talked about sort of the easiest way to create ML apps. That was part of how the conversation was framed. And I know just from working with you, and talking with you as friends, that a lot has changed, and you've seen some things within how people are deploying machine learning AI systems that now Baseten is really focused on. Could you give us kind of like the high-level view of Baseten and the type of problem, the type of solution that you're offering?

**Tuhin Srivastava:** Yeah, yeah. I think this is worth probably pointing out, before I go into Baseten-specific things, one of the key things that changed since we last talked...

**Daniel Whitenack:** Sure.

**Tuhin Srivastava:** If you think of like the year of 2012 to 2020, data scientists were the ones doing a lot of machine learning. That's changed, for a number of reasons. I have a lot of thoughts on that. But probably the bigger change is the emergence of good open source models. Dan, I know you do a lot of work with that. We've seen Hugging Faces as a community evolve into a really, really vibrant place, where if you want to get a sense of how fast things are moving, it doesn't take long to take screenshots of Hugging Face every Monday morning, and see how the trending is changing, and you'll see that things are pretty different every week.

**Chris Benson:** I don't know if it was Daniel who said this, or another friend of mine, but the analogy was that Hugging Face has become to AI kind of what GitHub has always been for software developers over the last decade or so... It's just -- it's the place to go to find it. Anyway, I didn't mean to interrupt you there.

**Daniel Whitenack:** Yeah. And the good about it, but also the confusing too, it's like -- you know, you have random person clones model, or copies model, and uploads random version of that model, that maybe works... \[laughs\]

**Tuhin Srivastava:** Yeah, a hundred percent. I feel like the game you have to play with Hugging Face is like "But does it run?" \[unintelligible 00:05:03.05\] but does the model run?

But I think open source emerged, and I think stuff like Whisper showing up, and some of these OCR type replacement models showing up - they're probably the more interesting ones to me. Not because of what they do, but because they end up just solving a lot of open problems. If you think about transcription as a problem of -- think about nuance, and how long they were working for that... Like, literally 20 or 30 years of work, just kind of "Alright, that's a solved problem now. Let's move on. We've actually solved multi-language with the same model, too."

**Chris Benson:** Business models come and go, don't they?

**Tuhin Srivastava:** \[00:05:45.08\] Yeah, yeah. And I think the last piece is just around -- you know, the ChatGPT moment for AI was interesting, for a number of reasons. I personally think as someone who built infrastructure that is most interesting because - if you want to call that the iPhone moment of AI... I think it's a bit different to that, because it's so early in the journey. It's like if the iPhone showed up when we were all using 5110 from Nokia. The world would be very, very different, because consumers and developers, their first taste of machine learning and AI was through ChatGPT and GPT APIs. The stakes are just -- it's just harder to build something good. People don't want to use a model that takes 12 seconds to run. High-speed production inference is taken for granted when you're using \[unintelligible 00:06:34.09\] and then when you kind of combine that with "Okay, open source models need to be run somewhere." We personally think that's like "Okay, well, there's a massive infrastructure opportunity that --" Well, maybe not even opportunity, but just a fact that a whole new stack will be built to support models to be able to power the end user experiences. And I think that's kind of the core insight going into Baseten.

And talking a bit about Baseten - what's changed is that we kind of... Two years ago, we were talking about data scientists, we weren't talking about engineers. I mean, that's pretty key to our story, which is that - I think we came to the realization that every engineer needs to grapple with machine learning now, as opposed to maybe a smaller market of data scientists. I think going from smaller models that run in-memory, to larger models is another big focus change we've had. There's a bunch of language stuff, and NLTK stuff - and you're doing all that work, Daniel, but for the most part, everyone is using scikit-learn. And scikit-learn models, for the most part, run in-memory.

**Daniel Whitenack:** On CPUs.

**Tuhin Srivastava:** On CPUs.

**Chris Benson:** Yeah. If you think, just in that time period, the amount of maturation that's occurred in this industry... But you said something a second ago which kind of hit me, and that is most people out there in the general public are really just getting into this, with ChatGPT and stuff... And we've come a long road already. I'm listening to you and it's amazing how far we've come in such a short time.

**Tuhin Srivastava:** Yeah, it's insane, 100%. And I think that, going from small models to large models as well - that change kind of happened pretty quickly. As someone who did a bunch of \[unintelligible 00:08:14.19\] models, they had their time and place, but they're just not that fun anymore. \[laughter\] Something that runs in-memory just doesn't give you the same feeling.

And then I think the last one is just so much of the stuff that was happening with machine learning outside of FAANG, I'd say, was -- like, FAANG had some production use cases around like ad serving and search and whatnot... But outside of that, it was mostly just internal workflows. You'd go and work on fraud and content moderation or recommendation systems, and I think, going from "Hey, every product is going to have some sort of machine learning in it..." Every existing product will definitely, and 90% of new products will be built with the new pillar that is machine learning and AI, which wasn't the case, I think, two years ago, which is just crazy to think about.

**Chris Benson:** Yeah. It's completely changed in that time.

**Daniel Whitenack:** \[00:09:05.24\] I think one thing that was brought into focus for me while you were talking was that as soon as you make this leap to kind of larger models, and you make the leap from some closed API that's very fast, to maybe running your own model. There's two things that become immediately clear. One is the infrastructure challenge around that, which I think is - the workflow around that, and the model hosting... Baseten, of course, is an expert in that. And the other side of that is like the product sort of concerns around running these things, which I feel like - you know, we always have great conversations too, and because you're on the one side of that and I'm probably on the other side... Because yeah, when you're using ChatGPT, or even the OpenAI API, they have layers of protections on the prompts, and like on the output they have filters to make sure they're not responding in certain ways... And there's all these product concerns that people don't think about. And then they take like a LLaMA 2 model or something, they run it, and then there's like "Oh, this is not a product", right. And so the infrastructure is a piece of that, the ability to iterate very quickly with models of a variety of types I think is part of that infrastructure challenge. How do you see that infrastructure piece of this kind of playing out?

**Tuhin Srivastava:** Yeah, maybe just I go into that... When you're saying that, it reminded me of -- I bought a drone in 2014, and I was so excited. A DJI Phantom 3. I was so pumped. I flew it around a bit, and it basically had autopilot mode, where you didn't have to do anything... It kind of just stabilized itself. And then there was this button that said Manual Mode, and had like all sorts of warnings... And I remember being like "Oh, how hard can it be?"

**Daniel Whitenack:** Right... \[laughs\]

**Tuhin Srivastava:** I was really joking, like, I was in a safe space... But I put it into manual mode while it was up in the air, and it just fell to the ground very, very fast. I don't know, Chris, do you have some experience with this?

**Chris Benson:** Well, I'm in aerospace professionally, so I know a little bit about that... And yes.

**Daniel Whitenack:** Chris, weren't you like the TV host of the drone racing competition, or something like this?

**Chris Benson:** I was.

**Tuhin Srivastava:** There you go.

**Chris Benson:** Yeah, a few years ago I was one of the hosts of the first drone racing League. They had a championship series, and they were using -- instead of you as a human, they were navigating obstacle courses and stuff like that. And what I learned through that experience is how much autonomy is required to make even small things fly well. So I sympathize with you for going on manual there. Oh, no, don't do it... Don't do it...

**Tuhin Srivastava:** And the analogy, I think, holds here - \[unintelligible 00:11:50.05\] API seems so great, and then you see something like the LLaMA 2 or Mistral and you're like "Okay, I'll just rip and replace this." And it's like "Nope, that's not gonna work, for a number of reasons." And I think that's currently how we think about infrastructure-based \[unintelligible 00:12:04.12\] running models in production is very, very difficult. It's difficult for a number of reasons. \[unintelligible 00:12:10.29\] from like the user requirements perspective, latency and throughput are paramount. Costs are something you want to optimize. Then your privacy is a whole other beast... Security comes into play... Then orchestrating this across a bunch of different hardware, orchestrating this across clouds becomes a problem... Benchmarking these things isn't easy... And that's even before you go into all the evals, and kind of guardrails you want to put around this thing to get it running. I know that's some of the stuff that you think a lot about, Dan.

**Chris Benson:** Just as an extension to what you're saying - and Daniel, you mentioned it at first, but if you could also talk a little bit about what the difference is about just having the model hosted, and kind of the idea around what you have to put around it to make it a product. Because I don't think most people talk about -- I don't hear a lot of conversations about that, and it's a big set of gotchas on what to do, and kind of what's involved in that. What's your thinking around that when people are looking at doing that?

**Tuhin Srivastava:** I can talk well about the first one, and I have thoughts about the second... Dan's gonna be the expert \[unintelligible 00:13:14.03\] but to get a model running in production, there's actually a ton of work you need to do from an infrastructure perspective. And this is before we talk about the workflow stuff. You need to figure out how to containerize this thing, and get this image running. As we alluded to earlier, just taking a model off Hugging Face and expecting it to run is not a thing. There's a bunch of requirements that these models have, there's quantization inside the code, there is different base images that they might need, based on PyTorch, and Python versions... And then you can really find yourself in a bit of a pickle just trying to dockerize a model.

So the first thing is you need to figure out how to get this in some sort of containerized form, so you can run it elsewhere. Once you have that, the truth is that you need to spin up some sort of service that can deal with variable traffic. And the reason why that is is these things tend to be expensive, they tend to be bound by compute... So if you get smashed with a bunch of requests, it's not like you can just have one model \[unintelligible 00:14:12.07\] the whole thing will slow down, and your product won't work. So you need to figure out how to scale up and down with traffic, and then you need to figure out all the security concerns that come with all that. That's just on the serving layer.

\[00:14:25.27\] Now you need to start thinking about the workflow layer that sits on top of that. And I think version management is non-existent, for the most part. Hooking it up into CI/CD... To really treat this like a service, or a microservice, \[unintelligible 00:14:33.14\] you need observability and logging. Another whole set of features. And what you realize is that taking a model and getting it working in production, behind a reliable, secure, performant API, and maybe cost-efficient... As someone who has done this myself, as someone who's built a company to try to abstract this way, it is easily, for one model, a couple of people \[unintelligible 00:15:00.24\] for a couple of quarters if you're lucky, at scale. And I think that is the most efficient organizations, that can hire people with Kubernetes experience to be able to do this.

So that's the type of things that we try to abstract away from our users, where it's like, you figure out the Python code, we'll figure out everything else. And we'll give this model this first-class treatment, so that you can version around it, you can log around it, you can observe it, and you can call it, but you don't need to think so much about that, you get that for free. That's now to the point where you have something behind an API, and ready to consume.

Now, there's a bunch of stuff that needs to happen to make sure that it doesn't start saying random stuff, that you protect against hallucinations... It's not just ingesting PII all the time. Dan can probably talk really quickly about that as well, I'm sure.

**Daniel Whitenack:** Yeah, I think part of the reason why I'm always excited to talk to Tuhin and his team at Baseten is because they are experts in this. All of those layers that we just talked about, I was actually on a call with someone the other day, and we were talking about spinning up some microservices or something, and I think my comment was "I just really don't want to care about Kubernetes, because I don't want to wake up lying in a ditch, crying in the fetal position..." That's how I view that whole world. So props to you and your team for dealing with that side of things. I think that's what's allowed us then on like the Prediction Guard side, in a lot of ways, to bring up a model quickly, and then have the time to think about some of these other things.

Tuhin, I don't know if you can comment on -- like, I have my own perspective from trying to run models for my company... But it would be interesting to hear the perspective of different personas that are coming into Baseten. Are they people that are sort of application developers, that are not infrastructure people? Are they like data scientists? What are the types of people that are coming to Baseten? And maybe along with that, as you mentioned, closed APIs are getting used a lot... But still, people are coming over to think about hosting their own models. One question would be "Why?" Who are these people, and why?

**Tuhin Srivastava:** Totally. I'll answer the second one first. No, I think I'll answer them together. It is more and more just engineers, I'd say. I don't know if there's any distinction now between -- I'd say it's less and less data scientists, your traditional data scientists; it's more and more people with some ML exposure, product engineers, infrastructure engineers who have tried to build it themselves, and have really felt the pain.

I think, from a product engineering perspective, why people want to use open source APIs - I think cost is one big thing \[unintelligible 00:18:05.02\] stack up over time, or Anthropic...

\[00:18:11.01\] I think the other one is data privacy and security. You don't want to just be piping over all your data to OpenAI today, and especially when you start to talk about b2b use cases and enterprises. And I think probably the more interesting one is that there are just like a long tail of people working on weird models. People fine-tuning OpenAI models is not great; you get a bit more control with that manual mode, with open source models. And so it's kind of like the longtail of use cases, I'd say, \[unintelligible 00:18:40.19\] more and more. And these can be engineers, they can be machine learning engineers, they can be honestly \[unintelligible 00:18:45.05\] different modalities that there's not that much exposure to with closed APIs, and a lot of custom stuff as well.

**Chris Benson:** You mentioned shipping data over to OpenAI, and I have talked to gazillions of people who have that as a constraint in their businesses... Because the attorneys for the business are like "Nope, you don't want to send your proprietary information and stuff over that." I guess you would not have that issue at all with Baseten., would you? I mean, that kind of goes away altogether when you're hosting in that way, right?

**Tuhin Srivastava:** Yeah. You have ownership over your data. We don't log any of that data. You are training the model as just like a map of inputs \[unintelligible 00:19:24.00\]

**Chris Benson:** Yeah. That would really solve a lot of people's problems, by taking an approach like that.

**Tuhin Srivastava:** Yeah. And I think the second piece there is that once you adopt the Baseten approach, you can then start to think about them like self-hosting, deploying it within your own VPCs. We have customers that deploy Baseten within their own AWS account, and data never leaves their boundaries, or their accepted boundaries.

**Daniel Whitenack:** Yeah. And we've kind of -- I think you've framed the concerns that you're looking at with Baseten very well, the sort of infrastructures, scaling concerns of hosting your own model... Could you maybe take a step back and just describe, like, if I go into Baseten, how have you architected the approach? I'm an application developer, I want to run some random fine-tune of LLaMA 2 that I've created somehow... What is it like for me? What does that look like with the way that you've structured this? And what's some of the thinking behind that in terms of the workflow, and how you want it to be for people, so that they can treat that model as a first-class thing, that is a first-class asset in terms of what they're monitoring and logging, that sort of thing?

**Tuhin Srivastava:** Yeah, for sure. Our goal is just to make it easy, and try to take away as much of the complexity, but maybe more importantly it's to allow you to have a bit of control. I think Baseten \[unintelligible 00:20:53.05\] one line to deploy your model - we don't believe that anymore. We think that, actually, having a little bit of structure around it gives you actually -- building a structure upfront gives you a lot more flexibility a bit down the line. So we have an open source library called Trust, which is basically an abstraction that if you write your model in, you get kind of everything free in. So basically, you need to write two things. You need to write one Python clause, with a load function and a predict function. And this is vanilla Python code; it can sit within your monorepo, you can specify requirements as you want... There's nothing Baseten about these files. You could run them outside of Baseten, and I think that's very important.

But once you write that load and predict function, it does two things. One, it tells us "Hey, what are you trying to do here?" and we can load that up. And when we deploy a model, we load that function, when we infer, we run the predict function... But more importantly, within those functions we allow you to compile stuff down, we allow you to kind of do the tricks that you need to do, so that you still have that control. And within that, you can write pre-processing and post-processing functions that allow you to maybe strip out some \[unintelligible 00:22:03.19\] But really, it's still giving you that control at the product and application level, while still abstracting out the thing we want, with trust. Once you have a trust developed - and you can go to trust.baseten.co and check out a bunch of these - it's a pretty simple abstraction and you could just push that up. We kind of give you all the work on version management around that deployed trust.

**Daniel Whitenack:** \[00:22:27.12\]Yeah. Could you speak then to -- that's like the prep, kind of, that goes into "Oh, I've got my weird model. I'm writing this Python class. I'm going to deploy it somewhere..." And one thing that I think is really cool, how you've made Baseten's trust is -- like you mentioned, it is open source, and so you can run trust things and deploy in a variety of ways, one of those being Baseten's hosted infrastructure, which is of course easy, but it's also generally a great, great sort of framework to package your models. But let's say that you do kind of go the Baseten route, you deploy this through the Baseten client to Baseten... Could you kind of compare and contrast -- let's say I just try to run my model in a Fast API, in an EC2 instance, or ECS, or whatever that is in my cloud... What is going to be different about what I look at when I kind of look at my model in Baseten, versus running this API somewhere else? And how does that make a meaningful difference? Or what are you trying to do in terms of making a meaningful difference for the day to day for people?

**Tuhin Srivastava:** Yeah. Well, I think what you're doing is that -- you know, you can run them all on a \[unintelligible 00:23:49.15\] API. Great. You've got this model, you give it an input, it gives you an output. Fantastic. Let's carry on. But it's like, the depth of features and the creation of workflow which are really important. The depth of features is that - hey, if you can do that with \[unintelligible 00:24:01.16\] You're still gonna have to set up all the scaling, you're still gonna have to set up observability, you're gonna have to stop logging, and whatnot; hardware management. But I think the workflow is probably more important, to be honest, because we're creating a defined way for you to publish new versions of this... If you want to A/B test two models, you can have two models running at the same time... It's really that -- the removal of boilerplate, and the addition of some workflow, so that when you're deploying this in production, and you need to roll back a version, you don't need to go and scramble to find that Fast API file that's required. We've all been there before. And so that creation of workflow is probably, I think, what a lot of our customers probably use us for, besides -- you know, the production-grade inference is a given, but a lot of the differentiation comes from that workflow.

**Chris Benson:** Just to totally boil it down - you're saving them a lot of work right there.

**Tuhin Srivastava:** Yeah. 100%, yeah.

**Chris Benson:** There's a lot have kind of grunge work... It reminds me of Dan liking to do his data massaging that I'm always teasing him about... But joking aside, you're basically saving us all sorts of work so we can get into production faster, get it up and running, and know that it's production-grade all the way through, with a minimal amount of effort, and know that it's just there.

**Tuhin Srivastava:** A hundred percent. We're working with this customer right now - this is worth noting, that this is a pretty late-stage startup; raised hundreds of millions of dollars. AI-native product. They've got a team of four AI infra people \[unintelligible 00:25:33.26\] this, and they've been working on this for about two years... We were able to replicate and get a more performant API up and running in two days.

**Chris Benson:** Wow...

**Tuhin Srivastava:** I think that is what we are trying to -- it's the performance, the workflow, the maintainability, but it's also just the speed to prod.

**Daniel Whitenack:** \[00:25:51.24\] I don't know how many of your users do this, but the fact that this might be sort of revealing about me as a person, and also reveal some utility of Baseten, but I can literally -- last night I'm sitting on my couch, and I can log into Baseten on my phone, and then just change the autoscaling from two replicas to like five max replicas, and the timeout, and all those things of like the autoscaling of my LLaMA 2 fine-tune, from my couch, in between Halo games... So that was --

**Tuhin Srivastava:** That's terrifying. \[laughter\]

**Daniel Whitenack:** I don't know what that reveals about me as a person, but certainly, that ease of use I think is really interesting. It's like that proverb when you try to solve a problem, and then you're like "I'll solve this with regex", and then you just have another problem to solve... It's kinda like that. You want to deploy your model, and then you want to deploy it with Kubernetes, and then you have a whole other problem to solve, and solve the autoscaling stuff, and all that.

**Tuhin Srivastava:** And then I think on top of that it's all the SRE work that you have to do. What happens when it goes down? What happens when you need to migrate something over? What happens when there's a new GPU you want to use? There's just so much -- I feel like we've really turned the corner, and I think stuff like AI and ML really has helped here, because people want to move fast. I'd say we've put the build versus buy debate a little bit to rest for a bit, where we just don't hear it as much. It's like "Hey, we want to build it ourselves." People are just like "We want managed solutions."

**Chris Benson:** Yeah. You've got to go fast these days, because if you don't, somebody else is gonna get there first, and you're not gonna have a business.

**Tuhin Srivastava:** And the market is remarkably talent-constrained. Again, Dan, you're saying this, and this makes me happy, because -- just so you know, Dan's background is in data \[unintelligible 00:27:49.21\] and dealing with all these things.

**Daniel Whitenack:** I've cried myself to sleep...

**Tuhin Srivastava:** In fetal position. \[laughter\] And so really, it's just that ease of use. Its ease of use and the ability to scale with you. And that's probably the two things which we try to bring to our customers. And I think just even outside of Baseten, it's probably the biggest opportunity, I'd say, in machine learning infrastructure right now. Think of all the user stories that are important now, that weren't important 12 months ago, and maybe just take a slightly longer-term view than "What can I build around OpenAI APIs?", which \[unintelligible 00:28:25.22\] a lot of attention... These are all places where Baseten is thinking about going. We will partner with people who are doing it. If you think about people at the emails layer, if you think about people at the finetuning layer, you think of people at the training layer, at the observability layer, at the logging layer. There's an entire new stack here to be built, and that's a massive opportunity.

Mosaic is a really interesting company to look at, to be honest, because they were helping people train their models remarkably early. But the value - it's very, very clear to a pretty sophisticated buyer. And Databricks. And so to any folks building tools around here, there's so much value to be added. It's greenfield.

**Daniel Whitenack:** I have another question to ask you, because you are living in kind of that world of model deployments, and the various ways that people are doing this; people are fine-tuning their own models, or just using open models... I'm wondering how you see the trends going. So you've already talked a little bit about open models being available, small to big models, and how people are hosting them... There's tons of people that are also exploring this area around running models kind of at the edge, or in various environments, or on laptops, and also people that are exploring kind of -- you already mentioned quantization and running models on CPUs, potentially, instead of GPUs... I'm curious, as like someone who hosts a lot of models in the world, what are you seeing in terms of this trend? Because you hear about these topics, but I don't really have a good sense of -- obviously, people are exploring those things, but are those people just extra loud on the internet?

\[00:30:15.15\] Certainly, there's use cases - Chris knows them well - for running certain things at the edge. But for many people out there that are maybe building a SaaS platform or something - that's less relevant, although maybe the costing... You mentioned cost optimization as well around that sort of thing. So yeah, how are you seeing as someone -- I guess my question is, as someone who hosts a lot of models for a lot of people, what are you seeing as people's concerns, both in terms of that costing, optimizing models, and deployment targets, I guess?

**Tuhin Srivastava:** Totally. I think what \[unintelligible 00:30:50.26\] to be honest. People are deploying stuff on edge, but I think there's not enough of them today to kind of think about like a generalized opportunity there. There's a company called OctoML, that started with edge deployment, and \[unintelligible 00:31:07.11\] because that's where the opportunity today is.

I do all the stuff that's happening around running these models on less and less hardware, or optimizing in x way or y way is remarkably intriguing. It's pretty crazy that we can get a model that we can barely run on the biggest GPU we can find, and some folks have figured out how to compile down, or rerun that with C++ kernels, and all of a sudden it runs anywhere. It's pretty fantastic. But I do think that we're still in the research phase of that. We're in the experimental research phase, and we've seen a lot of people deploy those models, we've seen a lot of people play with those models, we've seen a lot of interest in those models, but I can't really think of too many examples of people running those models in production just yet. But it seems inevitable that over time --

**Chris Benson:** Oh, it will happen.

**Tuhin Srivastava:** ...that is the arc that we are on. These models are getting smaller and smaller.

**Chris Benson:** When I'm not on the podcast, I'm in a world where it's all about things moving around in time and space, and a lot of those things will have AI capability on board going forward. I agree with you, there's a lot of research going on, and it's not a solved problem, there's not a set of best practices yet, if you will, but it's an area that is majorly ripe. I'll be really curious to see if you guys or another company is able to leverage all the expertise you've built up and experience you've built up in the cloud, and kind of move out into those areas.

**Tuhin Srivastava:** For you on device, yeah.

**Chris Benson:** Yeah. There's millions of devices out there just waiting for you.

**Tuhin Srivastava:** Yeah. I'd say the challenge there is just around how -- I'm guessing Lockheed's devices are a bit of a snowflake... You know, you can't build for one type of device and just go and apply that to the next device there. I feel like there' probably some generalization that needs to happen at the OS layer before we can do that. But I am also completely uneducated on edge stuf; you probably have a lot more to say than I do.

**Daniel Whitenack:** Well, and it's interesting too, I sort of ask this in a leading way, because one of the people that we're talking to kind of genericized this, but they run some equipment at the edge in manufacturing, and they have like a hub at the edge, which is air-gapped, which doesn't talk to the internet... But their whole next generation of things is going to be internet-connected. And when I was talking to them about doing some things with large language models in that environment, essentially where we got was "Hey, well, it's going to be more hassle for you to figure out some of these model optimization things and all of that, than to just like set up an API in Baseten or something like that and just connect it out, if that's where you're headed anyway." And it's not like a military security concern, one of these situations...

\[00:34:04.05\] So yeah, I think we'll probably see both/and, but for a lot of people it's like -- kind of how I've categorized these things in my mind is yeah, some people will want to run Kubernetes in their own infrastructure, and they have the expertise to do that, and if that's you, then great; you're one of maybe a few people on the planet. I don't know.

**Tuhin Srivastava:** Good on ya.

**Daniel Whitenack:** Good on ya. And similarly with Chris, if you're running a lot of models on the edge, which I know certain people are, and in certain industries it's really important - that's great, and that expertise will be there. But I think for -- I don't know, my sense is that for a lot of majority of people separating out that infrastructure concern of model hosting is really a useful way to think about things. I don't know, we'll see; I'm always bad at predicting the future, but...

**Tuhin Srivastava:** We talked to this one customer who was saying that for some reason their CEO bought a bunch of GPUs, and they literally have machines in the office. He's like "Oh, well, we're gonna do the --" I think Amazon has like the Kubernetes Anywhere, or something, where you can basically...

**Daniel Whitenack:** Like a hybrid sort of thing?

**Tuhin Srivastava:** Yeah. We ran away from that opportunity, \[unintelligible 00:35:13.22\] But I think people are thinking about these problems. I don't know if there is a solution here just yet.

**Daniel Whitenack:** Yeah. Well, as you kind of think about... So obviously -- and I know just from our discussions you're helping a lot of people in really significant use cases in the space already with what you're doing with the infrastructure side of model hosting... But as you look to kind of the next - I can't even say the next years, because things move so quickly... But as you look towards the future, what is not yet solved on the infrastructure side with model hosting, and what are you and Baseten really excited to dig into? What comes to mind, and what are you thinking about?

**Tuhin Srivastava:** Yeah, I think within the containers, that layer gets very interesting, I think. vLLM, which I'm sure you've played around with, TGI, which - they're both great, but I think they're still far from ready for primetime just yet... vLLM, TGI, and that TRT-LLM that NVIDIA just put out... I think there's gonna be more and more of the frameworks, and supporting these frameworks, I think, is going to be very, very key for us and what we're really excited about. So we're going deeper at that layer, so you can kind of bring your own framework, on your container, and really benefit from that. So we're gonna have both \[unintelligible 00:36:41.06\] TRT-LLM pretty soon, and we already do for TGI and vLLM. I think that side's pretty interesting.

\[00:36:49.22\] We have a big launch coming up - and I'm happy to talk about it right now, actually - around multi-cluster. That's basically being able to, one, use your own compute, to bring your compute to Baseten. So the control plane sits on Baseten, and the workload plane \[unintelligible 00:37:05.10\] Azure AWS or some combination of the three, and then we'll keep adding clouds to that. And so I think that's very, very exciting, especially in the enterprise set, because people want self-hosted.

**Daniel Whitenack:** That's huge.

**Chris Benson:** It is. It's really nice.

**Tuhin Srivastava:** That's gonna be big. And then kind of just beyond serving, and I think with \[unintelligible 00:37:25.14\] we've already had one foray, and we learned a lot, and we ended up retiring, but we're gonna get into fine-tuning at some point. Just like I said about kind of like the edge device stuff and the compilation stuff, fine-tuning is still an art. I'm a little bearish on like APIs that say "Give me your data, I'll give you a model." I think you need more controls. As someone who built an API that said "Give us your data, we'll give you a model \[unintelligible 00:37:50.23\] I think you need more control. You need control over your base models, you need more control over even the fine-tuning scripts to customize that model. We'll start to think about that very soon. We're already doing a bunch of work with customers to make sure that we're marching in the right direction... So I'm very excited about that, which is that over time Baseten becomes this place where you can run your models, great, but then you can also start to collect datasets around your model. Imagine if you could just give your model to Baseten and then you either opt in and we basically write all your input and output data to S3.

**Chris Benson:** That's beautiful.

**Daniel Whitenack:** Yeah. Like essentially a level of caching for model inputs, outputs. Yeah.

**Tuhin Srivastava:** Exactly.

**Chris Benson:** Yeah. The multi-cloud thing really will be big for enterprise, by the way, just to that point... Because I think most enterprises across many industries are recognizing that their future is a multi-cloud world; it's no longer tied to one. And if you have Baseten able to do that hosting, and run a control plane, and you can deploy into any of the cloud clusters that you happen to be in, and maybe different parts of the company emphasize one or the other, then that takes a lot of challenge that they're currently facing out of that. So it's pretty sweet.

**Tuhin Srivastava:** I mean, it also opens up opportunities, especially in a GPU-constrained world. You can get them for wherever you want. And then I think once you have datasets as well, then fine-tuning just becomes obvious, which is like "Okay, now I \[unintelligible 00:39:12.21\] Maybe it's even like "Hey, hook up your OpenAI endpoint using Baseten, so we can collect that dataset, and then we can create that, fine-tune Mistral or LLaMA 2 \[unintelligible 00:39:24.12\] So I think there's a lot of interesting things along that \[unintelligible 00:39:26.11\] As I've said to you guys earlier, there's so much opportunity here for people building in the tooling layer around AI and ML. It's very exciting.

**Daniel Whitenack:** Yeah. Well, we appreciate you taking time out of doing great work in that layer, to talk to us and share with our listeners. This was a great conversation, and hopefully we have you on the show in less than three years from now... But if not, at least three years from now, hopefully sooner. So thank you for joining us again, and giving us an update and some insights around this, and really appreciate what y'all are doing, and appreciate you taking time.

**Tuhin Srivastava:** Cool. Thank you so much for spending time on the show. It was fun to be on it.
