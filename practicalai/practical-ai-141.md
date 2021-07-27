**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I am a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a tech strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing great, Daniel. How's it going today?

**Daniel Whitenack:** It's going great. And you know, this is Practical AI, and I'm super-excited, because today's episode is super-practical. We have with us Roey Mechrez, who is CTO at BeyondMinds. I saw a talk by him at GTC about Garbage In/Garbage Out, which was cool... So welcome, Roey. I'm really excited to chat about these things.

**Roey Mechrez:** Yeah. Hi, guys. Hi, Daniel, hi, Chris. Happy to be here and talk to the audience about some practical AI elements.

**Daniel Whitenack:** Yeah, definitely. You're the right person for this podcast, for sure. Your talk, which we'll link in our show notes for sure - it was really good; I really enjoyed the practicalities of it, but also the emphasis on "Hey, what are some of these challenges and blockers that prevent AI from producing value when you're trying to deploy it?" So I'm wondering if maybe before we jump into the specifics of that, if you could just give us a little bit of information about how you got particularly interested in that topic and ended up talking about it in that context?

**Roey Mechrez:** \[00:04:00.04\] Yeah, brilliant. Again, happy to be here and talk to you about this amazing topic. You know, I come from an academic background; I think the last ten years probably I'm doing computer for my living. I started in biomedical engineering, working on some medical imagining problems, then I worked a little bit on consultancy, some computer vision project, shifted into a Ph.D. in computer vision, wrote several papers... Or jumping around between CVPR and ICCV, and talking about some very--

**Daniel Whitenack:** Doing the circuit.

**Roey Mechrez:** Yeah, exactly... Some very academic ideas, and some -- all over the place. I published papers on a random set of topics. And then I met my co-founder, and we detected this problem where the academic research is amazing; 3% of all papers in the world are about AI. It's just mind-blowing.

**Daniel Whitenack:** Oh, really?

**Roey Mechrez:** That's what I read. I need to \[unintelligible 00:04:57.27\]

**Daniel Whitenack:** Is that like a recent statistic? Maybe it's more now, I don't know. That's pretty amazing.

**Roey Mechrez:** Yeah, yeah, on a broad topic. But then at least in enterprise AI, outside Facebook, Google and Amazon, the use of AI is very low, and most severely they are trying, but there is a 90% failure rate. There is a collosalical problem them. Systematical failure. And we established BeyondMind, the company that I'm its founder in the last three years - that's what I've been doing for a living - in order to bridge that gap between doing academic research and practical AI and production, and create value from AI. That's my passion, that's what I'm doing as the CTO, as the co-founder at the company that I'm trying to build... And we are coming from a very technical data science/machine learning/AI background, both me and the CEO, which is also coming from an electrical engineering background. And we understand AI, we understand the concept, we build many different models, train lots of problems, but we'll admit the reality - there is a gap there; there are challenges. And if we want, we can dive a bit more into these challenges, but they're not organizational. They're technical problems.

**Daniel Whitenack:** Yeah, and I'm curious, since you did that sort of circuit of the academic research and published many things, but now you're sort of helping clients productionize and operationalize their models, now -- because I'm assuming you probably still read some of the research and keep up with it... Now when you look at that research, do you read papers differently, or look at what people are doing differently in the sense of understanding what might be able to create value in the enterprise versus not?

**Roey Mechrez:** That's a philosophic topic, like "What is the role of Academia versus the role of the industry around AI?" And I think it's good that Academia is dealing with holistic problems, theoretical problems; that's its role. And I think in AI specifically we are shifting towards different areas around more practical AI academic research, definitely when the number one affiliate or \[unintelligible 00:07:25.06\] is Google, and probably the second one is DeepMind, and then you know, some other universities.

But in general, I think it's good to have people that are dealing with SOTA (state of the art), and I had this discussion with my supervisor during my Ph.D. yesterday... And she told me that they're dealing with SOTA on one hand, but very down-to-earth algorithmical way of thinking what is needed to solve that problem, not what is state of the art. And that's a completely different mindset.

\[00:08:04.03\] And you know, it could be that there are people that like different things. And I think, by the way, that's probably one of the problems. Because if you are an insurance company and you've built your center of excellence, and you went to Stanford and MIT and brought the best data scientists and Ph.D's from there, it's probably not likely that these people will know how to build a product in production, that can actually deliver. They can do amazing research, and novelty, and innovation, but not necessarily deal with some production elements.

