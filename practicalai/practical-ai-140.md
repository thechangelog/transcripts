**Daniel Whitenack:** Welcome to another Fully Connected episode of Practical AI, where Chris and I keep you fully connected with everything that's happening in the AI community. We'll take some time to discuss the latest AI news and we'll dig a little bit into learning resources to help you level up your machine learning game.

I'm Daniel Whitenack, I'm a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing good today. It's good to be recording, and I think we have something pretty interesting to dive into today with everyone.

**Daniel Whitenack:** Yeah, for sure. Well, in these episodes where it's just you and I, we kind of get the privilege to just talk about whatever seemed interesting to us, and there's been a lot... I know I've had a little bit of vacation, and we've been in and out, so we've had some time to sort of scroll through Twitter and the blog post world and all sorts of things to find a few things.

The first thing that I wanted to talk about and mention was GitHub Copilot, which was trained by OpenAI. It was a collaboration between OpenAI and GitHub. Essentially, the idea with GitHub Copilot as I understand it - I haven't used it yet and I'm not on the team, but the idea being that it's sort of like an AI pair-programmer, where while you're writing code, you can sort of have the AI pair-programmer step in and complete things for you, or help structure your code, put in some things that it's expecting that you're gonna need, and that sort of thing.

**Chris Benson:** \[00:04:20.02\] Thank goodness... My God, I've needed that for 30 years, man.

**Daniel Whitenack:** \[laughs\] Yeah, it's pretty clutch when you get that tab complete, but this is a whole other level. Like I say, I unfortunately haven't tried it yet. I'm on the waitlist. If you go to copilot.github.com, you can sign up to be on the waitlist for it. It's not everybody yet. And at least in my understanding, it plugs into VS Code, which I also don't use.

**Chris Benson:** I do. This is perfect. I'm signing up right now.

**Daniel Whitenack:** Maybe you could pass the waitlist, Chris, because one of the questions in the waitlist thing was "How often do you use VS Code?" and I chose the option that was like "Hardly ever", or "Rarely" I think it was. So if there's any GitHub Copilot people out there, I would like to try it out. We'd also like to have you on the podcast, but I would love to try out the system... But yeah, what are your general thoughts about this sort of thing in terms of how it's different from other developers tools in the past and what it means for us?

**Chris Benson:** I will say, both of us have been programming for many years, and the thing about it is I will dip in and out of programming depending on what I'm doing, and what projects I have going, and as I'm ramping back in at a given moment, I'm always trying to go "I know what I'm trying to do, but I can't remember the specific", and that kind of thing. That's where -- we both like Go, for instance. I know we met in the Go community...

**Daniel Whitenack:** Yeah.

**Chris Benson:** ...and I'll stop doing Go for a few months, and then I'll wanna do something and I'll swing back in and write some, and then I'd be like "Oh, crap. I can't remember how to do this one thing."

**Daniel Whitenack:** Yeah, it's like, you're in the Python world and then you wanna put that colon after your \[unintelligible 00:06:07.23\]

**Chris Benson:** Yeah, totally.

**Daniel Whitenack:** ...and then you forget you're in Go, without the braces...

**Chris Benson:** Totally. This is going to help me ramp back in, and I'm sure it'll help me after that as well... But I've been waiting on this for my entire career, man.

**Daniel Whitenack:** \[laughs\] On the website they talk about it... So it's powered by what they're calling \[unintelligible 00:06:28.00\] which is a new -- they say AI system; I don't know if it's one or more models... But it seems to be consistent, and to be honest, this is all things I don't know, because I'm not part of the team. I haven't interviewed any of them yet. Hopefully, we will be soon.

**Chris Benson:** Exactly.

**Daniel Whitenack:** I'm assuming it's similar to these sort of large-scale language models of recent times, that can take in a lot of context and generate good language out of it... Although they say it's more than autocomplete in the sense that it's understanding both -- you know, it's not just looking for an autocomplete for like the method on your object, or something like that... It's actually looking at both your comments, and your actual code structure, the function names, all of those sorts of things. It understands more of that structure within your code, more of the syntax, and so it can actually help you and actually create some really interesting things.

