**Daniel Whitenack:** Welcome to another episode of Practical AI. My name is Daniel Whitenack, I'm a data scientist with SIL International, and normally I'm joined by my co-host, Chris Benson, who is principal AI strategist at Lockheed Martin, but this week is kind of weird in a couple of respects, so Chris is out dealing with a personal thing, which I totally understand, and he'll be back next week.

Also, we're all just kind of -- at least if you're in the U.S. or watching on from afar, it's kind of a crazy time right now... Yeah, there's a lot of people struggling and suffering and experiencing a lot of hardship, whether that be from the police brutality that's happened, or the looting, or even just the ongoing struggle from Covid. It's definitely a hard time right now... But there's important issues to talk about, actually not unrelated to this.

We know as AI practitioners that a lot of how our models behave is driven by the data that we put in. And because we're often gathering data from a biased world, then often our models end up being biased and no fair... This is a real problem. People like to talk about the sentient problem, or singularity; they're afraid of AI taking over the world in that way... But I think in our immediate terms, these sorts of problems of bias and fairness and understanding why that happens, the explainability around our AI models is even more so important because of the things that are happening in our world and because of all of these things that are driving the data that we're using.

Today I'm really excited to have an expert on this topic with us, and not only an expert on the topic of explainability and building things related to explainability, but also the CEO of a really innovative company doing a bunch of great things. The company is Darwin AI, and today I have with me Sheldon Fernandez, who's the CEO of Darwin AI. Welcome, Sheldon.

**Sheldon Fernandez:** Thank you for having me today. I appreciate.

**Daniel Whitenack:** Yeah, definitely. So as we get started into this topic, I'd love to just hear a little bit about your background, and how you got into the AI world, and eventually found your way into Darwin AI.

**Sheldon Fernandez:** Yeah, it's quite the interesting story. I went to the University of Waterloo here in Canada, so I'm right now speaking to you from Toronto, Canada, home of the NBA champion Toronto Raptors, and we'll be champions for a little bit longer, it looks like...

**Daniel Whitenack:** \[00:04:10.22\] \[laughs\] And Waterloo is kind of a tech hub, right?

**Sheldon Fernandez:** Correct.

**Daniel Whitenack:** So for Americans who might not be a little ignorant of Canadian things, that's like a big tech hub, right?

**Sheldon Fernandez:** Correct. It's kind of like the MIT of the United States, so it's a very engineering-focused-heavy school, and a lot of our tech innovation comes from Waterloo. There's UFT, there's Montreal, but of course I'm gonna be biased and say Waterloo's by far the best.

**Daniel Whitenack:** Of course.

**Sheldon Fernandez:** So I went to Waterloo, did computer engineering, started a enterprise software consulting company in 2001 and grew that to a size of 700. We were acquired in 2017 by a company called Avanade. They're co-owned by Microsoft and Accenture. I was a CTO of that company, and my job was to bring emerging technologies to the enterprise about 2-3 years before the enterprise is ready to use them.

So when DeepMind accomplished what they did with AlphaGo - you might remember that - in 2016, I remember really paying attention to that and thinking "This was significant." I had followed computer chess, if you remember, for many years...

**Daniel Whitenack:** Yeah.

**Sheldon Fernandez:** ...and it was a very sad day for me when Deep Blue beat Kasparov; I was very downcast. My mom thought it was a girl, and when she found out that Deep Blue beat Kasparov, I think she was half-proud, but also half-worried that she'd never get grandkids, right?

**Daniel Whitenack:** Right, right...

**Sheldon Fernandez:** But the thing with Go - the game of Go wasn't supposed to be conquered by machines till 2030 or even 2050. So when Deep Mind did that, I remember thinking "This is significant. How did they do this?" And then really getting into deep learning and doing the Jeffrey Heaton learning course. And then when we got acquired - I had been speaking about deep learning, and a mutual friend said "Go have a conversation with this academic team at Waterloo. It's a special team, and you'll have just a wonderful conversation. And I did.

They just had incredible technology, and I was just supposed to advise them. I wasn't supposed to start another venture. I had just finished a 17-year journey and was gonna take time off and drive my wife to work and watch The Price is Right and all the wonderful things you do when you're retired... But this team was just too special.

**Daniel Whitenack:** Not to be.

**Sheldon Fernandez:** Yeah, right?