**Daniel Whitenack:** Yeah. My day, just to be transparent on this, was like - sure, I thought my day was going to involve doing some AI, but really, I would just try to convert audio files off of an RTSP stream into a usable format, and not ge garbage out. That was basically my day. I didn't train anything, I didn't even pre-process anything major; I just worked on this file conversion.

**Roey Mechrez:** Yeah. On the other hand, by the way, you mentioned papers. My rule of thumb is a paper a day; I read a paper a day. Not deeply; maybe deeply like every week, once two weeks. But I want to read an abstract, look at the figures, understand the concept once a day. And you know, we all the time use open source, new ideas, and many times I tell my team at BeyondMinds, which is more than 50 engineers today, that state of the art and models are a critical part of the solution. But they're probably 5%. And we need to do a lot of problems to build this system that can deliver in production. In essence, that's my belief; from a model to a system. The model is maybe the heart, but there are so many different components there.

**Chris Benson:** While we're talking about that, you said several things that really grabbed me in the last couple of minutes. We talked about the difference in Academia, and industry, and stuff, and we also noted that there's that crossover. You have Google going into Stanford and cleaning out the department and pulling all of those experts in, so they can take advantage of it, so we're seeing a little bit of a difference in this practical -- you know, when we talk about garbage in/garbage out and the incredibly practical nature of this as data science, we are seeing a divide in industry, where you do have Academia and you have kind of a select group of organizations that understand us, and that they are able to do it, and that they can take an idea all the way through the workstream and produce that system that's highly productive down the road... But then you're also seeing a large number of organizations, probably well over 99% of them out there, that are really struggling with that.

Before we dive all the way into the details of your talk, which - I also saw your video, so I kind of know what's coming, and I'm looking forward to this... But there is this big chasm right there. How is that crossed? Because the understanding of the data science of it, and how to actually do it in the end, and having all of the steps and skills necessary...

**Daniel Whitenack:** It's a lot to know.

**Chris Benson:** It's a lot to know.

**Roey Mechrez:** Yeah.

**Chris Benson:** What are your thoughts about that? How does that get reconciled going forward?

**Roey Mechrez:** Well, I had a conversation with one of the tier one banks a few weeks ago... Part of my role as a CTO, I do a lot of sales meetings. I meet clients occasionally. And definitely, part of our go-to-market and vertical is around financial services. So anyway, a tier one bank in the U.S. - they have 1,000 engineers in their center of excellence around AI. Okay, so that's a tier one bank; but even if you go to a tier two bank, let's say a Fortune 1,000 company - they will build a center of excellence with tens of engineers. They will give a good emphasize on bringing people and talent and organizational elements, strategy, and educating the executives etc. But they're still struggling for some complex elements. And I think the big element is becoming a technology-driven company, because Google and Amazon are not on the same challenges; but that's extreme cases. But also not other technology companies.

\[00:12:24.05\] I think when it comes to technology-driven companies, people that understand that, understand engineering in their essence, that the product is technology, versus the product is bank, or insurance, or manufacturing, or telecom, or mining, or oil and gas, or whatever. Most of the world, most of the economic. They are not technology companies, and building a technology company - that's super-complex. And it's not unique to AI, my point of view, by the way. If you look at CRM, or ERPs in the late '90s or beginning of 2000 - so many people spent five million dollars on trying to build a CRM, and then they bought Salesforce. That's a super-classic buy vs. build dilemma, which I think we are super not balanced in in AI, for sure... And for good reason, by the way. That's one of my key assumptions as a company; my key observation about AI, if you want. I can tell you about that.

**Chris Benson:** Absolutely.

**Daniel Whitenack:** Could you go into that in a little bit more detail?

**Chris Benson:** \[laughs\]

**Roey Mechrez:** Yeah, for sure.

**Chris Benson:** He's got us pulling it out of him here...

**Daniel Whitenack:** Yeah, I know... \[laughter\] You put out the carrot there.

