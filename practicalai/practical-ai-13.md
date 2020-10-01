**Daniel Whitenack:** Alright, I'm really excited to be here at O'Reilly AI with some of the Intel innovators in AI and ML, really excited to ask these guys some questions today and hear from them... But before we do that, let's go around and introduce who's in the room. I'll start with you, Vinay.

**Vinay Rao:** Thank you, Daniel. I'm a huge fan of Practical AI, your podcast. I've listened to every one of your episodes. My name is Vinay Rao, I'm the CEO of RocketML. We make distributed machine learning platform to help data scientists do experimentation much faster.

**Daniel Whitenack:** Awesome. And maybe everyone could share something that they're excited about in the world of AI, too. What about you, Vinay?

**Vinay Rao:** I think the market opportunity for AI - whether just doing machine learning or putting out AI products - is very, very large. Everybody's underestimating the market size. My own prediction is that - I'm gonna go on a limb here - it's going to be a trillion-dollar market size.

**Daniel Whitenack:** Awesome. Let's go on to Peter.

**Peter Ma:** Thanks for having me, Daniel. My name is Peter Ma, and I'm working on a project called Clean Water AI. It uses computer vision artificial intelligence to detect the bacteria and the harmful particles in the water.

**Daniel Whitenack:** Awesome, that's really exciting.

**Peter Ma:** Why I'm really excited about AI is what it can do and how that can apply into the current world right now, from self-driving down to pretty much repetitive healthcare tasks. And I think in the very near future we're pretty much gonna be using it to reduce all the costs on the healthcare that a lot of doctors pretty much -- just for a simple screening, at least in the United States. That's gonna be very helpful.

**Daniel Whitenack:** Yeah, it's gonna make a large difference for good, as well as all the malicious things that we see advertised in industry. Yeah, it's great to get that perspective. What about you, Dave?

**David Ojika:** Hey, thanks for having me on. I'm Dave, and this is actually my first time on Practical AI, so it's very exciting to be here. I'm a research assistant - or research affiliate; it's a new position I just got - at the University of Florida.

**Daniel Whitenack:** Oh, congrats.

**David Ojika:** I've recently just finished my Ph.D. Thank you. On the side, I'm also looking at other projects. One of the Intel innovators - we had a demo at the Intel booth today on applied AI in retail. What am I excited about? I'm gonna say FPGAs. FPGAs are essentially like GPUs for acceleration, and I do know Vinay is heavily into GPUs, with RocketML. I'm more into FPGAs for inference. I do see a very large market for inferencing. My personal thing three years ago was when scientists were really going hard to develop ML models, and we're in an era right now when we're trying to take those ML models and put them into production. So there's a much larger market space in that era, for sure.

**Daniel Whitenack:** \[00:04:09.19\] Awesome, yeah. Ali?

**Osamah Mohammed Ali:** This is Ali, with Netrolix. This is my first time with Practical AI. Netrolix - we're excited to use AI in the network field. We control the traffic engineering of our core utilizing deep learning... And I agree, GPU and both - because we're pushing FPGA also to the edge of the network. We're working on pushing the AI to the edge of the network.

**Wes Jensen:** Thanks for having me, Dan. I'm also with Netrolix. I asked Ali to join, because he's much smarter than I am, and the more I learn about this, the more I realize I don't know... And that being said, I like what we're doing, because we're kind of the underlying technology to support all of the AI niches, which is the network, and optimizing the network, and creating a neural behavior and self-correcting behavior in the network, which is 90% internet. And even more so as we grow into IoT, and other things like that.

What excited me about AI is actually pretty simple - the adoption of it. How quickly people are gonna start trusting it, and actually not being scared of a Skynet or something ridiculous, but actually putting faith in it, like we do here. Thanks, Dan.

**Daniel Whitenack:** Awesome. Ali and Wes - just to clarify, because we do talk about networks a lot... But you guys are talking about networks in the sense of the internet and the interconnected infrastructure, not necessarily neural networks...

**Wes Jensen:** That's right.

**Daniel Whitenack:** ...although you're using neural networks on the network, right?

**Wes Jensen:** That's right. It's funny, I say kind of tongue-in-cheek to people that we've harnessed the internet, but what that really means is that we're leveraging about 20,000 sensors, plus opened up about 68 data centers globally, only 22 of which are in North America... And essentially, we just collect data: performance data, latency, jitter, packet loss, throughput, availability, and hundreds of other metrics that we as humans would not even think to account for, that impact network performance over the internet. We took that same intelligence and applied that into security as well. So our security \[unintelligible 00:05:58.14\] are equally as strong, powered by AI as well, all over the internet, as an OTT software. So - a little bit disruptive to the servers provide or equipment space, but it's fun.