**Daniel Whitenack:** Yeah...

**Sheldon Fernandez:** So I started advising them, and then the talks got more serious and I'm like "Okay, I have to do this." We formalized the company in 2017 and got our venture funding in 2018, and four months after that my wife got pregnant with our first child.

**Daniel Whitenack:** Oh, wow.

**Sheldon Fernandez:** So I actually have two startups. I've got an artificial intelligence startup and a biological intelligence startup.

**Daniel Whitenack:** Right. Both on the same sort of timeline.

**Sheldon Fernandez:** Exactly, and they're both magical and exhausting in equal measure, but in different ways. So it's just been an incredible ride. Our chief scientist, professor Alexander Wong, who's Canada's research chair in artificial intelligence. So this team just has an incredible amount of scholarship and innovation behind them. So to work with them to take the product to market has just been incredibly exciting, especially given the use cases around AI, and so forth. So that's the quick journey.

Then (very quickly) although I did an engineering degree, I took some time off in my previous venture, I did a masters degree in Theology...

**Daniel Whitenack:** Oh, awesome.

**Sheldon Fernandez:** ...which was just out of interest, and somehow that's significant now because of the ethics and the way we think about AI.

**Daniel Whitenack:** Yeah, for sure.

**Sheldon Fernandez:** So it was just a fascinating combination of things.

**Daniel Whitenack:** Well, there is a number of interesting groups exploring that connection. I know there's a group in Seattle... Also, I work for a faith-based \[unintelligible 00:07:26.17\] or whether it's the sort of things that we started talking about with bias, and fairness etc. Yeah, it's interesting to have those conversations, interesting to hear that background as well.

**Sheldon Fernandez:** Yeah, for sure.

**Daniel Whitenack:** As I was looking through the Darwin AI website and some of your work - I'll link to your website in our show notes - I was looking specifically through the information about the platform, but also this page you have about research, and it seemed like there were a few themes popping out that were really focus areas, one of those being edge computing and running AI at the edge. I see things like Edge SegNet, which is a compact network for segmentation, Edge SpeechNet for speech recognition at the edge...

\[00:08:17.01\] I also saw a theme of generative machines and generating networks, in some way... And then of course, what we've talked about a little bit at the beginning, which was related to explainability. So I was wondering if you could give a little background on how those themes came up, maybe starting with the edge case.

**Sheldon Fernandez:** Yeah.

**Daniel Whitenack:** Why are people concerned about AI at the edge now? Why did that seem like a direction you wanted to put some focus into?

**Sheldon Fernandez:** Yeah, so let me bring this together and talk about how the core IP was formed, because it kind of informs those three areas, right?

**Daniel Whitenack:** Okay. Yeah, that'd be great.

**Sheldon Fernandez:** So our academics have been working with deep learning for about a decade. So well before it even entered the consciousness of the enterprise, our academics knew what this was, they were familiar with the machinery, and they were actually doing it for their own research. And they found it to be terribly difficult to develop deep learning neural networks. They said "Look, as academics this is difficult. We can only imagine how hard this is gonna be when non-academics encounter this."

**Daniel Whitenack:** And what that difficulty mostly related to computational infrastructure difficulty, or was it like the sort of complication around the tooling, or the theory behind what's best to do when, or what was the difficulty mainly focused around?

**Sheldon Fernandez:** So there were three difficulties. The first was they said you need an incredible level of skill to develop these things. The toolsets are immature, but the mathematical background you need is significant and a barrier. The second, as you say, is the computational overhead in running these networks. So our professor often jokes he originally did this work for some of his scholarship, and he didn't have the funding to pay for hundreds of thousands of dollars in Azure GCP, so he had to invent a technique to make it quicker.

And then the third was it was so painstaking to do this, because you had no understanding of how these networks came to these conclusions; it was like debugging a program without the source code. So those were the three problems they encountered. So they invested the scholarship initially for their own purposes, to address those problems.

**Daniel Whitenack:** To scratch their own itch, essentially.

**Sheldon Fernandez:** Exactly. So they termed it generative synthesis. The way it works is they use other machine learning techniques to probe and understand a neural net. They develop a very sophisticated mathematical understanding of the neural network, and then they use a generative approach to generate an entirely new family of neural nets that is a lot more compact than the original, as good as the original can be explained.