**Roey Mechrez:** Specificity. Problems, data, requirements, business process, constraints are so specific. And most of the problems cannot be solved repetitively good enough. Even if you take something that sounds super-repetitive, \[unintelligible 00:13:48.25\] We need to collect data, annotate bounding boxes, and then train them \[unintelligible 00:13:55.21\] we have an object detector. Amazing. But the reality shows that that's so different from production. One is defects that are \[unintelligible 00:14:07.09\] and then you have anomalies type of data, and you have very clearly defined defects, and transparency, and light, and what is the dynamic of the data - is it shifting, or it's very consistent? How you deal with the monitoring of that problem. Is it shampoo bottles that you don't really care about the accuracy, if it's more than 95% you're okay? Or it's PCB boards that go into Lockheed Martin engines and you are super-sensitive, like zero tolerance to errors? Do you have human in the loop? You don't have human in the loop. Is that a super 10 GPUs per production line, and you have the most amazing model, or it's a small IoT device that you need to shrink and quantize and optimize and deploying C++ or whatever? So many different requirements and constraints.

How the business is working, how many people... And you need to deal with that. And how you deal with that, if it cannot be solved by an off-the-shelf product. I cannot go and buy something. So okay, let's build an internal team, right? They will solve my problem. But then you come to another problem, which is how internal teams are becoming a technology company; how to deal with data, how to build processes, how to build repetition, scale... All these elements that are usually the mindset of startups, of technology companies... And that's what I'm trying to bridge in life - helping enterprise, bridging AI into production.

\[00:15:53.22\] I can give you an example, I have a company that builds something regarding sales prediction, and they have 30 different lines of sale, 30 different products. And they've built an amazing model for one product. And scaling that to 30 required them to multiply the team. Because they need for example someone whose whole life, whole responsibility is a data engineer, or a junior data scientist, to retrain the model every week, because there is new data; something is changing, the hyper-parameters need to be tuned. How you do that now multiplied by 30? Scale.

**Break**: \[00:16:31.29\]

**Daniel Whitenack:** Roey, I really appreciate your perspective on that. I think the way that you think about specificity and scaling a data team is definitely a good perspective. We just talked on our conversation between Chris and I about GitHub Copilot, and like "Oh, now AI is writing our code..." You know, people have been saying that software engineers were gonna automate themselves away for however many decades it's been...

**Chris Benson:** A long time now.

**Daniel Whitenack:** ...but there's such a need for specific solutions to specific problems, in even just software engineering. And then if you bring AI into that, which - AI is now sort of, like you said, infiltrating all of these different companies, at all different sizes, in all different ways, in very specific ways, then there's a lot to solve there.

One of the things that I saw you talked about a little bit was this idea of stability. Could you give us a sense of what does stability mean, maybe in the world of software engineering, but then moving into the world of AI? How is stability something that needs to be on our minds as we productionize AI?

**Roey Mechrez:** Yeah, sure. So I think if you're coming from an electrical engineering background, stability is something that is usually defined for, let's say, linear systems, or something like that; bounding input, bounding output, or something like that. But definitely in deep learning systems, which are far from linear and far from being well-understood in the sense of what is bounding even, what's going on with the data in terms of stability? What data is going to break my model? And you clearly know as a data scientist that AI is usually when it fails, it fails silently.

I gave in the video, if you watched it -- I call it the giraffe problem. The most naive classifier probably that you did when you --

**Chris Benson:** You've gotta tell that joke from your video. You have to tell it, okay?

**Roey Mechrez:** \[00:19:49.27\] I will do my best, yeah. So the giraffe problem - a giraffe enters a bar, and the bartender is your classifier, basically. And he tells the giraffe, "You are 100% a dog, I'm sure of it." And you know, that's the reality in deep learning, because the model (as the bartender), he saw only cats and dogs. That's what he knows. And he will classify everything as a cat or a dog, even if it's a giraffe. And that's an extreme toy example, but the reality is full of this problem.

**Chris Benson:** Yeah.

**Roey Mechrez:** Data shifts, noise, someone changed the light bulb. The bias in the image is slightly shifted by two grey levels. The text is one tab corrupted etc. And how do you deal with that?

**Chris Benson:** There is no practitioner of deep learning, I think, who has done any amount of work in the field who's going to not recognize the reality that that joke represents. That is true. We have all experienced that.

**Daniel Whitenack:** Yeah, I always use the example, it's like - if you trained a self-driving car to drive perfectly, but you did it in Sweden, and then you take that car and you plop it down in Australia, the first time you run across a kangaroo running across the road, something very interesting is gonna happen. I mean, maybe something really bad, or just something really interesting... But yeah, it occurs. We're talking a lot about images, but also for text and other things as well.

