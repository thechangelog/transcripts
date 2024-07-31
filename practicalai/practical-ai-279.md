**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I am founder and CEO at Prediction Guard. I'm joined as always by my co-host, Chris Benson, who is a principal AI research engineer at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I'm doing fine. We've got a fun one today, Daniel. This is gonna be a good one.

**Daniel Whitenack:** Yes, of course. It was wonderful not that long ago to be in the great city of San Francisco, and run into our friend Demetrios from the MLOps community... And I figured I'd just bring him along for another conversation. So Demetrios, how are you doing?

**Demetrios Brinkmann:** I'm great, man. We're back, and I've got some bad news to break to you right now. I wanted to do it on air...

**Daniel Whitenack:** Go for it.

**Demetrios Brinkmann:** Yeah, just to get your reaction.

**Chris Benson:** Oh, boy...

**Daniel Whitenack:** You can be vulnerable. This is how we build community.

**Chris Benson:** Yeah, I'm nervous.

**Demetrios Brinkmann:** Yeah... So Prediction Guard - awesome. Congratulations on all the success that you've had. We're doing a data engineering for ML and AI virtual conference, and one of your colleagues, Daniel, filled out the CFP... I haven't gotten back to him yet, but I can't accept him. I just am way too full, way over my head. And as much as I want to, I'm going to have to divert him to doing his own special event, basically. We're going to actually take what may have been a bad thing and turn it into a good thing.

**Daniel Whitenack:** That sounds great. I'm looking forward to learning more. \[laughs\]

**Demetrios Brinkmann:** There we go. I've gotta make sure that you get all the love and shine you deserve, because I'm super-stoked at what you're doing.

**Daniel Whitenack:** Yeah. Well, I appreciate that. It was great to see you, and... You had your own event in SF. How was that?

**Demetrios Brinkmann:** I do not recommend doing live events to even my greatest enemies. If anyone out there is contemplating organizing an AI conference, you can do it, but... I don't recommend it.

**Chris Benson:** You're gonna hurt.

**Demetrios Brinkmann:** It's painful, man... But it was a big success, it was just a lot of work leading up to it, as you can imagine. And we had fun, and on the day of it was like I think over 750 people showed up. A lot of great conversations, a lot of fun, spontaneous, sporadic meetings with people... And that's the stuff you get at in-person conferences that's really hard to replicate virtually.

**Chris Benson:** You know what the secret is? The secret is it's AI, and it needs a lot of hype. It really needs a lot of hype. If there's one thing we don't have enough of in AI, it's we don't have enough hype. If you had hyped it more, it would have worked.

**Demetrios Brinkmann:** \[laughs\] You know, I do a fair amount of hyping... And so for those out there that are sick of the hype, like myself... I've only got myself to blame this.

**Daniel Whitenack:** Well, Chris, you sent me a very interesting-looking, hype-filled chart the other day... Do you want to go into what that was?

**Chris Benson:** \[05:52\] I will. And I'm actually blaming it all on Demetrios... He was making fun of the Gartner Hype Cycle. And gosh, I hope they're not a sponsor, because we're making fun of them today. And he was going through that, and it was funny... And I said "Dude, we need to do an episode where we all analyze the Gartner Hype Cycle in 2024 for artificial intelligence, and we break it down. And we're gonna assess it and decide what we think of those things." And we're not doing this in our normal, extremely serious manner. We are doing this in the fun way. And lest you don't know Demetrios out there, which I can't imagine, because he's a regular guest on the show here, he is, in addition to being a brilliant guy in this field, he's also the funniest man in all of artificial intelligence. So this is going to be good, and we're going to dive into the Gartner Hype Cycle today, and break it down for you. We're going to start with the real one, and then we're going to maybe make some adjustments to it.

**Daniel Whitenack:** You know, Chris, you say making fun, but - I mean, Gartner seems to have fulfilled their mission. I mean, we're talking about the hype cycle, we're going into it... So maybe their mission was fulfilled, you know?

**Chris Benson:** We are their fulfillment.

**Daniel Whitenack:** Yeah.

**Chris Benson:** Oh, my gosh...

**Demetrios Brinkmann:** Yeah, we're hyping it up right now.

**Chris Benson:** We are. Okay, and we're gonna have fun doing it.

**Demetrios Brinkmann:** I just have to say - please, if anyone knows how I can get a job doing this kind of stuff, just making up words and then putting them onto a waves graph, let me know, because I would love this as a job. It just seems like it's too much fun.

**Chris Benson:** Well, let's see... I think Surf's Up, the top on the wave, and let's start talking our way through. Demetrios, do you want to lead off on some of your ideas there?

**Demetrios Brinkmann:** So I think the most surprising to me out of this whole graph - and for anybody that's not familiar with the hype cycle, you've got the big upward side, and then it goes down, and it kind of crashes, and then it starts to climb back up. And it's the traditional --

**Chris Benson:** And the two-second version of that - and in a previous episode I did a longer version, when we were looking at some specific things on it... But the two-second version is new technology comes out, everyone's super-excited about it, they think it's gonna be the greatest thing since sliced bread... It doesn't live up to the hype, they get frustrated, they go through "This thing sucks!", aand it falls down on the hype popularity side. And then cooler heads prevail, and they kind of go "Okay, well, maybe you can do something okay." And then it's into a reasonable sense of productivity. So that's Gartner in a nutshell.

**Demetrios Brinkmann:** So the biggest surprise for me is at the bottom of the slope - so after it's gone all the way up the hype cycle, it's come down and crashed down, and it's at that the absolute bottom...