**Daniel Whitenack:** Yeah, that's awesome. I have something maybe a little bit special for you guys today. Normally, we just do a standard interview, but since this is a panel and you guys are all experts in the field, I thought it would be fun to just pull some of the recent questions from Quora about artificial intelligence and machine learning, get your guys' perspective, to hear from some of the experts about how they would answer some of these questions that people are really asking as they're diving into the field. Does that sound okay for you guys, are you up for the challenge?

**Osamah Mohammed Ali:** Great.

**Peter Ma:** Yeah.

**Daniel Whitenack:** Awesome. So the first of these questions is "What do I do next when I've achieved a machine learning program at 97% accuracy and good fit?" \[laughter\] You guys are laughing a little bit...

**Peter Ma:** Just stop...

**Daniel Whitenack:** Stop, yeah.

**David Ojika:** This is the point I was alluding to... A few years ago, researchers were working so hard to develop models that would meet 97% and 98%. But what's next after that? \[unintelligible 00:07:03.17\] productionize machine learning models, and it's very exciting to see startups that are coming up almost every day with a workflow to let you take machine learning models and put them into production in a more scalable fashion. I really think that's the next phase of ML and AI - it's how do you put it into production at the edge, or some IoT device.

**Daniel Whitenack:** To follow up on that - what's different about production or utilizing a model after you've trained it to get a particular valuation metric that you might be after?

**Vinay Rao:** I think about your original question a little bit differently. 97% might be at a particular level of problem statement, but as humans we know how to split the problem into minute pieces. Something underneath that may not be 97%. As we collect more data, as companies collect more data, the new problems will start to emerge. Again, accuracy within that would be like 70%, so you'd have to increase it.

\[00:08:07.16\] For example, if you take translation as a problem; 96% accuracy, whatever. But maybe in some languages it's not. So the problem will shift as AI practitioners will be chasing unsolved problems all the time.

**Wes Jensen:** I agree. I think we just need to get out of the way. I think we learned so much as soon as we got out of the way and let that machine learning and those algorithms do what they do and what we designed them to do.

**Vinay Rao:** Exactly, yeah.

**Wes Jensen:** We keep getting in the way and we put a number like 97%. Who am I to define that? In my own mind, I cannot comprehend or factualize what that 90% looks like, or 97% you said, in other languages. We can't assume that it will be that. To get to a certain level... Like we say, like 85% - if we get to 85%, we're super-excited, and then the rest we kind of manage, that 15%, that variable. But you have to always view it as a variable, not a static "I reached 97%", you know?

**Vinay Rao:** On that - for example, if you take a self-driving car, the accuracy of whatever the little functionality within a self-driving car could be 90+ percent in day time, but at nighttime it may not be. So there will always be challenges in the area.

**Daniel Whitenack:** Yeah. Something I always tell people as well is to think about these accuracy or other evaluation metrics really on a case-by-case basis... Because like you said, Wes, it's not always 97%. If I'm in an actual real-world scenario and all we need is 80%, I would get fired if I spent six months trying to get anywhere past that. So you definitely have to take it case-by-case.

**David Ojika:** Just to add a little bit to that, too... I think it's also up to us, the AI community, to define what a standard is. There are effort like MLPerf, where folks from Google, Facebook, Amazon, IBM actually come together to define what a set of metrics is - what is the accuracy, what is the throughput and latency... I think such efforts actually could help propel a standard benchmark in ML.

**Daniel Whitenack:** Awesome. Well, let's go on to the next one of these... The next one is "If I can't afford to buy a GPU (like me, maybe) for deep learning, does that mean that I can't do any serious neural network training?" What do you guys think? Peter?

**Peter Ma:** I started the entire AI without a GPU. I actually just got my entire GPU recently. There's a lot of resources online, including Intel's AI Academy, where it gives you CPU Xeon servers that you can train. Also, there's a lot of schools that you can leverage their GPU servers. Now, you have to wait a little bit online, but the resources are generally available for you to go train.

And then for the most part, when you're starting with the AI, I don't even recommend you go training. There's thousands and thousands of pre-trained models that you can actually start practicing, and a lot of times those models are -- some of the models I used right in the beginning, I still have not beaten their benchmark. So that's the way I see it... If you wanna get into AI and deep learning, just use preexisting models first, and then once you have crossed that threshold, you can go through Intel's AI Academy. Once you go through that, you can get funding. You are already an AI expert by then.

**Osamah Mohammed Ali:** Yeah, I agree. And the new developments in FPGA and in neural network cores, including that core support inside the new CPUs, are making it a lot different. You'll be able to see a lot of neural network applications existing today on your smartphone. Android and iOS already support -- the SDK is already in there, and you're actually training, on a small set, of course, a small dataset... But you're training on the CPU. You're doing inverse, quickly, without worrying about the CPU power.

