**Chris Benson:** Welcome to another edition of the Practical AI podcast. My name is Chris Benson, I'm a principal emerging tech strategist at Lockheed Martin, and with me as always is Daniel Whitenack, a data scientist with SIL International. How's it going today, Daniel?

**Daniel Whitenack:** It's going great. I think we discussed when we recorded last week, which was pre-U.S. Thanksgiving, our plans for Tofurkey for Thanksgiving, which I had... I'm not sure if you partook as well...

**Chris Benson:** I did... So anyone who listens to us regularly hears Daniel and I talk about our plant-based meals. And I'll take a two-second divergence - I had an interesting entry into Thanksgiving dinner that has nothing to with AI/ML whatsoever. We were just about 5-10 minutes from sitting down, and I got a call from a neighbor saying "I have a large, black snake in my house. Can you come help me?" Anyone that listens to us knows I'm the animal--

**Daniel Whitenack:** Yeah, and you're on-call for that sort of thing, I think...

**Chris Benson:** I am. So totally separate from all this, what we're talking about today, I do a bunch of animal stuff, and I actually run a snake hotline. How weird is that? Do you know anyone else that runs a snake hotline?

So I get the call, I go, and I have a neighbor with a large, black Kingsnake in their basement. They were very upset, because they were not very snake-savvy people... So I calm them down, we got the screams to stop, and I picked the Kingsnake up and carried it delicately outside, released it, educated them along the way as the screaming stopped...

**Daniel Whitenack:** You made an unexpected house visit on Thanksgiving, in other words...

**Chris Benson:** It was, it was... And then I dashed home, just in time to sit down for Thanksgiving dinner. So it was a memorable Thanksgiving dinner in that way.

**Daniel Whitenack:** \[00:04:06.14\] Yeah, that's great.

**Chris Benson:** A little odd story that goes with it.

**Daniel Whitenack:** Yeah. That's awesome. Well, we have some interesting things to discuss today, including - you know, if you were to have taken a picture of that experience, you might have wanted to come up with a caption for it, and that might have been somewhat difficult. That's one of the tasks that we're gonna discuss today.

**Chris Benson:** Indeed.

**Daniel Whitenack:** And we're really excited to have with us Bharat Sandu, who is the director of Azure AI and Mixed Reality at Microsoft. Welcome, Barat.

**Bharat Sandu:** Thank you. Thank you for having me.

**Daniel Whitenack:** If you could just give us a little bit of an idea about your background, and how you got into AI, and what you're doing now...

**Bharat Sandu:** Yeah, sure. By the way, just for Thanksgiving - even we had a plant-based Thanksgiving last week, so we joined you. No snakes though.

**Daniel Whitenack:** Oh, good. Do you have any recommendations on that front for our listeners? We always try to throw in an occasional recommendation.

**Bharat Sandu:** You know, we just tried to reduce the amount of meat we eat, my wife and I. So we tried it this Thanksgiving, and we just cooked up some new recipes. A green beans recipe it was. It turned out extremely well. It was spicy, and \[unintelligible 00:05:20.23\] But yeah, we just copied some recipe on the web, so I can share that with you.

**Daniel Whitenack:** It's good. I don't know that mine ever look quite as tasty as the picture on the recipe, but sometimes just finding those recipes online - it works out pretty good.

**Chris Benson:** You know, before long -- because this is not a new topic. We have had other folks on the show, talking about this on the side before we got into the main topic... Pretty soon, we're gonna need our own conference. It will be like The Plant-Based AI/ML and Data Science Practitioner Conference... Just saying.

**Daniel Whitenack:** Yeah.

**Bharat Sandu:** Yeah. It'll describe to you what you cooked, and what your cook could have cooked. Actually, cooking is kind of like machine learning - it's not just the ingredients, it's how you ship them, and the work that goes in it.

**Daniel Whitenack:** I'm glad you bring that up, actually; it's one of my favorite examples that I give when I'm teaching workshops - a lot of industrial AI applications are really more like using a recipe, and bringing you ingredients to it, rather than designing the recipe itself, right? And maybe that gets into some of how people use Azure AI and other things, which we can talk about.. But yeah, before we get into that, I'd love to hear a little bit about your background, and how you ended up where you're at right now.

**Bharat Sandu:** Yeah, so I've been at Microsoft for a bit over ten years, close to eleven years now... But I'm a computer engineer by training; my first job was a computer engineer writing code... And you know, before we got on the call, we were talking with Chris with Lockheed Martin; so my first job was this company National Instruments; I started as an engineer, but then I moved out to work with customers in our field engineering and sales division back then...