**Chris Benson:** The trough of disillusionment.

**Demetrios Brinkmann:** Exactly there is cloud AI services. And for me, that is the biggest misnomer, because if anybody is making any money out of any of this -- and I guess, maybe hype and actual money, they're detached, and they're very decoupled here... But for me, that was like "Wait, what?" There's no hype in cloud AI services. So Bedrock - out of there. Hype is killed. It's at the trough of disillusionment. Any type of SageMaker, if you're using that, or Vertex... No. Out of there. It's the lowest of the low. And so when I saw that, that was instantly like--

**Chris Benson:** Dude, why are you even doing it?

**Demetrios Brinkmann:** Yeah... I did not believe a thing that I read afterwards. But that was my thing. Any big surprises from you guys?

**Chris Benson:** I think your point on. If there's anyone making a killer amount of money on this, it's Microsoft, it's Amazon, it's Google... Uh-huh.

**Daniel Whitenack:** \[09:55\] Part of my struggle here is some of these terms -- like, I could interpret them one way or another way. SageMaker, for example, which - for those that don't know, it's kind of like a Model Deployment service within AWS, and there's various convenience around it, and that sort of thing. Like, that's been around for quite a while now; a very long time, even before the kind of hyped Gen AI stuff.

**Chris Benson:** Long before it, yeah.

**Daniel Whitenack:** Yeah. So is that a cloud AI service? Like, that's been around for a huge amount of time. Or are we just talking about hosted model APIs, right?

**Chris Benson:** They don't say...

**Daniel Whitenack:** Which also, to be fair, have been around a long time. You look at something like OCR, or translation, or something like that... And cloud services have been around for a really long time, and are sort of ubiquitously used.

**Chris Benson:** It's funny that it's down there. I get your point... Maybe it's just like everyone knows that's where the cloud, that's where all the services are, we're all paying for them...

**Daniel Whitenack:** Yeah. So does hype correspond to usage, I guess? In this chart, is it that people aren't hyping cloud AI services, even if they're used? Or...

**Chris Benson:** I think it's an emotional thing. You know, the hype side is how much people talk -- so maybe it's accurate in this context. There's nothing sexy about AI services in cloud providers. And maybe that's what they're getting at, is like "Yes, we're paying an arm and a leg, we're giving them all of our money, but there's nothing sexy."

**Daniel Whitenack:** But productivity wise... It's definitely productive.

**Chris Benson:** I would think so.

**Demetrios Brinkmann:** Yeah, it's very pragmatic, too. Especially for those people just starting, I don't know any easier way than to just grab an API from -- like, Amazon Bedrock is just a hosted model; hit that API like you would hit an Open AI API, but now you have a suite of models. So that seems to me like a near miss. But then at the top of the peak is the other one that was a huge surprise to me, because I've noticed this trend... I don't know if you guys have noticed it, but people who were formally ML engineers - we've all converted into being AI engineers. And an AI engineer is so misleading, because you don't know, is that somebody that is coming from like a frontend development world, and now they do a little prompt engineering, they use a few frameworks, and they can chain together some prompts to make a bit of a demo on Twitter? And now they're an AI engineer? Or is it somebody that was deep, deep in the ML platform weeds, and because AI is now the new rage, they call themselves an AI engineer? So I don't know about that, but it's at the top?

**Chris Benson:** I think it's the same. I think it's all I think people use AI, ML, and before it really fell out of vogue, deep learning interchangeably.

**Demetrios Brinkmann:** Yeah, exactly.

**Daniel Whitenack:** I don't know if it's also maybe connected to the fact - like, Chris and I talked about this, I believe it was maybe last week... The fact that some of the disillusionment around AI is sort of the realization that it turns out AI is integrated in software, and you still have to do engineering to build software... And it doesn't just sort of -- like, having a model as a solution doesn't really like play out in reality.

**Chris Benson:** You mean I can't just buy an AI model and stick it out there and magic things happen?

**Daniel Whitenack:** Yeah. I mean, one would think...

**Chris Benson:** I'm so disillusioned.

**Demetrios Brinkmann:** It's funny you guys mentioned that too, because I've seen a few people talking about how LLMs are not a product; you have to build on top of LLMs your product, or whatever it is, your service that needs to be there. So you can't look at an LLM as a product per se. And then I've also seen -- or I've been thinking deeply about something that is, like, the companies that are really getting a ton of value out of this AI movement... I'm thinking about one of my friends' companies, who does like support software, and now he's leveraging AI and LLMs for creating like multi-agents, and helping answer feedback, or answer questions and queries for support... And he's using AI. That's awesome. He's able to sell that support product to companies really well.

What I haven't seen is companies that say "Hey, I am fraud detection as a service. And I'm going to sell you this, whatever traditional ML product as a service." Whereas you can create regular business unit products as a service that leverage AI, but you can't quite - or at least I haven't seen anybody crack the nut - create some kind of a traditional ML service type of product. I don't know if you guys have seen that. And I also don't know if I'm making much sense right now, because it's something that's relatively fresh in my mind.

**Chris Benson:** I'm going to turn that one over to Daniel.

**Demetrios Brinkmann:** So no, I wasn't making much sense, I guess is what the nice way of saying it is... \[laughter\]

**Daniel Whitenack:** I mean, so you've got what I would say is -- the things that I have seen most are either what you were talking about... So utilizing generative AI embedded in the functionality of sort of domain-specific applications, like the customer service you were talking about, or financial services, or whatever... Or access to models over some API infrastructure.