\[00:11:58.01\] So probably a $50-$60 Raspberry Pi-like project will help a lot, and there's a lot out there in the market. Intel Movidius is another good example. It's a neural compute stick that you can actually get for under $70. And using the resources at the Intel AI Academy you can actually start with a pretrained model, as you basically mentioned... But you still don't have to go GPU. GPU - unless you already figured out the model size and what you are doing... You're working on a larger scale of data. That's when you need GPU. So it's not really to start with, it's a very advanced stage with AI.

**Vinay Rao:** I'd like to add a point... We specialize in distributing machine learning load for training. That's what we specialize in. And we're working with the Intel team to show -- actually, we have benchmark data that's already there, but I'm letting the cat out of the bag here a little bit prematurely... We're co-writing a paper with Intel that one can do training faster than GPU - and cheaper that GPU, for sure - just with a commodity CPU. That RocketML-Intel combination paper is coming out.

So far, there's inferencing and there is training, where you consume a lot of the hardware compute resources. So far, CPUs outperform GPUs in the inferencing, but that wasn't the case in the training space... But the reason for that was that most of the software people use on top of the hardware is bloated. For example, Apache Spark is great software for some other purpose; for training, it's a bloated software. It comes with a lot of baggage that's not required for machine learning training.

We have built a system that can overcome that barrier, and now we are hitting a benchmark below the GPU speeds. So it's much faster than GPU speeds. It's an interesting thing that we found out.

**Daniel Whitenack:** Awesome. That's exciting to hear about. I look forward to seeing that paper. I appreciate all of your guys' perspective on that. I think that a lot of people see that as a barrier, when it doesn't have to be. I would emphasize as well that training isn't the only bit of the AI workflow in general, even if you're thinking of training only. There's a lot to learn about the fundamentals, about pre-processing, about inference, like you said, Peter... So there's a lot you can learn, and we'll post some of those resources in the show notes.

Okay, so this next one is kind of interesting to hear your guys' perspective... This question is "Why is there a sudden craze of programmers with little math background jumping onto machine learning, which requires a much different skill set than traditional programming?" What do you guys think? Have you seen this, too?

**David Ojika:** Definitely.

**Osamah Mohammed Ali:** SDK tools that we see out today made it a lot easier to consume and build and utilize training models, compared to start doing everything on your own using Python, for example. If there's ready-to-use machine learning model tools that I can go to AWS, for example, and just pull it, and immediately start using it and have prediction ready to go - yeah, you will see a lot of people without mathematical background trying to get into that. But you will face issues. You will fail. You'll need that mathematical background.

**Peter Ma:** As a hacker, I basically build prototypes a lot, and the entrepreneurs generally follow what the trend is. And the latest trend is blockchain and AI. Blockchain is still really difficult to program, but people get into it because there's one or two really good applications. They see Bitcoin as one of the things that's gonna change the world, and all the programmers are starting to study blockchain. And they see self-driving cars, they start seeing this as being deployed in the real world, and they're like "Okay..." This is a time where you have emerging technology that's being applied in the real world now, and this is a time for me to invest my time to understand and to execute and to find opportunities within this space.

\[00:16:18.15\] As it happened back with mobile. When mobile started getting into people's hands, all of a sudden, all of the programmers started jumping on mobile. I jumped in before that, and I remember just being one of the independent Android developers; I was invited to give a talk at TED global. That was really rare, because people didn't get into it. But as soon as that tipping point has been passed through - we have current applications being deployed in the real world - that's when the programmers all wanna jump in, and this is where opportunity is.

**Wes Jensen:** That's such a great point, because if you think about it, if they started from square one, when they found out what was hot on the market right now - like blockchain, or AI - they would never catch up. The ideas or where they think the application would be would be two years out by the time they caught up in calculus, and then understanding derivatives... That's messy. So what they do is - you're right; they go in in advance, they say "I'm just gonna do this, and then I'll back-track. I'll try to figure out that actual knowledge down the road." And to Ali's point - that can be dangerous, absolutely.

I would caution those "Don't not innovate, and don't not jump into it..." Absolutely. Because I will say something that will spawn the rest of your minds here much better than anything I could come up with on my own, regardless of what my mathematical history is, right? And I think that's what we need - to spawn this innovation. But be careful. I totally agree with that, they're following a trend.

**Daniel Whitenack:** Yeah. I think there's definitely a balance to be had there. We've had guests previously on the show that don't have a math background, but are still innovating in a really great way in AI... So I would love to encourage people to get in the field, get their hands dirty; like Peter said, get some pretrained models, try out some things... This is a new layer in the software stack that people can experiment with... But then once you start getting into it more, you're gonna naturally be drawn into these ideas around the theory behind neural networks and other things, and you don't have to have a math -- I don't know, do any of you guys have a math Ph.D, or something like this?

**David Ojika:** Far from it. \[laughs\]

**Daniel Whitenack:** I definitely don't, so I think the math is important, like you guys have said, and people will get into it, but you don't have to feel like if you don't have a math Ph.D. then you can't get into AI and start innovating.