All I've seen is other people using it, and screencasts of people using it, and it seems like it does generate some really interesting stuff and some helpful things... So I hope I get past the waitlist.

**Chris Benson:** Me too.

**Daniel Whitenack:** But I know there were some people that were saying some things about "Oh, does this sort of signal the end? Now our AI is creating code, which could create AI, which could create code..." So that's one scenario.

The other thing is "Does this spell the end of software engineering as we know it?" I have my own thoughts on those two things, which you might guess from knowing me for a while, but...

**Chris Benson:** \[00:08:17.20\] Well, my thoughts -- and this has changed over time. My thoughts have evolved, even over the last few years, as we've been doing this show. My thoughts are I am totally, totally looking forward to taking advantage of this. I'm not terribly worried about whether or not a significant portion of code starts coming from AI sources in the years ahead, because if there's one thing I have figured out is that things are constantly evolving, and we should stop trying to keep things exactly as they are today, our comfort level right now. So whatever the future is, I'm gonna dive into it, I'm going to enjoy it, I'm going to take advantage of that... There's the paradigm -- I've recently learned not everyone's aware of this, but there's kind of the idea, the meme of the lazy programmer, and that is you create great tools in theory because you're a lazy programmer and you don't wanna keep doing the same stuff over and over again. So in the meme of the lazy programmer, I want this AI to help me, so that I can get through my task and go relax and spend time with my family and chill, and produce amazing code along the way. I'm all for it.

**Daniel Whitenack:** Yeah, what do you think are the dangers of something like this? They obviously released it in this sort of waitlist type thing... Probably similar to -- you remember when GPT-3 was released; for those that don't know, that's a very large language model, it's very good at generating very realistic-looking language... And there was a lot of talk about dangers around that, and they released it in a restrictive way... What are your thoughts there?

**Chris Benson:** I think that a tool like this is not a strategic threat to us. I think that this is a tactical goodie that we get to use to make our lives better. I'm going to worry a whole lot more when someday in the future we're getting to AI capabilities that are able to think divergently of all the different things and figure out which one makes sense, and what the long-term strategies are for those things... Because that's what humans brains are still really quite good at, and we don't have any AI that's remotely approaching that anywhere.

**Daniel Whitenack:** Yeah.

**Chris Benson:** It's very \[unintelligible 00:10:30.16\] in its capability right now, so I'm not worried at all about this. Someday I may worry about a future thing, but not this.

**Daniel Whitenack:** I think the danger, if there is one, probably is in the expectations of this. If you expect too much of this, you could just start having this fill in a bunch of things... Of course, we know that the model is not gonna perform a hundred percent.

**Chris Benson:** Sure.

**Daniel Whitenack:** So that could introduce very bad breaking changes into your codebase, which are also very difficult to debug, because you didn't actually write every single line of code...

**Chris Benson:** Fair enough.

**Daniel Whitenack:** So I think that it's not so much a danger of job security or something like that, or sentience, or singularity.

**Chris Benson:** That's right.

**Daniel Whitenack:** It's more in the human-computer interaction that happens when you introduce something like this into your development cycle.

**Chris Benson:** So GitHub folks, get it right. Please. Get it right. Make this thing work.

**Daniel Whitenack:** Yeah, definitely. The other thing cool that I saw is it actually does -- so it lets you write out comments, and then it will sort of convert those comments into code. So you can sort of write comments, like "I'm gonna do this, and then I'm gonna do this, and then I'm gonna do that", and then it sort of generates the code for that... Which is very different from autocomplete. It's more of like a -- what's the right way to put it...? It's more of like a machine translation type problem.

**Chris Benson:** I love the idea. I'm gonna create a development branch to go try an idea, and we can try that out, and if it turns out to not work, then I'll trash the branch and move back, and try again, or something... But I'm all about using it. I want them to take the pain of debugging away from me. I want them to fix that. That would be good.