**Daniel Whitenack:** Yeah, so as you're kind of describing that, I'm starting to get vibes of some of the meta-learning, AutoML sort of things... And I know there's a lot of people interested in this. This seems like a unique flavor of it, I guess, at least... Do you see those as these generative techniques that you're talking about, and stuff that people might call AutoML, or meta-learning? Do you see those in the same family, or...?

**Sheldon Fernandez:** I'd say they're in the same family, they're analogous to what we do, but different. AutoML does a search across a vast search space, and gives you something that it thinks is appropriate.

**Daniel Whitenack:** Which in itself is computationally difficult.

**Sheldon Fernandez:** Exactly. So Google will give it to you for free, but you've gotta do it in GCP, and that's where they get you. It's not free. Whereas we will look at your data and then synthesize a new network from scratch. It's a lot more granular in terms of how we do it. But it is conceptually similar. So yeah, that's the process that these guys invented. And then of course, we asked the question, when we started the business, "Okay, what's the commercial potential? What do you do with this?" And one of the first ones - this addresses your first question - is the edge-based scenario. What do you do when you need to deploy deep learning to a GPU or CPU? You don't have 3 or 4 servers to run it. So that was the first place and crevice that we found when we started thinking about this tech.

**Daniel Whitenack:** \[00:12:26.10\] Yeah. And what have you seen now that you've kind of explored that space a bit? ...working with clients and people that are doing things at the edge, what do you see as the real-world driving factor of people wanting to deploy AI at the edge? Because from my perspective, I hear different things, I hear on the one side privacy is the main issue, which I could definitely see that, if data is not leaving the device...

**Sheldon Fernandez:** Yeah.

**Daniel Whitenack:** But then there's also your device, and maybe you're running at a farm, or maybe you're running at a factory where the connectivity is not that great, so it's a connectivity to the cloud thing... And then I hear like a third set of things, which is like latency. You've got your algorithm at the edge, and it's really fast, and you don't have to wait for things to come back from the cloud, or whatever... So from your perspective with clients, what are you seeing as the driving factor there?

**Sheldon Fernandez:** It depends on the vertical, is what I would say. When you're talking autonomous vehicles, or aerospace, or defense, they can't afford a trip to the round server, one because of latency reasons. If a car needs to make a decision or a drone needs to make a decision in milliseconds, you can't depend on that round trip, so they have to do things at the edge. So that's the predominant motivation that I see in those verticals.

In consumer electronics and health, privacy is probably the more predominant factor. If you have a watch, and that watch is using deep learning to do some kind of analysis on your heartbeat, or detect Covid, or whatever it is, you as a consumer don't want that data shared with some central location that is gonna aggregate and monetize that data. So in that situation, privacy is the motivating factor to do it entirely on the edge. So it does differ, depending on the vertical that you're dealing with.

**Daniel Whitenack:** Interesting. And just to get a sense - and this is maybe another point of confusion that I see a lot of times... When we're talking about AI at the edge, what is the edge - is the edge a mobile device, is it a Raspberry Pi with a camera in your house, is it a legit computer, but it's at the edge in a manufacturing place...? So what are you seeing trends that way? I know there's a lot of -- even NVIDIA came out with their new architecture. They have the edge-specific card that they're talking about...

**Sheldon Fernandez:** Yeah.

**Daniel Whitenack:** What do you see as the trend or the focus in the future? Or maybe it depends on the vertical again.

**Sheldon Fernandez:** Yeah, it's a great question. Now I think we use the edge colloquially, to describe a scenario where all the processing is done on-device, whatever that might mean, with no processing done in the cloud. And so that could be a super-powerful GPU in a car. One of the autonomous trucking companies I know - they have 8 GPUs in the truck. So is that edge? I mean, there's more compute power there than Deep Blue had in 1997.

**Daniel Whitenack:** Yeah. Or that I ever use for training. \[laughs\]

**Sheldon Fernandez:** Or that you ever use for whatever, right? So it is an evolving term. I do think we generally mean on some kind of device or something that is autonomous and self-contained, and is not being done on the server. A satellite, a drone, your hand... "Not a computer in the traditional sense" is the way we think of it.

**Daniel Whitenack:** Gotcha. And in these cases, what is the biggest concern or hurdle when you're getting to the edge? You talk about compact networks... Obviously, for a thing that is lower-power, if we're thinking about like a small computer, or a smart camera, or something like that - that's gonna be low-power; it's not gonna have that much power and storage space, and RAM, and all of that stuff. So the compactness - is it dual-purpose, both for getting it on the device AND the efficiency, or what's the blocker there?