**David Ojika:** One quick point I wanna make - a question you also have to ask yourself as a developer is where in the software stack do you see yourself? The machine learning software stack is pretty complex and deep. You can look at the analogy of, say, an assembly language developer or a Java developer - where in that stack do you wanna be? Do you wanna be writing drivers? Do you wanna assemble language programming? Because very soon, AI is really gonna be a box, essentially, just \[unintelligible 00:19:02.02\] APIs. So do you wanna be writing applications for this box, or do you wanna actually build the box? That's one question the developer has to answer himself.

**Daniel Whitenack:** Great point.

**Vinay Rao:** That is so true. Very good point.

**Daniel Whitenack:** Awesome. This next one is probably somewhat controversial. I talked actually to Wojciech Zaremba yesterday about general intelligence... What is your guys' take on how intelligent is AI now? The question is "How is intelligent is AI now?" This was in July; now we're a little bit later, so maybe it's more intelligent now, but... What do you guys think?

**Peter Ma:** \[00:19:44.06\] Very dumb. \[laughter\] AI right now - because everything is called AI now, because of the buzz, as I explained earlier... But right now it mostly consists of inferencing. That's what I consider -- deep learning; that's what spawned the entire industry. It becomes a sensor, rather than intelligence itself. Because a computer doesn't know what a cat is before 2012. And the whole point that right now the computer said "This is a cat, and this is a dog", that's what the intelligence -- and this is all it can do.

But with all the other programming of human intelligence that we have combined with the so-called deep learning and artificial intelligence - this is \[unintelligible 00:20:18.12\] that real intelligence is... And that can go into a dangerous field. If you think about not just how it can benefit a human being, but what technology can do, it gets into very, very dark sides of humans, as well as dark sides of a machine itself.

For example, you can easily target people using dropping bombs. That's just something -- so as we developed AI, I think this is a thing we have to consider; right now, everything is dictated by human intelligence, so we have to decide whether we want to build something that can just drop bombs because it sees humans. Because at the end of the day, if you train that model just detecting humans, you have to have something to say "You cannot use this to drop bombs."

**Wes Jensen:** Can I summarize your answer? The answer is yes and no, good and bad, smart and not so smart... And as an example, if I apply AI in a retail architecture and I wanna do RFID tracking to push advertisement, or just to track foot traffic generally in a store, or motion tracking for my A/C, for saving power, simple things like that - AI is super-smart. AI is brilliant. And I see an ROI immediately.

But if you take it to a more complex model, like what you're saying, where it can get really scary... If you think about simple things like an autonomous vehicle - everybody talks about autonomous vehicles... But let's say I'm in a car, and let's say I'm in an autonomous vehicle that tracks vitals now, because it's self-driving; maybe it's tracking vitals. Maybe I have a heart attack. Maybe the car needs to pull over. Does the car understand (which we just taught it) what a road is? Does the car even understand the density of the gravel on the side of the road? How far to pull over, how to look over your shoulder and see how much traffic you're gonna cause by pulling over here, versus 10 feet ahead? It's that consciousness, so it requires so much more. So in that instance, it's not very smart. Not yet. Instead, I would argue that it's not autonomous at all in vehicles, but rather automated, programmed based on a set of parameters, not autonomous at all. I don't think we're there yet.

**Vinay Rao:** Yeah, there are two ways to think about it. One, a very simple statement is "Easy is hard. Hard is easy." What is hard for humans is easy for machines. If you want to ask someone - a data scientist, or Larry Page also - and say "Hey, what does the recommendation engine look like?", he won't' be able to answer that question, whereas machine learning can do that much better than humans.

On the other hand, what's easy for humans - a cat is a cat, or whatever it is - that's a lot easier for humans, but for machines it's harder... But it's getting better and better. Andrew Ng, one of the key guys in the AI segment - we almost worship him - he says that one second for humans to do an inferencing, "This is a badge, this is a human being, this is a mic", if it takes one second, a machine can do it, at the moment. But I think that that threshold is increasing very rapidly. We increase the compute capacity, data quality, and of course, there's algorithms, the math behind it, as people invent more new math ways of representing the real world - it's all getting faster rapidly, at an exponential rate. And I think there is some threat because of that, and also at the same time you could solve significant problems, for example in cardiology, or in radiology medical spaces; you can literally make a huge difference to the human beings.

**Daniel Whitenack:** \[00:23:57.24\] Awesome, yeah. Thanks for your perspective on that. This one probably builds on that one, and maybe this is a point of confusion for a lot of people. The question is "Is a neural network actually a good model of how the brain works?"

**Osamah Mohammed Ali:** If you look at a perceptron as an example, the way your brain actually gets a signal from a sensor in your fingers, and the way you react to it - just building that same model in a neural network may look easy, and it may work for a lot of applications. As we said, we can actually have machine learning as models. But putting these models together, the sensors together, to actually make an intelligent decision based on all these - I don't think that this is how the brain works.