**Daniel Whitenack:** \[00:12:13.03\] Yeah. The other interesting thing... I forget when -- I listened to a talk once and I really wish I could remember who gave the talk. If some of our audience remembers and they want to let me know where this talk happened in our Slack channel, or our LinkedIn, or Twitter, or somewhere... But there was a talk about GitHub open source, and where code lives, and basically the thought with that was people underestimate how much code is living in private repositories that people don't have access to do these sorts of projects. I'm assuming that GitHub -- maybe this can be answered somewhere on the internet, but I'm assuming that GitHub didn't give OpenAI all private repositories on GitHub to train their model. It seems like that would be a sort of breach of some type of agreement. So this was probably built on top of open source repositories, I'm assuming, of code...

**Chris Benson:** I'm pretty sure that they would \[unintelligible 00:13:19.15\] If nothing else, their attorneys would be telling them "Don't go down that other path."

**Daniel Whitenack:** Yeah, yeah. I'm sure there was a lawyer involved somewhere.

**Chris Benson:** There must have been a lawyer somewhere.

**Daniel Whitenack:** But the result of that is basically that if you're building some type of expansive system like this on top of "all code", which is really not all code; it's the code you get access to, which is public code... It actually has a severe bias, because there's so much code living in private repositories, because companies still primarily use private repositories, that actually you're sort of missing a bit of the goodness of code that is actually robust and supported, and you're biased a little bit towards people's side projects that they post on GitHub, and maybe don't actually work that well.

They talked a little bit about bias, and the coverage of languages, like "Does this work for Python and Go and JavaScript?" etc. So I totally get that. But I think also there's another relevant side of the bias here, which is what code is driving these suggestions. In my experience, I would love to have those suggestions and that generated stuff be driven by good quality code, and bias towards that, rather than the bulk of code that's out there, that's maybe not as good of quality... So I'm wondering if there is some type of filtering that went on to figure out "Hey, what is the quality code to train this model on?"

**Chris Benson:** There are a lot of static tools for code quality. I'm hoping maybe they biased it by only selecting those that did very well in static code analysis, and then use those as source.

**Daniel Whitenack:** Yeah. I don't know. I hope that we can get someone from there on the show, and probably some of these questions are answered in their Frequently Answered Questions on their website, the Copilot website, which we'll point you to in our show notes.

**Chris Benson:** There you go.

**Daniel Whitenack:** So go ahead and check that out and let us know what you think.

**Break**: \[00:15:20.10\]

**Daniel Whitenack:** Okay, Chris, you pointed me to an article... This must have been one of the ones that you saw in the past couple of weeks. I think it's a very recent article that you wanted to talk through...

**Chris Benson:** It is.

**Daniel Whitenack:** I thought it had an interesting concept in that it talks through a lot of the -- you know, looking back on the progression of AI systems and how those have changed over time leading up to deep learning, and maybe what's beyond... And that's from Yann LeCun, Geoffrey Hinton and Yoshua Bengio, in a recent ACM article, in the communications of the ACM from July, from this month of 2021...

**Chris Benson:** Yeah.

**Daniel Whitenack:** We'll link that in the show notes for people to find it. But what struck you about this article that stood out to you?

**Chris Benson:** Well, before we even dive into the article itself, it's notable that those three pioneers - they're often referred to as the godfathers of deep learning or the godfathers of AI... And the three of them together received the Turing Award in 2018, and these days Bengio is at the Montreal Institute for Learning Algorithms, Geoffrey Hinton is at the University of Toronto as \[unintelligible 00:17:48.12\] and Yann LeCun is the chief AI scientist at Facebook. You can't become a bigger luminary than these three in the AI world.

**Daniel Whitenack:** Yeah. And for those that don't know, the Turing Award is sort of like a Nobel prize type award, but in the computing world.

**Chris Benson:** Yes. It is huge. And it is given out to these three. This is being done by the Association for Computing Machinery, ACM. If you're not familiar with that, it is one of the big, giant, original computing associations. Certainly amongst the most prestigious in the world, if not the most prestigious.

**Daniel Whitenack:** Yeah, you'll see a lot of papers published in journals, and events, and other things.

**Chris Benson:** And the title is just Deep Learning for AI. It's a very generic title.

**Daniel Whitenack:** Yeah, when you sent it to me I'm like "I don't know if this seems interesting from the title..." But then I saw the authors. So you've gotta read it.