**Daniel Whitenack:** Are they the ones that make LabView?

**Bharat Sandu:** Yes, that's right, LabView.

**Daniel Whitenack:** Okay. That's my experience with National Instruments. For those that don't know, LabView is software that helps you interface with all sorts of different instruments, and circuits, and design various things. Anyway...

**Bharat Sandu:** Yeah. If you're an engineer by training, and you start working with customers like Sikorsky, making the Black Hawk helicopter \[unintelligible 00:07:33.15\] F35 now...

**Chris Benson:** Correct.

**Bharat Sandu:** It was quite fascinating, because back in the day not that many companies were collecting a lot of data, but these companies were collecting a ton of data, and kind of building hardware-in-the-loop testing, and those kinds of things... So it was a fascinating time. So that was my early career learnings, working with folks building literally jet engines, and working with tons and tons of data, and trying to make sense of them... We actually focus a lot on hardware-in-the-loop testing, which is before you actually build something and you wanna instrument it all up you wanna maybe do some simulation \[unintelligible 00:08:14.29\]

\[00:08:22.01\] And you know, nevertheless, I did that, and got my MBA, and then I joined Microsoft... And in Microsoft, my career has mostly been commercializing incubation businesses, \[unintelligible 00:08:28.19\] unified communications, which - it's funny we talk about over Zoom right now, but 11 years ago, at least for Microsoft, it was a new entry back then.

And then I joined the Azure IoT team. We were launching our Azure IoT offering, and in the big data space, and in the last three years really the AI space... And very recently, the mixed reality. The common trend has been commercializing these very emerging, new technologies, and making it a viable business value proposition for companies, for our partners, and for our customers, making it easy for them to benefit from these technologies.

**Daniel Whitenack:** You know, it's pretty interesting... I think a lot of companies that are getting into AI, whatever AI-based system they're creating might be one of those things that they're incubating within their own organization. Do you have any insights from your experience productizing these different incubated ideas into actual offerings? Do you have any insights for those out there that maybe their AI-based system is their internal incubation project - any suggestions for them, or advice?

**Bharat Sandu:** Yeah... First of all, technologies come and go; deep neural networks that are fancy today will be quite passé in a few years' time. Just like reinforcement learning is coming into vogue in some areas... But these are just technologies, so never get fascinated by technology; at least for those of us who work in technology companies, we have to be very careful of that... Because we get super-excited about new techniques.

It really is,, actually -- at the end of the day, business has not changed. We have customers, and we have to serve them better. And we have competition, and we have to provide better offerings than the competition. So being super-grounded, whether a project is gonna help dramatically reduce cost, improve operations or increase revenue. That's the most fundamental starting point.

I have seen - and I think we all have - a lot of organizations that have incubation or innovation offices... Which is great. But as we work with customers, it's always like "Okay, what is the core business need?" and more importantly, have the key stakeholders bought into it upfront? And then they signed up for maybe a year-long project, or maybe sometimes longer, to prove out whether this kind of venture, in this case AI, for this particular application, is actually gonna provide value for the business or not.

So just setting up the project in a very methodical way, with key stakeholders bought in all the way upfront, and then having regular meetings, and making sure we have the KPIs indentified, or improving them as we go through it. It's super-important. So that will be the one thing we'll say -- at Microsoft, we make sure we stay true to that.

At the same time, for us, we have the luxury, like with some other companies at Google and Apple and Amazon, to do a lot of just pure research... But a lot of companies in the world do not have the luxury sometimes, especially if their core competency is not technology or AI/machine learning. For these companies, it's our duty to help them walk through how they can evaluate projects, not just technologies.

**Chris Benson:** Gotcha.

**Bharat Sandu:** So I will just go back to kind of business basics.

**Chris Benson:** When I was introducing you, and I mentioned your title, one thing I wanted to follow up on is part of your title is Mixed Reality. We hear about all sorts of different types of something-reality - virtual reality...

**Daniel Whitenack:** Virtual reality, augmented reality...

**Chris Benson:** Augmented... But what is mixed reality, or at least how does Microsoft define that?

**Bharat Sandu:** \[00:12:06.04\] Yeah, sure. Mixed reality for us - and I think X Reality is a new term that's also started kicking around... But basically, if you look at the way we interface with our phones, our laptops, it's a 2D screen. And then you have things like Oculus Rift, or Windows virtual reality headsets; I got an Oculus a few weeks back, I love it. A Quest, sorry. Oculus. So virtual reality. There, you're in a virtual reality environment, but you're in a separate environment. You're totally removed from the physical space.