**Sheldon Fernandez:** \[00:16:25.23\] Again, it depends on the vertical. In the case of, for example, defense, they have pretty powerful devices already that are outfitted on whatever it is that they're trying to do, so it's efficiency on those devices. "How many concurrent systems can I run with this hardware that I've already agreed is gonna be on the device?" In autonomous vehicles I need my perception network to recognize the scene in front of me in ten milliseconds, and I therefore need it to be really fast on this hardware.

With consumer electronics it's a bit different. Accuracy is important, but it's not as mission-critical as finding a child in a scene when a car is driving. When you're talking to Siri and it gets your last name wrong - okay, you just re-say it again. In that case its performance, accuracy on the device is usually the predominant factor. So again, it differs, depending on your use case.

**Daniel Whitenack:** Yeah.

**Break:** \[00:17:28.00\]

**Daniel Whitenack:** Okay, so I would love to maybe dive into this generative model technology a little bit more. You mentioned that there's this sort of -- I think what you're calling "inquisitor model" that studies something... I'm not sure if I'm clear exactly the process that that goes through... So I guess from a practical perspective, when we're talking about this, is this a case where I still am using the same types of models? ...like I have a convolutional net, or I have a recurrent neural network, or whatever it is, and I have another model that's performing this function? Or is everything happening together in the same sort of different model of some type?

**Sheldon Fernandez:** \[00:19:50.29\] Right, so it's happening underneath the hood, with this technology that uses this \[unintelligible 00:19:54.15\] you're giving it a neural network and you're getting a number of neural networks generated that are more compact, and work against your data with usually the same accuracy, and they're faster.

**Daniel Whitenack:** Gotcha.

**Sheldon Fernandez:** So the internals of how it works - it's interesting to academics, and we've issued papers on this without giving away the core IP... But really, you're giving me a neural network which is a graph, and you're getting a much more compact graph as an output...

**Daniel Whitenack:** Gotcha.

**Sheldon Fernandez:** And then our platform will provide the explainability, and so forth.

**Daniel Whitenack:** Gotcha. Let's say if I'm an AI practitioner and I'm using this type of technology, it may still be up to me to determine "Hey, here's a computer vision problem. I'm gonna train a convolutional neural network on this data, but then afterwards I'm going to provide it to this system and get a better architecture out." Is it kind of two-stage like that, or can you do everything in one shot?

**Sheldon Fernandez:** You can do it in one shot. You can choose a popular public reference model. We're adding this feature to the platform. You can say "Look, I have a computer vision problem. I don't know what the best thing is - is it Inception, is it ResNet?" and we will take a public model and produce a really optimized version for you against your data... Or if you're a more intermediate or advanced users, you might already have a network, you might have already trained it, done all of that pre-work, and you're just gonna give that to the platform and say "Give me the best version of this against my data." So it can work in either way, depending on where you are in the process.

**Daniel Whitenack:** Yeah. Personally, I kind of like this way of thinking about it, because oftentimes when I talk to people about AutoML, or meta-learning, or something like that, it seems like the end goal of where people wanna get is like "I just have data, and whatever sophisticated system I have figures out everything for me."

**Sheldon Fernandez:** Yeah.

**Daniel Whitenack:** Maybe a possibility in certain cases that have been very well-studied, but I also know just from my own experience that every use case I come up with is weird in some way that just doesn't match something.

**Sheldon Fernandez:** That's our big thing - we are proponents of human-machine collaboration. You need a human in the loop to couple the laborious intelligence of AI with your own intuition as a human being... And that's not going away any time soon. I mean, how often -- I've been in the technology field for 25 years... So many times I've heard "You don't ever have to code again."

**Daniel Whitenack:** Yeah... Software engineers are gonna automate way software engineers.

**Sheldon Fernandez:** Right? And you heard that and you roll your eyes, because you've seen it so many times... You know, I'm a Microsoft guy, so I remember BizTalk. I don't know if you remember that product... It was supposed to do away with all coders. And then you encounter it, and one asymmetry in the data or one irregular use case blows the whole system up.