There's maybe less general -- I guess maybe the biggest one I've seen is sort of just general fine-tuning as a service, if you look at something OpenPipe, or something like that. But that's still fairly general purpose. It's not specific to any sort of use case that you might use.

Maybe to some degree certain RAG services would fit into that. We were talking to Pinecone about their recent -- they have more kind of prebuilt things to have you do kind of load in all your documents, and have RAG set up, and all that stuff. So I don't know, that's maybe the closest that I've seen to that sort of scenario.

**Demetrios Brinkmann:** Yeah. Well, also, the big question is, everybody wants to - and this kind of ties back into the hype cycle. Everybody wants to be doing RAG, and wants to have all these great use cases with their RAG... Like you were talking about with Pinecone, they make it really easy for you to do your RAG. But then at the end of the day, is that a viable business? Or is that actually super-useful? As opposed to somebody's got this support software that they can come in and really cut down the burden for your customer success engineers, or your customer success people. And that is fascinating to me, because it's a booming business right now. The RAG business - maybe, yeah, that's great, and maybe there's some interest there. Is it a booming business? I don't know. I haven't seen numbers. But I think the really fascinating part to me is if you try to juxtapose that with a fraud detection as a service type of product. I just haven't seen that anywhere, because I think a) you're not able to really like give away everything as freely, and b) what works for one fraud detection use case doesn't necessarily... It's not like you can productize that and then go out and sell it as a service, in my opinion. So this is a little bit of a tangent, I know... But that all that to say is we're at peak hype for AI engineers.

**Daniel Whitenack:** \[18:08\] Peak hype, yes.

**Chris Benson:** So I'm going to draw us back over to the hype cycle just for a moment, and I'm going to something boring for a moment. I'm going to read off the things, where they are, for our listeners... Because the three of us have the benefit, obviously, of seeing the graph in front of us, and for our listeners who aren't. So I'm gonna take a moment and then we can go back and start hitting them.

Very quickly, heading up the curve initially, the innovation trigger. We have autonomic systems, we have quantum AI, we have first principles AI, we have embodied AI, multi-agent systems, AI simulation, causal AI, AI-ready data, decision intelligence, neurosymbolic AI, composite AI, artificial general intelligence, otherwise known as AGI, and then we're hitting the peak of inflated expectations. At the top of that hype cycle we have Sovereign AI, AI TRiSM, prompt engineering, responsible AI, and at the very peak, AI engineering. And then starting to slide down we have Edge AI, foundation models, synthetic data, model ops, and generative AI. And just going into the trough of disillusionment is neuromorphic computing, smart robots, followed at the bottom by cloud AI services. And then we slide up the slope of enlightenment to autonomous vehicles, knowledge, graphs, intelligent applications, and finally, the singular one on the plateau of productivity, which is where you want to end up, is computer vision, which is basically "Yeah, we can do that. It's boring and no one talks about it anymore, but hey, we're making money."

**Demetrios Brinkmann:** So if the listeners out there are not confused...

**Chris Benson:** Oh, there's a whole bunch I don't have any idea what they are. Gosh.

**Demetrios Brinkmann:** I was gonna say, which ones do you actually know what they are? Because --

**Chris Benson:** What the hell is embodied AI?

**Demetrios Brinkmann:** Oh, I learned what that is after I put out the post. So someone said "Oh yeah, embodied AI is when you use AI in robots."

**Daniel Whitenack:** It is so? But there's also a smart robots on the cycle.

**Chris Benson:** Yeah. And at a former employer I was specifically doing AI systems in robots, and I've never heard of it.

**Demetrios Brinkmann:** You never called it embodied AI? \[laughs\]

**Chris Benson:** Well, it's been a few years, I'll give you that. But no, we weren't calling it embodied.

**Demetrios Brinkmann:** I mean, so I think I'm at like a 30% hit rate on these... And I really would love to know what first principles AI is, because that feels like buzzword bingo to the fullest.

**Chris Benson:** I don't know.

**Daniel Whitenack:** Let's see. First...

**Chris Benson:** Yeah, Daniel's going --

**Demetrios Brinkmann:** He's cheating.

**Chris Benson:** He's going to models to find out.

**Daniel Whitenack:** The car AI-generated card in my Google Search says "When applied to AI, first principles AI suggests developing AI systems and algorithms by understanding the foundational principles of machine learning, neural networks and data science from the ground up."

**Chris Benson:** Don't we do that anyway? Isn't that kind of inherent in training new models, and stuff? "Oh, but no, no. We're really going back. We're going back to the very first ones. Here are the second or third principle. \[unintelligible 00:21:16.20\]

**Demetrios Brinkmann:** Yeah, no, because all you guys that are out there that are aren't using first principles - that's lower down on the hype cycle.

**Chris Benson:** Okay.

**Demetrios Brinkmann:** So the other pieces... I mean, were there any other surprises for you guys? Because I have so many other pieces on here that I'm like "What...?"

**Daniel Whitenack:** I think for me -- like, some of these things are themselves correlated, and yet in different places on the chart. So if you look at generative AI foundation models, Edge AI, AI engineering, prompt engineering, probably some others on there - all of those sort of fit into the same-ish bucket, and yet are on different sides of the hump. So yeah, I don't know, some of these it's also a matter of where do you draw the boundaries? Where's the boundary between generative AI and foundation models? Or generative AI and prompt engineering.

**Chris Benson:** \[22:17\] I'll give you one... At the very bottom on the innovation trigger is quantum AI. Okay, so that's not going to happen anytime soon. And I will note that they have it on the greater than 10 years, but I would suggest it's probably greater than greater than 10 years.