The way you may sometimes think about like a smell, or you hear a music - that'll remind you of something... You don't actually know how that worked; you don't have any idea how it worked. With a machine, the consciousness is not there. You don't expect it to be able to do that, or come up with new ideas, so... It's hard.

**Vinay Rao:** Just to add on that - I think there is a symbiotic relationship between neuroscience and neural networks, people who are trying to hack/ biohack the way they think the brain works into machines. I've heard scientists say that by reading the papers of mathematicians and about neural networks, they learn a lot about the brain. So there's still a large area as to how the brain works that people don't understand, even though neuroscience is improving quite a bit... So this is an interesting, and definitely very intriguing area to keep an eye on.

**Peter Ma:** I just wanna add something. I think the neural network is just one part of the brain. As a part of the brain we have a lot of things - we have memory, which computers have a hard drive that's specifically just simulating our memory. A neural network is basically just a classification and object detection, and that is part of that.

As we do more computer science and more AI in the future, we're gonna uncover different parts of the brain, that -- you know, some of them are gonna react to smell; currently, it's hardwired... But is it human-hardwired, or is that learned? These are things that are gonna come; it's gonna be very interesting the next few years.

**Daniel Whitenack:** Building on what we were talking about, about what a neural network is, I'll jump into this next question. The question is "In a neural network, each neuron in a hidden layer is set to focus on a certain feature. Take an eye, for an example. But how is it deduced that an eye is an eye, since it can contain a combination of things, like an eyebrow, and other parts of the face, and the pupil, and all of those things?" Any one of you wanna take a stab at describing that?

**Vinay Rao:** I think it depends on how much data we provide the machines. With enough data, a machine is able to parse out those similarities. Everything that a machine does is just trying to match a pattern, and every layer helps match one little pattern at a time... So that's how the deep neural nets keep adding layers and layers. Each layer has a quite interesting set of information that you can make use of for some other purpose, too.

**Daniel Whitenack:** Maybe a follow-up on that... I mean, there's a lot of talk about deep neural networks now. Is the purpose of all of these hidden layers in the deep neural networks to detect these more complex patterns, or why have the deep neural networks advanced so far?

**Osamah Mohammed Ali:** \[00:27:49.24\] It's basically like -- in your brain, the way your brain has a receptor field. When you think about the way your brain reacts to caffeine, for example, or to nicotine... A bind with certain perceptrons and neurons in your brain to actually feel that. And now - the same thing with these layers; you've got a lot of filtering, you've got a lot of control that's happening in there, and part of that is basically having multiple receptor fields, so you're actually going faster, because if the receptor field doesn't match, you're skipping; in that neural network, you're not completely going through it. And remember, you're doing that thousands and thousands of times, you're in that training level.

So basically, adding the receptor fields in there - it changes the way we see it, it changes the way we control it... But still, the way a neural network will work is gonna go more about distribution than just as a single node, and that's why they'll work together. You can have multiple nodes making decisions together. That's just what makes sense, basically - distributing the decision-making, instead of deciding on one type of neurons, for example. With certain sigmoid control, you're gonna have multiple, and based on the decision of the first one - which one to trigger, which one to attack?

That's how the eyes work, actually; there's multiple layers of filtration that happen, and sensitivity, that change with the lights around you. We're far away from that, but cameras will have these technologies slowly. As we understand more, we'll build more into the neural network.

**David Ojika:** You know, it's that constant debate, if machine learning is actually science or arts. I think it's really hard for a data scientist or a non-machine learning expert to figure out "What layer should I put where? How many neurons should a single layer have?" But I think efforts like AutoML are actually trying to solve that problem. So you can install AutoML and such tools and you're ready to go. But time will tell, to really see how far we get close to getting accurate models based on such tools.

**Daniel Whitenack:** Yeah, and just describe AutoML a little bit, because people might not be familiar...

**David Ojika:** I think Wes was gonna say something about it...?

**Wes Jensen:** You know what - I was actually gonna say, these questions are so presumptuous. Again, they're human questions about a non-human platform, and they're presumptuous. Peter - you mentioned about how neurons \[unintelligible 00:30:15.17\] perceptrons, and how those impact the whole model, right? And now we're only focusing on maybe two elements of our brains - storage, and potentially some reasoning. Yes, and decision-making, but the fact is maybe AI will evolve even past that, to where it will define that maybe our brain isn't connected the way it's most optimal in a compute environment.

So the questions are presumptuous... And when we answer some of these questions, we have to answer based on unknowns. The easiest analogy I like to use is when you say "Oh, that planet can't support life." Who are you to define what life is, and what another life form requires to exist? How would you even perceive to know that? So some of these questions - they have to be open-ended, and you have to keep your mind open to what is a much larger picture than what we can even think can exist.