**Roey Mechrez:** Definitely. And I think stability is well coupled with the ability of the model to generalize. Hypothetically, you have a dataset that is the only distribution of whatever, and you can generalize it well. But that's clearly not practical. You don't have access to the entire distribution, and you cannot generalize to the entire distribution, obviously, and you definitely don't have \[unintelligible 00:21:46.06\] But when you shift into practice AI, I don't care about generalizations. I want to be good on what I need to be good at, and make sure that nothing that's out of that good will come into my model. And that's why I call it garbage in/garbage out. I want to make sure that I have a trained set, I have its distribution, and that's the data that I'm going to get, how we're going to achieve that.

I think that's one of the most important problems that cause this failure rate, the 90% failure rate that I talked about in the beginning. Because AI researchers, data scientists, they know how to build models, and they can achieve this 95% accuracy in the lab, for sure, with a stable, static dataset. The production is not stable, it's not static, and it's definitely dynamic and it's going to shift. Data drifts, data shifts. Something is going to change. And how you react to those changes. And then why it's important, by the way.

I think while we're progressing with value around AI, we're also shifting from, let's say, statistical applications, which I define as something where... The difference between 80% or 81% or 82% accuracies - okay, nice; better to the business. But there are mission-critical problems. Claim assessment in insurance, anti-money laundering, fraud detection, \[unintelligible 00:23:24.04\] in PCB boards, whatever... These are mission-critical. The difference between 80% and 81% is critical. It could be massive to the business. And I'm not even talking about applications where their business requirement is 99%. I need 99%. The model can achieve 90%. What do we do now? And that can be breached. There is a way.

**Daniel Whitenack:** Yeah, I think that now that AI is intersecting with all of those different areas... I mean, you don't have to go far in a business to encounter one of those problems where if you do behave massively different than you did in the lab, then you're gonna make a major impact to the business, for sure.

\[00:24:09.27\] I'm wondering - you mentioned this sort of idea that you wanna make sure that the input that you give to your model is something that you expect in your input distribution. I'm wondering how maybe that mindset compares to -- people talk about making their models robust, and you see people maybe perturbing their image datasets to flip them all around or enlarge certain things... There's that OpenAI example where the robot's moving the Rubik's Cube and they poke it with a stick or a stuffed giraffe... You know, giraffes are a major theme in this conversation, I guess.

But one approach seems to be thinking about making your model able to withstand or be robust against perturbations, and maybe the other is concerned with making sure that your model never sees things that it shouldn't see. Is that a proper distinction, or how would you sort of look at those two approaches?

**Roey Mechrez:** Yeah, I think it's a good way of putting it. I'm sure all the audience, including you two, are following \[unintelligible 00:25:14.26\] Data is the important part here. If I can control the data, I can control the model, and better data etc. Super-important elements. And you know, in the ideal world I want to have access to all the data that I need in the lab, and I want the data in production to be static, ideally. And unfortunately, that's not practical in many areas...

**Chris Benson:** It doesn't work that way.

**Roey Mechrez:** And we can do our best... By the way, I think that's one of the key considerations of tech companies that make them better, is because data as a strategy is so significant within what they are doing, from the very bare, first mindset. How I'm going to collect the data, is it going to be clean, how I'm going to train down the line amazing AI models, and not "Okay, let's look at the entire organization, what data I have, and what I can do with AI."

**Chris Benson:** So what kind of strategies do you have to deal with that, in the sense of -- so you know, we have this capability to produce these models in some sort of controlled environment; they're going out there in the world and they're being subjected to this. What are some of the strategies that you use to address that?

**Roey Mechrez:** Yeah, so the two most critical elements that I think are very straightforward but not easy to build - out of distribution detection. I want to make sure that the data that comes into the model is within the distribution. Now, that's not a super-new research area, but it's not super, super-advanced. I think there is active research around out of distribution detection, and how to apply it to some kind of areas. But if you can build this amazing filter that can detect data that is out of distribution and make sure that it's not going into the model - detect the giraffes with respect to the cat and dogs images - you will be better.

Then you have the other part, which is confidence or uncertainty. The research calls it uncertainty estimation; I like the term confidence estimation, because it's more straightforward and not the negative.

So if you have good confidence of prediction \[unintelligible 00:27:24.20\] classification, whatever; it's probably 95% sure about that in terms of probability... Well that's not -- I'm putting \[unintelligible 00:27:41.17\]