**Daniel Whitenack:** But isn't that -- I mean, one of the things that's interesting about this whole cycle is there's that one... Maybe you all can tell me or I can look it up. There's one law, it's like a general law that people talk about where you underestimate short-term innovation and overestimate long-term innovation, or something like that.

**Demetrios Brinkmann:** I think it's vice versa.

**Daniel Whitenack:** Yeah, sorry. I said that backwards. Yeah. So especially the time angle of this, it's hard to -- because things just pop up and you really didn't see certain things coming, and others that you thought would come, don't. So yeah, it's extremely difficult.

**Demetrios Brinkmann:** 100%. One thing that I am -- just to tag on what you're talking about, Daniel, with the bucketing these... Please tell me what the difference is between an AI engineer and a prompt engineer. A prompt engineer is someone that only does prompts, I guess, and that's all that matters? So I can see how it's like "Where's the line here?"

**Chris Benson:** When prompt engineering came out - Daniel, you might remember - I kind of made fun of that. People were saying -- there were new jobs for prompt engineers, and stuff. And I'm like "That is a passing fad." Like, that will be just so ingrained in what everybody does, all the time, that the notion of there being someone who that's their entire job all the time for years is not going to happen.

**Daniel Whitenack:** Yeah. I also didn't know... So I've never heard anyone use the word - if it's a word; it's an acronym. AI TRiSM. Do people go around saying that?

**Demetrios Brinkmann:** Yeah, what is that?

**Daniel Whitenack:** So it's I looked it up, and you know what's funny - because this is exactly the area that I'm working in every day. AI TRiSM is tackling Trust, Rsk and Security in AI models.

**Chris Benson:** Okay.

**Demetrios Brinkmann:** You've never heard that --

**Daniel Whitenack:** And I've never heard that. But now I feel like I should put it on our website. Because it's hyped.

**Chris Benson:** Yeah, it should definitely be there. That's right.

**Demetrios Brinkmann:** The funny part is it's almost as hyped as prompt engineering, which is basically all you hear about is prompt engineering, right?

**Chris Benson:** Yeah, they're right there togther.

**Demetrios Brinkmann:** And AI TRiSM you never hear about.

**Daniel Whitenack:** Yeah, there you go. But the TRiSM, it's out there.

**Demetrios Brinkmann:** It is.

**Chris Benson:** We hear about the components that make that up all the time...

**Daniel Whitenack:** Sure.

**Chris Benson:** ...but just never the -- I've never heard them put together that way. And I'm sure there are people that are out there that their focus is in that area, and they're like "Of course it's TRiSM." But guess what? Most of us don't know that.

**Demetrios Brinkmann:** No, not at all. I don't even know -- if I go and I just look at this, I don't know what causal AI is, I don't know what the AI simulation is... The multi-agent I do understand, but then... Even when you say Quantum AI, I don't know what that is.

The one that I would say is probably in the wrong spot is synthetic data. It feels like that should be still going up on the hype train, because we're just discovering what we can do with synthetic data. And every week I feel like we unlock new use cases. And synthetic data is just -- it's the gift that keeps on giving in my eyes.

**Chris Benson:** \[26:15\] I think that's the difference in you who actually does it, and somebody at Gartner, who was tasked to go put the chart together and doesn't actually do the thing in real life. I've terribly offended somebody out there.

**Demetrios Brinkmann:** Well, we're glad that it's out there. Let's just say that we are very happy that this exists, so we can have a whole episode dedicated to breaking it down.

**Daniel Whitenack:** Yes. It's a conversation starter. That's what I mean. Achievement made.

**Demetrios Brinkmann:** Yeah, unlocked.

**Chris Benson:** So one thing that I noticed isn't there at all, which really surprises me given how much it's bantered about, is ethical AI. It's not on the chart.

**Demetrios Brinkmann:** And that doesn't go in the TRiSM?

**Chris Benson:** Maybe it does. Maybe this is where I -- is ethical AI now transformed from a labeling standpoint into TRiSM? Is that where we're going? I don't know.

**Daniel Whitenack:** Or what is the overlap between responsible AI, TRiSM, and ethical AI?

**Chris Benson:** Okay, well --

**Demetrios Brinkmann:** And there isn't really anything on here about GPUs or hardware. I think that's because they made their own hype cycle for GPUs.

**Chris Benson:** That's right.

**Demetrios Brinkmann:** If I'm not mistaken, I feel like I've seen that somewhere on the internet.

**Chris Benson:** You'd be cannibalizing your other chart.

**Demetrios Brinkmann:** Exactly. So you can't put any GPU, hardware, anything on the AI one. You've got to refer people to the GPU hype cycle. And maybe it's like that with ethical AI. Like, they made a whole other ethical AI chart that is the hype cycle for ethical AI.

**Chris Benson:** Maybe so. I'm not familiar with it.

**Demetrios Brinkmann:** How many charts can you make? If you're Gartner, I guess --

**Chris Benson:** I mean, we have just the artificial intelligence hype cycle here, but they probably have -- I think I've seen multiple subdivisions and stuff out there.

**Demetrios Brinkmann:** That's why it's a great business to be in, Gartner selling all these different hype cycles...

**Daniel Whitenack:** Well, speaking of what to hype, what's not on hype cycle, but should be?

**Demetrios Brinkmann:** Alright, if I could have talked to somebody at Gartner before they were making this, I would have advised - and so this is basically my video job interview right now...

**Chris Benson:** I'm busy typing an invoice up for you to send to them, okay?