**Daniel Whitenack:** I'm glad that we've covered the full gamut between neural networks and aliens. \[laughter\] I'm happy that we made it there.

**Wes Jensen:** I did that for you... \[laughter\]

**Daniel Whitenack:** So just briefly, before we go on - I'll circle back to Dave and I'll let him mention what AutoML is, so people can...

**David Ojika:** Yeah, so typically when you train a machine learning model, you're tuning a bunch of parameters, or hyperparameters, like batch size, linear rate iteration, and whatnot... So AutoML lets you tune those knobs and then gives you a way to accelerate the process, essentially. There are other tools like AutoML, but that's one of my favorites.

**Daniel Whitenack:** Awesome.

**Vinay Rao:** Just to add on that - great models are built through iterations, iterations are very tedious and taxing for a data scientist to do it. AutoML reduces that extra effort quite a bit. It's sort of machine learning on machine learning.

**Daniel Whitenack:** \[00:31:58.08\] Yeah, it makes sense. And we'll put some links in the show notes, of course, to some of those resources. The next question, "If deep learning is the future (which maybe everyone says it is), what is the need for machine learning methods like SVM, decision trees, bayesian methods, Markov chains etc.?

**Osamah Mohammed Ali:** Each accelerate in a different field. Deep learning will not work for a lot of mathematical equations that we deal with in the network field today, because the data type, the way it behaves changes with a lot of factors that is not fitted in a table. I cannot just fit it in a table and have parameters define it.

So there is a lot of fields in AI where deep learning may be good to actually predict a model based on tree size; information that you can fit easily in tables. And also pictures - if you look at pictures, it will take in pictures and actually turning that into a model that's basically looking at the pixels inside. It's the same idea. So yeah, the other machine learning models still exist, and are actually a lot faster in performance and in behavior... Especially supervised behavior, when you control that, deep learning doesn't have all of that built into it. But again, it accelerates into pattern recognition a lot faster.

**Vinay Rao:** Yeah, not everything is a nail. You need a hammer for a nail. But if you have a screw, you need a screwdriver. All methods have value, and a good fit in different areas. Deep learning turns out to be quite versatile, but it has its own weaknesses, too.

**Daniel Whitenack:** Yeah. On that note, for people getting into the field - they probably hear a lot about deep learning, but there are so many methods to learn about. What would you guys recommend as far as a person getting into a field? What sorts of things might they want to learn about before deep learning, and how quickly should they make that leap to learning about these deep neural networks?

**Osamah Mohammed Ali:** You start with machine learning basics before you go to deep learning. What is machine learning? What are you trying to achieve? And you understand basically how you're taking parameters, what training means. You actually get familiar with the framework. There's a lot of frameworks you will get introduced to. Each of them have a powerful side that you can use in certain systems. Yet, before of this, in my opinion, distributed systems. You need to be able to run around, know your way around as a distributed system engineer, because AI needs a lot of that. You're gonna have models sitting in the cloud, you're gonna have inverse happening on the edge, you're gonna have training maybe happening on the edge, in some cases.

**Peter Ma:** To get into this side, I would recommend somebody - this is how I got into it - just basically first figure out what is cat and what is dog. I'm sure all of us have gone through that. Once you go through that -- because it's the goal that's pushing you to keep learning. First of all, it's like "Okay, how do I determine the elephant from dog and cat? And from there, I'm like "Okay, I need photos of elephants", so I have to basically google a bunch of photos of elephants. From there, I basically say "Okay, what framework do I use?" And I actually selected a couple of frameworks. I'm not gonna say which ones.

I basically chose the easiest route that I was able to train my model. This is to the limitation of a person's imagination. It will keep their curiosity going, it will keep them googling or looking on Stack Overflow for information. And when they get stuck, at each step you learn a little more, and eventually pretty much how your own way would work. That's a good way for getting into deep learning.

**Vinay Rao:** That's very good advice, that I agree with. It's a complex topic. There's math involved, there's domain knowledge involved, and the ability to define a good problem is very critical, too. And then you have the tools, like TensorFlow one day, PyTorch the other day... There's so much to it.

\[00:35:59.26\] I would agree with Peter in saying that just getting there, start with a simple problem... You don't have to worry about defining a problem, and you're trying to make the machine identify cat versus dog. So you kind of minimize the buttons you have to push, and start small, and as you gain confidence and curiosity kicks in, and your goals change, and you learn new methods, new complicated approaches - that's the best way to do it.

**David Ojika:** Another quick thing I wanna add is it also depends on how deep you wanna go. If you're in Academia, then you probably wanna do study statistics and probability. If you're not, if you're in the industry, you probably wanna build prototypes as fast as possible. Then you wanna use frameworks like TensorFlow, Keras especially is one of my favorites... It's very easy to go, four lines of code, you have your model trained, and it's doing inferencing. So it really depends on the user, the developer, what you see yourself being in that machine learning stack.