**Chris Benson:** It was interesting because of where they're going. So they're essentially -- there's a lot of conversation as we record this... First of all, this is a very new article. This is from this month; we are in early July 2021 as we record this today, and this is a July 2021 article, by these three luminaries all together, for the communication in one of the biggest, most important computing associations in the world. So the fact that they chose to publish together means they're trying to make a point, and they're standing together to do that.

If we wanna foreshadow a little bit of where we're going on this, but maybe not go into the detail yet, they're talking about the future of deep learning, and it finishes that way. And they're talking about why they're still very bullish about - this is where the title comes in - about deep learning as AI, or in the case of the title, deep learning for AI... Because there's a lot of conversation going on right now in this industry about whether deep learning is the right paradigm for the future of AI, or should there be other approaches that do not follow within the realm of deep learning to carry us forward that might be more closely associated with how a human brain operates... Because there are very substantial differences in most deep learning models and how a human brain is believed to operate... And that research in neuroscience has been developing. It's something that I'm very interested in and I've been following...

\[00:20:22.00\] So I wanna read this partly because, I will admit from the very beginning, I'm a huge skeptic. I'm a giant skeptic, and I certainly do not have the qualifications that these three gentlemen have. I am just your typical AI career professional out there, and we do this podcast, but I'm struggling a little bit with that, and that's one of the reasons I wanted to bring it up.

They start the article kind of doing a little bit of history of... And we don't wanna take everyone deeply, but they kind of hit the high points about why they're so bullish on deep learning for the future of AI. They start off going all the way back to a section from handcoded symbolic expressions to learn distributed representations... Daniel, do you wanna take a stab at -- most people probably in this industry don't really know what symbolic expressions even are.

**Daniel Whitenack:** Yeah. I mean, to be honest, it's not really an area that I even have a lot of experience with. I first started hearing those words when I was using the -- some people recognize a computer program called Mathematica, which is like a... I think at some point they were talking about symbolic computations, and that sort of thing, that are done on symbolic equations.

**Chris Benson:** I don't think we should actually spend much time on it, because it's mostly thought by most people - there are exceptions - as something from the past, that we should not return to. And there are gonna be people that are gonna be just screaming at me right now that I've just said that out loud, but I'm talking about if you survey 100 people in the room, there might be two or three that still believe in that, but the majority of them \[unintelligible 00:22:05.11\]. And to give you a sense of this, since I'm very open about my age - I'm 50, and my mother and father, when I was a little kid, they were engaged in symbolic AI back in the 1980's at the Georgia Institute of Technology (Georgia Tech). And that is a pathway that has largely fallen to the wayside.

So they kind of talk about going through that, they talk about some of the benefits of symbolic approach in the article... They also talk about why it moved on to deep learning. And it's important to notice - you know, people associate neural networks with deep learning, but neural networks predate the concept of deep learning by decades. They are older than I am even... So there was already some advancement, in a limited capacity, in neural networks in the 1980's and 1990's. Then we had yet another nuclear winter, and finally came about with the rise of deep learning.

**Daniel Whitenack:** Or AI winter. Well, maybe nuclear winter, too... \[laughs\]

**Chris Benson:** Exactly. For AI it was a bit of that for a while. That's really where the term came from.

**Daniel Whitenack:** Yeah.

**Chris Benson:** Then the rise of deep learning came about.

**Daniel Whitenack:** Yeah, I think I've talked about this on the show before, but in my Ph.D, part of my original work was in what's called ab initio modeling in physics; that means you're just using the expressions and symbols to model a physical system. Even if you're doing computational integration or something like that, numerical integration, you still don't have fitted parameters.

\[00:23:47.11\] It was probably around the same time people started doing this very expansive fitting of parameters in our space for doing modeling of atoms and molecules... And I sort of view it as a similar process to that, where part of the reason why that became useful is also because of the emergence of certain computing. And they do talk in the article about the emergence of GPUs... Whereas in the past you could have a very shallow neural network, meaning that -- for those that are maybe newer into this, when we're talking about shallow neural network, we mean that the neural network is composed of nodes, each of those nodes takes in a series of inputs, they're added together with coefficients called weights, and maybe another parameter called a bias... Those are added together, and maybe another function is applied, called an activation function. That itself -- it's kind of just like input/output. It's like a function. But then you can start layering these functions together and have sub-functions of functions. So shallow networks don't have that many of these layers, so when they're talking about --