**Demetrios Brinkmann:** Exactly. I would have advised AI Gateway. That is very popular. That's climbing the hype cycle right now, because people really like to have the option to hit an AI gateway. And if it is not that complex of a query, you don't need to hit GPT 4. You don't need the most expensive model. If you have some kind of open source model that is cheap, then let the simple query go to that 7B model.

So I've been hearing people call it an AI Gateway. Others I think have called it like an LLM proxy maybe --

**Daniel Whitenack:** Router?

**Demetrios Brinkmann:** Or router. Yeah, that's another one. So we would have to agree on the actual name, but that's gaining hype, for sure.

**Daniel Whitenack:** Yeah, agreed. Yeah, I've definitely seen the router language... Whatever it is, the languages overlap with networking, which is basically - like, you're just routing API calls. So I guess that makes sense.

**Demetrios Brinkmann:** Yeah. Any that you guys would have liked to have seen on here, and where?

**Chris Benson:** I had the ethical -- I'm still wondering what composite AI is. Did we ever get that answer, here, or am I just having a senior moment, or something...?

**Demetrios Brinkmann:** Yeah, what is it...?

**Daniel Whitenack:** \[30:00\] The one that really stands out to me, unless I'm just like -- there's a lot of words on this page, so maybe I'm totally missing it somewhere... But where is multimodal AI?

**Chris Benson:** Oh, good catch there.

**Demetrios Brinkmann:** It's not on here, is it?

**Daniel Whitenack:** No.

**Chris Benson:** Who cares about multimodal...?

**Demetrios Brinkmann:** That's so weird. That should be in the peak of inflated expectations.

**Daniel Whitenack:** This is like the thing of 2024, like multimodal AI.

**Demetrios Brinkmann:** Yeah. Even multimodal RAG should be on here, like climbing the innovation trigger. Multimodal models should be on the peak of inflated expectations.

**Chris Benson:** That is such a good catch... I know tons of people who say multimodal and have no idea what it means.

**Daniel Whitenack:** Well, what does it mean, Chris? \[laughs\] Quiz time.

**Chris Benson:** Well, it's having different modalities of input there, so that you can combine different inputs to get a rich output, in a very general sense. I have no idea.

**Demetrios Brinkmann:** Yeah, so voice, photos...

**Chris Benson:** I know it when I see it.

**Demetrios Brinkmann:** Yeah. Video...

**Daniel Whitenack:** Voice, photos, video... All the things.

**Chris Benson:** Which is what we want. I want to throw a bunch of stuff that I have, and just have it sorted out and give me the best answer. And even with today's multimodal models, that doesn't happen very well. I'm often frustrated and disappointed with those outputs. So yeah, I'm expecting better.

**Demetrios Brinkmann:** Yeah. And along those lines, I have two that I would like to have seen. One is just transformers in general. Where's that? Where are they on this hype cycle? Because that also feels like -- are they climbing or are they going down?

**Chris Benson:** It would be trough of disillusionment, heading downward, because we're past that. And people are now talking about post-transformer models quite often. So it's kind of like "Yeah, yesterday."

**Daniel Whitenack:** So there needs to be another dot for post-transformer modes.

**Demetrios Brinkmann:** Yup. Going up. That's definitely going up.

**Chris Benson:** That's right.

**Demetrios Brinkmann:** And speaking of which, it feels like, okay, we've got -- small language models... Where are they? Because that is all the rage.

**Chris Benson:** It is.

**Demetrios Brinkmann:** And maybe it's all the rage for every vendor who is not Open AI, because they can't compete on GPT 4... And so what do they do? They say "Well, you can just host your own small language model and fine-tune it and get better performance than GPT 4." And so I think small language models are probably -- they should be in that innovation trigger, maybe the peak of inflated expectations, because anyone who's ever used the 7B model might not want to use it if they haven the choice...

**Chris Benson:** Well, are you sure that's going up? Or could it possibly be sliding into that disillusionment that you've just referred to?

**Demetrios Brinkmann:** Potentially. That's true.

**Chris Benson:** Maybe it is going into the trough of disillusionment, just hypothetically, because I do think that when it gets to the plateau of productivity, small models will be just the workhorse; you'll have them out on the edge everywhere. Every frickin' device you've ever imagined or seen is going to have small models in it, that are inferencing... We won't ever have anything that doesn't have them. It'll be just the "Oh, yawn, Of course we have our small models in our watch."

**Demetrios Brinkmann:** Which leads me to the next one that I'm like "Where is this?" Why do they not have wearable AI? That is a perfect buzzword that should be on here. And if you look at like what Meta is doing with the glasses, or if you see any of those necklaces that you can wear and it records everything... That's wearable AI right there. I may have just made that up, or I may have seen that before, but that one should be on here.

**Chris Benson:** It should be there, I agree.

**Break**: \[34:08\]

**Daniel Whitenack:** Maybe this fits into kind of the agentic stuff that is represented in certain ways on there, but this whole idea of tool function calling/text-to-SQL, interacting with structured databases, APIs, whatever that is... I don't know maybe the general name for that other than tool and function calling, or text-to-SQL, but certainly, that's like sliding into a zone where people are definitely doing some of those things in production, and there's products released around it. So like the Hex Magic stuff and all that that other...

**Chris Benson:** Where is it on the chart though, before I go on?

**Daniel Whitenack:** Oh, where is it on the chart? I mean, it's got to be somewhere around AI engineering.

**Chris Benson:** So it's at the peak of --

**Daniel Whitenack:** Maybe. Maybe, I don't know. Maybe it's going down...