Then you have augmented reality, which - HoloLens is an example (Magic Leap is another example), where you can actually see through, and you can see holograms. So you can have presence of the world around you, as well as virtual elements in it. Now, mixed reality is a term that spans augmented and virtual reality; because what you'll see happening more and more - and even with Quest, I was quite impressed to see you can actually see through, and see the augmented reality... So from a development platform perspective, you should not have two separate set of tools and development environments, and Unity for this, and Unreal for that; you really wanna have a consistent development platform, a consistent ecosystem. And really, for our customers who use these technologies, some will of course have a better experience in virtual reality, like gaming. But for a lot of industrial/commercial use cases, augmented reality is much more effective. But they also have a seamless experience through these different devices.

So mixed reality as a term is meant to span the world of virtual reality and augmented reality. It's a common development platform and a common user experience. It's really more of a term at this point, but it is meant to bridge the two different worlds right now.

**Chris Benson:** It sounds like kind of that element of common has a lot to do with it, in terms of spanning...

**Bharat Sandu:** Yes.

**Chris Benson:** So would it be fair to almost say it's kind of taking augmented reality and applying common tooling across, so that your productivity is improved without some of the natural distinctions on the two sides of it...?

**Bharat Sandu:** Absolutely, yes.

**Chris Benson:** So if you're a developer, you don't have to learn two separate types of developer stacks, and so forth. Of course, there will be some nuances, but more and more, as much as we can make it easier for customers to go from an iOS or a phone-based augmented reality system into really a holographic, HoloLens kind of experience, to even a virtual reality experience... And the developers don't have to learn a different stack every single time, a different set of tools every single time. I think that's additive value to the ecosystem. So that's one thing. As an end customer also, we're not there yet, but we have a consistent experience, and they'll have a consistent experience through the different devices, and so forth.

But yeah, mixed reality is basically a bridging of these virtual reality and augmented reality worlds.

**Daniel Whitenack:** And is that where the kind of common thread with the other things you're involved with, in terms of the Azure AI platform... I know just from my own experience there's so vastly different number of environments that people use for developing AI... Are part of the goals with the Azure AI platform similar, in the sense of bridging some of those and creating a unified development experience?

**Bharat Sandu:** Yeah. Also, I would say AI is a much more mature place than mixed reality or AR software. But yes, I think there's common-- basically, simplifying the developer experience is the common thread, for sure.

The other thing is also, by the way -- mixed reality or virtual reality or augmented reality is a really good example of applied AI. So when you're doing hand-tracking, for example, that we do in HoloLens, you can imagine that it's literally looking at the hands and saying "Okay, this is fingers pointing one particular way; it's pointing that way, or it's grasping my hand here..." And to even create a dataset - of course, you can capture a lot of hand angles, but you can also in a 3D \[unintelligible 00:15:51.22\] create different 3D orientations of a hand, and have the labeled dataset so you can train your hand detection models, and so forth. And even all these devices in HoloLens - you can speak to it, so there's a real on-board speech recognition, and so forth.

\[00:16:07.26\] So one is, of course, a very good example of applied AI for us, but the second one is for our customers and our developers, it is actually the simplifying and accelerating the development experience... And really, at the end of the day, helping customers realize more value out of these technologies.

**Chris Benson:** So as you describe it that way, would it be fair to say if you take applied AI, meaning deep learning, reinforcement learning, things like that, and enabling the mixed reality environment or experience with these technologies, and that becomes kind of the use case, if you will, for the applied AI as an enablement technology - is that a fair way of talking about the relationship between them?

**Bharat Sandu:** Yeah, absolutely. Of course, not every single application needs to have the customer or the partner build an AI element to it, too... But we had this example in - I believe it was Disney, where they actually had a depth sensor sensing people walk up to a screen, and I think they were doing the Stranger Things... Yes, they were doing the Stranger Things enactment, and the \[unintelligible 00:17:06.01\] will come out and will say "Who are you?", you will say your name, it will use speech-to-text/speech recognition to understand your name, but then do modulation of the speech and text-to-speech to speak back to you, and to \[unintelligible 00:17:22.14\] and so forth. There you actually have blending of AR and AI from a customer perspective, too.

Right now, these are two distinct businesses for us. In some places they overlap when it comes to customer use cases, but a lot of the way we take these technologies to market has a lot of commonalities, of kind of going from super-early incubation into commercial businesses. So there's a business connectivity tissue also.

**Break:** \[00:17:51.27\]