**Chris Benson:** They usually have one hidden layer in them.

**Daniel Whitenack:** Yeah, exactly. So maybe an input, and then a hidden layer of these subfunctions, and then the output.

**Chris Benson:** Yeah. An internal layer. A hidden layer is not the input layer and not the output layer. It would be any other layer. And there used to be only one, really because it was limited by computation.

**Daniel Whitenack:** You can already imagine, even if I have ten of those functions and there's 3-4 parameters each in a very small type of scenario, that starts actually to become a reasonable number of parameters... Especially if I have to fit those, so I'm doing some model fitting and I fit those on data, depending on what computers you had available, that could take a while. But then with the emergence of GPUs, now people were saying "Well, we're not limited by that compute anymore. Let's start making it deeper, so adding more and more layers."

One of the things that I thought was interesting was that they talk about "Hey, it's party that deep learning had success because it was deep, there was the depth of these layers..." It's really more than that. Let's see if I can find it here... The way they phrase it is that they exploit a particular form of composability in which features in one layer combine in many different ways to create more abstract features in a next layer. So you get more benefit than just piling things together. You actually get a lot of layered complexity that can be modeled.

**Chris Benson:** It creates more capability for abstraction. So you get abstractions, built on abstractions, built on abstractions, so really the deeper it goes, the more capable the network is, the more accurate it becomes... And they talk about that all the way to the end of the article. They talk about the fact that you can literally scale it in terms of depth and width, and get more and more improvement in what you're trying to get... And that's what we've been doing for years. With GPUs really advancing a lot in recent years, we have seen the fact that we have gotten these giant performance increases, which has fueled this whole AI movement, the modern movement in the 2000's and beyond. So I think that's important.

The question is "Is that scalability alone?" And there's other aspects which we'll talk about in a second, but that scalability has driven the whole movement. Going back to my original point - that doesn't mean it's exactly like what a human brain looks like. It doesn't matter, I guess is what they would be suggesting.

**Daniel Whitenack:** Yeah, yeah. I don't know, the whole human brain thing I guess I don't think about too much. I think more about the practicalities of "Does this solve a task or a problem?" Maybe it's because I don't know that much about human brains myself, that I'm not really that concerned of how well this models a human brain. I'm more concerned with using my human brain to apply these tools to solve tasks. Yeah, I don't know if you have any thoughts in terms of is it even useful to wonder how closely these things model the human brain...

**Chris Benson:** \[00:28:07.15\] I think that's where we're going with the argument. I think that's the question; it's not how close it is, it's "Does that matter in the long run, as we explore this?" Because no one who's in this industry can deny the incredible utility of deep neural networks and all of these architectures, which we can talk about in a moment along the way... But it's still not the same thing, and we don't yet have human brain level capabilities, and most people would say we're not close to that yet. So the question is to get close to it, can we do it along this path, or do we need a completely separate path?

So as we look at the question going forward, let's take a brief moment and just talk about some of the high-levels of where things have gone. We've gotten different architectures that have been evolved out of the vanilla neural networks such as generative adversarial networks, and we have natural language processing that's using all sorts of deep learning capability, we have computer vision using convolutional neural networks, and capsule networks, and all of these other capabilities in the NLP side. We've had a whole bunch of episodes on transformers, which maybe... Could you take a moment -- I know you work with them a lot; kind of explain what transformers are, because they have a huge impact on where NLP has gone in recent years.

**Daniel Whitenack:** Yeah, I think maybe it's twofold... Part of the utility of these large transformer models is in the fact that they utilize this unsupervised pre-training technique, which they talk about in the article... And part of it is the actual architecture that's used. They also talk about convolutional architectures and where those are useful for other things... But the unsupervised pre-training bit - I think that idea goes beyond transformers, in that the great thing that was discovered was you could create these reusable almost modules or components, that took your input data and extracted out features that were relevant for particular kinds of problems.