**Chris Benson:** I think it's just past that...

**Daniel Whitenack:** ...because people are like "Agents aren't reliable..."

**Chris Benson:** I think that's right. I think it's heading down into the trough of disillusionment. That's where I would guess.

**Daniel Whitenack:** Yeah.

**Demetrios Brinkmann:** Yup. And if you compare that to where they have it, multi-agent systems, it's got a long way to go up. It is at the very bottom of this hype cycle. So yeah, I think we instinctively are like "No, please, no more agents." And Gartner's jut like "Oh, we're just getting started, baby."

**Daniel Whitenack:** And they're like "No, please, more agents together. Multi-agents."

**Demetrios Brinkmann:** Yeah. Gartner's going to create their own agent hype cycle next. That's gonna be the next one that they can create.

**Daniel Whitenack:** Maybe. Maybe.

**Demetrios Brinkmann:** So you know, we'll take a commission for giving you that idea, Garther. No problem there. One thing... Can we call out the elephant in the room? Because where is retrieval-augmented generation?

**Chris Benson:** Yeah.

**Demetrios Brinkmann:** How is that not on here?

**Chris Benson:** RAG? What's that?

**Demetrios Brinkmann:** Because I was thinking about it and I was like "Oh, you know what they missed? Graph RAG." That is all the hype these days, and that's probably right around where sovereign AI is, where it's maybe at the border of the --

**Chris Benson:** Yeah, it's going up, nearing the peak of inflated expectations. You're right.

**Daniel Whitenack:** More hype than the TRiSM.

**Demetrios Brinkmann:** Yup. More hype than the TRiSM.

**Chris Benson:** But I would argue RAG is heading to the trough of disillusionment. Anyone wanna disagree with that?

**Demetrios Brinkmann:** No, no, I think so, too.

**Daniel Whitenack:** I think it's over the hump.

**Demetrios Brinkmann:** I do, too. I mean, and people are kind of hitting the challenges... And actually, Daniel, advanced RAG, which we've talked about several time \[unintelligible 00:39:06.00\] well, we don't just have RAG now. We have advanced RAG.

**Demetrios Brinkmann:** \[unintelligible 00:39:13.02\]

**Chris Benson:** As things are starting to head over that peak of inflated expectations with RAG - "Well, guess what? We can juice it some more. We have advanced RAG." But I think the whole thing is starting to go over the side, and people are like "Okay, well, we've kind of done at least the easy stuff." To the advanced RAG point, there are people that are doing it better than others. But nonetheless, what's next?

So I'm just curious, two-second deviation... We've talked about fine-tuning, we've talked about RAG... What's coming next in that sphere? What are they missing there?

**Demetrios Brinkmann:** Yeah... A new model?

**Daniel Whitenack:** Yeah, I think you mentioned that you might have had some of these, Demetrios... What are AI hyped items that are your own, that you've come up with a name for, that other people will have to interpret to figure out their definition?

**Demetrios Brinkmann:** \[40:16\] \[laughs\] Alright... DO you want to guess on this one?

**Daniel Whitenack:** Yes.

**Demetrios Brinkmann:** Alright, here we go. I am going to start you off with a pretty simple one. This one is free range AI.

**Daniel Whitenack:** Free range... Is that is that open access LLMs?

**Demetrios Brinkmann:** Close. Close. What have you got, Chris?

**Daniel Whitenack:** Grain-fed...?

**Chris Benson:** I can't get off the free range thing. I'm an animal guy. I can't even get into the AI headspace on this one.

**Demetrios Brinkmann:** That's AI that was trained without guardrails.

**Chris Benson:** Okay, I like that.

**Daniel Whitenack:** Gotcha. Well, we already talked about one here that you alluded to, Demetrios, but my name for it was Trinket AI.

**Demetrios Brinkmann:** Wearables?

**Daniel Whitenack:** Yes.

**Demetrios Brinkmann:** Trinket AI... Yeah, imagine it's in your fidget spinner.

**Chris Benson:** That sounds a lot -- that's a much better name than wearable AI. Trinket AI. It is. Every little thing you have on your body has a frickin' model inferencing on it, you know?

**Demetrios Brinkmann:** Yeah... And it doesn't bring you any extra value, if we're gonna follow AI trend... \[laughter\]

**Chris Benson:** You just don't have to think anymore.

**Daniel Whitenack:** You can click that button and take a picture, Demetrios.

**Demetrios Brinkmann:** No, it just gives you some verbose answer to a question that you didn't really ask... So your shirt is -- you're like "Hey, have I been sweating?" and then it tells you the origin of sweat in a three-page PDF that you have to go download... \[laughter\]

**Chris Benson:** Do I get senior moment AI? That would be good for me. There's a huge market for that. Everybody over the age of 50 is going to buy senior moment AI to "What--? Oh--" and "Oh, there we go." And I can continue, instead of pausing for the next three minutes to try to figure out what it was I was about to do.

**Demetrios Brinkmann:** Or, I was thinking that that's how seniors interface with AI, so they don't get left behind. It's like, this is the product that will make sure you stay up to date. You're ahead of the curve.

**Chris Benson:** Okay. Sounds good.

**Demetrios Brinkmann:** Alright, I've got another one for you all... This one is EQ AI.

**Daniel Whitenack:** Empathetic AI?

**Demetrios Brinkmann:** Yeah. It's also been known as Empathetic AI...

**Chris Benson:** Emotional Quotient, and stuff?