We have enough experience to know "Look, we're giving you a tool that takes away the arduous elements of deep learning, but you still apply your creativity and understanding that gets you there a lot faster." I think that's gonna be with us for some time.

**Daniel Whitenack:** I know one of the things - I forget where I saw this; I think maybe it was at a TensorFlow dev summit when they were talking about AutoML. One of the things that they saw as interesting in this process is not so much automating away everything, but just learning new architectures that they wouldn't have guessed prior. Is that something that you've found in doing this different -- it's a different approach, but you are still generating new graphs, like you say... In looking at those new graphs and those new architectures - have surprising things come out from that in terms of what's actually needed to solve certain problems, or...?

**Sheldon Fernandez:** \[00:23:42.22\] That's a great question, and one I would have to ask our deep researchers. Do they look at the new architecture, and does that give them an idea? The fact of the matter is very few people are designing networks from the ground up. The big five basically do it, because they've got the intellectual horsepower to do it. Now, where we do have insights thought - and maybe we'll get to this - is the explainability piece of why certain things are being made... That is intriguing, and that teaches you things that just never would have occurred to you before.

**Daniel Whitenack:** Yeah, I totally agree with you. When I teach classes, I say most of AI in practice is not drawing networks on the chalkboard, and starting with a blank chalkboard and then going. It's more like cooking, in the sense that you get a recipe, and then you have to bring your ingredients to it, your data to it... And you might have to change the recipe a bit, because you don't have these ingredients or those...

**Sheldon Fernandez:** That's a great analogy, I'm gonna steal that.

**Daniel Whitenack:** Okay, please do.

**Sheldon Fernandez:** I like that a lot. But I will give you credit when I use it.

**Daniel Whitenack:** It sounds good. At least I can contribute something to the AI community that way.

**Sheldon Fernandez:** Exactly.

**Daniel Whitenack:** Since we kind of got there naturally, let's talk a bit more about the explainability piece... And maybe we can actually start at a higher level there as well, and talk about -- let's say in the absence of the things that you're doing and your team is doing, and actually many other teams are exploring explainability things... For those that are maybe newer to AI, or are in a company and exploring AI and are concerned about it, what are the main reasons why we need explainability, and then at what level do we need explainability? Because for example with GDPR, when people give an explanation for how you process people's data - well, I don't always know why my network did something, and I think it would be infinitely hard to describe everything... So what are the main challenges and what expectations can we have for explaining it?

**Sheldon Fernandez:** Great question. First of all, the fundamental problem with machine learning and deep learning is you're essentially saying to these systems "Here's a bunch of data. You infer your own rules as to how you're gonna make a decision against this data, and all I care about is the result." And the reason machine learning (and you know this) is so powerful is it is great at characterizing situations where the rules cannot be codified in human terms. And that's why it's great.

An example I often give is, you know, giving a neural network a picture of something - of a lion or of a tiger - and saying "Hey, classify this." This was a profoundly difficult problem in computer graphics before neural networks. Something my son can do now at 18 months was impossible. So it's wonderful that we can do that, but the explainability problem exists because we don't know how the neural network is orienting itself internally with its weights and so forth to reach that conclusion.

**Daniel Whitenack:** Yeah.

**Sheldon Fernandez:** So the problem with explainability is if you don't understand how a decision is being made, you don't understand where it will fail. And if you don't understand where it will fail, there are all these edge cases that are lurking in the network with potentially catastrophic consequences.

A very practical example I can give you - in the early days of Darwin we worked with an autonomous vehicle company - and I've used this example in my writing a little bit... Where the perception network in their car or the AI in their car would turn left with increasing statistical frequency when the color of the sky was a certain shade of purple. So just pause on that. You and I know that the color of the sky never influences the way \[unintelligible 00:27:30.20\] But that was mystifying to them. So without explainability they couldn't understand what are the drivers here. It's what we call a nonsensical correlation.

So we were able to help them debug that they had done the training for the turning scenario in the Nevada desert when the color of the sky was this shade of purpose, and that was the correlation the car had made. But in order to understand those nonsensical correlations, in order to identify the edge cases, you need to have some insight into why the neural network is doing what it's doing. So that is why explainability is so important - it's to make more robust networks and give the data scientist and the deep learning developer tools to make those more robust networks.