**Daniel Whitenack:** Bharat, I'm kind of interested, while we're talking about the Azure AI platform, to dig in a bit to what developing AI in the cloud looks like now... In its very sort of raw form, I imagine people might think "Oh, I could spin up a cloud instance or a virtual machine, maybe attach a GPU to that, and do some AI things." But of course, each cloud provider has developed a whole suite of different things that aid AI development... What does that picture look like in Azure AI right now?

**Bharat Sandu:** Yeah, so our AI stack -- do you mind if I just explain what our \[unintelligible 00:19:27.06\]

**Daniel Whitenack:** Yeah, please do.

**Bharat Sandu:** First of all, there's a ton of innovation in AI in the open source world, which is awesomeness. Our goal is to make sure we can provide that to our customers in a more packaged fashion. We also have a ton of research centers around the world; we have eight research centers, and the work they do is really fine-tuning and developing the algorithms. Their charter has really been to say "Okay, let's go and build the best text-to-speech, or speech-to-text, or image captioning (that we'll cover later on) techniques."

\[00:20:02.10\] Now, these are researchers and PhD's in machine learning; there are more of those now than we used to have maybe many years back... But they're really specialized really deep in the machine learning space. We take all the work they do, and then we bring it to Azure AI.

Our goal on Azure AI is to use all the open source technologies available, all the work we're doing in that space too, and taking all the research milestones, and baking them on a platform that we can give to developers and data scientists, so then they can use it from a simple, no-cost, free API call, to kind of doing high-scale reinforcement learning techniques.

We also, by the way, test this stuff in our own products, and we have the -- I think we're just lucky to have many different types of endpoints, from teams, which if you were to join a team session now, you can do transcription of all the calls; they can do recording and transcription, and translation. So all this is powered by Azure AI.

Within PowerPoint, if you've used it recently, there's something called PowerPoint Designer, that looks like PowerPoint bullets, and say "Hey, maybe you wanna actually have a better representation of the slide." And it's really using Azure machine learning under the covers to do all the inferencing and give you those recommendations.

And even Xbox - you know, the holiday season is here... But if you have an Xbox, if you log in, you're given a personalized screen. So if you log in, Daniel and Chris, you'll get a different dashboard. And that's powered by Azure AI. The service is called Personalizer, and that uses reinforcement learning behind the scenes to do very personalized recommendations for folks. The same technology is available to developers.

So our approach to bringing AI to developers and data scientists is we take things in the open source world, we of course do our own research, and then we package it, and then the real goal is to make it usable for customers, whether they're very professional data scientists, so give them access to the best collaborative notebook environments we can, with highly scalable compute, so they can do their highest-end training work they need to do, all the way to simple APIs that any developer can call using any of the languages of their choice, and add AI to their applications in a very simple fashion.

And then what we have also done recently is we've started creating what we call scenario-specific app services. We can get into that... A good example would be a metrics advisor, where we have anomaly detection models running behind the scenes, but that also have a bunch of other logic around them, doing just data from multiple time series sources of data to do root cause analysis, and to have composable UX elements that a developer can embed in the application.

So if they wanna do more with metrics monitoring, we don't just give them a model, but we give them a higher-level \[unintelligible 00:22:42.22\] service that does a lot of other work and other business logic for that thing.

So that really becomes a platform... At the base we have Azure machine learning, which is used to train machine learning models; on top of that we have customizable AI models - we call them Cognitive Services. Those are speech, vision, language, and so forth. And then on top of that we have a set of services that are really tuned for separate kinds of scenarios, like form recognition, to metrics monitoring, and so forth. And that's really a stack for Azure AI.

We do go one step beyond that and we have a platform called Power Platform. I'm not sure if you're aware of that... It is basically our platform for business users; it's a no-code/low-code environment, and it really allows citizen developers really to go ahead and design applications. So all the Azure AI tech that I described is provided in a low-code/no-code way in this environment for anybody with a citizen developer to build AI into their applications without having to write code.

**Chris Benson:** That's fantastic. First of all, I wanna say, regarding my next question, you've actually answered it in a fantastic format, kind of going through a lot of the benefits... But I also wanna distill it a little bit, because so much of our audience are practitioners...

**Bharat Sandu:** That's right.

**Chris Benson:** \[00:23:58.23\] ...that are engaged in AI, and it is very typical for them to be in an environment where they're gonna engage in a project, and they may have access not only to Microsoft, but competitors as well... And they're trying to justify that. If a practitioner has just listened to this episode - and we have more to go, obviously - and they're like "I wanna do Microsoft AI on Azure", how would you differentiate it or how would you recommend they differentiate it for their manager, or whoever they are having to report back to, to say "I definitely don't wanna go with the other guys, I wanna go with this one"? How would you position that?

**Bharat Sandu:** First of all, I must just say - it's better for the AI field if the customers go with anybody and they're doing amazing AI projects.

**Chris Benson:** Understood.

**Bharat Sandu:** So I just wanna acknowledge that. We have great competition, and that's great for the industry, and we're excited to play a role in this thing... But what guides us is our core three main investments. We've had the fortune of working with multiple enterprises over many decades as a company, so we're really honed into making things enterprise-grade.

So it really breaks into three main things. First is making sure we can give the tools to developers, and bring all the heritage of IDE tools, and so forth, on their terms... Which means they can use the tools and frameworks of their choice, whether they're professional data scientists and they love Jupyter Notebooks, and then they wanna use TensorFlow or PyTorch. Great. But then have it optimized for high-scale training, the kind of work we do with OpenAI, for example, and give them really fleets of very high, powerful computer infrastructure, which is not just GPUs, but also the networking layer for them to be able to do training very cost-effectively, at the end of the day, and highly reliably.

But that's for what I'll call the more professional practitioners, who are really looking for tooling to do ML in a scalable, reproducible fashion. And that's really the Azure machine learning layer, where our investments are making that really robust machine learning platform on the cloud. That layer is really resonating with the customers.

But the second one would be for customers who are not deep machine learning experts. It's easy to say "Hey, you can have an API call, and you can then have an AI model in the application", but the AI model has to be really good, otherwise it will work, but it will work in a bad way.

So our commitment to quality, whether it's speech-to-text, or text-to-speech, or getting \[unintelligible 00:26:20.25\] models, which are very large-scale models, but available through an API call. So your language or text analytics is very high-fidelity.

And then also the high-end services. So not just having models, but the ability to get to market faster, for form recognition, and other scenarios; we do indexing, and so forth. We have these services that a lot of times our competitors don't have it at the level we do... And be able to kind of provide these various levels of access points to work on, but work on one environment together. So that's one thing.

Other two things I would like to say, which I think we sometimes take for granted, but are super-valuable for our customers, is really baking them and making them enterprise-grade. It might sound boring, but things like VNet, and having the ability to run these in environments that are highly regulated, and having the certifications, having all the services and models be certified, and so forth; it goes a long way.

And the last one, which surprised us too, is our commitment to responsible AI is proving us to allow customers to take AI and use it in their applications much more effectively. So if you add not just principles, but even tooling that we provide to our customers, and guidance that we provide to apply AI in a responsible fashion.

So really, those are the three things. One is allowing customers to get access to AI on their terms, whether they're professional data scientists or just developers who don't have machine learning expertise at all, but wanna get access to Ai. Second, giving them an enterprise-grade fashion, so they can deploy with confidence, and third one, also giving them responsible AI - not just guidance, but also tools and capabilities to do it. And having it all built into our products, not just "Here, you can go to this doc here, you can go to that GitHub repo there." It's all available as part of our platform.

**Chris Benson:** \[00:28:17.24\] That was a great explanation. You mentioned along the way OpenAI, and I know that Microsoft has an exclusive relationship on GPT-3, which obviously the whole industry is excited about with OpenAI... I'm assuming that at some point that becomes pretty normally accessible via Azure. Anything you can share on that, along where that's gonna go or what we should expect?

**Bharat Sandu:** Yeah. You know, we're still working with them on a lot of these things right now. Right now, what we wanna make sure we can enable OpenAI to do - really breakthrough AI research, and to give them amazing cloud resources, so things we spoke about. I think we have now the fifth largest super-computer. It was probably the first one in the cloud, that they access to build these models. These are about 300,000 CPU cores, 10,000 GPUs, and the networking layer that goes with it... And then also it allows us to develop our optimizations.

You might have heard of something like ONNX Runtime, which is useful for high-speed inferencing, but we've also tuned it to do high-speed training. But all those optimizations kind of came in also with the work that we've been doing with OpenAI, and even internally, and all that stuff.

So yeah, there's more to come on where some of this work shows up, but we also -- our goal is to allow OpenAI to do amazing work like GPT-3, and give them the ability to do it from tooling, and all that. And all that also shows up for our customers, even if they don't get access to a GPT-3 model today, which they can get from OpenAI. But all the work that went into enabling OpenAI to do the work is available to our customers also.

**Daniel Whitenack:** Before we leave this subject of Azure AI platform, where are some good resources for people to dig in and get started? Maybe specifically for data scientists or software engineers who are wanting to get their hands dirty, working a little bit with the Azure AI platform? Where can they get started? Any recommendations for them as they're sort of onboarding?

**Bharat Sandu:** Yeah, obviously, depending on where they are \[unintelligible 00:30:14.03\] If they already know machine learning, the machine learning practitioners, just jump into Azure machine learning. The documentation, we have a bunch of courses on our Microsoft Learn. You have them on Udacity too now, and other courses; you can take courses. But if you know machine learning, the best way is to kind of just dive into the product. And again, the product is really designed for ML as a team sport, especially for folks that have AI teams or data science teams, or data engineers, scientists that wanna work in a collaborative environment - they'll really benefit from AML and having to do it with really modular ML pipelines.

So it'll be great to jump into the product and learn about what an ML platform in the cloud provides, like Azure Machine Learning. So just go to Azure Machine Learning, or ml.azure.com. If you don't have Azure subscription, you'll be able to sign up; it's free, and you'll get access to it. That's a great place you can learn.

The documentation is obviously a really good place, and an easy place for people to access. If folks are wanting to learn - and same with all the rest of the portfolio - you can also go to www.azure.com/ai. That will take you to all the different offers we have.

But if folks who are interested in learning machine learning, who might not be experts, we recently partnered with Udacity to launch a couple of courses... And they're really good, in-depth courses that have been developed by us in partnership with them. So that'll be the second place I'd recommend them.

We also have great training on our Microsoft Learn website, and there you can go deep in different areas. So those are the three main areas. The product itself - and please, give us feedback on what you don't like, so we can improve it - and the learning courses that we just mentioned.

**Break:** \[00:31:50.02\]

**Daniel Whitenack:** So Bharat, in our conversations prior to the show we had talked a little bit about some of the work that Microsoft is doing research-wise and productizing research to enable computer to be used to help people who are blind or have low vision... And we talked a little bit about the Seeing AI app and other things, but I was wondering if you could just give us a little bit of a briefing on Microsoft's work in this area. I know that they had a pretty interesting milestone in terms of image capturing, so maybe we can go into that a little bit.

**Bharat Sandu:** Yeah. You know, as I mentioned earlier, a big focus is doing good research, but then putting it into products. And things we've done in the responsible AI work, from model interpretability, fairness detection and all that, which is available in Azure Machine Learning - we did the same thing very recently for a lot of the cognitive services family of products, which is the customizable AI models... In particular, we did the image captioning milestones.

You might know, there's basically no image captioning benchmark; if you look at image captioning, there's a technique where you show the computer an image, and it says "This is an image of a plant." Normally, the way these things have been trained is by actually giving them images, and complete sentences of what these images are. So what the research team did was something different. They actually went about how children would learn a vocabulary.

In real learning, we basically say "Hey, this is an apple. This is a picture of an apple, and this is an apple. This is a picture of an orange, and this is an orange." We never say "This is an apple sitting on a table." So that's the first process that we went through, was just building a visual vocabulary by really training object and what the object was. Then \[unintelligible 00:34:02.00\] pre-training of the model.

For the fine-tuning, they actually then started giving four sentences to the image, to the model. So the inference time - what it first does is it does a visual vocabulary; so it's an image that contains A, B, C. Then, based on this fine-tuning step, it is able to put together sentences.

So we've had image captions for a while, but we really dramatically improved it. Some couple of examples - there was a picture of... And I'm happy to share these before and after; it's easier to see it than explain it... But imagine a picture of a doctor with a stethoscope; before, it said "A woman looking at a camera", now it says "A woman wearing a stethoscope around her neck." So very much more accurate.

Before, for a picture of a satellite looking up in the sky, it said "A yellow sunset", because yeah, there was a sunset. But now it says "A satellite dish on a dirt road." So basically, it was because of the ability -- the way that we trained the model. And really, what it has actually also done -- there was a benchmark that they were able to beat, and really achieve human parity... Which really means the computer is describing images in the same way that you or I would describe images, or sometimes even better.

So that was a research milestone. These research milestones are very fascinating. Organizations have them around the world all the time. What we wanted to do was bring them to our developers. So in record time we brought them to Cognitive Services... It's a feature of the computer vision API that's available as part of Cognitive Services; there's a free tier, people can try it.

We've also, by the way, embedded it into our applications. In PowerPoint, and Word, when you insert an image, you can do alt-text to describe the image. Those models, they are now seeing AI as the application that was developed to really help people with applying this to see the world around them, and you can only imagine the kind of impact this kind of technology can have in the world.

So that's a quick, super-quick overview of the research that went in, and then really how we're bringing it to developers and customers.

**Daniel Whitenack:** \[00:36:08.25\] I think this is amazing... Oftentimes on the show we talk about various things, like object recognition, or computer vision, or other things that are either seen by a lot of people as competitions to be a part of, or benchmarks to break... But really seeing how that can actually connect to benefit people in a really positive way, so impacting people in terms of the Seeing AI app, or helping accessibility in other ways - that's a really amazing place where AI can have a contribution, so I really appreciate you sharing that, and Microsoft for really emphasizing that, because it is really amazing work.

Has long has the Seeing AI app been around, and have there been impressions of the app from the blind or low vision community?

**Bharat Sandu:** Yeah, it's been there for many years; I'd love to go see exactly how many years, but... At least the last five years I believe it's been out there. Four, five years. I believe it runs on \[unintelligible 00:37:11.08\] in the industry for disabilities... Those things are great, but really, at the end of the day I think it's the ability to provide something to the world that improves people's lives; this really goes to our mission of empowering people, all people, to do more with what they have.

So it's been there for a while; it has good adoption. Saqib, who created it, is blind himself. He works at Microsoft. We're just super-honored to have -- that's one example of us helping customers do more.

The other example you might not know is something we have called Immersive Reader, which is also, by the way, available as a cognitive services that developers can put in the applications... But if you download the Edge Browser, you can right-click on the \[unintelligible 00:37:58.21\] and it says "Read Aloud" or "Immersive Reading." So it does a lot of different things. It allows you to blow up the text, it allows you to focus on separate parts of the text... Of course, it reads the text to you, and so forth. That's another thing we've been doing to use AI to help people with disabilities just do their jobs really well.

**Chris Benson:** I love hearing that. We talk about these kinds of use cases pretty regularly on the show, the general classification of AI for good, in different ways, and making the world a better place. So those are pretty fantastic...

As you were going through that a moment ago, it made me wonder - you were talking about research, and stuff... And within Microsoft, as new research is coming either internally, or external to the organization, and everyone's consuming it and trying to understand the latest advancements that are going on - how do you get from that point where you read the scientific paper, and at some point somebody realizes there's a service in Azure that you can utilize that, and it becomes something that people like us will then use through Azure Cloud? What does that process at a high level look like, to get from a cool new thing that we're reading about, to something that you're now offering to the public?

**Bharat Sandu:** Yeah. Look, some of this work is what I call loosely-coupled. Because if you try to orchestrate it too finely, then things break down. Because all research is exploratory, and should not be tied to commercial goals directly; it's in the area of just pure research and pure learning. So we have dedicated research on there, but it's totally connected to our product side. And AI is a great example, and quantum computing is another example. Some spaces where really, cutting-edge research has a direct line into our engineering teams, where we're actually always looking to see -- especially when we look at vision, speech, language, and what we call decision category, which is where the computer is making a decision, or the AI algorithm is making a decision, where something is not just classifying it, but actually making a decision, and recommending something on behalf, automatically, not just classifying it, again. These are the \[unintelligible 00:40:05.08\] research also that we really invest in.

\[00:40:10.04\] So our research teams stay super-plugged in with our engineering teams, or rather our engineering teams stay super-plugged in with the research teams, and as these things happen, we have an established mechanism to take literally raw research and have pipelines built to put them into production, and processes to do that.

One other thing we've done a lot is have a responsible AI thread throughout this area... Because it's easy to say we have principles of responsible AI, and we of course do, but it's also like "Hey, was the data collected with consent? What kind of data was collected for this research breakthrough? Or before we productize it, what other ways do we need to augment the dataset to make sure these are not biased \[unintelligible 00:40:47.00\] There's a very big ethics committee that works through, from research into releasing it as a product to the world, where we augment anything that might have been missed in the research phase... Because that's really not the focus here oftentimes, as you can imagine.

It's loosely-coupled, but it's connected, and then we have a set of processes that walk us through and it enables us to bring these things to market really quickly, but do it in a responsible fashion, too.

**Daniel Whitenack:** I think it's pretty interesting that you've had the chance to work for many years on these incubated projects within Microsoft, and it strikes me that this might give you a unique perspective in terms of the future trajectory of some AI-related technologies, and maybe things on the horizon... So I'm curious to know a little bit about what excites you about the future of Practical AI or AI Platform, or the mixed reality space and some cross-over there. What are some of the things when you're falling to sleep at night, what are those things that are running through your mind, that you're dreaming about?

**Chris Benson:** This is my favorite question when we ask people this, because we get some really cool answers back... No pressure, but...

**Daniel Whitenack:** Yeah, we've never had anyone pull out their dream journal and read something off, but... \[laughter\]

**Bharat Sandu:** \[unintelligible 00:42:10.03\] AI is a fascinating space, because I think it's not just in the incubation space now. It's getting more and more mainstream, in many other technologies... And even when you compare other technologies, it's gaining mainstream adoption faster, and it's really happening, I just believe, because they're what we call digital-native companies especially, that have been building the foundation, they've been built in the cloud and have used AI and ML as a way to really separate themselves.

So the things that I'm excited about, to be more precise - we see companies that you would not imagine using machine learning, and doing it not just for descriptive analysis, but actually running ML pipelines, building thousands of models. \[unintelligible 00:42:51.25\] Australia. They make windmills, and now they're building a machine learning model per windmill. Not just one generic machine learning model.

\[unintelligible 00:43:07.10\] is another commonly-known name, but it's not a born-in-the-cloud company; it's a very old company, that has really adopted technology to really help them out-innovate their competition... And they're also, by the way, using Azure machine learning in this case to do the email phishing attacks, to detect them; because they have a huge employee base. And they're using very sophisticated ML pipelines to not only train the model once, but to actually look at all the emails that come in, and to kind of then stack rank them in the risk factor, and then to run more sophisticated machine learning models to really reduce the amount of things that are happening.

\[unintelligible 00:43:43.13\] is another one. They use machine learning to do fraud detection activities. And when they wanna say "Hey, Chris, you're a loyalty member, but you did something bad", they need to be very sure before they ask you that question. And they're using, again, machine learning, and the responsible machine learning capabilities to make sure the models they build have super-high confidence. They're using model interpretability, and all that thing.

\[00:44:08.19\] So what really gets me excited is a) we have many more mainstream companies using AI not just in the lab, but literally doing thousands of models in production, and really revolutionizing the businesses now. So it's really not in the hands of, let's say, Google, Microsoft, Apple only. It's really what I'll call -- I'm sure Lockheed Martin also does a bunch of machine learning, although I don't work with them anymore... A little bit, right? But these mainstream companies are benefitting from this a lot. That gets me excited every single day.