**Demetrios Brinkmann:** Yeah, you may hear other people out there on the streets calling it Empathetic AI... This one is a type of AI that has high emotional intelligence, and it feels empathy for you when you get frustrated that it's not giving you the right answer, and your prompts aren't working... But it doesn't actually made your prompts work. It just feels bad for you.

**Chris Benson:** Okay, that minus the AI bit, that happened to me yesterday. I was on Comcast, on their stupid tech support for four hours, texting... They passed me off, and every everyone was so empathetic, but they accomplished nothing. If you put that in AI, I'm quitting AI. If you put that into any AI that does that, I'm just done. I'm walking away from the whole field.

**Demetrios Brinkmann:** Are you sure it wasn't already AI that you were talking to?

**Chris Benson:** It could have been. I mean, it was just text. It was only text. But it was horrible.

**Daniel Whitenack:** We've already passed the Turing test, so...

**Chris Benson:** I'm getting response of "I'm so sorry. I'm just very sorry. We're here to help you", and like "I'm gonna freakin' kill you." Yeah... That's what four hours texting support will do. If you bring that to AI, it'll ruin the whole thing for me.

**Demetrios Brinkmann:** Well, this one, funny enough, is actually on the uptick when you look at the slope. The EQ AI has got a lot of runway left.

**Chris Benson:** Yup.

**Daniel Whitenack:** \[44:07\] So my next one either AI nepotism, or AI anti-nepotism.

**Demetrios Brinkmann:** Oh.

**Daniel Whitenack:** Fighting AI nepotism.

**Demetrios Brinkmann:** Fighting AI nepotism.

**Chris Benson:** You're gonna have to go into that one for me.

**Daniel Whitenack:** I've stumped you. This is exciting.

**Demetrios Brinkmann:** It's basically using AI against like the government using AI, or what?

**Daniel Whitenack:** No, no...

**Chris Benson:** Foundation model related maybe?

**Daniel Whitenack:** Yeah, so this would be like multi-model AI in that you are not preferential to one language model family and

only using that family, but you are now multi-model, and as such not practicing nepotism.

But are you multimodal multi-model?

**Daniel Whitenack:** \[laughs\] Maybe not...

**Demetrios Brinkmann:** You know, I knew it by its other name, which is polygamy AI...

**Daniel Whitenack:** Yes.

**Chris Benson:** Oh, gosh... Where are we going? \[laughter\]

**Demetrios Brinkmann:** Or some in San Francisco call it polyamorous AI, it tends to be... So the next one that I've got for you -- oh, where is this nepotism AI on the hype cycle, by the way?

**Daniel Whitenack:** I think it's still a bit on the rise. I saw a16z in their post, one of the things they call that was multi-model future.

**Demetrios Brinkmann:** Oh, yeah. There's a future for this one, that is for sure. So I've got one that is called Broccoli AI.

**Chris Benson:** Okay...

**Demetrios Brinkmann:** This one's going down on the hypecycle.

**Daniel Whitenack:** Is it related to some sort of graph thing?

**Demetrios Brinkmann:** No, but that could be nice...

**Daniel Whitenack:** Branching?

**Chris Benson:** Is it synonymous with healthy AI?

**Demetrios Brinkmann:** Yeah, exactly. Maybe you've heard it termed Healthy AI...

**Daniel Whitenack:** Efficient? Sustainable?

**Demetrios Brinkmann:** Oh, that's another one that I've got though, but we'll get to that in a minute... Which reminds me - it does feel like sustainable AI should have been on the real hype cycle. Like, that's an actual term, isn't it?

**Chris Benson:** Yes, it is. And it's not --

**Demetrios Brinkmann:** It's not on there. The other one that should have been on there, that I was like "Why isn't it on there?" is Ensemble AI. Ensemble models. That feels like it should have been on there.

**Daniel Whitenack:** See, one of the ones that I looked up was Composite AI.

**Chris Benson:** Yeah, that's the one I didn't know.

**Daniel Whitenack:** Well, I don't know -- it's slightly different than Ensemble, but I think that Composite was combining multiple AIs together, in some way or another...

**Chris Benson:** For one inference? Like you have multiple models inferencing, but you have one inference back out to the user?

**Daniel Whitenack:** Yeah, something like that. I don't know. Although Ensemble could very much mean for a single inference getting a majority vote, or something like that.

**Chris Benson:** Okay, so it would be where Composite AI is on the chart, if they're assuming they're correct.

**Daniel Whitenack:** Yeah.

**Chris Benson:** And before we leave it - Sustainable AI? Where is it on the chart?

**Demetrios Brinkmann:** That's very much -- like, it's got a lot of hype to go.

**Chris Benson:** Low to mid-level -- mid-level on the curve up?

**Demetrios Brinkmann:** Yeah.

**Chris Benson:** Okay.

**Demetrios Brinkmann:** Just think about how many people are talking about the energy that is wasted training foundational models...

**Chris Benson:** True.

**Demetrios Brinkmann:** \[47:46\] ...and how we need to build out all these data centers, and they need to be sustainable etc, etc. So yeah, sustainable AI for sure has some room to grow. Back to Broccoli AI... A.k.a. Healthy AI. This is AI -- and this is very much on the downslope, again. It has passed its peak. People are a little disillusioned with it, because it's AI that doesn't taste good for the organization, but it's needed. And so you can imagine the cybersecurity folks - they love this kind of AI.

**Daniel Whitenack:** Is this like a linear regression model, or what would you consider good for an organization? I think you used the word good.