**Chris Benson:** Air quotes there.

**Roey Mechrez:** Air quotes, yeah. That is not really probability, of course, but... It's clearly not, right? That's part of the problem, and I want to estimate if the model is sure about this prediction. I have usually this term "uncertainty estimation" or confidence, and how to scale that, and how to calibrate that, and the temperature scaling, whatever... These techniques enable you to say "Wait, the model is suddenly not that sure that it's a dog", and I can really use that number.

\[00:28:14.08\] Going back to the mission-critical element, now I can threshold something, and make sure that if the confidence is below the threshold, let's pass that to a human, right? I have a human in the loop in many applications, but I don't necessarily know how to use it efficiently.

So if I know how to use it efficiently, because I have the out of distribution detection and I have confidence estimation - so I can now make sure that my model is somewhat now more stable. It has its defense mechanism. Garbage won't come in, and if semi-garbage will come in, I will have a confidence score that will tell me "Hm... Suspicious." And that will improve my stability \[unintelligible 00:28:54.10\] and it will improve my ability to combine this model with human, which is super-important in many applications.

**Break**: \[00:29:06.21\]

**Daniel Whitenack:** So you talk about these sort of two filters - one on the data coming in, out of distribution filter, and one on the data coming out of the model, in terms of quality estimation, or confidence scoring, or risk assessment of the output of your model, and forwarding that onto humans. In your experience working with companies, one of the things that I'm always curious about is how you start to judge what you should show to humans versus what you shouldn't show to humans, and figuring out where that threshold is... Because if you go one way too far, then maybe you're letting garbage through, right? And that's causing actual problems in your systems, and all of that. If you go too far the other way, then you sort of start eating away at maybe the good graces that you've built up in terms of making things more efficient; well, now you're just sending all of this stuff to humans, and maybe it was alright and they're not changing much about the output... How do you dial in that sort of system?

**Roey Mechrez:** Yeah. Well, I don't have an amazing rule of thumb to answer your question, but what I can say - it's this mindset of AI solution in an organization is not a technical problem per se. It's a business technology problem, that combines some business decisions, business process, and technology understanding. And I think if we go back three years to 2018, the first wave of AI challenges were characterized by understanding where to start, what AI can do, understanding both manager and executives about AI... But why we're progressing in that and we have better and better decision-makers that understand AI and responsible AI, and what AI can deliver... And they did some AI for managers course at whatever university , or online course... And we can have this open discussion. And product managers that are understanding technology, but are understanding also the business.

\[00:32:20.03\] I think even today we have the AI product manager role. That exists at some companies, which is amazing. That enables us to take better decisions, to develop better products, that are driven on AI.

I think that the main take - you need business people from stage one along the way to take decision, to be involved in what technology can develop.

**Chris Benson:** I love where you're going there, and I actually wanna go there even a little bit farther with you, because as we've gone through the conversation and you've delineated these strategies, both on the frontend and on the backend, to solve both sides of that - you know, let's bring it back to this practical aspect of you're in your business, and you're trying to get some stuff done, and you have a product manager who's trying to contend with this. What are some of the things that you have seen in the market to actually try to implement these strategies and thus mitigate the problems that we're talking about in real life? And I'm not saying it's holistic or a complete list, but what are some practical things that listeners who might be facing their own set of problems wanna do? You know, whether it be data engineering on the frontend of some sort... What have you seen?

**Roey Mechrez:** Well, here I have a rule of thumb - don't do POCs. Try to avoid as much as possible, from building this model in the lab, right?

**Chris Benson:** Yes.

**Roey Mechrez:** Try to understand what are the production challenges from day one. For example, a very classical problem is around data. You want to make sure that the data that you train your model on is exactly identical from the data in production. Or even take the data from production to train on it. And make sure that the acquisition in production of the data that's going to run through your model is exactly the same. It's the same distribution, it's the same problems, it's the same noise. Try to understand the hardware, the requirements, who is going to work with that, how it's going to work. If the data is shifting over time. Do I need to sample differently? Do I have a monitoring element?

That brings me actually to a super-important factor about AI in production which I think is interesting, which is highly related... It's evergreen AI. This AI over time. It's not "I build a model in the lab, I got a 95%, I put it in production. I'm happy. It brings me value." Oops. Three months pass, the data was changing, the model doesn't work anymore. I need to go back, recollect data, annotate, retrain, deploy again. Okay, it's working again.