**Daniel Whitenack:** Awesome, yeah. One of the things that we've emphasized before is in line with what you guys are saying. Find a problem that you're passionate about, find some data that you're interested in, and just try to start answering those questions, and that will lead you to the right frameworks, and the right methods, and the right things to learn about.

**Wes Jensen:** It's a great point. Just start where you wanna start, find interest in it... Because if you're trying to do static tasks, A, B and C, to get to the end result - I think you're following a set of steps. I think you have to have a passion about what it is you wanna solve for, what you wanna do. Then the excitement, the motivation behind that pushes you further. But yeah, if you're just trying to give someone a guideline, "Do this, do that, do this, do that" - that's boring. That sends me back to school, when you just had to get your homework done. That's not fun. But I think everybody at this table is super-excited about what we do, and we follow our own paths. That's why we're all doing different things.

**Daniel Whitenack:** Awesome. I don't know if all of you guys primarily work in Python... I think we could extend this next question to whatever language you guys work in... But apparently, the internet wants to know what is the coolest thing that you've done with Python/whatever language you're interested in. Maybe if you guys just wanna highlight one of the cool things that you've done, to give a little bit of inspiration to the audience.

**David Ojika:** My kind of projects - going back, again, to what excites me, is FPGAs (field-programmable gate arrays). FPGAs are pretty low-level, and they don't really operate at the level of Python. But as you know, the frameworks operate at the level of Python, so what I typically would do is create wrappers around the FPGA low-level APIs. So I would work with C, C++, and then create wrappers for Python, so you can easily plug in the device to such frameworks.

**Daniel Whitenack:** Awesome. Are any of those wrappers and that tooling - is that available to the public?

**David Ojika:** Typically, no. Because these are very low-level driver API stuff. \[unintelligible 00:38:42.15\] Right, exactly. I don't even think the users would be interested in knowing what goes in at that level, so Python is the way to go, I would say.

**Daniel Whitenack:** Awesome, yeah. And is any of that stuff that you've done public, where people could take a look?

**David Ojika:** Currently not public.

**Daniel Whitenack:** Okay. Awesome. I know that Intel, for example, is putting out a lot around FPGAs. Are there resources out there, or webinars, or anything?

**David Ojika:** Yes, Intel has done quite a lot in terms of enabling FPGAs for data scientists and machine learning. There's actually a tool called OpenCV SDK. It was recently released, not long ago. OpenCV SDK would allow you to take your trained model and run it through what is called a model optimizer. It's actually a Python script. From that, you would get an intermediate representative which you can then use to port against pretty much any hardware that Intel makes today - Movidius, FPGAs, CPUs. It used to be OpenVino, now it's OpenCV SDK... It's the same thing.

**Osamah Mohammed Ali:** It's integrated together.

**David Ojika:** Right, right. OpenCV SDK is what it's mostly called today. That's the tool that you can use if you're using Intel's hardware. It's pretty to use, it's Python-based.

**Daniel Whitenack:** Awesome, yeah. I appreciate that. I definitely wanna dive in more myself on that.

**Osamah Mohammed Ali:** \[00:39:57.08\] And the most exciting thing... FPGA is a very exciting thing for me right now, but I believe \[unintelligible 00:40:03.06\] of SDR and FPGA together - that's what's gonna change the way we push AI o the edge. Because imagine - you don't have the limit of a certain technology that already sits on this device; just because the technology changed in a few weeks, or we've found a silicon-level issue with the design itself... Since FPGA, it's easy to rearrange. It's just firmware that you can actually push, and make it easier, a lot easier to control.

SDR also, pushing SDR - which is software-defined radio, basically. That's gonna make 5G technology, LTE technology and IoT technologies without being stuck in a limit. And imagine if you actually let the machine decide the control of the waves, and the control of which band to actually use, to make sure a swarm of drones, for example, stay always connected. So AI is gonna get pushed to that, and I believe FPGA -- I mean, we've been in the network industry for a while... It started with FPGA, especially on the network side, because it's easier than building a complete ASIC, go to the market. But with FPGA pricing going extremely down in the last 5-6 years, until introduction of a new type of FPGAs that are actually built for intermediate devices... It's not just input/output features; you have more cores from the technology that's available to you.

I believe, \[unintelligible 00:41:33.01\] Python being able to actually utilize, to control SDR and FPGA - and we did some research on that - on the edge of the network. It's extremely amazing. It can push AI capabilities a lot more to the edge, and use more sensors capabilities, utilizing that FPGA and sensor fusion. You don't need a lot of sensors. You can use less channels by fusing your data together, and having like -- we refer to it as the edge of the network, which we refer to it as MAEC (multi-access edge compute) today. But we also believe there's another layer, so not everything is gonna be in the cloud. It's in the edge, but also furthermore on the device itself.