Let's say that we're doing some type of image-based modeling, like object detection or image classification, or something like that... If you train one model with a whole bunch of layers, which are typically composed of convolutional layers and maybe a very small number of layers at the end that do the actual task-related thing, like the classification - then what you end up with is a network or a model where the bulk of that model, the work of that model is taking the input data and creating this set of features, or extracting this set of features from the input data. It's only that last little bit that's used for the classification.

So what this ends up creating is if you chop off that last bit of the model, the part that does the task that you want in the case of image-based models - maybe that's classification, or recognition... In the case of text-based models, maybe that's sentiment analysis, or named entity recognition, or something... What you end up with is this pre-trained model that you can actually transfer to a whole variety of tasks... And I think that that's one of the big boosts in recent times, is someone like Google or a large player in the space will release this large pre-trained model that is generalizable to a wide variety of problems in a certain space. Maybe it's text problems, or maybe it's image-based problems, or maybe it's speech-based problems. This allows you to be much more efficient in terms of the actual usage of AI techniques, because you sort of stand on the shoulders of giants in that way. They do specifically call out this method of unsupervised pre-training as something that's driven a lot of success.

**Chris Benson:** \[00:32:05.27\] And we've seen more and more of that in recent years. When you and I started this podcast about three years ago, supervised training was still by far the dominant mechanism, and over this time period we have watched the steady progression into unsupervised training approaches, because a) it scales much better than supervised training does. If you have to have supervised training, meaning that your training data has labels associated with them about what is right and wrong, and as you train your network you are going off those labels, that means you're gonna label everything.

We used to have episodes on that early on, about the problems and the challenges and how do you do that... And the science of this has evolved over time to recognize the value of unsupervised. Plus, when you think about it, a lot of -- just to keep our eye on this kind of comparison with the human brain, we do a lot of unsupervised training of different types in our own brain, and often do it without many iterations as well. So as we are learning more about deep learning and applying these new techniques, we are to some degree taking -- even where they're not the same, we're taking inspiration from the human brain and recognizing that unsupervised training is where most of the future is gonna be.

**Daniel Whitenack:** Yeah. And coming back to the sort of transformer thing, which people might most commonly associate with NLP or language-based modeling, has actually turned out to be a very significant advance because it's applicable beyond that as well... Because in some ways it's like moving from a sequential or very strictly-connected type of network into something that's very dynamic... So how that happens is like this - in traditional ways of processing text, you see text as a sequence; so there's the first word, and the second word, and the third word, and the fourth word. So that's when people started thinking about recurrent layers, which process things in a sequence. Now, you could have bi-directional layers, so there's bi-directional LSTM layers, which are very popular. That looks at your sequence of inputs from left to right and right to left, and you can do really creative things in terms of how your model is actually processing the data that goes through it.

However, as your sequence longer and longer, and as your space of possible inputs, like your vocabulary gets larger and larger - which is what was happening with these larger and larger language models; we had tons of data they were training on, very large vocabularies, maybe they're looking at larger chunks of text to process... What they realized is this sort of sequential processing - I mean, one thing is it's just not that computationally favorable; if you start looking at all of the spaghetti of connections that happens as you add in bi-LSTM or recurrent layers, it gets very complicated...

So what happened was partly out of computational reasons, people started looking at these layers called attention, or self-attention, or soft attention layers, where actually you take your set of inputs and you shove them all at once into a layer, and let the model decide which ones of the inputs are important to pay attention to as it processes them through. You still have this sort of sequence of things and in some cases you wanna also put in something indicative of the sequence order, but in general, the model can decide on the fly which of the inputs are important to pay attention to... And if you start stacking these into what they call multi-headed attention, then you have a whole bunch of combinations of different inputs and secondary inputs that the model can decide to pay attention to, even if let's say it's paying attention to a word that happened much earlier in the sequence, but it knows that it's really important to process that with words that occurred much later in the sequence.