How you deal with this cycle efficiently. Because none of the organizations is talking about one AI model. That's not the goal anywhere. We're talking about adoption, acceleration, mass organization change, transformation etc. I think Facebook published a few weeks ago that they shifted all the models in production to PyTorch. I think that was the topic. And the amount of models that they are having is just mind-blowing. And not everybody wants to be Facebook, but in terms of technology, and AI-wise, everybody wants to be Facebook.

**Chris Benson:** Wishing they could pull that off...

**Roey Mechrez:** Yeah, exactly.

**Chris Benson:** It's funny that you say that, as you're talking about trying to get to where you're truly reflecting production... And in my experience, working with several organizations, I've often seen an attempt by the data science team working on it to do almost the opposite... Because they perceive that the ability to get to production data and to move with that is somewhat overwhelming. It's a daunting thing for them, because it's a moving target, it's incredibly dirty often, the data...

**Daniel Whitenack:** \[00:36:17.22\] And maybe they're not software engineers...

**Chris Benson:** Absolutely. So when you're saying that, I'm sitting there going -- what you're saying makes perfect sense, and yet, I've literally seen teams trying to do the opposite of that, repeatedly. That's really good advice you're making there.

**Roey Mechrez:** Yeah, I totally agree. And you said about the software engineers as a joke, but that's not totally a joke, because to build an API that will sample data from production to your training environment, and will deploy that efficiently - that's clearly a software problem. And now to do that consistently, and monitoring... Data scientists build models, and solve algorithmic problems. But to build a system etc. you need software engineers. And at least my belief is that squads are probably the way of solving problems. You need engineers, you need data people, you need data scientists, and you need them to work together on the problem, and think about production and think about all the requirements. And you need product managers, and you need business people, as much as combined with mutual communication, same language if possible, in order to tackle this problem.

Take, for example, something that is all the day coming, again and again - security and governance. And maybe \[unintelligible 00:37:41.01\] data scientist will take these elements into consideration without the proper guidance and businesspeople shouting at him "I need explainability!" It doesn't make sense without explainability, because I need to show the regulator how this model is taking actions etc. You have risk departments... But if the organization becomes large and complex like a bank, it's becoming more and more complex to bring it to production, and you need more and more elements. So now we need explainability, and confidence, and out of distribution detection, and we need to monitor the model, and we need to make sure that the data is fitting in the same from production and training, and we need to be able to work with a human in the loop, and retrain the model... And how to keep this model on the rails, how to deal with maintenance. So many elements besides the model itself.

Going back to what I told you in the beginning - shifting from a model to a system. We need so many different elements. And then how do you scale that? That's a problem.

**Daniel Whitenack:** It almost sounds like most of the work is after the initial model training. Who would have thought...? The other thing I'm thinking about while you're discussing this is that it is necessary to bring all of those people together, like you were talking about, in particular, I think the infrastructure and software engineering and data science people... Because software engineers, in terms of the stability that they think of, they think of it like "Oh, I'm gonna write my unit tests. If I change my code and it breaks the test, then I know that I broke my code." And I also have this table of calls that I'm testing against, and my API expects this data, and it either works or it doesn't; it gets that data or it doesn't. Whereas in AI, like you're talking about, just testing that your model can take in a certain type of data and output the expected type of data, which is sort of what we normally think of in testing, isn't enough, because the data and the distribution of data that you're feeding in could change the behavior wildly.

\[00:39:52.13\] So that monitoring piece... The monitoring and testing piece - you sort of say those words to software and infrastructure people and they think of one thing. But for AI it is sort of that, but it's not exactly that. It's that and more, I guess is what I'm after. Do you see it the same way?

**Roey Mechrez:** Yeah, totally. I think that every one of the problems that I mentioned are both software engineering problems, but also algorithmic problems. Take monitoring, for example. Every software engineer understands what monitoring is. That's something that they've been doing for 70 years. Monitoring for any system. You need to make sure, logs etc. and understand when it fails etc. But it's such a complex research problem to monitor a model. How you make sure when your model is failing if the data is changing? These are all research problems. If the statistic of the data is changing, if the model is suddenly not well suited, where I'm exactly on the distribution versus the data that comes in, how I'm looking at them, the vectors that come out of the models, and understand what's going on, of the model. Or take that into -- you know, the hot word today in monitoring is observability. It's bringing observation; what is happening. That's even more complex, to understand what is happening and why; what is failing. That's become even more complex. So people need to work together. There are many different elements to this problem. Software, research, data, infrastructure etc.