The second thing is the space is innovating at a super-fast pace. We have GANs, we have all these new techniques coming in. And it almost seems like what was cool two years ago is quite passé now. We all use scikit-learn, but nobody really talks about it that much in this sense, right? Now we're all about putting deep learning models in production at high scale... And the space of getting new AI research into the world is just super-fascinating.

What keeps me excited - I think everybody in this field is - AI should never be in the hands of a few, and increasing it's not. Now, as it does get to reach more people, you have to do it in a very responsible fashion, and that word cannot be used loosely... In the sense that yeah, anybody can build a model \[unintelligible 00:45:26.01\] give them the ability to look under the hood, to understand does that data have any issues, were there any biases built into the data, or they have high cardinality issues...

You know, just because a model is 99% accurate, if it's classifying the wrong thing and it's missing 9 of the 10 cancer detection, it's a pretty damn bad model. But being able to know -- bringing the sophistication of being a data scientist to people who are not data scientists is not easy. We should never trivialize using API \[unintelligible 00:45:57.15\] you're happy and you go and deploy around the world...

Now the fun part is "Okay, now that we simplified some aspects of machine learning, how do we make sure it's applied in a way that people who are applying it fully understand the implications?" And that's a super-exciting space for me, and what the industry is doing, what Microsoft is doing... Not just simplifying it, but making it practical at the end of the day, so more people can benefit from it.

And it's a never-ending cycle - new research comes in, taking to market, and doing it in a way that most people can benefit from it; controlling the hype around this topic, but really driving the benefits for our customers.

So it's a long-winded answer, but it is kind of making sure AI is applicable to large sets of customers, but in a practical fashion, not in a buzz-worthy fashion. Not just saying "One click, and boom, you have a model."

And the second one is just the pace of innovation and new techniques coming in, and the opportunity it offers to customers, even who don't have data, to do machine learning. Things like reinforcement learning techniques, when applied correctly, can solve some of these issues. So it's really making this not a special topic, but a really widely-useful topic is what excites me and keeps me up.

**Daniel Whitenack:** Awesome. Well, I don't know about you, Chris, but I'm inspired.

**Chris Benson:** I'm psyched right now, if you can't see...

**Daniel Whitenack:** Bharat, a really great way to end our conversation here. I think our listeners will be equally as inspired. I hope that they get out and try some of these things in Azure Cloud. We'll make sure and include links in our show notes to all of those things that we discussed... So make sure that you get out there and try some things, get hands-on... And yeah, thank you so much for joining us, Bharat.

**Bharat Sandu:** Thank you for having me, and thanks for having a great podcast.

**Chris Benson:** Thank you.