\[00:36:25.23\] So that sort of had a boom for NLP processing, both computationally and because it had this attention mechanism. But after that, this sort of attention mechanism and transformer architecture has been applied in a whole bunch of different places - with images, and with speech, and all sorts of things, because it applies this way of looking at inputs in a very dynamic way, which is actually significantly different from some of the layers that have been used for a long time, like convolutional and recurrent.

**Chris Benson:** Yeah. And by the way, that was a great explanation of transformers.

**Daniel Whitenack:** Well, it's not a full explanation, but there are really good explanations out there that I can put in the show notes... But I think that attention mechanism is really one of the key things, and they call out that attention mechanism in the article.

**Chris Benson:** They do. And they cover a few other things, some of the architectures, but with the time left -- you know, then they get into the future of deep learning, and kind of talk about where to go... And they start that conversation kind of going back to that scalability thing that we talked about at the beginning of this, and that was they specifically call out the language model GPT-3, which we have talked quite a bit about over time. It has 175 billion parameters, and they point out that that's still tiny compared to the synapses in a human brain... But that it generates notably better text than GPT-2, that only has 1.5 billion parameters. They also talk about some chat bots... But their point is that you're getting better performance simply by scaling up in these areas.

Then they go on to really talk about areas for improvement, and the three things that I'd like to throw out for us to talk about that they mention is they say supervised learning requires too much label data, and model 3 reinforcement learning requires too many trials... And that we - which I think is a really good point here - humans seem to be able to generalize well with far less experience, which we talked about a few minutes ago... You and I can decide to learn something new, depending on the complexity of the thing, and we might pick it up almost immediately, without having to go through thousands of iterations.

They also mention that current systems are not as robust to changes as humans are, because we humans adapt so quickly to changes with very few examples, which is more of the same...

**Daniel Whitenack:** Yeah, I think that that second one is definitely a big one in my mind, in terms of robustness...

**Chris Benson:** It is. Me too.

**Daniel Whitenack:** ...because that both helps protect yourself in terms of your model behaving well even with unexpected data, but it also helps in terms of you being able to utilize other people's models that might be adaptable with very few examples to new scenarios... And there's been a lot of work with this; I know we had an episode once where we talked through the OpenAI effort where they had the robot hand that was moving around the Rubik's Cube, and they sort of perturbed that system with a variety of things, like a stuffed giraffe, and they hit the hand, and other things...

**Chris Benson:** Yeah.

**Daniel Whitenack:** And that was in the context of reinforcement learning and also some sort of multi-modal inputs... And they had various ways where they specifically called out their efforts to improve the robustness of the system. And I think that that's one area that I probably -- I think about how well my models are doing on the test sets that I've organized, and I also try to look at "Hey, how is my model doing over time? Is it drifting in production?" Those are all good things to think about... But this idea of how to educate people on how to make their models more robust - maybe use adversarial examples and other things - that's one area that practitioners could in particular really grow in.

**Chris Benson:** \[00:40:23.11\] That's true. And by the way, the third item they talked about - even if we move on - is they have this idea of system 1 tasks versus system 2 tasks. Basically, kind of the simpler things that we're starting to do with deep learning are called system 1. Things like perception, and these kind of basic-level building blocks for putting together things... But there's the concept of system 2 tasks, which are more complex, and things that, in short, we might associate still with the human brain and less with deep learning. It's more aspirational on the deep learning side... And they acknowledge that we're in the infancy of all that. I just wanted to point out what the third one was... They kind of go into what needs to be improved, and the robustness is one of those areas that you just talked about, that they really address upfront... And they talk about kind of how to do that. Do you have any more comments based on that, or...?

**Daniel Whitenack:** I don't think so. I'm drawn back to the conversation we had with the developer of TextAttack, which was a package where he was trying to bring this idea of robustness in adversarial examples to text-based problems, where people don't really think about that as much. They might think about it more in robotics, and perception-type problems.

**Chris Benson:** Yeah. That was a good conversation.