**Daniel Whitenack:** \[00:28:17.09\] Yeah, I think you really summarized that well... And I think some of this is beginning to be on my mind so much more as I develop. Just last week - just to shout-out one of my favorite podcasts, which is the NLP Highlights Podcast from the Allen Institute of AI... His name is Marco Ribeiro on there; he's from Microsoft, and he was talking about behavioral testing of NLP models. He basically used a bunch of commercially-available systems in his paper, like from Microsoft, and Google, and Amazon... That they sell for example for like sentiment analysis. And he did some very -- what he called minimum functionality tests, that were not based on a training set that they used to train the model, but just for the minimum functionality you'd expect from a sentiment analysis... Like can it get "I don't like food", the sentiment of that.

But then what he did is he made perturbations on that, like changing "I don't like burritos" to "I don't like oranges." Simple perturbations that should not change the sentiment from negative to positive, or changing "I like the U.S." to "I like Turkey", and then seeing if the change in -- he actually found these huge percentage of failures in these commercially-available systems for these minimum functionality tests.

**Sheldon Fernandez:** Right.

**Daniel Whitenack:** Some of those things were tied to the way things are represented in the data. Turkey was represented in a very negative light in a lot of the data that was trained in his model... So I totally agree with you - in that case, this thing's already deployed, and you have this exsting problem in the system, and you don't know it until you hit it... Whereas you're saying if you're developing, you should ideally know where you're gonna maybe hit some of those pitfalls, or at least understand why you hit those, so you can make the system better...

**Sheldon Fernandez:** Yeah. Sometimes the system will get it right, but for the wrong reasons. A very popular example I've heard is there is a neural network that was trained to detect/recognize horses... And it performed admirably well. But what they didn't realize was apparently - this was news to me - many professional pictures of horses are copyrighted. So it was actually looking at the copyright symbol at the bottom of the picture, and that was a tell to it.

**Daniel Whitenack:** Right.

**Sheldon Fernandez:** So what you do then is you say "Oh, okay. Let's remove the copyright from the picture and let it organically or naturally look at the features of a horse to detect things. So that is what you're trying to do - align how it's triggering on data for decision-making with your own intuition that "Yes, this makes sense."

Now, sometimes you will actually learn from explainability. The neural network will teach you something about explainability. So our professor does a lot of work with neural network and detection of disease. Actually, we've been in the news because when Corona became a serious thing here in Canada we released an open source network called CovidNet, that detects Corona using chest X-rays. But his previous work was detecting lung cancer with CT scans. And we show this example where the neural network was looking at the walls of the lung, which had never occurred to radiologists, apparently. I'm probably oversimplifying a little, but they actually started looking at them thinking "Huh... What maybe here can ew learn from what the neural network is looking at?"

**Daniel Whitenack:** That's really interesting.

**Sheldon Fernandez:** So there's a second benefit, in that sometimes - not often, but occasionally - it will actually teach the subject matter expert about a new way of thinking about the domain.

**Break:** \[00:32:05.23\]

**Daniel Whitenack:** So as we're thinking about this explainability piece, I'm kind of curious -- we've motivated why explainability, and some of the pitfalls that people can fall into, and also this sort of dual benefit of also learning in some cases from explainability... But I'm curious, from a practical perspective, as I'm using this system and I'm learning about my network, what is the range of thing that I can learn, since there could be so many different types of features that could be contributing to something?

So when I'm using this system, what sort of feedback am I getting? Is it these portions of the network, or doing something weird or interesting, or is it more having to do with the data? ...like you say, the segment of the data is important for this prediction... Or what's the sort of range of things?

**Sheldon Fernandez:** Yeah, it's a great question. So we really ask the question "How do we surface explainable insights that are most useful to developers?" and what we saw was very few of them really go down to the architectural level and tweak individual weights, and so forth. It happens, but in a very small minority of cases. Most of them want explainability against data - "Why is the network doing what it's doing against this dataset or this family of data?" So that's what we surface on the platform. When we detected a lion being a lion, what were we looking at predominantly? When the network got it wrong and different from the human labeler, what did it get wrong?

When you remove the predominant inputs that our explainability algorithm detects are important - when you remove those, how does the prediction change? So that's the data that we surface, that we find really accelerates the deep learning development process.

**Daniel Whitenack:** Gotcha. How do you balance the range of data that people are dealing with? Is it a matter of starting to specialize in a few different types of data, like text and images, and then moving on past that? Just in terms of product development, it's gotta be a burden to thing about all of these weird scenarios...