My takeaway - this is what I have been doing in the last three years - is building a platform that is dealing with these elements in a unified way. I believe that you can generalize many of these problems in a way that will enable scale. It requires a lot of work, the problems need to be generalized enough, you need to think about these technology elements across the pipeline of the system... But that can be done also in a small scale in an enterprise. But of course, I have my own way.

**Chris Benson:** Well, I was gonna say - you've brought that up, in your own way. Would you take a moment or two and tell us about the specific work that you've been doing in that area? I'd love to know how you are tackling these problems that we've been talking about for a while.

**Roey Mechrez:** Yeah, of course. I won't be able to dive into all the fine details, but the idea of what BeyondMinds is doing - in the last three years we have been developing a platform. And this platform is not a developer tool; it's something that we use in order to provide solutions to enterprises on scale, faster, better, and crossing and bridging \[unintelligible 00:42:37.09\] And the main components of this platform is a system that is wrapping the model. Trying to solve problems that are agnostic to the model as much as possible.

Let's take out of distribution, for example. We have a component that's all its work. Out of distribution is one method out of many others we're using to measure statistics and data and garbage in, to make sure that garbage is not coming in. So we built an entire component; we call it an input gate. And it's an entire research arena that is dealing with stability. And then monitoring and observability - that's another one that is as much as possible model-agnostic.

Not all of these components can be totally model-agnostic. Some of them need to be tweaked. For example, out of distribution detection - that's highly coupled with the data itself. I need to retrain that. But that's, again, something that can be scaled. How to retrain, how to do that efficiently, so I can bring a solution to production in a matter of weeks, not months. And I think today probably 12 to 14 months, I think that's the average time to production in an enterprise. Our goal as a company - you take that into a scale of weeks. 12 weeks will be an amazing outcome for us, and that's enabled because of the platform.

\[00:44:09.17\] Building the model - that we will have to do. That is customizable. But then the monitoring can come easily. How to combine human in the loop can come easily. Explainability for most problems that are required - that can come easily. Stability can improve the model. Retraining in production - I have an entire monitoring and solution management toolbox that I'm using. So I have this entire platform that is wrapping the models and bringing them to production.

**Daniel Whitenack:** It sounds very similar to the conversation that we had with William Falcon around PyTorch Lightning. One of the things he was observing as he was working with different companies and models is that developers were over and over again fighting with the code that they were writing to deal with the hardware, like multi-GPU's vs. single GPU's, versus this GPU versus that... So in PyTorch Lightning the philosophy was to decouple the model piece from that hardware stuff that everybody was trying to write, and that provided the boost that PyTorch Lightning is giving people.

It sounds like here there are these other components... And actually, a very large number of them that data scientists are also spending their time writing code on over and over again. There's the stability, the monitoring, the human in the loop piece... All of these pieces that promote stability and robustness, and they're having to do this over and over, so it's not efficient at all.

So I definitely think that that mindset that you have at BeyondMinds is really interesting in that sense, that it could provide that similar boost in these other areas, which is really exciting.

**Chris Benson:** As I was listening to that, the thing that was going through my mind is he's bringing really good architectural decisions to everyone. And we have seen that often people in data science haven't necessarily had that exposure to the software side, where that as it matured, as the field matured, that became part of it. So I love what you're saying, because I think that really contributes toward the maturing of this industry that we're all in at this point.

**Roey Mechrez:** Yeah. And you know, I've mentioned a lot of research problems, but there are also many engineering problems. Kubernetes, and Docker, and APIs, and so many different elements. How to wrap models and deploy them efficiently and fast... This is becoming common practice more and more, but there are still some elements that are not that trivial.

**Daniel Whitenack:** Well, I really appreciate you helping our listeners think through some of these things. I know my mind has been racing the whole time, thinking about five different projects that I have going on, and how these things map into those projects... Every single one of them, how these things map into that. So I know it's been really good in that sense for me, and I'm sure it will be for our listeners as well.

We'll include in the show notes links to the talk and other things that you've put out. Thank you so much for joining us, Roey. It's been a pleasure.

**Roey Mechrez:** Thank you very much. It was a pleasure talking with you.