**Daniel Whitenack:** It was a good conversation. We'll link it in the show notes. But my thought was like "How do I start integrating my thought process around robustness in adversarial examples into my own workflow?" I think that's what I'm trying to -- because often I'm just so focused on getting to the problem, reaching a certain level of performance... And yes, I do wanna go back and do updates to the model and see how it's performing, but it's not really like before I release the model I've always done a ton of work around robustness and probing the behavior of my model, doing a lot of minimum viability tests and perturbations to understand how it behaves... And maybe that's partly just the time that's allotted to me to solve a problem; that has to be balanced, I know, but...

**Chris Benson:** We're almost to the end of the article here... The next thing they have is one that I'm keenly interested in, and that is kind of alternative architectures. So you described what a basic neural network looks like, and how the neuron operates earlier in this conversation, and I think it's key to recognize that those hidden layers that you were discussing are kind of homogenous. They create these layers of abstraction by having many, many layers in there, thus the word deep. But they are homogenous in the way that they operate.

Then we have all these other architectures that have evolved out of that, where people have something in mind and they make a change to the architecture, or they may introduce the recurrent pathways... There's a whole bunch of different techniques that they have introduced, but it doesn't fundamentally change that kind of baseline architecture there. And one of the things in brain research these days is the idea of having groups of neurons that represent entities; so they're not homogenous. You have regions of neurons and synapses that -- they start as homogenous, they start as a blank slate, but as the brain develops, they take on certain roles and they represent entities, and the relationships between entities in those...

\[00:43:54.03\] And there's now a fair amount of work that's been done to connect artificial intelligence - and I'm almost separating those, meaning the neural network approaches - back to these other possible architectures. So there is a lot of discussion, and I'm quite fascinated with the way some of those are going. And without foreshadowing, we might have some guests on before long that will address some of those, because it may be a turn along the pathway. And I frankly think that that specific issue is one of the reasons that these three gentlemen wrote this article at this point in time... Because I really think that they are saying "No, this pathway that we're on is the right path, as opposed to making a turn or taking an alternate path along the way." What do you think about that? What do you think about this homogenous -- you know, generating these networks as we have been doing, out of this homogenous, hidden layer collection, versus considering other options for neurons being grouped together or represent entities in relationships?

**Daniel Whitenack:** I think it's consistent with other conversations we had. I remember a brief comment from William Falcon was the creator of PyTorch Lightning, on his episode with us he talked a little bit about how PyTorch Lightning is structured in such a way such that you can do research into these sort of composable pieces and modules... Yeah, I'm excited to see what happens there. I think there will be additionally really interesting advances in architectures that process data in interesting patterns or structures, like graph neural networks that actually operate natively on different structures of data, rather than let's say just matrices or tabular data. I think that's another interesting area in addition to this sort of groupings of neurons, and all of that. But yeah, I'm excited to see where things go. I definitely think that, for one, we have some exciting things to look forward to, and for two, GitHub Copilot isn't gonna write all our code, so we'll get to code some of it anyway... \[laughs\] So I'm excited about that.

I know in these episodes we normally like to share a learning resource... I wanna just share something real quick before we end. I noticed this new book that came out in June called Human In The Loop Machine Learning by Robert Monarch. It seems to be getting quite good reception, and I know I would like to go through it. It is from Manning, which is great, because it means that we have a discount code from Manning for our listeners. So if you want 40% off - that's crazy, 40% off...

**Chris Benson:** That's pretty good. That's a good discount.

**Daniel Whitenack:** It's pretty good. You can use the code "podpracticalAI19". That's that book, and we'll put that information in the show notes as well.

**Chris Benson:** That sounds like a good one. I'll offer one as well, which I don't think you'll be surprised when I mention this... There's a book that came out just a few months ago; it's on this topic that we're just finishing up with... It's called A Thousand Brains: A New Theory of Intelligence, and it's by Jeff Hawkins. I have that book, it's a very interesting book, and I definitely recommend if you're wanting to explore some new ideas about where AI could go, it's definitely a book that will stimulate some thoughts. So that's my recommendation, A Thousand Brains by Jeff Hawkins.

**Daniel Whitenack:** Awesome. Well, I'll let you get to your reading, Chris... \[laughter\]

**Chris Benson:** Absolutely.

**Daniel Whitenack:** Thanks for the discussion.

**Chris Benson:** It was a good one today. Thanks, Daniel.