**Sheldon Fernandez:** Yeah, it's a great question. Right now our explainability focus is on things you can represent visually - object detection, object classification... Your question is a good one, "How do you surface explainability for natural language translation, or something that's inherently non-visual?" So we're doing the visual stuff first, because it's easier to surface, and then eventually we'll get to some of the other stuff.

**Daniel Whitenack:** Yeah, I know that there's some interesting attempts out there... Actually, we had a guy on the podcast who was talking about recurrent units in a neural network, and how those behave in terms of the memory, or what they pay attention to previously or forward in a text sequence... And visualizing that sort of thing. That was really interesting, I'll link that one in the show notes. Maybe there's some things that are possible there. I could definitely see that in itself is a research topic almost...

**Sheldon Fernandez:** \[00:35:56.06\] Onto itself, yeah.

**Daniel Whitenack:** Yeah, yeah. That's interesting. So in terms of the system, how do you make decisions about... Like, do you provide -- and I'm kind of curious about this, just from an AI startup perspective... Because there's a lot of people out there trying to do different things, and some are like "Well, our system bolts onto TensorFlow, or has a TensorFlow backend, or PyTorch etc." Are you kind of providing a self-service for people to do things, where the frameworks and that sort of thing are transparent, and they're really just kind of importing models, and that sort of thing? Or is it an augmentation to their existing workflow?

**Sheldon Fernandez:** Yeah, it's the latter. We build on top of TensorFlow right now. You give us a TensorFlow model and the data, we do what we do, and then you get a TensorFlow output. It's not SaaS. That was a big learning for us when we started Darwin. We wanted it to be SaaS, because then we wouldn't have to expose anything... But the enterprise was quickly saying "We're not sharing our models, number one, and we're not sharing our data. So disabuse yourself of that fantasy right now." Yeah, so we provide a enterprise platform that sits on top of TensorFlow; we're having support for PyTorch later this year. That way, your workflow doesn't have to change considerably, you just use the parts of the tool that you find are useful.

**Daniel Whitenack:** Awesome. And how big is the team now? Is it quickly growing, or...?

**Sheldon Fernandez:** It's about 25, so we're a smaller team in Waterloo. I live in Toronto, and was commuting before Covid... But as the commercial traction increases and people start doing it, I imagine we'll be growing in the months ahead.

**Daniel Whitenack:** Yeah. I'm always curious for organizations like yours... You know, if I go to your research page and look at all the great things that you've submitted, or if you look at a company like Hugging Face or others, where it's still a relatively small team, but it's like there's a product, and there's also this great research coming out... I don't know you do it all. Is that like strategic partnership with the university as well, or...?

**Sheldon Fernandez:** Yeah, great question. Two of our co-founders are professors are Waterloo. We're in the unique position of having an organic academic connection with the university, and part of their university responsibility is to publish scholarship, and to publish academic papers, and so forth. It's a natural part of our identity. It requires discipline to get the balance right... Because research is good, and academics love to research things... But if you're a startup, you also need to channel that research into your product, while at the same time giving your academics the latitude to explore things for the next-gen stuff. So it requires discipline, we're hopefully getting it right, but it's something you're constantly thinking about.

**Daniel Whitenack:** Yeah, for sure. You're doing great work. I'm really happy to see a lot of it. From your perspective maybe -- whether that's with edge computing, AI at the edge, or maybe it's with explainability, what are you excited about for the future, in terms of things coming down the road, or things that you want to explore that seem really interesting areas? What are some of those things that excite you personally?

**Sheldon Fernandez:** I think one of the big things is really seeing significant deep learning use cases realized in the next couple years. There's this concept of the adjacent possible that you may have heard about, which is "What can you do with your technology, given where the world is at? And sometimes at Darwin -- you know, we were maybe a year or two early when we started... So the industry is now catching up and grappling with the problems that our academics knew they would have ten years ago. So what excites me is now that they're actually doing it, now that Lockheed is trying to do AI and implement robust AI at the edge, the problems we foresaw are ones our toolset helps with.

\[00:39:57.00\] So it's seeing how those use cases play out, and just knowing what deep learning can do, and the number of different areas where it can be used. Healthcare, to cite an obvious example - the amount of interest we've gotten because that vertical is really looking seriously at experimental technologies to create a vaccine is incredible. Digital learning, and so many things. I think just the general applicability of it is what fascinates me.