There will be some decision-making happening there to eliminate the amount of bandwidth we use. Otherwise, all these connected devices will send so much data; no matter what technology we have, it's not gonna be enough to process it.

**Daniel Whitenack:** Awesome. Any other thoughts around interesting things you've done with Python, or other languages that you wanna highlight?

**Vinay Rao:** We work at the infrastructure level, just bare metal, up silicon up level, so we kind of try to be hardware-agnostic with CPUs, or FPGAs, or whatever it is. We work at C++ level, not so much on the Python.

**Daniel Whitenack:** Sure. Well, what have you been doing recently at the C++ layer? And also, I'd love to hear you speak towards the role of C and C++ in ML and AI. A lot of people see Python as the only player, but I think that's kind of a facade, in some ways... Maybe you can speak to that.

**Vinay Rao:** At the infrastructure level you need a compiler language like C++. Then at the user level, we put a wrapper and allow people to use our product with a Python interface. A Jupyter Notebook, they can call our libraries and make use of it.

Our languages have value there, but I think a lot of the models will get built in Python only; that's a fact. But when it comes to distributing to consume compute, you need something else underneath.

**Daniel Whitenack:** \[00:43:45.06\] Gotcha. On that note, maybe the last thing that we can end with - there's a lot of people getting into (like you said) training with Python, and maybe they're hitting some blockers as they're trying to scale things, or they're trying to build up an AI team, and maybe not knowing how to productionize models, and that sort of thing... What general recommendations would you guys have around the team that you build up, that you're trying to put together to build AI models, and some of the tooling that you might need to consider, the methodologies that you might need to consider as you're actually trying to scale AI?

**David Ojika:** I'll add by saying it depends on if you wanna be a machine learning developer, or an infrastructure engineer... Or you wanna be both, which is great, because I'm sort of somewhere in between; a little bit of this, a little bit of that.

Two that I'd recommend are Docker, maybe Kubernetes to then manage Docker containers that are running these ML models across multiple nodes... But again, like I said, it really depends on what you really wanna do.

**Daniel Whitenack:** Yeah. On that note, do you think as far as teams that people are trying to build up - maybe you're trying to start an AI effort in your company - do you need to have both of these components, or do you think there's people out there that fulfill both of the roles themselves, or...?

**David Ojika:** Right. It turns out there are actually really nice dev ops tools you could use. I would say maybe just a team of one person should be able to manage the infrastructure that runs these ML models... And really, you can deploy Docker containers and Kubernetes, Mesos for example, to kind of manage these models. It's a different thing if you are running it at scale. Then you may need a large engineering team to make sure the business is up and going.

**Vinay Rao:** The most time-consuming part about building a great AI product isn't necessarily the deployment piece. It's thinking right about the domain, about the problem you are trying to solve... Especially if the team is being built in a bigger company, the problem definition itself requires a lot of multiple levels of agreements and consensus. That is a challenging thing. So you need people who can build consensus, you need people who can do critical thinking, and then you need great data scientists who can translate those problems into some kind of a model - okay, it's a classification problem, or a clustering problem etc.

Somebody who is familiar with that kind of semantics, being able to translate that and hack together and experiment, put out a prototype. You should be able to get to a prototype really fast - that should be the goal - and that requires a multidisciplinary team.

**Wes Jensen:** That's a good point. I like to say you need translators. You need people, because the folks that are doing the dirty work, and getting their hands dirty, and the programmers and developers - those aren't the people with the cash, a lot of times, and those aren't the people making the business decisions. So you kind of need someone in between, that's savvy enough to get the idea, to able to communicate with those that are really putting the rubbers on the road, but also communicate what the Why is, right Vinay? What the end result is going to be, and even bigger, what's the ROI, how many sales am I gonna get? You must have to dumb it down, and it's almost insulting. That's why you hear the joking tagline "Don't let the engineer make the product." Because you'll keep fixing it, it'll keep getting better and better, and that doesn't scale for enterprises or for a product to go to market.

So we constantly wanna do better things, and we can never deliver something because it's never done. It will always be better. I think you've gotta have that buffer - someone in the middle, that can translate from the tech to the business side... Because if you don't have that, there's a huge gap between the business guy and the folks like you that are actually doing it.

**Daniel Whitenack:** Awesome. Well, just to kind of end things here, I wanna thank you guys for taking time out of the conference - I know there's a lot of great talks going on, so thank you guys for taking time to talk; it was really some great perspective. And thank you to Intel AI for helping arrange this panel, we really appreciate it.

Thank you guys so much!

**Osamah Mohammed Ali:** Thanks for having us.

**David Ojika:** Thank you, Daniel. Thank you for having us.

**Vinay Rao:** Thanks for having us.

**Peter Ma:** Thanks, Daniel.

**Wes Jensen:** Thank you.