**Demetrios Brinkmann:** Yeah. Healthy. It's healthy for the -- we could go to healthy for the organization. What could that be? I mean, I actually didn't get to do enough market research in this section to figure that part out. I was just throwing spaghetti at the wall. But if I were to think about what's healthy - yeah, it would probably be the traditional ML. Going back to what I was talking about before, fraud detection is one of those, where it's not really AI; some people might know it as its former term, ML...

**Chris Benson:** I'm telling you, they're all the same, from a marketing standpoint.

**Demetrios Brinkmann:** Exactly.

**Daniel Whitenack:** Well, yeah, the waters are too muddied for them to make any actual difference.

**Chris Benson:** That's right. So what else you got?

**Demetrios Brinkmann:** Okay, so I've got Unsustainable AI, which is way different than Sustainable AI, just so we're clear... But it's a whole different sector of the universe that we're talking about. It's not like "Oh, it's just the opposite of sustainable AI." Unsustainable AI is at peak hype right now. Let's be honest. If I could swap it out with the AI engineer, it is at peak height, because this is AI that was built for a product demo, but not for scale. That is unsustainable AI.

**Chris Benson:** Happens all the time.

**Demetrios Brinkmann:** Yeah. So anything that you see... Basically, we can -- hopefully none of these guys are your sponsors... But let's just queue Devin, or Rabbit, or Humane... All those unsustainable AI.

**Daniel Whitenack:** The trinkets?

**Demetrios Brinkmann:** The trinkets, yeah. That's true.

**Chris Benson:** So it's sort of analogous to prototyping software where you're never intending to grow it into production.

**Demetrios Brinkmann:** Exactly. So that's all of mine that I could think of.

**Chris Benson:** Well, I think that was a pretty good list.

**Daniel Whitenack:** I did realize, I don't know, maybe, maybe related to some of the discussion we had earlier, but... I don't see Neighborly AI on here.

**Chris Benson:** That's kind of creepy when you think of that.

**Demetrios Brinkmann:** I wasn't creeped out until you said that. But... \[laughter\]

**Chris Benson:** \[50:47\] I had this image of Mr. Rogers' Neighborhood. Instead of Mr. Rogers, it's the AI. "Hi, girls and boys..."

**Daniel Whitenack:** Maybe they can help you clean up a few things with their RAGs?

**Demetrios Brinkmann:** No... \[laughs\]

**Chris Benson:** Oh, boy.

**Demetrios Brinkmann:** Well, I was thinking it was like next door, where it was almost like the voting system, the ensemble, but it was for local LLMs.

**Daniel Whitenack:** Oh, gotcha. Yeah, I realized there's nothing about vectors or embeddings on the chart. I was just thinking about that.

**Demetrios Brinkmann:** Actually, yeah, there's no vectors stores on here.

**Daniel Whitenack:** Or even just general embeddings of any type.

**Chris Benson:** Wouldn't that be plateau of productivity now, that we've had this for so long that they're just lexicon, no emotion left in them?

**Demetrios Brinkmann:** Yeah... What I was thinking is they probably aren't on there because Gartner also has one of their best products ever, the Magic Quadrant. And that'll be the next episode that I come and drop in on; we can remake the Magic Quadrant for the different sectors... And I imagine that they have a Magic Quadrant for vector databases.

**Daniel Whitenack:** Yes. That sounds delightful. Yeah. Well, it has been delightful to have you on, Demetrios. I'm glad you brought your various new AI terms to the hype cycle. And now I have some work to do on my Broccoli AI, so...

**Demetrios Brinkmann:** Incorporate that into your product, for sure. It's right around there with TRiSM...

**Daniel Whitenack:** It would be a good AI logo, just like a broccoli floret.

**Demetrios Brinkmann:** Yeah, the broccoli, or the -- I saw a great paper that was all about leaks, it was all about data leakage when you send API calls to Open AI... And the paper started with an emoji of a leak.

**Daniel Whitenack:** That's awesome.

**Demetrios Brinkmann:** Like the leaks you eat. And it was basically showing how you send your data to Open AI, but a lot of other people are gonna get it too if you're not careful.

**Daniel Whitenack:** Yeah.

**Demetrios Brinkmann:** Which is one thing that we haven't really touched on, but that seems like it's got some hype around it...

**Chris Benson:** Is what?

**Demetrios Brinkmann:** Data leakage AI.

**Daniel Whitenack:** Data leakage, data poisoning...

**Chris Benson:** I know in my day job that's a common conversation.

**Demetrios Brinkmann:** Prompt injection should be there?

**Daniel Whitenack:** Prompt injection, yes...

**Demetrios Brinkmann:** I guess this fits under TRiSM...

**Daniel Whitenack:** Yeah.

**Demetrios Brinkmann:** We're going over TRiSMs right now...

**Chris Benson:** TRiSMs and trinkets.

**Daniel Whitenack:** On that note, that very profound note, it has been great to discuss all the TRiSMs with you, Demetrios.

**Demetrios Brinkmann:** I've had a blast, as always.

**Daniel Whitenack:** And please come back. As usual, give your own hype about the upcoming event before we close out, and where people can find out more about it.

**Demetrios Brinkmann:** You know, I always feel bad, I come on here and just shill my stuff. So this time, no shilling. I've just had a blast doing this with you guys. So if anybody wants to find out about the next virtual conference or in-person conference, they can just google "MLOps Community" and I'm sure it'll pop up.

**Chris Benson:** Cool. Alright.

**Daniel Whitenack:** Hey, much appreciated. We'll talk to you soon, Demetrios.

**Chris Benson:** Thanks, man.

**Demetrios Brinkmann:** Yeah. Thanks, guys.