I say sometimes, it sort of reminds me of the internet in the early '90s. I don't know if you remember that, but I was a teenager in high school... And we didn't think in 1992 or 1993 that these little signals going over telephone wires with modems would reimagine the world and reimagine industries. To me, it's the same thing with artificial intelligence, only greater. The potential there is incredible for me.

**Daniel Whitenack:** Yeah, that's really good to hear, and I could definitely see what you're saying, even looking at conferences that I attended 3-4 years ago, and leading up until now... It seemed like -- of course there was a lot of focus on "We did this cool thing with the model, we processed this much data with our big data platform", and now I see two huge things almost in some cases dominating discussion at conferences now, which is the explainability and fairness and bias piece... And then there's the "How am I gonna manage this now?" It's a legit piece of our software stack, and we've decided to buy in... So how do we actually integrate AI?" You see a bunch of platforms and tools and deployment systems and all of those things out there... Yeah, I think that's really exciting, for sure, from my perspective... Because, of course, this is Practical AI, so you know...

**Sheldon Fernandez:** Think about the first days, when the very first developers wrote in Notepad, or the text editor, and they just wrote program code, and compiled, and that was it... And then, as it got more sophisticated, we had IDEs, and source control, and QA... We're speaking at MLOps dev ops virtual event later, and yeah, the enterprise is now like "Oh, how do we manage this? How do you version models? How do you version data?" So it shows you the seriousness with which organizations are taking this, and the tooling needs to be there for it.

**Daniel Whitenack:** Yeah, and that it's not going anywhere, for sure.

**Sheldon Fernandez:** Yeah.

**Daniel Whitenack:** I feel like -- and I've heard people refer to this, that there's kind of going to be this AI layer in the software stack now... And just like if you're a software engineer and you don't know anything at all about CI/CD, probably you need to learn a little bit about it; at least to where you can interact with that system. Not that you have to spin up your own or whatever, but you're gonna be interacting with this.

**Sheldon Fernandez:** Yeah.

**Daniel Whitenack:** Maybe you don't need to be an AI expert, but you're gonna need to interact with these systems, and they're gonna be a part of our lives, so...

**Sheldon Fernandez:** Exactly, yeah.

**Daniel Whitenack:** For sure. Well, it's been really good to chat with you... Where can people find out more about DarwinAI, and what sort of tips would you give people if -- maybe they're convinced now that the explainability is important... What kind of tips would you give them for maybe either getting started with your system, or maybe just learning about explainability in general, and the topic out there? Any suggestions?

**Sheldon Fernandez:** Yeah, so we actually wrote a pretty lengthy explainability primer on Medium, which goes over the problem...

**Daniel Whitenack:** Oh, great.

**Sheldon Fernandez:** \[00:43:45.10\] ...which goes over traditional techniques... So if you follow us on our Twitter, @DarwinAI, or our LinkedIn page, we post this all. So that's a really good place to start, because we go over why the problem exists, what the common techniques are, what our technique is, our scholarship around this... So I think that's a really good starting point for people that are grappling with this and thinking about addressing the problem.

**Daniel Whitenack:** Yeah, great. And in light of a lot of the things going on in our nation and otherwise too, I'd definitely recommend one thing that I've found really useful out there in terms of exposing maybe on the data side the biases and the fairness in your data - there's a great toolkit from IBM, IBM Fairness 360. Even if you don't use their toolkit, you can learn a lot about the various ways people are looking at bias and data and other things like that... So just for our listeners who might be interested on that topic.

I really appreciate you joining us today, Shelodon. It's been a really great and timely conversation, and I'm really excited to see what comes out of DarwinAI and how the platform progresses. I hope we can meet and chat at either a virtual or real conference sometime soon.

**Sheldon Fernandez:** Yeah, thank you for having me. As you alluded to at the beginning of the program, we're in a period of real challenge as a species... So Godspeed to everybody who's listening. There's a phrase I told my team this morning that I'm fond of, in Martin Luther King - "The arc of the moral universe is long, but it bends towards justice." I believe that, and it's sometimes hard to see, and we regress a little bit, but I do believe that's true... So let's just all stay strong and united.

**Daniel Whitenack:** Yeah, thank you for that, and thank you for joining.

**Sheldon Fernandez:** Thank you so much.
